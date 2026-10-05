/**
 * igcseTopic01.ts
 * Topic 1: Solids, Liquids & Gases
 * Curriculum: Cambridge (CIE) IGCSE Chemistry (0620)
 * Standard: The 5-Layer Pedagogical Architecture (Adapted for Cambridge Mark Schemes & Examiner Reports)
 */

import type { MaterialItem } from '../../materialsData';

export const IGCSE_TOPIC_1: MaterialItem = {
  id: 201,
  topic_number: 1,
  title: 'Solids, Liquids & Gases',
  slug: 'solids-liquids-gases',
  category: 'Physical Chemistry',
  level: 'IGCSE',
  readTimeMinutes: 25,
  summary:
    'Comprehensive study of the kinetic particle theory of matter, states of matter (solids, liquids, gases), phase changes and heating/cooling curves with latent heat plateaus, gas pressure and temperature effects, and rates of diffusion in liquids and gases relative to molecular mass (Mr).',
  allTags: [
    'kinetic-theory',
    'states-of-matter',
    'solids-liquids-gases',
    'particle-model',
    'melting-freezing',
    'boiling-evaporation',
    'condensation-sublimation',
    'heating-curves',
    'cooling-curves',
    'gas-pressure',
    'gas-volume',
    'diffusion',
    'molecular-mass-diffusion',
    'ammonia-hcl-diffusion',
  ],
  prerequisites: [
    {
      tag: 'igcse-01-kinetic-theory',
      tags: ['kinetic-theory', 'states-of-matter', 'particle-model'],
      title: '1. The Kinetic Particle Theory & States of Matter',
      summary:
        'Understanding how matter consists of moving particles and comparing particle arrangement, movement, and energy across solids, liquids, and gases.',
      content: `### 🎯 The Kinetic Particle Theory of Matter

All matter is composed of extremely small particles (atoms, molecules, or ions) that are in **continuous, random motion**. The physical properties of a substance depend on:
1. The **arrangement** of its particles.
2. The **movement** of its particles.
3. The **forces of attraction** holding the particles together.

---

### 📊 Comparative Summary of the Three States of Matter

| Property | Solid | Liquid | Gas |
| :--- | :--- | :--- | :--- |
| **Arrangement of particles** | **Regular lattice** pattern | **Random** / irregular arrangement | **Random** / irregular arrangement |
| **Movement of particles** | **Vibrate** about fixed positions | **Move and slide** past one another | Move **rapidly and randomly** in all directions |
| **Closeness / Spacing** | Packed very **closely** together | **Close** together (touching) | **Very far apart** (large empty spaces) |
| **Shape & Volume** | Fixed shape and fixed volume | Fixed volume, adopts container shape | No fixed shape, expands to fill container |
| **Relative Density** | High density | Medium to high density (water is an exception) | Very low density |
| **Compressibility** | Virtually incompressible | Virtually incompressible | **Easily compressed** (lots of empty space) |
| **Kinetic Energy** | Lowest kinetic energy | Greater kinetic energy | **Highest kinetic energy** (approx. $500\\text{ m/s}$ at room temperature) |

---

### 🔍 Particle Models in Solids, Liquids, and Gases

<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t01-states-particle-model-title igcse-t01-states-particle-model-desc" data-diagram="igcse-t01-states-particle-model" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t01-states-particle-model-title">Arrangement of particles in solids, liquids, and gases</title>
  <desc id="igcse-t01-states-particle-model-desc">Particle models showing solid in a regular tight lattice, liquid in an irregular close arrangement, and gas widely separated in random motion.</desc>

  <!-- SOLID CONTAINER -->
  <rect x="50" y="70" width="180" height="200" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="particle-region" data-bounds="51 71 229 269" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
    <circle cx="85" cy="115" r="8" />
    <circle cx="115" cy="115" r="8" />
    <circle cx="145" cy="115" r="8" />
    <circle cx="175" cy="115" r="8" />
    <circle cx="85" cy="145" r="8" />
    <circle cx="115" cy="145" r="8" />
    <circle cx="145" cy="145" r="8" />
    <circle cx="175" cy="145" r="8" />
    <circle cx="85" cy="175" r="8" />
    <circle cx="115" cy="175" r="8" />
    <circle cx="145" cy="175" r="8" />
    <circle cx="175" cy="175" r="8" />
    <circle cx="85" cy="205" r="8" />
    <circle cx="115" cy="205" r="8" />
    <circle cx="145" cy="205" r="8" />
    <circle cx="175" cy="205" r="8" />
    <circle cx="85" cy="235" r="8" />
    <circle cx="115" cy="235" r="8" />
    <circle cx="145" cy="235" r="8" />
    <circle cx="175" cy="235" r="8" />
  </g>
  <g data-role="text-box" data-box="50 286 180 44">
    <rect x="50" y="286" width="180" height="44" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="140" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">SOLID (REGULAR)</text>
  </g>

  <!-- LIQUID CONTAINER -->
  <rect x="310" y="70" width="180" height="200" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="particle-region" data-bounds="311 71 489 269" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
    <circle cx="340" cy="180" r="12" />
    <circle cx="375" cy="175" r="12" />
    <circle cx="410" cy="182" r="12" />
    <circle cx="445" cy="176" r="12" />
    <circle cx="355" cy="215" r="12" />
    <circle cx="390" cy="210" r="12" />
    <circle cx="425" cy="218" r="12" />
    <circle cx="460" cy="212" r="12" />
    <circle cx="342" cy="250" r="12" />
    <circle cx="378" cy="248" r="12" />
    <circle cx="415" cy="252" r="12" />
    <circle cx="452" cy="248" r="12" />
  </g>
  <g data-role="text-box" data-box="310 286 180 44">
    <rect x="310" y="286" width="180" height="44" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="400" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">LIQUID (RANDOM)</text>
  </g>

  <!-- GAS CONTAINER -->
  <rect x="570" y="70" width="180" height="200" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <g data-role="particle-region" data-bounds="571 71 749 269" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
    <circle cx="605" cy="105" r="12" />
    <circle cx="710" cy="120" r="12" />
    <circle cx="650" cy="165" r="12" />
    <circle cx="600" cy="225" r="12" />
    <circle cx="715" cy="240" r="12" />
  </g>
  <g data-role="text-box" data-box="570 286 180 44">
    <rect x="570" y="286" width="180" height="44" rx="6" fill="#ececec" stroke="#4b5563" stroke-width="1.5" />
    <text x="660" y="313" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GAS (FAR APART)</text>
  </g>
</svg>

> [!TIP]
> ### 💡 Cambridge Examiner Tips & Tricks: Key Keywords
> When answering exam questions about particle theory, Cambridge examiners award marks strictly based on precise terminology:
> - **Solid**: Particles are in a **fixed regular lattice** and only **vibrate about fixed positions**.
> - **Liquid**: Particles are **randomly arranged**, still **touching/close**, and **move/slide over each other**.
> - **Gas**: Particles are **randomly arranged**, **far apart**, and move **rapidly in all directions**.
> - ⚠️ Avoid vague words like *"move around freely"* for liquids — liquids are confined to the bottom of containers!`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-01-kt-q1',
          type: 'multiple_choice',
          question:
            'Which row correctly describes the movement and arrangement of particles in a liquid?',
          options: [
            'Movement: vibrate about a fixed position | Arrangement: regular lattice',
            'Movement: slide past one another | Arrangement: random / irregular',
            'Movement: move rapidly in all directions | Arrangement: regular lattice',
            'Movement: stationary | Arrangement: random / irregular',
          ],
          correctAnswer: 1,
          explanation:
            'In liquids, particles are close together in an irregular (random) arrangement, but they have enough energy to slide and roll over one another, allowing liquids to flow.',
          misconceptionTarget: 'Thinking liquid particles have fixed positions like solids',
        },
        {
          id: 'chk-igcse-01-kt-q2',
          type: 'true_false',
          question:
            'Gases have a much lower density than liquids because gas particles themselves are smaller in size than liquid particles.',
          correctAnswer: false,
          explanation:
            'False! The particles themselves do NOT change in size. Gases have a low density because the particles are separated by vast amounts of empty space, meaning far fewer particles occupy a given volume.',
          misconceptionTarget: 'Believing particles change size when changing state',
        },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'igcse-01-state-changes',
      tags: ['melting-freezing', 'boiling-evaporation', 'condensation-sublimation'],
      title: '2. State Changes & Phase Transitions',
      summary:
        'The physical processes of melting, freezing, boiling, evaporation, condensation, and sublimation, including reversible changes.',
      content: `### 🔄 Interconversion Between States of Matter

State changes are **physical changes**: no new chemical bonds are broken or formed, and the chemical composition remains identical.

$$\\text{Solid} \\underset{\\text{Freezing}}{\\overset{\\text{Melting}}{\\rightleftharpoons}} \\text{Liquid} \\underset{\\text{Condensation}}{\\overset{\\text{Boiling / Evaporation}}{\\rightleftharpoons}} \\text{Gas}$$

- **Melting**: Solid $\\rightarrow$ Liquid. Thermal energy increases particle kinetic energy until vibrations overcome the lattice forces. Occurs at the **melting point (m.p.)**.
- **Freezing**: Liquid $\\rightarrow$ Solid. Reverse of melting. Occurs at the **exact same temperature** as melting (pure water melts and freezes at $0^\\circ\\text{C}$).
- **Boiling vs Evaporation**:
  - **Boiling**: Takes place **throughout the liquid** at a single, fixed temperature called the **boiling point (b.p.)**. Gas bubbles form below the surface.
  - **Evaporation**: Takes place **only at the surface** of the liquid over a **wide range of temperatures** below the boiling point. Fast-moving particles at the surface escape into the vapor phase.
- **Condensation**: Gas $\\rightarrow$ Liquid upon cooling. Particles lose kinetic energy and cluster together.
- **Sublimation**: Solid $\\rightarrow$ Gas directly without passing through the liquid state (e.g., dry ice $\\ce{CO2(s)}$, iodine $\\ce{I2(s)}$).
- **Desublimation (Deposition)**: Gas $\\rightarrow$ Solid directly (e.g., formation of frost).

> [!NOTE]
> ### 🔍 The Reversible Arrow ($\\rightleftharpoons$)
> Cambridge exam questions often display phase changes with the reversible sign $\\rightleftharpoons$. This indicates that state transitions are completely physical and can be reversed by adding or removing thermal energy.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-01-sc-q1',
          type: 'multiple_choice',
          question:
            'Which statement describes the main difference between boiling and evaporation?',
          options: [
            'Boiling occurs at any temperature, whereas evaporation occurs only at the boiling point',
            'Boiling occurs throughout the liquid at a fixed temperature, whereas evaporation occurs only at the liquid surface over a range of temperatures',
            'Evaporation produces gas bubbles beneath the surface, whereas boiling does not',
            'Evaporation is a chemical change, whereas boiling is a physical change',
          ],
          correctAnswer: 1,
          explanation:
            'Boiling happens throughout the entire bulk of the liquid at a precise boiling point, producing vapor bubbles. Evaporation occurs exclusively at the liquid surface over a continuous range of temperatures below the boiling point.',
          misconceptionTarget: 'Confusing boiling with evaporation',
        },
      ],
    },
    {
      tag: 'igcse-01-heating-cooling-curves',
      tags: ['heating-curves', 'cooling-curves', 'latent-heat'],
      title: '3. State Changes & Kinetic Theory (Extended Tier)',
      summary:
        'Analyzing heating and cooling curves, understanding temperature plateaus, and explaining why temperature remains constant during phase transitions.',
      content: `### 📈 Heating Curves & Temperature Plateaus (Extended Tier)

When a pure substance is heated at a steady rate, its temperature changes can be plotted against time.

<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t01-heating-cooling-curve-title igcse-t01-heating-cooling-curve-desc" data-diagram="igcse-t01-heating-cooling-curve" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t01-heating-cooling-curve-title">Heating curve showing state changes and plateaus</title>
  <desc id="igcse-t01-heating-cooling-curve-desc">Temperature versus time graph showing temperature plateaus at the melting point and boiling point during phase transitions.</desc>
  <defs>
    <marker id="igcse-t01-heating-cooling-curve-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
    <marker id="igcse-t01-heating-cooling-curve-pointer" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- AXES -->
  <line x1="160" y1="360" x2="740" y2="360" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t01-heating-cooling-curve-arrowhead)" />
  <line x1="160" y1="360" x2="160" y2="30" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t01-heating-cooling-curve-arrowhead)" />
  <text x="730" y="385" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TIME</text>
  <text x="150" y="45" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">TEMPERATURE</text>

  <!-- DASHED REFERENCE LINES FOR MELTING & BOILING POINTS -->
  <line x1="160" y1="270" x2="240" y2="270" stroke="#4b5563" stroke-width="1.5" stroke-dasharray="6 5" />
  <text x="150" y="275" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">MELTING POINT</text>
  <line x1="160" y1="160" x2="450" y2="160" stroke="#4b5563" stroke-width="1.5" stroke-dasharray="6 5" />
  <text x="150" y="165" text-anchor="end" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#4b5563">BOILING POINT</text>

  <!-- HEATING CURVE LINE -->
  <path d="M 170 350 L 240 270 L 350 270 L 450 160 L 600 160 L 690 70" fill="none" stroke="#2f7fc1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

  <!-- STATE LABELS -->
  <text x="190" y="325" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">SOLID</text>
  <text x="385" y="225" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">LIQUID</text>
  <text x="655" y="115" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">GAS</text>

  <!-- CALLOUT TAG: CONSTANT TEMPERATURE EXPLANATION -->
  <g data-role="text-box" data-box="230 25 510 64">
    <path d="M 234 25 L 726 25 L 740 39 L 740 85 Q 740 89 736 89 L 234 89 Q 230 89 230 85 L 230 29 Q 230 25 234 25 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="725" cy="41" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="248" y="51" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">AT STATE CHANGE, TEMPERATURE REMAINS CONSTANT</text>
    <text x="248" y="73" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">ENERGY IS USED TO OVERCOME ATTRACTIVE FORCES</text>
  </g>

  <!-- POINTER FROM CALLOUT TO BOILING PLATEAU -->
  <path d="M 525 92 C 525 115, 525 135, 525 152" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t01-heating-cooling-curve-pointer)" />

  <!-- ACTION ARROW AT MELTING PLATEAU -->
  <g data-role="text-box" data-box="250 285 110 40">
    <rect x="250" y="285" width="110" height="40" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
    <text x="305" y="310" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MELTING</text>
  </g>
  <!-- ACTION ARROW AT BOILING PLATEAU -->
  <g data-role="text-box" data-box="500 175 110 40">
    <rect x="500" y="175" width="110" height="40" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
    <text x="555" y="200" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">BOILING</text>
  </g>
</svg>

### ❓ Why Does Temperature Remain Constant During Melting & Boiling?

This is a classic **2-mark question** in Cambridge Paper 4:
1. **Mark 1**: **Temperature is a measure of the average kinetic energy of the particles.**
2. **Mark 2**: During a state change, the thermal energy absorbed is **not** used to increase kinetic energy. Instead, it is used to **overcome the attractive intermolecular forces** between particles.
3. Therefore, because kinetic energy does not increase, the **temperature stays constant** until the entire sample has completed the phase transition.

> [!IMPORTANT]
> ### ❄️ Cooling Curves: The Mirror Image
> On a cooling curve, the plateaus correspond to **condensation** and **freezing**. Thermal energy is released as attractive bonds form between particles, keeping the temperature constant until the entire liquid has frozen.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-01-hc-q1',
          type: 'multiple_choice',
          question:
            'A sample of pure solid substance X is heated until it becomes a gas. Why does the temperature graph show a flat horizontal line while melting?',
          options: [
            'The heating supply was temporarily turned off',
            'Thermal energy is being used to break/overcome attractive forces between particles, rather than increasing their kinetic energy',
            'The particles stop vibrating during melting',
            'The substance has reached absolute zero',
          ],
          correctAnswer: 1,
          explanation:
            'During melting, all added thermal energy goes into overcoming the intermolecular forces holding the lattice together. Since temperature measures average kinetic energy, temperature remains completely flat until all solid has melted.',
          misconceptionTarget: 'Thinking temperature must always rise when heat is added',
        },
      ],
    },
    {
      tag: 'igcse-01-gas-pressure-temperature',
      tags: ['gas-pressure', 'gas-volume', 'kinetic-theory'],
      title: '4. Pressure & Temperature in Gases',
      summary:
        'Explaining gas pressure using particle collisions, and exploring how changes in pressure and temperature affect gas volume.',
      content: `### 💨 How Is Gas Pressure Created?

Gaseous particles are in continuous, rapid, random motion.
- Gas pressure is produced when **gas particles collide with the interior walls of their container**.
- Each collision exerts a small force against the wall. The total force divided by the area of the wall equals the **pressure** ($P = \\frac{F}{A}$).

---

### 🌡️ Effect of Temperature on Gas Volume & Pressure

1. **Increasing Temperature**:
   - Thermal energy transforms into **kinetic energy**. Particles move faster.
   - Particles collide with container walls **more frequently** and with **greater force**.
   - If the container is flexible (e.g. a hot air balloon or piston), the walls expand, meaning **volume increases**.
   - If the container is rigid (fixed volume), **pressure increases**.

---

### 🗜️ Effect of Pressure on Gas Volume (Compression)

When a gas is squeezed inside a cylinder using a piston:
- Decreasing volume packs the **same number of particles** into a **smaller space**.
- Particles collide with container walls **more frequently**, leading to **higher pressure**.

<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t01-gas-pressure-title igcse-t01-gas-pressure-desc" data-diagram="igcse-t01-gas-pressure" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t01-gas-pressure-title">Increasing the pressure of a gas</title>
  <desc id="igcse-t01-gas-pressure-desc">Two piston cylinders each holding ten gas particles. Pushing the piston down halves the volume, so the same particles hit the container walls more often.</desc>
  <defs>
    <marker id="igcse-t01-gas-pressure-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- LEFT PANEL : low pressure -->
  <path d="M 58 160 Q 70 164 70 178 L 70 362 Q 70 380 88 380 L 232 380 Q 250 380 250 362 L 250 178 Q 250 164 262 160" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <g data-role="particle-region" data-bounds="71 209 249 379" data-count-group="gas" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
    <circle cx="97" cy="240" r="12" />
    <circle cx="169" cy="232" r="12" />
    <circle cx="221" cy="250" r="12" />
    <circle cx="88" cy="300" r="12" />
    <circle cx="142" cy="290" r="12" />
    <circle cx="198" cy="300" r="12" />
    <circle cx="115" cy="345" r="12" />
    <circle cx="174" cy="352" r="12" />
    <circle cx="225" cy="345" r="12" />
    <circle cx="133" cy="250" r="12" />
  </g>
  <rect x="154" y="110" width="12" height="82" fill="#8a939c" stroke="#1f2937" stroke-width="2" />
  <rect x="71" y="190" width="178" height="18" fill="#8a939c" stroke="#1f2937" stroke-width="2" />

  <!-- ACTION ARROW -->
  <g data-role="text-box" data-box="302 255 160 60">
    <path d="M 302 255 L 462 255 L 462 241 L 498 285 L 462 329 L 462 315 L 302 315 Z" fill="#b5efb0" stroke="#3f8f46" stroke-width="2" stroke-linejoin="round" />
    <text x="382" y="280" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">INCREASE THE</text>
    <text x="382" y="300" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">PRESSURE</text>
  </g>

  <!-- RIGHT PANEL : high pressure -->
  <path d="M 538 160 Q 550 164 550 178 L 550 362 Q 550 380 568 380 L 712 380 Q 730 380 730 362 L 730 178 Q 730 164 742 160" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <g data-role="particle-region" data-bounds="551 299 729 379" data-count-group="gas" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5">
    <circle cx="572" cy="318" r="12" />
    <circle cx="606" cy="322" r="12" />
    <circle cx="640" cy="318" r="12" />
    <circle cx="674" cy="322" r="12" />
    <circle cx="708" cy="318" r="12" />
    <circle cx="578" cy="358" r="12" />
    <circle cx="612" cy="356" r="12" />
    <circle cx="646" cy="360" r="12" />
    <circle cx="680" cy="356" r="12" />
    <circle cx="712" cy="360" r="12" />
  </g>
  <rect x="634" y="110" width="12" height="172" fill="#8a939c" stroke="#1f2937" stroke-width="2" />
  <rect x="551" y="280" width="178" height="18" fill="#8a939c" stroke="#1f2937" stroke-width="2" />

  <!-- CALLOUT TAG : top (eyelet top-right) -->
  <g data-role="text-box" data-box="262 22 464 64">
    <path d="M 266 22 L 736 22 L 750 36 L 750 82 Q 750 86 746 86 L 266 86 Q 262 86 262 82 L 262 26 Q 262 22 266 22 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="735" cy="38" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="280" y="48" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">MORE FREQUENT COLLISIONS OF GAS MOLECULES</text>
    <text x="280" y="68" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">WITH THE CONTAINER WALL</text>
  </g>

  <!-- CALLOUT TAG : bottom (eyelet bottom-left) -->
  <g data-role="text-box" data-box="154 396 256 64">
    <path d="M 134 396 L 406 396 Q 410 396 410 400 L 410 456 Q 410 460 406 460 L 144 460 L 130 446 L 130 400 Q 130 396 134 396 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="146" cy="443" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="168" y="422" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">GAS MOLECULES COLLIDE</text>
    <text x="168" y="442" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">WITH CONTAINER WALLS</text>
  </g>

  <!-- POINTERS -->
  <g fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round">
    <path d="M 744 88 C 784 150, 776 232, 718 274" marker-end="url(#igcse-t01-gas-pressure-arrowhead)" />
    <path d="M 128 418 C 92 404, 78 360, 85 317" marker-end="url(#igcse-t01-gas-pressure-arrowhead)" />
    <path d="M 168 394 C 158 380, 136 374, 120 362" marker-end="url(#igcse-t01-gas-pressure-arrowhead)" />
  </g>
</svg>

> [!WARNING]
> ### ⚠️ Cambridge Examiner Trap: "Particles DO NOT Expand!"
> A major reason students lose marks in Cambridge exams:
> - **Wrong statement**: *"The gas particles expand when heated."* (0 marks)
> - **Correct statement**: *"The gas particles gain kinetic energy, move faster, and **spread further apart**. As a result, the **volume of the gas** (the material) expands."* (Full marks)`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-01-gp-q1',
          type: 'true_false',
          question:
            'When gas inside a syringe is heated, the individual gas particles increase in size, causing the syringe plunger to push outwards.',
          correctAnswer: false,
          explanation:
            'False! Particles NEVER expand or shrink. Heating increases particle speed and kinetic energy, so they collide more vigorously with the plunger and spread further apart, increasing the macroscopic volume.',
          misconceptionTarget: 'Thinking particles themselves expand on heating',
        },
      ],
    },
    {
      tag: 'igcse-01-diffusion-molecular-mass',
      tags: ['diffusion', 'molecular-mass-diffusion', 'ammonia-hcl-diffusion'],
      title: '5. Diffusion & Molecular Mass (Extended Tier)',
      summary:
        'Definition of diffusion, experimental evidence in liquids and gases, and how relative molecular mass (Mr) governs diffusion rates.',
      content: `### 🧪 What Is Diffusion?

**Diffusion** is the net movement of particles from an area of **high concentration** to an area of **low concentration** down a concentration gradient, as a result of their random motion.
- Occurs in **gases and liquids** (fluids where particles can move freely).
- Requires **no energy input** (passive physical process).
- Occurs **faster at higher temperatures** because particles have higher kinetic energy.

---

### 💧 Evidence for Diffusion in Liquids: $\\ce{KMnO4}$ Crystals

When a small crystal of deep-purple potassium manganate(VII) ($\\ce{KMnO4}$) is placed at the bottom of a beaker of water:
1. Initially, water around the crystal turns intensely purple (high concentration).
2. Random collisions between moving water molecules and manganate ions gradually disperse the color.
3. After several hours, the entire solution becomes an **evenly colored pale purple solution** (equilibrium reached).

---

### 🌫️ Evidence for Diffusion in Gases: Bromine Gas

A gas jar of orange-brown bromine gas is inverted under a jar of air separated by a glass cover:
- When the cover is removed, the brown gas spreads upwards into the air jar, while colorless air diffuses downward.
- After about 5 minutes, both jars are an even orange-brown color throughout.
- Diffusion is **much faster in gases than in liquids** because gas particles have far greater speeds (approx. $500\\text{ m/s}$) and plenty of empty space to move through.

---

### ⚖️ How Molecular Mass ($M_r$) Affects Rate of Diffusion (Extended Tier)

At the same temperature, different gas particles have the same average kinetic energy:
$$E_k = \\frac{1}{2}m v^2$$

Consequently:
- Gases with a **lower relative molecular mass ($M_r$)** are lighter and **travel faster** (higher diffusion rate).
- Gases with a **higher relative molecular mass ($M_r$)** are heavier and **travel slower** (lower diffusion rate).

---

### 🔬 The Classic Experiment: Diffusion of $\\ce{NH3}$ and $\\ce{HCl}$

$$\\ce{NH3(g) + HCl(g) -> NH4Cl(s)} \\quad (\\text{dense white smoke ring})$$

- Relative molecular mass of Ammonia ($\\ce{NH3}$): $M_r = 14 + (3 \\times 1) = \\mathbf{17}$
- Relative molecular mass of Hydrogen Chloride ($\\ce{HCl}$): $M_r = 1 + 35.5 = \\mathbf{36.5}$

<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="igcse-t01-diffusion-nh3-hcl-title igcse-t01-diffusion-nh3-hcl-desc" data-diagram="igcse-t01-diffusion-nh3-hcl" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="igcse-t01-diffusion-nh3-hcl-title">Diffusion of ammonia and hydrogen chloride in a glass tube</title>
  <desc id="igcse-t01-diffusion-nh3-hcl-desc">Experimental apparatus showing ammonia and hydrogen chloride diffusing towards each other to form a white ring of ammonium chloride closer to the hydrogen chloride end.</desc>
  <defs>
    <marker id="igcse-t01-diffusion-nh3-hcl-pointer" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
    <marker id="igcse-t01-diffusion-nh3-hcl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </marker>
  </defs>

  <!-- GLASS TUBE -->
  <rect x="100" y="160" width="600" height="60" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="2" />

  <!-- RUBBER STOPPERS AT ENDS -->
  <rect x="80" y="155" width="20" height="70" rx="3" fill="#8a939c" stroke="#1f2937" stroke-width="1.5" />
  <rect x="700" y="155" width="20" height="70" rx="3" fill="#8a939c" stroke="#1f2937" stroke-width="1.5" />

  <!-- COTTON WOOL SOAKED IN NH3 (LEFT) -->
  <rect x="105" y="165" width="45" height="50" rx="10" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 2" />

  <!-- COTTON WOOL SOAKED IN HCl (RIGHT) -->
  <rect x="650" y="165" width="45" height="50" rx="10" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4 2" />

  <!-- DIFFUSION MOVEMENT ARROWS -->
  <line x1="165" y1="190" x2="340" y2="190" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t01-diffusion-nh3-hcl-arrow)" />
  <text x="240" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">NH3 DIFFUSES FASTER</text>

  <line x1="635" y1="190" x2="540" y2="190" stroke="#1f2937" stroke-width="2" marker-end="url(#igcse-t01-diffusion-nh3-hcl-arrow)" />
  <text x="595" y="180" text-anchor="middle" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8" fill="#1f2937">HCl SLOWER</text>

  <!-- WHITE SOLID RING OF NH4Cl (AT X = 490, CLOSER TO HCl END) -->
  <rect x="480" y="162" width="16" height="56" rx="2" fill="#ececec" stroke="#4b5563" stroke-width="2" />

  <!-- CALLOUT TAG 1 (TOP LEFT): AMMONIA COTTON WOOL -->
  <g data-role="text-box" data-box="40 25 250 64">
    <path d="M 44 25 L 276 25 L 290 39 L 290 85 Q 290 89 286 89 L 44 89 Q 40 89 40 85 L 40 29 Q 40 25 44 25 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="275" cy="41" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="58" y="51" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">COTTON WOOL SOAKED IN</text>
    <text x="58" y="73" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CONC. NH3 (Mr = 17)</text>
  </g>
  <path d="M 130 92 C 130 115, 130 135, 130 155" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t01-diffusion-nh3-hcl-pointer)" />

  <!-- CALLOUT TAG 2 (TOP RIGHT): HYDROCHLORIC ACID COTTON WOOL -->
  <g data-role="text-box" data-box="500 25 250 64">
    <path d="M 504 25 L 736 25 L 750 39 L 750 85 Q 750 89 746 89 L 504 89 Q 500 89 500 85 L 500 29 Q 500 25 504 25 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="735" cy="41" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="518" y="51" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">COTTON WOOL SOAKED IN</text>
    <text x="518" y="73" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CONC. HCl (Mr = 36.5)</text>
  </g>
  <path d="M 670 92 C 670 115, 670 135, 670 155" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t01-diffusion-nh3-hcl-pointer)" />

  <!-- CALLOUT TAG 3 (BOTTOM CENTER): WHITE RING OF NH4Cl -->
  <g data-role="text-box" data-box="220 280 390 64">
    <path d="M 224 280 L 596 280 L 610 294 L 610 340 Q 610 344 606 344 L 224 344 Q 220 344 220 340 L 220 284 Q 220 280 224 280 Z" fill="#ececec" stroke="#4b5563" stroke-width="1.5" stroke-linejoin="round" />
    <circle cx="595" cy="296" r="3.5" fill="#ffffff" stroke="#4b5563" stroke-width="1.5" />
    <text x="238" y="306" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">WHITE SOLID RING OF NH4Cl FORMS</text>
    <text x="238" y="328" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="0.8" fill="#1f2937">CLOSER TO HCl END (NH3 IS LIGHTER)</text>
  </g>
  <path d="M 488 275 C 488 255, 488 240, 488 226" fill="none" stroke="#4b5563" stroke-width="1.5" marker-end="url(#igcse-t01-diffusion-nh3-hcl-pointer)" />
</svg>

**Key Observations**:
1. The white ring forms **nearer to the hydrochloric acid end**.
2. **Reason**: Ammonia particles are lighter ($M_r = 17$) than hydrogen chloride particles ($M_r = 36.5$). Therefore, $\\ce{NH3}$ particles **diffuse faster** and travel a **further distance** in the same time compared to $\\ce{HCl}$.`,
      checkpointQuizzes: [
        {
          id: 'chk-igcse-01-diff-q1',
          type: 'multiple_choice',
          question:
            'Four gas samples are kept at the same temperature: Helium (He, Mr=4), Methane (CH4, Mr=16), Oxygen (O2, Mr=32), and Sulfur Dioxide (SO2, Mr=64). Which gas diffuses fastest?',
          options: ['Helium (He)', 'Methane (CH4)', 'Oxygen (O2)', 'Sulfur Dioxide (SO2)'],
          correctAnswer: 0,
          explanation:
            'According to kinetic theory, rate of diffusion is inversely proportional to the square root of relative molecular mass. Helium has the lowest Mr (4), so its particles travel with the highest average speed.',
          misconceptionTarget: 'Thinking heavy molecules diffuse faster due to momentum',
        },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'igcse-01-exam-practice',
      tags: ['worked-examples', 'past-papers', 'mark-scheme'],
      title: '6. Cambridge Exam-Style Questions & Mark Schemes',
      summary:
        'Detailed step-by-step solutions to typical Cambridge Paper 2 (Multiple Choice) and Paper 4 (Structured Theory) questions.',
      content: `### 📝 Question 1 (Paper 2 Multiple Choice — 1 Mark)
A student placed a porous pot containing hydrogen gas ($\\ce{H2}$, $M_r = 2$) into a beaker of air ($M_r \\approx 29$). What happens to the water level in the manometer connected to the porous pot?

> [!TIP]
> ### 💡 Step-by-Step Mark Scheme Breakdown
> 1. Compare molecular masses: $\\ce{H2}$ ($M_r = 2$) is far lighter than air ($M_r \\approx 29$).
> 2. $\\ce{H2}$ molecules diffuse **out** of the porous pot into the beaker much faster than air molecules diffuse **into** the pot.
> 3. As gas leaves the pot faster than it enters, pressure inside the pot **decreases**.
> 4. The liquid in the manometer limb closest to the porous pot **rises**.

---

### 📝 Question 2 (Paper 4 Structured Theory — 4 Marks)
A sealed glass tube is set up with cotton wool soaked in concentrated aqueous ammonia at one end and concentrated hydrochloric acid at the other end.

**(a) State the name of the white solid that forms in the tube. [1]**
> **Mark Scheme**: Ammonium chloride (allow $\\ce{NH4Cl}$).

**(b) Explain why the white solid forms closer to the hydrochloric acid end of the tube. [3]**
> **Mark Scheme**:
> - **Mark 1**: Ammonia has a lower relative molecular mass ($M_r = 17$) than hydrogen chloride ($M_r = 36.5$).
> - **Mark 2**: Ammonia molecules diffuse / move **faster** than hydrogen chloride molecules.
> - **Mark 3**: Ammonia molecules travel a **greater distance** in the same time.`,
    },
  ],
};
