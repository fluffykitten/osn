import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS_DATA } from '../../data/syllabusData';
import { SplitPreview } from '../../components/worksheet/SplitPreview';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Zap,
  GraduationCap,
  Atom,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  // Live Playground State on Hero
  const [demoFormula, setDemoFormula] = useState(
    'Reaksi reduksi kalium permanganat dalam suasana asam:\n$$\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$$\n\nPotensial reduksi standar: $E^\\circ = +1.51\\text{ V}$'
  );
  const [demoAnswer, setDemoAnswer] = useState('\\ce{Mn^2+}');
  const [activePillarTab, setActivePillarTab] = useState(1);

  const activePillar = PILLARS_DATA.find((p) => p.pillar_number === activePillarTab) || PILLARS_DATA[0];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-800 text-xs font-semibold shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Platform Pembinaan OSN Kimia SMA & IChO Standar Puspresnas</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight font-display">
            Kuasai <span className="text-sky-600">10 Topik Silabus</span> OSN Kimia dengan{' '}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Evaluasi Presisi AI
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Platform pembelajaran ilmiah modern dengan pengetikan formula KaTeX & mhchem interaktif, Dual-Mode Worksheet mandiri & penugasan guru, serta scaffolding penalaran langkah demi langkah.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/worksheet/static_module/1"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98"
            >
              <Zap className="w-4 h-4" />
              <span>Mulai Worksheet Demo (Topik 1)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 rounded-xl transition-all shadow-2xs hover:border-slate-400"
            >
              <Compass className="w-4 h-4 text-slate-500" />
              <span>Jelajahi 10 Topik Silabus</span>
            </Link>
          </div>
        </div>

        {/* Live Interactive Chemical Formula Sandbox Preview */}
        <div className="max-w-5xl mx-auto px-4 mt-12">
          <div className="p-1 bg-gradient-to-b from-sky-200 to-sky-100 rounded-2xl shadow-lg border border-sky-200">
            <div className="bg-white rounded-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Atom className="w-5 h-5 text-sky-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-display">
                      Live Chemical Notation Sandbox
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Coba ketik formula reaksi atau klik tombol toolbar untuk melihat render KaTeX mhchem seketika:
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
                  <span>Real-time mhchem Engine</span>
                </div>
              </div>

              {/* SplitPreview Component in Hero */}
              <SplitPreview
                stepsValue={demoFormula}
                onStepsChange={setDemoFormula}
                finalAnswerValue={demoAnswer}
                onFinalAnswerChange={setDemoAnswer}
                className="border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10 Topik Silabus Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Kurikulum Terstruktur 10 Topik Silabus OSN Kimia
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Disusun bertahap dari tingkat Kabupaten (OSK), Provinsi (OSP), Nasional (OSN), hingga tingkat Internasional (IChO).
          </p>
        </div>

        {/* Pillars Horizontal Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 border-b border-slate-200 text-xs font-semibold">
          {PILLARS_DATA.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePillarTab(p.pillar_number)}
              className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activePillarTab === p.pillar_number
                  ? 'bg-sky-600 text-white shadow-2xs font-bold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                {p.pillar_number}
              </span>
              <span>{p.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Topic Card Detail */}
        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold rounded-full">
                  Topik #{activePillar.pillar_number}
                </span>
                <span className="text-xs font-medium text-slate-500">{activePillar.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {activePillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activePillar.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 mb-2">Materi Utama:</div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs leading-relaxed space-y-2">
                  <KaTeXRenderer content={activePillar.content_markdown} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Link
                  to={`/worksheet/static_module/${activePillar.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-lg transition-all shadow-2xs"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Kerjakan Static Worksheet Topik #{activePillar.pillar_number}</span>
                </Link>
              </div>
            </div>

            {/* Benchmark Preview Card */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Contoh Soal Kurasi</span>
                  <span className="px-2 py-0.5 bg-sky-50 border border-sky-200 text-sky-700 rounded text-[10px] font-bold">
                    Level OSK / OSP
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium line-clamp-4">
                  Tersedia 3–5 butir soal standar olimpiade per topik lengkap dengan rubrik penilaian bertingkat dan diagnostik miskonsepsi.
                </p>
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs space-y-1">
                  <div className="font-semibold text-sky-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>Lulus Checklist Rubrik</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Selesaikan lembar kerja topik ini untuk mengukur tingkat penguasaan konsep Anda.
                  </p>
                </div>
              </div>

              <Link
                to={`/practice?pillar=${activePillar.pillar_number}`}
                className="w-full text-center py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 rounded-lg transition-colors block"
              >
                Lihat Bank Soal Topik Ini
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Mode Worksheet Feature Showcase */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Arsitektur Dua Mode Worksheet
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Fleksibilitas penuh bagi siswa untuk latihan mandiri dan bagi guru untuk merancang penugasan ujian terbimbing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mode 1: Static Worksheet */}
            <div className="p-6 rounded-2xl border border-sky-200/80 bg-sky-50/30 hover:border-sky-300 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  1. Worksheet Statis (Drill Pemahaman Modul)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Melekat langsung pada setiap modul silabus dari 10 Topik OSN. Berisi butir soal standar untuk menguji penguasaan konsep kunci.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Dapat diakses mandiri kapan saja tanpa batasan waktu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Koreksi instan langkah demi langkah dengan Gemini 2.5 Flash</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Syarat kelulusan modul dan syarat kenaikan XP silabus</span>
                </li>
              </ul>

              <Link
                to="/worksheet/static_module/1"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 pt-2"
              >
                <span>Uji Coba Static Worksheet Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mode 2: Custom Assignment */}
            <div className="p-6 rounded-2xl border border-blue-200/80 bg-blue-50/20 hover:border-blue-300 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  2. Custom Assignment (Penugasan Guru & Pembina)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Dirakit khusus oleh guru menggunakan Worksheet Builder: memadukan filter tags, tingkat kesulitan, batas waktu timer, dan bobot skor per soal.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Penugasan terarah ke rombel atau kelas binaan olimpiade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Batas waktu pengerjaan otomatis (timer) & tenggat pengumpulan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Masuk ke gradebook guru dengan catatan review manual tambahan</span>
                </li>
              </ul>

              <Link
                to="/teacher/worksheets/new"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 pt-2"
              >
                <span>Buka Worksheet Builder Guru</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
