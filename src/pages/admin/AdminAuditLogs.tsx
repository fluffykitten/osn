import React, { useState, useEffect } from 'react';
import {
  Search,
  RefreshCw,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { adminService } from '../../services/adminService';
import type { AuditLog } from '../../types/database';

export const AdminAuditLogs: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('ALL');
  const [expandedLogId, setExpandedLogId] = useState<number | null>(null);

  const loadLogs = async () => {
    setIsLoading(true);
    try {
      const data = await adminService.getAuditLogs();
      setLogs(data);
    } catch (e) {
      console.warn('Gagal memuat audit log:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const getActionBadge = (type: string) => {
    if (type.startsWith('USER')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (type.startsWith('PASSWORD')) {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    if (type.startsWith('ROLE')) {
      return 'bg-purple-50 text-purple-700 border-purple-200';
    }
    if (type.startsWith('MATERIAL')) {
      return 'bg-sky-50 text-sky-700 border-sky-200';
    }
    if (type.startsWith('QUESTION')) {
      return 'bg-orange-50 text-orange-700 border-orange-200';
    }
    if (type.startsWith('CLASSROOM')) {
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.actor_email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (log.target_resource && log.target_resource.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = actionFilter === 'ALL' || log.action_type.startsWith(actionFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono tracking-wider">
              SYSTEM AUDIT TRAIL
            </span>
            <span className="text-xs text-slate-500 font-medium">Total {logs.length} Kejadian</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Riwayat Aktivitas & Audit Log
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Transparansi penuh atas setiap perubahan data pengguna, materi, kelas, dan kurasi bank soal.
          </p>
        </div>

        <button
          onClick={loadLogs}
          disabled={isLoading}
          className="p-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs transition cursor-pointer self-start sm:self-auto flex items-center gap-1.5 text-xs font-medium"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Segarkan Log</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center gap-3 justify-between">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari deskripsi aksi, email aktor, atau target resource..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:bg-white focus:outline-none focus:border-slate-400 transition"
          >
            <option value="ALL">Kategori: Semua Aksi</option>
            <option value="USER">Pengguna & Akun</option>
            <option value="PASSWORD">Reset Kata Sandi</option>
            <option value="MATERIAL">Pembaruan Materi</option>
            <option value="QUESTION">Bank Soal</option>
            <option value="CLASSROOM">Kelas Binaan</option>
          </select>
        </div>
      </div>

      {/* Log Feed */}
      <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs">
        {isLoading ? (
          <div className="py-16 text-center text-slate-500">
            <div className="inline-block w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-2" />
            <div className="text-xs">Memuat log audit sistem...</div>
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-xs">
            Belum ada catatan aktivitas yang sesuai dengan filter.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredLogs.map((log) => {
              const isExpanded = expandedLogId === log.id;
              const hasDetails = log.details && Object.keys(log.details).length > 0;
              return (
                <div key={log.id} className="p-4 hover:bg-slate-50/70 transition space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold font-mono border uppercase tracking-wider ${getActionBadge(
                          log.action_type
                        )}`}
                      >
                        {log.action_type.replace(/_/g, ' ')}
                      </span>
                      {log.target_resource && (
                        <span className="text-[10px] text-slate-600 font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {log.target_resource}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      <Clock size={12} className="text-slate-400" />
                      <span>{new Date(log.created_at).toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">{log.description}</p>
                    {hasDetails && (
                      <button
                        onClick={() => setExpandedLogId(isExpanded ? null : log.id)}
                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer shrink-0"
                        title={isExpanded ? 'Sembunyikan Detail' : 'Lihat Detail JSON'}
                      >
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span>Aktor:</span>
                    <span className="text-slate-900 font-mono font-medium">{log.actor_email}</span>
                  </div>

                  {isExpanded && hasDetails && (
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-800 overflow-x-auto">
                      <pre>{JSON.stringify(log.details, null, 2)}</pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
