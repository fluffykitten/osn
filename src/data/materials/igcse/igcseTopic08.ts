/**
 * igcseTopic08.ts
 * Topic 8: The Periodic Table
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_8: MaterialItem = {
  id: 208,
  topic_number: 8,
  title: 'The Periodic Table',
  slug: 'the-periodic-table',
  category: 'Inorganic Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 38,
  summary:
    'Comprehensive study of the Periodic Table arrangement, Group I alkali metals trends and reactions, Group VII halogens physical properties and displacement reactions, transition elements characteristics, and Group VIII / 0 noble gases stability and applications.',
  allTags: [
    'igcse-08-periodic-table-arrangement',
    'igcse-08-group-1-physical-trends',
    'igcse-08-group-1-chemical-reactivity',
    'igcse-08-group-7-physical-trends',
    'igcse-08-group-7-displacement-reactions',
    'igcse-08-transition-elements',
    'igcse-08-noble-gases',
    'igcse-08-exam-practice',
    'the-periodic-table',
    'groups-and-periods',
    'valence-electrons',
    'electron-shells',
    'metallic-character',
    'period-3-trend',
    'alkali-metals',
    'group-1-metals',
    'lithium',
    'sodium',
    'potassium',
    'reactivity-trend-group-1',
    'electron-shielding',
    'atomic-radius',
    'halogens',
    'group-7-halogens',
    'fluorine',
    'chlorine',
    'bromine',
    'iodine',
    'halogen-displacement',
    'net-ionic-equations',
    'redox-in-displacement',
    'transition-elements',
    'variable-oxidation-states',
    'coloured-compounds',
    'catalysts',
    'noble-gases',
    'group-0-gases',
    'inert-gases',
    'helium-balloons',
    'argon-welding',
  ],
  prerequisites: [
    {
      tag: 'igcse-08-periodic-table-arrangement',
      tags: [
        'the-periodic-table',
        'groups-and-periods',
        'valence-electrons',
        'electron-shells',
        'metallic-character',
        'period-3-trend',
      ],
      title: '1. Arrangement of Elements & Periodic Trends across Periods and Groups',
      summary:
        'Understanding how elements are arranged in order of proton number, defining groups and periods, identifying the metallic-to-non-metallic transition, and examining Period 3 property trends.',
      content: `### 🧭 Architecture of the Modern Periodic Table

The **Periodic Table** is a tabular arrangement of all known chemical elements organized by increasing proton (atomic) number:

1. **Groups (Vertical Columns)**:
   - Numbered from Group I to Group VII, and Group VIII (or Group 0) for noble gases.
   - Elements in the same group possess the **same number of outer-shell (valence) electrons** (e.g. Group I elements have $1$ valence electron, Group VII elements have $7$).
   - Because chemical reactions involve the exchange or sharing of valence electrons, elements in the same group share **similar chemical properties**.

2. **Periods (Horizontal Rows)**:
   - Numbered from **Period 1 to Period 7**.
   - The period number indicates the **total number of occupied electron shells** (e.g. sodium has electron configuration $2,8,1$ $\\to$ 3 shells $\\to$ Period 3).

3. **Metallic vs Non-Metallic Transition**:
   - **Metals** occupy the left-hand side and center of the table (Groups I, II, and transition metals). They tend to **lose electrons** to form positive cations.
   - **Non-metals** occupy the upper right-hand side. They tend to **gain or share electrons** to form negative anions or covalent bonds.
   - A **diagonal staircase line** (including metalloids such as boron, silicon, and germanium) separates metals from non-metals.

<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-periodic-table-overview-title igcse-t08-periodic-table-overview-desc" data-diagram="igcse-t08-periodic-table-overview" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-periodic-table-overview-title">The Periodic Table Structure, Groups, Periods and Metallic Trends</title>
  <desc id="igcse-t08-periodic-table-overview-desc">Overview of the Periodic Table showing groups as columns, periods as rows, the dividing line between metals and non-metals, and Period 3 property trends.</desc>
  <defs>
    <marker id="igcse-t08-periodic-table-overview-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">THE PERIODIC TABLE: GROUPS, PERIODS &amp; METALLIC TRENDS</text>
  </g>
  <g data-role="text-box" data-box="24 74 366 60">
    <rect x="24" y="74" width="366" height="60" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="207" y="97" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GROUPS: VERTICAL COLUMNS</text>
    <text x="207" y="117" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">SAME NUMBER OF VALENCE ELECTRONS</text>
  </g>
  <g data-role="text-box" data-box="410 74 366 60">
    <rect x="410" y="74" width="366" height="60" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="593" y="97" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PERIODS: HORIZONTAL ROWS</text>
    <text x="593" y="117" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">SAME NUMBER OF OCCUPIED SHELLS</text>
  </g>
  <g data-role="text-box" data-box="24 144 236 136">
    <rect x="24" y="144" width="236" height="136" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
    <text x="142" y="168" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GROUPS I &amp; II</text>
    <text x="142" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">REACTIVE METALS</text>
    <text x="142" y="214" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">FORM +1 AND +2 IONS</text>
    <text x="142" y="236" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">BASIC METAL OXIDES</text>
    <text x="142" y="258" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Na, K, Mg, Ca</text>
  </g>
  <g data-role="text-box" data-box="274 144 252 136">
    <rect x="274" y="144" width="252" height="136" rx="6" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
    <text x="400" y="168" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TRANSITION METALS</text>
    <text x="400" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">CENTRAL D-BLOCK ELEMENTS</text>
    <text x="400" y="214" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HIGH DENSITY &amp; HIGH M.P.</text>
    <text x="400" y="236" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">VARIABLE OXIDATION STATES</text>
    <text x="400" y="258" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COLOURED IONS &amp; CATALYSTS</text>
  </g>
  <g data-role="text-box" data-box="540 144 236 136">
    <rect x="540" y="144" width="236" height="136" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="658" y="168" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">NON-METALS &amp; GASES</text>
    <text x="658" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">GROUPS VII &amp; VIII / 0</text>
    <text x="658" y="214" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HALOGENS (F, Cl, Br, I)</text>
    <text x="658" y="236" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FORM ACIDIC OXIDES</text>
    <text x="658" y="258" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">NOBLE GASES ARE INERT</text>
  </g>
  <rect x="24" y="292" width="752" height="150" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="292" width="752" height="34" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PERIOD 3 TREND ACROSS: METALLIC TO NON-METALLIC CHARACTER</text>
  <g data-role="text-box" data-box="36 334 226 98">
    <rect x="36" y="334" width="226" height="98" rx="6" fill="#8fd3ef" stroke="#4b5563" stroke-width="1.5" />
    <text x="149" y="357" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Na, Mg, Al</text>
    <text x="149" y="378" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">GIANT METALLIC LATTICE</text>
    <text x="149" y="397" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">GOOD CONDUCTORS</text>
    <text x="149" y="416" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">BASIC OXIDES</text>
  </g>
  <g data-role="text-box" data-box="280 334 226 98">
    <rect x="280" y="334" width="226" height="98" rx="6" fill="#fde58a" stroke="#4b5563" stroke-width="1.5" />
    <text x="393" y="357" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Si (SILICON)</text>
    <text x="393" y="378" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SEMICONDUCTOR</text>
    <text x="393" y="397" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">GIANT COVALENT</text>
    <text x="393" y="416" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">WEAKLY ACIDIC OXIDE</text>
  </g>
  <g data-role="text-box" data-box="524 334 240 98">
    <rect x="524" y="334" width="240" height="98" rx="6" fill="#f5a3a3" stroke="#4b5563" stroke-width="1.5" />
    <text x="644" y="357" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">P, S, Cl, Ar</text>
    <text x="644" y="378" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">NON-METALS &amp; GASES</text>
    <text x="644" y="397" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">SIMPLE MOLECULES</text>
    <text x="644" y="416" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ACIDIC OXIDES</text>
  </g>
</svg>

---

### 🔍 Period 3 Property Trend: Metals $\\to$ Metalloid $\\to$ Non-Metals

Cambridge examiners frequently ask candidates to describe changes across **Period 3** ($\\ce{Na}$, $\\ce{Mg}$, $\\ce{Al}$, $\\ce{Si}$, $\\ce{P}$, $\\ce{S}$, $\\ce{Cl}$, $\\ce{Ar}$):

| Element | Group | Bonding & Structure | Electrical Conductivity | Nature of Oxide | Formula of Oxide |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sodium ($\\ce{Na}$)** | Group I | Giant metallic lattice | Excellent conductor | Strongly basic | $\\ce{Na2O}$ |
| **Magnesium ($\\ce{Mg}$)** | Group II | Giant metallic lattice | Excellent conductor | Basic | $\\ce{MgO}$ |
| **Aluminium ($\\ce{Al}$)** | Group III | Giant metallic lattice | Excellent conductor | **Amphoteric** | $\\ce{Al2O3}$ |
| **Silicon ($\\ce{Si}$)** | Group IV | Giant covalent lattice | Semiconductor | Weakly acidic | $\\ce{SiO2}$ |
| **Phosphorus ($\\ce{P}$)** | Group V | Simple molecular | Non-conductor | Acidic | $\\ce{P4O10}$ |
| **Sulfur ($\\ce{S}$)** | Group VI | Simple molecular | Non-conductor | Acidic | $\\ce{SO2}$, $\\ce{SO3}$ |
| **Chlorine ($\\ce{Cl}$)** | Group VII | Simple diatomic molecule | Non-conductor | Strongly acidic | $\\ce{Cl2O7}$ |
| **Argon ($\\ce{Ar}$)** | Group VIII / 0 | Monatomic gas | Non-conductor | **None** (inert) | None |

> [!NOTE]
> ### 💡 Cambridge Core Rule
> Across any period from left to right:
> 1. Elements change from **metals to non-metals**.
> 2. Oxides change from **basic $\\to$ amphoteric $\\to$ acidic**.
> 3. Bonding changes from **metallic $\\to$ giant covalent $\\to$ simple covalent**.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-arrangement-q1',
          type: 'multiple_choice',
          question:
            'An element has an electronic configuration of 2,8,6. Which group and period does this element belong to in the Periodic Table?',
          options: [
            'Group VI and Period 3',
            'Group III and Period 6',
            'Group VI and Period 2',
            'Group II and Period 6',
          ],
          correctAnswer: 0,
          explanation:
            'The number of outer electrons determines the group: 6 valence electrons = Group VI. The number of occupied shells determines the period: 3 shells (2, 8, and 6) = Period 3 (this is sulfur).',
          misconceptionTarget: 'Swapping group number with period number',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-08-group-1-physical-trends',
      tags: [
        'alkali-metals',
        'group-1-metals',
        'physical-trends',
        'melting-point',
        'density',
        'softness',
      ],
      title: '2. Group I: Alkali Metals — Physical Properties & Trends Down the Group',
      summary:
        'Identification of alkali metals (Li, Na, K, Rb, Cs), key physical properties including softness and low densities, and downward trends in melting points and hardness.',
      content: `### 🧈 Physical Characteristics of Group I Metals

The elements of **Group I** are known as the **alkali metals**:
- **Lithium** ($\\ce{Li}$, $Z=3$)
- **Sodium** ($\\ce{Na}$, $Z=11$)
- **Potassium** ($\\ce{K}$, $Z=19$)
- **Rubidium** ($\\ce{Rb}$, $Z=37$)
- **Caesium** ($\\ce{Cs}$, $Z=55$)

Unlike everyday transition metals (such as iron or copper), Group I metals possess unique physical properties:
1. **Extremely Soft**: Can be easily sliced with a scalpel or butter knife. Freshly cut surfaces are shiny silver but **tarnish rapidly in air** as they react with oxygen and moisture.
2. **Low Density**: Lithium, sodium, and potassium are **less dense than water** (densities $< 1\\text{ g/cm}^3$) and float on water during reactions.
3. **Low Melting & Boiling Points**: Melting points range from $181^\\circ\\text{C}$ ($\\ce{Li}$) down to $29^\\circ\\text{C}$ ($\\ce{Cs}$), which is extraordinarily low for metals.
4. **Storage Under Paraffin Oil**: Because they react vigorously with atmospheric oxygen and water vapour, alkali metals are stored immersed in paraffin oil.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-group-1-alkali-metals-title igcse-t08-group-1-alkali-metals-desc" data-diagram="igcse-t08-group-1-alkali-metals" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-group-1-alkali-metals-title">Group I Alkali Metals Physical Trends and Water Reactions</title>
  <desc id="igcse-t08-group-1-alkali-metals-desc">Overview of Group I alkali metals trends down the group and experimental observations of reactions with water.</desc>
  <defs>
    <marker id="igcse-t08-group-1-alkali-metals-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">GROUP I ALKALI METALS: PHYSICAL TRENDS &amp; WATER REACTIONS</text>
  </g>
  <rect x="24" y="76" width="260" height="344" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="260" height="36" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="154" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">GROUP I TRENDS (DOWN GROUP)</text>
  <g data-role="text-box" data-box="36 122 236 104">
    <rect x="36" y="122" width="236" height="104" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="154" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Li, Na, K, Rb, Cs</text>
    <text x="154" y="167" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">SOFT: CUT WITH KNIFE</text>
    <text x="154" y="187" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">LOW DENSITY: FLOATS</text>
    <text x="154" y="206" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">STORED IN OIL</text>
  </g>
  <g data-role="text-box" data-box="36 236 236 172">
    <rect x="36" y="236" width="236" height="172" rx="6" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="154" y="259" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">DOWN GROUP TRENDS:</text>
    <text x="154" y="284" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1. MELTING POINT FALLS</text>
    <text x="154" y="306" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">WEAKER METALLIC BOND</text>
    <text x="154" y="331" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2. DENSITY RISES</text>
    <text x="154" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3. SOFTNESS RISES</text>
    <text x="154" y="381" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">4. REACTIVITY RISES</text>
  </g>
  <g data-role="text-box" data-box="296 76 480 104">
    <rect x="296" y="76" width="480" height="104" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
    <text x="536" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">LITHIUM + WATER: 2Li + 2H2O -&gt; 2LiOH + H2</text>
    <text x="536" y="126" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">FLOATS AND FIZZES STEADILY; GIVES OFF H2</text>
    <text x="536" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">STRONGLY ALKALINE SOLUTION FORMED (pH 14)</text>
  </g>
  <g data-role="text-box" data-box="296 196 480 104">
    <rect x="296" y="196" width="480" height="104" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
    <text x="536" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SODIUM + WATER: 2Na + 2H2O -&gt; 2NaOH + H2</text>
    <text x="536" y="246" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">MELTS INTO SILVERY BALL; DARTS ON SURFACE</text>
    <text x="536" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">RAPID EFFERVESCENCE; MAY CATCH YELLOW FIRE</text>
  </g>
  <g data-role="text-box" data-box="296 316 480 104">
    <rect x="296" y="316" width="480" height="104" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
    <text x="536" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">POTASSIUM + WATER: 2K + 2H2O -&gt; 2KOH + H2</text>
    <text x="536" y="366" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#cdb8f5">BURSTS INSTANTLY INTO A BRIGHT LILAC FLAME</text>
    <text x="536" y="392" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">DARTS FURIOUSLY; FINISHES WITH A SHARP POP</text>
  </g>
</svg>

---

### 📉 Trends Going Down Group I

When moving **down Group I** from Lithium to Caesium:
1. **Melting Point Decreases**:
   - As the metal ions become larger, the delocalised valence electrons are further from the positive nuclei.
   - The electrostatic attraction between metal cations and the electron sea weakens, so less thermal energy is required to break the metallic lattice.
2. **Density Generally Increases**:
   - The atomic mass increases at a faster rate than the atomic volume. (Note: $\ce{K}$ is slightly less dense than $\ce{Na}$, but the overall group trend is increasing).
3. **Softness Increases**:
   - The weaker metallic bonding makes the metal atoms more easily separated under applied pressure.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-group1-phys-q1',
          type: 'multiple_choice',
          question:
            'Rubidium (Rb) is positioned below potassium in Group I. What can you predict about its melting point and density compared to potassium?',
          options: [
            'Lower melting point and higher density than potassium',
            'Higher melting point and lower density than potassium',
            'Higher melting point and higher density than potassium',
            'Lower melting point and lower density than potassium',
          ],
          correctAnswer: 0,
          explanation:
            'Down Group I, melting points decrease (weaker metallic bonding due to larger ion size) and densities generally increase. Therefore, rubidium has a lower melting point and a higher density than potassium.',
          misconceptionTarget: 'Assuming melting point increases down a metallic group',
        },
      ],
    },
    {
      tag: 'igcse-08-group-1-chemical-reactivity',
      tags: [
        'group-1-reactivity',
        'reactions-with-water',
        'reactivity-trend-group-1',
        'electron-shielding',
        'atomic-radius',
      ],
      title: '3. Group I Chemical Reactions with Water & The Reactivity Trend Mechanism',
      summary:
        'Observations for reactions of Li, Na, and K with water, general chemical equations, and atomic structural explanation of increasing reactivity down Group I.',
      content: `### 🌊 Reactions of Group I Metals with Cold Water

All Group I metals react vigorously with cold water to produce a soluble metal hydroxide (alkali) and hydrogen gas:
$$2\\ce{M(s)} + 2\\ce{H2O(l)} \\to 2\\ce{MOH(aq)} + \\ce{H2(g)}$$

#### Cambridge Experimental Observations:
1. **Lithium ($\\ce{Li}$)**:
   - Floats on water.
   - Fizzes steadily with effervescence (hydrogen gas released).
   - Gradually disappears leaving a clear, colourless solution.
2. **Sodium ($\\ce{Na}$)**:
   - Floats and melts rapidly into a smooth **silvery sphere/ball** (because the reaction is highly exothermic and sodium has a low melting point of $98^\\circ\\text{C}$).
   - Darts rapidly across the water surface propelled by escaping hydrogen gas.
   - May ignite with a distinctive **yellow/orange flame**.
3. **Potassium ($\\ce{K}$)**:
   - Melts instantly into a sphere and catches fire immediately.
   - Burns with a characteristic **bright lilac flame**.
   - Darts furiously across the surface and reaction terminates with a **sharp pop / small explosion**.
4. **Rubidium ($\\ce{Rb}$) and Caesium ($\\ce{Cs}$)**:
   - React explosively with shockwaves that shatter laboratory glass troughs.

> [!IMPORTANT]
> ### 🧪 Universal Indicator Test
> When a few drops of universal indicator are added to the water after reacting with any Group I metal:
> - The indicator turns **purple (deep violet)**, indicating a strongly alkaline solution with $\\text{pH} \\approx 13 - 14$.
> - This proves the formation of **hydroxide ions ($\\ce{OH-}$)**:
>   $$\\ce{NaOH(aq)} \\to \\ce{Na+(aq)} + \\ce{OH-(aq)}$$

---

### ⚛️ Why Does Reactivity Increase Down Group I?

Group I metals react by losing their single outer valence electron to form a singly charged positive cation ($\\ce{M} \\to \\ce{M+} + e^-$).

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-group-1-reactivity-reason-title igcse-t08-group-1-reactivity-reason-desc" data-diagram="igcse-t08-group-1-reactivity-reason" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-group-1-reactivity-reason-title">Atomic Basis of Increasing Reactivity Down Group I</title>
  <desc id="igcse-t08-group-1-reactivity-reason-desc">Diagram comparing atomic radii and electron shielding for lithium, sodium, and potassium explaining why outer electron is lost more easily.</desc>
  <defs>
    <marker id="igcse-t08-group-1-reactivity-reason-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">WHY GROUP I REACTIVITY INCREASES DOWN THE GROUP</text>
  </g>
  <rect x="24" y="76" width="236" height="216" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="236" height="34" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="142" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">LITHIUM: Li (2,1)</text>
  <circle cx="142" cy="164" r="30" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="142" cy="164" r="46" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="142" cy="164" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="142" y="169" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3+</text>
  <circle cx="142" cy="118" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <g data-role="text-box" data-box="36 228 212 56">
    <rect x="36" y="228" width="212" height="56" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="142" y="249" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2 OCCUPIED SHELLS</text>
    <text x="142" y="269" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">LESS SHIELDING</text>
  </g>
  <rect x="274" y="76" width="252" height="216" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="274" y="76" width="252" height="34" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SODIUM: Na (2,8,1)</text>
  <circle cx="400" cy="164" r="26" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="400" cy="164" r="40" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="400" cy="164" r="54" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="400" cy="164" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="169" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">11+</text>
  <circle cx="400" cy="110" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <g data-role="text-box" data-box="286 228 228 56">
    <rect x="286" y="228" width="228" height="56" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="249" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3 OCCUPIED SHELLS</text>
    <text x="400" y="269" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">MORE SHIELDING</text>
  </g>
  <rect x="540" y="76" width="236" height="216" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="540" y="76" width="236" height="34" rx="8" fill="#cdb8f5" stroke="#1f2937" stroke-width="2" />
  <text x="658" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">POTASSIUM: K (2,8,8,1)</text>
  <circle cx="658" cy="164" r="22" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="34" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="46" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="58" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="658" y="169" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">19+</text>
  <circle cx="658" cy="106" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <g data-role="text-box" data-box="552 228 212 56">
    <rect x="552" y="228" width="212" height="56" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="658" y="249" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">4 OCCUPIED SHELLS</text>
    <text x="658" y="269" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">WEAKEST ATTRACTION</text>
  </g>
  <g data-role="text-box" data-box="24 304 752 116">
    <rect x="24" y="304" width="752" height="116" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CAMBRIDGE 3-STEP EXAMINER MARK SCHEME EXPLANATION:</text>
    <text x="400" y="352" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">1. ATOMIC RADIUS INCREASES: MORE OCCUPIED ELECTRON SHELLS DOWN GROUP</text>
    <text x="400" y="374" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2. GREATER ELECTRON SHIELDING: WEAKER ATTRACTION BETWEEN NUCLEUS &amp; OUTER ELECTRON</text>
    <text x="400" y="396" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">3. VALENCE ELECTRON IS LOST MORE EASILY -&gt; HIGHER CHEMICAL REACTIVITY</text>
  </g>
</svg>

#### The 3-Step Cambridge Examiner Reasoning:
1. **Atomic Radius Increases**: Down Group I, each successive element possesses one more occupied electron shell ($\\ce{Li}: 2,1$; $\\ce{Na}: 2,8,1$; $\\ce{K}: 2,8,8,1$). The outer valence electron is situated progressively **further from the positive nucleus**.
2. **Increased Electron Shielding**: More inner shells of electrons repel the outer electron and shield it from the positive nuclear charge.
3. **Weaker Electrostatic Attraction**: The attraction between the positive nucleus and the single outer electron weakens significantly. Consequently, **less energy is required to remove the outer electron**, and it is lost more easily, causing chemical reactivity to increase down the group.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-group1-chem-q1',
          type: 'multiple_choice',
          question:
            'Why is potassium more reactive than sodium when placed in water?',
          options: [
            'Its outer electron is further from the nucleus and shielded by more shells, so it is lost more easily',
            'Potassium has a higher nuclear charge, so it attracts incoming electrons more strongly',
            'Potassium has fewer electron shells, so its outer electron is lost more easily',
            'Potassium is a non-metal and reacts by gaining an electron',
          ],
          correctAnswer: 0,
          explanation:
            'Potassium has 4 electron shells compared to sodium’s 3. Its valence electron is further from the nucleus and experiences greater shielding from inner shells, making the electrostatic attraction weaker. Thus, the valence electron is lost more readily.',
          misconceptionTarget: 'Thinking higher nuclear charge makes losing electrons harder regardless of shielding',
        },
      ],
    },
    {
      tag: 'igcse-08-group-7-physical-trends',
      tags: [
        'halogens',
        'group-7-halogens',
        'diatomic-molecules',
        'physical-states',
        'colours',
        'boiling-points',
      ],
      title: '4. Group VII: The Halogens — Diatomic Molecules, States & Physical Trends',
      summary:
        'Properties of Group VII halogens as diatomic non-metals, physical states and distinctive colours, and trends in melting/boiling points down the group.',
      content: `### 🧪 Group VII Non-Metals: The Halogens

The elements in **Group VII** are known as the **halogens**:
- **Fluorine** ($\\ce{F2}$)
- **Chlorine** ($\\ce{Cl2}$)
- **Bromine** ($\\ce{Br2}$)
- **Iodine** ($\\ce{I2}$)
- **Astatine** ($\\ce{At2}$)

All halogens exist as **covalently bonded diatomic molecules** (formula $\\ce{X2}$) because each atom shares one pair of electrons to achieve a complete octet:
$$\\ce{:X^{\\cdot} + ^{\\cdot}X: \\to X-X}$$

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-group-7-halogens-properties-title igcse-t08-group-7-halogens-properties-desc" data-diagram="igcse-t08-group-7-halogens-properties" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-group-7-halogens-properties-title">Group VII Halogens Physical States Colours and Boiling Point Trends</title>
  <desc id="igcse-t08-group-7-halogens-properties-desc">Comparative diagram of fluorine, chlorine, bromine, and iodine showing physical state, colour, and trends down Group VII.</desc>
  <defs>
    <marker id="igcse-t08-group-7-halogens-properties-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">GROUP VII HALOGENS: MOLECULAR STATES, COLOURS &amp; TRENDS</text>
  </g>
  <rect x="24" y="76" width="176" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="176" height="34" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="112" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">FLUORINE (F2)</text>
  <rect x="52" y="118" width="120" height="76" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="112" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">YELLOW GAS</text>
  <text x="112" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">TOXIC GAS</text>
  <g data-role="text-box" data-box="32 202 160 86">
    <rect x="32" y="202" width="160" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="112" y="224" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">GAS AT R.T.P.</text>
    <text x="112" y="246" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">B.P.: -188 C</text>
    <text x="112" y="268" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">MOST REACTIVE</text>
  </g>
  <rect x="216" y="76" width="176" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="216" y="76" width="176" height="34" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="304" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CHLORINE (Cl2)</text>
  <rect x="244" y="118" width="120" height="76" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="304" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PALE GREEN</text>
  <text x="304" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">CHLORINE GAS</text>
  <g data-role="text-box" data-box="224 202 160 86">
    <rect x="224" y="202" width="160" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="304" y="224" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">GAS AT R.T.P.</text>
    <text x="304" y="246" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">B.P.: -34 C</text>
    <text x="304" y="268" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">BLEACHES LITMUS</text>
  </g>
  <rect x="408" y="76" width="176" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="408" y="76" width="176" height="34" rx="8" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="496" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">BROMINE (Br2)</text>
  <rect x="436" y="118" width="120" height="76" rx="6" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />
  <text x="496" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">RED-BROWN</text>
  <text x="496" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">DENSE LIQUID</text>
  <g data-role="text-box" data-box="416 202 160 86">
    <rect x="416" y="202" width="160" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="496" y="224" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">LIQUID AT RTP</text>
    <text x="496" y="246" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">B.P.: 59 C</text>
    <text x="496" y="268" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ORANGE VAPOUR</text>
  </g>
  <rect x="600" y="76" width="176" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="600" y="76" width="176" height="34" rx="8" fill="#cdb8f5" stroke="#1f2937" stroke-width="2" />
  <text x="688" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">IODINE (I2)</text>
  <rect x="628" y="118" width="120" height="76" rx="6" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="688" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">GREY-BLACK</text>
  <text x="688" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SOLID CRYSTAL</text>
  <g data-role="text-box" data-box="608 202 160 86">
    <rect x="608" y="202" width="160" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="688" y="224" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SOLID AT R.T.P.</text>
    <text x="688" y="246" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">B.P.: 184 C</text>
    <text x="688" y="268" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#cdb8f5">PURPLE VAPOUR</text>
  </g>
  <g data-role="text-box" data-box="24 310 752 110">
    <rect x="24" y="310" width="752" height="110" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="334" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PHYSICAL TRENDS DOWN GROUP VII (FROM F2 TO I2):</text>
    <text x="400" y="358" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">1. COLOUR DARKENS: PALE YELLOW -&gt; PALE GREEN -&gt; RED-BROWN -&gt; GREY-BLACK</text>
    <text x="400" y="380" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">2. STATE AT ROOM TEMP: GAS -&gt; GAS -&gt; LIQUID -&gt; SOLID</text>
    <text x="400" y="402" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3. MELTING AND BOILING POINTS INCREASE DUE TO STRONGER INTERMOLECULAR FORCES</text>
  </g>
</svg>

---

### 🎨 Table of Halogen Colours, States & Trends

| Halogen | Formula | Physical State at r.t.p. | Colour at Room Temp | Colour of Vapour | Boiling Point |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fluorine** | $\\ce{F2}$ | Gas | Pale yellow | Pale yellow | $-188^\\circ\\text{C}$ |
| **Chlorine** | $\\ce{Cl2}$ | Gas | Pale green / yellow-green | Pale green | $-34^\\circ\\text{C}$ |
| **Bromine** | $\\ce{Br2}$ | Liquid | Red-brown | Orange-brown | $+59^\\circ\\text{C}$ |
| **Iodine** | $\\ce{I2}$ | Solid | Grey-black shiny crystals | **Dense purple** | $+184^\\circ\\text{C}$ |
| **Astatine** | $\\ce{At2}$ | Solid (predicted) | Black solid | Dark | $> 300^\\circ\\text{C}$ |

> [!TIP]
> ### 🔍 Why Do Boiling Points Increase Down Group VII?
> - Group VII halogens exist as simple molecular substances.
> - Down the group, molecules have **more electrons** and a **larger molecular mass** ($M_r$).
> - This increases the strength of the **intermolecular (Van der Waals) forces** between molecules.
> - More thermal energy is required to overcome these intermolecular attractions, so melting and boiling points increase down the group.
> - *(Examiner Warning: Never write that covalent bonds break when halogens melt or boil; only weak intermolecular forces are overcome!)*
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-group7-phys-q1',
          type: 'multiple_choice',
          question:
            'What are the state and appearance of iodine at room temperature, and what is observed when it is gently heated?',
          options: [
            'Grey-black solid; sublimes to form a dense purple vapour',
            'Purple liquid; boils to form a brown gas',
            'Red-brown liquid; evaporates to an orange gas',
            'Pale green gas; condenses to a yellow liquid',
          ],
          correctAnswer: 0,
          explanation:
            'At room temperature, iodine is a grey-black shiny solid. Upon gentle heating, it easily sublimes directly from solid to a dense purple gas without passing through a liquid state at atmospheric pressure.',
          misconceptionTarget: 'Confusing iodine crystals with purple liquid or bromine liquid',
        },
      ],
    },
    {
      tag: 'igcse-08-group-7-displacement-reactions',
      tags: [
        'halogen-displacement',
        'reactivity-trend-group-7',
        'net-ionic-equations',
        'redox-in-displacement',
        'oxidising-agent',
      ],
      title: '5. Group VII Reactivity Trend & Halogen Displacement Reactions',
      summary:
        'Explaining why reactivity decreases down Group VII, test tube displacement reaction observations, net ionic equations, and identifying redox transfer.',
      content: `### ⚛️ Why Does Reactivity Decrease Down Group VII?

Halogen atoms have $7$ valence electrons and react by **gaining one electron** to form negative halide ions ($\\ce{X2 + 2e- \\to 2X-}$).

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-group-7-reactivity-reason-title igcse-t08-group-7-reactivity-reason-desc" data-diagram="igcse-t08-group-7-reactivity-reason" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-group-7-reactivity-reason-title">Atomic Mechanism of Decreasing Reactivity Down Group VII</title>
  <desc id="igcse-t08-group-7-reactivity-reason-desc">Diagram comparing atomic radii and shielding for fluorine, chlorine, and bromine explaining why incoming electron is attracted less strongly.</desc>
  <defs>
    <marker id="igcse-t08-group-7-reactivity-reason-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">WHY GROUP VII REACTIVITY DECREASES DOWN THE GROUP</text>
  </g>
  <rect x="24" y="76" width="236" height="216" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="236" height="34" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="142" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">FLUORINE: F (2,7)</text>
  <circle cx="142" cy="164" r="30" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="142" cy="164" r="46" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="142" cy="164" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="142" y="169" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">9+</text>
  <circle cx="142" cy="106" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <g data-role="text-box" data-box="36 228 212 56">
    <rect x="36" y="228" width="212" height="56" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="142" y="249" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2 OCCUPIED SHELLS</text>
    <text x="142" y="269" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">STRONGEST PULL</text>
  </g>
  <rect x="274" y="76" width="252" height="216" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="274" y="76" width="252" height="34" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CHLORINE: Cl (2,8,7)</text>
  <circle cx="400" cy="164" r="26" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="400" cy="164" r="40" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="400" cy="164" r="54" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="400" cy="164" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="169" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">17+</text>
  <circle cx="400" cy="98" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <g data-role="text-box" data-box="286 228 228 56">
    <rect x="286" y="228" width="228" height="56" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="249" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">3 OCCUPIED SHELLS</text>
    <text x="400" y="269" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">MORE SHIELDING</text>
  </g>
  <rect x="540" y="76" width="236" height="216" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="540" y="76" width="236" height="34" rx="8" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="658" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">BROMINE: Br (2,8,18,7)</text>
  <circle cx="658" cy="164" r="22" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="34" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="46" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="58" fill="none" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="658" cy="164" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="658" y="169" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">35+</text>
  <circle cx="658" cy="94" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <g data-role="text-box" data-box="552 228 212 56">
    <rect x="552" y="228" width="212" height="56" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="658" y="249" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">4 OCCUPIED SHELLS</text>
    <text x="658" y="269" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">WEAKEST PULL</text>
  </g>
  <g data-role="text-box" data-box="24 304 752 116">
    <rect x="24" y="304" width="752" height="116" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CAMBRIDGE 3-STEP EXAMINER MARK SCHEME EXPLANATION:</text>
    <text x="400" y="352" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">1. HALOGENS REACT BY GAINING 1 ELECTRON: X2 + 2e- -&gt; 2X-</text>
    <text x="400" y="374" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2. DOWN GROUP VII: ATOM GETS LARGER WITH MORE INNER SHIELDING SHELLS</text>
    <text x="400" y="396" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">3. ATTRACTION FOR INCOMING ELECTRON WEAKENS -&gt; REACTIVITY DECREASES</text>
  </g>
</svg>

#### The 3-Step Cambridge Examiner Reasoning:
1. **Reactivity Mechanism**: Non-metals react by attracting an incoming electron to complete their valence shell.
2. **Atomic Radius & Shielding Increase**: Down Group VII, each successive atom has one more occupied electron shell. The incoming electron enters a shell that is **further away from the positive nucleus** and is screened by more inner electron shells.
3. **Weaker Nuclear Attraction**: The electrostatic attraction exerted by the nucleus on the incoming electron weakens. Therefore, **electrons are gained less readily**, making halogens progressively **less reactive down the group** (Reactivity: $\\ce{F2 > Cl2 > Br2 > I2}$).

---

### 🔄 Halogen Displacement Reactions

A more reactive halogen will displace a less reactive halide ion from an aqueous solution of its salt:

<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-halogen-displacement-reactions-title igcse-t08-halogen-displacement-reactions-desc" data-diagram="igcse-t08-halogen-displacement-reactions" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-halogen-displacement-reactions-title">Halogen Displacement Reactions and Redox Net Ionic Equations</title>
  <desc id="igcse-t08-halogen-displacement-reactions-desc">Experimental test tube observations of halogen displacement reactions showing colour changes, net ionic equations, and redox transfer.</desc>
  <defs>
    <marker id="igcse-t08-halogen-displacement-reactions-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">HALOGEN DISPLACEMENT REACTIONS &amp; NET IONIC REDOX</text>
  </g>
  <rect x="24" y="76" width="236" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="236" height="34" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="142" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Cl2(aq) + 2KBr(aq)</text>
  <rect x="82" y="118" width="120" height="60" rx="6" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" />
  <text x="142" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COLOURLESS -&gt;</text>
  <text x="142" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ORANGE (Br2)</text>
  <g data-role="text-box" data-box="32 186 220 100">
    <rect x="32" y="186" width="220" height="100" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="142" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Cl2 DISPLACES Br-</text>
    <text x="142" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">SOLUTION TURNS ORANGE</text>
    <text x="142" y="252" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Cl2 IS MORE REACTIVE</text>
    <text x="142" y="271" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">Br2 IS FORMED</text>
  </g>
  <rect x="274" y="76" width="252" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="274" y="76" width="252" height="34" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Cl2(aq) + 2KI(aq)</text>
  <rect x="340" y="118" width="120" height="60" rx="6" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COLOURLESS -&gt;</text>
  <text x="400" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">BROWN (I2)</text>
  <g data-role="text-box" data-box="284 186 232 100">
    <rect x="284" y="186" width="232" height="100" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Cl2 DISPLACES I-</text>
    <text x="400" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">SOLUTION TURNS BROWN</text>
    <text x="400" y="252" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Cl2 IS MORE REACTIVE</text>
    <text x="400" y="271" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">I2 IS FORMED</text>
  </g>
  <rect x="540" y="76" width="236" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="540" y="76" width="236" height="34" rx="8" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="658" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">Br2(aq) + 2KI(aq)</text>
  <rect x="598" y="118" width="120" height="60" rx="6" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" />
  <text x="658" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ORANGE -&gt;</text>
  <text x="658" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DARK BROWN (I2)</text>
  <g data-role="text-box" data-box="548 186 220 100">
    <rect x="548" y="186" width="220" height="100" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="658" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">Br2 DISPLACES I-</text>
    <text x="658" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">DARK BROWN SOLUTION</text>
    <text x="658" y="252" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">I2 IS LEAST REACTIVE</text>
    <text x="658" y="271" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">NO REACTION IN KCl</text>
  </g>
  <rect x="24" y="308" width="752" height="132" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="text-box" data-box="36 318 350 112">
    <rect x="36" y="318" width="350" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="211" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">NET IONIC EQUATIONS:</text>
    <text x="211" y="366" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">Cl2 + 2Br- -&gt; 2Cl- + Br2</text>
    <text x="211" y="388" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Cl2 + 2I- -&gt; 2Cl- + I2</text>
    <text x="211" y="410" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">Br2 + 2I- -&gt; 2Br- + I2</text>
  </g>
  <g data-role="text-box" data-box="402 318 362 112">
    <rect x="402" y="318" width="362" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="583" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REDOX ROLES (OIL RIG):</text>
    <text x="583" y="366" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HALOGEN GAINS ELECTRONS (REDUCED)</text>
    <text x="583" y="388" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">ACTS AS AN OXIDISING AGENT</text>
    <text x="583" y="410" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">HALIDE LOSES ELECTRONS (OXIDISED)</text>
  </g>
</svg>

#### Detailed Displacement Observations & Net Ionic Equations:
1. **Chlorine water + Potassium Bromide solution**:
   - Equation: $\\ce{Cl2(aq) + 2KBr(aq) \\to 2KCl(aq) + Br2(aq)}$
   - Observation: Colourless solution turns **orange / red-brown** due to the liberation of free bromine ($\\ce{Br2}$).
   - Net Ionic Equation:
     $$\\ce{Cl2(aq) + 2Br^-(aq) \\to 2Cl^-(aq) + Br2(aq)}$$
2. **Chlorine water + Potassium Iodide solution**:
   - Equation: $\\ce{Cl2(aq) + 2KI(aq) \\to 2KCl(aq) + I2(aq)}$
   - Observation: Colourless solution turns **brown / dark brown** (with possible black precipitate) due to liberated iodine ($\\ce{I2}$).
   - Net Ionic Equation:
     $$\\ce{Cl2(aq) + 2I^-(aq) \\to 2Cl^-(aq) + I2(aq)}$$
3. **Bromine water + Potassium Iodide solution**:
   - Equation: $\\ce{Br2(aq) + 2KI(aq) \\to 2KBr(aq) + I2(aq)}$
   - Observation: Orange solution turns **dark brown**.
   - Net Ionic Equation:
     $$\\ce{Br2(aq) + 2I^-(aq) \\to 2Br^-(aq) + I2(aq)}$$
4. **Iodine solution + Potassium Chloride or Potassium Bromide**:
   - Iodine is less reactive than chlorine and bromine.
   - **No reaction occurs** (solution remains brown).

#### Redox Classification in Displacement:
- In $\\ce{Cl2 + 2Br- \\to 2Cl- + Br2}$:
  - $\\ce{Cl2}$ gains electrons: $\\ce{Cl2 + 2e- \\to 2Cl-}$ (reduction) $\\to$ $\\ce{Cl2}$ is the **oxidising agent**.
  - $\\ce{Br-}$ loses electrons: $\\ce{2Br- \\to Br2 + 2e-}$ (oxidation) $\\to$ $\\ce{Br-}$ is the **reducing agent**.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-group7-disp-q1',
          type: 'multiple_choice',
          question:
            'A student bubbles chlorine gas into an aqueous solution of sodium iodide. What colour change is observed, and which species is oxidised?',
          options: [
            'Colourless to brown; iodide ions (I-) are oxidised',
            'Orange to purple; chlorine molecules (Cl2) are oxidised',
            'Brown to colourless; sodium ions (Na+) are reduced',
            'No reaction occurs because chlorine is less reactive than iodine',
          ],
          correctAnswer: 0,
          explanation:
            'Chlorine is more reactive than iodine and displaces iodide ions from solution. The colourless solution turns brown as aqueous I2 is liberated. Iodide ions lose electrons (2I- -> I2 + 2e-) and are therefore oxidised.',
          misconceptionTarget: 'Confusing which species is oxidised with which is reduced in a halogen displacement',
        },
      ],
    },
    {
      tag: 'igcse-08-transition-elements',
      tags: [
        'transition-elements',
        'variable-oxidation-states',
        'coloured-compounds',
        'catalysts',
        'physical-properties',
      ],
      title: '6. Transition Elements: Physical & Chemical Characteristics vs Group I',
      summary:
        'Physical properties of transition metals compared with alkali metals, variable oxidation states, colourful ionic compounds, and catalytic applications.',
      content: `### 🛡️ What are the Transition Elements?

The **transition elements** (transition metals) are the metallic elements situated in the central block (d-block) of the Periodic Table between **Groups II and III**, including common metals such as iron ($\\ce{Fe}$), copper ($\\ce{Cu}$), nickel ($\\ce{Ni}$), chromium ($\\ce{Cr}$), and manganese ($\\ce{Mn}$).

<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-transition-elements-vs-group-1-title igcse-t08-transition-elements-vs-group-1-desc" data-diagram="igcse-t08-transition-elements-vs-group-1" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-transition-elements-vs-group-1-title">Transition Elements versus Group I Alkali Metals Comparison</title>
  <desc id="igcse-t08-transition-elements-vs-group-1-desc">Detailed matrix comparing physical properties, compound colours, variable oxidation states, and catalytic activity between transition metals and alkali metals.</desc>
  <defs>
    <marker id="igcse-t08-transition-elements-vs-group-1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">TRANSITION ELEMENTS VS GROUP I ALKALI METALS</text>
  </g>
  <rect x="24" y="76" width="366" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="366" height="34" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="207" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GROUP I ALKALI METALS (Na, K)</text>
  <g data-role="text-box" data-box="34 118 346 168">
    <rect x="34" y="118" width="346" height="168" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="207" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PHYSICAL PROPERTIES:</text>
    <text x="207" y="164" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">LOW DENSITY (FLOAT ON WATER)</text>
    <text x="207" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">LOW MELTING POINTS (&lt; 200 C)</text>
    <text x="207" y="208" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SOFT: EASILY CUT WITH A KNIFE</text>
    <text x="207" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CHEMICAL PROPERTIES:</text>
    <text x="207" y="252" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ONLY +1 VALENCY (WHITE SALTS)</text>
    <text x="207" y="271" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">NO CATALYTIC ACTIVITY</text>
  </g>
  <rect x="410" y="76" width="366" height="220" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="410" y="76" width="366" height="34" rx="8" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <text x="593" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TRANSITION ELEMENTS (Fe, Cu, Ni)</text>
  <g data-role="text-box" data-box="420 118 346 168">
    <rect x="420" y="118" width="346" height="168" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="593" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PHYSICAL PROPERTIES:</text>
    <text x="593" y="164" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HIGH DENSITY (HEAVY METALS)</text>
    <text x="593" y="186" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">HIGH MELTING POINTS (&gt; 1000 C)</text>
    <text x="593" y="208" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HARD, STRONG AND TOUGH</text>
    <text x="593" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CHEMICAL PROPERTIES:</text>
    <text x="593" y="252" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">VARIABLE OXIDATION STATES</text>
    <text x="593" y="271" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">EXCELLENT INDUSTRIAL CATALYSTS</text>
  </g>
  <rect x="24" y="308" width="752" height="132" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="text-box" data-box="36 318 350 112">
    <rect x="36" y="318" width="350" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="211" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">COLOURED TRANSITION IONS:</text>
    <text x="211" y="364" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">Cu2+: BRIGHT BLUE (CuSO4)</text>
    <text x="211" y="386" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">Fe2+: PALE GREEN (FeSO4)</text>
    <text x="211" y="408" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">Fe3+: RED-BROWN (FeCl3)</text>
  </g>
  <g data-role="text-box" data-box="402 318 362 112">
    <rect x="402" y="318" width="362" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="583" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">INDUSTRIAL CATALYSTS:</text>
    <text x="583" y="364" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">IRON (Fe): HABER PROCESS (NH3)</text>
    <text x="583" y="386" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">V2O5: CONTACT PROCESS (H2SO4)</text>
    <text x="583" y="408" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">NICKEL (Ni): HYDROGENATION</text>
  </g>
</svg>

---

### 🌟 Key Chemical Distinctions of Transition Elements

Cambridge examinations test **three mandatory chemical properties** that set transition elements apart from Group I metals:

#### 1. Variable Oxidation States
- While Group I metals form only $+1$ ions (e.g. $\\ce{Na+}$, $\\ce{K+}$), transition elements can form ions with **multiple stable charges**:
  - Iron forms **iron(II)** ($\\ce{Fe^{2+}}$) and **iron(III)** ($\\ce{Fe^{3+}}$).
  - Copper forms **copper(I)** ($\\ce{Cu+}$) and **copper(II)** ($\\ce{Cu^{2+}}$).
  - Manganese forms $+2$ ($\\ce{Mn^{2+}}$), $+4$ ($\\ce{MnO2}$), and $+7$ ($\\ce{MnO4-}$).

#### 2. Formation of Coloured Compounds
- Group I compounds are typically white solids that dissolve to give colourless aqueous solutions (e.g. $\\ce{NaCl}$, $\\ce{K2SO4}$).
- Transition metal compounds and aqueous ions exhibit vibrant, distinctive colours:
  - **Copper(II) ($\\ce{Cu^{2+}}$)**: Blue (e.g. hydrated $\\ce{CuSO4 \\cdot 5H2O}$).
  - **Iron(II) ($\\ce{Fe^{2+}}$)**: Pale green (e.g. $\\ce{FeSO4(aq)}$).
  - **Iron(III) ($\\ce{Fe^{3+}}$)**: Red-brown / orange-brown (e.g. $\\ce{FeCl3(aq)}$, rust $\\ce{Fe2O3}$).
  - **Chromium(III) ($\\ce{Cr^{3+}}$)**: Green.
  - **Manganate(VII) ($\\ce{MnO4-}$)**: Deep purple.

#### 3. Catalytic Behaviour
- Both elemental transition metals and their chemical compounds serve as vital catalysts in major industrial processes:
  - **Iron ($\\ce{Fe}$)**: Catalyst in the **Haber Process** for the manufacture of ammonia ($\\ce{N2 + 3H2 <=> 2NH3}$).
  - **Vanadium(V) oxide ($\\ce{V2O5}$)**: Catalyst in the **Contact Process** for sulfuric acid production ($\\ce{2SO2 + O2 <=> 2SO3}$).
  - **Nickel ($\\ce{Ni}$)**: Catalyst in the **hydrogenation of vegetable oils** (alkenes $\\to$ alkanes) to make margarine.
  - **Manganese(IV) oxide ($\\ce{MnO2}$)**: Catalyst for the rapid laboratory decomposition of hydrogen peroxide ($\\ce{2H2O2 -> 2H2O + O2}$).
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-trans-q1',
          type: 'multiple_choice',
          question:
            'Which set of properties is characteristic of transition elements but NOT of Group I alkali metals?',
          options: [
            'High melting points, form coloured compounds, and exhibit variable oxidation states',
            'Low densities, soft, and react vigorously with cold water',
            'Form only +1 ions and produce white solids that dissolve to colourless solutions',
            'Low melting points, poor electrical conductivity, and form basic oxides',
          ],
          correctAnswer: 0,
          explanation:
            'Transition elements have high melting points and high densities, act as catalysts, form coloured compounds, and possess variable oxidation states (such as Fe2+ and Fe3+). Group I metals are soft, low density, and form only +1 white compounds.',
          misconceptionTarget: 'Confusing transition metal properties with alkali metal properties',
        },
      ],
    },
    {
      tag: 'igcse-08-noble-gases',
      tags: [
        'noble-gases',
        'group-0-gases',
        'inert-gases',
        'full-outer-shell',
        'helium-balloons',
        'argon-welding',
        'neon-signs',
      ],
      title: '7. Group VIII / Group 0: The Noble Gases — Electronic Stability & Industrial Uses',
      summary:
        'Electronic explanation for the inertness of Group VIII noble gases, full outer shells (duet/octet), and practical applications of He, Ne, Ar, Kr, and Xe.',
      content: `### 🎈 Group VIII / 0: The Noble Gases

The elements in Group VIII (often referred to as Group 0) are known as the **noble gases**:
- **Helium** ($\\ce{He}$, $Z=2$, configuration: $2$)
- **Neon** ($\\ce{Ne}$, $Z=10$, configuration: $2,8$)
- **Argon** ($\\ce{Ar}$, $Z=18$, configuration: $2,8,8$)
- **Krypton** ($\\ce{Kr}$, $Z=36$)
- **Xenon** ($\\ce{Xe}$, $Z=54$)
- **Radon** ($\\ce{Rn}$, $Z=86$, radioactive)

#### Fundamental Properties:
1. **Monatomic Gases**: Noble gases exist as **single isolated atoms** ($\\ce{He}$, $\\ce{Ne}$, $\\ce{Ar}$), not diatomic molecules.
2. **Chemically Inert (Unreactive)**:
   - Helium has a stable complete outer shell of **2 electrons (a duet)**.
   - All other noble gases have a complete outer shell of **8 electrons (an octet)**.
   - Because their valence shells are completely full, they have **no tendency to gain, lose, or share electrons**. They do not readily form chemical bonds under standard conditions.
3. **Non-Flammable**: They do not support combustion and will not burn.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t08-noble-gases-properties-uses-title igcse-t08-noble-gases-properties-uses-desc" data-diagram="igcse-t08-noble-gases-properties-uses" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t08-noble-gases-properties-uses-title">Group VIII Noble Gases Stability and Real-World Uses</title>
  <desc id="igcse-t08-noble-gases-properties-uses-desc">Explanation of noble gas electronic configurations and four practical applications: helium in balloons, neon in signs, argon in welding and bulbs, and krypton or xenon in flashes.</desc>
  <defs>
    <marker id="igcse-t08-noble-gases-properties-uses-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>
  <g data-role="text-box" data-box="24 20 752 44">
    <rect x="24" y="20" width="752" height="44" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="47" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">GROUP VIII / 0 NOBLE GASES: INERTNESS &amp; APPLICATIONS</text>
  </g>
  <rect x="24" y="76" width="366" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="76" width="366" height="34" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="207" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">HELIUM (He) - DUET SHELL (2)</text>
  <g data-role="text-box" data-box="34 118 346 112">
    <rect x="34" y="118" width="346" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="207" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PROPERTY: LOWEST DENSITY AFTER H2</text>
    <text x="207" y="164" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COMPLETELY NON-FLAMMABLE &amp; SAFE</text>
    <text x="207" y="188" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">USES: WEATHER BALLOONS &amp; AIRSHIPS</text>
    <text x="207" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">DOES NOT IGNITE LIKE HYDROGEN</text>
  </g>
  <rect x="410" y="76" width="366" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="410" y="76" width="366" height="34" rx="8" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="593" y="99" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">NEON (Ne) - OCTET SHELL (2,8)</text>
  <g data-role="text-box" data-box="420 118 346 112">
    <rect x="420" y="118" width="346" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="593" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PROPERTY: GLOWS UNDER HIGH VOLTAGE</text>
    <text x="593" y="164" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">EMITS VIBRANT REDDISH-ORANGE LIGHT</text>
    <text x="593" y="188" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">USES: ADVERTISING ILLUMINATED SIGNS</text>
    <text x="593" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">HIGH VOLTAGE DISCHARGE TUBES</text>
  </g>
  <rect x="24" y="252" width="366" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="252" width="366" height="34" rx="8" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <text x="207" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ARGON (Ar) - OCTET SHELL (2,8,8)</text>
  <g data-role="text-box" data-box="34 294 346 112">
    <rect x="34" y="294" width="346" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="207" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PROPERTY: CHEAP AND COMPLETELY INERT</text>
    <text x="207" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PREVENTS HOT METALS FROM OXIDISING</text>
    <text x="207" y="364" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">USES: INERT GAS IN FILAMENT BULBS</text>
    <text x="207" y="386" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">SHIELDING GAS IN ARC WELDING</text>
  </g>
  <rect x="410" y="252" width="366" height="164" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="410" y="252" width="366" height="34" rx="8" fill="#cdb8f5" stroke="#1f2937" stroke-width="2" />
  <text x="593" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">KRYPTON (Kr) &amp; XENON (Xe)</text>
  <g data-role="text-box" data-box="420 294 346 112">
    <rect x="420" y="294" width="346" height="112" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="593" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">PROPERTY: INTENSE WHITE FLASH</text>
    <text x="593" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HIGH ATOMIC MASS AND STABILITY</text>
    <text x="593" y="364" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">USES: HIGH SPEED CAMERA FLASH UNITS</text>
    <text x="593" y="386" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">CAR HEADLIGHTS &amp; SURGICAL LASERS</text>
  </g>
</svg>

---

### 💡 Industrial & Everyday Applications

Cambridge syllabuses explicitly require candidates to relate the applications of noble gases to their specific physical and chemical properties:

1. **Helium ($\\ce{He}$)**:
   - **Use**: Filling weather balloons, party balloons, and airships (blimps).
   - **Reason**: Much lower density than air ($0.18\\text{ g/dm}^3$ vs air $\\approx 1.2\\text{ g/dm}^3$) allowing lift, and **completely non-flammable** (unlike hydrogen which explodes violently when mixed with air).
2. **Neon ($\\ce{Ne}$)**:
   - **Use**: Advertising neon signs.
   - **Reason**: When high electric voltage passes through low-pressure neon gas, electrons become excited and emit a bright, eye-catching reddish-orange glow.
3. **Argon ($\\ce{Ar}$)**:
   - **Use 1 (Incandescent light bulbs)**: Filled inside traditional glass bulbs to surround the thin tungsten filament. Because argon is chemically inert, it prevents the white-hot tungsten filament from oxidising and burning away.
   - **Use 2 (Arc Welding)**: Acts as an **inert shielding blanket gas** surrounding hot molten metal to prevent reaction with atmospheric oxygen and nitrogen.
4. **Krypton ($\\ce{Kr}$) and Xenon ($\\ce{Xe}$)**:
   - **Use**: High-intensity photographic flash lamps, airport runway landing lights, lighthouse beacons, and surgical eye lasers.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-noble-q1',
          type: 'multiple_choice',
          question:
            'Why is helium used instead of hydrogen to fill passenger airships and weather balloons?',
          options: [
            'Helium is non-flammable and safe, whereas hydrogen forms an explosive mixture with air',
            'Helium has a lower density than hydrogen',
            'Helium is a diatomic gas that provides more upward lift',
            'Helium is more reactive than hydrogen',
          ],
          correctAnswer: 0,
          explanation:
            'Although hydrogen is slightly less dense than helium, hydrogen is extremely flammable and poses a severe explosion risk. Helium is a noble gas and is completely inert and non-flammable, making it safe for airships.',
          misconceptionTarget: 'Thinking helium is lighter than hydrogen or that helium is flammable',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-08-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme', 'examiner-tips'],
      title: '8. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Theory) questions on Group I and Group VII trends, displacement reactions, and transition metal characteristics.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
A piece of sodium is added to a trough containing water and universal indicator. Which row correctly describes the observations?

| Option | Movement of Sodium | Flame Colour | Final Indicator Colour |
| :--- | :--- | :--- | :--- |
| **A** | Sinks to bottom | Lilac | Red |
| **B** | Melts into a ball and darts on surface | Yellow / Orange | Purple |
| **C** | Melts into a ball and remains stationary | Lilac | Green |
| **D** | Floats without melting | No flame | Blue |

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: B**
> - **Working**:
>   1. Sodium has low density ($0.97\\text{ g/cm}^3$) and floats on water.
>   2. The reaction is highly exothermic; sodium's low melting point ($98^\\circ\\text{C}$) causes it to melt into a silvery sphere that darts rapidly across the water surface.
>   3. Hydrogen ignited by heat burns with a characteristic yellow sodium flame.
>   4. Soluble $\\ce{NaOH}$ produces a strongly alkaline solution ($\\text{pH} \\approx 14$), turning universal indicator **purple**.
>   5. *(Examiner Tip: Lilac flame is potassium, not sodium!)*

---

### 📝 Question 2 (Paper 4 Theory — 5 Marks)
A student investigated the displacement reactions of halogens using aqueous solutions of sodium chloride, sodium bromide, and sodium iodide.

**(a) (2 marks)** Chlorine water was added to an aqueous solution of sodium bromide.
- State the colour change observed in the solution.
- Write a balanced net ionic equation for the reaction, including state symbols.

> [!TIP]
> ### 💡 Mark Scheme:
> - **Colour Change**: Colourless $\\to$ orange / red-brown [1 mark].
> - **Net Ionic Equation**:
>   $$\\ce{Cl2(aq) + 2Br^-(aq) -> 2Cl^-(aq) + Br2(aq)}$$
>   [1 mark for correct formulas and balancing; 1 mark for state symbols].

**(b) (2 marks)** In terms of electron transfer, explain why this reaction is classified as a redox reaction. Identify the oxidising agent.

> [!TIP]
> ### 💡 Mark Scheme:
> 1. Bromide ions ($\\ce{Br-}$) **lose electrons** to form $\\ce{Br2}$ (oxidation), while chlorine molecules ($\\ce{Cl2}$) **gain electrons** to form $\\ce{Cl-}$ (reduction) [1 mark].
> 2. **Oxidising Agent**: $\\ce{Cl2}$ (because it oxidises $\\ce{Br-}$ and is itself reduced) [1 mark].

**(c) (1 mark)** Predict what is observed when aqueous iodine is added to sodium chloride solution. Explain your answer.

> [!TIP]
> ### 💡 Mark Scheme:
> - **Observation**: No reaction / solution remains brown [1 mark].
> - **Reason**: Iodine is less reactive than chlorine and cannot displace chloride ions from solution.

---

### 📝 Question 3 (Paper 4 Theory — 6 Marks)
Explain, in terms of atomic structure, why:
**(a) (3 marks)** The reactivity of Group I alkali metals increases down the group from lithium to potassium.

> [!TIP]
> ### 💡 Mark Scheme:
> 1. Group I metals react by **losing their single outer valence electron** [1 mark].
> 2. Moving down the group, atoms have **more occupied electron shells** and a **larger atomic radius** [1 mark].
> 3. There is **increased shielding** from inner electron shells, so the **electrostatic attraction between the positive nucleus and the outer electron is weaker**; therefore, the outer electron is lost more easily [1 mark].

**(b) (3 marks)** The reactivity of Group VII halogens decreases down the group from fluorine to iodine.

> [!TIP]
> ### 💡 Mark Scheme:
> 1. Halogens react by **gaining one electron** to achieve a full outer shell [1 mark].
> 2. Down Group VII, atoms have **more occupied electron shells** and a **larger atomic radius** [1 mark].
> 3. There is **greater electron shielding**, resulting in a **weaker electrostatic attraction from the positive nucleus for the incoming electron**; therefore, electrons are gained less readily [1 mark].

---

### 📝 Question 4 (Paper 4 Theory — 4 Marks)
Transition elements and Group I metals are both metals, but they exhibit distinct physical and chemical differences.

**(a) (2 marks)** State two physical properties in which transition elements differ from Group I metals.

> [!TIP]
> ### 💡 Mark Scheme (Any two):
> - Transition elements have **higher densities** [1 mark].
> - Transition elements have **higher melting points / boiling points** [1 mark].
> - Transition elements are **harder / stronger** [1 mark].

**(b) (2 marks)** Name a transition metal (or its compound) used as a catalyst in an industrial process, and name the chemical product manufactured in that process.

> [!TIP]
> ### 💡 Mark Scheme (Either pair):
> - **Catalyst**: Iron ($\\ce{Fe}$) [1 mark] $\\to$ **Product**: Ammonia ($\\ce{NH3}$) in the Haber process [1 mark].
> - *Alternative*: Vanadium(V) oxide ($\\ce{V2O5}$) [1 mark] $\\to$ **Product**: Sulfur trioxide / Sulfuric acid in the Contact process [1 mark].
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-08-exam-q1',
          type: 'multiple_choice',
          question:
            'A student tests an unknown grey element X. X has a melting point of 1538 °C, density of 7.87 g/cm³, forms green and orange-brown chlorides, and catalyses the decomposition of hydrogen peroxide. In which part of the Periodic Table is element X located?',
          options: [
            'Transition elements',
            'Group I alkali metals',
            'Group VII halogens',
            'Group VIII noble gases',
          ],
          correctAnswer: 0,
          explanation:
            'High melting point, high density, variable oxidation states forming coloured compounds (green Fe2+ and brown Fe3+), and catalytic behaviour are the defining hallmarks of transition elements. Group I metals have low melting points, low densities, and form only white compounds.',
          misconceptionTarget: 'Thinking high melting point metals can be alkali metals',
        },
      ],
    },
  ],
};
