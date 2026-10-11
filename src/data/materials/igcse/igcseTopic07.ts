/**
 * igcseTopic07.ts
 * Topic 7: Acids, Bases and Salts
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_7: MaterialItem = {
  id: 207,
  topic_number: 7,
  title: 'Acids, Bases and Salts',
  slug: 'acids-bases-and-salts',
  category: 'Inorganic Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 40,
  summary:
    'Properties of acids and bases, Brønsted-Lowry proton transfer, pH scale and indicators, strong vs weak acids, reactions of acids with metals, bases, and carbonates, oxide classifications (basic, acidic, amphoteric, neutral), salt solubility rules, and the three laboratory methods for salt preparation (excess insoluble base, titration, and precipitation).',
  allTags: [
    'igcse-07-properties-of-acids-bases',
    'igcse-07-ph-scale-and-indicators',
    'igcse-07-proton-transfer-bronsted',
    'igcse-07-strong-vs-weak-acids',
    'igcse-07-reactions-of-acids',
    'igcse-07-classification-of-oxides',
    'igcse-07-salt-solubility-rules',
    'igcse-07-salt-prep-excess-base',
    'igcse-07-salt-prep-titration',
    'igcse-07-salt-prep-precipitation',
    'acids-and-bases',
    'ph-scale',
    'indicators',
    'universal-indicator',
    'litmus',
    'methyl-orange',
    'thymolphthalein',
    'proton-donor',
    'proton-acceptor',
    'strong-acids',
    'weak-acids',
    'dissociation',
    'neutralisation',
    'basic-oxides',
    'acidic-oxides',
    'amphoteric-oxides',
    'neutral-oxides',
    'salts',
    'salt-preparation',
    'excess-base-method',
    'titration-method',
    'precipitation-method',
    'water-of-crystallisation',
    'hydrated-salts',
  ],
  prerequisites: [
    {
      tag: 'igcse-07-properties-of-acids-bases',
      tags: [
        'acids-and-bases',
        'ph-scale',
        'universal-indicator',
        'proton-donor',
        'proton-acceptor',
      ],
      title: '1. Characteristic Properties of Acids & Bases: pH & Proton Transfer',
      summary:
        'Fundamental definitions of aqueous acids and bases, colour changes with universal indicator and Cambridge key indicators, and the Brønsted-Lowry proton transfer model.',
      content: `### 🧪 What are Acids and Bases?

In aqueous solution:
1. **Acids**: Substances that produce hydrogen ions ($\\ce{H+(aq)}$) when dissolved in water:
   $$\\ce{HCl(g) + H2O(l) -> H3O+(aq) + Cl^-(aq)}$$
   - Commonly written as: $\\ce{HCl(aq) -> H+(aq) + Cl^-(aq)}$.
   - Have a sour taste, conduct electricity in aqueous solution, and have $\\text{pH} < 7$.
2. **Bases**: Substances that react with acids to form a salt and water only (neutralisation):
   - Bases include **metal oxides** (e.g. $\\ce{CuO}$, $\\ce{MgO}$), **metal hydroxides** (e.g. $\\ce{Cu(OH)2}$, $\\ce{Fe(OH)3}$), and **ammonia** ($\\ce{NH3}$).
3. **Alkalis**: A **soluble base** that dissolves in water to produce hydroxide ions ($\\ce{OH-(aq)}$):
   $$\\ce{NaOH(s) -> Na+(aq) + OH^-(aq)}$$
   $$\\ce{NH3(aq) + H2O(l) <=> NH4+(aq) + OH^-(aq)}$$
   - All alkalis are bases, but **not all bases are alkalis** (insoluble bases like copper(II) oxide do not dissolve to form $\\ce{OH-}$ ions).

---

### 🎨 The pH Scale and Common Indicators

The **pH scale** measures the relative acidity or alkalinity of an aqueous solution from $0$ to $14$:
- $\\text{pH} < 7$: Acidic (high $[\\ce{H+}]$ concentration).
- $\\text{pH} = 7$: Neutral (pure water at $25^\\circ\\text{C}$, $[\\ce{H+}] = [\\ce{OH-}]$).
- $\\text{pH} > 7$: Alkaline (high $[\\ce{OH-}]$ concentration).

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-ph-scale-indicators-title igcse-t07-ph-scale-indicators-desc" data-diagram="igcse-t07-ph-scale-indicators" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-ph-scale-indicators-title">The pH scale and Cambridge acid-base indicator colour spectrum</title>
  <desc id="igcse-t07-ph-scale-indicators-desc">Colour spectrum across the pH scale from 0 to 14 with universal indicator and comparative colours for litmus, methyl orange, and thymolphthalein.</desc>

  <defs>
    <marker id="igcse-t07-ph-scale-indicators-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Top Title Banner -->
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">THE pH SCALE &amp; UNIVERSAL INDICATOR SPECTRUM</text>
  </g>

  <!-- Continuous pH Scale Segments (x: 40 to 760, total width 720) -->
  <!-- 0-2 (Strong Acid): 40 to 190 (w=150) -->
  <rect x="40" y="80" width="150" height="46" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="115" y="108" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">0 - 2 (RED)</text>

  <!-- 3-6 (Weak Acid): 190 to 340 (w=150) -->
  <rect x="190" y="80" width="150" height="46" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="265" y="108" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3 - 6 (ORANGE)</text>

  <!-- 7 (Neutral): 340 to 420 (w=80) -->
  <rect x="340" y="80" width="80" height="46" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="380" y="108" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">7 (GREEN)</text>

  <!-- 8-11 (Weak Alkali): 420 to 590 (w=170) -->
  <rect x="420" y="80" width="170" height="46" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="505" y="108" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">8 - 11 (BLUE)</text>

  <!-- 12-14 (Strong Alkali): 590 to 760 (w=170) -->
  <rect x="590" y="80" width="170" height="46" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" />
  <text x="675" y="108" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">12 - 14 (PURPLE)</text>

  <!-- Everyday Examples Callouts (3 boxes, w=230 each) -->
  <g data-role="text-box" data-box="40 142 230 66">
    <rect x="40" y="142" width="230" height="66" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="155" y="168" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">STRONG ACID: HCl</text>
    <text x="155" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">GASTRIC ACID</text>
  </g>

  <g data-role="text-box" data-box="285 142 230 66">
    <rect x="285" y="142" width="230" height="66" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="168" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">NEUTRAL: PURE WATER</text>
    <text x="400" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">BLOOD (pH 7.4)</text>
  </g>

  <g data-role="text-box" data-box="530 142 230 66">
    <rect x="530" y="142" width="230" height="66" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="645" y="168" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">STRONG ALKALI: NaOH</text>
    <text x="645" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">DRAIN CLEANER</text>
  </g>

  <!-- Cambridge Specific Indicators Section -->
  <rect x="40" y="226" width="720" height="194" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="40" y="226" width="720" height="36" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CAMBRIDGE THREE KEY LABORATORY INDICATORS</text>

  <!-- Column 1: Litmus (w=220) -->
  <g data-role="text-box" data-box="50 274 220 134">
    <rect x="50" y="274" width="220" height="134" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="160" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">LITMUS</text>
    <text x="160" y="324" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ACID: RED</text>
    <text x="160" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">ALKALI: BLUE</text>
    <text x="160" y="374" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">NEUTRAL: PURPLE</text>
  </g>

  <!-- Column 2: Methyl Orange (w=220) -->
  <g data-role="text-box" data-box="290 274 220 134">
    <rect x="290" y="274" width="220" height="134" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">METHYL ORANGE</text>
    <text x="400" y="324" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ACID: RED</text>
    <text x="400" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ALKALI: YELLOW</text>
    <text x="400" y="374" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">END-POINT: ORANGE</text>
  </g>

  <!-- Column 3: Thymolphthalein (w=220) -->
  <g data-role="text-box" data-box="530 274 220 134">
    <rect x="530" y="274" width="220" height="134" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="640" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">THYMOLPHTHALEIN</text>
    <text x="640" y="324" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ACID: COLOURLESS</text>
    <text x="640" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">ALKALI: BLUE</text>
    <text x="640" y="374" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">END-POINT: BLUE</text>
  </g>
</svg>

---

### ⚛️ Brønsted-Lowry Theory: Proton Transfer

Under the Brønsted-Lowry definition:
- An **acid** is a **proton ($\\ce{H+}$) donor**.
- A **base** is a **proton ($\\ce{H+}$) acceptor**.

A hydrogen atom consists of $1\\text{ proton}$ and $1\\text{ electron}$. When it loses its electron to form a hydrogen ion ($\\ce{H+}$), only the bare subatomic **proton** remains. Thus, $\\ce{H+}$ is literally a proton!

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-proton-transfer-bronsted-title igcse-t07-proton-transfer-bronsted-desc" data-diagram="igcse-t07-proton-transfer-bronsted" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-proton-transfer-bronsted-title">Brønsted-Lowry acid-base proton transfer reactions</title>
  <desc id="igcse-t07-proton-transfer-bronsted-desc">Diagram showing hydrogen chloride donating a proton to water and ammonia accepting a proton from water.</desc>

  <defs>
    <marker id="igcse-t07-proton-transfer-bronsted-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#2f7fc1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left Container: Acid donating H+ -->
  <rect x="24" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">ACID: PROTON (H+) DONOR</text>

  <!-- Equation Callout -->
  <g data-role="text-box" data-box="44 80 320 64">
    <rect x="44" y="80" width="320" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="104" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">HCl + H2O -> H3O+ + Cl-</text>
    <text x="204" y="128" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HCl TRANSFERS H+ TO WATER</text>
  </g>

  <!-- Visual Transfer Sketch -->
  <!-- HCl molecule representation -->
  <circle cx="100" cy="190" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="100" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H+</text>

  <circle cx="138" cy="190" r="16" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="138" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Cl-</text>

  <!-- Transfer arrow from H+ to H2O -->
  <path d="M 112 170 Q 185 130 250 170" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t07-proton-transfer-bronsted-arrow)" />
  <text x="185" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">H+ TRANSFER</text>

  <!-- H2O molecule representation -->
  <circle cx="280" cy="190" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="280" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H2O</text>

  <!-- Explanation Bottom Box -->
  <g data-role="text-box" data-box="44 246 320 94">
    <rect x="44" y="246" width="320" height="94" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">BRONSTED-LOWRY THEORY</text>
    <text x="204" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HCl IS THE ACID (DONATES H+)</text>
    <text x="204" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">H2O ACTS AS A BASE (ACCEPTS H+)</text>
  </g>

  <!-- Right Container: Base accepting H+ -->
  <rect x="416" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">BASE: PROTON (H+) ACCEPTOR</text>

  <!-- Equation Callout -->
  <g data-role="text-box" data-box="436 80 320 64">
    <rect x="436" y="80" width="320" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="104" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">NH3 + H2O &lt;=&gt; NH4+ + OH-</text>
    <text x="596" y="128" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">NH3 ACCEPTS H+ FROM WATER</text>
  </g>

  <!-- Visual Transfer Sketch -->
  <!-- NH3 molecule -->
  <circle cx="480" cy="190" r="16" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" />
  <text x="480" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">NH3</text>

  <!-- Transfer arrow from H2O to NH3 -->
  <path d="M 640 170 Q 575 130 510 170" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t07-proton-transfer-bronsted-arrow)" />
  <text x="575" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">H+ TRANSFER</text>

  <!-- H2O molecule -->
  <circle cx="660" cy="190" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="660" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H2O</text>

  <!-- Explanation Bottom Box -->
  <g data-role="text-box" data-box="436 246 320 94">
    <rect x="436" y="246" width="320" height="94" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">BRONSTED-LOWRY THEORY</text>
    <text x="596" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">NH3 IS THE BASE (ACCEPTS H+)</text>
    <text x="596" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">H2O ACTS AS AN ACID (DONATES H+)</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-properties-q1',
          type: 'multiple_choice',
          question:
            'A sample of ammonia solution (NH3(aq)) is tested with thymolphthalein and methyl orange indicators. What colours are observed?',
          options: [
            'Thymolphthalein: blue; Methyl orange: yellow',
            'Thymolphthalein: colourless; Methyl orange: red',
            'Thymolphthalein: blue; Methyl orange: red',
            'Thymolphthalein: colourless; Methyl orange: yellow',
          ],
          correctAnswer: 0,
          explanation:
            'Ammonia solution is alkaline (pH around 10-11). In alkaline solution, thymolphthalein turns blue (pH > 9.3) and methyl orange is yellow (pH > 4.4).',
          misconceptionTarget: 'Confusing acid and alkaline indicator colours',
        },
        {
          id: 'chk-igcse-07-properties-q2',
          type: 'multiple_choice',
          question:
            'In the reaction H2O + NH3 <=> NH4+ + OH-, which substance acts as a Brønsted-Lowry acid?',
          options: [
            'H2O because it donates a proton to NH3',
            'NH3 because it produces hydroxide ions',
            'NH4+ because it accepts a proton',
            'OH- because it donates a proton to NH4+',
          ],
          correctAnswer: 0,
          explanation:
            'A Brønsted-Lowry acid is a proton (H+) donor. Here, H2O donates an H+ to NH3 to form NH4+, leaving behind OH-. Therefore, H2O behaves as an acid.',
          misconceptionTarget: 'Believing water is always neutral and can never act as an acid or base',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-07-strong-vs-weak-acids',
      tags: [
        'strong-acids',
        'weak-acids',
        'dissociation',
        'degree-of-ionisation',
        'equilibrium',
      ],
      title: '2. Strong vs Weak Acids & Bases: Degree of Dissociation',
      summary:
        'Understanding complete ionisation of strong acids versus partial, reversible dissociation of weak acids, and distinguishing between concentration (mol/dm3) and acid strength.',
      content: `### ⚡ Strong Acids vs Weak Acids

The **strength** of an acid refers strictly to the **extent to which it dissociates (ionises) in aqueous solution**:

1. **Strong Acids**:
   - Ionise **completely (100%)** in water to produce hydrogen ions.
   - The reaction is written with a **single forward arrow** ($\\to$):
     $$\\ce{HCl(aq) -> H+(aq) + Cl^-(aq)}$$
     $$\\ce{HNO3(aq) -> H+(aq) + NO3^-(aq)}$$
     $$\\ce{H2SO4(aq) -> 2H+(aq) + SO4^{2-}(aq)}$$
   - Solutions of strong acids contain **no un-ionised acid molecules**, only free hydrated ions.
   - High $[\\ce{H+}]$ gives low $\\text{pH}$ ($0 - 2$), high electrical conductivity, and rapid effervescence with magnesium or carbonates.

2. **Weak Acids**:
   - Ionise **only partially (< 2%)** in water.
   - The dissociation reaches a dynamic equilibrium written with a **reversible arrow** ($\\rightleftharpoons$):
     $$\\ce{CH3COOH(aq) <=> CH3COO^-(aq) + H+(aq)}$$
     $$\\ce{H2CO3(aq) <=> H+(aq) + HCO3^-(aq)}$$
   - Solutions of weak acids consist predominantly of **intact, neutral covalent acid molecules**, with only a small concentration of free $\\ce{H+}$ ions.
   - Lower $[\\ce{H+}]$ gives higher $\\text{pH}$ ($3 - 5$), lower electrical conductivity, and gentle/slower effervescence.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-strong-vs-weak-acids-title igcse-t07-strong-vs-weak-acids-desc" data-diagram="igcse-t07-strong-vs-weak-acids" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-strong-vs-weak-acids-title">Particle comparison of strong acid vs weak acid dissociation</title>
  <desc id="igcse-t07-strong-vs-weak-acids-desc">Beakers showing complete 100 percent dissociation in strong hydrochloric acid versus partial equilibrium dissociation in weak ethanoic acid.</desc>

  <defs>
    <marker id="igcse-t07-strong-vs-weak-acids-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left Container: Strong Acid -->
  <rect x="24" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">STRONG ACID (e.g. HCl)</text>

  <!-- Left Beaker Outline -->
  <path d="M 100 90 L 100 220 Q 100 238 118 238 L 290 238 Q 308 238 308 220 L 308 90" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Liquid fill -->
  <path d="M 102 120 L 102 220 Q 102 236 118 236 L 290 236 Q 306 236 306 220 L 306 120 Z" fill="#d6f0fb" stroke="none" />
  <line x1="102" y1="120" x2="306" y2="120" stroke="#1f2937" stroke-width="1.5" />

  <!-- Fully separated H+ and Cl- ions -->
  <circle cx="140" cy="150" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="140" y="155" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H+</text>

  <circle cx="200" cy="150" r="16" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="200" y="155" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Cl-</text>

  <circle cx="266" cy="150" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="266" y="155" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H+</text>

  <circle cx="156" cy="200" r="16" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="156" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Cl-</text>

  <circle cx="230" cy="200" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="230" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H+</text>

  <!-- Left Bottom Callout (bh=88) -->
  <g data-role="text-box" data-box="44 254 320 88">
    <rect x="44" y="254" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">100% COMPLETE IONISATION</text>
    <text x="204" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">NO UN-IONISED HCl MOLECULES</text>
    <text x="204" y="322" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">HIGH H+ CONCENTRATION (pH 1)</text>
  </g>

  <!-- Right Container: Weak Acid -->
  <rect x="416" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">WEAK ACID (e.g. CH3COOH)</text>

  <!-- Right Beaker Outline -->
  <path d="M 492 90 L 492 220 Q 492 238 510 238 L 682 238 Q 700 238 700 220 L 700 90" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Liquid fill -->
  <path d="M 494 120 L 494 220 Q 494 236 510 236 L 682 236 Q 698 236 698 220 L 698 120 Z" fill="#d6f0fb" stroke="none" />
  <line x1="494" y1="120" x2="698" y2="120" stroke="#1f2937" stroke-width="1.5" />

  <!-- Intact covalent molecules and very few ions -->
  <rect x="520" y="135" width="46" height="26" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="543" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HA</text>

  <rect x="620" y="135" width="46" height="26" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="643" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HA</text>

  <rect x="540" y="185" width="46" height="26" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="563" y="202" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HA</text>

  <!-- Only one dissociated pair -->
  <circle cx="620" cy="198" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="620" y="203" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">H+</text>

  <circle cx="660" cy="198" r="16" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />
  <text x="660" y="203" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">A-</text>

  <!-- Right Bottom Callout (bh=88) -->
  <g data-role="text-box" data-box="436 254 320 88">
    <rect x="436" y="254" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PARTIAL DISSOCIATION (&lt; 2%)</text>
    <text x="596" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">MOSTLY INTACT HA MOLECULES</text>
    <text x="596" y="322" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">LOW H+ CONCENTRATION (pH 4)</text>
  </g>
</svg>

> [!IMPORTANT]
> ### 🚨 Critical Cambridge Examiner Distinction: Strength vs Concentration
> - **Concentration** refers to the number of moles of acid solute dissolved in $1\\text{ dm}^3$ of water ($\\text{mol/dm}^3$):
>   - $6.0\\text{ mol/dm}^3$ is concentrated; $0.05\\text{ mol/dm}^3$ is dilute.
> - **Strength** refers strictly to the percentage degree of dissociation into ions:
>   - $\\ce{HCl}$ is ALWAYS a strong acid (even at $0.001\\text{ mol/dm}^3$).
>   - Ethanoic acid is ALWAYS a weak acid (even at $10\\text{ mol/dm}^3$ concentrated pure vinegar).
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-strong-weak-q1',
          type: 'multiple_choice',
          question:
            'A student tests 0.1 mol/dm3 hydrochloric acid and 0.1 mol/dm3 ethanoic acid. Which statement correctly compares the two solutions?',
          options: [
            'Hydrochloric acid has a lower pH and conducts electricity better than ethanoic acid',
            'Ethanoic acid has a lower pH because it contains more carbon and hydrogen atoms',
            'Both acids have the exact same pH because their molar concentrations are identical (0.1 mol/dm3)',
            'Hydrochloric acid reacts more slowly with magnesium because it is fully ionised',
          ],
          correctAnswer: 0,
          explanation:
            'Although both have the same concentration (0.1 mol/dm3), HCl is a strong acid that ionises completely (high [H+], pH ~ 1), giving higher conductivity and faster reaction rates. Ethanoic acid is a weak acid that ionises only partially (lower [H+], pH ~ 3).',
          misconceptionTarget: 'Believing equal concentrations of different acids must have the same pH',
        },
      ],
    },
    {
      tag: 'igcse-07-reactions-of-acids',
      tags: [
        'reactions-of-acids',
        'neutralisation',
        'metal-reactions',
        'carbonate-reactions',
        'ionic-equations',
      ],
      title: '3. Chemical Reactions of Acids: Metals, Bases & Carbonates',
      summary:
        'The three defining chemical reactions of aqueous acids, observation patterns (effervescence, temperature rise), and ionic equations highlighting spectator ion cancellation.',
      content: `### 💥 The Three Canonical Reactions of Acids

#### 1. Acid + Metal $\\to$ Salt + Hydrogen Gas
$$\\mathbf{\\text{Acid} + \\text{Metal} \\to \\text{Salt} + \\ce{H2(g)}}$$
- **Observations**: Vigorous effervescence (bubbling), metal dissolves/disappears, test tube becomes warm (exothermic).
- **Test for gas**: Hydrogen gas burns with a **squeaky pop** when tested with a lighted splint.
- **Example**:
  $$\\ce{Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)}$$
  Ionic equation (spectator $\\ce{Cl-}$ cancelled):
  $$\\mathbf{\\ce{Mg(s) + 2H+(aq) -> Mg^{2+}(aq) + H2(g)}}$$
- *Note*: Metals below hydrogen in the reactivity series (copper, silver, gold) **do not react** with dilute acids!

---

#### 2. Acid + Base / Alkali $\to$ Salt + Water Only (Neutralisation)
$$\\mathbf{\\text{Acid} + \\text{Base} \\to \\text{Salt} + \\ce{H2O(l)}}$$
- **With insoluble base**: Solid powder dissolves; solution changes colour (e.g. black $\\ce{CuO}$ dissolves in colourless $\\ce{H2SO4}$ to form clear blue $\\ce{CuSO4}$).
  $$\\ce{CuO(s) + H2SO4(aq) -> CuSO4(aq) + H2O(l)}$$
- **With soluble alkali**: No bubbling; temperature rises (exothermic neutralisation):
  $$\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$
  Universal ionic equation for neutralisation of any strong acid by an alkali:
  $$\\mathbf{\\ce{H+(aq) + OH^-(aq) -> H2O(l)}}$$

---

#### 3. Acid + Metal Carbonate $\to$ Salt + Water + Carbon Dioxide Gas
$$\\mathbf{\\text{Acid} + \\text{Carbonate} \\to \\text{Salt} + \\ce{H2O(l)} + \\ce{CO2(g)}}$$
- **Observations**: Rapid effervescence, solid carbonate dissolves.
- **Test for gas**: Bubbled through **limewater** (aqueous calcium hydroxide, $\\ce{Ca(OH)2}$), turning it **milky/cloudy** due to insoluble white $\\ce{CaCO3}$ precipitate:
  $$\\ce{CO2(g) + Ca(OH)2(aq) -> CaCO3(s) + H2O(l)}$$
- **Example**:
  $$\\ce{CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}$$
  Ionic equation:
  $$\\mathbf{\\ce{CaCO3(s) + 2H+(aq) -> Ca^{2+}(aq) + H2O(l) + CO2(g)}}$$
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-reactions-q1',
          type: 'multiple_choice',
          question:
            'A student adds excess dilute sulfuric acid to solid copper(II) carbonate. Which set of observations is correct?',
          options: [
            'Effervescence, green solid dissolves, and a blue solution forms',
            'No reaction occurs because copper is below hydrogen in the reactivity series',
            'A squeaky pop gas is produced and a red-brown solid is formed',
            'A pungent gas turns damp red litmus paper blue',
          ],
          correctAnswer: 0,
          explanation:
            'Copper(II) carbonate is a metal carbonate. It reacts with sulfuric acid to produce copper(II) sulfate (blue solution), water, and carbon dioxide gas (effervescence). Copper metal does not react with acid, but copper carbonate reacts readily!',
          misconceptionTarget: 'Confusing the unreactivity of copper metal with copper carbonate compounds',
        },
      ],
    },
    {
      tag: 'igcse-07-classification-of-oxides',
      tags: [
        'classification-of-oxides',
        'basic-oxides',
        'acidic-oxides',
        'amphoteric-oxides',
        'neutral-oxides',
      ],
      title: '4. Classification of Oxides: Basic, Acidic, Amphoteric & Neutral',
      summary:
        'Categorising chemical oxides based on acid-base reactivity, identifying amphoteric metals (aluminium, zinc), and contrasting neutral non-metal oxides.',
      content: `### 🧱 The Four Classes of Oxides

Oxides are binary compounds formed when an element bonds with oxygen. In Cambridge Chemistry (0620), oxides are classified into **four distinct categories**:

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-oxides-classification-title igcse-t07-oxides-classification-desc" data-diagram="igcse-t07-oxides-classification" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-oxides-classification-title">Classification of chemical oxides into basic, acidic, amphoteric, and neutral</title>
  <desc id="igcse-t07-oxides-classification-desc">Four quadrant infographic detailing reactivity of basic, acidic, amphoteric, and neutral oxides with acids and bases.</desc>

  <defs>
    <marker id="igcse-t07-oxides-classification-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Quadrant 1: Basic Oxides (Top-Left) -->
  <rect x="24" y="24" width="360" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="38" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="49" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">BASIC OXIDES (METALS)</text>

  <g data-role="text-box" data-box="34 70 340 110">
    <text x="204" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REACT WITH ACIDS -&gt; SALT + H2O</text>
    <text x="204" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">EXAMPLES: CuO, CaO, MgO, Na2O</text>
    <text x="204" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">CuO + H2SO4 -&gt; CuSO4 + H2O</text>
    <text x="204" y="164" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DO NOT REACT WITH BASES</text>
  </g>

  <!-- Quadrant 2: Acidic Oxides (Top-Right) -->
  <rect x="416" y="24" width="360" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="38" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="49" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">ACIDIC OXIDES (NON-METALS)</text>

  <g data-role="text-box" data-box="426 70 340 110">
    <text x="596" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REACT WITH BASES -&gt; SALT + H2O</text>
    <text x="596" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">EXAMPLES: SO2, CO2, NO2, P4O10</text>
    <text x="596" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">CO2 + 2NaOH -&gt; Na2CO3 + H2O</text>
    <text x="596" y="164" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DISSOLVE IN H2O TO FORM ACIDS</text>
  </g>

  <!-- Quadrant 3: Amphoteric Oxides (Bottom-Left) -->
  <rect x="24" y="212" width="360" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="212" width="360" height="38" rx="8" fill="#cdb8f5" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="237" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">AMPHOTERIC OXIDES</text>

  <g data-role="text-box" data-box="34 258 340 110">
    <text x="204" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REACT WITH BOTH ACIDS &amp; BASES</text>
    <text x="204" y="306" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">EXAMPLES: Al2O3, ZnO</text>
    <text x="204" y="330" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">ZnO + 2HCl -&gt; ZnCl2 + H2O</text>
    <text x="204" y="352" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ZnO + 2NaOH -&gt; Na2ZnO2 + H2O</text>
  </g>

  <!-- Quadrant 4: Neutral Oxides (Bottom-Right) -->
  <rect x="416" y="212" width="360" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="212" width="360" height="38" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="237" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">NEUTRAL OXIDES (NON-METALS)</text>

  <g data-role="text-box" data-box="426 258 340 110">
    <text x="596" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REACT WITH NEITHER ACIDS NOR BASES</text>
    <text x="596" y="306" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">EXAMPLES: CO, NO, N2O</text>
    <text x="596" y="330" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DO NOT FORM SALTS WITH ACIDS</text>
    <text x="596" y="352" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DO NOT FORM SALTS WITH BASES</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-oxides-q1',
          type: 'multiple_choice',
          question:
            'Which oxide reacts with both dilute hydrochloric acid and aqueous sodium hydroxide?',
          options: [
            'Zinc oxide (ZnO)',
            'Copper(II) oxide (CuO)',
            'Carbon monoxide (CO)',
            'Sulfur dioxide (SO2)',
          ],
          correctAnswer: 0,
          explanation:
            'Zinc oxide (ZnO) and aluminium oxide (Al2O3) are amphoteric oxides. They react with acids to form zinc salts and with alkalis to form zincates (e.g. Na2ZnO2). CuO is basic, SO2 is acidic, and CO is neutral.',
          misconceptionTarget: 'Thinking all metal oxides are basic',
        },
      ],
    },
    {
      tag: 'igcse-07-salt-solubility-rules',
      tags: [
        'salt-solubility',
        'precipitation',
        'soluble-salts',
        'insoluble-salts',
        'solubility-rules',
      ],
      title: '5. Salt Solubility Rules & Experimental Strategy',
      summary:
        'The definitive Cambridge solubility rules for common cations and anions, essential for deciding which laboratory salt preparation technique to employ.',
      content: `### 📋 General Rules of Salt Solubility in Water

To choose the correct preparation method, you MUST know whether the intended salt is **soluble** or **insoluble**:

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-salt-solubility-matrix-title igcse-t07-salt-solubility-matrix-desc" data-diagram="igcse-t07-salt-solubility-matrix" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-salt-solubility-matrix-title">Summary of Cambridge IGCSE salt solubility rules</title>
  <desc id="igcse-t07-salt-solubility-matrix-desc">Matrix diagram detailing soluble versus insoluble salts for nitrates, halides, sulfates, carbonates, and hydroxides.</desc>

  <!-- Top Title Banner -->
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">CAMBRIDGE IGCSE SALT SOLUBILITY RULES</text>
  </g>

  <!-- Row 1: Always Soluble (SPA & Nitrates) -->
  <rect x="24" y="80" width="752" height="76" rx="8" fill="#ffffff" stroke="#3f8f46" stroke-width="2" />
  <rect x="34" y="90" width="160" height="56" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="114" y="114" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ALWAYS SOLUBLE</text>
  <text x="114" y="134" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">(ZERO EXCEPTIONS)</text>

  <g data-role="text-box" data-box="204 84 560 70">
    <text x="220" y="110" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ALL SODIUM, POTASSIUM &amp; AMMONIUM SALTS ARE SOLUBLE</text>
    <text x="220" y="132" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">ALL NITRATES (NO3-) ARE COMPLETELY SOLUBLE</text>
  </g>

  <!-- Row 2: Halides and Sulfates (Two Cards) -->
  <!-- Left Card: Halides -->
  <rect x="24" y="172" width="360" height="106" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="text-box" data-box="34 176 340 96">
    <text x="204" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CHLORIDES &amp; HALIDES</text>
    <text x="204" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">MOST ARE SOLUBLE IN WATER</text>
    <text x="204" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">INSOLUBLE: AgCl, AgBr, AgI, PbCl2</text>
  </g>

  <!-- Right Card: Sulfates -->
  <rect x="416" y="172" width="360" height="106" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="text-box" data-box="426 176 340 96">
    <text x="596" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SULFATES (SO4)</text>
    <text x="596" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">MOST ARE SOLUBLE IN WATER</text>
    <text x="596" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">INSOLUBLE: BaSO4, PbSO4</text>
  </g>

  <!-- Row 3: Carbonates and Hydroxides -->
  <rect x="24" y="294" width="752" height="86" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="34" y="304" width="160" height="66" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="114" y="330" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MOST INSOLUBLE</text>
  <text x="114" y="352" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PRECIPITATES</text>

  <g data-role="text-box" data-box="204 300 560 74">
    <text x="220" y="324" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">CARBONATES: ALL INSOLUBLE (EXCEPT Na+, K+, NH4+)</text>
    <text x="220" y="348" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HYDROXIDES: ALL INSOLUBLE (EXCEPT Na+, K+, NH4+)</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-solubility-q1',
          type: 'multiple_choice',
          question:
            'Which pair consists of one soluble salt and one insoluble salt in cold water?',
          options: [
            'Magnesium sulfate (soluble) and barium sulfate (insoluble)',
            'Silver chloride (soluble) and potassium chloride (soluble)',
            'Copper(II) carbonate (soluble) and calcium carbonate (insoluble)',
            'Sodium nitrate (soluble) and lead(II) nitrate (insoluble)',
          ],
          correctAnswer: 0,
          explanation:
            'Magnesium sulfate (MgSO4) is a soluble sulfate, while barium sulfate (BaSO4) is insoluble. (AgCl is insoluble; both carbonates are insoluble; all nitrates are soluble).',
          misconceptionTarget: 'Assuming all sulfates are soluble or that all metal carbonates dissolve',
        },
      ],
    },
    {
      tag: 'igcse-07-salt-prep-excess-base',
      tags: [
        'salt-preparation',
        'excess-base-method',
        'crystallisation',
        'filtration',
        'copper-sulfate',
      ],
      title: '6. Method 1: Preparing Soluble Salts from Excess Insoluble Reactant',
      summary:
        'Step-by-step practical procedure for reacting an acid with an excess of an insoluble base, carbonate, or metal, including filtration, saturation, and crystallization.',
      content: `### 🧪 When to Use Method 1?
- **Use when**: Preparing a **soluble salt** (such as $\\ce{CuSO4}$, $\\ce{MgSO4}$, $\\ce{ZnCl2}$) starting from an **insoluble solid** (metal oxide, metal carbonate, or reactive metal).
- **Why excess solid is added**: To ensure that **all the acid has reacted and is completely consumed**, so the resulting salt solution is neutral and pure.
- **Why the solid is insoluble**: Because it is insoluble, the unreacted excess is easily separated from the solution by **simple filtration**!

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-prep-excess-insoluble-base-title igcse-t07-prep-excess-insoluble-base-desc" data-diagram="igcse-t07-prep-excess-insoluble-base" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-prep-excess-insoluble-base-title">Method 1: Preparing soluble salts using an excess insoluble base</title>
  <desc id="igcse-t07-prep-excess-insoluble-base-desc">Four-stage laboratory apparatus sequence showing warming acid with excess copper oxide, filtration of excess, heating to crystallisation point, and cooling.</desc>

  <defs>
    <marker id="igcse-t07-prep-excess-insoluble-base-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#2f7fc1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Panel 1 (Top-Left): React Acid + Excess Solid -->
  <rect x="24" y="24" width="360" height="176" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="36" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 1: REACT ACID WITH EXCESS SOLID</text>

  <!-- Beaker with liquid and excess solid -->
  <path d="M 60 76 L 60 146 Q 60 156 72 156 L 140 156 Q 152 156 152 146 L 152 76" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 62 100 L 62 146 Q 62 154 72 154 L 140 154 Q 150 154 150 146 L 150 100 Z" fill="#d6f0fb" stroke="none" />
  <!-- Excess solid settling at bottom -->
  <ellipse cx="106" cy="150" rx="30" ry="5" fill="#1f2937" />
  <!-- Burner flame -->
  <path d="M 106 162 Q 98 178 106 188 Q 114 178 106 162 Z" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />

  <g data-role="text-box" data-box="154 70 224 116">
    <rect x="154" y="70" width="224" height="116" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="266" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">WARM DILUTE ACID</text>
    <text x="266" y="116" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ADD EXCESS CuO</text>
    <text x="266" y="138" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">UNTIL NO MORE REACTS</text>
    <text x="266" y="160" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ALL ACID IS CONSUMED</text>
  </g>

  <!-- Panel 2 (Top-Right): Filter Off Excess Solid -->
  <rect x="416" y="24" width="360" height="176" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="36" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 2: FILTER OFF EXCESS SOLID</text>

  <!-- Filter Funnel + Flask -->
  <path d="M 460 76 L 520 76 L 496 112 L 496 130 L 484 130 L 484 112 Z" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <polygon points="464,80 516,80 490,110" fill="#fde58a" stroke="#1f2937" stroke-width="1" />
  <circle cx="490" cy="94" r="6" fill="#1f2937" />
  <!-- Flask underneath -->
  <path d="M 478 130 L 478 144 L 452 184 Q 448 190 456 190 L 524 190 Q 532 190 528 184 L 502 144 L 502 130 Z" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <path d="M 464 168 L 454 186 Q 452 188 458 188 L 522 188 Q 528 188 526 186 L 516 168 Z" fill="#8fd3ef" stroke="none" />

  <g data-role="text-box" data-box="540 70 224 116">
    <rect x="540" y="70" width="224" height="116" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="652" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">FILTER THE MIXTURE</text>
    <text x="652" y="116" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">RESIDUE: EXCESS CuO</text>
    <text x="652" y="138" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">FILTRATE: PURE CuSO4</text>
    <text x="652" y="160" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">CLEAR BLUE SOLUTION</text>
  </g>

  <!-- Panel 3 (Bottom-Left): Evaporate to Saturation -->
  <rect x="24" y="220" width="360" height="176" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="220" width="360" height="36" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="243" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 3: EVAPORATE TO SATURATION</text>

  <!-- Basin heating -->
  <path d="M 64 300 Q 106 338 148 300 Z" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <path d="M 96 284 Q 92 274 96 264" fill="none" stroke="#4b5563" stroke-width="1.5" />
  <path d="M 106 284 Q 102 274 106 264" fill="none" stroke="#4b5563" stroke-width="1.5" />
  <path d="M 116 284 Q 112 274 116 264" fill="none" stroke="#4b5563" stroke-width="1.5" />
  <!-- Flame -->
  <path d="M 106 344 Q 98 360 106 370 Q 114 360 106 344 Z" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />

  <g data-role="text-box" data-box="154 266 224 116">
    <rect x="154" y="266" width="224" height="116" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="266" y="290" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HEAT BLUE FILTRATE</text>
    <text x="266" y="312" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">TO SATURATION POINT</text>
    <text x="266" y="334" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">TEST WITH GLASS ROD</text>
    <text x="266" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">CRYSTALS FORM ON ROD</text>
  </g>

  <!-- Panel 4 (Bottom-Right): Cool Slowly & Dry -->
  <rect x="416" y="220" width="360" height="176" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="220" width="360" height="36" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="243" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 4: COOL SLOWLY &amp; DRY</text>

  <!-- Watch glass with blue crystals -->
  <path d="M 454 316 Q 494 344 534 316" fill="none" stroke="#1f2937" stroke-width="2" />
  <polygon points="484,320 492,310 500,320 492,330" fill="#2f7fc1" stroke="#1f2937" stroke-width="1.5" />
  <polygon points="472,324 478,316 484,324 478,332" fill="#2f7fc1" stroke="#1f2937" stroke-width="1.5" />
  <polygon points="500,324 506,316 512,324 506,332" fill="#2f7fc1" stroke="#1f2937" stroke-width="1.5" />

  <g data-role="text-box" data-box="540 266 224 116">
    <rect x="540" y="266" width="224" height="116" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="652" y="290" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COOL SLOWLY TO FORM</text>
    <text x="652" y="312" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">LARGE BLUE CRYSTALS</text>
    <text x="652" y="334" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">WASH WITH COLD WATER</text>
    <text x="652" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DRY BETWEEN PAPERS</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-prep-excess-q1',
          type: 'multiple_choice',
          question:
            'Why is excess copper(II) oxide added when preparing hydrated copper(II) sulfate crystals?',
          options: [
            'To ensure all sulfuric acid is neutralised so that the salt solution contains no unreacted acid',
            'To ensure that copper(II) sulfate crystals precipitate immediately without heating',
            'To act as a catalyst for the crystallisation process',
            'Because copper(II) oxide is soluble and will easily dissolve in excess',
          ],
          correctAnswer: 0,
          explanation:
            'Adding an excess of the insoluble base guarantees that 100% of the acid is used up. The remaining solid excess is then completely removed by filtration, leaving a neutral solution of copper(II) sulfate.',
          misconceptionTarget: 'Thinking excess reagent is added to increase the speed of crystallisation',
        },
      ],
    },
    {
      tag: 'igcse-07-salt-prep-titration',
      tags: [
        'titration-method',
        'burette',
        'pipette',
        'soluble-salts',
        'indicator',
        'sodium-chloride',
      ],
      title: '7. Method 2: Preparing Soluble Salts by Titration',
      summary:
        'The titration technique used when both acid and base/alkali are soluble, ensuring pure salt crystals without indicator contamination.',
      content: `### 🧪 When to Use Method 2?
- **Use when**: Preparing a **soluble salt** where **BOTH the acid and the base/alkali are soluble in water** (e.g. all Sodium, Potassium, and Ammonium salts like $\\ce{NaCl}$, $\\ce{KNO3}$, $(\\ce{NH4})2\\ce{SO4}$).
- **The problem**: If you add excess alkali, you cannot filter it off because it dissolves!
- **The solution**: Use **titration** with an indicator to find the exact neutralisation volume, then **repeat the reaction without any indicator**!

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-prep-titration-method-title igcse-t07-prep-titration-method-desc" data-diagram="igcse-t07-prep-titration-method" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-prep-titration-method-title">Method 2: Preparing soluble salts by titration</title>
  <desc id="igcse-t07-prep-titration-method-desc">Three-stage sequence showing titration with indicator, repeating without indicator, and evaporating to crystallise.</desc>

  <defs>
    <marker id="igcse-t07-prep-titration-method-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#2f7fc1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Panel 1: Titrate with Indicator (x: 24 to 260, w=236) -->
  <rect x="24" y="24" width="236" height="372" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="236" height="38" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="142" y="48" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STAGE 1: TITRATION</text>

  <!-- Burette sketch -->
  <rect x="133" y="80" width="18" height="120" rx="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <line x1="133" y1="100" x2="143" y2="100" stroke="#1f2937" stroke-width="1" />
  <line x1="133" y1="120" x2="147" y2="120" stroke="#1f2937" stroke-width="1" />
  <line x1="133" y1="140" x2="143" y2="140" stroke="#1f2937" stroke-width="1" />
  <line x1="133" y1="160" x2="147" y2="160" stroke="#1f2937" stroke-width="1" />
  <!-- Tap -->
  <rect x="129" y="196" width="26" height="8" rx="2" fill="#4b5563" />
  <!-- Jet tip -->
  <path d="M 138 204 L 142 218 L 146 204 Z" fill="#1f2937" />

  <!-- Conical Flask with indicator color -->
  <path d="M 127 228 L 127 244 L 93 286 Q 87 294 97 294 L 187 294 Q 197 294 191 286 L 157 244 L 157 228 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 103 274 L 95 288 Q 93 292 101 292 L 183 292 Q 191 292 189 288 L 181 274 Z" fill="#fde58a" stroke="none" />

  <g data-role="text-box" data-box="34 306 216 84">
    <rect x="34" y="306" width="216" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="142" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">MEASURE 25 CM3 ALKALI</text>
    <text x="142" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ADD METHYL ORANGE</text>
    <text x="142" y="372" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">RECORD EXACT TITRE</text>
  </g>

  <!-- Panel 2: Repeat Without Indicator (x: 282 to 518, w=236) -->
  <rect x="282" y="24" width="236" height="372" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="282" y="24" width="236" height="38" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="48" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STAGE 2: NO INDICATOR</text>

  <!-- Beaker with pure salt solution -->
  <rect x="361" y="100" width="78" height="120" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="363" y="140" width="74" height="78" fill="#d6f0fb" stroke="none" />
  <line x1="363" y1="140" x2="437" y2="140" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PURE NaCl(aq)</text>
  <text x="400" y="196" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">NO CONTAMINANT</text>

  <g data-role="text-box" data-box="292 306 216 84">
    <rect x="292" y="306" width="216" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REPEAT WITHOUT DYE</text>
    <text x="400" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">EXACT ACID VOLUME</text>
    <text x="400" y="372" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">PURE SALT SOLUTION</text>
  </g>

  <!-- Panel 3: Crystallisation & Drying (x: 540 to 776, w=236) -->
  <rect x="540" y="24" width="236" height="372" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="540" y="24" width="236" height="38" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="658" y="48" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STAGE 3: CRYSTALLISE</text>

  <!-- Basin heating -->
  <path d="M 608 150 Q 658 196 708 150 Z" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <polygon points="649,158 657,150 665,158 657,166" fill="#ffffff" stroke="#1f2937" stroke-width="1" />
  <polygon points="661,158 669,150 677,158 669,166" fill="#ffffff" stroke="#1f2937" stroke-width="1" />

  <!-- Heat source -->
  <path d="M 658 204 Q 647 226 658 240 Q 669 226 658 204 Z" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />

  <g data-role="text-box" data-box="550 306 216 84">
    <rect x="550" y="306" width="216" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="658" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">EVAPORATE TO HALF</text>
    <text x="658" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">COOL TO CRYSTALLISE</text>
    <text x="658" y="372" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DRY WITH FILTER PAPER</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-prep-titration-q1',
          type: 'multiple_choice',
          question:
            'Why must the titration be repeated WITHOUT indicator before crystallising the sodium chloride solution?',
          options: [
            'Because the indicator is a chemical dye that would contaminate the final salt crystals',
            'Because the indicator neutralises the acid and changes the yield of salt',
            'Because sodium chloride decomposes in the presence of methyl orange',
            'Because indicators make the solution boil at an unpredictably high temperature',
          ],
          correctAnswer: 0,
          explanation:
            'Indicators like methyl orange or phenolphthalein are organic dyes. If left in the mixture during evaporation, the dye would crystallise along with the salt, resulting in impure, coloured crystals.',
          misconceptionTarget: 'Not realising indicators are physical chemical contaminants',
        },
      ],
    },
    {
      tag: 'igcse-07-salt-prep-precipitation',
      tags: [
        'precipitation-method',
        'insoluble-salts',
        'filtration',
        'barium-sulfate',
        'washing-residue',
      ],
      title: '8. Method 3: Preparing Insoluble Salts by Precipitation',
      summary:
        'Preparing insoluble precipitates from two soluble salt solutions, followed by filtration, washing with distilled water to remove spectator ions, and drying.',
      content: `### 🧪 When to Use Method 3?
- **Use when**: Preparing an **insoluble salt** (such as $\\ce{BaSO4}$, $\\ce{AgCl}$, $\\ce{PbSO4}$, $\\ce{CaCO3}$).
- **Procedure**:
  1. Choose **two soluble salt solutions** containing the required cation and anion:
     $$\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)}$$
  2. Mix the two solutions together $\\to$ an insoluble solid precipitate forms **immediately**.
  3. Filter the mixture to collect the precipitate on the filter paper.
  4. **Wash the residue with distilled water** to wash away soluble spectator ions ($\\ce{Na+}$ and $\\ce{Cl-}$).
  5. Dry the pure precipitate in a warm oven or between dry filter papers.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t07-prep-precipitation-method-title igcse-t07-prep-precipitation-method-desc" data-diagram="igcse-t07-prep-precipitation-method" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t07-prep-precipitation-method-title">Method 3: Preparing insoluble salts by precipitation</title>
  <desc id="igcse-t07-prep-precipitation-method-desc">Three-stage sequence showing mixing two soluble solutions, filtration of the precipitate, and washing with distilled water.</desc>

  <defs>
    <marker id="igcse-t07-prep-precipitation-method-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#2f7fc1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Panel 1: Mix Two Solutions (x: 24 to 260, w=236) -->
  <rect x="24" y="24" width="236" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="236" height="38" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="142" y="48" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">1. MIX SOLUTIONS</text>

  <!-- Beaker with white precipitate forming -->
  <path d="M 92 110 L 92 210 Q 92 226 108 226 L 176 226 Q 192 226 192 210 L 192 110" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="94" y="140" width="96" height="84" fill="#d6f0fb" stroke="none" />
  <!-- White precipitate particles -->
  <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="150" cy="176" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="134" cy="200" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="164" cy="198" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />

  <g data-role="text-box" data-box="34 250 216 94">
    <rect x="34" y="250" width="216" height="94" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="142" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">MIX TWO SOLUTIONS</text>
    <text x="142" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">WHITE PRECIPITATE</text>
    <text x="142" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">BaSO4 SOLID FORMS</text>
  </g>

  <!-- Panel 2: Filter Precipitate (x: 282 to 518, w=236) -->
  <rect x="282" y="24" width="236" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="282" y="24" width="236" height="38" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="48" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">2. FILTER SOLID</text>

  <!-- Funnel with solid on paper -->
  <path d="M 360 100 L 440 100 L 406 146 L 406 176 L 394 176 L 394 146 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <polygon points="364,104 436,104 400,144" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="400" cy="128" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />

  <!-- Beaker receiving spectator ions -->
  <path d="M 366 176 L 366 226 Q 366 236 378 236 L 422 236 Q 434 236 434 226 L 434 176" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="368" y="200" width="64" height="34" fill="#d6f0fb" stroke="none" />

  <g data-role="text-box" data-box="292 250 216 94">
    <rect x="292" y="250" width="216" height="94" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">FILTER THE MIXTURE</text>
    <text x="400" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">RESIDUE: BaSO4 SOLID</text>
    <text x="400" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FILTRATE: NaCl(aq)</text>
  </g>

  <!-- Panel 3: Wash & Dry (x: 540 to 776, w=236) -->
  <rect x="540" y="24" width="236" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="540" y="24" width="236" height="38" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="658" y="48" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">3. WASH &amp; DRY</text>

  <!-- Wash bottle nozzle spraying onto filter paper -->
  <path d="M 618 100 L 632 130 L 640 126 L 626 96 Z" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <path d="M 634 130 Q 642 142 652 154" fill="none" stroke="#2f7fc1" stroke-width="1.5" stroke-dasharray="3,3" />

  <!-- Filter paper with solid precipitate -->
  <ellipse cx="658" cy="180" rx="36" ry="16" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <circle cx="652" cy="178" r="8" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="666" cy="180" r="8" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <g data-role="text-box" data-box="550 250 216 94">
    <rect x="550" y="250" width="216" height="94" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="658" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">WASH WITH PURE WATER</text>
    <text x="658" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">REMOVES SOLUBLE IONS</text>
    <text x="658" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DRY IN WARM OVEN</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-prep-precip-q1',
          type: 'multiple_choice',
          question:
            'A student prepares pure, dry lead(II) sulfate. Which pair of starting solutions should be mixed?',
          options: [
            'Aqueous lead(II) nitrate and dilute sulfuric acid',
            'Solid lead(II) oxide and dilute sulfuric acid',
            'Solid lead metal and aqueous sodium sulfate',
            'Aqueous lead(II) chloride and solid potassium sulfate',
          ],
          correctAnswer: 0,
          explanation:
            'Lead(II) sulfate is an insoluble salt. It must be prepared by precipitation from two soluble starting materials. All nitrates are soluble (so lead(II) nitrate dissolves), and sulfuric acid is a soluble aqueous acid. (Lead oxide with sulfuric acid fails because insoluble lead sulfate quickly forms a protective coating around the lead oxide particles, preventing further reaction).',
          misconceptionTarget: 'Attempting to make insoluble salts using the excess base method',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-07-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme', 'examiner-tips'],
      title: '9. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Theory) questions on salt preparation method selection, hydrated salt formulas, and amphoteric oxide reactions.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
Which method is the most suitable for preparing a pure, dry sample of barium sulfate?

- **A**: Adding dilute sulfuric acid to barium carbonate, filtering, and crystallising.
- **B**: Mixing aqueous barium chloride with dilute sulfuric acid, filtering the precipitate, washing with distilled water, and drying.
- **C**: Titrating barium hydroxide with sulfuric acid using methyl orange indicator.
- **D**: Heating barium metal with dilute sulfuric acid and evaporating to dryness.

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: B**
> - **Working**:
>   1. Identify the solubility of the target salt: $\\ce{BaSO4}$ is an **insoluble salt**.
>   2. Insoluble salts **must always be prepared by precipitation** (Method 3) by mixing two soluble solutions.
>   3. $\\ce{BaCl2(aq)}$ is soluble (most chlorides are soluble) and $\\ce{H2SO4(aq)}$ is soluble.
>   4. *Why A is incorrect*: Insoluble $\\ce{BaSO4}$ forms an impermeable insoluble coating over the solid $\\ce{BaCO3}$ particles, stopping the reaction almost immediately.
>   5. *Why C is incorrect*: Titration is used for soluble salts, not precipitates.

---

### 📝 Question 2 (Paper 4 Theory — 6 Marks)
Hydrated copper(II) sulfate has the formula $\\ce{CuSO4 \\cdot xH2O}$.
A student heated a crucible containing $4.99\\text{ g}$ of hydrated copper(II) sulfate crystals until all the water of crystallisation was driven off. The mass of the anhydrous white copper(II) sulfate residue was $3.19\\text{ g}$.

**(a) (2 marks)** Calculate the mass of water lost during heating.
> [!TIP]
> ### 💡 Mark Scheme:
> - $\\text{Mass of } \\ce{H2O} = 4.99\\text{ g} - 3.19\\text{ g} = 1.80\\text{ g}$ [1 mark].
> - Calculation completed with correct units [1 mark].

**(b) (3 marks)** Given that $M_r(\\ce{CuSO4}) = 159.5$ and $M_r(\\ce{H2O}) = 18.0$, determine the value of the integer $x$ in $\\ce{CuSO4 \\cdot xH2O}$. Show all your working.
> [!TIP]
> ### 💡 Mark Scheme:
> 1. Moles of anhydrous $\\ce{CuSO4} = \\frac{3.19}{159.5} = 0.0200\\text{ mol}$ [1 mark].
> 2. Moles of $\\ce{H2O} = \\frac{1.80}{18.0} = 0.100\\text{ mol}$ [1 mark].
> 3. Mole ratio $\\frac{\\text{moles } \\ce{H2O}}{\\text{moles } \\ce{CuSO4}} = \\frac{0.100}{0.0200} = 5$ [1 mark].
> - **Value of $x = 5$** (Formula is $\\ce{CuSO4 \\cdot 5H2O}$).

**(c) (1 mark)** Describe how the student could verify that all the water of crystallisation had been removed.
> [!TIP]
> ### 💡 Mark Scheme:
> - Re-heat the crucible, cool, and re-weigh until a **constant mass** is achieved [1 mark].

---

### 📝 Question 3 (Paper 4 Theory — 5 Marks)
Aluminium oxide ($\\ce{Al2O3}$) is an amphoteric oxide.

**(a) (1 mark)** Define the term *amphoteric oxide*.
> [!TIP]
> ### 💡 Mark Scheme:
> - An oxide that reacts with **both acids and bases/alkalis** to form salts [1 mark].

**(b) (2 marks)** Write a balanced chemical equation for the reaction of aluminium oxide with dilute hydrochloric acid.
> [!TIP]
> ### 💡 Mark Scheme:
> - Correct formulas: $\\ce{Al2O3 + 6HCl -> 2AlCl3 + 3H2O}$ [1 mark for formulas, 1 mark for balancing].

**(c) (2 marks)** When aluminium oxide reacts with hot aqueous sodium hydroxide, sodium aluminate ($\\ce{NaAl(OH)4}$ or $\\ce{NaAlO2}$) is formed. Explain why copper(II) oxide does NOT react with sodium hydroxide.
> [!TIP]
> ### 💡 Mark Scheme:
> 1. Copper(II) oxide is a **basic oxide** [1 mark].
> 2. Basic oxides only react with acids and do not react with bases/alkalis [1 mark].

---

### 📝 Question 4 (Paper 4 Theory — 4 Marks)
A student investigated the conductivity and rate of reaction of two acids:
- Acid A: $0.1\\text{ mol/dm}^3$ hydrochloric acid
- Acid B: $0.1\\text{ mol/dm}^3$ ethanoic acid

**(a) (2 marks)** Explain why Acid A is a better electrical conductor than Acid B.
> [!TIP]
> ### 💡 Mark Scheme:
> 1. Acid A ($\\ce{HCl}$) is a **strong acid** and is **completely ionised** in water [1 mark].
> 2. Acid B ($\\ce{CH3COOH}$) is a **weak acid** and is only **partially ionised**; Acid A has a much higher concentration of free mobile ions to carry electric charge [1 mark].

**(b) (2 marks)** Equal masses of calcium carbonate lumps are added to $50\\text{ cm}^3$ of each acid. Compare the initial rates and final total volumes of carbon dioxide produced.
> [!TIP]
> ### 💡 Mark Scheme:
> - **Initial rate**: Faster with Acid A than Acid B because $[\\ce{H+}]$ is higher, leading to a higher frequency of collisions [1 mark].
> - **Final volume of $\\ce{CO2}$**: Exactly the same total volume because both solutions contain the same number of moles of acid ($0.050\\text{ dm}^3 \\times 0.1\\text{ mol/dm}^3 = 0.005\\text{ mol}$) [1 mark].
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-07-exam-q1',
          type: 'multiple_choice',
          question:
            'A student tests an unknown white powder X. X dissolves in water to give a solution with pH 12. Adding dilute nitric acid produces effervescence, and the gas turns limewater milky. What is X?',
          options: [
            'Sodium carbonate (Na2CO3)',
            'Calcium carbonate (CaCO3)',
            'Sodium chloride (NaCl)',
            'Copper(II) carbonate (CuCO3)',
          ],
          correctAnswer: 0,
          explanation:
            'X dissolves in water (soluble) with pH 12 (alkaline carbonate). Carbonate ions produce CO2 effervescence with acid. CaCO3 and CuCO3 are insoluble in water, while NaCl is neutral (pH 7). Therefore, X must be soluble sodium carbonate (Na2CO3).',
          misconceptionTarget: 'Thinking all carbonate solutions are neutral or insoluble',
        },
      ],
    },
  ],
};
