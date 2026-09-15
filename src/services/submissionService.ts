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
export function getSubmissionHistory(userId: string = DEFAULT_STUDENT_ID): SavedSubmissionRecord[] {
  const localList = getLocalSubmissions();
  // Urutkan berdasarkan tanggal terbaru
  return localList
    .filter((item) => !userId || item.userId === userId)
    .sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime());
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
      // Inisialisasi awal jika pengguna belum pernah mengerjakan soal
      // Menyiapkan 2 catatan baseline realistis agar dashboard langsung interaktif
      const seed: SavedSubmissionRecord[] = [
        {
          id: 'sub-baseline-101',
          userId: DEFAULT_STUDENT_ID,
          questionId: 101,
          questionTitle: 'Stoikiometri Pembakaran Campuran Gas Metana dan Propana',
          pillarNumber: 3,
          subtopic: 'Stoikiometri & Wujud Zat',
          studentWorkSteps: 'PV=nRT -> n=1 mol; BaCO3 -> n=2 mol CO2; x+y=1, x+3y=2 -> x=0.5, y=0.5',
          studentFinalAnswer: 'X_CH4 = 0.50',
          totalScore: 9.5,
          maxScore: 10,
          scorePercentage: 95,
          status: 'perfect',
          criteriaBreakdown: [
            {
              stepNumber: 1,
              criterionTitle: 'Penerapan Persamaan Gas Ideal PV = nRT',
              pointsEarned: 2.5,
              maxPoints: 2.5,
              achieved: true,
              examinerExplanation: 'Konversi Kelvin dan n = 1.00 mol akurat.',
            },
            {
              stepNumber: 2,
              criterionTitle: 'Perhitungan Mol CO2 dari Endapan BaCO3',
              pointsEarned: 2.5,
              maxPoints: 2.5,
              achieved: true,
              examinerExplanation: 'Massa molar BaCO3 digunakan tepat.',
            },
            {
              stepNumber: 3,
              criterionTitle: 'Penyusunan Sistem SPLDV Neraca Atom C',
              pointsEarned: 2.5,
              maxPoints: 2.5,
              achieved: true,
              examinerExplanation: 'Eliminasi SPLDV x + 3y = 2.00 terbukti rapi.',
            },
            {
              stepNumber: 4,
              criterionTitle: 'Penentuan Fraksi Mol Akhir Metana',
              pointsEarned: 2.0,
              maxPoints: 2.5,
              achieved: true,
              examinerExplanation: 'Hasil X = 0.50 tepat.',
            },
          ],
          overallFeedback: 'Penalaran stoikiometri dan neraca massa gas sangat solid.',
          strengths: ['Presisi hukum gas ideal', 'Pemodelan aljabar SPLDV sistematis'],
          missingOrIncorrectPoints: [],
          xpAwarded: 48,
          confidenceScore: 0.98,
          elapsedSeconds: 185,
          gradedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          modelUsed: 'gemini-3.6-flash',
          syncedToCloud: true,
        },
        {
          id: 'sub-baseline-102',
          userId: DEFAULT_STUDENT_ID,
          questionId: 102,
          questionTitle: 'Disosiasi Termal Gas Dinitrogen Tetroksida',
          pillarNumber: 4,
          subtopic: 'Termodinamika Kimia',
          studentWorkSteps: 'dH = 57.2 kJ/mol; dS = 175.8 J/mol K; dG = dH - TdS; Kp = 0.141',
          studentFinalAnswer: 'Kp = 0.141',
          totalScore: 7.0,
          maxScore: 10,
          scorePercentage: 70,
          status: 'partial_correct',
          criteriaBreakdown: [
            {
              stepNumber: 1,
              criterionTitle: 'Entalpi Reaksi Standar (ΔH°)',
              pointsEarned: 2.5,
              maxPoints: 2.5,
              achieved: true,
              examinerExplanation: 'Perhitungan entalpi pembentukan produk-reaktan tepat.',
            },
            {
              stepNumber: 2,
              criterionTitle: 'Entropi Reaksi Standar (ΔS°)',
              pointsEarned: 2.5,
              maxPoints: 2.5,
              achieved: true,
              examinerExplanation: 'Koefisien produk NO2 dikalikan 2.',
            },
            {
              stepNumber: 3,
              criterionTitle: 'Energi Bebas Gibbs Standar (ΔG°)',
              pointsEarned: 1.0,
              maxPoints: 2.5,
              achieved: false,
              examinerExplanation: 'Konversi satuan Joule ke kJ sempat rancu sebelum pengurangan.',
            },
            {
              stepNumber: 4,
              criterionTitle: 'Tetapan Kesetimbangan Kp',
              pointsEarned: 1.0,
              maxPoints: 2.5,
              achieved: false,
              examinerExplanation: 'Perhitungan eksponensial exp(-dG/RT) ada pembulatan awal.',
            },
          ],
          overallFeedback: 'Pemahaman konsep termodinamika bagus, perhatikan konsistensi satuan Joule vs kJ.',
          strengths: ['Hukum Hess entalpi dan entropi reaksi terurai dengan baik'],
          missingOrIncorrectPoints: ['Teliti penyelarasan satuan J dan kJ pada rumus Gibbs'],
          misconceptionDiagnosis: 'Selalu pastikan satuan ΔH° dan ΔS° diselaraskan sebelum dihitung pada ΔG° = ΔH° - TΔS°.',
          suggestedReviewTopic: 'Termodinamika Kimia & Kesetimbangan Fasa',
          xpAwarded: 35,
          confidenceScore: 0.94,
          elapsedSeconds: 240,
          gradedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
          modelUsed: 'gemini-3.6-flash',
          syncedToCloud: true,
        },
      ];
      localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }

    return JSON.parse(raw) as SavedSubmissionRecord[];
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
