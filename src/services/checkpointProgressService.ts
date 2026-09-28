/**
 * checkpointProgressService.ts
 * Layanan persistensi terpusat dan tersinkronisasi untuk Uji Pemahaman Cepat (Concept Checkpoint Quiz).
 * 
 * Fitur:
 * 1. Offline-First: Menyimpan hasil kuis per subtopik/konsep ke LocalStorage.
 * 2. Scoped by User: Mendukung multi-akun siswa (userId) dengan fallback sesi tamu.
 * 3. Event Broadcasting: Mengirim event kustom 'osn_checkpoint_progress_updated' untuk sinkronisasi reaktif antar komponen/tab.
 * 4. Backward Compatibility: Tetap menyinkronkan kunci legasi 'osn_quiz_done_${tag}'.
 * 5. Cloud Resilience: Menyinkronkan progres ke Supabase jika sesi login aktif dan jaringan tersedia.
 */

import { getSupabaseClient } from '../lib/supabaseClient';

export interface CheckpointQuestionAnswer {
  quizId: string;
  type: 'multiple_choice' | 'true_false';
  selectedAnswer: number | boolean;
  isCorrect: boolean;
  attemptCount: number;
}

export interface CheckpointResult {
  conceptTag: string;
  conceptTitle?: string;
  completed: boolean;
  score: number; // Jumlah soal yang dijawab benar pada percobaan pertama atau akumulasi
  totalQuestions: number;
  answers: Record<string, CheckpointQuestionAnswer>;
  xpAwarded: number;
  lastAttemptAt: string;
}

export type CheckpointProgressMap = Record<string, CheckpointResult>;

const STORAGE_PREFIX = 'osn_checkpoint_progress_v1';

function getStorageKey(userId?: string): string {
  return userId && userId !== 'default-student'
    ? `${STORAGE_PREFIX}_${userId}`
    : STORAGE_PREFIX;
}

class CheckpointProgressService {
  /**
   * Mengambil semua catatan progres checkpoint dari local storage
   */
  public getAllProgress(userId?: string): CheckpointProgressMap {
    try {
      if (typeof window === 'undefined') return {};
      const key = getStorageKey(userId);
      const raw = localStorage.getItem(key);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('[CheckpointProgress] Gagal membaca riwayat kuis dari localStorage:', err);
    }
    return {};
  }

  /**
   * Mengambil hasil pengerjaan checkpoint untuk subtopik/tag konsep tertentu
   */
  public getProgress(conceptTag: string, userId?: string): CheckpointResult | null {
    const all = this.getAllProgress(userId);
    if (all[conceptTag]) {
      return all[conceptTag];
    }

    // Cek fallback legasi boolean
    try {
      if (typeof window !== 'undefined') {
        const legacyDone = localStorage.getItem(`osn_quiz_done_${conceptTag}`);
        if (legacyDone === 'true') {
          return {
            conceptTag,
            completed: true,
            score: 1,
            totalQuestions: 1,
            answers: {},
            xpAwarded: 25,
            lastAttemptAt: new Date().toISOString(),
          };
        }
      }
    } catch {}

    return null;
  }

  /**
   * Mengecek apakah checkpoint untuk tag ini sudah pernah dituntaskan
   */
  public isCompleted(conceptTag: string, userId?: string): boolean {
    const res = this.getProgress(conceptTag, userId);
    return Boolean(res && res.completed);
  }

  /**
   * Menyimpan atau memperbarui hasil pengerjaan kuis checkpoint
   */
  public async saveProgress(result: CheckpointResult, userId?: string): Promise<void> {
    try {
      if (typeof window === 'undefined') return;

      const key = getStorageKey(userId);
      const all = this.getAllProgress(userId);
      all[result.conceptTag] = {
        ...result,
        lastAttemptAt: new Date().toISOString(),
      };

      // 1. Simpan ke LocalStorage
      localStorage.setItem(key, JSON.stringify(all));

      // Jika kunci utama bukan default, simpan juga sebagai fallback global jika belum ada
      if (key !== STORAGE_PREFIX) {
        const globalAll = this.getAllProgress();
        globalAll[result.conceptTag] = all[result.conceptTag];
        localStorage.setItem(STORAGE_PREFIX, JSON.stringify(globalAll));
      }

      // 2. Pertahankan sinkronisasi kunci legasi
      if (result.completed) {
        localStorage.setItem(`osn_quiz_done_${result.conceptTag}`, 'true');
      }

      // 3. Siarkan event kustom agar UI di mana pun langsung bereaksi
      window.dispatchEvent(
        new CustomEvent('osn_checkpoint_progress_updated', {
          detail: {
            conceptTag: result.conceptTag,
            result: all[result.conceptTag],
            userId,
          },
        })
      );

      // 4. Sinkronisasi ke Supabase di latar belakang (jika user login)
      this.syncToCloud(result, userId).catch((err) => {
        console.debug('[CheckpointProgress] Cloud sync tertunda atau offline:', err);
      });
    } catch (err) {
      console.warn('[CheckpointProgress] Gagal menyimpan checkpoint kuis:', err);
    }
  }

  /**
   * Mereset progres checkpoint tertentu (misal: tombol 'Ulangi Kuis')
   */
  public async resetProgress(conceptTag: string, userId?: string): Promise<void> {
    try {
      if (typeof window === 'undefined') return;
      const key = getStorageKey(userId);
      const all = this.getAllProgress(userId);

      if (all[conceptTag]) {
        delete all[conceptTag];
        localStorage.setItem(key, JSON.stringify(all));
      }

      localStorage.removeItem(`osn_quiz_done_${conceptTag}`);

      window.dispatchEvent(
        new CustomEvent('osn_checkpoint_progress_updated', {
          detail: {
            conceptTag,
            result: null,
            userId,
          },
        })
      );
    } catch (err) {
      console.warn('[CheckpointProgress] Gagal mereset progres checkpoint:', err);
    }
  }

  /**
   * Sinkronisasi ke Supabase (jika tabel atau rpc pendukung tersedia)
   */
  private async syncToCloud(result: CheckpointResult, userId?: string): Promise<void> {
    const supabase = getSupabaseClient();
    if (!supabase || !userId || userId === 'default-student') return;

    try {
      // Coba simpan ke tabel checkpoint_progress jika ada
      await supabase.from('checkpoint_progress').upsert({
        user_id: userId,
        concept_tag: result.conceptTag,
        completed: result.completed,
        score: result.score,
        total_questions: result.totalQuestions,
        answers: result.answers,
        xp_awarded: result.xpAwarded,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,concept_tag' });
    } catch {
      // Abaikan jika tabel belum dimigrasikan di remote db; offline storage tetap 100% aman
    }
  }
}

export const checkpointProgressService = new CheckpointProgressService();
