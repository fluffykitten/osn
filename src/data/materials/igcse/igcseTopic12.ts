/**
 * igcseTopic12.ts
 * Topic 12: Experimental Techniques and Chemical Analysis
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_12: MaterialItem = {
  id: 212,
  topic_number: 12,
  title: 'Experimental Techniques and Chemical Analysis',
  slug: 'experimental-techniques-and-chemical-analysis',
  category: 'Experimental Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 48,
  summary:
    'Comprehensive study of experimental techniques and qualitative chemical analysis: measurement of physical quantities (time, temperature, mass, volume) using standard laboratory apparatus, gas collection methods based on density and solubility, volumetric acid-base titrations with concordant titres and indicators, paper chromatography and Rf values, criteria of purity (melting and boiling point profiles), separation and purification techniques (filtration, crystallisation, simple and fractional distillation, separating funnels), qualitative tests for cations, anions, and gases with full Cambridge mark scheme criteria, and Paper 6 practical investigation planning.',
  allTags: [
    'igcse-12-experimental-design-apparatus-gas-collection',
    'igcse-12-acid-base-titrations-volumetric-analysis',
    'igcse-12-paper-chromatography-purity-analysis',
    'igcse-12-separation-purification-techniques',
    'igcse-12-qualitative-analysis-ions-gases',
    'igcse-12-cambridge-exam-practice',
    'experimental-techniques',
    'measuring-apparatus',
    'burette',
    'pipette',
    'measuring-cylinder',
    'gas-syringe',
    'gas-collection',
    'titration',
    'acid-base-titration',
    'concordant-titres',
    'indicators',
    'methyl-orange',
    'thymolphthalein',
    'paper-chromatography',
    'rf-value',
    'retention-factor',
    'locating-agent',
    'ninhydrin',
    'purity',
    'melting-point-purity',
    'filtration',
    'crystallisation',
    'simple-distillation',
    'fractional-distillation',
    'fractionating-column',
    'separating-funnel',
    'qualitative-analysis',
    'cation-tests',
    'anion-tests',
    'flame-tests',
    'gas-tests',
    'precipitate',
    'amphoteric-hydroxide',
    'silver-nitrate-test',
    'barium-nitrate-test',
    'limewater',
    'cambridge-paper-6',
    'practical-chemistry',
  ],
  prerequisites: [
    {
      tag: 'igcse-12-experimental-design-apparatus-gas-collection',
      tags: [
        'experimental-design',
        'measuring-apparatus',
        'burette',
        'pipette',
        'measuring-cylinder',
        'gas-syringe',
        'gas-collection',
      ],
      title: '12.1 Experimental Design, Apparatus & Gas Collection',
      summary:
        'Measurement of time, temperature, mass, and volume in laboratory chemistry. Selection of suitable measuring instruments based on required precision, and selection of gas collection methods based on density and water solubility.',
      content: `### 1. Measurement of Physical Quantities in Chemistry

Experimental chemistry relies on making accurate, reproducible quantitative measurements. Cambridge IGCSE 0620 requires students to select suitable apparatus for measuring time, temperature, mass, and volume, taking into account precision and experimental constraints.

| Physical Quantity | Standard Measuring Instrument | Typical Precision / Smallest Division | Key Technique & Examiner Guidance |
| :--- | :--- | :--- | :--- |
| **Time** | Digital stopwatch or timer | $\\pm 0.01\\text{ s}$ (records to $0.1\\text{ s}$) | Start stopwatch simultaneously with reagent addition; stop at end-point or fixed time intervals. |
| **Temperature** | Liquid-in-glass thermometer / Digital probe | $\\pm 0.5^\\circ\\text{C}$ or $\\pm 0.1^\\circ\\text{C}$ | Ensure thermometer bulb is fully submerged in liquid without touching container walls or bottom. |
| **Mass** | Electronic top-pan balance | $\\pm 0.01\\text{ g}$ or $\\pm 0.001\\text{ g}$ | Tare (zero) balance before weighing; use a weighing boat or watch glass; never place chemicals directly on pan. |
| **Volume (Liquids)** | Measuring cylinder, Volumetric pipette, Burette | Depends on instrument ($0.05\\text{ cm}^3$ to $1\\text{ cm}^3$) | Read liquid volume at the bottom of the curved meniscus at eye level to eliminate parallax error. |
| **Volume (Gases)** | Gas syringe or inverted measuring cylinder | $\\pm 1\\text{ cm}^3$ | Ensure syringe plunger moves smoothly without friction or gas leakage at joint. |

---

### 2. Comparison of Liquid and Gas Measuring Apparatus

Selecting the correct volumetric glassware is a frequent Cambridge exam question:

1. **Measuring Cylinder:**
   - Designed to measure approximate volumes of liquids quickly (common sizes: $10\\text{ cm}^3$, $25\\text{ cm}^3$, $50\\text{ cm}^3$, $100\\text{ cm}^3$, $250\\text{ cm}^3$).
   - Typical accuracy: $\\pm 0.5\\text{ cm}^3$ or $\\pm 1.0\\text{ cm}^3$.
   - **Exam Rule:** Suitable for measuring reagents that are in excess, but **never** accurate enough for volumetric titrations.

2. **Volumetric Pipette:**
   - Accurately measures and delivers one specific, fixed volume of liquid (most commonly $25.0\\text{ cm}^3$ or $10.0\\text{ cm}^3$).
   - High accuracy: $\\pm 0.05\\text{ cm}^3$.
   - **Exam Rule:** Must always be filled using a safety pipette filler (rubber bulb or three-way pipette pump). **Never pipette by mouth!** Touch the tip against the side of the flask; do not blow out the tiny drop retained in the tip (calibrated for delivery).

3. **Burette:**
   - Measures variable, highly accurate volumes of liquid delivered from $0.00\\text{ cm}^3$ to $50.00\\text{ cm}^3$.
   - Calibrated in $0.1\\text{ cm}^3$ divisions; readings must always be recorded to two decimal places ending in $.00$ or $.05$ (e.g. $21.45\\text{ cm}^3$).
   - Zero mark is at the **top**; as liquid drains, the reading increases.
   - Ideal instrument for delivering variable volumes of titrant in acid-base and redox titrations.

4. **Gas Syringe:**
   - Ground-glass barrel and plunger calibrated from $0$ to $100\\text{ cm}^3$.
   - Measures gas volumes accurately ($\\pm 1\\text{ cm}^3$) regardless of whether the gas is soluble or insoluble in water.
   - Indispensable for continuous rate of reaction monitoring (recording volume evolved against time).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-laboratory-measuring-apparatus-title" data-diagram="igcse-t12-laboratory-measuring-apparatus">
  <title id="igcse-t12-laboratory-measuring-apparatus-title">PRECISION MEASURING APPARATUS IN THE CHEMISTRY LABORATORY</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">LABORATORY APPARATUS FOR MEASURING LIQUIDS &amp; GASES</text>

  <!-- CARD 1: MEASURING CYLINDER -->
  <rect x="20" y="55" width="180" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="180" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="110" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">MEASURING CYLINDER</text>

  <!-- Cylinder drawing -->
  <rect x="85" y="105" width="50" height="120" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="85" y="145" width="50" height="80" rx="2" fill="#8fd3ef" stroke="#1f2937" stroke-width="1"/>
  <line x1="85" y1="125" x2="98" y2="125" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="85" y1="145" x2="98" y2="145" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="85" y1="165" x2="98" y2="165" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="85" y1="185" x2="98" y2="185" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="85" y1="205" x2="98" y2="205" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="75" y="225" width="70" height="10" rx="2" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Cylinder details -->
  <rect x="30" y="250" width="160" height="115" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="110" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">APPROXIMATE VOL</text>
  <text x="110" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ACCURACY: ±0.5 CM³</text>
  <text x="110" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">QUICK &amp; CONVENIENT</text>
  <text x="110" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NOT FOR TITRATION</text>
  <text x="110" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">READ AT MENISCUS</text>

  <!-- CARD 2: VOLUMETRIC PIPETTE -->
  <rect x="210" y="55" width="180" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="210" y="55" width="180" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="300" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">VOLUMETRIC PIPETTE</text>

  <!-- Pipette drawing -->
  <line x1="300" y1="95" x2="300" y2="135" stroke="#1f2937" stroke-width="3"/>
  <path d="M 292 135 C 285 145, 285 175, 292 185 L 308 185 C 315 175, 315 145, 308 135 Z" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="300" y1="185" x2="300" y2="235" stroke="#1f2937" stroke-width="2.5"/>
  <line x1="290" y1="115" x2="310" y2="115" stroke="#d64545" stroke-width="2"/>
  <text x="325" y="118" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">MARK</text>

  <!-- Pipette details -->
  <rect x="220" y="250" width="160" height="115" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="300" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">FIXED EXACT VOL</text>
  <text x="300" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FIXED: 25.0 CM³</text>
  <text x="300" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">ACCURACY: ±0.05 CM³</text>
  <text x="300" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">USE PIPETTE FILLER</text>
  <text x="300" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">NEVER BY MOUTH</text>

  <!-- CARD 3: BURETTE -->
  <rect x="400" y="55" width="180" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="400" y="55" width="180" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="490" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BURETTE (TITRATION)</text>

  <!-- Burette drawing -->
  <rect x="483" y="95" width="14" height="120" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="483" y="130" width="14" height="85" fill="#fde58a" stroke="#1f2937" stroke-width="1"/>
  <circle cx="490" cy="220" r="5" fill="#d64545" stroke="#1f2937" stroke-width="1"/>
  <line x1="480" y1="220" x2="500" y2="220" stroke="#1f2937" stroke-width="2"/>
  <line x1="490" y1="225" x2="490" y2="238" stroke="#1f2937" stroke-width="2"/>
  <line x1="483" y1="105" x2="491" y2="105" stroke="#1f2937" stroke-width="1"/>
  <line x1="483" y1="120" x2="491" y2="120" stroke="#1f2937" stroke-width="1"/>
  <line x1="483" y1="135" x2="491" y2="135" stroke="#1f2937" stroke-width="1"/>
  <line x1="483" y1="150" x2="491" y2="150" stroke="#1f2937" stroke-width="1"/>
  <line x1="483" y1="165" x2="491" y2="165" stroke="#1f2937" stroke-width="1"/>
  <line x1="483" y1="180" x2="491" y2="180" stroke="#1f2937" stroke-width="1"/>
  <line x1="483" y1="195" x2="491" y2="195" stroke="#1f2937" stroke-width="1"/>

  <!-- Burette details -->
  <rect x="410" y="250" width="160" height="115" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="490" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">VARIABLE ACCURATE</text>
  <text x="490" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SCALE: 0 - 50 CM³</text>
  <text x="490" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">READ TO ±0.05 CM³</text>
  <text x="490" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ZERO MARK AT TOP</text>
  <text x="490" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">MEASURES RUN-OUT</text>

  <!-- CARD 4: GAS SYRINGE -->
  <rect x="590" y="55" width="190" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="590" y="55" width="190" height="30" rx="8" fill="#fcc68b" stroke="#1f2937" stroke-width="2"/>
  <text x="685" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">GAS SYRINGE</text>

  <!-- Gas syringe drawing -->
  <rect x="625" y="140" width="85" height="30" rx="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 625 155 L 610 155" stroke="#1f2937" stroke-width="3" fill="none"/>
  <rect x="660" y="143" width="70" height="24" rx="2" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="730" y="147" width="30" height="16" rx="2" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="635" y1="140" x2="635" y2="148" stroke="#1f2937" stroke-width="1"/>
  <line x1="645" y1="140" x2="645" y2="148" stroke="#1f2937" stroke-width="1"/>
  <line x1="655" y1="140" x2="655" y2="148" stroke="#1f2937" stroke-width="1"/>
  <line x1="665" y1="140" x2="665" y2="148" stroke="#1f2937" stroke-width="1"/>

  <!-- Gas syringe details -->
  <rect x="605" y="250" width="160" height="115" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="685" y="272" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">MEASURES GAS VOL</text>
  <text x="685" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SCALE: 0 - 100 CM³</text>
  <text x="685" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">ACCURACY: ±1 CM³</text>
  <text x="685" y="338" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FOR ALL GAS TYPES</text>
  <text x="685" y="356" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">RATES OF REACTION</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PIPETTE: FIXED VOLUME (25.0 CM³) • BURETTE: ACCURATE VARIABLE VOLUMES (±0.05 CM³)</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ALWAYS READ LIQUID MENISCUS AT EYE LEVEL AT THE BOTTOM OF THE CURVE</text>
</svg>

---

### 3. Laboratory Methods for Collecting Gases

When a chemical reaction produces a gas, the choice of collection method depends entirely on two physical properties:
1. **Solubility of the gas in water** (whether it dissolves or reacts with water).
2. **Density of the gas relative to air** (calculated by comparing its relative molecular mass $M_r$ to air's average $M_r \\approx 28.8$).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-gas-collection-methods-title" data-diagram="igcse-t12-gas-collection-methods">
  <title id="igcse-t12-gas-collection-methods-title">FOUR METHODS OF COLLECTING GASES IN THE LABORATORY</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">METHODS OF GAS COLLECTION BASED ON DENSITY &amp; SOLUBILITY</text>

  <!-- PANEL 1: UPWARD DELIVERY -->
  <rect x="20" y="55" width="180" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="180" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="110" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">UPWARD DELIVERY</text>

  <!-- Inverted gas jar and delivery tube -->
  <rect x="85" y="105" width="50" height="90" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 110 230 L 110 135" stroke="#1f2937" stroke-width="2" fill="none"/>
  <polygon points="110,128 106,138 114,138" fill="#1f2937"/>
  <text x="110" y="100" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">GAS RISES</text>

  <!-- Details -->
  <rect x="30" y="245" width="160" height="120" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="110" y="267" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">LIGHTER THAN AIR</text>
  <text x="110" y="289" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DENSITY &lt; AIR</text>
  <text x="110" y="311" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">AMMONIA (NH₃)</text>
  <text x="110" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">HYDROGEN (H₂)</text>
  <text x="110" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">DOWNWARD AIR DISP</text>

  <!-- PANEL 2: DOWNWARD DELIVERY -->
  <rect x="210" y="55" width="180" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="210" y="55" width="180" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="300" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DOWNWARD DELIVERY</text>

  <!-- Upright gas jar -->
  <rect x="275" y="130" width="50" height="90" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 300 95 L 300 195" stroke="#1f2937" stroke-width="2" fill="none"/>
  <polygon points="300,202 296,192 304,192" fill="#1f2937"/>
  <text x="300" y="215" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">GAS SINKS</text>

  <!-- Details -->
  <rect x="220" y="245" width="160" height="120" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="300" y="267" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">HEAVIER THAN AIR</text>
  <text x="300" y="289" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DENSITY &gt; AIR</text>
  <text x="300" y="311" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">CARBON DIOXIDE (CO₂)</text>
  <text x="300" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">CHLORINE (Cl₂), SO₂</text>
  <text x="300" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">UPWARD AIR DISP</text>

  <!-- PANEL 3: OVER WATER -->
  <rect x="400" y="55" width="180" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="400" y="55" width="180" height="30" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2"/>
  <text x="490" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">COLLECTION OVER WATER</text>

  <!-- Trough with water and inverted test tube -->
  <rect x="440" y="180" width="100" height="40" rx="3" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="475" y="115" width="30" height="85" rx="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="475" y="150" width="30" height="50" fill="#8fd3ef" stroke="#1f2937" stroke-width="1"/>
  <circle cx="490" cy="140" r="4" fill="#ffffff" stroke="#1f2937" stroke-width="1"/>
  <circle cx="486" cy="130" r="3" fill="#ffffff" stroke="#1f2937" stroke-width="1"/>
  <path d="M 445 210 L 485 210 L 485 190" stroke="#1f2937" stroke-width="2" fill="none"/>

  <!-- Details -->
  <rect x="410" y="245" width="160" height="120" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="490" y="267" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">INSOLUBLE IN WATER</text>
  <text x="490" y="289" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WATER-INSOLUBLE GAS</text>
  <text x="490" y="311" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">OXYGEN (O₂), H₂</text>
  <text x="490" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NOT FOR NH₃ OR HCl</text>
  <text x="490" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">GIVES MOIST GAS</text>

  <!-- PANEL 4: GAS SYRINGE -->
  <rect x="590" y="55" width="190" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="590" y="55" width="190" height="30" rx="8" fill="#fcc68b" stroke="#1f2937" stroke-width="2"/>
  <text x="685" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">GAS SYRINGE METHOD</text>

  <!-- Reaction flask connected to gas syringe -->
  <path d="M 620 185 L 635 155 L 635 140 L 645 140 L 645 155 L 660 185 Z" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 640 140 L 640 120 L 670 120 L 670 135" stroke="#1f2937" stroke-width="2" fill="none"/>
  <rect x="670" y="125" width="80" height="25" rx="2" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="710" y="127" width="50" height="21" rx="2" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Details -->
  <rect x="605" y="245" width="160" height="120" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="685" y="267" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ALL GASES &amp; VOLUMES</text>
  <text x="685" y="289" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SOLUBLE OR INSOLUBLE</text>
  <text x="685" y="311" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">MEASURES RATE DIRECT</text>
  <text x="685" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">GIVES DRY GAS VOLUME</text>
  <text x="685" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PREVENTS GAS ESCAPE</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SOLUBLE GASES (NH₃, HCl, SO₂) CANNOT BE COLLECTED OVER WATER!</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">GAS SYRINGE ALLOWS PRECISE MEASUREMENT OF ANY GAS VOLUME REGARDLESS OF SOLUBILITY</text>
</svg>

#### Systematic Selection Table for Common Gases

| Collection Method | Principle & Apparatus Setup | Suitable Gases | Unsuitable Gases & Reasons |
| :--- | :--- | :--- | :--- |
| **Upward Delivery** *(Downward displacement of air)* | Inverted gas jar or test tube over delivery tube. Gas rises to top and pushes air down. | Less dense than air ($M_r < 28.8$):<br>• Ammonia ($\\ce{NH3}$, $M_r = 17$)<br>• Hydrogen ($\\ce{H2}$, $M_r = 2$) | Dense gases ($\\ce{CO2}$, $\\ce{Cl2}$, $\\ce{SO2}$) because they sink out of the inverted jar into the room. |
| **Downward Delivery** *(Upward displacement of air)* | Upright gas jar with delivery tube extending to the bottom. Dense gas sinks and pushes air out top. | Denser than air ($M_r > 28.8$):<br>• Carbon dioxide ($\\ce{CO2}$, $M_r = 44$)<br>• Chlorine ($\\ce{Cl2}$, $M_r = 71$)<br>• Sulfur dioxide ($\\ce{SO2}$, $M_r = 64$) | Light gases ($\\ce{H2}$, $\\ce{NH3}$) because they float out of the upright jar. |
| **Collection Over Water** *(Downward displacement of water)* | Inverted gas jar filled with water in a water trough. Gas bubbles displace water downwards. | Insoluble or sparingly soluble in water:<br>• Oxygen ($\\ce{O2}$)<br>• Hydrogen ($\\ce{H2}$)<br>• Carbon dioxide ($\\ce{CO2}$, slight loss) | Highly soluble gases:<br>• Ammonia ($\\ce{NH3}$ dissolves completely)<br>• Hydrogen chloride ($\\ce{HCl}$ forms hydrochloric acid)<br>• Sulfur dioxide ($\\ce{SO2}$) |
| **Gas Syringe Method** | Reaction flask connected via delivery tube directly to a sealed gas syringe. | **All gases**, soluble or insoluble, wet or dry.<br>Enables precise quantitative volume measurement. | Highly corrosive gases if they degrade syringe seals, or volumes exceeding $100\\text{ cm}^3$. |

> [!IMPORTANT]
> **Cambridge Examiner Warning on Drying Gases:**
> To obtain a dry sample of gas before collection, it is passed through a drying agent:
> - **Concentrated sulfuric acid ($\\ce{H2SO4}$):** Suitable for acidic and neutral gases ($\\ce{CO2, Cl2, HCl, O2, H2}$). Unsuitable for basic gases like $\\ce{NH3}$ because they react to form ammonium sulfate!
> - **Quicklime (calcium oxide, $\\ce{CaO}$):** Suitable for basic and neutral gases ($\\ce{NH3}$). Unsuitable for acidic gases ($\\ce{CO2, SO2}$) because they react!
> - **Anhydrous calcium chloride ($\\ce{CaCl2}$):** Neutral drying agent suitable for most gases except ammonia.`,
      checkpointQuizzes: [
        {
          id: 'quiz-12-pre-1',
          type: 'multiple_choice',
          question:
            'A student needs to measure exactly 25.0 cm³ of aqueous sodium hydroxide to place into a conical flask for an acid-base titration. Which apparatus is the most appropriate?',
          options: [
            'A 25 cm³ beaker',
            'A 50 cm³ measuring cylinder',
            'A 25.0 cm³ volumetric pipette',
            'A 100 cm³ conical flask',
          ],
          correctAnswer: 2,
          explanation:
            'A volumetric pipette is calibrated to deliver an exact fixed volume (25.0 cm³) with high precision (±0.05 cm³), making it the standard apparatus for titrations. Measuring cylinders are only approximate (±0.5 cm³).',
          misconceptionTarget:
            'Confusing measuring cylinders (approximate) with volumetric pipettes (exact fixed volume).',
        },
        {
          id: 'quiz-12-pre-2',
          type: 'multiple_choice',
          question:
            'Why is collection over water unsuitable for collecting ammonia gas (NH3)?',
          options: [
            'Ammonia gas is flammable and reacts explosively with water.',
            'Ammonia gas is extremely soluble in water and dissolves rather than collecting in the jar.',
            'Ammonia gas is denser than water and sinks to the bottom of the trough.',
            'Ammonia decomposes instantly into nitrogen and hydrogen gases when exposed to moisture.',
          ],
          correctAnswer: 1,
          explanation:
            'Ammonia is extremely soluble in water (over 700 volumes of gas dissolve in 1 volume of water at room temperature), forming aqueous ammonium hydroxide. Therefore, virtually no gas would collect.',
          misconceptionTarget:
            'Assuming all gases can be collected over water regardless of solubility.',
        },
        {
          id: 'quiz-12-pre-3',
          type: 'multiple_choice',
          question:
            'When reading a burette or measuring cylinder, how should the student read the liquid level to prevent parallax error?',
          options: [
            'Look from above the liquid level at the top edges of the liquid.',
            'Look from below the liquid level towards the lowest point of the meniscus.',
            'Keep eyes level with the bottom of the curved meniscus.',
            'Take an average of the top edges and the bottom curve of the meniscus.',
          ],
          correctAnswer: 2,
          explanation:
            'To avoid parallax error, the observer eye must be positioned directly at the same horizontal level as the bottom of the meniscus (the lowest point of the curve for liquids that wet glass like water and acids).',
          misconceptionTarget:
            'Reading from the top edges of the meniscus or at an angle above/below horizontal.',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-12-acid-base-titrations-volumetric-analysis',
      tags: [
        'titration',
        'acid-base-titration',
        'concordant-titres',
        'burette-readings',
        'methyl-orange',
        'thymolphthalein',
        'volumetric-analysis',
      ],
      title: '12.2 Acid–Base Titrations & Volumetric Analysis',
      summary:
        'Standard experimental procedure for acid-base titrations: glassware rinsing protocols, burette manipulation, indicator selection (methyl orange and thymolphthalein), concordant titres rule, and quantitative volumetric calculations.',
      content: `### 1. Step-by-Step Acid–Base Titration Procedure

Titration is a quantitative volumetric analysis technique used to determine the unknown concentration of an acid or alkali by reacting it with a standard solution of known concentration until neutralisation is complete.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-acid-base-titration-procedure-title" data-diagram="igcse-t12-acid-base-titration-procedure">
  <title id="igcse-t12-acid-base-titration-procedure-title">ACID-BASE TITRATION SETUP, INDICATORS AND READINGS</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">ACID-BASE TITRATION: APPARATUS, TECHNIQUE &amp; INDICATORS</text>

  <!-- LEFT PANEL: APPARATUS -->
  <rect x="20" y="55" width="370" height="345" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">TITRATION EXPERIMENTAL APPARATUS</text>

  <!-- Stand and Clamp -->
  <line x1="80" y1="95" x2="80" y2="330" stroke="#1f2937" stroke-width="4"/>
  <rect x="50" y="330" width="80" height="15" rx="3" fill="#8a939c" stroke="#1f2937" stroke-width="1.5"/>
  <line x1="80" y1="150" x2="160" y2="150" stroke="#1f2937" stroke-width="3"/>
  <rect x="155" y="140" width="10" height="20" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Burette clamped -->
  <rect x="155" y="100" width="12" height="145" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="155" y="125" width="12" height="120" fill="#fde58a" stroke="#1f2937" stroke-width="1"/>
  <circle cx="161" cy="245" r="4" fill="#d64545" stroke="#1f2937" stroke-width="1"/>
  <line x1="161" y1="249" x2="161" y2="265" stroke="#1f2937" stroke-width="2"/>

  <!-- Conical Flask on white tile -->
  <path d="M 148 275 L 174 275 L 195 320 L 127 320 Z" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 136 300 L 186 300 L 195 320 L 127 320 Z" fill="#f5a3a3" stroke="#1f2937" stroke-width="1"/>
  <!-- White tile -->
  <rect x="115" y="322" width="95" height="8" rx="2" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="162" y="340" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">WHITE TILE</text>

  <!-- Callouts in Left Panel -->
  <rect x="235" y="105" width="140" height="42" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="305" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">BURETTE (ACID)</text>
  <text x="305" y="138" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">READ TO 0.05 CM³</text>

  <rect x="235" y="180" width="140" height="52" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="305" y="198" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">SWIRL FLASK</text>
  <text x="305" y="214" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ADD DROPWISE</text>
  <text x="305" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">NEAR END-POINT</text>

  <rect x="235" y="260" width="140" height="52" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="305" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">FLASK CONTENTS</text>
  <text x="305" y="294" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">25.0 CM³ ALKALI</text>
  <text x="305" y="308" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">+ 3 DROPS INDICATOR</text>

  <!-- RIGHT PANEL: INDICATORS & CONCORDANCE -->
  <rect x="410" y="55" width="370" height="345" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">INDICATOR END-POINTS &amp; RESULTS</text>

  <!-- Indicator 1: Methyl Orange -->
  <rect x="425" y="95" width="340" height="70" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">1. METHYL ORANGE INDICATOR:</text>
  <text x="440" y="135" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">IN ACID: RED</text>
  <text x="560" y="135" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#fcc68b" letter-spacing="0.8">END-POINT: ORANGE</text>
  <text x="440" y="153" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">IN ALKALI: YELLOW (END-POINT: ORANGE)</text>

  <!-- Indicator 2: Thymolphthalein -->
  <rect x="425" y="175" width="340" height="70" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="195" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">2. THYMOLPHTHALEIN INDICATOR:</text>
  <text x="440" y="215" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">IN ALKALI: BLUE</text>
  <text x="580" y="215" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">IN ACID: COLOURLESS</text>
  <text x="440" y="233" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">END-POINT: TURNS COLOURLESS</text>

  <!-- Concordant Titres Box -->
  <rect x="425" y="255" width="340" height="130" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CONCORDANT RESULTS RULE:</text>
  <text x="595" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• TWO TITRES WITHIN 0.10 CM³</text>
  <text x="595" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• DISCARD ROUGH (FIRST) TRIAL</text>
  <text x="595" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• AVERAGE CONCORDANT TITRES</text>
  <text x="595" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">• RECORD TO TWO DECIMAL PLACES</text>
  <text x="595" y="373" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONCORDANT AVG: 22.45 CM³</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="415" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="435" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONCORDANT TITRES: VOLUMES WITHIN ±0.10 CM³ OF EACH OTHER</text>
  <text x="400" y="453" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WHITE TILE ENSURES CLEAR IDENTIFICATION OF THE EXACT COLOUR CHANGE AT END-POINT</text>
</svg>

#### Mandatory Cambridge Glassware Preparation & Rinsing Protocol

| Apparatus | Rinsing Protocol Before Use | Scientific Rationale |
| :--- | :--- | :--- |
| **Volumetric Pipette** | Rinse with distilled water, then rinse with the **solution to be pipetted** (e.g. alkali). | Water droplets inside the pipette would dilute the solution, reducing the actual moles transferred. |
| **Burette** | Rinse with distilled water, then rinse with the **solution to fill the burette** (e.g. acid). | Residual water inside the burette would dilute the acid, requiring a larger volume (titre) than true value. |
| **Conical Flask** | Rinse with **distilled water only**! Never rinse with the alkali or acid! | Any residual alkali would add extra moles of reactant, ruining the stoichiometry. Distilled water does **not** change the moles of analyte transferred by the pipette. |

#### Experimental Execution Steps:
1. Use a pipette filler to draw $25.0\\text{ cm}^3$ of standard alkali into the volumetric pipette.
2. Discharge the alkali into a clean conical flask. Touch the tip against the glass to deliver the calibrated volume.
3. Add $2$ to $3$ drops of a suitable single-indicator (e.g. methyl orange or thymolphthalein). **Never add universal indicator!**
4. Fill the burette with acid using a small filter funnel. Remove the funnel before titrating (preventing rogue drops falling in).
5. Open the stopcock briefly into a waste beaker to fill the space below the tap (the jet). **Air bubbles trapped in the jet lead to systematic volume overestimation!**
6. Record the initial burette reading to two decimal places (e.g. $0.00\\text{ cm}^3$ or $1.20\\text{ cm}^3$).
7. Place the conical flask on a **white tile** beneath the burette tip (provides contrast to clearly see the colour change).
8. Add the acid while swirling the flask continuously with one hand and controlling the tap with the other.
9. Near the end-point, add acid dropwise until a single drop produces a permanent colour change.
10. Record the final burette reading. Subtract initial from final to determine the titre.

---

### 2. Concordant Titres & Calculating the Mean Titre

In Cambridge practical examinations (Paper 5 and Paper 6), students are evaluated on their ability to record, tabulate, and select concordant results:

- **Rough (Trial) Titration:** The first titration is run rapidly to determine the approximate neutralisation volume. It is **always discarded** when calculating the average.
- **Concordant Results Rule:** Concordant titres are titres that agree within **$\\pm 0.10\\text{ cm}^3$** of each other.
- **Mean Calculation:** Only concordant titres are included in the average.

#### Exemplar Experimental Data Table

| Titration Run | Rough Trial | Run 1 | Run 2 | Run 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Final burette reading ($/\\text{cm}^3$)** | $23.80$ | $46.10$ | $23.25$ | $45.70$ |
| **Initial burette reading ($/\\text{cm}^3$)** | $0.00$ | $23.50$ | $0.80$ | $23.25$ |
| **Titre volume ($/\\text{cm}^3$)** | $23.80$ | $22.60$ | $22.45$ | $22.45$ |
| **Concordant ($\\le 0.10\\text{ cm}^3$)?** | Discard | No | **Yes** | **Yes** |

$$\\text{Mean Titre} = \\frac{22.45 + 22.45}{2} = 22.45\\text{ cm}^3$$

*(Run 1 at $22.60\\text{ cm}^3$ is $0.15\\text{ cm}^3$ higher than $22.45\\text{ cm}^3$, so it is not concordant and is excluded).*

---

### 3. Acid–Base Indicators for Cambridge 0620

Universal indicator is unsuitable for titrations because it changes colour gradually across the entire pH range ($1$ to $14$), making it impossible to identify the exact neutralisation volume with a single drop. Cambridge syllabus specifies two sharp indicators:

| Indicator | Colour in Strong Acid | Colour at Neutral End-Point | Colour in Alkali | Application |
| :--- | :---: | :---: | :---: | :--- |
| **Methyl Orange** | **Red** | **Orange** | **Yellow** | Titrating strong acid with strong or weak base. In alkali-to-acid titration: changes yellow $\\to$ orange. |
| **Thymolphthalein** | **Colourless** | **Very faint pale blue** | **Blue** | Titrating weak or strong acid with strong base. In alkali-to-acid titration: changes blue $\\to$ colourless. |
| *(Litmus)* | *Red* | *Purple* | *Blue* | *Rarely used for titrations because the colour transition is too broad.* |

---

### 4. Volumetric Stoichiometric Calculations

The fundamental formula linking concentration ($c$), moles ($n$), and volume ($V$):

$$n = c \\times V \\quad \\text{where } V \\text{ is in } \\text{dm}^3 \\quad \\left(\\text{dm}^3 = \\frac{\\text{cm}^3}{1000}\\right)$$

$$\\text{Concentration } (\\text{mol/dm}^3) = \\frac{\\text{moles } (\\text{mol})}{\\text{volume } (\\text{dm}^3)}$$

$$\\text{Concentration } (\\text{g/dm}^3) = \\text{Concentration } (\\text{mol/dm}^3) \\times M_r$$`,
      checkpointQuizzes: [
        {
          id: 'quiz-12-core1-1',
          type: 'multiple_choice',
          question:
            'A student performs four titration runs and obtains the following titres: Rough: 24.50 cm³, Run 1: 23.80 cm³, Run 2: 23.40 cm³, Run 3: 23.45 cm³. What is the mean titre?',
          options: [
            '23.79 cm³',
            '23.43 cm³',
            '23.55 cm³',
            '23.40 cm³',
          ],
          correctAnswer: 1,
          explanation:
            'The rough trial (24.50 cm³) is discarded. Run 1 (23.80 cm³) is not concordant with Run 2 (23.40 cm³) and Run 3 (23.45 cm³) as the difference is > 0.10 cm³. Runs 2 and 3 are concordant (difference = 0.05 cm³). Mean titre = (23.40 + 23.45) / 2 = 23.425 ≈ 23.43 cm³.',
          misconceptionTarget:
            'Averaging all runs including the rough trial or non-concordant runs.',
        },
        {
          id: 'quiz-12-core1-2',
          type: 'multiple_choice',
          question:
            'In a titration, 25.0 cm³ of sodium hydroxide solution is placed in a conical flask with a few drops of methyl orange. Dilute hydrochloric acid is added from a burette. What is the colour change at the end-point?',
          options: [
            'Red to yellow',
            'Yellow to orange',
            'Orange to blue',
            'Colourless to pink',
          ],
          correctAnswer: 1,
          explanation:
            'Methyl orange is yellow in alkaline solution (NaOH in the flask). As acid is added dropwise, at the exact end-point neutralisation it changes to orange. (If excess acid is added, it turns red).',
          misconceptionTarget:
            'Thinking the end-point in an alkali-to-acid titration is red rather than orange.',
        },
        {
          id: 'quiz-12-core1-3',
          type: 'multiple_choice',
          question:
            'Why is rinsing the conical flask with the sodium hydroxide solution before the titration considered a serious experimental error?',
          options: [
            'The residual alkali droplets react violently with the glass walls of the flask.',
            'The droplets of alkali add extra unmeasured moles of hydroxide ions, causing overestimation of acid titre.',
            'The alkali evaporates rapidly and produces toxic vapors in the room.',
            'The alkali neutralises the methyl orange indicator permanently.',
          ],
          correctAnswer: 1,
          explanation:
            'The pipette delivers an exact 25.0 cm³ volume of alkali. If the conical flask was pre-rinsed with alkali, droplets clinging to the walls add extra moles of alkali, requiring more acid from the burette to neutralise and causing a positive systematic error.',
          misconceptionTarget:
            'Thinking the conical flask should be rinsed with the solution it holds like the pipette.',
        },
      ],
    },
    {
      tag: 'igcse-12-paper-chromatography-purity-analysis',
      tags: [
        'paper-chromatography',
        'rf-value',
        'locating-agents',
        'ninhydrin',
        'purity',
        'melting-point',
        'boiling-point',
      ],
      title: '12.3 Paper Chromatography & Purity Analysis',
      summary:
        'Principles of paper chromatography, stationary vs mobile phase, calculating Retention Factor (Rf) values, locating agents for colourless substances, and physical criteria of chemical purity (sharp melting/boiling points).',
      content: `### 1. Principles and Setup of Paper Chromatography

Paper chromatography is an analytical separation technique used to separate and identify mixtures of soluble substances (such as inks, food colourings, plant pigments, or amino acids).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-paper-chromatography-rf-title" data-diagram="igcse-t12-paper-chromatography-rf">
  <title id="igcse-t12-paper-chromatography-rf-title">PAPER CHROMATOGRAPHY SETUP AND RF VALUE CALCULATION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">PAPER CHROMATOGRAPHY AND RETENTION FACTOR (Rf) CALCULATION</text>

  <!-- LEFT PANEL: APPARATUS -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">CHROMATOGRAPHY TANK EXPERIMENT</text>

  <!-- Glass beaker / tank -->
  <rect x="65" y="100" width="220" height="200" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <!-- Lid on top -->
  <rect x="55" y="93" width="240" height="8" rx="2" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5"/>
  <text x="175" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">LID PREVENTS EVAPORATION</text>

  <!-- Solvent layer at bottom -->
  <rect x="66" y="275" width="218" height="24" rx="2" fill="#8fd3ef" stroke="#1f2937" stroke-width="1"/>
  <text x="200" y="291" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SOLVENT (WATER / ETHANOL)</text>

  <!-- Chromatography paper strip -->
  <rect x="110" y="110" width="130" height="175" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <!-- Pencil Baseline -->
  <line x1="110" y1="260" x2="240" y2="260" stroke="#1f2937" stroke-width="2"/>
  <text x="60" y="264" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PENCIL BASELINE</text>

  <!-- Solvent Front line -->
  <line x1="110" y1="140" x2="240" y2="140" stroke="#2f7fc1" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="60" y="144" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SOLVENT FRONT</text>

  <!-- Separated dye spots -->
  <circle cx="145" cy="260" r="4" fill="#1f2937"/>
  <circle cx="145" cy="180" r="7" fill="#d64545"/>
  <circle cx="205" cy="260" r="4" fill="#1f2937"/>
  <circle cx="205" cy="210" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="1"/>
  <circle cx="205" cy="160" r="7" fill="#3f8f46"/>

  <!-- Rule in left panel -->
  <rect x="35" y="315" width="340" height="55" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="333" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">BASELINE MUST BE IN PENCIL (NOT PEN!)</text>
  <text x="205" y="349" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PEN INK DISSOLVES AND SPREADS</text>
  <text x="205" y="363" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">SOLVENT LEVEL BELOW BASELINE</text>

  <!-- RIGHT PANEL: RF CALCULATION -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">RETENTION FACTOR (Rf) FORMULA</text>

  <!-- Rf Formula Box -->
  <rect x="425" y="95" width="340" height="85" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">Rf = DISTANCE BY SUBSTANCE (A)</text>
  <line x1="480" y1="126" x2="710" y2="126" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="142" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">DISTANCE BY SOLVENT FRONT (B)</text>
  <text x="595" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">Rf VALUE IS BETWEEN 0 AND 1 (NO UNITS!)</text>

  <!-- Interpreting Chromatograms Box -->
  <rect x="425" y="190" width="340" height="95" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">INTERPRETING CHROMATOGRAMS:</text>
  <text x="440" y="230" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• PURE SUBSTANCE: EXACTLY 1 SPOT</text>
  <text x="440" y="250" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• MIXTURE: 2 OR MORE SPOTS</text>
  <text x="440" y="270" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• SAME Rf = SAME SUBSTANCE</text>

  <!-- Locating Agent Box -->
  <rect x="425" y="295" width="340" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">LOCATING AGENTS (COLOURLESS SPOTS):</text>
  <text x="595" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• AMINO ACIDS ARE COLOURLESS</text>
  <text x="595" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• SPRAY WITH LOCATING AGENT (NINHYDRIN)</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">MEASURE DISTANCES FROM PENCIL BASELINE TO THE CENTRE OF EACH SPOT</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SOLVENT LEVEL MUST BE BELOW SPOTS TO PREVENT DYES DISSOLVING INTO TANK</text>
</svg>

#### Separation Mechanism:
- **Stationary Phase:** The cellulose paper fibres, which hold a thin layer of adsorbed water.
- **Mobile Phase:** The solvent (water, ethanol, or an organic solvent) that moves upwards through the paper by capillary action.
- **Principle:** As the solvent ascends, components in the mixture partition between the stationary phase and mobile phase. Substances with **greater solubility** in the mobile phase and **weaker attraction** to the paper travel faster and further up the chromatogram.

#### Critical Experimental Rules (Cambridge Exam Checklist):

1. **Baseline drawn in PENCIL:**
   - **Why?** Pencil graphite is insoluble in all chromatography solvents and will not dissolve or run up the paper.
   - **Error if pen ink is used:** Ink contains dyes that dissolve and separate, producing false spots that ruin the test.
2. **Solvent level BELOW the baseline:**
   - **Why?** If the solvent level is above the baseline, the sample spots will dissolve directly into the solvent pool at the bottom of the beaker and wash away instead of traveling up the paper.
3. **Small, concentrated sample spots:**
   - Applied using a thin capillary tube and allowed to dry; keeps spots small and prevents overlapping smears.
4. **Beaker covered with a LID:**
   - **Why?** Prevents evaporation of volatile solvents and keeps the air inside the tank saturated with solvent vapour, ensuring the solvent front moves evenly.
5. **Mark the solvent front immediately:**
   - As soon as the solvent approaches the top of the paper, remove the paper and mark the solvent front in pencil before the solvent evaporates.

---

### 2. Retention Factor ($R_f$) Value Calculation

The Retention Factor ($R_f$) is a characteristic physical constant for a particular compound in a specified solvent system at a given temperature:

$$R_f = \\frac{\\text{Distance travelled by substance}}{\\text{Distance travelled by solvent front}}$$

$$\\text{where distance is measured from the pencil baseline to the centre of the spot.}$$

#### Key Characteristics of $R_f$:
- **Dimensionless:** $R_f$ has **no units** because it is a ratio of two distances (e.g. $\\text{cm} / \\text{cm}$).
- **Value Range:** Always between $0$ and $1$ ($0 < R_f < 1$).
- **Identification:** Two substances that produce identical $R_f$ values using the same solvent system are likely the same compound.

---

### 3. Locating Agents for Colourless Substances

Many biological and chemical molecules, such as **amino acids** from hydrolysed proteins or **simple sugars**, are completely colourless and cannot be seen on a chromatogram by the naked eye.

- **Procedure:**
  1. Develop and dry the chromatogram thoroughly in a fume hood.
  2. Spray the paper with a **locating agent** (e.g. **ninhydrin** solution for amino acids).
  3. Heat the paper gently in an oven or with a hairdryer.
  4. The locating agent reacts chemically with the colourless spots to produce visible, coloured spots (ninhydrin produces purple/blue-brown spots).
- **Alternative:** Examining the chromatogram under ultraviolet (UV) light or in an iodine vapour tank.

---

### 4. Chemical Purity and Physical Constants

In chemistry, a **pure substance** consists of a single element or compound not mixed with any other substance.

| Criterion of Purity | Pure Substance | Impure Substance (Mixture) |
| :--- | :--- | :--- |
| **Chromatography** | Produces **exactly one spot** on the chromatogram in any suitable solvent. | Produces **two or more spots** on the chromatogram. |
| **Melting Point** | Melts sharply at a **single, specific, well-defined temperature** (e.g. pure ice melts at exactly $0^\\circ\\text{C}$). | • Melts at a **lower temperature** than the pure substance (melting point depression).<br>• Melts **gradually over a range** of temperatures (e.g. $-3^\\circ\\text{C}$ to $-1^\\circ\\text{C}$). |
| **Boiling Point** | Boils sharply at a **single fixed temperature** (e.g. pure water boils at $100^\\circ\\text{C}$ at $1\\text{ atm}$). | • Boils at a **higher temperature** than pure liquid (boiling point elevation).<br>• Boils **over a range** of temperatures (e.g. $102^\\circ\\text{C}$ to $105^\\circ\\text{C}$). |

> [!TIP]
> **Everyday Importance of Purity:**
> Purity is vital in food additives, consumer cosmetics, and especially **pharmaceuticals**. An impurity in a medicine could be ineffective or toxic (e.g. the thalidomide disaster where one optical enantiomer was therapeutic while the other caused severe birth defects).`,
      checkpointQuizzes: [
        {
          id: 'quiz-12-core2-1',
          type: 'multiple_choice',
          question:
            'A student sets up paper chromatography. In the developed chromatogram, the pencil baseline to solvent front distance is 8.0 cm. A red dye spot travels 5.2 cm from the baseline. What is the Rf value of the red dye?',
          options: [
            '1.54',
            '0.65',
            '0.35',
            '5.2 cm',
          ],
          correctAnswer: 1,
          explanation:
            'Rf = (distance travelled by substance) / (distance travelled by solvent front) = 5.2 cm / 8.0 cm = 0.65. Note that Rf is dimensionless and has no units.',
          misconceptionTarget:
            'Inverting the fraction (8.0 / 5.2 = 1.54) or including units (cm).',
        },
        {
          id: 'quiz-12-core2-2',
          type: 'multiple_choice',
          question:
            'Why is a locating agent required when separating a mixture of amino acids by paper chromatography?',
          options: [
            'Amino acids are too volatile and would evaporate from the paper without it.',
            'Amino acids are colourless and invisible on the paper until reacted with a locating agent.',
            'The locating agent speeds up the capillary flow of the solvent.',
            'The locating agent neutralises the amino acids so they dissolve in water.',
          ],
          correctAnswer: 1,
          explanation:
            'Amino acids are colourless compounds. Spraying with a locating agent (such as ninhydrin) and heating forms coloured compounds, making the spots visible for distance and Rf measurement.',
          misconceptionTarget:
            'Thinking locating agents act as solvents or catalysts for separation.',
        },
        {
          id: 'quiz-12-core2-3',
          type: 'multiple_choice',
          question:
            'A sample of aspirin is tested in a melting point apparatus. It begins melting at 131 °C and finishes melting at 137 °C. Pure aspirin has a melting point of 138 °C. What can be concluded about the sample?',
          options: [
            'The aspirin sample is completely pure.',
            'The sample is impure because it melts over a temperature range and below the true melting point.',
            'The aspirin sample was heated too quickly and decomposed.',
            'The melting point apparatus was inaccurate by 7 °C.',
          ],
          correctAnswer: 1,
          explanation:
            'Pure substances melt sharply at a single exact temperature. The presence of impurities lowers the melting point (melting point depression) and causes melting to occur over a broad temperature range (here, 131–137 °C).',
          misconceptionTarget:
            'Believing melting over a range is normal for pure organic solids.',
        },
      ],
    },
    {
      tag: 'igcse-12-separation-purification-techniques',
      tags: [
        'separation-techniques',
        'filtration',
        'crystallisation',
        'simple-distillation',
        'fractional-distillation',
        'separating-funnel',
        'purification',
      ],
      title: '12.4 Separation & Purification Techniques',
      summary:
        'Methods for separating mixtures based on physical properties: filtration for insoluble solids, the 4-step crystallisation protocol for soluble salts, simple vs fractional distillation for liquids, and separating funnels for immiscible liquids.',
      content: `### 1. Solid–Liquid Separations: Filtration and Crystallisation

The choice of separation technique depends on whether the solid is dissolved in the liquid (solution) or suspended without dissolving (insoluble solid).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-separation-filtration-crystallisation-title" data-diagram="igcse-t12-separation-filtration-crystallisation">
  <title id="igcse-t12-separation-filtration-crystallisation-title">SEPARATION TECHNIQUES: FILTRATION AND CRYSTALLISATION</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">SEPARATION OF SOLID-LIQUID MIXTURES: FILTRATION &amp; CRYSTALLISATION</text>

  <!-- LEFT PANEL: FILTRATION -->
  <rect x="20" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. FILTRATION (INSOLUBLE SOLID)</text>

  <!-- Filter Funnel & Filter Paper -->
  <polygon points="175,100 235,100 210,150 200,150" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <polygon points="179,102 231,102 208,145 202,145" fill="#cfd4d9" stroke="#8a939c" stroke-width="1"/>
  <!-- Stem -->
  <rect x="202" y="150" width="6" height="35" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <!-- Residue solid in paper -->
  <circle cx="205" cy="118" r="7" fill="#fde58a" stroke="#1f2937" stroke-width="1"/>
  <text x="135" y="122" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RESIDUE</text>
  <line x1="160" y1="118" x2="195" y2="118" stroke="#d64545" stroke-width="1.5"/>

  <!-- Conical Flask collecting filtrate -->
  <path d="M 195 180 L 215 180 L 235 235 L 175 235 Z" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 183 215 L 227 215 L 235 235 L 175 235 Z" fill="#8fd3ef" stroke="#1f2937" stroke-width="1"/>
  <text x="135" y="222" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">FILTRATE</text>
  <line x1="160" y1="218" x2="185" y2="218" stroke="#2f7fc1" stroke-width="1.5"/>

  <!-- Details -->
  <rect x="35" y="255" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="275" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">PRINCIPLE OF FILTRATION:</text>
  <text x="205" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• SEPARATES UNDISSOLVED SOLID</text>
  <text x="205" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• RESIDUE TRAPPED ON FILTER PAPER</text>
  <text x="205" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• FILTRATE PASSES THROUGH FUNNEL</text>
  <text x="205" y="353" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">EXAMPLE: SAND FROM SALTWATER</text>

  <!-- RIGHT PANEL: CRYSTALLISATION -->
  <rect x="410" y="55" width="370" height="325" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. CRYSTALLISATION (SOLUBLE SOLID)</text>

  <!-- Evaporating basin with steam -->
  <ellipse cx="595" cy="140" rx="45" ry="14" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M 550 140 C 550 170, 640 170, 640 140 Z" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <!-- Heat arrow -->
  <polygon points="595,190 588,205 602,205" fill="#d64545"/>
  <text x="595" y="218" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">GENTLE HEAT</text>

  <!-- Details -->
  <rect x="425" y="240" width="340" height="125" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">4 MANDATORY EXAM STEPS:</text>
  <text x="440" y="280" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. HEAT TO SATURATION POINT</text>
  <text x="440" y="300" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. COOL SLOWLY TO FORM CRYSTALS</text>
  <text x="440" y="320" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">3. FILTER OFF CRYSTALS FROM LIQUID</text>
  <text x="440" y="340" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">4. DRY BETWEEN FILTER PAPERS</text>
  <text x="440" y="358" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">DO NOT HEAT TO COMPLETE DRYNESS</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="395" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="415" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FILTRATION SEPARATES INSOLUBLE SOLIDS; CRYSTALLISATION SEPARATES DISSOLVED SOLUTES</text>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NEVER HEAT SALTS TO DRYNESS IN CRYSTALLISATION TO AVOID DECOMPOSITION</text>
</svg>

#### 1. Filtration (Separating Insoluble Solids from Liquids)
- **Apparatus:** Filter funnel, filter paper, conical flask or beaker.
- **Terminology:**
  - **Residue:** The solid particles trapped on the filter paper (pores in paper are too small for solid particles).
  - **Filtrate:** The clear liquid solution that passes through the filter paper pores into the flask.
- **Purification Step:** Always wash the residue on the filter paper with a small volume of cold distilled water to remove adhering filtrate solution, then dry between filter papers or in a warm oven.
- **Example:** Separating excess insoluble copper(II) oxide from copper(II) sulfate solution in salt preparation.

#### 2. Crystallisation (Obtaining Pure Soluble Solid from Solution)
When separating a soluble salt (e.g. hydrated $\\ce{CuSO4.5H2O}$) from its aqueous solution, evaporation to complete dryness is **forbidden** in Cambridge exams because:
1. Heating to dryness drives off chemically bound water of crystallisation, forming an anhydrous powder instead of crystals.
2. Many salts decompose thermally when heated strongly (e.g. nitrates and carbonates).

#### The 4 Mandatory Cambridge Exam Steps for Crystallisation:
1. **Heat to Saturation (Crystallisation Point):**
   - Place the solution in an evaporating basin and heat gently over a Bunsen flame to evaporate water until a hot saturated solution is formed.
   - **Test for saturation:** Dip a clean cold glass rod into the solution; if tiny crystals form immediately on the rod tip, the crystallisation point has been reached.
2. **Cool Slowly:**
   - Turn off the heat and allow the saturated solution to cool slowly at room temperature.
   - As temperature decreases, solubility drops, forcing solute out of solution to form large, well-defined crystals.
3. **Filter the Crystals:**
   - Filter the mixture through a filter funnel to separate the solid crystals from the remaining cold liquid (mother liquor).
4. **Wash and Dry:**
   - Wash the crystals with a tiny amount of **cold distilled water** (to remove residual surface solution without dissolving crystals).
   - Dry the crystals gently by pressing them between two sheets of clean filter paper (or in a desiccator).

---

### 2. Liquid–Liquid and Liquid–Solute Separations: Distillation

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-simple-vs-fractional-distillation-title" data-diagram="igcse-t12-simple-vs-fractional-distillation">
  <title id="igcse-t12-simple-vs-fractional-distillation-title">SIMPLE DISTILLATION VS FRACTIONAL DISTILLATION APPARATUS</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">SIMPLE DISTILLATION VS FRACTIONAL DISTILLATION</text>

  <!-- LEFT PANEL: SIMPLE DISTILLATION -->
  <rect x="20" y="55" width="370" height="345" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. SIMPLE DISTILLATION (SOLVENT)</text>

  <!-- Distillation flask -->
  <circle cx="85" cy="180" r="30" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="80" y="125" width="10" height="30" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <!-- Thermometer -->
  <line x1="85" y1="100" x2="85" y2="155" stroke="#d64545" stroke-width="2"/>
  <circle cx="85" cy="155" r="3" fill="#d64545"/>

  <!-- Condenser angled down -->
  <path d="M 90 145 L 230 205" stroke="#1f2937" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M 90 145 L 230 205" stroke="#8fd3ef" stroke-width="5" stroke-linecap="round" fill="none"/>
  <!-- Jacket -->
  <rect x="115" y="150" width="90" height="30" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="160" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CONDENSER</text>

  <!-- Receiver beaker -->
  <rect x="235" y="210" width="35" height="40" rx="2" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="235" y="230" width="35" height="20" fill="#8fd3ef" stroke="#1f2937" stroke-width="1"/>
  <text x="252" y="265" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">DISTILLATE</text>

  <!-- Details -->
  <rect x="35" y="275" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="205" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SIMPLE DISTILLATION PRINCIPLES:</text>
  <text x="205" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• SEPARATES LIQUID FROM DISSOLVED SOLID</text>
  <text x="205" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• WATER IN AT BOTTOM, OUT AT TOP</text>
  <text x="205" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• THERMOMETER BULB LEVEL WITH SIDE-ARM</text>
  <text x="205" y="373" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">EXAMPLE: PURE WATER FROM SEAWATER</text>

  <!-- RIGHT PANEL: FRACTIONAL DISTILLATION -->
  <rect x="410" y="55" width="370" height="345" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. FRACTIONAL DISTILLATION</text>

  <!-- Fractionating column with beads -->
  <circle cx="475" cy="205" r="25" fill="#fde58a" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="468" y="115" width="14" height="65" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <!-- Glass beads -->
  <circle cx="475" cy="130" r="3" fill="#cfd4d9"/>
  <circle cx="475" cy="142" r="3" fill="#cfd4d9"/>
  <circle cx="475" cy="154" r="3" fill="#cfd4d9"/>
  <circle cx="475" cy="166" r="3" fill="#cfd4d9"/>
  <text x="525" y="145" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">GLASS BEADS</text>

  <!-- Condenser -->
  <path d="M 482 125 L 610 185" stroke="#1f2937" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M 482 125 L 610 185" stroke="#8fd3ef" stroke-width="5" stroke-linecap="round" fill="none"/>
  <rect x="510" y="130" width="75" height="26" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>

  <!-- Details -->
  <rect x="425" y="275" width="340" height="110" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="595" y="295" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">FRACTIONAL DISTILLATION PRINCIPLES:</text>
  <text x="595" y="315" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• SEPARATES MISCIBLE LIQUIDS (CLOSE B.P.)</text>
  <text x="595" y="335" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• GLASS BEADS PROVIDE SURFACE AREA</text>
  <text x="595" y="355" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• LOWER B.P. LIQUID DISTILS OVER FIRST</text>
  <text x="595" y="373" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">EXAMPLE: ETHANOL (78 °C) &amp; WATER (100 °C)</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="415" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="435" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">CONDENSER WATER MUST ENTER AT THE BOTTOM AND LEAVE AT THE TOP</text>
  <text x="400" y="453" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">THIS PREVENTS AIR BUBBLES AND ENSURES EFFICIENT COOLING OF VAPOURS</text>
</svg>

#### 1. Simple Distillation
- **Purpose:** To separate and collect a volatile liquid solvent from a non-volatile dissolved solid (e.g. obtaining pure water from seawater or salt solution).
- **Key Apparatus & Operating Principles:**
  - **Distillation Flask:** Round-bottom flask containing solution and anti-bumping granules (which promote smooth, even boiling and prevent violent liquid surging).
  - **Thermometer Bulb Position:** Must be placed **directly opposite the side-arm entrance** to the condenser to measure the exact boiling temperature of the vapour entering the condenser.
  - **Liebig Condenser:** Water enters through the **bottom nozzle** and leaves through the **top nozzle**.
    - *Why bottom-to-top?* Ensures the cooling jacket is completely filled with water, eliminates air pockets, and provides maximum counter-current cooling efficiency.

#### 2. Fractional Distillation
- **Purpose:** To separate two or more **miscible liquids** with different boiling points (e.g. ethanol [b.p. $78^\\circ\\text{C}$] and water [b.p. $100^\\circ\\text{C}$], or crude oil fractions).
- **Fractionating Column:**
  - Packed with **glass beads** (or internal glass trays).
  - The glass beads provide an extensive **surface area** for repeated condensation and re-evaporation cycles.
  - Creates a temperature gradient: hottest at the bottom, coolest at the top.
  - The liquid with the **lower boiling point** reaches the top of the column first, while higher boiling point vapours condense on the beads and drip back into the flask.

---

### 3. Separating Immiscible Liquids: The Separating Funnel

When two liquids are **immiscible** (do not mix, forming distinct layers based on density, such as oil and water, or cyclohexane and aqueous salt):
1. Pour the mixture into a separating funnel with the stopcock closed.
2. Place a stopper on the funnel, invert and shake gently, opening the tap periodically to release pressure.
3. Clamp the funnel upright and allow the two layers to separate completely.
4. Remove the stopper, open the stopcock, and drain the lower, denser layer into a beaker.
5. Close the stopcock just as the interface reaches the tap to achieve complete separation.`,
      checkpointQuizzes: [
        {
          id: 'quiz-12-core3-1',
          type: 'multiple_choice',
          question:
            'In a simple distillation apparatus, why must cooling water enter the Liebig condenser at the bottom and exit at the top?',
          options: [
            'Water flows faster downwards due to gravity.',
            'Entering at the bottom ensures the condenser jacket fills completely with water and prevents air pockets from forming.',
            'Cold water at the top would crack the glass condenser.',
            'Water at the bottom is under lower atmospheric pressure.',
          ],
          correctAnswer: 1,
          explanation:
            'Feeding water into the bottom ensures the jacket fills completely against gravity before leaving at the top. This guarantees no air pockets and provides maximum cooling efficiency for vapours.',
          misconceptionTarget:
            'Thinking water flow direction does not affect cooling efficiency.',
        },
        {
          id: 'quiz-12-core3-2',
          type: 'multiple_choice',
          question:
            'A student wants to separate a mixture of ethanol (b.p. 78 °C) and water (b.p. 100 °C). Which technique is the most effective?',
          options: [
            'Simple distillation',
            'Fractional distillation',
            'Separating funnel',
            'Crystallisation',
          ],
          correctAnswer: 1,
          explanation:
            'Ethanol and water are miscible liquids with close boiling points (difference < 25 °C). Fractional distillation using a fractionating column with glass beads is required to achieve complete separation.',
          misconceptionTarget:
            'Selecting simple distillation (insufficient separation for miscible liquids with close boiling points) or separating funnel (only for immiscible liquids).',
        },
        {
          id: 'quiz-12-core3-3',
          type: 'multiple_choice',
          question:
            'In the preparation of pure hydrated copper(II) sulfate crystals, why is the solution NOT heated to complete dryness in the evaporating basin?',
          options: [
            'The copper(II) sulfate would evaporate into the air.',
            'Heating to dryness drives off water of crystallisation and can thermally decompose the salt.',
            'The evaporating basin would break instantly.',
            'The solution would catch fire.',
          ],
          correctAnswer: 1,
          explanation:
            'Heating to complete dryness removes the chemically bonded water of crystallisation, leaving anhydrous white powder instead of blue crystals, and can cause thermal decomposition.',
          misconceptionTarget:
            'Believing heating to dryness is the standard way to produce crystalline salts.',
        },
      ],
    },
    {
      tag: 'igcse-12-qualitative-analysis-ions-gases',
      tags: [
        'qualitative-analysis',
        'cation-tests',
        'anion-tests',
        'flame-tests',
        'gas-tests',
        'precipitates',
        'cambridge-notes',
      ],
      title: '12.5 Qualitative Analysis: Identification of Ions & Gases',
      summary:
        'Official Cambridge IGCSE 0620 qualitative analysis scheme: tests for aqueous cations with NaOH and NH3, flame tests, tests for anions (halides, sulfate, sulfite, carbonate, nitrate), and identification tests for 6 gases.',
      content: `### 1. Qualitative Analysis of Aqueous Cations

In Cambridge chemistry, metal cations are identified by adding **aqueous sodium hydroxide ($\\ce{NaOH}$)** and **aqueous ammonia ($\\ce{NH3}$)**, first dropwise and then in excess.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-qualitative-cation-tests-title" data-diagram="igcse-t12-qualitative-cation-tests">
  <title id="igcse-t12-qualitative-cation-tests-title">QUALITATIVE ANALYSIS TESTS FOR CATIONS</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">IDENTIFICATION OF CATIONS: AQUEOUS NaOH &amp; AQUEOUS NH₃</text>

  <!-- PANEL 1: WHITE PRECIPITATE CATIONS -->
  <rect x="20" y="55" width="760" height="175" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="55" width="760" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. WHITE PRECIPITATE CATIONS: Al³⁺, Zn²⁺, Ca²⁺</text>

  <!-- Al3+ Card -->
  <rect x="35" y="95" width="230" height="120" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="150" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ALUMINIUM (Al³⁺)</text>
  <text x="45" y="138" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ NaOH: WHITE PPT</text>
  <text x="45" y="156" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">EXCESS NaOH: DISSOLVES</text>
  <text x="45" y="174" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ NH₃: WHITE PPT</text>
  <text x="45" y="192" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">EXCESS NH₃: INSOLUBLE</text>

  <!-- Zn2+ Card -->
  <rect x="285" y="95" width="230" height="120" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="400" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ZINC (Zn²⁺)</text>
  <text x="295" y="138" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ NaOH: WHITE PPT</text>
  <text x="295" y="156" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">EXCESS NaOH: DISSOLVES</text>
  <text x="295" y="174" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ NH₃: WHITE PPT</text>
  <text x="295" y="192" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">EXCESS NH₃: DISSOLVES</text>

  <!-- Ca2+ Card -->
  <rect x="535" y="95" width="230" height="120" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="650" y="115" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CALCIUM (Ca²⁺)</text>
  <text x="545" y="138" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ NaOH: WHITE PPT</text>
  <text x="545" y="156" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">EXCESS NaOH: INSOLUBLE</text>
  <text x="545" y="174" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">+ NH₃: NO PRECIPITATE</text>
  <text x="545" y="192" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(OR SLIGHT FAINT WHITE)</text>

  <!-- PANEL 2: COLOURED PRECIPITATE CATIONS -->
  <rect x="20" y="240" width="760" height="185" rx="8" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <rect x="20" y="240" width="760" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="400" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. COLOURED PRECIPITATE CATIONS &amp; AMMONIUM (NH₄⁺)</text>

  <!-- Cu2+ Card -->
  <rect x="35" y="280" width="170" height="135" rx="6" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5"/>
  <text x="120" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">COPPER(II) (Cu²⁺)</text>
  <text x="45" y="322" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LIGHT BLUE PPT</text>
  <text x="45" y="342" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">NaOH: INSOLUBLE</text>
  <text x="45" y="362" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">EXCESS NH₃:</text>
  <text x="45" y="380" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">ROYAL BLUE SOLN</text>

  <!-- Fe2+ Card -->
  <rect x="220" y="280" width="170" height="135" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5"/>
  <text x="305" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">IRON(II) (Fe²⁺)</text>
  <text x="230" y="322" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">GREEN PPT</text>
  <text x="230" y="342" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">INSOLUBLE IN EXCESS</text>
  <text x="230" y="362" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TURNS BROWN AT</text>
  <text x="230" y="380" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">SURFACE (OXIDISES)</text>

  <!-- Fe3+ Card -->
  <rect x="405" y="280" width="170" height="135" rx="6" fill="#fcc68b" stroke="#1f2937" stroke-width="1.5"/>
  <text x="490" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">IRON(III) (Fe³⁺)</text>
  <text x="415" y="322" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RED-BROWN PPT</text>
  <text x="415" y="342" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">INSOLUBLE IN</text>
  <text x="415" y="362" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">EXCESS NaOH &amp; NH₃</text>
  <text x="415" y="380" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">RUST COLOUR</text>

  <!-- NH4+ Card -->
  <rect x="590" y="280" width="175" height="135" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/>
  <text x="677" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AMMONIUM (NH₄⁺)</text>
  <text x="600" y="322" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NO PRECIPITATE</text>
  <text x="600" y="342" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">WARM WITH NaOH:</text>
  <text x="600" y="362" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">NH₃ GAS PRODUCED</text>
  <text x="677" y="380" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">DAMP RED LITMUS BLUE</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="438" width="760" height="42" rx="4" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="456" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">Al³⁺ DISSOLVES ONLY IN EXCESS NaOH; Zn²⁺ DISSOLVES IN BOTH EXCESS NaOH &amp; NH₃</text>
  <text x="400" y="472" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">FLAME TESTS: Li⁺ RED • Na⁺ YELLOW • K⁺ LILAC • Ca²⁺ ORANGE-RED • Cu²⁺ BLUE-GREEN</text>
</svg>

#### Complete Cambridge Cation Identification Table

| Cation | Formula | Effect of Aqueous $\\ce{NaOH}$ | Effect of Aqueous $\\ce{NH3}$ |
| :--- | :--- | :--- | :--- |
| **Aluminium** | $\\ce{Al^{3+}}$ | **White precipitate**, soluble in excess giving a **colourless solution** | **White precipitate**, **insoluble** in excess |
| **Zinc** | $\\ce{Zn^{2+}}$ | **White precipitate**, soluble in excess giving a **colourless solution** | **White precipitate**, **soluble in excess** giving a **colourless solution** |
| **Calcium** | $\\ce{Ca^{2+}}$ | **White precipitate**, **insoluble** in excess | **No precipitate** (or very slight faint white) |
| **Chromium(III)** | $\\ce{Cr^{3+}}$ | **Green precipitate**, soluble in excess giving a green solution | **Grey-green precipitate**, **insoluble** in excess |
| **Copper(II)** | $\\ce{Cu^{2+}}$ | **Light blue precipitate**, **insoluble** in excess | **Light blue precipitate**, soluble in excess giving a **dark royal-blue solution** |
| **Iron(II)** | $\\ce{Fe^{2+}}$ | **Green precipitate**, **insoluble** in excess; turns **brown at surface** on standing | **Green precipitate**, **insoluble** in excess; turns **brown at surface** on standing |
| **Iron(III)** | $\\ce{Fe^{3+}}$ | **Red-brown precipitate**, **insoluble** in excess | **Red-brown precipitate**, **insoluble** in excess |
| **Ammonium** | $\\ce{NH4+}$ | **No precipitate**; on warming, **ammonia gas ($\\ce{NH3}$)** is produced (turns damp red litmus blue) | *(Not applicable)* |

> [!IMPORTANT]
> **How to Distinguish $\\ce{Al^{3+}}$ from $\\ce{Zn^{2+}}$ (Crucial Exam Rule):**
> Both $\\ce{Al^{3+}}$ and $\\ce{Zn^{2+}}$ form a white precipitate that dissolves in excess $\\ce{NaOH}$ to give a colourless solution.
> **To distinguish them, add excess aqueous ammonia ($\\ce{NH3}$):**
> - The precipitate of $\\ce{Al(OH)3}$ is **insoluble** in excess $\\ce{NH3}$.
> - The precipitate of $\\ce{Zn(OH)2}$ **dissolves** in excess $\\ce{NH3}$ to form a colourless solution ($[\\ce{Zn(NH3)4}]^{2+}$).

---

### 2. Flame Tests for Metal Cations

Flame tests identify metal cations based on characteristic atomic emission spectra:
- **Procedure:** Dip a clean nichrome or platinum wire into concentrated hydrochloric acid, heat in a roaring blue Bunsen flame until no colour is imparted, dip into the solid sample, and hold in the edge of the blue flame.

| Metal Cation | Formula | Flame Colour (Cambridge Standard) |
| :--- | :---: | :--- |
| **Lithium** | $\\ce{Li+}$ | **Red** |
| **Sodium** | $\\ce{Na+}$ | **Yellow** |
| **Potassium** | $\\ce{K+}$ | **Lilac** |
| **Calcium** | $\\ce{Ca^{2+}}$ | **Orange-red** |
| **Copper(II)** | $\\ce{Cu^{2+}}$ | **Blue-green** |
| **Barium** | $\\ce{Ba^{2+}}$ | **Light green / Apple-green** |

---

### 3. Qualitative Analysis of Anions (Negative Ions)

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px" role="img" aria-labelledby="igcse-t12-qualitative-anion-gas-tests-title" data-diagram="igcse-t12-qualitative-anion-gas-tests">
  <title id="igcse-t12-qualitative-anion-gas-tests-title">QUALITATIVE ANALYSIS TESTS FOR ANIONS AND GASES</title>
  <text x="400" y="34" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#1f2937" letter-spacing="0.8">IDENTIFICATION OF ANIONS AND GASES (CAMBRIDGE 0620)</text>

  <!-- LEFT PANEL: ANION TESTS -->
  <rect x="20" y="55" width="370" height="345" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="20" y="55" width="370" height="30" rx="8" fill="#8fd3ef" stroke="#1f2937" stroke-width="2"/>
  <text x="205" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">TESTS FOR ANIONS (NEGATIVE IONS)</text>

  <!-- Halides Box -->
  <rect x="35" y="95" width="340" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="45" y="115" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">HALIDES (+ DILUTE HNO₃ + AgNO₃):</text>
  <text x="45" y="133" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CHLORIDE (Cl⁻): WHITE PPT (AgCl)</text>
  <text x="45" y="150" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#fcc68b" letter-spacing="0.8">• BROMIDE (Br⁻): CREAM PPT (AgBr)</text>
  <text x="45" y="165" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• IODIDE (I⁻): YELLOW PPT (AgI)</text>

  <!-- Sulfate & Sulfite Box -->
  <rect x="35" y="180" width="340" height="65" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="45" y="200" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SULFUR ANIONS:</text>
  <text x="45" y="218" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• SULFATE (SO₄²⁻): WHITE BaSO₄ PPT</text>
  <text x="45" y="236" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">• SULFITE (SO₃²⁻): + ACID + WARM -&gt; SO₂ GAS</text>

  <!-- Carbonate & Nitrate Box -->
  <rect x="35" y="255" width="340" height="75" rx="6" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="45" y="275" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CARBONATE &amp; NITRATE:</text>
  <text x="45" y="293" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">• CARBONATE (CO₃²⁻): + DILUTE ACID -&gt; CO₂ GAS</text>
  <text x="45" y="310" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">• NITRATE (NO₃⁻): + NaOH + Al FOIL + WARM</text>
  <text x="45" y="324" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">  PRODUCES AMMONIA (NH₃) GAS</text>

  <rect x="35" y="340" width="340" height="50" rx="4" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="205" y="358" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">ACIDIFY WITH DILUTE HNO₃ BEFORE TESTING</text>
  <text x="205" y="376" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REMOVES CARBONATE IMPURITIES</text>

  <!-- RIGHT PANEL: GAS TESTS -->
  <rect x="410" y="55" width="370" height="345" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
  <rect x="410" y="55" width="370" height="30" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2"/>
  <text x="595" y="75" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8">IDENTIFICATION TESTS FOR GASES</text>

  <!-- 6 Gas Cards in Right Panel -->
  <rect x="425" y="95" width="340" height="42" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="440" y="112" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">AMMONIA (NH₃):</text>
  <text x="440" y="128" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TURNS DAMP RED LITMUS PAPER BLUE</text>

  <rect x="425" y="145" width="340" height="42" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="440" y="162" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CARBON DIOXIDE (CO₂):</text>
  <text x="440" y="178" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TURNS LIMEWATER MILKY / CLOUDY</text>

  <rect x="425" y="195" width="340" height="42" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="440" y="212" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">CHLORINE (Cl₂):</text>
  <text x="440" y="228" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">BLEACHES DAMP LITMUS PAPER WHITE</text>

  <rect x="425" y="245" width="340" height="42" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="440" y="262" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">HYDROGEN (H₂):</text>
  <text x="440" y="278" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LIGHTED SPLINT POPS (SQUEAKY POP)</text>

  <rect x="425" y="295" width="340" height="42" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="440" y="312" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">OXYGEN (O₂):</text>
  <text x="440" y="328" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RELIGHTS A GLOWING SPLINT</text>

  <rect x="425" y="345" width="340" height="45" rx="4" fill="#ececec" stroke="#8a939c" stroke-width="1.5" data-box="true"/>
  <text x="440" y="362" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">SULFUR DIOXIDE (SO₂):</text>
  <text x="440" y="380" text-anchor="start" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PURPLE KMnO₄ TURNS COLOURLESS</text>

  <!-- BOTTOM BANNER -->
  <rect x="20" y="415" width="760" height="47" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" data-box="true"/>
  <text x="400" y="433" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">NEVER USE HCl TO ACIDIFY BEFORE AgNO₃ TEST (Cl⁻ GIVES FALSE POSITIVE!)</text>
  <text x="400" y="451" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ALWAYS USE DAMP LITMUS PAPER FOR GAS TESTS TO DISSOLVE GAS AND DETECT ACIDITY</text>
</svg>

| Anion | Test Protocol | Observation & Product |
| :--- | :--- | :--- |
| **Carbonate** ($\\ce{CO3^{2-}}$) | Add dilute hydrochloric acid or nitric acid. | **Effervescence** (bubbling); gas produced turns **limewater milky/cloudy** ($\\ce{CO2}$). |
| **Chloride** ($\\ce{Cl-}$)| Acidify with dilute nitric acid ($\\ce{HNO3}$), then add aqueous silver nitrate ($\\ce{AgNO3}$). | **White precipitate** of silver chloride ($\\ce{AgCl}$). |
| **Bromide** ($\\ce{Br-}$)| Acidify with dilute nitric acid ($\\ce{HNO3}$), then add aqueous silver nitrate ($\\ce{AgNO3}$). | **Cream precipitate** of silver bromide ($\\ce{AgBr}$). |
| **Iodide** ($\\ce{I-}$)| Acidify with dilute nitric acid ($\\ce{HNO3}$), then add aqueous silver nitrate ($\\ce{AgNO3}$). | **Yellow precipitate** of silver iodide ($\\ce{AgI}$). |
| **Nitrate** ($\\ce{NO3-}$)| Add aqueous sodium hydroxide ($\\ce{NaOH}$), add aluminium foil, warm gently. | **Ammonia gas ($\\ce{NH3}$)** produced, which turns **damp red litmus paper blue**. |
| **Sulfate** ($\\ce{SO4^{2-}}$)| Acidify with dilute nitric acid ($\\ce{HNO3}$), then add aqueous barium nitrate ($\\ce{Ba(NO3)2}$). | **White precipitate** of barium sulfate ($\\ce{BaSO4}$). |
| **Sulfite** ($\\ce{SO3^{2-}}$)| Add dilute hydrochloric acid, warm gently, and test gas with acidified aqueous potassium manganate(VII). | **Sulfur dioxide gas ($\\ce{SO2}$)** produced; turns potassium manganate(VII) from **purple to colourless**. |

> [!WARNING]
> **Why Acidify Before Adding $\\ce{AgNO3}$ or $\\ce{Ba(NO3)2}$?**
> The acid destroys any carbonate ($\\ce{CO3^{2-}}$) or sulfite ($\\ce{SO3^{2-}}$) ions present. Carbonate ions react with $\\ce{Ag+}$ or $\\ce{Ba^{2+}}$ to form insoluble silver carbonate ($\\ce{Ag2CO3}$) or barium carbonate ($\\ce{BaCO3}$), which would give a **false-positive white precipitate**.
> **NEVER use $\\ce{HCl}$ to acidify silver nitrate!** $\\ce{HCl}$ contains chloride ions ($\\ce{Cl-}$), which react directly with $\\ce{Ag+}$ to form a white precipitate of $\\ce{AgCl}$, ruining the test.

---

### 4. Identification Tests for Gases

| Gas | Formula & Physical Appearance | Test Method | Positive Result |
| :--- | :--- | :--- | :--- |
| **Ammonia** | $\\ce{NH3}$ (colourless, pungent smell) | Hold **damp red litmus paper** in gas. | Turns **blue**. (Ammonia is the only common alkaline gas). |
| **Carbon dioxide** | $\\ce{CO2}$ (colourless, odourless) | Bubble gas through **limewater** ($\\ce{Ca(OH)2(aq)}$). | Limewater turns **cloudy / milky** (forms $\\ce{CaCO3(s)}$). |
| **Chlorine** | $\\ce{Cl2}$ (pale green-yellow, choking smell) | Hold **damp litmus paper** in gas. | Paper turns red momentarily, then is **bleached white**. |
| **Hydrogen** | $\\ce{H2}$ (colourless, odourless) | Hold a **lighted wooden splint** in mouth of tube. | Burns with a distinctive **'squeaky pop'**. |
| **Oxygen** | $\\ce{O2}$ (colourless, odourless) | Insert a **glowing wooden splint** into tube. | Splint **relights**. |
| **Sulfur dioxide** | $\\ce{SO2}$ (colourless, choking smell) | Pass gas through **acidified potassium manganate(VII)**. | Solution turns from **purple to colourless** (reduced). |`,
      checkpointQuizzes: [
        {
          id: 'quiz-12-core4-1',
          type: 'multiple_choice',
          question:
            'A colourless solution gives a white precipitate with aqueous sodium hydroxide that dissolves in excess. When tested with aqueous ammonia, it gives a white precipitate that is INSOLUBLE in excess. Which cation is present?',
          options: [
            'Aluminium (Al³⁺)',
            'Zinc (Zn²⁺)',
            'Calcium (Ca²⁺)',
            'Ammonium (NH₄⁺)',
          ],
          correctAnswer: 0,
          explanation:
            'Both Al³⁺ and Zn²⁺ dissolve in excess NaOH. However, Al³⁺ precipitate remains insoluble in excess ammonia, whereas Zn²⁺ precipitate dissolves in excess ammonia. Therefore, the cation is Al³⁺.',
          misconceptionTarget:
            'Confusing the solubility of Al³⁺ and Zn²⁺ in excess ammonia.',
        },
        {
          id: 'quiz-12-core4-2',
          type: 'multiple_choice',
          question:
            'Why must hydrochloric acid NEVER be used to acidify a test solution before adding silver nitrate to test for halide ions?',
          options: [
            'Hydrochloric acid is a strong oxidising agent that decomposes silver nitrate.',
            'Hydrochloric acid contains chloride ions that react with silver nitrate to form a false-positive white precipitate.',
            'Hydrochloric acid dissolves all silver halides into colourless solutions.',
            'Hydrochloric acid produces toxic chlorine gas with silver ions.',
          ],
          correctAnswer: 1,
          explanation:
            'Hydrochloric acid (HCl) introduces chloride ions (Cl⁻) into the mixture, which immediately precipitate with Ag⁺ to form white silver chloride (AgCl), giving a false-positive result regardless of whether halides were originally in the sample.',
          misconceptionTarget:
            'Believing any acid can be used interchangeably for acidification.',
        },
        {
          id: 'quiz-12-core4-3',
          type: 'multiple_choice',
          question:
            'A gas bleaches damp blue litmus paper white. What is the identity of the gas?',
          options: [
            'Ammonia (NH₃)',
            'Carbon dioxide (CO₂)',
            'Chlorine (Cl₂)',
            'Sulfur dioxide (SO₂)',
          ],
          correctAnswer: 2,
          explanation:
            'Chlorine gas (Cl₂) dissolves in moisture on damp litmus paper to form hypochlorous acid (HClO), an oxidising bleaching agent that rapidly bleaches the dye white.',
          misconceptionTarget:
            'Confusing the alkaline effect of ammonia (turns blue) with the bleaching effect of chlorine.',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-12-cambridge-exam-practice',
      tags: [
        'cambridge-paper-2',
        'cambridge-paper-4',
        'cambridge-paper-6',
        'experimental-design',
        'qualitative-analysis-problems',
      ],
      title: '12.6 Cambridge Exam Practice: Qualitative Analysis & Experimental Design',
      summary:
        'Curated Cambridge Paper 2 multiple-choice questions and Paper 4/Paper 6 theory and practical design questions with mark schemes, examiner tips, and systematic deduction strategies.',
      content: `### Cambridge Exam Practice (Paper 2, Paper 4 & Paper 6)

---

#### Question 1 (Paper 2 — Multiple Choice)
An aqueous solution of salt **X** is tested in the laboratory:
1. Adding aqueous sodium hydroxide gives a green precipitate that is insoluble in excess.
2. Acidifying with dilute nitric acid followed by aqueous barium nitrate gives a white precipitate.

What is the identity of salt **X**?
- **Options:**
  - A: Copper(II) sulfate
  - B: Iron(II) chloride
  - C: Iron(II) sulfate
  - D: Iron(III) sulfate
- **Answer:** **C**
- **Explanation:**
  - Test 1: Green precipitate insoluble in excess $\\ce{NaOH}$ confirms the presence of iron(II) ions ($\\ce{Fe^{2+}}$).
  - Test 2: White precipitate with acidified barium nitrate confirms sulfate ions ($\\ce{SO4^{2-}}$).
  - Therefore, salt **X** is iron(II) sulfate ($\\ce{FeSO4}$).

---

#### Question 2 (Paper 2 — Multiple Choice)
A student calculates the $R_f$ value of a food dye. The solvent front travelled $7.5\\text{ cm}$ from the pencil line. The dye spot travelled $4.5\\text{ cm}$.
What is the $R_f$ value?
- **Options:**
  - A: $0.60$
  - B: $1.67$
  - C: $3.0\\text{ cm}$
  - D: $0.60\\text{ cm}$
- **Answer:** **A**
- **Explanation:**
  $$R_f = \\frac{\\text{distance by dye}}{\\text{distance by solvent front}} = \\frac{4.5\\text{ cm}}{7.5\\text{ cm}} = 0.60$$
  $R_f$ is a dimensionless ratio and has no units (eliminating D).

---

#### Question 3 (Paper 4 — 7 Marks: Qualitative Analysis Deduction)
Solid **W** is a hydrated crystalline salt containing one cation and one anion.
A student carries out tests on solid **W**:

**(a)** A flame test is performed on solid **W**. The flame colour observed is lilac.
State the identity of the cation in solid **W**. **[1]**
- **Mark Scheme:** Potassium ($\\ce{K+}$) [1].

**(b)** An aqueous solution of solid **W** is divided into three test-tubes:
1. To the first portion, dilute nitric acid followed by aqueous silver nitrate is added. A bright yellow precipitate forms.
   - Name the anion present in solid **W**. **[1]**
   - **Mark Scheme:** Iodide ($\\ce{I-}$) [1].
   - Write the ionic equation, including state symbols, for the formation of this precipitate. **[2]**
   - **Mark Scheme:**
     $$\\ce{Ag+(aq) + I-(aq) -> AgI(s)}$$
     - Correct formulae and balanced equation [1].
     - Correct state symbols $(aq)$ and $(s)$ [1].
2. State why dilute nitric acid was added before aqueous silver nitrate. **[1]**
   - **Mark Scheme:** To react with and remove any carbonate ($\\ce{CO3^{2-}}$) or sulfite ($\\ce{SO3^{2-}}$) impurities that would form a false precipitate [1].
3. Deduce the chemical formula of solid **W**. **[1]**
   - **Mark Scheme:** $\\ce{KI}$ [1].

**(c)** Solid **W** is heated gently in a dry boiling tube. Droplets of colourless liquid condense on the cool neck of the tube.
Describe a chemical test to confirm that this liquid is water. **[1]**
- **Mark Scheme:**
  - Add anhydrous copper(II) sulfate; colour changes from white to blue [1].
  - *(OR: Add anhydrous cobalt(II) chloride; colour changes from blue to pink [1]).*

---

#### Question 4 (Paper 6 Question 4 — 6 Marks: Experimental Investigation Planning)
**Prompt:** A student is supplied with two brands of commercial vinegar, Brand **A** and Brand **B**.
Both brands contain ethanoic acid dissolved in water.
**Plan an investigation** to determine which brand of vinegar has the higher concentration of ethanoic acid.
You are provided with:
- Brand **A** vinegar and Brand **B** vinegar
- Standard sodium hydroxide solution of known concentration ($0.100\\text{ mol/dm}^3$)
- Standard laboratory apparatus and acid-base indicators.

Your plan should include:
- The apparatus required
- The measurements you would make
- How you would ensure the results are reliable and fair
- How you would use your results to determine which vinegar is more concentrated.

**Mark Scheme (6 Marks):**
1. **Apparatus & Setup [1]:**
   - Measure $25.0\\text{ cm}^3$ of vinegar **A** using a **volumetric pipette** and place into a conical flask.
2. **Indicator [1]:**
   - Add $2$–$3$ drops of thymolphthalein indicator (or phenolphthalein) to the conical flask.
3. **Titration Procedure [1]:**
   - Fill a burette with standard sodium hydroxide solution ($0.100\\text{ mol/dm}^3$), recording initial reading.
   - Titrate until the indicator permanently changes colour (colourless to faint blue/pink), recording final reading.
4. **Reliability [1]:**
   - Repeat the titration until two **concordant titres** (within $0.10\\text{ cm}^3$) are obtained and calculate the mean titre.
5. **Fair Comparison [1]:**
   - Repeat the exact same procedure with vinegar **B**, using the identical volume ($25.0\\text{ cm}^3$) of vinegar and the same concentration of sodium hydroxide.
6. **Conclusion [1]:**
   - Compare the average titres: the vinegar brand requiring the **larger volume of sodium hydroxide** has the higher concentration of ethanoic acid.

---

#### Question 5 (Paper 4 — 6 Marks: Titration Calculations)
A student titrates $25.0\\text{ cm}^3$ of dilute sulfuric acid ($\\ce{H2SO4}$) with $0.200\\text{ mol/dm}^3$ aqueous potassium hydroxide ($\\ce{KOH}$).
$$\\ce{H2SO4 + 2 KOH -> K2SO4 + 2 H2O}$$
The mean concordant titre of $\\ce{KOH}$ is $18.50\\text{ cm}^3$.

**(a)** Calculate the number of moles of $\\ce{KOH}$ used in the titration. **[2]**
- **Mark Scheme:**
  $$n(\\ce{KOH}) = c \\times V = 0.200 \\times \\frac{18.50}{1000} = 3.70 \\times 10^{-3}\\text{ mol} \\quad \\text{[2]}$$
  *(1 mark for volume conversion to $\\text{dm}^3$, 1 mark for correct answer).*

**(b)** Determine the number of moles of $\\ce{H2SO4}$ that reacted. **[1]**
- **Mark Scheme:**
  $$n(\\ce{H2SO4}) = \\frac{n(\\ce{KOH})}{2} = \\frac{3.70 \\times 10^{-3}}{2} = 1.85 \\times 10^{-3}\\text{ mol} \\quad \\text{[1]}$$

**(c)** Calculate the concentration of the sulfuric acid in:
1. $\\text{mol/dm}^3$ **[2]**
   - **Mark Scheme:**
     $$c(\\ce{H2SO4}) = \\frac{n}{V} = \\frac{1.85 \\times 10^{-3}}{25.0 / 1000} = 0.0740\\text{ mol/dm}^3 \\quad \\text{[2]}$$
2. $\\text{g/dm}^3$ ($M_r\\text{ of } \\ce{H2SO4} = 98.0$) **[1]**
   - **Mark Scheme:**
     $$\\text{Concentration} = 0.0740 \\times 98.0 = 7.25\\text{ g/dm}^3 \\quad \\text{[1]}$$`,
      checkpointQuizzes: [
        {
          id: 'quiz-12-exam-1',
          type: 'multiple_choice',
          question:
            'In a Cambridge Paper 6 experimental design plan, which step is essential to ensure the volume measurement in a titration is reliable?',
          options: [
            'Using universal indicator instead of single indicators.',
            'Repeating the titration until concordant titres (within ±0.10 cm³) are obtained.',
            'Boiling the alkali before running the titration.',
            'Using a measuring cylinder instead of a pipette to save time.',
          ],
          correctAnswer: 1,
          explanation:
            'Reliability in volumetric analysis is demonstrated by performing repeat trials until concordant results (within 0.10 cm³ of each other) are achieved, discarding any anomalous or rough trial.',
          misconceptionTarget:
            'Thinking a single titration trial is sufficient for reliable scientific data.',
        },
        {
          id: 'quiz-12-exam-2',
          type: 'multiple_choice',
          question:
            'A sample solution forms a yellow precipitate upon addition of dilute nitric acid and aqueous silver nitrate. Which anion is present in the solution?',
          options: [
            'Chloride (Cl⁻)',
            'Bromide (Br⁻)',
            'Iodide (I⁻)',
            'Carbonate (CO₃²⁻)',
          ],
          correctAnswer: 2,
          explanation:
            'Silver iodide (AgI) is a bright yellow precipitate. (Silver chloride is white; silver bromide is cream).',
          misconceptionTarget:
            'Confusing cream (AgBr) and yellow (AgI) precipitates.',
        },
        {
          id: 'quiz-12-exam-3',
          type: 'multiple_choice',
          question:
            'Why must a platinum or nichrome wire used in flame tests be cleaned in concentrated hydrochloric acid before testing a new sample?',
          options: [
            'To sharpen the tip of the wire so it holds more solid.',
            'To remove any residual metal ions that would impart their own colours and mask the sample flame colour.',
            'To coat the wire with chloride ions that act as a catalyst.',
            'To cool the wire down to room temperature.',
          ],
          correctAnswer: 1,
          explanation:
            'Any residual metal ions (especially sodium, which gives an intense persistent yellow flame) will contaminate the flame and mask the true flame emission colour of the sample being tested.',
          misconceptionTarget:
            'Believing acid cleaning is to cool or sharpen the metal wire.',
        },
      ],
    },
  ],
};
