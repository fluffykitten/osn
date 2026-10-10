/**
 * QuestionPdfExportModal.tsx
 * Dialog Konfigurasi Ekspor PDF Naskah Soal Kimia (Save My Exams Style)
 * 
 * Fitur:
 * - Pilihan Cakupan: Seluruh Soal Topik Ini ATAU Soal-Soal Pilihan (Centang) ATAU Filter Kesulitan
 * - Pilihan Format Dokumen:
 *   1. Hanya Naskah Soal (Question Paper)
 *   2. Naskah Soal + Kunci & Pembahasan Lengkap (With Mark Scheme)
 *   3. Hanya Kunci Jawaban & Pembahasan (Mark Scheme Only)
 * - Pilihan Penomoran Soal (Reset per Kesulitan ala Save My Exams vs Urut 1..N)
 * - Live Metrics: Jumlah butir, estimasi durasi waktu, total marks
 */

import React, { useState, useMemo } from 'react';
import type { Question } from '../../types/database';
import { normalizeDifficultyTier } from '../../utils/practiceDataUtils';
import {
  questionPdfExportService,
  type QuestionDocumentType,
} from '../../services/questionPdfExportService';
import {
  FileText,
  CheckCircle2,
  ListFilter,
  CheckSquare,
  Printer,
  X,
  ExternalLink,
  FileCheck2,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';

interface QuestionPdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  allQuestions: Question[];
  selectedQuestionIds: number[];
  topicTitle: string;
  topicNumber?: number;
  curriculumTrack?: 'sma' | 'osn' | 'igcse';
  courseLevel?: string;
  subtopics?: string[];
}

export const QuestionPdfExportModal: React.FC<QuestionPdfExportModalProps> = ({
  isOpen,
  onClose,
  allQuestions,
  selectedQuestionIds,
  topicTitle,
  topicNumber = 1,
  curriculumTrack = 'sma',
  courseLevel,
  subtopics = [],
}) => {
  // Cakupan ekspor: 'all' | 'selected' | 'tier_easy' | 'tier_medium' | 'tier_hard'
  const hasPreSelected = selectedQuestionIds.length > 0;
  const [scope, setScope] = useState<'all' | 'selected' | 'easy' | 'medium' | 'hard'>(
    hasPreSelected ? 'selected' : 'all'
  );

  // Format Dokumen: 'questions_only' | 'questions_with_answers' | 'answers_only'
  const [documentType, setDocumentType] = useState<QuestionDocumentType>('questions_only');

  // Penomoran Soal
  const [restartNumberingPerSection, setRestartNumberingPerSection] = useState(true);

  // Filter butir soal berdasarkan cakupan yang dipilih
  const effectiveQuestions = useMemo(() => {
    if (scope === 'selected') {
      const selectedSet = new Set(selectedQuestionIds);
      const filtered = allQuestions.filter((q) => selectedSet.has(q.id));
      return filtered.length > 0 ? filtered : allQuestions;
    }

    if (scope === 'easy' || scope === 'medium' || scope === 'hard') {
      return allQuestions.filter((q) => normalizeDifficultyTier(q.difficulty) === scope);
    }

    return allQuestions;
  }, [allQuestions, selectedQuestionIds, scope]);

  // Statistik Soal Terpilih
  const stats = useMemo(() => {
    let easy = 0;
    let medium = 0;
    let hard = 0;

    effectiveQuestions.forEach((q) => {
      const tier = normalizeDifficultyTier(q.difficulty);
      if (tier === 'easy') easy++;
      else if (tier === 'hard') hard++;
      else medium++;
    });

    const totalMinutes = effectiveQuestions.reduce(
      (sum, q) => sum + (q.estimated_time_minutes || 2),
      0
    );
    const totalMarks = effectiveQuestions.reduce(
      (sum, q) => sum + (q.total_points || 1),
      0
    );

    return {
      total: effectiveQuestions.length,
      easy,
      medium,
      hard,
      totalMinutes,
      totalMarks,
    };
  }, [effectiveQuestions]);

  if (!isOpen) return null;

  const handleExport = () => {
    questionPdfExportService.exportQuestionsToPrint(effectiveQuestions, {
      documentType,
      topicTitle,
      topicNumber,
      curriculumTrack,
      courseLevel,
      subtopics,
      restartNumberingPerSection,
    });
  };

  const handleOpenNewTab = () => {
    const html = questionPdfExportService.generateQuestionPaperHtml(effectiveQuestions, {
      documentType,
      topicTitle,
      topicNumber,
      curriculumTrack,
      courseLevel,
      subtopics,
      restartNumberingPerSection,
    });
    const win = window.open('', '_blank');
    if (win) {
      win.document.open();
      win.document.write(html);
      win.document.close();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER MODAL */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Unduh Naskah Soal (PDF)</h2>
              <p className="text-xs text-slate-300 line-clamp-1">
                {topicTitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY MODAL */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          
          {/* 1. PILIHAN CAKUPAN SOAL */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <ListFilter className="w-4 h-4 text-sky-600" />
              <span>1. Cakupan Soal yang Diunduh</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Opsi A: Seluruh Soal Topik */}
              <button
                type="button"
                onClick={() => setScope('all')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  scope === 'all'
                    ? 'border-sky-500 bg-sky-50/70 text-sky-950 ring-2 ring-sky-500/20 shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">Seluruh Soal Topik Ini</span>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {allQuestions.length} Soal
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Mencakup semua kategori: Dasar (Easy), Menengah (Medium), & Sulit (Hard).
                </p>
              </button>

              {/* Opsi B: Soal-Soal Pilihan Tertentu */}
              <button
                type="button"
                onClick={() => setScope('selected')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  scope === 'selected'
                    ? 'border-indigo-500 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20 shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">Soal-Soal Pilihan Saja</span>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                    {selectedQuestionIds.length > 0 ? `${selectedQuestionIds.length} Terpilih` : 'Semua'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedQuestionIds.length > 0
                    ? `Mengunduh ${selectedQuestionIds.length} butir yang dicentang di halaman latihan.`
                    : 'Centang soal di daftar untuk memilih butir spesifik.'}
                </p>
              </button>
            </div>

            {/* Filter Cepat Berdasarkan Kesulitan */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-semibold text-slate-400 mr-1">Filter Tingkat:</span>
              <button
                type="button"
                onClick={() => setScope('easy')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  scope === 'easy'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Hanya Mudah (Easy)
              </button>
              <button
                type="button"
                onClick={() => setScope('medium')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  scope === 'medium'
                    ? 'bg-sky-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Hanya Sedang (Medium)
              </button>
              <button
                type="button"
                onClick={() => setScope('hard')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  scope === 'hard'
                    ? 'bg-purple-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Hanya Sulit (Hard)
              </button>
            </div>
          </div>

          {/* 2. PILIHAN FORMAT & KELENGKAPAN DOKUMEN */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-sky-600" />
              <span>2. Format & Kelengkapan Dokumen</span>
            </label>

            <div className="space-y-2">
              {/* Opsi 1: Hanya Naskah Soal */}
              <div
                onClick={() => setDocumentType('questions_only')}
                className={`py-3 px-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  documentType === 'questions_only'
                    ? 'border-sky-500 bg-sky-50/70 ring-2 ring-sky-500/20 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {documentType === 'questions_only' ? (
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                  )}
                  <span className="text-xs font-bold text-slate-900">
                    Hanya Naskah Soal (Question Paper)
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400">
                  Tanpa Kunci
                </span>
              </div>

              {/* Opsi 2: Naskah Soal + Kunci Jawaban Lengkap */}
              <div
                onClick={() => setDocumentType('questions_with_answers')}
                className={`py-3 px-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  documentType === 'questions_with_answers'
                    ? 'border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {documentType === 'questions_with_answers' ? (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                  )}
                  <span className="text-xs font-bold text-slate-900">
                    Naskah Soal + Kunci Jawaban Lengkap
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                  Rekomendasi
                </span>
              </div>

              {/* Opsi 3: Hanya Kunci Jawaban & Pembahasan */}
              <div
                onClick={() => setDocumentType('answers_only')}
                className={`py-3 px-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  documentType === 'answers_only'
                    ? 'border-purple-500 bg-purple-50/70 ring-2 ring-purple-500/20 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {documentType === 'answers_only' ? (
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                  )}
                  <span className="text-xs font-bold text-slate-900">
                    Hanya Kunci Jawaban & Pembahasan
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400">
                  Pegangan Guru
                </span>
              </div>
            </div>
          </div>

          {/* 3. PENGATURAN TAMBAHAN */}
          <div className="space-y-2.5 pt-1">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>3. Gaya Penomoran Soal</span>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={restartNumberingPerSection}
                onChange={(e) => setRestartNumberingPerSection(e.target.checked)}
                className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-800">
                  Reset nomor soal per tingkat kesulitan
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Nomor dimulai dari #1 pada setiap kategori: Mudah (#1, #2...), Sedang (#1, #2...), Sulit (#1, #2...).
                </p>
              </div>
            </label>
          </div>

          {/* 4. LIVE METRICS SUMMARY BOX */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL SOAL</span>
                <span className="text-slate-900 font-bold font-mono text-sm">
                  {stats.total} Butir
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-slate-400 block text-[10px]">ESTIMASI WAKTU</span>
                <span className="text-slate-900 font-bold font-mono text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>{stats.totalMinutes} Menit</span>
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL SKOR</span>
                <span className="text-slate-900 font-bold font-mono text-sm">
                  /{stats.totalMarks} Poin
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                {stats.easy} Mudah
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                {stats.medium} Sedang
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                {stats.hard} Sulit
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleOpenNewTab}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-all cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Buka di Tab Baru</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-all cursor-pointer"
            >
              Batal
            </button>

            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF (A4)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
