import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { worksheetRealtimeService, extractStudentAnswer, countStudentAnswered } from '../../services/worksheetRealtimeService';
import { questionBankService } from '../../services/questionBankService';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { ScaledDocumentCanvas, type ScaledCanvasMouseMoveEvent } from '../../components/worksheet/ScaledDocumentCanvas';
import { ScalePresetToggle, type CanvasScale } from '../../components/worksheet/ScalePresetToggle';
import { PILLARS_DATA, BENCHMARK_QUESTIONS } from '../../data/syllabusData';
import { getSupabaseClient } from '../../lib/supabaseClient';
import type {
  Worksheet,
  WorksheetLiveSession,
  LiveKeystrokePayload,
  LaserPointerEvent,
  TeacherLiveComment,
  Question,
  LiveHighlightItem,
  HighlightColor,
  HighlightRect,
  LiveHighlightEvent,
} from '../../types/database';
import {
  ArrowLeft,
  Users,
  Copy,
  Check,
  Radio,
  Eye,
  Crosshair,
  MessageSquare,
  Sparkles,
  Award,
  Clock,
  Send,
  X,
  RefreshCw,
  HelpCircle,
  Maximize2,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Info,
  Highlighter,
  Trash2,
} from 'lucide-react';

export const LiveClassroomDashboard: React.FC = () => {
  const { token = '' } = useParams<{ token: string }>();
  const [searchParams] = useSearchParams();
  const queryStudentId = searchParams.get('studentId');
  const navigate = useNavigate();

  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sessions, setSessions] = useState<WorksheetLiveSession[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(queryStudentId || null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  // Live state streams per student
  const [liveTypingMap, setLiveTypingMap] = useState<Record<string, LiveKeystrokePayload>>({});
  const [isLaserEnabled, setIsLaserEnabled] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [copiedToken, setCopiedToken] = useState(false);
  const [isSendingComment, setIsSendingComment] = useState(false);

  // Canvas Scale Presets (75%, 100%, 125%) & Highlight states
  const [canvasScale, setCanvasScale] = useState<CanvasScale>(1.0);
  const [activeHighlightColor, setActiveHighlightColor] = useState<HighlightColor>('yellow');
  const [highlights, setHighlights] = useState<LiveHighlightItem[]>([]);

  // Multi-zone laser pointer container refs and local teacher cursor state
  const questionAreaRef = useRef<HTMLDivElement | null>(null);
  const studentRenderAreaRef = useRef<HTMLDivElement | null>(null);
  const [teacherLocalLaser, setTeacherLocalLaser] = useState<{
    zone: 'question_area' | 'student_render';
    x: number;
    y: number;
    logicalX?: number;
    logicalY?: number;
  } | null>(null);

  const cleanToken = token.trim().toUpperCase();

  // 1. Initial Load: Worksheet & Questions
  const fetchWorksheetAndSessions = useCallback(async () => {
      // Ambil worksheet berdasarkan token
      const allRes = await questionBankService.getQuestions();
      const allSavedWorksheets = questionBankService.getSavedWorksheets();
      const matched = allSavedWorksheets.find((w) => w.access_token?.toUpperCase() === cleanToken);

      let dynamicTitle = `Sesi Kelas Live [${cleanToken}]`;
      let qs: Question[] = [];

      if (matched) {
        setWorksheet(matched);
        if ((matched as any).selected_question_ids) {
          const qIds = (matched as any).selected_question_ids as number[];
          qs = qIds
            .map((id) => (allRes.questions || []).find((q) => q.id === id) || BENCHMARK_QUESTIONS.find((q) => q.id === id))
            .filter(Boolean) as Question[];
        } else {
          qs = allRes.questions && allRes.questions.length > 0 ? allRes.questions : BENCHMARK_QUESTIONS;
        }
      } else if (cleanToken.startsWith('WS-')) {
        const pNum = parseInt(cleanToken.replace('WS-', ''), 10);
        const pillar = PILLARS_DATA.find((p) => p.pillar_number === pNum || p.id === pNum);
        if (pillar) {
          dynamicTitle = `Topik ${pillar.pillar_number}: ${pillar.title}`;
        }
        setWorksheet({
          id: pNum || 999,
          type: 'static_module',
          title: dynamicTitle,
          access_token: cleanToken,
          time_limit_minutes: 90,
          pass_score: 75,
          is_published: true,
        });

        // Muat seluruh daftar soal benchmark agar urutan dan indeks cocok 1-to-1 dengan lembar kerja siswa
        qs = BENCHMARK_QUESTIONS;

        // Cari posisi awal soal yang cocok dengan topik ini
        const pIdx = BENCHMARK_QUESTIONS.findIndex(
          (q) => q.pillar_number === pNum || q.module_id === pNum || q.id === pNum
        );
        if (pIdx !== -1) {
          setSelectedQuestionIndex(pIdx);
        }
      } else {
        // Fallback default mock
        setWorksheet({
          id: 999,
          type: 'teacher_assignment',
          title: dynamicTitle,
          access_token: cleanToken,
          time_limit_minutes: 90,
          pass_score: 75,
          is_published: true,
        });
        qs = allRes.questions && allRes.questions.length > 0 ? allRes.questions : BENCHMARK_QUESTIONS;
      }

      setQuestions(qs);

      // Ambil sesi murid aktif (gabungkan data lokal dan Supabase Cloud)
      let activeSessions = await worksheetRealtimeService.getActiveSessions(cleanToken);
      if (activeSessions.length === 0) {
        const globalPresence = worksheetRealtimeService.getClassroomActiveStudents();
        const foundInGlobal = globalPresence.filter(
          (s) => s.access_token?.toUpperCase() === cleanToken
        );
        if (foundInGlobal.length > 0) {
          activeSessions = foundInGlobal;
        }
      }

      // Selalu sinkronkan dengan Supabase Cloud agar live_draft terbaru (beserta seluruh langkah soal) terambil
      const supabase = getSupabaseClient();
      if (supabase) {
        try {
          let query = supabase.from('worksheet_live_sessions').select('*').eq('access_token', cleanToken);
          if (queryStudentId) {
            query = query.eq('student_id', queryStudentId);
          }
          const { data } = await query;
          if (data && data.length > 0) {
            const cloudSessions = data.map((d: any) => ({
              worksheet_id: d.worksheet_id,
              worksheet_title: d.worksheet_title || (d.live_draft && (d.live_draft as any).worksheetTitle) || dynamicTitle,
              access_token: d.access_token || cleanToken,
              student_id: d.student_id,
              student_name: d.student_name,
              current_question_index:
                d.current_question_index ?? (d.live_draft && (d.live_draft as any).currentQIndex) ?? 0,
              status: d.status || 'active',
              live_draft: d.live_draft || {},
              last_active_at: d.last_active_at || new Date().toISOString(),
              created_at: d.created_at || new Date().toISOString(),
            }));

            // Gabungkan sesi: utamakan live_draft yang memuat .answers lengkap
            const sessionMap = new Map<string, WorksheetLiveSession>();
            activeSessions.forEach((s) => sessionMap.set(s.student_id, s));
            cloudSessions.forEach((cs: any) => {
              const existing = sessionMap.get(cs.student_id);
              if (existing) {
                const cloudAnswersCount = countStudentAnswered(cs.live_draft);
                const localAnswersCount = countStudentAnswered(existing.live_draft);
                const chosenDraft = cloudAnswersCount >= localAnswersCount ? cs.live_draft : existing.live_draft;
                sessionMap.set(cs.student_id, {
                  ...existing,
                  ...cs,
                  live_draft: chosenDraft,
                  current_question_index:
                    cs.current_question_index ?? existing.current_question_index ?? 0,
                });
              } else {
                sessionMap.set(cs.student_id, cs);
              }
            });
            activeSessions = Array.from(sessionMap.values());
          }
        } catch (err) {
          console.warn('Gagal memuat live_draft Supabase di dashboard guru:', err);
        }
      }

    setSessions(activeSessions);
    if (queryStudentId) {
      setSelectedStudentId(queryStudentId);
    } else if (activeSessions.length > 0 && !selectedStudentId) {
      setSelectedStudentId(activeSessions[0].student_id);
    }
  }, [cleanToken, queryStudentId, selectedStudentId]);

  useEffect(() => {
    fetchWorksheetAndSessions();
  }, [fetchWorksheetAndSessions]);

  // 2. Realtime Listener: Keystrokes, Laser, Comments
  useEffect(() => {
    if (!cleanToken) return;

    const unsubscribe = worksheetRealtimeService.subscribeToClassroom(cleanToken, {
      onStudentTyping: (payload) => {
        setLiveTypingMap((prev) => ({
          ...prev,
          [payload.student_id]: payload,
        }));

        // Perbarui sesi murid di list jika ada perubahan
        setSessions((prev) => {
          const idx = prev.findIndex((s) => s.student_id === payload.student_id);
          const newAnswerEntry = {
            steps: payload.steps,
            finalAnswer: payload.finalAnswer,
          };
          if (idx !== -1) {
            const updated = [...prev];
            const existingDraft = updated[idx].live_draft || {};
            const existingAnswers = (existingDraft as any).answers || existingDraft;
            updated[idx] = {
              ...updated[idx],
              current_question_index: payload.question_index,
              last_active_at: new Date().toISOString(),
              live_draft: {
                ...existingDraft,
                answers: {
                  ...existingAnswers,
                  [payload.question_index]: newAnswerEntry,
                  [payload.question_id]: newAnswerEntry,
                },
                [payload.question_id]: newAnswerEntry,
                [payload.question_index]: newAnswerEntry,
              },
            };
            return updated;
          } else {
            // Murid baru pertama kali mengetik
            return [
              ...prev,
              {
                worksheet_id: 0,
                access_token: cleanToken,
                student_id: payload.student_id,
                student_name: payload.student_name,
                current_question_index: payload.question_index,
                status: 'active',
                last_active_at: new Date().toISOString(),
                live_draft: {
                  answers: {
                    [payload.question_index]: newAnswerEntry,
                    [payload.question_id]: newAnswerEntry,
                  },
                  [payload.question_id]: newAnswerEntry,
                  [payload.question_index]: newAnswerEntry,
                },
              },
            ];
          }
        });
      },
      onStudentPresence: (updatedSessions) => {
        setSessions((prev) => {
          // Gabungkan pembaruan presence siswa dengan memilih draft yang memiliki jawaban terisi
          const merged = [...prev];
          updatedSessions.forEach((us) => {
            const idx = merged.findIndex((m) => m.student_id === us.student_id);
            if (idx !== -1) {
              const usCount = countStudentAnswered(us.live_draft);
              const prevCount = countStudentAnswered(merged[idx].live_draft);
              const chosenDraft = usCount >= prevCount ? us.live_draft : merged[idx].live_draft;
              merged[idx] = {
                ...merged[idx],
                ...us,
                live_draft: chosenDraft || merged[idx].live_draft,
                current_question_index:
                  typeof us.current_question_index === 'number'
                    ? us.current_question_index
                    : merged[idx].current_question_index,
              };
            } else {
              merged.push(us);
            }
          });
          return merged;
        });
      },
      onTeacherHighlight: (event) => {
        if (event.action === 'add' && event.highlight) {
          setHighlights((prev) => {
            if (prev.some((h) => h.id === event.highlight!.id)) return prev;
            return [...prev, event.highlight!];
          });
        } else if (event.action === 'remove' && event.highlight_id) {
          setHighlights((prev) => prev.filter((h) => h.id !== event.highlight_id));
        } else if (event.action === 'clear') {
          setHighlights((prev) =>
            event.target_zone ? prev.filter((h) => h.target_zone !== event.target_zone) : []
          );
        }
      },
    });

    return () => unsubscribe();
  }, [cleanToken]);

  // Selected student object
  const activeStudent = useMemo(() => {
    return sessions.find((s) => s.student_id === selectedStudentId) || sessions[0] || null;
  }, [sessions, selectedStudentId]);

  const currentQuestion = questions[selectedQuestionIndex] || questions[0];

  // Auto-sync question index when the selected student moves to another question
  useEffect(() => {
    if (activeStudent && typeof activeStudent.current_question_index === 'number') {
      if (questions[activeStudent.current_question_index]) {
        setSelectedQuestionIndex(activeStudent.current_question_index);
      }
    }
  }, [activeStudent?.student_id, activeStudent?.current_question_index]);

  // Current student typed answer for this question (support live broadcast + online cloud draft on refresh)
  const studentAnswer = useMemo(() => {
    if (!activeStudent) return { steps: '', finalAnswer: '' };
    const fromLiveMap = liveTypingMap[activeStudent.student_id];
    if (
      fromLiveMap &&
      (fromLiveMap.question_id === currentQuestion?.id ||
        fromLiveMap.question_index === selectedQuestionIndex)
    ) {
      return { steps: fromLiveMap.steps, finalAnswer: fromLiveMap.finalAnswer };
    }
    return extractStudentAnswer(activeStudent.live_draft, selectedQuestionIndex, currentQuestion?.id);
  }, [activeStudent, liveTypingMap, currentQuestion, selectedQuestionIndex]);

  // Semantic Anchor extraction for responsive laser pointer accuracy
  const extractSemanticAnchor = (
    container: HTMLElement,
    clientX: number,
    clientY: number
  ): {
    anchor_type: 'math' | 'katex' | 'block' | 'table_cell' | 'container';
    anchor_index?: number;
    rel_x_pct: number;
    rel_y_pct: number;
    scroll_top_pct: number;
    x_percent: number;
    y_percent: number;
  } => {
    const containerRect = container.getBoundingClientRect();
    const rawX = Math.max(0, Math.min(100, ((clientX - containerRect.left) / containerRect.width) * 100));
    const rawY = Math.max(0, Math.min(100, ((clientY - containerRect.top) / containerRect.height) * 100));

    const maxScroll = container.scrollHeight - container.clientHeight;
    const scrollTopPct = maxScroll > 0 ? (container.scrollTop / maxScroll) * 100 : 0;

    // Detect target element under mouse
    let target = document.elementFromPoint(clientX, clientY) as HTMLElement | null;

    // If target is container itself or not inside a semantic anchor, find closest child block or math within 35px
    if (!target || target === container || !container.contains(target)) {
      const candidates = Array.from(
        container.querySelectorAll('[data-laser-math], [data-laser-block], .katex, td, th')
      );
      let closestEl: HTMLElement | null = null;
      let minDistance = Infinity;
      for (const el of candidates) {
        const rect = el.getBoundingClientRect();
        const dx = Math.max(rect.left - clientX, 0, clientX - rect.right);
        const dy = Math.max(rect.top - clientY, 0, clientY - rect.bottom);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDistance) {
          minDistance = dist;
          closestEl = el as HTMLElement;
        }
      }
      if (closestEl && minDistance <= 35) {
        target = closestEl;
      }
    }

    // Level 1: Deterministic Formula Math ([data-laser-math])
    const mathEl = target?.closest('[data-laser-math]') as HTMLElement | null;
    if (mathEl && container.contains(mathEl)) {
      const mathAttr = mathEl.getAttribute('data-laser-math');
      const mathIdx = mathAttr !== null ? parseInt(mathAttr, 10) : undefined;
      if (mathIdx !== undefined && !isNaN(mathIdx)) {
        const mRect = mathEl.getBoundingClientRect();
        const relX = Math.max(0, Math.min(100, ((clientX - mRect.left) / mRect.width) * 100));
        const relY = Math.max(0, Math.min(100, ((clientY - mRect.top) / mRect.height) * 100));
        return {
          anchor_type: 'math',
          anchor_index: mathIdx,
          rel_x_pct: Number(relX.toFixed(1)),
          rel_y_pct: Number(relY.toFixed(1)),
          scroll_top_pct: Number(scrollTopPct.toFixed(1)),
          x_percent: Number(rawX.toFixed(1)),
          y_percent: Number(rawY.toFixed(1)),
        };
      }
    }

    // Level 1b: Formula KaTeX (.katex) fallback
    const katexEl = target?.closest('.katex') as HTMLElement | null;
    if (katexEl && container.contains(katexEl)) {
      const parentMath = katexEl.closest('[data-laser-math]');
      if (parentMath) {
        const mathAttr = parentMath.getAttribute('data-laser-math');
        const mathIdx = mathAttr !== null ? parseInt(mathAttr, 10) : undefined;
        if (mathIdx !== undefined && !isNaN(mathIdx)) {
          const mRect = parentMath.getBoundingClientRect();
          const relX = Math.max(0, Math.min(100, ((clientX - mRect.left) / mRect.width) * 100));
          const relY = Math.max(0, Math.min(100, ((clientY - mRect.top) / mRect.height) * 100));
          return {
            anchor_type: 'math',
            anchor_index: mathIdx,
            rel_x_pct: Number(relX.toFixed(1)),
            rel_y_pct: Number(relY.toFixed(1)),
            scroll_top_pct: Number(scrollTopPct.toFixed(1)),
            x_percent: Number(rawX.toFixed(1)),
            y_percent: Number(rawY.toFixed(1)),
          };
        }
      }
      const allKatex = Array.from(container.querySelectorAll('.katex'));
      const katexIdx = allKatex.indexOf(katexEl);
      if (katexIdx !== -1) {
        const kRect = katexEl.getBoundingClientRect();
        const relX = Math.max(0, Math.min(100, ((clientX - kRect.left) / kRect.width) * 100));
        const relY = Math.max(0, Math.min(100, ((clientY - kRect.top) / kRect.height) * 100));
        return {
          anchor_type: 'katex',
          anchor_index: katexIdx,
          rel_x_pct: Number(relX.toFixed(1)),
          rel_y_pct: Number(relY.toFixed(1)),
          scroll_top_pct: Number(scrollTopPct.toFixed(1)),
          x_percent: Number(rawX.toFixed(1)),
          y_percent: Number(rawY.toFixed(1)),
        };
      }
    }

    // Level 2: Table Cell (td, th)
    const cellEl = target?.closest('td, th') as HTMLElement | null;
    if (cellEl && container.contains(cellEl)) {
      const allCells = Array.from(container.querySelectorAll('td, th'));
      const cellIdx = allCells.indexOf(cellEl);
      if (cellIdx !== -1) {
        const cRect = cellEl.getBoundingClientRect();
        const relX = Math.max(0, Math.min(100, ((clientX - cRect.left) / cRect.width) * 100));
        const relY = Math.max(0, Math.min(100, ((clientY - cRect.top) / cRect.height) * 100));
        return {
          anchor_type: 'table_cell',
          anchor_index: cellIdx,
          rel_x_pct: Number(relX.toFixed(1)),
          rel_y_pct: Number(relY.toFixed(1)),
          scroll_top_pct: Number(scrollTopPct.toFixed(1)),
          x_percent: Number(rawX.toFixed(1)),
          y_percent: Number(rawY.toFixed(1)),
        };
      }
    }

    // Level 3: Semantic Block ([data-laser-block])
    const blockEl = target?.closest('[data-laser-block]') as HTMLElement | null;
    if (blockEl && container.contains(blockEl)) {
      const blockAttr = blockEl.getAttribute('data-laser-block');
      const blockIdx = blockAttr !== null ? parseInt(blockAttr, 10) : undefined;
      if (blockIdx !== undefined && !isNaN(blockIdx)) {
        const bRect = blockEl.getBoundingClientRect();
        const relX = Math.max(0, Math.min(100, ((clientX - bRect.left) / bRect.width) * 100));
        const relY = Math.max(0, Math.min(100, ((clientY - bRect.top) / bRect.height) * 100));
        return {
          anchor_type: 'block',
          anchor_index: blockIdx,
          rel_x_pct: Number(relX.toFixed(1)),
          rel_y_pct: Number(relY.toFixed(1)),
          scroll_top_pct: Number(scrollTopPct.toFixed(1)),
          x_percent: Number(rawX.toFixed(1)),
          y_percent: Number(rawY.toFixed(1)),
        };
      }
    }

    // Level 4: Container fallback
    return {
      anchor_type: 'container',
      rel_x_pct: Number(rawX.toFixed(1)),
      rel_y_pct: Number(rawY.toFixed(1)),
      scroll_top_pct: Number(scrollTopPct.toFixed(1)),
      x_percent: Number(rawX.toFixed(1)),
      y_percent: Number(rawY.toFixed(1)),
    };
  };

  // Highlight management functions (Unified Smart Drag dengan Anti-Stacking)
  const handleHighlightCreated = (
    zone: 'question_area' | 'student_render',
    data: { selected_text: string; rects: HighlightRect[] }
  ) => {
    if (!activeStudent || !currentQuestion) return;

    // Anti-stacking: Deteksi tumpang tindih rects untuk mencegah penggelapan layer jika di-drag berulang
    const isOverlapping = (existingHl: LiveHighlightItem) => {
      if (existingHl.question_id !== currentQuestion.id || existingHl.target_zone !== zone) return false;
      if (existingHl.selected_text && data.selected_text && existingHl.selected_text.trim() === data.selected_text.trim()) {
        return true;
      }
      return existingHl.rects.some((r1) =>
        data.rects.some((r2) => {
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
          return minArea > 0 && overlapArea / minArea > 0.3; // >30% tumpang tindih
        })
      );
    };

    const newHl: LiveHighlightItem = {
      id: `hl-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      question_id: currentQuestion.id,
      target_zone: zone,
      selected_text: data.selected_text,
      rects: data.rects,
      color: activeHighlightColor,
      created_at: Date.now(),
    };

    // Bersihkan sorotan lama yang bertumpang tindih agar tidak menggelapkan teks
    setHighlights((prev) => [...prev.filter((h) => !isOverlapping(h)), newHl]);

    worksheetRealtimeService.sendTeacherHighlight({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      action: 'add',
      highlight: newHl,
      target_zone: zone,
      timestamp: Date.now(),
    });
  };

  const handleRemoveHighlight = (id: string) => {
    if (!activeStudent || !currentQuestion) return;

    setHighlights((prev) => prev.filter((h) => h.id !== id));

    worksheetRealtimeService.sendTeacherHighlight({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      action: 'remove',
      highlight_id: id,
      timestamp: Date.now(),
    });
  };

  const handleClearHighlights = (zone?: 'question_area' | 'student_render') => {
    if (!activeStudent || !currentQuestion) return;

    setHighlights((prev) => (zone ? prev.filter((h) => h.target_zone !== zone) : []));

    worksheetRealtimeService.sendTeacherHighlight({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      action: 'clear',
      target_zone: zone,
      timestamp: Date.now(),
    });
  };

  // Handle Laser movement over Question Area (Left Panel) with Scaled Canvas Normalization
  const handleQuestionMouseMove = (coords: ScaledCanvasMouseMoveEvent) => {
    if (!isLaserEnabled || !activeStudent || !currentQuestion) return;

    const anchor = extractSemanticAnchor(coords.container, coords.clientX, coords.clientY);
    setTeacherLocalLaser({
      zone: 'question_area',
      x: coords.pctX,
      y: coords.pctY,
      logicalX: coords.logicalX,
      logicalY: coords.logicalY,
    });

    worksheetRealtimeService.sendTeacherLaser({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      target_zone: 'question_area',
      anchor_type: anchor.anchor_type,
      anchor_index: anchor.anchor_index,
      rel_x_pct: anchor.rel_x_pct,
      rel_y_pct: anchor.rel_y_pct,
      scroll_top_pct: anchor.scroll_top_pct,
      x_percent: coords.pctX,
      y_percent: coords.pctY,
      canvas_logical_x: coords.logicalX,
      canvas_logical_y: coords.logicalY,
      canvas_scale: canvasScale,
      is_laser_active: true,
      timestamp: Date.now(),
    });
  };

  const handleQuestionMouseLeave = () => {
    setTeacherLocalLaser(null);
    if (!isLaserEnabled || !activeStudent || !currentQuestion) return;
    worksheetRealtimeService.sendTeacherLaser({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      target_zone: 'question_area',
      x_percent: 0,
      y_percent: 0,
      is_laser_active: false,
      timestamp: Date.now(),
    });
  };

  // Handle Laser movement over Student KaTeX Render Area (Right Panel) with Scaled Canvas Normalization
  const handleRenderMouseMove = (coords: ScaledCanvasMouseMoveEvent) => {
    if (!isLaserEnabled || !activeStudent || !currentQuestion) return;

    const anchor = extractSemanticAnchor(coords.container, coords.clientX, coords.clientY);
    setTeacherLocalLaser({
      zone: 'student_render',
      x: coords.pctX,
      y: coords.pctY,
      logicalX: coords.logicalX,
      logicalY: coords.logicalY,
    });

    worksheetRealtimeService.sendTeacherLaser({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      target_zone: 'student_render',
      anchor_type: anchor.anchor_type,
      anchor_index: anchor.anchor_index,
      rel_x_pct: anchor.rel_x_pct,
      rel_y_pct: anchor.rel_y_pct,
      scroll_top_pct: anchor.scroll_top_pct,
      x_percent: coords.pctX,
      y_percent: coords.pctY,
      canvas_logical_x: coords.logicalX,
      canvas_logical_y: coords.logicalY,
      canvas_scale: canvasScale,
      is_laser_active: true,
      timestamp: Date.now(),
    });
  };

  const handleRenderMouseLeave = () => {
    setTeacherLocalLaser(null);
    if (!isLaserEnabled || !activeStudent || !currentQuestion) return;
    worksheetRealtimeService.sendTeacherLaser({
      access_token: cleanToken,
      student_id: activeStudent.student_id,
      teacher_id: 'teacher-main',
      question_id: currentQuestion.id,
      target_zone: 'student_render',
      x_percent: 0,
      y_percent: 0,
      is_laser_active: false,
      timestamp: Date.now(),
    });
  };

  // Send Teacher comment
  const handleSendComment = async (textToSend?: string) => {
    const text = (textToSend || commentInput).trim();
    if (!text || !activeStudent || !currentQuestion) return;

    setIsSendingComment(true);
    try {
      await worksheetRealtimeService.sendTeacherComment({
        access_token: cleanToken,
        student_id: activeStudent.student_id,
        teacher_id: 'teacher-main',
        teacher_name: 'Guru Pembina',
        question_id: currentQuestion.id,
        comment_text: text,
      });
      setCommentInput('');
    } catch (e) {
      console.error('Gagal mengirim komentar:', e);
    } finally {
      setIsSendingComment(false);
    }
  };

  const copyTokenToClipboard = () => {
    navigator.clipboard.writeText(cleanToken);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const quickHints = [
    '💡 Perhatikan koefisien stoikiometri',
    '⚖️ Periksa satuan standar (kJ vs J)',
    '🎯 Langkah sudah benar, lanjutkan!',
    '📐 Terapkan hukum gas ideal PV = nRT',
    '🔍 Cek kembali persamaan Nernst',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/teacher')}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono">
                <Radio className="w-3 h-3 animate-pulse text-emerald-600" />
                <span>LIVE CLASSROOM MONITOR</span>
              </span>
              <h1 className="text-xl font-black text-slate-900 font-display">
                {worksheet?.title || 'Sesi Live Kolaborasi'}
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Pantau aliran ketikan seluruh siswa, arahkan laser pointer, dan sematkan catatan bimbingan secara real-time.
            </p>
          </div>
        </div>

        {/* Big Token Badge with Copy */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-3 shadow-xs">
            <div>
              <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">
                KODE TOKEN SISWA:
              </span>
              <span className="text-lg font-black tracking-widest text-emerald-400 font-mono">
                {cleanToken}
              </span>
            </div>
            <button
              onClick={copyTokenToClipboard}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Salin Token"
            >
              {copiedToken ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={() => fetchWorksheetAndSessions()}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors active:scale-95"
            title="Muat Ulang & Sinkronkan Progres Murid"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Left (Multi-student Cards) vs Right (Live Student Observation Studio) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (4 Cols): Multi-student Grid */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Daftar Siswa Terhubung ({sessions.length})</span>
            </h3>
            <span className="text-[11px] text-slate-500 font-mono">Real-time presence</span>
          </div>

          {sessions.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">Menunggu Siswa Bergabung...</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto">
                Bagikan kode token <strong className="font-mono text-emerald-700 font-bold">{cleanToken}</strong> ke siswa agar mereka dapat masuk ke sesi ini.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
              {sessions.map((s) => {
                const isSelected = s.student_id === selectedStudentId;
                const isTypingNow = Boolean(liveTypingMap[s.student_id]);
                const answeredCount = countStudentAnswered(s.live_draft);

                return (
                  <div
                    key={s.student_id}
                    onClick={() => setSelectedStudentId(s.student_id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-emerald-50/50 border-emerald-400 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'bg-white border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center font-display">
                          {s.student_name.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-900">{s.student_name}</span>
                      </div>

                      {isTypingNow ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-mono animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          <span>Mengetik</span>
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 font-mono">Aktif</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Sedang di Soal #{s.current_question_index + 1}</span>
                      <span className="font-semibold text-emerald-800">
                        {answeredCount}/{s.total_questions || questions.length} Dijawab
                      </span>
                    </div>

                    {s.worksheet_title && (
                      <div className="text-[10px] text-indigo-700 font-semibold truncate mt-1.5 flex items-center gap-1 bg-indigo-50/70 px-2 py-0.5 rounded-lg border border-indigo-100">
                        <BookOpen className="w-3 h-3 text-indigo-600 shrink-0" />
                        <span className="truncate">{s.worksheet_title}</span>
                      </div>
                    )}

                    {/* Mini live snippet */}
                    {(() => {
                      const snippetAnswer = extractStudentAnswer(
                        s.live_draft,
                        s.current_question_index,
                        questions[s.current_question_index]?.id
                      );
                      if (snippetAnswer.steps && snippetAnswer.steps.trim()) {
                        return (
                          <p className="text-[11px] text-slate-600 italic line-clamp-1 mt-1.5 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                            "{snippetAnswer.steps.slice(0, 50)}..."
                          </p>
                        );
                      }
                      return null;
                    })()}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column (8 Cols): Focused Live Student Observation Studio */}
        <div className="lg:col-span-8 space-y-4">
          {activeStudent ? (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              {/* Studio Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center font-display shadow-2xs">
                    {activeStudent.student_name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 font-display">
                        Layar Pengerjaan: {activeStudent.student_name}
                      </h3>
                      <span className="px-2 py-0.2 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                        Live Stream
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      ID: {activeStudent.student_id}
                    </span>
                  </div>
                </div>

                {/* Laser Pointer Toggle, Stabilo Palette & Scale Presets */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Skala Dokumen Terstandarisasi Toggle (75%, 100%, 125%) */}
                  <ScalePresetToggle scale={canvasScale} onChange={setCanvasScale} size="sm" />

                  {/* Laser & Stabilo Button */}
                  <button
                    type="button"
                    onClick={() => setIsLaserEnabled(!isLaserEnabled)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                      isLaserEnabled
                        ? 'bg-rose-600 text-white ring-2 ring-rose-400/40'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                    title="Arahkan Laser Pointer atau Drag Teks untuk Stabilo"
                  >
                    <Crosshair className={`w-4 h-4 ${isLaserEnabled ? 'animate-spin' : ''}`} />
                    <span>{isLaserEnabled ? 'Laser & Stabilo Aktif' : 'Nyalakan Laser & Stabilo'}</span>
                  </button>

                  {/* Highlight Color Picker when Laser/Stabilo is active */}
                  {isLaserEnabled && (
                    <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[10px] text-slate-500 font-bold px-1 flex items-center gap-0.5">
                        <Highlighter className="w-3 h-3 text-amber-500" />
                        <span className="hidden sm:inline">Warna:</span>
                      </span>
                      {[
                        { color: 'yellow' as const, bg: 'bg-amber-400', label: 'Kuning' },
                        { color: 'pink' as const, bg: 'bg-pink-400', label: 'Pink' },
                        { color: 'green' as const, bg: 'bg-emerald-400', label: 'Hijau' },
                        { color: 'blue' as const, bg: 'bg-sky-400', label: 'Biru' },
                      ].map((c) => (
                        <button
                          key={c.color}
                          type="button"
                          onClick={() => setActiveHighlightColor(c.color)}
                          className={`w-5 h-5 rounded-full ${c.bg} transition-transform ${
                            activeHighlightColor === c.color
                              ? 'scale-115 ring-2 ring-slate-800 ring-offset-1'
                              : 'opacity-70 hover:opacity-100 hover:scale-105'
                          }`}
                          title={`Stabilo ${c.label}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Clear Highlights Button */}
                  {highlights.some((h) => h.question_id === currentQuestion?.id) && (
                    <button
                      type="button"
                      onClick={() => handleClearHighlights()}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 border border-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                      title="Hapus semua sorotan stabilo pada nomor ini"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                      <span className="hidden sm:inline">Hapus Sorotan</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Question Navigation Bar for Teacher */}
              <div className="px-5 py-3 border-b border-slate-100 bg-white flex items-center gap-2 overflow-x-auto">
                <span className="text-xs font-semibold text-slate-500 shrink-0">Pilih Soal:</span>
                {questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestionIndex(idx)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                      selectedQuestionIndex === idx
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Soal #{idx + 1}
                  </button>
                ))}
              </div>

              {/* Split Body: Left Question & Rubric | Right Live Student Keystrokes */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Left: Question & Teacher Mark Scheme */}
                <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto bg-white">
                  {currentQuestion ? (
                    <>
                      {/* Question Metadata Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-mono font-bold text-xs">
                            Soal #{selectedQuestionIndex + 1}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-mono">
                            Tingkat {currentQuestion.difficulty || 'OSN'}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 font-mono">
                          Bobot: {currentQuestion.total_points || 10}.0 Poin
                        </span>
                      </div>

                      {/* Question Subtopic & Title */}
                      <div>
                        <div className="text-xs font-bold text-slate-700 mb-1">
                          Topik #{currentQuestion.pillar_number || 1}: {currentQuestion.subtopic || 'Materi Inti'}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 font-display">
                          {currentQuestion.title}
                        </h4>
                      </div>

                      {/* Interactive Laser & Highlight Question Box */}
                      <div
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          isLaserEnabled
                            ? 'border-rose-300 ring-2 ring-rose-400/20 bg-rose-50/5 shadow-xs'
                            : 'border-slate-200 bg-slate-50/80'
                        }`}
                      >
                        <ScaledDocumentCanvas
                          baseWidth={540}
                          scale={canvasScale}
                          highlights={highlights.filter(
                            (h) => h.question_id === currentQuestion.id && h.target_zone === 'question_area'
                          )}
                          onRemoveHighlight={handleRemoveHighlight}
                          onHighlightCreated={(d) => handleHighlightCreated('question_area', d)}
                          isInteractive={isLaserEnabled}
                          activeLaser={
                            isLaserEnabled && teacherLocalLaser?.zone === 'question_area'
                              ? {
                                  x_percent: teacherLocalLaser.x,
                                  y_percent: teacherLocalLaser.y,
                                  logical_x: teacherLocalLaser.logicalX,
                                  logical_y: teacherLocalLaser.logicalY,
                                  label: '🔴 Sorot Guru (Naskah Soal)',
                                }
                              : null
                          }
                          onMouseMove={handleQuestionMouseMove}
                          onMouseLeave={handleQuestionMouseLeave}
                          className="p-4"
                        >
                          <KaTeXRenderer content={currentQuestion.question_text || ''} />
                        </ScaledDocumentCanvas>
                      </div>

                      {/* Tetapan & Data Pendukung Box */}
                      <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl space-y-1 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-amber-900">
                          <Info className="w-3.5 h-3.5 text-amber-600" />
                          <span>Tetapan & Data Pendukung Kimia:</span>
                        </div>
                        <div className="text-amber-950 leading-relaxed text-[11px] font-mono">
                          <KaTeXRenderer
                            content={`• $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$
• $T = 25^\\circ\\text{C} = 298.15\\text{ K}, \\quad F = 96485\\text{ C/mol}$
• $N_A = 6.022 \\times 10^{23}\\text{ partikel/mol}$`}
                          />
                        </div>
                      </div>

                      {/* Panduan Kerangka 4 Langkah OSN (Scaffold) jika ada */}
                      {currentQuestion.solution_framework_template && (
                        <div className="p-3 bg-indigo-50/50 border border-indigo-200/80 rounded-xl space-y-1.5 text-xs">
                          <div className="flex items-center justify-between font-bold text-indigo-900">
                            <span className="flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                              <span>Kerangka 4 Langkah OSN (Panduan Siswa):</span>
                            </span>
                          </div>
                          <div className="text-slate-700 bg-white/80 p-2.5 rounded-lg border border-indigo-100 text-[11px] font-mono leading-relaxed whitespace-pre-wrap max-h-36 overflow-y-auto">
                            {currentQuestion.solution_framework_template}
                          </div>
                        </div>
                      )}

                      {/* Expected answer & rubric reference for teacher */}
                      {currentQuestion.expected_final_answer && (
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
                          <span className="font-bold text-emerald-900 block">Kunci Jawaban Akhir:</span>
                          <div className="font-mono font-bold text-emerald-800">
                            <KaTeXRenderer content={currentQuestion.expected_final_answer} />
                          </div>
                        </div>
                      )}

                      {currentQuestion.solution_rubric && (
                        <div className="text-xs space-y-1 text-slate-600">
                          <span className="font-bold text-slate-800 block">Panduan Rubrik Guru:</span>
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] leading-relaxed">
                            <KaTeXRenderer content={currentQuestion.solution_rubric} />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-12 text-center text-slate-400 space-y-2">
                      <BookOpen className="w-8 h-8 mx-auto text-slate-300 animate-pulse" />
                      <p className="text-xs">Memuat naskah soal lembar kerja...</p>
                    </div>
                  )}
                </div>

                {/* Right: Live Student Screen Area */}
                <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 font-display flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-emerald-600" />
                      <span>Hasil Pengerjaan Siswa (Live Keystrokes)</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Auto-syncing real-time
                    </span>
                  </div>

                  {/* Student Work Steps with Interactive Laser & Highlight */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Langkah & Perhitungan yang Sedang Ditulis Siswa (Live KaTeX):
                    </label>
                    <div
                      className={`min-h-[160px] border rounded-xl shadow-inner transition-all overflow-hidden ${
                        isLaserEnabled
                          ? 'border-rose-300 ring-2 ring-rose-400/20 bg-rose-50/5'
                          : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <ScaledDocumentCanvas
                        baseWidth={540}
                        scale={canvasScale}
                        highlights={highlights.filter(
                          (h) => h.question_id === currentQuestion?.id && h.target_zone === 'student_render'
                        )}
                        onRemoveHighlight={handleRemoveHighlight}
                        onHighlightCreated={(d) => handleHighlightCreated('student_render', d)}
                        isInteractive={isLaserEnabled}
                        activeLaser={
                          isLaserEnabled && teacherLocalLaser?.zone === 'student_render'
                            ? {
                                x_percent: teacherLocalLaser.x,
                                y_percent: teacherLocalLaser.y,
                                logical_x: teacherLocalLaser.logicalX,
                                logical_y: teacherLocalLaser.logicalY,
                                label: '🔴 Sorot Guru (Hasil KaTeX)',
                              }
                            : null
                        }
                        onMouseMove={handleRenderMouseMove}
                        onMouseLeave={handleRenderMouseLeave}
                        className="p-3.5"
                      >
                        <KaTeXRenderer
                          content={
                            studentAnswer.steps ||
                            '(Siswa belum mengetikkan langkah pengerjaan pada nomor ini...)'
                          }
                        />
                      </ScaledDocumentCanvas>
                    </div>
                  </div>

                  {/* Student Final Answer */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Jawaban Akhir Siswa:
                    </label>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-emerald-950">
                      {studentAnswer.finalAnswer ? (
                        studentAnswer.finalAnswer
                      ) : (
                        <span className="text-slate-400 italic font-normal">(Belum ada)</span>
                      )}
                    </div>
                  </div>

                  {/* Live Laser & Stabilo indicator hint */}
                  {isLaserEnabled && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
                      <Crosshair className="w-4 h-4 text-rose-600 shrink-0 animate-spin" />
                      <span>
                        <strong>Laser & Stabilo Aktif:</strong> Gerakkan kursor ke <strong>Naskah Soal</strong> atau <strong>Hasil KaTeX</strong> untuk laser, atau <strong>drag mouse melintasi teks</strong> untuk membuat sorotan stabilo langsung di layar {activeStudent?.student_name || 'siswa'}!
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Studio Footer: Instant Comment / Feedback Box */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 font-display flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-sky-600" />
                    <span>Kirim Catatan / Hint Instan ke Layar Siswa:</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Muncul langsung di layar pengerjaan {activeStudent.student_name}
                  </span>
                </div>

                {/* Quick Hint Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {quickHints.map((hint) => (
                    <button
                      key={hint}
                      onClick={() => handleSendComment(hint)}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-800 border border-slate-200 text-[11px] transition-colors shadow-2xs"
                    >
                      {hint}
                    </button>
                  ))}
                </div>

                {/* Custom Comment Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendComment();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    placeholder={`Tulis catatan khusus untuk ${activeStudent.student_name}...`}
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                  />
                  <button
                    type="submit"
                    disabled={isSendingComment || !commentInput.trim()}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim</span>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-400 space-y-2">
              <Eye className="w-8 h-8 mx-auto text-slate-300" />
              <h4 className="text-sm font-bold text-slate-700">Pilih Siswa untuk Mulai Memantau</h4>
              <p className="text-xs text-slate-400">
                Klik salah satu kartu siswa di sebelah kiri untuk melihat pengerjaan live mereka.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
