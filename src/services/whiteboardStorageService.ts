/**
 * Layanan Penyimpanan & Manajemen Dokumen Whiteboard (STEMBoard)
 * Mendukung IndexedDB (Offline & Auto-save), Cloudflare R2 Upload, dan Template Presets.
 */

import type { WhiteboardDocument, WhiteboardTemplatePreset } from '../types/whiteboard';
import { storageService } from './storageService';

const DB_NAME = 'osn_stemboard_db';
const DB_VERSION = 1;
const STORE_NAME = 'whiteboards';

// Inisialisasi IndexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Simpan atau Perbarui Dokumen Whiteboard di IndexedDB
export async function saveDocumentLocally(doc: WhiteboardDocument): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put({
      ...doc,
      updatedAt: new Date().toISOString(),
    });

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Ambil Satu Dokumen Berdasarkan ID dari IndexedDB
export async function getDocumentById(id: string): Promise<WhiteboardDocument | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

// Ambil Semua Dokumen Tersimpan di IndexedDB
export async function getAllSavedDocuments(): Promise<WhiteboardDocument[]> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const docs = (request.result as WhiteboardDocument[]) || [];
        // Urutkan dari yang paling baru diupdate
        docs.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        resolve(docs);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Gagal membaca IndexedDB:', err);
    return [];
  }
}

// Hapus Dokumen dari IndexedDB
export async function deleteDocumentLocally(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Simpan Snapshot / Dokumen ke Cloudflare R2
export async function uploadWhiteboardToR2(
  doc: WhiteboardDocument,
  previewBlob?: Blob
): Promise<{ jsonUrl?: string; previewUrl?: string; success: boolean }> {
  try {
    let previewUrl: string | undefined;

    // 1. Upload preview image jika ada
    if (previewBlob) {
      const previewFile = new File([previewBlob], `whiteboard-${doc.id}-preview.jpg`, {
        type: 'image/jpeg',
      });
      const res = await storageService.uploadFile(previewFile, { category: 'materials' });
      if (res.url) {
        previewUrl = res.url;
      }
    }

    // 2. Upload dokumen JSON ke R2
    const docWithPreview = {
      ...doc,
      thumbnailUrl: previewUrl || doc.thumbnailUrl,
      updatedAt: new Date().toISOString(),
    };

    const jsonBlob = new Blob([JSON.stringify(docWithPreview)], { type: 'application/json' });
    const jsonFile = new File([jsonBlob], `whiteboard-${doc.id}.json`, {
      type: 'application/json',
    });

    const jsonRes = await storageService.uploadFile(jsonFile, { category: 'materials' });

    // Update penyimpanan lokal dengan URL R2
    await saveDocumentLocally({
      ...docWithPreview,
      r2StorageKey: jsonRes.key,
      r2PublicUrl: jsonRes.url,
    });

    return {
      success: true,
      jsonUrl: jsonRes.url,
      previewUrl,
    };
  } catch (err) {
    console.error('Gagal mengunggah whiteboard ke R2:', err);
    return { success: false };
  }
}

// Template Bawaan (Presets) untuk Tiap Mata Pelajaran STEM
export const STEM_TEMPLATE_PRESETS: WhiteboardTemplatePreset[] = [
  {
    id: 'template-blank-infinite',
    title: 'Kanvas Bebas Tanpa Batas',
    subject: 'Umum',
    description: 'Ruang gambar infinite 2D untuk catatan bebas, sketsa rumus, dan coretan ide.',
    layoutMode: 'infinite',
    pageFormat: 'widescreen_16_9',
    backgroundType: 'blank',
    thumbnailBadge: 'Infinite',
    initialElements: [],
  },
  {
    id: 'template-a4-lined',
    title: 'Lembar Catatan Bergaris (A4)',
    subject: 'Umum',
    description: 'Buku bergaris berukuran A4 multi-halaman untuk penjelasan teori terstruktur.',
    layoutMode: 'paginated',
    pageFormat: 'a4_portrait',
    backgroundType: 'lined',
    thumbnailBadge: 'A4 Lined',
    initialElements: [],
  },
  {
    id: 'template-math-cartesian',
    title: 'Bidang Kartesius & Analisis Fungsi',
    subject: 'Matematika',
    description: 'Sistem koordinat Kartesius skala lengkap untuk grafik fungsi aljabar & kalkulus.',
    layoutMode: 'paginated',
    pageFormat: 'a4_portrait',
    backgroundType: 'cartesian',
    thumbnailBadge: 'Kartesius',
    initialElements: [],
  },
  {
    id: 'template-physics-optics-mechanics',
    title: 'Laboratorium Kinematika & Optik',
    subject: 'Fisika',
    description: 'Kertas milimeter matematika untuk vektor gaya, diagram bebas benda, dan sinar optik.',
    layoutMode: 'infinite',
    pageFormat: 'widescreen_16_9',
    backgroundType: 'grid',
    thumbnailBadge: 'Fisika Grid',
    initialElements: [],
  },
  {
    id: 'template-chem-organic',
    title: 'Papan Tulis Kimia Organik & Reaksi',
    subject: 'Kimia',
    description: 'Dot grid presisi untuk menggambar struktur cincin benzena, ikatan baji, dan mekanisme reaksi.',
    layoutMode: 'paginated',
    pageFormat: 'a4_landscape',
    backgroundType: 'dots',
    thumbnailBadge: 'Kimia Dot',
    initialElements: [],
  },
  {
    id: 'template-bio-pedigree-cells',
    title: 'Studi Genetika & Diagram Sel',
    subject: 'Biologi',
    description: 'Kanvas terbagi untuk diagram silsilah pewarisan sifat (pedigree) dan skema biologi sel.',
    layoutMode: 'paginated',
    pageFormat: 'a4_portrait',
    backgroundType: 'blank',
    thumbnailBadge: 'Biologi A4',
    initialElements: [],
  },
  {
    id: 'template-chalkboard-lecture',
    title: 'Papan Tulis Hitam Klasik (Chalkboard)',
    subject: 'Umum',
    description: 'Mode gelap elegan dengan kontras tinggi untuk suasana perkuliahan olimpiade.',
    layoutMode: 'infinite',
    pageFormat: 'widescreen_16_9',
    backgroundType: 'chalkboard',
    thumbnailBadge: 'Chalkboard',
    initialElements: [],
  },
];
