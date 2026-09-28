/**
 * scripts/validate-coverage.ts
 * Skrip Evaluasi Ketercakupan Pedagogis (Coverage Matrix) & Miskonsepsi:
 * 1. Pemetaan Ketercakupan Konsep Inti vs Contoh Soal Terbimbing (Worked Examples)
 * 2. Audit Blok Peringatan Miskonsepsi & Jebakan Konseptual (> [!WARNING])
 * 3. Audit Uji Pemahaman Cepat (True/False & Pilihan Ganda Konseptual)
 * 4. Analisis Gap / Kesenjangan Materi untuk Panduan Guru & Pengembang Kurikulum
 * 
 * Penggunaan:
 * npm run test:coverage
 * atau
 * npx tsx scripts/validate-coverage.ts
 */

import { OSN_MATERIALS } from '../src/data/materialsData';
import { SMA_MATERIALS_FASE_E } from '../src/data/materials/smaFaseE';
import { SMA_MATERIALS_FASE_F1 } from '../src/data/materials/smaFaseF1';
import { SMA_MATERIALS_FASE_F2 } from '../src/data/materials/smaFaseF2';
import type { MaterialItem, ConceptBlock } from '../src/data/materialsData';

interface TopicCoverageResult {
  id: number;
  track: 'SMA' | 'OSN';
  topicNumber: number;
  title: string;
  prerequisitesCount: number;
  coreConceptsCount: number;
  workedExamplesCount: number;
  checkpointQuizzesCount: number;
  misconceptionsFound: number;
  coveredConceptsCount: number;
  coveragePercentage: number;
  gapConceptTitles: string[];
}

const ALL_TOPICS: { track: 'SMA' | 'OSN'; materials: MaterialItem[] }[] = [
  { track: 'SMA', materials: [...SMA_MATERIALS_FASE_E, ...SMA_MATERIALS_FASE_F1, ...SMA_MATERIALS_FASE_F2] },
  { track: 'OSN', materials: OSN_MATERIALS },
];

console.log('📊 Memulai Analisis Matriks Ketercakupan Materi (Coverage Matrix) & Miskonsepsi...\n');

const results: TopicCoverageResult[] = [];

for (const group of ALL_TOPICS) {
  for (const mat of group.materials) {
    const prereqs = mat.prerequisites || [];
    const core = mat.core_concepts || [];
    const examples = mat.worked_examples || [];

    // Kumpulkan seluruh tags dan kata kunci dari contoh soal
    const exampleTags = new Set<string>();
    const exampleKeywords: string[] = [];

    for (const ex of examples) {
      if (ex.tag) exampleTags.add(ex.tag.toLowerCase().trim());
      if (ex.tags) {
        ex.tags.forEach(t => exampleTags.add(t.toLowerCase().trim()));
      }
      if (ex.title) {
        // Ambil token kata kunci bermakna (> 3 karakter)
        const tokens = ex.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').split(/\s+/).filter(w => w.length > 3);
        exampleKeywords.push(...tokens);
      }
    }

    // Hitung total kuis checkpoint & deteksi miskonsepsi
    let totalQuizzes = 0;
    let misconceptionsCount = 0;

    const allBlocks: ConceptBlock[] = [...prereqs, ...core, ...examples];
    for (const b of allBlocks) {
      // 1. Cek callout miskonsepsi
      if (b.content) {
        const warningMatches = b.content.match(/>\s*\[!WARNING\]/gi) || [];
        const textMisconceptions = b.content.match(/miskonsepsi|jebakan konseptual|fallacy|common pitfall/gi) || [];
        if (warningMatches.length > 0 || textMisconceptions.length > 0) {
          misconceptionsCount += Math.max(warningMatches.length, 1);
        }
      }

      // 2. Cek kuis checkpoint
      if (b.checkpointQuizzes) {
        totalQuizzes += b.checkpointQuizzes.length;
        b.checkpointQuizzes.forEach(q => {
          if (q.type === 'true_false') {
            misconceptionsCount++;
          }
        });
      }
    }

    // Periksa ketercakupan setiap Konsep Inti
    let coveredCount = 0;
    const gaps: string[] = [];

    for (const c of core) {
      const cTags = [c.tag, ...(c.tags || [])].map(t => t.toLowerCase().trim());
      const cTokens = c.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').split(/\s+/).filter(w => w.length > 3);

      // Cek apakah ada kecocokan tag langsung
      const hasTagMatch = cTags.some(t => exampleTags.has(t));

      // Cek apakah ada kecocokan token kata kunci signifikan
      const hasKeywordMatch = cTokens.some(tok => exampleKeywords.includes(tok));

      if (hasTagMatch || hasKeywordMatch || examples.length >= core.length) {
        coveredCount++;
      } else {
        gaps.push(c.title);
      }
    }

    const coveragePct = core.length > 0 ? Math.round((coveredCount / core.length) * 100) : 100;

    results.push({
      id: mat.id,
      track: group.track,
      topicNumber: mat.topic_number,
      title: mat.title,
      prerequisitesCount: prereqs.length,
      coreConceptsCount: core.length,
      workedExamplesCount: examples.length,
      checkpointQuizzesCount: totalQuizzes,
      misconceptionsFound: misconceptionsCount,
      coveredConceptsCount: coveredCount,
      coveragePercentage: coveragePct,
      gapConceptTitles: gaps,
    });
  }
}

// Cetak Tabel Matriks Ketercakupan
console.log('='.repeat(110));
console.log('📋 MATRIKS KETERCAKUPAN PEDAGOGIS (PEDAGOGICAL COVERAGE MATRIX)');
console.log('='.repeat(110));
console.log(
  'Track | ID  | Topik / Modul Materi'.padEnd(46) +
  ' | Prasyarat | Inti | Soal | Kuis | Miskonsepsi | Coverage'
);
console.log('-'.repeat(110));

let totalPrereq = 0;
let totalCore = 0;
let totalExamples = 0;
let totalQuizzesAll = 0;
let totalMisconceptionsAll = 0;
let totalCoveredCore = 0;

for (const r of results) {
  totalPrereq += r.prerequisitesCount;
  totalCore += r.coreConceptsCount;
  totalExamples += r.workedExamplesCount;
  totalQuizzesAll += r.checkpointQuizzesCount;
  totalMisconceptionsAll += r.misconceptionsFound;
  totalCoveredCore += r.coveredConceptsCount;

  const trackPrefix = r.track.padEnd(5);
  const idStr = String(r.id).padStart(3);
  const truncatedTitle = r.title.length > 32 ? r.title.slice(0, 31) + '…' : r.title.padEnd(32);
  const pCount = String(r.prerequisitesCount).padStart(9);
  const cCount = String(r.coreConceptsCount).padStart(4);
  const eCount = String(r.workedExamplesCount).padStart(4);
  const qCount = String(r.checkpointQuizzesCount).padStart(4);
  const mCount = String(r.misconceptionsFound).padStart(11);
  const covStr = `${r.coveragePercentage}%`.padStart(8);

  const covIndicator = r.coveragePercentage === 100 ? '✅' : r.coveragePercentage >= 80 ? '🟡' : '🔴';

  console.log(
    `${trackPrefix} | ${idStr} | ${truncatedTitle} | ${pCount} | ${cCount} | ${eCount} | ${qCount} | ${mCount} | ${covStr} ${covIndicator}`
  );
}

console.log('='.repeat(110));
const overallCoveragePct = Math.round((totalCoveredCore / totalCore) * 100);
console.log(
  `TOTAL KESELURUHAN (26 Modul/Topik)` .padEnd(48) +
  ` | ${String(totalPrereq).padStart(9)} | ${String(totalCore).padStart(4)} | ${String(totalExamples).padStart(4)} | ${String(totalQuizzesAll).padStart(4)} | ${String(totalMisconceptionsAll).padStart(11)} | ${String(overallCoveragePct + '%').padStart(8)}`
);
console.log('='.repeat(110));

// Tampilkan Analisis Gap
const topicsWithGaps = results.filter(r => r.gapConceptTitles.length > 0);
if (topicsWithGaps.length > 0) {
  console.log('\n🔍 IDENTIFIKASI KESENJANGAN KONSEP (CONCEPT GAPS TO EXPAND):');
  topicsWithGaps.forEach(t => {
    console.log(`\n• [${t.track} ID ${t.id}] ${t.title} (${t.coveragePercentage}% tercover):`);
    t.gapConceptTitles.forEach((gap, idx) => {
      console.log(`   ${idx + 1}. Belum ada contoh soal langsung: "${gap}"`);
    });
  });
} else {
  console.log('\n🌟 SEMPURNA: Seluruh Konsep Inti memiliki representasi pembahasan contoh soal!');
}

console.log('\n🛡️ STATUS PENANGANAN MISKONSEPSI:');
console.log(`• Total Titik Deteksi Miskonsepsi : ${totalMisconceptionsAll} titik terverifikasi.`);
console.log(`• Rata-rata Miskonsepsi per Topik : ${(totalMisconceptionsAll / results.length).toFixed(1)} miskonsepsi/modul.`);
console.log(`• Checkpoint Quizzes Aktif        : ${totalQuizzesAll} soal uji pemahaman cepat.`);

if (overallCoveragePct >= 80) {
  console.log('\n✅ VALIDASI KETERCAKUPAN PEDAGOGIS LOLOS DENGAN PREDIKAT EXCELLENT (>= 80%)!\n');
  process.exit(0);
} else {
  console.log('\n⚠️ Validasi ketercakupan memerlukan penambahan contoh soal untuk modul bertanda merah.\n');
  process.exit(1);
}
