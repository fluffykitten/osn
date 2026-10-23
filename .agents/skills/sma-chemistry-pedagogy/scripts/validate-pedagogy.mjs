#!/usr/bin/env node
/**
 * .agents/skills/sma-chemistry-pedagogy/scripts/validate-pedagogy.mjs
 * 
 * Linter & Validator Kepatuhan Arsitektur Pedagogis Modul Kimia Nasional (SMA/MA)
 * Versi 3.0: Adaptasi SaveMyExams Blueprint (Salman Madani, S.Pd.)
 * 
 * Penggunaan:
 *   node .agents/skills/sma-chemistry-pedagogy/scripts/validate-pedagogy.mjs [file] [--topic <id|number>]
 * 
 * Contoh:
 *   node .agents/skills/sma-chemistry-pedagogy/scripts/validate-pedagogy.mjs src/data/materials/sma/smaBab01.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load scope rules dictionary if exists
const scopeRulesPath = path.resolve(__dirname, '../references/scope-rules.json');
let scopeRules = { anthropomorphic_phrases: [], chapter_out_of_scope: {} };
if (fs.existsSync(scopeRulesPath)) {
  try {
    scopeRules = JSON.parse(fs.readFileSync(scopeRulesPath, 'utf-8'));
  } catch (err) {
    console.warn(`⚠️ Gagal memuat scope-rules.json: ${err.message}`);
  }
}

const args = process.argv.slice(2);
let targetPath = null;
let targetTopicFilter = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--topic' && args[i + 1]) {
    targetTopicFilter = args[i + 1];
    i++;
  } else if (!targetPath && !args[i].startsWith('--')) {
    targetPath = args[i];
  }
}

// Cari otomatis file materi modular di src/data/materials/sma/ jika ada
const smaModularDir = 'src/data/materials/sma';
const defaultFiles = [];

if (fs.existsSync(smaModularDir)) {
  const smaFiles = fs.readdirSync(smaModularDir)
    .filter(f => f.startsWith('smaBab') && f.endsWith('.ts'))
    .map(f => path.join(smaModularDir, f));
  defaultFiles.push(...smaFiles);
}

// Fallback ke file monolitik lama jika modular belum lengkap
const legacyFiles = [
  'src/data/materials/smaTopic101.ts',
  'src/data/materials/smaFaseE.ts',
  'src/data/materials/smaFaseF1.ts',
  'src/data/materials/smaFaseF2.ts',
];

for (const lf of legacyFiles) {
  if (fs.existsSync(lf) && !defaultFiles.includes(lf)) {
    defaultFiles.push(lf);
  }
}

const filesToCheck = targetPath ? [targetPath] : defaultFiles;

console.log('═'.repeat(74));
console.log('🏛️   VALIDATOR ARSITEKTUR PEDAGOGIS KIMIA NASIONAL (SMA/MA) — v3.0');
console.log('    Master Guideline: Salman Madani, S.Pd. (SaveMyExams Blueprint)');
console.log('═'.repeat(74));

let totalTopicsChecked = 0;
let totalErrors = 0;
let totalWarnings = 0;

/**
 * Ekstraksi blok teks dari file TypeScript materi SMA
 */
function parseTopicsFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File tidak ditemukan: ${filePath}`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const topics = [];

  // Cari blok material berdasar id dan topic_number (dengan toleransi kutip ganda/tunggal/tanpa kutip)
  const topicIdMatches = [...content.matchAll(/["']?id["']?\s*:\s*(\d+)\s*,[\s\S]*?["']?topic_number["']?\s*:\s*(\d+)\s*,[\s\S]*?["']?title["']?\s*:\s*['"`](.*?)['"`]/g)];

  for (let i = 0; i < topicIdMatches.length; i++) {
    const match = topicIdMatches[i];
    const id = match[1];
    const topicNumber = match[2];
    const title = match[3];

    if (targetTopicFilter && id !== targetTopicFilter && topicNumber !== targetTopicFilter) {
      continue;
    }

    const startIndex = match.index;
    const nextIndex = i + 1 < topicIdMatches.length ? topicIdMatches[i + 1].index : content.length;
    const topicRawSlice = content.slice(startIndex, nextIndex);

    // Ekstraksi content string dari prerequisites, core_concepts, worked_examples
    const contentBlockRegex = /content:\s*`([\s\S]*?)`/g;
    const blocks = [];
    let bMatch;
    while ((bMatch = contentBlockRegex.exec(topicRawSlice)) !== null) {
      blocks.push(bMatch[1]);
    }

    topics.push({
      file: filePath,
      id: Number(id),
      topic_number: Number(topicNumber),
      title,
      blocks,
      rawText: topicRawSlice,
    });
  }

  // Periksa apakah file mengimpor modular topic seperti smaTopic101.ts atau smaBab01.ts
  const importMatches = [...content.matchAll(/import\s*\{[^}]*SMA_(?:TOPIC_|BAB_)(\d+)[^}]*\}\s*from\s*['"](\.[^'"]+)['"]/g)];
  for (const imp of importMatches) {
    const importedId = imp[1];
    if (targetTopicFilter && importedId !== targetTopicFilter && targetTopicFilter !== '1') {
      continue;
    }
    let relPath = imp[2];
    if (!relPath.endsWith('.ts')) relPath += '.ts';
    const resolvedPath = path.resolve(path.dirname(filePath), relPath);
    if (fs.existsSync(resolvedPath)) {
      const importedTopics = parseTopicsFromFile(resolvedPath);
      for (const t of importedTopics) {
        if (!targetTopicFilter || String(t.id) === targetTopicFilter || String(t.topic_number) === targetTopicFilter) {
          if (!topics.some(existing => existing.id === t.id)) {
            topics.push(t);
          }
        }
      }
    }
  }

  return topics;
}

/**
 * Hitung perkiraan jumlah kata bersih (menghapus tag SVG dan LaTeX)
 */
function countCleanWords(text) {
  const stripped = text
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$]*?\$/g, ' ')
    .replace(/[#*`_>|\[\]\(\)]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (!stripped) return 0;
  return stripped.split(' ').filter(w => w.length > 0).length;
}

/**
 * Validasi Micro-Loop per Subbab
 */
function validateMicroLoop(blockText, blockIdx, topic) {
  const issues = [];

  // Periksa apakah ini adalah blok subbab (memiliki indikasi subbab seperti "Subbab", "1.", "2.", dsb.)
  const hasSubbabIndicator = /Subbab\s*\d+\.\d+|####\s*\d+\.\s*Intuisi|###\s*\d+\.\d+/i.test(blockText);
  if (!hasSubbabIndicator) {
    return issues; // Lewati jika bukan blok subbab (misal blok pengantar singkat atau penutup bab)
  }

  // 1. Cek Tahap Intuisi
  const hasIntuisi = /(Intuisi.*Partikel|####\s*1\.\s*Intuisi|Model Partikel|Tingkat Partikel)/i.test(blockText);
  if (!hasIntuisi) {
    issues.push({
      type: 'ERROR',
      rule: 'Micro-Loop: Tahap Intuisi Wajib',
      msg: `Subbab tidak memiliki tahap "#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel".`,
    });
  }

  // 1b. Cek Pertanyaan Pemantik di akhir Intuisi
  const intuisiMatch = blockText.match(/####\s*1\.\s*Intuisi[\s\S]*?(?=####\s*2\.\s*Formalisasi|$)/i);
  if (intuisiMatch) {
    const intuisiText = intuisiMatch[0];
    const hasQuestionPrompt = /\?[\s\S]{0,120}$/m.test(intuisiText.trim()) || /(mengapa|bagaimana|apakah).*?\?/i.test(intuisiText);
    if (!hasQuestionPrompt) {
      issues.push({
        type: 'WARNING',
        rule: 'Micro-Loop: Pertanyaan Pemantik Disarankan',
        msg: `Tahap Intuisi disarankan diakhiri dengan 1 kalimat pertanyaan pemantik menuju tahap Formalisasi.`,
      });
    }

    // 1c. Cek Rujukan Gambar sebelum Tag SVG
    const svgIndex = intuisiText.indexOf('<svg');
    if (svgIndex !== -1) {
      const textBeforeSvg = intuisiText.slice(0, svgIndex);
      const hasPreRef = /Gambar\s*\d+\.\d+/i.test(textBeforeSvg);
      if (!hasPreRef) {
        issues.push({
          type: 'WARNING',
          rule: 'Multimedia Principle: Rujukan Gambar Sebelum SVG',
          msg: `Diagram SVG harus dirujuk secara eksplisit di teks sebelum tag <svg> (misal: "Perhatikan skema pada **Gambar x.y** berikut:").`,
        });
      }
    }
  }

  // 2. Cek Tahap Formalisasi
  const hasFormalisasi = /(Formalisasi.*Matematis|####\s*2\.\s*Formalisasi|Formalisasi Konsep)/i.test(blockText);
  if (!hasFormalisasi) {
    issues.push({
      type: 'ERROR',
      rule: 'Micro-Loop: Tahap Formalisasi Wajib',
      msg: `Subbab tidak memiliki tahap "#### 2. Formalisasi: Konsep Baku & Hubungan Matematis".`,
    });
  }

  // 2a. Kotak Syarat Batas & Asumsi
  const hasSyaratBatas = />\s*\[!(SYARAT_BATAS|ASSUMPTION)\]|###.*Syarat Batas/i.test(blockText);
  if (!hasSyaratBatas) {
    issues.push({
      type: 'ERROR',
      rule: 'Kotak 1: Syarat Batas & Asumsi Wajib',
      msg: `Tahap Formalisasi wajib menyertakan callout "> [!SYARAT_BATAS]" untuk menjelaskan batasan keberlakuan rumus di tingkat SMA.`,
    });
  }

  // 2b. Makna Fisis Rumus
  const hasFormula = /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]/.test(blockText);
  if (hasFormula) {
    const hasMaknaFisis = /(Makna Fisis|makna fisis|arti fisis)/i.test(blockText);
    if (!hasMaknaFisis) {
      issues.push({
        type: 'WARNING',
        rule: 'Formalisasi: Makna Fisis Rumus Wajib',
        msg: `Setiap penyajian rumus matematis disarankan disertai 1-2 kalimat "Makna Fisis Rumus" tepat di bawahnya.`,
      });
    }
  }

  // 2c. Uji Konsep Kualitatif
  const hasUjiKonsep = /(Uji Konsep|Uji Konsep Kualitatif|Pertanyaan Konseptual)/i.test(blockText);
  if (!hasUjiKonsep) {
    issues.push({
      type: 'ERROR',
      rule: 'Micro-Loop: Uji Konsep Kualitatif Wajib',
      msg: `Tahap Formalisasi wajib dilengkapi minimal 1 Uji Konsep Kualitatif tanpa perhitungan rumit.`,
    });
  }

  // 3. Cek Tahap Taktik Soal
  const hasTaktikSoal = /(Taktik Soal.*Logika|####\s*3\.\s*Taktik Soal|Taktik Pemecahan)/i.test(blockText);
  if (!hasTaktikSoal) {
    issues.push({
      type: 'ERROR',
      rule: 'Micro-Loop: Tahap Taktik Soal Wajib',
      msg: `Subbab tidak memiliki tahap "#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika".`,
    });
  }

  // 3a. Soal Contoh (Worked Example)
  const hasSoalContoh = /(Soal Contoh|Contoh Soal|Worked Example)/i.test(blockText);
  if (!hasSoalContoh) {
    issues.push({
      type: 'ERROR',
      rule: 'Micro-Loop: Soal Contoh (Worked Example) Wajib',
      msg: `Tahap Taktik Soal wajib menyediakan Soal Contoh terstruktur dengan pembahasan langkah demi langkah.`,
    });
  }

  // 3b. Kotak Titik Rawan Kesalahan (Pitfalls)
  const hasTitikRawan = />\s*\[!(TITIK_RAWAN|PITFALL)\]|Titik Rawan Kesalahan/i.test(blockText);
  if (!hasTitikRawan) {
    issues.push({
      type: 'ERROR',
      rule: 'Kotak 2: Titik Rawan Kesalahan Wajib',
      msg: `Tahap Taktik Soal wajib menyertakan callout "> [!TITIK_RAWAN]" untuk memperingatkan jebakan konsep/satuan umum.`,
    });
  }

  // 3c. Pemeriksaan Logika (Sanity Check) & Koneksi
  const hasSanityCheck = />\s*\[!(PEMERIKSAAN_LOGIKA|SANITY)\]|Pemeriksaan Logika/i.test(blockText);
  if (!hasSanityCheck) {
    issues.push({
      type: 'ERROR',
      rule: 'Kotak 3: Pemeriksaan Logika (Sanity Check) Wajib',
      msg: `Tahap Taktik Soal wajib mengajarkan "Pemeriksaan Logika (Sanity Check) & Koneksi" (> [!PEMERIKSAAN_LOGIKA]).`,
    });
  }

  // 3d. Latihan Terbimbing
  const hasLatihanTerbimbing = /(Latihan Terbimbing|Latihan Mandiri|Soal Latihan).*Kunci Jawaban/is.test(blockText);
  if (!hasLatihanTerbimbing) {
    issues.push({
      type: 'WARNING',
      rule: 'Micro-Loop: Latihan Terbimbing Disarankan',
      msg: `Subbab disarankan memuat Latihan Terbimbing yang disertai Kunci Jawaban Akhir.`,
    });
  }

  // 4. Audit Anggaran Kognitif (Word Count — Informational / Warning)
  const wordCount = countCleanWords(blockText);
  if (wordCount > 1100) {
    issues.push({
      type: 'WARNING',
      rule: 'Cognitive Budget: Teks Subbab Terlalu Panjang',
      msg: `Jumlah kata subbab ini (${wordCount} kata) melebihi batas rekomendasi SaveMyExams (600–900 kata, maks 1.000 kata). Pertimbangkan untuk memadatkan teks.`,
    });
  } else if (wordCount < 450) {
    issues.push({
      type: 'WARNING',
      rule: 'Cognitive Budget: Teks Subbab Terlalu Singkat',
      msg: `Jumlah kata subbab ini (${wordCount} kata) di bawah target rekomendasi SaveMyExams (600–900 kata). Pastikan kedalaman konsep mencukupi.`,
    });
  }

  // 5. Audit Frasa Antropomorfik Terlarang
  if (scopeRules.anthropomorphic_phrases && scopeRules.anthropomorphic_phrases.length > 0) {
    for (const phrase of scopeRules.anthropomorphic_phrases) {
      if (blockText.toLowerCase().includes(phrase.toLowerCase())) {
        issues.push({
          type: 'ERROR',
          rule: 'Pedagogy Guard: Bahasa Antropomorfik Terlarang',
          msg: `Ditemukan perumpamaan antropomorfik "${phrase}". Ganti dengan penjelasan fisis berbasis kestabilan energi atau gaya elektrostatik.`,
        });
      }
    }
  }

  // 6. Audit Out-of-Scope Terlarang Bab
  const chapterNumber = String(topic.topic_number);
  const outOfScopeList = scopeRules.chapter_out_of_scope ? scopeRules.chapter_out_of_scope[chapterNumber] : null;
  if (outOfScopeList) {
    for (const oosTerm of outOfScopeList) {
      const termRegex = new RegExp(`\\b${oosTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (termRegex.test(blockText)) {
        issues.push({
          type: 'ERROR',
          rule: `Scope Guard: Topik Terlarang (Out-of-Scope) Bab ${chapterNumber}`,
          msg: `Ditemukan istilah out-of-scope "${oosTerm}" yang dilarang dibahas pada Bab ${chapterNumber} SMA.`,
        });
      }
    }
  }

  return issues;
}

/**
 * Validasi Macro-Loop Penutup Bab
 */
function validateMacroLoop(allBlocksText, topic) {
  const issues = [];

  // 1. Pengayaan Inkuiri & Kontekstual
  const hasInkuiri = /(Pengayaan Inkuiri|Literasi Sains|Studi Kasus Kontekstual|Transisi Energi)/i.test(allBlocksText);
  if (!hasInkuiri) {
    issues.push({
      type: 'ERROR',
      rule: 'Macro-Loop: Pengayaan Inkuiri Wajib',
      msg: `Bab wajib memuat satu studi kasus "Pengayaan Inkuiri & Kontekstual (Literasi Sains)" berbasis data riil.`,
    });
  }

  // 2. Ringkasan Cepat & Peta Keputusan
  const hasRingkasanCepat = /(Ringkasan Cepat|Quick Reference|Tabel Komparasi|Peta Alur Keputusan|Decision Flowchart)/i.test(allBlocksText);
  if (!hasRingkasanCepat) {
    issues.push({
      type: 'ERROR',
      rule: 'Macro-Loop: Ringkasan Cepat Wajib',
      msg: `Bab wajib memuat "Ringkasan Cepat (Quick Reference)" dengan Tabel Komparasi dan/atau Decision Flowchart.`,
    });
  }

  // 3. Evaluasi Mandiri Berjenjang (Tiered Problem Set)
  const hasTieredProblems = /Tingkat I.*Tingkat II.*Tingkat III|Tingkat 1.*Tingkat 2.*Tingkat 3|Fondasi.*Integrasi.*Penalaran Lanjut/is.test(allBlocksText);
  if (!hasTieredProblems) {
    issues.push({
      type: 'ERROR',
      rule: 'Macro-Loop: Evaluasi Mandiri Berjenjang Wajib',
      msg: `Bab wajib menyediakan paket soal akhir bab berjenjang 3 tingkat: Tingkat I (Fondasi), Tingkat II (Integrasi), dan Tingkat III (Penalaran Lanjut/HOTS/SNBT).`,
    });
  }

  return issues;
}

/**
 * Validasi Notasi KaTeX & IUPAC
 */
function validateNotationAndKaTeX(text) {
  const issues = [];

  // 1. Delimiter balance ($ dan $$)
  const doubleDollarCount = (text.match(/\$\$/g) || []).length;
  if (doubleDollarCount % 2 !== 0) {
    issues.push({
      type: 'ERROR',
      rule: 'KaTeX Syntax: Unbalanced Display Math Delimiter ($$)',
      msg: `Ditemukan jumlah tanda "$$" ganjil (${doubleDollarCount}). Ada blok matematika yang tidak ditutup.`,
    });
  }

  // Cek single dollar excluding display math
  const textWithoutDisplay = text.replace(/\$\$[\s\S]*?\$\$/g, '');
  const singleDollarMatches = textWithoutDisplay.match(/(?<!\\)\$/g) || [];
  if (singleDollarMatches.length % 2 !== 0) {
    issues.push({
      type: 'WARNING',
      rule: 'KaTeX Syntax: Potential Unbalanced Inline Math ($)',
      msg: `Terdapat jumlah tanda "$" ganjil (${singleDollarMatches.length}) di luar blok $$. Periksa apakah ada simbol dolar bocor.`,
    });
  }

  // 2. IUPAC Notation Lints
  // Muatan terbalik: misal Fe+3 atau SO4-2 (seharusnya Fe3+ atau SO4^2-)
  const badChargeMatch = text.match(/\\ce\{[^}]*?[a-zA-Z]+(\+[2-9]|-[2-9])[^}]*?\}/);
  if (badChargeMatch) {
    issues.push({
      type: 'WARNING',
      rule: 'IUPAC Notation: Muatan Ion Terbalik',
      msg: `Ditemukan penulisan muatan ion terbalik "${badChargeMatch[0]}". Konvensi IUPAC: angka sebelum tanda muatan (contoh: Fe^{3+}, bukan Fe^{+3}).`,
    });
  }

  // 3. Diagram Inline & Caption
  const svgMatches = text.match(/<svg[\s\S]*?<\/svg>/g) || [];
  for (const svg of svgMatches) {
    // Periksa atribut data-diagram
    const hasDataDiagram = /data-diagram\s*=\s*['"][^'"]+['"]/i.test(svg);
    if (!hasDataDiagram) {
      issues.push({
        type: 'WARNING',
        rule: 'SVG Standard: data-diagram Attribute Wajib',
        msg: `Ditemukan tag <svg> tanpa atribut data-diagram (wajib berformat kebab-case, misal data-diagram="sma-b01-klasifikasi-materi").`,
      });
    }

    // Periksa apakah ada caption "Gambar x.y"
    const hasCaption = /Gambar\s*\d+\.\d+/i.test(text);
    if (!hasCaption) {
      issues.push({
        type: 'WARNING',
        rule: 'Multimedia Principle: Caption Gambar Wajib',
        msg: `Ditemukan diagram SVG tanpa caption penomoran berjenjang baku ("Gambar x.y: ...").`,
      });
    }
  }

  return issues;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROSES VALIDASI
// ─────────────────────────────────────────────────────────────────────────────

for (const file of filesToCheck) {
  console.log(`\n📂 Memeriksa berkas: ${file}`);
  const topics = parseTopicsFromFile(file);

  if (topics.length === 0) {
    console.log(`   ℹ️  Tidak ada topik yang cocok dengan filter di file ini.`);
    continue;
  }

  for (const topic of topics) {
    totalTopicsChecked++;
    console.log(`\n🔹 [Bab/Topik ${topic.topic_number} (ID ${topic.id})] ${topic.title}`);
    
    let topicErrors = 0;
    let topicWarnings = 0;

    const fullTopicText = topic.blocks.join('\n\n');

    // 1. Validasi Micro-Loop di setiap blok subbab
    topic.blocks.forEach((block, idx) => {
      const blockIssues = validateMicroLoop(block, idx, topic);
      for (const issue of blockIssues) {
        if (issue.type === 'ERROR') {
          topicErrors++;
          console.log(`   ❌ [ERROR] ${issue.rule} (Blok ${idx + 1}):`);
          console.log(`      ${issue.msg}`);
        } else {
          topicWarnings++;
          console.log(`   ⚠️  [WARN]  ${issue.rule} (Blok ${idx + 1}):`);
          console.log(`      ${issue.msg}`);
        }
      }
    });

    // 2. Validasi Macro-Loop di keseluruhan topik
    const macroIssues = validateMacroLoop(fullTopicText, topic);
    for (const issue of macroIssues) {
      if (issue.type === 'ERROR') {
        topicErrors++;
        console.log(`   ❌ [ERROR] ${issue.rule}:`);
        console.log(`      ${issue.msg}`);
      } else {
        topicWarnings++;
        console.log(`   ⚠️  [WARN]  ${issue.rule}:`);
        console.log(`      ${issue.msg}`);
      }
    }

    // 3. Validasi KaTeX & IUPAC
    const notationIssues = validateNotationAndKaTeX(fullTopicText);
    for (const issue of notationIssues) {
      if (issue.type === 'ERROR') {
        topicErrors++;
        console.log(`   ❌ [ERROR] ${issue.rule}:`);
        console.log(`      ${issue.msg}`);
      } else {
        topicWarnings++;
        console.log(`   ⚠️  [WARN]  ${issue.rule}:`);
        console.log(`      ${issue.msg}`);
      }
    }

    totalErrors += topicErrors;
    totalWarnings += topicWarnings;

    if (topicErrors === 0 && topicWarnings === 0) {
      console.log(`   ✅ Sempurna: Memenuhi seluruh standar pedagogis Kurikulum Nasional.`);
    } else {
      console.log(`   📊 Ringkasan Bab/Topik: ${topicErrors} Error, ${topicWarnings} Warning.`);
    }
  }
}

console.log('\n' + '═'.repeat(74));
console.log(`🏁 HASIL AKHIR AUDIT:`);
console.log(`   • Total Topik/Bab Diperiksa: ${totalTopicsChecked}`);
console.log(`   • Total Kesalahan (ERROR)   : ${totalErrors}`);
console.log(`   • Total Peringatan (WARN)   : ${totalWarnings}`);
console.log('═'.repeat(74));

if (totalErrors > 0) {
  console.log(`\n❌ VALIDASI GAGAL: Harap perbaiki seluruh pelanggaran struktur ERROR di atas.`);
  process.exit(1);
} else {
  console.log(`\n🎉 VALIDASI BERHASIL: Seluruh topik yang diperiksa lolos standar pedagogis!`);
  process.exit(0);
}
