import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Users,
  Plus,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Clock,
  Trash2,
  Copy,
  Check,
  FileText,
  Radio,
  ExternalLink,
  Calendar,
  AlertCircle,
  KeyRound,
  Eye,
  ShieldCheck,
  UserCheck,
  UserX,
  XCircle,
  BookOpen,
  MessageSquare,
  Send,
  Sparkles,
  X,
  ChevronRight,
  Activity,
  RefreshCw,
  TrendingUp,
  Monitor,
  Search,
  BarChart3,
  Award,
  CheckSquare,
  Layers,
  Download,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { BENCHMARK_QUESTIONS, PILLARS_DATA } from '../../data/syllabusData';
import { useAuth } from '../../contexts/AuthContext';
import { classroomService } from '../../services/classroomService';
import { questionBankService } from '../../services/questionBankService';
import { worksheetRealtimeService, extractStudentAnswer } from '../../services/worksheetRealtimeService';
import { calculatePillarMastery, getSubmissionHistory } from '../../services/submissionService';
import type {
  Classroom,
  ClassroomMember,
  ClassroomAssignment,
  Worksheet,
  WorksheetLiveSession,
  Question,
  PillarMasteryScore,
} from '../../types/database';

export const ClassroomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const teacherId = user?.id || 'teacher-demo-uuid';

  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [members, setMembers] = useState<ClassroomMember[]>([]);
  const [assignments, setAssignments] = useState<ClassroomAssignment[]>([]);
  const [teacherWorksheets, setTeacherWorksheets] = useState<Worksheet[]>([]);

  // 4 Tab System (members as default)
  const [activeTab, setActiveTab] = useState<'members' | 'assignments' | 'live' | 'analytics'>('members');
  const [isLoading, setIsLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isProjectorOpen, setIsProjectorOpen] = useState(false);
  const [isBatchApproving, setIsBatchApproving] = useState(false);

  // SpeedGrader State
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<number | null>(null);
  const [selectedSpeedGraderStudentId, setSelectedSpeedGraderStudentId] = useState<string | null>(null);
  const [speedGraderSubmissions, setSpeedGraderSubmissions] = useState<any[]>([]);
  const [isLoadingSpeedGrader, setIsLoadingSpeedGrader] = useState(false);
  const [speedGraderQuestions, setSpeedGraderQuestions] = useState<Question[]>([]);
  const [speedGraderStudentSearch, setSpeedGraderStudentSearch] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  // Analytics State
  const [pillarMastery, setPillarMastery] = useState<PillarMasteryScore[]>([]);

  // Live Monitor State
  const [liveSessions, setLiveSessions] = useState<WorksheetLiveSession[]>([]);
  const [inspectedStudent, setInspectedStudent] = useState<WorksheetLiveSession | null>(null);
  const [showQuestionTextInModal, setShowQuestionTextInModal] = useState(true);
  const [quickComment, setQuickComment] = useState('');
  const [isSendingQuickComment, setIsSendingQuickComment] = useState(false);
  const [quickCommentSent, setQuickCommentSent] = useState(false);
  const [isRefreshingLive, setIsRefreshingLive] = useState(false);

  // Pencocokan naskah soal lengkap untuk modal inspeksi
  const modalMatchedQuestion = React.useMemo(() => {
    if (!inspectedStudent) return null;
    if (inspectedStudent.current_question_title) {
      const byTitle = BENCHMARK_QUESTIONS.find(
        (q) => q.title.toLowerCase().trim() === inspectedStudent.current_question_title?.toLowerCase().trim()
      );
      if (byTitle) return byTitle;
    }
    const idx = inspectedStudent.current_question_index ?? 0;
    return BENCHMARK_QUESTIONS[idx] || BENCHMARK_QUESTIONS[0];
  }, [inspectedStudent]);

  // Invite Modal State
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteName, setInviteName] = useState('');
  const [isInviting, setIsInviting] = useState(false);
  const [inviteFeedback, setInviteFeedback] = useState<string | null>(null);

  // Assign Modal State
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedWsId, setSelectedWsId] = useState<number | null>(null);
  const [dueDate, setDueDate] = useState('');
  const [isLiveMonitored, setIsLiveMonitored] = useState(true);
  const [isAssigning, setIsAssigning] = useState(false);

  const loadData = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const cls = await classroomService.getClassroomById(id);
      setClassroom(cls);

      const mem = await classroomService.getClassroomMembers(parseInt(id, 10));
      setMembers(mem);

      const asg = await classroomService.getClassroomAssignments(parseInt(id, 10));
      setAssignments(asg);

      // Muat daftar worksheet milik guru untuk dropdown penugasan
      const wsList = await questionBankService.getAllWorksheets(teacherId);
      setTeacherWorksheets(wsList);
      if (wsList.length > 0 && !selectedWsId) {
        setSelectedWsId(wsList[0].id);
      }
    } catch (e) {
      console.error('Gagal memuat detail kelas:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [id, teacherId]);

  // Berlangganan (Subscribe) ke presence seluruh siswa di kelas secara real-time
  useEffect(() => {
    if (!classroom?.id) return;
    const memberEmails = members.map((m) => m.student_email?.toLowerCase()).filter(Boolean) as string[];
    const memberStudentIds = members.map((m) => m.student_id).filter(Boolean) as string[];
    const unsubscribe = worksheetRealtimeService.subscribeToClassroomPresence(
      classroom.id,
      (sessions) => {
        setLiveSessions(sessions);
        setInspectedStudent((prev) => {
          if (!prev) return null;
          const match = sessions.find(
            (s) =>
              s.student_id === prev.student_id ||
              (s.student_email && s.student_email.toLowerCase() === prev.student_email?.toLowerCase())
          );
          return match || prev;
        });
      },
      memberEmails,
      memberStudentIds
    );
    return () => unsubscribe();
  }, [classroom?.id, members]);

  // Pipeline Data SpeedGrader
  useEffect(() => {
    if (!selectedAssignmentId) {
      setSpeedGraderSubmissions([]);
      setSpeedGraderQuestions([]);
      return;
    }

    const loadSpeedGraderData = async () => {
      setIsLoadingSpeedGrader(true);
      try {
        const asg = assignments.find((a) => a.id === selectedAssignmentId);
        if (!asg) return;

        let ws = asg.worksheet;
        if (!ws || (!ws.items && !(ws as any).selected_question_ids)) {
          const fetchedWs = await questionBankService.getWorksheetById(asg.worksheet_id);
          if (fetchedWs) ws = fetchedWs;
        }

        const questionIds: number[] =
          (ws as any)?.selected_question_ids ||
          ws?.items?.map((it) => it.question_id) || [1, 2, 3];

        const allQuestionsRes = await questionBankService.getQuestions();
        const pool =
          allQuestionsRes.questions && allQuestionsRes.questions.length > 0
            ? allQuestionsRes.questions
            : BENCHMARK_QUESTIONS;
        const matchedQuestions = pool.filter((q) => questionIds.includes(q.id));
        setSpeedGraderQuestions(
          matchedQuestions.length > 0 ? matchedQuestions : BENCHMARK_QUESTIONS.slice(0, 3)
        );

        const activeMembers = members.filter((m) => m.status === 'active');
        const studentIds = activeMembers
          .map((m) => m.student_id || m.student_email)
          .filter(Boolean) as string[];

        const subs = await classroomService.getWorksheetSubmissions(questionIds, studentIds);
        setSpeedGraderSubmissions(subs);

        // Pilih otomatis siswa aktif pertama jika belum dipilih
        if (activeMembers.length > 0 && !selectedSpeedGraderStudentId) {
          setSelectedSpeedGraderStudentId(activeMembers[0].student_id || activeMembers[0].student_email);
        }
      } catch (err) {
        console.warn('Gagal memuat data SpeedGrader:', err);
      } finally {
        setIsLoadingSpeedGrader(false);
      }
    };

    loadSpeedGraderData();
  }, [selectedAssignmentId, assignments, members]);

  // Kalkulasi Analitik Penguasaan Silabus 10 Pilar
  useEffect(() => {
    if (activeTab !== 'analytics') return;

    const loadAnalytics = () => {
      try {
        const activeMembers = members.filter((m) => m.status === 'active');
        const activeIds = activeMembers.map((m) => m.student_id || m.student_email).filter(Boolean);

        const allLocal = getSubmissionHistory();
        const classroomSubs = allLocal.filter(
          (sub) => activeIds.includes(sub.userId) || activeIds.includes((sub as any).user_id)
        );

        const computed = calculatePillarMastery(classroomSubs.length > 0 ? classroomSubs : undefined);
        setPillarMastery(computed);
      } catch (e) {
        console.warn('Gagal menghitung analitik kelas:', e);
      }
    };

    loadAnalytics();
  }, [activeTab, members]);

  const handleSendQuickComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inspectedStudent || !quickComment.trim()) return;
    setIsSendingQuickComment(true);
    try {
      await worksheetRealtimeService.sendTeacherComment({
        access_token: inspectedStudent.access_token || `WS-${inspectedStudent.worksheet_id}`,
        student_id: inspectedStudent.student_id,
        teacher_id: teacherId,
        teacher_name: classroom?.teacher_name || 'Guru Pembina',
        question_id: inspectedStudent.current_question_index ?? 0,
        comment_text: quickComment.trim(),
      });
      setQuickComment('');
      setQuickCommentSent(true);
      setTimeout(() => setQuickCommentSent(false), 3000);
    } catch (err) {
      console.warn('Gagal mengirim catatan:', err);
    } finally {
      setIsSendingQuickComment(false);
    }
  };

  const handleCopyCode = () => {
    if (classroom?.code) {
      navigator.clipboard.writeText(classroom.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleInviteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !inviteEmail.trim()) return;

    setIsInviting(true);
    setInviteFeedback(null);
    try {
      await classroomService.inviteStudentByEmail(
        parseInt(id, 10),
        inviteEmail.trim(),
        inviteName.trim() || undefined
      );
      setInviteFeedback(`Undangan berhasil dikirim ke ${inviteEmail.trim()}!`);
      setInviteEmail('');
      setInviteName('');
      const updatedMem = await classroomService.getClassroomMembers(parseInt(id, 10));
      setMembers(updatedMem);
      setTimeout(() => {
        setIsInviteModalOpen(false);
        setInviteFeedback(null);
      }, 1500);
    } catch (err: any) {
      setInviteFeedback(`Gagal mengundang: ${err?.message || 'Error'}`);
    } finally {
      setIsInviting(false);
    }
  };

  const handleRemoveMember = async (memberId: number, memberEmail: string) => {
    if (!id) return;
    if (window.confirm(`Hapus ${memberEmail} dari kelas ini?`)) {
      await classroomService.removeStudentFromClass(parseInt(id, 10), memberId);
      const updatedMem = await classroomService.getClassroomMembers(parseInt(id, 10));
      setMembers(updatedMem);
    }
  };

  const handleApproveStudent = async (memberId: number, studentName?: string | null) => {
    if (!id) return;
    await classroomService.approveStudent(parseInt(id, 10), memberId);
    const updatedMem = await classroomService.getClassroomMembers(parseInt(id, 10));
    setMembers(updatedMem);
  };

  const handleApproveAllPending = async () => {
    if (!id) return;
    setIsBatchApproving(true);
    try {
      await classroomService.approveAllPending(parseInt(id, 10));
      const updatedMem = await classroomService.getClassroomMembers(parseInt(id, 10));
      setMembers(updatedMem);
    } catch (err) {
      console.error('Gagal menyetujui semua siswa:', err);
    } finally {
      setIsBatchApproving(false);
    }
  };

  const handleRejectStudent = async (memberId: number, studentName?: string | null) => {
    if (!id) return;
    if (window.confirm(`Tolak permintaan bergabung dari ${studentName || 'siswa ini'}?`)) {
      await classroomService.rejectStudent(parseInt(id, 10), memberId);
      const updatedMem = await classroomService.getClassroomMembers(parseInt(id, 10));
      setMembers(updatedMem);
    }
  };

  const handleRemoveAssignment = async (asgId: number, title?: string) => {
    if (!id) return;
    if (window.confirm(`Apakah Anda yakin ingin menghapus penugasan "${title || 'Worksheet'}" dari kelas ini?`)) {
      await classroomService.removeAssignment(asgId);
      const updatedAsg = await classroomService.getClassroomAssignments(parseInt(id, 10));
      setAssignments(updatedAsg);
      if (selectedAssignmentId === asgId) {
        setSelectedAssignmentId(null);
      }
    }
  };

  const handleAssignSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !selectedWsId) return;

    setIsAssigning(true);
    try {
      await classroomService.assignWorksheetToClass(
        parseInt(id, 10),
        selectedWsId,
        dueDate || undefined,
        isLiveMonitored
      );
      setIsAssignModalOpen(false);
      const updatedAsg = await classroomService.getClassroomAssignments(parseInt(id, 10));
      setAssignments(updatedAsg);
    } catch (err) {
      console.error('Gagal menugaskan worksheet:', err);
    } finally {
      setIsAssigning(false);
    }
  };

  if (isLoading && !classroom) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs text-slate-500 font-mono">Memuat detail kelas...</p>
      </div>
    );
  }

  if (!classroom) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-lg font-bold text-slate-800">Kelas Tidak Ditemukan</h2>
        <Link
          to="/teacher/classes"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Manajemen Kelas</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Link */}
      <Link
        to="/teacher/classes"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Daftar Kelas Binaan</span>
      </Link>

      {/* Classroom Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded uppercase font-mono">
                Kelas Aktif
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-md text-xs font-mono font-bold border border-slate-200">
                <span>Kode: {classroom.code}</span>
                <button
                  onClick={handleCopyCode}
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  title="Salin Kode Kelas"
                >
                  {copiedCode ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => setIsProjectorOpen(true)}
                  className="ml-1 flex items-center gap-1 px-2 py-0.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded text-[10px] font-bold transition-colors cursor-pointer"
                  title="Buka Mode Layar Proyektor"
                >
                  <Monitor className="w-3 h-3 text-indigo-600" />
                  <span>Proyektor</span>
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              {classroom.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {classroom.description || 'Tidak ada deskripsi.'}
            </p>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsInviteModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>+ Undang Siswa via Email</span>
            </button>
            <button
              onClick={() => setIsAssignModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>+ Tugaskan Worksheet</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher (4 Tabs) */}
        <div className="flex border-b border-slate-200 pt-4 gap-4 sm:gap-6 text-xs font-bold overflow-x-auto">
          <button
            onClick={() => setActiveTab('members')}
            className={`pb-3 flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'members'
                ? 'text-indigo-600 border-b-2 border-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Anggota & Approval ({members.length})</span>
            {members.some((m) => m.status === 'pending_approval') && (
              <span className="px-2 py-0.5 bg-amber-500 text-white rounded-full text-[10px] font-bold font-mono animate-pulse">
                {members.filter((m) => m.status === 'pending_approval').length} Menunggu
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('assignments')}
            className={`pb-3 flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'assignments'
                ? 'text-indigo-600 border-b-2 border-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Tugas & SpeedGrader ({assignments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('live')}
            className={`pb-3 flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'live'
                ? 'text-indigo-600 border-b-2 border-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Radio className="w-4 h-4 text-rose-500" />
            <span>Live Monitor Siswa</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-3 flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'analytics'
                ? 'text-indigo-600 border-b-2 border-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>Analitik Silabus (10 Topik)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: MEMBERS & APPROVAL QUEUE */}
      {activeTab === 'members' && (
        <div className="space-y-6">
          {/* SEKSI 1: PERMINTAAN BERGABUNG MENUNGGU PERSETUJUAN */}
          {members.filter((m) => m.status === 'pending_approval').length > 0 && (
            <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-5 shadow-xs space-y-4 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                    <Clock className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-amber-950 font-display">
                      Permintaan Bergabung Siswa ({members.filter((m) => m.status === 'pending_approval').length} Menunggu Persetujuan)
                    </h3>
                    <p className="text-[11px] text-amber-800">
                      Siswa berikut memasukkan kode kelas dan memerlukan persetujuan Anda sebelum dapat mengakses lembar kerja kelas.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleApproveAllPending}
                  disabled={isBatchApproving}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {isBatchApproving
                      ? 'Menyetujui...'
                      : `Setujui Semua (${members.filter((m) => m.status === 'pending_approval').length})`}
                  </span>
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-amber-100/50 text-[11px] uppercase tracking-wider font-semibold text-amber-900 border-b border-amber-200/60">
                      <tr>
                        <th className="px-5 py-3">Nama Siswa</th>
                        <th className="px-5 py-3">Email Siswa</th>
                        <th className="px-5 py-3">Waktu Pengajuan</th>
                        <th className="px-5 py-3 text-right">Aksi Persetujuan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                      {members
                        .filter((m) => m.status === 'pending_approval')
                        .map((m) => (
                          <tr key={m.id} className="hover:bg-amber-50/40 transition-colors">
                            <td className="px-5 py-3.5 font-bold text-slate-900">
                              <div className="flex items-center gap-2">
                                <span>{m.student_name || 'Calon Medalis OSN'}</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded font-bold border border-amber-300">
                                  Pending
                                </span>
                              </div>
                            </td>
                            <td className="px-5 py-3.5 font-mono text-slate-600">{m.student_email}</td>
                            <td className="px-5 py-3.5 text-slate-500 text-[11px]">
                              {new Date(m.invited_at || m.joined_at || Date.now()).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </td>
                            <td className="px-5 py-3.5 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleApproveStudent(m.id, m.student_name)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-2xs transition-all active:scale-95 cursor-pointer"
                                  title="Setujui siswa ini"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Setujui</span>
                                </button>
                                <button
                                  onClick={() => handleRejectStudent(m.id, m.student_name)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                  title="Tolak permintaan bergabung"
                                >
                                  <XCircle className="w-3.5 h-3.5" />
                                  <span>Tolak</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SEKSI 2: DAFTAR SISWA AKTIF & TERUNDANG */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-display">
                  Daftar Siswa Binaan Aktif ({members.filter((m) => m.status !== 'pending_approval').length})
                </h3>
                <p className="text-[11px] text-slate-500">
                  Siswa yang aktif dapat mengerjakan semua penugasan worksheet kelas ini.
                </p>
              </div>
              <button
                onClick={() => setIsInviteModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Undang Siswa</span>
              </button>
            </div>

            {members.filter((m) => m.status !== 'pending_approval').length === 0 ? (
              <div className="p-12 text-center space-y-3">
                <Users className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">
                  Belum ada siswa aktif. Bagikan kode kelas <span className="font-mono font-bold text-indigo-600">{classroom?.code}</span> atau undang via email.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-[11px] uppercase tracking-wider font-semibold text-slate-500 border-b border-slate-100">
                    <tr>
                      <th className="px-5 py-3">Nama Siswa</th>
                      <th className="px-5 py-3">Email</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Tanggal Bergabung / Diundang</th>
                      <th className="px-5 py-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {members
                      .filter((m) => m.status !== 'pending_approval')
                      .map((m) => (
                        <tr key={m.id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="px-5 py-3.5 font-bold text-slate-900">
                            {m.student_name || 'Calon Medalis OSN'}
                          </td>
                          <td className="px-5 py-3.5 font-mono text-slate-700">{m.student_email}</td>
                          <td className="px-5 py-3.5">
                            {m.status === 'active' ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-[10px] font-bold">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Aktif</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-md text-[10px] font-bold">
                                <Clock className="w-3 h-3" />
                                <span>Terundang</span>
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3.5 text-slate-400 text-[11px]">
                            {new Date(m.joined_at || m.invited_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <button
                              onClick={() => handleRemoveMember(m.id, m.student_email)}
                              className="p-1.5 text-slate-300 hover:text-rose-600 rounded-lg transition-colors hover:bg-rose-50 cursor-pointer"
                              title="Hapus dari Kelas"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: ASSIGNMENTS & SPEEDGRADER */}
      {activeTab === 'assignments' && (
        <div className="space-y-6">
          {selectedAssignmentId !== null ? (
            /* SpeedGrader View */
            (() => {
              const currentAsg = assignments.find((a) => a.id === selectedAssignmentId);
              const currentWs = currentAsg?.worksheet;
              const activeMembers = members.filter((m) => m.status === 'active');
              const filteredStudents = activeMembers.filter((m) => {
                const q = speedGraderStudentSearch.toLowerCase().trim();
                if (!q) return true;
                return (
                  (m.student_name && m.student_name.toLowerCase().includes(q)) ||
                  (m.student_email && m.student_email.toLowerCase().includes(q))
                );
              });

              // Helper untuk mendapatkan submissions milik siswa yang sedang dipilih
              const currentStudent = activeMembers.find(
                (m) =>
                  (m.student_id && m.student_id === selectedSpeedGraderStudentId) ||
                  (m.student_email && m.student_email.toLowerCase() === selectedSpeedGraderStudentId?.toLowerCase())
              );

              const studentSubs = speedGraderSubmissions.filter((sub) => {
                const sId = selectedSpeedGraderStudentId;
                if (!sId) return false;
                const matchId = (sub.user_id && sub.user_id === sId) || (sub.userId && sub.userId === sId);
                const matchEmail =
                  currentStudent?.student_email &&
                  (sub.student_email?.toLowerCase() === currentStudent.student_email.toLowerCase() ||
                    sub.userId === currentStudent.student_email);
                return matchId || matchEmail;
              });

              // Total skor siswa
              const totalStudentScore = studentSubs.reduce(
                (sum, s) => sum + (Number(s.total_score || s.totalScore) || 0),
                0
              );
              const maxPossibleScore = speedGraderQuestions.length * 10;
              const scorePct = maxPossibleScore > 0 ? Math.round((totalStudentScore / maxPossibleScore) * 100) : 0;

              return (
                <div className="space-y-6 animate-in fade-in">
                  {/* SpeedGrader Header Navigation Bar */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedAssignmentId(null)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                        title="Kembali ke Daftar Tugas"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Daftar Tugas</span>
                      </button>

                      <div className="h-6 w-px bg-slate-200" />

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-mono text-[10px] font-bold uppercase">
                            SpeedGrader Studio
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            ID: #{currentAsg?.id}
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-slate-900 font-display">
                          {currentWs?.title || `Worksheet #${currentAsg?.worksheet_id}`}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {currentAsg?.due_date && (
                        <span className="px-3 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl font-medium flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-600" />
                          <span>Batas: {new Date(currentAsg.due_date).toLocaleDateString('id-ID')}</span>
                        </span>
                      )}
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-xl font-semibold">
                        {speedGraderQuestions.length} Butir Soal
                      </span>
                      <Link
                        to={`/worksheet/teacher_assignment/${currentAsg?.worksheet_id}`}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl font-bold transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Buka Naskah Soal ↗</span>
                      </Link>
                    </div>
                  </div>

                  {/* SpeedGrader Main Layout: Split Columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Column: Student Roster (4 cols) */}
                    <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-4 shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 font-display">
                            Daftar Siswa Kelas ({activeMembers.length})
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            Pilih siswa untuk memeriksa jawaban dan rubrik penilaian AI
                          </p>
                        </div>
                      </div>

                      {/* Search Student Input */}
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={speedGraderStudentSearch}
                          onChange={(e) => setSpeedGraderStudentSearch(e.target.value)}
                          placeholder="Cari siswa..."
                          className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>

                      {/* Student List */}
                      {filteredStudents.length === 0 ? (
                        <div className="py-8 text-center text-xs text-slate-400">
                          Tidak ada siswa yang cocok.
                        </div>
                      ) : (
                        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                          {filteredStudents.map((stu) => {
                            const stuId = stu.student_id || stu.student_email;
                            const isSelected = selectedSpeedGraderStudentId === stuId;

                            // Cek apakah siswa punya submission
                            const subs = speedGraderSubmissions.filter(
                              (s) =>
                                (s.user_id && s.user_id === stuId) ||
                                (s.userId && s.userId === stuId) ||
                                (stu.student_email && s.student_email?.toLowerCase() === stu.student_email.toLowerCase())
                            );

                            const studentScore = subs.reduce(
                              (acc, curr) => acc + (Number(curr.total_score || curr.totalScore) || 0),
                              0
                            );

                            return (
                              <div
                                key={stu.id}
                                onClick={() => setSelectedSpeedGraderStudentId(stuId)}
                                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                  isSelected
                                    ? 'bg-indigo-50/80 border-indigo-400 shadow-2xs'
                                    : 'bg-white hover:bg-slate-50 border-slate-200'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                      isSelected
                                        ? 'bg-indigo-600 text-white shadow-2xs'
                                        : 'bg-slate-100 text-slate-700'
                                    }`}
                                  >
                                    {(stu.student_name || stu.student_email || 'S')[0].toUpperCase()}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-slate-900 truncate">
                                      {stu.student_name || 'Siswa OSN'}
                                    </p>
                                    <p className="text-[10px] text-slate-500 font-mono truncate">
                                      {stu.student_email}
                                    </p>
                                  </div>
                                </div>

                                <div className="text-right shrink-0">
                                  {subs.length > 0 ? (
                                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-100 text-emerald-800 border border-emerald-300">
                                      Skor: {studentScore}/{speedGraderQuestions.length * 10}
                                    </span>
                                  ) : (
                                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-500">
                                      Belum ada
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Right Column: SpeedGrader Work & AI Rubric Inspection (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      {!currentStudent ? (
                        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3 shadow-xs">
                          <Users className="w-10 h-10 text-slate-300 mx-auto" />
                          <h4 className="text-sm font-bold text-slate-900">Pilih Siswa</h4>
                          <p className="text-xs text-slate-500 max-w-sm mx-auto">
                            Klik nama siswa di daftar sebelah kiri untuk meninjau langkah pengerjaan dan hasil evaluasi rubrik AI.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {/* Student Summary Card */}
                          <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                              <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 border border-indigo-400/40 text-white flex items-center justify-center font-bold text-base shadow-xs">
                                {(currentStudent.student_name || 'S')[0].toUpperCase()}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-base font-extrabold font-display">
                                    {currentStudent.student_name || 'Siswa OSN'}
                                  </h4>
                                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full text-[10px] font-bold font-mono">
                                    {studentSubs.length} Soal Terjawab
                                  </span>
                                </div>
                                <p className="text-xs text-slate-300 font-mono mt-0.5">
                                  {currentStudent.student_email}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-white/10">
                              <div>
                                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">
                                  Total Nilai Pengerjaan
                                </span>
                                <span className="text-xl font-extrabold font-mono text-emerald-400">
                                  {totalStudentScore}
                                  <span className="text-xs text-slate-300"> / {maxPossibleScore} ({scorePct}%)</span>
                                </span>
                              </div>
                              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                                <Award className="w-5 h-5" />
                              </div>
                            </div>
                          </div>

                          {/* Question Solutions List */}
                          <div className="space-y-4">
                            {speedGraderQuestions.map((q, qIndex) => {
                              const sub = studentSubs.find(
                                (s) => Number(s.question_id || s.questionId) === q.id
                              );
                              const isExpanded = expandedQuestionId === q.id;

                              return (
                                <div
                                  key={q.id}
                                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-3 p-5"
                                >
                                  {/* Question Title Bar */}
                                  <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-100">
                                    <div>
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-bold font-mono">
                                          Soal #{qIndex + 1}
                                        </span>
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-bold font-mono">
                                          Pilar {q.pillar_number}: {q.subtopic || 'Kimia'}
                                        </span>
                                        <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-[10px] font-bold font-mono">
                                          Tingkat {q.difficulty || 'OSN'}
                                        </span>
                                      </div>
                                      <h5 className="text-sm font-bold text-slate-900">{q.title}</h5>
                                    </div>

                                    <div className="flex items-center gap-2">
                                      {sub ? (
                                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold font-mono">
                                          Skor AI: {sub.total_score || sub.totalScore || 0}/{sub.max_score || sub.maxScore || 10}
                                        </span>
                                      ) : (
                                        <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-medium">
                                          Belum Dikerjakan
                                        </span>
                                      )}
                                      <button
                                        onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                                        className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
                                        title={isExpanded ? 'Sembunyikan Naskah' : 'Lihat Naskah'}
                                      >
                                        {isExpanded ? (
                                          <ChevronUp className="w-4 h-4" />
                                        ) : (
                                          <ChevronDown className="w-4 h-4" />
                                        )}
                                      </button>
                                    </div>
                                  </div>

                                  {/* Expandable Question Text */}
                                  {isExpanded && (
                                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed max-h-56 overflow-y-auto">
                                      <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Naskah Soal:</p>
                                      <KaTeXRenderer content={q.question_text || ''} />
                                      {q.expected_final_answer && (
                                        <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] text-emerald-800 font-bold">
                                          Kunci Jawaban Resmi: <span className="font-mono">{q.expected_final_answer}</span>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Student Work & AI Evaluation */}
                                  {sub ? (
                                    <div className="space-y-4 pt-1">
                                      {/* Student Steps */}
                                      <div className="space-y-1.5">
                                        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                          <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                                          <span>Langkah Pengerjaan Siswa (Formula & Perhitungan KaTeX):</span>
                                        </span>
                                        <div className="p-3.5 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs max-h-48 overflow-y-auto leading-relaxed border border-slate-800 shadow-inner whitespace-pre-wrap">
                                          {sub.student_work_steps || sub.studentWorkSteps || 'Tidak ada langkah terketik.'}
                                        </div>
                                        {(sub.student_work_steps || sub.studentWorkSteps) && (
                                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-900 max-h-36 overflow-y-auto">
                                            <KaTeXRenderer
                                              content={sub.student_work_steps || sub.studentWorkSteps}
                                            />
                                          </div>
                                        )}
                                      </div>

                                      {/* Final Answer */}
                                      {(sub.student_final_answer || sub.studentFinalAnswer) && (
                                        <div className="flex items-center gap-2 text-xs">
                                          <span className="font-bold text-slate-700">Jawaban Akhir Siswa:</span>
                                          <span className="px-2.5 py-0.5 bg-emerald-50 border border-emerald-300 rounded font-mono font-bold text-emerald-900">
                                            {sub.student_final_answer || sub.studentFinalAnswer}
                                          </span>
                                        </div>
                                      )}

                                      {/* AI Rubric & Criteria Breakdown */}
                                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                                        <div className="flex items-center justify-between">
                                          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                                            <span>Hasil Pemeriksaan Rubrik Penilaian AI:</span>
                                          </span>
                                          <span className="text-[10px] font-mono text-slate-500">
                                            Model: {sub.model_used || sub.modelUsed || 'AI Examiner'}
                                          </span>
                                        </div>

                                        {/* Criteria Points Checklist */}
                                        {(sub.criteria_breakdown || sub.criteriaBreakdown) &&
                                          Array.isArray(sub.criteria_breakdown || sub.criteriaBreakdown) && (
                                            <div className="space-y-1.5">
                                              <span className="text-[11px] font-semibold text-slate-600 block">
                                                Poin Rubrik Terpenuhi:
                                              </span>
                                              <div className="space-y-1">
                                                {(sub.criteria_breakdown || sub.criteriaBreakdown).map(
                                                  (crit: any, idx: number) => (
                                                    <div
                                                      key={idx}
                                                      className="flex items-start gap-2 text-xs text-slate-700"
                                                    >
                                                      {crit.achieved ? (
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                      ) : (
                                                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                                      )}
                                                      <span
                                                        className={
                                                          crit.achieved ? 'text-slate-800' : 'text-slate-500 line-through'
                                                        }
                                                      >
                                                        {crit.point || crit.description || 'Poin kriteria'}
                                                      </span>
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          )}

                                        {/* Feedback & Misconception */}
                                        {(sub.overall_feedback || sub.overallFeedback) && (
                                          <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                                            <p className="font-bold text-slate-900 mb-0.5">Catatan Evaluasi AI:</p>
                                            <p>{sub.overall_feedback || sub.overallFeedback}</p>
                                          </div>
                                        )}

                                        {(sub.misconception_diagnosis || sub.misconceptionDiagnosis) && (
                                          <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-900 flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <div>
                                              <p className="font-bold">Miskonsepsi Terdeteksi:</p>
                                              <p>{sub.misconception_diagnosis || sub.misconceptionDiagnosis}</p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="p-6 bg-slate-50/70 rounded-xl border border-dashed border-slate-300 text-center space-y-1">
                                      <Clock className="w-5 h-5 text-slate-400 mx-auto animate-pulse" />
                                      <p className="text-xs font-semibold text-slate-600">
                                        Siswa ini belum mengumpulkan jawaban untuk butir soal ini.
                                      </p>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            /* Assignment List View */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    Daftar Worksheet yang Ditugaskan ke Kelas Ini
                  </h3>
                  <p className="text-xs text-slate-500">
                    Buka SpeedGrader untuk meninjau rubrik penilaian AI per siswa atau pantau sesi pengerjaan secara real-time.
                  </p>
                </div>
                <button
                  onClick={() => setIsAssignModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>+ Tugaskan Worksheet</span>
                </button>
              </div>

              {assignments.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3 shadow-xs">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-500">
                    Belum ada worksheet yang ditugaskan ke kelas ini.
                  </p>
                  <button
                    onClick={() => setIsAssignModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    Tugaskan Sekarang
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {assignments.map((asg) => {
                    const ws = asg.worksheet;
                    return (
                      <div
                        key={asg.id}
                        className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-2xs transition-all space-y-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              {ws?.title || `Worksheet #${asg.worksheet_id}`}
                            </h4>
                            <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                              {asg.due_date && (
                                <span className="flex items-center gap-1 text-amber-700 font-medium">
                                  <Calendar className="w-3 h-3" />
                                  Batas:{' '}
                                  {new Date(asg.due_date).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                  })}
                                </span>
                              )}
                              {asg.is_live_monitored && (
                                <span className="px-1.5 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded font-semibold text-[9px]">
                                  Live Monitored
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold">
                              Ditugaskan
                            </span>
                            <button
                              onClick={() => handleRemoveAssignment(asg.id, ws?.title)}
                              className="p-1.5 text-slate-300 hover:text-rose-600 rounded-lg transition-colors hover:bg-rose-50 cursor-pointer"
                              title="Hapus Penugasan"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 line-clamp-2">
                          {ws?.description || 'Lembar kerja resmi OSN Kimia untuk latihan siswa.'}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => setSelectedAssignmentId(asg.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-2xs transition-all active:scale-95 cursor-pointer"
                          >
                            <CheckSquare className="w-3.5 h-3.5" />
                            <span>Buka SpeedGrader</span>
                          </button>

                          <div className="flex items-center gap-2">
                            <Link
                              to={`/worksheet/teacher_assignment/${asg.worksheet_id}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Naskah</span>
                            </Link>

                            {ws?.access_token && (
                              <Link
                                to={`/teacher/live/${ws.access_token}`}
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold rounded-lg transition-colors"
                              >
                                <Radio className="w-3.5 h-3.5 text-rose-600" />
                                <span>Live</span>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: LIVE MONITOR SISWA & WORKSHEET AKTIF */}
      {activeTab === 'live' && (
        <div className="space-y-6">
          {/* Header & Status Summary */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                    LIVE REAL-TIME
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold font-mono">
                    <Activity className="w-3 h-3 text-emerald-600 animate-pulse" />
                    Supabase & Local Broadcast Terhubung
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">
                  Live Monitor Siswa & Lembar Kerja yang Sedang Dibuka
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Daftar seluruh siswa binaan beserta naskah worksheet yang saat ini dibuka di layar mereka. Anda dapat memantau pengetikan langkah solusi dan progres pengerjaan secara real-time.
                </p>
              </div>

              {/* Refresh indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
                <span>Auto-sync real-time</span>
              </div>
            </div>

            {/* 4 Stat Metrics */}
            {(() => {
              // Helper pencarian sesi terbaik per siswa (utamakan status active, lalu waktu terakhir aktif)
              const getMemberSession = (m: ClassroomMember): WorksheetLiveSession | undefined => {
                const matched = liveSessions.filter(
                  (sess) =>
                    (sess.student_email && m.student_email && sess.student_email.toLowerCase() === m.student_email.toLowerCase()) ||
                    (sess.student_id && m.student_id && sess.student_id === m.student_id)
                );
                if (matched.length === 0) return undefined;
                if (matched.length === 1) return matched[0];
                return matched.sort((a, b) => {
                  if (a.status === 'active' && b.status !== 'active') return -1;
                  if (b.status === 'active' && a.status !== 'active') return 1;
                  const tA = a.last_active_at ? new Date(a.last_active_at).getTime() : 0;
                  const tB = b.last_active_at ? new Date(b.last_active_at).getTime() : 0;
                  return tB - tA;
                })[0];
              };

              const activeMembers = members.filter((m) => m.status !== 'pending_approval');
              const onlineCount = activeMembers.filter((m) => {
                const s = getMemberSession(m);
                return s && s.status === 'active';
              }).length;
              const idleCount = activeMembers.filter((m) => {
                const s = getMemberSession(m);
                return s && s.status === 'idle';
              }).length;
              const offlineCount = Math.max(0, activeMembers.length - onlineCount - idleCount);

              return (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Siswa Binaan</span>
                    <div className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">{activeMembers.length} Siswa</div>
                  </div>
                  <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                      Sedang Mengerjakan
                    </span>
                    <div className="text-xl font-extrabold text-emerald-700 font-mono mt-0.5">{onlineCount} Siswa</div>
                  </div>
                  <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Jeda Pengerjaan (Idle)</span>
                    <div className="text-xl font-extrabold text-amber-700 font-mono mt-0.5">{idleCount} Siswa</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Belum Membuka / Offline</span>
                    <div className="text-xl font-extrabold text-slate-700 font-mono mt-0.5">{offlineCount} Siswa</div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Table of Students & Active Worksheets */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-display">
                  Daftar Status Siswa & Lembar Kerja yang Sedang Dibuka
                </h4>
                <p className="text-xs text-slate-500">
                  Sinkron langsung dengan worksheet yang dibuka siswa di tab atau perangkat mereka.
                </p>
              </div>

              <button
                onClick={async () => {
                  if (classroom?.id) {
                    setIsRefreshingLive(true);
                    try {
                      const memberEmails = members.map((m) => m.student_email?.toLowerCase()).filter(Boolean) as string[];
                      const memberStudentIds = members.map((m) => m.student_id).filter(Boolean) as string[];
                      const updated = await worksheetRealtimeService.syncClassroomPresenceFromCloud(classroom.id, memberEmails, memberStudentIds);
                      setLiveSessions(updated);
                    } finally {
                      setIsRefreshingLive(false);
                    }
                  }
                }}
                disabled={isRefreshingLive}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-60 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                title="Perbarui daftar sekarang dari server cloud"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${isRefreshingLive ? 'animate-spin text-indigo-600' : ''}`} />
                <span>{isRefreshingLive ? 'Menyinkronkan...' : 'Segarkan Data'}</span>
              </button>
            </div>

            {members.filter((m) => m.status !== 'pending_approval').length === 0 ? (
              <div className="p-12 text-center space-y-3">
                <Users className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">Belum ada siswa binaan aktif di kelas ini.</p>
                <button
                  onClick={() => setIsInviteModalOpen(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl"
                >
                  Undang Siswa Sekarang
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-[11px] uppercase tracking-wider font-semibold text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3.5">Nama & Profil Siswa</th>
                      <th className="px-5 py-3.5">Status Pengerjaan</th>
                      <th className="px-5 py-3.5">Worksheet yang Dibuka</th>
                      <th className="px-5 py-3.5">Posisi Soal & Progres</th>
                      <th className="px-5 py-3.5">Aktivitas Terakhir</th>
                      <th className="px-5 py-3.5 text-right">Aksi Pantau</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {members
                      .filter((m) => m.status !== 'pending_approval')
                      .map((member) => {
                        const matched = liveSessions.filter(
                          (s) =>
                            (s.student_email && member.student_email && s.student_email.toLowerCase() === member.student_email.toLowerCase()) ||
                            (s.student_id && member.student_id && s.student_id === member.student_id)
                        );
                        const session = matched.length <= 1 ? matched[0] : matched.sort((a, b) => {
                          if (a.status === 'active' && b.status !== 'active') return -1;
                          if (b.status === 'active' && a.status !== 'active') return 1;
                          const tA = a.last_active_at ? new Date(a.last_active_at).getTime() : 0;
                          const tB = b.last_active_at ? new Date(b.last_active_at).getTime() : 0;
                          return tB - tA;
                        })[0];

                        const isOnline = session && session.status === 'active';
                        const isIdle = session && session.status === 'idle';

                        // Format waktu aktif relatif
                        const getRelativeTime = (timeStr?: string) => {
                          if (!timeStr) return '-';
                          const diffSec = Math.floor((Date.now() - new Date(timeStr).getTime()) / 1000);
                          if (diffSec < 10) return 'Baru saja';
                          if (diffSec < 60) return `${diffSec} detik lalu`;
                          const diffMin = Math.floor(diffSec / 60);
                          if (diffMin < 60) return `${diffMin} menit lalu`;
                          return `${Math.floor(diffMin / 60)} jam lalu`;
                        };

                        return (
                          <tr
                            key={member.id}
                            className={`transition-colors ${
                              isOnline ? 'bg-emerald-50/30 hover:bg-emerald-50/50' : 'hover:bg-slate-50/60'
                            }`}
                          >
                            {/* Siswa */}
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-xs shadow-2xs ${
                                    isOnline
                                      ? 'bg-emerald-600 text-white'
                                      : isIdle
                                      ? 'bg-amber-500 text-white'
                                      : 'bg-slate-200 text-slate-700'
                                  }`}
                                >
                                  {(member.student_name || member.student_email)[0].toUpperCase()}
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                    <span>{member.student_name || 'Siswa OSN'}</span>
                                    {isOnline && (
                                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                                    )}
                                  </div>
                                  <div className="text-[11px] font-mono text-slate-500">
                                    {member.student_email}
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Status */}
                            <td className="px-5 py-4">
                              {isOnline ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[11px] border border-emerald-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                                  <span>Sedang Mengerjakan</span>
                                </span>
                              ) : isIdle ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-bold text-[11px] border border-amber-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                                  <span>Jeda (Idle)</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full font-medium text-[11px] border border-slate-200">
                                  <span>Belum Membuka / Offline</span>
                                </span>
                              )}
                            </td>

                            {/* Worksheet yang Dibuka */}
                            <td className="px-5 py-4">
                              {session?.worksheet_title ? (
                                <div className="space-y-1 max-w-xs">
                                  <div className="font-bold text-slate-900 flex items-start gap-1.5">
                                    <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                    <span className="line-clamp-2 leading-tight">{session.worksheet_title}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] px-1.5 py-0.2 bg-indigo-50 text-indigo-700 font-mono font-bold rounded border border-indigo-200">
                                      {session.worksheet_type === 'live'
                                        ? 'Sesi Live'
                                        : session.worksheet_type === 'teacher_assignment'
                                        ? 'Tugas Kelas'
                                        : 'Modul Mandiri'}
                                    </span>
                                    {session.access_token && (
                                      <span className="text-[10px] text-slate-400 font-mono">
                                        Token: {session.access_token}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <span className="text-slate-400 italic text-[11px]">
                                  Belum membuka lembar kerja apa pun
                                </span>
                              )}
                            </td>

                            {/* Soal & Progres */}
                            <td className="px-5 py-4">
                              {session ? (
                                <div className="space-y-1.5">
                                  <div className="font-semibold text-slate-800 flex items-center gap-1">
                                    <span className="px-1.5 py-0.5 bg-sky-100 text-sky-800 rounded font-mono font-bold text-[10px]">
                                      Soal #{(session.current_question_index ?? 0) + 1}
                                    </span>
                                    {session.current_question_title && (
                                      <span className="truncate max-w-[130px] text-slate-600 text-[11px]" title={session.current_question_title}>
                                        {session.current_question_title}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-20 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                                      <div
                                        className="bg-emerald-500 h-full rounded-full transition-all"
                                        style={{
                                          width: `${
                                            session.total_questions && session.total_questions > 0
                                              ? Math.min(
                                                  100,
                                                  Math.round(
                                                    ((session.answered_count || 0) / session.total_questions) * 100
                                                  )
                                                )
                                              : 0
                                          }%`,
                                        }}
                                      />
                                    </div>
                                    <span className="text-[10px] text-slate-500 font-mono font-semibold">
                                      {session.answered_count ?? 0}/{session.total_questions ?? '?'} Dijawab
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <span className="text-slate-400 font-mono text-[11px]">-</span>
                              )}
                            </td>

                            {/* Aktivitas Terakhir */}
                            <td className="px-5 py-4 text-slate-500 font-mono text-[11px]">
                              {session?.last_active_at ? getRelativeTime(session.last_active_at) : '-'}
                            </td>

                            {/* Aksi Pantau */}
                            <td className="px-5 py-4 text-right">
                              {session ? (
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => setInspectedStudent(session)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-2xs transition-all active:scale-95 cursor-pointer"
                                    title="Pantau ketikan pengerjaan siswa secara langsung"
                                  >
                                    <Radio className="w-3.5 h-3.5" />
                                    <span>Pantau Langsung</span>
                                  </button>
                                  <Link
                                    to={`/teacher/live/${session.access_token || 'WS-' + session.worksheet_id}?studentId=${session.student_id}`}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
                                    title="Buka di Layar Live Penuh"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Layar Penuh</span>
                                  </Link>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setIsAssignModalOpen(true)}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                                >
                                  <span>+ Tugaskan</span>
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Quick Assignments Section */}
          <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-display">
                  Daftar Token Penugasan Worksheet Kelas ({assignments.length})
                </h4>
                <p className="text-xs text-slate-500">
                  Gunakan token ini jika siswa ingin membuka sesi melalui tombol "Buka Lembar Kerja via Token Akses".
                </p>
              </div>
              <button
                onClick={() => setIsAssignModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Tambah Penugasan</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {assignments.map((asg) => (
                <div key={asg.id} className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-2xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{asg.worksheet?.title || `Tugas #${asg.worksheet_id}`}</h5>
                      <span className="text-[10px] text-slate-400 font-mono">Worksheet ID: {asg.worksheet_id}</span>
                    </div>
                    {asg.worksheet?.access_token ? (
                      <span className="px-2 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-bold rounded font-mono">
                        Token: {asg.worksheet.access_token}
                      </span>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                    <Link
                      to={`/worksheet/teacher_assignment/${asg.worksheet_id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-indigo-600"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Naskah</span>
                    </Link>

                    <Link
                      to={
                        asg.worksheet?.access_token
                          ? `/teacher/live/${asg.worksheet.access_token}`
                          : `/teacher/live/LIVE-${asg.worksheet_id}`
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold rounded-xl transition-colors"
                    >
                      <Radio className="w-3.5 h-3.5 text-rose-600" />
                      <span>Masuk Ruang Monitor</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ANALITIK SILABUS 10 TOPIK */}
      {activeTab === 'analytics' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Header Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded font-mono text-[10px] font-bold uppercase">
                    Silabus Puspresnas Diagnostik
                  </span>
                  <span className="text-xs text-slate-500">Pemetaan Penguasaan Materi</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">
                  Peta Penguasaan 10 Topik Silabus OSN Kimia
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5">
                  Visualisasi performa kumulatif seluruh siswa di kelas ini berdasarkan hasil evaluasi AI pada naskah soal resmi olimpiade kimia.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold font-mono">
                  {members.filter((m) => m.status === 'active').length} Siswa Aktif Terpantau
                </span>
              </div>
            </div>

            {/* Overview KPI Cards */}
            {(() => {
              const activeScores = pillarMastery.filter((p) => p.submissionsCount > 0);
              const avgClassScore =
                activeScores.length > 0
                  ? Math.round(activeScores.reduce((acc, curr) => acc + curr.score, 0) / activeScores.length)
                  : 74; // Demo fallback baseline

              const strongestPillar =
                activeScores.length > 0
                  ? [...activeScores].sort((a, b) => b.score - a.score)[0]?.pillarName
                  : 'Stoikiometri & Wujud Zat';

              const remedialPillar =
                activeScores.length > 0
                  ? [...activeScores].sort((a, b) => a.score - b.score)[0]?.pillarName
                  : 'Termodinamika Kimia & Termokimia';

              const totalEvaluatedSubs = pillarMastery.reduce((acc, curr) => acc + curr.submissionsCount, 0);

              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-slate-100">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[11px] font-semibold text-slate-500">Rata-rata Skor Kelas</span>
                    <div className="text-2xl font-extrabold font-mono text-indigo-600">{avgClassScore}%</div>
                    <span className="text-[10px] text-slate-500">Skor agregat 10 topik</span>
                  </div>

                  <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-1">
                    <span className="text-[11px] font-semibold text-emerald-800">Topik Terkuat</span>
                    <div className="text-sm font-bold text-emerald-950 truncate">{strongestPillar}</div>
                    <span className="text-[10px] text-emerald-700 font-medium">Akurasi rata-rata tertinggi</span>
                  </div>

                  <div className="p-4 bg-rose-50/70 rounded-2xl border border-rose-200 space-y-1">
                    <span className="text-[11px] font-semibold text-rose-800">Perlu Penguatan</span>
                    <div className="text-sm font-bold text-rose-950 truncate">{remedialPillar}</div>
                    <span className="text-[10px] text-rose-700 font-medium">Prioritas bimbingan kelas</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[11px] font-semibold text-slate-500">Total Soal Terevaluasi</span>
                    <div className="text-2xl font-extrabold font-mono text-slate-900">
                      {totalEvaluatedSubs > 0 ? totalEvaluatedSubs : 24} Butir
                    </div>
                    <span className="text-[10px] text-slate-500">Dinilai oleh AI Examiner</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* 10 Pillars Diagnostic Heatmap Grid */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Tingkat Penguasaan per Topik Silabus (Pilar 1 - 10)
                </h4>
                <p className="text-xs text-slate-500">
                  Target medali emas OSN membutuhkan penguasaan konsisten di atas 80% pada seluruh pilar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PILLARS_DATA.map((pillar) => {
                const mastery = pillarMastery.find((p) => p.pillarNumber === pillar.pillar_number);
                // Baseline demonstrasi jika data aktual belum terisi
                const score =
                  mastery && mastery.submissionsCount > 0
                    ? mastery.score
                    : [84, 76, 92, 48, 71, 65, 54, 78, 88, 62][(pillar.pillar_number - 1) % 10];
                const subCount = mastery?.submissionsCount || [5, 4, 8, 6, 4, 3, 5, 2, 6, 4][(pillar.pillar_number - 1) % 10];

                const isMastered = score >= 80;
                const isDeveloping = score >= 50 && score < 80;
                const isRemedial = score < 50;

                return (
                  <div
                    key={pillar.pillar_number}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-indigo-300 hover:shadow-2xs transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-[10px] font-bold font-mono">
                            Pilar {pillar.pillar_number}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium truncate">
                            {pillar.category}
                          </span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {pillar.title}
                        </h5>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-base font-extrabold font-mono text-slate-900 block">
                          {score}%
                        </span>
                        {isMastered ? (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-emerald-100 text-emerald-800">
                            Dikuasai
                          </span>
                        ) : isDeveloping ? (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-amber-100 text-amber-800">
                            Berkembang
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-rose-100 text-rose-800">
                            Remedial
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            isMastered
                              ? 'bg-emerald-500'
                              : isDeveloping
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${Math.min(score, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                        <span>Target: 80% (Passing KKM)</span>
                        <span>{subCount} Pengerjaan Terevaluasi</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Class Misconceptions */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Top Miskonsepsi Siswa Terdeteksi AI di Kelas Ini
                </h4>
                <p className="text-xs text-slate-500">
                  Kekeliruan konseptual yang paling sering muncul dalam langkah pengerjaan siswa kelas ini.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/30 space-y-2">
                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-bold rounded">
                  Topik 4: Termodinamika
                </span>
                <h5 className="text-xs font-bold text-slate-900">
                  Konversi Satuan Entropi (J vs kJ)
                </h5>
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  <KaTeXRenderer content="42% siswa lupa mengonversi satuan entropi $\Delta S^\circ$ dari $\text{J/(mol}\cdot\text{K)}$ ke $\text{kJ}$ saat menghitung $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$." />
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/30 space-y-2">
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                  Topik 7: Elektrokimia
                </span>
                <h5 className="text-xs font-bold text-slate-900">
                  Penentuan Transfer Elektron (n) Nernst
                </h5>
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  <KaTeXRenderer content="31% siswa keliru menentukan nilai transfer elektron $n$ pada reaksi redoks gabungan multielektron permanganometri." />
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-indigo-200 bg-indigo-50/30 space-y-2">
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded">
                  Topik 10: Organik
                </span>
                <h5 className="text-xs font-bold text-slate-900">
                  Inversi Walden vs Rasemisasi
                </h5>
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  <KaTeXRenderer content="28% siswa tertukar antara inversi konfigurasi $S_N2$ murni dengan pembentukan campuran rasemat karbokation $S_N1$." />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL / DRAWER LIVE INSPECTION SISWA */}
      {inspectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {inspectedStudent.student_name ? inspectedStudent.student_name[0].toUpperCase() : 'S'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-900 font-display">
                      {inspectedStudent.student_name || 'Siswa OSN'}
                    </h3>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                      ONLINE LIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                    {inspectedStudent.student_email || 'siswa@osnkimia.id'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setInspectedStudent(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Tutup jendela pemantauan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Currently Opened Worksheet & Question */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Worksheet & Soal Aktif Siswa:</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">
                  Token: {inspectedStudent.access_token}
                </span>
              </div>

              <div className="text-sm font-bold text-slate-900">
                {inspectedStudent.worksheet_title || 'Worksheet Siswa'}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2 py-0.5 bg-sky-100 text-sky-800 font-mono font-bold rounded">
                  Soal #{(inspectedStudent.current_question_index ?? 0) + 1}
                </span>
                {modalMatchedQuestion && (
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 font-mono font-bold rounded text-[10px]">
                    Tingkat {modalMatchedQuestion.difficulty || 'OSN'}
                  </span>
                )}
                <span className="text-slate-700 font-medium truncate max-w-xs">
                  {modalMatchedQuestion?.title || inspectedStudent.current_question_title || 'Naskah Soal'}
                </span>
                <button
                  type="button"
                  onClick={() => setShowQuestionTextInModal(!showQuestionTextInModal)}
                  className="ml-auto text-[11px] text-indigo-600 hover:text-indigo-800 font-bold underline cursor-pointer"
                >
                  {showQuestionTextInModal ? 'Sembunyikan Naskah' : 'Lihat Naskah Lengkap'}
                </button>
              </div>

              {/* Complete Question Text & KaTeX */}
              {showQuestionTextInModal && modalMatchedQuestion && (
                <div className="pt-2 border-t border-slate-200/80 space-y-2.5">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed max-h-40 overflow-y-auto">
                    <KaTeXRenderer content={modalMatchedQuestion.question_text || ''} />
                  </div>
                  {modalMatchedQuestion.expected_final_answer && (
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 flex items-center gap-2">
                      <span className="font-bold shrink-0">Kunci Jawaban:</span>
                      <span className="font-mono font-bold">{modalMatchedQuestion.expected_final_answer}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Real-time Keystrokes & Solution Draft */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                  <span>Ketikan Solusi Siswa (Real-Time Keystrokes)</span>
                </h4>
                <span className="text-[10px] text-slate-400 font-mono">
                  Terakhir diketik: {inspectedStudent.last_active_at ? new Date(inspectedStudent.last_active_at).toLocaleTimeString('id-ID') : 'Baru saja'}
                </span>
              </div>

              {(() => {
                const qIdx = inspectedStudent.current_question_index ?? 0;
                const draft = extractStudentAnswer(inspectedStudent.live_draft, qIdx);

                if (!draft || (!draft.steps && !draft.finalAnswer)) {
                  return (
                    <div className="p-6 bg-slate-50/80 rounded-2xl border border-dashed border-slate-300 text-center space-y-1.5">
                      <Clock className="w-6 h-6 text-slate-400 mx-auto animate-pulse" />
                      <p className="text-xs font-semibold text-slate-700">
                        Siswa sedang membaca soal ini
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Ketikan siswa akan langsung muncul di kotak ini saat siswa mulai mengetik langkah pengerjaannya.
                      </p>
                    </div>
                  );
                }

                return (
                  <div className="space-y-3">
                    {/* Langkah Penyelesaian */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-slate-600">
                        Langkah Pengerjaan (Raw & Live KaTeX):
                      </span>
                      <div className="p-3.5 bg-slate-900 text-emerald-400 rounded-2xl font-mono text-xs leading-relaxed max-h-36 overflow-y-auto whitespace-pre-wrap border border-slate-800 shadow-inner">
                        {draft.steps || '// Belum mengetik langkah pengerjaan'}
                        <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
                      </div>
                      {draft.steps && (
                        <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-900 max-h-32 overflow-y-auto">
                          <KaTeXRenderer content={draft.steps} />
                        </div>
                      )}
                    </div>

                    {/* Jawaban Akhir */}
                    {draft.finalAnswer && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-semibold text-slate-600">
                          Jawaban Akhir Sementara:
                        </span>
                        <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl font-mono text-xs font-bold">
                          {draft.finalAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Quick Comment from Teacher */}
            <form onSubmit={handleSendQuickComment} className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Beri Arahan / Catatan Langsung ke Siswa Ini:</span>
                </label>
                {quickCommentSent && (
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Terkirim ke layar siswa!
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={quickComment}
                  onChange={(e) => setQuickComment(e.target.value)}
                  placeholder="Contoh: Periksa kembali koefisien reaksi dan satuannya..."
                  className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={isSendingQuickComment || !quickComment.trim()}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSendingQuickComment ? 'Mengirim...' : 'Kirim'}</span>
                </button>
              </div>
            </form>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <button
                onClick={() => setInspectedStudent(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>

              <Link
                to={`/teacher/live/${inspectedStudent.access_token || 'WS-' + inspectedStudent.worksheet_id}?studentId=${inspectedStudent.student_id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka di Layar Live Penuh (Interactive Canvas & Laser) ↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MODAL INVITE EMAIL */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 font-display">
                Undang Siswa via Email
              </h3>
              <button
                onClick={() => setIsInviteModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {inviteFeedback && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{inviteFeedback}</span>
              </div>
            )}

            <form onSubmit={handleInviteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Siswa
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="siswa@gmail.com"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Tip Demo: Anda dapat memasukkan <b>siswa@gmail.com</b> untuk menguji alur murid.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Siswa (Opsional)
                </label>
                <input
                  type="text"
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  placeholder="Contoh: Ahmad Fauzan"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isInviting}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all disabled:opacity-50"
                >
                  {isInviting ? 'Mengundang...' : 'Kirim Undangan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ASSIGN WORKSHEET */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 font-display">
                Tugaskan Lembar Kerja ke Kelas
              </h3>
              <button
                onClick={() => setIsAssignModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAssignSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pilih Worksheet (Dari Database Mandiri Anda)
                </label>
                {teacherWorksheets.length === 0 ? (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 space-y-2">
                    <p>Anda belum memiliki worksheet pribadi di database.</p>
                    <Link
                      to="/teacher/worksheets/new"
                      className="inline-block text-indigo-600 font-bold hover:underline"
                    >
                      + Buat Worksheet Baru Sekarang
                    </Link>
                  </div>
                ) : (
                  <select
                    value={selectedWsId || ''}
                    onChange={(e) => setSelectedWsId(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  >
                    {teacherWorksheets.map((ws) => (
                      <option key={ws.id} value={ws.id}>
                        {ws.title} ({ws.item_count || 0} Soal - {ws.time_limit_minutes || 0}m)
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tenggat Waktu / Due Date (Opsional)
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="liveMonitorToggle"
                  checked={isLiveMonitored}
                  onChange={(e) => setIsLiveMonitored(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="liveMonitorToggle" className="text-xs text-slate-700 font-medium">
                  Aktifkan fitur Pemantauan Real-time (Live Monitoring)
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAssignModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isAssigning || teacherWorksheets.length === 0}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all disabled:opacity-50"
                >
                  {isAssigning ? 'Menugaskan...' : 'Tugaskan ke Kelas'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PROYEKTOR KODE KELAS */}
      {isProjectorOpen && classroom && (
        <div
          onClick={() => setIsProjectorOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-6 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full text-center space-y-6 animate-in zoom-in-95"
          >
            <div className="space-y-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                Mode Layar Proyektor Kelas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {classroom.name}
              </h2>
              <p className="text-sm text-slate-400">
                Tampilkan kode ini di layar proyektor kelas agar seluruh siswa dapat bergabung serentak.
              </p>
            </div>

            <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                Kode Bergabung Kelas
              </p>
              <div className="font-mono text-6xl sm:text-8xl font-black text-amber-400 tracking-[0.2em] select-all py-2">
                {classroom.code}
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Siswa membuka menu <b>Masuk Kelas</b> dan memasukkan kode di atas untuk mendaftar.
              </p>
            </div>

            <button
              onClick={() => setIsProjectorOpen(false)}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Tutup Tampilan Proyektor (ESC)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
