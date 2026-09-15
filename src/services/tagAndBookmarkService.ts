/**
 * tagAndBookmarkService.ts
 * Layanan manajemen tag kustom dan penanda (bookmark) guru untuk Bank Soal OSN.
 * Mendukung persistensi hybrid: Supabase Cloud Sync + Resilient LocalStorage Cache.
 */

import { getSupabaseClient, DEFAULT_STUDENT_ID } from '../lib/supabaseClient';

const BOOKMARK_STORAGE_KEY = 'osn_bookmarked_questions_v1';
const CUSTOM_TAGS_STORAGE_KEY = 'osn_question_custom_tags_v1';
const GLOBAL_TAGS_STORAGE_KEY = 'osn_teacher_global_tags_v1';

// Default tag kurasi olimpiade yang siap pakai
const DEFAULT_PRESET_TAGS = [
  '#tryout-osn',
  '#pelatnas-tahap-1',
  '#soal-hots',
  '#stoikiometri-lanjut',
  '#termodinamika-icho',
  '#mekanisme-organik',
  '#kristalografi',
  '#analisis-spektroskopi',
  '#prioritas-tinggi',
  '#latihan-intensif'
];

class TagAndBookmarkService {
  private bookmarks: Set<number> = new Set();
  private questionTags: Map<number, Set<string>> = new Map();
  private globalTags: Set<string> = new Set(DEFAULT_PRESET_TAGS);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      // 1. Load bookmarks
      const savedBookmarks = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      if (savedBookmarks) {
        const parsed = JSON.parse(savedBookmarks);
        if (Array.isArray(parsed)) {
          this.bookmarks = new Set(parsed);
        }
      }

      // 2. Load custom tags per question
      const savedTags = localStorage.getItem(CUSTOM_TAGS_STORAGE_KEY);
      if (savedTags) {
        const parsed: Record<string, string[]> = JSON.parse(savedTags);
        Object.entries(parsed).forEach(([qId, tags]) => {
          this.questionTags.set(Number(qId), new Set(tags));
          tags.forEach(t => this.globalTags.add(t));
        });
      }

      // 3. Load global tags
      const savedGlobal = localStorage.getItem(GLOBAL_TAGS_STORAGE_KEY);
      if (savedGlobal) {
        const parsed = JSON.parse(savedGlobal);
        if (Array.isArray(parsed)) {
          parsed.forEach(t => this.globalTags.add(t));
        }
      }
    } catch (e) {
      console.warn('Gagal memuat cache tag & bookmark lokal:', e);
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(Array.from(this.bookmarks)));

      const tagsObj: Record<string, string[]> = {};
      this.questionTags.forEach((tagSet, qId) => {
        tagsObj[qId.toString()] = Array.from(tagSet);
      });
      localStorage.setItem(CUSTOM_TAGS_STORAGE_KEY, JSON.stringify(tagsObj));

      localStorage.setItem(GLOBAL_TAGS_STORAGE_KEY, JSON.stringify(Array.from(this.globalTags)));
    } catch (e) {
      console.warn('Gagal menyimpan cache tag & bookmark lokal:', e);
    }
  }

  public isBookmarked(questionId: number): boolean {
    return this.bookmarks.has(questionId);
  }

  public getBookmarkedIds(): number[] {
    return Array.from(this.bookmarks);
  }

  public async toggleBookmark(questionId: number): Promise<boolean> {
    const isCurrently = this.bookmarks.has(questionId);
    if (isCurrently) {
      this.bookmarks.delete(questionId);
    } else {
      this.bookmarks.add(questionId);
    }
    this.saveToStorage();

    // Coba sync ke Supabase jika ada
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        if (isCurrently) {
          await supabase
            .from('question_bookmarks')
            .delete()
            .match({ user_id: DEFAULT_STUDENT_ID, question_id: questionId });
        } else {
          await supabase
            .from('question_bookmarks')
            .insert([{ user_id: DEFAULT_STUDENT_ID, question_id: questionId }]);
        }
      } catch (err) {
        // Fallback hening, tetap tersimpan di lokal
      }
    }

    return !isCurrently;
  }

  public getCustomTags(questionId: number): string[] {
    const set = this.questionTags.get(questionId);
    return set ? Array.from(set) : [];
  }

  public getAllGlobalTags(): string[] {
    return Array.from(this.globalTags);
  }

  public async addCustomTag(questionId: number, rawTag: string): Promise<string[]> {
    const formatted = rawTag.trim().startsWith('#') ? rawTag.trim() : `#${rawTag.trim().toLowerCase().replace(/\s+/g, '-')}`;
    if (!formatted || formatted === '#') return this.getCustomTags(questionId);

    if (!this.questionTags.has(questionId)) {
      this.questionTags.set(questionId, new Set());
    }

    this.questionTags.get(questionId)!.add(formatted);
    this.globalTags.add(formatted);
    this.saveToStorage();

    // Sync ke Supabase jika tabel siap
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase
          .from('question_user_tags')
          .insert([{ user_id: DEFAULT_STUDENT_ID, question_id: questionId, tag_name: formatted }]);
      } catch (err) {
        // Ignored fallback
      }
    }

    return this.getCustomTags(questionId);
  }

  public async removeCustomTag(questionId: number, tag: string): Promise<string[]> {
    const set = this.questionTags.get(questionId);
    if (set) {
      set.delete(tag);
      this.saveToStorage();

      const supabase = getSupabaseClient();
      if (supabase) {
        try {
          await supabase
            .from('question_user_tags')
            .delete()
            .match({ user_id: DEFAULT_STUDENT_ID, question_id: questionId, tag_name: tag });
        } catch (err) {
          // Ignored fallback
        }
      }
    }
    return this.getCustomTags(questionId);
  }
}

export const tagAndBookmarkService = new TagAndBookmarkService();
