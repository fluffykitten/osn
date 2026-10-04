# Shared Layout Components

## 1. App Shell / Root Layout
- **File path**: `src/App.tsx`
- **Description**: The top-level layout wrapper providing `AuthProvider`, `ThemeProvider`, `Navbar`, and conditional routing. When in full-screen workspace mode (`/worksheet/:type/:id` or `/whiteboard/:id`), it locks the viewport to `h-screen overflow-hidden` and hides the standard footer. In `/admin/*`, it loads `AdminLayout`.

```tsx
<div
  style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
  className={`flex flex-col transition-colors duration-200 ${
    isAdminPortal
      ? 'min-h-screen'
      : `font-sans selection:bg-[#B0C4DE]/40 selection:text-[#2D3748] ${
          isFullScreenWorkspace ? 'h-screen overflow-hidden' : 'min-h-screen'
        }`
  }`}
>
  {!isAdminPortal && <Navbar />}

  <main
    style={{ backgroundColor: 'var(--theme-canvas)', color: 'var(--theme-text)' }}
    className={`flex-1 flex flex-col transition-colors duration-200 ${
      isAdminPortal
        ? 'min-h-screen'
        : isFullScreenWorkspace
        ? 'h-[calc(100vh-64px)] overflow-hidden'
        : ''
    }`}
  >
    <Suspense fallback={<PageLoadingFallback />}>
      <Routes>...</Routes>
    </Suspense>
  </main>
  {!isFullScreenWorkspace && !isAdminPortal && <Footer />}
</div>
```

## 2. Navigation Bar
- **File path**: `src/components/common/Navbar.tsx`
- **Description**: Sticky top header (`h-16`) containing logo (`OSN Kimia`), student navigation links (`Dashboard`, `Materi`, `Bank Soal`, `Lembar Kerja`), active test notification banner, streak counter, profile dropdown, and mobile navigation drawer.

```tsx
<header className="sticky top-0 z-40 bg-[#FFFFF0]/95 backdrop-blur-md border-b border-[#D3D3D3]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-[#708090] text-[#FFFFF0] flex items-center justify-center font-bold shadow-sm">
          <Sparkles className="w-5 h-5 text-[#B0C4DE]" />
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-sm tracking-tight text-[#2D3748]">OSN KIMIA</span>
          <span className="text-[10px] font-mono text-[#708090]">MASTERY PLATFORM</span>
        </div>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center space-x-1">
        <Link to="/student/dashboard" className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#2D3748] hover:bg-[#F0F8FF]">
          Dashboard
        </Link>
        <Link to="/materi" className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]">
          Materi
        </Link>
        <Link to="/practice" className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]">
          Bank Soal
        </Link>
        <Link to="/worksheet" className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#708090] hover:text-[#2D3748] hover:bg-[#F0F8FF]">
          Lembar Kerja
        </Link>
      </nav>
    </div>
  </div>
</header>
```

## 3. Footer
- **File path**: `src/components/common/Footer.tsx`
- **Description**: Standard minimalist bottom bar containing copyright notice and creator link.

```tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFF0] border-t border-[#D3D3D3] mt-16 text-[#708090] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#708090] gap-3">
          <p>© {new Date().getFullYear()} OSN Kimia Mastery. Dirancang untuk pembinaan olimpiade sains berstandar tinggi.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#708090] hover:text-[#2D3748] hover:underline font-medium flex items-center gap-1.5 transition-colors"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten"
                className="w-3.5 h-3.5 rounded-full object-contain border border-[#D3D3D3]"
              />
              <span>github.com/fluffykitten</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
```
