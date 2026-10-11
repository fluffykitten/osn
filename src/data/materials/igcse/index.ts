/**
 * index.ts - Barrel export for all Cambridge IGCSE Chemistry (0620) topic modules.
 */

import { IGCSE_TOPIC_1 } from './igcseTopic01.ts';
import { IGCSE_TOPIC_2 } from './igcseTopic02.ts';
import { IGCSE_TOPIC_3 } from './igcseTopic03.ts';
import { IGCSE_TOPIC_4 } from './igcseTopic04.ts';
import { IGCSE_TOPIC_5 } from './igcseTopic05.ts';
import { IGCSE_TOPIC_6 } from './igcseTopic06.ts';
import { IGCSE_TOPIC_7 } from './igcseTopic07.ts';
import { IGCSE_TOPIC_8 } from './igcseTopic08.ts';
import { IGCSE_TOPIC_9 } from './igcseTopic09.ts';
import { IGCSE_TOPIC_10 } from './igcseTopic10.ts';
import type { MaterialItem } from '../../materialsData';

export {
  IGCSE_TOPIC_1,
  IGCSE_TOPIC_2,
  IGCSE_TOPIC_3,
  IGCSE_TOPIC_4,
  IGCSE_TOPIC_5,
  IGCSE_TOPIC_6,
  IGCSE_TOPIC_7,
  IGCSE_TOPIC_8,
  IGCSE_TOPIC_9,
  IGCSE_TOPIC_10,
};

export const IGCSE_MATERIALS_ALL: MaterialItem[] = [
  IGCSE_TOPIC_1,
  IGCSE_TOPIC_2,
  IGCSE_TOPIC_3,
  IGCSE_TOPIC_4,
  IGCSE_TOPIC_5,
  IGCSE_TOPIC_6,
  IGCSE_TOPIC_7,
  IGCSE_TOPIC_8,
  IGCSE_TOPIC_9,
  IGCSE_TOPIC_10,
];


