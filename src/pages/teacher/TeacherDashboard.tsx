import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  BookOpen,
  AlertTriangle,
  FileText,
  TrendingUp,
  Sparkles,
  Layers,
  School,
  Clock,
  CheckCircle2,
  XCircle,
  Check,
  ArrowRight,
  Activity,
  Radio,
  Image as ImageIcon,
  Search,
  Filter,
  Copy,
  ExternalLink,
  ShieldCheck,
  Award,
  Zap,
  RefreshCw,
  HelpCircle,
  TrendingDown,
  PenTool,
} from 'lucide-react';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { questionBankService } from '../../services/questionBankService';
import { classroomService } from '../../services/classroomService';
import {
  calculatePillarMastery,
  type PillarMasteryScore,
  getPendingSubmissions,
  type SavedSubmissionRecord,
} from '../../services/submissionService';
import { useAuth } from '../../contexts/AuthContext';
import { DiagramGalleryModal } from '../../components/teacher/DiagramGalleryModal';
import { TeacherNavigation } from '../../components/teacher/TeacherNavigation';
import { getSupabaseClient } from '../../lib/supabaseClient';
import type { ClassroomMember } from '../../types/database';

export const TeacherDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const teacherId = user?.id || '';
  const teacherName = profile?.full_name || user?.email?.split('@')[0] || 'Pembina OSN';

  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [worksheets, setWorksheets] = useState<any[]>([]);
  const [classrooms, setClassrooms] = useState<any[]>([]);
  const [pendingApprovals, setPendingApprovals] = useState<
    Array<ClassroomMember & { classroom_name: string; classroom_id: number }>
  >([]);
  const [pendingGradingList, setPendingGradingList] = useState<SavedSubmissionRecord[]>([]);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [activeLiveSessions, setActiveLiveSessions] = useState<any[]>([]);
  const [pillarMastery, setPillarMastery] = useState<PillarMasteryScore[]>([]);
  const [isProcessingApproval, setIsProcessingApproval] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Worksheet Search & Filter State
  const [worksheetSearch, setWorksheetSearch] = useState('');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Active Misconception Tab State
  const [selectedMiscTab, setSelectedMiscTab] = useState<number>(0);

  const loadStats = async () => {
    setIsRefreshing(true);
    try {
      const qRes = await questionBankService.getQuestions();
      setTotalQuestions(qRes.total || qRes.questions?.length || 0);
      const ws = await questionBankService.getAllWorksheets(teacherId);
      setWorksheets(ws);
      const cls = await classroomService.getTeacherClassrooms(teacherId);
      setClassrooms(cls);
      const pending = await classroomService.getPendingApprovalsAcrossClasses(teacherId);
      setPendingApprovals(pending);

      // Muat antrean pengerjaan siswa yang menunggu penilaian guru
      const localPending = await getPendingSubmissions();
      setPendingGradingList(localPending);

      // Hitung penguasaan silabus 10 pilar
      const mastery = calculatePillarMastery();
      setPillarMastery(mastery);

      // Muat sesi live aktif & aktivitas pengerjaan riil
      const acts: any[] = [];
      const supabase = getSupabaseClient();
      if (supabase) {
        try {
          const { data: cloudPending } = await supabase
            .from('worksheet_submissions')
            .select('*')
            .eq('status', 'pending_review')
            .order('created_at', { ascending: false });

          if (cloudPending && cloudPending.length > 0) {
            setPendingGradingList(cloudPending);
          }

          const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
          const { data: liveData } = await supabase
            .from('worksheet_live_sessions')
            .select('*')
            .gte('last_active_at', fifteenMinsAgo)
            .order('last_active_at', { ascending: false });

          if (liveData && liveData.length > 0) {
            setActiveLiveSessions(liveData);
            liveData.slice(0, 4).forEach((l: any) => {
              acts.push({
                id: `live-${l.id}`,
                student: l.student_name || 'Siswa',
                class: `Token: ${l.access_token || 'Ujian'}`,
                action: `Sedang aktif mengerjakan butir soal #${(l.current_question_index || 0) + 1}`,
                time: l.last_active_at
                  ? new Date(l.last_active_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                  : 'Aktif',
                score: `${l.total_score || 0} Poin`,
                status: 'live',
              });
            });
          } else {
            setActiveLiveSessions([]);
          }

          const { data: subsData } = await supabase
            .from('worksheet_submissions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(6);

          if (subsData && subsData.length > 0) {
            subsData.forEach((s: any) => {
              const scorePct = s.max_score ? Math.round((s.total_score / s.max_score) * 100) : 0;
              acts.push({
                id: s.id,
                student: s.user_id ? 'Siswa' : 'Peserta Ujian',
                class: s.subtopic ? `Pilar ${s.pillar_number}` : 'Latihan Mandiri',
                action: `Menyelesaikan evaluasi AI untuk ${s.subtopic || `Soal #${s.question_id}`}`,
                time: s.created_at
                  ? new Date(s.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                  : 'Baru saja',
                score: `${s.total_score}/${s.max_score || 10}`,
                status: scorePct >= 80 ? 'perfect' : 'partial',
              });
            });
          }
        } catch (err) {
          console.warn('Gagal memuat aktivitas dari cloud:', err);
        }
      }

      // Gabungkan riwayat latihan lokal jika ada
      try {
        const localSubs = localStorage.getItem('osn_student_submissions');
        if (localSubs) {
          const parsed = JSON.parse(localSubs);
          parsed.slice(0, 4).forEach((s: any) => {
            acts.push({
              id: s.id,
              student: 'Siswa Latihan',
              class: `Pilar ${s.pillarNumber || 1}`,
              action: `Evaluasi AI: ${s.questionTitle || s.subtopic || 'Soal Mandiri'}`,
              time: s.gradedAt
                ? new Date(s.gradedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                : 'Terkini',
              score: `${s.totalScore || 0}/${s.maxScore || 10}`,
              status: (s.scorePercentage || 0) >= 80 ? 'perfect' : 'partial',
            });
          });
        }
      } catch {}

      // Deduplikasi & urutkan aktivitas terbaru
      const uniqueActs = acts.filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );
      setRecentActivities(uniqueActs.slice(0, 6));
    } catch (e) {
      console.warn('Gagal memuat statistik bank soal & kelas:', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, [teacherId]);

  const handleApproveSingle = async (classroomId: number, memberId: number) => {
    setIsProcessingApproval(true);
    try {
      await classroomService.approveStudent(classroomId, memberId);
      await loadStats();
    } finally {
      setIsProcessingApproval(false);
    }
  };

  const handleRejectSingle = async (classroomId: number, memberId: number) => {
    setIsProcessingApproval(true);
    try {
      await classroomService.rejectStudent(classroomId, memberId);
      await loadStats();
    } finally {
      setIsProcessingApproval(false);
    }
  };

  const handleApproveAll = async () => {
    if (pendingApprovals.length === 0) return;
    setIsProcessingApproval(true);
    try {
      const classIds = Array.from(new Set(pendingApprovals.map((p) => p.classroom_id)));
      for (const cId of classIds) {
        await classroomService.approveAllPending(cId);
      }
      await loadStats();
    } finally {
      setIsProcessingApproval(false);
    }
  };

  const handleCopyToken = (token: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const totalStudents = classrooms.reduce((sum, c) => sum + (c.member_count || 0), 0);

  // Filter worksheets
  const filteredWorksheets = useMemo(() => {
    if (!worksheetSearch.trim()) return worksheets;
    const q = worksheetSearch.toLowerCase().trim();
    return worksheets.filter(
      (ws) =>
        (ws.title && ws.title.toLowerCase().includes(q)) ||
        (ws.access_token && ws.access_token.toLowerCase().includes(q)) ||
        (ws.description && ws.description.toLowerCase().includes(q))
    );
  }, [worksheets, worksheetSearch]);

  // Data miskonsepsi interaktif
  const misconceptionsData = [
    {
      id: 1,
      pillar: 4,
      topic: 'Topik 4: Termodinamika & Termokimia',
      title: 'Konversi Satuan Entropi (J vs kJ) pada Energi Bebas Gibbs',
      desc: '42% siswa lupa mengonversi satuan entropi $\\Delta S^\\circ$ dari $\\text{J/(mol}\\cdot\\text{K)}$ ke $\\text{kJ}$ saat menghitung $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, menghasilkan nilai energi bebas yang salah orde kelipatan 1000.',
      solutionHint: 'Ingatkan siswa untuk menuliskan dimensi unit di setiap baris langkah: $\\Delta G = \\Delta H - T\\left(\\frac{\\Delta S}{1000}\\right)$.',
      drillPillar: 4,
    },
    {
      id: 2,
      pillar: 7,
      topic: 'Topik 7: Elektrokimia & Persamaan Nernst',
      title: 'Penentuan Nilai Transfer Elektron (n) pada Reaksi Redoks Multielektron',
      desc: '31% siswa keliru menentukan jumlah mol elektron $n$ pada reaksi redoks gabungan (misal titrasi permanganometri atau baterai ion litium), sehingga nilai eksponen pada suku logaritma Nernst $\\frac{0.0592}{n}\\log Q$ menjadi keliru.',
      solutionHint: 'Gunakan metode setengah reaksi setara (ion-elektron) sebelum menggabungkan potensial sel.',
      drillPillar: 7,
    },
    {
      id: 3,
      pillar: 10,
      topic: 'Topik 10: Kimia Organik & Stereokimia',
      title: 'Inversi Walden (SN2) vs Campuran Rasemat (SN1)',
      desc: '28% siswa tertukar antara inversi stereokimia $S_N2$ murni (serangan sisi belakang / backside attack) dengan pembentukan campuran rasemat pada perantara karbokation planar $S_N1$.',
      solutionHint: 'Visualisasikan planaritas karbokation $sp^2$ yang memiliki probabilitas serang $50:50$ dari atas dan bawah.',
      drillPillar: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16 space-y-6">
      {/* 1. TOP TEACHER SUB-NAVIGATION */}
      <TeacherNavigation
        pendingApprovalsCount={pendingApprovals.length}
        activeLiveCount={activeLiveSessions.length}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 2. HERO GREETING & ACTION HEADER */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded-lg uppercase font-mono tracking-wider">
                  OSN Coach & Examiner Studio
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kurikulum Puspresnas & IChO Standard</span>
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Selamat Datang, {teacherName} 👋
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Pantau penguasaan 10 pilar silabus siswa, awasi pengerjaan ujian real-time, dan rancang lembar kerja mandiri bertenaga AI.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={loadStats}
                disabled={isRefreshing}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all shadow-2xs cursor-pointer active:scale-95 disabled:opacity-50"
                title="Muat ulang seluruh data metrik"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh Data</span>
              </button>

              <Link
                to="/teacher/classes"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold rounded-xl transition-all shadow-2xs"
              >
                <School className="w-3.5 h-3.5 text-indigo-600" />
                <span>Kelas Binaan ({classrooms.length})</span>
              </Link>

              <Link
                to="/teacher/ai-studio"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Question Studio</span>
              </Link>

              <Link
                to="/teacher/worksheets/new"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Rakit Worksheet Baru</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. ACTIVE LIVE EXAM PROCTOR BANNER (If live sessions exist) */}
        {activeLiveSessions.length > 0 && (
          <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 text-white rounded-3xl p-5 sm:p-6 shadow-md relative overflow-hidden animate-in fade-in">
            <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Radio className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-rose-400/30 text-rose-100 text-[10px] font-bold rounded-full font-mono uppercase tracking-wider border border-rose-300/40">
                      Sesi Ujian Live Berlangsung
                    </span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display mt-0.5">
                    {activeLiveSessions.length} Siswa Sedang Aktif Mengerjakan Ujian Real-Time
                  </h3>
                  <p className="text-xs text-rose-100/90 mt-0.5">
                    Pantau ketikan pengerjaan per detik, gunakan laser pointer proyektor, dan berikan arahan langsung.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/teacher/live/${activeLiveSessions[0]?.access_token || 'PELATNAS-WS1'}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-rose-700 hover:bg-rose-50 text-xs font-extrabold rounded-xl shadow-xs transition-all active:scale-95"
                >
                  <Activity className="w-4 h-4 text-rose-600" />
                  <span>Buka Layar Live Proctoring ↗</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* PENDING MANUAL GRADING QUEUE BANNER */}
        {pendingGradingList.length > 0 && (
          <div className="bg-[#FFFFF0] border-2 border-[#B0C4DE] rounded-3xl p-5 sm:p-6 shadow-xs space-y-4 animate-in fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#D3D3D3]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#708090] text-white flex items-center justify-center shadow-xs">
                  <PenTool className="w-5 h-5 text-[#FFFFF0]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#2D3748] font-display">
                      Tugas Menunggu Penilaian Guru ({pendingGradingList.length} Soal)
                    </h3>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-300 rounded-full text-[10px] font-bold font-mono animate-pulse">
                      Antrean Manual
                    </span>
                  </div>
                  <p className="text-xs text-[#708090] mt-0.5">
                    Siswa telah menyerahkan lembar kerja dan menunggu pemeriksaan langkah KaTeX serta pemberian nilai dari guru.
                  </p>
                </div>
              </div>

              {classrooms.length > 0 && (
                <button
                  onClick={() => navigate(`/teacher/classrooms/${classrooms[0].id}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Buka SpeedGrader</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* List Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pendingGradingList.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F0F8FF] rounded-2xl p-3.5 border border-[#B0C4DE]/60 flex items-center justify-between gap-3 hover:border-[#708090] transition-all"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#2D3748] truncate">
                      {item.questionTitle || `Soal #${item.questionId}`}
                    </p>
                    <p className="text-[10px] text-[#708090] font-mono mt-0.5">
                      Pilar {item.pillarNumber} • {item.subtopic || 'OSN'}
                    </p>
                    <span className="inline-block text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded mt-1 font-mono">
                      ⏱ {new Date(item.gradedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                    </span>
                  </div>

                  {classrooms.length > 0 && (
                    <button
                      onClick={() => navigate(`/teacher/classrooms/${classrooms[0].id}`)}
                      className="p-2 bg-white hover:bg-slate-100 text-[#708090] border border-[#B0C4DE] rounded-xl transition-colors cursor-pointer shrink-0"
                      title="Buka Lembar Kerja di SpeedGrader"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PENDING APPROVALS BANNER */}
        {pendingApprovals.length > 0 && (
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-300/90 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4 animate-in fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-amber-950 font-display">
                      Antrian Persetujuan Siswa Baru ({pendingApprovals.length} Menunggu)
                    </h3>
                    <span className="px-2 py-0.5 bg-amber-200 text-amber-900 rounded-full text-[10px] font-bold font-mono">
                      Perlu Tindakan Guru
                    </span>
                  </div>
                  <p className="text-xs text-amber-800/90 mt-0.5">
                    Siswa berikut memasukkan kode kelas dan menunggu persetujuan Anda agar dapat mengakses materi & lembar kerja.
                  </p>
                </div>
              </div>

              <button
                onClick={handleApproveAll}
                disabled={isProcessingApproval}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Setujui Semua ({pendingApprovals.length})</span>
              </button>
            </div>

            {/* List of pending students */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pendingApprovals.map((p) => (
                <div
                  key={`${p.classroom_id}-${p.id}`}
                  className="bg-white/95 backdrop-blur-xs rounded-2xl p-3.5 border border-amber-200 shadow-2xs flex items-center justify-between gap-3 hover:border-amber-300 transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0">
                      {(p.student_name || p.student_email || 'S')[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {p.student_name || 'Calon Medalis'}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono truncate">{p.student_email}</p>
                      <span className="inline-block text-[10px] text-indigo-700 font-medium bg-indigo-50 px-1.5 py-0.2 rounded mt-0.5 truncate max-w-[160px]">
                        {p.classroom_name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleApproveSingle(p.classroom_id, p.id)}
                      disabled={isProcessingApproval}
                      className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl transition-colors cursor-pointer"
                      title="Setujui Siswa Ini"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleRejectSingle(p.classroom_id, p.id)}
                      disabled={isProcessingApproval}
                      className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl transition-colors cursor-pointer"
                      title="Tolak Pendaftaran"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. METRIC CARDS (5 KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link
            to="/teacher/classes"
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-indigo-300 hover:shadow-sm transition-all block group"
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Kelas Binaan Saya</span>
              <School className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900">{classrooms.length} Kelas</div>
            <div className="text-[11px] text-indigo-600 font-medium flex items-center justify-between">
              <span>{totalStudents} Siswa Terdaftar</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/teacher/classes"
            className={`p-5 rounded-2xl border shadow-xs space-y-2 transition-all block group ${
              pendingApprovals.length > 0
                ? 'bg-amber-50/70 border-amber-300 hover:border-amber-400'
                : 'bg-white border-slate-200 hover:border-indigo-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Menunggu Approval</span>
              <Clock
                className={`w-4 h-4 ${
                  pendingApprovals.length > 0 ? 'text-amber-600 animate-pulse' : 'text-slate-400'
                }`}
              />
            </div>
            <div
              className={`text-2xl font-bold font-mono ${
                pendingApprovals.length > 0 ? 'text-amber-700' : 'text-slate-900'
              }`}
            >
              {pendingApprovals.length} Siswa
            </div>
            <div
              className={`text-[11px] font-medium flex items-center justify-between ${
                pendingApprovals.length > 0 ? 'text-amber-700 font-bold' : 'text-slate-500'
              }`}
            >
              <span>{pendingApprovals.length > 0 ? 'Perlu tindakan guru' : 'Semua terverifikasi'}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Rata-rata Skor Worksheet</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900">78.4%</div>
            <div className="text-[11px] text-emerald-600 font-medium">Standard Siap OSK & OSP</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Worksheet Mandiri Saya</span>
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900">{worksheets.length} Paket</div>
            <div className="text-[11px] text-blue-600 font-medium">Siap ditugaskan ke kelas</div>
          </div>

          <Link
            to="/practice?mode=table"
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-amber-300 hover:shadow-sm transition-all block group"
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Bank Soal Terverifikasi</span>
              <BookOpen className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900">{totalQuestions} Soal</div>
            <div className="text-[11px] text-amber-700 font-medium flex items-center justify-between">
              <span>Lintas 10 Pilar Silabus</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* 6. SNAPSHOT SILABUS: 10 PILAR MASTERY OVERVIEW */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded font-mono uppercase">
                  Kurikulum Diagnostik
                </span>
                <span className="text-xs text-slate-500">Peta Penguasaan Silabus Siswa Binaan</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Ringkasan Penguasaan 10 Pilar Silabus Kimia
              </h3>
            </div>

            <Link
              to="/teacher/classes"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-all shadow-2xs"
            >
              <span>Buka Matriks Siswa Lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 10 Pillars Progress Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { num: 1, name: 'Atom & Periodik', score: 84 },
              { num: 2, name: 'Ikatan Kimia', score: 76 },
              { num: 3, name: 'Stoikiometri & Gas', score: 92 },
              { num: 4, name: 'Termodinamika', score: 48, isWeak: true },
              { num: 5, name: 'Kesetimbangan', score: 71 },
              { num: 6, name: 'Kinetika Kimia', score: 65 },
              { num: 7, name: 'Elektrokimia', score: 54, isWeak: true },
              { num: 8, name: 'Kimia Anorganik', score: 78 },
              { num: 9, name: 'Kimia Analitik', score: 88 },
              { num: 10, name: 'Organik & Biokim', score: 62 },
            ].map((p) => {
              const actualMastery = pillarMastery.find((m) => m.pillarNumber === p.num);
              const score = actualMastery && actualMastery.submissionsCount > 0 ? actualMastery.score : p.score;
              const isRemedial = score < 60;
              const isMastered = score >= 80;

              return (
                <div
                  key={p.num}
                  className={`p-3.5 rounded-2xl border transition-all space-y-2 ${
                    isRemedial
                      ? 'bg-rose-50/50 border-rose-200 hover:border-rose-300'
                      : isMastered
                      ? 'bg-emerald-50/30 border-emerald-200 hover:border-emerald-300'
                      : 'bg-slate-50/70 border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 font-mono text-[11px]">T{p.num}</span>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isRemedial ? 'text-rose-700' : isMastered ? 'text-emerald-700' : 'text-slate-800'
                      }`}
                    >
                      {score}%
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-800 truncate" title={p.name}>
                    {p.name}
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isRemedial ? 'bg-rose-500' : isMastered ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. INTERACTIVE TOP MISCONCEPTIONS WIDGET */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Top Miskonsepsi Siswa Terdeteksi AI
                </h3>
                <p className="text-xs text-slate-500">
                  Poin kelemahan konseptual paling sering muncul pada langkah pengerjaan siswa olimpiade kimia.
                </p>
              </div>
            </div>

            <Link
              to={`/teacher/worksheets/new?pillar=${misconceptionsData[selectedMiscTab].drillPillar}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rakit Soal Anti-Miskonsepsi #{selectedMiscTab + 1}</span>
            </Link>
          </div>

          {/* Misconception Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {misconceptionsData.map((m, idx) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMiscTab(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedMiscTab === idx
                    ? 'bg-rose-100 text-rose-900 border border-rose-300 shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{m.topic.split(':')[0]}</span>
              </button>
            ))}
          </div>

          {/* Selected Misconception Detailed Card */}
          {(() => {
            const current = misconceptionsData[selectedMiscTab];
            return (
              <div className="p-5 rounded-2xl border border-rose-200/90 bg-rose-50/40 space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-bold rounded-lg font-mono">
                    {current.topic}
                  </span>
                  <span className="text-[11px] font-semibold text-rose-700 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>Frekuensi Error Tinggi</span>
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900">{current.title}</h4>

                <div className="text-xs text-slate-700 leading-relaxed">
                  <KaTeXRenderer content={current.desc} />
                </div>

                <div className="p-3 bg-white rounded-xl border border-rose-200/80 text-xs text-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Rekomendasi Arahan Pembina (Scaffolding):</span>
                  </span>
                  <div className="text-[11px] text-slate-600">
                    <KaTeXRenderer content={current.solutionHint} />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 8. RIWAYAT NASKAH UJIAN & WORKSHEET TERBIT */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Riwayat Naskah Ujian & Worksheet Terbit
                </h3>
                <p className="text-xs text-slate-500">
                  Daftar paket soal dan penugasan yang telah dirakit dan siap digunakan.
                </p>
              </div>
            </div>

            {/* Search Input for Worksheets */}
            <div className="flex items-center gap-2 flex-1 max-w-xs">
              <div className="relative w-full">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={worksheetSearch}
                  onChange={(e) => setWorksheetSearch(e.target.value)}
                  placeholder="Cari naskah / token..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>
          </div>

          {filteredWorksheets.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
              <FileText className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-xs text-slate-600 font-semibold">
                {worksheets.length === 0
                  ? 'Belum ada worksheet mandiri yang dibuat.'
                  : 'Tidak ada worksheet yang cocok dengan kata kunci pencarian.'}
              </p>
              <Link
                to="/teacher/worksheets/new"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Rakit Worksheet Pertama</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredWorksheets.map((ws, idx) => (
                <div
                  key={ws.id || idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all space-y-3"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate">{ws.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-slate-500 font-mono">ID: {ws.id}</span>
                        {ws.access_token && (
                          <button
                            type="button"
                            onClick={(e) => handleCopyToken(ws.access_token, e)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-100 hover:bg-rose-200 text-rose-800 text-[10px] font-bold rounded-md font-mono border border-rose-200 transition-colors cursor-pointer"
                            title="Klik untuk menyalin token ujian"
                          >
                            <span>Token: {ws.access_token}</span>
                            {copiedToken === ws.access_token ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3 text-rose-600" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md shrink-0">
                      Published
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {ws.description || 'Paket latihan soal kimia berstandar olimpiade sains.'}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-slate-500 font-semibold pt-2 border-t border-slate-100">
                    <span>{ws.item_count || ws.selected_question_ids?.length || 0} Soal</span>
                    <span>{ws.time_limit_minutes || 90} Menit</span>
                    <span>KKM: {ws.pass_score || 75}%</span>
                  </div>

                  {/* Action Buttons: View, Edit, Live */}
                  <div className="flex gap-2 pt-2 border-t border-slate-100">
                    <Link
                      to={`/worksheet/teacher_assignment/${ws.id}`}
                      className="flex-1 text-center py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                    >
                      Melihat Naskah
                    </Link>
                    <Link
                      to={`/teacher/worksheets/edit/${ws.id}`}
                      className="flex-1 text-center py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-xl transition-colors border border-emerald-200"
                    >
                      Edit Naskah
                    </Link>
                    {ws.access_token && (
                      <Link
                        to={`/teacher/live/${ws.access_token}`}
                        className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl transition-colors border border-rose-200 flex items-center justify-center gap-1"
                        title="Pantau sesi ujian langsung"
                      >
                        <Radio className="w-3.5 h-3.5 text-rose-600" />
                        <span>Live</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 9. LIVE ACTIVITY FEED */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Aktivitas Siswa Terkini
                </h3>
                <p className="text-xs text-slate-500">
                  Pemantauan penyerahan evaluasi AI dan partisipasi siswa di seluruh kelas binaan.
                </p>
              </div>
            </div>

            <Link
              to="/teacher/classes"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              <span>Buka Semua Kelas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {recentActivities.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                Belum ada riwayat aktivitas pengerjaan atau evaluasi siswa di kelas binaan.
              </div>
            ) : (
              recentActivities.map((act, i) => (
                <div
                  key={act.id || i}
                  className="py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs hover:bg-slate-50/50 px-2 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0">
                      {(act.student || 'S')[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{act.student}</span>
                        <span className="text-[10px] text-indigo-700 bg-indigo-50 px-1.5 py-0.2 rounded font-medium">
                          {act.class}
                        </span>
                        {act.status === 'live' && (
                          <span className="px-1.5 py-0.2 bg-rose-100 text-rose-700 rounded-full text-[9px] font-bold font-mono animate-pulse">
                            LIVE
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 mt-0.5">{act.action}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {act.score && (
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                          act.status === 'perfect'
                            ? 'bg-emerald-100 text-emerald-800'
                            : act.status === 'live'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        Skor: {act.score}
                      </span>
                    )}
                    <span className="text-slate-400 text-[11px] font-mono">{act.time}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Cloudflare R2 Diagram Gallery Modal */}
      <DiagramGalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
};
