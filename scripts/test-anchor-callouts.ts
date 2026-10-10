import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { SMA_MATERIALS } from '../src/data/smaMaterialsData.ts';
import { IGCSE_MATERIALS } from '../src/data/igcseMaterialsData.ts';
import { parseAndRenderMixedText } from '../src/lib/katex-helpers.ts';

const allMaterials = [...OSN_MATERIALS, ...SMA_MATERIALS, ...IGCSE_MATERIALS];

let totalBlocksWithCallout = 0;
let totalCalloutMatches = 0;

for (const mat of allMaterials) {
  for (const b of [...(mat.prerequisites || []), ...(mat.core_concepts || []), ...(mat.worked_examples || [])]) {
    const html = parseAndRenderMixedText(b.content);
    // find blocks that contain callouts
    const blockRegex = /<div data-laser-block="\d+" class="laser-anchor-block">(<div class="my-4 p-4(?:\.5)? (?:rounded-2xl border|bg-emerald-50)[\s\S]*?)<\/div>(?=\s*<div data-laser-block=|\s*$)/gi;
    let m;
    while ((m = blockRegex.exec(html)) !== null) {
      totalCalloutMatches++;
      const inner = m[1];
      // check if closing tags are balanced
      const openDivs = (inner.match(/<div\b/gi) || []).length;
      const closeDivs = (inner.match(/<\/div>/gi) || []).length;
      if (openDivs !== closeDivs) {
        console.log(`Unbalanced in [${mat.id} - ${b.title}]: open=${openDivs}, close=${closeDivs}`);
      }
    }
  }
}

console.log(`Total Callout Matches with Anchor Boundary: ${totalCalloutMatches}`);
