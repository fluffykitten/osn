/**
 * studentWorksheetService.ts
 * Layanan Pengelolaan Koleksi Lembar Kerja (Worksheet) Siswa OSN Kimia
 * Menggabungkan Modul Silabus Mandiri (10 Topik Puspresnas/IChO) & Penugasan Live Guru (via Token)
 */

import { PILLARS_DATA, BENCHMARK_QUESTIONS } from '../data/syllabusData';
import { ALL_DEFAULT_QUESTIONS } from './questionBankService';
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

export interface ActiveWorksheetSession {
  url: string;               // e.g. "/worksheet/practice/103001"
  type: string;              // "practice" | "teacher_assignment" | "live" | "static_module"
  id: string;                // "103001"
  title: string;             // e.g. "Latihan Soal #103001"
  currentQIndex: number;     // 0-indexed
  totalQuestions: number;    // e.g. 10
  lastActiveAt: number;      // Date.now()
  studentId: string;
}

const LOCAL_ENROLLED_WORKSHEETS_KEY = 'osn_student_enrolled_worksheets_v1';
const LOCAL_SUBMISSIONS_KEY = 'osn_student_submissions';
const LOCAL_SESSIONS_KEY = 'osn_live_sessions_registry_v1';
const LOCAL_WORKSHEET_STATUS_KEY = 'osn_student_worksheet_statuses_v2';
const LOCAL_ACTIVE_SESSION_KEY = 'osn_active_worksheet_session_v1';

interface StatusRecord {
  status: StudentWorksheetStatus;
  lastAccessedAt: string;
  type?: string;
  id?: string | number;
  token?: string;
  score?: number;
  maxScore?: number;
}

class StudentWorksheetService {
  /**
   * Mengambil semua worksheet yang dimiliki siswa:
   * 1. 10 Modul Mandiri Silabus Kompetensi OSN
   * 2. Worksheet Penugasan Guru yang telah diklaim via Token
   */
  public getStudentWorksheets(studentId?: string): StudentWorksheetItem[] {
    const list: StudentWorksheetItem[] = [];

    // 1. Ambil daftar worksheet guru yang telah diklaim siswa dari localStorage
    const enrolledTeacherWorksheets = this.getEnrolledTeacherWorksheets(studentId);
    list.push(...enrolledTeacherWorksheets);

    // 2. Tambahkan 10 Modul Mandiri Silabus OSN Kimia
    const staticModules = this.getStaticSyllabusWorksheets(studentId);
    list.push(...staticModules);

    return list;
  }

  /**
   * Membaca worksheet guru yang telah diklaim / diikuti oleh siswa
   */
  public getEnrolledTeacherWorksheets(studentId?: string): StudentWorksheetItem[] {
    try {
      const raw = localStorage.getItem(LOCAL_ENROLLED_WORKSHEETS_KEY);
      if (!raw) return [];
      const parsed: StudentWorksheetItem[] = JSON.parse(raw);

      // Perbarui status pengerjaan secara real-time dari session/submission/drafts
      return parsed.map((item) => this.enrichWorksheetStatus(item, studentId));
    } catch (err) {
      console.warn('Gagal membaca enrolled worksheets:', err);
      return [];
    }
  }

  /**
   * Mengambil 10 Modul Mandiri Standar Silabus OSN Kimia
   */
  public getStaticSyllabusWorksheets(studentId?: string): StudentWorksheetItem[] {
    // Baca riwayat submission lokal untuk menentukan skor & status modul mandiri
    const submissions = this.getLocalSubmissions();

    return PILLARS_DATA.map((pillar) => {
      // Cari soal default (benchmark + SMA curriculum) yang sesuai dengan pillar ini
      const pillarQuestions = ALL_DEFAULT_QUESTIONS.filter((q) => q.pillar_number === pillar.pillar_number);
      const fallbackQuestions = BENCHMARK_QUESTIONS.filter((q) => q.pillar_number === pillar.pillar_number);
      const questionCount = pillarQuestions.length > 0 ? pillarQuestions.length : (fallbackQuestions.length > 0 ? fallbackQuestions.length : 1);

      // Cari submission siswa untuk pillar ini
      const pillarSubmissions = submissions.filter((s) => s.pillarNumber === pillar.pillar_number);
      let status: StudentWorksheetStatus = 'not_started';
      let score: number | undefined = undefined;
      let maxScore: number | undefined = undefined;
      let progressPercent = 0;

      if (pillarSubmissions.length >= questionCount) {
        // Semua soal telah dinilai
        const sumScore = pillarSubmissions.reduce((acc, curr) => acc + (curr.totalScore || 0), 0);
        score = Math.round(sumScore / pillarSubmissions.length);
        maxScore = 10;
        progressPercent = 100;
        status = 'completed';
      } else if (pillarSubmissions.length > 0) {
        // Sebagian soal telah dinilai
        const latestOrBest = pillarSubmissions.sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0))[0];
        score = latestOrBest.totalScore;
        maxScore = latestOrBest.maxScore || 10;
        progressPercent = Math.min(95, Math.max(10, Math.round((pillarSubmissions.length / questionCount) * 100)));
        status = 'in_progress';
      }

      const baseItem: StudentWorksheetItem = {
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

      // Enrich dengan draft / status tracking lokal
      return this.enrichWorksheetStatus(baseItem, studentId);
    });
  }

  /**
   * Menandai worksheet telah dibuka dan mulai dikerjakan oleh siswa
   */
  public markWorksheetStarted(params: {
    type: string;
    id: string | number;
    token?: string;
    studentId?: string;
  }): void {
    try {
      const records = this.getStatusRecords();
      const sId = params.studentId || localStorage.getItem('osn_student_id') || DEFAULT_STUDENT_ID;
      const key = `${params.type}_${params.id}`;
      const now = new Date().toISOString();

      const existing = records[key] || {};
      if (existing.status !== 'completed') {
        records[key] = {
          ...existing,
          status: 'in_progress',
          lastAccessedAt: now,
          type: params.type,
          id: params.id,
          token: params.token,
        };

        if (params.token) {
          records[params.token.trim().toUpperCase()] = records[key];
        }

        localStorage.setItem(LOCAL_WORKSHEET_STATUS_KEY, JSON.stringify(records));
      }

      // Pastikan ada buffer draft minimal di storage jika belum dibuat
      const draftKey = `osn_ws_draft_${sId}_${params.type}_${params.id || '1'}`;
      if (!localStorage.getItem(draftKey)) {
        localStorage.setItem(
          draftKey,
          JSON.stringify({
            studentId: sId,
            worksheetId: params.id || '1',
            worksheetType: params.type,
            answers: {},
            currentQIndex: 0,
            elapsedSeconds: 1,
            savedAt: Date.now(),
          })
        );
      }
    } catch (e) {
      console.warn('Gagal menandai worksheet dimulai:', e);
    }
  }

  /**
   * Menandai worksheet telah selesai dikumpulkan / dinilai
   */
  public markWorksheetCompleted(params: {
    type: string;
    id: string | number;
    token?: string;
    studentId?: string;
    score?: number;
    maxScore?: number;
  }): void {
    try {
      const records = this.getStatusRecords();
      const key = `${params.type}_${params.id}`;
      const now = new Date().toISOString();

      records[key] = {
        status: 'completed',
        lastAccessedAt: now,
        type: params.type,
        id: params.id,
        token: params.token,
        score: params.score,
        maxScore: params.maxScore || 10,
      };

      if (params.token) {
        records[params.token.trim().toUpperCase()] = records[key];
      }

      localStorage.setItem(LOCAL_WORKSHEET_STATUS_KEY, JSON.stringify(records));

      // Jika worksheet yang selesai ini adalah sesi yang sedang aktif, bersihkan sesi aktifnya
      const active = this.getActiveSession(params.studentId);
      if (active && active.type === params.type && String(active.id) === String(params.id)) {
        this.clearActiveSession();
      }
    } catch (e) {
      console.warn('Gagal menandai worksheet selesai:', e);
    }
  }

  /**
   * Menyimpan sesi pengerjaan worksheet yang sedang aktif (url, index soal, dll)
   */
  public setActiveSession(session: ActiveWorksheetSession): void {
    try {
      localStorage.setItem(LOCAL_ACTIVE_SESSION_KEY, JSON.stringify(session));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('osn_active_worksheet_changed', { detail: session }));
      }
    } catch (err) {
      console.warn('Gagal menyimpan sesi aktif worksheet:', err);
    }
  }

  /**
   * Membaca sesi pengerjaan worksheet yang sedang aktif
   */
  public getActiveSession(studentId?: string): ActiveWorksheetSession | null {
    try {
      if (typeof window === 'undefined') return null;
      const raw = localStorage.getItem(LOCAL_ACTIVE_SESSION_KEY);
      if (!raw) return null;
      const parsed: ActiveWorksheetSession = JSON.parse(raw);
      if (!parsed || !parsed.url) return null;

      // Validasi studentId jika ada
      if (studentId && parsed.studentId && parsed.studentId !== studentId) {
        return null;
      }

      // Validasi kedaluwarsa sesi (misal aktif dalam 48 jam terakhir)
      const maxAgeMs = 48 * 60 * 60 * 1000;
      if (Date.now() - (parsed.lastActiveAt || 0) > maxAgeMs) {
        this.clearActiveSession();
        return null;
      }

      return parsed;
    } catch (err) {
      console.warn('Gagal membaca sesi aktif worksheet:', err);
      return null;
    }
  }

  /**
   * Menghapus sesi pengerjaan worksheet yang aktif (misal saat selesai dikumpulkan atau ditutup siswa)
   */
  public clearActiveSession(): void {
    try {
      if (typeof window === 'undefined') return;
      localStorage.removeItem(LOCAL_ACTIVE_SESSION_KEY);
      window.dispatchEvent(new CustomEvent('osn_active_worksheet_changed', { detail: null }));
    } catch (err) {
      console.warn('Gagal menghapus sesi aktif worksheet:', err);
    }
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
   * Memperkaya status pengerjaan item worksheet secara universal:
   * Mendeteksi status 'completed', 'in_progress', atau 'not_started'
   * dari registry status, draft lokal, submission riwayat, dan sesi live.
   */
  public enrichWorksheetStatus(item: StudentWorksheetItem, studentId?: string): StudentWorksheetItem {
    const sId = studentId || localStorage.getItem('osn_student_id') || DEFAULT_STUDENT_ID;
    const records = this.getStatusRecords();

    // 1. Cek dari registry status eksplisit
    const specificKey = `${item.type}_${item.id}`;
    const tokenKey = item.token ? item.token.trim().toUpperCase() : null;
    const statusRec: StatusRecord | undefined =
      records[specificKey] ||
      (tokenKey ? records[tokenKey] : undefined) ||
      records[String(item.id)];

    if (statusRec) {
      if (statusRec.status === 'completed') {
        return {
          ...item,
          status: 'completed',
          score: statusRec.score ?? item.score,
          max_score: statusRec.maxScore ?? item.max_score ?? 10,
          progress_percent: 100,
          last_accessed_at: statusRec.lastAccessedAt || item.last_accessed_at,
        };
      }
      if (statusRec.status === 'in_progress') {
        return {
          ...item,
          status: 'in_progress',
          last_accessed_at: statusRec.lastAccessedAt || item.last_accessed_at,
        };
      }
    }

    // 2. Cek riwayat submission lokal (misal untuk tugas guru atau kuis mandiri)
    const submissions = this.getLocalSubmissions();
    const requiredCount = item.item_count || 1;
    const matchedSubs = submissions.filter(
      (s) =>
        s.worksheetId === item.id ||
        s.questionId === item.id ||
        (item.type === 'static_module' && s.pillarNumber === item.pillar_number)
    );

    // Tandai selesai HANYA jika SEMUA butir soal dalam worksheet sudah dinilai
    if (matchedSubs.length >= requiredCount && requiredCount > 0) {
      const sumScore = matchedSubs.reduce((sum, s) => sum + (s.totalScore || 0), 0);
      const avgScore = Math.round(sumScore / matchedSubs.length);
      return {
        ...item,
        status: 'completed',
        score: avgScore,
        max_score: 10,
        progress_percent: 100,
        last_accessed_at: matchedSubs[0]?.gradedAt || matchedSubs[0]?.submittedAt || item.last_accessed_at,
      };
    } else if (matchedSubs.length > 0) {
      const progress = Math.min(95, Math.max(10, Math.round((matchedSubs.length / requiredCount) * 100)));
      return {
        ...item,
        status: 'in_progress',
        progress_percent: progress,
        last_accessed_at: matchedSubs[0]?.gradedAt || matchedSubs[0]?.submittedAt || item.last_accessed_at,
      };
    }

    // 3. Cek apakah ada draft pengerjaan tersimpan di localStorage
    const possibleDraftKeys = [
      `osn_ws_draft_${sId}_${item.type}_${item.id}`,
      `osn_ws_draft_${item.type}_${item.id}`,
      item.token ? `osn_ws_draft_${sId}_live_${item.token}` : '',
      item.token ? `osn_ws_draft_live_${item.token}` : '',
      item.type === 'static_module' ? `osn_ws_draft_${sId}_static_module_${item.pillar_number}` : '',
      item.type === 'static_module' ? `osn_ws_draft_static_module_${item.pillar_number}` : '',
      item.type === 'teacher_assignment' ? `osn_ws_draft_${sId}_teacher_assignment_${item.id}` : '',
    ].filter(Boolean);

    for (const key of possibleDraftKeys) {
      try {
        const rawDraft = localStorage.getItem(key);
        if (rawDraft) {
          const draft = JSON.parse(rawDraft);
          if (draft) {
            // Jika draft memiliki evaluations untuk seluruh butir soal, tandai completed
            const gradedEvalCount = draft.evaluations ? Object.keys(draft.evaluations).length : 0;
            if (gradedEvalCount >= requiredCount && requiredCount > 0) {
              const evals = Object.values(draft.evaluations) as any[];
              const sumScore = evals.reduce((sum, ev) => sum + (ev.totalScore || 0), 0);
              const avgScore = Math.round(sumScore / evals.length);
              return {
                ...item,
                status: 'completed',
                score: avgScore,
                max_score: 10,
                progress_percent: 100,
                last_accessed_at: draft.savedAt ? new Date(draft.savedAt).toISOString() : item.last_accessed_at,
              };
            }

            if (
              (draft.answers && Object.keys(draft.answers).length > 0) ||
              (typeof draft.elapsedSeconds === 'number' && draft.elapsedSeconds > 0) ||
              draft.savedAt
            ) {
              const answeredCount = Object.keys(draft.answers || {}).length;
              const progress = Math.min(95, Math.max(10, Math.round((answeredCount / requiredCount) * 100)));
              return {
                ...item,
                status: 'in_progress',
                progress_percent: progress,
                last_accessed_at: draft.savedAt ? new Date(draft.savedAt).toISOString() : item.last_accessed_at,
              };
            }
          }
        }
      } catch {}
    }

    // 4. Cek sesi live guru jika tipe live
    if (item.type === 'live' && item.token) {
      try {
        const sessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
        if (sessionsRaw) {
          const sessions = JSON.parse(sessionsRaw);
          const sessionKey = `${item.token}_${sId}`;
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
            } else if (answeredCount > 0 || session.current_question_index !== undefined) {
              const progress = Math.min(95, Math.max(10, Math.round((answeredCount / (item.item_count || 1)) * 100)));
              return {
                ...item,
                status: 'in_progress',
                progress_percent: progress,
                last_accessed_at: session.last_active_at,
              };
            }
          }
        }
      } catch {}
    }

    return item;
  }

  private getStatusRecords(): Record<string, StatusRecord> {
    try {
      const raw = localStorage.getItem(LOCAL_WORKSHEET_STATUS_KEY);
      if (!raw) return {};
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  private getLocalSubmissions(): any[] {
    try {
      const raw = localStorage.getItem(LOCAL_SUBMISSIONS_KEY);
      if (!raw) return [];
      const parsed: any[] = JSON.parse(raw);
      // Bersihkan catatan dummy sub-baseline
      return parsed.filter((item) => item && !item.id?.startsWith('sub-baseline-'));
    } catch {
      return [];
    }
  }
}

export const studentWorksheetService = new StudentWorksheetService();

