import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BENCHMARK_QUESTIONS, PILLARS_DATA } from '../../data/syllabusData';
import { KaTeXRenderer } from '../../components/common/KaTeXRenderer';
import { ChemToolbar } from '../../components/worksheet/ChemToolbar';
import { PeriodicTableDrawer } from '../../components/common/PeriodicTableDrawer';
import { MolarMassCalculatorModal } from '../../components/common/MolarMassCalculatorModal';
import { ScaffoldGuideModal } from '../../components/worksheet/ScaffoldGuideModal';
import { DiagramViewerModal } from '../../components/common/DiagramViewerModal';
import { addXpLocally } from '../../lib/gamification';
import { evaluateStudentWorksheet } from '../../services/aiGradingService';
import { analyzeScaffoldWork } from '../../services/scaffoldService';
import { saveWorksheetSubmission, getSubmissionHistory } from '../../services/submissionService';
import { worksheetRealtimeService } from '../../services/worksheetRealtimeService';
import { studentWorksheetService } from '../../services/studentWorksheetService';
import { findConceptByTag, OSN_MATERIALS, type MaterialItem, type ConceptBlock } from '../../data/materialsData';
import { SMA_MATERIALS, type SmaMaterialItem } from '../../data/smaMaterialsData';
import { resolveQuestionTopicMeta } from '../../utils/topicMapping';
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
  Image as ImageIcon,
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
        } else if (type === 'static_module') {
          const targetPillar = id ? parseInt(id, 10) : undefined;
          const questionRes = await questionBankService.getQuestions(
            targetPillar && !isNaN(targetPillar) ? { pillarNumber: targetPillar } : undefined
          );
          if (questionRes.questions && questionRes.questions.length > 0) {
            setCustomQuestions(questionRes.questions);
          }
        } else if (type === 'practice' && id) {
          // Mendukung ID tunggal (e.g. "501001") maupun multi-ID pilihan (e.g. "501001,501002,102005")
          const rawIds = id.split(',').map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
          if (rawIds.length === 1) {
            // Tepat 1 soal: hanya memuat soal tunggal yang diklik di Bank Soal
            const singleQ = await questionBankService.getQuestionById(rawIds[0]);
            if (singleQ) {
              setCustomQuestions([singleQ]);
              return;
            }
          } else if (rawIds.length > 1) {
            // Multi-soal pilihan dari Bank Soal: memuat tepat soal-soal yang dipilih
            const questionRes = await questionBankService.getQuestions();
            const allQ = questionRes.questions || [];
            const matched = rawIds
              .map((qId) => allQ.find((q) => q.id === qId))
              .filter(Boolean) as Question[];
            if (matched.length > 0) {
              setCustomQuestions(matched);
              return;
            }
          }
          // Fallback umum jika ID tidak ditemukan
          const fallbackRes = await questionBankService.getQuestions();
          if (fallbackRes.questions && fallbackRes.questions.length > 0) {
            setCustomQuestions(fallbackRes.questions);
          }
        } else if (type === 'practice') {
          const fallbackRes = await questionBankService.getQuestions();
          if (fallbackRes.questions && fallbackRes.questions.length > 0) {
            setCustomQuestions(fallbackRes.questions);
          }
        }
      } catch (e) {
        console.warn('Gagal memuat soal kustom:', e);
      }
    };
    loadCustomQuestions();
  }, [type, id, studentId, studentName]);

  // Tandai status worksheet sebagai dimulai (in_progress) begitu siswa membuka halaman
  useEffect(() => {
    if (type) {
      studentWorksheetService.markWorksheetStarted({
        type,
        id: id || '1',
        token: loadedWorksheet?.access_token || (type === 'live' ? id : undefined),
        studentId,
      });
    }
  }, [type, id, loadedWorksheet?.access_token, studentId]);

  const questionsList =
    customQuestions && customQuestions.length > 0 ? customQuestions : BENCHMARK_QUESTIONS;

  // Temukan indeks soal berdasarkan parameter :id di URL
  const targetId = id ? parseInt(id, 10) : null;
  const initialIdx = useMemo(() => {
    if (!targetId || isNaN(targetId)) return 0;
    const foundIdx = questionsList.findIndex(
      (q) => q.id === targetId || (type === 'static_module' && (q.pillar_number === targetId || q.module_id === targetId))
    );
    return foundIdx !== -1 ? foundIdx : 0;
  }, [targetId, questionsList, type]);

  const [currentQIndex, setCurrentQIndex] = useState(initialIdx);
  // Mode panel mobile: 'question' (baca naskah soal) atau 'editor' (tulis jawaban & preview)
  const [activeMobilePane, setActiveMobilePane] = useState<'question' | 'editor'>('question');

  // Reference to track whether user has navigated or draft has been restored (mencegah reset ke soal 1)
  const hasRestoredQIndexRef = useRef(false);
  // Flag untuk memastikan currentQIndex disinkronkan ke initialIdx saat customQuestions pertama kali dimuat
  const hasInitializedIndexRef = useRef(false);
  const lastRouteIdRef = useRef<string | undefined>(id);

  // Set currentQIndex saat initialIdx berubah setelah customQuestions selesai dimuat pertama kali
  useEffect(() => {
    if (!hasInitializedIndexRef.current && customQuestions && customQuestions.length > 0) {
      hasInitializedIndexRef.current = true;
      // Jangan timpa jika draft lokal/sesi sebelumnya sudah memulihkan indeks soal yang sedang dikerjakan siswa
      if (!hasRestoredQIndexRef.current && initialIdx >= 0 && initialIdx < customQuestions.length) {
        setCurrentQIndex(initialIdx);
      }
    }
  }, [customQuestions, initialIdx]);

  // Hanya perbarui indeks jika parameter rute :id benar-benar berubah dari navigasi luar (bukan re-render)
  useEffect(() => {
    if (lastRouteIdRef.current !== id) {
      lastRouteIdRef.current = id;
      if (initialIdx !== currentQIndex && !hasRestoredQIndexRef.current) {
        setCurrentQIndex(initialIdx);
        setEvaluationError(null);
      }
    }
  }, [id, initialIdx]);

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
  const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false);

  // AI Evaluation Engine States (Multi-Question Evaluation Map)
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationStage, setEvaluationStage] = useState<
    'idle' | 'analyzing' | 'validating_math' | 'synthesizing_feedback'
  >('idle');
  const [evaluations, setEvaluations] = useState<Record<number, GradingResponse>>({});
  const evaluationsRef = useRef(evaluations);
  evaluationsRef.current = evaluations;

  const evaluationResult = evaluations[currentQIndex] || null;
  const [evaluationError, setEvaluationError] = useState<string | null>(null);
  const [isSubmissionSaved, setIsSubmissionSaved] = useState(false);

  // Sinkronkan riwayat submission yang sudah pernah dinilai sebelumnya ke state evaluations
  useEffect(() => {
    try {
      const subs = getSubmissionHistory(studentId);
      if (subs && subs.length > 0 && questionsList.length > 0) {
        setEvaluations((prev) => {
          const updated = { ...prev };
          let changed = false;
          questionsList.forEach((q, idx) => {
            if (!updated[idx]) {
              const matched = subs.find((s) => s.questionId === q.id);
              if (matched && matched.totalScore !== undefined) {
                const stat = matched.status === 'perfect' || matched.status === 'partial_correct' || matched.status === 'incorrect'
                  ? matched.status
                  : (matched.totalScore >= 8 ? 'perfect' : matched.totalScore >= 5 ? 'partial_correct' : 'incorrect');
                updated[idx] = {
                  status: stat,
                  totalScore: matched.totalScore,
                  maxScore: matched.maxScore || 10,
                  criteriaBreakdown: matched.criteriaBreakdown || [],
                  overallFeedback: matched.overallFeedback || '',
                  strengths: matched.strengths || [],
                  missingOrIncorrectPoints: matched.missingOrIncorrectPoints || [],
                  misconceptionDiagnosis: matched.misconceptionDiagnosis,
                  suggestedReviewTopic: matched.suggestedReviewTopic,
                  xpAwarded: matched.xpAwarded || 0,
                  confidenceScore: matched.confidenceScore || 0.9,
                  gradedAt: matched.gradedAt || new Date().toISOString(),
                };
                changed = true;
              }
            }
          });
          return changed ? updated : prev;
        });
      }
    } catch (e) {
      console.warn('Gagal membaca riwayat submission untuk evaluasi:', e);
    }
  }, [studentId, questionsList]);

  // Statistik progres penilaian seluruh butir soal dalam worksheet ini
  const gradedQuestionsCount = useMemo(() => {
    return questionsList.filter((_, idx) => Boolean(evaluations[idx])).length;
  }, [questionsList, evaluations]);

  const isAllWorksheetCompleted = useMemo(() => {
    return questionsList.length > 0 && gradedQuestionsCount === questionsList.length;
  }, [questionsList.length, gradedQuestionsCount]);

  // Real-time Two-way Classroom State (Token, Laser Pointer, Teacher Comments)
  const liveToken = useMemo(() => {
    if (type === 'live' && id) return id.trim().toUpperCase();
    const queryToken = new URLSearchParams(window.location.search).get('token');
    if (queryToken) return queryToken.trim().toUpperCase();
    if (loadedWorksheet?.access_token) return loadedWorksheet.access_token.trim().toUpperCase();
    if (type === 'teacher_assignment') return `ASSIGN-${id || 1}`;
    if (type === 'practice') return `PRACTICE-${id || 1}`;
    return `WS-${id || 1}`;
  }, [type, id, loadedWorksheet?.access_token]);

  // Current Worksheet Title
  const currentWorksheetTitle = useMemo(() => {
    if (loadedWorksheet?.title) return loadedWorksheet.title;
    if (type === 'live') return `Sesi Live [${id || 'OSN'}]`;
    if (type === 'teacher_assignment') return `Tugas Lembar Kerja #${id || 1}`;
    if (type === 'practice') {
      if (currentQuestion?.title) {
        return `Latihan Soal #${currentQuestion.id}: ${currentQuestion.title}`;
      }
      return `Latihan Bank Soal #${id || 1}`;
    }
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
  }, [loadedWorksheet?.title, type, id, currentQuestion?.id, currentQuestion?.title, currentQuestion?.subtopic]);

  // Catat sesi worksheet aktif agar jika siswa berpindah tab atau refresh, tab Worksheet langsung melanjutkan soal ini
  useEffect(() => {
    if (type && id) {
      const currentUrl = `/worksheet/${type}/${id}`;
      studentWorksheetService.setActiveSession({
        url: currentUrl,
        type,
        id,
        title: currentWorksheetTitle,
        currentQIndex,
        totalQuestions: questionsList.length,
        lastActiveAt: Date.now(),
        studentId,
      });
    }
  }, [type, id, currentWorksheetTitle, currentQIndex, questionsList.length, studentId]);

  // Resolusi konsep materi terkait untuk soal yang sedang aktif
  const relatedConceptsData = useMemo(() => {
    if (!currentQuestion) return null;

    const topicMeta = resolveQuestionTopicMeta(currentQuestion);
    const isSma = topicMeta.isSma;

    // Temukan modul materi yang sesuai di database SMA atau OSN
    let materialItem: MaterialItem | SmaMaterialItem | undefined;
    if (isSma) {
      const smaNum = topicMeta.mappedSmaTopicNumber || 1;
      materialItem =
        SMA_MATERIALS.find(
          (m) =>
            m.topic_number === smaNum ||
            m.id === currentQuestion.sma_topic_id ||
            m.id === currentQuestion.module_id
        ) ||
        SMA_MATERIALS.find((m) => m.topic_number === smaNum) ||
        SMA_MATERIALS[0];
    } else {
      materialItem =
        OSN_MATERIALS.find((m) => m.topic_number === currentQuestion.pillar_number) ||
        OSN_MATERIALS[0];
    }

    // Filter daftar tag kotor/metadata generic (seperti '#sma', '#SMA-Mudah', '#Pilar-1')
    const JUNK_TAG_REGEX = /^(sma|osn|pilar|pilar-\d+|sma-\w+|sma-mudah|sma-sedang|sma-sukar|mudah|sedang|sukar|sulit)$/i;

    const cleanQuestionTags = (currentQuestion.tags || []).filter(
      (t) => !JUNK_TAG_REGEX.test(t.trim())
    );

    // Kumpulkan semua blok konsep dari materi yang ditemukan
    const allConceptBlocks: ConceptBlock[] = materialItem
      ? [...(materialItem.prerequisites || []), ...(materialItem.core_concepts || [])]
      : [];

    interface ResolvedConceptChip {
      label: string;
      tag: string;
      url: string;
      summary?: string;
    }

    const matchedChips: ResolvedConceptChip[] = [];
    const usedTags = new Set<string>();

    // 1. Cocokkan dari cleanQuestionTags
    for (const rawTag of cleanQuestionTags) {
      const norm = rawTag.toLowerCase().trim().replace(/^#/, '');
      let block = allConceptBlocks.find(
        (b) =>
          b.tag.toLowerCase() === norm ||
          b.tag.toLowerCase().includes(norm) ||
          norm.includes(b.tag.toLowerCase()) ||
          (b.tags && b.tags.some((t) => t.toLowerCase() === norm || norm.includes(t.toLowerCase())))
      );
      let targetMaterial = materialItem;

      // Jika tidak ditemukan di modul pilar ini, cari lintas silabus secara global via findConceptByTag
      if (!block && !isSma) {
        const globalFound = findConceptByTag(norm);
        if (globalFound) {
          block = globalFound.block;
          targetMaterial = globalFound.material;
        }
      }

      const chipTag = block ? block.tag : norm;
      if (!usedTags.has(chipTag)) {
        usedTags.add(chipTag);
        const url = isSma
          ? `/materi/sma-${targetMaterial?.topic_number || 1}?tag=${encodeURIComponent(chipTag)}&db=sma`
          : `/materi/${targetMaterial?.topic_number || 1}?tag=${encodeURIComponent(chipTag)}&db=osn`;

        matchedChips.push({
          label: block?.title || rawTag.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
          tag: chipTag,
          url,
          summary: block?.summary,
        });
      }
    }

    // 2. Cocokkan dari currentQuestion.subtopic dan title jika chip masih kurang dari 3
    if (matchedChips.length < 3 && (currentQuestion.subtopic || currentQuestion.title)) {
      const queryText = `${currentQuestion.subtopic || ''} ${currentQuestion.title || ''}`.toLowerCase();
      const keywords = queryText
        .split(/[\s,&/()\-]+/)
        .filter((w) => w.length > 3 && !['pada', 'dan', 'senyawa', 'reaksi', 'tingkat', 'soal', 'analisis', 'model', 'penentuan', 'menurut'].includes(w));

      // 2a. Pertama cari di dalam modul saat ini
      for (const block of allConceptBlocks) {
        if (usedTags.has(block.tag)) continue;
        const blockTitleLower = block.title.toLowerCase();
        const blockTagLower = block.tag.toLowerCase();

        const isMatch = keywords.some(
          (kw) => blockTitleLower.includes(kw) || blockTagLower.includes(kw)
        );

        if (isMatch) {
          usedTags.add(block.tag);
          const url = isSma
            ? `/materi/sma-${materialItem.topic_number}?tag=${encodeURIComponent(block.tag)}&db=sma`
            : `/materi/${materialItem.topic_number}?tag=${encodeURIComponent(block.tag)}&db=osn`;

          matchedChips.push({
            label: block.title,
            tag: block.tag,
            url,
            summary: block.summary,
          });
          if (matchedChips.length >= 3) break;
        }
      }

      // 2b. Jika masih kurang dan merupakan jalur OSN, cari di seluruh silabus OSN
      if (!isSma && matchedChips.length < 2) {
        for (const mat of OSN_MATERIALS) {
          if (mat.topic_number === materialItem?.topic_number) continue;
          const otherBlocks = [...(mat.prerequisites || []), ...(mat.core_concepts || [])];
          for (const block of otherBlocks) {
            if (usedTags.has(block.tag)) continue;
            const blockTitleLower = block.title.toLowerCase();
            const blockTagLower = block.tag.toLowerCase();

            const isMatch = keywords.some(
              (kw) => kw.length >= 5 && (blockTitleLower.includes(kw) || blockTagLower.includes(kw))
            );

            if (isMatch) {
              usedTags.add(block.tag);
              const url = `/materi/${mat.topic_number}?tag=${encodeURIComponent(block.tag)}&db=osn`;
              matchedChips.push({
                label: block.title,
                tag: block.tag,
                url,
                summary: block.summary,
              });
              if (matchedChips.length >= 3) break;
            }
          }
          if (matchedChips.length >= 3) break;
        }
      }
    }

    // 3. Fallback jika masih kosong: sertakan 2-3 konsep materi inti dari modul terkait
    if (matchedChips.length === 0 && materialItem?.core_concepts) {
      for (const block of materialItem.core_concepts.slice(0, 3)) {
        if (!usedTags.has(block.tag)) {
          usedTags.add(block.tag);
          const url = isSma
            ? `/materi/sma-${materialItem.topic_number}?tag=${encodeURIComponent(block.tag)}&db=sma`
            : `/materi/${materialItem.topic_number}?tag=${encodeURIComponent(block.tag)}&db=osn`;

          matchedChips.push({
            label: block.title,
            tag: block.tag,
            url,
            summary: block.summary,
          });
        }
      }
    }

    return {
      topicMeta,
      materialItem,
      chips: matchedChips,
      mainModuleUrl: topicMeta.materialRoute,
      mainModuleTitle: topicMeta.topicTitle,
      mainBadgeLabel: topicMeta.topicBadgeLabel,
      subtopicName: currentQuestion.subtopic,
    };
  }, [currentQuestion]);

  // Tetapan dan Data Pendukung Konseptual Dinamis yang Menyesuaikan dengan Karakteristik Soal
  const supportingData = useMemo(() => {
    if (!currentQuestion) return null;

    const textLower = (currentQuestion.question_text || '').toLowerCase();
    const subtopicLower = (currentQuestion.subtopic || '').toLowerCase();
    const titleLower = (currentQuestion.title || '').toLowerCase();
    const combined = `${textLower} ${subtopicLower} ${titleLower}`;

    // 1. Struktur Atom & Notasi Partikel Subatomik (Proton, Elektron, Neutron)
    if (
      combined.includes('proton') ||
      combined.includes('neutron') ||
      combined.includes('elektron') ||
      combined.includes('nuklida') ||
      combined.includes('isotop') ||
      combined.includes('isobar') ||
      combined.includes('isoton') ||
      combined.includes('nomor atom') ||
      combined.includes('nomor massa')
    ) {
      return {
        title: 'Data Pendukung: Notasi & Hubungan Partikel Subatomik',
        content: `• Notasi nuklida ion/atom: $^{A}_{Z}\\ce{X}^{q\\pm}$ dengan $A = \\text{nomor massa}$, $Z = \\text{nomor atom}$
• Jumlah proton: $p = Z$
• Jumlah neutron: $n = A - Z$
• Jumlah elektron: $e = Z - (\\text{muatan ion } q)$
• Massa: $m_p \\approx 1.0073\\text{ sma},\\ m_n \\approx 1.0087\\text{ sma},\\ m_e \\approx 0.00055\\text{ sma}$`,
      };
    }

    // 2. Kuantum, Model Bohr, Spektrum & Teori Orbital
    if (
      combined.includes('bohr') ||
      combined.includes('kuantum') ||
      combined.includes('spektrum') ||
      combined.includes('panjang gelombang') ||
      combined.includes('foton') ||
      combined.includes('de broglie') ||
      combined.includes('slater') ||
      combined.includes('rydberg') ||
      currentQuestion.pillar_number === 1
    ) {
      return {
        title: 'Tetapan Fisika Kuantum & Spektroskopi:',
        content: `• Kecepatan cahaya: $c = 3.0 \\times 10^8\\text{ m/s}$
• Tetapan Planck: $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$
• Energi foton: $E = h\\nu = \\frac{hc}{\\lambda}$
• Tetapan Rydberg: $R_H = 1.097 \\times 10^7\\text{ m}^{-1}$
• Aturan perisai Slater: $Z_{\\text{eff}} = Z - \\sigma$`,
      };
    }

    // 3. Ikatan Kimia, Geometri Domain & Muatan Formal
    if (
      combined.includes('ikatan') ||
      combined.includes('vsepr') ||
      combined.includes('lewis') ||
      combined.includes('hibridisasi') ||
      combined.includes('kovalen') ||
      combined.includes('ionik') ||
      combined.includes('muatan formal') ||
      currentQuestion.pillar_number === 2
    ) {
      return {
        title: 'Prinsip Ikatan & Geometri Domain:',
        content: `• Muatan formal: $\\text{MF} = EV - \\text{PEB} - \\frac{1}{2}\\text{PEI}$
• Tipe geometri domain: $AX_nE_m$ ($n = \\text{PEI},\\ m = \\text{PEB}$)
• Skala elektronegativitas Pauling: $\\ce{F} (4.0) > \\ce{O} (3.5) > \\ce{Cl} (3.0) \\approx \\ce{N} (3.0)$`,
      };
    }

    // 4. Termokimia & Kalorimetri
    if (
      combined.includes('kalor') ||
      combined.includes('entalpi') ||
      combined.includes('hess') ||
      combined.includes('termodinamika') ||
      combined.includes('entropi') ||
      combined.includes('gibbs') ||
      currentQuestion.pillar_number === 4
    ) {
      return {
        title: 'Tetapan & Hubungan Termodinamika:',
        content: `• Kalor: $q = m \\cdot c \\cdot \\Delta T$ ($c_{\\text{air}} = 4.184\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$)
• Tetapan gas: $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$
• Persamaan Gibbs: $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -RT \\ln K$
• Suhu mutlak standar: $T = 298.15\\text{ K}\\ (25^\\circ\\text{C})$`,
      };
    }

    // 5. Kinetika Kimia & Persamaan Laju
    if (
      combined.includes('laju') ||
      combined.includes('orde') ||
      combined.includes('arrhenius') ||
      combined.includes('energi aktivasi') ||
      combined.includes('waktu paruh') ||
      currentQuestion.pillar_number === 5
    ) {
      return {
        title: 'Persamaan & Tetapan Kinetika Kimia:',
        content: `• Hukum laju reaksi: $v = k[\\ce{A}]^m[\\ce{B}]^n$
• Persamaan Arrhenius: $k = A \\cdot e^{-E_a / RT}$ ($R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$)
• Waktu paruh reaksi orde-1: $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$`,
      };
    }

    // 6. Kesetimbangan Kimia & Asas Le Chatelier
    if (
      combined.includes('kesetimbangan') ||
      combined.includes('le chatelier') ||
      combined.includes('tetapan kc') ||
      combined.includes('tetapan kp') ||
      currentQuestion.pillar_number === 6
    ) {
      return {
        title: 'Tetapan & Hubungan Kesetimbangan:',
        content: `• Relasi $K_p$ dan $K_c$: $K_p = K_c(RT)^{\\Delta n}$ ($R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$)
• Derajat disosiasi: $\\alpha = \\frac{\\text{mol terurai}}{\\text{mol mula-mula}}$
• Kuosien reaksi: $Q_c < K_c$ (arah maju), $Q_c > K_c$ (arah balik)`,
      };
    }

    // 7. Larutan, Asam-Basa, Buffer & Titrasi
    if (
      combined.includes('asam') ||
      combined.includes('basa') ||
      combined.includes('ph') ||
      combined.includes('poh') ||
      combined.includes('buffer') ||
      combined.includes('penyangga') ||
      combined.includes('titrasi') ||
      combined.includes('hidrolisis') ||
      combined.includes('ksp') ||
      combined.includes('kelarutan') ||
      currentQuestion.pillar_number === 7
    ) {
      return {
        title: 'Tetapan Larutan & Kesetimbangan Asam-Basa:',
        content: `• Tetapan air ($25^\\circ\\text{C}$): $K_w = 1.0 \\times 10^{-14},\\quad \\text{pH} + \\text{pOH} = 14$
• Asam lemah: $[\\ce{H+}] = \\sqrt{K_a \\cdot M_a} = \\alpha \\cdot M_a$
• Penyangga (buffer asam): $[\\ce{H+}] = K_a \\cdot \\frac{n_{\\text{asam}}}{n_{\\text{basa konjugasi}}}$
• Hasil kali kelarutan: $K_{sp}(\\ce{A_xB_y}) = [A^{y+}]^x [B^{x-}]^y$`,
      };
    }

    // 8. Redoks & Elektrokimia
    if (
      combined.includes('redoks') ||
      combined.includes('sel volta') ||
      combined.includes('katoda') ||
      combined.includes('anoda') ||
      combined.includes('nernst') ||
      combined.includes('faraday') ||
      combined.includes('elektrolisis') ||
      currentQuestion.pillar_number === 8
    ) {
      return {
        title: 'Tetapan Elektrokimia & Potensial Reduksi:',
        content: `• Tetapan Faraday: $F = 96485\\text{ C/mol e}^-$
• Potensial sel standar: $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}$
• Persamaan Nernst ($25^\\circ\\text{C}$): $E = E^\\circ - \\frac{0.0592}{n} \\log Q$
• Hukum Faraday I: $w = \\frac{A_r \\cdot I \\cdot t}{n \\cdot 96485}$`,
      };
    }

    // 9. Kimia Karbon & Organik
    if (
      combined.includes('organik') ||
      combined.includes('alkana') ||
      combined.includes('alkena') ||
      combined.includes('alkuna') ||
      combined.includes('alkohol') ||
      combined.includes('eter') ||
      combined.includes('aldehid') ||
      combined.includes('keton') ||
      combined.includes('ester') ||
      combined.includes('karbon') ||
      currentQuestion.pillar_number === 10
    ) {
      return {
        title: 'Kaidah Senyawa Karbon & Gugus Fungsi:',
        content: `• Rumus homolog: Alkana ($\\ce{C_nH_{2n+2}}$), Alkena ($\\ce{C_nH_{2n}}$), Alkuna ($\\ce{C_nH_{2n-2}}$)
• Massa atom relatif: $A_r(\\ce{C}) = 12.011,\\ A_r(\\ce{H}) = 1.008,\\ A_r(\\ce{O}) = 15.999\\text{ g/mol}$
• Prioritas Cahn-Ingold-Prelog (CIP): ditentukan oleh nomor atom tertinggi dari atom yang terikat langsung`,
      };
    }

    // 10. Default Stoikiometri / Gas Ideal Umum
    const hasBaCO3 = currentQuestion.id === 101 || combined.includes('baco3');
    return {
      title: 'Tetapan Kimia & Nilai Acuan Standar:',
      content: hasBaCO3
        ? `• Tetapan gas: $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$
• Massa molar: $M_r(\\ce{BaCO3}) = 197.34\\text{ g/mol}$
• Suhu standar: $T = 25^\\circ\\text{C} = 298.15\\text{ K}$`
        : `• Tetapan gas: $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$
• Bilangan Avogadro: $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$
• Kondisi STP: $V_m = 22.4\\text{ L/mol}\\ (0^\\circ\\text{C}, 1\\text{ atm})$
• Kondisi standar RTP: $25^\\circ\\text{C} = 298.15\\text{ K},\\ 1\\text{ atm} = 760\\text{ mmHg}$`,
    };
  }, [currentQuestion]);

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
        evaluations: evaluationsRef.current,
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

      // Perbarui status pengerjaan secara global
      studentWorksheetService.markWorksheetStarted({
        type,
        id: id || '1',
        token: liveToken,
        studentId,
      });

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
          if (parsed.evaluations && typeof parsed.evaluations === 'object') {
            setEvaluations((prev) => ({ ...prev, ...parsed.evaluations }));
            evaluationsRef.current = { ...evaluationsRef.current, ...parsed.evaluations };
          }
          if (typeof parsed.elapsedSeconds === 'number' && parsed.elapsedSeconds > 0) {
            setElapsedSeconds(parsed.elapsedSeconds);
            elapsedSecondsRef.current = parsed.elapsedSeconds;
          }
          if (!hasRestoredQIndexRef.current && typeof parsed.currentQIndex === 'number' && parsed.currentQIndex >= 0) {
            setCurrentQIndex(parsed.currentQIndex);
            hasRestoredQIndexRef.current = true;
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
                if (cloudDraft.evaluations && typeof cloudDraft.evaluations === 'object') {
                  setEvaluations((prev) => ({ ...prev, ...cloudDraft.evaluations }));
                  evaluationsRef.current = { ...evaluationsRef.current, ...cloudDraft.evaluations };
                }
                if (typeof cloudDraft.elapsedSeconds === 'number' && cloudDraft.elapsedSeconds > 0) {
                  setElapsedSeconds(cloudDraft.elapsedSeconds);
                  elapsedSecondsRef.current = cloudDraft.elapsedSeconds;
                }
                if (!hasRestoredQIndexRef.current && typeof cloudDraft.currentQIndex === 'number' && cloudDraft.currentQIndex >= 0) {
                  setCurrentQIndex(cloudDraft.currentQIndex);
                  hasRestoredQIndexRef.current = true;
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

  // Auto-save on page exit / refresh / switching browser tabs (visibilitychange)
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveProgress();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        saveProgress();
        if (type && id) {
          studentWorksheetService.setActiveSession({
            url: `/worksheet/${type}/${id}`,
            type,
            id,
            title: currentWorksheetTitle,
            currentQIndex: currentQIndexRef.current,
            totalQuestions: questionsList.length,
            lastActiveAt: Date.now(),
            studentId,
          });
        }
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [storageDraftKey, currentWorksheetTitle, type, id, questionsList.length, studentId]);

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
    const hasSteps = Boolean(currentStepValue.trim());
    const hasFinal = Boolean(currentFinalAnswer.trim());
    const scaffoldAnalysis = analyzeScaffoldWork(currentStepValue);

    // Proteksi anti-abuse frontend: cegah submit jika hanya menyisipkan template kerangka kosong
    if (scaffoldAnalysis.isCompletelyUnfilled && !hasFinal) {
      setEvaluationError(
        'Kerangka 4 Langkah terdeteksi belum diisi (masih berupa template kosong dengan placeholder `....`). Harap isi titik-titik dengan angka dan penurunan rumus nyata sebelum meminta evaluasi.'
      );
      return;
    }

    if (!hasSteps && !hasFinal) {
      setEvaluationError('Silakan masukkan jawaban Anda (tuliskan langkah pengerjaan atau isi jawaban akhir) terlebih dahulu.');
      return;
    }

    setIsEvaluating(true);
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
        studentWorkSteps: currentStepValue.trim() || `(Jawaban langsung: ${currentFinalAnswer.trim()})`,
        studentFinalAnswer: currentFinalAnswer.trim(),
        elapsedSeconds,
        maxPoints: 10,
      });

      clearTimeout(t1);
      clearTimeout(t2);
      setEvaluationStage('idle');
      setIsEvaluating(false);

      const updatedEvaluations = {
        ...evaluationsRef.current,
        [currentQIndex]: result,
      };
      setEvaluations(updatedEvaluations);
      evaluationsRef.current = updatedEvaluations;
      addXpLocally(result.xpAwarded);

      // Simpan evaluasi dan jawaban terbaru ke draft lokal & realtime
      saveProgress(answersRef.current, currentQIndex);

      // Milestone 3: Auto-Save evaluasi pengerjaan ke Portofolio Siswa (Supabase + Local Cache)
      try {
        await saveWorksheetSubmission({
          userId: studentId,
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

        // Periksa apakah seluruh butir soal dalam worksheet sudah selesai dinilai
        const totalCount = questionsList.length;
        const allCompleted =
          totalCount > 0 &&
          questionsList.every((_, idx) => {
            return Boolean(updatedEvaluations[idx]);
          });

        if (allCompleted) {
          const sumScore = questionsList.reduce((acc, _, idx) => {
            const ev = updatedEvaluations[idx];
            return acc + (ev?.totalScore || 0);
          }, 0);
          const avgScore = Math.round(sumScore / totalCount);

          studentWorksheetService.markWorksheetCompleted({
            type,
            id: id || '1',
            token: liveToken,
            studentId,
            score: avgScore,
            maxScore: 10,
          });
        } else {
          studentWorksheetService.markWorksheetStarted({
            type,
            id: id || '1',
            token: liveToken,
            studentId,
          });
        }
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
      className={`flex flex-col bg-[#F0F8FF] ${
        isZenMode
          ? 'fixed inset-0 z-50 bg-[#FFFFF0] overflow-y-auto'
          : 'h-full w-full max-w-7xl mx-auto overflow-hidden border-x border-[#D3D3D3] shadow-xs'
      }`}
    >
      {/* Top Header Bar */}
      <div className="bg-[#FFFFF0] border-b border-[#D3D3D3] px-3 sm:px-6 py-2.5 flex flex-col gap-2 shadow-2xs shrink-0">
        {/* Row 1: Nav, Topic Title, & Question Stepper */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {!isZenMode && (
              <button
                onClick={() => navigate('/worksheet')}
                className="p-1.5 text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF] rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0 cursor-pointer"
                title="Kembali ke Dashboard Worksheet"
              >
                <ArrowLeft className="w-4 h-4 text-[#708090]" />
                <span className="hidden md:inline">Dashboard Worksheet</span>
              </button>
            )}

            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="px-2 py-0.5 bg-[#B0C4DE]/30 text-[#708090] border border-[#B0C4DE]/60 font-bold text-[10px] rounded uppercase font-mono shrink-0">
                {type === 'practice'
                  ? questionsList.length === 1
                    ? 'Latihan 1 Soal Mandiri'
                    : `Latihan Pilihan (${questionsList.length} Soal)`
                  : liveToken
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
              <h1 className="text-xs sm:text-sm font-bold text-[#2D3748] font-display truncate max-w-[200px] lg:max-w-md hidden sm:inline" title={currentQuestion.title || `Topik #${currentQuestion.pillar_number}: ${currentQuestion.subtopic}`}>
                {currentQuestion.title || `T#${currentQuestion.pillar_number}: ${currentQuestion.subtopic}`}
              </h1>
            </div>
          </div>

          {/* Question Stepper Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-0.5 min-w-0 max-w-xs sm:max-w-sm md:max-w-md">
            {questionsList.map((q, idx) => {
              const isAnswered = Boolean(answers[idx]?.steps?.trim());
              const isGraded = Boolean(evaluations[idx]);
              const qEval = evaluations[idx];
              const isCurrent = idx === currentQIndex;

              return (
                <button
                  key={q.id || idx}
                  onClick={() => {
                    hasRestoredQIndexRef.current = true;
                    setCurrentQIndex(idx);
                    setEvaluationError(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg font-semibold text-xs transition-all flex items-center gap-1 shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#708090] text-[#FFFFF0] shadow-2xs font-bold ring-2 ring-[#B0C4DE]'
                      : isGraded
                      ? 'bg-[#B0C4DE]/35 text-[#708090] border border-[#B0C4DE]/80 hover:bg-[#B0C4DE]/50'
                      : isAnswered
                      ? 'bg-[#B0C4DE]/20 text-[#708090] border border-[#B0C4DE]/40 hover:bg-[#B0C4DE]/30'
                      : 'bg-[#FFFFF0] text-[#708090] hover:bg-[#F0F8FF] border border-[#D3D3D3]'
                  }`}
                  title={`Soal #${idx + 1}: ${q.title || q.subtopic || ''}${isGraded ? ` (Dinilai: ${qEval.totalScore}/${qEval.maxScore || 10})` : ''}`}
                >
                  <span className="text-[10px] opacity-75 font-mono">#{idx + 1}</span>
                  {isGraded ? (
                    <span className="text-[10px] font-bold text-[#FFFFF0] bg-[#708090] px-1 rounded">
                      {qEval.totalScore}p
                    </span>
                  ) : isAnswered ? (
                    <Check className="w-3 h-3 text-[#708090]" />
                  ) : null}
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

            {/* Status Penilaian Worksheet */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border shadow-2xs ${
                isAllWorksheetCompleted
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : gradedQuestionsCount > 0
                  ? 'bg-sky-50 text-sky-800 border-sky-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
              title="Status Penilaian Seluruh Butir Soal"
            >
              <span className={`w-2 h-2 rounded-full ${isAllWorksheetCompleted ? 'bg-emerald-500' : gradedQuestionsCount > 0 ? 'bg-sky-500' : 'bg-slate-400'}`}></span>
              <span>
                {isAllWorksheetCompleted
                  ? 'Selesai Dinilai'
                  : gradedQuestionsCount > 0
                  ? `${gradedQuestionsCount}/${questionsList.length} Dinilai`
                  : 'Belum Dinilai'}
              </span>
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

        {/* Row 3 (Khusus Layar HP & Tablet Portrait: lg:hidden) - Segmented Switch Soal vs Lembar Jawaban */}
        <div className="lg:hidden flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveMobilePane('question')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeMobilePane === 'question'
                ? 'bg-white text-sky-800 shadow-xs border border-slate-200/80 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>Naskah Soal #{currentQIndex + 1}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMobilePane('editor')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeMobilePane === 'editor'
                ? 'bg-white text-emerald-800 shadow-xs border border-slate-200/80 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Lembar Jawaban {answers[currentQIndex]?.steps?.trim() ? '✓' : ''}</span>
          </button>
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

      {/* Completed Worksheet Notification Banner */}
      {isAllWorksheetCompleted && (
        <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 flex items-center justify-between text-xs text-emerald-950 animate-in fade-in shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
            <div>
              <span className="font-bold text-emerald-900">Worksheet Selesai:</span>{' '}
              Seluruh {questionsList.length} butir soal telah berhasil dinilai guru / evaluasi AI. Status lembar kerja ini telah tersimpan sebagai <strong>Selesai</strong>.
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/worksheet')}
            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors text-[11px] shrink-0 cursor-pointer"
          >
            Lihat Rekap Worksheet
          </button>
        </div>
      )}

      {/* Synchronized Side-by-Side Dual-Panel Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-w-0">
        {/* PANEL KIRI: Naskah Soal & Informasi (Lebar 38% di Desktop - Independent Scroll) */}
        <div className={`w-full lg:w-[40%] xl:w-[38%] h-full bg-[#FFFFF0] border-b lg:border-b-0 lg:border-r border-[#D3D3D3] flex-col overflow-y-auto p-4 sm:p-5 space-y-4 shrink-0 min-w-0 ${
          activeMobilePane === 'question' ? 'flex' : 'hidden lg:flex'
        }`}>
          {/* Question Metadata Header */}
          <div className="flex items-center justify-between border-b border-[#D3D3D3]/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#708090] text-[#FFFFF0] text-xs font-bold rounded font-mono">
                No. {currentQIndex + 1}
              </span>
              <span className="px-2 py-0.5 bg-[#B0C4DE]/30 border border-[#B0C4DE]/60 text-[#708090] text-xs font-bold rounded">
                Tingkat {currentQuestion.difficulty}
              </span>
            </div>

            <span className="text-xs font-bold text-[#708090] bg-[#B0C4DE]/25 px-2.5 py-0.5 rounded-full border border-[#B0C4DE]/50">
              Bobot: 10.0 Poin
            </span>
          </div>

          {/* Question Title */}
          <h2 className="text-base sm:text-lg font-bold text-[#2D3748] font-display">
            {currentQuestion.title}
          </h2>

          {/* Question Text with KaTeX and Virtual Teacher Laser & Highlight Overlay (Tinggi Diperbesar 3x ke Bawah) */}
          <div className="rounded-2xl border border-[#D3D3D3] bg-[#F0F8FF]/50 shadow-2xs overflow-x-auto overflow-y-auto min-h-[500px] sm:min-h-[560px] max-h-[78vh] flex flex-col">
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

              {/* Diagram Kimia / Kurva Tersemat dari Cloudflare R2 */}
              {currentQuestion.diagram_url && (
                <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-indigo-900">
                      <ImageIcon className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Diagram & Visualisasi Soal:</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsDiagramModalOpen(true)}
                      className="inline-flex items-center gap-1 text-[11px] text-sky-600 hover:text-sky-800 font-bold hover:underline cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Perbesar Diagram</span>
                    </button>
                  </div>
                  <div
                    onClick={() => setIsDiagramModalOpen(true)}
                    className="relative group rounded-xl border border-slate-200 bg-white p-2.5 flex items-center justify-center overflow-hidden cursor-zoom-in hover:border-sky-400 transition-all shadow-xs"
                    title="Klik untuk memperbesar diagram kimia"
                  >
                    <img
                      src={currentQuestion.diagram_url}
                      alt={currentQuestion.title || 'Diagram Soal'}
                      className="max-h-64 sm:max-h-72 object-contain rounded transition-transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold rounded-xl">
                      <Maximize2 className="w-4 h-4" />
                      <span>Klik untuk Memperbesar Detail</span>
                    </div>
                  </div>
                </div>
              )}
            </ScaledDocumentCanvas>
          </div>

          {/* Useful Constants Quick Box (Dinamis Menyesuaikan Topik Soal) */}
          {supportingData && (
            <div className="p-3.5 bg-amber-50/50 border border-amber-200/80 rounded-xl space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Info className="w-4 h-4 text-amber-600" />
                <span>{supportingData.title}</span>
              </div>
              <div className="text-amber-900 leading-relaxed text-[11px]">
                <KaTeXRenderer content={supportingData.content} />
              </div>
            </div>
          )}

          {/* Pelajari Konsep Terkait (Database Materi) */}
          {relatedConceptsData && (
            <div className="p-4 bg-sky-50/60 border border-sky-200/80 rounded-2xl space-y-3 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-sky-950 text-xs block">
                      Pelajari Konsep Terkait (Database Materi):
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {relatedConceptsData.subtopicName || relatedConceptsData.mainModuleTitle}
                    </span>
                  </div>
                </div>

                {/* Tautan Utama ke Modul Teori Lengkap */}
                <a
                  href={relatedConceptsData.mainModuleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200 shadow-2xs transition-all hover:scale-102 shrink-0 group"
                  title={`Buka modul teori lengkap ${relatedConceptsData.mainModuleTitle} di tab baru`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Buka {relatedConceptsData.mainBadgeLabel}</span>
                  <ExternalLink className="w-3 h-3 text-sky-500 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Daftar Chip Konsep Spesifik */}
              {relatedConceptsData.chips.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-sky-100">
                  <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider mr-1">
                    Fokus Materi:
                  </span>
                  {relatedConceptsData.chips.map((chip) => (
                    <a
                      key={chip.tag}
                      href={chip.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-sky-100 text-sky-900 text-[11px] font-medium rounded-lg border border-sky-200 transition-all shadow-2xs hover:border-sky-400 group"
                      title={chip.summary || `Pelajari teori konsep ${chip.label} di tab baru`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:bg-sky-700" />
                      <span className="font-semibold">{chip.label}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-sky-400 group-hover:text-sky-600" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* PANEL KANAN: Tempat Pengerjaan & Live Preview (Lebar 62% di Desktop - Independent Scroll) */}
        <div className={`w-full lg:w-[60%] xl:w-[62%] h-full bg-slate-50 flex-col overflow-y-auto min-w-0 ${
          activeMobilePane === 'editor' ? 'flex' : 'hidden lg:flex'
        }`}>
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
            <div className="bg-[#FFFFF0] p-4 rounded-xl border border-[#D3D3D3] shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-[#2D3748] uppercase tracking-wider">
                  Jawaban Akhir / Opsi Jawaban:
                </label>
                {(currentQuestion.question_style === 'mcq' ||
                  /^[A-E]$/i.test(currentQuestion.expected_final_answer?.trim() || '')) && (
                  <span className="text-[10px] font-bold text-[#708090] bg-[#B0C4DE]/30 px-2 py-0.5 rounded-md border border-[#B0C4DE]/60 font-mono">
                    PILIHAN GANDA
                  </span>
                )}
              </div>

              {/* Quick Choice Buttons for Multiple Choice Questions */}
              {(currentQuestion.question_style === 'mcq' ||
                /^[A-E]$/i.test(currentQuestion.expected_final_answer?.trim() || '')) && (
                <div className="flex items-center gap-2 pt-0.5 pb-1">
                  <span className="text-xs font-semibold text-[#708090] mr-1">Pilih Opsi:</span>
                  {['A', 'B', 'C', 'D', 'E'].map((opt) => {
                    const isSelected = currentFinalAnswer.trim().toUpperCase() === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleFinalAnswerChange(opt)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold font-mono transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#708090] text-[#FFFFF0] border-[#708090] shadow-sm scale-105 ring-2 ring-[#B0C4DE]'
                            : 'bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border-[#D3D3D3]'
                        }`}
                        title={`Pilih opsi ${opt}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={currentFinalAnswer}
                  onChange={(e) => handleFinalAnswerChange(e.target.value)}
                  placeholder={
                    currentQuestion.question_style === 'mcq' ||
                    /^[A-E]$/i.test(currentQuestion.expected_final_answer?.trim() || '')
                      ? 'Ketik atau klik opsi jawaban (A / B / C / D / E)'
                      : 'Contoh: X_CH4 = 0.50 atau \\ce{CH3COOH}'
                  }
                  className="flex-1 px-3 py-2 text-xs sm:text-sm font-mono font-medium text-[#2D3748] bg-[#FFFFF0] border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0C4DE]/40 focus:border-[#708090]"
                />

                {currentFinalAnswer && (
                  <div className="px-3 py-1.5 bg-[#B0C4DE]/25 border border-[#B0C4DE]/60 rounded-lg text-xs font-semibold text-[#708090] flex items-center shrink-0">
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
                      hasRestoredQIndexRef.current = true;
                      setCurrentQIndex(currentQIndex - 1);
                      setEvaluationError(null);
                    }
                  }}
                  disabled={currentQIndex === 0}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3] rounded-lg text-xs font-semibold transition-all disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Soal Sebelumnya</span>
                </button>
                <button
                  onClick={() => {
                    if (currentQIndex < questionsList.length - 1) {
                      hasRestoredQIndexRef.current = true;
                      setCurrentQIndex(currentQIndex + 1);
                      setEvaluationError(null);
                    }
                  }}
                  disabled={currentQIndex === questionsList.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3] rounded-lg text-xs font-semibold transition-all disabled:opacity-40 cursor-pointer"
                >
                  <span>Soal Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Stage Text, Manual Save Button, and AI Evaluate Button */}
              <div className="flex items-center gap-2.5">
                {isEvaluating && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#B0C4DE]/20 border border-[#B0C4DE]/50 rounded-xl text-xs text-[#708090] font-medium animate-pulse">
                    <span className="w-3.5 h-3.5 border-2 border-[#708090] border-t-transparent rounded-full animate-spin" />
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FFFFF0] hover:bg-[#F0F8FF] text-[#708090] border border-[#D3D3D3] rounded-xl text-xs font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer"
                  title="Simpan lembar kerja ke cloud Supabase agar progres tersimpan aman"
                >
                  {isSaveSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-[#708090]" />
                      <span className="text-[#708090] font-bold">Tersimpan Online!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 text-[#708090]" />
                      <span>Simpan Progress</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleEvaluate}
                  disabled={isEvaluating}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#708090] hover:bg-[#5C6D7D] text-[#FFFFF0] font-bold text-xs rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-50 active:scale-98 cursor-pointer border border-[#708090]"
                  title="Evaluasi jawaban Anda dengan AI"
                >
                  {isEvaluating ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sedang Mengevaluasi...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#FFFFF0]" />
                      <span>Evaluasi Jawaban</span>
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
                        setEvaluations((prev) => {
                          const next = { ...prev };
                          delete next[currentQIndex];
                          return next;
                        });
                        evaluationsRef.current = { ...evaluationsRef.current };
                        delete evaluationsRef.current[currentQIndex];
                        if (textareaRef.current) textareaRef.current.focus();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Perbaiki & Coba Lagi</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate('/profile')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold rounded-lg border border-sky-200 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      <span>Analisis Radar di Profil</span>
                    </button>

                    {currentQIndex < questionsList.length - 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          hasRestoredQIndexRef.current = true;
                          setCurrentQIndex(currentQIndex + 1);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors shadow-2xs cursor-pointer"
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

      {/* Cloudflare R2 Diagram Viewer Modal (Zoom & Rotation) */}
      {currentQuestion.diagram_url && (
        <DiagramViewerModal
          isOpen={isDiagramModalOpen}
          onClose={() => setIsDiagramModalOpen(false)}
          imageUrl={currentQuestion.diagram_url}
          title={currentQuestion.title || `Diagram Soal #${currentQIndex + 1}`}
          caption={`Topik #${currentQuestion.pillar_number}: ${currentQuestion.subtopic}`}
        />
      )}

      {/* Floating Quick Action Button khusus di Layar HP/Tablet Portrait (lg:hidden) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-30">
        {activeMobilePane === 'question' ? (
          <button
            type="button"
            onClick={() => setActiveMobilePane('editor')}
            className="px-4 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-xl shadow-sky-600/30 flex items-center gap-2 active:scale-95 transition cursor-pointer border border-white/20"
            title="Buka Lembar Jawaban untuk mengetik penyelesaian"
          >
            <Edit3 className="w-4 h-4 text-emerald-300" />
            <span>Tulis Jawaban ✏️</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setActiveMobilePane('question')}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-2 active:scale-95 transition cursor-pointer border border-slate-700"
            title="Kembali membaca naskah soal lengkap"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Baca Soal 📄</span>
          </button>
        )}
      </div>

    </div>
  );
};
