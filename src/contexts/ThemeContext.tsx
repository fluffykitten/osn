import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { ThemePalette } from '../types/theme';
import { THEME_PRESETS } from '../utils/themePresets';

interface ThemeContextType {
  activeThemeId: string;
  activePalette: ThemePalette;
  allPalettes: ThemePalette[];
  setTheme: (themeId: string) => void;
  addCustomPalette: (palette: ThemePalette) => void;
  deleteCustomPalette: (themeId: string) => void;
  resetToDefault: () => void;
}

const STORAGE_ACTIVE_KEY = 'osn_active_theme_id';
const STORAGE_CUSTOM_KEY = 'osn_custom_theme_palettes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customPalettes, setCustomPalettes] = useState<ThemePalette[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CUSTOM_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const allPalettes = useMemo(() => {
    return [...THEME_PRESETS, ...customPalettes];
  }, [customPalettes]);

  const [activeThemeId, setActiveThemeId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ACTIVE_KEY);
      if (saved && (THEME_PRESETS.some((p) => p.id === saved) || customPalettes.some((p) => p.id === saved))) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'serene-minimalist';
  });

  const activePalette = useMemo<ThemePalette>(() => {
    return allPalettes.find((p) => p.id === activeThemeId) || THEME_PRESETS[0];
  }, [allPalettes, activeThemeId]);

  // Synchronize CSS Variables & Runtime Dynamic Stylesheet
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', activePalette.id);

    // Set standard CSS variables
    const { tokens } = activePalette;
    root.style.setProperty('--theme-canvas', tokens.canvas);
    root.style.setProperty('--theme-surface', tokens.surface);
    root.style.setProperty('--theme-border', tokens.border);
    root.style.setProperty('--theme-primary', tokens.primary);
    root.style.setProperty('--theme-primary-hover', tokens.primaryHover);
    root.style.setProperty('--theme-primary-text', tokens.primaryText);
    root.style.setProperty('--theme-accent', tokens.accent);
    root.style.setProperty('--theme-accent-text', tokens.accentText);
    root.style.setProperty('--theme-text', tokens.text);
    root.style.setProperty('--theme-text-muted', tokens.textMuted);
    root.style.setProperty('--theme-hero-from', tokens.hero.from);
    root.style.setProperty('--theme-hero-via', tokens.hero.via);
    root.style.setProperty('--theme-hero-to', tokens.hero.to);
    root.style.setProperty('--theme-hero-text', tokens.hero.text);
    root.style.setProperty('--theme-hero-desc', tokens.hero.desc);
    root.style.setProperty('--theme-hero-accent', tokens.hero.accent);

    // Inject dynamic CSS style tag to seamlessly theme existing utility classes
    let styleTag = document.getElementById('osn-dynamic-theme-runtime') as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'osn-dynamic-theme-runtime';
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
      /* Dynamic Theme Injections for ${activePalette.name} */
      
      /* 1. Global Page Background & Base Text */
      body, #root {
        background-color: ${tokens.canvas} !important;
        color: ${tokens.text} !important;
      }

      /* 2. Headings outside hero banners */
      h1:not([class*="from-"] *):not(.theme-hero-banner *),
      h2:not([class*="from-"] *):not(.theme-hero-banner *),
      h3:not([class*="from-"] *):not(.theme-hero-banner *),
      h4:not([class*="from-"] *):not(.theme-hero-banner *),
      h5:not([class*="from-"] *):not(.theme-hero-banner *),
      h6:not([class*="from-"] *):not(.theme-hero-banner *) {
        color: ${tokens.text} !important;
      }

      /* 3. Primary Dark Text Classes */
      .text-\\[\\#2D3748\\],
      .text-serene-dark,
      .text-slate-900,
      .text-slate-800 {
        color: ${tokens.text} !important;
      }

      /* 4. Secondary / Muted Text Classes (labels, subtitles, meta) */
      .text-\\[\\#708090\\],
      .text-serene-slate,
      .text-slate-700,
      .text-slate-600,
      .text-slate-500 {
        color: ${tokens.textMuted} !important;
      }

      .text-slate-400 {
        color: ${tokens.textMuted} !important;
        opacity: 0.8;
      }

      /* 5. HERO BANNER - Background Gradient & Hero Typography */
      [class*="from-\\[\\#596A7A\\]"],
      .theme-hero-banner {
        background: linear-gradient(135deg, ${tokens.hero.from} 0%, ${tokens.hero.via} 50%, ${tokens.hero.to} 100%) !important;
        color: ${tokens.hero.text} !important;
        border-color: ${tokens.accent}50 !important;
      }

      /* Hero Title & Text inside Hero Banner */
      [class*="from-\\[\\#596A7A\\]"] h1,
      [class*="from-\\[\\#596A7A\\]"] h2,
      [class*="from-\\[\\#596A7A\\]"] h3,
      [class*="from-\\[\\#596A7A\\]"] .font-display,
      [class*="from-\\[\\#596A7A\\]"] > div > div > .text-\\[\\#FFFFF0\\],
      .theme-hero-banner h1,
      .theme-hero-banner h2,
      .theme-hero-banner h3,
      .theme-hero-banner .font-display {
        color: ${tokens.hero.text} !important;
      }

      /* Hero Description & Subtitles inside Hero Banner */
      [class*="from-\\[\\#596A7A\\]"] p,
      [class*="from-\\[\\#596A7A\\]"] .text-\\[\\#F0F8FF\\]\\/90,
      [class*="from-\\[\\#596A7A\\]"] .text-\\[\\#F0F8FF\\],
      .theme-hero-banner p,
      .theme-hero-banner .text-\\[\\#F0F8FF\\]\\/90,
      .theme-hero-banner .text-\\[\\#F0F8FF\\] {
        color: ${tokens.hero.desc} !important;
      }

      /* Hero Super-Badge / Pill inside Hero Banner */
      [class*="from-\\[\\#596A7A\\]"] .rounded-full.uppercase,
      .theme-hero-banner .rounded-full.uppercase {
        color: ${tokens.hero.text} !important;
        border-color: ${tokens.accent}60 !important;
        background-color: rgba(255, 255, 255, 0.15) !important;
      }

      [class*="from-\\[\\#596A7A\\]"] .text-\\[\\#B0C4DE\\],
      .theme-hero-banner .text-\\[\\#B0C4DE\\] {
        color: ${tokens.hero.accent} !important;
      }

      /* Preserve Card Text Inside Hero Banner */
      [class*="from-\\[\\#596A7A\\]"] .bg-\\[\\#FFFFF0\\],
      .theme-hero-banner .bg-\\[\\#FFFFF0\\] {
        background-color: ${tokens.surface} !important;
        border-color: ${tokens.border} !important;
      }
      [class*="from-\\[\\#596A7A\\]"] .bg-\\[\\#FFFFF0\\] .text-\\[\\#2D3748\\],
      .theme-hero-banner .bg-\\[\\#FFFFF0\\] .text-\\[\\#2D3748\\] {
        color: ${tokens.text} !important;
      }
      [class*="from-\\[\\#596A7A\\]"] .bg-\\[\\#FFFFF0\\] .text-\\[\\#708090\\],
      .theme-hero-banner .bg-\\[\\#FFFFF0\\] .text-\\[\\#708090\\] {
        color: ${tokens.textMuted} !important;
      }

      /* 6. Surface & Cards */
      .bg-\\[\\#FFFFF0\\],
      .bg-serene-surface,
      .lab-card {
        background-color: ${tokens.surface} !important;
        border-color: ${tokens.border} !important;
      }

      /* Canvas & Background overrides */
      .bg-\\[\\#F0F8FF\\],
      .bg-serene-canvas,
      .bg-slate-50 {
        background-color: ${tokens.canvas} !important;
      }

      .border-\\[\\#D3D3D3\\],
      .border-serene {
        border-color: ${tokens.border} !important;
      }

      /* 7. Action Buttons & Slate Elements */
      button.bg-\\[\\#708090\\],
      a.bg-\\[\\#708090\\],
      .bg-\\[\\#708090\\],
      .btn-serene-primary {
        background-color: ${tokens.primary} !important;
        color: ${tokens.primaryText} !important;
      }

      button.bg-\\[\\#708090\\] *,
      a.bg-\\[\\#708090\\] *,
      .bg-\\[\\#708090\\] *,
      .btn-serene-primary * {
        color: ${tokens.primaryText} !important;
      }

      .hover\\:bg-\\[\\#5C6D7D\\]:hover,
      .hover\\:bg-\\[\\#5D6D7D\\]:hover,
      button.bg-\\[\\#708090\\]:hover,
      a.bg-\\[\\#708090\\]:hover,
      .bg-\\[\\#708090\\]:hover {
        background-color: ${tokens.primaryHover} !important;
      }

        .btn-serene-secondary {
          background-color: ${tokens.surface} !important;
          color: ${tokens.primary} !important;
          border-color: ${tokens.border} !important;
        }
        .btn-serene-secondary:hover {
          background-color: ${tokens.canvas} !important;
          border-color: ${tokens.accent} !important;
        }

        /* 8. Accent Badges & Highlights */
        .text-\\[\\#B0C4DE\\] {
          color: ${tokens.accent} !important;
        }
        .bg-\\[\\#B0C4DE\\] {
          background-color: ${tokens.accent} !important;
        }
        .bg-\\[\\#B0C4DE\\]\\/20,
        .bg-\\[\\#B0C4DE\\]\\/25,
        .bg-\\[\\#B0C4DE\\]\\/30,
        .bg-\\[\\#B0C4DE\\]\\/40 {
          background-color: ${tokens.accent}20 !important;
          color: ${tokens.accentText} !important;
        }

        /* 9. Admin Sidebar Theming */
        aside.bg-\\[\\#708090\\] {
          background-color: ${tokens.primary} !important;
          border-color: ${tokens.border} !important;
        }
        aside .bg-\\[\\#617181\\] {
          background-color: ${tokens.primaryHover} !important;
        }
        aside .bg-\\[\\#536270\\] {
          background-color: ${tokens.primary} !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }

        /* Sidebar Inactive Links */
        aside nav a {
          color: rgba(255, 255, 255, 0.88) !important;
        }
        aside nav a svg {
          color: ${tokens.accent} !important;
        }
        aside nav a:hover {
          color: #FFFFFF !important;
          background-color: rgba(255, 255, 255, 0.12) !important;
        }

        /* Sidebar ACTIVE Link Pill */
        aside nav a[class*="bg-[#FFFFF0]"],
        aside nav a.bg-\\[\\#FFFFF0\\] {
          background-color: ${tokens.surface} !important;
          color: ${tokens.primary} !important;
          border: 1px solid ${tokens.border} !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
        }
        aside nav a[class*="bg-[#FFFFF0]"] span,
        aside nav a.bg-\\[\\#FFFFF0\\] span {
          color: ${tokens.primary} !important;
          font-weight: 700 !important;
        }
        aside nav a[class*="bg-[#FFFFF0]"] svg,
        aside nav a.bg-\\[\\#FFFFF0\\] svg {
          color: ${tokens.primary} !important;
        }
        aside nav a[class*="bg-[#FFFFF0]"] [class*="bg-[#708090]"] {
          background-color: ${tokens.primary} !important;
          color: ${tokens.primaryText} !important;
        }

        /* 10. Top Navbar Theming & Contrast */
        header, nav.bg-\\[\\#FFFFF0\\], nav.bg-white {
          background-color: ${tokens.surface} !important;
          border-color: ${tokens.border} !important;
        }

        /* Top Navbar Active Tabs: Clean Surface with Accent Border & Dark Primary Text */
        nav a[class*="bg-[#B0C4DE]/30"],
        nav a[class*="bg-[#B0C4DE]\\/30"] {
          background-color: ${tokens.surface} !important;
          color: ${tokens.primary} !important;
          border: 1.5px solid ${tokens.accent} !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06) !important;
        }
        nav a[class*="bg-[#B0C4DE]/30"] span,
        nav a[class*="bg-[#B0C4DE]/30"] svg,
        nav a[class*="bg-[#B0C4DE]\\/30"] span,
        nav a[class*="bg-[#B0C4DE]\\/30"] svg {
          color: ${tokens.primary} !important;
          font-weight: 700 !important;
        }

        /* Navbar Inactive Links Hover */
        nav a:not([class*="bg-[#B0C4DE]"]):hover {
          background-color: ${tokens.canvas} !important;
          color: ${tokens.text} !important;
        }

        /* Navbar Badges & Mastery Pill */
        span[class*="bg-[#B0C4DE]/30"],
        span[class*="bg-[#B0C4DE]\\/30"] {
          background-color: ${tokens.accent}20 !important;
          color: ${tokens.primary} !important;
          border: 1.5px solid ${tokens.accent}80 !important;
          font-weight: 700 !important;
        }
      `;
  }, [activePalette]);

  const setTheme = (themeId: string) => {
    setActiveThemeId(themeId);
    try {
      localStorage.setItem(STORAGE_ACTIVE_KEY, themeId);
    } catch {
      // ignore
    }
  };

  const addCustomPalette = (palette: ThemePalette) => {
    setCustomPalettes((prev) => {
      const filtered = prev.filter((p) => p.id !== palette.id);
      const updated = [...filtered, palette];
      try {
        localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
    setTheme(palette.id);
  };

  const deleteCustomPalette = (themeId: string) => {
    setCustomPalettes((prev) => {
      const updated = prev.filter((p) => p.id !== themeId);
      try {
        localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
    if (activeThemeId === themeId) {
      setTheme('serene-minimalist');
    }
  };

  const resetToDefault = () => {
    setTheme('serene-minimalist');
  };

  return (
    <ThemeContext.Provider
      value={{
        activeThemeId,
        activePalette,
        allPalettes,
        setTheme,
        addCustomPalette,
        deleteCustomPalette,
        resetToDefault,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
