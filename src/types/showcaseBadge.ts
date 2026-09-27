// Tipe data & kontrak untuk Kustomisasi Showcase Badges Profil Siswa OSN Kimia

export type ShowcaseBadgeCategory = 'stats' | 'performance' | 'achievement' | 'personal';

export type ShowcaseStatType =
  | 'streak'          // 🔥 Streak Belajar Harian
  | 'total_xp'        // ⚡ Total XP Sains
  | 'level'           // 🏅 Level & Tokoh Kimia
  | 'accuracy'        // 🎯 Rata-rata Akurasi Pengerjaan (%)
  | 'solved_count'    // 📝 Total Lembar Soal Selesai
  | 'mastered_topics' // 📚 Topik OSN Dikuasai (X / 10)
  | 'target_olympiad' // 🏆 Target Jenjang Olimpiade (OSK/OSP/OSN/IChO)
  | 'perfect_count';  // 🌟 Berapa kali mendapat nilai sempurna 100%

export interface ShowcaseBadgeSlot {
  slotIndex: number; // 0, 1, 2, dst.
  category: ShowcaseBadgeCategory;
  statType?: ShowcaseStatType;
  achievementId?: string; // ID achievement (dari utils/achievementConstants.ts) jika category === 'achievement'
}

export interface StudentShowcaseConfig {
  maxSlots: number;
  slots: ShowcaseBadgeSlot[];
}

export interface ShowcaseDataPayload {
  streak: number;
  xp: number;
  level: number;
  accuracy: number;
  solvedCount: number;
  masteredTopicsCount: number;
  targetOlympiad?: string;
  perfectCount: number;
}
