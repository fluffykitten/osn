import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getSupabaseClient } from '../../lib/supabaseClient';
import { classroomService } from '../../services/classroomService';
import type { Classroom } from '../../types/database';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import {
  User,
  School,
  Lock,
  Save,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  ShieldCheck,
  RefreshCw,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  Clock
} from 'lucide-react';

export const StudentSettings: React.FC = () => {
  const { user, profile, refreshProfile, updatePassword } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'classroom' | 'security'>('profile');

  // Form State: Profil Akademik
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [schoolName, setSchoolName] = useState(profile?.school_name || '');
  const [gradeLevel, setGradeLevel] = useState(profile?.grade_level || '11');
  const [targetOlympiad, setTargetOlympiad] = useState(profile?.target_olympiad || 'OSN');
  const [phoneWhatsapp, setPhoneWhatsapp] = useState(profile?.phone_whatsapp || '');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState<string | null>(null);
  const [profileError, setProfileError] = useState<string | null>(null);

  // Form State: Kelas & Pembina
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoadingClasses, setIsLoadingClasses] = useState(true);
  const [joinClassCode, setJoinClassCode] = useState('');
  const [isJoiningClass, setIsJoiningClass] = useState(false);
  const [classSuccess, setClassSuccess] = useState<string | null>(null);
  const [classError, setClassError] = useState<string | null>(null);

  // Form State: Keamanan & Password
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || '');
      setSchoolName(profile.school_name || '');
      setGradeLevel(profile.grade_level || '11');
      setTargetOlympiad(profile.target_olympiad || 'OSN');
      setPhoneWhatsapp(profile.phone_whatsapp || '');
    }
  }, [profile]);

  const loadClassrooms = async () => {
    if (!user?.email) return;
    setIsLoadingClasses(true);
    try {
      const cls = await classroomService.getStudentClassrooms(user.email, user.id);
      setClassrooms(cls);
    } catch (err) {
      console.error('Gagal mengambil daftar kelas di settings:', err);
    } finally {
      setIsLoadingClasses(false);
    }
  };

  useEffect(() => {
    loadClassrooms();
  }, [user]);

  // Tab 1: Simpan Profil Akademik
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSuccess(null);
    setProfileError(null);
    setIsSavingProfile(true);

    try {
      const supabase = getSupabaseClient();
      if (supabase && user) {
        const { error } = await supabase
          .from('profiles')
          .update({
            full_name: fullName.trim(),
            school_name: schoolName.trim(),
            grade_level: gradeLevel,
            target_olympiad: targetOlympiad,
            phone_whatsapp: phoneWhatsapp.trim(),
          })
          .eq('id', user.id);

        if (error) throw error;
      }

      await refreshProfile();
      setProfileSuccess('Perubahan profil akademik berhasil disimpan!');
    } catch (err: any) {
      console.error('Gagal menyimpan profil:', err);
      setProfileError(err.message || 'Gagal menyimpan perubahan profil ke server.');
    } finally {
      setIsSavingProfile(false);
    }
  };

  // Tab 2: Gabung Kelas (hanya jika belum punya kelas sama sekali)
  const handleJoinClass = async (e: React.FormEvent) => {
    e.preventDefault();
    setClassSuccess(null);
    setClassError(null);

    const cleanCode = joinClassCode.trim().toUpperCase();
    if (!cleanCode) {
      setClassError('Harap masukkan kode kelas.');
      return;
    }

    if (!user?.email) {
      setClassError('Sesi login tidak valid.');
      return;
    }

    // Single Classroom Enforcement: Cek apakah sudah ada kelas
    if (classrooms.length > 0) {
      setClassError('Anda sudah terdaftar di kelas lain. Setiap siswa hanya diperbolehkan mengikuti 1 kelas binaan.');
      return;
    }

    setIsJoiningClass(true);
    try {
      const result = await classroomService.joinClassroomByCode(
        cleanCode,
        user.email,
        user.id,
        fullName || undefined
      );

      if (!result.success) {
        setClassError(result.message || 'Kode kelas tidak valid.');
        return;
      }

      if (result.status === 'active') {
        setClassSuccess(`Berhasil bergabung ke kelas "${result.classroom?.name}"!`);
        sessionStorage.setItem('osn_has_active_classroom', 'true');
      } else {
        setClassSuccess(
          `Pengajuan bergabung ke kelas "${result.classroom?.name}" berhasil dikirim! Silakan menunggu persetujuan manual (manual approve) oleh Guru Pembina Anda.`
        );
      }
      setJoinClassCode('');
      await loadClassrooms();
    } catch (err: any) {
      setClassError(err.message || 'Terjadi gangguan koneksi saat mengajukan kode kelas.');
    } finally {
      setIsJoiningClass(false);
    }
  };

  // Tab 3: Update Password
  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSuccess(null);
    setPasswordError(null);

    if (newPassword.length < 6) {
      setPasswordError('Password baru minimal harus terdiri dari 6 karakter.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Konfirmasi password tidak cocok dengan password baru.');
      return;
    }

    setIsChangingPassword(true);
    try {
      await updatePassword(newPassword);
      setPasswordSuccess('Password akun Anda berhasil diperbarui!');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setPasswordError(err.message || 'Gagal mengubah password.');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const studentClassroom = classrooms[0] || null;

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Pengaturan */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
          Pengaturan Akun & Profil Siswa
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Kelola data pribadi, informasi sekolah, status keikutsertaan kelas binaan, dan keamanan akun.
        </p>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-100">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profil Akademik</span>
          </button>

          <button
            onClick={() => setActiveTab('classroom')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'classroom'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <School className="w-4 h-4" />
            <span>Kelas & Guru Pembina</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'security'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Keamanan Akun</span>
          </button>
        </div>
      </div>

      {/* TAB 1: PROFIL AKADEMIK */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSaveProfile} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Informasi Pribadi & Akademik</h2>
              <p className="text-xs text-slate-500">Data ini akan tercantum pada portofolio dan laporan kemajuan Anda</p>
            </div>
          </div>

          {profileSuccess && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-xs text-emerald-800 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="font-medium">{profileSuccess}</div>
            </div>
          )}

          {profileError && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-medium">{profileError}</div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nama Lengkap Siswa
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Contoh: Ahmad Fauzan"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Akun (Terkunci)
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 cursor-not-allowed font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Asal Sekolah / Madrasah
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-3.5 py-2.5 pl-9 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Contoh: SMAN 1 Yogyakarta"
                />
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Jenjang / Tingkat Kelas
              </label>
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="10">Kelas 10 SMA/MA</option>
                <option value="11">Kelas 11 SMA/MA</option>
                <option value="12">Kelas 12 SMA/MA</option>
                <option value="Alumni">Alumni / Gap Year</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Tingkat Prestasi
              </label>
              <select
                value={targetOlympiad}
                onChange={(e) => setTargetOlympiad(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="OSK">OSK (Tingkat Kota / Kabupaten)</option>
                <option value="OSP">OSP (Tingkat Provinsi)</option>
                <option value="OSN">OSN (Tingkat Nasional)</option>
                <option value="IChO">Pelatnas / IChO Internasional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                No. WhatsApp Siswa (Opsional)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={phoneWhatsapp}
                  onChange={(e) => setPhoneWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 pl-9 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                  placeholder="0812xxxxxxxx"
                />
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              disabled={isSavingProfile}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{isSavingProfile ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 2: KELAS & PEMBINA (Single Classroom Policy) */}
      {activeTab === 'classroom' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Kelas Binaan Siswa</h2>
              <p className="text-xs text-slate-500">Status pendaftaran dan kelas bimbingan olimpiade Anda</p>
            </div>
          </div>

          {classSuccess && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-xs text-emerald-800 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="font-medium">{classSuccess}</div>
            </div>
          )}

          {classError && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-medium">{classError}</div>
            </div>
          )}

          {/* Aturan 1 Siswa 1 Kelas */}
          {studentClassroom ? (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Kelas Terdaftar
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {studentClassroom.name}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      studentClassroom.user_membership_status === 'active'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                    }`}
                  >
                    {studentClassroom.user_membership_status === 'active'
                      ? '✓ Terverifikasi Aktif'
                      : '⏳ Menunggu Persetujuan Guru'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                    <span className="text-slate-500">Kode Kelas:</span>
                    <div className="font-mono font-bold text-sky-800 mt-0.5">{studentClassroom.code}</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                    <span className="text-slate-500">Guru Pembina:</span>
                    <div className="font-semibold text-slate-800 mt-0.5">
                      {studentClassroom.teacher_name || 'Pembina OSN Kimia'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Single Classroom Policy Notice */}
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl text-xs text-sky-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Kebijakan 1 Kelas Binaan:</strong> Sistem OSN Kimia Mastery membatasi setiap siswa hanya dapat terdaftar pada 1 kelas pembina aktif agar pelaporan dan pemantauan tugas terfokus. Jika Anda ingin berpindah kelas atau salah memasukkan kode, silakan hubungi Guru Pembina atau Administrator di{' '}
                  <a href="mailto:fluffykitten.dev@gmail.com" className="font-bold underline text-sky-800">
                    fluffykitten.dev@gmail.com
                  </a>.
                </div>
              </div>
            </div>
          ) : (
            /* Jika siswa belum punya kelas sama sekali */
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center space-y-2">
                <School className="w-8 h-8 text-slate-400 mx-auto" />
                <h4 className="text-sm font-bold text-slate-800">Belum Terdaftar di Kelas Apapun</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Anda belum bergabung ke dalam kelas binaan guru. Masukkan kode kelas yang diberikan oleh guru pembina untuk mengajukan verifikasi.
                </p>
              </div>

              <form onSubmit={handleJoinClass} className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-700">
                  Masukkan Kode Kelas Baru
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={joinClassCode}
                    onChange={(e) => setJoinClassCode(e.target.value.toUpperCase())}
                    placeholder="Contoh: PELATNAS-26"
                    className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs uppercase focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    disabled={isJoiningClass}
                  />
                  <button
                    type="submit"
                    disabled={isJoiningClass || !joinClassCode.trim()}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isJoiningClass ? 'Mengirim...' : 'Ajukan Kode Kelas'}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">
                  *Catatan: Setelah diajukan, status pendaftaran memerlukan persetujuan manual (manual approve) oleh Guru Pembina.
                </p>
              </form>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: KEAMANAN & PASSWORD */}
      {activeTab === 'security' && (
        <form onSubmit={handleUpdatePassword} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Perbarui Password Akun</h2>
              <p className="text-xs text-slate-500">Gunakan kombinasi minimal 6 karakter demi keamanan akun Anda</p>
            </div>
          </div>

          {passwordSuccess && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-xs text-emerald-800 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="font-medium">{passwordSuccess}</div>
            </div>
          )}

          {passwordError && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-medium">{passwordError}</div>
            </div>
          )}

          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Password Baru
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Minimal 6 karakter"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Konfirmasi Password Baru
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Ulangi password baru"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              disabled={isChangingPassword || !newPassword}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>{isChangingPassword ? 'Memperbarui...' : 'Simpan Password Baru'}</span>
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
};
