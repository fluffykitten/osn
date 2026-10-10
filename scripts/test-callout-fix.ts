import { OSN_MATERIALS } from '../src/data/materialsData.ts';
import { parseAndRenderMixedText } from '../src/lib/katex-helpers.ts';

function convertToExaminerTip(htmlBlock: string): string {
  let title = 'Examiner Tips and Tricks';
  let iconColor = '#0284c7';
  let borderColor = '#0284c7';

  // Check type / label
  if (/PERINGATAN|MISKONSEPSI|BAHAYA|CAUTION|DANGER|WARNING/i.test(htmlBlock)) {
    title = 'Examiner Warning & Common Misconceptions';
    iconColor = '#dc2626';
    borderColor = '#dc2626';
  } else if (/TIPS|ANALISIS|TIP/i.test(htmlBlock)) {
    title = 'Examiner Tips and Tricks';
    iconColor = '#0284c7';
    borderColor = '#0284c7';
  } else if (/PENTING|IMPORTANT/i.test(htmlBlock)) {
    title = 'Key Examiner Notes & Exam Priorities';
    iconColor = '#4f46e5';
    borderColor = '#4f46e5';
  } else if (/Kesimpulan(?:\s+Evaluator)?\s+Juri/i.test(htmlBlock)) {
    title = 'Kesimpulan Evaluator Juri (Gold Standard)';
    iconColor = '#059669';
    borderColor = '#059669';
  } else if (/CATATAN|INFORMASI|NOTE|INFO/i.test(htmlBlock)) {
    title = 'Key Examiner Notes';
    iconColor = '#0284c7';
    borderColor = '#0284c7';
  }

  // Extract explicit title if exists
  const titleMatch = htmlBlock.match(/<span class="[^"]*font-bold[^"]*text-(?:amber|emerald|indigo|sky|rose|slate)-950[^"]*">([^<]+)<\/span>/i);
  if (titleMatch && titleMatch[1]) {
    title = `${title}: ${titleMatch[1].trim()}`;
  }

  // Extract body content: inside the body container or strip header
  let contentText = htmlBlock;
  const bodyMatch = htmlBlock.match(/<div class="text-[^"]*font-sans">([\s\S]*?)<\/div>\s*<\/div>$/i);
  if (bodyMatch && bodyMatch[1]) {
    contentText = bodyMatch[1].trim();
  } else {
    contentText = htmlBlock
      .replace(/<div class="flex items-center[\s\S]*?<\/div>/i, '')
      .replace(/<span class="[^"]*rounded-full[\s\S]*?<\/span>/gi, '')
      .replace(/^<div[^>]*>/, '')
      .replace(/<\/div>\s*<\/div>$/, '')
      .trim();
  }

  return `
    <div class="sme-examiner-tip-box" style="border-left-color: ${borderColor};">
      <div class="sme-tip-header-row">
        <div class="sme-tip-circle-icon" style="background: ${iconColor};">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <span class="sme-tip-title-text">${title}</span>
      </div>
      <div class="sme-tip-body">
        ${contentText}
      </div>
    </div>
  `;
}

// Test on OSN 1
const mat = OSN_MATERIALS[0];
let totalConverted = 0;
for (const b of [...mat.prerequisites, ...mat.core_concepts, ...mat.worked_examples]) {
  let html = parseAndRenderMixedText(b.content);
  // Test regex
  html = html.replace(
    /<div class="my-4 p-4(?:\.5)? rounded-2xl border[\s\S]*?<\/div>\s*<\/div>/gi,
    (m) => {
      totalConverted++;
      return convertToExaminerTip(m);
    }
  );
}
console.log('Total callouts converted in OSN 1:', totalConverted);
