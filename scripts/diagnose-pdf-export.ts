import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { materialPdfExportService } from '../src/services/materialPdfExportService.ts';
import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { SMA_MATERIALS } from '../src/data/smaMaterialsData.ts';
import { IGCSE_MATERIALS } from '../src/data/igcseMaterialsData.ts';

interface DiagnosticResult {
  id: number;
  title: string;
  category: string;
  source: 'OSN' | 'SMA' | 'IGCSE';
  htmlLength: number;
  katexErrors: string[];
  unrenderedPlaceholders: string[];
  rawMarkdownArtifacts: {
    unparsedHeadings: number;
    unparsedCallouts: number;
    unparsedTables: number;
    unparsedMarkdownBold: number;
    unparsedLists: number;
    unparsedQuotes: number;
  };
  tailwindResiduals: {
    unconvertedCallouts: number;
    unconvertedTables: number;
    otherTailwindClasses: number;
  };
  svgCount: number;
  svgIssues: string[];
  tableCount: number;
  smeTableCount: number;
  smeTipBoxCount: number;
  orderedListCount: number;
  footerLabels: string[];
}

const allMaterials = [
  ...OSN_MATERIALS.map(m => ({ ...m, _source: 'OSN' as const })),
  ...SMA_MATERIALS.map(m => ({ ...m, _source: 'SMA' as const })),
  ...IGCSE_MATERIALS.map(m => ({ ...m, _source: 'IGCSE' as const })),
];

console.log(`======================================================================`);
console.log(`🔬 Memulai Diagnosis Komprehensif Ekspor PDF Materi (Total: ${allMaterials.length} Materi)`);
console.log(`======================================================================\n`);

const results: DiagnosticResult[] = [];
const outputDir = path.resolve('temp_pdf_test');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (const material of allMaterials) {
  const html = materialPdfExportService.generateMaterialHtml(material, {
    includeYourNotesMargin: true,
    includeWorkedExamples: true,
    includeCheckpoints: true,
  });

  // 1. KaTeX error spans
  const katexErrors: string[] = [];
  const katexErrorMatches = html.match(/class="katex-error"[^>]*title="([^"]*)"/g) || [];
  for (const m of katexErrorMatches) {
    const titleMatch = m.match(/title="([^"]*)"/);
    if (titleMatch) katexErrors.push(titleMatch[1]);
  }

  // 2. Unrendered placeholders like ___FORMULA_MATH_ or ___PROTECTED_SVG_
  const unrenderedPlaceholders: string[] = [];
  const formulaPlaceholders = html.match(/___FORMULA_MATH_\d+___/g) || [];
  const svgPlaceholders = html.match(/___PROTECTED_SVG_\d+___/g) || [];
  unrenderedPlaceholders.push(...formulaPlaceholders, ...svgPlaceholders);

  // 3. Raw Markdown artifacts
  // Heading artifacts (e.g. # Heading or ### Heading not wrapped in <h*>)
  // Look for text nodes starting with #
  const unparsedHeadings = (html.match(/(?:>|\n)\s*#{1,6}\s+[^\n<]+/g) || []).length;
  const unparsedCallouts = (html.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|INFO|DANGER)\]/gi) || []).length;
  const unparsedTables = (html.match(/\|[-:\s|]{3,}\|/g) || []).length;
  const unparsedMarkdownBold = (html.match(/(?<!<[^>]*)\*\*[^*<]+\*\*/g) || []).length;
  const unparsedLists = (html.match(/(?:<p[^>]*>|\n)\s*[-*•]\s+[^\n<]+/g) || []).length;
  const unparsedQuotes = (html.match(/(?:<p[^>]*>|\n)\s*>\s+[^\n<]+/g) || []).length;

  // 4. Tailwind residuals (unconverted callouts or tables)
  // Check for callouts that did NOT get transformed into .sme-examiner-tip-box
  const unconvertedCallouts = (html.match(/<div class="my-4 p-4 rounded-2xl border border-l-4/g) || []).length;
  // Check for tables that did NOT get transformed into .sme-table-container
  const unconvertedTables = (html.match(/<div class="my-4 overflow-x-auto rounded-xl border border-slate-200/g) || []).length;
  // Other residual Tailwind classes like bg-slate-, text-slate-, rounded-xl, etc.
  const otherTailwindClasses = (html.match(/class="[^"]*(?:bg-slate-|text-slate-|rounded-|shadow-|font-display)[^"]*"/g) || []).length;

  // 5. SVG analysis
  const svgMatches = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
  const svgCount = svgMatches.length;
  const svgIssues: string[] = [];
  for (let i = 0; i < svgMatches.length; i++) {
    const s = svgMatches[i];
    if (!s.includes('viewBox')) {
      svgIssues.push(`SVG #${i + 1} tidak memiliki atribut viewBox (bisa pecah saat diskalakan).`);
    }
    const widthMatch = s.match(/width="(\d+)(px)?"/);
    if (widthMatch && parseInt(widthMatch[1], 10) > 650) {
      svgIssues.push(`SVG #${i + 1} memiliki fixed width ${widthMatch[1]}px (> 650px) yang berpotensi overflow di lembar A4 portrait.`);
    }
  }

  // 6. Tables & Tips count
  const tableCount = (html.match(/<table/gi) || []).length;
  const smeTableCount = (html.match(/class="sme-table"/gi) || []).length;
  const smeTipBoxCount = (html.match(/class="sme-examiner-tip-box"/gi) || []).length;
  const orderedListCount = (html.match(/<ol/gi) || []).length;

  // 7. Footer labels
  const footerLabels: string[] = [];
  const footerMatches = html.match(/<div class="sme-footer-page">([\s\S]*?)<\/div>/g) || [];
  for (const f of footerMatches) {
    const text = f.replace(/<[^>]*>/g, '').trim();
    if (!footerLabels.includes(text)) footerLabels.push(text);
  }

  results.push({
    id: material.id,
    title: material.title,
    category: material.category,
    source: material._source,
    htmlLength: html.length,
    katexErrors,
    unrenderedPlaceholders,
    rawMarkdownArtifacts: {
      unparsedHeadings,
      unparsedCallouts,
      unparsedTables,
      unparsedMarkdownBold,
      unparsedLists,
      unparsedQuotes,
    },
    tailwindResiduals: {
      unconvertedCallouts,
      unconvertedTables,
      otherTailwindClasses,
    },
    svgCount,
    svgIssues,
    tableCount,
    smeTableCount,
    smeTipBoxCount,
    orderedListCount,
    footerLabels,
  });
}

// Summary Report
console.log(`📋 REKAPITULASI DIAGNOSTIK KESELURUHAN:\n`);

let totalKatexErrors = 0;
let totalUnrenderedPlaceholders = 0;
let totalUnconvertedCallouts = 0;
let totalUnconvertedTables = 0;
let totalUnparsedHeadings = 0;
let totalUnparsedCallouts = 0;
let totalUnparsedTables = 0;
let totalOrderedLists = 0;
let totalSvgs = 0;
let totalSvgIssues = 0;

for (const r of results) {
  totalKatexErrors += r.katexErrors.length;
  totalUnrenderedPlaceholders += r.unrenderedPlaceholders.length;
  totalUnconvertedCallouts += r.tailwindResiduals.unconvertedCallouts;
  totalUnconvertedTables += r.tailwindResiduals.unconvertedTables;
  totalUnparsedHeadings += r.rawMarkdownArtifacts.unparsedHeadings;
  totalUnparsedCallouts += r.rawMarkdownArtifacts.unparsedCallouts;
  totalUnparsedTables += r.rawMarkdownArtifacts.unparsedTables;
  totalOrderedLists += r.orderedListCount;
  totalSvgs += r.svgCount;
  totalSvgIssues += r.svgIssues.length;
}

console.log(`• Total Materi Diuji: ${results.length}`);
console.log(`• Total KaTeX Error Spans: ${totalKatexErrors}`);
console.log(`• Total Unrendered Placeholders: ${totalUnrenderedPlaceholders}`);
console.log(`• Total Unconverted Callout Blocks (terbengkalai tanpa CSS): ${totalUnconvertedCallouts}`);
console.log(`• Total Unconverted Tables (terbengkalai tanpa SME CSS): ${totalUnconvertedTables}`);
console.log(`• Total Unparsed Headings: ${totalUnparsedHeadings}`);
console.log(`• Total Unparsed Callouts: ${totalUnparsedCallouts}`);
console.log(`• Total Unparsed Markdown Tables: ${totalUnparsedTables}`);
console.log(`• Total Ordered Lists (<ol>): ${totalOrderedLists}`);
console.log(`• Total Infografik SVG: ${totalSvgs}`);
console.log(`• Total Potensi Masalah SVG: ${totalSvgIssues}`);

console.log(`\n----------------------------------------------------------------------`);
console.log(`🔍 DETAIL TEMUAN SPESIFIK:`);
console.log(`----------------------------------------------------------------------`);

for (const r of results) {
  const issues: string[] = [];
  if (r.katexErrors.length > 0) issues.push(`${r.katexErrors.length} KaTeX errors`);
  if (r.unrenderedPlaceholders.length > 0) issues.push(`${r.unrenderedPlaceholders.length} unrendered placeholders`);
  if (r.tailwindResiduals.unconvertedCallouts > 0) issues.push(`${r.tailwindResiduals.unconvertedCallouts} unconverted callouts`);
  if (r.tailwindResiduals.unconvertedTables > 0) issues.push(`${r.tailwindResiduals.unconvertedTables} unconverted tables`);
  if (r.rawMarkdownArtifacts.unparsedHeadings > 0) issues.push(`${r.rawMarkdownArtifacts.unparsedHeadings} unparsed headings`);
  if (r.rawMarkdownArtifacts.unparsedCallouts > 0) issues.push(`${r.rawMarkdownArtifacts.unparsedCallouts} unparsed callouts`);
  if (r.rawMarkdownArtifacts.unparsedTables > 0) issues.push(`${r.rawMarkdownArtifacts.unparsedTables} unparsed tables`);
  if (r.svgIssues.length > 0) issues.push(`${r.svgIssues.length} SVG issues`);

  if (issues.length > 0) {
    console.log(`[${r.source} #${r.id}] ${r.title}:`);
    console.log(`   ⚠️  ${issues.join(', ')}`);
  }
}

// Simpan 3 sampel HTML representatif untuk diuji render PDF nyata melalui headless Chrome:
// 1. OSN Topik 1 (Struktur Atom & Formula Kuantum)
// 2. SMA Topik 1 (Hakikat Ilmu Kimia & Fase E)
// 3. OSN Topik 10 (Kimia Organik & Biokimia)
const sampleMaterials = [
  allMaterials.find(m => m.id === 1 && m._source === 'OSN')!,
  allMaterials.find(m => m.id === 101 && m._source === 'SMA')!,
  allMaterials.find(m => m.id === 10 && m._source === 'OSN')!,
];

console.log(`\n======================================================================`);
console.log(`🖨️ Menguji Konversi Nyata Headless Chrome Print-to-PDF pada Sampel...`);
console.log(`======================================================================`);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
for (const sample of sampleMaterials) {
  if (!sample) continue;
  const html = materialPdfExportService.generateMaterialHtml(sample, {
    includeYourNotesMargin: true,
    includeWorkedExamples: true,
    includeCheckpoints: true,
  });

  const slug = `sample_${sample._source.toLowerCase()}_${sample.id}`;
  const htmlFile = path.join(outputDir, `${slug}.html`);
  const pdfFile = path.join(outputDir, `${slug}.pdf`);

  fs.writeFileSync(htmlFile, html, 'utf-8');

  try {
    const cmd = `"${chromePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfFile}" "${htmlFile}"`;
    execSync(cmd, { stdio: 'pipe' });
    const stats = fs.statSync(pdfFile);
    console.log(`✅ Berhasil menghasilkan PDF: ${slug}.pdf (${Math.round(stats.size / 1024)} KB)`);
  } catch (err: any) {
    console.error(`❌ Gagal menghasilkan PDF ${slug}:`, err.message);
  }
}

console.log(`\nDiagnosis selesai.`);
