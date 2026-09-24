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

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, profile, isTeacher, isAdmin, logout } = useAuth();
  const { headerState } = useWhiteboardHeader();
  const [gamification, setGamification] = useState<UserGamificationState>(getLocalGamificationState);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className={`${isWhiteboardCanvas ? 'w-full px-4 sm:px-6' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} h-16 flex items-center justify-between gap-4`}>
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                ⚛
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base tracking-tight text-slate-900 font-display">
                    OSN Kimia
                  </span>
                  <span className="text-xs font-semibold px-1.5 py-0.2 bg-sky-100 text-sky-800 rounded-md font-mono">
                    Mastery
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block -mt-0.5 tracking-wider font-medium">
                  PUSPRESNAS • IChO STANDARD
                </span>
              </div>
            </Link>

            {/* Mode Whiteboard Canvas: Navigasi Dashboard & Katalog Whiteboard */}
            {isWhiteboardCanvas && (
              <div className="flex items-center gap-2">
                <div className="h-5 w-[1px] bg-slate-200 mx-1 hidden sm:block" />

                <Link
                  to={isTeacher ? '/teacher' : '/student/dashboard'}
                  className="h-9 inline-flex items-center gap-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold text-xs transition shadow-2xs border border-slate-200/80 active:scale-95 cursor-pointer"
                  title="Kembali ke Dashboard Utama"
                >
                  <ArrowLeft size={14} className="text-slate-500" />
                  <span>Dashboard</span>
                </Link>

                <Link
                  to="/whiteboard"
                  className="h-9 inline-flex items-center gap-1.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100/80 text-blue-700 font-semibold text-xs transition shadow-2xs border border-blue-200/80 active:scale-95 cursor-pointer"
                  title="Buka Daftar & Katalog Papan Tulis"
                >
                  <Grid size={14} className="text-blue-600" />
                  <span className="hidden sm:inline">Katalog Whiteboard</span>
                  <span className="sm:hidden">Katalog</span>
                </Link>
              </div>
            )}

            {/* Main Navigation Links: HANYA TAMPIL JIKA SUDAH LOGIN & BUKAN MODE WHITEBOARD CANVAS */}
            {!isWhiteboardCanvas && user && (
              <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600">
                {/* Siswa: Dashboard */}
                {!isTeacher && (
                  <Link
                    to="/student/dashboard"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/student/dashboard')
                        ? 'bg-sky-50 text-sky-800 font-semibold'
                        : 'hover:bg-slate-50 hover:text-slate-900'
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
                        ? 'bg-sky-50 text-sky-800 font-semibold'
                        : 'hover:bg-slate-50 hover:text-slate-900'
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
                      ? 'bg-sky-50 text-sky-800 font-semibold'
                      : 'hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Materi</span>
                </Link>

                {/* Worksheet Siswa / List */}
                <Link
                  to="/worksheet"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive('/worksheet')
                      ? 'bg-sky-50 text-sky-800 font-semibold'
                      : 'hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Worksheet</span>
                </Link>

                {/* STEMBoard / Papan Tulis */}
                <Link
                  to="/whiteboard"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive('/whiteboard')
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5 text-blue-600" />
                  <span>Papan Tulis</span>
                </Link>

                {/* Bank Soal Siswa */}
                {!isTeacher && (
                  <Link
                    to="/practice"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/practice')
                        ? 'bg-emerald-50 text-emerald-800 font-semibold'
                        : 'hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Bank Soal</span>
                  </Link>
                )}

                {/* Progress Report Siswa */}
                {!isTeacher && (
                  <Link
                    to="/student/progress"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                      isActive('/student/progress') || isActive('/profile')
                        ? 'bg-sky-50 text-sky-800 font-semibold'
                        : 'hover:bg-slate-50 hover:text-slate-900'
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
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 font-bold hover:bg-amber-200 transition shadow-2xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
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
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Bank Soal</span>
                    </Link>

                    <Link
                      to="/teacher/classes"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                        isActive('/teacher/classes')
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <School className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Kelas Binaan</span>
                    </Link>

                    <Link
                      to="/teacher"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                        isActive('/teacher') && !isActive('/teacher/classes')
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
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
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20 font-mono font-bold tracking-wide'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/90'
                  }`}
                  title="Pengaturan Sesi Bersama Guru & Siswa (Kode Ruangan)"
                >
                  <Share2 size={13} className={headerState?.roomCode ? 'text-white' : 'text-blue-600'} />
                  <span>{headerState?.roomCode ? `Kode: ${headerState.roomCode}` : 'Sesi Bersama'}</span>
                </button>

                {headerState?.roomCode && (
                  headerState.isHost ? (
                    <button
                      onClick={headerState.onToggleSessionMode}
                      className={`h-9 px-3 rounded-xl text-xs font-semibold transition flex items-center gap-2 border shadow-2xs cursor-pointer active:scale-95 ${
                        headerState.sessionMode === 'collaborative'
                          ? 'bg-emerald-50 hover:bg-emerald-100/80 border-emerald-300 text-emerald-800'
                          : 'bg-amber-50 hover:bg-amber-100/80 border-amber-300 text-amber-800'
                      }`}
                      title="Klik untuk ubah mode izin siswa (Kolaboratif / Presentasi)"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-emerald-400' : 'bg-amber-400'
                        }`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-emerald-600' : 'bg-amber-600'
                        }`} />
                      </span>
                      <span>{headerState.sessionMode === 'collaborative' ? 'Bisa Gambar ✏️' : 'Menyimak 🔒'}</span>
                    </button>
                  ) : (
                    <div
                      className={`h-9 px-3 rounded-xl text-xs font-semibold flex items-center gap-2 border shadow-2xs ${
                        headerState.sessionMode === 'collaborative'
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                          : 'bg-amber-50 border-amber-300 text-amber-800'
                      }`}
                      title={headerState.sessionMode === 'collaborative' ? 'Mode Kolaboratif: Anda dapat mencoret di papan tulis' : 'Mode Menyimak: Hanya pembuat sesi yang dapat mencoret'}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-emerald-400' : 'bg-amber-400'
                        }`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          headerState.sessionMode === 'collaborative' ? 'bg-emerald-600' : 'bg-amber-600'
                        }`} />
                      </span>
                      <span>{headerState.sessionMode === 'collaborative' ? 'Bisa Gambar ✏️' : 'Menyimak 🔒'}</span>
                    </div>
                  )
                )}

                <div className="h-5 w-[1px] bg-slate-200 mx-0.5 hidden sm:block" />
              </div>
            )}

            {/* Tombol Tentang Creator (Selalu terlihat baik tamu maupun login) */}
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 inline-flex items-center gap-1.5 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200/80 rounded-xl transition-all shadow-2xs active:scale-95"
              title="Kunjungi profil GitHub Creator (fluffykitten)"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten creator logo"
                className="w-4 h-4 rounded-full object-contain shadow-2xs border border-white/80"
              />
              <span className="hidden md:inline">Tentang Creator</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Auth Section: Logged In or Guest */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="h-9 flex items-center gap-2 px-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer active:scale-95"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-2xs">
                    {(profile?.full_name || user.email || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-[11px] font-bold text-slate-800 leading-tight truncate max-w-[120px]">
                      {profile?.full_name || user.email?.split('@')[0]}
                    </span>
                    <span className="text-[9px] text-slate-500 capitalize">
                      {isAdmin ? '⚡ Admin' : isTeacher ? '👨‍🏫 Guru' : '🎓 Siswa'}
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg p-2 text-xs z-50 animate-in fade-in space-y-1">
                    <div className="px-2 py-1.5 border-b border-slate-100">
                      <div className="font-bold text-slate-900 truncate">
                        {profile?.full_name || 'Pengguna OSN'}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono truncate">{user.email}</div>
                      <div className="mt-1">
                        <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold ${
                          isAdmin
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : isTeacher
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-emerald-100 text-emerald-800'
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
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-amber-900 bg-amber-50 hover:bg-amber-100 font-bold transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span>⚡ Command Center Admin</span>
                        </Link>
                        <Link
                          to="/admin/users"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Users className="w-3.5 h-3.5 text-slate-600" />
                          <span>Manajemen Users</span>
                        </Link>
                        <Link
                          to="/admin/classrooms"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <School className="w-3.5 h-3.5 text-slate-600" />
                          <span>Manajemen Kelas</span>
                        </Link>
                        <Link
                          to="/admin/materials"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                          <span>Editor Materi Silabus</span>
                        </Link>
                        <Link
                          to="/admin/worksheets"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5 text-slate-600" />
                          <span>Pengawasan Worksheet</span>
                        </Link>
                        <Link
                          to="/admin/questions"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5 text-slate-600" />
                          <span>Kurasi Bank Soal</span>
                        </Link>
                        <Link
                          to="/admin/audit-logs"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <BarChart3 className="w-3.5 h-3.5 text-slate-600" />
                          <span>Audit Log Aktivitas</span>
                        </Link>
                      </>
                    ) : isTeacher ? (
                      <>
                        <Link
                          to="/teacher/classes"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        >
                          <School className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Manajemen Kelas Binaan</span>
                        </Link>
                        <Link
                          to="/teacher"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        >
                          <Users className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Studio Guru & Pemantauan</span>
                        </Link>
                        <Link
                          to="/whiteboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          <PenTool className="w-3.5 h-3.5 text-blue-600" />
                          <span>Papan Tulis (STEMBoard)</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/student/dashboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          <LayoutDashboard className="w-3.5 h-3.5 text-sky-600" />
                          <span>Dashboard Siswa</span>
                        </Link>
                        <Link
                          to="/worksheet"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Worksheet Saya</span>
                        </Link>
                        <Link
                          to="/whiteboard"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          <PenTool className="w-3.5 h-3.5 text-blue-600" />
                          <span>Papan Tulis (STEMBoard)</span>
                        </Link>
                        <Link
                          to="/student/progress"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          <BarChart3 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Progress & Radar Siswa</span>
                        </Link>
                        <Link
                          to="/student/settings"
                          onClick={() => setShowUserDropdown(false)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Settings className="w-3.5 h-3.5 text-slate-600" />
                          <span>Pengaturan Akun</span>
                        </Link>
                      </>
                    )}

                    <div className="pt-1 border-t border-slate-100">
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
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Daftar Siswa</span>
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Masuk</span>
                </Link>
              </div>
            )}

            {/* Tombol Hamburger Menu (Hanya tampil di layar HP/Tablet < md) */}
            {!isWhiteboardCanvas && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-9 w-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition cursor-pointer active:scale-95 border border-slate-200/80"
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
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Sheet Panel */}
          <div className="fixed inset-y-0 right-0 w-[84vw] max-w-xs bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-250 border-l border-slate-200">
            {/* Sheet Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  ⚛
                </div>
                <div>
                  <div className="font-extrabold text-sm text-slate-900 font-display leading-tight">
                    OSN Kimia
                  </div>
                  <span className="text-[10px] font-semibold text-sky-700 font-mono">
                    Mastery Mobile
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition cursor-pointer"
                aria-label="Tutup menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* User Profile Summary (Jika sudah login) */}
            {user && (
              <div className="p-4 border-b border-slate-100 bg-sky-50/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-xs shrink-0">
                    {(profile?.full_name || user.email || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs text-slate-900 truncate">
                      {profile?.full_name || user.email?.split('@')[0]}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate font-mono">{user.email}</div>
                    <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold mt-0.5 ${
                      isAdmin
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : isTeacher
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {isAdmin ? '⚡ Admin' : isTeacher ? '👨‍🏫 Guru / Pembina' : '🎓 Siswa'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Nav Links Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1 text-xs font-semibold text-slate-700">
              {user ? (
                <>
                  {/* Siswa: Dashboard */}
                  {!isTeacher && (
                    <Link
                      to="/student/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                        isActive('/student/dashboard')
                          ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <LayoutDashboard className="w-4 h-4 text-sky-600" />
                      <span>Dashboard Siswa</span>
                    </Link>
                  )}

                  {/* Silabus 10 Topik */}
                  <Link
                    to="/roadmap"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/roadmap')
                        ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Compass className="w-4 h-4 text-sky-600" />
                    <span>Peta Silabus 10 Topik</span>
                  </Link>

                  {/* Database Materi */}
                  <Link
                    to="/materi"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/materi')
                        ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-sky-600" />
                    <span>Database Materi</span>
                  </Link>

                  {/* Worksheet Siswa */}
                  <Link
                    to="/worksheet"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/worksheet')
                        ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>Worksheet Siswa</span>
                  </Link>

                  {/* Papan Tulis STEMBoard */}
                  <Link
                    to="/whiteboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                      isActive('/whiteboard')
                        ? 'bg-blue-50 text-blue-800 font-bold border border-blue-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <PenTool className="w-4 h-4 text-blue-600" />
                    <span>Papan Tulis (STEMBoard)</span>
                  </Link>

                  {/* Siswa: Bank Soal */}
                  {!isTeacher && (
                    <Link
                      to="/practice"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                        isActive('/practice')
                          ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Bank Soal Terstandar</span>
                    </Link>
                  )}

                  {/* Siswa: Progress Report */}
                  {!isTeacher && (
                    <Link
                      to="/student/progress"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                        isActive('/student/progress') || isActive('/profile')
                          ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <BarChart3 className="w-4 h-4 text-sky-600" />
                      <span>Progress & Radar Siswa</span>
                    </Link>
                  )}

                  {/* Fitur Khusus Guru & Admin */}
                  {isTeacher && (
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <div className="px-3 py-1 text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                        Fitur Guru & Pembina
                      </div>
                      <Link
                        to="/practice"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                          isActive('/practice')
                            ? 'bg-indigo-50 text-indigo-800 font-bold border border-indigo-200'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <Layers className="w-4 h-4 text-indigo-600" />
                        <span>Bank Soal Terkurasi</span>
                      </Link>
                      <Link
                        to="/teacher/classes"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                          isActive('/teacher/classes')
                            ? 'bg-indigo-50 text-indigo-800 font-bold border border-indigo-200'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <School className="w-4 h-4 text-indigo-600" />
                        <span>Manajemen Kelas Binaan</span>
                      </Link>
                      <Link
                        to="/teacher"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition ${
                          isActive('/teacher') && !isActive('/teacher/classes')
                            ? 'bg-indigo-50 text-indigo-800 font-bold border border-indigo-200'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <Users className="w-4 h-4 text-indigo-600" />
                        <span>Studio Guru & Monitor</span>
                      </Link>
                    </div>
                  )}

                  {!isTeacher && (
                    <Link
                      to="/student/settings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition"
                    >
                      <Settings className="w-4 h-4 text-slate-500" />
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
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-sky-50 text-sky-800 font-bold border border-sky-200"
                  >
                    <Compass className="w-4 h-4 text-sky-600" />
                    <span>Beranda Utama</span>
                  </Link>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 text-slate-600">
                    <p className="text-[11px] leading-relaxed">
                      Silakan masuk atau daftar sebagai siswa untuk mulai mengakses 10 topik silabus, modul interaktif, dan penilaian cerdas AI.
                    </p>
                    <Link
                      to="/login?mode=register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition active:scale-95 text-xs"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Daftar Akun Siswa</span>
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-bold rounded-xl shadow-xs transition active:scale-95 text-xs"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Masuk ke Portal</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Creator link in drawer */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://github.com/fluffykitten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition text-[11px]"
                >
                  <span className="flex items-center gap-2">
                    <img
                      src="/fluffykitten-logo.png"
                      alt="creator"
                      className="w-4 h-4 rounded-full object-contain border border-slate-200"
                    />
                    <span>Tentang Creator (fluffykitten)</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Sheet Footer Logout */}
            {user && (
              <div className="p-3 border-t border-slate-100 bg-slate-50/60">
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
