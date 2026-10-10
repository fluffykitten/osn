import { materialPdfExportService } from '../src/services/materialPdfExportService.ts';
import { SMA_MATERIALS } from '../src/data/smaMaterialsData.ts';

for (const id of [103, 104, 109, 110]) {
  const m = SMA_MATERIALS.find(x => x.id === id);
  if (!m) continue;
  const html = materialPdfExportService.generateMaterialHtml(m);

  const tableMatches = html.match(/(?:<p[^>]*>|\n)[^\n<]*\|[-:\s|]{3,}\|[\s\S]*?(?:<\/p>|\n\n)/g) || [];
  if (tableMatches.length > 0) {
    console.log(`=== SMA #${id} Table Matches (${tableMatches.length}) ===`);
    tableMatches.forEach(t => console.log(t));
  }

  const headingMatches = html.match(/(?:<p[^>]*>|\n)\s*#{1,6}\s+[^\n<]+/g) || [];
  if (headingMatches.length > 0) {
    console.log(`=== SMA #${id} Heading Matches (${headingMatches.length}) ===`);
    headingMatches.forEach(h => console.log(h));
  }

  const calloutMatches = html.match(/(?:<p[^>]*>|\n)[^\n<]*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|INFO|DANGER)\][\s\S]*?(?:<\/p>|\n\n)/gi) || [];
  if (calloutMatches.length > 0) {
    console.log(`=== SMA #${id} Callout Matches (${calloutMatches.length}) ===`);
    calloutMatches.forEach(c => console.log(c));
  }
}
