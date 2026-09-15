/**
 * robust-json.ts
 * Parser JSON tangguh untuk respon LLM (Gemini) yang memuat notasi KaTeX / LaTeX / mhchem
 * Mencegah SyntaxError akibat karakter backslash unescaped (misal \ce, \Delta, \frac, dsb.)
 */

/**
 * Membersihkan format teks mentah dan menguraikan JSON secara aman
 */
export function cleanAndParseJson<T = any>(rawText: string, fallback?: T): T {
  if (!rawText || typeof rawText !== 'string') {
    if (fallback !== undefined) return fallback;
    throw new Error('cleanAndParseJson: Input rawText kosong atau bukan string');
  }

  // 1. Ekstraksi blok JSON dari code fences markdown (```json ... ``` atau ``` ... ```)
  let cleaned = rawText.trim();
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenceMatch && fenceMatch[1]) {
    cleaned = fenceMatch[1].trim();
  }

  // 2. Ambil substring antara kurung kurawal terluar `{` dan `}`
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }

  // 3. Coba parsing langsung terlebih dahulu
  try {
    return JSON.parse(cleaned) as T;
  } catch (_err1) {
    // Lanjut ke perbaikan sanitasi backslash LaTeX
  }

  // 4. Perbaikan string scanner untuk backslash yang tidak sah dalam JSON string
  try {
    const sanitized = sanitizeLatexJsonString(cleaned);
    return JSON.parse(sanitized) as T;
  } catch (_err2) {
    // Lanjut ke penyeimbangan kurung (bracket balancing) jika terpotong
  }

  // 5. Coba seimbangkan kurung kurawal/siku jika JSON terpotong di tengah jalan
  try {
    const balanced = balanceUnclosedJson(cleaned);
    const sanitizedBalanced = sanitizeLatexJsonString(balanced);
    return JSON.parse(sanitizedBalanced) as T;
  } catch (errFinal) {
    if (fallback !== undefined) {
      console.warn('cleanAndParseJson: Gagal parse JSON, mengembalikan fallback default.', errFinal);
      return fallback;
    }
    throw new Error(`cleanAndParseJson: Gagal mengurai JSON respon AI (${(errFinal as Error).message}). Output mentah: ${rawText.slice(0, 200)}...`);
  }
}

/**
 * Menelusuri karakter per karakter dan memperbaiki backslash yang tidak valid di dalam string JSON.
 * Standar JSON hanya mengizinkan: \", \\, \/, \b, \f, \n, \r, \t, dan \uXXXX.
 * LaTeX sering memunculkan: \ce, \Delta, \approx, \text, \frac, \circ, dsb. yang harus diubah jadi \\ce, \\Delta, dst.
 */
export function sanitizeLatexJsonString(jsonStr: string): string {
  let result = '';
  let inString = false;
  let isEscaped = false;

  for (let i = 0; i < jsonStr.length; i++) {
    const char = jsonStr[i];

    if (inString) {
      if (isEscaped) {
        // Karakter setelah backslash
        isEscaped = false;

        // Cek khusus: pada LaTeX, \frac, \text, \times, \beta, \rho adalah perintah KaTeX,
        // namun huruf f, t, b, r adalah escape bawaan JSON (formfeed, tab, backspace, carriage-return).
        // Jika diikuti oleh alfabet lain (misal \frac, \text, \times), perlakukan sebagai LaTeX!
        const nextChars = jsonStr.substring(i + 1, i + 6);
        const isFollowedByLetter = /^[a-zA-Z]/.test(nextChars);

        if (char === '"' || char === '\\' || char === '/') {
          result += char;
        } else if (char === 'f' && isFollowedByLetter) {
          // e.g. \frac, \forall
          result += '\\' + char;
        } else if (char === 't' && isFollowedByLetter) {
          // e.g. \text, \times, \theta, \to, \tau
          result += '\\' + char;
        } else if (char === 'b' && isFollowedByLetter) {
          // e.g. \beta, \bar, \binom, \begin
          result += '\\' + char;
        } else if (char === 'r' && isFollowedByLetter) {
          // e.g. \rho, \right, \rightarrow
          result += '\\' + char;
        } else if (char === 'n' && /^(?:u\b|eq|abla|eg|ot)/.test(nextChars)) {
          // e.g. \nu, \neq, \nabla
          result += '\\' + char;
        } else if (
          char === 'b' ||
          char === 'f' ||
          char === 'n' ||
          char === 'r' ||
          char === 't'
        ) {
          // Escape kontrol standar JSON (\n newline)
          result += char;
        } else if (char === 'u') {
          const hex = jsonStr.substring(i + 1, i + 5);
          if (/^[0-9a-fA-F]{4}$/.test(hex)) {
            result += char;
          } else {
            result += '\\' + char;
          }
        } else {
          // Escape sequence non-standar JSON (seperti \c, \D, \m, \p, \s, dsb.)
          result += '\\' + char;
        }
      } else {
        if (char === '\\') {
          isEscaped = true;
          result += char;
        } else if (char === '"') {
          inString = false;
          result += char;
        } else if (char === '\n') {
          // Karakter newline fisik di dalam string literal JSON
          result += '\\n';
        } else if (char === '\r') {
          result += '\\r';
        } else if (char === '\t') {
          result += '\\t';
        } else {
          result += char;
        }
      }
    } else {
      // Di luar string literal
      if (char === '"') {
        inString = true;
      }
      result += char;
    }
  }

  return result;
}

/**
 * Menutup tanda kurung kurawal/siku yang belum tertutup jika respon terpotong di akhir.
 */
export function balanceUnclosedJson(incompleteJson: string): string {
  let openBraces = 0;
  let openBrackets = 0;
  let inString = false;
  let isEscaped = false;

  for (let i = 0; i < incompleteJson.length; i++) {
    const char = incompleteJson[i];
    if (inString) {
      if (isEscaped) {
        isEscaped = false;
      } else if (char === '\\') {
        isEscaped = true;
      } else if (char === '"') {
        inString = false;
      }
    } else {
      if (char === '"') {
        inString = true;
      } else if (char === '{') {
        openBraces++;
      } else if (char === '}') {
        if (openBraces > 0) openBraces--;
      } else if (char === '[') {
        openBrackets++;
      } else if (char === ']') {
        if (openBrackets > 0) openBrackets--;
      }
    }
  }

  let repaired = incompleteJson.trim();
  // Jika terpotong di dalam string, tutup tanda kutipnya
  if (inString) {
    repaired += '"';
  }
  // Tutup kurung siku
  while (openBrackets > 0) {
    repaired += ']';
    openBrackets--;
  }
  // Tutup kurung kurawal
  while (openBraces > 0) {
    repaired += '}';
    openBraces--;
  }

  return repaired;
}
