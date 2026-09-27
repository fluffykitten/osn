// Gamification helpers for OSN Kimia Mastery (Revamped with Chemistry Figures)
import {
  getLevelFromXp,
  calculateLevelProgress as calcProgressNew,
  getLevelDefinition,
  type ChemistryLevelDefinition,
  type LevelProgressReport,
} from '../utils/gamificationConstants';
import {
  getLocalGamificationState as getLocalState,
  saveLocalGamificationState as saveLocalState,
  triggerCelebration as triggerCelebrationFx,
  awardXp as awardXpService,
  type UserGamificationState as ServiceGamificationState,
} from '../services/gamificationService';

export const XP_PER_LEVEL = 250; // Legacy constant

export function calculateLevel(xp: number): number {
  return getLevelFromXp(xp).level;
}

export function calculateLevelProgress(xp: number): {
  currentLevel: number;
  currentXp: number;
  nextLevelXp: number;
  progressPercent: number;
  title: string;
} {
  const p = calcProgressNew(xp);
  return {
    currentLevel: p.currentLevel,
    currentXp: p.xpInCurrentLevel,
    nextLevelXp: p.nextDefinition ? p.nextDefinition.minXp - p.levelMinXp : 0,
    progressPercent: p.progressPercent,
    title: p.currentTitle,
  };
}

export function triggerCelebration(): void {
  triggerCelebrationFx();
}

export type UserGamificationState = ServiceGamificationState;

export function getLocalGamificationState(): UserGamificationState {
  return getLocalState();
}

export function saveLocalGamificationState(state: UserGamificationState): void {
  saveLocalState(state);
}

export function addXpLocally(amount: number): UserGamificationState {
  const current = getLocalState();
  const newXp = (current.xp || 0) + (amount || 0);
  const newLevel = calculateLevel(newXp);
  const updated: UserGamificationState = {
    ...current,
    xp: newXp,
    level: newLevel,
  };
  saveLocalState(updated);
  if (newLevel > (current.level || 1)) {
    triggerCelebration();
  }
  return updated;
}

export {
  getLevelDefinition,
  getLevelFromXp,
  awardXpService as awardXp,
  type ChemistryLevelDefinition,
  type LevelProgressReport,
};
