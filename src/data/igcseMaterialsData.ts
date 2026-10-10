/**
 * igcseMaterialsData.ts
 * Database Materi Sains Kimia Cambridge IGCSE Chemistry (0620).
 */

import type { ConceptBlock, MaterialItem, CheckpointQuizItem } from './materialsData';
import { IGCSE_MATERIALS_ALL, IGCSE_TOPIC_1, IGCSE_TOPIC_2, IGCSE_TOPIC_3 } from './materials/igcse';

export type { ConceptBlock, MaterialItem, CheckpointQuizItem };

export interface IgcseMaterialItem extends MaterialItem {
  tier?: 'Core' | 'Extended' | 'Both';
  cambridgeRef?: string;
  yearGroup?: 'Year 10' | 'Year 11';
}

export { IGCSE_MATERIALS_ALL, IGCSE_TOPIC_1, IGCSE_TOPIC_2, IGCSE_TOPIC_3 };

export const IGCSE_MATERIALS: MaterialItem[] = IGCSE_MATERIALS_ALL;
