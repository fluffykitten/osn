/**
 * smaMaterialsData.ts
 * Database Materi Sains Kimia Dasar SMA (Kurikulum Merdeka & Kurikulum 2013)
 * Mencakup Fondasi Kimia Kelas X (Fase E), Kelas XI (Fase F1), dan Kelas XII (Fase F2).
 * 
 * Modularisasi:
 * - 12 Bab Kurikulum Nasional v3 -> ./materials/sma/index.ts
 * - Fase E  (Topik 1-5, ID 101-105)   -> ./materials/smaFaseE.ts (Legacy fallback)
 * - Fase F1 (Topik 6-12, ID 106-112)  -> ./materials/smaFaseF1.ts (Legacy fallback)
 * - Fase F2 (Topik 13-16, ID 113-116) -> ./materials/smaFaseF2.ts (Legacy fallback)
 */

import type { ConceptBlock, MaterialItem, CheckpointQuizItem } from './materialsData';
import { SMA_MATERIALS_FASE_E } from './materials/smaFaseE';
import { SMA_MATERIALS_FASE_F1 } from './materials/smaFaseF1';
import { SMA_MATERIALS_FASE_F2 } from './materials/smaFaseF2';
import { SMA_MODULAR_MATERIALS } from './materials/sma';

export type { ConceptBlock, MaterialItem, CheckpointQuizItem };

export interface SmaMaterialItem extends MaterialItem {
  grade: 'Kelas 10' | 'Kelas 11' | 'Kelas 12';
  semester: 1 | 2;
  curriculumPhase: 'Fase E' | 'Fase F';
  relatedOsnTopicId?: number; // Tautan ke ID Topik OSN di materialsData.ts
}

export { SMA_MATERIALS_FASE_E } from './materials/smaFaseE';
export { SMA_MATERIALS_FASE_F1 } from './materials/smaFaseF1';
export { SMA_MATERIALS_FASE_F2 } from './materials/smaFaseF2';
export { SMA_MODULAR_MATERIALS } from './materials/sma';

const LEGACY_SMA_MATERIALS: SmaMaterialItem[] = [
  ...SMA_MATERIALS_FASE_E,
  ...SMA_MATERIALS_FASE_F1,
  ...SMA_MATERIALS_FASE_F2,
];

export const SMA_MATERIALS: SmaMaterialItem[] = [
  ...SMA_MODULAR_MATERIALS,
  ...LEGACY_SMA_MATERIALS.filter((m) => !SMA_MODULAR_MATERIALS.some((mod) => mod.id === m.id)),
].sort((a, b) => a.topic_number - b.topic_number);
