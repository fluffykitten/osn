/**
 * scripts/audit-materials-typography.ts
 * 
 * Linter & Auditor Otomatis Tipografi & Reading Experience Materi Kimia Axioma Academy
 * Mencakup 38 Modul (10 Topik OSN Classic + Revamped, 16 Modul SMA Fase E/F1/F2, 12 Topik Cambridge IGCSE).
 * 
 * Parameter Pemeriksaan:
 * 1. Spasi Tanda Kurung Janggal:
 *    - Deteksi spasi berlebih dalam kurung seperti "( teks )", "( teks)", atau "(teks )" di luar formula math/SVG/links.
 * 2. Kepadatan Huruf Tebal (Bold Density Fatigue):
 *    - Menghitung rasio kata di dalam **...** terhadap total kata paragraf.
 *    - Flag peringatan (Warning) jika rasio > 25% pada paragraf dengan minimal 15 kata.
 * 3. Integritas Format List & Indentasi:
 *    - Deteksi list mentah tanpa spasi pasca-marker (-kata, 1.kata).
 *    - Deteksi karakter marker list non-standar atau rusak.
 * 4. Kebocoran Sintaks & Integritas KaTeX (Fatal Error):
 *    - Deteksi placeholder internal bocor (___FORMULA_MATH_, ___PROTECTED_SVG_, undefined, [object Object]).
 *    - Keseimbangan delimiter math ($ dan $$).
 *    - Verifikasi render KaTeX tanpa runtime error.
 * 5. Residu Alignment Usang:
 *    - Deteksi sisa styling "text-justify" atau "flex gap-" pada heading.
 * 
 * Penggunaan:
 *   npx tsx scripts/audit-materials-typography.ts
 *   npx tsx scripts/audit-materials-typography.ts --strict
 *   npx tsx scripts/audit-materials-typography.ts --verbose
 *   npx tsx scripts/audit-materials-typography.ts --category=sma
 */

import katex from 'katex';
import 'katex/dist/contrib/mhchem.mjs';

import { OSN_MATERIALS_ALL as OSN_CLASSIC } from '../src/data/materials/osn/index.ts';
import { OSN_MATERIALS_REVAMPED_ALL as OSN_REVAMPED } from '../src/data/materials/osn_revamped/index.ts';
import { SMA_MATERIALS_FASE_E } from '../src/data/materials/smaFaseE.ts';
import { SMA_MATERIALS_FASE_F1 } from '../src/data/materials/smaFaseF1.ts';
import { SMA_MATERIALS_FASE_F2 } from '../src/data/materials/smaFaseF2.ts';
import { IGCSE_MATERIALS_ALL as IGCSE_MATERIALS } from '../src/data/materials/igcse/index.ts';
import type { MaterialItem, ConceptBlock } from '../src/data/materialsData.ts';

// CLI Flags
const args = process.argv.slice(2);
const isStrict = args.includes('--strict');
const isVerbose = args.includes('--verbose') || args.includes('-v');
const categoryFilter = args.find((a) => a.startsWith('--category='))?.split('=')[1]?.toLowerCase();
const typeFilter = args.find((a) => a.startsWith('--type='))?.split('=')[1]?.toLowerCase();

interface AuditIssue {
  severity: 'FATAL' | 'WARN';
  category: 'Spasi Tanda Kurung' | 'Bold Fatigue' | 'List Format' | 'KaTeX / Syntax Leak' | 'Alignment Leak';
  topicId: string | number;
  topicTitle: string;
  section: 'Summary' | 'Prerequisite' | 'CoreConcept' | 'WorkedExample' | 'Metadata';
  conceptTag?: string;
  message: string;
  snippet?: string;
  suggestedFix?: string;
  metric?: string;
}

const issues: AuditIssue[] = [];

// Stats Counters
let totalMaterialsScanned = 0;
let totalConceptBlocksScanned = 0;
let totalParagraphsScanned = 0;
let totalMathFormulasTested = 0;

function normalizeFormula(formula: string): string {
  return formula
    .replace(/(?<!\\)%/g, '\\%')
    .replace(/\\\\([a-zA-Z]+)/g, '\\$1');
}

/**
 * Mask tokens (KaTeX, SVG, HTML, Links, Code) to prevent false positives when testing prose typography
 */
function maskProtectedTokens(text: string): {
  masked: string;
  protectedTokens: string[];
} {
  const protectedTokens: string[] = [];
  let masked = text;

  // 1. Code blocks ```...```
  masked = masked.replace(/```[\s\S]*?```/g, (match) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `__TOKEN_CODE_${idx}__`;
  });

  // 2. Inline code `...`
  masked = masked.replace(/`[^`]+`/g, (match) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `__TOKEN_INLINE_CODE_${idx}__`;
  });

  // 3. Display Math $$...$$
  masked = masked.replace(/\$\$[\s\S]*?\$\$/g, (match) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `__TOKEN_DISPLAY_MATH_${idx}__`;
  });

  // 4. Inline Math $...$ (ignore escaped \$)
  masked = masked.replace(/(?<!\\)\$((?:\\\$|[^$])+?)(?<!\\)\$/g, (match) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `__TOKEN_INLINE_MATH_${idx}__`;
  });

  // 5. Inline SVG tags <svg ... </svg>
  masked = masked.replace(/<svg[\s\S]*?<\/svg>/gi, (match) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `__TOKEN_SVG_${idx}__`;
  });

  // 6. Markdown Links [label](url) -> protect url
  masked = masked.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, label) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `[${label}](__TOKEN_LINK_URL_${idx}__)`;
  });

  // 7. General HTML tags <...>
  masked = masked.replace(/<[^>]+>/g, (match) => {
    const idx = protectedTokens.length;
    protectedTokens.push(match);
    return `__TOKEN_HTML_${idx}__`;
  });

  return { masked, protectedTokens };
}

/**
 * Audit check for KaTeX math integrity and syntax errors
 */
function auditMathDelimitersAndSyntax(
  rawText: string,
  topic: MaterialItem,
  section: AuditIssue['section'],
  conceptTag?: string
) {
  // Check for leaked internal tokens
  const leakMatches = rawText.match(/(___FORMULA_MATH_\d+___|___PROTECTED_SVG_\d+___|\bundefined\b|\[object Object\])/g);
  if (leakMatches) {
    leakMatches.forEach((leak) => {
      issues.push({
        severity: 'FATAL',
        category: 'KaTeX / Syntax Leak',
        topicId: topic.id,
        topicTitle: topic.title,
        section,
        conceptTag,
        message: `Ditemukan token bocor internal sistem: "${leak}"`,
        snippet: leak,
      });
    });
  }

  // Display math balance $$ ... $$
  const displayParts = rawText.split('$$');
  if (displayParts.length % 2 === 0) {
    issues.push({
      severity: 'FATAL',
      category: 'KaTeX / Syntax Leak',
      topicId: topic.id,
      topicTitle: topic.title,
      section,
      conceptTag,
      message: 'Jumlah delimiter display math ($$) ganjil! Ada blok rumus yang tidak tertutup.',
    });
  }

  // Test KaTeX on display formulas
  for (let i = 1; i < displayParts.length; i += 2) {
    const formula = displayParts[i].trim();
    if (formula) {
      totalMathFormulasTested++;
      try {
        katex.renderToString(normalizeFormula(formula), {
          displayMode: true,
          throwOnError: true,
        });
      } catch (err: any) {
        issues.push({
          severity: 'FATAL',
          category: 'KaTeX / Syntax Leak',
          topicId: topic.id,
          topicTitle: topic.title,
          section,
          conceptTag,
          message: `Galat sintaks KaTeX display math: ${err.message}`,
          snippet: formula.slice(0, 100),
        });
      }
    }
  }

  // Inline math balance on parts outside $$
  for (let i = 0; i < displayParts.length; i += 2) {
    const chunk = displayParts[i];
    const tokens = chunk.split(/(?<!\\)\$/);
    if (tokens.length % 2 === 0) {
      issues.push({
        severity: 'WARN',
        category: 'KaTeX / Syntax Leak',
        topicId: topic.id,
        topicTitle: topic.title,
        section,
        conceptTag,
        message: 'Terdapat jumlah delimiter inline math ($) ganjil pada baris.',
        snippet: chunk.slice(0, 100),
      });
    }

    // Test inline KaTeX formulas
    for (let j = 1; j < tokens.length; j += 2) {
      const inlineFormula = tokens[j].trim();
      if (inlineFormula) {
        totalMathFormulasTested++;
        try {
          katex.renderToString(normalizeFormula(inlineFormula), {
            displayMode: false,
            throwOnError: true,
          });
        } catch (err: any) {
          issues.push({
            severity: 'FATAL',
            category: 'KaTeX / Syntax Leak',
            topicId: topic.id,
            topicTitle: topic.title,
            section,
            conceptTag,
            message: `Galat sintaks KaTeX inline math: ${err.message}`,
            snippet: inlineFormula.slice(0, 80),
          });
        }
      }
    }
  }
}

/**
 * Audit check for awkward bracket spacing outside math/links/svg
 */
function auditParenthesesSpacing(
  maskedText: string,
  topic: MaterialItem,
  section: AuditIssue['section'],
  conceptTag?: string
) {
  const lines = maskedText.split('\n');

  lines.forEach((line, lineNum) => {
    // Ignore lines that are only comments or empty
    const trimmed = line.trim();
    if (!trimmed) return;

    // Pattern 1: Opening bracket followed by space: ( teks
    // Pattern 2: Closing bracket preceded by space: teks )
    // Regex matches "( " or " )" where inner content is not just empty fill-in blanks like ( ) or (   )
    const parenMatches = trimmed.matchAll(/\(\s+([^\)\s]+)|([^\(\s]+)\s+\)/g);

    for (const match of parenMatches) {
      const fullMatch = match[0];
      // Whitelist check: If it's a fill-in-the-blank slot like `( )` or `(  )` or `(_____)`
      if (/^\(\s*\)$/.test(fullMatch)) continue;
      // Whitelist check: If it is part of markdown token placeholder e.g. (__TOKEN_...)
      if (fullMatch.includes('__TOKEN_')) continue;

      // Extract a clean snippet
      const matchIndex = match.index ?? 0;
      const start = Math.max(0, matchIndex - 20);
      const end = Math.min(trimmed.length, matchIndex + fullMatch.length + 20);
      const snippet = trimmed.slice(start, end);

      issues.push({
        severity: 'WARN',
        category: 'Spasi Tanda Kurung',
        topicId: topic.id,
        topicTitle: topic.title,
        section,
        conceptTag,
        message: `Spasi tanda kurung renggang tidak wajar "${fullMatch.trim()}" (Baris ~${lineNum + 1})`,
        snippet,
        suggestedFix: fullMatch.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')'),
      });
    }
  });
}

/**
 * Audit check for bold fatigue (ratio of bold words in paragraphs)
 */
/**
 * Audit check for bold fatigue (ratio of bold words in paragraphs and list items)
 */
function auditBoldDensity(
  maskedText: string,
  topic: MaterialItem,
  section: AuditIssue['section'],
  conceptTag?: string
) {
  // Split into paragraphs / top-level blocks (separated by blank lines)
  const blocks = maskedText.split(/\n\s*\n/);

  blocks.forEach((block) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    // Skip structural blocks that are naturally bolded
    // 1. Headings (#, ##, ###, ####)
    if (/^#{1,6}\s+/.test(trimmed)) return;
    // 2. Callout banners (> [!NOTE], etc.)
    if (/^>\s*\[!/i.test(trimmed)) return;
    // 3. Tables (| Header | Header |)
    if (trimmed.startsWith('|')) return;

    // Strip blockquote markers for content analysis if entire block is quoted
    const blockContent = trimmed.split('\n').map(l => l.replace(/^[ \t]*>+[ \t]?/, '')).join('\n').trim();
    if (!blockContent) return;

    // Check if this block contains a markdown list
    const isList = /^[ \t]*(?:[-*•]|\d+\.|[a-zA-Z]\.)\s+/m.test(blockContent);

    if (isList) {
      // Split into individual list items (each starting with a bullet/number/letter)
      const lines = blockContent.split('\n');
      const items: string[] = [];
      let curItem: string[] = [];

      for (const line of lines) {
        if (/^[ \t]*(?:[-*•]|\d+\.|[a-zA-Z]\.)\s+/.test(line)) {
          if (curItem.length > 0) items.push(curItem.join('\n'));
          curItem = [line];
        } else {
          if (curItem.length > 0) {
            curItem.push(line);
          } else {
            items.push(line);
          }
        }
      }
      if (curItem.length > 0) items.push(curItem.join('\n'));

      items.forEach((item) => {
        const itemTrimmed = item.trim();
        if (!itemTrimmed) return;

        totalParagraphsScanned++;

        // Exclude structural leading bold title: e.g. "1. **Title:**" or "- **Title (*Italic*):**" or "a. **Title:**"
        const withoutLeadBold = itemTrimmed.replace(/^[ \t]*(?:[-*•]|\d+\.|[a-zA-Z]\.)\s*\*\*(?:[^*]|\*(?!\*))+?\*\*:?\s*/, '');

        const normalized = withoutLeadBold.replace(/__TOKEN_[A-Z_0-9]+__/g, 'W');
        const words = normalized.split(/\s+/).filter(Boolean);
        const totalWordCount = words.length;

        // In list item body, only flag if substantial body (>= 12 words)
        if (totalWordCount < 12) return;

        // Match bold spans allowing single asterisks for nested italics: e.g. **Title (*Italic*)**
        const boldMatches = withoutLeadBold.match(/\*\*((?:[^*]|\*(?!\*))+?)\*\*/g) || [];
        if (boldMatches.length === 0) return;

        let boldWordCount = 0;
        boldMatches.forEach((b) => {
          const inner = b.slice(2, -2).trim().replace(/__TOKEN_[A-Z_0-9]+__/g, 'W');
          boldWordCount += inner.split(/\s+/).filter(Boolean).length;
        });

        const boldRatio = (boldWordCount / totalWordCount) * 100;
        if (boldRatio > 25) {
          issues.push({
            severity: 'WARN',
            category: 'Bold Fatigue',
            topicId: topic.id,
            topicTitle: topic.title,
            section,
            conceptTag,
            metric: `${boldRatio.toFixed(1)}% (${boldWordCount}/${totalWordCount} kata)`,
            message: `Kepadatan teks tebal tinggi (${boldRatio.toFixed(1)}% kata dalam **...**). Berpotensi memicu bold fatigue.`,
            snippet: itemTrimmed.slice(0, 140) + '...',
          });
        }
      });
    } else {
      // Regular prose paragraph
      totalParagraphsScanned++;

      // Strip structural run-in heading: e.g. "**Title:** Content..." or "**Title (*Italic*):**"
      const withoutLeadBold = blockContent.replace(/^[ \t]*\*\*(?:[^*]|\*(?!\*))+?\*\*:?\s*/, '');

      const normalizedText = withoutLeadBold.replace(/__TOKEN_[A-Z_0-9]+__/g, 'W');
      const words = normalizedText.split(/\s+/).filter(Boolean);
      const totalWordCount = words.length;

      if (totalWordCount < 12) return;

      // Match bold spans allowing single asterisks for nested italics
      const boldMatches = withoutLeadBold.match(/\*\*((?:[^*]|\*(?!\*))+?)\*\*/g) || [];
      if (boldMatches.length === 0) return;

      let boldWordCount = 0;
      boldMatches.forEach((b) => {
        const inner = b.slice(2, -2).trim().replace(/__TOKEN_[A-Z_0-9]+__/g, 'W');
        boldWordCount += inner.split(/\s+/).filter(Boolean).length;
      });

      const boldRatio = (boldWordCount / totalWordCount) * 100;
      if (boldRatio > 25) {
        issues.push({
          severity: 'WARN',
          category: 'Bold Fatigue',
          topicId: topic.id,
          topicTitle: topic.title,
          section,
          conceptTag,
          metric: `${boldRatio.toFixed(1)}% (${boldWordCount}/${totalWordCount} kata)`,
          message: `Kepadatan teks tebal tinggi (${boldRatio.toFixed(1)}% kata dalam **...**). Berpotensi memicu bold fatigue.`,
          snippet: trimmed.slice(0, 140) + '...',
        });
      }
    }
  });
}

/**
 * Audit check for raw / broken list format
 */
function auditListFormatting(
  rawText: string,
  topic: MaterialItem,
  section: AuditIssue['section'],
  conceptTag?: string
) {
  const lines = rawText.split('\n');

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    // Ignore horizontal rules, HTML comments, or SVG
    if (trimmed.startsWith('---') || trimmed.startsWith('<!--') || trimmed.startsWith('<svg')) return;

    // 1. Broken unordered list: -kata or •kata without space (ignore chemical prefixes like -CH3, -OH)
    if (/^[ \t]*[-•][A-Za-z]/.test(line)) {
      const isChemicalGroup = /^[ \t]*-(CH3|OH|COOH|NH2|Cl|Br|NO2|C[0-9]|H[0-9])\b/.test(line);
      if (!isChemicalGroup) {
        issues.push({
          severity: 'WARN',
          category: 'List Format',
          topicId: topic.id,
          topicTitle: topic.title,
          section,
          conceptTag,
          message: `Marker list tidak memiliki spasi pemisah di baris ${idx + 1}`,
          snippet: trimmed,
          suggestedFix: line.replace(/^([ \t]*[-•])([A-Za-z])/, '$1 $2').trim(),
        });
      }
    }

    // 2. Asterisk list: *kata without space (ensure it is not italic markdown *italic*)
    if (/^[ \t]*\*[A-Za-z]/.test(line)) {
      const hasClosingAsterisk = /^\*[^*\s]+.*?\*/.test(trimmed);
      if (!hasClosingAsterisk) {
        issues.push({
          severity: 'WARN',
          category: 'List Format',
          topicId: topic.id,
          topicTitle: topic.title,
          section,
          conceptTag,
          message: `Marker list asterisk (*) tidak memiliki spasi pemisah di baris ${idx + 1}`,
          snippet: trimmed,
          suggestedFix: line.replace(/^([ \t]*\*)([A-Za-z])/, '$1 $2').trim(),
        });
      }
    }

    // 3. Broken ordered list: 1.kata without space
    if (/^[ \t]*\d+\.[A-Za-z]/.test(line)) {
      issues.push({
        severity: 'WARN',
        category: 'List Format',
        topicId: topic.id,
        topicTitle: topic.title,
        section,
        conceptTag,
        message: `Penomoran list tidak memiliki spasi pemisah di baris ${idx + 1}`,
        snippet: trimmed,
        suggestedFix: line.replace(/^([ \t]*\d+\.)([A-Za-z])/, '$1 $2').trim(),
      });
    }
  });
}

/**
 * Audit check for lingering alignment leaks
 */
function auditAlignmentLeaks(
  rawText: string,
  topic: MaterialItem,
  section: AuditIssue['section'],
  conceptTag?: string
) {
  if (rawText.includes('text-justify')) {
    issues.push({
      severity: 'FATAL',
      category: 'Alignment Leak',
      topicId: topic.id,
      topicTitle: topic.title,
      section,
      conceptTag,
      message: 'Ditemukan sisa class styling "text-justify" pada blok teks.',
      snippet: rawText.slice(0, 100),
    });
  }

  // Check for flex gap in custom HTML headings that causes bracket stretching
  if (/<h[1-6][^>]*class="[^"]*flex\s+gap-[^"]*"[^>]*>/i.test(rawText)) {
    issues.push({
      severity: 'WARN',
      category: 'Alignment Leak',
      topicId: topic.id,
      topicTitle: topic.title,
      section,
      conceptTag,
      message: 'Ditemukan heading dengan flex gap- yang dapat meregangkan tanda kurung.',
      snippet: rawText.slice(0, 100),
    });
  }
}

/**
 * Comprehensive scan of a text block
 */
function auditTextBlock(
  rawText: string,
  topic: MaterialItem,
  section: AuditIssue['section'],
  conceptTag?: string
) {
  if (!rawText || typeof rawText !== 'string') return;

  // 1. Audit Math & Syntax Leaks (Direct on Raw)
  auditMathDelimitersAndSyntax(rawText, topic, section, conceptTag);

  // 2. Audit List Formatting & Alignment Leaks
  auditListFormatting(rawText, topic, section, conceptTag);
  auditAlignmentLeaks(rawText, topic, section, conceptTag);

  // 3. Mask Tokens for Prose Typography Audit
  const { masked } = maskProtectedTokens(rawText);

  // 4. Audit Awkward Parentheses Spacing
  auditParenthesesSpacing(masked, topic, section, conceptTag);

  // 5. Audit Bold Density Fatigue
  auditBoldDensity(masked, topic, section, conceptTag);
}

function auditConceptBlock(
  block: ConceptBlock,
  topic: MaterialItem,
  section: AuditIssue['section']
) {
  totalConceptBlocksScanned++;
  if (block.summary) {
    auditTextBlock(block.summary, topic, section, block.tag);
  }
  if (block.content) {
    auditTextBlock(block.content, topic, section, block.tag);
  }
  if (block.checkpointQuizzes) {
    block.checkpointQuizzes.forEach((quiz) => {
      if (quiz.question) auditTextBlock(quiz.question, topic, section, `${block.tag} (${quiz.id})`);
      if (quiz.explanation) auditTextBlock(quiz.explanation, topic, section, `${block.tag} (${quiz.id})`);
    });
  }
}

function auditMaterial(item: MaterialItem, datasetName: string) {
  totalMaterialsScanned++;

  if (item.summary) {
    auditTextBlock(item.summary, item, 'Summary');
  }

  (item.prerequisites || []).forEach((b) => auditConceptBlock(b, item, 'Prerequisite'));
  (item.core_concepts || []).forEach((b) => auditConceptBlock(b, item, 'CoreConcept'));
  (item.worked_examples || []).forEach((b) => auditConceptBlock(b, item, 'WorkedExample'));
}

// -------------------------------------------------------------
// EXECUTION
// -------------------------------------------------------------

console.log('='.repeat(70));
console.log('🔍 AUDITOR & LINTER TIPOGRAFI MATERI KIMIA AXIOMA ACADEMY');
console.log('='.repeat(70));
console.log('Memeriksa 38 modul materi (SMA Fase E/F1/F2, OSN Classic/Revamped, IGCSE)...');
if (categoryFilter) {
  console.log(`📌 Filter Kategori Aktif: ${categoryFilter.toUpperCase()}`);
}

const ALL_SMA = [...SMA_MATERIALS_FASE_E, ...SMA_MATERIALS_FASE_F1, ...SMA_MATERIALS_FASE_F2];

if (!categoryFilter || categoryFilter === 'osn') {
  console.log('\n📖 [1/3] Mengaudit Modul OSN Kimia...');
  OSN_CLASSIC.forEach((m) => auditMaterial(m, 'OSN Classic'));
  OSN_REVAMPED.forEach((m) => {
    // Only audit topic 4 from revamped to avoid double counting identical topics
    if (m.topic_number === 4) {
      auditMaterial(m, 'OSN Revamped');
    }
  });
}

if (!categoryFilter || categoryFilter === 'sma') {
  console.log('📖 [2/3] Mengaudit 16 Modul Silabus Kimia SMA (Fase E & F)...');
  ALL_SMA.forEach((m) => auditMaterial(m, 'SMA'));
}

if (!categoryFilter || categoryFilter === 'igcse') {
  console.log('📖 [3/3] Mengaudit 12 Topik Cambridge IGCSE Chemistry (0620)...');
  IGCSE_MATERIALS.forEach((m) => auditMaterial(m, 'IGCSE'));
}

// Group issues by category and severity
const fatalErrors = issues.filter((i) => i.severity === 'FATAL');
const warnings = issues.filter((i) => i.severity === 'WARN');

const issuesByCategory = {
  'Spasi Tanda Kurung': issues.filter((i) => i.category === 'Spasi Tanda Kurung'),
  'Bold Fatigue': issues.filter((i) => i.category === 'Bold Fatigue'),
  'List Format': issues.filter((i) => i.category === 'List Format'),
  'KaTeX / Syntax Leak': issues.filter((i) => i.category === 'KaTeX / Syntax Leak'),
  'Alignment Leak': issues.filter((i) => i.category === 'Alignment Leak'),
};

console.log('\n' + '='.repeat(70));
console.log('📊 RINGKASAN AUDIT MUTU TIPOGRAFI & READING EXPERIENCE');
console.log('='.repeat(70));
console.log(`• Total Topik/Modul Diperiksa     : ${totalMaterialsScanned}`);
console.log(`• Total Blok Konsep / Soal       : ${totalConceptBlocksScanned}`);
console.log(`• Total Paragraf Prosa Dianalisis : ${totalParagraphsScanned}`);
console.log(`• Total Formula KaTeX Diverifikasi: ${totalMathFormulasTested}`);
console.log('-'.repeat(70));
console.log(`🔴 TOTAL FATAL ERRORS (Syntax/Leak) : ${fatalErrors.length}`);
console.log(`🟡 TOTAL WARNINGS (Typography)      : ${warnings.length}`);
console.log('  ├─ Spasi Tanda Kurung Renggang    : ' + issuesByCategory['Spasi Tanda Kurung'].length);
console.log('  ├─ Kepadatan Teks Tebal (Bold)    : ' + issuesByCategory['Bold Fatigue'].length);
console.log('  ├─ Format & Indentasi List        : ' + issuesByCategory['List Format'].length);
console.log('  ├─ KaTeX Delimiter / Token Leak   : ' + issuesByCategory['KaTeX / Syntax Leak'].length);
console.log('  └─ Residu Alignment / Flex Gap    : ' + issuesByCategory['Alignment Leak'].length);
console.log('='.repeat(70));

// Per-topic breakdown table
const topicBreakdown = new Map<string | number, { title: string; count: number }>();
warnings.forEach((w) => {
  const existing = topicBreakdown.get(w.topicId) || { title: w.topicTitle, count: 0 };
  existing.count++;
  topicBreakdown.set(w.topicId, existing);
});

if (topicBreakdown.size > 0) {
  console.log('\n📋 DISTRIBUSI TEMUAN TIPOGRAFI PER TOPIK/MODUL:');
  console.log('ID'.padEnd(8) + 'Topik'.padEnd(50) + 'Jumlah Temuan');
  console.log('-'.repeat(70));
  Array.from(topicBreakdown.entries())
    .sort((a, b) => b[1].count - a[1].count)
    .forEach(([id, info]) => {
      console.log(String(id).padEnd(8) + info.title.slice(0, 48).padEnd(50) + `${info.count} temuan`);
    });
}

// Report Fatal Errors
if (fatalErrors.length > 0) {
  console.error('\n❌ DAFTAR FATAL ERRORS (Harus Diperbaiki Segera):');
  fatalErrors.forEach((e, idx) => {
    console.error(`\n[Fatal ${idx + 1}] [Topik ${e.topicId}: ${e.topicTitle}] [${e.section}${e.conceptTag ? ` -> ${e.conceptTag}` : ''}]`);
    console.error(`    Kategori: ${e.category}`);
    console.error(`    Pesan   : ${e.message}`);
    if (e.snippet) console.error(`    Snippet : "${e.snippet}"`);
  });
}

// Report Warnings (Grouped or Sampled)
const targetWarnings = typeFilter
  ? warnings.filter((w) => {
      if (typeFilter === 'list') return w.category === 'List Format';
      if (typeFilter === 'bold') return w.category === 'Bold Fatigue';
      if (typeFilter === 'parens') return w.category === 'Spasi Tanda Kurung';
      if (typeFilter === 'syntax') return w.category === 'KaTeX / Syntax Leak';
      if (typeFilter === 'align') return w.category === 'Alignment Leak';
      return true;
    })
  : warnings;

if (targetWarnings.length > 0) {
  const maxDisplay = isVerbose ? targetWarnings.length : 15;
  console.log(`\n⚠️  DAFTAR TEMUAN TIPOGRAFI ${typeFilter ? `(Tipe: ${typeFilter.toUpperCase()})` : ''} (${isVerbose ? 'Seluruh' : `Menampilkan ${Math.min(15, targetWarnings.length)} dari ${targetWarnings.length}`} Temuan):`);
  
  targetWarnings.slice(0, maxDisplay).forEach((w, idx) => {
    console.log(`\n[Temuan ${idx + 1}] [Topik ${w.topicId}: ${w.topicTitle}] [${w.section}${w.conceptTag ? ` -> ${w.conceptTag}` : ''}]`);
    console.log(`    Kategori: ${w.category}`);
    console.log(`    Pesan   : ${w.message}`);
    if (w.metric) console.log(`    Metrik  : ${w.metric}`);
    if (w.snippet) console.log(`    Snippet : "${w.snippet.replace(/\n/g, ' ')}"`);
    if (w.suggestedFix) console.log(`    Saran   : "${w.suggestedFix}"`);
  });

  if (!isVerbose && targetWarnings.length > 15) {
    console.log(`\n... dan ${targetWarnings.length - 15} temuan lainnya. Jalankan dengan flag '--verbose' untuk menampilkan seluruhnya.`);
  }
}

// Exit Code Decision
if (fatalErrors.length > 0) {
  console.error(`\n❌ AUDIT GAGAL: Ditemukan ${fatalErrors.length} fatal error.`);
  process.exit(1);
} else if (isStrict && warnings.length > 0) {
  console.error(`\n❌ AUDIT GAGAL (--strict aktif): Ditemukan ${warnings.length} warning tipografi.`);
  process.exit(1);
} else {
  console.log('\n✅ STATUS ENGINE & SINTAKS: LOLOS (0 Fatal Error).');
  if (warnings.length > 0) {
    console.log(`ℹ️  Ditemukan ${warnings.length} saran perbaikan tipografi untuk diharmonisasikan pada Fase 3.`);
  } else {
    console.log('🎉 SELURUH MATERI 100% MEMENUHI STANDAR TIPOGRAFI BARU!');
  }
  process.exit(0);
}
