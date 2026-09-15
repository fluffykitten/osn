/**
 * remedialService.ts
 * Mesin Rekomendasi Remedial Adaptif Berbasis Miskonsepsi & Analisis Kelemahan
 * Menghubungkan diagnosa Dewan Juri AI dengan paket soal penguatan terfokus
 */

import type { SavedSubmissionRecord, RemedialRecommendation } from '../types/database';
import { BENCHMARK_QUESTIONS, PILLARS_DATA } from '../data/syllabusData';
import { getSubmissionHistory } from './submissionService';

/**
 * Menghasilkan daftar rekomendasi remedial adaptif berdasarkan pengerjaan aktual siswa
 */
export function generateRemedialRecommendations(
  submissions?: SavedSubmissionRecord[]
): RemedialRecommendation[] {
  const history = submissions || getSubmissionHistory();
  const recommendations: RemedialRecommendation[] = [];

  // 1. Prioritas Utama: Deteksi submission yang memiliki diagnosa miskonsepsi
  const misconceptionSubmissions = history.filter(
    (s) => Boolean(s.misconceptionDiagnosis) && s.misconceptionDiagnosis!.trim().length > 0
  );

  for (const item of misconceptionSubmissions) {
    // Cari soal penguatan yang relevan di silabus
    const relatedQuestion = findTargetPracticeQuestion(item.pillarNumber, item.questionId);

    recommendations.push({
      id: `rem-misc-${item.id}`,
      pillarNumber: item.pillarNumber,
      subtopic: item.subtopic,
      reason: `Terdeteksi Miskonsepsi pada pengerjaan terakhir: "${item.misconceptionDiagnosis}"`,
      misconceptionHint: item.suggestedReviewTopic
        ? `Fokus Penguatan: ${item.suggestedReviewTopic}`
        : 'Perhatikan penyelarasan satuan internasional dan persamaan reaksi setara.',
      targetQuestionId: relatedQuestion.id,
      targetQuestionTitle: relatedQuestion.title,
      difficulty: relatedQuestion.difficulty,
      generationType: relatedQuestion.generation_type,
    });
  }

  // 2. Prioritas Kedua: Deteksi topik dengan skor parsial / belum optimal (< 75%)
  const lowScoreSubmissions = history.filter(
    (s) => s.scorePercentage < 75 && !recommendations.some((r) => r.pillarNumber === s.pillarNumber)
  );

  for (const item of lowScoreSubmissions) {
    const targetQ = findTargetPracticeQuestion(item.pillarNumber, item.questionId);
    recommendations.push({
      id: `rem-score-${item.id}`,
      pillarNumber: item.pillarNumber,
      subtopic: item.subtopic,
      reason: `Skor pada topik ${item.subtopic} masih ${item.scorePercentage}%. Diperlukan latihan penguatan langkah penurunan rumus.`,
      misconceptionHint: item.missingOrIncorrectPoints?.[0] || 'Latih kembali penurunan rumus dan eliminasi aljabar stoikiometri.',
      targetQuestionId: targetQ.id,
      targetQuestionTitle: targetQ.title,
      difficulty: targetQ.difficulty,
      generationType: targetQ.generation_type,
    });
  }

  // 3. Fallback Rekomendasi Eksplorasi jika siswa belum ada kelemahan kritis
  if (recommendations.length === 0) {
    // Sarankan soal berikutnya yang belum dicoba
    const triedIds = new Set(history.map((s) => s.questionId));
    const untried = BENCHMARK_QUESTIONS.find((q) => !triedIds.has(q.id)) || BENCHMARK_QUESTIONS[0];

    recommendations.push({
      id: 'rem-explore-next',
      pillarNumber: untried.pillar_number,
      subtopic: untried.subtopic,
      reason: 'Penguasaan Anda sangat baik! Tantang diri Anda dengan paket soal level berikutnya.',
      misconceptionHint: 'Pertahankan ketelitian langkah penulisan dan konversi satuan fisika.',
      targetQuestionId: untried.id,
      targetQuestionTitle: untried.title,
      difficulty: untried.difficulty,
      generationType: untried.generation_type,
    });
  }

  // Batasi maksimal 3 rekomendasi paling relevan agar siswa fokus
  return recommendations.slice(0, 3);
}

/**
 * Mencari soal latihan penguatan yang sesuai
 */
function findTargetPracticeQuestion(pillarNumber: number, excludeQuestionId?: number) {
  // Coba cari soal lain dalam topik yang sama
  const samePillar = BENCHMARK_QUESTIONS.find(
    (q) => q.pillar_number === pillarNumber && q.id !== excludeQuestionId
  );
  if (samePillar) return samePillar;

  // Jika tidak ada, gunakan soal yang sama untuk pengulangan berulang (drill ulang)
  const exact = BENCHMARK_QUESTIONS.find((q) => q.id === excludeQuestionId);
  if (exact) return exact;

  return BENCHMARK_QUESTIONS[0];
}
