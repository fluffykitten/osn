import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Play,
  Award,
  Sparkles,
  Filter,
  Search,
  Layers,
  Radio,
  Copy,
  Check,
  BookOpen,
  Atom,
  Flame,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Target,
  KeyRound,
  GraduationCap,
  School,
  RotateCcw,
  Eye,
  Table as TableIcon,
  LayoutGrid,
  ExternalLink,
} from 'lucide-react';
import {
  studentWorksheetService,
  type StudentWorksheetItem,
  type ActiveWorksheetSession,
} from '../../services/studentWorksheetService';
import { syncSubmissionsFromCloud } from '../../services/submissionService';
import { classroomService } from '../../services/classroomService';
import { worksheetRealtimeService } from '../../services/worksheetRealtimeService';
import { useAuth } from '../../contexts/AuthContext';
import { FranticCatStudySvg } from '../../components/worksheet/FranticCatStudySvg';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import { PILLARS_DATA } from '../../data/syllabusData';

export const StudentWorksheetList: React.FC = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const studentEmail =
    user?.email ||
    profile?.email ||
    localStorage.getItem('osn_student_email') ||
    'siswa@gmail.com';

  const [worksheets, setWorksheets] = useState<StudentWorksheetItem[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'teacher' | 'in_progress' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeSession, setActiveSession] = useState<ActiveWorksheetSession | null>(null);

  // Klaim Token Live Guru State
  const [claimTokenInput, setClaimTokenInput] = useState('');
  const [claimError, setClaimError] = useState<string | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);

  // Completed Items Table / Pagination & Filter State
  const [completedPage, setCompletedPage] = useState(1);
  const completedPageSize = 8;
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<'all' | number>('all');
  const [completedViewMode, setCompletedViewMode] = useState<'table' | 'cards'>('table');

  // Pantau sesi worksheet yang sedang aktif dikerjakan siswa
  useEffect(() => {
    const updateSession = () => {
      const session = studentWorksheetService.getActiveSession(user?.id);
      setActiveSession(session);
    };
    updateSession();
    window.addEventListener('osn_active_worksheet_changed', updateSession);
    window.addEventListener('storage', updateSession);
    return () => {
      window.removeEventListener('osn_active_worksheet_changed', updateSession);
      window.removeEventListener('storage', updateSession);
    };
  }, [user?.id]);

  // Muat daftar worksheet siswa (tugas guru + soal yang sedang dikerjakan / selesai)
  const loadWorksheets = async () => {
    if (user?.id) {
      try {
        await syncSubmissionsFromCloud(user.id);
      } catch (err) {
        console.warn('Gagal sinkronisasi data submission dari cloud:', err);
      }
    }
    const list = studentWorksheetService.getStudentWorksheets(user?.id);

    if (studentEmail) {
      try {
        const assignments = await classroomService.getStudentAssignments(studentEmail, user?.id);
        const assignmentItems: StudentWorksheetItem[] = assignments.map((asg) => {
          const rawItem: StudentWorksheetItem = {
            id: asg.worksheet_id,
            type: 'teacher_assignment',
            title: asg.worksheet?.title || `Tugas: ${asg.classroom?.name || 'Kelas OSN'}`,
            description: asg.worksheet?.description || `Ditugaskan oleh Guru Pembina di kelas ${asg.classroom?.name}`,
            category: asg.classroom?.name || 'Tugas Kelas Binaan',
            token: asg.worksheet?.access_token,
            item_count: asg.worksheet?.item_count || 10,
            time_limit_minutes: asg.worksheet?.time_limit_minutes || 60,
            pass_score: asg.worksheet?.pass_score || 70,
            status: 'not_started',
            enrolled_at: asg.assigned_at,
            last_accessed_at: asg.assigned_at,
          };
          return studentWorksheetService.enrichWorksheetStatus(rawItem, user?.id);
        });

        // Gabungkan tanpa duplikat
        const merged = [...assignmentItems];
        list.forEach((item) => {
          if (!merged.some((m) => m.id === item.id && m.type === item.type)) {
            merged.push(item);
          }
        });
        setWorksheets(merged);
        return;
      } catch (e) {
        console.warn('Gagal memuat tugas kelas siswa:', e);
      }
    }

    setWorksheets(list);
  };

  useEffect(() => {
    loadWorksheets();
  }, [studentEmail, user?.id]);

  // Statistik Ringkasan Siswa
  const stats = useMemo(() => {
    const total = worksheets.length;
    const teacherCount = worksheets.filter(
      (w) => w.type === 'live' || w.type === 'teacher_assignment'
    ).length;
    const completedCount = worksheets.filter((w) => w.status === 'completed').length;
    const inProgressCount = worksheets.filter((w) => w.status === 'in_progress').length;

    return { total, teacherCount, completedCount, inProgressCount };
  }, [worksheets]);

  // Filter Utama berdasarkan search query
  const queryFilteredWorksheets = useMemo(() => {
    if (!searchQuery.trim()) return worksheets;
    const query = searchQuery.toLowerCase();
    return worksheets.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchCategory = item.category?.toLowerCase().includes(query);
      const matchToken = item.token?.toLowerCase().includes(query);
      return matchTitle || matchDesc || matchCategory || matchToken;
    });
  }, [worksheets, searchQuery]);

  // Kelompok Tugas Guru & In-Progress (Active actionable items)
  const activeActionableItems = useMemo(() => {
    return queryFilteredWorksheets.filter((w) => {
      if (activeTab === 'teacher') {
        return w.type === 'live' || w.type === 'teacher_assignment';
      }
      if (activeTab === 'in_progress') {
        return w.status === 'in_progress';
      }
      // Pada tab 'all': tampilkan tugas guru dan semua item yang belum selesai
      return (w.type === 'live' || w.type === 'teacher_assignment') || w.status !== 'completed';
    });
  }, [queryFilteredWorksheets, activeTab]);

  // Kelompok Soal yang Selesai Dinilai
  const allCompletedItems = useMemo(() => {
    return queryFilteredWorksheets.filter((w) => w.status === 'completed');
  }, [queryFilteredWorksheets]);

  // Filter Topik / Pilar untuk Soal Selesai
  const filteredCompletedItems = useMemo(() => {
    let result = allCompletedItems;
    if (selectedPillarFilter !== 'all') {
      result = result.filter((item) => item.pillar_number === selectedPillarFilter);
    }
    return result;
  }, [allCompletedItems, selectedPillarFilter]);

  // Paginasi untuk Soal Selesai
  const totalCompletedPages = Math.max(1, Math.ceil(filteredCompletedItems.length / completedPageSize));
  const paginatedCompletedItems = useMemo(() => {
    const startIndex = (completedPage - 1) * completedPageSize;
    return filteredCompletedItems.slice(startIndex, startIndex + completedPageSize);
  }, [filteredCompletedItems, completedPage, completedPageSize]);

  // Reset page saat filter atau query berubah
  useEffect(() => {
    setCompletedPage(1);
  }, [searchQuery, selectedPillarFilter, activeTab]);

  const handleCopyToken = (token: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const handleOpenWorksheet = (item: StudentWorksheetItem) => {
    if (item.type === 'live' && item.token) {
      navigate(`/worksheet/live/${item.token}`);
    } else if (item.type === 'teacher_assignment') {
      navigate(`/worksheet/teacher_assignment/${item.id}`);
    } else if (item.type === 'practice') {
      navigate(`/worksheet/practice/${item.id}`);
    } else {
      navigate(`/worksheet/practice/${item.id}`);
    }
  };

  // Siswa mengklaim token sesi live guru
  const handleClaimToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimTokenInput.trim()) return;
    const clean = claimTokenInput.trim().toUpperCase();
    setIsClaiming(true);
    setClaimError(null);

    try {
      const res = await worksheetRealtimeService.joinWorksheetByToken(clean, {
        id: user?.id,
        name: profile?.full_name || studentEmail,
      });

      if (res.success && res.worksheet) {
        studentWorksheetService.enrollWorksheet(res.worksheet, clean, 'Guru Pembina OSN', user?.id);
        navigate(`/worksheet/live/${clean}`);
      } else {
        setClaimError(res.error || 'Token sesi live tidak ditemukan atau belum aktif.');
      }
    } catch (err: any) {
      setClaimError(err.message || 'Gagal memvalidasi token sesi live.');
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
        {/* Header Section (Compact & Sleek with Integrated Bank Soal CTA) */}
        <div className="theme-hero-banner bg-gradient-to-r from-[#596A7A] via-[#708090] to-[#5C6D7D] text-[#FFFFF0] rounded-3xl p-6 sm:p-7 shadow-sm border border-[#B0C4DE]/30 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#FFFFF0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2.5 text-center md:text-left flex-1 min-w-0 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFF0]/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-[#FFFFF0] border border-[#B0C4DE]/30">
              <Sparkles size={13} className="text-[#B0C4DE]" />
              <span>PORTAL LEMBAR KERJA & PENUGASAN GURU</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-display text-[#FFFFF0] leading-tight">
              Dashboard Worksheet Siswa
            </h1>
            <p className="text-[#F0F8FF]/90 text-xs sm:text-sm max-w-xl leading-relaxed">
              Pusat pengerjaan tugas lembar kerja resmi dari Guru Pembina dan pantauan progres latihan soal mandiri.
            </p>

            {/* Quick Action Button ke Bank Soal langsung terintegrasi di Hero */}
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <button
                type="button"
                onClick={() => navigate('/practice')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFF0] hover:bg-white text-[#708090] hover:text-[#5C6D7D] font-bold text-xs rounded-xl shadow-xs transition-all active:scale-98 cursor-pointer"
              >
                <Target className="w-3.5 h-3.5 text-[#708090]" />
                <span>Buka Bank Soal Kimia</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#708090]" />
              </button>
              <span className="text-[11px] text-[#F0F8FF]/80 hidden sm:inline">
                • 10 Pilar OSN & 16 Modul SMA
              </span>
            </div>
          </div>

          {/* Animated Frantic Cats Illustration */}
          <div className="shrink-0 w-full max-w-[190px] sm:max-w-[210px] md:max-w-[230px] relative z-10 bg-[#FFFFF0]/10 backdrop-blur-xs p-2.5 rounded-2xl border border-[#B0C4DE]/20 shadow-inner">
            <FranticCatStudySvg className="w-full h-auto" />
          </div>
        </div>

        {/* Active Worksheet Session Slim Accent Bar */}
        {activeSession && (
          <div className="bg-[#FFFFF0] border-l-4 border-l-[#708090] border border-[#D3D3D3] rounded-2xl px-4 py-3 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center shrink-0 shadow-2xs">
                <Play className="w-4 h-4 fill-[#FFFFF0] ml-0.5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-[#B0C4DE]/30 text-[#708090] rounded-md font-mono border border-[#B0C4DE]/60">
                    SOAL {activeSession.currentQIndex + 1}/{activeSession.totalQuestions}
                  </span>
                  <span className="text-xs font-bold text-[#2D3748] truncate">
                    {activeSession.title}
                  </span>
                </div>
                <p className="text-[11px] text-[#708090] truncate">
                  Progres tersimpan otomatis. Klik tombol untuk langsung melanjutkan.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={() => {
                  studentWorksheetService.clearActiveSession();
                  setActiveSession(null);
                }}
                className="px-2.5 py-1.5 rounded-xl border border-[#D3D3D3] hover:bg-slate-100 text-slate-500 text-xs font-medium transition-colors cursor-pointer"
                title="Tutup sesi ini"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => navigate(activeSession.url)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Lanjutkan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Claim Token Error Notification if any */}
        {claimError && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{claimError}</span>
          </div>
        )}

        {/* Unified Control Toolbar: Tabs, Search & Claim Token */}
        <div className="space-y-3 border-b border-slate-200 pb-4">
          {/* Navigation Tabs Bar */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto text-xs font-semibold">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Semua Lembar Kerja</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded-md font-mono">
                  {stats.total}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('teacher')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'teacher'
                    ? 'bg-emerald-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Tugas Guru</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    activeTab === 'teacher'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {stats.teacherCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('in_progress')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'in_progress'
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Sedang Dikerjakan</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    activeTab === 'in_progress' ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {stats.inProgressCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('completed')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'completed'
                    ? 'bg-sky-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Selesai Dinilai</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    activeTab === 'completed' ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-800'
                  }`}
                >
                  {stats.completedCount}
                </span>
              </button>
            </div>
          </div>

          {/* Sub Toolbar: Search Input + Claim Token Baris Rapi */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama tugas atau topik soal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#708090]/20 focus:border-[#708090] transition-all"
              />
            </div>

            {/* Quick Claim Token Guru Inline Form */}
            <form onSubmit={handleClaimToken} className="flex items-center gap-1.5 shrink-0">
              <div className="relative">
                <KeyRound className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="KLAIM TOKEN GURU..."
                  value={claimTokenInput}
                  onChange={(e) => setClaimTokenInput(e.target.value.toUpperCase())}
                  className="pl-8 pr-2.5 py-2 bg-white border border-[#D3D3D3] rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-[#2D3748] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#708090]/20 focus:border-[#708090] w-48 sm:w-52"
                />
              </div>
              <button
                type="submit"
                disabled={isClaiming || !claimTokenInput.trim()}
                className="px-3.5 py-2 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold transition-all shadow-xs disabled:opacity-50 cursor-pointer shrink-0 border border-[#708090]"
              >
                {isClaiming ? 'Validasi...' : 'Klaim'}
              </button>
            </form>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BAGIAN 1: TUGAS DARI GURU & DRAFT AKTIF (FORMAT CARD GRID) */}
        {/* ======================================================== */}
        {activeTab !== 'completed' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <School className="w-4 h-4 text-[#708090]" />
                <h2 className="text-base sm:text-lg font-bold text-[#2D3748] font-display">
                  {activeTab === 'teacher'
                    ? 'Tugas Resmi dari Guru Pembina'
                    : activeTab === 'in_progress'
                    ? 'Soal & Tugas yang Sedang Dikerjakan'
                    : 'Tugas Guru & Pengerjaan Berjalan'}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#708090] bg-[#B0C4DE]/25 px-2.5 py-0.5 rounded-full border border-[#B0C4DE]/50">
                {activeActionableItems.length} Paket Tersedia
              </span>
            </div>

            {activeActionableItems.length === 0 ? (
              <div className="bg-[#FFFFF0] rounded-3xl border border-[#D3D3D3] p-8 text-center space-y-3 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#B0C4DE]/25 border border-[#B0C4DE]/50 text-[#708090] flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="max-w-md mx-auto space-y-1">
                  <h3 className="text-sm font-bold text-[#2D3748] font-display">
                    {activeTab === 'teacher'
                      ? 'Belum Ada Tugas Guru Baru'
                      : activeTab === 'in_progress'
                      ? 'Tidak Ada Soal yang Sedang Dikerjakan'
                      : 'Belum Ada Tugas Aktif'}
                  </h3>
                  <p className="text-xs text-[#708090] leading-relaxed">
                    {activeTab === 'teacher'
                      ? 'Tugas resmi dari Guru Pembina di kelas Anda otomatis muncul di sini saat ditugaskan.'
                      : 'Untuk memulai latihan mandiri, Anda dapat langsung menjelajahi Bank Soal.'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeActionableItems.map((item) => {
                  const isTeacher = item.type === 'live' || item.type === 'teacher_assignment';
                  const isLive = item.type === 'live';

                  return (
                    <div
                      key={`${item.type}-${item.id}-${item.token || ''}`}
                      onClick={() => handleOpenWorksheet(item)}
                      className="bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] hover:border-[#708090] hover:shadow-md transition-all p-5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                    >
                      {/* Top Accent Line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${
                          isTeacher
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                            : 'bg-gradient-to-r from-[#708090] to-[#B0C4DE]'
                        }`}
                      />

                      <div className="space-y-3.5 pt-1">
                        {/* Badge Header Row */}
                        <div className="flex items-center justify-between gap-2 text-xs">
                          {isLive ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[10px] font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>SESI LIVE GURU</span>
                            </span>
                          ) : item.type === 'teacher_assignment' ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[10px] font-mono">
                              <School className="w-3 h-3 text-emerald-600" />
                              <span>TUGAS KELAS</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#B0C4DE]/30 border border-[#B0C4DE]/60 text-[#708090] font-bold text-[10px] font-mono">
                              <Target className="w-3 h-3 text-[#708090]" />
                              <span>LATIHAN MANDIRI</span>
                            </span>
                          )}

                          {/* Status Badge */}
                          {item.status === 'in_progress' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-800 font-semibold text-[10px] rounded-md">
                              <Clock className="w-3 h-3 text-amber-600" />
                              <span>Sedang Berjalan</span>
                            </span>
                          ) : item.status === 'completed' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 font-semibold text-[10px] rounded-md">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Selesai</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-600 font-medium text-[10px] rounded-md">
                              <span>Belum Dimulai</span>
                            </span>
                          )}
                        </div>

                        {/* Token Pill (if teacher live session) */}
                        {isTeacher && item.token && (
                          <div className="flex items-center justify-between bg-white border border-[#D3D3D3] rounded-xl px-3 py-1.5 text-xs">
                            <div className="flex items-center gap-2">
                              <Radio className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-[11px] text-[#708090]">Token:</span>
                              <span className="font-mono font-bold text-[#2D3748] tracking-wider">
                                {item.token}
                              </span>
                            </div>
                            <button
                              onClick={(e) => handleCopyToken(item.token!, e)}
                              className="p-1 text-[#708090] hover:text-[#2D3748] rounded-md transition-colors"
                              title="Salin Kode Token"
                            >
                              {copiedToken === item.token ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        )}

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-[#2D3748] group-hover:text-[#708090] transition-colors font-display line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#708090] mt-1 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Metadata Chips */}
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#708090] pt-1 font-medium">
                          <span className="flex items-center gap-1">
                            <Layers className="w-3.5 h-3.5 text-[#B0C4DE]" />
                            <span>{item.item_count} Butir Soal</span>
                          </span>
                          {item.score !== undefined && (
                            <span className="flex items-center gap-1 font-bold text-emerald-700 font-mono">
                              <Award className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Nilai: {item.score}/{item.max_score || 10}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-4 mt-3 border-t border-[#D3D3D3]/60 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#708090] truncate max-w-[150px]">
                          {item.category || item.teacher_name || 'Tugas Pembina'}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenWorksheet(item);
                          }}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                            isTeacher
                              ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white'
                              : 'bg-[#B0C4DE]/30 hover:bg-[#708090] text-[#708090] group-hover:text-white'
                          }`}
                        >
                          <span>
                            {item.status === 'in_progress'
                              ? 'Lanjutkan'
                              : item.status === 'completed'
                              ? 'Tinjau Hasil'
                              : 'Buka Lembar Kerja'}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* BAGIAN 2: RIWAYAT SOAL SELESAI (COMPACT DATA TABLE + PAGINATION) */}
        {/* ======================================================== */}
        {(activeTab === 'all' || activeTab === 'completed') && (
          <div className="space-y-4 pt-4 border-t border-[#D3D3D3]">
            {/* Header Riwayat Soal Selesai dengan Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#2D3748] font-display">
                    Riwayat Soal Selesai Dinilai
                  </h2>
                  <p className="text-xs text-[#708090]">
                    Daftar soal latihan mandiri & tugas yang telah selesai dinilai
                  </p>
                </div>
              </div>

              {/* View Mode Toggle & Total Count */}
              <div className="flex items-center gap-2.5 self-start sm:self-center">
                <span className="text-xs font-mono font-bold text-[#708090] bg-[#B0C4DE]/25 px-2.5 py-1 rounded-lg border border-[#B0C4DE]/50">
                  {filteredCompletedItems.length} Soal Selesai
                </span>

                <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setCompletedViewMode('table')}
                    className={`p-1.5 rounded-md transition-all ${
                      completedViewMode === 'table'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Tampilan Tabel Ringkas"
                  >
                    <TableIcon className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCompletedViewMode('cards')}
                    className={`p-1.5 rounded-md transition-all ${
                      completedViewMode === 'cards'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Tampilan Kartu Grid"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Topic Pills Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 font-semibold shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter Topik:</span>
              </span>

              <button
                type="button"
                onClick={() => setSelectedPillarFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all ${
                  selectedPillarFilter === 'all'
                    ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                    : 'bg-[#FFFFF0] border border-[#D3D3D3] text-[#708090] hover:bg-[#F0F8FF]'
                }`}
              >
                Semua ({allCompletedItems.length})
              </button>

              {PILLARS_DATA.map((pillar) => {
                const count = allCompletedItems.filter((i) => i.pillar_number === pillar.pillar_number).length;
                if (count === 0 && selectedPillarFilter !== pillar.pillar_number) return null;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setSelectedPillarFilter(pillar.pillar_number)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all ${
                      selectedPillarFilter === pillar.pillar_number
                        ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                        : 'bg-[#FFFFF0] border border-[#D3D3D3] text-[#708090] hover:bg-[#F0F8FF]'
                    }`}
                  >
                    Topik #{pillar.pillar_number} ({count})
                  </button>
                );
              })}
            </div>

            {filteredCompletedItems.length === 0 ? (
              <div className="bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] p-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-[#2D3748]">Belum ada soal selesai yang sesuai filter.</p>
                <p className="text-[11px] text-[#708090]">
                  Selesaikan soal latihan dari Bank Soal untuk melihat rekapitulasi penilaian di sini.
                </p>
              </div>
            ) : completedViewMode === 'table' ? (
              /* COMPACT DATA TABLE FORMAT */
              <div className="bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-[#D3D3D3] text-[#708090] font-mono uppercase text-[10px] tracking-wider">
                        <th className="py-3 px-4 font-bold">No / ID</th>
                        <th className="py-3 px-4 font-bold">Judul & Topik Soal</th>
                        <th className="py-3 px-4 font-bold hidden sm:table-cell">Waktu</th>
                        <th className="py-3 px-4 font-bold text-center">Nilai</th>
                        <th className="py-3 px-4 font-bold text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D3D3D3]/50">
                      {paginatedCompletedItems.map((item, index) => {
                        const isHigh = (item.score || 0) >= 8;
                        const dateFormatted = item.last_accessed_at
                          ? new Date(item.last_accessed_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })
                          : '-';

                        return (
                          <tr
                            key={`table-${item.type}-${item.id}-${index}`}
                            onClick={() => handleOpenWorksheet(item)}
                            className="hover:bg-[#F0F8FF]/80 transition-colors cursor-pointer group"
                          >
                            {/* ID / Nomor */}
                            <td className="py-3 px-4 font-mono font-bold text-[#708090] whitespace-nowrap">
                              <span className="px-2 py-0.5 bg-[#B0C4DE]/30 rounded-md text-[11px]">
                                #{item.id}
                              </span>
                            </td>

                            {/* Judul & Topik */}
                            <td className="py-3 px-4">
                              <div className="font-bold text-[#2D3748] group-hover:text-sky-700 transition-colors line-clamp-1">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-[#708090] mt-0.5 flex items-center gap-1.5">
                                <span>{item.category}</span>
                              </div>
                            </td>

                            {/* Waktu Selesai */}
                            <td className="py-3 px-4 text-[#708090] font-mono text-[11px] hidden sm:table-cell whitespace-nowrap">
                              {dateFormatted}
                            </td>

                            {/* Nilai / Skor */}
                            <td className="py-3 px-4 text-center whitespace-nowrap">
                              <span
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono font-bold text-xs ${
                                  isHigh
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                                    : 'bg-amber-50 text-amber-800 border border-amber-300'
                                }`}
                              >
                                <Award className="w-3.5 h-3.5 text-emerald-600" />
                                <span>{item.score ?? 0}</span>
                                <span className="text-[10px] opacity-60">/{item.max_score || 10}</span>
                              </span>
                            </td>

                            {/* Aksi Cepat */}
                            <td className="py-3 px-4 text-right whitespace-nowrap">
                              <div className="inline-flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenWorksheet(item);
                                  }}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#B0C4DE]/25 hover:bg-[#708090] text-[#708090] hover:text-white font-bold text-[11px] transition-all"
                                  title="Tinjau hasil evaluasi & pembahasan soal"
                                >
                                  <Eye className="w-3 h-3" />
                                  <span>Tinjau</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/worksheet/practice/${item.id}`);
                                  }}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#D3D3D3] hover:border-[#708090] text-[#708090] hover:text-[#2D3748] font-semibold text-[11px] transition-all"
                                  title="Kerjakan ulang soal ini"
                                >
                                  <RotateCcw className="w-3 h-3 text-[#708090]" />
                                  <span className="hidden sm:inline">Ulang</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {totalCompletedPages > 1 && (
                  <div className="p-3.5 border-t border-[#D3D3D3] bg-slate-50/70 flex items-center justify-between text-xs text-[#708090]">
                    <div>
                      Menampilkan {(completedPage - 1) * completedPageSize + 1} -{' '}
                      {Math.min(completedPage * completedPageSize, filteredCompletedItems.length)} dari{' '}
                      {filteredCompletedItems.length} butir soal
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={completedPage === 1}
                        onClick={() => setCompletedPage((p) => Math.max(1, p - 1))}
                        className="p-1.5 rounded-lg border border-[#D3D3D3] bg-white text-[#708090] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
                        title="Halaman Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <span className="px-2 font-mono font-bold text-[#2D3748]">
                        {completedPage} / {totalCompletedPages}
                      </span>

                      <button
                        type="button"
                        disabled={completedPage === totalCompletedPages}
                        onClick={() => setCompletedPage((p) => Math.min(totalCompletedPages, p + 1))}
                        className="p-1.5 rounded-lg border border-[#D3D3D3] bg-white text-[#708090] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
                        title="Halaman Berikutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* ALTERNATIF: CARDS FORMAT BERPAGING */
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedCompletedItems.map((item) => (
                    <div
                      key={`card-completed-${item.type}-${item.id}`}
                      onClick={() => handleOpenWorksheet(item)}
                      className="bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] hover:border-[#708090] hover:shadow-md transition-all p-5 flex flex-col justify-between group cursor-pointer relative"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono font-bold text-[#708090] bg-[#B0C4DE]/30 px-2 py-0.5 rounded-md text-[10px]">
                            #{item.id}
                          </span>
                          <span className="font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md text-[10px] flex items-center gap-1">
                            <Award className="w-3 h-3 text-emerald-600" />
                            <span>{item.score}/{item.max_score || 10}</span>
                          </span>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-[#2D3748] group-hover:text-[#708090] transition-colors line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#708090] mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#D3D3D3]/60 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-[#708090] truncate max-w-[140px]">
                          {item.category}
                        </span>
                        <button
                          type="button"
                          className="px-3 py-1 rounded-lg bg-[#B0C4DE]/30 hover:bg-[#708090] text-[#708090] hover:text-white font-bold text-xs transition-colors"
                        >
                          Tinjau
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalCompletedPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-2 text-xs">
                    <button
                      type="button"
                      disabled={completedPage === 1}
                      onClick={() => setCompletedPage((p) => Math.max(1, p - 1))}
                      className="px-3 py-1.5 rounded-lg border border-[#D3D3D3] bg-[#FFFFF0] text-[#708090] disabled:opacity-40"
                    >
                      Sebelumnya
                    </button>
                    <span className="font-mono font-bold text-[#2D3748]">
                      {completedPage} dari {totalCompletedPages}
                    </span>
                    <button
                      type="button"
                      disabled={completedPage === totalCompletedPages}
                      onClick={() => setCompletedPage((p) => Math.min(totalCompletedPages, p + 1))}
                      className="px-3 py-1.5 rounded-lg border border-[#D3D3D3] bg-[#FFFFF0] text-[#708090] disabled:opacity-40"
                    >
                      Berikutnya
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
