# Design System & Theme Tokens

## Part 1 — Compact Token Summary

### Color Palette (Serene Minimalist & Active Presets)

| Token | CSS Variable / Name | Hex Value | Usage |
|---|---|---|---|
| **Canvas** | `--theme-canvas` / `--serene-alice` | `#F0F8FF` | Main application background (soft Alice Blue) |
| **Surface** | `--theme-surface` / `--serene-ivory` | `#FFFFF0` | Primary card / container background (Ivory) |
| **Border** | `--theme-border` / `--serene-gray` | `#D3D3D3` | Card borders, dividers, subtle outlines |
| **Primary** | `--theme-primary` / `--serene-slate` | `#708090` | Primary buttons, active pill backgrounds, headings |
| **Primary Hover** | `--theme-primary-hover` | `#5C6D7D` | Interactive hover state for primary elements |
| **Primary Text** | `--theme-primary-text` | `#FFFFF0` | High contrast text on primary buttons |
| **Accent / Steel** | `--theme-accent` / `--serene-steel` | `#B0C4DE` | Highlights, badges, focus rings, scrollbar thumbs |
| **Text Dark** | `--theme-text` / `--serene-slate-dark` | `#2D3748` | Main body typography (Deep slate charcoal) |
| **Text Muted** | `--theme-text-muted` | `#708090` | Subtitles, labels, secondary metadata |

### Gamification & State Tokens

| Token | Hex Value | Usage |
|---|---|---|
| **Streak Flame** | `#F59E0B` to `#EF4444` | Animated streak flame counter |
| **OSK Tier (Bronze/Emerald)** | `#10B981` to `#14B8A6` | Level 1-5 tier progress |
| **OSP Tier (Silver/Sky)** | `#0EA5E9` to `#6366F1` | Level 6-10 tier progress |
| **OSN Tier (Gold/Amber)** | `#F59E0B` to `#EAB308` | Level 11-15 national tier progress |
| **IChO Tier (Diamond/Purple)** | `#9333EA` to `#EC4899` | Level 16+ international mastery |
| **Mastered Status** | `#059669` (bg `#ECFDF5`) | Pillar score >= 80% |
| **Developing Status** | `#D97706` (bg `#FFFBEB`) | Pillar score 50% - 79% |
| **Novice / Remedial** | `#DC2626` (bg `#FEF2F2`) | Pillar score < 50% |

### Typography

| Category | Font Family | Fallbacks |
|---|---|---|
| **Body / Sans** | `'Inter'` | `system-ui, -apple-system, sans-serif` |
| **Headings / Display** | `'Plus Jakarta Sans'` | `system-ui, -apple-system, sans-serif` |
| **Formulas / Numbers** | `'JetBrains Mono'` / KaTeX | `ui-monospace, monospace` |

### Elevation & Surfaces
- `.lab-card`: `background: #FFFFF0; border: 1px solid #D3D3D3; box-shadow: 0 1px 3px 0 rgba(112, 128, 144, 0.05); border-radius: 1rem;`
- Hover state: `border-color: #B0C4DE; box-shadow: 0 4px 6px -1px rgba(112, 128, 144, 0.1);`

---

## Part 2 — Raw Source Dumps

### `src/index.css`
```css
@import "tailwindcss";
@import "katex/dist/katex.min.css";

@layer base {
  :root {
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
    --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, monospace;

    /* Serene Minimalist Blues and Ivory Harmony Palette */
    --serene-steel: #B0C4DE;       /* Light Steel Blue */
    --serene-ivory: #FFFFF0;       /* Ivory */
    --serene-alice: #F0F8FF;       /* Alice Blue Canvas */
    --serene-gray: #D3D3D3;        /* Light Gray Border */
    --serene-slate: #708090;       /* Slate Gray Heading & Primary Action */
    --serene-slate-dark: #2D3748;  /* Deep Slate Text */
    --serene-slate-hover: #5D6D7D; /* Hover Slate */
  }

  body {
    font-family: var(--font-sans);
    background-color: #F0F8FF;
    color: #2D3748;
  }
}

.lab-card {
  background: #FFFFF0;
  border: 1px solid #D3D3D3;
  box-shadow: 0 1px 3px 0 rgba(112, 128, 144, 0.05), 0 1px 2px -1px rgba(112, 128, 144, 0.03);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.lab-card:hover {
  border-color: #B0C4DE;
  box-shadow: 0 4px 6px -1px rgba(112, 128, 144, 0.1), 0 2px 4px -2px rgba(112, 128, 144, 0.06);
}
```
