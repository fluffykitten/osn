/**
 * index.ts - Barrel export for all Cambridge IGCSE Chemistry (0620) topic modules.
 */

import { IGCSE_TOPIC_1 } from './igcseTopic01';
import { IGCSE_TOPIC_2 } from './igcseTopic02';
import { IGCSE_TOPIC_3 } from './igcseTopic03';
import type { MaterialItem } from '../../materialsData';

export { IGCSE_TOPIC_1, IGCSE_TOPIC_2, IGCSE_TOPIC_3 };

export const IGCSE_MATERIALS_ALL: MaterialItem[] = [
  IGCSE_TOPIC_1,
  IGCSE_TOPIC_2,
  IGCSE_TOPIC_3,
];
