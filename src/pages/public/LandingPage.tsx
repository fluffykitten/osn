import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import type { Classroom } from '../../types/database';
import { SUBJECT_LIST } from '../../config/subjectConfig';
import { SubjectIgcseSvgArt } from '../../components/subject/SubjectIgcseSvgArt';
import { AxiomaLogo } from '../../components/common/AxiomaLogo';
import {
  LogIn,
  GraduationCap,
  Users,
  CheckCircle2,
  X,
  ArrowRight,
  FlaskConical,
  Compass,
  Percent,
  Dna,
  School,
  Sparkles,
  BookOpen,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { user, profile, isTeacher, isAdmin } = useAuth();
  const location = useLocation();

  const pageState = location.state as
    | {
        registered?: boolean;
        requireConfirmation?: boolean;
        studentName?: string;
        registeredEmail?: string;
        passwordResetSuccess?: boolean;
        email?: string;
      }
    | undefined;

  const [showRegBanner, setShowRegBanner] = useState(Boolean(pageState?.registered));
  const [showResetSuccessBanner, setShowResetSuccessBanner] = useState(
    Boolean(pageState?.passwordResetSuccess)
  );
  const [studentClassroom, setStudentClassroom] = useState<Classroom | null>(null);

  useEffect(() => {
    if (user?.email && !isTeacher && !isAdmin) {
      classroomService
        .getStudentClassrooms(user.email, user.id)
        .then((classes) => {
          const active = classes.find((c) => c.user_membership_status === 'active');
          const pending = classes.find((c) => c.user_membership_status === 'pending_approval');
          setStudentClassroom(active || pending || null);
        })
        .catch((err) => console.error(err));
    }
  }, [user, isTeacher, isAdmin]);

  // Helper untuk icon subjek
  const renderSubjectIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return <FlaskConical className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Percent':
        return <Percent className={className} />;
      case 'Dna':
        return <Dna className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <div className="min-h-screen pb-24 transition-colors duration-200 relative overflow-hidden bg-[#F0F8FF] text-[#2D3748]">
      {/* Background Decorative Ambient Gradients (Minimal & Serene) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#B0C4DE]/25 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Password Reset Notification Banner */}
      {showResetSuccessBanner && pageState?.passwordResetSuccess && (
        <div className="bg-emerald-600 text-white py-3 px-4 shadow-sm text-xs sm:text-sm animate-in fade-in duration-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
              <span>
                <strong>Kata Sandi Diperbarui!</strong> Silakan masuk dengan kata sandi baru Anda.
              </span>
            </div>
            <button
              onClick={() => setShowResetSuccessBanner(false)}
              className="p-1 hover:bg-white/20 rounded transition text-white/80"
              title="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Registration Success Notification Banner */}
      {showRegBanner && pageState?.registered && (
        <div className="bg-teal-700 text-white py-3 px-4 shadow-sm text-xs sm:text-sm animate-in fade-in duration-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-200 shrink-0" />
              <span>
                <strong>Pendaftaran Berhasil!</strong> Selamat datang,{' '}
                <strong>{pageState.studentName || 'Siswa'}</strong>. Silakan masuk untuk memulai belajar.
              </span>
            </div>
            <button
              onClick={() => setShowRegBanner(false)}
              className="p-1 hover:bg-white/20 rounded transition text-white/80"
              title="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Quick Jump Bar untuk Pengguna yang Sedang Login */}
      {user && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
          <div className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#B0C4DE]/60 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center font-bold text-sm">
                {profile?.role === 'admin' ? '🛡️' : isTeacher ? '👨‍🏫' : '🎓'}
              </div>
              <div>
                <p className="text-xs text-[#708090] font-medium">Sesi Aktif</p>
                <p className="text-sm font-bold text-[#2D3748]">
                  {profile?.full_name || user.email}
                  {profile?.teaching_subject && (
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Guru {profile.teaching_subject.toUpperCase()}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <Link
              to={
                profile?.role === 'admin'
                  ? '/admin/analytics'
                  : isTeacher
                  ? '/teacher'
                  : studentClassroom?.user_membership_status === 'active'
                  ? '/student/dashboard'
                  : '/join-class'
              }
              className="px-4 py-2 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] rounded-xl font-semibold text-xs flex items-center gap-1.5 transition active:scale-98 shadow-xs"
            >
              <span>
                {profile?.role === 'admin'
                  ? 'Buka Admin Command Center'
                  : isTeacher
                  ? 'Buka Studio Guru'
                  : studentClassroom?.user_membership_status === 'active'
                  ? 'Buka Dashboard Siswa'
                  : 'Aktivasi Kelas Binaan'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-8 sm:pt-14">
        {/* HERO SECTION (Minimalist & Focused with Emblem) */}
        <section className="space-y-6 max-w-4xl mx-auto">
          {/* Main Title with Logo on the Left */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="shrink-0 drop-shadow-sm hover:scale-105 transition-transform duration-300">
              <AxiomaLogo variant="icon" className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#2D3748] font-display leading-[1.15] max-w-2xl">
              Menguasai Sains & Matematika dari Fondasi hingga Puncak
            </h1>
          </div>

          {/* Subtitle Ringkas */}
          <p className="text-sm sm:text-base text-[#708090] leading-relaxed max-w-2xl mx-auto text-center">
            Satu ekosistem belajar terpadu yang menjangkau <strong>Kurikulum Nasional</strong>,{' '}
            <strong>Cambridge (IGCSE, AS, A-Level)</strong>, hingga <strong>Olimpiade Sains Nasional (OSN)</strong>.
          </p>

          {/* Quick CTA untuk Guest */}
          {!user && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                to="/login"
                className="px-6 py-3 rounded-xl bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-semibold text-sm shadow-xs transition active:scale-98 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk ke Akun</span>
              </Link>
              <Link
                to="/login?mode=register"
                className="px-6 py-3 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] font-semibold text-sm border border-[#D3D3D3] shadow-2xs transition active:scale-98 flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Daftar Akun</span>
              </Link>
            </div>
          )}
        </section>



        {/* 4 AVAILABLE SUBJECTS GRID */}
        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] font-display">
              Subjek Pembelajaran
            </h2>
            <p className="text-xs sm:text-sm text-[#708090]">
              Pilih subjek untuk mulai mempelajari bank soal dan silabus konsep materi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SUBJECT_LIST.map((subject) => {
              const isActive = subject.status === 'active';
              const isBeta = subject.status === 'beta';

              return (
                <div
                  key={subject.id}
                  className="rounded-2xl bg-[#FFFFF0] border border-[#D3D3D3]/80 p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Status Indicator Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-colors"
                    style={{ backgroundColor: subject.palette.themeColor }}
                  />

                  <div className="space-y-3.5">
                    {/* Icon & Status Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: subject.palette.softBadgeBg,
                          color: subject.palette.contrastText,
                          borderColor: subject.palette.softBorder,
                        }}
                      >
                        {renderSubjectIcon(subject.iconName, 'w-5 h-5')}
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${
                          isActive
                            ? 'bg-teal-50 text-teal-800 border-teal-200'
                            : isBeta
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {isActive ? 'Aktif Penuh' : isBeta ? 'Early Access' : 'Preview'}
                      </span>
                    </div>

                    {/* Diagram Vektor Representatif Subjek (Cambridge IGCSE Exam Notes Style) */}
                    <SubjectIgcseSvgArt subjectId={subject.id} className="w-full h-36" />

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-base font-bold text-[#2D3748] font-display flex items-center gap-1.5">
                        <span>{subject.name}</span>
                        <span className="text-xs text-[#708090] font-normal">({subject.nameEn})</span>
                      </h3>
                      <p className="text-xs text-[#708090] mt-1.5 leading-relaxed">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DUAL ROLE GATEWAY (Siswa vs Guru) */}
        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] font-display">
              Akses Portal Pengguna
            </h2>
            <p className="text-xs sm:text-sm text-[#708090]">
              Informasi pendaftaran dan alur masuk untuk Siswa dan Guru Pembina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* CARD 1: SISWA */}
            <div className="rounded-2xl bg-[#FFFFF0] border border-[#B0C4DE]/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D3748] font-display">Untuk Siswa</h3>
                  <p className="text-xs text-[#708090] mt-1 leading-relaxed">
                    Akses pendaftaran mandiri untuk berlatih ribuan soal kompetisi, membaca ringkasan materi, dan bergabung ke kelas binaan sekolah.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#2D3748] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Pilihan 4 Subjek & 5 Jalur Kurikulum</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Latihan soal interaktif dengan notasi KaTeX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Pelacakan capaian XP, level, dan diagnostik radar</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  to="/login?mode=register"
                  className="w-full py-3 px-4 rounded-xl bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-semibold text-xs flex items-center justify-center gap-1.5 transition active:scale-98 shadow-xs"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Daftar Akun Siswa Baru</span>
                </Link>
                <Link
                  to="/login"
                  className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-[#F0F8FF] text-[#708090] font-semibold text-xs flex items-center justify-center transition"
                >
                  <span>Sudah punya akun? Masuk</span>
                </Link>
              </div>
            </div>

            {/* CARD 2: GURU / PEMBINA */}
            <div className="rounded-2xl bg-[#FFFFF0] border border-[#D3D3D3] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D3748] font-display">Untuk Guru & Pembina</h3>
                  <p className="text-xs text-[#708090] mt-1 leading-relaxed">
                    Studio khusus bagi guru untuk mengelola kelas binaan lintas subjek, merakit paket lembar kerja, dan menyusun bank soal ujian.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#2D3748] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Manajemen kelas binaan terpadu (Cross-Subject)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Pembuat paket worksheet kustom per subjek</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Penyusunan variasi lembar kerja dan paket latihan ujian</span>
                  </li>
                </ul>

                {/* Info Pendaftaran Guru */}
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-blue-900 leading-relaxed">
                  ℹ️ <strong>Ketentuan Guru:</strong> Akun pengajar diterbitkan dan ditugaskan subjek resminya langsung oleh Administrator. Silakan masuk menggunakan akun guru yang telah terdaftar.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/login"
                  className="w-full py-3 px-4 rounded-xl bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3] font-semibold text-xs flex items-center justify-center gap-1.5 transition active:scale-98 shadow-2xs"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Masuk sebagai Guru / Pembina</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
