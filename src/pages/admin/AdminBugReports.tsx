import React, { useState, useEffect, useMemo } from 'react';
import {
  Bug,
  Search,
  Filter,
  RefreshCw,
  Copy,
  Download,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  ExternalLink,
  ChevronDown,
  Trash2,
  Sparkles,
  Eye,
  X,
  MessageSquare,
  Monitor,
} from 'lucide-react';
import { bugReportService } from '../../services/bugReportService';
import type { BugReport, BugStatus, BugSeverity, BugCategory } from '../../types/database';
import { useAuth } from '../../contexts/AuthContext';

export const AdminBugReports: React.FC = () => {
  const { user } = useAuth();
  const [reports, setReports] = useState<BugReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [severityFilter, setSeverityFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  // Modal Detail State
  const [selectedReport, setSelectedReport] = useState<BugReport | null>(null);
  const [adminNotesInput, setAdminNotesInput] = useState('');
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // Toast Notifikasi
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const loadReports = async () => {
    setIsLoading(true);
    try {
      const data = await bugReportService.getBugReports();
      setReports(data);
    } catch (err) {
      console.warn('Gagal memuat daftar laporan bug:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  // Filter Data
  const filteredReports = useMemo(() => {
    return reports.filter((r) => {
      const matchesSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.page_url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.reporter_email && r.reporter_email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        r.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'ALL' || r.status === statusFilter;
      const matchesSeverity = severityFilter === 'ALL' || r.severity === severityFilter;
      const matchesCategory = categoryFilter === 'ALL' || r.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesSeverity && matchesCategory;
    });
  }, [reports, searchQuery, statusFilter, severityFilter, categoryFilter]);

  // KPI Ringkasan
  const stats = useMemo(() => {
    const total = reports.length;
    const openCount = reports.filter((r) => r.status === 'open').length;
    const inProgressCount = reports.filter((r) => r.status === 'in_progress').length;
    const resolvedCount = reports.filter((r) => r.status === 'resolved').length;
    const criticalCount = reports.filter((r) => r.severity === 'critical' && r.status !== 'resolved').length;

    return { total, openCount, inProgressCount, resolvedCount, criticalCount };
  }, [reports]);

  // Aksi Status
  const handleStatusChange = async (reportId: string, newStatus: BugStatus) => {
    setIsUpdatingStatus(true);
    try {
      await bugReportService.updateBugReportStatus(
        reportId,
        newStatus,
        undefined,
        user?.email || 'Admin'
      );
      setReports((prev) =>
        prev.map((r) => (r.id === reportId ? { ...r, status: newStatus } : r))
      );
      if (selectedReport && selectedReport.id === reportId) {
        setSelectedReport((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
      showToast(`Status laporan diperbarui ke ${newStatus.toUpperCase()}`);
    } catch {
      showToast('Gagal memperbarui status');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedReport) return;
    try {
      await bugReportService.updateBugReportStatus(
        selectedReport.id,
        selectedReport.status,
        adminNotesInput,
        user?.email || 'Admin'
      );
      setReports((prev) =>
        prev.map((r) => (r.id === selectedReport.id ? { ...r, admin_notes: adminNotesInput } : r))
      );
      setSelectedReport((prev) => (prev ? { ...prev, admin_notes: adminNotesInput } : null));
      showToast('Catatan admin berhasil disimpan');
    } catch {
      showToast('Gagal menyimpan catatan');
    }
  };

  const handleDeleteReport = async (reportId: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus laporan bug ini?')) return;
    try {
      await bugReportService.deleteBugReport(reportId);
      setReports((prev) => prev.filter((r) => r.id !== reportId));
      if (selectedReport?.id === reportId) setSelectedReport(null);
      showToast('Laporan berhasil dihapus');
    } catch {
      showToast('Gagal menghapus laporan');
    }
  };

  // Ekspor & Salin Prompt untuk AI
  const handleCopySinglePrompt = (report: BugReport) => {
    const prompt = bugReportService.generateAiFixPrompt(report);
    navigator.clipboard.writeText(prompt);
    showToast(`Prompt AI untuk ${report.id} disalin ke clipboard! Siap ditempel ke Antigravity.`);
  };

  const handleCopyAllFilteredPrompts = () => {
    if (filteredReports.length === 0) {
      showToast('Tidak ada data laporan yang cocok untuk disalin.');
      return;
    }
    const prompt = bugReportService.generateAiFixPrompt(filteredReports);
    navigator.clipboard.writeText(prompt);
    showToast(`${filteredReports.length} laporan disalin sebagai prompt AI siap pakai!`);
  };

  const handleExportMarkdown = () => {
    bugReportService.exportAsMarkdown(filteredReports);
    showToast('File Markdown (.md) berhasil diunduh');
  };

  const handleExportJson = () => {
    bugReportService.exportAsJson(filteredReports);
    showToast('File JSON berhasil diunduh');
  };

  const handleExportCsv = () => {
    bugReportService.exportAsCsv(filteredReports);
    showToast('File CSV berhasil diunduh');
  };

  const getSeverityBadge = (severity: BugSeverity) => {
    switch (severity) {
      case 'critical':
        return 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-300 font-semibold';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'low':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusBadge = (status: BugStatus) => {
    switch (status) {
      case 'open':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'in_progress':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'resolved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'closed':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 select-none">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#2D3748] text-[#FFFFF0] border border-[#708090] rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header & Main Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono tracking-wider">
              QUALITY ASSURANCE & BUG TRACKING
            </span>
            <span className="text-xs text-slate-500 font-medium">Total {reports.length} Laporan</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Bug className="w-6 h-6 text-[#708090]" />
            <span>Pusat Kendali Laporan Bug & Masalah</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola temuan kendala pengguna, telusuri log teknis, dan ekspor instruksi langsung untuk diperbaiki oleh Antigravity (AI).
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={loadReports}
            disabled={isLoading}
            className="p-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs transition cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            title="Muat ulang laporan"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Segarkan</span>
          </button>

          {/* 1-Click Copy AI Prompt */}
          <button
            onClick={handleCopyAllFilteredPrompts}
            disabled={filteredReports.length === 0}
            className="px-3.5 py-2.5 rounded-lg bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] border border-[#708090] shadow-xs transition cursor-pointer flex items-center gap-2 text-xs font-bold active:scale-95 disabled:opacity-50"
            title="Salin seluruh laporan yang terfilter menjadi prompt terstruktur untuk Antigravity"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Salin Prompt untuk AI ({filteredReports.length})</span>
          </button>

          {/* Dropdown / Export Buttons */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg shadow-xs overflow-hidden">
            <button
              onClick={handleExportMarkdown}
              className="px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 border-r border-slate-200 flex items-center gap-1.5 transition"
              title="Unduh file .md prompt AI"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>.MD</span>
            </button>
            <button
              onClick={handleExportJson}
              className="px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 border-r border-slate-200 flex items-center gap-1.5 transition"
              title="Unduh file JSON mentah"
            >
              <span>JSON</span>
            </button>
            <button
              onClick={handleExportCsv}
              className="px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition"
              title="Unduh file CSV Excel"
            >
              <span>CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Laporan</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{stats.total}</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-xs">
          <div className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider flex items-center gap-1">
            <Clock className="w-3 h-3 text-sky-500" />
            <span>Menunggu (Open)</span>
          </div>
          <div className="text-2xl font-black text-sky-900 mt-1">{stats.openCount}</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-purple-200 shadow-xs">
          <div className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider flex items-center gap-1">
            <RefreshCw className="w-3 h-3 text-purple-500" />
            <span>Sedang Dikerjakan</span>
          </div>
          <div className="text-2xl font-black text-purple-900 mt-1">{stats.inProgressCount}</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-xs">
          <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>Telah Diperbaiki</span>
          </div>
          <div className="text-2xl font-black text-emerald-900 mt-1">{stats.resolvedCount}</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-xs col-span-2 sm:col-span-1">
          <div className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-rose-500" />
            <span>Kritis Aktif</span>
          </div>
          <div className="text-2xl font-black text-rose-900 mt-1">{stats.criticalCount}</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari ID, judul bug, deskripsi, rute URL, atau email pelapor..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 transition"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:bg-white focus:outline-none transition"
          >
            <option value="ALL">Status: Semua</option>
            <option value="open">Menunggu (Open)</option>
            <option value="in_progress">Sedang Dikerjakan</option>
            <option value="resolved">Telah Selesai</option>
            <option value="closed">Ditutup</option>
          </select>

          {/* Severity Filter */}
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:bg-white focus:outline-none transition"
          >
            <option value="ALL">Keparahan: Semua</option>
            <option value="critical">Kritis (Critical)</option>
            <option value="high">Tinggi (High)</option>
            <option value="medium">Sedang (Medium)</option>
            <option value="low">Rendah (Low)</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:bg-white focus:outline-none transition"
          >
            <option value="ALL">Kategori: Semua</option>
            <option value="ui_ux">Tampilan (UI/UX)</option>
            <option value="logic_calculation">Hitungan & Logika</option>
            <option value="katex_formula">Formula KaTeX</option>
            <option value="content_typo">Typo & Materi</option>
            <option value="audio_media">Audio & Media</option>
            <option value="auth_account">Akun & Auth</option>
            <option value="performance_crash">Performa / Crash</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
      </div>

      {/* Reports Feed */}
      <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs">
        {isLoading ? (
          <div className="py-16 text-center text-slate-500">
            <div className="inline-block w-6 h-6 border-2 border-[#708090] border-t-transparent rounded-full animate-spin mb-2" />
            <div className="text-xs">Memuat daftar laporan bug...</div>
          </div>
        ) : filteredReports.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-xs space-y-2">
            <Bug className="w-8 h-8 text-slate-300 mx-auto" />
            <div className="font-semibold text-slate-700">Belum ada laporan yang sesuai</div>
            <p className="text-slate-400 max-w-sm mx-auto">
              Tidak ada laporan bug yang cocok dengan kriteria pencarian atau filter yang dipilih.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="p-4 hover:bg-slate-50/70 transition space-y-2.5 flex flex-col"
              >
                {/* Top Row: Badges & Timestamps */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300">
                      {report.id}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getStatusBadge(
                        report.status
                      )}`}
                    >
                      {report.status.replace('_', ' ')}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getSeverityBadge(
                        report.severity
                      )}`}
                    >
                      {report.severity}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                      {report.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock size={12} />
                    <span>{new Date(report.created_at).toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* Middle Row: Title, Route, Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {report.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                    <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      📍 {report.section}
                    </span>
                    <span className="font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {report.page_url}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span>Pelapor:</span>
                    <span className="font-medium text-slate-800">
                      {report.reporter_name || 'Anonim'} ({report.reporter_email || '-'})
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded">
                      {report.reporter_role || 'guest'}
                    </span>
                  </div>
                </div>

                {/* Description Snippet */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                  {report.description}
                </p>

                {/* Bottom Row: Actions */}
                <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
                  <div className="flex items-center gap-2">
                    {/* Status Dropdown */}
                    <select
                      value={report.status}
                      disabled={isUpdatingStatus}
                      onChange={(e) => handleStatusChange(report.id, e.target.value as BugStatus)}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer transition shadow-2xs"
                    >
                      <option value="open">Tandai: Menunggu (Open)</option>
                      <option value="in_progress">Tandai: In Progress</option>
                      <option value="resolved">Tandai: Selesai (Resolved)</option>
                      <option value="closed">Tandai: Ditutup (Closed)</option>
                    </select>

                    {report.recent_logs && report.recent_logs.length > 0 && (
                      <span className="text-[10px] font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200 font-semibold">
                        ⚠️ {report.recent_logs.length} Console Errors
                      </span>
                    )}

                    {report.screenshot_data && (
                      <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200 font-semibold">
                        🖼️ Tangkapan Layar
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Salin Prompt Khusus Bug Ini */}
                    <button
                      onClick={() => handleCopySinglePrompt(report)}
                      className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer shadow-2xs"
                      title="Salin Prompt untuk Antigravity (1-Click)"
                    >
                      <Copy className="w-3 h-3 text-amber-700" />
                      <span>Salin Prompt AI</span>
                    </button>

                    {/* Lihat Detail */}
                    <button
                      onClick={() => {
                        setSelectedReport(report);
                        setAdminNotesInput(report.admin_notes || '');
                      }}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium flex items-center gap-1 transition cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3 h-3 text-slate-500" />
                      <span>Inspeksi Detail</span>
                    </button>

                    {/* Hapus */}
                    <button
                      onClick={() => handleDeleteReport(report.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded hover:bg-rose-50 transition cursor-pointer"
                      title="Hapus Laporan"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* INSPECTION DETAIL MODAL */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs select-none overflow-y-auto">
          <div className="bg-white border-2 border-slate-300 rounded-2xl max-w-3xl w-full p-5 sm:p-6 shadow-2xl space-y-4 my-auto text-slate-800 max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center font-bold">
                  <Bug className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {selectedReport.id}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getStatusBadge(
                        selectedReport.status
                      )}`}
                    >
                      {selectedReport.status}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getSeverityBadge(
                        selectedReport.severity
                      )}`}
                    >
                      {selectedReport.severity}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 leading-tight mt-0.5">
                    {selectedReport.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 space-y-4 text-xs pr-1">
              {/* Lokasi & Konteks Halaman */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Monitor className="w-3.5 h-3.5 text-[#708090]" />
                  <span>Konteks Halaman & Bagian</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-500">Rute URL:</span>{' '}
                    <span className="font-mono font-semibold text-slate-800">
                      {selectedReport.page_url}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">Bagian:</span>{' '}
                    <span className="font-semibold text-slate-800">
                      {selectedReport.section}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">Judul Dokumen:</span>{' '}
                    <span className="text-slate-800">{selectedReport.page_title || '-'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Waktu Lapor:</span>{' '}
                    <span className="font-mono text-slate-800">
                      {new Date(selectedReport.created_at).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Pelapor & Spesifikasi Perangkat */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-slate-700">Identitas Pelapor</div>
                  <div className="text-[11px] space-y-1">
                    <div>
                      <span className="text-slate-500">Nama:</span>{' '}
                      <span className="font-semibold text-slate-900">
                        {selectedReport.reporter_name || 'Anonim'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Email:</span>{' '}
                      <span className="font-mono text-slate-900">
                        {selectedReport.reporter_email || '-'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Peran Akun:</span>{' '}
                      <span className="font-mono px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded text-[10px]">
                        {selectedReport.reporter_role || 'guest'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-slate-700">Perangkat & Layar</div>
                  <div className="text-[11px] space-y-1">
                    <div>
                      <span className="text-slate-500">Resolusi Viewport:</span>{' '}
                      <span className="font-mono text-slate-900">
                        {selectedReport.viewport
                          ? `${selectedReport.viewport.width} x ${selectedReport.viewport.height} px`
                          : '-'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">User Agent:</span>
                      <div className="font-mono text-[10px] text-slate-600 truncate mt-0.5">
                        {selectedReport.user_agent || '-'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deskripsi Masalah */}
              <div className="space-y-1.5">
                <div className="font-bold text-slate-700">Deskripsi Masalah (Apa yang Terjadi)</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl whitespace-pre-wrap leading-relaxed text-slate-800">
                  {selectedReport.description}
                </div>
              </div>

              {/* Perilaku yang Diharapkan */}
              {selectedReport.expected_behavior && (
                <div className="space-y-1.5">
                  <div className="font-bold text-slate-700">Perilaku yang Diharapkan</div>
                  <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl whitespace-pre-wrap leading-relaxed text-emerald-950">
                    {selectedReport.expected_behavior}
                  </div>
                </div>
              )}

              {/* Langkah Reproduksi */}
              {selectedReport.steps_to_reproduce && (
                <div className="space-y-1.5">
                  <div className="font-bold text-slate-700">Langkah-Langkah Reproduksi</div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl whitespace-pre-wrap leading-relaxed font-mono text-[11px] text-slate-800">
                    {selectedReport.steps_to_reproduce}
                  </div>
                </div>
              )}

              {/* Rekaman Console Errors */}
              {selectedReport.recent_logs && selectedReport.recent_logs.length > 0 && (
                <div className="space-y-1.5">
                  <div className="font-bold text-rose-700 flex items-center justify-between">
                    <span>Rekaman Konsol Error Browser ({selectedReport.recent_logs.length})</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          JSON.stringify(selectedReport.recent_logs, null, 2)
                        );
                        showToast('Error log berhasil disalin ke clipboard');
                      }}
                      className="text-[10px] text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <Copy size={11} />
                      <span>Salin Raw Log</span>
                    </button>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl text-rose-300 font-mono text-[10px] overflow-x-auto max-h-48">
                    <pre>{JSON.stringify(selectedReport.recent_logs, null, 2)}</pre>
                  </div>
                </div>
              )}

              {/* Tangkapan Layar Attachment */}
              {selectedReport.screenshot_data && (
                <div className="space-y-1.5">
                  <div className="font-bold text-slate-700">Tangkapan Layar Lampiran</div>
                  <div className="border border-slate-200 rounded-xl p-2 bg-slate-100 flex items-center justify-center">
                    <img
                      src={selectedReport.screenshot_data}
                      alt="Bukti Bug"
                      className="max-h-72 object-contain rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Catatan Admin */}
              <div className="space-y-1.5 pt-2">
                <div className="font-bold text-slate-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                  <span>Catatan Investigasi Admin</span>
                </div>
                <div className="flex gap-2">
                  <textarea
                    rows={2}
                    value={adminNotesInput}
                    onChange={(e) => setAdminNotesInput(e.target.value)}
                    placeholder="Tuliskan catatan teknis atau status perbaikan tim internal di sini..."
                    className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400"
                  />
                  <button
                    onClick={handleSaveNotes}
                    className="px-4 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-bold rounded-xl text-xs transition cursor-pointer shrink-0"
                  >
                    Simpan Catatan
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200 shrink-0 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Ubah Status:</span>
                <select
                  value={selectedReport.status}
                  onChange={(e) => handleStatusChange(selectedReport.id, e.target.value as BugStatus)}
                  className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 border border-slate-300 text-slate-800 cursor-pointer"
                >
                  <option value="open">Menunggu (Open)</option>
                  <option value="in_progress">Sedang Dikerjakan</option>
                  <option value="resolved">Telah Selesai</option>
                  <option value="closed">Ditutup</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopySinglePrompt(selectedReport)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition shadow-xs cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-100" />
                  <span>Salin Prompt untuk Antigravity</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedReport(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
