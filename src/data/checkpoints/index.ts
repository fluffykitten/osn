/**
 * checkpoints/index.ts
 * Index Bank Kuis Uji Pemahaman Cepat (Checkpoint Quiz) Fase E (Topik 101 - 105)
 */

import type { CheckpointQuizItem } from '../materialsData.ts';
import { CHECKPOINTS_TOPIC_101 } from './checkpointBankTopic101.ts';
import { CHECKPOINTS_TOPIC_102 } from './checkpointBankTopic102.ts';
import { CHECKPOINTS_TOPIC_103 } from './checkpointBankTopic103.ts';
import { CHECKPOINTS_TOPIC_104 } from './checkpointBankTopic104.ts';
import { CHECKPOINTS_TOPIC_105 } from './checkpointBankTopic105.ts';
import { CHECKPOINTS_TOPIC_106 } from './checkpointBankTopic106.ts';
import { CHECKPOINTS_TOPIC_107 } from './checkpointBankTopic107.ts';
import { CHECKPOINTS_TOPIC_108 } from './checkpointBankTopic108.ts';
import { CHECKPOINTS_TOPIC_109 } from './checkpointBankTopic109.ts';
import { CHECKPOINTS_TOPIC_110 } from './checkpointBankTopic110.ts';
import { CHECKPOINTS_TOPIC_111 } from './checkpointBankTopic111.ts';
import { CHECKPOINTS_TOPIC_112 } from './checkpointBankTopic112.ts';
import { CHECKPOINTS_TOPIC_113 } from './checkpointBankTopic113.ts';
import { CHECKPOINTS_TOPIC_114 } from './checkpointBankTopic114.ts';
import { CHECKPOINTS_TOPIC_115 } from './checkpointBankTopic115.ts';
import { CHECKPOINTS_TOPIC_116 } from './checkpointBankTopic116.ts';

import { CHECKPOINTS_TOPIC_OSN_01 } from './checkpointBankTopicOsn01.ts';
import { CHECKPOINTS_TOPIC_OSN_02 } from './checkpointBankTopicOsn02.ts';
import { CHECKPOINTS_TOPIC_OSN_03 } from './checkpointBankTopicOsn03.ts';
import { CHECKPOINTS_TOPIC_OSN_04 } from './checkpointBankTopicOsn04.ts';
import { CHECKPOINTS_TOPIC_OSN_05 } from './checkpointBankTopicOsn05.ts';
import { CHECKPOINTS_TOPIC_OSN_06 } from './checkpointBankTopicOsn06.ts';

export {
  CHECKPOINTS_TOPIC_101,
  CHECKPOINTS_TOPIC_102,
  CHECKPOINTS_TOPIC_103,
  CHECKPOINTS_TOPIC_104,
  CHECKPOINTS_TOPIC_105,
  CHECKPOINTS_TOPIC_106,
  CHECKPOINTS_TOPIC_107,
  CHECKPOINTS_TOPIC_108,
  CHECKPOINTS_TOPIC_109,
  CHECKPOINTS_TOPIC_110,
  CHECKPOINTS_TOPIC_111,
  CHECKPOINTS_TOPIC_112,
  CHECKPOINTS_TOPIC_113,
  CHECKPOINTS_TOPIC_114,
  CHECKPOINTS_TOPIC_115,
  CHECKPOINTS_TOPIC_116,
  CHECKPOINTS_TOPIC_OSN_01,
  CHECKPOINTS_TOPIC_OSN_02,
  CHECKPOINTS_TOPIC_OSN_03,
  CHECKPOINTS_TOPIC_OSN_04,
  CHECKPOINTS_TOPIC_OSN_05,
  CHECKPOINTS_TOPIC_OSN_06,
};

export const CHECKPOINTS_FASE_E: Record<string, CheckpointQuizItem[]> = {
  ...CHECKPOINTS_TOPIC_101,
  ...CHECKPOINTS_TOPIC_102,
  ...CHECKPOINTS_TOPIC_103,
  ...CHECKPOINTS_TOPIC_104,
  ...CHECKPOINTS_TOPIC_105,
};

export const CHECKPOINTS_FASE_F1: Record<string, CheckpointQuizItem[]> = {
  ...CHECKPOINTS_TOPIC_106,
  ...CHECKPOINTS_TOPIC_107,
  ...CHECKPOINTS_TOPIC_108,
  ...CHECKPOINTS_TOPIC_109,
  ...CHECKPOINTS_TOPIC_110,
  ...CHECKPOINTS_TOPIC_111,
  ...CHECKPOINTS_TOPIC_112,
};

export const CHECKPOINTS_FASE_F2: Record<string, CheckpointQuizItem[]> = {
  ...CHECKPOINTS_TOPIC_113,
  ...CHECKPOINTS_TOPIC_114,
  ...CHECKPOINTS_TOPIC_115,
  ...CHECKPOINTS_TOPIC_116,
};

export const CHECKPOINTS_OSN: Record<string, CheckpointQuizItem[]> = {
  ...CHECKPOINTS_TOPIC_OSN_01,
  ...CHECKPOINTS_TOPIC_OSN_02,
  ...CHECKPOINTS_TOPIC_OSN_03,
  ...CHECKPOINTS_TOPIC_OSN_04,
  ...CHECKPOINTS_TOPIC_OSN_05,
  ...CHECKPOINTS_TOPIC_OSN_06,
};




