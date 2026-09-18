import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import { getSubmissionHistory, calculatePillarMastery } from '../../services/submissionService';
import type {
  Classroom,
  ClassroomAssignment,
  SavedSubmissionRecord,
  PillarMasteryScore
} from '../../types/database';
import {
  School,
  BookOpen,
  Layers,
  Compass,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  Flame,
  Award,
  Zap,
  ChevronRight,
  Sparkles,
  Target,
  BarChart3,
  UserCheck,
  AlertCircle
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [activeClassroom, setActiveClassroom] = useState<Classroom | null>(null);
  const [assignments, setAssignments] = useState<ClassroomAssignment[]>([]);
  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);
  const [pillarScores, setPillarScores] = useState<PillarMasteryScore[]>([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      if (!user?.email) return;
      setIsLoading(true);
      try {
        // 1. Ambil data kelas siswa (Single Classroom rule)
        const classrooms = await classroomService.getStudentClassrooms(user.email, user.id);
        const active = classrooms.find((c) => c.user_membership_status === 'active') || null;
        setActiveClassroom(active);

        // 2. Ambil tugas kelas yang diberikan guru
        const studentAssignments = await classroomService.getStudentAssignments(user.email, user.id);
        setAssignments(studentAssignments);

        // 3. Ambil riwayat pengerjaan & penguasaan 10 pilar
        const history = getSubmissionHistory(user.id);
        setSubmissions(history);
        setPillarScores(calculatePillarMastery(history));
      } catch (err) {
        console.error('Gagal memuat data student dashboard:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, [user]);

  // Hitung metrik ringkas
  const averageScore = useMemo(() => {
    if (submissions.length === 0) return 0;
    const total = submissions.reduce((acc, curr) => acc + curr.scorePercentage, 0);
    return Math.round(total / submissions.length);
  }, [submissions]);

  const masteredCount = useMemo(() => {
    return pillarScores.filter((p) => p.masteryLevel === 'mastered').length;
  }, [pillarScores]);

  // Filter tugas aktif (belum lewat deadline atau tidak ada deadline)
  const activeAssignments = useMemo(() => {
    const now = new Date().getTime();
    return assignments.filter((a) => {
      if (!a.due_date) return true;
      return new Date(a.due_date).getTime() > now;
    });
  }, [assignments]);

  // Generate heatmap 28 hari (4 minggu x 7 hari)
  const heatmapDays = useMemo(() => {
    const days: { date: string; count: number; dayLabel: string }[] = [];
    const now = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = submissions.filter((s) => s.gradedAt?.startsWith(dateStr)).length;
      days.push({
        date: dateStr,
        count,
        dayLabel: d.toLocaleDateString('id-ID', { weekday: 'narrow' })
      });
    }
    return days;
  }, [submissions]);

  const handleStartAssignment = (assignment: ClassroomAssignment) => {
    if (assignment.worksheet?.access_token && assignment.is_live_monitored) {
      navigate(`/worksheet/live/${assignment.worksheet.access_token}`);
    } else {
      navigate(`/worksheet/teacher_assignment/${assignment.worksheet_id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
        <p className="text-xs font-medium text-slate-500">Menyiapkan Dashboard Belajar...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* 1. Hero Banner: Profil & Status Prestasi */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-800/40">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mb-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-500 text-white flex items-center justify-center text-3xl sm:text-4xl shadow-xl ring-4 ring-white/10 shrink-0">
              🎓
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                  {profile?.full_name || 'Siswa OSN Kimia'}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-400/20 text-sky-300 border border-sky-400/30">
                  Target: {profile?.target_olympiad || 'OSN'}
                </span>
                {profile?.grade_level && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-200">
                    Kelas {profile.grade_level}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{profile?.school_name || 'SMA Mitra OSN Kimia'}</span>
                {activeClassroom && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-300 font-semibold flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5" />
                      {activeClassroom.name}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Gamification Mini Pills */}
          <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-start">
            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 text-center min-w-[90px]">
              <div className="text-[10px] text-slate-300 font-medium flex items-center justify-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" />
                <span>Streak</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-amber-300">
                {profile?.current_streak || 0} Hari
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 text-center min-w-[90px]">
              <div className="text-[10px] text-slate-300 font-medium flex items-center justify-center gap-1">
                <Zap className="w-3 h-3 text-sky-400" />
                <span>XP Total</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-sky-300">
                {profile?.xp || 0} XP
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 text-center min-w-[90px]">
              <div className="text-[10px] text-slate-300 font-medium flex items-center justify-center gap-1">
                <Award className="w-3 h-3 text-emerald-400" />
                <span>Level</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-emerald-300">
                Lv. {profile?.level || 1}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Konten Utama: 2 Kolom (Kiri: Kelas & Tugas, Kanan: Progress & Heatmap) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Kolom Kiri: Kelas Saya & Tugas Aktif (7 Kolom) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Kartu Kelas Binaan Siswa */}
          {activeClassroom ? (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Kelas Binaan Resmi</h2>
                    <p className="text-xs text-slate-500">Kelas tempat Anda terdaftar dan dipantau</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Aktif
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{activeClassroom.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeClassroom.teacher_name
                      ? `Guru Pembina: ${activeClassroom.teacher_name}`
                      : 'Pembina OSN Kimia'}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-bold">
                      Kode: {activeClassroom.code}
                    </span>
                    <span>•</span>
                    <span>{activeClassroom.member_count || 1} Siswa</span>
                  </div>
                </div>

                <Link
                  to={`/student/classes/${activeClassroom.id}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 shrink-0"
                >
                  <span>Buka Ruang Kelas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 text-amber-900 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold">Belum Terdaftar di Kelas Binaan.</span>
                  <p className="text-slate-600 mt-0.5">
                    Masukkan kode kelas dari guru Anda untuk membuka seluruh materi dan tugas.
                  </p>
                </div>
              </div>
              <Link
                to="/join-class"
                className="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shrink-0"
              >
                Gabung Kelas
              </Link>
            </div>
          )}

          {/* Daftar Tugas & Penugasan Guru Aktif */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Tugas & Penugasan Guru</h2>
                  <p className="text-xs text-slate-500">Lembar kerja yang ditugaskan oleh pembina Anda</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                {activeAssignments.length} Tugas
              </span>
            </div>

            {activeAssignments.length > 0 ? (
              <div className="space-y-3 pt-2">
                {activeAssignments.map((assignment) => {
                  const hasDueDate = Boolean(assignment.due_date);
                  const isLive = assignment.is_live_monitored;

                  return (
                    <div
                      key={assignment.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all shadow-2xs hover:shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">
                            {assignment.worksheet?.title || `Lembar Kerja #${assignment.worksheet_id}`}
                          </h4>
                          {isLive && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700 flex items-center gap-1 animate-pulse">
                              🔴 Terpantau Langsung
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          {hasDueDate && (
                            <span className="flex items-center gap-1 text-slate-600">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              Tenggat: {new Date(assignment.due_date!).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          )}
                          <span>•</span>
                          <span>{assignment.worksheet?.item_count || 10} Soal</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleStartAssignment(assignment)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
                      >
                        <span>Kerjakan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <div className="text-sm font-bold text-slate-800">Tidak Ada Tugas Tertunda!</div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Semua tugas kelas sudah selesai dikerjakan atau belum ada tugas baru dari Guru Pembina.
                </p>
                <Link
                  to="/worksheet"
                  className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline"
                >
                  Jelajahi Lembar Kerja Mandiri →
                </Link>
              </div>
            )}
          </div>

          {/* Pintasan Cepat Fitur Pembelajaran */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link
              to="/roadmap"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Compass className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Peta Silabus</div>
              <div className="text-[11px] text-slate-500 mt-0.5">10 Topik Kurikulum</div>
            </Link>

            <Link
              to="/materi"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Database Teori</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Handout & Modul</div>
            </Link>

            <Link
              to="/worksheet"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all group col-span-2 sm:col-span-1"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Worksheet</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Latihan Mandiri</div>
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Ringkasan 10 Pilar & Heatmap Aktivitas (5 Kolom) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Ringkasan Penguasaan 10 Pilar Kimia */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Penguasaan 10 Pilar</h2>
                  <p className="text-xs text-slate-500">{masteredCount} dari 10 Topik Dikuasai</p>
                </div>
              </div>
              <Link
                to="/student/progress"
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                <span>Detail Radar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mini Horizontal Progress Bars for Top Pillars */}
            <div className="space-y-3 pt-2">
              {pillarScores.slice(0, 5).map((pillar) => {
                const percentage = Math.round(pillar.score);
                let barColor = 'bg-slate-300';
                let textColor = 'text-slate-600';
                if (pillar.masteryLevel === 'mastered') {
                  barColor = 'bg-emerald-500';
                  textColor = 'text-emerald-700';
                } else if (pillar.masteryLevel === 'developing') {
                  barColor = 'bg-amber-500';
                  textColor = 'text-amber-700';
                } else if (pillar.masteryLevel === 'needs_remedial') {
                  barColor = 'bg-rose-500';
                  textColor = 'text-rose-700';
                }

                return (
                  <div key={pillar.pillarNumber} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-800 truncate max-w-[190px]">
                        {pillar.pillarName}
                      </span>
                      <span className={`font-mono font-bold ${textColor}`}>
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                        style={{ width: `${Math.max(percentage, 5)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Rata-rata Skor Keseluruhan:</span>
              <span className="font-mono font-bold text-sky-700 text-sm">{averageScore}%</span>
            </div>
          </div>

          {/* Activity Heatmap 28 Hari Terakhir */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">Aktivitas Belajar (28 Hari)</h3>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {submissions.length} sesi selesai
              </span>
            </div>

            {/* Grid 7 kolom x 4 baris */}
            <div className="grid grid-cols-7 gap-1.5 pt-2">
              {heatmapDays.map((day, idx) => {
                let bg = 'bg-slate-100';
                if (day.count >= 3) bg = 'bg-sky-600 text-white';
                else if (day.count === 2) bg = 'bg-sky-400 text-white';
                else if (day.count === 1) bg = 'bg-sky-200 text-sky-900';

                return (
                  <div
                    key={idx}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-[10px] font-mono transition-transform hover:scale-110 cursor-pointer ${bg}`}
                    title={`${day.date}: ${day.count} sesi lembar kerja`}
                  >
                    <span className="text-[9px] opacity-60 leading-none">{day.dayLabel}</span>
                    <span className="font-bold leading-none mt-0.5">{day.count > 0 ? day.count : ''}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400">
              <span>Sedikit</span>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded bg-slate-100" />
                <div className="w-2.5 h-2.5 rounded bg-sky-200" />
                <div className="w-2.5 h-2.5 rounded bg-sky-400" />
                <div className="w-2.5 h-2.5 rounded bg-sky-600" />
              </div>
              <span>Banyak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
