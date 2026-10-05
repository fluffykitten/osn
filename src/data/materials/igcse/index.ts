/**
 * index.ts - Barrel export for all Cambridge IGCSE Chemistry (0620) topic modules.
 */

import { IGCSE_TOPIC_1 } from './igcseTopic01';
import type { MaterialItem } from '../../materialsData';

export { IGCSE_TOPIC_1 };

export const IGCSE_MATERIALS_ALL: MaterialItem[] = [
  IGCSE_TOPIC_1,
];
