/**
 * igcseTopic09.ts
 * Topic 9: Metals
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_9: MaterialItem = {
  id: 209,
  topic_number: 9,
  title: 'Metals',
  slug: 'metals',
  category: 'Inorganic Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 40,
  summary:
    'Comprehensive study of the physical and chemical properties of metals linked to metallic bonding, the atomic structure and hardness of alloys (brass and stainless steel), the reactivity series and reactions with water, steam, and dilute acids, displacement reactions and redox analysis, rusting of iron and rust prevention methods (barriers, galvanising, sacrificial protection), industrial extraction of iron in the blast furnace and aluminium by electrolysis in molten cryolite, and metal recycling.',
  allTags: [
    'igcse-09-properties-uses-metals',
    'igcse-09-alloys-structure-properties',
    'igcse-09-reactivity-series',
    'igcse-09-reactions-water-steam-acids',
    'igcse-09-displacement-reactions-redox',
    'igcse-09-corrosion-rusting-iron',
    'igcse-09-extraction-of-metals',
    'igcse-09-exam-practice',
    'metals',
    'metallic-bonding',
    'delocalised-electrons',
    'malleability',
    'electrical-conductivity',
    'alloys',
    'brass',
    'stainless-steel',
    'lattice-distortion',
    'reactivity-series',
    'reactions-with-steam',
    'reactions-with-acids',
    'displacement-reactions',
    'thermite-reaction',
    'rusting',
    'sacrificial-protection',
    'galvanising',
    'barrier-protection',
    'blast-furnace',
    'haematite',
    'coke',
    'limestone',
    'slag-formation',
    'bauxite',
    'cryolite',
    'electrolysis-aluminium',
    'recycling-metals',
  ],
  prerequisites: [
    {
      tag: 'igcse-09-properties-uses-metals',
      tags: [
        'metals',
        'metallic-bonding',
        'delocalised-electrons',
        'malleability',
        'electrical-conductivity',
        'uses-of-copper',
        'uses-of-aluminium',
      ],
      title: '1. General Physical Properties and Uses of Metals',
      summary:
        'Physical properties of metals explained by metallic bonding (delocalised electrons and sliding cation layers), along with specific commercial uses of aluminium and copper tied to their properties.',
      content: `### 🧱 General Physical Properties of Metals

Metals make up the majority of known chemical elements in the Periodic Table. In Cambridge IGCSE Chemistry, you must be able to describe their general physical and chemical characteristics, explain these properties in terms of **metallic bonding**, and link specific metals (especially **copper** and **aluminium**) to their commercial uses:

| Physical Property | Description | Atomic Explanation |
| :--- | :--- | :--- |
| **High electrical conductivity** | Conduct electricity in both solid and molten states | Sea of **delocalised electrons** are free to move throughout the lattice towards a positive terminal |
| **High thermal conductivity** | Efficiently transfer thermal energy | Delocalised electrons transfer kinetic energy rapidly through collisions; lattice vibrations |
| **Malleable and ductile** | Malleable: can be hammered into sheets<br>Ductile: can be drawn into wires | Regular layers of positive metal cations can **slide over each other** without breaking the non-directional metallic bond |
| **High melting and boiling points** | Most are solids at room temperature (except $\\ce{Hg}$) | Strong electrostatic attraction between positive metal ions and delocalised electrons requires large amounts of energy to overcome |
| **Lustrous and high density** | Shiny when freshly cut or polished; heavy for their volume | Closely packed lattice of atoms/ions |

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-metal-properties-uses-title" data-diagram="igcse-t09-metal-properties-uses">
  <title id="igcse-t09-metal-properties-uses-title">STRUCTURE OF METALS: ELECTRICAL CONDUCTION AND MALLEABILITY</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">METALLIC STRUCTURE: CONDUCTION AND MALLEABILITY</text>

  <!-- LEFT PANEL: ELECTRICAL CONDUCTION -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">ELECTRICAL CONDUCTION</text>

  <circle cx="75" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="75" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="145" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="145" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="215" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="215" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="285" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="285" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="75" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="75" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="145" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="145" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="215" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="215" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="285" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="285" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="75" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="75" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="145" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="145" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="215" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="215" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="285" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="285" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <!-- Delocalised electrons r=8 -->
  <circle cx="110" cy="148" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="110" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">-</text>

  <circle cx="180" cy="148" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="180" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">-</text>

  <circle cx="250" cy="148" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="250" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">-</text>

  <circle cx="110" cy="202" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="110" y="206" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">-</text>

  <circle cx="180" cy="202" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="180" y="206" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">-</text>

  <circle cx="250" cy="202" r="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="250" y="206" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">-</text>

  <!-- Left & Right Electrodes -->
  <line x1="38" y1="110" x2="38" y2="240" stroke="#d64545" stroke-width="3"/>
  <text x="38" y="102" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">- VE</text>

  <line x1="340" y1="110" x2="340" y2="240" stroke="#2f7fc1" stroke-width="3"/>
  <text x="340" y="102" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">+ VE</text>

  <!-- Flow arrows for electrons -->
  <path d="M 125 148 L 160 148" stroke="#3f8f46" stroke-width="2" fill="none"/>
  <polygon points="165,148 158,144 158,152" fill="#3f8f46"/>

  <path d="M 195 202 L 230 202" stroke="#3f8f46" stroke-width="2" fill="none"/>
  <polygon points="235,202 228,198 228,206" fill="#3f8f46"/>

  <!-- Left explanation box -->
  <rect x="35" y="270" width="340" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="293" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LATTICE OF POSITIVE METAL CATIONS</text>
  <text x="205" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SURROUNDED BY SEA OF DELOCALISED ELECTRONS</text>
  <text x="205" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ELECTRONS ARE FREE TO FLOW TOWARDS + VE</text>
  <text x="205" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">CONDUCTS BOTH ELECTRICITY AND HEAT</text>

  <!-- RIGHT PANEL: MALLEABILITY & DUCTILITY -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">MALLEABILITY AND DUCTILITY</text>

  <!-- Force action arrow -->
  <path d="M 435 125 L 475 125" stroke="#d64545" stroke-width="3" fill="none"/>
  <polygon points="485,125 473,119 473,131" fill="#d64545"/>
  <text x="455" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">FORCE</text>

  <!-- Shifted metal rows in Right Panel -->
  <circle cx="535" cy="125" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="535" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="605" cy="125" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="605" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="675" cy="125" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="675" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="745" cy="125" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="745" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="500" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="500" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="570" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="570" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="640" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="640" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="710" cy="175" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="710" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="500" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="500" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="570" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="570" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="640" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="640" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <circle cx="710" cy="225" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="710" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">+</text>

  <!-- Right explanation box -->
  <rect x="425" y="270" width="340" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="293" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REGULAR LAYERS OF IDENTICAL CATIONS</text>
  <text x="595" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LAYERS EASILY SLIDE OVER ONE ANOTHER</text>
  <text x="595" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">METALLIC BONDS REMAIN INTACT (NO SHATTER)</text>
  <text x="595" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">MALLEABLE (HAMMERED) &amp; DUCTILE (DRAWN)</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="48" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="414" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">KEY USES: COPPER FOR ELECTRICAL WIRING (DUCTILE &amp; CONDUCTIVE)</text>
  <text x="400" y="432" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ALUMINIUM FOR AIRCRAFT BODIES (LOW DENSITY) &amp; CABLES (LIGHT &amp; CONDUCTIVE)</text>
</svg>

### ✈️ Commercial Uses of Aluminium and Copper

Cambridge mark schemes require candidates to specify **both the practical application and the exact physical property** that explains that choice:

#### Aluminium ($\\ce{Al}$)
1. **Manufacture of aircraft bodies**:
   - *Property*: **Low density** combined with high tensile strength.
2. **Overhead electrical transmission cables**:
   - *Property*: **Low density** and **good electrical conductivity** (cables can span long distances between pylons without snapping under excessive weight; often reinforced with a steel core).
3. **Food containers and drinks cans**:
   - *Property*: **Resistance to corrosion** and non-toxic. Aluminium reacts rapidly with atmospheric oxygen to produce an adherent, non-porous oxide layer ($\\ce{Al2O3}$) that protects the underlying metal.

#### Copper ($\\ce{Cu}$)
1. **Electrical wiring**:
   - *Property*: **Very high electrical conductivity** and **ductility** (can be drawn into thin flexible wires).
2. **Saucepans and cookware base**:
   - *Property*: **High thermal conductivity**, high melting point, and **unreactivity** with food and boiling water.
3. **Plumbing and water pipes**:
   - *Property*: **Resistance to corrosion** (does not react with water or steam) and **malleability** (easily bent to navigate walls).

> [!TIP]
> **Examiner Advice on Aluminium's Apparent Unreactivity**:
> Candidates frequently lose marks by writing "aluminium is unreactive". Aluminium is actually high in the reactivity series! Always state: *"Aluminium is covered with an unreactive, adherent, protective layer of aluminium oxide ($\\ce{Al2O3}$) that prevents reaction with oxygen or water."*
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-properties-q1',
          type: 'multiple_choice',
          question:
            'Why are metals malleable (capable of being hammered into thin sheets without shattering)?',
          options: [
            'Delocalised electrons repel each other when struck',
            'Layers of positive metal ions can slide over each other without breaking the metallic bond',
            'Covalent bonds between metal atoms are flexible and stretch',
            'Metal cations expand when pressure is applied',
          ],
          correctAnswer: 1,
          explanation:
            'In a metallic lattice, positive cations are arranged in neat, regular layers. When stress is applied, these layers slide over each other, while the delocalised electrons maintain non-directional electrostatic attraction throughout the lattice.',
          misconceptionTarget: 'Believing metallic bonds break during deformation',
        },
        {
          id: 'chk-igcse-09-properties-q2',
          type: 'multiple_choice',
          question:
            'Which property makes aluminium uniquely suitable for constructing aircraft bodies?',
          options: [
            'High electrical conductivity',
            'High density and extreme weight',
            'Low density and high strength-to-weight ratio',
            'Very low melting point',
          ],
          correctAnswer: 2,
          explanation:
            'Aluminium possesses a remarkably low density (~2.7 g/cm³) compared to iron (~7.9 g/cm³), drastically reducing aircraft weight to save fuel while offering excellent structural strength.',
          misconceptionTarget: 'Confusing low density with low melting point',
        },
        {
          id: 'chk-igcse-09-properties-q3',
          type: 'multiple_choice',
          question:
            'Why is copper used for domestic water pipes instead of iron?',
          options: [
            'Copper forms an acidic solution with water',
            'Copper is located below hydrogen in the reactivity series and does not react with water',
            'Copper reacts with water to form an insoluble copper hydroxide precipitate',
            'Copper dissolves in hot water to release minerals',
          ],
          correctAnswer: 1,
          explanation:
            'Copper lies below hydrogen in the reactivity series. It cannot displace hydrogen from water or steam, so it does not corrode or react in plumbing.',
          misconceptionTarget: 'Thinking copper forms protective rust',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-09-alloys-structure-properties',
      tags: [
        'alloys',
        'brass',
        'stainless-steel',
        'lattice-distortion',
        'hardness',
        'tensile-strength',
      ],
      title: '2. Alloys and Their Atomic Properties',
      summary:
        'Definition of an alloy as a mixture of a metal with other elements, structural explanation for why alloys are harder than pure metals (lattice distortion), and compositions of brass and stainless steel.',
      content: `### 🧪 What is an Alloy?

An **alloy** is a **mixture of a metal with other elements** (which may be other metals or non-metals such as carbon).

- Alloys are physical mixtures, not chemical compounds; the components are not chemically bonded in fixed stoichiometric ratios.
- Pure metals are often too soft for demanding architectural, structural, and mechanical applications. Alloying enhances **hardness**, **tensile strength**, and **resistance to corrosion**.

---

### 🔬 Why Are Alloys Harder Than Pure Metals?

This is one of the most frequently examined explanations in Cambridge IGCSE Chemistry:

1. **In pure metals**:
   - All atoms/ions are of the **same size**.
   - They form neat, regular rows and layers in a lattice.
   - When a force is applied, these regular layers **slide easily over one another**, making pure metals relatively soft.

2. **In an alloy**:
   - Atoms of **different sizes** are introduced into the lattice.
   - These different-sized atoms **distort the regular arrangement** of the layers.
   - The distorted structure **prevents the layers from sliding easily** past one another when a force is applied.
   - Consequently, the alloy is **harder and stronger** than the parent metal.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-alloy-structure-hardness-title" data-diagram="igcse-t09-alloy-structure-hardness">
  <title id="igcse-t09-alloy-structure-hardness-title">PURE METALS VS ALLOYS: ATOMIC STRUCTURE AND HARDNESS</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">PURE METALS VS ALLOYS: STRUCTURE AND HARDNESS</text>

  <!-- LEFT PANEL: PURE METAL -->
  <rect x="20" y="55" width="370" height="275" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">PURE METAL (SOFT AND MALLEABLE)</text>

  <!-- Force arrow -->
  <path d="M 50 120 L 90 120" stroke="#d64545" stroke-width="3" fill="none"/>
  <polygon points="100,120 88,114 88,126" fill="#d64545"/>
  <text x="70" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">FORCE</text>

  <!-- Pure metal regular lattice (3 rows of 5 atoms r=16) -->
  <circle cx="135" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="175" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="215" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="255" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="295" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="115" cy="165" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="155" cy="165" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="195" cy="165" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="235" cy="165" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="275" cy="165" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="115" cy="205" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="155" cy="205" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="195" cy="205" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="235" cy="205" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="275" cy="205" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Left Callout Box -->
  <rect x="35" y="240" width="340" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="263" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REGULAR ROWS OF IDENTICAL SIZED ATOMS</text>
  <text x="205" y="283" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LAYERS SLIDE EASILY UNDER FORCE</text>
  <text x="205" y="303" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RELATIVELY SOFT, LOW TENSILE STRENGTH</text>

  <!-- RIGHT PANEL: ALLOY -->
  <rect x="410" y="55" width="370" height="275" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">ALLOY (HARD AND STRONG)</text>

  <!-- Blocked force arrow -->
  <path d="M 440 120 L 480 120" stroke="#d64545" stroke-width="3" fill="none"/>
  <line x1="480" y1="110" x2="480" y2="130" stroke="#d64545" stroke-width="3"/>
  <text x="460" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">BLOCKED</text>

  <!-- Alloy distorted lattice: Base atoms r=16 (#8fd3ef), Solute atoms r=12 (#fcc68b) -->
  <circle cx="515" cy="122" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="552" cy="120" r="12" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="590" cy="128" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="632" cy="122" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="672" cy="125" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="505" cy="165" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="545" cy="162" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="585" cy="170" r="12" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="625" cy="164" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="665" cy="167" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <circle cx="508" cy="207" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="546" cy="204" r="12" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="584" cy="208" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="624" cy="205" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="664" cy="206" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Right Callout Box -->
  <rect x="425" y="240" width="340" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="263" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DIFFERENT SIZED ATOMS DISTORT LATTICE</text>
  <text x="595" y="283" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LAYERS CANNOT SLIP EASILY PAST EACH OTHER</text>
  <text x="595" y="303" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">MUCH HARDER AND STRONGER THAN PURE METAL</text>

  <!-- BOTTOM CARDS -->
  <!-- Left Card: Brass -->
  <rect x="20" y="345" width="370" height="95" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="205" y="368" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BRASS: COPPER (70%) + ZINC (30%)</text>
  <text x="205" y="390" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">HARDER &amp; MORE LUSTROUS THAN COPPER</text>
  <text x="205" y="412" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">USES: MUSICAL INSTRUMENTS &amp; PINS</text>

  <!-- Right Card: Stainless Steel -->
  <rect x="410" y="345" width="370" height="95" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="595" y="368" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">STAINLESS STEEL: Fe + Cr + Ni + C</text>
  <text x="595" y="390" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">STRONG AND CORROSION RESISTANT</text>
  <text x="595" y="412" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">USES: CUTLERY &amp; SURGICAL TOOLS</text>
</svg>

---

### 🎺 Key Alloys in Cambridge IGCSE Chemistry

| Alloy | Composition | Key Properties | Common Uses |
| :--- | :--- | :--- | :--- |
| **Brass** | Copper ($\\sim 70\\%$) + Zinc ($\\sim 30\\%$) | Harder than copper, lustrous, acoustic resonance, corrosion-resistant | Musical instruments (trumpets, horns), decorative door knobs, electrical plug pins |
| **Stainless Steel** | Iron + Chromium + Nickel + Carbon | Very hard, high tensile strength, **does not rust** | Cutlery, kitchen sinks, surgical instruments, chemical reaction vessels |
| **Bronze** | Copper + Tin | Hard, resistant to seawater corrosion | Statues, ship propellers, bells |
| **Mild Steel** | Iron + Low carbon ($\\sim 0.25\\%$) | Malleable, easily shaped, ductile | Car body panels, construction girders, bridges |
| **High Carbon Steel** | Iron + Higher carbon ($\\sim 1\\%$) | Extremely hard but more brittle | Cutting tools, drill bits, masonry chisels |

> [!IMPORTANT]
> **Key Cambridge Marking Criteria**:
> When asked: *"Explain why brass is harder than pure copper."*
> - **Mark 1**: Copper and zinc atoms have **different sizes**.
> - **Mark 2**: This **disrupts / distorts the regular layers / lattice**.
> - **Mark 3**: The layers cannot **slide over each other easily**.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-alloys-q1',
          type: 'multiple_choice',
          question:
            'What is the fundamental structural reason why alloys are harder than pure metals?',
          options: [
            'Covalent bonds form between the different metal atoms',
            'Different-sized atoms disrupt the regular lattice, preventing layers from sliding easily',
            'Alloys have fewer delocalised electrons to hold the lattice together',
            'Alloys have lower melting points so they deform under less heat',
          ],
          correctAnswer: 1,
          explanation:
            'Introducing atoms of a different size distorts the neat planes of the lattice. This structural disruption stops the atomic layers from sliding smoothly over one another when stress is applied.',
          misconceptionTarget: 'Assuming covalent bonding forms within alloys',
        },
        {
          id: 'chk-igcse-09-alloys-q2',
          type: 'multiple_choice',
          question: 'Brass is an alloy composed of which two elements?',
          options: [
            'Iron and Carbon',
            'Copper and Tin',
            'Copper and Zinc',
            'Aluminium and Magnesium',
          ],
          correctAnswer: 2,
          explanation:
            'Brass is an alloy of copper (~70%) and zinc (~30%). Bronze, by contrast, is copper and tin.',
          misconceptionTarget: 'Confusing brass with bronze',
        },
        {
          id: 'chk-igcse-09-alloys-q3',
          type: 'multiple_choice',
          question:
            'Which element is added to iron along with nickel and carbon to make stainless steel rust-resistant?',
          options: ['Chromium', 'Lead', 'Sodium', 'Calcium'],
          correctAnswer: 0,
          explanation:
            'Chromium forms a self-healing, microscopic protective chromium(III) oxide barrier layer on the steel surface that prevents atmospheric oxygen and water from oxidising iron.',
          misconceptionTarget: 'Guessing lead or group 1 metals',
        },
      ],
    },
    {
      tag: 'igcse-09-reactivity-series',
      tags: [
        'reactivity-series',
        'carbon-benchmark',
        'hydrogen-benchmark',
        'potassium',
        'sodium',
        'copper',
        'gold',
      ],
      title: '3. The Reactivity Series Hierarchy',
      summary:
        'Complete ranking of metals by reactivity, the fundamental electron-loss definition of reactivity, and the benchmarks established by carbon and hydrogen.',
      content: `### ⚡ The Reactivity Series of Metals

The **reactivity series** is an arrangement of metals in order of their chemical reactivity, from most reactive at the top to least reactive at the bottom. 

A metal's reactivity corresponds to its **tendency to lose electrons to form positive ions (cations)**:
$$\\ce{M -> M^{n+} + ne^-}$$

Metals at the top of the series lose electrons with great ease (readily oxidised, powerful reducing agents). Metals at the bottom hold onto their valence electrons tightly.

---

### 📋 The Full Reactivity Order

You must memorise this exact order for Cambridge 0620:

$$\\ce{K > Na > Ca > Mg > Al > [C] > Zn > Fe > [H] > Cu > Ag > Au}$$

**Mnemonic**:
- **P**lease (**P**otassium, $\\ce{K}$)
- **S**end (**S**odium, $\\ce{Na}$)
- **C**ats (**C**alcium, $\\ce{Ca}$)
- **M**onkeys (**M**agnesium, $\\ce{Mg}$)
- **A**nd (**A**luminium, $\\ce{Al}$)
- [**C**arbon] (**C**arbon, $\\ce{C}$)
- **Z**ebras (**Z**inc, $\\ce{Zn}$)
- **I**n (**I**ron, $\\ce{Fe}$)
- [**H**eavy] (**H**ydrogen, $\\ce{H}$)
- **C**ages (**C**opper, $\\ce{Cu}$)
- **S**ecurely (**S**ilver, $\\ce{Ag}$)
- **G**uarded (**G**old, $\\ce{Au}$)

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-reactivity-series-title" data-diagram="igcse-t09-reactivity-series">
  <title id="igcse-t09-reactivity-series-title">THE REACTIVITY SERIES OF METALS</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">THE REACTIVITY SERIES OF METALS</text>

  <!-- LEFT COLUMN: REACTIVITY LADDER -->
  <rect x="20" y="55" width="200" height="445" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="200" height="28" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2"/>
  <text x="120" y="74" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">REACTIVITY ORDER</text>

  <!-- Reactivity entries: 12 elements -->
  <rect x="30" y="92" width="180" height="26" rx="4" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">K  POTASSIUM</text>

  <rect x="30" y="125" width="180" height="26" rx="4" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="143" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Na  SODIUM</text>

  <rect x="30" y="158" width="180" height="26" rx="4" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="176" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Ca  CALCIUM</text>

  <rect x="30" y="191" width="180" height="26" rx="4" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="209" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Mg  MAGNESIUM</text>

  <rect x="30" y="224" width="180" height="26" rx="4" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="242" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Al  ALUMINIUM</text>

  <rect x="30" y="257" width="180" height="26" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[C]  CARBON</text>

  <rect x="30" y="290" width="180" height="26" rx="4" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="308" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Zn  ZINC</text>

  <rect x="30" y="323" width="180" height="26" rx="4" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="341" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Fe  IRON</text>

  <rect x="30" y="356" width="180" height="26" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="374" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[H]  HYDROGEN</text>

  <rect x="30" y="389" width="180" height="26" rx="4" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="407" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Cu  COPPER</text>

  <rect x="30" y="422" width="180" height="26" rx="4" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="440" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Ag  SILVER</text>

  <rect x="30" y="455" width="180" height="26" rx="4" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" data-box="true"/>
  <text x="120" y="473" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Au  GOLD</text>

  <!-- MIDDLE COLUMN: REACTION WITH WATER & ACID -->
  <rect x="235" y="55" width="270" height="445" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="235" y="55" width="270" height="28" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="370" y="74" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">REACTION BEHAVIOUR</text>

  <!-- Block 1: K, Na, Ca -->
  <rect x="245" y="92" width="250" height="92" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="370" y="112" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">REACT WITH COLD WATER</text>
  <text x="370" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2M + 2H₂O -> 2MOH + H₂</text>
  <text x="370" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">VIOLENT EFFERVESCENCE</text>
  <text x="370" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXPLOSIVE WITH DILUTE ACIDS</text>

  <!-- Block 2: Mg, Al, Zn, Fe -->
  <rect x="245" y="195" width="250" height="154" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="370" y="217" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">REACT WITH STEAM</text>
  <text x="370" y="237" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">M + H₂O(g) -> MO + H₂(g)</text>
  <text x="370" y="262" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">REACT WITH DILUTE ACIDS</text>
  <text x="370" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">M + 2HCL -> MCL₂ + H₂</text>
  <text x="370" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Mg: RAPID BUBBLING</text>
  <text x="370" y="324" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Zn, Fe: STEADY / SLOW BUBBLING</text>

  <!-- Block 3: Cu, Ag, Au -->
  <rect x="245" y="360" width="250" height="121" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="370" y="385" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NO REACTION WITH WATER</text>
  <text x="370" y="407" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NO REACTION WITH STEAM</text>
  <text x="370" y="432" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NO REACTION WITH ACIDS</text>
  <text x="370" y="454" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CANNOT DISPLACE HYDROGEN</text>

  <!-- RIGHT COLUMN: EXTRACTION METHODS -->
  <rect x="520" y="55" width="260" height="445" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="520" y="55" width="260" height="28" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="650" y="74" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXTRACTION METHOD</text>

  <!-- Block A: Above Carbon (K to Al) -->
  <rect x="530" y="92" width="240" height="158" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="650" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ABOVE CARBON IN SERIES</text>
  <text x="650" y="138" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXTRACTED BY ELECTROLYSIS</text>
  <text x="650" y="158" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">MOLTEN ORES / SALTS</text>
  <text x="650" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">VERY STRONG BONDING</text>
  <text x="650" y="202" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CARBON CANNOT REDUCE THEM</text>
  <text x="650" y="224" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">EXPENSIVE (HIGH ELECTRICITY)</text>

  <!-- Block B: Below Carbon (Zn to Cu) -->
  <rect x="530" y="260" width="240" height="140" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="650" y="283" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">BELOW CARBON IN SERIES</text>
  <text x="650" y="306" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REDUCED BY CARBON / CO</text>
  <text x="650" y="326" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">HEATED IN BLAST FURNACE</text>
  <text x="650" y="348" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C TAKES OXYGEN FROM OXIDE</text>
  <text x="650" y="370" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">FEASIBLE AND CHEAPER</text>

  <!-- Block C: Native (Ag, Au) -->
  <rect x="530" y="410" width="240" height="71" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="650" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">FOUND NATIVE (UNCOMBINED)</text>
  <text x="650" y="455" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FOUND AS PURE ELEMENTS</text>
</svg>

---

### ⚓ Why Carbon and Hydrogen Are Included

Although carbon and hydrogen are **non-metals**, they serve as indispensable benchmarks:

1. **Carbon benchmark**:
   - Divides metals extracted by **electrolysis** (above carbon) from those extracted by **reduction with carbon** (below carbon).
   - Carbon can displace any metal below it from its metal oxide upon heating:
     $$\\ce{2Fe2O3(s) + 3C(s) -> 4Fe(l) + 3CO2(g)}$$

2. **Hydrogen benchmark**:
   - Divides metals that **react with dilute acids** to release hydrogen gas (above hydrogen) from those that do not react with dilute acids (below hydrogen):
     $$\\ce{Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)}$$
     $$\\ce{Cu(s) + HCl(aq) -> \text{No reaction}}$$
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-reactivity-q1',
          type: 'multiple_choice',
          question:
            'Which metal can be extracted from its oxide by heating with carbon in a blast furnace?',
          options: [
            'Aluminium',
            'Magnesium',
            'Iron',
            'Potassium',
          ],
          correctAnswer: 2,
          explanation:
            'Iron is below carbon in the reactivity series. Carbon is more reactive than iron and can reduce iron(III) oxide. Aluminium, magnesium, and potassium are above carbon and must be extracted by electrolysis.',
          misconceptionTarget: 'Thinking all metals can be reduced with carbon',
        },
        {
          id: 'chk-igcse-09-reactivity-q2',
          type: 'multiple_choice',
          question:
            'What happens when a piece of copper is added to dilute hydrochloric acid?',
          options: [
            'Violent bubbling and hydrogen gas evolved',
            'Slow effervescence forming a green solution',
            'No reaction takes place',
            'A copper chloride precipitate forms immediately',
          ],
          correctAnswer: 2,
          explanation:
            'Copper lies below hydrogen in the reactivity series. It is less reactive than hydrogen and cannot reduce $\\ce{H+}$ ions to form $\\ce{H2}$ gas.',
          misconceptionTarget: 'Assuming all metals react with dilute acids',
        },
        {
          id: 'chk-igcse-09-reactivity-q3',
          type: 'multiple_choice',
          question:
            'Which observation correctly reflects the reaction of calcium with cold water?',
          options: [
            'No reaction occurs',
            'Explodes violently with a lilac flame',
            'Steady effervescence; cloudy white suspension and alkaline solution form',
            'Reacts only when heated over a Bunsen burner',
          ],
          correctAnswer: 2,
          explanation:
            'Calcium reacts steadily with cold water: $\\ce{Ca(s) + 2H2O(l) -> Ca(OH)2(s/aq) + H2(g)}$. Calcium hydroxide is only sparingly soluble, giving a cloudy white suspension (limewater).',
          misconceptionTarget: 'Confusing calcium with potassium or magnesium',
        },
      ],
    },
    {
      tag: 'igcse-09-reactions-water-steam-acids',
      tags: [
        'steam-reaction',
        'water-reaction',
        'magnesium-steam',
        'suck-back',
        'acid-reactions',
      ],
      title: '4. Experimental Reactions with Water, Steam, and Acids',
      summary:
        'Detailed comparison of cold water versus steam products (hydroxides vs oxides), experimental procedure and safety for the magnesium-steam reaction, and acid reaction trends.',
      content: `### 🌊 Cold Water vs Steam: Critical Syllabus Distinction

A critical trap in Cambridge exams is confusing the products formed when a metal reacts with **cold liquid water** versus **gaseous steam**:

$$\\text{Metal} + \\text{Cold Water (l)} \\longrightarrow \\text{Metal Hydroxide (aq/s)} + \\text{Hydrogen Gas (g)}$$
$$\\text{Metal} + \\text{Steam (g)} \\longrightarrow \\text{Metal Oxide (s)} + \\text{Hydrogen Gas (g)}$$

| Metal | Reaction with Cold Water | Reaction with Steam |
| :--- | :--- | :--- |
| **Potassium ($\\ce{K}$)** | Melts into a sphere, darts violently on surface, ignites with a **lilac flame**, effervesces vigorously:<br>$\\ce{2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)}$ | Explosively violent (too dangerous to test) |
| **Sodium ($\\ce{Na}$)** | Melts into a silvery ball, fizzes rapidly, darts around, yellow/orange flame if caught:<br>$\\ce{2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)}$ | Explosively dangerous |
| **Calcium ($\\ce{Ca}$)** | Sinks, fizzes steadily, produces cloudy white precipitate of $\\ce{Ca(OH)2}$:<br>$\\ce{Ca(s) + 2H2O(l) -> Ca(OH)2(s) + H2(g)}$ | Very vigorous |
| **Magnesium ($\\ce{Mg}$)** | **Extremely slow**: very few bubbles over several days:<br>$\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)}$ | **Burns with an intense bright white light** forming white solid ash ($\\ce{MgO}$):<br>$\\ce{Mg(s) + H2O(g) -> MgO(s) + H2(g)}$ |
| **Zinc ($\\ce{Zn}$)** | No reaction | Hot zinc burns slowly in steam forming yellow oxide that cools to white ($\\ce{ZnO}$):<br>$\\ce{Zn(s) + H2O(g) -> ZnO(s) + H2(g)}$ |
| **Iron ($\\ce{Fe}$)** | Rusts very slowly over weeks | Heated iron glows red, reacts slowly to form black tri-iron tetroxide ($\\ce{Fe3O4}$):<br>$\\ce{3Fe(s) + 4H2O(g) <=> Fe3O4(s) + 4H2(g)}$ |
| **Copper ($\\ce{Cu}$)** | **No reaction** | **No reaction** |

---

### 🔬 Laboratory Apparatus: Magnesium with Steam

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-metals-with-water-steam-title" data-diagram="igcse-t09-metals-with-water-steam">
  <title id="igcse-t09-metals-with-water-steam-title">REACTION OF MAGNESIUM WITH STEAM</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">APPARATUS: REACTION OF MAGNESIUM WITH STEAM</text>

  <!-- Horizontal Boiling Tube (Glassware) -->
  <rect x="50" y="115" width="510" height="90" rx="20" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>

  <!-- Damp mineral wool -->
  <path d="M 70 135 C 80 125, 120 125, 140 135 C 150 155, 150 175, 140 190 C 120 200, 80 200, 70 190 Z" fill="#d6f0fb" stroke="#2f7fc1" stroke-width="1.5"/>
  <text x="110" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DAMP WOOL</text>

  <!-- Magnesium ribbon coil -->
  <rect x="330" y="150" width="80" height="20" rx="4" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <text x="370" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.8">Mg RIBBON</text>

  <!-- Rubber bung -->
  <polygon points="550,125 570,120 570,200 550,195" fill="#4b5563" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Glass Delivery tube -->
  <path d="M 560 160 L 720 160" stroke="#1f2937" stroke-width="3" fill="none"/>
  <path d="M 720 160 L 735 150" stroke="#1f2937" stroke-width="2" fill="none"/>

  <!-- Burning hydrogen flame -->
  <path d="M 735 150 C 740 135, 755 125, 750 145 C 745 155, 738 152, 735 150 Z" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5"/>
  <text x="745" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">H₂ BURNS</text>

  <!-- Bunsen 1 (Gentle heat) -->
  <polygon points="100,290 120,290 115,250 105,250" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 105 250 C 105 235, 115 235, 115 250 Z" fill="#fde58a" stroke="#d64545" stroke-width="1.5"/>
  <text x="110" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">GENTLE HEAT</text>
  <text x="110" y="330" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(BOILS WATER)</text>

  <!-- Bunsen 2 (Strong heat) -->
  <polygon points="360,290 380,290 375,250 365,250" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 365 250 C 360 230, 380 230, 375 250 Z" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5"/>
  <text x="370" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">STRONG HEAT</text>
  <text x="370" y="330" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(BURNS Mg)</text>

  <!-- Steam flow arrows inside tube -->
  <path d="M 170 160 L 290 160" stroke="#2f7fc1" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
  <polygon points="295,160 288,156 288,164" fill="#2f7fc1"/>
  <text x="230" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">STEAM FLOWS</text>

  <!-- Observations & Equation Box -->
  <rect x="30" y="355" width="740" height="85" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="378" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CHEMICAL EQUATION: Mg(s) + H₂O(g) -> MgO(s) + H₂(g)</text>
  <text x="400" y="402" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">OBSERVATIONS: Mg BURNS WITH BRIGHT WHITE LIGHT; WHITE SOLID ASH (MgO) FORMS</text>
  <text x="400" y="423" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">WITH STEAM FORMS OXIDE (MgO); WITH COLD WATER FORMS HYDROXIDE (Mg(OH)₂)</text>
</svg>

#### Procedure & Critical Safety:
1. Damp mineral wool is heated gently to generate a steady stream of steam.
2. Magnesium ribbon is strongly heated until it glows red, then bursts into an intense white flame.
3. The hydrogen gas produced can be burned at the jet nozzle or collected over water.
4. **Safety Precaution (Suck-back Prevention)**: The delivery tube must be removed from the water trough *before* the Bunsen flame is removed. Otherwise, cooling gas inside will create a partial vacuum, sucking cold water into the hot boiling tube and shattering it.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-steam-q1',
          type: 'multiple_choice',
          question:
            'What product is formed when magnesium reacts with steam, and how does it differ from the reaction with cold water?',
          options: [
            'Magnesium hydroxide with steam; magnesium oxide with cold water',
            'Magnesium oxide with steam; magnesium hydroxide with cold water',
            'Magnesium carbonate with steam; magnesium sulfate with cold water',
            'Magnesium chloride with steam; magnesium hydride with cold water',
          ],
          correctAnswer: 1,
          explanation:
            'Magnesium burns in steam to form white solid magnesium oxide: $\\ce{Mg(s) + H2O(g) -> MgO(s) + H2(g)}$. In cold water, it reacts sluggishly to produce magnesium hydroxide: $\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)}$.',
          misconceptionTarget: 'Thinking steam and liquid water give identical products',
        },
        {
          id: 'chk-igcse-09-steam-q2',
          type: 'multiple_choice',
          question:
            'Why must the delivery tube be removed from the water bath before removing the Bunsen flame in the steam apparatus?',
          options: [
            'To prevent hydrogen gas from escaping into the room',
            'To prevent cold water from sucking back into the hot tube and cracking it',
            'To allow magnesium oxide to escape',
            'To stop the magnesium from melting the glass',
          ],
          correctAnswer: 1,
          explanation:
            'When the heat is removed, the gas inside contracts, creating a partial vacuum. If the delivery tube is still under water, cold water will be sucked back into the hot boiling tube, causing thermal shock and shattering the glass.',
          misconceptionTarget: 'Forgetting thermal shock in laboratory glassware',
        },
        {
          id: 'chk-igcse-09-steam-q3',
          type: 'multiple_choice',
          question:
            'Which gas test confirms that hydrogen was produced in the metal-acid reaction?',
          options: [
            'Relights a glowing splint',
            'Turns damp red litmus paper blue',
            'Extinguishes a lighted splint with a characteristic squeaky pop sound',
            'Turns limewater cloudy white',
          ],
          correctAnswer: 2,
          explanation:
            'Hydrogen gas is tested with a lighted splint; it burns rapidly with atmospheric oxygen with a squeaky pop sound.',
          misconceptionTarget: 'Confusing hydrogen test with oxygen or carbon dioxide tests',
        },
      ],
    },
    {
      tag: 'igcse-09-displacement-reactions-redox',
      tags: [
        'displacement-reactions',
        'thermite-reaction',
        'net-ionic-equations',
        'redox',
        'oxidation-state',
      ],
      title: '5. Displacement Reactions and Redox Competition',
      summary:
        'Solution displacement reactions (zinc in copper sulfate), solid state competition (thermite reaction), net ionic equations, and tracking redox roles.',
      content: `### 🔁 Displacement in Solution and Solid State

A **displacement reaction** occurs when a **more reactive element displaces a less reactive element** from its compound:
- The **more reactive metal** oxidises (loses electrons) $\\implies$ acts as the **reducing agent**.
- The **less reactive metal cation** reduces (gains electrons) $\\implies$ acts as the **oxidising agent**.

---

### 🧪 Zinc in Copper(II) Sulfate Solution

$$\\ce{Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)}$$

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-displacement-metal-reactions-title" data-diagram="igcse-t09-displacement-metal-reactions">
  <title id="igcse-t09-displacement-metal-reactions-title">METAL DISPLACEMENT: SOLUTION AND SOLID COMPETITION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">METAL DISPLACEMENT: SOLUTION AND SOLID COMPETITION</text>

  <!-- LEFT PANEL: SOLUTION DISPLACEMENT -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">SOLUTION DISPLACEMENT (Zn IN CuSO₄)</text>

  <!-- Beaker sketch -->
  <rect x="80" y="110" width="120" height="130" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <!-- Liquid fill -->
  <rect x="82" y="145" width="116" height="93" rx="2" fill="#d6f0fb"/>

  <!-- Zinc strip -->
  <rect x="130" y="95" width="20" height="120" rx="2" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <!-- Copper deposit at bottom of strip -->
  <rect x="128" y="170" width="24" height="45" rx="2" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5"/>

  <!-- Callout pointers -->
  <text x="275" y="135" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">BLUE Cu²⁺ SOLUTION</text>
  <text x="275" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(FADES TO COLOURLESS)</text>

  <text x="275" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RED-BROWN SOLID</text>
  <text x="275" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">(COPPER METAL DEPOSITED)</text>

  <!-- Left Detail Box -->
  <rect x="35" y="255" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Zn(s) + CuSO₄(aq) -> ZnSO₄(aq) + Cu(s)</text>
  <text x="205" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">IONIC: Zn + Cu²⁺ -> Zn²⁺ + Cu</text>
  <text x="205" y="323" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Zn IS OXIDISED (LOSES 2e⁻, MORE REACTIVE)</text>
  <text x="205" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Cu²⁺ IS REDUCED (GAINS 2e⁻, LESS REACTIVE)</text>

  <!-- RIGHT PANEL: SOLID THERMITE DISPLACEMENT -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">SOLID THERMITE REACTION</text>

  <!-- Crucible sketch -->
  <polygon points="530,120 660,120 630,210 560,210" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <polygon points="535,135 655,135 625,205 565,205" fill="#fcc68b"/>

  <!-- Magnesium fuse ribbon -->
  <path d="M 595 135 L 595 105" stroke="#8a939c" stroke-width="3" fill="none"/>
  <!-- Spark ignition -->
  <polygon points="595,95 590,105 600,105" fill="#d64545"/>
  <text x="595" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">IGNITION FUSE</text>

  <!-- Molten iron trickling -->
  <path d="M 595 210 L 595 240" stroke="#d64545" stroke-width="4" stroke-dasharray="3,3" fill="none"/>
  <ellipse cx="595" cy="245" rx="15" ry="5" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5"/>

  <!-- Right Detail Box -->
  <rect x="425" y="255" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2Al(s) + Fe₂O₃(s) -> Al₂O₃(s) + 2Fe(l)</text>
  <text x="595" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">HIGHLY EXOTHERMIC (OVER 2500 °C)</text>
  <text x="595" y="323" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Al DISPLACES Fe FROM ITS SOLID OXIDE</text>
  <text x="595" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">MOLTEN IRON USED TO WELD RAILWAY TRACKS</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DISPLACEMENT RULE: A MORE REACTIVE METAL DISPLACES A LESS REACTIVE METAL</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BOTH IN AQUEOUS SOLUTION AND FROM ITS SOLID METAL OXIDE</text>
</svg>

#### Key Observations & Net Ionic Equation:
- **Blue solution fades**: Blue $\\ce{Cu^{2+}}$ ions leave solution as they are reduced to solid copper.
- **Red-brown deposit**: Pure copper metal forms on the zinc strip.
- **Net ionic equation**:
  $$\\ce{Zn(s) + Cu^{2+}(aq) -> Zn^{2+}(aq) + Cu(s)}$$
- **Half-equations**:
  $$\\ce{Zn(s) -> Zn^{2+}(aq) + 2e^-} \\quad (\\text{oxidation})$$
  $$\\ce{Cu^{2+}(aq) + 2e^- -> Cu(s)} \\quad (\\text{reduction})$$

---

### 🔥 The Thermite Reaction (Solid State Competition)

$$\\ce{2Al(s) + Fe2O3(s) -> Al2O3(s) + 2Fe(l)}$$

- Aluminium has a higher affinity for oxygen than iron does.
- Highly exothermic ($> 2500^\\circ\\text{C}$), generating white-hot molten iron used to **weld railway tracks *in situ***.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-disp-q1',
          type: 'multiple_choice',
          question:
            'What is the net ionic equation for the reaction between zinc and copper(II) sulfate?',
          options: [
            '$\\ce{Zn + SO4^{2-} -> ZnSO4 + 2e^-}$',
            '$\\ce{Zn(s) + Cu^{2+}(aq) -> Zn^{2+}(aq) + Cu(s)}$',
            '$\\ce{Zn^{2+} + Cu -> Zn + Cu^{2+}}$',
            '$\\ce{2Zn + 2Cu^+ -> 2Zn^+ + 2Cu}$',
          ],
          correctAnswer: 1,
          explanation:
            'Sulfate ions ($\\ce{SO4^{2-}}$) do not change state or charge, making them spectator ions. The net ionic equation is $\\ce{Zn(s) + Cu^{2+}(aq) -> Zn^{2+}(aq) + Cu(s)}$.',
          misconceptionTarget: 'Including spectator sulfate ions in the net equation',
        },
        {
          id: 'chk-igcse-09-disp-q2',
          type: 'multiple_choice',
          question:
            'In the thermite reaction $\\ce{2Al + Fe2O3 -> Al2O3 + 2Fe}$, which substance acts as the reducing agent?',
          options: [
            'Iron(III) oxide ($\\ce{Fe2O3}$)',
            'Aluminium ($\\ce{Al}$)',
            'Aluminium oxide ($\\ce{Al2O3}$)',
            'Iron ($\\ce{Fe}$)',
          ],
          correctAnswer: 1,
          explanation:
            'Aluminium loses electrons and gains oxygen (it reduces iron(III) oxide to metallic iron while being oxidised to aluminium oxide). Hence, aluminium is the reducing agent.',
          misconceptionTarget: 'Confusing oxidising agent with reducing agent',
        },
        {
          id: 'chk-igcse-09-disp-q3',
          type: 'multiple_choice',
          question:
            'Metal X displaces metal Y from an aqueous solution of Y(NO₃)₂, but does not displace metal Z from Z(NO₃)₂. What is the order of reactivity (most reactive first)?',
          options: [
            'Y > X > Z',
            'X > Y > Z',
            'Z > X > Y',
            'Z > Y > X',
          ],
          correctAnswer: 2,
          explanation:
            'Since X displaces Y, X is more reactive than Y (X > Y). Since X cannot displace Z, Z is more reactive than X (Z > X). Putting these together yields: Z > X > Y.',
          misconceptionTarget: 'Reversing the inequality of displacement',
        },
      ],
    },
    {
      tag: 'igcse-09-corrosion-rusting-iron',
      tags: [
        'rusting',
        'hydrated-iron-oxide',
        'barrier-methods',
        'galvanising',
        'sacrificial-protection',
      ],
      title: '6. Corrosion of Metals (Rusting of Iron) and Prevention',
      summary:
        'Conditions required for iron rusting (water and oxygen), chemical formula of rust, and comparison of barrier coatings, galvanising, and sacrificial protection.',
      content: `### 🛡️ Rusting of Iron and Steel

**Rusting** is the specific corrosion of iron and steel. 
- Chemical identity of rust: **Hydrated iron(III) oxide** ($\\ce{Fe2O3 \\cdot xH2O}$).
- Unlike aluminium oxide, rust is a porous, flaky brown solid that flakes away, continuously exposing fresh iron underneath.

---

### 🧪 Experimental Investigation: The Three Test Tubes

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-rusting-conditions-tubes-title" data-diagram="igcse-t09-rusting-conditions-tubes">
  <title id="igcse-t09-rusting-conditions-tubes-title">INVESTIGATING CONDITIONS REQUIRED FOR RUSTING</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">INVESTIGATING CONDITIONS REQUIRED FOR RUSTING</text>

  <!-- TUBE A: WATER + AIR -->
  <rect x="40" y="65" width="220" height="315" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="40" y="65" width="220" height="28" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2"/>
  <text x="150" y="84" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">TUBE A: WATER + AIR</text>

  <!-- Glass test tube outline -->
  <path d="M 120 110 L 120 230 C 120 250, 180 250, 180 230 L 180 110" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <!-- Tap water fill -->
  <path d="M 122 170 L 122 230 C 122 248, 178 248, 178 230 L 178 170 Z" fill="#d6f0fb"/>

  <!-- Rusty Iron Nail -->
  <line x1="150" y1="140" x2="150" y2="235" stroke="#d64545" stroke-width="6"/>
  <!-- Rust spots -->
  <circle cx="147" cy="180" r="4" fill="#fcc68b"/>
  <circle cx="153" cy="205" r="4" fill="#fcc68b"/>
  <circle cx="149" cy="225" r="5" fill="#fcc68b"/>

  <!-- Labels -->
  <text x="150" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AIR + WATER PRESENT</text>
  <rect x="55" y="295" width="190" height="70" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" data-box="true"/>
  <text x="150" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RESULT: NAIL RUSTS!</text>
  <text x="150" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RED-BROWN FLAKY COATING</text>

  <!-- TUBE B: NO OXYGEN -->
  <rect x="290" y="65" width="220" height="315" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="290" y="65" width="220" height="28" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="84" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">TUBE B: NO OXYGEN</text>

  <!-- Glass test tube outline -->
  <path d="M 370 110 L 370 230 C 370 250, 430 250, 430 230 L 430 110" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <!-- Boiled distilled water -->
  <path d="M 372 170 L 372 230 C 372 248, 428 248, 428 230 L 428 170 Z" fill="#d6f0fb"/>
  <!-- Oil layer seal -->
  <rect x="372" y="160" width="56" height="12" fill="#fde58a" stroke="#1f2937" stroke-width="1"/>

  <!-- Clean Iron Nail -->
  <line x1="400" y1="150" x2="400" y2="235" stroke="#8a939c" stroke-width="6"/>

  <!-- Labels -->
  <text x="400" y="152" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">OIL LAYER (BLOCKS O₂)</text>
  <text x="400" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BOILED WATER (NO AIR)</text>
  <rect x="305" y="295" width="190" height="70" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">RESULT: NO RUST</text>
  <text x="400" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">OXYGEN IS ESSENTIAL</text>

  <!-- TUBE C: NO WATER -->
  <rect x="540" y="65" width="220" height="315" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="540" y="65" width="220" height="28" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="650" y="84" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">TUBE C: NO WATER</text>

  <!-- Glass test tube outline with rubber stopper -->
  <polygon points="630,105 670,105 665,115 635,115" fill="#4b5563" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 620 115 L 620 230 C 620 250, 680 250, 680 230 L 680 115" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>

  <!-- Anhydrous CaCl2 drying granules at bottom -->
  <circle cx="635" cy="235" r="5" fill="#cfd4d9" stroke="#1f2937" stroke-width="1"/>
  <circle cx="650" cy="240" r="5" fill="#cfd4d9" stroke="#1f2937" stroke-width="1"/>
  <circle cx="665" cy="235" r="5" fill="#cfd4d9" stroke="#1f2937" stroke-width="1"/>

  <!-- Clean Iron Nail -->
  <line x1="650" y1="130" x2="650" y2="215" stroke="#8a939c" stroke-width="6"/>

  <!-- Labels -->
  <text x="650" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DRYING AGENT (CaCl₂)</text>
  <text x="650" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">ABSORBS MOISTURE</text>
  <rect x="555" y="295" width="190" height="70" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="650" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">RESULT: NO RUST</text>
  <text x="650" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WATER IS ESSENTIAL</text>

  <!-- BOTTOM BANNER -->
  <rect x="40" y="395" width="720" height="65" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="420" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8">CONCLUSION: RUSTING REQUIRES BOTH WATER AND OXYGEN</text>
  <text x="400" y="445" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RUST IDENTITY: HYDRATED IRON(III) OXIDE (Fe₂O₃ · xH₂O)</text>
</svg>

- **Tube A**: Water + Air $\\implies$ Nail **rusts** (red-brown flaky deposit).
- **Tube B**: Boiled water + Oil seal $\\implies$ **No rust** (oxygen excluded).
- **Tube C**: Anhydrous $\\ce{CaCl2}$ + Stopper $\\implies$ **No rust** (water vapour excluded).

---

### ⚙️ Rust Prevention Methods

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-rust-prevention-methods-title" data-diagram="igcse-t09-rust-prevention-methods">
  <title id="igcse-t09-rust-prevention-methods-title">METHODS OF RUST PREVENTION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">METHODS OF RUST PREVENTION</text>

  <!-- CARD 1: BARRIER METHODS -->
  <rect x="20" y="55" width="240" height="380" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="240" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="140" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. BARRIER METHODS</text>

  <!-- Diagram: Coated metal sheet -->
  <rect x="50" y="120" width="180" height="30" rx="2" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <text x="140" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.8">STEEL / IRON</text>

  <!-- Paint / grease barrier coating -->
  <rect x="50" y="105" width="180" height="15" rx="2" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="140" y="117" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BARRIER COATING</text>

  <!-- Description Box -->
  <rect x="30" y="175" width="220" height="240" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="140" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">PHYSICAL EXCLUSION</text>
  <text x="140" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">STOPS AIR AND WATER</text>
  <text x="140" y="245" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REACHING THE IRON</text>
  <text x="140" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">LIMITATION: IF SCRATCHED,</text>
  <text x="140" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">IRON UNDERNEATH RUSTS</text>
  <text x="140" y="330" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXAMPLES:</text>
  <text x="140" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• PAINT (CAR BODIES)</text>
  <text x="140" y="370" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• GREASE/OIL (TOOLS)</text>
  <text x="140" y="390" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• PLASTIC (WIRE FENCES)</text>

  <!-- CARD 2: GALVANISING -->
  <rect x="280" y="55" width="240" height="380" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="280" y="55" width="240" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. GALVANISING</text>

  <!-- Diagram: Zinc coated iron with a scratch -->
  <rect x="310" y="120" width="180" height="30" rx="2" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <text x="400" y="140" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.8">STEEL / IRON</text>

  <!-- Zinc layer with gap (scratch) -->
  <rect x="310" y="105" width="75" height="15" rx="2" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="415" y="105" width="75" height="15" rx="2" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="345" y="117" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ZINC</text>
  <text x="455" y="117" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ZINC</text>
  <text x="395" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">SCRATCH</text>

  <!-- Description Box -->
  <rect x="290" y="175" width="220" height="240" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">COATED WITH ZINC LAYER</text>
  <text x="400" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DUAL PROTECTION:</text>
  <text x="400" y="245" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. ACTS AS BARRIER</text>
  <text x="400" y="265" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. ACTS SACRIFICIALLY</text>
  <text x="400" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">IF SCRATCHED, ZINC STILL</text>
  <text x="400" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">OXIDISES BEFORE IRON!</text>
  <text x="400" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXAMPLES:</text>
  <text x="400" y="370" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• ROOFING SHEETS</text>
  <text x="400" y="390" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• CAR BODY PANELS</text>

  <!-- CARD 3: SACRIFICIAL PROTECTION -->
  <rect x="540" y="55" width="240" height="380" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="540" y="55" width="240" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="660" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">3. SACRIFICIAL</text>

  <!-- Diagram: Steel hull with attached zinc block -->
  <rect x="570" y="125" width="180" height="25" rx="2" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <text x="660" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.8">STEEL SHIP HULL</text>

  <!-- Zinc block attached -->
  <rect x="620" y="98" width="80" height="20" rx="4" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="660" y="113" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Zn / Mg BLOCK</text>

  <!-- Description Box -->
  <rect x="550" y="175" width="220" height="240" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="660" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">MORE REACTIVE METAL</text>
  <text x="660" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ATTACHED TO IRON</text>
  <text x="660" y="250" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">Zn -> Zn²⁺ + 2e⁻</text>
  <text x="660" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Zn OXIDISES FIRST</text>
  <text x="660" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SAVING IRON STRUCTURE</text>
  <text x="660" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">BLOCKS ARE REPLACED</text>
  <text x="660" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXAMPLES:</text>
  <text x="660" y="375" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• SHIP HULLS</text>
  <text x="660" y="395" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• UNDERGROUND PIPES</text>
</svg>

1. **Barrier Methods**:
   - Painting (car chassis), greasing/oiling (moving machinery parts), plastic coating (wire mesh).
   - If scratched, iron underneath rusts.
2. **Galvanising**:
   - Coating steel or iron with a thin layer of **zinc**.
   - Acts as both a barrier and sacrificial protection; if scratched, zinc still oxidises preferentially.
3. **Sacrificial Protection**:
   - Blocks of **zinc** or **magnesium** bolted to ship hulls, offshore oil rigs, or underground steel pipelines.
   - The more reactive metal oxidises preferentially ($\\ce{Zn -> Zn^{2+} + 2e-}$), keeping iron reduced and intact. Blocks are periodically inspected and replaced.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-rust-q1',
          type: 'multiple_choice',
          question:
            'What two substances are both strictly required for the rusting of iron to occur?',
          options: [
            'Carbon dioxide and water',
            'Water and oxygen',
            'Nitrogen and oxygen',
            'Salt and water',
          ],
          correctAnswer: 1,
          explanation:
            'Rust is hydrated iron(III) oxide ($\\ce{Fe2O3 \\cdot xH2O}$). Both oxygen gas and water are essential. In the absence of either, iron does not rust.',
          misconceptionTarget: 'Thinking water alone or carbon dioxide causes rust',
        },
        {
          id: 'chk-igcse-09-rust-q2',
          type: 'multiple_choice',
          question:
            'Why does galvanised iron remain protected from rusting even if the outer zinc coating is scratched?',
          options: [
            'Zinc forms a basic coating that neutralises acidic water',
            'Zinc is more reactive than iron and oxidises preferentially, sacrificing itself',
            'Iron is more reactive than zinc and absorbs zinc atoms',
            'The scratch triggers the formation of stainless steel',
          ],
          correctAnswer: 1,
          explanation:
            'Zinc is higher in the reactivity series than iron. When the surface is scratched, zinc still loses electrons more readily than iron ($\\ce{Zn -> Zn^{2+} + 2e-}$), keeping iron intact through sacrificial protection.',
          misconceptionTarget: 'Believing scratched galvanised steel immediately rusts',
        },
        {
          id: 'chk-igcse-09-rust-q3',
          type: 'multiple_choice',
          question:
            'Blocks of which metal are typically attached to steel ship hulls for sacrificial protection?',
          options: ['Copper', 'Silver', 'Zinc', 'Lead'],
          correctAnswer: 2,
          explanation:
            'Zinc (or magnesium) is more reactive than iron. Copper, silver, and lead are less reactive and would accelerate the rusting of iron instead!',
          misconceptionTarget: 'Selecting a less reactive metal like copper',
        },
      ],
    },
    {
      tag: 'igcse-09-extraction-of-metals',
      tags: [
        'blast-furnace',
        'haematite',
        'coke',
        'limestone',
        'slag',
        'bauxite',
        'cryolite',
        'recycling',
      ],
      title: '7. Industrial Extraction of Iron, Aluminium, and Metal Recycling',
      summary:
        'Industrial extraction of iron in the blast furnace (reactions, reducing agents, and slag formation), electrolytic extraction of aluminium with molten cryolite and anode replacement, and recycling benefits.',
      content: `### 🏭 Extraction of Metals and Reactivity

| Reactivity Position | Extraction Method | Typical Metals |
| :--- | :--- | :--- |
| **Above Carbon** (Very reactive) | **Electrolysis of molten ore/compound** (high electrical energy) | $\\ce{K, Na, Ca, Mg, Al}$ |
| **Below Carbon** (Moderately reactive) | **Reduction by heating with carbon or carbon monoxide** in a blast furnace | $\\ce{Zn, Fe, Cu}$ |
| **Bottom of series** (Unreactive) | **Found native** (uncombined as pure metal elements in the Earth's crust) | $\\ce{Ag, Au}$ |

---

### 🌋 The Blast Furnace: Extraction of Iron

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 540" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t09-blast-furnace-iron-title" data-diagram="igcse-t09-blast-furnace-iron">
  <title id="igcse-t09-blast-furnace-iron-title">EXTRACTION OF IRON: THE INDUSTRIAL BLAST FURNACE</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXTRACTION OF IRON: THE INDUSTRIAL BLAST FURNACE</text>

  <!-- BLAST FURNACE BODY -->
  <polygon points="270,55 350,55 330,85 290,85" fill="#8a939c" stroke="#1f2937" stroke-width="2"/>
  <polygon points="290,85 330,85 390,260 370,470 250,470 230,260" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>

  <!-- Molten iron at bottom -->
  <rect x="250" y="445" width="120" height="25" fill="#f5a3a3"/>
  <!-- Molten slag layer floating on top -->
  <rect x="252" y="425" width="116" height="20" fill="#fde58a"/>

  <!-- Tuyeres (hot air blasts) -->
  <polygon points="210,410 245,415 245,425 210,430" fill="#d64545" stroke="#1f2937" stroke-width="1.5"/>
  <polygon points="410,410 375,415 375,425 410,430" fill="#d64545" stroke="#1f2937" stroke-width="1.5"/>
  <text x="210" y="400" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">HOT AIR</text>
  <text x="410" y="400" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">HOT AIR</text>

  <!-- Tap holes -->
  <!-- Slag tap (upper) -->
  <line x1="368" y1="435" x2="430" y2="445" stroke="#1f2937" stroke-width="3"/>
  <text x="440" y="442" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SLAG TAP</text>

  <!-- Iron tap (lower) -->
  <line x1="250" y1="460" x2="190" y2="475" stroke="#1f2937" stroke-width="3"/>
  <text x="180" y="475" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">MOLTEN IRON</text>

  <!-- Waste gases exit at top -->
  <path d="M 285 75 L 230 65" stroke="#4b5563" stroke-width="3" fill="none"/>
  <polygon points="225,64 235,60 233,70" fill="#4b5563"/>
  <text x="220" y="55" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">WASTE GASES</text>

  <!-- RAW MATERIALS CHARGE CARD (LEFT TOP) -->
  <rect x="20" y="90" width="190" height="135" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="115" y="112" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RAW MATERIALS IN:</text>
  <text x="115" y="134" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. HAEMATITE (Fe₂O₃)</text>
  <text x="115" y="154" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. COKE (CARBON, C)</text>
  <text x="115" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">3. LIMESTONE (CaCO₃)</text>
  <text x="115" y="196" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">FED VIA TOP HOPPER</text>

  <!-- FURNACE TEMPERATURE ZONES (INSIDE TOWER) -->
  <text x="310" y="160" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">~500 °C</text>
  <text x="310" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#fcc68b" letter-spacing="0.8">~1000 °C</text>
  <text x="310" y="390" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">~1900 °C</text>

  <!-- RIGHT COLUMN: REACTION EQUATIONS -->
  <!-- Zone 1: Combustion -->
  <rect x="450" y="60" width="330" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="615" y="83" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ZONE 1: COMBUSTION (PROVIDES HEAT)</text>
  <text x="615" y="105" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">C(s) + O₂(g) -> CO₂(g)</text>
  <text x="615" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">STRONGLY EXOTHERMIC; HEATS FURNACE</text>

  <!-- Zone 2: Reducing Agent Formation -->
  <rect x="450" y="165" width="330" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="615" y="188" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ZONE 2: REDUCING AGENT FORMATION</text>
  <text x="615" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CO₂(g) + C(s) -> 2CO(g)</text>
  <text x="615" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CO IS THE MAIN REDUCING AGENT</text>

  <!-- Zone 3: Ore Reduction -->
  <rect x="450" y="270" width="330" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="615" y="293" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">ZONE 3: REDUCTION OF IRON ORE</text>
  <text x="615" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Fe₂O₃(s) + 3CO(g) -> 2Fe(l) + 3CO₂(g)</text>
  <text x="615" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">MOLTEN IRON TRICKLES TO BASE</text>

  <!-- Zone 4: Slag Formation (Removal of Sand/Silica) -->
  <rect x="450" y="375" width="330" height="145" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="615" y="398" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">REMOVAL OF ACIDIC IMPURITY (SiO₂)</text>
  <text x="615" y="420" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. CaCO₃(s) -> CaO(s) + CO₂(g)</text>
  <text x="615" y="440" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(THERMAL DECOMPOSITION)</text>
  <text x="615" y="465" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. CaO(s) + SiO₂(s) -> CaSiO₃(l)</text>
  <text x="615" y="485" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">SLAG (CaSiO₃) FLOATS ON MOLTEN IRON</text>
</svg>

#### The Chemical Sequence:
1. **Coke combustion** (heat source):
   $$\\ce{C(s) + O2(g) -> CO2(g)}$$
2. **Reducing agent formation**:
   $$\\ce{CO2(g) + C(s) -> 2CO(g)}$$
3. **Haematite reduction**:
   $$\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}$$
4. **Slag formation (removal of sand)**:
   $$\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$$
   $$\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)}$$
   Molten slag (calcium silicate) is less dense than liquid iron and floats on top, tapped separately.

---

### ⚡ Aluminium Extraction by Electrolysis

- **Ore**: Bauxite (purified to alumina, $\\ce{Al2O3}$).
- **Role of Cryolite ($\\ce{Na3AlF6}$)**: Lowers melting point from $2050^\\circ\\text{C}$ to $\\sim 950^\\circ\\text{C}$, saving enormous energy, and improves electrical conductivity.
- **Cathode**: $\\ce{Al^{3+} + 3e^- -> Al(l)}$ (Liquid aluminium sinks to bottom).
- **Anode**: $\\ce{2O^{2-} -> O2(g) + 4e^-}$.
- **Anode replacement**: Oxygen reacts with hot carbon graphite anodes ($\\ce{C + O2 -> CO2}$), burning them away.

---

### ♻️ Recycling of Metals
- **Saves energy**: Recycling aluminium saves **95% of the electricity** needed to extract it from bauxite.
- **Conserves finite resources**: Extends the lifespan of finite reserves of ores.
- **Protects environment**: Reduces open-cast mining scars, toxic waste (red mud), and greenhouse gas emissions.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-extract-q1',
          type: 'multiple_choice',
          question:
            'What is the function of limestone ($\\ce{CaCO3}$) in the extraction of iron in the blast furnace?',
          options: [
            'To act as a fuel to heat the furnace',
            'To reduce iron(III) oxide to iron',
            'To react with and remove acidic sand/silica ($\\ce{SiO2}$) as molten slag',
            'To lower the melting point of haematite',
          ],
          correctAnswer: 2,
          explanation:
            'Limestone thermally decomposes to calcium oxide (a basic oxide), which reacts with acidic silicon dioxide (sand) to form calcium silicate ($\\ce{CaSiO3}$, slag).',
          misconceptionTarget: 'Thinking limestone acts as the reducing agent',
        },
        {
          id: 'chk-igcse-09-extract-q2',
          type: 'multiple_choice',
          question:
            'Why is cryolite added to aluminium oxide during the electrolytic extraction of aluminium?',
          options: [
            'It oxidises aluminium ions to aluminium metal',
            'It lowers the operating melting point from 2050 °C to ~950 °C and improves electrical conductivity',
            'It prevents the carbon anodes from burning away',
            'It removes silica impurities as slag',
          ],
          correctAnswer: 1,
          explanation:
            'Dissolving alumina in molten cryolite lowers the working temperature by more than 1000 °C, drastically reducing the electrical energy and cost needed to keep the electrolyte molten.',
          misconceptionTarget: 'Assuming cryolite is a catalyst or reducing agent',
        },
        {
          id: 'chk-igcse-09-extract-q3',
          type: 'multiple_choice',
          question:
            'Why do the carbon anodes in the aluminium extraction cell need to be replaced periodically?',
          options: [
            'They dissolve in the molten cryolite',
            'They react with oxygen gas at high temperature to form carbon dioxide and burn away',
            'They become coated with liquid aluminium metal',
            'They melt due to high electrical current',
          ],
          correctAnswer: 1,
          explanation:
            'Oxygen gas produced at the positive anode reacts with the red-hot carbon graphite blocks: $\\ce{C(s) + O2(g) -> CO2(g)}$, burning the anodes away over time.',
          misconceptionTarget: 'Believing carbon dissolves or melts away',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-09-exam-practice',
      tags: [
        'exam-practice',
        'mark-schemes',
        'paper-2-mcq',
        'paper-4-theory',
        'blast-furnace',
        'sacrificial-protection',
      ],
      title: '8. Cambridge Exam Practice & Worked Examples',
      summary:
        'Cambridge IGCSE exam practice containing Paper 2 multiple-choice and Paper 4 theory structured questions with full mark schemes and examiner reports.',
      content: `### 🎯 Cambridge Paper 2 (Multiple Choice) Practice

#### Question 1
Three metals, $P$, $Q$, and $R$, were reacted with water, steam, and dilute hydrochloric acid. The observations were recorded below:
- Metal $P$: Reacts vigorously with cold water to give hydrogen.
- Metal $Q$: Does not react with cold water; reacts when heated in steam.
- Metal $R$: Does not react with cold water or steam; does not react with dilute hydrochloric acid.

Which row represents metals $P$, $Q$, and $R$?

| Row | Metal $P$ | Metal $Q$ | Metal $R$ |
| :--- | :--- | :--- | :--- |
| **A** | Sodium | Copper | Magnesium |
| **B** | Potassium | Magnesium | Copper |
| **C** | Calcium | Copper | Iron |
| **D** | Magnesium | Zinc | Silver |

##### Model Answer:
- $P$ reacts vigorously with cold water $\\implies$ high reactivity ($\\ce{K, Na, Ca}$).
- $Q$ reacts with steam but not cold water $\\implies$ moderate reactivity ($\\ce{Mg, Zn, Fe}$).
- $R$ does not react with steam or acid $\\implies$ unreactive (below hydrogen: $\\ce{Cu, Ag, Au}$).
- Row **B** matches: $P = \\ce{K}$, $Q = \\ce{Mg}$, $R = \\ce{Cu}$.
**Correct Answer: B**

---

#### Question 2
Why is brass harder and stronger than pure copper?
- **A** Copper atoms in brass form covalent bonds with zinc atoms.
- **B** Zinc atoms lose electrons more readily than copper atoms.
- **C** Zinc atoms are of a different size to copper atoms, which distorts the regular layers and prevents them from sliding easily.
- **D** Brass has a giant covalent lattice structure similar to diamond.

##### Model Answer:
- An alloy contains atoms of different sizes. Zinc atoms disrupt the neat rows of copper atoms, preventing layers from sliding over each other.
**Correct Answer: C**

---

### 📝 Cambridge Paper 4 (Structured Theory) Practice

#### Question 3 (Blast Furnace Extraction of Iron — 7 Marks)
Iron is extracted from its ore, haematite ($\\ce{Fe2O3}$), in a blast furnace.

**(a)** State the names of the two other solid raw materials fed into the blast furnace along with haematite. **[2]**  
**(b)** State the name of the main reducing agent responsible for reducing iron(III) oxide to molten iron, and write a balanced chemical equation for this reduction. **[2]**  
**(c)** The haematite ore contains silicon dioxide, $\\ce{SiO2}$, as an impurity.
1. Explain how silicon dioxide is removed from the blast furnace. **[2]**
2. Write a balanced chemical equation for the formation of slag. **[1]**

##### Official Cambridge Mark Scheme & Examiner Tips:
- **(a)** 
  - Coke / Carbon **[1]**
  - Limestone / Calcium carbonate **[1]**
  *(Examiner Tip: Do not write air/oxygen because the question explicitly specifies solid raw materials!)*
- **(b)**
  - Carbon monoxide / $\\ce{CO}$ **[1]**
  - $\\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$ **[1]**
- **(c)**
  - **1**: Limestone undergoes thermal decomposition to calcium oxide: $\\ce{CaCO3 -> CaO + CO2}$ **[1]**; Calcium oxide (basic) reacts with silicon dioxide (acidic) to form calcium silicate / slag **[1]**
  - **2**: $\\ce{CaO + SiO2 -> CaSiO3}$ **[1]**

---

#### Question 4 (Rusting and Sacrificial Protection — 6 Marks)
The hulls of large steel ships are protected from corrosion in seawater by attaching sacrificial blocks of zinc metal.

**(a)** State the chemical name and formula of rust. **[2]**  
**(b)** Explain how the attached zinc blocks protect the steel hull from rusting, even if the seawater makes contact with the steel. **[3]**  
**(c)** Suggest why copper blocks would NOT be suitable for protecting the ship hull. **[1]**

##### Official Cambridge Mark Scheme:
- **(a)**
  - Hydrated iron(III) oxide **[1]**
  - $\\ce{Fe2O3 \\cdot xH2O}$ **[1]**
- **(b)**
  - Zinc is **more reactive than iron** / higher in the reactivity series **[1]**
  - Zinc loses electrons more readily / zinc oxidises preferentially: $\\ce{Zn -> Zn^{2+} + 2e^-}$ **[1]**
  - Electrons flow to the iron, preventing the iron from losing electrons / oxidising **[1]**
- **(c)**
  - Copper is **less reactive than iron**; iron would lose electrons to copper, which would **accelerate / speed up the rusting of iron** **[1]**
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-09-exam-q1',
          type: 'multiple_choice',
          question:
            'In the blast furnace, which substance is responsible for the thermal decomposition reaction that yields calcium oxide?',
          options: [
            'Coke ($\\ce{C}$)',
            'Haematite ($\\ce{Fe2O3}$)',
            'Limestone ($\\ce{CaCO3}$)',
            'Slag ($\\ce{CaSiO3}$)',
          ],
          correctAnswer: 2,
          explanation:
            'Limestone (calcium carbonate) undergoes thermal decomposition at high furnace temperatures: $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$.',
          misconceptionTarget: 'Thinking coke or haematite decomposes to CaO',
        },
        {
          id: 'chk-igcse-09-exam-q2',
          type: 'multiple_choice',
          question:
            'Why would attaching blocks of copper to a steel ship hull be catastrophic?',
          options: [
            'Copper would react explosively with seawater',
            'Copper is less reactive than iron and would accelerate the oxidation/rusting of iron',
            'Copper is too light to stay attached under water',
            'Copper melts at the temperature of seawater',
          ],
          correctAnswer: 1,
          explanation:
            'Because copper is less reactive than iron, iron would preferentially oxidise to supply electrons to copper, accelerating the corrosion of the steel hull.',
          misconceptionTarget: 'Thinking copper protects because it is corrosion-resistant',
        },
        {
          id: 'chk-igcse-09-exam-q3',
          type: 'multiple_choice',
          question:
            'Which reaction represents the formation of slag in the extraction of iron?',
          options: [
            '$\\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$',
            '$\\ce{C + O2 -> CO2}$',
            '$\\ce{CaO + SiO2 -> CaSiO3}$',
            '$\\ce{CO2 + C -> 2CO}$',
          ],
          correctAnswer: 2,
          explanation:
            'Calcium oxide (basic) reacts with silicon dioxide (acidic) to form liquid calcium silicate (slag): $\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)}$.',
          misconceptionTarget: 'Confusing slag formation with ore reduction',
        },
      ],
    },
  ],
};
