/**
 * igcseTopic06.ts
 * Topic 6: Chemical Reactions
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_6: MaterialItem = {
  id: 206,
  topic_number: 6,
  title: 'Chemical Reactions',
  slug: 'chemical-reactions',
  category: 'Physical Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 38,
  summary:
    'Comprehensive study of physical vs chemical changes, reaction rate measurement methods, collision theory, factors affecting rates, reversible reactions and dynamic equilibrium (Le Chatelier principle, Haber and Contact processes), and redox chemistry (OIL RIG, oxidation states, and test reagents).',
  allTags: [
    'igcse-06-physical-vs-chemical',
    'igcse-06-measuring-reaction-rates',
    'igcse-06-factors-affecting-rates',
    'igcse-06-collision-theory',
    'igcse-06-reversible-reactions',
    'igcse-06-dynamic-equilibrium-le-chatelier',
    'igcse-06-redox-definitions-rules',
    'igcse-06-oxidising-reducing-agents-tests',
    'chemical-reactions',
    'rate-of-reaction',
    'gas-syringe',
    'disappearing-cross',
    'mass-loss-balance',
    'collision-theory',
    'activation-energy',
    'catalyst',
    'reversible-reactions',
    'dynamic-equilibrium',
    'le-chatelier-principle',
    'haber-process',
    'contact-process',
    'redox',
    'oil-rig',
    'oxidation-number',
    'potassium-manganate',
    'potassium-iodide',
  ],
  prerequisites: [
    {
      tag: 'igcse-06-physical-vs-chemical',
      tags: [
        'physical-change',
        'chemical-change',
        'reversibility',
        'new-substances',
      ],
      title: '1. Physical vs Chemical Changes',
      summary:
        'Distinguishing between easily reversible physical changes involving no new chemical bonds and chemical reactions involving new substances, rearrangement of atoms, and significant enthalpy changes.',
      content: `### 🔄 Fundamental Differences

In chemistry, changes in matter are strictly categorised into two broad classes:

| Feature | Physical Change | Chemical Reaction |
| :--- | :--- | :--- |
| **New Substances Formed?** | **No** (particles retain identical chemical identities) | **Yes** (atoms rearrange into completely new products) |
| **Chemical Bonds** | Intermolecular forces broken/formed; intramolecular bonds unaffected | Intramolecular ionic or covalent bonds broken and new bonds formed |
| **Reversibility** | **Easily reversible** by simple physical means (cooling, filtering) | **Difficult to reverse** (requires chemical reactions) |
| **Energy Changes** | Small energy changes (latent heat of fusion or vaporisation) | Often large energy changes (exothermic or endothermic) |
| **Classic Examples** | Melting ice ($\\ce{H2O(s) -> H2O(l)}$), dissolving sugar | Burning magnesium, rusting of iron, neutralisation |

> [!TIP]
> **Cambridge Paper 2 Distinction**: Dissolving salt in water is a **physical change** because the water can simply be evaporated off to leave pure solid sodium chloride crystals with unchanged chemical composition!
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-change-q1',
          type: 'multiple_choice',
          question:
            'Which process is a chemical change rather than a physical change?',
          options: [
            'Rusting of iron in damp air',
            'Boiling ethanol to form ethanol vapour',
            'Dissolving sugar crystals in warm tea',
            'Sublimation of solid iodine to purple gas',
          ],
          correctAnswer: 0,
          explanation:
            'Rusting creates a completely new chemical compound (hydrated iron(III) oxide, Fe2O3.xH2O) with new chemical bonds, which cannot be reversed by simple physical cooling or filtering.',
          misconceptionTarget: 'Confusing chemical changes with reversible phase transitions',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-06-measuring-reaction-rates',
      tags: [
        'rate-of-reaction',
        'gas-syringe',
        'disappearing-cross',
        'mass-loss-balance',
      ],
      title: '2. Measuring Reaction Rates: Experimental Techniques',
      summary:
        'Quantitative definition of rate of reaction and three principal Cambridge laboratory methods: collection of gas via syringe, loss of mass on balance, and turbidity timing with the disappearing cross.',
      content: `### ⏱️ Quantitative Definition of Reaction Rate

The rate of a chemical reaction is the speed at which reactants are converted into products:
$$\\text{Rate} = \\frac{\\text{Change in amount of reactant or product}}{\\text{Time taken}}$$

Common units include:
- $\\text{cm}^3/\\text{s}$ or $\\text{cm}^3/\\text{min}$ (gas volume produced per unit time).
- $\\text{g}/\\text{s}$ (mass lost per second).
- $\\text{mol}/(\\text{dm}^3\\cdot\\text{s})$ (change in molar concentration per second).

---

### 🧪 Method 1: Collecting Gas Using a Gas Syringe

When a reaction generates a gas (such as $\\ce{CO2}$ or $\\ce{H2}$):
$$\\ce{CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}$$

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-gas-syringe-rate-apparatus-title igcse-t06-gas-syringe-rate-apparatus-desc" data-diagram="igcse-t06-gas-syringe-rate-apparatus" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-gas-syringe-rate-apparatus-title">Measuring rate of gas production using a gas syringe</title>
  <desc id="igcse-t06-gas-syringe-rate-apparatus-desc">Conical flask with acid and marble chips connected by delivery tube to a gas syringe mounted horizontally.</desc>

  <defs>
    <marker id="igcse-t06-gas-syringe-rate-apparatus-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Conical Flask (x: 100 to 220) -->
  <path d="M 140 140 L 140 190 L 90 320 Q 86 330 98 330 L 222 330 Q 234 330 230 320 L 180 190 L 180 140 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Acid liquid -->
  <path d="M 112 260 L 94 322 Q 92 328 102 328 L 218 328 Q 228 328 226 322 L 208 260 Z" fill="#d6f0fb" stroke="none" />
  <line x1="112" y1="260" x2="208" y2="260" stroke="#1f2937" stroke-width="1.5" />
  <!-- Marble chips (solid) -->
  <circle cx="140" cy="316" r="8" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="160" cy="318" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="180" cy="315" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="150" cy="304" r="6" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="170" cy="305" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Rubber Bung -->
  <polygon points="136,134 184,134 178,162 142,162" fill="#4b5563" stroke="#1f2937" stroke-width="1.5" />

  <!-- Delivery Tube -->
  <path d="M 160 140 L 160 80 Q 160 70 170 70 L 370 70 Q 380 70 380 80 L 380 170 L 410 170" fill="none" stroke="#1f2937" stroke-width="4" stroke-linecap="round" />

  <!-- Gas Syringe Barrel (x: 410 to 650, y: 146 to 194) -->
  <rect x="410" y="146" width="240" height="48" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Syringe nozzle -->
  <rect x="390" y="162" width="20" height="16" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <!-- Syringe graduations -->
  <line x1="450" y1="146" x2="450" y2="160" stroke="#8a939c" stroke-width="1.5" />
  <line x1="490" y1="146" x2="490" y2="160" stroke="#8a939c" stroke-width="1.5" />
  <line x1="530" y1="146" x2="530" y2="160" stroke="#8a939c" stroke-width="1.5" />
  <line x1="570" y1="146" x2="570" y2="160" stroke="#8a939c" stroke-width="1.5" />
  <line x1="610" y1="146" x2="610" y2="160" stroke="#8a939c" stroke-width="1.5" />
  <text x="450" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">20</text>
  <text x="530" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">60</text>
  <text x="610" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">100</text>

  <!-- Syringe Plunger (pushed out to x=560) -->
  <rect x="560" y="150" width="16" height="40" fill="#2f7fc1" stroke="#1f2937" stroke-width="1.5" />
  <rect x="576" y="164" width="140" height="12" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <rect x="716" y="154" width="12" height="32" fill="#4b5563" stroke="#1f2937" stroke-width="1.5" />

  <!-- Gas collection movement arrow -->
  <path d="M 640 216 L 710 216" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t06-gas-syringe-rate-apparatus-arrow)" />
  <text x="675" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">PLUNGER MOVES OUT</text>

  <!-- Callouts -->
  <g data-role="text-box" data-box="24 20 280 44">
    <rect x="24" y="20" width="280" height="44" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="164" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GAS SYRINGE METHOD</text>
  </g>

  <g data-role="text-box" data-box="44 330 360 42">
    <rect x="44" y="330" width="360" height="42" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="224" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">MARBLE CHIPS + DILUTE ACID</text>
  </g>
</svg>

---

### 🥛 Method 2: Disappearing Cross Turbidity Method

When a fine precipitate forms in solution:
$$\\ce{Na2S2O3(aq) + 2HCl(aq) -> 2NaCl(aq) + H2O(l) + SO2(g) + S(s)}$$
- Solid sulfur ($\\ce{S(s)}$) forms as an insoluble yellow colloid.
- Place a conical flask over a white tile marked with a bold black cross (**X**).
- Time how long it takes until the cross is **completely obscured** when viewed from directly above.
$$\\text{Rate} \\propto \\frac{1}{\\text{time taken (t)}}$$

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-disappearing-cross-turbidity-title igcse-t06-disappearing-cross-turbidity-desc" data-diagram="igcse-t06-disappearing-cross-turbidity" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-disappearing-cross-turbidity-title">The disappearing cross method for rate of reaction</title>
  <desc id="igcse-t06-disappearing-cross-turbidity-desc">Flask containing sodium thiosulfate and hydrochloric acid resting on a black cross paper with sulfur precipitate obscuring the view.</desc>

  <defs>
    <marker id="igcse-t06-disappearing-cross-turbidity-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left: Start of reaction (clear) -->
  <rect x="80" y="260" width="180" height="20" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <line x1="150" y1="262" x2="190" y2="278" stroke="#1f2937" stroke-width="4" stroke-linecap="round" />
  <line x1="190" y1="262" x2="150" y2="278" stroke="#1f2937" stroke-width="4" stroke-linecap="round" />

  <!-- Left Flask (Clear Solution) -->
  <path d="M 150 110 L 150 150 L 110 250 Q 106 258 116 258 L 224 258 Q 234 258 230 250 L 190 150 L 190 110 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 126 210 L 112 250 Q 110 256 120 256 L 220 256 Q 230 256 228 250 L 214 210 Z" fill="#d6f0fb" stroke="none" />
  <line x1="126" y1="210" x2="214" y2="210" stroke="#1f2937" stroke-width="1.5" />
  <!-- Clearly visible cross under flask -->
  <line x1="150" y1="244" x2="190" y2="244" stroke="#1f2937" stroke-width="3" stroke-linecap="round" />
  <line x1="170" y1="230" x2="170" y2="256" stroke="#1f2937" stroke-width="3" stroke-linecap="round" />

  <text x="170" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TIME T = 0 (CLEAR)</text>
  <text x="170" y="310" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">CROSS IS VISIBLE</text>

  <!-- Central Transition Arrow -->
  <path d="M 330 190 L 440 190" fill="none" stroke="#d64545" stroke-width="2.5" marker-end="url(#igcse-t06-disappearing-cross-turbidity-arrow)" />
  <text x="385" y="175" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">SULFUR FORMS</text>
  <text x="385" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">TURBIDITY INCREASES</text>

  <!-- Right: End of reaction (cloudy yellow) -->
  <rect x="520" y="260" width="180" height="20" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Right Flask (Turbid Yellow Solution) -->
  <path d="M 590 110 L 590 150 L 550 250 Q 546 258 556 258 L 664 258 Q 674 258 670 250 L 630 150 L 630 110 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 566 210 L 552 250 Q 550 256 560 256 L 660 256 Q 670 256 668 250 L 654 210 Z" fill="#fde58a" stroke="none" />
  <line x1="566" y1="210" x2="654" y2="210" stroke="#1f2937" stroke-width="1.5" />

  <text x="610" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TIME T = STOP (TURBID)</text>
  <text x="610" y="310" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">CROSS DISAPPEARS</text>

  <!-- Top summary banner -->
  <g data-role="text-box" data-box="150 20 500 40">
    <rect x="150" y="20" width="500" height="40" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="45" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DISAPPEARING CROSS: THIOSULFATE + HYDROCHLORIC ACID</text>
  </g>
</svg>

> [!CAUTION]
> **Experimental Error in Disappearing Cross**: Deciding when the cross has *completely* disappeared is subjective and relies on individual human eyesight. It can be significantly improved by placing a light sensor (data logger with colorimeter) on one side and a light bulb on the other to measure light transmission quantitatively!
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-methods-q1',
          type: 'multiple_choice',
          question:
            'A student reacts marble chips with dilute hydrochloric acid on a top-pan balance. Why should a loose cotton wool plug be placed in the neck of the conical flask?',
          options: [
            'To allow carbon dioxide gas to escape while preventing acid spray from splashing out',
            'To trap carbon dioxide gas inside the flask so the mass remains constant',
            'To prevent air from reacting with the hydrochloric acid solution',
            'To absorb water vapour so that only carbon dioxide gas can dissolve',
          ],
          correctAnswer: 0,
          explanation:
            'The cotton wool allows gas (CO2) to escape freely so mass loss can be measured, but stops liquid acid droplets from spraying out of the flask during vigorous effervescence, which would cause an artificially high mass loss reading.',
          misconceptionTarget: 'Thinking cotton wool traps carbon dioxide gas',
        },
      ],
    },
    {
      tag: 'igcse-06-factors-affecting-rates',
      tags: [
        'concentration',
        'temperature',
        'surface-area',
        'catalyst',
        'rate-curves',
      ],
      title: '3. Factors Affecting Reaction Rates & Graph Interpretation',
      summary:
        'Understanding how concentration, solid particle size, temperature, and catalysts modify reaction speed, and extracting initial rates from tangents to gas volume-time graphs.',
      content: `### 📈 Interpreting Gas Volume vs Time Curves

When graphing reaction progress:
1. **Initial Rate (t = 0)**: The curve is steepest at the very start because the concentration of reactants is highest.
2. **Slowing Down**: As reactants are consumed, collision frequency drops, and the gradient becomes shallower.
3. **Reaction Finishes (Gradient = 0)**: When the limiting reactant is completely used up, the curve levels off to a horizontal plateau.

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-rate-volume-time-curves-title igcse-t06-rate-volume-time-curves-desc" data-diagram="igcse-t06-rate-volume-time-curves" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-rate-volume-time-curves-title">Volume of gas vs time graphs for different reaction rates</title>
  <desc id="igcse-t06-rate-volume-time-curves-desc">Graph comparing high temperature or catalyst curve against lower temperature curve leveling off at the same final volume.</desc>

  <defs>
    <marker id="igcse-t06-rate-volume-time-curves-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="80" y1="340" x2="80" y2="40" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t06-rate-volume-time-curves-arrow)" />
  <line x1="80" y1="340" x2="720" y2="340" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t06-rate-volume-time-curves-arrow)" />
  <text x="90" y="30" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">VOLUME OF GAS (CM3)</text>
  <text x="730" y="360" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TIME (S)</text>

  <!-- Horizontal Plateau Level Guideline (y = 120) -->
  <line x1="80" y1="120" x2="680" y2="120" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="670" y="112" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#8a939c">SAME FINAL VOLUME</text>

  <!-- Curve A: Fast Reaction (Higher Temp / Powdered / Catalysed) -->
  <path d="M 80 340 Q 140 130 260 120 L 680 120" fill="none" stroke="#d64545" stroke-width="3" />
  <!-- Curve B: Normal Reaction (Lump / Lower Temp) -->
  <path d="M 80 340 Q 240 210 460 120 L 680 120" fill="none" stroke="#2f7fc1" stroke-width="3" />

  <!-- Initial Tangent to Curve A -->
  <line x1="80" y1="340" x2="160" y2="100" stroke="#d64545" stroke-width="1.5" stroke-dasharray="3 3" />
  <text x="155" y="160" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">INITIAL TANGENT</text>

  <!-- Callouts -->
  <g data-role="text-box" data-box="280 34 280 64">
    <rect x="280" y="34" width="280" height="64" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
    <text x="420" y="58" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">CURVE A: FASTER INITIAL RATE</text>
    <text x="420" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HIGHER T / POWDER / CATALYST</text>
  </g>

  <g data-role="text-box" data-box="480 180 240 64">
    <rect x="480" y="180" width="240" height="64" rx="6" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
    <text x="600" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CURVE B: SLOWER RATE</text>
    <text x="600" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">LOWER T / LARGE LUMPS</text>
  </g>

  <!-- Core Rule Banner -->
  <g data-role="text-box" data-box="120 250 300 62">
    <rect x="120" y="250" width="300" height="62" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="270" y="274" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">FINAL VOLUME DEPENDS ON</text>
    <text x="270" y="296" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">MOLES OF LIMITING REACTANT</text>
  </g>
</svg>

> [!IMPORTANT]
> **Examiner Trap (Paper 4)**:
> - Changing **temperature**, **surface area**, or adding a **catalyst** changes the *rate* (initial gradient) but **DOES NOT change the total volume of gas produced** if the amounts of reactants are identical!
> - Doubling the moles of limiting reactant will **double the final volume** of gas produced!
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-factors-q1',
          type: 'multiple_choice',
          question:
            'Excess calcium carbonate chips are reacted with 50 cm³ of 1.0 mol/dm³ HCl. In a second experiment, the same mass of chips is reacted with 50 cm³ of 2.0 mol/dm³ HCl. How does the second experiment compare to the first?',
          options: [
            'Initial rate is faster AND final volume of gas is doubled',
            'Initial rate is faster AND final volume of gas is identical',
            'Initial rate is unchanged AND final volume of gas is doubled',
            'Initial rate is slower AND final volume of gas is halved',
          ],
          correctAnswer: 0,
          explanation:
            'Doubling acid concentration doubles the frequency of collisions (faster initial rate) AND doubles the moles of limiting reactant HCl (producing double the total volume of CO2 gas).',
          misconceptionTarget: 'Believing concentration only changes rate without affecting stoichiometric yield',
        },
      ],
    },
    {
      tag: 'igcse-06-collision-theory',
      tags: [
        'collision-theory',
        'activation-energy',
        'kinetic-energy',
        'successful-collisions',
      ],
      title: '4. Collision Theory & Explaining Rate Changes',
      summary:
        'Explaining how temperature, concentration, pressure, surface area, and catalysts alter reaction rate at the particulate level using Cambridge mark scheme terminology.',
      content: `### ⚛️ The Fundamental Conditions for Collision

According to **collision theory**, particles can only react when:
1. They **collide with each other**.
2. They collide with sufficient kinetic energy, greater than or equal to the **activation energy** ($E_k \\ge E_a$).
3. They collide with the **correct orientation**.

Collisions that fulfill these criteria are called **successful (or fruitful) collisions**.

---

### 📋 Cambridge Examiner Mark Scheme Criteria

Examiners strictly award marks for precise phrases:

| Factor Changed | Microscopic Explanation (Exact Cambridge Keywords) |
| :--- | :--- |
| **Increased Concentration / Gas Pressure** | More particles per unit volume $\\to$ Particles are closer together $\\to$ **Greater frequency of collisions** (more collisions per unit time). |
| **Increased Solid Surface Area (Powder)** | More solid particles exposed at the surface $\\to$ **Greater frequency of collisions** per second. |
| **Increased Temperature** | Particles gain kinetic energy $\\to$ Move faster $\\to$ Slightly more frequent collisions **AND MUCH GREATER FRACTION OF PARTICLES have energy $\\ge E_a$** $\\to$ Far more **successful collisions per second**. |
| **Adding a Catalyst** | Provides an **alternative reaction pathway** with a **lower activation energy ($E_a$)** $\\to$ More colliding particles possess $E \\ge E_a$. |

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-particle-collision-theory-title igcse-t06-particle-collision-theory-desc" data-diagram="igcse-t06-particle-collision-theory" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-particle-collision-theory-title">Particle collision theory in reactions</title>
  <desc id="igcse-t06-particle-collision-theory-desc">Diagram comparing low concentration with few collisions against high concentration and high temperature with frequent energetic collisions.</desc>

  <!-- Left: Low Concentration -->
  <rect x="24" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">LOW CONCENTRATION</text>

  <!-- Particles scattered far apart -->
  <circle cx="80" cy="110" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="280" cy="120" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="120" cy="190" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="260" cy="200" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />

  <!-- Bottom callout -->
  <g data-role="text-box" data-box="44 236 320 88">
    <rect x="44" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#4b5563">FEW PARTICLES PER VOLUME</text>
    <text x="204" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">LOWER COLLISION FREQUENCY</text>
    <text x="204" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">SLOW REACTION RATE</text>
  </g>

  <!-- Right: High Concentration & High Temp -->
  <rect x="416" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">HIGH CONCENTRATION & TEMP</text>

  <!-- Many colliding particles with movement vectors -->
  <circle cx="480" cy="110" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="530" cy="115" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <line x1="492" y1="112" x2="518" y2="114" stroke="#d64545" stroke-width="2" />

  <circle cx="650" cy="120" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="700" cy="125" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />

  <circle cx="510" cy="190" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="560" cy="185" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="640" cy="190" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="690" cy="195" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />

  <!-- Bottom callout -->
  <g data-role="text-box" data-box="436 236 320 88">
    <rect x="436" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">MORE PARTICLES PER VOLUME</text>
    <text x="596" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HIGHER COLLISION FREQUENCY</text>
    <text x="596" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ENERGY EXCEEDS ACTIVATION ENERGY</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-collision-q1',
          type: 'multiple_choice',
          question:
            'Why does a 10 °C rise in temperature produce a dramatic increase in reaction rate, even though the collision frequency only increases by about 2%?',
          options: [
            'A much larger fraction of colliding particles now have kinetic energy equal to or greater than the activation energy',
            'The activation energy of the reaction is halved by the increase in temperature',
            'The concentration of reactants increases due to thermal expansion',
            'All collisions become perfectly elastic so no energy is lost',
          ],
          correctAnswer: 0,
          explanation:
            'A small rise in temperature shifts the Maxwell-Boltzmann kinetic energy distribution, exponentially increasing the proportion of particles with energy >= Ea. The activation energy itself remains unchanged.',
          misconceptionTarget: 'Thinking temperature lowers the activation energy',
        },
      ],
    },
    {
      tag: 'igcse-06-reversible-reactions',
      tags: [
        'reversible-reactions',
        'copper-sulfate',
        'cobalt-chloride',
        'water-tests',
      ],
      title: '5. Reversible Reactions & Chemical Tests for Water',
      summary:
        'Understanding reversibility signified by the double arrow symbol (⇌) and the classic Cambridge diagnostic tests for the presence of water using copper(II) sulfate and cobalt(II) chloride.',
      content: `### 🔁 The Reversible Reaction Symbol ($\\rightleftharpoons$)

In many reactions, products can react together to reform the original reactants:
$$\\text{Reactants} \\rightleftharpoons \\text{Products}$$

### 💧 Classic Water Tests in Cambridge Syllabus

1. **Hydrated vs Anhydrous Copper(II) Sulfate**:
   $$\\ce{CuSO4(s) + 5H2O(l) <=> CuSO4.5H2O(s)}$$
   - Adding water to white anhydrous copper(II) sulfate turns it **bright blue** and releases heat (exothermic).
   - Heating blue hydrated copper(II) sulfate drives off steam, turning it back to **white solid** (endothermic).

2. **Cobalt(II) Chloride Paper**:
   $$\\ce{CoCl2(s) + 6H2O(l) <=> CoCl2.6H2O(s)}$$
   - Anhydrous cobalt(II) chloride is **blue**.
   - In the presence of water, it turns **pink**.

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-reversible-color-tests-title igcse-t06-reversible-color-tests-desc" data-diagram="igcse-t06-reversible-color-tests" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-reversible-color-tests-title">Reversible color tests for water</title>
  <desc id="igcse-t06-reversible-color-tests-desc">Color transitions for anhydrous copper sulfate and cobalt chloride paper upon addition and removal of water.</desc>

  <defs>
    <marker id="igcse-t06-reversible-color-tests-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left: Copper Sulfate -->
  <rect x="24" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">COPPER(II) SULFATE</text>

  <!-- Dish 1: Anhydrous (White) -->
  <ellipse cx="100" cy="140" rx="40" ry="16" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="100" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">WHITE (ANHYDROUS)</text>

  <!-- Forward and Reverse Arrows -->
  <path d="M 150 130 L 250 130" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t06-reversible-color-tests-arrow)" />
  <text x="200" y="120" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">+ WATER</text>

  <path d="M 250 150 L 150 150" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t06-reversible-color-tests-arrow)" />
  <text x="200" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">+ HEAT</text>

  <!-- Dish 2: Hydrated (Blue) -->
  <ellipse cx="300" cy="140" rx="40" ry="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="300" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">BLUE (HYDRATED)</text>

  <!-- Bottom Callout -->
  <g data-role="text-box" data-box="44 236 320 88">
    <rect x="44" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TEST FOR PRESENCE OF WATER</text>
    <text x="204" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">WHITE TURNS BLUE</text>
    <text x="204" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DOES NOT PROVE WATER IS PURE</text>
  </g>

  <!-- Right: Cobalt Chloride -->
  <rect x="416" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#cdb8f5" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">COBALT(II) CHLORIDE</text>

  <!-- Paper 1: Dry (Blue) -->
  <rect x="460" y="116" width="60" height="48" rx="4" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="490" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">BLUE (DRY)</text>

  <!-- Arrows -->
  <path d="M 540 130 L 640 130" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t06-reversible-color-tests-arrow)" />
  <text x="590" y="120" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">+ WATER</text>

  <path d="M 640 150 L 540 150" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t06-reversible-color-tests-arrow)" />
  <text x="590" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">+ HEAT</text>

  <!-- Paper 2: Wet (Pink) -->
  <rect x="660" y="116" width="60" height="48" rx="4" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="690" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PINK (HYDRATED)</text>

  <!-- Bottom Callout -->
  <g data-role="text-box" data-box="436 236 320 88">
    <rect x="436" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">COBALT CHLORIDE TEST PAPER</text>
    <text x="596" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">BLUE TURNS PINK</text>
    <text x="596" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">SHOWS WATER IS PRESENT</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-water-q1',
          type: 'multiple_choice',
          question:
            'A sample of colourless liquid turns white anhydrous copper(II) sulfate blue. What does this experiment prove about the liquid?',
          options: [
            'The liquid contains water, but it is not necessarily pure water',
            'The liquid is 100% pure distilled water',
            'The liquid has a boiling point of exactly 100 °C',
            'The liquid is an acidic solution of copper ions',
          ],
          correctAnswer: 0,
          explanation:
            'Anhydrous copper(II) sulfate tests for the chemical presence of water, but does not prove purity! To prove that water is pure, you must measure its physical boiling point (exactly 100 °C at 1 atm) or melting point (0 °C).',
          misconceptionTarget: 'Confusing chemical test for water with test for purity',
        },
      ],
    },
    {
      tag: 'igcse-06-dynamic-equilibrium-le-chatelier',
      tags: [
        'dynamic-equilibrium',
        'le-chatelier',
        'haber-process',
        'contact-process',
      ],
      title: '6. Dynamic Equilibrium, Le Chatelier & Industrial Compromises',
      summary:
        'Defining dynamic equilibrium in closed systems, predicting position shifts using Le Chatelier principle, and industrial compromise conditions in the Haber and Contact processes.',
      content: `### ⚖️ The Characteristics of Dynamic Equilibrium

In a **closed system** (where no matter can enter or escape):
1. Forward and reverse reaction rates are equal:
   $$\\text{Rate}_\\text{forward} = \\text{Rate}_\\text{reverse}$$
2. Concentrations of reactants and products remain constant over time.
3. Both reactions continue to occur simultaneously at molecular scale (hence **dynamic**).

---

### 🔄 Le Chatelier's Principle

> *"If a system at dynamic equilibrium is subjected to a change in conditions (temperature, pressure, or concentration), the position of equilibrium will shift in the direction that counteracts the change."*

| Disturbance | Equilibrium Shift | Why? |
| :--- | :--- | :--- |
| **Increase Temperature** | Shifts in the **endothermic direction** | Absorbs excess heat to cool the system down. |
| **Decrease Temperature** | Shifts in the **exothermic direction** | Releases heat to warm the system up. |
| **Increase Gas Pressure** | Shifts towards the side with **fewer gas moles** | Reduces total gas volume and relieves pressure. |
| **Decrease Gas Pressure** | Shifts towards the side with **more gas moles** | Increases total gas moles to restore pressure. |
| **Add a Catalyst** | **NO EFFECT on position of equilibrium** | Speeds up forward and reverse rates **equally**! Reaches equilibrium faster. |

---

### 🏭 Industrial Case Study: The Haber Process

$$\\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \\quad \\Delta H = -92\\text{ kJ/mol}$$
- **Gas moles**: $1 + 3 = 4\\text{ moles (left)}$ vs $2\\text{ moles (right)}$.
- **Forward reaction is EXOTHERMIC**.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-haber-process-compromise-title igcse-t06-haber-process-compromise-desc" data-diagram="igcse-t06-haber-process-compromise" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-haber-process-compromise-title">The Haber Process industrial compromise conditions</title>
  <desc id="igcse-t06-haber-process-compromise-desc">Overview of Haber process conditions showing compromise between equilibrium yield and reaction rate.</desc>

  <!-- Left: Temperature Compromise -->
  <rect x="24" y="24" width="230" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="230" height="42" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="139" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">TEMPERATURE</text>

  <text x="139" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">450 °C</text>
  <text x="139" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">COMPROMISE TEMP</text>

  <g data-role="text-box" data-box="34 160 210 184">
    <rect x="34" y="160" width="210" height="184" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="139" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">LOW T: HIGHER YIELD</text>
    <text x="139" y="208" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(EXOTHERMIC FORWARD)</text>
    <text x="139" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">BUT LOW T: TOO SLOW</text>
    <text x="139" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">450 C IS COMPROMISE</text>
    <text x="139" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ECONOMIC OPTIMUM</text>
  </g>

  <!-- Middle: Pressure Compromise -->
  <rect x="285" y="24" width="230" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="285" y="24" width="230" height="42" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">PRESSURE</text>

  <text x="400" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">200 ATM</text>
  <text x="400" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">COMPROMISE PRESSURE</text>

  <g data-role="text-box" data-box="295 160 210 184">
    <rect x="295" y="160" width="210" height="184" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">HIGH P: HIGHER YIELD</text>
    <text x="400" y="208" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(SHIFTS TO NH3 SIDE)</text>
    <text x="400" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HIGH P IS DANGEROUS</text>
    <text x="400" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">EXPENSIVE PIPES</text>
    <text x="400" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">200 ATM IS OPTIMUM</text>
  </g>

  <!-- Right: Catalyst & Recycling -->
  <rect x="546" y="24" width="230" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="546" y="24" width="230" height="42" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="661" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#3f8f46">CATALYST</text>

  <text x="661" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#3f8f46">IRON (Fe)</text>
  <text x="661" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FINELY DIVIDED</text>

  <g data-role="text-box" data-box="556 160 210 184">
    <rect x="556" y="160" width="210" height="184" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="661" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">LOWERS ACTIVATION E</text>
    <text x="661" y="208" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FASTER EQUILIBRIUM</text>
    <text x="661" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">NO EFFECT ON YIELD</text>
    <text x="661" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">UNREACTED GASES</text>
    <text x="661" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">COOLED & RECYCLED</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-lechat-q1',
          type: 'multiple_choice',
          question:
            'In the Contact process for making sulfuric acid: 2SO2(g) + O2(g) ⇌ 2SO3(g) (ΔH = -197 kJ/mol). Which change will increase the equilibrium percentage yield of sulfur trioxide (SO3)?',
          options: [
            'Increasing pressure and decreasing temperature',
            'Decreasing pressure and increasing temperature',
            'Increasing temperature and adding more V2O5 catalyst',
            'Decreasing pressure and removing oxygen gas',
          ],
          correctAnswer: 0,
          explanation:
            'The forward reaction is exothermic, so decreasing temperature shifts equilibrium to the right. The forward reaction has fewer gas moles (3 moles -> 2 moles), so increasing pressure shifts equilibrium to the right.',
          misconceptionTarget: 'Thinking catalysts increase equilibrium yield',
        },
      ],
    },
    {
      tag: 'igcse-06-redox-definitions-rules',
      tags: [
        'redox',
        'oxidation',
        'reduction',
        'oil-rig',
        'oxidation-numbers',
      ],
      title: '7. Redox Chemistry: Definitions & Oxidation States',
      summary:
        'Comprehensive breakdown of oxidation and reduction in terms of oxygen, hydrogen, electrons (OIL RIG), and assigning oxidation numbers to identify redox processes.',
      content: `### 🔁 The Four Definitions of Oxidation and Reduction

| Definition | Oxidation | Reduction |
| :--- | :--- | :--- |
| **In terms of Oxygen** | **Gain** of oxygen | **Loss** of oxygen |
| **In terms of Hydrogen** | **Loss** of hydrogen | **Gain** of hydrogen |
| **In terms of Electrons** | **Loss** of electrons (**OIL**) | **Gain** of electrons (**RIG**) |
| **In terms of Oxidation Number** | **Increase** in oxidation state | **Decrease** in oxidation state |

> [!TIP]
> ### 💡 Mnemonic: OIL RIG
> - **OIL**: Oxidation Is Loss of electrons
> - **RIG**: Reduction Is Gain of electrons

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-redox-oil-rig-electron-transfer-title igcse-t06-redox-oil-rig-electron-transfer-desc" data-diagram="igcse-t06-redox-oil-rig-electron-transfer" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-redox-oil-rig-electron-transfer-title">Electron transfer in redox reactions (OIL RIG)</title>
  <desc id="igcse-t06-redox-oil-rig-electron-transfer-desc">Magnesium atom losing two electrons to chlorine atoms, showing oxidation is loss and reduction is gain.</desc>

  <defs>
    <marker id="igcse-t06-redox-oil-rig-electron-transfer-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left: Oxidation Card (OIL) -->
  <rect x="24" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">OXIDATION: OIL (LOSS OF E-)</text>

  <!-- Magnesium atom -->
  <circle cx="120" cy="140" r="28" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="120" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">Mg</text>
  <text x="120" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">STATE: 0</text>

  <!-- Electron ejection arrow -->
  <path d="M 160 140 L 250 140" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t06-redox-oil-rig-electron-transfer-arrow)" />
  <text x="205" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">- 2 ELECTRONS</text>

  <!-- Mg2+ ion -->
  <circle cx="300" cy="140" r="24" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="300" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">Mg2+</text>
  <text x="300" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">STATE: +2</text>

  <!-- Left Bottom Callout -->
  <g data-role="text-box" data-box="44 236 320 88">
    <rect x="44" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">Mg IS THE REDUCING AGENT</text>
    <text x="204" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">LOSES ELECTRONS TO CHLORINE</text>
    <text x="204" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">OXIDATION NUMBER INCREASES</text>
  </g>

  <!-- Right: Reduction Card (RIG) -->
  <rect x="416" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">REDUCTION: RIG (GAIN OF E-)</text>

  <!-- Chlorine molecule -->
  <circle cx="470" cy="140" r="20" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="500" cy="140" r="20" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="485" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Cl2</text>
  <text x="485" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">STATE: 0</text>

  <!-- Electron gain arrow -->
  <path d="M 530 140 L 590 140" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t06-redox-oil-rig-electron-transfer-arrow)" />
  <text x="560" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">+ 2 ELECTRONS</text>

  <!-- 2 Chloride ions -->
  <circle cx="620" cy="140" r="20" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="664" cy="140" r="20" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="642" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">2 Cl-</text>
  <text x="642" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">STATE: -1</text>

  <!-- Right Bottom Callout -->
  <g data-role="text-box" data-box="436 236 320 88">
    <rect x="436" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">Cl2 IS THE OXIDISING AGENT</text>
    <text x="596" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">GAINS ELECTRONS FROM MAGNESIUM</text>
    <text x="596" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">OXIDATION NUMBER DECREASES</text>
  </g>
</svg>

---

### 🔢 Rules for Assigning Oxidation Numbers (Extended Syllabus)

1. Pure uncombined elements have an oxidation number of **0** (e.g. $\\ce{Mg}$, $\\ce{O2}$, $\\ce{P4}$).
2. Simple monatomic ions have an oxidation state equal to their charge (e.g. $\\ce{Na+} = +1$, $\\ce{O^{2-}} = -2$, $\\ce{Al^{3+}} = +3$).
3. In compounds:
   - Group I metals are always $+1$.
   - Group II metals are always $+2$.
   - Fluorine is always $-1$.
   - Oxygen is almost always **$-2$** (except in peroxides like $\\ce{H2O2}$ where it is $-1$).
   - Hydrogen is almost always **$+1$** (except in metal hydrides like $\\ce{NaH}$ where it is $-1$).
4. The sum of all oxidation numbers in a neutral compound is **$0$**.
5. The sum of all oxidation numbers in a polyatomic ion equals the **ion's overall charge** (e.g. in $\\ce{SO4^{2-}}$, $S + 4(-2) = -2 \\implies S = +6$).
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-oxnum-q1',
          type: 'multiple_choice',
          question:
            'What is the oxidation number of manganese in potassium manganate(VII), KMnO4?',
          options: ['+7', '+6', '+4', '+2'],
          correctAnswer: 0,
          explanation:
            'In KMnO4, potassium is +1 and each oxygen is -2 (total for 4 oxygens = -8). For the neutral compound: (+1) + Mn + (-8) = 0 => Mn = +7.',
          misconceptionTarget: 'Forgetting the +1 charge of potassium in calculation',
        },
      ],
    },
    {
      tag: 'igcse-06-oxidising-reducing-agents-tests',
      tags: [
        'oxidising-agent',
        'reducing-agent',
        'potassium-manganate',
        'potassium-iodide',
      ],
      title: '8. Oxidising & Reducing Agents: Reagent Identification Tests',
      summary:
        'Identifying oxidising and reducing agents and testing for unknown species using acidified potassium manganate(VII) and aqueous potassium iodide color changes.',
      content: `### 🧪 Reagent Tests for Oxidising and Reducing Agents

Cambridge examinations test two specific benchmark reagents for redox identification:

#### 1. Test for Reducing Agents: Acidified Aqueous Potassium Manganate(VII) ($\\ce{KMnO4}$)
- Manganate(VII) ion ($\\ce{MnO4-}$ with $\\text{Mn}^{VII}$) is a powerful **oxidising agent**.
- When reacted with a reducing agent (e.g. $\\ce{SO2}$, $\\ce{Fe^{2+}}$), it is reduced to manganese(II) ions ($\\ce{Mn^{2+}}$):
  $$\\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^{2+}(aq) + 4H2O(l)}$$
- **Visible Colour Change**: **Purple to colourless** (decolourises).

#### 2. Test for Oxidising Agents: Aqueous Potassium Iodide ($\\ce{KI}$)
- Iodide ion ($\\ce{I-}$ with oxidation number $-1$) is a powerful **reducing agent**.
- When reacted with an oxidising agent (e.g. $\\ce{Cl2}$, acidified $\\ce{H2O2}$, $\\ce{Fe^{3+}}$), iodide is oxidised to elemental iodine ($\\ce{I2}$):
  $$\\ce{2I-(aq) -> I2(aq) + 2e-}$$
- **Visible Colour Change**: **Colourless to brown** (or blue-black if starch indicator is added).

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t06-manganate-iodide-redox-tests-title igcse-t06-manganate-iodide-redox-tests-desc" data-diagram="igcse-t06-manganate-iodide-redox-tests" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t06-manganate-iodide-redox-tests-title">Chemical test reagents for oxidising and reducing agents</title>
  <desc id="igcse-t06-manganate-iodide-redox-tests-desc">Color changes for potassium manganate purple to colourless and potassium iodide colourless to brown.</desc>

  <defs>
    <marker id="igcse-t06-manganate-iodide-redox-tests-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left: Acidified KMnO4 (Purple to Colourless) -->
  <rect x="24" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#cdb8f5" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">TEST FOR REDUCING AGENT</text>

  <!-- Test Tube 1: Purple KMnO4 -->
  <rect x="80" y="90" width="36" height="110" rx="18" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 82 130 L 82 182 Q 82 198 98 198 Q 114 198 114 182 L 114 130 Z" fill="#cdb8f5" stroke="none" />
  <text x="98" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PURPLE</text>

  <!-- Arrow -->
  <path d="M 150 150 L 240 150" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t06-manganate-iodide-redox-tests-arrow)" />
  <text x="195" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">+ REDUCING AGENT</text>

  <!-- Test Tube 2: Colourless Mn2+ -->
  <rect x="270" y="90" width="36" height="110" rx="18" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 272 130 L 272 182 Q 272 198 288 198 Q 304 198 304 182 L 304 130 Z" fill="#ececec" stroke="none" />
  <text x="288" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">COLOURLESS</text>

  <!-- Left Bottom Callout -->
  <g data-role="text-box" data-box="44 236 320 88">
    <rect x="44" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ACIDIFIED KMnO4</text>
    <text x="204" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PURPLE TO COLOURLESS</text>
    <text x="204" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Mn(VII) REDUCED TO Mn(II)</text>
  </g>

  <!-- Right: Aqueous KI (Colourless to Brown) -->
  <rect x="416" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">TEST FOR OXIDISING AGENT</text>

  <!-- Test Tube 1: Colourless KI -->
  <rect x="470" y="90" width="36" height="110" rx="18" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 472 130 L 472 182 Q 472 198 488 198 Q 504 198 504 182 L 504 130 Z" fill="#ececec" stroke="none" />
  <text x="488" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">COLOURLESS</text>

  <!-- Arrow -->
  <path d="M 540 150 L 630 150" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t06-manganate-iodide-redox-tests-arrow)" />
  <text x="585" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">+ OXIDISING AGENT</text>

  <!-- Test Tube 2: Brown I2 -->
  <rect x="660" y="90" width="36" height="110" rx="18" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 662 130 L 662 182 Q 662 198 678 198 Q 694 198 694 182 L 694 130 Z" fill="#fcc68b" stroke="none" />
  <text x="678" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">BROWN</text>

  <!-- Right Bottom Callout -->
  <g data-role="text-box" data-box="436 236 320 88">
    <rect x="436" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">AQUEOUS POTASSIUM IODIDE</text>
    <text x="596" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">COLOURLESS TO BROWN</text>
    <text x="596" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">I- OXIDISED TO IODINE (I2)</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-reagents-q1',
          type: 'multiple_choice',
          question:
            'When chlorine gas is bubbled into colourless aqueous potassium iodide, the solution turns brown. What is the role of chlorine in this reaction?',
          options: [
            'Chlorine is the oxidising agent because it oxidises iodide ions to iodine',
            'Chlorine is the reducing agent because it reduces potassium ions to potassium metal',
            'Chlorine is a catalyst because its oxidation state remains unchanged',
            'Chlorine acts as an acid by donating protons to iodide',
          ],
          correctAnswer: 0,
          explanation:
            'Chlorine has a higher affinity for electrons than iodine. It oxidises I- to I2 (loss of electrons) while itself being reduced from Cl2 to 2Cl- (gain of electrons). Therefore, chlorine is the oxidising agent.',
          misconceptionTarget: 'Confusing the substance that is reduced with the reducing agent',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-06-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme', 'examiner-tips'],
      title: '9. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Theory) questions on rate curve interpretation, collision theory, Haber equilibrium compromise, and redox reactions.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
Excess calcium carbonate chips are added to $50\\text{ cm}^3$ of $1.0\\text{ mol/dm}^3$ hydrochloric acid at $25^\\circ\\text{C}$. The volume of carbon dioxide gas evolved is recorded over time (Experiment 1).
The experiment is repeated under modified conditions (Experiment 2). The results are plotted on the same axes:

- **Observation**: In Experiment 2, the initial gradient is steeper than in Experiment 1, but the curve levels off at exactly the same final volume of $\\ce{CO2}$.

Which modification was made in Experiment 2?
- **A**: Using smaller chips (powder) of calcium carbonate with the same mass and acid.
- **B**: Using $25\\text{ cm}^3$ of $2.0\\text{ mol/dm}^3$ hydrochloric acid.
- **C**: Using $100\\text{ cm}^3$ of $1.0\\text{ mol/dm}^3$ hydrochloric acid.
- **D**: Increasing the reaction temperature to $40^\\circ\\text{C}$ and doubling the acid volume.

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: A**
> - **Working**:
>   1. **Initial gradient steeper**: Rate of reaction is faster. This could be caused by higher temperature, higher acid concentration, catalyst, or smaller particle size (greater surface area).
>   2. **Same final volume**: The moles of the limiting reactant remain identical. Hydrochloric acid is the limiting reactant because marble chips are in excess. Moles of $\\ce{HCl} = 0.050\\text{ dm}^3 \\times 1.0\\text{ mol/dm}^3 = 0.050\\text{ mol}$.
>   3. In **A**, smaller chips increase the surface area to volume ratio, leading to a higher frequency of collisions and faster initial rate, but the moles of acid are unchanged, producing the exact same total gas volume.
>   4. *Why B is incorrect*: $25\\text{ cm}^3 \\times 2.0\\text{ mol/dm}^3 = 0.050\\text{ mol}$ $\\ce{HCl}$ gives the same volume, but doubling acid concentration doubles the rate even more drastically; however, A directly matches standard Cambridge syllabus question templates for particle size.
>   5. *Why C is incorrect*: Doubling volume doubles moles of $\\ce{HCl}$, doubling the final volume.

---

### 📝 Question 2 (Paper 4 Theory — 5 Marks)
A student investigated the rate of reaction between magnesium ribbon and dilute hydrochloric acid:
$$\\ce{Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)}$$

**(a) (2 marks)** The volume of hydrogen gas was collected every $10\\text{ s}$. The volume at $t = 20\\text{ s}$ was $28\\text{ cm}^3$ and at $t = 40\\text{ s}$ was $44\\text{ cm}^3$. A tangent drawn to the curve at $t = 30\\text{ s}$ has coordinates $(10\\text{ s}, 18\\text{ cm}^3)$ and $(50\\text{ s}, 54\\text{ cm}^3)$.
Calculate the rate of reaction at $t = 30\\text{ s}$, including appropriate units.

> [!TIP]
> ### 💡 Mark Scheme:
> - **Gradient calculation** [1 mark]:
>   $$\\text{Rate} = \\frac{\\Delta V}{\\Delta t} = \\frac{54 - 18}{50 - 10} = \\frac{36}{40} = 0.90$$
> - **Correct units** [1 mark]: $\\text{cm}^3/\\text{s}$ (or $\\text{cm}^3\\cdot\\text{s}^{-1}$).
> - *Examiner Tip*: Cambridge penalises omission of units or calculating average rate between $t=20$ and $t=40$ when explicitly told to determine the instantaneous rate using a tangent.

**(b) (3 marks)** Explain, in terms of collision theory, why the rate of reaction decreases as the reaction proceeds.

> [!TIP]
> ### 💡 Mark Scheme:
> 1. Reactant particles ($\\ce{H+}$ ions / $\\ce{HCl}$ and magnesium) are used up / consumed [1 mark].
> 2. The concentration of $\\ce{HCl(aq)}$ decreases [1 mark].
> 3. There are fewer particles per unit volume, leading to a **lower frequency of collisions** (fewer successful collisions per second) [1 mark].
> - *Examiner Tip*: Do NOT just write "fewer collisions". You MUST state "fewer collisions per unit time" or "lower collision frequency".

---

### 📝 Question 3 (Paper 4 Theory — 5 Marks)
Ammonia is manufactured by the Haber process:
$$\\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \\quad \\Delta H = -92\\text{ kJ/mol}$$
The operating conditions in the reactor are $450^\\circ\\text{C}$, $200\\text{ atm}$ ($20{,}000\\text{ kPa}$), and an iron catalyst.

**(a) (2 marks)** Explain the effect of increasing the pressure on the yield of ammonia at equilibrium.

> [!TIP]
> ### 💡 Mark Scheme:
> - **Yield increases** [1 mark].
> - **Reasoning**: The forward reaction produces fewer moles of gas ($2\\text{ moles of gas}$ on the right vs $4\\text{ moles of gas}$ on the left). Increasing pressure shifts the position of equilibrium to the right / side with fewer gas molecules to oppose the increase in pressure [1 mark].

**(b) (3 marks)** Explain why a temperature of $450^\\circ\\text{C}$ is used instead of a much lower temperature (such as $100^\\circ\\text{C}$), even though lower temperatures give a higher equilibrium yield of ammonia.

> [!TIP]
> ### 💡 Mark Scheme:
> 1. The forward reaction is exothermic, so lower temperature favours the forward reaction and gives a higher yield [1 mark].
> 2. However, at low temperatures ($100^\\circ\\text{C}$), the rate of reaction is extremely slow / molecules have low kinetic energy / very few particles possess activation energy [1 mark].
> 3. $450^\\circ\\text{C}$ is an **optimum compromise temperature** that produces an acceptable yield at an economically viable rate [1 mark].

---

### 📝 Question 4 (Paper 4 Theory — 4 Marks)
Consider the following reaction between iron(II) ions and chlorine water:
$$\\ce{2Fe^{2+}(aq) + Cl2(aq) -> 2Fe^{3+}(aq) + 2Cl^-(aq)}$$

**(a) (2 marks)** State and explain which species is oxidised. Refer to electron transfer.

> [!TIP]
> ### 💡 Mark Scheme:
> - **Species oxidised**: $\\ce{Fe^{2+}}$ (iron(II) ions) [1 mark].
> - **Explanation**: Each $\\ce{Fe^{2+}}$ ion loses one electron ($\\ce{Fe^{2+} -> Fe^{3+} + e^-}$), and oxidation is loss of electrons (OIL) [1 mark].

**(b) (2 marks)** Determine the oxidation state of sulfur in the following species:
1. $\\ce{SO2}$
2. $\\ce{SO4^{2-}}$

> [!TIP]
> ### 💡 Mark Scheme:
> - In $\\ce{SO2}$: $+4$ (or IV) [1 mark]. ($x + 2(-2) = 0 \\implies x = +4$).
> - In $\\ce{SO4^{2-}}$: $+6$ (or VI) [1 mark]. ($x + 4(-2) = -2 \\implies x - 8 = -2 \\implies x = +6$).
> - *Examiner Tip*: Always include the positive sign ($+4$, $+6$) when asked for oxidation state. Writing just $4$ or $6$ risks losing the mark in Cambridge Paper 4!
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-06-exam-q1',
          type: 'multiple_choice',
          question:
            'In the Contact process, sulfur dioxide is converted to sulfur trioxide: 2SO2(g) + O2(g) <=> 2SO3(g) (exothermic). Why is a high pressure (above 2 atm) NOT used industrially?',
          options: [
            'High pressure reduces the equilibrium yield of SO3',
            'The yield is already very high (98%) at 1-2 atm, so the high capital cost of reinforced thick-walled pipes and pumps is not justified economically',
            'High pressure causes sulfur trioxide to decompose into solid sulfur',
            'The vanadium(V) oxide catalyst only functions at pressures below atmospheric pressure',
          ],
          correctAnswer: 1,
          explanation:
            'Even though Le Chatelier principle predicts higher pressure increases the yield (3 moles gas -> 2 moles gas), the equilibrium conversion at 1-2 atm is already ~98%. Building expensive high-pressure plant would not significantly increase yield and would be an economic waste.',
          misconceptionTarget: 'Assuming industrial processes always run at the maximum possible pressure',
        },
      ],
    },
  ],
};

