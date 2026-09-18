import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  Plus,
  ArrowRight,
  BookOpen,
  FileText,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  ShieldCheck,
  School,
  Search,
  Filter,
  Monitor,
  Clock,
  X,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import type { Classroom } from '../../types/database';

export const ClassroomManager: React.FC = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const teacherId = user?.id || 'teacher-demo-uuid';

  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'ALL' | 'OSK' | 'OSP' | 'OSN' | 'ICHO'>('ALL');
  const [pendingCountMap, setPendingCountMap] = useState<Record<number, number>>({});

  // Projector Mode
  const [projectorClass, setProjectorClass] = useState<Classroom | null>(null);

  // Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [newClassDesc, setNewClassDesc] = useState('');
  const [targetTier, setTargetTier] = useState('OSN Tingkat Nasional');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const loadClassrooms = async () => {
    setIsLoading(true);
    try {
      const list = await classroomService.getTeacherClassrooms(teacherId);
      setClassrooms(list);

      // Hitung siswa pending approval per kelas
      const pMap: Record<number, number> = {};
      for (const cls of list) {
        const members = await classroomService.getClassroomMembers(cls.id);
        const count = members.filter((m) => m.status === 'pending_approval').length;
        if (count > 0) {
          pMap[cls.id] = count;
        }
      }
      setPendingCountMap(pMap);
    } catch (e) {
      console.error('Gagal memuat daftar kelas:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadClassrooms();
  }, [teacherId]);

  // Handle ESC key to close projector
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && projectorClass) {
        setProjectorClass(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projectorClass]);

  const handleCreateClassroom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;

    setIsSubmitting(true);
    try {
      const formattedDesc = newClassDesc.trim()
        ? `[Tingkat: ${targetTier}] ${newClassDesc.trim()}`
        : `[Tingkat: ${targetTier}] Kelas persiapan dan bimbingan silabus OSN Kimia.`;
      const created = await classroomService.createClassroom(teacherId, newClassName.trim(), formattedDesc);
      setIsCreateModalOpen(false);
      setNewClassName('');
      setNewClassDesc('');
      await loadClassrooms();
      navigate(`/teacher/classes/${created.id}`);
    } catch (e) {
      console.error('Gagal membuat kelas:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteClassroom = async (id: number, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Apakah Anda yakin ingin menghapus kelas "${name}"?`)) {
      await classroomService.deleteClassroom(id);
      await loadClassrooms();
    }
  };

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleOpenProjector = (cls: Classroom, e: React.MouseEvent) => {
    e.stopPropagation();
    setProjectorClass(cls);
  };

  const filteredClassrooms = classrooms.filter((cls) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || cls.name.toLowerCase().includes(q) || cls.code.toLowerCase().includes(q);
    const desc = (cls.description || '').toUpperCase();
    const name = cls.name.toUpperCase();
    const matchesLevel =
      levelFilter === 'ALL' ||
      name.includes(levelFilter) ||
      desc.includes(levelFilter) ||
      (levelFilter === 'ICHO' && (name.includes('ICHO') || desc.includes('ICHO') || desc.includes('PELATNAS')));
    return matchesQuery && matchesLevel;
  });

  const totalStudents = classrooms.reduce((sum, c) => sum + (c.member_count || 0), 0);
  const totalAssignments = classrooms.reduce((sum, c) => sum + (c.assignment_count || 0), 0);
  const totalPending = Object.values(pendingCountMap).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded uppercase font-mono">
              Classroom Management
            </span>
            <span className="text-xs text-slate-500">Kelas Binaan Pembina OSN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Manajemen Kelas Binaan
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Kelola kelompok belajar siswa, tampilkan kode proyektor, kelola persetujuan anggota, dan bagikan lembar kerja terarah.
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>+ Buat Kelas Baru</span>
        </button>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Total Kelas Aktif</span>
            <School className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">{classrooms.length} Kelas</div>
          <div className="text-[11px] text-slate-500">Kelompok binaan aktif</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Total Siswa Terdaftar</span>
            <Users className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">{totalStudents} Siswa</div>
          <div className="text-[11px] text-emerald-600 font-medium">Terhubung via email & kode</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Worksheet Terdistribusi</span>
            <FileText className="w-4 h-4 text-sky-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">{totalAssignments} Penugasan</div>
          <div className="text-[11px] text-sky-600 font-medium">Tugas aktif ke kelas</div>
        </div>

        <div
          className={`p-5 rounded-2xl border shadow-2xs space-y-2 transition-all ${
            totalPending > 0
              ? 'bg-amber-50/80 border-amber-300 text-amber-950'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Menunggu Persetujuan</span>
            <Clock className={`w-4 h-4 ${totalPending > 0 ? 'text-amber-600 animate-pulse' : 'text-slate-400'}`} />
          </div>
          <div className={`text-2xl font-bold font-mono ${totalPending > 0 ? 'text-amber-700' : 'text-slate-900'}`}>
            {totalPending} Siswa
          </div>
          <div className={`text-[11px] font-medium ${totalPending > 0 ? 'text-amber-700' : 'text-slate-500'}`}>
            {totalPending > 0 ? 'Ada siswa menunggu approval' : 'Semua siswa terverifikasi'}
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kelas berdasarkan nama atau kode..."
            className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Level Filter Chips */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-500 font-semibold mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Jenjang:</span>
          </span>
          {(
            [
              { key: 'ALL', label: 'Semua' },
              { key: 'OSK', label: 'Kabupaten (OSK)' },
              { key: 'OSP', label: 'Provinsi (OSP)' },
              { key: 'OSN', label: 'Nasional (OSN)' },
              { key: 'ICHO', label: 'Pelatnas IChO' },
            ] as const
          ).map((lvl) => (
            <button
              key={lvl.key}
              onClick={() => setLevelFilter(lvl.key)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                levelFilter === lvl.key
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Classroom Grid */}
      {isLoading ? (
        <div className="text-center py-16">
          <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs text-slate-500 font-mono">Memuat data kelas binaan...</p>
        </div>
      ) : filteredClassrooms.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <School className="w-7 h-7" />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h3 className="text-base font-bold text-slate-900 font-display">
              {searchQuery || levelFilter !== 'ALL'
                ? 'Tidak Ada Kelas yang Cocok'
                : 'Belum Ada Kelas Binaan'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {searchQuery || levelFilter !== 'ALL'
                ? 'Coba sesuaikan kata kunci pencarian atau reset filter jenjang target di atas.'
                : 'Mulai buat kelompok belajar untuk menampung siswa bimbingan OSN Anda, undang mereka melalui email, dan bagikan lembar kerja secara terarah.'}
            </p>
          </div>
          {searchQuery || levelFilter !== 'ALL' ? (
            <button
              onClick={() => {
                setSearchQuery('');
                setLevelFilter('ALL');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all"
            >
              Reset Filter Pencarian
            </button>
          ) : (
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Buat Kelas Pertama Sekarang</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClassrooms.map((cls) => {
            const pendingCount = pendingCountMap[cls.id] || 0;
            return (
              <div
                key={cls.id}
                onClick={() => navigate(`/teacher/classes/${cls.id}`)}
                className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all p-5 flex flex-col justify-between group cursor-pointer relative"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {cls.name}
                        </h3>
                        {pendingCount > 0 && (
                          <span className="animate-pulse px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-300 rounded-full text-[10px] font-bold shrink-0">
                            {pendingCount} Menunggu
                          </span>
                        )}
                      </div>

                      {/* Chip Kode Kelas Interaktif & Tombol Proyektor */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-bold border border-slate-200">
                          Kode: {cls.code}
                        </span>
                        <button
                          onClick={(e) => handleCopyCode(cls.code, e)}
                          className="p-1 text-slate-400 hover:text-slate-700 transition-colors rounded hover:bg-slate-100"
                          title="Salin Kode Kelas"
                        >
                          {copiedCode === cls.code ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={(e) => handleOpenProjector(cls, e)}
                          className="p-1 text-slate-400 hover:text-indigo-600 transition-colors rounded hover:bg-indigo-50 flex items-center gap-1 text-[10px] font-semibold"
                          title="Tampilkan Mode Proyektor"
                        >
                          <Monitor className="w-3.5 h-3.5 text-indigo-500" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleDeleteClassroom(cls.id, cls.name, e)}
                      className="p-1.5 text-slate-300 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
                      title="Hapus Kelas"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {cls.description || 'Tidak ada deskripsi.'}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-indigo-500" />
                      <b>{cls.member_count || 0}</b> Siswa
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-sky-500" />
                      <b>{cls.assignment_count || 0}</b> Tugas
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                    Kelola <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PROJECTOR MODE MODAL */}
      {projectorClass && (
        <div
          onClick={() => setProjectorClass(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-6 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full text-center space-y-6 animate-in zoom-in-95"
          >
            <div className="space-y-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                Mode Layar Proyektor Kelas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {projectorClass.name}
              </h2>
              <p className="text-sm text-slate-400">
                Tampilkan kode ini di layar proyektor kelas agar seluruh siswa dapat bergabung serentak.
              </p>
            </div>

            <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <button
                  onClick={(e) => handleCopyCode(projectorClass.code, e)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  {copiedCode === projectorClass.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                Kode Bergabung Kelas
              </p>
              <div className="font-mono text-6xl sm:text-8xl font-black text-amber-400 tracking-[0.2em] select-all py-2">
                {projectorClass.code}
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Siswa membuka menu <b>Masuk Kelas</b> dan memasukkan kode di atas untuk mendaftar.
              </p>
            </div>

            <button
              onClick={() => setProjectorClass(null)}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Tutup Tampilan Proyektor (ESC)
            </button>
          </div>
        </div>
      )}

      {/* Modal Buat Kelas Baru */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 font-display">
                Buat Kelas Binaan Baru
              </h3>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateClassroom} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Kelas / Kelompok Binaan
                </label>
                <input
                  type="text"
                  required
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="Contoh: Pelatnas OSN Kimia 2026 Tahap 1"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jenjang Target Olimpiade
                </label>
                <select
                  value={targetTier}
                  onChange={(e) => setTargetTier(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                >
                  <option value="OSK Tingkat Kabupaten">OSK - Tingkat Kabupaten / Kota</option>
                  <option value="OSP Tingkat Provinsi">OSP - Tingkat Provinsi</option>
                  <option value="OSN Tingkat Nasional">OSN - Tingkat Nasional</option>
                  <option value="Pelatnas IChO">Pelatnas IChO (Seleksi Tim Olimpiade Internasional)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Deskripsi / Keterangan Tambahan
                </label>
                <textarea
                  rows={3}
                  value={newClassDesc}
                  onChange={(e) => setNewClassDesc(e.target.value)}
                  placeholder="Tuliskan target silabus, jadwal pertemuan, atau cakupan materi kelas..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Menyimpan...' : 'Simpan & Buka Kelas'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
