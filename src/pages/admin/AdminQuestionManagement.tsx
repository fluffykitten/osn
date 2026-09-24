import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Eye,
  RefreshCw,
  X,
  Activity,
  TrendingUp,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Sparkles,
  Search,
  Filter,
  RotateCcw,
  SlidersHorizontal,
  Check,
  HelpCircle,
  FileText,
  Copy,
} from 'lucide-react';
import { questionBankService } from '../../services/questionBankService';
import { adminService } from '../../services/adminService';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { resolveQuestionTopicMeta } from '../../utils/topicMapping';
import { PILLARS_DATA } from '../../data/syllabusData';
import { SMA_MATERIALS } from '../../data/smaMaterialsData';
import {
  getBatchQuestionTelemetry,
  type QuestionAggregatedTelemetry,
} from '../../services/submissionService';
import { tagAndBookmarkService } from '../../services/tagAndBookmarkService';
import type {
  Question,
  QuestionFilter,
  QuestionDifficulty,
  QuestionStyle,
  SubQuestion,
} from '../../types/database';

export const AdminQuestionManagement: React.FC = () => {
  // Filter state lengkap untuk admin bank soal
  const [filter, setFilter] = useState<QuestionFilter>({
    search: '',
    curriculum: 'ALL',
    difficulty: 'ALL',
    pillarNumber: 'ALL',
    smaTopicNumber: 'ALL',
    smaGrade: 'ALL',
    questionStyle: 'ALL',
    bookmarkedOnly: false,
    selectedTags: [],
    sortBy: 'newest',
  });

  // Local state untuk search input debounce
  const [searchInput, setSearchInput] = useState(filter.search || '');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [availableTags] = useState<string[]>(tagAndBookmarkService.getAllGlobalTags());

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(questions.length / pageSize) || 1;
  const paginatedQuestions = questions.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Map telemetri riil dari database per question ID
  const [telemetryMap, setTelemetryMap] = useState<Map<number, QuestionAggregatedTelemetry>>(new Map());

  // Accordion drawer untuk "Lihat Pembahasan & Rubrik" per kartu soal
  const [expandedSolutionIds, setExpandedSolutionIds] = useState<Set<number>>(new Set());

  // Copy indicator per question
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  // Form states for edit/create
  const [formTitle, setFormTitle] = useState('');
  const [formPillar, setFormPillar] = useState<number>(1);
  const [formSubtopic, setFormSubtopic] = useState('');
  const [formDifficulty, setFormDifficulty] = useState<QuestionDifficulty>('OSK');
  const [formQuestionText, setFormQuestionText] = useState('');
  const [formRubric, setFormRubric] = useState('');
  const [formExpectedAnswer, setFormExpectedAnswer] = useState('');
  const [formPoints, setFormPoints] = useState<number>(10);
  const [modalPreviewMode, setModalPreviewMode] = useState<'split' | 'edit' | 'preview'>('split');
  const [activeRubricPreview, setActiveRubricPreview] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Debounce search input ke filter.search
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilter((prev: QuestionFilter) => (prev.search === searchInput ? prev : { ...prev, search: searchInput }));
    }, 280);
    return () => clearTimeout(handler);
  }, [searchInput]);

  const loadQuestions = async (forceRefresh = false) => {
    // Hanya tampilkan loading spinner jika cache belum siap atau pengguna klik force refresh
    if (forceRefresh || !questionBankService.hasCachedQuestions()) {
      setIsLoading(true);
    }
    try {
      const res = await questionBankService.getQuestions(filter, { forceRefresh });
      setQuestions(res.questions || []);
      setCurrentPage(1);
    } catch (e) {
      console.warn('Gagal memuat bank soal:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [
    filter.search,
    filter.curriculum,
    filter.difficulty,
    filter.pillarNumber,
    filter.smaTopicNumber,
    filter.smaGrade,
    filter.questionStyle,
    filter.selectedTags,
    filter.sortBy,
  ]);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Toggle drawer pembahasan per butir soal
  const toggleSolutionDrawer = (questionId: number) => {
    setExpandedSolutionIds((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Salin teks soal ke clipboard
  const handleCopyQuestionText = (q: Question) => {
    navigator.clipboard.writeText(q.question_text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Ambil telemetri aktual dari tabel submissions untuk butir soal yang sedang tampil
  useEffect(() => {
    if (paginatedQuestions.length === 0) return;
    const qIds = paginatedQuestions.map((q) => q.id);
    getBatchQuestionTelemetry(qIds).then((res) => {
      setTelemetryMap(res);
    });
  }, [currentPage, paginatedQuestions.length]);

  // Helper telemetri analitik per butir soal (100% data riil)
  const getQuestionTelemetry = (q: Question): QuestionAggregatedTelemetry => {
    return (
      telemetryMap.get(q.id) || {
        attempts: 0,
        correctCount: 0,
        wrongCount: 0,
        successRate: 0,
        avgScore: 0,
        hasRealData: false,
      }
    );
  };

  // KaTeX formula helper insertion for modal
  const handleInsertSnippet = (snippet: string) => {
    if (!textareaRef.current) {
      setFormQuestionText((prev) => `${prev} ${snippet}`);
      return;
    }
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);

    let replacement = snippet;
    if (snippet.includes('$$SEL$$')) {
      replacement = snippet.replace('$$SEL$$', selected || 'x');
    }

    const nextVal = text.substring(0, start) + replacement + text.substring(end);
    setFormQuestionText(nextVal);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + replacement.length, start + replacement.length);
    }, 0);
  };

  // Open Edit Modal
  const handleOpenEdit = (q: Question) => {
    setSelectedQuestion(q);
    setFormTitle(q.title);
    setFormPillar(q.pillar_number);
    setFormSubtopic(q.subtopic);
    setFormDifficulty(q.difficulty);
    setFormQuestionText(q.question_text);
    setFormRubric(q.solution_rubric || '');
    setFormExpectedAnswer(q.expected_final_answer || '');
    setFormPoints(q.total_points || 10);
    setIsEditModalOpen(true);
  };

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuestion) return;

    setIsSubmitting(true);
    try {
      await questionBankService.updateQuestion(selectedQuestion.id, {
        title: formTitle.trim(),
        pillar_number: formPillar,
        subtopic: formSubtopic.trim(),
        difficulty: formDifficulty,
        question_text: formQuestionText,
        solution_rubric: formRubric,
        expected_final_answer: formExpectedAnswer,
        total_points: formPoints,
      });

      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'QUESTION_UPDATED',
        target_resource: `questions/${selectedQuestion.id}`,
        description: `Memperbarui butir soal ID ${selectedQuestion.id}: "${formTitle.trim()}"`,
        details: { pillar: formPillar, difficulty: formDifficulty },
      });

      showNotification('success', `Soal ID #${selectedQuestion.id} berhasil diperbarui!`);
      setIsEditModalOpen(false);
      await loadQuestions();
    } catch (err: any) {
      showNotification('error', err?.message || 'Gagal menyimpan perubahan soal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Create Question
  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const created = await questionBankService.createQuestion({
        pillar_number: formPillar,
        subtopic: formSubtopic.trim() || 'Umum',
        difficulty: formDifficulty,
        question_style: 'structured',
        title: formTitle.trim(),
        question_text: formQuestionText,
        solution_rubric: formRubric,
        expected_final_answer: formExpectedAnswer,
        total_points: formPoints,
        year: 2026,
        generation_type: 'manual',
        is_verified: true,
        source_event: 'Bank Soal Pusat OSN Kimia',
      });

      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'QUESTION_CREATED',
        target_resource: `questions/${created.id}`,
        description: `Menambahkan butir soal baru: "${formTitle.trim()}" (${formDifficulty})`,
      });

      showNotification('success', 'Butir soal baru berhasil ditambahkan ke bank soal!');
      setIsCreateModalOpen(false);
      await loadQuestions();
    } catch (err: any) {
      showNotification('error', err?.message || 'Gagal menambahkan butir soal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Question
  const handleDeleteQuestion = async () => {
    if (!selectedQuestion) return;

    setIsSubmitting(true);
    try {
      await questionBankService.deleteQuestion(selectedQuestion.id);
      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'QUESTION_DELETED',
        target_resource: `questions/${selectedQuestion.id}`,
        description: `Menghapus butir soal ID ${selectedQuestion.id}: "${selectedQuestion.title}"`,
      });

      showNotification('success', `Soal ID #${selectedQuestion.id} berhasil dihapus.`);
      setIsDeleteModalOpen(false);
      setSelectedQuestion(null);
      await loadQuestions();
    } catch (err: any) {
      showNotification('error', err?.message || 'Gagal menghapus soal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset semua filter
  const handleResetFilters = () => {
    setSearchInput('');
    setFilter({
      search: '',
      curriculum: 'ALL',
      difficulty: 'ALL',
      pillarNumber: 'ALL',
      smaTopicNumber: 'ALL',
      smaGrade: 'ALL',
      questionStyle: 'ALL',
      bookmarkedOnly: false,
      selectedTags: [],
      sortBy: 'newest',
    });
  };

  const handleTagToggle = (tag: string) => {
    const current = filter.selectedTags || [];
    const next = current.includes(tag) ? current.filter((t: string) => t !== tag) : [...current, tag];
    setFilter({ ...filter, selectedTags: next });
  };

  // Hitung jumlah filter lanjutan yang sedang aktif
  const activeAdvancedCount = useMemo(() => {
    let count = 0;
    if (filter.questionStyle && filter.questionStyle !== 'ALL') count++;
    if (filter.sortBy && filter.sortBy !== 'newest') count++;
    if (filter.selectedTags && filter.selectedTags.length > 0) count += filter.selectedTags.length;
    return count;
  }, [filter.questionStyle, filter.sortBy, filter.selectedTags]);

  const isAnyFilterActive = useMemo(() => {
    return (
      (filter.search || '').trim().length > 0 ||
      filter.curriculum !== 'ALL' ||
      filter.difficulty !== 'ALL' ||
      filter.pillarNumber !== 'ALL' ||
      (filter.smaTopicNumber && filter.smaTopicNumber !== 'ALL') ||
      activeAdvancedCount > 0
    );
  }, [filter, activeAdvancedCount]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`p-3.5 rounded-xl text-xs font-semibold flex items-center justify-between border shadow-xs animate-in fade-in ${
            notification.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
          <button onClick={() => setNotification(null)} className="p-1 text-slate-400 hover:text-slate-700">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Header Halaman Bank Soal */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold font-mono tracking-wider">
              CURATED REPOSITORY & TELEMETRY
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Koleksi Master OSN & SMA Mandiri
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Kurasi & Analitik Bank Soal Kimia
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manajemen butir soal terintegrasi KaTeX, rubrik evaluasi juri, dan telemetri butir soal siswa.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              questionBankService.invalidateCache();
              loadQuestions(true);
            }}
            disabled={isLoading}
            className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs transition cursor-pointer"
            title="Segarkan daftar soal dari cloud"
          >
            <RefreshCw className={`w-4 h-4 text-slate-600 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => {
              setFormTitle('');
              setFormPillar(1);
              setFormSubtopic('');
              setFormDifficulty('OSK');
              setFormQuestionText('');
              setFormRubric('');
              setFormExpectedAnswer('');
              setFormPoints(10);
              setIsCreateModalOpen(true);
            }}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Soal Baru</span>
          </button>
        </div>
      </div>

      {/* TAHAP 2: COMPACT STICKY FILTER BAR (Hemat 70% Ruang Vertikal) */}
      <div className="sticky top-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm p-3.5 space-y-3">
        {/* Baris 1: Search Bar, Segmented Kurikulum, Topik/Pilar Dropdown & Toggle Advanced */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5">
          {/* Search Input dengan ikon dan tombol reset cepat */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Cari judul, kata kunci, formula KaTeX, atau ID #510009..."
              className="w-full pl-9 pr-8 py-2 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-400 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none transition"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Segmented Control Kurikulum: Semua | OSN | SMA */}
          <div className="flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 shrink-0">
            <button
              onClick={() =>
                setFilter({
                  ...filter,
                  curriculum: 'ALL',
                  pillarNumber: 'ALL',
                  smaTopicNumber: 'ALL',
                })
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter.curriculum === 'ALL'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() =>
                setFilter({
                  ...filter,
                  curriculum: 'OSN',
                  smaTopicNumber: 'ALL',
                })
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter.curriculum === 'OSN'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              OSN (10 Pilar)
            </button>
            <button
              onClick={() =>
                setFilter({
                  ...filter,
                  curriculum: 'SMA',
                  pillarNumber: 'ALL',
                })
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter.curriculum === 'SMA'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SMA Mandiri
            </button>
          </div>

          {/* Dynamic Topik / Pilar Dropdown sesuai Kurikulum yang Aktif */}
          <div className="shrink-0 w-full sm:w-auto">
            {filter.curriculum === 'SMA' ? (
              <select
                value={filter.smaTopicNumber || 'ALL'}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    smaTopicNumber: e.target.value === 'ALL' ? 'ALL' : Number(e.target.value),
                  })
                }
                className="w-full sm:w-56 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:bg-white focus:outline-none focus:border-slate-400 transition cursor-pointer"
              >
                <option value="ALL">Semua Materi SMA (1-16)</option>
                {SMA_MATERIALS.map((m) => (
                  <option key={m.id} value={m.topic_number}>
                    Materi #{m.topic_number}: {m.title.length > 28 ? `${m.title.slice(0, 28)}...` : m.title}
                  </option>
                ))}
              </select>
            ) : (
              <select
                value={filter.pillarNumber || 'ALL'}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    pillarNumber: e.target.value === 'ALL' ? 'ALL' : Number(e.target.value),
                  })
                }
                className="w-full sm:w-56 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:bg-white focus:outline-none focus:border-slate-400 transition cursor-pointer"
              >
                <option value="ALL">Semua Pilar OSN (1-10)</option>
                {PILLARS_DATA.map((p) => (
                  <option key={p.id} value={p.pillar_number}>
                    Pilar #{p.pillar_number}: {p.title.length > 28 ? `${p.title.slice(0, 28)}...` : p.title}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Toggle Filter Lanjutan */}
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition cursor-pointer ${
              showAdvancedFilters || activeAdvancedCount > 0
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <SlidersHorizontal size={13} />
            <span>Filter Lanjutan</span>
            {activeAdvancedCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 bg-emerald-500 text-white rounded-full text-[10px] font-bold">
                {activeAdvancedCount}
              </span>
            )}
            {showAdvancedFilters ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>

        {/* Baris 2: Difficulty Pills & Result Counter */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 border-t border-slate-100">
          {/* Quick Difficulty Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
              Tingkat:
            </span>
            {(['ALL', 'OSK', 'OSP', 'OSN', 'IChO', 'SMA'] as const).map((diff) => {
              const isActive =
                diff === 'ALL'
                  ? filter.difficulty === 'ALL'
                  : diff === 'SMA'
                  ? filter.difficulty?.startsWith('SMA')
                  : filter.difficulty === diff;

              let activeClass = 'bg-slate-900 text-white border-slate-900';
              if (diff === 'OSK') activeClass = 'bg-emerald-600 text-white border-emerald-600';
              if (diff === 'OSP') activeClass = 'bg-amber-600 text-white border-amber-600';
              if (diff === 'OSN') activeClass = 'bg-rose-600 text-white border-rose-600';
              if (diff === 'IChO') activeClass = 'bg-purple-600 text-white border-purple-600';
              if (diff === 'SMA') activeClass = 'bg-sky-600 text-white border-sky-600';

              return (
                <button
                  key={diff}
                  onClick={() => {
                    if (diff === 'ALL') {
                      setFilter({ ...filter, difficulty: 'ALL' });
                    } else if (diff === 'SMA') {
                      setFilter({ ...filter, difficulty: 'SMA-Sedang' });
                    } else {
                      setFilter({ ...filter, difficulty: diff });
                    }
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono transition cursor-pointer border ${
                    isActive
                      ? `${activeClass} shadow-2xs`
                      : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  {diff === 'ALL' ? 'Semua' : diff}
                </button>
              );
            })}
          </div>

          {/* Result counter & Quick Reset */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">
              Menampilkan <span className="font-bold text-slate-900">{questions.length}</span> butir soal
            </span>
            {isAnyFilterActive && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 px-2 py-0.5 rounded-lg hover:bg-rose-50 transition cursor-pointer"
                title="Reset semua filter"
              >
                <RotateCcw size={11} />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Collapsible Advanced Filters Drawer */}
        {showAdvancedFilters && (
          <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-1 text-xs">
            {/* Format Soal */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Bentuk Soal</label>
              <select
                value={filter.questionStyle || 'ALL'}
                onChange={(e) =>
                  setFilter({ ...filter, questionStyle: e.target.value as QuestionStyle | 'ALL' })
                }
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:bg-white focus:outline-none focus:border-slate-400"
              >
                <option value="ALL">Semua Format (Esai & PG)</option>
                <option value="structured">Esai Terstruktur (structured)</option>
                <option value="mcq">Pilihan Ganda (mcq)</option>
                <option value="calculation">Kalkulasi Numerik (calculation)</option>
                <option value="data_analysis">Analisis Data Spektroskopi</option>
              </select>
            </div>

            {/* Urutkan Berdasarkan */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Urutkan</label>
              <select
                value={filter.sortBy || 'newest'}
                onChange={(e) => setFilter({ ...filter, sortBy: e.target.value as any })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:bg-white focus:outline-none focus:border-slate-400"
              >
                <option value="newest">Terbaru Ditambahkan</option>
                <option value="difficulty_asc">Kesulitan Terendah (OSK → IChO)</option>
                <option value="difficulty_desc">Kesulitan Tertinggi (IChO → OSK)</option>
                <option value="points_desc">Bobot Poin Tertinggi</option>
              </select>
            </div>

            {/* Tag Cepat */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Filter Tag Kurasi</label>
              <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                {availableTags.slice(0, 8).map((t) => {
                  const isTagActive = (filter.selectedTags || []).includes(t);
                  return (
                    <button
                      key={t}
                      onClick={() => handleTagToggle(t)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition cursor-pointer border ${
                        isTagActive
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* TAHAP 3 & 4: DAFTAR KARTU SOAL DENGAN KATEX TERNORMALISASI, DRAWER PEMBAHASAN & TELEMETRI HUD */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="py-20 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <div className="inline-block w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-2" />
            <div className="text-xs font-semibold text-slate-600">
              Memuat dan menganalisis butir soal...
            </div>
          </div>
        ) : paginatedQuestions.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-xs bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <p className="font-semibold text-slate-700">Tidak ada butir soal yang sesuai kriteria filter.</p>
            <p className="text-slate-400">Coba ubah kata kunci pencarian atau reset filter.</p>
            {isAnyFilterActive && (
              <button
                onClick={handleResetFilters}
                className="mt-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>
        ) : (
          paginatedQuestions.map((q) => {
            const topicMeta = resolveQuestionTopicMeta(q);
            const telemetry = getQuestionTelemetry(q);
            const isSolutionOpen = expandedSolutionIds.has(q.id);

            return (
              <div
                key={q.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition space-y-4"
              >
                {/* Header Card: Badges Topik, Kesulitan & Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {/* Badge Kurikulum & Topik */}
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wide ${
                        topicMeta.isSma ? 'bg-indigo-950 text-indigo-100' : 'bg-slate-900 text-white'
                      }`}
                    >
                      {topicMeta.topicBadgeLabel}
                    </span>

                    {topicMeta.isSma && topicMeta.gradeBadgeLabel && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200 font-semibold">
                        {topicMeta.gradeBadgeLabel}
                      </span>
                    )}

                    {/* Badge Tingkat Kesulitan dengan Palet Terkurasi */}
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono border ${
                        q.difficulty === 'IChO'
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : q.difficulty === 'OSN'
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : q.difficulty === 'OSP'
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : q.difficulty === 'OSK'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-sky-50 text-sky-700 border-sky-200'
                      }`}
                    >
                      {q.difficulty}
                    </span>

                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-mono font-bold">
                      {q.total_points || 10} Poin
                    </span>

                    {q.year && (
                      <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                        {q.year} • {q.source_event || 'Puspresnas'}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons: Pembahasan Drawer, Edit, Hapus */}
                  <div className="flex items-center gap-2">
                    {/* Toggle Pembahasan & Rubrik */}
                    <button
                      onClick={() => toggleSolutionDrawer(q.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer border ${
                        isSolutionOpen
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                      title={isSolutionOpen ? 'Sembunyikan Pembahasan' : 'Buka Kunci & Rubrik'}
                    >
                      <BookOpen size={13} className={isSolutionOpen ? 'text-emerald-600' : 'text-slate-500'} />
                      <span>{isSolutionOpen ? 'Tutup Rubrik' : 'Lihat Pembahasan & Rubrik'}</span>
                      {isSolutionOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>

                    {/* Salin Teks Soal */}
                    <button
                      onClick={() => handleCopyQuestionText(q)}
                      className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition cursor-pointer"
                      title="Salin Teks Soal & KaTeX"
                    >
                      {copiedId === q.id ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>

                    {/* Edit Soal */}
                    <button
                      onClick={() => handleOpenEdit(q)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <Edit size={13} />
                      <span className="hidden sm:inline">Edit Soal</span>
                    </button>

                    {/* Hapus Soal */}
                    <button
                      onClick={() => {
                        setSelectedQuestion(q);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition cursor-pointer"
                      title="Hapus Soal"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {/* Konten Narasi Soal dengan KaTeX Renderer */}
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {q.title}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono shrink-0">
                      ID #{q.id}
                    </span>
                  </div>

                  {/* Narasi Soal didukung Formula KaTeX & mhchem */}
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans max-w-none">
                    <KaTeXRenderer content={q.question_text} />
                  </div>

                  {/* Sub-soal jika ada */}
                  {q.sub_questions && q.sub_questions.length > 0 && (
                    <div className="mt-3 pl-3.5 border-l-2 border-slate-200 space-y-2.5 py-1">
                      {q.sub_questions.map((sub: SubQuestion, idx: number) => (
                        <div key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                          <span className="font-bold font-mono text-slate-900 shrink-0 mt-0.5">
                            {sub.label}.
                          </span>
                          <div className="flex-1">
                            <KaTeXRenderer content={sub.question_text} />
                            {sub.points && (
                              <span className="inline-block mt-1 text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                Bobot: {sub.points} poin
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* TAHAP 3: INLINE SOLUTION & RUBRIC DRAWER (Accordion 1-Klik) */}
                {isSolutionOpen && (
                  <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 space-y-3.5 animate-in fade-in slide-in-from-top-1 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-emerald-600 shrink-0" />
                        <span className="font-bold text-slate-900 text-xs tracking-tight">
                          Rubrik Penilaian & Panduan Solusi Resmi
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        Maksimal: {q.total_points || 10} Poin
                      </span>
                    </div>

                    {/* Kunci Jawaban Akhir */}
                    {q.expected_final_answer && (
                      <div className="p-3 bg-white rounded-lg border border-emerald-200/80 shadow-2xs space-y-1">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px]">
                          <CheckCircle2 size={13} className="text-emerald-600" />
                          <span>Jawaban Akhir Baku (Expected Final Answer)</span>
                        </div>
                        <div className="font-mono text-xs text-slate-900 pl-4.5">
                          <KaTeXRenderer content={q.expected_final_answer} inlineOnly />
                        </div>
                      </div>
                    )}

                    {/* Rubrik Penilaian & Langkah Aljabar */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700">
                        Kriteria Penilaian & Langkah Pengerjaan:
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-slate-800 leading-relaxed max-h-80 overflow-y-auto">
                        <KaTeXRenderer
                          content={
                            q.solution_rubric ||
                            '*Belum ada rubrik tertulis untuk butir soal ini. Klik tombol "Edit Soal" untuk menambahkan panduan penilaian.*'
                          }
                        />
                      </div>
                    </div>

                    {/* Kerangka Solusi Scaffold (jika tersedia) */}
                    {q.solution_framework_template && (
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                          <FileText size={12} className="text-slate-500" />
                          <span>Kerangka Solusi 4 Langkah (Scaffold):</span>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-slate-700 leading-relaxed font-mono text-[11px] max-h-60 overflow-y-auto">
                          <KaTeXRenderer content={q.solution_framework_template} />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* TAHAP 4: INTERACTIVE TELEMETRY HUD (Attempts, Benar/Salah Bar, Success Rate, Rata-Rata Skor) */}
                <div className="pt-3 border-t border-slate-100">
                  {!telemetry.hasRealData || telemetry.attempts === 0 ? (
                    <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Activity size={13} className="text-slate-400" />
                        <span className="font-medium text-[11px]">Belum ada riwayat pengerjaan siswa untuk butir soal ini</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 font-semibold">
                        0 Percobaan
                      </span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {/* Total Percobaan */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition">
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold mb-0.5">
                          <Activity size={12} className="text-slate-600" />
                          <span>Total Pengerjaan</span>
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono">
                          {telemetry.attempts}{' '}
                          <span className="text-[10px] font-normal text-slate-500">siswa</span>
                        </div>
                      </div>

                      {/* Tingkat Kelulusan dengan Bar Visual */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition">
                        <div className="flex items-center justify-between text-slate-500 text-[10px] font-semibold mb-0.5">
                          <div className="flex items-center gap-1.5">
                            <TrendingUp size={12} className="text-slate-600" />
                            <span>Tingkat Kelulusan</span>
                          </div>
                          <span
                            className={`font-mono font-bold ${
                              telemetry.successRate >= 70
                                ? 'text-emerald-700'
                                : telemetry.successRate >= 45
                                ? 'text-amber-700'
                                : 'text-rose-700'
                            }`}
                          >
                            {telemetry.successRate}%
                          </span>
                        </div>
                        {/* Visual Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1.5">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              telemetry.successRate >= 70
                                ? 'bg-emerald-600'
                                : telemetry.successRate >= 45
                                ? 'bg-amber-500'
                                : 'bg-rose-500'
                            }`}
                            style={{ width: `${telemetry.successRate}%` }}
                          />
                        </div>
                      </div>

                      {/* Rasio Benar vs Salah dengan Micro-Bar Segmented */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition">
                        <div className="flex items-center justify-between text-slate-500 text-[10px] font-semibold mb-0.5">
                          <div className="flex items-center gap-1.5">
                            <Target size={12} className="text-slate-600" />
                            <span>Benar / Salah</span>
                          </div>
                          <div className="font-mono text-xs font-bold">
                            <span className="text-emerald-700">{telemetry.correctCount}</span>
                            <span className="text-slate-300 mx-0.5">/</span>
                            <span className="text-rose-700">{telemetry.wrongCount}</span>
                          </div>
                        </div>
                        {/* Micro segmented bar */}
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden flex mt-1.5">
                          <div
                            className="h-full bg-emerald-600"
                            style={{
                              width: `${(telemetry.correctCount / Math.max(1, telemetry.attempts)) * 100}%`,
                            }}
                          />
                          <div
                            className="h-full bg-rose-500"
                            style={{
                              width: `${(telemetry.wrongCount / Math.max(1, telemetry.attempts)) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Rata-Rata Skor */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition">
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold mb-0.5">
                          <Award size={12} className="text-slate-600" />
                          <span>Rata-Rata Nilai</span>
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono">
                          {telemetry.avgScore}{' '}
                          <span className="text-[10px] font-normal text-slate-400">
                            / {q.total_points || 10} pt
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between text-xs text-slate-600">
          <div>
            Halaman <span className="font-bold text-slate-900">{currentPage}</span> dari{' '}
            <span className="font-bold text-slate-900">{totalPages}</span> ({questions.length} total soal)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-semibold transition flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft size={14} />
              <span>Sebelumnya</span>
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-semibold transition flex items-center gap-1 cursor-pointer"
            >
              <span>Berikutnya</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* TAHAP 5: MODAL EDIT & CREATE QUESTION WITH LIVE KATEX DUAL PANE & CHEMITOOLBAR */}
      {(isEditModalOpen || isCreateModalOpen) && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 space-y-5 shadow-2xl animate-in zoom-in-95 text-xs">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {isEditModalOpen
                    ? `Edit Butir Soal (ID #${selectedQuestion?.id})`
                    : 'Tambah Butir Soal Baru'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  Dukungan penulisan KaTeX & formula kimia otomatis ternormalisasi
                </p>
              </div>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setIsCreateModalOpen(false);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={isEditModalOpen ? handleSaveEdit : handleCreateQuestion} className="space-y-4">
              {/* Metadata Soal Baris 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-700 font-semibold mb-1">Judul Soal</label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Contoh: Termodinamika Penguraian Gas N2O4"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:bg-white focus:outline-none focus:border-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Pilar Silabus (1-10)</label>
                  <select
                    value={formPillar}
                    onChange={(e) => setFormPillar(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-slate-400 font-mono transition"
                  >
                    {PILLARS_DATA.map((p) => (
                      <option key={p.id} value={p.pillar_number}>
                        Pilar #{p.pillar_number}: {p.title.slice(0, 20)}...
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Tingkat Kesulitan</label>
                  <select
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-slate-400 font-mono transition"
                  >
                    <option value="OSK">OSK (Kabupaten)</option>
                    <option value="OSP">OSP (Provinsi)</option>
                    <option value="OSN">OSN (Nasional)</option>
                    <option value="IChO">IChO (Internasional)</option>
                    <option value="SMA-Mudah">SMA Mudah</option>
                    <option value="SMA-Sedang">SMA Sedang</option>
                    <option value="SMA-Sulit">SMA Sulit</option>
                  </select>
                </div>
              </div>

              {/* Metadata Soal Baris 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Subtopik / Konsep Spesifik
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Kesetimbangan Fasa & Kaedah Gibbs"
                    value={formSubtopic}
                    onChange={(e) => setFormSubtopic(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:border-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Bobot Poin Maksimal
                  </label>
                  <input
                    type="number"
                    value={formPoints}
                    onChange={(e) => setFormPoints(parseInt(e.target.value, 10) || 10)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-slate-400 transition"
                  />
                </div>
              </div>

              {/* Quick KaTeX Snippet Toolbar */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span>Toolbar Formula KaTeX Cepat:</span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    Klik untuk menyisipkan ke narasi soal
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet('\\ce{$$SEL$$}')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Reaksi / Rumus Kimia"
                  >
                    \ce&#123;...&#125;
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet('$\\frac{a}{b}$')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Pecahan \frac{a}{b}"
                  >
                    \frac&#123;a&#125;&#123;b&#125;
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet(' $\\rightarrow$ ')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Panah Searah"
                  >
                    →
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet(' $\\rightleftharpoons$ ')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Panah Kesetimbangan"
                  >
                    ⇌
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet('$\\Delta H^\\circ$')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Entalpi Standar"
                  >
                    ΔH°
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet('$\\Delta G^\\circ$')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Energi Bebas Gibbs"
                  >
                    ΔG°
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet(' $\\times 10^{5}$ ')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Notasi Ilmiah"
                  >
                    ×10ⁿ
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet('$^\\circ\\text{C}$')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Derajat Celcius"
                  >
                    °C
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInsertSnippet(' $e^-$ ')}
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px] transition cursor-pointer"
                    title="Elektron"
                  >
                    e⁻
                  </button>
                </div>
              </div>

              {/* Teks Soal & Pratinjau KaTeX Live Dual-Pane */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-slate-700 font-semibold">
                    Teks Narasi Soal (Didukung KaTeX LaTeX $...$ & $$...$$)
                  </label>
                  <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setModalPreviewMode('split')}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${
                        modalPreviewMode === 'split' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      Berdampingan
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalPreviewMode('edit')}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${
                        modalPreviewMode === 'edit' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      Hanya Editor
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalPreviewMode('preview')}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${
                        modalPreviewMode === 'preview' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      Hanya Pratinjau
                    </button>
                  </div>
                </div>

                <div
                  className={`grid gap-3 ${
                    modalPreviewMode === 'split'
                      ? 'grid-cols-1 lg:grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  {modalPreviewMode !== 'preview' && (
                    <div>
                      <textarea
                        ref={textareaRef}
                        rows={9}
                        required
                        value={formQuestionText}
                        onChange={(e) => setFormQuestionText(e.target.value)}
                        placeholder="Ketik narasi soal di sini. Gunakan $formula$ untuk inline atau $$formula$$ untuk display..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-xs leading-relaxed focus:bg-white focus:outline-none focus:border-slate-400 transition"
                      />
                    </div>
                  )}

                  {modalPreviewMode !== 'edit' && (
                    <div className="p-3 bg-slate-50/80 border border-slate-200 rounded-xl overflow-y-auto max-h-[200px] text-slate-800 leading-relaxed font-sans">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-mono">
                        <Eye size={12} />
                        <span>Pratinjau KaTeX Real-time</span>
                      </div>
                      <KaTeXRenderer
                        content={
                          formQuestionText ||
                          '*Pratinjau formula dan tata letak soal akan tampil di sini secara langsung...*'
                        }
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Rubrik Penilaian dengan Toggle Live Preview */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-slate-700 font-semibold">
                    Rubrik Penilaian & Kriteria Langkah Solusi Resmi
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveRubricPreview(!activeRubricPreview)}
                    className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                  >
                    <Eye size={12} />
                    <span>{activeRubricPreview ? 'Editor Teks' : 'Pratinjau Rubrik'}</span>
                  </button>
                </div>

                {activeRubricPreview ? (
                  <div className="p-3 bg-slate-50/80 border border-slate-200 rounded-xl max-h-36 overflow-y-auto leading-relaxed">
                    <KaTeXRenderer content={formRubric || '*Belum ada rubrik tertulis.*'} />
                  </div>
                ) : (
                  <textarea
                    rows={4}
                    value={formRubric}
                    onChange={(e) => setFormRubric(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-xs leading-relaxed focus:bg-white focus:outline-none focus:border-slate-400 transition"
                    placeholder="Contoh: Langkah 1: Penyetaraan mol (2 poin), Langkah 2: Substitusi ke rumus Nernst (3 poin)..."
                  />
                )}
              </div>

              {/* Jawaban Akhir Baku */}
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Jawaban Akhir Baku (Expected Final Answer)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kp = 2,42 x 10^-4 atau pH = 4.76"
                  value={formExpectedAnswer}
                  onChange={(e) => setFormExpectedAnswer(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-xs focus:bg-white focus:outline-none focus:border-slate-400 transition"
                />
              </div>

              {/* Modal Actions */}
              <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setIsCreateModalOpen(false);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold cursor-pointer transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow-xs cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Menyimpan...' : 'Simpan Butir Soal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DELETE QUESTION */}
      {isDeleteModalOpen && selectedQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95 text-xs">
            <h3 className="font-bold text-rose-600 text-base">Hapus Butir Soal</h3>
            <p className="text-slate-600 leading-relaxed">
              Apakah Anda yakin ingin menghapus soal{' '}
              <strong className="text-slate-900">"{selectedQuestion.title}"</strong> (ID #{selectedQuestion.id})? Tindakan ini bersifat permanen.
            </p>
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold cursor-pointer transition"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteQuestion}
                disabled={isSubmitting}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-semibold transition shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Menghapus...' : 'Hapus Soal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
