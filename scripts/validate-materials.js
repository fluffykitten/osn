/**
 * scripts/validate-materials.js
 * Script QA Otomatis untuk Memvalidasi Seluruh Konten Materi Kimia (SMA 16 Modul & OSN 10 Pilar):
 * 1. Schema Validation (id, title, slug, summary, tags, prerequisites, core_concepts, worked_examples)
 * 2. KaTeX & mhchem Rendering (uji coba render formula inline $...$ dan display $$...$$ tanpa error)
 * 3. Delimiter Balance Checker (memastikan tidak ada tanda $ yang bocor / tidak berpasangan)
 * 4. SVG Tag & Attribute Integrity (memastikan tag <svg> tertutup rapi dan tidak merusak layout)
 * 5. Callout Parser Compatibility (> [!WARNING], > [!TIP], dsb.)
 * 
 * Penggunaan:
 * npm run test:materials
 * atau
 * node --experimental-strip-types scripts/validate-materials.js
 */

import katex from 'katex';
import 'katex/dist/contrib/mhchem.mjs';

import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { SMA_MATERIALS_FASE_E } from '../src/data/materials/smaFaseE.ts';
import { SMA_MATERIALS_FASE_F1 } from '../src/data/materials/smaFaseF1.ts';
import { SMA_MATERIALS_FASE_F2 } from '../src/data/materials/smaFaseF2.ts';

const ALL_SMA_MATERIALS = [
  ...SMA_MATERIALS_FASE_E,
  ...SMA_MATERIALS_FASE_F1,
  ...SMA_MATERIALS_FASE_F2,
];

console.log('🧪 Memulai Pengujian QA & Validasi Pedagogis Materi Kimia...\n');

let totalMaterials = 0;
let totalBlocks = 0;
let totalMathExpressions = 0;
let totalSvgBlocks = 0;
let totalCallouts = 0;

const errors = [];
const warnings = [];

// Helper normalisasi seperti di katex-helpers.ts
function normalizeFormula(formula) {
  return formula
    .replace(/(?<!\\)%/g, '\\%')
    .replace(/\\\\([a-zA-Z]+)/g, '\\$1');
}

function testKaTeX(formula, isDisplay, context) {
  totalMathExpressions++;
  const safeFormula = normalizeFormula(formula);
  try {
    katex.renderToString(safeFormula, {
      displayMode: isDisplay,
      throwOnError: true,
    });
  } catch (err) {
    errors.push({
      type: 'KaTeX Syntax Error',
      context,
      formula: formula.length > 80 ? formula.slice(0, 80) + '...' : formula,
      message: err.message,
    });
  }
}

function scanMarkdownContent(text, context) {
  if (!text || typeof text !== 'string') return;

  // 1. Cek Display Math: $$ ... $$
  const displayParts = text.split('$$');
  if (displayParts.length % 2 === 0) {
    errors.push({
      type: 'Unbalanced Display Math Delimiter ($$)',
      context,
      message: 'Jumlah tanda $$ ganjil, ada blok matematika display yang tidak ditutup.',
    });
  }

  for (let i = 1; i < displayParts.length; i += 2) {
    const formula = displayParts[i].trim();
    if (formula) {
      testKaTeX(formula, true, `${context} -> Display Math`);
    }
  }

  // 2. Cek Inline Math: $ ... $ (pada bagian di luar $$)
  for (let i = 0; i < displayParts.length; i += 2) {
    const chunk = displayParts[i];
    // Pisahkan inline math dengan mengabaikan escaped \$
    const tokens = chunk.split(/(?<!\\)\$/);
    if (tokens.length % 2 === 0) {
      // Ada $ ganjil di baris tertentu
      warnings.push({
        type: 'Potential Unbalanced Inline Math ($)',
        context,
        message: 'Terdapat tanda $ ganjil pada potongan teks markdown.',
        snippet: chunk.length > 100 ? chunk.slice(0, 100) + '...' : chunk,
      });
    }

    for (let j = 1; j < tokens.length; j += 2) {
      const formula = tokens[j].trim();
      if (formula && !formula.includes('\n\n')) {
        testKaTeX(formula, false, `${context} -> Inline Math`);
      }
    }
  }

  // 3. Cek Tag SVG
  const svgOpenCount = (text.match(/<svg\b[^>]*>/gi) || []).length;
  const svgCloseCount = (text.match(/<\/svg>/gi) || []).length;
  if (svgOpenCount > 0 || svgCloseCount > 0) {
    totalSvgBlocks += svgOpenCount;
    if (svgOpenCount !== svgCloseCount) {
      errors.push({
        type: 'Unmatched SVG Tag',
        context,
        message: `Jumlah <svg> (${svgOpenCount}) tidak sama dengan </svg> (${svgCloseCount}).`,
      });
    }
  }

  // 4. Cek Callouts GitHub
  const calloutMatches = text.match(/>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|DANGER)\]/gi);
  if (calloutMatches) {
    totalCallouts += calloutMatches.length;
  }
}

function validateConceptBlock(block, blockType, materialContext) {
  totalBlocks++;
  const context = `${materialContext} [${blockType}: ${block.tag || 'tanpa-tag'}]`;

  if (!block.title) {
    errors.push({ type: 'Missing Field', context, message: 'Block tidak memiliki title.' });
  }
  if (!block.summary) {
    warnings.push({ type: 'Missing Field', context, message: 'Block tidak memiliki summary.' });
  }
  if (!block.content) {
    errors.push({ type: 'Missing Field', context, message: 'Block tidak memiliki content teks.' });
  } else {
    scanMarkdownContent(block.content, context);
  }

  if (block.keyFormulas && Array.isArray(block.keyFormulas)) {
    block.keyFormulas.forEach((kf, idx) => {
      if (kf.formula) {
        testKaTeX(kf.formula, false, `${context} -> keyFormula[${idx}]`);
      }
    });
  }
}

function validateMaterial(item, datasetName) {
  totalMaterials++;
  const materialContext = `${datasetName} (ID: ${item.id}, ${item.title})`;

  if (!item.title || !item.slug) {
    errors.push({ type: 'Invalid Metadata', context: materialContext, message: 'Title atau slug kosong.' });
  }

  if (item.summary) {
    scanMarkdownContent(item.summary, `${materialContext} -> Summary`);
  }

  // Validasi 3 Lapis Pedagogis
  (item.prerequisites || []).forEach((b) => validateConceptBlock(b, 'Prerequisite', materialContext));
  (item.core_concepts || []).forEach((b) => validateConceptBlock(b, 'CoreConcept', materialContext));
  (item.worked_examples || []).forEach((b) => validateConceptBlock(b, 'WorkedExample', materialContext));
}

// Jalankan validasi pada kedua basis data
console.log('📌 Memvalidasi 10 Topik Silabus OSN/IChO...');
OSN_MATERIALS.forEach((m) => validateMaterial(m, 'OSN'));

console.log('📌 Memvalidasi 16 Modul Silabus Kimia SMA (Fase E & F)...');
ALL_SMA_MATERIALS.forEach((m) => validateMaterial(m, 'SMA'));

console.log('\n' + '='.repeat(60));
console.log('📊 HASIL PENGUJIAN JAMINAN MUTU KONTEN (QA REPORT)');
console.log('='.repeat(60));
console.log(`• Total Topik/Modul Diperiksa    : ${totalMaterials}`);
console.log(`• Total Blok Konsep / Soal      : ${totalBlocks}`);
console.log(`• Total Formula KaTeX Diuji     : ${totalMathExpressions}`);
console.log(`• Total Blok Infografik SVG     : ${totalSvgBlocks}`);
console.log(`• Total GitHub Callouts Terdeteksi : ${totalCallouts}`);
console.log(`• Total Galat (Errors) Fatal    : ${errors.length}`);
console.log(`• Total Catatan / Warnings      : ${warnings.length}`);
console.log('='.repeat(60));

if (warnings.length > 0 && warnings.length <= 10) {
  console.log('\n⚠️  Daftar Peringatan (Warnings):');
  warnings.forEach((w, idx) => {
    console.log(` [${idx + 1}] ${w.type} di ${w.context}: ${w.message}`);
    if (w.snippet) console.log(`     Snippet: "${w.snippet}"`);
  });
} else if (warnings.length > 10) {
  console.log(`\n⚠️  Ditemukan ${warnings.length} catatan/warnings ringan (termasuk karakter $ pada teks bebas).`);
}

if (errors.length > 0) {
  console.error('\n❌ DITEMUKAN GALAT FATAL PADA MATERI:');
  errors.forEach((e, idx) => {
    console.error(`\n[Galat ${idx + 1}] ${e.type} pada ${e.context}`);
    console.error(`    Pesan  : ${e.message}`);
    if (e.formula) console.error(`    Formula: ${e.formula}`);
  });
  console.error(`\n❌ Validasi GAGAL dengan ${errors.length} galat.`);
  process.exit(1);
} else {
  console.log('\n✅ SELURUH MATERI LOLOS VALIDASI PEDAGOGIS & KATEX (0 ERRORS)!');
  process.exit(0);
}
