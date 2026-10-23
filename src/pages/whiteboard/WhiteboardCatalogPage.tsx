import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  ArrowRight,
  Trash2,
  FileText,
  Infinity as InfinityIcon,
  Sparkles,
  Clock,
  Download,
  Copy,
  Search,
  Image as ImageIcon,
  Loader2,
  Calendar,
  Cloud,
  X,
  SlidersHorizontal,
  ChevronDown,
  AlertTriangle,
  FileCheck2,
} from 'lucide-react';
import type {
  WhiteboardDocument,
  CanvasLayoutMode,
  PageFormat,
  WhiteboardBackground,
  WhiteboardTemplatePreset,
} from '../../types/whiteboard';
import { PAGE_FORMATS } from '../../types/whiteboard';
import {
  getAllSavedDocuments,
  deleteDocumentLocally,
  saveDocumentLocally,
  duplicateDocumentLocally,
  STEM_TEMPLATE_PRESETS,
} from '../../services/whiteboardStorageService';
import {
  exportWhiteboardToImage,
  exportWhiteboardToPdf,
  triggerFileDownload,
} from '../../services/whiteboardExportService';
import { WhiteboardExportModal } from '../../components/whiteboard/WhiteboardExportModal';
import { useAuth } from '../../contexts/AuthContext';

// Background Pattern Display Labels
const BACKGROUND_LABELS: Record<WhiteboardBackground, string> = {
  blank: 'Polos Putih',
  chalkboard: 'Papan Hitam',
  grid: 'Grid Milimeter',
  lined: 'Bergaris',
  dots: 'Kisi Titik',
  cartesian: 'Kartesius X-Y',
};

// Helper Format Tanggal Indonesia
function formatDateIndo(isoString?: string): string {
  if (!isoString) return '-';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '-';
  }
}

// Helper Format Tanggal + Jam Indonesia
function formatDateTimeIndo(isoString?: string): string {
  if (!isoString) return '-';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '-';
    const datePart = d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    const timePart = d.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${datePart}, ${timePart} WIB`;
  } catch {
    return '-';
  }
}

// Helper Waktu Relatif
function formatRelativeTime(isoString?: string): string {
  if (!isoString) return '';
  try {
    const diff = Date.now() - new Date(isoString).getTime();
    if (isNaN(diff) || diff < 0) return 'Baru saja';
    const mins = Math.floor(diff / (1000 * 60));
    if (mins < 1) return 'Baru saja';
    if (mins < 60) return `${mins} mnt lalu`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Kemarin';
    if (days < 7) return `${days} hari lalu`;
    return '';
  } catch {
    return '';
  }
}

interface DropdownMenuState {
  doc: WhiteboardDocument;
  top: number;
  right: number;
}

export const WhiteboardCatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // State Dokumen Tersimpan
  const [savedDocs, setSavedDocs] = useState<WhiteboardDocument[]>([]);
  const [isLoadingDocs, setIsLoadingDocs] = useState(true);
  const [roomCodeInput, setRoomCodeInput] = useState('');

  // State Filter & Pencarian
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutFilter, setLayoutFilter] = useState<'all' | 'infinite' | 'paginated'>('all');
  const [sortBy, setSortBy] = useState<'updated_desc' | 'created_desc' | 'title_asc'>('updated_desc');

  // State Modal Buat Papan Tulis
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createModalTab, setCreateModalTab] = useState<'templates' | 'custom'>('templates');
  const [templateSubjectFilter, setTemplateSubjectFilter] = useState<string>('Semua');

  // Form State Kanvas Kustom
  const [newTitle, setNewTitle] = useState('Papan Tulis Tanpa Judul');
  const [newLayoutMode, setNewLayoutMode] = useState<CanvasLayoutMode>('infinite');
  const [newPageFormat, setNewPageFormat] = useState<PageFormat>('a4_portrait');
  const [newBg, setNewBg] = useState<WhiteboardBackground>('blank');

  // State Aksi Ekspor Cepat
  const [activeExportDropdown, setActiveExportDropdown] = useState<DropdownMenuState | null>(null);
  const [exportingDocId, setExportingDocId] = useState<string | null>(null);
  const [exportSuccessMessage, setExportSuccessMessage] = useState<string | null>(null);
  const [exportTargetDoc, setExportTargetDoc] = useState<WhiteboardDocument | null>(null);

  // State Konfirmasi Hapus
  const [deleteTargetDoc, setDeleteTargetDoc] = useState<WhiteboardDocument | null>(null);

  // Tutup dropdown saat scrolling atau resize layar
  useEffect(() => {
    if (!activeExportDropdown) return;
    const closeDropdown = () => setActiveExportDropdown(null);
    window.addEventListener('scroll', closeDropdown, true);
    window.addEventListener('resize', closeDropdown);
    return () => {
      window.removeEventListener('scroll', closeDropdown, true);
      window.removeEventListener('resize', closeDropdown);
    };
  }, [activeExportDropdown]);

  // Muat Dokumen dari IndexedDB
  const loadDocuments = async () => {
    setIsLoadingDocs(true);
    try {
      const docs = await getAllSavedDocuments();
      setSavedDocs(docs);
    } catch (err) {
      console.error('Gagal memuat dokumen tersimpan:', err);
    } finally {
      setIsLoadingDocs(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) {
      navigate(`/whiteboard/room/${roomParam.toUpperCase()}`);
      return;
    }
    loadDocuments();
  }, [navigate]);

  // Handle Buat Kanvas Kustom
  const handleCreateCustomDocument = async () => {
    const id = `doc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const formatConfig = PAGE_FORMATS[newPageFormat] || PAGE_FORMATS.a4_portrait;
    const now = new Date().toISOString();

    const newDoc: WhiteboardDocument = {
      id,
      title: newTitle.trim() || 'Papan Tulis Baru',
      layoutMode: newLayoutMode,
      pageFormat: newPageFormat,
      backgroundType: newBg,
      pages: [
        {
          pageIndex: 0,
          width: formatConfig.width,
          height: formatConfig.height,
          topOffsetY: 0,
        },
      ],
      elements: [],
      createdAt: now,
      updatedAt: now,
    };

    await saveDocumentLocally(newDoc);
    setIsCreateModalOpen(false);
    navigate(`/whiteboard/${id}`);
  };

  // Handle Buat dari Template STEM
  const handleSelectTemplate = async (preset: WhiteboardTemplatePreset) => {
    const id = `doc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const formatConfig = PAGE_FORMATS[preset.pageFormat] || PAGE_FORMATS.a4_portrait;
    const now = new Date().toISOString();

    const newDoc: WhiteboardDocument = {
      id,
      title: preset.title,
      layoutMode: preset.layoutMode,
      pageFormat: preset.pageFormat,
      backgroundType: preset.backgroundType,
      pages: [
        {
          pageIndex: 0,
          width: formatConfig.width,
          height: formatConfig.height,
          topOffsetY: 0,
        },
      ],
      elements: [...preset.initialElements],
      createdAt: now,
      updatedAt: now,
    };

    await saveDocumentLocally(newDoc);
    setIsCreateModalOpen(false);
    navigate(`/whiteboard/${id}`);
  };

  // Handle Duplikat Papan Tulis
  const handleDuplicateDoc = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const duplicated = await duplicateDocumentLocally(id);
      if (duplicated) {
        await loadDocuments();
        showNotification('Papan tulis berhasil diduplikasi');
      }
    } catch (err) {
      console.error('Gagal menduplikasi papan tulis:', err);
      alert('Gagal menduplikasi papan tulis.');
    }
  };

  // Handle Hapus Papan Tulis
  const handleConfirmDelete = async () => {
    if (!deleteTargetDoc) return;
    try {
      await deleteDocumentLocally(deleteTargetDoc.id);
      setDeleteTargetDoc(null);
      await loadDocuments();
      showNotification('Papan tulis telah dihapus');
    } catch (err) {
      console.error('Gagal menghapus papan tulis:', err);
      alert('Gagal menghapus papan tulis.');
    }
  };

  // Handle Gabung Sesi Kode
  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    const code = roomCodeInput.trim().toUpperCase();
    if (code) {
      navigate(`/whiteboard/room/${code}`);
    }
  };

  // Handle Toggle Dropdown Ekspor Tunggal
  const handleToggleExportDropdown = (doc: WhiteboardDocument, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (activeExportDropdown?.doc.id === doc.id) {
      setActiveExportDropdown(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setActiveExportDropdown({
      doc,
      top: rect.bottom + 6,
      right: Math.max(16, window.innerWidth - rect.right),
    });
  };

  // Handle Aksi Cepat Ekspor Gambar PNG
  const handleQuickExportPng = async (doc: WhiteboardDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    setExportingDocId(doc.id);
    try {
      showNotification('Sedang merender gambar PNG...');
      const blob = await exportWhiteboardToImage(doc, 'image/png', 0.95, 2.0);
      triggerFileDownload(blob, `${doc.title || 'papan-tulis'}.png`);
      showNotification('Gambar PNG berhasil diunduh');
    } catch (err: any) {
      console.error('Gagal mengekspor gambar:', err);
      alert(`Gagal menghasilkan file gambar: ${err?.message || 'Terjadi kesalahan sistem'}`);
    } finally {
      setExportingDocId(null);
    }
  };

  // Handle Aksi Cepat Ekspor PDF
  const handleQuickExportPdf = async (doc: WhiteboardDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    setExportingDocId(doc.id);
    try {
      showNotification('Sedang menyusun dokumen PDF...');
      const blob = await exportWhiteboardToPdf(doc);
      triggerFileDownload(blob, `${doc.title || 'papan-tulis'}.pdf`);
      showNotification('Dokumen PDF berhasil diunduh');
    } catch (err: any) {
      console.error('Gagal mengekspor PDF:', err);
      alert(`Gagal menyusun dokumen PDF: ${err?.message || 'Terjadi kesalahan sistem'}`);
    } finally {
      setExportingDocId(null);
    }
  };

  // Tampilkan Notifikasi Sementara
  const showNotification = (msg: string) => {
    setExportSuccessMessage(msg);
    setTimeout(() => {
      setExportSuccessMessage(null);
    }, 3200);
  };

  // Buka Modal Ekspor Lengkap
  const handleOpenFullExport = (doc: WhiteboardDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    setExportTargetDoc(doc);
  };

  // Filter & Urutkan Dokumen Tersimpan
  const filteredAndSortedDocs = useMemo(() => {
    let result = [...savedDocs];

    // 1. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((d) => d.title.toLowerCase().includes(q));
    }

    // 2. Layout Filter
    if (layoutFilter !== 'all') {
      result = result.filter((d) => d.layoutMode === layoutFilter);
    }

    // 3. Sorting
    result.sort((a, b) => {
      if (sortBy === 'updated_desc') {
        const timeA = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const timeB = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return timeB - timeA;
      }
      if (sortBy === 'created_desc') {
        const timeA = new Date(a.createdAt || a.updatedAt || 0).getTime();
        const timeB = new Date(b.createdAt || b.updatedAt || 0).getTime();
        return timeB - timeA;
      }
      if (sortBy === 'title_asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return result;
  }, [savedDocs, searchQuery, layoutFilter, sortBy]);

  // Filter Templates berdasarkan Subject
  const filteredTemplates = useMemo(() => {
    if (templateSubjectFilter === 'Semua') return STEM_TEMPLATE_PRESETS;
    return STEM_TEMPLATE_PRESETS.filter((p) => p.subject === templateSubjectFilter);
  }, [templateSubjectFilter]);

  return (
    <div className="min-h-screen bg-[#F0F8FF] text-[#2D3748] pb-24 font-sans">
      {/* Toast Notifikasi Berhasil */}
      {exportSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-[#708090] text-[#FFFFF0] rounded-xl shadow-lg border border-[#B0C4DE]/40 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-200">
          <FileCheck2 size={16} className="text-[#FFFFF0]" />
          <span>{exportSuccessMessage}</span>
        </div>
      )}

      {/* Hero Header Serene Theme */}
      <header className="theme-hero-banner bg-gradient-to-r from-[#596A7A] via-[#708090] to-[#5C6D7D] text-[#FFFFF0] py-10 px-4 sm:px-6 shadow-sm border-b border-[#B0C4DE]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFF0]/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase mb-3 text-[#FFFFF0] border border-[#B0C4DE]/30">
              <Sparkles size={14} className="text-[#B0C4DE]" />
              <span>STEM Interactive Whiteboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#FFFFF0] font-display">
              Papan Tulis Sains & Olimpiade
            </h1>
            <p className="text-[#F0F8FF]/90 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
              Ruang belajar interaktif Kimia, Fisika, Biologi, dan Matematika dengan instrumen presisi, kolaborasi realtime guru-siswa, serta kanvas fleksibel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                setCreateModalTab('templates');
                setIsCreateModalOpen(true);
              }}
              className="px-5 py-2.5 bg-[#FFFFF0] text-[#708090] hover:bg-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition active:scale-95 border border-[#D3D3D3]"
            >
              <Plus size={18} />
              <span>Buat Papan Tulis</span>
            </button>

            {/* Input Gabung Kode Sesi */}
            <form onSubmit={handleJoinRoom} className="flex gap-2 w-full sm:w-auto">
              <input
                type="text"
                value={roomCodeInput}
                onChange={(e) => setRoomCodeInput(e.target.value)}
                placeholder="Kode STEM-XXXX"
                className="px-3.5 py-2.5 bg-white/10 hover:bg-white/15 focus:bg-[#FFFFF0] text-white focus:text-[#2D3748] placeholder-[#B0C4DE] focus:placeholder-slate-400 border border-[#B0C4DE]/30 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition focus:outline-none w-36"
              />
              <button
                type="submit"
                disabled={!roomCodeInput.trim()}
                className="px-4 py-2.5 bg-[#B0C4DE] hover:bg-[#9CB3D0] disabled:opacity-40 text-[#2D3748] rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition shadow-xs"
              >
                <span>Gabung</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 space-y-6">
        {/* Toolbar Header Papan Tulis Tersimpan */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl font-extrabold text-[#2D3748] font-display">
                  Papan Tulis Tersimpan
                </h2>
                <span className="text-xs font-mono font-bold text-[#708090] bg-[#FFFFF0] border border-[#D3D3D3] px-2.5 py-0.5 rounded-full">
                  {savedDocs.length} Papan Tulis
                </span>
              </div>
              <p className="text-xs text-[#708090] mt-0.5">
                Tersimpan aman di penyimpanan lokal peramban & Cloudflare R2
              </p>
            </div>

            {/* Quick Action Button for Mobile or Toolbar */}
            <button
              onClick={() => {
                setCreateModalTab('templates');
                setIsCreateModalOpen(true);
              }}
              className="sm:hidden w-full py-2 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition"
            >
              <Plus size={16} />
              <span>Buat Papan Tulis Baru</span>
            </button>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-[#FFFFF0] p-3 sm:p-4 rounded-2xl border border-[#D3D3D3] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#708090]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul papan tulis..."
                className="w-full pl-9 pr-8 py-2 bg-[#F0F8FF]/50 border border-[#D3D3D3] rounded-xl text-xs sm:text-sm text-[#2D3748] placeholder-[#708090]/60 focus:outline-none focus:border-[#708090] focus:bg-[#FFFFF0] transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
                  title="Bersihkan pencarian"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filters Controls */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              {/* Filter Tipe Kanvas */}
              <div className="flex items-center bg-[#F0F8FF] p-1 rounded-xl border border-[#D3D3D3] text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLayoutFilter('all')}
                  className={`px-3 py-1 rounded-lg transition ${
                    layoutFilter === 'all'
                      ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                      : 'text-[#708090] hover:text-[#2D3748]'
                  }`}
                >
                  Semua
                </button>
                <button
                  type="button"
                  onClick={() => setLayoutFilter('infinite')}
                  className={`px-3 py-1 rounded-lg transition ${
                    layoutFilter === 'infinite'
                      ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                      : 'text-[#708090] hover:text-[#2D3748]'
                  }`}
                >
                  Infinite
                </button>
                <button
                  type="button"
                  onClick={() => setLayoutFilter('paginated')}
                  className={`px-3 py-1 rounded-lg transition ${
                    layoutFilter === 'paginated'
                      ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                      : 'text-[#708090] hover:text-[#2D3748]'
                  }`}
                >
                  Multi-Halaman
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FFFFF0] border border-[#D3D3D3] text-[#2D3748] rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-[#708090] cursor-pointer"
                >
                  <option value="updated_desc">Urutkan: Terakhir Diubah</option>
                  <option value="created_desc">Urutkan: Tanggal Dibuat</option>
                  <option value="title_asc">Urutkan: Judul (A - Z)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed View - Table for Desktop & Structured Rows for Mobile */}
        {isLoadingDocs ? (
          <div className="bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] p-12 text-center flex flex-col items-center justify-center space-y-3 shadow-xs">
            <Loader2 size={28} className="text-[#708090] animate-spin" />
            <p className="text-xs font-semibold text-[#708090]">Memuat papan tulis tersimpan...</p>
          </div>
        ) : filteredAndSortedDocs.length === 0 ? (
          <div className="bg-[#FFFFF0] rounded-2xl border-2 border-dashed border-[#D3D3D3] p-12 text-center flex flex-col items-center shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#B0C4DE]/20 text-[#708090] flex items-center justify-center mb-3">
              <FileText size={28} />
            </div>
            <h3 className="font-extrabold text-[#2D3748] text-base font-display">
              {searchQuery || layoutFilter !== 'all'
                ? 'Tidak Ada Papan Tulis yang Sesuai'
                : 'Belum Ada Papan Tulis Tersimpan'}
            </h3>
            <p className="text-xs text-[#708090] max-w-sm mt-1 mb-5 leading-relaxed">
              {searchQuery || layoutFilter !== 'all'
                ? 'Coba atur ulang kata kunci pencarian atau filter tipe kanvas.'
                : 'Mulai membuat kanvas catatan olimpiade atau penjelasan materi sains pertamamu.'}
            </p>
            {searchQuery || layoutFilter !== 'all' ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setLayoutFilter('all');
                }}
                className="px-4 py-2 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3] rounded-xl text-xs font-bold transition shadow-xs"
              >
                Reset Filter
              </button>
            ) : (
              <button
                onClick={() => {
                  setCreateModalTab('templates');
                  setIsCreateModalOpen(true);
                }}
                className="px-5 py-2.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold shadow-xs transition"
              >
                Buat Papan Tulis Baru
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* DESKTOP DETAILED VIEW TABLE */}
            <div className="hidden md:block bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#B0C4DE]/15 border-b border-[#D3D3D3] text-[#708090] font-mono uppercase text-[10px] tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Judul & Motif Latar</th>
                      <th className="py-3.5 px-4 font-bold">Tipe & Format Kanvas</th>
                      <th className="py-3.5 px-4 font-bold">Dibuat</th>
                      <th className="py-3.5 px-4 font-bold">Terakhir Diperbarui</th>
                      <th className="py-3.5 px-4 font-bold text-right">Aksi Cepat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D3D3D3]/60">
                    {filteredAndSortedDocs.map((doc) => {
                      const isInfinite = doc.layoutMode === 'infinite';
                      const formatLabel =
                        PAGE_FORMATS[doc.pageFormat]?.label || 'A4 Tegak';
                      const bgLabel = BACKGROUND_LABELS[doc.backgroundType] || 'Polos';
                      const isExportingThis = exportingDocId === doc.id;
                      const isDropdownActive = activeExportDropdown?.doc.id === doc.id;

                      return (
                        <tr
                          key={doc.id}
                          onClick={() => navigate(`/whiteboard/${doc.id}`)}
                          className="hover:bg-[#F0F8FF]/80 transition-colors cursor-pointer group"
                        >
                          {/* 1. Judul & Motif */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-start gap-2.5">
                              <div className="mt-0.5 p-2 rounded-xl bg-[#B0C4DE]/25 text-[#708090] group-hover:bg-[#708090] group-hover:text-[#FFFFF0] transition shrink-0">
                                {isInfinite ? <InfinityIcon size={16} /> : <FileText size={16} />}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-extrabold text-[#2D3748] group-hover:text-[#708090] text-sm font-display line-clamp-1 transition">
                                    {doc.title}
                                  </span>
                                  {doc.r2PublicUrl && (
                                    <span
                                      title="Tersinkronisasi ke Cloud R2"
                                      className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-md"
                                    >
                                      <Cloud size={10} /> Cloud
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-[10px] font-mono text-[#708090] bg-[#B0C4DE]/20 px-2 py-0.5 rounded-md border border-[#B0C4DE]/40">
                                    Latar: {bgLabel}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-400">
                                    ID: {doc.id.substring(0, 11)}...
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* 2. Tipe & Format Kanvas */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            {isInfinite ? (
                              <div className="space-y-0.5">
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#B0C4DE]/30 text-[#2D3748] border border-[#B0C4DE]/60">
                                  <InfinityIcon size={12} /> Infinite Canvas
                                </span>
                                <p className="text-[10px] text-[#708090]">Kanvas bebas 2D</p>
                              </div>
                            ) : (
                              <div className="space-y-0.5">
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                                  <FileText size={12} /> {doc.pages?.length || 1} Halaman
                                </span>
                                <p className="text-[10px] text-[#708090]">{formatLabel}</p>
                              </div>
                            )}
                          </td>

                          {/* 3. Tanggal Dibuat */}
                          <td className="py-3.5 px-4 whitespace-nowrap text-[#708090] font-mono text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={12} className="text-[#708090]" />
                              <span>{formatDateTimeIndo(doc.createdAt || doc.updatedAt)}</span>
                            </div>
                          </td>

                          {/* 4. Terakhir Diperbarui */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1 text-[#2D3748] font-mono text-[11px] font-semibold">
                                <Clock size={12} className="text-[#708090]" />
                                <span>{formatDateTimeIndo(doc.updatedAt)}</span>
                              </div>
                              {formatRelativeTime(doc.updatedAt) && (
                                <span className="inline-block text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md">
                                  {formatRelativeTime(doc.updatedAt)}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* 5. Aksi Cepat (Tombol Ekspor Tunggal Dropdown) */}
                          <td
                            className="py-3.5 px-4 text-right whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Tombol Buka Kanvas */}
                              <button
                                onClick={() => navigate(`/whiteboard/${doc.id}`)}
                                className="px-3 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold transition shadow-2xs flex items-center gap-1 cursor-pointer"
                              >
                                <span>Buka</span>
                                <ArrowRight size={13} />
                              </button>

                              {/* Tombol Dropdown Ekspor Tunggal */}
                              <button
                                onClick={(e) => handleToggleExportDropdown(doc, e)}
                                disabled={isExportingThis}
                                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1 shadow-2xs cursor-pointer border ${
                                  isDropdownActive
                                    ? 'bg-[#708090] text-[#FFFFF0] border-[#708090]'
                                    : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] hover:text-[#2D3748] border-[#D3D3D3] hover:border-[#B0C4DE]'
                                }`}
                                title="Pilihan Ekspor (Gambar PNG / Dokumen PDF)"
                              >
                                {isExportingThis ? (
                                  <Loader2 size={13} className="animate-spin text-[#708090]" />
                                ) : (
                                  <Download size={13} />
                                )}
                                <span>Ekspor</span>
                                <ChevronDown
                                  size={12}
                                  className={`transition-transform duration-150 ${
                                    isDropdownActive ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {/* Tombol Duplikat */}
                              <button
                                onClick={(e) => handleDuplicateDoc(doc.id, e)}
                                className="p-1.5 text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] border border-transparent hover:border-[#D3D3D3] rounded-xl transition shadow-2xs cursor-pointer"
                                title="Duplikat Papan Tulis"
                              >
                                <Copy size={14} />
                              </button>

                              {/* Tombol Hapus */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDeleteTargetDoc(doc);
                                }}
                                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 rounded-xl transition shadow-2xs cursor-pointer"
                                title="Hapus Papan Tulis"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MOBILE & TABLET DETAILED ROW CARDS */}
            <div className="md:hidden space-y-3">
              {filteredAndSortedDocs.map((doc) => {
                const isInfinite = doc.layoutMode === 'infinite';
                const formatLabel =
                  PAGE_FORMATS[doc.pageFormat]?.label || 'A4 Tegak';
                const bgLabel = BACKGROUND_LABELS[doc.backgroundType] || 'Polos';
                const isExportingThis = exportingDocId === doc.id;
                const isDropdownActive = activeExportDropdown?.doc.id === doc.id;

                return (
                  <div
                    key={doc.id}
                    onClick={() => navigate(`/whiteboard/${doc.id}`)}
                    className="bg-[#FFFFF0] rounded-2xl border border-[#D3D3D3] p-4 shadow-xs transition hover:border-[#B0C4DE] cursor-pointer space-y-3"
                  >
                    {/* Header: Title & Badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-extrabold text-[#2D3748] text-sm font-display line-clamp-1">
                            {doc.title}
                          </span>
                          {doc.r2PublicUrl && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.2 rounded">
                              <Cloud size={9} /> Cloud
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-[#708090]">
                          <span className="font-mono bg-[#B0C4DE]/20 px-1.5 py-0.5 rounded border border-[#B0C4DE]/40">
                            Latar: {bgLabel}
                          </span>
                        </div>
                      </div>

                      {/* Layout badge */}
                      {isInfinite ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#B0C4DE]/30 text-[#2D3748] shrink-0 border border-[#B0C4DE]/60">
                          <InfinityIcon size={11} /> Infinite
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 shrink-0 border border-emerald-200">
                          <FileText size={11} /> {doc.pages?.length || 1} Hal
                        </span>
                      )}
                    </div>

                    {/* Metadata Grid (Tanpa Kolom Objek) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-[#708090] bg-[#F0F8FF]/60 p-2.5 rounded-xl border border-[#D3D3D3]/60">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-sans">Dibuat</div>
                        <div className="font-semibold text-[#2D3748] mt-0.5">
                          {formatDateIndo(doc.createdAt || doc.updatedAt)}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-sans">Diperbarui</div>
                        <div className="font-semibold text-[#2D3748] mt-0.5 flex items-center gap-1">
                          <span>{formatRelativeTime(doc.updatedAt) || formatDateIndo(doc.updatedAt)}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-sans">Format Kertas</div>
                        <div className="font-semibold text-[#2D3748] mt-0.5">
                          {isInfinite ? 'Kanvas Bebas' : formatLabel}
                        </div>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div
                      className="flex items-center justify-between gap-2 pt-1 border-t border-[#D3D3D3]/50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => navigate(`/whiteboard/${doc.id}`)}
                        className="flex-1 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <span>Buka</span>
                        <ArrowRight size={13} />
                      </button>

                      {/* Ekspor Mobile Dropdown Trigger */}
                      <button
                        onClick={(e) => handleToggleExportDropdown(doc, e)}
                        disabled={isExportingThis}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 shadow-2xs cursor-pointer border ${
                          isDropdownActive
                            ? 'bg-[#708090] text-[#FFFFF0] border-[#708090]'
                            : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border-[#D3D3D3]'
                        }`}
                      >
                        {isExportingThis ? (
                          <Loader2 size={13} className="animate-spin text-[#708090]" />
                        ) : (
                          <Download size={13} />
                        )}
                        <span>Ekspor</span>
                        <ChevronDown size={12} />
                      </button>

                      {/* Duplikat */}
                      <button
                        onClick={(e) => handleDuplicateDoc(doc.id, e)}
                        className="p-2 text-[#708090] bg-[#FFFFF0] border border-[#D3D3D3] rounded-xl shadow-2xs cursor-pointer"
                        title="Duplikat Papan Tulis"
                      >
                        <Copy size={13} />
                      </button>

                      {/* Hapus */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteTargetDoc(doc);
                        }}
                        className="p-2 text-red-500 bg-[#FFFFF0] border border-red-200 rounded-xl shadow-2xs cursor-pointer"
                        title="Hapus Papan Tulis"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* FLOATING DROPDOWN MENU EKSPOR (BEBAS CLIPPING TABEL) */}
      {activeExportDropdown && (
        <>
          <div
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setActiveExportDropdown(null)}
          />
          <div
            style={{
              position: 'fixed',
              top: `${activeExportDropdown.top}px`,
              right: `${activeExportDropdown.right}px`,
            }}
            className="w-56 bg-[#FFFFF0] border border-[#D3D3D3] rounded-2xl shadow-2xl z-50 p-1.5 text-left text-xs animate-in fade-in duration-100 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#708090] border-b border-[#D3D3D3]/60 mb-1">
              Pilihan Format Ekspor
            </div>

            {/* Opsi 1: Unduh Gambar PNG */}
            <button
              onClick={(e) => {
                const target = activeExportDropdown.doc;
                setActiveExportDropdown(null);
                handleQuickExportPng(target, e);
              }}
              className="w-full px-2.5 py-2 hover:bg-[#F0F8FF] rounded-xl flex items-center gap-2.5 text-[#2D3748] font-semibold transition text-left cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-[#B0C4DE]/30 text-[#708090] group-hover:bg-[#708090] group-hover:text-[#FFFFF0] transition shrink-0">
                <ImageIcon size={15} />
              </div>
              <div>
                <div className="text-xs font-bold text-[#2D3748]">Unduh Gambar (PNG)</div>
                <div className="text-[10px] text-[#708090] font-normal">
                  Resolusi tinggi 2x Retina
                </div>
              </div>
            </button>

            {/* Opsi 2: Unduh Dokumen PDF */}
            <button
              onClick={(e) => {
                const target = activeExportDropdown.doc;
                setActiveExportDropdown(null);
                handleQuickExportPdf(target, e);
              }}
              className="w-full px-2.5 py-2 hover:bg-[#F0F8FF] rounded-xl flex items-center gap-2.5 text-[#2D3748] font-semibold transition text-left cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition shrink-0">
                <FileText size={15} />
              </div>
              <div>
                <div className="text-xs font-bold text-[#2D3748]">Unduh Dokumen (PDF)</div>
                <div className="text-[10px] text-[#708090] font-normal">
                  {activeExportDropdown.doc.layoutMode === 'paginated'
                    ? `${activeExportDropdown.doc.pages?.length || 1} Halaman A4 cetak`
                    : 'Kanvas cetak A4 proporsional'}
                </div>
              </div>
            </button>

            <div className="border-t border-[#D3D3D3]/60 my-1" />

            {/* Opsi 3: Buka Modal Ekspor Lengkap */}
            <button
              onClick={(e) => {
                const target = activeExportDropdown.doc;
                setActiveExportDropdown(null);
                handleOpenFullExport(target, e);
              }}
              className="w-full px-2.5 py-1.5 hover:bg-[#F0F8FF] rounded-xl flex items-center gap-2 text-[#708090] hover:text-[#2D3748] font-medium transition text-left text-[11px] cursor-pointer"
            >
              <SlidersHorizontal size={13} />
              <span>Opsi Ekspor Lengkap (JPEG/SVG/R2)...</span>
            </button>
          </div>
        </>
      )}

      {/* MODAL BUAT PAPAN TULIS BARU (DENGAN PEMILIH TEMPLATE & KANVAS KUSTOM) */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#FFFFF0] rounded-3xl shadow-2xl border border-[#D3D3D3] p-6 w-full max-w-2xl text-[#2D3748] max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-[#D3D3D3]">
              <div>
                <h3 className="text-lg font-extrabold text-[#2D3748] font-display">
                  Buat Papan Tulis Baru
                </h3>
                <p className="text-xs text-[#708090] mt-0.5">
                  Pilih template siap pakai atau atur kanvas kustom sesuai kebutuhan
                </p>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-[#F0F8FF] transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center gap-2 mt-4 border-b border-[#D3D3D3] pb-2">
              <button
                type="button"
                onClick={() => setCreateModalTab('templates')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  createModalTab === 'templates'
                    ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                    : 'text-[#708090] hover:bg-[#F0F8FF]'
                }`}
              >
                <Sparkles size={14} />
                <span>Pilih Template STEM ({STEM_TEMPLATE_PRESETS.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setCreateModalTab('custom')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  createModalTab === 'custom'
                    ? 'bg-[#708090] text-[#FFFFF0] shadow-xs'
                    : 'text-[#708090] hover:bg-[#F0F8FF]'
                }`}
              >
                <SlidersHorizontal size={14} />
                <span>Kanvas Kustom Kosong</span>
              </button>
            </div>

            {/* Tab 1: Template STEM Prasetel */}
            {createModalTab === 'templates' && (
              <div className="mt-4 flex-1 overflow-y-auto pr-1 space-y-4">
                {/* Subject Filter Pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {['Semua', 'Kimia', 'Fisika', 'Biologi', 'Matematika', 'Umum'].map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setTemplateSubjectFilter(sub)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                        templateSubjectFilter === sub
                          ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs'
                          : 'bg-[#FFFFF0] border border-[#D3D3D3] text-[#708090] hover:bg-[#F0F8FF]'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                  {filteredTemplates.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectTemplate(p)}
                      className="group bg-[#FFFFF0] hover:bg-white rounded-2xl border border-[#D3D3D3] hover:border-[#708090] p-4 shadow-2xs hover:shadow-md transition cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                              p.subject === 'Kimia'
                                ? 'bg-emerald-100 text-emerald-800'
                                : p.subject === 'Fisika'
                                ? 'bg-amber-100 text-amber-800'
                                : p.subject === 'Biologi'
                                ? 'bg-rose-100 text-rose-800'
                                : p.subject === 'Matematika'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-[#B0C4DE]/30 text-[#2D3748]'
                            }`}
                          >
                            {p.subject}
                          </span>
                          <span className="text-[10px] font-mono font-semibold text-[#708090] bg-[#F0F8FF] px-2 py-0.5 rounded-md border border-[#D3D3D3]">
                            {p.thumbnailBadge}
                          </span>
                        </div>

                        <h4 className="font-bold text-sm text-[#2D3748] group-hover:text-[#708090] transition font-display">
                          {p.title}
                        </h4>
                        <p className="text-xs text-[#708090] mt-1 line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-[#D3D3D3]/60 flex items-center justify-between text-xs font-bold text-[#708090] group-hover:text-[#2D3748]">
                        <span>Gunakan Template Ini</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Kanvas Kustom Kosong */}
            {createModalTab === 'custom' && (
              <div className="mt-4 flex-1 overflow-y-auto pr-1 space-y-4">
                {/* Judul Papan Tulis */}
                <div>
                  <label className="text-xs font-bold text-[#2D3748] block mb-1">
                    Judul Papan Tulis
                  </label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Contoh: Pembahasan Soal OSN Kimia 2024"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFFFF0] border border-[#D3D3D3] focus:outline-none focus:border-[#708090] text-[#2D3748]"
                  />
                </div>

                {/* Mode Tata Letak Kanvas */}
                <div>
                  <label className="text-xs font-bold text-[#2D3748] block mb-1.5">
                    Pilih Mode Tata Letak Kanvas
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setNewLayoutMode('infinite')}
                      className={`p-3.5 rounded-2xl border-2 text-left flex flex-col transition cursor-pointer ${
                        newLayoutMode === 'infinite'
                          ? 'border-[#708090] bg-[#F0F8FF] text-[#2D3748] font-bold shadow-xs'
                          : 'border-[#D3D3D3] hover:bg-[#F0F8FF]/60 text-[#708090]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs text-[#708090] font-extrabold mb-1">
                        <InfinityIcon size={16} /> Infinite Canvas
                      </div>
                      <span className="text-[11px] font-normal text-[#708090]">
                        Kanvas bebas tanpa batas, pan & zoom bebas untuk sketsa rumus dan mind-mapping.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setNewLayoutMode('paginated')}
                      className={`p-3.5 rounded-2xl border-2 text-left flex flex-col transition cursor-pointer ${
                        newLayoutMode === 'paginated'
                          ? 'border-[#708090] bg-[#F0F8FF] text-[#2D3748] font-bold shadow-xs'
                          : 'border-[#D3D3D3] hover:bg-[#F0F8FF]/60 text-[#708090]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs text-[#708090] font-extrabold mb-1">
                        <FileText size={16} /> Multi-Halaman (A4)
                      </div>
                      <span className="text-[11px] font-normal text-[#708090]">
                        Format kertas rapi standar modul. Otomatis bertambah halaman saat scroll ke bawah.
                      </span>
                    </button>
                  </div>
                </div>

                {/* Format Kertas (Multi-Halaman) */}
                {newLayoutMode === 'paginated' && (
                  <div>
                    <label className="text-xs font-bold text-[#2D3748] block mb-1">
                      Ukuran & Format Kertas
                    </label>
                    <select
                      value={newPageFormat}
                      onChange={(e) => setNewPageFormat(e.target.value as PageFormat)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#D3D3D3] focus:outline-none focus:border-[#708090] bg-[#FFFFF0] text-[#2D3748] cursor-pointer"
                    >
                      <option value="a4_portrait">A4 Tegak (Portrait) - Standar Modul</option>
                      <option value="a4_landscape">A4 Lebar (Landscape)</option>
                      <option value="widescreen_16_9">Widescreen 16:9 Presentasi</option>
                    </select>
                  </div>
                )}

                {/* Pola Latar Belakang */}
                <div>
                  <label className="text-xs font-bold text-[#2D3748] block mb-1">
                    Pola Latar Belakang
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'blank', label: 'Polos Putih' },
                      { id: 'chalkboard', label: 'Papan Hitam' },
                      { id: 'grid', label: 'Grid Milimeter' },
                      { id: 'lined', label: 'Bergaris' },
                      { id: 'dots', label: 'Kisi Titik' },
                      { id: 'cartesian', label: 'Kartesius X-Y' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setNewBg(b.id as WhiteboardBackground)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                          newBg === b.id
                            ? 'border-[#708090] bg-[#F0F8FF] text-[#2D3748] shadow-2xs font-bold'
                            : 'border-[#D3D3D3] hover:bg-[#F0F8FF]/60 text-[#708090]'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons for Custom Canvas */}
                <div className="pt-3 border-t border-[#D3D3D3] flex items-center justify-end gap-2">
                  <button
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#708090] hover:bg-[#F0F8FF] rounded-xl transition cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleCreateCustomDocument}
                    className="px-5 py-2.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] rounded-xl text-xs font-bold shadow-xs transition active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Mulai Menggambar</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI HAPUS PAPAN TULIS */}
      {deleteTargetDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#FFFFF0] rounded-3xl shadow-2xl border border-[#D3D3D3] p-6 w-full max-w-sm text-[#2D3748]">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
              <AlertTriangle size={24} />
            </div>
            <h3 className="text-base font-extrabold text-[#2D3748] font-display">
              Hapus Papan Tulis?
            </h3>
            <p className="text-xs text-[#708090] mt-1 leading-relaxed">
              Apakah Anda yakin ingin menghapus{' '}
              <span className="font-bold text-[#2D3748]">"{deleteTargetDoc.title}"</span>? Tindakan
              ini akan menghapus data dari peramban dan tidak dapat dibatalkan.
            </p>

            <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-[#D3D3D3]">
              <button
                onClick={() => setDeleteTargetDoc(null)}
                className="px-4 py-2 text-xs font-semibold text-[#708090] hover:bg-[#F0F8FF] rounded-xl transition cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
              >
                Hapus Permanen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EKSPOR LENGKAP (SVG, HIGH-RES JPEG, R2 CLOUD) */}
      {exportTargetDoc && (
        <WhiteboardExportModal
          isOpen={!!exportTargetDoc}
          onClose={() => setExportTargetDoc(null)}
          document={exportTargetDoc}
        />
      )}
    </div>
  );
};
