/**
 * igcseTopic02.ts
 * Topic 2: Atoms, Elements & Compounds
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_2: MaterialItem = {
  id: 202,
  topic_number: 2,
  title: 'Atoms, Elements & Compounds',
  slug: 'atoms-elements-compounds',
  category: 'Inorganic Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 35,
  summary:
    'Comprehensive study of atomic structure, subatomic particles, isotopes and relative atomic mass calculations, electronic configuration, the periodic table, ionic bonding and giant ionic lattices, simple covalent molecules and giant macromolecular structures (diamond, graphite, silicon dioxide), and metallic bonding with alloys.',
  allTags: [
    'igcse-02-elements-compounds-mixtures',
    'igcse-02-atomic-structure',
    'igcse-02-isotopes-atomic-mass',
    'igcse-02-ionic-bonding',
    'igcse-02-covalent-bonding',
    'igcse-02-giant-covalent',
    'igcse-02-metallic-bonding',
    'igcse-02-exam-practice',
    'atomic-structure',
    'subatomic-particles',
    'protons-neutrons-electrons',
    'isotopes',
    'relative-atomic-mass',
    'electronic-configuration',
    'periodic-table',
    'elements-compounds-mixtures',
    'ions',
    'ionic-bonding',
    'giant-ionic-lattice',
    'covalent-bonding',
    'dot-and-cross-diagrams',
    'simple-molecules',
    'giant-covalent-structures',
    'allotropes-of-carbon',
    'diamond-and-graphite',
    'silicon-dioxide',
    'metallic-bonding',
    'delocalised-electrons',
    'alloys',
  ],
  prerequisites: [
    {
      tag: 'igcse-02-elements-compounds-mixtures',
      tags: ['elements', 'compounds', 'mixtures', 'chemical-vs-physical-change'],
      title: '1. Elements, Compounds & Mixtures',
      summary:
        'Defining elements, compounds, and mixtures at particle level, contrasting physical and chemical changes, and distinguishing mixtures from chemical compounds.',
      content: `### 🎯 Fundamental Definitions of Matter

All matter can be classified into elements, compounds, or mixtures depending on atomic composition and chemical bonding:

1. **Element**: A pure substance composed of only **one type of atom**. Elements cannot be broken down into simpler chemical substances by any chemical reaction (e.g. Iron, $\\ce{Fe}$; Oxygen gas, $\\ce{O2}$; Copper, $\\ce{Cu}$).
2. **Compound**: A pure substance formed when **two or more different elements chemically combine** in a **fixed, definite ratio** held together by chemical bonds (e.g. Water, $\\ce{H2O}$; Sodium chloride, $\\ce{NaCl}$; Carbon dioxide, $\\ce{CO2}$).
3. **Mixture**: A physical combination of **two or more substances** (elements or compounds) that are **not chemically joined**. The components can be present in **any proportion** and retain their individual physical and chemical properties (e.g. Air, crude oil, brass, sea water).

### 🔍 Particle Models: Elements, Compounds & Mixtures

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-particle-ecm-title igcse-t02-particle-ecm-desc" data-diagram="igcse-t02-particle-ecm" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-particle-ecm-title">Particle models of elements, compounds and mixtures</title>
  <desc id="igcse-t02-particle-ecm-desc">Comparison of particle arrangements in pure elements, chemical compounds with fixed ratios, and physical mixtures.</desc>

  <!-- PANEL 1: ELEMENT (x=50..260) -->
  <rect x="50" y="60" width="210" height="210" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g stroke="#1f2937" stroke-width="1.5">
    <!-- Diatomic element pairs (e.g. O2, particleBlue #8fd3ef) -->
    <!-- Pair 1 -->
    <circle cx="95" cy="105" r="14" fill="#8fd3ef" />
    <circle cx="120" cy="105" r="14" fill="#8fd3ef" />
    <!-- Pair 2 -->
    <circle cx="180" cy="130" r="14" fill="#8fd3ef" />
    <circle cx="205" cy="130" r="14" fill="#8fd3ef" />
    <!-- Pair 3 -->
    <circle cx="90" cy="180" r="14" fill="#8fd3ef" />
    <circle cx="115" cy="180" r="14" fill="#8fd3ef" />
    <!-- Pair 4 -->
    <circle cx="170" cy="215" r="14" fill="#8fd3ef" />
    <circle cx="195" cy="215" r="14" fill="#8fd3ef" />
  </g>
  <g data-role="text-box" data-box="50 280 210 64">
    <rect x="50" y="280" width="210" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="155" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ELEMENTS</text>
    <text x="155" y="326" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ONE ATOM TYPE</text>
  </g>

  <!-- PANEL 2: COMPOUND (x=295..505) -->
  <rect x="295" y="60" width="210" height="210" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g stroke="#1f2937" stroke-width="1.5">
    <!-- Water-like molecules: central particleRed #f5a3a3 (r15), two particleBlue #8fd3ef (r11) -->
    <!-- Molecule 1 -->
    <circle cx="355" cy="115" r="15" fill="#f5a3a3" />
    <circle cx="340" cy="100" r="11" fill="#8fd3ef" />
    <circle cx="370" cy="100" r="11" fill="#8fd3ef" />
    <!-- Molecule 2 -->
    <circle cx="445" cy="135" r="15" fill="#f5a3a3" />
    <circle cx="430" cy="120" r="11" fill="#8fd3ef" />
    <circle cx="460" cy="120" r="11" fill="#8fd3ef" />
    <!-- Molecule 3 -->
    <circle cx="350" cy="195" r="15" fill="#f5a3a3" />
    <circle cx="335" cy="180" r="11" fill="#8fd3ef" />
    <circle cx="365" cy="180" r="11" fill="#8fd3ef" />
    <!-- Molecule 4 -->
    <circle cx="440" cy="220" r="15" fill="#f5a3a3" />
    <circle cx="425" cy="205" r="11" fill="#8fd3ef" />
    <circle cx="455" cy="205" r="11" fill="#8fd3ef" />
  </g>
  <g data-role="text-box" data-box="295 280 210 64">
    <rect x="295" y="280" width="210" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">COMPOUNDS</text>
    <text x="400" y="326" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FIXED RATIO</text>
  </g>

  <!-- PANEL 3: MIXTURE (x=540..750) -->
  <rect x="540" y="60" width="210" height="210" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g stroke="#1f2937" stroke-width="1.5">
    <!-- Diatomic element pair -->
    <circle cx="585" cy="110" r="13" fill="#8fd3ef" />
    <circle cx="608" cy="110" r="13" fill="#8fd3ef" />
    <!-- Monoatomic element single atom (particleYellow #fde58a) -->
    <circle cx="685" cy="105" r="14" fill="#fde58a" />
    <!-- Compound molecule (particleRed + 2 particleBlue) -->
    <circle cx="615" cy="190" r="14" fill="#f5a3a3" />
    <circle cx="602" cy="178" r="10" fill="#8fd3ef" />
    <circle cx="628" cy="178" r="10" fill="#8fd3ef" />
    <!-- Another monoatomic atom -->
    <circle cx="705" cy="180" r="14" fill="#fde58a" />
    <!-- Another diatomic pair -->
    <circle cx="655" cy="235" r="13" fill="#8fd3ef" />
    <circle cx="678" cy="235" r="13" fill="#8fd3ef" />
  </g>
  <g data-role="text-box" data-box="540 280 210 64">
    <rect x="540" y="280" width="210" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="645" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MIXTURES</text>
    <text x="645" y="326" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">VARIABLE RATIO</text>
  </g>
</svg>

**Visual Observations**:
1. **Elements**: Contain only one type of atom (e.g. paired diatomic $\ce{O2}$ molecules).
2. **Compounds**: Different atoms chemically bonded together in fixed integer ratios (e.g. $\ce{H2O}$ with two hydrogens per oxygen).
3. **Mixtures**: Physically intermingled particles in variable proportions without chemical bonds.

---

### 📊 Comparison: Compounds vs Mixtures

| Feature | Compound | Mixture |
| :--- | :--- | :--- |
| **Composition** | Elements combined in a **fixed, definite ratio** | Components mixed in **any variable ratio** |
| **Chemical Bonding** | Formed by **chemical bonds** (ionic or covalent) | **No chemical bonds** formed between components |
| **Separation Method** | Can only be separated by **chemical reactions** (or electrolysis) | Easily separated by **physical separation techniques** (filtration, distillation, chromatography) |
| **Properties** | Completely **new properties** different from constituent elements | Retains the **individual properties** of each component |
| **Energy Change on Formation** | Usually accompanied by **significant energy transfer** (exothermic or endothermic) | **Little or no energy change** occurs during mixing |

> [!TIP]
> ### 💡 Classic Cambridge Exam Comparison: Iron & Sulfur
> - **Mixture of $\\ce{Fe}$ and $\\ce{S}$**:
>   - Grey iron filings and yellow sulfur powder physically mixed.
>   - A magnet attracts and extracts the iron filings completely (physical separation).
>   - Dilute hydrochloric acid added to the mixture releases hydrogen gas ($\\ce{H2}$) from the iron.
> - **Compound: Iron(II) Sulfide ($\\ce{FeS}$)**:
>   - Formed by heating the mixture strongly until an exothermic glow persists.
>   - The resulting black solid is **not attracted to a magnet**.
>   - Reaction with dilute hydrochloric acid releases toxic, foul-smelling hydrogen sulfide gas ($\\ce{H2S}$), proving an entirely new substance was formed.

---

### 🔄 Physical Changes vs Chemical Changes

- **Physical Change**: A change in state, shape, or particle arrangement where **no new chemical substances are formed**. Physical changes are easily **reversible** by physical means (e.g. melting ice, dissolving sodium chloride in water, boiling ethanol).
- **Chemical Change**: A process in which chemical bonds are broken and new bonds are formed, resulting in **one or more new chemical substances**. Chemical changes are usually **irreversible** or difficult to reverse (e.g. combustion of methane, rusting of iron, thermal decomposition of calcium carbonate).
- **Observable signs of chemical reactions**:
  1. Evolution of a gas (effervescence / bubbling).
  2. Formation of an insoluble solid (a precipitate).
  3. Significant change in temperature (exothermic heat release or endothermic cooling).
  4. Distinct color change.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-ecm-q1',
          type: 'multiple_choice',
          question:
            'A student heats a mixture of iron powder and sulfur powder in a test tube. Which observation proves that a chemical compound has formed?',
          options: [
            'The sulfur melts into a yellow liquid.',
            'A magnet can no longer extract the iron from the product.',
            'The total mass of the test tube and contents remained constant.',
            'The iron powder settles to the bottom of the tube.',
          ],
          correctAnswer: 1,
          explanation:
            'In iron(II) sulfide (FeS), the iron atoms are chemically bonded to sulfur atoms. Therefore, iron loses its individual ferromagnetic property and can no longer be separated with a magnet, indicating a compound has formed.',
          misconceptionTarget: 'Confusing melting (physical state change) with chemical reaction',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-02-atomic-structure',
      tags: ['atomic-structure', 'subatomic-particles', 'electron-configuration', 'periodic-table'],
      title: '2. Atomic Structure & The Periodic Table',
      summary:
        'Subatomic particles (protons, neutrons, electrons), atomic number, mass number, Bohr electron configurations for elements 1 to 20, and Periodic Table relationships.',
      content: `### ⚛️ The Structure of the Atom

An atom consists of a tiny, extremely dense **central nucleus** surrounded by electrons orbiting in concentric energy levels (**electron shells**):
1. **The Nucleus**: Located at the center of the atom, containing **protons** and **neutrons** (collectively termed **nucleons**). The nucleus carries a positive charge and accounts for almost all the mass of the atom.
2. **Electron Shells**: Electrons orbit the nucleus at distinct distances. Most of an atom's volume is empty space.

---

### 📊 Properties of Subatomic Particles

| Particle | Location | Relative Mass | Relative Charge | Symbol |
| :--- | :--- | :---: | :---: | :---: |
| **Proton** | In the nucleus | $1$ | $+1$ | $\\ce{p}$ |
| **Neutron** | In the nucleus | $1$ | $0$ (neutral) | $\\ce{n}$ |
| **Electron** | In electron shells around the nucleus | $\\frac{1}{1840}$ (or $0.0005$, negligible) | $-1$ | $\\ce{e^-}$ |

> [!NOTE]
> ### 📌 Atomic Neutrality
> Atoms are electrically neutral overall because the **number of positively charged protons equals the number of negatively charged electrons**:
> $$\\text{Net Charge} = (\\text{Number of Protons} \\times (+1)) + (\\text{Number of Electrons} \\times (-1)) = 0$$

---

### 🔢 Atomic Number ($Z$) and Mass Number ($A$)

In standard chemical nuclide notation:

$$\\huge {}^{A}_{Z}\\text{X}$$

- **Proton Number (Atomic Number, $Z$)**: The number of protons in the nucleus of an atom. The proton number uniquely identifies the chemical element.
- **Mass Number (Nucleon Number, $A$)**: The total number of protons and neutrons in the nucleus of an atom:
  $$A = \\text{Number of Protons} + \\text{Number of Neutrons}$$
- **Deducing Subatomic Particle Counts**:
  - Number of Protons $= Z$
  - Number of Electrons (in neutral atom) $= Z$
  - Number of Neutrons $= A - Z$

> **Worked Example**: For sodium, $ {}^{23}_{11}\\text{Na}$:
> - Protons $= 11$
> - Electrons $= 11$
> - Neutrons $= 23 - 11 = 12$

---

### ⚡ Electronic Configuration (Elements 1 to 20)

Electrons occupy concentric electron shells around the nucleus according to specific rules:
1. **Shell 1** (closest to nucleus): Holds a maximum of **$2$ electrons**.
2. **Shell 2**: Holds a maximum of **$8$ electrons**.
3. **Shell 3**: Holds a maximum of **$8$ electrons** (for the first 20 elements).
4. **Shell 4**: Accommodates remaining electrons (up to $2$ for Calcium, $Z=20$).

#### Electron Configurations of the First 20 Elements:

| Element | Symbol | Proton No. ($Z$) | Electron Configuration | Group | Period |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Hydrogen | $\\ce{H}$ | $1$ | $1$ | $1$ | $1$ |
| Helium | $\\ce{He}$ | $2$ | $2$ (Duplet) | $\\text{VIII} / 0$ | $1$ |
| Lithium | $\\ce{Li}$ | $3$ | $2, 1$ | $\\text{I}$ | $2$ |
| Beryllium | $\\ce{Be}$ | $4$ | $2, 2$ | $\\text{II}$ | $2$ |
| Boron | $\\ce{B}$ | $5$ | $2, 3$ | $\\text{III}$ | $2$ |
| Carbon | $\\ce{C}$ | $6$ | $2, 4$ | $\\text{IV}$ | $2$ |
| Nitrogen | $\\ce{N}$ | $7$ | $2, 5$ | $\\text{V}$ | $2$ |
| Oxygen | $\\ce{O}$ | $8$ | $2, 6$ | $\\text{VI}$ | $2$ |
| Fluorine | $\\ce{F}$ | $9$ | $2, 7$ | $\\text{VII}$ | $2$ |
| Neon | $\\ce{Ne}$ | $10$ | $2, 8$ (Octet) | $\\text{VIII} / 0$ | $2$ |
| Sodium | $\\ce{Na}$ | $11$ | $2, 8, 1$ | $\\text{I}$ | $3$ |
| Magnesium | $\\ce{Mg}$ | $12$ | $2, 8, 2$ | $\\text{II}$ | $3$ |
| Aluminium | $\\ce{Al}$ | $13$ | $2, 8, 3$ | $\\text{III}$ | $3$ |
| Silicon | $\\ce{Si}$ | $14$ | $2, 8, 4$ | $\\text{IV}$ | $3$ |
| Phosphorus | $\\ce{P}$ | $15$ | $2, 8, 5$ | $\\text{V}$ | $3$ |
| Sulfur | $\\ce{S}$ | $16$ | $2, 8, 6$ | $\\text{VI}$ | $3$ |
| Chlorine | $\\ce{Cl}$ | $17$ | $2, 8, 7$ | $\\text{VII}$ | $3$ |
| Argon | $\\ce{Ar}$ | $18$ | $2, 8, 8$ (Octet) | $\\text{VIII} / 0$ | $3$ |
| Potassium | $\\ce{K}$ | $19$ | $2, 8, 8, 1$ | $\\text{I}$ | $4$ |
| Calcium | $\\ce{Ca}$ | $20$ | $2, 8, 8, 2$ | $\\text{II}$ | $4$ |

---

### 🗺️ Relationship with the Periodic Table

1. **Group Number**: Corresponds to the **number of electrons in the outer shell** (valence electrons).
   - Group $\\text{I}$ elements have $1$ outer electron.
   - Group $\\text{VII}$ elements have $7$ outer electrons.
   - Elements in the same group have similar chemical properties because they have the same number of outer-shell electrons.
2. **Period Number**: Corresponds to the **number of occupied electron shells**.
   - Period $2$ elements have $2$ occupied shells.
   - Period $3$ elements have $3$ occupied shells.
3. **Noble Gases (Group VIII / 0)**: Possess a **full outer shell** of electrons (a stable duplet for $\\ce{He}$ with $2$, and a stable octet of $8$ for $\\ce{Ne, Ar}$). This electronic configuration makes them **chemically inert** (unreactive).

### 🔍 Bohr Model of Atomic Structure & Shell Configuration

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-bohr-atom-model-title igcse-t02-bohr-atom-model-desc" data-diagram="igcse-t02-bohr-atom-model" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-bohr-atom-model-title">Bohr model of sodium atom and electronic configuration</title>
  <desc id="igcse-t02-bohr-atom-model-desc">Diagram showing the dense nucleus with protons and neutrons surrounded by concentric shells with 2, 8, 1 electrons.</desc>
  <defs>
    <marker id="igcse-t02-bohr-atom-model-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- ATOM CONTAINER PANEL (LEFT: x=40..460) -->
  <rect x="40" y="30" width="420" height="360" rx="10" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Center of atom at cx=250, cy=210 -->
  <!-- Shell 3 (r=150) -->
  <circle cx="250" cy="210" r="150" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />
  <!-- Shell 2 (r=100) -->
  <circle cx="250" cy="210" r="100" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />
  <!-- Shell 1 (r=55) -->
  <circle cx="250" cy="210" r="55" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Nucleus at center -->
  <circle cx="250" cy="210" r="28" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="250" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">11P⁺</text>
  <text x="250" y="223" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">12N⁰</text>

  <!-- Shell 1 electrons (2 electrons, r=6, fill=#fde58a) -->
  <circle cx="250" cy="155" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="250" cy="265" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />

  <!-- Shell 2 electrons (8 electrons, r=6, fill=#fde58a) -->
  <circle cx="250" cy="110" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="250" cy="310" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="150" cy="210" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="350" cy="210" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="179" cy="139" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="321" cy="139" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="179" cy="281" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="321" cy="281" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />

  <!-- Shell 3 electron (1 valence electron, r=7, fill=#8fd3ef particleBlue) -->
  <circle cx="250" cy="60" r="7" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />

  <!-- HEADER TAG TOP OF ATOM PANEL -->
  <g data-role="text-box" data-box="50 45 240 40">
    <rect x="50" y="45" width="240" height="40" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="170" y="70" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SODIUM ATOM (2, 8, 1)</text>
  </g>

  <!-- RIGHT CALLOUT 1: VALENCE ELECTRON -->
  <g data-role="text-box" data-box="490 40 270 70">
    <path d="M 494 40 L 746 40 L 760 54 L 760 106 Q 760 110 756 110 L 494 110 Q 490 110 490 106 L 490 44 Q 490 40 494 40 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="745" cy="56" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="508" y="68" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">1 VALENCE ELECTRON</text>
    <text x="508" y="92" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DETERMINES GROUP 1</text>
  </g>
  <path d="M 490 70 C 370 70, 310 60, 264 60" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t02-bohr-atom-model-arrow)" />

  <!-- RIGHT CALLOUT 2: ELECTRON SHELLS -->
  <g data-role="text-box" data-box="490 145 270 70">
    <path d="M 494 145 L 746 145 L 760 159 L 760 211 Q 760 215 756 215 L 494 215 Q 490 215 490 211 L 490 149 Q 490 145 494 145 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="745" cy="161" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="508" y="173" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">3 OCCUPIED SHELLS</text>
    <text x="508" y="197" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DETERMINES PERIOD 3</text>
  </g>
  <path d="M 490 175 C 440 175, 410 180, 358 180" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t02-bohr-atom-model-arrow)" />

  <!-- RIGHT CALLOUT 3: NUCLEUS -->
  <g data-role="text-box" data-box="490 250 270 70">
    <path d="M 494 250 L 746 250 L 760 264 L 760 316 Q 760 320 756 320 L 494 320 Q 490 320 490 316 L 490 254 Q 490 250 494 250 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="745" cy="266" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="508" y="278" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">DENSE NUCLEUS</text>
    <text x="508" y="302" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">11 PROTONS + 12 NEUTRONS</text>
  </g>
  <path d="M 490 280 C 390 280, 330 240, 285 220" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t02-bohr-atom-model-arrow)" />

  <!-- FOOTER SUMMARY TAG (RIGHT BOTTOM) -->
  <g data-role="text-box" data-box="490 340 270 50">
    <rect x="490" y="340" width="270" height="50" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="625" y="371" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MASS NUMBER A = 23</text>
  </g>
</svg>

**Key Structural Features**:
1. **Nucleus**: Concentrates 11 protons ($11\ce{p+}$) and 12 neutrons ($12\ce{n^0}$), defining the nucleon number $A = 23$.
2. **Electron Shells**: 11 electrons occupy 3 concentric shells ($2, 8, 1$), placing sodium in **Period 3**.
3. **Valence Electron**: Exactly 1 outer-shell electron places sodium in **Group I**.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-atom-q1',
          type: 'multiple_choice',
          question:
            'An atom of phosphorus has atomic number 15 and mass number 31. What is the number of neutrons and its electronic configuration?',
          options: [
            '16 neutrons; 2, 8, 5',
            '15 neutrons; 2, 8, 5',
            '16 neutrons; 2, 8, 8, 2',
            '31 neutrons; 2, 8, 5',
          ],
          correctAnswer: 0,
          explanation:
            'Neutrons = Mass number - Atomic number = 31 - 15 = 16. With 15 electrons, the electronic configuration fills shell 1 (2), shell 2 (8), and shell 3 (5), yielding 2, 8, 5.',
          misconceptionTarget: 'Confusing mass number with neutron count or misapplying shell fill limits',
        },
      ],
    },
    {
      tag: 'igcse-02-isotopes-atomic-mass',
      tags: ['isotopes', 'relative-atomic-mass', 'radioisotopes'],
      title: '3. Isotopes & Relative Atomic Mass',
      summary:
        'Definition of isotopes, identical chemical vs varying physical properties, calculating relative atomic mass (Ar) from isotopic abundances, and radioisotopes.',
      content: `### 🧪 Isotopes: Same Element, Different Masses

**Isotopes** are different atoms of the **same element** that have:
- The **same number of protons** (same atomic / proton number).
- A **different number of neutrons** (different mass / nucleon number).

#### Common Examples of Isotopes:
- **Hydrogen**:
  - Protium: $ {}^{1}_{1}\\text{H}$ ($1$ proton, $0$ neutrons, $1$ electron)
  - Deuterium: $ {}^{2}_{1}\\text{H}$ ($1$ proton, $1$ neutron, $1$ electron)
  - Tritium: $ {}^{3}_{1}\\text{H}$ ($1$ proton, $2$ neutrons, $1$ electron)
- **Carbon**:
  - Carbon-12: $ {}^{12}_{6}\\text{C}$ ($6$ protons, $6$ neutrons)
  - Carbon-13: $ {}^{13}_{6}\\text{C}$ ($6$ protons, $7$ neutrons)
  - Carbon-14: $ {}^{14}_{6}\\text{C}$ ($6$ protons, $8$ neutrons)
- **Chlorine**:
  - Chlorine-35: $ {}^{35}_{17}\\text{Cl}$ ($17$ protons, $18$ neutrons)
  - Chlorine-37: $ {}^{37}_{17}\\text{Cl}$ ($17$ protons, $20$ neutrons)

### 🔍 Visual Comparison of Isotopes: Hydrogen

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-isotopes-hydrogen-title igcse-t02-isotopes-hydrogen-desc" data-diagram="igcse-t02-isotopes-hydrogen" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-isotopes-hydrogen-title">The three isotopes of hydrogen</title>
  <desc id="igcse-t02-isotopes-hydrogen-desc">Protium, deuterium, and tritium showing identical proton and electron counts but differing numbers of neutrons in the nucleus.</desc>

  <!-- PANEL 1: PROTIUM (x=50..260) -->
  <rect x="50" y="40" width="210" height="225" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Shell (r=65, cx=155, cy=135) -->
  <circle cx="155" cy="135" r="65" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />
  <!-- Nucleus: 1 proton (cx=155, cy=135, r=18, fill=#f5a3a3) -->
  <circle cx="155" cy="135" r="18" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="155" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1P⁺</text>
  <!-- Orbiting electron (cx=155, cy=70, r=6, fill=#fde58a) -->
  <circle cx="155" cy="70" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <!-- Label box 1 -->
  <g data-role="text-box" data-box="50 205 210 60">
    <rect x="50" y="205" width="210" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="155" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PROTIUM (¹H)</text>
    <text x="155" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1P, 0N, 1E</text>
  </g>

  <!-- PANEL 2: DEUTERIUM (x=295..505) -->
  <rect x="295" y="40" width="210" height="225" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Shell (r=65, cx=400, cy=135) -->
  <circle cx="400" cy="135" r="65" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />
  <!-- Nucleus: 1 proton (#f5a3a3) + 1 neutron (#cfd4d9) at distance 44px -->
  <circle cx="378" cy="135" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="378" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1P⁺</text>
  <circle cx="422" cy="135" r="16" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="422" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1N⁰</text>
  <!-- Orbiting electron -->
  <circle cx="400" cy="70" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <!-- Label box 2 -->
  <g data-role="text-box" data-box="295 205 210 60">
    <rect x="295" y="205" width="210" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">DEUTERIUM (²H)</text>
    <text x="400" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1P, 1N, 1E</text>
  </g>

  <!-- PANEL 3: TRITIUM (x=540..750) -->
  <rect x="540" y="40" width="210" height="225" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Shell (r=65, cx=645, cy=135) -->
  <circle cx="645" cy="135" r="65" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />
  <!-- Nucleus: 1 proton (#f5a3a3) + 2 neutrons (#cfd4d9) at triangle positions -->
  <circle cx="623" cy="125" r="14" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="623" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1P⁺</text>
  <circle cx="667" cy="125" r="14" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="667" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1N⁰</text>
  <circle cx="645" cy="155" r="14" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="645" y="160" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1N⁰</text>
  <!-- Orbiting electron -->
  <circle cx="645" cy="70" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <!-- Label box 3 -->
  <g data-role="text-box" data-box="540 205 210 60">
    <rect x="540" y="205" width="210" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="645" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TRITIUM (³H)</text>
    <text x="645" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1P, 2N, 1E</text>
  </g>

  <!-- BOTTOM COMPARISON SUMMARY BANNER -->
  <g data-role="text-box" data-box="50 280 700 64">
    <rect x="50" y="280" width="700" height="64" rx="8" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SAME CHEMICAL PROPERTIES: IDENTICAL ELECTRON CONFIGURATION</text>
    <text x="400" y="326" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">DIFFERENT PHYSICAL PROPERTIES: DIFFERENT ATOMIC MASS</text>
  </g>
</svg>

**Key Takeaways**:
1. **Identical Chemical Properties**: Protium, Deuterium, and Tritium all possess exactly $1$ proton and $1$ electron (identical electronic configuration).
2. **Different Physical Properties**: Each heavier isotope contains an additional neutron in its nucleus ($0, 1,$ and $2$ neutrons), resulting in differences in density and mass.

---

### ⚖️ Chemical vs Physical Properties of Isotopes

> [!IMPORTANT]
> ### 🎯 Core Cambridge Exam Concept: Chemical Reactivity of Isotopes
> - **Chemical properties are identical**:
>   - Chemical reactions depend entirely on the **number and arrangement of valence (outer shell) electrons**.
>   - Because isotopes of the same element have the **exact same number of electrons** and the same electronic configuration, they undergo identical chemical reactions.
> - **Physical properties differ slightly**:
>   - Physical properties such as **density**, **melting point**, **boiling point**, and **rate of diffusion** depend on atomic mass.
>   - Heavier isotopes have slightly higher densities, higher boiling points, and diffuse more slowly than lighter isotopes.

---

### 🧮 Calculating Relative Atomic Mass ($A_r$)

The **Relative Atomic Mass ($A_r$)** of an element is the **weighted average mass** of naturally occurring isotopes of that element relative to $\\frac{1}{12}$ of the mass of an atom of carbon-12.

#### Formula:
$$A_r = \\frac{\\sum (\\text{Isotopic Mass} \\times \\text{Percentage Abundance})}{100}$$

$$\\displaystyle A_r = \\frac{(m_1 \\times \\%_1) + (m_2 \\times \\%_2) + \\dots}{100}$$

---

### 📝 Step-by-Step Worked Calculations

#### Example 1: Chlorine
A sample of naturally occurring chlorine consists of:
- $75\\%$ of $ {}^{35}\\text{Cl}$
- $25\\%$ of $ {}^{37}\\text{Cl}$

$$\\displaystyle A_r(\\ce{Cl}) = \\frac{(35 \\times 75) + (37 \\times 25)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35.5$$

#### Example 2: Magnesium (3 Isotopes)
A sample of magnesium contains three isotopes:
- $ {}^{24}\\text{Mg}$ (abundance $79\\%$)
- $ {}^{25}\\text{Mg}$ (abundance $10\\%$)
- $ {}^{26}\\text{Mg}$ (abundance $11\\%$)

$$\\displaystyle A_r(\\ce{Mg}) = \\frac{(24 \\times 79) + (25 \\times 10) + (26 \\times 11)}{100} = \\frac{1896 + 250 + 286}{100} = \\frac{2432}{100} = 24.32$$

---

### ☢️ Radioactive vs Non-Radioactive Isotopes
- **Non-radioactive isotopes**: Stable nuclei that do not decay over time (e.g. $ {}^{12}\\text{C}$, $ {}^{16}\\text{O}$).
- **Radioactive isotopes (Radioisotopes)**: Unstable nuclei that spontaneously decay, emitting radiation (alpha, beta, gamma rays).
  - **Medical uses**: Cobalt-60 is used in radiation therapy to treat cancer cells; Iodine-131 is used as a medical tracer to monitor thyroid gland activity.
  - **Industrial uses**: Carbon-14 is used in archaeological radiocarbon dating; Uranium-235 is used as nuclear fuel in power generation.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-iso-q1',
          type: 'multiple_choice',
          question:
            'A sample of element X consists of 80% of an isotope with mass number 10 and 20% of an isotope with mass number 11. What is the relative atomic mass (Ar) of element X?',
          options: ['10.2', '10.5', '10.8', '11.0'],
          correctAnswer: 0,
          explanation:
            'Ar = ((10 * 80) + (11 * 20)) / 100 = (800 + 220) / 100 = 1020 / 100 = 10.2.',
          misconceptionTarget: 'Taking the simple arithmetic mean (10.5) instead of the weighted abundance average',
        },
      ],
    },
    {
      tag: 'igcse-02-ionic-bonding',
      tags: ['ions', 'ionic-bonding', 'giant-ionic-lattice', 'dot-and-cross', 'nacl-lattice'],
      title: '4. Ions & Ionic Bonding',
      summary:
        'Formation of positive cations and negative anions, electron transfer, dot-and-cross diagrams, giant ionic lattices, and physical properties (melting points, conductivity, brittleness).',
      content: `### ⚡ Formation of Ions: Electron Transfer

Atoms undergo chemical reactions to achieve a **stable electronic configuration** with a full outer shell of electrons (like the noble gases):
1. **Metal Atoms (Loss of Electrons)**:
   - Metals have $1, 2,$ or $3$ valence electrons.
   - They **lose** their outer shell electrons to form positively charged ions called **cations**.
   - Example: A neutral sodium atom ($2, 8, 1$) loses $1$ electron to form a sodium ion $\\ce{Na+}$ ($2, 8$):
     $$\\ce{Na -> Na+ + e^-}$$
   - Example: A magnesium atom ($2, 8, 2$) loses $2$ electrons to form $\\ce{Mg^{2+}}$ ($2, 8$):
     $$\\ce{Mg -> Mg^{2+} + 2e^-}$$
2. **Non-Metal Atoms (Gain of Electrons)**:
   - Non-metals have $5, 6,$ or $7$ valence electrons.
   - They **gain** electrons into their outer shell to form negatively charged ions called **anions** (ending in *-ide*).
   - Example: A neutral chlorine atom ($2, 8, 7$) gains $1$ electron to form a chloride ion $\\ce{Cl-}$ ($2, 8, 8$):
     $$\\ce{Cl + e^- -> Cl-}$$
   - Example: An oxygen atom ($2, 6$) gains $2$ electrons to form an oxide ion $\\ce{O^{2-}}$ ($2, 8$):
     $$\\ce{O + 2e^- -> O^{2-}}$$

---

### 📋 Common Ions and Their Valencies

| Charge | Common Cations (Metals) | Common Anions (Non-metals & Compound Ions) |
| :---: | :--- | :--- |
| **$+1$ / $-1$** | $\\ce{Li+}, \\ce{Na+}, \\ce{K+}, \\ce{Ag+}, \\ce{H+}, \\ce{NH4+}$ (Ammonium) | $\\ce{F-}, \\ce{Cl-}, \\ce{Br-}, \\ce{I-}, \\ce{OH-}$ (Hydroxide), $\\ce{NO3-}$ (Nitrate) |
| **$+2$ / $-2$** | $\\ce{Mg^{2+}}, \\ce{Ca^{2+}}, \\ce{Ba^{2+}}, \\ce{Cu^{2+}}, \\ce{Fe^{2+}}, \\ce{Zn^{2+}}, \\ce{Pb^{2+}}$ | $\\ce{O^{2-}}, \\ce{S^{2-}}, \\ce{SO4^{2-}}$ (Sulfate), $\\ce{CO3^{2-}}$ (Carbonate) |
| **$+3$ / $-3$** | $\\ce{Al^{3+}}, \\ce{Fe^{3+}}$ | $\\ce{N^{3-}}, \\ce{PO4^{3-}}$ (Phosphate) |

---

### 🔗 What is an Ionic Bond?

> [!NOTE]
> ### 🎯 Cambridge Syllabus Definition
> An **ionic bond** is the **strong electrostatic attraction between oppositely charged ions** (cations and anions).

Ionic bonds are formed when electrons are transferred from a metal atom to a non-metal atom:
- In sodium chloride ($\\ce{NaCl}$), one electron is transferred from $\\ce{Na}$ to $\\ce{Cl}$, forming $\\ce{Na+}$ and $\\ce{Cl-}$.
- In magnesium oxide ($\\ce{MgO}$), two electrons are transferred from $\\ce{Mg}$ to $\\ce{O}$, forming $\\ce{Mg^{2+}}$ and $\\ce{O^{2-}}$.
- In calcium chloride ($\\ce{CaCl2}$), calcium transfers $1$ electron to each of two chlorine atoms, forming $\\ce{Ca^{2+}}$ and $2 \\times \\ce{Cl-}$.

---

### 🏛️ The Giant Ionic Lattice Structure

Ionic compounds do not exist as isolated single molecules. Instead, they form a **giant three-dimensional ionic lattice** consisting of billions of alternating positive and negative ions held together by electrostatic attractions acting in all directions.

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-ionic-lattice-title igcse-t02-ionic-lattice-desc" data-diagram="igcse-t02-ionic-lattice" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-ionic-lattice-title">Giant ionic lattice of sodium chloride</title>
  <desc id="igcse-t02-ionic-lattice-desc">Regular 2D lattice of alternating positive sodium ions and negative chloride ions held by strong electrostatic forces.</desc>
  <defs>
    <marker id="igcse-t02-ionic-lattice-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- LATTICE CONTAINER PANEL -->
  <rect x="50" y="60" width="380" height="300" rx="10" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- ALTERNATING ION GRID (4 rows x 5 cols) -->
  <!-- Sodium ions: r12, fill=#b5efb0 (green) -->
  <!-- Chloride ions: r16, fill=#8fd3ef (blue) -->
  <g data-role="particle-region" data-bounds="60 70 420 350" stroke="#1f2937" stroke-width="1.5">
    <!-- Row 1 (y=105) -->
    <circle cx="100" cy="105" r="12" fill="#b5efb0" />
    <circle cx="170" cy="105" r="16" fill="#8fd3ef" />
    <circle cx="240" cy="105" r="12" fill="#b5efb0" />
    <circle cx="310" cy="105" r="16" fill="#8fd3ef" />
    <circle cx="380" cy="105" r="12" fill="#b5efb0" />

    <!-- Row 2 (y=175) -->
    <circle cx="100" cy="175" r="16" fill="#8fd3ef" />
    <circle cx="170" cy="175" r="12" fill="#b5efb0" />
    <circle cx="240" cy="175" r="16" fill="#8fd3ef" />
    <circle cx="310" cy="175" r="12" fill="#b5efb0" />
    <circle cx="380" cy="175" r="16" fill="#8fd3ef" />

    <!-- Row 3 (y=245) -->
    <circle cx="100" cy="245" r="12" fill="#b5efb0" />
    <circle cx="170" cy="245" r="16" fill="#8fd3ef" />
    <circle cx="240" cy="245" r="12" fill="#b5efb0" />
    <circle cx="310" cy="245" r="16" fill="#8fd3ef" />
    <circle cx="380" cy="245" r="12" fill="#b5efb0" />

    <!-- Row 4 (y=315) -->
    <circle cx="100" cy="315" r="16" fill="#8fd3ef" />
    <circle cx="170" cy="315" r="12" fill="#b5efb0" />
    <circle cx="240" cy="315" r="16" fill="#8fd3ef" />
    <circle cx="310" cy="315" r="12" fill="#b5efb0" />
    <circle cx="380" cy="315" r="16" fill="#8fd3ef" />
  </g>

  <!-- KEY / LEGEND BOX TOP RIGHT -->
  <g data-role="text-box" data-box="470 60 280 120">
    <rect x="470" y="60" width="280" height="120" rx="8" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <circle cx="495" cy="95" r="12" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
    <text x="520" y="100" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SODIUM ION Na⁺</text>
    <circle cx="495" cy="145" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
    <text x="520" y="150" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CHLORIDE ION Cl⁻</text>
  </g>

  <!-- CALLOUT TAG 1: ELECTROSTATIC FORCES -->
  <g data-role="text-box" data-box="470 210 280 70">
    <path d="M 474 210 L 736 210 L 750 224 L 750 276 Q 750 280 746 280 L 474 280 Q 470 280 470 276 L 470 214 Q 470 210 474 210 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="735" cy="226" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="488" y="238" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">STRONG ELECTROSTATIC</text>
    <text x="488" y="260" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ATTRACTION BETWEEN IONS</text>
  </g>

  <!-- CALLOUT TAG 2: PROPERTIES -->
  <g data-role="text-box" data-box="470 310 280 70">
    <path d="M 474 310 L 736 310 L 750 324 L 750 376 Q 750 380 746 380 L 474 380 Q 470 380 470 376 L 470 314 Q 470 310 474 310 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="735" cy="326" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="488" y="338" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">HIGH MELTING POINT</text>
    <text x="488" y="360" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">NEEDS MUCH HEAT TO BREAK</text>
  </g>

  <!-- POINTER FROM TAG TO LATTICE -->
  <path d="M 470 245 C 440 245, 410 240, 396 238" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t02-ionic-lattice-arrow)" />
</svg>

---

### 🔬 Physical Properties of Ionic Compounds Explained

| Physical Property | Observation | Explanation at Particle Level |
| :--- | :--- | :--- |
| **Melting & Boiling Points** | **Very High** (e.g. $\\ce{NaCl}$ m.p. is $801^\\circ\\text{C}$; $\\ce{MgO}$ is $2852^\\circ\\text{C}$) | The giant lattice is held by **many strong electrostatic attractions** between oppositely charged ions in all dimensions. Breaking these bonds requires a **large amount of thermal energy**. |
| **Electrical Conductivity (Solid)** | **Poor conductor / Insulator** | Ions are locked tightly into **fixed positions** within the regular lattice and **cannot move** to carry electric charge. |
| **Electrical Conductivity (Molten/Aqueous)** | **Good electrical conductor** | When melted or dissolved in water, the crystal lattice breaks down. The **ions become free to move** and migrate towards electrodes, carrying electrical current. |
| **Solubility** | Usually **soluble in water**, insoluble in non-polar organic solvents | Polar water molecules interact strongly with the charged ions, hydrating them and pulling them away from the lattice. |
| **Brittleness** | **Brittle** (shatters when struck with a hammer) | When a mechanical force is applied, layers of ions slide over each other. This brings **ions of like charge into direct alignment** (e.g. $\\ce{Na+}$ next to $\\ce{Na+}$), causing severe **electrostatic repulsion** that splits the crystal along cleavage planes. |

> [!WARNING]
> ### ⚠️ Crucial Examiner Report Trap: Ionic Conduction
> Candidates frequently lose marks by writing: *"Sodium chloride conducts electricity when molten because electrons are free to move."*
> **THIS IS INCORRECT AND SCORES ZERO MARKS.**
> - Metals conduct because of mobile **electrons**.
> - Molten ionic compounds conduct because **IONS are free to move**, NOT electrons! Always specify **mobile ions**.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-ion-q1',
          type: 'multiple_choice',
          question:
            'Why does solid magnesium oxide have a significantly higher melting point (2852 °C) than solid sodium chloride (801 °C)?',
          options: [
            'Magnesium oxide contains delocalised electrons.',
            'The electrostatic attractions between Mg2+ and O2- ions are stronger because the charges are 2+ and 2- compared to 1+ and 1- in NaCl.',
            'Oxygen has a smaller mass number than chlorine.',
            'Magnesium oxide forms covalent bonds rather than ionic bonds.',
          ],
          correctAnswer: 1,
          explanation:
            'Electrostatic force is proportional to the product of charges. In MgO, the ions have double charges (Mg2+ and O2-), creating much stronger electrostatic attractions between oppositely charged ions throughout the lattice than the singly charged Na+ and Cl- ions in NaCl.',
          misconceptionTarget: 'Thinking melting point is governed solely by atomic mass rather than ionic charge density',
        },
      ],
    },
    {
      tag: 'igcse-02-covalent-bonding',
      tags: ['covalent-bonding', 'dot-and-cross-diagrams', 'simple-molecules', 'intermolecular-forces'],
      title: '5. Simple Molecules & Covalent Bonding',
      summary:
        'Formation of covalent bonds by shared electron pairs, dot-and-cross diagrams of required molecules, and explaining low melting/boiling points via weak intermolecular forces.',
      content: `### 🤝 What is a Covalent Bond?

> [!NOTE]
> ### 🎯 Cambridge Syllabus Definition
> A **covalent bond** is formed when a **pair of electrons is shared between two non-metal atoms**.
> The shared pair of electrons is held in place by the **electrostatic attraction between the positive nuclei of both atoms and the shared negative electrons**.

Non-metal atoms share electrons to achieve a complete outer energy level (noble gas structure):
- **Single Covalent Bond**: $1$ shared pair of electrons ($2$ electrons shared, e.g. $\\ce{H-H}$, $\\ce{Cl-Cl}$, $\\ce{H-Cl}$).
- **Double Covalent Bond**: $2$ shared pairs of electrons ($4$ electrons shared, e.g. $\\ce{O=O}$, $\\ce{O=C=O}$).
- **Triple Covalent Bond**: $3$ shared pairs of electrons ($6$ electrons shared, e.g. $\\ce{N#N}$).

---

### ✏️ Dot-and-Cross Diagrams Required by Cambridge IGCSE (0620)

Candidates must be able to draw or deduce dot-and-cross representations showing outer shell electrons for the following key molecules:

#### 1. Diatomic Molecules
- **Hydrogen ($\\ce{H2}$)**:
  - Each $\\ce{H}$ atom shares $1$ electron to form $1$ single bond.
  - Both atoms achieve a stable duplet ($2$ electrons in shell 1): $\\ce{H-H}$.
- **Chlorine ($\\ce{Cl2}$)**:
  - Each $\\ce{Cl}$ atom ($2, 8, 7$) contributes $1$ electron to form $1$ shared pair.
  - Each chlorine atom retains $3$ non-bonding lone pairs ($6$ non-bonding electrons).
- **Oxygen ($\\ce{O2}$)**:
  - Each $\\ce{O}$ atom ($2, 6$) needs $2$ electrons; shares $2$ pairs of electrons ($4$ shared electrons in total).
  - Forms a **double covalent bond** ($\ce{O=O}$); each oxygen has $2$ lone pairs.
- **Nitrogen ($\\ce{N2}$)**:
  - Each $\\ce{N}$ atom ($2, 5$) needs $3$ electrons; shares $3$ pairs of electrons ($6$ shared electrons).
  - Forms a **triple covalent bond** ($\ce{N#N}$); each nitrogen has $1$ lone pair.

#### 2. Inorganic Hydrides & Halides
- **Hydrogen Chloride ($\\ce{HCl}$)**:
  - $1$ shared pair between $\\ce{H}$ and $\\ce{Cl}$. Chlorine retains $3$ lone pairs.
- **Water ($\\ce{H2O}$)**:
  - Central oxygen atom shares $1$ electron pair with each of two hydrogen atoms ($2$ single bonds).
  - Oxygen retains **$2$ unshared lone pairs** of electrons, giving water a bent (V-shaped) geometry.
- **Ammonia ($\\ce{NH3}$)**:
  - Central nitrogen atom forms $3$ single covalent bonds with three hydrogen atoms.
  - Nitrogen retains **$1$ unshared lone pair** of electrons, giving ammonia a trigonal pyramidal shape.

#### 3. Organic & Carbon Molecules
- **Methane ($\\ce{CH4}$)**:
  - Central carbon atom ($2, 4$) shares each of its $4$ outer electrons with a hydrogen atom ($4$ single $\\ce{C-H}$ bonds).
  - All $8$ outer valence positions of carbon are involved in bonding (tetrahedral shape).
- **Carbon Dioxide ($\\ce{CO2}$)**:
  - Central carbon atom forms **two double covalent bonds** with two oxygen atoms: $\\ce{O=C=O}$.
  - $4$ shared pairs in total ($8$ shared electrons). Each oxygen retains $2$ lone pairs.
- **Ethene ($\\ce{C2H4}$)**:
  - Double bond between carbon atoms ($\ce{C=C}$, $2$ shared pairs) and four single $\\ce{C-H}$ bonds.
- **Methanol ($\\ce{CH3OH}$)**:
  - Carbon bonded to $3$ hydrogens and $1$ oxygen; oxygen bonded to $1$ hydrogen and holding $2$ lone pairs.

### 🔍 Dot-and-Cross Covalent Bonding Models

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-dot-cross-covalent-title igcse-t02-dot-cross-covalent-desc" data-diagram="igcse-t02-dot-cross-covalent" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-dot-cross-covalent-title">Dot-and-cross diagrams of covalent molecules</title>
  <desc id="igcse-t02-dot-cross-covalent-desc">Outer shell dot-and-cross electron sharing representations of chlorine gas and water molecules.</desc>

  <!-- PANEL 1: CHLORINE MOLECULE Cl2 (x=40..380) -->
  <rect x="40" y="40" width="340" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Cl Atom 1 Outer Shell (cx=170, cy=150, r=65) -->
  <circle cx="170" cy="150" r="65" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
  <!-- Cl Atom 2 Outer Shell (cx=250, cy=150, r=65) -->
  <circle cx="250" cy="150" r="65" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />

  <!-- Intersection shared pair (at x=210) -->
  <!-- Electron from Cl-1: dot (circle r=4.5 fill=#1f2937) -->
  <circle cx="210" cy="138" r="4.5" fill="#1f2937" />
  <!-- Electron from Cl-2: cross (x=210, cy=162) -->
  <line x1="206" y1="158" x2="214" y2="166" stroke="#1f2937" stroke-width="2" stroke-linecap="round" />
  <line x1="214" y1="158" x2="206" y2="166" stroke="#1f2937" stroke-width="2" stroke-linecap="round" />

  <!-- Cl-1 non-bonding electrons (dots, fill=#1f2937, r=4) -->
  <!-- Top pair -->
  <circle cx="155" cy="94" r="4" fill="#1f2937" />
  <circle cx="175" cy="94" r="4" fill="#1f2937" />
  <!-- Left pair -->
  <circle cx="114" cy="140" r="4" fill="#1f2937" />
  <circle cx="114" cy="160" r="4" fill="#1f2937" />
  <!-- Bottom pair -->
  <circle cx="155" cy="206" r="4" fill="#1f2937" />
  <circle cx="175" cy="206" r="4" fill="#1f2937" />

  <!-- Cl-2 non-bonding electrons (crosses) -->
  <!-- Top pair -->
  <line x1="241" y1="90" x2="249" y2="98" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="249" y1="90" x2="241" y2="98" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="261" y1="90" x2="269" y2="98" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="269" y1="90" x2="261" y2="98" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <!-- Right pair -->
  <line x1="301" y1="136" x2="309" y2="144" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="309" y1="136" x2="301" y2="144" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="301" y1="156" x2="309" y2="164" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="309" y1="156" x2="301" y2="164" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <!-- Bottom pair -->
  <line x1="241" y1="202" x2="249" y2="210" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="249" y1="202" x2="241" y2="210" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="261" y1="202" x2="269" y2="210" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />
  <line x1="269" y1="202" x2="261" y2="210" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" />

  <!-- Label box 1 -->
  <g data-role="text-box" data-box="40 295 340 60">
    <rect x="40" y="295" width="340" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CHLORINE MOLECULE Cl₂</text>
    <text x="210" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">1 SHARED PAIR (SINGLE BOND)</text>
  </g>

  <!-- PANEL 2: WATER MOLECULE H2O (x=420..760) -->
  <rect x="420" y="40" width="340" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Oxygen Central Shell (cx=590, cy=160, r=60) -->
  <circle cx="590" cy="160" r="60" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <!-- Hydrogen Shell 1 (Left: cx=520, cy=180, r=38) -->
  <circle cx="520" cy="180" r="38" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
  <!-- Hydrogen Shell 2 (Right: cx=660, cy=180, r=38) -->
  <circle cx="660" cy="180" r="38" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />

  <!-- Left overlap (O-H bond 1): dot and cross -->
  <circle cx="546" cy="172" r="4" fill="#1f2937" />
  <line x1="544" y1="184" x2="552" y2="192" stroke="#1f2937" stroke-width="2" stroke-linecap="round" />
  <line x1="552" y1="184" x2="544" y2="192" stroke="#1f2937" stroke-width="2" stroke-linecap="round" />

  <!-- Right overlap (O-H bond 2): dot and cross -->
  <circle cx="634" cy="172" r="4" fill="#1f2937" />
  <line x1="628" y1="184" x2="636" y2="192" stroke="#1f2937" stroke-width="2" stroke-linecap="round" />
  <line x1="636" y1="184" x2="628" y2="192" stroke="#1f2937" stroke-width="2" stroke-linecap="round" />

  <!-- Oxygen 2 lone pairs at top (dots, r=4) -->
  <circle cx="580" cy="112" r="4" fill="#1f2937" />
  <circle cx="600" cy="112" r="4" fill="#1f2937" />
  <circle cx="572" cy="126" r="4" fill="#1f2937" />
  <circle cx="608" cy="126" r="4" fill="#1f2937" />

  <!-- Center labels for atoms -->
  <text x="590" y="166" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">O</text>
  <text x="504" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">H</text>
  <text x="676" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">H</text>

  <!-- Label box 2 -->
  <g data-role="text-box" data-box="420 295 340 60">
    <rect x="420" y="295" width="340" height="60" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="590" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">WATER MOLECULE H₂O</text>
    <text x="590" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2 BONDING PAIRS + 2 LONE PAIRS</text>
  </g>
</svg>

**Key Dot-and-Cross Rules**:
1. **Chlorine ($\ce{Cl2}$)**: Shares $1$ electron pair between two chlorine atoms, forming a single covalent bond. Each $\ce{Cl}$ atom retains $3$ non-bonding lone pairs ($6$ unshared electrons) to complete its octet.
2. **Water ($\ce{H2O}$)**: Central oxygen shares $1$ electron pair with each of two hydrogen atoms ($2$ single bonds) and retains **$2$ unshared lone pairs**.

---

### 🌐 Structure & Physical Properties of Simple Molecular Substances

Substances consisting of simple covalent molecules have distinct physical characteristics:

| Property | Observation | Particle Explanation |
| :--- | :--- | :--- |
| **Melting & Boiling Points** | **Low** (many are gases or liquids at room temperature, e.g. $\\ce{O2}$, $\\ce{CH4}$, $\\ce{H2O}$) | Within each molecule, the **covalent bonds are very strong**. However, between separate molecules there are only **weak intermolecular forces**. Very **little thermal energy** is required to overcome these weak intermolecular forces during melting or boiling. |
| **Electrical Conductivity** | **Non-conductors (Insulators)** in all states | Simple molecules are neutral and have **no overall electric charge**. There are **no mobile ions** and **no free delocalised electrons** to move and carry charge. |
| **Volatility** | **High** (evaporate readily) | Because intermolecular forces are weak, molecules at the liquid surface easily gain enough energy to escape into the gas phase. |
| **Solubility** | Generally **insoluble in water**, soluble in non-polar organic solvents | Most simple covalent molecules cannot form hydrogen bonds or electrostatic interactions with polar water molecules. |

> [!WARNING]
> ### ⚠️ Cambridge Examiner Warning: "Breaking Covalent Bonds"
> When explaining why water boils at $100^\\circ\\text{C}$ or why methane melts at $-182^\\circ\\text{C}$:
> - **DO NOT WRITE**: *"Covalent bonds are broken during boiling."* (This is completely incorrect; water vapor still contains intact $\\ce{H-O-H}$ molecules).
> - **CORRECT PHRASING**: *"Only the **weak intermolecular forces between molecules** are overcome; the strong covalent bonds within molecules remain completely intact."*`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-cov-q1',
          type: 'multiple_choice',
          question:
            'Why does carbon dioxide (CO2) have a very low boiling point (-78.5 °C) even though it contains very strong C=O double bonds?',
          options: [
            'The carbon and oxygen atoms break apart easily when heated.',
            'Only weak intermolecular forces between CO2 molecules need to be overcome when boiling.',
            'Carbon dioxide is an ionic compound that decomposes at room temperature.',
            'The double bonds in CO2 repel each other, driving molecules apart.',
          ],
          correctAnswer: 1,
          explanation:
            'In simple molecular substances, phase changes overcome the weak intermolecular forces between separate molecules, not the strong covalent bonds within the molecules. Minimal thermal energy is needed to separate the molecules.',
          misconceptionTarget: 'Believing that intramolecular covalent bonds break during phase changes',
        },
      ],
    },
    {
      tag: 'igcse-02-giant-covalent',
      tags: ['giant-covalent', 'macromolecules', 'diamond', 'graphite', 'silicon-dioxide'],
      title: '6. Giant Covalent (Macromolecular) Structures',
      summary:
        'Allotropes of carbon (diamond and graphite) and silicon(IV) oxide (silica), comparing structure, bonding, hardness, melting point, and electrical conductivity.',
      content: `### 💎 Giant Covalent Structures (Macromolecules)

Some non-metal substances do not exist as simple small molecules. Instead, they form **giant three-dimensional networks** of millions of atoms linked together by strong covalent bonds extending throughout the entire structure.

These substances are called **giant covalent substances** or **macromolecules**.

---

### 💎 Allotropes of Carbon: Diamond & Graphite

**Allotropes** are different structural forms of the same element in the same physical state. Carbon exhibits two key allotropes required by Cambridge: **Diamond** and **Graphite**.

#### 1. Diamond
- **Structure**:
  - Each carbon atom is covalently bonded to **$4$ other carbon atoms** in a rigid **tetrahedral** arrangement.
  - This regular tetrahedral pattern repeats continuously in three dimensions.
- **Properties & Explanations**:
  - **Extremely Hard**: The rigid 3D framework of millions of strong covalent bonds resists mechanical deformation. It is one of the hardest known natural substances.
  - **Very High Melting Point (approx. $3550^\\circ\\text{C}$)**: A huge amount of energy is required to break the extensive network of strong covalent bonds.
  - **Electrical Insulator**: All $4$ valence electrons of every carbon atom are held tightly in localized covalent bonds. There are **no delocalised electrons** or ions to move and carry charge.
- **Uses**: Drill tips, cutting tools for glass and stone, gemstone jewellery.

#### 2. Graphite
- **Structure**:
  - Each carbon atom is covalently bonded to **$3$ other carbon atoms** in flat, hexagonal rings.
  - This forms **layers (sheets)** of hexagonally arranged carbon atoms.
  - Between the layers, there are **weak intermolecular forces**.
  - The fourth valence electron from each carbon atom is **delocalised** and free to move throughout the layers.
- **Properties & Explanations**:
  - **Soft and Slippery**: The weak forces between layers allow them to easily **slide over one another** when a force is applied.
  - **Good Electrical Conductor**: The **delocalised electrons** are mobile along the layers and can drift when a potential difference is applied, carrying an electrical current.
  - **Very High Melting Point (approx. $3600^\\circ\\text{C}$)**: Within each layer, carbon atoms are held by very strong covalent bonds requiring vast thermal energy to break.
- **Uses**: Lubricant for machinery operating at high temperatures, pencil "lead", electrodes for electrolysis.

---

### 🪨 Silicon(IV) Oxide (Silica, $\\ce{SiO2}$)

Silicon(IV) oxide is the primary component of quartz and sand.
- **Structure**:
  - Each **silicon atom** is covalently bonded to **$4$ oxygen atoms** in a tetrahedral arrangement.
  - Each **oxygen atom** is covalently bonded to **$2$ silicon atoms**.
  - The empirical formula is $\\ce{SiO2}$ (ratio of $1$ silicon atom to $2$ oxygen atoms).
- **Comparison to Diamond**:
  - Silica has a giant covalent tetrahedral structure very similar to diamond.
  - **Properties**: Very hard, extremely high melting point (approx. $1700^\\circ\\text{C}$), non-conductor of electricity (all valence electrons localized in bonds).
  - **Uses**: Refractory linings for industrial furnaces, glass manufacture.

---

### 🔍 Macromolecular Allotropes: Diamond vs Graphite

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-diamond-graphite-title igcse-t02-diamond-graphite-desc" data-diagram="igcse-t02-diamond-graphite" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-diamond-graphite-title">Structures of diamond and graphite allotropes</title>
  <desc id="igcse-t02-diamond-graphite-desc">Comparison of tetrahedral 3D diamond lattice with layered hexagonal graphite sheets and delocalised electrons.</desc>

  <!-- PANEL 1: DIAMOND (x=40..380) -->
  <rect x="40" y="40" width="340" height="260" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Diamond Tetrahedral Network -->
  <!-- Bonds (lines, stroke #1f2937, width 2) -->
  <!-- Central top node (210, 90) connects to 3 lower nodes + 1 above -->
  <line x1="210" y1="90" x2="160" y2="150" stroke="#1f2937" stroke-width="2" />
  <line x1="210" y1="90" x2="260" y2="150" stroke="#1f2937" stroke-width="2" />
  <line x1="210" y1="90" x2="210" y2="165" stroke="#1f2937" stroke-width="2" />

  <!-- Node (160, 150) connects downward -->
  <line x1="160" y1="150" x2="120" y2="220" stroke="#1f2937" stroke-width="2" />
  <line x1="160" y1="150" x2="175" y2="230" stroke="#1f2937" stroke-width="2" />

  <!-- Node (260, 150) connects downward -->
  <line x1="260" y1="150" x2="245" y2="230" stroke="#1f2937" stroke-width="2" />
  <line x1="260" y1="150" x2="300" y2="220" stroke="#1f2937" stroke-width="2" />

  <!-- Node (210, 165) connects downward -->
  <line x1="210" y1="165" x2="210" y2="245" stroke="#1f2937" stroke-width="2" />

  <!-- Horizontal cross links in lattice -->
  <line x1="120" y1="220" x2="175" y2="230" stroke="#1f2937" stroke-width="2" />
  <line x1="175" y1="230" x2="210" y2="245" stroke="#1f2937" stroke-width="2" />
  <line x1="210" y1="245" x2="245" y2="230" stroke="#1f2937" stroke-width="2" />
  <line x1="245" y1="230" x2="300" y2="220" stroke="#1f2937" stroke-width="2" />

  <!-- Carbon Atoms in Diamond (circles, fill=#cfd4d9, stroke=#1f2937, r=9) -->
  <circle cx="210" cy="90" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="160" cy="150" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="260" cy="150" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="210" cy="165" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="120" cy="220" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="175" cy="230" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="210" cy="245" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="245" cy="230" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="300" cy="220" r="9" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Label box Diamond -->
  <g data-role="text-box" data-box="40 315 340 64">
    <rect x="40" y="315" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">DIAMOND (3D NETWORK)</text>
    <text x="210" y="360" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">4 BONDS PER C (RIGID, HARD)</text>
  </g>

  <!-- PANEL 2: GRAPHITE (x=420..760) -->
  <rect x="420" y="40" width="340" height="260" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Layer 1 (Top: y ~ 100) -->
  <!-- Hexagon 1 -->
  <line x1="470" y1="110" x2="505" y2="90" stroke="#1f2937" stroke-width="2" />
  <line x1="505" y1="90" x2="550" y2="90" stroke="#1f2937" stroke-width="2" />
  <line x1="550" y1="90" x2="585" y2="110" stroke="#1f2937" stroke-width="2" />
  <line x1="585" y1="110" x2="550" y2="130" stroke="#1f2937" stroke-width="2" />
  <line x1="550" y1="130" x2="505" y2="130" stroke="#1f2937" stroke-width="2" />
  <line x1="505" y1="130" x2="470" y2="110" stroke="#1f2937" stroke-width="2" />

  <!-- Hexagon 2 attached to right -->
  <line x1="585" y1="110" x2="630" y2="110" stroke="#1f2937" stroke-width="2" />
  <line x1="630" y1="110" x2="665" y2="90" stroke="#1f2937" stroke-width="2" />
  <line x1="665" y1="90" x2="710" y2="90" stroke="#1f2937" stroke-width="2" />
  <line x1="630" y1="110" x2="665" y2="130" stroke="#1f2937" stroke-width="2" />
  <line x1="665" y1="130" x2="710" y2="130" stroke="#1f2937" stroke-width="2" />

  <!-- Layer 1 atoms -->
  <circle cx="470" cy="110" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="505" cy="90" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="550" cy="90" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="585" cy="110" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="505" cy="130" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="550" cy="130" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="630" cy="110" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="665" cy="90" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="710" cy="90" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="665" cy="130" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="710" cy="130" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Weak forces between layers (vertical dashed lines) -->
  <line x1="505" y1="130" x2="505" y2="210" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3 3" />
  <line x1="550" y1="130" x2="550" y2="210" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3 3" />
  <line x1="630" y1="110" x2="630" y2="190" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3 3" />
  <line x1="665" y1="130" x2="665" y2="210" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3 3" />

  <!-- Delocalised electrons in gap (#fde58a) -->
  <circle cx="528" cy="165" r="4" fill="#fde58a" stroke="#1f2937" stroke-width="1" />
  <circle cx="605" cy="155" r="4" fill="#fde58a" stroke="#1f2937" stroke-width="1" />
  <circle cx="650" cy="170" r="4" fill="#fde58a" stroke="#1f2937" stroke-width="1" />

  <!-- Layer 2 (Bottom: y ~ 180) -->
  <line x1="470" y1="190" x2="505" y2="170" stroke="#1f2937" stroke-width="2" />
  <line x1="505" y1="170" x2="550" y2="170" stroke="#1f2937" stroke-width="2" />
  <line x1="550" y1="170" x2="585" y2="190" stroke="#1f2937" stroke-width="2" />
  <line x1="585" y1="190" x2="550" y2="210" stroke="#1f2937" stroke-width="2" />
  <line x1="550" y1="210" x2="505" y2="210" stroke="#1f2937" stroke-width="2" />
  <line x1="505" y1="210" x2="470" y2="190" stroke="#1f2937" stroke-width="2" />
  <line x1="585" y1="190" x2="630" y2="190" stroke="#1f2937" stroke-width="2" />
  <line x1="630" y1="190" x2="665" y2="170" stroke="#1f2937" stroke-width="2" />
  <line x1="665" y1="170" x2="710" y2="170" stroke="#1f2937" stroke-width="2" />
  <line x1="630" y1="190" x2="665" y2="210" stroke="#1f2937" stroke-width="2" />
  <line x1="665" y1="210" x2="710" y2="210" stroke="#1f2937" stroke-width="2" />

  <!-- Layer 2 atoms -->
  <circle cx="470" cy="190" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="505" cy="170" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="550" cy="170" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="585" cy="190" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="505" cy="210" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="550" cy="210" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="630" cy="190" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="665" cy="170" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="710" cy="170" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="665" cy="210" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="710" cy="210" r="7" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Label box Graphite -->
  <g data-role="text-box" data-box="420 315 340 64">
    <rect x="420" y="315" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="590" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GRAPHITE (HEXAGONAL LAYERS)</text>
    <text x="590" y="360" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">3 BONDS PER C (SLIPPERY, CONDUCTS)</text>
  </g>
</svg>

**Structural Distinction**:
1. **Diamond**: Rigid 3D tetrahedral network where each carbon forms 4 strong covalent bonds. Extremely hard, electrical insulator.
2. **Graphite**: Hexagonal planar layers where each carbon forms 3 bonds, with delocalised electrons moving freely between layers and allowing layers to slide easily.

---

### 📊 Comparative Master Table: Diamond, Graphite & $\\ce{SiO2}$

| Substance | Bonding per Atom | Structure Type | Melting Point | Hardness | Electrical Conductivity | Typical Uses |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Diamond** | Each $\\ce{C}$ bonded to **$4$** $\\ce{C}$ atoms | 3D tetrahedral network | Extremely high ($>3500^\\circ\\text{C}$) | Extremely hard | **None** (insulator) | Cutting tools, drill bits, jewellery |
| **Graphite** | Each $\\ce{C}$ bonded to **$3$** $\\ce{C}$ atoms | 2D hexagonal layers with delocalised $e^-$ | Extremely high ($>3600^\\circ\\text{C}$) | Soft & slippery | **Good conductor** | Electrodes, high-temp lubricant, pencils |
| **Silicon(IV) Oxide** | Each $\\ce{Si}$ to $4$ $\\ce{O}$; each $\\ce{O}$ to $2$ $\\ce{Si}$ | 3D tetrahedral macromolecule | Very high ($>1700^\\circ\\text{C}$) | Very hard | **None** (insulator) | Furnace brick linings, sand paper, glass |`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-giant-q1',
          type: 'multiple_choice',
          question:
            'Which statement correctly explains why graphite conducts electricity while diamond does not?',
          options: [
            'Graphite contains mobile positive ions, whereas diamond contains only neutral atoms.',
            'Each carbon in graphite only bonds to 3 others, leaving one delocalised electron per atom free to move along layers.',
            'Graphite has weak intermolecular forces between layers that carry electric current.',
            'Diamond has an open structure allowing air to insulate it against electrical current.',
          ],
          correctAnswer: 1,
          explanation:
            'In graphite, each carbon atom uses only 3 of its 4 valence electrons to form covalent bonds with neighbors. The 4th electron is delocalised and free to move throughout the sheet, conducting electricity. In diamond, all 4 valence electrons are locked into localized covalent bonds.',
          misconceptionTarget: 'Confusing weak forces between layers with charge carriers',
        },
      ],
    },
    {
      tag: 'igcse-02-metallic-bonding',
      tags: ['metallic-bonding', 'delocalised-electrons', 'malleability', 'ductility', 'alloys'],
      title: '7. Metallic Bonding & Alloys',
      summary:
        'Lattice of positive metal ions in a sea of delocalised electrons, explaining electrical/thermal conductivity, malleability, ductility, and why alloys are harder than pure metals.',
      content: `### 🪙 What is Metallic Bonding?

> [!NOTE]
> ### 🎯 Cambridge Syllabus Definition
> **Metallic bonding** is the **strong electrostatic attraction between a regular lattice of positive metal ions (cations) and a "sea" of mobile, delocalised electrons**.

In pure metals:
- Metal atoms lose their outer valence electrons to form a **regular, closely packed lattice of positive cations**.
- The released valence electrons no longer belong to any single atom; they form a mobile **sea of delocalised electrons** that move freely throughout the entire structure.

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-metallic-lattice-title igcse-t02-metallic-lattice-desc" data-diagram="igcse-t02-metallic-lattice" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-metallic-lattice-title">Giant metallic lattice and delocalised electrons</title>
  <desc id="igcse-t02-metallic-lattice-desc">Regular rows of positive metal cations surrounded by a sea of mobile delocalised electrons that conduct electricity.</desc>
  <defs>
    <marker id="igcse-t02-metallic-lattice-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- LATTICE CONTAINER PANEL -->
  <rect x="50" y="60" width="380" height="300" rx="10" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- METAL CATIONS: 3 rows x 5 cols, r16, fill=#cfd4d9 (grey metal) -->
  <g data-role="particle-region" data-bounds="60 70 420 350" stroke="#1f2937" stroke-width="1.5">
    <!-- Row 1 cations (y=110) -->
    <circle cx="100" cy="110" r="16" fill="#cfd4d9" />
    <circle cx="170" cy="110" r="16" fill="#cfd4d9" />
    <circle cx="240" cy="110" r="16" fill="#cfd4d9" />
    <circle cx="310" cy="110" r="16" fill="#cfd4d9" />
    <circle cx="380" cy="110" r="16" fill="#cfd4d9" />

    <!-- Delocalised electrons in spaces (r8, fill=#fde58a) -->
    <circle cx="135" cy="110" r="8" fill="#fde58a" />
    <circle cx="205" cy="110" r="8" fill="#fde58a" />
    <circle cx="275" cy="110" r="8" fill="#fde58a" />
    <circle cx="345" cy="110" r="8" fill="#fde58a" />

    <!-- Between row 1 and 2 electrons -->
    <circle cx="100" cy="155" r="8" fill="#fde58a" />
    <circle cx="170" cy="155" r="8" fill="#fde58a" />
    <circle cx="240" cy="155" r="8" fill="#fde58a" />
    <circle cx="310" cy="155" r="8" fill="#fde58a" />
    <circle cx="380" cy="155" r="8" fill="#fde58a" />

    <!-- Row 2 cations (y=200) -->
    <circle cx="100" cy="200" r="16" fill="#cfd4d9" />
    <circle cx="170" cy="200" r="16" fill="#cfd4d9" />
    <circle cx="240" cy="200" r="16" fill="#cfd4d9" />
    <circle cx="310" cy="200" r="16" fill="#cfd4d9" />
    <circle cx="380" cy="200" r="16" fill="#cfd4d9" />

    <!-- Between row 2 and 3 electrons -->
    <circle cx="135" cy="245" r="8" fill="#fde58a" />
    <circle cx="205" cy="245" r="8" fill="#fde58a" />
    <circle cx="275" cy="245" r="8" fill="#fde58a" />
    <circle cx="345" cy="245" r="8" fill="#fde58a" />

    <!-- Row 3 cations (y=290) -->
    <circle cx="100" cy="290" r="16" fill="#cfd4d9" />
    <circle cx="170" cy="290" r="16" fill="#cfd4d9" />
    <circle cx="240" cy="290" r="16" fill="#cfd4d9" />
    <circle cx="310" cy="290" r="16" fill="#cfd4d9" />
    <circle cx="380" cy="290" r="16" fill="#cfd4d9" />

    <!-- Row 3 side electrons -->
    <circle cx="135" cy="290" r="8" fill="#fde58a" />
    <circle cx="205" cy="290" r="8" fill="#fde58a" />
    <circle cx="275" cy="290" r="8" fill="#fde58a" />
    <circle cx="345" cy="290" r="8" fill="#fde58a" />
  </g>

  <!-- KEY / LEGEND BOX TOP RIGHT -->
  <g data-role="text-box" data-box="470 60 280 120">
    <rect x="470" y="60" width="280" height="120" rx="8" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <circle cx="495" cy="95" r="16" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
    <text x="522" y="100" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">POSITIVE METAL CATION</text>
    <circle cx="495" cy="145" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="522" y="150" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">DELOCALISED ELECTRON</text>
  </g>

  <!-- CALLOUT TAG 1: ELECTRICAL CONDUCTION -->
  <g data-role="text-box" data-box="470 210 280 70">
    <path d="M 474 210 L 736 210 L 750 224 L 750 276 Q 750 280 746 280 L 474 280 Q 470 280 470 276 L 470 214 Q 470 210 474 210 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="735" cy="226" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="488" y="238" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">DELOCALISED ELECTRONS</text>
    <text x="488" y="260" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MOVE AND CARRY CHARGE</text>
  </g>

  <!-- CALLOUT TAG 2: MALLEABILITY -->
  <g data-role="text-box" data-box="470 310 280 70">
    <path d="M 474 310 L 736 310 L 750 324 L 750 376 Q 750 380 746 380 L 474 380 Q 470 380 470 376 L 470 314 Q 470 310 474 310 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="735" cy="326" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="488" y="338" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">LAYERS OF IONS SLIDE</text>
    <text x="488" y="360" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MAKING METALS MALLEABLE</text>
  </g>

  <!-- POINTER FROM TAG TO LATTICE -->
  <path d="M 470 245 C 440 245, 410 240, 396 238" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t02-metallic-lattice-arrow)" />
</svg>

---

### ⚙️ Explaining the Properties of Metals

| Property | Particle Explanation |
| :--- | :--- |
| **High Electrical Conductivity** | The **delocalised electrons are mobile** and free to move throughout the structure when a voltage is applied, carrying electrical current. |
| **High Thermal Conductivity** | Mobile delocalised electrons rapidly transfer kinetic energy through the lattice; closely packed positive ions also transfer vibrations efficiently. |
| **Malleability & Ductility** | In pure metals, the positive ions are arranged in **regular layers of identical size**. When hammered (malleable) or drawn into wires (ductile), the **layers can slide past one another** without shattering because the delocalised electron sea moves with them, maintaining the non-directional metallic bond. |
| **High Melting & Boiling Points** | The **strong electrostatic attractions** between the positive metal ions and the delocalised electrons require large amounts of thermal energy to overcome. |

---

### 🔩 What is an Alloy?

An **alloy** is a **mixture of a metal with one or more other elements** (which may be other metals or non-metals like carbon).

#### Common Examples of Alloys:
- **Brass**: Copper ($\\sim 70\\%$) and Zinc ($\\sim 30\\%$). More corrosion resistant and acoustically resonant than pure copper (used in musical instruments, plumbing fittings).
- **Bronze**: Copper and Tin. Harder and more durable than pure copper (used in statues, medals).
- **Steel**: Iron with small amounts of Carbon ($0.2\\% - 1.5\\%$). Far stronger and harder than pure iron (used in construction girders, bridges, car bodies).
- **Stainless Steel**: Iron mixed with Chromium and Nickel. Resists corrosion and rusting (used in cutlery, surgical instruments).

---

### 🛡️ Why are Alloys Harder and Stronger than Pure Metals?

> [!IMPORTANT]
> ### 🎯 Core Cambridge Exam Concept (Frequently Examined on Paper 4)
> 1. In a **pure metal**, all atoms (ions) are of the **same size** and arranged in neat, uniform layers. These regular layers **slide easily** over one another when a force is applied, making pure metals relatively soft.
> 2. In an **alloy**, the added element has atoms of a **different size**.
> 3. These different sized atoms **distort and disrupt the regular layered arrangement** of the metal lattice.
> 4. As a result, it is **much more difficult for the layers of ions to slide past one another**, making the alloy significantly **harder and stronger**.

### 🔍 Lattice Structure: Pure Metal vs Alloy

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t02-pure-vs-alloy-title igcse-t02-pure-vs-alloy-desc" data-diagram="igcse-t02-pure-vs-alloy" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t02-pure-vs-alloy-title">Comparison of pure metal lattice and alloy lattice</title>
  <desc id="igcse-t02-pure-vs-alloy-desc">Diagram showing regular sliding layers in pure metals versus disrupted lattice structure in alloys preventing sliding.</desc>
  <defs>
    <marker id="igcse-t02-pure-vs-alloy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- PANEL 1: PURE METAL (x=40..380) -->
  <rect x="40" y="40" width="340" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Pure Metal Grid: 3 rows x 6 columns (identical r=15, fill=#cfd4d9) -->
  <!-- Force arrow sliding top layer -->
  <line x1="75" y1="70" x2="160" y2="70" stroke="#1f2937" stroke-width="2.5" marker-end="url(#igcse-t02-pure-vs-alloy-arrow)" />
  <text x="120" y="60" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">FORCE</text>

  <!-- Row 1 (y=110, shifted slightly to show sliding) -->
  <g stroke="#1f2937" stroke-width="1.5" fill="#cfd4d9">
    <circle cx="115" cy="110" r="15" />
    <circle cx="150" cy="110" r="15" />
    <circle cx="185" cy="110" r="15" />
    <circle cx="220" cy="110" r="15" />
    <circle cx="255" cy="110" r="15" />
    <circle cx="290" cy="110" r="15" />

    <!-- Row 2 (y=155) -->
    <circle cx="95" cy="155" r="15" />
    <circle cx="130" cy="155" r="15" />
    <circle cx="165" cy="155" r="15" />
    <circle cx="200" cy="155" r="15" />
    <circle cx="235" cy="155" r="15" />
    <circle cx="270" cy="155" r="15" />

    <!-- Row 3 (y=200) -->
    <circle cx="95" cy="200" r="15" />
    <circle cx="130" cy="200" r="15" />
    <circle cx="165" cy="200" r="15" />
    <circle cx="200" cy="200" r="15" />
    <circle cx="235" cy="200" r="15" />
    <circle cx="270" cy="200" r="15" />
  </g>

  <!-- Sliding indicator line between row 1 and 2 -->
  <line x1="80" y1="132" x2="320" y2="132" stroke="#4b5563" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Label box 1 -->
  <g data-role="text-box" data-box="40 295 340 64">
    <rect x="40" y="295" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="210" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PURE METAL (UNIFORM ATOMS)</text>
    <text x="210" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">LAYERS SLIDE EASILY (MALLEABLE)</text>
  </g>

  <!-- PANEL 2: ALLOY (x=420..760) -->
  <rect x="420" y="40" width="340" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Force arrow blocked -->
  <line x1="455" y1="70" x2="540" y2="70" stroke="#1f2937" stroke-width="2.5" marker-end="url(#igcse-t02-pure-vs-alloy-arrow)" />
  <text x="500" y="60" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">FORCE</text>

  <!-- Alloy Grid: Host metal atoms (r=15, #cfd4d9) + Larger additive atoms (r=19, #fcc68b) -->
  <!-- Row 1 (y=110) -->
  <circle cx="475" cy="110" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="510" cy="106" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <!-- Larger atom 1 -->
  <circle cx="552" cy="103" r="19" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="594" cy="107" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="629" cy="110" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="664" cy="110" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Row 2 (y=155, pushed down around large atom) -->
  <circle cx="475" cy="155" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="510" cy="153" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="548" cy="158" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <!-- Larger atom 2 in row 2 -->
  <circle cx="592" cy="154" r="19" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="634" cy="155" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="669" cy="155" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Row 3 (y=200) -->
  <circle cx="475" cy="200" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="510" cy="200" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="548" cy="202" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="586" cy="204" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="624" cy="202" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="662" cy="200" r="15" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Disrupted boundary line showing lock -->
  <path d="M 460 133 L 530 131 L 552 125 L 575 133 L 680 133" fill="none" stroke="#d64545" stroke-width="2" stroke-dasharray="3 3" />

  <!-- Label box 2 -->
  <g data-role="text-box" data-box="420 295 340 64">
    <rect x="420" y="295" width="340" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="590" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ALLOY (DIFFERENT SIZED ATOMS)</text>
    <text x="590" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">LAYERS CANNOT SLIDE (HARD &amp; STRONG)</text>
  </g>
</svg>

**Mechanism Explained**:
1. **Pure Metal**: Neat, regular layers of identical ions slide smoothly over one another when stress is applied, making pure metals malleable and ductile.
2. **Alloy**: Atoms of different sizes distort the lattice rows, locking the layers in place and preventing them from sliding, making the alloy much harder and stronger.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-02-metal-q1',
          type: 'multiple_choice',
          question: 'Why are alloys such as brass harder than pure metals such as pure copper?',
          options: [
            'Different sized atoms disrupt the regular lattice layers, preventing them from sliding easily',
            'Alloys contain stronger ionic bonds between different metal atoms',
            'Alloys have no delocalised electrons, making the bonds rigid',
            'Pure metals contain air gaps between the atoms that compress easily',
          ],
          correctAnswer: 0,
          explanation: 'In pure metals, regular uniform rows of ions slide easily past one another. In alloys, differently sized atoms disrupt this regular lattice arrangement, hindering layers from sliding and making the material harder and stronger.',
          misconceptionTarget: 'Believing alloys form ionic bonds or lack delocalised electrons',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-02-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme'],
      title: '8. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Detailed step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Structured Theory) questions on atomic structure, bonding, and properties.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
An ion of element X has the symbol $^{25}_{12}\\text{X}^{2+}$.
Which statement about this ion is correct?
- **A**: It has 12 protons, 13 neutrons, and 10 electrons.
- **B**: It has 12 protons, 12 neutrons, and 12 electrons.
- **C**: It has 10 protons, 13 neutrons, and 10 electrons.
- **D**: It has 12 protons, 25 neutrons, and 10 electrons.

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: A**
> - **Reasoning**:
>   1. Atomic number is $12 \\implies$ Element X is Magnesium ($\\ce{Mg}$), which always has $12$ protons. (Eliminates C).
>   2. Neutrons $= \\text{Mass number} - \\text{Atomic number} = 25 - 12 = 13$ neutrons. (Eliminates B and D).
>   3. With atomic number $12$, its neutral atom has $12$ electrons ($2, 8, 2$). To form a stable ion, it loses $2$ valence electrons to achieve an octet ($2, 8$), carrying a $+2$ charge and leaving $10$ electrons.

---

### 📝 Question 2 (Paper 2 Multiple Choice — 1 Mark)
Which substance has a giant covalent structure and conducts electricity?

- **A**: Diamond
- **B**: Graphite
- **C**: Silicon(IV) oxide
- **D**: Sodium chloride

> [!TIP]
> ### 💡 Mark Scheme & Distractor Analysis
> - **Correct Answer: B (Graphite)**
> - **Distractor Analysis**:
>   - **Diamond (A)**: Giant covalent, but does **not** conduct electricity (all 4 valence electrons locked in covalent bonds).
>   - **Silicon(IV) oxide (C)**: Giant covalent, but does **not** conduct electricity (insulator).
>   - **Sodium chloride (D)**: Conducts electricity when molten or aqueous, but has a **giant ionic** structure, NOT giant covalent!

---

### 📝 Question 3 (Paper 4 Structured Theory — 5 Marks)
Lithium reacts with fluorine to form lithium fluoride, $\\ce{LiF}$.

**(a) Describe, in terms of electrons, what happens when a lithium atom reacts with a fluorine atom. [3]**
> **Mark Scheme**:
> - **Mark 1**: Lithium loses one electron (to form $\\ce{Li+}$).
> - **Mark 2**: Fluorine gains one electron (to form $\\ce{F-}$).
> - **Mark 3**: Both atoms achieve a full outer electron shell (noble gas configuration / duplet for $\\ce{Li+}$, octet for $\\ce{F-}$).

**(b) Explain why solid lithium fluoride has a very high melting point. [2]**
> **Mark Scheme**:
> - **Mark 1**: Giant ionic lattice with **strong electrostatic attractions** between oppositely charged ions ($\\ce{Li+}$ and $\\ce{F-}$).
> - **Mark 2**: Requires a **large amount of energy** to overcome/break these strong bonds.

---

### 📝 Question 4 (Paper 4 Structured Theory — 4 Marks)
Pure copper is ductile and can be drawn into electrical wires. Brass is an alloy of copper and zinc.

**(a) Explain why pure copper is ductile. [2]**
> **Mark Scheme**:
> - **Mark 1**: Copper cations are arranged in **regular layers / rows**.
> - **Mark 2**: Layers of ions can **slide past each other** when a force is applied.

**(b) Explain why brass is harder and less ductile than pure copper. [2]**
> **Mark Scheme**:
> - **Mark 1**: Zinc atoms are of a **different size** to copper atoms.
> - **Mark 2**: This **disrupts the regular layers**, making it harder for the layers to slide over each other.`,
    },
  ],
};
