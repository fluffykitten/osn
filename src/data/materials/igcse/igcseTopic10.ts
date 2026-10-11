/**
 * igcseTopic10.ts
 * Topic 10: Chemistry of the Environment
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_10: MaterialItem = {
  id: 210,
  topic_number: 10,
  title: 'Chemistry of the Environment',
  slug: 'chemistry-of-the-environment',
  category: 'Environmental Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 42,
  summary:
    'Comprehensive study of environmental chemistry covering chemical and physical tests for water presence and purity, the 4-stage municipal water treatment process, composition of clean dry air, sources and adverse effects of major atmospheric pollutants (CO, SO2, NOx, CH4, particulates), vehicle catalytic converters and flue-gas desulfurisation, the greenhouse effect mechanism and climate change mitigation, NPK fertilisers and plant nutrition, the displacement of ammonia by bases, and the agricultural soil trap.',
  allTags: [
    'igcse-10-water-tests-purity-treatment',
    'igcse-10-air-composition-properties',
    'igcse-10-air-pollutants-sources-effects',
    'igcse-10-reducing-pollution-catalytic-converters',
    'igcse-10-greenhouse-effect-climate-change',
    'igcse-10-npk-fertilisers-plant-nutrition',
    'igcse-10-displacement-ammonia-soil-trap',
    'igcse-10-exam-practice',
    'water-tests',
    'cobalt-ii-chloride',
    'anhydrous-copper-ii-sulfate',
    'water-purity',
    'boiling-point-elevation',
    'melting-point-depression',
    'water-treatment',
    'sedimentation',
    'filtration',
    'chlorination',
    'potable-water',
    'clean-dry-air',
    'nitrogen',
    'oxygen',
    'argon',
    'carbon-dioxide',
    'carbon-monoxide',
    'haemoglobin',
    'sulfur-dioxide',
    'acid-rain',
    'nitrogen-oxides',
    'methane',
    'particulates',
    'catalytic-converters',
    'flue-gas-desulfurisation',
    'greenhouse-effect',
    'infrared-absorption',
    'climate-change',
    'npk-fertilisers',
    'ammonium-salts',
    'displacement-of-ammonia',
    'soil-acidity',
    'slaked-lime',
    'photosynthesis',
    'carbon-cycle',
  ],
  prerequisites: [
    {
      tag: 'igcse-10-water-tests-purity-treatment',
      tags: [
        'water-tests',
        'cobalt-ii-chloride',
        'anhydrous-copper-ii-sulfate',
        'water-purity',
        'water-treatment',
        'potable-water',
      ],
      title: '1. Water: Chemical Tests, Physical Purity, and Municipal Water Treatment',
      summary:
        'Distinguishing chemical tests for water presence (cobalt(II) chloride paper and anhydrous copper(II) sulfate) from physical tests for purity (sharp m.p. at 0 °C and b.p. at 100 °C), substances found in natural water, and the four essential stages of municipal water purification.',
      content: `### 💧 1. Chemical Tests for the Presence of Water

In Cambridge IGCSE examinations, examiners draw a sharp distinction between **identifying the chemical presence of water** and **proving that a sample of water is pure**:

> [!IMPORTANT]
> **Crucial Exam Rule**: Chemical tests only detect whether water molecules are present in a sample. A positive result with cobalt(II) chloride paper or anhydrous copper(II) sulfate does **not** prove purity, because an impure solution of salt water will produce the exact same colour change!

| Reagent / Test | Initial State & Colour | Final State & Colour (with $\\ce{H2O}$) | Chemical Equation |
| :--- | :--- | :--- | :--- |
| **Cobalt(II) chloride paper** | Anhydrous: **Blue** | Hydrated: **Pink** | $\\ce{CoCl2(s) + 6H2O(l) <=> CoCl2 . 6H2O(s)}$ |
| **Anhydrous copper(II) sulfate** | Anhydrous powder: **White** | Hydrated crystals: **Blue** | $\\ce{CuSO4(s) + 5H2O(l) <=> CuSO4 . 5H2O(s)}$ |

Both of these hydration reactions are **reversible**. If the hydrated pink cobalt(II) chloride or blue copper(II) sulfate is heated gently, water is driven off as steam, and the reagent returns to its original anhydrous colour.

---

### 🌡️ 2. Physical Tests for Water Purity

To prove that a sample consists of **pure water** (and contains no dissolved solids or impurities), you must test its **physical constants**:
- **Melting point:** Pure water melts at **exactly $0^\\circ\\text{C}$** at 1 atmosphere pressure.
- **Boiling point:** Pure water boils at **exactly $100^\\circ\\text{C}$** at 1 atmosphere pressure.

#### Effect of Dissolved Impurities:
When dissolved impurities (such as salts or sugars) are present:
1. The **boiling point increases** (boils above $100^\\circ\\text{C}$).
2. The **melting point decreases** (freezes below $0^\\circ\\text{C}$).
3. The substance melts and boils **over a range of temperatures**, rather than at a sharp, single temperature.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-water-tests-purity-title" data-diagram="igcse-t10-water-tests-purity">
  <title id="igcse-t10-water-tests-purity-title">CHEMICAL TESTS FOR WATER AND PHYSICAL TESTS FOR PURITY</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">TESTING FOR WATER PRESENCE AND PURITY</text>

  <!-- LEFT PANEL: CHEMICAL TESTS FOR WATER -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CHEMICAL TESTS FOR WATER</text>

  <!-- Test 1: Cobalt(II) chloride paper -->
  <rect x="35" y="100" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. COBALT(II) CHLORIDE PAPER</text>
  <rect x="65" y="135" width="90" height="24" rx="3" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="110" y="151" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DRY: BLUE</text>

  <path d="M 170 147 L 205 147" stroke="#3f8f46" stroke-width="2" fill="none"/>
  <polygon points="212,147 203,143 203,151" fill="#3f8f46"/>

  <rect x="225" y="135" width="90" height="24" rx="3" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="270" y="151" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WET: PINK</text>

  <text x="205" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CoCl₂(s) + 6H₂O(l) <=> CoCl₂ · 6H₂O(s)</text>
  <text x="205" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(REVERSIBLE REACTION)</text>

  <!-- Test 2: Copper(II) sulfate -->
  <rect x="35" y="225" width="340" height="135" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="247" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. ANHYDROUS COPPER(II) SULFATE</text>
  <rect x="65" y="260" width="90" height="24" rx="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="110" y="276" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DRY: WHITE</text>

  <path d="M 170 272 L 205 272" stroke="#3f8f46" stroke-width="2" fill="none"/>
  <polygon points="212,272 203,268 203,276" fill="#3f8f46"/>

  <rect x="225" y="260" width="90" height="24" rx="3" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="270" y="276" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WET: BLUE</text>

  <text x="205" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CuSO₄(s) + 5H₂O(l) <=> CuSO₄ · 5H₂O(s)</text>
  <text x="205" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">CONFIRMS PRESENCE OF WATER</text>
  <text x="205" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">DOES NOT PROVE WATER IS PURE!</text>

  <!-- RIGHT PANEL: PHYSICAL TESTS FOR PURITY -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">PHYSICAL TESTS FOR WATER PURITY</text>

  <rect x="425" y="100" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="123" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">MELTING AND BOILING POINTS</text>
  <text x="595" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PURE WATER HAS SHARP FIXED VALUES:</text>
  <text x="595" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• MELTING POINT: EXACTLY 0 °C</text>
  <text x="595" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• BOILING POINT: EXACTLY 100 °C</text>

  <rect x="425" y="225" width="340" height="135" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">EFFECT OF DISSOLVED IMPURITIES</text>
  <text x="595" y="273" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">IF IMPURITIES (E.G. SALTS) ARE PRESENT:</text>
  <text x="595" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• BOILING POINT INCREASES (> 100 °C)</text>
  <text x="595" y="323" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• MELTING POINT DECREASES (&lt; 0 °C)</text>
  <text x="595" y="348" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• MELTS AND BOILS OVER A RANGE</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXAM RULE: CHEMICAL TESTS DETECT PRESENCE OF WATER (E.G. IN A MIXTURE)</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PHYSICAL TESTS (M.P. 0 °C, B.P. 100 °C) ARE REQUIRED TO PROVE PURITY</text>
</svg>

---

### 🌊 3. Substances in Natural Water Supplies

Water found in rivers, lakes, and reservoirs is never pure $\\ce{H2O}$. It contains both beneficial and potentially harmful substances:

#### A. Beneficial Substances:
1. **Dissolved oxygen ($\\ce{O2}$):** Essential for aquatic animals (fish, invertebrates) to perform aerobic respiration.
2. **Dissolved mineral ions:** Essential minerals such as $\\ce{Ca^2+}$ and $\\ce{Mg^2+}$ for bone development, and trace minerals necessary for plant and animal growth.

#### B. Harmful Substances:
1. **Metal compounds:** Toxic heavy metal ions (e.g. $\\ce{Pb^2+}$, $\\ce{Hg^2+}$, $\\ce{Cd^2+}$) from industrial runoff or old lead piping damage the central nervous system.
2. **Plastics and debris:** Harm wildlife through ingestion or entanglement; degrade into microplastics.
3. **Untreated sewage:** Contains pathogenic microbes and bacteria (e.g. *Vibrio cholerae*) causing water-borne diseases like cholera and typhoid fever.
4. **Nitrates ($\\ce{NO3-}$ and phosphates $\\ce{PO4^3-}$):** Runoff from agricultural fertilisers causes **eutrophication** (rapid algal bloom $\\to$ light blocked $\\to$ plants die $\\to$ aerobic decomposers multiply and consume dissolved $\\ce{O2} \\to$ aquatic organisms suffocate).

---

### 🚰 4. Municipal Water Treatment (Potable Water)

The water that flows from household taps is **potable water** (water safe to drink). It is **not chemically pure** because it still contains dissolved mineral ions that are harmless or beneficial to health.

Domestic water treatment involves four main sequential stages:
1. **Screening:** Water passes through metal grilles/screens to physically trap large floating debris (twigs, leaves, plastics).
2. **Sedimentation & Coagulation:** Coagulants such as alum (aluminium sulfate, $\\ce{Al2(SO4)3}$) or iron salts are added. Tiny suspended clay and dirt particles clump together into larger, heavier particles (**flocs**) and sink to the bottom of large settling tanks as sludge.
3. **Filtration:** The clear upper water passes through deep filter beds of **sand and gravel**, which trap fine insoluble particles that did not settle out. Some modern plants also use **activated charcoal (carbon) filters** to absorb trace organic compounds, unpalatable tastes, and unpleasant odours.
4. **Chlorination:** A carefully controlled concentration of **chlorine gas ($\\ce{Cl2}$)** is bubbled through the water. Chlorine is a powerful oxidising disinfectant that **kills bacteria and pathogenic microorganisms**, sterilising the supply.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-water-treatment-steps-title" data-diagram="igcse-t10-water-treatment-steps">
  <title id="igcse-t10-water-treatment-steps-title">STAGES OF DOMESTIC WATER TREATMENT</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">STAGES IN THE TREATMENT OF DOMESTIC WATER SUPPLY</text>

  <!-- STAGE 1: SCREENING -->
  <rect x="20" y="55" width="175" height="320" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="175" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="107" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. SCREENING</text>

  <rect x="40" y="105" width="135" height="40" rx="3" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="65" y1="105" x2="65" y2="145" stroke="#1f2937" stroke-width="2"/>
  <line x1="90" y1="105" x2="90" y2="145" stroke="#1f2937" stroke-width="2"/>
  <line x1="115" y1="105" x2="115" y2="145" stroke="#1f2937" stroke-width="2"/>
  <line x1="140" y1="105" x2="140" y2="145" stroke="#1f2937" stroke-width="2"/>
  <text x="107" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">METAL MESH</text>

  <rect x="30" y="180" width="155" height="180" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="107" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REMOVES LARGE</text>
  <text x="107" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">INSOLUBLE OBJECTS</text>
  <text x="107" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• TWIGS &amp; LEAVES</text>
  <text x="107" y="280" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• PLASTIC RUBBISH</text>
  <text x="107" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• LARGE STONES</text>
  <text x="107" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">PHYSICAL TRAP</text>

  <!-- STAGE 2: SEDIMENTATION -->
  <rect x="215" y="55" width="175" height="320" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="215" y="55" width="175" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="302" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. SEDIMENTATION</text>

  <rect x="235" y="105" width="135" height="40" rx="3" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="237" y="132" width="131" height="11" fill="#fcc68b"/>
  <text x="302" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SETTLING TANK</text>

  <rect x="225" y="180" width="155" height="180" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="302" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ALUM COAGULANT</text>
  <text x="302" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ADDED TO WATER</text>
  <text x="302" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">TINY PARTICLES</text>
  <text x="302" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CLUMP TOGETHER</text>
  <text x="302" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">FLOCS SINK DOWN</text>
  <text x="302" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">SLUDGE REMOVED</text>

  <!-- STAGE 3: FILTRATION -->
  <rect x="410" y="55" width="175" height="320" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="175" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="497" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">3. FILTRATION</text>

  <rect x="430" y="105" width="135" height="40" rx="3" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="432" y="107" width="131" height="18" fill="#fde58a"/>
  <text x="497" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SAND &amp; GRAVEL</text>

  <rect x="420" y="180" width="155" height="180" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="497" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FILTER BEDS OF</text>
  <text x="497" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SAND AND GRAVEL</text>
  <text x="497" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">TRAPS REMAINING</text>
  <text x="497" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">FINE INSOLUBLE</text>
  <text x="497" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PARTICLES (MUD)</text>
  <text x="497" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">CLEAR WATER</text>

  <!-- STAGE 4: CHLORINATION -->
  <rect x="605" y="55" width="175" height="320" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="605" y="55" width="175" height="30" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2"/>
  <text x="692" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">4. CHLORINATION</text>

  <rect x="625" y="105" width="135" height="40" rx="3" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="672" cy="125" r="10" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="712" cy="125" r="10" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="692" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CHLORINE (Cl₂)</text>

  <rect x="615" y="180" width="155" height="180" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="692" y="205" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">KILLS BACTERIA</text>
  <text x="692" y="225" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">&amp; MICROBES</text>
  <text x="692" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CARBON FILTERS</text>
  <text x="692" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">REMOVE BAD TASTE</text>
  <text x="692" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">AND ODOURS</text>
  <text x="692" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">SAFE POTABLE WATER</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="390" width="760" height="50" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="412" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FILTRATION REMOVES INSOLUBLE SOLIDS; CHLORINATION STERILISES &amp; KILLS BACTERIA</text>
  <text x="400" y="430" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NOTE: TREATED WATER IS POTABLE (DRINKABLE), NOT PURE WATER (CONTAINS DISSOLVED IONS)</text>
</svg>`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-prereq-1',
          type: 'multiple_choice',
          question:
            'A student tests a colourless liquid by adding anhydrous copper(II) sulfate. The solid turns blue. The student concludes that the liquid is pure water. Why is this conclusion incorrect?',
          options: [
            'Anhydrous copper(II) sulfate turns blue with any acidic solution.',
            'The test confirms water is present, but dissolved impurities like sodium chloride would still allow the colour change.',
            'Anhydrous copper(II) sulfate only turns blue if ethanol is present.',
            'The colour change only occurs if the water has a pH of exactly 7.',
          ],
          correctAnswer: 1,
          explanation:
            'Anhydrous copper(II) sulfate turning from white to blue confirms that water is present. However, it reacts with water even if the water contains dissolved impurities (such as dissolved salt). To prove purity, the physical boiling point (100 °C) or melting point (0 °C) must be measured.',
          misconceptionTarget:
            'Confusing a chemical test for the presence of water with a physical test for purity.',
        },
        {
          id: 'quiz-10-prereq-2',
          type: 'multiple_choice',
          question:
            'A sample of water boils at 102 °C. What does this observation indicate about the sample?',
          options: [
            'The sample is completely pure because it boils above room temperature.',
            'The sample contains dissolved impurities which elevate its boiling point.',
            'The sample must contain insoluble sand particles which increase the boiling point.',
            'The thermometer must be broken because water always boils at exactly 100 °C regardless of purity.',
          ],
          correctAnswer: 1,
          explanation:
            'Dissolved impurities raise the boiling point of water above 100 °C and lower the melting point below 0 °C. A boiling point of 102 °C proves that the water is impure.',
          misconceptionTarget:
            'Believing impure water boils at 100 °C or that a higher boiling point means higher purity.',
        },
        {
          id: 'quiz-10-prereq-3',
          type: 'multiple_choice',
          question:
            'What is the distinct primary purpose of chlorination in domestic water treatment?',
          options: [
            'To neutralise acidic rain in the reservoir water.',
            'To cause tiny suspended clay particles to coagulate into flocs.',
            'To kill harmful bacteria and microorganisms to make water safe to drink.',
            'To remove dissolved calcium and magnesium ions that cause water hardness.',
          ],
          correctAnswer: 2,
          explanation:
            'Chlorine is an oxidising disinfectant added to sterilise water by killing bacteria and microbes. Filtration and sedimentation remove insoluble particles, while carbon filters remove odours.',
          misconceptionTarget:
            'Confusing chlorination (killing bacteria) with filtration or coagulation (removing solid particles).',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-10-air-composition-properties',
      tags: [
        'clean-dry-air',
        'nitrogen',
        'oxygen',
        'argon',
        'carbon-dioxide',
      ],
      title: '2. Composition of Clean, Dry Air and Component Properties',
      summary:
        'The volume percentage breakdown of clean, dry air (78% nitrogen, 21% oxygen, 0.9% argon, 0.04% carbon dioxide), memory ratios for exams, and chemical properties of each gaseous component.',
      content: `### 🌬️ 1. Composition of Clean, Dry Air

Earth's lower atmosphere (troposphere) is a mixture of gases. In Cambridge IGCSE Chemistry, you must memorise the precise approximate percentage composition of **clean, dry air by volume**:

| Gas Component | Chemical Formula | Percentage by Volume | Approximate Fraction | Key Properties & Uses |
| :--- | :---: | :---: | :---: | :--- |
| **Nitrogen** | $\\ce{N2}$ | **$\\approx 78\\%$** | $\\approx \\frac{4}{5}$ | Very unreactive due to strong $\\ce{N#N}$ triple covalent bond; used as raw material in the Haber process and for food packaging |
| **Oxygen** | $\\ce{O2}$ | **$\\approx 21\\%$** | $\\approx \\frac{1}{5}$ | Diatomic gas; essential for aerobic respiration and combustion; reacts with metals/non-metals to form oxides |
| **Argon** | $\\ce{Ar}$ | **$\\approx 0.9\\%$** | $\\approx \\frac{1}{100}$ | Noble gas with a stable octet outer shell; completely inert; used as a shielding gas in arc welding and in filament lamps |
| **Carbon dioxide** | $\\ce{CO2}$ | **$\\approx 0.04\\%$** | $\\approx \\frac{1}{2500}$ | Greenhouse gas; substrate in plant photosynthesis; product of complete combustion and respiration |
| **Other noble gases & water vapour** | $\\ce{Ne, He, H2O(g)}$ | Remaining trace ($< 0.1\\%$) | Variable | Water vapour varies with weather and humidity ($0\\% - 4\\%$) |

> [!TIP]
> **Cambridge Memory Hook**: Remember the 4:1 ratio! Air is roughly **$\\frac{4}{5}$ nitrogen** and **$\\frac{1}{5}$ oxygen**. In volumetric gas calculation questions (e.g. passing air over heated copper), exactly $21\\%$ of the volume is consumed as oxygen reacts!

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-clean-air-composition-pie-title" data-diagram="igcse-t10-clean-air-composition-pie">
  <title id="igcse-t10-clean-air-composition-pie-title">COMPOSITION OF CLEAN DRY AIR</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">COMPOSITION OF CLEAN, DRY AIR BY VOLUME</text>

  <!-- Donut chart on left side -->
  <circle cx="180" cy="225" r="120" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <path d="M 180 225 L 180 105 C 246 105 300 159 300 225 Z" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <path d="M 180 225 L 300 225 L 298 245 Z" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Inner donut circle -->
  <circle cx="180" cy="225" r="60" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <text x="180" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CLEAN DRY</text>
  <text x="180" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">AIR</text>

  <text x="110" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">N₂: 78%</text>
  <text x="245" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">O₂: 21%</text>

  <!-- RIGHT CARDS -->
  <rect x="360" y="65" width="410" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="360" y="65" width="65" height="75" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="392" y="108" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">78%</text>
  <text x="435" y="88" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NITROGEN (N₂) — APPROX 78%</text>
  <text x="435" y="108" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">UNREACTIVE DIATOMIC GAS (N≡N BOND)</text>
  <text x="435" y="126" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">RAW MATERIAL IN HABER PROCESS</text>

  <rect x="360" y="150" width="410" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="360" y="150" width="65" height="75" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="392" y="193" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">21%</text>
  <text x="435" y="173" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">OXYGEN (O₂) — APPROX 21%</text>
  <text x="435" y="193" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">SUPPORTS COMBUSTION &amp; RESPIRATION</text>
  <text x="435" y="211" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">REACTS TO FORM BASIC/ACIDIC OXIDES</text>

  <rect x="360" y="235" width="410" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="360" y="235" width="65" height="75" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="392" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">~0.9%</text>
  <text x="435" y="258" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ARGON (Ar) — APPROX 0.9%</text>
  <text x="435" y="278" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">UNREACTIVE NOBLE GAS (FULL SHELL)</text>
  <text x="435" y="296" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">INERT ATMOSPHERE FOR ARC WELDING</text>

  <rect x="360" y="320" width="410" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="360" y="320" width="65" height="75" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="392" y="363" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">0.04%</text>
  <text x="435" y="343" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CARBON DIOXIDE (CO₂) — 0.04%</text>
  <text x="435" y="363" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">USED BY PLANTS IN PHOTOSYNTHESIS</text>
  <text x="435" y="381" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">GREENHOUSE GAS; WARMS ATMOSPHERE</text>

  <!-- Bottom rule -->
  <rect x="20" y="405" width="760" height="35" rx="4" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="427" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CAMBRIDGE RATIO TO MEMORISE: APPROXIMATELY 4/5 NITROGEN AND 1/5 OXYGEN</text>
</svg>

---

### 🔬 2. Laboratory Determination of Percentage of Oxygen in Air

A classic practical setup involves passing a fixed volume of dry air (e.g. $100\\,\\text{cm}^3$) repeatedly over excess **heated copper metal** in a combustion tube between two gas syringes:
$$\\ce{2Cu(s) [brown-pink] + O2(g) -> 2CuO(s) [black]}$$

- **Procedure:** Air is pushed back and forth over heated copper until the gas volume stops decreasing.
- **Cooling requirement:** The apparatus must be allowed to **cool down to room temperature** before measuring final volume (gases expand when heated, which would cause an inaccurate reading).
- **Typical Calculation:**
  $$\\text{Initial volume} = 100\\,\\text{cm}^3, \\quad \\text{Final volume} = 79\\,\\text{cm}^3$$
  $$\\text{Volume of } \\ce{O2} \\text{ used} = 100 - 79 = 21\\,\\text{cm}^3$$
  $$\\% \\ce{O2} \\text{ in air} = \\frac{21}{100} \\times 100\\% = 21\\%$$`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-air-1',
          type: 'multiple_choice',
          question:
            'What is the approximate percentage by volume of nitrogen and oxygen in clean, dry air?',
          options: [
            '50% nitrogen, 50% oxygen',
            '78% nitrogen, 21% oxygen',
            '21% nitrogen, 78% oxygen',
            '70% nitrogen, 28% oxygen',
          ],
          correctAnswer: 1,
          explanation:
            'Clean, dry air contains approximately 78% nitrogen and 21% oxygen by volume (roughly a 4:1 ratio).',
          misconceptionTarget:
            'Inverting the percentages of nitrogen and oxygen or guessing equal shares.',
        },
        {
          id: 'quiz-10-air-2',
          type: 'multiple_choice',
          question:
            'In an experiment, 50 cm³ of dry air is passed repeatedly over heated copper until no further contraction occurs. After cooling to room temperature, what is the expected remaining volume of gas?',
          options: [
            '10.5 cm³',
            '39.5 cm³',
            '25.0 cm³',
            '49.0 cm³',
          ],
          correctAnswer: 1,
          explanation:
            'Oxygen makes up 21% of air by volume. Volume of oxygen consumed = 21% of 50 cm³ = 10.5 cm³. Remaining unreactive gas (chiefly nitrogen and argon) = 50 - 10.5 = 39.5 cm³.',
          misconceptionTarget:
            'Selecting the volume of oxygen consumed (10.5 cm³) instead of the remaining volume (39.5 cm³).',
        },
        {
          id: 'quiz-10-air-3',
          type: 'multiple_choice',
          question:
            'Why must the gas in the syringes be cooled to room temperature before taking the final volume reading?',
          options: [
            'Because copper only reacts when the gas cools down.',
            'Because hot gases occupy a larger volume than gases at room temperature.',
            'Because nitrogen decomposes into individual atoms when hot.',
            'Because water vapour condenses only when heated.',
          ],
          correctAnswer: 1,
          explanation:
            'Thermal expansion causes gas particles to occupy a greater volume at elevated temperatures. Cooling to room temperature ensures that the volume comparison with the initial gas sample is valid.',
          misconceptionTarget:
            'Forgetting the thermal expansion of gases in volumetric analysis.',
        },
      ],
    },
    {
      tag: 'igcse-10-air-pollutants-sources-effects',
      tags: [
        'air-pollutants',
        'carbon-monoxide',
        'sulfur-dioxide',
        'acid-rain',
        'nitrogen-oxides',
        'methane',
        'particulates',
      ],
      title: '3. Common Air Pollutants: Chemical Sources and Adverse Effects',
      summary:
        'Detailed analysis of the 5 syllabus air pollutants (CO, SO2, NOx, CH4, particulates/soot): their specific combustion or environmental sources, chemical equations of formation, and hazardous biological or atmospheric impacts.',
      content: `### ☠️ Atmospheric Pollutants Matrix

Air pollution arises from human industrial and transport activity alongside natural biological processes. Cambridge requires precise knowledge of the **chemical source** and **specific adverse effect** for each of the following five pollutants:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-air-pollutants-sources-effects-title" data-diagram="igcse-t10-air-pollutants-sources-effects">
  <title id="igcse-t10-air-pollutants-sources-effects-title">COMMON AIR POLLUTANTS: SOURCES AND ADVERSE EFFECTS</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">COMMON AIR POLLUTANTS: SOURCES AND ADVERSE EFFECTS</text>

  <!-- Row 1: Carbon Monoxide (CO) -->
  <rect x="20" y="60" width="760" height="72" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="60" width="145" height="72" rx="6" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <text x="92" y="92" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CARBON MONOXIDE</text>
  <text x="92" y="112" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">(CO)</text>
  <text x="180" y="92" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">INCOMPLETE COMBUSTION OF</text>
  <text x="180" y="112" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">CARBON-BASED FUELS</text>
  <text x="470" y="92" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">TOXIC: BINDS HAEMOGLOBIN</text>
  <text x="470" y="112" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PREVENTS O₂ TRANSPORT IN BLOOD</text>

  <!-- Row 2: Sulfur Dioxide (SO2) -->
  <rect x="20" y="140" width="760" height="72" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="140" width="145" height="72" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="92" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SULFUR DIOXIDE</text>
  <text x="92" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">(SO₂)</text>
  <text x="180" y="172" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">COMBUSTION OF FOSSIL FUELS</text>
  <text x="180" y="192" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">WITH SULFUR IMPURITIES</text>
  <text x="470" y="172" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ACID RAIN (CORRODES STONE,</text>
  <text x="470" y="192" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">ACIDIFIES SOIL AND LAKES)</text>

  <!-- Row 3: Nitrogen Oxides (NOx) -->
  <rect x="20" y="220" width="760" height="72" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="220" width="145" height="72" rx="6" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <text x="92" y="252" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NITROGEN OXIDES</text>
  <text x="92" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">(NO AND NO₂)</text>
  <text x="180" y="252" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">N₂ + O₂ AT HIGH TEMP</text>
  <text x="180" y="272" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">INSIDE VEHICLE ENGINES</text>
  <text x="470" y="252" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ACID RAIN AND PHOTOCHEM SMOG;</text>
  <text x="470" y="272" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">RESPIRATORY TRACT IRRITATION</text>

  <!-- Row 4: Methane (CH4) -->
  <rect x="20" y="300" width="760" height="72" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="300" width="145" height="72" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="92" y="332" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">METHANE</text>
  <text x="92" y="352" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">(CH₄)</text>
  <text x="180" y="332" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DECOMPOSITION OF WASTE;</text>
  <text x="180" y="352" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PADDY FIELDS &amp; LIVESTOCK</text>
  <text x="470" y="332" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">POTENT GREENHOUSE GAS;</text>
  <text x="470" y="352" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">DRIVES CLIMATE WARMING</text>

  <!-- Row 5: Particulates / Soot (C) -->
  <rect x="20" y="380" width="760" height="72" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="380" width="145" height="72" rx="6" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>
  <text x="92" y="412" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PARTICULATES</text>
  <text x="92" y="432" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">(SOOT / C)</text>
  <text x="180" y="412" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">INCOMPLETE COMBUSTION</text>
  <text x="180" y="432" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">OF DIESEL AND COAL</text>
  <text x="470" y="412" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RESPIRATORY PROBLEMS (ASTHMA)</text>
  <text x="470" y="432" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">AND GLOBAL DIMMING</text>
</svg>

---

### 🌧️ In-Depth: The Chemistry of Acid Rain

Normal rainwater has a slightly acidic pH of $\\approx 5.6$ due to dissolved atmospheric $\\ce{CO2}$ forming weak carbonic acid ($\\ce{H2CO3}$). **Acid rain** has a significantly lower $\\text{pH} < 5.0$, caused primarily by sulfur dioxide and nitrogen oxides:

1. **Sulfur Dioxide Oxidation:**
   - Fossil fuels (especially coal and heavy crude oil) contain sulfur impurities.
   - When combusted: $\\ce{S(s) + O2(g) -> SO2(g)}$
   - In the atmosphere, $\\ce{SO2}$ dissolves in water droplets and is oxidised by oxygen:
     $$\\ce{2SO2(g) + O2(g) + 2H2O(l) -> 2H2SO4(aq)} \\quad \\text{(sulfuric acid)}$$

2. **Nitrogen Oxides Formation:**
   - At extreme engine temperatures ($> 1000^\\circ\\text{C}$): $\\ce{N2(g) + O2(g) -> 2NO(g)}$
   - In air: $\\ce{2NO(g) + O2(g) -> 2NO2(g)}$
   - Reacts with water vapour and oxygen:
     $$\\ce{4NO2(g) + 2H2O(l) + O2(g) -> 4HNO3(aq)} \\quad \\text{(nitric acid)}$$

#### Consequences of Acid Rain:
- **Corrosion of Limestone and Marble:**
  $$\\ce{CaCO3(s) + H2SO4(aq) -> CaSO4(s) + H2O(l) + CO2(g)}$$
  Historic buildings, statues, and monuments dissolve and crumble over time.
- **Corrosion of Metal Structures:** Acid rain accelerates rusting of iron bridges and steel structures.
- **Acidification of Lakes and Rivers:** When $\\text{pH} < 4.5$, fish eggs fail to hatch and adult fish suffocate due to aluminium ion toxicity.
- **Defoliation of Forests:** Acid rain leaches essential nutrients ($\\ce{Mg^2+, Ca^2+}$) from the soil and mobilises toxic $\\ce{Al^3+}$ ions that destroy plant roots.`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-pollutants-1',
          type: 'multiple_choice',
          question:
            'How is nitrogen monoxide (NO) formed inside car engines?',
          options: [
            'By the incomplete combustion of nitrogen-containing petrol molecules.',
            'By the reaction of nitrogen and oxygen from the intake air at the high temperatures inside the engine cylinder.',
            'By the catalytic breakdown of nitrates inside the fuel tank.',
            'By the decomposition of atmospheric ammonia on hot spark plugs.',
          ],
          correctAnswer: 1,
          explanation:
            'Nitrogen is very unreactive at room temperature. Inside car engines, the extremely high temperature and pressure supply the activation energy for atmospheric N2 and O2 to react directly: N2(g) + O2(g) -> 2NO(g). Petrol contains hydrocarbons, not nitrogen compounds.',
          misconceptionTarget:
            'Believing fuel contains nitrogen or that NO is formed from fuel impurities rather than intake air.',
        },
        {
          id: 'quiz-10-pollutants-2',
          type: 'multiple_choice',
          question:
            'Why is carbon monoxide (CO) considered such a dangerous air pollutant?',
          options: [
            'It is a pungent, visible gas that suffocates living organisms.',
            'It is a colourless, odourless gas that binds irreversibly to haemoglobin, preventing oxygen transport in the blood.',
            'It dissolves in cloud water droplets to produce concentrated carbonic acid rain.',
            'It causes instant combustion when it comes into contact with nitrogen in the air.',
          ],
          correctAnswer: 1,
          explanation:
            'Carbon monoxide is insidious because it is completely colourless and odourless. It binds to haemoglobin with hundreds of times greater affinity than oxygen, forming carboxyhaemoglobin and depriving vital organs of oxygen.',
          misconceptionTarget:
            'Thinking carbon monoxide has a sharp smell or that it directly causes acid rain.',
        },
        {
          id: 'quiz-10-pollutants-3',
          type: 'multiple_choice',
          question:
            'Which pair of pollutants are the primary direct causes of acid rain?',
          options: [
            'Carbon monoxide and methane',
            'Sulfur dioxide and oxides of nitrogen',
            'Methane and carbon particulates',
            'Argon and carbon dioxide',
          ],
          correctAnswer: 1,
          explanation:
            'Sulfur dioxide (SO2) forms sulfuric acid (H2SO4) and oxides of nitrogen (NOx) form nitric acid (HNO3) in the atmosphere, producing acid rain with pH < 5.0.',
          misconceptionTarget:
            'Confusing greenhouse gases (CH4, CO2) with acid rain precursors (SO2, NOx).',
        },
      ],
    },
    {
      tag: 'igcse-10-reducing-pollution-catalytic-converters',
      tags: [
        'catalytic-converters',
        'redox-reactions',
        'flue-gas-desulfurisation',
        'calcium-carbonate',
        'calcium-oxide',
      ],
      title: '4. Strategies to Reduce Pollution: Catalytic Converters & Desulfurisation',
      summary:
        'Engineering solutions to atmospheric pollution: the structure and redox mechanism of catalytic converters in motor vehicles (converting CO and NO into CO2 and N2), and flue-gas desulfurisation (FGD) using basic calcium compounds.',
      content: `### 🚗 1. Vehicle Catalytic Converters

Modern vehicles with petrol engines are fitted with **catalytic converters** in their exhaust systems to remove the most hazardous toxic gases ($\\ce{CO}$, oxides of nitrogen $\\ce{NO_x}$, and unburned hydrocarbons) before they enter the atmosphere.

#### A. Internal Structure:
- Consists of a **ceramic honeycomb structure** coated with an ultra-thin layer of precious transition metal catalysts: **platinum ($\\ce{Pt}$)**, **palladium ($\\ce{Pd}$)**, and **rhodium ($\\ce{Rh}$)**.
- **Why a honeycomb?** It provides a **huge surface area** for exhaust gases to contact the catalyst while using minimal mass of very expensive precious metals, and ensures gases pass through with minimal back-pressure.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-catalytic-converter-exhaust-title" data-diagram="igcse-t10-catalytic-converter-exhaust">
  <title id="igcse-t10-catalytic-converter-exhaust-title">REDOX REACTIONS IN A VEHICLE CATALYTIC CONVERTER</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">REDOX REACTIONS IN A VEHICLE CATALYTIC CONVERTER</text>

  <!-- Left exhaust pipe -->
  <rect x="70" y="145" width="160" height="60" fill="#cfd4d9" stroke="#1f2937" stroke-width="2"/>
  <path d="M 100 175 L 180 175" stroke="#d64545" stroke-width="3" fill="none"/>
  <polygon points="190,175 178,169 178,181" fill="#d64545"/>
  <text x="150" y="135" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">TOXIC EXHAUST GASES IN</text>
  <text x="150" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CO, NO GASES AND</text>
  <text x="150" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">UNBURNED FUEL</text>

  <!-- Central Chamber -->
  <polygon points="230,145 270,105 530,105 570,145 570,205 530,245 270,245 230,205" fill="#8a939c" stroke="#1f2937" stroke-width="2"/>

  <!-- Honeycomb ceramic matrix -->
  <rect x="290" y="115" width="220" height="120" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="330" y1="115" x2="330" y2="235" stroke="#8a939c" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="370" y1="115" x2="370" y2="235" stroke="#8a939c" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="410" y1="115" x2="410" y2="235" stroke="#8a939c" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="450" y1="115" x2="450" y2="235" stroke="#8a939c" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="290" y1="155" x2="510" y2="155" stroke="#8a939c" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="290" y1="195" x2="510" y2="195" stroke="#8a939c" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="400" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CERAMIC HONEYCOMB</text>
  <text x="400" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">COATED WITH Pt / Pd / Rh</text>

  <!-- Right exhaust pipe -->
  <rect x="570" y="145" width="160" height="60" fill="#cfd4d9" stroke="#1f2937" stroke-width="2"/>
  <path d="M 600 175 L 680 175" stroke="#3f8f46" stroke-width="3" fill="none"/>
  <polygon points="690,175 678,169 678,181" fill="#3f8f46"/>
  <text x="650" y="135" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">LESS HARMFUL GASES OUT</text>
  <text x="650" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CO₂, N₂ GASES AND</text>
  <text x="650" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WATER VAPOUR</text>

  <!-- Bottom Equation Box -->
  <rect x="30" y="280" width="740" height="155" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="303" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">KEY CATALYSED CHEMICAL REACTIONS</text>
  <text x="400" y="328" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">1. REDOX OF CO AND NO: 2CO(g) + 2NO(g) -> 2CO₂(g) + N₂(g)</text>
  <text x="400" y="350" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CO IS OXIDISED TO CO₂; NO IS REDUCED TO N₂</text>
  <text x="400" y="375" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">2. OXIDATION OF UNBURNED HYDROCARBONS: CH₄ + 2O₂ -> CO₂ + 2H₂O</text>
  <text x="400" y="398" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">HONEYCOMB STRUCTURE PROVIDES HUGE SURFACE AREA WITH MINIMAL EXPENSIVE METALS</text>
  <text x="400" y="420" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">LIMITATION: CO₂ RELEASED IS STILL A GREENHOUSE GAS CONTRIBUTING TO CLIMATE CHANGE</text>
</svg>

#### B. Catalysed Reactions:
1. **Simultaneous Redox Reaction of $\\ce{CO}$ and $\\ce{NO}$:**
   $$2\\ce{CO(g)} + 2\\ce{NO(g)} \\xrightarrow{\\text{catalyst}} 2\\ce{CO2(g)} + \\ce{N2(g)}$$
   - Carbon monoxide is **oxidised** to carbon dioxide (gains oxygen).
   - Nitrogen monoxide is **reduced** to nitrogen gas (loses oxygen).

2. **Oxidation of Unburned Hydrocarbons:**
   $$\\ce{CH4(g)} + 2\\ce{O2(g)} \\xrightarrow{\\text{catalyst}} \\ce{CO2(g)} + 2\\ce{H2O(g)}$$
   $$\\ce{C8H18(g)} + \\frac{25}{2}\\ce{O2(g)} \\xrightarrow{\\text{catalyst}} 8\\ce{CO2(g)} + 9\\ce{H2O(g)}$$

> [!WARNING]
> **Environmental Limitation**: Although catalytic converters successfully remove toxic $\\ce{CO}$, $\\ce{NO_x}$, and carcinogenic unburned hydrocarbons, the resulting $\\ce{CO2}$ gas is a **greenhouse gas** that still accelerates global warming and climate change!

---

### 🏭 2. Flue-Gas Desulfurisation (FGD)

Fossil-fuel-burning power stations release enormous volumes of $\\ce{SO2}$. To prevent acid rain, chimney emissions are scrubbed through **Flue-Gas Desulfurisation**:

- Waste exhaust gases are sprayed with a slurry of basic calcium compounds: **calcium oxide ($\\ce{CaO}$, quicklime)** or **calcium carbonate ($\\ce{CaCO3}$, powdered limestone)**.
- **Neutralisation Reactions:**
  $$\\ce{CaO(s) + SO2(g) -> CaSO3(s)} \\quad \\text{(calcium sulfite)}$$
  $$\\ce{CaCO3(s) + SO2(g) -> CaSO3(s) + CO2(g)}$$
- The calcium sulfite is further oxidised with air and hydrated to produce **calcium sulfate dihydrate (gypsum, $\\ce{CaSO4 . 2H2O}$)**:
  $$\\ce{2CaSO3(s) + O2(g) + 4H2O(l) -> 2CaSO4 . 2H2O(s)}$$
- This synthetic gypsum is commercially sold to manufacture **plasterboard and drywall** for the construction industry, turning an industrial waste into a profitable product!`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-reduction-1',
          type: 'multiple_choice',
          question:
            'What chemical change occurs to nitrogen monoxide (NO) when it passes through a vehicle catalytic converter?',
          options: [
            'It is oxidised to nitrogen dioxide (NO2).',
            'It is reduced to harmless nitrogen gas (N2).',
            'It is neutralised to form ammonium nitrate.',
            'It is cracked into nitric acid and hydrogen.',
          ],
          correctAnswer: 1,
          explanation:
            'In the catalytic converter, NO loses oxygen and is reduced to harmless N2: 2CO(g) + 2NO(g) -> 2CO2(g) + N2(g).',
          misconceptionTarget:
            'Thinking NO is oxidised to NO2 or converted into a nitrate in the catalytic converter.',
        },
        {
          id: 'quiz-10-reduction-2',
          type: 'multiple_choice',
          question:
            'Why is a honeycomb structure used inside catalytic converters instead of a solid block of catalyst?',
          options: [
            'It cools the exhaust gases down to below 100 °C.',
            'It provides a very high surface area to volume ratio, maximising the rate of reaction with minimal precious metal.',
            'It acts as a physical filter to trap carbon soot particulates.',
            'It prevents carbon dioxide from escaping into the atmosphere.',
          ],
          correctAnswer: 1,
          explanation:
            'The honeycomb lattice provides thousands of micro-channels, offering a massive surface area for gaseous collisions while using only a thin catalytic coating of expensive Pt, Pd, and Rh.',
          misconceptionTarget:
            'Confusing catalytic converters with particulate filters.',
        },
        {
          id: 'quiz-10-reduction-3',
          type: 'multiple_choice',
          question:
            'Which compound is commonly used in power station flue-gas desulfurisation to neutralise sulfur dioxide?',
          options: [
            'Concentrated sulfuric acid (H2SO4)',
            'Calcium oxide (CaO) or calcium carbonate (CaCO3)',
            'Sodium chloride (NaCl)',
            'Copper(II) sulfate (CuSO4)',
          ],
          correctAnswer: 1,
          explanation:
            'Sulfur dioxide is an acidic non-metal oxide. It is neutralised by spraying with basic or carbonate calcium compounds (calcium oxide or calcium carbonate slurry) to form calcium sulfite/sulfate.',
          misconceptionTarget:
            'Attempting to treat an acidic gas with an acid rather than a basic/carbonate compound.',
        },
      ],
    },
    {
      tag: 'igcse-10-greenhouse-effect-climate-change',
      tags: [
        'greenhouse-effect',
        'carbon-dioxide',
        'methane',
        'infrared-absorption',
        'climate-change',
        'photosynthesis',
      ],
      title: '5. The Greenhouse Effect and Climate Change Mitigation',
      summary:
        'The step-by-step physical and chemical mechanism of the natural and enhanced greenhouse effect (short-wave solar vs thermal IR re-emission), the role of CO2 and CH4, and global strategies to mitigate climate change.',
      content: `### 🌍 1. Mechanism of the Greenhouse Effect

The greenhouse effect is a natural atmospheric process that maintains Earth's surface temperature at a habitable average of $\\approx +15^\\circ\\text{C}$ (without it, the surface would freeze at $\\approx -18^\\circ\\text{C}$). However, excessive human emissions have caused the **enhanced greenhouse effect**, driving rapid global climate change.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-greenhouse-effect-mechanism-title" data-diagram="igcse-t10-greenhouse-effect-mechanism">
  <title id="igcse-t10-greenhouse-effect-mechanism-title">THE GREENHOUSE EFFECT AND INFRARED ABSORPTION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">THE GREENHOUSE EFFECT AND INFRARED ABSORPTION</text>

  <!-- Sun -->
  <circle cx="90" cy="100" r="35" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="90" y="105" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SUN</text>

  <!-- Earth surface curve -->
  <path d="M 20 370 Q 400 340 780 370 L 780 440 L 20 440 Z" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="380" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">EARTH'S SURFACE</text>

  <!-- Greenhouse gas atmospheric layer -->
  <path d="M 20 180 Q 400 160 780 180" stroke="#8fd3ef" stroke-width="20" stroke-dasharray="6,6" fill="none"/>
  <text x="640" y="160" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">GREENHOUSE GAS LAYER (CO₂, CH₄)</text>

  <!-- Incoming solar radiation arrow -->
  <path d="M 125 120 L 250 320" stroke="#d64545" stroke-width="3" fill="none"/>
  <polygon points="255,328 244,320 252,314" fill="#d64545"/>
  <rect x="110" y="200" width="160" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="190" y="217" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">1. SOLAR RADIATION</text>
  <text x="190" y="233" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SHORT WAVELENGTH (UV/VIS)</text>

  <!-- Re-emitted thermal infrared arrow -->
  <path d="M 330 335 L 430 190" stroke="#fcc68b" stroke-width="3" fill="none"/>
  <polygon points="434,182 425,191 435,196" fill="#fcc68b"/>
  <rect x="290" y="250" width="160" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="370" y="267" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. THERMAL INFRARED</text>
  <text x="370" y="283" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LONG WAVELENGTH (IR)</text>

  <!-- Trapped / reflected back heat arrow -->
  <path d="M 460 185 L 530 310" stroke="#d64545" stroke-width="3" fill="none"/>
  <polygon points="535,318 524,310 532,304" fill="#d64545"/>
  <rect x="490" y="220" width="165" height="40" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="572" y="237" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">3. HEAT TRAPPED</text>
  <text x="572" y="253" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RE-RADIATED TO EARTH</text>

  <!-- Escape arrow -->
  <path d="M 445 160 L 510 80" stroke="#8a939c" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
  <polygon points="515,73 506,81 515,86" fill="#8a939c"/>
  <text x="545" y="70" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">SOME HEAT ESCAPES</text>

  <!-- Summary Box at Bottom -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">MECHANISM: SHORT-WAVE SOLAR RADIATION WARMS EARTH; LONG-WAVE INFRARED (IR)</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">IS ABSORBED &amp; RE-EMITTED BY CO₂ AND CH₄, WARMING THE LOWER ATMOSPHERE</text>
</svg>

#### The Step-by-Step Mechanism:
1. **Short-wave solar radiation:** High-energy, short-wavelength radiation (primarily ultraviolet and visible light) emitted by the Sun travels through space and passes through the Earth's atmosphere without significant absorption.
2. **Earth's surface warms:** The Earth absorbs this short-wavelength radiation, warming up the land and oceans.
3. **Re-emission of thermal infrared:** The warmed Earth cools by re-radiating energy back towards space as **longer-wavelength, lower-energy infrared (thermal IR) radiation**.
4. **Absorption by greenhouse gases:** Greenhouse gas molecules—principally **carbon dioxide ($\\ce{CO2}$)** and **methane ($\\ce{CH4}$)**—absorb this thermal infrared radiation because the wavelength matches their molecular vibrational frequencies.
5. **Re-radiation in all directions:** The excited greenhouse gas molecules re-emit the infrared radiation in all directions, including back towards the Earth's surface, trapping heat in the lower atmosphere.

---

### 📉 2. Consequences & Strategies to Reduce Emissions

#### Adverse Consequences of Climate Change:
- **Sea level rise:** Melting glaciers, polar ice sheet collapse, and thermal expansion of seawater lead to low-lying coastal flooding and island inundation.
- **Extreme weather events:** Increased frequency and intensity of droughts, heatwaves, hurricanes, and catastrophic floods.
- **Ecological disruption:** Coral bleaching due to higher ocean temperatures and ocean acidification; loss of biodiversity and shifting agricultural zones.

#### Strategies for Mitigation:
1. **Transition to Renewable Energy:** Replacing coal, oil, and gas power generation with wind, solar, hydroelectric, and nuclear energy.
2. **Afforestation & Reforestation:** Planting trees absorbs $\\ce{CO2}$ from the atmosphere via plant **photosynthesis**:
   $$6\\ce{CO2(g)} + 6\\ce{H2O(l)} \\xrightarrow{\\text{light, chlorophyll}} \\ce{C6H12O6(aq)} + 6\\ce{O2(g)}$$
3. **Methane Capture:** Capturing biomethane from municipal landfill sites and sewage digesters to burn as biogas fuel (converting higher-potency $\\ce{CH4}$ into less-potent $\\ce{CO2}$).
4. **Dietary Shifts & Livestock Management:** Improving livestock feed and reducing cattle herd sizes to curb enteric fermentation methane emissions.
5. **Carbon Capture and Storage (CCS):** Chemically scrubbing $\\ce{CO2}$ from heavy industrial smokestacks and pumping it deep into underground porous rock formations or depleted offshore oil reservoirs.`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-greenhouse-1',
          type: 'multiple_choice',
          question:
            'Which statement correctly describes the radiation wavelengths involved in the greenhouse effect?',
          options: [
            'The Sun emits long-wave infrared radiation, and the Earth reflects short-wave ultraviolet radiation.',
            'The Sun emits short-wave radiation that warms the Earth; the Earth re-emits longer-wave infrared radiation which is absorbed by greenhouse gases.',
            'Greenhouse gases absorb incoming visible sunlight directly, preventing it from reaching the Earth.',
            'Earth absorbs gamma rays and re-radiates microwaves back into space.',
          ],
          correctAnswer: 1,
          explanation:
            'Solar radiation has shorter wavelengths (visible/UV) that penetrate the atmosphere. The Earth warms and re-radiates thermal energy at longer wavelengths (infrared), which is absorbed by CO2 and CH4.',
          misconceptionTarget:
            'Confusing the wavelengths of incoming solar radiation with outgoing terrestrial thermal radiation.',
        },
        {
          id: 'quiz-10-greenhouse-2',
          type: 'multiple_choice',
          question:
            'How does large-scale planting of trees (afforestation) help reduce global warming?',
          options: [
            'Trees release large volumes of nitrogen gas which cools the air.',
            'Trees absorb carbon dioxide from the atmosphere during photosynthesis to synthesise glucose.',
            'Trees absorb infrared radiation directly and convert it into chemical elements.',
            'Tree leaves reflect 100% of solar radiation back into deep space.',
          ],
          correctAnswer: 1,
          explanation:
            'Trees act as major carbon sinks: 6CO2 + 6H2O -> C6H12O6 + 6O2. Through photosynthesis, atmospheric carbon dioxide is locked into plant biomass as cellulose and lignin.',
          misconceptionTarget:
            'Thinking trees absorb heat directly or cool the atmosphere through nitrogen release.',
        },
        {
          id: 'quiz-10-greenhouse-3',
          type: 'multiple_choice',
          question:
            'Which of the following is a primary agricultural source of atmospheric methane (CH4)?',
          options: [
            'Combustion of petrol in tractors',
            'Digestion in cattle (enteric fermentation) and flooded paddy rice fields',
            'Applying potassium chloride fertiliser to wheat crops',
            'Spraying slaked lime on acidic soils',
          ],
          correctAnswer: 1,
          explanation:
            'Methane is produced by anaerobic bacteria in flooded paddy rice fields and through digestion in ruminant livestock such as cattle and sheep.',
          misconceptionTarget:
            'Confusing methane sources (livestock, paddy fields) with carbon monoxide or fertilisers.',
        },
      ],
    },
    {
      tag: 'igcse-10-npk-fertilisers-plant-nutrition',
      tags: [
        'npk-fertilisers',
        'nitrogen',
        'phosphorus',
        'potassium',
        'ammonium-salts',
        'eutrophication',
      ],
      title: '6. NPK Fertilisers, Essential Plant Nutrients, and Soluble Salts',
      summary:
        'The biological roles of nitrogen, phosphorus, and potassium (NPK) in plant growth, commercial water-soluble compounds used as fertilisers, percentage composition calculations, and environmental eutrophication.',
      content: `### 🌾 1. Essential Elements in Plant Nutrition (NPK)

Plants require mineral ions from the soil to grow vigorously. Crops harvest these nutrients from the soil; repeated harvesting depletes soil fertility. **NPK fertilisers** replenish the three primary macronutrients:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-npk-fertilisers-plant-nutrition-title" data-diagram="igcse-t10-npk-fertilisers-plant-nutrition">
  <title id="igcse-t10-npk-fertilisers-plant-nutrition-title">NPK FERTILISERS AND PLANT NUTRITION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">NPK FERTILISERS: ESSENTIAL PLANT NUTRIENTS</text>

  <!-- CARD 1: NITROGEN (N) -->
  <rect x="20" y="55" width="240" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="240" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="140" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">NITROGEN (N)</text>

  <circle cx="140" cy="125" r="30" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="140" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">N</text>

  <rect x="30" y="170" width="220" height="195" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="140" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ROLE IN PLANTS:</text>
  <text x="140" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• PROTEIN SYNTHESIS</text>
  <text x="140" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• HEALTHY LEAF GROWTH</text>
  <text x="140" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CHLOROPHYLL FORMATION</text>
  <text x="140" y="285" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">COMMON COMPOUNDS:</text>
  <text x="140" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• AMMONIUM NITRATE (NH₄NO₃)</text>
  <text x="140" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• AMMONIUM SULFATE</text>
  <text x="140" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• UREA (CO(NH₂)₂)</text>

  <!-- CARD 2: PHOSPHORUS (P) -->
  <rect x="280" y="55" width="240" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="280" y="55" width="240" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">PHOSPHORUS (P)</text>

  <circle cx="400" cy="125" r="30" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <text x="400" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">P</text>

  <rect x="290" y="170" width="220" height="195" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="400" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ROLE IN PLANTS:</text>
  <text x="400" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• ROOT DEVELOPMENT</text>
  <text x="400" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• SEED AND FLOWER GROWTH</text>
  <text x="400" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• ENERGY TRANSFER (ATP)</text>
  <text x="400" y="285" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">COMMON COMPOUNDS:</text>
  <text x="400" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• AMMONIUM PHOSPHATE</text>
  <text x="400" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CALCIUM PHOSPHATE</text>
  <text x="400" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• SUPERPHOSPHATE</text>

  <!-- CARD 3: POTASSIUM (K) -->
  <rect x="540" y="55" width="240" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="540" y="55" width="240" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="660" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">POTASSIUM (K)</text>

  <circle cx="660" cy="125" r="30" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="660" y="132" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">K</text>

  <rect x="550" y="170" width="220" height="195" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="660" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ROLE IN PLANTS:</text>
  <text x="660" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• FRUIT AND FLOWER QUALITY</text>
  <text x="660" y="235" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• DISEASE RESISTANCE</text>
  <text x="660" y="255" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• WATER REGULATION</text>
  <text x="660" y="285" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">COMMON COMPOUNDS:</text>
  <text x="660" y="305" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• POTASSIUM CHLORIDE (KCl)</text>
  <text x="660" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• POTASSIUM NITRATE (KNO₃)</text>
  <text x="660" y="345" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• POTASSIUM SULFATE</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NPK FERTILISERS PROVIDE WATER-SOLUBLE COMPOUNDS OF NITROGEN, PHOSPHORUS &amp; POTASSIUM</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SOLUBILITY IN WATER IS ESSENTIAL FOR ROOTS TO ABSORB NUTRIENT IONS</text>
</svg>

#### Why Must Fertilisers Be Water-Soluble?
Plants cannot absorb solid mineral salts or elemental nitrogen from the atmosphere. They take up nutrients exclusively through **root hair cells** by active transport and osmosis from **aqueous soil solution**. Therefore, all commercial fertiliser compounds must dissolve readily in water.

---

### 🧮 2. Percentage by Mass Calculations for Fertilisers

Farmers want the highest concentration of nutrient element per kilogram of purchased fertiliser. A recurring Cambridge Paper 2 and Paper 4 calculation asks you to compute the **percentage by mass of nitrogen** in different ammonium compounds:

$$\\% \\text{ of Element} = \\frac{\\text{Number of Atoms of Element} \\times A_r}{M_r \\text{ of Compound}} \\times 100\\%$$

#### Example Comparison:
1. **Ammonium nitrate ($\\ce{NH4NO3}$):**
   - Formula contains 2 nitrogen atoms: $2 \\times 14 = 28$
   - $M_r = (2 \\times 14) + (4 \\times 1) + (3 \\times 16) = 28 + 4 + 48 = 80$
   - $\\% \\ce{N} = \\frac{28}{80} \\times 100\\% = \\mathbf{35.0\\%}$

2. **Ammonium sulfate ($(\\ce{NH4})_2\\ce{SO4}$):**
   - Formula contains 2 nitrogen atoms: $2 \\times 14 = 28$
   - $M_r = (2 \\times 14) + (8 \\times 1) + 32 + (4 \\times 16) = 28 + 8 + 32 + 64 = 132$
   - $\\% \\ce{N} = \\frac{28}{132} \\times 100\\% = \\mathbf{21.2\\%}$

3. **Urea ($\\ce{CO(NH2)2}$):**
   - Formula contains 2 nitrogen atoms: $2 \\times 14 = 28$
   - $M_r = 12 + 16 + (2 \\times 14) + (4 \\times 1) = 60$
   - $\\% \\ce{N} = \\frac{28}{60} \\times 100\\% = \\mathbf{46.7\\%}$ (highest nitrogen density!)`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-npk-1',
          type: 'multiple_choice',
          question:
            'Which element in NPK fertilisers is primarily responsible for promoting healthy leaf and stem growth and protein synthesis in crops?',
          options: [
            'Phosphorus (P)',
            'Nitrogen (N)',
            'Potassium (K)',
            'Calcium (Ca)',
          ],
          correctAnswer: 1,
          explanation:
            'Nitrogen (N) is a vital constituent of amino acids, proteins, and chlorophyll, promoting healthy vegetative leaf and shoot growth.',
          misconceptionTarget:
            'Confusing the specific biological roles of N, P, and K.',
        },
        {
          id: 'quiz-10-npk-2',
          type: 'multiple_choice',
          question:
            'Why is it essential that compounds used in commercial chemical fertilisers are soluble in water?',
          options: [
            'So that rainfall can wash them away immediately into rivers.',
            'Because plant roots can only absorb nutrients as dissolved ions from soil water.',
            'To prevent the fertiliser from reacting with oxygen in the air.',
            'Because insoluble compounds are corrosive to tractor equipment.',
          ],
          correctAnswer: 1,
          explanation:
            'Plant root hair cells absorb mineral nutrients via active transport and diffusion from the soil solution. Insoluble compounds cannot be absorbed.',
          misconceptionTarget:
            'Believing plants absorb solid particles directly into their roots.',
        },
        {
          id: 'quiz-10-npk-3',
          type: 'multiple_choice',
          question:
            'Given Ar values (N = 14, H = 1, S = 32, O = 16), what is the percentage by mass of nitrogen in ammonium sulfate, (NH4)2SO4?',
          options: [
            '10.6%',
            '21.2%',
            '28.0%',
            '35.0%',
          ],
          correctAnswer: 1,
          explanation:
            'Mr of (NH4)2SO4 = 2(14 + 4) + 32 + 64 = 132. Mass of nitrogen = 2 x 14 = 28. Percentage = (28 / 132) x 100% = 21.2%.',
          misconceptionTarget:
            'Forgetting to multiply nitrogen by 2 (calculating 14/132 = 10.6%).',
        },
      ],
    },
    {
      tag: 'igcse-10-displacement-ammonia-soil-trap',
      tags: [
        'displacement-of-ammonia',
        'ammonium-salts',
        'slaked-lime',
        'soil-acidity',
        'damp-red-litmus',
      ],
      title: '7. Displacement of Ammonia by Bases and the Agricultural Soil Trap',
      summary:
        'The general chemical reaction of ammonium salts with strong bases to liberate ammonia gas, qualitative testing using damp red litmus paper, and why farmers must never add lime and ammonium fertiliser simultaneously.',
      content: `### 🧪 1. General Displacement Reaction of Ammonia

Whenever any **ammonium salt** is heated or warmed with a **strong base** (such as sodium hydroxide, potassium hydroxide, or calcium hydroxide), a displacement reaction occurs, liberating **ammonia gas ($\\ce{NH3}$)**:

$$\\text{Ammonium Salt} + \\text{Base} \\longrightarrow \\text{Metal Salt} + \\text{Water} + \\text{Ammonia Gas}$$

#### Specific Equations:
1. With sodium hydroxide:
   $$\\ce{NH4Cl(s) + NaOH(aq) -> NaCl(aq) + H2O(l) + NH3(g)}$$
2. With slaked lime (calcium hydroxide):
   $$\\ce{(NH4)2SO4(s) + Ca(OH)2(s) -> CaSO4(s) + 2H2O(l) + 2NH3(g)}$$
3. **Net Ionic Equation (Common to all):**
   $$\\mathbf{\\ce{NH4+(aq) + OH-(aq) -> NH3(g) + H2O(l)}}$$

#### Qualitative Test for Ammonia Gas:
- **Odour:** Pungent, choking, characteristic smell.
- **Litmus Test:** Hold a strip of **damp red litmus paper** at the mouth of the reaction tube. The damp red litmus turns **blue**.
- **Explanation:** Ammonia is the only common alkaline gas in IGCSE Chemistry. It dissolves in the moisture on the damp paper to form hydroxide ions:
  $$\\ce{NH3(g) + H2O(l) <=> NH4+(aq) + OH-(aq)}$$

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t10-ammonia-displacement-soil-trap-title" data-diagram="igcse-t10-ammonia-displacement-soil-trap">
  <title id="igcse-t10-ammonia-displacement-soil-trap-title">DISPLACEMENT OF AMMONIA AND AGRICULTURAL SOIL TRAP</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">DISPLACEMENT OF AMMONIA AND THE AGRICULTURAL SOIL TRAP</text>

  <!-- LEFT PANEL: CHEMICAL REACTION -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">LAB DISPLACEMENT OF AMMONIA</text>

  <!-- Test tube setup sketch -->
  <path d="M 65 95 L 65 190 C 65 202, 95 202, 95 190 L 95 95" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="67" y="150" width="26" height="40" fill="#fde58a"/>
  <!-- Heat flame -->
  <polygon points="75,225 85,225 80,205" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5"/>
  <text x="80" y="238" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">WARM GENTLY</text>

  <!-- Damp red litmus paper turns blue -->
  <rect x="115" y="85" width="18" height="40" rx="2" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="115" y="105" width="18" height="20" rx="2" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="145" y="105" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DAMP RED LITMUS</text>
  <text x="145" y="125" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">TURNS BLUE (NH₃)</text>

  <!-- Left Detail Box -->
  <rect x="35" y="250" width="340" height="120" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AMMONIUM SALT + STRONG BASE:</text>
  <text x="205" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">NH₄Cl(s) + NaOH(aq) -> NaCl + H₂O + NH₃(g)</text>
  <text x="205" y="320" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NET IONIC EQUATION:</text>
  <text x="205" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">NH₄⁺(aq) + OH⁻(aq) -> NH₃(g) + H₂O(l)</text>
  <text x="205" y="362" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PUNGENT CHOKING SMELL OF NH₃</text>

  <!-- RIGHT PANEL: AGRICULTURAL SOIL TRAP -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">THE AGRICULTURAL SOIL TRAP</text>

  <!-- Soil cross section -->
  <rect x="430" y="100" width="330" height="65" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>
  <text x="595" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ACIDIC SOIL TREATED WITH:</text>
  <text x="595" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">SLAKED LIME Ca(OH)₂ + AMMONIUM FERTILISER</text>

  <!-- Ammonia escaping arrows -->
  <path d="M 520 100 L 520 175" stroke="#d64545" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
  <polygon points="520,183 516,175 524,175" fill="#d64545"/>
  <text x="520" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NH₃ GAS ESCAPES</text>

  <!-- Right Detail Box -->
  <rect x="425" y="210" width="340" height="155" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="233" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">WHY FARMERS MUST NOT ADD BOTH TOGETHER:</text>
  <text x="595" y="258" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LIME (Ca(OH)₂ OR CaO) IS A BASE</text>
  <text x="595" y="280" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">OH⁻ + NH₄⁺ -> NH₃(g) + H₂O(l)</text>
  <text x="595" y="303" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">AMMONIA GAS ESCAPES INTO ATMOSPHERE</text>
  <text x="595" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NITROGEN IS LOST AS ESCAPING GAS</text>
  <text x="595" y="347" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">RULE: DO NOT APPLY AT THE SAME TIME</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">EXAM TIP: ANY BASE REACTS WITH ANY AMMONIUM SALT TO RELEASE AMMONIA GAS</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TEST: DAMP RED LITMUS PAPER TURNS BLUE BECAUSE AMMONIA IS AN ALKALINE GAS</text>
</svg>

---

### 🚜 2. The Agricultural Soil Trap (Lime vs Fertiliser)

Soil acidity is a major agricultural issue. Most crops grow best in neutral to slightly alkaline soil ($\\text{pH } 6.5 - 7.5$). When soil becomes too acidic ($\\text{pH} < 5.5$) due to acid rain or decay, farmers apply basic calcium compounds to neutralise the acid:
- **Slaked lime (calcium hydroxide, $\\ce{Ca(OH)2}$)**
- **Quicklime (calcium oxide, $\\ce{CaO}$)**
- **Limestone powder (calcium carbonate, $\\ce{CaCO3}$)**

> [!CAUTION]
> **The Critical Agricultural Pitfall**:
> If a farmer adds **slaked lime** and an **ammonium fertiliser** (e.g. ammonium nitrate, $\\ce{NH4NO3}$) to the soil at the same time:
> $$\\ce{Ca(OH)2(s) + 2NH4NO3(s) -> Ca(NO3)2(aq) + 2H2O(l) + 2NH3(g)^}$$
> The hydroxide ions from the lime react with the ammonium ions from the fertiliser, producing **ammonia gas ($\\ce{NH3}$)**. The ammonia gas evaporates directly into the atmosphere, causing **loss of essential nitrogen from the soil**! The expensive fertiliser is completely wasted.
>
> **Solution:** Farmers must apply lime and ammonium fertilisers **several weeks apart**, giving lime time to react with soil acids before fertiliser is applied.`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-displacement-1',
          type: 'multiple_choice',
          question:
            'What gas is produced when ammonium sulfate is warmed with aqueous sodium hydroxide?',
          options: [
            'Sulfur dioxide (SO2)',
            'Ammonia (NH3)',
            'Nitrogen dioxide (NO2)',
            'Hydrogen (H2)',
          ],
          correctAnswer: 1,
          explanation:
            'Warming any ammonium salt with a base displaces ammonia gas: (NH4)2SO4 + 2NaOH -> Na2SO4 + 2H2O + 2NH3(g).',
          misconceptionTarget:
            'Expecting sulfur dioxide because sulfate is present, rather than ammonia displacement.',
        },
        {
          id: 'quiz-10-displacement-2',
          type: 'multiple_choice',
          question:
            'Why does damp red litmus paper turn blue when held above a warm mixture of ammonium chloride and calcium hydroxide?',
          options: [
            'Because chlorine gas is released and bleaches the paper blue.',
            'Because ammonia gas is alkaline and dissolves in the water on the paper to form hydroxide ions.',
            'Because calcium ions evaporate and coat the litmus paper.',
            'Because hydrogen gas is produced which reduces the red pigment to blue.',
          ],
          correctAnswer: 1,
          explanation:
            'Ammonia (NH3) is an alkaline gas. It dissolves in the moisture on damp red litmus paper: NH3 + H2O <=> NH4+ + OH-. The hydroxide ions turn the indicator paper blue.',
          misconceptionTarget:
            'Thinking ammonia is acidic or that dry litmus paper would work without water.',
        },
        {
          id: 'quiz-10-displacement-3',
          type: 'multiple_choice',
          question:
            'Why should a farmer never apply slaked lime, Ca(OH)2, and ammonium nitrate fertiliser to agricultural fields at the same time?',
          options: [
            'They react violently to form an explosive mixture of calcium nitrate.',
            'They react together to release ammonia gas, causing loss of nitrogen from the soil.',
            'The lime oxidises the nitrate into poisonous nitrogen monoxide.',
            'The fertiliser makes the soil too alkaline for the lime to dissolve.',
          ],
          correctAnswer: 1,
          explanation:
            'Calcium hydroxide is a base. It reacts with the ammonium ions in the fertiliser: Ca(OH)2 + 2NH4+ -> Ca2+ + 2H2O + 2NH3(g). The volatile ammonia escapes into the air, wasting expensive nitrogen.',
          misconceptionTarget:
            'Believing the reaction produces toxic explosion or that lime neutralises nitrate ions.',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-10-exam-practice',
      tags: [
        'exam-practice',
        'paper-2-mcq',
        'paper-4-theory',
        'mark-scheme-tips',
      ],
      title: '8. Cambridge Exam Practice: Paper 2 & Paper 4 Worked Questions',
      summary:
        'Targeted Cambridge IGCSE examination questions covering water tests and treatment, atmospheric pollutants and catalytic converters, NPK calculations, and ammonia displacement with official mark scheme criteria.',
      content: `### 🎯 Cambridge Paper 2 (Multiple Choice Questions)

#### Question 1 (Paper 2)
Anhydrous copper(II) sulfate is added to four separate liquids:
- Liquid 1: Pure water
- Liquid 2: Sea water (aqueous sodium chloride)
- Liquid 3: Pure ethanol
- Liquid 4: An aqueous solution of ethanol ($50\\%$ ethanol, $50\\%$ water)

Which liquids will turn the anhydrous copper(II) sulfate blue?
- **A:** Liquid 1 only
- **B:** Liquid 1 and Liquid 2 only
- **C:** Liquid 1, Liquid 2, and Liquid 4
- **D:** All four liquids

**Correct Answer:** **C**
> [!NOTE]
> **Examiner Insight:** Anhydrous copper(II) sulfate turns blue whenever water molecules are present, whether in pure water (1), salt water (2), or an aqueous mixture of ethanol (4). Only pure anhydrous ethanol (Liquid 3) lacks water and gives a negative result.

---

#### Question 2 (Paper 2)
The table lists four statements about the catalytic converter in a car exhaust:
1. Platinum and rhodium act as catalysts.
2. Carbon monoxide is reduced to carbon dioxide.
3. Oxides of nitrogen are reduced to nitrogen.
4. The ceramic support is made as a flat plate to minimise surface area.

Which statements are correct?
- **A:** 1 and 3 only
- **B:** 1, 2, and 3
- **C:** 2 and 4 only
- **D:** 1, 3, and 4

**Correct Answer:** **A**
> [!NOTE]
> **Examiner Insight:** Statement 1 is correct (Pt, Pd, Rh are transition metal catalysts). Statement 2 is incorrect because $\\ce{CO}$ is **oxidised** (gains oxygen) to $\\ce{CO2}$. Statement 3 is correct ($\\ce{NO}$ is **reduced** to $\\ce{N2}$). Statement 4 is incorrect because the ceramic structure is a **honeycomb** designed to **maximise** surface area.

---

### 📝 Cambridge Paper 4 (Structured Theory Questions)

#### Question 3 (Paper 4 — 6 Marks)
A river in an industrial area is tested for water quality.
**(a)** State the difference between a chemical test for water and a test to show that water is pure. **[2]**
- **Mark Scheme:**
  - Chemical test (e.g. anhydrous $\\ce{CuSO4}$ / $\\ce{CoCl2}$) confirms **presence of water molecules** [1].
  - Test for purity checks **melting point at exactly $0^\\circ\\text{C}$** OR **boiling point at exactly $100^\\circ\\text{C}$** [1].

**(b)** Outline two stages used in a municipal water treatment plant to make river water potable. For each stage, name the process and state its purpose. **[4]**
- **Mark Scheme:**
  - *Process 1:* **Filtration** (through sand/gravel beds) [1] $\\to$ **Purpose:** Removes fine insoluble solids/suspended mud particles [1].
  - *Process 2:* **Chlorination** [1] $\\to$ **Purpose:** Kills bacteria / microbes / sterilises water [1].
  *(Allow: Sedimentation / Coagulation with alum $\\to$ clumps fine particles into sludge)*

---

#### Question 4 (Paper 4 — 6 Marks)
The internal combustion engine of an automobile produces several harmful exhaust emissions.
**(a)** State how oxides of nitrogen ($\\ce{NO}$) are formed in car engines, including the condition required. **[2]**
- **Mark Scheme:**
  - Atmospheric nitrogen ($\\ce{N2}$) and oxygen ($\\ce{O2}$) react together [1].
  - Condition: At very high temperatures (and pressures) inside the engine cylinders [1].

**(b)** Write a balanced symbol equation for the redox reaction between carbon monoxide and nitrogen monoxide in a catalytic converter. **[2]**
- **Mark Scheme:**
  $$2\\ce{CO(g)} + 2\\ce{NO(g)} \\longrightarrow 2\\ce{CO2(g)} + \\ce{N2(g)}$$
  - Correct formulae of reactants and products [1].
  - Correct balancing ($2:2:2:1$) [1].

**(c)** Explain why catalytic converters do not prevent cars from contributing to climate change. **[2]**
- **Mark Scheme:**
  - The reaction produces **carbon dioxide ($\\ce{CO2}$)** [1].
  - Carbon dioxide is a **greenhouse gas** that absorbs thermal infrared radiation / contributes to global warming [1].

---

#### Question 5 (Paper 4 — 6 Marks)
Fertilisers and soil conditioning are essential in modern agriculture.
**(a)** Ammonium nitrate is manufactured by neutralising aqueous ammonia with an acid.
Write the chemical equation for this neutralisation. **[1]**
- **Mark Scheme:**
  $$\\ce{NH3(aq) + HNO3(aq) -> NH4NO3(aq)} \\quad [1]$$

**(b)** A farmer wants to treat acidic soil.
1. Name a calcium compound that the farmer can add to reduce soil acidity. **[1]**
   - **Mark Scheme:** Calcium hydroxide / slaked lime / calcium oxide / quicklime / calcium carbonate / limestone [1].
2. The farmer also applies ammonium sulfate fertiliser. Explain why adding the calcium compound and the ammonium fertiliser together leads to a loss of soil nitrogen. **[3]**
   - **Mark Scheme:**
     - The calcium compound is a base / contains hydroxide ions [1].
     - Reacts with the ammonium salt to displace / liberate **ammonia gas ($\\ce{NH3}$)** [1].
     - Ammonia is a volatile gas that **escapes into the atmosphere** (so nitrogen is lost from the soil) [1].
3. Write the ionic equation for the reaction that causes this loss of nitrogen. **[1]**
   - **Mark Scheme:**
     $$\\ce{NH4+(aq) + OH-(aq) -> NH3(g) + H2O(l)} \\quad [1]$$`,
      checkpointQuizzes: [
        {
          id: 'quiz-10-exam-1',
          type: 'multiple_choice',
          question:
            'A student tests the gas produced when ammonium sulfate is warmed with calcium hydroxide. What is the expected observation and conclusion?',
          options: [
            'Gas turns damp blue litmus red; the gas is sulfur dioxide.',
            'Gas turns damp red litmus blue; the gas is ammonia.',
            'Gas relights a glowing splint; the gas is oxygen.',
            'Gas produces a white precipitate in limewater; the gas is carbon dioxide.',
          ],
          correctAnswer: 1,
          explanation:
            'Ammonium salts react with bases to liberate ammonia gas: (NH4)2SO4 + Ca(OH)2 -> CaSO4 + 2H2O + 2NH3. Ammonia is alkaline and turns damp red litmus paper blue.',
          misconceptionTarget:
            'Confusing the ammonia test with the limewater test for CO2 or bleaching with SO2.',
        },
        {
          id: 'quiz-10-exam-2',
          type: 'multiple_choice',
          question:
            'In the flue-gas desulfurisation equation: CaCO3(s) + SO2(g) -> CaSO3(s) + CO2(g), why is this classified as an acid-base neutralisation?',
          options: [
            'Because CaCO3 is an acidic carbonate and SO2 is a basic gas.',
            'Because SO2 is an acidic non-metal oxide and CaCO3 is a basic carbonate.',
            'Because oxidation states of sulfur and calcium change during the reaction.',
            'Because water is a required liquid catalyst.',
          ],
          correctAnswer: 1,
          explanation:
            'Non-metal oxides like SO2 are acidic oxides. Metal carbonates like CaCO3 are basic in nature and neutralise acidic gases.',
          misconceptionTarget:
            'Failing to classify sulfur dioxide as an acidic non-metal oxide.',
        },
        {
          id: 'quiz-10-exam-3',
          type: 'multiple_choice',
          question:
            'Which gas in vehicle exhaust is an unburned fuel component oxidised to carbon dioxide and water in a catalytic converter?',
          options: [
            'Methane / Hydrocarbons',
            'Nitrogen monoxide',
            'Sulfur trioxide',
            'Argon',
          ],
          correctAnswer: 0,
          explanation:
            'Unburned hydrocarbons (such as CH4 or octane vapours) undergo catalysed oxidation with excess oxygen to form CO2 and H2O.',
          misconceptionTarget:
            'Confusing unburned hydrocarbons with nitrogen monoxide.',
        },
      ],
    },
  ],
};
