import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  School,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Layers,
  BarChart2,
  UserPlus,
  RefreshCw,
  BookOpen,
  Database,
} from 'lucide-react';
import { adminService, type GlobalAnalyticsData } from '../../services/adminService';
import type { AuditLog } from '../../types/database';

export const AdminAnalyticsDashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState<GlobalAnalyticsData | null>(null);
  const [recentLogs, setRecentLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [analyticsData, logs] = await Promise.all([
        adminService.getGlobalAnalytics(),
        adminService.getAuditLogs(),
      ]);
      setAnalytics(analyticsData);
      setRecentLogs(logs.slice(0, 5));
    } catch (e) {
      console.warn('Gagal memuat analitik admin:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono uppercase tracking-wider">
              Platform Overview
            </span>
            <span className="text-xs text-slate-500">Dasbor Tata Kelola & Analitik Platform</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Ringkasan Statistik OSN Kimia
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Pantau metrik peserta, pertumbuhan pembina, status seluruh kelas, dan perkembangan kurikulum.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={loadData}
            disabled={isLoading}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-2xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Segarkan</span>
          </button>

          <Link
            to="/admin/users"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition shadow-xs flex items-center gap-1.5"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Kelola Users</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Siswa */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Siswa Terdaftar</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {analytics?.totalStudents ?? 0}
          </div>
          <span className="text-[10px] text-emerald-700 font-medium mt-1 block">
            ● Aktif belajar di silabus OSN
          </span>
        </div>

        {/* Guru */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Guru Pembina</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {analytics?.totalTeachers ?? 0}
          </div>
          <span className="text-[10px] text-indigo-700 font-medium mt-1 block">
            ● Terverifikasi resmi oleh sistem
          </span>
        </div>

        {/* Kelas */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Kelas Binaan</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <School className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {analytics?.totalClassrooms ?? 0}
          </div>
          <span className="text-[10px] text-amber-700 font-medium mt-1 block">
            ● Menggunakan kode undangan aktif
          </span>
        </div>

        {/* Submissions */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Latihan Diselesaikan</span>
            <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {analytics?.totalSubmissions ?? 0}
          </div>
          <span className="text-[10px] text-sky-700 font-medium mt-1 block">
            ● Rata-rata nilai: {analytics?.averageScorePercentage ?? 0}%
          </span>
        </div>
      </div>

      {/* Middle Section: Pillar Distribution & Action Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribusi Penguasaan Topik */}
        <div className="lg:col-span-2 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-slate-700" />
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Koleksi 10 Pilar Silabus OSN Kimia
              </h2>
            </div>
            <Link
              to="/admin/questions"
              className="text-[11px] text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1"
            >
              <span>Lihat Bank Soal</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3 pt-2">
            {analytics?.pillarDistribution.map((p) => {
              const maxCount = Math.max(...analytics.pillarDistribution.map((d) => d.count), 25);
              const percentage = Math.round((p.count / maxCount) * 100);
              return (
                <div key={p.pillarNumber} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">
                      Pilar {p.pillarNumber}: {getPillarTitle(p.pillarNumber)}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">
                      {p.count} butir soal ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-800 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Governance Links & Audit Log */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-700" />
              <span>Pintasan Cepat</span>
            </h2>

            <div className="space-y-2 text-xs">
              <Link
                to="/admin/users"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition group"
              >
                <div className="flex items-center gap-2.5 text-slate-800">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Kelola Akun Guru & Siswa</div>
                    <div className="text-[10px] text-slate-500">Pendaftaran, suspend, reset sandi</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/admin/materials"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition group"
              >
                <div className="flex items-center gap-2.5 text-slate-800">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Editor Materi & KaTeX</div>
                    <div className="text-[10px] text-slate-500">Perbarui konsep 10 Topik & SMA</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/admin/worksheets"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition group"
              >
                <div className="flex items-center gap-2.5 text-slate-800">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Worksheet & Live Radar</div>
                    <div className="text-[10px] text-slate-500">Radar ujian real-time semua kelas</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/admin/questions"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition group"
              >
                <div className="flex items-center gap-2.5 text-slate-800">
                  <Database className="w-4 h-4 text-indigo-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Kurasi & Rubrik Bank Soal</div>
                    <div className="text-[10px] text-slate-500">Edit bobot, narasi, dan sub-soal</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mini Audit Log */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Audit Log Terbaru</span>
              </h2>
              <Link to="/admin/audit-logs" className="text-[11px] text-slate-500 hover:text-slate-800 font-medium">
                Semua →
              </Link>
            </div>

            <div className="space-y-2">
              {recentLogs.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Belum ada riwayat aktivitas.</p>
              ) : (
                recentLogs.map((log) => (
                  <div key={log.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-700 font-mono text-[9px] uppercase">
                        {log.action_type.replace(/_/g, ' ')}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div className="text-slate-700 line-clamp-2 leading-relaxed">{log.description}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getPillarTitle(p: number): string {
  const titles: Record<number, string> = {
    1: 'Struktur Atom & Periodisitas',
    2: 'Ikatan Kimia & Geometri',
    3: 'Stoikiometri & Gas Nyata',
    4: 'Termodinamika Kimia',
    5: 'Kesetimbangan Kimia',
    6: 'Kinetika Kimia',
    7: 'Elektrokimia',
    8: 'Kimia Anorganik Kompleks',
    9: 'Kimia Analitik & Spektro',
    10: 'Kimia Organik & Biokimia',
  };
  return titles[p] || 'Topik Sains Kimia';
}
