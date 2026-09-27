// Service Terpusat Gamifikasi & Sinkronisasi XP / Leveling Siswa OSN Kimia
import { getSupabaseClient } from '../lib/supabaseClient';
import {
  getLevelDefinition,
  getLevelFromXp,
  calculateLevelProgress,
  type LevelProgressReport,
  type ChemistryLevelDefinition,
} from '../utils/gamificationConstants';

export interface UserGamificationState {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  role: 'siswa' | 'guru' | 'student' | 'teacher';
}

const STORAGE_KEY = 'osn_gamification_state';

/**
 * Mengambil state gamifikasi dari cache lokal untuk persistensi offline
 */
export function getLocalGamificationState(): UserGamificationState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {}

  return {
    xp: 0,
    level: 1,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    role: 'student',
  };
}

/**
 * Menyimpan state gamifikasi ke cache lokal
 */
export function saveLocalGamificationState(state: UserGamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    // Beritahukan tab atau listener lokal lain
    window.dispatchEvent(
      new CustomEvent('osn_gamification_updated', {
        detail: state,
      })
    );
  } catch {}
}

/**
 * Memunculkan efek konfeti saat kenaikan level atau perayaan XP
 */
export function triggerCelebration(): void {
  import('canvas-confetti')
    .then((m) => {
      const confetti = m.default || m;
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#059669', '#10b981', '#0284c7', '#38bdf8', '#f59e0b', '#8b5cf6'],
        disableForReducedMotion: true,
      });
    })
    .catch((err) => {
      console.debug('Confetti disabled or error', err);
    });
}

export interface AwardXpResult {
  success: boolean;
  oldXp: number;
  newXp: number;
  amountAdded: number;
  oldLevel: number;
  newLevel: number;
  leveledUp: boolean;
  oldTitle: string;
  newTitle: string;
  progress: LevelProgressReport;
  newDefinition: ChemistryLevelDefinition;
}

/**
 * Menambahkan XP ke akun siswa, mensinkronkan ke Supabase Cloud (public.profiles),
 * dan memperbarui cache lokal serta memicu efek perayaan jika naik level.
 */
export async function awardXp(
  userId: string | undefined,
  amount: number,
  options?: {
    currentKnownXp?: number;
    reason?: string;
  }
): Promise<AwardXpResult> {
  const safeAmount = Math.max(0, Math.round(amount || 0));
  const localState = getLocalGamificationState();

  let oldXp = typeof options?.currentKnownXp === 'number' ? options.currentKnownXp : localState.xp;
  const supabase = getSupabaseClient();

  // 1. Jika terhubung ke Supabase dan ada userId, coba pastikan nilai XP paling mutakhir dari server
  if (supabase && userId && userId !== 'default-student') {
    try {
      const { data: profileData, error: fetchErr } = await supabase
        .from('profiles')
        .select('xp, level')
        .eq('id', userId)
        .maybeSingle();

      if (!fetchErr && profileData && typeof profileData.xp === 'number') {
        oldXp = profileData.xp;
      }
    } catch (err) {
      console.warn('[GamificationService] Gagal fetch XP terkini dari Supabase, gunakan cache lokal:', err);
    }
  }

  const newXp = oldXp + safeAmount;
  const oldLevelDef = getLevelFromXp(oldXp);
  const newLevelDef = getLevelFromXp(newXp);
  const oldLevel = oldLevelDef.level;
  const newLevel = newLevelDef.level;
  const leveledUp = newLevel > oldLevel;
  const progress = calculateLevelProgress(newXp);

  // 2. Simpan ke Supabase Cloud (public.profiles)
  if (supabase && userId && userId !== 'default-student') {
    try {
      let syncedViaRpc = false;
      try {
        const { data: rpcData, error: rpcErr } = await supabase.rpc('increment_user_xp', {
          target_user_id: userId,
          xp_to_add: safeAmount,
        });
        if (!rpcErr && rpcData && rpcData.length > 0) {
          syncedViaRpc = true;
        }
      } catch {}

      if (!syncedViaRpc) {
        const { error: updateErr } = await supabase
          .from('profiles')
          .update({
            xp: newXp,
            level: newLevel,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId);

        if (updateErr) {
          console.warn('[GamificationService] Gagal update XP ke Supabase profiles:', updateErr.message);
        }
      }
    } catch (dbErr: any) {
      console.warn('[GamificationService] Pengecualian saat update profiles:', dbErr?.message);
    }
  }

  // 3. Simpan ke Cache Lokal
  const updatedLocalState: UserGamificationState = {
    ...localState,
    xp: newXp,
    level: newLevel,
    lastActiveDate: new Date().toISOString().split('T')[0],
  };
  saveLocalGamificationState(updatedLocalState);

  // 4. Siarkan event khusus ke seluruh komponen di aplikasi (AuthContext, Dashboard, Navbar, dll)
  const result: AwardXpResult = {
    success: true,
    oldXp,
    newXp,
    amountAdded: safeAmount,
    oldLevel,
    newLevel,
    leveledUp,
    oldTitle: oldLevelDef.title,
    newTitle: newLevelDef.title,
    progress,
    newDefinition: newLevelDef,
  };

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('osn_xp_awarded', {
        detail: result,
      })
    );
  }

  // 5. Perayaan visual jika naik level
  if (leveledUp) {
    triggerCelebration();
  }

  return result;
}

export const gamificationService = {
  getLocalGamificationState,
  saveLocalGamificationState,
  triggerCelebration,
  awardXp,
  getLevelDefinition,
  getLevelFromXp,
  calculateLevelProgress,
};
