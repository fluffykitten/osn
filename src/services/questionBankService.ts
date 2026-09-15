/**
 * questionBankService.ts
 * Layanan terpadu Bank Soal Olimpiade Sains Nasional (OSN/OSP/OSK/IChO).
 * Menghubungkan Supabase Cloud Database dengan failover resilient ke Local Cache.
 */

import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabaseClient';
import { BENCHMARK_QUESTIONS } from '../data/syllabusData';
import { tagAndBookmarkService } from './tagAndBookmarkService';
import type { Question, QuestionFilter, QuestionDifficulty, QuestionStyle, SubQuestion, Worksheet } from '../types/database';

const LOCAL_QUESTIONS_STORAGE_KEY = 'osn_custom_questions_v1';
const LOCAL_WORKSHEETS_STORAGE_KEY = 'osn_saved_worksheets_v1';

// Normalisasi dan pengayaan data awal 10 Topik Silabus OSN
const INITIAL_SEEDED_QUESTIONS: Question[] = BENCHMARK_QUESTIONS.map((q) => {
  // Ekstraksi sub-soal otomatis dari teks jika belum ada
  const subQuestions: SubQuestion[] = [];
  const lines = q.question_text.split('\n');
  let currentLabel = '';
  let currentText: string[] = [];

  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s+(.*)/);
    if (match) {
      if (currentLabel) {
        subQuestions.push({
          label: currentLabel,
          question_text: currentText.join('\n').trim(),
          points: 2.5,
          rubric: `Kriteria penilaian sub-soal (${currentLabel})`
        });
      }
      currentLabel = String.fromCharCode(96 + parseInt(match[1])); // 1 -> 'a', 2 -> 'b'
      currentText = [match[2]];
    } else if (currentLabel) {
      currentText.push(line);
    }
  }
  if (currentLabel) {
    subQuestions.push({
      label: currentLabel,
      question_text: currentText.join('\n').trim(),
      points: 2.5,
      rubric: `Kriteria penilaian sub-soal (${currentLabel})`
    });
  }

  const defaultYear = 2020 + (q.id % 5);
  const sourceEvents = [
    'OSN Tingkat Nasional 2024',
    'OSP Kimia Provinsi 2023',
    'OSK Kimia Kab/Kota 2024',
    'Seleksi Pelatnas Tahap I IChO',
    'Simulasi Olimpiade Puspresnas'
  ];

  return {
    ...q,
    year: defaultYear,
    source_event: sourceEvents[q.id % sourceEvents.length],
    question_style: (q.difficulty === 'OSK' ? 'mcq' : 'structured') as QuestionStyle,
    estimated_time_minutes: q.difficulty === 'OSN' ? 25 : q.difficulty === 'OSP' ? 20 : 15,
    total_points: 10,
    sub_questions: subQuestions.length > 0 ? subQuestions : undefined,
    created_at: new Date(Date.now() - (109 - q.id) * 86400000).toISOString()
  };
});

class QuestionBankService {
  private localQuestions: Map<number, Question> = new Map();
  private localWorksheets: Worksheet[] = [];

  constructor() {
    this.initLocalStore();
  }

  private initLocalStore(): void {
    // 1. Seed benchmark questions
    INITIAL_SEEDED_QUESTIONS.forEach(q => {
      this.localQuestions.set(q.id, { ...q });
    });

    // 2. Load custom user created questions from local storage
    try {
      const stored = localStorage.getItem(LOCAL_QUESTIONS_STORAGE_KEY);
      if (stored) {
        const parsed: Question[] = JSON.parse(stored);
        parsed.forEach(q => this.localQuestions.set(q.id, q));
      }

      const storedWorksheets = localStorage.getItem(LOCAL_WORKSHEETS_STORAGE_KEY);
      if (storedWorksheets) {
        this.localWorksheets = JSON.parse(storedWorksheets);
      }
    } catch (e) {
      console.warn('Gagal memuat cache lokal soal:', e);
    }
  }

  private persistLocalStore(): void {
    try {
      const customOnes = Array.from(this.localQuestions.values()).filter(q => q.id > 200);
      localStorage.setItem(LOCAL_QUESTIONS_STORAGE_KEY, JSON.stringify(customOnes));
      localStorage.setItem(LOCAL_WORKSHEETS_STORAGE_KEY, JSON.stringify(this.localWorksheets));
    } catch (e) {
      console.warn('Gagal menyimpan cache lokal soal:', e);
    }
  }

  /**
   * Mengambil daftar soal dengan filter, pagination, dan status bookmark/tag
   */
  public async getQuestions(filter?: QuestionFilter): Promise<{
    questions: Question[];
    total: number;
    isCloudConnected: boolean;
  }> {
    const supabase = getSupabaseClient();
    let questions: Question[] = [];
    let isCloudConnected = false;

    if (supabase) {
      try {
        let query = supabase.from('questions').select('*');

        if (filter?.pillarNumber && filter.pillarNumber !== 'ALL') {
          query = query.eq('pillar_number', filter.pillarNumber);
        }
        if (filter?.difficulty && filter.difficulty !== 'ALL') {
          query = query.eq('difficulty', filter.difficulty);
        }
        if (filter?.questionStyle && filter.questionStyle !== 'ALL') {
          query = query.eq('question_style', filter.questionStyle);
        }
        if (filter?.search && filter.search.trim()) {
          query = query.or(`title.ilike.%${filter.search.trim()}%,question_text.ilike.%${filter.search.trim()}%,subtopic.ilike.%${filter.search.trim()}%`);
        }

        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          questions = data as Question[];
          isCloudConnected = true;
        }
      } catch (err) {
        // Fallback hening ke cache lokal jika tabel belum dibuat di Supabase
      }
    }

    // Fallback jika database awan kosong atau belum termigrasi
    if (questions.length === 0) {
      questions = Array.from(this.localQuestions.values());
    }

    // Gabungkan dengan state Bookmark & Custom Tag dari tagAndBookmarkService
    questions = questions.map(q => {
      const isBookmarked = tagAndBookmarkService.isBookmarked(q.id);
      const customTags = tagAndBookmarkService.getCustomTags(q.id);
      return {
        ...q,
        is_bookmarked: isBookmarked,
        custom_tags: customTags
      };
    });

    // Lakukan pemfilteran di memory (komprehensif untuk semua kondisi)
    if (filter) {
      if (filter.search && filter.search.trim()) {
        const term = filter.search.toLowerCase().trim();
        questions = questions.filter(q =>
          q.title.toLowerCase().includes(term) ||
          q.question_text.toLowerCase().includes(term) ||
          q.subtopic.toLowerCase().includes(term) ||
          q.tags?.some(t => t.toLowerCase().includes(term))
        );
      }

      if (filter.pillarNumber && filter.pillarNumber !== 'ALL') {
        questions = questions.filter(q => q.pillar_number === filter.pillarNumber);
      }

      if (filter.difficulty && filter.difficulty !== 'ALL') {
        questions = questions.filter(q => q.difficulty === filter.difficulty);
      }

      if (filter.questionStyle && filter.questionStyle !== 'ALL') {
        questions = questions.filter(q => q.question_style === filter.questionStyle);
      }

      if (filter.bookmarkedOnly) {
        questions = questions.filter(q => q.is_bookmarked);
      }

      if (filter.selectedTags && filter.selectedTags.length > 0) {
        questions = questions.filter(q => {
          const allTags = [...(q.tags || []), ...(q.custom_tags || [])];
          return filter.selectedTags!.some(t => allTags.includes(t));
        });
      }

      if (filter.yearRange) {
        const [minY, maxY] = filter.yearRange;
        questions = questions.filter(q => (q.year || 2024) >= minY && (q.year || 2024) <= maxY);
      }

      // Pengurutan (Sorting)
      if (filter.sortBy === 'difficulty') {
        const order: Record<QuestionDifficulty, number> = { OSK: 1, OSP: 2, OSN: 3, IChO: 4 };
        questions.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
      } else if (filter.sortBy === 'pillar') {
        questions.sort((a, b) => a.pillar_number - b.pillar_number);
      } else if (filter.sortBy === 'oldest') {
        questions.sort((a, b) => (a.year || 2020) - (b.year || 2020));
      } else {
        // default newest
        questions.sort((a, b) => (b.year || 2024) - (a.year || 2024));
      }
    }

    return {
      questions,
      total: questions.length,
      isCloudConnected
    };
  }

  /**
   * Mengambil soal tunggal berdasarkan ID
   */
  public async getQuestionById(id: number): Promise<Question | null> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase.from('questions').select('*').eq('id', id).single();
        if (!error && data) {
          const q = data as Question;
          return {
            ...q,
            is_bookmarked: tagAndBookmarkService.isBookmarked(q.id),
            custom_tags: tagAndBookmarkService.getCustomTags(q.id)
          };
        }
      } catch (err) {
        // Fallback
      }
    }

    const localQ = this.localQuestions.get(id);
    if (localQ) {
      return {
        ...localQ,
        is_bookmarked: tagAndBookmarkService.isBookmarked(localQ.id),
        custom_tags: tagAndBookmarkService.getCustomTags(localQ.id)
      };
    }

    return null;
  }

  /**
   * Tambah butir soal baru
   */
  public async createQuestion(questionData: Omit<Question, 'id'>): Promise<Question> {
    const newId = Date.now();
    const newQuestion: Question = {
      ...questionData,
      id: newId,
      created_at: new Date().toISOString()
    };

    // Simpan di local store
    this.localQuestions.set(newId, newQuestion);
    this.persistLocalStore();

    // Simpan di Supabase jika aktif
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase.from('questions').insert([newQuestion]).select().single();
        if (!error && data) {
          return data as Question;
        }
      } catch (err) {
        console.warn('Gagal menyimpan soal ke Supabase:', err);
      }
    }

    return newQuestion;
  }

  /**
   * Perbarui butir soal
   */
  public async updateQuestion(id: number, updates: Partial<Question>): Promise<Question> {
    const existing = await this.getQuestionById(id);
    if (!existing) throw new Error(`Soal dengan ID ${id} tidak ditemukan.`);

    const updated: Question = { ...existing, ...updates };
    this.localQuestions.set(id, updated);
    this.persistLocalStore();

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('questions').update(updates).eq('id', id);
      } catch (err) {
        console.warn('Gagal update ke Supabase:', err);
      }
    }

    return updated;
  }

  /**
   * Hapus butir soal
   */
  public async deleteQuestion(id: number): Promise<boolean> {
    this.localQuestions.delete(id);
    this.persistLocalStore();

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('questions').delete().eq('id', id);
      } catch (err) {
        console.warn('Gagal menghapus dari Supabase:', err);
      }
    }
    return true;
  }

  /**
   * Sinkronisasi / Unggah Soal Standar ke Database Supabase Cloud
   */
  public async seedBenchmarkQuestionsToSupabase(): Promise<{
    success: boolean;
    count: number;
    message: string;
  }> {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return {
        success: false,
        count: 0,
        message: 'Konfigurasi Supabase belum lengkap di .env.local'
      };
    }

    try {
      // Periksa apakah tabel questions dapat diakses
      const payload = INITIAL_SEEDED_QUESTIONS.map(q => ({
        id: q.id,
        pillar_number: q.pillar_number,
        subtopic: q.subtopic,
        difficulty: q.difficulty,
        question_style: q.question_style || 'structured',
        title: q.title,
        question_text: q.question_text,
        year: q.year || 2024,
        source_event: q.source_event || 'OSN Silabus Puspresnas',
        estimated_time_minutes: q.estimated_time_minutes || 15,
        total_points: q.total_points || 10,
        sub_questions: q.sub_questions || [],
        solution_rubric: q.solution_rubric || '',
        expected_final_answer: q.expected_final_answer || '',
        solution_framework_template: q.solution_framework_template || '',
        tags: q.tags || [],
        is_verified: true
      }));

      const { data, error } = await supabase.from('questions').upsert(payload, { onConflict: 'id' });

      if (error) {
        if (error.code === 'PGRST205') {
          return {
            success: false,
            count: 0,
            message: 'Tabel `public.questions` belum dibuat di Supabase. Harap jalankan file `supabase/schema.sql` di SQL Editor Supabase terlebih dahulu.'
          };
        }
        return {
          success: false,
          count: 0,
          message: `Error Supabase: ${error.message}`
        };
      }

      return {
        success: true,
        count: payload.length,
        message: `Berhasil menyinkronkan ${payload.length} butir soal olimpiade ke Supabase Cloud!`
      };
    } catch (err: any) {
      return {
        success: false,
        count: 0,
        message: `Gagal sinkronisasi: ${err?.message || 'Koneksi terputus'}`
      };
    }
  }

  /**
   * Simpan Worksheet (Paket Soal) ke Supabase / Local Storage
   */
  public async saveWorksheet(
    worksheetData: {
      title: string;
      description?: string;
      time_limit_minutes: number;
      pass_score: number;
      questionIds: number[];
    }
  ): Promise<Worksheet> {
    const newWorksheet: Worksheet = {
      id: Date.now(),
      type: 'teacher_assignment',
      title: worksheetData.title,
      description: worksheetData.description || 'Paket latihan resmi Olimpiade Sains Kimia',
      time_limit_minutes: worksheetData.time_limit_minutes,
      pass_score: worksheetData.pass_score,
      is_published: true,
      created_at: new Date().toISOString(),
      item_count: worksheetData.questionIds.length
    };

    // 1. Simpan di local
    this.localWorksheets.unshift(newWorksheet);
    this.persistLocalStore();

    // 2. Simpan di Supabase jika ada
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('worksheets')
          .insert([{
            title: newWorksheet.title,
            description: newWorksheet.description,
            time_limit_minutes: newWorksheet.time_limit_minutes,
            pass_score: newWorksheet.pass_score,
            is_published: true,
            selected_question_ids: worksheetData.questionIds
          }])
          .select()
          .single();

        if (!error && data) {
          return data as Worksheet;
        }
      } catch (err) {
        console.warn('Gagal menyimpan worksheet ke cloud:', err);
      }
    }

    return newWorksheet;
  }

  public getSavedWorksheets(): Worksheet[] {
    return this.localWorksheets;
  }
}

export const questionBankService = new QuestionBankService();
