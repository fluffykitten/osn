import React, { useState, useEffect } from 'react';
import {
  Users,
  UserPlus,
  Search,
  KeyRound,
  Ban,
  CheckCircle2,
  AlertCircle,
  X,
  RefreshCw,
  GraduationCap,
  ShieldCheck,
  Copy,
  Check,
  Mail,
  Send,
  ExternalLink,
  Clock,
  UserCheck,
  MailCheck,
  FileCode,
  Eye,
  Code,
  Sparkles,
} from 'lucide-react';
import { adminService, type CreateUserPayload } from '../../services/adminService';
import type { Profile } from '../../types/database';
import {
  generateActivationEmailHtml,
  generateActivationEmailPlainText,
  getSupabaseInviteEmailTemplate,
} from '../../services/emailTemplateService';

export const AdminUserManagement: React.FC = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'student' | 'teacher' | 'admin'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'active' | 'pending_activation' | 'suspended'>('ALL');

  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isResetPassModalOpen, setIsResetPassModalOpen] = useState(false);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null);

  // Email Template Modal state
  const [isEmailTemplateModalOpen, setIsEmailTemplateModalOpen] = useState(false);
  const [emailTemplateTab, setEmailTemplateTab] = useState<'preview' | 'supabase' | 'plaintext'>('preview');
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Resend / Activation Link modal state
  const [isResendModalOpen, setIsResendModalOpen] = useState(false);
  const [resendingUser, setResendingUser] = useState<Profile | null>(null);
  const [resendLink, setResendLink] = useState('');
  const [isResending, setIsResending] = useState(false);

  // Invite result modal state
  const [createdInviteResult, setCreatedInviteResult] = useState<{
    email: string;
    fullName: string;
    role: string;
    setupLink: string;
  } | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form states
  const [newUserData, setNewUserData] = useState<CreateUserPayload>({
    email: '',
    fullName: '',
    role: 'student',
    schoolName: '',
    gradeLevel: '11',
    targetOlympiad: 'OSN',
    phoneWhatsApp: '',
  });

  const [tempPasswordInput, setTempPasswordInput] = useState('');
  const [suspendReasonInput, setSuspendReasonInput] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const list = await adminService.getAllUsers(searchQuery, roleFilter);
      setUsers(list);
    } catch (err) {
      console.warn('Gagal memuat pengguna:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [roleFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadUsers();
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // 1. Create User
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserData.email || !newUserData.fullName) return;

    setIsSubmitting(true);
    try {
      const res = await adminService.createUser(newUserData);
      if (res.success) {
        setCreatedInviteResult({
          email: newUserData.email,
          fullName: newUserData.fullName,
          role: newUserData.role,
          setupLink:
            res.setupLink ||
            `${window.location.origin}/login?mode=reset&email=${encodeURIComponent(newUserData.email)}`,
        });
        showNotification('success', `Undangan berhasil diterbitkan untuk ${newUserData.role.toUpperCase()}: ${newUserData.fullName}`);
        setIsCreateModalOpen(false);
        setNewUserData({
          email: '',
          fullName: '',
          role: 'student',
          schoolName: '',
          gradeLevel: '11',
          targetOlympiad: 'OSN',
          phoneWhatsApp: '',
        });
        await loadUsers();
      } else {
        showNotification('error', res.error || 'Gagal menerbitkan akun.');
      }
    } catch (err: any) {
      showNotification('error', err?.message || 'Terjadi kesalahan sistem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyLink = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // 2. Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    setIsSubmitting(true);
    try {
      const res = await adminService.resetUserPassword(
        selectedUser.id,
        selectedUser.email,
        tempPasswordInput.trim() || undefined
      );
      if (res.success) {
        showNotification('success', `Kata sandi akun ${selectedUser.email} disetel ke: ${res.tempPassword}`);
        setIsResetPassModalOpen(false);
        setTempPasswordInput('');
        setSelectedUser(null);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // 3. Suspend / Activate User
  const handleToggleSuspend = async () => {
    if (!selectedUser) return;
    const willSuspend = !selectedUser.is_suspended;

    setIsSubmitting(true);
    try {
      const res = await adminService.toggleSuspendUser(
        selectedUser.id,
        willSuspend,
        willSuspend ? suspendReasonInput : ''
      );
      if (res.success) {
        showNotification(
          'success',
          `Akun ${selectedUser.email} berhasil ${willSuspend ? 'ditangguhkan (suspend)' : 'diaktifkan kembali'}!`
        );
        setIsSuspendModalOpen(false);
        setSuspendReasonInput('');
        setSelectedUser(null);
        await loadUsers();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Change Role
  const handleRoleChange = async (user: Profile, newRole: 'student' | 'teacher' | 'admin') => {
    if (user.role === newRole) return;
    if (user.email === 'fluffykitten.dev@gmail.com' && newRole !== 'admin') {
      alert('Akun master administrator tidak dapat diubah rolenya.');
      return;
    }

    try {
      await adminService.updateUserRole(user.id, newRole);
      showNotification('success', `Role ${user.full_name} diubah menjadi ${newRole.toUpperCase()}`);
      await loadUsers();
    } catch {
      showNotification('error', 'Gagal memperbarui peranan.');
    }
  };

  // Kirim Ulang Email / Link Aktivasi
  const handleOpenResendModal = (u: Profile) => {
    const setupLink = `${window.location.origin}/login?mode=reset&email=${encodeURIComponent(u.email)}`;
    setResendingUser(u);
    setResendLink(setupLink);
    setIsResendModalOpen(true);
  };

  const handleResendActivation = async () => {
    if (!resendingUser) return;
    setIsResending(true);
    try {
      const res = await adminService.resendActivationEmail(resendingUser.id, resendingUser.email);
      if (res.success) {
        setResendLink(res.setupLink);
        showNotification('success', `Tautan & email aktivasi telah dikirimkan ulang ke ${resendingUser.email}`);
      } else {
        showNotification('error', res.error || 'Gagal mengirim ulang notifikasi aktivasi.');
      }
    } catch {
      showNotification('error', 'Terjadi kesalahan sistem saat mengirim email.');
    } finally {
      setIsResending(false);
    }
  };

  // Aktivasi Manual Akun Langsung (Bypass Link)
  const handleManualActivate = async (u: Profile) => {
    if (
      !window.confirm(
        `Konfirmasi aktivasi manual akun ${u.full_name} (${u.email})?\n\nStatus akun akan langsung diubah menjadi AKTIF.`
      )
    ) {
      return;
    }

    try {
      const res = await adminService.activateUser(u.id);
      if (res.success) {
        showNotification('success', `Akun ${u.full_name} (${u.email}) berhasil diaktifkan secara manual!`);
        await loadUsers();
      } else {
        showNotification('error', res.error || 'Gagal mengaktifkan akun.');
      }
    } catch {
      showNotification('error', 'Terjadi kesalahan sistem.');
    }
  };

  const handleOpenMailto = (email: string, fullName: string, role: string, link: string) => {
    const roleText = role === 'teacher' || role === 'guru' ? 'Guru / Pembina' : 'Siswa';
    const subject = encodeURIComponent(`Undangan Aktivasi Akun OSN Kimia Mastery - ${fullName}`);
    const body = encodeURIComponent(
      `Halo ${fullName},\n\n` +
      `Selamat! Akun Anda telah didaftarkan oleh Administrator di platform OSN Kimia Mastery sebagai ${roleText}.\n\n` +
      `Silakan klik tautan berikut untuk mengaktifkan akun dan menentukan kata sandi mandiri Anda:\n${link}\n\n` +
      `Status Akun: Menunggu Aktivasi (Tautan berlaku 48 Jam).\n\n` +
      `Salam hangat,\nTim Administrator OSN Kimia Mastery`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopyTemplate = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 3000);
  };

  // Filter status di sisi client
  const filteredUsers = users.filter((u) => {
    const isSusp = u.is_suspended || u.account_status === 'suspended';
    const isPending = !isSusp && u.account_status === 'pending_activation';
    const isActive = !isSusp && (u.account_status === 'active' || !u.account_status);

    if (statusFilter === 'active') return isActive;
    if (statusFilter === 'pending_activation') return isPending;
    if (statusFilter === 'suspended') return isSusp;
    return true;
  });

  const countPending = users.filter((u) => !u.is_suspended && u.account_status === 'pending_activation').length;
  const countActive = users.filter((u) => !u.is_suspended && (u.account_status === 'active' || !u.account_status)).length;
  const countSuspended = users.filter((u) => u.is_suspended || u.account_status === 'suspended').length;

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

      {/* Header & Primary Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono">
              USER DIRECTORY
            </span>
            <span className="text-xs text-slate-500">Total {filteredUsers.length} Pengguna Terdaftar</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">
            Manajemen Akun Siswa & Guru
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsEmailTemplateModalOpen(true)}
            className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-semibold transition cursor-pointer shadow-2xs flex items-center gap-2"
            title="Lihat & Salin Template Email Aktivasi"
          >
            <MailCheck className="w-4 h-4 text-emerald-600" />
            <span>Template Email</span>
          </button>

          <button
            onClick={loadUsers}
            disabled={isLoading}
            className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition cursor-pointer shadow-2xs"
            title="Segarkan data pengguna"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Tambah Akun Baru</span>
          </button>
        </div>
      </div>

      {/* Status KPI Overview & Quick Filter Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          type="button"
          onClick={() => setStatusFilter('ALL')}
          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
            statusFilter === 'ALL'
              ? 'bg-white border-slate-800 shadow-xs ring-1 ring-slate-800'
              : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
          }`}
        >
          <div className="text-[11px] font-semibold text-slate-500 mb-1 flex items-center justify-between">
            <span>Semua Pengguna</span>
            <Users className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="text-xl font-extrabold text-slate-900 font-mono">{users.length}</div>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('active')}
          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
            statusFilter === 'active'
              ? 'bg-emerald-50/60 border-emerald-600 shadow-xs ring-1 ring-emerald-600'
              : 'bg-white border-slate-200/80 hover:border-emerald-300 shadow-2xs'
          }`}
        >
          <div className="text-[11px] font-semibold text-emerald-700 mb-1 flex items-center justify-between">
            <span>Akun Aktif</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-xl font-extrabold text-emerald-900 font-mono">{countActive}</div>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('pending_activation')}
          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
            statusFilter === 'pending_activation'
              ? 'bg-amber-50/60 border-amber-600 shadow-xs ring-1 ring-amber-600'
              : 'bg-white border-slate-200/80 hover:border-amber-300 shadow-2xs'
          }`}
        >
          <div className="text-[11px] font-semibold text-amber-700 mb-1 flex items-center justify-between">
            <span>Belum Aktivasi</span>
            <Clock className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <div className="text-xl font-extrabold text-amber-900 font-mono">{countPending}</div>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('suspended')}
          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
            statusFilter === 'suspended'
              ? 'bg-rose-50/60 border-rose-600 shadow-xs ring-1 ring-rose-600'
              : 'bg-white border-slate-200/80 hover:border-rose-300 shadow-2xs'
          }`}
        >
          <div className="text-[11px] font-semibold text-rose-700 mb-1 flex items-center justify-between">
            <span>Ditangguhkan</span>
            <Ban className="w-3.5 h-3.5 text-rose-600" />
          </div>
          <div className="text-xl font-extrabold text-rose-900 font-mono">{countSuspended}</div>
        </button>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col md:flex-row md:items-center gap-3 justify-between">
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama siswa, email, atau asal sekolah..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-800 transition"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2">
          {/* Role Filter */}
          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs">
            {(['ALL', 'student', 'teacher', 'admin'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRoleFilter(r)}
                className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                  roleFilter === r
                    ? 'bg-white text-slate-900 font-bold border border-slate-200 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r === 'ALL' ? 'Semua' : r === 'student' ? 'Siswa' : r === 'teacher' ? 'Guru' : 'Admin'}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:bg-white focus:border-slate-800"
          >
            <option value="ALL">Status: Semua ({users.length})</option>
            <option value="active">Status: Aktif ({countActive})</option>
            <option value="pending_activation">Status: Belum Aktivasi ({countPending})</option>
            <option value="suspended">Status: Ditangguhkan ({countSuspended})</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50/80 text-[10px] uppercase font-mono tracking-wider text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Pengguna</th>
                <th className="py-3.5 px-4 font-semibold">Peranan (Role)</th>
                <th className="py-3.5 px-4 font-semibold">Asal Sekolah & Kelas</th>
                <th className="py-3.5 px-4 font-semibold">Status Akun</th>
                <th className="py-3.5 px-4 font-semibold">XP & Level</th>
                <th className="py-3.5 px-4 text-right font-semibold">Tindakan Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    <div className="inline-block w-6 h-6 border-2 border-slate-400 border-t-transparent rounded-full animate-spin mb-2" />
                    <div>Memuat direktori pengguna platform...</div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    Tidak ada akun pengguna yang sesuai dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const isAdminUser = u.email === 'fluffykitten.dev@gmail.com' || u.role === 'admin';
                  return (
                    <tr key={u.id} className="hover:bg-slate-50/70 transition">
                      {/* Name & Email */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {(u.full_name || u.email || 'U').charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-slate-900 truncate max-w-[200px]">
                              {u.full_name || 'Tanpa Nama'}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono truncate">{u.email}</div>
                          </div>
                        </div>
                      </td>

                      {/* Role Selector */}
                      <td className="py-3.5 px-4">
                        {isAdminUser ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-300 font-mono">
                            👑 Admin
                          </span>
                        ) : (
                          <select
                            value={u.role === 'guru' ? 'teacher' : u.role === 'siswa' ? 'student' : u.role}
                            onChange={(e) => handleRoleChange(u, e.target.value as any)}
                            className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-700 focus:outline-none focus:border-slate-800"
                          >
                            <option value="student">🎓 Siswa</option>
                            <option value="teacher">👨‍🏫 Guru / Pembina</option>
                          </select>
                        )}
                      </td>

                      {/* School & Target */}
                      <td className="py-3.5 px-4">
                        <div className="truncate max-w-[200px] text-slate-800 font-medium">
                          {u.school_name || '-'}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {u.grade_level ? `Kelas ${u.grade_level}` : ''} {u.target_olympiad ? `• Target: ${u.target_olympiad}` : ''}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4">
                        {u.is_suspended || u.account_status === 'suspended' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                            Ditangguhkan
                          </span>
                        ) : u.account_status === 'pending_activation' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <Clock className="w-3 h-3 text-amber-600 shrink-0" />
                            Belum Aktivasi
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            Aktif
                          </span>
                        )}
                      </td>

                      {/* Gamification Stats */}
                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <span className="text-slate-900 font-bold">{u.xp || 0} XP</span>
                        <span className="text-slate-400 block text-[9px]">Lvl {u.level || 1} • {u.current_streak || 0} Streak</span>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Khusus Akun Belum Aktivasi: Tombol Kirim Ulang Tautan/Email & Aktivasi Manual */}
                          {u.account_status === 'pending_activation' && !u.is_suspended && (
                            <>
                              <button
                                onClick={() => handleOpenResendModal(u)}
                                className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 transition cursor-pointer"
                                title="Kirim Ulang Email / Tautan Aktivasi"
                              >
                                <Mail size={13} />
                              </button>
                              <button
                                onClick={() => handleManualActivate(u)}
                                className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition cursor-pointer"
                                title="Aktivasi Akun Secara Manual (Bypass Email)"
                              >
                                <UserCheck size={13} />
                              </button>
                            </>
                          )}

                          <button
                            onClick={() => {
                              setSelectedUser(u);
                              setTempPasswordInput('');
                              setIsResetPassModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                            title="Reset Kata Sandi"
                          >
                            <KeyRound size={13} />
                          </button>

                          {!isAdminUser && (
                            <button
                              onClick={() => {
                                setSelectedUser(u);
                                setSuspendReasonInput(u.suspended_reason || '');
                                setIsSuspendModalOpen(true);
                              }}
                              className={`p-1.5 rounded-lg transition cursor-pointer ${
                                u.is_suspended || u.account_status === 'suspended'
                                  ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                              }`}
                              title={u.is_suspended ? 'Buka Penangguhan (Aktifkan)' : 'Tangguhkan Akun (Suspend)'}
                            >
                              <Ban size={13} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: UNDANG PENGGUNA BARU */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-slate-800" />
                <h3 className="font-bold text-slate-900 text-sm">Undang Pengguna Baru (Guru / Siswa)</h3>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Peranan (Role)</label>
                  <select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                  >
                    <option value="student">🎓 Siswa OSN</option>
                    <option value="teacher">👨‍🏫 Guru / Pembina</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Target Kompetisi</label>
                  <select
                    value={newUserData.targetOlympiad}
                    onChange={(e) => setNewUserData({ ...newUserData, targetOlympiad: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                  >
                    <option value="OSK">OSK (Kabupaten/Kota)</option>
                    <option value="OSP">OSP (Provinsi)</option>
                    <option value="OSN">OSN (Nasional)</option>
                    <option value="IChO">IChO (Internasional)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Nama Lengkap Pengguna</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Rafli Pratama"
                  value={newUserData.fullName}
                  onChange={(e) => setNewUserData({ ...newUserData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Pengguna</label>
                  <input
                    type="email"
                    required
                    placeholder="nama@sekolah.sch.id"
                    value={newUserData.email}
                    onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Nomor WhatsApp (Opsional)</label>
                  <input
                    type="text"
                    placeholder="08xxxxxxxxxx"
                    value={newUserData.phoneWhatsApp}
                    onChange={(e) => setNewUserData({ ...newUserData, phoneWhatsApp: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Asal Sekolah / Madrasah</label>
                <input
                  type="text"
                  placeholder="Contoh: SMAN 1 Denpasar"
                  value={newUserData.schoolName}
                  onChange={(e) => setNewUserData({ ...newUserData, schoolName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-[11px] leading-relaxed flex items-start gap-2">
                <Mail className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Setup Sandi Mandiri:</strong> Tautan aktivasi & pengaturan kata sandi akan otomatis dibuat dan dikirimkan ke email guru/siswa. Mereka dapat menentukan kata sandi pribadi secara mandiri tanpa campur tangan admin.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow-xs cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Send size={13} />
                  <span>{isSubmitting ? 'Mengirim Undangan...' : 'Kirim Undangan & Terbitkan'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL SUKSES UNDANGAN & SALIN TAUTAN */}
      {createdInviteResult && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-xl animate-in zoom-in-95 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Undangan Akun Berhasil Diterbitkan!</span>
              </div>
              <button
                onClick={() => setCreatedInviteResult(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 inline-flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-600" />
                  Status: Belum Aktivasi
                </span>
                <span className="text-[11px] text-slate-500">Notifikasi email telah dikirimkan</span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Akun untuk <strong className="text-slate-900">{createdInviteResult.fullName}</strong> ({createdInviteResult.role.toUpperCase()}) telah didaftarkan ke sistem dengan email <strong className="text-slate-900">{createdInviteResult.email}</strong>.
              </p>

              <div className="space-y-1.5">
                <label className="block text-slate-700 font-semibold text-[11px]">
                  Tautan Aktivasi & Setup Kata Sandi Mandiri:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={createdInviteResult.setupLink}
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono text-[11px] select-all focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopyLink(createdInviteResult.setupLink)}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                  >
                    {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedLink ? 'Tersalin!' : 'Salin Tautan'}</span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-[11px] leading-relaxed">
                💡 <strong>Tips Administrator:</strong> Selain notifikasi otomatis yang dikirim ke email tujuan, Anda dapat mengirimkan langsung tautan di atas melalui WhatsApp/pesan pribadi, atau membuka template pesan di email client Anda.
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <button
                type="button"
                onClick={() =>
                  handleOpenMailto(
                    createdInviteResult.email,
                    createdInviteResult.fullName,
                    createdInviteResult.role,
                    createdInviteResult.setupLink
                  )
                }
                className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Mail size={13} className="text-slate-500" />
                <span>Kirim via Email Client</span>
              </button>

              <button
                type="button"
                onClick={() => setCreatedInviteResult(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition cursor-pointer"
              >
                Selesai / Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL KIRIM ULANG AKTIVASI AKUN */}
      {isResendModalOpen && resendingUser && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>Kirim Ulang Aktivasi Akun</span>
              </div>
              <button
                onClick={() => setIsResendModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Nama Pengguna:</span>
                  <span className="font-bold text-slate-900">{resendingUser.full_name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email Terdaftar:</span>
                  <span className="font-mono text-slate-800">{resendingUser.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Status Saat Ini:</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    Belum Aktivasi
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1 text-[11px]">
                  Tautan Aktivasi Pengguna:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={resendLink}
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono text-[11px] select-all focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopyLink(resendLink)}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                  >
                    {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedLink ? 'Tersalin' : 'Salin'}</span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-amber-800 text-[11px] leading-relaxed">
                Tautan ini mengarahkan pengguna ke halaman pembuatan kata sandi pertama kali. Setelah pengguna berhasil menyimpan kata sandi, status akun akan otomatis berubah menjadi <strong>Aktif</strong>.
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() =>
                  handleOpenMailto(
                    resendingUser.email,
                    resendingUser.full_name,
                    resendingUser.role,
                    resendLink
                  )
                }
                className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <ExternalLink size={13} className="text-slate-500" />
                <span>Buka di Email Client</span>
              </button>

              <div className="flex items-center gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setIsResendModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={handleResendActivation}
                  disabled={isResending}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold transition shadow-xs cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Send size={13} />
                  <span>{isResending ? 'Mengirim...' : 'Kirim Ulang Notifikasi'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TEMPLATE EMAIL AKTIVASI */}
      {isEmailTemplateModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl animate-in zoom-in-95 text-xs max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <MailCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-sm">
                  Template Email Aktivasi &amp; Undangan Akun
                </h3>
              </div>
              <button
                onClick={() => setIsEmailTemplateModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Tab navigation */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 shrink-0">
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setEmailTemplateTab('preview')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    emailTemplateTab === 'preview'
                      ? 'bg-white text-slate-900 font-bold border border-slate-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Eye size={13} />
                  <span>Pratinjau Visual</span>
                </button>
                <button
                  onClick={() => setEmailTemplateTab('supabase')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    emailTemplateTab === 'supabase'
                      ? 'bg-white text-slate-900 font-bold border border-slate-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Code size={13} />
                  <span>Kode Template Supabase</span>
                </button>
                <button
                  onClick={() => setEmailTemplateTab('plaintext')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    emailTemplateTab === 'plaintext'
                      ? 'bg-white text-slate-900 font-bold border border-slate-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileCode size={13} />
                  <span>Teks Biasa (Plain)</span>
                </button>
              </div>

              {emailTemplateTab !== 'preview' && (
                <button
                  onClick={() =>
                    handleCopyTemplate(
                      emailTemplateTab === 'supabase'
                        ? getSupabaseInviteEmailTemplate()
                        : generateActivationEmailPlainText({
                            fullName: 'Muhammad Rafli Pratama',
                            email: 'rafli@sekolah.sch.id',
                            role: 'student',
                            schoolName: 'SMAN 1 Kota Bandung',
                            activationUrl: `${window.location.origin}/login?mode=reset&email=rafli%40sekolah.sch.id`,
                          })
                    )
                  }
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedTemplate ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedTemplate ? 'Tersalin!' : 'Salin Kode'}</span>
                </button>
              )}
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto pr-1">
              {emailTemplateTab === 'preview' && (
                <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200">
                  <div className="bg-white max-w-lg mx-auto rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-slate-900 p-5 text-white border-b-2 border-emerald-500">
                      <div className="font-extrabold text-base tracking-tight">🧪 OSN KIMIA MASTERY</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5 font-mono">
                        Platform Pembinaan Olimpiade Sains Kimia Nasional
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Halo Muhammad Rafli Pratama,</h4>
                        <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                          Selamat! Administrator kami telah mendaftarkan akun Anda di portal <strong>OSN Kimia Mastery</strong>. 
                          Akun Anda saat ini berstatus <strong>Menunggu Aktivasi</strong>.
                        </p>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2 text-[11px]">
                        <div className="flex justify-between items-center pb-1 border-b border-dashed border-slate-200">
                          <span className="text-slate-500">Email Akun:</span>
                          <span className="font-mono font-bold text-slate-900">rafli@sekolah.sch.id</span>
                        </div>
                        <div className="flex justify-between items-center pb-1 border-b border-dashed border-slate-200">
                          <span className="text-slate-500">Peranan:</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                            Siswa Peserta OSN Kimia
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-1 border-b border-dashed border-slate-200">
                          <span className="text-slate-500">Status Akun:</span>
                          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[10px]">
                            Belum Aktivasi
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Masa Berlaku:</span>
                          <span className="text-amber-700 font-medium">48 Jam</span>
                        </div>
                      </div>

                      <div className="text-center py-2">
                        <span className="inline-block px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs shadow-xs">
                          🚀 Aktivasi Akun &amp; Buat Kata Sandi
                        </span>
                      </div>

                      <div className="p-3 bg-slate-100 rounded-xl text-[10px] text-slate-500 break-all">
                        <strong className="text-slate-700">Tautan alternatif:</strong><br />
                        https://osnkimia.id/login?mode=reset&amp;email=rafli%40sekolah.sch.id
                      </div>

                      <p className="text-[10px] text-slate-400 text-center">
                        Jika Anda tidak merasa pernah didaftarkan, abaikan email ini dengan aman.
                      </p>
                    </div>

                    <div className="bg-slate-50 border-t border-slate-100 p-3 text-center text-[10px] text-slate-400">
                      OSN Kimia Mastery • Sistem Otomasi Tata Kelola Platform
                    </div>
                  </div>
                </div>
              )}

              {emailTemplateTab === 'supabase' && (
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[11px] leading-relaxed">
                    💡 <strong>Cara Pasang di Supabase:</strong> Masuk ke <strong>Supabase Dashboard &gt; Authentication &gt; Email Templates &gt; Tab &quot;Invite user&quot;</strong>, lalu salin dan tempel kode template HTML di bawah ini ke kotak input template email.
                  </div>
                  <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed max-h-72 select-all">
                    {getSupabaseInviteEmailTemplate()}
                  </pre>
                </div>
              )}

              {emailTemplateTab === 'plaintext' && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-[11px]">
                    Format teks polos ini digunakan sebagai fallback jika email client pengguna tidak mendukung HTML styling.
                  </div>
                  <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed max-h-72 select-all whitespace-pre-wrap">
                    {generateActivationEmailPlainText({
                      fullName: 'Muhammad Rafli Pratama',
                      email: 'rafli@sekolah.sch.id',
                      role: 'student',
                      schoolName: 'SMAN 1 Kota Bandung',
                      activationUrl: `${window.location.origin}/login?mode=reset&email=rafli%40sekolah.sch.id`,
                    })}
                  </pre>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end shrink-0">
              <button
                type="button"
                onClick={() => setIsEmailTemplateModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}


      {/* MODAL 2: RESET PASSWORD */}
      {isResetPassModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-slate-800" />
                <h3 className="font-bold text-slate-900 text-sm">Reset Kata Sandi Akun</h3>
              </div>
              <button
                onClick={() => setIsResetPassModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-2">
              <p>
                Menyetel ulang kata sandi untuk akun:{' '}
                <strong className="text-slate-900">{selectedUser.full_name}</strong> (
                <span className="font-mono text-slate-700">{selectedUser.email}</span>).
              </p>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Kata Sandi Baru (Opsional, kosongkan untuk acak)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 354123"
                  value={tempPasswordInput}
                  onChange={(e) => setTempPasswordInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-slate-800 font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsResetPassModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Menyetel...' : 'Terapkan Sandi'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: SUSPEND / AKTIFKAN AKUN */}
      {isSuspendModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Ban className={`w-5 h-5 ${selectedUser.is_suspended ? 'text-emerald-600' : 'text-rose-600'}`} />
                <h3 className="font-bold text-slate-900 text-sm">
                  {selectedUser.is_suspended ? 'Buka Penangguhan Akun' : 'Konfirmasi Penangguhan (Suspend)'}
                </h3>
              </div>
              <button
                onClick={() => setIsSuspendModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedUser.is_suspended
                ? `Apakah Anda yakin ingin mengaktifkan kembali akun ${selectedUser.email}? Pengguna akan dapat masuk kembali.`
                : `Menangguhkan akun ${selectedUser.email} akan mencegah pengguna masuk ke portal sampai dibuka kembali.`}
            </p>

            {!selectedUser.is_suspended && (
              <div>
                <label className="block text-slate-700 text-xs font-semibold mb-1">
                  Alasan Penangguhan (Akan dicatat di audit log)
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Permintaan pembina sekolah / Pelanggaran kuis"
                  value={suspendReasonInput}
                  onChange={(e) => setSuspendReasonInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500"
                />
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsSuspendModalOpen(false)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-medium cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleToggleSuspend}
                disabled={isSubmitting}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition shadow cursor-pointer disabled:opacity-50 ${
                  selectedUser.is_suspended
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-rose-600 hover:bg-rose-700 text-white'
                }`}
              >
                {isSubmitting
                  ? 'Memproses...'
                  : selectedUser.is_suspended
                  ? 'Aktifkan Akun'
                  : 'Tangguhkan Sekarang'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
