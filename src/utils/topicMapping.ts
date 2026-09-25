/**
 * topicMapping.ts
 * Utilitas pemetaan dwiarah (bidirectional mapping) dan resolusi metadata antara:
 * - 16 Topik Sains Kimia SMA (Kurikulum Merdeka Fase E & F / K13)
 * - 10 Pilar Silabus OSN Kimia (Puspresnas / IChO)
 */

import { SMA_MATERIALS, type SmaMaterialItem } from '../data/smaMaterialsData';
import { PILLARS_DATA } from '../data/syllabusData';
import type { Question, ModuleItem } from '../types/database';

export interface SmaTopicGroup {
  grade: 'Kelas 10' | 'Kelas 11' | 'Kelas 12';
  phase: 'Fase E' | 'Fase F';
  title: string;
  topics: SmaMaterialItem[];
}

/**
 * 16 Topik Kimia SMA dikelompokkan berdasarkan Jenjang dan Fase Kurikulum Merdeka
 */
export const SMA_TOPIC_GROUPS: SmaTopicGroup[] = [
  {
    grade: 'Kelas 10',
    phase: 'Fase E',
    title: 'Kelas 10 (Fase E) — Fondasi Sains Kimia',
    topics: SMA_MATERIALS.filter((m) => m.grade === 'Kelas 10'),
  },
  {
    grade: 'Kelas 11',
    phase: 'Fase F',
    title: 'Kelas 11 (Fase F) — Termokimia, Kinetika & Kesetimbangan Larutan',
    topics: SMA_MATERIALS.filter((m) => m.grade === 'Kelas 11'),
  },
  {
    grade: 'Kelas 12',
    phase: 'Fase F',
    title: 'Kelas 12 (Fase F) — Koligatif, Redoks, Elektrokimia & Karbon',
    topics: SMA_MATERIALS.filter((m) => m.grade === 'Kelas 12'),
  },
];

/**
 * Mendapatkan detail topik SMA berdasarkan topic_number (1-16) atau ID materi (101-116)
 */
export const getSmaTopic = (topicOrId: number): SmaMaterialItem | undefined => {
  return SMA_MATERIALS.find((m) => m.topic_number === topicOrId || m.id === topicOrId);
};

/**
 * Mendapatkan detail Pilar Silabus OSN berdasarkan pillar_number (1-10)
 */
export const getOsnPillar = (pillarNumber: number): ModuleItem | undefined => {
  return PILLARS_DATA.find((p) => p.pillar_number === pillarNumber || p.id === pillarNumber);
};

/**
 * Pemetaan default pilar OSN ke nomor topik SMA (jika soal SMA belum memiliki sma_topic_number eksplisit)
 */
const DEFAULT_OSN_TO_SMA_TOPIC: Record<number, number> = {
  1: 2, // OSN Pilar 1 (Struktur Atom) -> SMA Topik 2 (Struktur Atom Dasar)
  2: 3, // OSN Pilar 2 (Ikatan Kimia) -> SMA Topik 3 (Ikatan Kimia)
  3: 5, // OSN Pilar 3 (Stoikiometri) -> SMA Topik 5 (Hukum Dasar & Mol)
  4: 6, // OSN Pilar 4 (Termodinamika) -> SMA Topik 6 (Termokimia)
  5: 9, // OSN Pilar 5 (Kesetimbangan & Larutan) -> SMA Topik 9 (Asam Basa)
  6: 7, // OSN Pilar 6 (Kinetika) -> SMA Topik 7 (Laju Reaksi)
  7: 14, // OSN Pilar 7 (Elektrokimia) -> SMA Topik 14 (Redoks & Sel)
  8: 15, // OSN Pilar 8 (Anorganik) -> SMA Topik 15 (Kimia Unsur)
  9: 9,  // OSN Pilar 9 (Analitik) -> SMA Topik 9 (Titrasi)
  10: 16, // OSN Pilar 10 (Organik) -> SMA Topik 16 (Kimia Karbon)
};

/**
 * Mendapatkan topik materi dasar SMA yang menjadi prasyarat untuk suatu Pilar OSN
 */
export const getSmaTopicForOsnPillar = (pillarNumber: number): SmaMaterialItem | undefined => {
  const smaTopicNum = DEFAULT_OSN_TO_SMA_TOPIC[pillarNumber] || 2;
  return getSmaTopic(smaTopicNum);
};

/**
 * Menghasilkan metadata representasi topik pada kartu soal (PracticeBank / QuestionBankBrowser)
 */
export const resolveQuestionTopicMeta = (q: Question): {
  isSma: boolean;
  topicBadgeLabel: string;
  topicTitle: string;
  gradeBadgeLabel?: string;
  curriculumBadge: string;
  materialRoute: string;
  mappedPillarNumber: number;
  mappedSmaTopicNumber?: number;
} => {
  const isSma =
    q.curriculum === 'sma' ||
    q.difficulty?.startsWith('SMA') ||
    (typeof q.sma_topic_number === 'number' && q.sma_topic_number > 0);

  if (isSma) {
    // Tentukan nomor topik SMA (prioritas: q.sma_topic_number, lalu modul/pilar fallback)
    const smaNum =
      q.sma_topic_number ||
      (q.module_id && q.module_id >= 101 && q.module_id <= 116 ? q.module_id - 100 : undefined) ||
      DEFAULT_OSN_TO_SMA_TOPIC[q.pillar_number] ||
      2;

    const smaTopic = getSmaTopic(smaNum);
    const osnPillarNum = smaTopic?.relatedOsnTopicId || q.pillar_number || 1;

    return {
      isSma: true,
      topicBadgeLabel: `SMA Modul #${smaNum}`,
      topicTitle: smaTopic?.title || q.subtopic || 'Materi Inti Kimia SMA',
      gradeBadgeLabel: smaTopic ? `${smaTopic.grade} · ${smaTopic.curriculumPhase}` : 'Kimia SMA',
      curriculumBadge: 'Kurikulum Merdeka SMA',
      materialRoute: smaTopic ? `/materi/${smaTopic.id}?db=sma` : `/materi/sma-${smaNum}`,
      mappedPillarNumber: osnPillarNum,
      mappedSmaTopicNumber: smaNum,
    };
  }

  // OSN Track
  const osnPillar = getOsnPillar(q.pillar_number);
  return {
    isSma: false,
    topicBadgeLabel: `Pilar Silabus #${q.pillar_number}`,
    topicTitle: osnPillar?.title || q.subtopic || 'Silabus OSN',
    gradeBadgeLabel: 'Puspresnas / IChO',
    curriculumBadge: 'Silabus Olimpiade OSN',
    materialRoute: `/materi/${q.pillar_number}?db=osn`,
    mappedPillarNumber: q.pillar_number,
  };
};
