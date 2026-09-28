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

export {
  CHECKPOINTS_TOPIC_101,
  CHECKPOINTS_TOPIC_102,
  CHECKPOINTS_TOPIC_103,
  CHECKPOINTS_TOPIC_104,
  CHECKPOINTS_TOPIC_105,
};

export const CHECKPOINTS_FASE_E: Record<string, CheckpointQuizItem[]> = {
  ...CHECKPOINTS_TOPIC_101,
  ...CHECKPOINTS_TOPIC_102,
  ...CHECKPOINTS_TOPIC_103,
  ...CHECKPOINTS_TOPIC_104,
  ...CHECKPOINTS_TOPIC_105,
};
