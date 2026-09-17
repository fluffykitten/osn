import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { questionBankService } from '../../services/questionBankService';
import { examExportService } from '../../services/examExportService';
import { worksheetRealtimeService } from '../../services/worksheetRealtimeService';
import { classroomService } from '../../services/classroomService';
import { useAuth } from '../../contexts/AuthContext';
import { isSupabaseConfigured } from '../../lib/supabaseClient';
import { QuestionFilters } from '../../components/worksheet/QuestionFilters';
import { QuestionBankBrowser } from '../../components/worksheet/QuestionBankBrowser';
import {
  FileText,
  Clock,
  Check,
  ArrowLeft,
  Printer,
  Cloud,
  CloudUpload,
  RefreshCw,
  Award,
  Layers,
  MoveUp,
  MoveDown,
  Trash2,
  Eye,
  X,
  FileCheck,
  AlertCircle,
  HelpCircle,
  Radio,
  KeyRound,
  Copy,
  School,
} from 'lucide-react';
import type { Question, QuestionFilter, QuestionDifficulty } from '../../types/database';

export const WorksheetBuilder: React.FC = () => {
  const navigate = useNavigate();
  const { id: editId } = useParams<{ id?: string }>();
  const { user } = useAuth();
  const teacherId = user?.id || 'teacher-demo-uuid';

  // Form parameters
  const [title, setTitle] = useState('Paket Simulasi Intensif OSN Kimia 2025');
  const [timeLimit, setTimeLimit] = useState(90);
  const [passScore, setPassScore] = useState(75);
  const [targetLevel, setTargetLevel] = useState('SELEKSI TINGKAT KABUPATEN/KOTA (OSK)');

  // Classroom selection
  const [teacherClassrooms, setTeacherClassrooms] = useState<any[]>([]);
  const [assignedClassId, setAssignedClassId] = useState<number | null>(null);

  useEffect(() => {
    classroomService.getTeacherClassrooms(teacherId).then(setTeacherClassrooms);
  }, [teacherId]);

  // Selected Questions & Selection
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([100, 101, 102]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  // Live Token State (Bisa ditentukan sendiri oleh Guru)
  const [customToken, setCustomToken] = useState('OSN-7842');
  const [createdLiveToken, setCreatedLiveToken] = useState<string | null>(null);
  const [isCreatingLive, setIsCreatingLive] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);

  const handleGenerateRandomToken = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCustomToken(`OSN-${code}`);
  };

  // Cloud state
  const isCloudAvailable = isSupabaseConfigured();
  const [isSyncingCloud, setIsSyncingCloud] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  // Filter state
  const [filter, setFilter] = useState<QuestionFilter>({
    search: '',
    difficulty: 'ALL',
    pillarNumber: 'ALL',
    questionStyle: 'ALL',
    bookmarkedOnly: false,
    selectedTags: [],
    sortBy: 'newest',
  });

  // PDF Preview modal state
  const [previewPdfType, setPreviewPdfType] = useState<'student_exam' | 'teacher_mark_scheme' | null>(null);

  // Active view tab: 'browse' or 'selected'
  const [activeTab, setActiveTab] = useState<'browse' | 'selected'>('browse');

  // Load questions
  const loadQuestions = async () => {
    setIsLoading(true);
    try {
      const res = await questionBankService.getQuestions(filter);
      setFilteredQuestions(res.questions);

      // Load all questions without filter for selected summary
      const allRes = await questionBankService.getQuestions();
      setAllQuestions(allRes.questions);
    } catch (e) {
      console.error('Gagal memuat soal:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [filter]);

  // Load existing worksheet for edit mode
  useEffect(() => {
    if (editId) {
      const loadEditData = async () => {
        setIsLoading(true);
        try {
          const ws = await questionBankService.getWorksheetById(editId);
          if (ws) {
            setTitle(ws.title);
            setTimeLimit(ws.time_limit_minutes || 90);
            setPassScore(ws.pass_score || 75);
            const qIds: number[] = (ws as any).selected_question_ids || [];
            if (qIds.length > 0) {
              setSelectedQuestionIds(qIds);
            }
            if (ws.access_token) {
              setCustomToken(ws.access_token);
            }
          }
        } catch (e) {
          console.error('Gagal memuat data edit worksheet:', e);
        } finally {
          setIsLoading(false);
        }
      };
      loadEditData();
    }
  }, [editId]);

  // Selected questions objects in ordered sequence
  const selectedQuestions = useMemo(() => {
    return selectedQuestionIds
      .map((id) => allQuestions.find((q) => q.id === id))
      .filter((q): q is Question => Boolean(q));
  }, [selectedQuestionIds, allQuestions]);

  // Calculations
  const totalPoints = useMemo(() => {
    return selectedQuestions.reduce((sum, q) => sum + (q.total_points || 10), 0);
  }, [selectedQuestions]);

  const estimatedMinutes = useMemo(() => {
    return selectedQuestions.reduce((sum, q) => sum + (q.estimated_time_minutes || 15), 0);
  }, [selectedQuestions]);

  const difficultyBreakdown = useMemo(() => {
    const counts: Record<QuestionDifficulty, number> = { OSK: 0, OSP: 0, OSN: 0, IChO: 0 };
    selectedQuestions.forEach((q) => {
      if (counts[q.difficulty] !== undefined) counts[q.difficulty]++;
    });
    return counts;
  }, [selectedQuestions]);

  const handleToggleQuestion = (qId: number) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleMoveQuestion = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === selectedQuestionIds.length - 1) return;

    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    const copy = [...selectedQuestionIds];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;
    setSelectedQuestionIds(copy);
  };

  const handleRemoveSelected = (qId: number) => {
    setSelectedQuestionIds((prev) => prev.filter((id) => id !== qId));
  };

  const handleSaveWorksheet = async () => {
    if (selectedQuestionIds.length === 0) return;
    setIsSaved(true);

    try {
      let savedWsId: number;

      if (editId) {
        // Update
        const wsIdNum = parseInt(editId, 10);
        const updated = await questionBankService.updateWorksheet(wsIdNum, {
          title,
          description: `Paket latihan ${targetLevel} berisi ${selectedQuestions.length} butir soal pilihan.`,
          time_limit_minutes: timeLimit,
          pass_score: passScore,
          questionIds: selectedQuestionIds,
          accessToken: customToken.trim() ? customToken.trim().toUpperCase() : undefined,
          teacherId,
        });
        savedWsId = updated.id;
      } else {
        // Create
        const newWs = await questionBankService.saveWorksheet({
          title,
          description: `Paket latihan ${targetLevel} berisi ${selectedQuestions.length} butir soal pilihan.`,
          time_limit_minutes: timeLimit,
          pass_score: passScore,
          questionIds: selectedQuestionIds,
          accessToken: customToken.trim() ? customToken.trim().toUpperCase() : undefined,
          teacherId,
          createdBy: user?.email || 'Guru Pembina',
        });
        savedWsId = newWs.id;
      }

      // Jika guru memilih kelas binaan, otomatis assign ke kelas tersebut
      if (assignedClassId) {
        await classroomService.assignWorksheetToClass(assignedClassId, savedWsId, undefined, true);
      }

      setTimeout(() => {
        navigate(`/worksheet/teacher_assignment/${savedWsId}`);
      }, 1200);
    } catch (e) {
      console.error('Gagal menyimpan worksheet:', e);
      setIsSaved(false);
    }
  };

  const handleCreateLiveSession = async () => {
    if (selectedQuestionIds.length === 0) {
      alert('Pilih minimal satu butir soal untuk membuat sesi live.');
      return;
    }

    const cleanToken = customToken.trim().toUpperCase();
    if (cleanToken.length < 3) {
      alert('Kode token minimal harus terdiri dari 3 karakter.');
      return;
    }

    setIsCreatingLive(true);
    try {
      const res = await worksheetRealtimeService.createLiveWorksheet({
        title,
        description: `Sesi Kelas Live ${targetLevel} (${selectedQuestions.length} butir soal)`,
        time_limit_minutes: timeLimit,
        pass_score: passScore,
        questionIds: selectedQuestionIds,
        customToken: cleanToken,
      });
      setCreatedLiveToken(res.token);
    } catch (err: any) {
      alert(`Gagal membuat sesi live: ${err?.message || 'Error'}`);
    } finally {
      setIsCreatingLive(false);
    }
  };

  const handlePrintPdf = (type: 'student_exam' | 'teacher_mark_scheme') => {
    if (selectedQuestions.length === 0) {
      alert('Pilih minimal satu butir soal untuk diekspor ke PDF.');
      return;
    }

    examExportService.exportExamToPrint({
      type,
      worksheetTitle: title,
      targetLevel,
      timeLimitMinutes: timeLimit,
      passScore,
      questions: selectedQuestions,
      includeCoverPage: true,
      includeConstantsTable: true,
      includeAnswerSpace: true,
    });
  };

  const handleSyncToSupabase = async () => {
    setIsSyncingCloud(true);
    setSyncFeedback(null);
    try {
      const res = await questionBankService.seedBenchmarkQuestionsToSupabase();
      setSyncFeedback(res.message);
      if (res.success) {
        await loadQuestions();
      }
    } catch (err: any) {
      setSyncFeedback(`Gagal: ${err?.message || 'Koneksi terputus'}`);
    } finally {
      setIsSyncingCloud(false);
    }
  };

  // Generated HTML for preview modal
  const previewHtml = useMemo(() => {
    if (!previewPdfType || selectedQuestions.length === 0) return '';
    return examExportService.generateExamHtml({
      type: previewPdfType,
      worksheetTitle: title,
      targetLevel,
      timeLimitMinutes: timeLimit,
      passScore,
      questions: selectedQuestions,
      includeCoverPage: true,
      includeConstantsTable: true,
      includeAnswerSpace: true,
    });
  }, [previewPdfType, selectedQuestions, title, targetLevel, timeLimit, passScore]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-900 font-display">
                Worksheet & Exam Studio
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 font-mono">
                Olympiad Grade
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Kurasi butir soal dari Bank Soal, cetak naskah PDF resmi, dan publikasikan tugas ke siswa.
            </p>
          </div>
        </div>

        {/* Cloud Sync Status Pill */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold ${
              isCloudAvailable
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            <Cloud className={`w-4 h-4 ${isCloudAvailable ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>{isCloudAvailable ? 'Supabase Connected' : 'Local Storage Mode'}</span>
          </div>

          {isCloudAvailable && (
            <button
              onClick={handleSyncToSupabase}
              disabled={isSyncingCloud}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
              title="Unggah / Sinkronkan Soal ke Supabase"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncingCloud ? 'animate-spin text-emerald-600' : ''}`} />
              <span className="hidden md:inline">Sync ke Supabase</span>
            </button>
          )}
        </div>
      </div>

      {/* Cloud Sync Feedback Banner */}
      {syncFeedback && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{syncFeedback}</span>
          </div>
          <button onClick={() => setSyncFeedback(null)} className="text-emerald-700 hover:text-emerald-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Grid: Left Panel (Builder Settings & PDF Export) + Right Panel (Question Browser) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Settings Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 font-display">Parameter Naskah</h3>
              <span className="text-xs font-mono font-bold text-emerald-700">
                {selectedQuestions.length} Soal Terpilih
              </span>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Judul Naskah / Ujian:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Target Tingkat Seleksi:</label>
              <select
                value={targetLevel}
                onChange={(e) => setTargetLevel(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              >
                <option value="SELEKSI TINGKAT KABUPATEN/KOTA (OSK)">Seleksi Tingkat Kab/Kota (OSK)</option>
                <option value="SELEKSI TINGKAT PROVINSI (OSP)">Seleksi Tingkat Provinsi (OSP)</option>
                <option value="OLIMPIADE SAINS NASIONAL (OSN)">Tingkat Nasional (OSN)</option>
                <option value="SELEKSI PELATNAS TAHAP 1 - IChO">Pelatnas Tahap I (IChO)</option>
                <option value="SIMULASI TRYOUT INTENSIF MANDIRI">Tryout Intensif Mandiri</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Durasi (Menit):</label>
                <div className="relative">
                  <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Passing Grade (%):</label>
                <input
                  type="number"
                  value={passScore}
                  onChange={(e) => setPassScore(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>
            </div>

            {/* Real-time Olympiad Package Metrics */}
            <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-slate-900 block font-display">Analisis Beban Ujian:</span>

              <div className="flex justify-between text-slate-600">
                <span>Total Butir Soal:</span>
                <span className="font-mono font-bold text-slate-900">{selectedQuestions.length} Butir</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total Skor Maksimal:</span>
                <span className="font-mono font-bold text-emerald-700">{totalPoints} Poin</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimasi Waktu Ideal:</span>
                <span className="font-mono font-bold text-slate-900">{estimatedMinutes} Menit</span>
              </div>

              {/* Difficulty Breakdown Bar */}
              <div className="pt-2 border-t border-slate-200/70">
                <span className="text-[11px] text-slate-500 block mb-1.5 font-medium">
                  Komposisi Kesulitan Soal:
                </span>
                <div className="flex gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold font-mono">
                    OSK: {difficultyBreakdown.OSK}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold font-mono">
                    OSP: {difficultyBreakdown.OSP}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                    OSN: {difficultyBreakdown.OSN}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold font-mono">
                    IChO: {difficultyBreakdown.IChO}
                  </span>
                </div>
              </div>
            </div>

            {/* Opsi Distribusi: Tugaskan Langsung ke Kelas Binaan */}
            {teacherClassrooms.length > 0 && (
              <div className="p-3 bg-indigo-50/70 border border-indigo-200/80 rounded-xl space-y-1.5">
                <label className="text-[11px] font-bold text-indigo-900 flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Tugaskan ke Kelas Binaan:</span>
                </label>
                <select
                  value={assignedClassId || ''}
                  onChange={(e) => setAssignedClassId(e.target.value ? parseInt(e.target.value, 10) : null)}
                  className="w-full px-2.5 py-1.5 bg-white border border-indigo-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="">Simpan ke Database Mandiri Saja (Tanpa Kelas)</option>
                  {teacherClassrooms.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name} ({cls.member_count || 0} Siswa)
                    </option>
                  ))}
                </select>
                <span className="text-[10px] text-indigo-700 block">
                  {assignedClassId
                    ? 'Worksheet akan otomatis muncul di akun siswa terdaftar di kelas ini.'
                    : 'Worksheet tetap bisa dibagikan via kode token instan.'}
                </span>
              </div>
            )}

            {/* Save Button */}
            <button
              onClick={handleSaveWorksheet}
              disabled={isSaved || selectedQuestions.length === 0}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              {isSaved ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Berhasil Diterbitkan ke Siswa!</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Simpan & Publikasikan ke Siswa</span>
                </>
              )}
            </button>

            {/* Live Token Configuration & Creation (Bisa Diatur Guru) */}
            <div className="pt-3 border-t border-slate-200/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kode Token Sesi Live:</span>
                </label>
                <button
                  type="button"
                  onClick={handleGenerateRandomToken}
                  className="text-[10px] font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                  title="Buat token acak otomatis"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Acak Kode</span>
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  value={customToken}
                  onChange={(e) => setCustomToken(e.target.value.toUpperCase())}
                  placeholder="Contoh: OSN-2025, KIMIA-A"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold tracking-wider text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 uppercase"
                />
              </div>
              <span className="text-[10px] text-slate-400 block -mt-1">
                Guru dapat menentukan kode token sendiri agar mudah diingat siswa.
              </span>

              <button
                type="button"
                onClick={handleCreateLiveSession}
                disabled={isCreatingLive || selectedQuestions.length === 0 || !customToken.trim()}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>
                  {isCreatingLive
                    ? 'Membuat Sesi Live...'
                    : `Terbitkan Sesi Live (${customToken.trim() || 'Token'})`}
                </span>
              </button>
            </div>
          </div>

          {/* PDF Export Hub (Prioritas Pengguna) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-2xl text-white shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold font-display">Ekspor Cetak / PDF Resmi</h4>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Puspresnas A4
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Format lembar soal dan rubrik berstandar olimpiade, lengkap dengan tata letak kop resmi, tabel konstanta, dan formula KaTeX vektor jernih.
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handlePrintPdf('student_exam')}
                disabled={selectedQuestions.length === 0}
                className="w-full py-2.5 px-3.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Cetak Naskah Soal Siswa</span>
                </div>
                <span className="text-[10px] bg-emerald-700/60 px-2 py-0.5 rounded font-mono">PDF</span>
              </button>

              <button
                type="button"
                onClick={() => handlePrintPdf('teacher_mark_scheme')}
                disabled={selectedQuestions.length === 0}
                className="w-full py-2.5 px-3.5 bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-between border border-slate-600"
              >
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Cetak Rubrik & Kunci Guru</span>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-mono text-slate-300">Mark Scheme</span>
              </button>

              <button
                type="button"
                onClick={() => setPreviewPdfType('student_exam')}
                disabled={selectedQuestions.length === 0}
                className="w-full py-2 px-3 text-slate-400 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lihat Preview Dokumen Sebelum Cetak</span>
              </button>
            </div>
          </div>

          {/* Selected Question Order / Management Drawer */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
                Urutan Soal dalam Paket ({selectedQuestions.length})
              </h4>
              {selectedQuestionIds.length > 0 && (
                <button
                  onClick={() => setSelectedQuestionIds([])}
                  className="text-[11px] text-red-600 hover:underline"
                >
                  Kosongkan
                </button>
              )}
            </div>

            {selectedQuestions.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-2">
                Belum ada butir soal yang dipilih. Silakan centang soal di panel sebelah kanan.
              </p>
            ) : (
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {selectedQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate">{q.title}</p>
                        <p className="text-[10px] text-slate-500 font-mono">
                          {q.difficulty} • {q.total_points || 10} pt
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleMoveQuestion(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20"
                        title="Geser ke atas"
                      >
                        <MoveUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleMoveQuestion(idx, 'down')}
                        disabled={idx === selectedQuestions.length - 1}
                        className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20"
                        title="Geser ke bawah"
                      >
                        <MoveDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleRemoveSelected(q.id)}
                        className="p-1 text-red-400 hover:text-red-600"
                        title="Hapus dari paket"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column (8 Cols): Filters & Question Browser */}
        <div className="lg:col-span-8 space-y-6">
          {/* Navigation Tabs */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('browse')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'browse'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Jelajahi Bank Soal ({filteredQuestions.length})
              </button>
              <button
                onClick={() => setActiveTab('selected')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'selected'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>Soal Terpilih</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    activeTab === 'selected' ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {selectedQuestionIds.length}
                </span>
              </button>
            </div>

            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Total {allQuestions.length} Butir Soal Terstandar
            </span>
          </div>

          {activeTab === 'browse' ? (
            <div className="space-y-6">
              {/* Question Filters */}
              <QuestionFilters
                filter={filter}
                onChange={setFilter}
                totalFound={filteredQuestions.length}
              />

              {/* Questions List */}
              <QuestionBankBrowser
                questions={filteredQuestions}
                selectedQuestionIds={selectedQuestionIds}
                onToggleSelect={handleToggleQuestion}
                onRefresh={loadQuestions}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center justify-between">
                <div>
                  <strong>Menampilkan {selectedQuestions.length} butir soal</strong> yang akan disertakan dalam naskah ujian ini.
                </div>
                <button
                  onClick={() => handlePrintPdf('student_exam')}
                  className="px-3 py-1.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak Paket</span>
                </button>
              </div>

              <QuestionBankBrowser
                questions={selectedQuestions}
                selectedQuestionIds={selectedQuestionIds}
                onToggleSelect={handleToggleQuestion}
                onRefresh={loadQuestions}
              />
            </div>
          )}
        </div>
      </div>

      {/* PDF Live Preview Modal */}
      {previewPdfType && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setPreviewPdfType(null)}
        >
          <div
            className="bg-white w-full max-w-4xl h-[92vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-sm font-bold font-display">
                    Preview Dokumen PDF ({previewPdfType === 'student_exam' ? 'Naskah Soal Siswa' : 'Pedoman Rubrik Guru'})
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    A4 Layout • {selectedQuestions.length} Butir Soal • {totalPoints} Poin
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setPreviewPdfType(
                      previewPdfType === 'student_exam' ? 'teacher_mark_scheme' : 'student_exam'
                    )
                  }
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700"
                >
                  Ganti ke: {previewPdfType === 'student_exam' ? 'Rubrik Guru' : 'Naskah Siswa'}
                </button>

                <button
                  onClick={() => handlePrintPdf(previewPdfType)}
                  className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Unduh PDF</span>
                </button>

                <button
                  onClick={() => setPreviewPdfType(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Iframe Preview */}
            <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden">
              <iframe
                title="Preview Naskah Ujian PDF"
                srcDoc={previewHtml}
                className="w-full h-full bg-white rounded-xl shadow-md border border-slate-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* Live Session Token Created Modal */}
      {createdLiveToken && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setCreatedLiveToken(null)}
        >
          <div
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-center p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <KeyRound className="w-7 h-7" />
            </div>

            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono uppercase">
                Sesi Kelas Aktif
              </span>
              <h3 className="text-lg font-black text-slate-900 font-display mt-2">
                Worksheet Siap Diakses Siswa!
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Bagikan kode token unik di bawah ini kepada siswa agar mereka dapat masuk dan mulai mengerjakan.
              </p>
            </div>

            {/* Token Highlight Box */}
            <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between shadow-md">
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">
                  KODE TOKEN AKSES:
                </span>
                <span className="text-2xl font-black font-mono tracking-widest text-emerald-400">
                  {createdLiveToken}
                </span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(createdLiveToken);
                  setCopiedToken(true);
                  setTimeout(() => setCopiedToken(false), 2000);
                }}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedToken ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => navigate(`/teacher/live/${createdLiveToken}`)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Radio className="w-4 h-4 animate-pulse" />
                <span>Buka Live Classroom Studio Sekarang</span>
              </button>

              <button
                onClick={() => setCreatedLiveToken(null)}
                className="w-full py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold"
              >
                Tutup Jendela Ini
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
