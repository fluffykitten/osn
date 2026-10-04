# OSN Kimia Mastery Design System

## 1. Brand Identity & Purpose
OSN Kimia Mastery is a premier competitive preparation platform for high school students competing in the Indonesian National Science Olympiad (OSN - Olimpiade Sains Nasional Kimia) and the International Chemistry Olympiad (IChO). The aesthetic is scholarly, rigorous, yet deeply engaging through gamified mechanics, molecular iconography, and clean academic layout.

## 2. Core Color Palette
- **Canvas / Background**: `#F0F8FF` (Serene Alice Blue Canvas - luminous, comfortable for extended study sessions).
- **Surface / Cards**: `#FFFFF0` (Ivory - warm paper-like laboratory feel).
- **Secondary Surface**: `#F8FAF8` or `#E2E8F0` (Subtle contrasts for code and table stripes).
- **Primary Action**: `#708090` (Slate Gray) / hover `#5C6D7D`.
- **Accent & Highlights**: `#B0C4DE` (Light Steel Blue) - badges, active indicators, soft glows.
- **Borders & Dividers**: `#D3D3D3` (Light Gray - clean 1px structural framing).
- **Primary Typography**: `#2D3748` (Deep Slate Text - high contrast, soft on eyes).
- **Muted Text**: `#708090` (Slate Gray - metadata, timestamps, helper descriptions).

## 3. Competitive Tier Accents
- **Level 1 - 5 (OSK / District)**: Emerald `#10B981` & Teal `#14B8A6`.
- **Level 6 - 10 (OSP / Provincial)**: Sky `#0EA5E9` & Indigo `#6366F1`.
- **Level 11 - 15 (OSN / National)**: Amber Gold `#F59E0B` & Yellow `#EAB308`.
- **Level 16+ (IChO / International)**: Royal Purple `#9333EA` & Pink `#EC4899`.

## 4. Typography Hierarchy
- **Display Headings**: `'Plus Jakarta Sans'`, bold / semibold, tracking tight.
- **Body & Controls**: `'Inter'`, regular / medium / semibold.
- **Mathematical Formulas & Equations**: KaTeX & `'JetBrains Mono'`.

## 5. Component Patterns
- **Cards**: `.lab-card` styling with `bg-[#FFFFF0]`, `border-[#D3D3D3]`, `rounded-2xl`, and subtle elevation shadow.
- **Buttons**:
  - Primary: `bg-[#708090] text-[#FFFFF0] hover:bg-[#5C6D7D] rounded-xl px-4 py-2 font-medium shadow-sm transition-all`.
  - Secondary: `bg-[#FFFFF0] text-[#708090] border border-[#D3D3D3] hover:bg-[#F0F8FF] rounded-xl px-4 py-2 font-medium transition-all`.
- **Pills & Badges**: `rounded-full border px-3 py-1 text-xs font-semibold flex items-center gap-1.5`.
