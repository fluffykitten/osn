// Service Penyimpanan & Pengelolaan Konfigurasi Showcase Badges Siswa
import { getSupabaseClient, DEFAULT_STUDENT_ID } from '../lib/supabaseClient';
import type { StudentShowcaseConfig, ShowcaseBadgeSlot } from '../types/showcaseBadge';

const STORAGE_KEY_PREFIX = 'osn_student_showcase_config_';

export const DEFAULT_SHOWCASE_CONFIG: StudentShowcaseConfig = {
  maxSlots: 3,
  slots: [
    { slotIndex: 0, category: 'stats', statType: 'streak' },
    { slotIndex: 1, category: 'stats', statType: 'total_xp' },
    { slotIndex: 2, category: 'stats', statType: 'level' },
  ],
};

function getStorageKey(userId?: string): string {
  const safeId = userId || DEFAULT_STUDENT_ID;
  return `${STORAGE_KEY_PREFIX}${safeId}`;
}

/**
 * Mengambil konfigurasi showcase badges siswa (LocalStorage + Cloud Fallback)
 */
export function getShowcaseConfig(userId?: string): StudentShowcaseConfig {
  try {
    const raw = localStorage.getItem(getStorageKey(userId));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.slots) && parsed.slots.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.debug('Error reading local showcase config', err);
  }
  return DEFAULT_SHOWCASE_CONFIG;
}

/**
 * Menyimpan konfigurasi showcase badges siswa ke LocalStorage dan Supabase jika terhubung
 */
export async function saveShowcaseConfig(
  userId: string | undefined,
  config: StudentShowcaseConfig
): Promise<boolean> {
  const safeId = userId || DEFAULT_STUDENT_ID;
  const key = getStorageKey(userId);

  // 1. Simpan ke LocalStorage untuk responsivitas seketika
  try {
    localStorage.setItem(key, JSON.stringify(config));
    // Trigger event agar komponen dashboard langsung reaktif tanpa refresh
    window.dispatchEvent(
      new CustomEvent('osn_showcase_badges_changed', { detail: config })
    );
  } catch (err) {
    console.warn('Gagal menyimpan showcase config ke LocalStorage:', err);
  }

  // 2. Sinkronkan ke Supabase jika aktif
  const supabase = getSupabaseClient();
  if (supabase && userId && userId !== DEFAULT_STUDENT_ID) {
    try {
      // Ambil user metadata saat ini lalu perbarui field showcase_badges
      const { data: userResp } = await supabase.auth.getUser();
      if (userResp?.user) {
        await supabase.auth.updateUser({
          data: {
            showcase_badges: config,
          },
        });
      }
    } catch (err) {
      console.debug('Cloud sync showcase badges skipped or error:', err);
    }
  }

  return true;
}

/**
 * Sinkronkan konfigurasi dari Supabase saat awal login
 */
export async function syncShowcaseConfigFromCloud(
  userId?: string
): Promise<StudentShowcaseConfig | null> {
  const supabase = getSupabaseClient();
  if (!supabase || !userId || userId === DEFAULT_STUDENT_ID) {
    return null;
  }

  try {
    const { data: userResp } = await supabase.auth.getUser();
    const cloudConfig = userResp?.user?.user_metadata?.showcase_badges;
    if (cloudConfig && Array.isArray(cloudConfig.slots)) {
      localStorage.setItem(getStorageKey(userId), JSON.stringify(cloudConfig));
      return cloudConfig;
    }
  } catch (err) {
    console.debug('Cloud fetch showcase config error:', err);
  }

  return null;
}
