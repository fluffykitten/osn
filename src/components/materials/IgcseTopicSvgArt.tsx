import React from 'react';

interface IgcseTopicSvgArtProps {
  topicNumber: number;
  className?: string;
}

export const IgcseTopicSvgArt: React.FC<IgcseTopicSvgArtProps> = ({ topicNumber, className = '' }) => {
  // Shared minimalist dot-grid pattern for technical notebook aesthetic
  const DotGrid = ({ id }: { id: string }) => (
    <pattern id={id} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.8" fill="#f1f5f9" />
    </pattern>
  );

  switch (topicNumber) {
    // ==========================================
    // TOPIC 1: STATES OF MATTER (Crystal Lattice, Liquid Splash, Floating Gas & Kitten with Bubble Wand)
    // ==========================================
    case 1:
    case 201:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t1-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t1-grid)" />
          {/* Subtle thermal wave in background */}
          <path d="M 10 115 Q 50 90, 90 115 T 170 115 T 250 115 T 330 115 T 400 115" stroke="#f1f5f9" strokeWidth="1.5" fill="none" />

          {/* SOLID: Geometric Ice/Crystal Block with tidy particle lattice */}
          <g transform="translate(35, 34)">
            <rect x="0" y="0" width="60" height="75" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.6" />
            <g fill="#38bdf8" stroke="#0369a1" strokeWidth="1">
              <circle cx="15" cy="18" r="4.5" />
              <circle cx="30" cy="18" r="4.5" />
              <circle cx="45" cy="18" r="4.5" />
              <circle cx="15" cy="38" r="4.5" />
              <circle cx="30" cy="38" r="4.5" />
              <circle cx="45" cy="38" r="4.5" />
              <circle cx="15" cy="58" r="4.5" />
              <circle cx="30" cy="58" r="4.5" />
              <circle cx="45" cy="58" r="4.5" />
            </g>
          </g>

          {/* Transition Sparkles */}
          <g transform="translate(108, 70)">
            <path d="M 0 0 L 14 0" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M 10 -4 L 16 0 L 10 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* LIQUID: Beaker with flowing splash droplets */}
          <g transform="translate(135, 38)">
            <path d="M 0 0 L 0 60 C 0 66, 4 70, 10 70 L 42 70 C 48 70, 52 66, 52 60 L 52 0" fill="#ffffff" stroke="#1f2937" strokeWidth="1.6" />
            <path d="M 2 24 Q 16 18, 30 26 T 50 24 L 50 64 C 50 67, 47 69, 44 69 L 8 69 C 5 69, 2 67, 2 64 Z" fill="#fed7aa" />
            {/* Liquid particles fluid */}
            <circle cx="14" cy="54" r="4.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" />
            <circle cx="28" cy="56" r="4.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" />
            <circle cx="40" cy="50" r="4.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" />
            <circle cx="20" cy="38" r="4.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" />
            <circle cx="34" cy="36" r="4.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" />
            {/* Splash droplet escaping */}
            <circle cx="46" cy="12" r="3.5" fill="#fb923c" stroke="#ea580c" strokeWidth="0.8" />
          </g>

          {/* Transition Sparkles */}
          <g transform="translate(202, 70)">
            <path d="M 0 0 L 14 0" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M 10 -4 L 16 0 L 10 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* GAS & BUBBLE DRIFT */}
          <g transform="translate(230, 28)">
            {/* Fast moving gas particles with speed vectors */}
            <circle cx="16" cy="20" r="5" fill="#fda4af" stroke="#e11d48" strokeWidth="1" />
            <line x1="16" y1="28" x2="16" y2="38" stroke="#e11d48" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="38" cy="46" r="5" fill="#fda4af" stroke="#e11d48" strokeWidth="1" />
            <line x1="32" y1="48" x2="24" y2="52" stroke="#e11d48" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="18" cy="74" r="5" fill="#fda4af" stroke="#e11d48" strokeWidth="1" />
            <line x1="24" y1="72" x2="32" y2="68" stroke="#e11d48" strokeWidth="1.4" strokeLinecap="round" />
            {/* Iridescent floating gas spheres */}
            <circle cx="45" cy="16" r="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.2" />
            <circle cx="42" cy="14" r="2" fill="#ffffff" />
          </g>

          {/* Scholar Kitten with Bubble Wand & Lab Glasses */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 22 28 C 32 24 38 12 32 2 C 28 -2 24 2 26 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
            {/* Pink Nose & Happy Smile */}
            <polygon points="1,-6 3,-6 2,-5" fill="#f43f5e" />
            <path d="M 0 2 Q 2 4 4 2" stroke="#334155" strokeWidth="1.2" fill="none" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Left Paw holding bubble blowing wand */}
            <path d="M -8 18 C -18 12 -26 6 -32 2" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <line x1="-32" y1="2" x2="-44" y2="-8" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="-47" cy="-10" r="4.5" fill="none" stroke="#3b82f6" strokeWidth="1.6" />
            <circle cx="-47" cy="-10" r="2.5" fill="#93c5fd" fillOpacity="0.6" />
            {/* Right paw resting */}
            <ellipse cx="8" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 2: ATOMS, ELEMENTS & COMPOUNDS (Cosmic Bohr Atom, Crystal Molecule & Kitten with Electron)
    // ==========================================
    case 2:
    case 202:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t2-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t2-grid)" />

          {/* Majestic Atomic Orbitals System */}
          <g transform="translate(115, 72)">
            <ellipse cx="0" cy="0" rx="85" ry="30" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 3" transform="rotate(-25)" />
            <ellipse cx="0" cy="0" rx="85" ry="30" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 3" transform="rotate(30)" />
            <ellipse cx="0" cy="0" rx="85" ry="30" stroke="#34d399" strokeWidth="1.4" strokeDasharray="4 4" transform="rotate(85)" />

            {/* Orbiting Electrons with colorful glows */}
            <g transform="rotate(-25)">
              <circle cx="78" cy="10" r="5" fill="#0284c7" />
              <circle cx="78" cy="10" r="2" fill="#ffffff" />
              <circle cx="-72" cy="-14" r="4.5" fill="#0284c7" />
            </g>
            <g transform="rotate(30)">
              <circle cx="-80" cy="8" r="5" fill="#7c3aed" />
              <circle cx="-80" cy="8" r="2" fill="#ffffff" />
              <circle cx="68" cy="-18" r="4" fill="#7c3aed" />
            </g>
            <g transform="rotate(85)">
              <circle cx="0" cy="-30" r="4.5" fill="#059669" />
              <circle cx="0" cy="30" r="4.5" fill="#059669" />
            </g>
          </g>

          {/* Covalent H2O Molecule Ball-and-Stick on Left */}
          <g transform="translate(55, 72)">
            <line x1="0" y1="0" x2="-24" y2="-20" stroke="#1f2937" strokeWidth="2.5" />
            <line x1="0" y1="0" x2="24" y2="-20" stroke="#1f2937" strokeWidth="2.5" />
            {/* Oxygen center */}
            <circle cx="0" cy="0" r="14" fill="#f87171" stroke="#dc2626" strokeWidth="1.8" />
            <circle cx="-3" cy="-4" r="3.5" fill="#fca5a5" />
            {/* Hydrogens */}
            <circle cx="-24" cy="-20" r="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="24" cy="-20" r="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
          </g>

          {/* Ionic NaCl Salt Crystal Cube */}
          <g transform="translate(195, 48)">
            <rect x="0" y="0" width="46" height="46" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="5.5" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1" />
            <circle cx="34" cy="12" r="7" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.2" />
            <circle cx="12" cy="34" r="7" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.2" />
            <circle cx="34" cy="34" r="5.5" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1" />
          </g>

          {/* Chemistry Cat Looking at Glowing Hovering Electron */}
          <g transform="translate(305, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            {/* Eyes looking up-left at hovering electron */}
            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="6" cy="-4" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Hovering Electron Spark right by paw */}
            <circle cx="-24" cy="-14" r="5.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.4" />
            <circle cx="-24" cy="-14" r="2.5" fill="#ffffff" />
            <path d="M -8 18 C -16 8 -22 -4 -22 -10" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <ellipse cx="-22" cy="-10" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="8" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 3: STOICHIOMETRY (Two-Pan Analytical Balance, Mole Flask, Golden Weights & Kitten)
    // ==========================================
    case 3:
    case 203:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t3-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t3-grid)" />

          {/* Sturdy Elegant Analytical Balance */}
          <g transform="translate(150, 74)">
            {/* Central Pillar & Base */}
            <rect x="-45" y="40" width="90" height="10" rx="3" fill="#64748b" stroke="#1f2937" strokeWidth="1.8" />
            <line x1="0" y1="-32" x2="0" y2="40" stroke="#334155" strokeWidth="3.5" />
            <polygon points="-8,-32 8,-32 0,-40" fill="#f1f5f9" stroke="#1f2937" strokeWidth="1.6" />
            {/* Balanced Horizontal Beam */}
            <line x1="-95" y1="-32" x2="95" y2="-32" stroke="#1f2937" strokeWidth="3" />
            <circle cx="0" cy="-32" r="3" fill="#facc15" stroke="#1f2937" strokeWidth="1" />

            {/* Left Suspension & Pan */}
            <line x1="-95" y1="-32" x2="-112" y2="12" stroke="#64748b" strokeWidth="1.2" />
            <line x1="-95" y1="-32" x2="-78" y2="12" stroke="#64748b" strokeWidth="1.2" />
            <ellipse cx="-95" cy="12" rx="26" ry="6" fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.6" />
            {/* Volumetric Flask on Left Pan */}
            <path d="M -99 -16 L -91 -16 L -91 -8 L -84 6 L -106 6 L -99 -8 Z" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1.5" />
            <line x1="-99" y1="-5" x2="-91" y2="-5" stroke="#ef4444" strokeWidth="1.2" />

            {/* Right Suspension & Pan */}
            <line x1="95" y1="-32" x2="78" y2="12" stroke="#64748b" strokeWidth="1.2" />
            <line x1="95" y1="-32" x2="112" y2="12" stroke="#64748b" strokeWidth="1.2" />
            <ellipse cx="95" cy="12" rx="26" ry="6" fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.6" />
            {/* Golden Gram Weights Stack */}
            <rect x="87" y="-2" width="16" height="12" rx="2" fill="#fde047" stroke="#ca8a04" strokeWidth="1.4" />
            <circle cx="95" cy="-4" r="2.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <rect x="106" y="2" width="10" height="8" rx="1.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.2" />
          </g>

          {/* Floating Molecule and Scroll on Left */}
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="34" height="44" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" />
            <line x1="6" y1="10" x2="28" y2="10" stroke="#b45309" strokeWidth="1.2" />
            <line x1="6" y1="18" x2="24" y2="18" stroke="#b45309" strokeWidth="1.2" />
            <line x1="6" y1="26" x2="28" y2="26" stroke="#b45309" strokeWidth="1.2" />
            <line x1="6" y1="34" x2="18" y2="34" stroke="#b45309" strokeWidth="1.2" />
          </g>

          {/* Scholar Kitten with Ear-Pencil Adjusting Pan */}
          <g transform="translate(315, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears with Yellow Pencil Behind Right Ear */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Pencil */}
            <line x1="10" y1="-22" x2="20" y2="-32" stroke="#eab308" strokeWidth="2.6" strokeLinecap="round" />
            <polygon points="20,-32 23,-35 19,-33" fill="#0f172a" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Left Paw extending towards right pan */}
            <path d="M -8 18 C -22 14 -38 -8 -45 -12" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <ellipse cx="-45" cy="-12" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
            <ellipse cx="8" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 4: ELECTROCHEMISTRY (Glass Electrolytic Cell, Sparking Circuit & Kitten with Goggles)
    // ==========================================
    case 4:
    case 204:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t4-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t4-grid)" />

          {/* Retro Power Source on Top */}
          <g transform="translate(145, 24)">
            <rect x="-30" y="-10" width="60" height="20" rx="4" fill="#334155" stroke="#1f2937" strokeWidth="1.5" />
            <circle cx="-16" cy="0" r="4" fill="#ef4444" />
            <circle cx="16" cy="0" r="4" fill="#3b82f6" />
            {/* Spark of Electricity in center */}
            <path d="M -2 -14 L 3 -6 L -2 -4 L 3 4" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Wires */}
            <path d="M -20 0 L -85 0 L -85 45" stroke="#ef4444" strokeWidth="2" fill="none" />
            <path d="M 20 0 L 85 0 L 85 45" stroke="#3b82f6" strokeWidth="2" fill="none" />
          </g>

          {/* Electrolytic Beaker Vessel */}
          <g transform="translate(145, 68)">
            <rect x="-105" y="0" width="210" height="66" rx="8" fill="#ffffff" stroke="#1f2937" strokeWidth="1.8" />
            {/* Turquoise Blue Electrolyte */}
            <rect x="-103" y="14" width="206" height="50" rx="6" fill="#38bdf8" fillOpacity="0.45" stroke="none" />

            {/* Anode Rod (Oxidation Bubbles) */}
            <rect x="-92" y="-12" width="15" height="58" rx="2" fill="#64748b" stroke="#1f2937" strokeWidth="1.4" />
            <circle cx="-70" cy="24" r="3.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <circle cx="-68" cy="38" r="2.8" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <circle cx="-72" cy="48" r="4" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />

            {/* Cathode Rod (Copper Plating & Bubbles) */}
            <rect x="77" y="-12" width="15" height="58" rx="2" fill="#ca8a04" stroke="#1f2937" strokeWidth="1.4" />
            {/* Plated copper crystals */}
            <circle cx="68" cy="22" r="3" fill="#ffffff" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="70" cy="36" r="3.8" fill="#ffffff" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="66" cy="48" r="3" fill="#ffffff" stroke="#ca8a04" strokeWidth="1" />
          </g>

          {/* Kitten Wearing Green Lab Safety Goggles Peeking In */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Green Protective Safety Goggles */}
            <path d="M -14 -3 L -10 -1 L 14 -1 L 18 -3" stroke="#059669" strokeWidth="2" fill="none" />
            <rect x="-8" y="-7" width="20" height="12" rx="4" fill="#a7f3d0" stroke="#059669" strokeWidth="1.6" />
            <circle cx="-2" cy="-1" r="2" fill="#065f46" />
            <circle cx="6" cy="-1" r="2" fill="#065f46" />
            {/* Whiskers */}
            <line x1="-10" y1="4" x2="-20" y2="3" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="7" x2="-19" y2="8" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="24" y2="3" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="7" x2="23" y2="8" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Paws Resting on Beaker Edge */}
            <ellipse cx="-12" cy="18" rx="4.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <ellipse cx="4" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 5: CHEMICAL ENERGETICS (Glowing Energy Curve, Bunsen Burner & Kitten Warming Paws)
    // ==========================================
    case 5:
    case 205:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t5-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t5-grid)" />

          {/* Fluid Reaction Energy Coordinate Hill */}
          <g transform="translate(45, 30)">
            {/* Glowing coordinate curve */}
            <path d="M 10 55 C 35 55, 55 10, 85 10 C 115 10, 135 85, 175 85" fill="none" stroke="#f43f5e" strokeWidth="3.2" strokeLinecap="round" />
            {/* Glow shadow */}
            <path d="M 10 55 C 35 55, 55 10, 85 10 C 115 10, 135 85, 175 85" fill="none" stroke="#fda4af" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4" />
            {/* Plateau Spheres */}
            <circle cx="10" cy="55" r="5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.4" />
            <circle cx="85" cy="10" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.4" />
            <circle cx="175" cy="85" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="1.4" />
          </g>

          {/* Bunsen Burner with Radiant Flame */}
          <g transform="translate(250, 95)">
            {/* Sturdy base and tube */}
            <rect x="-18" y="24" width="36" height="8" rx="2" fill="#475569" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="-6" y="6" width="12" height="18" fill="#94a3b8" stroke="#1f2937" strokeWidth="1.4" />
            {/* Radiant Heat Rings */}
            <circle cx="0" cy="-6" r="22" stroke="#fdba74" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            {/* Cozy Multi-tone Flame */}
            <path d="M 0 6 C -10 0, -8 -16, 0 -26 C 8 -16, 10 0, 0 6 Z" fill="#fde047" stroke="#ea580c" strokeWidth="1.5" />
            <path d="M 0 6 C -5 2, -4 -8, 0 -14 C 4 -8, 5 2, 0 6 Z" fill="#38bdf8" />
          </g>

          {/* Kitten Curled Up in Cozy Radiance, Warming Paws */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Blissful Curved Closed Eyes */}
            <path d="M -6 -2 Q -3 -5 0 -2" stroke="#334155" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d="M 4 -2 Q 7 -5 10 -2" stroke="#334155" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            {/* Nose & Smile */}
            <polygon points="1,-6 3,-6 2,-5" fill="#f43f5e" />
            <path d="M 0 2 Q 2 4 4 2" stroke="#334155" strokeWidth="1.2" fill="none" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Paws Reaching Forward basking in warmth */}
            <path d="M -8 18 C -20 20 -34 20 -40 18" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <circle cx="-40" cy="18" r="3.2" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <path d="M -2 20 C -16 24 -30 24 -36 22" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <circle cx="-36" cy="22" r="3.2" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 6: CHEMICAL REACTIONS (Vigorous Effervescence Flask, Golden Stopwatch & Excited Kitten)
    // ==========================================
    case 6:
    case 206:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t6-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t6-grid)" />

          {/* Active Effervescing Erlenmeyer Flask */}
          <g transform="translate(65, 45)">
            <path d="M 0 0 L 16 0 L 16 22 L 44 72 L -28 72 L -4 22 L -4 0 Z" fill="#ffffff" stroke="#1f2937" strokeWidth="2" />
            {/* Reacting Cyan Solution */}
            <path d="M -24 66 L 40 66 L 30 48 L -14 48 Z" fill="#38bdf8" />
            {/* Bubbling Carbonate Chips */}
            <circle cx="-6" cy="58" r="4" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1" />
            <circle cx="12" cy="60" r="5" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1" />
            <circle cx="26" cy="56" r="3.5" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1" />
            {/* Fizzing bubbles popping upwards */}
            <circle cx="4" cy="40" r="3" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <circle cx="18" cy="30" r="3.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <circle cx="8" cy="16" r="4.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="14" cy="-2" r="3" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
          </g>

          {/* Precision Pocket Stopwatch */}
          <g transform="translate(175, 70)">
            <circle cx="0" cy="0" r="28" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.4" />
            <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="0" cy="-28" r="5" fill="#facc15" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="-3" y="-36" width="6" height="5" rx="1.5" fill="#ca8a04" />
            {/* Dial Tick marks */}
            <line x1="0" y1="-21" x2="0" y2="-17" stroke="#1f2937" strokeWidth="1.5" />
            <line x1="21" y1="0" x2="17" y2="0" stroke="#1f2937" strokeWidth="1.5" />
            <line x1="0" y1="21" x2="0" y2="17" stroke="#1f2937" strokeWidth="1.5" />
            <line x1="-21" y1="0" x2="-17" y2="0" stroke="#1f2937" strokeWidth="1.5" />
            {/* High-speed stopwatch hand */}
            <line x1="0" y1="0" x2="14" y2="-12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="0" r="2.5" fill="#1f2937" />
          </g>

          {/* Molecular Collision Starburst */}
          <g transform="translate(240, 42)">
            <path d="M 0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="0.8" />
            <circle cx="-14" cy="12" r="3" fill="#38bdf8" />
            <circle cx="14" cy="-10" r="3" fill="#f43f5e" />
          </g>

          {/* Excited Kitten with Eyes Wide Open */}
          <g transform="translate(325, 72)">
            {/* Tail Swishing */}
            <path d="M 20 28 C 30 20 34 8 26 -2 C 22 -6 18 0 22 6" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="2.2" fill="#0f172a" />
            <circle cx="7" cy="-2" r="2.2" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Paws Raised in excitement */}
            <ellipse cx="-10" cy="14" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
            <ellipse cx="14" cy="16" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 7: ACIDS, BASES AND SALTS (Burette Titration, Color Swirl & Kitten Watching Drop)
    // ==========================================
    case 7:
    case 207:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t7-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t7-grid)" />

          {/* Titration Stand with Slender Glass Burette */}
          <g transform="translate(100, 22)">
            {/* Metal Stand */}
            <line x1="0" y1="10" x2="0" y2="95" stroke="#1f2937" strokeWidth="2.8" />
            <rect x="-20" y="95" width="60" height="8" rx="2" fill="#94a3b8" stroke="#1f2937" strokeWidth="1.4" />
            {/* White Ceramic Tile */}
            <rect x="15" y="90" width="55" height="7" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />

            {/* Clamped Burette Tube */}
            <rect x="36" y="0" width="9" height="66" rx="1" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
            <rect x="37" y="18" width="7" height="48" fill="#fde047" fillOpacity="0.8" />
            {/* Graduations */}
            <line x1="36" y1="12" x2="41" y2="12" stroke="#1f2937" strokeWidth="0.9" />
            <line x1="36" y1="24" x2="41" y2="24" stroke="#1f2937" strokeWidth="0.9" />
            <line x1="36" y1="36" x2="41" y2="36" stroke="#1f2937" strokeWidth="0.9" />
            <line x1="36" y1="48" x2="41" y2="48" stroke="#1f2937" strokeWidth="0.9" />
            {/* Red Stopcock Tap */}
            <circle cx="40.5" cy="68" r="3" fill="#ef4444" stroke="#1f2937" strokeWidth="1" />
            {/* Suspended Perfect Drop */}
            <path d="M 40.5 73 C 38.5 77, 38.5 81, 40.5 82 C 42.5 81, 42.5 77, 40.5 73 Z" fill="#f97316" stroke="#c2410c" strokeWidth="0.8" />

            {/* Conical Flask on the Tile */}
            <path d="M 32 80 L 49 80 L 59 92 L 22 92 Z" fill="#ffffff" stroke="#1f2937" strokeWidth="1.5" />
            {/* Swirling color transition from amber to magenta */}
            <path d="M 27 88 L 54 88 L 59 92 L 22 92 Z" fill="#ec4899" fillOpacity="0.75" />
          </g>

          {/* Petri Dish with Faceted Blue Copper Crystals on Left */}
          <g transform="translate(45, 78)">
            <ellipse cx="0" cy="0" rx="26" ry="9" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
            {/* Sparkling Blue Rhombic Crystals */}
            <polygon points="-8,-4 0,-12 8,-4 0,4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
            <polygon points="-16,0 -10,-6 -4,0 -10,6" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
            <polygon points="6,2 14,-4 20,2 12,8" fill="#60a5fa" stroke="#2563eb" strokeWidth="1" />
          </g>

          {/* Kitten Sitting on the White Tile Watching the End-Point Drop */}
          <g transform="translate(295, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head tilted forward toward drop */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            {/* Attentive Eyes looking left at droplet */}
            <circle cx="-5" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="5" cy="-2" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Paws on Ground */}
            <ellipse cx="-6" cy="22" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <ellipse cx="8" cy="22" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 8: THE PERIODIC TABLE (Glowing Element Tiles, Iodine Ampoule & Professor Kitten)
    // ==========================================
    case 8:
    case 208:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t8-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t8-grid)" />

          {/* Stepped Illuminated Periodic Table Board */}
          <g transform="translate(35, 26)">
            {/* Frame */}
            <rect x="0" y="0" width="180" height="92" rx="8" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.8" />
            {/* Group 1 Alkali Column (Glowing Coral) */}
            <rect x="10" y="10" width="22" height="72" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="21" cy="22" r="5" fill="#f87171" />
            <circle cx="21" cy="38" r="6" fill="#f87171" />
            <circle cx="21" cy="56" r="7" fill="#f87171" />
            <circle cx="21" cy="74" r="8" fill="#f87171" />

            {/* Transition Metals Central Palette (Gold) */}
            <rect x="38" y="32" width="65" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" />
            <circle cx="54" cy="48" r="5" fill="#fbbf24" />
            <circle cx="70" cy="48" r="5" fill="#fbbf24" />
            <circle cx="86" cy="48" r="5" fill="#fbbf24" />
            <circle cx="54" cy="66" r="5" fill="#fbbf24" />
            <circle cx="70" cy="66" r="5" fill="#fbbf24" />
            <circle cx="86" cy="66" r="5" fill="#fbbf24" />

            {/* Group 7 Halogens (Emerald) */}
            <rect x="110" y="10" width="22" height="72" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.2" />
            <circle cx="121" cy="22" r="5" fill="#4ade80" />
            <circle cx="121" cy="38" r="6" fill="#4ade80" />
            <circle cx="121" cy="56" r="7" fill="#4ade80" />
            <circle cx="121" cy="74" r="8" fill="#4ade80" />

            {/* Noble Gases (Indigo) */}
            <rect x="138" y="10" width="22" height="72" rx="4" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.2" />
            <circle cx="149" cy="22" r="4.5" fill="#818cf8" />
            <circle cx="149" cy="38" r="5.5" fill="#818cf8" />
            <circle cx="149" cy="56" r="6.5" fill="#818cf8" />
            <circle cx="149" cy="74" r="7.5" fill="#818cf8" />
          </g>

          {/* Sealed Ampoule with Swirling Purple Iodine Gas */}
          <g transform="translate(235, 60)">
            <rect x="-8" y="-18" width="16" height="42" rx="8" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
            <path d="M -5 6 Q 0 -6 5 2 T -2 14" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>

          {/* Professor Kitten Sitting on Book Stack with Pointer */}
          <g transform="translate(325, 72)">
            {/* Book Stack underneath */}
            <rect x="-26" y="28" width="48" height="8" rx="2" fill="#ef4444" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="-22" y="22" width="42" height="8" rx="2" fill="#3b82f6" stroke="#1f2937" strokeWidth="1.2" />
            {/* Tail */}
            <path d="M 18 20 C 28 16 34 6 28 -2" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 28 C -16 12 -10 2 2 2 C 14 2 20 12 18 28 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Red Bow Tie */}
            <polygon points="-4,4 0,7 -4,10" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            <polygon points="4,4 0,7 4,10" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            {/* Head */}
            <circle cx="2" cy="-6" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-16 -6,-29 1,-20" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-17 -6,-25 -1,-20" fill="#fda4af" />
            <polygon points="5,-20 12,-29 16,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-20 11,-25 14,-17" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-6" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-6" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-6" x2="2" y2="-6" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-6" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-6" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="-3" x2="-20" y2="-4" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="0" x2="-19" y2="1" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="-3" x2="24" y2="-4" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="0" x2="23" y2="1" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Left Paw holding wooden pointer pointing at the table */}
            <path d="M -8 10 C -18 6 -32 -2 -42 -8" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <line x1="-42" y1="-8" x2="-80" y2="-22" stroke="#d97706" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="-80" cy="-22" r="2.5" fill="#f59e0b" />
            <ellipse cx="-42" cy="-8" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 9: METALS (Anvil, Molten Golden Metal, Disrupted Alloy & Kitten with Hard Hat)
    // ==========================================
    case 9:
    case 209:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t9-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t9-grid)" />

          {/* Industrial Anvil & Ingot */}
          <g transform="translate(55, 75)">
            {/* Heavy Anvil Silhouette */}
            <path d="M -30 20 L -30 10 L -18 10 L -14 0 L 25 0 L 32 6 L 18 6 L 14 10 L 25 10 L 25 20 Z" fill="#64748b" stroke="#1f2937" strokeWidth="1.8" />
            {/* Wooden Base Block */}
            <rect x="-35" y="20" width="65" height="15" rx="3" fill="#b45309" stroke="#1f2937" strokeWidth="1.4" />
            {/* Shiny Gold Ingot resting on anvil */}
            <polygon points="-8,-4 14,-4 10,0 -12,0" fill="#fde047" stroke="#ca8a04" strokeWidth="1.2" />
            {/* Metal Luster Sparkle */}
            <path d="M 6 -8 L 8 -4 L 12 -2 L 8 0 L 6 4 L 4 0 L 0 -2 L 4 -4 Z" fill="#ffffff" />
          </g>

          {/* Alloy Lattice: Interstitial atom blocking crystal plane slippage */}
          <g transform="translate(165, 40)">
            <rect x="0" y="0" width="85" height="74" rx="8" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            {/* Row 1 regular atoms */}
            <circle cx="18" cy="18" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="36" cy="18" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="54" cy="18" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="72" cy="18" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            {/* Row 2 disrupted by larger foreign atom */}
            <circle cx="16" cy="36" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="36" cy="38" r="10.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.6" />
            <circle cx="58" cy="36" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="74" cy="36" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            {/* Row 3 */}
            <circle cx="18" cy="56" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="36" cy="58" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="54" cy="56" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="72" cy="56" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
          </g>

          {/* Builder Kitten in Yellow Hard Hat with Hammer */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Yellow Construction Hard Hat */}
            <path d="M -14 -10 C -14 -26 18 -26 18 -10 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.6" />
            <rect x="-18" y="-10" width="38" height="5" rx="2" fill="#eab308" stroke="#ca8a04" strokeWidth="1.2" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Left Paw holding smithing hammer */}
            <path d="M -8 18 C -20 12 -30 6 -36 2" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <line x1="-36" y1="2" x2="-46" y2="-12" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="-52" y="-16" width="12" height="6" rx="1.5" fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
            <ellipse cx="-36" cy="2" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="8" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 10: CHEMISTRY OF THE ENVIRONMENT (Lush Planet Earth, Clean Water Drop & Eco-Kitten with Sprout)
    // ==========================================
    case 10:
    case 210:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t10-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t10-grid)" />

          {/* Luminous Miniature Planet Earth */}
          <g transform="translate(90, 72)">
            {/* Atmosphere Aura */}
            <circle cx="0" cy="0" r="38" fill="#e0f2fe" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Ocean Globe */}
            <circle cx="0" cy="0" r="32" fill="#0284c7" stroke="#0369a1" strokeWidth="1.8" />
            {/* Continents */}
            <path d="M -16 -12 C -8 -20, 10 -22, 14 -12 C 16 -6, 8 2, 2 0 C -4 -2, -14 -4, -16 -12 Z" fill="#22c55e" />
            <path d="M -6 10 C 2 8, 14 12, 12 22 C 10 26, -2 24, -6 18 Z" fill="#22c55e" />
            {/* Fluffy White Atmospheric Clouds */}
            <ellipse cx="-12" cy="-4" rx="10" ry="3.5" fill="#ffffff" fillOpacity="0.85" />
            <ellipse cx="14" cy="6" rx="8" ry="3" fill="#ffffff" fillOpacity="0.85" />
          </g>

          {/* Clean Distilled Water Flask with Sprouting Plant Leaf */}
          <g transform="translate(195, 72)">
            {/* Raindrop falling from pure cloud */}
            <path d="M 0 -36 C -4 -30, -5 -24, 0 -22 C 5 -24, 4 -30, 0 -36 Z" fill="#38bdf8" />
            {/* Glass Receiver Beaker */}
            <path d="M -16 -10 L -16 26 C -16 32, 16 32, 16 26 L 16 -10" fill="#ffffff" stroke="#1f2937" strokeWidth="1.6" />
            <path d="M -14 6 L 14 6 L 14 26 C 14 30, -14 30, -14 26 Z" fill="#bae6fd" />
            {/* Fresh Green Sprout Leaf growing from flask */}
            <path d="M 12 -12 Q 22 -24 32 -18 Q 28 -8 12 -12 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
          </g>

          {/* Eco-Kitten with Plant Sprout on Head */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Two-Leaf Green Plant Sprout on Head */}
            <path d="M 2 -18 Q -4 -28 -12 -28 Q -4 -23 2 -18 Q 8 -28 16 -28 Q 8 -23 2 -18 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
            <line x1="2" y1="-18" x2="2" y2="-12" stroke="#15803d" strokeWidth="1.5" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Paws Resting in Zen contentment */}
            <ellipse cx="-6" cy="22" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <ellipse cx="8" cy="22" rx="4" ry="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 11: ORGANIC CHEMISTRY (3D Benzene/Hexagonal Molecule, Polymer Helix & Playful Kitten)
    // ==========================================
    case 11:
    case 211:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t11-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t11-grid)" />

          {/* Hexagonal Organic Ring Frame (Benzene / Hydrocarbon Structure) */}
          <g transform="translate(85, 72)">
            <polygon points="0,-34 30,-17 30,17 0,34 -30,17 -30,-17" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="18" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 3" fill="none" />
            {/* Atom spheres at vertices */}
            <circle cx="0" cy="-34" r="6" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="30" cy="-17" r="6" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="30" cy="17" r="6" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="0" cy="34" r="6" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="-30" cy="17" r="6" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="-30" cy="-17" r="6" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
            {/* Hydrogen Bonds radiating outwards */}
            <circle cx="0" cy="-45" r="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
            <circle cx="42" cy="-24" r="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
            <circle cx="42" cy="24" r="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
            <circle cx="0" cy="45" r="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
          </g>

          {/* Flowing Polymer Ribbon Helix */}
          <g transform="translate(195, 72)">
            <path d="M -30 -30 Q 0 -10 30 -30 Q 0 10 -30 30 Q 0 10 30 30" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="-30" cy="-30" r="4.5" fill="#f43f5e" />
            <circle cx="0" cy="-20" r="4.5" fill="#38bdf8" />
            <circle cx="30" cy="-30" r="4.5" fill="#a855f7" />
            <circle cx="0" cy="20" r="4.5" fill="#facc15" />
            <circle cx="30" cy="30" r="4.5" fill="#22c55e" />
          </g>

          {/* Floating Organic Toy Ball Batting */}
          <g transform="translate(265, 45)">
            <circle cx="0" cy="0" r="8" fill="#f43f5e" stroke="#1f2937" strokeWidth="1.5" />
            <line x1="0" y1="8" x2="12" y2="18" stroke="#1f2937" strokeWidth="2" />
            <circle cx="14" cy="20" r="6" fill="#38bdf8" stroke="#1f2937" strokeWidth="1.2" />
          </g>

          {/* Playful Kitten Leaping Up to Bat at Molecule */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Both Paws Reaching Up playfully batting at molecule */}
            <path d="M -8 16 C -20 8 -32 -4 -38 -12" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <circle cx="-38" cy="-12" r="3.5" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
            <path d="M 0 16 C -12 4 -22 -12 -28 -18" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <circle cx="-28" cy="-18" r="3.5" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 12: EXPERIMENTAL TECHNIQUES & ANALYSIS (Vibrant Chromatography Ribbon, Rainbow Precipitate Tubes & Detective Kitten)
    // ==========================================
    case 12:
    case 212:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="t12-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t12-grid)" />

          {/* Chromatography Tank with Separated Colour Spots */}
          <g transform="translate(45, 24)">
            <rect x="0" y="0" width="70" height="96" rx="8" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            {/* Solvent pool */}
            <rect x="2" y="80" width="66" height="14" rx="3" fill="#8fd3ef" fillOpacity="0.5" />
            {/* Paper Strip */}
            <rect x="14" y="8" width="42" height="78" fill="#ffffff" stroke="#1f2937" strokeWidth="1.1" />
            {/* Pencil Baseline */}
            <line x1="14" y1="74" x2="56" y2="74" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2 2" />
            {/* Solvent Front */}
            <line x1="14" y1="22" x2="56" y2="22" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="3 2" />
            {/* Separated Pure Dye Spots */}
            <circle cx="26" cy="48" r="4.5" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
            <circle cx="36" cy="34" r="4.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="46" cy="56" r="4.5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
          </g>

          {/* Test Tube Rack with Qualitative Precipitate Colours */}
          <g transform="translate(135, 36)">
            {/* Wooden Rack */}
            <rect x="0" y="45" width="105" height="6" rx="1.5" fill="#b45309" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="0" y="68" width="105" height="8" rx="2" fill="#b45309" stroke="#1f2937" strokeWidth="1.2" />

            {/* Tube 1: Cu2+ Royal Blue */}
            <g transform="translate(16, 0)">
              <rect x="0" y="0" width="14" height="65" rx="4" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
              <rect x="1" y="32" width="12" height="32" rx="3" fill="#38bdf8" />
              <circle cx="7" cy="44" r="2" fill="#ffffff" />
            </g>

            {/* Tube 2: Fe2+ Emerald Green */}
            <g transform="translate(45, 0)">
              <rect x="0" y="0" width="14" height="65" rx="4" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
              <rect x="1" y="32" width="12" height="32" rx="3" fill="#4ade80" />
              <circle cx="7" cy="44" r="2" fill="#ffffff" />
            </g>

            {/* Tube 3: Fe3+ Rust Red-Brown */}
            <g transform="translate(74, 0)">
              <rect x="0" y="0" width="14" height="65" rx="4" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
              <rect x="1" y="32" width="12" height="32" rx="3" fill="#f87171" />
              <circle cx="7" cy="44" r="2" fill="#ffffff" />
            </g>
          </g>

          {/* Detective Kitten Holding Magnifying Glass */}
          <g transform="translate(325, 72)">
            {/* Tail */}
            <path d="M 20 28 C 30 24 36 12 30 2 C 26 -2 22 2 24 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -14 36 C -16 18 -10 6 2 6 C 14 6 20 18 18 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-2" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-10,-12 -6,-25 1,-16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-21 -1,-16" fill="#fda4af" />
            <polygon points="5,-16 12,-25 16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="7,-16 11,-21 14,-13" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-3" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <circle cx="7" cy="-2" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
            <line x1="2" y1="-2" x2="2" y2="-2" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="-3" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="1" x2="-20" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="-10" y1="4" x2="-19" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="24" y2="0" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="14" y1="4" x2="23" y2="5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
            {/* Paw Holding Magnifying Glass */}
            <path d="M -8 18 C -18 12 -28 6 -34 0" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Magnifying Glass Frame & Lens */}
            <circle cx="-44" cy="-8" r="13" fill="#e0f2fe" fillOpacity="0.75" stroke="#1f2937" strokeWidth="2.2" />
            <line x1="-35" y1="1" x2="-26" y2="10" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" />
            {/* Tiny rainbow sparkle in lens */}
            <circle cx="-44" cy="-8" r="3" fill="#facc15" />
            <ellipse cx="-30" cy="6" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="8" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="144" fill="#ffffff" />
          <circle cx="200" cy="72" r="28" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        </svg>
      );
  }
};

IgcseTopicSvgArt.displayName = 'IgcseTopicSvgArt';
