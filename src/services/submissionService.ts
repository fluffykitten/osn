/**
 * submissionService.ts
 * Layanan Persistensi Riwayat Pengerjaan & Kalkulasi Penguasaan 10 Topik Silabus OSN Kimia
 * Arsitektur: Hybrid Cloud (Supabase) + Resilient Local Storage Cache
 */

import type {
  GradingResponse,
  SavedSubmissionRecord,
  PillarMasteryScore,
} from '../types/database';

export type { SavedSubmissionRecord, PillarMasteryScore, GradingResponse };
import { getSupabaseClient, DEFAULT_STUDENT_ID } from '../lib/supabaseClient';
import { PILLARS_DATA } from '../data/syllabusData';
import { awardXp } from './gamificationService';

const SUBMISSIONS_STORAGE_KEY = 'osn_student_submissions';

export interface SaveSubmissionPayload {
  userId?: string;
  questionId: number;
  questionTitle: string;
  pillarNumber: number;
  subtopic: string;
  studentWorkSteps: string;
  studentFinalAnswer: string;
  gradingResponse: GradingResponse;
  elapsedSeconds: number;
}

export interface SavePendingSubmissionPayload {
  userId?: string;
  questionId: number;
  questionTitle: string;
  pillarNumber: number;
  subtopic: string;
  studentWorkSteps: string;
  studentFinalAnswer: string;
  elapsedSeconds: number;
  maxPoints?: number;
}

export interface TeacherGradePayload {
  submissionId: string;
  score?: number;
  totalScore?: number;
  maxScore?: number;
  teacherFeedback: string;
  teacherId: string;
  teacherName: string;
  studentId?: string;
  questionTitle?: string;
}

// 10 Nama Baku Topik Silabus OSN Kimia Puspresnas
const PILLAR_NAMES: Record<number, { title: string; short: string }> = {
  1: { title: 'Struktur Atom & Periodisitas Unsur', short: 'T1: Atom' },
  2: { title: 'Ikatan Kimia & Geometri Molekul', short: 'T2: Ikatan' },
  3: { title: 'Stoikiometri & Wujud Zat', short: 'T3: Stoikio' },
  4: { title: 'Termodinamika Kimia & Termokimia', short: 'T4: Termo' },
  5: { title: 'Kesetimbangan Kimia Fasa & Larutan', short: 'T5: Setimbang' },
  6: { title: 'Kinetika Kimia & Mekanisme Reaksi', short: 'T6: Kinetika' },
  7: { title: 'Elektrokimia & Potensial Sel', short: 'T7: Elektro' },
  8: { title: 'Kimia Anorganik & Kompleks Logam Transisi', short: 'T8: Anorganik' },
  9: { title: 'Kimia Analitik, Titrasi, & Spektrofotometri', short: 'T9: Analitik' },
  10: { title: 'Kimia Organik & Biokimia', short: 'T10: Organik' },
};

/**
 * Menyimpan hasil evaluasi pengerjaan lembar kerja siswa
 * (Otomatis disimpan ke Local Storage dan disinkronkan ke Supabase jika aktif)
 */
export async function saveWorksheetSubmission(
  payload: SaveSubmissionPayload
): Promise<SavedSubmissionRecord> {
  const userId = payload.userId || DEFAULT_STUDENT_ID;
  const { gradingResponse, elapsedSeconds } = payload;

  const totalScore = gradingResponse.totalScore;
  const maxScore = gradingResponse.maxScore || 10;
  const scorePercentage = Math.round((totalScore / maxScore) * 100);

  const submissionId = `sub-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

  const newRecord: SavedSubmissionRecord = {
    id: submissionId,
    userId,
    questionId: payload.questionId,
    questionTitle: payload.questionTitle,
    pillarNumber: payload.pillarNumber,
    subtopic: payload.subtopic,
    studentWorkSteps: payload.studentWorkSteps,
    studentFinalAnswer: payload.studentFinalAnswer,
    totalScore,
    maxScore,
    scorePercentage,
    status: gradingResponse.status,
    criteriaBreakdown: gradingResponse.criteriaBreakdown || [],
    overallFeedback: gradingResponse.overallFeedback,
    strengths: gradingResponse.strengths || [],
    missingOrIncorrectPoints: gradingResponse.missingOrIncorrectPoints || [],
    misconceptionDiagnosis: gradingResponse.misconceptionDiagnosis,
    suggestedReviewTopic: gradingResponse.suggestedReviewTopic,
    xpAwarded: gradingResponse.xpAwarded,
    confidenceScore: gradingResponse.confidenceScore,
    elapsedSeconds: elapsedSeconds || gradingResponse.elapsedSeconds || 0,
    gradedAt: gradingResponse.gradedAt || new Date().toISOString(),
    modelUsed: gradingResponse.modelUsed,
    is_graded: true,
    grading_type: 'ai',
    syncedToCloud: false,
  };

  // 1. Simpan ke Local Storage Cache terlebih dahulu (Reliability first)
  const existing = getLocalSubmissions();
  // Filter duplikasi jika submission dengan ID yang sama ada
  const updatedList = [newRecord, ...existing.filter((item) => item.id !== newRecord.id)];
  saveLocalSubmissions(updatedList);

  // 2. Coba sinkronisasi ke Supabase jika koneksi tersedia
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error } = await supabase.from('worksheet_submissions').insert([
        {
          id: newRecord.id,
          user_id: newRecord.userId,
          question_id: newRecord.questionId,
          pillar_number: newRecord.pillarNumber,
          subtopic: newRecord.subtopic,
          total_score: newRecord.totalScore,
          max_score: newRecord.maxScore,
          status: newRecord.status,
          elapsed_seconds: newRecord.elapsedSeconds,
          model_used: newRecord.modelUsed,
          criteria_breakdown: newRecord.criteriaBreakdown,
          strengths: newRecord.strengths,
          missing_points: newRecord.missingOrIncorrectPoints,
          misconception_diagnosis: newRecord.misconceptionDiagnosis,
          overall_feedback: newRecord.overallFeedback,
          student_work_steps: newRecord.studentWorkSteps,
          student_final_answer: newRecord.studentFinalAnswer,
          created_at: newRecord.gradedAt,
        },
      ]);

      if (!error) {
        newRecord.syncedToCloud = true;
        // Update status synced di local storage
        const syncedList = updatedList.map((item) =>
          item.id === newRecord.id ? { ...item, syncedToCloud: true } : item
        );
        saveLocalSubmissions(syncedList);
      } else {
        console.info('Penyimpanan lokal sukses (Tabel Supabase belum diinisialisasi atau offline):', error.message);
      }
    } catch (dbErr: any) {
      console.warn('Gagal sinkronisasi Supabase, pengerjaan tetap aman di cache lokal:', dbErr?.message);
    }
  }

  return newRecord;
}

/**
 * Menyimpan pengerjaan lembar kerja siswa tanpa evaluasi AI (Menunggu Penilaian Manual Guru)
 */
export async function savePendingWorksheetSubmission(
  payload: SavePendingSubmissionPayload
): Promise<SavedSubmissionRecord> {
  const userId = payload.userId || DEFAULT_STUDENT_ID;
  const maxScore = payload.maxPoints || 10;
  const submissionId = `sub-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const newRecord: SavedSubmissionRecord = {
    id: submissionId,
    userId,
    questionId: payload.questionId,
    questionTitle: payload.questionTitle,
    pillarNumber: payload.pillarNumber,
    subtopic: payload.subtopic,
    studentWorkSteps: payload.studentWorkSteps,
    studentFinalAnswer: payload.studentFinalAnswer,
    totalScore: 0,
    maxScore,
    scorePercentage: 0,
    status: 'pending_review',
    is_graded: false,
    grading_type: 'manual',
    criteriaBreakdown: [],
    overallFeedback: 'Jawaban telah dikirim dan sedang menunggu penilaian manual dari Guru Pembina.',
    strengths: [],
    missingOrIncorrectPoints: [],
    xpAwarded: 0,
    confidenceScore: 1.0,
    elapsedSeconds: payload.elapsedSeconds || 0,
    gradedAt: now,
    syncedToCloud: false,
  };

  // 1. Simpan ke Local Storage Cache
  const existing = getLocalSubmissions();
  const updatedList = [newRecord, ...existing.filter((item) => item.id !== newRecord.id)];
  saveLocalSubmissions(updatedList);

  // 2. Simpan ke Supabase jika tersedia
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error } = await supabase.from('worksheet_submissions').insert([
        {
          id: newRecord.id,
          user_id: newRecord.userId,
          question_id: newRecord.questionId,
          pillar_number: newRecord.pillarNumber,
          subtopic: newRecord.subtopic,
          total_score: 0,
          max_score: newRecord.maxScore,
          status: 'pending_review',
          is_graded: false,
          grading_type: 'manual',
          elapsed_seconds: newRecord.elapsedSeconds,
          overall_feedback: newRecord.overallFeedback,
          student_work_steps: newRecord.studentWorkSteps,
          student_final_answer: newRecord.studentFinalAnswer,
          created_at: newRecord.gradedAt,
        },
      ]);
      if (!error) {
        newRecord.syncedToCloud = true;
        const syncedList = updatedList.map((item) =>
          item.id === newRecord.id ? { ...item, syncedToCloud: true } : item
        );
        saveLocalSubmissions(syncedList);
      }
    } catch (e: any) {
      console.warn('Gagal simpan pending submission ke cloud:', e?.message);
    }
  }

  return newRecord;
}

/**
 * Menyimpan nilai dan umpan balik manual dari Guru Pembina (SpeedGrader)
 */
export async function teacherGradeSubmission(
  payload: TeacherGradePayload
): Promise<SavedSubmissionRecord | null> {
  const localList = getLocalSubmissions();
  const index = localList.findIndex((item) => item.id === payload.submissionId);
  const now = new Date().toISOString();

  let targetRecord: SavedSubmissionRecord;
  const maxScore = payload.maxScore || (index !== -1 ? localList[index].maxScore : 10);
  const rawScore = payload.totalScore !== undefined ? payload.totalScore : (payload.score ?? 0);
  const clampedScore = Math.max(0, Math.min(rawScore, maxScore));
  const scorePct = Math.round((clampedScore / maxScore) * 100);
  const status: 'perfect' | 'partial_correct' | 'incorrect' =
    scorePct >= 95 ? 'perfect' : scorePct >= 60 ? 'partial_correct' : 'incorrect';
  const xpAwarded = Math.round(clampedScore * 10);

  if (index !== -1) {
    targetRecord = {
      ...localList[index],
      totalScore: clampedScore,
      maxScore,
      scorePercentage: scorePct,
      status,
      is_graded: true,
      grading_type: 'manual',
      teacher_feedback: payload.teacherFeedback,
      graded_by_teacher_id: payload.teacherId,
      graded_by_teacher_name: payload.teacherName,
      gradedAt: now,
      overallFeedback: payload.teacherFeedback || 'Telah dinilai oleh Guru Pembina.',
      xpAwarded,
    };
    localList[index] = targetRecord;
    saveLocalSubmissions(localList);
  } else {
    targetRecord = {
      id: payload.submissionId,
      userId: DEFAULT_STUDENT_ID,
      questionId: 0,
      questionTitle: 'Soal Evaluasi Guru',
      pillarNumber: 1,
      subtopic: 'Kimia',
      studentWorkSteps: '',
      studentFinalAnswer: '',
      totalScore: clampedScore,
      maxScore,
      scorePercentage: scorePct,
      status,
      is_graded: true,
      grading_type: 'manual',
      teacher_feedback: payload.teacherFeedback,
      graded_by_teacher_id: payload.teacherId,
      graded_by_teacher_name: payload.teacherName,
      gradedAt: now,
      overallFeedback: payload.teacherFeedback,
      criteriaBreakdown: [],
      strengths: [],
      missingOrIncorrectPoints: [],
      xpAwarded,
      confidenceScore: 1.0,
      elapsedSeconds: 0,
      syncedToCloud: false,
    };
  }

  // Sync update to Supabase
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      await supabase
        .from('worksheet_submissions')
        .update({
          total_score: clampedScore,
          max_score: maxScore,
          status,
          is_graded: true,
          grading_type: 'manual',
          teacher_feedback: payload.teacherFeedback,
          graded_by_teacher_id: payload.teacherId,
          graded_by_teacher_name: payload.teacherName,
          overall_feedback: payload.teacherFeedback,
          xp_awarded: xpAwarded,
        })
        .eq('id', payload.submissionId);

      // Siarkan ke kanal real-time siswa
      if (targetRecord.userId) {
        const studentRoom = supabase.channel(`room:student:${targetRecord.userId}`);
        studentRoom.send({
          type: 'broadcast',
          event: 'teacher_grade_published',
          payload: {
            submissionId: payload.submissionId,
            studentId: targetRecord.userId,
            score: clampedScore,
            maxScore,
            teacherFeedback: payload.teacherFeedback,
            teacherName: payload.teacherName,
            questionTitle: targetRecord.questionTitle,
          },
        });
      }
    } catch (e: any) {
      console.warn('Gagal sinkronisasi nilai guru ke Supabase:', e?.message);
    }
  }

  // Berikan XP ke akun siswa
  if (targetRecord.userId && xpAwarded > 0) {
    awardXp(targetRecord.userId, xpAwarded, {
      reason: `Penilaian Guru: ${targetRecord.questionTitle}`,
    }).catch(() => {});
  }

  // Dispatch local in-browser event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('osn_teacher_grade_published', {
        detail: {
          submissionId: payload.submissionId,
          studentId: targetRecord.userId,
          score: clampedScore,
          maxScore,
          teacherFeedback: payload.teacherFeedback,
          teacherName: payload.teacherName,
          questionTitle: targetRecord.questionTitle,
        },
      })
    );
  }

  return targetRecord;
}

/**
 * Mengambil seluruh riwayat pengerjaan siswa
 * Terisolasi secara ketat berdasarkan userId siswa yang sedang aktif
 */
export function getSubmissionHistory(userId?: string): SavedSubmissionRecord[] {
  const localList = getLocalSubmissions();
  return localList
    .filter((item) => {
      if (!userId) return true;
      // Jika userId dispesifikasikan (misal akun terdaftar), ambil tepat milik userId tersebut
      if (userId === DEFAULT_STUDENT_ID) {
        return !item.userId || item.userId === DEFAULT_STUDENT_ID;
      }
      return item.userId === userId;
    })
    .sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime());
}

/**
 * Mengambil daftar seluruh penugasan yang masih berstatus 'pending_review' (Menunggu Penilaian Guru)
 */
export async function getPendingSubmissions(): Promise<SavedSubmissionRecord[]> {
  const localList = getLocalSubmissions().filter(
    (item) => item.status === 'pending_review' || item.is_graded === false
  );

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('worksheet_submissions')
        .select('*')
        .eq('is_graded', false)
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        const cloudPending: SavedSubmissionRecord[] = data.map((d: any) => ({
          id: d.id,
          userId: d.user_id,
          questionId: Number(d.question_id),
          questionTitle: d.subtopic || `Soal #${d.question_id}`,
          pillarNumber: Number(d.pillar_number),
          subtopic: d.subtopic || '',
          studentWorkSteps: d.student_work_steps || '',
          studentFinalAnswer: d.student_final_answer || '',
          totalScore: Number(d.total_score) || 0,
          maxScore: Number(d.max_score) || 10,
          scorePercentage: 0,
          status: 'pending_review',
          criteriaBreakdown: [],
          overallFeedback: d.overall_feedback || 'Menunggu pemeriksaan guru.',
          strengths: [],
          missingOrIncorrectPoints: [],
          xpAwarded: 0,
          confidenceScore: 1.0,
          elapsedSeconds: Number(d.elapsed_seconds) || 0,
          gradedAt: d.created_at || new Date().toISOString(),
          is_graded: false,
          grading_type: 'manual',
          syncedToCloud: true,
        }));

        const map = new Map<string, SavedSubmissionRecord>();
        localList.forEach((item) => map.set(item.id, item));
        cloudPending.forEach((item) => map.set(item.id, item));
        return Array.from(map.values()).sort(
          (a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime()
        );
      }
    } catch (e: any) {
      console.warn('Gagal memuat pending submissions dari Supabase:', e?.message);
    }
  }

  return localList.sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime());
}

/**
 * Mengambil & menyinkronkan riwayat pengerjaan siswa dari Supabase Cloud
 * Mengambil baris data yang strictly milik akun siswa yang sedang login
 */
export async function syncSubmissionsFromCloud(userId?: string): Promise<SavedSubmissionRecord[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return getSubmissionHistory(userId);

  try {
    let query = supabase.from('worksheet_submissions').select('*');
    if (userId) {
      query = query.eq('user_id', userId);
    }
    const { data, error } = await query;
    if (!error && data && data.length > 0) {
      const cloudRecords: SavedSubmissionRecord[] = data.map((d: any) => ({
        id: d.id,
        userId: d.user_id,
        questionId: Number(d.question_id),
        questionTitle: d.subtopic || `Soal #${d.question_id}`,
        pillarNumber: Number(d.pillar_number),
        subtopic: d.subtopic || '',
        studentWorkSteps: d.student_work_steps || '',
        studentFinalAnswer: d.student_final_answer || '',
        totalScore: Number(d.total_score),
        maxScore: Number(d.max_score) || 10,
        scorePercentage: Math.round((Number(d.total_score) / (Number(d.max_score) || 10)) * 100),
        status: d.status,
        criteriaBreakdown: d.criteria_breakdown || [],
        overallFeedback: d.overall_feedback || '',
        strengths: d.strengths || [],
        missingOrIncorrectPoints: d.missing_points || [],
        misconceptionDiagnosis: d.misconception_diagnosis,
        suggestedReviewTopic: d.suggested_review_topic,
        xpAwarded: d.xp_awarded || 0,
        confidenceScore: d.confidence_score || 0.9,
        elapsedSeconds: Number(d.elapsed_seconds) || 0,
        gradedAt: d.created_at || new Date().toISOString(),
        modelUsed: d.model_used,
        is_graded: Boolean(d.is_graded ?? (d.status !== 'pending_review')),
        grading_type: (d.grading_type as 'manual' | 'ai') || (d.model_used ? 'ai' : 'manual'),
        teacher_feedback: d.teacher_feedback || undefined,
        graded_by_teacher_id: d.graded_by_teacher_id || undefined,
        graded_by_teacher_name: d.graded_by_teacher_name || undefined,
        syncedToCloud: true,
      }));

      // Merge dengan Local Storage
      const local = getLocalSubmissions();
      const map = new Map<string, SavedSubmissionRecord>();
      local.forEach((item) => map.set(item.id, item));
      cloudRecords.forEach((item) => map.set(item.id, item));
      const merged = Array.from(map.values()).sort(
        (a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime()
      );
      saveLocalSubmissions(merged);
      return merged.filter((item) => {
        if (!userId) return true;
        if (userId === DEFAULT_STUDENT_ID) return !item.userId || item.userId === DEFAULT_STUDENT_ID;
        return item.userId === userId;
      });
    }
  } catch (err: any) {
    console.warn('Gagal sinkronisasi submissions dari cloud:', err?.message);
  }

  return getSubmissionHistory(userId);
}

/**
 * Menghitung skor penguasaan 10 Topik Silabus OSN Kimia secara matematis
 * Berdasarkan riwayat pengerjaan aktual siswa
 */
export function calculatePillarMastery(
  submissions?: SavedSubmissionRecord[]
): PillarMasteryScore[] {
  const allSubmissions = submissions || getSubmissionHistory();

  const masteryList: PillarMasteryScore[] = [];

  for (let pillarNum = 1; pillarNum <= 10; pillarNum++) {
    const pillarMeta = PILLAR_NAMES[pillarNum] || {
      title: `Topik ${pillarNum}`,
      short: `T${pillarNum}`,
    };

    const pillarSubmissions = allSubmissions.filter((s) => s.pillarNumber === pillarNum);

    if (pillarSubmissions.length === 0) {
      // Topik belum pernah dikerjakan
      masteryList.push({
        pillarNumber: pillarNum,
        pillarName: pillarMeta.title,
        shortName: pillarMeta.short,
        score: 0,
        submissionsCount: 0,
        masteryLevel: 'not_started',
      });
    } else {
      // Hitung rata-rata persentase skor topik
      const sumPercentage = pillarSubmissions.reduce((acc, curr) => acc + curr.scorePercentage, 0);
      const avgScore = Math.round(sumPercentage / pillarSubmissions.length);

      let masteryLevel: 'mastered' | 'developing' | 'needs_remedial' = 'developing';
      if (avgScore >= 80) {
        masteryLevel = 'mastered';
      } else if (avgScore < 50) {
        masteryLevel = 'needs_remedial';
      }

      const latestDate = pillarSubmissions[0]?.gradedAt;

      masteryList.push({
        pillarNumber: pillarNum,
        pillarName: pillarMeta.title,
        shortName: pillarMeta.short,
        score: avgScore,
        submissionsCount: pillarSubmissions.length,
        masteryLevel,
        lastEvaluatedAt: latestDate,
      });
    }
  }

  return masteryList;
}

/**
 * Helper: Ambil data dari LocalStorage dengan fallback data awal yang edukatif
 */
function getLocalSubmissions(): SavedSubmissionRecord[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as SavedSubmissionRecord[];
    // Bersihkan catatan dummy sub-baseline lama jika ada
    const filtered = parsed.filter((item) => item && !item.id?.startsWith('sub-baseline-'));
    if (filtered.length !== parsed.length) {
      localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(filtered));
    }
    return filtered;
  } catch (err) {
    console.error('Gagal membaca submission dari local storage:', err);
    return [];
  }
}

function saveLocalSubmissions(records: SavedSubmissionRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Gagal menyimpan submission ke local storage:', err);
  }
}

export interface QuestionAggregatedTelemetry {
  attempts: number;
  correctCount: number;
  wrongCount: number;
  successRate: number;
  avgScore: number;
  hasRealData: boolean;
}

/**
 * Mengambil telemetri pengerjaan aktual untuk sekumpulan butir soal sekaligus
 * Terhubung ke tabel Supabase worksheet_submissions dan cache lokal siswa
 */
export async function getBatchQuestionTelemetry(
  questionIds: number[]
): Promise<Map<number, QuestionAggregatedTelemetry>> {
  const result = new Map<number, QuestionAggregatedTelemetry>();
  const supabase = getSupabaseClient();
  let allSubs: Array<{ question_id: number; total_score: number; max_score: number }> = [];

  if (supabase && questionIds.length > 0) {
    try {
      const { data, error } = await supabase
        .from('worksheet_submissions')
        .select('question_id, total_score, max_score')
        .in('question_id', questionIds);
      if (!error && data && data.length > 0) {
        allSubs = data.map((d: any) => ({
          question_id: Number(d.question_id),
          total_score: Number(d.total_score),
          max_score: Number(d.max_score) || 10,
        }));
      }
    } catch {}
  }

  // Gabungkan dengan local submissions jika ada
  try {
    const local = getSubmissionHistory();
    local.forEach((s) => {
      if (questionIds.includes(s.questionId)) {
        allSubs.push({
          question_id: s.questionId,
          total_score: s.totalScore,
          max_score: s.maxScore || 10,
        });
      }
    });
  } catch {}

  questionIds.forEach((qId) => {
    const matched = allSubs.filter((s) => s.question_id === qId);
    if (matched.length === 0) {
      result.set(qId, {
        attempts: 0,
        correctCount: 0,
        wrongCount: 0,
        successRate: 0,
        avgScore: 0,
        hasRealData: false,
      });
    } else {
      const attempts = matched.length;
      let correct = 0;
      let sum = 0;
      matched.forEach((m) => {
        const pct = (m.total_score / m.max_score) * 100;
        if (pct >= 60) correct++;
        sum += m.total_score;
      });
      result.set(qId, {
        attempts,
        correctCount: correct,
        wrongCount: Math.max(0, attempts - correct),
        successRate: Math.round((correct / attempts) * 100),
        avgScore: Number((sum / attempts).toFixed(1)),
        hasRealData: true,
      });
    }
  });

  return result;
}

