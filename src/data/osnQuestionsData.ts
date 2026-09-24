/**
 * osnQuestionsData.ts
 * Berkas Agregator Utama Bank Soal Olimpiade Kimia Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * Menyatukan seluruh naskah butir soal modular dari 10 Pilar Silabus OSN Kimia.
 * 
 * Skema ID 6-Digit: 400000 - 499999
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - PP = Nomor Pilar (01 s.d. 10)
 * - NNN = Nomor Soal (001 s.d. 999)
 */

import type { Question } from '../types/database';
import { OSN_PILLAR_1_QUESTIONS } from './osnQuestionsPillar1Data';
import { OSN_PILLAR_2_QUESTIONS } from './osnQuestionsPillar2Data';
import { OSN_PILLAR_3_QUESTIONS } from './osnQuestionsPillar3Data';
import { OSN_PILLAR_4_QUESTIONS } from './osnQuestionsPillar4Data';
import { OSN_PILLAR_5_QUESTIONS } from './osnQuestionsPillar5Data';
import { OSN_PILLAR_6_QUESTIONS } from './osnQuestionsPillar6Data';
import { OSN_PILLAR_7_QUESTIONS } from './osnQuestionsPillar7Data';
import { OSN_PILLAR_8_QUESTIONS } from './osnQuestionsPillar8Data';
import { OSN_PILLAR_9_QUESTIONS } from './osnQuestionsPillar9Data';
import { OSN_PILLAR_10_QUESTIONS } from './osnQuestionsPillar10Data';

// Agregasi lengkap 10 pilar silabus OSN tingkat OSN (Nasional) - 100 Butir Soal
export const OSN_CHEMISTRY_QUESTIONS: Question[] = [
  ...OSN_PILLAR_1_QUESTIONS,
  ...OSN_PILLAR_2_QUESTIONS,
  ...OSN_PILLAR_3_QUESTIONS,
  ...OSN_PILLAR_4_QUESTIONS,
  ...OSN_PILLAR_5_QUESTIONS,
  ...OSN_PILLAR_6_QUESTIONS,
  ...OSN_PILLAR_7_QUESTIONS,
  ...OSN_PILLAR_8_QUESTIONS,
  ...OSN_PILLAR_9_QUESTIONS,
  ...OSN_PILLAR_10_QUESTIONS,
];
