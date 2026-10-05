# Component Library — "Exam Notes Sketch"

Copy these primitives verbatim and change only coordinates/text. Every value
comes from [tokens.json](./tokens.json). `P` = the diagram's `data-diagram` id
(e.g. `igcse-t01-gas-pressure`). `FONT` = `'Comic Neue', ui-sans-serif, system-ui, sans-serif` with `font-weight="700"`.

Draw order (back → front): containers → liquids → particles → apparatus
(pistons, rods, thermometers) → action arrows → callout tags → pointers.

---

## 1. Root & defs (always)

```xml
<svg viewBox="0 0 800 H" xmlns="http://www.w3.org/2000/svg" role="img"
     aria-labelledby="P-title P-desc" data-diagram="P"
     class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="P-title">Short English title</title>
  <desc id="P-desc">One-sentence description of what the diagram shows.</desc>
  <defs>
    <marker id="P-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10"
            markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <!-- LAYOUT WORKSHEET (required, see SKILL.md step 2) -->
</svg>
```

`H` is a multiple of 20. Width is always 800.

---

## 2. Particle

| Use | r | Effective radius (r + 0.75) | Min centre distance |
|---|---|---|---|
| Solid lattice / dense | 8 | 8.75 | 23.5 |
| **Default (gas, liquid)** | 12 | 12.75 | 31.5 |
| Large single-species close-up | 16 | 16.75 | 39.5 |

```xml
<g data-role="particle-region" data-bounds="X1 Y1 X2 Y2" data-count-group="gas"
   fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
  <circle cx=".." cy=".." r="12" />
</g>
```

- `data-bounds` = the **inner faces** of the container (wall x + 1, plate bottom + 1, floor − 1).
- Legal centre range: `X1 + 3 + 12.75 ≤ cx ≤ X2 − 3 − 12.75` (same for y).
- `data-count-group`: panels showing the *same* sample before/after a change share
  a group name → validator enforces identical counts.
- One colour per species: blue `#8fd3ef` (default), red `#f5a3a3`, yellow `#fde58a`,
  green `#b5efb0`, purple `#cdb8f5`, orange `#fcc68b`, grey `#cfd4d9`.
  Use separate `particle-region` groups per colour if needed.

**States of matter spacing:**
- Solid: r=8, regular grid, centre distance 24 (touching look but gap ≥ 6 is still enforced → 23.5 min).
- Liquid: r=12, irregular, centre distance 32–36, all particles touching the floor region.
- Gas: r=12, irregular, centre distance ≥ 45, spread over the whole region.

---

## 3. Open container / beaker (flared rim)

Parameters: walls `XL..XR`, rim height `YT`, floor `YF`, corner radius 18, lip flare 12.

```xml
<path d="M XL-12 YT Q XL YT+4 XL YT+18 L XL YF-18 Q XL YF XL+18 YF L XR-18 YF Q XR YF XR YF-18 L XR YT+18 Q XR YT+4 XR+12 YT"
      fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
```

Standard sizes: width 180 (XR − XL), depth 220 (YF − YT).

---

## 4. Piston (rod + plate, same grey)

```xml
<rect x="ROD_X" y="YROD_TOP" width="12" height="PLATE_Y - YROD_TOP + 2" fill="#8a939c" stroke="#1f2937" stroke-width="2" />
<rect x="XL+1" y="PLATE_Y" width="XR-XL-2" height="18" fill="#8a939c" stroke="#1f2937" stroke-width="2" />
```

`ROD_X = (XL + XR)/2 − 6`. Draw the rod first so the plate covers the joint.

---

## 5. Liquid fill

```xml
<path d="M XL+1 YS L XR-1 YS L XR-1 YF-18 Q XR-1 YF-1 XR-18 YF-1 L XL+18 YF-1 Q XL+1 YF-1 XL+1 YF-18 Z"
      fill="#d6f0fb" stroke="none" />
<line x1="XL+1" y1="YS" x2="XR-1" y2="YS" stroke="#1f2937" stroke-width="1.5" />
```

---

## 6. Action arrow (block arrow with label)

Size it **from the text**, never the reverse:

```
textW = chars × 0.68 × fs + (chars − 1) × 1     (longest line)
bodyW = ceil(textW + 2×12 + 8)                  (12px padding + 4px slack each side)
bodyH = lines × 20 + 20                         (14px font, line height 20)
head  = 36 long, overhangs the body by 14 top & bottom; tip at (BX+BW+36, CY)
```

| lines (14px) | bodyH | baselines relative to arrow centre `CY` |
|---|---|---|
| 1 | 40 | `CY + 5` |
| 2 | 60 | `CY − 5`, `CY + 15` |
| 3 | 80 | `CY − 15`, `CY + 5`, `CY + 25` |

```xml
<g data-role="text-box" data-box="BX BY BW BH">
  <path d="M BX BY L BX+BW BY L BX+BW BY-14 L BX+BW+36 CY L BX+BW BY+BH+14 L BX+BW BY+BH L BX BY+BH Z"
        fill="#b5efb0" stroke="#3f8f46" stroke-width="2" stroke-linejoin="round" />
  <text x="BX+BW/2" y=".." text-anchor="middle" font-family="FONT" font-size="14" letter-spacing="1" fill="#1f2937">LINE ONE</text>
</g>
```

`data-box` = the arrow **body only** (the head is not text-safe).

---

## 7. Callout tag (grey luggage tag with eyelet)

Width from text: `W = ceil(textW + 18 (text inset) + 12 (right pad) + 30 (eyelet zone))`.
Height: `lines × 20 + 24` (2 lines → 64).

**Eyelet top-right** (tag sits above / right of its target):
```xml
<g data-role="text-box" data-box="X Y W-24 H">
  <path d="M X+4 Y L X+W-14 Y L X+W Y+14 L X+W Y+H-4 Q X+W Y+H X+W-4 Y+H L X+4 Y+H Q X Y+H X Y+H-4 L X Y+4 Q X Y X+4 Y Z"
        fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
  <circle cx="X+W-15" cy="Y+16" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
  <text x="X+18" y="Y+26" font-family="FONT" font-size="14" letter-spacing="1" fill="#1f2937">LINE ONE</text>
  <text x="X+18" y="Y+46" font-family="FONT" font-size="14" letter-spacing="1" fill="#1f2937">LINE TWO</text>
</g>
```

**Eyelet bottom-left** (tag sits below / left of its target): mirror it — chamfer at
bottom-left, eyelet at `(X+16, Y+H-17)`, `data-box="X+24 Y W-24 H"`, text at `x = X+38`.

Max 2 lines per tag, max ~44 chars per line. Split longer statements into two tags.

---

## 8. Pointer (thin curved leader)

```xml
<g fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round">
  <path d="M SX SY C C1X C1Y, C2X C2Y, TX TY" marker-end="url(#P-arrowhead)" />
</g>
```

- Start 2px **outside** the tag edge nearest the target.
- Tip `T` sits 2–4px from the target's outline (circle edge, plate top…), never inside a particle.
- One gentle cubic curve; never cross text or another pointer. Crossing a container
  outline is allowed (the reference does it).
- Keep control points inside the 16px safe margin.

---

## 9. Plain label (no box) — axes, apparatus names

```xml
<text x=".." y=".." font-family="FONT" font-size="14" letter-spacing="1" fill="#1f2937">THERMOMETER</text>
```

Axis titles may rotate: `transform="rotate(-90 X Y)"` with `x="X" y="Y"`.
Tick labels use 12px.

---

## 10. Graph (heating / cooling curves, rate graphs)

- Axes: `stroke="#1f2937" stroke-width="2"`, arrowhead via `marker-end`, origin label `0` at 12px.
- Data line: `stroke="#2f7fc1" stroke-width="2.5" fill="none" stroke-linejoin="round"`.
  Second series `#d64545`, third `#3f8f46`.
- Plateaus / regions annotated with plain labels or callout tags, never legends
  floating far from the data.
- No gridlines; dashed guide lines allowed: `stroke="#4b5563" stroke-width="1.5" stroke-dasharray="6 5"`.
