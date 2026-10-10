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
    // TOPIC 1: SOLIDS, LIQUIDS & GASES (0620 Particle Model)
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

          {/* Three State Chambers (Solid - Liquid - Gas) */}
          {/* Chamber 1: SOLID (Regular Lattice) */}
          <g transform="translate(45, 26)">
            <rect x="0" y="0" width="70" height="85" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="0" y="85" width="70" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="35" y="97" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">SOLID</text>
            {/* Regular particles 3x4 */}
            <g fill="#8fd3ef" stroke="#1f2937" strokeWidth="1.2">
              <circle cx="17" cy="22" r="5" />
              <circle cx="35" cy="22" r="5" />
              <circle cx="53" cy="22" r="5" />
              <circle cx="17" cy="38" r="5" />
              <circle cx="35" cy="38" r="5" />
              <circle cx="53" cy="38" r="5" />
              <circle cx="17" cy="54" r="5" />
              <circle cx="35" cy="54" r="5" />
              <circle cx="53" cy="54" r="5" />
              <circle cx="17" cy="70" r="5" />
              <circle cx="35" cy="70" r="5" />
              <circle cx="53" cy="70" r="5" />
            </g>
          </g>

          {/* Transition Arrow 1 */}
          <g transform="translate(125, 62)">
            <path d="M 0 0 L 16 0" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M 12 -4 L 18 0 L 12 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Chamber 2: LIQUID (Irregular Touching) */}
          <g transform="translate(155, 26)">
            <rect x="0" y="0" width="70" height="85" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="0" y="85" width="70" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="35" y="97" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">LIQUID</text>
            {/* Irregular touching particles */}
            <g fill="#fed7aa" stroke="#1f2937" strokeWidth="1.2">
              <circle cx="20" cy="71" r="5" />
              <circle cx="33" cy="73" r="5" />
              <circle cx="47" cy="72" r="5" />
              <circle cx="18" cy="57" r="5" />
              <circle cx="32" cy="59" r="5" />
              <circle cx="48" cy="58" r="5" />
              <circle cx="26" cy="45" r="5" />
              <circle cx="42" cy="46" r="5" />
              <circle cx="55" cy="55" r="5" />
            </g>
          </g>

          {/* Transition Arrow 2 */}
          <g transform="translate(235, 62)">
            <path d="M 0 0 L 16 0" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M 12 -4 L 18 0 L 12 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Chamber 3: GAS (Random Dispersed with Motion Trails) */}
          <g transform="translate(265, 26)">
            <rect x="0" y="0" width="70" height="85" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="0" y="85" width="70" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="35" y="97" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">GAS</text>
            {/* Gas particles with speed vectors */}
            <g fill="#fda4af" stroke="#1f2937" strokeWidth="1.2">
              <circle cx="22" cy="24" r="5" />
              <path d="M 16 24 L 9 24" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />

              <circle cx="52" cy="38" r="5" />
              <path d="M 52 44 L 52 51" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />

              <circle cx="25" cy="58" r="5" />
              <path d="M 31 56 L 38 52" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />

              <circle cx="50" cy="70" r="5" />
              <path d="M 44 72 L 37 75" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
            </g>
          </g>

          {/* Cambridge Badge / Tag */}
          <g transform="translate(345, 14)">
            <rect x="0" y="0" width="46" height="20" rx="4" fill="#f3e8ff" stroke="#7e22ce" strokeWidth="1" />
            <text x="23" y="14" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#6b21a8">CIE 0620</text>
          </g>
        </svg>
      );

    // ==========================================
    // TOPIC 2: ATOMS, ELEMENTS & COMPOUNDS (0620 Atomic Structure & Bonding)
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

          {/* Panel 1: ATOM (Bohr Shell Model) */}
          <g transform="translate(35, 20)">
            <rect x="0" y="0" width="90" height="92" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="0" y="92" width="90" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="45" y="104" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">BOHR ATOM</text>
            {/* Shell orbits */}
            <circle cx="45" cy="46" r="32" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <circle cx="45" cy="46" r="18" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            {/* Nucleus */}
            <circle cx="45" cy="46" r="8" fill="#f5a3a3" stroke="#1f2937" strokeWidth="1.2" />
            <text x="45" y="49" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="7" fill="#1f2937">+</text>
            {/* Inner electrons */}
            <circle cx="45" cy="28" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="1" />
            <circle cx="45" cy="64" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="1" />
            {/* Outer electrons */}
            <circle cx="13" cy="46" r="3" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1" />
            <circle cx="77" cy="46" r="3" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1" />
            <circle cx="45" cy="14" r="3" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1" />
            <circle cx="45" cy="78" r="3" fill="#8fd3ef" stroke="#1f2937" strokeWidth="1" />
          </g>

          {/* Plus Sign */}
          <text x="140" y="70" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="16" fill="#64748b">+</text>

          {/* Panel 2: IONIC LATTICE (Alternating Na+ / Cl-) */}
          <g transform="translate(155, 20)">
            <rect x="0" y="0" width="90" height="92" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="0" y="92" width="90" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="45" y="104" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">IONIC LATTICE</text>
            {/* Alternating ions 3x3 */}
            <g stroke="#1f2937" strokeWidth="1.2">
              <circle cx="22" cy="24" r="7" fill="#b5efb0" />
              <circle cx="45" cy="24" r="9" fill="#8fd3ef" />
              <circle cx="68" cy="24" r="7" fill="#b5efb0" />

              <circle cx="22" cy="46" r="9" fill="#8fd3ef" />
              <circle cx="45" cy="46" r="7" fill="#b5efb0" />
              <circle cx="68" cy="46" r="9" fill="#8fd3ef" />

              <circle cx="22" cy="68" r="7" fill="#b5efb0" />
              <circle cx="45" cy="68" r="9" fill="#8fd3ef" />
              <circle cx="68" cy="68" r="7" fill="#b5efb0" />
            </g>
          </g>

          {/* Arrow */}
          <g transform="translate(255, 66)">
            <path d="M 0 0 L 14 0" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M 10 -4 L 16 0 L 10 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Panel 3: METALLIC (Sea of Electrons) */}
          <g transform="translate(278, 20)">
            <rect x="0" y="0" width="76" height="92" rx="6" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.6" />
            <rect x="0" y="92" width="76" height="18" rx="3" fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
            <text x="38" y="104" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#1f2937">METALLIC</text>
            {/* Cations and sea of electrons */}
            <circle cx="22" cy="30" r="9" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="54" cy="30" r="9" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="22" cy="62" r="9" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            <circle cx="54" cy="62" r="9" fill="#cfd4d9" stroke="#1f2937" strokeWidth="1.2" />
            {/* Delocalised electrons */}
            <circle cx="38" cy="30" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="22" cy="46" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="54" cy="46" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="38" cy="62" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="0.8" />
            <circle cx="38" cy="46" r="3" fill="#fde58a" stroke="#1f2937" strokeWidth="0.8" />
          </g>

          {/* Cambridge Badge / Tag */}
          <g transform="translate(345, 14)">
            <rect x="0" y="0" width="46" height="20" rx="4" fill="#f3e8ff" stroke="#7e22ce" strokeWidth="1" />
            <text x="23" y="14" textAnchor="middle" fontFamily="'Comic Neue', sans-serif" fontWeight="700" fontSize="8.5" fill="#6b21a8">CIE 0620</text>
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
