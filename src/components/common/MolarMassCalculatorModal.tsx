import React, { useState, useRef, useEffect } from 'react';
import { PERIODIC_TABLE_ELEMENTS } from '../../services/periodicTableService';
import { getSharedModalPosition, setSharedModalPosition } from '../../services/modalPositionService';
import { trackAchievementEvent } from '../../services/achievementService';
import { KaTeXRenderer } from './KaTeXRenderer';
import { X, Copy, Check, Scale, Move, ArrowRight, AlertCircle } from 'lucide-react';

interface ElementBreakdown {
  sym: string;
  name: string;
  ar: number;
  count: number;
  subtotal: number;
  percent: number;
}

export interface MolarMassResult {
  formula: string;
  totalMass: number;
  breakdown: ElementBreakdown[];
}

export function parseChemicalFormula(formula: string): { result?: MolarMassResult; error?: string } | null {
  if (!formula) return null;
  const cleaned = formula.trim().replace(/\s+/g, '');
  if (!cleaned) return null;

  try {
    let mainPart = cleaned;
    let hydrateMultiplier = 0;
    let hydrateFormula = '';

    if (cleaned.includes('.')) {
      const parts = cleaned.split('.');
      mainPart = parts[0];
      const hydratePart = parts.slice(1).join('.');
      const m = hydratePart.match(/^(\d*)(.*)$/);
      if (m) {
        hydrateMultiplier = m[1] ? parseInt(m[1], 10) : 1;
        hydrateFormula = m[2] || 'H2O';
      }
    } else if (cleaned.includes('*')) {
      const parts = cleaned.split('*');
      mainPart = parts[0];
      const hydratePart = parts.slice(1).join('*');
      const m = hydratePart.match(/^(\d*)(.*)$/);
      if (m) {
        hydrateMultiplier = m[1] ? parseInt(m[1], 10) : 1;
        hydrateFormula = m[2] || 'H2O';
      }
    }

    function parsePart(str: string): Record<string, number> {
      const stack: Record<string, number>[] = [{}];
      let i = 0;

      while (i < str.length) {
        if (str[i] === '(' || str[i] === '[') {
          stack.push({});
          i++;
        } else if (str[i] === ')' || str[i] === ']') {
          const currentGroup = stack.pop() || {};
          i++;
          let numStr = '';
          while (i < str.length && /\d/.test(str[i])) {
            numStr += str[i];
            i++;
          }
          const multiplier = numStr ? parseInt(numStr, 10) : 1;
          if (stack.length === 0) {
            stack.push({});
          }
          const target = stack[stack.length - 1];
          for (const [elem, cnt] of Object.entries(currentGroup)) {
            target[elem] = (target[elem] || 0) + cnt * multiplier;
          }
        } else {
          const elemMatch = str.slice(i).match(/^([A-Z][a-z]?)(\d*)/);
          if (elemMatch) {
            const sym = elemMatch[1];
            const cnt = elemMatch[2] ? parseInt(elemMatch[2], 10) : 1;
            if (stack.length === 0) {
              stack.push({});
            }
            const target = stack[stack.length - 1];
            target[sym] = (target[sym] || 0) + cnt;
            i += elemMatch[0].length;
          } else {
            i++;
          }
        }
      }

      // Merge unclosed parentheses if any
      while (stack.length > 1) {
        const top = stack.pop() || {};
        const target = stack[stack.length - 1];
        for (const [elem, cnt] of Object.entries(top)) {
          target[elem] = (target[elem] || 0) + cnt;
        }
      }

      return stack[0] || {};
    }

    const counts = parsePart(mainPart);

    if (hydrateMultiplier > 0 && hydrateFormula) {
      const hCounts = parsePart(hydrateFormula);
      for (const [elem, cnt] of Object.entries(hCounts)) {
        counts[elem] = (counts[elem] || 0) + cnt * hydrateMultiplier;
      }
    }

    let totalMass = 0;
    const breakdown: ElementBreakdown[] = [];

    for (const [sym, count] of Object.entries(counts)) {
      const el = PERIODIC_TABLE_ELEMENTS[sym];
      if (!el) {
        return { error: `Simbol unsur "${sym}" tidak dikenali dalam tabel periodik.` };
      }
      const subtotal = el.mass * count;
      totalMass += subtotal;
      breakdown.push({
        sym,
        name: el.nameId || el.name,
        ar: el.mass,
        count,
        subtotal,
        percent: 0,
      });
    }

    if (breakdown.length === 0) return null;

    if (totalMass > 0) {
      for (const item of breakdown) {
        item.percent = (item.subtotal / totalMass) * 100;
      }
    }

    return {
      result: {
        formula: cleaned,
        totalMass: parseFloat(totalMass.toFixed(3)),
        breakdown,
      },
    };
  } catch {
    return { error: 'Rumus kimia belum valid atau tidak dapat diurai.' };
  }
}

interface MolarMassCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertText?: (text: string) => void;
  initialFormula?: string;
}

const PRESET_COMPOUNDS = [
  'BaCO3',
  'CaCO3',
  'KMnO4',
  'Ca(OH)2',
  'H2SO4',
  'C6H12O6',
  'CH3COOH',
  'CuSO4.5H2O',
  'NaCl',
  'Fe2(SO4)3',
];

export const MolarMassCalculatorModal: React.FC<MolarMassCalculatorModalProps> = ({
  isOpen,
  onClose,
  onInsertText,
  initialFormula = 'BaCO3',
}) => {
  const [formulaInput, setFormulaInput] = useState(initialFormula);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  // Draggable window state synchronized with shared modal position
  const [position, setPosition] = useState<{ x: number; y: number }>(() => getSharedModalPosition(460, 480));
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });

  const [size, setSize] = useState<{ width: number; height: number }>({ width: 460, height: 520 });
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartRef = useRef<{ startX: number; startY: number; startW: number; startH: number } | null>(null);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  const lastTrackedFormulaRef = useRef<string>('');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setFormulaInput(initialFormula || 'BaCO3');
      const synchronizedPos = getSharedModalPosition(size.width, size.height);
      setPosition(synchronizedPos);
    }
  }, [isOpen, initialFormula, size.width, size.height]);

  // Track achievement safely at top level (never after conditional return)
  useEffect(() => {
    if (!isOpen) return;
    const parsed = parseChemicalFormula(formulaInput);
    if (parsed?.result && parsed.result.formula !== lastTrackedFormulaRef.current) {
      lastTrackedFormulaRef.current = parsed.result.formula;
      trackAchievementEvent(undefined, 'MR_CALCULATED', {
        formula: parsed.result.formula,
        totalMass: parsed.result.totalMass,
      }).catch(() => {});
    }
  }, [isOpen, formulaInput]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMobile || (e.target as HTMLElement).closest('button, input')) return;
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: position.x,
      initY: position.y,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isMobile) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    const newX = Math.max(10, Math.min(window.innerWidth - 320, dragStartRef.current.initX + dx));
    const newY = Math.max(10, Math.min(window.innerHeight - 200, dragStartRef.current.initY + dy));
    const newPos = { x: newX, y: newY };
    setPosition(newPos);
    setSharedModalPosition(newPos);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Handle Resizing
  const handleResizePointerDown = (e: React.PointerEvent) => {
    if (isMobile) return;
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    resizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: size.width,
      startH: size.height,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleResizePointerMove = (e: React.PointerEvent) => {
    if (!isResizing || !resizeStartRef.current || isMobile) return;
    const deltaX = e.clientX - resizeStartRef.current.startX;
    const deltaY = e.clientY - resizeStartRef.current.startY;
    const minW = 340;
    const maxW = Math.min(850, window.innerWidth - 20);
    const minH = 300;
    const maxH = Math.min(850, window.innerHeight - 30);

    const newW = Math.min(Math.max(minW, resizeStartRef.current.startW + deltaX), maxW);
    const newH = Math.min(Math.max(minH, resizeStartRef.current.startH + deltaY), maxH);
    setSize({ width: newW, height: newH });
  };

  const handleResizePointerUp = (e: React.PointerEvent) => {
    setIsResizing(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  const parsed = parseChemicalFormula(formulaInput);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(label);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const handleInsert = () => {
    if (!parsed?.result || !onInsertText) return;
    const textToInsert = `$M_r(\\ce{${parsed.result.formula}}) = ${parsed.result.totalMass.toFixed(2)}\\text{ g/mol}$`;
    onInsertText(textToInsert);
    onClose();
  };

  return (
    <div
      className={
        isMobile
          ? 'fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200 pointer-events-auto select-none'
          : 'fixed inset-0 z-50 pointer-events-none select-none'
      }
    >
      {/* Mobile backdrop tap to close */}
      {isMobile && <div className="flex-1" onClick={onClose} />}

      <div
        style={
          isMobile
            ? { maxHeight: '88vh' }
            : {
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                width: `${size.width}px`,
                height: `${size.height}px`,
              }
        }
        className={
          isMobile
            ? 'pointer-events-auto bg-[#FFFFF0] rounded-t-3xl border-t-2 border-[#B0C4DE] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-250 w-full relative'
            : 'pointer-events-auto bg-[#FFFFF0] backdrop-blur-md rounded-2xl border-2 border-[#B0C4DE] shadow-2xl overflow-hidden flex flex-col transition-shadow animate-in zoom-in-95 duration-150 ring-1 ring-[#2D3748]/10 relative max-w-[95vw] max-h-[90vh]'
        }
      >
        {/* Mobile Grab Pill Bar */}
        {isMobile && (
          <div className="w-full flex justify-center pt-2 pb-1 bg-[#2D3748]">
            <div className="w-10 h-1 rounded-full bg-white/30" />
          </div>
        )}

        {/* Header (Serene Deep Slate & Warm Gold Accent) */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`flex items-center justify-between px-4 py-3 bg-[#2D3748] text-[#FFFFF0] select-none shadow-xs border-b border-[#B0C4DE]/30 ${
            isMobile ? '' : 'cursor-grab active:cursor-grabbing'
          }`}
        >
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#D4A359]" />
            <span className="font-bold text-xs font-display tracking-wide text-[#FFFFF0]">
              Kalkulator Massa Molar (Mr)
            </span>
            {!isMobile && (
              <span className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded font-mono font-semibold flex items-center gap-1 text-[#B0C4DE]">
                <Move className="w-2.5 h-2.5" />
                <span>Geser Window</span>
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#B0C4DE] hover:text-[#FFFFF0] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            title="Tutup (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-3.5 flex-1 overflow-y-auto min-h-0 bg-[#FFFFF0]">
          {/* Formula Input */}
          <div>
            <label className="block text-[11px] font-bold text-[#2D3748] uppercase tracking-wider mb-1">
              Rumus Kimia Senyawa / Ion:
            </label>
            <div className="flex gap-1.5">
              <input
                type="text"
                autoFocus
                value={formulaInput}
                onChange={(e) => setFormulaInput(e.target.value)}
                placeholder="Misal: BaCO3, Ca(OH)2, CuSO4.5H2O"
                className="flex-1 px-3 py-2 text-sm font-mono font-bold text-[#2D3748] bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 focus:border-[#D4A359] placeholder:text-[#708090]/60 transition-colors"
              />
              {formulaInput && (
                <button
                  type="button"
                  onClick={() => setFormulaInput('')}
                  className="px-2.5 py-1 text-xs text-[#708090] hover:text-[#2D3748] hover:bg-[#B0C4DE]/20 rounded-lg transition-colors cursor-pointer"
                  title="Hapus input"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Preset Buttons for High School OSN */}
          <div>
            <span className="text-[10px] font-bold text-[#708090] uppercase tracking-wider block mb-1">
              Senyawa Populer OSN:
            </span>
            <div className="flex flex-wrap gap-1">
              {PRESET_COMPOUNDS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFormulaInput(c)}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded-md border transition-all cursor-pointer ${
                    formulaInput === c
                      ? 'bg-[#2D3748] text-[#FFFFF0] border-[#2D3748] font-bold shadow-2xs'
                      : 'bg-[#F0F8FF] hover:bg-[#E6F0FA] text-[#2D3748] border-[#B0C4DE]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Results Area */}
          {parsed?.error ? (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{parsed.error}</span>
            </div>
          ) : parsed?.result ? (
            <div className="space-y-3">
              {/* Primary Mr Card (Serene Alice Blue & Light Steel Blue) */}
              <div className="p-3.5 bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#708090] uppercase tracking-wider block">
                    Massa Molar Relatif (Mr):
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-bold font-mono text-[#2D3748]">
                      {parsed.result.totalMass.toFixed(2)}
                    </span>
                    <span className="text-xs font-semibold text-[#708090]">g/mol</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#708090] font-medium block">Format KaTeX:</span>
                  <div className="text-xs font-semibold text-[#2D3748]">
                    <KaTeXRenderer content={`\\ce{${parsed.result.formula}}`} inlineOnly />
                  </div>
                </div>
              </div>

              {/* Element Composition Breakdown Table */}
              <div className="border border-[#B0C4DE] rounded-xl overflow-hidden bg-[#FFFFF0] shadow-2xs text-xs">
                <div className="bg-[#F0F8FF] px-3 py-1.5 border-b border-[#B0C4DE] font-bold text-[10px] text-[#708090] uppercase tracking-wider flex justify-between">
                  <span>Rincian Komposisi Unsur (Ar)</span>
                  <span>Kadar Massa (%)</span>
                </div>
                <div className="divide-y divide-[#B0C4DE]/40 max-h-[160px] overflow-y-auto">
                  {parsed.result.breakdown.map((item) => (
                    <div key={item.sym} className="px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#F0F8FF]/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-6 text-center font-mono font-bold text-[#2D3748] bg-[#F0F8FF] px-1 py-0.5 rounded text-[11px] border border-[#B0C4DE]">
                          {item.sym}
                        </span>
                        <span className="text-[#2D3748] font-medium">{item.name}</span>
                        <span className="text-[#708090] text-[11px] font-mono">
                          ({item.count} × {item.ar.toFixed(2)})
                        </span>
                      </div>
                      <div className="text-right font-mono font-semibold text-[#2D3748]">
                        {item.percent.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Copy Value & Insert into Worksheet */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (!parsed?.result) return;
                    handleCopyText(parsed.result.totalMass.toFixed(2), 'nilai');
                  }}
                  className="px-3 py-2 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#2D3748] border border-[#B0C4DE] rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  {copiedValue === 'nilai' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2E6930]" />
                      <span className="text-[#2E6930] font-bold">Tersalin ({parsed.result.totalMass.toFixed(2)})</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#708090]" />
                      <span>Salin Nilai Mr</span>
                    </>
                  )}
                </button>

                {onInsertText && (
                  <button
                    type="button"
                    onClick={handleInsert}
                    className="px-3 py-2 bg-[#2E6930] hover:bg-[#255527] text-[#FFFFF0] border border-[#2E6930] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>✓ Sisipkan ke Lembar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-[#708090] text-xs">
              Ketik rumus kimia di atas (contoh: BaCO3 atau Ca(OH)2) untuk menghitung massa molar.
            </div>
          )}
        </div>

        {/* Bottom-Right Resize Grip Handle (Desktop Only) */}
        {!isMobile && (
          <div
            onPointerDown={handleResizePointerDown}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            className="absolute bottom-1 right-1 w-5 h-5 cursor-se-resize flex items-center justify-center text-[#708090] hover:text-[#2D3748] active:text-[#2D3748] transition-colors select-none z-20 touch-none"
            title="Tarik untuk mengubah ukuran (Resize)"
          >
            <svg viewBox="0 0 6 6" className="w-2.5 h-2.5 fill-current">
              <circle cx="5" cy="5" r="0.75" />
              <circle cx="5" cy="3" r="0.75" />
              <circle cx="3" cy="5" r="0.75" />
              <circle cx="5" cy="1" r="0.75" />
              <circle cx="3" cy="3" r="0.75" />
              <circle cx="1" cy="5" r="0.75" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
