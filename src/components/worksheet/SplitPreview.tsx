import React, { useState, useRef } from 'react';
import { ChemToolbar } from './ChemToolbar';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { PeriodicTableDrawer } from '../common/PeriodicTableDrawer';
import { MolarMassCalculatorModal } from '../common/MolarMassCalculatorModal';
import { Maximize2, Minimize2, Eye, Edit3, Sparkles } from 'lucide-react';

interface SplitPreviewProps {
  stepsValue: string;
  onStepsChange: (val: string) => void;
  finalAnswerValue: string;
  onFinalAnswerChange: (val: string) => void;
  isZenMode?: boolean;
  onToggleZenMode?: () => void;
  placeholder?: string;
  className?: string;
}

export const SplitPreview: React.FC<SplitPreviewProps> = ({
  stepsValue,
  onStepsChange,
  finalAnswerValue,
  onFinalAnswerChange,
  isZenMode = false,
  onToggleZenMode,
  placeholder = 'Ketik langkah penalaran kimia dan perhitungan Anda di sini...\nContoh:\nPersamaan reaksi setara:\n$\\ce{2KMnO4 + 16HCl -> 2KCl + 2MnCl2 + 5Cl2 + 8H2O}$\n\nMol gas ideal:\n$n = \\frac{PV}{RT} = \\frac{1.0 \\times 2.45}{0.082 \\times 298} = 0.10\\text{ mol}$',
  className = '',
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [mobileTab, setMobileTab] = useState<'editor' | 'preview'>('editor');
  const [isPeriodicOpen, setIsPeriodicOpen] = useState(false);
  const [isMolarMassOpen, setIsMolarMassOpen] = useState(false);

  const handleInsertText = (text: string) => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const current = el.value;
    const updated = current.substring(0, start) + text + current.substring(end);
    onStepsChange(updated);
    el.focus();
    setTimeout(() => {
      el.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  return (
    <div className={`flex flex-col bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden ${className}`}>
      {/* Top Header Bar: Zen Mode Toggle & Mobile Tab Switcher */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs font-semibold">
        {/* Mobile View Toggle (hidden on md and above) */}
        <div className="flex md:hidden items-center bg-slate-200/80 p-0.5 rounded-lg">
          <button
            type="button"
            onClick={() => setMobileTab('editor')}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all ${
              mobileTab === 'editor' ? 'bg-white text-sky-800 shadow-2xs font-bold' : 'text-slate-600'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editor</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('preview')}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all ${
              mobileTab === 'preview' ? 'bg-white text-sky-800 shadow-2xs font-bold' : 'text-slate-600'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Pratinjau</span>
          </button>
        </div>

        {/* Desktop Header Labels */}
        <div className="hidden md:flex items-center gap-6 text-slate-500 font-medium">
          <span>Langkah Pengerjaan (Editor Formula KaTeX)</span>
          <span className="hidden lg:inline text-slate-300">|</span>
          <span className="hidden lg:inline text-sky-600 flex items-center gap-1 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            Live mhchem Preview
          </span>
        </div>

        {/* Zen Focus Mode Button */}
        {onToggleZenMode && (
          <button
            type="button"
            onClick={onToggleZenMode}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              isZenMode
                ? 'bg-sky-600 text-white shadow-2xs hover:bg-sky-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title={isZenMode ? 'Keluar dari Mode Zen Focus' : 'Masuk ke Mode Zen Focus (Layar Penuh Bebas Distraksi)'}
          >
            {isZenMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isZenMode ? 'Keluar Zen Mode' : 'Zen Mode'}</span>
          </button>
        )}
      </div>

      {/* ChemToolbar Attached on Top of Textarea */}
      <ChemToolbar
        textareaRef={textareaRef}
        onValueChange={onStepsChange}
        onOpenPeriodicTable={() => setIsPeriodicOpen(true)}
        onOpenMolarMass={() => setIsMolarMassOpen(true)}
      />

      {/* Split-Screen Main Content Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-h-[360px]">
        {/* Left Column: Textarea Editor */}
        <div className={`flex flex-col p-3 bg-white ${mobileTab === 'preview' ? 'hidden md:flex' : 'flex'}`}>
          <div className="flex-1 flex flex-col">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Langkah Penalaran & Perhitungan:
            </label>
            <textarea
              ref={textareaRef}
              value={stepsValue}
              onChange={(e) => onStepsChange(e.target.value)}
              placeholder={placeholder}
              rows={isZenMode ? 14 : 10}
              className="w-full flex-1 p-3 text-sm font-mono text-slate-900 bg-slate-50/50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 leading-relaxed resize-y placeholder:text-slate-400 placeholder:font-sans"
            />
          </div>

          {/* Final Answer Input Box */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Jawaban Akhir / Senyawa Final:
            </label>
            <input
              type="text"
              value={finalAnswerValue}
              onChange={(e) => onFinalAnswerChange(e.target.value)}
              placeholder="Contoh: 0.45 mol atau \ce{CH3COOH} atau 2.45 g"
              className="w-full px-3 py-2 text-sm font-mono font-medium text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">
              Jawaban akhir ini akan divalidasi terhadap kunci rubrik dengan toleransi numerik ±2%.
            </span>
          </div>
        </div>

        {/* Right Column: Live KaTeX Preview */}
        <div className={`flex flex-col p-4 bg-slate-50/40 overflow-y-auto ${mobileTab === 'editor' ? 'hidden md:flex' : 'flex'}`}>
          <label className="text-[11px] font-semibold text-sky-800 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky-600" />
            <span>Hasil Render Formula & Notasi:</span>
          </label>

          <div className="flex-1 bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4 min-h-[200px]">
            {stepsValue ? (
              <div className="text-sm">
                <KaTeXRenderer content={stepsValue} />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 py-12">
                <p className="text-xs">Formula yang Anda ketik di editor sebelah kiri akan otomatis dirender di sini.</p>
                <p className="text-[11px] text-slate-300 mt-1">Mendukung KaTeX {'\\ce{...}'}, pecahan, panah reaksi, dan eksponen.</p>
              </div>
            )}

            {/* Render Final Answer Preview */}
            {finalAnswerValue && (
              <div className="pt-3 border-t border-dashed border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Render Jawaban Akhir:
                </div>
                <div className="p-2.5 bg-sky-50/80 border border-sky-200 rounded-lg text-sky-950 font-semibold text-sm">
                  <KaTeXRenderer content={finalAnswerValue} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Periodic Table Slide-over Drawer */}
      <PeriodicTableDrawer
        isOpen={isPeriodicOpen}
        onClose={() => setIsPeriodicOpen(false)}
        onInsertText={handleInsertText}
      />

      {/* Floating & Draggable Molar Mass Calculator Modal */}
      <MolarMassCalculatorModal
        isOpen={isMolarMassOpen}
        onClose={() => setIsMolarMassOpen(false)}
        onInsertText={handleInsertText}
      />
    </div>
  );
};
