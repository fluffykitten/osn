import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Search,
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Layers,
  Image as ImageIcon,
} from 'lucide-react';
import { questionBankService } from '../../../services/questionBankService';
import { PILLARS_DATA } from '../../../data/syllabusData';
import { KaTeXRenderer } from '../../common/KaTeXRenderer';
import type { Question, QuestionDifficulty } from '../../../types/database';

interface QuestionBankPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (question: Question) => void;
}

const DIFFICULTY_BADGES: Record<string, { bg: string; text: string; border: string; label: string }> = {
  OSK: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', label: 'Tingkat Kab/Kota (OSK)' },
  OSP: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', label: 'Tingkat Provinsi (OSP)' },
  OSN: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', label: 'Tingkat Nasional (OSN)' },
  IChO: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', label: 'Internasional (IChO)' },
  Beginner: { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', label: 'Beginner' },
  Intermediate: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', label: 'Intermediate' },
  Advanced: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Advanced' },
};

export const QuestionBankPickerModal: React.FC<QuestionBankPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPillar, setSelectedPillar] = useState<number | 'ALL'>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuestionDifficulty | 'ALL'>('ALL');
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setIsLoading(true);

    questionBankService
      .getQuestions({
        pillarNumber: selectedPillar,
        difficulty: selectedDifficulty,
        search: searchQuery,
      })
      .then((res) => {
        if (isMounted) {
          setQuestions(res.questions || []);
          if (res.questions.length > 0 && !selectedQuestionId) {
            setSelectedQuestionId(res.questions[0].id);
          }
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Gagal memuat bank soal:', err);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, selectedPillar, selectedDifficulty, searchQuery]);

  const activeQuestion = useMemo(() => {
    return questions.find((q) => q.id === selectedQuestionId) || questions[0] || null;
  }, [questions, selectedQuestionId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden text-slate-800">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <GraduationCap size={22} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Bank Soal Olimpiade Sains
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold border border-blue-200">
                  {questions.length} Soal Tersedia
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Pilih soal lengkap dari silabus OSN Kimia / Sains untuk disisipkan langsung ke papan tulis
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
            title="Tutup Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Bar Filter & Pencarian */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center gap-3">
          {/* Input Pencarian */}
          <div className="relative flex-1 min-w-[220px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik, rumus, teks soal, atau kata kunci..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filter Topik Silabus */}
          <div className="flex items-center gap-1.5">
            <Layers size={15} className="text-slate-500" />
            <select
              value={selectedPillar}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedPillar(val === 'ALL' ? 'ALL' : parseInt(val, 10));
              }}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            >
              <option value="ALL">Semua Topik Silabus (1 - 10)</option>
              {PILLARS_DATA.map((p) => (
                <option key={p.pillar_number} value={p.pillar_number}>
                  Topik {p.pillar_number}: {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Tingkat Kesulitan */}
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl">
            {(['ALL', 'OSK', 'OSP', 'OSN', 'IChO'] as const).map((diff) => {
              const isSelected = selectedDifficulty === diff;
              return (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {diff === 'ALL' ? 'Semua' : diff}
                </button>
              );
            })}
          </div>
        </div>

        {/* Konten Utama: Panel Kiri (Daftar) + Panel Kanan (Pratinjau KaTeX Detail) */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Panel Kiri: List Soal */}
          <div className="w-full md:w-5/12 border-r border-slate-100 overflow-y-auto divide-y divide-slate-100 bg-slate-50/30">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 text-slate-400 gap-2">
                <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-medium">Memuat bank soal silabus...</span>
              </div>
            ) : questions.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                <BookOpen size={36} className="mx-auto mb-2 opacity-40 text-slate-400" />
                <p className="text-sm font-semibold text-slate-600">Tidak ada soal yang cocok</p>
                <p className="text-xs mt-1">Coba sesuaikan kata kunci pencarian atau filter topik silabus.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedPillar('ALL');
                    setSelectedDifficulty('ALL');
                  }}
                  className="mt-3 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-100 transition cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              questions.map((q) => {
                const isSelected = q.id === activeQuestion?.id;
                const badge = DIFFICULTY_BADGES[q.difficulty] || DIFFICULTY_BADGES.OSN;
                const subCount = q.sub_questions?.length || 0;

                return (
                  <div
                    key={q.id}
                    onClick={() => setSelectedQuestionId(q.id)}
                    className={`p-4 transition cursor-pointer border-l-4 ${
                      isSelected
                        ? 'bg-blue-50/70 border-blue-600 shadow-xs'
                        : 'border-transparent hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge.bg} ${badge.text} ${badge.border}`}
                      >
                        {q.difficulty}
                      </span>
                      {(q.subtopic || q.pillar_number) && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 truncate max-w-[160px]">
                          {q.subtopic || `Topik ${q.pillar_number}`}
                        </span>
                      )}
                      {subCount > 0 && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {subCount} Sub-soal
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1 mb-1">
                      {q.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {q.question_text.replace(/\$+/g, '')}
                    </p>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{q.subtopic || 'Topik OSN'}</span>
                      {q.source_event && (
                        <span className="font-medium text-slate-500 truncate max-w-[150px]">
                          {q.source_event}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Panel Kanan: Pratinjau Lengkap dengan KaTeX & Tombol Sisipkan */}
          <div className="hidden md:flex flex-1 flex-col overflow-hidden bg-white">
            {activeQuestion ? (
              <>
                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                  {/* Metadata Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {(() => {
                          const badge = DIFFICULTY_BADGES[activeQuestion.difficulty] || DIFFICULTY_BADGES.OSN;
                          return (
                            <span
                              className={`text-xs font-bold px-2.5 py-0.5 rounded-md border ${badge.bg} ${badge.text} ${badge.border}`}
                            >
                              {badge.label}
                            </span>
                          );
                        })()}
                        {(activeQuestion.subtopic || activeQuestion.pillar_number) && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 truncate max-w-[260px]">
                            {activeQuestion.subtopic || `Topik ${activeQuestion.pillar_number}`}
                          </span>
                        )}
                        {activeQuestion.total_points && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                            Total {activeQuestion.total_points} Poin
                          </span>
                        )}
                      </div>
                      <h1 className="text-lg font-bold text-slate-900">
                        {activeQuestion.title}
                      </h1>
                      {activeQuestion.source_event && (
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">
                          Sumber: {activeQuestion.source_event}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Teks Soal Utama (dengan KaTeX Renderer) */}
                  <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Deskripsi Masalah / Narasi Utama
                    </h4>
                    <div className="text-sm text-slate-800 leading-relaxed font-sans">
                      <KaTeXRenderer content={activeQuestion.question_text} />
                    </div>
                  </div>

                  {/* Diagram Gambar Soal (Jika Tersedia) */}
                  {activeQuestion.diagram_url && (
                    <div className="border border-slate-200 rounded-2xl p-3 bg-white flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-slate-400 self-start mb-2 flex items-center gap-1.5">
                        <ImageIcon size={14} />
                        Diagram Soal Terkait:
                      </span>
                      <img
                        src={activeQuestion.diagram_url}
                        alt="Diagram Soal"
                        className="max-h-52 object-contain rounded-xl border border-slate-100"
                      />
                    </div>
                  )}

                  {/* Rincian Sub-Soal Lengkap (a, b, c...) */}
                  {activeQuestion.sub_questions && activeQuestion.sub_questions.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-emerald-600" />
                        Sub-Pertanyaan Lengkap ({activeQuestion.sub_questions.length} Butir)
                      </h4>
                      <div className="space-y-2">
                        {activeQuestion.sub_questions.map((sub, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-xl p-3.5 hover:border-blue-300 transition shadow-xs"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono font-bold text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md">
                                {sub.label ? `Sub-soal (${sub.label})` : `Poin ${idx + 1}`}
                              </span>
                              {sub.points && (
                                <span className="text-xs font-bold text-slate-600">
                                  {sub.points} Poin
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-800 leading-relaxed">
                              <KaTeXRenderer content={sub.question_text} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action Bar */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Soal akan disisipkan sebagai <span className="font-semibold text-slate-700">Kartu Vektor Interaktif</span> yang dapat digeser dan di-zoom dengan KaTeX tajam.
                  </div>

                  <button
                    onClick={() => {
                      onSelectQuestion(activeQuestion);
                      onClose();
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 flex items-center gap-2 transition cursor-pointer shrink-0 hover:scale-[1.02]"
                  >
                    <Sparkles size={16} />
                    <span>Sisipkan Soal Lengkap ke Whiteboard</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8">
                <BookOpen size={48} className="opacity-30 mb-3" />
                <p className="text-sm font-semibold">Pilih salah satu soal untuk melihat pratinjau</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
