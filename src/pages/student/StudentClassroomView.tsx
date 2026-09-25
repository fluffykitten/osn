import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  School,
  ArrowLeft,
  Users,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Play,
  Lock,
  Calendar,
  Sparkles,
  Info,
  Radio,
  BookOpen,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import { ChemistryWatermarkBackground } from '../../components/common/ChemistryWatermarkBackground';
import type {
  Classroom,
  ClassroomAssignment,
  ClassroomMember,
  ClassroomMemberStatus,
} from '../../types/database';

export const StudentClassroomView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const studentEmail =
    user?.email ||
    profile?.email ||
    localStorage.getItem('osn_student_email') ||
    'siswa@gmail.com';

  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [assignments, setAssignments] = useState<ClassroomAssignment[]>([]);
  const [members, setMembers] = useState<ClassroomMember[]>([]);
  const [activeTab, setActiveTab] = useState<'assignments' | 'classmates' | 'info'>('assignments');
  const [isLoading, setIsLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const loadClassroomData = async () => {
    if (!id) return;
    setIsLoading(true);

    try {
      const cls = await classroomService.getClassroomById(id, studentEmail);
      setClassroom(cls);
      if (cls?.id) {
        localStorage.setItem('osn_student_classroom_id', String(cls.id));
        if (studentEmail) {
          localStorage.setItem('osn_student_email', studentEmail);
        }
      }

      const numId = parseInt(id, 10);
      const asg = await classroomService.getClassroomAssignments(numId);
      setAssignments(asg);

      const mem = await classroomService.getClassroomMembers(numId);
      setMembers(mem);
    } catch (e) {
      console.error('Gagal memuat data kelas siswa:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadClassroomData();
  }, [id, studentEmail]);

  const handleCopyCode = () => {
    if (classroom?.code) {
      navigator.clipboard.writeText(classroom.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleStartWorksheet = (assignment: ClassroomAssignment) => {
    if (classroom?.user_membership_status === 'pending_approval') return;

    if (assignment.worksheet?.access_token && assignment.is_live_monitored) {
      navigate(`/worksheet/live/${assignment.worksheet.access_token}`);
    } else {
      navigate(`/worksheet/teacher_assignment/${assignment.worksheet_id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <div className="w-9 h-9 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        <span className="text-xs text-slate-500 font-medium">Memuat data kelas binaan...</span>
      </div>
    );
  }

  if (!classroom) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 font-display">Kelas Tidak Ditemukan</h2>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Kelas binaan yang Anda tuju tidak ditemukan atau kode kelas sudah tidak aktif lagi.
        </p>
        <Link
          to="/worksheet"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Koleksi Worksheet</span>
        </Link>
      </div>
    );
  }

  const isPending = classroom.user_membership_status === 'pending_approval';
  const isActive = classroom.user_membership_status === 'active' || !classroom.user_membership_status;
  const activeMembers = members.filter((m) => m.status === 'active');

  return (
    <div
      className="min-h-screen pb-16 transition-colors duration-200 relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    >
      <ChemistryWatermarkBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Back Link */}
      <Link
        to="/worksheet"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Lembar Kerja & Worksheet Saya</span>
      </Link>

      {/* Hero Classroom Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-900/40 space-y-6">
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-semibold">
                <School className="w-3.5 h-3.5 text-indigo-400" />
                <span>Kelas Binaan Pembina OSN</span>
              </span>

              {/* Status Siswa */}
              {isPending ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold animate-pulse">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Menunggu Persetujuan Guru</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 rounded-full text-emerald-300 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Anggota Aktif</span>
                </span>
              )}

              {/* Kode Kelas */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-xs font-mono font-bold transition-colors">
                <span className="text-slate-300">Kode:</span>
                <span className="text-indigo-200 tracking-wider">{classroom.code}</span>
                <button
                  onClick={handleCopyCode}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Salin Kode Kelas"
                >
                  {copiedCode ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
              {classroom.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {classroom.description ||
                'Kelas pembinaan intensif persiapan olimpiade sains kimia tingkat kabupaten, provinsi, dan nasional.'}
            </p>
          </div>

          {/* Teacher Profile Widget */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs flex items-center gap-3.5 shrink-0 self-start">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white font-bold text-base flex items-center justify-center shadow-xs">
              {(classroom.teacher_name || 'G')[0]}
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Guru Pembina
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {classroom.teacher_name || 'Guru Pembina OSN'}
              </div>
              <div className="text-[11px] text-indigo-300 font-mono">
                {classroom.teacher_email || 'pembina@osnkimia.id'}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="relative z-10 flex border-t border-indigo-900/60 pt-4 gap-4 sm:gap-6 text-xs font-bold overflow-x-auto">
          <button
            onClick={() => setActiveTab('assignments')}
            className={`pb-2 flex items-center gap-2 transition-all shrink-0 relative ${
              activeTab === 'assignments'
                ? 'text-white border-b-2 border-emerald-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Tugas & Worksheet ({assignments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('classmates')}
            className={`pb-2 flex items-center gap-2 transition-all shrink-0 relative ${
              activeTab === 'classmates'
                ? 'text-white border-b-2 border-indigo-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4 text-indigo-400" />
            <span>Rekan Sekelas ({activeMembers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('info')}
            className={`pb-2 flex items-center gap-2 transition-all shrink-0 relative ${
              activeTab === 'info'
                ? 'text-white border-b-2 border-sky-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Info className="w-4 h-4 text-sky-400" />
            <span>Panduan & Info Kelas</span>
          </button>
        </div>

        {/* Ambient Blur */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* PENDING APPROVAL NOTICE BANNER */}
      {isPending && (
        <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 shadow-2xs space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm">
            <Clock className="w-5 h-5 text-amber-600 animate-pulse" />
            <span>Permintaan Bergabung Sedang Menunggu Persetujuan Guru Pembina</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            Kode kelas Anda telah diterima oleh sistem. Demi ketertiban pembinaan, Guru Pembina akan
            memverifikasi dan menyetujui permintaan masuk kelas Anda terlebih dahulu. Setelah disetujui,
            Anda akan langsung dapat membuka dan mengerjakan seluruh paket soal penugasan di bawah ini.
          </p>
          <div className="pt-1 flex items-center gap-2 text-[11px] text-amber-700 font-medium">
            <span>Perlu akses segera? Silakan hubungi Guru Pembina Anda di:</span>
            <span className="font-mono font-bold text-amber-900">{classroom.teacher_email}</span>
          </div>
        </div>
      )}

      {/* TAB 1: ASSIGNMENTS */}
      {activeTab === 'assignments' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 font-display">
                Worksheet Ditugaskan Guru
              </h2>
              <p className="text-xs text-slate-500">
                Kerjakan paket latihan ini untuk persiapan bertahap menuju medali OSN Kimia.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
              Total {assignments.length} Tugas
            </span>
          </div>

          {assignments.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3 shadow-xs">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-sm font-bold text-slate-800">Belum Ada Penugasan Worksheet</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Guru Pembina belum mengunggah atau menugaskan paket soal ke kelas ini. Penugasan baru
                akan otomatis muncul di sini.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assignments.map((asg) => {
                const ws = asg.worksheet;
                const title = ws?.title || `Tugas Penugasan #${asg.worksheet_id}`;
                const description = ws?.description || 'Lembar kerja penugasan binaan OSN Kimia.';
                const itemCount = ws?.item_count || 10;
                const timeLimit = ws?.time_limit_minutes || 60;
                const passScore = ws?.pass_score || 70;

                return (
                  <div
                    key={asg.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-md">
                          Worksheet Mandiri
                        </span>

                        {asg.is_live_monitored && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-md">
                            <Radio className="w-3 h-3 text-rose-500 animate-pulse" />
                            <span>Dipantau Live</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {description}
                      </p>

                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>{itemCount} Soal</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{timeLimit} Menit</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>KKM {passScore}%</span>
                        </div>
                        {asg.due_date && (
                          <div className="flex items-center gap-1 text-amber-700">
                            <Calendar className="w-3.5 h-3.5 text-amber-500" />
                            <span>
                              Tenggat:{' '}
                              {new Date(asg.due_date).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                              })}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                      <span className="text-[11px] text-slate-400">
                        Ditugaskan:{' '}
                        {new Date(asg.assigned_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>

                      {isPending ? (
                        <button
                          disabled
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-400 text-xs font-semibold rounded-xl cursor-not-allowed"
                          title="Menunggu persetujuan guru pembina"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Terkunci (Pending)</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStartWorksheet(asg)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Mulai Kerjakan</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: CLASSMATES */}
      {activeTab === 'classmates' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs space-y-4">
          <div className="p-5 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Rekan Sekelas Binaan ({activeMembers.length})
            </h3>
            <p className="text-xs text-slate-500">
              Siswa yang telah diverifikasi dan aktif mengikuti pembinaan di kelas ini.
            </p>
          </div>

          {activeMembers.length === 0 ? (
            <div className="p-12 text-center text-xs text-slate-500">
              Belum ada rekan sekelas yang aktif.
            </div>
          ) : (
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeMembers.map((m) => {
                const isMe = m.student_email.toLowerCase() === studentEmail.toLowerCase();
                return (
                  <div
                    key={m.id}
                    className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-colors ${
                      isMe
                        ? 'bg-indigo-50/70 border-indigo-200'
                        : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                      {(m.student_name || m.student_email)[0].toUpperCase()}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-900 truncate flex items-center gap-1.5">
                        <span>{m.student_name || 'Calon Medalis OSN'}</span>
                        {isMe && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 bg-indigo-600 text-white rounded font-bold">
                            Anda
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono truncate">
                        {m.student_email}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CLASSROOM GUIDELINES & INFO */}
      {activeTab === 'info' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Informasi & Pedoman Pembinaan Kelas
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Pedoman resmi dari Guru Pembina untuk persiapan olimpiade kimia tingkat nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Format Pengerjaan Soal</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gunakan ChemToolbar dan editor KaTeX terintegrasi saat menjawab pertanyaan esai kimia,
                reaksi redoks, termodinamika, dan kesetimbangan.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Monitoring Live & Evaluasi AI</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jawaban Anda akan dinilai otomatis berdasarkan rubrik olimpiade Puspresnas/IChO, dan Guru
                Pembina dapat memberikan feedback langsung secara live.
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
