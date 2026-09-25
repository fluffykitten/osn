/**
 * studentReadingService.ts
 * Layanan pelacakan sesi membaca materi siswa (OSN 10 Topik & SMA 16 Modul).
 * Mengintegrasikan riwayat scroll, status tuntas baca, dan sinkronisasi
 * ke dashboard belajar siswa (Unified Study Loop).
 */

import { OSN_MATERIALS, type MaterialItem } from '../data/materialsData';
import { SMA_MATERIALS, type SmaMaterialItem } from '../data/smaMaterialsData';

export interface ActiveReadingSession {
  database: 'osn' | 'sma';
  materialId: number;
  slug: string;
  title: string;
  category: string;
  progressPercent: number;
  scrollY: number;
  lastReadAt: number;
  userId?: string;
  readTimeMinutes?: number;
  topicNumber?: number;
}

export interface ReadingProgressSummary {
  osnCompletedCount: number;
  osnTotalCount: number;
  smaCompletedCount: number;
  smaTotalCount: number;
  overallPercent: number;
  latestSession: ActiveReadingSession | null;
}

const LOCAL_ACTIVE_READING_KEY = 'osn_active_reading_session';
const OSN_SCROLL_KEY = 'osn_material_scroll_positions';
const SMA_SCROLL_KEY = 'sma_material_scroll_positions';
const OSN_COMPLETED_KEY = 'osn_completed_materials';
const SMA_COMPLETED_KEY = 'sma_completed_materials';

class StudentReadingService {
  /**
   * Menyimpan sesi membaca materi aktif siswa
   */
  public saveActiveReadingSession(session: ActiveReadingSession): void {
    try {
      if (typeof window === 'undefined') return;
      const key = session.userId
        ? `${LOCAL_ACTIVE_READING_KEY}_${session.userId}`
        : LOCAL_ACTIVE_READING_KEY;
      localStorage.setItem(key, JSON.stringify(session));
      // Simpan juga versi global sebagai fallback
      localStorage.setItem(LOCAL_ACTIVE_READING_KEY, JSON.stringify(session));
      window.dispatchEvent(new CustomEvent('osn_active_reading_changed', { detail: session }));
    } catch (err) {
      console.warn('Gagal menyimpan sesi aktif membaca materi:', err);
    }
  }

  /**
   * Mengambil sesi membaca aktif siswa.
   * Dilengkapi fallback cerdas membaca timestamp scroll terbaru jika belum tersimpan.
   */
  public getActiveReadingSession(userId?: string): ActiveReadingSession | null {
    try {
      if (typeof window === 'undefined') return null;

      // 1. Coba baca dari key tersimpan spesifik user
      const userKey = userId ? `${LOCAL_ACTIVE_READING_KEY}_${userId}` : LOCAL_ACTIVE_READING_KEY;
      let raw = localStorage.getItem(userKey);
      if (!raw && userId) {
        raw = localStorage.getItem(LOCAL_ACTIVE_READING_KEY);
      }

      if (raw) {
        const parsed: ActiveReadingSession = JSON.parse(raw);
        if (parsed && parsed.title && parsed.slug) {
          // Validasi usia sesi (maksimal aktif 14 hari)
          const maxAge = 14 * 24 * 60 * 60 * 1000;
          if (Date.now() - (parsed.lastReadAt || 0) < maxAge) {
            return parsed;
          }
        }
      }

      // 2. Fallback cerdas: cari materi dengan `updatedAt` terbaru dari scroll positions
      return this.discoverLatestReadingSession(userId);
    } catch (err) {
      console.warn('Gagal membaca sesi aktif membaca:', err);
      return null;
    }
  }

  /**
   * Menemukan sesi membaca terakhir dari data scroll positions di localStorage
   */
  private discoverLatestReadingSession(userId?: string): ActiveReadingSession | null {
    try {
      let latestOsn: { id: number; scrollY: number; progressPercent: number; updatedAt: number } | null = null;
      let latestSma: { id: number; scrollY: number; progressPercent: number; updatedAt: number } | null = null;

      const rawOsn = localStorage.getItem(OSN_SCROLL_KEY);
      if (rawOsn) {
        const parsedOsn = JSON.parse(rawOsn);
        for (const [idStr, val] of Object.entries(parsedOsn) as [string, any][]) {
          if (val && typeof val.updatedAt === 'number') {
            if (!latestOsn || val.updatedAt > latestOsn.updatedAt) {
              latestOsn = { id: parseInt(idStr, 10), ...val };
            }
          }
        }
      }

      const rawSma = localStorage.getItem(SMA_SCROLL_KEY);
      if (rawSma) {
        const parsedSma = JSON.parse(rawSma);
        for (const [idStr, val] of Object.entries(parsedSma) as [string, any][]) {
          if (val && typeof val.updatedAt === 'number') {
            if (!latestSma || val.updatedAt > latestSma.updatedAt) {
              latestSma = { id: parseInt(idStr, 10), ...val };
            }
          }
        }
      }

      if (!latestOsn && !latestSma) {
        // Belum ada riwayat baca sama sekali -> kembalikan Topik 1 OSN sebagai rekomendasi awal
        const firstOsn = OSN_MATERIALS[0];
        return {
          database: 'osn',
          materialId: firstOsn.id,
          slug: firstOsn.slug,
          title: firstOsn.title,
          category: firstOsn.category,
          progressPercent: 0,
          scrollY: 0,
          lastReadAt: Date.now(),
          readTimeMinutes: firstOsn.readTimeMinutes,
          topicNumber: firstOsn.topic_number,
          userId,
        };
      }

      const osnTime = latestOsn ? latestOsn.updatedAt : 0;
      const smaTime = latestSma ? latestSma.updatedAt : 0;

      if (osnTime >= smaTime && latestOsn) {
        const item = latestOsn;
        const mat = OSN_MATERIALS.find((m) => m.id === item.id || m.topic_number === item.id) || OSN_MATERIALS[0];
        return {
          database: 'osn',
          materialId: mat.id,
          slug: mat.slug,
          title: mat.title,
          category: mat.category,
          progressPercent: item.progressPercent || 0,
          scrollY: item.scrollY || 0,
          lastReadAt: item.updatedAt,
          readTimeMinutes: mat.readTimeMinutes,
          topicNumber: mat.topic_number,
          userId,
        };
      }

      if (latestSma) {
        const item = latestSma;
        const mat = SMA_MATERIALS.find((m) => m.id === item.id || m.topic_number === item.id) || SMA_MATERIALS[0];
        return {
          database: 'sma',
          materialId: mat.id,
          slug: mat.slug,
          title: mat.title,
          category: mat.category,
          progressPercent: item.progressPercent || 0,
          scrollY: item.scrollY || 0,
          lastReadAt: item.updatedAt,
          readTimeMinutes: mat.readTimeMinutes,
          topicNumber: mat.topic_number,
          userId,
        };
      }

      return null;
    } catch {
      return null;
    }
  }

  /**
   * Mengambil statistik ringkas literasi dan progres materi siswa
   */
  public getReadingProgressSummary(userId?: string): ReadingProgressSummary {
    try {
      let osnCompleted: number[] = [];
      let smaCompleted: number[] = [];

      const rawOsn = localStorage.getItem(OSN_COMPLETED_KEY);
      if (rawOsn) osnCompleted = JSON.parse(rawOsn);

      const rawSma = localStorage.getItem(SMA_COMPLETED_KEY);
      if (rawSma) smaCompleted = JSON.parse(rawSma);

      const osnCompletedCount = Array.isArray(osnCompleted) ? osnCompleted.length : 0;
      const smaCompletedCount = Array.isArray(smaCompleted) ? smaCompleted.length : 0;
      const osnTotalCount = OSN_MATERIALS.length;
      const smaTotalCount = SMA_MATERIALS.length;

      const totalCompleted = osnCompletedCount + smaCompletedCount;
      const totalAll = osnTotalCount + smaTotalCount;
      const overallPercent = totalAll > 0 ? Math.round((totalCompleted / totalAll) * 100) : 0;

      const latestSession = this.getActiveReadingSession(userId);

      return {
        osnCompletedCount,
        osnTotalCount,
        smaCompletedCount,
        smaTotalCount,
        overallPercent,
        latestSession,
      };
    } catch {
      return {
        osnCompletedCount: 0,
        osnTotalCount: OSN_MATERIALS.length,
        smaCompletedCount: 0,
        smaTotalCount: SMA_MATERIALS.length,
        overallPercent: 0,
        latestSession: null,
      };
    }
  }
}

export const studentReadingService = new StudentReadingService();
