import fs from 'fs';
import path from 'path';

let rawCss = fs.readFileSync('node_modules/katex/dist/katex.min.css', 'utf-8');

// Replace relative font URLs with CDN so fonts always resolve anywhere
rawCss = rawCss.replace(/url\(fonts\/([^\)]+)\)/g, 'url("https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/fonts/$1")');

const enhancedRules = `
/* ==============================================================
   ENHANCED FRACTION & FORMULA READABILITY (Anti-Cramped Fractions)
   ============================================================== */
.katex {
  font-size: 1.08em;
  text-rendering: auto;
}

/* Pecahan (mfrac) dibuat lebih lega & lapang agar angka/variabel tidak berhimpitan dengan garis */
.katex .mfrac {
  font-size: 1.18em;
  vertical-align: -0.22em;
  margin: 0 0.15em;
}

/* Jarak vertikal aman antara pembilang/penyebut dengan garis pecahan */
.katex .mfrac .vlist-t {
  margin: 0.18em 0;
}

.katex .mfrac .frac-line {
  border-bottom-width: 0.055em !important;
}

.katex .mfrac > span > span {
  padding: 0.06em 0.12em;
}

/* Formula di dalam tabel (Key Formulas & Tabel Konten) dibuat lebih besar dan lega */
.sme-table td .katex,
.sme-table th .katex,
.sme-table-container .katex {
  font-size: 1.18em;
}

.sme-table td {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
`;

const fileContent = `/**
 * Embedded KaTeX Core CSS & Anti-Cramped Fraction Styling
 * Menjamin rendering KaTeX 100% konsisten, offline-ready, dan tidak mengalami
 * tabrakan pecahan / garis saling tumpang tindih baik di browser maupun headless PDF export.
 */
export const KATEX_EMBEDDED_CSS = ${JSON.stringify(rawCss + '\n' + enhancedRules)};
`;

fs.writeFileSync('src/services/katexEmbeddedCss.ts', fileContent, 'utf-8');
console.log('src/services/katexEmbeddedCss.ts generated successfully! Size:', fileContent.length);
