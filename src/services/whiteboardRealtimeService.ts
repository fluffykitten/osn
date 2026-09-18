/**
 * Layanan Kolaborasi Realtime Whiteboard (STEMBoard)
 * Menggunakan Supabase Realtime Broadcast & Presence dengan fallback BroadcastChannel lokal.
 */

import { getSupabaseClient } from '../lib/supabaseClient';
import type {
  WhiteboardRealtimePayload,
  WhiteboardParticipant,
  SessionPermissionMode,
  WhiteboardElement,
  PageDefinition,
  LiveStrokePayload,
  WhiteboardBackground,
} from '../types/whiteboard';

export type RealtimeCallback = (payload: WhiteboardRealtimePayload) => void;
export type PresenceCallback = (participants: WhiteboardParticipant[]) => void;

class WhiteboardRealtimeService {
  private channel: any = null;
  private localBroadcastChannel: BroadcastChannel | null = null;
  private roomCode: string = '';
  private currentUserId: string = '';
  private callbacks: Set<RealtimeCallback> = new Set();
  private presenceCallbacks: Set<PresenceCallback> = new Set();
  private participants: Map<string, WhiteboardParticipant> = new Map();

  // Inisialisasi Koneksi ke Ruangan Kolaborasi
  public joinRoom(
    roomCode: string,
    user: { id: string; name: string; role: 'teacher' | 'student'; color: string }
  ) {
    this.roomCode = roomCode.toUpperCase().trim();
    this.currentUserId = user.id;

    // 1. Inisialisasi BroadcastChannel lokal untuk multi-tab tanpa jeda
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        this.localBroadcastChannel = new BroadcastChannel(`wb_room_${this.roomCode}`);
        this.localBroadcastChannel.onmessage = (event) => {
          if (event.data && event.data.senderId !== this.currentUserId) {
            this.notifyCallbacks(event.data);
          }
        };
      }
    } catch (e) {
      console.warn('BroadcastChannel tidak didukung di peramban ini', e);
    }

    // 2. Inisialisasi Supabase Realtime
    const supabase = getSupabaseClient();
    if (supabase) {
      const channelName = `whiteboard:room:${this.roomCode}`;
      this.channel = supabase.channel(channelName, {
        config: {
          broadcast: { self: false },
          presence: { key: user.id },
        },
      });

      // Dengarkan event broadcast
      this.channel.on(
        'broadcast',
        { event: 'wb_event' },
        ({ payload }: { payload: WhiteboardRealtimePayload }) => {
          this.notifyCallbacks(payload);
        }
      );

      // Dengarkan status presence peserta
      this.channel
        .on('presence', { event: 'sync' }, () => {
          const state = this.channel.presenceState();
          const list: WhiteboardParticipant[] = [];
          for (const key in state) {
            const presences = state[key] as any[];
            if (presences && presences.length > 0) {
              const p = presences[0];
              list.push({
                id: key,
                name: p.name || 'Anonim',
                role: p.role || 'student',
                color: p.color || '#3b82f6',
                cursorX: p.cursorX || 0,
                cursorY: p.cursorY || 0,
                pageIndex: p.pageIndex,
                isLaserActive: Boolean(p.isLaserActive),
                lastActive: Date.now(),
              });
            }
          }
          this.notifyPresence(list);
        })
        .subscribe(async (status: string) => {
          if (status === 'SUBSCRIBED') {
            await this.channel.track({
              id: user.id,
              name: user.name,
              role: user.role,
              color: user.color,
              cursorX: 0,
              cursorY: 0,
              isLaserActive: false,
            });
          }
        });
    }
  }

  // Daftarkan listener pesan
  public subscribe(callback: RealtimeCallback): () => void {
    this.callbacks.add(callback);
    return () => this.callbacks.delete(callback);
  }

  // Daftarkan listener daftar peserta online
  public onPresenceChange(callback: PresenceCallback): () => void {
    this.presenceCallbacks.add(callback);
    return () => this.presenceCallbacks.delete(callback);
  }

  // Kirim Broadcast Event ke Seluruh Peserta
  public broadcast(action: WhiteboardRealtimePayload['action'], data: Partial<WhiteboardRealtimePayload>) {
    if (!this.roomCode) return;

    const payload: WhiteboardRealtimePayload = {
      action,
      roomCode: this.roomCode,
      senderId: this.currentUserId,
      timestamp: Date.now(),
      ...data,
    };

    // Kirim lewat Supabase Realtime
    if (this.channel) {
      this.channel.send({
        type: 'broadcast',
        event: 'wb_event',
        payload,
      });
    }

    // Kirim lewat BroadcastChannel lokal
    if (this.localBroadcastChannel) {
      try {
        this.localBroadcastChannel.postMessage(payload);
      } catch (err) {
        console.warn('Gagal postMessage BroadcastChannel:', err);
      }
    }
  }

  // Helper cepat penyiaran elemen
  public broadcastElementAdded(element: WhiteboardElement) {
    this.broadcast('element_added', { element });
  }

  public broadcastElementUpdated(element: WhiteboardElement) {
    this.broadcast('element_updated', { element });
  }

  public broadcastElementDeleted(elementId: string) {
    this.broadcast('element_deleted', { elementId });
  }

  public broadcastElementsCleared() {
    this.broadcast('elements_cleared', {});
  }

  public broadcastPageAdded(page: PageDefinition) {
    this.broadcast('page_added', { page });
  }

  public broadcastPointer(x: number, y: number, isLaserActive: boolean, user: { name: string; role: 'teacher' | 'student'; color: string }, pageIndex?: number) {
    this.broadcast('pointer_moved', {
      pointer: {
        x,
        y,
        pageIndex,
        isLaserActive,
        name: user.name,
        role: user.role,
        color: user.color,
      },
    });
  }

  public broadcastLiveStroke(liveStroke: LiveStrokePayload) {
    this.broadcast('stroke_drawing', { liveStroke });
  }

  public broadcastFinishStroke(strokeId: string) {
    this.broadcast('stroke_finished', { strokeId });
  }

  public broadcastSessionSettings(sessionMode: SessionPermissionMode) {
    this.broadcast('session_settings_changed', { sessionMode });
  }

  public broadcastBackground(backgroundType: WhiteboardBackground) {
    this.broadcast('background_changed', { backgroundType });
  }

  // Keluar dari Ruangan
  public leaveRoom() {
    if (this.channel) {
      this.channel.unsubscribe();
      this.channel = null;
    }
    if (this.localBroadcastChannel) {
      this.localBroadcastChannel.close();
      this.localBroadcastChannel = null;
    }
    this.callbacks.clear();
    this.presenceCallbacks.clear();
    this.participants.clear();
    this.roomCode = '';
  }

  private notifyCallbacks(payload: WhiteboardRealtimePayload) {
    this.callbacks.forEach((cb) => cb(payload));
  }

  private notifyPresence(list: WhiteboardParticipant[]) {
    this.presenceCallbacks.forEach((cb) => cb(list));
  }
}

export const whiteboardRealtimeService = new WhiteboardRealtimeService();
