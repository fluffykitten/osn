import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Compass,
  BookOpen,
  Layers,
  Users,
  School,
  LogIn,
  LogOut,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Code2,
  GraduationCap,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Settings,
  PenTool,
  ArrowLeft,
  ArrowRight,
  Grid,
  Share2,
  Menu,
  X,
  Bug,
  Check,
  Plus,
} from 'lucide-react';
import { getLocalGamificationState, type UserGamificationState } from '../../lib/gamification';
import { UserTitleBadge } from '../gamification/UserTitleBadge';
import { useAuth } from '../../contexts/AuthContext';
import { useSubject } from '../../contexts/SubjectContext';
import { SUBJECT_CONFIGS, getSubjectConfig } from '../../config/subjectConfig';
import { isSubjectId, type SubjectId } from '../../types/subject';
import { useWhiteboardHeader } from '../../contexts/WhiteboardHeaderContext';
import {
  studentWorksheetService,
  type ActiveWorksheetSession,
} from '../../services/studentWorksheetService';
import {
  SolarBook,
  SolarStars,
  SolarClipboard,
  SolarPalette,
  SolarShield,
  SolarUsers,
  SolarDiploma,
  SolarTrophy,
  SolarLock,
} from './AppIcons';
import { AxiomaLogo } from './AxiomaLogo';

export const Navbar: React.FC = React.memo(() => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const navigate = useNavigate();
  const { user, profile, isTeacher, isAdmin, logout } = useAuth();
  const {
    currentSubject,
    setCurrentSubject,
    unlockedSubjects,
    isSubjectUnlocked,
    isCurrentSubjectUnlocked,
    studentClassrooms,
    teacherSubject,
    isMultiSubjectAdmin,
  } = useSubject();
  const currentSubjectConfig = getSubjectConfig(currentSubject);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const subjectDropdownRef = useRef<HTMLDivElement>(null);

  const { headerState } = useWhiteboardHeader();
  const [gamification, setGamification] = useState<UserGamificationState>(getLocalGamificationState);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavDropdown, setActiveNavDropdown] = useState<'syllabus' | 'practice' | 'studio' | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<{
    syllabus: boolean;
    practice: boolean;
    studio: boolean;
  }>({
    syllabus: true,
    practice: true,
    studio: false,
  });

  const navDropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    setShowUserDropdown(false);
    setMobileMenuOpen(false);
    await logout();
    window.location.href = '/';
  };

  // Pantau sesi worksheet yang sedang aktif dikerjakan siswa
  const [activeWorksheet, setActiveWorksheet] = useState<ActiveWorksheetSession | null>(() =>
    studentWorksheetService.getActiveSession(user?.id)
  );

  useEffect(() => {
    const updateActive = (e?: StorageEvent | Event) => {
      if (e && 'key' in e && e.key && !e.key.includes('worksheet') && !e.key.includes('session')) {
        return;
      }
      setActiveWorksheet(studentWorksheetService.getActiveSession(user?.id));
    };

    window.addEventListener('osn_active_worksheet_changed', updateActive);
    window.addEventListener('storage', updateActive);
    updateActive();

    return () => {
      window.removeEventListener('osn_active_worksheet_changed', updateActive);
      window.removeEventListener('storage', updateActive);
    };
  }, [user?.id]);

  // Perbarui status worksheet aktif saat berganti rute
  useEffect(() => {
    setActiveWorksheet(studentWorksheetService.getActiveSession(user?.id));
  }, [location.pathname, user?.id]);

  const [hasNewGradeNotification, setHasNewGradeNotification] = useState(false);

  useEffect(() => {
    const handleGradePublished = (e: any) => {
      const detail = e.detail;
      if (detail && (!user?.id || detail.studentId === user.id || detail.studentId === user.email)) {
        setHasNewGradeNotification(true);
      }
    };
    window.addEventListener('osn_teacher_grade_published', handleGradePublished);
    return () => window.removeEventListener('osn_teacher_grade_published', handleGradePublished);
  }, [user?.id, user?.email]);

  useEffect(() => {
    if (location.pathname.startsWith('/worksheet')) {
      setHasNewGradeNotification(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowUserDropdown(false);
    setShowSubjectDropdown(false);
    setActiveNavDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navDropdownRef.current && !navDropdownRef.current.contains(event.target as Node)) {
        setActiveNavDropdown(null);
      }
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(event.target as Node)) {
        setShowSubjectDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key && !e.key.includes('gamification')) return;
      setGamification(getLocalGamificationState());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isWhiteboardCanvas =
    location.pathname.startsWith('/whiteboard/') &&
    location.pathname.replace('/whiteboard/', '').trim().length > 0;

  return (
    <>
      <header
        className="sticky top-0 z-40 backdrop-blur-xl border-b shadow-xs transition-colors duration-200"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--theme-surface) 88%, transparent)',
          borderColor: 'var(--theme-border)',
        }}
      >
        <div className={`${isWhiteboardCanvas ? 'w-full px-4 sm:px-6' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} h-16 flex items-center justify-between gap-4`}>
          {/* Logo & Brand: Seamless, Modern, No Clunky Boxes or Pill Badges */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="flex items-center gap-3 group shrink-0 select-none">
              <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <AxiomaLogo variant="icon" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#2D3748] font-display uppercase group-hover:text-[#708090] transition-colors">
                  Axioma
                </span>
                <span className="font-mono font-bold text-[8.5px] sm:text-[9px] tracking-[0.25em] text-[#708090] uppercase mt-[1.5px]">
                  Academy
                </span>
              </div>
            </Link>

            {/* Mode Whiteboard Canvas: Navigasi Dashboard & Katalog Whiteboard */}
            {isWhiteboardCanvas && (
              <div className="flex items-center gap-2">
                <div className="h-5 w-[1px] bg-[#D3D3D3] mx-1 hidden sm:block" />

                <Link
                  to={isTeacher ? '/teacher' : '/student/dashboard'}
                  className="h-9 inline-flex items-center gap-1.5 px-3 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] font-semibold text-xs transition shadow-2xs border border-[#D3D3D3] active:scale-95 cursor-pointer"
                  title="Kembali ke Dashboard Utama"
                >
                  <ArrowLeft size={14} className="text-[#708090]" />
                  <span>Dashboard</span>
                </Link>

                <Link
                  to="/whiteboard"
                  className="h-9 inline-flex items-center gap-1.5 px-3 rounded-xl bg-[#B0C4DE]/25 hover:bg-[#B0C4DE]/40 text-[#708090] font-semibold text-xs transition shadow-2xs border border-[#B0C4DE]/60 active:scale-95 cursor-pointer"
                  title="Buka Daftar & Katalog Papan Tulis"
                >
                  <Grid size={14} className="text-[#708090]" />
                  <span className="hidden sm:inline">Katalog Whiteboard</span>
                  <span className="sm:hidden">Katalog</span>
                </Link>
              </div>
            )}

            {/* Main Navigation Links: 3 CATEGORIES ARCHITECTURE */}
            {!isWhiteboardCanvas && user && (
              <nav ref={navDropdownRef} className="hidden md:flex items-center gap-1 text-xs font-medium text-[#708090]">
                {/* 0. Quick Dashboard Link */}
                <Link
                  to={isTeacher ? '/teacher' : '/student/dashboard'}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive(isTeacher ? '/teacher' : '/student/dashboard') && !isActive('/teacher/classes')
                      ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                      : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </Link>

                {/* 1. Category: Syllabus */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveNavDropdown(activeNavDropdown === 'syllabus' ? null : 'syllabus')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      isActive('/materi') || activeNavDropdown === 'syllabus'
                        ? 'bg-[#B0C4DE]/30 text-[#2D3748] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <SolarBook className="w-3.5 h-3.5" />
                    <span>Syllabus</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeNavDropdown === 'syllabus' ? 'rotate-180 text-[#2D3748]' : 'text-[#708090]'
                      }`}
                    />
                  </button>

                  {activeNavDropdown === 'syllabus' && (
                    <div className="absolute top-full left-0 mt-2 z-50 w-80 rounded-2xl bg-[#FFFFF0]/95 backdrop-blur-xl border border-[#B0C4DE]/60 shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-[#708090]/80">
                        Pilihan Kurikulum & Silabus
                      </div>
                      <div className="space-y-1">
                        <Link
                          to="/materi?db=osn"
                          onClick={() => setActiveNavDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <SolarTrophy className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                              Materi OSN Kimia
                            </span>
                            <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                              Tingkat Kota, Provinsi hingga Pelatnas IChO
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/materi?db=sma"
                          onClick={() => setActiveNavDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <SolarBook className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                              Materi Dasar SMA
                            </span>
                            <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                              Fondasi kurikulum kimia kelas 10, 11, dan 12
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/materi?db=igcse"
                          onClick={() => setActiveNavDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                              Cambridge IGCSE
                            </span>
                            <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                              Silabus internasional Core & Extended
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#B0C4DE]/40">
                        <Link
                          to="/materi"
                          onClick={() => setActiveNavDropdown(null)}
                          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] transition"
                        >
                          <span>Buka Semua Katalog Materi</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Category: Practice & Tests */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveNavDropdown(activeNavDropdown === 'practice' ? null : 'practice')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer relative ${
                      isActive('/practice') || isActive('/worksheet') || activeNavDropdown === 'practice'
                        ? 'bg-[#B0C4DE]/30 text-[#2D3748] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <SolarStars className="w-3.5 h-3.5" />
                    <span>Practice & Tests</span>
                    {hasNewGradeNotification && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {activeWorksheet && !hasNewGradeNotification && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                      </span>
                    )}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeNavDropdown === 'practice' ? 'rotate-180 text-[#2D3748]' : 'text-[#708090]'
                      }`}
                    />
                  </button>

                  {activeNavDropdown === 'practice' && (
                    <div className="absolute top-full left-0 mt-2 z-50 w-80 rounded-2xl bg-[#FFFFF0]/95 backdrop-blur-xl border border-[#B0C4DE]/60 shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150">
                      {/* Active Worksheet Alert Banner if any */}
                      {activeWorksheet && (
                        <div className="mb-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                          <div className="flex items-center justify-between text-[11px] font-bold text-amber-900">
                            <span className="flex items-center gap-1.5">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                              </span>
                              Sesi Aktif Berjalan
                            </span>
                            <span className="font-mono text-[10px]">Soal #{activeWorksheet.currentQIndex + 1}</span>
                          </div>
                          <Link
                            to={activeWorksheet.url}
                            onClick={() => setActiveNavDropdown(null)}
                            className="mt-1.5 flex items-center justify-between px-2 py-1 rounded-lg bg-[#FFFFF0] text-amber-900 text-[11px] font-bold hover:bg-amber-100 transition shadow-2xs"
                          >
                            <span className="truncate">{activeWorksheet.title || 'Lanjutkan Ujian'}</span>
                            <ArrowRight size={13} className="shrink-0" />
                          </Link>
                        </div>
                      )}

                      <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-[#708090]/80">
                        Latihan & Evaluasi
                      </div>
                      <div className="space-y-1">
                        <Link
                          to={isTeacher || isAdmin ? '/practice?mode=table' : '/practice'}
                          onClick={() => setActiveNavDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <SolarStars className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                              Bank Soal Terstandar
                            </span>
                            <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                              Latihan soal bertingkat dengan pembahasan detail
                            </p>
                          </div>
                        </Link>

                        <Link
                          to={activeWorksheet ? activeWorksheet.url : '/worksheet'}
                          onClick={() => setActiveNavDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <SolarClipboard className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition">
                                Worksheet Siswa
                              </span>
                              {hasNewGradeNotification && (
                                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse">
                                  Nilai Baru!
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                              Lembar kerja mandiri & evaluasi terstruktur
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Category: Studio */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveNavDropdown(activeNavDropdown === 'studio' ? null : 'studio')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      isActive('/whiteboard') || isActive('/teacher') || isActive('/admin') || activeNavDropdown === 'studio'
                        ? 'bg-[#B0C4DE]/30 text-[#2D3748] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <SolarPalette className="w-3.5 h-3.5" />
                    <span>Studio</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeNavDropdown === 'studio' ? 'rotate-180 text-[#2D3748]' : 'text-[#708090]'
                      }`}
                    />
                  </button>

                  {activeNavDropdown === 'studio' && (
                    <div className="absolute top-full left-0 mt-2 z-50 w-80 rounded-2xl bg-[#FFFFF0]/95 backdrop-blur-xl border border-[#B0C4DE]/60 shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-[#708090]/80">
                        Ruang Kolaborasi & Pengelolaan
                      </div>
                      <div className="space-y-1">
                        <Link
                          to="/whiteboard"
                          onClick={() => setActiveNavDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <SolarPalette className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                              STEMBoard Whiteboard
                            </span>
                            <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                              Papan tulis kimia digital dengan alat gambar & rumus
                            </p>
                          </div>
                        </Link>

                        {(isTeacher || isAdmin) && (
                          <>
                            <Link
                              to="/teacher/classes"
                              onClick={() => setActiveNavDropdown(null)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                            >
                              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <SolarUsers className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                                  Kelas Binaan
                                </span>
                                <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                                  Manajemen murid, penugasan & monitoring
                                </p>
                              </div>
                            </Link>

                            <Link
                              to="/teacher"
                              onClick={() => setActiveNavDropdown(null)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <SolarDiploma className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                                  Studio Guru
                                </span>
                                <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                                  Pengawasan proses belajar & rekap penilaian
                                </p>
                              </div>
                            </Link>
                          </>
                        )}

                        {isAdmin && (
                          <Link
                            to="/admin/analytics"
                            onClick={() => setActiveNavDropdown(null)}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F8FF] transition text-left border-t border-[#B0C4DE]/40 mt-1 pt-2"
                          >
                            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              <SolarShield className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs text-[#2D3748] group-hover:text-[#708090] transition block">
                                Portal Admin
                              </span>
                              <p className="text-[11px] text-[#708090] line-clamp-1 mt-0.5">
                                Pusat kendali sistem, analitik & manajemen akun
                              </p>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Progress Siswa Direct Link */}
                {!isTeacher && (
                  <Link
                    to="/student/progress"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/student/progress') || isActive('/profile')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Progress</span>
                  </Link>
                )}
              </nav>
            )}
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Informasi Sesi Whiteboard (Hanya di mode canvas whiteboard) */}
            {isWhiteboardCanvas && (
              <div className="flex items-center gap-2">
                <button
                  onClick={headerState?.onOpenSession}
                  className={`h-9 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition active:scale-95 cursor-pointer ${
                    headerState?.roomCode
                      ? 'bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] border border-[#708090] font-mono font-bold tracking-wide'
                      : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3]'
                  }`}
                  title="Pengaturan Sesi Bersama Guru & Siswa (Kode Ruangan)"
                >
                  <Share2 size={13} className={headerState?.roomCode ? 'text-[#FFFFF0]' : 'text-[#708090]'} />
                  <span>{headerState?.roomCode ? `Kode: ${headerState.roomCode}` : 'Sesi Bersama'}</span>
                </button>

                {headerState?.roomCode && (
                  headerState.isHost ? (
                    <button
                      onClick={headerState.onToggleSessionMode}
                      className={`h-9 px-3 rounded-xl text-xs font-semibold transition flex items-center gap-2 border shadow-2xs cursor-pointer active:scale-95 ${
                        headerState.sessionMode === 'collaborative'
                          ? 'bg-[#FFFFF0] hover:bg-[#F0F8FF] border-[#B0C4DE] text-[#708090]'
                          : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] border-[#D3D3D3] text-[#708090]'
                      }`}
                      title="Klik untuk ubah mode izin siswa (Kolaboratif / Presentasi)"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-[#708090]' : 'bg-[#B0C4DE]'
                        }`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-[#708090]' : 'bg-[#708090]'
                        }`} />
                      </span>
                      <span>{headerState.sessionMode === 'collaborative' ? 'Bisa Gambar ✏️' : 'Menyimak 🔒'}</span>
                    </button>
                  ) : (
                    <div
                      className="h-9 px-3 rounded-xl text-xs font-semibold flex items-center gap-2 border border-[#D3D3D3] bg-[#FFFFF0] text-[#708090] shadow-2xs"
                      title={headerState.sessionMode === 'collaborative' ? 'Mode Kolaboratif: Anda dapat mencoret di papan tulis' : 'Mode Menyimak: Hanya pembuat sesi yang dapat mencoret'}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-[#708090]' : 'bg-[#B0C4DE]'
                        }`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-[#708090]' : 'bg-[#708090]'
                        }`} />
                      </span>
                      <span>{headerState.sessionMode === 'collaborative' ? 'Bisa Gambar ✏️' : 'Menyimak 🔒'}</span>
                    </div>
                  )
                )}

                <div className="h-5 w-[1px] bg-[#D3D3D3] mx-0.5 hidden sm:block" />
              </div>
            )}



            {/* Subject Selector Pill (Axioma Multi-Subject Engine) */}
            {user && !isWhiteboardCanvas && (
              <div className="relative" ref={subjectDropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                  className="h-9 flex items-center gap-1.5 px-2.5 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] border border-[#D3D3D3] transition-colors cursor-pointer active:scale-95 text-xs font-semibold text-[#2D3748]"
                  title="Ganti atau Lihat Akses Mata Pelajaran (Kimia, Fisika, Matematika, Biologi)"
                >
                  <span className="text-sm leading-none">{currentSubjectConfig.symbolGlyph}</span>
                  <span className="font-bold text-xs">{currentSubjectConfig.name}</span>
                  {!isTeacher && !isAdmin && !isCurrentSubjectUnlocked && (
                    <SolarLock className="w-3 h-3 text-amber-500" />
                  )}
                  <ChevronDown
                    className={`w-3 h-3 text-[#708090] transition-transform ${
                      showSubjectDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showSubjectDropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-[#FFFFF0] border border-[#D3D3D3] rounded-2xl shadow-xl p-2.5 text-xs z-50 animate-in fade-in space-y-2">
                    <div className="px-2 py-1 border-b border-[#D3D3D3]/60 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#708090]">
                        Pilihan Mata Pelajaran
                      </span>
                      <span className="text-[10px] font-medium text-[#708090]">
                        {isAdmin
                          ? 'Akses Global Admin'
                          : isTeacher
                          ? `Guru ${teacherSubject || profile?.teaching_subject || 'Kimia'}`
                          : `${unlockedSubjects.length}/4 Terbuka`}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {(['kimia', 'fisika', 'matematika', 'biologi'] as SubjectId[]).map((subId) => {
                        const conf = SUBJECT_CONFIGS[subId];
                        const isUnlocked = isSubjectUnlocked(subId);
                        const isCurrent = currentSubject === subId;
                        const matchingClassroom = studentClassrooms.find(
                          (c) => c.subjects?.includes(subId) && c.user_membership_status === 'active'
                        );

                        return (
                          <div
                            key={subId}
                            onClick={() => {
                              setCurrentSubject(subId);
                              setShowSubjectDropdown(false);
                              const segments = location.pathname.split('/').filter(Boolean);
                              if (segments.length > 0 && isSubjectId(segments[0])) {
                                segments[0] = subId;
                                navigate(`/${segments.join('/')}`);
                              } else if (location.pathname === '/practice' || location.pathname === '/materi') {
                                navigate(`/${subId}${location.pathname}`);
                              }
                            }}
                            className={`p-2 rounded-xl transition-all flex items-center justify-between cursor-pointer border ${
                              isCurrent
                                ? 'bg-[#F0F8FF] border-[#B0C4DE] shadow-2xs'
                                : 'hover:bg-[#F0F8FF]/50 border-transparent'
                            } ${!isUnlocked && !isAdmin ? 'opacity-85' : ''}`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 border"
                                style={{
                                  backgroundColor: conf.palette.softBadgeBg,
                                  borderColor: conf.palette.softBorder,
                                  color: conf.palette.contrastText,
                                }}
                              >
                                {conf.symbolGlyph}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-xs text-[#2D3748]">
                                    {conf.name}
                                  </span>
                                  {isCurrent && (
                                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#708090] text-[#FFFFF0]">
                                      Aktif
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-[#708090] truncate max-w-[150px]">
                                  {matchingClassroom
                                    ? matchingClassroom.name
                                    : conf.nameEn}
                                </p>
                              </div>
                            </div>

                            <div>
                              {isUnlocked || isAdmin ? (
                                <Check
                                  className={`w-4 h-4 ${
                                    isCurrent ? 'text-[#708090]' : 'text-emerald-500'
                                  }`}
                                />
                              ) : (
                                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                                  <SolarLock className="w-3 h-3 text-amber-600" />
                                  <span>+ Buka</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {!isTeacher && !isAdmin && (
                      <div className="pt-1.5 border-t border-[#D3D3D3]/60 px-1">
                        <Link
                          to="/student/settings"
                          onClick={() => setShowSubjectDropdown(false)}
                          className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold text-[#708090] hover:text-[#2D3748] bg-[#F0F8FF] hover:bg-[#B0C4DE]/30 rounded-lg transition-colors border border-[#B0C4DE]/50"
                        >
                          <Plus className="w-3 h-3" />
                          <span>+ Gabung Kelas Subjek Baru</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Auth Section: Logged In or Guest */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="h-9 flex items-center gap-2 px-2.5 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] border border-[#D3D3D3] transition-colors cursor-pointer active:scale-95"
                >
                  <div className="w-6 h-6 rounded-full bg-[#708090] text-[#FFFFF0] flex items-center justify-center text-[10px] font-bold shadow-2xs">
                    {(profile?.full_name || user.email || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-[11px] font-bold text-[#2D3748] leading-tight truncate max-w-[120px]">
                      {profile?.full_name || user.email?.split('@')[0]}
                    </span>
                    <span className="text-[9px] text-[#708090] capitalize font-medium">
                      {isAdmin ? '⚡ Admin' : isTeacher ? '👨‍🏫 Guru' : '🎓 Siswa'}
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-[#708090]" />
                </button>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#FFFFF0] border border-[#D3D3D3] rounded-xl shadow-lg p-2 text-xs z-50 animate-in fade-in space-y-1">
                    <div className="px-2 py-1.5 border-b border-[#D3D3D3]/60">
                      <div className="font-bold text-[#2D3748] truncate">
                        {profile?.full_name || 'Pengguna OSN'}
                      </div>
                      <div className="text-[10px] text-[#708090] font-mono truncate">{user.email}</div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold ${
                          isAdmin
                            ? 'bg-[#708090] text-[#FFFFF0]'
                            : 'bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60'
                        }`}>
                          {isAdmin ? '⚡ Administrator' : isTeacher ? '👨‍🏫 Guru / Pembina' : '🎓 Akun Siswa'}
                        </span>
                        {!isTeacher && !isAdmin && (
                          <UserTitleBadge xp={profile?.xp || 0} size="xs" variant="light" />
                        )}
                      </div>
                    </div>

                    {isAdmin ? (
                      <>
                        <Link
                          to="/admin/analytics"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#FFFFF0] bg-[#708090] hover:bg-[#5C6D7D] font-bold transition-colors shadow-2xs"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#FFFFF0]" />
                          <span>⚡ Command Center Admin</span>
                        </Link>
                        <Link
                          to="/admin/users"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <Users className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Manajemen Users</span>
                        </Link>
                        <Link
                          to="/admin/classrooms"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <SolarUsers className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Manajemen Kelas</span>
                        </Link>
                        <Link
                          to="/admin/materials"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <SolarBook className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Editor Materi Silabus</span>
                        </Link>
                        <Link
                          to="/admin/worksheets"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <SolarClipboard className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Pengawasan Worksheet</span>
                        </Link>
                        <Link
                          to="/admin/questions"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Kurasi Bank Soal</span>
                        </Link>
                        <Link
                          to="/admin/audit-logs"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <BarChart3 className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Audit Log Aktivitas</span>
                        </Link>
                        <div className="pt-1 mt-1 border-t border-[#D3D3D3]/60">
                          <div className="px-2 py-0.5 text-[9px] font-bold text-[#708090] uppercase tracking-wider">
                            Akses Studio Guru
                          </div>
                          <Link
                            to="/teacher"
                            onClick={() => setShowUserDropdown(false)}
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                          >
                            <SolarDiploma className="w-3.5 h-3.5 text-[#708090]" />
                            <span>Studio Guru & Pemantauan</span>
                          </Link>
                          <Link
                            to="/teacher/classes"
                            onClick={() => setShowUserDropdown(false)}
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                          >
                            <SolarUsers className="w-3.5 h-3.5 text-[#708090]" />
                            <span>Manajemen Kelas Binaan</span>
                          </Link>
                        </div>
                      </>
                    ) : isTeacher ? (
                      <>
                        <Link
                          to="/teacher/classes"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <SolarUsers className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Manajemen Kelas Binaan</span>
                        </Link>
                        <Link
                          to="/teacher"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <SolarDiploma className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Studio Guru & Pemantauan</span>
                        </Link>
                        <Link
                          to="/whiteboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <SolarPalette className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Papan Tulis (STEMBoard)</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/student/dashboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <LayoutDashboard className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Dashboard Siswa</span>
                        </Link>
                        <Link
                          to={activeWorksheet ? activeWorksheet.url : '/worksheet'}
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <SolarClipboard className="w-3.5 h-3.5 text-[#708090]" />
                            <span>{activeWorksheet ? 'Lanjutkan Worksheet' : 'Worksheet Saya'}</span>
                          </div>
                          {activeWorksheet && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60">
                              Soal #{activeWorksheet.currentQIndex + 1}
                            </span>
                          )}
                        </Link>
                        <Link
                          to="/whiteboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <SolarPalette className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Papan Tulis (STEMBoard)</span>
                        </Link>
                        <Link
                          to="/student/progress"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <BarChart3 className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Progress & Radar Siswa</span>
                        </Link>
                        <Link
                          to="/student/settings"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <Settings className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Pengaturan Akun</span>
                        </Link>
                      </>
                    )}

                    <div className="pt-1 border-t border-[#D3D3D3]/60 space-y-0.5">
                      <button
                        onClick={() => {
                          setShowUserDropdown(false);
                          window.dispatchEvent(new CustomEvent('open-bug-report-modal'));
                        }}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#708090] hover:bg-[#F0F8FF] hover:text-[#2D3748] transition-colors font-medium cursor-pointer text-xs"
                      >
                        <Bug className="w-3.5 h-3.5 text-amber-600" />
                        <span>Laporkan Bug / Kendala</span>
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors font-medium cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Keluar (Logout)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Tamu (Guest) Action Buttons: Konsisten dengan Palet Platform Axioma (#708090 & #FFFFF0) */
              <div className="flex items-center gap-2 sm:gap-2.5">
                <Link
                  to="/login"
                  className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition duration-200"
                >
                  Masuk
                </Link>

                <Link
                  to="/login?mode=register"
                  className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-[#FFFFF0] bg-[#708090] hover:bg-[#5C6D7D] border border-[#708090] rounded-lg shadow-2xs hover:shadow-xs transition duration-200 active:scale-95"
                >
                  Daftar Akun
                </Link>
              </div>
            )}

            {/* Tombol Hamburger Menu (Hanya tampil di layar HP/Tablet < md) */}
            {!isWhiteboardCanvas && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-9 w-9 flex items-center justify-center rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] transition cursor-pointer active:scale-95 border border-[#D3D3D3]"
                title={mobileMenuOpen ? 'Tutup Navigasi' : 'Buka Menu Navigasi'}
                aria-label="Menu navigasi mobile"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Sheet (Khusus layar < md) */}
      {mobileMenuOpen && !isWhiteboardCanvas && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#2D3748]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Sheet Panel */}
          <div className="fixed inset-y-0 right-0 w-[84vw] max-w-xs bg-[#FFFFF0] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-250 border-l border-[#D3D3D3]">
            {/* Sheet Header */}
            <div className="p-4 border-b border-[#D3D3D3] flex items-center justify-between bg-[#F0F8FF]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center font-bold text-sm shadow-xs border border-[#B0C4DE]/50">
                  {currentSubjectConfig.symbolGlyph}
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2D3748] font-display leading-tight">
                    Axioma Academy
                  </div>
                  <span className="text-[10px] font-semibold text-[#708090] font-mono">
                    {currentSubjectConfig.name} Mastery
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#708090] hover:text-[#2D3748] hover:bg-[#B0C4DE]/30 rounded-lg transition cursor-pointer"
                aria-label="Tutup menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* User Profile Summary (Jika sudah login) */}
            {user && (
              <div className="p-4 border-b border-[#D3D3D3] bg-[#F0F8FF]/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#708090] text-[#FFFFF0] flex items-center justify-center text-xs font-bold shadow-xs shrink-0">
                    {(profile?.full_name || user.email || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs text-[#2D3748] truncate">
                      {profile?.full_name || user.email?.split('@')[0]}
                    </div>
                    <div className="text-[10px] text-[#708090] truncate font-mono">{user.email}</div>
                    <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold mt-0.5 ${
                      isAdmin
                        ? 'bg-[#708090] text-[#FFFFF0]'
                        : isTeacher
                        ? '👨‍🏫 Guru / Pembina'
                        : '🎓 Siswa'
                    }`}>
                      {isAdmin ? '⚡ Admin' : isTeacher ? '👨‍🏫 Guru / Pembina' : '🎓 Siswa'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Subject Switcher */}
            {user && (
              <div className="p-3 border-b border-[#D3D3D3] bg-[#FFFFF0]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#708090] mb-2 flex items-center justify-between">
                  <span>Mata Pelajaran (Subject)</span>
                  <span className="font-mono text-[9px]">{unlockedSubjects.length}/4 Aktif</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['kimia', 'fisika', 'matematika', 'biologi'] as SubjectId[]).map((subId) => {
                    const conf = SUBJECT_CONFIGS[subId];
                    const isUnlocked = isSubjectUnlocked(subId);
                    const isCurrent = currentSubject === subId;
                    return (
                      <button
                        key={subId}
                        type="button"
                        onClick={() => {
                          setCurrentSubject(subId);
                          setMobileMenuOpen(false);
                          const segments = location.pathname.split('/').filter(Boolean);
                          if (segments.length > 0 && isSubjectId(segments[0])) {
                            segments[0] = subId;
                            navigate(`/${segments.join('/')}`);
                          } else if (location.pathname === '/practice' || location.pathname === '/materi') {
                            navigate(`/${subId}${location.pathname}`);
                          }
                        }}
                        className={`flex items-center gap-1.5 p-2 rounded-xl border text-left transition-all ${
                          isCurrent
                            ? 'bg-[#B0C4DE]/30 border-[#708090] text-[#2D3748] font-bold shadow-2xs'
                            : 'bg-[#FFFFF0] border-[#D3D3D3] text-[#708090]'
                        } ${!isUnlocked && !isAdmin ? 'opacity-70' : ''}`}
                      >
                        <span className="text-sm">{conf.symbolGlyph}</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] truncate leading-tight font-bold">{conf.name}</div>
                          <div className="text-[9px] opacity-75 leading-tight">
                            {isUnlocked || isAdmin ? 'Terbuka' : 'Terkunci 🔒'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Nav Links Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1 text-xs font-semibold text-[#708090]">
              {user ? (
                <>
                  {/* Quick Direct Link: Dashboard */}
                  <Link
                    to={isTeacher ? '/teacher' : '/student/dashboard'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive(isTeacher ? '/teacher' : '/student/dashboard') && !isActive('/teacher/classes')
                        ? 'bg-[#B0C4DE]/30 text-[#2D3748] font-bold border border-[#B0C4DE]/60'
                        : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4 text-[#708090]" />
                    <span>Dashboard {isTeacher ? 'Guru' : 'Siswa'}</span>
                  </Link>

                  {/* Accordion 1: Syllabus */}
                  <div className="rounded-xl border border-[#B0C4DE]/60 overflow-hidden bg-[#FFFFF0]">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileAccordion(prev => ({ ...prev, syllabus: !prev.syllabus }))
                      }
                      className="w-full flex items-center justify-between p-3 bg-[#F0F8FF]/80 hover:bg-[#F0F8FF] transition text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 text-[#2D3748] font-bold">
                        <SolarBook className="w-4 h-4 text-[#708090]" />
                        <span>Syllabus</span>
                      </div>
                      <ChevronDown
                        size={15}
                        className={`text-[#708090] transition-transform duration-200 ${
                          mobileAccordion.syllabus ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileAccordion.syllabus && (
                      <div className="p-2 space-y-1 bg-[#FFFFF0] border-t border-[#B0C4DE]/40">
                        <Link
                          to="/materi?db=osn"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                        >
                          <SolarTrophy className="w-3.5 h-3.5 text-amber-600" />
                          <span className="text-xs text-[#2D3748] font-medium">Materi OSN Kimia</span>
                        </Link>

                        <Link
                          to="/materi?db=sma"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                        >
                          <SolarBook className="w-3.5 h-3.5 text-sky-600" />
                          <span className="text-xs text-[#2D3748] font-medium">Materi Dasar SMA</span>
                        </Link>

                        <Link
                          to="/materi?db=igcse"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                        >
                          <SolarLock className="w-3.5 h-3.5 text-purple-600" />
                          <span className="text-xs text-[#2D3748] font-medium">Cambridge IGCSE</span>
                        </Link>

                        <Link
                          to="/materi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 text-[11px] font-bold text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition"
                        >
                          <span>Katalog Semua Silabus</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: Practice & Tests */}
                  <div className="rounded-xl border border-[#B0C4DE]/60 overflow-hidden bg-[#FFFFF0]">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileAccordion(prev => ({ ...prev, practice: !prev.practice }))
                      }
                      className="w-full flex items-center justify-between p-3 bg-[#F0F8FF]/80 hover:bg-[#F0F8FF] transition text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 text-[#2D3748] font-bold">
                        <SolarStars className="w-4 h-4 text-[#708090]" />
                        <span>Practice & Tests</span>
                        {activeWorksheet && (
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        )}
                      </div>
                      <ChevronDown
                        size={15}
                        className={`text-[#708090] transition-transform duration-200 ${
                          mobileAccordion.practice ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileAccordion.practice && (
                      <div className="p-2 space-y-1 bg-[#FFFFF0] border-t border-[#B0C4DE]/40">
                        {/* If active worksheet */}
                        {activeWorksheet && (
                          <Link
                            to={activeWorksheet.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold"
                          >
                            <span className="truncate">Lanjut #{activeWorksheet.currentQIndex + 1}: {activeWorksheet.title}</span>
                            <ArrowRight size={12} className="shrink-0" />
                          </Link>
                        )}

                        <Link
                          to={isTeacher || isAdmin ? '/practice?mode=table' : '/practice'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                        >
                          <SolarStars className="w-3.5 h-3.5 text-amber-600" />
                          <span className="text-xs text-[#2D3748] font-medium">Bank Soal Terstandar</span>
                        </Link>

                        <Link
                          to={activeWorksheet ? activeWorksheet.url : '/worksheet'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                        >
                          <div className="flex items-center gap-2">
                            <SolarClipboard className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-xs text-[#2D3748] font-medium">Worksheet Siswa</span>
                          </div>
                          {hasNewGradeNotification && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 animate-pulse">
                              Nilai Baru!
                            </span>
                          )}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Accordion 3: Studio */}
                  <div className="rounded-xl border border-[#B0C4DE]/60 overflow-hidden bg-[#FFFFF0]">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileAccordion(prev => ({ ...prev, studio: !prev.studio }))
                      }
                      className="w-full flex items-center justify-between p-3 bg-[#F0F8FF]/80 hover:bg-[#F0F8FF] transition text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 text-[#2D3748] font-bold">
                        <SolarPalette className="w-4 h-4 text-[#708090]" />
                        <span>Studio</span>
                      </div>
                      <ChevronDown
                        size={15}
                        className={`text-[#708090] transition-transform duration-200 ${
                          mobileAccordion.studio ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileAccordion.studio && (
                      <div className="p-2 space-y-1 bg-[#FFFFF0] border-t border-[#B0C4DE]/40">
                        <Link
                          to="/whiteboard"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                        >
                          <SolarPalette className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-xs text-[#2D3748] font-medium">STEMBoard Whiteboard</span>
                        </Link>

                        {(isTeacher || isAdmin) && (
                          <>
                            <Link
                              to="/teacher/classes"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                            >
                              <SolarUsers className="w-3.5 h-3.5 text-teal-600" />
                              <span className="text-xs text-[#2D3748] font-medium">Kelas Binaan</span>
                            </Link>

                            <Link
                              to="/teacher"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left"
                            >
                              <SolarDiploma className="w-3.5 h-3.5 text-blue-600" />
                              <span className="text-xs text-[#2D3748] font-medium">Studio Guru</span>
                            </Link>
                          </>
                        )}

                        {isAdmin && (
                          <Link
                            to="/admin/analytics"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F8FF] transition text-left border-t border-[#B0C4DE]/40 mt-1 pt-2"
                          >
                            <SolarShield className="w-3.5 h-3.5 text-rose-600" />
                            <span className="text-xs text-[#2D3748] font-medium">Portal Admin</span>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Siswa: Progress Report */}
                  {!isTeacher && (
                    <Link
                      to="/student/progress"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                        isActive('/student/progress') || isActive('/profile')
                          ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                          : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                      }`}
                    >
                      <BarChart3 className="w-4 h-4 text-[#708090]" />
                      <span>Progress & Radar Siswa</span>
                    </Link>
                  )}

                  {!isTeacher && (
                    <Link
                      to="/student/settings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#708090] hover:bg-[#F0F8FF] transition text-xs"
                    >
                      <Settings className="w-4 h-4 text-[#708090]" />
                      <span>Pengaturan Akun</span>
                    </Link>
                  )}
                </>
              ) : (
                /* Tamu (Guest) Action in Drawer */
                <div className="space-y-2.5 py-2">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60"
                  >
                    <Compass className="w-4 h-4 text-[#708090]" />
                    <span>Beranda Utama</span>
                  </Link>

                  <div className="p-3.5 bg-[#FFFFF0] rounded-2xl border border-[#B0C4DE]/60 space-y-2.5 text-[#2D3748]">
                    <p className="text-[11px] leading-relaxed text-[#708090]">
                      Silakan masuk atau daftar akun untuk mulai mengakses materi dan bank soal.
                    </p>
                    <Link
                      to="/login?mode=register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-semibold rounded-xl shadow-xs transition active:scale-95 text-xs border border-[#708090]"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Daftar Akun</span>
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] hover:text-[#2D3748] font-semibold rounded-xl border border-[#B0C4DE] transition active:scale-95 text-xs"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Masuk ke Portal</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Laporkan Kendala / Bug in Drawer */}
              <div className="pt-2 border-t border-[#D3D3D3]/60">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-bug-report-modal'));
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-amber-800 hover:bg-amber-50 rounded-xl transition text-[11px] font-semibold cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Bug className="w-4 h-4 text-amber-600" />
                    <span>Laporkan Kendala / Bug</span>
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded">
                    Bantuan
                  </span>
                </button>
              </div>
            </div>

            {/* Sheet Footer Logout */}
            {user && (
              <div className="p-3 border-t border-[#D3D3D3] bg-[#F0F8FF]/60">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-rose-600 hover:bg-rose-50 rounded-xl transition text-xs font-bold border border-rose-200 cursor-pointer active:scale-95"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Keluar (Logout)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
});
