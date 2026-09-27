// Service Pengelolaan Lencana Pencapaian (Achievements) Siswa OSN Kimia
import { getSupabaseClient } from '../lib/supabaseClient';
import {
  ACHIEVEMENTS,
  getAchievementDefinition,
  type AchievementDefinition,
} from '../utils/achievementConstants';
import { awardXp, triggerCelebration } from './gamificationService';

export interface StudentAchievementProgress {
  achievementId: string;
  currentValue: number;
  targetValue: number;
  progress: number; // 0 - 100
  isUnlocked: boolean;
  unlockedAt?: string;
  metadata?: Record<string, any>;
}

const STORAGE_KEY = 'osn_student_achievements';

/**
 * Mengambil cache lokal achievement progress
 */
function getLocalAchievements(): Record<string, StudentAchievementProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {}
  return {};
}

/**
 * Menyimpan cache lokal achievement progress
 */
function saveLocalAchievements(data: Record<string, StudentAchievementProgress>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

/**
 * Memuat status semua achievement untuk siswa (dari Supabase dengan fallback ke LocalStorage)
 */
export async function getStudentAchievements(
  userId?: string
): Promise<Record<string, StudentAchievementProgress>> {
  const localData = getLocalAchievements();
  const supabase = getSupabaseClient();

  if (!supabase || !userId || userId === 'default-student') {
    return localData;
  }

  try {
    const { data, error } = await supabase
      .from('student_achievements')
      .select('*')
      .eq('student_id', userId);

    if (!error && Array.isArray(data)) {
      const merged: Record<string, StudentAchievementProgress> = { ...localData };
      data.forEach((row) => {
        merged[row.achievement_id] = {
          achievementId: row.achievement_id,
          currentValue: Number(row.current_value) || 0,
          targetValue: Number(row.target_value) || 1,
          progress: Number(row.progress) || 0,
          isUnlocked: Boolean(row.is_unlocked),
          unlockedAt: row.unlocked_at,
          metadata: row.metadata,
        };
      });
      saveLocalAchievements(merged);
      return merged;
    }
  } catch (err) {
    console.debug('Failed to fetch achievements from Supabase, using local cache', err);
  }

  return localData;
}

export interface RecordAchievementResult {
  unlocked: boolean;
  achievement?: AchievementDefinition;
  progress: StudentAchievementProgress;
}

/**
 * Mencatat progres atau membuka achievement secara otomatis
 */
export async function recordAchievementProgress(
  userId: string | undefined,
  achievementId: string,
  value: number,
  mode: 'add' | 'set' | 'max' = 'add',
  metadata?: Record<string, any>
): Promise<RecordAchievementResult> {
  const definition = getAchievementDefinition(achievementId);
  if (!definition) {
    throw new Error(`Achievement definition not found for: ${achievementId}`);
  }

  const allLocal = getLocalAchievements();
  const existing = allLocal[achievementId] || {
    achievementId,
    currentValue: 0,
    targetValue: definition.targetValue,
    progress: 0,
    isUnlocked: false,
  };

  if (existing.isUnlocked) {
    return { unlocked: false, achievement: definition, progress: existing };
  }

  let newValue = existing.currentValue;
  if (mode === 'add') {
    newValue += value;
  } else if (mode === 'set') {
    newValue = value;
  } else if (mode === 'max') {
    newValue = Math.max(existing.currentValue, value);
  }

  const target = definition.targetValue;
  const isNowUnlocked = newValue >= target;
  const progressPercent = Math.min(100, Math.max(0, Math.round((newValue / target) * 100)));
  const unlockedAt = isNowUnlocked ? new Date().toISOString() : undefined;

  const updatedProgress: StudentAchievementProgress = {
    achievementId,
    currentValue: newValue,
    targetValue: target,
    progress: progressPercent,
    isUnlocked: isNowUnlocked,
    unlockedAt,
    metadata: { ...(existing.metadata || {}), ...(metadata || {}) },
  };

  allLocal[achievementId] = updatedProgress;
  saveLocalAchievements(allLocal);

  // Jika baru saja terbuka (Unlocked)
  if (isNowUnlocked) {
    triggerCelebration();

    // Berikan reward XP
    if (definition.xpReward > 0) {
      awardXp(userId, definition.xpReward, {
        reason: `Membuka Lencana: ${definition.title}`,
      }).catch(() => {});
    }

    // Sebarkan event untuk toast / pop-up selebrasi
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('osn_achievement_unlocked', {
          detail: {
            achievement: definition,
            progress: updatedProgress,
          },
        })
      );
    }

    // Cek progress untuk meta-achievement "true_alchemist" (30 achievements) dan "grand_master_chemist" (50 achievements)
    if (achievementId !== 'true_alchemist' && achievementId !== 'grand_master_chemist') {
      const unlockedCount = Object.values(allLocal).filter((a) => a.isUnlocked).length;
      recordAchievementProgress(userId, 'true_alchemist', unlockedCount, 'set').catch(() => {});
      recordAchievementProgress(userId, 'grand_master_chemist', unlockedCount, 'set').catch(() => {});
    }
  }

  // Sinkronkan ke Supabase jika terhubung
  const supabase = getSupabaseClient();
  if (supabase && userId && userId !== 'default-student') {
    try {
      await supabase.from('student_achievements').upsert(
        {
          student_id: userId,
          achievement_id: achievementId,
          current_value: updatedProgress.currentValue,
          target_value: updatedProgress.targetValue,
          progress: updatedProgress.progress,
          is_unlocked: updatedProgress.isUnlocked,
          unlocked_at: updatedProgress.unlockedAt || null,
          metadata: updatedProgress.metadata || {},
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'student_id,achievement_id' }
      );
    } catch (err) {
      console.debug('Failed to sync achievement to Supabase', err);
    }
  }

  return {
    unlocked: isNowUnlocked,
    achievement: definition,
    progress: updatedProgress,
  };
}

/**
 * Dispatcher event terpusat untuk memicu pencapaian berdasarkan aktivitas user
 */
export async function trackAchievementEvent(
  userId: string | undefined,
  eventType: string,
  payload: Record<string, any> = {}
): Promise<void> {
  try {
    switch (eventType) {
      // 1. Waktu Belajar (Menit)
      case 'STUDY_MINUTES': {
        const minutes = Number(payload.minutes) || 1;
        await recordAchievementProgress(userId, 'bunsen_warmup', minutes, 'max');
        await recordAchievementProgress(userId, 'supercritical_focus', minutes, 'max');
        await recordAchievementProgress(userId, 'marathon_session_60', minutes, 'max');

        // Weekend Catalyst check
        const dayOfWeek = new Date().getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          await recordAchievementProgress(userId, 'weekend_catalyst', 1, 'max');
        }
        break;
      }

      // 2. Daily Streak Update
      case 'LOGIN_STREAK': {
        const streak = Number(payload.streak) || 1;
        if (streak >= 3) await recordAchievementProgress(userId, 'streak_3', streak, 'max');
        if (streak >= 7) await recordAchievementProgress(userId, 'streak_7', streak, 'max');
        if (streak >= 14) await recordAchievementProgress(userId, 'purrfect_streak_14', streak, 'max');
        if (streak >= 30) await recordAchievementProgress(userId, 'streak_30', streak, 'max');
        break;
      }

      // 3. Evaluasi Soal Selesai
      case 'SUBMIT_EVALUATION': {
        const score = Number(payload.score) || 0;
        const timeSeconds = Number(payload.timeSeconds) || 999;
        const isOsnLevel = Boolean(payload.isOsnLevel);
        const isRedoFromLow = Boolean(payload.isRedoFromLow);
        const isPerfectNumeric = Boolean(payload.isPerfectNumeric);

        // Tambah 1 soal ke total bank grandmaster & century_solver
        await recordAchievementProgress(userId, 'bank_grandmaster', 1, 'add');
        await recordAchievementProgress(userId, 'century_solver', 1, 'add');

        // Refleks Kucing Cepat (< 60 detik & score >= 8)
        if (timeSeconds > 0 && timeSeconds <= 60 && score >= 8) {
          await recordAchievementProgress(userId, 'speedy_chem_cat', 1, 'max');
        }

        // Weekend Catalyst
        const day = new Date().getDay();
        if (day === 0 || day === 6) {
          await recordAchievementProgress(userId, 'weekend_catalyst', 1, 'max');
        }

        // Titrasi Jam Istirahat (11:30 - 13:30)
        const now = new Date();
        const hour = now.getHours();
        const mins = now.getMinutes();
        const timeInMin = hour * 60 + mins;
        if (timeInMin >= 11 * 60 + 30 && timeInMin <= 13 * 60 + 30) {
          await recordAchievementProgress(userId, 'lunchtime_titration', 1, 'max');
        }

        // Nilai Sempurna
        if (score >= 10) {
          await recordAchievementProgress(userId, 'first_hundred', 1, 'max');

          // Cepat (< 2 menit)
          if (timeSeconds > 0 && timeSeconds <= 120) {
            await recordAchievementProgress(userId, 'spontaneous_reaction', 1, 'max');
          }

          // Tahan Korosi (re-do from < 50 to 100)
          if (isRedoFromLow) {
            await recordAchievementProgress(userId, 'corrosion_resistant', 1, 'max');
          }

          // Stoikiometri presisi
          if (isPerfectNumeric) {
            await recordAchievementProgress(userId, 'precision_stoichiometry', 1, 'max');
          }

          // Katalisator handal (3 berturut-turut) & Flawless Five (5 berturut-turut)
          const consecKey = 'osn_consecutive_perfect_scores';
          const currentConsec = (Number(sessionStorage.getItem(consecKey)) || 0) + 1;
          sessionStorage.setItem(consecKey, String(currentConsec));
          if (currentConsec >= 3) {
            await recordAchievementProgress(userId, 'great_catalyst', currentConsec, 'max');
          }
          if (currentConsec >= 5) {
            await recordAchievementProgress(userId, 'flawless_five', currentConsec, 'max');
          }
        } else {
          sessionStorage.setItem('osn_consecutive_perfect_scores', '0');
        }

        // Detektif OSN
        if (isOsnLevel && score >= 8) {
          await recordAchievementProgress(userId, 'osn_detective', 1, 'max');
        }

        // Cek Jam Belajar (Night Owl vs Early Bird)
        if (hour >= 23 || hour < 4) {
          await recordAchievementProgress(userId, 'night_owl', 1, 'max');
        } else if (hour >= 4 && hour < 6) {
          await recordAchievementProgress(userId, 'early_bird', 1, 'max');
        }
        break;
      }

      // 4. Kalkulator Massa Molar (Mr)
      case 'MR_CALCULATED': {
        const rawFormula = String(payload.formula || '').trim();
        const formulaClean = rawFormula.toLowerCase().replace(/\s+/g, '');
        const totalMass = Number(payload.totalMass) || 0;

        await recordAchievementProgress(userId, 'molar_mass_fan', 1, 'add');

        // Titan massa raksasa (Mr > 500)
        if (totalMass > 500) {
          await recordAchievementProgress(userId, 'heavy_molar_titan', 1, 'max');
        }

        // Kompleks menakutkan (punya titik hidrat . atau tanda kurung [ ] / ( ))
        if (rawFormula.includes('.') || rawFormula.includes('[') || rawFormula.includes('(')) {
          await recordAchievementProgress(userId, 'scary_complex', 1, 'max');
        }

        // Easter Egg: H2O
        if (formulaClean === 'h2o') {
          await recordAchievementProgress(userId, 'not_just_water', 1, 'max');
        }

        // Easter Egg: Gula (glukosa / sukrosa)
        if (
          formulaClean === 'c6h12o6' ||
          formulaClean === 'c12h22o11' ||
          formulaClean.includes('c6h12o6')
        ) {
          await recordAchievementProgress(userId, 'sugar_seeker', 1, 'max');
        }

        // Easter Egg: Kafein C8H10N4O2
        if (formulaClean === 'c8h10n4o2' || formulaClean.includes('c8h10n4o2')) {
          await recordAchievementProgress(userId, 'caffeine_boost', 1, 'max');
        }

        // Easter Egg: Besi / Felix (Fe)
        if (rawFormula.includes('Fe')) {
          await recordAchievementProgress(userId, 'cat_element_felix', 1, 'max');
        }

        // Easter Egg: Garam Dapur NaCl
        if (formulaClean === 'nacl') {
          await recordAchievementProgress(userId, 'salt_of_the_earth', 1, 'max');
        }

        // Easter Egg: Asam Asetat CH3COOH
        if (formulaClean === 'ch3cooh' || formulaClean === 'c2h4o2') {
          await recordAchievementProgress(userId, 'vinegar_reaction', 1, 'max');
        }
        break;
      }

      // 5. Tabel Periodik Unsur Diinspeksi
      case 'PERIODIC_ELEMENT_INSPECTED': {
        const sym = String(payload.symbol || '').trim();
        const category = String(payload.category || '').toLowerCase();

        if (sym) {
          const inspectedKey = 'osn_inspected_elements_set';
          let set: string[] = [];
          try {
            set = JSON.parse(localStorage.getItem(inspectedKey) || '[]');
          } catch {}
          if (!set.includes(sym)) {
            set.push(sym);
            localStorage.setItem(inspectedKey, JSON.stringify(set));
          }
          await recordAchievementProgress(userId, 'mendeleev_explorer', set.length, 'set');
          await recordAchievementProgress(userId, 'periodic_century', set.length, 'set');

          // Gas Mulia (He, Ne, Ar, Kr, Xe, Rn)
          const NOBLE_GASES = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'];
          if (NOBLE_GASES.includes(sym)) {
            const nobleKey = 'osn_noble_gases_set';
            let nobleSet: string[] = [];
            try {
              nobleSet = JSON.parse(localStorage.getItem(nobleKey) || '[]');
            } catch {}
            if (!nobleSet.includes(sym)) {
              nobleSet.push(sym);
              localStorage.setItem(nobleKey, JSON.stringify(nobleSet));
            }
            await recordAchievementProgress(userId, 'noble_gas_collector', nobleSet.length, 'set');
          }

          // Besi / Felix
          if (sym === 'Fe') {
            await recordAchievementProgress(userId, 'cat_element_felix', 1, 'max');
          }

          // Unsur Radioaktif: Uranium (U) atau Plutonium (Pu)
          if (sym === 'U' || sym === 'Pu') {
            await recordAchievementProgress(userId, 'radioactive_cat', 1, 'max');
          }
        }

        // Lantanida atau Aktinida
        if (category === 'lanthanide' || category === 'actinide') {
          await recordAchievementProgress(userId, 'rare_element_actinide', 1, 'max');
        }
        break;
      }

      // 6. Menyalin Tetapan Fisika
      case 'PHYSICS_CONSTANT_COPIED': {
        await recordAchievementProgress(userId, 'physics_constant_master', 1, 'max');
        break;
      }

      // 7. Menyisipkan Rumus Cepat
      case 'QUICK_FORMULA_INSERTED': {
        await recordAchievementProgress(userId, 'quick_formula_collector', 1, 'add');
        break;
      }

      // 8. Whiteboard Digunakan
      case 'WHITEBOARD_MINUTES': {
        const mins = Number(payload.minutes) || 1;
        await recordAchievementProgress(userId, 'wet_whiteboard', mins, 'max');
        break;
      }

      // 9. Sintaks KaTeX Digunakan di Lembar Kerja
      case 'KATEX_SYNTAX_USED': {
        const text = String(payload.text || '');

        if (text.includes('\\ce{')) {
          await recordAchievementProgress(userId, 'katex_scribe', 1, 'max');
        }
        if (text.includes('\\rightleftharpoons') || text.includes('<=>')) {
          await recordAchievementProgress(userId, 'le_chatelier_digital', 1, 'max');
        }
        if (text.includes('\\frac{')) {
          await recordAchievementProgress(userId, 'stacked_fractions', 1, 'max');
        }
        if (text.includes('\\Delta H^\\circ') || text.includes('\\Delta G^\\circ') || text.includes('^\\circ') || text.includes('°')) {
          await recordAchievementProgress(userId, 'standard_thermo', 1, 'max');
        }
        if ((text.includes('^{') || text.includes('^+') || text.includes('^-')) && text.includes('_{')) {
          await recordAchievementProgress(userId, 'ionic_charge_radical', 1, 'max');
        }
        if (text.length >= 150) {
          await recordAchievementProgress(userId, 'flawless_calligraphy', 1, 'max');
        }

        // 4 Fase zat lengkap: (s), (l), (g), (aq)
        if (
          text.includes('(s)') &&
          text.includes('(l)') &&
          text.includes('(g)') &&
          text.includes('(aq)')
        ) {
          await recordAchievementProgress(userId, 'gas_liquid_phase_master', 1, 'max');
        }

        // Panah gas & endapan: \uparrow atau \downarrow
        if (text.includes('\\uparrow') || text.includes('\\downarrow') || text.includes('↑') || text.includes('↓')) {
          await recordAchievementProgress(userId, 'reaction_arrow_trio', 1, 'max');
        }

        // Tetapan kesetimbangan: K_c, K_{sp}, K_sp, K_p
        if (text.includes('K_c') || text.includes('K_{c}') || text.includes('K_{sp}') || text.includes('K_sp') || text.includes('K_p')) {
          await recordAchievementProgress(userId, 'equilibrium_constant_expression', 1, 'max');
        }

        // Notasi eksponen ilmiah: \times 10 atau 10^
        if (text.includes('\\times 10') || text.includes('10^{') || text.includes('10^-') || text.includes('× 10')) {
          await recordAchievementProgress(userId, 'scientific_exponential_notation', 1, 'max');
        }
        break;
      }

      // 10. Zen Mode Durasi
      case 'ZEN_MODE_MINUTES': {
        const mins = Number(payload.minutes) || 1;
        await recordAchievementProgress(userId, 'zen_master', mins, 'max');
        break;
      }

      // 11. Simpan Progress Manual
      case 'MANUAL_SAVE_CLICKED': {
        await recordAchievementProgress(userId, 'data_saver', 1, 'add');
        break;
      }

      // 12. Diagram Diperbesar
      case 'DIAGRAM_VIEWED': {
        await recordAchievementProgress(userId, 'optical_microscope', 1, 'max');
        break;
      }

      // 13. Modul Teori Selesai Dibaca
      case 'MODULE_READ_COMPLETED': {
        const todayStr = new Date().toISOString().split('T')[0];
        const key = `osn_modules_read_${todayStr}`;
        let readList: string[] = [];
        try {
          readList = JSON.parse(localStorage.getItem(key) || '[]');
        } catch {}
        if (payload.moduleId && !readList.includes(payload.moduleId)) {
          readList.push(payload.moduleId);
          localStorage.setItem(key, JSON.stringify(readList));
        }
        await recordAchievementProgress(userId, 'bookworm_marathon', readList.length, 'max');

        // Bisikan Kucing Kuantum: Topik 1 (Struktur Atom & Mekanika Kuantum)
        if (
          payload.moduleId === '1' ||
          payload.topicNumber === 1 ||
          String(payload.title || '').toLowerCase().includes('kuantum') ||
          String(payload.tag || '').toLowerCase().includes('kuantum') ||
          String(payload.tag || '').toLowerCase().includes('atom')
        ) {
          await recordAchievementProgress(userId, 'schrodinger_whisperer', 1, 'max');
        }
        break;
      }

      // 14. XP Gained (Akumulasi Midas Touch & Half Century XP)
      case 'XP_GAINED': {
        const amount = Number(payload.amount) || 0;
        if (amount > 0) {
          await recordAchievementProgress(userId, 'midas_touch', amount, 'add');
          await recordAchievementProgress(userId, 'half_century_xp', amount, 'add');
        }
        break;
      }

      // 15. Scaffold Guide 4 Langkah Disisipkan
      case 'SCAFFOLD_INSERTED': {
        await recordAchievementProgress(userId, 'scaffold_architect', 1, 'add');
        break;
      }

      // 16. Berpindah Nomor Soal
      case 'QUESTION_TAB_SWITCHED': {
        const switchKey = 'osn_tab_switches_session';
        const count = (Number(sessionStorage.getItem(switchKey)) || 0) + 1;
        sessionStorage.setItem(switchKey, String(count));
        await recordAchievementProgress(userId, 'tab_surfer', count, 'max');
        break;
      }

      // 17. Pengaturan Skala Zoom Canvas Lembar Kerja
      case 'CANVAS_SCALE_CHANGED': {
        await recordAchievementProgress(userId, 'canvas_zoom_curious', 1, 'add');
        break;
      }

      // 18. Membaca Tip / Glosarium Sains di Dashboard
      case 'DASHBOARD_TRIVIA_VIEWED': {
        await recordAchievementProgress(userId, 'chemistry_quote_reader', 1, 'max');
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.debug('Error in trackAchievementEvent', eventType, err);
  }
}
