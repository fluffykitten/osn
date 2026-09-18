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
} from 'lucide-react';
import { getLocalGamificationState, type UserGamificationState } from '../../lib/gamification';
import { useAuth } from '../../contexts/AuthContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, profile, isTeacher, isAdmin, logout } = useAuth();
  const [gamification, setGamification] = useState<UserGamificationState>(getLocalGamificationState);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

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

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5 group">
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

            {/* Main Navigation Links: HANYA TAMPIL JIKA SUDAH LOGIN */}
            {user && (
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

                {/* Menu Khusus Guru & Admin */}
                {isTeacher && (
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Tombol Tentang Creator (Selalu terlihat baik tamu maupun login) */}
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 rounded-lg transition-all shadow-2xs"
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
                  className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">
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

                    {isTeacher && (
                      <Link
                        to="/roadmap"
                        onClick={() => setShowUserDropdown(false)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <Compass className="w-3.5 h-3.5 text-sky-600" />
                        <span>Peta Silabus 10 Topik</span>
                      </Link>
                    )}

                    {isTeacher ? (
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
          </div>
        </div>
      </header>
    </>
  );
};
