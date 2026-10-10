import { materialPdfExportService } from '../src/services/materialPdfExportService.ts';
import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { SMA_MATERIALS } from '../src/data/smaMaterialsData.ts';
import { IGCSE_MATERIALS } from '../src/data/igcseMaterialsData.ts';

const allMaterials = [
  ...OSN_MATERIALS.map(m => ({ ...m, _source: 'OSN' as const })),
  ...SMA_MATERIALS.map(m => ({ ...m, _source: 'SMA' as const })),
  ...IGCSE_MATERIALS.map(m => ({ ...m, _source: 'IGCSE' as const })),
];

console.log('=== 1. DETAIL 17 KATEX ERRORS ===');
for (const m of allMaterials) {
  const html = materialPdfExportService.generateMaterialHtml(m);
  const regex = /class="katex-error"[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/span>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    console.log(`[${m._source} #${m.id} - ${m.title.slice(0, 30)}]`);
    console.log(`  Title Error: ${match[1]}`);
    console.log(`  Raw Content: ${match[2]}`);
  }
}

console.log('\n=== 2. DETAIL UNPARSED HEADINGS, CALLOUTS, TABLES ===');
const targetIds = [103, 104, 109, 110];
for (const id of targetIds) {
  const m = allMaterials.find(x => x.id === id);
  if (!m) continue;
  const html = materialPdfExportService.generateMaterialHtml(m);

  // Unparsed callouts
  const calloutMatches = html.match(/(?:<p[^>]*>|\n)[^\n<]*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|INFO|DANGER)\][\s\S]*?(?:<\/p>|\n\n)/gi) || [];
  if (calloutMatches.length > 0) {
    console.log(`[SMA #${id}] Found ${calloutMatches.length} unparsed callout snippets:`);
    calloutMatches.forEach((c, i) => console.log(`  #${i + 1}: ${c.replace(/<[^>]*>/g, '').trim().slice(0, 100)}...`));
  }

  // Unparsed headings
  const headingMatches = html.match(/(?:<p[^>]*>|\n)\s*#{1,6}\s+[^\n<]+/g) || [];
  if (headingMatches.length > 0) {
    console.log(`[SMA #${id}] Found ${headingMatches.length} unparsed heading snippets:`);
    headingMatches.forEach((h, i) => console.log(`  #${i + 1}: ${h.replace(/<[^>]*>/g, '').trim()}`));
  }

  // Unparsed tables
  const tableMatches = html.match(/(?:<p[^>]*>|\n)[^\n<]*\|[-:\s|]{3,}\|[\s\S]*?(?:<\/p>|\n\n)/g) || [];
  if (tableMatches.length > 0) {
    console.log(`[SMA #${id}] Found ${tableMatches.length} unparsed table snippets:`);
    tableMatches.forEach((t, i) => console.log(`  #${i + 1}: ${t.replace(/<[^>]*>/g, '').trim().slice(0, 100)}...`));
  }
}

console.log('\n=== 3. DETAIL SVG ISSUES ===');
for (const m of allMaterials) {
  const html = materialPdfExportService.generateMaterialHtml(m);
  const svgs = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
  for (let i = 0; i < svgs.length; i++) {
    const s = svgs[i];
    const widthMatch = s.match(/width="(\d+)(px)?"/);
    const hasViewBox = s.includes('viewBox');
    if (!hasViewBox || (widthMatch && parseInt(widthMatch[1], 10) > 650)) {
      console.log(`[${m._source} #${m.id}] SVG #${i + 1}: viewBox=${hasViewBox}, width=${widthMatch ? widthMatch[1] : 'auto'}`);
    }
  }
}
