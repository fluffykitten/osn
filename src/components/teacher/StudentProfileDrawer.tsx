import React, { useState, useEffect } from 'react';
import {
  X,
  Target,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Calendar,
  Layers,
  GraduationCap,
  School,
  ExternalLink,
  Flame,
  CheckSquare,
  HelpCircle,
  FileText,
  Percent,
  Search,
  Filter,
} from 'lucide-react';
import type { ClassroomMember } from '../../types/database';
import {
  studentProfilingService,
  type StudentProfileData,
} from '../../services/studentProfilingService';
import { PILLARS_DATA } from '../../data/syllabusData';
import { SMA_MATERIALS } from '../../data/smaMaterialsData';
import { KaTeXRenderer } from '../common/KaTeXRenderer';

interface Props {
  student: ClassroomMember | null;
  onClose: () => void;
}

export const StudentProfileDrawer: React.FC<Props> = ({ student, onClose }) => {
  const [profileData, setProfileData] = useState<StudentProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'pillars' | 'submissions' | 'reading' | 'achievements'>('pillars');
  const [expandedSubmissionId, setExpandedSubmissionId] = useState<string | null>(null);

  // Filter Sub-tab Modul
  const [readingCurriculum, setReadingCurriculum] = useState<'osn' | 'sma'>('osn');

  // Filter Sub-tab Lencana
  const [achievementFilter, setAchievementFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [achievementSearch, setAchievementSearch] = useState('');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Load data profil setiap kali student berubah
  useEffect(() => {
    if (!student) {
      setProfileData(null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    studentProfilingService
      .getStudentFullProfile(student)
      .then((data) => {
        if (isMounted) {
          setProfileData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Gagal memuat profil siswa:', err);
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [student]);

  if (!student) return null;

  // Filter list achievement
  const filteredAchievements = (profileData?.achievements || []).filter((item) => {
    const q = achievementSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.definition.title.toLowerCase().includes(q) ||
      item.definition.description.toLowerCase().includes(q) ||
      item.definition.categoryName.toLowerCase().includes(q);

    if (achievementFilter === 'unlocked') {
      return matchesSearch && item.progress.isUnlocked;
    }
    if (achievementFilter === 'locked') {
      return matchesSearch && !item.progress.isUnlocked;
    }
    return matchesSearch;
  });

  // Analisis kelebihan & area perbaikan
  const masteredPillars = (profileData?.pillarMastery || []).filter(
    (p) => p.masteryLevel === 'mastered'
  );
  const remedialPillars = (profileData?.pillarMastery || []).filter(
    (p) => p.masteryLevel === 'needs_remedial'
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-slate-200">
        
        {/* HEADER SECTION (Gradient Card) */}
        <div className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-6 border-b border-indigo-900/60 shrink-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer"
            title="Tutup (ESC)"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-8">
            {/* Avatar Circle */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-xl font-bold text-white font-mono uppercase">
                  {profileData?.avatarUrl ? (
                    <img
                      src={profileData.avatarUrl}
                      alt={profileData.fullName}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    (profileData?.fullName || student.student_name || student.student_email || 'S')
                      .charAt(0)
                      .toUpperCase()
                  )}
                </div>
              </div>
              {profileData?.currentStreak && profileData.currentStreak > 0 ? (
                <div
                  className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-black rounded-full flex items-center gap-0.5 shadow-xs"
                  title={`${profileData.currentStreak} Hari Belajar Berturut-turut`}
                >
                  <Flame className="w-3 h-3 fill-slate-950 text-slate-950" />
                  <span>{profileData.currentStreak}</span>
                </div>
              ) : null}
            </div>

            {/* Identity Info */}
            <div className="space-y-1.5 min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-extrabold font-display tracking-tight text-white truncate">
                  {profileData?.fullName || student.student_name || 'Calon Medalis OSN'}
                </h2>
                {student.status === 'active' ? (
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-[10px] font-bold">
                    Aktif
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-[10px] font-bold">
                    Menunggu Persetujuan
                  </span>
                )}
              </div>

              <p className="text-xs text-indigo-200 font-mono break-all">
                {profileData?.email || student.student_email}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <School className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{profileData?.schoolName || 'SMA Mitra OSN'}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                  <span>{profileData?.gradeLevel || 'Kelas 11'}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>
                    Gabung:{' '}
                    {new Date(profileData?.joinedAt || student.joined_at || student.invited_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </span>
              </div>

              {/* Gamification Level Badge */}
              {profileData && (
                <div className="pt-2 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-bold font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      Level {profileData.level}: {profileData.levelDefinition.title}
                    </span>
                    <span className="text-[10px] text-amber-400/80 font-normal">
                      ({profileData.xp.toLocaleString()} XP)
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 4 Instant Key Metric Cards */}
          <div className="grid grid-cols-4 gap-2 mt-5 pt-4 border-t border-indigo-900/60 text-center">
            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-indigo-300 font-medium">Akurasi Soal</div>
              <div className="text-base font-extrabold font-mono text-emerald-400">
                {isLoading ? '...' : `${profileData?.accuracyRate || 0}%`}
              </div>
            </div>
            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-indigo-300 font-medium">Soal Dikerjakan</div>
              <div className="text-base font-extrabold font-mono text-sky-400">
                {isLoading ? '...' : `${profileData?.totalQuestionsAttempted || 0}`}
              </div>
            </div>
            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-indigo-300 font-medium">Materi Tuntas</div>
              <div className="text-base font-extrabold font-mono text-indigo-400">
                {isLoading
                  ? '...'
                  : `${(profileData?.readingSummary.osnCompletedCount || 0) + (profileData?.readingSummary.smaCompletedCount || 0)}/26`}
              </div>
            </div>
            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-indigo-300 font-medium">Lencana Unlocked</div>
              <div className="text-base font-extrabold font-mono text-amber-400">
                {isLoading
                  ? '...'
                  : `${profileData?.unlockedAchievementsCount || 0}/${profileData?.totalAchievementsCount || 35}`}
              </div>
            </div>
          </div>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex border-b border-slate-200 bg-white px-6 gap-6 text-xs font-bold overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('pillars')}
            className={`py-3.5 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer border-b-2 ${
              activeTab === 'pillars'
                ? 'text-indigo-600 border-indigo-600 font-extrabold'
                : 'text-slate-500 border-transparent hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Pilar & Statistik</span>
          </button>

          <button
            onClick={() => setActiveTab('submissions')}
            className={`py-3.5 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer border-b-2 ${
              activeTab === 'submissions'
                ? 'text-indigo-600 border-indigo-600 font-extrabold'
                : 'text-slate-500 border-transparent hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Riwayat Soal ({profileData?.totalQuestionsAttempted || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('reading')}
            className={`py-3.5 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer border-b-2 ${
              activeTab === 'reading'
                ? 'text-indigo-600 border-indigo-600 font-extrabold'
                : 'text-slate-500 border-transparent hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Modul & Teori</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`py-3.5 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer border-b-2 ${
              activeTab === 'achievements'
                ? 'text-indigo-600 border-indigo-600 font-extrabold'
                : 'text-slate-500 border-transparent hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Lencana ({profileData?.unlockedAchievementsCount || 0})</span>
          </button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/60">
          {isLoading ? (
            <div className="space-y-4 py-12 text-center">
              <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-2" />
              <p className="text-xs text-slate-500 font-mono">Memuat profil dan analitik siswa...</p>
            </div>
          ) : !profileData ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-xs text-slate-600 font-semibold">Data siswa tidak dapat dimuat.</p>
            </div>
          ) : (
            <>
              {/* TAB 1: PILAR & STATISTIK */}
              {activeTab === 'pillars' && (
                <div className="space-y-6 animate-in fade-in">
                  {/* Diagnosa Pembina Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Kekuatan Topik</span>
                      </div>
                      {masteredPillars.length > 0 ? (
                        <div className="space-y-1">
                          {masteredPillars.map((p) => (
                            <div key={p.pillarNumber} className="text-xs text-emerald-950 font-medium flex items-center justify-between">
                              <span>{p.pillarName}</span>
                              <span className="font-mono font-bold">{p.score}%</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-emerald-700">Belum ada topik yang mencapai skor &ge; 80%.</p>
                      )}
                    </div>

                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wide">
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <span>Fokus Bimbingan (Perlu Remedial)</span>
                      </div>
                      {remedialPillars.length > 0 ? (
                        <div className="space-y-1">
                          {remedialPillars.map((p) => (
                            <div key={p.pillarNumber} className="text-xs text-rose-950 font-medium flex items-center justify-between">
                              <span>{p.pillarName}</span>
                              <span className="font-mono font-bold">{p.score}%</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-rose-700">Tidak ada topik kritis di bawah 50%.</p>
                      )}
                    </div>
                  </div>

                  {/* 10 Topic Bars */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                        Penguasaan 10 Pilar Silabus OSN Kimia
                      </h3>
                      <span className="text-[11px] text-slate-500">
                        Berdasarkan {profileData.totalQuestionsAttempted} pengerjaan
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {profileData.pillarMastery.map((pillar) => {
                        let barColor = 'bg-slate-200';
                        let textColor = 'text-slate-500';
                        let badgeLabel = 'Belum Dikerjakan';
                        let badgeBg = 'bg-slate-100 text-slate-600';

                        if (pillar.masteryLevel === 'mastered') {
                          barColor = 'bg-emerald-500';
                          textColor = 'text-emerald-700';
                          badgeLabel = 'Mahir (Mastered)';
                          badgeBg = 'bg-emerald-50 text-emerald-700 border border-emerald-200';
                        } else if (pillar.masteryLevel === 'developing') {
                          barColor = 'bg-sky-500';
                          textColor = 'text-sky-700';
                          badgeLabel = 'Berkembang';
                          badgeBg = 'bg-sky-50 text-sky-700 border border-sky-200';
                        } else if (pillar.masteryLevel === 'needs_remedial') {
                          barColor = 'bg-rose-500';
                          textColor = 'text-rose-700';
                          badgeLabel = 'Perlu Remedial';
                          badgeBg = 'bg-rose-50 text-rose-700 border border-rose-200';
                        }

                        return (
                          <div key={pillar.pillarNumber} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-slate-800">
                                {pillar.pillarName}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${badgeBg}`}>
                                  {badgeLabel}
                                </span>
                                <span className="font-mono font-bold text-slate-900 min-w-[36px] text-right">
                                  {pillar.score}%
                                </span>
                              </div>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-500 rounded-full ${barColor}`}
                                style={{ width: `${pillar.score}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: RIWAYAT PENGERJAAN SOAL */}
              {activeTab === 'submissions' && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                      Riwayat Pengerjaan Terakhir ({profileData.recentSubmissions.length})
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      Rata-rata Skor: <b>{profileData.averageScore}/10</b>
                    </span>
                  </div>

                  {profileData.recentSubmissions.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2 shadow-2xs">
                      <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
                      <p className="text-xs text-slate-600 font-semibold">
                        Siswa belum pernah mengumpulkan pengerjaan soal.
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Pengerjaan soal dari worksheet kelas atau bank soal latihan akan otomatis tercatat di sini.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {profileData.recentSubmissions.map((sub) => {
                        const isExpanded = expandedSubmissionId === sub.id;
                        return (
                          <div
                            key={sub.id}
                            className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all p-4 shadow-2xs space-y-3"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-bold font-mono border border-indigo-200">
                                    Topik {sub.pillarNumber}
                                  </span>
                                  <h4 className="text-xs font-bold text-slate-900">
                                    {sub.questionTitle}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(sub.gradedAt).toLocaleDateString('id-ID', {
                                      day: 'numeric',
                                      month: 'short',
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    })}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {sub.elapsedSeconds} detik
                                  </span>
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                <div className="text-sm font-extrabold font-mono text-slate-900">
                                  {sub.totalScore}/{sub.maxScore}
                                </div>
                                <span
                                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${
                                    sub.status === 'perfect'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : sub.status === 'partial_correct'
                                      ? 'bg-sky-100 text-sky-800'
                                      : 'bg-rose-100 text-rose-800'
                                  }`}
                                >
                                  {sub.status === 'perfect' ? 'Sempurna' : sub.status === 'partial_correct' ? 'Sebagian' : 'Salah'}
                                </span>
                              </div>
                            </div>

                            {/* Tombol Expand Langkah Pengerjaan */}
                            <button
                              onClick={() => setExpandedSubmissionId(isExpanded ? null : sub.id)}
                              className="w-full pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                            >
                              <span>{isExpanded ? 'Tutup Rincian Jawaban Siswa' : 'Lihat Uraian Jawaban & Feedback AI'}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>

                            {/* Detail Jawaban & AI Feedback */}
                            {isExpanded && (
                              <div className="pt-3 border-t border-slate-100 space-y-3 text-xs">
                                <div>
                                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                    Langkah Kerja Siswa:
                                  </div>
                                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-mono text-[11px] whitespace-pre-wrap">
                                    <KaTeXRenderer content={sub.studentWorkSteps || 'Tidak ada langkah kerja.'} />
                                  </div>
                                </div>

                                <div>
                                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                    Jawaban Akhir:
                                  </div>
                                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-mono text-[11px]">
                                    <KaTeXRenderer content={sub.studentFinalAnswer || '-'} inlineOnly />
                                  </div>
                                </div>

                                {sub.overallFeedback && (
                                  <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1">
                                    <div className="text-[10px] font-bold text-indigo-900 uppercase">
                                      Evaluasi & Feedback:
                                    </div>
                                    <p className="text-[11px] text-indigo-950 leading-relaxed">
                                      {sub.overallFeedback}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: MODUL & TEORI */}
              {activeTab === 'reading' && (
                <div className="space-y-4 animate-in fade-in">
                  {/* Selector Kurikulum */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <button
                        onClick={() => setReadingCurriculum('osn')}
                        className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          readingCurriculum === 'osn'
                            ? 'bg-indigo-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Silabus OSN Kimia (10 Topik)
                      </button>
                      <button
                        onClick={() => setReadingCurriculum('sma')}
                        className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          readingCurriculum === 'sma'
                            ? 'bg-indigo-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Kurikulum Merdeka SMA (16 Modul)
                      </button>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 font-bold">
                      {readingCurriculum === 'osn'
                        ? `${profileData.readingSummary.completedOsnTopicIds.length} / 10 Tuntas`
                        : `${profileData.readingSummary.completedSmaTopicIds.length} / 16 Tuntas`}
                    </span>
                  </div>

                  {/* List Modul OSN */}
                  {readingCurriculum === 'osn' && (
                    <div className="space-y-2.5">
                      {PILLARS_DATA.map((pillar) => {
                        const isCompleted = profileData.readingSummary.completedOsnTopicIds.includes(
                          pillar.pillar_number
                        );
                        return (
                          <div
                            key={pillar.id}
                            className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                              isCompleted
                                ? 'bg-white border-emerald-200 shadow-2xs'
                                : 'bg-white/60 border-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                                  isCompleted
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'bg-slate-100 text-slate-400'
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <Clock className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900">
                                  Topik {pillar.pillar_number}: {pillar.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1">
                                  {pillar.description || pillar.category}
                                </p>
                              </div>
                            </div>

                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                                isCompleted
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {isCompleted ? 'Tuntas Dibaca' : 'Belum Selesai'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* List Modul SMA */}
                  {readingCurriculum === 'sma' && (
                    <div className="space-y-2.5">
                      {SMA_MATERIALS.map((mod) => {
                        const isCompleted = profileData.readingSummary.completedSmaTopicIds.includes(
                          mod.id
                        );
                        return (
                          <div
                            key={mod.id}
                            className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                              isCompleted
                                ? 'bg-white border-emerald-200 shadow-2xs'
                                : 'bg-white/60 border-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                                  isCompleted
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'bg-slate-100 text-slate-400'
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <Clock className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[9px] font-mono px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded font-semibold">
                                    {mod.grade}
                                  </span>
                                  <h4 className="text-xs font-bold text-slate-900">
                                    {mod.title}
                                  </h4>
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1">
                                  {mod.summary || mod.category}
                                </p>
                              </div>
                            </div>

                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                                isCompleted
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {isCompleted ? 'Tuntas Dibaca' : 'Belum Selesai'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: LENCANA & PENCAPAIAN */}
              {activeTab === 'achievements' && (
                <div className="space-y-4 animate-in fade-in">
                  {/* Search & Filter Bar */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                    <div className="relative flex-1 min-w-[200px]">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={achievementSearch}
                        onChange={(e) => setAchievementSearch(e.target.value)}
                        placeholder="Cari lencana pencapaian..."
                        className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      {(
                        [
                          { key: 'all', label: 'Semua' },
                          { key: 'unlocked', label: 'Terbuka' },
                          { key: 'locked', label: 'Terkunci' },
                        ] as const
                      ).map((btn) => (
                        <button
                          key={btn.key}
                          onClick={() => setAchievementFilter(btn.key)}
                          className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                            achievementFilter === btn.key
                              ? 'bg-indigo-600 text-white shadow-2xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Achievements Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredAchievements.map(({ definition, progress }) => {
                      const isUnlocked = progress.isUnlocked;
                      return (
                        <div
                          key={definition.id}
                          className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                            isUnlocked
                              ? 'bg-white border-amber-300 shadow-2xs ring-1 ring-amber-300/30'
                              : 'bg-white/60 border-slate-200 opacity-60'
                          }`}
                        >
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                              isUnlocked ? 'bg-amber-100 shadow-xs' : 'bg-slate-100 grayscale'
                            }`}
                          >
                            {definition.emoji || '🎖️'}
                          </div>

                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="text-xs font-bold text-slate-900 truncate">
                                {definition.title}
                              </h4>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-slate-100 rounded text-slate-600 font-bold uppercase shrink-0">
                                {definition.rarity}
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                              {definition.description}
                            </p>

                            <div className="pt-1 flex items-center justify-between text-[10px]">
                              {isUnlocked ? (
                                <span className="text-emerald-600 font-bold flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>Terbuka (+{definition.xpReward} XP)</span>
                                </span>
                              ) : (
                                <div className="w-full space-y-1">
                                  <div className="flex justify-between text-slate-400 font-mono">
                                    <span>Progres</span>
                                    <span>
                                      {progress.currentValue} / {definition.targetValue} {definition.unit}
                                    </span>
                                  </div>
                                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-indigo-500 rounded-full"
                                      style={{ width: `${progress.progress}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* FOOTER BAR */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Mode Profil Siswa Terpadu OSN Kimia</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors cursor-pointer"
          >
            Tutup Panel (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
