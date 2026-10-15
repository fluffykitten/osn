import React from 'react';

export type LogoConcept = 'stem-emblem' | 'prism' | 'quantum' | 'compass' | 'helix';
export type LogoVariant = 'full' | 'horizontal' | 'icon';
export type LogoMode = 'light' | 'dark';

interface AxiomaLogoProps {
  concept?: LogoConcept;
  variant?: LogoVariant;
  mode?: LogoMode;
  className?: string;
}

/**
 * AxiomaLogo
 * 
 * Komponen resmi logo Axioma Academy:
 * - 'stem-emblem' (Default) : Rekreasi presisi emblem STEM (DNA double helix, quantum orbit, heksagonal) palet cerah
 * - 'prism'                 : The Apex Prism Monogram (Faset 4 Pilar STEM)
 * - 'quantum'               : The Quantum Orbit & Alpha (Orbit atomik, alpha & bintang kejora)
 * - 'compass'               : The Golden Ratio Compass (Jangka ukur presisi klasik)
 * - 'helix'                 : The Infinity Helix Loop (Pita Möbius kontinu lambang ketidakterbatasan)
 */
export const AxiomaLogo: React.FC<AxiomaLogoProps> = React.memo(
  ({ concept = 'stem-emblem', variant = 'horizontal', mode = 'light', className = '' }) => {
    const isDark = mode === 'dark';
    const textColor = isDark ? '#FFFFFF' : '#0F172A';
    const subtextColor = isDark ? '#2DD4BF' : '#0D9488';

    // =========================================================================
    // 0. CONCEPT: STEM-EMBLEM (RECREATED EMBLEM IN LIGHT PALETTE)
    // =========================================================================
    if (concept === 'stem-emblem') {
      const defs = (
        <defs>
          <linearGradient id="axioma-dna-green" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="axioma-dna-pink" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="axioma-orbit-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="axioma-orbit-purple" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E11D48" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="axioma-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="axioma-core-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      );

      const emblemGeometry = (
        <g>
          {/* Celestial Circle & Crosshairs */}
          <circle cx="250" cy="220" r="162" stroke={isDark ? '#334155' : '#94A3B8'} strokeWidth="1.3" strokeDasharray="4 4" strokeOpacity="0.45" />
          <line x1="55" y1="220" x2="445" y2="220" stroke={isDark ? '#334155' : '#94A3B8'} strokeWidth="1.2" strokeDasharray="5 5" strokeOpacity="0.4" />
          <line x1="250" y1="25" x2="250" y2="415" stroke={isDark ? '#334155' : '#94A3B8'} strokeWidth="1.2" strokeDasharray="5 5" strokeOpacity="0.4" />

          {/* Hexagons */}
          <polygon points="250,68 382,144 382,296 250,372 118,296 118,144" stroke={isDark ? '#38BDF8' : '#0284C7'} strokeWidth="1.8" strokeOpacity="0.75" fill="none" />
          <polygon points="250,86 366,153 366,287 250,354 134,287 134,153" stroke={isDark ? '#475569' : '#64748B'} strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.5" fill="none" />

          {/* Hexagon Vertex Nodes */}
          <circle cx="250" cy="68" r="7" fill="#06B6D4" fillOpacity="0.25" />
          <circle cx="250" cy="68" r="4" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="382" cy="144" r="7" fill="#6366F1" fillOpacity="0.25" />
          <circle cx="382" cy="144" r="4" fill="#6366F1" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="382" cy="296" r="7" fill="#8B5CF6" fillOpacity="0.25" />
          <circle cx="382" cy="296" r="4" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="250" cy="372" r="7" fill="#10B981" fillOpacity="0.25" />
          <circle cx="250" cy="372" r="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="118" cy="296" r="7" fill="#0D9488" fillOpacity="0.25" />
          <circle cx="118" cy="296" r="4" fill="#0D9488" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="118" cy="144" r="7" fill="#0284C7" fillOpacity="0.25" />
          <circle cx="118" cy="144" r="4" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Scientific Glyphs (+, Δ, bond, ✦) */}
          <g stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round">
            <line x1="160" y1="124" x2="172" y2="124" />
            <line x1="166" y1="118" x2="166" y2="130" />
          </g>
          <polygon points="346,118 338,132 354,132" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" />
          <g transform="translate(160, 318)">
            <line x1="0" y1="8" x2="14" y2="0" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="8" r="3" fill="#F43F5E" />
            <circle cx="14" cy="0" r="2.2" fill="#F43F5E" />
          </g>
          <g transform="translate(344, 318)">
            <polygon points="6,0 7.8,4.2 12,6 7.8,7.8 6,12 4.2,7.8 0,6 4.2,4.2" fill="#059669" />
          </g>

          {/* Quantum Orbits */}
          <ellipse cx="250" cy="220" rx="132" ry="55" transform="rotate(-36 250 220)" stroke="url(#axioma-orbit-purple)" strokeWidth="3" fill="none" />
          <ellipse cx="250" cy="220" rx="132" ry="55" transform="rotate(36 250 220)" stroke="url(#axioma-orbit-blue)" strokeWidth="3" fill="none" />

          {/* Particles on Orbits */}
          <circle cx="145" cy="148" r="8" fill="#8B5CF6" fillOpacity="0.25" />
          <circle cx="145" cy="148" r="4.5" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="355" cy="148" r="8" fill="#3B82F6" fillOpacity="0.25" />
          <circle cx="355" cy="148" r="4.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="145" cy="292" r="9" fill="#06B6D4" fillOpacity="0.3" filter="url(#axioma-soft-glow)" />
          <circle cx="145" cy="292" r="5" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="355" cy="292" r="11" fill="#F43F5E" fillOpacity="0.35" filter="url(#axioma-soft-glow)" />
          <circle cx="355" cy="292" r="6" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="353.5" cy="290.5" r="1.5" fill="#FFFFFF" />

          {/* DNA Base Pair Rungs */}
          <g stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round">
            <line x1="228" y1="138" x2="272" y2="138" />
            <circle cx="228" cy="138" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="272" cy="138" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="220" y1="172" x2="280" y2="172" />
            <circle cx="220" cy="172" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="280" cy="172" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="220" y1="268" x2="280" y2="268" />
            <circle cx="220" cy="268" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="280" cy="268" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="228" y1="302" x2="272" y2="302" />
            <circle cx="228" cy="302" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="272" cy="302" r="2.8" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
          </g>

          {/* DNA Strands */}
          <path d="M 250 96 C 286 96, 294 165, 250 220 C 206 275, 214 344, 250 344" stroke="url(#axioma-dna-green)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M 250 96 C 214 96, 206 165, 250 220 C 294 275, 286 344, 250 344" stroke="url(#axioma-dna-pink)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <circle cx="250" cy="96" r="3.5" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="1.2" />
          <circle cx="250" cy="344" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.2" />
          <circle cx="236" cy="220" r="3" fill="#F43F5E" />
          <circle cx="264" cy="220" r="3" fill="#10B981" />

          {/* Central Luminous Core Node */}
          <circle cx="250" cy="220" r="24" fill="#0284C7" fillOpacity="0.12" filter="url(#axioma-core-glow)" />
          <circle cx="250" cy="220" r="14" fill="#06B6D4" fillOpacity="0.25" />
          <circle cx="250" cy="220" r="9" fill={isDark ? '#0B101E' : '#FFFFFF'} stroke={isDark ? '#38BDF8' : '#0284C7'} strokeWidth="3" />
          <circle cx="250" cy="220" r="3.5" fill="#0EA5E9" />
        </g>
      );

      // 1. Icon Only Variant (No text, square-proportioned emblem)
      if (variant === 'icon') {
        return (
          <svg
            viewBox="0 0 500 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className || 'w-10 h-10'}
            role="img"
            aria-label="Axioma Academy STEM Emblem"
          >
            {defs}
            {emblemGeometry}
          </svg>
        );
      }

      // 2. Horizontal Lockup (Emblem on left + Brand Wordmark on right)
      if (variant === 'horizontal') {
        return (
          <svg
            viewBox="0 0 460 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className || 'h-10 w-auto'}
            role="img"
            aria-label="Axioma Academy Logo"
          >
            {defs}
            <g transform="translate(45, 45) scale(0.2) translate(-250, -220)">
              {emblemGeometry}
            </g>
            <g transform="translate(106, 48)">
              <text fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="34" letterSpacing="0.14em" fill={textColor}>
                AXIOMA
              </text>
              <text x="2" y="26" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.48em" fill={subtextColor}>
                ACADEMY
              </text>
            </g>
          </svg>
        );
      }

      // 3. Vertical Full Lockup (Emblem on top + Wordmark on bottom)
      return (
        <svg
          viewBox="0 0 500 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className || 'w-full h-auto max-w-sm'}
          role="img"
          aria-label="Axioma Academy Logo"
        >
          {defs}
          {emblemGeometry}
          <text x="250" y="472" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="44" letterSpacing="0.22em" fill={textColor}>
            AXIOMA
          </text>
          <text x="250" y="520" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.65em" fill={subtextColor}>
            ACADEMY
          </text>
        </svg>
      );
    }

    // =========================================================================
    // 1. CONCEPT: THE APEX PRISM
    // =========================================================================
    if (concept === 'prism') {
      if (variant === 'icon') {
        return (
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || 'w-10 h-10'}>
            <polygon points="26,6 10,54 22,54 32,24" fill={isDark ? '#14B8A6' : '#0D9488'} />
            <polygon points="34,6 28,24 38,54 50,54" fill={isDark ? '#38BDF8' : '#2563EB'} />
            <polygon points="30,2 26,6 34,6" fill={isDark ? '#34D399' : '#059669'} />
            <polygon points="20,34 40,34 36,42 24,42" fill={isDark ? '#C084FC' : '#7C3AED'} />
            <circle cx="30" cy="27" r="2.2" fill="#F59E0B" />
          </svg>
        );
      }

      return (
        <svg viewBox="0 0 340 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || 'h-10 w-auto'}>
          <g transform="translate(10, 8)">
            <polygon points="26,6 10,54 22,54 32,24" fill={isDark ? '#14B8A6' : '#0D9488'} />
            <polygon points="34,6 28,24 38,54 50,54" fill={isDark ? '#38BDF8' : '#2563EB'} />
            <polygon points="30,2 26,6 34,6" fill={isDark ? '#34D399' : '#059669'} />
            <polygon points="20,34 40,34 36,42 24,42" fill={isDark ? '#C084FC' : '#7C3AED'} />
            <circle cx="30" cy="27" r="2.2" fill="#F59E0B" />
          </g>
          <g transform="translate(75, 45)">
            <text font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="26" font-weight="800" letter-spacing="-0.03em" fill={textColor}>
              Axioma
            </text>
            <text x="102" y="-1" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.18em" fill={subtextColor}>
              ACADEMY
            </text>
          </g>
        </svg>
      );
    }

    // Default fallback
    return null;
  }
);

AxiomaLogo.displayName = 'AxiomaLogo';
