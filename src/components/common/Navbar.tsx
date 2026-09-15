import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Award, Table, Compass, BookOpen, Layers, Users, Sparkles, KeyRound } from 'lucide-react';
import { getLocalGamificationState, calculateLevelProgress, type UserGamificationState } from '../../lib/gamification';
import { PeriodicTableDrawer } from './PeriodicTableDrawer';
import { TokenJoinModal } from '../worksheet/TokenJoinModal';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [gamification, setGamification] = useState<UserGamificationState>(getLocalGamificationState);
  const [isPeriodicOpen, setIsPeriodicOpen] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [isTokenJoinModalOpen, setIsTokenJoinModalOpen] = useState(false);

  useEffect(() => {
    const handleStorage = () => setGamification(getLocalGamificationState());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleRole = (newRole: 'siswa' | 'guru') => {
    const updated = { ...gamification, role: newRole };
    setGamification(updated);
    localStorage.setItem('osn_gamification_state', JSON.stringify(updated));
    setShowRoleMenu(false);
  };

  const { currentLevel, currentXp, nextLevelXp, progressPercent } = calculateLevelProgress(gamification.xp);

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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
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

            {/* Main Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600">
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
              <Link
                to="/practice"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive('/practice')
                    ? 'bg-sky-50 text-sky-800 font-semibold'
                    : 'hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Bank Soal</span>
              </Link>
              <Link
                to="/worksheet/static_module/1"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive('/worksheet')
                    ? 'bg-sky-50 text-sky-800 font-semibold'
                    : 'hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Worksheet</span>
              </Link>
              <Link
                to="/profile"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive('/profile')
                    ? 'bg-sky-50 text-sky-800 font-semibold'
                    : 'hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>Profil & Radar</span>
              </Link>
              <Link
                to="/teacher"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive('/teacher')
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                <span>Studio Guru</span>
              </Link>
            </nav>
          </div>

          {/* Right Action Bar: Periodic Table, Token Join, & Role Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Token Join Button for Students */}
            <button
              onClick={() => setIsTokenJoinModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-all shadow-2xs active:scale-95"
              title="Masukkan Token Worksheet dari Guru"
            >
              <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Masuk Token</span>
            </button>

            {/* Quick Periodic Table Button */}
            <button
              onClick={() => setIsPeriodicOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-sky-50 hover:text-sky-800 border border-slate-200 hover:border-sky-300 rounded-lg transition-all shadow-2xs active:scale-95"
              title="Buka Referensi Tabel Periodik & Tetapan Fisika"
            >
              <Table className="w-3.5 h-3.5 text-sky-600" />
              <span className="hidden sm:inline">Tabel Periodik</span>
            </button>

            {/* Role Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setShowRoleMenu(!showRoleMenu)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border transition-all ${
                  gamification.role === 'guru'
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`}
                title="Ganti Mode Pengguna (Siswa / Guru)"
              >
                {gamification.role === 'guru' ? '👨‍🏫 Guru' : '🎓 Siswa'}
              </button>

              {showRoleMenu && (
                <div className="absolute right-0 mt-1.5 w-36 bg-white border border-slate-200 rounded-lg shadow-lg p-1 text-xs z-50 animate-in fade-in">
                  <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase">Ganti Mode:</div>
                  <button
                    onClick={() => toggleRole('siswa')}
                    className={`w-full text-left px-2 py-1.5 rounded-md font-medium transition-colors ${
                      gamification.role === 'siswa' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    🎓 Siswa (Belajar)
                  </button>
                  <button
                    onClick={() => toggleRole('guru')}
                    className={`w-full text-left px-2 py-1.5 rounded-md font-medium transition-colors ${
                      gamification.role === 'guru' ? 'bg-indigo-50 text-indigo-800 font-bold' : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    👨‍🏫 Guru (Studio)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Global Slide-Over Periodic Table */}
      <PeriodicTableDrawer
        isOpen={isPeriodicOpen}
        onClose={() => setIsPeriodicOpen(false)}
      />

      {/* Global Token Join Modal */}
      <TokenJoinModal
        isOpen={isTokenJoinModalOpen}
        onClose={() => setIsTokenJoinModalOpen(false)}
      />
    </>
  );
};
