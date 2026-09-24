export interface ColorSwatch {
  name: string;
  hex: string;
  rgb?: string;
}

export interface ThemePalette {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  swatches: ColorSwatch[];
  tokens: {
    canvas: string;          // Main background (e.g. #F0F8FF)
    surface: string;         // Card / panel surface (e.g. #FFFFF0)
    surfaceSecondary: string;
    border: string;          // Card / divider border (e.g. #D3D3D3)
    primary: string;         // Primary action / buttons (e.g. #708090)
    primaryHover: string;
    primaryText: string;     // Text on top of primary button
    accent: string;          // Badges, highlights (e.g. #B0C4DE)
    accentText: string;
    text: string;            // Body text (e.g. #2D3748)
    textMuted: string;       // Secondary / subtitle text
    hero: {
      from: string;          // Hero banner gradient start
      via: string;           // Hero banner gradient mid
      to: string;            // Hero banner gradient end
      text: string;          // Title text in hero
      desc: string;          // Description text in hero
      accent: string;        // Badge icon / accent inside hero
    };
  };
}
