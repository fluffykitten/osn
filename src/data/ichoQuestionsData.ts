/**
 * ichoQuestionsData.ts
 * Berkas Agregator Utama Bank Soal Olimpiade Kimia Tingkat IChO (International Chemistry Olympiad / Pelatnas Tahap III-IV)
 * Menyatukan seluruh naskah butir soal modular dari 10 Pilar Silabus IChO Kimia.
 * 
 * Skema ID 6-Digit: 500000 - 599999
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - PP = Nomor Pilar (01 s.d. 10)
 * - NNN = Nomor Soal (001 s.d. 010)
 */

import type { Question } from '../types/database';
import { ICHO_PILLAR_1_QUESTIONS } from './ichoQuestionsPillar1Data';
import { ICHO_PILLAR_2_QUESTIONS } from './ichoQuestionsPillar2Data';
import { ICHO_PILLAR_3_QUESTIONS } from './ichoQuestionsPillar3Data';
import { ICHO_PILLAR_4_QUESTIONS } from './ichoQuestionsPillar4Data';
import { ICHO_PILLAR_5_QUESTIONS } from './ichoQuestionsPillar5Data';
import { ICHO_PILLAR_6_QUESTIONS } from './ichoQuestionsPillar6Data';
import { ICHO_PILLAR_7_QUESTIONS } from './ichoQuestionsPillar7Data';
import { ICHO_PILLAR_8_QUESTIONS } from './ichoQuestionsPillar8Data';
import { ICHO_PILLAR_9_QUESTIONS } from './ichoQuestionsPillar9Data';
import { ICHO_PILLAR_10_QUESTIONS } from './ichoQuestionsPillar10Data';

// Agregasi lengkap 10 pilar silabus IChO tingkat Internasional / Pelatnas - 100 Butir Soal
export const ICHO_CHEMISTRY_QUESTIONS: Question[] = [
  ...ICHO_PILLAR_1_QUESTIONS,
  ...ICHO_PILLAR_2_QUESTIONS,
  ...ICHO_PILLAR_3_QUESTIONS,
  ...ICHO_PILLAR_4_QUESTIONS,
  ...ICHO_PILLAR_5_QUESTIONS,
  ...ICHO_PILLAR_6_QUESTIONS,
  ...ICHO_PILLAR_7_QUESTIONS,
  ...ICHO_PILLAR_8_QUESTIONS,
  ...ICHO_PILLAR_9_QUESTIONS,
  ...ICHO_PILLAR_10_QUESTIONS,
];
