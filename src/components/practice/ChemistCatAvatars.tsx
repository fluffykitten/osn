import React from 'react';

export type ChemistCatType =
  | 'quantum'
  | 'beaker'
  | 'goggles'
  | 'medalist'
  | 'professor'
  | 'thinking'
  | 'flame'
  | 'sparkle'
  | 'dna_helix'
  | 'pipette'
  | 'crystal'
  | 'magnetic'
  | 'radioactive'
  | 'periodic'
  | 'thermo'
  | 'galvanic'
  | 'spectro'
  | 'bubble_wand'
  | 'microscope'
  | 'mortar_pestle'
  | 'ph_strip'
  | 'centrifuge'
  | 'gas_mask'
  | 'polymer'
  | 'ice_lattice'
  | 'catalyst'
  | 'coffee_caffeine'
  | 'space_astro';

interface ChemistCatProps {
  type?: ChemistCatType;
  seed?: number; // Jika type tidak ditentukan, pilih deterministik berdasarkan seed (question.id)
  className?: string;
  size?: number | string;
  watermark?: boolean; // Mode watermark transparan untuk latar kartu
}

const CAT_TYPES: ChemistCatType[] = [
  'quantum',
  'beaker',
  'goggles',
  'medalist',
  'professor',
  'thinking',
  'flame',
  'sparkle',
  'dna_helix',
  'pipette',
  'crystal',
  'magnetic',
  'radioactive',
  'periodic',
  'thermo',
  'galvanic',
  'spectro',
  'bubble_wand',
  'microscope',
  'mortar_pestle',
  'ph_strip',
  'centrifuge',
  'gas_mask',
  'polymer',
  'ice_lattice',
  'catalyst',
  'coffee_caffeine',
  'space_astro',
];

export const getChemistCatType = (seed: number): ChemistCatType => {
  const index = Math.abs(seed * 13 + 7) % CAT_TYPES.length;
  return CAT_TYPES[index];
};

export const ChemistCat: React.FC<ChemistCatProps> = ({
  type,
  seed,
  className = '',
  size = 48,
  watermark = false,
}) => {
  const resolvedType = type || (typeof seed === 'number' ? getChemistCatType(seed) : 'quantum');

  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${watermark ? '' : 'drop-shadow-2xs'}`}
      >
        {/* Render Cat Variant */}
        {resolvedType === 'quantum' && (
          // 1. Quantum Cat (Schrodinger Cat with Atom Orbit Ring)
          <g>
            {/* Background Glow */}
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f0f9ff" />
                <circle cx="24" cy="24" r="21" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="3 2" />
              </>
            )}

            {/* Atomic Ring */}
            <ellipse cx="24" cy="24" rx="19" ry="8" stroke="#38bdf8" strokeWidth="1.2" transform="rotate(-25 24 24)" />
            <circle cx="9" cy="18" r="2" fill="#0284c7" />
            <circle cx="39" cy="30" r="2" fill="#0284c7" />

            {/* Cat Ears */}
            <polygon points="15,18 19,8 24,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="16,16 19,10 22,15" fill="#fda4af" />
            <polygon points="33,18 29,8 24,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="32,16 29,10 26,15" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="24" cy="24" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Eyes */}
            <circle cx="20.5" cy="22.5" r="1.5" fill="#0f172a" />
            <circle cx="27.5" cy="22.5" r="1.5" fill="#0f172a" />
            <circle cx="21" cy="22" r="0.5" fill="#ffffff" />
            <circle cx="28" cy="22" r="0.5" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="23.5,25 24.5,25 24,25.8" fill="#f43f5e" />
            <path d="M 22.5 27 Q 24 28 25.5 27" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Whiskers */}
            <line x1="14" y1="23" x2="18" y2="24" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="14" y1="26" x2="18" y2="26" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="34" y1="23" x2="30" y2="24" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            <line x1="34" y1="26" x2="30" y2="26" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

            {/* Cheek blush */}
            <circle cx="18" cy="25" r="1.5" fill="#fecdd3" opacity="0.8" />
            <circle cx="30" cy="25" r="1.5" fill="#fecdd3" opacity="0.8" />
          </g>
        )}

        {resolvedType === 'beaker' && (
          // 2. Beaker Cat (Cat with green bubbling Erlenmeyer Flask)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#ecfdf5" />
                <circle cx="24" cy="24" r="21" stroke="#a7f3d0" strokeWidth="1.2" />
              </>
            )}

            {/* Cat Ears */}
            <polygon points="12,18 16,8 21,15" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="13,16 16,10 19,15" fill="#fde047" />
            <polygon points="28,18 24,8 20,15" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="27,16 24,10 21,15" fill="#fde047" />

            {/* Cat Head (Ginger Cat) */}
            <circle cx="20" cy="22" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.4" />

            {/* Eyes */}
            <ellipse cx="17" cy="20.5" rx="1.5" ry="1.8" fill="#713f12" />
            <ellipse cx="23" cy="20.5" rx="1.5" ry="1.8" fill="#713f12" />
            <circle cx="17.5" cy="20" r="0.5" fill="#ffffff" />
            <circle cx="23.5" cy="20" r="0.5" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="19.5,23.5 20.5,23.5 20,24.2" fill="#f43f5e" />
            <path d="M 19 25 Q 20 26 21 25" stroke="#713f12" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Erlenmeyer Flask in front */}
            <g transform="translate(10, 4)">
              <polygon points="20,16 22,16 22,20 26,30 16,30 20,20" fill="#d1fae5" stroke="#059669" strokeWidth="1.2" strokeLinejoin="round" />
              {/* Liquid */}
              <polygon points="17.2,27 24.8,27 25.5,29.5 16.5,29.5" fill="#10b981" />
              {/* Bubbles */}
              <circle cx="21" cy="24" r="1" fill="#34d399" />
              <circle cx="23" cy="18" r="0.8" fill="#34d399" />
              <circle cx="19.5" cy="13" r="1.2" fill="#10b981" />
            </g>
          </g>
        )}

        {resolvedType === 'goggles' && (
          // 3. Safety Goggles Cat (Lab Scientist Cat)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#eff6ff" />
                <circle cx="24" cy="24" r="21" stroke="#bfdbfe" strokeWidth="1.2" />
              </>
            )}

            {/* Cat Ears */}
            <polygon points="13,17 18,7 23,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="14,15 18,9 21,14" fill="#fda4af" />
            <polygon points="35,17 30,7 25,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="34,15 30,9 27,14" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="24" cy="24" r="11" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Goggles Strap */}
            <path d="M 13 22 Q 24 21 35 22" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Safety Goggles Lens Left */}
            <rect x="16" y="18" width="7" height="7" rx="3.5" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.4" />
            <circle cx="19.5" cy="21.5" r="1.5" fill="#1e3a8a" />
            <circle cx="18" cy="20" r="0.8" fill="#ffffff" />

            {/* Safety Goggles Lens Right */}
            <rect x="25" y="18" width="7" height="7" rx="3.5" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.4" />
            <circle cx="28.5" cy="21.5" r="1.5" fill="#1e3a8a" />
            <circle cx="27" cy="20" r="0.8" fill="#ffffff" />

            {/* Cute mouth & nose under goggles */}
            <polygon points="23.5,27 24.5,27 24,27.8" fill="#f43f5e" />
            <path d="M 22.5 29 Q 24 30.5 25.5 29" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Lab coat collar */}
            <polygon points="21,34 24,38 27,34" fill="#3b82f6" />
          </g>
        )}

        {resolvedType === 'medalist' && (
          // 4. Medalist Cat (Academic Hat + Gold Ribbon)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fffbeb" />
                <circle cx="24" cy="24" r="21" stroke="#fde68a" strokeWidth="1.2" />
              </>
            )}

            {/* Academic Cap / Toga */}
            <g transform="translate(0, 0)">
              <polygon points="24,5 37,11 24,16 11,11" fill="#1e1b4b" stroke="#0f172a" strokeWidth="1" />
              <rect x="20" y="14" width="8" height="3" fill="#312e81" />
              {/* Tassel */}
              <path d="M 24 10 L 33 13 L 34 18" stroke="#eab308" strokeWidth="1" strokeLinecap="round" fill="none" />
              <circle cx="34" cy="18" r="1" fill="#ca8a04" />
            </g>

            {/* Cat Ears */}
            <polygon points="12,19 15,13 18,17" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <polygon points="36,19 33,13 30,17" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />

            {/* Cat Head */}
            <circle cx="24" cy="26" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Proud Eyes (Curved happy lines) */}
            <path d="M 18.5 25 Q 20.5 23 22.5 25" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M 25.5 25 Q 27.5 23 29.5 25" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Nose & Smile */}
            <circle cx="24" cy="27" r="1" fill="#f43f5e" />
            <path d="M 22.5 29 Q 24 30.5 25.5 29" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Gold Medal Ribbon */}
            <polygon points="21,35 24,39 27,35" fill="#dc2626" />
            <circle cx="24" cy="40" r="3.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <polygon points="24,38 24.8,39.5 26.5,39.8 25.2,41 25.5,42.5 24,41.8 22.5,42.5 22.8,41 21.5,39.8 23.2,39.5" fill="#ffffff" />
          </g>
        )}

        {resolvedType === 'professor' && (
          // 5. Professor Cat (Bowtie & Wire Glasses)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#faf5ff" />
                <circle cx="24" cy="24" r="21" stroke="#e9d5ff" strokeWidth="1.2" />
              </>
            )}

            {/* Cat Ears */}
            <polygon points="14,17 18,7 23,15" fill="#e2e8f0" stroke="#475569" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="15,15 18,9 21,14" fill="#fda4af" />
            <polygon points="34,17 30,7 25,15" fill="#e2e8f0" stroke="#475569" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="33,15 30,9 27,14" fill="#fda4af" />

            {/* Cat Head (Gray Tabby) */}
            <circle cx="24" cy="23" r="10.5" fill="#f8fafc" stroke="#475569" strokeWidth="1.4" />

            {/* Tabby Markings on Forehead */}
            <path d="M 24 14 L 24 17" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 21 15 L 22 17" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
            <path d="M 27 15 L 26 17" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />

            {/* Wire Round Glasses */}
            <circle cx="20" cy="22" r="3.5" stroke="#b45309" strokeWidth="1" fill="#ffffff" fillOpacity="0.7" />
            <circle cx="28" cy="22" r="3.5" stroke="#b45309" strokeWidth="1" fill="#ffffff" fillOpacity="0.7" />
            <line x1="23.5" y1="22" x2="24.5" y2="22" stroke="#b45309" strokeWidth="1" />

            {/* Wise Eyes */}
            <circle cx="20" cy="22" r="1.3" fill="#0f172a" />
            <circle cx="28" cy="22" r="1.3" fill="#0f172a" />

            {/* Nose & Mustache Whiskers */}
            <polygon points="23.5,25 24.5,25 24,25.8" fill="#f43f5e" />
            <path d="M 22.5 27 Q 24 28 25.5 27" stroke="#475569" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Red Bowtie */}
            <polygon points="20,33 24,35 20,37" fill="#ef4444" />
            <polygon points="28,33 24,35 28,37" fill="#ef4444" />
            <circle cx="24" cy="35" r="1.5" fill="#b91c1c" />
          </g>
        )}

        {resolvedType === 'thinking' && (
          // 6. Thinking Cat (Paw on Chin + Benzene Ring Idea)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fff7ed" />
                <circle cx="24" cy="24" r="21" stroke="#ffedd5" strokeWidth="1.2" />
              </>
            )}

            {/* Benzene Ring Sparkle in Top Corner */}
            <g transform="translate(28, 5) scale(0.6)">
              <polygon points="10,2 18,7 18,17 10,22 2,17 2,7" stroke="#ea580c" strokeWidth="1.8" fill="#ffedd5" />
              <circle cx="10" cy="12" r="4" stroke="#ea580c" strokeWidth="1.5" fill="none" />
            </g>

            {/* Cat Ears */}
            <polygon points="11,18 15,8 20,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="12,16 15,10 18,15" fill="#fda4af" />
            <polygon points="29,18 25,8 21,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="28,16 25,10 23,15" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="20" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Curious Eyes Looking Up */}
            <ellipse cx="18" cy="20.5" rx="1.8" ry="2" fill="#0f172a" />
            <ellipse cx="24" cy="20.5" rx="1.8" ry="2" fill="#0f172a" />
            <circle cx="17.5" cy="19.5" r="0.7" fill="#ffffff" />
            <circle cx="23.5" cy="19.5" r="0.7" fill="#ffffff" />

            {/* Nose & Thinking Mouth */}
            <circle cx="21" cy="24" r="0.8" fill="#f43f5e" />
            <circle cx="22" cy="25.5" r="1.2" fill="#334155" />

            {/* Cute Paw on Chin */}
            <ellipse cx="25" cy="28" rx="3" ry="2.2" fill="#f8fafc" stroke="#334155" strokeWidth="1.2" transform="rotate(-15 25 28)" />
            <circle cx="23.5" cy="27" r="0.6" fill="#f43f5e" />
            <circle cx="25.5" cy="27" r="0.6" fill="#f43f5e" />
          </g>
        )}

        {resolvedType === 'flame' && (
          // 7. Flame / Reaction Cat (Excited Cat with Colorful Bunsen Flame)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fff1f2" />
                <circle cx="24" cy="24" r="21" stroke="#fecdd3" strokeWidth="1.2" />
              </>
            )}

            {/* Bunsen Burner Flame on side */}
            <g transform="translate(29, 14)">
              <path d="M 6 18 C 1 12, 1 7, 6 1 C 11 7, 11 12, 6 18 Z" fill="#38bdf8" />
              <path d="M 6 18 C 3 13, 3 9, 6 5 C 9 9, 9 13, 6 18 Z" fill="#fbbf24" />
              <circle cx="6" cy="16" r="2" fill="#ef4444" />
            </g>

            {/* Cat Ears */}
            <polygon points="10,19 14,9 19,16" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,17 14,11 17,16" fill="#fdba74" />
            <polygon points="27,19 23,9 19,16" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="26,17 23,11 21,16" fill="#fdba74" />

            {/* Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" />

            {/* Excited Star Eyes */}
            <path d="M 15 19 L 16 21 L 18 21 L 16.5 22.5 L 17 24.5 L 15 23 L 13 24.5 L 13.5 22.5 L 12 21 L 14 21 Z" fill="#dc2626" />
            <path d="M 22 19 L 23 21 L 25 21 L 23.5 22.5 L 24 24.5 L 22 23 L 20 24.5 L 20.5 22.5 L 19 21 L 21 21 Z" fill="#dc2626" />

            {/* Open Happy Mouth */}
            <polygon points="18.5,25.5 19.5,25.5 19,26.2" fill="#b91c1c" />
            <path d="M 17 27 Q 19 30 21 27 Z" fill="#f43f5e" stroke="#c2410c" strokeWidth="0.8" />
          </g>
        )}

        {resolvedType === 'sparkle' && (
          // 8. Sparkle Chemist Cat (Happy cat with glowing crystal molecules)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f0fdf4" />
                <circle cx="24" cy="24" r="21" stroke="#bbf7d0" strokeWidth="1.2" />
              </>
            )}

            {/* Sparkle Stars around */}
            <polygon points="8,10 9.5,13 12.5,13.5 10,15.5 11,18.5 8,17 5,18.5 6,15.5 3.5,13.5 6.5,13" fill="#fbbf24" />
            <polygon points="38,10 39,12 41,12.5 39.5,14 40,16 38,15 36,16 36.5,14 35,12.5 37,12" fill="#38bdf8" />

            {/* Cat Ears */}
            <polygon points="14,17 18,7 23,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="15,15 18,9 21,14" fill="#f472b6" />
            <polygon points="34,17 30,7 25,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="33,15 30,9 27,14" fill="#f472b6" />

            {/* Cat Head */}
            <circle cx="24" cy="23" r="10.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Anime Sparkle Eyes */}
            <ellipse cx="20" cy="21.5" rx="2" ry="2.5" fill="#0284c7" />
            <circle cx="19.5" cy="20.5" r="0.9" fill="#ffffff" />
            <circle cx="21" cy="22.5" r="0.5" fill="#ffffff" />

            <ellipse cx="28" cy="21.5" rx="2" ry="2.5" fill="#0284c7" />
            <circle cx="27.5" cy="20.5" r="0.9" fill="#ffffff" />
            <circle cx="29" cy="22.5" r="0.5" fill="#ffffff" />

            {/* Happy Little Cat Nose & W-Mouth */}
            <polygon points="23.5,25 24.5,25 24,25.8" fill="#f43f5e" />
            <path d="M 21.5 27 Q 23 28 24 27 Q 25 28 26.5 27" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" fill="none" />

            {/* Blushing Cheeks */}
            <circle cx="17" cy="25" r="2" fill="#fbcfe8" opacity="0.9" />
            <circle cx="31" cy="25" r="2" fill="#fbcfe8" opacity="0.9" />
          </g>
        )}

        {resolvedType === 'dna_helix' && (
          // 9. DNA Double Helix Cat (Biochemistry & Genetics)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f0fdfa" />
                <circle cx="24" cy="24" r="21" stroke="#99f6e4" strokeWidth="1.2" />
              </>
            )}

            {/* DNA Double Helix Structure */}
            <path d="M 33 8 Q 41 16 33 24 Q 25 32 33 40" stroke="#0d9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M 39 8 Q 31 16 39 24 Q 47 32 39 40" stroke="#0284c7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="34" y1="12" x2="38" y2="12" stroke="#f43f5e" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="33" y1="20" x2="39" y2="20" stroke="#eab308" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="33" y1="28" x2="39" y2="28" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="34" y1="36" x2="38" y2="36" stroke="#8b5cf6" strokeWidth="1.4" strokeLinecap="round" />

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,16 14,10 17,15" fill="#5eead4" />
            <polygon points="26,18 22,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="25,16 22,10 20,15" fill="#5eead4" />

            {/* Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Eyes */}
            <circle cx="15" cy="21.5" r="1.5" fill="#0f172a" />
            <circle cx="21" cy="21.5" r="1.5" fill="#0f172a" />
            <circle cx="15.5" cy="21" r="0.5" fill="#ffffff" />
            <circle cx="21.5" cy="21" r="0.5" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="17.5,24 18.5,24 18,24.8" fill="#f43f5e" />
            <path d="M 16.5 26 Q 18 27.2 19.5 26" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Cat Paw Touching Helix */}
            <ellipse cx="28" cy="24" rx="2.5" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>
        )}

        {resolvedType === 'pipette' && (
          // 10. Micropipette Cat (Analytical Titration)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f0f9ff" />
                <circle cx="24" cy="24" r="21" stroke="#bae6fd" strokeWidth="1.2" />
              </>
            )}

            {/* Micropipette Tool */}
            <line x1="38" y1="6" x2="28" y2="24" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="4" r="2.2" fill="#0284c7" />
            <polygon points="28,24 24,31 30,27" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
            {/* Droplet */}
            <circle cx="23" cy="35" r="1.8" fill="#0284c7" />
            <path d="M 23 33 L 24 35 L 22 35 Z" fill="#0284c7" />

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,16 14,10 17,15" fill="#ea580c" />
            <polygon points="26,18 22,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="25,16 22,10 20,15" fill="#fda4af" />

            {/* Calico Cat Head with Ginger Patch */}
            <circle cx="18" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
            <path d="M 10 19 Q 14 17 16 21 Q 12 25 9 22 Z" fill="#fed7aa" />

            {/* Focused Eyes Looking at Droplet */}
            <ellipse cx="16" cy="22" rx="1.5" ry="1.8" fill="#0f172a" />
            <ellipse cx="22" cy="22" rx="1.5" ry="1.8" fill="#0f172a" />
            <circle cx="17" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="23" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="18.5,24.5 19.5,24.5 19,25.2" fill="#f43f5e" />
            <path d="M 18 26.5 Q 19 27.5 20 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'crystal' && (
          // 11. Crystallography Cat (Mineral & Solid State Chemistry)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#faf5ff" />
                <circle cx="24" cy="24" r="21" stroke="#e9d5ff" strokeWidth="1.2" />
              </>
            )}

            {/* Faceted Amethyst Crystals */}
            <polygon points="34,20 39,13 43,20 41,32 36,32" fill="#c084fc" stroke="#7e22ce" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="39,13 39,32 34,20" fill="#a855f7" />
            <polygon points="27,24 31,18 35,24 33,33 29,33" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" strokeLinejoin="round" />
            {/* Crystal Sparkles */}
            <polygon points="27,10 28,12 30,12.5 28.5,14 29,16 27,15 25,16 25.5,14 24,12.5 26,12" fill="#ec4899" />

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#475569" stroke="#1e293b" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="26,18 22,8 18,15" fill="#475569" stroke="#1e293b" strokeWidth="1.4" strokeLinejoin="round" />

            {/* Siamese Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#f8fafc" stroke="#475569" strokeWidth="1.4" />
            <ellipse cx="18" cy="24" rx="5.5" ry="4" fill="#94a3b8" opacity="0.35" />

            {/* Jewel Blue Eyes */}
            <ellipse cx="15.5" cy="22" rx="1.8" ry="2.2" fill="#0284c7" />
            <ellipse cx="21" cy="22" rx="1.8" ry="2.2" fill="#0284c7" />
            <circle cx="15.5" cy="21" r="0.6" fill="#ffffff" />
            <circle cx="21" cy="21" r="0.6" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="18,25 19,25 18.5,25.8" fill="#1e293b" />
            <path d="M 17.5 27 Q 18.5 28 19.5 27" stroke="#1e293b" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'magnetic' && (
          // 12. Magnetochemistry Cat (Paramagnetism & Electron Spin)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#eff6ff" />
                <circle cx="24" cy="24" r="21" stroke="#bfdbfe" strokeWidth="1.2" />
              </>
            )}

            {/* Horseshoe Magnet */}
            <path d="M 29 16 A 7 7 0 0 1 41 16 L 41 26 L 37 26 L 37 16 A 3 3 0 0 0 33 16 L 33 26 L 29 26 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" strokeLinejoin="round" />
            <rect x="29" y="23" width="4" height="4" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
            <rect x="37" y="23" width="4" height="4" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
            {/* Magnetic Field Arcs & Iron Filings */}
            <path d="M 31 29 Q 35 33 39 29" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 1.5" fill="none" />
            <circle cx="33" cy="31" r="0.9" fill="#475569" />
            <circle cx="37" cy="31" r="0.9" fill="#475569" />

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,16 14,10 17,15" fill="#fda4af" />
            <polygon points="26,18 22,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="25,16 22,10 20,15" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Surprised Eyes */}
            <circle cx="15" cy="22" r="2.2" fill="#0f172a" />
            <circle cx="21" cy="22" r="2.2" fill="#0f172a" />
            <circle cx="15.5" cy="21.5" r="0.8" fill="#ffffff" />
            <circle cx="21.5" cy="21.5" r="0.8" fill="#ffffff" />

            {/* Nose & Cute O-Mouth */}
            <circle cx="18" cy="25" r="0.8" fill="#f43f5e" />
            <ellipse cx="18" cy="27" rx="1.2" ry="1.5" fill="#334155" />
          </g>
        )}

        {resolvedType === 'radioactive' && (
          // 13. Radiochemistry Cat (Nuclear Chemistry & Isotopes)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fefce8" />
                <circle cx="24" cy="24" r="21" stroke="#fef08a" strokeWidth="1.2" />
              </>
            )}

            {/* Trefoil Radiation Symbol */}
            <g transform="translate(34, 15)">
              <circle cx="0" cy="0" r="7.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.6" fill="#0f172a" />
              <path d="M -0.8 -2 L -3 -6 A 6.5 6.5 0 0 1 3 -6 L 0.8 -2 Z" fill="#0f172a" />
              <path d="M 1.7 0.8 L 6 2 A 6.5 6.5 0 0 1 3.5 6 L 0.8 1.7 Z" fill="#0f172a" />
              <path d="M -1.7 0.8 L -6 2 A 6.5 6.5 0 0 0 -3.5 6 L -0.8 1.7 Z" fill="#0f172a" />
            </g>

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,16 14,10 17,15" fill="#86efac" />
            <polygon points="26,18 22,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="25,16 22,10 20,15" fill="#86efac" />

            {/* Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Cool Eyes */}
            <circle cx="15" cy="22" r="1.5" fill="#15803d" />
            <circle cx="21" cy="22" r="1.5" fill="#15803d" />
            <circle cx="15.5" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="21.5" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Smile */}
            <polygon points="17.5,24.5 18.5,24.5 18,25.2" fill="#f43f5e" />
            <path d="M 17 26.5 Q 18 27.5 19 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Glowing Radiation Ring Collar */}
            <ellipse cx="18" cy="32" rx="6" ry="1.8" fill="#4ade80" stroke="#16a34a" strokeWidth="1" opacity="0.8" />
          </g>
        )}

        {resolvedType === 'periodic' && (
          // 14. Periodic Table Element Cat (Inorganic Chemistry)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#ecfdf5" />
                <circle cx="24" cy="24" r="21" stroke="#a7f3d0" strokeWidth="1.2" />
              </>
            )}

            {/* Element Square Tile [79 Au Gold] */}
            <g transform="translate(26, 14)">
              <rect x="0" y="0" width="17" height="19" rx="2.5" fill="#ffffff" stroke="#d97706" strokeWidth="1.4" />
              <text x="2.5" y="5.5" fontSize="4.5" fontFamily="monospace" fontWeight="bold" fill="#b45309">79</text>
              <text x="4" y="13.5" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#d97706">Au</text>
              <text x="2" y="17.5" fontSize="3" fontFamily="monospace" fill="#92400e">196.97</text>
            </g>

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#fed7aa" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#fed7aa" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Scholar Eyeglasses */}
            <circle cx="14" cy="22" r="3.2" stroke="#b45309" strokeWidth="1" fill="#ffffff" fillOpacity="0.6" />
            <circle cx="21" cy="22" r="3.2" stroke="#b45309" strokeWidth="1" fill="#ffffff" fillOpacity="0.6" />
            <line x1="17.2" y1="22" x2="17.8" y2="22" stroke="#b45309" strokeWidth="1" />

            <circle cx="14" cy="22" r="1.2" fill="#0f172a" />
            <circle cx="21" cy="22" r="1.2" fill="#0f172a" />

            {/* Nose & Smile */}
            <polygon points="17,25 18,25 17.5,25.8" fill="#f43f5e" />
            <path d="M 16.5 27 Q 17.5 28 18.5 27" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'thermo' && (
          // 15. Thermodynamics & Calorimetry Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fff1f2" />
                <circle cx="24" cy="24" r="21" stroke="#fecdd3" strokeWidth="1.2" />
              </>
            )}

            {/* Laboratory Thermometer */}
            <rect x="35" y="8" width="5" height="23" rx="2.5" fill="#ffffff" stroke="#475569" strokeWidth="1.2" />
            <circle cx="37.5" cy="33" r="4.5" fill="#f43f5e" stroke="#475569" strokeWidth="1.2" />
            <rect x="36.5" y="16" width="2" height="15" fill="#f43f5e" />
            <line x1="35" y1="12" x2="37" y2="12" stroke="#475569" strokeWidth="0.8" />
            <line x1="35" y1="16" x2="37" y2="16" stroke="#475569" strokeWidth="0.8" />
            <line x1="35" y1="20" x2="37" y2="20" stroke="#475569" strokeWidth="0.8" />
            {/* Heat Waves */}
            <path d="M 43 14 Q 45 17 43 20" stroke="#f97316" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M 44 24 Q 46 27 44 30" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,16 14,10 17,15" fill="#fda4af" />
            <polygon points="26,18 22,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="25,16 22,10 20,15" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Curious Eyes */}
            <circle cx="15" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="21" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="15.5" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="21.5" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Mouth */}
            <polygon points="17.5,24.5 18.5,24.5 18,25.2" fill="#f43f5e" />
            <path d="M 17 26.5 Q 18 27.5 19 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Cat Paw touching thermometer */}
            <ellipse cx="32" cy="26" rx="2.5" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          </g>
        )}

        {resolvedType === 'galvanic' && (
          // 16. Electrochemistry & Galvanic Cell Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fef9c3" />
                <circle cx="24" cy="24" r="21" stroke="#fde047" strokeWidth="1.2" />
              </>
            )}

            {/* Electrochemical Beaker with Electrodes */}
            <rect x="26" y="21" width="18" height="19" rx="2.5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
            <rect x="27" y="27" width="16" height="12" fill="#bfdbfe" opacity="0.6" />
            {/* Zn Electrode */}
            <rect x="29" y="16" width="3" height="14" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
            {/* Cu Electrode */}
            <rect x="38" y="16" width="3" height="14" fill="#fb923c" stroke="#c2410c" strokeWidth="0.8" />
            {/* Connecting Wire & Lightning Spark */}
            <path d="M 30.5 16 Q 35 10 39.5 16" stroke="#eab308" strokeWidth="1.2" fill="none" />
            <polygon points="36,8 33,13 36,13 34,17 38,12 35,12" fill="#eab308" stroke="#ca8a04" strokeWidth="0.5" />

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#fde047" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#fde047" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Sparkle Eyes */}
            <path d="M 14 20 L 15 22 L 17 22 L 15.5 23.5 L 16 25.5 L 14 24 L 12 25.5 L 12.5 23.5 L 11 22 L 13 22 Z" fill="#eab308" />
            <path d="M 20 20 L 21 22 L 23 22 L 21.5 23.5 L 22 25.5 L 20 24 L 18 25.5 L 18.5 23.5 L 17 22 L 19 22 Z" fill="#eab308" />

            {/* Nose & Smile */}
            <polygon points="17,25 18,25 17.5,25.8" fill="#f43f5e" />
            <path d="M 16.5 27 Q 17.5 28 18.5 27" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'spectro' && (
          // 17. Spectroscopy & Prism Diffraction Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f8fafc" />
                <circle cx="24" cy="24" r="21" stroke="#e2e8f0" strokeWidth="1.2" />
              </>
            )}

            {/* Triangular Glass Prism */}
            <polygon points="26,14 38,34 14,34" fill="#ffffff" stroke="#64748b" strokeWidth="1.4" fillOpacity="0.75" strokeLinejoin="round" />
            {/* Incident White Ray */}
            <line x1="4" y1="27" x2="20" y2="24" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
            {/* Refracted Spectrum Rainbow */}
            <line x1="32" y1="24" x2="44" y2="17" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="33" y1="25" x2="45" y2="20" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="34" y1="26" x2="46" y2="23" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="35" y1="27" x2="46" y2="26" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="36" y1="28" x2="45" y2="29" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" />

            {/* Cat Ears */}
            <polygon points="18,13 22,5 26,11" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <polygon points="34,13 30,5 26,11" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />

            {/* Cat Head peeking behind prism */}
            <circle cx="26" cy="18" r="7.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />

            {/* Happy Eyes */}
            <path d="M 22 17 Q 23.5 15.5 25 17" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 27 17 Q 28.5 15.5 30 17" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Nose & Smile */}
            <circle cx="26" cy="19.5" r="0.7" fill="#f43f5e" />
            <path d="M 25 21 Q 26 22 27 21" stroke="#334155" strokeWidth="0.9" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'bubble_wand' && (
          // 18. Colloid & Surface Tension Bubble Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f0fdf4" />
                <circle cx="24" cy="24" r="21" stroke="#bbf7d0" strokeWidth="1.2" />
              </>
            )}

            {/* Bubble Wand */}
            <circle cx="33" cy="17" r="4.2" stroke="#06b6d4" strokeWidth="1.4" fill="none" />
            <line x1="30" y1="20" x2="25" y2="30" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />

            {/* Iridescent Colloidal Bubbles */}
            <circle cx="38" cy="11" r="5" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" opacity="0.85" />
            <path d="M 35 8 A 3 3 0 0 1 39 9" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" />
            <circle cx="43" cy="22" r="3.5" fill="#fdf2f8" stroke="#f472b6" strokeWidth="0.9" opacity="0.85" />
            <circle cx="33" cy="6" r="2.2" fill="#fef3c7" stroke="#facc15" strokeWidth="0.8" opacity="0.85" />

            {/* Cat Ears */}
            <polygon points="10,18 14,8 19,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="11,16 14,10 17,15" fill="#fed7aa" />
            <polygon points="26,18 22,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="25,16 22,10 20,15" fill="#fed7aa" />

            {/* Cat Head */}
            <circle cx="18" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Cute Puffy Cheeks & Whistling Mouth blowing */}
            <circle cx="15" cy="21.5" r="1.5" fill="#0f172a" />
            <circle cx="21" cy="21.5" r="1.5" fill="#0f172a" />
            <circle cx="15.5" cy="21" r="0.5" fill="#ffffff" />
            <circle cx="21.5" cy="21" r="0.5" fill="#ffffff" />

            <circle cx="18" cy="26" r="1.5" fill="#334155" />
            <circle cx="13" cy="24" r="1.8" fill="#fda4af" opacity="0.8" />
            <circle cx="23" cy="24" r="1.8" fill="#fda4af" opacity="0.8" />
          </g>
        )}

        {resolvedType === 'microscope' && (
          // 19. Optical Microscope Cat (Materials Characterization)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f1f5f9" />
                <circle cx="24" cy="24" r="21" stroke="#cbd5e1" strokeWidth="1.2" />
              </>
            )}

            {/* Compound Microscope */}
            <path d="M 28 38 L 44 38" stroke="#334155" strokeWidth="2.8" strokeLinecap="round" />
            <rect x="30" y="27" width="12" height="2" fill="#64748b" />
            <rect x="32" y="26" width="8" height="1" fill="#38bdf8" />
            <line x1="41" y1="11" x2="35" y2="23" stroke="#334155" strokeWidth="3.2" strokeLinecap="round" />
            <circle cx="35" cy="24" r="2.2" fill="#eab308" />
            <ellipse cx="42" cy="10" rx="2" ry="1.5" fill="#94a3b8" />

            {/* Cat Ears */}
            <polygon points="8,18 12,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="9,16 12,10 15,15" fill="#fda4af" />
            <polygon points="24,18 20,8 16,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="23,16 20,10 18,15" fill="#fda4af" />

            {/* Cat Head Peeking into Eyepiece */}
            <circle cx="16" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* One Eye Open, One Eye Closed Peeking */}
            <path d="M 12 22 Q 13.5 20.5 15 22" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <circle cx="20" cy="22" r="2" fill="#0f172a" />
            <circle cx="20.5" cy="21.5" r="0.7" fill="#ffffff" />

            {/* Nose & Smile */}
            <polygon points="16,25 17,25 16.5,25.8" fill="#f43f5e" />
            <path d="M 15.5 27 Q 16.5 28 17.5 27" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'mortar_pestle' && (
          // 20. Mortar & Pestle Cat (Organic Synthesis & Reagent Prep)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fafaf9" />
                <circle cx="24" cy="24" r="21" stroke="#e7e5e4" strokeWidth="1.2" />
              </>
            )}

            {/* Ceramic Mortar Bowl */}
            <path d="M 24 28 C 24 38, 42 38, 42 28 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.4" />
            <ellipse cx="33" cy="28" rx="9" ry="2.5" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.2" />
            <ellipse cx="33" cy="29" rx="6" ry="1.4" fill="#ec4899" />
            {/* Pestle */}
            <line x1="33" y1="31" x2="39" y2="17" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
            {/* Medicinal Herb Sprig */}
            <path d="M 23 23 Q 27 20 26 26 Q 23 24 23 23 Z" fill="#22c55e" stroke="#15803d" strokeWidth="0.8" />

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#fbcfe8" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#fbcfe8" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Diligent Eyes */}
            <circle cx="14" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="20" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="14.5" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="20.5" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Smile */}
            <polygon points="16.5,24.5 17.5,24.5 17,25.2" fill="#f43f5e" />
            <path d="M 16 26.5 Q 17 27.5 18 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Paws Resting on Bowl */}
            <circle cx="26" cy="30" r="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
          </g>
        )}

        {resolvedType === 'ph_strip' && (
          // 21. Acid-Base Litmus & Universal Indicator Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fdf4ff" />
                <circle cx="24" cy="24" r="21" stroke="#f5d0fe" strokeWidth="1.2" />
              </>
            )}

            {/* Litmus Paper pH Strip with Rainbow Spectrum Zones */}
            <g transform="rotate(-15 32 26)">
              <rect x="30" y="12" width="6" height="24" rx="1.5" fill="#ffffff" stroke="#64748b" strokeWidth="0.9" />
              <rect x="30" y="12" width="6" height="6" rx="1.5" fill="#ef4444" />
              <rect x="30" y="18" width="6" height="6" fill="#f59e0b" />
              <rect x="30" y="24" width="6" height="6" fill="#10b981" />
              <rect x="30" y="30" width="6" height="6" rx="1.5" fill="#6366f1" />
            </g>

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#c084fc" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#c084fc" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Eyes */}
            <circle cx="14" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="20" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="14.5" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="20.5" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Smile */}
            <polygon points="16.5,24.5 17.5,24.5 17,25.2" fill="#f43f5e" />
            <path d="M 16 26.5 Q 17 27.5 18 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Paw holding indicator strip */}
            <ellipse cx="27" cy="26" rx="2.5" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1.1" />
          </g>
        )}

        {resolvedType === 'centrifuge' && (
          // 22. Ultra-Centrifuge Cat (Separation & Equilibrium)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#eff6ff" />
                <circle cx="24" cy="24" r="21" stroke="#dbeafe" strokeWidth="1.2" />
              </>
            )}

            {/* Spinning Rotor Orbit Ring */}
            <ellipse cx="24" cy="24" rx="20" ry="11" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="5 3" />
            {/* Spinning Microcentrifuge Tubes */}
            <rect x="37" y="19" width="3.2" height="9" rx="1.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" transform="rotate(30 38 23)" />
            <rect x="7" y="19" width="3.2" height="9" rx="1.5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.8" transform="rotate(30 8 23)" />

            {/* Cat Ears */}
            <polygon points="13,18 17,8 22,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="14,16 17,10 20,15" fill="#fda4af" />
            <polygon points="35,18 31,8 26,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="34,16 31,10 28,15" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="24" cy="23" r="10.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Dizzy Swirl Spiral Eyes */}
            <path d="M 19 22 A 2 2 0 1 1 20 24 A 1 1 0 1 1 19.5 23" stroke="#0f172a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M 27 22 A 2 2 0 1 1 28 24 A 1 1 0 1 1 27.5 23" stroke="#0f172a" strokeWidth="1.2" fill="none" strokeLinecap="round" />

            {/* Nose & Cute Wobbly Mouth */}
            <circle cx="24" cy="25" r="0.8" fill="#f43f5e" />
            <path d="M 22 27 Q 23 28.5 24 27 Q 25 28.5 26 27" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'gas_mask' && (
          // 23. Chemical Safety Respirator Cat (Hazardous Fume Hood)
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f8fafc" />
                <circle cx="24" cy="24" r="21" stroke="#94a3b8" strokeWidth="1.2" />
              </>
            )}

            {/* Cat Ears */}
            <polygon points="13,17 17,7 22,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="14,15 17,9 20,14" fill="#fda4af" />
            <polygon points="35,17 31,7 26,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="34,15 31,9 28,14" fill="#fda4af" />

            {/* Cat Head */}
            <circle cx="24" cy="23" r="10.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Focused Alert Eyes */}
            <ellipse cx="19" cy="19.5" rx="2" ry="2.2" fill="#0f172a" />
            <ellipse cx="29" cy="19.5" rx="2" ry="2.2" fill="#0f172a" />
            <circle cx="19.5" cy="18.8" r="0.7" fill="#ffffff" />
            <circle cx="29.5" cy="18.8" r="0.7" fill="#ffffff" />

            {/* Respirator Gas Mask Body */}
            <polygon points="18,23 30,23 28,34 20,34" fill="#334155" stroke="#0f172a" strokeWidth="1.3" strokeLinejoin="round" />
            {/* Twin Filter Canisters */}
            <circle cx="16" cy="28.5" r="3.8" fill="#64748b" stroke="#334155" strokeWidth="1.2" />
            <circle cx="16" cy="28.5" r="1.5" fill="#334155" />
            <circle cx="32" cy="28.5" r="3.8" fill="#64748b" stroke="#334155" strokeWidth="1.2" />
            <circle cx="32" cy="28.5" r="1.5" fill="#334155" />
            {/* Central Exhale Valve */}
            <circle cx="24" cy="29" r="2.2" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
            {/* Straps */}
            <line x1="18" y1="24" x2="13" y2="21" stroke="#475569" strokeWidth="1.3" />
            <line x1="30" y1="24" x2="35" y2="21" stroke="#475569" strokeWidth="1.3" />
          </g>
        )}

        {resolvedType === 'polymer' && (
          // 24. Polymer Slime & Macromolecules Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#ecfeff" />
                <circle cx="24" cy="24" r="21" stroke="#a5f3fc" strokeWidth="1.2" />
              </>
            )}

            {/* Polymer Stretchy Chain */}
            <line x1="28" y1="14" x2="35" y2="19" stroke="#334155" strokeWidth="1.8" />
            <line x1="35" y1="19" x2="37" y2="27" stroke="#334155" strokeWidth="1.8" />
            <line x1="37" y1="27" x2="31" y2="34" stroke="#334155" strokeWidth="1.8" />
            <circle cx="28" cy="14" r="3.2" fill="#06b6d4" stroke="#0891b2" strokeWidth="1" />
            <circle cx="35" cy="19" r="3.2" fill="#10b981" stroke="#059669" strokeWidth="1" />
            <circle cx="37" cy="27" r="3.2" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1" />
            <circle cx="31" cy="34" r="3.2" fill="#f43f5e" stroke="#e11d48" strokeWidth="1" />

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#67e8f9" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#67e8f9" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Playful Eyes */}
            <circle cx="14" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="20" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="14.5" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="20.5" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Grin */}
            <polygon points="16.5,24.5 17.5,24.5 17,25.2" fill="#f43f5e" />
            <path d="M 15.5 26.5 Q 17 28.5 18.5 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Paws stretching polymer */}
            <ellipse cx="25" cy="24" rx="2.5" ry="2" fill="#ffffff" stroke="#334155" strokeWidth="1.1" />
          </g>
        )}

        {resolvedType === 'ice_lattice' && (
          // 25. Cryo-Chemistry & Ice Crystal Lattice Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#f0f9ff" />
                <circle cx="24" cy="24" r="21" stroke="#7dd3fc" strokeWidth="1.2" />
              </>
            )}

            {/* Hexagonal Snowflake Ice Molecular Lattice */}
            <g transform="translate(35, 18) scale(0.65)">
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="-10.4" y1="-6" x2="10.4" y2="6" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="-10.4" y1="6" x2="10.4" y2="-6" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M -4 -8 L 0 -5 L 4 -8" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
              <path d="M -4 8 L 0 5 L 4 8" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
              <path d="M -8 -4 L -5 0 L -8 4" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
              <path d="M 8 -4 L 5 0 L 8 4" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
            </g>

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#bae6fd" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#bae6fd" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Earmuffs Band & Puffs */}
            <path d="M 7 21 A 10 10 0 0 1 27 21" stroke="#0284c7" strokeWidth="2.2" fill="none" />
            <circle cx="7" cy="22" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
            <circle cx="27" cy="22" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />

            {/* Happy Eyes */}
            <circle cx="14" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="20" cy="22" r="1.5" fill="#0f172a" />
            <circle cx="14.5" cy="21.5" r="0.5" fill="#ffffff" />
            <circle cx="20.5" cy="21.5" r="0.5" fill="#ffffff" />

            {/* Nose & Smile */}
            <polygon points="16.5,24.5 17.5,24.5 17,25.2" fill="#f43f5e" />
            <path d="M 16 26.5 Q 17 27.5 18 26.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'catalyst' && (
          // 26. Enzyme Kinetics & Catalysis Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fff7ed" />
                <circle cx="24" cy="24" r="21" stroke="#ffedd5" strokeWidth="1.2" />
              </>
            )}

            {/* Enzyme Active Site Lock-and-Key Model */}
            <path d="M 27 26 C 27 20, 31 20, 33 24 C 36 20, 40 20, 40 26 C 40 37, 27 37, 27 26 Z" fill="#fb923c" stroke="#c2410c" strokeWidth="1.2" />
            <path d="M 31 21 C 33 18, 35 18, 35 21 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
            {/* Speed Swooshes (Activation Energy Dropped) */}
            <path d="M 6 15 L 12 15" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 4 19 L 10 19" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" />

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#f97316" />
            <polygon points="25,18 21,8 17,15" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#f97316" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.4" />

            {/* Fast Action Eyes */}
            <ellipse cx="14" cy="21.5" rx="1.8" ry="1.4" fill="#0f172a" />
            <ellipse cx="20" cy="21.5" rx="1.8" ry="1.4" fill="#0f172a" />
            <circle cx="14.5" cy="21" r="0.5" fill="#ffffff" />
            <circle cx="20.5" cy="21" r="0.5" fill="#ffffff" />

            {/* Nose & Determined Smile */}
            <polygon points="16.5,24.5 17.5,24.5 17,25.2" fill="#b91c1c" />
            <path d="M 16 26.5 Q 17 27.5 18 26.5" stroke="#c2410c" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'coffee_caffeine' && (
          // 27. Caffeine Molecule & Late Night Chemist Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#fef3c7" />
                <circle cx="24" cy="24" r="21" stroke="#fde68a" strokeWidth="1.2" />
              </>
            )}

            {/* Warm Coffee Mug with Caffeine Ring */}
            <rect x="27" y="23" width="13" height="13" rx="2.5" fill="#78350f" stroke="#451a03" strokeWidth="1.2" />
            <path d="M 40 25 C 44 25, 44 33, 40 33" stroke="#451a03" strokeWidth="1.5" fill="none" />
            {/* Mini Hexagon Ring on mug */}
            <polygon points="33.5,27 36,28.5 36,31 33.5,32.5 31,31 31,28.5" stroke="#fef3c7" strokeWidth="0.8" fill="none" />
            {/* Steam Swirls */}
            <path d="M 31 19 Q 30 16 32 13" stroke="#d97706" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M 36 20 Q 38 17 36 14" stroke="#d97706" strokeWidth="1" strokeLinecap="round" fill="none" />

            {/* Cat Ears */}
            <polygon points="9,18 13,8 18,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="10,16 13,10 16,15" fill="#fde68a" />
            <polygon points="25,18 21,8 17,15" fill="#ffffff" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="24,16 21,10 19,15" fill="#fde68a" />

            {/* Cat Head */}
            <circle cx="17" cy="23" r="10" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />

            {/* Cozy Half-Closed Sleepy Eyes */}
            <path d="M 12.5 22 Q 14.5 24 16.5 22" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M 17.5 22 Q 19.5 24 21.5 22" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Nose & Content Smile */}
            <circle cx="17" cy="24.5" r="0.8" fill="#f43f5e" />
            <path d="M 15.5 26 Q 17 27.2 18.5 26" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}

        {resolvedType === 'space_astro' && (
          // 28. Astrochemistry & Cosmic Starfield Cat
          <g>
            {!watermark && (
              <>
                <circle cx="24" cy="24" r="22" fill="#0f172a" />
                <circle cx="24" cy="24" r="21" stroke="#334155" strokeWidth="1.2" />
              </>
            )}

            {/* Cosmic Background: Stars & Ringed Planet */}
            <circle cx="8" cy="10" r="0.9" fill="#ffffff" />
            <circle cx="39" cy="8" r="0.9" fill="#ffffff" />
            <circle cx="9" cy="38" r="0.8" fill="#ffffff" />
            <circle cx="38" cy="36" r="3" fill="#f59e0b" />
            <ellipse cx="38" cy="36" rx="5.5" ry="1.5" stroke="#fbbf24" strokeWidth="0.8" fill="none" transform="rotate(-25 38 36)" />

            {/* Astronaut Helmet Glass Sphere */}
            <circle cx="24" cy="24" r="17.5" stroke="#38bdf8" strokeWidth="1.4" fill="#ffffff" fillOpacity="0.1" />
            <path d="M 13 16 A 14 14 0 0 1 24 10" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7" />

            {/* Cat Ears */}
            <polygon points="14,18 18,9 22,16" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
            <polygon points="34,18 30,9 26,16" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />

            {/* Cat Head inside helmet */}
            <circle cx="24" cy="24" r="9.5" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />

            {/* Wonder Stargazing Eyes */}
            <circle cx="20.5" cy="23" r="1.6" fill="#0284c7" />
            <circle cx="27.5" cy="23" r="1.6" fill="#0284c7" />
            <circle cx="21" cy="22.5" r="0.6" fill="#ffffff" />
            <circle cx="28" cy="22.5" r="0.6" fill="#ffffff" />

            {/* Nose & Smile */}
            <polygon points="23.5,25.5 24.5,25.5 24,26.2" fill="#f43f5e" />
            <path d="M 22.5 27.5 Q 24 28.5 25.5 27.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        )}
      </svg>
    </div>
  );
};
