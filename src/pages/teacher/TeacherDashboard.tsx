import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, AlertTriangle, FileText, TrendingUp, Sparkles, Layers, School } from 'lucide-react';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { questionBankService } from '../../services/questionBankService';
import { classroomService } from '../../services/classroomService';
import { useAuth } from '../../contexts/AuthContext';

export const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  const teacherId = user?.id || 'teacher-demo-uuid';

  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const [worksheets, setWorksheets] = useState<any[]>([]);
  const [classrooms, setClassrooms] = useState<any[]>([]);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const qRes = await questionBankService.getQuestions();
        setTotalQuestions(qRes.questions?.length || 10);
        const ws = await questionBankService.getAllWorksheets(teacherId);
        setWorksheets(ws);
        const cls = await classroomService.getTeacherClassrooms(teacherId);
        setClassrooms(cls);
      } catch (e) {
        console.warn('Gagal memuat statistik bank soal & kelas:', e);
      }
    };
    loadStats();
  }, [teacherId]);

  const totalStudents = classrooms.reduce((sum, c) => sum + (c.member_count || 0), 0);

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
            Pantau penguasaan silabus siswa, kelola kelas binaan via invite email, dan rancang lembar kerja mandiri.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to="/teacher/classes"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold rounded-xl transition-all shadow-2xs"
          >
            <School className="w-3.5 h-3.5 text-indigo-600" />
            <span>Manajemen Kelas</span>
          </Link>
          <Link
            to="/practice"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold rounded-xl transition-all shadow-2xs"
          >
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Buka Bank Soal</span>
          </Link>
          <Link
            to="/teacher/ai-studio"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Studio (PDF)</span>
          </Link>
          <Link
            to="/teacher/worksheets/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Rakit Worksheet Baru</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Link to="/teacher/classes" className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2 hover:border-indigo-300 transition-all block">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Kelas Binaan Saya</span>
            <School className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">{classrooms.length} Kelas</div>
          <div className="text-[11px] text-indigo-600 font-medium">{totalStudents} Siswa Terdaftar</div>
        </Link>

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
            <span>Worksheet Mandiri Saya</span>
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">{worksheets.length} Paket</div>
          <div className="text-[11px] text-indigo-600 font-medium">Database Worksheet Pribadi</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Bank Soal Terverifikasi</span>
            <BookOpen className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900">{totalQuestions} Soal</div>
          <div className="text-[11px] text-slate-500">Lintas 10 Topik Silabus OSN</div>
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

      {/* Riwayat Penugasan Worksheet */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Riwayat Naskah Ujian & Worksheet Terbit
              </h3>
              <p className="text-xs text-slate-500">
                Daftar paket soal dan penugasan yang telah dirakit dan siap digunakan.
              </p>
            </div>
          </div>
        </div>

        {worksheets.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-sm text-slate-500 mb-4">Belum ada worksheet yang dibuat.</p>
            <Link
              to="/teacher/worksheets/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Buat Worksheet Pertama</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {worksheets.map((ws, idx) => (
              <div key={ws.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{ws.title}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-slate-500 font-mono">ID: {ws.id}</span>
                      {ws.access_token && (
                        <span className="px-1.5 py-0.5 bg-rose-100 text-rose-800 text-[9px] font-bold rounded font-mono border border-rose-200">
                          Token: {ws.access_token}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                    Published
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">{ws.description}</p>
                <div className="flex items-center gap-4 text-[11px] text-slate-500 font-semibold pt-2 border-t border-slate-100">
                  <span>{ws.item_count || 0} Soal</span>
                  <span>{ws.time_limit_minutes || 0} Menit</span>
                  <span>KKM: {ws.pass_score || 0}%</span>
                </div>
                
                {/* Action Buttons: View & Edit */}
                <div className="flex gap-2 pt-2 border-t border-slate-100 mt-2">
                  <Link
                    to={`/worksheet/teacher_assignment/${ws.id}`}
                    className="flex-1 text-center py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Melihat Naskah
                  </Link>
                  <Link
                    to={`/teacher/worksheets/edit/${ws.id}`}
                    className="flex-1 text-center py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg transition-colors border border-emerald-200"
                  >
                    Edit & Sesuaikan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
