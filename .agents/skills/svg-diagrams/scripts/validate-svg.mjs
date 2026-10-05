#!/usr/bin/env node
/**
 * validate-svg.mjs — zero-dependency linter for the "Exam Notes Sketch" SVG design system.
 *
 * Usage:
 *   node .agents/skills/svg-diagrams/scripts/validate-svg.mjs <file.svg|file.ts|file.md> [...more]
 *   node .agents/skills/svg-diagrams/scripts/validate-svg.mjs <files> --preview scratch/preview.html
 *   node .agents/skills/svg-diagrams/scripts/validate-svg.mjs <files> --only igcse-
 *
 * Every <svg>...</svg> block found in each file is checked. Only blocks whose root has
 * data-diagram="..." are validated (legacy SMA/OSN SVGs without it are skipped).
 * `--only <prefix>` further restricts to data-diagram values starting with <prefix>.
 *
 * Exit code 1 if any ERROR is found. Warnings never fail the run.
 */
import fs from 'node:fs';
import path from 'node:path';

const T = JSON.parse(fs.readFileSync(new URL('../references/tokens.json', import.meta.url), 'utf8'));

// ───────────────────────────── CLI ─────────────────────────────
const argv = process.argv.slice(2);
let previewOut = null;
let onlyPrefix = null;
const files = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--preview') previewOut = argv[++i];
  else if (argv[i] === '--only') onlyPrefix = argv[++i];
  else files.push(argv[i]);
}
if (!files.length) {
  console.error('Usage: validate-svg.mjs <file...> [--preview out.html] [--only prefix]');
  process.exit(2);
}

// ─────────────────────────── helpers ───────────────────────────
const PALETTE = new Set(Object.values(T.colors).map((c) => c.toLowerCase()));
const COLOR_ATTRS = ['fill', 'stroke', 'stop-color', 'color'];
const FORBIDDEN_TAGS = new Set(['style', 'script', 'foreignobject', 'image', 'tspan', 'iframe']);
const NO_GEOMETRY_PARENTS = new Set(['defs', 'marker', 'clippath', 'mask', 'pattern', 'lineargradient', 'radialgradient', 'symbol']);

const parseAttrs = (s) => {
  const out = {};
  for (const m of s.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)) out[m[1]] = m[2];
  return out;
};
const num = (v, d = 0) => (v === undefined || v === '' ? d : Number(v));
const nums = (v) => (v || '').trim().split(/[\s,]+/).map(Number);
const decode = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const fmt = (n) => Math.round(n * 10) / 10;

function textBBox(t) {
  const fs_ = t.fontSize;
  const ls = t.letterSpacing;
  const n = [...t.content].length;
  const w = n * T.font.charWidthEm * fs_ + Math.max(0, n - 1) * ls;
  let x1 = t.x;
  if (t.anchor === 'middle') x1 = t.x - w / 2;
  else if (t.anchor === 'end') x1 = t.x - w;
  return { x1, y1: t.y - T.font.capHeightEm * fs_, x2: x1 + w, y2: t.y + T.font.descentEm * fs_, w };
}
const overlap = (a, b) => a.x1 < b.x2 && b.x1 < a.x2 && a.y1 < b.y2 && b.y1 < a.y2;

// ─────────────────────────── parser ────────────────────────────
function parseSvg(src) {
  const clean = src.replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));
  const tagRe = /<(\/?)([a-zA-Z][\w:-]*)((?:\s+[\w:-]+\s*=\s*"[^"]*")*)\s*(\/?)>/g;
  const stack = [];
  const nodes = [];
  let m;
  while ((m = tagRe.exec(clean))) {
    const [, closing, rawName, attrStr, selfClose] = m;
    const name = rawName.toLowerCase();
    if (closing) {
      while (stack.length && stack[stack.length - 1].name !== name) stack.pop();
      stack.pop();
      continue;
    }
    const node = { name, attrs: parseAttrs(attrStr), ancestors: [...stack], content: '' };
    nodes.push(node);
    if (name === 'text' || name === 'title' || name === 'desc') {
      const end = clean.indexOf(`</${rawName}>`, tagRe.lastIndex);
      if (end !== -1 && !selfClose) {
        const inner = clean.slice(tagRe.lastIndex, end);
        if (/<tspan/i.test(inner)) node.hasTspan = true;
        node.content = decode(inner.replace(/<[^>]+>/g, '')).trim();
        tagRe.lastIndex = end + rawName.length + 3;
      }
      continue;
    }
    if (!selfClose) stack.push(node);
  }
  return nodes;
}

const inherited = (node, attr) => {
  if (node.attrs[attr] !== undefined) return node.attrs[attr];
  for (let i = node.ancestors.length - 1; i >= 0; i--) {
    const v = node.ancestors[i].attrs[attr];
    if (v !== undefined) return v;
  }
  return undefined;
};
const ancestorWithRole = (node, role) =>
  [...node.ancestors].reverse().find((a) => a.attrs['data-role'] === role);
const inNoGeometry = (node) => node.ancestors.some((a) => NO_GEOMETRY_PARENTS.has(a.name));

// ────────────────────────── validation ─────────────────────────
function validate(svgSrc) {
  const errors = [];
  const warns = [];
  const E = (msg) => errors.push(msg);
  const W = (msg) => warns.push(msg);

  const nodes = parseSvg(svgSrc);
  const root = nodes[0];
  const id = root.attrs['data-diagram'];

  // ---- Root ----
  const vb = nums(root.attrs.viewBox);
  if (vb.length !== 4) E('root: missing or invalid viewBox');
  const [vbX, vbY, vbW, vbH] = vb;
  if (vbX !== 0 || vbY !== 0) E('root: viewBox must start at 0 0');
  if (vbW !== T.canvas.width) E(`root: viewBox width must be ${T.canvas.width} (got ${vbW})`);
  if (vbH % T.canvas.heightStep !== 0) E(`root: viewBox height must be a multiple of ${T.canvas.heightStep} (got ${vbH})`);
  if (root.attrs.width || root.attrs.height) E('root: do not set width/height; size via viewBox + class');
  if (root.attrs.xmlns !== 'http://www.w3.org/2000/svg') E('root: missing xmlns');
  if (root.attrs.class !== T.canvas.rootClass) E(`root: class must be exactly "${T.canvas.rootClass}"`);
  if ((root.attrs.style || '').replace(/\s/g, '') !== T.canvas.rootStyle) E(`root: style must be exactly "${T.canvas.rootStyle}"`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)+$/.test(id)) E(`root: data-diagram "${id}" must be kebab-case, e.g. igcse-t01-gas-pressure`);
  if (root.attrs.role !== 'img') E('root: role="img" required');
  const titleId = `${id}-title`;
  if (!nodes.some((n) => n.name === 'title' && n.attrs.id === titleId && n.content)) E(`root: needs <title id="${titleId}"> with text`);
  if (!(root.attrs['aria-labelledby'] || '').includes(titleId)) E('root: aria-labelledby must reference the title id');

  // ---- IDs & references ----
  const ids = new Map();
  for (const n of nodes) {
    const nid = n.attrs.id;
    if (!nid) continue;
    if (ids.has(nid)) E(`id "${nid}" is duplicated`);
    ids.set(nid, n);
    if (!nid.startsWith(`${id}-`)) E(`id "${nid}" must be prefixed with "${id}-" (prevents clashes when several SVGs share a page)`);
  }
  for (const n of nodes) {
    for (const [k, v] of Object.entries(n.attrs)) {
      for (const ref of v.matchAll(/url\(#([^)]+)\)/g)) if (!ids.has(ref[1])) E(`<${n.name}> ${k} references missing #${ref[1]}`);
      if ((k === 'href' || k === 'xlink:href') && v.startsWith('#') && !ids.has(v.slice(1))) E(`<${n.name}> href references missing ${v}`);
    }
  }

  // ---- Element / attribute bans ----
  for (const n of nodes) {
    if (FORBIDDEN_TAGS.has(n.name)) E(`<${n.name}> is forbidden (no global CSS, scripts, raster images or tspans)`);
    if (n.hasTspan) E('<tspan> is forbidden: use one <text> element per line');
    if (n !== root && n.attrs.class !== undefined) E(`<${n.name}> class attribute is forbidden below the root (classes leak into the page)`);
    if (n !== root && n.attrs.style !== undefined) E(`<${n.name}> style attribute is forbidden below the root; use presentation attributes`);
    if (n.attrs.opacity !== undefined || n.attrs['fill-opacity'] !== undefined) W(`<${n.name}> uses opacity; prefer a solid palette colour`);
    if (n.attrs.transform !== undefined) {
      const ok = n.name === 'text' && /^rotate\(\s*-?\d+(\.\d+)?(\s*[ ,]\s*-?\d+(\.\d+)?){2}\s*\)$/.test(n.attrs.transform);
      if (!ok) E(`<${n.name}> transform="${n.attrs.transform}" is forbidden; use absolute coordinates (only rotate(a x y) on <text> is allowed)`);
    }
    for (const a of COLOR_ATTRS) {
      const v = n.attrs[a];
      if (v === undefined) continue;
      const lv = v.trim().toLowerCase();
      if (lv === 'none' || lv.startsWith('url(#') || lv === 'currentcolor') continue;
      if (!PALETTE.has(lv)) E(`<${n.name}> ${a}="${v}" is not in the palette (see tokens.json → colors)`);
    }
  }

  // ---- Text ----
  const texts = [];
  for (const n of nodes.filter((x) => x.name === 'text')) {
    const t = {
      node: n,
      content: n.content,
      x: num(n.attrs.x),
      y: num(n.attrs.y),
      anchor: n.attrs['text-anchor'] || 'start',
      fontSize: num(n.attrs['font-size']),
      letterSpacing: num(n.attrs['letter-spacing']),
      rotated: !!n.attrs.transform,
    };
    const label = `text "${t.content.slice(0, 40)}"`;
    if (!t.content) E(`${label}: empty <text>`);
    if (n.attrs['font-family'] !== T.font.family) E(`${label}: font-family must be exactly ${T.font.family}`);
    if (!T.font.sizes.includes(t.fontSize)) E(`${label}: font-size must be one of ${T.font.sizes.join('/')} (got ${n.attrs['font-size']})`);
    if (t.letterSpacing !== T.font.letterSpacing) E(`${label}: letter-spacing must be ${T.font.letterSpacing}`);
    if (T.font.weight && num(n.attrs['font-weight']) !== T.font.weight && n.attrs['font-weight'] !== String(T.font.weight)) {
      E(`${label}: font-weight must be ${T.font.weight} (got ${n.attrs['font-weight'] || 'none'})`);
    }
    if (n.attrs['font-style']) E(`${label}: font-style forbidden`);
    if (n.attrs['dominant-baseline'] || n.attrs['alignment-baseline']) E(`${label}: baseline shifting attributes are forbidden; y is always the alphabetic baseline`);
    if (/[a-z]/.test(t.content.replace(/\b([A-Z][a-z]?\d*)+\b/g, '').replace(/[a-z]+\)/g, ''))) W(`${label}: labels should be UPPERCASE (chemical formulas excepted)`);
    t.box = textBBox(t);
    texts.push(t);
  }
  const M = T.canvas.margin;
  for (const t of texts) {
    if (t.rotated) continue;
    const b = t.box;
    if (b.x1 < M || b.y1 < M || b.x2 > vbW - M || b.y2 > vbH - M)
      E(`text "${t.content}": est. box [${fmt(b.x1)},${fmt(b.y1)} → ${fmt(b.x2)},${fmt(b.y2)}] leaves the ${M}px safe margin`);
  }
  for (let i = 0; i < texts.length; i++)
    for (let j = i + 1; j < texts.length; j++) {
      const a = texts[i], b = texts[j];
      if (a.rotated || b.rotated) continue;
      if (overlap(a.box, b.box)) E(`text "${a.content}" overlaps text "${b.content}" (raise line height or move one)`);
    }

  // ---- Text boxes (callouts, arrow labels) ----
  const pad = T.textBox.padding;
  for (const g of nodes.filter((n) => n.attrs['data-role'] === 'text-box')) {
    const [bx, by, bw, bh] = nums(g.attrs['data-box']);
    if ([bx, by, bw, bh].some(Number.isNaN)) { E('text-box: data-box="x y w h" required'); continue; }
    const inner = { x1: bx + pad, y1: by + pad, x2: bx + bw - pad, y2: by + bh - pad };
    const mine = texts.filter((t) => t.node.ancestors.includes(g));
    if (!mine.length) W(`text-box @${bx},${by}: contains no text`);
    for (const t of mine) {
      const b = t.box;
      if (b.x1 < inner.x1 || b.x2 > inner.x2 || b.y1 < inner.y1 || b.y2 > inner.y2) {
        const needW = Math.ceil(b.w + 2 * pad);
        E(`text "${t.content}" (est. ${fmt(b.w)}px wide) does not fit its box with ${pad}px padding → box needs ≥ ${needW}px width or text must move/wrap`);
      }
    }
    const ys = mine.filter((t) => !t.rotated).map((t) => t);
    ys.sort((a, b) => a.y - b.y);
    for (let i = 1; i < ys.length; i++) {
      const gap = ys[i].y - ys[i - 1].y;
      const min = Math.max(ys[i].fontSize, ys[i - 1].fontSize) * T.font.minLineHeightRatio;
      if (gap > 0 && gap < min) E(`lines "${ys[i - 1].content}" / "${ys[i].content}" are ${gap}px apart; need ≥ ${fmt(min)}px (use lineHeight tokens)`);
    }
  }

  // ---- Particles ----
  const counts = new Map();
  for (const g of nodes.filter((n) => n.attrs['data-role'] === 'particle-region')) {
    const [x1, y1, x2, y2] = nums(g.attrs['data-bounds']);
    if ([x1, y1, x2, y2].some(Number.isNaN)) { E('particle-region: data-bounds="x1 y1 x2 y2" required'); continue; }
    const circles = nodes.filter((n) => n.name === 'circle' && n.ancestors.includes(g)).map((n) => {
      const r = num(n.attrs.r);
      const sw = num(inherited(n, 'stroke-width'), 0);
      return { cx: num(n.attrs.cx), cy: num(n.attrs.cy), r, er: r + sw / 2 };
    });
    const grp = g.attrs['data-count-group'];
    if (grp) (counts.get(grp) || counts.set(grp, []).get(grp)).push({ n: circles.length, at: `${x1},${y1}` });
    const cl = T.particle.wallClearance;
    for (const c of circles) {
      if (!T.particle.radii.includes(c.r)) E(`particle @(${c.cx},${c.cy}): r=${c.r} not in ${T.particle.radii.join('/')}`);
      if (c.cx - c.er < x1 + cl || c.cx + c.er > x2 - cl || c.cy - c.er < y1 + cl || c.cy + c.er > y2 - cl)
        E(`particle @(${c.cx},${c.cy}) pokes through its container (bounds ${x1} ${y1} ${x2} ${y2}, clearance ${cl}px)`);
    }
    for (let i = 0; i < circles.length; i++)
      for (let j = i + 1; j < circles.length; j++) {
        const a = circles[i], b = circles[j];
        const d = Math.hypot(a.cx - b.cx, a.cy - b.cy);
        const need = a.er + b.er + T.particle.minGap;
        if (d < need) E(`particles @(${a.cx},${a.cy}) & @(${b.cx},${b.cy}) are ${fmt(d)}px apart; need ≥ ${fmt(need)}px (no touching/overlap)`);
      }
  }
  for (const [grp, list] of counts) {
    const set = new Set(list.map((l) => l.n));
    if (set.size > 1) E(`count-group "${grp}": panels have different particle counts (${list.map((l) => `${l.n}@${l.at}`).join(', ')}) — matter must be conserved between panels`);
  }

  // ---- Generic geometry inside canvas ----
  for (const n of nodes) {
    if (n === root || inNoGeometry(n)) continue;
    let b = null;
    if (n.name === 'circle') { const r = num(n.attrs.r); b = { x1: num(n.attrs.cx) - r, y1: num(n.attrs.cy) - r, x2: num(n.attrs.cx) + r, y2: num(n.attrs.cy) + r }; }
    else if (n.name === 'rect') b = { x1: num(n.attrs.x), y1: num(n.attrs.y), x2: num(n.attrs.x) + num(n.attrs.width), y2: num(n.attrs.y) + num(n.attrs.height) };
    else if (n.name === 'line') b = { x1: Math.min(num(n.attrs.x1), num(n.attrs.x2)), y1: Math.min(num(n.attrs.y1), num(n.attrs.y2)), x2: Math.max(num(n.attrs.x1), num(n.attrs.x2)), y2: Math.max(num(n.attrs.y1), num(n.attrs.y2)) };
    else if (n.name === 'path' && n.attrs.d) {
      const p = (n.attrs.d.match(/-?\d+(\.\d+)?/g) || []).map(Number);
      if (/[a-z]/.test(n.attrs.d.replace(/e-?\d/gi, ''))) { W(`<path> uses relative commands; prefer absolute (M L C Q Z) so bounds can be checked`); continue; }
      const xs = p.filter((_, i) => i % 2 === 0), ys = p.filter((_, i) => i % 2 === 1);
      if (xs.length) b = { x1: Math.min(...xs), y1: Math.min(...ys), x2: Math.max(...xs), y2: Math.max(...ys) };
    }
    if (b && (b.x1 < M || b.y1 < M || b.x2 > vbW - M || b.y2 > vbH - M))
      E(`<${n.name}> extends into the ${M}px safe margin [${fmt(b.x1)},${fmt(b.y1)} → ${fmt(b.x2)},${fmt(b.y2)}]`);
  }

  return { id, errors, warns };
}

// ──────────────────────────── run ──────────────────────────────
let totalErrors = 0;
const validated = [];
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const blocks = src.match(/<svg[\s\S]*?<\/svg>/g) || [];
  let seen = 0;
  for (const block of blocks) {
    const did = (block.match(/^<svg[^>]*data-diagram="([^"]+)"/) || [])[1];
    if (!did) continue; // legacy SVG — not under this design system
    if (onlyPrefix && !did.startsWith(onlyPrefix)) continue;
    seen++;
    const { id, errors, warns } = validate(block);
    validated.push({ id, block, file: f });
    totalErrors += errors.length;
    const status = errors.length ? '✖' : '✔';
    console.log(`\n${status} ${id}  (${path.relative(process.cwd(), f)})`);
    errors.forEach((e) => console.log(`   ERROR  ${e}`));
    warns.forEach((w) => console.log(`   warn   ${w}`));
  }
  if (!seen) console.log(`\n· ${f}: no <svg data-diagram="…"> blocks found`);
}

if (previewOut) {
  const fontHref = 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap';
  const cards = validated
    .map(({ id, block }) => `
  <section>
    <h2>${id}</h2>
    <div class="row">
      <figure><figcaption>Mobile (343px content, scrolls if needed)</figcaption><div class="frame" style="width:343px">${block}</div></figure>
      <figure><figcaption>Desktop reader (760px)</figcaption><div class="frame" style="width:760px">${block}</div></figure>
    </div>
  </section>`)
    .join('\n');
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>SVG preview</title>
<link rel="stylesheet" href="${fontHref}">
<style>
 *,*::before,*::after{box-sizing:border-box}
 body{font-family:system-ui,sans-serif;background:#f8fafc;margin:24px;color:#0f172a}
 h2{font-size:15px;margin:32px 0 8px} .row{display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start}
 figure{margin:0} figcaption{font-size:12px;color:#64748b;margin-bottom:6px}
 .frame{overflow-x:auto;background:#fff;padding:0 8px;border:1px dashed #cbd5e1}
 /* minimal Tailwind shims for the root class */
 .w-full{width:100%} .h-auto{height:auto} .my-6{margin:24px 0} .rounded-xl{border-radius:12px}
 .border{border-width:1px;border-style:solid} .border-slate-200{border-color:#e2e8f0} .bg-white{background:#fff}
</style></head><body>
<p>Font must show as <b>Comic Neue Bold</b> (hand-lettered). If you see a plain sans-serif, the font did not load.</p>
${cards}
</body></html>`;
  fs.mkdirSync(path.dirname(path.resolve(previewOut)), { recursive: true });
  fs.writeFileSync(previewOut, html);
  console.log(`\nPreview written → ${path.resolve(previewOut)}`);
}

console.log(`\n${totalErrors ? `✖ ${totalErrors} error(s)` : '✔ all diagrams pass'}`);
process.exit(totalErrors ? 1 : 0);
