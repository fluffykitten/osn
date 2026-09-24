/**
 * PracticeBank.tsx
 * Halaman Bank Soal & Pusat Penguasaan Topik Siswa.
 * Mengadopsi tata letak visual bertema sains kimia (serupa MaterialsDatabase)
 * dengan Segmented Dual Switcher (10 Pilar OSN vs 16 Modul SMA),
 * Kartu Topik Interaktif dengan TopicSvgArt, Progress Mastery,
 * Stacked Difficulty Bar ala LeetCode, Latihan Kilat AI, dan Drawer Butir Soal.
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PILLARS_DATA } from '../../data/syllabusData';
import { SMA_MATERIALS, type SmaMaterialItem } from '../../data/smaMaterialsData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { resolveQuestionTopicMeta } from '../../utils/topicMapping';
import { questionBankService } from '../../services/questionBankService';
import { tagAndBookmarkService } from '../../services/tagAndBookmarkService';
import {
  getSubmissionHistory,
  syncSubmissionsFromCloud,
  type SavedSubmissionRecord,
} from '../../services/submissionService';
import { useAuth } from '../../contexts/AuthContext';
import { QuestionFilters } from '../../components/worksheet/QuestionFilters';
import { DiagramViewerModal } from '../../components/common/DiagramViewerModal';
import { PracticeStatsHeader } from '../../components/practice/PracticeStatsHeader';
import { PracticeTopicCard } from '../../components/practice/PracticeTopicCard';
import { TopicQuestionDrawer } from '../../components/practice/TopicQuestionDrawer';
import {
  getQuestionsForTopic,
  getTopicDifficultyBreakdown,
  getTopicProgress,
  calculateOverallPracticeStats,
  getQuickDrillQuestionIds,
  getTopicFocusTags,
} from '../../utils/practiceDataUtils';
import type { Question, QuestionFilter, QuestionDifficulty, ModuleItem } from '../../types/database';
import {
  Search,
  BookOpen,
  Trophy,
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
  LayoutGrid,
  RefreshCw,
} from 'lucide-react';

// Cache memoization untuk cuplikan teks soal di tabel filter lanjutan
const excerptCache = new Map<string, string>();
const getQuestionExcerpt = (text: string): string => {
  if (!text) return '';
  const cached = excerptCache.get(text);
  if (cached) return cached;
  const withoutOptions = text.split(/\n\s*[A-E]\.\s+/)[0].trim();
  const processed = withoutOptions.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => `$${math.trim()}$`);
  excerptCache.set(text, processed);
  return processed;
};

// Skeleton Loader untuk kartu topik visual
const TopicCardSkeleton: React.FC = () => (
  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs animate-pulse space-y-4">
    <div className="h-36 -mx-6 -mt-6 bg-slate-100 rounded-t-2xl" />
    <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
    <div className="h-4 w-full bg-slate-100 rounded-md" />
    <div className="h-4 w-2/3 bg-slate-100 rounded-md" />
    <div className="h-10 bg-slate-100 rounded-xl" />
    <div className="flex gap-2 pt-2">
      <div className="h-9 flex-1 bg-slate-200 rounded-xl" />
      <div className="h-9 flex-1 bg-slate-100 rounded-xl" />
    </div>
  </div>
);

export const PracticeBank: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();

  const dbParam = searchParams.get('db'); // 'osn' | 'sma'

  // Mode Database: 10 Pilar OSN vs 16 Modul SMA
  const [activeDatabase, setActiveDatabase] = useState<'osn' | 'sma'>(() => {
    if (dbParam === 'sma' || dbParam === 'osn') return dbParam;
    try {
      const saved = localStorage.getItem('osn_active_practice_db');
      if (saved === 'sma' || saved === 'osn') return saved;
    } catch {
      // ignore
    }
    return 'osn';
  });

  // Tampilan: 'cards' (Default: Kartu Topik Visual) atau 'table' (Mode Eksplorasi Lanjutan / Filter Soal)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Master Data Soal & Submisi Siswa
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Search & Category Filters (untuk Tampilan Kartu Topik)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedGrade, setSelectedGrade] = useState<'Semua' | 'Kelas 10' | 'Kelas 11' | 'Kelas 12'>('Semua');

  // Drawer Jelajahi Butir Soal Topik
  const [activeDrawerTopicId, setActiveDrawerTopicId] = useState<number | null>(null);

  // State untuk Mode Eksplorasi Lanjutan (Tabel Filter)
  const [filter, setFilter] = useState<QuestionFilter>({
    search: '',
    difficulty: 'ALL',
    pillarNumber: 'ALL',
    questionStyle: 'ALL',
    bookmarkedOnly: false,
    selectedTags: [],
    sortBy: 'newest',
  });
  const [filteredTableQuestions, setFilteredTableQuestions] = useState<Question[]>([]);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);
  const [pageSize, setPageSize] = useState<10 | 25 | 50>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalQuestion, setActiveModalQuestion] = useState<Question | null>(null);
  const [newTagInput, setNewTagInput] = useState<string>('');
  const [previewDiagramUrl, setPreviewDiagramUrl] = useState<string | null>(null);
  const [previewDiagramTitle, setPreviewDiagramTitle] = useState<string>('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Sinkronisasi Switcher Database dengan URL query parameter
  useEffect(() => {
    if (dbParam === 'sma' || dbParam === 'osn') {
      setActiveDatabase(dbParam);
    }
  }, [dbParam]);

  const handleDatabaseSwitch = (newDb: 'osn' | 'sma') => {
    setActiveDatabase(newDb);
    setSelectedCategory('Semua');
    setSelectedGrade('Semua');
    setSearchQuery('');
    try {
      localStorage.setItem('osn_active_practice_db', newDb);
    } catch {
      // ignore
    }
    setSearchParams({ db: newDb });
  };

  // Muat Data Soal & Submisi saat pertama kali render
  const loadInitialData = async (forceRefresh = false) => {
    setIsLoading(true);
    try {
      // 1. Ambil seluruh butir soal (memanfaatkan smart in-memory cache)
      const res = await questionBankService.getQuestions(undefined, { forceRefresh });
      const qList = res.questions || [];
      setAllQuestions(qList);

      // 2. Ambil riwayat pengerjaan siswa
      const localSubs = getSubmissionHistory(user?.id);
      setSubmissions(localSubs);

      // 3. Sinkronkan dengan Supabase di background
      syncSubmissionsFromCloud(user?.id).then((cloudSubs) => {
        if (cloudSubs && cloudSubs.length > 0) {
          setSubmissions(cloudSubs);
        }
      });
    } catch (err) {
      console.warn('Gagal memuat data bank soal siswa:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, [user?.id]);

  // Muat ulang daftar soal saat filter mode tabel berubah
  useEffect(() => {
    if (viewMode === 'table') {
      const fetchFilteredTable = async () => {
        try {
          const res = await questionBankService.getQuestions(filter);
          setFilteredTableQuestions(res.questions || []);
          setCurrentPage(1);
        } catch (e) {
          console.warn('Gagal memuat filter tabel:', e);
        }
      };
      fetchFilteredTable();
    }
  }, [filter, viewMode]);

  // Hitung Statistik Global Gamifikasi
  const overallStats = useMemo(() => {
    return calculateOverallPracticeStats(allQuestions, submissions, activeDatabase);
  }, [allQuestions, submissions, activeDatabase]);

  // Daftar Kategori Unik untuk Filter Tab Aktif
  const categories = useMemo(() => {
    const list =
      activeDatabase === 'sma'
        ? (selectedGrade === 'Semua' ? SMA_MATERIALS : SMA_MATERIALS.filter((m) => m.grade === selectedGrade))
        : PILLARS_DATA;
    const set = new Set(list.map((m) => m.category));
    return ['Semua', ...Array.from(set)];
  }, [activeDatabase, selectedGrade]);

  // Filter Topik / Modul yang ditampilkan pada Grid Kartu
  const filteredTopics = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (activeDatabase === 'sma') {
      return SMA_MATERIALS.filter((mat) => {
        const matchGrade = selectedGrade === 'Semua' || mat.grade === selectedGrade;
        const matchCategory = selectedCategory === 'Semua' || mat.category === selectedCategory;
        const matchSearch =
          !query ||
          mat.title.toLowerCase().includes(query) ||
          mat.summary.toLowerCase().includes(query) ||
          mat.grade.toLowerCase().includes(query) ||
          mat.allTags.some((t) => t.toLowerCase().includes(query));

        return matchGrade && matchCategory && matchSearch;
      });
    }

    // OSN Track (10 Pilar)
    return PILLARS_DATA.filter((pillar) => {
      const matchCategory = selectedCategory === 'Semua' || pillar.category === selectedCategory;
      const matchSearch =
        !query ||
        pillar.title.toLowerCase().includes(query) ||
        pillar.description.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [activeDatabase, searchQuery, selectedCategory, selectedGrade]);

  // Handler Latihan Kilat (AI Mode) dari Kartu Topik
  const handleQuickDrill = (topicNumber: number) => {
    const topicQuestions = getQuestionsForTopic(allQuestions, topicNumber, activeDatabase);
    const drillIds = getQuickDrillQuestionIds(topicQuestions, submissions, 3);
    if (drillIds.length > 0) {
      navigate(`/worksheet/practice/${drillIds.join(',')}`);
    }
  };

  // Handler Buka Halaman Eksplorasi & Gamifikasi Soal Topik
  const handleOpenExploreDrawer = (topicNumber: number) => {
    navigate(`/practice/${activeDatabase}/${topicNumber}`);
  };

  // Detail topik aktif untuk Drawer
  const activeDrawerTopicData = useMemo(() => {
    if (activeDrawerTopicId === null) return null;

    if (activeDatabase === 'sma') {
      const mat = SMA_MATERIALS.find((m) => m.topic_number === activeDrawerTopicId);
      if (!mat) return null;
      const qList = getQuestionsForTopic(allQuestions, activeDrawerTopicId, 'sma');
      return {
        topicNumber: mat.topic_number,
        title: mat.title,
        category: `${mat.grade} · ${mat.category}`,
        questions: qList,
      };
    }

    const pillar = PILLARS_DATA.find((p) => p.pillar_number === activeDrawerTopicId);
    if (!pillar) return null;
    const qList = getQuestionsForTopic(allQuestions, activeDrawerTopicId, 'osn');
    return {
      topicNumber: pillar.pillar_number,
      title: pillar.title,
      category: pillar.category,
      questions: qList,
    };
  }, [activeDrawerTopicId, activeDatabase, allQuestions]);

  // Handler Latihan dari Drawer (Soal Tunggal atau Multi-Soal)
  const handleStartPracticeFromDrawer = (questionIds: number[]) => {
    if (questionIds.length > 0) {
      navigate(`/worksheet/practice/${questionIds.join(',')}`);
    }
  };

  // Handler Tag & Bookmark pada Mode Tabel
  const handleToggleBookmark = (qId: number) => {
    tagAndBookmarkService.toggleBookmark(qId);
    setFilteredTableQuestions((prev) =>
      prev.map((q) => (q.id === qId ? { ...q, is_bookmarked: !q.is_bookmarked } : q))
    );
  };

  const handleAddTagToModalQuestion = (qId: number) => {
    if (!newTagInput.trim()) return;
    tagAndBookmarkService.addCustomTag(qId, newTagInput.trim());
    const updatedTags = tagAndBookmarkService.getCustomTags(qId);
    setActiveModalQuestion((prev) => (prev ? { ...prev, custom_tags: updatedTags } : null));
    setNewTagInput('');
  };

  const handleRemoveTagFromModalQuestion = (qId: number, tagToRemove: string) => {
    tagAndBookmarkService.removeCustomTag(qId, tagToRemove);
    const updatedTags = tagAndBookmarkService.getCustomTags(qId);
    setActiveModalQuestion((prev) => (prev ? { ...prev, custom_tags: updatedTags } : null));
  };

  // Pagination untuk Mode Tabel
  const totalFilteredTable = filteredTableQuestions.length;
  const totalPagesTable = Math.max(1, Math.ceil(totalFilteredTable / pageSize));
  const activePageTable = Math.min(Math.max(1, currentPage), totalPagesTable);
  const startIndexTable = (activePageTable - 1) * pageSize;
  const endIndexTable = Math.min(startIndexTable + pageSize, totalFilteredTable);
  const paginatedTableQuestions = useMemo(() => {
    return filteredTableQuestions.slice(startIndexTable, endIndexTable);
  }, [filteredTableQuestions, startIndexTable, endIndexTable]);

  const handleToggleSelectQuestion = (qId: number) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const isCurrentPageAllSelected = useMemo(() => {
    if (paginatedTableQuestions.length === 0) return false;
    return paginatedTableQuestions.every((q) => selectedQuestionIds.includes(q.id));
  }, [paginatedTableQuestions, selectedQuestionIds]);

  const handleToggleSelectCurrentPage = () => {
    if (isCurrentPageAllSelected) {
      const pageIds = new Set(paginatedTableQuestions.map((q) => q.id));
      setSelectedQuestionIds((prev) => prev.filter((id) => !pageIds.has(id)));
    } else {
      const currentSelected = new Set(selectedQuestionIds);
      paginatedTableQuestions.forEach((q) => currentSelected.add(q.id));
      setSelectedQuestionIds(Array.from(currentSelected));
    }
  };

  const getDifficultyBadgeColor = (diff: QuestionDifficulty | string) => {
    switch (diff) {
      case 'SMA-Mudah':
      case 'SMA-10':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'SMA-Sedang':
      case 'SMA-11':
      case 'OSK':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'SMA-Sulit':
      case 'SMA-12':
      case 'OSP':
      case 'OSN':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Header Eksekutif Gamifikasi Siswa */}
      <PracticeStatsHeader
        stats={overallStats}
        activeDatabase={activeDatabase}
        onLaunchRecommendedDrill={(qIds) => {
          navigate(`/worksheet/practice/${qIds.join(',')}`);
        }}
      />

      {/* 2. Segmented Dual Database Switcher: OSN vs SMA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#D3D3D3] pb-5">
        <div className="inline-flex p-1.5 bg-[#B0C4DE]/20 rounded-2xl border border-[#D3D3D3] shadow-inner w-full sm:w-auto">
          {/* Tombol Tab OSN */}
          <button
            type="button"
            onClick={() => handleDatabaseSwitch('osn')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeDatabase === 'osn'
                ? 'bg-[#FFFFF0] text-[#708090] shadow-sm border border-[#B0C4DE]/60'
                : 'text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
            }`}
          >
            <Trophy className={`w-4 h-4 ${activeDatabase === 'osn' ? 'text-[#708090]' : 'text-[#708090]/60'}`} />
            <span>Bank Soal Olimpiade (OSN)</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                activeDatabase === 'osn' ? 'bg-[#B0C4DE]/40 text-[#708090]' : 'bg-[#D3D3D3]/60 text-[#708090]'
              }`}
            >
              10 Pilar
            </span>
          </button>

          {/* Tombol Tab SMA */}
          <button
            type="button"
            onClick={() => handleDatabaseSwitch('sma')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeDatabase === 'sma'
                ? 'bg-[#FFFFF0] text-[#708090] shadow-sm border border-[#B0C4DE]/60'
                : 'text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeDatabase === 'sma' ? 'text-[#708090]' : 'text-[#708090]/60'}`} />
            <span>Bank Soal Kurikulum SMA</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                activeDatabase === 'sma' ? 'bg-[#B0C4DE]/40 text-[#708090]' : 'bg-[#D3D3D3]/60 text-[#708090]'
              }`}
            >
              16 Modul
            </span>
          </button>
        </div>

        {/* View Mode Switcher: Cards vs Table Mode */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <div className="flex items-center bg-[#FFFFF0] p-1 rounded-xl border border-[#D3D3D3]">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-[#B0C4DE]/35 text-[#708090] shadow-2xs border border-[#B0C4DE]/60'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
              title="Tampilkan dalam bentuk Kartu Topik Visual"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Kartu Topik Visual</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#B0C4DE]/35 text-[#708090] shadow-2xs border border-[#B0C4DE]/60'
                  : 'text-[#708090] hover:text-[#2D3748]'
              }`}
              title="Tampilkan dalam mode tabel filter teknis / kurasi mendalam"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Eksplorasi Lanjutan</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => loadInitialData(true)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title="Segarkan Data Bank Soal"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW MODE 1: KARTU TOPIK VISUAL (DEFAULT SISWA)                          */}
      {/* ========================================================================= */}
      {viewMode === 'cards' ? (
        <div className="space-y-6">
          {/* Toolbar Pencarian & Filter Kategori */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    activeDatabase === 'sma'
                      ? 'Cari modul SMA, materi asam basa, stokiometri, atau konsep...'
                      : 'Cari topik silabus OSN, termodinamika, orbital atom, nernst...'
                  }
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* SMA Grade Filter (Khusus Tab SMA) */}
              {activeDatabase === 'sma' && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {(['Semua', 'Kelas 10', 'Kelas 11', 'Kelas 12'] as const).map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setSelectedGrade(grade)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        selectedGrade === grade
                          ? 'bg-emerald-600 text-white shadow-2xs'
                          : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Pills Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1">
              <span className="text-[11px] font-bold text-slate-400 mr-1 shrink-0">Kategori:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? activeDatabase === 'sma'
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'bg-sky-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Kartu Topik Interaktif (3 Kolom) */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <TopicCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredTopics.length === 0 ? (
            <div className="py-20 text-center space-y-3 bg-white border border-slate-200 rounded-3xl">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-800">Topik Tidak Ditemukan</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tidak ada materi silabus yang cocok dengan kata kunci &quot;{searchQuery}&quot; pada kategori ini.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                  setSelectedGrade('Semua');
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topicItem) => {
                const topicNumber =
                  'pillar_number' in topicItem ? topicItem.pillar_number : topicItem.topic_number;
                const topicQuestions = getQuestionsForTopic(allQuestions, topicNumber, activeDatabase);
                const breakdown = getTopicDifficultyBreakdown(topicQuestions);
                const progress = getTopicProgress(topicQuestions, submissions);

                const isSmaItem = 'grade' in topicItem;
                const levelOrGrade = isSmaItem
                  ? `${(topicItem as SmaMaterialItem).grade} · ${(topicItem as SmaMaterialItem).curriculumPhase}`
                  : (topicItem as any).level || 'Puspresnas / IChO';

                const summaryText =
                  'summary' in topicItem ? topicItem.summary : (topicItem as ModuleItem).description;

                const tags = getTopicFocusTags(topicNumber, activeDatabase);

                return (
                  <PracticeTopicCard
                    key={`${activeDatabase}-${topicNumber}`}
                    topicNumber={topicNumber}
                    database={activeDatabase}
                    title={topicItem.title}
                    summary={summaryText}
                    category={topicItem.category}
                    levelOrGrade={levelOrGrade}
                    tags={tags}
                    difficultyBreakdown={breakdown}
                    progress={progress}
                    onQuickDrill={handleQuickDrill}
                    onExploreQuestions={handleOpenExploreDrawer}
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* ========================================================================= */
        /* VIEW MODE 2: MODE EKSPLORASI LANJUTAN (TABEL FILTER MENDALAM)            */
        /* ========================================================================= */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Mobile Filter Drawer */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              <div
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              <div className="relative ml-auto w-full max-w-xs bg-white h-full p-4 overflow-y-auto shadow-2xl flex flex-col">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="font-bold text-slate-800 text-sm">Filter Bank Soal</span>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <QuestionFilters
                  filter={filter}
                  onChange={(newF: QuestionFilter) => {
                    setFilter(newF);
                    setIsMobileFilterOpen(false);
                  }}
                  totalFound={totalFilteredTable}
                />
              </div>
            </div>
          )}

          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-20">
              <QuestionFilters
                filter={filter}
                onChange={setFilter}
                totalFound={totalFilteredTable}
              />
            </div>
          </div>

          {/* Question List View */}
          <div className="lg:col-span-3 space-y-4">
            {/* Header bar */}
            <div
              id="question-results-top"
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleSelectCurrentPage}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-slate-900 cursor-pointer"
                >
                  {isCurrentPageAllSelected ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                  <span>Pilih Semua di Halaman Ini</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-500">Tampilkan:</span>
                {( [10, 25, 50] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setPageSize(size);
                      setCurrentPage(1);
                    }}
                    className={`px-2.5 py-1 rounded-lg font-mono font-bold ${
                      pageSize === size
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            {paginatedTableQuestions.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-800 text-sm">Tidak ada soal yang sesuai filter</h3>
                <p className="text-xs text-slate-500">
                  Coba sesuaikan kata kunci atau bersihkan tag pencarian Anda.
                </p>
              </div>
            ) : (
              paginatedTableQuestions.map((q) => {
                const isSelected = selectedQuestionIds.includes(q.id);
                const meta = resolveQuestionTopicMeta(q);

                return (
                  <div
                    key={q.id}
                    className={`bg-white border rounded-2xl p-5 transition-all space-y-3 ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/10 shadow-xs'
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          type="button"
                          onClick={() => handleToggleSelectQuestion(q.id)}
                          className="cursor-pointer"
                        >
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-300" />
                          )}
                        </button>
                        <span className="font-mono font-bold text-slate-800 text-xs">
                          #{q.id}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold border ${getDifficultyBadgeColor(
                            q.difficulty
                          )}`}
                        >
                          {q.difficulty}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                          {meta.topicBadgeLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleToggleBookmark(q.id)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            q.is_bookmarked
                              ? 'bg-amber-50 border-amber-200 text-amber-600'
                              : 'border-slate-200 text-slate-400 hover:text-slate-600'
                          }`}
                          title={q.is_bookmarked ? 'Hapus bookmark' : 'Simpan bookmark'}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${q.is_bookmarked ? 'fill-amber-500' : ''}`} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveModalQuestion(q)}
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                          title="Lihat Pratinjau & Rubrik"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div className="text-xs text-slate-700 line-clamp-3 leading-relaxed">
                      <KaTeXRenderer content={getQuestionExcerpt(q.question_text)} />
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <span className="text-slate-500 text-[11px] font-mono">
                        Bobot: <strong>{q.total_points || 10} Poin</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate(`/worksheet/practice/${q.id}`)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
                      >
                        <span>Kerjakan Mandiri</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            {/* Pagination Controls */}
            {totalPagesTable > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  type="button"
                  disabled={activePageTable <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold disabled:opacity-40"
                >
                  Sebelumnya
                </button>
                <span className="text-xs font-mono text-slate-600">
                  Halaman {activePageTable} dari {totalPagesTable}
                </span>
                <button
                  type="button"
                  disabled={activePageTable >= totalPagesTable}
                  onClick={() => setCurrentPage((p) => Math.min(totalPagesTable, p + 1))}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold disabled:opacity-40"
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Drawer Eksplorasi Butir Soal Topik */}
      {activeDrawerTopicData && (
        <TopicQuestionDrawer
          isOpen={Boolean(activeDrawerTopicId)}
          onClose={() => setActiveDrawerTopicId(null)}
          topicTitle={activeDrawerTopicData.title}
          topicNumber={activeDrawerTopicData.topicNumber}
          category={activeDrawerTopicData.category}
          database={activeDatabase}
          questions={activeDrawerTopicData.questions}
          submissions={submissions}
          onStartPractice={handleStartPracticeFromDrawer}
        />
      )}

      {/* 4. Modal Pratinjau Detail & Rubrik Soal (untuk Mode Tabel) */}
      {activeModalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setActiveModalQuestion(null)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col z-10 overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-slate-800">
                Detail Soal #{activeModalQuestion.id}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalQuestion(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <KaTeXRenderer content={activeModalQuestion.question_text} />
              {activeModalQuestion.solution_rubric && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                  <strong className="block text-slate-800">Pedoman Penskoran:</strong>
                  <KaTeXRenderer content={activeModalQuestion.solution_rubric} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. Cloudflare R2 Diagram Zoom Modal */}
      <DiagramViewerModal
        isOpen={Boolean(previewDiagramUrl)}
        onClose={() => setPreviewDiagramUrl(null)}
        imageUrl={previewDiagramUrl || ''}
        title={previewDiagramTitle || 'Diagram Soal'}
      />

      {/* 6. Floating Sticky Bar untuk Menjalankan Soal Terpilih pada Mode Tabel */}
      {selectedQuestionIds.length > 0 && viewMode === 'table' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-4 max-w-xl w-[92vw]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-sm flex items-center justify-center">
              {selectedQuestionIds.length}
            </span>
            <span className="text-xs font-bold text-white">
              {selectedQuestionIds.length} Butir Soal Terpilih
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedQuestionIds([])}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={() => navigate(`/worksheet/practice/${selectedQuestionIds.join(',')}`)}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md"
            >
              Kerjakan Sekarang
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PracticeBank;
