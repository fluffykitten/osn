// Definisi 20 Level dan Gelar Tokoh Kimia Dunia untuk OSN Kimia

export type ChemistryTier = 'basic' | 'osk' | 'osp' | 'osn' | 'icho';

export interface ChemistryLevelDefinition {
  level: number;
  title: string;
  minXp: number;
  tier: ChemistryTier;
  tierName: string;
  figureName: string;
  figureContribution: string;
  badgeStyle: {
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
}

export const CHEMISTRY_LEVELS: ChemistryLevelDefinition[] = [
  // Tier 1: Fondasi Zat & Era Klasik (Level 1 - 4)
  {
    level: 1,
    title: 'Murid Dalton',
    minXp: 0,
    tier: 'basic',
    tierName: 'Fondasi Zat & Era Klasik',
    figureName: 'John Dalton',
    figureContribution: 'Perintis teori atom modern & hukum kelipatan perbandingan',
    badgeStyle: {
      bg: 'bg-slate-100 dark:bg-slate-800/80',
      text: 'text-slate-700 dark:text-slate-200',
      border: 'border-slate-300 dark:border-slate-700',
      accent: 'text-slate-500',
    },
  },
  {
    level: 2,
    title: 'Analis Lavoisier',
    minXp: 250,
    tier: 'basic',
    tierName: 'Fondasi Zat & Era Klasik',
    figureName: 'Antoine Lavoisier',
    figureContribution: 'Hukum kekekalan massa & perintis tata nama kimia modern',
    badgeStyle: {
      bg: 'bg-slate-100 dark:bg-slate-800/80',
      text: 'text-slate-700 dark:text-slate-200',
      border: 'border-slate-300 dark:border-slate-700',
      accent: 'text-slate-500',
    },
  },
  {
    level: 3,
    title: 'Peneliti Rutherford',
    minXp: 600,
    tier: 'basic',
    tierName: 'Fondasi Zat & Era Klasik',
    figureName: 'Ernest Rutherford',
    figureContribution: 'Eksperimen hamburan partikel alfa & penemu inti atom',
    badgeStyle: {
      bg: 'bg-slate-100 dark:bg-slate-800/80',
      text: 'text-slate-700 dark:text-slate-200',
      border: 'border-slate-300 dark:border-slate-700',
      accent: 'text-slate-500',
    },
  },
  {
    level: 4,
    title: 'Kolega Avogadro',
    minXp: 1050,
    tier: 'basic',
    tierName: 'Fondasi Zat & Era Klasik',
    figureName: 'Amedeo Avogadro',
    figureContribution: 'Konsep bilangan partikel mol & hipotesis gas ideal',
    badgeStyle: {
      bg: 'bg-slate-100 dark:bg-slate-800/80',
      text: 'text-slate-700 dark:text-slate-200',
      border: 'border-slate-300 dark:border-slate-700',
      accent: 'text-slate-500',
    },
  },

  // Tier 2: Seleksi Kabupaten / OSK (Level 5 - 8)
  {
    level: 5,
    title: 'Praktikan Arrhenius',
    minXp: 1600,
    tier: 'osk',
    tierName: 'Seleksi Kabupaten / OSK',
    figureName: 'Svante Arrhenius',
    figureContribution: 'Teori disosiasi ion & formulasi energi aktivasi laju',
    badgeStyle: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      text: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-300 dark:border-emerald-800',
      accent: 'text-emerald-600',
    },
  },
  {
    level: 6,
    title: 'Arsitek Lewis',
    minXp: 2250,
    tier: 'osk',
    tierName: 'Seleksi Kabupaten / OSK',
    figureName: 'Gilbert N. Lewis',
    figureContribution: 'Struktur ikatan kovalen, oktet, & konsep transfer pasangan elektron',
    badgeStyle: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      text: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-300 dark:border-emerald-800',
      accent: 'text-emerald-600',
    },
  },
  {
    level: 7,
    title: 'Spesialis Le Chatelier',
    minXp: 3000,
    tier: 'osk',
    tierName: 'Seleksi Kabupaten / OSK',
    figureName: 'Henri Le Chatelier',
    figureContribution: 'Asas pergeseran kesetimbangan reaksi terhadap gangguan termodinamika',
    badgeStyle: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      text: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-300 dark:border-emerald-800',
      accent: 'text-emerald-600',
    },
  },
  {
    level: 8,
    title: 'Teoretikus Bohr',
    minXp: 3850,
    tier: 'osk',
    tierName: 'Seleksi Kabupaten / OSK',
    figureName: 'Niels Bohr',
    figureContribution: 'Model atom terkuantisasi & spektrum transisi foton hidrogen',
    badgeStyle: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      text: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-300 dark:border-emerald-800',
      accent: 'text-emerald-600',
    },
  },

  // Tier 3: Seleksi Provinsi / OSP (Level 9 - 12)
  {
    level: 9,
    title: 'Kurator Mendeleev',
    minXp: 4800,
    tier: 'osp',
    tierName: 'Seleksi Provinsi / OSP',
    figureName: 'Dmitri Mendeleev',
    figureContribution: 'Arsitek penyusun hukum periodisitas dan tabel periodik unsur',
    badgeStyle: {
      bg: 'bg-sky-50 dark:bg-sky-950/60',
      text: 'text-sky-800 dark:text-sky-300',
      border: 'border-sky-300 dark:border-sky-800',
      accent: 'text-sky-600',
    },
  },
  {
    level: 10,
    title: 'Fisikawan Gibbs',
    minXp: 5850,
    tier: 'osp',
    tierName: 'Seleksi Provinsi / OSP',
    figureName: 'J. Willard Gibbs',
    figureContribution: 'Potensial kimia, entropi, & fungsi energi bebas termodinamika',
    badgeStyle: {
      bg: 'bg-sky-50 dark:bg-sky-950/60',
      text: 'text-sky-800 dark:text-sky-300',
      border: 'border-sky-300 dark:border-sky-800',
      accent: 'text-sky-600',
    },
  },
  {
    level: 11,
    title: 'Pelopor van \'t Hoff',
    minXp: 7000,
    tier: 'osp',
    tierName: 'Seleksi Provinsi / OSP',
    figureName: 'Jacobus H. van \'t Hoff',
    figureContribution: 'Penerima Hadiah Nobel Kimia pertama, kinetika kimia, & osmometri',
    badgeStyle: {
      bg: 'bg-sky-50 dark:bg-sky-950/60',
      text: 'text-sky-800 dark:text-sky-300',
      border: 'border-sky-300 dark:border-sky-800',
      accent: 'text-sky-600',
    },
  },
  {
    level: 12,
    title: 'Sintetis Kekulé',
    minXp: 8250,
    tier: 'osp',
    tierName: 'Seleksi Provinsi / OSP',
    figureName: 'August Kekulé',
    figureContribution: 'Teori cincin aromatisitas benzena & tetravalensi atom karbon',
    badgeStyle: {
      bg: 'bg-sky-50 dark:bg-sky-950/60',
      text: 'text-sky-800 dark:text-sky-300',
      border: 'border-sky-300 dark:border-sky-800',
      accent: 'text-sky-600',
    },
  },

  // Tier 4: Tingkat Nasional / OSN (Level 13 - 16)
  {
    level: 13,
    title: 'Master Werner',
    minXp: 9600,
    tier: 'osn',
    tierName: 'Tingkat Nasional / OSN',
    figureName: 'Alfred Werner',
    figureContribution: 'Pelopor kimia koordinasi, bilangan koordinasi, & isomer senyawa kompleks',
    badgeStyle: {
      bg: 'bg-amber-50 dark:bg-amber-950/60',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-300 dark:border-amber-800',
      accent: 'text-amber-600',
    },
  },
  {
    level: 14,
    title: 'Elit Marie Curie',
    minXp: 11050,
    tier: 'osn',
    tierName: 'Tingkat Nasional / OSN',
    figureName: 'Marie Skłodowska-Curie',
    figureContribution: 'Isolasi radium & polonium, pelopor radioaktivitas, & peraih 2 Nobel',
    badgeStyle: {
      bg: 'bg-amber-50 dark:bg-amber-950/60',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-300 dark:border-amber-800',
      accent: 'text-amber-600',
    },
  },
  {
    level: 15,
    title: 'Kampiun Pauling',
    minXp: 12600,
    tier: 'osn',
    tierName: 'Tingkat Nasional / OSN',
    figureName: 'Linus Pauling',
    figureContribution: 'Hibridisasi orbital, skala elektronegativitas, & sifat ikatan kimia',
    badgeStyle: {
      bg: 'bg-amber-50 dark:bg-amber-950/60',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-300 dark:border-amber-800',
      accent: 'text-amber-600',
    },
  },
  {
    level: 16,
    title: 'Kuantum Schrödinger',
    minXp: 14250,
    tier: 'osn',
    tierName: 'Tingkat Nasional / OSN',
    figureName: 'Erwin Schrödinger',
    figureContribution: 'Mekanika kuantum gelombang, persamaan Schrödinger, & bentuk orbital',
    badgeStyle: {
      bg: 'bg-amber-50 dark:bg-amber-950/60',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-300 dark:border-amber-800',
      accent: 'text-amber-600',
    },
  },

  // Tier 5: Pelatnas & Kancah Dunia / IChO (Level 17 - 20)
  {
    level: 17,
    title: 'Maestro Woodward',
    minXp: 16000,
    tier: 'icho',
    tierName: 'Pelatnas & Kancah Dunia / IChO',
    figureName: 'Robert B. Woodward',
    figureContribution: 'Master sintesis total molekul organik kompleks & aturan Woodward-Hoffmann',
    badgeStyle: {
      bg: 'bg-purple-50 dark:bg-purple-950/60',
      text: 'text-purple-800 dark:text-purple-300',
      border: 'border-purple-300 dark:border-purple-800',
      accent: 'text-purple-600',
    },
  },
  {
    level: 18,
    title: 'Visioner Zewail',
    minXp: 17850,
    tier: 'icho',
    tierName: 'Pelatnas & Kancah Dunia / IChO',
    figureName: 'Ahmed Zewail',
    figureContribution: 'Bapak femtokimia, pemantau transisi dinamika reaksi atom dalam femtodetik',
    badgeStyle: {
      bg: 'bg-purple-50 dark:bg-purple-950/60',
      text: 'text-purple-800 dark:text-purple-300',
      border: 'border-purple-300 dark:border-purple-800',
      accent: 'text-purple-600',
    },
  },
  {
    level: 19,
    title: 'Grandmaster Seaborg',
    minXp: 19800,
    tier: 'icho',
    tierName: 'Pelatnas & Kancah Dunia / IChO',
    figureName: 'Glenn T. Seaborg',
    figureContribution: 'Penemu konsep aktinida, 10 unsur transuranium, & unsur seaborgium',
    badgeStyle: {
      bg: 'bg-purple-50 dark:bg-purple-950/60',
      text: 'text-purple-800 dark:text-purple-300',
      border: 'border-purple-300 dark:border-purple-800',
      accent: 'text-purple-600',
    },
  },
  {
    level: 20,
    title: 'Legenda Jabir ibn Hayyan',
    minXp: 21850,
    tier: 'icho',
    tierName: 'Mahakarya Alkimia Dunia',
    figureName: 'Jabir ibn Hayyan (Geber)',
    figureContribution: 'Bapak Alkimia Dunia & perintis metodologi eksperimental sains laboratorium',
    badgeStyle: {
      bg: 'bg-gradient-to-r from-purple-100 to-amber-100 dark:from-purple-950/70 dark:to-amber-950/70',
      text: 'text-purple-900 dark:text-purple-200 font-extrabold',
      border: 'border-purple-400 dark:border-purple-600 shadow-xs',
      accent: 'text-amber-600',
    },
  },
];

/**
 * Mendapatkan definisi level berdasarkan nomor level (1 - 20)
 */
export function getLevelDefinition(level: number): ChemistryLevelDefinition {
  const safeLevel = Math.max(1, Math.floor(level));
  if (safeLevel >= 20) {
    return CHEMISTRY_LEVELS[CHEMISTRY_LEVELS.length - 1];
  }
  return CHEMISTRY_LEVELS[safeLevel - 1] || CHEMISTRY_LEVELS[0];
}

/**
 * Menghitung level yang sesuai berdasarkan total XP akumulasi
 */
export function getLevelFromXp(xp: number): ChemistryLevelDefinition {
  const safeXp = Math.max(0, xp || 0);
  for (let i = CHEMISTRY_LEVELS.length - 1; i >= 0; i--) {
    if (safeXp >= CHEMISTRY_LEVELS[i].minXp) {
      return CHEMISTRY_LEVELS[i];
    }
  }
  return CHEMISTRY_LEVELS[0];
}

export interface LevelProgressReport {
  currentLevel: number;
  currentTitle: string;
  totalXp: number;
  levelMinXp: number;
  nextLevelMinXp: number | null;
  xpInCurrentLevel: number;
  xpNeededForNextLevel: number;
  progressPercent: number;
  isMaxLevel: boolean;
  definition: ChemistryLevelDefinition;
  nextDefinition: ChemistryLevelDefinition | null;
}

/**
 * Menghitung detail progres level saat ini dan menuju level berikutnya
 */
export function calculateLevelProgress(xp: number): LevelProgressReport {
  const totalXp = Math.max(0, xp || 0);
  const definition = getLevelFromXp(totalXp);
  const currentLevel = definition.level;
  const isMaxLevel = currentLevel >= 20;

  if (isMaxLevel) {
    return {
      currentLevel,
      currentTitle: definition.title,
      totalXp,
      levelMinXp: definition.minXp,
      nextLevelMinXp: null,
      xpInCurrentLevel: totalXp - definition.minXp,
      xpNeededForNextLevel: 0,
      progressPercent: 100,
      isMaxLevel: true,
      definition,
      nextDefinition: null,
    };
  }

  const nextDefinition = CHEMISTRY_LEVELS[currentLevel]; // index level berikutnya
  const levelMinXp = definition.minXp;
  const nextLevelMinXp = nextDefinition.minXp;
  const levelSpan = nextLevelMinXp - levelMinXp;
  const xpInCurrentLevel = totalXp - levelMinXp;
  const xpNeededForNextLevel = Math.max(0, nextLevelMinXp - totalXp);
  const progressPercent = Math.min(100, Math.max(0, Math.round((xpInCurrentLevel / levelSpan) * 100)));

  return {
    currentLevel,
    currentTitle: definition.title,
    totalXp,
    levelMinXp,
    nextLevelMinXp,
    xpInCurrentLevel,
    xpNeededForNextLevel,
    progressPercent,
    isMaxLevel: false,
    definition,
    nextDefinition,
  };
}
