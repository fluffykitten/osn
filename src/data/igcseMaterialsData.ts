/**
 * igcseMaterialsData.ts
 * Database Materi Sains Kimia Cambridge IGCSE Chemistry (0620).
 */

import type { ConceptBlock, MaterialItem, CheckpointQuizItem } from './materialsData';
import {
  IGCSE_MATERIALS_ALL,
  IGCSE_TOPIC_1,
  IGCSE_TOPIC_2,
  IGCSE_TOPIC_3,
  IGCSE_TOPIC_4,
  IGCSE_TOPIC_5,
  IGCSE_TOPIC_6,
  IGCSE_TOPIC_7,
  IGCSE_TOPIC_8,
  IGCSE_TOPIC_9,
} from './materials/igcse/index.ts';

export type { ConceptBlock, MaterialItem, CheckpointQuizItem };

export interface IgcseMaterialItem extends MaterialItem {
  tier?: 'Core' | 'Extended' | 'Both';
  cambridgeRef?: string;
  yearGroup?: 'Year 10' | 'Year 11';
}

export {
  IGCSE_MATERIALS_ALL,
  IGCSE_TOPIC_1,
  IGCSE_TOPIC_2,
  IGCSE_TOPIC_3,
  IGCSE_TOPIC_4,
  IGCSE_TOPIC_5,
  IGCSE_TOPIC_6,
  IGCSE_TOPIC_7,
  IGCSE_TOPIC_8,
  IGCSE_TOPIC_9,
};

export const IGCSE_MATERIALS: MaterialItem[] = IGCSE_MATERIALS_ALL;
