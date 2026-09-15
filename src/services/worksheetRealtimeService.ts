/**
 * worksheetRealtimeService.ts
 * Layanan Komunikasi Real-time Dua Arah (Guru <-> Siswa)
 * Menggunakan Supabase Realtime (Broadcast & Presence) + Resilient Local BroadcastChannel Fallback
 */

import { getSupabaseClient, DEFAULT_STUDENT_ID, DEFAULT_STUDENT_NAME } from '../lib/supabaseClient';
import { questionBankService } from './questionBankService';
import type {
  Worksheet,
  WorksheetLiveSession,
  LiveKeystrokePayload,
  LaserPointerEvent,
  TeacherLiveComment,
} from '../types/database';

const LOCAL_LIVE_WORKSHEETS_KEY = 'osn_live_worksheets_registry_v1';
const LOCAL_SESSIONS_KEY = 'osn_live_sessions_registry_v1';
const LOCAL_COMMENTS_KEY = 'osn_live_comments_registry_v1';

class WorksheetRealtimeService {
  private localBroadcastChannels: Map<string, BroadcastChannel> = new Map();

  /**
   * Menghasilkan kode token unik 6-7 karakter alfanumerik (misal: OSN-784 atau CHEM-92)
   */
  public generateToken(prefix: string = 'OSN'): string {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}-${code}`;
  }

  /**
   * Mendapatkan atau membuat instance BroadcastChannel browser untuk pengetesan lokal antar tab
   */
  private getLocalChannel(token: string): BroadcastChannel | null {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) return null;
    const cleanToken = token.trim().toUpperCase();
    if (!this.localBroadcastChannels.has(cleanToken)) {
      this.localBroadcastChannels.set(cleanToken, new BroadcastChannel(`osn_live_${cleanToken}`));
    }
    return this.localBroadcastChannels.get(cleanToken)!;
  }

  /**
   * Guru membuat worksheet baru dengan token akses sesi live
   */
  public async createLiveWorksheet(params: {
    title: string;
    description?: string;
    time_limit_minutes: number;
    pass_score: number;
    questionIds: number[];
  }): Promise<{ worksheet: Worksheet; token: string }> {
    const token = this.generateToken();

    // 1. Simpan di database via questionBankService
    const worksheet = await questionBankService.saveWorksheet({
      title: params.title,
      description: params.description || 'Sesi Live Kolaborasi Guru & Siswa',
      time_limit_minutes: params.time_limit_minutes,
      pass_score: params.pass_score,
      questionIds: params.questionIds,
    });

    // Perkaya dengan token
    const enrichedWorksheet: Worksheet = {
      ...worksheet,
      access_token: token,
      is_live_monitored: true,
    };

    // 2. Simpan ke registry lokal
    try {
      const existing = localStorage.getItem(LOCAL_LIVE_WORKSHEETS_KEY);
      const registry: Record<string, Worksheet> = existing ? JSON.parse(existing) : {};
      registry[token] = enrichedWorksheet;
      localStorage.setItem(LOCAL_LIVE_WORKSHEETS_KEY, JSON.stringify(registry));
    } catch (e) {
      console.warn('Gagal menyimpan registry token lokal:', e);
    }

    // 3. Update Supabase jika terhubung
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase
          .from('worksheets')
          .update({ access_token: token, is_live_monitored: true })
          .eq('id', worksheet.id);
      } catch (err) {
        console.warn('Gagal update token ke cloud:', err);
      }
    }

    return { worksheet: enrichedWorksheet, token };
  }

  /**
   * Siswa memvalidasi token dan bergabung ke sesi pengerjaan worksheet
   */
  public async joinWorksheetByToken(
    rawToken: string,
    student: { id?: string; name?: string }
  ): Promise<{
    success: boolean;
    worksheet?: Worksheet;
    session?: WorksheetLiveSession;
    error?: string;
  }> {
    const cleanToken = rawToken.trim().toUpperCase();
    const studentId = student.id || DEFAULT_STUDENT_ID;
    const studentName = student.name || DEFAULT_STUDENT_NAME;

    let targetWorksheet: Worksheet | null = null;

    // 1. Cari di Supabase jika aktif
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('worksheets')
          .select('*')
          .eq('access_token', cleanToken)
          .single();

        if (!error && data) {
          targetWorksheet = data as Worksheet;
        }
      } catch (e) {
        // Fallback hening
      }
    }

    // 2. Cari di registry lokal jika belum ketemu
    if (!targetWorksheet) {
      try {
        const existing = localStorage.getItem(LOCAL_LIVE_WORKSHEETS_KEY);
        if (existing) {
          const registry: Record<string, Worksheet> = JSON.parse(existing);
          if (registry[cleanToken]) {
            targetWorksheet = registry[cleanToken];
          }
        }
      } catch (e) {
        console.warn('Gagal membaca registry lokal:', e);
      }
    }

    if (!targetWorksheet) {
      return {
        success: false,
        error: `Kode token "${cleanToken}" tidak ditemukan atau belum aktif. Silakan hubungi Guru Anda.`,
      };
    }

    // Buat atau ambil sesi live siswa
    const sessionKey = `${cleanToken}_${studentId}`;
    let session: WorksheetLiveSession = {
      worksheet_id: targetWorksheet.id,
      access_token: cleanToken,
      student_id: studentId,
      student_name: studentName,
      current_question_index: 0,
      status: 'active',
      live_draft: {},
      last_active_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };

    // Baca sesi sebelumnya jika ada
    try {
      const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
      const allSessions: Record<string, WorksheetLiveSession> = allSessionsRaw ? JSON.parse(allSessionsRaw) : {};
      if (allSessions[sessionKey]) {
        session = allSessions[sessionKey];
        session.status = 'active';
        session.last_active_at = new Date().toISOString();
      }
      allSessions[sessionKey] = session;
      localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(allSessions));
    } catch (e) {
      console.warn('Gagal memuat sesi lokal:', e);
    }

    // Sinkronkan sesi ke Supabase jika ada tabel
    if (supabase) {
      try {
        await supabase.from('worksheet_live_sessions').upsert({
          worksheet_id: targetWorksheet.id,
          access_token: cleanToken,
          student_id: studentId,
          student_name: studentName,
          status: 'active',
          last_active_at: new Date().toISOString(),
        }, { onConflict: 'access_token,student_id' });
      } catch (err) {
        // Fallback
      }
    }

    return {
      success: true,
      worksheet: targetWorksheet,
      session,
    };
  }

  /**
   * Siswa menyiarkan ketikan (keystrokes) secara langsung ke Guru
   */
  public sendStudentKeystroke(payload: LiveKeystrokePayload): void {
    const cleanToken = payload.access_token.trim().toUpperCase();

    // 1. Siarkan via Browser BroadcastChannel (Pengujian 2-Tab Lokal Tanpa Latensi)
    const localChannel = this.getLocalChannel(cleanToken);
    if (localChannel) {
      localChannel.postMessage({
        type: 'STUDENT_TYPING',
        payload,
      });
    }

    // 2. Simpan draft ke sesi lokal
    try {
      const sessionKey = `${cleanToken}_${payload.student_id}`;
      const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
      const allSessions: Record<string, WorksheetLiveSession> = allSessionsRaw ? JSON.parse(allSessionsRaw) : {};
      if (!allSessions[sessionKey]) {
        allSessions[sessionKey] = {
          worksheet_id: 0,
          access_token: cleanToken,
          student_id: payload.student_id,
          student_name: payload.student_name,
          current_question_index: payload.question_index,
          status: 'active',
          live_draft: {},
        };
      }
      allSessions[sessionKey].live_draft[payload.question_id] = {
        steps: payload.steps,
        finalAnswer: payload.finalAnswer,
      };
      allSessions[sessionKey].current_question_index = payload.question_index;
      allSessions[sessionKey].last_active_at = new Date().toISOString();
      localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(allSessions));
    } catch (e) {
      // Ignored
    }

    // 3. Siarkan via Supabase Realtime Broadcast jika aktif
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const room = supabase.channel(`room:worksheet:${cleanToken}`);
        room.send({
          type: 'broadcast',
          event: 'student_typing',
          payload,
        });
      } catch (err) {
        // Fallback
      }
    }
  }

  /**
   * Guru menggerakkan laser pointer virtual ke arah layar siswa
   */
  public sendTeacherLaser(event: LaserPointerEvent): void {
    const cleanToken = event.access_token.trim().toUpperCase();

    // 1. BroadcastChannel lokal
    const localChannel = this.getLocalChannel(cleanToken);
    if (localChannel) {
      localChannel.postMessage({
        type: 'TEACHER_LASER',
        payload: event,
      });
    }

    // 2. Supabase Realtime Broadcast
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const room = supabase.channel(`room:worksheet:${cleanToken}`);
        room.send({
          type: 'broadcast',
          event: 'teacher_laser',
          payload: event,
        });
      } catch (err) {
        // Fallback
      }
    }
  }

  /**
   * Guru mengirimkan komentar atau tips langsung ke siswa
   */
  public async sendTeacherComment(
    data: Omit<TeacherLiveComment, 'id' | 'created_at'>
  ): Promise<TeacherLiveComment> {
    const cleanToken = data.access_token.trim().toUpperCase();
    const newComment: TeacherLiveComment = {
      ...data,
      id: Date.now(),
      created_at: new Date().toISOString(),
      is_read: false,
    };

    // 1. Simpan di local storage comments
    try {
      const allCommentsRaw = localStorage.getItem(LOCAL_COMMENTS_KEY);
      const allComments: TeacherLiveComment[] = allCommentsRaw ? JSON.parse(allCommentsRaw) : [];
      allComments.push(newComment);
      localStorage.setItem(LOCAL_COMMENTS_KEY, JSON.stringify(allComments));
    } catch (e) {
      console.warn('Gagal menyimpan komentar lokal:', e);
    }

    // 2. BroadcastChannel lokal
    const localChannel = this.getLocalChannel(cleanToken);
    if (localChannel) {
      localChannel.postMessage({
        type: 'TEACHER_COMMENT',
        payload: newComment,
      });
    }

    // 3. Supabase Realtime & DB
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const room = supabase.channel(`room:worksheet:${cleanToken}`);
        room.send({
          type: 'broadcast',
          event: 'teacher_comment',
          payload: newComment,
        });

        await supabase.from('worksheet_live_comments').insert([
          {
            access_token: cleanToken,
            student_id: data.student_id,
            teacher_id: data.teacher_id,
            teacher_name: data.teacher_name || 'Guru Pembina',
            question_id: data.question_id,
            comment_text: data.comment_text,
          },
        ]);
      } catch (err) {
        // Fallback
      }
    }

    return newComment;
  }

  /**
   * Berlangganan (Subscribe) ke sesi ruang kelas (digunakan oleh Guru & Siswa)
   */
  public subscribeToClassroom(
    token: string,
    callbacks: {
      onStudentTyping?: (payload: LiveKeystrokePayload) => void;
      onTeacherLaser?: (payload: LaserPointerEvent) => void;
      onTeacherComment?: (payload: TeacherLiveComment) => void;
      onStudentPresence?: (sessions: WorksheetLiveSession[]) => void;
    }
  ): () => void {
    const cleanToken = token.trim().toUpperCase();

    // 1. Setup Local BroadcastChannel Listener
    const localChannel = this.getLocalChannel(cleanToken);
    const handleLocalMessage = (ev: MessageEvent) => {
      const data = ev.data;
      if (!data) return;

      if (data.type === 'STUDENT_TYPING' && callbacks.onStudentTyping) {
        callbacks.onStudentTyping(data.payload);
      } else if (data.type === 'TEACHER_LASER' && callbacks.onTeacherLaser) {
        callbacks.onTeacherLaser(data.payload);
      } else if (data.type === 'TEACHER_COMMENT' && callbacks.onTeacherComment) {
        callbacks.onTeacherComment(data.payload);
      }
    };

    if (localChannel) {
      localChannel.addEventListener('message', handleLocalMessage);
    }

    // 2. Setup Supabase Realtime Channel
    let supabaseRoom: any = null;
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        supabaseRoom = supabase.channel(`room:worksheet:${cleanToken}`);

        supabaseRoom
          .on('broadcast', { event: 'student_typing' }, ({ payload }: any) => {
            if (callbacks.onStudentTyping) callbacks.onStudentTyping(payload);
          })
          .on('broadcast', { event: 'teacher_laser' }, ({ payload }: any) => {
            if (callbacks.onTeacherLaser) callbacks.onTeacherLaser(payload);
          })
          .on('broadcast', { event: 'teacher_comment' }, ({ payload }: any) => {
            if (callbacks.onTeacherComment) callbacks.onTeacherComment(payload);
          })
          .subscribe();
      } catch (err) {
        console.warn('Gagal subscribe ke Supabase Realtime:', err);
      }
    }

    // Return cleanup function
    return () => {
      if (localChannel) {
        localChannel.removeEventListener('message', handleLocalMessage);
      }
      if (supabaseRoom && supabase) {
        try {
          supabase.removeChannel(supabaseRoom);
        } catch (e) {
          // Ignored
        }
      }
    };
  }

  /**
   * Mengambil daftar seluruh siswa yang terdaftar di sesi token ini
   */
  public async getActiveSessions(token: string): Promise<WorksheetLiveSession[]> {
    const cleanToken = token.trim().toUpperCase();
    let sessions: WorksheetLiveSession[] = [];

    // 1. Coba dari Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('worksheet_live_sessions')
          .select('*')
          .eq('access_token', cleanToken);

        if (!error && data) {
          sessions = data as WorksheetLiveSession[];
        }
      } catch (err) {
        // Fallback
      }
    }

    // 2. Jika kosong, baca dari localStorage
    if (sessions.length === 0) {
      try {
        const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
        if (allSessionsRaw) {
          const allSessions: Record<string, WorksheetLiveSession> = JSON.parse(allSessionsRaw);
          sessions = Object.values(allSessions).filter(
            (s) => s.access_token.toUpperCase() === cleanToken
          );
        }
      } catch (e) {
        console.warn('Gagal membaca sesi lokal:', e);
      }
    }

    return sessions;
  }

  /**
   * Mengambil komentar guru untuk siswa dan nomor soal tertentu
   */
  public getComments(token: string, studentId: string, questionId?: number): TeacherLiveComment[] {
    const cleanToken = token.trim().toUpperCase();
    try {
      const allCommentsRaw = localStorage.getItem(LOCAL_COMMENTS_KEY);
      if (allCommentsRaw) {
        const allComments: TeacherLiveComment[] = JSON.parse(allCommentsRaw);
        return allComments.filter(
          (c) =>
            c.access_token.toUpperCase() === cleanToken &&
            c.student_id === studentId &&
            (!questionId || c.question_id === questionId)
        );
      }
    } catch (e) {
      console.warn('Gagal membaca komentar lokal:', e);
    }
    return [];
  }
}

export const worksheetRealtimeService = new WorksheetRealtimeService();
