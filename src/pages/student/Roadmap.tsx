import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PILLARS_DATA } from '../../data/syllabusData';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import {
  Compass,
  ArrowRight,
  BookOpen,
  Layers,
  Atom,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const Roadmap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-sky-900/50">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 text-xs font-semibold">
            <Atom className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
            <span>Puspresnas / BPTI • Silabus Resmi OSN Kimia SMA & IChO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-tight">
            Peta Silabus <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Penguasaan Kimia Tingkat Lanjut
            </span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Peta jalur pembelajaran berjenjang dari mekanika kuantum struktur atom, termodinamika fasa, kesetimbangan larutan kompleks, hingga mekanisme stereokimia organik. Pilih topik di bawah untuk mempelajari materi teoritis atau menguji pemahaman di lembar kerja.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/materi/1"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md active:scale-98"
            >
              <BookOpen className="w-4 h-4" />
              <span>Mulai Belajar: Topik 1 (Struktur Atom)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/materi"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 rounded-xl transition-all"
            >
              <Layers className="w-4 h-4 text-sky-300" />
              <span>Buka Database Materi Lengkap</span>
            </Link>
          </div>
        </div>

        {/* Decorative Grid Background Glow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 10 Pillars Grid Section */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Daftar Modul Silabus Kompetensi OSN
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Klik pada topik untuk langsung membaca materi teoritis mendalam, atau klik latihan untuk membuka worksheet.
            </p>
          </div>

          <span className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200 font-mono">
            10 Modul Tersedia
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 transition-all p-6 space-y-4 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Header Card: Pillar Number & Category */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-sky-50 group-hover:bg-sky-500 group-hover:text-white border border-sky-200 text-sky-800 flex items-center justify-center font-mono font-bold text-xs transition-colors">
                      #{pillar.pillar_number}
                    </span>
                    <span className="text-slate-500 font-medium">{pillar.category}</span>
                  </div>

                  <span className="text-[11px] font-mono font-semibold text-slate-400">
                    Topik {pillar.pillar_number}
                  </span>
                </div>

                {/* Clickable Title: Directly navigates to Material Database */}
                <div>
                  <button
                    onClick={() => navigate(`/materi/${pillar.pillar_number}`)}
                    className="text-left group/btn"
                  >
                    <h3 className="text-base font-bold text-slate-900 group-hover/btn:text-sky-600 transition-colors font-display flex items-center gap-1.5">
                      <span>{pillar.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all text-sky-600" />
                    </h3>
                  </button>

                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Pelajari Materi & Latihan Soal */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <Link
                  to={`/practice/osn/${pillar.pillar_number}`}
                  className="text-slate-500 hover:text-slate-800 font-semibold inline-flex items-center gap-1 transition-colors"
                  title="Latihan Soal Topik Ini di Bank Soal"
                >
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>Latihan di Bank Soal</span>
                </Link>

                <button
                  onClick={() => navigate(`/materi/${pillar.pillar_number}`)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold rounded-lg transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  <span>Pelajari Materi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};
