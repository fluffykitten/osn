import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { SMA_MATERIALS } from '../src/data/smaMaterialsData.ts';
import { IGCSE_MATERIALS } from '../src/data/igcseMaterialsData.ts';
import { materialPdfExportService } from '../src/services/materialPdfExportService.ts';

const rootDir = process.cwd();
const outputDir = path.join(rootDir, 'Materi');
const tempHtmlDir = path.join(rootDir, 'temp_pdf_export');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(tempHtmlDir)) {
  fs.mkdirSync(tempHtmlDir, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

interface ExportItem {
  id: number;
  source: 'OSN' | 'SMA' | 'IGCSE';
  filename: string;
  material: any;
}

const itemsToExport: ExportItem[] = [
  // 10 Materi OSN
  ...OSN_MATERIALS.map(m => {
    const padId = String(m.id).padStart(2, '0');
    const slug = m.title
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .slice(0, 6)
      .join('_');
    return {
      id: m.id,
      source: 'OSN' as const,
      filename: `OSN_Topik_${padId}_${slug}.pdf`,
      material: m,
    };
  }),

  // 16 Materi SMA
  ...SMA_MATERIALS.map(m => {
    let fasePrefix = 'SMA_Fase_E';
    let topicNum = m.id - 100;
    if (m.id >= 106 && m.id <= 112) {
      fasePrefix = 'SMA_Fase_F1';
    } else if (m.id >= 113) {
      fasePrefix = 'SMA_Fase_F2';
    }
    const padTopic = String(topicNum).padStart(2, '0');
    const slug = m.title
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .slice(0, 6)
      .join('_');
    return {
      id: m.id,
      source: 'SMA' as const,
      filename: `${fasePrefix}_Topik_${padTopic}_${slug}.pdf`,
      material: m,
    };
  }),

  // Materi IGCSE
  ...IGCSE_MATERIALS.map(m => {
    const topicNum = m.topic_number || (m.id >= 200 ? m.id - 200 : m.id);
    const padTopic = String(topicNum).padStart(2, '0');
    const slug = m.title
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .slice(0, 6)
      .join('_');
    return {
      id: m.id,
      source: 'IGCSE' as const,
      filename: `IGCSE_Topik_${padTopic}_${slug}.pdf`,
      material: m,
    };
  }),
];

const filterArg = process.argv[2];
const items = filterArg
  ? itemsToExport.filter(item =>
      String(item.id) === filterArg ||
      item.filename.toLowerCase().includes(filterArg.toLowerCase()) ||
      item.source.toLowerCase() === filterArg.toLowerCase()
    )
  : itemsToExport;

console.log(`======================================================================`);
console.log(`🚀 Memulai Ekspor Batch PDF Materi (${items.length} Materi) ke folder:`);
console.log(`   📁 ${outputDir}`);
console.log(`======================================================================\n`);

const summary: { filename: string; sizeKb: number; durationMs: number; status: string }[] = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const startTime = Date.now();
  console.log(`[${i + 1}/${items.length}] Memproses ${item.filename}...`);

  const html = materialPdfExportService.generateMaterialHtml(item.material, {
    includeYourNotesMargin: true,
    includeWorkedExamples: true,
    includeCheckpoints: true,
  });

  const tempHtmlFile = path.join(tempHtmlDir, `${item.filename.replace('.pdf', '')}.html`);
  const targetPdfFile = path.join(outputDir, item.filename);

  fs.writeFileSync(tempHtmlFile, html, 'utf-8');

  try {
    const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --no-pdf-header-footer --print-to-pdf="${targetPdfFile}" "${tempHtmlFile}"`;
    execSync(cmd, { stdio: 'pipe' });
    const stats = fs.statSync(targetPdfFile);
    const durationMs = Date.now() - startTime;
    const sizeKb = Math.round(stats.size / 1024);

    console.log(`   ✅ Selesai: ${sizeKb} KB dalam ${(durationMs / 1000).toFixed(1)}s\n`);
    summary.push({
      filename: item.filename,
      sizeKb,
      durationMs,
      status: 'SUKSES',
    });
  } catch (err: any) {
    console.error(`   ❌ GAGAL: ${err.message}\n`);
    summary.push({
      filename: item.filename,
      sizeKb: 0,
      durationMs: Date.now() - startTime,
      status: 'GAGAL',
    });
  }
}

// Bersihkan folder temporary HTML
try {
  fs.rmSync(tempHtmlDir, { recursive: true, force: true });
} catch {
  // ignore
}

console.log(`\n======================================================================`);
console.log(`📊 REKAPITULASI HASIL DOWNLOAD MATERI PDF:`);
console.log(`======================================================================`);
console.table(summary);

const totalSuccess = summary.filter(s => s.status === 'SUKSES').length;
const totalSizeMb = (summary.reduce((acc, s) => acc + s.sizeKb, 0) / 1024).toFixed(2);
console.log(`\n🎉 Total Berhasil: ${totalSuccess}/${itemsToExport.length} berkas PDF`);
console.log(`📦 Total Ukuran: ${totalSizeMb} MB`);
console.log(`📂 Lokasi Folder: ${outputDir}`);
