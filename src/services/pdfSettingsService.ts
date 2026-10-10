/**
 * pdfSettingsService.ts
 * Layanan Pengaturan Kustomisasi PDF Naskah Materi
 * Memungkinkan Administrator mengonfigurasi Brand, Logo, Copyright Footer, dan Alignment PDF.
 */

import { useState, useEffect } from 'react';

export interface PdfFontDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  fontFamilyCss: string;
  googleFontUrl?: string;
  isLocalFont?: boolean;
}

export const AVAILABLE_PDF_FONTS: PdfFontDefinition[] = [
  {
    id: 'inter',
    name: 'Inter (Bawaan)',
    category: 'Sans-Serif Modern',
    description: 'Font sans-serif modern, geometris, sangat jernih dan proporsional untuk naskah digital.',
    fontFamilyCss: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
  },
  {
    id: 'bookerly',
    name: 'Bookerly',
    category: 'Serif E-Reader (Amazon Kindle)',
    description: 'Font buku legendaris Amazon Kindle. Dibuat khusus untuk kenyamanan membaca teks panjang & butir soal ujian.',
    fontFamilyCss: "'Bookerly', 'Literata', Georgia, serif",
    isLocalFont: true,
  },
  {
    id: 'libron',
    name: 'Libron',
    category: 'Serif Editorial Modern',
    description: 'Tipografi editorial elegan untuk dokumen cetak berkualitas tinggi dan publikasi buku sains (Nico Verbruggen).',
    fontFamilyCss: "'Libron', 'Merriweather', 'Bookerly', Georgia, serif",
    isLocalFont: true,
  },
  {
    id: 'literata',
    name: 'Literata',
    category: 'Serif Buku Digital (Google Books)',
    description: 'Dirancang oleh TypeTogether untuk Google Play Books, sangat nyaman dibaca pada teks ujian dan soal kimia berkolom.',
    fontFamilyCss: "'Literata', Georgia, serif",
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400..800;1,7..72,400..800&display=swap',
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    category: 'Serif Klasik Keterbacaan Tinggi',
    description: 'Font serif berstruktur kokoh dengan x-height lebar yang nyaman dibaca pada ukuran kecil di atas kertas cetak.',
    fontFamilyCss: "'Merriweather', Georgia, serif",
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap',
  },
  {
    id: 'lora',
    name: 'Lora',
    category: 'Serif Kaligrafi Halus',
    description: 'Font serif beraksen kaligrafis lembut, memberi sentuhan akademis premium seperti jurnal sains internasional.',
    fontFamilyCss: "'Lora', Georgia, serif",
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
  },
  {
    id: 'roboto',
    name: 'Roboto',
    category: 'Sans-Serif Netral (Google)',
    description: 'Font sans-serif Google yang netral, ramah, dan sangat mudah dipindai dengan cepat oleh siswa saat ujian.',
    fontFamilyCss: "'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
  },
  {
    id: 'opensans',
    name: 'Open Sans',
    category: 'Sans-Serif Humanis Jernih',
    description: 'Font humanis dengan keterbukaan bentuk huruf yang sangat ramah mata untuk naskah cetak lembar soal tebal.',
    fontFamilyCss: "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap',
  },
  {
    id: 'georgia',
    name: 'Georgia / Charter',
    category: 'Serif Standar Sistem',
    description: 'Font serif baku sistem operasi yang stabil, formal, dan tidak memerlukan koneksi internet untuk memuat font.',
    fontFamilyCss: "Georgia, Charter, 'Times New Roman', serif",
  },
];

export interface MaterialPdfSettings {
  brandName: string;
  brandLogoIcon: string;
  copyrightNotice: string;
  websiteUrl: string;
  textAlignment: 'justify' | 'left';
  fontFamily: string;
}

export const DEFAULT_PDF_SETTINGS: MaterialPdfSettings = {
  brandName: 'OSN Kimia Mastery',
  brandLogoIcon: '⚡',
  copyrightNotice: '© 2026 OSN Kimia Mastery. Belajar mandiri & raih medali di osnkimia.com',
  websiteUrl: 'osnkimia.com',
  textAlignment: 'justify',
  fontFamily: 'inter',
};

/**
 * Menghasilkan deklarasi CSS @font-face dan Google Font <link> sesuai font yang dipilih
 */
export function getPdfFontConfig(fontId: string, origin = '') {
  const selected = AVAILABLE_PDF_FONTS.find((f) => f.id === fontId) || AVAILABLE_PDF_FONTS[0];
  let linkTags = '';
  let fontFaceCss = '';

  if (selected.googleFontUrl) {
    linkTags = `<link href="${selected.googleFontUrl}" rel="stylesheet">`;
  }

  // Jika font lokal (Libron atau Bookerly), sematkan @font-face lengkap
  if (selected.id === 'libron') {
    const base = origin ? origin : '';
    fontFaceCss = `
      @font-face {
        font-family: 'Libron';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${base}/fonts/libron/Libron-Regular.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Libron';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('${base}/fonts/libron/Libron-Italic.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Libron';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${base}/fonts/libron/Libron-Bold.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Libron';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('${base}/fonts/libron/Libron-BoldItalic.woff2') format('woff2');
      }
    `;
  } else if (selected.id === 'bookerly') {
    const base = origin ? origin : '';
    fontFaceCss = `
      @font-face {
        font-family: 'Bookerly';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${base}/fonts/bookerly/Bookerly-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Bookerly';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('${base}/fonts/bookerly/Bookerly-RegularItalic.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Bookerly';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${base}/fonts/bookerly/Bookerly-Bold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Bookerly';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('${base}/fonts/bookerly/Bookerly-BoldItalic.ttf') format('truetype');
      }
    `;
  }

  return {
    selected,
    fontFamilyCss: selected.fontFamilyCss,
    linkTags,
    fontFaceCss,
  };
}

const STORAGE_KEY = 'osn_admin_pdf_settings';
const EVENT_NAME = 'osn_pdf_settings_changed';

export const pdfSettingsService = {
  /**
   * Mengambil pengaturan PDF saat ini dari local storage
   */
  getSettings(): MaterialPdfSettings {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          return { ...DEFAULT_PDF_SETTINGS, ...JSON.parse(stored) };
        }
      }
    } catch (e) {
      console.warn('Gagal memuat pengaturan PDF dari local storage:', e);
    }
    return DEFAULT_PDF_SETTINGS;
  },

  /**
   * Menyimpan pembaruan pengaturan PDF
   */
  saveSettings(updates: Partial<MaterialPdfSettings>): MaterialPdfSettings {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: updated }));
      return updated;
    } catch (e) {
      console.error('Gagal menyimpan pengaturan PDF:', e);
      return this.getSettings();
    }
  },

  /**
   * Reset ke pengaturan bawaan
   */
  resetToDefaults(): MaterialPdfSettings {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PDF_SETTINGS));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: DEFAULT_PDF_SETTINGS }));
    } catch (e) {
      console.error('Gagal mereset pengaturan PDF:', e);
    }
    return DEFAULT_PDF_SETTINGS;
  },
};

/**
 * React Hook untuk mengakses & mendengarkan perubahan pengaturan PDF
 */
export function usePdfSettings() {
  const [settings, setSettings] = useState<MaterialPdfSettings>(() => pdfSettingsService.getSettings());

  useEffect(() => {
    const handleUpdate = () => {
      setSettings(pdfSettingsService.getSettings());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const updateSettings = (updates: Partial<MaterialPdfSettings>) => {
    const next = pdfSettingsService.saveSettings(updates);
    setSettings(next);
  };

  const resetSettings = () => {
    const next = pdfSettingsService.resetToDefaults();
    setSettings(next);
  };

  return {
    settings,
    updateSettings,
    resetSettings,
  };
}
