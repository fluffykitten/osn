/**
 * ospQuestionsData.ts
 * Berkas Agregator Utama Bank Soal Olimpiade Kimia Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * Menyatukan seluruh naskah butir soal modular dari 10 Pilar Silabus OSN Kimia.
 * 
 * Skema ID 6-Digit: 300000 - 399999
 * - 3 = Jalur Olimpiade OSP (Tingkat Provinsi)
 * - PP = Nomor Pilar (01 s.d. 10)
 * - NNN = Nomor Soal (001 s.d. 999)
 */

import type { Question } from '../types/database';
import { OSP_PILLAR_1_QUESTIONS } from './ospQuestionsPillar1Data';
import { OSP_PILLAR_2_QUESTIONS } from './ospQuestionsPillar2Data';
import { OSP_PILLAR_3_QUESTIONS } from './ospQuestionsPillar3Data';
import { OSP_PILLAR_4_QUESTIONS } from './ospQuestionsPillar4Data';
import { OSP_PILLAR_5_QUESTIONS } from './ospQuestionsPillar5Data';
import { OSP_PILLAR_6_QUESTIONS } from './ospQuestionsPillar6Data';
import { OSP_PILLAR_7_QUESTIONS } from './ospQuestionsPillar7Data';
import { OSP_PILLAR_8_QUESTIONS } from './ospQuestionsPillar8Data';
import { OSP_PILLAR_9_QUESTIONS } from './ospQuestionsPillar9Data';
import { OSP_PILLAR_10_QUESTIONS } from './ospQuestionsPillar10Data';

// Agregasi lengkap 100 butir soal dari 10 pilar silabus OSN tingkat OSP (10 soal per pilar)
export const OSP_CHEMISTRY_QUESTIONS: Question[] = [
  ...OSP_PILLAR_1_QUESTIONS,
  ...OSP_PILLAR_2_QUESTIONS,
  ...OSP_PILLAR_3_QUESTIONS,
  ...OSP_PILLAR_4_QUESTIONS,
  ...OSP_PILLAR_5_QUESTIONS,
  ...OSP_PILLAR_6_QUESTIONS,
  ...OSP_PILLAR_7_QUESTIONS,
  ...OSP_PILLAR_8_QUESTIONS,
  ...OSP_PILLAR_9_QUESTIONS,
  ...OSP_PILLAR_10_QUESTIONS,
];
