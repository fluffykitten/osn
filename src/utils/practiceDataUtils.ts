/**
 * practiceDataUtils.ts
 * Utilitas agregasi data, metrik penguasaan, dan rekomendasi latihan adaptif
 * untuk Bank Soal Siswa (10 Pilar OSN Kimia & 16 Modul Mandiri SMA).
 */

import type { Question, QuestionDifficulty } from '../types/database';
import type { SavedSubmissionRecord } from '../services/submissionService';
import { resolveQuestionTopicMeta } from './topicMapping';
import { PILLARS_DATA } from '../data/syllabusData';
import { SMA_MATERIALS } from '../data/smaMaterialsData';

export interface DifficultyBreakdown {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}

export interface TopicProgressMetrics {
  totalQuestions: number;
  attemptedCount: number;
  completedCount: number;
  completionPercent: number;
  avgScore: number;
  status: 'not_started' | 'in_progress' | 'mastered';
}

export interface PracticeOverallStats {
  totalQuestions: number;
  completedQuestions: number;
  completionPercent: number;
  avgAccuracy: number;
  masteredTopicsCount: number;
  totalTopicsCount: number;
  recommendedTopic: {
    id: number;
    title: string;
    database: 'osn' | 'sma';
    reason: string;
    questionIds: number[];
  } | null;
}

/**
 * Normalisasi tingkat kesulitan soal ke dalam 3 tier standar (Mudah / Sedang / Sulit)
 */
export function normalizeDifficultyTier(difficulty?: QuestionDifficulty | string): 'easy' | 'medium' | 'hard' {
  if (!difficulty) return 'medium';
  const d = difficulty.toUpperCase();
  if (d.includes('MUDAH') || d.includes('SMA-10') || d.includes('EASY')) {
    return 'easy';
  }
  if (d.includes('SULIT') || d.includes('OSN') || d.includes('ICHO') || d.includes('ADVANCED')) {
    return 'hard';
  }
  // Default tier menengah (SMA-Sedang, SMA-11, SMA-12, OSK, OSP, Medium)
  return 'medium';
}

/**
 * Filter daftar butir soal yang masuk ke dalam topik atau modul tertentu
 */
export function getQuestionsForTopic(
  questions: Question[],
  topicNumber: number,
  database: 'osn' | 'sma'
): Question[] {
  if (database === 'osn') {
    return questions.filter((q) => {
      // 1. Cek langsung nomor pilar
      if (q.pillar_number === topicNumber) return true;
      // 2. Cek metadata terpetakan
      const meta = resolveQuestionTopicMeta(q);
      return !meta.isSma && meta.mappedPillarNumber === topicNumber;
    });
  }

  // Database SMA (16 Modul)
  return questions.filter((q) => {
    // 1. Cek langsung nomor topik SMA
    if (q.sma_topic_number === topicNumber) return true;
    // 2. Cek module_id (misal 101 -> modul 1)
    if (q.module_id && q.module_id >= 101 && q.module_id <= 116 && q.module_id - 100 === topicNumber) {
      return true;
    }
    // 3. Cek resolusi dwiarah topic mapping
    const meta = resolveQuestionTopicMeta(q);
    if (meta.isSma && meta.mappedSmaTopicNumber === topicNumber) return true;
    return false;
  });
}

/**
 * Menghitung rincian sebaran tingkat kesulitan soal dalam suatu topik
 */
export function getTopicDifficultyBreakdown(topicQuestions: Question[]): DifficultyBreakdown {
  let easy = 0;
  let medium = 0;
  let hard = 0;

  for (const q of topicQuestions) {
    const tier = normalizeDifficultyTier(q.difficulty);
    if (tier === 'easy') easy++;
    else if (tier === 'hard') hard++;
    else medium++;
  }

  return {
    easy,
    medium,
    hard,
    total: topicQuestions.length,
  };
}

/**
 * Menghitung progres penguasaan siswa untuk satu topik spesifik
 */
export function getTopicProgress(
  topicQuestions: Question[],
  submissions: SavedSubmissionRecord[]
): TopicProgressMetrics {
  const total = topicQuestions.length;
  if (total === 0) {
    return {
      totalQuestions: 0,
      attemptedCount: 0,
      completedCount: 0,
      completionPercent: 0,
      avgScore: 0,
      status: 'not_started',
    };
  }

  const topicQIds = new Set(topicQuestions.map((q) => q.id));
  const relevantSubmissions = submissions.filter((s) => topicQIds.has(s.questionId));

  // Ambil skor terbaik untuk tiap soal yang pernah dikerjakan
  const bestScores = new Map<number, number>();
  for (const sub of relevantSubmissions) {
    const prev = bestScores.get(sub.questionId) || 0;
    if (sub.scorePercentage > prev) {
      bestScores.set(sub.questionId, sub.scorePercentage);
    }
  }

  const attemptedCount = bestScores.size;
  // Soal dianggap selesai / tuntas jika mendapat skor >= 60%
  let completedCount = 0;
  let sumScore = 0;

  bestScores.forEach((score) => {
    if (score >= 60) completedCount++;
    sumScore += score;
  });

  const completionPercent = Math.min(100, Math.round((attemptedCount / total) * 100));
  const avgScore = attemptedCount > 0 ? Math.round(sumScore / attemptedCount) : 0;

  let status: 'not_started' | 'in_progress' | 'mastered' = 'not_started';
  if (attemptedCount > 0) {
    // Topik dianggap mastered jika minimal 60% soal dikerjakan dan akurasi >= 75%
    if (completionPercent >= 50 && avgScore >= 75) {
      status = 'mastered';
    } else {
      status = 'in_progress';
    }
  }

  return {
    totalQuestions: total,
    attemptedCount,
    completedCount,
    completionPercent,
    avgScore,
    status,
  };
}

/**
 * Menghitung statistik global gamifikasi bank soal siswa
 */
export function calculateOverallPracticeStats(
  questions: Question[],
  submissions: SavedSubmissionRecord[],
  activeDatabase: 'osn' | 'sma'
): PracticeOverallStats {
  const totalQuestions = questions.length;
  const attemptedQuestionIds = new Set(submissions.map((s) => s.questionId));
  const completedQuestions = attemptedQuestionIds.size;
  const completionPercent = totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

  // Hitung rata-rata akurasi siswa secara global
  let totalScoreSum = 0;
  submissions.forEach((s) => {
    totalScoreSum += s.scorePercentage || 0;
  });
  const avgAccuracy = submissions.length > 0 ? Math.round(totalScoreSum / submissions.length) : 0;

  // Evaluasi topik-topik aktif
  const topicList = activeDatabase === 'sma' ? SMA_MATERIALS : PILLARS_DATA;
  let masteredTopicsCount = 0;

  interface TopicEval {
    id: number;
    title: string;
    questions: Question[];
    attemptedCount: number;
    avgScore: number;
    completionPercent: number;
  }

  const evaluations: TopicEval[] = [];

  topicList.forEach((item) => {
    const topicNum = 'pillar_number' in item ? item.pillar_number : item.topic_number;
    const tQuestions = getQuestionsForTopic(questions, topicNum, activeDatabase);
    const progress = getTopicProgress(tQuestions, submissions);

    if (progress.status === 'mastered') {
      masteredTopicsCount++;
    }

    evaluations.push({
      id: topicNum,
      title: item.title,
      questions: tQuestions,
      attemptedCount: progress.attemptedCount,
      avgScore: progress.avgScore,
      completionPercent: progress.completionPercent,
    });
  });

  // Tentukan rekomendasi cerdas hari ini (Duolingo / Khan Academy style):
  // 1. Prioritas utama: Topik yang sedang dikerjakan dengan akurasi terendah (kebutuhan remedial).
  // 2. Prioritas kedua: Topik berikutnya yang belum pernah dimulai.
  // 3. Fallback: Topik pertama.
  let recommendedTopic: PracticeOverallStats['recommendedTopic'] = null;

  const inProgressTopics = evaluations.filter((e) => e.attemptedCount > 0 && e.completionPercent < 100);
  if (inProgressTopics.length > 0) {
    // Urutkan berdasarkan akurasi terendah untuk penguatan
    inProgressTopics.sort((a, b) => a.avgScore - b.avgScore);
    const target = inProgressTopics[0];
    const unattempted = target.questions.filter((q) => !attemptedQuestionIds.has(q.id));
    const drillIds = (unattempted.length >= 3 ? unattempted : target.questions)
      .slice(0, 3)
      .map((q) => q.id);

    recommendedTopic = {
      id: target.id,
      title: target.title,
      database: activeDatabase,
      reason: `Tingkatkan akurasi (saat ini ${target.avgScore}%) dengan 3 soal adaptif.`,
      questionIds: drillIds,
    };
  } else {
    const unstarted = evaluations.filter((e) => e.attemptedCount === 0 && e.questions.length > 0);
    if (unstarted.length > 0) {
      const target = unstarted[0];
      const drillIds = target.questions.slice(0, 3).map((q) => q.id);
      recommendedTopic = {
        id: target.id,
        title: target.title,
        database: activeDatabase,
        reason: 'Jelajahi topik baru untuk memperluas cakupan silabus sains kimia Anda.',
        questionIds: drillIds,
      };
    } else if (evaluations.length > 0 && evaluations[0].questions.length > 0) {
      const target = evaluations[0];
      recommendedTopic = {
        id: target.id,
        title: target.title,
        database: activeDatabase,
        reason: 'Review dan pertajam pemahaman konsep dengan soal latihan adaptif.',
        questionIds: target.questions.slice(0, 3).map((q) => q.id),
      };
    }
  }

  return {
    totalQuestions,
    completedQuestions,
    completionPercent,
    avgAccuracy,
    masteredTopicsCount,
    totalTopicsCount: topicList.length,
    recommendedTopic,
  };
}

/**
 * Mengambil 3 butir soal adaptif untuk latihan kilat (Quick Drill)
 * Prioritas: Soal yang belum pernah dikerjakan -> Soal dengan skor terendah
 */
export function getQuickDrillQuestionIds(
  topicQuestions: Question[],
  submissions: SavedSubmissionRecord[],
  limit = 3
): number[] {
  if (topicQuestions.length === 0) return [];
  if (topicQuestions.length <= limit) return topicQuestions.map((q) => q.id);

  const attemptedMap = new Map<number, number>();
  submissions.forEach((s) => {
    const prev = attemptedMap.get(s.questionId) || 0;
    if (s.scorePercentage > prev) attemptedMap.set(s.questionId, s.scorePercentage);
  });

  const unattempted = topicQuestions.filter((q) => !attemptedMap.has(q.id));
  if (unattempted.length >= limit) {
    // Ambil acak atau urut dari yang belum dikerjakan
    return unattempted.slice(0, limit).map((q) => q.id);
  }

  // Jika yang belum dikerjakan kurang dari limit, kombinasikan dengan soal yang skornya terendah
  const attemptedSorted = topicQuestions
    .filter((q) => attemptedMap.has(q.id))
    .sort((a, b) => (attemptedMap.get(a.id) || 0) - (attemptedMap.get(b.id) || 0));

  const result: number[] = [...unattempted.map((q) => q.id)];
  for (const q of attemptedSorted) {
    if (result.length >= limit) break;
    result.push(q.id);
  }

  return result;
}

/**
 * Peta Tag Konsep Kunci Deskriptif untuk 10 Pilar Silabus OSN Kimia
 */
export const OSN_TOPIC_FOCUS_TAGS: Record<number, string[]> = {
  1: [
    'Model Atom Bohr',
    'Mekanika Kuantum Schrödinger',
    '4 Bilangan Kuantum',
    'Aturan Slater (Zeff)',
    'Tren Sifat Periodik',
    'Energi Ionisasi',
    'Afinitas Elektron',
  ],
  2: [
    'Struktur Lewis & Muatan Formal',
    'Geometri VSEPR',
    'Hibridisasi Orbital',
    'Teori Orbital Molekul (MOT)',
    'Energi Kisi Born-Haber',
    'Gaya Antarmolekul',
  ],
  3: [
    'Konsep Mol & Pereaksi Pembatas',
    'Hukum Gas Ideal & Dalton',
    'Gas Nyata Van der Waals',
    'Efusi Graham',
    'Diagram Fasa P-T',
    'Stoikiometri Reaksi Larutan',
  ],
  4: [
    'Hukum I Termodinamika & Entalpi',
    'Hukum Hess & Kalorimetri',
    'Entropi (ΔS) & Hukum II/III',
    'Energi Bebas Gibbs (ΔG)',
    'Kesetimbangan Termodinamika',
    "Persamaan Van 't Hoff",
  ],
  5: [
    'Hukum Laju & Penentuan Orde',
    'Mekanisme Reaksi & Tahap RDS',
    'Persamaan Arrhenius & Energi Aktivasi',
    'Waktu Paruh (t1/2)',
    'Teori Tumbukan',
    'Katalisis Homogen & Heterogen',
  ],
  6: [
    'Tetapan Kesetimbangan (Kc & Kp)',
    'Hubungan Kp = Kc(RT)^Δn',
    'Azas Le Chatelier',
    'Derajat Disosiasi (α)',
    'Kesetimbangan Homogen & Heterogen',
    'Kuosien Reaksi (Qc)',
  ],
  7: [
    'Teori Asam-Basa (Arrhenius, Bronsted, Lewis)',
    'Kalkulasi pH & Derajat Ionisasi',
    'Larutan Penyangga (Buffer)',
    'Titrasi Asam-Basa & Indikator',
    'Hasil Kali Kelarutan (Ksp)',
    'Pengendapan & Efek Ion Senama',
  ],
  8: [
    'Penyetaraan Redoks Ion-Elektron',
    'Sel Volta & Potensial Standar (E°)',
    'Persamaan Nernst',
    'Termodinamika Sel (ΔG = -nFE)',
    'Elektrolisis & Hukum Faraday',
    'Diagram Latimer & Frost',
  ],
  9: [
    'Tata Nama Kompleks & Jenis Ligan',
    'Bilangan Koordinasi & Geometri',
    'Teori Medan Kristal (CFT)',
    'Pemisahan Orbital d (Oh & Td)',
    'Sifat Magnetik High/Low Spin',
    'Isomerisme Senyawa Kompleks',
  ],
  10: [
    'Tata Nama IUPAC & Gugus Fungsi',
    'Isomerisme & Stereokimia (R/S, E/Z)',
    'Substitusi Nukleofilik (SN1/SN2)',
    'Eliminasi (E1/E2)',
    'Adisi & Substitusi Aromatik',
    'Biomolekul (Karbohidrat, Asam Amino)',
  ],
};

/**
 * Mendapatkan daftar fokus materi/tag deskriptif per topik baik OSN maupun SMA
 */
export function getTopicFocusTags(topicNumber: number, database: 'osn' | 'sma'): string[] {
  if (database === 'osn') {
    return OSN_TOPIC_FOCUS_TAGS[topicNumber] || ['Teori Kimia', 'Silabus Olimpiade', 'Problem Solving'];
  }
  const mat = SMA_MATERIALS.find((m) => m.topic_number === topicNumber);
  if (mat && Array.isArray(mat.allTags) && mat.allTags.length > 0) {
    // Format tag kebab-case menjadi format judul yang rapi
    return mat.allTags.slice(0, 7).map((t) =>
      t
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    );
  }
  return ['Kimia SMA', 'Kurikulum Merdeka'];
}
