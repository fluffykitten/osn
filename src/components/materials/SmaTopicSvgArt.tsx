import React from 'react';

interface SmaTopicSvgArtProps {
  topicNumber: number;
  className?: string;
}

export const SmaTopicSvgArt: React.FC<SmaTopicSvgArtProps> = ({ topicNumber, className = '' }) => {
  // Shared minimalist dot-grid pattern for technical notebook aesthetic
  const DotGrid = ({ id }: { id: string }) => (
    <pattern id={id} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.8" fill="#f1f5f9" />
    </pattern>
  );

  switch (topicNumber) {
    // ==========================================
    // TOPIK 1: HAKIKAT KIMIA, METODE ILMIAH & KESELAMATAN LAB
    // ==========================================
    case 1:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t1-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t1-grid)" />

          {/* Erlenmeyer Flask with Green Chemistry Liquid (x=130, y=75) */}
          <g transform="translate(130, 75)">
            <path d="M -10 -35 L 10 -35 L 10 -20 L 32 28 C 34 32, 30 36, 26 36 L -26 36 C -30 36, -34 32, -32 28 L -10 -20 Z" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
            <path d="M -24 16 Q 0 20, 24 16 L 26 34 C 26 35, 24 36, 23 36 L -23 36 C -24 36, -26 35, -26 34 Z" fill="#86efac" fillOpacity="0.6" />
            <line x1="-12" y1="0" x2="-6" y2="0" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-15" y1="10" x2="-8" y2="10" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-18" y1="20" x2="-10" y2="20" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="2" cy="18" r="3" fill="#ffffff" stroke="#16a34a" strokeWidth="1" />
            <circle cx="-8" cy="24" r="2" fill="#ffffff" stroke="#16a34a" strokeWidth="0.8" />
            <circle cx="10" cy="26" r="2.5" fill="#ffffff" stroke="#16a34a" strokeWidth="0.8" />
            <path d="M 0 -8 C 8 -16, 16 -8, 8 0 C 0 -4, -4 -6, 0 -8 Z" fill="#22c55e" />
          </g>

          {/* Curious Helper Kitten Peeking behind Flask (x=188, y=78) */}
          <g transform="translate(188, 78)">
            {/* Kitten Tail */}
            <path d="M 12 12 C 22 14, 26 2, 22 -4" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Kitten Body & Head */}
            <ellipse cx="2" cy="12" rx="11" ry="9" fill="#fed7aa" stroke="#334155" strokeWidth="1.6" />
            <circle cx="0" cy="-2" r="10" fill="#ffedd5" stroke="#334155" strokeWidth="1.6" />
            {/* Pointy ears with pink centers */}
            <polygon points="-8,-8 -5,-16 -1,-10" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-7,-9 -5,-14 -3,-10" fill="#fda4af" />
            <polygon points="6,-8 3,-16 -1,-10" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="5,-9 3,-14 1,-10" fill="#fda4af" />
            {/* Eyes */}
            <circle cx="-3.5" cy="-2" r="1.6" fill="#0f172a" />
            <circle cx="3.5" cy="-2" r="1.6" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            {/* 4 Whiskers */}
            <line x1="-6" y1="-1" x2="-13" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-6" y1="1" x2="-13" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="-1" x2="13" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="1" x2="13" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Lead Lab Cat with Safety Goggles & Test Tube (x=270, y=74) */}
          <g transform="translate(270, 74)">
            {/* Long expressive cat tail */}
            <path d="M 16 16 C 30 20, 36 8, 32 -2 C 30 -8, 24 -6, 26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Body */}
            <ellipse cx="0" cy="12" rx="15" ry="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <path d="M -8 18 C -6 24, 6 24, 8 18 Z" fill="#e2e8f0" />
            {/* Head */}
            <circle cx="0" cy="-6" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Pointy ears with pink centers */}
            <polygon points="-11,-14 -6,-24 -1,-17" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-9,-15 -6,-21 -3,-17" fill="#fda4af" />
            <polygon points="11,-14 6,-24 1,-17" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="9,-15 6,-21 3,-17" fill="#fda4af" />
            {/* Safety Goggles */}
            <rect x="-12" y="-11" width="24" height="9" rx="3.5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="-5" cy="-6.5" r="1.8" fill="#0f172a" />
            <circle cx="5" cy="-6.5" r="1.8" fill="#0f172a" />
            {/* Nose & Mouth */}
            <polygon points="-1,-1 1,-1 0,0.5" fill="#f43f5e" />
            <path d="M -2 2 Q 0 3.5 2 2" stroke="#334155" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* 4 Whiskers */}
            <line x1="-9" y1="-2" x2="-17" y2="-4" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="-9" y1="1" x2="-17" y2="2" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="9" y1="-2" x2="17" y2="-4" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="9" y1="1" x2="17" y2="2" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            {/* Paws holding test tube */}
            <ellipse cx="-6" cy="12" rx="3.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
            <ellipse cx="6" cy="12" rx="3.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
            <rect x="-9" y="3" width="5" height="17" rx="2.5" fill="#ecfdf5" stroke="#059669" strokeWidth="1.2" transform="rotate(-15 -7 11)" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 2: STRUKTUR ATOM & NANOMATERIAL
    // ==========================================
    case 2:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t2-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t2-grid)" />

          {/* Graphene Lattice on Left (x=100, y=72) */}
          <g transform="translate(100, 72)" stroke="#e2e8f0" strokeWidth="1.5" fill="none">
            <polygon points="0,-20 17.3,-10 17.3,10 0,20 -17.3,10 -17.3,-10" />
            <polygon points="34.6,-20 51.9,-10 51.9,10 34.6,20 17.3,10 17.3,-10" />
            <polygon points="-34.6,-20 -17.3,-10 -17.3,10 -34.6,20 -51.9,10 -51.9,-10" />
            <circle cx="17.3" cy="10" r="3" fill="#6366f1" stroke="none" />
            <circle cx="0" cy="20" r="3" fill="#6366f1" stroke="none" />
          </g>

          {/* Concentric Bohr Orbit Rings */}
          <g transform="translate(245, 72)">
            <circle cx="0" cy="0" r="28" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="4 3" />
            <circle cx="0" cy="0" r="48" stroke="#818cf8" strokeWidth="1.4" strokeDasharray="5 3" />
            <circle cx="0" cy="-28" r="4" fill="#0284c7" />
            <circle cx="0" cy="28" r="4" fill="#0284c7" />
            <circle cx="-42" cy="-18" r="4" fill="#6366f1" />
            <circle cx="42" cy="18" r="4" fill="#6366f1" />
          </g>

          {/* Cat 1: Nucleus Cat in center with real body, swishing tail & whiskers */}
          <g transform="translate(245, 72)">
            <path d="M 12 10 C 24 14, 28 0, 24 -6" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="6" rx="12" ry="10" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-6" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-8,-12 -5,-20 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-13 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="8,-12 5,-20 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-13 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-3.5" cy="-6" r="1.8" fill="#0f172a" />
            <circle cx="-2.8" cy="-6.7" r="0.7" fill="#ffffff" />
            <circle cx="3.5" cy="-6" r="1.8" fill="#0f172a" />
            <circle cx="4.2" cy="-6.7" r="0.7" fill="#ffffff" />
            <polygon points="-1,-2 1,-2 0,-0.8" fill="#f43f5e" />
            <line x1="-7" y1="-5" x2="-14" y2="-7" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="-2" x2="-14" y2="-1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-5" x2="14" y2="-7" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="-4" cy="11" rx="3" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <ellipse cx="4" cy="11" rx="3" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>

          {/* Cat 2: Little Electron Kitten Orbiting with visible ears, pink inners, tail & whiskers */}
          <g transform="translate(195, 42) rotate(-25)">
            <path d="M -8 6 C -16 10, -20 2, -15 -4" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="3" rx="8" ry="7" fill="#fed7aa" stroke="#334155" strokeWidth="1.4" />
            <circle cx="2" cy="-4" r="7" fill="#ffedd5" stroke="#334155" strokeWidth="1.4" />
            <polygon points="-2,-9 1,-16 4,-9" fill="#ea580c" stroke="#334155" strokeWidth="1.1" strokeLinejoin="round" />
            <polygon points="-1,-10 1,-14 3,-10" fill="#fda4af" />
            <polygon points="5,-8 8,-15 10,-8" fill="#ea580c" stroke="#334155" strokeWidth="1.1" strokeLinejoin="round" />
            <polygon points="6,-9 8,-13 9,-9" fill="#fda4af" />
            <circle cx="0" cy="-4" r="1.3" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.3" fill="#0f172a" />
            <polygon points="1,-2 3,-2 2,-1" fill="#f43f5e" />
            <line x1="-3" y1="-4" x2="-8" y2="-5" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="-3" y1="-2" x2="-8" y2="-2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="5" y1="-4" x2="10" y2="-5" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="5" y1="-2" x2="10" y2="-2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 3: IKATAN KIMIA & GAYA ANTARMOLEKUL
    // ==========================================
    case 3:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t3-grid" />
            <linearGradient id="covOrbital" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffedd5" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t3-grid)" />

          {/* Molecular Overlap Capsule */}
          <g transform="translate(160, 72)">
            <rect x="-65" y="-30" width="130" height="60" rx="30" fill="url(#covOrbital)" stroke="#818cf8" strokeWidth="1.8" strokeDasharray="4 2" />
            {/* Shared Electron Pair in Center */}
            <circle cx="0" cy="-8" r="6" fill="#4f46e5" />
            <text x="0" y="-6.5" fontSize="6.5" fontWeight="bold" fill="#ffffff" textAnchor="middle">e⁻</text>
            <circle cx="0" cy="8" r="6" fill="#f97316" />
            <text x="0" y="9.5" fontSize="6.5" fontWeight="bold" fill="#ffffff" textAnchor="middle">e⁻</text>
          </g>

          {/* Cat 1: White Cat on Left with long tail & whiskers */}
          <g transform="translate(108, 74)">
            <path d="M -16 16 C -30 20, -36 8, -32 -2 C -30 -8, -24 -6, -26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="15" ry="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="2" cy="-4" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-12 -6,-22 -1,-15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-19 -2,-15" fill="#fda4af" />
            <polygon points="9,-12 6,-22 1,-15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="8,-13 6,-19 2,-15" fill="#fda4af" />
            <path d="M -4 -4 Q -1 -7 2 -4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 4 -4 Q 7 -7 10 -4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <polygon points="2,0 4,0 3,1.5" fill="#f43f5e" />
            <line x1="-6" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-6" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="-2" x2="16" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="1" x2="16" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="16" cy="4" rx="4.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          </g>

          {/* Cat 2: Calico Cat on Right with long tail & whiskers */}
          <g transform="translate(212, 74)">
            <path d="M 16 16 C 30 20, 36 8, 32 -2 C 30 -8, 24 -6, 26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="15" ry="13" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <path d="M -8 18 Q 0 24, 8 18 Z" fill="#ffffff" />
            <circle cx="-2" cy="-4" r="14" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <path d="M 0 -10 Q 8 -18, 14 -4 Z" fill="#ea580c" />
            <polygon points="-9,-12 -6,-22 -1,-15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-8,-13 -6,-19 -2,-15" fill="#fda4af" />
            <polygon points="9,-12 6,-22 1,-15" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="8,-13 6,-19 2,-15" fill="#fda4af" />
            <path d="M -10 -4 Q -7 -7 -4 -4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M -2 -4 Q 1 -7 4 -4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <polygon points="-4,0 -2,0 -3,1.5" fill="#f43f5e" />
            <line x1="-8" y1="-2" x2="-16" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-8" y1="1" x2="-16" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="-16" cy="4" rx="4.5" ry="3" fill="#ffedd5" stroke="#334155" strokeWidth="1.3" />
          </g>

          {/* Kitten 3: Kitten on Right with tail batting H-bond */}
          <g transform="translate(325, 76)">
            <line x1="-50" y1="0" x2="-18" y2="0" stroke="#ec4899" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
            <path d="M 12 12 C 22 16, 24 4, 18 -2" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="10" rx="12" ry="9" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
            <circle cx="-3" cy="-2" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
            <polygon points="-9,-8 -6,-16 -2,-10" fill="#ffffff" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-7,-9 -6,-13 -3,-10" fill="#fda4af" />
            <polygon points="5,-8 2,-16 -1,-10" fill="#ffffff" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="4,-9 2,-13 0,-10" fill="#fda4af" />
            <circle cx="-6" cy="-2" r="1.5" fill="#0f172a" />
            <circle cx="0" cy="-2" r="1.5" fill="#0f172a" />
            <line x1="-8" y1="-1" x2="-14" y2="-2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="-8" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="2" y1="-1" x2="8" y2="-2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="2" y1="1" x2="8" y2="2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            <ellipse cx="-13" cy="2" rx="3.5" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" transform="rotate(-30)" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 4: TATA NAMA SENYAWA & PERSAMAAN REAKSI
    // ==========================================
    case 4:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t4-grid" />
            <linearGradient id="slideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t4-grid)" />

          {/* Balanced Scale Beam at Bottom */}
          <g transform="translate(200, 115)">
            <line x1="-120" y1="0" x2="120" y2="0" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="0,-10 -8,4 8,4" fill="#0284c7" />
          </g>

          {/* Cat 1: Reactant Cat on Left with tail, ears & whiskers */}
          <g transform="translate(95, 68)">
            <path d="M -16 16 C -30 20, -36 8, -32 -2 C -30 -8, -24 -6, -26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4.5" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4.5" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            {/* Reactant Block [2H₂ + O₂] */}
            <rect x="12" y="-6" width="34" height="20" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.4" />
            <text x="29" y="7" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="#1e40af" textAnchor="middle">2H₂ + O₂</text>
          </g>

          {/* Center: Reaction Arrow Slide & Sliding Kitten with visible ears, pink inners, tail & whiskers */}
          <g transform="translate(195, 60)">
            <path d="M -35 8 L 20 8 L 20 2 L 36 14 L 20 26 L 20 20 L -35 20 Z" fill="url(#slideGrad)" />
            {/* Sliding Kitten */}
            <g transform="translate(8, -6) rotate(15)">
              <path d="M -8 6 C -18 10, -20 -2, -14 -6" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <ellipse cx="0" cy="4" rx="9" ry="7" fill="#fed7aa" stroke="#334155" strokeWidth="1.5" />
              <circle cx="3" cy="-4" r="7.5" fill="#ffedd5" stroke="#334155" strokeWidth="1.5" />
              <polygon points="-1,-9 2,-16 5,-9" fill="#ea580c" stroke="#334155" strokeWidth="1.1" strokeLinejoin="round" />
              <polygon points="0,-10 2,-14 4,-10" fill="#fda4af" />
              <polygon points="6,-8 9,-15 11,-8" fill="#ea580c" stroke="#334155" strokeWidth="1.1" strokeLinejoin="round" />
              <polygon points="7,-9 9,-13 10,-9" fill="#fda4af" />
              <path d="M 1 -4 Q 3 -6 5 -4" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
              <polygon points="2,-2 4,-2 3,-1" fill="#f43f5e" />
              <line x1="-2" y1="-3" x2="-7" y2="-4" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="-2" y1="-1" x2="-7" y2="-1" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="6" y1="-3" x2="11" y2="-4" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="6" y1="-1" x2="11" y2="-1" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            </g>
          </g>

          {/* Cat 3: Product Cat on Right with tail, ears & whiskers */}
          <g transform="translate(305, 68)">
            <path d="M 16 16 C 30 20, 36 8, 32 -2 C 30 -8, 24 -6, 26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            {/* Product Block [2 H₂O] */}
            <rect x="-46" y="-6" width="32" height="20" rx="4" fill="#d1fae5" stroke="#059669" strokeWidth="1.4" />
            <text x="-30" y="7" fontSize="8.5" fontFamily="monospace" fontWeight="bold" fill="#065f46" textAnchor="middle">2 H₂O</text>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 5: HUKUM DASAR KIMIA & KONSEP MOL
    // ==========================================
    case 5:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t5-grid" />
            <radialGradient id="balloonGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="60%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </radialGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t5-grid)" />

          {/* Left: Cat 1 with Balloon (22.4 L) */}
          <g transform="translate(100, 75)">
            <ellipse cx="-15" cy="-38" rx="22" ry="26" fill="url(#balloonGrad)" stroke="#047857" strokeWidth="1.6" />
            <polygon points="-17,-12 -13,-12 -15,-8" fill="#047857" />
            <text x="-15" y="-35" fontSize="10" fontWeight="extrabold" fill="#ffffff" textAnchor="middle">22.4 L</text>
            <path d="M -15 -8 Q -10 4, 2 10" stroke="#64748b" strokeWidth="1.2" fill="none" />

            <path d="M -14 18 C -26 22, -28 10, -22 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Center: Chalkboard Easel with Avogadro Number & Presenter Cat beside it (No text overlap) */}
          <g transform="translate(170, 75)">
            {/* Chalkboard Easel Stand */}
            <line x1="-32" y1="-44" x2="-40" y2="24" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="-44" x2="30" y2="24" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <rect x="-35" y="-46" width="60" height="30" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="-5" y="-33" fontSize="7.5" fontWeight="bold" fill="#38bdf8" textAnchor="middle">1 mol</text>
            <text x="-5" y="-21" fontSize="7" fontFamily="monospace" fontWeight="bold" fill="#facc15" textAnchor="middle">6.02 × 10²³</text>

            {/* Presenter Cat standing cleanly to the right holding pointer */}
            <g transform="translate(45, 0)">
              <path d="M 12 16 C 24 20, 26 8, 20 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <ellipse cx="0" cy="12" rx="13" ry="11" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
              <circle cx="0" cy="-4" r="12" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
              <polygon points="-8,-11 -4,-20 0,-13" fill="#ea580c" stroke="#334155" strokeWidth="1.3" strokeLinejoin="round" />
              <polygon points="-6,-12 -4,-17 -2,-13" fill="#fda4af" />
              <polygon points="8,-11 4,-20 0,-13" fill="#ea580c" stroke="#334155" strokeWidth="1.3" strokeLinejoin="round" />
              <polygon points="6,-12 4,-17 2,-13" fill="#fda4af" />
              <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
              <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
              <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
              <line x1="-6" y1="-2" x2="-12" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
              <line x1="-6" y1="1" x2="-12" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
              <line x1="6" y1="-2" x2="12" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
              <line x1="6" y1="1" x2="12" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
              {/* Pointer stick pointing toward board */}
              <line x1="-8" y1="4" x2="-26" y2="-16" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          {/* Right: Balance Scale & Kitten 3 with long tail, pink ears & whiskers */}
          <g transform="translate(315, 78)">
            <rect x="-24" y="10" width="48" height="18" rx="3" fill="#f8fafc" stroke="#64748b" strokeWidth="1.4" />
            <text x="0" y="22" fontSize="7.5" fontFamily="monospace" fontWeight="bold" fill="#22c55e" textAnchor="middle">⚖ MASS</text>
            <rect x="-8" y="-6" width="16" height="16" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />

            <g transform="translate(26, -2)">
              <path d="M 8 8 C 16 12, 18 2, 14 -4" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <ellipse cx="0" cy="8" rx="10" ry="8" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              <circle cx="-2" cy="-2" r="8.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              <polygon points="-7,-7 -4,-14 -1,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.1" strokeLinejoin="round" />
              <polygon points="-6,-8 -4,-12 -2,-8" fill="#fda4af" />
              <polygon points="5,-7 2,-14 -1,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.1" strokeLinejoin="round" />
              <polygon points="4,-8 2,-12 0,-8" fill="#fda4af" />
              <circle cx="-5" cy="-2" r="1.4" fill="#0f172a" />
              <circle cx="0" cy="-2" r="1.4" fill="#0f172a" />
              <line x1="-6" y1="-1" x2="-11" y2="-2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="-6" y1="1" x2="-11" y2="2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="2" y1="-1" x2="7" y2="-2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="2" y1="1" x2="7" y2="2" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 6: TERMOKIMIA & HUKUM HESS
    // ==========================================
    case 6:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t6-grid" />
            <radialGradient id="flameGrad" cx="50%" cy="80%" r="70%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </radialGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t6-grid)" />

          {/* Left Side: Reaksi Eksoterm - Warm Cozy Cat Roasting Marshmallow */}
          <g transform="translate(115, 75)">
            {/* Bunsen Burner & Warm Flame */}
            <rect x="-38" y="16" width="16" height="14" rx="2" fill="#64748b" stroke="#334155" strokeWidth="1.2" />
            <path d="M -30 16 C -37 8, -37 -6, -30 -16 C -23 -6, -23 8, -30 16 Z" fill="url(#flameGrad)" />
            <circle cx="-30" cy="2" r="3" fill="#fef08a" />

            {/* Cat 1: Tail, Ears, Whiskers, Toasting Marshmallow */}
            <path d="M 28 16 C 38 20, 42 10, 36 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="14" cy="14" rx="14" ry="12" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <circle cx="14" cy="-2" r="13" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <polygon points="5,-9 9,-19 13,-12" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-10 9,-16 11,-12" fill="#fda4af" />
            <polygon points="23,-9 19,-19 15,-12" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="21,-10 19,-16 17,-12" fill="#fda4af" />
            <path d="M 8 -3 Q 11 -6 14 -3" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 16 -3 Q 19 -6 22 -3" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <polygon points="14,1 16,1 15,2.5" fill="#f43f5e" />
            <line x1="6" y1="-1" x2="0" y2="-3" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="1" x2="0" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="22" y1="-1" x2="28" y2="-3" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="22" y1="1" x2="28" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            {/* Stick & Marshmallow */}
            <line x1="10" y1="8" x2="-22" y2="-6" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="-26" y="-10" width="8" height="7" rx="2" fill="#ffffff" stroke="#ea580c" strokeWidth="1" />
          </g>

          {/* Center: Sleek thermometer symbol */}
          <g transform="translate(200, 72)">
            <rect x="-3" y="-30" width="6" height="42" rx="3" fill="#ffffff" stroke="#ef4444" strokeWidth="1.4" />
            <circle cx="0" cy="14" r="6" fill="#ef4444" />
            <line x1="0" y1="10" x2="0" y2="-15" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Right Side: Reaksi Endoterm - Cat with Scarf & Beanie WITH PROMINENT CAT EARS POKING OUT */}
          <g transform="translate(285, 75)">
            {/* Icy Beaker with Frost */}
            <rect x="-34" y="-4" width="22" height="26" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.4" />
            <text x="-23" y="14" fontSize="11" fill="#0284c7" textAnchor="middle">❄</text>

            {/* Cat 2: Tail, Scarf, Beanie WITH CAT EARS & Whiskers */}
            <path d="M 32 16 C 42 20, 46 10, 40 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="18" cy="14" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="18" cy="-2" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

            {/* Cat Ears poking out prominently from beanie with pink inners */}
            <polygon points="7,-10 10,-22 15,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="9,-11 11,-18 13,-12" fill="#fda4af" />
            <polygon points="29,-10 26,-22 21,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="27,-11 25,-18 23,-12" fill="#fda4af" />

            {/* Winter Beanie Cap */}
            <path d="M 9 -6 C 9 -16, 27 -16, 27 -6 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.4" />
            <circle cx="18" cy="-17" r="3.5" fill="#f8fafc" />
            {/* Cozy Scarf */}
            <rect x="6" y="6" width="24" height="6" rx="3" fill="#60a5fa" stroke="#2563eb" strokeWidth="1.2" />

            <circle cx="13" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="23" cy="-2" r="1.8" fill="#0f172a" />
            <polygon points="17,1.5 19,1.5 18,2.5" fill="#f43f5e" />
            <line x1="8" y1="-1" x2="1" y2="-3" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="1" x2="1" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="28" y1="-1" x2="35" y2="-3" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="28" y1="1" x2="35" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 7: LAJU REAKSI & TEORI TUMBUKAN
    // ==========================================
    case 7:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t7-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t7-grid)" />

          {/* Activation Energy Curve */}
          <g transform="translate(190, 75)">
            <path d="M -110 35 L -60 35 Q 0 -50, 60 20 L 110 20" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M -60 35 Q 0 -12, 60 20" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" fill="none" />
            <polygon points="0,-48 3,-39 12,-36 3,-33 0,-24 -3,-33 -12,-36 -3,-39" fill="#facc15" stroke="#eab308" strokeWidth="1" />
            <ellipse cx="-5" cy="-35" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" transform="rotate(35)" />
            <ellipse cx="5" cy="-35" rx="4" ry="3" fill="#fed7aa" stroke="#334155" strokeWidth="1.4" transform="rotate(-35)" />
          </g>

          {/* Cat 1: Leaping Cat from Left with flying tail, ears, pink inners & whiskers */}
          <g transform="translate(130, 52)">
            <path d="M -24 16 C -34 12, -38 2, -32 -4" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <ellipse cx="-12" cy="10" rx="14" ry="10" fill="#ffffff" stroke="#334155" strokeWidth="1.8" transform="rotate(-25)" />
            <circle cx="2" cy="0" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <rect x="-8" y="-4" width="20" height="4.5" rx="2" fill="#3b82f6" />
            <polygon points="-4,-9 -1,-17 3,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-3,-10 -1,-15 1,-11" fill="#fda4af" />
            <polygon points="5,-8 8,-16 11,-10" fill="#ffffff" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="6,-9 8,-14 10,-10" fill="#fda4af" />
            <circle cx="2" cy="2" r="1.6" fill="#0f172a" />
            <line x1="-2" y1="2" x2="-8" y2="1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-2" y1="4" x2="-8" y2="5" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="2" x2="12" y2="1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="4" x2="12" y2="5" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Cat 2: Leaping Cat from Right with flying tail, ears, pink inners & whiskers */}
          <g transform="translate(250, 48)">
            <path d="M 24 16 C 34 12, 38 2, 32 -4" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <ellipse cx="12" cy="10" rx="14" ry="10" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" transform="rotate(25)" />
            <circle cx="-2" cy="0" r="11" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <rect x="-12" y="-4" width="20" height="4.5" rx="2" fill="#f97316" />
            <polygon points="-11,-8 -8,-16 -5,-10" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-10,-9 -8,-14 -6,-10" fill="#fda4af" />
            <polygon points="-3,-9 0,-17 3,-11" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-2,-10 0,-15 2,-11" fill="#fda4af" />
            <circle cx="-2" cy="2" r="1.6" fill="#0f172a" />
            <line x1="2" y1="2" x2="8" y2="1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="2" y1="4" x2="8" y2="5" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-6" y1="2" x2="-12" y2="1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-6" y1="4" x2="-12" y2="5" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Cat 3: Skater Kitten on Catalyst path with long curved tail, pink ears & whiskers */}
          <g transform="translate(190, 102)">
            <path d="M -12 -2 C -20 -4, -24 4, -20 10" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="-24" y="8" width="48" height="5" rx="2.5" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
            <circle cx="-16" cy="15" r="3" fill="#334155" />
            <circle cx="16" cy="15" r="3" fill="#334155" />
            <ellipse cx="0" cy="0" rx="9" ry="8" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <circle cx="0" cy="-7" r="7.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <polygon points="-6,-12 -3,-19 0,-13" fill="#ffffff" stroke="#334155" strokeWidth="1" strokeLinejoin="round" />
            <polygon points="-5,-13 -3,-17 -1,-13" fill="#fda4af" />
            <polygon points="6,-12 3,-19 0,-13" fill="#ffffff" stroke="#334155" strokeWidth="1" strokeLinejoin="round" />
            <polygon points="5,-13 3,-17 1,-13" fill="#fda4af" />
            <circle cx="-3" cy="-7" r="1.3" fill="#0f172a" />
            <circle cx="3" cy="-7" r="1.3" fill="#0f172a" />
            <line x1="-5" y1="-7" x2="-10" y2="-8" stroke="#94a3b8" strokeWidth="0.6" strokeLinecap="round" />
            <line x1="5" y1="-7" x2="10" y2="-8" stroke="#94a3b8" strokeWidth="0.6" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 8: KESETIMBANGAN KIMIA (Zero Text Clutter, Real Ears & Tails on All Cats!)
    // ==========================================
    case 8:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t8-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t8-grid)" />

          {/* Seesaw Equilibrium Balance Beam (y=74) */}
          <g transform="translate(200, 74)">
            <rect x="-120" y="-4" width="240" height="8" rx="4" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.6" />
            {/* Dynamic Equilibrium Arrows (forward top, reverse bottom) */}
            <path d="M -100 -10 L 100 -10 M 92 -15 L 100 -10 L 92 -5" stroke="#0f766e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 100 10 L -100 10 M -92 5 L -100 10 L -92 15" stroke="#0d9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Fulcrum Triangle */}
            <polygon points="-14,32 14,32 0,4" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="0" cy="4" r="3.5" fill="#0d9488" />
          </g>

          {/* Cat 1: Left Seesaw Cat (Calico Cat pushing ball A) with Long Tail & Whiskers */}
          <g transform="translate(105, 54)">
            <path d="M -16 16 C -30 20, -36 8, -32 -2 C -30 -8, -24 -6, -26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="10" rx="14" ry="12" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <path d="M -8 16 Q 0 22, 8 16 Z" fill="#ffffff" />
            <circle cx="0" cy="-4" r="13" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <path d="M -2 -10 Q -8 -18, -13 -4 Z" fill="#ea580c" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="2" fill="#0f172a" />
            <circle cx="-3.2" cy="-4.8" r="0.8" fill="#ffffff" />
            <circle cx="4" cy="-4" r="2" fill="#0f172a" />
            <circle cx="4.8" cy="-4.8" r="0.8" fill="#ffffff" />
            <polygon points="-1,-0.5 1,-0.5 0,0.8" fill="#f43f5e" />
            <path d="M -2 2 Q 0 3.5 2 2" stroke="#334155" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <line x1="-8" y1="-2" x2="-16" y2="-4" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="-8" y1="1" x2="-16" y2="2" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="8" y1="-2" x2="16" y2="-4" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="8" y1="1" x2="16" y2="2" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <ellipse cx="14" cy="2" rx="4" ry="3" fill="#fed7aa" stroke="#334155" strokeWidth="1.3" />
            <circle cx="23" cy="0" r="7" fill="#67e8f9" stroke="#0891b2" strokeWidth="1.4" />
            <text x="23" y="2.5" fontSize="7" fontWeight="extrabold" fill="#155e75" textAnchor="middle">A</text>
          </g>

          {/* Cat 2: Right Seesaw Cat (Silver Cat pushing ball B) with Long Tail & Whiskers */}
          <g transform="translate(295, 54)">
            <path d="M 16 16 C 30 20, 36 8, 32 -2 C 30 -8, 24 -6, 26 0" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="10" rx="14" ry="12" fill="#e2e8f0" stroke="#334155" strokeWidth="1.8" />
            <path d="M -8 16 Q 0 22, 8 16 Z" fill="#ffffff" />
            <circle cx="0" cy="-4" r="13" fill="#f1f5f9" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#94a3b8" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#94a3b8" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="2" fill="#0f172a" />
            <circle cx="-3.2" cy="-4.8" r="0.8" fill="#ffffff" />
            <circle cx="4" cy="-4" r="2" fill="#0f172a" />
            <circle cx="4.8" cy="-4.8" r="0.8" fill="#ffffff" />
            <polygon points="-1,-0.5 1,-0.5 0,0.8" fill="#f43f5e" />
            <path d="M -2 2 Q 0 3.5 2 2" stroke="#334155" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <line x1="-8" y1="-2" x2="-16" y2="-4" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="-8" y1="1" x2="-16" y2="2" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="8" y1="-2" x2="16" y2="-4" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="8" y1="1" x2="16" y2="2" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
            <ellipse cx="-14" cy="2" rx="4" ry="3" fill="#e2e8f0" stroke="#334155" strokeWidth="1.3" />
            <circle cx="-23" cy="0" r="7" fill="#fca5a5" stroke="#dc2626" strokeWidth="1.4" />
            <text x="-23" y="2.5" fontSize="7" fontWeight="extrabold" fill="#991b1b" textAnchor="middle">B</text>
          </g>

          {/* Kitten 3: Sleeping peacefully at center fulcrum on the beam */}
          {/* Has clear ears with pink inners, curved sleeping eyes, curled tail, whiskers, NO overlapping text! */}
          <g transform="translate(200, 60)">
            {/* Long Curled Tail */}
            <path d="M 12 4 C 20 6, 24 -4, 18 -8 C 14 -11, 8 -8, 10 -3" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Sleeping Cat Body & Head */}
            <ellipse cx="0" cy="2" rx="14" ry="10" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            <circle cx="-5" cy="-2" r="9" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            {/* Pointy Cat Ears with Pink Inners */}
            <polygon points="-11,-7 -8,-16 -4,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.3" strokeLinejoin="round" />
            <polygon points="-10,-8 -8,-13 -5,-9" fill="#fda4af" />
            <polygon points="-3,-8 0,-16 3,-9" fill="#ffffff" stroke="#334155" strokeWidth="1.3" strokeLinejoin="round" />
            <polygon points="-2,-9 0,-13 2,-9" fill="#fda4af" />
            {/* Sleeping Closed Eyes & Nose */}
            <path d="M -8 -2 Q -6 0 -4 -2" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <path d="M -3 -2 Q -1 0 1 -2" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <polygon points="-4,0 -2,0 -3,1.2" fill="#f43f5e" />
            {/* 4 Whiskers */}
            <line x1="-9" y1="-1" x2="-15" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-9" y1="1" x2="-15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="0" y1="-1" x2="6" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="0" y1="1" x2="6" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            {/* Small floating Zzz high up in safe zone */}
            <text x="14" y="-14" fontSize="7.5" fontWeight="extrabold" fill="#0d9488">Zzz</text>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 9: ASAM BASA & INDIKATOR PH
    // ==========================================
    case 9:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t9-grid" />
            <linearGradient id="phRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="30%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="75%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t9-grid)" />

          {/* Rainbow pH Spectrum Strip at Top */}
          <g transform="translate(200, 16)">
            <rect x="-130" y="0" width="260" height="6" rx="3" fill="url(#phRibbon)" />
          </g>

          {/* Cat 1: Titrator Cat on Step Stool with tail, pointy ears, pink inners & 4 whiskers */}
          <g transform="translate(110, 80)">
            <path d="M -16 16 C -28 18, -32 8, -28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <rect x="-14" y="24" width="28" height="14" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.2" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <rect x="-10" y="-8" width="20" height="8" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.3" />
            <circle cx="-4" cy="-4" r="1.6" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.6" fill="#0f172a" />
            <line x1="-8" y1="-1" x2="-15" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-8" y1="1" x2="-15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="-1" x2="15" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="1" x2="15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="14" cy="-14" rx="3.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          </g>

          {/* Glass Burette & Erlenmeyer in Center */}
          <g transform="translate(165, 72)">
            <rect x="-4" y="-55" width="8" height="60" rx="2" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="-2" y1="-40" x2="2" y2="-40" stroke="#0284c7" strokeWidth="1" />
            <line x1="-2" y1="-25" x2="2" y2="-25" stroke="#0284c7" strokeWidth="1" />
            <rect x="-8" y="-6" width="16" height="4" rx="1.5" fill="#0369a1" />
            <line x1="0" y1="-2" x2="0" y2="10" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="0" cy="18" r="2.5" fill="#ec4899" />
            <circle cx="0" cy="27" r="2" fill="#ec4899" />
            <path d="M -6 32 L 6 32 L 18 56 C 19 58, 17 60, 14 60 L -14 60 C -17 60, -19 58, -18 56 Z" fill="#fdf2f8" stroke="#be185d" strokeWidth="1.6" />
            <path d="M -14 48 Q 0 52, 14 48 L 14 59 L -14 59 Z" fill="#f43f5e" fillOpacity="0.85" />
          </g>

          {/* Cat 2: Amazed Cat with tail, pointy ears, pink inners & 4 whiskers */}
          <g transform="translate(265, 78)">
            <path d="M 16 16 C 28 18, 32 8, 28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4.5" cy="-4" r="2.8" fill="#0f172a" />
            <circle cx="-3.5" cy="-5" r="1" fill="#ffffff" />
            <circle cx="4.5" cy="-4" r="2.8" fill="#0f172a" />
            <circle cx="5.5" cy="-5" r="1" fill="#ffffff" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-15" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="15" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="-12" cy="0" rx="4" ry="3" fill="#fed7aa" stroke="#334155" strokeWidth="1.3" transform="rotate(-30)" />
            <ellipse cx="12" cy="0" rx="4" ry="3" fill="#fed7aa" stroke="#334155" strokeWidth="1.3" transform="rotate(30)" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 10: HIDROLISIS GARAM & BUFFER
    // ==========================================
    case 10:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t10-grid" />
            <radialGradient id="shieldGrad" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="70%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t10-grid)" />

          {/* Incoming H+ and OH- ions deflecting */}
          <g transform="translate(80, 72)">
            <circle cx="-30" cy="-22" r="7" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
            <text x="-30" y="-19" fontSize="7" fontWeight="extrabold" fill="#ffffff" textAnchor="middle">H⁺</text>
            <path d="M -22 -16 L -14 -10" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />

            <circle cx="-25" cy="22" r="7" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            <text x="-25" y="25" fontSize="6.5" fontWeight="extrabold" fill="#ffffff" textAnchor="middle">OH⁻</text>
            <path d="M -17 16 L -9 10" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Cat 1: Knight Cat with Plume, helmet WITH CAT EARS & PINK INNERS, tail & whiskers */}
          <g transform="translate(120, 74)">
            <path d="M -16 16 C -28 18, -32 8, -28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Red Feather Plume */}
            <path d="M 0 -17 C -4 -26, 4 -26, 0 -17 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
            {/* Helmet Cat Ears with Pink Inners */}
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#cbd5e1" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#cbd5e1" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Knight Cat holding Glowing Buffer Shield */}
          <g transform="translate(165, 72)">
            <polygon points="0,-38 32,-20 32,20 0,38 -32,20 -32,-20" fill="url(#shieldGrad)" stroke="#60a5fa" strokeWidth="2.2" />
            <text x="0" y="-2" fontSize="8" fontWeight="extrabold" fill="#ffffff" textAnchor="middle">BUFFER</text>
            <text x="0" y="9" fontSize="9" fontWeight="extrabold" fill="#facc15" textAnchor="middle">pH 7.4</text>
          </g>

          {/* Cat 2: Kitten Drinking Milk peacefully behind shield with tail, ears & whiskers */}
          <g transform="translate(275, 75)">
            <path d="M 12 12 C 22 16, 24 4, 18 -2" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="13" ry="10" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <circle cx="-2" cy="-2" r="11" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-8,-9 -5,-17 -1,-11" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-7,-10 -5,-14 -3,-11" fill="#fda4af" />
            <polygon points="6,-9 3,-17 0,-11" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="5,-10 3,-14 1,-11" fill="#fda4af" />
            <path d="M -6 -2 Q -4 -4 -2 -2" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M 0 -2 Q 2 -4 4 -2" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <line x1="-7" y1="-1" x2="-13" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-13" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="4" y1="-1" x2="10" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="4" y1="1" x2="10" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <rect x="-18" y="4" width="10" height="16" rx="2" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2" />
            <rect x="-16" y="0" width="6" height="4" fill="#38bdf8" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 11: SISTEM KOLOID
    // ==========================================
    case 11:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs>
            <DotGrid id="sma-t11-grid" />
            <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#f87171" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t11-grid)" />

          {/* Cat 1: Scientist Cat with Laser, tail, pointy ears, pink inners & whiskers */}
          <g transform="translate(85, 75)">
            <path d="M -16 16 C -28 18, -32 8, -28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <rect x="8" y="0" width="22" height="6" rx="2" fill="#334155" />
            <rect x="28" y="1" width="3" height="4" fill="#ef4444" />
          </g>

          {/* Cuvette with Tyndall Laser Beam in Center */}
          <g transform="translate(185, 72)">
            <rect x="-42" y="-34" width="84" height="68" rx="4" fill="#f8fafc" stroke="#0284c7" strokeWidth="2" />
            <polygon points="-42,2 42,-10 42,14 -42,6" fill="url(#laserGrad)" />
            <line x1="-68" y1="4" x2="-42" y2="4" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="-25" cy="4" r="3" fill="#facc15" stroke="#eab308" strokeWidth="1" />
            <circle cx="0" cy="1" r="2.5" fill="#facc15" stroke="#eab308" strokeWidth="1" />
            <circle cx="25" cy="0" r="3" fill="#facc15" stroke="#eab308" strokeWidth="1" />
            <path d="M -30 20 L -10 12 L -18 -16 L 10 -20 L 20 -8" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
          </g>

          {/* Cat 2: Leaping Playful Cat chasing the beam with long tail, pointy ears, pink inners & whiskers */}
          <g transform="translate(310, 70)">
            <path d="M 18 16 C 32 18, 38 6, 30 -4" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="-6" cy="10" rx="14" ry="11" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" transform="rotate(-20)" />
            <circle cx="4" cy="-4" r="13" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-2,-13 2,-22 6,-15" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="0,-14 2,-19 4,-15" fill="#fda4af" />
            <polygon points="10,-12 15,-20 17,-13" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,-13 14,-18 15,-13" fill="#fda4af" />
            <circle cx="1" cy="-4" r="2.2" fill="#0f172a" />
            <circle cx="2" cy="-5" r="0.8" fill="#ffffff" />
            <circle cx="8" cy="-4" r="2.2" fill="#0f172a" />
            <circle cx="9" cy="-5" r="0.8" fill="#ffffff" />
            <line x1="-3" y1="-2" x2="-9" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-3" y1="0" x2="-9" y2="1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="-1" x2="15" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="1" x2="15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="-12" cy="-10" rx="4" ry="3" fill="#fed7aa" stroke="#334155" strokeWidth="1.3" transform="rotate(-40)" />
            <circle cx="-16" cy="-18" r="3.5" fill="#ef4444" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 12: SIFAT KOLIGATIF LARUTAN
    // ==========================================
    case 12:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t12-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t12-grid)" />

          {/* Left: Penurunan Titik Beku - Cat Salting Ice WITH PROMINENT CAT EARS & PINK INNERS */}
          <g transform="translate(100, 75)">
            <rect x="-36" y="8" width="20" height="18" rx="2" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.3" />
            <rect x="-24" y="-10" width="10" height="14" rx="2" fill="#ffffff" stroke="#64748b" strokeWidth="1.2" transform="rotate(35)" />
            <circle cx="-16" cy="2" r="1" fill="#475569" />

            <path d="M 28 16 C 38 18, 42 8, 36 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="16" cy="14" rx="13" ry="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="16" cy="-2" r="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

            {/* Pointy Cat Ears sticking up above earmuffs with pink inners */}
            <polygon points="7,-8 10,-19 14,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="9,-9 11,-16 13,-11" fill="#fda4af" />
            <polygon points="25,-8 22,-19 18,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="23,-9 21,-16 19,-11" fill="#fda4af" />

            {/* Earmuffs wrapping around head */}
            <path d="M 6 -2 C 6 -12, 26 -12, 26 -2" stroke="#ec4899" strokeWidth="2.2" fill="none" />
            <circle cx="6" cy="-2" r="4" fill="#f43f5e" />
            <circle cx="26" cy="-2" r="4" fill="#f43f5e" />

            <circle cx="13" cy="-2" r="1.6" fill="#0f172a" />
            <circle cx="19" cy="-2" r="1.6" fill="#0f172a" />
            <polygon points="15,1 17,1 16,2" fill="#f43f5e" />
            <line x1="8" y1="-1" x2="1" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="1" x2="1" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="24" y1="-1" x2="31" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="24" y1="1" x2="31" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Center: U-Tube Osmometer & Full Hugging Kitten (Tail, Ears, Pink inners, Whiskers) */}
          <g transform="translate(200, 72)">
            <path d="M -16 -28 L -16 16 C -16 26, 16 26, 16 16 L 16 -28" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="0" y1="12" x2="0" y2="24" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="2 2" />
            <rect x="-15" y="2" width="7" height="16" fill="#bae6fd" />
            <rect x="9" y="-12" width="7" height="30" fill="#38bdf8" />

            {/* Kitten hugging the U-tube with full body, long tail, pink ears & whiskers */}
            <g transform="translate(0, -26)">
              <path d="M 6 12 C 14 16, 16 6, 12 0" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
              <ellipse cx="0" cy="8" rx="8" ry="7" fill="#fed7aa" stroke="#334155" strokeWidth="1.3" />
              <circle cx="0" cy="-2" r="7.5" fill="#ffedd5" stroke="#334155" strokeWidth="1.3" />
              <polygon points="-6,-6 -3,-13 0,-7" fill="#ea580c" stroke="#334155" strokeWidth="1" strokeLinejoin="round" />
              <polygon points="-5,-7 -3,-11 -1,-7" fill="#fda4af" />
              <polygon points="6,-6 3,-13 0,-7" fill="#ea580c" stroke="#334155" strokeWidth="1" strokeLinejoin="round" />
              <polygon points="5,-7 3,-11 1,-7" fill="#fda4af" />
              <circle cx="-2.5" cy="-2" r="1.3" fill="#0f172a" />
              <circle cx="2.5" cy="-2" r="1.3" fill="#0f172a" />
              <line x1="-5" y1="-2" x2="-9" y2="-3" stroke="#94a3b8" strokeWidth="0.6" strokeLinecap="round" />
              <line x1="5" y1="-2" x2="9" y2="-3" stroke="#94a3b8" strokeWidth="0.6" strokeLinecap="round" />
              {/* Cute front paws holding the rim */}
              <circle cx="-5" cy="4" r="2" fill="#ffffff" stroke="#334155" strokeWidth="0.9" />
              <circle cx="5" cy="4" r="2" fill="#ffffff" stroke="#334155" strokeWidth="0.9" />
            </g>
          </g>

          {/* Right: Kenaikan Titik Didih - Chef Cat WITH PROMINENT CAT EARS & PINK INNERS */}
          <g transform="translate(295, 75)">
            <rect x="-34" y="6" width="24" height="18" rx="3" fill="#64748b" stroke="#334155" strokeWidth="1.2" />
            <path d="M -26 -2 Q -28 -10, -24 -14" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M -18 -2 Q -20 -10, -16 -14" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            <path d="M 28 16 C 38 18, 42 8, 36 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="14" cy="14" rx="13" ry="11" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <circle cx="14" cy="-2" r="12" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />

            {/* Pointy Cat Ears sticking out on sides of chef hat */}
            <polygon points="4,-8 1,-19 7,-12" fill="#ea580c" stroke="#334155" strokeWidth="1.3" strokeLinejoin="round" />
            <polygon points="4,-9 2,-16 6,-12" fill="#fda4af" />
            <polygon points="24,-8 27,-19 21,-12" fill="#ea580c" stroke="#334155" strokeWidth="1.3" strokeLinejoin="round" />
            <polygon points="24,-9 26,-16 22,-12" fill="#fda4af" />

            {/* Chef Toque Hat */}
            <path d="M 8 -10 C 6 -20, 22 -20, 20 -10 Z" fill="#ffffff" stroke="#64748b" strokeWidth="1.2" />

            <circle cx="10" cy="-2" r="1.6" fill="#0f172a" />
            <circle cx="18" cy="-2" r="1.6" fill="#0f172a" />
            <polygon points="13,1.5 15,1.5 14,2.5" fill="#f43f5e" />
            <line x1="6" y1="-1" x2="0" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="6" y1="1" x2="0" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="22" y1="-1" x2="28" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="22" y1="1" x2="28" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 13: PENYETARAAN REDOKS & ELEKTROKIMIA
    // ==========================================
    case 13:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t13-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t13-grid)" />

          {/* Galvanic Daniell Cell: Zn & Cu Beakers & Salt Bridge */}
          <g transform="translate(180, 76)">
            <rect x="-60" y="-10" width="34" height="40" rx="3" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
            <rect x="-52" y="-26" width="8" height="34" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="1.2" />

            <rect x="26" y="-10" width="34" height="40" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="42" y="-26" width="8" height="34" rx="1.5" fill="#ea580c" stroke="#c2410c" strokeWidth="1.2" />

            <path d="M -32 8 L -32 -12 C -32 -22, 32 -22, 32 -12 L 32 8" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" fill="none" />
            <circle cx="0" cy="-36" r="12" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <text x="0" y="-32" fontSize="6.5" fontWeight="bold" fill="#0f172a" textAnchor="middle">+1.1 V</text>
            <path d="M -48 -26 L -48 -36 L -12 -36" stroke="#475569" strokeWidth="1.4" fill="none" />
            <path d="M 46 -26 L 46 -36 L 12 -36" stroke="#ea580c" strokeWidth="1.4" fill="none" />
          </g>

          {/* Cat 1: Electrical Technician Cat on Left with tail, pointy ears, pink inners & whiskers */}
          <g transform="translate(80, 75)">
            <path d="M -16 16 C -28 18, -32 8, -28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <rect x="14" y="2" width="8" height="4" rx="1" fill="#ef4444" />
          </g>

          {/* Cat 2: Winking Electric Cat watching glowing bulb with tail, pointy ears, pink inners & whiskers */}
          <g transform="translate(310, 74)">
            <g transform="translate(-24, -18)">
              <circle cx="0" cy="0" r="11" fill="#fef08a" fillOpacity="0.85" />
              <path d="M -5 -3 C -7 -7, -5 -11, 0 -11 C 5 -11, 7 -7, 5 -3 L 3 2 L -3 2 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.3" />
            </g>
            <path d="M 16 16 C 28 18, 32 8, 28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ea580c" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />
            <circle cx="-4" cy="-4" r="2" fill="#0f172a" />
            <path d="M 2 -4 Q 5 -7 8 -4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 14: KIMIA UNSUR & TRANSISI
    // ==========================================
    case 14:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t14-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t14-grid)" />

          {/* Cat 1: Artist Cat with Beret WITH BOTH POINTY EARS & PINK INNERS, tail & whiskers */}
          <g transform="translate(130, 75)">
            <path d="M -16 16 C -28 18, -32 8, -28 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="12" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="0" cy="-4" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

            {/* Pointy Cat Ears with Pink Inners */}
            <polygon points="-9,-11 -5,-21 -1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-18 -3,-14" fill="#fda4af" />
            <polygon points="9,-11 5,-21 1,-14" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-18 3,-14" fill="#fda4af" />

            {/* Stylish French Artist Beret tilted between ears */}
            <path d="M -12 -10 Q 0 -22, 14 -8 Q 6 -4, -12 -10 Z" fill="#9333ea" stroke="#7e22ce" strokeWidth="1.2" />
            <circle cx="2" cy="-16" r="1.5" fill="#9333ea" />

            <circle cx="-4" cy="-4" r="1.8" fill="#0f172a" />
            <circle cx="4" cy="-4" r="1.8" fill="#0f172a" />
            <polygon points="-1,1 1,1 0,2" fill="#f43f5e" />
            <line x1="-7" y1="-2" x2="-14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-7" y1="1" x2="-14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="-2" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7" y1="1" x2="14" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />

            {/* Wooden Paint Palette with Transition Metal Colors */}
            <path d="M 12 4 C 12 -6, 36 -6, 36 12 C 36 22, 16 26, 12 14 Z" fill="#fed7aa" stroke="#ca8a04" strokeWidth="1.3" />
            <circle cx="18" cy="2" r="3" fill="#0284c7" />
            <circle cx="28" cy="4" r="3" fill="#10b981" />
            <circle cx="28" cy="14" r="3" fill="#f59e0b" />
            <circle cx="20" cy="16" r="3" fill="#a855f7" />
          </g>

          {/* Test Tube Rack in Center */}
          <g transform="translate(210, 80)">
            <rect x="-26" y="8" width="52" height="14" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.2" />
            <rect x="-20" y="-16" width="7" height="26" rx="2.5" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" />
            <rect x="-9" y="-16" width="7" height="26" rx="2.5" fill="#a7f3d0" stroke="#059669" strokeWidth="1" />
            <rect x="2" y="-16" width="7" height="26" rx="2.5" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
            <rect x="13" y="-16" width="7" height="26" rx="2.5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1" />
          </g>

          {/* Cat 2: Kitten with Platinum Loop & Flame Sparks with tail, pointy pink ears & whiskers */}
          <g transform="translate(305, 75)">
            <rect x="-34" y="10" width="12" height="14" rx="2" fill="#64748b" />
            <path d="M -28 10 C -32 2, -32 -6, -28 -14 C -24 -6, -24 2, -28 10 Z" fill="#ef4444" />
            <circle cx="-28" cy="-4" r="2.5" fill="#22c55e" />
            <circle cx="-22" cy="-18" r="2" fill="#facc15" />
            <circle cx="-34" cy="-16" r="1.8" fill="#38bdf8" />

            <path d="M 16 16 C 26 18, 30 8, 26 2" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <ellipse cx="6" cy="12" rx="12" ry="10" fill="#fed7aa" stroke="#334155" strokeWidth="1.6" />
            <circle cx="6" cy="-2" r="10.5" fill="#ffedd5" stroke="#334155" strokeWidth="1.6" />
            <polygon points="1,-9 4,-16 7,-10" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="2,-10 4,-14 6,-10" fill="#fda4af" />
            <polygon points="11,-9 14,-16 17,-10" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="12,-10 14,-14 16,-10" fill="#fda4af" />
            <circle cx="3" cy="-2" r="1.5" fill="#0f172a" />
            <circle cx="9" cy="-2" r="1.5" fill="#0f172a" />
            <polygon points="5,0.5 7,0.5 6,1.5" fill="#f43f5e" />
            <line x1="1" y1="-1" x2="-4" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="1" y1="1" x2="-4" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="11" y1="-1" x2="16" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="11" y1="1" x2="16" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="2" y1="4" x2="-24" y2="-6" stroke="#94a3b8" strokeWidth="1.3" />
            <circle cx="-25" cy="-7" r="2" stroke="#94a3b8" strokeWidth="1" fill="none" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 15: SENYAWA KARBON & GUGUS FUNGSI
    // ==========================================
    case 15:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t15-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t15-grid)" />

          {/* Left: Zig-zag Carbon Backbone Cat-Tree */}
          <g transform="translate(140, 75)">
            <path d="M -55 18 L -28 -14 L 0 18 L 28 -14 L 55 18" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="-55" cy="18" r="6.5" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
            <circle cx="-28" cy="-14" r="6.5" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
            <circle cx="0" cy="18" r="6.5" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
            <circle cx="28" cy="-14" r="6.5" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
            <circle cx="55" cy="18" r="6.5" fill="#10b981" stroke="#047857" strokeWidth="1.5" />

            <g transform="translate(-28, -28)">
              <rect x="-12" y="0" width="24" height="12" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" />
              <text x="0" y="9" fontSize="7" fontWeight="bold" fill="#b45309" textAnchor="middle">-OH</text>
            </g>
            <g transform="translate(28, -28)">
              <rect x="-16" y="0" width="32" height="12" rx="3" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.2" />
              <text x="0" y="9" fontSize="7" fontWeight="bold" fill="#b91c1c" textAnchor="middle">-COOH</text>
            </g>
          </g>

          {/* Cat 1: Playful Cat climbing the Carbon Backbone with tail, pink ears & whiskers */}
          <g transform="translate(110, 52)">
            <path d="M -14 14 C -24 20, -28 10, -22 4" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="6" rx="12" ry="10" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            <circle cx="4" cy="-4" r="10.5" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />
            <polygon points="-1,-12 3,-19 6,-13" fill="#ffffff" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="0,-13 3,-17 5,-13" fill="#fda4af" />
            <polygon points="7,-11 11,-18 13,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="8,-12 11,-16 12,-12" fill="#fda4af" />
            <circle cx="4" cy="-4" r="1.6" fill="#0f172a" />
            <polygon points="2,-2 4,-2 3,-1" fill="#f43f5e" />
            <line x1="0" y1="-3" x2="-5" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="-3" x2="14" y2="-4" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="-10" cy="-6" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" transform="rotate(-30)" />
          </g>

          {/* Right: Aromatic Benzene Ring Cat-Bed */}
          <g transform="translate(290, 75)">
            <polygon points="0,-36 32,-18 32,18 0,36 -32,18 -32,-18" fill="#fdf2f8" stroke="#db2777" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="0" cy="0" r="18" stroke="#f472b6" strokeWidth="1.8" strokeDasharray="5 3" fill="none" />

            {/* Cat 2: Cozy Cat curled up asleep in the Benzene Ring with curled tail, pink ears & whiskers */}
            <ellipse cx="0" cy="3" rx="14" ry="11" fill="#fed7aa" stroke="#334155" strokeWidth="1.8" />
            <circle cx="-5" cy="-3" r="9" fill="#ffedd5" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-11,-8 -8,-16 -5,-9" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-10,-9 -8,-13 -6,-9" fill="#fda4af" />
            <polygon points="-3,-8 0,-16 3,-9" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="-2,-9 0,-13 2,-9" fill="#fda4af" />
            <path d="M -8 -3 Q -6 -1 -4 -3" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M -3 -3 Q -1 -1 1 -3" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <polygon points="-4,-1 -2,-1 -3,0" fill="#f43f5e" />
            <line x1="-9" y1="-1" x2="-15" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-9" y1="1" x2="-15" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="0" y1="-1" x2="6" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="0" y1="1" x2="6" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            {/* Long Curled Tail wrapped over body */}
            <path d="M 12 5 C 24 8, 26 -6, 16 -6 C 12 -6, 8 -2, 10 2" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 16: MAKROMOLEKUL
    // ==========================================
    case 16:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <defs><DotGrid id="sma-t16-grid" /></defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#sma-t16-grid)" />

          {/* Left: Playful Cat with Monomer Polymer Yarn */}
          <g transform="translate(125, 75)">
            <path d="M -60 18 Q -28 -30, 8 14 Q 38 40, 68 0" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            <circle cx="-52" cy="12" r="6" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.4" />
            <circle cx="-36" cy="-5" r="6" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.4" />
            <circle cx="-16" cy="-14" r="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.4" />
            <circle cx="2" cy="10" r="6" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.4" />
            <circle cx="22" cy="20" r="6" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="46" cy="12" r="6" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.4" />
            <circle cx="66" cy="0" r="6" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.4" />

            <path d="M -28 16 C -38 20, -42 10, -36 2" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="-15" cy="14" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <circle cx="-15" cy="-2" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            <polygon points="-24,-9 -20,-19 -16,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-22,-10 -20,-16 -18,-12" fill="#fda4af" />
            <polygon points="-6,-9 -10,-19 -14,-12" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-8,-10 -10,-16 -12,-12" fill="#fda4af" />
            <circle cx="-19" cy="-2" r="1.8" fill="#0f172a" />
            <circle cx="-11" cy="-2" r="1.8" fill="#0f172a" />
            <polygon points="-16,2 -14,2 -15,3" fill="#f43f5e" />
            <line x1="-22" y1="-1" x2="-28" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-22" y1="1" x2="-28" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-8" y1="-1" x2="-2" y2="-2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="-8" y1="1" x2="-2" y2="2" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
            <ellipse cx="-4" cy="8" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" transform="rotate(20)" />
          </g>

          {/* Right: DNA Double-Helix Climbing Kitten with long tail, pink ears & whiskers */}
          <g transform="translate(295, 72)">
            <path d="M -28 42 Q -10 18, -28 -6 Q -46 -30, -28 -48" stroke="#3b82f6" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M -10 42 Q -28 18, -10 -6 Q 8 -30, -10 -48" stroke="#ec4899" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <line x1="-26" y1="28" x2="-12" y2="28" stroke="#64748b" strokeWidth="1.5" />
            <line x1="-20" y1="8" x2="-18" y2="8" stroke="#64748b" strokeWidth="1.5" />
            <line x1="-26" y1="-14" x2="-12" y2="-14" stroke="#64748b" strokeWidth="1.5" />
            <line x1="-20" y1="-36" x2="-18" y2="-36" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="-19,-54 -16,-47 -8,-47 -14,-42 -11,-35 -19,-39 -27,-35 -24,-42 -30,-47 -22,-47" fill="#facc15" stroke="#eab308" strokeWidth="1" />

            {/* Climbing Kitten with long tail, pointy pink ears & whiskers */}
            <g transform="translate(4, -8)">
              <path d="M 12 12 C 22 18, 26 6, 18 0" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <ellipse cx="0" cy="10" rx="11" ry="9" fill="#fed7aa" stroke="#334155" strokeWidth="1.5" transform="rotate(-15)" />
              <circle cx="0" cy="-3" r="10" fill="#ffedd5" stroke="#334155" strokeWidth="1.5" />
              <polygon points="-7,-10 -4,-17 -1,-11" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
              <polygon points="-6,-11 -4,-15 -2,-11" fill="#fda4af" />
              <polygon points="7,-10 4,-17 1,-11" fill="#ea580c" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
              <polygon points="6,-11 4,-15 2,-11" fill="#fda4af" />
              <circle cx="-3" cy="-3" r="1.5" fill="#0f172a" />
              <circle cx="3" cy="-3" r="1.5" fill="#0f172a" />
              <polygon points="-1,-0.5 1,-0.5 0,0.5" fill="#f43f5e" />
              <line x1="-5" y1="-2" x2="-10" y2="-3" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="-5" y1="0" x2="-10" y2="1" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="4" y1="-2" x2="9" y2="-3" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <line x1="4" y1="0" x2="9" y2="1" stroke="#94a3b8" strokeWidth="0.7" strokeLinecap="round" />
              <ellipse cx="-8" cy="-10" rx="3" ry="2" fill="#fed7aa" stroke="#334155" strokeWidth="1.2" transform="rotate(-30)" />
              <ellipse cx="-10" cy="2" rx="3" ry="2" fill="#fed7aa" stroke="#334155" strokeWidth="1.2" transform="rotate(-10)" />
            </g>
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 144" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="144" fill="#ffffff" />
          <circle cx="200" cy="72" r="28" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        </svg>
      );
  }
};
