/**
 * worksheetRealtimeService.ts
 * Layanan Komunikasi Real-time Dua Arah (Guru <-> Siswa)
 * Menggunakan Supabase Realtime (Broadcast & Presence) + Resilient Local BroadcastChannel Fallback
 */

import { getSupabaseClient, DEFAULT_STUDENT_ID, DEFAULT_STUDENT_NAME } from '../lib/supabaseClient';
import { questionBankService } from './questionBankService';
import { PILLARS_DATA } from '../data/syllabusData';
import type {
  Worksheet,
  WorksheetLiveSession,
  LiveKeystrokePayload,
  LaserPointerEvent,
  TeacherLiveComment,
  LiveHighlightEvent,
} from '../types/database';

const LOCAL_LIVE_WORKSHEETS_KEY = 'osn_live_worksheets_registry_v1';
const LOCAL_SESSIONS_KEY = 'osn_live_sessions_registry_v1';
const LOCAL_COMMENTS_KEY = 'osn_live_comments_registry_v1';

class WorksheetRealtimeService {
  private localBroadcastChannels: Map<string, BroadcastChannel> = new Map();
  private globalPresenceChannel: BroadcastChannel | null = null;

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
   * Mendapatkan instance BroadcastChannel global untuk sinkronisasi keberadaan murid (presence)
   * antar seluruh tab guru & siswa di browser yang sama.
   */
  public getGlobalPresenceChannel(): BroadcastChannel | null {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) return null;
    if (!this.globalPresenceChannel) {
      try {
        this.globalPresenceChannel = new BroadcastChannel('osn_live_presence_global');
      } catch (e) {
        console.warn('BroadcastChannel presence tidak didukung:', e);
      }
    }
    return this.globalPresenceChannel;
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
    customToken?: string;
  }): Promise<{ worksheet: Worksheet; token: string }> {
    const rawToken = params.customToken && params.customToken.trim() ? params.customToken.trim() : this.generateToken();
    const token = rawToken.toUpperCase();

    // 1. Simpan di database via questionBankService
    const worksheet = await questionBankService.saveWorksheet({
      title: params.title,
      description: params.description || 'Sesi Live Kolaborasi Guru & Siswa',
      time_limit_minutes: params.time_limit_minutes,
      pass_score: params.pass_score,
      questionIds: params.questionIds,
      accessToken: token,
      isLiveMonitored: true
    });

    // Perkaya dengan token jika dari failover
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
          .ilike('access_token', cleanToken)
          .maybeSingle();

        if (error) {
          console.warn('[joinWorksheetByToken] Supabase query notice:', error.message);
        } else if (data) {
          targetWorksheet = data as Worksheet;
        }
      } catch (e: any) {
        console.warn('[joinWorksheetByToken] Supabase error:', e?.message || e);
      }
    }

    // 2. Cari di registry lokal jika belum ketemu
    if (!targetWorksheet) {
      try {
        const localWs = questionBankService.getSavedWorksheets().find(
          ws => ws.access_token?.toUpperCase() === cleanToken
        );
        if (localWs) {
          targetWorksheet = localWs;
        } else {
          const existing = localStorage.getItem(LOCAL_LIVE_WORKSHEETS_KEY);
          if (existing) {
            const registry: Record<string, Worksheet> = JSON.parse(existing);
            if (registry[cleanToken]) {
              targetWorksheet = registry[cleanToken];
            }
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
   * Siswa menyiarkan keberadaan (presence) saat membuka lembar kerja, berganti soal,
   * atau memperbarui progres pengerjaan sehingga Guru Pembina dapat memonitor secara real-time.
   */
  public updateStudentPresence(params: {
    student_id: string;
    student_name: string;
    student_email?: string;
    classroom_id?: number;
    worksheet_id: number;
    worksheet_title: string;
    worksheet_type?: 'live' | 'teacher_assignment' | 'static_module';
    access_token?: string;
    current_question_index?: number;
    current_question_title?: string;
    total_questions?: number;
    answered_count?: number;
    status?: 'active' | 'idle' | 'disconnected';
    live_draft?: any;
  }): WorksheetLiveSession {
    const token = params.access_token && params.access_token.trim()
      ? params.access_token.trim().toUpperCase()
      : `WS-${params.worksheet_id}`;
    const studentId = params.student_id;
    const sessionKey = `${token}_${studentId}`;
    const now = new Date().toISOString();

    let session: WorksheetLiveSession = {
      worksheet_id: params.worksheet_id,
      worksheet_title: params.worksheet_title,
      worksheet_type: params.worksheet_type || 'teacher_assignment',
      access_token: token,
      student_id: studentId,
      student_name: params.student_name,
      student_email: params.student_email,
      classroom_id: params.classroom_id,
      current_question_index: params.current_question_index ?? 0,
      current_question_title: params.current_question_title,
      total_questions: params.total_questions,
      answered_count: params.answered_count,
      status: params.status || 'active',
      live_draft: params.live_draft || {},
      last_active_at: now,
      created_at: now,
    };

    // 1. Simpan dan sinkronkan ke local storage
    try {
      const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
      const allSessions: Record<string, WorksheetLiveSession> = allSessionsRaw ? JSON.parse(allSessionsRaw) : {};

      if (allSessions[sessionKey]) {
        const incomingDraft = params.live_draft;
        const incomingCount = countStudentAnswered(incomingDraft);
        const existingDraft = allSessions[sessionKey].live_draft;
        const existingCount = countStudentAnswered(existingDraft);

        if (incomingCount > 0) {
          session.live_draft = incomingDraft;
        } else if (existingCount > 0) {
          session.live_draft = existingDraft;
        } else {
          session.live_draft = incomingDraft || existingDraft || {};
        }

        session.created_at = allSessions[sessionKey].created_at || now;
      }

      // Jika siswa aktif di worksheet baru, tandai sesi worksheet lain milik siswa yang sama sebagai idle
      if (session.status === 'active') {
        Object.keys(allSessions).forEach((k) => {
          if (k !== sessionKey && !k.startsWith('student_presence_')) {
            const s = allSessions[k];
            if (
              s &&
              (s.student_id === studentId ||
                (params.student_email &&
                  s.student_email?.trim().toLowerCase() === params.student_email.trim().toLowerCase()))
            ) {
              s.status = 'idle';
            }
          }
        });
      }

      allSessions[sessionKey] = session;
      // Simpan index presence per student
      allSessions[`student_presence_${studentId}`] = session;
      if (params.student_email) {
        allSessions[`student_presence_${params.student_email.trim().toLowerCase()}`] = session;
      }

      localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(allSessions));
    } catch (e) {
      console.warn('Gagal menyimpan sesi keberadaan murid:', e);
    }

    // 2. Siarkan via Browser BroadcastChannel (Pengujian lokal multi-tab seketika)
    const globalChannel = this.getGlobalPresenceChannel();
    if (globalChannel) {
      globalChannel.postMessage({
        type: 'STUDENT_PRESENCE_UPDATE',
        payload: session,
      });
    }

    const localChannel = this.getLocalChannel(token);
    if (localChannel) {
      localChannel.postMessage({
        type: 'STUDENT_PRESENCE_UPDATE',
        payload: session,
      });
    }

    // 3. Siarkan via Supabase Realtime jika terhubung
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const room = supabase.channel('room:presence:global');
        room.send({
          type: 'broadcast',
          event: 'student_presence_update',
          payload: session,
        });

        if (params.classroom_id) {
          const classRoom = supabase.channel(`room:classroom:${params.classroom_id}`);
          classRoom.send({
            type: 'broadcast',
            event: 'student_presence_update',
            payload: session,
          });
        }

        // Siarkan juga ke channel spesifik worksheet agar monitor live guru langsung menerima update
        const worksheetRoom = supabase.channel(`room:worksheet:${token}`);
        worksheetRoom.send({
          type: 'broadcast',
          event: 'student_presence_update',
          payload: session,
        });

        supabase
          .from('worksheet_live_sessions')
          .upsert(
            {
              access_token: token,
              student_id: studentId,
              student_name: params.student_name,
              worksheet_id: params.worksheet_id,
              current_question_index: params.current_question_index ?? 0,
              status: session.status,
              live_draft: session.live_draft,
              last_active_at: now,
            },
            { onConflict: 'access_token,student_id' }
          )
          .then(
            () => {},
            () => {}
          );
      } catch (err) {
        // Fallback
      }
    }

    return session;
  }

  /**
   * Mengambil daftar seluruh siswa aktif beserta worksheet yang sedang dibukanya
   * difilter berdasarkan ID Kelas, daftar email anggota kelas, atau daftar student_id anggota kelas.
   */
  public getClassroomActiveStudents(
    classroomId?: number,
    memberEmails?: string[],
    memberStudentIds?: string[]
  ): WorksheetLiveSession[] {
    try {
      const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
      if (!allSessionsRaw) return [];
      const allSessions: Record<string, WorksheetLiveSession> = JSON.parse(allSessionsRaw);

      const normalizedEmails = (memberEmails || []).map((e) => e.trim().toLowerCase());
      const normalizedStudentIds = (memberStudentIds || []).map((id) => String(id));
      const now = Date.now();

      // 1. Kumpulkan seluruh sesi yang relevan dengan kelas / anggota kelas
      const candidateSessions: WorksheetLiveSession[] = [];

      Object.entries(allSessions).forEach(([k, session]) => {
        if (!session || !session.student_id) return;
        // Abaikan entri alias presence agar tidak menduplikasi sesi spesifik
        if (k.startsWith('student_presence_')) return;

        const emailMatch =
          session.student_email &&
          normalizedEmails.includes(session.student_email.trim().toLowerCase());
        const idMatch =
          session.classroom_id &&
          classroomId &&
          Number(session.classroom_id) === Number(classroomId);
        const studentIdMatch =
          normalizedStudentIds.length > 0 &&
          normalizedStudentIds.includes(String(session.student_id));

        // Termasuk jika match classroom_id, email anggota kelas, ID siswa anggota kelas, atau jika tidak dibatasi
        const isTarget =
          (classroomId ? idMatch || emailMatch || studentIdMatch : true) ||
          (normalizedEmails.length === 0 && normalizedStudentIds.length === 0);

        if (isTarget) {
          const lastActiveMs = session.last_active_at ? new Date(session.last_active_at).getTime() : 0;
          const diffMinutes = (now - lastActiveMs) / (1000 * 60);

          let calculatedStatus = session.status;
          if (diffMinutes > 15) {
            calculatedStatus = 'disconnected';
          } else if (diffMinutes > 5 && calculatedStatus === 'active') {
            calculatedStatus = 'idle';
          }

          candidateSessions.push({
            ...session,
            status: calculatedStatus,
          });
        }
      });

      // 2. Deduplikasi Cerdas: 1 siswa fisik (berdasarkan student_id ATAU email) HANYA memiliki 1 sesi terkini
      const studentMap = new Map<string, WorksheetLiveSession>();

      for (const session of candidateSessions) {
        let matchedKey: string | null = null;
        for (const [key, existing] of studentMap.entries()) {
          const sameId = session.student_id && existing.student_id && session.student_id === existing.student_id;
          const sameEmail =
            session.student_email &&
            existing.student_email &&
            session.student_email.trim().toLowerCase() === existing.student_email.trim().toLowerCase();
          if (sameId || sameEmail) {
            matchedKey = key;
            break;
          }
        }

        if (!matchedKey) {
          const newKey =
            session.student_id ||
            (session.student_email && session.student_email.trim().toLowerCase()) ||
            `student-${Math.random()}`;
          studentMap.set(newKey, session);
        } else {
          const existing = studentMap.get(matchedKey)!;
          const existingTime = existing.last_active_at ? new Date(existing.last_active_at).getTime() : 0;
          const newTime = session.last_active_at ? new Date(session.last_active_at).getTime() : 0;
          const timeDiff = Math.abs(newTime - existingTime);

          // Utamakan sesi 'active' jika waktunya berselisih sangat dekat (<= 10 detik, misal saat pindah tab / unmount)
          if (session.status === 'active' && existing.status !== 'active' && timeDiff <= 10000) {
            studentMap.set(matchedKey, session);
          } else if (existing.status === 'active' && session.status !== 'active' && timeDiff <= 10000) {
            // Pertahankan existing yang aktif
          } else if (newTime >= existingTime) {
            studentMap.set(matchedKey, session);
          }
        }
      }

      return Array.from(studentMap.values());
    } catch (e) {
      console.warn('Gagal membaca sesi aktif siswa kelas:', e);
      return [];
    }
  }

  /**
   * Menyinkronkan status sesi siswa kelas dari Supabase Cloud Database secara asinkron
   * dan menyimpannya ke Local Store sehingga monitor guru selalu update meskipun
   * siswa berada di tab, browser, atau perangkat berbeda.
   */
  public async syncClassroomPresenceFromCloud(
    classroomId?: number,
    memberEmails?: string[],
    memberStudentIds?: string[]
  ): Promise<WorksheetLiveSession[]> {
    const supabase = getSupabaseClient();
    const normalizedStudentIds = (memberStudentIds || []).map((id) => String(id));

    if (supabase && normalizedStudentIds.length > 0) {
      try {
        const { data, error } = await supabase
          .from('worksheet_live_sessions')
          .select('*')
          .in('student_id', normalizedStudentIds);

        if (!error && data && data.length > 0) {
          const raw = localStorage.getItem(LOCAL_SESSIONS_KEY);
          const store: Record<string, WorksheetLiveSession> = raw ? JSON.parse(raw) : {};

          data.forEach((cloudItem: any) => {
            const cleanToken = cloudItem.access_token
              ? cloudItem.access_token.trim().toUpperCase()
              : `WS-${cloudItem.worksheet_id}`;
            const sKey = `${cleanToken}_${cloudItem.student_id}`;

            // Selesaikan judul lembar kerja jika belum ada di rekaman cloud
            let resolvedTitle = cloudItem.worksheet_title;
            if (!resolvedTitle) {
              if (cleanToken.startsWith('WS-')) {
                const pNum = parseInt(cleanToken.replace('WS-', ''), 10);
                const pillar = PILLARS_DATA.find((p) => p.pillar_number === pNum || p.id === pNum);
                if (pillar) {
                  resolvedTitle = `Topik ${pillar.pillar_number}: ${pillar.title}`;
                } else {
                  resolvedTitle = `Modul Latihan #${pNum || cloudItem.worksheet_id}`;
                }
              } else if (cleanToken.startsWith('ASSIGN-')) {
                resolvedTitle = `Tugas Lembar Kerja #${cleanToken.replace('ASSIGN-', '')}`;
              } else {
                resolvedTitle = `Lembar Kerja [${cleanToken}]`;
              }
            }

            const lastActiveMs = cloudItem.last_active_at ? new Date(cloudItem.last_active_at).getTime() : 0;
            const diffSec = lastActiveMs ? Math.floor((Date.now() - lastActiveMs) / 1000) : 999999;
            let effectiveStatus: 'active' | 'idle' | 'disconnected' = cloudItem.status || 'active';
            if (diffSec < 120) {
              effectiveStatus = 'active';
            } else if (diffSec > 900) {
              effectiveStatus = 'disconnected';
            }

            const session: WorksheetLiveSession = {
              worksheet_id: cloudItem.worksheet_id,
              worksheet_title: resolvedTitle,
              worksheet_type: cloudItem.worksheet_type || 'static_module',
              access_token: cleanToken,
              student_id: cloudItem.student_id,
              student_name: cloudItem.student_name,
              classroom_id: classroomId,
              current_question_index: cloudItem.current_question_index ?? 0,
              current_question_title: cloudItem.current_question_title,
              total_questions: cloudItem.total_questions,
              answered_count: cloudItem.answered_count,
              status: effectiveStatus,
              live_draft: cloudItem.live_draft || {},
              last_active_at: cloudItem.last_active_at || new Date().toISOString(),
              created_at: cloudItem.created_at || new Date().toISOString(),
            };

            // Simpan ke storage lokal
            store[sKey] = session;
            store[`student_presence_${session.student_id}`] = session;
          });

          localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(store));
        }
      } catch (err) {
        console.warn('Gagal sinkronisasi cloud presence:', err);
      }
    }

    return this.getClassroomActiveStudents(classroomId, memberEmails, memberStudentIds);
  }

  /**
   * Berlangganan (Subscribe) ke pembaruan status pengerjaan siswa di kelas secara real-time
   */
  public subscribeToClassroomPresence(
    classroomId: number | string,
    onUpdate: (sessions: WorksheetLiveSession[]) => void,
    memberEmails?: string[],
    memberStudentIds?: string[]
  ): () => void {
    const numId = Number(classroomId);

    const triggerUpdate = () => {
      const current = this.getClassroomActiveStudents(numId, memberEmails, memberStudentIds);
      onUpdate(current);
    };

    // Helper untuk mengonsumsi payload broadcast presence yang masuk secara lokal
    const ingestIncomingSession = (incoming: WorksheetLiveSession) => {
      if (!incoming || !incoming.student_id) return;
      try {
        const cleanToken = incoming.access_token
          ? incoming.access_token.trim().toUpperCase()
          : `WS-${incoming.worksheet_id}`;
        const sKey = `${cleanToken}_${incoming.student_id}`;
        const raw = localStorage.getItem(LOCAL_SESSIONS_KEY);
        const store: Record<string, WorksheetLiveSession> = raw ? JSON.parse(raw) : {};
        store[sKey] = incoming;
        store[`student_presence_${incoming.student_id}`] = incoming;
        if (incoming.student_email) {
          store[`student_presence_${incoming.student_email.trim().toLowerCase()}`] = incoming;
        }
        localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(store));
      } catch (err) {}
    };

    // Segera inisialisasi dengan data lokal saat ini
    triggerUpdate();

    // Segera sinkronkan dari Supabase Cloud untuk mendeteksi siswa di browser/tab lain
    this.syncClassroomPresenceFromCloud(numId, memberEmails, memberStudentIds)
      .then((cloudSessions) => onUpdate(cloudSessions))
      .catch(() => {});

    // 1. Dengar di BroadcastChannel Global
    const globalChannel = this.getGlobalPresenceChannel();
    const handleBroadcastMessage = (ev: MessageEvent) => {
      const data = ev.data;
      if (!data) return;
      if (data.type === 'STUDENT_PRESENCE_UPDATE') {
        if (data.payload) ingestIncomingSession(data.payload);
        triggerUpdate();
      } else if (data.type === 'STUDENT_TYPING') {
        triggerUpdate();
      }
    };

    if (globalChannel) {
      globalChannel.addEventListener('message', handleBroadcastMessage);
    }

    // 2. Dengar perubahan storage jika terjadi di tab browser lain
    const handleStorageChange = (ev: StorageEvent) => {
      if (ev.key === LOCAL_SESSIONS_KEY) {
        triggerUpdate();
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
    }

    // 3. Polling lembut tiap 4 detik dari Supabase Cloud agar durasi & status pengerjaan selalu akurat
    const timer = setInterval(() => {
      this.syncClassroomPresenceFromCloud(numId, memberEmails, memberStudentIds)
        .then((updated) => onUpdate(updated))
        .catch(() => triggerUpdate());
    }, 4000);

    // 4. Supabase Realtime Channels (Room spesifik kelas & Room global)
    let supabaseRoom: any = null;
    let globalSupabaseRoom: any = null;
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        supabaseRoom = supabase.channel(`room:classroom:${numId}`);
        supabaseRoom
          .on('broadcast', { event: 'student_presence_update' }, (evt: any) => {
            if (evt?.payload) ingestIncomingSession(evt.payload);
            triggerUpdate();
          })
          .on('broadcast', { event: 'student_typing' }, () => {
            triggerUpdate();
          })
          .subscribe();

        globalSupabaseRoom = supabase.channel('room:presence:global');
        globalSupabaseRoom
          .on('broadcast', { event: 'student_presence_update' }, (evt: any) => {
            if (evt?.payload) ingestIncomingSession(evt.payload);
            triggerUpdate();
          })
          .subscribe();
      } catch (err) {
        // Fallback
      }
    }

    return () => {
      if (globalChannel) {
        globalChannel.removeEventListener('message', handleBroadcastMessage);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange);
      }
      clearInterval(timer);
      if (supabase) {
        try {
          if (supabaseRoom) supabase.removeChannel(supabaseRoom);
          if (globalSupabaseRoom) supabase.removeChannel(globalSupabaseRoom);
        } catch {}
      }
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

    // Siarkan juga ke channel presence global agar monitor kelas guru terupdate seketika
    const globalChannel = this.getGlobalPresenceChannel();
    if (globalChannel) {
      globalChannel.postMessage({
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
          student_email: payload.student_email,
          classroom_id: payload.classroom_id,
          worksheet_title: payload.worksheet_title,
          current_question_index: payload.question_index,
          current_question_title: payload.current_question_title,
          status: 'active',
          live_draft: {},
        };
      }
      allSessions[sessionKey].live_draft[payload.question_id] = {
        steps: payload.steps,
        finalAnswer: payload.finalAnswer,
      };
      allSessions[sessionKey].current_question_index = payload.question_index;
      if (payload.worksheet_title) allSessions[sessionKey].worksheet_title = payload.worksheet_title;
      if (payload.classroom_id) allSessions[sessionKey].classroom_id = payload.classroom_id;
      if (payload.student_email) allSessions[sessionKey].student_email = payload.student_email;
      if (payload.current_question_title) allSessions[sessionKey].current_question_title = payload.current_question_title;
      allSessions[sessionKey].status = 'active';
      allSessions[sessionKey].last_active_at = new Date().toISOString();

      allSessions[`student_presence_${payload.student_id}`] = allSessions[sessionKey];
      if (payload.student_email) {
        allSessions[`student_presence_${payload.student_email.trim().toLowerCase()}`] = allSessions[sessionKey];
      }

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

        if (payload.classroom_id) {
          const classRoom = supabase.channel(`room:classroom:${payload.classroom_id}`);
          classRoom.send({
            type: 'broadcast',
            event: 'student_typing',
            payload,
          });
        }
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
   * Guru menyorot teks (Highlight/Stabilo) atau menghapus sorotan di naskah soal atau pengerjaan siswa
   */
  public sendTeacherHighlight(event: LiveHighlightEvent): void {
    const cleanToken = event.access_token.trim().toUpperCase();

    // 1. BroadcastChannel lokal
    const localChannel = this.getLocalChannel(cleanToken);
    if (localChannel) {
      localChannel.postMessage({
        type: 'TEACHER_HIGHLIGHT',
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
          event: 'teacher_highlight',
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
      onTeacherHighlight?: (payload: LiveHighlightEvent) => void;
      onTeacherComment?: (payload: TeacherLiveComment) => void;
      onStudentPresence?: (sessions: WorksheetLiveSession[]) => void;
    }
  ): () => void {
    const cleanToken = token.trim().toUpperCase();

    const triggerPresenceUpdate = async () => {
      if (callbacks.onStudentPresence) {
        const sessions = await this.getActiveSessions(cleanToken);
        callbacks.onStudentPresence(sessions);
      }
    };

    // Segera inisialisasi presence
    triggerPresenceUpdate();

    // 1. Setup Local BroadcastChannel Listener
    const localChannel = this.getLocalChannel(cleanToken);
    const handleLocalMessage = (ev: MessageEvent) => {
      const data = ev.data;
      if (!data) return;

      if (data.type === 'STUDENT_TYPING' && callbacks.onStudentTyping) {
        callbacks.onStudentTyping(data.payload);
      } else if (data.type === 'TEACHER_LASER' && callbacks.onTeacherLaser) {
        callbacks.onTeacherLaser(data.payload);
      } else if (data.type === 'TEACHER_HIGHLIGHT' && callbacks.onTeacherHighlight) {
        callbacks.onTeacherHighlight(data.payload);
      } else if (data.type === 'TEACHER_COMMENT' && callbacks.onTeacherComment) {
        callbacks.onTeacherComment(data.payload);
      } else if (data.type === 'STUDENT_PRESENCE_UPDATE') {
        triggerPresenceUpdate();
      }
    };

    if (localChannel) {
      localChannel.addEventListener('message', handleLocalMessage);
    }
    
    // Juga dengar dari Global Channel untuk presence umum
    const globalChannel = this.getGlobalPresenceChannel();
    const handleGlobalMessage = (ev: MessageEvent) => {
      if (ev.data?.type === 'STUDENT_PRESENCE_UPDATE') {
        triggerPresenceUpdate();
      }
    };
    if (globalChannel) {
      globalChannel.addEventListener('message', handleGlobalMessage);
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
          .on('broadcast', { event: 'teacher_highlight' }, ({ payload }: any) => {
            if (callbacks.onTeacherHighlight) callbacks.onTeacherHighlight(payload);
          })
          .on('broadcast', { event: 'teacher_comment' }, ({ payload }: any) => {
            if (callbacks.onTeacherComment) callbacks.onTeacherComment(payload);
          })
          .on('broadcast', { event: 'student_presence_update' }, ({ payload }: any) => {
            if (payload && payload.student_id) {
              try {
                const sKey = `${cleanToken}_${payload.student_id}`;
                const raw = localStorage.getItem(LOCAL_SESSIONS_KEY);
                const store = raw ? JSON.parse(raw) : {};
                const existing = store[sKey];
                const incomingCount = countStudentAnswered(payload.live_draft);
                const existingCount = countStudentAnswered(existing?.live_draft);
                const chosenDraft = incomingCount >= existingCount ? payload.live_draft : existing?.live_draft;
                store[sKey] = {
                  ...existing,
                  ...payload,
                  live_draft: chosenDraft || payload.live_draft || {},
                };
                localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(store));
              } catch {}
            }
            triggerPresenceUpdate();
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
      if (globalChannel) {
        globalChannel.removeEventListener('message', handleGlobalMessage);
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
    const sessionMap = new Map<string, WorksheetLiveSession>();

    // 1. Baca sesi lokal dari localStorage terlebih dahulu
    try {
      const allSessionsRaw = localStorage.getItem(LOCAL_SESSIONS_KEY);
      if (allSessionsRaw) {
        const allSessions: Record<string, WorksheetLiveSession> = JSON.parse(allSessionsRaw);
        Object.values(allSessions).forEach((s) => {
          if (s && s.access_token && s.access_token.toUpperCase() === cleanToken && s.student_id) {
            sessionMap.set(s.student_id, s);
          }
        });
      }
    } catch (e) {
      console.warn('Gagal membaca sesi lokal:', e);
    }

    // 2. Ambil dari Supabase Cloud dan gabungkan secara cerdas
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('worksheet_live_sessions')
          .select('*')
          .eq('access_token', cleanToken);

        if (!error && data && data.length > 0) {
          data.forEach((d: any) => {
            const existing = sessionMap.get(d.student_id);
            const cloudDraft = d.live_draft || {};
            const localDraft = existing?.live_draft || {};
            const cloudAnswerCount = countStudentAnswered(cloudDraft);
            const localAnswerCount = countStudentAnswered(localDraft);

            // Pilih draft yang memiliki jumlah jawaban lebih banyak atau waktu simpan lebih baru
            let chosenDraft = cloudDraft;
            if (localAnswerCount > cloudAnswerCount) {
              chosenDraft = localDraft;
            } else if (
              localAnswerCount === cloudAnswerCount &&
              (localDraft.savedAt || 0) > (cloudDraft.savedAt || 0)
            ) {
              chosenDraft = localDraft;
            }

            // Tentukan judul topik dari token / draft / existing
            let dynamicTitle =
              d.worksheet_title ||
              (chosenDraft && chosenDraft.worksheetTitle) ||
              existing?.worksheet_title;
            if (!dynamicTitle && cleanToken.startsWith('WS-')) {
              const pNum = parseInt(cleanToken.replace('WS-', ''), 10);
              const pillar = PILLARS_DATA.find((p) => p.pillar_number === pNum || p.id === pNum);
              if (pillar) dynamicTitle = `Topik ${pillar.pillar_number}: ${pillar.title}`;
            }

            sessionMap.set(d.student_id, {
              worksheet_id: d.worksheet_id || existing?.worksheet_id || 0,
              worksheet_title: dynamicTitle || `Lembar Kerja [${cleanToken}]`,
              worksheet_type: d.worksheet_type || existing?.worksheet_type || 'teacher_assignment',
              access_token: cleanToken,
              student_id: d.student_id,
              student_name: d.student_name || existing?.student_name || 'Siswa',
              student_email: d.student_email || existing?.student_email,
              classroom_id: d.classroom_id || existing?.classroom_id,
              current_question_index:
                d.current_question_index ??
                (chosenDraft.currentQIndex ?? existing?.current_question_index ?? 0),
              status: d.status || existing?.status || 'active',
              live_draft: chosenDraft,
              last_active_at: d.last_active_at || existing?.last_active_at || new Date().toISOString(),
              created_at: d.created_at || existing?.created_at || new Date().toISOString(),
            });
          });
        }
      } catch (err) {
        console.warn('Gagal memuat sesi Supabase di getActiveSessions:', err);
      }
    }

    return Array.from(sessionMap.values());
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

/**
 * Mengekstrak langkah pengerjaan dan jawaban akhir siswa dari objek live_draft secara cerdas.
 * Mendukung baik format draft tersimpan online Supabase (.answers) maupun format event broadcast langsung.
 */
export function extractStudentAnswer(
  liveDraft: any,
  questionIndex: number,
  questionId?: number | string
): { steps: string; finalAnswer: string } {
  if (!liveDraft || typeof liveDraft !== 'object') {
    return { steps: '', finalAnswer: '' };
  }

  // 1. Cek dari properti .answers (disimpan dari Worksheet draftData ke Supabase/local cache)
  const answers = liveDraft.answers && typeof liveDraft.answers === 'object' ? liveDraft.answers : null;
  if (answers) {
    if (answers[questionIndex] && (answers[questionIndex].steps || answers[questionIndex].finalAnswer)) {
      return {
        steps: answers[questionIndex].steps || '',
        finalAnswer: answers[questionIndex].finalAnswer || '',
      };
    }
    if (questionId !== undefined && answers[questionId]) {
      return {
        steps: answers[questionId].steps || '',
        finalAnswer: answers[questionId].finalAnswer || '',
      };
    }
    if (questionId !== undefined && answers[String(questionId)]) {
      return {
        steps: answers[String(questionId)].steps || '',
        finalAnswer: answers[String(questionId)].finalAnswer || '',
      };
    }
  }

  // 2. Cek langsung di root liveDraft (dari payload real-time keystroke broadcast)
  if (liveDraft[questionIndex] && (liveDraft[questionIndex].steps || liveDraft[questionIndex].finalAnswer)) {
    return {
      steps: liveDraft[questionIndex].steps || '',
      finalAnswer: liveDraft[questionIndex].finalAnswer || '',
    };
  }
  if (questionId !== undefined && liveDraft[questionId]) {
    return {
      steps: liveDraft[questionId].steps || '',
      finalAnswer: liveDraft[questionId].finalAnswer || '',
    };
  }
  if (questionId !== undefined && liveDraft[String(questionId)]) {
    return {
      steps: liveDraft[String(questionId)].steps || '',
      finalAnswer: liveDraft[String(questionId)].finalAnswer || '',
    };
  }

  return { steps: '', finalAnswer: '' };
}

/**
 * Menghitung jumlah soal yang telah diisi langkah pengerjaan atau jawaban akhirnya.
 */
export function countStudentAnswered(liveDraft: any): number {
  if (!liveDraft || typeof liveDraft !== 'object') return 0;
  const targetMap = liveDraft.answers && typeof liveDraft.answers === 'object' ? liveDraft.answers : liveDraft;
  return Object.values(targetMap).filter((item: any) => {
    return item && typeof item === 'object' && (Boolean(item.steps?.trim()) || Boolean(item.finalAnswer?.trim()));
  }).length;
}
