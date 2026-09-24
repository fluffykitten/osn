import React, { useState, useEffect } from 'react';
import {
  School,
  Users,
  Search,
  Trash2,
  Edit,
  RefreshCw,
  X,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  UserCheck,
  Layers,
} from 'lucide-react';
import { classroomService } from '../../services/classroomService';
import { adminService } from '../../services/adminService';
import type { Classroom, ClassroomMember, Profile } from '../../types/database';

export const AdminClassroomManagement: React.FC = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [teachers, setTeachers] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modal states
  const [selectedClass, setSelectedClass] = useState<Classroom | null>(null);
  const [classMembers, setClassMembers] = useState<ClassroomMember[]>([]);
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Edit form state
  const [editName, setEditName] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editCode, setEditCode] = useState('');
  const [editTeacherId, setEditTeacherId] = useState('');

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [allClass, allUsers] = await Promise.all([
        classroomService.getAllClassrooms(),
        adminService.getAllUsers('', 'teacher'),
      ]);
      setClassrooms(allClass);
      setTeachers(allUsers);
    } catch (e) {
      console.warn('Gagal memuat data kelas:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // View Members
  const handleOpenMembers = async (cls: Classroom) => {
    setSelectedClass(cls);
    setIsMembersModalOpen(true);
    try {
      const members = await classroomService.getClassroomMembers(cls.id);
      setClassMembers(members);
    } catch {
      setClassMembers([]);
    }
  };

  // Open Edit
  const handleOpenEdit = (cls: Classroom) => {
    setSelectedClass(cls);
    setEditName(cls.name);
    setEditDesc(cls.description || '');
    setEditCode(cls.code);
    setEditTeacherId(cls.teacher_id);
    setIsEditModalOpen(true);
  };

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass || !editName.trim()) return;

    setIsSubmitting(true);
    try {
      await classroomService.adminUpdateClassroom(selectedClass.id, {
        name: editName.trim(),
        description: editDesc.trim(),
        code: editCode.trim().toUpperCase(),
        teacher_id: editTeacherId,
      });

      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'CLASSROOM_UPDATED',
        target_resource: `classrooms/${selectedClass.id}`,
        description: `Memperbarui informasi kelas: "${editName.trim()}" (${editCode.trim().toUpperCase()})`,
      });

      showNotification('success', `Informasi kelas "${editName}" berhasil diperbarui!`);
      setIsEditModalOpen(false);
      await loadData();
    } catch (err: any) {
      showNotification('error', err?.message || 'Gagal menyimpan perubahan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Class
  const handleDeleteClass = async () => {
    if (!selectedClass) return;

    setIsSubmitting(true);
    try {
      await classroomService.adminDeleteClassroom(selectedClass.id);
      await adminService.logAction({
        actor_id: 'admin-master-uuid',
        actor_email: 'fluffykitten.dev@gmail.com',
        action_type: 'CLASSROOM_DELETED',
        target_resource: `classrooms/${selectedClass.id}`,
        description: `Menghapus kelas "${selectedClass.name}" (Kode: ${selectedClass.code}) secara permanen`,
      });

      showNotification('success', `Kelas "${selectedClass.name}" berhasil dihapus.`);
      setIsDeleteModalOpen(false);
      setSelectedClass(null);
      await loadData();
    } catch (err: any) {
      showNotification('error', err?.message || 'Gagal menghapus kelas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredClassrooms = classrooms.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`p-3.5 rounded-xl text-xs font-semibold flex items-center justify-between border shadow-xs animate-in fade-in ${
            notification.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
          <button onClick={() => setNotification(null)} className="p-1 text-slate-500 hover:text-slate-800">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono">
              ALL CLASSROOMS
            </span>
            <span className="text-xs text-slate-500">Total {classrooms.length} Kelas Binaan Aktif</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">
            Pengawasan & Manajemen Seluruh Kelas
          </h1>
        </div>

        <button
          onClick={loadData}
          disabled={isLoading}
          className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition cursor-pointer shadow-2xs self-start sm:self-auto"
          title="Segarkan daftar kelas"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Search Input */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berdasarkan nama kelas, kode aktivasi, atau deskripsi..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-800 transition"
          />
        </div>
      </div>

      {/* Classrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full py-16 text-center text-slate-400">
            <div className="inline-block w-6 h-6 border-2 border-slate-400 border-t-transparent rounded-full animate-spin mb-2" />
            <div>Memuat seluruh kelas platform...</div>
          </div>
        ) : filteredClassrooms.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-400">
            Tidak ada kelas yang sesuai dengan kata kunci pencarian.
          </div>
        ) : (
          filteredClassrooms.map((cls) => {
            const teacherProfile = teachers.find((t) => t.id === cls.teacher_id);
            return (
              <div
                key={cls.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1">{cls.name}</h3>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Pembina:{' '}
                      <span className="text-slate-800 font-medium">
                        {cls.teacher_name || teacherProfile?.full_name || 'Dr. Hendra Wijaya, M.Si.'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {cls.description || 'Tidak ada deskripsi kurikulum tambahan.'}
                  </p>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center gap-1.5 font-mono text-slate-800 font-bold tracking-wider">
                      <span>{cls.code}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(cls.code)}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer transition"
                      title="Salin Kode Kelas"
                    >
                      {copiedCode === cls.code ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-600" />
                      <span>{cls.member_count ?? 1} Siswa</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-slate-600" />
                      <span>{cls.assignment_count ?? 0} Worksheet</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => handleOpenMembers(cls)}
                      className="flex-1 py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1.5 border border-slate-200"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-slate-600" />
                      <span>Daftar Siswa</span>
                    </button>

                    <button
                      onClick={() => handleOpenEdit(cls)}
                      className="p-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition cursor-pointer"
                      title="Edit Informasi Kelas"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedClass(cls);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition cursor-pointer"
                      title="Hapus Kelas Ini"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* MODAL 1: DAFTAR SISWA DALAM KELAS */}
      {isMembersModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Anggota Kelas: {selectedClass.name}</h3>
                <span className="text-[10px] text-slate-500 font-mono">Kode Kelas: {selectedClass.code}</span>
              </div>
              <button
                onClick={() => setIsMembersModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
              {classMembers.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-400">
                  Belum ada siswa yang mendaftar pada kelas ini.
                </div>
              ) : (
                classMembers.map((m) => (
                  <div key={m.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-slate-900">{m.student_name || 'Siswa OSN'}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{m.student_email}</div>
                    </div>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                        m.status === 'active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : m.status === 'pending_approval'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {m.status.toUpperCase()}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-2 flex justify-end border-t border-slate-100">
              <button
                onClick={() => setIsMembersModalOpen(false)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: EDIT DETAIL KELAS */}
      {isEditModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Edit Kelas Binaan</h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Nama Kelas</label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Kode Kelas</label>
                <input
                  type="text"
                  required
                  value={editCode}
                  onChange={(e) => setEditCode(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono font-bold focus:outline-none focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Guru Pembina Bertanggung Jawab</label>
                <select
                  value={editTeacherId}
                  onChange={(e) => setEditTeacherId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                >
                  <option value="teacher-demo-uuid">Dr. Hendra Wijaya, M.Si. (guru@osnkimia.id)</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.full_name} ({t.email})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Deskripsi Silabus</label>
                <textarea
                  rows={3}
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: DELETE CLASSROOM */}
      {isDeleteModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95 text-xs">
            <h3 className="font-bold text-rose-600 text-sm">Hapus Kelas Binaan</h3>
            <p className="text-slate-600 leading-relaxed">
              Apakah Anda yakin ingin menghapus kelas <strong className="text-slate-900">"{selectedClass.name}"</strong> (
              Kode: {selectedClass.code})? Seluruh keanggotaan siswa dan penugasan pada kelas ini akan dilepas.
            </p>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-semibold cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteClass}
                disabled={isSubmitting}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-semibold transition shadow cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Menghapus...' : 'Hapus Kelas'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
