import { SMA_MATERIALS } from '../src/data/smaMaterialsData.ts';
import { parseAndRenderMixedText } from '../src/lib/katex-helpers.ts';

for (const id of [103, 104]) {
  const m = SMA_MATERIALS.find(x => x.id === id)!;
  for (const b of [...m.prerequisites, ...m.core_concepts, ...m.worked_examples]) {
    const raw = b.content;
    const html = parseAndRenderMixedText(raw);

    const headingMatches = html.match(/(?:<p[^>]*>|\n)\s*#{1,6}\s+[^\n<]+/g) || [];
    if (headingMatches.length > 0) {
      console.log(`[SMA #${id} - ${b.title}] Heading matches:`, headingMatches);
    }

    const calloutMatches = html.match(/(?:<p[^>]*>|\n)[^\n<]*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|INFO|DANGER)\][\s\S]*?(?:<\/p>|\n\n)/gi) || [];
    if (calloutMatches.length > 0) {
      console.log(`[SMA #${id} - ${b.title}] Callout matches:`, calloutMatches);
    }
  }
}
