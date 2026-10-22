import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  School,
  Clock,
  CheckCircle2,
  XCircle,
  Check,
  ArrowRight,
  Activity,
  Radio,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';
import { classroomService } from '../../services/classroomService';
import { useAuth } from '../../contexts/AuthContext';
import { TeacherNavigation } from '../../components/teacher/TeacherNavigation';
import { getSupabaseClient } from '../../lib/supabaseClient';
import type { ClassroomMember } from '../../types/database';

interface StudentActivityEntry {
  id: string;
  student: string;
  classLabel: string;
  action: string;
  time: string;
  timestampMs: number;
  score?: string;
  status: 'live' | 'perfect' | 'partial' | 'joined';
}

export const TeacherDashboard: React.FC = () => {
  const { user, profile } = useAuth();
  const teacherId = user?.id || '';
  const teacherName = profile?.full_name || user?.email?.split('@')[0] || 'Pembina';

  const [classrooms, setClassrooms] = useState<any[]>([]);
  const [pendingApprovals, setPendingApprovals] = useState<
    Array<ClassroomMember & { classroom_name: string; classroom_id: number }>
  >([]);
  const [recentActivities, setRecentActivities] = useState<StudentActivityEntry[]>([]);
  const [activeLiveSessions, setActiveLiveSessions] = useState<any[]>([]);
  const [isProcessingApproval, setIsProcessingApproval] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<string>('');

  const loadStats = async () => {
    setIsRefreshing(true);
    setLoadError(null);
    try {
      const cls = await classroomService.getTeacherClassrooms(teacherId);
      setClassrooms(cls);
      const pending = await classroomService.getPendingApprovalsAcrossClasses(teacherId);
      setPendingApprovals(pending);

      // Kumpulkan daftar seluruh anggota dari kelas binaan guru untuk memetakan nama & kelas asli siswa
      const studentNameByKey = new Map<string, { name: string; className: string }>();
      const acts: StudentActivityEntry[] = [];

      for (const c of cls) {
        try {
          const members = await classroomService.getClassroomMembers(c.id);
          for (const m of members) {
            const displayName = m.student_name || m.student_email?.split('@')[0] || 'Siswa';
            if (m.student_id) {
              studentNameByKey.set(m.student_id, { name: displayName, className: c.name });
            }
            if (m.student_email) {
              studentNameByKey.set(m.student_email.toLowerCase(), {
                name: displayName,
                className: c.name,
              });
            }

            if (m.status === 'active' && (m.joined_at || m.invited_at)) {
              const rawDate = m.joined_at || m.invited_at;
              const dateObj = new Date(rawDate);
              acts.push({
                id: `member-active-${c.id}-${m.id}`,
                student: displayName,
                classLabel: c.name,
                action: `Bergabung sebagai anggota aktif di kelas ${c.name}`,
                time: dateObj.toLocaleDateString('id-ID', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                }),
                timestampMs: dateObj.getTime() || 0,
                status: 'joined',
              });
            }
          }
        } catch {
          // Lanjutkan jika salah satu kelas gagal memuat daftar anggota
        }
      }

      const supabase = getSupabaseClient();
      if (supabase) {
        try {
          const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
          const { data: liveData } = await supabase
            .from('worksheet_live_sessions')
            .select('*')
            .gte('last_active_at', fifteenMinsAgo)
            .order('last_active_at', { ascending: false });

          if (liveData && liveData.length > 0) {
            setActiveLiveSessions(liveData);
            liveData.slice(0, 5).forEach((l: any) => {
              const matched =
                (l.student_id && studentNameByKey.get(l.student_id)) ||
                (l.student_email && studentNameByKey.get(String(l.student_email).toLowerCase()));
              const dateObj = l.last_active_at ? new Date(l.last_active_at) : new Date();

              acts.push({
                id: `live-${l.id}`,
                student: l.student_name || matched?.name || l.student_email || 'Siswa',
                classLabel: matched?.className || `Token: ${l.access_token || 'Ujian'}`,
                action: `Sedang mengerjakan butir soal #${(l.current_question_index || 0) + 1}`,
                time: dateObj.toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                }),
                timestampMs: dateObj.getTime(),
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
            .limit(10);

          if (subsData && subsData.length > 0) {
            subsData.forEach((s: any) => {
              const scorePct = s.max_score ? Math.round((s.total_score / s.max_score) * 100) : 0;
              const matched = s.user_id ? studentNameByKey.get(String(s.user_id)) : undefined;
              const dateObj = s.created_at ? new Date(s.created_at) : new Date();

              acts.push({
                id: String(s.id),
                student: matched?.name || s.student_name || 'Siswa',
                classLabel: matched?.className || (s.subtopic ? `Topik ${s.pillar_number}` : 'Latihan'),
                action: `Menyelesaikan latihan ${s.subtopic || `Soal #${s.question_id}`}`,
                time: dateObj.toLocaleDateString('id-ID', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                }),
                timestampMs: dateObj.getTime(),
                score: `${s.total_score}/${s.max_score || 10}`,
                status: scorePct >= 80 ? 'perfect' : 'partial',
              });
            });
          }
        } catch (err) {
          console.warn('Gagal memuat aktivitas dari cloud:', err);
        }
      }

      try {
        const localSubs = localStorage.getItem('osn_student_submissions');
        if (localSubs) {
          const parsed = JSON.parse(localSubs);
          parsed.slice(0, 6).forEach((s: any) => {
            const matched = s.userId ? studentNameByKey.get(String(s.userId)) : undefined;
            const dateObj = s.gradedAt ? new Date(s.gradedAt) : new Date();

            acts.push({
              id: String(s.id),
              student: matched?.name || 'Siswa Latihan',
              classLabel: matched?.className || `Topik ${s.pillarNumber || 1}`,
              action: `Penyerahan jawaban: ${s.questionTitle || s.subtopic || 'Soal Mandiri'}`,
              time: dateObj.toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
              }),
              timestampMs: dateObj.getTime(),
              score: `${s.totalScore || 0}/${s.maxScore || 10}`,
              status: (s.scorePercentage || 0) >= 80 ? 'perfect' : 'partial',
            });
          });
        }
      } catch {
        // Ignore local parse errors
      }

      const uniqueActs = acts
        .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
        .sort((a, b) => b.timestampMs - a.timestampMs);

      setRecentActivities(uniqueActs.slice(0, 10));
      setLastSyncedAt(
        new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      );
    } catch (e) {
      console.warn('Gagal memuat statistik kelas:', e);
      setLoadError('Gagal memuat data dashboard. Periksa koneksi jaringan lalu muat ulang.');
    } finally {
      setIsRefreshing(false);
      setInitialLoading(false);
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

  const totalStudents = classrooms.reduce((sum, c) => sum + (c.member_count || 0), 0);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <TeacherNavigation
        pendingApprovalsCount={pendingApprovals.length}
        activeLiveCount={activeLiveSessions.length}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* 1. COMPACT FUNCTIONAL HEADER */}
        <header className="bg-white rounded-2xl border border-slate-200 px-5 py-4 sm:px-6 sm:py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
              Selamat Datang, {teacherName}
            </h1>
            {lastSyncedAt && (
              <p className="text-xs text-slate-600 font-mono mt-0.5">
                Sinkronisasi terakhir: {lastSyncedAt} WIB
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={loadStats}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 px-4 min-h-[44px] bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <RefreshCw className={`w-4 h-4 text-slate-700 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Memuat Data...' : 'Muat Ulang Data'}</span>
          </button>
        </header>

        {/* ERROR STATE */}
        {loadError && (
          <div
            role="alert"
            className="bg-rose-50 border border-rose-300 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5 text-rose-900 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" />
              <span>{loadError}</span>
            </div>
            <button
              type="button"
              onClick={loadStats}
              className="px-3.5 min-h-[44px] bg-white hover:bg-rose-100 text-rose-900 border border-rose-300 rounded-xl text-xs font-bold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* 2. ACTIVE LIVE EXAM BANNER (Shown only when active live sessions exist) */}
        {activeLiveSessions.length > 0 && (
          <section
            aria-label="Sesi ujian berlangsung"
            className="bg-white border-2 border-rose-300 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-300 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-rose-800" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-rose-700" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold text-rose-900 uppercase">
                    Ujian Berlangsung
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mt-0.5">
                  {activeLiveSessions.length} siswa sedang mengerjakan naskah ujian saat ini
                </h2>
              </div>
            </div>

            <Link
              to={`/teacher/live/${activeLiveSessions[0]?.access_token || 'PELATNAS-WS1'}`}
              className="inline-flex items-center gap-2 px-4 min-h-[44px] bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
            >
              <Activity className="w-4 h-4" />
              <span>Buka Pemantauan Langsung</span>
            </Link>
          </section>
        )}

        {/* 3. CORE METRIC SUMMARY ROW (2 Focused Classroom Cards) */}
        <section aria-label="Ringkasan kelas dan persetujuan" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/teacher/classes"
            className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 transition-colors flex flex-col justify-between gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>Kelas Binaan</span>
              <School className="w-4 h-4 text-slate-600 group-hover:text-indigo-600 transition-colors" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900">
              {initialLoading ? '...' : `${classrooms.length} Kelas`}
            </div>
            <div className="text-xs text-slate-600 font-medium flex items-center justify-between pt-2 border-t border-slate-100">
              <span>{initialLoading ? 'Memuat daftar siswa...' : `${totalStudents} siswa terdaftar`}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/teacher/classes"
            className={`p-5 rounded-2xl border transition-colors flex flex-col justify-between gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              pendingApprovals.length > 0
                ? 'bg-amber-50/60 border-amber-300 hover:border-amber-500'
                : 'bg-white border-slate-200 hover:border-indigo-400'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-700 font-semibold">
              <span>Menunggu Persetujuan Kelas</span>
              <Clock className={`w-4 h-4 ${pendingApprovals.length > 0 ? 'text-amber-800' : 'text-slate-600'}`} />
            </div>
            <div
              className={`text-2xl font-bold font-mono ${
                pendingApprovals.length > 0 ? 'text-amber-900' : 'text-slate-900'
              }`}
            >
              {initialLoading ? '...' : `${pendingApprovals.length} Siswa`}
            </div>
            <div className="text-xs text-slate-700 font-medium flex items-center justify-between pt-2 border-t border-slate-200/70">
              <span>
                {pendingApprovals.length > 0
                  ? 'Perlu persetujuan bergabung kelas'
                  : 'Semua pendaftar telah diverifikasi'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            </div>
          </Link>
        </section>

        {/* 4. STUDENT APPROVAL QUEUE */}
        {pendingApprovals.length > 0 && (
          <section
            aria-label="Antrean persetujuan siswa baru"
            className="bg-white border border-amber-300 rounded-2xl p-5 sm:p-6 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 font-display">
                    Permintaan Bergabung Kelas ({pendingApprovals.length} Siswa)
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Setujui siswa berikut agar mereka dapat mengakses materi dan penugasan di kelas Anda.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApproveAll}
                disabled={isProcessingApproval}
                className="inline-flex items-center gap-2 px-4 min-h-[44px] bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Setujui Semua ({pendingApprovals.length})</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pendingApprovals.map((p) => (
                <div
                  key={`${p.classroom_id}-${p.id}`}
                  className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs shrink-0">
                      {(p.student_name || p.student_email || 'S')[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {p.student_name || 'Siswa Pendaftar'}
                      </p>
                      <p className="text-[11px] text-slate-600 font-mono truncate">{p.student_email}</p>
                      <span className="inline-block text-[11px] text-indigo-800 font-medium bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded mt-1 truncate max-w-[160px]">
                        {p.classroom_name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleApproveSingle(p.classroom_id, p.id)}
                      disabled={isProcessingApproval}
                      className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      title="Setujui pendaftaran siswa"
                      aria-label={`Setujui ${p.student_name || p.student_email || 'siswa'}`}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRejectSingle(p.classroom_id, p.id)}
                      disabled={isProcessingApproval}
                      className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded-xl transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
                      title="Tolak pendaftaran siswa"
                      aria-label={`Tolak ${p.student_name || p.student_email || 'siswa'}`}
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. RECENT STUDENT ACTIVITY */}
        <section
          aria-label="Aktivitas siswa terkini"
          className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Aktivitas Siswa Terkini
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Riwayat bergabungnya anggota kelas, pengerjaan ujian berlangsung, dan penyerahan latihan siswa.
              </p>
            </div>

            <Link
              to="/teacher/classes"
              className="inline-flex items-center gap-1.5 px-3.5 min-h-[44px] text-xs font-bold text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>Buka Kelas Binaan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {initialLoading ? (
            <div className="py-12 text-center text-xs text-slate-600 font-mono">
              Memuat riwayat aktivitas siswa...
            </div>
          ) : recentActivities.length === 0 ? (
            <div className="py-10 px-4 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 space-y-2">
              <Activity className="w-7 h-7 text-slate-500 mx-auto" />
              <p className="text-xs font-bold text-slate-800">
                Belum ada aktivitas siswa yang tercatat
              </p>
              <p className="text-xs text-slate-600">
                Aktivitas akan muncul otomatis saat siswa bergabung ke kelas binaan atau menyerahkan lembar kerja.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentActivities.map((act, i) => (
                <div
                  key={act.id || i}
                  className="py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {(act.student || 'S')[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-bold text-slate-900">{act.student}</span>
                        <span className="text-[11px] text-slate-700 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-medium">
                          {act.classLabel}
                        </span>
                        {act.status === 'live' && (
                          <span className="px-1.5 py-0.5 bg-rose-100 text-rose-900 border border-rose-300 rounded text-[10px] font-bold font-mono">
                            AKTIF
                          </span>
                        )}
                        {act.status === 'joined' && (
                          <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded text-[10px] font-bold font-mono">
                            ANGGOTA KELAS
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 mt-1 leading-relaxed">{act.action}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    {act.score && (
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${
                          act.status === 'perfect'
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                            : act.status === 'live'
                            ? 'bg-rose-50 text-rose-900 border-rose-300'
                            : 'bg-amber-50 text-amber-900 border-amber-300'
                        }`}
                      >
                        {act.score}
                      </span>
                    )}
                    <span className="text-slate-600 text-[11px] font-mono">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
