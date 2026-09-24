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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col md:flex-row antialiased selection:bg-slate-200 selection:text-slate-900 font-sans">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200/80 shrink-0 sticky top-0 h-screen z-30">
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-200/80 bg-white">
          <Link to="/admin/analytics" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-2xs group-hover:scale-105 transition-transform">
              ⚛
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-extrabold text-sm tracking-tight text-slate-900 font-display">
                  OSN Kimia
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 bg-slate-100 text-slate-700 border border-slate-200 rounded font-mono">
                  ADMIN
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono tracking-wider block">
                PORTAL KELOLA
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-xs">
          <div className="px-2.5 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
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
                    ? 'bg-slate-100 text-slate-900 font-bold border border-slate-200/90 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={`w-4 h-4 ${
                      active ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold ${
                      active
                        ? 'bg-white text-slate-800 border border-slate-200'
                        : 'bg-slate-100 text-slate-500'
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
        <div className="p-3.5 border-t border-slate-200/80 bg-slate-50/50 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                👑
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-slate-900 truncate">
                  {profile?.full_name || 'Administrator'}
                </div>
                <div className="text-[9px] text-slate-500 font-mono truncate">
                  {user?.email || 'fluffykitten.dev@gmail.com'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex-1 py-1.5 px-2 bg-white hover:bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium transition flex items-center justify-center gap-1 border border-slate-200/80 shadow-2xs"
              title="Kunjungi Beranda Publik"
            >
              <ExternalLink className="w-3 h-3 text-slate-400" />
              <span>Portal Publik</span>
            </Link>

            <button
              onClick={handleLogout}
              className="py-1.5 px-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1 border border-rose-200/80 cursor-pointer shadow-2xs"
              title="Keluar dari Portal Administrator"
            >
              <LogOut className="w-3 h-3" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 h-14 shadow-2xs">
        <Link to="/admin/analytics" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center font-bold text-xs text-white">
            ⚛
          </div>
          <div>
            <span className="font-extrabold text-xs text-slate-900 font-display">OSN Kimia</span>
            <span className="ml-1 text-[9px] font-bold px-1 py-0.2 bg-slate-100 text-slate-700 border border-slate-200 rounded font-mono">
              ADMIN
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition cursor-pointer"
          aria-label="Toggle menu navigasi"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex flex-col">
          <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
            <span className="font-bold text-xs text-slate-800 font-mono uppercase tracking-wider">
              Menu Navigasi Administrator
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded bg-slate-100 text-slate-700 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 text-xs bg-slate-50">
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
                      ? 'bg-white text-slate-900 font-bold border border-slate-200 shadow-2xs'
                      : 'text-slate-600 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-slate-700" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200 font-mono">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between">
            <span className="text-[11px] text-slate-500 truncate max-w-[200px] font-mono">
              {user?.email || 'fluffykitten.dev@gmail.com'}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-xs font-semibold"
            >
              Keluar
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50">
        {/* Top Control Bar */}
        <header className="h-14 border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20 shadow-2xs">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="text-slate-400">Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-800">
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
