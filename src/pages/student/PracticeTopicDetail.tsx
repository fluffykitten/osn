import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Target,
  Zap,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Star,
  Crown,
  BookOpen,
  Search,
  CheckSquare,
  Square,
  ExternalLink,
  Flame,
  LayoutGrid,
  Map as MapIcon,
  Award,
  TrendingUp,
  Tag,
  ChevronRight,
  ChevronLeft,
  Layers,
  Clock,
  Play,
  Share2,
} from 'lucide-react';
import { PILLARS_DATA } from '../../data/syllabusData';
import { SMA_MATERIALS } from '../../data/smaMaterialsData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { TopicSvgArt } from '../../components/materials/TopicSvgArt';
import { ChemistCat } from '../../components/practice/ChemistCatAvatars';
import { questionBankService } from '../../services/questionBankService';
import { getSubmissionHistory, type SavedSubmissionRecord } from '../../services/submissionService';
import {
  getQuestionsForTopic,
  normalizeDifficultyTier,
  getTopicDifficultyBreakdown,
  getTopicProgress,
  getTopicFocusTags,
} from '../../utils/practiceDataUtils';
import type { Question, QuestionDifficulty } from '../../types/database';

// Helper excerpt untuk cuplikan teks soal
const getCleanExcerpt = (text: string, maxLen = 140): string => {
  if (!text) return '';
  const withoutOptions = text.split(/\n\s*[A-E]\.\s+/)[0].trim();
  const inlineMath = withoutOptions.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => `$${math.trim()}$`);
  if (inlineMath.length <= maxLen) return inlineMath;
  return inlineMath.slice(0, maxLen).trim() + '...';
};

export const PracticeTopicDetail: React.FC = () => {
  const { database: rawDatabase, topicId: rawTopicId } = useParams<{
    database?: string;
    topicId?: string;
  }>();
  const navigate = useNavigate();

  const database: 'osn' | 'sma' = rawDatabase === 'sma' ? 'sma' : 'osn';
  const topicNumber = parseInt(rawTopicId || '1', 10) || 1;
  const isSma = database === 'sma';

  const [isLoading, setIsLoading] = useState(true);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);

  // Tampilan: 'map' (Peta Petualangan Quest) atau 'cards' (Katalog Kartu)
  const [viewMode, setViewMode] = useState<'map' | 'cards'>('map');

  // Filter & Pencarian
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unattempted' | 'passed' | 'review'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  // Multi-Selection untuk Latihan Kustom
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);

  // Modal / Drawer Pratinjau Cepat Soal yang Diklik di Quest Map
  const [inspectedQuestion, setInspectedQuestion] = useState<Question | null>(null);

  // Ambil metadata Topik dari silabus
  const topicMeta = useMemo(() => {
    const focusTags = getTopicFocusTags(topicNumber, database);

    if (isSma) {
      const mat = SMA_MATERIALS.find((m) => m.topic_number === topicNumber);
      if (mat) {
        return {
          title: mat.title,
          category: mat.category,
          levelOrGrade: mat.grade,
          summary: mat.summary,
          tags: focusTags,
          totalConceptCount: SMA_MATERIALS.length,
        };
      }
    } else {
      const pillar = PILLARS_DATA.find((p) => p.pillar_number === topicNumber);
      if (pillar) {
        return {
          title: pillar.title,
          category: pillar.category,
          levelOrGrade: 'Silabus Olimpiade Kimia (OSN/IChO)',
          summary: pillar.description,
          tags: focusTags,
          totalConceptCount: PILLARS_DATA.length,
        };
      }
    }

    return {
      title: `Konsep ${topicNumber}`,
      category: 'Kimia',
      levelOrGrade: isSma ? 'SMA Merdeka' : 'OSN Kimia',
      summary: 'Eksplorasi butir soal terstandarisasi untuk menguasai konsep ini.',
      tags: focusTags,
      totalConceptCount: isSma ? 16 : 10,
    };
  }, [isSma, topicNumber, database]);

  // Muat Soal & Submisi Siswa
  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [qRes, subList] = await Promise.all([
          questionBankService.getQuestions(),
          getSubmissionHistory(),
        ]);
        if (isMounted) {
          setAllQuestions(qRes.questions || []);
          setSubmissions(subList || []);
        }
      } catch (err) {
        console.warn('Gagal memuat data topik:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, [database, topicNumber]);

  // Soal-soal spesifik untuk topik ini
  const topicQuestions = useMemo(() => {
    return getQuestionsForTopic(allQuestions, topicNumber, database);
  }, [allQuestions, topicNumber, database]);

  // Map riwayat skor tertinggi siswa per question ID
  const submissionMap = useMemo(() => {
    const map = new Map<number, SavedSubmissionRecord>();
    submissions.forEach((sub) => {
      const existing = map.get(sub.questionId);
      if (!existing || (sub.scorePercentage || 0) > (existing.scorePercentage || 0)) {
        map.set(sub.questionId, sub);
      }
    });
    return map;
  }, [submissions]);

  // Hitung Metrik & Gamifikasi Progres
  const progressMetrics = useMemo(() => {
    return getTopicProgress(topicQuestions, submissions);
  }, [topicQuestions, submissions]);

  const difficultyBreakdown = useMemo(() => {
    return getTopicDifficultyBreakdown(topicQuestions);
  }, [topicQuestions]);

  // Status Rank Gamifikasi Konsep
  const masteryRank = useMemo(() => {
    const pct = progressMetrics.completionPercent;
    const avg = progressMetrics.avgScore;
    if (progressMetrics.status === 'mastered') {
      return {
        title: 'Grandmaster / Medalis',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        textColor: 'text-amber-600',
        icon: Crown,
        tier: 'Tier 3',
        description: 'Tingkat penguasaan istimewa! Kamu telah menaklukkan konsep ini dengan akurasi tinggi.',
      };
    }
    if (pct >= 40 || avg >= 60) {
      return {
        title: 'Penantang Tangguh (Challenger)',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
        textColor: 'text-sky-600',
        icon: Trophy,
        tier: 'Tier 2',
        description: 'Progres sangat baik! Selesaikan sisa soal untuk meraih predikat Medalis.',
      };
    }
    return {
      title: 'Pemula Konsep (Apprentice)',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      textColor: 'text-emerald-600',
      icon: Star,
      tier: 'Tier 1',
      description: 'Langkah awal yang hebat! Mulailah dengan soal-soal fondasi.',
    };
  }, [progressMetrics]);

  // Kalkulasi Estimasi XP Konsep (Maks 1000 XP)
  const conceptXp = useMemo(() => {
    const attemptedXp = progressMetrics.attemptedCount * 25;
    const scoreXp = Math.round((progressMetrics.avgScore / 100) * 500);
    return Math.min(1000, attemptedXp + scoreXp);
  }, [progressMetrics]);

  // Filter Soal berdasarkan Input Pencarian, Status, dan Kesulitan
  const filteredQuestions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return topicQuestions.filter((item) => {
      // 1. Text Search
      if (q) {
        const inText = item.question_text.toLowerCase().includes(q);
        const inTitle = item.title?.toLowerCase().includes(q);
        const inSubTopic = item.subtopic?.toLowerCase().includes(q);
        const inSource = item.source_event?.toLowerCase().includes(q);
        const inYear = item.year?.toString().includes(q);
        if (!inText && !inTitle && !inSubTopic && !inSource && !inYear) return false;
      }

      // 2. Status Filter
      const sub = submissionMap.get(item.id);
      const score = sub?.scorePercentage ?? null;

      if (statusFilter === 'unattempted' && sub) return false;
      if (statusFilter === 'passed' && (score === null || score < 60)) return false;
      if (statusFilter === 'review' && (score === null || score >= 60)) return false;

      // 3. Difficulty Filter
      const tier = normalizeDifficultyTier(item.difficulty);
      if (difficultyFilter !== 'all' && tier !== difficultyFilter) return false;

      return true;
    });
  }, [topicQuestions, searchQuery, statusFilter, difficultyFilter, submissionMap]);

  // Pengelompokan Soal ke dalam 3 Tahapan Quest Map
  const questStages = useMemo(() => {
    const stage1: Question[] = []; // Fondasi & Teori (Easy)
    const stage2: Question[] = []; // Uji Sekolah & OSK (Medium)
    const stage3: Question[] = []; // Boss Stage: OSP / OSN / IChO (Hard)

    filteredQuestions.forEach((q) => {
      const tier = normalizeDifficultyTier(q.difficulty);
      if (tier === 'easy') {
        stage1.push(q);
      } else if (tier === 'medium') {
        stage2.push(q);
      } else {
        stage3.push(q);
      }
    });

    return [
      {
        stageNumber: 1,
        title: 'Tahap 1: Gerbang Fondasi & Teori Konseptual',
        subtitle: 'Kuasai definisi inti, prinsip periodisitas, dan hukum dasar.',
        tierBadge: 'Mudah / Dasar',
        badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        accentBg: 'bg-emerald-500',
        questions: stage1,
      },
      {
        stageNumber: 2,
        title: 'Tahap 2: Medan Laga OSK & Aplikasi Terapan',
        subtitle: 'Asah ketangkasan analisis, stoikiometri, dan perhitungan kuantitatif.',
        tierBadge: 'Menengah / OSK',
        badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
        accentBg: 'bg-sky-500',
        questions: stage2,
      },
      {
        stageNumber: 3,
        title: 'Tahap 3: Puncak Medalis (Boss Raid Stage)',
        subtitle: 'Taklukkan problem kimia tingkat olimpiade nasional (OSP/OSN/IChO).',
        tierBadge: 'Tingkat Lanjut / Boss',
        badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
        accentBg: 'bg-purple-600',
        questions: stage3,
      },
    ];
  }, [filteredQuestions]);

  // Aksi Game Mode 1: Latihan Kilat (5 Soal Pemanasan)
  const handleLaunchQuickDrill = () => {
    if (topicQuestions.length === 0) return;
    // Prioritaskan soal yang belum pernah dikerjakan
    const unattempted = topicQuestions.filter((q) => !submissionMap.has(q.id));
    const pool = unattempted.length >= 5 ? unattempted : topicQuestions;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5).map((q) => q.id);
    navigate(`/worksheet/practice/${selected.join(',')}`);
  };

  // Aksi Game Mode 2: Boss Raid (Soal Tersulit)
  const handleLaunchBossRaid = () => {
    const hardQuestions = topicQuestions.filter(
      (q) => normalizeDifficultyTier(q.difficulty) === 'hard'
    );
    const pool = hardQuestions.length > 0 ? hardQuestions : topicQuestions;
    const selected = pool.slice(0, 5).map((q) => q.id);
    navigate(`/worksheet/practice/${selected.join(',')}`);
  };

  // Aksi Game Mode 3: Kerjakan Soal Terpilih
  const handleLaunchSelected = () => {
    if (selectedQuestionIds.length === 0) return;
    navigate(`/worksheet/practice/${selectedQuestionIds.join(',')}`);
  };

  // Toggle seleksi soal perorangan
  const handleToggleSelectQuestion = (qId: number) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  // Toggle seleksi semua soal yang saat ini tampil
  const handleToggleSelectAll = () => {
    const allIds = filteredQuestions.map((q) => q.id);
    const isAllSelected = allIds.length > 0 && allIds.every((id) => selectedQuestionIds.includes(id));
    if (isAllSelected) {
      setSelectedQuestionIds([]);
    } else {
      setSelectedQuestionIds(Array.from(new Set([...selectedQuestionIds, ...allIds])));
    }
  };

  // Navigasi Topik Berikutnya / Sebelumnya
  const prevTopicNumber = topicNumber > 1 ? topicNumber - 1 : null;
  const nextTopicNumber = topicNumber < topicMeta.totalConceptCount ? topicNumber + 1 : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 animate-fade-in pb-28">
      {/* 1. Header Navigasi & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/practice')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
            <span>Kembali ke Bank Soal</span>
          </button>

          {/* Breadcrumb Trail */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400">
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span
              onClick={() => navigate('/practice')}
              className="text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              {isSma ? 'Kurikulum SMA' : 'Silabus OSN'}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-900 font-bold font-mono">
              Konsep {String(topicNumber).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Quick Prev / Next Concept Switcher */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={!prevTopicNumber}
            onClick={() => prevTopicNumber && navigate(`/practice/${database}/${prevTopicNumber}`)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              prevTopicNumber
                ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer shadow-2xs'
                : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-60'
            }`}
            title="Konsep Sebelumnya"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Konsep Sebelumnya</span>
          </button>
          <span className="text-xs font-mono font-bold text-slate-500 px-1">
            {topicNumber} / {topicMeta.totalConceptCount}
          </span>
          <button
            type="button"
            disabled={!nextTopicNumber}
            onClick={() => nextTopicNumber && navigate(`/practice/${database}/${nextTopicNumber}`)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              nextTopicNumber
                ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer shadow-2xs'
                : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-60'
            }`}
            title="Konsep Berikutnya"
          >
            <span className="hidden md:inline">Konsep Berikutnya</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Hero Arena Konsep Gamifikasi (Matching Papan Tulis Design) */}
      <div className="theme-hero-banner bg-gradient-to-r from-[#596A7A] via-[#708090] to-[#5C6D7D] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#B0C4DE]/30 shadow-md text-[#FFFFF0] relative overflow-hidden space-y-6">
        {/* Subtle Ambient Chemistry Glow */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#FFFFF0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Kolom Kiri: Judul, Badges, & Deskripsi */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-xs font-black font-mono tracking-wider rounded-full bg-[#FFFFF0] text-[#708090] shadow-2xs">
                KONSEP {String(topicNumber).padStart(2, '0')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFF0]/15 backdrop-blur-md rounded-full text-xs font-semibold text-[#FFFFF0] border border-[#B0C4DE]/30">
                <Sparkles size={12} className="text-[#B0C4DE]" />
                <span>{topicMeta.category}</span>
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#FFFFF0]/15 backdrop-blur-md text-[#FFFFF0] border border-[#B0C4DE]/30">
                {topicMeta.levelOrGrade}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFF0] tracking-tight font-display">
              {topicMeta.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#F0F8FF]/90 leading-relaxed max-w-xl">
              {topicMeta.summary}
            </p>

            {/* Tags / Sub-Konsep Kunci */}
            {topicMeta.tags && topicMeta.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-bold text-[#F0F8FF]/80 mr-1 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#B0C4DE]" />
                  <span>Fokus:</span>
                </span>
                {topicMeta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-[#FFFFF0]/15 backdrop-blur-md border border-[#B0C4DE]/30 text-[#FFFFF0] text-[11px] font-mono shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Kolom Kanan: Kartu Progres Penguasaan & XP Gauge (Ivory Surface) */}
          <div className="w-full lg:w-auto shrink-0 bg-[#FFFFF0] text-[#2D3748] rounded-2xl p-5 border border-[#D3D3D3] shadow-sm flex flex-col sm:flex-row lg:flex-col items-center gap-5">
            {/* Visual SVG Art Topik */}
            <div className="w-32 h-20 rounded-xl overflow-hidden bg-[#F0F8FF] border border-[#D3D3D3] flex items-center justify-center p-1">
              <TopicSvgArt
                topicNumber={topicNumber}
                database={database}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Statistik Lingkaran & XP */}
            <div className="text-center sm:text-left lg:text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className={`p-1 rounded-lg ${masteryRank.badgeColor} border`}>
                  <masteryRank.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#708090]">{masteryRank.title}</span>
              </div>

              <div className="flex items-baseline justify-center gap-2 font-mono">
                <span className="text-3xl font-black text-[#2D3748]">
                  {progressMetrics.completionPercent}%
                </span>
                <span className="text-xs font-semibold text-[#708090]">Penguasaan</span>
              </div>

              {/* Progress Bar XP */}
              <div className="w-48 bg-[#D3D3D3]/40 h-2 rounded-full overflow-hidden mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-[#708090] to-[#556677] rounded-full transition-all duration-500"
                  style={{ width: `${progressMetrics.completionPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#708090] px-1">
                <span>{progressMetrics.attemptedCount} / {topicQuestions.length} Selesai</span>
                <span className="text-[#708090] font-bold">+{conceptXp} XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Mini Metrik Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-[#B0C4DE]/30">
          <div className="bg-[#FFFFF0] p-3 rounded-xl border border-[#D3D3D3] text-[#2D3748]">
            <span className="text-[11px] font-bold text-[#708090] block">Total Bank Soal</span>
            <span className="text-lg font-black text-[#2D3748] font-mono">
              {topicQuestions.length} Butir
            </span>
          </div>
          <div className="bg-[#FFFFF0] p-3 rounded-xl border border-[#D3D3D3] text-[#2D3748]">
            <span className="text-[11px] font-bold text-[#708090] block">Rata-rata Akurasi</span>
            <span className="text-lg font-black text-[#708090] font-mono">
              {progressMetrics.avgScore > 0 ? `${progressMetrics.avgScore}%` : '—'}
            </span>
          </div>
          <div className="bg-[#FFFFF0] p-3 rounded-xl border border-[#D3D3D3] text-[#2D3748]">
            <span className="text-[11px] font-bold text-[#708090] block">Soal Terkuasai (≥60)</span>
            <span className="text-lg font-black text-[#708090] font-mono">
              {progressMetrics.completedCount} Butir
            </span>
          </div>
          <div className="bg-[#FFFFF0] p-3 rounded-xl border border-[#D3D3D3] text-[#2D3748]">
            <span className="text-[11px] font-bold text-[#708090] block">Sebaran Kesulitan</span>
            <div className="flex items-center gap-1.5 mt-1 text-xs font-mono font-bold">
              <span className="text-emerald-700">{difficultyBreakdown.easy}E</span>
              <span className="text-slate-400">/</span>
              <span className="text-amber-700">{difficultyBreakdown.medium}M</span>
              <span className="text-slate-400">/</span>
              <span className="text-rose-700">{difficultyBreakdown.hard}H</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Action Bar: Game Modes & View Switcher */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tombol Game Modes Cepat */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleLaunchQuickDrill}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Latihan Kilat (5 Soal)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={handleLaunchBossRaid}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 rounded-xl text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
            >
              <Crown className="w-4 h-4 text-purple-600" />
              <span>Boss Raid (Soal Sulit)</span>
            </button>

            {selectedQuestionIds.length > 0 && (
              <button
                type="button"
                onClick={handleLaunchSelected}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer animate-pulse"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Kerjakan {selectedQuestionIds.length} Soal Terpilih</span>
              </button>
            )}
          </div>

          {/* View Mode Switcher: Quest Map vs Grid Kartu */}
          <div className="flex items-center gap-1.5 self-end md:self-auto bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setViewMode('map')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'map'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5 text-indigo-600" />
              <span>Peta Petualangan (Quest Map)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-sky-600" />
              <span>Katalog Kartu</span>
            </button>
          </div>
        </div>

        {/* Filter Bar: Pencarian, Status, Tingkat Kesulitan */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata kunci butir soal, formula kimia..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
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

          <div className="flex flex-wrap items-center gap-2">
            {/* Filter Status */}
            <div className="flex items-center bg-slate-50 p-0.5 rounded-lg border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  statusFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Semua
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('unattempted')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  statusFilter === 'unattempted' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Belum
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('passed')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  statusFilter === 'passed' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Lulus
              </button>
            </div>

            {/* Filter Tingkat Kesulitan */}
            <div className="flex items-center bg-slate-50 p-0.5 rounded-lg border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setDifficultyFilter('all')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  difficultyFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Semua Level
              </button>
              <button
                type="button"
                onClick={() => setDifficultyFilter('easy')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  difficultyFilter === 'easy' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Mudah
              </button>
              <button
                type="button"
                onClick={() => setDifficultyFilter('medium')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  difficultyFilter === 'medium' ? 'bg-white text-amber-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Sedang
              </button>
              <button
                type="button"
                onClick={() => setDifficultyFilter('hard')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  difficultyFilter === 'hard' ? 'bg-white text-purple-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Sulit
              </button>
            </div>

            {/* Pilih Semua */}
            {filteredQuestions.length > 0 && (
              <button
                type="button"
                onClick={handleToggleSelectAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                {filteredQuestions.every((q) => selectedQuestionIds.includes(q.id)) ? (
                  <>
                    <CheckSquare className="w-3.5 h-3.5 text-sky-600" />
                    <span>Lepas Semua</span>
                  </>
                ) : (
                  <>
                    <Square className="w-3.5 h-3.5 text-slate-400" />
                    <span>Pilih Semua</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA */}
      {isLoading ? (
        <div className="py-24 text-center space-y-3">
          <div className="w-10 h-10 border-3 border-sky-200 border-t-sky-600 rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono text-slate-500">Menyusun arena bank soal konsep...</p>
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-white border border-slate-200 rounded-3xl p-6">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">Tidak Ada Butir Soal yang Cocok</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Coba sesuaikan kata kunci pencarian atau ubah filter status/kesulitan di atas.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('all');
              setDifficultyFilter('all');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Seluruh Filter</span>
          </button>
        </div>
      ) : viewMode === 'map' ? (
        /* ========================================================================= */
        /* MODE 1: PETA PETUALANGAN QUEST (DUOLINGO / LEETCODE STUDY ROADMAP STYLE)  */
        /* ========================================================================= */
        <div className="space-y-8">
          {questStages.map((stage) => {
            if (stage.questions.length === 0) return null;

            const stageAttempted = stage.questions.filter((q) => submissionMap.has(q.id)).length;
            const stagePercent = Math.round((stageAttempted / stage.questions.length) * 100);

            return (
              <div
                key={stage.stageNumber}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6 relative overflow-hidden"
              >
                {/* Stage Header Banner */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${stage.badgeBg}`}>
                        {stage.tierBadge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {stageAttempted} / {stage.questions.length} Ditaklukkan ({stagePercent}%)
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{stage.title}</h3>
                    <p className="text-xs text-slate-500">{stage.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const ids = stage.questions.map((q) => q.id);
                        navigate(`/worksheet/practice/${ids.slice(0, 5).join(',')}`);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 text-slate-600 fill-slate-600" />
                      <span>Kerjakan Tahap Ini (5)</span>
                    </button>
                  </div>
                </div>

                {/* Quest Trail Grid / Interactive Node Map */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {stage.questions.map((question, idx) => {
                    const sub = submissionMap.get(question.id);
                    const score = sub?.scorePercentage ?? null;
                    const isPerfect = score !== null && score >= 85;
                    const isPassed = score !== null && score >= 60;
                    const isReview = score !== null && score < 60;
                    const isSelected = selectedQuestionIds.includes(question.id);

                    return (
                      <div
                        key={question.id}
                        className={`rounded-2xl p-4 sm:p-4.5 border-2 transition-all duration-300 relative group cursor-pointer hover:-translate-y-1 hover:shadow-lg overflow-hidden ${
                          isSelected
                            ? 'bg-sky-50/80 border-sky-400 shadow-md ring-2 ring-sky-400/30'
                            : isPerfect
                            ? 'bg-gradient-to-b from-amber-50/50 to-white border-amber-300 hover:border-amber-400'
                            : isPassed
                            ? 'bg-gradient-to-b from-emerald-50/40 to-white border-emerald-300 hover:border-emerald-400'
                            : isReview
                            ? 'bg-gradient-to-b from-rose-50/40 to-white border-rose-300 hover:border-rose-400'
                            : stage.stageNumber === 1
                            ? 'bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-emerald-500/5'
                            : stage.stageNumber === 2
                            ? 'bg-white border-slate-200/90 hover:border-sky-300 hover:shadow-sky-500/5'
                            : 'bg-white border-slate-200/90 hover:border-purple-300 hover:shadow-purple-500/5'
                        }`}
                        onClick={() => setInspectedQuestion(question)}
                      >
                        {/* Top Accent Strip depending on stage & status */}
                        <div
                          className={`absolute top-0 inset-x-0 h-1 rounded-t-xl z-20 ${
                            isPerfect
                              ? 'bg-gradient-to-r from-amber-400 to-yellow-300'
                              : isPassed
                              ? 'bg-gradient-to-r from-emerald-400 to-teal-400'
                              : isReview
                              ? 'bg-gradient-to-r from-rose-400 to-pink-400'
                              : stage.stageNumber === 1
                              ? 'bg-gradient-to-r from-emerald-400/60 to-emerald-200'
                              : stage.stageNumber === 2
                              ? 'bg-gradient-to-r from-sky-400/60 to-indigo-200'
                              : 'bg-gradient-to-r from-purple-500/60 to-pink-300'
                          }`}
                        />

                        {/* Background Chemist Cat SVG Watermark */}
                        <div className="absolute -right-3 -bottom-3 pointer-events-none select-none opacity-[0.14] group-hover:opacity-[0.25] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 z-0">
                          <ChemistCat
                            seed={question.id}
                            size={112}
                            watermark={true}
                          />
                        </div>

                        {/* Foreground Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full space-y-3.5">
                          {/* Header Row: Node Index + Question ID + Difficulty + Multi-select Checkbox */}
                          <div className="flex items-center justify-between gap-2 pt-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-mono font-bold shadow-2xs ${
                                  isPerfect
                                    ? 'bg-amber-500 text-white'
                                    : isPassed
                                    ? 'bg-emerald-500 text-white'
                                    : isReview
                                    ? 'bg-rose-500 text-white'
                                    : 'bg-slate-800 text-white'
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[11px] font-mono font-bold text-slate-800">
                                    #{question.id}
                                  </span>
                                  {question.year && (
                                    <span className="text-[10px] font-mono text-slate-400">
                                      '{String(question.year).slice(-2)}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] font-mono text-slate-500 font-semibold">
                                  {question.difficulty}
                                </div>
                              </div>
                            </div>

                            {/* Checkbox */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleSelectQuestion(question.id);
                              }}
                              className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                              title={isSelected ? 'Hapus dari pilihan latihan' : 'Pilih untuk latihan gabungan'}
                            >
                              {isSelected ? (
                                <CheckSquare className="w-5 h-5 text-sky-600 fill-sky-50" />
                              ) : (
                                <Square className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
                              )}
                            </div>
                          </div>

                          {/* Question Excerpt & Math KaTeX Preview */}
                          <div className="space-y-1.5 flex-1 min-h-[3.75rem] flex items-center">
                            <div className="text-xs text-slate-700 line-clamp-3 leading-relaxed font-sans">
                              <KaTeXRenderer content={getCleanExcerpt(question.question_text, 120)} />
                            </div>
                          </div>

                          {/* Subtopic / Specific Tag Pill if present */}
                          {question.subtopic && (
                            <div className="pt-0.5">
                              <span className="inline-block px-2 py-0.5 rounded-md bg-slate-50/90 border border-slate-200 text-slate-600 text-[10px] font-mono line-clamp-1 max-w-full">
                                {question.subtopic}
                              </span>
                            </div>
                          )}

                          {/* Bottom Score & Action Tag */}
                          <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-xs">
                            <div>
                              {score !== null ? (
                                <div className="flex items-center gap-1">
                                  {isPerfect ? (
                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                  ) : isPassed ? (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                  ) : (
                                    <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
                                  )}
                                  <span
                                    className={`font-mono font-bold text-[11px] ${
                                      isPerfect
                                        ? 'text-amber-600'
                                        : isPassed
                                        ? 'text-emerald-600'
                                        : 'text-rose-600'
                                    }`}
                                  >
                                    Skor: {score}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-[11px] font-mono text-slate-400">Belum diuji</span>
                              )}
                            </div>

                            <span className="text-xs text-sky-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                              <span>Buka Soal</span>
                              <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ========================================================================= */
        /* MODE 2: KATALOG KARTU MENDALAM (CARD GRID VIEW)                           */
        /* ========================================================================= */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredQuestions.map((question, idx) => {
            const sub = submissionMap.get(question.id);
            const score = sub?.scorePercentage ?? null;
            const isSelected = selectedQuestionIds.includes(question.id);

            return (
              <div
                key={question.id}
                className={`bg-white rounded-3xl p-5 border-2 transition-all flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1 relative group overflow-hidden ${
                  isSelected ? 'border-sky-400 ring-2 ring-sky-400/20' : 'border-slate-200/90'
                }`}
              >
                {/* Background Chemist Cat SVG Watermark */}
                <div className="absolute -right-4 -bottom-4 pointer-events-none select-none opacity-[0.11] group-hover:opacity-[0.22] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 z-0">
                  <ChemistCat
                    seed={question.id}
                    size={135}
                    watermark={true}
                  />
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                  {/* Header Kartu */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white font-mono text-[10px] font-bold">
                          #{question.id}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold border border-sky-100">
                          {question.difficulty}
                        </span>
                        {question.year && (
                          <span className="text-[10px] font-mono text-slate-400">
                            Tahun {question.year}
                          </span>
                        )}
                      </div>
                      {question.subtopic && (
                        <div className="text-[11px] text-slate-500 font-medium line-clamp-1">
                          {question.subtopic}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSelectQuestion(question.id)}
                      className="p-1 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-sky-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                    </button>
                  </div>

                  {/* Teks Soal & KaTeX */}
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans line-clamp-4 flex-1">
                    <KaTeXRenderer content={getCleanExcerpt(question.question_text, 160)} />
                  </div>

                  {/* Footer Kartu & Tombol Aksi */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      {score !== null ? (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] text-slate-400 font-mono">Skor Terbaik:</span>
                          <span
                            className={`font-mono font-bold text-xs ${
                              score >= 60 ? 'text-emerald-600' : 'text-rose-600'
                            }`}
                          >
                            {score}/100
                          </span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-mono">Belum dikerjakan</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => navigate(`/worksheet/practice/${question.id}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Latih Soal Ini</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 5. Sticky Floating Selection Bar (Muncul Saat Ada Soal Terpilih) */}
      {selectedQuestionIds.length > 0 && (
        <div className="fixed bottom-6 inset-x-0 max-w-xl mx-auto px-4 z-40 animate-slide-up">
          <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-slate-700/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold font-mono border border-sky-500/30">
                {selectedQuestionIds.length}
              </div>
              <div>
                <div className="text-xs font-bold text-white">Soal Siap Dilatih</div>
                <button
                  type="button"
                  onClick={() => setSelectedQuestionIds([])}
                  className="text-[11px] text-slate-400 hover:text-rose-300 underline cursor-pointer"
                >
                  Batalkan Pilihan
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLaunchSelected}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <span>Mulai Lembar Kerja</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 6. Modal Pratinjau Cepat Soal yang Diklik (Inspection Sheet) */}
      {inspectedQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto relative overflow-hidden">
            {/* Watermark in background of modal */}
            <div className="absolute -right-6 -bottom-6 pointer-events-none select-none opacity-[0.06] z-0">
              <ChemistCat seed={inspectedQuestion.id} size={220} watermark={true} />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <ChemistCat seed={inspectedQuestion.id} size={46} className="animate-pulse shrink-0" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono text-xs font-bold">
                        #{inspectedQuestion.id}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-bold">
                        {inspectedQuestion.difficulty}
                      </span>
                      {inspectedQuestion.year && (
                        <span className="text-xs font-mono text-slate-400">
                          Tahun {inspectedQuestion.year}
                        </span>
                      )}
                    </div>
                    {inspectedQuestion.subtopic && (
                      <div className="text-xs text-slate-500 font-medium">
                        Subtopik: {inspectedQuestion.subtopic}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedQuestion(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Isi Butir Soal:
                </h4>
                <div className="text-sm text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200/80 font-sans">
                  <KaTeXRenderer content={inspectedQuestion.question_text} />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    handleToggleSelectQuestion(inspectedQuestion.id);
                    setInspectedQuestion(null);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                    selectedQuestionIds.includes(inspectedQuestion.id)
                      ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {selectedQuestionIds.includes(inspectedQuestion.id)
                    ? 'Keluarkan dari Pilihan'
                    : 'Pilih untuk Latihan Gabungan'}
                </button>

                <button
                  type="button"
                  onClick={() => navigate(`/worksheet/practice/${inspectedQuestion.id}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Kerjakan Soal Ini Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
