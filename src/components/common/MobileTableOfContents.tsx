/**
 * MobileTableOfContents.tsx
 * Floating Bottom Sheet Navigation for OSN & SMA Chemistry Materials
 * Provides mobile-friendly 3-stage curriculum navigation with touch-optimized targets,
 * active item indicator, smooth scroll targeting, and practice bank launch.
 */

import React, { useState, useEffect } from 'react';
import type { MaterialItem } from '../../data/materialsData';
import type { SmaMaterialItem } from '../../data/smaMaterialsData';
import { KaTeXRenderer } from './KaTeXRenderer';
import {
  ListOrdered,
  X,
  ChevronUp,
  Lightbulb,
  GraduationCap,
  FileCheck,
  ArrowRight,
  Atom,
} from 'lucide-react';

interface MobileTableOfContentsProps {
  material: MaterialItem | SmaMaterialItem;
  activeVisibleTag: string | null;
  onSelectConcept: (tag: string) => void;
  onLaunchWorksheet: () => void;
  isCurrentSma?: boolean;
}

export const MobileTableOfContents: React.FC<MobileTableOfContentsProps> = ({
  material,
  activeVisibleTag,
  onSelectConcept,
  onLaunchWorksheet,
  isCurrentSma = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background body scroll when bottom sheet is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const totalSections =
    material.prerequisites.length +
    material.core_concepts.length +
    material.worked_examples.length;

  const handleItemClick = (tag: string) => {
    onSelectConcept(tag);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Pill Trigger (Mobile Only: lg:hidden) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 lg:hidden pointer-events-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/95 hover:bg-slate-900 text-white rounded-full text-xs font-semibold shadow-xl border border-slate-700/60 backdrop-blur-md active:scale-95 transition-all cursor-pointer ring-2 ring-sky-500/30"
          aria-label="Buka Daftar Isi Topik"
        >
          <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
            <ListOrdered className="w-3.5 h-3.5" />
          </div>
          <span>Daftar Isi</span>
          <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px] text-slate-300 font-mono">
            {totalSections}
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {/* Bottom Sheet Modal & Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs animate-sheet-fade-in"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Daftar Isi Materi"
            className="relative z-10 w-full max-h-[82vh] bg-white rounded-t-3xl shadow-2xl flex flex-col border-t border-slate-200 animate-sheet-slide-up overflow-hidden"
          >
            {/* Grab Handle */}
            <div className="pt-3 pb-1 flex justify-center shrink-0">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </div>

            {/* Sheet Header */}
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Atom className="w-4 h-4 text-sky-600" />
                <h3 className="text-sm font-bold text-slate-900 font-display">
                  Alur Pembelajaran {isCurrentSma ? 'Modul' : 'Topik'} {material.topic_number}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                aria-label="Tutup daftar isi"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Concept List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 overscroll-contain">
              {/* 1. Prasyarat */}
              <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900 px-1">
                  <span className="flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>1. Konsep Prasyarat</span>
                  </span>
                  <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-mono">
                    {material.prerequisites.length} Konsep
                  </span>
                </div>
                <div className="space-y-1">
                  {material.prerequisites.map((p) => {
                    const cleanTitle = (p.title.split(':')[1] || p.title).trim();
                    const isActive = activeVisibleTag === p.tag;
                    return (
                      <button
                        key={p.tag}
                        onClick={() => handleItemClick(p.tag)}
                        className={`w-full text-left flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all leading-snug cursor-pointer border ${
                          isActive
                            ? 'bg-white text-amber-950 font-bold shadow-xs border-amber-300 ring-1 ring-amber-300/60'
                            : 'border-transparent text-slate-600 hover:bg-white/80 active:bg-white/90'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                            isActive ? 'bg-amber-600 scale-125' : 'bg-amber-300'
                          }`}
                        />
                        <span className="flex-1 text-xs">
                          <KaTeXRenderer content={cleanTitle} inlineOnly />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Konsep Inti */}
              <div className="p-3 bg-sky-50/60 border border-sky-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-sky-900 px-1">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                    <span>2. Konsep Inti {isCurrentSma ? 'Materi SMA' : '(OSN / IChO)'}</span>
                  </span>
                  <span className="px-1.5 py-0.5 bg-sky-100 text-sky-800 rounded text-[10px] font-mono">
                    {material.core_concepts.length} Konsep
                  </span>
                </div>
                <div className="space-y-1">
                  {material.core_concepts.map((c) => {
                    const cleanTitle = (c.title.split(':')[1] || c.title).trim();
                    const isActive = activeVisibleTag === c.tag;
                    return (
                      <button
                        key={c.tag}
                        onClick={() => handleItemClick(c.tag)}
                        className={`w-full text-left flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all leading-snug cursor-pointer border ${
                          isActive
                            ? 'bg-white text-sky-950 font-bold shadow-xs border-sky-300 ring-1 ring-sky-300/60'
                            : 'border-transparent text-slate-600 hover:bg-white/80 active:bg-white/90'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                            isActive ? 'bg-sky-600 scale-125' : 'bg-sky-300'
                          }`}
                        />
                        <span className="flex-1 text-xs">
                          <KaTeXRenderer content={cleanTitle} inlineOnly />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Teladan Soal */}
              <div className="p-3 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900 px-1">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>3. {isCurrentSma ? 'Contoh Soal & Solusi SMA' : 'Teladan Soal OSN'}</span>
                  </span>
                  <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-mono">
                    {material.worked_examples.length} Soal
                  </span>
                </div>
                <div className="space-y-1">
                  {material.worked_examples.map((e) => {
                    const cleanTitle = (e.title.split(':')[1] || e.title).trim();
                    const isActive = activeVisibleTag === e.tag;
                    return (
                      <button
                        key={e.tag}
                        onClick={() => handleItemClick(e.tag)}
                        className={`w-full text-left flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all leading-snug cursor-pointer border ${
                          isActive
                            ? 'bg-white text-emerald-950 font-bold shadow-xs border-emerald-300 ring-1 ring-emerald-300/60'
                            : 'border-transparent text-slate-600 hover:bg-white/80 active:bg-white/90'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                            isActive ? 'bg-emerald-600 scale-125' : 'bg-emerald-300'
                          }`}
                        />
                        <span className="flex-1 text-xs">
                          <KaTeXRenderer content={cleanTitle} inlineOnly />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pinned Bottom Action Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/80 shrink-0">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLaunchWorksheet();
                }}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  Latihan Soal {isCurrentSma ? `Modul ${material.topic_number}` : `Topik ${material.topic_number}`} di Bank Soal
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileTableOfContents;
