import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  CheckSquare,
  Square,
  Zap,
  BookOpen,
  Award,
  Layers,
  ChevronRight,
  Tag,
  Search,
} from 'lucide-react';
import type { Question } from '../../types/database';
import type { SavedSubmissionRecord } from '../../services/submissionService';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { normalizeDifficultyTier } from '../../utils/practiceDataUtils';

interface TopicQuestionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  topicNumber: number;
  category: string;
  database: 'osn' | 'sma';
  questions: Question[];
  submissions: SavedSubmissionRecord[];
  onStartPractice: (questionIds: number[]) => void;
}

// Helper excerpt untuk cuplikan teks soal di drawer
const getDrawerExcerpt = (text: string): string => {
  if (!text) return '';
  // 1. Hilangkan daftar opsi ganda (A., B., C., D., E.) agar tidak memenuhi cuplikan
  const withoutOptions = text.split(/\n\s*[A-E]\.\s+/)[0].trim();
  // 2. Ubah display math $$...$$ menjadi inline $...$ agar mengalir serasi tanpa blok margin besar
  return withoutOptions.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => `$${math.trim()}$`);
};

export const TopicQuestionDrawer: React.FC<TopicQuestionDrawerProps> = ({
  isOpen,
  onClose,
  topicTitle,
  topicNumber,
  category,
  database,
  questions,
  submissions,
  onStartPractice,
}) => {
  const isSma = database === 'sma';

  // Submissions Map per question ID (simpan skor terbaik)
  const submissionMap = useMemo(() => {
    const map = new Map<number, SavedSubmissionRecord>();
    submissions.forEach((s) => {
      const prev = map.get(s.questionId);
      if (!prev || s.scorePercentage > prev.scorePercentage) {
        map.set(s.questionId, s);
      }
    });
    return map;
  }, [submissions]);

  // Drawer Internal Filter State
  const [statusFilter, setStatusFilter] = useState<'all' | 'unattempted' | 'attempted'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Questions for Batch Practice
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Reset filter & selection saat drawer dibuka untuk topik baru
  useEffect(() => {
    if (isOpen) {
      setSelectedIds([]);
      setStatusFilter('all');
      setDifficultyFilter('all');
      setSearchQuery('');
    }
  }, [isOpen, topicNumber, database]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const sub = submissionMap.get(q.id);
      const isAttempted = Boolean(sub);

      // Status Filter
      if (statusFilter === 'attempted' && !isAttempted) return false;
      if (statusFilter === 'unattempted' && isAttempted) return false;

      // Difficulty Tier Filter
      if (difficultyFilter !== 'all') {
        const tier = normalizeDifficultyTier(q.difficulty);
        if (tier !== difficultyFilter) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = q.title?.toLowerCase().includes(query);
        const matchSubtopic = q.subtopic?.toLowerCase().includes(query);
        const matchText = q.question_text?.toLowerCase().includes(query);
        const matchId = String(q.id).includes(query);
        if (!matchTitle && !matchSubtopic && !matchText && !matchId) return false;
      }

      return true;
    });
  }, [questions, submissionMap, statusFilter, difficultyFilter, searchQuery]);

  // Batch Select Toggle
  const handleToggleSelect = (qId: number) => {
    setSelectedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const isAllFilteredSelected =
    filteredQuestions.length > 0 &&
    filteredQuestions.every((q) => selectedIds.includes(q.id));

  const handleSelectAllFiltered = () => {
    if (isAllFilteredSelected) {
      const filteredSet = new Set(filteredQuestions.map((q) => q.id));
      setSelectedIds((prev) => prev.filter((id) => !filteredSet.has(id)));
    } else {
      const set = new Set(selectedIds);
      filteredQuestions.forEach((q) => set.add(q.id));
      setSelectedIds(Array.from(set));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
                  isSma
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-sky-100 text-sky-800 border border-sky-200'
                }`}
              >
                {isSma ? `Modul SMA #${topicNumber}` : `Pilar Silabus #${topicNumber}`}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 font-mono">
                {category}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
              {topicTitle}
            </h2>
            <p className="text-xs text-slate-600">
              Menampilkan {filteredQuestions.length} dari {questions.length} butir soal tersedia.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
            title="Tutup Panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari subtopik, rumus kimia, atau nomor butir soal..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                Reset
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Status Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  statusFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua ({questions.length})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('unattempted')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  statusFilter === 'unattempted'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Belum ({questions.filter((q) => !submissionMap.has(q.id)).length})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('attempted')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  statusFilter === 'attempted'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sudah ({questions.filter((q) => submissionMap.has(q.id)).length})
              </button>
            </div>

            {/* Difficulty Pills */}
            <div className="flex items-center gap-1">
              {(['all', 'easy', 'medium', 'hard'] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setDifficultyFilter(tier)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    difficultyFilter === tier
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tier === 'all'
                    ? 'Semua Level'
                    : tier === 'easy'
                    ? 'Mudah'
                    : tier === 'medium'
                    ? 'Sedang'
                    : 'Sulit'}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Select All Row */}
          {filteredQuestions.length > 0 && (
            <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs text-slate-600">
              <button
                type="button"
                onClick={handleSelectAllFiltered}
                className="inline-flex items-center gap-1.5 font-medium hover:text-slate-900 cursor-pointer"
              >
                {isAllFilteredSelected ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400" />
                )}
                <span>
                  {isAllFilteredSelected ? 'Batalkan Pilihan Semua' : 'Pilih Semua di Hasil Ini'}
                </span>
              </button>

              {selectedIds.length > 0 && (
                <span className="font-mono text-emerald-700 font-bold">
                  {selectedIds.length} soal dipilih
                </span>
              )}
            </div>
          )}
        </div>

        {/* Question Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-700">Tidak ada butir soal yang sesuai</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Coba sesuaikan filter status atau kata kunci pencarian Anda untuk melihat butir soal lain.
              </p>
            </div>
          ) : (
            filteredQuestions.map((question) => {
              const sub = submissionMap.get(question.id);
              const isSelected = selectedIds.includes(question.id);
              const tier = normalizeDifficultyTier(question.difficulty);

              return (
                <div
                  key={question.id}
                  className={`border rounded-2xl p-4 transition-all duration-200 relative ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/20 shadow-xs'
                      : 'border-slate-200/90 hover:border-slate-300 bg-white hover:shadow-xs'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => handleToggleSelect(question.id)}
                        className="cursor-pointer"
                        title={isSelected ? 'Hapus pilihan' : 'Pilih soal ini'}
                      >
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300 hover:text-slate-400" />
                        )}
                      </button>

                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono font-bold text-[10px]">
                        #{question.id}
                      </span>

                      {/* Difficulty Badge */}
                      <span
                        className={`px-2 py-0.5 rounded-md font-mono font-bold text-[10px] ${
                          tier === 'easy'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : tier === 'medium'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}
                      >
                        {question.difficulty || 'Standar'}
                      </span>

                      <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 text-[10px] font-medium border border-slate-200">
                        {question.question_style === 'mcq' ? 'Pilihan Ganda' : 'Uraian'}
                      </span>
                    </div>

                    {/* Past Submission Status */}
                    {sub ? (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                          sub.scorePercentage >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : sub.scorePercentage >= 50
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                        title={`Pernah dikerjakan pada ${new Date(sub.gradedAt).toLocaleDateString('id-ID')}`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Skor: {sub.scorePercentage}%</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-400 font-mono">
                        Tantangan Baru
                      </span>
                    )}
                  </div>

                  {/* Subtopic */}
                  {question.subtopic && (
                    <div className="text-xs font-bold text-slate-800 mb-1.5 line-clamp-1">
                      {question.subtopic}
                    </div>
                  )}

                  {/* Question Excerpt with KaTeX Rendering */}
                  <div className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 overflow-hidden">
                    <KaTeXRenderer content={getDrawerExcerpt(question.question_text)} />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <div className="text-[11px] text-slate-500 font-mono">
                      Bobot: <strong>{question.total_points || 10} Poin</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => onStartPractice([question.id])}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-2xs cursor-pointer ${
                        isSma
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-sky-600 hover:bg-sky-700 text-white'
                      }`}
                    >
                      <span>Kerjakan Soal Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Sticky Drawer Footer for Batch Practice */}
        {selectedIds.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-900 text-white flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-200">
            <div className="space-y-0.5">
              <div className="text-xs font-bold flex items-center gap-1.5 text-emerald-400">
                <CheckSquare className="w-4 h-4" />
                <span>{selectedIds.length} Butir Soal Terpilih</span>
              </div>
              <p className="text-[10px] text-slate-400">
                Siap dikerjakan bersamaan dalam lembar kerja interaktif bertenaga AI.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartPractice(selectedIds)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold rounded-xl text-xs transition-all shadow-md cursor-pointer shrink-0"
            >
              <Zap className="w-4 h-4 fill-slate-900" />
              <span>Kerjakan Sekarang</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
