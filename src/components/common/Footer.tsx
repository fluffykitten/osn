import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Layers, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                ⚛
              </div>
              <span className="font-bold text-slate-900 text-sm font-display">
                OSN Kimia Mastery
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Platform interaktif pembinaan komprehensif dan evaluasi AI untuk persiapan Olimpiade Sains Nasional Kimia SMA (tingkat OSK, OSP, OSN) serta International Chemistry Olympiad (IChO).
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Standar Kurikulum Silabus Puspresnas / BPTI & IChO</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Navigasi Belajar</h4>
            <ul className="space-y-1.5 text-slate-500">
              <li>
                <Link to="/" className="hover:text-emerald-700 transition-colors">
                  Peta Roadmap Silabus
                </Link>
              </li>
              <li>
                <Link to="/materi" className="hover:text-emerald-700 transition-colors">
                  Database Materi OSN
                </Link>
              </li>
              <li>
                <Link to="/worksheet/static_module/1" className="hover:text-emerald-700 transition-colors">
                  Interactive Worksheet Player
                </Link>
              </li>
              <li>
                <Link to="/periodic-table" className="hover:text-emerald-700 transition-colors">
                  Tabel Periodik Interaktif
                </Link>
              </li>
            </ul>
          </div>

          {/* Teacher & Tooling */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Fitur Pengajar & AI</h4>
            <ul className="space-y-1.5 text-slate-500">
              <li>
                <Link to="/teacher" className="hover:text-indigo-700 transition-colors">
                  Studio Guru & Pembina
                </Link>
              </li>
              <li>
                <Link to="/teacher/ai-studio" className="hover:text-indigo-700 transition-colors">
                  Multimodal PDF Question Extractor
                </Link>
              </li>
              <li>
                <Link to="/teacher/worksheets/new" className="hover:text-indigo-700 transition-colors">
                  Worksheet Builder Kustom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} OSN Kimia Mastery. Dirancang untuk pembinaan olimpiade sains berstandar tinggi.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Formula bertenaga KaTeX & mhchem</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
