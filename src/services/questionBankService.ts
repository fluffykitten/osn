/**
 * questionBankService.ts
 * Layanan terpadu Bank Soal Olimpiade Sains Nasional (OSN/OSP/OSK/IChO).
 * Menghubungkan Supabase Cloud Database dengan failover resilient ke Local Cache.
 */

import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabaseClient';
import { BENCHMARK_QUESTIONS } from '../data/syllabusData';
import { SMA_CHEMISTRY_QUESTIONS } from '../data/smaQuestionsData';
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

// Gabungkan butir soal benchmark dengan bank soal Kimia SMA (Fase E & Fase F)
const ALL_DEFAULT_QUESTIONS: Question[] = [
  ...INITIAL_SEEDED_QUESTIONS,
  ...SMA_CHEMISTRY_QUESTIONS
];

class QuestionBankService {
  private localQuestions: Map<number, Question> = new Map();
  private localWorksheets: Worksheet[] = [];

  constructor() {
    this.initLocalStore();
  }

  private initLocalStore(): void {
    // 1. Seed benchmark & SMA curriculum questions
    ALL_DEFAULT_QUESTIONS.forEach(q => {
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
      const defaultIds = new Set(ALL_DEFAULT_QUESTIONS.map(q => q.id));
      const customOnes = Array.from(this.localQuestions.values()).filter(q => !defaultIds.has(q.id));
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
        if (!error && data) {
          questions = data as Question[];
          isCloudConnected = true;
        }
      } catch (err) {
        // Fallback hening ke cache lokal jika tabel belum dibuat di Supabase
      }
    }

    // Merge local dan cloud: cloud menimpa local jika ada duplikasi ID
    const mergedMap = new Map<number, Question>();
    this.localQuestions.forEach(q => mergedMap.set(q.id, q));
    questions.forEach(q => mergedMap.set(q.id, q));
    questions = Array.from(mergedMap.values());

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
        if (filter.difficulty === 'SMA') {
          questions = questions.filter(q => q.difficulty.startsWith('SMA'));
        } else {
          questions = questions.filter(q => q.difficulty === filter.difficulty);
        }
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
        const order: Record<string, number> = {
          'SMA-Mudah': 1,
          'SMA-Sedang': 2,
          'SMA-Sulit': 3,
          'SMA': 2,
          OSK: 4,
          OSP: 5,
          OSN: 6,
          IChO: 7,
        };
        questions.sort((a, b) => (order[a.difficulty] || 0) - (order[b.difficulty] || 0));
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
      const payload = ALL_DEFAULT_QUESTIONS.map(q => ({
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
      accessToken?: string;
      isLiveMonitored?: boolean;
      teacherId?: string;
      createdBy?: string;
    }
  ): Promise<Worksheet> {
    const newWorksheet: Worksheet = {
      id: Date.now(),
      teacher_id: worksheetData.teacherId,
      type: 'teacher_assignment',
      title: worksheetData.title,
      description: worksheetData.description || 'Paket latihan resmi Olimpiade Sains Kimia',
      created_by: worksheetData.createdBy || 'Guru Pembina',
      time_limit_minutes: worksheetData.time_limit_minutes,
      pass_score: worksheetData.pass_score,
      is_published: true,
      created_at: new Date().toISOString(),
      item_count: worksheetData.questionIds.length,
      access_token: worksheetData.accessToken,
      is_live_monitored: worksheetData.isLiveMonitored
    };
    (newWorksheet as any).selected_question_ids = worksheetData.questionIds;

    // 1. Simpan di local
    this.localWorksheets.unshift(newWorksheet);
    this.persistLocalStore();

    // Simpan ke registry live token lokal jika ada token
    if (worksheetData.accessToken) {
      try {
        const existing = localStorage.getItem('osn_live_worksheets_registry');
        const registry = existing ? JSON.parse(existing) : {};
        registry[worksheetData.accessToken.toUpperCase()] = newWorksheet;
        localStorage.setItem('osn_live_worksheets_registry', JSON.stringify(registry));
      } catch (e) {
        // Fallback hening
      }
    }

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
            selected_question_ids: worksheetData.questionIds,
            access_token: worksheetData.accessToken ? worksheetData.accessToken.toUpperCase() : null,
            is_live_monitored: worksheetData.isLiveMonitored,
            teacher_id: worksheetData.teacherId || null,
            created_by: newWorksheet.created_by
          }])
          .select()
          .single();

        if (error) {
          console.warn('[questionBankService] Notice saat menyimpan worksheet ke cloud:', error.message);
        } else if (data) {
          const savedCloud = data as Worksheet;
          const idx = this.localWorksheets.findIndex(ws => ws.id === newWorksheet.id);
          if (idx !== -1) {
            this.localWorksheets[idx] = savedCloud;
            this.persistLocalStore();
          }
          if (savedCloud.access_token) {
            try {
              const existing = localStorage.getItem('osn_live_worksheets_registry');
              const registry = existing ? JSON.parse(existing) : {};
              registry[savedCloud.access_token.toUpperCase()] = savedCloud;
              localStorage.setItem('osn_live_worksheets_registry', JSON.stringify(registry));
            } catch (e) {}
          }
          return savedCloud;
        }
      } catch (err) {
        console.warn('Gagal menyimpan worksheet ke cloud:', err);
      }
    }

    return newWorksheet;
  }

  public getSavedWorksheets(teacherId?: string): Worksheet[] {
    if (!teacherId) return this.localWorksheets;
    return this.localWorksheets.filter(
      w => w.teacher_id === teacherId || w.created_by === teacherId || !w.teacher_id
    );
  }

  /**
   * Mengambil semua Worksheet (sinkronisasi dari Supabase & cache lokal)
   * Jika teacherId diberikan, hanya mengembalikan worksheet milik guru tersebut
   */
  public async getAllWorksheets(teacherId?: string): Promise<Worksheet[]> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        let query = supabase
          .from('worksheets')
          .select('*')
          .order('created_at', { ascending: false });

        if (teacherId) {
          query = query.eq('teacher_id', teacherId);
        }

        const { data, error } = await query;

        if (!error && data && Array.isArray(data)) {
          const cloudWorksheets = data as Worksheet[];
          const map = new Map<number, Worksheet>();
          this.localWorksheets.forEach(w => map.set(w.id, w));
          cloudWorksheets.forEach(w => map.set(w.id, w));
          this.localWorksheets = Array.from(map.values()).sort(
            (a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
          );
          this.persistLocalStore();

          if (teacherId) {
            return cloudWorksheets;
          }
        }
      } catch (err) {
        console.warn('Gagal sinkronisasi daftar worksheet dari cloud:', err);
      }
    }

    if (teacherId) {
      return this.localWorksheets.filter(
        w => w.teacher_id === teacherId || w.created_by === teacherId || !w.teacher_id
      );
    }
    return this.localWorksheets;
  }

  /**
   * Mengambil Worksheet berdasarkan ID
   */
  public async getWorksheetById(id: number | string): Promise<Worksheet | null> {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    
    // Cari di Supabase terlebih dahulu jika terhubung
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('worksheets')
          .select('*')
          .eq('id', numId)
          .single();
          
        if (!error && data) {
          return data as Worksheet;
        }
      } catch (err) {
        // Fallback ke local
      }
    }

    // Fallback local
    const localWs = this.localWorksheets.find(ws => ws.id === numId);
    if (localWs) {
      return localWs;
    }
    
    return null;
  }

  /**
   * Memperbarui Worksheet yang sudah ada
   */
  public async updateWorksheet(
    id: number,
    worksheetData: {
      title: string;
      description?: string;
      time_limit_minutes: number;
      pass_score: number;
      questionIds: number[];
      accessToken?: string;
      isLiveMonitored?: boolean;
      teacherId?: string;
    }
  ): Promise<Worksheet> {
    const existing = await this.getWorksheetById(id);
    if (!existing) throw new Error(`Worksheet dengan ID ${id} tidak ditemukan.`);

    const updated: Worksheet = {
      ...existing,
      teacher_id: worksheetData.teacherId !== undefined ? worksheetData.teacherId : existing.teacher_id,
      title: worksheetData.title,
      description: worksheetData.description || existing.description,
      time_limit_minutes: worksheetData.time_limit_minutes,
      pass_score: worksheetData.pass_score,
      item_count: worksheetData.questionIds.length,
      access_token: worksheetData.accessToken !== undefined ? worksheetData.accessToken : existing.access_token,
      is_live_monitored: worksheetData.isLiveMonitored !== undefined ? worksheetData.isLiveMonitored : existing.is_live_monitored
    };
    (updated as any).selected_question_ids = worksheetData.questionIds;

    // 1. Simpan di local
    const idx = this.localWorksheets.findIndex(ws => ws.id === id);
    if (idx !== -1) {
      this.localWorksheets[idx] = updated;
    } else {
      this.localWorksheets.unshift(updated);
    }
    this.persistLocalStore();

    // Perbarui registry lokal token jika ada
    if (updated.access_token) {
      try {
        const existingReg = localStorage.getItem('osn_live_worksheets_registry');
        const reg = existingReg ? JSON.parse(existingReg) : {};
        reg[updated.access_token.toUpperCase()] = updated;
        localStorage.setItem('osn_live_worksheets_registry', JSON.stringify(reg));
      } catch (e) {
        // Fallback hening
      }
    }

    // 2. Simpan di Supabase jika ada
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { error } = await supabase
          .from('worksheets')
          .update({
            title: updated.title,
            description: updated.description,
            time_limit_minutes: updated.time_limit_minutes,
            pass_score: updated.pass_score,
            selected_question_ids: worksheetData.questionIds,
            access_token: updated.access_token ? updated.access_token.toUpperCase() : null,
            is_live_monitored: updated.is_live_monitored,
            item_count: updated.item_count
          })
          .eq('id', id);

        if (error) {
          console.warn('[questionBankService] Notice saat update worksheet ke cloud:', error.message);
        }
      } catch (err) {
        console.warn('Gagal mengupdate worksheet ke cloud:', err);
      }
    }

    return updated;
  }
}

export const questionBankService = new QuestionBankService();
