/**
 * supabaseClient.ts
 * Klien Supabase terintegrasi dengan penanganan kegagalan jaringan (offline resilience)
 * Mengambil konfigurasi dari .env.local (VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY)
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

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
      clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
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
