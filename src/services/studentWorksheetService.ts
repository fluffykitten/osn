/**
 * studentWorksheetService.ts
 * Layanan Pengelolaan Koleksi Lembar Kerja (Worksheet) Siswa OSN Kimia
 * Menggabungkan Modul Silabus Mandiri (10 Topik Puspresnas/IChO) & Penugasan Live Guru (via Token)
 */

import { PILLARS_DATA, BENCHMARK_QUESTIONS } from '../data/syllabusData';
import { getSupabaseClient, DEFAULT_STUDENT_ID } from '../lib/supabaseClient';
import type { Worksheet } from '../types/database';

export type StudentWorksheetStatus = 'not_started' | 'in_progress' | 'completed';

export interface StudentWorksheetItem {
  id: string | number;
  type: 'static_module' | 'live' | 'teacher_assignment';
  title: string;
  description: string;
  pillar_number?: number;
  category?: string;
  token?: string;
  teacher_name?: string;
  item_count: number;
  time_limit_minutes: number;
  pass_score: number;
  status: StudentWorksheetStatus;
  score?: number;
  max_score?: number;
  progress_percent?: number;
  enrolled_at: string;
  last_accessed_at?: string;
}

const LOCAL_ENROLLED_WORKSHEETS_KEY = 'osn_student_enrolled_worksheets_v1';
const LOCAL_SUBMISSIONS_KEY = 'osn_student_submissions';
const LOCAL_SESSIONS_KEY = 'osn_live_sessions_registry_v1';

class StudentWorksheetService {
  /**
   * Mengambil semua worksheet yang dimiliki siswa:
   * 1. 10 Modul Mandiri Silabus Kompetensi OSN
   * 2. Worksheet Penugasan Guru yang telah diklaim via Token
   */
  public getStudentWorksheets(): StudentWorksheetItem[] {
    const list: StudentWorksheetItem[] = [];

    // 1. Ambil daftar worksheet guru yang telah diklaim siswa dari localStorage
    const enrolledTeacherWorksheets = this.getEnrolledTeacherWorksheets();
    list.push(...enrolledTeacherWorksheets);

    // 2. Tambahkan 10 Modul Mandiri Silabus OSN Kimia
    const staticModules = this.getStaticSyllabusWorksheets();
    list.push(...staticModules);

    return list;
  }

  /**
   * Membaca worksheet guru yang telah diklaim / diikuti oleh siswa
   */
  public getEnrolledTeacherWorksheets(): StudentWorksheetItem[] {
    try {
      const raw = localStorage.getItem(LOCAL_ENROLLED_WORKSHEETS_KEY);
      if (!raw) return [];
      const parsed: StudentWorksheetItem[] = JSON.parse(raw);

      // Perbarui status pengerjaan secara real-time dari session/submission
      return parsed.map((item) => this.enrichWorksheetStatus(item));
    } catch (err) {
      console.warn('Gagal membaca enrolled worksheets:', err);
      return [];
    }
  }

  /**
   * Mengambil 10 Modul Mandiri Standar Silabus OSN Kimia
   */
  public getStaticSyllabusWorksheets(): StudentWorksheetItem[] {
    // Baca riwayat submission lokal untuk menentukan skor & status modul mandiri
    const submissions = this.getLocalSubmissions();

    return PILLARS_DATA.map((pillar) => {
      // Cari soal benchmark yang sesuai dengan pillar ini
      const pillarQuestions = BENCHMARK_QUESTIONS.filter((q) => q.pillar_number === pillar.pillar_number);
      const questionCount = pillarQuestions.length > 0 ? pillarQuestions.length : 1;

      // Cari submission siswa untuk pillar ini
      const pillarSubmissions = submissions.filter((s) => s.pillarNumber === pillar.pillar_number);
      let status: StudentWorksheetStatus = 'not_started';
      let score: number | undefined = undefined;
      let maxScore: number | undefined = undefined;
      let progressPercent = 0;

      if (pillarSubmissions.length > 0) {
        // Ambil submission dengan skor tertinggi
        const latestOrBest = pillarSubmissions.sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0))[0];
        score = latestOrBest.totalScore;
        maxScore = latestOrBest.maxScore || 10;
        progressPercent = Math.min(100, Math.round(((score || 0) / (maxScore || 10)) * 100));
        status = progressPercent >= 60 ? 'completed' : 'in_progress';
      }

      return {
        id: pillar.id,
        type: 'static_module' as const,
        pillar_number: pillar.pillar_number,
        category: pillar.category,
        title: `Topik #${pillar.pillar_number}: ${pillar.title}`,
        description: pillar.description,
        item_count: questionCount,
        time_limit_minutes: 45,
        pass_score: 75,
        status,
        score,
        max_score: maxScore,
        progress_percent: progressPercent,
        enrolled_at: '2026-01-01T00:00:00.000Z',
      };
    });
  }

  /**
   * Mendaftarkan worksheet penugasan guru baru ke daftar "Worksheet Saya"
   */
  public enrollWorksheet(worksheet: Worksheet, token: string, teacherName: string = 'Guru Pembina OSN'): StudentWorksheetItem {
    const cleanToken = token.trim().toUpperCase();
    const enrolledList = this.getEnrolledTeacherWorksheets();

    // Periksa apakah sudah terdaftar sebelumnya
    const existingIndex = enrolledList.findIndex(
      (item) => item.token === cleanToken || item.id === worksheet.id
    );

    const newItem: StudentWorksheetItem = {
      id: worksheet.id,
      type: 'live',
      title: worksheet.title,
      description: worksheet.description || 'Sesi Live Kolaborasi Guru & Siswa',
      token: cleanToken,
      teacher_name: teacherName,
      item_count: worksheet.item_count || (worksheet.items ? worksheet.items.length : 3),
      time_limit_minutes: worksheet.time_limit_minutes || 60,
      pass_score: worksheet.pass_score || 70,
      status: 'not_started',
      enrolled_at: new Date().toISOString(),
      last_accessed_at: new Date().toISOString(),
      progress_percent: 0,
    };

    if (existingIndex >= 0) {
      // Perbarui item yang sudah ada
      enrolledList[existingIndex] = {
        ...enrolledList[existingIndex],
        ...newItem,
        status: enrolledList[existingIndex].status,
        score: enrolledList[existingIndex].score,
        max_score: enrolledList[existingIndex].max_score,
      };
    } else {
      enrolledList.unshift(newItem);
    }

    try {
      localStorage.setItem(LOCAL_ENROLLED_WORKSHEETS_KEY, JSON.stringify(enrolledList));
    } catch (e) {
      console.warn('Gagal menyimpan enrolled worksheet ke local storage:', e);
    }

    return newItem;
  }

  /**
   * Menghapus worksheet penugasan dari daftar siswa
   */
  public removeEnrolledWorksheet(tokenOrId: string | number): void {
    const enrolledList = this.getEnrolledTeacherWorksheets();
    const filtered = enrolledList.filter(
      (item) => item.token !== tokenOrId && item.id !== tokenOrId
    );
    try {
      localStorage.setItem(LOCAL_ENROLLED_WORKSHEETS_KEY, JSON.stringify(filtered));
    } catch (e) {
      console.warn('Gagal update storage:', e);
    }
  }

  /**
   * Memperkaya status pengerjaan item worksheet dari local storage sessions
   */
  private enrichWorksheetStatus(item: StudentWorksheetItem): StudentWorksheetItem {
    if (item.type === 'live' && item.token) {
      try {
        const sessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
        if (sessionsRaw) {
          const sessions = JSON.parse(sessionsRaw);
          const studentId = localStorage.getItem('osn_student_id') || DEFAULT_STUDENT_ID;
          const sessionKey = `${item.token}_${studentId}`;
          const session = sessions[sessionKey];

          if (session) {
            const answeredCount = Object.keys(session.live_draft || {}).length;
            if (session.status === 'submitted' || (session.total_score !== undefined && session.total_score > 0)) {
              return {
                ...item,
                status: 'completed',
                score: session.total_score,
                max_score: session.max_score || 100,
                progress_percent: 100,
                last_accessed_at: session.last_active_at,
              };
            } else if (answeredCount > 0) {
              const progress = Math.min(95, Math.round((answeredCount / (item.item_count || 1)) * 100));
              return {
                ...item,
                status: 'in_progress',
                progress_percent: progress,
                last_accessed_at: session.last_active_at,
              };
            }
          }
        }
      } catch (err) {
        // Fallback hening
      }
    }
    return item;
  }

  private getLocalSubmissions(): any[] {
    try {
      const raw = localStorage.getItem(LOCAL_SUBMISSIONS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}

export const studentWorksheetService = new StudentWorksheetService();
