import React, { useState, useRef, useEffect } from 'react';
import { PERIODIC_TABLE_ELEMENTS } from '../../services/periodicTableService';
import { getSharedModalPosition, setSharedModalPosition } from '../../services/modalPositionService';
import { KaTeXRenderer } from './KaTeXRenderer';
import { X, Copy, Check, Sparkles, Scale, Move, ArrowRight } from 'lucide-react';

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
        const target = stack[stack.length - 1];
        for (const [elem, cnt] of Object.entries(currentGroup)) {
          target[elem] = (target[elem] || 0) + cnt * multiplier;
        }
      } else {
        const elemMatch = str.slice(i).match(/^([A-Z][a-z]?)(\d*)/);
        if (elemMatch) {
          const sym = elemMatch[1];
          const cnt = elemMatch[2] ? parseInt(elemMatch[2], 10) : 1;
          const target = stack[stack.length - 1];
          target[sym] = (target[sym] || 0) + cnt;
          i += elemMatch[0].length;
        } else {
          i++;
        }
      }
    }

    return stack[0];
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

  for (const item of breakdown) {
    item.percent = (item.subtotal / totalMass) * 100;
  }

  return {
    result: {
      formula: cleaned,
      totalMass: parseFloat(totalMass.toFixed(3)),
      breakdown,
    },
  };
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

  useEffect(() => {
    if (isOpen) {
      setFormulaInput(initialFormula || 'BaCO3');
      const synchronizedPos = getSharedModalPosition(size.width, size.height);
      setPosition(synchronizedPos);
    }
  }, [isOpen, initialFormula, size.width, size.height]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, input')) return;
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
    if (!isDragging) return;
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
    if (!isResizing || !resizeStartRef.current) return;
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
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        className="pointer-events-auto bg-white/98 backdrop-blur-md rounded-2xl border border-slate-300 shadow-2xl overflow-hidden flex flex-col transition-shadow animate-in zoom-in-95 duration-150 ring-1 ring-slate-900/10 relative max-w-[95vw] max-h-[90vh]"
      >
        {/* Draggable Header (Biru Muda / Sky Gradient) */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white cursor-grab active:cursor-grabbing select-none shadow-xs"
        >
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-sky-100" />
            <span className="font-bold text-xs font-display tracking-wide text-white">
              Kalkulator Massa Molar (Mr)
            </span>
            <span className="px-1.5 py-0.5 text-[9px] bg-white/20 rounded font-mono font-semibold flex items-center gap-1">
              <Move className="w-2.5 h-2.5" />
              <span>Geser Window</span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
            title="Tutup (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-3.5 flex-1 overflow-y-auto min-h-0">
          {/* Formula Input */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Rumus Kimia Senyawa / Ion:
            </label>
            <div className="flex gap-1.5">
              <input
                type="text"
                autoFocus
                value={formulaInput}
                onChange={(e) => setFormulaInput(e.target.value)}
                placeholder="Misal: BaCO3, Ca(OH)2, CuSO4.5H2O"
                className="flex-1 px-3 py-2 text-sm font-mono font-bold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
              {formulaInput && (
                <button
                  type="button"
                  onClick={() => setFormulaInput('')}
                  className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
                  title="Hapus input"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Preset Buttons for High School OSN */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Senyawa Populer OSN:
            </span>
            <div className="flex flex-wrap gap-1">
              {PRESET_COMPOUNDS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFormulaInput(c)}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded-md border transition-all ${
                    formulaInput === c
                      ? 'bg-sky-500 text-white border-sky-500 font-bold shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Results Area */}
          {parsed?.error ? (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {parsed.error}
            </div>
          ) : parsed?.result ? (
            <div className="space-y-3">
              {/* Primary Mr Card (Biru Muda) */}
              <div className="p-3.5 bg-gradient-to-br from-sky-50 to-blue-50/70 border border-sky-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider block">
                    Massa Molar Relatif (Mr):
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-bold font-mono text-sky-950">
                      {parsed.result.totalMass.toFixed(2)}
                    </span>
                    <span className="text-xs font-semibold text-sky-700">g/mol</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-medium block">Format KaTeX:</span>
                  <div className="text-xs font-semibold text-slate-800">
                    <KaTeXRenderer content={`$\\ce{${parsed.result.formula}}$`} inlineOnly />
                  </div>
                </div>
              </div>

              {/* Element Composition Breakdown Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs text-xs">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 font-bold text-[10px] text-slate-500 uppercase tracking-wider flex justify-between">
                  <span>Rincian Komposisi Unsur (Ar)</span>
                  <span>Kadar Massa (%)</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-[160px] overflow-y-auto">
                  {parsed.result.breakdown.map((item) => (
                    <div key={item.sym} className="px-3 py-1.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 text-center font-mono font-bold text-sky-800 bg-sky-50 px-1 py-0.5 rounded text-[11px] border border-sky-100">
                          {item.sym}
                        </span>
                        <span className="text-slate-700 font-medium">{item.name}</span>
                        <span className="text-slate-400 text-[11px] font-mono">
                          ({item.count} × {item.ar.toFixed(2)})
                        </span>
                      </div>
                      <div className="text-right font-mono font-semibold text-slate-800">
                        {item.percent.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Copy Value & Insert into Worksheet */}
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (!parsed?.result) return;
                    handleCopyText(parsed.result.totalMass.toFixed(2), 'nilai');
                  }}
                  className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-2xs active:scale-95"
                >
                  {copiedValue === 'nilai' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-sky-600" />
                      <span className="text-sky-700 font-bold">Tersalin ({parsed.result.totalMass.toFixed(2)})</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Salin Nilai Mr</span>
                    </>
                  )}
                </button>

                {onInsertText && (
                  <button
                    type="button"
                    onClick={handleInsert}
                    className="px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    <span>✓ Sisipkan ke Lembar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-slate-400 text-xs">
              Ketik rumus kimia di atas (contoh: BaCO3 atau Ca(OH)2) untuk menghitung massa molar.
            </div>
          )}
        </div>

        {/* Bottom-Right Resize Grip Handle */}
        <div
          onPointerDown={handleResizePointerDown}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerUp}
          className="absolute bottom-1 right-1 w-5 h-5 cursor-se-resize flex items-center justify-center text-slate-400 hover:text-sky-600 active:text-sky-700 transition-colors select-none z-20 touch-none"
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
      </div>
    </div>
  );
};
