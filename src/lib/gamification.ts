// Gamification helpers for OSN Kimia Mastery
import confetti from 'canvas-confetti';

export const XP_PER_LEVEL = 250;

export function calculateLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export function calculateLevelProgress(xp: number): { currentLevel: number; currentXp: number; nextLevelXp: number; progressPercent: number } {
  const currentLevel = calculateLevel(xp);
  const currentLevelBaseXp = (currentLevel - 1) * XP_PER_LEVEL;
  const currentXpInLevel = xp - currentLevelBaseXp;
  const progressPercent = Math.min(100, Math.round((currentXpInLevel / XP_PER_LEVEL) * 100));

  return {
    currentLevel,
    currentXp: currentXpInLevel,
    nextLevelXp: XP_PER_LEVEL,
    progressPercent,
  };
}

/**
 * Triggers subtle elegant celebration confetti
 */
export function triggerCelebration(): void {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#059669', '#10b981', '#4f46e5', '#f59e0b'],
      disableForReducedMotion: true,
    });
  } catch (err) {
    console.debug('Confetti disabled or error', err);
  }
}

export interface UserGamificationState {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  role: 'siswa' | 'guru';
}

const STORAGE_KEY = 'osn_gamification_state';

export function getLocalGamificationState(): UserGamificationState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {}

  return {
    xp: 320,
    level: 2,
    streak: 4,
    lastActiveDate: new Date().toISOString().split('T')[0],
    role: 'siswa',
  };
}

export function saveLocalGamificationState(state: UserGamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function addXpLocally(amount: number): UserGamificationState {
  const current = getLocalGamificationState();
  const newXp = current.xp + amount;
  const newLevel = calculateLevel(newXp);
  const updated: UserGamificationState = {
    ...current,
    xp: newXp,
    level: newLevel,
  };
  saveLocalGamificationState(updated);
  triggerCelebration();
  return updated;
}
