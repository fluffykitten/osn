/**
 * materialsData.ts
 * Database Materi Sains Kimia Terstruktur Standar Puspresnas & IChO
 * 
 * Modularisasi:
 * - 10 Pilar Silabus OSN/IChO dipecah ke folder: ./materials/osn/
 *   - Topik 1  (Struktur Atom & Periodisitas Unsur)     -> ./materials/osn/osnTopic01.ts
 *   - Topik 2  (Ikatan Kimia & Geometri Molekul)       -> ./materials/osn/osnTopic02.ts
 *   - Topik 3  (Stoikiometri & Wujud Zat)              -> ./materials/osn/osnTopic03.ts
 *   - Topik 4  (Termodinamika Kimia & Termokimia)      -> ./materials/osn/osnTopic04.ts
 *   - Topik 5  (Kesetimbangan Kimia & Larutan)         -> ./materials/osn/osnTopic05.ts
 *   - Topik 6  (Kinetika Kimia & Mekanisme Reaksi)     -> ./materials/osn/osnTopic06.ts
 *   - Topik 7  (Elektrokimia & Potensial Sel)          -> ./materials/osn/osnTopic07.ts
 *   - Topik 8  (Kimia Anorganik & Senyawa Koordinasi)  -> ./materials/osn/osnTopic08.ts
 *   - Topik 9  (Kimia Analitik & Dasar Spektroskopi)   -> ./materials/osn/osnTopic09.ts
 *   - Topik 10 (Kimia Organik & Biokimia)              -> ./materials/osn/osnTopic10.ts
 */

export interface CheckpointQuizItem {
  id: string; // ID unik per soal, misal: 'chk-101-pre1-q1'
  type: 'multiple_choice' | 'true_false';
  question: string; // KaTeX supported
  options?: string[]; // Array 4 opsi untuk multiple_choice
  correctAnswer: number | boolean; // Index (0-3) untuk multiple_choice, boolean untuk true_false
  explanation: string; // KaTeX supported penjelasan konseptual mendalam
  misconceptionTarget?: string; // Miskonsepsi spesifik yang disasar
}

export interface ConceptBlock {
  tag: string; // Tag slug unik untuk id DOM ('concept-${block.tag}') dan URL anchor
  tags?: string[]; // Array tag-tag atomik spesifik (misal: ['entalpi-reaksi', 'hukum-hess', 'hukum-kirchhoff'])
  title: string;
  summary: string;
  content: string; // Penjelasan terperinci berformat KaTeX ($...$ dan $$...$$) serta mhchem
  keyFormulas?: { name: string; formula: string }[];
  checkpointQuizzes?: CheckpointQuizItem[]; // Bank kuis uji pemahaman cepat konseptual
}

export interface MaterialItem {
  id: number;
  topic_number: number; // Nomor urut topik silabus 1 s.d. 10
  title: string;
  slug: string;
  category: string;
  level: 'OSN-K' | 'OSN-P' | 'OSN' | 'IChO' | 'SMA' | 'IGCSE' | 'AS' | 'A2';
  readTimeMinutes: number;
  summary: string;
  allTags: string[];
  // 3 Tahap Alur Pedagogis:
  prerequisites: ConceptBlock[];
  core_concepts: ConceptBlock[];
  worked_examples: ConceptBlock[];
}

import {
  OSN_MATERIALS_ALL,
  OSN_TOPIC_1,
  OSN_TOPIC_2,
  OSN_TOPIC_3,
  OSN_TOPIC_4,
  OSN_TOPIC_5,
  OSN_TOPIC_6,
  OSN_TOPIC_7,
  OSN_TOPIC_8,
  OSN_TOPIC_9,
  OSN_TOPIC_10,
} from './materials/osn/index.ts';

export {
  OSN_MATERIALS_ALL,
  OSN_TOPIC_1,
  OSN_TOPIC_2,
  OSN_TOPIC_3,
  OSN_TOPIC_4,
  OSN_TOPIC_5,
  OSN_TOPIC_6,
  OSN_TOPIC_7,
  OSN_TOPIC_8,
  OSN_TOPIC_9,
  OSN_TOPIC_10,
};

export const OSN_MATERIALS: MaterialItem[] = OSN_MATERIALS_ALL;

/**
 * Mencari modul materi dan blok konsep yang cocok berdasarkan tag soal
 */
export function findConceptByTag(tag: string): {
  material: MaterialItem;
  block: ConceptBlock;
  stage: 'prerequisite' | 'core' | 'example';
} | null {
  if (!tag) return null;
  const normalized = tag.toLowerCase().trim().replace(/^#/, '');

  const matchesBlock = (c: ConceptBlock) => {
    const cTag = c.tag.toLowerCase();
    if (cTag === normalized || cTag.includes(normalized) || normalized.includes(cTag)) return true;
    if (
      c.tags &&
      c.tags.some((t) => {
        const tNorm = t.toLowerCase().trim().replace(/^#/, '');
        return tNorm === normalized || tNorm.includes(normalized) || normalized.includes(tNorm);
      })
    ) {
      return true;
    }
    return false;
  };

  for (const mat of OSN_MATERIALS) {
    // 1. Cari di prasyarat
    const foundPre = mat.prerequisites.find(matchesBlock);
    if (foundPre) return { material: mat, block: foundPre, stage: 'prerequisite' };

    // 2. Cari di materi inti
    const foundCore = mat.core_concepts.find(matchesBlock);
    if (foundCore) return { material: mat, block: foundCore, stage: 'core' };

    // 3. Cari di contoh soal
    const foundEx = mat.worked_examples.find(matchesBlock);
    if (foundEx) return { material: mat, block: foundEx, stage: 'example' };
  }

  // 4. Jika belum ketemu, cari di array allTags
  for (const mat of OSN_MATERIALS) {
    if (
      mat.allTags.some((t) => {
        const tNorm = t.toLowerCase().trim().replace(/^#/, '');
        return tNorm === normalized || tNorm.includes(normalized) || normalized.includes(tNorm);
      })
    ) {
      return {
        material: mat,
        block: mat.core_concepts[0] || mat.prerequisites[0],
        stage: 'core',
      };
    }
  }

  return null;
}
