import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  School,
  FileText,
  Sparkles,
  Layers,
  Radio,
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
  activeLiveCount: propActiveLiveCount,
}) => {
  const location = useLocation();
  const { user } = useAuth();
  const teacherId = user?.id || '';

  const [pendingCount, setPendingCount] = useState<number>(propPendingCount ?? 0);
  const [liveSessionsCount, setLiveSessionsCount] = useState<number>(propActiveLiveCount ?? 0);

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
          const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
          const { data, count } = await supabase
            .from('worksheet_live_sessions')
            .select('id', { count: 'exact' })
            .gte('last_active_at', fifteenMinutesAgo);
          setLiveSessionsCount(count || data?.length || 0);
        }
      } catch {
        // Fallback silently
      }
    };

    fetchLiveCount();
    const interval = setInterval(fetchLiveCount, 30000);
    return () => clearInterval(interval);
  }, [propActiveLiveCount]);

  const navItems = [
    {
      to: '/teacher',
      label: 'Ringkasan',
      icon: LayoutDashboard,
      isActive: location.pathname === '/teacher',
    },
    {
      to: '/teacher/classes',
      label: 'Kelas Binaan',
      icon: School,
      badge: pendingCount > 0 ? pendingCount : null,
      isActive: location.pathname.startsWith('/teacher/classes') || location.pathname.startsWith('/teacher/classrooms'),
    },
    {
      to: '/teacher/worksheets/new',
      label: 'Rakit Worksheet',
      icon: FileText,
      isActive: location.pathname.startsWith('/teacher/worksheets'),
    },
    {
      to: '/teacher/ai-studio',
      label: 'Studio Soal',
      icon: Sparkles,
      isActive: location.pathname.startsWith('/teacher/ai-studio'),
    },
    {
      to: '/practice?mode=table',
      label: 'Bank Soal',
      icon: Layers,
      isActive: location.pathname.startsWith('/practice'),
    },
  ];

  return (
    <nav
      aria-label="Navigasi ruang kerja guru"
      className="bg-white border-b border-slate-200 sticky top-16 z-30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex items-center gap-2 px-3.5 min-h-[44px] rounded-xl text-xs font-semibold whitespace-nowrap transition-colors select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    item.isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.isActive ? 'text-white' : 'text-slate-600'}`} />
                  <span>{item.label}</span>
                  {item.badge !== null && (
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold leading-none ${
                        item.isActive
                          ? 'bg-white text-indigo-800'
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

          {liveSessionsCount > 0 && (
            <div className="flex items-center shrink-0">
              <Link
                to="/teacher/classes"
                className="inline-flex items-center gap-2 px-3.5 min-h-[44px] bg-rose-50 border border-rose-300 text-rose-900 hover:bg-rose-100 rounded-xl text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
                title="Buka pemantauan sesi ujian langsung"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-rose-700" aria-hidden="true" />
                <Radio className="w-3.5 h-3.5 text-rose-800" />
                <span>{liveSessionsCount} Sesi Ujian Aktif</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
