import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  GripVertical,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Award,
  CheckCircle2,
  HelpCircle,
  X,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { CatPawIcon } from './catPawCursor';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import type { WhiteboardElement, QuestionCardPayload } from '../../types/whiteboard';

interface QuestionCardOverlayProps {
  element: WhiteboardElement;
  isSelected: boolean;
  isReadOnly?: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onToggleCollapse: () => void;
  onToggleRubric: () => void;
  onStartDrag: (e: React.PointerEvent) => void;
  onHeightChange?: (id: string, height: number) => void;
}

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  OSK: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' },
  OSP: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
  OSN: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
  IChO: { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-300' },
};

export const QuestionCardOverlay: React.FC<QuestionCardOverlayProps> = ({
  element,
  isSelected,
  isReadOnly = false,
  onSelect,
  onDelete,
  onToggleCollapse,
  onToggleRubric,
  onStartDrag,
  onHeightChange,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const payload = (element.payload || {}) as QuestionCardPayload;
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const difficulty = payload.difficulty || 'OSN';
  const badgeStyle = DIFFICULTY_COLORS[difficulty] || DIFFICULTY_COLORS.OSN;
  const isCollapsed = Boolean(payload.isCollapsed);
  const showRubric = Boolean(payload.showRubric);

  const cardWidth = element.width || 560;

  // Ukur tinggi aktual kartu DOM secara presisi saat konten, rumus KaTeX, atau collapse berubah
  useLayoutEffect(() => {
    if (!cardRef.current || !onHeightChange) return;

    const measure = () => {
      if (cardRef.current) {
        const h = Math.round(cardRef.current.offsetHeight);
        if (h > 0) {
          onHeightChange(element.id, h);
        }
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [element.id, onHeightChange, isCollapsed, showRubric, cardWidth]);

  return (
    <div
      ref={cardRef}
      style={{
        position: 'absolute',
        left: element.x,
        top: element.y,
        width: cardWidth,
        zIndex: element.zIndex || 10,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={`select-none rounded-2xl transition-shadow font-sans ${
        isSelected
          ? 'ring-2 ring-blue-500 shadow-2xl'
          : 'shadow-lg hover:shadow-xl'
      } bg-white/95 backdrop-blur-md border ${
        isSelected ? 'border-blue-400' : 'border-slate-200/90'
      }`}
    >
      {/* Header Bar: Grip Handle, Badges, & Actions */}
      <div
        onPointerDown={(e) => {
          if (!element.isLocked) {
            onStartDrag(e);
          }
        }}
        className={`px-4 py-2.5 rounded-t-2xl flex items-center justify-between gap-2 border-b border-slate-100 cursor-grab active:cursor-grabbing ${
          isSelected
            ? 'bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-blue-50/40'
            : 'bg-gradient-to-r from-slate-50 via-slate-50/60 to-white'
        }`}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {/* Paw Icon & Drag Grip */}
          <div className="flex items-center text-slate-400 hover:text-slate-600 transition shrink-0">
            <CatPawIcon size={16} className="text-blue-500" />
            <GripVertical size={14} className="opacity-60 -ml-0.5" />
          </div>

          {/* Difficulty Badge */}
          <span
            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border shrink-0 ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
          >
            {difficulty}
          </span>

          {/* Subtopic / Topik Silabus */}
          {(payload.subtopic || payload.pillarNumber) && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 truncate max-w-[180px]">
              {payload.subtopic || `Topik ${payload.pillarNumber}`}
            </span>
          )}

          {/* Total Points */}
          {payload.totalPoints && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
              {payload.totalPoints} Poin
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
          {/* Toggle Rubrik / Pembahasan */}
          <button
            onClick={onToggleRubric}
            className={`p-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
              showRubric
                ? 'bg-amber-100 text-amber-800'
                : 'hover:bg-slate-100 text-slate-500 hover:text-slate-800'
            }`}
            title={showRubric ? 'Sembunyikan Rubrik' : 'Tampilkan Rubrik / Kunci'}
          >
            <HelpCircle size={13} />
            <span className="text-[10px] hidden sm:inline">Rubrik</span>
          </button>

          {/* Collapse / Expand */}
          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition cursor-pointer"
            title={isCollapsed ? 'Bentangkan Soal' : 'Ciutkan Soal'}
          >
            {isCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>

          {/* Delete Element (Hanya jika tidak readonly dan tidak terkunci) */}
          {!isReadOnly && !element.isLocked && (
            <button
              onClick={onDelete}
              className="p-1.5 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition cursor-pointer"
              title="Hapus Kartu Soal dari Whiteboard"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Card Body */}
      {!isCollapsed && (
        <div className="p-4 sm:p-5 space-y-3.5 max-h-[70vh] overflow-y-auto cursor-default">
          {/* Judul & Sumber */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {payload.title}
            </h3>
            {payload.sourceEvent && (
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                Sumber: {payload.sourceEvent}
              </p>
            )}
          </div>

          {/* Narasi Masalah / Deskripsi Utama dengan KaTeX */}
          <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
            <KaTeXRenderer content={payload.questionText} />
          </div>

          {/* Diagram Gambar Soal (jika ada) */}
          {payload.diagramUrl && (
            <div className="border border-slate-200 rounded-xl p-2 bg-white flex flex-col items-center">
              <img
                src={payload.diagramUrl}
                alt="Diagram Soal"
                onClick={() => setIsImageZoomed(!isImageZoomed)}
                className={`rounded-lg object-contain transition-all cursor-zoom-in ${
                  isImageZoomed ? 'max-h-96' : 'max-h-48'
                }`}
              />
              <span className="text-[10px] text-slate-400 mt-1">
                {isImageZoomed ? 'Klik untuk mengecilkan gambar' : 'Klik untuk memperbesar gambar'}
              </span>
            </div>
          )}

          {/* Sub-pertanyaan Lengkap (a, b, c...) */}
          {payload.subQuestions && payload.subQuestions.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>Pertanyaan Terperinci ({payload.subQuestions.length} Butir)</span>
              </div>

              <div className="space-y-2">
                {payload.subQuestions.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/80 rounded-xl p-3 shadow-2xs hover:border-blue-200 transition"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono font-bold text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md border border-blue-100">
                        {sub.label ? `Sub-soal (${sub.label})` : `Poin ${idx + 1}`}
                      </span>
                      {sub.points && (
                        <span className="text-[11px] font-bold text-slate-500">
                          {sub.points} Poin
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-800 leading-relaxed">
                      <KaTeXRenderer content={sub.question_text} />
                    </div>

                    {/* Pembahasan / Rubrik per Sub-soal jika toggled */}
                    {showRubric && (sub.rubric || sub.solution_outline) && (
                      <div className="mt-2 pt-2 border-t border-amber-100 bg-amber-50/60 -mx-3 -mb-3 p-2.5 rounded-b-xl text-[11px] text-amber-900 leading-relaxed">
                        <div className="font-bold flex items-center gap-1 mb-1 text-amber-800">
                          <Sparkles size={11} />
                          Rubrik / Panduan Penskoran:
                        </div>
                        <KaTeXRenderer content={sub.rubric || sub.solution_outline || ''} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collapsible Rubrik Global jika tidak ada per sub-soal */}
          {showRubric && (!payload.subQuestions || payload.subQuestions.length === 0) && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
              <div className="font-bold flex items-center gap-1 mb-1 text-amber-800">
                <Sparkles size={13} />
                Kunci Jawaban & Rubrik Penilaian:
              </div>
              <p className="text-[11px]">
                Gunakan konsep termodinamika & stoikiometri untuk verifikasi hitungan.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Mode Collapsed Banner */}
      {isCollapsed && (
        <div className="px-4 py-2 text-xs text-slate-600 flex items-center justify-between">
          <span className="font-semibold truncate max-w-[420px]">{payload.title}</span>
          <span className="text-[11px] text-slate-400 shrink-0">
            {payload.subQuestions?.length || 0} Sub-soal
          </span>
        </div>
      )}
    </div>
  );
};
