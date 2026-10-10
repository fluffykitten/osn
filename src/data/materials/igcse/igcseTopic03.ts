/**
 * igcseTopic03.ts
 * Topic 3: Stoichiometry
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_3: MaterialItem = {
  id: 203,
  topic_number: 3,
  title: 'Stoichiometry',
  slug: 'stoichiometry',
  category: 'Physical Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 40,
  summary:
    'Comprehensive treatment of chemical formulae, balanced chemical and ionic equations, relative atomic and formula masses, the mole concept, reacting mass calculations, molar gas volume (24 dm3), solution concentration and titrations, empirical and molecular formulae, water of crystallisation, percentage yield, and percentage purity.',
  allTags: [
    'igcse-03-formulae-equations',
    'igcse-03-relative-masses',
    'igcse-03-mole-concept',
    'igcse-03-gas-volume',
    'igcse-03-solutions-titrations',
    'igcse-03-empirical-molecular',
    'igcse-03-yield-purity',
    'igcse-03-exam-practice',
    'stoichiometry',
    'chemical-formulae',
    'valency',
    'swap-and-drop',
    'balancing-equations',
    'state-symbols',
    'ionic-equations',
    'spectator-ions',
    'relative-atomic-mass',
    'relative-formula-mass',
    'carbon-12-standard',
    'mole-concept',
    'avogadro-constant',
    'reacting-masses',
    'limiting-reactants',
    'molar-gas-volume',
    'gas-calculations',
    'solution-concentration',
    'titration-calculations',
    'empirical-formula',
    'molecular-formula',
    'hydrated-salts',
    'water-of-crystallisation',
    'percentage-yield',
    'percentage-purity',
    'percentage-composition',
  ],
  prerequisites: [
    {
      tag: 'igcse-03-formulae-equations',
      tags: ['chemical-formulae', 'valency', 'balancing-equations', 'state-symbols', 'ionic-equations'],
      title: '1. Chemical Formulae, Valency & Balanced Equations',
      summary:
        'Deducing chemical formulae of ionic and covalent compounds using valencies, balancing chemical equations, applying state symbols, and constructing net ionic equations.',
      content: `### 🎯 Chemical Symbols and Formulae

Every chemical compound is represented by a **chemical formula** that shows the symbols of the elements present and the ratio of atoms of each element:
1. **Monoatomic elements**: Noble gases like helium ($\\ce{He}$) and neon ($\\ce{Ne}$) exist as single isolated atoms.
2. **Diatomic molecules**: Seven non-metal elements exist naturally as pairs of atoms covalently bonded: $\\ce{H2}, \\ce{N2}, \\ce{O2}, \\ce{F2}, \\ce{Cl2}, \\ce{Br2}, \\ce{I2}$.
3. **Compound formulae**: Show the exact ratio of bonded ions or atoms (e.g. $\\ce{H2O}$ contains 2 hydrogen atoms per 1 oxygen atom; $\\ce{Al2O3}$ contains 2 aluminium ions per 3 oxide ions).

---

### ⚡ Valency and The "Swap-and-Drop" Rule

**Valency** is the combining power of an atom or radical. In simple ionic compounds, the valency corresponds to the numerical value of the electrical charge on the ion:

| Group / Category | Common Ions & Valency | Examples |
| :--- | :--- | :--- |
| **Group I Metals** | Valency $= 1$ (Charge $+1$) | $\\ce{Li+}, \\ce{Na+}, \\ce{K+}$ |
| **Group II Metals** | Valency $= 2$ (Charge $+2$) | $\\ce{Mg^{2+}}, \\ce{Ca^{2+}}, \\ce{Ba^{2+}}$ |
| **Group III Metals** | Valency $= 3$ (Charge $+3$) | $\\ce{Al^{3+}}$ |
| **Transition Metals** | Variable valency (shown by Roman numerals) | Iron(II) $\\ce{Fe^{2+}}$, Iron(III) $\\ce{Fe^{3+}}$, Copper(II) $\\ce{Cu^{2+}}$, Zinc $\\ce{Zn^{2+}}$, Silver $\\ce{Ag+}$ |
| **Group VII Non-metals (Halides)** | Valency $= 1$ (Charge $-1$) | $\\ce{F-}, \\ce{Cl-}, \\ce{Br-}, \\ce{I-}$ |
| **Group VI Non-metals (Oxides/Sulfides)** | Valency $= 2$ (Charge $-2$) | $\\ce{O^{2-}}, \\ce{S^{2-}}$ |
| **Group V Non-metals (Nitrides)** | Valency $= 3$ (Charge $-3$) | $\\ce{N^{3-}}$ |
| **Compound / Polyatomic Ions** | Variable | Ammonium ($\\ce{NH4+}$, valency 1), Hydroxide ($\\ce{OH-}$, valency 1), Nitrate ($\\ce{NO3-}$, valency 1), Sulfate ($\\ce{SO4^{2-}}$, valency 2), Carbonate ($\\ce{CO3^{2-}}$, valency 2), Phosphate ($\\ce{PO4^{3-}}$, valency 3) |

#### Cross-Over (Swap-and-Drop) Method:
1. Write the symbols of the cation (metal/positive) followed by the anion (non-metal/negative).
2. Write their valencies directly above or below them.
3. Cross over the numbers (swap them) so the valency of the cation becomes the subscript of the anion, and vice-versa.
4. Simplify the ratio to the lowest whole numbers if possible (e.g. $\\ce{Mg2O2} \\to \\ce{MgO}$).
5. Use brackets around polyatomic ions when their subscript is greater than 1: e.g. $\\ce{Ca(OH)2}$, $\\ce{(NH4)2SO4}$.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-swap-drop-valency-title igcse-t03-swap-drop-valency-desc" data-diagram="igcse-t03-swap-drop-valency" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-swap-drop-valency-title">The swap and drop method for ionic formulae</title>
  <desc id="igcse-t03-swap-drop-valency-desc">Visual representation of crossing over valencies to deduce the chemical formula of aluminium oxide and magnesium chloride.</desc>

  <defs>
    <marker id="igcse-t03-swap-drop-valency-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 Z" fill="#1f2937" />
    </marker>
  </defs>

  <!-- PANEL 1: Aluminium Oxide (x=40..380) -->
  <rect x="40" y="40" width="340" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Ions at top -->
  <circle cx="130" cy="100" r="28" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="130" y="106" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">Al 3+</text>

  <circle cx="290" cy="100" r="28" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="290" y="106" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">O 2-</text>

  <!-- Cross-over swap arrows -->
  <path d="M 145 130 C 160 170, 240 170, 275 195" fill="none" stroke="#2f7fc1" stroke-width="2.5" marker-end="url(#igcse-t03-swap-drop-valency-arrow)" />
  <path d="M 275 130 C 260 170, 160 170, 145 195" fill="none" stroke="#d64545" stroke-width="2.5" marker-end="url(#igcse-t03-swap-drop-valency-arrow)" />

  <!-- Resulting Formula -->
  <rect x="110" y="200" width="200" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="210" y="233" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">Al2O3 (RATIO 2 : 3)</text>

  <!-- Callout label 1 -->
  <g data-role="text-box" data-box="40 290 340 64">
    <rect x="40" y="290" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SWAP VALENCIES TO SUBSCRIPTS</text>
    <text x="210" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2x(+3) + 3x(-2) = 0 (NET ZERO)</text>
  </g>

  <!-- PANEL 2: Magnesium Chloride (x=420..760) -->
  <rect x="420" y="40" width="340" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Ions at top -->
  <circle cx="510" cy="100" r="28" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="510" y="106" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">Mg 2+</text>

  <circle cx="670" cy="100" r="28" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="670" y="106" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">Cl 1-</text>

  <!-- Cross-over swap arrows -->
  <path d="M 525 130 C 540 170, 620 170, 655 195" fill="none" stroke="#3f8f46" stroke-width="2.5" marker-end="url(#igcse-t03-swap-drop-valency-arrow)" />
  <path d="M 655 130 C 640 170, 540 170, 525 195" fill="none" stroke="#4b5563" stroke-width="2.5" marker-end="url(#igcse-t03-swap-drop-valency-arrow)" />

  <!-- Resulting Formula -->
  <rect x="490" y="200" width="200" height="52" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <text x="590" y="233" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">MgCl2 (RATIO 1 : 2)</text>

  <!-- Callout label 2 -->
  <g data-role="text-box" data-box="420 290 340 64">
    <rect x="420" y="290" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="590" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SUBSCRIPT 1 IS NEVER WRITTEN</text>
    <text x="590" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1x(+2) + 2x(-1) = 0 (NET ZERO)</text>
  </g>
</svg>

---

### ⚖️ Balancing Chemical Equations & Conservation of Mass

The **Law of Conservation of Mass** states that matter cannot be created or destroyed in a chemical reaction. Therefore:
- The total number of atoms of each element on the **reactants** side must exactly equal the total number of atoms on the **products** side.
- Never alter chemical subscripts (e.g. changing $\\ce{CO2}$ to $\\ce{CO3}$ is prohibited); only change **stoichiometric coefficients** placed in front of chemical formulas.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-mass-conservation-atoms-title igcse-t03-mass-conservation-atoms-desc" data-diagram="igcse-t03-mass-conservation-atoms" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-mass-conservation-atoms-title">Conservation of mass and atom balancing in chemical equations</title>
  <desc id="igcse-t03-mass-conservation-atoms-desc">Visual balance scale showing that reactant atoms equal product atoms in the combustion of methane.</desc>

  <defs>
    <marker id="igcse-t03-mass-conservation-atoms-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 Z" fill="#1f2937" />
    </marker>
  </defs>

  <!-- TOP HEADER EQUATION BANNER (x=80..720) -->
  <rect x="80" y="30" width="640" height="50" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="62" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">CH4(g)  +  2 O2(g)   -->   CO2(g)  +  2 H2O(l)</text>

  <!-- BALANCE SCALE GRAPHIC -->
  <polygon points="380,260 420,260 400,200" fill="#8a939c" stroke="#1f2937" stroke-width="2" />
  <circle cx="400" cy="200" r="6" fill="#1f2937" />
  <rect x="360" y="260" width="80" height="15" rx="3" fill="#8a939c" stroke="#1f2937" stroke-width="2" />

  <!-- Horizontal Beam -->
  <line x1="120" y1="200" x2="680" y2="200" stroke="#1f2937" stroke-width="4" />

  <!-- Left Scale Pan -->
  <line x1="220" y1="200" x2="160" y2="245" stroke="#1f2937" stroke-width="1.5" />
  <line x1="220" y1="200" x2="280" y2="245" stroke="#1f2937" stroke-width="1.5" />
  <path d="M 140 245 L 300 245 C 290 270, 150 270, 140 245 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Right Scale Pan -->
  <line x1="580" y1="200" x2="520" y2="245" stroke="#1f2937" stroke-width="1.5" />
  <line x1="580" y1="200" x2="640" y2="245" stroke="#1f2937" stroke-width="1.5" />
  <path d="M 500 245 L 660 245 C 650 270, 510 270, 500 245 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Reactant Atoms on Left Pan -->
  <circle cx="220" cy="235" r="14" fill="#8a939c" stroke="#1f2937" stroke-width="1.5" />
  <text x="220" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#ffffff">C</text>

  <circle cx="170" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="190" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="250" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="270" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />

  <circle cx="180" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="206" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="234" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="260" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />

  <!-- Product Atoms on Right Pan -->
  <circle cx="580" cy="235" r="14" fill="#8a939c" stroke="#1f2937" stroke-width="1.5" />
  <text x="580" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#ffffff">C</text>

  <circle cx="530" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="550" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="610" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="630" cy="235" r="10" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />

  <circle cx="540" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="566" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="594" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="620" cy="210" r="12" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />

  <!-- Summary Callouts below -->
  <g data-role="text-box" data-box="40 295 340 64">
    <rect x="40" y="295" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTANTS (MASS = 80 g)</text>
    <text x="210" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1 C ATOM + 4 H ATOMS + 4 O ATOMS</text>
  </g>

  <g data-role="text-box" data-box="420 295 340 64">
    <rect x="420" y="295" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="590" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PRODUCTS (MASS = 80 g)</text>
    <text x="590" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1 C ATOM + 4 H ATOMS + 4 O ATOMS</text>
  </g>
</svg>

> [!TIP]
> ### 💡 Golden Systematic Rule for Balancing Equations:
> 1. Balance metals first (e.g. $\\ce{Mg}, \\ce{Fe}, \\ce{Ca}$).
> 2. Balance non-metals other than hydrogen and oxygen (e.g. $\\ce{C}, \\ce{N}, \\ce{S}, \\ce{Cl}$).
> 3. Balance hydrogen atoms next.
> 4. Balance oxygen atoms last (often balances automatically or with a simple multiplier).

#### State Symbols (Cambridge Requirement):
In Cambridge 0620, you must include state symbols when requested:
- $\\ce{(s)}$ = solid (precipitates, metals, insoluble salts)
- $\\ce{(l)}$ = pure liquid (liquid water $\\ce{H2O(l)}$, liquid bromine $\\ce{Br2(l)}$, molten salts)
- $\\ce{(g)}$ = gas ($\\ce{O2(g)}, \\ce{CO2(g)}, \\ce{H2(g)}, \\ce{NH3(g)}$)
- $\\ce{(aq)}$ = aqueous solution (substances dissolved in water)

---

### ⚡ Writing Net Ionic Equations

In aqueous reactions, soluble ionic compounds completely dissociate into mobile ions. **Spectator ions** are ions that remain in solution unchanged without participating in the reaction.

#### How to construct a net ionic equation:
1. Write the fully balanced chemical equation with state symbols.
2. Split all soluble ionic compounds marked $\\ce{(aq)}$ into individual hydrated ions. Keep solids $\\ce{(s)}$, liquids $\\ce{(l)}$, and gases $\\ce{(g)}$ intact.
3. Cross out spectator ions that appear identical on both sides of the equation.

#### Classic Cambridge Examples:
- **Neutralisation between strong acid and strong base**:
  $$\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$
  Complete ionic: $\\ce{H+(aq) + Cl-(aq) + Na+(aq) + OH-(aq) -> Na+(aq) + Cl-(aq) + H2O(l)}$
  Spectators: $\\ce{Na+}$ and $\\ce{Cl-}$
  Net ionic:
  $$\\mathbf{\\ce{H+(aq) + OH-(aq) -> H2O(l)}}$$

- **Precipitation of barium sulfate**:
  $$\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)}$$
  Net ionic:
  $$\\mathbf{\\ce{Ba^{2+}(aq) + SO4^{2-}(aq) -> BaSO4(s)}}`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-fe-q1',
          type: 'multiple_choice',
          question:
            'What is the correct chemical formula of aluminium sulfate, and what is its net ionic equation when formed by mixing aqueous solutions of aluminium nitrate and sodium sulfate?',
          options: [
            'AlSO4; Al+(aq) + SO4-(aq) -> AlSO4(s)',
            'Al2(SO4)3; 2Al3+(aq) + 3SO4 2-(aq) -> Al2(SO4)3(s)',
            'Al3(SO4)2; 3Al2+(aq) + 2SO4 3-(aq) -> Al3(SO4)2(s)',
            'Al2SO4; 2Al+(aq) + SO4 2-(aq) -> Al2SO4(s)',
          ],
          correctAnswer: 1,
          explanation:
            'Aluminium forms Al3+ and sulfate is SO4 2-. Using the swap-and-drop rule, the 3 from aluminium becomes the subscript of sulfate (requiring brackets), yielding Al2(SO4)3. The precipitation net ionic equation combines the two aqueous ions to produce the solid precipitate: 2Al3+(aq) + 3SO4 2-(aq) -> Al2(SO4)3(s).',
          misconceptionTarget: 'Omitting brackets around polyatomic sulfate ion or using incorrect ionic charges',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-03-relative-masses',
      tags: ['relative-atomic-mass', 'relative-formula-mass', 'carbon-12-standard', 'isotopes'],
      title: '2. Relative Atomic Mass (Ar) & Relative Formula Mass (Mr)',
      summary:
        'The carbon-12 standard, definitions of relative atomic mass (Ar) and relative formula mass (Mr), and isotopic abundance calculations.',
      content: `### ⚖️ The Carbon-12 Standard

Atoms are far too tiny to weigh individually on everyday balances (a single hydrogen atom weighs only $\\approx 1.67 \\times 10^{-24}\\text{ g}$). Scientists therefore express atomic masses by comparing them against an internationally accepted standard: the **carbon-12 isotope** ($^{12}\\text{C}$).

- One atom of carbon-12 is assigned a relative mass of **exactly 12 unified atomic mass units (u)**.
- **One atomic mass unit (1 u)** is defined as exactly $\\frac{1}{12}\\text{th}$ of the mass of a single $^{12}\\text{C}$ atom.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-carbon12-standard-scale-title igcse-t03-carbon12-standard-scale-desc" data-diagram="igcse-t03-carbon12-standard-scale" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-carbon12-standard-scale-title">Carbon-12 atomic mass reference standard</title>
  <desc id="igcse-t03-carbon12-standard-scale-desc">Diagram showing how relative atomic masses are defined compared to one twelfth the mass of a carbon-12 atom.</desc>

  <!-- PANEL 1: 1/12th of Carbon-12 Pie Slice (x=40..370) -->
  <rect x="40" y="40" width="330" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Carbon-12 Circle (12 segments) -->
  <circle cx="205" cy="130" r="50" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <line x1="205" y1="80" x2="205" y2="180" stroke="#1f2937" stroke-width="1.5" />
  <line x1="155" y1="130" x2="255" y2="130" stroke="#1f2937" stroke-width="1.5" />
  <line x1="170" y1="95" x2="240" y2="165" stroke="#1f2937" stroke-width="1.5" />
  <line x1="170" y1="165" x2="240" y2="95" stroke="#1f2937" stroke-width="1.5" />

  <!-- Highlighted 1/12th slice: draw with polygon / simple points -->
  <polygon points="205,130 248,105 255,130" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />

  <text x="205" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CARBON-12 ATOM (MASS = 12 u)</text>
  <text x="205" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">1 SLICE = EXACTLY 1/12th (1 u)</text>

  <!-- Tag box 1 -->
  <g data-role="text-box" data-box="40 290 330 64">
    <rect x="40" y="290" width="330" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="205" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">THE STANDARD COMPARISON</text>
    <text x="205" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1 u = 1/12th OF ONE C-12 ATOM</text>
  </g>

  <!-- PANEL 2: Balance Comparison (x=400..760) -->
  <rect x="400" y="40" width="360" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Comparison 1: Hydrogen -->
  <g data-role="text-box" data-box="415 60 330 80">
    <rect x="415" y="60" width="330" height="80" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
    <text x="580" y="85" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1 HYDROGEN ATOM EQUALS</text>
    <text x="580" y="105" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1 SLICE (1/12th) -> Ar(H) = 1</text>
    <text x="580" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">RELATIVE MASS OF H IS 1</text>
  </g>

  <!-- Comparison 2: Magnesium -->
  <g data-role="text-box" data-box="415 160 330 80">
    <rect x="415" y="160" width="330" height="80" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
    <text x="580" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1 MAGNESIUM ATOM EQUALS</text>
    <text x="580" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">24 SLICES -> Ar(Mg) = 24</text>
    <text x="580" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">RELATIVE MASS OF Mg IS 24</text>
  </g>

  <!-- Tag box 2 -->
  <g data-role="text-box" data-box="400 290 360 64">
    <rect x="400" y="290" width="360" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="580" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">RELATIVE MASSES HAVE NO UNITS</text>
    <text x="580" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">THEY ARE PURE RATIOS (NO UNITS)</text>
  </g>
</svg>

---

### 📖 Formal Cambridge Definitions

> [!NOTE]
> ### 📌 Definition: Relative Atomic Mass ($A_r$)
> **Relative atomic mass ($A_r$)** is the average mass of naturally occurring atoms of an element on a scale where the $^{12}\\text{C}$ atom has a mass of exactly 12 units.
> - Because $A_r$ is a comparison (ratio) of two masses, **it has no units**.

> [!NOTE]
> ### 📌 Definition: Relative Molecular Mass & Relative Formula Mass ($M_r$)
> **Relative molecular mass ($M_r$)** is the sum of the relative atomic masses of all atoms present in a molecule.
> For ionic compounds, which exist as giant ionic lattices rather than discrete molecules, the term **relative formula mass ($M_r$)** is used.

---

### 🔢 Calculating Relative Atomic Mass from Isotopic Abundances

Many elements exist naturally as a mixture of isotopes. The relative atomic mass shown in the Periodic Table represents the weighted average:

$$A_r = \\frac{\\sum (\\text{Isotopic Mass} \\times \\% \\text{ Abundance})}{100}$$

#### Worked Example: Chlorine
Naturally occurring chlorine consists of $75.0\\%$ chlorine-35 and $25.0\\%$ chlorine-37:
$$A_r(\\ce{Cl}) = \\frac{(35 \\times 75.0) + (37 \\times 25.0)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35.5$$

---

### 🧮 Calculating Relative Formula Mass ($M_r$)

To calculate $M_r$, sum the $A_r$ values of all constituent atoms shown in the chemical formula:

| Substance | Chemical Formula | Calculation of $M_r$ | $M_r$ Value |
| :--- | :--- | :--- | :---: |
| **Water** | $\\ce{H2O}$ | $(2 \\times 1) + (1 \\times 16)$ | **18** |
| **Carbon Dioxide** | $\\ce{CO2}$ | $(1 \\times 12) + (2 \\times 16)$ | **44** |
| **Calcium Hydroxide** | $\\ce{Ca(OH)2}$ | $40 + 2 \\times (16 + 1) = 40 + 34$ | **74** |
| **Aluminium Sulfate** | $\\ce{Al2(SO4)3}$ | $(2 \\times 27) + 3 \\times [32 + (4 \\times 16)] = 54 + 3 \\times 96$ | **342** |
| **Hydrated Copper(II) Sulfate** | $\\ce{CuSO4 . 5H2O}$ | $63.5 + 32 + (4 \\times 16) + 5 \\times 18 = 159.5 + 90$ | **249.5** |

> [!WARNING]
> ### ⚠️ Common Examiner Pitfall: Hydrated Salts
> The dot in $\\ce{CuSO4 . 5H2O}$ means **addition**, not multiplication! You must calculate the $M_r$ of the anhydrous salt ($\\ce{CuSO4} = 159.5$) and **add** the mass of 5 water molecules ($5 \\times 18 = 90$), giving $249.5$.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-rm-q1',
          type: 'multiple_choice',
          question:
            'What is the relative formula mass (Mr) of hydrated magnesium sulfate, MgSO4 . 7H2O? (Ar: Mg = 24, S = 32, O = 16, H = 1)',
          options: ['120', '246', '138', '210'],
          correctAnswer: 1,
          explanation:
            'Mr of MgSO4 = 24 + 32 + (4 x 16) = 120. Mr of 7H2O = 7 x [ (2 x 1) + 16 ] = 7 x 18 = 126. Total Mr = 120 + 126 = 246.',
          misconceptionTarget: 'Multiplying the two masses instead of adding, or miscounting hydrogen atoms',
        },
      ],
    },
    {
      tag: 'igcse-03-mole-concept',
      tags: ['mole-concept', 'avogadro-constant', 'reacting-masses', 'limiting-reactants'],
      title: '3. The Mole Concept & Reacting Mass Calculations',
      summary:
        'The definition of the mole, Avogadro constant, mole-mass conversions, reacting mass stoichiometry, and identifying limiting reactants.',
      content: `### 🔬 The Mole and The Avogadro Constant

In chemistry, counting atoms individually is impossible. Chemists use a counting unit called **the mole** (symbol: **mol**), which functions just like "a dozen" ($12$), but for microscopic particles:

> [!NOTE]
> ### 📌 Cambridge Definition: The Mole
> A **mole** is the amount of substance that contains the same number of specified elementary particles as there are atoms in exactly $12\\text{ g}$ of carbon-12 ($^{12}\\text{C}$).
> - This number is called the **Avogadro constant** ($N_A$ or $L$):
>   $$\\mathbf{L = 6.02 \\times 10^{23}\\text{ particles per mole}}$$
> - $1\\text{ mol of He atoms} = 6.02 \\times 10^{23}\\text{ He atoms}$
> - $1\\text{ mol of } \\ce{H2O} \\text{ molecules} = 6.02 \\times 10^{23} \\ce{H2O} \\text{ molecules}$
> - $1\\text{ mol of } \\ce{NaCl} \\text{ formula units} = 6.02 \\times 10^{23} \\ce{Na+} \\text{ ions and } 6.02 \\times 10^{23} \\ce{Cl-} \\text{ ions}$

---

### 📐 The Mole-Mass Formula Triangle

The mass of 1 mole of any substance in grams is called its **molar mass ($M$)**, and it is numerically identical to the substance's $A_r$ or $M_r$:
- $1\\text{ mol of Carbon-12} = 12.00\\text{ g}$
- $1\\text{ mol of } \\ce{H2O} = 18.00\\text{ g}$
- $1\\text{ mol of } \\ce{CaCO3} = 100.0\\text{ g}$

$$\\text{Moles } (n) = \\frac{\\text{Mass in grams } (m)}{\\text{Molar mass in g/mol } (M_r)}$$

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-mole-mass-triangle-title igcse-t03-mole-mass-triangle-desc" data-diagram="igcse-t03-mole-mass-triangle" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-mole-mass-triangle-title">The mole and mass formula triangle</title>
  <desc id="igcse-t03-mole-mass-triangle-desc">Formula triangle showing relationship between mass in grams, moles, and molar mass in grams per mole.</desc>

  <!-- LEFT: FORMULA TRIANGLE (x=50..370) -->
  <polygon points="210,50 60,260 360,260" fill="#ffffff" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
  <line x1="110" y1="170" x2="310" y2="170" stroke="#1f2937" stroke-width="2.5" />
  <line x1="210" y1="170" x2="210" y2="260" stroke="#1f2937" stroke-width="2.5" />

  <!-- Top Sector: MASS (m) -->
  <path d="M 210 54 L 115 168 L 305 168 Z" fill="#fde58a" />
  <text x="210" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">MASS (m)</text>
  <text x="210" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">IN GRAMS (g)</text>

  <!-- Bottom Left Sector: MOLES (n) -->
  <path d="M 64 258 L 112 172 L 208 172 L 208 258 Z" fill="#8fd3ef" />
  <text x="135" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MOLES (n)</text>
  <text x="135" y="234" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">IN MOL</text>

  <!-- Bottom Right Sector: MOLAR MASS (Mr) -->
  <path d="M 212 172 L 308 172 L 356 258 L 212 258 Z" fill="#b5efb0" />
  <text x="285" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MOLAR MASS (Mr)</text>
  <text x="285" y="234" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">IN g/mol</text>

  <!-- Callout label 1 -->
  <g data-role="text-box" data-box="50 290 320 64">
    <rect x="50" y="290" width="320" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">COVER THE UNKNOWN QUANTITY</text>
    <text x="210" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">MOLES = MASS / MOLAR MASS</text>
  </g>

  <!-- RIGHT: 3 REARRANGEMENT CARDS (x=410..750) -->
  <rect x="410" y="45" width="340" height="60" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="580" y="70" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TO FIND MASS (g):</text>
  <text x="580" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MASS = MOLES x MOLAR MASS</text>

  <rect x="410" y="125" width="340" height="60" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="580" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TO FIND MOLES (mol):</text>
  <text x="580" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MOLES = MASS / MOLAR MASS</text>

  <rect x="410" y="205" width="340" height="60" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="580" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">AVOGADRO CONSTANT (L):</text>
  <text x="580" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">1 MOL = 6.02 x 10^23 PARTICLES</text>

  <!-- Tag box 2 -->
  <g data-role="text-box" data-box="410 290 340 64">
    <rect x="410" y="290" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="580" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MOLAR MASS (g/mol) = Mr</text>
    <text x="580" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1 MOL OF C-12 WEIGHS 12.00 g</text>
  </g>
</svg>

---

### 📊 Reacting Mass Calculations (Mass-to-Mass Stoichiometry)

Chemical equations express the ratio of moles reacting and being produced. The coefficients in front of formulas represent the **mole ratio**.

#### The 3-Step Stoichiometric Calculation Method:
1. **Step 1: Calculate moles of the known substance**:
   $$n_{\\text{known}} = \\frac{\\text{mass}}{\\text{Molar mass}}$$
2. **Step 2: Use the balanced equation mole ratio** to find the moles of the target substance:
   $$n_{\\text{unknown}} = n_{\\text{known}} \\times \\left(\\frac{\\text{coefficient of unknown}}{\\text{coefficient of known}}\\right)$$
3. **Step 3: Convert moles of target substance into required mass**:
   $$\\text{mass} = n_{\\text{unknown}} \\times M_r$$

#### 📝 Worked Example:
Calculate the mass of iron produced when $320\\text{ g}$ of iron(III) oxide is reduced completely by carbon monoxide:
$$\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(s) + 3CO2(g)}$$
*(Given $A_r$: $\\ce{Fe} = 56$, $\\ce{O} = 16$, $\\ce{C} = 12$)*

1. **Step 1**: $M_r(\\ce{Fe2O3}) = (2 \\times 56) + (3 \\times 16) = 112 + 48 = 160\\text{ g/mol}$.
   $$n(\\ce{Fe2O3}) = \\frac{320\\text{ g}}{160\\text{ g/mol}} = 2.00\\text{ mol}$$
2. **Step 2**: From the balanced equation:
   $$\\frac{n(\\ce{Fe})}{n(\\ce{Fe2O3})} = \\frac{2}{1} \\implies n(\\ce{Fe}) = 2.00 \\times 2 = 4.00\\text{ mol}$$
3. **Step 3**: Mass of $\\ce{Fe} = \\text{moles} \\times A_r = 4.00\\text{ mol} \\times 56\\text{ g/mol} = \\mathbf{224\\text{ g}}$.

---

### 🛑 Limiting Reactants & Reactants in Excess

In real laboratory reactions, reactants are rarely mixed in exact stoichiometric ratios:
- **Limiting Reactant**: The reactant that is **completely consumed first**. It limits and determines the maximum amount of product that can be formed.
- **Excess Reactant**: The reactant that is left over when the reaction stops.

#### How to find the limiting reactant:
1. Calculate the moles of each reactant present initially.
2. Divide each reactant's moles by its stoichiometric coefficient in the balanced equation.
3. The reactant with the **smallest resulting number** is the limiting reactant. Use its moles for all subsequent product calculations!`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-mc-q1',
          type: 'multiple_choice',
          question:
            'A mixture of 12.0 g of magnesium (Ar = 24) and 16.0 g of oxygen gas (Mr = 32) is ignited: 2Mg + O2 -> 2MgO. Which statement is correct?',
          options: [
            'Oxygen is the limiting reactant and 20.0 g of MgO is formed.',
            'Magnesium is the limiting reactant and 20.0 g of MgO is formed.',
            'Both reactants are in exact stoichiometric proportions.',
            'Magnesium is the limiting reactant and 40.0 g of MgO is formed.',
          ],
          correctAnswer: 1,
          explanation:
            'Moles of Mg = 12.0 / 24 = 0.50 mol. Moles of O2 = 16.0 / 32 = 0.50 mol. The equation requires 2 mol Mg per 1 mol O2. To react 0.50 mol Mg requires only 0.25 mol O2. Since we have 0.50 mol O2, O2 is in excess and Mg is limiting. Moles of MgO formed = moles of Mg = 0.50 mol. Mr(MgO) = 24 + 16 = 40 g/mol. Mass of MgO = 0.50 x 40 = 20.0 g.',
          misconceptionTarget: 'Thinking equal masses react equally, neglecting molar mass and stoichiometric coefficients',
        },
      ],
    },
    {
      tag: 'igcse-03-gas-volume',
      tags: ['molar-gas-volume', 'gas-calculations', 'avogadros-law', 'rtp'],
      title: '4. Molar Gas Volume & Gas Stoichiometry',
      summary:
        'Avogadro law for gases, the 24 dm3 molar gas volume at room temperature and pressure (r.t.p.), and volume calculations.',
      content: `### 🎈 Avogadro's Law for Gases

In 1811, Amedeo Avogadro formulated a fundamental gas principle:

> [!NOTE]
> ### 📌 Avogadro's Hypothesis
> **Equal volumes of all gases**, measured under the **same conditions of temperature and pressure**, contain **equal numbers of molecules (and moles)**.

Regardless of whether a gas is light (like helium or hydrogen) or heavy (like chlorine or sulfur dioxide), the actual volume occupied by the gas molecules themselves is negligible compared to the vast empty space between them.

---

### 📦 Molar Gas Volume at r.t.p.

Under standard room conditions:
- **r.t.p.** = Room Temperature and Pressure ($20^\\circ\\text{C}$ or $293\\text{ K}$ and $1\\text{ atmosphere}$ / $101.3\\text{ kPa}$).
- At r.t.p., **1 mole of any gas occupies a volume of $24\\text{ dm}^3$** (which equals $24\\text{ litres}$ or $24\,000\\text{ cm}^3$).

$$\\mathbf{\\text{Gas Volume in dm}^3 = \\text{Moles } (n) \\times 24}$$
$$\\mathbf{\\text{Gas Volume in cm}^3 = \\text{Moles } (n) \\times 24\,000}$$

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-molar-gas-volume-title igcse-t03-molar-gas-volume-desc" data-diagram="igcse-t03-molar-gas-volume" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-molar-gas-volume-title">Molar gas volume of 24 dm3 at r.t.p.</title>
  <desc id="igcse-t03-molar-gas-volume-desc">Comparison showing one mole of hydrogen, oxygen, and carbon dioxide all occupy 24 dm3 at room temperature and pressure.</desc>

  <!-- PANEL 1: Hydrogen Gas (x=40..260) -->
  <rect x="40" y="40" width="220" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="65" y="70" width="170" height="110" rx="4" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
  <text x="150" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">24 dm3 (24 L)</text>
  <text x="150" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">1 MOL OF H2 GAS</text>

  <rect x="60" y="195" width="180" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
  <text x="150" y="218" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MASS = 2.0 g</text>
  <text x="150" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Mr = 2 (VERY LIGHT)</text>

  <!-- PANEL 2: Oxygen Gas (x=290..510) -->
  <rect x="290" y="40" width="220" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="315" y="70" width="170" height="110" rx="4" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">24 dm3 (24 L)</text>
  <text x="400" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">1 MOL OF O2 GAS</text>

  <rect x="310" y="195" width="180" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
  <text x="400" y="218" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MASS = 32.0 g</text>
  <text x="400" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Mr = 32 (MEDIUM)</text>

  <!-- PANEL 3: Carbon Dioxide Gas (x=540..760) -->
  <rect x="540" y="40" width="220" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="565" y="70" width="170" height="110" rx="4" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
  <text x="650" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">24 dm3 (24 L)</text>
  <text x="650" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">1 MOL OF CO2 GAS</text>

  <rect x="560" y="195" width="180" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
  <text x="650" y="218" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MASS = 44.0 g</text>
  <text x="650" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Mr = 44 (HEAVY)</text>

  <!-- Large Bottom Callout (x=40..760) -->
  <g data-role="text-box" data-box="40 290 720 64">
    <rect x="40" y="290" width="720" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">EQUAL VOLUMES OF ALL GASES AT r.t.p. CONTAIN EQUAL MOLES</text>
    <text x="400" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">GAS VOLUME (dm3) = MOLES x 24 dm3 (WHERE 1 dm3 = 1000 cm3)</text>
  </g>
</svg>

---

### 📐 Step-by-Step Gas Calculations

#### Type A: Solid reactant generating a gas
*What volume of carbon dioxide gas at r.t.p. is released when $5.0\\text{ g}$ of calcium carbonate reacts completely with excess hydrochloric acid?*
$$\\ce{CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}$$
*(Given $A_r$: $\\ce{Ca} = 40, \\ce{C} = 12, \\ce{O} = 16$)*

1. Calculate moles of $\\ce{CaCO3}$:
   $$M_r(\\ce{CaCO3}) = 40 + 12 + (3 \\times 16) = 100\\text{ g/mol}$$
   $$n(\\ce{CaCO3}) = \\frac{5.0\\text{ g}}{100\\text{ g/mol}} = 0.050\\text{ mol}$$
2. Find moles of $\\ce{CO2}$ produced from mole ratio ($1 : 1$):
   $$n(\\ce{CO2}) = 0.050\\text{ mol}$$
3. Convert moles of gas to volume at r.t.p.:
   $$V(\\ce{CO2}) = 0.050\\text{ mol} \\times 24\\text{ dm}^3 = \\mathbf{1.2\\text{ dm}^3} \\quad (\\text{or } 1200\\text{ cm}^3)$$

---

### 💨 Gas Volume-Volume Stoichiometric Shortcut

When **all reactants and products involved are gases** at the same temperature and pressure, the mole ratio from the balanced equation equals the **direct volume ratio**:

$$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$$

- $1\\text{ volume of } \\ce{CH4}$ reacts with $2\\text{ volumes of } \\ce{O2}$ to yield $1\\text{ volume of } \\ce{CO2}$ (water is liquid at r.t.p., so its volume is negligible).
- Example: $50\\text{ cm}^3$ of methane requires $50 \\times 2 = \\mathbf{100\\text{ cm}^3}$ of oxygen, producing $50 \\times 1 = \\mathbf{50\\text{ cm}^3}$ of carbon dioxide.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-gv-q1',
          type: 'multiple_choice',
          question:
            'A sample of 40 cm3 of carbon monoxide is sparked with 30 cm3 of oxygen: 2CO(g) + O2(g) -> 2CO2(g). All volumes are measured at r.t.p. What is the total volume of gas remaining after reaction?',
          options: ['40 cm3', '50 cm3', '60 cm3', '70 cm3'],
          correctAnswer: 1,
          explanation:
            'Mole ratio 2 CO : 1 O2 -> 2 CO2. 40 cm3 CO reacts with 20 cm3 O2 to produce 40 cm3 CO2. Oxygen is in excess: unreacted O2 = 30 - 20 = 10 cm3. Total gas remaining = 40 cm3 CO2 produced + 10 cm3 unreacted O2 = 50 cm3.',
          misconceptionTarget: 'Forgetting to include the unreacted excess oxygen in the total gas volume',
        },
      ],
    },
    {
      tag: 'igcse-03-solutions-titrations',
      tags: ['solution-concentration', 'titration-calculations', 'volumetric-analysis', 'molarity'],
      title: '5. Solution Concentration & Titration Stoichiometry',
      summary:
        'Defining concentration in mol/dm3 and g/dm3, unit conversions (cm3 to dm3), and volumetric analysis calculations for acid-base titrations.',
      content: `### 🧪 Solution Concentration Definitions

A **solution** consists of a solute dissolved in a solvent (usually water). The **concentration** of a solution is a measure of how much solute is dissolved in a unit volume of solution:

1. **Concentration in $\\text{mol/dm}^3$ (Molarity, $c$)**:
   $$c = \\frac{\\text{Moles of solute } (n)}{\\text{Volume in dm}^3 (V)}$$
2. **Concentration in $\\text{g/dm}^3$ ($\\rho$)**:
   $$\\rho = \\frac{\\text{Mass of solute in g } (m)}{\\text{Volume in dm}^3 (V)}$$
3. **Interconverting the two units**:
   $$\\mathbf{\\text{Concentration in g/dm}^3 = \\text{Concentration in mol/dm}^3 \\times M_r}$$

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-concentration-triangle-title igcse-t03-concentration-triangle-desc" data-diagram="igcse-t03-concentration-triangle" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-concentration-triangle-title">Solution concentration formula triangle and unit conversions</title>
  <desc id="igcse-t03-concentration-triangle-desc">Formula triangle for moles, concentration, and volume in dm3 with unit conversions from cm3 and between g/dm3 and mol/dm3.</desc>

  <defs>
    <marker id="igcse-t03-concentration-triangle-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 Z" fill="#1f2937" />
    </marker>
  </defs>

  <!-- LEFT: FORMULA TRIANGLE (x=50..370) -->
  <polygon points="210,50 60,260 360,260" fill="#ffffff" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
  <line x1="110" y1="170" x2="310" y2="170" stroke="#1f2937" stroke-width="2.5" />
  <line x1="210" y1="170" x2="210" y2="260" stroke="#1f2937" stroke-width="2.5" />

  <!-- Top Sector: MOLES (n) -->
  <path d="M 210 54 L 115 168 L 305 168 Z" fill="#8fd3ef" />
  <text x="210" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">MOLES (n)</text>
  <text x="210" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">IN MOL</text>

  <!-- Bottom Left Sector: CONCENTRATION (c) -->
  <path d="M 64 258 L 112 172 L 208 172 L 208 258 Z" fill="#fde58a" />
  <text x="135" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CONCENTRATION</text>
  <text x="135" y="234" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">mol/dm3</text>

  <!-- Bottom Right Sector: VOLUME (V) -->
  <path d="M 212 172 L 308 172 L 356 258 L 212 258 Z" fill="#b5efb0" />
  <text x="285" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">VOLUME (V)</text>
  <text x="285" y="234" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">dm3 (LITRES)</text>

  <!-- Callout label 1 -->
  <g data-role="text-box" data-box="50 290 320 64">
    <rect x="50" y="290" width="320" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">FORMULA: n = c x V</text>
    <text x="210" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">VOLUME MUST ALWAYS BE IN dm3</text>
  </g>

  <!-- RIGHT: UNIT CONVERSION CARDS (x=410..750) -->
  <rect x="410" y="50" width="340" height="95" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="580" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">VOLUME UNIT CONVERSION</text>
  <line x1="470" y1="105" x2="670" y2="105" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t03-concentration-triangle-arrow)" />
  <text x="450" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">cm3</text>
  <text x="570" y="98" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">DIVIDE BY 1000</text>
  <text x="690" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#3f8f46">dm3</text>
  <text x="580" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Example: 25.0 cm3 / 1000 = 0.025 dm3</text>

  <rect x="410" y="165" width="340" height="95" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="580" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CONCENTRATION CONVERSION</text>
  <line x1="470" y1="220" x2="670" y2="220" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t03-concentration-triangle-arrow)" />
  <text x="445" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">mol/dm3</text>
  <text x="570" y="213" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">MULTIPLY BY Mr</text>
  <text x="695" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#3f8f46">g/dm3</text>
  <text x="580" y="247" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">concentration (g/dm3) = mol/dm3 x Mr</text>

  <!-- Tag box 2 -->
  <g data-role="text-box" data-box="410 290 340 64">
    <rect x="410" y="290" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="580" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TITRATION STOICHIOMETRY</text>
    <text x="580" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">MOLES KNOWN -> RATIO -> CONC</text>
  </g>
</svg>

> [!IMPORTANT]
> ### 🚨 The Most Common Mistake in Solution Calculations: Units of Volume!
> Laboratory glassware (burettes, pipettes, measuring cylinders) measures volume in **$\\text{cm}^3$**.
> Formulae require volume in **$\\text{dm}^3$**!
> Always convert:
> $$\\mathbf{\\text{Volume in dm}^3 = \\frac{\\text{Volume in cm}^3}{1000}}$$
> *e.g. $25.0\\text{ cm}^3 = \\frac{25.0}{1000} = 0.025\\text{ dm}^3$*

---

### 🔬 Volumetric Analysis: Acid-Base Titrations

A **titration** is an experimental method used to determine the exact concentration of an unknown solution by reacting it with a standard solution of known concentration:
- **Volumetric Pipette**: Measures an exact, fixed volume of one solution (e.g. $25.0\\text{ cm}^3$) into a conical flask.
- **Burette**: Delivers a variable volume (the **titre**) drop by drop until an **indicator** (e.g. methyl orange or phenolphthalein) changes colour permanently at the **endpoint**.
- **Concordant Titres**: Titre values within $0.10\\text{ cm}^3$ (or $0.20\\text{ cm}^3$) of each other. Only concordant titres are averaged!

---

### 🧮 Systematic 3-Step Titration Calculation Method

1. **Step 1: Calculate moles of the solution whose concentration AND volume are known**:
   $$n_1 = c_1 \\times V_1 \\quad (\\text{with } V_1 \\text{ in dm}^3)$$
2. **Step 2: Use the balanced stoichiometric equation** to find moles of the unknown solution:
   $$n_2 = n_1 \\times \\left(\\frac{\\text{coefficient of unknown}}{\\text{coefficient of known}}\\right)$$
3. **Step 3: Calculate the concentration of the unknown solution**:
   $$c_2 = \\frac{n_2}{V_2 \\text{ (in dm}^3\\text{)}}$$

#### 📝 Worked Example:
In a titration, $25.0\\text{ cm}^3$ of sodium hydroxide solution (\\ce{NaOH}) of unknown concentration requires $20.0\\text{ cm}^3$ of $0.050\\text{ mol/dm}^3$ sulfuric acid (\\ce{H2SO4}) for complete neutralisation:
$$\\ce{2NaOH(aq) + H2SO4(aq) -> Na2SO4(aq) + 2H2O(l)}$$

1. **Step 1**: Moles of $\\ce{H2SO4}$:
   $$V(\\ce{H2SO4}) = \\frac{20.0}{1000} = 0.0200\\text{ dm}^3$$
   $$n(\\ce{H2SO4}) = 0.050\\text{ mol/dm}^3 \\times 0.0200\\text{ dm}^3 = 1.00 \\times 10^{-3}\\text{ mol}$$
2. **Step 2**: Mole ratio $\\frac{\\ce{NaOH}}{\\ce{H2SO4}} = \\frac{2}{1}$:
   $$n(\\ce{NaOH}) = 2 \\times (1.00 \\times 10^{-3}\\text{ mol}) = 2.00 \\times 10^{-3}\\text{ mol}$$
3. **Step 3**: Concentration of $\\ce{NaOH}$:
   $$V(\\ce{NaOH}) = \\frac{25.0}{1000} = 0.0250\\text{ dm}^3$$
   $$c(\\ce{NaOH}) = \\frac{2.00 \\times 10^{-3}\\text{ mol}}{0.0250\\text{ dm}^3} = \\mathbf{0.080\\text{ mol/dm}^3}$$
4. **Extension**: In $\\text{g/dm}^3$:
   $$\\rho(\\ce{NaOH}) = 0.080\\text{ mol/dm}^3 \\times 40\\text{ g/mol} = \\mathbf{3.2\\text{ g/dm}^3}`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-conc-q1',
          type: 'multiple_choice',
          question:
            'A student dissolves 10.6 g of sodium carbonate (Na2CO3, Mr = 106) in distilled water to make exactly 500 cm3 of solution. What is the concentration in mol/dm3?',
          options: ['0.050 mol/dm3', '0.100 mol/dm3', '0.200 mol/dm3', '0.500 mol/dm3'],
          correctAnswer: 2,
          explanation:
            'Moles of Na2CO3 = 10.6 g / 106 g/mol = 0.100 mol. Volume in dm3 = 500 cm3 / 1000 = 0.500 dm3. Concentration = moles / volume = 0.100 mol / 0.500 dm3 = 0.200 mol/dm3.',
          misconceptionTarget: 'Failing to convert 500 cm3 to 0.500 dm3',
        },
      ],
    },
    {
      tag: 'igcse-03-empirical-molecular',
      tags: ['empirical-formula', 'molecular-formula', 'hydrated-salts', 'water-of-crystallisation'],
      title: '6. Empirical & Molecular Formulae, Hydrated Salts',
      summary:
        'Deducing empirical and molecular formulae from percentage composition, and determining water of crystallisation (xH2O) in hydrated salts.',
      content: `### 🧬 Empirical Formula vs Molecular Formula

Chemists distinguish two types of chemical formulae:
1. **Empirical Formula**: The **simplest whole number ratio** of the atoms of each element present in a compound (e.g. $\\ce{CH2}$).
2. **Molecular Formula**: The **actual number of atoms** of each element in one molecule of the compound (e.g. $\\ce{C3H6}$).

$$\\mathbf{\\text{Molecular Formula} = (\\text{Empirical Formula})_k}$$
$$\\mathbf{k = \\frac{\\text{Relative Molecular Mass } (M_r)}{\\text{Empirical Formula Mass}}}$$

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-empirical-molecular-flow-title igcse-t03-empirical-molecular-flow-desc" data-diagram="igcse-t03-empirical-molecular-flow" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-empirical-molecular-flow-title">Workflow for calculating empirical and molecular formulae</title>
  <desc id="igcse-t03-empirical-molecular-flow-desc">Four-step calculation procedure connecting experimental percentages to the simplest empirical ratio and molecular formula.</desc>

  <defs>
    <marker id="igcse-t03-empirical-molecular-flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 Z" fill="#1f2937" />
    </marker>
  </defs>

  <!-- STEP 1: Mass or Percentage -->
  <rect x="40" y="50" width="150" height="180" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="50" y="60" width="130" height="36" rx="4" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="115" y="83" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 1: MASS</text>
  <text x="115" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">RECORD G OR %</text>
  <text x="115" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">C: 85.7 g</text>
  <text x="115" y="175" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">H: 14.3 g</text>

  <!-- Flow Arrow 1 -->
  <line x1="190" y1="140" x2="225" y2="140" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t03-empirical-molecular-flow-arrow)" />

  <!-- STEP 2: Divide by Ar (Moles) -->
  <rect x="230" y="50" width="150" height="180" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="240" y="60" width="130" height="36" rx="4" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="305" y="83" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 2: MOLES</text>
  <text x="305" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DIVIDE BY Ar</text>
  <text x="305" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">85.7 / 12 = 7.14</text>
  <text x="305" y="175" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">14.3 / 1 = 14.3</text>

  <!-- Flow Arrow 2 -->
  <line x1="380" y1="140" x2="415" y2="140" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t03-empirical-molecular-flow-arrow)" />

  <!-- STEP 3: Simplest Ratio (Empirical) -->
  <rect x="420" y="50" width="160" height="180" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="430" y="60" width="140" height="36" rx="4" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="500" y="83" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 3: RATIO</text>
  <text x="500" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DIVIDE SMALLEST</text>
  <text x="500" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">7.14 / 7.14 = 1</text>
  <text x="500" y="175" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">14.3 / 7.14 = 2</text>
  <text x="500" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#3f8f46">EMPIRICAL: CH2</text>

  <!-- Flow Arrow 3 -->
  <line x1="580" y1="140" x2="615" y2="140" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t03-empirical-molecular-flow-arrow)" />

  <!-- STEP 4: Molecular Formula Multiplier -->
  <rect x="620" y="50" width="140" height="180" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="630" y="60" width="120" height="36" rx="4" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="690" y="83" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STEP 4: Mr</text>
  <text x="690" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Mr / EMPIRICAL Mr</text>
  <text x="690" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">42 / 14 = 3</text>
  <text x="690" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">(CH2) x 3</text>
  <text x="690" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">MOLECULAR: C3H6</text>

  <!-- Summary Callout (x=40..760) -->
  <g data-role="text-box" data-box="40 290 720 64">
    <rect x="40" y="290" width="720" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">IF RATIO ENDS IN 0.5 MULTIPLY ALL BY 2 (e.g. 1 : 1.5 BECOMES 2 : 3)</text>
    <text x="400" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">HYDRATED SALTS: ANHYDROUS MOLES TO WATER MOLES (CuSO4 . xH2O)</text>
  </g>
</svg>

---

### 📋 The 4-Step Empirical Formula Table

Whenever given experimental percentages or masses, use this foolproof table format:

| Step | Element Carbon ($\\ce{C}$) | Element Hydrogen ($\\ce{H}$) |
| :--- | :--- | :--- |
| **1. Mass or %** | $85.7\\text{ g}$ | $14.3\\text{ g}$ |
| **2. Divide by $A_r$ (Moles)** | $\\frac{85.7}{12} = 7.14\\text{ mol}$ | $\\frac{14.3}{1} = 14.3\\text{ mol}$ |
| **3. Divide by smallest** | $\\frac{7.14}{7.14} = \\mathbf{1.0}$ | $\\frac{14.3}{7.14} = \\mathbf{2.0}$ |
| **4. Simplest integer ratio** | **1** | **2** |

- **Empirical Formula** $= \\mathbf{\\ce{CH2}}$.
- If given that the molecular mass $M_r = 42$:
  - Empirical mass of $\\ce{CH2} = 12 + (2 \\times 1) = 14$.
  - Multiplier $k = \\frac{42}{14} = 3$.
  - **Molecular Formula** $= (\\ce{CH2})_3 = \\mathbf{\\ce{C3H6}}$ (propene or cyclopropane).

> [!TIP]
> ### 💡 Decimal Handling Rule:
> If dividing by the smallest mole value yields a decimal:
> - $.50 \\implies$ multiply all numbers by $2$ (e.g. $1 : 1.5 \\to 2 : 3$, such as $\\ce{Fe2O3}$).
> - $.33$ or $.67 \\implies$ multiply all numbers by $3$ (e.g. $1 : 1.33 \\to 3 : 4$).

---

### 💧 Water of Crystallisation & Hydrated Salts

Many ionic salts trap a fixed number of water molecules inside their crystalline lattice when crystallising from aqueous solution:
- **Hydrated Salt**: A salt containing water of crystallisation trapped in its crystal lattice (e.g. blue hydrated copper(II) sulfate crystals, $\\ce{CuSO4 . 5H2O}$).
- **Anhydrous Salt**: A salt that has lost all its water of crystallisation (e.g. white anhydrous copper(II) sulfate powder, $\\ce{CuSO4}$).

#### Determining $x$ in a Hydrated Salt ($\\ce{Salt . xH2O}$):
1. Heat a known mass of hydrated salt in a crucible until water is driven off.
2. Cool and reweigh. **Repeat heating until mass is constant** (ensuring all water has evaporated).
3. Mass of water lost $= \\text{Hydrated mass} - \\text{Constant anhydrous mass}$.
4. Calculate:
   $$x = \\frac{\\text{moles of } \\ce{H2O}}{\\text{moles of anhydrous salt}}`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-ef-q1',
          type: 'multiple_choice',
          question:
            'A 4.99 g sample of hydrated copper(II) sulfate, CuSO4 . xH2O, is heated to constant mass. The white anhydrous solid remaining weighs 3.19 g. What is the value of x? (Mr: CuSO4 = 159.5, H2O = 18.0)',
          options: ['2', '4', '5', '7'],
          correctAnswer: 2,
          explanation:
            'Mass of anhydrous CuSO4 = 3.19 g. Moles of CuSO4 = 3.19 / 159.5 = 0.0200 mol. Mass of water lost = 4.99 g - 3.19 g = 1.80 g. Moles of H2O = 1.80 / 18.0 = 0.100 mol. Ratio x = moles H2O / moles CuSO4 = 0.100 / 0.0200 = 5. Therefore the formula is CuSO4 . 5H2O.',
          misconceptionTarget: 'Calculating water percentage instead of mole ratio, or using total hydrated mass as denominator',
        },
      ],
    },
    {
      tag: 'igcse-03-yield-purity',
      tags: ['percentage-yield', 'percentage-purity', 'percentage-composition', 'experimental-errors'],
      title: '7. Percentage Yield, Percentage Purity & Composition by Mass',
      summary:
        'Definitions and formulas for percentage yield, reasons why yield is less than 100%, percentage purity of materials, and percentage composition by mass.',
      content: `### 🎯 Percentage Composition by Mass

The percentage by mass of an element within a compound is:

$$\\mathbf{\\% \\text{ by mass} = \\frac{\\text{Number of atoms of element} \\times A_r}{M_r \\text{ of compound}} \\times 100\\%}$$

#### Worked Example:
Calculate the percentage by mass of nitrogen in ammonium nitrate, $\\ce{NH4NO3}$:
- Formula contains $2$ nitrogen atoms.
- $M_r(\\ce{NH4NO3}) = (2 \\times 14) + (4 \\times 1) + (3 \\times 16) = 28 + 4 + 48 = 80$.
$$\\% \\text{ Nitrogen} = \\frac{2 \\times 14}{80} \\times 100\\% = \\frac{28}{80} \\times 100\\% = \\mathbf{35.0\\%}$$

---

### ⚖️ Percentage Yield

In chemical synthesis, the quantity of product calculated from stoichiometry is rarely achieved in the laboratory:
- **Theoretical Yield**: The maximum mass of product predicted from the balanced equation assuming $100\\%$ of the limiting reactant reacts.
- **Actual Yield**: The mass of pure product actually isolated and weighed at the end of the experiment.

$$\\mathbf{\\text{Percentage Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Maximum Yield}} \\times 100\\%}$$

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t03-yield-purity-visual-title igcse-t03-yield-purity-visual-desc" data-diagram="igcse-t03-yield-purity-visual" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t03-yield-purity-visual-title">Percentage yield and percentage purity visual comparison</title>
  <desc id="igcse-t03-yield-purity-visual-desc">Comparison of theoretical yield versus actual yield in chemical reactions, and pure substance content in impure samples.</desc>

  <!-- PANEL 1: Percentage Yield (x=40..380) -->
  <rect x="40" y="40" width="340" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="210" y="70" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">PERCENTAGE YIELD</text>

  <!-- Theoretical Yield Bar (Max 100%) -->
  <rect x="70" y="100" width="280" height="35" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <rect x="70" y="100" width="280" height="35" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="210" y="123" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">THEORETICAL MAXIMUM = 50.0 g (100%)</text>

  <!-- Actual Yield Bar (Collected e.g. 80%) -->
  <rect x="70" y="150" width="280" height="35" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="1.5" />
  <rect x="70" y="150" width="210" height="35" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="175" y="173" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ACTUAL YIELD = 40.0 g</text>
  <text x="315" y="173" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">LOST</text>

  <!-- Yield Formula Box -->
  <rect x="70" y="205" width="280" height="50" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="210" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">YIELD = (ACTUAL / THEORETICAL) x 100%</text>
  <text x="210" y="244" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">(40.0 g / 50.0 g) x 100% = 80.0%</text>

  <!-- Tag box 1 -->
  <g data-role="text-box" data-box="40 305 340 64">
    <rect x="40" y="305" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">WHY YIELD IS NEVER 100%</text>
    <text x="210" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">INCOMPLETE REACTION OR SPILLAGE</text>
  </g>

  <!-- PANEL 2: Percentage Purity (x=420..760) -->
  <rect x="420" y="40" width="340" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="590" y="70" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">PERCENTAGE PURITY</text>

  <!-- Impure Sample Bar (100% total mass) -->
  <rect x="450" y="100" width="280" height="35" rx="6" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="590" y="123" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TOTAL IMPURE SAMPLE = 20.0 g</text>

  <!-- Pure Substance Component -->
  <rect x="450" y="150" width="280" height="35" rx="6" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <rect x="450" y="150" width="238" height="35" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="560" y="173" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PURE COMPOUND = 17.0 g</text>
  <text x="705" y="173" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">DIRT</text>

  <!-- Purity Formula Box -->
  <rect x="450" y="205" width="280" height="50" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="590" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PURITY = (PURE MASS / TOTAL SAMPLE) x 100%</text>
  <text x="590" y="244" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#3f8f46">(17.0 g / 20.0 g) x 100% = 85.0%</text>

  <!-- Tag box 2 -->
  <g data-role="text-box" data-box="420 305 340 64">
    <rect x="420" y="305" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="590" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PURITY IN PHARMACEUTICALS</text>
    <text x="590" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">IMPURITIES REDUCE MEDICINE SAFETY</text>
  </g>
</svg>

---

### 🔍 Why Reaction Yield is Never 100% (Cambridge Mark Scheme Points):

In Paper 4, Cambridge frequently awards marks for citing **practical reasons why actual yield is less than theoretical yield**:
1. **Reversible reaction**: The reaction reaches dynamic equilibrium before reaching completion.
2. **Side reactions**: Competing side reactions occur, forming unexpected by-products.
3. **Physical transfer losses**: Liquid clings to beakers, flasks, and stirring rods; solid adheres to filter paper.
4. **Loss during separation & purification**: Some product remains dissolved in solvent during filtration or recrystallisation.
5. **Impurities in starting reactants**: Starting chemicals were not $100\\%$ pure.

---

### 💊 Percentage Purity

Raw materials, ores, and synthesised pharmaceuticals often contain impurities (dirt, sand, or unreacted precursors):

$$\\mathbf{\\text{Percentage Purity} = \\frac{\\text{Mass of pure substance}}{\\text{Total mass of impure sample}} \\times 100\\%}$$

#### Worked Example:
A $25.0\\text{ g}$ sample of impure limestone ($\\ce{CaCO3}$) reacts with excess hydrochloric acid, producing $0.20\\text{ mol}$ of carbon dioxide gas:
$$\\ce{CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}$$
1. $1\\text{ mol of } \\ce{CO2}$ requires $1\\text{ mol of pure } \\ce{CaCO3}$.
2. Moles of pure $\\ce{CaCO3} = 0.20\\text{ mol}$.
3. Pure mass of $\\ce{CaCO3} = 0.20\\text{ mol} \\times 100\\text{ g/mol} = 20.0\\text{ g}$.
4. Percentage purity of limestone:
   $$\\text{Purity} = \\frac{20.0\\text{ g}}{25.0\\text{ g}} \\times 100\\% = \\mathbf{80.0\\%}`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-03-yp-q1',
          type: 'multiple_choice',
          question:
            'A chemist predicts a theoretical yield of 50.0 g of aspirin. After purifying the crystals, the mass obtained is 38.5 g. What is the percentage yield?',
          options: ['77.0%', '64.9%', '81.5%', '23.0%'],
          correctAnswer: 0,
          explanation:
            'Percentage yield = (actual yield / theoretical yield) x 100% = (38.5 g / 50.0 g) x 100% = 77.0%.',
          misconceptionTarget: 'Calculating the percentage loss (23.0%) rather than percentage yield',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-03-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme', 'examiner-tips'],
      title: '8. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Theory) questions on mass stoichiometry, gas volume, titrations, and purity.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
What is the concentration of a solution containing $2.0\\text{ g}$ of sodium hydroxide, $\\ce{NaOH}$, dissolved in $250\\text{ cm}^3$ of water?
*(Given $A_r$: $\\ce{Na} = 23, \\ce{O} = 16, \\ce{H} = 1$)*

- **A**: $0.050\\text{ mol/dm}^3$
- **B**: $0.100\\text{ mol/dm}^3$
- **C**: $0.200\\text{ mol/dm}^3$
- **D**: $0.800\\text{ mol/dm}^3$

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: C**
> - **Working**:
>   1. $M_r(\\ce{NaOH}) = 23 + 16 + 1 = 40\\text{ g/mol}$.
>   2. $\\text{Moles of } \\ce{NaOH} = \\frac{2.0\\text{ g}}{40\\text{ g/mol}} = 0.050\\text{ mol}$.
>   3. $\\text{Volume in dm}^3 = \\frac{250\\text{ cm}^3}{1000} = 0.250\\text{ dm}^3$.
>   4. $\\text{Concentration} = \\frac{0.050\\text{ mol}}{0.250\\text{ dm}^3} = \\mathbf{0.200\\text{ mol/dm}^3}$.

---

### 📝 Question 2 (Paper 2 Multiple Choice — 1 Mark)
In the complete combustion of propane:
$$\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}$$
What volume of oxygen gas at r.t.p. is required to react completely with $30\\text{ cm}^3$ of propane?

- **A**: $6\\text{ cm}^3$
- **B**: $30\\text{ cm}^3$
- **C**: $90\\text{ cm}^3$
- **D**: $150\\text{ cm}^3$

> [!TIP]
> ### 💡 Mark Scheme & Distractor Analysis
> - **Correct Answer: D (150 cm3)**
> - **Reasoning**:
>   - At constant temperature and pressure, gas volumes react in the same ratio as their balanced stoichiometric coefficients (Avogadro principle).
>   - Ratio of $\\ce{C3H8} : \\ce{O2} = 1 : 5$.
>   - Volume of $\\ce{O2} = 30\\text{ cm}^3 \\times 5 = \\mathbf{150\\text{ cm}^3}$.

---

### 📝 Question 3 (Paper 4 Structured Theory — 6 Marks)
Iron is extracted from iron(III) oxide by reaction with carbon monoxide in the blast furnace:
$$\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(s) + 3CO2(g)}$$

**(a) Calculate the relative formula mass ($M_r$) of iron(III) oxide, $\\ce{Fe2O3}$. [1]**
*(Given $A_r$: $\\ce{Fe} = 56, \\ce{O} = 16$)*
> **Mark Scheme**:
> - $M_r = (2 \\times 56) + (3 \\times 16) = 112 + 48 = \\mathbf{160}$ [1]

**(b) Calculate the maximum mass of iron that can be extracted from $80.0\\text{ tonnes}$ of iron(III) oxide. [3]**
> **Mark Scheme**:
> - **Mark 1**: Moles of $\\ce{Fe2O3} = \\frac{80.0 \\times 10^6\\text{ g}}{160} = 500\,000\\text{ mol}$ (or $0.50\\text{ megamoles}$). [1]
> - **Mark 2**: Mole ratio $\\frac{\\ce{Fe}}{\\ce{Fe2O3}} = \\frac{2}{1} \\implies \\text{Moles of } \\ce{Fe} = 2 \\times 500\,000 = 1\,000\,000\\text{ mol}$. [1]
> - **Mark 3**: $\\text{Mass of } \\ce{Fe} = 1\,000\,000\\text{ mol} \\times 56\\text{ g/mol} = 56 \\times 10^6\\text{ g} = \\mathbf{56.0\\text{ tonnes}}$. [1]

**(c) What volume of carbon monoxide gas, measured at r.t.p., is needed to react completely with $0.050\\text{ moles}$ of $\\ce{Fe2O3}$? [2]**
> **Mark Scheme**:
> - **Mark 1**: Moles of $\\ce{CO} = 3 \\times 0.050 = 0.150\\text{ mol}$. [1]
> - **Mark 2**: $\\text{Volume} = 0.150\\text{ mol} \\times 24\\text{ dm}^3 = \\mathbf{3.6\\text{ dm}^3}$ (or $3600\\text{ cm}^3$). [1]

---

### 📝 Question 4 (Paper 4 Structured Theory — 6 Marks)
A student carries out a titration to determine the concentration of a sample of hydrochloric acid.
$25.0\\text{ cm}^3$ of $0.120\\text{ mol/dm}^3$ aqueous sodium hydroxide is placed into a conical flask and titrated with the hydrochloric acid from a burette:
$$\\ce{NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)}$$
The average titre of hydrochloric acid required is $20.0\\text{ cm}^3$.

**(a) Calculate the number of moles of $\\ce{NaOH}$ in $25.0\\text{ cm}^3$ of the solution. [1]**
> **Mark Scheme**:
> - $\\text{Moles} = c \\times V = 0.120 \\times \\left(\\frac{25.0}{1000}\\right) = \\mathbf{0.00300\\text{ mol}}$ ($3.00 \\times 10^{-3}\\text{ mol}$). [1]

**(b) State the number of moles of $\\ce{HCl}$ that reacted. [1]**
> **Mark Scheme**:
> - Mole ratio is $1 : 1$, so $\\text{Moles of } \\ce{HCl} = \\mathbf{0.00300\\text{ mol}}$. [1]

**(c) Calculate the concentration of the hydrochloric acid in $\\text{mol/dm}^3$. [2]**
> **Mark Scheme**:
> - **Mark 1**: $V = \\frac{20.0}{1000} = 0.0200\\text{ dm}^3$. [1]
> - **Mark 2**: $c = \\frac{0.00300\\text{ mol}}{0.0200\\text{ dm}^3} = \\mathbf{0.150\\text{ mol/dm}^3}$. [1]

**(d) Calculate the concentration of this hydrochloric acid in $\\text{g/dm}^3$. [2]**
*(Given $A_r$: $\\ce{H} = 1, \\ce{Cl} = 35.5$)*
> **Mark Scheme**:
> - **Mark 1**: $M_r(\\ce{HCl}) = 1 + 35.5 = 36.5\\text{ g/mol}$. [1]
> - **Mark 2**: $\\text{Concentration in g/dm}^3 = 0.150 \\times 36.5 = \\mathbf{5.475\\text{ g/dm}^3}$ (accept $5.48\\text{ g/dm}^3$). [1]`,
    },
  ],
};
