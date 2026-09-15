import React, { useState } from 'react';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { tagAndBookmarkService } from '../../services/tagAndBookmarkService';
import {
  Bookmark,
  Clock,
  Award,
  Layers,
  Check,
  Plus,
  Eye,
  Tag as TagIcon,
  X,
  Printer,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import type { Question, QuestionDifficulty } from '../../types/database';

interface QuestionBankBrowserProps {
  questions: Question[];
  selectedQuestionIds: number[];
  onToggleSelect: (questionId: number) => void;
  onRefresh?: () => void;
}

export const QuestionBankBrowser: React.FC<QuestionBankBrowserProps> = ({
  questions,
  selectedQuestionIds,
  onToggleSelect,
  onRefresh,
}) => {
  const [activeModalQuestion, setActiveModalQuestion] = useState<Question | null>(null);
  const [newTagInput, setNewTagInput] = useState('');

  const handleToggleBookmark = async (e: React.MouseEvent, qId: number) => {
    e.stopPropagation();
    await tagAndBookmarkService.toggleBookmark(qId);
    if (onRefresh) onRefresh();
  };

  const handleAddTagToQuestion = async (qId: number) => {
    if (!newTagInput.trim()) return;
    await tagAndBookmarkService.addCustomTag(qId, newTagInput.trim());
    setNewTagInput('');
    if (activeModalQuestion && activeModalQuestion.id === qId) {
      setActiveModalQuestion({
        ...activeModalQuestion,
        custom_tags: tagAndBookmarkService.getCustomTags(qId),
      });
    }
    if (onRefresh) onRefresh();
  };

  const handleRemoveTagFromQuestion = async (qId: number, tag: string) => {
    await tagAndBookmarkService.removeCustomTag(qId, tag);
    if (activeModalQuestion && activeModalQuestion.id === qId) {
      setActiveModalQuestion({
        ...activeModalQuestion,
        custom_tags: tagAndBookmarkService.getCustomTags(qId),
      });
    }
    if (onRefresh) onRefresh();
  };

  const getDifficultyBadge = (diff: QuestionDifficulty) => {
    switch (diff) {
      case 'OSK':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'OSP':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'OSN':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'IChO':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-4">
      {questions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-slate-800 font-display">
            Tidak Ada Soal yang Sesuai Filter
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Coba sesuaikan kata kunci pencarian, tingkat kompetisi, atau hilangkan beberapa filter pilar.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {questions.map((q) => {
            const isSelected = selectedQuestionIds.includes(q.id);
            const isBookmarked = tagAndBookmarkService.isBookmarked(q.id);
            const customTags = tagAndBookmarkService.getCustomTags(q.id);

            return (
              <div
                key={q.id}
                onClick={() => onToggleSelect(q.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative group ${
                  isSelected
                    ? 'bg-emerald-50/30 border-emerald-400 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  {/* Checkbox & Header Badges */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSelect(q.id);
                      }}
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'border-2 border-slate-300 hover:border-emerald-500 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>

                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md border font-mono ${getDifficultyBadge(
                        q.difficulty
                      )}`}
                    >
                      {q.difficulty}
                    </span>

                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono">
                      Topik #{q.pillar_number}
                    </span>

                    <span className="text-xs font-semibold text-slate-500">
                      {q.subtopic}
                    </span>
                  </div>

                  {/* Bookmark & Detail Button */}
                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={(e) => handleToggleBookmark(e, q.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-50'
                          : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                      }`}
                      title={isBookmarked ? 'Hapus Bookmark' : 'Tandai Soal (Bookmark)'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveModalQuestion(q)}
                      className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all"
                      title="Lihat Detail & Rubrik Soal"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">Preview</span>
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 group-hover:text-emerald-950 transition-colors">
                  {q.title}
                </h4>

                {/* Snippet rendered with KaTeX */}
                <div className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  <KaTeXRenderer content={q.question_text.slice(0, 240) + '...'} />
                </div>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-700 font-bold font-mono">
                      <Award className="w-3.5 h-3.5" />
                      <span>{q.total_points || 10} Poin</span>
                    </span>

                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{q.estimated_time_minutes || 15} Menit</span>
                    </span>

                    {q.sub_questions && q.sub_questions.length > 0 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                        {q.sub_questions.length} Sub-Soal ({q.sub_questions.map((s) => s.label).join(', ')})
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-1 overflow-hidden">
                    {customTags.slice(0, 2).map((ct) => (
                      <span
                        key={ct}
                        className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-mono font-medium border border-emerald-200/60"
                      >
                        {ct}
                      </span>
                    ))}
                    {q.year && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                        {q.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Preview Detail & Rubrik Soal */}
      {activeModalQuestion && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModalQuestion(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono ${getDifficultyBadge(
                    activeModalQuestion.difficulty
                  )}`}
                >
                  {activeModalQuestion.difficulty}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-200/80 text-slate-800 font-mono">
                  Topik #{activeModalQuestion.pillar_number}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeModalQuestion.source_event || 'Silabus Puspresnas'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleSelect(activeModalQuestion.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    selectedQuestionIds.includes(activeModalQuestion.id)
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  {selectedQuestionIds.includes(activeModalQuestion.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Terpilih di Worksheet</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Pilih Soal Ini</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveModalQuestion(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                  {activeModalQuestion.title}
                </h3>
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70 text-slate-800 text-xs sm:text-sm leading-relaxed">
                  <KaTeXRenderer content={activeModalQuestion.question_text} />
                </div>
              </div>

              {/* Sub questions if any */}
              {activeModalQuestion.sub_questions &&
                activeModalQuestion.sub_questions.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
                      Rincian Sub-Pertanyaan:
                    </h5>
                    <div className="space-y-2.5">
                      {activeModalQuestion.sub_questions.map((sq) => (
                        <div
                          key={sq.label}
                          className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-800 font-mono">
                              Bagian ({sq.label})
                            </span>
                            <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              {sq.points} Poin
                            </span>
                          </div>
                          <div className="text-xs text-slate-700">
                            <KaTeXRenderer content={sq.question_text} />
                          </div>
                          {sq.rubric && (
                            <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg mt-1 border border-slate-100">
                              <span className="font-semibold text-slate-700">Rubrik: </span>
                              {sq.rubric}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Expected answer & Rubric */}
              {activeModalQuestion.expected_final_answer && (
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Jawaban Akhir yang Diharapkan:</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-950 bg-white p-2.5 rounded-xl border border-emerald-100">
                    <KaTeXRenderer content={activeModalQuestion.expected_final_answer} />
                  </div>
                </div>
              )}

              {/* Solution Rubric */}
              {activeModalQuestion.solution_rubric && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
                    Rubrik & Kunci Pengerjaan Terperinci:
                  </h5>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed">
                    <KaTeXRenderer content={activeModalQuestion.solution_rubric} />
                  </div>
                </div>
              )}

              {/* Tag Management in Modal */}
              <div className="pt-4 border-t border-slate-200">
                <label className="text-xs font-bold text-slate-800 block mb-2">
                  Kelola Tag Guru pada Soal Ini:
                </label>
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  {(activeModalQuestion.custom_tags || []).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-mono font-semibold flex items-center gap-1.5"
                    >
                      <span>{t}</span>
                      <button
                        onClick={() => handleRemoveTagFromQuestion(activeModalQuestion.id, t)}
                        className="hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    placeholder="Tambah tag khusus (contoh: #tryout-provinsi)..."
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTagToQuestion(activeModalQuestion.id);
                      }
                    }}
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    onClick={() => handleAddTagToQuestion(activeModalQuestion.id)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
                  >
                    Simpan Tag
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                ID Soal: #{activeModalQuestion.id}
              </span>
              <button
                onClick={() => setActiveModalQuestion(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-all"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
