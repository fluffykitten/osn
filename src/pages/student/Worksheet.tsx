import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BENCHMARK_QUESTIONS } from '../../data/syllabusData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { ChemToolbar } from '../../components/worksheet/ChemToolbar';
import { PeriodicTableDrawer } from '../../components/common/PeriodicTableDrawer';
import { MolarMassCalculatorModal } from '../../components/common/MolarMassCalculatorModal';
import { ScaffoldGuideModal } from '../../components/worksheet/ScaffoldGuideModal';
import { addXpLocally } from '../../lib/gamification';
import { evaluateStudentWorksheet } from '../../services/aiGradingService';
import { saveWorksheetSubmission } from '../../services/submissionService';
import { worksheetRealtimeService } from '../../services/worksheetRealtimeService';
import { findConceptByTag } from '../../data/materialsData';
import type { GradingResponse, TeacherLiveComment } from '../../types/database';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Table,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Check,
  Zap,
  Maximize2,
  Minimize2,
  Columns,
  Eye,
  Edit3,
  Info,
  Scale,
  AlertTriangle,
  XCircle,
  RotateCcw,
  BookOpen,
  Award,
  ExternalLink,
  Radio,
  X,
} from 'lucide-react';

export const Worksheet: React.FC = () => {
  const { type = 'static_module', id } = useParams<{ type?: string; id?: string }>();
  const navigate = useNavigate();

  const questionsList = BENCHMARK_QUESTIONS;

  // Temukan indeks soal berdasarkan parameter :id di URL
  const targetId = id ? parseInt(id, 10) : null;
  const initialIdx = useMemo(() => {
    if (!targetId || isNaN(targetId)) return 0;
    const foundIdx = questionsList.findIndex(
      (q) => q.id === targetId || q.pillar_number === targetId || q.module_id === targetId
    );
    return foundIdx !== -1 ? foundIdx : 0;
  }, [targetId, questionsList]);

  const [currentQIndex, setCurrentQIndex] = useState(initialIdx);

  useEffect(() => {
    if (initialIdx !== currentQIndex) {
      setCurrentQIndex(initialIdx);
      setEvaluationResult(null);
      setEvaluationError(null);
    }
  }, [initialIdx]);

  const currentQuestion = questionsList[currentQIndex] || questionsList[0];

  // Answers state
  const [answers, setAnswers] = useState<Record<number, { steps: string; finalAnswer: string }>>({});

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Layout View Modes: 'split' (side by side), 'editor', 'preview'
  const [workspaceMode, setWorkspaceMode] = useState<'split' | 'editor' | 'preview'>('split');
  const [isZenMode, setIsZenMode] = useState(false);
  const [isPeriodicOpen, setIsPeriodicOpen] = useState(false);
  const [isMolarMassOpen, setIsMolarMassOpen] = useState(false);
  const [isScaffoldGuideOpen, setIsScaffoldGuideOpen] = useState(false);

  // AI Evaluation Engine States
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationStage, setEvaluationStage] = useState<
    'idle' | 'analyzing' | 'validating_math' | 'synthesizing_feedback'
  >('idle');
  const [evaluationResult, setEvaluationResult] = useState<GradingResponse | null>(null);
  const [evaluationError, setEvaluationError] = useState<string | null>(null);
  const [isSubmissionSaved, setIsSubmissionSaved] = useState(false);

  // Real-time Two-way Classroom State (Token, Laser Pointer, Teacher Comments)
  const liveToken = useMemo(() => {
    if (type === 'live' && id) return id.trim().toUpperCase();
    const queryToken = new URLSearchParams(window.location.search).get('token');
    return queryToken ? queryToken.trim().toUpperCase() : null;
  }, [type, id]);

  const [laserPointer, setLaserPointer] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const [liveComment, setLiveComment] = useState<TeacherLiveComment | null>(null);
  const typingDebounceRef = useRef<any>(null);

  // Subscribe to Realtime Classroom if liveToken is active
  useEffect(() => {
    if (!liveToken) return;

    const unsubscribe = worksheetRealtimeService.subscribeToClassroom(liveToken, {
      onTeacherLaser: (event) => {
        if (event.question_id === currentQuestion?.id) {
          setLaserPointer({
            x: event.x_percent,
            y: event.y_percent,
            active: event.is_laser_active,
          });
        }
      },
      onTeacherComment: (comment) => {
        if (!comment.question_id || comment.question_id === currentQuestion?.id) {
          setLiveComment(comment);
        }
      },
    });

    return () => unsubscribe();
  }, [liveToken, currentQuestion?.id]);

  // Working Time Stopwatch (Menghitung durasi pengerjaan siswa)
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  useEffect(() => {
    const stopwatch = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(stopwatch);
  }, []);

  const formatStopwatch = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStepValue = answers[currentQIndex]?.steps || '';
  const currentFinalAnswer = answers[currentQIndex]?.finalAnswer || '';

  const handleStepsChange = (val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQIndex]: {
        ...prev[currentQIndex],
        steps: val,
        finalAnswer: prev[currentQIndex]?.finalAnswer || '',
      },
    }));

    // Broadcast live keystrokes to teacher
    if (liveToken) {
      if (typingDebounceRef.current) clearTimeout(typingDebounceRef.current);
      typingDebounceRef.current = setTimeout(() => {
        const studentId = localStorage.getItem('osn_student_id') || 'student-local';
        const studentName = localStorage.getItem('osn_student_name') || 'Siswa OSN';
        worksheetRealtimeService.sendStudentKeystroke({
          access_token: liveToken,
          student_id: studentId,
          student_name: studentName,
          question_id: currentQuestion?.id || currentQIndex,
          question_index: currentQIndex,
          steps: val,
          finalAnswer: answers[currentQIndex]?.finalAnswer || '',
          timestamp: Date.now(),
        });
      }, 150);
    }
  };

  const handleFinalAnswerChange = (val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQIndex]: {
        steps: prev[currentQIndex]?.steps || '',
        finalAnswer: val,
      },
    }));

    if (liveToken) {
      if (typingDebounceRef.current) clearTimeout(typingDebounceRef.current);
      typingDebounceRef.current = setTimeout(() => {
        const studentId = localStorage.getItem('osn_student_id') || 'student-local';
        const studentName = localStorage.getItem('osn_student_name') || 'Siswa OSN';
        worksheetRealtimeService.sendStudentKeystroke({
          access_token: liveToken,
          student_id: studentId,
          student_name: studentName,
          question_id: currentQuestion?.id || currentQIndex,
          question_index: currentQIndex,
          steps: answers[currentQIndex]?.steps || '',
          finalAnswer: val,
          timestamp: Date.now(),
        });
      }, 150);
    }
  };

  const handleInsertFromPeriodic = (textToInsert: string) => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const current = el.value;
    const updated = current.substring(0, start) + textToInsert + current.substring(end);
    handleStepsChange(updated);
    el.focus();
    setTimeout(() => {
      el.setSelectionRange(start + textToInsert.length, start + textToInsert.length);
    }, 0);
  };

  // Real Multi-Stage AI Evaluation
  const handleEvaluate = async () => {
    if (!currentStepValue.trim()) return;

    setIsEvaluating(true);
    setEvaluationResult(null);
    setEvaluationError(null);
    setEvaluationStage('analyzing');

    // Dynamic progression indicators
    const t1 = setTimeout(() => setEvaluationStage('validating_math'), 700);
    const t2 = setTimeout(() => setEvaluationStage('synthesizing_feedback'), 1400);

    try {
      const result = await evaluateStudentWorksheet({
        questionId: currentQuestion.id,
        questionTitle: currentQuestion.title,
        questionText: currentQuestion.question_text,
        pillarNumber: currentQuestion.pillar_number,
        subtopic: currentQuestion.subtopic,
        expectedFinalAnswer: currentQuestion.expected_final_answer || '',
        solutionRubric: currentQuestion.solution_rubric || '',
        studentWorkSteps: currentStepValue,
        studentFinalAnswer: currentFinalAnswer,
        elapsedSeconds,
        maxPoints: 10,
      });

      clearTimeout(t1);
      clearTimeout(t2);
      setEvaluationStage('idle');
      setIsEvaluating(false);
      setEvaluationResult(result);
      addXpLocally(result.xpAwarded);

      // Milestone 3: Auto-Save evaluasi pengerjaan ke Portofolio Siswa (Supabase + Local Cache)
      try {
        await saveWorksheetSubmission({
          questionId: currentQuestion.id,
          questionTitle: currentQuestion.title,
          pillarNumber: currentQuestion.pillar_number,
          subtopic: currentQuestion.subtopic,
          studentWorkSteps: currentStepValue,
          studentFinalAnswer: currentFinalAnswer,
          gradingResponse: result,
          elapsedSeconds,
        });
        setIsSubmissionSaved(true);
      } catch (saveErr) {
        console.warn('Gagal menyimpan hasil pengerjaan secara otomatis:', saveErr);
      }
    } catch (err: any) {
      clearTimeout(t1);
      clearTimeout(t2);
      setEvaluationStage('idle');
      setIsEvaluating(false);
      setEvaluationError(err.message || 'Terjadi kesalahan saat memproses penilaian AI.');
    }
  };

  return (
    <div
      className={`flex flex-col bg-slate-100 ${
        isZenMode ? 'fixed inset-0 z-50 bg-white overflow-y-auto' : 'h-full overflow-hidden'
      }`}
    >
      {/* Top Header Bar */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-2xs shrink-0">
        <div className="flex items-center gap-3">
          {!isZenMode && (
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded uppercase font-mono">
              {liveToken
                ? 'Live Classroom Sesi Guru'
                : type === 'static_module'
                ? 'Static Module Drill'
                : 'Teacher Assignment'}
            </span>
            {liveToken && (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
                <span>Token: {liveToken}</span>
              </span>
            )}
            <h1 className="text-sm font-bold text-slate-900 font-display hidden sm:inline">
              Topik #{currentQuestion.pillar_number}: {currentQuestion.subtopic}
            </h1>
          </div>
        </div>

        {/* Question Stepper Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
          {questionsList.map((q, idx) => {
            const isAnswered = Boolean(answers[idx]?.steps);
            const isCurrent = idx === currentQIndex;

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentQIndex(idx);
                  setEvaluationResult(null);
                  setEvaluationError(null);
                  navigate(`/worksheet/${type}/${q.id}`, { replace: true });
                }}
                className={`px-3 py-1 rounded-lg font-semibold text-xs transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-sky-500 text-white shadow-2xs font-bold'
                    : isAnswered
                    ? 'bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
                title={`Topik #${q.pillar_number}: ${q.subtopic}`}
              >
                <span className="text-[10px] opacity-75 font-mono">T{q.pillar_number}</span>
                <span>Soal {idx + 1}</span>
                {isAnswered && <Check className="w-3 h-3 text-sky-600" />}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Stopwatch, Calculator, Periodic Table, API Key, Zen Mode */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 border border-sky-200 rounded-lg text-xs font-mono font-bold text-sky-800 shadow-2xs"
            title="Stopwatch Waktu Pengerjaan Siswa"
          >
            <Clock className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>{formatStopwatch(elapsedSeconds)}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsMolarMassOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-300 rounded-lg text-xs font-bold transition-all shadow-2xs active:scale-95"
            title="Kalkulator Massa Molar Relatif (Mr)"
          >
            <Scale className="w-3.5 h-3.5 text-sky-600" />
            <span className="hidden sm:inline">Kalkulator Mr</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPeriodicOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-300 rounded-lg text-xs font-bold transition-all shadow-2xs active:scale-95"
            title="Buka Tabel Periodik & Tetapan Fisika"
          >
            <Table className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Tabel Periodik</span>
          </button>


          <button
            type="button"
            onClick={() => setIsZenMode(!isZenMode)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isZenMode
                ? 'bg-sky-500 text-white border-sky-500'
                : 'text-slate-600 hover:bg-slate-100 border-slate-200'
            }`}
            title={isZenMode ? 'Keluar Zen Mode' : 'Mode Layar Penuh Fokus'}
          >
            {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Synchronized Side-by-Side Dual-Panel Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* PANEL KIRI: Naskah Soal & Informasi (Lebar 40% di Desktop - Independent Scroll) */}
        <div className="w-full lg:w-[40%] xl:w-[38%] h-full bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col overflow-y-auto p-5 sm:p-6 space-y-4 shrink-0">
          {/* Question Metadata Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-slate-900 text-white text-xs font-bold rounded font-mono">
                No. {currentQIndex + 1}
              </span>
              <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold rounded">
                Tingkat {currentQuestion.difficulty}
              </span>
            </div>

            <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
              Bobot: 10.0 Poin
            </span>
          </div>

          {/* Question Title */}
          <h2 className="text-base sm:text-lg font-bold text-slate-900 font-display">
            {currentQuestion.title}
          </h2>

          {/* Question Text with KaTeX */}
          <div className="text-sm leading-relaxed text-slate-800 bg-slate-50/60 p-4 rounded-xl border border-slate-200/80">
            <KaTeXRenderer content={currentQuestion.question_text} />
          </div>

          {/* Useful Constants Quick Box */}
          <div className="p-3.5 bg-amber-50/50 border border-amber-200/80 rounded-xl space-y-1.5 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Info className="w-4 h-4 text-amber-600" />
              <span>Tetapan & Data Pendukung:</span>
            </div>
            <div className="text-amber-900 leading-relaxed text-[11px]">
              <KaTeXRenderer
                content={`• $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$
• $M_r(\\ce{BaCO3}) = 197.34\\text{ g/mol}$
• $T = 25^\\circ\\text{C} = 298.15\\text{ K}$`}
              />
            </div>
          </div>

          {/* Tags Konsep Interaktif Terhubung ke Database Materi */}
          {currentQuestion.tags && (
            <div className="p-3 bg-sky-50/50 border border-sky-200/70 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sky-900 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  <span>Pelajari Konsep Terkait (Database Materi):</span>
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Klik untuk buka materi</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {currentQuestion.tags.map((t) => {
                  const match = findConceptByTag(t);
                  const targetTopic = match ? match.material.topic_number : currentQuestion.pillar_number;
                  const targetTag = match ? match.block.tag : t;

                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => navigate(`/materi/${targetTopic}?tag=${targetTag}`)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-sky-100 text-sky-800 text-[11px] font-mono font-semibold rounded-lg border border-sky-200 transition-all shadow-2xs hover:scale-102"
                      title={`Buka pembahasan konsep #${t} di Database Materi (Topik ${targetTopic})`}
                    >
                      <span>#{t}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-sky-500" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* PANEL KANAN: Tempat Pengerjaan & Live Preview (Lebar 60% di Desktop - Independent Scroll) */}
        <div className="w-full lg:w-[60%] xl:w-[62%] h-full bg-slate-50 flex flex-col overflow-y-auto">
          {/* Sub-Header: View Mode Switcher (Split vs Editor vs Preview) */}
          <div className="bg-white border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-slate-700 font-bold flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-sky-600" />
                <span>Lembar Kerja Siswa</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                <span>Draft tersimpan otomatis</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* OSN 4-Step Framework Guide Modal */}
              <button
                type="button"
                onClick={() => setIsScaffoldGuideOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition-all shadow-2xs ${
                  isScaffoldGuideOpen
                    ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-300'
                    : 'bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-300'
                }`}
                title="Buka pop-up panduan floating kerangka 4 langkah pengerjaan OSN"
              >
                <Sparkles className={`w-3.5 h-3.5 ${isScaffoldGuideOpen ? 'text-amber-300' : 'text-sky-600'}`} />
                <span>🪄 Kerangka 4 Langkah OSN</span>
              </button>
            </div>

            {/* View Mode Buttons */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg">
              <button
                type="button"
                onClick={() => setWorkspaceMode('split')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  workspaceMode === 'split'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Tampilkan Editor & Live Preview Bersanding"
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Split Bersanding</span>
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('editor')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  workspaceMode === 'editor'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Hanya Editor"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editor</span>
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('preview')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  workspaceMode === 'preview'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Hanya Pratinjau KaTeX"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Pratinjau</span>
              </button>
            </div>
          </div>

          {/* ChemToolbar directly attached */}
          <ChemToolbar
            textareaRef={textareaRef}
            onValueChange={handleStepsChange}
            onOpenPeriodicTable={() => setIsPeriodicOpen(true)}
            onOpenMolarMass={() => setIsMolarMassOpen(true)}
          />

          {/* Editor & Preview Area */}
          <div className="flex-1 p-4 sm:p-5 space-y-4">
            {/* Live Teacher Sticky Comment / Hint */}
            {liveComment && (
              <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl text-xs text-sky-900 shadow-2xs flex items-start justify-between gap-3 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sky-950 block">
                      Catatan Bimbingan ({liveComment.teacher_name || 'Guru Pembina'}):
                    </span>
                    <p className="text-sky-900 mt-0.5 leading-relaxed font-medium">
                      {liveComment.comment_text}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setLiveComment(null)}
                  className="text-sky-400 hover:text-sky-700 p-0.5 rounded"
                  title="Tutup Catatan"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Work Area Grid based on Workspace Mode */}
            <div
              className={`grid gap-4 ${
                workspaceMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {/* Editor Textarea with Laser Pointer Overlay */}
              {(workspaceMode === 'split' || workspaceMode === 'editor') && (
                <div className="relative flex flex-col space-y-1.5">
                  {/* Virtual Laser Pointer Beacon */}
                  {laserPointer.active && (
                    <div
                      className="pointer-events-none absolute z-30 transition-all duration-75 ease-out"
                      style={{
                        left: `${laserPointer.x}%`,
                        top: `${laserPointer.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className="relative flex items-center">
                        <span className="relative flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-600 shadow-[0_0_12px_#e11d48]"></span>
                        </span>
                        <span className="ml-1.5 px-2 py-0.5 rounded-full bg-rose-950/90 text-white text-[9px] font-bold font-mono whitespace-nowrap shadow-md border border-rose-500/40">
                          🔴 Guru menunjuk
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                    <label>Langkah & Penalaran Perhitungan:</label>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {currentStepValue.length} karakter
                    </span>
                  </div>
                  <textarea
                    ref={textareaRef}
                    value={currentStepValue}
                    onChange={(e) => handleStepsChange(e.target.value)}
                    placeholder="Ketik langkah pembuktian dan perhitungan Anda...&#10;Contoh:&#10;1. Mol gas total:&#10;$n = \frac{PV}{RT} = 1.00\text{ mol}$"
                    rows={workspaceMode === 'split' ? 14 : 16}
                    className="w-full p-3 text-xs sm:text-sm font-mono text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 leading-relaxed resize-y shadow-2xs"
                  />
                </div>
              )}

              {/* Live KaTeX Preview */}
              {(workspaceMode === 'split' || workspaceMode === 'preview') && (
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-800">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-600" />
                      <span>Live Render KaTeX (Hasil Siswa):</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Real-time</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs overflow-y-auto min-h-[260px] max-h-[460px]">
                    {currentStepValue ? (
                      <div className="text-xs sm:text-sm">
                        <KaTeXRenderer content={currentStepValue} />
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 py-12">
                        <p className="text-xs">Formula yang Anda ketik akan otomatis dirender rapi di sini.</p>
                        <p className="text-[11px] text-slate-400 mt-1">Baris baru dan paragraf akan tampil bertingkat.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Final Answer Input */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Jawaban Akhir / Senyawa Final:
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={currentFinalAnswer}
                  onChange={(e) => handleFinalAnswerChange(e.target.value)}
                  placeholder="Contoh: X_CH4 = 0.50 atau \ce{CH3COOH}"
                  className="flex-1 px-3 py-2 text-xs sm:text-sm font-mono font-medium text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />

                {currentFinalAnswer && (
                  <div className="px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-lg text-xs font-semibold text-sky-900 flex items-center shrink-0">
                    <KaTeXRenderer content={currentFinalAnswer} inlineOnly />
                  </div>
                )}
              </div>
            </div>

            {/* Action Bar: Prev / Next & AI Evaluation Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (currentQIndex > 0) {
                      setCurrentQIndex(currentQIndex - 1);
                      setEvaluationResult(null);
                      setEvaluationError(null);
                    }
                  }}
                  disabled={currentQIndex === 0}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Soal Sebelumnya</span>
                </button>
                <button
                  onClick={() => {
                    if (currentQIndex < questionsList.length - 1) {
                      setCurrentQIndex(currentQIndex + 1);
                      setEvaluationResult(null);
                      setEvaluationError(null);
                    }
                  }}
                  disabled={currentQIndex === questionsList.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
                >
                  <span>Soal Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Stage Text or Submit Button */}
              <div className="flex items-center gap-3">
                {isEvaluating && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-800 font-medium animate-pulse">
                    <span className="w-3.5 h-3.5 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
                    <span>
                      {evaluationStage === 'analyzing' && '🔍 Menganalisis langkah penurunan & notasi kimia...'}
                      {evaluationStage === 'validating_math' &&
                        '⚖️ Memvalidasi stoikiometri & toleransi numerik (±2% - ±5%)...'}
                      {evaluationStage === 'synthesizing_feedback' &&
                        '📝 Menyusun umpan balik pedagogis & kriteria rubrik...'}
                      {evaluationStage === 'idle' && 'Memproses evaluasi...'}
                    </span>
                  </div>
                )}

                <button
                  onClick={handleEvaluate}
                  disabled={isEvaluating || !currentStepValue.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-50 active:scale-98"
                >
                  {isEvaluating ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sedang Mengevaluasi...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Evaluasi Kriteria AI OSN (+50 XP)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Evaluation Error Alert */}
            {evaluationError && (
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2.5 animate-in fade-in">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-bold block">Gagal Menilai Jawaban:</span>
                  <span>{evaluationError}</span>
                </div>
              </div>
            )}

            {/* Rich AI Evaluation Diagnostic Result Panel */}
            {evaluationResult && (
              <div className="bg-white border border-sky-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5 animate-in fade-in">
                {/* Result Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-white shadow-xs ${
                        evaluationResult.status === 'perfect'
                          ? 'bg-emerald-500'
                          : evaluationResult.status === 'partial_correct'
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                    >
                      {evaluationResult.status === 'perfect' ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : evaluationResult.status === 'partial_correct' ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <XCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          {evaluationResult.status === 'perfect'
                            ? 'Hasil Evaluasi AI: Sempurna! 🏆'
                            : evaluationResult.status === 'partial_correct'
                            ? 'Hasil Evaluasi AI: Benar Sebagian 🎯'
                            : 'Hasil Evaluasi AI: Perlu Peningkatan 🔄'}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-sky-100 text-sky-800 text-xs font-bold rounded-lg font-mono">
                          {evaluationResult.totalScore} / {evaluationResult.maxScore} Poin (
                          {Math.round((evaluationResult.totalScore / evaluationResult.maxScore) * 100)}%)
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1 font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                          {evaluationResult.modelUsed
                            ? `✨ ${evaluationResult.modelUsed} (Live AI)`
                            : '🔬 Mesin Evaluasi Saintifik OSN'}
                        </span>
                        <span>•</span>
                        <span>Keyakinan: {Math.round(evaluationResult.confidenceScore * 100)}%</span>
                        <span>•</span>
                        <span>Waktu: {formatStopwatch(evaluationResult.elapsedSeconds || elapsedSeconds)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Evaluasi Terverifikasi</span>
                  </div>
                </div>

                {/* Auto-Save & Radar Link Confirmation Banner */}
                {isSubmissionSaved && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-950 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold">
                        Lembar pengerjaan berhasil tersimpan ke Portofolio & Radar Kompetensi Siswa.
                      </span>
                    </div>
                    <button
                      onClick={() => navigate('/profile')}
                      className="inline-flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 bg-white px-2.5 py-1 rounded-lg border border-sky-200 shadow-2xs hover:bg-sky-50 transition-colors"
                    >
                      <span>Lihat Analisis Radar</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Overall Feedback with KaTeX Rendering */}
                <div className="p-4 bg-sky-50/60 border border-sky-200/80 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="font-bold text-sky-900 block mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>Catatan Evaluator Dewan Juri:</span>
                  </span>
                  <KaTeXRenderer content={evaluationResult.overallFeedback} />
                </div>

                {/* Step-by-Step Rubric Criteria Breakdown */}
                {evaluationResult.criteriaBreakdown && evaluationResult.criteriaBreakdown.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                      <span>Rincian Kriteria Langkah Rubrik Puspresnas:</span>
                      <span className="text-[11px] text-slate-400 font-normal">
                        Toleransi numerik ±2% s.d. ±5% diterapkan
                      </span>
                    </div>

                    <div className="grid gap-2">
                      {evaluationResult.criteriaBreakdown.map((crit, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl border transition-all ${
                            crit.achieved
                              ? 'bg-emerald-50/40 border-emerald-200/80'
                              : 'bg-rose-50/40 border-rose-200/80'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2.5">
                              {crit.achieved ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              ) : (
                                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              )}
                              <div>
                                <span className="font-bold text-xs text-slate-900 block">
                                  Langkah #{crit.stepNumber}: {crit.criterionTitle}
                                </span>
                                <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                                  <KaTeXRenderer content={crit.examinerExplanation} />
                                </div>
                              </div>
                            </div>

                            <span
                              className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                                crit.achieved
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {crit.pointsEarned} / {crit.maxPoints} Poin
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Strengths & Areas for Improvement Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {/* Strengths */}
                  {evaluationResult.strengths && evaluationResult.strengths.length > 0 && (
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                      <span className="font-bold text-emerald-800 block flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Kelebihan Penalaran:</span>
                      </span>
                      <ul className="space-y-1 text-slate-700 pl-4 list-disc">
                        {evaluationResult.strengths.map((str, idx) => (
                          <li key={idx}>
                            <KaTeXRenderer content={str} inlineOnly />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Areas for Improvement */}
                  {evaluationResult.missingOrIncorrectPoints &&
                    evaluationResult.missingOrIncorrectPoints.length > 0 && (
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                        <span className="font-bold text-amber-800 block flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Poin Perlu Disempurnakan:</span>
                        </span>
                        <ul className="space-y-1 text-slate-700 pl-4 list-disc">
                          {evaluationResult.missingOrIncorrectPoints.map((mis, idx) => (
                            <li key={idx}>
                              <KaTeXRenderer content={mis} inlineOnly />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>

                {/* Chemical Misconception Alert Card */}
                {evaluationResult.misconceptionDiagnosis && (
                  <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Diagnosa Miskonsepsi Kimia:</span>
                    </div>
                    <p className="text-amber-900 leading-relaxed pl-5">
                      <KaTeXRenderer content={evaluationResult.misconceptionDiagnosis} />
                    </p>
                  </div>
                )}

                {/* Bottom Footer & Review Topic Recommendation */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  {evaluationResult.suggestedReviewTopic && (
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                      <span>
                        Saran Topik Penguatan: <strong>{evaluationResult.suggestedReviewTopic}</strong>
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEvaluationResult(null);
                        if (textareaRef.current) textareaRef.current.focus();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Perbaiki & Coba Lagi</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate('/profile')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold rounded-lg border border-sky-200 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      <span>Analisis Radar di Profil</span>
                    </button>

                    {currentQIndex < questionsList.length - 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentQIndex(currentQIndex + 1);
                          setEvaluationResult(null);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors shadow-2xs"
                      >
                        <span>Lanjut ke Soal Berikutnya</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide-over Periodic Table */}
      <PeriodicTableDrawer
        isOpen={isPeriodicOpen}
        onClose={() => setIsPeriodicOpen(false)}
        onInsertText={handleInsertFromPeriodic}
      />

      {/* Floating & Draggable Molar Mass Calculator Modal */}
      <MolarMassCalculatorModal
        isOpen={isMolarMassOpen}
        onClose={() => setIsMolarMassOpen(false)}
        onInsertText={handleInsertFromPeriodic}
      />

      {/* Floating & Draggable OSN 4-Step Guide Modal */}
      <ScaffoldGuideModal
        isOpen={isScaffoldGuideOpen}
        onClose={() => setIsScaffoldGuideOpen(false)}
        question={currentQuestion}
        onInsertToWorksheet={(template) => handleStepsChange(template)}
      />

    </div>
  );
};
