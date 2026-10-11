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
    // TOPIC 1: STATES OF MATTER (Solids, Liquids, Gases & Kitten Batting Gas Particle)
    // ==========================================
    case 1:
    case 201:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t1-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t1-grid)" />

          {/* Background decorative subtle wave */}
          <path
            d="M 10 115 Q 50 90, 90 115 T 170 115 T 250 115 T 330 115 T 400 115"
            stroke="#f1f5f9"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Chamber 1: SOLID (Regular Lattice) */}
          <g transform="translate(25, 24)">
            <rect x="0" y="0" width="62" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="88" width="62" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="31" y="100" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">SOLID</text>
            <g fill="#8fd3ef" stroke="#1f2937" strokeWidth="1.1">
              <circle cx="15" cy="22" r="4.5" />
              <circle cx="31" cy="22" r="4.5" />
              <circle cx="47" cy="22" r="4.5" />
              <circle cx="15" cy="38" r="4.5" />
              <circle cx="31" cy="38" r="4.5" />
              <circle cx="47" cy="38" r="4.5" />
              <circle cx="15" cy="54" r="4.5" />
              <circle cx="31" cy="54" r="4.5" />
              <circle cx="47" cy="54" r="4.5" />
              <circle cx="15" cy="70" r="4.5" />
              <circle cx="31" cy="70" r="4.5" />
              <circle cx="47" cy="70" r="4.5" />
            </g>
          </g>

          {/* Transition Arrow 1 */}
          <g transform="translate(95, 60)">
            <path d="M 0 0 L 12 0" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 9 -3 L 13 0 L 9 3" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Chamber 2: LIQUID (Irregular Touching) */}
          <g transform="translate(115, 24)">
            <rect x="0" y="0" width="62" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="88" width="62" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="31" y="100" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">LIQUID</text>
            <g fill="#fed7aa" stroke="#1f2937" strokeWidth="1.1">
              <circle cx="17" cy="72" r="4.5" />
              <circle cx="30" cy="74" r="4.5" />
              <circle cx="44" cy="73" r="4.5" />
              <circle cx="15" cy="58" r="4.5" />
              <circle cx="29" cy="60" r="4.5" />
              <circle cx="45" cy="59" r="4.5" />
              <circle cx="23" cy="46" r="4.5" />
              <circle cx="38" cy="47" r="4.5" />
              <circle cx="50" cy="54" r="4.5" />
            </g>
          </g>

          {/* Transition Arrow 2 */}
          <g transform="translate(185, 60)">
            <path d="M 0 0 L 12 0" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 9 -3 L 13 0 L 9 3" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Chamber 3: GAS (Random Dispersed with Motion Trails) */}
          <g transform="translate(205, 24)">
            <rect x="0" y="0" width="68" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="88" width="68" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="34" y="100" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">GAS</text>
            <g fill="#fda4af" stroke="#1f2937" strokeWidth="1.1">
              <circle cx="18" cy="24" r="4.5" />
              <path d="M 12 24 L 6 24" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="48" cy="36" r="4.5" />
              <path d="M 48 42 L 48 48" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="22" cy="58" r="4.5" />
              <path d="M 27 56 L 33 52" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="52" cy="72" r="4.5" />
              <path d="M 46 74 L 40 76" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
            </g>
          </g>

          {/* Subtle Touch of Kitten: Playfully batting at gas particle */}
          <g transform="translate(315, 65)">
            {/* Curled Tail */}
            <path d="M 22 28 C 30 26 34 16 30 10 C 26 6 22 10 24 14" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Kitten Body */}
            <path d="M -12 36 C -14 20 -8 10 2 10 C 12 10 18 20 16 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Kitten Head */}
            <circle cx="2" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Left Ear */}
            <polygon points="-9,-9 -5,-20 0,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-7,-10 -5,-17 -2,-12" fill="#fda4af" />
            {/* Right Ear */}
            <polygon points="5,-12 10,-20 14,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="7,-12 10,-17 12,-10" fill="#fda4af" />
            {/* Lab Glasses */}
            <circle cx="-3" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="6" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="1.5" y1="0" x2="1.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            {/* Eyes */}
            <circle cx="-3" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="6" cy="0" r="1.5" fill="#0f172a" />
            {/* Nose & Whiskers */}
            <polygon points="1,-4 2.5,-4 1.7,-3" fill="#f43f5e" />
            <line x1="-9" y1="3" x2="-16" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-9" y1="5" x2="-16" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="12" y1="3" x2="19" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="12" y1="5" x2="19" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Left Paw batting to the left towards gas */}
            <path d="M -8 18 C -18 12 -26 14 -28 10" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <circle cx="-28" cy="10" r="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            {/* Spark of kinetic energy */}
            <circle cx="-35" cy="8" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="1" />
            {/* Right Paw resting */}
            <ellipse cx="8" cy="22" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 2: ATOMS, ELEMENTS & COMPOUNDS (Bohr Atom, Ionic Lattice & Scholar Cat Nucleus)
    // ==========================================
    case 2:
    case 202:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t2-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t2-grid)" />

          {/* Background subtle curve */}
          <path
            d="M 10 115 Q 50 90, 90 115 T 170 115 T 250 115 T 330 115 T 400 115"
            stroke="#f1f5f9"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Panel 1: BOHR ATOM */}
          <g transform="translate(25, 20)">
            <rect x="0" y="0" width="85" height="92" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="92" width="85" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="42.5" y="104" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">BOHR ATOM</text>
            <circle cx="42.5" cy="46" r="30" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <circle cx="42.5" cy="46" r="16" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <circle cx="42.5" cy="46" r="7" fill="#f5a3a3" stroke="#1f2937" strokeWidth="1.2" />
            <text x="42.5" y="49" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#1f2937">+</text>
            {/* Electrons */}
            <circle cx="42.5" cy="30" r="2.8" fill="#fde58a" stroke="#1f2937" strokeWidth="0.9" />
            <circle cx="42.5" cy="62" r="2.8" fill="#fde58a" stroke="#1f2937" strokeWidth="0.9" />
            <circle cx="12.5" cy="46" r="2.8" fill="#8fd3ef" stroke="#1f2937" strokeWidth="0.9" />
            <circle cx="72.5" cy="46" r="2.8" fill="#8fd3ef" stroke="#1f2937" strokeWidth="0.9" />
            <circle cx="42.5" cy="16" r="2.8" fill="#8fd3ef" stroke="#1f2937" strokeWidth="0.9" />
            <circle cx="42.5" cy="76" r="2.8" fill="#8fd3ef" stroke="#1f2937" strokeWidth="0.9" />
          </g>

          {/* Plus Sign */}
          <text x="122" y="72" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="14" fill="#64748b">+</text>

          {/* Panel 2: IONIC LATTICE */}
          <g transform="translate(135, 20)">
            <rect x="0" y="0" width="85" height="92" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="92" width="85" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="42.5" y="104" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">IONIC LATTICE</text>
            <g stroke="#1f2937" strokeWidth="1.1">
              <circle cx="20" cy="24" r="6" fill="#b5efb0" />
              <circle cx="42.5" cy="24" r="8" fill="#8fd3ef" />
              <circle cx="65" cy="24" r="6" fill="#b5efb0" />
              <circle cx="20" cy="46" r="8" fill="#8fd3ef" />
              <circle cx="42.5" cy="46" r="6" fill="#b5efb0" />
              <circle cx="65" cy="46" r="8" fill="#8fd3ef" />
              <circle cx="20" cy="68" r="6" fill="#b5efb0" />
              <circle cx="42.5" cy="68" r="8" fill="#8fd3ef" />
              <circle cx="65" cy="68" r="6" fill="#b5efb0" />
            </g>
          </g>

          {/* Arrow */}
          <g transform="translate(230, 68)">
            <path d="M 0 0 L 12 0" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 9 -3 L 13 0 L 9 3" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Kitten Chemist Hugging a Giant Covalent Molecule */}
          <g transform="translate(300, 65)">
            {/* Molecular Bonds behind */}
            <line x1="-30" y1="-25" x2="0" y2="0" stroke="#a855f7" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="25" y1="-25" x2="0" y2="0" stroke="#a855f7" strokeWidth="2" />
            <circle cx="-30" cy="-25" r="7" fill="#f3e8ff" stroke="#7e22ce" strokeWidth="1.2" />
            <text x="-30" y="-22" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#7e22ce">H</text>
            <circle cx="25" cy="-25" r="7" fill="#f3e8ff" stroke="#7e22ce" strokeWidth="1.2" />
            <text x="25" y="-22" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#7e22ce">H</text>

            {/* Kitten Tail */}
            <path d="M 16 30 C 26 28 32 18 28 8" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Kitten Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Kitten Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Paws holding center atom */}
            <ellipse cx="-6" cy="14" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="6" cy="14" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 3: STOICHIOMETRY (Analytical Balance, Mole Flask & Balancing Kitten)
    // ==========================================
    case 3:
    case 203:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t3-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t3-grid)" />

          {/* Analytical Two-Pan Balance */}
          <g transform="translate(130, 68)">
            {/* Stand */}
            <line x1="0" y1="-28" x2="0" y2="38" stroke="#1f2937" strokeWidth="3" />
            <rect x="-35" y="38" width="70" height="8" rx="2" fill="#94a3b8" stroke="#1f2937" strokeWidth="1.5" />
            {/* Fulcrum and Pivot */}
            <polygon points="-6,-28 6,-28 0,-34" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            {/* Beam */}
            <line x1="-80" y1="-28" x2="80" y2="-28" stroke="#1f2937" strokeWidth="2.5" />
            {/* Left Pan Strings & Pan */}
            <line x1="-80" y1="-28" x2="-95" y2="8" stroke="#64748b" strokeWidth="1" />
            <line x1="-80" y1="-28" x2="-65" y2="8" stroke="#64748b" strokeWidth="1" />
            <ellipse cx="-80" cy="8" rx="22" ry="5" fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.4" />
            {/* Volumetric Flask on Left Pan */}
            <path d="M -84 -12 L -76 -12 L -76 -6 L -71 4 L -89 4 L -84 -6 Z" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="-96" y="-30" width="32" height="14" rx="3" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
            <text x="-80" y="-20" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#0369a1">1 MOL</text>

            {/* Right Pan Strings & Pan */}
            <line x1="80" y1="-28" x2="65" y2="8" stroke="#64748b" strokeWidth="1" />
            <line x1="80" y1="-28" x2="95" y2="8" stroke="#64748b" strokeWidth="1" />
            <ellipse cx="80" cy="8" rx="22" ry="5" fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.4" />
            {/* Weights on Right Pan */}
            <rect x="74" y="-2" width="12" height="8" rx="1.5" fill="#fde58a" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="65" y="-20" width="48" height="14" rx="3" fill="#ffffff" stroke="#d97706" strokeWidth="1" />
            <text x="89" y="-10" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#b45309">24 DM³</text>
          </g>

          {/* Formula Callout Card on Left */}
          <g transform="translate(20, 24)">
            <rect x="0" y="0" width="68" height="52" rx="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.4" />
            <text x="34" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">AVOGADRO</text>
            <text x="34" y="30" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#0284c7">6.02 × 10²³</text>
            <text x="34" y="44" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#10b981">n = m / Mᵣ</text>
          </g>

          {/* Scholar Kitten Adjusting Balance with Precision */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Little Pencil Tucked Behind Right Ear */}
            <line x1="8" y1="-18" x2="16" y2="-26" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <polygon points="16,-26 18,-28 15,-27" fill="#0f172a" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Left Paw tapping balance beam */}
            <path d="M -8 16 C -20 10 -35 -14 -40 -16" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <ellipse cx="-40" cy="-16" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            {/* Right Paw holding tiny notebook */}
            <rect x="2" y="14" width="14" height="18" rx="2" fill="#f1f5f9" stroke="#1f2937" strokeWidth="1.1" />
            <line x1="5" y1="18" x2="13" y2="18" stroke="#94a3b8" strokeWidth="1" />
            <line x1="5" y1="23" x2="13" y2="23" stroke="#94a3b8" strokeWidth="1" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 4: ELECTROCHEMISTRY (Electrolysis Cell, Bubbling Electrodes & Kitten with Goggles)
    // ==========================================
    case 4:
    case 204:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t4-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t4-grid)" />

          {/* Power Supply / Battery */}
          <g transform="translate(130, 22)">
            <rect x="-24" y="-8" width="48" height="18" rx="3" fill="#334155" stroke="#1f2937" strokeWidth="1.2" />
            <text x="-12" y="5" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="9" fill="#f87171">+</text>
            <text x="12" y="5" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="9" fill="#60a5fa">-</text>
            {/* Connecting Circuit Wires */}
            <path d="M -24 0 L -65 0 L -65 40" stroke="#ef4444" strokeWidth="1.6" fill="none" />
            <path d="M 24 0 L 65 0 L 65 40" stroke="#3b82f6" strokeWidth="1.6" fill="none" />
          </g>

          {/* Electrolytic Beaker */}
          <g transform="translate(130, 60)">
            <rect x="-80" y="0" width="160" height="68" rx="5" fill="#ffffff" stroke="#1f2937" strokeWidth="1.6" />
            {/* Electrolyte solution */}
            <rect x="-78" y="16" width="156" height="50" rx="3" fill="#8fd3ef" stroke="none" />
            {/* Anode (+) on Left */}
            <rect x="-70" y="-12" width="12" height="60" rx="2" fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
            <text x="-64" y="62" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">ANODE</text>
            {/* Anode bubbles */}
            <circle cx="-54" cy="24" r="2.5" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="-53" cy="38" r="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="-55" cy="48" r="3" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />

            {/* Cathode (-) on Right */}
            <rect x="58" y="-12" width="12" height="60" rx="2" fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
            <text x="64" y="62" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">CATHODE</text>
            {/* Cathode bubbles / Cu layer */}
            <circle cx="50" cy="20" r="2.5" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="52" cy="34" r="3" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="48" cy="46" r="2.5" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
          </g>

          {/* Electrolyte Card */}
          <g transform="translate(20, 48)">
            <rect x="0" y="0" width="68" height="42" rx="4" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.2" />
            <text x="34" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#1f2937">ELECTROLYTE</text>
            <text x="34" y="30" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#0284c7">CuSO₄ (aq)</text>
          </g>

          {/* Kitten Wearing Safety Goggles Watching Bubbles */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Green Chemistry Safety Goggles Strap */}
            <path d="M -14 -1 L -10 1 L 10 1 L 14 -1" stroke="#10b981" strokeWidth="1.8" fill="none" />
            {/* Goggles Lens */}
            <rect x="-8" y="-5" width="16" height="10" rx="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.4" />
            <circle cx="-3" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="3" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="4" x2="-17" y2="3" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="6" x2="-17" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="4" x2="18" y2="3" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="6" x2="18" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Paws Resting on Beaker Edge */}
            <ellipse cx="-10" cy="18" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="2" cy="22" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 5: CHEMICAL ENERGETICS (Reaction Profile, ΔH < 0 & Kitten Warming Paws by Flame)
    // ==========================================
    case 5:
    case 205:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t5-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t5-grid)" />

          {/* Reaction Profile Coordinate System */}
          <g transform="translate(35, 25)">
            {/* Y & X Axes */}
            <line x1="20" y1="88" x2="20" y2="8" stroke="#1f2937" strokeWidth="1.5" />
            <path d="M 18 12 L 20 6 L 22 12" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" />
            <text x="14" y="8" textAnchor="end" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">ENERGY</text>

            <line x1="20" y1="88" x2="190" y2="88" stroke="#1f2937" strokeWidth="1.5" />
            <path d="M 186 86 L 192 88 L 186 90" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" />
            <text x="190" y="100" textAnchor="end" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#64748b">PROGRESS</text>

            {/* Exothermic Curve: Reactants -> Peak (Ea) -> Products */}
            <line x1="25" y1="50" x2="60" y2="50" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" />
            <text x="42" y="44" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#2563eb">REACTANTS</text>

            <path d="M 60 50 C 85 10, 115 10, 140 75" fill="none" stroke="#ef4444" strokeWidth="2.2" />

            <line x1="140" y1="75" x2="180" y2="75" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" />
            <text x="160" y="70" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#16a34a">PRODUCTS</text>

            {/* Activation Energy Ea Arrow */}
            <line x1="95" y1="50" x2="95" y2="18" stroke="#d97706" strokeWidth="1.2" strokeDasharray="2 2" />
            <path d="M 93 22 L 95 16 L 97 22" fill="none" stroke="#d97706" strokeWidth="1.2" />
            <text x="105" y="32" textAnchor="start" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#d97706">Eₐ</text>

            {/* ΔH Arrow */}
            <line x1="170" y1="50" x2="170" y2="75" stroke="#dc2626" strokeWidth="1.4" />
            <path d="M 168 70 L 170 75 L 172 70" fill="none" stroke="#dc2626" strokeWidth="1.4" />
            <text x="175" y="65" textAnchor="start" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#dc2626">ΔH &lt; 0</text>
          </g>

          {/* Exothermic Flame & Kitten Warming Paws */}
          <g transform="translate(265, 85)">
            {/* Tiny Bunsen / Crucible */}
            <rect x="-14" y="18" width="28" height="6" rx="2" fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
            {/* Cozy Flame */}
            <path d="M 0 18 C -8 12, -6 0, 0 -8 C 6 0, 8 12, 0 18 Z" fill="#fde047" stroke="#ea580c" strokeWidth="1.2" />
            <path d="M 0 18 C -4 14, -3 6, 0 2 C 3 6, 4 14, 0 18 Z" fill="#fb923c" />
          </g>

          <g transform="translate(320, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Blissful Closed Eyes warming by fire */}
            <path d="M -6 -1 Q -3 -4 0 -1" stroke="#334155" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <path d="M 3 -1 Q 6 -4 9 -1" stroke="#334155" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            {/* Pink Nose & Happy Smile */}
            <polygon points="1,-5 2.5,-5 1.7,-4" fill="#f43f5e" />
            <path d="M 0 3 Q 1.7 5 3.4 3" stroke="#334155" strokeWidth="1" fill="none" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Both Paws Reaching Forward towards Flame */}
            <path d="M -6 16 C -18 18 -32 20 -38 18" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="-38" cy="18" r="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <path d="M 0 18 C -14 22 -28 24 -34 22" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="-34" cy="22" r="2.8" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 6: CHEMICAL REACTIONS (Reaction Rates, Stopwatch & Kitten Timing Effervescence)
    // ==========================================
    case 6:
    case 206:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t6-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t6-grid)" />

          {/* Conical Flask with Effervescence */}
          <g transform="translate(60, 45)">
            <path d="M 0 0 L 12 0 L 12 18 L 32 60 L -20 60 L 0 18 Z" fill="#ffffff" stroke="#1f2937" strokeWidth="1.6" />
            {/* Acid & Marble Chips */}
            <path d="M -16 56 L 28 56 L 22 42 L -10 42 Z" fill="#8fd3ef" stroke="none" />
            <rect x="-8" y="50" width="8" height="5" rx="1" fill="#cbd5e1" stroke="#1f2937" strokeWidth="0.8" />
            <rect x="6" y="52" width="7" height="4" rx="1" fill="#cbd5e1" stroke="#1f2937" strokeWidth="0.8" />
            <rect x="16" y="49" width="6" height="6" rx="1" fill="#cbd5e1" stroke="#1f2937" strokeWidth="0.8" />
            {/* Gas Bubbles rising */}
            <circle cx="2" cy="34" r="2.5" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="12" cy="24" r="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="6" cy="12" r="3" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
            {/* Delivery Tube out the top */}
            <path d="M 6 0 L 6 -14 L 35 -14" stroke="#1f2937" strokeWidth="2" fill="none" />
          </g>

          {/* Rate Curve Graph (V vs t) */}
          <g transform="translate(130, 32)">
            <rect x="0" y="0" width="105" height="78" rx="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.4" />
            <line x1="16" y1="64" x2="95" y2="64" stroke="#1f2937" strokeWidth="1" />
            <line x1="16" y1="64" x2="16" y2="12" stroke="#1f2937" strokeWidth="1" />
            <text x="14" y="16" textAnchor="end" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#64748b">V</text>
            <text x="96" y="72" textAnchor="end" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#64748b">t</text>
            {/* Fast Rate Curve (Catalyst / High Temp) */}
            <path d="M 16 64 Q 30 24 90 24" fill="none" stroke="#ef4444" strokeWidth="1.8" />
            {/* Normal Rate Curve */}
            <path d="M 16 64 Q 50 40 90 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeDasharray="3 2" />
            <text x="56" y="74" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#1f2937">RATE = ΔV / Δt</text>
          </g>

          {/* Scholar Kitten with Big Digital Stopwatch */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Kitten Holding Stopwatch in Paws */}
            <circle cx="-16" cy="16" r="10" fill="#fde047" stroke="#1f2937" strokeWidth="1.4" />
            <rect x="-18" y="4" width="4" height="3" rx="1" fill="#1f2937" />
            {/* Stopwatch hand */}
            <line x1="-16" y1="16" x2="-14" y2="10" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="-16" cy="16" r="1.5" fill="#1f2937" />
            {/* Paws grasping watch */}
            <ellipse cx="-10" cy="20" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
            <ellipse cx="-22" cy="18" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 7: ACIDS, BASES AND SALTS (Burette Titration, pH Rainbow & Kitten at End-Point)
    // ==========================================
    case 7:
    case 207:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t7-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t7-grid)" />

          {/* Titration Stand & Burette */}
          <g transform="translate(85, 20)">
            <line x1="0" y1="8" x2="0" y2="92" stroke="#1f2937" strokeWidth="2.5" />
            <rect x="-16" y="92" width="50" height="8" rx="2" fill="#94a3b8" stroke="#1f2937" strokeWidth="1.2" />
            {/* White Tile */}
            <rect x="12" y="88" width="48" height="6" rx="1.5" fill="#ffffff" stroke="#1f2937" strokeWidth="1" />
            <text x="36" y="102" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#64748b">WHITE TILE</text>

            {/* Clamped Burette */}
            <rect x="28" y="0" width="8" height="62" rx="1" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="28" y="18" width="8" height="44" fill="#fde58a" stroke="none" />
            {/* Graduations */}
            <line x1="28" y1="12" x2="32" y2="12" stroke="#1f2937" strokeWidth="0.8" />
            <line x1="28" y1="24" x2="32" y2="24" stroke="#1f2937" strokeWidth="0.8" />
            <line x1="28" y1="36" x2="32" y2="36" stroke="#1f2937" strokeWidth="0.8" />
            <line x1="28" y1="48" x2="32" y2="48" stroke="#1f2937" strokeWidth="0.8" />
            {/* Stopcock */}
            <circle cx="32" cy="64" r="2.5" fill="#ef4444" stroke="#1f2937" strokeWidth="1" />
            {/* Tip & Falling Drop */}
            <line x1="32" y1="66" x2="32" y2="72" stroke="#1f2937" strokeWidth="1.4" />
            <circle cx="32" cy="76" r="1.5" fill="#f59e0b" />

            {/* Conical Flask */}
            <path d="M 26 76 L 38 76 L 46 90 L 18 90 Z" fill="#ffffff" stroke="#1f2937" strokeWidth="1.4" />
            <path d="M 22 84 L 42 84 L 46 90 L 18 90 Z" fill="#fca5a5" stroke="none" />
          </g>

          {/* pH Rainbow Strip & Indicator Guide */}
          <g transform="translate(165, 30)">
            <rect x="0" y="0" width="105" height="78" rx="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.4" />
            <text x="52.5" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">pH SCALE (0 - 14)</text>
            {/* Rainbow bar */}
            <g transform="translate(8, 22)">
              <rect x="0" y="0" width="13" height="14" rx="2" fill="#ef4444" />
              <rect x="13" y="0" width="13" height="14" fill="#f97316" />
              <rect x="26" y="0" width="13" height="14" fill="#eab308" />
              <rect x="39" y="0" width="13" height="14" fill="#22c55e" />
              <rect x="52" y="0" width="13" height="14" fill="#06b6d4" />
              <rect x="65" y="0" width="13" height="14" fill="#3b82f6" />
              <rect x="78" y="0" width="13" height="14" rx="2" fill="#8b5cf6" />
              <text x="6" y="11" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">1</text>
              <text x="45" y="11" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">7</text>
              <text x="84" y="11" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">14</text>
            </g>
            <text x="52.5" y="52" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#dc2626">METHYL ORANGE: RED ↔ YEL</text>
            <text x="52.5" y="66" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#2563eb">THYMOLPHTHALEIN: CLR ↔ BLU</text>
          </g>

          {/* Scholar Kitten Watching the End-Point Drop */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head tilted forward attentively */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            {/* Wide Curious Eyes */}
            <circle cx="-4" cy="0" r="1.8" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.8" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Paws */}
            <ellipse cx="-6" cy="20" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="6" cy="20" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 8: THE PERIODIC TABLE (Grid Trends, Group I & VII & Professor Kitten with Pointer)
    // ==========================================
    case 8:
    case 208:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t8-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t8-grid)" />

          {/* Periodic Table Miniature Chart on Board */}
          <g transform="translate(25, 20)">
            <rect x="0" y="0" width="225" height="98" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            {/* Top header bar */}
            <rect x="0" y="0" width="225" height="20" rx="6" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="112.5" y="14" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">PERIODIC TABLE OF ELEMENTS</text>

            {/* Group I Column (Alkali Metals - Red/Orange) */}
            <g transform="translate(10, 26)">
              <rect x="0" y="0" width="28" height="66" rx="3" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
              <text x="14" y="11" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#dc2626">GRP I</text>
              <rect x="3" y="14" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="24" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Li</text>
              <rect x="3" y="31" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="41" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Na</text>
              <rect x="3" y="48" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="58" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">K</text>
            </g>

            {/* Transition Elements Block */}
            <g transform="translate(45, 42)">
              <rect x="0" y="0" width="85" height="50" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
              <text x="42.5" y="14" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#b45309">TRANSITION METALS</text>
              <text x="42.5" y="28" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Fe • Cu • Ni • Cr</text>
              <text x="42.5" y="40" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#4b5563">VARIABLE VALENCY &amp; CATALYSTS</text>
            </g>

            {/* Group VII Halogens */}
            <g transform="translate(138, 26)">
              <rect x="0" y="0" width="28" height="66" rx="3" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
              <text x="14" y="11" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#16a34a">GRP VII</text>
              <rect x="3" y="14" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="24" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">F</text>
              <rect x="3" y="31" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="41" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Cl</text>
              <rect x="3" y="48" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="58" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Br</text>
            </g>

            {/* Group VIII Noble Gases */}
            <g transform="translate(172, 26)">
              <rect x="0" y="0" width="28" height="66" rx="3" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1" />
              <text x="14" y="11" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#4f46e5">NOBLE</text>
              <rect x="3" y="14" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="24" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">He</text>
              <rect x="3" y="31" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="41" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Ne</text>
              <rect x="3" y="48" width="22" height="14" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="14" y="58" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">Ar</text>
            </g>
          </g>

          {/* Professor Kitten with Pointer Stick & Bow-tie */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Dapper Red Bow Tie */}
            <polygon points="-4,8 0,11 -4,14" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            <polygon points="4,8 0,11 4,14" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            <circle cx="0" cy="11" r="1.5" fill="#ffffff" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Left Paw holding wooden pointer pointing at the table */}
            <path d="M -8 16 C -18 10 -30 2 -38 -4" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="-38" y1="-4" x2="-65" y2="-18" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="-38" cy="-4" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            {/* Right Paw on hip */}
            <ellipse cx="10" cy="20" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 9: METALS (Reactivity Series Ladder, Alloy Lattice & Kitten in Hard Hat)
    // ==========================================
    case 9:
    case 209:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t9-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t9-grid)" />

          {/* Reactivity Series Ladder */}
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="95" height="98" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="0" width="95" height="20" rx="6" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="47.5" y="14" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#1f2937">REACTIVITY SERIES</text>
            {/* Gradient bars from most to least reactive */}
            <g transform="translate(10, 26)">
              <rect x="0" y="0" width="75" height="11" rx="2" fill="#fca5a5" stroke="#1f2937" strokeWidth="0.8" />
              <text x="37.5" y="8" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#7f1d1d">K &gt; Na &gt; Ca (MOST)</text>

              <rect x="0" y="14" width="75" height="11" rx="2" fill="#fde047" stroke="#1f2937" strokeWidth="0.8" />
              <text x="37.5" y="22" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#713f12">Mg &gt; Al &gt; C &gt; Zn</text>

              <rect x="0" y="28" width="75" height="11" rx="2" fill="#93c5fd" stroke="#1f2937" strokeWidth="0.8" />
              <text x="37.5" y="36" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#1e3a8a">Fe &gt; H &gt; Cu</text>

              <rect x="0" y="42" width="75" height="11" rx="2" fill="#cbd5e1" stroke="#1f2937" strokeWidth="0.8" />
              <text x="37.5" y="50" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#334155">Ag &gt; Au (LEAST)</text>
            </g>
          </g>

          {/* Alloy Lattice Diagram (Why alloys are harder) */}
          <g transform="translate(140, 25)">
            <rect x="0" y="0" width="115" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <text x="57.5" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">ALLOY LATTICE</text>
            {/* Pure rows distorted by larger atom */}
            <g transform="translate(12, 24)">
              {/* Row 1 */}
              <circle cx="10" cy="10" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="26" cy="10" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="42" cy="10" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="58" cy="10" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="74" cy="10" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              {/* Row 2 with larger foreign atom */}
              <circle cx="10" cy="26" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="28" cy="28" r="10" fill="#fde58a" stroke="#1f2937" strokeWidth="1.3" />
              <circle cx="52" cy="26" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="68" cy="26" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="84" cy="26" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              {/* Row 3 */}
              <circle cx="10" cy="42" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="26" cy="45" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="42" cy="42" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="58" cy="42" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
              <circle cx="74" cy="42" r="7" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.1" />
            </g>
            <text x="57.5" y="80" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#d97706">LAYERS CANNOT SLIDE</text>
          </g>

          {/* Builder Kitten with Hard Hat Inspecting Metal */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Cute Yellow Builder Hard Hat */}
            <path d="M -13 -8 C -13 -22 13 -22 13 -8 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.4" />
            <rect x="-16" y="-8" width="32" height="4" rx="2" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Left Paw holding small hammer / testing hardness */}
            <path d="M -8 16 C -18 12 -26 8 -30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="-34" y="2" width="6" height="8" rx="1.5" fill="#94a3b8" stroke="#1f2937" strokeWidth="1" />
            <ellipse cx="-30" cy="6" rx="3" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
            {/* Right Paw */}
            <ellipse cx="6" cy="20" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 10: CHEMISTRY OF THE ENVIRONMENT (Clean Water Filter, Air Chart & Eco-Kitten with Sprout)
    // ==========================================
    case 10:
    case 210:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t10-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t10-grid)" />

          {/* Clean Water 4-Stage Filtration Column */}
          <g transform="translate(45, 20)">
            <rect x="0" y="0" width="85" height="98" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <rect x="0" y="0" width="85" height="18" rx="6" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="42.5" y="13" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7.5" fill="#1f2937">WATER TREATMENT</text>
            {/* Sedimentation */}
            <rect x="8" y="24" width="69" height="14" rx="2" fill="#fed7aa" stroke="#1f2937" strokeWidth="0.8" />
            <text x="42.5" y="34" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#9a3412">1. SEDIMENTATION</text>
            {/* Filtration (Sand & Gravel) */}
            <rect x="8" y="42" width="69" height="14" rx="2" fill="#fde68a" stroke="#1f2937" strokeWidth="0.8" />
            <text x="42.5" y="52" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#854d0e">2. CARBON / SAND</text>
            {/* Chlorination */}
            <rect x="8" y="60" width="69" height="14" rx="2" fill="#bbf7d0" stroke="#1f2937" strokeWidth="0.8" />
            <text x="42.5" y="70" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#166534">3. CHLORINATION (Cl₂)</text>
            {/* Pure Water Output */}
            <path d="M 42.5 76 L 42.5 86" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            <circle cx="42.5" cy="89" r="2.5" fill="#38bdf8" />
          </g>

          {/* Clean Air Composition Donut / Bar */}
          <g transform="translate(150, 25)">
            <rect x="0" y="0" width="110" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <text x="55" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">CLEAN AIR COMPOSITION</text>
            <g transform="translate(10, 24)">
              <rect x="0" y="0" width="90" height="14" rx="2" fill="#93c5fd" stroke="#1f2937" strokeWidth="0.8" />
              <text x="45" y="10" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1e3a8a">78% NITROGEN (N₂)</text>

              <rect x="0" y="18" width="90" height="14" rx="2" fill="#86efac" stroke="#1f2937" strokeWidth="0.8" />
              <text x="45" y="28" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#14532d">21% OXYGEN (O₂)</text>

              <rect x="0" y="36" width="90" height="14" rx="2" fill="#e9d5ff" stroke="#1f2937" strokeWidth="0.8" />
              <text x="45" y="46" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#581c87">0.9% Ar • 0.04% CO₂</text>
            </g>
          </g>

          {/* Eco Kitten with Green Sprout Leaf & Pure Water Beaker */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Cute Plant Sprout on Head */}
            <path d="M 0 -14 Q -4 -22 -10 -22 Q -4 -18 0 -14 Q 4 -22 10 -22 Q 4 -18 0 -14 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
            <line x1="0" y1="-14" x2="0" y2="-9" stroke="#15803d" strokeWidth="1.4" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Paws holding beaker of pure water */}
            <rect x="-12" y="12" width="14" height="18" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="-10" y="18" width="10" height="10" fill="#8fd3ef" stroke="none" />
            <ellipse cx="-6" cy="18" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
            <ellipse cx="6" cy="20" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 11: ORGANIC CHEMISTRY (Displayed Formula, Polymer Chain & Kitten Batting Molecule)
    // ==========================================
    case 11:
    case 211:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t11-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t11-grid)" />

          {/* Ethene C=C Double Bond Structural Display */}
          <g transform="translate(30, 25)">
            <rect x="0" y="0" width="115" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <text x="57.5" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">ETHENE (C₂H₄)</text>
            {/* Displayed formula */}
            <g transform="translate(57.5, 48)">
              {/* Double bond */}
              <line x1="-10" y1="-3" x2="10" y2="-3" stroke="#1f2937" strokeWidth="2" />
              <line x1="-10" y1="3" x2="10" y2="3" stroke="#1f2937" strokeWidth="2" />
              <circle cx="-16" cy="0" r="7" fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
              <text x="-16" y="3" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">C</text>
              <circle cx="16" cy="0" r="7" fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
              <text x="16" y="3" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#ffffff">C</text>
              {/* Hydrogens */}
              <line x1="-22" y1="-5" x2="-32" y2="-15" stroke="#1f2937" strokeWidth="1.4" />
              <circle cx="-35" cy="-18" r="5" fill="#f1f5f9" stroke="#1f2937" strokeWidth="1" />
              <text x="-35" y="-16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#1f2937">H</text>

              <line x1="-22" y1="5" x2="-32" y2="15" stroke="#1f2937" strokeWidth="1.4" />
              <circle cx="-35" cy="18" r="5" fill="#f1f5f9" stroke="#1f2937" strokeWidth="1" />
              <text x="-35" y="20" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#1f2937">H</text>

              <line x1="22" y1="-5" x2="32" y2="-15" stroke="#1f2937" strokeWidth="1.4" />
              <circle cx="35" cy="-18" r="5" fill="#f1f5f9" stroke="#1f2937" strokeWidth="1" />
              <text x="35" y="-16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#1f2937">H</text>

              <line x1="22" y1="5" x2="32" y2="15" stroke="#1f2937" strokeWidth="1.4" />
              <circle cx="35" cy="18" r="5" fill="#f1f5f9" stroke="#1f2937" strokeWidth="1" />
              <text x="35" y="20" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#1f2937">H</text>
            </g>
            <text x="57.5" y="80" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#ef4444">UNSATURATED C=C</text>
          </g>

          {/* Polyethene Polymer Chain */}
          <g transform="translate(155, 30)">
            <rect x="0" y="0" width="105" height="78" rx="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.4" />
            <text x="52.5" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">POLYMERISATION</text>
            {/* Repeat Unit */}
            <g transform="translate(25, 26)">
              <rect x="0" y="0" width="55" height="42" rx="3" fill="#f1f5f9" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
              <text x="27.5" y="14" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#6d28d9">REPEAT UNIT</text>
              <line x1="-10" y1="28" x2="65" y2="28" stroke="#1f2937" strokeWidth="1.8" />
              <circle cx="15" cy="28" r="5" fill="#64748b" stroke="#1f2937" strokeWidth="1" />
              <circle cx="40" cy="28" r="5" fill="#64748b" stroke="#1f2937" strokeWidth="1" />
              <text x="68" y="35" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#7c3aed">ₙ</text>
            </g>
          </g>

          {/* Playful Kitten Batting at Floating Ball-and-Stick Molecule */}
          <g transform="translate(305, 66)">
            {/* Floating yarn/molecule */}
            <circle cx="-38" cy="-12" r="6" fill="#f43f5e" stroke="#1f2937" strokeWidth="1.2" />
            <line x1="-38" y1="-6" x2="-26" y2="4" stroke="#1f2937" strokeWidth="1.6" />
            <circle cx="-24" cy="6" r="4.5" fill="#60a5fa" stroke="#1f2937" strokeWidth="1" />

            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Left Paw Reaching Up batting at molecule */}
            <path d="M -8 16 C -18 8 -28 -2 -34 -8" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <ellipse cx="-34" cy="-8" rx="3" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            {/* Right Paw */}
            <ellipse cx="6" cy="20" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    // ==========================================
    // TOPIC 12: EXPERIMENTAL TECHNIQUES & ANALYSIS (Chromatography, Test Tubes & Detective Kitten)
    // ==========================================
    case 12:
    case 212:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="igcse-t12-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#igcse-t12-grid)" />

          {/* Chromatography Tank with Paper Strip */}
          <g transform="translate(35, 18)">
            <rect x="0" y="0" width="90" height="102" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            {/* Solvent layer */}
            <rect x="1" y="86" width="88" height="15" rx="2" fill="#8fd3ef" stroke="none" />
            {/* Paper Strip */}
            <rect x="18" y="10" width="54" height="84" fill="#ffffff" stroke="#1f2937" strokeWidth="1" />
            {/* Pencil Baseline */}
            <line x1="18" y1="80" x2="72" y2="80" stroke="#1f2937" strokeWidth="1.2" />
            <text x="45" y="88" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="5.5" fill="#64748b">PENCIL LINE</text>
            {/* Solvent Front */}
            <line x1="18" y1="24" x2="72" y2="24" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x="45" y="21" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="5.5" fill="#2563eb">SOLVENT FRONT</text>
            {/* Dye Spots */}
            <circle cx="32" cy="52" r="3" fill="#ef4444" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="45" cy="40" r="3" fill="#eab308" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="58" cy="62" r="3" fill="#3b82f6" stroke="#1f2937" strokeWidth="0.8" />
          </g>

          {/* Qualitative Test Tubes Rack (Precipitate Colours) */}
          <g transform="translate(140, 25)">
            <rect x="0" y="0" width="115" height="88" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
            <text x="57.5" y="16" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8" fill="#1f2937">CATION PRECIPITATES</text>
            {/* Test Tube 1: Cu2+ Blue */}
            <rect x="15" y="24" width="16" height="48" rx="3" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="16" y="44" width="14" height="27" rx="2" fill="#60a5fa" stroke="none" />
            <text x="23" y="80" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#2563eb">Cu²⁺</text>

            {/* Test Tube 2: Fe2+ Green */}
            <rect x="50" y="24" width="16" height="48" rx="3" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="51" y="44" width="14" height="27" rx="2" fill="#86efac" stroke="none" />
            <text x="58" y="80" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#16a34a">Fe²⁺</text>

            {/* Test Tube 3: Fe3+ Red-Brown */}
            <rect x="85" y="24" width="16" height="48" rx="3" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
            <rect x="86" y="44" width="14" height="27" rx="2" fill="#f87171" stroke="none" />
            <text x="93" y="80" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="6.5" fill="#dc2626">Fe³⁺</text>
          </g>

          {/* Detective Kitten with Magnifying Glass */}
          <g transform="translate(305, 66)">
            {/* Tail */}
            <path d="M 18 28 C 28 26 34 16 30 6" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Body */}
            <path d="M -12 36 C -14 20 -8 8 0 8 C 8 8 14 20 12 36 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Head */}
            <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Ears */}
            <polygon points="-10,-9 -6,-20 -1,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-8,-10 -6,-17 -3,-12" fill="#fda4af" />
            <polygon points="3,-12 8,-20 12,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="5,-12 8,-17 10,-10" fill="#fda4af" />
            {/* Glasses */}
            <circle cx="-4" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="0" r="4.5" stroke="#0284c7" strokeWidth="1.2" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="-4" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="5" cy="0" r="1.5" fill="#0f172a" />
            {/* Whiskers */}
            <line x1="-10" y1="3" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="-10" y1="5" x2="-17" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="3" x2="18" y2="2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="5" x2="18" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            {/* Left Paw Holding Magnifying Glass */}
            <path d="M -8 16 C -18 10 -26 4 -32 2" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Magnifying Glass */}
            <circle cx="-38" cy="-6" r="11" fill="#e0f2fe" fillOpacity="0.7" stroke="#1f2937" strokeWidth="1.8" />
            <line x1="-31" y1="2" x2="-22" y2="12" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="-26" cy="6" rx="3" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
            {/* Sparkle of discovery inside lens */}
            <text x="-38" y="-3" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#0284c7">R_f</text>
            {/* Right Paw */}
            <ellipse cx="6" cy="20" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="400" height="144" fill="#ffffff" />
          <circle cx="200" cy="72" r="28" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <text x="200" y="76" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="12" fill="#6b21a8">
            IGCSE 0620
          </text>
        </svg>
      );
  }
};

IgcseTopicSvgArt.displayName = 'IgcseTopicSvgArt';
