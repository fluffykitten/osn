import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BENCHMARK_QUESTIONS, PILLARS_DATA } from '../../data/syllabusData';
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
import { questionBankService } from '../../services/questionBankService';
import { useAuth } from '../../contexts/AuthContext';
import { ScaledDocumentCanvas } from '../../components/worksheet/ScaledDocumentCanvas';
import { ScalePresetToggle, type CanvasScale } from '../../components/worksheet/ScalePresetToggle';
import type {
  GradingResponse,
  TeacherLiveComment,
  Question,
  Worksheet as WorksheetType,
  LiveHighlightItem,
  LiveHighlightEvent,
} from '../../types/database';
import { getSupabaseClient } from '../../lib/supabaseClient';
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
  Save,
  Cloud,
  CloudCheck,
} from 'lucide-react';

export const Worksheet: React.FC = () => {
  const { type = 'static_module', id } = useParams<{ type?: string; id?: string }>();
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const [customQuestions, setCustomQuestions] = useState<Question[] | null>(null);
  const [loadedWorksheet, setLoadedWorksheet] = useState<WorksheetType | null>(null);

  // Student Identity
  const studentId = user?.id || localStorage.getItem('osn_student_id') || 'student-demo-uuid';
  const studentName = profile?.full_name || localStorage.getItem('osn_student_name') || 'Ahmad Fauzan';
  const studentEmail = user?.email || profile?.email || localStorage.getItem('osn_student_email') || 'siswa@gmail.com';

  // Ambil soal kustom yang dibuat guru jika dalam sesi live worksheet atau penugasan
  useEffect(() => {
    const loadCustomQuestions = async () => {
      try {
        if (type === 'live' && id) {
          const cleanToken = id.trim().toUpperCase();
          const res = await worksheetRealtimeService.joinWorksheetByToken(cleanToken, {
            id: studentId,
            name: studentName,
          });
          if (res.success && res.worksheet) {
            setLoadedWorksheet(res.worksheet);
            const questionRes = await questionBankService.getQuestions();
            const allQ = questionRes.questions || [];
            const ws = res.worksheet as any;
            const qIds: number[] = ws.selected_question_ids || ws.questionIds || [];
            if (Array.isArray(qIds) && qIds.length > 0) {
              const matched = allQ.filter((q) => qIds.includes(q.id));
              if (matched.length > 0) {
                setCustomQuestions(matched);
                return;
              }
            }
          }
        } else if (type === 'teacher_assignment' && id) {
          const ws = await questionBankService.getWorksheetById(id);
          if (ws) {
            setLoadedWorksheet(ws);
            const questionRes = await questionBankService.getQuestions();
            const allQ = questionRes.questions || [];
            const qIds: number[] = (ws as any).selected_question_ids || [];
            if (Array.isArray(qIds) && qIds.length > 0) {
              // Ensure we maintain the exact order from the worksheet!
              const matched = qIds.map((qId) => allQ.find((q) => q.id === qId)).filter(Boolean) as Question[];
              if (matched.length > 0) {
                setCustomQuestions(matched);
                return;
              }
            }
          }
        }
      } catch (e) {
        console.warn('Gagal memuat soal kustom:', e);
      }
    };
    loadCustomQuestions();
  }, [type, id, studentId, studentName]);

  const questionsList =
    customQuestions && customQuestions.length > 0 ? customQuestions : BENCHMARK_QUESTIONS;

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
    if (queryToken) return queryToken.trim().toUpperCase();
    if (loadedWorksheet?.access_token) return loadedWorksheet.access_token.trim().toUpperCase();
    if (type === 'teacher_assignment') return `ASSIGN-${id || 1}`;
    return `WS-${id || 1}`;
  }, [type, id, loadedWorksheet?.access_token]);

  // Current Worksheet Title
  const currentWorksheetTitle = useMemo(() => {
    if (loadedWorksheet?.title) return loadedWorksheet.title;
    if (type === 'live') return `Sesi Live [${id || 'OSN'}]`;
    if (type === 'teacher_assignment') return `Tugas Lembar Kerja #${id || 1}`;
    if (type === 'static_module') {
      const pNum = Number(id);
      const pillar = PILLARS_DATA.find((p) => p.pillar_number === pNum || p.id === pNum);
      if (pillar) {
        if (currentQuestion?.subtopic) {
          return `Topik #${pillar.pillar_number}: ${currentQuestion.subtopic}`;
        }
        return `Topik ${pillar.pillar_number}: ${pillar.title}`;
      }
    }
    return currentQuestion?.title
      ? `Latihan OSN: ${currentQuestion.title}`
      : `Modul Latihan OSN Kimia #${id || 1}`;
  }, [loadedWorksheet?.title, type, id, currentQuestion?.title, currentQuestion?.subtopic]);

  // Resolved Classroom ID
  const resolvedClassroomId = useMemo(() => {
    const qClassroomId = new URLSearchParams(window.location.search).get('classroomId');
    if (qClassroomId && !isNaN(Number(qClassroomId))) return Number(qClassroomId);
    if (loadedWorksheet?.classroom_id) return Number(loadedWorksheet.classroom_id);
    try {
      const raw = localStorage.getItem('osn_local_assignments_store');
      if (raw) {
        const asgs = JSON.parse(raw);
        const matched = asgs.find((a: any) => Number(a.worksheet_id) === Number(id));
        if (matched?.classroom_id) return Number(matched.classroom_id);
      }
    } catch {}
    const savedClassId = localStorage.getItem('osn_student_classroom_id');
    if (savedClassId && !isNaN(Number(savedClassId))) return Number(savedClassId);
    return 1;
  }, [loadedWorksheet?.classroom_id, id]);

  const studentQuestionAreaRef = useRef<HTMLDivElement | null>(null);
  const studentRenderAreaRef = useRef<HTMLDivElement | null>(null);

  const [canvasScale, setCanvasScale] = useState<CanvasScale>(1.0);
  const [teacherHighlights, setTeacherHighlights] = useState<LiveHighlightItem[]>([]);

  const [laserPointer, setLaserPointer] = useState<{
    x: number;
    y: number;
    pixelLeft?: number;
    pixelTop?: number;
    canvas_logical_x?: number;
    canvas_logical_y?: number;
    active: boolean;
    target_zone?: 'question_area' | 'student_render' | 'student_editor';
    anchor_type?: 'math' | 'katex' | 'block' | 'table_cell' | 'container';
    anchor_index?: number;
    rel_x_pct?: number;
    rel_y_pct?: number;
    scroll_top_pct?: number;
  }>({
    x: 0,
    y: 0,
    active: false,
    target_zone: 'student_render',
  });
  const [liveComment, setLiveComment] = useState<TeacherLiveComment | null>(null);
  const typingDebounceRef = useRef<any>(null);

  // Synchronize student presence with teacher's live monitor in real time
  useEffect(() => {
    const answeredCount = Object.keys(answers).filter(
      (k) => answers[Number(k)]?.finalAnswer?.trim() || answers[Number(k)]?.steps?.trim()
    ).length;

    const draftData = {
      studentId,
      worksheetId: id || '1',
      worksheetType: type,
      worksheetTitle: currentWorksheetTitle,
      answers,
      currentQIndex,
      elapsedSeconds: elapsedSecondsRef.current,
      savedAt: Date.now(),
    };

    worksheetRealtimeService.updateStudentPresence({
      student_id: studentId,
      student_name: studentName,
      student_email: studentEmail,
      classroom_id: resolvedClassroomId,
      worksheet_id: Number(id) || 1,
      worksheet_title: currentWorksheetTitle,
      worksheet_type: type as any,
      access_token: liveToken,
      current_question_index: currentQIndex,
      current_question_title: currentQuestion?.title,
      total_questions: questionsList.length,
      answered_count: answeredCount,
      status: 'active',
      live_draft: draftData,
    });
  }, [
    studentId,
    studentName,
    studentEmail,
    resolvedClassroomId,
    currentWorksheetTitle,
    currentQIndex,
    currentQuestion?.title,
    questionsList.length,
    answers,
    liveToken,
    type,
    id,
  ]);

  // Keep latest presence params in ref for true component unmount
  const latestPresenceRef = useRef({
    student_id: studentId,
    student_name: studentName,
    student_email: studentEmail,
    classroom_id: resolvedClassroomId,
    worksheet_id: Number(id) || 1,
    worksheet_title: currentWorksheetTitle,
    worksheet_type: type as any,
    access_token: liveToken,
    current_question_index: currentQIndex,
    current_question_title: currentQuestion?.title,
    total_questions: questionsList.length,
    answered_count: 0,
  });

  useEffect(() => {
    const answeredCount = Object.keys(answers).filter(
      (k) => answers[Number(k)]?.finalAnswer?.trim() || answers[Number(k)]?.steps?.trim()
    ).length;

    latestPresenceRef.current = {
      student_id: studentId,
      student_name: studentName,
      student_email: studentEmail,
      classroom_id: resolvedClassroomId,
      worksheet_id: Number(id) || 1,
      worksheet_title: currentWorksheetTitle,
      worksheet_type: type as any,
      access_token: liveToken,
      current_question_index: currentQIndex,
      current_question_title: currentQuestion?.title,
      total_questions: questionsList.length,
      answered_count: answeredCount,
    };
  }, [
    studentId,
    studentName,
    studentEmail,
    resolvedClassroomId,
    id,
    currentWorksheetTitle,
    type,
    liveToken,
    currentQIndex,
    currentQuestion?.title,
    questionsList.length,
    answers,
  ]);

  // Mark idle ONLY upon leaving worksheet completely
  useEffect(() => {
    return () => {
      const p = latestPresenceRef.current;
      worksheetRealtimeService.updateStudentPresence({
        ...p,
        status: 'idle',
      });
    };
  }, []);

  // Compute absolute pixel offset for semantic element anchor
  const computeAnchorPosition = (
    container: HTMLElement | null,
    event: {
      anchor_type?: 'math' | 'katex' | 'block' | 'table_cell' | 'container';
      anchor_index?: number;
      rel_x_pct?: number;
      rel_y_pct?: number;
      scroll_top_pct?: number;
      x_percent: number;
      y_percent: number;
    }
  ): { pixelLeft?: number; pixelTop?: number } => {
    if (!container) return {};

    let targetEl: HTMLElement | null = null;

    if (event.anchor_type === 'math' && typeof event.anchor_index === 'number') {
      targetEl = container.querySelector(`[data-laser-math="${event.anchor_index}"]`) as HTMLElement | null;
      if (!targetEl) {
        const allMath = Array.from(container.querySelectorAll('[data-laser-math]'));
        targetEl = (allMath[event.anchor_index] as HTMLElement) || null;
      }
    } else if (event.anchor_type === 'katex' && typeof event.anchor_index === 'number') {
      const allKatex = Array.from(container.querySelectorAll('.katex'));
      targetEl = (allKatex[event.anchor_index] as HTMLElement) || null;
    } else if (event.anchor_type === 'table_cell' && typeof event.anchor_index === 'number') {
      const allCells = Array.from(container.querySelectorAll('td, th'));
      targetEl = (allCells[event.anchor_index] as HTMLElement) || null;
    } else if (event.anchor_type === 'block' && typeof event.anchor_index === 'number') {
      targetEl = container.querySelector(`[data-laser-block="${event.anchor_index}"]`) as HTMLElement | null;
      if (!targetEl) {
        const allBlocks = Array.from(container.querySelectorAll('[data-laser-block]'));
        targetEl = (allBlocks[event.anchor_index] as HTMLElement) || null;
      }
    }

    if (targetEl) {
      const cRect = container.getBoundingClientRect();
      const tRect = targetEl.getBoundingClientRect();
      const relX = event.rel_x_pct ?? 50;
      const relY = event.rel_y_pct ?? 50;

      // Absolute pixel inside the container (including container.scrollTop & container.scrollLeft)
      const pixelLeft = (tRect.left - cRect.left) + (tRect.width * (relX / 100)) + container.scrollLeft;
      const pixelTop = (tRect.top - cRect.top) + (tRect.height * (relY / 100)) + container.scrollTop;

      // Smooth auto-scroll if element is offscreen in container or outside current viewport
      const viewportHeight = window.innerHeight;
      if (tRect.top < cRect.top || tRect.bottom > cRect.bottom || tRect.top < 80 || tRect.bottom > viewportHeight - 80) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      return { pixelLeft, pixelTop };
    }

    // High precision fallback using container bounding dimensions
    const cRect = container.getBoundingClientRect();
    if (cRect.width > 0 && cRect.height > 0) {
      const pixelLeft = (event.x_percent / 100) * cRect.width + container.scrollLeft;
      const pixelTop = (event.y_percent / 100) * cRect.height + container.scrollTop;

      // If fallback with scroll sync
      if (event.scroll_top_pct !== undefined) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll > 0) {
          const desiredScroll = (event.scroll_top_pct / 100) * maxScroll;
          if (Math.abs(container.scrollTop - desiredScroll) > 80) {
            container.scrollTo({ top: desiredScroll, behavior: 'smooth' });
          }
        }
      }

      return { pixelLeft, pixelTop };
    }

    return {};
  };

  // Subscribe to Realtime Classroom for Teacher Laser & Comments
  useEffect(() => {
    if (!liveToken) return;

    const unsubscribe = worksheetRealtimeService.subscribeToClassroom(liveToken, {
      onTeacherLaser: (event) => {
        if (event.question_id === currentQuestion?.id) {
          const container = event.target_zone === 'question_area'
            ? studentQuestionAreaRef.current
            : studentRenderAreaRef.current;

          const { pixelLeft, pixelTop } = event.is_laser_active
            ? computeAnchorPosition(container, event)
            : {};

          setLaserPointer({
            x: event.x_percent,
            y: event.y_percent,
            pixelLeft,
            pixelTop,
            canvas_logical_x: event.canvas_logical_x,
            canvas_logical_y: event.canvas_logical_y,
            active: event.is_laser_active,
            target_zone: event.target_zone || 'student_render',
            anchor_type: event.anchor_type,
            anchor_index: event.anchor_index,
            rel_x_pct: event.rel_x_pct,
            rel_y_pct: event.rel_y_pct,
            scroll_top_pct: event.scroll_top_pct,
          });
        }
      },
      onTeacherHighlight: (event) => {
        if (event.action === 'add' && event.highlight) {
          const newHl = event.highlight;
          setTeacherHighlights((prev) => {
            // Anti-stacking: filter out existing highlights with same id, matching text, or >30% overlap
            const filtered = prev.filter((existing) => {
              if (existing.id === newHl.id) return false;
              if (existing.question_id !== newHl.question_id || existing.target_zone !== newHl.target_zone) return true;
              if (
                existing.selected_text &&
                newHl.selected_text &&
                existing.selected_text.trim() === newHl.selected_text.trim()
              ) {
                return false;
              }
              const hasCollision = existing.rects.some((r1) =>
                newHl.rects.some((r2) => {
                  const xOverlap = Math.max(
                    0,
                    Math.min(r1.left_pct + r1.width_pct, r2.left_pct + r2.width_pct) - Math.max(r1.left_pct, r2.left_pct)
                  );
                  const yOverlap = Math.max(
                    0,
                    Math.min(r1.top_pct + r1.height_pct, r2.top_pct + r2.height_pct) - Math.max(r1.top_pct, r2.top_pct)
                  );
                  const overlapArea = xOverlap * yOverlap;
                  const minArea = Math.min(r1.width_pct * r1.height_pct, r2.width_pct * r2.height_pct);
                  return minArea > 0 && overlapArea / minArea > 0.3;
                })
              );
              return !hasCollision;
            });
            return [...filtered, newHl];
          });
        } else if (event.action === 'remove' && event.highlight_id) {
          setTeacherHighlights((prev) => prev.filter((h) => h.id !== event.highlight_id));
        } else if (event.action === 'clear') {
          setTeacherHighlights((prev) =>
            event.target_zone ? prev.filter((h) => h.target_zone !== event.target_zone) : []
          );
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

  // Recompute laser beacon on student window resize
  useEffect(() => {
    if (!laserPointer.active) return;
    const handleResize = () => {
      const container = laserPointer.target_zone === 'question_area'
        ? studentQuestionAreaRef.current
        : studentRenderAreaRef.current;
      const { pixelLeft, pixelTop } = computeAnchorPosition(container, {
        anchor_type: laserPointer.anchor_type,
        anchor_index: laserPointer.anchor_index,
        rel_x_pct: laserPointer.rel_x_pct,
        rel_y_pct: laserPointer.rel_y_pct,
        scroll_top_pct: laserPointer.scroll_top_pct,
        x_percent: laserPointer.x,
        y_percent: laserPointer.y,
      });
      if (pixelLeft !== undefined && pixelTop !== undefined) {
        setLaserPointer((prev) => ({ ...prev, pixelLeft, pixelTop }));
      }
    };
    window.addEventListener('resize', handleResize);
  }, [
    laserPointer.active,
    laserPointer.target_zone,
    laserPointer.anchor_type,
    laserPointer.anchor_index,
    laserPointer.rel_x_pct,
    laserPointer.rel_y_pct,
    laserPointer.scroll_top_pct,
    laserPointer.x,
    laserPointer.y,
  ]);

  // Working Time Stopwatch (Menghitung durasi pengerjaan siswa)
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const elapsedSecondsRef = useRef(0);

  useEffect(() => {
    const stopwatch = setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        elapsedSecondsRef.current = next;
        return next;
      });
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

  // Online Cloud & Local Storage Draft Persistence (Auto-Save, Manual Save, Auto-Restore)
  const storageDraftKey = useMemo(() => {
    return `osn_ws_draft_${studentId}_${type}_${id || '1'}`;
  }, [studentId, type, id]);

  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const [isSaveSuccess, setIsSaveSuccess] = useState(false);
  const [isCloudSynced, setIsCloudSynced] = useState(false);
  const [showRestoreNotice, setShowRestoreNotice] = useState(false);

  const answersRef = useRef(answers);
  answersRef.current = answers;
  const currentQIndexRef = useRef(currentQIndex);
  currentQIndexRef.current = currentQIndex;
  const localSavedAtRef = useRef<number>(0);
  const autoSaveDebounceRef = useRef<any>(null);

  // Save progress helper (Online Cloud Supabase + Local Cache)
  const saveProgress = (currentAnswers = answersRef.current, idx = currentQIndexRef.current) => {
    try {
      const draftData = {
        studentId,
        worksheetId: id || '1',
        worksheetType: type,
        worksheetTitle: currentWorksheetTitle,
        answers: currentAnswers,
        currentQIndex: idx,
        elapsedSeconds: elapsedSecondsRef.current,
        savedAt: Date.now(),
      };

      // 1. Simpan ke Local Storage (Resilient offline buffer)
      localStorage.setItem(storageDraftKey, JSON.stringify(draftData));
      localSavedAtRef.current = draftData.savedAt;

      // Sinkronkan ke registry sesi live lokal agar tab monitor guru di browser yang sama langsung menerima draft
      try {
        const LOCAL_SESSIONS_KEY = 'osn_live_sessions_registry_v1';
        const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
        if (allSessionsRaw && liveToken) {
          const allSessions = JSON.parse(allSessionsRaw);
          const sKey = `${liveToken.trim().toUpperCase()}_${studentId}`;
          if (allSessions[sKey]) {
            allSessions[sKey].live_draft = draftData;
            allSessions[sKey].current_question_index = idx;
            allSessions[sKey].last_active_at = new Date().toISOString();
            allSessions[`student_presence_${studentId}`] = allSessions[sKey];
            localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(allSessions));
          }
        }
      } catch {}

      const timeStr = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLastSavedTime(timeStr);

      // 2. Sinkronkan secara online ke Supabase Cloud (worksheet_live_sessions)
      const supabase = getSupabaseClient();
      if (supabase && liveToken) {
        const wId = Number(id) && !isNaN(Number(id)) ? Number(id) : null;
        supabase
          .from('worksheet_live_sessions')
          .upsert(
            {
              access_token: liveToken,
              student_id: studentId,
              student_name: studentName,
              worksheet_id: wId,
              current_question_index: idx,
              status: 'active',
              live_draft: draftData,
              last_active_at: new Date().toISOString(),
            },
            { onConflict: 'access_token,student_id' }
          )
          .then(
            ({ error }: any) => {
              if (!error) {
                setIsCloudSynced(true);
              }
            },
            (err: any) => {
              console.warn('Gagal sinkronisasi online ke Supabase:', err);
            }
          );
      }

      return true;
    } catch (e) {
      console.warn('Gagal menyimpan draft worksheet:', e);
      return false;
    }
  };

  const handleManualSave = () => {
    const ok = saveProgress();
    if (ok) {
      setIsSaveSuccess(true);
      setTimeout(() => setIsSaveSuccess(false), 2500);
    }
  };

  // Auto-restore draft from Local Storage & Supabase Online Cloud
  useEffect(() => {
    if (!storageDraftKey) return;

    // 1. Baca langsung dari Local Storage untuk respon instan
    try {
      const rawDraft = localStorage.getItem(storageDraftKey);
      if (rawDraft) {
        const parsed = JSON.parse(rawDraft);
        if (parsed && typeof parsed === 'object') {
          let hasData = false;
          if (parsed.answers && Object.keys(parsed.answers).length > 0) {
            setAnswers(parsed.answers);
            hasData = true;
          }
          if (typeof parsed.elapsedSeconds === 'number' && parsed.elapsedSeconds > 0) {
            setElapsedSeconds(parsed.elapsedSeconds);
            elapsedSecondsRef.current = parsed.elapsedSeconds;
          }
          if (typeof parsed.currentQIndex === 'number' && parsed.currentQIndex >= 0) {
            setCurrentQIndex(parsed.currentQIndex);
          }
          if (parsed.savedAt) {
            localSavedAtRef.current = parsed.savedAt;
            setLastSavedTime(
              new Date(parsed.savedAt).toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })
            );
          }
          if (hasData) {
            setShowRestoreNotice(true);
            // Segera sinkronkan draft terpulihkan ke sesi live lokal dan Supabase agar guru langsung melihat progres
            saveProgress(parsed.answers, parsed.currentQIndex ?? 0);
          }
        }
      }
    } catch (e) {
      console.warn('Gagal memulihkan draft worksheet dari local storage:', e);
    }

    // 2. Sinkronkan dari Supabase Cloud (mengambil progres pengerjaan online jika ada yang lebih baru)
    const supabase = getSupabaseClient();
    if (supabase && liveToken) {
      supabase
        .from('worksheet_live_sessions')
        .select('*')
        .eq('access_token', liveToken)
        .eq('student_id', studentId)
        .maybeSingle()
        .then(
          ({ data, error }: any) => {
            if (!error && data && data.live_draft && typeof data.live_draft === 'object') {
              const cloudDraft = data.live_draft;
              const cloudSavedAt = cloudDraft.savedAt || 0;
              if (cloudSavedAt >= localSavedAtRef.current) {
                let hasCloudData = false;
                if (cloudDraft.answers && Object.keys(cloudDraft.answers).length > 0) {
                  setAnswers(cloudDraft.answers);
                  hasCloudData = true;
                }
                if (typeof cloudDraft.elapsedSeconds === 'number' && cloudDraft.elapsedSeconds > 0) {
                  setElapsedSeconds(cloudDraft.elapsedSeconds);
                  elapsedSecondsRef.current = cloudDraft.elapsedSeconds;
                }
                if (typeof cloudDraft.currentQIndex === 'number' && cloudDraft.currentQIndex >= 0) {
                  setCurrentQIndex(cloudDraft.currentQIndex);
                }
                if (cloudDraft.savedAt) {
                  setLastSavedTime(
                    new Date(cloudDraft.savedAt).toLocaleTimeString('id-ID', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })
                  );
                }
                setIsCloudSynced(true);
                if (hasCloudData) {
                  setShowRestoreNotice(true);
                  // Segera sinkronkan draft cloud terpulihkan ke local session registry
                  saveProgress(cloudDraft.answers, cloudDraft.currentQIndex ?? 0);
                }
              }
            }
          },
          (err: any) => {
            console.warn('Gagal memuat draft dari cloud Supabase:', err);
          }
        );
    }
  }, [storageDraftKey, liveToken, studentId]);

  // Periodic Auto-Save interval every 15s if answers exist
  useEffect(() => {
    const interval = setInterval(() => {
      const hasContent = Object.values(answersRef.current).some(
        (a) => a?.steps?.trim() || a?.finalAnswer?.trim()
      );
      if (hasContent) {
        saveProgress();
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [storageDraftKey, currentWorksheetTitle]);

  // Auto-save on page exit / refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveProgress();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [storageDraftKey, currentWorksheetTitle]);

  const currentStepValue = answers[currentQIndex]?.steps || '';
  const currentFinalAnswer = answers[currentQIndex]?.finalAnswer || '';

  const handleStepsChange = (val: string) => {
    const updated = {
      ...answers,
      [currentQIndex]: {
        ...answers[currentQIndex],
        steps: val,
        finalAnswer: answers[currentQIndex]?.finalAnswer || '',
      },
    };
    setAnswers(updated);

    // Autosave progress to localStorage (debounced 750ms)
    if (autoSaveDebounceRef.current) clearTimeout(autoSaveDebounceRef.current);
    autoSaveDebounceRef.current = setTimeout(() => {
      saveProgress(updated);
    }, 750);

    // Broadcast live keystrokes to teacher in real time
    if (liveToken) {
      if (typingDebounceRef.current) clearTimeout(typingDebounceRef.current);
      typingDebounceRef.current = setTimeout(() => {
        worksheetRealtimeService.sendStudentKeystroke({
          access_token: liveToken,
          student_id: studentId,
          student_name: studentName,
          student_email: studentEmail,
          classroom_id: resolvedClassroomId,
          worksheet_title: currentWorksheetTitle,
          question_id: currentQuestion?.id || currentQIndex,
          question_index: currentQIndex,
          current_question_title: currentQuestion?.title,
          steps: val,
          finalAnswer: answers[currentQIndex]?.finalAnswer || '',
          timestamp: Date.now(),
        });
      }, 150);
    }
  };

  const handleFinalAnswerChange = (val: string) => {
    const updated = {
      ...answers,
      [currentQIndex]: {
        steps: answers[currentQIndex]?.steps || '',
        finalAnswer: val,
      },
    };
    setAnswers(updated);

    // Autosave progress to localStorage (debounced 750ms)
    if (autoSaveDebounceRef.current) clearTimeout(autoSaveDebounceRef.current);
    autoSaveDebounceRef.current = setTimeout(() => {
      saveProgress(updated);
    }, 750);

    if (liveToken) {
      if (typingDebounceRef.current) clearTimeout(typingDebounceRef.current);
      typingDebounceRef.current = setTimeout(() => {
        worksheetRealtimeService.sendStudentKeystroke({
          access_token: liveToken,
          student_id: studentId,
          student_name: studentName,
          student_email: studentEmail,
          classroom_id: resolvedClassroomId,
          worksheet_title: currentWorksheetTitle,
          question_id: currentQuestion?.id || currentQIndex,
          question_index: currentQIndex,
          current_question_title: currentQuestion?.title,
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
        isZenMode
          ? 'fixed inset-0 z-50 bg-white overflow-y-auto'
          : 'h-full w-full max-w-7xl mx-auto overflow-hidden border-x border-slate-200/80 shadow-xs'
      }`}
    >
      {/* Top Header Bar */}
      <div className="bg-white border-b border-slate-200 px-3 sm:px-6 py-2.5 flex flex-col gap-2 shadow-2xs shrink-0">
        {/* Row 1: Nav, Topic Title, & Question Stepper */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {!isZenMode && (
              <button
                onClick={() => navigate('/worksheet')}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0 cursor-pointer"
                title="Kembali ke Daftar Worksheet Siswa"
              >
                <ArrowLeft className="w-4 h-4 text-slate-600" />
                <span className="hidden md:inline">Daftar Worksheet</span>
              </button>
            )}

            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded uppercase font-mono shrink-0">
                {liveToken
                  ? 'Live Sesi Guru'
                  : type === 'static_module'
                  ? 'Silabus Drill'
                  : 'Tugas Guru'}
              </span>
              {liveToken && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-bold font-mono shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
                  <span>{liveToken}</span>
                </span>
              )}
              <h1 className="text-xs sm:text-sm font-bold text-slate-900 font-display truncate max-w-[180px] lg:max-w-xs hidden sm:inline" title={`Topik #${currentQuestion.pillar_number}: ${currentQuestion.subtopic}`}>
                T#{currentQuestion.pillar_number}: {currentQuestion.subtopic}
              </h1>
            </div>
          </div>

          {/* Question Stepper Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs py-0.5 min-w-0 max-w-xs sm:max-w-sm md:max-w-md">
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
                    if (type === 'static_module') {
                      navigate(`/worksheet/${type}/${q.pillar_number || q.id}`, { replace: true });
                    }
                  }}
                  className={`px-2.5 py-1 rounded-lg font-semibold text-xs transition-all flex items-center gap-1 shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-sky-500 text-white shadow-2xs font-bold'
                      : isAnswered
                      ? 'bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                  title={`Topik #${q.pillar_number}: ${q.subtopic}`}
                >
                  <span className="text-[10px] opacity-75 font-mono">T{q.pillar_number}</span>
                  <span>#{idx + 1}</span>
                  {isAnswered && <Check className="w-3 h-3 text-sky-600" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left: Scale Preset & Stopwatch | Right: Simpan, Mr, Tabel, Mode Layar Penuh */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100/80">
          <div className="flex items-center gap-2">
            <ScalePresetToggle scale={canvasScale} onChange={setCanvasScale} size="sm" />

            <div
              className="flex items-center gap-1 px-2 py-1 bg-sky-50 border border-sky-200 rounded-lg text-xs font-mono font-bold text-sky-800 shadow-2xs"
              title="Stopwatch Waktu Pengerjaan Siswa"
            >
              <Clock className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>{formatStopwatch(elapsedSeconds)}</span>
            </div>
          </div>

          {/* Sisi Kanan: Tombol Simpan, Mr, Tabel, dan Mode Layar Penuh */}
          <div className="flex items-center gap-1.5 ml-auto">
            {/* Manual Save Progress Button */}
            <button
              type="button"
              onClick={handleManualSave}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all shadow-2xs active:scale-95 border cursor-pointer ${
                isSaveSuccess
                  ? 'bg-emerald-500 text-white border-emerald-600'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
              title="Simpan Progress Pengerjaan Lembar Kerja Online ke Cloud"
            >
              {isSaveSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Tersimpan Online!</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5 text-sky-600" />
                  <span className="hidden sm:inline">Simpan</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMolarMassOpen(true)}
              className="inline-flex items-center gap-1 px-2 py-1 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-300 rounded-lg text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
              title="Kalkulator Massa Molar Relatif (Mr)"
            >
              <Scale className="w-3.5 h-3.5 text-sky-600" />
              <span className="hidden lg:inline">Mr</span>
            </button>

            <button
              type="button"
              onClick={() => setIsPeriodicOpen(true)}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-300 rounded-lg text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
              title="Buka Tabel Periodik & Tetapan Fisika"
            >
              <Table className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden lg:inline">Tabel</span>
            </button>

            <button
              type="button"
              onClick={() => setIsZenMode(!isZenMode)}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
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
      </div>

      {/* Restored Draft Notification Banner */}
      {showRestoreNotice && (
        <div className="bg-sky-50 border-b border-sky-200 px-4 py-2 flex items-center justify-between text-xs text-sky-900 animate-in fade-in shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              <strong>Draft Dipulihkan:</strong> Progress lembar kerja Anda sebelumnya berhasil dimuat kembali
              {lastSavedTime ? ` (terakhir disimpan pukul ${lastSavedTime})` : ''}.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowRestoreNotice(false)}
            className="p-1 text-sky-600 hover:text-sky-900 hover:bg-sky-100 rounded transition-colors"
            title="Tutup pemberitahuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Synchronized Side-by-Side Dual-Panel Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-w-0">
        {/* PANEL KIRI: Naskah Soal & Informasi (Lebar 38% di Desktop - Independent Scroll) */}
        <div className="w-full lg:w-[40%] xl:w-[38%] h-full bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col overflow-y-auto p-4 sm:p-5 space-y-4 shrink-0 min-w-0">
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

          {/* Question Text with KaTeX and Virtual Teacher Laser & Highlight Overlay (Tinggi Diperbesar 3x ke Bawah) */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 shadow-2xs overflow-x-auto overflow-y-auto min-h-[500px] sm:min-h-[560px] max-h-[78vh] flex flex-col">
            <ScaledDocumentCanvas
              baseWidth={540}
              scale={canvasScale}
              highlights={teacherHighlights.filter(
                (h) => h.question_id === currentQuestion.id && h.target_zone === 'question_area'
              )}
              activeLaser={
                laserPointer.active && laserPointer.target_zone === 'question_area'
                  ? {
                      x_percent: laserPointer.x,
                      y_percent: laserPointer.y,
                      logical_x: laserPointer.canvas_logical_x,
                      logical_y: laserPointer.canvas_logical_y,
                      label: '🔴 Guru menunjuk soal',
                    }
                  : null
              }
              className="p-4 sm:p-5 flex-1 min-h-[480px]"
            >
              <KaTeXRenderer content={currentQuestion.question_text} />
            </ScaledDocumentCanvas>
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

          {/* Tags Konsep Interaktif Terhubung ke Database Materi (Membuka Tab Baru) */}
          {currentQuestion.tags && (
            <div className="p-3 bg-sky-50/50 border border-sky-200/70 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sky-900 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  <span>Pelajari Konsep Terkait (Database Materi):</span>
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Klik untuk buka di tab baru</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {currentQuestion.tags.map((t) => {
                  const match = findConceptByTag(t);
                  const targetTopic = match ? match.material.topic_number : currentQuestion.pillar_number;
                  const targetTag = match ? match.block.tag : t;

                  return (
                    <a
                      key={t}
                      href={`/materi/${targetTopic}?tag=${encodeURIComponent(targetTag)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-sky-100 text-sky-800 text-[11px] font-mono font-semibold rounded-lg border border-sky-200 transition-all shadow-2xs hover:scale-102"
                      title={`Buka pembahasan konsep #${t} di tab baru (Topik ${targetTopic})`}
                    >
                      <span>#{t}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-sky-500" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* PANEL KANAN: Tempat Pengerjaan & Live Preview (Lebar 62% di Desktop - Independent Scroll) */}
        <div className="w-full lg:w-[60%] xl:w-[62%] h-full bg-slate-50 flex flex-col overflow-y-auto min-w-0">
          {/* Sub-Header: Informasi Lembar Kerja Siswa & Status Simpan */}
          <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-slate-800 font-bold flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-sky-600" />
                <span>Lembar Kerja Siswa</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {lastSavedTime
                    ? `Tersimpan Online (${lastSavedTime})`
                    : 'Draft tersimpan otomatis online'}
                </span>
                {isCloudSynced && (
                  <span className="inline-flex items-center gap-0.5 text-emerald-600 font-mono text-[9px] bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">
                    <CloudCheck className="w-2.5 h-2.5" />
                    <span>Cloud Sync</span>
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* ChemToolbar directly attached with Kerangka 4 Langkah OSN sejajar dengan Template Cepat OSN */}
          <ChemToolbar
            textareaRef={textareaRef}
            onValueChange={handleStepsChange}
            onOpenPeriodicTable={() => setIsPeriodicOpen(true)}
            onOpenMolarMass={() => setIsMolarMassOpen(true)}
            onOpenScaffoldGuide={() => setIsScaffoldGuideOpen((prev) => !prev)}
            isScaffoldGuideOpen={isScaffoldGuideOpen}
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
                  {/* Virtual Laser Pointer Beacon for Editor */}
                  {laserPointer.active && (laserPointer.target_zone === 'student_editor') && (
                    <div
                      className="pointer-events-none absolute z-30 transition-all duration-75 ease-out"
                      style={{
                        left:
                          laserPointer.pixelLeft !== undefined
                            ? `${laserPointer.pixelLeft}px`
                            : `${laserPointer.x}%`,
                        top:
                          laserPointer.pixelTop !== undefined
                            ? `${laserPointer.pixelTop}px`
                            : `${laserPointer.y}%`,
                      }}
                    >
                      <div className="relative pointer-events-none select-none">
                        <div className="absolute -top-2 -left-2 w-4 h-4 flex items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-600 shadow-[0_0_12px_#e11d48]"></span>
                        </div>
                        <div className="absolute left-3 -top-3.5 px-2 py-0.5 rounded-full bg-rose-950/90 text-white text-[9px] font-bold font-mono whitespace-nowrap shadow-md border border-rose-500/40 animate-pulse select-none">
                          🔴 Guru menunjuk editor
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toast if teacher points to KaTeX preview but student is in editor-only mode */}
                  {laserPointer.active && laserPointer.target_zone === 'student_render' && workspaceMode === 'editor' && (
                    <div className="p-2 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs flex items-center justify-between animate-pulse">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>Guru sedang menunjuk hasil Live Render KaTeX Anda.</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setWorkspaceMode('split')}
                        className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[10px] transition-colors"
                      >
                        Buka Split Preview
                      </button>
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

              {/* Live KaTeX Preview with Virtual Laser Pointer Overlay */}
              {(workspaceMode === 'split' || workspaceMode === 'preview') && (
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-800">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-600" />
                      <span>Live Render KaTeX (Hasil Siswa):</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Real-time</span>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-x-auto overflow-y-auto max-h-[62vh] sm:max-h-[70vh]">
                    <ScaledDocumentCanvas
                      baseWidth={540}
                      scale={canvasScale}
                      highlights={teacherHighlights.filter(
                        (h) => h.question_id === currentQuestion.id && h.target_zone === 'student_render'
                      )}
                      activeLaser={
                        laserPointer.active && laserPointer.target_zone === 'student_render'
                          ? {
                              x_percent: laserPointer.x,
                              y_percent: laserPointer.y,
                              logical_x: laserPointer.canvas_logical_x,
                              logical_y: laserPointer.canvas_logical_y,
                              label: '🔴 Guru menunjuk pengerjaan',
                            }
                          : null
                      }
                      className="p-4"
                    >
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
                    </ScaledDocumentCanvas>
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

            {/* Action Bar: Prev / Next & Save Progress & AI Evaluation Trigger */}
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

              {/* Progress Stage Text, Manual Save Button, and AI Evaluate Button */}
              <div className="flex items-center gap-2.5">
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
                  type="button"
                  onClick={handleManualSave}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer"
                  title="Simpan lembar kerja ke cloud Supabase agar progres tersimpan aman"
                >
                  {isSaveSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Tersimpan Online!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 text-sky-600" />
                      <span>Simpan Progress</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleEvaluate}
                  disabled={isEvaluating || !currentStepValue.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-50 active:scale-98 cursor-pointer"
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
