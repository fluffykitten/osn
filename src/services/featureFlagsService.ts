/**
 * featureFlagsService.ts
 * Layanan terpusat untuk Manajemen Fitur (Feature Flags) di seluruh aplikasi OSN Kimia.
 * Memungkinkan Administrator mengaktifkan / menonaktifkan modul tertentu (seperti Tutor AI, Flashcard, dll).
 */

import { useState, useEffect } from 'react';

export interface FeatureFlags {
  // Fitur Halaman Materi Siswa
  materialAiTutor: boolean;         // Default: false (dinonaktifkan sementara)
  materialQuizCheckpoint: boolean;  // Default: true
  materialNotes: boolean;           // Default: true
  materialFlashcards: boolean;      // Default: true

  // Fitur Guru & Kolaborasi
  aiQuestionStudio: boolean;        // Default: true
  whiteboardCollaboration: boolean; // Default: true
  worksheetRealtime: boolean;       // Default: true

  // Fitur Developer & Pengujian Tampilan
  devDeviceSimulator: boolean;      // Default: true (Bisa diaktifkan/dinonaktifkan oleh Admin)
}

export interface FeatureMetadata {
  key: keyof FeatureFlags;
  name: string;
  category: 'materi' | 'teacher' | 'system';
  description: string;
  impactArea: string;
  badge?: string;
  defaultValue: boolean;
}

export const FEATURE_CATALOG: FeatureMetadata[] = [
  {
    key: 'materialAiTutor',
    name: 'Tanya AI Tutor Kimia (Halaman Materi)',
    category: 'materi',
    description: 'Menampilkan tombol asisten AI Tutor di bilah pembaca materi dan di setiap sub-blok konsep untuk tanya jawab interaktif dengan KaTeX & guardrail keselamatan.',
    impactArea: 'Portal Siswa (Halaman Materi /materi)',
    badge: 'AI Assistant',
    defaultValue: false, // Default NONAKTIF sesuai instruksi user
  },
  {
    key: 'materialQuizCheckpoint',
    name: 'Kuis Checkpoint Cepat (Mini Quiz & Gamifikasi XP)',
    category: 'materi',
    description: 'Kuis 1 soal pilihan ganda di setiap akhir blok konsep materi lengkap dengan feedback instan, pembahasan KaTeX, dan reward +25 XP.',
    impactArea: 'Portal Siswa (Halaman Materi /materi)',
    badge: 'Gamifikasi',
    defaultValue: true,
  },
  {
    key: 'materialNotes',
    name: 'Catatan Belajar & Sticky Notes Pribadi',
    category: 'materi',
    description: 'Slide-over drawer bagi siswa untuk membuat catatan belajar berwarna yang terikat ke materi/konsep dengan opsi ekspor ke format Markdown (.md).',
    impactArea: 'Portal Siswa (Halaman Materi /materi)',
    badge: 'Produktivitas',
    defaultValue: true,
  },
  {
    key: 'materialFlashcards',
    name: 'Mode Flashcard Kilat 3D & Ulasan Rumus',
    category: 'materi',
    description: 'Dek kartu kilat ulasan cepat beranimasi 3D flip card untuk menguji penguasaan konsep inti dan rumus sebelum ujian.',
    impactArea: 'Portal Siswa (Halaman Materi /materi)',
    badge: 'Drill Soal',
    defaultValue: true,
  },
  {
    key: 'aiQuestionStudio',
    name: 'AI Question Studio untuk Guru',
    category: 'teacher',
    description: 'Studio pembuatan bank soal otomatis berstandar Puspresnas/IChO menggunakan AI bagi guru pembimbing.',
    impactArea: 'Portal Guru (/teacher/ai-studio)',
    badge: 'AI Generator',
    defaultValue: true,
  },
  {
    key: 'whiteboardCollaboration',
    name: 'STEM Interactive Whiteboard (Papan Tulis Kolaboratif)',
    category: 'teacher',
    description: 'Ruang gambar interaktif berbasis vektor untuk visualisasi rumus kimia dan diskusi guru-siswa.',
    impactArea: 'Portal Guru & Siswa (/whiteboard)',
    badge: 'Canvas',
    defaultValue: true,
  },
  {
    key: 'worksheetRealtime',
    name: 'Sinkronisasi Live Worksheet & Monitoring Kelas',
    category: 'teacher',
    description: 'Fitur pemantauan lembar kerja secara langsung (real-time) oleh guru saat siswa sedang mengerjakan soal.',
    impactArea: 'Portal Guru (/teacher/live)',
    badge: 'Realtime',
    defaultValue: true,
  },
  {
    key: 'devDeviceSimulator',
    name: 'Simulator Tampilan Multi-Perangkat (Mobile / Tablet / PC View)',
    category: 'system',
    description: 'Bilah simulasi viewport responsif untuk menguji tata letak antarmuka aplikasi dalam mode Ponsel (Mobile), Tablet, Laptop, dan PC Desktop dengan opsi rotasi layar dan skala fleksibel.',
    impactArea: 'Seluruh Aplikasi (Floating Dev Bar Khusus Administrator & Development)',
    badge: 'DevTools',
    defaultValue: true,
  },
];

const STORAGE_KEY = 'osn_feature_flags_config_v1';
const EVENT_NAME = 'osn_feature_flags_updated';

export const DEFAULT_FEATURE_FLAGS: FeatureFlags = {
  materialAiTutor: false, // Default NONAKTIF
  materialQuizCheckpoint: true,
  materialNotes: true,
  materialFlashcards: true,
  aiQuestionStudio: true,
  whiteboardCollaboration: true,
  worksheetRealtime: true,
  devDeviceSimulator: true,
};

export const featureFlagsService = {
  /**
   * Mengambil status seluruh feature flag dari localStorage atau fallback default
   */
  getAll(): FeatureFlags {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_FEATURE_FLAGS };
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_FEATURE_FLAGS,
        ...parsed,
      };
    } catch (err) {
      console.error('Failed to load feature flags:', err);
      return { ...DEFAULT_FEATURE_FLAGS };
    }
  },

  /**
   * Mengambil status satu flag spesifik
   */
  isEnabled(key: keyof FeatureFlags): boolean {
    const flags = this.getAll();
    return Boolean(flags[key]);
  },

  /**
   * Mengubah status satu flag spesifik
   */
  setFlag(key: keyof FeatureFlags, value: boolean) {
    const current = this.getAll();
    const updated = {
      ...current,
      [key]: value,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: updated }));
    } catch (err) {
      console.error('Failed to save feature flags:', err);
    }
  },

  /**
   * Menyimpan sekaligus seluruh set feature flags
   */
  setAll(newFlags: Partial<FeatureFlags>) {
    const current = this.getAll();
    const updated = {
      ...current,
      ...newFlags,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: updated }));
    } catch (err) {
      console.error('Failed to save feature flags:', err);
    }
  },

  /**
   * Mengembalikan semua feature flag ke pengaturan standar awal
   */
  resetToDefaults() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_FEATURE_FLAGS));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: DEFAULT_FEATURE_FLAGS }));
    } catch (err) {
      console.error('Failed to reset feature flags:', err);
    }
  },
};

/**
 * React Hook untuk mendengarkan perubahan status Feature Flags secara real-time
 */
export function useFeatureFlags(): {
  flags: FeatureFlags;
  isEnabled: (key: keyof FeatureFlags) => boolean;
  toggleFlag: (key: keyof FeatureFlags) => void;
  setFlag: (key: keyof FeatureFlags, val: boolean) => void;
  resetDefaults: () => void;
} {
  const [flags, setFlags] = useState<FeatureFlags>(() => featureFlagsService.getAll());

  useEffect(() => {
    const handleUpdate = () => {
      setFlags(featureFlagsService.getAll());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const toggleFlag = (key: keyof FeatureFlags) => {
    const nextVal = !flags[key];
    featureFlagsService.setFlag(key, nextVal);
  };

  const setFlag = (key: keyof FeatureFlags, val: boolean) => {
    featureFlagsService.setFlag(key, val);
  };

  const resetDefaults = () => {
    featureFlagsService.resetToDefaults();
  };

  return {
    flags,
    isEnabled: (key: keyof FeatureFlags) => Boolean(flags[key]),
    toggleFlag,
    setFlag,
    resetDefaults,
  };
}
