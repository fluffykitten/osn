import React, { useState, useEffect, useMemo } from 'react';
import { PILLARS_DATA } from '../../data/syllabusData';
import { findConceptByTag } from '../../data/materialsData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { resolveQuestionTopicMeta } from '../../utils/topicMapping';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Filter,
  BookOpen,
  Zap,
  Tag,
  ArrowRight,
  X,
  ExternalLink,
  Image as ImageIcon,
  Bookmark,
  Eye,
  Award,
  Clock,
  Sparkles,
  Layers,
  Check,
  Plus,
  RotateCcw,
  FileText,
  ListFilter,
  CheckCircle2,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CheckSquare,
  Square,
  ListChecks,
} from 'lucide-react';
import { questionBankService } from '../../services/questionBankService';
import { tagAndBookmarkService } from '../../services/tagAndBookmarkService';
import { QuestionFilters } from '../../components/worksheet/QuestionFilters';
import { DiagramViewerModal } from '../../components/common/DiagramViewerModal';
import type { QuestionDifficulty, Question, QuestionFilter } from '../../types/database';

// Cache memoization untuk cuplikan teks soal di kartu Bank Soal
const excerptCache = new Map<string, string>();

const getQuestionExcerpt = (text: string): string => {
  if (!text) return '';
  const cached = excerptCache.get(text);
  if (cached) return cached;
  // 1. Hilangkan daftar opsi ganda (A., B., C., D., E.) agar tidak memenuhi cuplikan kartu
  const withoutOptions = text.split(/\n\s*[A-E]\.\s+/)[0].trim();
  // 2. Ubah display math $$...$$ menjadi inline $...$ agar mengalir serasi di 3 baris tanpa blok margin yang terpotong
  const processed = withoutOptions.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => `$${math.trim()}$`);
  excerptCache.set(text, processed);
  return processed;
};

// Komponen Skeleton Loader untuk memuat kartu soal secara mulus
const QuestionCardSkeleton: React.FC = () => (
  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs animate-pulse space-y-4">
    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
      <div className="flex items-center gap-2">
        <div className="h-5 w-24 bg-slate-200 rounded-md" />
        <div className="h-5 w-16 bg-slate-200 rounded-md" />
        <div className="h-5 w-20 bg-slate-200 rounded-md" />
      </div>
      <div className="h-6 w-14 bg-slate-200 rounded-md" />
    </div>
    <div className="space-y-2">
      <div className="h-5 w-3/4 bg-slate-200 rounded-md" />
      <div className="h-3 w-1/4 bg-slate-100 rounded-md" />
    </div>
    <div className="space-y-1.5 py-1">
      <div className="h-4 w-full bg-slate-100 rounded-md" />
      <div className="h-4 w-5/6 bg-slate-100 rounded-md" />
      <div className="h-4 w-2/3 bg-slate-100 rounded-md" />
    </div>
    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
      <div className="flex gap-1.5">
        <div className="h-4 w-12 bg-slate-100 rounded-md" />
        <div className="h-4 w-16 bg-slate-100 rounded-md" />
      </div>
      <div className="h-8 w-28 bg-slate-200 rounded-xl" />
    </div>
  </div>
);

export const PracticeBank: React.FC = () => {
  const navigate = useNavigate();

  // State filter komprehensif (sama dengan test maker / WorksheetBuilder)
  const [filter, setFilter] = useState<QuestionFilter>({
    search: '',
    difficulty: 'ALL',
    pillarNumber: 'ALL',
    questionStyle: 'ALL',
    bookmarkedOnly: false,
    selectedTags: [],
    sortBy: 'newest',
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalQuestionsCount, setTotalQuestionsCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Pagination State: 10, 25, atau 50 pertanyaan per halaman
  const [pageSize, setPageSize] = useState<10 | 25 | 50>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Modal Preview Detail & Rubrik Soal
  const [activeModalQuestion, setActiveModalQuestion] = useState<Question | null>(null);
  const [newTagInput, setNewTagInput] = useState<string>('');

  // Diagram Zoom Modal
  const [previewDiagramUrl, setPreviewDiagramUrl] = useState<string | null>(null);
  const [previewDiagramTitle, setPreviewDiagramTitle] = useState<string>('');

  // Mobile filter drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // State butir soal terpilih untuk dikerjakan bersama di Lembar Kerja
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);

  // Load questions saat filter berubah
  const loadQuestions = async () => {
    setIsLoading(true);
    try {
      const res = await questionBankService.getQuestions(filter);
      setQuestions(res.questions || []);

      // Ambil total seluruh soal tanpa filter untuk statistik
      if (
        !filter.search &&
        filter.difficulty === 'ALL' &&
        filter.pillarNumber === 'ALL' &&
        filter.questionStyle === 'ALL' &&
        !filter.bookmarkedOnly &&
        (!filter.selectedTags || filter.selectedTags.length === 0)
      ) {
        setTotalQuestionsCount(res.total || res.questions.length);
      }
    } catch (e) {
      console.warn('Gagal memuat soal dari bank soal service:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    loadQuestions();
  }, [filter]);

  // Muat total soal saat pertama kali dibuka
  useEffect(() => {
    questionBankService.getQuestions().then((res) => {
      setTotalQuestionsCount(res.total || res.questions.length);
    });
  }, []);

  const handleToggleBookmark = async (e: React.MouseEvent, qId: number) => {
    e.stopPropagation();
    await tagAndBookmarkService.toggleBookmark(qId);
    loadQuestions();
  };

  const handleAddTagToModalQuestion = async (qId: number) => {
    if (!newTagInput.trim()) return;
    await tagAndBookmarkService.addCustomTag(qId, newTagInput.trim());
    setNewTagInput('');
    if (activeModalQuestion && activeModalQuestion.id === qId) {
      setActiveModalQuestion({
        ...activeModalQuestion,
        custom_tags: tagAndBookmarkService.getCustomTags(qId),
      });
    }
    loadQuestions();
  };

  const handleRemoveTagFromModalQuestion = async (qId: number, tag: string) => {
    await tagAndBookmarkService.removeCustomTag(qId, tag);
    if (activeModalQuestion && activeModalQuestion.id === qId) {
      setActiveModalQuestion({
        ...activeModalQuestion,
        custom_tags: tagAndBookmarkService.getCustomTags(qId),
      });
    }
    loadQuestions();
  };

  const getDifficultyBadge = (diff: QuestionDifficulty) => {
    switch (diff) {
      case 'SMA-Mudah':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'SMA-Sedang':
        return 'bg-sky-50 text-sky-800 border-sky-300';
      case 'SMA-Sulit':
        return 'bg-purple-50 text-purple-800 border-purple-300';
      case 'SMA':
        return 'bg-teal-50 text-teal-800 border-teal-300';
      case 'OSK':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'OSP':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'OSN':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'IChO':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const POPULAR_TAGS = [
    'partikel-dasar-atom',
    'konfigurasi-elektron',
    'bilangan-kuantum',
    'sifat-periodik',
    'anomali-energi-ionisasi',
    'spesi-isoelektronik',
    'aturan-slater',
    'vsepr',
    'gas-ideal',
    'termodinamika',
  ];

  const handleTagQuickFilter = (t: string) => {
    const cleanTag = t.replace(/^#/, '');
    const currentTags = filter.selectedTags || [];
    const isAlready = currentTags.includes(cleanTag);
    const newTags = isAlready ? currentTags.filter((x) => x !== cleanTag) : [...currentTags, cleanTag];
    setFilter({ ...filter, selectedTags: newTags });
  };

  // Kalkulasi & slice data pagination
  const totalFiltered = questions.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const activePage = Math.min(Math.max(1, currentPage), totalPages);

  const startIndex = (activePage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalFiltered);

  const paginatedQuestions = useMemo(() => {
    return questions.slice(startIndex, endIndex);
  }, [questions, startIndex, endIndex]);

  // Logika Pemilihan Soal untuk Lembar Kerja
  const handleToggleSelectQuestion = (qId: number) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const isCurrentPageAllSelected = useMemo(() => {
    if (paginatedQuestions.length === 0) return false;
    return paginatedQuestions.every((q) => selectedQuestionIds.includes(q.id));
  }, [paginatedQuestions, selectedQuestionIds]);

  const handleToggleSelectCurrentPage = () => {
    if (isCurrentPageAllSelected) {
      const pageIds = new Set(paginatedQuestions.map((q) => q.id));
      setSelectedQuestionIds((prev) => prev.filter((id) => !pageIds.has(id)));
    } else {
      const currentSelected = new Set(selectedQuestionIds);
      paginatedQuestions.forEach((q) => currentSelected.add(q.id));
      setSelectedQuestionIds(Array.from(currentSelected));
    }
  };

  const handleClearSelection = () => {
    setSelectedQuestionIds([]);
  };

  const handleLaunchSelectedWorksheet = () => {
    if (selectedQuestionIds.length === 0) return;
    navigate(`/worksheet/practice/${selectedQuestionIds.join(',')}`);
  };

  const handlePageChange = (newPage: number) => {
    const target = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(target);
    const topEl = document.getElementById('question-results-top');
    if (topEl) {
      topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (activePage > 3) pages.push('...');
      const start = Math.max(2, activePage - 1);
      const end = Math.min(totalPages - 1, activePage + 1);
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      if (activePage < totalPages - 2) pages.push('...');
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded uppercase font-mono border border-emerald-200">
              Question Bank Studio
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Katalog Terkurasi Kimia SMA (Fase E & F) & Olimpiade Sains
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Bank Soal & Kurasi Terstandarisasi
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-3xl">
            Jelajahi butir soal pilihan ganda berbobot dan uraian terstruktur berformat KaTeX murni, lengkap dengan kunci jawaban, analisis opsi pengecoh, pedoman penskoran resmi (*mark scheme*), serta kerangka pengerjaan scaffolding.
          </p>
        </div>

        {/* Quick Stats & Mobile Filter Trigger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter & Pencarian</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-700">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>
              Total: <strong>{totalQuestionsCount}</strong> Soal Tersedia
            </span>
          </div>
        </div>
      </div>

      {/* Quick Filter: Popular Concept Tags Bar */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-[11px] font-bold text-slate-500 mr-1.5 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-slate-400" />
          <span>Konsep Populer:</span>
        </span>
        {POPULAR_TAGS.map((t) => {
          const isActive = (filter.selectedTags || []).includes(t);
          return (
            <button
              key={t}
              type="button"
              onClick={() => handleTagQuickFilter(t)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>#{t}</span>
            </button>
          );
        })}

        {(filter.selectedTags && filter.selectedTags.length > 0) ||
        filter.search ||
        filter.difficulty !== 'ALL' ||
        filter.pillarNumber !== 'ALL' ||
        filter.questionStyle !== 'ALL' ||
        filter.bookmarkedOnly ? (
          <button
            type="button"
            onClick={() =>
              setFilter({
                search: '',
                difficulty: 'ALL',
                pillarNumber: 'ALL',
                questionStyle: 'ALL',
                bookmarkedOnly: false,
                selectedTags: [],
                sortBy: 'newest',
              })
            }
            className="text-[11px] text-rose-600 hover:underline ml-auto font-semibold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Semua Filter</span>
          </button>
        ) : null}
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (4 cols): Filter & Search Suite (Seperti Test Maker) */}
        <div
          className={`lg:col-span-4 space-y-5 ${
            isMobileFilterOpen ? 'block' : 'hidden lg:block'
          } sticky top-6 z-10`}
        >
          <QuestionFilters
            filter={filter}
            onChange={(newFilter) => setFilter(newFilter)}
            totalFound={questions.length}
          />
        </div>

        {/* Right Column (8 cols): Question Results List */}
        <div id="question-results-top" className="lg:col-span-8 space-y-4 scroll-mt-6">
          {/* Result Header & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-semibold px-1 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-bold">
                Menampilkan {totalFiltered === 0 ? 0 : startIndex + 1}–{endIndex} dari {totalFiltered} Soal
              </span>
              {isLoading && (
                <span className="w-3.5 h-3.5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
              )}
            </div>

            {/* Kontrol Jumlah Tampilan Per Halaman & Urutan */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
                <span className="text-[11px] font-semibold text-slate-500 pl-1">Per hal:</span>
                {([10, 25, 50] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setPageSize(size);
                      setCurrentPage(1);
                    }}
                    className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      pageSize === size
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                    }`}
                    title={`Tampilkan ${size} pertanyaan per halaman`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
                <span className="text-slate-400">Urut:</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-mono capitalize">
                  {filter.sortBy || 'newest'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Selection Toolbar untuk Memilih Soal */}
          {!isLoading && paginatedQuestions.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2.5 px-3.5 py-2.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleSelectCurrentPage}
                  className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 font-semibold cursor-pointer select-none transition-colors"
                >
                  {isCurrentPageAllSelected ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                  <span>
                    {isCurrentPageAllSelected
                      ? 'Batalkan Pilihan Halaman Ini'
                      : 'Pilih Semua di Halaman Ini'}
                  </span>
                </button>
                <span className="text-[11px] text-slate-400 font-mono">
                  ({paginatedQuestions.length} butir)
                </span>
              </div>

              {selectedQuestionIds.length > 0 && (
                <div className="flex items-center gap-2 ml-auto">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold font-mono text-[11px]">
                    {selectedQuestionIds.length} soal terpilih
                  </span>
                  <button
                    type="button"
                    onClick={handleClearSelection}
                    className="px-2 py-1 text-slate-500 hover:text-slate-800 text-[11px] font-medium cursor-pointer"
                  >
                    Batal Pilih
                  </button>
                  <button
                    type="button"
                    onClick={handleLaunchSelectedWorksheet}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer hover:scale-102"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Kerjakan {selectedQuestionIds.length} Soal</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Loading Skeleton State */}
          {isLoading && (
            <div className="space-y-4">
              {Array.from({ length: Math.min(pageSize, 4) }).map((_, idx) => (
                <QuestionCardSkeleton key={idx} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {questions.length === 0 && !isLoading && (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Tidak Ada Soal yang Sesuai dengan Kriteria Filter
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Silakan sesuaikan kata kunci pencarian, pilih tingkat kompetisi lain, atau klik tombol reset filter untuk menampilkan seluruh bank soal.
              </p>
              <button
                type="button"
                onClick={() =>
                  setFilter({
                    search: '',
                    difficulty: 'ALL',
                    pillarNumber: 'ALL',
                    questionStyle: 'ALL',
                    bookmarkedOnly: false,
                    selectedTags: [],
                    sortBy: 'newest',
                  })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filter Sekarang</span>
              </button>
            </div>
          )}

          {/* Question Cards (Dipaginasi 10/25/50 per halaman) */}
          {!isLoading && paginatedQuestions.map((q) => {
            const isBookmarked = tagAndBookmarkService.isBookmarked(q.id);
            const customTags = tagAndBookmarkService.getCustomTags(q.id);
            const topicMeta = resolveQuestionTopicMeta(q);
            const isSelected = selectedQuestionIds.includes(q.id);

            return (
              <div
                key={q.id}
                className={`bg-white border rounded-2xl p-5 sm:p-6 shadow-xs hover:border-slate-300 hover:shadow-2xs transition-all space-y-4 group ${
                  isSelected
                    ? 'ring-2 ring-emerald-500/80 bg-emerald-50/15 border-emerald-400'
                    : 'border-slate-200/90'
                }`}
              >
                {/* Header Card: Badges, Style, Bookmark, & Preview */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Tombol Centang Pilih Soal */}
                    <button
                      type="button"
                      onClick={() => handleToggleSelectQuestion(q.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs font-bold'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                      title={
                        isSelected
                          ? 'Batalkan pilihan soal ini'
                          : 'Pilih soal ini untuk dikerjakan di Lembar Kerja'
                      }
                    >
                      {isSelected ? (
                        <CheckSquare className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Square className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      <span className="text-[10px] font-mono">
                        {isSelected ? 'Terpilih' : 'Pilih'}
                      </span>
                    </button>

                    <span className={`px-2.5 py-0.5 text-white text-[10px] font-bold rounded font-mono ${topicMeta.isSma ? 'bg-teal-700' : 'bg-slate-900'}`}>
                      {topicMeta.topicBadgeLabel}
                    </span>
                    
                    {topicMeta.isSma && topicMeta.gradeBadgeLabel && (
                      <span className="px-2.5 py-0.5 border border-teal-200 text-teal-800 bg-teal-50 text-[10px] font-bold rounded font-mono">
                        {topicMeta.gradeBadgeLabel}
                      </span>
                    )}

                    {/* Difficulty Badge */}
                    <span
                      className={`px-2.5 py-0.5 border text-[10px] font-bold rounded font-mono ${getDifficultyBadge(
                        q.difficulty
                      )}`}
                    >
                      {q.difficulty}
                    </span>

                    {/* Question Style Badge */}
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-semibold rounded font-mono">
                      {q.question_style === 'mcq'
                        ? 'Pilihan Ganda (MCQ)'
                        : q.question_style === 'structured'
                        ? 'Uraian Terstruktur'
                        : q.question_style === 'calculation'
                        ? 'Perhitungan Numerik'
                        : 'Analisis Data'}
                    </span>

                    {q.diagram_url && (
                      <span className="px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold rounded flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-amber-600" />
                        <span>Diagram Visual</span>
                      </span>
                    )}

                    {q.source_event && (
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded font-mono flex items-center gap-1 border ${
                          q.generation_type === 'manual'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-purple-50 text-purple-800 border-purple-200'
                        }`}
                        title={q.generation_type === 'manual' ? 'Naskah Asli Arsip Kompetisi Resmi' : 'Soal Sintetis Terkalibrasi Model Kisi-kisi'}
                      >
                        <span>{q.generation_type === 'manual' ? '🏛️' : '⚡'}</span>
                        <span className="truncate max-w-[200px] sm:max-w-none">{q.source_event}</span>
                      </span>
                    )}

                    <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                      • {q.subtopic}
                    </span>
                  </div>

                  {/* Bookmark & Preview Action */}
                  <div className="flex items-center gap-1.5">
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
                      className="px-2.5 py-1 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer border border-slate-200 hover:border-emerald-200"
                      title="Lihat Detail Soal, Opsi Jawaban, & Rubrik Lengkap"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display group-hover:text-emerald-950 transition-colors">
                    {q.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {q.source_event || 'Kurikulum Kimia SMA'} {q.year ? `(${q.year})` : ''}
                  </p>
                </div>

                {/* Question Excerpt with KaTeX */}
                <div className="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed">
                  <KaTeXRenderer content={getQuestionExcerpt(q.question_text)} />
                </div>

                {/* Diagram Thumbnail jika tersedia */}
                {q.diagram_url && (
                  <div
                    onClick={() => {
                      setPreviewDiagramUrl(q.diagram_url!);
                      setPreviewDiagramTitle(q.title);
                    }}
                    className="inline-flex items-center gap-2.5 p-2 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-xl cursor-pointer transition-all shadow-2xs group/diag"
                    title="Klik untuk melihat diagram ukuran penuh"
                  >
                    <img
                      src={q.diagram_url}
                      alt="Thumbnail Diagram"
                      className="w-12 h-12 object-contain rounded-lg bg-white border border-slate-200 group-hover/diag:scale-105 transition-transform"
                    />
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-slate-800 flex items-center gap-1 group-hover/diag:text-sky-700 transition-colors">
                        <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
                        <span>Diagram Kimia Tersemat</span>
                      </p>
                      <p className="text-[10px] text-slate-500">Klik untuk zoom detail diagram & rumus visual</p>
                    </div>
                  </div>
                )}

                {/* Footer: Tags, Info Poin/Waktu, & Lembar Kerja CTA */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 max-w-xl">
                    <span className="text-[10px] text-slate-400 font-semibold mr-0.5">Tag:</span>
                    {q.tags?.map((t) => {
                      const match = findConceptByTag(t);
                      const targetTag = match ? match.block.tag : t;
                      const navRoute = topicMeta.materialRoute.includes('?') 
                                      ? `${topicMeta.materialRoute}&tag=${targetTag}` 
                                      : `${topicMeta.materialRoute}?tag=${targetTag}`;

                      return (
                        <div
                          key={t}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-[10px] font-mono text-slate-600 transition-colors group/tag"
                        >
                          <button
                            type="button"
                            onClick={() => handleTagQuickFilter(t)}
                            title={`Filter soal untuk tag #${t}`}
                            className="hover:text-emerald-700 hover:font-bold transition-colors cursor-pointer"
                          >
                            #{t}
                          </button>
                          <button
                            type="button"
                            onClick={() => navigate(navRoute)}
                            title={`Buka pembahasan konsep terkait di Database Materi`}
                            className="text-slate-400 group-hover/tag:text-sky-600 transition-colors cursor-pointer"
                          >
                            <ExternalLink className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      );
                    })}

                    {customTags.map((ct) => (
                      <span
                        key={ct}
                        className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-medium"
                      >
                        {ct}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Poin */}
                  <div className="flex items-center gap-3 ml-auto">
                    <span className="flex items-center gap-1 text-emerald-700 font-bold font-mono text-[11px]">
                      <Award className="w-3.5 h-3.5" />
                      <span>{q.total_points || 10} Poin</span>
                    </span>

                    <span className="flex items-center gap-1 font-mono text-slate-500 text-[11px] hidden sm:flex">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{q.estimated_time_minutes || 10} Menit</span>
                    </span>

                    <Link
                      to={`/worksheet/practice/${q.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs hover:scale-102"
                    >
                      <span>Kerjakan di Lembar Kerja</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom Pagination Controls */}
          {!isLoading && totalFiltered > 0 && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3 mt-6">
              {/* Info Halaman & Rentang */}
              <div className="text-xs text-slate-600 font-medium">
                Halaman <strong className="text-slate-900 font-bold">{activePage}</strong> dari{' '}
                <strong className="text-slate-900 font-bold">{totalPages}</strong>{' '}
                <span className="text-slate-400 font-mono">
                  (Menampilkan {startIndex + 1}–{endIndex} dari {totalFiltered} soal)
                </span>
              </div>

              {/* Tombol Navigasi Halaman */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1 text-xs">
                  {/* First & Prev */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(1)}
                    disabled={activePage === 1}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Halaman Pertama"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange(activePage - 1)}
                    disabled={activePage === 1}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Halaman Sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1 mx-1">
                    {getPageNumbers().map((p, idx) => {
                      if (p === '...') {
                        return (
                          <span key={`ellipsis-${idx}`} className="px-1 text-slate-400 font-mono text-xs">
                            ...
                          </span>
                        );
                      }
                      const pageNum = p as number;
                      const isActive = pageNum === activePage;
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => handlePageChange(pageNum)}
                          className={`min-w-8 h-8 px-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next & Last */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(activePage + 1)}
                    disabled={activePage === totalPages}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Halaman Berikutnya"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={activePage === totalPages}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Halaman Terakhir"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Selector 10/25/50 di Bagian Bawah */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs ml-auto sm:ml-0">
                <span className="text-[11px] font-semibold text-slate-500 pl-1">Per hal:</span>
                {([10, 25, 50] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setPageSize(size);
                      setCurrentPage(1);
                    }}
                    className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      pageSize === size
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Preview Detail & Rubrik Soal Lengkap */}
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
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono ${getDifficultyBadge(
                    activeModalQuestion.difficulty
                  )}`}
                >
                  {activeModalQuestion.difficulty}
                </span>
                
                {(() => {
                  const modalMeta = resolveQuestionTopicMeta(activeModalQuestion);
                  return (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg font-mono ${modalMeta.isSma ? 'bg-teal-100 text-teal-800' : 'bg-slate-200/80 text-slate-800'}`}>
                      {modalMeta.topicBadgeLabel}
                    </span>
                  );
                })()}

                <span className="text-xs text-slate-500 font-medium">
                  {resolveQuestionTopicMeta(activeModalQuestion).topicTitle}
                </span>

                {activeModalQuestion.source_event && (
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono flex items-center gap-1.5 ${
                      activeModalQuestion.generation_type === 'manual'
                        ? 'bg-blue-50 text-blue-800 border-blue-200'
                        : 'bg-purple-50 text-purple-800 border-purple-200'
                    }`}
                  >
                    <span>{activeModalQuestion.generation_type === 'manual' ? '🏛️ Arsip Resmi:' : '⚡ Model Sintetis:'}</span>
                    <span>{activeModalQuestion.source_event}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleSelectQuestion(activeModalQuestion.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border cursor-pointer ${
                    selectedQuestionIds.includes(activeModalQuestion.id)
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {selectedQuestionIds.includes(activeModalQuestion.id) ? (
                    <>
                      <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Soal Terpilih</span>
                    </>
                  ) : (
                    <>
                      <Square className="w-3.5 h-3.5 text-slate-400" />
                      <span>Pilih Soal</span>
                    </>
                  )}
                </button>

                <Link
                  to={`/worksheet/practice/${activeModalQuestion.id}`}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs flex items-center gap-1.5 transition-all hover:scale-102"
                  title="Buka dan kerjakan hanya soal ini di Lembar Kerja"
                >
                  <span>Kerjakan Soal Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
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

                {/* Cloudflare R2 Diagram Preview jika ada */}
                {activeModalQuestion.diagram_url && (
                  <div className="space-y-1.5 pt-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5 text-indigo-900">
                        <ImageIcon className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Diagram Visual (Cloudflare R2):</span>
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setPreviewDiagramUrl(activeModalQuestion.diagram_url!);
                        setPreviewDiagramTitle(activeModalQuestion.title);
                      }}
                      className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-center cursor-zoom-in hover:border-sky-400 transition-all shadow-2xs"
                      title="Klik untuk memperbesar diagram"
                    >
                      <img
                        src={activeModalQuestion.diagram_url}
                        alt="Diagram Soal"
                        className="max-h-60 object-contain rounded"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Sub questions if any (Untuk Uraian) */}
              {activeModalQuestion.sub_questions &&
                activeModalQuestion.sub_questions.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
                      Rincian Sub-Pertanyaan & Kriteria Skor:
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
                            <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Bobot: {sq.points} Poin
                            </span>
                          </div>
                          <div className="text-xs text-slate-800">
                            <KaTeXRenderer content={sq.question_text} />
                          </div>
                          {sq.rubric && (
                            <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg mt-1 border border-slate-100">
                              <span className="font-semibold text-slate-800">Pedoman Penskoran: </span>
                              <KaTeXRenderer content={sq.rubric} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Expected answer */}
              {activeModalQuestion.expected_final_answer && (
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Kunci Jawaban Akhir:</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-950 bg-white p-2.5 rounded-xl border border-emerald-100">
                    <KaTeXRenderer content={activeModalQuestion.expected_final_answer} />
                  </div>
                </div>
              )}

              {/* Solution Rubric & Distractor Analysis */}
              {activeModalQuestion.solution_rubric && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
                    Rubrik Pembahasan & Pedoman Penskoran Terperinci:
                  </h5>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed space-y-2">
                    <KaTeXRenderer content={activeModalQuestion.solution_rubric} />
                  </div>
                </div>
              )}

              {/* 4-Step Scaffolding Framework Template jika ada */}
              {activeModalQuestion.solution_framework_template && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
                    Kerangka 4 Langkah Pengerjaan (Scaffolding):
                  </h5>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-2xl text-[11px] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap border border-slate-800">
                    {activeModalQuestion.solution_framework_template}
                  </pre>
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
                        type="button"
                        onClick={() => handleRemoveTagFromModalQuestion(activeModalQuestion.id, t)}
                        className="hover:text-red-600 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    placeholder="Tambah tag khusus (contoh: #latihan-sma-1)..."
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTagToModalQuestion(activeModalQuestion.id);
                      }
                    }}
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddTagToModalQuestion(activeModalQuestion.id)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cloudflare R2 Diagram Viewer Zoom Modal */}
      <DiagramViewerModal
        isOpen={Boolean(previewDiagramUrl)}
        onClose={() => setPreviewDiagramUrl(null)}
        imageUrl={previewDiagramUrl || ''}
        title={previewDiagramTitle || 'Diagram Soal'}
      />

      {/* Floating Sticky Bar untuk Menjalankan Soal-Soal Terpilih */}
      {selectedQuestionIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-4 max-w-xl w-[92vw] animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-sm shadow-xs shrink-0">
              {selectedQuestionIds.length}
            </span>
            <div className="leading-tight truncate">
              <p className="text-xs sm:text-sm font-bold text-white truncate">
                {selectedQuestionIds.length} Butir Soal Terpilih
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 truncate">
                Siap dikerjakan bersama dalam 1 lembar kerja
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleClearSelection}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleLaunchSelectedWorksheet}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all hover:scale-102 cursor-pointer"
            >
              <span>Kerjakan Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
