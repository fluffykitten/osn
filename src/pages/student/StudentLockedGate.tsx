import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import type { Classroom } from '../../types/database';
import {
  Lock,
  KeyRound,
  School,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Mail,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Layers,
  Compass,
  GraduationCap
} from 'lucide-react';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';

interface StudentLockedGateProps {
  onClassStatusChanged?: () => void;
}

export const StudentLockedGate: React.FC<StudentLockedGateProps> = ({ onClassStatusChanged }) => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const [classCode, setClassCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [isLoadingClasses, setIsLoadingClasses] = useState(true);
  const [pendingClassroom, setPendingClassroom] = useState<Classroom | null>(null);
  const [activeClassroom, setActiveClassroom] = useState<Classroom | null>(null);

  const loadStudentClasses = async () => {
    if (!user?.email) return;
    setIsLoadingClasses(true);
    try {
      const classes = await classroomService.getStudentClassrooms(user.email, user.id);
      const active = classes.find((c) => c.user_membership_status === 'active') || null;
      const pending = classes.find((c) => c.user_membership_status === 'pending_approval') || null;

      setActiveClassroom(active);
      setPendingClassroom(pending);

      if (active) {
        sessionStorage.setItem('osn_has_active_classroom', 'true');
        if (onClassStatusChanged) {
          onClassStatusChanged();
        }
      } else {
        sessionStorage.setItem('osn_has_active_classroom', 'false');
      }
    } catch (err) {
      console.error('Gagal mengambil daftar kelas:', err);
    } finally {
      setIsLoadingClasses(false);
    }
  };

  useEffect(() => {
    loadStudentClasses();
  }, [user]);

  const handleJoinClass = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanCode = classCode.trim().toUpperCase();
    if (!cleanCode) {
      setErrorMessage('Harap masukkan kode kelas.');
      return;
    }

    if (!user?.email) {
      setErrorMessage('Sesi akun tidak valid. Silakan login ulang.');
      return;
    }

    // Aturan 1 Siswa 1 Kelas: Cek apakah sudah ada kelas pending atau aktif
    if (activeClassroom || pendingClassroom) {
      setErrorMessage('Anda sudah terdaftar atau memiliki pengajuan di kelas lain. Siswa hanya diperbolehkan bergabung dalam 1 kelas.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await classroomService.joinClassroomByCode(
        cleanCode,
        user.email,
        user.id,
        profile?.full_name || undefined
      );

      if (!result.success) {
        setErrorMessage(result.message || 'Gagal bergabung ke kelas. Pastikan kode kelas tepat.');
        return;
      }

      if (result.status === 'active') {
        setSuccessMessage(`Selamat! Anda telah resmi menjadi anggota kelas "${result.classroom?.name}". Akses seluruh fitur telah terbuka.`);
        sessionStorage.setItem('osn_has_active_classroom', 'true');
        if (onClassStatusChanged) {
          onClassStatusChanged();
        }
        setTimeout(() => {
          navigate('/student/dashboard');
        }, 1200);
      } else {
        // Status pending_approval (Manual Approve Wajib)
        setSuccessMessage(
          `Kode kelas "${cleanCode}" berhasil dikirim! Pengajuan Anda ke kelas "${result.classroom?.name}" sedang menunggu persetujuan manual dari Guru Pembina.`
        );
        setClassCode('');
        await loadStudentClasses();
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Terjadi kesalahan sistem saat memproses kode kelas.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
      {/* Header Sambutan & Status Akun */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-800/40">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-white/10">
              🎓
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-black font-display tracking-tight text-white">
                  {profile?.full_name || 'Siswa OSN Kimia'}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Menunggu Aktivasi Kelas
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{profile?.school_name || 'Sekolah Belum Diatur'}</span>
                <span>•</span>
                <span className="text-sky-300 font-medium">Target: {profile?.target_olympiad || 'OSN'}</span>
                <span>•</span>
                <span className="font-mono text-xs text-slate-400">{user?.email}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadStudentClasses}
              disabled={isLoadingClasses}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              title="Periksa pembaharuan status persetujuan guru"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingClasses ? 'animate-spin' : ''}`} />
              <span>Periksa Status</span>
            </button>
          </div>
        </div>
      </div>

      {/* Jika sudah aktif (misal baru di-approve dan direfresh) */}
      {activeClassroom && (
        <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <div className="text-sm font-bold text-emerald-950">
                Akses Terbuka: Anda Terdaftar di Kelas "{activeClassroom.name}"
              </div>
              <p className="text-xs text-emerald-700 mt-0.5">
                Persetujuan guru telah aktif. Anda dapat langsung mengakses materi dan lembar kerja.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (onClassStatusChanged) onClassStatusChanged();
              navigate('/student/dashboard');
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Buka Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Grid: Card Input Kode Kelas & Status Pending */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Form Masukkan Kode / Status Menunggu Manual Approve */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Aktivasi Kelas Binaan Guru</h2>
                <p className="text-xs text-slate-500">
                  Masukkan Kode Unik yang diberikan oleh Guru Pembina Anda
                </p>
              </div>
            </div>

            {/* Notification Messages */}
            {errorMessage && (
              <div className="mt-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 font-medium">{errorMessage}</div>
              </div>
            )}

            {successMessage && (
              <div className="mt-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-xs text-emerald-800 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex-1 font-medium">{successMessage}</div>
              </div>
            )}

            {/* Single Classroom Rule: Jika sedang pending_approval, tampilkan status menunggu (tidak izinkan input kelas lain) */}
            {pendingClassroom ? (
              <div className="mt-6 p-6 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Menunggu Persetujuan Manual
                    </div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">
                      {pendingClassroom.name}
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200/60 text-xs text-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Kode Kelas:</span>
                    <span className="font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {pendingClassroom.code}
                    </span>
                  </div>
                  {pendingClassroom.teacher_name && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Guru Pembina:</span>
                      <span className="font-semibold text-slate-800">{pendingClassroom.teacher_name}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Status Keanggotaan:</span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded-md text-[10px]">
                      Pending Approval
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-amber-100/50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Peraturan 1 Kelas:</strong> Setiap siswa hanya dapat terdaftar dalam 1 kelas binaan. Silakan hubungi Guru Pembina Anda agar permintaan ini segera disetujui di Studio Guru.
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={loadStudentClasses}
                    disabled={isLoadingClasses}
                    className="flex-1 py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoadingClasses ? 'animate-spin' : ''}`} />
                    <span>Cek Status Sekarang</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Belum ada kelas sama sekali: Tampilkan Form Input Kode */
              <form onSubmit={handleJoinClass} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="classCodeInput" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Kode Kelas Pembina
                  </label>
                  <div className="relative">
                    <input
                      id="classCodeInput"
                      type="text"
                      value={classCode}
                      onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                      placeholder="Contoh: PELATNAS-26"
                      maxLength={15}
                      className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-300 rounded-xl font-mono text-sm tracking-wider uppercase text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400 placeholder:normal-case"
                      disabled={isSubmitting}
                      required
                    />
                    <School className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5">
                    <span>💡 Mintalah kode kelas dari Guru Pembina OSN di sekolah Anda.</span>
                  </p>
                </div>

                <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-sky-950">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    Mekanisme Persetujuan Manual (Manual Approval):
                  </div>
                  <p className="text-[11px] leading-relaxed text-sky-800">
                    Setelah kode dimasukkan, pengajuan Anda akan berstatus <em>pending</em> hingga Guru Pembina melakukan verifikasi manual di dashboard guru.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !classCode.trim()}
                  className="w-full py-3 px-5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Mengirim Pengajuan...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>Kirim Permintaan Bergabung</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Bantuan & Hubungi Admin */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Belum punya kode kelas?</span>
              </div>
              <a
                href="mailto:fluffykitten.dev@gmail.com?subject=Pertanyaan%20Kode%20Kelas%20OSN%20Kimia"
                className="font-bold text-sky-600 hover:text-sky-700 hover:underline"
              >
                Hubungi Admin (fluffykitten.dev@gmail.com)
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Preview Fitur yang Sedang Terkunci */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-800 relative overflow-hidden">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>Akses Terproteksi</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Fitur yang Akan Terbuka Setelah Di-Approve
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Platform OSN Kimia Mastery mengintegrasikan kurikulum silabus IChO dengan sistem pemantauan guru secara real-time.
            </p>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Silabus 10 Topik Penguasaan Kimia</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Struktur kurikulum mendalam dari Stoikiometri hingga Sintesis Organik.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Lembar Kerja & Tugas Terpantau</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Latihan soal bertingkat dengan evaluasi otomatis dan live monitoring guru.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Database Materi & Handout Teori</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Akses materi dasar SMA dan materi lanjutan tingkat olimpiade nasional/internasional.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Radar 10 Pilar & Rekomendasi Remedial AI</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Diagnosa kelemahan konsep otomatis untuk akselerasi belajar mandiri.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
