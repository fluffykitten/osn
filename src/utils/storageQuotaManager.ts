/**
 * storageQuotaManager.ts
 * Utilitas pemantau dan pembersih otomatis kuota localStorage browser.
 * Mencegah QuotaExceededError pada Supabase auth token dan penyimpanan sesi.
 */

export interface StorageUsageReport {
  totalBytes: number;
  totalKb: number;
  totalMb: number;
  itemsCount: number;
  topKeys: { key: string; bytes: number; kb: number }[];
}

/**
 * Menghitung total penggunaan localStorage dalam byte dan daftar kunci terbesar
 */
export function getLocalStorageUsage(): StorageUsageReport {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { totalBytes: 0, totalKb: 0, totalMb: 0, itemsCount: 0, topKeys: [] };
  }

  let totalBytes = 0;
  const items: { key: string; bytes: number; kb: number }[] = [];

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      const value = localStorage.getItem(key) || '';
      // 2 bytes per char (UTF-16 di JavaScript)
      const bytes = (key.length + value.length) * 2;
      totalBytes += bytes;
      items.push({
        key,
        bytes,
        kb: Math.round(bytes / 1024),
      });
    }
  } catch (e) {
    console.warn('[storageQuotaManager] Gagal menghitung penggunaan localStorage:', e);
  }

  items.sort((a, b) => b.bytes - a.bytes);

  return {
    totalBytes,
    totalKb: Math.round(totalBytes / 1024),
    totalMb: Number((totalBytes / (1024 * 1024)).toFixed(2)),
    itemsCount: items.length,
    topKeys: items.slice(0, 10),
  };
}

/**
 * Membersihkan kunci-kunci cache bervolume besar (terutama base64 gambar, live logs, dan dokumen canvas)
 * yang bersifat non-esensial atau dapat diambil ulang dari cloud.
 */
export function cleanBulkyLocalStorage(): number {
  if (typeof window === 'undefined' || !window.localStorage) return 0;

  let freedBytes = 0;

  // Daftar prioritas kunci yang dapat dibersihkan secara aman saat kuota penuh
  const keysToPurge = [
    // 1. Media cache lokal (paling sering menyebabkan kuota 5MB penuh karena data URL base64)
    'osn_uploaded_media_cache_v1',

    // 2. Registry live session & komentar sementara
    'osn_live_sessions_registry_v1',
    'osn_live_worksheets_registry_v1',
    'osn_live_comments_registry_v1',

    // 3. Cache admin pengguna yang dapat diambil ulang dari Supabase
    'osn_admin_users_cache_v1',
    'osn_admin_deleted_users_v1',
  ];

  keysToPurge.forEach((key) => {
    try {
      const val = localStorage.getItem(key);
      if (val) {
        freedBytes += (key.length + val.length) * 2;
        localStorage.removeItem(key);
        console.info(`[storageQuotaManager] Dibersihkan cache besar: ${key} (~${Math.round(freedBytes / 1024)} KB)`);
      }
    } catch {}
  });

  // 4. Bersihkan dokumen whiteboard lokal lama (wb_active_doc_*) dan draf worksheet lama (osn_draft_*)
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      if (key.startsWith('wb_active_doc_') || key.startsWith('osn_draft_')) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => {
      try {
        const val = localStorage.getItem(key);
        if (val) {
          freedBytes += (key.length + val.length) * 2;
        }
        localStorage.removeItem(key);
        console.info(`[storageQuotaManager] Dibersihkan draf canvas/worksheet: ${key}`);
      } catch {}
    });
  } catch (e) {
    console.warn('[storageQuotaManager] Kesalahan saat memindai kunci sementara:', e);
  }

  return freedBytes;
}

/**
 * Adapter penyimpanan tangguh (resilient storage adapter) untuk Supabase Auth Client.
 * Secara otomatis membersihkan cache besar jika terjadi QuotaExceededError dan memiliki
 * fallback aman ke sessionStorage jika kuota localStorage benar-benar terkunci oleh browser.
 */
export const resilientAuthStorage = {
  getItem: (key: string): string | null => {
    try {
      const val = localStorage.getItem(key);
      if (val !== null) return val;
    } catch {}

    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (err: any) {
      // Tangani QuotaExceededError
      console.warn('[storageQuotaManager] localStorage penuh saat menyimpan token auth! Menjalankan pembersihan darurat...', err);
      cleanBulkyLocalStorage();

      try {
        // Coba simpan kembali ke localStorage setelah dibersihkan
        localStorage.setItem(key, value);
        console.info('[storageQuotaManager] Token auth berhasil disimpan ke localStorage setelah pembersihan.');
      } catch (retryErr) {
        // Jika masih gagal (misal dibatasi browser secara ketat), alihkan ke sessionStorage
        console.warn('[storageQuotaManager] localStorage tetap penuh, mengalihkan penyimpanan token auth ke sessionStorage:', retryErr);
        try {
          sessionStorage.setItem(key, value);
        } catch (sessionErr) {
          console.error('[storageQuotaManager] Gagal menyimpan token auth baik di localStorage maupun sessionStorage:', sessionErr);
        }
      }
    }
  },

  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch {}
    try {
      sessionStorage.removeItem(key);
    } catch {}
  },
};

/**
 * Pemeriksaan proaktif saat inisialisasi awal aplikasi.
 * Jika penggunaan localStorage melebihi 2.5 MB, bersihkan data cache yang tidak esensial.
 */
export function ensureStorageQuotaHealth(): void {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    const report = getLocalStorageUsage();
    // Jika ukuran mendekati batas kuota (>= 2.5 MB) atau terdapat media cache base64, bersihkan
    const hasBulkyMedia = Boolean(localStorage.getItem('osn_uploaded_media_cache_v1'));

    if (report.totalBytes > 2.5 * 1024 * 1024 || hasBulkyMedia) {
      console.info(`[storageQuotaManager] Kuota localStorage saat ini: ${report.totalMb} MB (${report.totalKb} KB). Melakukan pembersihan preventif...`);
      cleanBulkyLocalStorage();
      const updated = getLocalStorageUsage();
      console.info(`[storageQuotaManager] Kuota localStorage setelah pembersihan: ${updated.totalMb} MB (${updated.totalKb} KB).`);
    }
  } catch (e) {
    console.warn('[storageQuotaManager] Gagal memeriksa kesehatan kuota storage:', e);
  }
}
