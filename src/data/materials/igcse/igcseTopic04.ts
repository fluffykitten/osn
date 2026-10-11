/**
 * igcseTopic04.ts
 * Topic 4: Electrochemistry
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_4: MaterialItem = {
  id: 204,
  topic_number: 4,
  title: 'Electrochemistry',
  slug: 'electrochemistry',
  category: 'Physical Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 35,
  summary:
    'Comprehensive study of electrolysis of molten and aqueous ionic compounds, selective discharge rules at electrodes, electroplating, electrolytic refining of copper, simple chemical cells, and hydrogen-oxygen fuel cells.',
  allTags: [
    'igcse-04-electrolysis-basics',
    'igcse-04-molten-electrolysis',
    'igcse-04-aqueous-selective-discharge',
    'igcse-04-case-studies-brine-acid',
    'igcse-04-electroplating-refining',
    'igcse-04-simple-cells',
    'igcse-04-fuel-cells',
    'igcse-04-exam-practice',
    'electrochemistry',
    'electrolysis',
    'electrolytic-cell',
    'anode',
    'cathode',
    'electrolyte',
    'molten-electrolysis',
    'lead-bromide',
    'selective-discharge',
    'reactivity-series',
    'halide-discharge',
    'hydroxide-discharge',
    'brine-electrolysis',
    'chlor-alkali',
    'dilute-sulfuric-acid',
    'hoffmann-voltameter',
    'copper-sulfate',
    'active-electrodes',
    'inert-electrodes',
    'electroplating',
    'copper-refining',
    'anode-sludge',
    'simple-chemical-cells',
    'potential-difference',
    'hydrogen-fuel-cell',
    'half-equations',
    'redox-in-electrolysis',
    'oil-rig',
  ],
  prerequisites: [
    {
      tag: 'igcse-04-electrolysis-basics',
      tags: [
        'electrolysis',
        'electrolytic-cell',
        'anode',
        'cathode',
        'electrolyte',
        'charge-transfer',
        'panic-mnemonic',
      ],
      title: '1. Fundamentals of Electrolysis & The Electrolytic Cell',
      summary:
        'Defining electrolysis, identifying the parts of an electrolytic cell, understanding charge transfer via electrons in external wires and ions in the electrolyte, and mastering the PANIC mnemonic.',
      content: `### ⚡ What is Electrolysis?

**Electrolysis** is the breakdown (decomposition) of an ionic compound, when molten or in aqueous solution, by the passage of an electric current.

Key definitions required by Cambridge:
1. **Electrolyte**: A molten ionic liquid or an aqueous solution containing free mobile ions that conducts electricity and is decomposed by it. (Pure water and covalent compounds like ethanol or liquid paraffin are non-electrolytes because they contain no free ions).
2. **Electrodes**: Rods or plates (usually inert substances like graphite/carbon or platinum) through which electric current enters and leaves the electrolyte.
   - **Anode**: The **positive electrode** connected to the positive terminal of the power supply.
   - **Cathode**: The **negative electrode** connected to the negative terminal of the power supply.
3. **Power Supply**: Direct current (DC) source (battery or DC power pack). Alternating current (AC) cannot be used because the polarity of the electrodes would continually reverse, preventing separation of products.

---

### 🧠 The Essential Mnemonics: PANIC & OIL RIG

> [!TIP]
> ### 🔑 Cambridge Memory Tools
> - **PANIC**: **P**ositive is **A**node, **N**egative **I**s **C**athode.
> - **OIL RIG**: **O**xidation **I**s **L**oss of electrons, **R**eduction **I**s **G**ain of electrons.
> - **AN OX**: **An**ode is the site of **Ox**idation.
> - **RED CAT**: **Red**uction occurs at the **Cat**hode.

---

### 🔄 How Charge is Transferred Through the Circuit

Cambridge examiners specifically test the **two different mechanisms of electrical conduction** in an electrolytic system:
1. **In the External Circuit (wires and power supply)**:
   - Current is carried by the flow of **delocalised electrons**.
   - Electrons are pumped by the battery away from the positive anode, through the external circuit, and into the negative cathode.
2. **In the Electrolyte (liquid/solution)**:
   - Current is carried by the movement of **free mobile ions**.
   - **Cations** (positive ions) are attracted to the negative **cathode**, where they gain electrons (reduction).
   - **Anions** (negative ions) are attracted to the positive **anode**, where they lose electrons (oxidation).
   - Electrons **never** swim freely through the liquid electrolyte!

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-electrolytic-cell-basics-title igcse-t04-electrolytic-cell-basics-desc" data-diagram="igcse-t04-electrolytic-cell-basics" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-electrolytic-cell-basics-title">The electrolytic cell and charge transfer mechanism</title>
  <desc id="igcse-t04-electrolytic-cell-basics-desc">Diagram showing the power supply, electron flow through the external wire, anode, cathode, and migration of ions in the electrolyte.</desc>

  <defs>
    <marker id="igcse-t04-electrolytic-cell-basics-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Power Supply / DC Battery at top -->
  <rect x="340" y="34" width="120" height="38" rx="6" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <line x1="380" y1="40" x2="380" y2="66" stroke="#d64545" stroke-width="3" stroke-linecap="round" />
  <text x="368" y="58" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#d64545">+</text>
  <line x1="420" y1="45" x2="420" y2="61" stroke="#1f2937" stroke-width="4" stroke-linecap="round" />
  <text x="432" y="58" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">-</text>
  <text x="400" y="27" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DC POWER SUPPLY</text>

  <!-- Wires -->
  <path d="M 340 53 L 250 53 L 250 140" fill="none" stroke="#1f2937" stroke-width="2" />
  <path d="M 460 53 L 550 53 L 550 140" fill="none" stroke="#1f2937" stroke-width="2" />

  <!-- Electron flow arrows on wires -->
  <path d="M 250 100 L 250 70" fill="none" stroke="#3f8f46" stroke-width="2" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />
  <path d="M 550 70 L 550 100" fill="none" stroke="#3f8f46" stroke-width="2" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />
  <text x="200" y="85" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ELECTRON FLOW</text>
  <text x="600" y="85" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ELECTRON FLOW</text>

  <!-- Beaker Container -->
  <path d="M 188 150 Q 200 154 200 168 L 200 372 Q 200 390 218 390 L 582 390 Q 600 390 600 372 L 600 168 Q 600 154 612 150" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Liquid Fill -->
  <path d="M 201 200 L 599 200 L 599 372 Q 599 389 582 389 L 218 389 Q 201 389 201 372 Z" fill="#d6f0fb" stroke="none" />
  <line x1="201" y1="200" x2="599" y2="200" stroke="#1f2937" stroke-width="1.5" />

  <!-- Anode (Left Rod) -->
  <rect x="238" y="140" width="24" height="210" fill="#8a939c" stroke="#1f2937" stroke-width="2" />
  <!-- Cathode (Right Rod) -->
  <rect x="538" y="140" width="24" height="210" fill="#8a939c" stroke="#1f2937" stroke-width="2" />

  <!-- Particle Region: Anions migrating to Anode, Cations to Cathode -->
  <g data-role="particle-region" data-bounds="270 210 530 380" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5">
    <!-- Anions (Red) -->
    <circle cx="340" cy="250" r="12" />
    <circle cx="380" cy="320" r="12" />
    <circle cx="320" cy="350" r="12" />
  </g>
  <text x="340" y="254" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">-</text>
  <text x="380" y="324" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">-</text>
  <text x="320" y="354" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">-</text>

  <!-- Anion migration arrows (pointing left towards anode) -->
  <path d="M 324 250 L 290 250" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />
  <path d="M 364 320 L 330 320" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />

  <g data-role="particle-region" data-bounds="270 210 530 380" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
    <!-- Cations (Blue) -->
    <circle cx="460" cy="250" r="12" />
    <circle cx="420" cy="320" r="12" />
    <circle cx="480" cy="350" r="12" />
  </g>
  <text x="460" y="254" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">+</text>
  <text x="420" y="324" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">+</text>
  <text x="480" y="354" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">+</text>

  <!-- Cation migration arrows (pointing right towards cathode) -->
  <path d="M 476 250 L 510 250" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />
  <path d="M 436 320 L 470 320" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />

  <!-- Labels for Anode & Cathode -->
  <g data-role="text-box" data-box="20 150 166 84">
    <rect x="20" y="150" width="166" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="103" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">ANODE (+)</text>
    <text x="103" y="196" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">OXIDATION</text>
    <text x="103" y="216" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ELECTRONS LOST</text>
  </g>
  <path d="M 186 190 L 234 190" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />

  <g data-role="text-box" data-box="610 150 172 84">
    <rect x="610" y="150" width="172" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="696" y="174" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">CATHODE (-)</text>
    <text x="696" y="196" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">REDUCTION</text>
    <text x="696" y="216" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">ELECTRONS GAINED</text>
  </g>
  <path d="M 610 190 L 566 190" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-electrolytic-cell-basics-arrowhead)" />

  <!-- Tag Box: Electrolyte -->
  <g data-role="text-box" data-box="240 344 320 40">
    <rect x="240" y="344" width="320" height="40" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="369" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ELECTROLYTE (FREE MOBILE IONS)</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-basics-q1',
          type: 'multiple_choice',
          question:
            'Which row correctly identifies how electrical charge is transferred through the external wire and through the molten electrolyte during electrolysis?',
          options: [
            'External wire: delocalised electrons | Electrolyte: mobile ions',
            'External wire: mobile ions | Electrolyte: delocalised electrons',
            'External wire: delocalised electrons | Electrolyte: delocalised electrons',
            'External wire: positive protons | Electrolyte: mobile ions',
          ],
          correctAnswer: 0,
          explanation:
            'In metals and external circuit wires, charge is carried exclusively by the flow of delocalised electrons. Inside molten or aqueous electrolytes, charge is carried by mobile cations moving towards the cathode and mobile anions moving towards the anode.',
          misconceptionTarget: 'Thinking that electrons travel through the liquid electrolyte',
        },
        {
          id: 'chk-igcse-04-basics-q2',
          type: 'multiple_choice',
          question:
            'What chemical process always takes place at the positive anode in an electrolytic cell?',
          options: [
            'Oxidation (loss of electrons by negative ions)',
            'Reduction (gain of electrons by positive ions)',
            'Neutralisation (formation of water)',
            'Precipitation (formation of an insoluble salt)',
          ],
          correctAnswer: 0,
          explanation:
            'Remember AN OX: The Anode is always the site of Oxidation, where negative anions lose electrons to the positive electrode.',
          misconceptionTarget: 'Confusing cathode reduction with anode oxidation',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-04-molten-electrolysis',
      tags: [
        'molten-electrolysis',
        'lead-bromide',
        'inert-electrodes',
        'graphite',
        'half-equations',
      ],
      title: '2. Electrolysis of Molten Ionic Compounds (PbBr2 & NaCl)',
      summary:
        'Understanding why solid ionic compounds do not conduct electricity, how melting frees ions, the electrolysis of molten lead(II) bromide, and predicting products for molten binary compounds.',
      content: `### 🔒 Why Solid Ionic Compounds Do Not Conduct

Solid ionic compounds (such as solid $\\ce{PbBr2}$ or $\\ce{NaCl}$) are electrical insulators:
- Their positive and negative ions are held tightly in fixed positions in a giant ionic lattice by strong electrostatic attractions.
- The ions cannot move, so no charge can flow.

When heated until **molten (liquid)**:
- High thermal energy overcomes the electrostatic attractions.
- The crystal lattice breaks down and the ions become **free to move** independently throughout the molten liquid.
- The substance now conducts electricity and decomposes!

---

### 🧪 Landmark Experiment: Electrolysis of Molten Lead(II) Bromide (PbBr2)

In the classic Cambridge demonstration, solid lead(II) bromide is heated in a crucible with graphite electrodes:
1. While solid, the bulb in the circuit does **not** light up.
2. Once the $\\ce{PbBr2}$ melts at around $373^\\circ\\text{C}$, the bulb immediately lights up, showing conduction!
3. Observations at electrodes:
   - **At the Cathode (negative electrode)**:
     - Positive lead ions ($\\ce{Pb^{2+}}$) are attracted and gain electrons.
     - **Observation**: A silvery, shiny bead of molten lead metal forms and sinks to the bottom.
     - **Ionic half-equation**: $\\ce{Pb^{2+}(l) + 2e- -> Pb(l)}$ (Reduction)
   - **At the Anode (positive electrode)**:
     - Negative bromide ions ($\\ce{Br-}$ ) are attracted and lose electrons.
     - **Observation**: Bubbles of pungent, red-brown bromine gas ($\\ce{Br2}$) evolve.
     - **Ionic half-equation**: $\\ce{2Br-(l) -> Br2(g) + 2e-}$ (Oxidation)
   - **Overall decomposition**:
     $$\\ce{PbBr2(l) -> Pb(l) + Br2(g)}$$

> [!WARNING]
> ### ⚠️ Cambridge Safety Hazard Note
> This experiment must always be performed in a **fume cupboard** because bromine gas ($\\ce{Br2}$) is highly toxic, corrosive, and damages the respiratory system. Lead compounds are also toxic.

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-molten-lead-bromide-title igcse-t04-molten-lead-bromide-desc" data-diagram="igcse-t04-molten-lead-bromide" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-molten-lead-bromide-title">Electrolysis of molten lead(II) bromide</title>
  <desc id="igcse-t04-molten-lead-bromide-desc">Apparatus for the electrolysis of molten lead bromide using graphite electrodes, showing lead bead at the cathode and brown bromine fumes at the anode.</desc>

  <defs>
    <marker id="igcse-t04-molten-lead-bromide-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Power Supply & Glowing Bulb -->
  <rect x="350" y="32" width="100" height="34" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="54" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">6V DC BATTERY</text>

  <!-- Wires with Bulb -->
  <path d="M 350 48 L 260 48 L 260 140" fill="none" stroke="#1f2937" stroke-width="2" />
  <path d="M 450 48 L 540 48 L 540 140" fill="none" stroke="#1f2937" stroke-width="2" />

  <!-- Light Bulb symbol -->
  <circle cx="495" cy="48" r="14" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <path d="M 488 55 L 495 41 L 502 55" fill="none" stroke="#1f2937" stroke-width="1.5" />
  <text x="495" y="27" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">BULB GLOWS</text>

  <!-- Crucible / Dish -->
  <path d="M 200 200 C 210 320, 590 320, 600 200 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Molten PbBr2 liquid fill -->
  <path d="M 215 220 C 230 305, 570 305, 585 220 Z" fill="#fcc68b" stroke="none" />
  <line x1="215" y1="220" x2="585" y2="220" stroke="#1f2937" stroke-width="1.5" />

  <!-- Heat Flames beneath Crucible -->
  <path d="M 370 360 Q 380 320 400 300 Q 420 320 430 360 Z" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <path d="M 385 360 Q 395 335 400 320 Q 405 335 415 360 Z" fill="#fde58a" stroke="#d64545" stroke-width="1.5" />
  <text x="400" y="380" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">HEAT (BUNSEN BURNER)</text>

  <!-- Electrodes (Graphite) -->
  <rect x="270" y="120" width="20" height="150" fill="#4b5563" stroke="#1f2937" stroke-width="2" />
  <rect x="510" y="120" width="20" height="150" fill="#4b5563" stroke="#1f2937" stroke-width="2" />
  <text x="280" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE (+)</text>
  <text x="520" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CATHODE (-)</text>

  <!-- Bromine Gas at Anode (+) (Red-brown bubbles & fumes) -->
  <circle cx="265" cy="205" r="7" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="295" cy="190" r="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="270" cy="170" r="9" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="290" cy="150" r="7" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />

  <!-- Lead bead at Cathode (-) (Silvery bead) -->
  <ellipse cx="520" cy="270" rx="14" ry="10" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Callout 1: Anode Observations & Half-equation -->
  <g data-role="text-box" data-box="20 160 216 90">
    <rect x="20" y="160" width="216" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="128" y="184" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE OBSERVATION</text>
    <text x="128" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">BROWN BROMINE GAS</text>
    <text x="128" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2Br- -> Br2 + 2e-</text>
  </g>
  <path d="M 236 205 L 260 205" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-molten-lead-bromide-arrowhead)" />

  <!-- Callout 2: Cathode Observations & Half-equation -->
  <g data-role="text-box" data-box="560 160 216 90">
    <rect x="560" y="160" width="216" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="668" y="184" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CATHODE OBSERVATION</text>
    <text x="668" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SILVERY LEAD BEAD</text>
    <text x="668" y="230" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Pb2+ + 2e- -> Pb</text>
  </g>
  <path d="M 560 220 L 536 260" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-molten-lead-bromide-arrowhead)" />
</svg>

---

### 📋 General Rule for Electrolysis of Molten Binary Compounds

For any **molten binary ionic compound** (a compound containing only two elements: a metal and a non-metal):
- **Cathode (-)**: The metal is always produced (by reduction of metal cations).
- **Anode (+)**: The non-metal is always produced (by oxidation of non-metal anions).

| Molten Electrolyte | Product at Cathode (-) | Cathode Half-Equation | Product at Anode (+) | Anode Half-Equation |
| :--- | :--- | :--- | :--- | :--- |
| **Lead(II) bromide** ($\\ce{PbBr2}$) | Lead metal ($\\ce{Pb}$) | $\\ce{Pb^{2+} + 2e- -> Pb}$ | Bromine gas ($\\ce{Br2}$) | $\\ce{2Br- -> Br2 + 2e-}$ |
| **Sodium chloride** ($\\ce{NaCl}$) | Sodium metal ($\\ce{Na}$) | $\\ce{Na+ + e- -> Na}$ | Chlorine gas ($\\ce{Cl2}$) | $\\ce{2Cl- -> Cl2 + 2e-}$ |
| **Aluminium oxide** ($\\ce{Al2O3}$) | Aluminium metal ($\\ce{Al}$) | $\\ce{Al^{3+} + 3e- -> Al}$ | Oxygen gas ($\\ce{O2}$) | $\\ce{2O^{2-} -> O2 + 4e-}$ |
| **Magnesium chloride** ($\\ce{MgCl2}$) | Magnesium metal ($\\ce{Mg}$) | $\\ce{Mg^{2+} + 2e- -> Mg}$ | Chlorine gas ($\\ce{Cl2}$) | $\\ce{2Cl- -> Cl2 + 2e-}$ |
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-molten-q1',
          type: 'multiple_choice',
          question:
            'What are the products when molten magnesium iodide (MgI2) is electrolysed using inert electrodes?',
          options: [
            'Cathode: magnesium | Anode: iodine',
            'Cathode: hydrogen | Anode: iodine',
            'Cathode: magnesium | Anode: oxygen',
            'Cathode: iodine | Anode: magnesium',
          ],
          correctAnswer: 0,
          explanation:
            'In any molten binary salt, the positive metal ion (Mg2+) moves to the negative cathode forming magnesium metal, while the negative non-metal ion (I-) moves to the positive anode forming iodine.',
          misconceptionTarget: 'Thinking hydrogen is produced in a molten (water-free) compound',
        },
      ],
    },
    {
      tag: 'igcse-04-aqueous-selective-discharge',
      tags: [
        'aqueous-electrolysis',
        'selective-discharge',
        'reactivity-series',
        'halide-discharge',
        'hydroxide-discharge',
      ],
      title: '3. Electrolysis of Aqueous Solutions & Selective Discharge',
      summary:
        'Understanding how water provides H+ and OH- ions, and applying the Cambridge selective discharge rules at the cathode and anode based on reactivity and concentration.',
      content: `### 🌊 Why Aqueous Solutions are Different: The Presence of Water

When an ionic compound is dissolved in water to make an **aqueous solution**, water molecules undergo slight self-ionisation:
$$\\ce{H2O(l) <=> H+(aq) + OH-(aq)}$$

Therefore, an aqueous electrolyte contains at least **four types of ions**:
1. Cation from salt $+$ $\\ce{H+}$ from water (competing at the cathode).
2. Anion from salt $+$ $\\ce{OH-}$ from water (competing at the anode).

Only **one** type of ion is normally discharged at each electrode at a time. This preference is called **selective discharge**.

---

### ⚖️ Selective Discharge Rules (Cambridge Extended Requirement)

#### 1. At the Cathode (-) [Hydrogen vs Metal]:
The rule depends strictly on the **Reactivity Series of Metals**:
$$\\ce{K > Na > Ca > Mg > Al > (C) > Zn > Fe > (H) > Cu > Ag > Au}$$

- If the metal is **more reactive than hydrogen** (from $\\ce{K}$ down to $\\ce{Fe}$):
  - The metal ions remain in solution.
  - $\\ce{H+}$ ions are discharged instead, producing **hydrogen gas ($\\ce{H2}$)**:
    $$2\\ce{H+(aq) + 2e- -> H2(g)}$$
- If the metal is **less reactive than hydrogen** (such as $\\ce{Cu^{2+}}$ or $\\ce{Ag+}$):
  - The metal ions are discharged, depositing a layer of **pure metal** on the cathode:
    $$\\ce{Cu^{2+}(aq) + 2e- -> Cu(s)}$$
    $$\\ce{Ag+(aq) + e- -> Ag(s)}$$

---

#### 2. At the Anode (+) [Halide vs Hydroxide]:
The rule depends on whether **halide ions** are present in concentrated solution:
- If **halide ions** ($\\ce{Cl-}, \\ce{Br-}, \\ce{I-}$) are present in **concentrated solution**:
  - The halide ion is discharged, forming the corresponding **halogen gas/liquid**:
    $$2\\ce{Cl-(aq) -> Cl2(g) + 2e-}$$
    $$2\\ce{Br-(aq) -> Br2(aq/l) + 2e-}$$
    $$2\\ce{I-(aq) -> I2(s/aq) + 2e-}$$
- If **no halide is present** (e.g. sulfate $\\ce{SO4^{2-}}$, nitrate $\\ce{NO3-}$), or if the solution is **very dilute**:
  - Hydroxide ions ($\\ce{OH-}$) from water are discharged, producing **oxygen gas ($\\ce{O2}$)**:
    $$4\\ce{OH-(aq) -> O2(g) + 2H2O(l) + 4e-}$$

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-selective-discharge-rules-title igcse-t04-selective-discharge-rules-desc" data-diagram="igcse-t04-selective-discharge-rules" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-selective-discharge-rules-title">Selective discharge rules for aqueous electrolysis</title>
  <desc id="igcse-t04-selective-discharge-rules-desc">Flowchart and decision matrix for determining products at the cathode and anode in aqueous solutions.</desc>

  <!-- Left Column: Cathode Rules -->
  <rect x="24" y="24" width="360" height="370" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="24" y="24" width="360" height="44" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="52" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">CATHODE (-) DISCHARGE RULES</text>

  <!-- Question 1 -->
  <rect x="44" y="84" width="320" height="44" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
  <text x="204" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">IS METAL MORE REACTIVE THAN H?</text>

  <!-- YES Path: Metal > H -->
  <g data-role="text-box" data-box="44 148 320 100">
    <rect x="44" y="148" width="320" height="100" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="204" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">YES: K, Na, Ca, Mg, Al, Zn, Fe</text>
    <text x="204" y="196" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">HYDROGEN GAS (H2) DISCHARGED</text>
    <text x="204" y="222" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2H+ + 2e- -> H2</text>
  </g>

  <!-- NO Path: Metal < H -->
  <g data-role="text-box" data-box="44 268 320 106">
    <rect x="44" y="268" width="320" height="106" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
    <text x="204" y="292" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">NO: Cu, Ag, Au (LESS REACTIVE)</text>
    <text x="204" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">METAL LAYER DEPOSITED</text>
    <text x="204" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Cu2+ + 2e- -> Cu</text>
  </g>

  <!-- Right Column: Anode Rules -->
  <rect x="416" y="24" width="360" height="370" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="416" y="24" width="360" height="44" rx="8" fill="#f5a3a3" stroke="#1f2937" stroke-width="2" />
  <text x="596" y="52" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">ANODE (+) DISCHARGE RULES</text>

  <!-- Question 2 -->
  <rect x="436" y="84" width="320" height="44" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
  <text x="596" y="110" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">IS CONCENTRATED HALIDE PRESENT?</text>

  <!-- YES Path: Halide -->
  <g data-role="text-box" data-box="436 148 320 100">
    <rect x="436" y="148" width="320" height="100" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="596" y="172" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">YES: Cl-, Br-, I- (CONCENTRATED)</text>
    <text x="596" y="196" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">HALOGEN GAS PRODUCED</text>
    <text x="596" y="222" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2Cl- -> Cl2 + 2e-</text>
  </g>

  <!-- NO Path: Sulfate/Nitrate or Dilute -->
  <g data-role="text-box" data-box="436 268 320 106">
    <rect x="436" y="268" width="320" height="106" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
    <text x="596" y="292" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">NO: SO4(2-), NO3-, OR DILUTE</text>
    <text x="596" y="316" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">OXYGEN GAS (O2) DISCHARGED</text>
    <text x="596" y="342" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">4OH- -> O2 + 2H2O + 4e-</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-selective-q1',
          type: 'multiple_choice',
          question:
            'Aqueous magnesium sulfate, MgSO4(aq), is electrolysed using graphite electrodes. What are the products at the cathode and anode?',
          options: [
            'Cathode: hydrogen | Anode: oxygen',
            'Cathode: magnesium | Anode: sulfur dioxide',
            'Cathode: magnesium | Anode: oxygen',
            'Cathode: hydrogen | Anode: sulfate gas',
          ],
          correctAnswer: 0,
          explanation:
            'At the cathode, Mg is more reactive than H, so H+ is discharged forming H2 gas. At the anode, sulfate is not a halide, so OH- is discharged forming O2 gas.',
          misconceptionTarget: 'Thinking sulfate ions discharge to produce sulfur gases',
        },
      ],
    },
    {
      tag: 'igcse-04-case-studies-brine-acid',
      tags: [
        'brine-electrolysis',
        'chlor-alkali',
        'dilute-sulfuric-acid',
        'copper-sulfate',
        'inert-electrodes',
      ],
      title: '4. Case Studies: Brine, Dilute Acid & Aqueous Copper Sulfate',
      summary:
        'Detailed analysis of three compulsory Cambridge case studies: electrolysis of concentrated NaCl (brine), dilute sulfuric acid in a Hoffmann voltameter, and aqueous copper(II) sulfate with inert electrodes.',
      content: `### 🧪 Case Study A: Electrolysis of Concentrated Aqueous Sodium Chloride (Brine)

The **chlor-alkali industry** is one of the most commercially important chemical processes worldwide:
- **Electrolyte**: Concentrated $\\ce{NaCl(aq)}$.
- **Ions present**: $\\ce{Na+}, \\ce{Cl-}$ (from salt) and $\\ce{H+}, \\ce{OH-}$ (from water).
- **At the Cathode (-)**:
  - $\\ce{Na+}$ vs $\\ce{H+}$: Sodium is far more reactive than hydrogen.
  - $\\ce{H+}$ is selectively discharged:
    $$2\\ce{H+(aq) + 2e- -> H2(g)}$$
  - **Observation**: Effervescence of colourless, odourless gas (gives 'squeaky pop' with a lighted splint).
- **At the Anode (+)**:
  - $\\ce{Cl-}$ vs $\\ce{OH-}$: Because the solution is concentrated, chloride ions are preferentially discharged:
    $$2\\ce{Cl-(aq) -> Cl2(g) + 2e-}$$
  - **Observation**: Effervescence of pale yellow-green gas with a choking bleach smell (bleaches damp litmus paper white).
- **What remains in solution?**:
  - As $\\ce{H+}$ and $\\ce{Cl-}$ ions are removed, $\\ce{Na+}$ and $\\ce{OH-}$ ions remain behind.
  - They form **aqueous sodium hydroxide ($\\ce{NaOH(aq)}$)**, making the solution strongly alkaline (turns universal indicator purple, $\\text{pH} \\approx 13-14$).

---

### 🏭 Industrial Uses of the Three Brine Products:
1. **Chlorine gas ($\\ce{Cl2}$)**: Water purification/sterilisation, manufacture of PVC plastic, bleach ($\\ce{NaClO}$), and hydrochloric acid.
2. **Hydrogen gas ($\\ce{H2}$)**: Manufacture of ammonia in the Haber process ($\\ce{N2 + 3H2 -> 2NH3}$), fuel cells, and margarine production (hydrogenation of vegetable oils).
3. **Sodium hydroxide ($\\ce{NaOH}$)**: Soap and detergent manufacturing, paper making, and aluminium extraction (Bayer process).

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-brine-electrolysis-title igcse-t04-brine-electrolysis-desc" data-diagram="igcse-t04-brine-electrolysis" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-brine-electrolysis-title">Industrial electrolysis of concentrated aqueous sodium chloride (brine)</title>
  <desc id="igcse-t04-brine-electrolysis-desc">Diagram showing the chlor-alkali process with chlorine gas produced at the anode, hydrogen gas at the cathode, and sodium hydroxide left in solution.</desc>

  <defs>
    <marker id="igcse-t04-brine-electrolysis-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Container -->
  <path d="M 148 110 Q 160 114 160 128 L 160 352 Q 160 370 178 370 L 622 370 Q 640 370 640 352 L 640 128 Q 640 114 652 110" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Liquid Brine Fill -->
  <path d="M 161 160 L 639 160 L 639 352 Q 639 369 622 369 L 178 369 Q 161 369 161 352 Z" fill="#d6f0fb" stroke="none" />
  <line x1="161" y1="160" x2="639" y2="160" stroke="#1f2937" stroke-width="1.5" />

  <!-- Electrodes -->
  <rect x="230" y="90" width="26" height="230" fill="#4b5563" stroke="#1f2937" stroke-width="2" />
  <rect x="544" y="90" width="26" height="230" fill="#4b5563" stroke="#1f2937" stroke-width="2" />
  <text x="243" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE (+)</text>
  <text x="557" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CATHODE (-)</text>

  <!-- Gas bubbles: Chlorine at Anode (Yellow-green bubbles) -->
  <circle cx="218" cy="200" r="7" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="268" cy="180" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="220" cy="150" r="9" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="264" cy="130" r="8" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />

  <!-- Gas bubbles: Hydrogen at Cathode (Colorless bubbles) -->
  <circle cx="532" cy="200" r="7" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="582" cy="180" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="534" cy="150" r="9" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="580" cy="130" r="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />

  <!-- Left Product Box: Chlorine Gas -->
  <g data-role="text-box" data-box="20 180 196 90">
    <rect x="20" y="180" width="196" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="118" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">CHLORINE GAS (Cl2)</text>
    <text x="118" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">PALE YELLOW-GREEN</text>
    <text x="118" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2Cl- -> Cl2 + 2e-</text>
  </g>
  <path d="M 216 225 L 226 215" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-brine-electrolysis-arrowhead)" />

  <!-- Right Product Box: Hydrogen Gas -->
  <g data-role="text-box" data-box="584 180 196 90">
    <rect x="584" y="180" width="196" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="682" y="204" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">HYDROGEN GAS (H2)</text>
    <text x="682" y="226" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">COLOURLESS GAS</text>
    <text x="682" y="248" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2H+ + 2e- -> H2</text>
  </g>
  <path d="M 584 225 L 574 215" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-brine-electrolysis-arrowhead)" />

  <!-- Center Product Box: Remaining NaOH Solution -->
  <g data-role="text-box" data-box="260 220 280 88">
    <rect x="260" y="220" width="280" height="88" rx="6" fill="#cdb8f5" stroke="#1f2937" stroke-width="1.5" />
    <text x="400" y="244" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ALKALINE SOLUTION FORMED</text>
    <text x="400" y="266" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">AQUEOUS NaOH FORMED</text>
    <text x="400" y="288" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Na+ AND OH- REMAIN</text>
  </g>
</svg>

---

### 🧪 Case Study B: Electrolysis of Dilute Sulfuric Acid (Hoffmann Voltameter)

Electrolysing dilute sulfuric acid ($\\ce{H2SO4(aq)}$) is essentially the **electrolysis of water**:
- **Ions present**: $\\ce{H+}, \\ce{SO4^{2-}}, \\ce{OH-}$.
- **At Cathode (-)**: $2\\ce{H+(aq) + 2e- -> H2(g)}$
- **At Anode (+)**: $4\\ce{OH-(aq) -> O2(g) + 2H2O(l) + 4e-}$
- **Volume Ratio Calculation (Crucial Paper 4 Point)**:
  - For every $4\\text{ electrons}$ transferred:
    - At anode: $1\\text{ molecule of } \\ce{O2}$ is produced.
    - At cathode: $2\\text{ molecules of } \\ce{H2}$ are produced ($4\\ce{H+ + 4e- -> 2H2}$).
  - By Avogadro's law, gas volume is directly proportional to number of moles:
    $$\\mathbf{\\text{Volume of } \\ce{H2} : \\text{Volume of } \\ce{O2} = 2 : 1}$$

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-dilute-acid-hoffmann-title igcse-t04-dilute-acid-hoffmann-desc" data-diagram="igcse-t04-dilute-acid-hoffmann" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-dilute-acid-hoffmann-title">Electrolysis of dilute sulfuric acid showing 2 to 1 gas volume ratio</title>
  <desc id="igcse-t04-dilute-acid-hoffmann-desc">Diagram of gas collection tubes during the electrolysis of dilute acid showing double the volume of hydrogen compared to oxygen.</desc>

  <defs>
    <marker id="igcse-t04-dilute-acid-hoffmann-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Left Limb: Cathode Tube (Collecting H2 gas) -->
  <rect x="220" y="40" width="70" height="280" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Gas space at top of cathode tube (height = 120px -> 2 volumes) -->
  <rect x="222" y="42" width="66" height="120" fill="#fde58a" stroke="none" />
  <rect x="222" y="162" width="66" height="156" fill="#d6f0fb" stroke="none" />
  <line x1="222" y1="162" x2="288" y2="162" stroke="#1f2937" stroke-width="2" stroke-dasharray="4 2" />

  <!-- Right Limb: Anode Tube (Collecting O2 gas) -->
  <rect x="510" y="40" width="70" height="280" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <!-- Gas space at top of anode tube (height = 60px -> 1 volume) -->
  <rect x="512" y="42" width="66" height="60" fill="#b5efb0" stroke="none" />
  <rect x="512" y="102" width="66" height="216" fill="#d6f0fb" stroke="none" />
  <line x1="512" y1="102" x2="578" y2="102" stroke="#1f2937" stroke-width="2" stroke-dasharray="4 2" />

  <!-- Bottom Connecting Tube -->
  <path d="M 290 280 L 510 280 L 510 320 L 290 320 Z" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />

  <!-- Electrodes at bottom -->
  <rect x="248" y="270" width="14" height="60" fill="#4b5563" stroke="#1f2937" stroke-width="2" />
  <rect x="538" y="270" width="14" height="60" fill="#4b5563" stroke="#1f2937" stroke-width="2" />
  <text x="255" y="354" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CATHODE (-)</text>
  <text x="545" y="354" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE (+)</text>

  <!-- Labels on gas volumes -->
  <g data-role="text-box" data-box="24 80 180 84">
    <rect x="24" y="80" width="180" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="114" y="104" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#2f7fc1">HYDROGEN (H2)</text>
    <text x="114" y="126" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">2 VOLUMES</text>
    <text x="114" y="148" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">SQUEAKY POP TEST</text>
  </g>
  <path d="M 204 110 L 220 110" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-dilute-acid-hoffmann-arrowhead)" />

  <g data-role="text-box" data-box="596 50 180 84">
    <rect x="596" y="50" width="180" height="84" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="686" y="74" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#d64545">OXYGEN (O2)</text>
    <text x="686" y="96" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">1 VOLUME</text>
    <text x="686" y="118" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">RELIGHTS SPLINT</text>
  </g>
  <path d="M 596 75 L 580 75" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-dilute-acid-hoffmann-arrowhead)" />

  <!-- Summary Box -->
  <g data-role="text-box" data-box="270 140 260 66">
    <rect x="270" y="140" width="260" height="66" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="400" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">RATIO H2 : O2 = 2 : 1</text>
    <text x="400" y="188" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FROM 2H2O -> 2H2 + O2</text>
  </g>
</svg>

---

### 🧪 Case Study C: Aqueous Copper(II) Sulfate with Inert Electrodes
- **Ions present**: $\\ce{Cu^{2+}, SO4^{2-}, H+, OH-}$.
- **Cathode (-)**: $\\ce{Cu^{2+}}$ is less reactive than $\\ce{H+}$, so $\\ce{Cu^{2+}}$ is discharged:
  $$\\ce{Cu^{2+}(aq) + 2e- -> Cu(s)}$$
  **Observation**: Pink-brown copper metal deposits on the graphite electrode.
- **Anode (+)**: Sulfate is not a halide, so $\\ce{OH-}$ is discharged:
  $$4\\ce{OH-(aq) -> O2(g) + 2H2O(l) + 4e-}$$
  **Observation**: Colourless bubbles of oxygen gas form.
- **Solution Change**:
  - The blue colour of $\\ce{CuSO4(aq)}$ is caused by $\\ce{Cu^{2+}}$ ions.
  - As $\\ce{Cu^{2+}}$ ions are removed from solution and replaced by $\\ce{H+}$, the **blue colour gradually fades until the solution becomes completely colourless**.
  - The remaining solution is dilute sulfuric acid ($\\ce{H2SO4(aq)}$).
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-cases-q1',
          type: 'multiple_choice',
          question:
            'During the industrial electrolysis of brine, what substance remains in the solution after Cl2 and H2 gases have evolved?',
          options: [
            'Sodium hydroxide (NaOH)',
            'Sodium metal (Na)',
            'Hydrochloric acid (HCl)',
            'Pure water (H2O)',
          ],
          correctAnswer: 0,
          explanation:
            'When H+ ions and Cl- ions are discharged as H2 and Cl2 gases respectively, the remaining Na+ and OH- ions combine to form an alkaline solution of aqueous sodium hydroxide.',
          misconceptionTarget: 'Believing sodium metal precipitates in water',
        },
      ],
    },
    {
      tag: 'igcse-04-electroplating-refining',
      tags: [
        'electroplating',
        'copper-refining',
        'active-electrodes',
        'anode-sludge',
        'copper-sulfate',
      ],
      title: '5. Copper Refining & Electroplating with Active Electrodes',
      summary:
        'Contrasting inert vs active electrodes, mastering the 3 golden rules of electroplating, and examining industrial electrolytic refining of copper.',
      content: `### ⚙️ Inert vs Active (Non-Inert) Electrodes

- **Inert Electrodes** (Graphite / Platinum): Do not take part in the chemical reaction; they merely provide a surface for electron transfer.
- **Active Electrodes** (e.g. Copper): The electrode metal itself takes part in the reaction. At the positive anode, the metal atoms dissolve into the electrolyte by losing electrons:
  $$\\ce{Cu(s) -> Cu^{2+}(aq) + 2e-}$$

---

### 🥄 The 3 Golden Rules of Electroplating

**Electroplating** is the process of coating one metal with a thin layer of another metal using electrolysis.
Purposes:
1. **Corrosion resistance** (e.g. tin-plated steel food cans, chromium-plated steel car taps).
2. **Improved aesthetic appearance** (e.g. silver-plated cutlery, gold-plated jewellery).

> [!IMPORTANT]
> ### 🏆 The 3 Non-Negotiable Electroplating Rules
> 1. **Cathode (-)**: The **object to be plated** (e.g. steel spoon, brass key). It must be thoroughly cleaned and degreased first.
> 2. **Anode (+)**: A pure piece of the **plating metal** (e.g. pure silver or pure copper).
> 3. **Electrolyte**: An aqueous solution of a **soluble salt of the plating metal** (e.g. silver nitrate $\\ce{AgNO3}$ for silver plating; copper(II) sulfate $\\ce{CuSO4}$ for copper plating).

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-copper-electroplating-title igcse-t04-copper-electroplating-desc" data-diagram="igcse-t04-copper-electroplating" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-copper-electroplating-title">Electroplating a metal spoon with copper</title>
  <desc id="igcse-t04-copper-electroplating-desc">Apparatus for electroplating showing a copper anode, steel spoon cathode, and copper(II) sulfate electrolyte.</desc>

  <defs>
    <marker id="igcse-t04-copper-electroplating-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Power Supply -->
  <rect x="350" y="30" width="100" height="34" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="52" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DC SUPPLY</text>

  <!-- Wires -->
  <path d="M 350 47 L 260 47 L 260 120" fill="none" stroke="#1f2937" stroke-width="2" />
  <path d="M 450 47 L 540 47 L 540 120" fill="none" stroke="#1f2937" stroke-width="2" />

  <!-- Beaker -->
  <path d="M 188 130 Q 200 134 200 148 L 200 332 Q 200 350 218 350 L 582 350 Q 600 350 600 332 L 600 148 Q 600 134 612 130" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <path d="M 201 170 L 599 170 L 599 332 Q 599 349 582 349 L 218 349 Q 201 349 201 332 Z" fill="#d6f0fb" stroke="none" />
  <line x1="201" y1="170" x2="599" y2="170" stroke="#1f2937" stroke-width="1.5" />

  <!-- Anode (+): Pure Copper Strip -->
  <rect x="246" y="100" width="28" height="210" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="260" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE (+)</text>

  <!-- Cathode (-): Steel Spoon -->
  <path d="M 536 100 L 544 100 L 544 240 Q 556 260 556 280 Q 556 305 540 305 Q 524 305 524 280 Q 524 260 536 240 Z" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <!-- Thin copper layer deposited on spoon -->
  <path d="M 544 235 Q 558 258 558 280 Q 558 307 540 307 Q 522 307 522 280 Q 522 258 536 235" fill="none" stroke="#fcc68b" stroke-width="4" />
  <text x="540" y="90" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CATHODE (-)</text>

  <!-- Left Tag: Anode Reaction -->
  <g data-role="text-box" data-box="20 160 210 90">
    <rect x="20" y="160" width="210" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="125" y="184" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE DISSOLVES</text>
    <text x="125" y="206" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ANODE LOSES MASS</text>
    <text x="125" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Cu -> Cu2+ + 2e-</text>
  </g>
  <path d="M 230 205 L 244 205" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-copper-electroplating-arrowhead)" />

  <!-- Right Tag: Cathode Reaction -->
  <g data-role="text-box" data-box="570 160 210 90">
    <rect x="570" y="160" width="210" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="675" y="184" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">SPOON IS PLATED</text>
    <text x="675" y="206" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">CATHODE GAINS MASS</text>
    <text x="675" y="228" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Cu2+ + 2e- -> Cu</text>
  </g>
  <path d="M 570 205 L 556 205" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-copper-electroplating-arrowhead)" />

  <!-- Center Tag: Electrolyte Concentration Constant -->
  <g data-role="text-box" data-box="260 250 280 64">
    <rect x="260" y="250" width="280" height="64" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="400" y="274" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ELECTROLYTE: CuSO4(aq)</text>
    <text x="400" y="296" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">BLUE COLOR UNCHANGED</text>
  </g>
</svg>

---

### 🏭 Industrial Refining (Purification) of Copper

Copper extracted from ores is only around $99\\%$ pure ("blister copper"). It contains impurities like zinc, iron, silver, and gold. Even $0.1\\%$ impurity drastically reduces electrical conductivity, so it must be refined electrolytically to $99.99\\%$ purity for electrical wiring:
- **Anode (+)**: Large slab of **impure copper**.
  - Copper atoms lose electrons and dissolve: $\\ce{Cu(s) -> Cu^{2+}(aq) + 2e-}$
  - Reactive impurities (e.g. $\\ce{Zn, Fe}$) also lose electrons and enter solution as $\\ce{Zn^{2+}}$ and $\\ce{Fe^{2+}}$.
  - Unreactive precious metals (e.g. $\\ce{Ag, Au}$) cannot lose electrons at this voltage. They fall off as solid particles and collect beneath the anode as **anode sludge (anode slime)**. This sludge is collected and sold to recover silver and gold!
- **Cathode (-)**: Thin starter sheet of **pure copper**.
  - $\\ce{Cu^{2+}}$ ions are selectively reduced because copper is less reactive than zinc and iron:
    $$\\ce{Cu^{2+}(aq) + 2e- -> Cu(s)}$$
  - Impurity ions ($\\ce{Zn^{2+}, Fe^{2+}}$) remain in solution because they are much more reactive than copper and require a far higher voltage to discharge.
  - The cathode sheet grows dramatically into a thick block of $99.99\\%$ pure copper!
- **Concentration of electrolyte**: The concentration of $\\ce{CuSO4(aq)}$ remains essentially unchanged throughout the process.

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-copper-refining-title igcse-t04-copper-refining-desc" data-diagram="igcse-t04-copper-refining" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-copper-refining-title">Industrial electrolytic refining of copper</title>
  <desc id="igcse-t04-copper-refining-desc">Diagram showing an impure copper anode dissolving, pure copper depositing at the cathode, and anode sludge settling below.</desc>

  <defs>
    <marker id="igcse-t04-copper-refining-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- Power Supply -->
  <rect x="350" y="30" width="100" height="34" rx="4" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="52" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">DC POWER SUPPLY</text>

  <!-- Wires -->
  <path d="M 350 47 L 260 47 L 260 110" fill="none" stroke="#1f2937" stroke-width="2" />
  <path d="M 450 47 L 540 47 L 540 110" fill="none" stroke="#1f2937" stroke-width="2" />

  <!-- Vat Container -->
  <rect x="180" y="120" width="440" height="230" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="182" y="150" width="436" height="198" rx="6" fill="#d6f0fb" stroke="none" />
  <line x1="182" y1="150" x2="618" y2="150" stroke="#1f2937" stroke-width="1.5" />

  <!-- Impure Copper Anode (Thick, pitted block) -->
  <rect x="236" y="90" width="48" height="200" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="260" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">IMPURE COPPER ANODE</text>

  <!-- Pure Copper Cathode (Thin starting sheet that has thickened) -->
  <rect x="520" y="90" width="40" height="200" fill="#fcc68b" stroke="#1f2937" stroke-width="2" />
  <text x="540" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">PURE COPPER CATHODE</text>

  <!-- Anode Sludge (sludge pile beneath anode) -->
  <path d="M 230 348 Q 260 328 290 348 Z" fill="#8a939c" stroke="#1f2937" stroke-width="1.5" />

  <!-- Left Callout: Anode Sludge Details -->
  <g data-role="text-box" data-box="20 230 200 90">
    <rect x="20" y="230" width="200" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="120" y="254" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE SLUDGE</text>
    <text x="120" y="276" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">VALUABLE METALS</text>
    <text x="120" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">Ag AND Au SETTLE</text>
  </g>
  <path d="M 220 280 L 236 336" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-copper-refining-arrowhead)" />

  <!-- Right Callout: Pure Deposit -->
  <g data-role="text-box" data-box="580 230 200 90">
    <rect x="580" y="230" width="200" height="90" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="680" y="254" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">PURE COPPER DEPOSIT</text>
    <text x="680" y="276" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">99.99% PURE METAL</text>
    <text x="680" y="298" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">FOR WIRING CABLES</text>
  </g>
  <path d="M 580 280 L 562 250" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t04-copper-refining-arrowhead)" />

  <!-- Center Tag: Constant CuSO4 -->
  <g data-role="text-box" data-box="290 170 220 56">
    <rect x="290" y="170" width="220" height="56" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="400" y="192" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">AQUEOUS CuSO4</text>
    <text x="400" y="210" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">COLOR UNCHANGED</text>
  </g>
</svg>
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-refining-q1',
          type: 'multiple_choice',
          question:
            'A student wants to electroplate a steel key with nickel. Which arrangement is correct?',
          options: [
            'Cathode: steel key | Anode: pure nickel | Electrolyte: aqueous nickel sulfate',
            'Cathode: pure nickel | Anode: steel key | Electrolyte: aqueous nickel sulfate',
            'Cathode: steel key | Anode: graphite | Electrolyte: aqueous copper sulfate',
            'Cathode: pure nickel | Anode: steel key | Electrolyte: dilute sulfuric acid',
          ],
          correctAnswer: 0,
          explanation:
            'Remember the electroplating rule: the object to be plated is always the cathode (-), the plating metal is the anode (+), and the electrolyte is a solution containing the plating metal ions.',
          misconceptionTarget: 'Reversing the cathode and anode positions during electroplating',
        },
      ],
    },
    {
      tag: 'igcse-04-simple-cells',
      tags: [
        'simple-chemical-cells',
        'galvanic-cells',
        'potential-difference',
        'reactivity-voltage',
      ],
      title: '6. Simple Chemical Cells & Potential Difference',
      summary:
        'Understanding how simple cells convert chemical energy into electrical energy, and relating the voltage produced to the distance between two metals in the reactivity series.',
      content: `### 🔋 Electrolytic Cell vs Simple Chemical (Electrochemical) Cell

It is vital not to confuse an **electrolytic cell** with a **simple chemical cell**:

| Feature | Electrolytic Cell | Simple Chemical Cell (Electrochemical) |
| :--- | :--- | :--- |
| **Energy Conversion** | Electrical energy $\\to$ Chemical energy | Chemical energy $\\to$ Electrical energy |
| **Power Supply** | Requires external DC battery/source | Produces electricity (acts as a battery itself) |
| **Electrodes** | Often identical inert rods (e.g. 2 graphite rods) | **Two different metals** of differing reactivity |
| **Electrolyte** | Decomposed by the current | Conducts ions between the two metals |

---

### ⚡ How a Simple Cell Generates Voltage

When two different metals are dipped into an electrolyte and connected by an external circuit:
1. The **more reactive metal** has a greater tendency to lose electrons and form positive ions (oxidation):
   $$\\ce{Mg(s) -> Mg^{2+}(aq) + 2e-}$$
   - This electrode becomes the **negative terminal** of the cell because electrons accumulate on it.
2. The released electrons flow through the external wire towards the **less reactive metal** (positive terminal).
3. At the less reactive metal, positive ions in the electrolyte (usually $\\ce{H+}$ from an acid) receive the electrons (reduction):
   $$2\\ce{H+(aq) + 2e- -> H2(g)}$$

---

### 📊 Reactivity Difference Controls Cell Voltage

The voltage (potential difference) generated by a simple chemical cell depends directly on the **difference in reactivity** between the two chosen metals:
- **Rule 1**: The further apart the two metals are in the reactivity series, the **larger the voltage** generated!
- **Rule 2**: If two identical metal strips are used (e.g. Copper and Copper), the voltage is **zero (0.0 V)** because both metals have identical tendencies to lose electrons.

| Metal Pair | Relative Separation in Reactivity Series | Typical Voltage Produced | Negative Terminal (Anode) |
| :--- | :--- | :--- | :--- |
| **Magnesium and Copper** | Large separation ($\\ce{Mg}$ is very reactive, $\\ce{Cu}$ is unreactive) | $\\approx +2.7\\text{ V}$ (Highest) | Magnesium ($\\ce{Mg}$) |
| **Zinc and Copper** | Moderate separation | $\\approx +1.1\\text{ V}$ | Zinc ($\\ce{Zn}$) |
| **Iron and Copper** | Small separation | $\\approx +0.8\\text{ V}$ | Iron ($\\ce{Fe}$) |
| **Lead and Copper** | Very small separation | $\\approx +0.5\\text{ V}$ | Lead ($\\ce{Pb}$) |
| **Copper and Copper** | Zero separation (identical metals) | $\\mathbf{0.0\\text{ V}}$ | Neither |
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-cells-q1',
          type: 'multiple_choice',
          question:
            'Which pair of metals dipped in dilute sulfuric acid will produce the highest voltage in a simple chemical cell?',
          options: [
            'Magnesium and Silver',
            'Zinc and Iron',
            'Copper and Silver',
            'Iron and Lead',
          ],
          correctAnswer: 0,
          explanation:
            'The voltage produced by a simple cell is greatest when the two metals are furthest apart in the reactivity series. Magnesium is very high in the series, while silver is near the very bottom.',
          misconceptionTarget: 'Picking two metals close together in the reactivity series',
        },
      ],
    },
    {
      tag: 'igcse-04-fuel-cells',
      tags: [
        'fuel-cells',
        'hydrogen-fuel-cell',
        'sustainable-transport',
        'fuel-cell-half-equations',
      ],
      title: '7. Hydrogen-Oxygen Fuel Cells & Sustainable Transport',
      summary:
        'Structure and operation of the hydrogen-oxygen fuel cell, writing its half-equations, and evaluating advantages and challenges for clean vehicle transport.',
      content: `### 🚀 What is a Hydrogen-Oxygen Fuel Cell?

A **hydrogen-oxygen fuel cell** is an electrochemical cell that makes electricity by reacting hydrogen fuel with oxygen from the air continuously, producing **water as the only chemical product**:
$$\\mathbf{2\\ce{H2(g) + O2(g) -> 2H2O(l)}}$$

Unlike conventional batteries that run flat and must be recharged, a fuel cell produces electricity **continuously** for as long as fuel ($\\ce{H2}$) and oxidant ($\\ce{O2}$) are supplied to it!

---

### 🔬 Chemistry & Half-Equations of the Fuel Cell

The cell consists of two porous carbon electrodes containing platinum catalysts separated by an electrolyte:

#### In an Acidic Electrolyte (CIE Syllabus Standard):
- **At the Anode (Fuel inlet)**: Hydrogen gas is oxidised:
  $$2\\ce{H2(g) -> 4H+(aq) + 4e-}$$
- **At the Cathode (Air/Oxygen inlet)**: Oxygen gas is reduced:
  $$\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)}$$

#### In an Alkaline Electrolyte (Alternative format):
- **Anode**: $2\\ce{H2(g) + 4OH-(aq) -> 4H2O(l) + 4e-}$
- **Cathode**: $\\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)}$

In both media, adding the two half-equations gives the exact same overall reaction:
$$\\mathbf{2\\ce{H2(g) + O2(g) -> 2H2O(l)}}$$

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t04-hydrogen-fuel-cell-title igcse-t04-hydrogen-fuel-cell-desc" data-diagram="igcse-t04-hydrogen-fuel-cell" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t04-hydrogen-fuel-cell-title">Structure and operation of a hydrogen-oxygen fuel cell</title>
  <desc id="igcse-t04-hydrogen-fuel-cell-desc">Diagram showing hydrogen fuel entering the anode, oxygen entering the cathode, electron flow through an electric motor, and clean water exiting.</desc>

  <defs>
    <marker id="igcse-t04-hydrogen-fuel-cell-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- External Circuit with Motor / Load at top -->
  <circle cx="400" cy="60" r="20" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="400" y="66" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="16" letter-spacing="0.8" fill="#1f2937">M</text>
  <text x="400" y="30" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">ELECTRIC MOTOR</text>

  <!-- External Wire from Anode to Cathode -->
  <path d="M 310 120 L 310 60 L 380 60" fill="none" stroke="#1f2937" stroke-width="2" />
  <path d="M 420 60 L 490 60 L 490 120" fill="none" stroke="#1f2937" stroke-width="2" />

  <!-- Electron Flow Indicators on Wires -->
  <path d="M 310 95 L 310 70" fill="none" stroke="#3f8f46" stroke-width="2" marker-end="url(#igcse-t04-hydrogen-fuel-cell-arrowhead)" />
  <path d="M 490 70 L 490 95" fill="none" stroke="#3f8f46" stroke-width="2" marker-end="url(#igcse-t04-hydrogen-fuel-cell-arrowhead)" />
  <text x="260" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ELECTRON FLOW</text>
  <text x="540" y="80" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ELECTRON FLOW</text>

  <!-- Cell Body Outer Shell -->
  <rect x="220" y="110" width="360" height="240" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- Anode (Left Porous Electrode) -->
  <rect x="294" y="110" width="32" height="240" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <!-- Central Electrolyte Membrane -->
  <rect x="326" y="110" width="148" height="240" fill="#d6f0fb" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="220" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ELECTROLYTE</text>
  <text x="400" y="240" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">H+ IONS FLOW ->></text>
  <!-- Cathode (Right Porous Electrode) -->
  <rect x="474" y="110" width="32" height="240" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />

  <!-- Hydrogen Fuel Input (Left) -->
  <g data-role="text-box" data-box="20 140 210 76">
    <rect x="20" y="140" width="210" height="76" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
    <text x="125" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HYDROGEN FUEL IN</text>
    <text x="125" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">2H2 -> 4H+ + 4e-</text>
  </g>
  <path d="M 230 178 L 290 178" fill="none" stroke="#4b5563" stroke-width="2" marker-end="url(#igcse-t04-hydrogen-fuel-cell-arrowhead)" />

  <!-- Oxygen / Air Input (Right) -->
  <g data-role="text-box" data-box="570 140 210 76">
    <rect x="570" y="140" width="210" height="76" rx="6" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
    <text x="675" y="165" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">OXYGEN / AIR IN</text>
    <text x="675" y="190" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">O2 + 4e- -> 2H2O</text>
  </g>
  <path d="M 570 178 L 510 178" fill="none" stroke="#4b5563" stroke-width="2" marker-end="url(#igcse-t04-hydrogen-fuel-cell-arrowhead)" />

  <!-- Water Output (Bottom right) -->
  <g data-role="text-box" data-box="570 260 210 76">
    <rect x="570" y="260" width="210" height="76" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="675" y="285" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">WATER EXHAUST OUT</text>
    <text x="675" y="310" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#3f8f46">ONLY PRODUCT: H2O</text>
  </g>
  <path d="M 510 298 L 568 298" fill="none" stroke="#4b5563" stroke-width="2" marker-end="url(#igcse-t04-hydrogen-fuel-cell-arrowhead)" />

  <!-- Anode / Cathode Titles -->
  <text x="310" y="375" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#d64545">ANODE (-)</text>
  <text x="490" y="375" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#2f7fc1">CATHODE (+)</text>
</svg>

---

### ⚖️ Fuel Cells vs Petrol/Diesel Engines: Cambridge Evaluation Points

In Paper 4 theory, Cambridge frequently asks students to **evaluate fuel cells compared with conventional internal combustion engines (petrol/diesel)**:

| Factor | Hydrogen-Oxygen Fuel Cell | Petrol / Diesel Internal Combustion Engine |
| :--- | :--- | :--- |
| **Tailpipe Emissions** | **Zero harmful emissions**: Only pure water ($\\ce{H2O}$) is emitted. | Produces $\\ce{CO2}$ (greenhouse gas), $\\ce{CO}$ (toxic), unburnt hydrocarbons, soot/particulates, and acidic $\\ce{NO_x}$. |
| **Energy Efficiency** | High efficiency ($\\approx 40-60\\%$), as chemical energy converts directly to electricity without combustion thermal losses. | Low efficiency ($\\approx 20-30\\%$); huge energy loss as waste heat through radiator and friction. |
| **Mechanical Reliability** | Operates quietly with **no moving parts**, reducing mechanical wear and breakdown. | Noisy with hundreds of high-speed reciprocating moving parts requiring lubrication and regular maintenance. |
| **Fuel Storage & Safety** | **Major Challenge**: Hydrogen is a low-density gas requiring heavy high-pressure cylinders ($350-700\\text{ bar}$) or cryogenic cooling ($-253^\\circ\\text{C}$); highly explosive risk in crashes. | Liquid fuel is easy and safe to store at room temperature in simple plastic/metal fuel tanks. |
| **Refuelling Infrastructure** | Very few hydrogen refuelling stations currently exist globally. | Millions of petrol/diesel stations exist worldwide on every major highway. |
| **Environmental Footprint** | Currently, most industrial hydrogen is produced by steam reforming fossil natural gas (producing $\\ce{CO2}$). Only "green hydrogen" from water electrolysis powered by renewables is truly zero-emission. | Directly consumes non-renewable crude oil reserves. |
`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-04-fuel-q1',
          type: 'multiple_choice',
          question:
            'What is the only chemical product formed when a hydrogen-oxygen fuel cell operates in a vehicle?',
          options: [
            'Water (H2O)',
            'Carbon dioxide (CO2)',
            'Hydrogen peroxide (H2O2)',
            'Methane (CH4)',
          ],
          correctAnswer: 0,
          explanation:
            'The reaction between hydrogen fuel and oxygen in a fuel cell produces exclusively water (2H2 + O2 -> 2H2O), with zero carbon emissions at the tailpipe.',
          misconceptionTarget: 'Thinking fuel cells produce carbon emissions like combustion engines',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-04-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme', 'examiner-tips'],
      title: '8. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Structured Theory) questions on molten electrolysis, selective discharge, electroplating, and fuel cells.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
Molten potassium iodide is electrolysed using inert carbon electrodes.
What are the products formed at the positive anode and the negative cathode?

- **A**: Anode: Potassium | Cathode: Iodine
- **B**: Anode: Iodine | Cathode: Potassium
- **C**: Anode: Oxygen | Cathode: Hydrogen
- **D**: Anode: Iodine | Cathode: Hydrogen

> [!TIP]
> ### 💡 Mark Scheme & Step-by-Step Breakdown
> - **Correct Answer: B**
> - **Working**:
>   1. The compound is **molten** potassium iodide (no water present, so no $\\ce{H+}$ or $\\ce{OH-}$ ions).
>   2. The ions present are $\\ce{K+}$ and $\\ce{I-}$.
>   3. Positive potassium ions ($\\ce{K+}$) move to the negative cathode: $\\ce{K+ + e- -> K}$ (Potassium metal).
>   4. Negative iodide ions ($\\ce{I-}$) move to the positive anode: $\\ce{2I- -> I2 + 2e-}$ (Iodine).

---

### 📝 Question 2 (Paper 2 Multiple Choice — 1 Mark)
A concentrated aqueous solution of sodium bromide is electrolysed using graphite electrodes.
Which row correctly describes the observations at the cathode and anode?

- **A**: Cathode: Colourless gas bubbles | Anode: Red-brown colour formed
- **B**: Cathode: Silvery deposit | Anode: Colourless gas bubbles
- **C**: Cathode: Colourless gas bubbles | Anode: Colourless gas bubbles
- **D**: Cathode: Silvery deposit | Anode: Red-brown colour formed

> [!TIP]
> ### 💡 Mark Scheme & Distractor Analysis
> - **Correct Answer: A**
> - **Reasoning**:
>   - Ions present: $\\ce{Na+}, \\ce{Br-}, \\ce{H+}, \\ce{OH-}$.
>   - At cathode: Sodium is more reactive than hydrogen, so $\\ce{H+}$ is discharged forming colourless bubbles of hydrogen gas ($2\\ce{H+ + 2e- -> H2}$).
>   - At anode: Bromide is a halide in concentrated solution, so $\\ce{Br-}$ is discharged forming red-brown bromine ($2\\ce{Br- -> Br2 + 2e-}$).

---

### 📝 Question 3 (Paper 4 Structured Theory — 6 Marks)
Copper(II) sulfate solution, $\\ce{CuSO4(aq)}$, is electrolysed in two separate experiments:
- **Experiment 1**: Using inert graphite electrodes.
- **Experiment 2**: Using active copper electrodes.

**(a) State what is observed at the negative cathode in Experiment 1 and write the ionic half-equation for the reaction. [2]**
> **Mark Scheme**:
> - **Observation**: Pink-brown / reddish-brown solid deposit on the electrode. [1]
> - **Half-equation**: $\\ce{Cu^{2+} + 2e- -> Cu}$ [1]

**(b) State what is observed at the positive anode in Experiment 1 and write the ionic half-equation. [2]**
> **Mark Scheme**:
> - **Observation**: Bubbles of colourless gas / effervescence. [1]
> - **Half-equation**: $4\\ce{OH- -> O2 + 2H2O + 4e-}$ [1]

**(c) Explain why the blue colour of the solution fades in Experiment 1 but remains unchanged in Experiment 2. [2]**
> **Mark Scheme**:
> - **Experiment 1**: The blue colour is due to $\\ce{Cu^{2+}}$ ions. As $\\ce{Cu^{2+}}$ ions are removed at the cathode and oxygen is produced at the anode, the concentration of $\\ce{Cu^{2+}}$ decreases, causing the blue colour to fade. [1]
> - **Experiment 2**: For every $\\ce{Cu^{2+}}$ ion deposited on the cathode, a $\\ce{Cu^{2+}}$ ion is formed by the dissolving copper anode, so the concentration of $\\ce{Cu^{2+}}$ ions remains constant. [1]

---

### 📝 Question 4 (Paper 4 Structured Theory — 6 Marks)
Hydrogen-oxygen fuel cells are being developed to power buses in modern cities.

**(a) State the overall chemical equation for the reaction that occurs in a hydrogen-oxygen fuel cell. [1]**
> **Mark Scheme**:
> - $2\\ce{H2(g) + O2(g) -> 2H2O(l)}$ [1]

**(b) Write the ionic half-equation for the reaction taking place at the negative anode in an acidic fuel cell. [1]**
> **Mark Scheme**:
> - $2\\ce{H2 -> 4H+ + 4e-}$ (or $\\ce{H2 -> 2H+ + 2e-}$) [1]

**(c) State two distinct advantages of using a hydrogen-oxygen fuel cell rather than a petrol engine to power a vehicle. [2]**
> **Mark Scheme** (any two from):
> 1. Water is the only chemical product / no greenhouse gases like $\\ce{CO2}$ emitted / no toxic pollutants like $\\ce{CO}$ or $\\ce{NO_x}$. [1]
> 2. Higher energy efficiency than internal combustion engines. [1]
> 3. Operates quietly / no noisy engine vibrations. [1]
> 4. Fewer moving parts / less mechanical wear and tear. [1]

**(d) State two practical disadvantages or challenges associated with using hydrogen as a vehicle fuel. [2]**
> **Mark Scheme** (any two from):
> 1. Hydrogen is difficult to store (requires heavy high-pressure cylinders or cryogenic temperatures). [1]
> 2. Hydrogen is highly flammable / risk of explosion in accidents. [1]
> 3. Lack of refuelling stations / infrastructure. [1]
> 4. Hydrogen is expensive to produce (often produced from fossil fuels like methane). [1]`,
    },
  ],
};
