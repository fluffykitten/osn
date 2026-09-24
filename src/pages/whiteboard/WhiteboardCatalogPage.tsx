import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  ArrowRight,
  Trash2,
  Share2,
  FileText,
  Infinity as InfinityIcon,
  Sparkles,
  BookOpen,
  Layout,
  Clock,
  ExternalLink,
} from 'lucide-react';
import type {
  WhiteboardDocument,
  CanvasLayoutMode,
  PageFormat,
  WhiteboardBackground,
} from '../../types/whiteboard';
import { PAGE_FORMATS } from '../../types/whiteboard';
import {
  getAllSavedDocuments,
  deleteDocumentLocally,
  saveDocumentLocally,
  STEM_TEMPLATE_PRESETS,
} from '../../services/whiteboardStorageService';
import { useAuth } from '../../contexts/AuthContext';

export const WhiteboardCatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isTeacher } = useAuth();

  const [savedDocs, setSavedDocs] = useState<WhiteboardDocument[]>([]);
  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Form State Modal Buat Baru
  const [newTitle, setNewTitle] = useState('Papan Tulis Tanpa Judul');
  const [newLayoutMode, setNewLayoutMode] = useState<CanvasLayoutMode>('infinite');
  const [newPageFormat, setNewPageFormat] = useState<PageFormat>('a4_portrait');
  const [newBg, setNewBg] = useState<WhiteboardBackground>('blank');

  // Load Papan Tulis Tersimpan
  const loadDocuments = async () => {
    const docs = await getAllSavedDocuments();
    setSavedDocs(docs);
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

  // Handle Buat Papan Tulis Baru
  const handleCreateNewDocument = async () => {
    const id = `doc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const formatConfig = PAGE_FORMATS[newPageFormat] || PAGE_FORMATS.a4_portrait;

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
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await saveDocumentLocally(newDoc);
    setIsCreateModalOpen(false);
    navigate(`/whiteboard/${id}`);
  };

  // Handle Klik Template Preset
  const handleSelectTemplate = async (presetId: string) => {
    const preset = STEM_TEMPLATE_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    const id = `doc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const formatConfig = PAGE_FORMATS[preset.pageFormat] || PAGE_FORMATS.a4_portrait;

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
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await saveDocumentLocally(newDoc);
    navigate(`/whiteboard/${id}`);
  };

  // Handle Hapus Papan Tulis
  const handleDeleteDoc = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Hapus papan tulis ini?')) {
      await deleteDocumentLocally(id);
      await loadDocuments();
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

  return (
    <div className="min-h-screen bg-[#F0F8FF] text-[#2D3748] pb-16">
      {/* Hero Header */}
      <div className="theme-hero-banner bg-gradient-to-r from-[#596A7A] via-[#708090] to-[#5C6D7D] text-[#FFFFF0] py-12 px-4 shadow-md border-b border-[#B0C4DE]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFF0]/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase mb-3 text-[#FFFFF0] border border-[#B0C4DE]/30">
              <Sparkles size={14} className="text-[#B0C4DE]" />
              <span>STEM Interactive Whiteboard</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#FFFFF0]">
              Papan Tulis Sains & Olimpiade
            </h1>
            <p className="text-[#F0F8FF]/90 text-sm md:text-base mt-2 max-w-xl">
              Ruang belajar interaktif Kimia, Fisika, Biologi, dan Matematika dengan instrumen presisi, kolaborasi realtime guru-siswa, serta kanvas fleksibel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 bg-[#FFFFF0] text-[#708090] hover:bg-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95 border border-[#D3D3D3]"
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
                className="px-4 py-3 bg-white/10 hover:bg-white/15 focus:bg-[#FFFFF0] text-white focus:text-[#2D3748] placeholder-[#B0C4DE] focus:placeholder-slate-400 border border-[#B0C4DE]/30 rounded-2xl text-xs font-mono font-bold tracking-wider uppercase transition focus:outline-none w-36"
              />
              <button
                type="submit"
                disabled={!roomCodeInput.trim()}
                className="px-4 py-3 bg-[#B0C4DE] hover:bg-[#9CB3D0] disabled:opacity-40 text-[#2D3748] rounded-2xl font-bold text-xs flex items-center gap-1 transition shadow-sm"
              >
                <span>Gabung</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 space-y-10">
        {/* Template Prasetel Mata Pelajaran STEM */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Template Cepat Sains & Matematika</h2>
              <p className="text-xs text-slate-500">Mulai langsung dengan latar dan struktur khusus subjek</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {STEM_TEMPLATE_PRESETS.map((p) => (
              <div
                key={p.id}
                onClick={() => handleSelectTemplate(p.id)}
                className="group relative bg-white rounded-2xl border border-slate-200 p-4 hover:border-blue-500 hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        p.subject === 'Kimia'
                          ? 'bg-emerald-100 text-emerald-700'
                          : p.subject === 'Fisika'
                          ? 'bg-amber-100 text-amber-700'
                          : p.subject === 'Biologi'
                          ? 'bg-rose-100 text-rose-700'
                          : p.subject === 'Matematika'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {p.subject}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      {p.thumbnailBadge}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{p.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Buka Template</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daftar Papan Tulis Tersimpan Milik Pengguna */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Papan Tulis Tersimpan</h2>
              <p className="text-xs text-slate-500">
                Tersimpan aman di penyimpanan lokal peramban & Cloudflare R2
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-full">
              {savedDocs.length} Papan Tulis
            </span>
          </div>

          {savedDocs.length === 0 ? (
            <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <FileText size={32} />
              </div>
              <h3 className="font-bold text-slate-800 text-base">Belum Ada Papan Tulis</h3>
              <p className="text-xs text-slate-500 max-w-sm mt-1 mb-5">
                Mulai membuat catatan atau penjelasan sains pertamamu dengan menekan tombol buat di bawah.
              </p>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition"
              >
                Buat Papan Tulis Baru
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {savedDocs.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => navigate(`/whiteboard/${doc.id}`)}
                  className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition cursor-pointer p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        {doc.layoutMode === 'infinite' ? (
                          <>
                            <InfinityIcon size={12} /> Infinite
                          </>
                        ) : (
                          <>
                            <FileText size={12} /> {doc.pages.length} Halaman A4
                          </>
                        )}
                      </span>

                      <button
                        onClick={(e) => handleDeleteDoc(doc.id, e)}
                        className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition opacity-0 group-hover:opacity-100"
                        title="Hapus"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition line-clamp-1">
                      {doc.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2">
                      <Clock size={12} />
                      <span>
                        Diperbarui {new Date(doc.updatedAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-blue-600">
                    <span>Buka Kanvas</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* MODAL BUAT PAPAN TULIS BARU (PILIH INFINITE VS PAGINATED) */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 w-full max-w-lg text-slate-800">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Buat Papan Tulis Baru</h3>
            <p className="text-xs text-slate-500 mb-4">
              Konfigurasikan judul dan mode kanvas sesuai kebutuhan belajar mengajar
            </p>

            <div className="space-y-4">
              {/* Judul */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Judul Papan Tulis
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Contoh: Pembahasan Soal OSN Kimia 2024"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Pilihan Mode Kanvas: Infinite vs Paginated */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Pilih Mode Tata Letak Kanvas
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNewLayoutMode('infinite')}
                    className={`p-3.5 rounded-2xl border-2 text-left flex flex-col transition ${
                      newLayoutMode === 'infinite'
                        ? 'border-blue-600 bg-blue-50/60 text-blue-950 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs text-blue-700 font-extrabold mb-1">
                      <InfinityIcon size={16} /> Infinite Canvas
                    </div>
                    <span className="text-[11px] font-normal text-slate-500">
                      Kanvas bebas tanpa batas, pan & zoom bebas untuk mind-mapping
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNewLayoutMode('paginated')}
                    className={`p-3.5 rounded-2xl border-2 text-left flex flex-col transition ${
                      newLayoutMode === 'paginated'
                        ? 'border-blue-600 bg-blue-50/60 text-blue-950 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs text-blue-700 font-extrabold mb-1">
                      <FileText size={16} /> Multi-Halaman (A4)
                    </div>
                    <span className="text-[11px] font-normal text-slate-500">
                      Ukuran tetap rapi, halaman bertambah otomatis saat scroll ke bawah
                    </span>
                  </button>
                </div>
              </div>

              {/* Format Halaman (khusus mode Paginated) */}
              {newLayoutMode === 'paginated' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Ukuran & Format Kertas
                  </label>
                  <select
                    value={newPageFormat}
                    onChange={(e) => setNewPageFormat(e.target.value as PageFormat)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value="a4_portrait">A4 Tegak (Portrait) - Standar Modul</option>
                    <option value="a4_landscape">A4 Lebar (Landscape)</option>
                    <option value="widescreen_16_9">Widescreen 16:9 Presentasi</option>
                  </select>
                </div>
              )}

              {/* Latar Belakang */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Pola Latar Belakang
                </label>
                <div className="grid grid-cols-3 gap-2">
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
                      className={`p-2 rounded-xl text-xs font-semibold border transition ${
                        newBg === b.id
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
              >
                Batal
              </button>
              <button
                onClick={handleCreateNewDocument}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition active:scale-95"
              >
                Mulai Menggambar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
