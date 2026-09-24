import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Users,
  School,
  BookOpen,
  Layers,
  Database,
  ScrollText,
  LogOut,
  Menu,
  X,
  Palette,
  ExternalLink,
  ChevronRight,
  Cloud,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, logout, isCloudConnected } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Analytics Global',
      href: '/admin/analytics',
      icon: BarChart3,
      badge: 'KPI',
    },
    {
      name: 'Manajemen Users',
      href: '/admin/users',
      icon: Users,
      badge: 'Akun',
    },
    {
      name: 'Manajemen Kelas',
      href: '/admin/classrooms',
      icon: School,
    },
    {
      name: 'Editor Materi',
      href: '/admin/materials',
      icon: BookOpen,
      badge: 'KaTeX',
    },
    {
      name: 'Worksheet & Live',
      href: '/admin/worksheets',
      icon: Layers,
      badge: 'Live',
    },
    {
      name: 'Bank Soal',
      href: '/admin/questions',
      icon: Database,
    },
    {
      name: 'Audit Log Sistem',
      href: '/admin/audit-logs',
      icon: ScrollText,
    },
    {
      name: 'Pengaturan Tampilan',
      href: '/admin/appearance',
      icon: Palette,
      badge: 'Tema',
    },
  ];

  const isActive = (href: string) => {
    if (href === '/admin/analytics' && location.pathname === '/admin') return true;
    return location.pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F0F8FF] text-[#2D3748] flex flex-col md:flex-row antialiased selection:bg-[#B0C4DE]/30 selection:text-[#2D3748] font-sans">
      {/* DESKTOP SIDEBAR - SLATE GRAY */}
      <aside className="hidden md:flex flex-col w-64 bg-[#708090] text-[#FFFFF0] border-r border-[#5A6B7C] shrink-0 sticky top-0 h-screen z-30 shadow-md">
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-[#5A6B7C] bg-[#617181]">
          <Link to="/admin/analytics" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#FFFFF0] text-[#708090] flex items-center justify-center font-bold text-sm shadow-2xs group-hover:scale-105 transition-transform">
              ⚛
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-extrabold text-sm tracking-tight text-[#FFFFF0] font-display">
                  OSN Kimia
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#B0C4DE]/30 text-[#FFFFF0] border border-[#B0C4DE]/50 rounded font-mono">
                  ADMIN
                </span>
              </div>
              <span className="text-[9px] text-[#B0C4DE] font-mono tracking-wider block font-semibold">
                PORTAL KELOLA
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-xs">
          <div className="px-2.5 py-2 text-[10px] font-bold uppercase tracking-wider text-[#B0C4DE]/90 font-mono">
            Menu Utama
          </div>

          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium transition-all ${
                  active
                    ? 'bg-[#FFFFF0] text-[#708090] font-bold shadow-sm border border-[#D3D3D3]'
                    : 'text-[#FFFFF0]/85 hover:text-[#FFFFF0] hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={`w-4 h-4 ${
                      active ? 'text-[#708090]' : 'text-[#B0C4DE] group-hover:text-white'
                    }`}
                  />
                  <span className={active ? 'text-[#708090] font-bold' : ''}>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold ${
                      active
                        ? 'bg-[#708090] text-[#FFFFF0]'
                        : 'bg-black/20 text-[#FFFFF0] border border-white/15'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Profile Box */}
        <div className="p-3.5 border-t border-[#5A6B7C] bg-[#617181] space-y-2.5">
          <div className="p-2.5 rounded-xl bg-[#536270] border border-[#5A6B7C] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-[#FFFFF0]/20 border border-[#FFFFF0]/30 text-[#FFFFF0] flex items-center justify-center font-bold text-xs shrink-0">
                👑
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-[#FFFFF0] truncate">
                  {profile?.full_name || 'Administrator'}
                </div>
                <div className="text-[9px] text-[#B0C4DE] font-mono truncate">
                  {user?.email || 'fluffykitten.dev@gmail.com'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex-1 py-1.5 px-2 bg-[#5C6D7D] hover:bg-[#4D5D6D] text-[#FFFFF0] rounded-lg text-[10px] font-medium transition flex items-center justify-center gap-1 border border-[#7B8B9B] shadow-2xs"
              title="Kunjungi Beranda Publik"
            >
              <ExternalLink className="w-3 h-3 text-[#B0C4DE]" />
              <span>Portal Publik</span>
            </Link>

            <button
              onClick={handleLogout}
              className="py-1.5 px-2.5 bg-[#B85D5D]/25 hover:bg-[#B85D5D]/40 text-[#FFD2D2] rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1 border border-[#B85D5D]/50 cursor-pointer shadow-2xs"
              title="Keluar dari Portal Administrator"
            >
              <LogOut className="w-3 h-3" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 z-40 bg-[#708090] text-[#FFFFF0] border-b border-[#5A6B7C] flex items-center justify-between px-4 h-14 shadow-sm">
        <Link to="/admin/analytics" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#FFFFF0] text-[#708090] flex items-center justify-center font-bold text-xs">
            ⚛
          </div>
          <div>
            <span className="font-extrabold text-xs text-[#FFFFF0] font-display">OSN Kimia</span>
            <span className="ml-1 text-[9px] font-bold px-1 py-0.2 bg-[#B0C4DE]/30 text-[#FFFFF0] border border-[#B0C4DE]/50 rounded font-mono">
              ADMIN
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 rounded-lg bg-[#5C6D7D] text-[#FFFFF0] hover:bg-[#4D5D6D] transition cursor-pointer"
          aria-label="Toggle menu navigasi"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex flex-col">
          <div className="p-4 bg-[#708090] text-[#FFFFF0] border-b border-[#5A6B7C] flex items-center justify-between">
            <span className="font-bold text-xs text-[#FFFFF0] font-mono uppercase tracking-wider">
              Menu Navigasi Administrator
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded bg-[#5C6D7D] text-[#FFFFF0] cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 text-xs bg-[#5C6D7D]">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl font-medium transition ${
                    active
                      ? 'bg-[#FFFFF0] text-[#708090] font-bold shadow-sm'
                      : 'text-[#FFFFF0]/85 hover:bg-[#4D5D6D]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#B0C4DE]/30 text-[#FFFFF0] border border-[#B0C4DE]/40 font-mono">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-[#5A6B7C] bg-[#617181] flex items-center justify-between text-[#FFFFF0]">
            <span className="text-[11px] text-[#B0C4DE] truncate max-w-[200px] font-mono">
              {user?.email || 'fluffykitten.dev@gmail.com'}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-[#B85D5D]/30 text-[#FFD2D2] border border-[#B85D5D]/60 rounded-lg text-xs font-semibold"
            >
              Keluar
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#F0F8FF]">
        {/* Top Control Bar */}
        <header className="h-14 border-b border-[#D3D3D3] bg-[#FFFFF0]/95 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20 shadow-2xs">
          <div className="flex items-center gap-2 text-xs text-[#708090]">
            <span className="text-[#708090]/80">Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B0C4DE]" />
            <span className="font-bold text-[#2D3748]">
              {navigationItems.find((i) => isActive(i.href))?.name || 'Dashboard'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${
                isCloudConnected
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
            >
              <Cloud className="w-3 h-3" />
              <span>{isCloudConnected ? 'Cloud Sync Online' : 'Local Fallback'}</span>
            </div>
          </div>
        </header>

        {/* Inner Page View */}
        <div className="flex-1 p-4 sm:p-8">{children}</div>
      </main>
    </div>
  );
};
