import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import type { Classroom } from '../../types/database';
import { ChemistrySmaSyllabusSvg } from '../../components/syllabus/ChemistrySmaSyllabusSvg';
import { ChemistryOsnSyllabusSvg } from '../../components/syllabus/ChemistryOsnSyllabusSvg';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import {
  LogIn,
  GraduationCap,
  KeyRound,
  Atom,
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  Eye,
  CloudCheck,
  Users,
  CheckCircle2,
  X,
  LayoutDashboard,
  BarChart3,
  Settings,
  School,
  Compass,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { user, profile, isTeacher } = useAuth();
  const location = useLocation();

  const pageState = location.state as {
    registered?: boolean;
    requireConfirmation?: boolean;
    studentName?: string;
    registeredEmail?: string;
    passwordResetSuccess?: boolean;
    email?: string;
  } | undefined;

  const [showRegBanner, setShowRegBanner] = useState(Boolean(pageState?.registered));
  const [showResetSuccessBanner, setShowResetSuccessBanner] = useState(Boolean(pageState?.passwordResetSuccess));
  const [studentClassroom, setStudentClassroom] = useState<Classroom | null>(null);
  const [isLoadingClass, setIsLoadingClass] = useState<boolean>(false);
  const [syllabusView, setSyllabusView] = useState<'osn' | 'sma' | 'both'>('osn');

  useEffect(() => {
    if (user?.email && !isTeacher) {
      setIsLoadingClass(true);
      classroomService
        .getStudentClassrooms(user.email, user.id)
        .then((classes) => {
          const active = classes.find((c) => c.user_membership_status === 'active');
          const pending = classes.find((c) => c.user_membership_status === 'pending_approval');
          setStudentClassroom(active || pending || null);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoadingClass(false));
    }
  }, [user, isTeacher]);

  return (
    <div
      className="min-h-screen pb-20 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      {/* Background Abstract Chemistry Watermark Decoration */}
      <ChemistryWatermarkBackground />
      {/* Password Reset Success Notification Banner */}
      {showResetSuccessBanner && pageState?.passwordResetSuccess && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3.5 px-4 shadow-md text-xs sm:text-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
              <div>
                <span className="font-bold">🔑 Kata Sandi Berhasil Diperbarui!</span>{' '}
                <span>
                  Kata sandi baru untuk akun {pageState.email ? <strong>{pageState.email}</strong> : 'Anda'} telah aktif. Silakan masuk dengan kata sandi baru Anda.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/login"
                className="px-3.5 py-1.5 bg-white text-emerald-900 hover:bg-emerald-50 rounded-lg font-bold text-xs shadow-xs transition-all"
              >
                Masuk Sekarang →
              </Link>
              <button
                onClick={() => setShowResetSuccessBanner(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-all text-white/80 hover:text-white"
                title="Tutup pemberitahuan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registration Success Notification Banner */}
      {showRegBanner && pageState?.registered && (
        <div className="bg-emerald-600 text-white py-3 px-4 shadow-md text-xs sm:text-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
              <div>
                <span className="font-bold">🎉 Pendaftaran Siswa Berhasil!</span>{' '}
                <span>
                  Selamat datang di OSN Kimia Mastery, <strong>{pageState.studentName || 'Siswa'}</strong>!
                  {pageState.requireConfirmation
                    ? ` Tautan aktivasi akun telah dikirim ke ${pageState.registeredEmail}. Silakan periksa inbox atau spam email Anda.`
                    : ' Akun Anda telah siap. Silakan masuk untuk mulai berlatih di Lembar Kerja Olimpiade.'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowRegBanner(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-all text-white/80 hover:text-white"
              title="Tutup pemberitahuan"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 pt-12 sm:pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Main Headline (1 Warna Solid Saja Menyesuaikan Tema, Tanpa Mention AI) */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight font-display transition-colors"
            style={{ color: 'var(--theme-text)' }}
          >
            Kuasai 10 Topik Silabus OSN Kimia dengan Scaffolding Penalaran Presisi
          </h1>

          {/* Subheading */}
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed transition-colors"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Platform pembelajaran terpadu untuk calon medalis Olimpiade Sains Nasional (OSN) dan International Chemistry Olympiad (IChO). Menghubungkan siswa dengan notasi formula KaTeX mhchem, lembar kerja tersimpan online, analisis penalaran bertahap, serta pemantauan live kelas oleh pembina olimpiade.
          </p>

          {/* Primary Action Button Bar */}
          {!user ? (
            /* Tamu (Guest) Action Buttons */
            <>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {/* Tombol Masuk */}
                <Link
                  to="/login"
                  style={{
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary-text)',
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 hover:opacity-95"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Masuk ke Portal</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                {/* Tombol Daftar (Hanya untuk Siswa) */}
                <Link
                  to="/login?mode=register"
                  style={{
                    backgroundColor: 'var(--theme-accent)',
                    color: 'var(--theme-accent-text)',
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 hover:-translate-y-0.5 border border-black/10 dark:border-white/10"
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span className="tracking-tight">Daftar Akun Siswa</span>
                  <span
                    className="text-[10.5px] font-bold tracking-wider px-2 py-0.5 rounded-full border shadow-2xs font-mono uppercase transition-colors"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      borderColor: 'rgba(0, 0, 0, 0.14)',
                      color: 'var(--theme-accent-text)',
                    }}
                  >
                    Khusus Siswa
                  </span>
                </Link>

                {/* Tombol Lupa Password */}
                <Link
                  to="/login?mode=forgot"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm border rounded-xl transition-all shadow-2xs hover:opacity-90 hover:-translate-y-0.5"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Lupa Password?</span>
                </Link>
              </div>

              {/* Quick Notice about Teacher & Guest Access */}
              <div className="pt-2">
                <p
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  }}
                  className="text-[11.5px] max-w-lg mx-auto py-2.5 px-4 rounded-xl border shadow-2xs leading-relaxed"
                >
                  ℹ️ <strong>Catatan Hak Akses:</strong> Pendaftaran publik dibuka khusus untuk <strong>Siswa</strong>. Akun Guru/Pembina ditentukan & diterbitkan langsung oleh Administrator (
                  <span className="font-mono font-bold" style={{ color: 'var(--theme-primary)' }}>fluffykitten.dev@gmail.com</span>). Tamu (guest) wajib masuk sebelum mengakses lembar kerja & database materi.
                </p>
              </div>
            </>
          ) : isTeacher ? (
            /* Mode Guru / Pembina */
            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/teacher"
                  style={{
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary-text)',
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 hover:opacity-95"
                >
                  <Users className="w-4 h-4" />
                  <span>Buka Studio Guru & Pemantauan</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
                <Link
                  to="/teacher/classes"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 font-bold text-sm border rounded-xl transition-all shadow-2xs hover:opacity-90"
                >
                  <School className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
                  <span>Manajemen Kelas Binaan</span>
                </Link>
                <Link
                  to="/practice"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 font-bold text-sm border rounded-xl transition-all shadow-2xs hover:opacity-90"
                >
                  <Layers className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                  <span>Bank Soal & Studio Latihan</span>
                </Link>
              </div>
            </div>
          ) : studentClassroom?.user_membership_status === 'active' ? (
            /* Siswa Aktif (Sudah Memiliki Kelas) */
            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/student/dashboard"
                  style={{
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary-text)',
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 hover:opacity-95"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Buka Dashboard Belajar Siswa</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  to="/worksheet"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 font-bold text-sm border rounded-xl transition-all shadow-2xs hover:opacity-90"
                >
                  <Layers className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
                  <span>Worksheet Saya</span>
                </Link>

                <Link
                  to="/student/progress"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-text)',
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 font-bold text-sm border rounded-xl transition-all shadow-2xs hover:opacity-90"
                >
                  <BarChart3 className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                  <span>Progress Belajar</span>
                </Link>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--theme-surface)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text)',
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  Terdaftar di Kelas: <strong>{studentClassroom.name}</strong> • Seluruh modul & tugas terpantau aktif
                </span>
              </div>
            </div>
          ) : (
            /* Siswa Baru (Belum Memiliki Kelas Aktif / Sedang Pending Approval) */
            <div className="max-w-2xl mx-auto pt-4 space-y-4">
              <div
                style={{
                  backgroundColor: 'var(--theme-surface)',
                  borderColor: 'var(--theme-border)',
                }}
                className="p-6 border rounded-3xl shadow-sm space-y-4 text-left sm:text-center"
              >
                <div
                  style={{ borderColor: 'var(--theme-border)' }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b pb-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                    <span
                      style={{ color: 'var(--theme-text-muted)' }}
                      className="text-xs font-bold uppercase tracking-wider"
                    >
                      Status Akun: Menunggu Aktivasi Kelas Binaan
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[11px] font-bold">
                    {studentClassroom?.user_membership_status === 'pending_approval' ? '⏳ Menunggu Approval Guru' : 'Belum Ada Kelas'}
                  </span>
                </div>

                <div>
                  <h3
                    style={{ color: 'var(--theme-text)' }}
                    className="text-lg font-bold font-display"
                  >
                    {studentClassroom?.user_membership_status === 'pending_approval'
                      ? `Pengajuan Bergabung ke Kelas "${studentClassroom.name}" Sedang Diproses`
                      : `Halo, ${profile?.full_name || 'Siswa'}! Aktifkan Akses Binaan Anda`}
                  </h3>
                  <p
                    style={{ color: 'var(--theme-text-muted)' }}
                    className="text-xs sm:text-sm mt-1.5 leading-relaxed"
                  >
                    {studentClassroom?.user_membership_status === 'pending_approval'
                      ? 'Kode kelas Anda telah berhasil diajukan. Silakan hubungi Guru Pembina Anda untuk menyetujui (manual approve) akun Anda di Studio Guru agar seluruh materi dan lembar kerja terbuka.'
                      : 'Sebagai siswa baru, modul silabus, lembar kerja tersimpan online, dan analisis penalaran bertahap akan terbuka penuh setelah Anda memasukkan Kode Kelas dari Guru Pembina OSN Anda.'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  <Link
                    to="/join-class"
                    style={{
                      backgroundColor: 'var(--theme-primary)',
                      color: 'var(--theme-primary-text)',
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 hover:opacity-95"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>{studentClassroom?.user_membership_status === 'pending_approval' ? 'Lihat Status Persetujuan Kelas' : 'Aktivasi Kode Kelas Sekarang'}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>

                  <Link
                    to="/student/settings"
                    style={{
                      backgroundColor: 'var(--theme-surface)',
                      borderColor: 'var(--theme-border)',
                      color: 'var(--theme-text)',
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 font-bold text-sm border rounded-xl transition-all shadow-2xs hover:opacity-90"
                  >
                    <Settings className="w-4 h-4" style={{ color: 'var(--theme-text-muted)' }} />
                    <span>Pengaturan Profil Siswa</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Apa Itu Platform OSN Kimia Mastery? (Overview Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div
          style={{
            backgroundColor: 'var(--theme-surface)',
            borderColor: 'var(--theme-border)',
          }}
          className="border rounded-3xl p-8 sm:p-12 shadow-sm space-y-8 transition-colors"
        >
          <div className="max-w-3xl space-y-4">
            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-primary)',
              }}
              className="inline-flex items-center gap-2 px-3 py-1 border rounded-full text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent)' }} />
              <span>Tentang Platform</span>
            </div>
            <h2
              style={{ color: 'var(--theme-text)' }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display transition-colors"
            >
              Ekosistem Pembinaan Olimpiade Sains Kimia yang Komprehensif
            </h2>
            <p
              style={{ color: 'var(--theme-text-muted)' }}
              className="text-sm leading-relaxed transition-colors"
            >
              <strong style={{ color: 'var(--theme-text)' }}>OSN Kimia Mastery</strong> dirancang khusus untuk memfasilitasi pembinaan intensif kompetisi sains kimia tingkat Kabupaten/Kota (OSK), Provinsi (OSP), Nasional (OSN), hingga jenjang seleksi International Chemistry Olympiad (IChO). Platform ini menjembatani konsep dasar SMA dengan analisis mendalam penalaran olimpiade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                borderColor: 'var(--theme-border)',
              }}
              className="p-5 rounded-2xl border space-y-3 transition-colors"
            >
              <div
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'var(--theme-primary-text)',
                }}
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold"
              >
                <BookOpen className="w-4 h-4" />
              </div>
              <h3
                style={{ color: 'var(--theme-text)' }}
                className="text-base font-bold font-display"
              >
                Kurikulum 10 Topik Sains Kimia Terstruktur
              </h3>
              <p
                style={{ color: 'var(--theme-text-muted)' }}
                className="text-xs leading-relaxed"
              >
                Materi terstruktur secara hierarkis mencakup seluruh silabus resmi olimpiade sains, mulai dari Struktur Atom, Ikatan Kimia, Termodinamika, Kinetika, Kesetimbangan, Asam-Basa, Elektrokimia, Kimia Organik, Kimia Anorganik, hingga Analisis Spektroskopi.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                borderColor: 'var(--theme-border)',
              }}
              className="p-5 rounded-2xl border space-y-3 transition-colors"
            >
              <div
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'var(--theme-primary-text)',
                }}
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold"
              >
                <Layers className="w-4 h-4" />
              </div>
              <h3
                style={{ color: 'var(--theme-text)' }}
                className="text-base font-bold font-display"
              >
                Scaffolding 4 Langkah Penalaran Ilmiah
              </h3>
              <p
                style={{ color: 'var(--theme-text-muted)' }}
                className="text-xs leading-relaxed"
              >
                Mengikis kebiasaan menebak formula dengan kerangka kerja sistematis: Dekonstruksi Informasi, Identifikasi Hukum & Rumus, Kalkulasi Bertahap, dan Verifikasi Satuan & Kelogisan Kimiawi.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                borderColor: 'var(--theme-border)',
              }}
              className="p-5 rounded-2xl border space-y-3 transition-colors"
            >
              <div
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'var(--theme-primary-text)',
                }}
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold"
              >
                <CloudCheck className="w-4 h-4" />
              </div>
              <h3
                style={{ color: 'var(--theme-text)' }}
                className="text-base font-bold font-display"
              >
                Cloud Autosave & Persistensi Online
              </h3>
              <p
                style={{ color: 'var(--theme-text-muted)' }}
                className="text-xs leading-relaxed"
              >
                Setiap goresan solusi dan jawaban pada lembar kerja disimpan secara otomatis dan real-time ke penyimpanan online. Siswa dapat melanjutkan pengerjaan kapan saja tanpa khawatir data hilang saat tab browser ditutup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Fitur & Kapabilitas Utama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div
            style={{
              backgroundColor: 'var(--theme-surface)',
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-primary)',
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-xs font-bold"
          >
            <Cpu className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent)' }} />
            <span>Fitur & Kapabilitas</span>
          </div>
          <h2
            style={{ color: 'var(--theme-text)' }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display transition-colors"
          >
            Teknologi Terdepan untuk Siswa dan Pembina
          </h2>
          <p
            style={{ color: 'var(--theme-text-muted)' }}
            className="text-xs sm:text-sm transition-colors"
          >
            Dilengkapi perangkat lunak mutakhir yang memfasilitasi drill soal mandiri maupun interaksi tatap muka kelas binaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fitur: Editor Formula KaTeX & mhchem */}
          <div
            style={{
              backgroundColor: 'var(--theme-surface)',
              borderColor: 'var(--theme-border)',
            }}
            className="p-6 rounded-2xl border shadow-xs transition-all space-y-3"
          >
            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                color: 'var(--theme-primary)',
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
            >
              <Atom className="w-5 h-5" />
            </div>
            <h3
              style={{ color: 'var(--theme-text)' }}
              className="text-base font-bold font-display"
            >
              Editor Formula KaTeX & mhchem
            </h3>
            <p
              style={{ color: 'var(--theme-text-muted)' }}
              className="text-xs leading-relaxed"
            >
              Mendukung penuh penulisan rumus kimia yang presisi: persamaan reaksi stoikiometri dengan panah reaksi (→, ⇌), wujud zat (aq, s, l, g), pembentukan endapan (↓), pelepasan gas (↑), ionik bermuatan, serta rumus cepat kimia olimpiade tanpa perlu mengetik sintaks manual yang rumit.
            </p>
          </div>

          {/* Fitur: Evaluasi Presisi Penalaran & Rubrik Bertingkat */}
          <div
            style={{
              backgroundColor: 'var(--theme-surface)',
              borderColor: 'var(--theme-border)',
            }}
            className="p-6 rounded-2xl border shadow-xs transition-all space-y-3"
          >
            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                color: 'var(--theme-primary)',
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
            >
              <Sparkles className="w-5 h-5" />
            </div>
            <h3
              style={{ color: 'var(--theme-text)' }}
              className="text-base font-bold font-display"
            >
              Evaluasi Presisi Penalaran & Rubrik Bertingkat
            </h3>
            <p
              style={{ color: 'var(--theme-text-muted)' }}
              className="text-xs leading-relaxed"
            >
              Sistem mengevaluasi penalaran siswa secara terperinci: memberikan skor rubrik parsial pada tiap langkah, memvalidasi konsistensi logika perhitungan, dan menunjukkan secara spesifik letak kesalahan konsep stoikiometri maupun termokimia.
            </p>
          </div>

          {/* Fitur: Live Classroom Monitoring Guru */}
          <div
            style={{
              backgroundColor: 'var(--theme-surface)',
              borderColor: 'var(--theme-border)',
            }}
            className="p-6 rounded-2xl border shadow-xs transition-all space-y-3"
          >
            <div
              style={{
                backgroundColor: 'var(--theme-canvas)',
                color: 'var(--theme-primary)',
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
            >
              <Eye className="w-5 h-5" />
            </div>
            <h3
              style={{ color: 'var(--theme-text)' }}
              className="text-base font-bold font-display"
            >
              Live Classroom Monitoring Guru
            </h3>
            <p
              style={{ color: 'var(--theme-text-muted)' }}
              className="text-xs leading-relaxed"
            >
              Guru dan pembina dapat memantau pengerjaan siswa secara realtime, melihat live progress lembar kerja, dan menggunakan laser pointer virtual untuk mengarahkan diskusi interaktif di kelas olimpiade.
            </p>
          </div>
        </div>
      </section>

      {/* SVG Sections: Peta Silabus OSN Kimia & Silabus Fondasi SMA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 relative z-10">
        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSyllabusView('osn')}
            style={
              syllabusView === 'osn'
                ? {
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary-text)',
                    borderColor: 'var(--theme-primary)',
                  }
                : {
                    backgroundColor: 'var(--theme-surface)',
                    color: 'var(--theme-text)',
                    borderColor: 'var(--theme-border)',
                  }
            }
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl border transition-all shadow-xs active:scale-98"
          >
            <Compass className="w-4 h-4" />
            <span>🏆 Silabus 10 Pilar OSN Kimia</span>
          </button>

          <button
            onClick={() => setSyllabusView('sma')}
            style={
              syllabusView === 'sma'
                ? {
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary-text)',
                    borderColor: 'var(--theme-primary)',
                  }
                : {
                    backgroundColor: 'var(--theme-surface)',
                    color: 'var(--theme-text)',
                    borderColor: 'var(--theme-border)',
                  }
            }
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl border transition-all shadow-xs active:scale-98"
          >
            <BookOpen className="w-4 h-4" />
            <span>📚 Silabus Fondasi SMA (Fase E & F)</span>
          </button>

          <button
            onClick={() => setSyllabusView('both')}
            style={
              syllabusView === 'both'
                ? {
                    backgroundColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary-text)',
                    borderColor: 'var(--theme-primary)',
                  }
                : {
                    backgroundColor: 'var(--theme-surface)',
                    color: 'var(--theme-text)',
                    borderColor: 'var(--theme-border)',
                  }
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-all shadow-xs active:scale-98"
          >
            <span>📑 Tampilkan Keduanya</span>
          </button>
        </div>

        {/* View 1: Silabus 10 Pilar OSN Kimia */}
        {(syllabusView === 'osn' || syllabusView === 'both') && (
          <div className="space-y-4 pt-2 animate-in fade-in duration-300">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <div
                style={{
                  backgroundColor: 'var(--theme-surface)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-primary)',
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-xs font-bold"
              >
                <Compass className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent)' }} />
                <span>Standar Puspresnas & IChO</span>
              </div>
              <h2
                style={{ color: 'var(--theme-text)' }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display transition-colors"
              >
                Kurikulum Terstruktur 10 Topik Silabus OSN Kimia
              </h2>
              <p
                style={{ color: 'var(--theme-text-muted)' }}
                className="text-xs sm:text-sm transition-colors"
              >
                Piramida kurikulum 10 pilar kompetensi bertingkat: OSK (Kota/Kabupaten), OSP (Provinsi), OSN (Nasional), hingga seleksi International Chemistry Olympiad (IChO).
              </p>
            </div>

            <ChemistryOsnSyllabusSvg className="mt-4" />
          </div>
        )}

        {/* View 2: Silabus Fondasi SMA */}
        {(syllabusView === 'sma' || syllabusView === 'both') && (
          <div className="space-y-4 pt-6 animate-in fade-in duration-300">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <div
                style={{
                  backgroundColor: 'var(--theme-surface)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-primary)',
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-xs font-bold"
              >
                <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent)' }} />
                <span>Fondasi Sekolah Menengah</span>
              </div>
              <h2
                style={{ color: 'var(--theme-text)' }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display transition-colors"
              >
                Silabus Topik Kimia SMA — Fase E & Fase F
              </h2>
              <p
                style={{ color: 'var(--theme-text-muted)' }}
                className="text-xs sm:text-sm transition-colors"
              >
                Diagram alur materi resmi Kurikulum Merdeka (Fase E Kelas 10 dan Fase F Kelas 11–12) yang menjadi prasyarat esensial sebelum melangkah ke level kompetisi olimpiade sains.
              </p>
            </div>

            <ChemistrySmaSyllabusSvg className="mt-4" />
          </div>
        )}
      </section>

      {/* Call to Action (CTA) Section: Khusus Tamu (Guest) Belum Login */}
      {!user && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <div
            style={{
              backgroundColor: 'var(--theme-surface)',
              borderColor: 'var(--theme-border)',
            }}
            className="rounded-3xl p-8 sm:p-12 shadow-sm border space-y-8 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Student Card */}
              <div
                style={{ borderColor: 'var(--theme-border)' }}
                className="space-y-4 pr-0 md:pr-6 border-b md:border-b-0 md:border-r pb-6 md:pb-0"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Untuk Calon Medalis Siswa</span>
                </div>
                <h3
                  style={{ color: 'var(--theme-text)' }}
                  className="text-xl sm:text-2xl font-black font-display"
                >
                  Siap Melangkah Menjadi Juara OSN Kimia?
                </h3>
                <p
                  style={{ color: 'var(--theme-text-muted)' }}
                  className="text-xs sm:text-sm leading-relaxed"
                >
                  Daftarkan akun siswa Anda secara gratis sekarang. Akses modul materi silabus, worksheet interaktif dengan penyimpanan online, dan evaluasi penilaian terstruktur.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/login?mode=register"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm active:scale-98"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Daftar Akun Siswa Sekarang</span>
                  </Link>
                  <Link
                    to="/login"
                    style={{
                      backgroundColor: 'var(--theme-canvas)',
                      borderColor: 'var(--theme-border)',
                      color: 'var(--theme-text)',
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 font-semibold text-xs rounded-xl transition-all border hover:opacity-90"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Masuk Akun</span>
                  </Link>
                </div>
              </div>

              {/* Teacher Card */}
              <div className="space-y-4 pl-0 md:pl-6">
                <div
                  style={{
                    backgroundColor: 'var(--theme-canvas)',
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-primary)',
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 border text-xs font-bold rounded-full"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Untuk Guru & Pembina Olimpiade</span>
                </div>
                <h3
                  style={{ color: 'var(--theme-text)' }}
                  className="text-xl sm:text-2xl font-black font-display"
                >
                  Pengelolaan Akun Guru & Pembina
                </h3>
                <p
                  style={{ color: 'var(--theme-text-muted)' }}
                  className="text-xs sm:text-sm leading-relaxed"
                >
                  Untuk menjaga kualitas pembinaan, akun Guru/Pembina diterbitkan secara resmi oleh Administrator. Silakan hubungi admin atau masuk menggunakan kredensial resmi.
                </p>
                <div
                  style={{
                    backgroundColor: 'var(--theme-canvas)',
                    borderColor: 'var(--theme-border)',
                  }}
                  className="p-3 border rounded-xl text-xs space-y-1"
                >
                  <div style={{ color: 'var(--theme-text-muted)' }} className="text-[11px]">Kontak Resmi Administrator:</div>
                  <div style={{ color: 'var(--theme-text)' }} className="font-mono font-bold">fluffykitten.dev@gmail.com</div>
                </div>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <Link
                    to="/login"
                    style={{
                      backgroundColor: 'var(--theme-primary)',
                      color: 'var(--theme-primary-text)',
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 font-bold text-xs rounded-xl transition-all shadow-sm active:scale-98 hover:opacity-95"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Masuk sebagai Guru / Admin</span>
                  </Link>
                  <Link
                    to="/login?mode=forgot"
                    style={{ color: 'var(--theme-text-muted)' }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium transition-colors hover:opacity-80"
                  >
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>Lupa Password?</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
