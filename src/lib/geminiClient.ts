/**
 * geminiClient.ts
 * Klien AI Gemini terintegrasi dengan arsitektur pool multi-key dan env.local (seperti pada testmaker)
 * Mendukung:
 * - VITE_GEMINI_API_KEY (kunci primer dari .env.local)
 * - VITE_GEMINI_API_KEY_2, VITE_GEMINI_API_KEY_3... (kunci sekunder/rotasi)
 * - VITE_GEMINI_API_KEYS (daftar kunci terpisah koma/spasi)
 * - VITE_GEMINI_MODEL (konfigurasi model, default gemini-2.5-flash)
 * - Rotasi otomatis dan auto-fallback saat terjadi rate limit (HTTP 429 / 403)
 */

export interface GeminiCallOptions {
  model?: string;
  temperature?: number;
  systemInstruction?: string;
  responseMimeType?: string;
}

export interface GeminiCallResult {
  text: string;
  mode: 'live_gemini' | 'proxy' | 'offline_fallback';
  modelUsed?: string;
  keyIndexUsed?: number;
}

const STORAGE_KEY = 'osn_gemini_api_key';
const DEFAULT_MODEL = 'gemini-3.6-flash';
const CANDIDATE_MODELS = ['gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-1.5-flash'];

/**
 * Mengumpulkan seluruh API key yang tersedia dari environment variables (.env.local)
 * dan penyimpanan lokal browser (localStorage), diduplikasi dengan urutan prioritas.
 */
export function getGeminiApiKeys(): string[] {
  const keys: string[] = [];

  // 1. Daftar kunci dari VITE_GEMINI_API_KEYS (koma/spasi)
  const rawList = import.meta.env.VITE_GEMINI_API_KEYS;
  if (typeof rawList === 'string') {
    rawList
      .split(/[,;\s]+/)
      .map((k) => k.trim())
      .filter((k) => k.length > 5 && !k.includes('your-gemini-api-key'))
      .forEach((k) => keys.push(k));
  }

  // 3. Kunci Utama: VITE_GEMINI_API_KEY
  const primary = import.meta.env.VITE_GEMINI_API_KEY;
  if (typeof primary === 'string' && primary.trim().length > 5 && !primary.includes('your-gemini-api-key')) {
    keys.push(primary.trim());
  }

  // 4. Kunci Sekunder 2: VITE_GEMINI_API_KEY_2
  const secondary = import.meta.env.VITE_GEMINI_API_KEY_2;
  if (typeof secondary === 'string' && secondary.trim().length > 5 && !secondary.includes('your-gemini-api-key')) {
    keys.push(secondary.trim());
  }

  // 5. Kunci Tersier 3: VITE_GEMINI_API_KEY_3
  const tertiary = import.meta.env.VITE_GEMINI_API_KEY_3;
  if (typeof tertiary === 'string' && tertiary.trim().length > 5 && !tertiary.includes('your-gemini-api-key')) {
    keys.push(tertiary.trim());
  }

  // Deduplikasi dengan mempertahankan urutan kemunculan
  return Array.from(new Set(keys));
}

/**
 * Mengambil kunci API primer yang aktif
 */
export function getGeminiApiKey(): string {
  const pool = getGeminiApiKeys();
  return pool[0] || '';
}

/**
 * Memeriksa apakah minimal ada satu kunci API yang terkonfigurasi
 */
export function isGeminiKeyConfigured(): boolean {
  return getGeminiApiKeys().length > 0;
}

/**
 * Memeriksa apakah multi-key aktif (minimal 2 kunci untuk rotasi kuota)
 */
export function hasMultipleApiKeys(): boolean {
  return getGeminiApiKeys().length >= 2;
}

/**
 * Mendapatkan nama model yang dikonfigurasi di .env.local atau default
 */
export function getGeminiModel(): string {
  const envModel = import.meta.env.VITE_GEMINI_MODEL;
  if (typeof envModel === 'string' && envModel.trim().length > 0) {
    return envModel.trim();
  }
  return DEFAULT_MODEL;
}

/**
 * Menyimpan API Key ke localStorage
 */
export function setGeminiApiKey(apiKey: string): void {
  if (typeof window !== 'undefined') {
    if (apiKey && apiKey.trim()) {
      localStorage.setItem(STORAGE_KEY, apiKey.trim());
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

/**
 * Memanggil Gemini API dengan rotasi multi-key dan auto-fallback jika rate-limited (429/403)
 */
export async function callGemini(
  prompt: string,
  options: GeminiCallOptions = {}
): Promise<GeminiCallResult> {
  const keyPool = getGeminiApiKeys();
  const configuredModel = options.model || getGeminiModel();
  const temperature = options.temperature ?? 0.1;
  const systemInstruction = options.systemInstruction;
  const responseMimeType = options.responseMimeType || 'application/json';

  // 1. Jika ada API key dalam pool, iterasi dan lakukan rotasi saat error rate limit
  if (keyPool.length > 0) {
    const modelsToTry = [configuredModel, ...CANDIDATE_MODELS.filter((m) => m !== configuredModel)];
    let lastError: any = null;

    for (let keyIdx = 0; keyIdx < keyPool.length; keyIdx++) {
      const currentKey = keyPool[keyIdx];

      for (const currentModel of modelsToTry) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${encodeURIComponent(
          currentKey
        )}`;

        const requestBody: any = {
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature,
            topP: 0.95,
            responseMimeType,
          },
        };

        if (systemInstruction) {
          requestBody.systemInstruction = {
            parts: [{ text: systemInstruction }],
          };
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 35000); // 35 detik timeout

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
            body: JSON.stringify(requestBody),
          });

          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            if (generatedText) {
              return {
                text: generatedText,
                mode: 'live_gemini',
                modelUsed: currentModel,
                keyIndexUsed: keyIdx,
              };
            }
          }

          // Analisis kode status kegagalan
          const errorData = await response.json().catch(() => ({}));
          const errMsg = errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`;
          lastError = new Error(`Gemini (${currentModel}, Kunci #${keyIdx + 1}): ${errMsg}`);

          // Jika 404 (Model tidak ditemukan), lanjutkan ke model alternatif pada kunci yang sama
          if (response.status === 404) {
            console.warn(`Model ${currentModel} tidak tersedia, mencoba model cadangan...`);
            continue;
          }

          // Jika 429 (Rate limit / Quota habis) atau 403, lanjutkan ke kunci berikutnya dalam pool
          if (response.status === 429 || response.status === 403) {
            console.warn(`Kunci #${keyIdx + 1} terkena pembatasan kuota (${response.status}), merotasi ke kunci berikutnya...`);
            break; // Keluar dari loop model untuk pindah ke kunci berikutnya
          }
        } catch (fetchErr: any) {
          clearTimeout(timeoutId);
          lastError = fetchErr;
          console.warn(`Pemanggilan gagal pada Kunci #${keyIdx + 1}:`, fetchErr.message);
        }
      }
    }

    // Jika seluruh kunci dalam pool gagal, lempar error informatif
    if (lastError) {
      throw lastError;
    }
  }

  // 2. Cek apakah ada proxy endpoint serverless (/api/ai)
  const proxyUrl = import.meta.env.VITE_AI_PROXY_URL;
  if (proxyUrl) {
    try {
      const proxyRes = await fetch(proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, options }),
      });
      if (proxyRes.ok) {
        const data = await proxyRes.json();
        return { text: data.text || data.result, mode: 'proxy' };
      }
    } catch (_proxyErr) {
      console.warn('Proxy AI tidak merespon, beralih ke scientific fallback mode.');
    }
  }

  // 3. Jika API key belum terisi di .env.local, kembalikan sinyal fallback deterministik
  return {
    text: '',
    mode: 'offline_fallback',
  };
}
