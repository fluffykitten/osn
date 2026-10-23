/**
 * src/data/materials/sma/index.ts
 * Indeks Modul Pembelajaran Kimia SMA/MA (Kurikulum Nasional Fase E & F)
 * Arsitektur Pedagogis v3 (Adaptasi SaveMyExams) - 12 Bab Modular
 */

import { SMA_BAB_01 } from './smaBab01';
import { SMA_BAB_02 } from './smaBab02';
import { SMA_BAB_03 } from './smaBab03';
import type { SmaMaterialItem } from '../../smaMaterialsData';

export { SMA_BAB_01, SMA_BAB_02, SMA_BAB_03 };

export const SMA_MODULAR_MATERIALS: SmaMaterialItem[] = [
  SMA_BAB_01,
  SMA_BAB_02,
  SMA_BAB_03,
];

