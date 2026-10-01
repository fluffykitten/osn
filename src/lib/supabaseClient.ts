/**
 * supabaseClient.ts
 * Klien Supabase terintegrasi dengan penanganan kegagalan jaringan (offline resilience)
 * Mengambil konfigurasi dari .env.local (VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY)
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { resilientAuthStorage, ensureStorageQuotaHealth } from '../utils/storageQuotaManager';

// Kredensial cadangan bawaan project Supabase aktif
const DEFAULT_SUPABASE_URL = 'https://gedmqzdolkmhoehbgxxk.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZG1xemRvbGttaG9laGJneHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzOTIzMjYsImV4cCI6MjEwNDk2ODMyNn0.InPThoocvZaWNdxFTi3O80L3Fm5wBe0wvHRjqGCq37Q';

const supabaseUrl: string =
  (import.meta.env.VITE_SUPABASE_URL as string) || DEFAULT_SUPABASE_URL;
const supabaseAnonKey: string =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes('your-project-id') &&
    !supabaseAnonKey.includes('your-anon-key')
  );
};

let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!clientInstance) {
    try {
      // Jalankan pemeriksaan kuota penyimpanan sebelum membuat klien
      ensureStorageQuotaHealth();

      clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          storage: resilientAuthStorage,
        },
      });
    } catch (err) {
      console.warn('Gagal menginisialisasi klien Supabase:', err);
      return null;
    }
  }

  return clientInstance;
};

// ID Peserta Default untuk sesi pengerjaan lokal yang terhubung ke cloud
export const DEFAULT_STUDENT_ID = 'osn-student-pelatnas-001';
export const DEFAULT_STUDENT_NAME = 'Ahmad Fauzan (Calon Medalis OSN)';
