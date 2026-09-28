/**
 * scripts/validate-questions.ts
 * Skrip QA & Jaminan Mutu Otomatis untuk Bank Soal (SMA & Olimpiade Kimia):
 * 1. Validasi Keunikan ID & Metadata Soal (title, difficulty, pillar, topic)
 * 2. Validasi Integritas Pilihan Ganda & Kunci Jawaban (A-E, format expected_final_answer)
 * 3. Validasi Rubrik Pembahasan & Sub-soal (solution_rubric, sub_questions)
 * 4. Pengujian KaTeX & mhchem pada question_text, sub-questions, dan solution_rubric
 * 5. Pengecekan Keseimbangan Delimiter Math ($ dan $$)
 * 
 * Penggunaan:
 * npm run test:questions
 * atau
 * npx tsx scripts/validate-questions.ts
 */

import katex from 'katex';
import 'katex/dist/contrib/mhchem.mjs';

import { BENCHMARK_QUESTIONS } from '../src/data/syllabusData';
import { SMA_CHEMISTRY_QUESTIONS } from '../src/data/smaQuestionsData';
import { OSK_CHEMISTRY_QUESTIONS } from '../src/data/oskQuestionsData';
import { OSP_CHEMISTRY_QUESTIONS } from '../src/data/ospQuestionsData';
import { OSN_CHEMISTRY_QUESTIONS } from '../src/data/osnQuestionsData';
import { ICHO_CHEMISTRY_QUESTIONS } from '../src/data/ichoQuestionsData';
import type { Question } from '../src/types/database';

console.log('🧪 Memulai Pengujian QA Bank Soal Kimia (SMA, OSK, OSP, OSN, IChO)...\n');

interface DatasetGroup {
  name: string;
  category: 'SMA' | 'OSN';
  questions: Question[];
}

const DATASETS: DatasetGroup[] = [
  { name: 'OSN Benchmark (10 Pilar)', category: 'OSN', questions: BENCHMARK_QUESTIONS },
  { name: 'Kimia SMA (Fase E & F, 16 Topik)', category: 'SMA', questions: SMA_CHEMISTRY_QUESTIONS },
  { name: 'OSK Kimia (Tingkat Kota/Kabupaten)', category: 'OSN', questions: OSK_CHEMISTRY_QUESTIONS },
  { name: 'OSP Kimia (Tingkat Provinsi)', category: 'OSN', questions: OSP_CHEMISTRY_QUESTIONS },
  { name: 'OSN Kimia (Tingkat Nasional)', category: 'OSN', questions: OSN_CHEMISTRY_QUESTIONS },
  { name: 'IChO Kimia (Taraf Internasional)', category: 'OSN', questions: ICHO_CHEMISTRY_QUESTIONS },
];

let totalQuestionsCount = 0;
let totalMathFormulas = 0;
let totalMcqQuestions = 0;
let totalStructuredQuestions = 0;

const errors: { type: string; context: string; message: string; formula?: string }[] = [];
const warnings: { type: string; context: string; message: string; snippet?: string }[] = [];
const seenIds = new Map<number, string>();

function normalizeFormula(formula: string): string {
  let f = formula
    // Perbaiki karakter escape JS yang tidak sengaja terinterpretasi sebagai ASCII control byte
    .replace(/\x08eta/g, '\\beta')
    .replace(/\x08ullet/g, '\\bullet')
    .replace(/\x08/g, '')
    .replace(/\x0b/g, '\\v')
    .replace(/\x0c/g, '\\f')
    // Perbaiki double superscript pada konfigurasi orbital pi*
    .replace(/\\pi\^\*_\{([^}]+)\}\^([0-9]+)/g, '{\\pi^*_{$1}}^{$2}')
    // Perbaiki ce{} yang tertulis tanpa awalan backslash ($ce{...}$)
    .replace(/(?<!\\)\bce\{/g, '\\ce{')
    // Perbaiki \ce{} yang tidak sengaja berada di dalam blok \text{}
    .replace(/\\text\{([^{}]*?)\\ce\{([^{}]*?)\}([^{}]*?)\}/g, '\\text{$1}\\;\\ce{$2}\\;\\text{$3}')
    // Perbaiki notasi ikatan rangkap tiga # yang membingungkan parser mhchem
    .replace(/\\ce\{([A-Za-z0-9_-]+)-([A-Za-z0-9_-]+)#([A-Za-z0-9_-]+)\}/g, '\\ce{$1-$2}\\equiv\\ce{$3}')
    .replace(/\\ce\{([A-Za-z0-9_-]+)#([A-Za-z0-9_-]+)\}/g, '\\ce{$1}\\equiv\\ce{$2}')
    .replace(/#\\ce\{/g, '\\equiv \\ce{')
    .replace(/(?<!\\)%/g, '\\%')
    .replace(/\\\\([a-zA-Z]+)/g, '\\$1');
  return f;
}

function testKaTeX(formula: string, isDisplay: boolean, context: string) {
  totalMathFormulas++;
  const safeFormula = normalizeFormula(formula);
  try {
    katex.renderToString(safeFormula, {
      displayMode: isDisplay,
      throwOnError: true,
      strict: false,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    errors.push({
      type: 'KaTeX Syntax Error',
      context,
      formula: formula.length > 80 ? formula.slice(0, 80) + '...' : formula,
      message: errorMsg,
    });
  }
}

function scanMathContent(text: string, context: string) {
  if (!text || typeof text !== 'string') return;

  // 1. Cek Display Math: $$ ... $$
  const displayParts = text.split('$$');
  if (displayParts.length % 2 === 0) {
    errors.push({
      type: 'Unbalanced Display Math Delimiter ($$)',
      context,
      message: 'Jumlah tanda $$ ganjil, terdapat blok matematika display yang tidak ditutup.',
    });
  }

  for (let i = 1; i < displayParts.length; i += 2) {
    const formula = displayParts[i].trim();
    if (formula) {
      testKaTeX(formula, true, `${context} -> Display Math`);
    }
  }

  // 2. Cek Inline Math: $ ... $
  for (let i = 0; i < displayParts.length; i += 2) {
    const chunk = displayParts[i];
    const tokens = chunk.split(/(?<!\\)\$/);
    if (tokens.length % 2 === 0) {
      warnings.push({
        type: 'Potential Unbalanced Inline Math ($)',
        context,
        message: 'Terdapat tanda $ ganjil pada teks soal/rubrik.',
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

  // 3. Cek Tag SVG jika ada
  const svgOpenCount = (text.match(/<svg\b[^>]*>/gi) || []).length;
  const svgCloseCount = (text.match(/<\/svg>/gi) || []).length;
  if (svgOpenCount > 0 || svgCloseCount > 0) {
    if (svgOpenCount !== svgCloseCount) {
      errors.push({
        type: 'Unmatched SVG Tag',
        context,
        message: `Jumlah <svg> (${svgOpenCount}) tidak sama dengan </svg> (${svgCloseCount}).`,
      });
    }
  }
}

function validateQuestion(q: Question, groupName: string) {
  totalQuestionsCount++;
  const context = `[${groupName}] Soal ID #${q.id} ("${q.title || 'Tanpa Judul'}")`;

  // 1. Keunikan ID
  if (!q.id) {
    errors.push({ type: 'Missing ID', context, message: 'Soal tidak memiliki properti id.' });
  } else if (seenIds.has(q.id)) {
    errors.push({
      type: 'Duplicate ID',
      context,
      message: `ID #${q.id} telah digunakan sebelumnya di ${seenIds.get(q.id)}.`,
    });
  } else {
    seenIds.set(q.id, groupName);
  }

  // 2. Metadata Dasar
  if (!q.title || q.title.trim().length === 0) {
    warnings.push({ type: 'Missing Title', context, message: 'Judul soal (title) kosong.' });
  }
  if (!q.difficulty) {
    errors.push({ type: 'Missing Difficulty', context, message: 'Tingkat kesulitan (difficulty) kosong.' });
  }
  if (!q.question_text || q.question_text.trim().length === 0) {
    errors.push({ type: 'Missing Question Text', context, message: 'Teks soal (question_text) kosong.' });
  } else {
    scanMathContent(q.question_text, `${context} -> question_text`);
  }

  // 3. Rubrik Pembahasan
  if (!q.solution_rubric || q.solution_rubric.trim().length === 0) {
    warnings.push({ type: 'Missing Solution Rubric', context, message: 'Pembahasan (solution_rubric) kosong.' });
  } else {
    scanMathContent(q.solution_rubric, `${context} -> solution_rubric`);
  }

  // 4. Deteksi Gaya Soal (MCQ vs Uraian)
  const isMcqStyle = q.question_style === 'mcq' || /(^|\n)\s*[A-E]\.\s+/m.test(q.question_text);
  if (isMcqStyle) {
    totalMcqQuestions++;
    // Validasi Pilihan Jawaban
    const optionMatches = [...q.question_text.matchAll(/(?:^|\n)\s*([A-E])\.\s+([^\n]+)/g)];
    const optionLetters = optionMatches.map(m => m[1]);

    if (optionLetters.length > 0 && optionLetters.length < 4) {
      warnings.push({
        type: 'Incomplete MCQ Options',
        context,
        message: `Hanya ditemukan ${optionLetters.length} opsi (${optionLetters.join(', ')}). Standar SMA/Olimpiade minimal 4 atau 5 opsi.`,
      });
    }

    // Validasi Kunci Jawaban
    if (!q.expected_final_answer || q.expected_final_answer.trim().length === 0) {
      warnings.push({
        type: 'Missing Expected Final Answer',
        context,
        message: 'Soal terdeteksi bertipe pilihan ganda namun expected_final_answer tidak terisi.',
      });
    } else {
      const cleanAnswer = q.expected_final_answer.trim().toUpperCase();
      const firstChar = cleanAnswer.charAt(0);
      if (['A', 'B', 'C', 'D', 'E'].includes(firstChar)) {
        if (optionLetters.length > 0 && !optionLetters.includes(firstChar)) {
          errors.push({
            type: 'Invalid Expected Answer',
            context,
            message: `Kunci jawaban '${cleanAnswer}' tidak ditemukan di antara opsi yang tersedia (${optionLetters.join(', ')}).`,
          });
        }
      }
    }
  } else {
    totalStructuredQuestions++;
  }

  // 5. Validasi Sub-soal jika ada
  if (q.sub_questions && Array.isArray(q.sub_questions)) {
    q.sub_questions.forEach((sub, sIdx) => {
      const subContext = `${context} -> SubQuestion[${sub.label || sIdx}]`;
      if (!sub.question_text) {
        errors.push({ type: 'Missing SubQuestion Text', context: subContext, message: 'Teks sub-soal kosong.' });
      } else {
        scanMathContent(sub.question_text, `${subContext} -> question_text`);
      }
      if (sub.rubric) {
        scanMathContent(sub.rubric, `${subContext} -> rubric`);
      }
      if (typeof sub.points !== 'number' || sub.points < 0) {
        warnings.push({ type: 'Invalid SubQuestion Points', context: subContext, message: `Poin sub-soal tidak valid: ${sub.points}` });
      }
    });
  }
}

// Eksekusi pemeriksaan seluruh dataset
for (const ds of DATASETS) {
  console.log(`📌 Memeriksa ${ds.name} (${ds.questions.length} butir soal)...`);
  for (const q of ds.questions) {
    validateQuestion(q, ds.name);
  }
}

console.log('\n' + '='.repeat(65));
console.log('📊 LAPORAN JAMINAN MUTU BANK SOAL KIMIA (QUESTION BANK QA)');
console.log('='.repeat(65));
console.log(`• Total Soal Diperiksa             : ${totalQuestionsCount}`);
console.log(`• Soal Pilihan Ganda (MCQ)         : ${totalMcqQuestions}`);
console.log(`• Soal Uraian / Terstruktur        : ${totalStructuredQuestions}`);
console.log(`• Total Formula KaTeX Terverifikasi: ${totalMathFormulas}`);
console.log(`• Total Galat Kritis (Fatal Errors): ${errors.length}`);
console.log(`• Total Catatan / Warnings         : ${warnings.length}`);
console.log('='.repeat(65));

// Group errors by dataset
const errorsByDataset: Record<string, typeof errors> = {};
for (const e of errors) {
  const match = e.context.match(/^\[(.*?)\]/);
  const ds = match ? match[1] : 'Lainnya';
  if (!errorsByDataset[ds]) errorsByDataset[ds] = [];
  errorsByDataset[ds].push(e);
}

console.log('\n📁 Rincian Galat per Kategori Bank Soal:');
for (const [ds, errList] of Object.entries(errorsByDataset)) {
  console.log(`  - ${ds.padEnd(40)}: ${errList.length} galat`);
}

if (warnings.length > 0 && warnings.length <= 10) {
  console.log('\n⚠️  Daftar Peringatan Kualitas (Warnings):');
  warnings.slice(0, 10).forEach((w, idx) => {
    console.log(` [${idx + 1}] [${w.type}] ${w.context}: ${w.message}`);
  });
}

if (errors.length > 0) {
  console.error(`\n❌ Menampilkan 10 contoh galat pertama dari total ${errors.length} galat:`);
  errors.slice(0, 10).forEach((e, idx) => {
    console.error(`\n[Galat ${idx + 1}] [${e.type}] pada ${e.context}`);
    console.error(`    Pesan  : ${e.message}`);
    if (e.formula) console.error(`    Formula: ${e.formula}`);
  });
  console.error(`\n❌ Validasi Bank Soal GAGAL dengan ${errors.length} galat.`);
  process.exit(1);
} else {
  console.log('\n✅ SELURUH BANK SOAL LOLOS VALIDASI KA TEX & INTEGRITAS JAWABAN (0 ERRORS)!');
  process.exit(0);
}

