import React, { useState, useRef, useEffect } from 'react';
import { Type, Sparkles, X, Check, Palette, FlaskConical, FileText } from 'lucide-react';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

interface WhiteboardTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string, fontSize: number, color: string) => void;
  initialText?: string;
  initialColor?: string;
  initialFontSize?: number;
}

const FONT_SIZES = [
  { label: 'Kecil', size: 14 },
  { label: 'Normal', size: 18 },
  { label: 'Besar', size: 24 },
  { label: 'Judul', size: 32 },
];

const PRESET_COLORS = [
  '#0f172a', // Slate Dark
  '#2563eb', // Blue
  '#dc2626', // Red
  '#16a34a', // Green
  '#9333ea', // Purple
  '#d97706', // Amber
];

const QUICK_CHEM_SYMBOLS = [
  { label: '→', insert: ' → ', title: 'Panah Reaksi' },
  { label: '⇌', insert: ' ⇌ ', title: 'Kesetimbangan' },
  { label: '⇄', insert: ' ⇄ ', title: 'Bolak-balik' },
  { label: '(aq)', insert: '(aq)', title: 'Fasa Larutan' },
  { label: '(s)', insert: '(s)', title: 'Fasa Padat' },
  { label: '(l)', insert: '(l)', title: 'Fasa Cair' },
  { label: '(g)', insert: '(g)', title: 'Fasa Gas' },
  { label: '⁺', insert: '⁺', title: 'Kation Positif' },
  { label: '⁻', insert: '⁻', title: 'Anion Negatif' },
  { label: '²⁺', insert: '²⁺', title: 'Muatan +2' },
  { label: '²⁻', insert: '²⁻', title: 'Muatan -2' },
  { label: 'Δ', insert: 'Δ', title: 'Delta (Perubahan/Panas)' },
  { label: '°C', insert: '°C', title: 'Derajat Celcius' },
  { label: '\\ce{...}', insert: '\\ce{}', title: 'KaTeX Chemical Equation' },
  { label: 'x²', insert: '²', title: 'Kuadrat / Pangkat 2' },
  { label: 'H₂O', insert: 'H₂O', title: 'Molekul Air' },
];

export const WhiteboardTextModal: React.FC<WhiteboardTextModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialText = '',
  initialColor = '#0f172a',
  initialFontSize = 18,
}) => {
  const [text, setText] = useState(initialText);
  const [fontSize, setFontSize] = useState(initialFontSize);
  const [color, setColor] = useState(initialColor);
  const [mode, setMode] = useState<'chemistry' | 'general'>('chemistry');

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setText(initialText);
      setFontSize(initialFontSize);
      setColor(initialColor);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [isOpen, initialText, initialColor, initialFontSize]);

  if (!isOpen) return null;

  const insertAtCursor = (insertion: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setText((prev) => prev + insertion);
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const next = text.substring(0, start) + insertion + text.substring(end);
    setText(next);
    setTimeout(() => {
      textarea.focus();
      const newPos = start + (insertion === '\\ce{}' ? 4 : insertion.length);
      textarea.setSelectionRange(newPos, newPos);
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim(), fontSize, color);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in select-none">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
              <Type size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Editor Teks</h3>
              <p className="text-[11px] text-slate-500">
                Ketik catatan teks umum atau rumus sains (Kimia, Fisika, Matematika)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition cursor-pointer"
            title="Batal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Mode Selector Pill */}
        <div className="px-5 py-2.5 bg-slate-100/60 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-600">Pilihan Mode:</span>
          <div className="inline-flex bg-white p-0.5 rounded-xl border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setMode('chemistry')}
              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                mode === 'chemistry'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FlaskConical size={13} />
              <span>Kimia & Sains</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('general')}
              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                mode === 'general'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText size={13} />
              <span>Teks Biasa</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-y-auto p-5 space-y-3.5">
          {/* Quick Insert Symbols Strip (Khusus Mode Kimia) */}
          {mode === 'chemistry' && (
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Simbol Rumus Kimia Cepat:
              </div>
              <div className="flex flex-wrap gap-1 p-2 bg-slate-50 border border-slate-200 rounded-xl">
                {QUICK_CHEM_SYMBOLS.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => insertAtCursor(s.insert)}
                    title={s.title}
                    className="px-2 py-1 text-xs font-mono font-bold bg-white hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 text-slate-700 border border-slate-200 rounded-lg shadow-2xs transition active:scale-95 cursor-pointer"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Textarea Input */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold text-slate-700 flex justify-between">
              <span>Isi Teks / Rumus:</span>
              <span className="text-[11px] font-normal text-slate-400">
                {mode === 'chemistry' ? 'Mendukung $...$ atau \\ce{...} & simbol unicode' : 'Format teks multi-baris'}
              </span>
            </label>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={
                mode === 'chemistry'
                  ? 'Contoh: 2H₂ + O₂ → 2H₂O (ΔH = -285.8 kJ/mol) atau \\ce{Fe^3+ + 3OH- -> Fe(OH)3}'
                  : 'Ketik materi catatan pelajaran di sini...'
              }
              rows={4}
              className="w-full p-3 text-sm font-sans text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition leading-relaxed resize-y font-mono"
            />
          </div>

          {/* Live Preview Section */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <Sparkles size={13} className="text-amber-500" />
              <span>Pratinjau Tampilan:</span>
            </label>
            <div
              className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 min-h-[50px] flex items-center text-slate-800 overflow-x-auto"
              style={{ color, fontSize: `${fontSize}px` }}
            >
              {text.trim() ? (
                mode === 'chemistry' && (text.includes('\\ce') || text.includes('$') || text.includes('\\')) ? (
                  <KaTeXRenderer content={text} />
                ) : (
                  <div className="whitespace-pre-wrap leading-relaxed">{text}</div>
                )
              ) : (
                <span className="text-slate-400 text-xs italic font-sans">
                  Pratinjau tampilan akan muncul di sini...
                </span>
              )}
            </div>
          </div>

          {/* Styling Options: Ukuran Font & Warna */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            {/* Ukuran Font */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-600">Ukuran:</span>
              <div className="flex items-center gap-1">
                {FONT_SIZES.map((f) => (
                  <button
                    key={f.size}
                    type="button"
                    onClick={() => setFontSize(f.size)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
                      fontSize === f.size
                        ? 'bg-blue-50 border-blue-500 text-blue-600 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    {f.label} ({f.size}px)
                  </button>
                ))}
              </div>
            </div>

            {/* Warna */}
            <div className="flex items-center gap-1.5">
              <Palette size={14} className="text-slate-400" />
              <div className="flex items-center gap-1.5">
                {PRESET_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`w-6 h-6 rounded-full border-2 transition cursor-pointer ${
                      color === c ? 'scale-110 border-blue-500 ring-2 ring-blue-500/20' : 'border-white shadow-xs'
                    }`}
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={!text.trim()}
              className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 rounded-xl shadow-sm transition flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <Check size={15} />
              <span>Tempel ke Whiteboard</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
