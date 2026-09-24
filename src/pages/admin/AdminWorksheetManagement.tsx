import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Radio,
  Search,
  Eye,
  Activity,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  User,
  ShieldAlert,
  Sparkles,
  RefreshCw,
  X,
  Plus,
  Filter,
  Users,
  School,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { questionBankService } from '../../services/questionBankService';
import { adminService } from '../../services/adminService';
import { getSupabaseClient } from '../../lib/supabaseClient';
import type { Worksheet, Profile } from '../../types/database';

export const AdminWorksheetManagement: React.FC = () => {
  const [subTab, setSubTab] = useState<'worksheets' | 'live' | 'submissions'>('worksheets');
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [teachers, setTeachers] = useState<Profile[]>([]);
  const [liveSessions, setLiveSessions] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'LIVE' | 'STANDALONE'>('ALL');
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>('ALL');

  // Accordion state (set of expanded teacher IDs)
  const [expandedTeacherIds, setExpandedTeacherIds] = useState<Set<string>>(new Set());

  // Modal states
  const [worksheetToDelete, setWorksheetToDelete] = useState<Worksheet | null>(null);
  const [isCleanAllModalOpen, setIsCleanAllModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      // 1. Ambil data worksheets & guru secara paralel
      const [wsList, teacherList] = await Promise.all([
        questionBankService.getAllWorksheets(),
        adminService.getAllUsers('', 'teacher'),
      ]);

      setWorksheets(wsList);
      setTeachers(teacherList);

      // Buka accordion secara otomatis untuk guru yang memiliki worksheet
      const initialExpanded = new Set<string>();
      teacherList.forEach((t) => initialExpanded.add(t.id));
      initialExpanded.add('unassigned');
      setExpandedTeacherIds(initialExpanded);

      // 2. Sesi ujian live riil dari Supabase
      const supabase = getSupabaseClient();
      let liveList: any[] = [];
      if (supabase) {
        try {
          const { data } = await supabase
            .from('worksheet_live_sessions')
            .select('*')
            .order('last_active_at', { ascending: false })
            .limit(50);
          if (data) liveList = data;
        } catch {}
      }
      setLiveSessions(liveList);

      // 3. Submissions riil
      let subs: any[] = [];
      try {
        const saved = localStorage.getItem('osn_student_submissions');
        if (saved) {
          subs = JSON.parse(saved);
        }
      } catch {}

      if (supabase) {
        try {
          const { data } = await supabase
            .from('worksheet_submissions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);
          if (data && data.length > 0) {
            const cloudSubs = data.map((item: any) => ({
              id: item.id,
              questionTitle: item.subtopic ? `Pilar ${item.pillar_number}: ${item.subtopic}` : `Soal #${item.question_id}`,
              pillarNumber: item.pillar_number,
              subtopic: item.subtopic,
              scorePercentage: item.max_score ? Math.round((item.total_score / item.max_score) * 100) : 0,
              studentFinalAnswer: item.student_final_answer || '-',
              gradedAt: item.created_at,
            }));
            const existingIds = new Set(cloudSubs.map((s: any) => s.id));
            const localOnly = subs.filter((s) => !existingIds.has(s.id));
            subs = [...cloudSubs, ...localOnly];
          }
        } catch {}
      }
      setSubmissions(subs);
    } catch (e) {
      console.warn('Gagal memuat data pengawasan worksheet:', e);
      showNotification('error', 'Gagal memuat sebagian data pengawasan.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Toggle Accordion per guru
  const toggleTeacherAccordion = (id: string) => {
    setExpandedTeacherIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleExpandAll = () => {
    const next = new Set(teachers.map((t) => t.id));
    next.add('unassigned');
    setExpandedTeacherIds(next);
  };

  const handleCollapseAll = () => {
    setExpandedTeacherIds(new Set());
  };

  // Grouping worksheets berdasarkan guru penanggung jawab
  const groupedData = useMemo(() => {
    const qLower = searchQuery.toLowerCase().trim();

    // Map teacher id ke detail grup
    const teacherMap = new Map<
      string,
      {
        teacher: Profile;
        worksheets: Worksheet[];
        liveCount: number;
        totalQuestions: number;
      }
    >();

    teachers.forEach((t) => {
      teacherMap.set(t.id, {
        teacher: t,
        worksheets: [],
        liveCount: 0,
        totalQuestions: 0,
      });
    });

    const unassigned: Worksheet[] = [];

    // Filter worksheets berdasarkan pencarian dan status
    const matchedWorksheets = worksheets.filter((ws) => {
      if (statusFilter === 'LIVE' && !ws.is_live_monitored && !ws.access_token) return false;
      if (statusFilter === 'STANDALONE' && (ws.is_live_monitored || ws.access_token)) return false;

      if (!qLower) return true;

      const titleMatch = ws.title?.toLowerCase().includes(qLower);
      const descMatch = ws.description?.toLowerCase().includes(qLower);
      const tokenMatch = ws.access_token?.toLowerCase().includes(qLower);
      return titleMatch || descMatch || tokenMatch;
    });

    matchedWorksheets.forEach((ws) => {
      const tId = ws.teacher_id || ws.created_by;
      if (tId && teacherMap.has(tId)) {
        const group = teacherMap.get(tId)!;
        group.worksheets.push(ws);
        group.totalQuestions += ws.item_count || (ws as any).selected_question_ids?.length || 0;
        if (ws.is_live_monitored || ws.access_token) {
          group.liveCount += 1;
        }
      } else {
        unassigned.push(ws);
      }
    });

    // Filter guru jika dropdown dipilih
    let groups = Array.from(teacherMap.values());
    if (selectedTeacherId !== 'ALL') {
      groups = groups.filter((g) => g.teacher.id === selectedTeacherId);
    }

    // Filter jika search query cocok dengan nama atau email guru
    if (qLower) {
      groups = groups.filter((g) => {
        const nameMatch = g.teacher.full_name?.toLowerCase().includes(qLower);
        const emailMatch = g.teacher.email?.toLowerCase().includes(qLower);
        const schoolMatch = g.teacher.school_name?.toLowerCase().includes(qLower);
        return nameMatch || emailMatch || schoolMatch || g.worksheets.length > 0;
      });
    }

    return {
      groups,
      unassigned,
      totalMatched: matchedWorksheets.length,
    };
  }, [teachers, worksheets, searchQuery, statusFilter, selectedTeacherId]);

  // Hapus satu worksheet
  const handleConfirmDeleteSingle = async () => {
    if (!worksheetToDelete) return;
    setIsProcessing(true);
    try {
      await questionBankService.deleteWorksheet(worksheetToDelete.id);
      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'WORKSHEET_DELETED',
        target_resource: `worksheets/${worksheetToDelete.id}`,
        description: `Menghapus paket lembar kerja "${worksheetToDelete.title}" (ID #${worksheetToDelete.id})`,
      });

      showNotification('success', `Lembar kerja "${worksheetToDelete.title}" berhasil dihapus.`);
      setWorksheetToDelete(null);
      await loadData();
    } catch (e: any) {
      showNotification('error', e?.message || 'Gagal menghapus lembar kerja.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Bersihkan semua worksheet (Clean Sweep)
  const handleConfirmCleanAll = async () => {
    setIsProcessing(true);
    try {
      await questionBankService.clearAllWorksheets();
      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'ALL_WORKSHEETS_CLEARED',
        target_resource: 'worksheets',
        description: 'Pembersihan massal seluruh lembar kerja sistem & sesi ujian oleh Master Admin.',
      });

      showNotification('success', 'Semua lembar kerja berhasil dibersihkan.');
      setIsCleanAllModalOpen(false);
      await loadData();
    } catch (e: any) {
      showNotification('error', e?.message || 'Gagal membersihkan lembar kerja.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Hitung jumlah ujian live aktif
  const totalLiveWorksheetsCount = useMemo(() => {
    return worksheets.filter((w) => w.is_live_monitored || Boolean(w.access_token)).length;
  }, [worksheets]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans">
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
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
          <button onClick={() => setNotification(null)} className="p-1 text-slate-400 hover:text-slate-700">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Header Utama */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold font-mono tracking-wider">
              CENTRAL EXAM OVERSIGHT
            </span>
            <span className="text-xs text-slate-500 font-medium">Observasi Berbasis Guru & Radar Ujian Live</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Pengawasan Worksheet & Live Exam
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Observasi paket lembar kerja terkelompok per guru pembina, spectate ujian berlangsung, dan log aktivitas siswa.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={loadData}
            disabled={isLoading}
            className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs transition cursor-pointer"
            title="Segarkan data pengawasan"
          >
            <RefreshCw className={`w-4 h-4 text-slate-600 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          {worksheets.length > 0 && (
            <button
              onClick={() => setIsCleanAllModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Bersihkan semua lembar kerja dari database"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Bersihkan Semua</span>
            </button>
          )}

          <Link
            to="/teacher/worksheets/new"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition shadow-xs flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Rakit Worksheet</span>
          </Link>
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-medium">Guru Pembina Terdaftar</span>
            <Users className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-display">
            {teachers.length}
          </div>
          <span className="text-[10px] text-slate-400 block font-mono">
            ● {groupedData.groups.filter((g) => g.worksheets.length > 0).length} guru aktif merakit
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-medium">Total Paket Worksheet</span>
            <Layers className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-display">
            {worksheets.length}
          </div>
          <span className="text-[10px] text-sky-700 font-medium block">
            ● Tersimpan di database sistem
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-medium">Ujian Live Aktif</span>
            <Radio className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2">
            <span>{totalLiveWorksheetsCount}</span>
            {totalLiveWorksheetsCount > 0 && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700 animate-pulse">
                LIVE
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400 block font-mono">
            ● {liveSessions.length} siswa sedang mengerjakan
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-medium">Log Submisi Siswa</span>
            <Activity className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-display">
            {submissions.length}
          </div>
          <span className="text-[10px] text-emerald-700 font-medium block">
            ● Hasil evaluasi AI tersimpan
          </span>
        </div>
      </div>

      {/* Tab Nav Switcher */}
      <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs w-fit">
        <button
          onClick={() => setSubTab('worksheets')}
          className={`px-4 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-2 ${
            subTab === 'worksheets'
              ? 'bg-white text-slate-900 shadow-xs font-semibold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers size={13} />
          <span>Worksheet per Guru ({worksheets.length})</span>
        </button>

        <button
          onClick={() => setSubTab('live')}
          className={`px-4 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-2 ${
            subTab === 'live'
              ? 'bg-white text-slate-900 shadow-xs font-semibold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Radio size={13} className="text-rose-500" />
          <span>Live Radar Siswa ({liveSessions.length})</span>
        </button>

        <button
          onClick={() => setSubTab('submissions')}
          className={`px-4 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-2 ${
            subTab === 'submissions'
              ? 'bg-white text-slate-900 shadow-xs font-semibold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Activity size={13} />
          <span>Aktivitas & Submisi ({submissions.length})</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* SUB-TAB 1: WORKSHEETS GROUPED BY TEACHER                     */}
      {/* ============================================================ */}
      {subTab === 'worksheets' && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex-1 min-w-[240px] relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari guru, nama sekolah, judul worksheet, atau token ujian..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 transition"
              />
            </div>

            <div className="flex items-center gap-2">
              {/* Filter Guru */}
              <select
                value={selectedTeacherId}
                onChange={(e) => setSelectedTeacherId(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:bg-white focus:outline-none"
              >
                <option value="ALL">Semua Guru Pembina</option>
                {teachers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.full_name}
                  </option>
                ))}
              </select>

              {/* Filter Status Live */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:bg-white focus:outline-none"
              >
                <option value="ALL">Semua Format</option>
                <option value="LIVE">Ujian Live (Token Aktif)</option>
                <option value="STANDALONE">Latihan Mandiri (No Token)</option>
              </select>

              {/* Expand / Collapse All buttons */}
              <button
                type="button"
                onClick={handleExpandAll}
                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition cursor-pointer"
                title="Buka semua panel guru"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition cursor-pointer"
                title="Tutup semua panel guru"
              >
                Tutup Semua
              </button>
            </div>
          </div>

          {/* Konten Utama: Daftar Group by Teacher */}
          {isLoading ? (
            <div className="py-20 text-center text-slate-500">
              <div className="inline-block w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-2" />
              <div className="text-xs">Memuat kelompok lembar kerja per guru...</div>
            </div>
          ) : worksheets.length === 0 ? (
            /* EMPTY STATE BERSIH SETELAH CLEAN SWEEP */
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
                <Layers className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Database Lembar Kerja Bersih
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Belum ada paket lembar kerja aktif di sistem. Guru pembina dapat mulai merakit modul soal mandiri atau ujian live melalui menu Worksheet Builder atau AI Studio.
              </p>
              <div className="pt-2">
                <Link
                  to="/teacher/worksheets/new"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Rakit Lembar Kerja Pertama</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* GROUP 1: GURU PEMBINA TERDAFTAR */}
              {groupedData.groups.map(({ teacher, worksheets: teacherWs, liveCount, totalQuestions }) => {
                const isExpanded = expandedTeacherIds.has(teacher.id);

                return (
                  <div
                    key={teacher.id}
                    className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden transition-all"
                  >
                    {/* Header Panel Guru (Clickable) */}
                    <div
                      onClick={() => toggleTeacherAccordion(teacher.id)}
                      className="p-4 bg-slate-50/70 hover:bg-slate-100/70 transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer select-none border-b border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {(teacher.full_name || 'G').charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{teacher.full_name}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                              Guru Pembina
                            </span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {teacher.email} • {teacher.school_name || 'Sekolah Pembina OSN'}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700">
                            {teacherWs.length} Lembar Kerja
                          </span>
                          {liveCount > 0 ? (
                            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 font-bold text-rose-700 flex items-center gap-1.5 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                              <span>{liveCount} Sesi Live</span>
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500">
                              0 Sesi Live
                            </span>
                          )}
                        </div>

                        <div className="p-1 rounded-lg hover:bg-slate-200/60 text-slate-400">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                    </div>

                    {/* Konten Terbuka (Accordion Body) */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5">
                        {teacherWs.length === 0 ? (
                          <div className="py-8 text-center text-slate-400 text-xs italic bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                            Guru ini belum merakit paket lembar kerja aktif.
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {teacherWs.map((ws) => {
                              const isLive = ws.is_live_monitored || Boolean(ws.access_token);
                              const itemCount = ws.item_count || (ws as any).selected_question_ids?.length || 0;

                              return (
                                <div
                                  key={ws.id}
                                  className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between space-y-3.5 shadow-2xs"
                                >
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                      {ws.access_token ? (
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white tracking-wider">
                                          TOKEN: {ws.access_token}
                                        </span>
                                      ) : (
                                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                                          LATIHAN MANDIRI
                                        </span>
                                      )}

                                      {isLive && (
                                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1 font-bold">
                                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                                          <span>RADAR LIVE</span>
                                        </span>
                                      )}
                                    </div>

                                    <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                                      {ws.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                      {ws.description || 'Paket latihan kurasi soal olimpiade sains kimia.'}
                                    </p>
                                  </div>

                                  <div className="pt-3 border-t border-slate-100 space-y-3">
                                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                                      <span>{itemCount} Butir Soal</span>
                                      <span>{ws.time_limit_minutes || 60} Menit</span>
                                      <span className="text-emerald-700 font-bold">Pass: {ws.pass_score || 75}%</span>
                                    </div>

                                    <div className="flex items-center gap-1.5 pt-1">
                                      {ws.access_token && (
                                        <Link
                                          to={`/teacher/live/${ws.access_token}`}
                                          className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs"
                                        >
                                          <Radio size={12} className="text-rose-400" />
                                          <span>Spectate</span>
                                        </Link>
                                      )}

                                      <Link
                                        to={`/worksheet/standalone/${ws.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition flex items-center gap-1 border border-slate-200"
                                        title="Pratinjau Lembar Kerja (Tab Baru)"
                                      >
                                        <Eye size={12} />
                                        <span>Pratinjau</span>
                                      </Link>

                                      <button
                                        type="button"
                                        onClick={() => setWorksheetToDelete(ws)}
                                        className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold transition border border-rose-200 cursor-pointer"
                                        title="Hapus Lembar Kerja"
                                      >
                                        <Trash2 size={13} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* GROUP 2: WORKSHEET TANPA GURU PENANGGUNG JAWAB (LEGACY/UNASSIGNED) */}
              {groupedData.unassigned.length > 0 && (
                <div className="rounded-2xl bg-white border border-amber-200 shadow-2xs overflow-hidden">
                  <div
                    onClick={() => toggleTeacherAccordion('unassigned')}
                    className="p-4 bg-amber-50/70 hover:bg-amber-100/70 transition flex items-center justify-between cursor-pointer border-b border-amber-200"
                  >
                    <div className="flex items-center gap-2.5 text-amber-900">
                      <ShieldAlert className="w-5 h-5 text-amber-600" />
                      <div>
                        <div className="font-bold text-sm">
                          Worksheet Mandiri / Template Sistem ({groupedData.unassigned.length} Lembar)
                        </div>
                        <div className="text-xs text-amber-700">
                          Lembar kerja tanpa afiliasi guru pembina spesifik.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                      <span>{expandedTeacherIds.has('unassigned') ? 'Tutup' : 'Buka'}</span>
                      {expandedTeacherIds.has('unassigned') ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>

                  {expandedTeacherIds.has('unassigned') && (
                    <div className="p-4 sm:p-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {groupedData.unassigned.map((ws) => (
                          <div
                            key={ws.id}
                            className="p-4 rounded-xl bg-white border border-amber-200 hover:shadow-xs transition flex flex-col justify-between space-y-3 shadow-2xs"
                          >
                            <div className="space-y-1.5">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold">
                                {ws.access_token ? `TOKEN: ${ws.access_token}` : 'NO TOKEN'}
                              </span>
                              <h4 className="font-bold text-slate-900 text-sm line-clamp-2">{ws.title}</h4>
                              <p className="text-xs text-slate-500 line-clamp-2">{ws.description}</p>
                            </div>

                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                              <Link
                                to={`/worksheet/standalone/${ws.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-1.5 text-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                              >
                                Pratinjau
                              </Link>
                              <button
                                type="button"
                                onClick={() => setWorksheetToDelete(ws)}
                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs transition border border-rose-200 cursor-pointer"
                                title="Hapus Worksheet"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 2: LIVE RADAR PENGERJAAN SISWA                      */}
      {/* ============================================================ */}
      {subTab === 'live' && (
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Radar Pengerjaan Siswa Secara Real-Time
              </span>
            </div>
            <button
              onClick={loadData}
              className="text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
            >
              Segarkan Sesi
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {liveSessions.length === 0 ? (
              <div className="py-20 text-center text-slate-500 text-xs space-y-1">
                <div className="font-semibold text-slate-700">Tidak ada sesi live yang aktif saat ini.</div>
                <div className="text-slate-400">
                  Siswa yang memasukkan token ujian otomatis akan terpantau di radar ini.
                </div>
              </div>
            ) : (
              liveSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-slate-50/70 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      {(session.student_name || 'S').charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{session.student_name}</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        Token Ujian: <span className="text-slate-800 font-bold">{session.access_token}</span> • Soal #{session.current_question_index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right font-mono text-xs">
                      <span className="text-emerald-700 font-bold">{session.total_score || 0} Poin</span>
                      <span className="text-slate-400 block text-[10px]">
                        Aktif: {new Date(session.last_active_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <Link
                      to={`/teacher/live/${session.access_token}`}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-medium transition flex items-center gap-1.5"
                    >
                      <Eye size={12} />
                      <span>Spectate</span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 3: LOG RIWAYAT AKTIVITAS & SUBMISI SISWA            */}
      {/* ============================================================ */}
      {subTab === 'submissions' && (
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
              Log Riwayat Pengumpulan Lembar Kerja Siswa
            </span>
            <span className="text-xs text-slate-500 font-mono">Total {submissions.length} Pengumpulan</span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {submissions.length === 0 ? (
              <div className="py-20 text-center text-slate-500 text-xs space-y-1">
                <div className="font-semibold text-slate-700">Belum ada log pengumpulan lembar kerja siswa.</div>
                <div className="text-slate-400">
                  Hasil pengumpulan evaluasi mandiri atau ujian live akan tercatat di sini.
                </div>
              </div>
            ) : (
              submissions.map((sub, idx) => (
                <div
                  key={sub.id || idx}
                  className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-slate-50/70 transition"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[10px] font-semibold">
                        Pilar {sub.pillarNumber || 1}
                      </span>
                      <span className="font-semibold text-slate-900">{sub.questionTitle}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Subtopik: {sub.subtopic} • Jawaban: <span className="font-mono text-slate-700">{sub.studentFinalAnswer || '-'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                        (sub.scorePercentage || 0) >= 75
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {sub.scorePercentage}%
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {sub.gradedAt ? new Date(sub.gradedAt).toLocaleDateString('id-ID') : 'Baru saja'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 1: KONFIRMASI HAPUS SATUAN WORKSHEET                   */}
      {/* ============================================================ */}
      {worksheetToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Hapus Lembar Kerja?</h3>
                <p className="text-xs text-slate-500 mt-0.5">ID #{worksheetToDelete.id}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Apakah Anda yakin ingin menghapus worksheet <strong className="text-slate-900">"{worksheetToDelete.title}"</strong>? Siswa yang sedang mengerjakan paket ini akan terputus.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setWorksheetToDelete(null)}
                disabled={isProcessing}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteSingle}
                disabled={isProcessing}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {isProcessing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                <span>Ya, Hapus Paket</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 2: KONFIRMASI BERSIHKAN SEMUA (CLEAN SWEEP)            */}
      {/* ============================================================ */}
      {isCleanAllModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4 border border-rose-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Bersihkan Semua Worksheet?</h3>
                <p className="text-xs text-rose-600 font-semibold mt-0.5">Tindakan Reset Permanen</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Tindakan ini akan <strong className="text-rose-700">menghapus seluruh {worksheets.length} paket lembar kerja</strong> dan seluruh sesi ujian live yang tersimpan di cloud Supabase maupun cache lokal.
            </p>

            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-[11px] text-rose-800 space-y-1">
              <div className="font-bold">Perhatian:</div>
              <div>Bank soal master tetap utuh. Hanya paket rakitan ujian yang akan di-reset menjadi kosong.</div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsCleanAllModalOpen(false)}
                disabled={isProcessing}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmCleanAll}
                disabled={isProcessing}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition cursor-pointer disabled:opacity-50 flex items-center gap-1.5 shadow-xs"
              >
                {isProcessing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                <span>Bersihkan Seluruh Worksheet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
