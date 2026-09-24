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
import { getSupabaseClient, DEFAULT_STUDENT_ID } from '../lib/supabaseClient';
import { PILLARS_DATA } from '../data/syllabusData';

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
 * Mengambil seluruh riwayat pengerjaan siswa
 */
export function getSubmissionHistory(userId?: string): SavedSubmissionRecord[] {
  const localList = getLocalSubmissions();
  // Urutkan berdasarkan tanggal terbaru
  return localList
    .filter((item) => !userId || item.userId === userId || item.userId === DEFAULT_STUDENT_ID)
    .sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime());
}

/**
 * Mengambil & menyinkronkan riwayat pengerjaan siswa dari Supabase Cloud
 */
export async function syncSubmissionsFromCloud(userId?: string): Promise<SavedSubmissionRecord[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return getSubmissionHistory(userId);

  try {
    let query = supabase.from('worksheet_submissions').select('*');
    if (userId && userId !== DEFAULT_STUDENT_ID) {
      query = query.or(`user_id.eq.${userId},user_id.eq.${DEFAULT_STUDENT_ID}`);
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
      return merged.filter((item) => !userId || item.userId === userId || item.userId === DEFAULT_STUDENT_ID);
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
