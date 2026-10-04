# Extractable Components Catalog

## Layout Components

### NavBar
- **Source**: `src/components/common/Navbar.tsx`
- **Category**: `layout`
- **Description**: Sticky top navigation bar featuring OSN Kimia logo mark, student page navigation links, active exam alert indicator, streak counter, and user profile menu.
- **Extractable props**:
  - `activeItem` (`string`, default: `"dashboard"`): Current active navigation route identifier
  - `hasActiveWorksheet` (`boolean`, default: `false`): Shows pulsating alert tag if a test is ongoing
  - `streakCount` (`number`, default: `0`): Current streak days
- **Hardcoded**: Logo SVG, application brand titles, navigation links list, styling tokens

### Footer
- **Source**: `src/components/common/Footer.tsx`
- **Category**: `layout`
- **Description**: Minimalist academic footer with platform copyright and GitHub maintainer attribution.
- **Extractable props**: none
- **Hardcoded**: Attribution link, copyright year, badge icon

### ChemistryWatermarkBackground
- **Source**: `src/components/common/ChemistryWatermarkBackground.tsx`
- **Category**: `layout`
- **Description**: Subtle ambient background watermark rendering chemical structures, benzene rings, and glassware.
- **Extractable props**:
  - `opacity` (`number`, default: `0.05`): Ambient opacity level
- **Hardcoded**: SVG orbital paths, molecular formulas

---

## Basic Components

### UserTitleBadge
- **Source**: `src/components/gamification/UserTitleBadge.tsx`
- **Category**: `basic`
- **Description**: Gamified competitive rank badge pill showing student title, tier color, and icon.
- **Extractable props**:
  - `level` (`number`, default: `1`): Current competitive level
  - `title` (`string`, default: `"Pemula Laboratorium"`): Title text
  - `variant` (`string`, default: `"light"`): Visual style (`"light"` | `"glass"`)
- **Hardcoded**: Tier icon mapping, tier color scales

### LevelProgressBar
- **Source**: `src/components/gamification/LevelProgressBar.tsx`
- **Category**: `basic`
- **Description**: Interactive level and XP meter with animated gradient progress fill.
- **Extractable props**:
  - `currentXp` (`number`, default: `0`): Experience points accumulated in current tier
  - `targetXp` (`number`, default: `500`): XP target to level up
  - `level` (`number`, default: `1`): Current level number
  - `progressPercent` (`number`, default: `0`): Percentage fill
- **Hardcoded**: Tier gradient color presets

### ShowcaseBadgePill
- **Source**: `src/components/gamification/ShowcaseBadgePill.tsx`
- **Category**: `basic`
- **Description**: Showcase achievement or stat pill pinned to student dashboard header.
- **Extractable props**:
  - `iconType` (`string`, default: `"streak"`): Icon symbol
  - `label` (`string`, default: `"7 Hari"`): Metric or achievement text
  - `subtext` (`string`, default: `"Streak Belajar"`): Secondary label
- **Hardcoded**: Rarity border glow, pill rounded geometry
