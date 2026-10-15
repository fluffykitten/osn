/**
 * Axioma Academy - Universal Subject & Curriculum Type Definitions
 * Mendefinisikan 4 subjek prioritas (Kimia, Fisika, Matematika, Biologi)
 * dan 5 jalur kurikulum pembelajaran STEM terpadu.
 */

export type SubjectId = 'kimia' | 'fisika' | 'matematika' | 'biologi';

export type StandardCurriculumId =
  | 'nasional'    // Kurikulum Nasional SMA (Merdeka / K13 / Persiapan UTBK-SNBT)
  | 'osn'         // Olimpiade Sains Nasional (OSN-K, OSN-P, OSN, Pelatnas)
  | 'igcse'       // Cambridge IGCSE (Grade 9-10)
  | 'as_level'    // Cambridge International AS Level (Year 11/12)
  | 'a_level';    // Cambridge International A Level (Year 12/13 / A2)

// Legacy alias compatibility: 'sma' -> 'nasional', 'alevel' -> 'a_level'
export type CurriculumId = StandardCurriculumId | 'sma' | 'alevel';

export interface SubjectPalette {
  themeColor: string;        // Hex warna utama
  accentColor: string;       // Hex warna sekunder / hover
  tailwindClass: string;     // Kelas warna Tailwind
  softBadgeBg: string;       // Background badge lembut (Hex)
  softBorder: string;        // Border badge lembut (Hex)
  contrastText: string;      // Warna teks kontras tinggi (Hex)
}

export interface CambridgeExamCodes {
  igcse?: string;            // misal: '0620'
  asLevel?: string;          // misal: '9701'
  aLevel?: string;           // misal: '9701'
}

export interface OlympiadHierarchy {
  stages: string[];          // ['OSN-K', 'OSN-P', 'OSN', 'Pelatnas']
  internationalCode: string; // 'IChO', 'IPhO', 'IMO', 'IBO'
  internationalName: string; // 'International Chemistry Olympiad'
}

export interface SubjectConfig {
  id: SubjectId;
  name: string;              // "Kimia", "Fisika", "Matematika", "Biologi"
  nameEn: string;            // "Chemistry", "Physics", "Mathematics", "Biology"
  tagline: string;
  description: string;
  iconName: string;          // Identifier nama ikon Lucide
  symbolGlyph: string;       // "⚛", "⚡", "∑", "🧬"
  status: 'active' | 'beta' | 'preview';
  palette: SubjectPalette;
  availableCurricula: StandardCurriculumId[];
  cambridgeCodes: CambridgeExamCodes;
  olympiadHierarchy: OlympiadHierarchy;
  toolbarType: 'chem' | 'physics' | 'math' | 'bio';
}

export interface CurriculumConfig {
  id: StandardCurriculumId;
  name: string;
  shortLabel: string;
  description: string;
  badgeBgClass: string;
  badgeTextClass: string;
  badgeBorderClass: string;
  level: 'sekolah' | 'olimpiade' | 'internasional';
}

/** Type guard untuk SubjectId */
export function isSubjectId(value: unknown): value is SubjectId {
  return (
    typeof value === 'string' &&
    ['kimia', 'fisika', 'matematika', 'biologi'].includes(value)
  );
}

/** Type guard untuk CurriculumId */
export function isCurriculumId(value: unknown): value is CurriculumId {
  return (
    typeof value === 'string' &&
    ['nasional', 'osn', 'igcse', 'as_level', 'a_level', 'sma', 'alevel'].includes(value)
  );
}

/** Normalisasi alias 'sma' -> 'nasional' dan 'alevel' -> 'a_level' */
export function normalizeCurriculumId(id?: string | null): StandardCurriculumId {
  if (!id) return 'osn';
  if (id === 'sma') return 'nasional';
  if (id === 'alevel') return 'a_level';
  if (['nasional', 'osn', 'igcse', 'as_level', 'a_level'].includes(id)) {
    return id as StandardCurriculumId;
  }
  return 'osn';
}
