import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  BookOpen,
  Layers,
  Users,
  School,
  LogIn,
  LogOut,
  ChevronDown,
  ExternalLink,
  Code2,
  GraduationCap,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Settings,
  PenTool,
  ArrowLeft,
  Grid,
  Share2,
  Menu,
  X,
} from 'lucide-react';
import { getLocalGamificationState, type UserGamificationState } from '../../lib/gamification';
import { useAuth } from '../../contexts/AuthContext';
import { useWhiteboardHeader } from '../../contexts/WhiteboardHeaderContext';
import {
  studentWorksheetService,
  type ActiveWorksheetSession,
} from '../../services/studentWorksheetService';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, profile, isTeacher, isAdmin, logout } = useAuth();
  const { headerState } = useWhiteboardHeader();
  const [gamification, setGamification] = useState<UserGamificationState>(getLocalGamificationState);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Pantau sesi worksheet yang sedang aktif dikerjakan siswa
  const [activeWorksheet, setActiveWorksheet] = useState<ActiveWorksheetSession | null>(() =>
    studentWorksheetService.getActiveSession(user?.id)
  );

  useEffect(() => {
    const updateActive = () => {
      setActiveWorksheet(studentWorksheetService.getActiveSession(user?.id));
    };

    window.addEventListener('osn_active_worksheet_changed', updateActive);
    window.addEventListener('storage', updateActive);
    updateActive();

    return () => {
      window.removeEventListener('osn_active_worksheet_changed', updateActive);
      window.removeEventListener('storage', updateActive);
    };
  }, [user?.id, location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowUserDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleStorage = () => setGamification(getLocalGamificationState());
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
        className="sticky top-0 z-40 backdrop-blur-md border-b shadow-xs transition-colors duration-200"
        style={{
          backgroundColor: 'var(--theme-surface)',
          borderColor: 'var(--theme-border)',
        }}
      >
        <div className={`${isWhiteboardCanvas ? 'w-full px-4 sm:px-6' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} h-16 flex items-center justify-between gap-4`}>
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform border border-[#B0C4DE]/50">
                ⚛
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base tracking-tight text-[#2D3748] font-display">
                    OSN Kimia
                  </span>
                  <span className="text-xs font-semibold px-1.5 py-0.2 bg-[#B0C4DE]/30 text-[#708090] rounded-md font-mono border border-[#B0C4DE]/60">
                    Mastery
                  </span>
                </div>
                <span className="text-[10px] text-[#708090]/80 block -mt-0.5 tracking-wider font-medium">
                  PUSPRESNAS • IChO STANDARD
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

            {/* Main Navigation Links: HANYA TAMPIL JIKA SUDAH LOGIN & BUKAN MODE WHITEBOARD CANVAS */}
            {!isWhiteboardCanvas && user && (
              <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-[#708090]">
                {/* Siswa: Dashboard */}
                {!isTeacher && (
                  <Link
                    to="/student/dashboard"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/student/dashboard')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </Link>
                )}

                {/* Peta Silabus (Hanya Guru & Admin) */}
                {isTeacher && (
                  <Link
                    to="/roadmap"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/roadmap')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Silabus</span>
                  </Link>
                )}

                {/* Materi */}
                <Link
                  to="/materi"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive('/materi')
                      ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                      : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Materi</span>
                </Link>

                {/* Bank Soal Siswa (Sebelah kanan Materi) */}
                {!isTeacher && (
                  <Link
                    to="/practice"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/practice')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                        : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#708090]" />
                    <span>Bank Soal</span>
                  </Link>
                )}

                {/* Worksheet Siswa / Lanjutkan Sesi Aktif */}
                <Link
                  to={activeWorksheet ? activeWorksheet.url : '/worksheet'}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors relative ${
                    isActive('/worksheet')
                      ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                      : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                  }`}
                  title={
                    activeWorksheet
                      ? `Lanjutkan: ${activeWorksheet.title} (Soal ${activeWorksheet.currentQIndex + 1})`
                      : 'Worksheet Siswa'
                  }
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Worksheet</span>
                  {activeWorksheet && !location.pathname.startsWith('/worksheet/') && (
                    <span className="flex h-2 w-2 relative -mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#708090] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#708090]" />
                    </span>
                  )}
                </Link>

                {/* STEMBoard / Papan Tulis */}
                <Link
                  to="/whiteboard"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive('/whiteboard')
                      ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                      : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5 text-[#708090]" />
                  <span>Papan Tulis</span>
                </Link>

                {/* Progress Report Siswa */}
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

                {/* Menu Khusus Admin */}
                {isAdmin && (
                  <Link
                    to="/admin/analytics"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#708090] text-[#FFFFF0] hover:bg-[#5C6D7D] font-bold transition shadow-2xs border border-[#708090]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#FFFFF0]" />
                    <span>⚡ Portal Admin</span>
                  </Link>
                )}

                {/* Menu Khusus Guru */}
                {!isAdmin && isTeacher && (
                  <>
                    <Link
                      to="/practice"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                        isActive('/practice')
                          ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                          : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-[#708090]" />
                      <span>Bank Soal</span>
                    </Link>

                    <Link
                      to="/teacher/classes"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                        isActive('/teacher/classes')
                          ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                          : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                      }`}
                    >
                      <School className="w-3.5 h-3.5 text-[#708090]" />
                      <span>Kelas Binaan</span>
                    </Link>

                    <Link
                      to="/teacher"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                        isActive('/teacher') && !isActive('/teacher/classes')
                          ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 shadow-2xs'
                          : 'hover:bg-[#F0F8FF] hover:text-[#2D3748]'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5 text-[#708090]" />
                      <span>Studio Guru</span>
                    </Link>
                  </>
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

            {/* Tombol Tentang Creator (Selalu terlihat baik tamu maupun login) */}
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 inline-flex items-center gap-1.5 px-3 text-xs font-semibold text-[#708090] hover:text-[#2D3748] bg-[#FFFFF0] hover:bg-[#F0F8FF] border border-[#D3D3D3] rounded-xl transition-all shadow-2xs active:scale-95"
              title="Kunjungi profil GitHub Creator (fluffykitten)"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten creator logo"
                className="w-4 h-4 rounded-full object-contain shadow-2xs border border-[#D3D3D3]"
              />
              <span className="hidden md:inline">Tentang Creator</span>
              <ExternalLink className="w-3 h-3 text-[#708090]" />
            </a>

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
                      <div className="mt-1">
                        <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold ${
                          isAdmin
                            ? 'bg-[#708090] text-[#FFFFF0]'
                            : 'bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60'
                        }`}>
                          {isAdmin ? '⚡ Administrator' : isTeacher ? '👨‍🏫 Guru / Pembina' : '🎓 Akun Siswa'}
                        </span>
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
                          <School className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Manajemen Kelas</span>
                        </Link>
                        <Link
                          to="/admin/materials"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Editor Materi Silabus</span>
                        </Link>
                        <Link
                          to="/admin/worksheets"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5 text-[#708090]" />
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
                      </>
                    ) : isTeacher ? (
                      <>
                        <Link
                          to="/teacher/classes"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <School className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Manajemen Kelas Binaan</span>
                        </Link>
                        <Link
                          to="/teacher"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <Users className="w-3.5 h-3.5 text-[#708090]" />
                          <span>Studio Guru & Pemantauan</span>
                        </Link>
                        <Link
                          to="/whiteboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#2D3748] hover:bg-[#F0F8FF] hover:text-[#708090] transition-colors"
                        >
                          <PenTool className="w-3.5 h-3.5 text-[#708090]" />
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
                            <Layers className="w-3.5 h-3.5 text-[#708090]" />
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
                          <PenTool className="w-3.5 h-3.5 text-[#708090]" />
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

                    <div className="pt-1 border-t border-[#D3D3D3]/60">
                      <button
                        onClick={async () => {
                          setShowUserDropdown(false);
                          await logout();
                        }}
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
              /* Tamu (Guest) Action Buttons: Tanpa Role Switcher, Hanya Akses Pendaftaran Siswa & Masuk */
              <div className="flex items-center gap-2">
                <Link
                  to="/login?mode=register"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#B0C4DE] text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#708090]" />
                  <span>Daftar Siswa</span>
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95 border border-[#708090]"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#FFFFF0]" />
                  <span>Masuk</span>
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
                  ⚛
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#2D3748] font-display leading-tight">
                    OSN Kimia
                  </div>
                  <span className="text-[10px] font-semibold text-[#708090] font-mono">
                    Mastery Mobile
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
                        : 'bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60'
                    }`}>
                      {isAdmin ? '⚡ Admin' : isTeacher ? '👨‍🏫 Guru / Pembina' : '🎓 Siswa'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Nav Links Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1 text-xs font-semibold text-[#708090]">
              {user ? (
                <>
                  {/* Siswa: Dashboard */}
                  {!isTeacher && (
                    <Link
                      to="/student/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                        isActive('/student/dashboard')
                          ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                          : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                      }`}
                    >
                      <LayoutDashboard className="w-4 h-4 text-[#708090]" />
                      <span>Dashboard Siswa</span>
                    </Link>
                  )}

                  {/* Silabus 10 Topik */}
                  <Link
                    to="/roadmap"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/roadmap')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                        : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                    }`}
                  >
                    <Compass className="w-4 h-4 text-[#708090]" />
                    <span>Silabus</span>
                  </Link>

                  {/* Database Materi */}
                  <Link
                    to="/materi"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/materi')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                        : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-[#708090]" />
                    <span>Database Materi</span>
                  </Link>

                  {/* Siswa: Bank Soal (Sebelah kanan/setelah Materi) */}
                  {!isTeacher && (
                    <Link
                      to="/practice"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                        isActive('/practice')
                          ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                          : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-[#708090]" />
                      <span>Bank Soal Terstandar</span>
                    </Link>
                  )}

                  {/* Worksheet Siswa / Sesi Aktif */}
                  <Link
                    to={activeWorksheet ? activeWorksheet.url : '/worksheet'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition ${
                      isActive('/worksheet')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                        : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#708090]" />
                      <span>Worksheet Siswa</span>
                    </div>
                    {activeWorksheet && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60 animate-pulse">
                        Lanjut Soal #{activeWorksheet.currentQIndex + 1}
                      </span>
                    )}
                  </Link>

                  {/* Papan Tulis STEMBoard */}
                  <Link
                    to="/whiteboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/whiteboard')
                        ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                        : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                    }`}
                  >
                    <PenTool className="w-4 h-4 text-[#708090]" />
                    <span>Papan Tulis (STEMBoard)</span>
                  </Link>

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

                  {/* Fitur Khusus Admin */}
                  {isAdmin && (
                    <div className="pt-2 border-t border-[#D3D3D3] space-y-1">
                      <div className="px-3 py-1 text-[10px] font-bold text-[#708090] uppercase tracking-wider">
                        Portal Administrator
                      </div>
                      <Link
                        to="/admin/analytics"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#708090] text-[#FFFFF0] font-bold shadow-2xs"
                      >
                        <Sparkles className="w-4 h-4 text-[#FFFFF0]" />
                        <span>Command Center</span>
                      </Link>
                    </div>
                  )}

                  {/* Fitur Khusus Guru & Admin */}
                  {isTeacher && (
                    <div className="pt-2 border-t border-[#D3D3D3] space-y-1">
                      <div className="px-3 py-1 text-[10px] font-bold text-[#708090] uppercase tracking-wider">
                        Fitur Guru & Pembina
                      </div>
                      <Link
                        to="/practice"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                          isActive('/practice')
                            ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                            : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                        }`}
                      >
                        <Layers className="w-4 h-4 text-[#708090]" />
                        <span>Bank Soal Terkurasi</span>
                      </Link>
                      <Link
                        to="/teacher/classes"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                          isActive('/teacher/classes')
                            ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                            : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                        }`}
                      >
                        <School className="w-4 h-4 text-[#708090]" />
                        <span>Manajemen Kelas Binaan</span>
                      </Link>
                      <Link
                        to="/teacher"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                          isActive('/teacher') && !isActive('/teacher/classes')
                            ? 'bg-[#B0C4DE]/30 text-[#708090] font-bold border border-[#B0C4DE]/60'
                            : 'hover:bg-[#F0F8FF] text-[#2D3748]'
                        }`}
                      >
                        <Users className="w-4 h-4 text-[#708090]" />
                        <span>Studio Guru & Monitor</span>
                      </Link>
                    </div>
                  )}

                  {!isTeacher && (
                    <Link
                      to="/student/settings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[#708090] hover:bg-[#F0F8FF] transition"
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

                  <div className="p-3 bg-[#F0F8FF] rounded-xl border border-[#D3D3D3] space-y-2 text-[#2D3748]">
                    <p className="text-[11px] leading-relaxed">
                      Silakan masuk atau daftar sebagai siswa untuk mulai mengakses 10 topik silabus, modul interaktif, dan penilaian cerdas AI.
                    </p>
                    <Link
                      to="/login?mode=register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] font-bold rounded-xl shadow-xs transition active:scale-95 text-xs border border-[#B0C4DE]"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Daftar Akun Siswa</span>
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-bold rounded-xl shadow-xs transition active:scale-95 text-xs border border-[#708090]"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Masuk ke Portal</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Creator link in drawer */}
              <div className="pt-2 border-t border-[#D3D3D3]/60">
                <a
                  href="https://github.com/fluffykitten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-xl transition text-[11px]"
                >
                  <span className="flex items-center gap-2">
                    <img
                      src="/fluffykitten-logo.png"
                      alt="creator"
                      className="w-4 h-4 rounded-full object-contain border border-[#D3D3D3]"
                    />
                    <span>Tentang Creator (fluffykitten)</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#708090]" />
                </a>
              </div>
            </div>

            {/* Sheet Footer Logout */}
            {user && (
              <div className="p-3 border-t border-[#D3D3D3] bg-[#F0F8FF]/60">
                <button
                  onClick={async () => {
                    setMobileMenuOpen(false);
                    await logout();
                  }}
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
};
