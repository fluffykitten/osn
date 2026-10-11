/**
 * igcseTopic11.ts
 * Topic 11: Organic Chemistry
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_11: MaterialItem = {
  id: 211,
  topic_number: 11,
  title: 'Organic Chemistry',
  slug: 'organic-chemistry',
  category: 'Organic Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 52,
  summary:
    'Comprehensive study of organic chemistry covering representation of organic formulae, IUPAC nomenclature, homologous series, structural isomerism, fossil fuels and fractional distillation of petroleum, alkanes and photochemical substitution, alkenes, cracking, addition reactions, manufacture and oxidation of alcohols, carboxylic acids and esterification, addition and condensation polymerisation (polyesters, polyamides, proteins), plastics disposal challenges, and Cambridge exam practice.',
  allTags: [
    'igcse-11-formulae-functional-groups-naming-isomers',
    'igcse-11-fuels-fractional-distillation-petroleum',
    'igcse-11-alkanes-combustion-substitution',
    'igcse-11-alkenes-cracking-unsaturation-test',
    'igcse-11-alkene-addition-reactions',
    'igcse-11-alcohols-manufacture-oxidation',
    'igcse-11-carboxylic-acids-esterification',
    'igcse-11-polymers-addition-condensation',
    'igcse-11-exam-practice',
    'organic-chemistry',
    'homologous-series',
    'functional-groups',
    'displayed-formula',
    'structural-formula',
    'structural-isomers',
    'iupac-nomenclature',
    'petroleum',
    'crude-oil',
    'fractional-distillation',
    'fractionating-column',
    'refinery-gas',
    'gasoline',
    'petrol',
    'naphtha',
    'kerosene',
    'diesel-oil',
    'fuel-oil',
    'lubricating-oil',
    'bitumen',
    'alkanes',
    'saturated-hydrocarbons',
    'photochemical-substitution',
    'free-radical-substitution',
    'uv-light',
    'chloromethane',
    'alkenes',
    'unsaturated-hydrocarbons',
    'carbon-carbon-double-bond',
    'catalytic-cracking',
    'thermal-decomposition',
    'bromine-water-test',
    'addition-reactions',
    'hydrogenation',
    'hydration',
    'halogenation',
    'alcohols',
    'ethanol',
    'fermentation',
    'glucose',
    'yeast',
    'anaerobic',
    'oxidation-of-ethanol',
    'ethanoic-acid',
    'potassium-manganate-vii',
    'carboxylic-acids',
    'esterification',
    'ethyl-ethanoate',
    'condensation-reaction',
    'sulfuric-acid-catalyst',
    'polymers',
    'addition-polymerisation',
    'polyethene',
    'repeat-unit',
    'continuation-bonds',
    'condensation-polymerisation',
    'polyester',
    'polyethylene-terephthalate',
    'terylene',
    'polyamide',
    'nylon',
    'proteins',
    'amino-acids',
    'peptide-bond',
    'ester-link',
    'amide-link',
    'plastics-pollution',
    'recycling',
  ],
  prerequisites: [
    {
      tag: 'igcse-11-formulae-functional-groups-naming-isomers',
      tags: [
        'formulae',
        'functional-groups',
        'homologous-series',
        'structural-isomers',
        'nomenclature',
      ],
      title: '11.1 Formulae, Functional Groups, Terminology & Isomerism',
      summary:
        'Fundamental language of organic chemistry: molecular, structural, and displayed formulae, naming conventions (meth-, eth-, prop-, but-), characteristics of a homologous series, and structural isomerism.',
      content: `### 1. The Language and Representations of Organic Chemistry

Organic chemistry is the chemistry of carbon compounds (excluding simple oxides such as $\\ce{CO}$, $\\ce{CO2}$, and carbonate salts). Carbon's unique ability to form four strong covalent bonds (catenation) allows it to build straight chains, branched frameworks, and rings of immense diversity.

Cambridge IGCSE 0620 requires you to understand and draw four types of chemical formulae:

| Formula Type | Definition | Example: Ethane | Example: Butane |
| :--- | :--- | :--- | :--- |
| **Molecular Formula** | Shows the actual number of atoms of each element present in a molecule. | $\\ce{C2H6}$ | $\\ce{C4H10}$ |
| **Empirical Formula** | Shows the simplest whole-number ratio of atoms of each element in a compound. | $\\ce{CH3}$ | $\\ce{C2H5}$ |
| **Structural Formula** | Shows how atoms are arranged carbon-by-carbon without showing all individual bonds. | $\\ce{CH3CH3}$ | $\\ce{CH3CH2CH2CH3}$ or $\\ce{CH3(CH2)2CH3}$ |
| **Displayed Formula** | Shows **all atoms** and **all covalent bonds** as lines connecting them. | Full bond diagram | Full bond diagram |

> [!IMPORTANT]
> **Cambridge Examiner Requirement for Displayed Formulae:**
> Every single bond must be drawn explicitly! For example, when drawing the displayed formula of ethanol ($\\ce{C2H5OH}$), you **must draw the $\\ce{O-H}$ bond** as $\\ce{-O-H}$. Writing $\\ce{-OH}$ as a group without the bond line between $\\ce{O}$ and $\\ce{H}$ will lose marks in Cambridge Paper 4!

---

### 2. Homologous Series and Functional Groups

A **homologous series** is a family of organic compounds sharing the following four core characteristics:
1. **Same general formula** (e.g. alkanes are $\\ce{C_n H_{2n+2}}$, alkenes are $\\ce{C_n H_{2n}}$).
2. **Same functional group**, giving them **similar chemical properties**.
3. **Graduation in physical properties** (as carbon chain length increases, boiling point increases, viscosity increases, and flammability decreases due to stronger intermolecular forces).
4. Successive members differ by a **$\\ce{-CH2-}$ unit** (a relative molecular mass difference of $14$).

A **functional group** is an atom or group of atoms that determines the characteristic chemical properties of an organic compound.

| Family (Homologous Series) | Functional Group | General Formula | Suffix / Naming |
| :--- | :--- | :--- | :--- |
| **Alkanes** | Only $\\ce{C-C}$ single bonds (saturated) | $\\ce{C_n H_{2n+2}}$ | *-ane* (e.g. methane, ethane) |
| **Alkenes** | $\\ce{C=C}$ double covalent bond | $\\ce{C_n H_{2n}}$ | *-ene* (e.g. ethene, propene) |
| **Alcohols** | Hydroxyl group ($\\ce{-OH}$) | $\\ce{C_n H_{2n+1}OH}$ | *-anol* (e.g. methanol, ethanol) |
| **Carboxylic Acids** | Carboxyl group ($\\ce{-COOH}$) | $\\ce{C_n H_{2n+1}COOH}$ (for $n \\ge 0$) | *-anoic acid* (e.g. ethanoic acid) |
| **Esters** | Ester link ($\\ce{-COO-}$) | $\\ce{R-COO-R'}$ | *-yl -anoate* (e.g. ethyl ethanoate) |

---

### 3. IUPAC Naming Rules (Stems for $C_1$ to $C_4$)

The IUPAC name of an unbranched organic molecule is constructed from:
- A **stem** indicating the number of carbon atoms in the longest continuous chain:
  - $1\\text{ Carbon}$: **Meth-**
  - $2\\text{ Carbons}$: **Eth-**
  - $3\\text{ Carbons}$: **Prop-**
  - $4\\text{ Carbons}$: **But-**
- A **suffix** indicating the homologous series / functional group (*-ane*, *-ene*, *-anol*, *-anoic acid*).
- A **number** specifying the position of the functional group or branch, counting from the chain end that gives the lowest number (e.g., $\\ce{but-1-ene}$ vs $\\ce{but-2-ene}$).

---

### 4. Structural Isomerism

**Structural isomers** are compounds that have the **same molecular formula** but **different structural formulae** (the atoms are connected in a different order).

Consider butane (molecular formula $\\ce{C4H10}$):
- **Isomer 1 (Butane):** A straight four-carbon chain $\\ce{CH3CH2CH2CH3}$. Boiling point: $-0.5^\\circ\\text{C}$.
- **Isomer 2 (2-Methylpropane):** A branched three-carbon chain with a methyl branch on carbon 2: $\\ce{CH3CH(CH3)CH3}$. Boiling point: $-11.7^\\circ\\text{C}$.

Why does the branched isomer have a lower boiling point?
Branched molecules have a more spherical shape with smaller surface area of contact. Therefore, the **intermolecular (van der Waals) forces** between branched molecules are weaker, requiring less thermal energy to overcome!

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-organic-formulae-isomers-title" data-diagram="igcse-t11-organic-formulae-isomers">
  <title id="igcse-t11-organic-formulae-isomers-title">REPRESENTATION OF ORGANIC FORMULAE AND STRUCTURAL ISOMERISM</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">ORGANIC FORMULAE AND STRUCTURAL ISOMERISM</text>

  <!-- LEFT PANEL: BUTANE -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">ISOMER 1: BUTANE (STRAIGHT CHAIN)</text>

  <!-- Displayed Formula Sketch -->
  <rect x="35" y="100" width="340" height="150" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">DISPLAYED FORMULA</text>

  <!-- Carbon chain C-C-C-C -->
  <text x="95" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="165" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="235" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="305" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>

  <line x1="107" y1="175" x2="153" y2="175" stroke="#1f2937" stroke-width="2"/>
  <line x1="177" y1="175" x2="223" y2="175" stroke="#1f2937" stroke-width="2"/>
  <line x1="247" y1="175" x2="293" y2="175" stroke="#1f2937" stroke-width="2"/>

  <!-- Left H -->
  <line x1="60" y1="175" x2="83" y2="175" stroke="#1f2937" stroke-width="2"/>
  <text x="52" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Right H -->
  <line x1="317" y1="175" x2="340" y2="175" stroke="#1f2937" stroke-width="2"/>
  <text x="348" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Top H's -->
  <line x1="95" y1="145" x2="95" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="95" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="165" y1="145" x2="165" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="165" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="235" y1="145" x2="235" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="235" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="305" y1="145" x2="305" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="305" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Bottom H's -->
  <line x1="95" y1="187" x2="95" y2="207" stroke="#1f2937" stroke-width="2"/>
  <text x="95" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="165" y1="187" x2="165" y2="207" stroke="#1f2937" stroke-width="2"/>
  <text x="165" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="235" y1="187" x2="235" y2="207" stroke="#1f2937" stroke-width="2"/>
  <text x="235" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="305" y1="187" x2="305" y2="207" stroke="#1f2937" stroke-width="2"/>
  <text x="305" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Details below displayed box -->
  <rect x="35" y="260" width="340" height="105" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="283" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">MOLECULAR FORMULA: C₄H₁₀</text>
  <text x="205" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">STRUCTURAL: CH₃CH₂CH₂CH₃</text>
  <text x="205" y="327" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CONDENSED: CH₃(CH₂)₂CH₃</text>
  <text x="205" y="349" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">BOILING POINT: -0.5 °C</text>

  <!-- RIGHT PANEL: 2-METHYLPROPANE -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">ISOMER 2: 2-METHYLPROPANE (BRANCHED)</text>

  <rect x="425" y="100" width="340" height="150" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">DISPLAYED FORMULA</text>

  <text x="520" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="595" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="670" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="595" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>

  <line x1="532" y1="165" x2="583" y2="165" stroke="#1f2937" stroke-width="2"/>
  <line x1="607" y1="165" x2="658" y2="165" stroke="#1f2937" stroke-width="2"/>
  <line x1="595" y1="177" x2="595" y2="210" stroke="#1f2937" stroke-width="2"/>

  <!-- Left H -->
  <line x1="490" y1="165" x2="508" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="480" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Right H -->
  <line x1="682" y1="165" x2="700" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="710" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Top H's -->
  <line x1="520" y1="140" x2="520" y2="155" stroke="#1f2937" stroke-width="2"/>
  <text x="520" y="137" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="595" y1="140" x2="595" y2="155" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="137" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="670" y1="140" x2="670" y2="155" stroke="#1f2937" stroke-width="2"/>
  <text x="670" y="137" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Bottom branch H's -->
  <line x1="595" y1="230" x2="595" y2="242" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="583" y1="222" x2="570" y2="222" stroke="#1f2937" stroke-width="2"/>
  <text x="562" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="607" y1="222" x2="620" y2="222" stroke="#1f2937" stroke-width="2"/>
  <text x="628" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>

  <!-- Details below displayed box -->
  <rect x="425" y="260" width="340" height="105" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="283" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">MOLECULAR FORMULA: C₄H₁₀</text>
  <text x="595" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">STRUCTURAL: CH₃CH(CH₃)CH₃</text>
  <text x="595" y="327" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">BRANCHED: LOWER SURFACE CONTACT</text>
  <text x="595" y="349" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">BOILING POINT: -11.7 °C</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">STRUCTURAL ISOMERS: SAME MOLECULAR FORMULA, DIFFERENT ATOM ARRANGEMENTS</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BRANCHED CHAINS PACK LESS TIGHTLY, RESULTING IN WEAKER INTERMOLECULAR FORCES</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-intro-1',
          type: 'multiple_choice',
          question:
            'Which statement correctly describes all members of the alkane homologous series?',
          options: [
            'They have the same empirical formula and identical boiling points.',
            'They have the same general formula CnH2n and identical physical properties.',
            'They have the same general formula CnH2n+2 and similar chemical properties.',
            'They react rapidly with aqueous bromine at room temperature.',
          ],
          correctAnswer: 2,
          explanation:
            'Members of a homologous series share the same general formula (CnH2n+2 for alkanes) and show similar chemical properties because they have the same functional group (single C-C bonds). Physical properties vary gradually.',
          misconceptionTarget:
            'Confusing general formula of alkanes (CnH2n+2) with alkenes (CnH2n), or assuming physical properties are identical.',
        },
        {
          id: 'quiz-11-intro-2',
          type: 'multiple_choice',
          question:
            'What is the relationship between butane and 2-methylpropane?',
          options: [
            'They are members of different homologous series.',
            'They are structural isomers with the same molecular formula C4H10.',
            'They have different empirical formulae.',
            'They have identical boiling points because they contain the same number of carbons.',
          ],
          correctAnswer: 1,
          explanation:
            'Butane (CH3CH2CH2CH3) and 2-methylpropane (CH3CH(CH3)CH3) both have molecular formula C4H10 but different structural arrangements, making them structural isomers.',
          misconceptionTarget:
            'Believing structural isomers have identical physical properties like boiling point.',
        },
        {
          id: 'quiz-11-intro-3',
          type: 'multiple_choice',
          question:
            'When asked to draw the displayed formula of ethanol in Cambridge Paper 4, what common mistake causes students to lose marks?',
          options: [
            'Drawing all carbon-hydrogen single bonds.',
            'Writing the -OH group as "OH" without drawing the single bond between oxygen and hydrogen.',
            'Showing carbon forming four covalent bonds.',
            'Drawing two carbon atoms in a chain.',
          ],
          correctAnswer: 1,
          explanation:
            'In a displayed formula, every single covalent bond must be shown as an individual line. Omitting the bond between O and H (writing -OH instead of -O-H) is penalised in Cambridge mark schemes.',
          misconceptionTarget:
            'Treating -OH as a single atom rather than drawing the O-H covalent bond line.',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-11-fuels-fractional-distillation-petroleum',
      tags: [
        'petroleum',
        'crude-oil',
        'fractional-distillation',
        'refinery-gas',
        'gasoline',
        'naphtha',
        'kerosene',
        'diesel',
        'fuel-oil',
        'lubricating-oil',
        'bitumen',
      ],
      title: '11.2 Fuels and the Fractional Distillation of Petroleum',
      summary:
        'Petroleum (crude oil) is a complex mixture of hydrocarbons separated by continuous fractional distillation based on differences in boiling points. Uses and physical trends of all 8 syllabus fractions.',
      content: `### 1. Fossil Fuels and Petroleum

Fossil fuels (coal, natural gas, and petroleum) formed over millions of years from the buried remains of ancient marine microorganisms and plant matter under intense heat and pressure:
- **Natural Gas:** Consists mainly of **methane ($\\ce{CH4}$)**.
- **Petroleum (Crude Oil):** A thick, dark, sticky liquid that is a **mixture of hundreds of different hydrocarbons** (mostly alkanes). In its raw state, petroleum is virtually useless. To be useful, it must be separated into fractions.
- A **hydrocarbon** is a compound containing **carbon and hydrogen only**.

---

### 2. Fractional Distillation of Petroleum

Petroleum is separated industrially in a tall **fractionating column** using continuous **fractional distillation**:

1. **Heating:** Crude oil is vaporised in a furnace at approximately $350^\\circ\\text{C}$ and pumped into the bottom of the column.
2. **Temperature Gradient:** The column is hot at the bottom (~$350^\\circ\\text{C}$) and cool at the top (~$25^\\circ\\text{C}$).
3. **Condensation:** As hot vapours rise up the column:
   - Compounds with **high boiling points** (long carbon chains) condense early near the hotter bottom and are tapped off as liquids.
   - Compounds with **low boiling points** (short carbon chains) continue rising and condense higher up where it is cooler.
   - The smallest hydrocarbons remain gaseous and leave at the very top as **refinery gas**.
   - The heaviest, non-volatile residue leaves at the bottom as **bitumen**.

---

### 3. The Eight Cambridge Syllabus Fractions and Their Uses

You must know all 8 fractions in order from top to bottom, along with their specific uses:

| Position | Fraction Name | Chain Length | Boiling Range | Specific Cambridge Syllabus Use |
| :---: | :--- | :---: | :---: | :--- |
| **Top** | **Refinery gas** | $C_1 - C_4$ | $< 25^\\circ\\text{C}$ | Bottled gas for heating and cooking |
| $\\downarrow$ | **Gasoline / Petrol** | $C_4 - C_{12}$ | $40 - 100^\\circ\\text{C}$ | Fuel for cars |
| $\\downarrow$ | **Naphtha** | $C_7 - C_{14}$ | $90 - 150^\\circ\\text{C}$ | Chemical feedstock (making chemicals, plastics) |
| $\\downarrow$ | **Kerosene (Paraffin)**| $C_{12} - C_{16}$ | $150 - 240^\\circ\\text{C}$ | Jet fuel for aircraft; domestic heating |
| $\\downarrow$ | **Diesel oil (Gas oil)**| $C_{14} - C_{18}$ | $220 - 300^\\circ\\text{C}$ | Fuel for diesel engines (lorries, buses, trains) |
| $\\downarrow$ | **Fuel oil** | $C_{19} - C_{25}$ | $250 - 320^\\circ\\text{C}$ | Fuel for ships and power stations |
| $\\downarrow$ | **Lubricating oil** | $C_{20} - C_{40}$ | $300 - 350^\\circ\\text{C}$ | Lubricants, waxes, and polishes |
| **Bottom**| **Bitumen** | $> C_{70}$ | $> 350^\\circ\\text{C}$ | Surfacing roads and sealing roofs |

---

### 4. Trends Down the Fractionating Column

As you move **down** the fractionating column (from refinery gas to bitumen):
- **Chain Length Increases:** Number of carbon atoms per molecule increases ($C_1 \\to > C_{70}$).
- **Boiling Point Increases:** Larger molecules have more electrons $\\to$ stronger intermolecular forces $\\to$ more thermal energy needed to vaporise.
- **Viscosity Increases:** Liquids become thicker and flow less easily (molecules become entangled).
- **Flammability Decreases:** Long chains are harder to ignite and burn with smoky, sooty yellow flames due to incomplete combustion.
- **Volatility Decreases:** Evaporate much less readily.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-fractional-distillation-column-title" data-diagram="igcse-t11-fractional-distillation-column">
  <title id="igcse-t11-fractional-distillation-column-title">FRACTIONAL DISTILLATION OF PETROLEUM CRUDE OIL</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">FRACTIONAL DISTILLATION OF PETROLEUM (CRUDE OIL)</text>

  <!-- Left inlet furnace -->
  <rect x="30" y="370" width="130" height="55" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="95" y="392" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">HEATED CRUDE OIL</text>
  <text x="95" y="412" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FURNACE (~350 °C)</text>

  <path d="M 160 395 L 220 395" stroke="#d64545" stroke-width="3" fill="none"/>
  <polygon points="228,395 216,389 216,401" fill="#d64545"/>

  <!-- Tall Column Body -->
  <rect x="230" y="65" width="120" height="360" rx="12" fill="#cfd4d9" stroke="#1f2937" stroke-width="2"/>
  <text x="290" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">COOL (25 °C)</text>
  <path d="M 290 105 L 290 380" stroke="#8a939c" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
  <text x="290" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">HOT (350 °C)</text>

  <!-- Outlets and fraction cards -->
  <!-- Fraction 1: Refinery Gas -->
  <path d="M 350 82 L 380 82" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="62" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="62" width="120" height="40" rx="4" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="86" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REFINERY GAS</text>
  <text x="515" y="79" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₁-C₄ | B.P. &lt; 25 °C</text>
  <text x="515" y="95" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">BOTTLED GAS / COOKING</text>

  <!-- Fraction 2: Gasoline -->
  <path d="M 350 128 L 380 128" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="108" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="108" width="120" height="40" rx="4" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PETROL</text>
  <text x="440" y="139" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">(GASOLINE)</text>
  <text x="515" y="125" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₄-C₁₂ | B.P. 40-100 °C</text>
  <text x="515" y="141" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">FUEL FOR CARS</text>

  <!-- Fraction 3: Naphtha -->
  <path d="M 350 174 L 380 174" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="154" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="154" width="120" height="40" rx="4" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="178" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NAPHTHA</text>
  <text x="515" y="171" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₇-C₁₄ | B.P. 90-150 °C</text>
  <text x="515" y="187" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CHEMICAL FEEDSTOCK</text>

  <!-- Fraction 4: Kerosene -->
  <path d="M 350 220 L 380 220" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="200" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="200" width="120" height="40" rx="4" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="224" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">KEROSENE</text>
  <text x="515" y="217" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₁₂-C₁₆ | B.P. 150-240 °C</text>
  <text x="515" y="233" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">AIRCRAFT JET FUEL</text>

  <!-- Fraction 5: Diesel Oil -->
  <path d="M 350 266 L 380 266" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="246" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="246" width="120" height="40" rx="4" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DIESEL OIL</text>
  <text x="515" y="263" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₁₄-C₁₈ | B.P. 220-300 °C</text>
  <text x="515" y="279" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">DIESEL ENGINES (LORRIES)</text>

  <!-- Fraction 6: Fuel Oil -->
  <path d="M 350 312 L 380 312" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="292" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="292" width="120" height="40" rx="4" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FUEL OIL</text>
  <text x="515" y="309" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₁₉-C₂₅ | B.P. 250-320 °C</text>
  <text x="515" y="325" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">SHIPS &amp; POWER STATIONS</text>

  <!-- Fraction 7: Lubricating Oil -->
  <path d="M 350 358 L 380 358" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="338" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="338" width="120" height="40" rx="4" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LUBRICATING</text>
  <text x="440" y="369" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">OIL</text>
  <text x="515" y="355" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₂₀-C₄₀ | B.P. 300-350 °C</text>
  <text x="515" y="371" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">LUBRICANTS, WAXES, POLISHES</text>

  <!-- Fraction 8: Bitumen Residue -->
  <path d="M 350 404 L 380 404" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="380" y="384" width="390" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="380" y="384" width="120" height="40" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>
  <text x="440" y="408" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BITUMEN</text>
  <text x="515" y="401" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">&gt; C₇₀ | B.P. &gt; 350 °C</text>
  <text x="515" y="417" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">SURFACING ROADS &amp; ROOFS</text>

  <!-- Bottom Summary Rule -->
  <rect x="20" y="438" width="760" height="42" rx="4" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="456" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DOWN COLUMN: LONGER CHAINS • HIGHER BOILING POINT • HIGHER VISCOSITY</text>
  <text x="400" y="472" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">UP COLUMN: SMALLER MOLECULES • LOWER B.P. • MORE FLAMMABLE &amp; VOLATILE</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-fuels-1',
          type: 'multiple_choice',
          question:
            'Which fraction obtained from petroleum is specifically used as a chemical feedstock in the manufacture of other chemicals and plastics?',
          options: [
            'Refinery gas',
            'Naphtha',
            'Bitumen',
            'Kerosene',
          ],
          correctAnswer: 1,
          explanation:
            'According to the Cambridge 0620 syllabus, the naphtha fraction is used as a chemical feedstock to produce petrochemicals, including alkenes and plastics.',
          misconceptionTarget:
            'Confusing naphtha with diesel oil or kerosene.',
        },
        {
          id: 'quiz-11-fuels-2',
          type: 'multiple_choice',
          question:
            'How do the properties of the bitumen fraction collected at the bottom of the column compare to the gasoline fraction collected near the top?',
          options: [
            'Bitumen has shorter carbon chains, higher volatility, and lower viscosity.',
            'Bitumen has longer carbon chains, higher boiling point, and higher viscosity.',
            'Bitumen is more flammable and ignites at a lower temperature.',
            'Bitumen is a gas at room temperature and pressure.',
          ],
          correctAnswer: 1,
          explanation:
            'Fractions collected lower down the column have longer carbon chains, stronger intermolecular forces, higher boiling points, and much higher viscosity (thicker liquid/solid).',
          misconceptionTarget:
            'Inverting the property trends down the fractionating column.',
        },
        {
          id: 'quiz-11-fuels-3',
          type: 'multiple_choice',
          question:
            'Why does petroleum separate into distinct fractions inside the fractionating column?',
          options: [
            'Because the hydrocarbons have different chemical reactivities with air.',
            'Because the hydrocarbons have different densities and separate into layers without heating.',
            'Because hydrocarbons of different chain lengths have different boiling points and condense at different temperatures.',
            'Because crude oil is a pure compound that decomposes at 350 °C.',
          ],
          correctAnswer: 2,
          explanation:
            'Fractional distillation relies on differences in boiling points. Hydrocarbons condense when the temperature inside the column drops below their specific boiling point.',
          misconceptionTarget:
            'Believing separation is a chemical reaction rather than a physical separation based on boiling points.',
        },
      ],
    },
    {
      tag: 'igcse-11-alkanes-combustion-substitution',
      tags: [
        'alkanes',
        'saturated',
        'combustion',
        'incomplete-combustion',
        'substitution-reaction',
        'photochemical',
        'uv-light',
        'chloromethane',
      ],
      title: '11.3 Alkanes: Saturated Hydrocarbons and Photochemical Substitution',
      summary:
        'Alkanes are generally unreactive saturated hydrocarbons that undergo combustion and photochemical substitution with halogens in the presence of ultraviolet (UV) light.',
      content: `### 1. Structure and General Formula of Alkanes

Alkanes are **saturated hydrocarbons**:
- **Hydrocarbons:** They contain **carbon and hydrogen atoms only**.
- **Saturated:** All carbon-carbon bonds are **single covalent bonds** ($\\ce{C-C}$). Each carbon atom forms four single bonds, so no more hydrogen atoms can be added.
- **General Formula:** $\\ce{C_n H_{2n+2}}$

The first four alkanes are:
1. **Methane:** $\\ce{CH4}$
2. **Ethane:** $\\ce{C2H6}$ (structural: $\\ce{CH3CH3}$)
3. **Propane:** $\\ce{C3H8}$ (structural: $\\ce{CH3CH2CH3}$)
4. **Butane:** $\\ce{C4H10}$ (structural: $\\ce{CH3CH2CH2CH3}$)

Because $\\ce{C-C}$ and $\\ce{C-H}$ single bonds are strong and non-polar, alkanes are generally **chemically unreactive** at room temperature (they do not react with acids, alkalis, or oxidising agents like acidified potassium manganate(VII)). However, they undergo two crucial reactions: **combustion** and **substitution**.

---

### 2. Combustion of Alkanes

Alkanes are excellent fuels because their combustion reactions are highly **exothermic**:

#### Complete Combustion (Plentiful Oxygen)
When burned in an excess supply of air or oxygen, alkanes burn completely to produce **carbon dioxide** and **water vapour**:
$$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)}$$
$$\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g)}$$

#### Incomplete Combustion (Limited Oxygen)
If oxygen supply is restricted, incomplete combustion occurs, producing poisonous **carbon monoxide ($\\ce{CO}$)** and/or carbon soot (particulates), along with water:
$$\\ce{2CH4(g) + 3O2(g) -> 2CO(g) + 4H2O(g)}$$
$$\\ce{CH4(g) + O2(g) -> C(s) + 2H2O(g)}$$

> [!WARNING]
> **Toxicity of Carbon Monoxide:**
> Recall from Topic 10 that carbon monoxide is a toxic, colourless, and odourless gas that binds irreversibly to haemoglobin in red blood cells, preventing oxygen transport.

---

### 3. Photochemical Substitution with Chlorine

Alkanes react with halogens (such as chlorine or bromine) in a **substitution reaction**:
- In a **substitution reaction**, one atom (or group of atoms) in a molecule is replaced by another atom (or group).
- **Essential Condition:** The reaction requires **ultraviolet (UV) light** (or bright sunlight). In the dark, methane and chlorine do not react at all!

#### Reaction Mechanism Overview (Photochemical Initiation)
UV light provides the activation energy needed to break the $\\ce{Cl-Cl}$ bond (homolytic fission), producing highly reactive chlorine free radicals:
$$\\ce{Cl2 ->[UV light] 2Cl^.}$$

A chlorine atom replaces a hydrogen atom on the methane molecule:
$$\\ce{CH4 + Cl2 ->[UV light] CH3Cl + HCl}$$

- **Word Equation:** $\\text{Methane} + \\text{Chlorine} \\xrightarrow{\\text{UV light}} \\text{Chloromethane} + \\text{Hydrogen chloride}$
- **Important Marking Point:** Notice that **hydrogen chloride ($\\ce{HCl}$)** is produced, **NOT hydrogen gas ($\\ce{H2}$)**! Stating that $\\ce{H2}$ is formed is one of the most frequent errors in Cambridge chemistry exams.

If chlorine is in excess, substitution continues progressively:
$$\\ce{CH3Cl + Cl2 -> CH2Cl2} \\quad \\text{(Dichloromethane)} + \\ce{HCl}$$
$$\\ce{CH2Cl2 + Cl2 -> CHCl3} \\quad \\text{(Trichloromethane / Chloroform)} + \\ce{HCl}$$
$$\\ce{CHCl3 + Cl2 -> CCl4} \\quad \\text{(Tetrachloromethane)} + \\ce{HCl}$$

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-alkane-substitution-photochemical-title" data-diagram="igcse-t11-alkane-substitution-photochemical">
  <title id="igcse-t11-alkane-substitution-photochemical-title">PHOTOCHEMICAL SUBSTITUTION REACTION OF ALKANES</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">PHOTOCHEMICAL SUBSTITUTION: METHANE + CHLORINE</text>

  <!-- Reaction Equation Displayed Box -->
  <rect x="20" y="55" width="760" height="215" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="55" width="760" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CH₄ + Cl₂  —[ ULTRAVIOLET (UV) LIGHT ]—&gt;  CH₃Cl + HCl</text>

  <!-- Methane molecule -->
  <text x="120" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <line x1="120" y1="135" x2="120" y2="152" stroke="#1f2937" stroke-width="2"/>
  <text x="120" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="120" y1="176" x2="120" y2="195" stroke="#1f2937" stroke-width="2"/>
  <text x="120" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="85" y1="165" x2="108" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="75" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="132" y1="165" x2="155" y2="165" stroke="#d64545" stroke-width="2.5"/>
  <text x="165" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">H</text>
  <text x="120" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">METHANE (CH₄)</text>

  <!-- Plus sign -->
  <text x="215" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <!-- Chlorine molecule -->
  <text x="260" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8">Cl</text>
  <line x1="272" y1="165" x2="295" y2="165" stroke="#3f8f46" stroke-width="2"/>
  <text x="310" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8">Cl</text>
  <text x="285" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">CHLORINE (Cl₂)</text>

  <!-- Arrow with UV badge -->
  <path d="M 350 165 L 425 165" stroke="#1f2937" stroke-width="2.5" fill="none"/>
  <polygon points="435,165 423,159 423,171" fill="#1f2937"/>
  <rect x="360" y="125" width="65" height="26" rx="4" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="392" y="143" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">UV LIGHT</text>

  <!-- Chloromethane molecule -->
  <text x="510" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <line x1="510" y1="135" x2="510" y2="152" stroke="#1f2937" stroke-width="2"/>
  <text x="510" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="510" y1="176" x2="510" y2="195" stroke="#1f2937" stroke-width="2"/>
  <text x="510" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="475" y1="165" x2="498" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="465" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="522" y1="165" x2="545" y2="165" stroke="#3f8f46" stroke-width="2.5"/>
  <text x="558" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8">Cl</text>
  <text x="510" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CHLOROMETHANE</text>

  <!-- Plus sign -->
  <text x="610" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <!-- Hydrogen chloride -->
  <text x="665" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">H</text>
  <line x1="675" y1="165" x2="695" y2="165" stroke="#1f2937" stroke-width="2"/>
  <text x="710" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8">Cl</text>
  <text x="690" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">HYDROGEN CHLORIDE</text>

  <!-- BOTTOM EXPLANATION CARDS -->
  <rect x="20" y="285" width="370" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="308" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">WHY UV LIGHT IS REQUIRED:</text>
  <text x="205" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• PROVIDES ACTIVATION ENERGY</text>
  <text x="205" y="348" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• BREAKS Cl-Cl COVALENT BOND</text>
  <text x="205" y="368" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• IN DARKNESS, NO REACTION OCCURS</text>

  <rect x="410" y="285" width="370" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="308" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">KEY OBSERVATION &amp; TEST:</text>
  <text x="595" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• GREEN-YELLOW Cl₂ GAS FADES</text>
  <text x="595" y="348" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• STEAMY ACIDIC FUMES OF HCl GAS</text>
  <text x="595" y="368" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• TURNS DAMP BLUE LITMUS PAPER RED</text>

  <!-- Bottom rule -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SUBSTITUTION REACTION: ONE H ATOM IS REPLACED BY ONE Cl ATOM</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NOTE: BY-PRODUCT IS HYDROGEN CHLORIDE (HCl), NEVER HYDROGEN GAS (H₂)!</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-alkanes-1',
          type: 'multiple_choice',
          question:
            'What essential condition is required for ethane to react with chlorine gas?',
          options: [
            'A nickel catalyst at 150 °C',
            'Ultraviolet (UV) light',
            'High pressure of 60 atmospheres',
            'Acidified potassium manganate(VII)',
          ],
          correctAnswer: 1,
          explanation:
            'The substitution reaction between alkanes and halogens is a photochemical reaction that requires ultraviolet (UV) light to break the halogen-halogen bond.',
          misconceptionTarget:
            'Thinking a metal catalyst or high pressure is needed for alkane substitution.',
        },
        {
          id: 'quiz-11-alkanes-2',
          type: 'multiple_choice',
          question:
            'What are the two products formed in the mono-substitution reaction between propane and chlorine under UV light?',
          options: [
            'Chloropropane and hydrogen gas (H2)',
            'Chloropropane and hydrogen chloride (HCl)',
            'Propene and hydrochloric acid',
            'Propyl chloride and water',
          ],
          correctAnswer: 1,
          explanation:
            'In substitution, a chlorine atom replaces a hydrogen atom, producing chloropropane and hydrogen chloride gas: C3H8 + Cl2 -> C3H7Cl + HCl. Hydrogen gas is NOT formed.',
          misconceptionTarget:
            'Writing H2 instead of HCl as the inorganic by-product.',
        },
        {
          id: 'quiz-11-alkanes-3',
          type: 'multiple_choice',
          question:
            'Why are alkanes described as "saturated" hydrocarbons?',
          options: [
            'Because they are completely soaked in petroleum crude oil.',
            'Because all bonds between carbon atoms are single covalent bonds and no more hydrogen atoms can be added.',
            'Because they dissolve saturated salt solutions readily.',
            'Because they decolourise aqueous bromine instantly.',
          ],
          correctAnswer: 1,
          explanation:
            'Saturated means all carbon-carbon bonds are single covalent bonds (C-C). The molecule contains the maximum possible number of hydrogen atoms for that carbon chain.',
          misconceptionTarget:
            'Confusing everyday meaning of saturated (wet/dissolved) with chemical bonding saturation.',
        },
      ],
    },
    {
      tag: 'igcse-11-alkenes-cracking-unsaturation-test',
      tags: [
        'alkenes',
        'unsaturated',
        'double-bond',
        'cracking',
        'catalytic-cracking',
        'thermal-decomposition',
        'bromine-water',
        'test-for-unsaturation',
      ],
      title: '11.4 Alkenes, Catalytic Cracking & The Test for Unsaturation',
      summary:
        'Alkenes contain a reactive C=C double bond. Catalytic cracking converts low-demand long-chain alkanes into high-demand short alkanes and alkenes. Aqueous bromine is the standard diagnostic test for unsaturation.',
      content: `### 1. Structure and Nature of Alkenes

Alkenes are **unsaturated hydrocarbons**:
- **Unsaturated:** They contain at least one **carbon-carbon double covalent bond ($\\ce{C=C}$)**.
- **General Formula:** $\\ce{C_n H_{2n}}$ (for compounds with one double bond).
- The simplest alkene is **ethene ($\\ce{C2H4}$)**. (There is no "methene" because a $\\ce{C=C}$ bond requires at least two carbon atoms!)

First three alkenes:
1. **Ethene:** $\\ce{C2H4}$ (structural: $\\ce{CH2=CH2}$)
2. **Propene:** $\\ce{C3H6}$ (structural: $\\ce{CH3CH=CH2}$)
3. **But-1-ene:** $\\ce{C4H8}$ (structural: $\\ce{CH2=CHCH2CH3}$) and **But-2-ene:** $\\ce{CH3CH=CHCH3}$ (positional isomers!)

Because of the high electron density in the $\\ce{C=C}$ double bond, alkenes are **far more reactive than alkanes**. They readily undergo **addition reactions**.

---

### 2. Catalytic Cracking: Meeting Economic Demand

When petroleum is refined, fractional distillation yields an excess of **long-chain hydrocarbons** (like heavy fuel oil and bitumen), for which consumer demand is relatively low. Conversely, consumer demand for **short-chain hydrocarbons** (petrol/gasoline for cars, and alkenes for making plastics) far exceeds supply!

**Cracking** is the industrial process of breaking down long-chain alkane molecules into smaller, more useful hydrocarbons:
- It is an example of **thermal decomposition** (breaking down a compound using heat).

#### Industrial & Laboratory Conditions for Cracking:
- **Temperature:** $600 - 700^\\circ\\text{C}$ (high thermal energy).
- **Catalyst:** **Aluminium oxide ($\\ce{Al2O3}$, alumina)** or **silicon dioxide ($\\ce{SiO2}$, silica / porous broken pot)**.

#### General Cracking Reaction Outcome:
$$\\text{Long-chain alkane} \\xrightarrow[\\text{Al}_2\\text{O}_3 / \\text{SiO}_2]{600-700^\\circ\\text{C}} \\text{Shorter-chain alkane} + \\text{Alkene(s)}$$
$$\\text{or} \\quad \\text{Long-chain alkane} \\xrightarrow{\\text{Cracking}} \\text{Alkenes} + \\text{Hydrogen gas (}\\ce{H2}\\text{)}$$

#### Example Cracking Equations (Must Balance!):
1. Cracking decane ($\\ce{C10H22}$):
   $$\\ce{C10H22 -> C8H18 (octane, petrol) + C2H4 (ethene)}$$
2. Cracking dodecane ($\\ce{C12H26}$):
   $$\\ce{C12H26 -> C8H18 + 2C2H4}$$
3. Forming hydrogen:
   $$\\ce{C2H6 -> C2H4 + H2}$$

---

### 3. The Chemical Test for Unsaturation (Bromine Water Test)

How do you distinguish an alkane from an alkene in the laboratory?
You add **aqueous bromine (bromine water, $\\ce{Br2(aq)}$)**, which is an **orange / reddish-brown liquid**:

- **With an Alkane:**
  - No reaction at room temperature in the dark.
  - The solution **remains orange / brown**.
- **With an Alkene:**
  - An addition reaction occurs immediately across the $\\ce{C=C}$ double bond.
  - The orange bromine water is rapidly **decolourised (turns colourless)**!

> [!CAUTION]
> **Cambridge Examiner Report Warning:**
> Never write "the solution turns **clear**"! A clear solution can still be intensely coloured (e.g., clear blue copper sulfate). You must write **"the solution turns colourless"** or **"decolourises"** to earn the mark in Cambridge Paper 2, 4, and 6!

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-catalytic-cracking-apparatus-title" data-diagram="igcse-t11-catalytic-cracking-apparatus">
  <title id="igcse-t11-catalytic-cracking-apparatus-title">LABORATORY CATALYTIC CRACKING AND BROMINE WATER TEST</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">CATALYTIC CRACKING OF ALKANES &amp; UNSATURATION TEST</text>

  <!-- LEFT PANEL: CRACKING TUBE -->
  <rect x="20" y="55" width="470" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="470" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="255" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CATALYTIC CRACKING APPARATUS (600-700 °C)</text>

  <!-- Boiling Tube horizontal -->
  <path d="M 330 135 L 70 135 C 50 135, 50 185, 70 185 L 330 185" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="330" y="130" width="20" height="60" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 345 160 L 440 160 L 440 250" stroke="#1f2937" stroke-width="3" fill="none"/>

  <!-- Mineral wool -->
  <rect x="75" y="140" width="55" height="40" rx="3" fill="#cfd4d9" stroke="#8a939c" stroke-width="1.5"/>
  <text x="102" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">MINERAL WOOL</text>
  <text x="102" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PARAFFIN OIL</text>

  <!-- Catalyst -->
  <rect x="200" y="142" width="70" height="36" rx="3" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="235" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Al₂O₃ / SiO₂</text>
  <text x="235" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CATALYST</text>

  <!-- Bunsen burner -->
  <polygon points="225,230 245,230 235,195" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5"/>
  <text x="235" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">STRONG HEAT</text>

  <!-- Trough with water -->
  <rect x="400" y="240" width="75" height="60" rx="4" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="425" y="195" width="25" height="70" rx="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="437" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ALKENE GAS</text>

  <!-- Equation box inside Left Panel -->
  <rect x="35" y="270" width="440" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="45" y="293" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CRACKING REACTION (THERMAL DECOMPOSITION):</text>
  <text x="45" y="315" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C₁₀H₂₂ -&gt; C₈H₁₈ (OCTANE) + C₂H₄ (ETHENE)</text>
  <text x="45" y="337" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">PRODUCES SHORTER ALKANE + REACTIVE ALKENE</text>
  <text x="45" y="355" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CATALYST: ALUMINA (Al₂O₃) OR SILICA (SiO₂)</text>

  <!-- RIGHT PANEL: BROMINE WATER TEST -->
  <rect x="510" y="55" width="270" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="510" y="55" width="270" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="645" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">BROMINE WATER TEST</text>

  <!-- Test tube 1: Alkane -->
  <rect x="540" y="105" width="30" height="90" rx="6" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <text x="555" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ ALKANE</text>
  <text x="555" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">REMAINS</text>
  <text x="555" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ORANGE</text>

  <!-- Test tube 2: Alkene -->
  <rect x="670" y="105" width="30" height="90" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="685" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ ALKENE</text>
  <text x="685" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">TURNS</text>
  <text x="685" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">COLOURLESS</text>

  <!-- Explanation Box in Right Panel -->
  <rect x="525" y="270" width="240" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="645" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">UNSATURATION TEST:</text>
  <text x="645" y="318" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Br₂ ADDS ACROSS C=C</text>
  <text x="645" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">ORANGE -&gt; COLOURLESS</text>
  <text x="645" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">EXAM RULE: DO NOT SAY CLEAR!</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CRACKING CONVERTS LOW-DEMAND LONG CHAINS INTO HIGH-DEMAND PETROL AND ALKENES</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ALKENES REACT READILY BY ADDITION ACROSS THE DOUBLE BOND; ALKANES DO NOT</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-cracking-1',
          type: 'multiple_choice',
          question:
            'What catalyst and temperature are used in industrial catalytic cracking of long-chain hydrocarbons?',
          options: [
            'Iron catalyst at 450 °C',
            'Alumina (Al2O3) or silica (SiO2) catalyst at 600–700 °C',
            'Vanadium(V) oxide catalyst at 450 °C',
            'Concentrated sulfuric acid at 100 °C',
          ],
          correctAnswer: 1,
          explanation:
            'Catalytic cracking requires high temperatures of 600–700 °C over a porous mineral catalyst such as aluminium oxide (Al2O3, alumina) or silicon dioxide (SiO2, silica).',
          misconceptionTarget:
            'Confusing cracking conditions with Haber process (Fe, 450 °C) or Contact process (V2O5, 450 °C).',
        },
        {
          id: 'quiz-11-cracking-2',
          type: 'multiple_choice',
          question:
            'In a laboratory cracking experiment, paraffin oil is cracked to produce compound X and ethene (C2H4). If compound X has 6 carbon atoms and is an alkane, what was the molecular formula of the original paraffin molecule?',
          options: [
            'C8H18',
            'C8H16',
            'C6H14',
            'C10H22',
          ],
          correctAnswer: 0,
          explanation:
            'Compound X is a 6-carbon alkane, so X = C6H14 (hexane). It is produced alongside ethene (C2H4). Total carbons = 6 + 2 = 8; total hydrogens = 14 + 4 = 18. The original alkane was octane, C8H18.',
          misconceptionTarget:
            'Failing to balance carbon and hydrogen atoms across the cracking equation.',
        },
        {
          id: 'quiz-11-cracking-3',
          type: 'multiple_choice',
          question:
            'What is the precise observation when propene is shaken with aqueous bromine at room temperature?',
          options: [
            'The mixture turns from colourless to orange.',
            'The orange mixture decolourises (turns colourless).',
            'The orange mixture turns clear brown.',
            'A pungent gas is evolved and turns blue litmus red.',
          ],
          correctAnswer: 1,
          explanation:
            'Bromine adds across the C=C double bond to form 1,2-dibromopropane. As bromine is consumed, the orange bromine water decolourises (turns colourless). In Cambridge exams, saying "turns clear" is marked wrong.',
          misconceptionTarget:
            'Using the forbidden word "clear" instead of "colourless".',
        },
      ],
    },
    {
      tag: 'igcse-11-alkene-addition-reactions',
      tags: [
        'alkenes',
        'addition-reactions',
        'halogenation',
        'hydrogenation',
        'hydration',
        'nickel-catalyst',
        'phosphoric-acid',
        'margarine',
        'ethanol',
      ],
      title: '11.5 Addition Reactions of Alkenes: Halogenation, Hydrogenation & Hydration',
      summary:
        'An addition reaction occurs when a double bond breaks to form single bonds, yielding exactly one product. Mastery of alkene bromination, hydrogenation (margarine manufacture), and hydration (industrial ethanol synthesis).',
      content: `### 1. The Principles of Addition Reactions

An **addition reaction** is a reaction in which two or more reactant molecules combine to form **exactly one single product**.
- The carbon-carbon double bond ($\\ce{C=C}$) contains one strong $\\sigma$-bond and one weaker $\\pi$-bond.
- During an addition reaction, the double bond "breaks open" into a single bond ($\\ce{C-C}$), allowing new atoms to attach to both carbon atoms.
- **Atom economy:** Because all reactant atoms end up in the single product, addition reactions have $100\\%$ theoretical atom economy!

Cambridge IGCSE 0620 requires detailed knowledge of **three major addition reactions of alkenes**:

---

### 2. Reaction 1: Halogenation (Addition of Bromine / Halogens)
Alkenes react readily with halogens at **room temperature and pressure (r.t.p.)** without any catalyst:

$$\\ce{CH2=CH2(g) + Br2(aq) -> CH2Br-CH2Br(l)}$$
- **Product:** $\\text{1,2-dibromoethane}$ (a colourless liquid).
- **Observation:** The orange colour of aqueous bromine disappears (**turns colourless**).
- **Displayed formula of product:** Each carbon atom now has two hydrogens and one bromine atom attached by single covalent bonds.

---

### 3. Reaction 2: Hydrogenation (Addition of Hydrogen)
When an alkene is reacted with hydrogen gas, it is converted into the corresponding **saturated alkane**:

$$\\ce{CH2=CH2(g) + H2(g) ->[\\text{Ni}, 150-200^\\circ\\text{C}] CH3-CH3(g)}$$
- **Conditions:**
  - **Catalyst:** **Nickel ($\\ce{Ni}$)**.
  - **Temperature:** $150 - 200^\\circ\\text{C}$ (or platinum at room temperature).
- **Commercial Application — Manufacture of Margarine:**
  - Natural vegetable oils (like sunflower or palm oil) are polyunsaturated liquids containing many $\\ce{C=C}$ double bonds. Their kinked chains prevent close packing, giving them low melting points.
  - In industry, hydrogen is bubbled through hot vegetable oil over a nickel catalyst. This **hydrogenates** some of the $\\ce{C=C}$ bonds into $\\ce{C-C}$ single bonds.
  - The straighter chains pack more closely together, raising the melting point and converting liquid oil into a spreadable semi-solid: **margarine**!

---

### 4. Reaction 3: Hydration (Addition of Steam)
Alkenes react with **steam (water vapour, $\\ce{H2O(g)}$)** to produce **alcohols**:

$$\\ce{CH2=CH2(g) + H2O(g) <=>[\\text{conc. } \\ce{H3PO4}][300^\\circ\\text{C}, 60\\text{ atm}] CH3CH2OH(g)}$$
- **Industrial Conditions (Essential Mark Scheme Criteria):**
  - **Temperature:** Approximately $300^\\circ\\text{C}$.
  - **Pressure:** Approximately $60\\text{ atmospheres}$ ($6000\\text{ kPa}$).
  - **Catalyst:** **Concentrated phosphoric acid ($\\ce{H3PO4}$)** coated on solid silica support.
- **Product:** **Ethanol** (high-purity industrial grade).
- **Reversibility:** This is an equilibrium reaction; unreacted ethene and steam are recycled through the reactor to achieve an overall yield $> 95\\%$.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-alkene-addition-reactions-title" data-diagram="igcse-t11-alkene-addition-reactions">
  <title id="igcse-t11-alkene-addition-reactions-title">THREE MAJOR ADDITION REACTIONS OF ALKENES</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">THREE MAJOR ADDITION REACTIONS OF ETHENE</text>

  <!-- ROW 1: BROMINATION -->
  <rect x="20" y="60" width="760" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="60" width="160" height="95" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="100" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. HALOGENATION</text>
  <text x="100" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">(+ BROMINE, Br₂)</text>
  <text x="195" y="88" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">REACTION: C₂H₄ + Br₂ -&gt; CH₂BrCH₂Br (1,2-dibromoethane)</text>
  <text x="195" y="110" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONDITIONS: ROOM TEMPERATURE AND PRESSURE (NO CATALYST)</text>
  <text x="195" y="132" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">OBSERVATION: ORANGE BROMINE WATER TURNS COLOURLESS</text>

  <!-- ROW 2: HYDROGENATION -->
  <rect x="20" y="170" width="760" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="170" width="160" height="95" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="100" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. HYDROGENATION</text>
  <text x="100" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">(+ HYDROGEN, H₂)</text>
  <text x="195" y="198" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">REACTION: C₂H₄ + H₂ -&gt; C₂H₆ (ethane)</text>
  <text x="195" y="220" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONDITIONS: NICKEL (Ni) CATALYST AT 150-200 °C</text>
  <text x="195" y="242" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">APPLICATION: HARDENING VEGETABLE OILS TO MAKE MARGARINE</text>

  <!-- ROW 3: HYDRATION -->
  <rect x="20" y="280" width="760" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="280" width="160" height="95" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="100" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">3. HYDRATION</text>
  <text x="100" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">(+ STEAM, H₂O)</text>
  <text x="195" y="308" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">REACTION: C₂H₄(g) + H₂O(g) -&gt; C₂H₅OH(g) (ethanol)</text>
  <text x="195" y="330" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">CONDITIONS: 300 °C, 60 ATM PRESSURE, PHOSPHORIC ACID (H₃PO₄)</text>
  <text x="195" y="352" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">APPLICATION: INDUSTRIAL MANUFACTURE OF ETHANOL SOLVENT</text>

  <!-- Bottom Rule -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ADDITION REACTION RULE: THE C=C DOUBLE BOND BREAKS OPEN TO A SINGLE C-C BOND</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXACTLY ONE PRODUCT IS FORMED WITH 100% ATOM ECONOMY</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-addition-1',
          type: 'multiple_choice',
          question:
            'What catalyst and conditions are required for the industrial hydration of ethene to manufacture ethanol?',
          options: [
            'Nickel catalyst at 150 °C and 1 atm',
            'Phosphoric acid (H3PO4) catalyst at 300 °C and 60 atmospheres pressure',
            'Yeast enzymes at 30 °C in anaerobic conditions',
            'Ultraviolet light at room temperature',
          ],
          correctAnswer: 1,
          explanation:
            'Direct hydration of ethene with steam requires a concentrated phosphoric acid (H3PO4) catalyst, a high temperature of 300 °C, and high pressure of 60 atmospheres.',
          misconceptionTarget:
            'Confusing industrial catalytic hydration with biological fermentation using yeast.',
        },
        {
          id: 'quiz-11-addition-2',
          type: 'multiple_choice',
          question:
            'What happens chemically when liquid vegetable oils are hardened into margarine?',
          options: [
            'Hydrogen is added across C=C double bonds in the presence of a nickel catalyst.',
            'Water is added across C=C double bonds to form polyhydroxy alcohols.',
            'The oils undergo catalytic cracking into shorter alkanes.',
            'Oxygen oxidises the unsaturated bonds into carboxylic acids.',
          ],
          correctAnswer: 0,
          explanation:
            'Hydrogenation of unsaturated vegetable oils involves reacting with hydrogen gas over a nickel catalyst at ~150–200 °C. Breaking double bonds straightens carbon chains and raises the melting point.',
          misconceptionTarget:
            'Thinking hydration (addition of water) is used to make margarine.',
        },
        {
          id: 'quiz-11-addition-3',
          type: 'multiple_choice',
          question:
            'Why does the reaction between ethene and bromine produce 1,2-dibromoethane as the only product, with no other substance formed?',
          options: [
            'Because it is an addition reaction where both bromine atoms attach across the broken double bond.',
            'Because bromine substitutes for two hydrogen atoms and produces hydrogen gas.',
            'Because ethene oxidises bromine into an ionic bromide salt.',
            'Because carbon atoms are destroyed during the reaction.',
          ],
          correctAnswer: 0,
          explanation:
            'In an addition reaction, the C=C double bond breaks open and both reacting atoms are incorporated into the molecule, yielding 100% atom economy with zero by-products.',
          misconceptionTarget:
            'Confusing addition reactions with substitution reactions that produce a secondary by-product.',
        },
      ],
    },
    {
      tag: 'igcse-11-alcohols-manufacture-oxidation',
      tags: [
        'alcohols',
        'ethanol',
        'fermentation',
        'hydration',
        'oxidation',
        'potassium-manganate-vii',
        'ethanoic-acid',
        'anaerobic',
      ],
      title: '11.6 Alcohols: Manufacture of Ethanol and Oxidation to Ethanoic Acid',
      summary:
        'Alcohols contain the -OH functional group. Industrial comparison between continuous catalytic hydration of ethene and batch biological fermentation of glucose. Combustion and chemical oxidation of ethanol.',
      content: `### 1. Functional Group and Naming of Alcohols

Alcohols are an organic homologous series containing the **hydroxyl functional group ($\\ce{-OH}$)**:
- **General Formula:** $\\ce{C_n H_{2n+1}OH}$
- The first four alcohols are:
  1. **Methanol:** $\\ce{CH3OH}$
  2. **Ethanol:** $\\ce{C2H5OH}$ (or $\\ce{CH3CH2OH}$)
  3. **Propan-1-ol:** $\\ce{CH3CH2CH2OH}$ (and isomer **Propan-2-ol:** $\\ce{CH3CH(OH)CH3}$)
  4. **Butan-1-ol:** $\\ce{CH3CH2CH2CH2OH}$

---

### 2. Two Industrial Routes to Manufacture Ethanol

Ethanol ($\\ce{C2H5OH}$) is manufactured worldwide by two completely different methods:

| Feature | Method 1: Catalytic Hydration of Ethene | Method 2: Fermentation of Carbohydrates |
| :--- | :--- | :--- |
| **Equation** | $\\ce{C2H4(g) + H2O(g) -> C2H5OH(g)}$ | $\\ce{C6H12O6(aq) ->[\\text{yeast}] 2C2H5OH(aq) + 2CO2(g)}$ |
| **Raw Material** | Ethene from **crude oil** (finite / non-renewable) | Glucose from **sugar cane / crops** (renewable) |
| **Type of Process**| **Continuous** stream of reactants | **Batch** process (slow, fermenter must be emptied & cleaned) |
| **Reaction Rate** | Very **fast** | Very **slow** (takes several days) |
| **Product Purity** | **Pure ethanol** ($> 95\\%$) | **Dilute solution** ($10-15\\%$), requires fractional distillation |
| **Operating Conditions** | $300^\\circ\\text{C}$, $60\\text{ atm}$, conc. $\\ce{H3PO4}$ catalyst | $25 - 35^\\circ\\text{C}$, atmospheric pressure, yeast enzymes |
| **Plant / Energy Cost** | High capital cost for high-pressure plant | Low initial setup cost, but high energy needed for distillation |

#### Critical Conditions for Fermentation:
1. **Temperature:** $25 - 35^\\circ\\text{C}$ (optimum temperature for yeast enzymes like zymase). If temperature exceeds $40-45^\\circ\\text{C}$, the enzymes **denature**, and the reaction stops permanently! If too low, reaction rate is too slow.
2. **Absence of Air (Anaerobic Conditions):**
   - If oxygen is present, yeast respires aerobically, producing only $\\ce{CO2}$ and $\\ce{H2O}$ without ethanol!
   - Oxygen oxidises any ethanol formed into sour **ethanoic acid (vinegar)**!
3. **Yeast Poisoning:** Once ethanol concentration reaches approximately $15\\%$, the alcohol becomes toxic to yeast cells, killing them and halting fermentation.

---

### 3. Chemical Reactions of Ethanol

#### A. Combustion
Ethanol burns cleanly with a non-luminous pale blue flame, producing carbon dioxide and water:
$$\\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)} \\quad \\Delta H < 0$$
Because it burns cleanly without soot, ethanol is increasingly used as a **biofuel** (blended with petrol as *gasohol*), reducing net greenhouse gas emissions when sourced renewably from crops.

#### B. Oxidation to Ethanoic Acid
Ethanol can be oxidised to the carboxylic acid **ethanoic acid ($\\ce{CH3COOH}$)** via two routes:
1. **Atmospheric / Microbial Oxidation:**
   - When alcoholic drinks (like wine or beer) are left exposed to air, bacteria (*Acetobacter*) use atmospheric oxygen to oxidise ethanol into ethanoic acid, causing the wine to "turn sour" (forming vinegar):
     $$\\ce{C2H5OH + O2 -> CH3COOH + H2O}$$
2. **Laboratory Chemical Oxidation:**
   - Ethanol is heated under reflux with an oxidising agent: **acidified aqueous potassium manganate(VII) ($\\ce{KMnO4}$)**:
     $$\\ce{CH3CH2OH + 2[O] ->[\\text{acidified } \\ce{KMnO4}, \\text{heat}] CH3COOH + H2O}$$
   - **Colour change:** The solution turns from **purple** to **colourless** (as $\\ce{MnO4-}$ is reduced to $\\ce{Mn^{2+}}$).
   - Alternatively, acidified potassium dichromate(VI) ($\\ce{K2Cr2O7}$) turns from **orange** to **green**.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-ethanol-hydration-vs-fermentation-title" data-diagram="igcse-t11-ethanol-hydration-vs-fermentation">
  <title id="igcse-t11-ethanol-hydration-vs-fermentation-title">MANUFACTURE OF ETHANOL: HYDRATION VS FERMENTATION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">COMPARISON: HYDRATION OF ETHENE VS FERMENTATION</text>

  <!-- LEFT PANEL: HYDRATION -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">HYDRATION OF ETHENE (INDUSTRIAL)</text>

  <rect x="35" y="95" width="340" height="45" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">EQUATION: C₂H₄ + H₂O -&gt; C₂H₅OH</text>
  <text x="205" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RAW MATERIAL: CRUDE OIL (NON-RENEWABLE)</text>

  <rect x="35" y="150" width="340" height="215" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">PROCESS CHARACTERISTICS:</text>
  <text x="205" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• CONTINUOUS PROCESS (STREAM OF GASES)</text>
  <text x="205" y="217" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• FAST REACTION RATE</text>
  <text x="205" y="239" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• PRODUCES HIGH-PURITY ETHANOL</text>
  <text x="205" y="265" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">OPERATING CONDITIONS:</text>
  <text x="205" y="287" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• TEMPERATURE: ~300 °C</text>
  <text x="205" y="309" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• PRESSURE: 60 ATMOSPHERES</text>
  <text x="205" y="331" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CATALYST: CONCENTRATED H₃PO₄</text>
  <text x="205" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• EXPENSIVE HIGH-PRESSURE PLANT</text>

  <!-- RIGHT PANEL: FERMENTATION -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">FERMENTATION OF GLUCOSE (BIOLOGICAL)</text>

  <rect x="425" y="95" width="340" height="45" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">EQUATION: C₆H₁₂O₆ -&gt; 2C₂H₅OH + 2CO₂</text>
  <text x="595" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RAW MATERIAL: SUGAR CANE (RENEWABLE)</text>

  <rect x="425" y="150" width="340" height="215" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">PROCESS CHARACTERISTICS:</text>
  <text x="595" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• BATCH PROCESS (EMPTIED AND REPEATED)</text>
  <text x="595" y="217" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• SLOW REACTION RATE (TAKES SEVERAL DAYS)</text>
  <text x="595" y="239" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• DILUTE ETHANOL (~15%, KILLS YEAST)</text>
  <text x="595" y="265" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">OPERATING CONDITIONS:</text>
  <text x="595" y="287" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• TEMPERATURE: 25 - 35 °C</text>
  <text x="595" y="309" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• ABSENCE OF AIR (ANAEROBIC)</text>
  <text x="595" y="331" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CATALYST: YEAST ENZYMES (ZYMASE)</text>
  <text x="595" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• LOW COST, SIMPLE FERMENTATION TANK</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FERMENTATION NEEDS ANAEROBIC CONDITIONS TO PREVENT ACID FORMATION</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TEMPERATURE &gt; 40 °C DENATURES YEAST ENZYMES; &lt; 20 °C RATE IS SLOW</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-alcohols-1',
          type: 'multiple_choice',
          question:
            'Why must fermentation of glucose be carried out in the strict absence of air (anaerobically)?',
          options: [
            'Because oxygen would react explosively with the yeast.',
            'Because in the presence of oxygen, yeast respires aerobically producing water and carbon dioxide, or oxidises ethanol into ethanoic acid.',
            'Because nitrogen from the air would react with glucose to make amino acids.',
            'Because atmospheric pressure is too high for anaerobic enzymes.',
          ],
          correctAnswer: 1,
          explanation:
            'In aerobic conditions (presence of O2), yeast respires aerobically rather than fermenting into ethanol. Furthermore, bacteria present will oxidise ethanol into ethanoic acid (vinegar).',
          misconceptionTarget:
            'Thinking oxygen causes an explosion with yeast rather than altering the biochemical pathway.',
        },
        {
          id: 'quiz-11-alcohols-2',
          type: 'multiple_choice',
          question:
            'What colour change occurs when ethanol is warmed with acidified aqueous potassium manganate(VII)?',
          options: [
            'Orange turns green',
            'Purple turns colourless',
            'Colourless turns purple',
            'Blue turns brick-red',
          ],
          correctAnswer: 1,
          explanation:
            'Potassium manganate(VII) (KMnO4) is an oxidising agent that oxidises ethanol to ethanoic acid. Its purple manganate(VII) ions (MnO4-) are reduced to colourless manganese(II) ions (Mn2+).',
          misconceptionTarget:
            'Confusing potassium manganate(VII) (purple to colourless) with potassium dichromate(VI) (orange to green).',
        },
        {
          id: 'quiz-11-alcohols-3',
          type: 'multiple_choice',
          question:
            'Which advantage does the catalytic hydration of ethene have over fermentation for ethanol production?',
          options: [
            'Hydration uses a renewable raw material.',
            'Hydration is a fast, continuous process that produces pure ethanol directly.',
            'Hydration operates at room temperature and pressure.',
            'Hydration produces carbon dioxide as a commercially valuable by-product.',
          ],
          correctAnswer: 1,
          explanation:
            'Hydration is a continuous flow process with a fast reaction rate that generates high-purity ethanol (>95%) without requiring fractional distillation.',
          misconceptionTarget:
            'Believing ethene hydration uses renewable raw materials (ethene comes from non-renewable crude oil).',
        },
      ],
    },
    {
      tag: 'igcse-11-carboxylic-acids-esterification',
      tags: [
        'carboxylic-acids',
        'ethanoic-acid',
        'weak-acid',
        'esterification',
        'esters',
        'ethyl-ethanoate',
        'condensation',
        'sulfuric-acid',
      ],
      title: '11.7 Carboxylic Acids and Esterification (Making Esters)',
      summary:
        'Carboxylic acids contain the -COOH group and behave as typical weak acids. Esterification is a condensation reaction between a carboxylic acid and an alcohol using concentrated sulfuric acid catalyst.',
      content: `### 1. Functional Group and Structure of Carboxylic Acids

Carboxylic acids contain the **carboxyl functional group ($\\ce{-COOH}$)**:
- **General Formula:** $\\ce{C_n H_{2n+1}COOH}$ (for $n = 0, 1, 2, \\dots$)
- The first four carboxylic acids are:
  1. **Methanoic acid ($n=0$):** $\\ce{HCOOH}$
  2. **Ethanoic acid ($n=1$):** $\\ce{CH3COOH}$ (active component of vinegar)
  3. **Propanoic acid ($n=2$):** $\\ce{CH3CH2COOH}$ (or $\\ce{C2H5COOH}$)
  4. **Butanoic acid ($n=3$):** $\\ce{CH3CH2CH2COOH}$ (or $\\ce{C3H7COOH}$)

> [!IMPORTANT]
> **Drawing the Carboxyl Group:**
> In displayed formulae, the carboxyl group consists of a carbon atom double-bonded to an oxygen atom ($\\ce{C=O}$) and single-bonded to an $\\ce{-O-H}$ hydroxyl group:
> $$\\ce{-C(=O)-O-H}$$

---

### 2. Acidic Reactions of Ethanoic Acid (Weak Acid Behaviour)

Carboxylic acids are **weak acids**: they only partially dissociate (ionise) in aqueous solution to release hydrogen ions:
$$\\ce{CH3COOH(aq) <=> CH3COO-(aq) + H+(aq)}$$

They exhibit all standard acid reactions, forming **ethanoate salts**:

1. **Reaction with Reactive Metals (e.g. Magnesium):**
   $$\\ce{2CH3COOH(aq) + Mg(s) -> (CH3COO)2Mg(aq) + H2(g)}$$
   *(Forms magnesium ethanoate and hydrogen gas; effervescence).*
2. **Reaction with Metal Hydroxides / Bases (e.g. Sodium Hydroxide):**
   $$\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$$
   *(Neutralisation forming sodium ethanoate and water).*
3. **Reaction with Metal Carbonates (e.g. Calcium Carbonate):**
   $$\\ce{2CH3COOH(aq) + CaCO3(s) -> (CH3COO)2Ca(aq) + H2O(l) + CO2(g)}$$
   *(Forms calcium ethanoate, water, and bubbles of carbon dioxide gas that turn limewater milky).*

---

### 3. Esterification: Synthesising Esters

When a carboxylic acid is warmed with an alcohol in the presence of a few drops of **concentrated sulfuric acid ($\\ce{H2SO4}$)**, an **ester** and **water** are formed:
- This is a **condensation reaction** (two molecules join together with the elimination of a small molecule, here water).
- **Catalyst:** Concentrated sulfuric acid ($\\ce{H2SO4}$) acts as an acid catalyst and a dehydrating agent.

#### Synthesis of Ethyl Ethanoate:
$$\\ce{CH3COOH(l) + C2H5OH(l) <=>[\\text{conc. } \\ce{H2SO4}, \\text{heat}] CH3COOC2H5(l) + H2O(l)}$$
- **Ethanoic acid** loses its $\\ce{-OH}$ group.
- **Ethanol** loses the $\\ce{-H}$ from its hydroxyl group.
- These combine to eliminate water ($\\ce{H2O}$), while the remaining organic fragments join to form the **ester link ($\\ce{-COO-}$)**!

#### Naming Esters:
An ester's name consists of two words:
1. **First word:** Derived from the **alcohol** (change *-anol* to *-yl*).
   - Ethanol $\\to$ **Ethyl**
   - Methanol $\\to$ **Methyl**
2. **Second word:** Derived from the **carboxylic acid** (change *-oic acid* to *-oate*).
   - Ethanoic acid $\\to$ **ethanoate**
   - Propanoic acid $\\to$ **propanoate**
- **Example:** Methanol + Ethanoic acid $\\to$ **Methyl ethanoate** ($\\ce{CH3COOCH3}$)
- **Example:** Ethanol + Propanoic acid $\\to$ **Ethyl propanoate** ($\\ce{C2H5COOC2H5}$)

---

### 4. Distinctive Properties and Uses of Esters

1. **Physical Properties:**
   - Esters have **sweet, fruity, pleasant smells** (e.g., ethyl ethanoate smells of pear drops / apples; butyl ethanoate smells of bananas).
   - They are **volatile liquids** (evaporate easily at room temperature because they cannot form intermolecular hydrogen bonds with themselves).
2. **Everyday Uses:**
   - **Artificial food flavourings** (confectionery, soft drinks, fruit essences).
   - **Perfumes and cosmetics**.
   - **Organic solvents** (e.g. ethyl ethanoate is the primary solvent in nail polish remover and glue).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-esterification-ethyl-ethanoate-title" data-diagram="igcse-t11-esterification-ethyl-ethanoate">
  <title id="igcse-t11-esterification-ethyl-ethanoate-title">ESTERIFICATION: FORMATION OF ETHYL ETHANOATE</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">ESTERIFICATION: ETHANOIC ACID + ETHANOL</text>

  <!-- Main Reaction Box -->
  <rect x="20" y="55" width="760" height="205" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="55" width="760" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CH₃COOH + C₂H₅OH  &lt;=[ CONC. H₂SO₄, HEAT ]=&gt;  CH₃COOC₂H₅ + H₂O</text>

  <!-- Reactant 1: Ethanoic acid -->
  <text x="95" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CH₃</text>
  <line x1="115" y1="145" x2="135" y2="145" stroke="#1f2937" stroke-width="2"/>
  <text x="145" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">C</text>
  <line x1="142" y1="135" x2="142" y2="115" stroke="#d64545" stroke-width="2"/>
  <line x1="148" y1="135" x2="148" y2="115" stroke="#d64545" stroke-width="2"/>
  <text x="145" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">O</text>
  <line x1="155" y1="145" x2="175" y2="145" stroke="#d64545" stroke-width="2"/>
  <text x="195" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">O-H</text>
  <text x="145" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ETHANOIC ACID</text>

  <!-- Plus -->
  <text x="245" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <!-- Reactant 2: Ethanol -->
  <text x="285" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">H-O</text>
  <line x1="305" y1="145" x2="325" y2="145" stroke="#2f7fc1" stroke-width="2"/>
  <text x="350" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CH₂CH₃</text>
  <text x="325" y="185" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ETHANOL</text>

  <!-- Reversible Arrow with H2SO4 catalyst -->
  <path d="M 390 140 L 445 140" stroke="#1f2937" stroke-width="2" fill="none"/>
  <polygon points="452,140 442,136 442,144" fill="#1f2937"/>
  <path d="M 445 152 L 390 152" stroke="#1f2937" stroke-width="2" fill="none"/>
  <polygon points="383,152 393,148 393,156" fill="#1f2937"/>
  <text x="418" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONC. H₂SO₄</text>

  <!-- Product: Ethyl ethanoate -->
  <rect x="470" y="95" width="200" height="95" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="500" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">CH₃</text>
  <line x1="518" y1="145" x2="538" y2="145" stroke="#d64545" stroke-width="2"/>
  <text x="548" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">C</text>
  <line x1="545" y1="135" x2="545" y2="115" stroke="#d64545" stroke-width="2"/>
  <line x1="551" y1="135" x2="551" y2="115" stroke="#d64545" stroke-width="2"/>
  <text x="548" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">O</text>
  <line x1="558" y1="145" x2="578" y2="145" stroke="#1f2937" stroke-width="2"/>
  <text x="588" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8">O</text>
  <line x1="598" y1="145" x2="618" y2="145" stroke="#2f7fc1" stroke-width="2"/>
  <text x="642" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CH₂CH₃</text>
  <text x="570" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">ETHYL ETHANOATE</text>

  <!-- Water byproduct -->
  <text x="690" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>
  <text x="735" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">H₂O</text>

  <!-- Highlight box around water loss -->
  <rect x="180" y="210" width="130" height="35" rx="4" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="245" y="232" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">H₂O ELIMINATED</text>

  <!-- Details Columns -->
  <rect x="20" y="275" width="370" height="105" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="35" y="298" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">HOW TO NAME ESTERS:</text>
  <text x="35" y="320" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">1. FROM ALCOHOL: ETHANOL -&gt; ETHYL</text>
  <text x="35" y="342" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">2. FROM ACID: ETHANOIC -&gt; ETHANOATE</text>
  <text x="35" y="364" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">FULL NAME: ETHYL ETHANOATE</text>

  <rect x="410" y="275" width="370" height="105" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="425" y="298" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">PROPERTIES AND USES OF ESTERS:</text>
  <text x="425" y="320" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• SWEET, FRUITY SMELL</text>
  <text x="425" y="342" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• VOLATILE (EVAPORATES EASILY)</text>
  <text x="425" y="364" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• ARTIFICIAL FLAVOURS &amp; PERFUMES</text>

  <!-- Bottom Rule -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ESTER LINKAGE (-COO-): A CONDENSATION REACTION BETWEEN -COOH AND -OH</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONCENTRATED SULFURIC ACID ACTS AS A CATALYST AND DEHYDRATING AGENT</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-acids-1',
          type: 'multiple_choice',
          question:
            'What ester is formed when propanoic acid reacts with methanol in the presence of concentrated sulfuric acid catalyst?',
          options: [
            'Propyl methanoate',
            'Methyl propanoate',
            'Ethyl ethanoate',
            'Propyl ethanoate',
          ],
          correctAnswer: 1,
          explanation:
            'The alcohol provides the alkyl prefix (methanol -> methyl) and the carboxylic acid provides the carboxylate suffix (propanoic acid -> propanoate). The resulting ester is methyl propanoate (C2H5COOCH3).',
          misconceptionTarget:
            'Reversing the naming rule to call it propyl methanoate.',
        },
        {
          id: 'quiz-11-acids-2',
          type: 'multiple_choice',
          question:
            'What is the function of concentrated sulfuric acid in the esterification reaction?',
          options: [
            'It acts as an oxidising agent that converts the alcohol into an aldehyde.',
            'It acts as an acid catalyst and dehydrating agent to remove water.',
            'It neutralises the carboxylic acid to form a sulfate salt.',
            'It provides ultraviolet radiation to initiate radical substitution.',
          ],
          correctAnswer: 1,
          explanation:
            'Concentrated H2SO4 acts as a catalyst by increasing the rate of reaction, and as a dehydrating agent by absorbing the water eliminated in the condensation reaction, shifting equilibrium to the right.',
          misconceptionTarget:
            'Thinking sulfuric acid is an oxidising reactant in this process.',
        },
        {
          id: 'quiz-11-acids-3',
          type: 'multiple_choice',
          question:
            'Which physical property makes esters particularly suitable for use in perfumes and cosmetic fragrances?',
          options: [
            'Extremely high boiling points and non-flammability.',
            'Distinctive sweet, fruity aromas and high volatility (evaporates easily).',
            'Strong alkaline pH and corrosive properties.',
            'Ability to dissolve insoluble calcium carbonate rocks.',
          ],
          correctAnswer: 1,
          explanation:
            'Esters possess pleasant, fruity scents and are volatile (evaporate readily due to lack of intermolecular O-H hydrogen bonding), dispersing fragrance into the air effectively.',
          misconceptionTarget:
            'Assuming esters have high boiling points like carboxylic acids.',
        },
      ],
    },
    {
      tag: 'igcse-11-polymers-addition-condensation',
      tags: [
        'polymers',
        'addition-polymerisation',
        'polyethene',
        'repeat-unit',
        'condensation-polymerisation',
        'polyester',
        'polyethylene-terephthalate',
        'terylene',
        'polyamide',
        'nylon',
        'proteins',
        'amino-acids',
        'plastics-pollution',
        'recycling',
      ],
      title: '11.8 Polymers: Addition & Condensation Polymerisation, Plastics & Environment',
      summary:
        'Polymers are large macromolecules formed from small monomer units. Addition polymerisation of alkenes vs condensation polymerisation forming polyesters (PET/Terylene) and polyamides (nylon/proteins). Non-biodegradability challenges.',
      content: `### 1. What Are Polymers?

A **polymer** is a large macromolecule built up from many small, repeating chemical units called **monomers**.
- The chemical process of joining monomers together is called **polymerisation**.
- There are two fundamental types of polymerisation in Cambridge IGCSE: **addition polymerisation** and **condensation polymerisation**.

---

### 2. Addition Polymerisation

In **addition polymerisation**, unsaturated monomers containing a **$\\ce{C=C}$ double bond** join together:
- The double bond in each monomer breaks open into a single bond.
- The monomer units link together to form a very long saturated carbon chain.
- **Key feature:** The polymer is the **only product** formed (no atoms are lost or eliminated).

#### Example: Polymerisation of Ethene to Poly(ethene) (Polythene)
$$n \\ce{CH2=CH2} \\xrightarrow{\\text{High } P, T, \\text{catalyst}} \\ce{[-CH2-CH2-]}_n$$

#### Rules for Drawing Repeat Units in Cambridge Exams:
1. Change the $\\ce{C=C}$ double bond into a $\\ce{C-C}$ single bond.
2. Keep all groups attached to each carbon atom in their identical vertical positions.
3. Draw **continuation bonds** (single bonds extending out through both brackets at each end).
4. Do **NOT** draw double bonds inside the repeat unit!
5. Place brackets around the unit with an subscript '$n$' at the bottom right.

| Monomer Name | Monomer Formula | Polymer Name | Common Uses |
| :--- | :--- | :--- | :--- |
| **Ethene** | $\\ce{CH2=CH2}$ | **Poly(ethene)** | Plastic shopping bags, squeeze bottles, clingfilm |
| **Propene** | $\\ce{CH2=CH-CH3}$ | **Poly(propene)** | Crates, ropes, carpets, car bumpers |
| **Chloroethene** | $\\ce{CH2=CH-Cl}$ | **Poly(chloroethene) (PVC)** | Water drainage pipes, electrical wire insulation |

---

### 3. Condensation Polymerisation

In **condensation polymerisation**, monomers join together with the **elimination of a small molecule** (typically **water, $\\ce{H2O}$**, or hydrogen chloride, $\\ce{HCl}$):
- Monomers must possess **two functional groups** (one at each end of the molecule, i.e., bifunctional).
- Cambridge requires two major classes of condensation polymers: **polyesters** and **polyamides**.

#### A. Polyesters (e.g. PET / Terylene)
- Formed by reacting a **dicarboxylic acid** (contains two $\\ce{-COOH}$ groups) with a **diol** (contains two $\\ce{-OH}$ groups):
  $$\\ce{HOOC-[BOX]-COOH + HO-[BOX]-OH -> [-CO-[BOX]-COO-[BOX]-O-]}_n + 2n\\ce{H2O}$$
- **Ester Linkage:** Each reaction forms an **ester bond ($\\ce{-COO-}$)**.
- **Uses:** Clothing fabrics (Terylene/polyester shirts), plastic beverage bottles (polyethylene terephthalate, PET).

#### B. Polyamides (e.g. Nylon and Natural Proteins)
- **Synthetic Polyamide (Nylon):**
  - Formed from a **dicarboxylic acid** (or diacyl chloride) and a **diamine** (contains two $\\ce{-NH2}$ groups):
    $$\\ce{HOOC-[BOX]-COOH + H2N-[BOX]-NH2 -> [-CO-[BOX]-CONH-[BOX]-NH-]}_n + 2n\\ce{H2O}$$
  - **Amide Linkage:** Contains the **$\\ce{-CO-NH-}$ link**.
  - **Uses:** Ropes, fishing nets, parachute fabric, toothbrush bristles.
- **Natural Polyamides (Proteins):**
  - Proteins are natural condensation polymers formed from **amino acid monomers**.
  - Each amino acid contains both a basic amino group ($\\ce{-NH2}$) and an acidic carboxyl group ($\\ce{-COOH}$): $\\ce{H2N-CH(R)-COOH}$.
  - When amino acids join, they form an **amide link**, known biologically as a **peptide bond**.

| Characteristic | Addition Polymerisation | Condensation Polymerisation |
| :--- | :--- | :--- |
| **Monomer requirement** | Contains $\\ce{C=C}$ double bond | Contains two functional groups per molecule ($\\ce{-COOH}$, $\\ce{-OH}$, $\\ce{-NH2}$) |
| **Number of products** | **One product** only | **Two products** (polymer + small molecule $\\ce{H2O}$) |
| **Chain backbone** | Continuous carbon chain ($\ce{-C-C-C-C-}$) | Contains heteroatoms ($\ce{-C-O-}$ or $\ce{-C-N-}$ links) |

---

### 4. Environmental Challenges of Plastics and Disposal

Synthetic polymers (plastics) are immensely durable, cheap, and versatile, but their widespread use presents severe environmental crises:

1. **Non-biodegradable Nature:**
   - Synthetic addition polymers (polyethene, PVC) cannot be broken down by microbial decomposers because bacteria lack enzymes to cleave their strong $\\ce{C-C}$ bonds.
   - They persist in landfills and oceans for hundreds of years, accumulating in vast quantities.
2. **Marine Pollution:**
   - Animals ingest plastic debris, blocking digestive tracts and causing starvation. Marine organisms become entangled in discarded plastic nets and bags.
3. **Disposal Problems:**
   - **Landfill:** Takes up valuable land space; visually polluting.
   - **Incineration (Burning):**
     - Releases greenhouse gases ($\\ce{CO2}$), accelerating global climate change.
     - Releases **toxic gases** (e.g. burning PVC releases poisonous, acidic **hydrogen chloride gas ($\\ce{HCl}$)** and deadly dioxins; incomplete combustion releases toxic $\\ce{CO}$).
4. **Recycling Solutions:**
   - Sorting, melting, and remoulding plastics saves finite petroleum crude oil reserves and reduces landfill volume, but requires intensive sorting and cleaning.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t11-addition-vs-condensation-polymers-title" data-diagram="igcse-t11-addition-vs-condensation-polymers">
  <title id="igcse-t11-addition-vs-condensation-polymers-title">ADDITION VS CONDENSATION POLYMERISATION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">ADDITION VS CONDENSATION POLYMERS</text>

  <!-- PANEL 1: ADDITION POLYMERISATION -->
  <rect x="20" y="55" width="760" height="185" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="55" width="760" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. ADDITION POLYMERISATION: ETHENE -&gt; POLY(ETHENE)</text>

  <!-- n Ethene Monomer -->
  <text x="95" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">N</text>
  <text x="135" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <text x="175" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <line x1="145" y1="142" x2="165" y2="142" stroke="#1f2937" stroke-width="2"/>
  <line x1="145" y1="148" x2="165" y2="148" stroke="#1f2937" stroke-width="2"/>
  <line x1="135" y1="125" x2="135" y2="138" stroke="#1f2937" stroke-width="2"/>
  <text x="135" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="135" y1="155" x2="135" y2="168" stroke="#1f2937" stroke-width="2"/>
  <text x="135" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="175" y1="125" x2="175" y2="138" stroke="#1f2937" stroke-width="2"/>
  <text x="175" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="175" y1="155" x2="175" y2="168" stroke="#1f2937" stroke-width="2"/>
  <text x="175" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <text x="155" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">MONOMER (ETHENE)</text>

  <!-- Arrow -->
  <path d="M 230 145 L 290 145" stroke="#1f2937" stroke-width="2.5" fill="none"/>
  <polygon points="298,145 286,139 286,151" fill="#1f2937"/>
  <text x="264" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">HIGH P, T</text>

  <!-- Polymer Repeat Unit with path brackets -->
  <path d="M 325 120 L 315 120 L 315 170 L 325 170" stroke="#1f2937" stroke-width="2" fill="none"/>
  <line x1="300" y1="145" x2="340" y2="145" stroke="#1f2937" stroke-width="2"/>
  <text x="350" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <line x1="360" y1="145" x2="385" y2="145" stroke="#1f2937" stroke-width="2"/>
  <text x="395" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">C</text>
  <line x1="405" y1="145" x2="445" y2="145" stroke="#1f2937" stroke-width="2"/>
  <path d="M 420 120 L 430 120 L 430 170 L 420 170" stroke="#1f2937" stroke-width="2" fill="none"/>
  <text x="438" y="170" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">N</text>

  <!-- H bonds in repeat unit -->
  <line x1="350" y1="125" x2="350" y2="138" stroke="#1f2937" stroke-width="2"/>
  <text x="350" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="350" y1="155" x2="350" y2="168" stroke="#1f2937" stroke-width="2"/>
  <text x="350" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="395" y1="125" x2="395" y2="138" stroke="#1f2937" stroke-width="2"/>
  <text x="395" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <line x1="395" y1="155" x2="395" y2="168" stroke="#1f2937" stroke-width="2"/>
  <text x="395" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">H</text>
  <text x="375" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">POLY(ETHENE) REPEAT UNIT</text>

  <!-- Right text card in Panel 1 -->
  <text x="490" y="125" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">• MONOMER HAS C=C DOUBLE BOND</text>
  <text x="490" y="148" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• FORMS ONLY ONE PRODUCT</text>
  <text x="490" y="170" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• NO MOLECULES ELIMINATED</text>
  <text x="490" y="192" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• CONTINUATION BONDS SHOWN</text>

  <!-- PANEL 2: CONDENSATION POLYMERISATION -->
  <rect x="20" y="250" width="760" height="185" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="250" width="760" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. CONDENSATION POLYMERISATION: POLYESTER &amp; POLYAMIDE</text>

  <!-- Polyester block representation -->
  <line x1="45" y1="315" x2="65" y2="315" stroke="#1f2937" stroke-width="2"/>
  <rect x="65" y="300" width="40" height="30" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="85" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C=O</text>
  <rect x="105" y="300" width="50" height="30" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/>
  <text x="130" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">ACID</text>
  <rect x="155" y="300" width="40" height="30" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="175" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C=O</text>
  <line x1="195" y1="315" x2="210" y2="315" stroke="#1f2937" stroke-width="2"/>
  <circle cx="218" cy="315" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="218" y="319" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">O</text>
  <line x1="226" y1="315" x2="240" y2="315" stroke="#1f2937" stroke-width="2"/>
  <rect x="240" y="300" width="50" height="30" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="265" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DIOL</text>
  <line x1="290" y1="315" x2="305" y2="315" stroke="#1f2937" stroke-width="2"/>
  <circle cx="313" cy="315" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="313" y="319" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">O</text>
  <line x1="321" y1="315" x2="340" y2="315" stroke="#1f2937" stroke-width="2"/>
  <text x="195" y="348" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">POLYESTER (PET / TERYLENE): -COO- LINK</text>

  <!-- Polyamide block representation -->
  <line x1="45" y1="380" x2="65" y2="380" stroke="#1f2937" stroke-width="2"/>
  <rect x="65" y="365" width="40" height="30" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="85" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C=O</text>
  <rect x="105" y="365" width="50" height="30" fill="#ececec" stroke="#1f2937" stroke-width="1.5"/>
  <text x="130" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">ACID</text>
  <rect x="155" y="365" width="40" height="30" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="175" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C=O</text>
  <line x1="195" y1="380" x2="210" y2="380" stroke="#1f2937" stroke-width="2"/>
  <rect x="210" y="365" width="28" height="30" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="224" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NH</text>
  <line x1="238" y1="380" x2="250" y2="380" stroke="#1f2937" stroke-width="2"/>
  <rect x="250" y="365" width="50" height="30" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="275" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AMINE</text>
  <line x1="300" y1="380" x2="310" y2="380" stroke="#1f2937" stroke-width="2"/>
  <rect x="310" y="365" width="28" height="30" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="324" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NH</text>
  <line x1="338" y1="380" x2="355" y2="380" stroke="#1f2937" stroke-width="2"/>
  <text x="200" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">POLYAMIDE (NYLON / PROTEIN): -CO-NH- LINK</text>

  <!-- Right text card in Panel 2 -->
  <text x="420" y="315" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">• TWO DIFFERENT MONOMERS JOIN</text>
  <text x="420" y="338" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• RELEASES ONE H₂O PER LINK</text>
  <text x="420" y="360" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• POLYESTER: -COO- ESTER BOND</text>
  <text x="420" y="382" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• POLYAMIDE: -CONH- AMIDE LINK</text>
  <text x="420" y="405" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• PROTEINS: AMINO ACID MONOMERS</text>

  <!-- Bottom Banner -->
  <rect x="20" y="445" width="760" height="35" rx="4" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="467" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ADDITION = POLYMER ONLY; CONDENSATION = POLYMER + WATER BY-PRODUCT</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-polymers-1',
          type: 'multiple_choice',
          question:
            'What type of linkage joins the repeating units in Terylene (PET) polyester?',
          options: [
            'A carbon-carbon double bond',
            'An ester linkage (-COO-)',
            'An amide linkage (-CONH-)',
            'A glycosidic linkage',
          ],
          correctAnswer: 1,
          explanation:
            'Terylene (PET) is a polyester formed from a dicarboxylic acid and a diol, linking monomer units through ester bonds (-COO-) with elimination of water.',
          misconceptionTarget:
            'Confusing polyester linkages (-COO-) with polyamide linkages (-CONH-).',
        },
        {
          id: 'quiz-11-polymers-2',
          type: 'multiple_choice',
          question:
            'Why does the incineration of poly(chloroethene) (PVC) plastic pose a specific environmental hazard compared to burning poly(ethene)?',
          options: [
            'PVC produces poisonous sulfur dioxide gas.',
            'PVC produces toxic and acidic hydrogen chloride (HCl) gas due to chlorine in its monomer.',
            'PVC cannot burn because it is completely incombustible.',
            'PVC produces methane gas which depletes the ozone layer.',
          ],
          correctAnswer: 1,
          explanation:
            'Poly(chloroethene) contains chlorine atoms. When incinerated, it releases toxic, highly acidic hydrogen chloride (HCl) gas, which causes severe respiratory damage and acid rain.',
          misconceptionTarget:
            'Thinking all plastics release only CO2 and H2O when burned.',
        },
        {
          id: 'quiz-11-polymers-3',
          type: 'multiple_choice',
          question:
            'Which feature distinguishes addition polymers from condensation polymers?',
          options: [
            'Addition polymers are biodegradable, whereas condensation polymers are not.',
            'Addition polymerisation forms only the polymer, whereas condensation polymerisation forms the polymer plus a small molecule like water.',
            'Addition polymers are formed from two different monomers, whereas condensation polymers use only one monomer.',
            'Addition polymer repeat units contain carbon-carbon double bonds.',
          ],
          correctAnswer: 1,
          explanation:
            'In addition polymerisation, unsaturated monomers add together to give the polymer as the sole product. In condensation polymerisation, monomers link with the elimination of a small molecule (usually H2O).',
          misconceptionTarget:
            'Believing addition polymers retain double bonds in their backbone.',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-11-exam-practice',
      tags: [
        'exam-practice',
        'paper-2-mcq',
        'paper-4-theory',
        'mark-scheme',
        'cambridge',
      ],
      title: '11.9 Cambridge Exam Practice: Papers 2 & 4 Masterclasses',
      summary:
        'Exam-standard multiple choice and structured theory questions directly matching Cambridge IGCSE 0620 Paper 2 and Paper 4 mark schemes and examiner reports.',
      content: `### Cambridge IGCSE 0620 Exam Practice

#### Question 1 (Paper 2 — Multiple Choice)
Petroleum is separated into fractions by fractional distillation.
Which row correctly pairs a petroleum fraction with its primary use and a correct physical property comparison?

| Option | Fraction | Primary Use | Boiling Point compared to Kerosene |
| :--- | :--- | :--- | :--- |
| **A** | Naphtha | Making roads | Lower |
| **B** | Gasoline | Fuel for cars | Lower |
| **C** | Bitumen | Fuel for ships | Higher |
| **D** | Refinery gas | Jet fuel for aircraft | Higher |

- **Answer:** **B**
- **Explanation:**
  - Gasoline (petrol) is used as fuel for cars and has carbon chain lengths of $C_4-C_{12}$, boiling between $40-100^\\circ\\text{C}$, which is lower than kerosene ($C_{12}-C_{16}$, $150-240^\\circ\\text{C}$).
  - Option A is incorrect because bitumen surfaces roads. Option C is incorrect because fuel oil powers ships. Option D is incorrect because kerosene is jet fuel.

---

#### Question 2 (Paper 2 — Multiple Choice)
A compound has the structural formula:
$$\\ce{CH3-CH=CH-CH3}$$
Which statements about this compound are correct?
1. It is an unsaturated hydrocarbon.
2. It decolourises aqueous bromine without light.
3. Its empirical formula is $\\ce{CH2}$.
4. It is an isomer of cyclobutane.

- **Options:**
  - A: 1 and 2 only
  - B: 1, 2, and 3 only
  - C: 2, 3, and 4 only
  - D: 1, 2, 3, and 4
- **Answer:** **D**
- **Explanation:**
  - Statement 1: Contains a $\\ce{C=C}$ double bond, so it is an unsaturated hydrocarbon.
  - Statement 2: Alkenes decolourise aqueous bromine rapidly at room temperature by addition.
  - Statement 3: Molecular formula is $\\ce{C4H8}$; simplest ratio is $1:2$, so empirical formula is $\\ce{CH2}$.
  - Statement 4: Cyclobutane also has molecular formula $\\ce{C4H8}$, making it an isomer.

---

#### Question 3 (Paper 4 — 6 Marks)
Hydrocarbons can be cracked in the petroleum refinery to yield alkenes and other useful fuels.
**(a)** Define the term *hydrocarbon*. **[1]**
- **Mark Scheme:**
  - A compound containing **carbon and hydrogen only** [1].
  - *(Examiner Tip: Omitting the word "only" forfeits the mark!)*

**(b)** A long-chain alkane, tetradecane ($\\ce{C14H30}$), is cracked over an alumina catalyst at $650^\\circ\\text{C}$.
One molecule of tetradecane produces one molecule of octane ($\\ce{C8H18}$), and three identical molecules of an alkene, **X**.
1. Deduce the formula of alkene **X**. **[1]**
   - **Mark Scheme:**
     $$\\ce{C14H30 -> C8H18 + 3 X}$$
     $$\\text{Remaining carbons} = 14 - 8 = 6 \\implies 6 / 3 = 2 \\text{ carbons}$$
     $$\\text{Remaining hydrogens} = 30 - 18 = 12 \\implies 12 / 3 = 4 \\text{ hydrogens}$$
     - Formula of **X**: $\\ce{C2H4}$ (ethene) [1].
2. State the essential catalyst used in this cracking process. **[1]**
   - **Mark Scheme:** Aluminium oxide / alumina / silica / silicon dioxide / porous pot [1].

**(c)** Alkene **X** undergoes an addition reaction with steam.
1. State the reaction conditions for this manufacture. **[2]**
   - **Mark Scheme:**
     - Temperature: $300^\\circ\\text{C}$ [1].
     - Pressure: $60\\text{ atmospheres}$ ($6000\\text{ kPa}$) **AND** concentrated phosphoric acid catalyst ($\\ce{H3PO4}$) [1].
2. Name the product formed. **[1]**
   - **Mark Scheme:** Ethanol [1].

---

#### Question 4 (Paper 4 — 7 Marks)
Carboxylic acids and alcohols react together to form sweet-smelling organic compounds.
**(a)** Ethanoic acid reacts with ethanol in the presence of concentrated sulfuric acid.
1. State the name of this reaction type. **[1]**
   - **Mark Scheme:** Esterification / condensation [1].
2. State two roles of concentrated sulfuric acid in this reaction. **[2]**
   - **Mark Scheme:**
     - Catalyst / speeds up the rate of reaction [1].
     - Dehydrating agent / absorbs water / shifts equilibrium to produce more ester [1].
3. Draw the **displayed formula** of the organic product formed. **[2]**
   - **Mark Scheme:**
     - Correct ester linkage $\ce{-C(=O)-O-}$ shown [1].
     - Fully displayed formula of ethyl ethanoate with all atoms and all bonds drawn explicitly [1].
     \`\`\`
          H   O       H   H
          |   ||      |   |
      H - C - C - O - C - C - H
          |           |   |
          H           H   H
     \`\`\`
4. Name the organic product formed. **[1]**
   - **Mark Scheme:** Ethyl ethanoate [1].
5. State one commercial use of this product based on its physical properties. **[1]**
   - **Mark Scheme:** Solvent / artificial flavouring / perfumes / nail varnish remover [1].

---

#### Question 5 (Paper 4 — 6 Marks)
Polymers can be classified as addition polymers or condensation polymers.
**(a)** Monomer **A** has the structure $\ce{CH2=CH-COOH}$.
Draw the structure of the addition polymer formed from monomer **A**, showing **two** repeat units. **[2]**
- **Mark Scheme:**
  - Continuous $\ce{-C-C-C-C-}$ single-bond backbone with continuation bonds at both ends [1].
  - Correct pendent groups shown ($\ce{-H}$ and $\ce{-COOH}$) attached to alternating carbons [1].
  \`\`\`
        H     H     H     H
        |     |     |     |
    -- C  -  C  -  C  -  C --
        |     |     |     |
        H    COOH   H    COOH
  \`\`\`

**(b)** Nylon is a synthetic condensation polymer.
1. Name the two types of functional groups present in the monomers used to make nylon. **[2]**
   - **Mark Scheme:**
     - Carboxylic acid group / $\\ce{-COOH}$ / carboxyl [1].
     - Amine group / $\\ce{-NH2}$ / amino [1].
2. State the name of the linkage that joins the monomer units in nylon. **[1]**
   - **Mark Scheme:** Amide linkage / peptide linkage [1].
3. State the name of the small molecule eliminated during this polymerisation. **[1]**
   - **Mark Scheme:** Water / $\\ce{H2O}$ (or hydrogen chloride if acyl chloride is specified) [1].`,
      checkpointQuizzes: [
        {
          id: 'quiz-11-exam-1',
          type: 'multiple_choice',
          question:
            'A student is asked to define a "hydrocarbon" in Cambridge Paper 4. Which definition receives full marks according to the mark scheme?',
          options: [
            'A compound that contains hydrogen and carbon atoms.',
            'A compound containing carbon and hydrogen only.',
            'A mixture of organic compounds obtained from crude oil.',
            'A molecule consisting of hydrogen, carbon, and oxygen.',
          ],
          correctAnswer: 1,
          explanation:
            'The Cambridge mark scheme strictly requires the word "only": a hydrocarbon is a compound containing carbon and hydrogen only. Leaving out "only" loses the mark.',
          misconceptionTarget:
            'Omitting the word "only", which would allow carbohydrates or alcohols to fit the definition.',
        },
        {
          id: 'quiz-11-exam-2',
          type: 'multiple_choice',
          question:
            'In the cracking of C16H34, one molecule of octane (C8H18) and two molecules of an alkene Y are formed. What is alkene Y?',
          options: [
            'Ethene (C2H4)',
            'Propene (C3H6)',
            'Butene (C4H8)',
            'Pentene (C5H10)',
          ],
          correctAnswer: 2,
          explanation:
            'C16H34 -> C8H18 + 2 Y. Remaining carbons = 16 - 8 = 8, so 8 / 2 = 4 carbons. Remaining hydrogens = 34 - 18 = 16, so 16 / 2 = 8 hydrogens. Alkene Y is butene (C4H8).',
          misconceptionTarget:
            'Incorrect stoichiometric division of remaining atoms.',
        },
        {
          id: 'quiz-11-exam-3',
          type: 'multiple_choice',
          question:
            'Which feature is identical in both synthetic nylon and natural protein macromolecules?',
          options: [
            'They both contain the ester linkage -COO-.',
            'They both contain the amide linkage -CONH-.',
            'They are both addition polymers made from alkene monomers.',
            'They both dissolve completely in cold water.',
          ],
          correctAnswer: 1,
          explanation:
            'Both nylon and proteins are polyamides that contain the amide link (-CONH-), also called a peptide bond in biological proteins.',
          misconceptionTarget:
            'Thinking proteins contain ester linkages rather than amide/peptide linkages.',
        },
      ],
    },
  ],
};
