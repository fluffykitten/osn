import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, AlertTriangle, FileText, TrendingUp, Sparkles } from 'lucide-react';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';

export const TeacherDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded uppercase font-mono">
              Teacher & Coach Studio
            </span>
            <span className="text-xs text-slate-500">Dasbor Analitik Pembina OSN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Studio Pembina Olimpiade Kimia
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Pantau penguasaan 10 topik silabus binaan, deteksi miskonsepsi konsep siswa secara dini, dan terbitkan lembar kerja kustom.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/teacher/ai-studio"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Question Studio (Ekstraksi PDF)</span>
          </Link>
          <Link
            to="/teacher/worksheets/new"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold rounded-xl transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Rakit Worksheet Baru</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Total Siswa Binaan</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">24 Siswa</div>
          <div className="text-[11px] text-emerald-600 font-medium">Tim Reguler & Pelatnas</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Rata-rata Skor Worksheet</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">78.4%</div>
          <div className="text-[11px] text-slate-500">+4.2% minggu ini</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Worksheet Ditugaskan</span>
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">6 Paket</div>
          <div className="text-[11px] text-indigo-600 font-medium">2 tugas aktif</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Bank Soal Terverifikasi</span>
            <BookOpen className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">142 Soal</div>
          <div className="text-[11px] text-slate-500">Lintas 10 Topik Silabus</div>
        </div>
      </div>

      {/* Top Misconceptions Widget (Crucial for Chemistry Olympiad) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Top Miskonsepsi Siswa Terdeteksi AI
              </h3>
              <p className="text-xs text-slate-500">
                Poin kelemahan konseptual paling sering muncul pada langkah pengerjaan siswa.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-2">
            <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-bold rounded">
              Topik 4: Termodinamika
            </span>
            <h4 className="text-xs font-bold text-slate-900">
              Konversi Satuan Entropi (J vs kJ)
            </h4>
            <div className="text-[11px] text-slate-600 leading-relaxed">
              <KaTeXRenderer content="42% siswa lupa mengonversi satuan entropi $\Delta S^\circ$ dari $\text{J/(mol}\cdot\text{K)}$ ke $\text{kJ}$ saat menghitung $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$." />
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 space-y-2">
            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
              Topik 7: Elektrokimia
            </span>
            <h4 className="text-xs font-bold text-slate-900">
              Penentuan Nilai Transfer Elektron (n) pada Nernst
            </h4>
            <div className="text-[11px] text-slate-600 leading-relaxed">
              <KaTeXRenderer content="31% siswa keliru menentukan jumlah mol elektron $n$ pada reaksi redoks gabungan multielektron (misal: reaksi permanganometri)." />
            </div>
          </div>

          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/30 space-y-2">
            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded">
              Topik 10: Organik
            </span>
            <h4 className="text-xs font-bold text-slate-900">
              Inversi Walden vs Rasemisasi
            </h4>
            <div className="text-[11px] text-slate-600 leading-relaxed">
              <KaTeXRenderer content="28% siswa tertukar antara inversi stereokimia $S_N2$ murni dengan pembentukan campuran rasemat pada mekanisme karbokation $S_N1$." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
