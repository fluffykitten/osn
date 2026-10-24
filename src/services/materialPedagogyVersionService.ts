/**
 * materialPedagogyVersionService.ts
 * Layanan manajemen pemilihan versi pedagogi modul OSN Kimia:
 * 1. 'classic' : Versi Tradisional 3-Tahap (Prasyarat, Konsep Inti, Contoh Soal)
 * 2. 'revamped': Versi Revamp Pedagogis 4-Pilar (Intuisi & Formalisasi, Taktik Soal, Pengayaan Inkuiri, Ringkasan Cepat)
 * 
 * Pengaturan ini dapat dikonfigurasi melalui Admin Materials Management
 * dan disinkronkan secara reaktif ke seluruh tampilan siswa dan guru.
 */

import { useState, useEffect } from 'react';

export type OsnPedagogyVersion = 'classic' | 'revamped';

const STORAGE_KEY = 'osn_pedagogy_version_preference';
const EVENT_NAME = 'osn_pedagogy_version_changed';

export const materialPedagogyVersionService = {
  getStoredVersion(): OsnPedagogyVersion {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'classic' || stored === 'revamped') {
        return stored;
      }
    } catch {
      // ignore
    }
    // Default aktif: 'revamped' agar user langsung dapat membandingkan versi baru
    return 'revamped';
  },

  setStoredVersion(version: OsnPedagogyVersion): void {
    try {
      localStorage.setItem(STORAGE_KEY, version);
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { version } }));
    } catch (e) {
      console.warn('Gagal menyimpan preferensi versi pedagogi:', e);
    }
  },

  toggleVersion(): OsnPedagogyVersion {
    const current = this.getStoredVersion();
    const next: OsnPedagogyVersion = current === 'revamped' ? 'classic' : 'revamped';
    this.setStoredVersion(next);
    return next;
  },
};

/**
 * React Hook untuk menggunakan dan memantau perubahan versi pedagogi secara reaktif
 */
export function useOsnPedagogyVersion() {
  const [version, setVersionState] = useState<OsnPedagogyVersion>(() =>
    materialPedagogyVersionService.getStoredVersion()
  );

  useEffect(() => {
    const handleVersionChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ version: OsnPedagogyVersion }>;
      if (customEvent.detail?.version) {
        setVersionState(customEvent.detail.version);
      } else {
        setVersionState(materialPedagogyVersionService.getStoredVersion());
      }
    };

    window.addEventListener(EVENT_NAME, handleVersionChange);
    window.addEventListener('storage', handleVersionChange);

    return () => {
      window.removeEventListener(EVENT_NAME, handleVersionChange);
      window.removeEventListener('storage', handleVersionChange);
    };
  }, []);

  const setVersion = (next: OsnPedagogyVersion) => {
    materialPedagogyVersionService.setStoredVersion(next);
    setVersionState(next);
  };

  return {
    version,
    isRevamped: version === 'revamped',
    isClassic: version === 'classic',
    setVersion,
  };
}
