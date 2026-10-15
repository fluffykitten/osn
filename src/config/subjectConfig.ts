/**
 * Axioma Academy - Central Subject & Curriculum Configuration
 * Berisi metadata lengkap 4 subjek prioritas dan 5 kurikulum pembelajaran STEM
 */

import type {
  SubjectId,
  SubjectConfig,
  StandardCurriculumId,
  CurriculumConfig,
} from '../types/subject';
import { normalizeCurriculumId } from '../types/subject';

export const SUBJECT_CONFIGS: Record<SubjectId, SubjectConfig> = {
  kimia: {
    id: 'kimia',
    name: 'Kimia',
    nameEn: 'Chemistry',
    tagline: 'Struktur Molekul, Termodinamika, dan Sintesis Senyawa',
    description:
      'Penguasaan struktur molekul, termodinamika kimia, serta reaksi analitis untuk Kurikulum Nasional, Cambridge, dan Olimpiade Sains.',
    iconName: 'FlaskConical',
    symbolGlyph: '⚛',
    status: 'active',
    palette: {
      themeColor: '#0D9488', // Teal 600
      accentColor: '#14B8A6', // Teal 500
      tailwindClass: 'teal-600',
      softBadgeBg: '#CCFBF1', // Teal 100
      softBorder: '#99F6E4',
      contrastText: '#115E59', // Teal 800
    },
    availableCurricula: ['nasional', 'osn', 'igcse', 'as_level', 'a_level'],
    cambridgeCodes: {
      igcse: '0620',
      asLevel: '9701',
      aLevel: '9701',
    },
    olympiadHierarchy: {
      stages: ['OSN-K', 'OSN-P', 'OSN', 'Pelatnas'],
      internationalCode: 'IChO',
      internationalName: 'International Chemistry Olympiad',
    },
    toolbarType: 'chem',
  },

  fisika: {
    id: 'fisika',
    name: 'Fisika',
    nameEn: 'Physics',
    tagline: 'Mekanika, Elektromagnetisme, dan Fisika Modern',
    description:
      'Penguasaan mekanika, elektromagnetisme, serta fisika modern untuk Kurikulum Nasional, Cambridge, dan Olimpiade Sains.',
    iconName: 'Compass',
    symbolGlyph: '⚡',
    status: 'beta',
    palette: {
      themeColor: '#2563EB', // Blue 600
      accentColor: '#3B82F6', // Blue 500
      tailwindClass: 'blue-600',
      softBadgeBg: '#DBEAFE', // Blue 100
      softBorder: '#BFDBFE',
      contrastText: '#1E40AF', // Blue 800
    },
    availableCurricula: ['nasional', 'osn', 'igcse', 'as_level', 'a_level'],
    cambridgeCodes: {
      igcse: '0625',
      asLevel: '9702',
      aLevel: '9702',
    },
    olympiadHierarchy: {
      stages: ['OSN-K', 'OSN-P', 'OSN', 'Pelatnas'],
      internationalCode: 'IPhO',
      internationalName: 'International Physics Olympiad',
    },
    toolbarType: 'physics',
  },

  matematika: {
    id: 'matematika',
    name: 'Matematika',
    nameEn: 'Mathematics',
    tagline: 'Aljabar, Kalkulus Lanjutan, dan Penalaran Logis',
    description:
      'Penguasaan aljabar, kalkulus lanjutan, serta penalaran logis untuk Kurikulum Nasional, Cambridge, dan Olimpiade Sains.',
    iconName: 'Percent',
    symbolGlyph: '∑',
    status: 'preview',
    palette: {
      themeColor: '#7C3AED', // Violet 600
      accentColor: '#8B5CF6', // Violet 500
      tailwindClass: 'violet-600',
      softBadgeBg: '#EDE9FE', // Violet 100
      softBorder: '#DDD6FE',
      contrastText: '#5B21B6', // Violet 800
    },
    availableCurricula: ['nasional', 'osn', 'igcse', 'as_level', 'a_level'],
    cambridgeCodes: {
      igcse: '0580 / 0606',
      asLevel: '9709',
      aLevel: '9709',
    },
    olympiadHierarchy: {
      stages: ['OSN-K', 'OSN-P', 'OSN', 'Pelatnas'],
      internationalCode: 'IMO',
      internationalName: 'International Mathematical Olympiad',
    },
    toolbarType: 'math',
  },

  biologi: {
    id: 'biologi',
    name: 'Biologi',
    nameEn: 'Biology',
    tagline: 'Biologi Seluler, Genetika, dan Fisiologi Molekuler',
    description:
      'Penguasaan biologi seluler, genetika, serta fisiologi molekuler untuk Kurikulum Nasional, Cambridge, dan Olimpiade Sains.',
    iconName: 'Dna',
    symbolGlyph: '🧬',
    status: 'preview',
    palette: {
      themeColor: '#059669', // Emerald 600
      accentColor: '#10B981', // Emerald 500
      tailwindClass: 'emerald-600',
      softBadgeBg: '#D1FAE5', // Emerald 100
      softBorder: '#A7F3D0',
      contrastText: '#065F46', // Emerald 800
    },
    availableCurricula: ['nasional', 'osn', 'igcse', 'as_level', 'a_level'],
    cambridgeCodes: {
      igcse: '0610',
      asLevel: '9700',
      aLevel: '9700',
    },
    olympiadHierarchy: {
      stages: ['OSN-K', 'OSN-P', 'OSN', 'Pelatnas'],
      internationalCode: 'IBO',
      internationalName: 'International Biology Olympiad',
    },
    toolbarType: 'bio',
  },
};

export const SUBJECT_LIST: SubjectConfig[] = [
  SUBJECT_CONFIGS.kimia,
  SUBJECT_CONFIGS.fisika,
  SUBJECT_CONFIGS.matematika,
  SUBJECT_CONFIGS.biologi,
];

export const CURRICULUM_CONFIGS: Record<StandardCurriculumId, CurriculumConfig> = {
  nasional: {
    id: 'nasional',
    name: 'Kurikulum Nasional SMA',
    shortLabel: 'NASIONAL',
    description: 'Kurikulum Merdeka / K13, Asesmen Sumatif, dan Persiapan UTBK-SNBT',
    badgeBgClass: 'bg-rose-50',
    badgeTextClass: 'text-rose-700',
    badgeBorderClass: 'border-rose-200',
    level: 'sekolah',
  },
  osn: {
    id: 'osn',
    name: 'Olimpiade Sains Nasional',
    shortLabel: 'OSN',
    description: 'Jenjang Kompetisi Bertingkat: OSN-K, OSN-P, OSN Nasional, dan Pelatnas Dunia',
    badgeBgClass: 'bg-amber-50',
    badgeTextClass: 'text-amber-700',
    badgeBorderClass: 'border-amber-300',
    level: 'olimpiade',
  },
  igcse: {
    id: 'igcse',
    name: 'Cambridge IGCSE',
    shortLabel: 'IGCSE',
    description: 'International General Certificate of Secondary Education (Grade 9-10)',
    badgeBgClass: 'bg-sky-50',
    badgeTextClass: 'text-sky-700',
    badgeBorderClass: 'border-sky-200',
    level: 'internasional',
  },
  as_level: {
    id: 'as_level',
    name: 'Cambridge International AS Level',
    shortLabel: 'AS-LEVEL',
    description: 'Advanced Subsidiary Level (Year 11/12 - Teori Lanjutan & Praktikum)',
    badgeBgClass: 'bg-indigo-50',
    badgeTextClass: 'text-indigo-700',
    badgeBorderClass: 'border-indigo-200',
    level: 'internasional',
  },
  a_level: {
    id: 'a_level',
    name: 'Cambridge International A Level',
    shortLabel: 'A-LEVEL',
    description: 'Full Advanced Level (Year 12/13 / A2 - Standar Pra-Universitas Internasional)',
    badgeBgClass: 'bg-purple-50',
    badgeTextClass: 'text-purple-700',
    badgeBorderClass: 'border-purple-200',
    level: 'internasional',
  },
};

export const CURRICULUM_LIST: CurriculumConfig[] = [
  CURRICULUM_CONFIGS.nasional,
  CURRICULUM_CONFIGS.osn,
  CURRICULUM_CONFIGS.igcse,
  CURRICULUM_CONFIGS.as_level,
  CURRICULUM_CONFIGS.a_level,
];

/** Ambil konfigurasi subjek dengan fallback aman ke 'kimia' */
export function getSubjectConfig(id?: string | null): SubjectConfig {
  if (id && id in SUBJECT_CONFIGS) {
    return SUBJECT_CONFIGS[id as SubjectId];
  }
  return SUBJECT_CONFIGS.kimia;
}

/** Ambil konfigurasi kurikulum dengan normalisasi alias */
export function getCurriculumConfig(id?: string | null): CurriculumConfig {
  const normalized = normalizeCurriculumId(id);
  return CURRICULUM_CONFIGS[normalized] || CURRICULUM_CONFIGS.osn;
}

/** Format label kurikulum ringkas */
export function formatCurriculumLabel(id?: string | null): string {
  return getCurriculumConfig(id).shortLabel;
}

/** Format nama kurikulum lengkap */
export function formatCurriculumName(id?: string | null): string {
  return getCurriculumConfig(id).name;
}
