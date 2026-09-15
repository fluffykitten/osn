import React from 'react';
import { SmaTopicSvgArt } from './SmaTopicSvgArt';

interface TopicSvgArtProps {
  topicNumber: number;
  database?: 'osn' | 'sma';
  className?: string;
}

export const TopicSvgArt: React.FC<TopicSvgArtProps> = ({
  topicNumber,
  database = 'osn',
  className = '',
}) => {
  // Route to SMA Topic Art if in SMA database or ID is in SMA range (>= 101)
  const isSma = database === 'sma' || topicNumber >= 101;
  const effectiveTopic = topicNumber >= 101 ? topicNumber - 100 : topicNumber;

  if (isSma) {
    return <SmaTopicSvgArt topicNumber={effectiveTopic} className={className} />;
  }

  // Shared minimalist dot-grid pattern for technical notebook aesthetic
  const DotGrid = ({ id }: { id: string }) => (
    <pattern id={id} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.8" fill="#f1f5f9" />
    </pattern>
  );

  switch (topicNumber) {
    // ==========================================
    // TOPIK 1: STRUKTUR ATOM & PERIODISITAS (Bohr Cat / Schrödinger's Quantum Cat)
    // ==========================================
    case 1:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t1-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t1-grid)" />

          {/* Quantum Sine Wave in background */}
          <path
            d="M 10 115 Q 50 90, 90 115 T 170 115 T 250 115 T 330 115 T 400 115"
            stroke="#f1f5f9"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Bohr Atomic Orbit Rings around Cat */}
          <g transform="translate(200, 72)">
            <ellipse cx="0" cy="0" rx="100" ry="34" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="5 3" transform="rotate(-20)" />
            <ellipse cx="0" cy="0" rx="100" ry="34" stroke="#818cf8" strokeWidth="1.4" strokeDasharray="5 3" transform="rotate(25)" />
            <ellipse cx="0" cy="0" rx="100" ry="34" stroke="#34d399" strokeWidth="1.2" strokeDasharray="4 4" transform="rotate(85)" />

            {/* Orbiting Electrons with colorful trails */}
            <g transform="rotate(-20)">
              <circle cx="92" cy="12" r="4.5" fill="#0284c7" />
              <circle cx="92" cy="12" r="2" fill="#ffffff" />
              <circle cx="-85" cy="-16" r="4" fill="#0284c7" />
            </g>
            <g transform="rotate(25)">
              <circle cx="-94" cy="10" r="4.5" fill="#7c3aed" />
              <circle cx="-94" cy="10" r="2" fill="#ffffff" />
              <circle cx="80" cy="-20" r="4" fill="#7c3aed" />
            </g>
            <g transform="rotate(85)">
              <circle cx="0" cy="-34" r="4" fill="#059669" />
              <circle cx="0" cy="34" r="4" fill="#059669" />
            </g>
          </g>

          {/* Chemistry Cat at Nucleus Center (Schrödinger's Cat wearing tiny round lab glasses) */}
          <g transform="translate(200, 74)">
            {/* Tail waving with atomic spark */}
            <path d="M 18 20 C 32 24, 38 12, 34 2 C 32 -4, 28 0, 30 6" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="34" cy="2" r="2.5" fill="#38bdf8" />

            {/* Body */}
            <path d="M -16 26 C -18 10, -12 2, 0 2 C 12 2, 18 10, 16 26 Z" fill="#f8fafc" stroke="#334155" strokeWidth="1.8" />
            {/* Chest patch */}
            <path d="M -8 14 C -6 22, 6 22, 8 14 C 4 8, -4 8, -8 14 Z" fill="#e2e8f0" />

            {/* Cat Head */}
            <circle cx="0" cy="-8" r="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

            {/* Left Ear */}
            <polygon points="-13,-18 -7,-30 -2,-21" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-11,-19 -7,-27 -4,-21" fill="#fda4af" />

            {/* Right Ear */}
            <polygon points="13,-18 7,-30 2,-21" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="11,-19 7,-27 4,-21" fill="#fda4af" />

            {/* Lab Glasses */}
            <circle cx="-5" cy="-8" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.8" />
            <circle cx="5" cy="-8" r="5" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.8" />
            <line x1="-0.5" y1="-8" x2="0.5" y2="-8" stroke="#0284c7" strokeWidth="1.4" />

            {/* Happy Eyes behind glasses */}
            <circle cx="-5" cy="-8" r="1.8" fill="#0f172a" />
            <circle cx="5" cy="-8" r="1.8" fill="#0f172a" />

            {/* Cute Pink Nose & Mouth */}
            <polygon points="-1.5,-2 1.5,-2 0,-0.5" fill="#f43f5e" />
            <path d="M -3 1 Q 0 3 3 1" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Whiskers */}
            <line x1="-12" y1="-3" x2="-22" y2="-5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-12" y1="0" x2="-22" y2="1" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="12" y1="-3" x2="22" y2="-5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="12" y1="0" x2="22" y2="1" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />

            {/* Paws */}
            <ellipse cx="-6" cy="24" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
            <ellipse cx="6" cy="24" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 2: IKATAN KIMIA & GEOMETRI MOLEKUL (Cat hugging 3D tetrahedral molecule)
    // ==========================================
    case 2:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t2-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t2-grid)" />

          {/* Molecular VSEPR Bond Framework */}
          <g transform="translate(190, 75)">
            {/* Back bond dashed */}
            <line x1="0" y1="-8" x2="-48" y2="-36" stroke="#c084fc" strokeWidth="2.5" strokeDasharray="3 3" />
            <circle cx="-48" cy="-36" r="10" fill="#f3e8ff" stroke="#a855f7" strokeWidth="1.8" />
            <text x="-52" y="-33" fill="#7e22ce" fontSize="8" fontFamily="sans-serif" fontWeight="bold">H</text>

            {/* Top bond */}
            <line x1="0" y1="-8" x2="0" y2="-52" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="-52" r="10" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.8" />
            <text x="-4" y="-49" fill="#a21caf" fontSize="8" fontFamily="sans-serif" fontWeight="bold">H</text>

            {/* Bottom-left bond */}
            <line x1="0" y1="-8" x2="-54" y2="34" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-54" cy="34" r="10" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.8" />
            <text x="-58" y="37" fill="#a21caf" fontSize="8" fontFamily="sans-serif" fontWeight="bold">H</text>

            {/* Bottom-right wedge bond */}
            <polygon points="0,-8 54,30 46,40" fill="#e879f9" stroke="#c026d3" strokeWidth="1" opacity="0.75" />
            <circle cx="50" cy="35" r="11" fill="#ec4899" stroke="#be185d" strokeWidth="1.8" />
            <text x="46" y="38" fill="#ffffff" fontSize="8" fontFamily="sans-serif" fontWeight="bold">H</text>

            {/* Central Atom C */}
            <circle cx="0" cy="-8" r="16" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2" />
            <text x="-4" y="-4" fill="#ffffff" fontSize="11" fontFamily="sans-serif" fontWeight="bold">C</text>

            {/* Bond Angle Arc */}
            <path d="M -18 10 A 24 24 0 0 0 18 10" stroke="#d946ef" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
            <text x="-14" y="24" fill="#a21caf" fontSize="8.5" fontFamily="monospace" fontWeight="bold">109.5°</text>
          </g>

          {/* Cute Cat hugging the central atom from the right */}
          <g transform="translate(230, 62)">
            {/* Tail */}
            <path d="M 22 18 C 32 20, 36 8, 30 0 C 26 -6, 20 -2, 22 6" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Cat Body */}
            <ellipse cx="12" cy="16" rx="14" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Cat Head */}
            <circle cx="2" cy="2" r="13" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-7,-6 -4,-16 2,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-5,-7 -4,-13 0,-9" fill="#fda4af" />
            <polygon points="11,-6 8,-16 2,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="9,-7 8,-13 4,-9" fill="#fda4af" />
            {/* Smiling closed eyes */}
            <path d="M -3 1 Q 0 -1 3 1" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M 6 1 Q 9 -1 12 1" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            {/* Nose */}
            <polygon points="4,4 6,4 5,5.5" fill="#f43f5e" />
            {/* Paws hugging the bond */}
            <ellipse cx="-8" cy="10" rx="3.5" ry="4.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" transform="rotate(-30)" />
            <ellipse cx="-2" cy="18" rx="4.5" ry="3.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 3: STOIKIOMETRI & WUJUD ZAT (Cat in a transparent cylinder with gas particles)
    // ==========================================
    case 3:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t3-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t3-grid)" />

          {/* Gas Chamber / Beaker Cylinder ("If it fits, I sits") */}
          <g transform="translate(200, 74)">
            {/* Glass cylinder outline */}
            <rect x="-65" y="-45" width="130" height="85" rx="14" fill="#f0fdfa" fillOpacity="0.7" stroke="#0d9488" strokeWidth="1.8" />
            {/* Measurement Graduations */}
            <line x1="-65" y1="-25" x2="-55" y2="-25" stroke="#14b8a6" strokeWidth="1.2" />
            <line x1="-65" y1="-5" x2="-52" y2="-5" stroke="#14b8a6" strokeWidth="1.5" />
            <line x1="-65" y1="15" x2="-55" y2="15" stroke="#14b8a6" strokeWidth="1.2" />
            <text x="-50" y="-3" fill="#0f766e" fontSize="7" fontFamily="monospace">1.0 L</text>

            {/* Bouncing Gas Molecules with Velocity Vectors */}
            <g>
              <circle cx="-40" cy="-28" r="4.5" fill="#38bdf8" />
              <line x1="-40" y1="-28" x2="-26" y2="-36" stroke="#0284c7" strokeWidth="1.4" strokeLinecap="round" />
            </g>
            <g>
              <circle cx="45" cy="-22" r="5" fill="#f59e0b" />
              <line x1="45" y1="-22" x2="32" y2="-12" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round" />
            </g>
            <g>
              <circle cx="38" cy="18" r="4" fill="#10b981" />
              <line x1="38" y1="18" x2="26" y2="28" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" />
            </g>

            {/* The Cat sitting snugly inside the glass cylinder */}
            <g transform="translate(-2, 10)">
              {/* Cat Body */}
              <ellipse cx="0" cy="12" rx="22" ry="16" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
              {/* Cat Head peeking out */}
              <circle cx="0" cy="-6" r="15" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
              {/* Ears */}
              <polygon points="-12,-16 -7,-27 -2,-19" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
              <polygon points="-10,-17 -7,-24 -4,-19" fill="#fda4af" />
              <polygon points="12,-16 7,-27 2,-19" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
              <polygon points="10,-17 7,-24 4,-19" fill="#fda4af" />
              {/* Curious Big Eyes tracking a gas particle */}
              <circle cx="-5" cy="-6" r="3" fill="#0f172a" />
              <circle cx="-4" cy="-7" r="1" fill="#ffffff" />
              <circle cx="5" cy="-6" r="3" fill="#0f172a" />
              <circle cx="6" cy="-7" r="1" fill="#ffffff" />
              {/* Nose & Mouth */}
              <polygon points="-1.5,-1 1.5,-1 0,0.5" fill="#f43f5e" />
              <path d="M -3 2 Q 0 4 3 2" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              {/* Whiskers */}
              <line x1="-10" y1="0" x2="-18" y2="-2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
              <line x1="-10" y1="3" x2="-18" y2="4" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
              <line x1="10" y1="0" x2="18" y2="-2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
              <line x1="10" y1="3" x2="18" y2="4" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
              {/* Two cute front paws resting on rim */}
              <ellipse cx="-10" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              <ellipse cx="10" cy="22" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            </g>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 4: TERMODINAMIKA & TERMOKIMIA (Loaf cat sleeping warm near enthalpy flame)
    // ==========================================
    case 4:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t4-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t4-grid)" />

          {/* Enthalpy Reaction Coordinate Curve */}
          <g transform="translate(115, 34)">
            <line x1="0" y1="78" x2="170" y2="78" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="0" y1="78" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Exothermic drop path */}
            <path
              d="M 10 32 L 40 32 Q 70 8, 90 28 T 145 62 L 165 62"
              stroke="#f97316"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Delta H arrow */}
            <line x1="155" y1="32" x2="155" y2="62" stroke="#ef4444" strokeWidth="1.6" strokeDasharray="2 2" />
            <polygon points="155,65 152,59 158,59" fill="#ef4444" />
            <text x="128" y="48" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">ΔH &lt; 0</text>
          </g>

          {/* Warm Calorimeter Flame */}
          <g transform="translate(255, 92)">
            <path
              d="M 0 16 C -10 16, -14 6, -7 -5 C -5 -8, -3 -2, 0 -16 C 3 -2, 11 -8, 11 2 C 11 10, 7 16, 0 16 Z"
              fill="#fb923c"
              stroke="#ea580c"
              strokeWidth="1.2"
            />
            <path
              d="M 0 14 C -5 14, -6 9, -3 4 C -2 3, -1 6, 0 -1 C 1 6, 4 3, 4 8 C 4 11, 3 14, 0 14 Z"
              fill="#fef08a"
            />
            <path d="M -15 6 C -17 2, -17 -4, -13 -8" stroke="#fdba74" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 15 6 C 17 2, 17 -4, 13 -8" stroke="#fdba74" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </g>

          {/* Loaf Cat sleeping peacefully near the warmth */}
          <g transform="translate(205, 90)">
            {/* Curled Tail */}
            <path d="M -22 10 C -28 10, -30 4, -26 0 C -24 -2, -20 0, -22 4" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Loaf Body */}
            <ellipse cx="-4" cy="8" rx="20" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Sleeping Head */}
            <circle cx="10" cy="2" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="5,-6 8,-14 12,-7" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-6 8,-11 10,-7" fill="#fda4af" />
            <polygon points="15,-4 19,-12 21,-5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="17,-4 19,-10 20,-5" fill="#fda4af" />
            {/* Sleeping Closed Eyes */}
            <path d="M 8 2 Q 10 0 12 2" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <path d="M 14 3 Q 16 1 18 3" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            {/* Nose & Snore "Zzz" */}
            <circle cx="14" cy="5" r="1" fill="#f43f5e" />
            <text x="23" y="-4" fill="#f97316" fontSize="8" fontFamily="sans-serif" fontWeight="bold">z</text>
            <text x="28" y="-10" fill="#f97316" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Z</text>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 5: KESETIMBANGAN KIMIA & LARUTAN (Cat between dynamic equilibrium arrows ⇌)
    // ==========================================
    case 5:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t5-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t5-grid)" />

          {/* Dynamic Equilibrium Arrows (⇌) */}
          <g transform="translate(200, 36)">
            {/* Forward Arrow */}
            <path d="M -45 -4 L 42 -4 M 32 -11 L 42 -4" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Reverse Arrow */}
            <path d="M 45 10 L -42 10 M -32 17 L -42 10" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="-14" y="4" fill="#0369a1" fontSize="9" fontFamily="monospace" fontWeight="bold">K_c ⇌ K_p</text>
          </g>

          {/* Erlenmeyer Flask on Left with Bubbling Solution */}
          <g transform="translate(125, 85)">
            <path
              d="M -5 -30 L 5 -30 L 5 -18 L 22 18 C 24 22, 21 25, 17 25 L -17 25 C -21 25, -24 22, -22 18 L -5 -18 Z"
              stroke="#0284c7"
              strokeWidth="1.8"
              fill="#f0f9ff"
            />
            {/* Colorful Liquid */}
            <path
              d="M -14 4 C -8 1, 8 7, 14 4 L 20 19 C 21 21, 19 23, 15 23 L -15 23 C -19 23, -21 21, -20 19 Z"
              fill="#38bdf8"
              fillOpacity="0.5"
            />
            <circle cx="-4" cy="15" r="2" fill="#0284c7" />
            <circle cx="5" cy="11" r="1.5" fill="#0284c7" />
          </g>

          {/* Curious Cat sitting in the center peeking between reaction states */}
          <g transform="translate(200, 85)">
            {/* Body */}
            <path d="M -14 26 C -16 12, -10 4, 0 4 C 10 4, 16 12, 14 26 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="0" cy="-6" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-11,-15 -6,-25 -2,-17" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-9,-16 -6,-22 -4,-17" fill="#fda4af" />
            <polygon points="11,-15 6,-25 2,-17" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="9,-16 6,-22 4,-17" fill="#fda4af" />
            {/* Curious Big Eyes looking up at equilibrium arrows */}
            <circle cx="-4.5" cy="-7" r="2.8" fill="#0f172a" />
            <circle cx="-3.5" cy="-8" r="0.9" fill="#ffffff" />
            <circle cx="4.5" cy="-7" r="2.8" fill="#0f172a" />
            <circle cx="5.5" cy="-8" r="0.9" fill="#ffffff" />
            {/* Nose & Mouth */}
            <polygon points="-1.5,-2 1.5,-2 0,-0.5" fill="#f43f5e" />
            <path d="M -2.5 1 Q 0 3 2.5 1" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            {/* Paws */}
            <ellipse cx="-6" cy="24" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <ellipse cx="6" cy="24" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          </g>

          {/* Sigmoidal pH Titration curve on right */}
          <g transform="translate(260, 68)">
            <rect x="0" y="-15" width="60" height="45" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <path d="M 8 22 C 20 20, 26 16, 30 6 C 34 -4, 40 -8, 52 -10" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="30" cy="6" r="3" fill="#ef4444" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 6: KINETIKA KIMIA & MEKANISME (Cat jumping over activation energy hill E_a as catalyst)
    // ==========================================
    case 6:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t6-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t6-grid)" />

          {/* Activation Energy Curve (E_a Uncatalyzed vs Catalyzed) */}
          <g transform="translate(105, 30)">
            {/* Coordinate Axis */}
            <line x1="10" y1="85" x2="190" y2="85" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="10" y1="85" x2="10" y2="15" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* High uncatalyzed energy hill */}
            <path
              d="M 20 75 C 60 75, 75 12, 105 12 C 135 12, 150 65, 185 65"
              stroke="#cbd5e1"
              strokeWidth="1.8"
              strokeDasharray="4 3"
              fill="none"
            />
            {/* Transition State mark on high peak */}
            <circle cx="105" cy="12" r="3" fill="#94a3b8" />
            <text x="111" y="14" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">‡ [TS]</text>

            {/* Catalyzed lower energy hill */}
            <path
              d="M 20 75 C 60 75, 75 36, 105 36 C 135 36, 150 65, 185 65"
              stroke="#f43f5e"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <text x="112" y="38" fill="#f43f5e" fontSize="8" fontFamily="monospace" fontWeight="bold">E_a (Katalis)</text>
          </g>

          {/* Agile Cat leaping playfully over the hill (The Catalyst Cat!) */}
          <g transform="translate(205, 48)">
            {/* Tail outstretched in leap */}
            <path d="M -18 8 C -26 4, -30 10, -32 4" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Leaping Body */}
            <ellipse cx="0" cy="4" rx="16" ry="10" fill="#ffffff" stroke="#334155" strokeWidth="1.8" transform="rotate(-15)" />
            {/* Cat Head facing forward */}
            <circle cx="14" cy="-2" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears angled back in speed */}
            <polygon points="9,-9 10,-18 16,-10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,-10 11,-15 14,-10" fill="#fda4af" />
            <polygon points="18,-7 22,-15 23,-7" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            {/* Confident eye & smile */}
            <circle cx="18" cy="-3" r="2" fill="#0f172a" />
            <circle cx="19" cy="-3.8" r="0.7" fill="#ffffff" />
            <path d="M 18 1 Q 20 2 22 1" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
            {/* Front & Back Paws in flying jump */}
            <line x1="8" y1="10" x2="16" y2="18" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            <line x1="-8" y1="8" x2="-14" y2="16" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 7: ELEKTROKIMIA & POTENSIAL SEL (Static electricity cat with Daniell cell battery)
    // ==========================================
    case 7:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t7-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t7-grid)" />

          {/* Daniell Cell Setup: Zn Anode | Salt Bridge | Cu Cathode */}
          <g transform="translate(200, 78)">
            {/* Left beaker Zn (-) */}
            <rect x="-70" y="-12" width="40" height="42" rx="4" stroke="#0284c7" strokeWidth="1.5" fill="#f0f9ff" />
            <rect x="-62" y="-28" width="8" height="42" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
            <text x="-64" y="-32" fill="#0369a1" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Zn (-)</text>

            {/* Right beaker Cu (+) */}
            <rect x="30" y="-12" width="40" height="42" rx="4" stroke="#0284c7" strokeWidth="1.5" fill="#f0f9ff" />
            <rect x="46" y="-28" width="8" height="42" fill="#fb923c" stroke="#c2410c" strokeWidth="1" />
            <text x="44" y="-32" fill="#c2410c" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Cu (+)</text>

            {/* Inverted U-tube Salt Bridge */}
            <path d="M -42 2 C -42 -22, 42 -22, 42 2" stroke="#f59e0b" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.4" />
            <path d="M -42 2 C -42 -22, 42 -22, 42 2" stroke="#d97706" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {/* External Wire Circuit with Voltmeter */}
            <path d="M -58 -28 L -58 -44 L -12 -44" stroke="#eab308" strokeWidth="1.5" fill="none" />
            <path d="M 50 -28 L 50 -44 L 12 -44" stroke="#eab308" strokeWidth="1.5" fill="none" />
            {/* Voltmeter Gauge */}
            <circle cx="0" cy="-44" r="11" fill="#ffffff" stroke="#eab308" strokeWidth="1.6" />
            <text x="-8" y="-41" fill="#b45309" fontSize="7.5" fontFamily="monospace" fontWeight="bold">+1.1V</text>

            {/* Floating e- electrons */}
            <circle cx="-32" cy="-44" r="2" fill="#0284c7" />
            <circle cx="28" cy="-44" r="2" fill="#0284c7" />
            <text x="-28" y="-48" fill="#0284c7" fontSize="7" fontFamily="sans-serif">e⁻ →</text>
          </g>

          {/* Cute Cat sitting between the two half-cells with a static spark */}
          <g transform="translate(200, 86)">
            {/* Body */}
            <ellipse cx="0" cy="10" rx="14" ry="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Cat Head */}
            <circle cx="0" cy="-4" r="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears with tiny electric static sparks */}
            <polygon points="-9,-11 -5,-20 -1,-13" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-7,-12 -5,-17 -3,-13" fill="#fda4af" />
            <polygon points="9,-11 5,-20 1,-13" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 5,-17 3,-13" fill="#fda4af" />
            {/* Spark above ear */}
            <path d="M -6 -23 L -4 -20 L -2 -22" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Sparkly Big Eyes */}
            <circle cx="-4" cy="-4" r="2.5" fill="#0f172a" />
            <circle cx="-3" cy="-5" r="0.8" fill="#ffffff" />
            <circle cx="4" cy="-4" r="2.5" fill="#0f172a" />
            <circle cx="5" cy="-5" r="0.8" fill="#ffffff" />
            {/* Nose & Mouth */}
            <polygon points="-1,-0.5 1,-0.5 0,0.5" fill="#f43f5e" />
            <path d="M -2 2 Q 0 3.5 2 2" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" fill="none" />
            {/* Paws */}
            <ellipse cx="-5" cy="20" rx="3" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
            <ellipse cx="5" cy="20" rx="3" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 8: KIMIA ANORGANIK & SENYAWA KOORDINASI (Cat as central ion surrounded by 6 octahedral ligands)
    // ==========================================
    case 8:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t8-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t8-grid)" />

          {/* Octahedral Coordinate Bonds & Ligands */}
          <g transform="translate(165, 72)">
            {/* Axial coordinate bonds */}
            <line x1="0" y1="-14" x2="0" y2="-48" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="-48" r="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.8" />
            <text x="-4" y="-45" fill="#047857" fontSize="8" fontFamily="monospace" fontWeight="bold">NH₃</text>

            <line x1="0" y1="14" x2="0" y2="48" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="48" r="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.8" />
            <text x="-4" y="51" fill="#047857" fontSize="8" fontFamily="monospace" fontWeight="bold">NH₃</text>

            {/* Equatorial coordinate bonds */}
            <line x1="-14" y1="-4" x2="-48" y2="-14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="-48" cy="-14" r="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.8" />
            <text x="-52" y="-11" fill="#047857" fontSize="8" fontFamily="monospace" fontWeight="bold">NH₃</text>

            <line x1="14" y1="4" x2="48" y2="14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="48" cy="14" r="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.8" />
            <text x="44" y="17" fill="#047857" fontSize="8" fontFamily="monospace" fontWeight="bold">NH₃</text>

            <line x1="-10" y1="10" x2="-32" y2="30" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="-32" cy="30" r="7.5" fill="#ecfdf5" stroke="#059669" strokeWidth="1.6" />

            <line x1="10" y1="-10" x2="32" y2="-30" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="32" cy="-30" r="7.5" fill="#ecfdf5" stroke="#059669" strokeWidth="1.6" />

            {/* Central Metal Ion is the Cute Cat Head! */}
            <g transform="translate(0, 0)">
              <circle cx="0" cy="0" r="16" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2" />
              {/* Cat Ears on Central Ion */}
              <polygon points="-12,-10 -7,-20 -2,-13" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="-10,-11 -7,-17 -4,-13" fill="#fda4af" />
              <polygon points="12,-10 7,-20 2,-13" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="10,-11 7,-17 4,-13" fill="#fda4af" />
              {/* Cat Face on Metal Ion */}
              <circle cx="-5" cy="-2" r="2.2" fill="#ffffff" />
              <circle cx="5" cy="-2" r="2.2" fill="#ffffff" />
              <polygon points="-1,2 1,2 0,3.5" fill="#fda4af" />
              <path d="M -3 5 Q 0 7 3 5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>
          </g>

          {/* Crystal Field Splitting Diagram on Right (e_g vs t_2g) */}
          <g transform="translate(285, 48)">
            {/* e_g level (2 orbitals) */}
            <line x1="0" y1="0" x2="18" y2="0" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="0" x2="42" y2="0" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <text x="48" y="3" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">e_g</text>

            {/* Delta_o splitting arrow */}
            <line x1="21" y1="4" x2="21" y2="34" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="25" y="22" fill="#8b5cf6" fontSize="8" fontFamily="serif" fontWeight="bold">Δ_o</text>

            {/* t_2g level (3 orbitals) */}
            <line x1="-8" y1="38" x2="10" y2="38" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="15" y1="38" x2="33" y2="38" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="38" y1="38" x2="56" y2="38" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
            <text x="61" y="41" fill="#0284c7" fontSize="8" fontFamily="monospace" fontWeight="bold">t_2g</text>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 9: KIMIA ANALITIK & SPEKTROSKOPI (Cat batting playfully at prism rainbow spectrum)
    // ==========================================
    case 9:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t9-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t9-grid)" />

          {/* Optical Glass Prism with Rainbow Light Dispersion */}
          <g transform="translate(150, 72)">
            {/* Triangular Glass Prism */}
            <polygon
              points="0,-36 -32,32 32,32"
              fill="#f0f9ff"
              stroke="#0284c7"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* White Incident Light Ray */}
            <line x1="-90" y1="12" x2="-10" y2="6" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

            {/* Refracted Colorful Rainbow Rays */}
            <line x1="8" y1="4" x2="105" y2="-24" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="8" y1="5" x2="105" y2="-15" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="6" x2="105" y2="-6" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="7" x2="105" y2="3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="8" x2="105" y2="12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="9" x2="105" y2="21" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" />
          </g>

          {/* Playful Cat pawing at the rainbow spectrum beam */}
          <g transform="translate(255, 78)">
            {/* Body */}
            <path d="M -12 24 C -14 10, -8 2, 2 2 C 12 2, 18 10, 16 24 Z" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Head */}
            <circle cx="2" cy="-8" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="-8,-17 -4,-27 1,-19" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-6,-18 -4,-24 -1,-19" fill="#fda4af" />
            <polygon points="12,-17 8,-27 3,-19" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="10,-18 8,-24 5,-19" fill="#fda4af" />

            {/* Sparkly Big Curious Eyes looking at rainbow */}
            <circle cx="-3" cy="-8" r="2.8" fill="#0f172a" />
            <circle cx="-4" cy="-9" r="0.9" fill="#ffffff" />
            <circle cx="6" cy="-8" r="2.8" fill="#0f172a" />
            <circle cx="5" cy="-9" r="0.9" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="0.5,-3 3.5,-3 2,-1.5" fill="#f43f5e" />
            <path d="M -0.5 0 Q 2 2 4.5 0" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Front Paw raised reaching towards rainbow */}
            <path d="M -8 10 C -12 0, -18 -8, -14 -12 C -11 -14, -8 -8, -4 2" stroke="#334155" strokeWidth="1.8" fill="#ffffff" strokeLinecap="round" />
            {/* Sparkle where paw touches rainbow */}
            <circle cx="-14" cy="-12" r="3" fill="#facc15" />
          </g>
        </svg>
      );

    // ==========================================
    // TOPIK 10: KIMIA ORGANIK & BIOKIMIA (Cat curled up sleeping in aromatic benzene ring & DNA helix)
    // ==========================================
    case 10:
      return (
        <svg
          viewBox="0 0 400 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <DotGrid id="t10-grid" />
          </defs>
          <rect width="400" height="144" fill="#ffffff" />
          <rect width="400" height="144" fill="url(#t10-grid)" />

          {/* Aromatic Benzene Ring on Left */}
          <g transform="translate(135, 72)">
            {/* Hexagon Ring */}
            <polygon
              points="0,-36 31.2,-18 31.2,18 0,36 -31.2,18 -31.2,-18"
              stroke="#059669"
              strokeWidth="2.5"
              fill="#ecfdf5"
            />
            {/* Inscribed Delocalized Circle */}
            <circle cx="0" cy="0" r="20" stroke="#10b981" strokeWidth="1.8" strokeDasharray="5 3" fill="none" />
            {/* Substituent -OH */}
            <line x1="0" y1="-36" x2="0" y2="-52" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            <text x="-8" y="-56" fill="#059669" fontSize="9" fontFamily="sans-serif" fontWeight="bold">OH</text>
          </g>

          {/* DNA Double Helix strands on Right like yarn */}
          <g transform="translate(245, 36)">
            <path d="M 0 36 Q 25 12, 50 36 T 100 36" stroke="#0ea5e9" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M 0 36 Q 25 60, 50 36 T 100 36" stroke="#ec4899" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* Base pair rungs */}
            <line x1="12" y1="24" x2="12" y2="48" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="25" y1="16" x2="25" y2="56" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="38" y1="24" x2="38" y2="48" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="62" y1="48" x2="62" y2="24" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="75" y1="56" x2="75" y2="16" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="88" y1="48" x2="88" y2="24" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Cozy Cat napping inside the aromatic ring & playing with the DNA yarn */}
          <g transform="translate(185, 78)">
            {/* Curled cat body */}
            <ellipse cx="0" cy="4" rx="16" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Cat Head */}
            <circle cx="10" cy="-4" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />
            {/* Ears */}
            <polygon points="5,-12 8,-20 12,-13" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="7,-12 8,-17 10,-13" fill="#fda4af" />
            <polygon points="15,-10 19,-18 21,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="17,-10 19,-16 20,-11" fill="#fda4af" />
            {/* Happy sleeping eyes */}
            <path d="M 8 -4 Q 10 -6 12 -4" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <path d="M 14 -3 Q 16 -5 18 -3" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            {/* Nose */}
            <circle cx="14" cy="-0.5" r="1" fill="#f43f5e" />
            {/* Curved tail wrapping around like aromatic cloud */}
            <path d="M -16 6 C -24 6, -26 0, -22 -4 C -18 -6, -14 -2, -18 2" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Front paw holding DNA yarn strand */}
            <ellipse cx="6" cy="10" rx="3.5" ry="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>
        </svg>
      );

    // ==========================================
    // DEFAULT FALLBACK
    // ==========================================
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
          <circle cx="200" cy="72" r="28" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        </svg>
      );
  }
};
