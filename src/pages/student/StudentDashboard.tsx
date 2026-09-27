import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import { getSubmissionHistory, syncSubmissionsFromCloud, calculatePillarMastery } from '../../services/submissionService';
import { studentWorksheetService, type ActiveWorksheetSession } from '../../services/studentWorksheetService';
import { studentReadingService, type ActiveReadingSession, type ReadingProgressSummary } from '../../services/studentReadingService';
import { trackAchievementEvent } from '../../services/achievementService';
import { OSN_MATERIALS } from '../../data/materialsData';
import { SMA_TOPICS_META } from '../../data/smaTopicsMeta';
import { getSmaTopicForOsnPillar } from '../../utils/topicMapping';
import type {
  Classroom,
  ClassroomAssignment,
  SavedSubmissionRecord,
  PillarMasteryScore
} from '../../types/database';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import { UserTitleBadge } from '../../components/gamification/UserTitleBadge';
import { ChemistFigureBadgeSvg } from '../../components/gamification/ChemistFigureBadgeSvg';
import { LevelProgressBar } from '../../components/gamification/LevelProgressBar';
import { TopicQuestPipeline } from '../../components/gamification/TopicQuestPipeline';
import { calculateLevelProgress, getLevelFromXp } from '../../utils/gamificationConstants';
import { ShowcaseBadgePill } from '../../components/gamification/ShowcaseBadgePill';
import { BadgeCustomizerModal } from '../../components/gamification/BadgeCustomizerModal';
import { getShowcaseConfig, syncShowcaseConfigFromCloud } from '../../services/showcaseBadgeService';
import type { StudentShowcaseConfig, ShowcaseDataPayload } from '../../types/showcaseBadge';
import {
  School,
  BookOpen,
  Layers,
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
  AlertCircle,
  BookMarked,
  GraduationCap,
  Atom,
  SlidersHorizontal
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [activeClassroom, setActiveClassroom] = useState<Classroom | null>(null);
  const [assignments, setAssignments] = useState<ClassroomAssignment[]>([]);
  const [submissions, setSubmissions] = useState<SavedSubmissionRecord[]>([]);
  const [pillarScores, setPillarScores] = useState<PillarMasteryScore[]>([]);

  // Trigger streak achievement on profile load
  useEffect(() => {
    if (profile?.current_streak && user?.id) {
      trackAchievementEvent(user.id, 'LOGIN_STREAK', { streak: profile.current_streak });
    }
    if (user?.id) {
      trackAchievementEvent(user.id, 'DASHBOARD_TRIVIA_VIEWED').catch(() => {});
    }
  }, [profile?.current_streak, user?.id]);

  // Sesi aktif pengerjaan soal dan membaca materi
  const [activeWorksheet, setActiveWorksheet] = useState<ActiveWorksheetSession | null>(null);
  const [activeReading, setActiveReading] = useState<ActiveReadingSession | null>(null);
  const [readingSummary, setReadingSummary] = useState<ReadingProgressSummary | null>(null);

  // Toggle tampilan pilar (5 terendah vs semua 10 pilar)
  const [showAllPillars, setShowAllPillars] = useState(false);

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

        // 3. Ambil riwayat pengerjaan & penguasaan 10 pilar (lokal + cloud sync)
        const localHist = getSubmissionHistory(user.id);
        setSubmissions(localHist);
        setPillarScores(calculatePillarMastery(localHist));

        // 4. Sesi aktif pengerjaan lembar kerja & membaca materi
        setActiveWorksheet(studentWorksheetService.getActiveSession(user.id));
        setActiveReading(studentReadingService.getActiveReadingSession(user.id));
        setReadingSummary(studentReadingService.getReadingProgressSummary(user.id));

        const cloudHist = await syncSubmissionsFromCloud(user.id);
        if (cloudHist && cloudHist.length > 0) {
          setSubmissions(cloudHist);
          setPillarScores(calculatePillarMastery(cloudHist));
        }
      } catch (err) {
        console.error('Gagal memuat data student dashboard:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();

    // Event listener untuk pembaruan sesi pengerjaan & membaca secara reaktif
    const handleWorksheetChange = (e: any) => {
      setActiveWorksheet(e.detail || studentWorksheetService.getActiveSession(user?.id));
    };
    const handleReadingChange = (e: any) => {
      setActiveReading(e.detail || studentReadingService.getActiveReadingSession(user?.id));
      setReadingSummary(studentReadingService.getReadingProgressSummary(user?.id));
    };

    window.addEventListener('osn_active_worksheet_changed', handleWorksheetChange);
    window.addEventListener('osn_active_reading_changed', handleReadingChange);

    return () => {
      window.removeEventListener('osn_active_worksheet_changed', handleWorksheetChange);
      window.removeEventListener('osn_active_reading_changed', handleReadingChange);
    };
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

  const perfectCount = useMemo(() => {
    return submissions.filter((s) => s.scorePercentage === 100).length;
  }, [submissions]);

  // Showcase Badge Configuration (Customizable by Student)
  const [showcaseConfig, setShowcaseConfig] = useState<StudentShowcaseConfig>(() =>
    getShowcaseConfig(user?.id)
  );
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    if (user?.id) {
      setShowcaseConfig(getShowcaseConfig(user.id));
      syncShowcaseConfigFromCloud(user.id).then((cloud) => {
        if (cloud) setShowcaseConfig(cloud);
      });
    }

    const handleShowcaseChange = (e: any) => {
      if (e.detail) setShowcaseConfig(e.detail);
    };

    window.addEventListener('osn_showcase_badges_changed', handleShowcaseChange);
    return () => window.removeEventListener('osn_showcase_badges_changed', handleShowcaseChange);
  }, [user?.id]);

  const showcaseDataPayload: ShowcaseDataPayload = useMemo(() => ({
    streak: profile?.current_streak || 0,
    xp: profile?.xp || 0,
    level: calculateLevelProgress(profile?.xp || 0).currentLevel,
    accuracy: averageScore,
    solvedCount: submissions.length,
    masteredTopicsCount: masteredCount,
    targetOlympiad: profile?.target_olympiad,
    perfectCount,
  }), [profile, averageScore, submissions.length, masteredCount, perfectCount]);

  // Filter tugas aktif (belum lewat deadline atau tidak ada deadline)
  const activeAssignments = useMemo(() => {
    const now = new Date().getTime();
    return assignments.filter((a) => {
      if (!a.due_date) return true;
      return new Date(a.due_date).getTime() > now;
    });
  }, [assignments]);

  // Pemetaan materi terkait untuk setiap tugas guru
  const getRelatedMaterialForAssignment = (assignment: ClassroomAssignment) => {
    const title = (assignment.worksheet?.title || '').toLowerCase();
    const desc = (assignment.worksheet?.description || '').toLowerCase();
    const combined = `${title} ${desc}`;

    // Cek pilar/topik OSN
    const matchedOsn = OSN_MATERIALS.find((m) => {
      const tLower = m.title.toLowerCase();
      const cLower = m.category.toLowerCase();
      return (
        combined.includes(tLower) ||
        combined.includes(cLower) ||
        (m.allTags && m.allTags.some((tag) => combined.includes(tag.toLowerCase())))
      );
    });
    if (matchedOsn) {
      return {
        database: 'osn' as const,
        id: matchedOsn.id,
        slug: matchedOsn.slug,
        title: matchedOsn.title,
        category: matchedOsn.category,
        topicNumber: matchedOsn.topic_number,
      };
    }

    // Cek topik SMA
    const matchedSma = SMA_TOPICS_META.find((m) => {
      const tLower = m.title.toLowerCase();
      return (
        combined.includes(tLower) ||
        (m.allTags && m.allTags.some((tag) => combined.includes(tag.toLowerCase())))
      );
    });
    if (matchedSma) {
      return {
        database: 'sma' as const,
        id: matchedSma.id,
        slug: matchedSma.slug,
        title: matchedSma.title,
        category: matchedSma.category,
        topicNumber: matchedSma.topic_number,
      };
    }

    // Default: Topik 1 OSN
    return {
      database: 'osn' as const,
      id: OSN_MATERIALS[0].id,
      slug: OSN_MATERIALS[0].slug,
      title: OSN_MATERIALS[0].title,
      category: OSN_MATERIALS[0].category,
      topicNumber: OSN_MATERIALS[0].topic_number,
    };
  };

  // Tugas guru yang diperkaya dengan status pengerjaan siswa & materi teori pendukung
  const enrichedAssignments = useMemo(() => {
    return activeAssignments.map((asg) => {
      const rawItem: any = {
        id: asg.worksheet_id,
        type: 'teacher_assignment',
        title: asg.worksheet?.title || `Tugas: ${asg.classroom?.name || 'Kelas OSN'}`,
        description: asg.worksheet?.description || '',
        token: asg.worksheet?.access_token,
        item_count: asg.worksheet?.item_count || 10,
        time_limit_minutes: asg.worksheet?.time_limit_minutes || 60,
        pass_score: asg.worksheet?.pass_score || 70,
        status: 'not_started',
        enrolled_at: asg.assigned_at,
      };
      const enriched = studentWorksheetService.enrichWorksheetStatus(rawItem, user?.id);
      const relatedMat = getRelatedMaterialForAssignment(asg);

      return {
        assignment: asg,
        status: enriched.status, // 'not_started' | 'in_progress' | 'completed'
        score: enriched.score,
        maxScore: enriched.max_score,
        progressPercent: enriched.progress_percent || 0,
        relatedMaterial: relatedMat,
      };
    });
  }, [activeAssignments, user?.id]);

  // Deteksi pilar dengan pemahaman terendah untuk Rekomendasi Siklus Belajar (Study Loop)
  const lowestPillar = useMemo(() => {
    if (pillarScores.length === 0) return null;
    const sorted = [...pillarScores].sort((a, b) => a.score - b.score);
    return sorted[0];
  }, [pillarScores]);

  const lowestPillarMaterial = useMemo(() => {
    if (!lowestPillar) return null;
    return OSN_MATERIALS.find((m) => m.topic_number === lowestPillar.pillarNumber) || OSN_MATERIALS[0];
  }, [lowestPillar]);

  // Prasyarat materi dasar SMA yang sesuai dengan pilar terlemah
  const lowestPillarSmaMaterial = useMemo(() => {
    if (!lowestPillar) return null;
    return getSmaTopicForOsnPillar(lowestPillar.pillarNumber) || null;
  }, [lowestPillar]);

  // Temuan miskonsepsi dari evaluasi pengerjaan terakhir
  const lowestPillarMisconception = useMemo(() => {
    if (!lowestPillar) return null;
    const match = submissions.find(
      (s) => s.pillarNumber === lowestPillar.pillarNumber && Boolean(s.misconceptionDiagnosis)
    );
    return match?.misconceptionDiagnosis || match?.suggestedReviewTopic || null;
  }, [lowestPillar, submissions]);

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
        dayLabel: d.toLocaleDateString('id-ID', { weekday: 'narrow' }),
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
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3" style={{ backgroundColor: '#F0F8FF' }}>
        <div className="w-10 h-10 border-4 border-[#B0C4DE] border-t-[#708090] rounded-full animate-spin" />
        <p className="text-xs font-semibold text-[#708090]">Menyiapkan Dashboard Belajar...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden bg-slate-50"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-in fade-in duration-300">
        {/* 1. Hero Banner: Profil & Status Prestasi Siswa */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/10 border border-slate-700">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 -mb-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Bagian Kiri: Profil & Identitas Akademis (Tanpa Redundansi Title) */}
            <div className="flex items-center gap-5">
              <ChemistFigureBadgeSvg
                xp={profile?.xp || 0}
                size={82}
                className="shrink-0 drop-shadow-xl"
              />
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                    {profile?.full_name || 'Siswa OSN Kimia'}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/20 shadow-2xs">
                    Target: {profile?.target_olympiad || 'OSN'}
                  </span>
                  {profile?.grade_level && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-100 border border-white/20">
                      Kelas {profile.grade_level}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-slate-200 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>{profile?.school_name || 'SMA Mitra OSN Kimia'}</span>
                  {activeClassroom && (
                    <>
                      <span className="text-slate-400">•</span>
                      <span className="text-emerald-300 font-semibold flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{activeClassroom.name}</span>
                      </span>
                    </>
                  )}
                </div>

                <div className="text-[11px] text-slate-300/80 flex items-center gap-2 pt-0.5">
                  <span>Portofolio Persiapan OSN Kimia</span>
                  <span>•</span>
                  <span className="text-sky-300 font-mono font-bold">
                    {submissions.length} Sesi Terverifikasi
                  </span>
                </div>
              </div>
            </div>

            {/* Bagian Kanan: Showcase Lencana Pod (Seragam, Rapi, & Tombol Terintegrasi) */}
            <div className="flex flex-col items-start lg:items-end self-stretch sm:self-auto shrink-0">
              {/* Header Showcase dengan Tombol Atur */}
              <div className="flex items-center justify-between w-full mb-1.5 px-0.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Showcase Profil</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsCustomizerOpen(true)}
                  title="Kustomisasi 3 lencana yang ditampilkan"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-bold text-amber-300 hover:text-white transition-all shadow-xs cursor-pointer group"
                  aria-label="Atur Badge Tampilan"
                >
                  <SlidersHorizontal className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                  <span>Atur</span>
                </button>
              </div>

              {/* 3 Kartu Berdimensi Seragam Berjajar Rapi */}
              <div className="flex items-center gap-2.5">
                {showcaseConfig.slots.slice(0, 3).map((slot, idx) => (
                  <ShowcaseBadgePill
                    key={`${slot.slotIndex}-${slot.category}-${slot.statType || slot.achievementId || idx}`}
                    slot={slot}
                    data={showcaseDataPayload}
                    variant="glass"
                    onClick={() => setIsCustomizerOpen(true)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Level & Chemist Title Progress Bar */}
          <div className="relative z-10 mt-6 pt-5 border-t border-white/10">
            <LevelProgressBar xp={profile?.xp || 0} variant="glass" />
          </div>
        </div>

        {/* 2. DUAL-TRACK QUICK RESUME HUB (Serene Ivory & Slate) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Track 1: Lanjutkan Lembar Kerja / Tugas Terakhir */}
          <div className="relative overflow-hidden rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-5 shadow-xs hover:border-[#708090] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B0C4DE]/25 border border-[#B0C4DE]/60 flex items-center justify-center text-[#4A5867] shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5867] bg-[#B0C4DE]/25 px-2 py-0.5 rounded-full border border-[#B0C4DE]/60">
                        Pengerjaan Soal
                      </span>
                      {activeWorksheet && (
                        <span className="text-[10px] font-medium text-[#708090]">
                          Aktif {new Date(activeWorksheet.lastActiveAt).toLocaleDateString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-[#2D3748] mt-1 line-clamp-1">
                      {activeWorksheet?.title ||
                        (activeAssignments[0]?.worksheet?.title
                          ? `Tugas: ${activeAssignments[0].worksheet.title}`
                          : 'Latihan Bank Soal OSN Kimia')}
                    </h3>
                  </div>
                </div>

                {activeWorksheet && (
                  <span className="text-xs font-mono font-bold text-[#4A5867] bg-[#B0C4DE]/25 px-2.5 py-1 rounded-lg border border-[#B0C4DE]/60 shrink-0">
                    Soal {activeWorksheet.currentQIndex + 1}/{activeWorksheet.totalQuestions}
                  </span>
                )}
              </div>

              {/* Progress mini bar jika ada sesi berjalan */}
              {activeWorksheet && (
                <div className="w-full bg-[#B0C4DE]/25 h-1.5 rounded-full overflow-hidden mt-3">
                  <div
                    className="bg-[#708090] h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.max(
                        Math.round(((activeWorksheet.currentQIndex + 1) / activeWorksheet.totalQuestions) * 100),
                        5
                      )}%`,
                    }}
                  />
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#D3D3D3]/60 flex items-center justify-between gap-3">
              <p className="text-xs text-[#708090] truncate">
                {activeWorksheet
                  ? `Lanjutkan butir ke-${activeWorksheet.currentQIndex + 1} yang sedang dikerjakan`
                  : activeAssignments.length > 0
                  ? `${activeAssignments.length} tugas kelas siap dikerjakan`
                  : 'Asah ketajaman analisis lewat pengerjaan soal mandiri'}
              </p>
              <button
                onClick={() => {
                  if (activeWorksheet?.url) {
                    navigate(activeWorksheet.url);
                  } else if (activeAssignments[0]) {
                    handleStartAssignment(activeAssignments[0]);
                  } else {
                    navigate('/worksheet');
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer shrink-0"
              >
                <span>{activeWorksheet ? 'Lanjutkan Soal' : 'Buka Lembar Kerja'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Track 2: Lanjutkan Membaca Materi Teori */}
          <div className="relative overflow-hidden rounded-3xl bg-[#FFFFF0] border border-[#B0C4DE] p-5 shadow-xs hover:border-[#708090] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E2F0D9] border border-[#C5E0B4] flex items-center justify-center text-[#2E6930] shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6930] bg-[#E2F0D9] px-2 py-0.5 rounded-full border border-[#C5E0B4]">
                        Bacaan Teori Modul
                      </span>
                      <span className="text-[10px] font-semibold text-[#708090]">
                        {activeReading?.database === 'sma' ? 'Sains Kimia SMA' : 'Silabus OSN'}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#2D3748] mt-1 line-clamp-1">
                      {activeReading?.title || 'Topik 1: Struktur Atom & Tabel Periodik'}
                    </h3>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-[#2E6930] bg-[#E2F0D9] px-2.5 py-1 rounded-lg border border-[#C5E0B4]">
                    {activeReading && activeReading.progressPercent > 0
                      ? `${Math.round(activeReading.progressPercent)}%`
                      : 'Mulai'}
                  </span>
                </div>
              </div>

              {/* Progress bar kedalaman baca */}
              <div className="w-full bg-[#B0C4DE]/25 h-1.5 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-[#4A7C59] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(activeReading?.progressPercent || 0, 4)}%` }}
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D3D3D3]/60 flex items-center justify-between gap-3">
              <p className="text-xs text-[#708090] truncate">
                {activeReading && activeReading.progressPercent > 0
                  ? `Kedalaman baca ${Math.round(activeReading.progressPercent)}% • Estimasi sisa ${Math.max(
                      2,
                      Math.round((activeReading.readTimeMinutes || 15) * (1 - activeReading.progressPercent / 100))
                    )} mnt`
                  : 'Pelajari konsep inti dan contoh soal terbahas'}
              </p>
              <Link
                to={
                  activeReading
                    ? `/materi/${activeReading.slug || activeReading.materialId}?db=${activeReading.database}`
                    : '/materi'
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer shrink-0"
              >
                <span>{activeReading && activeReading.progressPercent > 0 ? 'Lanjut Baca' : 'Mulai Baca'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. REKOMENDASI SIKLUS BELAJAR BERJENJANG / SISTEM QUEST TERINTEGRASI */}
        {lowestPillar && (
          <TopicQuestPipeline
            pillarNumber={lowestPillar.pillarNumber}
            pillarName={lowestPillar.pillarName}
            pillarScore={lowestPillar}
            misconceptionDiagnosis={lowestPillarMisconception}
            userId={user?.id}
          />
        )}

        {/* 4. Grid Konten Utama: 2 Kolom (Kiri: Kelas & Tugas, Kanan: 10 Pilar & Literasi Teori) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Kolom Kiri: Kelas Saya, Tugas Guru Aktif, & Pintasan Cepat (7 Kolom) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kartu Kelas Binaan Siswa */}
            {activeClassroom ? (
              <div className="bg-[#FFFFF0] rounded-3xl p-6 border border-[#D3D3D3] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B0C4DE]/25 border border-[#B0C4DE]/60 flex items-center justify-center text-[#4A5867]">
                      <School className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-[#2D3748]">Kelas Binaan Resmi</h2>
                      <p className="text-xs text-[#708090]">Kelas tempat Anda terdaftar dan dipantau pembina</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#E2F0D9] text-[#2E6930] text-[11px] font-bold rounded-full border border-[#C5E0B4] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Aktif
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-[#2D3748]">{activeClassroom.name}</h3>
                    <p className="text-xs text-[#708090] mt-0.5">
                      {activeClassroom.teacher_name
                        ? `Guru Pembina: ${activeClassroom.teacher_name}`
                        : 'Pembina OSN Kimia'}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-[#4A5867]">
                      <span className="font-mono bg-[#FFFFF0] px-2 py-0.5 rounded border border-[#B0C4DE]/60 text-[#2D3748] font-bold">
                        Kode: {activeClassroom.code}
                      </span>
                      <span>•</span>
                      <span>{activeClassroom.member_count || 1} Siswa</span>
                    </div>
                  </div>

                  <Link
                    to={`/student/classes/${activeClassroom.id}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 shrink-0"
                  >
                    <span>Buka Ruang Kelas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-[#FFF2CC]/60 border border-[#FFE599] rounded-3xl p-6 text-[#806000] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#806000] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#2D3748]">Belum Terdaftar di Kelas Binaan.</span>
                    <p className="text-[#708090] mt-0.5">
                      Masukkan kode kelas dari guru Anda untuk membuka seluruh materi dan tugas binaan.
                    </p>
                  </div>
                </div>
                <Link
                  to="/join-class"
                  className="px-3.5 py-2 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl shrink-0"
                >
                  Gabung Kelas
                </Link>
              </div>
            )}

            {/* Daftar Tugas & Penugasan Guru dengan Pendamping Teori */}
            <div className="bg-[#FFFFF0] rounded-3xl p-6 border border-[#D3D3D3] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#B0C4DE]/25 border border-[#B0C4DE]/60 flex items-center justify-center text-[#4A5867]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#2D3748]">Tugas & Penugasan Guru</h2>
                    <p className="text-xs text-[#708090]">Lembar kerja resmi dari pembina dengan pendamping teori</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#4A5867] bg-[#B0C4DE]/20 px-2.5 py-1 rounded-lg border border-[#B0C4DE]/50">
                  {enrichedAssignments.length} Tugas
                </span>
              </div>

              {enrichedAssignments.length > 0 ? (
                <div className="space-y-3 pt-2">
                  {enrichedAssignments.map(({ assignment, status, score, relatedMaterial, progressPercent }) => {
                    const hasDueDate = Boolean(assignment.due_date);
                    const isLive = assignment.is_live_monitored;

                    let badgeColor = 'bg-[#F0F8FF] text-[#708090] border-[#B0C4DE]/60';
                    let badgeLabel = 'Belum Dikerjakan';
                    let actionLabel = 'Kerjakan';

                    if (status === 'completed') {
                      badgeColor = 'bg-[#E2F0D9] text-[#2E6930] border-[#C5E0B4]';
                      badgeLabel = typeof score === 'number' ? `Selesai • Nilai ${score}/10` : 'Selesai Dinilai';
                      actionLabel = 'Tinjau Hasil';
                    } else if (status === 'in_progress') {
                      badgeColor = 'bg-[#FFF2CC] text-[#806000] border-[#FFE599]';
                      badgeLabel = `Sedang Berjalan (${progressPercent}%)`;
                      actionLabel = 'Lanjutkan';
                    }

                    return (
                      <div
                        key={assignment.id}
                        className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#D3D3D3] hover:border-[#B0C4DE] transition-all shadow-2xs hover:shadow-xs space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-sm font-bold text-[#2D3748]">
                                {assignment.worksheet?.title || `Lembar Kerja #${assignment.worksheet_id}`}
                              </h4>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${badgeColor}`}>
                                {badgeLabel}
                              </span>
                              {isLive && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FCE4D6] text-[#C00000] flex items-center gap-1 border border-[#F8CBAD]">
                                  🔴 Terpantau Langsung
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#708090]">
                              {hasDueDate && (
                                <span className="flex items-center gap-1 text-[#4A5867]">
                                  <Calendar className="w-3.5 h-3.5 text-[#708090]" />
                                  Tenggat: {new Date(assignment.due_date!).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })}
                                </span>
                              )}
                              <span>•</span>
                              <span>{assignment.worksheet?.item_count || 10} Soal</span>
                            </div>
                          </div>

                          {/* Aksi Pengerjaan Tugas */}
                          <div className="flex items-center gap-2 shrink-0">
                            {/* Tombol Pendamping Teori: Membaca modul sebelum mengerjakan */}
                            <Link
                              to={`/materi/${relatedMaterial.slug}?db=${relatedMaterial.database}`}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#4A5867] text-xs font-semibold rounded-xl border border-[#B0C4DE] transition-all"
                              title={`Baca modul pendukung: ${relatedMaterial.title}`}
                            >
                              <BookOpen className="w-3.5 h-3.5 text-[#4A7C59]" />
                              <span className="hidden sm:inline">Kaji Teori</span>
                            </Link>

                            <button
                              onClick={() => handleStartAssignment(assignment)}
                              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                            >
                              <span>{actionLabel}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center bg-[#F0F8FF]/60 rounded-2xl border border-dashed border-[#B0C4DE] space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#4A7C59] mx-auto" />
                  <div className="text-sm font-bold text-[#2D3748]">Tidak Ada Tugas Tertunda!</div>
                  <p className="text-xs text-[#708090] max-w-sm mx-auto">
                    Semua tugas kelas sudah selesai dikerjakan atau belum ada penugasan baru dari Guru Pembina.
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-4">
                    <Link
                      to="/materi"
                      className="text-xs font-bold text-[#4A7C59] hover:underline flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Baca Modul Teori →
                    </Link>
                    <Link
                      to="/worksheet"
                      className="text-xs font-bold text-[#708090] hover:text-[#2D3748] hover:underline flex items-center gap-1"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Bank Soal & Latihan →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Penguasaan 10 Pilar & Progres Literasi Membaca (5 Kolom) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kartu Ringkasan Literasi Modul (OSN & SMA) */}
            <div className="bg-[#FFFFF0] rounded-3xl p-6 border border-[#D3D3D3] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E2F0D9] border border-[#C5E0B4] flex items-center justify-center text-[#2E6930]">
                    <BookMarked className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#2D3748]">Literasi Teori Kimia</h2>
                    <p className="text-xs text-[#708090]">Kemajuan membaca modul dan konsep inti</p>
                  </div>
                </div>
                <Link
                  to="/materi"
                  className="text-xs font-bold text-[#708090] hover:text-[#2D3748] flex items-center gap-1"
                >
                  <span>Pustaka</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE]/60 space-y-1">
                  <span className="text-[11px] font-semibold text-[#4A5867]">Modul Silabus OSN</span>
                  <div className="text-base font-black font-mono text-[#2D3748]">
                    {readingSummary?.osnCompletedCount || 0} / {readingSummary?.osnTotalCount || 10}
                  </div>
                  <div className="w-full bg-[#B0C4DE]/25 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#708090] h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.round(
                          ((readingSummary?.osnCompletedCount || 0) / (readingSummary?.osnTotalCount || 10)) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE]/60 space-y-1">
                  <span className="text-[11px] font-semibold text-[#4A5867]">Modul Sains SMA</span>
                  <div className="text-base font-black font-mono text-[#2D3748]">
                    {readingSummary?.smaCompletedCount || 0} / {readingSummary?.smaTotalCount || 16}
                  </div>
                  <div className="w-full bg-[#B0C4DE]/25 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#708090] h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.round(
                          ((readingSummary?.smaCompletedCount || 0) / (readingSummary?.smaTotalCount || 16)) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ringkasan Penguasaan 10 Pilar Silabus OSN */}
            <div className="bg-[#FFFFF0] rounded-3xl p-6 border border-[#D3D3D3] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#B0C4DE]/25 border border-[#B0C4DE]/60 flex items-center justify-center text-[#4A5867]">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#2D3748]">Penguasaan 10 Pilar</h2>
                    <p className="text-xs text-[#708090]">{masteredCount} dari 10 Topik Dikuasai</p>
                  </div>
                </div>
                <Link
                  to="/student/progress"
                  className="text-xs font-bold text-[#708090] hover:text-[#2D3748] flex items-center gap-1"
                >
                  <span>Radar Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Daftar Progress Bar Pilar Kimia */}
              <div className="space-y-3 pt-2">
                {(showAllPillars ? pillarScores : pillarScores.slice(0, 5)).map((pillar) => {
                  const percentage = Math.round(pillar.score);
                  let barColor = 'bg-[#B0C4DE]';
                  let textColor = 'text-[#708090]';
                  if (pillar.masteryLevel === 'mastered') {
                    barColor = 'bg-[#4A7C59]';
                    textColor = 'text-[#2E6930]';
                  } else if (pillar.masteryLevel === 'developing') {
                    barColor = 'bg-[#D4A359]';
                    textColor = 'text-[#806000]';
                  } else if (pillar.masteryLevel === 'needs_remedial') {
                    barColor = 'bg-[#C05A5A]';
                    textColor = 'text-[#C00000]';
                  }

                  const matchedMat = OSN_MATERIALS.find((m) => m.topic_number === pillar.pillarNumber);

                  return (
                    <div key={pillar.pillarNumber} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#2D3748] truncate max-w-[190px]">
                          {pillar.pillarName}
                        </span>
                        <div className="flex items-center gap-2">
                          {matchedMat && (
                            <Link
                              to={`/materi/${matchedMat.slug}?db=osn`}
                              className="text-[10px] text-[#708090] hover:text-[#2E6930] font-semibold"
                              title={`Baca modul: ${matchedMat.title}`}
                            >
                              Modul ↗
                            </Link>
                          )}
                          <span className={`font-mono font-bold ${textColor}`}>
                            {percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-[#B0C4DE]/25 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                          style={{ width: `${Math.max(percentage, 5)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {pillarScores.length > 5 && (
                <button
                  onClick={() => setShowAllPillars(!showAllPillars)}
                  className="w-full py-2 text-center text-xs font-bold text-[#4A5867] hover:text-[#2D3748] bg-[#F0F8FF] hover:bg-[#FFFFF0] rounded-xl border border-[#B0C4DE] transition-all cursor-pointer"
                >
                  {showAllPillars ? 'Tampilkan 5 Teratas Saja' : `Lihat Semua 10 Pilar Silabus (${pillarScores.length})`}
                </button>
              )}

              <div className="pt-2 border-t border-[#D3D3D3]/60 flex items-center justify-between text-xs">
                <span className="text-[#708090]">Rata-rata Skor Keseluruhan:</span>
                <span className="font-mono font-bold text-[#4A5867] text-sm">{averageScore}%</span>
              </div>
            </div>

            {/* Activity Heatmap 28 Hari Terakhir (Serene Slate Graduation) */}
            <div className="bg-[#FFFFF0] rounded-3xl p-6 border border-[#D3D3D3] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4A359]" />
                  <h3 className="text-sm font-bold text-[#2D3748]">Aktivitas Belajar (28 Hari)</h3>
                </div>
                <span className="text-[11px] text-[#708090] font-mono">
                  {submissions.length} sesi selesai
                </span>
              </div>

              {/* Grid 7 kolom x 4 baris */}
              <div className="grid grid-cols-7 gap-1.5 pt-2">
                {heatmapDays.map((day, idx) => {
                  let bg = 'bg-[#F0F8FF] border border-[#B0C4DE]/40 text-[#708090]';
                  if (day.count >= 3) bg = 'bg-[#708090] text-[#FFFFF0] border border-[#5D6D7D]';
                  else if (day.count === 2) bg = 'bg-[#B0C4DE] text-[#2D3748] border border-[#B0C4DE]';
                  else if (day.count === 1) bg = 'bg-[#B0C4DE]/40 text-[#2D3748] border border-[#B0C4DE]/60';

                  return (
                    <div
                      key={idx}
                      className={`aspect-square rounded-lg flex flex-col items-center justify-center text-[10px] font-mono transition-transform hover:scale-110 cursor-pointer ${bg}`}
                      title={`${day.date}: ${day.count} sesi lembar kerja`}
                    >
                      <span className="text-[9px] opacity-70 leading-none">{day.dayLabel}</span>
                      <span className="font-bold leading-none mt-0.5">{day.count > 0 ? day.count : ''}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] text-[#708090]">
                <span>Sedikit</span>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded bg-[#F0F8FF] border border-[#B0C4DE]/40" />
                  <div className="w-2.5 h-2.5 rounded bg-[#B0C4DE]/40 border border-[#B0C4DE]/60" />
                  <div className="w-2.5 h-2.5 rounded bg-[#B0C4DE]" />
                  <div className="w-2.5 h-2.5 rounded bg-[#708090]" />
                </div>
                <span>Banyak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Kustomisasi Showcase Badges Profil Siswa */}
      <BadgeCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentConfig={showcaseConfig}
        dataPayload={showcaseDataPayload}
        userId={user?.id}
        onSaved={(newCfg) => setShowcaseConfig(newCfg)}
      />
    </div>
  );
};
