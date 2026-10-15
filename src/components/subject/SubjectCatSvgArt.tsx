import React from 'react';
import type { SubjectId } from '../../types/subject';

interface SubjectCatSvgArtProps {
  subjectId: SubjectId;
  className?: string;
}

export const SubjectCatSvgArt: React.FC<SubjectCatSvgArtProps> = React.memo(
  ({ subjectId, className = 'w-full h-32' }) => {
    switch (subjectId) {
      // ========================================================
      // 1. KIMIA (Chemistry Cat — Lab Goggles & Erlenmeyer Flask)
      // ========================================================
      case 'kimia':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-teal-50/50 border border-teal-100/80 ${className}`}>
            <svg
              viewBox="0 0 240 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Ambient Chemistry Elements */}
              <circle cx="210" cy="24" r="18" fill="#ccfbf1" fillOpacity="0.6" />
              {/* Floating Benzene Hexagon */}
              <polygon
                points="210,12 218,17 218,27 210,32 202,27 202,17"
                stroke="#0d9488"
                strokeWidth="1.2"
                fill="none"
                opacity="0.5"
              />
              <circle cx="210" cy="22" r="4.5" stroke="#0d9488" strokeWidth="0.8" strokeDasharray="1.5 1.5" fill="none" opacity="0.5" />

              {/* Chemical Test Tubes on Desk */}
              <g transform="translate(182, 68)">
                <rect x="0" y="14" width="28" height="3" rx="1.5" fill="#94a3b8" />
                <rect x="4" y="0" width="5" height="15" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
                <rect x="4" y="8" width="5" height="7" rx="1" fill="#38bdf8" />
                <rect x="12" y="-3" width="5" height="18" rx="2" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1" />
                <rect x="12" y="5" width="5" height="10" rx="1" fill="#e879f9" />
                <rect x="20" y="2" width="5" height="13" rx="2" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1" />
                <rect x="20" y="7" width="5" height="8" rx="1" fill="#14b8a6" />
              </g>

              {/* Desk Baseline */}
              <line x1="16" y1="96" x2="224" y2="96" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

              {/* Cat 1: Chemistry Scholar Cat */}
              <g transform="translate(90, 48)">
                {/* Cat Tail with teal spark */}
                <path
                  d="M -22 42 C -36 40 -40 24 -32 14 C -28 9 -22 13 -25 20"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="-32" cy="14" r="2" fill="#14b8a6" />

                {/* Cat Torso */}
                <path
                  d="M -18 48 C -19 24 -10 16 4 16 C 18 16 27 24 26 48 Z"
                  fill="#ffffff"
                  stroke="#334155"
                  strokeWidth="1.8"
                />
                {/* White Lab Coat Lapel */}
                <path d="M -6 16 L -2 36 L 4 36 L 10 16 Z" fill="#f0fdfa" stroke="#0d9488" strokeWidth="0.9" />

                {/* Cat Head */}
                <circle cx="4" cy="4" r="18" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

                {/* Ears */}
                <polygon points="-11,-8 -6,-21 0,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="-9,-9 -6,-18 -2,-11" fill="#fda4af" />
                <polygon points="9,-8 14,-21 18,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="11,-9 14,-18 17,-9" fill="#fda4af" />

                {/* Round Teal Lab Glasses */}
                <circle cx="-2" cy="3" r="6" stroke="#0d9488" strokeWidth="1.3" fill="#f0fdfa" fillOpacity="0.8" />
                <circle cx="10" cy="3" r="6" stroke="#0d9488" strokeWidth="1.3" fill="#f0fdfa" fillOpacity="0.8" />
                <line x1="4" y1="3" x2="4" y2="3" stroke="#0d9488" strokeWidth="1.3" />

                {/* Determined Happy Eyes */}
                <circle cx="-2" cy="3" r="1.8" fill="#0f172a" />
                <circle cx="-2.6" cy="2.2" r="0.6" fill="#ffffff" />
                <circle cx="10" cy="3" r="1.8" fill="#0f172a" />
                <circle cx="9.4" cy="2.2" r="0.6" fill="#ffffff" />

                {/* Nose & Smile */}
                <polygon points="3.5,9 4.5,9 4,10" fill="#f43f5e" />
                <path d="M 2 11 Q 4 13 6 11" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" fill="none" />

                {/* Whiskers */}
                <line x1="-9" y1="8" x2="-18" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="-9" y1="11" x2="-18" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="8" x2="26" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="11" x2="26" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

                {/* Left Paw resting on table */}
                <ellipse cx="-10" cy="46" rx="5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              </g>

              {/* Erlenmeyer Flask held by Cat */}
              <g transform="translate(136, 60)">
                {/* Flask neck */}
                <rect x="-4" y="-8" width="8" height="12" fill="#ffffff" stroke="#0d9488" strokeWidth="1.3" />
                <line x1="-5" y1="-8" x2="5" y2="-8" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round" />
                {/* Flask body */}
                <polygon points="-4,4 4,4 16,28 -16,28" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.4" strokeLinejoin="round" />
                {/* Liquid fill */}
                <polygon points="-10,18 10,18 14.5,26.5 -14.5,26.5" fill="#14b8a6" />
                {/* Bubbles */}
                <circle cx="-3" cy="22" r="1.5" fill="#ffffff" opacity="0.8" />
                <circle cx="4" cy="20" r="1.2" fill="#ffffff" opacity="0.8" />
                <circle cx="1" cy="24" r="0.9" fill="#ffffff" opacity="0.8" />
                {/* Vapor bubble rising */}
                <circle cx="1" cy="-14" r="2.2" fill="#2dd4bf" stroke="#0d9488" strokeWidth="0.8" opacity="0.85" />
                <circle cx="6" cy="-20" r="1.5" fill="#99f6e4" opacity="0.75" />

                {/* Right Paw holding Flask */}
                <ellipse cx="-13" cy="14" rx="4.5" ry="3.5" fill="#ffffff" stroke="#334155" strokeWidth="1.3" transform="rotate(-15)" />
              </g>
            </svg>
          </div>
        );

      // ========================================================
      // 2. FISIKA (Physics Cat — Magnet, Orbit & Newton's Apple)
      // ========================================================
      case 'fisika':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-blue-50/50 border border-blue-100/80 ${className}`}>
            <svg
              viewBox="0 0 240 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Orbit Ring */}
              <g transform="translate(160, 52)">
                <ellipse cx="0" cy="0" rx="64" ry="22" stroke="#bfdbfe" strokeWidth="1.2" strokeDasharray="3 3" transform="rotate(-20)" />
                <circle cx="56" cy="-14" r="3.5" fill="#2563eb" />
                <circle cx="56" cy="-14" r="1.5" fill="#ffffff" />
                <circle cx="-52" cy="14" r="3" fill="#38bdf8" />
              </g>

              {/* Desk Baseline */}
              <line x1="16" y1="96" x2="224" y2="96" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

              {/* Cat: Physics Researcher Cat */}
              <g transform="translate(90, 48)">
                {/* Cat Tail curved with electrical spark */}
                <path
                  d="M -22 42 C -36 38 -38 20 -30 10 C -24 5 -20 10 -24 16"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <polygon points="-30,6 -27,11 -29,11 -26,16 -31,10 -29,10" fill="#f59e0b" />

                {/* Cat Torso */}
                <path
                  d="M -18 48 C -19 24 -10 16 4 16 C 18 16 27 24 26 48 Z"
                  fill="#ffffff"
                  stroke="#334155"
                  strokeWidth="1.8"
                />
                {/* Blue Bowtie */}
                <polygon points="1,24 7,24 4,26" fill="#2563eb" />
                <polygon points="0,22 4,24 0,26" fill="#1d4ed8" />
                <polygon points="8,22 4,24 8,26" fill="#1d4ed8" />

                {/* Cat Head */}
                <circle cx="4" cy="4" r="18" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

                {/* Ears */}
                <polygon points="-11,-8 -6,-21 0,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="-9,-9 -6,-18 -2,-11" fill="#fda4af" />
                <polygon points="9,-8 14,-21 18,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="11,-9 14,-18 17,-9" fill="#fda4af" />

                {/* Wondering Curious Eyes looking up */}
                <ellipse cx="-2" cy="2" rx="3.5" ry="4" fill="#0f172a" />
                <circle cx="-1" cy="0.5" r="1.2" fill="#ffffff" />
                <ellipse cx="10" cy="2" rx="3.5" ry="4" fill="#0f172a" />
                <circle cx="11" cy="0.5" r="1.2" fill="#ffffff" />

                {/* Pink Nose & W-mouth */}
                <polygon points="3.5,8 4.5,8 4,9" fill="#f43f5e" />
                <path d="M 1 9.5 Q 2.5 11 4 9.5 Q 5.5 11 7 9.5" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" fill="none" />

                {/* Whiskers */}
                <line x1="-9" y1="8" x2="-18" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="-9" y1="11" x2="-18" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="8" x2="26" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="11" x2="26" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

                {/* Paws */}
                <ellipse cx="-8" cy="46" rx="5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
                <ellipse cx="14" cy="46" rx="5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              </g>

              {/* Floating Newton's Red Apple above cat */}
              <g transform="translate(94, 18)">
                <circle cx="0" cy="0" r="7.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
                <path d="M 0 -7.5 C -1 -11 2 -12 3 -13" stroke="#78350f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M 2 -10 Q 6 -12 7 -9 Q 4 -8 2 -10 Z" fill="#22c55e" />
                {/* Gravity vector arrow */}
                <line x1="0" y1="10" x2="0" y2="18" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
                <polygon points="0,21 -2.5,17 2.5,17" fill="#2563eb" />
                <text x="5" y="16" fill="#2563eb" fontSize="6" fontFamily="sans-serif" fontWeight="bold">g</text>
              </g>

              {/* Horseshoe Magnet on Right */}
              <g transform="translate(170, 72) rotate(12)">
                <path
                  d="M -12 18 L -12 0 C -12 -12 12 -12 12 0 L 12 18"
                  stroke="#dc2626"
                  strokeWidth="6"
                  strokeLinecap="square"
                  fill="none"
                />
                <rect x="-15" y="8" width="6" height="10" fill="#2563eb" />
                <text x="-14" y="15" fill="#ffffff" fontSize="5" fontFamily="sans-serif" fontWeight="bold">S</text>
                <rect x="9" y="8" width="6" height="10" fill="#dc2626" />
                <text x="10" y="15" fill="#ffffff" fontSize="5" fontFamily="sans-serif" fontWeight="bold">N</text>
                {/* Spark lines */}
                <path d="M -12 24 Q 0 28 12 24" stroke="#93c5fd" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" />
              </g>
            </svg>
          </div>
        );

      // ========================================================
      // 3. MATEMATIKA (Mathematics Cat — Toga Cap, Geometry & Pi)
      // ========================================================
      case 'matematika':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-violet-50/50 border border-violet-100/80 ${className}`}>
            <svg
              viewBox="0 0 240 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Blackboard Grid in Background */}
              <g opacity="0.4" transform="translate(155, 14)">
                <rect x="0" y="0" width="68" height="48" rx="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
                <text x="10" y="16" fill="#7c3aed" fontSize="10" fontFamily="serif" fontWeight="bold">∑</text>
                <text x="32" y="20" fill="#6d28d9" fontSize="9" fontFamily="serif">π</text>
                <text x="48" y="36" fill="#7c3aed" fontSize="11" fontFamily="serif">∫</text>
                <text x="12" y="38" fill="#5b21b6" fontSize="7" fontFamily="monospace">x²+y²=r²</text>
              </g>

              {/* Desk Baseline */}
              <line x1="16" y1="96" x2="224" y2="96" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

              {/* Cat: Math Master Cat with Toga Cap */}
              <g transform="translate(90, 50)">
                {/* Cat Tail */}
                <path
                  d="M -22 40 C -34 38 -38 22 -30 14 C -24 8 -20 14 -24 20"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Cat Torso */}
                <path
                  d="M -18 46 C -19 24 -10 16 4 16 C 18 16 27 24 26 46 Z"
                  fill="#ffffff"
                  stroke="#334155"
                  strokeWidth="1.8"
                />

                {/* Cat Head */}
                <circle cx="4" cy="4" r="18" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

                {/* Ears */}
                <polygon points="-11,-8 -6,-21 0,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="-9,-9 -6,-18 -2,-11" fill="#fda4af" />
                <polygon points="9,-8 14,-21 18,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="11,-9 14,-18 17,-9" fill="#fda4af" />

                {/* Graduation Toga Cap (Mortarboard) */}
                <g transform="translate(4, -14)">
                  <polygon points="-18,-4 0,-10 18,-4 0,2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                  <rect x="-6" y="-3" width="12" height="5" rx="1.5" fill="#475569" />
                  {/* Golden Tassel */}
                  <circle cx="0" cy="-4" r="1.5" fill="#f59e0b" />
                  <path d="M 0 -4 Q 8 -2 12 6" stroke="#f59e0b" strokeWidth="1.2" fill="none" />
                  <rect x="10.5" y="6" width="3" height="4" rx="0.8" fill="#f59e0b" />
                </g>

                {/* Smart Glasses */}
                <rect x="-8" y="0" width="10" height="7" rx="2" stroke="#7c3aed" strokeWidth="1.3" fill="#f5f3ff" fillOpacity="0.85" />
                <rect x="6" y="0" width="10" height="7" rx="2" stroke="#7c3aed" strokeWidth="1.3" fill="#f5f3ff" fillOpacity="0.85" />
                <line x1="2" y1="3" x2="6" y2="3" stroke="#7c3aed" strokeWidth="1.3" />

                {/* Focused Eyes */}
                <circle cx="-3" cy="3.5" r="1.8" fill="#0f172a" />
                <circle cx="-3.6" cy="2.8" r="0.6" fill="#ffffff" />
                <circle cx="11" cy="3.5" r="1.8" fill="#0f172a" />
                <circle cx="10.4" cy="2.8" r="0.6" fill="#ffffff" />

                {/* Pink Nose & Smile */}
                <polygon points="3.5,9 4.5,9 4,10" fill="#f43f5e" />
                <path d="M 2 11 Q 4 12.5 6 11" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" fill="none" />

                {/* Whiskers */}
                <line x1="-9" y1="9" x2="-18" y2="8" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="-9" y1="12" x2="-18" y2="14" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="9" x2="26" y2="8" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="12" x2="26" y2="14" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

                {/* Left Paw holding Triangle Ruler */}
                <g transform="translate(16, 26) rotate(20)">
                  <polygon points="0,0 20,0 0,20" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.2" />
                  <polygon points="4,4 12,4 4,12" fill="#ffffff" stroke="#7c3aed" strokeWidth="0.8" />
                  <ellipse cx="2" cy="4" rx="4" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
                </g>
                <ellipse cx="-8" cy="44" rx="5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              </g>
            </svg>
          </div>
        );

      // ========================================================
      // 4. BIOLOGI (Biology Cat — DNA Helix, Sprout & Ladybug)
      // ========================================================
      case 'biologi':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-emerald-50/50 border border-emerald-100/80 ${className}`}>
            <svg
              viewBox="0 0 240 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* DNA Double Helix on Right */}
              <g transform="translate(178, 22)">
                <path
                  d="M 6 0 Q 22 18 6 36 T 6 72"
                  stroke="#059669"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 26 0 Q 10 18 26 36 T 26 72"
                  stroke="#10b981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Base Pair Rungs */}
                <line x1="9" y1="8" x2="23" y2="8" stroke="#34d399" strokeWidth="1.3" />
                <line x1="16" y1="18" x2="16" y2="18" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                <line x1="9" y1="28" x2="23" y2="28" stroke="#34d399" strokeWidth="1.3" />
                <line x1="6" y1="36" x2="26" y2="36" stroke="#059669" strokeWidth="1.3" />
                <line x1="9" y1="44" x2="23" y2="44" stroke="#34d399" strokeWidth="1.3" />
                <line x1="16" y1="54" x2="16" y2="54" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                <line x1="9" y1="64" x2="23" y2="64" stroke="#34d399" strokeWidth="1.3" />
              </g>

              {/* Desk Baseline */}
              <line x1="16" y1="96" x2="224" y2="96" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

              {/* Cat: Naturalist Biologist Cat */}
              <g transform="translate(90, 48)">
                {/* Cat Tail curled with green leaf tip */}
                <path
                  d="M -22 42 C -36 38 -38 20 -30 12 C -24 6 -20 12 -24 18"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="-30" cy="12" r="2.2" fill="#10b981" />

                {/* Cat Torso */}
                <path
                  d="M -18 48 C -19 24 -10 16 4 16 C 18 16 27 24 26 48 Z"
                  fill="#ffffff"
                  stroke="#334155"
                  strokeWidth="1.8"
                />

                {/* Cat Head */}
                <circle cx="4" cy="4" r="18" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

                {/* Ears */}
                <polygon points="-11,-8 -6,-21 0,-11" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="-9,-9 -6,-18 -2,-11" fill="#fda4af" />
                <polygon points="9,-8 14,-21 18,-8" fill="#ffffff" stroke="#334155" strokeWidth="1.6" strokeLinejoin="round" />
                <polygon points="11,-9 14,-18 17,-9" fill="#fda4af" />

                {/* Cute Sprout leaf on Cat's head */}
                <g transform="translate(4, -14)">
                  <path d="M 0 0 C 0 -6 6 -8 8 -5 C 8 -2 2 0 0 0 Z" fill="#10b981" stroke="#059669" strokeWidth="0.8" />
                  <path d="M 0 0 C 0 -6 -6 -8 -8 -5 C -8 -2 -2 0 0 0 Z" fill="#22c55e" stroke="#059669" strokeWidth="0.8" />
                </g>

                {/* Curious Cat Eyes looking at sprout */}
                <circle cx="-2" cy="3" r="2.2" fill="#0f172a" />
                <circle cx="-1.4" cy="2" r="0.8" fill="#ffffff" />
                <circle cx="10" cy="3" r="2.2" fill="#0f172a" />
                <circle cx="10.6" cy="2" r="0.8" fill="#ffffff" />

                {/* Pink Nose & Smile */}
                <polygon points="3.5,9 4.5,9 4,10" fill="#f43f5e" />
                <path d="M 1 10.5 Q 2.5 12 4 10.5 Q 5.5 12 7 10.5" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" fill="none" />

                {/* Whiskers */}
                <line x1="-9" y1="8" x2="-18" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="-9" y1="11" x2="-18" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="8" x2="26" y2="7" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                <line x1="17" y1="11" x2="26" y2="13" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

                {/* Paws */}
                <ellipse cx="-8" cy="46" rx="5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
                <ellipse cx="14" cy="46" rx="5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
              </g>

              {/* Plant Pot with Little Sprout */}
              <g transform="translate(142, 78)">
                <polygon points="-8,18 8,18 6,6 -6,6" fill="#b45309" stroke="#78350f" strokeWidth="1" />
                <rect x="-8" y="4" width="16" height="3" rx="1" fill="#d97706" stroke="#78350f" strokeWidth="0.8" />
                <path d="M 0 4 Q 0 -6 6 -8 Q 6 0 0 4 Z" fill="#22c55e" stroke="#15803d" strokeWidth="0.8" />
                <path d="M 0 2 Q 0 -6 -6 -7 Q -6 0 0 2 Z" fill="#16a34a" stroke="#15803d" strokeWidth="0.8" />
                {/* Tiny Ladybug */}
                <circle cx="5" cy="-7" r="2" fill="#ef4444" />
                <circle cx="5.8" cy="-7.5" r="0.8" fill="#0f172a" />
              </g>
            </svg>
          </div>
        );

      default:
        return null;
    }
  }
);

SubjectCatSvgArt.displayName = 'SubjectCatSvgArt';
