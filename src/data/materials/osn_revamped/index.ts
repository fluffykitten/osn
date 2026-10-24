/**
 * materials/osn_revamped/index.ts
 * Index Modul OSN Kimia Revamped (Arsitektur Pedagogis 4 Pilar)
 * 
 * Topik yang sudah selesai di-revamp:
 * - Topik 4: Termokimia (Intuisi & Formalisasi, Taktik Soal, Pengayaan Inkuiri, Ringkasan Cepat)
 * 
 * Topik lainnya tetap menggunakan materi komprehensif eksisting sebagai basis transisi,
 * sehingga sistem 10 topik selalu utuh dan berfungsi penuh.
 */

import type { MaterialItem } from '../../materialsData.ts';
import {
  OSN_TOPIC_1,
  OSN_TOPIC_2,
  OSN_TOPIC_3,
  OSN_TOPIC_5,
  OSN_TOPIC_6,
  OSN_TOPIC_7,
  OSN_TOPIC_8,
  OSN_TOPIC_9,
  OSN_TOPIC_10,
} from '../osn/index.ts';

import { OSN_REVAMPED_TOPIC_4 } from './osnRevampedTopic04.ts';

export {
  OSN_REVAMPED_TOPIC_4,
};

export const OSN_MATERIALS_REVAMPED_ALL: MaterialItem[] = [
  OSN_TOPIC_1,
  OSN_TOPIC_2,
  OSN_TOPIC_3,
  OSN_REVAMPED_TOPIC_4, // Topik 4 aktif dengan versi 4-Pilar Revamped!
  OSN_TOPIC_5,
  OSN_TOPIC_6,
  OSN_TOPIC_7,
  OSN_TOPIC_8,
  OSN_TOPIC_9,
  OSN_TOPIC_10,
];
