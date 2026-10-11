/**
 * igcseTopic05.ts
 * Topic 5: Chemical Energetics
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_5: MaterialItem = {
  id: 205,
  topic_number: 5,
  title: 'Chemical Energetics',
  slug: 'chemical-energetics',
  category: 'Physical Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 30,
  summary:
    'Comprehensive study of exothermic and endothermic reactions, reaction pathway diagrams, activation energy (Ea), bond breaking and forming (BENDO & MEXO), bond energy calculations, calorimetry experiments, and everyday thermal applications.',
  allTags: [
    'igcse-05-exo-endo-basics',
    'igcse-05-reaction-pathways',
    'igcse-05-bond-breaking-forming',
    'igcse-05-bond-energy-calculations',
    'igcse-05-calorimetry-experiments',
    'igcse-05-everyday-thermal-apps',
    'igcse-05-catalysts-energetics',
    'igcse-05-exam-practice',
    'chemical-energetics',
    'exothermic-reactions',
    'endothermic-reactions',
    'enthalpy-change',
    'delta-h',
    'activation-energy',
    'reaction-pathway-diagrams',
    'energy-level-diagrams',
    'bond-breaking',
    'bond-forming',
    'bendo-mexo',
    'bond-energies',
    'combustion-methane',
    'calorimetry',
    'polystyrene-cup',
    'heat-loss-insulation',
    'hand-warmers',
    'cold-packs',
    'catalyst-lowers-ea',
  ],
  prerequisites: [
    {
      tag: 'igcse-05-exo-endo-basics',
      tags: [
        'exothermic-reactions',
        'endothermic-reactions',
        'enthalpy-change',
        'delta-h',
        'system-and-surroundings',
      ],
      title: '1. Fundamentals of Exothermic & Endothermic Reactions',
      summary:
        'Defining exothermic and endothermic processes, distinguishing the chemical system from the surroundings, understanding temperature changes, and identifying common everyday examples.',
      content: `### 🌡️ System vs Surroundings in Chemical Energetics

Every chemical reaction takes place between chemical substances (the **system**) in an environment (the **surroundings**, including the solvent, container, thermometer, and surrounding air):
1. **Chemical System**: The reactant and product molecules, ions, and chemical bonds.
2. **Surroundings**: Everything outside the reacting particles (the water solvent, the beaker, the air, and the thermometer bulb).
3. **Enthalpy Change ($\\Delta H$)**: The difference between the heat energy of the products and the heat energy of the reactants measured at constant pressure:
   $$\\mathbf{\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}}$$

---

### 🔥 Exothermic Reactions

An **exothermic reaction** is a chemical process that **transfers thermal energy to the surroundings**:
- Chemical potential energy stored in chemical bonds is converted into thermal (heat) energy.
- **Temperature change**: The temperature of the surroundings **increases** (thermometer reading rises, $\\Delta T > 0$).
- **Sign of Enthalpy Change**: Because the system loses thermal energy to the surroundings, $\\mathbf{\\Delta H}$ **is always negative** ($\\Delta H < 0$, e.g. $-890\\text{ kJ/mol}$).
- **Common Examples**:
  - **Combustion** of fuels (e.g. burning methane or petrol: $\\ce{CH4 + 2O2 -> CO2 + 2H2O}$).
  - **Neutralisation** between acids and alkalis (e.g. $\\ce{HCl + NaOH -> NaCl + H2O}$).
  - **Rusting** of iron and oxidation of metals.
  - **Respiration** in biological cells.
  - Commercial **hand warmers** and self-heating food packaging.

---

### ❄️ Endothermic Reactions

An **endothermic reaction** is a chemical process that **takes in (absorbs) thermal energy from the surroundings**:
- Thermal energy from the surroundings is converted into chemical potential energy stored in the products.
- **Temperature change**: The temperature of the surroundings **decreases** (thermometer reading falls, $\\Delta T < 0$).
- **Sign of Enthalpy Change**: Because the system gains thermal energy from the surroundings, $\\mathbf{\\Delta H}$ **is always positive** ($\\Delta H > 0$, e.g. $+178\\text{ kJ/mol}$).
- **Common Examples**:
  - **Thermal decomposition** of metal carbonates (e.g. limestone in a lime kiln: $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$).
  - **Photosynthesis** in green plants ($6\\ce{CO2} + 6\\ce{H2O} \\to \\ce{C6H12O6} + 6\\ce{O2}$).
  - Dissolving certain ammonium salts in water (e.g. $\\ce{NH4NO3(s) -> NH4+(aq) + NO3-(aq)}$).
  - Instant **sports cold packs** for soothing muscle sprains.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-exo-endo-system-surroundings-title igcse-t05-exo-endo-system-surroundings-desc" data-diagram="igcse-t05-exo-endo-system-surroundings" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-exo-endo-system-surroundings-title">Heat exchange in exothermic and endothermic reactions</title>
  <desc id="igcse-t05-exo-endo-system-surroundings-desc">Diagram comparing thermal energy transfer to the surroundings in an exothermic reaction against thermal energy absorption in an endothermic reaction.</desc>

  <defs>
    <marker id="igcse-t05-exo-endo-system-surroundings-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left Container: Exothermic Reaction -->
  <rect x="24" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">EXOTHERMIC (HEAT OUT)</text>

  <!-- Left Beaker with liquid -->
  <path d="M 128 110 L 128 250 Q 128 268 146 268 L 262 268 Q 280 268 280 250 L 280 110" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="130" y="150" width="148" height="116" fill="#fde58a" stroke="none" />
  <line x1="130" y1="150" x2="278" y2="150" stroke="#1f2937" stroke-width="1.5" />
  <text x="204" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTION SYSTEM</text>

  <!-- Heat arrows pointing OUT to surroundings -->
  <path d="M 116 160 L 64 140" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <path d="M 116 210 L 64 210" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <path d="M 292 160 L 344 140" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <path d="M 292 210 L 344 210" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <text x="60" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HEAT OUT</text>
  <text x="348" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HEAT OUT</text>

  <!-- Left Bottom Tag: Key Facts -->
  <g data-role="text-box" data-box="44 280 320 64">
    <rect x="44" y="280" width="320" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="303" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">TEMPERATURE RISES (DELTA T > 0)</text>
    <text x="204" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">DELTA H IS NEGATIVE (-)</text>
  </g>

  <!-- Right Container: Endothermic Reaction -->
  <rect x="416" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">ENDOTHERMIC (HEAT IN)</text>

  <!-- Right Beaker with liquid -->
  <path d="M 520 110 L 520 250 Q 520 268 538 268 L 654 268 Q 672 268 672 250 L 672 110" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="522" y="150" width="148" height="116" fill="#d6f0fb" stroke="none" />
  <line x1="522" y1="150" x2="670" y2="150" stroke="#1f2937" stroke-width="1.5" />
  <text x="596" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTION SYSTEM</text>

  <!-- Heat arrows pointing IN from surroundings -->
  <path d="M 456 140 L 508 160" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <path d="M 456 210 L 508 210" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <path d="M 736 140 L 684 160" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <path d="M 736 210 L 684 210" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-exo-endo-system-surroundings-arrow)" />
  <text x="456" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">HEAT IN</text>
  <text x="736" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">HEAT IN</text>

  <!-- Right Bottom Tag: Key Facts -->
  <g data-role="text-box" data-box="436 280 320 64">
    <rect x="436" y="280" width="320" height="64" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="303" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">TEMPERATURE FALLS (DELTA T < 0)</text>
    <text x="596" y="325" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">DELTA H IS POSITIVE (+)</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-basics-q1',
          type: 'multiple_choice',
          question:
            'A student adds solid sodium hydrogencarbonate to citric acid solution. The temperature of the mixture decreases from 21 °C to 14 °C. Which statement describes this reaction?',
          options: [
            'Endothermic with a positive enthalpy change (+ΔH)',
            'Exothermic with a negative enthalpy change (-ΔH)',
            'Exothermic with a positive enthalpy change (+ΔH)',
            'Endothermic with a negative enthalpy change (-ΔH)',
          ],
          correctAnswer: 0,
          explanation:
            'A decrease in temperature indicates that the reaction absorbs thermal energy from the surroundings, which is the definition of an endothermic process. In endothermic reactions, the products have more enthalpy than the reactants, so ΔH is positive (+).',
          misconceptionTarget: 'Thinking falling temperature corresponds to an exothermic process or negative ΔH',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-05-reaction-pathways',
      tags: [
        'reaction-pathway-diagrams',
        'energy-level-diagrams',
        'activation-energy',
        'delta-h',
      ],
      title: '2. Reaction Pathway Diagrams & Activation Energy (Ea)',
      summary:
        'Interpreting reaction pathway diagrams for exothermic and endothermic reactions, identifying activation energy (Ea) arrows, and correctly labelling enthalpy changes (ΔH).',
      content: `### 📈 What is a Reaction Pathway Diagram?

A **reaction pathway diagram** (also known as an **energy profile diagram**) shows how the energy of the reacting substances changes from start to finish as bonds are broken and new bonds are formed:
- **Vertical Axis**: Enthalpy / Energy ($H$, usually in $\\text{kJ/mol}$).
- **Horizontal Axis**: Progress of reaction (reaction coordinate from reactants to products).
- **The Peak**: Represents the high-energy intermediate transition state where old chemical bonds are partially broken before new ones form.

---

### ⚡ Activation Energy ($E_a$)

**Activation energy ($E_a$)** is the **minimum energy that colliding particles must possess in order to react successfully**:
- If colliding particles have less kinetic energy than $E_a$, they merely bounce off each other without reacting.
- **Arrow Rule in Cambridge Exams**:
  - The activation energy arrow **ALWAYS points UPWARDS** from the **reactants energy level** to the **highest peak** of the curve.
  - An arrow starting from the products or from the bottom axis is awarded $0$ marks by Cambridge examiners!

---

### 🔥 Reaction Pathway: Exothermic Reactions
- **Reactants are at a HIGHER energy level than products**.
- Because energy is lost to the surroundings, the arrow for **$\\Delta H$ points DOWNWARDS** from the reactants line to the products line.
- $\\Delta H$ has a **negative sign** ($-$).

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-exothermic-energy-profile-title igcse-t05-exothermic-energy-profile-desc" data-diagram="igcse-t05-exothermic-energy-profile" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-exothermic-energy-profile-title">Exothermic reaction pathway diagram</title>
  <desc id="igcse-t05-exothermic-energy-profile-desc">Reaction pathway profile showing reactants at higher energy than products, upward activation energy arrow, and downward negative delta H arrow.</desc>

  <defs>
    <marker id="igcse-t05-exothermic-energy-profile-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="100" y1="340" x2="100" y2="40" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t05-exothermic-energy-profile-arrow)" />
  <line x1="100" y1="340" x2="720" y2="340" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t05-exothermic-energy-profile-arrow)" />
  <text x="90" y="30" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ENERGY</text>
  <text x="730" y="360" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PROGRESS OF REACTION</text>

  <!-- Reactants Platform (y=180, x=130..250) -->
  <line x1="130" y1="180" x2="250" y2="180" stroke="#1f2937" stroke-width="3" />
  <text x="190" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTANTS</text>

  <!-- Curve: from (250,180) rises to peak (380,80) and descends to (500,280) -->
  <path d="M 250 180 C 310 180 340 80 380 80 C 420 80 450 280 500 280" fill="none" stroke="#2f7fc1" stroke-width="3" />

  <!-- Products Platform (y=280, x=500..640) -->
  <line x1="500" y1="280" x2="640" y2="280" stroke="#1f2937" stroke-width="3" />
  <text x="570" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PRODUCTS</text>

  <!-- Dashed guideline extending reactants to the right -->
  <line x1="250" y1="180" x2="560" y2="180" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Ea Arrow (UPWARD from y=180 to y=80 at x=340) -->
  <line x1="340" y1="180" x2="340" y2="82" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-exothermic-energy-profile-arrow)" />
  <text x="330" y="135" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">Ea (UPWARD)</text>

  <!-- Delta H Arrow (DOWNWARD from y=180 to y=278 at x=530) -->
  <line x1="530" y1="180" x2="530" y2="278" stroke="#3f8f46" stroke-width="2" marker-end="url(#igcse-t05-exothermic-energy-profile-arrow)" />
  <text x="545" y="235" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#3f8f46">DELTA H < 0</text>
  <text x="545" y="255" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(HEAT RELEASED)</text>

  <!-- Cambridge Tip Box -->
  <g data-role="text-box" data-box="110 20 560 40">
    <rect x="110" y="20" width="560" height="40" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="390" y="45" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">EXOTHERMIC: PRODUCTS ARE LOWER IN ENERGY THAN REACTANTS</text>
  </g>
</svg>

---

### ❄️ Reaction Pathway: Endothermic Reactions
- **Reactants are at a LOWER energy level than products**.
- Because energy is absorbed from the surroundings, the arrow for **$\\Delta H$ points UPWARDS** from the reactants line to the products line.
- $\\Delta H$ has a **positive sign** ($+$).

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-endothermic-energy-profile-title igcse-t05-endothermic-energy-profile-desc" data-diagram="igcse-t05-endothermic-energy-profile" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-endothermic-energy-profile-title">Endothermic reaction pathway diagram</title>
  <desc id="igcse-t05-endothermic-energy-profile-desc">Reaction pathway profile showing reactants at lower energy than products, large upward activation energy arrow, and upward positive delta H arrow.</desc>

  <defs>
    <marker id="igcse-t05-endothermic-energy-profile-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="100" y1="340" x2="100" y2="40" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t05-endothermic-energy-profile-arrow)" />
  <line x1="100" y1="340" x2="720" y2="340" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t05-endothermic-energy-profile-arrow)" />
  <text x="90" y="30" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ENERGY</text>
  <text x="730" y="360" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PROGRESS OF REACTION</text>

  <!-- Reactants Platform (y=270, x=130..250) -->
  <line x1="130" y1="270" x2="250" y2="270" stroke="#1f2937" stroke-width="3" />
  <text x="190" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTANTS</text>

  <!-- Curve: from (250,270) rises to peak (380,80) and descends to (500,160) -->
  <path d="M 250 270 C 310 270 340 80 380 80 C 420 80 450 160 500 160" fill="none" stroke="#2f7fc1" stroke-width="3" />

  <!-- Products Platform (y=160, x=500..640) -->
  <line x1="500" y1="160" x2="640" y2="160" stroke="#1f2937" stroke-width="3" />
  <text x="570" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PRODUCTS</text>

  <!-- Dashed guideline extending reactants to the right -->
  <line x1="250" y1="270" x2="560" y2="270" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Ea Arrow (UPWARD from y=270 to y=82 at x=340) -->
  <line x1="340" y1="270" x2="340" y2="82" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-endothermic-energy-profile-arrow)" />
  <text x="330" y="180" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">Ea (UPWARD)</text>

  <!-- Delta H Arrow (UPWARD from y=270 to y=162 at x=530) -->
  <line x1="530" y1="270" x2="530" y2="162" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-endothermic-energy-profile-arrow)" />
  <text x="545" y="210" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">DELTA H > 0</text>
  <text x="545" y="230" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(HEAT ABSORBED)</text>

  <!-- Cambridge Tip Box -->
  <g data-role="text-box" data-box="110 20 560 40">
    <rect x="110" y="20" width="560" height="40" rx="6" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
    <text x="390" y="45" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ENDOTHERMIC: PRODUCTS ARE HIGHER IN ENERGY THAN REACTANTS</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-profiles-q1',
          type: 'multiple_choice',
          question:
            'In a reaction pathway diagram for an exothermic reaction, how should the activation energy (Ea) and enthalpy change (ΔH) arrows be drawn?',
          options: [
            'Ea points upward from reactants to peak | ΔH points downward from reactants to products',
            'Ea points downward from peak to reactants | ΔH points upward from reactants to products',
            'Ea points upward from products to peak | ΔH points downward from reactants to products',
            'Ea points upward from reactants to peak | ΔH points upward from products to reactants',
          ],
          correctAnswer: 0,
          explanation:
            'Activation energy is always measured upwards from the reactants level to the highest point of the curve. In an exothermic reaction, products lie below reactants, so the ΔH arrow points downwards from reactants to products.',
          misconceptionTarget: 'Drawing the activation energy arrow starting from the bottom axis or pointing downward',
        },
      ],
    },
    {
      tag: 'igcse-05-bond-breaking-forming',
      tags: [
        'bond-breaking',
        'bond-forming',
        'bendo-mexo',
        'covalent-bond-energy',
      ],
      title: '3. Bond Breaking & Bond Forming Energetics (BENDO & MEXO)',
      summary:
        'Explaining the molecular origin of heat changes: why bond breaking is an endothermic process, why bond making is an exothermic process, and memorising BENDO and MEXO.',
      content: `### 🔬 The Subatomic Basis of Chemical Energy

Chemical reactions involve breaking bonds in the reactants and making new bonds to form the products. No matter what chemical reaction takes place, these two rules always apply:

> [!IMPORTANT]
> ### 🏆 The Golden Cambridge Rule: BENDO & MEXO
> - **BENDO**: **B**ond breaking is **ENDO**thermic (energy is **taken in** to separate bonded atoms).
> - **MEXO**: **M**aking bonds is **EXO**thermic (energy is **released** when atoms join together).

---

### 1. Why is Bond Breaking Endothermic?
In any covalent or ionic bond, electrostatic attractions hold atoms or ions together:
- To pull these atoms apart against their mutual electrostatic attraction, **work must be done**.
- Energy must be **absorbed from the surroundings** to break the bond.
- Therefore, breaking chemical bonds is **always endothermic** ($\\Delta H > 0$).

---

### 2. Why is Bond Forming Exothermic?
When isolated gaseous atoms come together and form a chemical bond:
- The positively charged nuclei attract the shared electrons, dropping the system into a **lower, more stable energy state**.
- The excess energy is **released to the surroundings** as heat and light.
- Therefore, making chemical bonds is **always exothermic** ($\\Delta H < 0$).

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-bond-breaking-forming-mexo-bendo-title igcse-t05-bond-breaking-forming-mexo-bendo-desc" data-diagram="igcse-t05-bond-breaking-forming-mexo-bendo" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-bond-breaking-forming-mexo-bendo-title">Bond breaking vs bond forming energetics</title>
  <desc id="igcse-t05-bond-breaking-forming-mexo-bendo-desc">Diagram showing that breaking bonds absorbs energy (BENDO) while forming bonds releases energy (MEXO).</desc>

  <defs>
    <marker id="igcse-t05-bond-breaking-forming-mexo-bendo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left Container: BENDO (Bond Breaking) -->
  <rect x="24" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">BENDO: BOND BREAKING</text>

  <!-- Bonded Molecule -->
  <circle cx="120" cy="140" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="150" cy="140" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="135" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">BONDED MOLECULE</text>

  <!-- Energy Input Arrow -->
  <path d="M 180 140 L 226 140" fill="none" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-bond-breaking-forming-mexo-bendo-arrow)" />
  <text x="203" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">+ ENERGY</text>

  <!-- Separated Atoms -->
  <circle cx="260" cy="140" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="320" cy="140" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <text x="290" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SEPARATED ATOMS</text>

  <!-- Left Bottom Tag -->
  <g data-role="text-box" data-box="44 230 320 90">
    <rect x="44" y="230" width="320" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="256" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">ENDOTHERMIC PROCESS</text>
    <text x="204" y="280" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ENERGY IS ABSORBED</text>
    <text x="204" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">TO OVERCOME ATTRACTION</text>
  </g>

  <!-- Right Card: MEXO (Bond Forming) -->
  <rect x="416" y="24" width="360" height="312" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">MEXO: BOND FORMING</text>

  <!-- Separated Atoms -->
  <circle cx="480" cy="140" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="540" cy="140" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="510" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SEPARATED ATOMS</text>

  <!-- Joining Arrow -->
  <path d="M 570 140 L 616 140" fill="none" stroke="#d64545" stroke-width="2" marker-end="url(#igcse-t05-bond-breaking-forming-mexo-bendo-arrow)" />
  <text x="593" y="125" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">- ENERGY</text>

  <!-- Bonded Molecule -->
  <circle cx="650" cy="140" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="680" cy="140" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <text x="665" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">BONDED MOLECULE</text>

  <!-- Right Bottom Tag -->
  <g data-role="text-box" data-box="436 230 320 90">
    <rect x="436" y="230" width="320" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="256" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">EXOTHERMIC PROCESS</text>
    <text x="596" y="280" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ENERGY IS RELEASED</text>
    <text x="596" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">AS STABILITY INCREASES</text>
  </g>
</svg>

---

### 📝 Why a Reaction as a Whole is Exothermic or Endothermic

Cambridge Paper 4 regularly asks students to explain why a named reaction is exothermic or endothermic in terms of bond energies:
- **Exothermic Overall**:
  $$\\mathbf{\\text{Energy released forming new bonds} > \\text{Energy absorbed breaking existing bonds}}$$
- **Endothermic Overall**:
  $$\\mathbf{\\text{Energy absorbed breaking existing bonds} > \\text{Energy released forming new bonds}}$$
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-bendo-q1',
          type: 'multiple_choice',
          question:
            'Which statement correctly describes bond breaking and bond making in a chemical reaction?',
          options: [
            'Bond breaking is endothermic and bond making is exothermic',
            'Bond breaking is exothermic and bond making is endothermic',
            'Both bond breaking and bond making are exothermic',
            'Both bond breaking and bond making are endothermic',
          ],
          correctAnswer: 0,
          explanation:
            'Remember BENDO and MEXO: Breaking chemical bonds always takes in energy (endothermic), whereas making chemical bonds always releases energy (exothermic).',
          misconceptionTarget: 'Believing that energy is released when chemical bonds are broken',
        },
      ],
    },
    {
      tag: 'igcse-05-bond-energy-calculations',
      tags: [
        'bond-energies',
        'bond-energy-calculations',
        'combustion-methane',
        'enthalpy-calculation',
      ],
      title: '4. Bond Energy Calculations & Enthalpy Change',
      summary:
        'Applying the master formula ΔH = Σ(bonds broken) - Σ(bonds formed) to calculate numerical enthalpy changes from bond energy tables.',
      content: `### 📊 What is a Bond Energy?

A **bond energy** (bond dissociation energy) is the amount of energy required to break $1\\text{ mole}$ of a particular covalent bond in gaseous molecules, measured in $\\text{kJ/mol}$.
- Bond energy values are always given as **positive values** because they define bond breaking (e.g. $\\ce{C-H} = 413\\text{ kJ/mol}$, $\\ce{O=O} = 498\\text{ kJ/mol}$).

---

### 🧮 The Master Calculation Formula

$$\\mathbf{\\Delta H = \\Sigma (\\text{Bonds Broken}) - \\Sigma (\\text{Bonds Formed})}$$
$$\\mathbf{\\Delta H = \\text{Energy IN} - \\text{Energy OUT}}$$

#### The 4-Step Method:
1. **Step 1 (Display Formulae)**: Draw displayed structural formulae of all reactants and products so that every single and double bond is clearly visible.
2. **Step 2 (Energy In)**: Count all bonds broken on the reactant side and multiply by their bond energies. Sum them up ($+\\text{kJ}$).
3. **Step 3 (Energy Out)**: Count all bonds formed on the product side and multiply by their bond energies. Sum them up ($-\\text{kJ}$).
4. **Step 4 (Difference)**: Subtract the energy of bonds formed from the energy of bonds broken:
   $$\\Delta H = \\text{Step 2} - \\text{Step 3}$$
   Always include the **sign** ($+$ or $-$) and the unit $\\text{kJ/mol}$ in your final answer!

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-bond-energy-calculation-grid-title igcse-t05-bond-energy-calculation-grid-desc" data-diagram="igcse-t05-bond-energy-calculation-grid" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-bond-energy-calculation-grid-title">Bond energy calculation for methane combustion</title>
  <desc id="igcse-t05-bond-energy-calculation-grid-desc">Visual breakdown of bonds broken in methane and oxygen versus bonds formed in carbon dioxide and water, showing net negative delta H.</desc>

  <!-- Left Box: Bonds Broken (Reactants) -->
  <rect x="24" y="24" width="360" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="40" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="50" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">1. BONDS BROKEN (ENERGY IN)</text>

  <text x="44" y="95" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTANTS: CH4 + 2O2</text>
  <text x="44" y="130" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">4 X (C-H) = 4 X 413 KJ/MOL = 1652 KJ</text>
  <text x="44" y="160" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2 X (O=O) = 2 X 498 KJ/MOL = 996 KJ</text>
  <line x1="44" y1="180" x2="360" y2="180" stroke="#8a939c" stroke-width="1.5" />
  <text x="44" y="215" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">TOTAL BROKEN = +2648 KJ</text>

  <!-- Right Box: Bonds Formed (Products) -->
  <rect x="416" y="24" width="360" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="40" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="50" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">2. BONDS FORMED (ENERGY OUT)</text>

  <text x="436" y="95" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PRODUCTS: CO2 + 2H2O</text>
  <text x="436" y="130" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2 X (C=O) = 2 X 805 KJ/MOL = 1610 KJ</text>
  <text x="436" y="160" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">4 X (O-H) = 4 X 464 KJ/MOL = 1856 KJ</text>
  <line x1="436" y1="180" x2="750" y2="180" stroke="#8a939c" stroke-width="1.5" />
  <text x="436" y="215" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">TOTAL FORMED = +3466 KJ</text>

  <!-- Bottom Calculation Summary Card -->
  <g data-role="text-box" data-box="24 280 752 94">
    <rect x="24" y="280" width="752" height="94" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
    <text x="400" y="308" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">DELTA H = ENERGY IN (BROKEN) - ENERGY OUT (FORMED)</text>
    <text x="400" y="334" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">DELTA H = 2648 KJ - 3466 KJ = -818 KJ/MOL</text>
    <text x="400" y="358" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">EXOTHERMIC (MORE ENERGY RELEASED THAN TAKEN IN)</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-calc-q1',
          type: 'multiple_choice',
          question:
            'Given the bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, and H-Cl = 431 kJ/mol. What is the enthalpy change (ΔH) for the reaction H2 + Cl2 -> 2HCl?',
          options: ['-184 kJ/mol', '+184 kJ/mol', '-92 kJ/mol', '+92 kJ/mol'],
          correctAnswer: 0,
          explanation:
            'Bonds broken: (1 x H-H) + (1 x Cl-Cl) = 436 + 242 = +678 kJ/mol. Bonds formed: 2 x (H-Cl) = 2 x 431 = 862 kJ/mol. ΔH = Bonds broken - Bonds formed = 678 - 862 = -184 kJ/mol.',
          misconceptionTarget: 'Forgetting to multiply H-Cl bond energy by 2 for the two moles of product',
        },
      ],
    },
    {
      tag: 'igcse-05-calorimetry-experiments',
      tags: [
        'calorimetry',
        'polystyrene-cup',
        'heat-loss-insulation',
        'experimental-technique',
      ],
      title: '5. Measuring Energy Changes: Simple Calorimetry & Insulation',
      summary:
        'Experimental determination of temperature changes in solution reactions using a polystyrene cup calorimeter, identifying key sources of experimental error, and methods of minimizing heat loss.',
      content: `### 🧪 The Polystyrene Cup Calorimeter

In school laboratories, enthalpy changes for solutions (e.g. neutralisation of $\\ce{HCl}$ with $\\ce{NaOH}$, or displacement of copper by zinc) are measured using a **polystyrene cup calorimeter**:
1. **Why Polystyrene?**:
   - Polystyrene is a lightweight cellular polymer containing trapped air pockets.
   - It is an excellent **thermal insulator** that drastically reduces heat transfer by conduction to the surroundings.
   - It has a very low thermal heat capacity, so it absorbs negligible heat itself.
2. **The Plastic Lid**:
   - Prevents thermal energy loss by **convection** and prevents heat loss through the **evaporation** of liquid solvent.
3. **The Stirrer**:
   - Ensures continuous, thorough mixing so that the reaction proceeds uniformly and the solution has an even temperature throughout.

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-polystyrene-calorimeter-title igcse-t05-polystyrene-calorimeter-desc" data-diagram="igcse-t05-polystyrene-calorimeter" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-polystyrene-calorimeter-title">Polystyrene cup calorimeter apparatus</title>
  <desc id="igcse-t05-polystyrene-calorimeter-desc">Diagram showing an insulated polystyrene cup with lid, thermometer, and stirrer for measuring temperature changes in reactions.</desc>

  <defs>
    <marker id="igcse-t05-polystyrene-calorimeter-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Supporting Beaker outside -->
  <path d="M 280 140 L 280 340 Q 280 354 294 354 L 506 354 Q 520 354 520 340 L 520 140" fill="#ffffff" stroke="#8a939c" stroke-width="2" />
  <text x="530" y="320" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#8a939c">BEAKER SUPPORT</text>

  <!-- Polystyrene Cup (thick insulated walls) -->
  <path d="M 300 120 L 316 330 Q 318 340 328 340 L 472 340 Q 482 340 484 330 L 500 120" fill="#ececec" stroke="#1f2937" stroke-width="3" />
  <!-- Liquid Solution inside cup -->
  <path d="M 312 180 L 318 328 Q 320 334 330 334 L 470 334 Q 480 334 482 328 L 488 180 Z" fill="#d6f0fb" stroke="none" />
  <line x1="312" y1="180" x2="488" y2="180" stroke="#1f2937" stroke-width="1.5" />

  <!-- Plastic Lid on top of cup -->
  <rect x="290" y="112" width="220" height="14" rx="3" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />

  <!-- Thermometer going through lid -->
  <rect x="360" y="40" width="10" height="230" rx="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <rect x="362" y="180" width="6" height="90" fill="#d64545" stroke="none" />
  <circle cx="365" cy="270" r="8" fill="#d64545" stroke="#1f2937" stroke-width="1.5" />

  <!-- Stirrer (glass rod loop) -->
  <path d="M 440 50 L 440 280 Q 440 295 430 295 Q 420 295 420 280 L 420 240" fill="none" stroke="#1f2937" stroke-width="2" />

  <!-- Left Callout: Thermometer -->
  <g data-role="text-box" data-box="24 50 230 86">
    <rect x="24" y="50" width="230" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="139" y="74" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">THERMOMETER</text>
    <text x="139" y="96" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">MEASURES TEMP CHANGE</text>
    <text x="139" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">INITIAL AND FINAL T</text>
  </g>
  <path d="M 254 90 L 354 90" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t05-polystyrene-calorimeter-arrow)" />

  <!-- Right Callout: Insulated Lid -->
  <g data-role="text-box" data-box="546 70 230 86">
    <rect x="546" y="70" width="230" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="661" y="94" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">TIGHT-FITTING LID</text>
    <text x="661" y="116" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REDUCES HEAT LOSS</text>
    <text x="661" y="138" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">STOPS EVAPORATION</text>
  </g>
  <path d="M 546 113 L 512 113" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t05-polystyrene-calorimeter-arrow)" />

  <!-- Left Lower Callout: Polystyrene Cup -->
  <g data-role="text-box" data-box="24 210 230 86">
    <rect x="24" y="210" width="230" height="86" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="139" y="234" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#3f8f46">POLYSTYRENE CUP</text>
    <text x="139" y="256" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">THERMAL INSULATOR</text>
    <text x="139" y="278" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">LOW HEAT CAPACITY</text>
  </g>
  <path d="M 254 253 L 302 253" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t05-polystyrene-calorimeter-arrow)" />
</svg>

---

### 🔍 Sources of Experimental Error & How to Improve (Paper 4 / Paper 6 Points)

In practical papers, Cambridge frequently awards marks for evaluating calorimeter experiments:
1. **Heat Loss to Surroundings**:
   - Some thermal energy always escapes through the sides or top into the laboratory air.
   - *Improvement*: Use a vacuum flask (Dewar flask), add an extra insulating polystyrene cup, or place mineral wool inside the outer beaker.
2. **Incomplete Reaction or Dissolution**:
   - Solid lumps take longer to react, allowing heat loss to occur before maximum temperature is reached.
   - *Improvement*: Grind solid into fine powder and stir vigorously.
3. **Thermometer Precision**:
   - Standard mercury/spirit thermometers typically read to $\\pm 0.5^\\circ\\text{C}$.
   - *Improvement*: Use a digital temperature probe / data logger measuring to $\\pm 0.1^\\circ\\text{C}$ or $\\pm 0.01^\\circ\\text{C}$.
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-calor-q1',
          type: 'multiple_choice',
          question:
            'Why is a polystyrene cup preferred over a glass beaker when measuring the temperature change of a neutralisation reaction?',
          options: [
            'Polystyrene is an insulator that reduces heat transfer to the surroundings',
            'Polystyrene reacts with the acid to produce extra heat',
            'Glass melts at the temperatures reached in neutralisation',
            'Polystyrene is transparent so colour changes are clearer',
          ],
          correctAnswer: 0,
          explanation:
            'Polystyrene is a thermal insulator with a very low thermal conductivity and low heat capacity, which minimises heat loss to the surrounding environment and gives a much more accurate temperature change measurement.',
          misconceptionTarget: 'Thinking polystyrene increases reaction speed or contributes heat',
        },
      ],
    },
    {
      tag: 'igcse-05-everyday-thermal-apps',
      tags: [
        'everyday-thermal-apps',
        'hand-warmers',
        'cold-packs',
        'hydrogen-fuel-comparison',
      ],
      title: '6. Everyday Applications & Clean Energy Comparisons',
      summary:
        'Practical applications of chemical energetics including instant hand warmers, sports injury cold packs, and comparing hydrogen with conventional fossil fuels.',
      content: `### 🎒 Everyday Applications of Chemical Energetics

Chemical energy changes are exploited in everyday consumer products:
1. **Disposable Hand Warmers (Exothermic)**:
   - Contain iron powder, sodium chloride catalyst, activated carbon, and water inside a permeable sachet.
   - When exposed to air, the iron oxidises rapidly:
     $$4\\ce{Fe(s) + 3O2(g) -> 2Fe2O3(s)} \\quad \\Delta H < 0$$
   - Releases gentle warmth for $6-10\\text{ hours}$.
2. **Instant Sports Injury Cold Packs (Endothermic)**:
   - Contain water in an inner pouch and solid ammonium nitrate ($\\ce{NH4NO3}$) or urea in an outer pouch.
   - Squeezing ruptures the inner pouch, allowing the salt to dissolve:
     $$\\ce{NH4NO3(s) + H2O(l) -> NH4+(aq) + NO3-(aq)} \\quad \\Delta H > 0$$
   - Takes in heat from the injured joint, rapidly reducing swelling and inflammation.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-cold-pack-hand-warmer-title igcse-t05-cold-pack-hand-warmer-desc" data-diagram="igcse-t05-cold-pack-hand-warmer" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-cold-pack-hand-warmer-title">Hand warmers vs sports cold packs</title>
  <desc id="igcse-t05-cold-pack-hand-warmer-desc">Visual comparison between exothermic hand warmers releasing thermal energy and endothermic sports cold packs absorbing thermal energy.</desc>

  <!-- Left: Hand Warmer -->
  <rect x="24" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="42" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">HAND WARMER (EXOTHERMIC)</text>

  <!-- Hand warmer packet illustration -->
  <rect x="130" y="100" width="150" height="110" rx="10" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="205" y="150" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">IRON OXIDATION</text>
  <text x="205" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Fe + O2 -> Fe2O3</text>

  <!-- Left Callout Box -->
  <g data-role="text-box" data-box="44 236 320 88">
    <rect x="44" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="204" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">EXOTHERMIC PACKET</text>
    <text x="204" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">WARMS HANDS IN WINTER</text>
    <text x="204" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">RELEASES HEAT TO SKIN</text>
  </g>

  <!-- Right: Cold Pack -->
  <rect x="416" y="24" width="360" height="332" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="42" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="51" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#2f7fc1">SPORTS COLD PACK (ENDOTHERMIC)</text>

  <!-- Cold pack illustration -->
  <rect x="520" y="100" width="150" height="110" rx="10" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="595" y="145" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">NH4NO3 DISSOLVING</text>
  <text x="595" y="170" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ABSORBS HEAT RAPIDLY</text>

  <!-- Right Callout Box -->
  <g data-role="text-box" data-box="436 236 320 88">
    <rect x="436" y="236" width="320" height="88" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="596" y="260" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">ENDOTHERMIC PACKET</text>
    <text x="596" y="282" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COOLS INJURED TISSUES</text>
    <text x="596" y="304" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">REDUCES SWELLING FAST</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-apps-q1',
          type: 'multiple_choice',
          question:
            'Which chemical process is exploited in commercial sports injury cold packs to rapidly drop temperature?',
          options: [
            'Endothermic dissolution of ammonium nitrate in water',
            'Exothermic oxidation of iron powder by air',
            'Exothermic combustion of ethanol in a burner',
            'Endothermic electrolysis of molten lead bromide',
          ],
          correctAnswer: 0,
          explanation:
            'Cold packs rely on the endothermic dissolving of ammonium salts in water, which rapidly absorbs heat from the injured skin and tissue.',
          misconceptionTarget: 'Confusing cold pack dissolution with hand warmer iron oxidation',
        },
      ],
    },
    {
      tag: 'igcse-05-catalysts-energetics',
      tags: [
        'catalysts',
        'activation-energy',
        'reaction-pathway',
        'delta-h-unchanged',
      ],
      title: '7. Catalysts and Energy Pathways',
      summary:
        'Understanding how catalysts increase reaction rates by providing an alternative pathway with a lower activation energy (Ea) while leaving ΔH completely unchanged.',
      content: `### ⚡ How Catalysts Affect Chemical Energetics

A **catalyst** is a substance that increases the rate of a chemical reaction without being chemically changed or consumed at the end of the reaction:
1. **Lower Activation Energy ($E_a'$)**:
   - The catalyst provides an **alternative reaction pathway** that requires less kinetic energy to initiate.
   - Because $E_a'$ is lower, a significantly higher fraction of colliding particles have energy equal to or greater than the activation energy ($E \\ge E_a'$).
   - This leads to a higher frequency of successful collisions.
2. **Enthalpy Change ($\\Delta H$) is UNCHANGED**:
   - The initial energy of the reactants and the final energy of the products are determined solely by the chemical bonds in those substances.
   - Therefore, a catalyst **has zero effect on $\\Delta H$**!

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t05-catalyst-activation-energy-title igcse-t05-catalyst-activation-energy-desc" data-diagram="igcse-t05-catalyst-activation-energy" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t05-catalyst-activation-energy-title">Effect of a catalyst on activation energy</title>
  <desc id="igcse-t05-catalyst-activation-energy-desc">Reaction pathway diagram comparing the higher activation energy of an uncatalysed pathway against the lower activation energy of a catalysed pathway with unchanged delta H.</desc>

  <defs>
    <marker id="igcse-t05-catalyst-activation-energy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="100" y1="340" x2="100" y2="40" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t05-catalyst-activation-energy-arrow)" />
  <line x1="100" y1="340" x2="720" y2="340" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t05-catalyst-activation-energy-arrow)" />
  <text x="90" y="30" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ENERGY</text>
  <text x="730" y="360" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PROGRESS OF REACTION</text>

  <!-- Reactants Platform (y=200, x=130..230) -->
  <line x1="130" y1="200" x2="230" y2="200" stroke="#1f2937" stroke-width="3" />
  <text x="180" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">REACTANTS</text>

  <!-- Uncatalysed curve (high peak at y=80) -->
  <path d="M 230 200 C 300 200 330 80 380 80 C 430 80 460 280 520 280" fill="none" stroke="#d64545" stroke-width="3" />
  <text x="380" y="68" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">UNCATALYSED PATHWAY</text>

  <!-- Catalysed curve (lower peak at y=140) -->
  <path d="M 230 200 C 300 200 330 140 380 140 C 430 140 460 280 520 280" fill="none" stroke="#3f8f46" stroke-width="3" stroke-dasharray="6 4" />
  <text x="380" y="130" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">CATALYSED PATHWAY</text>

  <!-- Products Platform (y=280, x=520..640) -->
  <line x1="520" y1="280" x2="640" y2="280" stroke="#1f2937" stroke-width="3" />
  <text x="580" y="270" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PRODUCTS</text>

  <!-- Guideline from reactants -->
  <line x1="230" y1="200" x2="560" y2="200" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Delta H Arrow (DOWNWARD from y=200 to y=278 at x=500) -->
  <line x1="500" y1="200" x2="500" y2="278" stroke="#2f7fc1" stroke-width="2" marker-end="url(#igcse-t05-catalyst-activation-energy-arrow)" />
  <text x="490" y="235" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">DELTA H</text>
  <text x="490" y="255" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">(UNCHANGED)</text>

  <!-- Bottom Tag: Core Cambridge Rule -->
  <g data-role="text-box" data-box="150 20 500 42">
    <rect x="150" y="20" width="500" height="42" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="400" y="46" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">CATALYST LOWERS Ea BUT DOES NOT CHANGE DELTA H</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-05-cat-q1',
          type: 'multiple_choice',
          question:
            'How does adding a catalyst change the activation energy (Ea) and the enthalpy change (ΔH) of a chemical reaction?',
          options: [
            'Ea decreases | ΔH stays the same',
            'Ea decreases | ΔH becomes more negative',
            'Ea stays the same | ΔH decreases',
            'Ea increases | ΔH stays the same',
          ],
          correctAnswer: 0,
          explanation:
            'A catalyst provides an alternative pathway with a lower activation energy, but it has no effect on the energy levels of the reactants or products, so the enthalpy change (ΔH) remains completely unchanged.',
          misconceptionTarget: 'Thinking catalysts make reactions more exothermic or alter ΔH',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-05-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme', 'examiner-tips'],
      title: '8. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Structured Theory) questions on bond energy calculations, enthalpy changes, and calorimetry.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
The reaction pathway diagram for the synthesis of ammonia is shown:
$$\\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \\quad \\Delta H = -92\\text{ kJ/mol}$$
Which row correctly describes this reaction?

- **A**: The reaction is exothermic and the products are at a higher energy level than the reactants.
- **B**: The reaction is endothermic and bond breaking releases more energy than bond making.
- **C**: The reaction is exothermic and more energy is released making bonds than is absorbed breaking bonds.
- **D**: The reaction is endothermic and the products are at a lower energy level than the reactants.

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: C**
> - **Working**:
>   1. $\\Delta H$ has a negative sign ($-92\\text{ kJ/mol}$), meaning the reaction is **exothermic**.
>   2. In an exothermic reaction, the energy released when new bonds are formed in the products is greater than the energy required to break bonds in the reactants.

---

### 📝 Question 2 (Paper 2 Multiple Choice — 1 Mark)
Hydrogen reacts with bromine to form hydrogen bromide:
$$\\ce{H2(g) + Br2(g) -> 2HBr(g)}$$
Bond energies are given:
- $\\ce{H-H} = 436\\text{ kJ/mol}$
- $\\ce{Br-Br} = 193\\text{ kJ/mol}$
- $\\ce{H-Br} = 366\\text{ kJ/mol}$

What is the enthalpy change, $\\Delta H$, for this reaction?

- **A**: $-103\\text{ kJ/mol}$
- **B**: $+103\\text{ kJ/mol}$
- **C**: $-263\\text{ kJ/mol}$
- **D**: $+263\\text{ kJ/mol}$

> [!TIP]
> ### 💡 Mark Scheme & Calculation Breakdown
> - **Correct Answer: A ($-103$ kJ/mol)**
> - **Working**:
>   1. **Bonds broken (Reactants)**:
>      $$\\text{Energy In} = (1 \\times \\ce{H-H}) + (1 \\times \\ce{Br-Br}) = 436 + 193 = +629\\text{ kJ/mol}$$
>   2. **Bonds formed (Products)**:
>      $$\\text{Energy Out} = 2 \\times \\ce{H-Br} = 2 \\times 366 = 732\\text{ kJ/mol}$$
>   3. **Enthalpy change**:
>      $$\\Delta H = \\text{Broken} - \\text{Formed} = 629 - 732 = \\mathbf{-103\\text{ kJ/mol}}$$

---

### 📝 Question 3 (Paper 4 Structured Theory — 6 Marks)
Hydrazine, $\\ce{N2H4}$, is used as a rocket propellant. It burns in oxygen according to the equation:
$$\\ce{N2H4(g) + O2(g) -> N2(g) + 2H2O(g)}$$

**(a) Draw the displayed structural formula of hydrazine, $\\ce{N2H4}$, showing all single covalent bonds. [1]**
> **Mark Scheme**:
> - Two $\\ce{N}$ atoms single-bonded to each other ($\\ce{N-N}$), with each $\\ce{N}$ bonded to two $\\ce{H}$ atoms (four $\\ce{N-H}$ single bonds in total). [1]

**(b) Use the bond energies in the table below to calculate the enthalpy change ($\\Delta H$) for the combustion of hydrazine. [3]**

| Bond | Bond Energy (kJ/mol) |
| :--- | :--- |
| $\\ce{N-H}$ | 391 |
| $\\ce{N-N}$ | 158 |
| $\\ce{O=O}$ | 498 |
| $\\ce{N#N}$ (triple) | 945 |
| $\\ce{O-H}$ | 464 |

> **Mark Scheme**:
> - **Mark 1 (Bonds broken)**:
>   $$(4 \\times 391) + (1 \\times 158) + (1 \\times 498) = 1564 + 158 + 498 = \\mathbf{+2220\\text{ kJ/mol}}$$ [1]
> - **Mark 2 (Bonds formed)**:
>   $$(1 \\times 945) + (4 \\times 464) = 945 + 1856 = \\mathbf{+2801\\text{ kJ/mol}}$$ [1]
> - **Mark 3 (Final $\\Delta H$)**:
>   $$\\Delta H = 2220 - 2801 = \\mathbf{-581\\text{ kJ/mol}}$$ (award full 3 marks for correct final answer with negative sign). [1]

**(c) Explain, in terms of bond breaking and bond making, why this reaction is exothermic. [2]**
> **Mark Scheme**:
> - Bond breaking absorbs energy / is endothermic AND bond making releases energy / is exothermic. [1]
> - More energy is released when making bonds in the products than is absorbed breaking bonds in the reactants. [1]

---

### 📝 Question 4 (Paper 4 Structured Theory — 5 Marks)
A student investigated the displacement reaction between zinc powder and aqueous copper(II) sulfate:
$$\\ce{Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)}$$
$50.0\\text{ cm}^3$ of $0.50\\text{ mol/dm}^3$ copper(II) sulfate solution was placed in a polystyrene cup. Excess zinc powder was added and the mixture was stirred continuously.

**(a) State why a polystyrene cup was used instead of a glass beaker. [1]**
> **Mark Scheme**:
> - Polystyrene is a good thermal insulator / reduces heat loss to the surroundings. [1]

**(b) State why excess zinc powder was used. [1]**
> **Mark Scheme**:
> - To ensure all the copper(II) sulfate reacted completely. [1]

**(c) State two visual observations the student would make during this reaction. [2]**
> **Mark Scheme** (any two from):
> 1. The blue colour of the solution fades / turns colourless. [1]
> 2. Red-brown / pink-brown solid (copper) forms. [1]
> 3. The grey zinc powder dissolves / disappears. [1]
> 4. Temperature reading on thermometer increases. [1]

**(d) Suggest one modification to the apparatus that would give a more accurate temperature rise. [1]**
> **Mark Scheme**:
> - Put a lid on the cup / use a vacuum flask / use a digital temperature sensor with higher resolution. [1]`,
    },
  ],
};
