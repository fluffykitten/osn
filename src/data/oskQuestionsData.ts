/**
 * oskQuestionsData.ts
 * Berkas Agregator Utama Bank Soal Olimpiade Kimia Tingkat OSK (Olimpiade Sains Kota/Kabupaten)
 * Menyatukan seluruh naskah butir soal modular dari 10 Pilar Silabus OSN Kimia.
 * 
 * Skema ID 6-Digit: 200000 - 299999
 * - 2 = Jalur Olimpiade OSK
 * - PP = Nomor Pilar (01 s.d. 10)
 * - NNN = Nomor Soal (001 s.d. 999)
 */

import type { Question } from '../types/database';
import { OSK_PILLAR_1_QUESTIONS } from './oskQuestionsPillar1Data';
import { OSK_PILLAR_2_QUESTIONS } from './oskQuestionsPillar2Data';
import { OSK_PILLAR_3_QUESTIONS } from './oskQuestionsPillar3Data';
import { OSK_PILLAR_4_QUESTIONS } from './oskQuestionsPillar4Data';
import { OSK_PILLAR_5_QUESTIONS } from './oskQuestionsPillar5Data';
import { OSK_PILLAR_6_QUESTIONS } from './oskQuestionsPillar6Data';
import { OSK_PILLAR_7_QUESTIONS } from './oskQuestionsPillar7Data';
import { OSK_PILLAR_8_QUESTIONS } from './oskQuestionsPillar8Data';
import { OSK_PILLAR_9_QUESTIONS } from './oskQuestionsPillar9Data';
import { OSK_PILLAR_10_QUESTIONS } from './oskQuestionsPillar10Data';

// Agregasi lengkap 10 pilar silabus OSN Kimia tingkat OSK (100 Butir Soal Terstandarisasi)
export const OSK_CHEMISTRY_QUESTIONS: Question[] = [
  ...OSK_PILLAR_1_QUESTIONS,
  ...OSK_PILLAR_2_QUESTIONS,
  ...OSK_PILLAR_3_QUESTIONS,
  ...OSK_PILLAR_4_QUESTIONS,
  ...OSK_PILLAR_5_QUESTIONS,
  ...OSK_PILLAR_6_QUESTIONS,
  ...OSK_PILLAR_7_QUESTIONS,
  ...OSK_PILLAR_8_QUESTIONS,
  ...OSK_PILLAR_9_QUESTIONS,
  ...OSK_PILLAR_10_QUESTIONS,
];
