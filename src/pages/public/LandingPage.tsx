import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ChemistrySmaSyllabusSvg } from '../../components/syllabus/ChemistrySmaSyllabusSvg';
import { ChemistryOsnSyllabusSvg } from '../../components/syllabus/ChemistryOsnSyllabusSvg';
import {
  LogIn,
  GraduationCap,
  KeyRound,
  ExternalLink,
  Atom,
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  Eye,
  CloudCheck,
  Users,
  Compass,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { user, profile, isTeacher } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900 pb-20">
      {/* Logged-In User Quick Notification Banner (if already authenticated) */}
      {user && (
        <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 text-white py-2.5 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
              <span>
                Sesi Aktif: Selamat datang kembali,{' '}
                <strong className="font-bold">{profile?.full_name || user.email}</strong> (
                {isTeacher ? '👨‍🏫 Guru / Pembina' : '🎓 Siswa'}).
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to={isTeacher ? '/teacher' : '/worksheet'}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold transition-all"
              >
                {isTeacher ? 'Buka Studio Guru →' : 'Buka Worksheet Saya →'}
              </Link>
              <Link
                to="/roadmap"
                className="px-3 py-1 bg-white text-sky-800 hover:bg-slate-100 rounded-lg font-bold transition-all shadow-xs"
              >
                Peta Silabus 10 Topik →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-50 border border-sky-200/80 rounded-full text-sky-800 text-xs font-semibold shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Platform Pembinaan OSN Kimia SMA & IChO Standar Puspresnas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight font-display">
            Kuasai <span className="text-sky-600">10 Topik Silabus</span> OSN Kimia dengan{' '}
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Scaffolding Penalaran & AI Presisi
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Platform pembelajaran terpadu untuk calon medalis Olimpiade Sains Nasional (OSN) dan International Chemistry Olympiad (IChO). Menghubungkan siswa dengan notasi formula KaTeX mhchem, lembar kerja tersimpan online, deteksi miskonsepsi AI, serta pemantauan live kelas oleh pembina olimpiade.
          </p>

          {/* Primary Action Button Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {/* Tombol Masuk */}
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-98"
            >
              <LogIn className="w-4 h-4" />
              <span>Masuk ke Portal</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>

            {/* Tombol Daftar (Hanya untuk Siswa) */}
            <Link
              to="/login?mode=register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20 active:scale-98"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Daftar Akun Siswa</span>
              <span className="text-[10px] bg-emerald-800/60 px-1.5 py-0.5 rounded font-mono font-normal">
                Khusus Siswa
              </span>
            </Link>

            {/* Tombol Lupa Password */}
            <Link
              to="/login?mode=forgot"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 rounded-xl transition-all shadow-2xs hover:border-slate-400"
            >
              <KeyRound className="w-4 h-4 text-slate-500" />
              <span>Lupa Password?</span>
            </Link>

            {/* Tombol Tentang Creator */}
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-2xs active:scale-98 border border-slate-700/80"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten creator"
                className="w-5 h-5 rounded-full object-contain bg-amber-50 shadow-xs border border-amber-200"
              />
              <span>Tentang Creator</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Quick Notice about Teacher & Guest Access */}
          <div className="pt-2">
            <p className="text-[11px] text-slate-500 max-w-lg mx-auto bg-slate-100/70 py-1.5 px-3 rounded-lg border border-slate-200">
              ℹ️ <strong>Catatan Hak Akses:</strong> Pendaftaran publik dibuka khusus untuk <strong>Siswa</strong>. Akun Guru/Pembina ditentukan & diterbitkan langsung oleh Administrator (
              <span className="font-mono text-sky-700 font-bold">ezzarscarlet@gmail.com</span>). Tamu (guest) wajib masuk sebelum mengakses lembar kerja & database materi.
            </p>
          </div>
        </div>
      </section>

      {/* Apa Itu Platform OSN Kimia Mastery? (Overview Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tentang Platform</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Ekosistem Pembinaan Olimpiade Sains Kimia yang Komprehensif
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>OSN Kimia Mastery</strong> dirancang khusus untuk memfasilitasi pembinaan intensif kompetisi sains kimia tingkat Kabupaten/Kota (OSK), Provinsi (OSP), Nasional (OSN), hingga jenjang seleksi International Chemistry Olympiad (IChO). Platform ini menjembatani jurang antara pemahaman konsep dasar SMA dengan analisis mendalam penalaran olimpiade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Kurikulum 10 Topik Standar Puspresnas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Materi terstruktur secara hierarkis mencakup seluruh silabus resmi BPTI/Puspresnas, mulai dari Struktur Atom, Ikatan Kimia, Termodinamika, Kinetika, Kesetimbangan, Asam-Basa, Elektrokimia, Kimia Organik, Kimia Anorganik, hingga Analisis Spektroskopi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Scaffolding 4 Langkah Penalaran Ilmiah
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mengikis kebiasaan menebak formula dengan kerangka kerja sistematis: Dekonstruksi Informasi, Identifikasi Hukum & Rumus, Kalkulasi Bertahap, dan Verifikasi Satuan & Kelogisan Kimiawi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <CloudCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Cloud Autosave & Persistensi Online
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap goresan solusi dan jawaban pada lembar kerja disimpan secara otomatis dan real-time ke penyimpanan online. Siswa dapat melanjutkan pengerjaan kapan saja tanpa khawatir data hilang saat tab browser ditutup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Fitur & Kapabilitas Utama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-800 text-xs font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Fitur & Kapabilitas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Teknologi Terdepan untuk Siswa dan Pembina
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Dilengkapi perangkat lunak mutakhir yang memfasilitasi drill soal mandiri maupun interaksi tatap muka kelas binaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fitur: Editor Formula KaTeX & mhchem */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <Atom className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Editor Formula KaTeX & mhchem
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mendukung penuh penulisan rumus kimia yang presisi: persamaan reaksi stoikiometri dengan panah reaksi (→, ⇌), wujud zat (aq, s, l, g), pembentukan endapan (↓), pelepasan gas (↑), ionik bermuatan, serta rumus cepat kimia olimpiade tanpa perlu mengetik sintaks manual yang rumit.
            </p>
          </div>

          {/* Fitur: Evaluasi Presisi AI & Deteksi Miskonsepsi */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Evaluasi Presisi AI & Deteksi Miskonsepsi
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mesin AI Gemini menganalisis penalaran siswa per baris: memberikan skor rubrik parsial, memvalidasi konsistensi logika perhitungan, dan menunjukkan secara spesifik di mana terjadi miskonsepsi stoikiometri maupun termokimia.
            </p>
          </div>

          {/* Fitur: Live Classroom Monitoring Guru */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Live Classroom Monitoring Guru
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guru dan pembina dapat memantau pengerjaan siswa secara realtime, melihat live progress lembar kerja, dan menggunakan laser pointer virtual untuk mengarahkan diskusi interaktif di kelas olimpiade.
            </p>
          </div>
        </div>
      </section>

      {/* SVG BAGIAN 1: Silabus Topik Kimia SMA Fase E dan Fase F */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-4">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fondasi Sekolah Menengah</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Silabus Topik Kimia SMA — Fase E & Fase F
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Diagram alur materi resmi Kurikulum Merdeka (Fase E Kelas 10 dan Fase F Kelas 11–12) yang menjadi prasyarat esensial sebelum melangkah ke level kompetisi olimpiade sains.
          </p>
        </div>

        {/* Big SVG Display */}
        <ChemistrySmaSyllabusSvg className="mt-4" />
      </section>

      {/* SVG BAGIAN 2: Kurikulum Terstruktur 10 Topik Silabus OSN Kimia */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-4">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-800 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span>Standar Puspresnas & IChO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Kurikulum Terstruktur 10 Topik Silabus OSN Kimia
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Piramida kurikulum 10 pilar kompetensi bertingkat: OSK (Kota/Kabupaten), OSP (Provinsi), OSN (Nasional), hingga seleksi International Chemistry Olympiad (IChO).
          </p>
        </div>

        {/* Big SVG Display */}
        <ChemistryOsnSyllabusSvg className="mt-4" />
      </section>

      {/* Call to Action (CTA) Section: Background Putih Bersih */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-slate-900 shadow-xl border border-slate-200/90 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Student Card */}
            <div className="space-y-4 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Untuk Calon Medalis Siswa</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                Siap Melangkah Menjadi Juara OSN Kimia?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Daftarkan akun siswa Anda secara gratis sekarang. Akses modul materi silabus, worksheet interaktif dengan penyimpanan online, dan evaluasi otomatis AI.
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-all border border-slate-200"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Masuk Akun</span>
                </Link>
              </div>
            </div>

            {/* Teacher Card */}
            <div className="space-y-4 pl-0 md:pl-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold rounded-full">
                <Users className="w-3.5 h-3.5 text-sky-600" />
                <span>Untuk Guru & Pembina Olimpiade</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                Pengelolaan Akun Guru & Pembina
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Untuk menjaga kualitas pembinaan, akun Guru/Pembina diterbitkan secara resmi oleh Administrator. Silakan hubungi admin atau masuk menggunakan kredensial resmi.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <div className="text-[11px] text-slate-500">Kontak Resmi Administrator:</div>
                <div className="font-mono text-sky-800 font-bold">ezzarscarlet@gmail.com</div>
              </div>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm active:scale-98"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Masuk sebagai Guru / Admin</span>
                </Link>
                <Link
                  to="/login?mode=forgot"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-slate-500 hover:text-slate-900 text-xs font-medium transition-colors"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Lupa Password?</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Hanya Tentang Creator dengan latar putih bersih */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-end text-xs text-slate-500">
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold rounded-xl transition-all border border-slate-200 shadow-2xs"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten"
                className="w-4 h-4 rounded-full object-contain shadow-2xs"
              />
              <span>Tentang Creator (github.com/fluffykitten) ↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
