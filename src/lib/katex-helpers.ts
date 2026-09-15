// KaTeX and mhchem helpers for OSN Kimia Mastery
import katex from 'katex';
import 'katex/dist/contrib/mhchem';

export interface InsertSnippetOptions {
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}

/**
 * Injects a snippet or wraps selected text in a textarea at current cursor position
 */
export function injectAtCursor(
  textarea: HTMLTextAreaElement,
  template: string,
  options?: InsertSnippetOptions
): string {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selectedText = text.substring(start, end);

  let replacement = '';
  let newCursorPos = start;

  if (options?.prefix !== undefined || options?.suffix !== undefined) {
    const prefix = options.prefix || '';
    const suffix = options.suffix || '';
    const content = selectedText || options.placeholder || '';
    replacement = `${prefix}${content}${suffix}`;
    newCursorPos = selectedText ? start + replacement.length : start + prefix.length;
  } else if (template.includes('$$SEL$$')) {
    const content = selectedText || options?.placeholder || '';
    replacement = template.replace('$$SEL$$', content);
    newCursorPos = selectedText ? start + replacement.length : start + template.indexOf('$$SEL$$') + content.length;
  } else {
    replacement = template;
    newCursorPos = start + template.length;
  }

  const newValue = text.substring(0, start) + replacement + text.substring(end);
  textarea.value = newValue;

  // Restore focus and cursor position
  textarea.focus();
  setTimeout(() => {
    textarea.setSelectionRange(newCursorPos, newCursorPos);
  }, 0);

  return newValue;
}

/**
 * Checks if current cursor position is already inside inline math $...$
 */
export function isInsideMath(text: string, pos: number): boolean {
  const before = text.substring(0, pos);
  const dollarMatches = before.match(/(?<!\\)\$/g);
  return dollarMatches ? dollarMatches.length % 2 === 1 : false;
}

/**
 * Smart wrap selection or insert fraction \frac{a}{b}
 */
export function insertFractionAtCursor(textarea: HTMLTextAreaElement): string {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selected = text.substring(start, end).trim();
  const inMath = isInsideMath(text, start);
  const delim = inMath ? '' : '$';

  let replacement = '';
  let selectStart = start;
  let selectEnd = start;

  if (selected.includes('/')) {
    // E.g. selected "PV/RT" or "1.0*2.45 / 0.082*298"
    const [num, ...rest] = selected.split('/');
    const den = rest.join('/');
    replacement = `${delim}\\frac{${num.trim()}}{${den.trim()}}${delim}`;
    selectStart = start + replacement.length;
    selectEnd = selectStart;
  } else if (selected.length > 0) {
    // Selected numerator
    replacement = `${delim}\\frac{${selected}}{b}${delim}`;
    selectStart = start + replacement.indexOf('{b}') + 1;
    selectEnd = selectStart + 1; // Highlight 'b'
  } else {
    // Empty insertion
    replacement = `${delim}\\frac{a}{b}${delim}`;
    selectStart = start + (inMath ? 6 : 7); // Highlight 'a'
    selectEnd = selectStart + 1;
  }

  const newValue = text.substring(0, start) + replacement + text.substring(end);
  textarea.value = newValue;
  textarea.focus();
  setTimeout(() => {
    textarea.setSelectionRange(selectStart, selectEnd);
  }, 0);
  return newValue;
}

/**
 * Smart wrap selection or insert power / superscript
 */
export function insertSuperscriptAtCursor(textarea: HTMLTextAreaElement): string {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selected = text.substring(start, end).trim();
  const inMath = isInsideMath(text, start);

  const charBefore = start > 0 ? text[start - 1] : '';
  const hasBase = /[a-zA-Z0-9\)\}\]]/.test(charBefore);

  let replacement = '';
  let selStart = start;
  let selEnd = start;

  if (selected.length > 0) {
    if (hasBase || inMath) {
      replacement = `^{${selected}}`;
    } else {
      replacement = `$X^{${selected}}$`;
    }
    selStart = start + replacement.length;
    selEnd = selStart;
  } else {
    if (hasBase || inMath) {
      replacement = `^{2}`;
    } else {
      replacement = `$X^{2}$`;
    }
    selStart = start + replacement.indexOf('2');
    selEnd = selStart + 1;
  }

  const newValue = text.substring(0, start) + replacement + text.substring(end);
  textarea.value = newValue;
  textarea.focus();
  setTimeout(() => {
    textarea.setSelectionRange(selStart, selEnd);
  }, 0);
  return newValue;
}

/**
 * Smart wrap selection or insert subscript / index
 */
export function insertSubscriptAtCursor(textarea: HTMLTextAreaElement): string {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selected = text.substring(start, end).trim();
  const inMath = isInsideMath(text, start);

  const charBefore = start > 0 ? text[start - 1] : '';
  const hasBase = /[a-zA-Z0-9\)\}\]]/.test(charBefore);

  let replacement = '';
  let selStart = start;
  let selEnd = start;

  if (selected.length > 0) {
    if (hasBase || inMath) {
      replacement = `_{${selected}}`;
    } else {
      replacement = `$X_{${selected}}$`;
    }
    selStart = start + replacement.length;
    selEnd = selStart;
  } else {
    if (hasBase || inMath) {
      replacement = `_{1}`;
    } else {
      replacement = `$X_{1}$`;
    }
    selStart = start + replacement.indexOf('1');
    selEnd = selStart + 1;
  }

  const newValue = text.substring(0, start) + replacement + text.substring(end);
  textarea.value = newValue;
  textarea.focus();
  setTimeout(() => {
    textarea.setSelectionRange(selStart, selEnd);
  }, 0);
  return newValue;
}

/**
 * Smart wrap selection with KaTeX chemical formula syntax \ce{...}
 */
export function wrapWithCe(textarea: HTMLTextAreaElement): string {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selectedText = text.substring(start, end).trim();
  const inMath = isInsideMath(text, start);
  const delim = inMath ? '' : '$';

  if (selectedText.startsWith('\\ce{') || selectedText.startsWith('$\\ce{')) {
    return text;
  }

  const content = selectedText || 'H2O';
  const replacement = `${delim}\\ce{${content}}${delim}`;

  const newValue = text.substring(0, start) + replacement + text.substring(end);
  textarea.value = newValue;
  textarea.focus();
  setTimeout(() => {
    const newPos = selectedText ? start + replacement.length : start + (inMath ? 4 : 5);
    const newEnd = selectedText ? newPos : newPos + content.length;
    textarea.setSelectionRange(newPos, newEnd);
  }, 0);

  return newValue;
}

/**
 * Render LaTeX / mhchem formula string cleanly with graceful error recovery
 */
export function renderKaTeX(formula: string, displayMode: boolean = false): string {
  try {
    // Automatically escape unescaped % (e.g. 50% -> 50\%) so KaTeX never treats % as a comment
    const safeFormula = formula.replace(/(?<!\\)%/g, '\\%');
    const rendered = katex.renderToString(safeFormula, {
      displayMode,
      throwOnError: false,
      output: 'html', // Pure HTML output to eliminate duplicate MathML text leakage
      trust: true,
      strict: false,
    });
    // Add role="math" and aria-label for accessibility (Fase 4)
    const cleanLabel = formula.replace(/[{}\$^_\\]/g, ' ').replace(/"/g, '&quot;').trim().replace(/\s+/g, ' ');
    return `<span role="math" aria-label="${cleanLabel || 'formula matematika'}">${rendered}</span>`;
  } catch {
    return `<span role="math" class="font-mono text-xs text-slate-700 bg-slate-100 px-1 py-0.5 rounded">${formula}</span>`;
  }
}

interface ProtectedMathItem {
  content: string;
  isDisplay: boolean;
}

/**
 * Preprocesses friendly high school student shorthand formulas into standard KaTeX notation
 * Examples handled gracefully:
 *  - Fractions: 1/2, 3/4, (P*V)/(R*T), \frac{a}{b}
 *  - Powers: 10^5, 10^-3, 2.5 x 10^5, x^2, y^3, [A]^2, Ca^2+, SO4^2-
 *  - Subscripts: X_A, n_tot, K_c, K_sp, P_total, M_r
 *  - Chemistry compounds: H2O, CO2, CaCO3, KMnO4, CH4, H2SO4, Ca(OH)2
 *  - Reactions: H2O + CO2 -> H2CO3, N2O4 <=> 2NO2
 *  - Thermochemistry: delta H, delta G, delta S, delta U
 */
export function preprocessFriendlyFormula(rawText: string): {
  text: string;
  protectedMath: ProtectedMathItem[];
  protectedSvg: string[];
} {
  if (!rawText) return { text: '', protectedMath: [], protectedSvg: [] };

  let t = rawText;
  const protectedMath: ProtectedMathItem[] = [];
  const protectedSvg: string[] = [];

  // Protect raw SVG or svg code blocks before chemical/math regexes touch attributes
  t = t.replace(/(?:```(?:svg|xml|html)?\s*)?(<svg[\s\S]*?<\/svg>)(?:\s*```)?/gi, (_, svg) => {
    const id = protectedSvg.length;
    protectedSvg.push(svg.trim());
    return `\n\n___PROTECTED_SVG_${id}___\n\n`;
  });

  // Protect generic code blocks (```lang ... ```)
  t = t.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const id = protectedSvg.length;
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const block = `<pre class="my-3 p-3.5 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-xs"><div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-sans"><span>${lang || 'CODE'}</span></div><code>${escaped}</code></pre>`;
    protectedSvg.push(block);
    return `\n\n___PROTECTED_SVG_${id}___\n\n`;
  });

  const stash = (mathContent: string, isDisplay = false): string => {
    const id = protectedMath.length;
    // Strip any accidental leading/trailing/nested unescaped dollar signs and escape percent
    const cleanContent = mathContent.replace(/(?<!\\)\$/g, '').replace(/(?<!\\)%/g, '\\%').trim();
    protectedMath.push({ content: cleanContent, isDisplay });
    return `___FORMULA_MATH_${id}___`;
  };

  // 0. Clean accidental nested dollars inside LaTeX commands like \frac{$X^a$}{b}
  t = t.replace(/(\\[a-zA-Z]+(?:\{((?:[^{}]|\{[^{}]*\})*)\})+)/g, (m) => m.replace(/\$/g, ''));

  // 1. Protect existing display math $$...$$ and inline math $...$
  t = t.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => stash(math.trim(), true));
  // Allow inline math to span soft line breaks within a paragraph
  t = t.replace(/\$((?:[^\$\n\r]|[\n\r](?![\n\r]))+?)\$/g, (_, math) => stash(math.trim(), false));

  // 2. Auto-detect bare LaTeX commands
  // 2a. Bare \ce{...}
  t = t.replace(/\\ce\{([^{}]+(?:\{[^{}]*\}[^{}]*)*)\}/g, (match) => stash(match, false));

  // 2b. Bare \frac{...}{...} (handles nested braces)
  t = t.replace(/\\frac\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, (match) => stash(match, false));

  // 3. Scientific notation shorthand: "2.5 x 10^5", "1.0 * 10^-3", "2.5x10^5", "6.022 \times 10^{23}"
  t = t.replace(/(\b\d+(?:\.\d+)?)\s*(?:x|\*|\\times)\s*10\^\{?([-\d]+)\}?/gi, (_, num, exp) => {
    return stash(`${num} \\times 10^{${exp}}`, false);
  });

  // 4. Standalone powers of 10: "10^5", "10^-3", "10^{5}", "10^{-3}"
  t = t.replace(/\b10\^\{?([-\d]+)\}?/g, (_, exp) => {
    return stash(`10^{${exp}}`, false);
  });

  // 5. Ion charges: Ca^2+, Fe^3+, SO4^2-, CO3^2-, Cl^-, Na^+, H^+, OH^-
  t = t.replace(/\b([A-Z][a-zA-Z0-9]*)\^\{?(\d*[+-]|[+-]\d*)\}?/g, (_, compound, charge) => {
    return stash(`\\ce{${compound}^{${charge}}}`, false);
  });

  // 6. Parenthesized fractions: (P*V)/(R*T) or (a+b)/(c+d) or (0.50)/(1.00)
  t = t.replace(/\(([^\(\)\n]+)\)\s*\/\s*\(([^\(\)\n]+)\)/g, (_, num, den) => {
    const cleanNum = num.replace(/\*/g, ' \\times ').trim();
    const cleanDen = den.replace(/\*/g, ' \\times ').trim();
    return stash(`\\frac{${cleanNum}}{${cleanDen}}`, false);
  });

  // 7. Simple numerical fractions: 1/2, 3/4, 5/2, 10/3 (excluding dates like 14/09/2026)
  t = t.replace(/(?<![\d\/])(\d+)\/(\d+)(?![\d\/])/g, (_, num, den) => {
    return stash(`\\frac{${num}}{${den}}`, false);
  });

  // 8. Variables with powers: x^2, y^3, s^2, T^2, P^2, [A]^2, K_c^2
  t = t.replace(/([a-zA-Z\]\)])\^\{?([-\d\+a-zA-Z]+)\}?/g, (_, base, exp) => {
    return stash(`${base}^{${exp}}`, false);
  });

  // 9. Variables with subscripts: X_A, n_tot, K_c, K_sp, P_total, M_r, E_sel, T_1
  t = t.replace(/\b([A-Za-z]+)_\{?([a-zA-Z0-9]+)\}?\b/g, (_, base, sub) => {
    return stash(`${base}_{${sub}}`, false);
  });

  // 10. Common chemical formulas containing numbers: H2O, CO2, BaCO3, KMnO4, CH4, H2SO4, Ca(OH)2, Fe2(SO4)3
  t = t.replace(/\b[A-Z][a-z]?\d*(?:\([A-Za-z0-9]+\)\d*|[A-Z][a-z]?\d*)+\b/g, (match) => {
    if (/\d/.test(match)) {
      return stash(`\\ce{${match}}`, false);
    }
    return match;
  });

  // 11. Standalone superscript or subscript (e.g. from toolbar click `^{2}` or `_{i}`)
  t = t.replace(/[\^_]\{[^{}]+\}/g, (match) => {
    return stash(`{}${match}`, false);
  });

  // 12. Thermodynamic shorthand: delta H, delta G, delta S, delta U
  t = t.replace(/\bdelta\s*H(?:_rxn|\^\\circ|\^o|\^°)?\b/gi, () => stash('\\Delta H^\\circ', false));
  t = t.replace(/\bdelta\s*G(?:_rxn|\^\\circ|\^o|\^°)?\b/gi, () => stash('\\Delta G^\\circ', false));
  t = t.replace(/\bdelta\s*S(?:_rxn|\^\\circ|\^o|\^°)?\b/gi, () => stash('\\Delta S^\\circ', false));
  t = t.replace(/\bdelta\s*U\b/gi, () => stash('\\Delta U', false));

  // 13. Reaction arrows: -> and <=>
  t = t.replace(/<=>|<->/g, () => stash('\\rightleftharpoons', false));
  t = t.replace(/(?<![a-zA-Z0-9])->(?![a-zA-Z0-9])/g, () => stash('\\rightarrow', false));

  // 14. Greek letters and math symbols
  t = t.replace(/\\(?:alpha|beta|gamma|lambda|pi|sigma|theta|mu|omega|approx|pm)/g, (match) => stash(match, false));
  t = t.replace(/\^\\circ(?:\\text\{C\}|C)?/g, () => stash('^\\circ\\text{C}', false));

  return { text: t, protectedMath, protectedSvg };
}

/**
 * High-performance mixed-text parser for chemistry & mathematics
 * Features:
 *  - Fully integrates Formula Ramah preprocessing for SMA students
 *  - Preserves single line breaks (\n -> <br />) and double line breaks (\n\n -> <p>)
 *  - Markdown bold **text** support
 *  - Seamless real-time KaTeX mhchem rendering
 */
export function parseAndRenderMixedText(rawText: string): string {
  if (!rawText) return '';

  const { text, protectedMath, protectedSvg } = preprocessFriendlyFormula(rawText);

  // Normalize markdown headings, steps, and tables so they form isolated blocks and do not bleed into lists or paragraphs
  const normalized = text
    .replace(/([^\n])\n(#{1,5}\s+[^\n]+)/g, '$1\n\n$2')
    .replace(/(#{1,5}\s+[^\n]+)\n([^\n#])/g, '$1\n\n$2')
    .replace(/([^\n])\n(\|[^\n]+\|\s*\n\s*\|[-:\s|]+\|)/g, '$1\n\n$2')
    .replace(/(\|[^\n]+\|)\n([^\n|])/g, '$1\n\n$2')
    .replace(/([^\n])\n(\*\*Kesimpulan(?:\s+Evaluator)?\s+Juri:?\*\*)/gi, '$1\n\n$2');

  // Markdown inline formatting: bold, italic, inline-code
  let processed = normalized
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em class="italic text-slate-700">$1</em>')
    .replace(/`([^`\n]+)`/g, '<code class="px-1.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 rounded font-mono text-[11px]">$1</code>');

  // Split into paragraphs by double newlines
  const paragraphs = processed.split(/\n\s*\n/);
  processed = paragraphs
    .map((para) => {
      const trimmed = para.trim();
      if (!trimmed) return '';

      // 0. Protected SVG / preformatted code block
      if (/^___PROTECTED_SVG_\d+___$/.test(trimmed)) {
        const id = parseInt(trimmed.replace(/\D/g, ''), 10);
        const item = protectedSvg[id];
        if (item) {
          if (item.startsWith('<pre')) return item;
          return `<div class="my-5 overflow-x-auto flex justify-center items-center py-3 px-2 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-2xs">${item}</div>`;
        }
      }

      // 1. If it's only a single display math block
      if (/^___FORMULA_MATH_\d+___$/.test(trimmed)) {
        const id = parseInt(trimmed.replace(/\D/g, ''), 10);
        const item = protectedMath[id];
        if (item && item.isDisplay) {
          return `<div class="my-3 py-2 px-3 text-center bg-slate-50/90 rounded-lg border border-slate-200/70 overflow-x-auto">${renderKaTeX(item.content, true)}</div>`;
        }
      }

      // 2. Horizontal divider (---)
      if (/^---+$/.test(trimmed)) {
        return `<hr class="my-4 border-slate-200" />`;
      }

      // 3. Markdown Table (| ... | ... |) - Supports standalone or embedded tables with alignments
      const lines = trimmed.split('\n');
      const tableStartIdx = lines.findIndex(
        (l, idx) =>
          l.trim().startsWith('|') &&
          idx + 1 < lines.length &&
          /^\s*\|[-:\s|]+\|\s*$/.test(lines[idx + 1])
      );

      if (tableStartIdx !== -1) {
        const tableLines: string[] = [];
        let cur = tableStartIdx;
        while (cur < lines.length && lines[cur].trim().startsWith('|')) {
          tableLines.push(lines[cur].trim());
          cur++;
        }

        const preLines = lines.slice(0, tableStartIdx);
        const postLines = lines.slice(cur);

        const headerCols = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());

        const alignments = tableLines[1]
          .split('|')
          .slice(1, -1)
          .map((c) => {
            const s = c.trim();
            if (s.startsWith(':') && s.endsWith(':')) return 'text-center';
            if (s.endsWith(':')) return 'text-right';
            return 'text-left';
          });

        const bodyRows = tableLines.slice(2);

        const thead = `<thead class="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider font-sans"><tr>${headerCols
          .map((col, i) => `<th class="px-4 py-3 ${alignments[i] || 'text-left'}">${col}</th>`)
          .join('')}</tr></thead>`;

        const tbody = `<tbody class="divide-y divide-slate-100 bg-white text-slate-800 text-xs sm:text-sm font-sans">${bodyRows
          .map((row) => {
            const cols = row
              .split('|')
              .slice(1, -1)
              .map((c) => c.trim());
            return `<tr class="hover:bg-sky-50/40 transition-colors">${cols
              .map(
                (c, i) =>
                  `<td class="px-4 py-2.5 border-r last:border-r-0 border-slate-100 ${alignments[i] || 'text-left'}">${c}</td>`
              )
              .join('')}</tr>`;
          })
          .join('')}</tbody>`;

        const tableHtml = `<div class="my-4 overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white"><table class="min-w-full divide-y divide-slate-200">${thead}${tbody}</table></div>`;

        const preHtml = preLines.length > 0 ? `<p class="my-2 leading-relaxed text-slate-800">${preLines.join('<br />')}</p>` : '';
        const postHtml = postLines.length > 0 ? `<p class="my-2 leading-relaxed text-slate-800">${postLines.join('<br />')}</p>` : '';

        return `${preHtml}${tableHtml}${postHtml}`;
      }

      // 4. Headings & Step Badges
      if (/^#####\s+(.+)$/m.test(trimmed)) {
        const headingMatch = trimmed.match(/^#####\s+(.+)$/);
        if (headingMatch) {
          return `<h6 class="text-xs font-bold text-slate-900 mt-3 mb-1 font-display uppercase tracking-wider">${headingMatch[1]}</h6>`;
        }
      }

      if (/^####\s+(.+)$/m.test(trimmed)) {
        const headingMatch = trimmed.match(/^####\s+(.+)$/);
        if (headingMatch) {
          const title = headingMatch[1].trim();
          const stepMatch = title.match(/^(Langkah\s+\d+:?)\s*(.*)$/i);
          if (stepMatch) {
            return `<div class="mt-4 mb-2 flex items-center gap-2 flex-wrap"><span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded font-mono uppercase tracking-wide">${stepMatch[1].replace(':', '')}</span><span class="text-sm font-bold text-slate-900">${stepMatch[2]}</span></div>`;
          }
          return `<h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-3.5 mb-1.5 font-display">${title}</h5>`;
        }
      }

      // Check for bold step header (e.g., **Langkah 1: Menghitung Elektron**)
      const boldStepMatch = trimmed.match(/^<strong class="font-bold text-slate-900">(Langkah\s+\d+:?)\s*(.*?)<\/strong>$/i);
      if (boldStepMatch) {
        return `<div class="mt-4 mb-2 flex items-center gap-2 flex-wrap"><span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded font-mono uppercase tracking-wide">${boldStepMatch[1].replace(':', '')}</span><span class="text-sm font-bold text-slate-900">${boldStepMatch[2]}</span></div>`;
      }

      // Check for Kesimpulan Evaluator Juri callout
      const juriMatch = trimmed.match(/^<strong class="font-bold text-slate-900">Kesimpulan(?:\s+Evaluator)?\s+Juri:?<\/strong>\s*(?:<br\s*\/?>)?\s*([\s\S]*)$/i);
      if (juriMatch) {
        const rawConclusion = juriMatch[1].trim();
        const formattedConclusion = rawConclusion
          .split('\n')
          .map((line) => {
            const trimmedLine = line.trim();
            if (/^[-*•]\s+/.test(trimmedLine)) {
              return `<span class="block pl-3 py-0.5 text-emerald-900 font-medium">• ${trimmedLine.replace(/^[-*•]\s+/, '')}</span>`;
            }
            return trimmedLine;
          })
          .join('<br />');

        return `<div class="my-4 p-4.5 bg-emerald-50/90 border border-emerald-200/90 rounded-2xl shadow-xs">
          <div class="flex items-center gap-2 mb-2 text-emerald-900 font-bold text-xs font-display tracking-tight">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Kesimpulan Evaluator Juri</span>
          </div>
          <div class="text-xs sm:text-sm text-emerald-950 leading-relaxed font-sans">${formattedConclusion}</div>
        </div>`;
      }

      if (/^###\s+(.+)$/m.test(trimmed)) {
        const headingMatch = trimmed.match(/^###\s+(.+)$/);
        if (headingMatch) {
          return `<h4 class="text-sm font-bold text-slate-900 mt-4 mb-2 pb-1 border-b border-slate-100 font-display">${headingMatch[1]}</h4>`;
        }
      }
      if (/^##\s+(.+)$/m.test(trimmed)) {
        const headingMatch = trimmed.match(/^##\s+(.+)$/);
        if (headingMatch) {
          return `<h3 class="text-base font-bold text-slate-900 mt-5 mb-2 font-display">${headingMatch[1]}</h3>`;
        }
      }
      if (/^#\s+(.+)$/m.test(trimmed)) {
        const headingMatch = trimmed.match(/^#\s+(.+)$/);
        if (headingMatch) {
          return `<h2 class="text-lg font-extrabold text-slate-900 mt-6 mb-3 font-display">${headingMatch[1]}</h2>`;
        }
      }

      // 5. Blockquote (> ...)
      if (trimmed.startsWith('>')) {
        const quoteContent = trimmed
          .split('\n')
          .map((line) => line.replace(/^>\s?/, ''))
          .join('<br />');
        return `<blockquote class="p-3 my-3 bg-amber-50/70 border-l-4 border-amber-400 rounded-r-xl text-xs text-amber-950 font-medium leading-relaxed shadow-2xs">${quoteContent}</blockquote>`;
      }

      // 6. Unordered List (- item or * item)
      if (lines.length > 0 && lines.every((l) => /^\s*[-*•]\s+/.test(l))) {
        const listItems = lines
          .map((l) => `<li class="leading-relaxed">${l.replace(/^\s*[-*•]\s+/, '')}</li>`)
          .join('');
        return `<ul class="list-disc list-inside space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 pl-1">${listItems}</ul>`;
      }

      // 7. Ordered List (1. item, 2. item)
      if (lines.length > 0 && lines.every((l) => /^\s*\d+\.\s+/.test(l))) {
        const listItems = lines
          .map((l) => `<li class="leading-relaxed pl-1">${l.replace(/^\s*\d+\.\s+/, '')}</li>`)
          .join('');
        return `<ol class="list-decimal list-inside space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 pl-1">${listItems}</ol>`;
      }

      // 8. General paragraphs: convert any inline headings if present
      const linesProcessed = lines.map((l) => {
        if (/^####\s+(.+)$/.test(l)) {
          const title = l.replace(/^####\s+/, '').trim();
          const stepMatch = title.match(/^(Langkah\s+\d+:?)\s*(.*)$/i);
          if (stepMatch) {
            return `<div class="mt-4 mb-2 flex items-center gap-2 flex-wrap"><span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded font-mono uppercase tracking-wide">${stepMatch[1].replace(':', '')}</span><span class="text-sm font-bold text-slate-900">${stepMatch[2]}</span></div>`;
          }
          return `<h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-3.5 mb-1.5 font-display">${title}</h5>`;
        }
        if (/^###\s+(.+)$/.test(l)) {
          return `<h4 class="text-sm font-bold text-slate-900 mt-3 mb-1.5 font-display">${l.replace(/^###\s+/, '')}</h4>`;
        }
        if (/^##\s+(.+)$/.test(l)) {
          return `<h3 class="text-base font-bold text-slate-900 mt-4 mb-2 font-display">${l.replace(/^##\s+/, '')}</h3>`;
        }
        return l;
      });

      return `<p class="my-2 leading-relaxed text-slate-800">${linesProcessed.join('<br />')}</p>`;
    })
    .filter(Boolean)
    .join('');

  // Restore all math blocks rendered with KaTeX
  protectedMath.forEach((item, idx) => {
    const rendered = item.isDisplay
      ? `<div class="my-3 py-2 px-3 text-center bg-slate-50/90 rounded-lg border border-slate-200/70 overflow-x-auto">${renderKaTeX(item.content, true)}</div>`
      : renderKaTeX(item.content, false);
    processed = processed.replaceAll(`___FORMULA_MATH_${idx}___`, rendered);
  });

  // Restore any remaining SVG blocks
  protectedSvg.forEach((item, idx) => {
    const rendered = item.startsWith('<pre')
      ? item
      : `<div class="my-5 overflow-x-auto flex justify-center items-center py-3 px-2 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-2xs">${item}</div>`;
    processed = processed.replaceAll(`___PROTECTED_SVG_${idx}___`, rendered);
  });

  return processed;
}

/**
 * Render purely inline text with KaTeX math without paragraph or block wrappers
 */
export function renderInlineText(rawText: string): string {
  if (!rawText) return '';
  const { text, protectedMath, protectedSvg } = preprocessFriendlyFormula(rawText);

  let processed = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em class="italic">$1</em>')
    .replace(/`([^`\n]+)`/g, '<code class="px-1 bg-slate-100 rounded font-mono text-xs">$1</code>');

  // Restore math blocks as inline KaTeX (never display/block)
  protectedMath.forEach((item, idx) => {
    const rendered = renderKaTeX(item.content, false);
    processed = processed.replaceAll(`___FORMULA_MATH_${idx}___`, rendered);
  });

  protectedSvg.forEach((item, idx) => {
    processed = processed.replaceAll(`___PROTECTED_SVG_${idx}___`, item);
  });

  return processed;
}

/**
 * Auto-format chemical shorthand typed in textarea into clear KaTeX formulas
 */
export function autoFormatChemicalShorthand(input: string): string {
  if (!input) return input;

  let formatted = input;

  // Replace arrows with LaTeX arrows if not already wrapped
  formatted = formatted.replace(/<=>|<->/g, ' $\\rightleftharpoons$ ');
  formatted = formatted.replace(/(?<![\\$])->/g, ' $\\rightarrow$ ');

  // Replace common thermodynamic shorthand
  formatted = formatted.replace(/\bdelta\s*H(?:_rxn|\^\\circ|\^o|\^°)?\b/gi, '$\\Delta H^\\circ$');
  formatted = formatted.replace(/\bdelta\s*G(?:_rxn|\^\\circ|\^o|\^°)?\b/gi, '$\\Delta G^\\circ$');
  formatted = formatted.replace(/\bdelta\s*S(?:_rxn|\^\\circ|\^o|\^°)?\b/gi, '$\\Delta S^\\circ$');
  formatted = formatted.replace(/\bdelta\s*U\b/gi, '$\\Delta U$');

  // Scientific notation shorthand like 2.5 x 10^5 or 10^-3
  formatted = formatted.replace(/(?:\b|(?<=\d\s*))(?:x|\*)\s*10\^([-\d]+)/gi, ' $\\times 10^{$1}$');

  // Parenthesized fractions: (P*V)/(R*T)
  formatted = formatted.replace(/\(([^\(\)\n]+)\)\s*\/\s*\(([^\(\)\n]+)\)/g, (_, num, den) => {
    return `$\\frac{${num.trim()}}{${den.trim()}}$`;
  });

  return formatted;
}

export interface FormulaTemplate {
  id: string;
  name: string;
  category: 'stoikiometri' | 'termo' | 'larutan' | 'elektro' | 'reaksi';
  snippet: string;
  description: string;
}

export const QUICK_FORMULA_TEMPLATES: FormulaTemplate[] = [
  // Stoikiometri & Gas
  {
    id: 'gas_ideal_n',
    name: 'Mol Gas Ideal (n = PV / RT)',
    category: 'stoikiometri',
    snippet: '$n = \\frac{P \\times V}{R \\times T} = \\frac{1.0 \\times 2.45}{0.08206 \\times 298.15} = 0.10\\text{ mol}$',
    description: 'Menghitung mol gas dari tekanan (atm), volume (L), dan suhu (K)',
  },
  {
    id: 'fraksi_mol',
    name: 'Fraksi Mol (X_A = n_A / n_tot)',
    category: 'stoikiometri',
    snippet: '$X_A = \\frac{n_A}{n_{\\text{tot}}} = \\frac{0.50}{1.00} = 0.50$',
    description: 'Perbandingan mol komponen terhadap total mol campuran',
  },
  {
    id: 'massa_molar_n',
    name: 'Mol dari Massa (n = gram / Mr)',
    category: 'stoikiometri',
    snippet: '$n = \\frac{\\text{massa}}{M_r} = \\frac{394.7\\text{ g}}{197.34\\text{ g/mol}} = 2.00\\text{ mol}$',
    description: 'Menghitung mol zat dari massa dan massa molar',
  },

  // Termodinamika
  {
    id: 'gibbs_termo',
    name: 'Energi Bebas Gibbs (ΔG° = ΔH° - TΔS°)',
    category: 'termo',
    snippet: '$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 57.20 - (298.15 \\times 0.1758) = +4.79\\text{ kJ/mol}$',
    description: 'Kespontanan reaksi pada suhu standar (ingat ubah J ke kJ!)',
  },
  {
    id: 'gibbs_kp',
    name: 'Hubungan Gibbs & Kp (ΔG° = -RT ln K)',
    category: 'termo',
    snippet: '$\\Delta G^\\circ = -RT \\ln K_p \\implies K_p = e^{-\\frac{\\Delta G^\\circ}{RT}}$',
    description: 'Korelasi kesetimbangan kimia dengan potensial termodinamika',
  },
  {
    id: 'hess_rxn',
    name: 'Hukum Hess (ΔH°rxn = ΣΔH°f prod - ΣΔH°f reak)',
    category: 'termo',
    snippet: '$\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H_f^\\circ(\\text{produk}) - \\sum m\\Delta H_f^\\circ(\\text{reaktan})$',
    description: 'Penjumlahan entalpi pembentukan standar',
  },

  // Kesetimbangan & Larutan
  {
    id: 'kc_expression',
    name: 'Tetapan Kesetimbangan (Kc)',
    category: 'larutan',
    snippet: '$K_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}$',
    description: 'Ekspresi tetapan kesetimbangan homogen/heterogen',
  },
  {
    id: 'buffer_henderson',
    name: 'Larutan Penyangga (Henderson-Hasselbalch)',
    category: 'larutan',
    snippet: '$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]}$',
    description: 'Perhitungan pH larutan buffer asam',
  },
  {
    id: 'ksp_solubility',
    name: 'Hasil Kali Kelarutan (Ksp)',
    category: 'larutan',
    snippet: '$K_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = (s)(s) = s^2$',
    description: 'Kelarutan garam sukar larut',
  },

  // Elektrokimia
  {
    id: 'nernst_standard',
    name: 'Persamaan Nernst (E = E° - 0.0592/n log Q)',
    category: 'elektro',
    snippet: '$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.0592}{n}\\log Q$',
    description: 'Potensial sel pada kondisi konsentrasi non-standar (298 K)',
  },
  {
    id: 'gibbs_cell',
    name: 'Potensial Sel & Gibbs (ΔG° = -nFE°)',
    category: 'elektro',
    snippet: '$\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}} = -(2)(96485)(1.10)\\text{ J}$',
    description: 'Hubungan energi listrik sel galvani dan termodinamika',
  },

  // Reaksi Kimia
  {
    id: 'rxn_equilibrium',
    name: 'Reaksi Kesetimbangan (A + B ⇌ C + D)',
    category: 'reaksi',
    snippet: '$$\\ce{N2O4(g) <=> 2NO2(g)}$$',
    description: 'Persamaan reaksi bolak-balik dengan panah kesetimbangan',
  },
  {
    id: 'rxn_redox',
    name: 'Reaksi Redoks Lengkap',
    category: 'reaksi',
    snippet: '$$\\ce{2MnO4- + 5C2O4^2- + 16H+ -> 2Mn^2+ + 10CO2 + 8H2O}$$',
    description: 'Penyetaraan reaksi redoks metode ion-elektron suasana asam',
  },
];

export interface ChemToolbarAction {
  id: string;
  label: string;
  tooltip: string;
  snippet: string;
  category: 'format' | 'arrow' | 'phase' | 'thermo' | 'greek' | 'ion';
  displayMath?: string;
  customHandler?: 'fraction' | 'superscript' | 'subscript' | 'ce';
}

export const CHEM_TOOLBAR_ACTIONS: ChemToolbarAction[] = [
  // Format Cepat (Smart handlers for SMA students)
  { id: 'fraction', label: 'a/b', tooltip: 'Pecahan \\frac{a}{b}', snippet: '$\\frac{a}{b}$', category: 'format', customHandler: 'fraction' },
  { id: 'smart_ce', label: 'ce{..}', tooltip: 'Bungkus dengan formula kimia KaTeX \\ce{...}', snippet: '$\\ce{$$SEL$$}$', category: 'format', customHandler: 'ce' },
  { id: 'superscript', label: 'Xᵃ', tooltip: 'Superscript / Pangkat / Muatan', snippet: '^{2}', category: 'format', customHandler: 'superscript' },
  { id: 'subscript', label: 'Xₐ', tooltip: 'Subscript / Indeks Atom', snippet: '_{1}', category: 'format', customHandler: 'subscript' },

  // Panah Reaksi
  { id: 'arrow_forward', label: '→', tooltip: 'Panah reaksi searah', snippet: ' $\\rightarrow$ ', category: 'arrow', displayMath: '\\rightarrow' },
  { id: 'arrow_equil', label: '⇌', tooltip: 'Panah reaksi kesetimbangan', snippet: ' $\\rightleftharpoons$ ', category: 'arrow', displayMath: '\\rightleftharpoons' },
  { id: 'arrow_gas', label: '↑', tooltip: 'Gas terbentuk / menguap', snippet: ' $\\uparrow$ ', category: 'arrow', displayMath: '\\uparrow' },
  { id: 'arrow_precip', label: '↓', tooltip: 'Endapan terbentuk', snippet: ' $\\downarrow$ ', category: 'arrow', displayMath: '\\downarrow' },

  // Fasa Zat Sekali Klik
  { id: 'phase_aq', label: '(aq)', tooltip: 'Fase larutan berair (aqueous)', snippet: '(aq)', category: 'phase' },
  { id: 'phase_s', label: '(s)', tooltip: 'Fase padat (solid)', snippet: '(s)', category: 'phase' },
  { id: 'phase_l', label: '(l)', tooltip: 'Fase cair murni (liquid)', snippet: '(l)', category: 'phase' },
  { id: 'phase_g', label: '(g)', tooltip: 'Fase gas (gas)', snippet: '(g)', category: 'phase' },

  // Termokimia & Kesetimbangan
  { id: 'delta_h', label: 'ΔH°', tooltip: 'Entalpi standar \\Delta H^\\circ', snippet: ' $\\Delta H^\\circ$ ', category: 'thermo', displayMath: '\\Delta H^\\circ' },
  { id: 'delta_g', label: 'ΔG°', tooltip: 'Energi bebas Gibbs \\Delta G^\\circ', snippet: ' $\\Delta G^\\circ$ ', category: 'thermo', displayMath: '\\Delta G^\\circ' },
  { id: 'delta_s', label: 'ΔS°', tooltip: 'Entropi standar \\Delta S^\\circ', snippet: ' $\\Delta S^\\circ$ ', category: 'thermo', displayMath: '\\Delta S^\\circ' },
  { id: 'k_eq', label: 'K_c', tooltip: 'Tetapan kesetimbangan konsentrasi', snippet: ' $K_c$ ', category: 'thermo', displayMath: 'K_c' },
  { id: 'k_sp', label: 'K_sp', tooltip: 'Hasil kali kelarutan', snippet: ' $K_{sp}$ ', category: 'thermo', displayMath: 'K_{sp}' },
  { id: 'e_cell', label: 'E°', tooltip: 'Potensial reduksi standar \\E^\\circ', snippet: ' $E^\\circ$ ', category: 'thermo', displayMath: 'E^\\circ' },
  { id: 'ph_val', label: 'pH', tooltip: 'Derajat keasaman pH', snippet: 'pH', category: 'thermo' },

  // Simbol Sains & Yunani
  { id: 'times_ten', label: '×10ⁿ', tooltip: 'Notasi Ilmiah \\times 10^{n}', snippet: ' $\\times 10^{5}$ ', category: 'greek', displayMath: '\\times 10^n' },
  { id: 'deg_c', label: '°C', tooltip: 'Derajat Celcius', snippet: ' $^\\circ\\text{C}$ ', category: 'greek', displayMath: '^\\circ\\text{C}' },
  { id: 'alpha', label: 'α', tooltip: 'Alfa (derajat disosiasi)', snippet: ' $\\alpha$ ', category: 'greek', displayMath: '\\alpha' },
  { id: 'delta_sym', label: 'Δ', tooltip: 'Delta (perubahan)', snippet: ' $\\Delta$ ', category: 'greek', displayMath: '\\Delta' },
  { id: 'approx', label: '≈', tooltip: 'Mendekati / kira-kira', snippet: ' $\\approx$ ', category: 'greek', displayMath: '\\approx' },

  // Ion Populer
  { id: 'ion_h_plus', label: 'H⁺', tooltip: 'Ion hidrogen / proton', snippet: ' $\\ce{H+}$ ', category: 'ion', displayMath: '\\ce{H+}' },
  { id: 'ion_oh_minus', label: 'OH⁻', tooltip: 'Ion hidroksida', snippet: ' $\\ce{OH-}$ ', category: 'ion' },
  { id: 'electron', label: 'e⁻', tooltip: 'Elektron', snippet: ' $e^-$ ', category: 'ion', displayMath: 'e^-' },
];
