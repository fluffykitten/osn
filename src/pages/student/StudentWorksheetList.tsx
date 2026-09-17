import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  KeyRound,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Play,
  Award,
  Sparkles,
  Filter,
  Search,
  Layers,
  Radio,
  Copy,
  Check,
  Plus,
  BookOpen,
  Atom,
  Flame,
  ChevronRight,
  RefreshCw,
  School,
} from 'lucide-react';
import {
  studentWorksheetService,
  type StudentWorksheetItem,
} from '../../services/studentWorksheetService';
import { classroomService } from '../../services/classroomService';
import { useAuth } from '../../contexts/AuthContext';
import { TokenJoinModal } from '../../components/worksheet/TokenJoinModal';
import { JoinClassroomModal } from '../../components/classroom/JoinClassroomModal';
import type { Classroom } from '../../types/database';

export const StudentWorksheetList: React.FC = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const studentEmail =
    user?.email ||
    profile?.email ||
    localStorage.getItem('osn_student_email') ||
    'siswa@gmail.com';

  const [worksheets, setWorksheets] = useState<StudentWorksheetItem[]>([]);
  const [studentClasses, setStudentClasses] = useState<Classroom[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'teacher' | 'syllabus'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [isJoinClassModalOpen, setIsJoinClassModalOpen] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Muat daftar worksheet siswa dan tugas dari kelas undangan
  const loadWorksheets = async () => {
    const list = studentWorksheetService.getStudentWorksheets();

    if (studentEmail) {
      try {
        const classes = await classroomService.getStudentClassrooms(studentEmail, user?.id);
        setStudentClasses(classes);

        const assignments = await classroomService.getStudentAssignments(studentEmail, user?.id);
        const assignmentItems: StudentWorksheetItem[] = assignments.map((asg) => ({
          id: asg.worksheet_id,
          type: 'teacher_assignment',
          title: asg.worksheet?.title || `Tugas: ${asg.classroom?.name || 'Kelas OSN'}`,
          description: asg.worksheet?.description || `Ditugaskan oleh Guru di kelas ${asg.classroom?.name}`,
          category: asg.classroom?.name || 'Tugas Kelas',
          token: asg.worksheet?.access_token,
          item_count: asg.worksheet?.item_count || 10,
          time_limit_minutes: asg.worksheet?.time_limit_minutes || 60,
          pass_score: asg.worksheet?.pass_score || 70,
          status: 'not_started',
          enrolled_at: asg.assigned_at,
          last_accessed_at: asg.assigned_at,
        }));

        // Gabungkan tanpa duplikat
        const merged = [...assignmentItems];
        list.forEach((item) => {
          if (!merged.some((m) => m.id === item.id && m.type === item.type)) {
            merged.push(item);
          }
        });
        setWorksheets(merged);
        return;
      } catch (e) {
        console.warn('Gagal memuat tugas kelas siswa:', e);
      }
    }

    setWorksheets(list);
  };

  useEffect(() => {
    loadWorksheets();
  }, [studentEmail, user?.id]);

  // Filter worksheet berdasarkan tab & pencarian
  const filteredWorksheets = useMemo(() => {
    return worksheets.filter((item) => {
      // Filter Tab
      if (activeTab === 'teacher' && item.type !== 'live' && item.type !== 'teacher_assignment') {
        return false;
      }
      if (activeTab === 'syllabus' && item.type !== 'static_module') {
        return false;
      }

      // Filter Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCategory = item.category?.toLowerCase().includes(query);
        const matchToken = item.token?.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchCategory && !matchToken) {
          return false;
        }
      }

      return true;
    });
  }, [worksheets, activeTab, searchQuery]);

  // Statistik Ringkasan Siswa
  const stats = useMemo(() => {
    const total = worksheets.length;
    const teacherCount = worksheets.filter(
      (w) => w.type === 'live' || w.type === 'teacher_assignment'
    ).length;
    const completedCount = worksheets.filter((w) => w.status === 'completed').length;
    const inProgressCount = worksheets.filter((w) => w.status === 'in_progress').length;

    return { total, teacherCount, completedCount, inProgressCount };
  }, [worksheets]);

  const handleCopyToken = (token: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const handleOpenWorksheet = (item: StudentWorksheetItem) => {
    if (item.type === 'live' && item.token) {
      navigate(`/worksheet/live/${item.token}`);
    } else if (item.type === 'teacher_assignment') {
      navigate(`/worksheet/teacher_assignment/${item.id}`);
    } else {
      navigate(`/worksheet/static_module/${item.id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-sky-900/40">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ruang Kerja Pengerjaan Siswa OSN Kimia</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display leading-tight">
              Koleksi Lembar Kerja{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Worksheet Saya
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Pilih dan kerjakan paket soal latihan mandiri 10 Topik Silabus Puspresnas / IChO atau bergabung ke sesi penugasan live yang dibuat oleh Guru Pembina Anda melalui kode token.
            </p>
          </div>

          {/* Quick Action Buttons: Masuk Kode Kelas & Masuk Token Guru */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setIsJoinClassModalOpen(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
              >
                <School className="w-4 h-4 text-white" />
                <span>+ Masuk Kode Kelas</span>
              </button>

              <button
                onClick={() => setIsTokenModalOpen(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-slate-950" />
                <span>+ Masukkan Token Guru</span>
              </button>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              Punya kode kelas atau token dari guru? Masukkan di atas.
            </span>
          </div>
        </div>

        {/* Decorative ambient background */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Classroom Section: Kelas Binaan Siswa */}
      {studentClasses.length > 0 ? (
        <div className="bg-gradient-to-r from-indigo-50/90 via-sky-50/70 to-indigo-50/90 border border-indigo-200/80 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <School className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-950 font-display">
                  Kelas Binaan Saya ({studentClasses.length})
                </div>
                <div className="text-xs text-indigo-700">
                  Akses materi dan penugasan khusus dari Guru Pembina OSN Anda.
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsJoinClassModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Gabung Kelas Lain</span>
            </button>
          </div>

          {/* Grid Kartu Kelas Siswa */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {studentClasses.map((cls) => {
              const isPending = cls.user_membership_status === 'pending_approval';
              return (
                <div
                  key={cls.id}
                  onClick={() => navigate(`/student/classes/${cls.id}`)}
                  className="bg-white rounded-2xl border border-indigo-100 p-4 shadow-2xs hover:border-indigo-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between gap-3 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-800 rounded border border-slate-200">
                        {cls.code}
                      </span>
                      {isPending ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-md">
                          <Clock className="w-3 h-3 text-amber-500" />
                          <span>Pending Approval</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>Aktif</span>
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {cls.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {cls.description || 'Kelas pembinaan olimpiade sains kimia.'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                    <span>Buka Halaman Kelas</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-3xl bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50 border border-indigo-200/80 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5 max-w-xl">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <School className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-indigo-950 font-display">
                Punya Kode Kelas dari Guru Pembina OSN Anda?
              </div>
              <div className="text-[11px] text-indigo-700 leading-relaxed">
                Masukkan kode kelas yang diberikan oleh Guru untuk bergabung ke kelas binaan dan mendapatkan penugasan intensif olimpiade.
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsJoinClassModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <School className="w-3.5 h-3.5" />
            <span>Masukkan Kode Kelas</span>
          </button>
        </div>
      )}

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-slate-900 font-mono">{stats.total}</div>
            <div className="text-[11px] font-medium text-slate-500">Total Worksheet</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-slate-900 font-mono">{stats.teacherCount}</div>
            <div className="text-[11px] font-medium text-slate-500">Tugas Guru (Live)</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-slate-900 font-mono">{stats.inProgressCount}</div>
            <div className="text-[11px] font-medium text-slate-500">Sedang Dikerjakan</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-slate-900 font-mono">{stats.completedCount}</div>
            <div className="text-[11px] font-medium text-slate-500">Selesai / Dinilai</div>
          </div>
        </div>
      </div>

      {/* Control Bar: Filter Tabs & Search Box */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Semua Worksheet</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded-md font-mono">
              {stats.total}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('teacher')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'teacher'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Tugas & Sesi Guru</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                activeTab === 'teacher'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-100 text-emerald-800'
              }`}
            >
              {stats.teacherCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'syllabus'
                ? 'bg-sky-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Modul Mandiri Silabus</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                activeTab === 'syllabus' ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-800'
              }`}
            >
              10
            </span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari worksheet atau topik..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
        </div>
      </div>

      {/* Worksheets Grid */}
      {filteredWorksheets.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            {activeTab === 'teacher' ? <KeyRound className="w-7 h-7" /> : <Search className="w-7 h-7" />}
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h3 className="text-base font-bold text-slate-900 font-display">
              {activeTab === 'teacher'
                ? 'Belum Ada Tugas Guru yang Terdaftar'
                : 'Tidak Ada Worksheet yang Sesuai'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {activeTab === 'teacher'
                ? 'Minta kode token unik (contoh: OSN-XXXX) kepada Guru Pembina Anda, lalu klik tombol di bawah untuk memasukkan token.'
                : 'Coba periksa kata kunci pencarian Anda atau gunakan tab kategori lainnya.'}
            </p>
          </div>

          {activeTab === 'teacher' && (
            <button
              onClick={() => setIsTokenModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
            >
              <KeyRound className="w-4 h-4" />
              <span>Masukkan Kode Token Sekarang</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorksheets.map((item) => {
            const isLive = item.type === 'live' || item.type === 'teacher_assignment';

            return (
              <div
                key={`${item.type}-${item.id}-${item.token || ''}`}
                onClick={() => handleOpenWorksheet(item)}
                className="bg-white rounded-2xl border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all p-5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isLive ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-sky-500 to-blue-500'
                  }`}
                />

                <div className="space-y-3.5 pt-1">
                  {/* Badge Header Row */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    {isLive ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>TUGAS GURU LIVE</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-sky-800 font-bold text-[10px] font-mono">
                        <span>MODUL SILABUS #{item.pillar_number}</span>
                      </span>
                    )}

                    {/* Status Badge */}
                    {item.status === 'completed' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 font-semibold text-[10px] rounded-md">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Selesai</span>
                      </span>
                    ) : item.status === 'in_progress' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-800 font-semibold text-[10px] rounded-md">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>Sedang Berjalan</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-600 font-medium text-[10px] rounded-md">
                        <span>Belum Dimulai</span>
                      </span>
                    )}
                  </div>

                  {/* Token Pill (if teacher assignment) */}
                  {isLive && item.token && (
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
                      <div className="flex items-center gap-2">
                        <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] text-slate-500">Token:</span>
                        <span className="font-mono font-bold text-slate-900 tracking-wider">
                          {item.token}
                        </span>
                      </div>
                      <button
                        onClick={(e) => handleCopyToken(item.token!, e)}
                        className="p-1 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
                        title="Salin Kode Token"
                      >
                        {copiedToken === item.token ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-display line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-1 font-medium">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.item_count} Soal Analitis</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.time_limit_minutes} Menit</span>
                    </span>
                    {item.score !== undefined && (
                      <span className="flex items-center gap-1 font-bold text-emerald-700 font-mono">
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Skor: {item.score}/{item.max_score || 10}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.category || item.teacher_name || 'Silabus Puspresnas'}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenWorksheet(item);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                      isLive
                        ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white'
                        : 'bg-sky-50 hover:bg-sky-100 text-sky-800 group-hover:bg-sky-600 group-hover:text-white'
                    }`}
                  >
                    <span>{item.status === 'in_progress' ? 'Lanjutkan' : 'Buka Lembar Kerja'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Global Token Modal */}
      <TokenJoinModal
        isOpen={isTokenModalOpen}
        onClose={() => {
          setIsTokenModalOpen(false);
          loadWorksheets();
        }}
      />

      {/* Modal Gabung Kelas Siswa */}
      <JoinClassroomModal
        isOpen={isJoinClassModalOpen}
        onClose={() => {
          setIsJoinClassModalOpen(false);
          loadWorksheets();
        }}
        onSuccess={() => {
          loadWorksheets();
        }}
      />
    </div>
  );
};
