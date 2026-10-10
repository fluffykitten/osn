import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { parseAndRenderMixedText } from '../src/lib/katex-helpers.ts';

// Find a block with a multi-item callout in OSN 1
const mat = OSN_MATERIALS[0];
for (const b of mat.core_concepts) {
  const html = parseAndRenderMixedText(b.content);
  if (html.includes('PERINGATAN') || html.includes('TIPS & ANALISIS')) {
    const rawMatches = html.match(/<div class="my-4 p-4 rounded-2xl border border-l-4[\s\S]*?<\/div>\s*<\/div>/gi) || [];
    console.log('Match length:', rawMatches[0]?.length);
    console.log('Snippet of match:');
    console.log(rawMatches[0]?.slice(0, 300));
    console.log('Ending of match:');
    console.log(rawMatches[0]?.slice(-100));
    break;
  }
}
