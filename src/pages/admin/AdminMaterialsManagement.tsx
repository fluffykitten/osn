import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Edit3,
  Search,
  Layers,
  Clock,
  Atom,
  Flame,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { materialService } from '../../services/materialService';
import { useOsnPedagogyVersion, type OsnPedagogyVersion } from '../../services/materialPedagogyVersionService';

export const AdminMaterialsManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'osn' | 'sma'>('osn');
  const [osnMaterials, setOsnMaterials] = useState<any[]>([]);
  const [smaMaterials, setSmaMaterials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { version: pedagogyVersion, setVersion: setPedagogyVersion } = useOsnPedagogyVersion();
  const [versionFeedback, setVersionFeedback] = useState<string | null>(null);

  const loadMaterials = async (targetVersion?: OsnPedagogyVersion) => {
    setIsLoading(true);
    try {
      const v = targetVersion || pedagogyVersion;
      const [osn, sma] = await Promise.all([
        materialService.getOsnMaterials(v),
        materialService.getSmaMaterials(),
      ]);
      setOsnMaterials(osn);
      setSmaMaterials(sma);
    } catch (e) {
      console.warn('Gagal memuat materi:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMaterials(pedagogyVersion);
  }, [pedagogyVersion]);

  const handleSwitchVersion = (v: OsnPedagogyVersion) => {
    setPedagogyVersion(v);
    setVersionFeedback(
      v === 'revamped'
        ? 'Beralih ke Versi Revamp Pedagogis (4-Pilar: Intuisi & Formalisasi, Taktik Soal, Inkuiri, Ringkasan Cepat).'
        : 'Beralih ke Versi Tradisional (3-Tahap: Prasyarat, Konsep Inti, Contoh Soal).'
    );
    setTimeout(() => setVersionFeedback(null), 4000);
  };

  const currentList = activeTab === 'osn' ? osnMaterials : smaMaterials;
  const filteredList = currentList.filter(
    (m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono tracking-wider">
              SYLLABUS CONTENT CMS
            </span>
            <span className="text-xs text-slate-500 font-medium">10 Topik OSN & 16 Modul SMA</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Editor Materi Teori & Konsep Kimia
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Perbarui silabus konsep materi, notasi KaTeX, rumus baku, dan contoh soal yang tampil bagi siswa & guru.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-1 text-xs">
          <button
            onClick={() => setActiveTab('osn')}
            className={`px-3.5 py-1.5 rounded-md font-medium transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'osn'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Atom size={14} className="text-slate-700" />
            <span>10 Topik Silabus OSN</span>
          </button>
          <button
            onClick={() => setActiveTab('sma')}
            className={`px-3.5 py-1.5 rounded-md font-medium transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'sma'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Flame size={14} className="text-slate-700" />
            <span>16 Modul Kimia SMA</span>
          </button>
        </div>
      </div>

      {/* PEDAGOGY VERSION SWITCHER PANEL (HANYA MUNCUL DI TAB OSN) */}
      {activeTab === 'osn' && (
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 border border-indigo-900/60 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 rounded text-[10px] font-bold tracking-wider uppercase font-mono">
                  DUAL-PEDAGOGY ENGINE
                </span>
                <span className="text-xs text-indigo-200/80 font-medium">Pengaturan Versi Kurikulum OSN</span>
              </div>
              <h2 className="text-base font-bold text-white mt-1">
                Pilih Tipe & Alur Pedagogis Materi yang Digunakan
              </h2>
              <p className="text-xs text-indigo-200/80 mt-0.5">
                Pilih model pembelajaran yang ingin Anda bandingkan atau aktifkan untuk seluruh pengguna portal.
              </p>
            </div>

            {versionFeedback && (
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-medium animate-fadeIn">
                ✓ {versionFeedback}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {/* Opsi 1: Revamped 4-Pilar */}
            <div
              onClick={() => handleSwitchVersion('revamped')}
              className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                pedagogyVersion === 'revamped'
                  ? 'bg-indigo-600/25 border-indigo-400 ring-2 ring-indigo-400/50 shadow-inner'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-300" />
                  <span className="text-sm font-bold text-white">Versi Revamp Pedagogis (4-Pilar)</span>
                </div>
                {pedagogyVersion === 'revamped' ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    <CheckCircle2 size={12} /> Aktif Sekarang
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400 hover:text-white">Klik untuk Pilih</span>
                )}
              </div>
              <p className="text-xs text-indigo-100/90 leading-relaxed mb-3">
                Alur ketat olimpiade modern: <strong>Intuisi fisis mikroskopis</strong> disusul <strong>formalisasi matematis IUPAC</strong>, bedah <strong>Taktik Soal & Titik Rawan Kesalahan</strong>, <strong>Pengayaan Inkuiri Paradoks Kimia</strong> (Born-Haber & Kirchhoff), dan <strong>Ringkasan Cepat</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-indigo-300">
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-400/20">1. Intuisi & Formalisasi</span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-400/20">2. Taktik Soal</span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-400/20">3. Inkuiri Paradoks</span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-400/20">4. Ringkasan Cepat</span>
              </div>
            </div>

            {/* Opsi 2: Classic 3-Tahap */}
            <div
              onClick={() => handleSwitchVersion('classic')}
              className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                pedagogyVersion === 'classic'
                  ? 'bg-indigo-600/25 border-indigo-400 ring-2 ring-indigo-400/50 shadow-inner'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-300" />
                  <span className="text-sm font-bold text-white">Versi Tradisional (3-Tahap)</span>
                </div>
                {pedagogyVersion === 'classic' ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    <CheckCircle2 size={12} /> Aktif Sekarang
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400 hover:text-white">Klik untuk Pilih</span>
                )}
              </div>
              <p className="text-xs text-indigo-100/90 leading-relaxed mb-3">
                Alur modular konvensional: Membagi materi ke dalam <strong>Tahap 1: Prasyarat Fondasi</strong>, <strong>Tahap 2: Konsep Materi Inti</strong>, dan <strong>Tahap 3: Pembahasan Soal Standar Kompetisi</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15">Tahap 1: Prasyarat</span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15">Tahap 2: Konsep Inti</span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15">Tahap 3: Contoh Soal</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Cari topik materi ${activeTab.toUpperCase()}...`}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 transition"
          />
        </div>
      </div>

      {/* Materials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full py-16 text-center text-slate-500">
            <div className="inline-block w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-2" />
            <div className="text-xs">Memuat daftar materi silabus...</div>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-500 text-xs">
            Tidak ada materi yang cocok dengan pencarian Anda.
          </div>
        ) : (
          filteredList.map((m) => {
            const topicNum = m.topic_number || m.id;
            return (
              <div
                key={m.id}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] font-semibold">
                        {activeTab === 'osn' ? `Pilar ${topicNum}` : `Modul ${topicNum}`}
                      </span>
                      {m.pedagogy_version === 'revamped' && (
                        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-[9px] font-bold font-mono flex items-center gap-1">
                          <Sparkles size={10} /> 4-Pilar Revamped
                        </span>
                      )}
                    </div>
                    {m.isEdited && (
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold font-mono">
                        Sudah Diedit
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 text-base leading-snug line-clamp-2">{m.title}</h3>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      {m.category} • <span className="font-mono text-slate-700 font-semibold">{m.level || m.grade || 'OSN'}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {m.summary || 'Kajian komprehensif teori dan aplikasi soal kimia terstruktur.'}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-slate-400" />
                      <span>{m.readTimeMinutes || 25} Menit Baca</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers size={12} className="text-slate-400" />
                      <span>{(m.core_concepts?.length || 0) + (m.worked_examples?.length || 0)} Blok Konsep</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      to={`/admin/materials/${activeTab}/${m.id}/edit`}
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Edit3 size={13} />
                      <span>Edit Materi & KaTeX</span>
                    </Link>

                    <Link
                      to={`/materi/${activeTab === 'sma' ? 'sma/' : ''}${m.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
                      title="Buka Tampilan Siswa (Tab Baru)"
                    >
                      <span>Lihat</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
