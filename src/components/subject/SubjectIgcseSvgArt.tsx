import React from 'react';
import type { SubjectId } from '../../types/subject';

interface SubjectIgcseSvgArtProps {
  subjectId: SubjectId;
  className?: string;
}

/**
 * SubjectIgcseSvgArt
 * 
 * Ilustrasi vektor saintifik Cambridge IGCSE minimalis (minim teks, dominan visual grafis):
 * 1. Kimia: Ikatan Kovalen Molekul Air (H₂O) — struktur orbital kulit elektron & pasangan elektron ikatan
 * 2. Fisika: Pembiasan Cahaya (Ray Optics Refraction) — berkas cahaya membias melalui balok kaca & garis normal
 * 3. Matematika: Geometri Trigonometri Segitiga Siku-siku & Teorema Pythagoras (a² + b² = c²)
 * 4. Biologi: Irisan Struktur Sel Tumbuhan (Dinding Sel, Vakuola, Kloroplas, & Nukleus)
 */
export const SubjectIgcseSvgArt: React.FC<SubjectIgcseSvgArtProps> = React.memo(
  ({ subjectId, className = 'w-full h-36' }) => {
    switch (subjectId) {
      // =========================================================================
      // 1. KIMIA (Chemistry) — Covalent Bonding (Ikatan Kovalen H₂O)
      // =========================================================================
      case 'kimia':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-2xs ${className}`}>
            <svg
              viewBox="0 0 320 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Dot Grid */}
              <pattern id="chem-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.75" fill="#e2e8f0" />
              </pattern>
              <rect width="320" height="160" fill="url(#chem-dots)" />

              {/* Central Oxygen Valence Shell */}
              <circle cx="160" cy="80" r="50" fill="#8fd3ef" fillOpacity="0.08" stroke="#334155" strokeWidth="1.8" />
              {/* Inner Shell */}
              <circle cx="160" cy="80" r="28" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
              {/* Oxygen Nucleus */}
              <circle cx="160" cy="80" r="16" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1.8" />
              <text
                x="160"
                y="85.5"
                textAnchor="middle"
                fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="15"
                fill="#1f2937"
              >
                O
              </text>

              {/* Oxygen Inner Electrons (2 dots) */}
              <circle cx="160" cy="52" r="2.8" fill="#1f2937" />
              <circle cx="160" cy="108" r="2.8" fill="#1f2937" />

              {/* Oxygen Lone Pairs (Non-bonding) */}
              <circle cx="153" cy="30" r="2.8" fill="#1f2937" />
              <circle cx="167" cy="30" r="2.8" fill="#1f2937" />
              <circle cx="153" cy="130" r="2.8" fill="#1f2937" />
              <circle cx="167" cy="130" r="2.8" fill="#1f2937" />

              {/* LEFT HYDROGEN ATOM */}
              <circle cx="102" cy="80" r="30" fill="#fde58a" fillOpacity="0.12" stroke="#334155" strokeWidth="1.6" />
              <circle cx="102" cy="80" r="13" fill="#fde58a" stroke="#1f2937" strokeWidth="1.6" />
              <text
                x="102"
                y="84.5"
                textAnchor="middle"
                fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="12"
                fill="#1f2937"
              >
                H
              </text>

              {/* Left Shared Electron Pair (1 dot + 1 cross) */}
              <circle cx="120" cy="74" r="2.8" fill="#1f2937" />
              <g stroke="#d64545" strokeWidth="2" strokeLinecap="round">
                <line x1="117.5" y1="83.5" x2="122.5" y2="88.5" />
                <line x1="122.5" y1="83.5" x2="117.5" y2="88.5" />
              </g>

              {/* RIGHT HYDROGEN ATOM */}
              <circle cx="218" cy="80" r="30" fill="#fde58a" fillOpacity="0.12" stroke="#334155" strokeWidth="1.6" />
              <circle cx="218" cy="80" r="13" fill="#fde58a" stroke="#1f2937" strokeWidth="1.6" />
              <text
                x="218"
                y="84.5"
                textAnchor="middle"
                fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="12"
                fill="#1f2937"
              >
                H
              </text>

              {/* Right Shared Electron Pair (1 dot + 1 cross) */}
              <circle cx="200" cy="74" r="2.8" fill="#1f2937" />
              <g stroke="#d64545" strokeWidth="2" strokeLinecap="round">
                <line x1="197.5" y1="83.5" x2="202.5" y2="88.5" />
                <line x1="202.5" y1="83.5" x2="197.5" y2="88.5" />
              </g>

              {/* Subtle Molecular Formula Badge */}
              <g transform="translate(248, 12)">
                <rect x="0" y="0" width="56" height="22" rx="11" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
                <text
                  x="28"
                  y="15"
                  textAnchor="middle"
                  fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="11"
                  fill="#334155"
                >
                  H₂O
                </text>
              </g>

              {/* Small Visual Legend (Pure symbols) */}
              <g transform="translate(18, 16)">
                <circle cx="8" cy="8" r="2.8" fill="#1f2937" />
                <g stroke="#d64545" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="20" y1="5.5" x2="25" y2="10.5" />
                  <line x1="25" y1="5.5" x2="20" y2="10.5" />
                </g>
              </g>
            </svg>
          </div>
        );

      // =========================================================================
      // 2. FISIKA (Physics) — Ray Optics Light Refraction (Pembiasan Cahaya)
      // =========================================================================
      case 'fisika':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-2xs ${className}`}>
            <svg
              viewBox="0 0 320 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="phys-ray-arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                >
                  <path d="M 1 2 L 7 5 L 1 8" fill="none" stroke="#d64545" strokeWidth="1.8" strokeLinecap="round" />
                </marker>
              </defs>

              {/* Background Dot Grid */}
              <pattern id="phys-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.75" fill="#e2e8f0" />
              </pattern>
              <rect width="320" height="160" fill="url(#phys-dots)" />

              {/* Central Glass Block */}
              <rect
                x="60"
                y="46"
                width="200"
                height="68"
                rx="4"
                fill="#d6f0fb"
                fillOpacity="0.55"
                stroke="#1f2937"
                strokeWidth="2"
              />
              {/* Subtle Glass Inner Bevel Highlight */}
              <line x1="64" y1="50" x2="256" y2="50" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />

              {/* Normal Line 1 (Top boundary, x=122) */}
              <line x1="122" y1="12" x2="122" y2="88" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />

              {/* Normal Line 2 (Bottom boundary, x=182) */}
              <line x1="182" y1="72" x2="182" y2="148" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />

              {/* 1. Incident Ray */}
              <line
                x1="40"
                y1="14"
                x2="122"
                y2="46"
                stroke="#d64545"
                strokeWidth="2.4"
                strokeLinecap="round"
                markerEnd="url(#phys-ray-arrow)"
              />
              {/* Angle of incidence arc i */}
              <path d="M 122 34 A 12 12 0 0 0 106 39" fill="none" stroke="#d64545" strokeWidth="1.4" />
              <text
                x="113"
                y="35"
                fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="10"
                fill="#d64545"
              >
                i
              </text>

              {/* 2. Refracted Ray (Bends TOWARDS normal in glass) */}
              <line
                x1="122"
                y1="46"
                x2="182"
                y2="114"
                stroke="#d64545"
                strokeWidth="2.4"
                strokeLinecap="round"
                markerEnd="url(#phys-ray-arrow)"
              />
              {/* Angle of refraction arc r */}
              <path d="M 122 60 A 14 14 0 0 1 133 59" fill="none" stroke="#d64545" strokeWidth="1.4" />
              <text
                x="129"
                y="69"
                fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="10"
                fill="#d64545"
              >
                r
              </text>

              {/* 3. Emergent Ray (Bends AWAY from normal, parallel to incident) */}
              <line
                x1="182"
                y1="114"
                x2="264"
                y2="146"
                stroke="#d64545"
                strokeWidth="2.4"
                strokeLinecap="round"
                markerEnd="url(#phys-ray-arrow)"
              />

              {/* Ghost Unrefracted Path (Faint dashed straight line) */}
              <line
                x1="122"
                y1="46"
                x2="228"
                y2="88"
                stroke="#fca5a5"
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />

              {/* Subtle Ray Wavefront indicator rings */}
              <path d="M 70 20 L 76 34" stroke="#f87171" strokeWidth="1" strokeOpacity="0.6" />
              <path d="M 82 25 L 88 39" stroke="#f87171" strokeWidth="1" strokeOpacity="0.6" />
            </svg>
          </div>
        );

      // =========================================================================
      // 3. MATEMATIKA (Mathematics) — Right-Angled Triangle & Pythagoras
      // =========================================================================
      case 'matematika':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-2xs ${className}`}>
            <svg
              viewBox="0 0 320 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Coordinate Grid */}
              <pattern id="math-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                <circle cx="10" cy="10" r="0.7" fill="#cbd5e1" />
              </pattern>
              <rect width="320" height="160" fill="url(#math-grid)" />

              {/* Subtle Cartesian Axes */}
              <line x1="28" y1="130" x2="295" y2="130" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <polygon points="295,130 289,127 289,133" fill="#94a3b8" />
              <line x1="45" y1="145" x2="45" y2="18" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <polygon points="45,18 42,24 48,24" fill="#94a3b8" />

              {/* Faint Background Sine Wave Curve */}
              <path
                d="M 28 130 Q 95 60 160 130 T 290 130"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* Right-Angled Triangle ABC: A(75, 130), B(225, 130), C(225, 38) */}
              <polygon
                points="75,130 225,130 225,38"
                fill="#cdb8f5"
                fillOpacity="0.22"
                stroke="#1f2937"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* Right-Angle Square Marker at B(225, 130) */}
              <polyline points="209,130 209,114 225,114" fill="none" stroke="#1f2937" strokeWidth="1.6" />
              <circle cx="217" cy="122" r="1.5" fill="#1f2937" />

              {/* Angle θ Arc at A(75, 130) */}
              <path d="M 108 130 A 33 33 0 0 0 104 112" fill="none" stroke="#7c3aed" strokeWidth="2" />
              <text
                x="116"
                y="124"
                fontFamily="'Comic Neue', ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="12"
                fontStyle="italic"
                fill="#7c3aed"
              >
                θ
              </text>

              {/* Side Labels: a, b, c */}
              {/* Adjacent (b) */}
              <text
                x="150"
                y="146"
                textAnchor="middle"
                fontFamily="serif"
                fontStyle="italic"
                fontWeight="bold"
                fontSize="14"
                fill="#4b5563"
              >
                b
              </text>

              {/* Opposite (a) */}
              <text
                x="238"
                y="88"
                fontFamily="serif"
                fontStyle="italic"
                fontWeight="bold"
                fontSize="14"
                fill="#4b5563"
              >
                a
              </text>

              {/* Hypotenuse (c) */}
              <text
                x="142"
                y="76"
                textAnchor="middle"
                transform="rotate(-31 142 76)"
                fontFamily="serif"
                fontStyle="italic"
                fontWeight="bold"
                fontSize="15"
                fill="#7c3aed"
              >
                c
              </text>

              {/* Theorem Badge */}
              <g transform="translate(18, 22)">
                <rect x="0" y="0" width="84" height="24" rx="12" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1.2" />
                <text
                  x="42"
                  y="16"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontWeight="bold"
                  fontSize="12"
                  fill="#6d28d9"
                >
                  a² + b² = c²
                </text>
              </g>
            </svg>
          </div>
        );

      // =========================================================================
      // 4. BIOLOGI (Biology) — Plant Cell Structure (Struktur Sel Tumbuhan)
      // =========================================================================
      case 'biologi':
        return (
          <div className={`relative select-none overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-2xs ${className}`}>
            <svg
              viewBox="0 0 320 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Dot Grid */}
              <pattern id="bio-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.75" fill="#e2e8f0" />
              </pattern>
              <rect width="320" height="160" fill="url(#bio-dots)" />

              {/* Outer Rigid Cell Wall (Cellulose) */}
              <rect
                x="54"
                y="14"
                width="212"
                height="132"
                rx="18"
                fill="#b5efb0"
                fillOpacity="0.32"
                stroke="#15803d"
                strokeWidth="2.8"
              />

              {/* Inner Cell Membrane & Cytoplasm */}
              <rect
                x="62"
                y="22"
                width="196"
                height="116"
                rx="14"
                fill="#f0fdf4"
                stroke="#1f2937"
                strokeWidth="1.5"
              />

              {/* Large Central Permanent Vacuole */}
              <path
                d="M 136 36 Q 228 32 238 72 Q 242 118 148 120 Q 120 120 120 76 Q 120 40 136 36 Z"
                fill="#d6f0fb"
                fillOpacity="0.8"
                stroke="#0284c7"
                strokeWidth="1.5"
              />
              {/* Vacuole Inner Fluid Sheen */}
              <path
                d="M 148 48 Q 206 46 216 70"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                strokeOpacity="0.8"
              />

              {/* Nucleus with Nucleolus (Left side) */}
              <circle cx="98" cy="68" r="18" fill="#cdb8f5" fillOpacity="0.75" stroke="#7c3aed" strokeWidth="1.8" />
              <circle cx="98" cy="68" r="6" fill="#6d28d9" />
              {/* Chromatin strands */}
              <circle cx="93" cy="63" r="1.5" fill="#a78bfa" />
              <circle cx="104" cy="74" r="1.5" fill="#a78bfa" />

              {/* Chloroplasts (Green capsules with thylakoid stacks) */}
              {/* 1. Chloroplast Top-Center */}
              <g transform="translate(156, 28) rotate(12)">
                <ellipse cx="0" cy="0" rx="11" ry="5.5" fill="#86efac" stroke="#15803d" strokeWidth="1.4" />
                <line x1="-6" y1="-1" x2="6" y2="-1" stroke="#15803d" strokeWidth="0.9" />
                <line x1="-5" y1="1.5" x2="5" y2="1.5" stroke="#15803d" strokeWidth="0.9" />
              </g>

              {/* 2. Chloroplast Bottom-Left */}
              <g transform="translate(94, 112) rotate(-15)">
                <ellipse cx="0" cy="0" rx="11" ry="5.5" fill="#86efac" stroke="#15803d" strokeWidth="1.4" />
                <line x1="-6" y1="-1" x2="6" y2="-1" stroke="#15803d" strokeWidth="0.9" />
                <line x1="-5" y1="1.5" x2="5" y2="1.5" stroke="#15803d" strokeWidth="0.9" />
              </g>

              {/* 3. Chloroplast Bottom-Center */}
              <g transform="translate(182, 122) rotate(6)">
                <ellipse cx="0" cy="0" rx="10" ry="5" fill="#86efac" stroke="#15803d" strokeWidth="1.4" />
                <line x1="-5" y1="0" x2="5" y2="0" stroke="#15803d" strokeWidth="0.9" />
              </g>

              {/* 4. Chloroplast Far-Right */}
              <g transform="translate(242, 58) rotate(80)">
                <ellipse cx="0" cy="0" rx="9" ry="4.8" fill="#86efac" stroke="#15803d" strokeWidth="1.3" />
                <line x1="-4" y1="0" x2="4" y2="0" stroke="#15803d" strokeWidth="0.9" />
              </g>

              {/* Mitochondria (Orange capsules with inner cristae) */}
              <g transform="translate(86, 36) rotate(28)">
                <ellipse cx="0" cy="0" rx="7.5" ry="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
                <path d="M -4 0 Q 0 -2 4 0" fill="none" stroke="#ea580c" strokeWidth="0.8" />
              </g>
              <g transform="translate(142, 124) rotate(-22)">
                <ellipse cx="0" cy="0" rx="7" ry="3.8" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
              </g>

              {/* Ribosomes (Tiny dark dots scattered in cytoplasm) */}
              <circle cx="78" cy="88" r="1.2" fill="#64748b" />
              <circle cx="82" cy="94" r="1.2" fill="#64748b" />
              <circle cx="120" cy="120" r="1.2" fill="#64748b" />
              <circle cx="124" cy="30" r="1.2" fill="#64748b" />
              <circle cx="236" cy="104" r="1.2" fill="#64748b" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  }
);

SubjectIgcseSvgArt.displayName = 'SubjectIgcseSvgArt';
