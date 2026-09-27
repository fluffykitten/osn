import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  School,
  FileText,
  Sparkles,
  Layers,
  Radio,
  Image as ImageIcon,
  Plus,
  Users,
  Clock,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { classroomService } from '../../services/classroomService';
import { useAuth } from '../../contexts/AuthContext';
import { getSupabaseClient } from '../../lib/supabaseClient';

interface TeacherNavigationProps {
  pendingApprovalsCount?: number;
  onOpenGallery?: () => void;
  activeLiveCount?: number;
}

export const TeacherNavigation: React.FC<TeacherNavigationProps> = ({
  pendingApprovalsCount: propPendingCount,
  onOpenGallery,
  activeLiveCount: propActiveLiveCount,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const teacherId = user?.id || '';

  const [pendingCount, setPendingCount] = useState<number>(propPendingCount ?? 0);
  const [liveSessionsCount, setLiveSessionsCount] = useState<number>(propActiveLiveCount ?? 0);

  // Sync counts if not provided via props
  useEffect(() => {
    if (propPendingCount !== undefined) {
      setPendingCount(propPendingCount);
      return;
    }

    const fetchPending = async () => {
      try {
        const pending = await classroomService.getPendingApprovalsAcrossClasses(teacherId);
        setPendingCount(pending.length);
      } catch {
        // Fallback silently
      }
    };

    fetchPending();
  }, [propPendingCount, teacherId]);

  useEffect(() => {
    if (propActiveLiveCount !== undefined) {
      setLiveSessionsCount(propActiveLiveCount);
      return;
    }

    const fetchLiveCount = async () => {
      try {
        const supabase = getSupabaseClient();
        if (supabase) {
          const tenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
          const { data, count } = await supabase
            .from('worksheet_live_sessions')
            .select('id', { count: 'exact' })
            .gte('last_active_at', tenMinutesAgo);
          setLiveSessionsCount(count || data?.length || 0);
        }
      } catch {
        // Fallback
      }
    };

    fetchLiveCount();
    const interval = setInterval(fetchLiveCount, 30000);
    return () => clearInterval(interval);
  }, [propActiveLiveCount]);

  const navItems = [
    {
      to: '/teacher',
      label: 'Studio Guru',
      icon: LayoutDashboard,
      isActive: location.pathname === '/teacher',
    },
    {
      to: '/teacher/classes',
      label: 'Kelas Binaan',
      icon: School,
      badge: pendingCount > 0 ? pendingCount : null,
      badgeType: 'warning' as const,
      isActive: location.pathname.startsWith('/teacher/classes'),
    },
    {
      to: '/teacher/worksheets/new',
      label: 'Rakit Worksheet',
      icon: FileText,
      isActive: location.pathname.startsWith('/teacher/worksheets'),
    },
    {
      to: '/teacher/ai-studio',
      label: 'AI Question Studio',
      icon: Sparkles,
      isActive: location.pathname.startsWith('/teacher/ai-studio'),
    },
    {
      to: '/practice?mode=table',
      label: 'Bank Soal OSN',
      icon: Layers,
      isActive: location.pathname.startsWith('/practice'),
    },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-16 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2.5">
          {/* Left Navigation Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all select-none ${
                    item.isActive
                      ? 'bg-indigo-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge !== null && (
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold leading-tight ${
                        item.isActive
                          ? 'bg-amber-400 text-slate-950 shadow-2xs'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}
                      title={`${item.badge} siswa menunggu persetujuan`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Live Proctoring Pulse Indicator (if sessions active) */}
            {liveSessionsCount > 0 ? (
              <Link
                to="/teacher/classes"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-bold transition-all shadow-2xs group"
                title="Ada sesi ujian siswa yang sedang berlangsung secara real-time"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                </span>
                <Radio className="w-3.5 h-3.5 text-rose-600 group-hover:scale-110 transition-transform" />
                <span>{liveSessionsCount} Ujian Live</span>
              </Link>
            ) : null}

            {/* Galeri Diagram R2 Trigger */}
            {onOpenGallery && (
              <button
                type="button"
                onClick={onOpenGallery}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/90 rounded-lg text-xs font-semibold transition-all shadow-2xs cursor-pointer"
                title="Buka Bank Gambar & Diagram Kimia Cloudflare R2"
              >
                <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">Galeri R2</span>
              </button>
            )}

            {/* Quick Action: Buat Kelas */}
            <Link
              to="/teacher/classes"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-all active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Kelas Binaan</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
