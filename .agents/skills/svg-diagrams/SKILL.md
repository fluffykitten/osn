---
name: svg-diagrams
description: >-
  Design system and mandatory workflow for creating or editing SVG diagrams in
  study materials (IGCSE, A/AS Level, and any SVG carrying data-diagram="...").
  Use whenever the agent is asked to draw, recreate, fix, or embed a chemistry
  diagram, particle model, apparatus sketch, graph, or infographic as SVG, or to
  convert a figure from PDF notes into SVG.
---

# SVG Diagrams — "Exam Notes Sketch" design system

Look: clean exam-revision notes. Pastel fills, charcoal outlines, hand-lettered
UPPERCASE labels, grey luggage-tag callouts, mint action arrows, thin curved
pointers. Golden reference: [igcse-t01-gas-pressure.svg](./examples/igcse-t01-gas-pressure.svg).

| File | Purpose |
|---|---|
| [references/tokens.json](./references/tokens.json) | **Single source of truth**: palette, font, sizes, strokes, spacing. The validator reads it. |
| [references/components.md](./references/components.md) | Copy-paste primitives + sizing formulas (particle, beaker, piston, arrow, tag, pointer, graph). |
| [examples/](./examples/) | Diagrams that pass validation and were visually checked. Imitate them. |
| [scripts/validate-svg.mjs](./scripts/validate-svg.mjs) | Zero-dependency linter + preview page generator. |

Scope: new IGCSE / A-Level diagrams and anything with `data-diagram`. Legacy
SMA/OSN SVGs (no `data-diagram`) are ignored by the validator — don't restyle them
unless asked.

## Workflow (all steps mandatory)

1. **Read** `tokens.json`, `components.md`, and the closest example. If recreating
   a PDF figure, list every element in it (containers, particles + counts,
   labels verbatim, arrows, pointers and what each points at).
2. **Layout worksheet first, SVG second.** Write the plan as an XML comment at the
   top of the SVG (see the golden example): canvas size, every container's wall
   coordinates, particle region bounds, text widths computed with
   `chars × 0.68 × fs + (chars − 1)`, and each box's size derived from its text.
   Never guess a coordinate you can compute.
3. **Assemble** from `components.md` primitives only. No improvised shapes when a
   primitive exists.
4. **Validate** until zero errors:
   ```
   node .agents/skills/svg-diagrams/scripts/validate-svg.mjs <file.svg|.ts|.md>
   ```
   Works on standalone `.svg` and on SVGs embedded in TS material files.
   Use `--only igcse-` to limit to one family.
5. **Look at it.** Generate a preview and inspect a real render (browser subagent
   screenshot, or ask the user to open it). The validator estimates text width;
   only a render proves it.
   ```
   node .agents/skills/svg-diagrams/scripts/validate-svg.mjs <file> --preview <artifactDir>/scratch/svg-preview.html
   ```
   `file://` may be blocked in the browser tool — serve it with a one-line Node
   HTTP server instead. Check: hand-lettered font loaded, no text touching box
   edges, no overlaps, pointers land on targets, mobile frame still legible.
6. **Embed** the validated SVG inside the material's markdown template string
   unchanged. Re-run step 4 on the `.ts` file after embedding.
7. If the diagram is a good new pattern, save a copy to `examples/`.

## Hard rules (the validator enforces ✓; you must self-check ✎)

**Canvas & root**
- ✓ `viewBox="0 0 800 H"`, H a multiple of 20; no `width`/`height` attributes.
- ✓ Root `class` and `style` exactly as in `tokens.json → canvas`; `role="img"`,
  `<title id="P-title">`, `aria-labelledby`, kebab-case `data-diagram="P"`.
- ✓ Everything stays ≥ 16px inside the canvas edges.

**Isolation** (several SVGs share one page)
- ✓ Every `id` starts with `P-`. Every `url(#…)` resolves.
- ✓ No `<style>`, `<script>`, `<image>`, `<foreignObject>`, `<tspan>`; no `class`
  or `style` below the root. Use presentation attributes only.
- ✓ No `transform` (absolute coordinates only); exception `rotate(a x y)` on `<text>`.
- ✓ Absolute path commands only (`M L C Q Z`) so bounds can be checked.

**Colour** — ✓ only palette hex values from `tokens.json`, plus `none`.
✎ One colour per particle species, consistent across the whole topic.

**Typography**
- ✓ `font-family` exactly the token; `font-size` 12 / 14 / 16; `letter-spacing="1"`;
  no bold/italic (single-weight hand font).
- ✓ One `<text>` per line; lines in a box ≥ 1.35 × font size apart (use 20 for 14px).
- ✓ No two text boxes overlap; text fits its `data-box` with 12px padding.
- ✎ Labels in UPPERCASE; chemical formulas keep their case (`HCl`, `NH₃` → write
  subscripts as Unicode ₀–₉).
- ✎ ≤ 2 lines per callout, ≤ ~44 characters per line. Split long ideas into two tags.

**Particles**
- ✓ Radius 8 / 12 / 16 only; inside their `data-bounds` with 3px clearance;
  centres ≥ 2r + 1.5 + 6 apart (never touching or overlapping).
- ✓ Panels sharing a `data-count-group` contain the same number of particles
  (conservation of matter in before/after diagrams).
- ✎ Spacing conveys state: solid = regular grid, liquid = touching-ish and
  irregular at the bottom, gas = far apart everywhere.

**Composition** ✎
- Read left → right (before → change → after) or top → bottom.
- Draw order: containers → liquids → particles → apparatus → action arrows →
  tags → pointers (pointers on top).
- Size every box from its text; never squeeze text into a pre-drawn shape.
- Pointers: one smooth curve each, start just outside the tag, end 2–4px from the
  target, never cross text or other pointers.
- ≥ 16px of air between unrelated elements.
- Scientific accuracy beats decoration: matching particle counts, correct
  relative sizes, correct direction of change.

## Validator annotations you must add

| Attribute | On | Meaning |
|---|---|---|
| `data-diagram="P"` | root | Opts the SVG into validation; prefix for all ids |
| `data-role="particle-region" data-bounds="x1 y1 x2 y2"` | `<g>` wrapping particles | Inner faces of the container |
| `data-count-group="name"` | particle-region | Regions with the same name must have equal counts |
| `data-role="text-box" data-box="x y w h"` | `<g>` wrapping a tag/arrow and its text | Text-safe rectangle (exclude eyelet zone / arrow head) |

## Changing the design system

Edit `tokens.json` (and `components.md` if a primitive changes), update the
examples, then re-run the validator over every IGCSE/A-Level material file.
Never override a token inline in a single diagram.
