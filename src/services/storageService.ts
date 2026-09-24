/**
 * storageService.ts
 * Layanan terpadu Cloudflare R2 Storage untuk Gambar, Diagram Soal Kimia, dan Media.
 * Mendukung pengunggahan terstruktur berdasarkan kategori (diagrams, questions, materials, avatars),
 * validasi berkas (maks 10 MB), pencatatan metadata, dan penyerahan URL publik berkecepatan tinggi.
 */

export type StorageCategory = 'diagrams' | 'questions' | 'materials' | 'avatars' | 'general';

export interface UploadResult {
  success: boolean;
  url: string;
  key: string;
  filename: string;
  size: number;
  contentType: string;
  category: StorageCategory;
  uploadedAt: string;
  error?: string;
}

export interface StoredObject {
  key: string;
  size: number;
  uploadedAt: string;
  httpEtag?: string;
  url: string;
  customMetadata?: {
    originalName?: string;
    category?: string;
    uploadedAt?: string;
    fileSize?: string;
  };
}

export interface ListResult {
  success: boolean;
  objects: StoredObject[];
  truncated?: boolean;
  cursor?: string;
  error?: string;
}

export interface UploadOptions {
  category?: StorageCategory;
  filename?: string;
  onProgress?: (progressPercent: number) => void;
}

const LOCAL_STORAGE_CACHE_KEY = 'osn_uploaded_media_cache_v1';
export const MAX_STORAGE_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export const ALLOWED_IMAGE_MIME_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/svg+xml',
  'image/gif',
  'application/pdf',
  'application/json',
];

class StorageService {
  /**
   * Mengambil basis URL Cloudflare Worker penyedia storage.
   * Pada mode development (localhost), menggunakan relative path '' agar otomatis melalui Vite dev proxy (/api/storage).
   */
  public getStorageBaseUrl(): string {
    if (import.meta.env.DEV) {
      return '';
    }
    const raw =
      import.meta.env.VITE_CLOUDFLARE_STORAGE_URL ||
      import.meta.env.VITE_CLOUDFLARE_MAILER_URL ||
      '';
    return raw.trim().replace(/\/+$/, '');
  }

  /**
   * Memeriksa apakah URL Cloudflare Worker telah terkonfigurasi
   */
  public isStorageConfigured(): boolean {
    if (import.meta.env.DEV) {
      return true; // Selalu aktif di localhost via Vite dev proxy
    }
    const url = this.getStorageBaseUrl();
    return Boolean(
      url &&
      !url.includes('your-subdomain') &&
      !url.includes('your-worker')
    );
  }

  /**
   * Mengunggah berkas gambar / diagram ke Cloudflare R2
   */
  public async uploadFile(
    file: File | Blob,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    const baseUrl = this.getStorageBaseUrl();
    const category: StorageCategory = options.category || 'diagrams';
    const originalName =
      options.filename ||
      (file instanceof File ? file.name : `diagram-${Date.now()}.png`);

    // 1. Validasi Ukuran
    if (file.size > MAX_STORAGE_FILE_SIZE_BYTES) {
      throw new Error(
        `Ukuran berkas (${(file.size / (1024 * 1024)).toFixed(2)} MB) melebihi batas 10 MB.`
      );
    }

    // 2. Validasi Tipe Berkas (Perluas deteksi ekstensi jika MIME generik di Windows)
    let mimeType = (file.type || '').toLowerCase();
    if (!mimeType || mimeType === 'application/octet-stream') {
      const extFromName = originalName.split('.').pop()?.toLowerCase();
      const mimeMap: Record<string, string> = {
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        gif: 'image/gif',
        pdf: 'application/pdf',
        json: 'application/json',
      };
      if (extFromName && mimeMap[extFromName]) {
        mimeType = mimeMap[extFromName];
      } else {
        mimeType = 'image/png';
      }
    }

    const isAllowed = ALLOWED_IMAGE_MIME_TYPES.some((t) => mimeType.startsWith(t) || mimeType === t);
    if (!isAllowed) {
      throw new Error(
        `Format "${mimeType}" tidak didukung. Harap unggah format gambar (PNG, JPG, WEBP, SVG, GIF) atau PDF.`
      );
    }

    // 3. Jika backend Cloudflare belum dikonfigurasi, gunakan Local Data URL Fallback
    if (!this.isStorageConfigured()) {
      console.warn('[storageService] Backend belum diatur. Menggunakan Base64 Data URL sementara.');
      return this.createLocalFallbackUpload(file, originalName, category);
    }

    // 4. Unggah ke Cloudflare Worker via FormData dengan pelacakan progress
    const formData = new FormData();
    formData.append('file', file, originalName);
    formData.append('category', category);

    return new Promise<UploadResult>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const uploadUrl = `${baseUrl}/api/storage/upload`;

      if (options.onProgress) {
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            options.onProgress?.(percent);
          }
        };
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data: UploadResult = JSON.parse(xhr.responseText);
            if (data.success) {
              this.saveToRecentCache({
                key: data.key,
                url: data.url,
                size: data.size,
                uploadedAt: data.uploadedAt,
                customMetadata: {
                  originalName: data.filename,
                  category: data.category,
                  fileSize: String(data.size),
                },
              });
              resolve(data);
            } else {
              // Jika di dev mode dan worker mengembalikan error, fallback ke data URL
              if (import.meta.env.DEV) {
                console.warn('[storageService] Worker response false di dev mode, fallback ke local:', data.error);
                this.createLocalFallbackUpload(file, originalName, category).then(resolve).catch(reject);
                return;
              }
              reject(new Error(data.error || 'Gagal mengunggah berkas ke Cloudflare R2.'));
            }
          } catch (err: any) {
            if (import.meta.env.DEV) {
              console.warn('[storageService] Gagal parsing response worker di dev, fallback ke local.');
              this.createLocalFallbackUpload(file, originalName, category).then(resolve).catch(reject);
              return;
            }
            reject(new Error(`Gagal memproses respons worker: ${err.message}`));
          }
        } else {
          try {
            const errData = JSON.parse(xhr.responseText);
            if (import.meta.env.DEV && (xhr.status >= 500 || xhr.status === 404)) {
              console.warn('[storageService] HTTP error di dev mode, fallback ke local:', errData);
              this.createLocalFallbackUpload(file, originalName, category).then(resolve).catch(reject);
              return;
            }
            reject(new Error(errData.error || `HTTP ${xhr.status}: ${xhr.statusText}`));
          } catch {
            if (import.meta.env.DEV) {
              console.warn(`[storageService] HTTP ${xhr.status} di dev mode, fallback ke local.`);
              this.createLocalFallbackUpload(file, originalName, category).then(resolve).catch(reject);
              return;
            }
            reject(new Error(`Gagal mengunggah (HTTP ${xhr.status}: ${xhr.statusText})`));
          }
        }
      };

      xhr.onerror = () => {
        // Jika jaringan/worker tidak dapat dijangkau saat di localhost, otomatis beralih ke local fallback
        if (import.meta.env.DEV) {
          console.warn('[storageService] Koneksi ke Cloudflare Worker gagal di dev, beralih ke local fallback preview.');
          this.createLocalFallbackUpload(file, originalName, category).then(resolve).catch(reject);
          return;
        }
        reject(new Error('Koneksi jaringan ke Cloudflare Storage Worker gagal.'));
      };

      xhr.open('POST', uploadUrl, true);
      xhr.send(formData);
    });
  }

  /**
   * Helper spesifik untuk mengunggah diagram soal kimia
   */
  public async uploadDiagram(
    file: File | Blob,
    filename?: string,
    onProgress?: (percent: number) => void
  ): Promise<UploadResult> {
    return this.uploadFile(file, {
      category: 'diagrams',
      filename,
      onProgress,
    });
  }

  /**
   * Menghapus berkas dari Cloudflare R2
   */
  public async deleteFile(key: string): Promise<boolean> {
    const baseUrl = this.getStorageBaseUrl();
    if (!this.isStorageConfigured()) {
      this.removeFromRecentCache(key);
      return true;
    }

    try {
      const res = await fetch(`${baseUrl}/api/storage/file/${encodeURIComponent(key)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        this.removeFromRecentCache(key);
        return true;
      }
      return false;
    } catch (err) {
      console.warn('Gagal menghapus berkas dari Cloudflare R2:', err);
      return false;
    }
  }

  /**
   * Mengambil daftar berkas tersimpan di Cloudflare R2
   */
  public async listFiles(options: { category?: StorageCategory; prefix?: string; limit?: number } = {}): Promise<StoredObject[]> {
    const baseUrl = this.getStorageBaseUrl();
    const prefix = options.prefix || (options.category ? `${options.category}/` : '');
    const limit = options.limit || 50;

    if (!this.isStorageConfigured()) {
      const cached = this.getRecentCache();
      if (options.category) {
        return cached.filter((c) => c.key.startsWith(`${options.category}/`));
      }
      return cached;
    }

    try {
      const res = await fetch(`${baseUrl}/api/storage/list?prefix=${encodeURIComponent(prefix)}&limit=${limit}`);
      if (res.ok) {
        const data: ListResult = await res.json();
        if (data.success && Array.isArray(data.objects)) {
          // Perbarui local cache
          data.objects.forEach((obj) => this.saveToRecentCache(obj));
          return data.objects;
        }
      }
    } catch (err) {
      console.warn('Gagal mengambil daftar berkas dari Cloudflare R2, menggunakan cache lokal:', err);
    }

    // Fallback ke cache lokal
    const cached = this.getRecentCache();
    if (prefix) {
      return cached.filter((c) => c.key.startsWith(prefix));
    }
    return cached;
  }

  private inMemoryDataUrls: Map<string, string> = new Map();

  /**
   * Ambil daftar riwayat unggahan lokal
   */
  public getRecentCache(): StoredObject[] {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CACHE_KEY);
      if (saved) {
        const parsed: StoredObject[] = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((item) => ({
            ...item,
            url: this.inMemoryDataUrls.get(item.key) || item.url,
          }));
        }
      }
    } catch {}
    return [];
  }

  private saveToRecentCache(item: StoredObject): void {
    try {
      if (item.url && item.url.startsWith('data:')) {
        this.inMemoryDataUrls.set(item.key, item.url);
      }
      const existing = this.getRecentCache().filter((c) => c.key !== item.key);
      // Hindari menyimpan string data URL base64 raksasa ke localStorage browser (kuota 5MB)
      const sanitizedItem: StoredObject = item.url && item.url.startsWith('data:')
        ? { ...item, url: '[local-memory]' }
        : item;
      const updated = [sanitizedItem, ...existing].slice(0, 30);
      localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('[storageService] Gagal menyimpan cache media ke localStorage:', err);
    }
  }

  private removeFromRecentCache(key: string): void {
    this.inMemoryDataUrls.delete(key);
    try {
      const existing = this.getRecentCache().filter((c) => c.key !== key);
      localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, JSON.stringify(existing));
    } catch {}
  }

  private async createLocalFallbackUpload(
    file: File | Blob,
    originalName: string,
    category: StorageCategory
  ): Promise<UploadResult> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Url = reader.result as string;
        const key = `${category}/local-${Date.now()}-${originalName}`;
        const result: UploadResult = {
          success: true,
          url: base64Url,
          key,
          filename: originalName,
          size: file.size,
          contentType: file.type || 'image/png',
          category,
          uploadedAt: new Date().toISOString(),
        };
        this.saveToRecentCache({
          key,
          url: base64Url,
          size: file.size,
          uploadedAt: result.uploadedAt,
          customMetadata: {
            originalName,
            category,
            fileSize: String(file.size),
          },
        });
        resolve(result);
      };
      reader.readAsDataURL(file);
    });
  }
}

export const storageService = new StorageService();
