import React from 'react';

/**
 * ChemistryWatermarkBackground.tsx
 * Dekorasi Watermark Abstrak Kimia Lengkap untuk Seluruh Halaman Belajar & Dashboard.
 * 
 * FITUR UTAMA: INFINITE REPEATING FLANK PATTERN (Pola Berulang Tanpa Akhir di Sisi Kiri & Kanan)
 * Khusus halaman materi yang sangat panjang ke bawah (ribuan hingga belasan ribu pixel),
 * latar belakang di bagian pinggir TIDAK AKAN KOSONG karena menggunakan SVG Pattern
 * berulang vertikal secara kontinu dari puncak hingga ujung paling dasar halaman.
 * 
 * Menghadirkan simfoni ilustrasi sains akademis:
 * - Pinggir Kiri (Loop Berulang 1200px):
 *   1. Skala buret titrasi volumetrik presisi 0–50 mL dengan kran stopcock & tetesan analitik.
 *   2. Rantai polimer karbon zig-zag dengan stereokimia (wedge & dash: =O, -OH, -NH2, -Cl, -Br).
 *   3. Proyeksi isometrik kristalografi 3D Unit Sel BCC dengan vektor kisi a, b, c.
 *   4. Seri spektral emisi atomik Rydberg/Balmer (Hα, Hβ, Hγ) merapat ke batas ionisasi.
 *   5. Konformasi kursi sikloheksana C6H12 dengan ikatan aksial & ekuatorial.
 *   6. Kurva sigmoidal titrasi pH asam-basa dengan titik infleksi ekuivalen & daerah buffer.
 *   7. Fraktal makromolekul dendrimer hiper-bercabang.
 *   8. Kartu unsur periodik bergantian ([6] C, [42] Mo, [26] Fe) & formula termodinamika.
 * 
 * - Pinggir Kanan (Loop Berulang 1350px):
 *   1. Pita heksagonal grafena mengalir vertikal (honeycomb cascade) dengan cincin orbital pi.
 *   2. Untai heliks ganda makromolekul DNA dengan jembatan ikatan hidrogen A=T & G≡C.
 *   3. Diagram tingkat energi Orbital Molekul (MO: σ_1s bonding terkopel ↑↓, σ*_1s antibonding, π_2p).
 *   4. Lempeng kromatografi lapis tipis (TLC Plate) dengan garis eluen, origin & bercak nilai Rf.
 *   5. Struktur geodesik ikosahedral Fullerene Buckyball C60 & cincin difraksi sinar-X Bragg.
 *   6. Kartu unsur periodik ([79] Au, [54] Xe, [78] Pt, [29] Cu) & formula kinetika Arrhenius.
 * 
 * Karakter: Subtle & low-contrast (watermark) dengan pointer-events-none sehingga 100% aman dan nyaman dibaca.
 */
export const ChemistryWatermarkBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden z-0 ${className}`}
      style={{ color: 'var(--theme-text)' }}
    >
      {/* ========================================================================= */}
      {/* 1. AMBIENT GLOW ORBS (Cahaya Halus di Sudut dan Sisi Luar Layar)          */}
      {/* ========================================================================= */}
      <div
        className="absolute -top-32 -right-32 w-96 sm:w-[520px] h-96 sm:h-[520px] rounded-full blur-3xl opacity-20 sm:opacity-25 transition-all duration-700"
        style={{ backgroundColor: 'var(--theme-accent)' }}
      />
      <div
        className="absolute top-1/4 -left-32 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-3xl opacity-15 sm:opacity-20 transition-all duration-700"
        style={{ backgroundColor: 'var(--theme-primary)' }}
      />
      <div
        className="absolute top-1/2 -right-24 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-3xl opacity-15 sm:opacity-20 transition-all duration-700"
        style={{ backgroundColor: 'var(--theme-accent)' }}
      />
      <div
        className="absolute top-3/4 -left-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full blur-3xl opacity-12 sm:opacity-18 transition-all duration-700"
        style={{ backgroundColor: 'var(--theme-primary)' }}
      />
      <div
        className="absolute -bottom-24 -right-16 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full blur-3xl opacity-15 sm:opacity-22 transition-all duration-700"
        style={{ backgroundColor: 'var(--theme-accent)' }}
      />

      {/* ========================================================================= */}
      {/* 2. ZONA SUDUT ATAS (HERO & HEADER BANNER FOCAL ART)                       */}
      {/* ========================================================================= */}

      {/* Kiri Atas: Labu Erlenmeyer, Gelembung Reaksi & Geometri Tetrahedral */}
      <svg
        className="absolute top-4 -left-10 sm:left-2 lg:left-4 w-72 sm:w-[420px] h-72 sm:h-[420px] opacity-[0.14] sm:opacity-[0.17] transition-opacity duration-300 pointer-events-none"
        viewBox="0 0 450 450"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <g transform="translate(130, 200)">
          <path d="M-18,-110 L18,-110 M-14,-110 L-14,-70 L-65,40 L65,40 L14,-70 L14,-110" strokeWidth="2.2" />
          <path d="M-65,40 C-65,48 65,48 65,40" strokeWidth="2" />
          <path d="M-45,10 Q0,18 45,10" strokeDasharray="4 3" strokeWidth="1.6" />
          <line x1="-12" y1="-50" x2="-3" y2="-50" strokeWidth="1.4" />
          <line x1="-18" y1="-25" x2="-4" y2="-25" strokeWidth="1.4" />
          <line x1="-30" y1="0" x2="-10" y2="0" strokeWidth="1.4" />
          <line x1="-42" y1="25" x2="-18" y2="25" strokeWidth="1.4" />

          {/* Gelembung Reaksi */}
          <circle cx="-12" cy="22" r="4.5" />
          <circle cx="16" cy="18" r="6" />
          <circle cx="2" cy="-6" r="3.5" />
          <circle cx="-18" cy="-28" r="5" />
          <circle cx="8" cy="-45" r="4" />
          <circle cx="-6" cy="-78" r="3" />
          <circle cx="12" cy="-98" r="2.5" />
        </g>

        {/* Struktur Tetrahedral Koordinasi sp3 */}
        <g transform="translate(300, 100)">
          <circle cx="0" cy="0" r="10" fill="currentColor" opacity="0.25" strokeWidth="2" />
          <line x1="0" y1="-10" x2="0" y2="-55" strokeWidth="2" />
          <circle cx="0" cy="-55" r="5" fill="currentColor" />
          <line x1="9" y1="5" x2="48" y2="35" strokeWidth="2" />
          <circle cx="48" cy="35" r="5" fill="currentColor" />
          <polygon points="-8,7 -42,38 -28,45" fill="currentColor" opacity="0.6" />
          <circle cx="-35" cy="41" r="5" fill="currentColor" />
          <line x1="-4" y1="-8" x2="-32" y2="-36" strokeDasharray="4 3" strokeWidth="2" />
          <circle cx="-32" cy="-36" r="5" fill="currentColor" />
        </g>
      </svg>

      {/* Kanan Atas: Kluster Cincin Benzena Aromatik & Lintasan Orbital Elektron */}
      <svg
        className="absolute top-2 -right-8 sm:right-2 lg:right-4 w-72 sm:w-[480px] h-72 sm:h-[480px] opacity-[0.14] sm:opacity-[0.18] transition-opacity duration-300 pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <g transform="translate(300, 150)">
          <ellipse rx="130" ry="45" transform="rotate(-30)" strokeDasharray="6 6" />
          <ellipse rx="130" ry="45" transform="rotate(30)" />
          <ellipse rx="130" ry="45" transform="rotate(90)" strokeDasharray="3 4" />
          <circle r="9" fill="currentColor" opacity="0.8" />
          <circle cx="112" cy="-65" r="4.5" fill="currentColor" />
          <circle cx="-112" cy="65" r="3.5" fill="currentColor" />
          <circle cx="0" cy="130" r="4" fill="currentColor" />
          <circle cx="-95" cy="-55" r="3" fill="currentColor" />
        </g>

        <g transform="translate(170, 240)">
          <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" strokeWidth="2.2" />
          <circle r="36" strokeDasharray="5 4" strokeWidth="1.5" />
          <line x1="38" y1="-22" x2="38" y2="22" strokeWidth="1.8" />
          <line x1="-38" y1="-22" x2="0" y2="-44" strokeWidth="1.8" />
          <line x1="-38" y1="22" x2="0" y2="44" strokeWidth="1.8" />

          <g transform="translate(52, 0)">
            <polygon points="0,-60 52,-30 52,30 0,60" strokeWidth="2.2" />
            <circle r="32" strokeDasharray="4 4" strokeWidth="1.4" opacity="0.8" />
            <line x1="42" y1="-24" x2="42" y2="24" strokeWidth="1.8" />
            <line x1="52" y1="-30" x2="88" y2="-50" strokeWidth="1.8" />
            <circle cx="88" cy="-50" r="4" fill="currentColor" />
          </g>

          <line x1="-52" y1="-30" x2="-88" y2="-50" strokeWidth="1.8" />
          <line x1="-88" y1="-50" x2="-124" y2="-30" strokeWidth="1.8" />
          <circle cx="-124" cy="-30" r="4" fill="currentColor" />
        </g>

        <circle cx="70" cy="120" r="2.5" fill="currentColor" />
        <circle cx="100" cy="80" r="2" fill="currentColor" />
        <circle cx="140" cy="95" r="3" fill="currentColor" />
        <line x1="70" y1="120" x2="100" y2="80" strokeDasharray="3 3" opacity="0.6" />
        <line x1="100" y1="80" x2="140" y2="95" strokeDasharray="3 3" opacity="0.6" />
      </svg>

      {/* ========================================================================= */}
      {/* 3. TEPI KIRI BERULANG KONTINU (INFINITE REPEATING LEFT FLANK PATTERN)       */}
      {/* Siklus 1200px: Mengalir tanpa henti sampai ke ujung halaman berapapun dalamnya*/}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-y-0 left-0 w-44 sm:w-64 lg:w-76 xl:w-80 h-full opacity-[0.13] sm:opacity-[0.16] hidden md:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="chem-infinite-left-pattern"
            width="320"
            height="1200"
            patternUnits="userSpaceOnUse"
          >
            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 1 (Y: 20 - 280): Skala Buret Analitik, Formula & Kartu C */}
            {/* ----------------------------------------------------------------- */}
            {/* Skala Buret Volumetrik Vertikal (0 - 50 mL) */}
            <g transform="translate(42, 30)">
              <line x1="0" y1="0" x2="0" y2="200" strokeWidth="2" stroke="currentColor" />
              {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((y, idx) => (
                <g key={y}>
                  <line
                    x1="0"
                    y1={y}
                    x2={idx % 4 === 0 ? "18" : idx % 2 === 0 ? "12" : "7"}
                    y2={y}
                    strokeWidth={idx % 4 === 0 ? "1.8" : "1.2"}
                    stroke="currentColor"
                  />
                  {idx % 4 === 0 && (
                    <text
                      x="23"
                      y={y + 3.5}
                      fill="currentColor"
                      fontSize="8.5"
                      fontWeight="bold"
                      stroke="none"
                      fontFamily="monospace"
                    >
                      {idx * 2} mL
                    </text>
                  )}
                </g>
              ))}
              <line x1="-10" y1="200" x2="10" y2="200" strokeWidth="2.2" stroke="currentColor" />
              <path d="M0,200 L0,225 Q0,230 3,234" strokeWidth="1.6" stroke="currentColor" />
              <circle cx="3" cy="240" r="2.8" fill="currentColor" />
              <circle cx="3" cy="249" r="1.8" fill="currentColor" opacity="0.6" />
            </g>

            {/* Formula Marginal Atas */}
            <g transform="translate(130, 45)">
              <text fill="currentColor" fontSize="10" fontWeight="bold" stroke="none" fontFamily="monospace">
                PV = nRT
              </text>
              <text y="14" fill="currentColor" fontSize="8" stroke="none" fontFamily="monospace" opacity="0.8">
                R = 0.08206 L·atm/(mol·K)
              </text>
            </g>

            {/* Ubin Kartu Unsur Periodik Karbon [6] C */}
            <g transform="translate(145, 95)">
              <rect x="0" y="0" width="60" height="60" rx="14" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="8" y="14" fill="currentColor" fontSize="8" fontWeight="bold" stroke="none" fontFamily="monospace">6</text>
              <text x="30" y="38" fill="currentColor" fontSize="22" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">C</text>
              <text x="30" y="52" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">12.011</text>
            </g>

            <g transform="translate(130, 185)">
              <text fill="currentColor" fontSize="9" fontWeight="bold" stroke="none" fontFamily="monospace">
                pH = -log[H⁺]
              </text>
              <text y="13" fill="currentColor" fontSize="7.5" stroke="none" fontFamily="monospace" opacity="0.75">
                K_w = 1.0 × 10⁻¹⁴
              </text>
            </g>

            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 2 (Y: 280 - 580): Rantai Polimer Karbon & Kisi Kristal BCC */}
            {/* ----------------------------------------------------------------- */}
            {/* Rantai Polimer Karbon Zig-Zag dengan Stereokimia */}
            <g transform="translate(35, 290)">
              <path
                d="M 15,10 L 45,35 L 15,60 L 45,85 L 15,110 L 45,135 L 15,160 L 45,185"
                strokeWidth="2.2"
                stroke="currentColor"
              />
              {/* Gugus Karbonil =O */}
              <line x1="45" y1="35" x2="72" y2="22" strokeWidth="2" stroke="currentColor" />
              <line x1="47" y1="31" x2="74" y2="18" strokeWidth="1.5" stroke="currentColor" />
              <text x="78" y="22" fill="currentColor" fontSize="9" fontWeight="bold" stroke="none">O</text>

              {/* Gugus Hidroksil -OH */}
              <line x1="15" y1="60" x2="-10" y2="48" strokeWidth="1.8" stroke="currentColor" />
              <text x="-28" y="52" fill="currentColor" fontSize="8.5" fontWeight="bold" stroke="none">OH</text>

              {/* Baji Tebal Wedge -CH3 */}
              <polygon points="45,85 68,100 60,107" fill="currentColor" opacity="0.65" />
              <text x="72" y="112" fill="currentColor" fontSize="8" fontWeight="bold" stroke="none">CH₃</text>

              {/* Garis Putus Dash -Cl */}
              <line x1="15" y1="110" x2="-8" y2="124" strokeDasharray="3 3" strokeWidth="2" stroke="currentColor" />
              <text x="-24" y="132" fill="currentColor" fontSize="8.5" fontWeight="bold" stroke="none">Cl</text>

              {/* Amida -NH2 */}
              <line x1="45" y1="135" x2="72" y2="122" strokeWidth="1.8" stroke="currentColor" />
              <text x="76" y="125" fill="currentColor" fontSize="8.5" fontWeight="bold" stroke="none">NH₂</text>

              {/* Node Karbon */}
              <circle cx="15" cy="10" r="3" fill="currentColor" />
              <circle cx="45" cy="35" r="3" fill="currentColor" />
              <circle cx="15" cy="60" r="3" fill="currentColor" />
              <circle cx="45" cy="85" r="3" fill="currentColor" />
              <circle cx="15" cy="110" r="3" fill="currentColor" />
              <circle cx="45" cy="135" r="3" fill="currentColor" />
              <circle cx="15" cy="160" r="3" fill="currentColor" />
            </g>

            {/* Unit Sel Kristalografi Kubik BCC */}
            <g transform="translate(145, 330)">
              <line x1="0" y1="0" x2="55" y2="-28" strokeDasharray="3 2" strokeWidth="1.2" stroke="currentColor" />
              <line x1="55" y1="-28" x2="110" y2="0" strokeDasharray="3 2" strokeWidth="1.2" stroke="currentColor" />
              <line x1="55" y1="-28" x2="55" y2="40" strokeDasharray="3 2" strokeWidth="1.2" stroke="currentColor" />

              <line x1="0" y1="0" x2="0" y2="65" strokeWidth="1.6" stroke="currentColor" />
              <line x1="0" y1="65" x2="55" y2="92" strokeWidth="1.6" stroke="currentColor" />
              <line x1="55" y1="92" x2="110" y2="65" strokeWidth="1.6" stroke="currentColor" />
              <line x1="110" y1="65" x2="110" y2="0" strokeWidth="1.6" stroke="currentColor" />
              <line x1="0" y1="0" x2="55" y2="28" strokeWidth="1.6" stroke="currentColor" />
              <line x1="55" y1="28" x2="110" y2="0" strokeWidth="1.6" stroke="currentColor" />
              <line x1="55" y1="28" x2="55" y2="92" strokeWidth="1.6" stroke="currentColor" />

              <circle cx="0" cy="0" r="4.5" fill="currentColor" />
              <circle cx="110" cy="0" r="4.5" fill="currentColor" />
              <circle cx="55" cy="28" r="4.5" fill="currentColor" />
              <circle cx="0" cy="65" r="4.5" fill="currentColor" />
              <circle cx="55" cy="92" r="4.5" fill="currentColor" />
              <circle cx="110" cy="65" r="4.5" fill="currentColor" />

              {/* Atom Pusat Badan BCC */}
              <circle cx="55" cy="32" r="7" fill="currentColor" opacity="0.8" />
              <line x1="55" y1="32" x2="0" y2="0" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" />
              <line x1="55" y1="32" x2="110" y2="65" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" />

              <text x="55" y="112" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Kisi Kristal BCC
              </text>
            </g>

            {/* Formula Termodinamika */}
            <g transform="translate(45, 525)">
              <text fill="currentColor" fontSize="9.5" fontWeight="bold" stroke="none" fontFamily="monospace">
                ΔG° = -RT ln K
              </text>
              <text y="13" fill="currentColor" fontSize="8" stroke="none" fontFamily="monospace" opacity="0.8">
                ΔG° = ΔH° - TΔS°
              </text>
            </g>

            {/* Ubin Kartu Molibdenum [42] Mo */}
            <g transform="translate(180, 480)">
              <rect x="0" y="0" width="56" height="56" rx="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="7" y="13" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none" fontFamily="monospace">42</text>
              <text x="28" y="36" fill="currentColor" fontSize="20" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">Mo</text>
              <text x="28" y="49" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">95.95</text>
            </g>

            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 3 (Y: 580 - 880): Seri Spektral Balmer & Sikloheksana   */}
            {/* ----------------------------------------------------------------- */}
            {/* Spektrum Garis Emisi Rydberg Balmer */}
            <g transform="translate(40, 600)">
              <text fill="currentColor" fontSize="8.5" fontWeight="bold" stroke="none" fontFamily="monospace">
                DERET BALMER (λ)
              </text>
              <line x1="0" y1="12" x2="0" y2="135" strokeWidth="1.6" stroke="currentColor" />

              <line x1="0" y1="24" x2="42" y2="24" strokeWidth="2.5" stroke="currentColor" />
              <text x="48" y="27" fill="currentColor" fontSize="7" fontWeight="bold" stroke="none" fontFamily="monospace">656 nm (Hα)</text>

              <line x1="0" y1="50" x2="38" y2="50" strokeWidth="2.2" stroke="currentColor" />
              <text x="44" y="53" fill="currentColor" fontSize="7" fontWeight="bold" stroke="none" fontFamily="monospace">486 nm (Hβ)</text>

              <line x1="0" y1="70" x2="34" y2="70" strokeWidth="1.8" stroke="currentColor" />
              <text x="40" y="73" fill="currentColor" fontSize="7" fontWeight="bold" stroke="none" fontFamily="monospace">434 nm (Hγ)</text>

              <line x1="0" y1="85" x2="30" y2="85" strokeWidth="1.5" stroke="currentColor" />
              <line x1="0" y1="96" x2="28" y2="96" strokeWidth="1.2" stroke="currentColor" />
              <line x1="0" y1="104" x2="26" y2="104" strokeWidth="1" stroke="currentColor" />
              <line x1="0" y1="110" x2="24" y2="110" strokeWidth="0.8" stroke="currentColor" />
              <text x="28" y="118" fill="currentColor" fontSize="6.5" stroke="none" fontFamily="monospace">n → ∞</text>
            </g>

            {/* Konformasi Kursi Sikloheksana C6H12 */}
            <g transform="translate(170, 670)">
              <path d="M -45,18 L -22,-22 L 22,-22 L 45,-4 L 22,38 L -22,38 Z" strokeWidth="2" stroke="currentColor" />
              {/* Ikatan Aksial */}
              <line x1="-45" y1="18" x2="-45" y2="48" strokeWidth="1.5" stroke="currentColor" />
              <line x1="-22" y1="-22" x2="-22" y2="-52" strokeWidth="1.5" stroke="currentColor" />
              <line x1="22" y1="-22" x2="22" y2="8" strokeWidth="1.5" stroke="currentColor" />
              <line x1="45" y1="-4" x2="45" y2="-34" strokeWidth="1.5" stroke="currentColor" />
              <line x1="22" y1="38" x2="22" y2="68" strokeWidth="1.5" stroke="currentColor" />
              {/* Ikatan Ekuatorial */}
              <line x1="-45" y1="18" x2="-70" y2="10" strokeWidth="1.3" strokeDasharray="2 2" stroke="currentColor" />
              <line x1="45" y1="-4" x2="70" y2="4" strokeWidth="1.3" strokeDasharray="2 2" stroke="currentColor" />

              <circle cx="-45" cy="18" r="3.2" fill="currentColor" />
              <circle cx="-22" cy="-22" r="3.2" fill="currentColor" />
              <circle cx="22" cy="-22" r="3.2" fill="currentColor" />
              <circle cx="45" cy="-4" r="3.2" fill="currentColor" />
              <circle cx="22" cy="38" r="3.2" fill="currentColor" />
              <circle cx="-22" cy="38" r="3.2" fill="currentColor" />

              <text x="0" y="85" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Kursi C₆H₁₂
              </text>
            </g>

            {/* Formula Buffer Asam */}
            <g transform="translate(45, 785)">
              <text fill="currentColor" fontSize="8.5" fontWeight="bold" stroke="none" fontFamily="monospace">
                pH = pK_a + log([A⁻]/[HA])
              </text>
              <text y="12" fill="currentColor" fontSize="7" stroke="none" fontFamily="monospace" opacity="0.8">
                Persamaan Henderson-Hasselbalch
              </text>
            </g>

            {/* Ubin Kartu Besi [26] Fe */}
            <g transform="translate(50, 830)">
              <rect x="0" y="0" width="56" height="56" rx="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="7" y="13" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none" fontFamily="monospace">26</text>
              <text x="28" y="36" fill="currentColor" fontSize="20" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">Fe</text>
              <text x="28" y="49" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">55.845</text>
            </g>

            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 4 (Y: 880 - 1200): Kurva Titrasi pH, Dendrimer & Loop   */}
            {/* ----------------------------------------------------------------- */}
            {/* Kurva Titrasi S Potensiometri */}
            <g transform="translate(135, 875)">
              <line x1="0" y1="0" x2="0" y2="120" strokeWidth="1.8" stroke="currentColor" />
              <line x1="0" y1="120" x2="120" y2="120" strokeWidth="1.8" stroke="currentColor" />
              <text x="-4" y="-3" fill="currentColor" fontSize="8" fontWeight="bold" stroke="none">pH</text>
              <text x="122" y="123" fill="currentColor" fontSize="7" fontWeight="bold" stroke="none">V_titran</text>

              <line x1="0" y1="60" x2="105" y2="60" strokeDasharray="2 2" strokeWidth="0.9" stroke="currentColor" opacity="0.6" />
              <text x="-12" y="63" fill="currentColor" fontSize="7" fontWeight="bold" stroke="none">7.0</text>

              <path
                d="M 5,110 Q 40,105 50,85 Q 56,60 63,35 Q 75,15 110,12"
                strokeWidth="2.2"
                stroke="currentColor"
                fill="none"
              />
              <circle cx="56" cy="60" r="3.5" fill="currentColor" />
              <text x="64" y="63" fill="currentColor" fontSize="6.5" fontWeight="bold" stroke="none" fontFamily="monospace">
                Titik Ekuivalen
              </text>
            </g>

            {/* Struktur Dendrimer Hiper-Bercabang G2 */}
            <g transform="translate(85, 1070)">
              <circle cx="0" cy="0" r="6" fill="currentColor" opacity="0.8" />
              <line x1="0" y1="-6" x2="0" y2="-32" strokeWidth="1.8" stroke="currentColor" />
              <circle cx="0" cy="-32" r="3.5" fill="currentColor" />
              <line x1="0" y1="-32" x2="-18" y2="-52" strokeWidth="1.3" stroke="currentColor" />
              <circle cx="-18" cy="-52" r="2.5" fill="currentColor" />
              <line x1="0" y1="-32" x2="18" y2="-52" strokeWidth="1.3" stroke="currentColor" />
              <circle cx="18" cy="-52" r="2.5" fill="currentColor" />

              <line x1="5" y1="3" x2="28" y2="18" strokeWidth="1.8" stroke="currentColor" />
              <circle cx="28" cy="18" r="3.5" fill="currentColor" />
              <line x1="28" y1="18" x2="48" y2="8" strokeWidth="1.3" stroke="currentColor" />
              <circle cx="48" cy="8" r="2.5" fill="currentColor" />
              <line x1="28" y1="18" x2="38" y2="38" strokeWidth="1.3" stroke="currentColor" />
              <circle cx="38" cy="38" r="2.5" fill="currentColor" />

              <line x1="-5" y1="3" x2="-28" y2="18" strokeWidth="1.8" stroke="currentColor" />
              <circle cx="-28" cy="18" r="3.5" fill="currentColor" />
              <line x1="-28" y1="18" x2="-48" y2="8" strokeWidth="1.3" stroke="currentColor" />
              <circle cx="-48" cy="8" r="2.5" fill="currentColor" />
              <line x1="-28" y1="18" x2="-38" y2="38" strokeWidth="1.3" stroke="currentColor" />
              <circle cx="-38" cy="38" r="2.5" fill="currentColor" />

              <text x="0" y="58" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Fraktal Dendrimer G2
              </text>
            </g>

            {/* Garis Sambungan Vertikal Menuju Awal Siklus Berikutnya */}
            <line x1="42" y1="1140" x2="42" y2="1200" strokeWidth="1.6" strokeDasharray="3 3" stroke="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chem-infinite-left-pattern)" />
      </svg>

      {/* ========================================================================= */}
      {/* 4. TEPI KANAN BERULANG KONTINU (INFINITE REPEATING RIGHT FLANK PATTERN)     */}
      {/* Siklus 1350px: Asimetris dari kiri agar tampilan tetap organik & dinamis   */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-y-0 right-0 w-44 sm:w-64 lg:w-76 xl:w-80 h-full opacity-[0.13] sm:opacity-[0.16] hidden md:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="chem-infinite-right-pattern"
            width="320"
            height="1350"
            patternUnits="userSpaceOnUse"
          >
            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 1 (Y: 20 - 320): Pita Grafena Honeycomb & Kartu Au      */}
            {/* ----------------------------------------------------------------- */}
            {/* Rangkaian Heksagon Grafena Vertikal (Honeycomb Cascade) */}
            <g transform="translate(100, 20)">
              <polygon points="0,0 20,12 20,36 0,48 -20,36 -20,12" strokeWidth="1.8" stroke="currentColor" fill="none" />
              <circle r="14" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" fill="none" opacity="0.6" />

              <polygon points="0,48 20,60 20,84 0,96 -20,84 -20,60" strokeWidth="1.8" stroke="currentColor" fill="none" />
              <polygon points="0,96 20,108 20,132 0,144 -20,132 -20,108" strokeWidth="1.8" stroke="currentColor" fill="none" />
              <circle cx="0" cy="120" r="14" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" fill="none" opacity="0.6" />

              <polygon points="0,144 20,156 20,180 0,192 -20,180 -20,156" strokeWidth="1.8" stroke="currentColor" fill="none" />
              <polygon points="0,192 20,204 20,228 0,240 -20,228 -20,204" strokeWidth="1.8" stroke="currentColor" fill="none" />

              {/* Sambungan Sayap Kanan & Kiri Grafena */}
              <polygon points="40,24 60,36 60,60 40,72 20,60 20,36" strokeWidth="1.4" stroke="currentColor" fill="none" />
              <polygon points="40,120 60,132 60,156 40,168 20,156 20,132" strokeWidth="1.4" stroke="currentColor" fill="none" />
              <polygon points="-40,24 -20,36 -20,60 -40,72 -60,60 -60,36" strokeWidth="1.4" stroke="currentColor" fill="none" />
              <polygon points="-40,120 -20,132 -20,156 -40,168 -60,156 -60,132" strokeWidth="1.4" stroke="currentColor" fill="none" />

              <circle cx="0" cy="0" r="2.8" fill="currentColor" />
              <circle cx="20" cy="36" r="2.8" fill="currentColor" />
              <circle cx="-20" cy="84" r="2.8" fill="currentColor" />
              <circle cx="0" cy="144" r="2.8" fill="currentColor" />
              <circle cx="20" cy="180" r="2.8" fill="currentColor" />
              <circle cx="0" cy="240" r="2.8" fill="currentColor" />

              <text x="0" y="260" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Kisi Grafena sp²
              </text>
            </g>

            {/* Ubin Kartu Emas [79] Au */}
            <g transform="translate(200, 80)">
              <rect x="0" y="0" width="56" height="56" rx="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="7" y="13" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none" fontFamily="monospace">79</text>
              <text x="28" y="36" fill="currentColor" fontSize="20" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">Au</text>
              <text x="28" y="49" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">196.97</text>
            </g>

            {/* Formula Kinetika Arrhenius */}
            <g transform="translate(180, 190)">
              <text fill="currentColor" fontSize="9" fontWeight="bold" stroke="none" fontFamily="monospace">
                k = A · e^(-E_a/RT)
              </text>
              <text y="12" fill="currentColor" fontSize="7.5" stroke="none" fontFamily="monospace" opacity="0.8">
                E = h·ν • c = λ·ν
              </text>
            </g>

            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 2 (Y: 320 - 680): Untai Heliks Ganda DNA & Kartu Xe    */}
            {/* ----------------------------------------------------------------- */}
            <g transform="translate(120, 340)">
              {/* Dua Untai Heliks Sinusoidal */}
              <path
                d="M -35,0 Q -60,40 0,80 Q 60,120 35,160 Q -60,200 0,240 Q 60,280 -35,320"
                strokeWidth="2.2"
                stroke="currentColor"
                fill="none"
              />
              <path
                d="M 35,0 Q 60,40 0,80 Q -60,120 -35,160 Q 60,200 0,240 Q -60,280 35,320"
                strokeWidth="2.2"
                stroke="currentColor"
                fill="none"
              />

              {/* Jembatan Basa Nitrogen Berpasangan (Ikatan Hidrogen) */}
              <line x1="-35" y1="15" x2="35" y2="15" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />
              <circle cx="-35" cy="15" r="3.2" fill="currentColor" />
              <circle cx="35" cy="15" r="3.2" fill="currentColor" />

              <line x1="-24" y1="48" x2="24" y2="48" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />
              <line x1="-10" y1="80" x2="10" y2="80" strokeDasharray="2 2" strokeWidth="1.6" stroke="currentColor" />
              <line x1="-24" y1="112" x2="24" y2="112" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />

              <line x1="-35" y1="145" x2="35" y2="145" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />
              <circle cx="-35" cy="145" r="3.2" fill="currentColor" />
              <circle cx="35" cy="145" r="3.2" fill="currentColor" />

              <line x1="-24" y1="178" x2="24" y2="178" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />
              <line x1="-10" y1="210" x2="10" y2="210" strokeDasharray="2 2" strokeWidth="1.6" stroke="currentColor" />
              <line x1="-24" y1="242" x2="24" y2="242" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />

              <line x1="-35" y1="275" x2="35" y2="275" strokeDasharray="2 2" strokeWidth="1.5" stroke="currentColor" />
              <circle cx="-35" cy="275" r="3.2" fill="currentColor" />
              <circle cx="35" cy="275" r="3.2" fill="currentColor" />

              <text x="0" y="345" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Heliks Ganda B-DNA
              </text>
            </g>

            {/* Ubin Kartu Xenon [54] Xe */}
            <g transform="translate(205, 430)">
              <rect x="0" y="0" width="56" height="56" rx="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="7" y="13" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none" fontFamily="monospace">54</text>
              <text x="28" y="36" fill="currentColor" fontSize="20" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">Xe</text>
              <text x="28" y="49" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">131.29</text>
            </g>

            {/* Formula Elektrokimia Nernst */}
            <g transform="translate(160, 560)">
              <text fill="currentColor" fontSize="9" fontWeight="bold" stroke="none" fontFamily="monospace">
                E = E° - (RT/nF) ln Q
              </text>
              <text y="12" fill="currentColor" fontSize="7.5" stroke="none" fontFamily="monospace" opacity="0.8">
                F = 96485 C/mol
              </text>
            </g>

            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 3 (Y: 680 - 1000): Diagram Orbital Molekul & Kartu Pt   */}
            {/* ----------------------------------------------------------------- */}
            {/* Diagram Tingkat Energi Orbital Molekul (MO Diagram) */}
            <g transform="translate(45, 700)">
              <line x1="0" y1="260" x2="0" y2="15" strokeWidth="1.8" stroke="currentColor" />
              <polygon points="0,15 -3,22 3,22" fill="currentColor" />
              <text x="-8" y="10" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none">E</text>

              {/* AO 1s A */}
              <line x1="15" y1="190" x2="45" y2="190" strokeWidth="2.2" stroke="currentColor" />
              <text x="28" y="182" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none">1s</text>
              <line x1="30" y1="190" x2="30" y2="175" strokeWidth="1.5" stroke="currentColor" />
              <polygon points="30,175 28,180 32,180" fill="currentColor" />

              {/* AO 1s B */}
              <line x1="125" y1="190" x2="155" y2="190" strokeWidth="2.2" stroke="currentColor" />
              <text x="140" y="182" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none">1s</text>
              <line x1="140" y1="190" x2="140" y2="205" strokeWidth="1.5" stroke="currentColor" />
              <polygon points="140,205 138,200 142,200" fill="currentColor" />

              {/* Garis Korelasi Dashed */}
              <line x1="45" y1="190" x2="70" y2="235" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" />
              <line x1="125" y1="190" x2="100" y2="235" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" />
              <line x1="45" y1="190" x2="70" y2="140" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" />
              <line x1="125" y1="190" x2="100" y2="140" strokeDasharray="2 2" strokeWidth="1" stroke="currentColor" />

              {/* Orbital Ikatan σ_1s */}
              <line x1="70" y1="235" x2="100" y2="235" strokeWidth="2.5" stroke="currentColor" />
              <text x="85" y="250" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none">σ₁ₛ (Bonding)</text>
              <line x1="81" y1="235" x2="81" y2="220" strokeWidth="1.5" stroke="currentColor" />
              <polygon points="81,220 79,225 83,225" fill="currentColor" />
              <line x1="89" y1="235" x2="89" y2="250" strokeWidth="1.5" stroke="currentColor" />
              <polygon points="89,250 87,245 91,245" fill="currentColor" />

              {/* Orbital Anti-Ikatan σ*_1s */}
              <line x1="70" y1="140" x2="100" y2="140" strokeWidth="2.5" stroke="currentColor" />
              <text x="85" y="132" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none">σ*₁ₛ</text>

              {/* Orbital π_2p */}
              <line x1="62" y1="75" x2="84" y2="75" strokeWidth="2" stroke="currentColor" />
              <line x1="88" y1="75" x2="110" y2="75" strokeWidth="2" stroke="currentColor" />
              <text x="85" y="65" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none">π₂ₚ Degenerate</text>

              <text x="85" y="275" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Diagram MO (LCAO)
              </text>
            </g>

            {/* Ubin Kartu Platina [78] Pt */}
            <g transform="translate(195, 780)">
              <rect x="0" y="0" width="56" height="56" rx="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="7" y="13" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none" fontFamily="monospace">78</text>
              <text x="28" y="36" fill="currentColor" fontSize="20" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">Pt</text>
              <text x="28" y="49" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">195.08</text>
            </g>

            {/* Formula Difraksi Bragg */}
            <g transform="translate(170, 890)">
              <text fill="currentColor" fontSize="9" fontWeight="bold" stroke="none" fontFamily="monospace">
                2d · sin(θ) = n·λ
              </text>
              <text y="12" fill="currentColor" fontSize="7.5" stroke="none" fontFamily="monospace" opacity="0.8">
                Hukum Difraksi Sinar-X
              </text>
            </g>

            {/* ----------------------------------------------------------------- */}
            {/* SUB-MODUL 4 (Y: 1000 - 1350): Plat TLC, Buckyball C60 & Loop      */}
            {/* ----------------------------------------------------------------- */}
            {/* Lempeng Kromatografi Lapis Tipis (TLC Plate) */}
            <g transform="translate(40, 1020)">
              <rect x="0" y="0" width="85" height="150" rx="5" strokeWidth="1.6" stroke="currentColor" fill="none" />
              {/* Garis Solvent Front */}
              <line x1="0" y1="20" x2="85" y2="20" strokeDasharray="2 2" strokeWidth="1.2" stroke="currentColor" />
              <text x="90" y="23" fill="currentColor" fontSize="6.5" fontWeight="bold" stroke="none" fontFamily="monospace">Front</text>

              {/* Garis Titik Awal Origin */}
              <line x1="0" y1="130" x2="85" y2="130" strokeWidth="1.2" stroke="currentColor" />
              <text x="90" y="133" fill="currentColor" fontSize="6.5" fontWeight="bold" stroke="none" fontFamily="monospace">Origin</text>

              {/* Noda Pemisahan Komponen Rf */}
              <ellipse cx="32" cy="48" rx="7" ry="4.5" fill="currentColor" opacity="0.7" />
              <text x="44" y="50" fill="currentColor" fontSize="6.5" fontWeight="bold" stroke="none">Rf 0.73</text>

              <ellipse cx="32" cy="80" rx="8" ry="5.5" fill="currentColor" opacity="0.5" />
              <text x="44" y="82" fill="currentColor" fontSize="6.5" fontWeight="bold" stroke="none">Rf 0.45</text>

              <ellipse cx="32" cy="110" rx="6.5" ry="4.5" fill="currentColor" opacity="0.8" />
              <text x="44" y="112" fill="currentColor" fontSize="6.5" fontWeight="bold" stroke="none">Rf 0.18</text>

              <text x="42" y="165" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Plat TLC Analitik
              </text>
            </g>

            {/* Fullerene Buckyball C60 */}
            <g transform="translate(180, 1120)">
              <polygon points="0,-18 18,-6 11,15 -11,15 -18,-6" strokeWidth="1.8" stroke="currentColor" fill="none" />
              <polygon points="0,-18 0,-38 22,-44 36,-26 18,-6" strokeWidth="1.3" stroke="currentColor" fill="none" />
              <polygon points="18,-6 36,-26 48,-9 38,11 11,15" strokeWidth="1.3" stroke="currentColor" fill="none" />
              <polygon points="11,15 38,11 26,34 0,42 -11,15" strokeWidth="1.3" stroke="currentColor" fill="none" />
              <polygon points="-11,15 0,42 -26,34 -38,11 -18,-6" strokeWidth="1.3" stroke="currentColor" fill="none" />
              <polygon points="-18,-6 -38,11 -48,-9 -36,-26 0,-18" strokeWidth="1.3" stroke="currentColor" fill="none" />

              <circle cx="0" cy="-18" r="2.8" fill="currentColor" />
              <circle cx="18" cy="-6" r="2.8" fill="currentColor" />
              <circle cx="11" cy="15" r="2.8" fill="currentColor" />
              <circle cx="-11" cy="15" r="2.8" fill="currentColor" />
              <circle cx="-18" cy="-6" r="2.8" fill="currentColor" />

              <text x="0" y="60" fill="currentColor" fontSize="7.5" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">
                Fullerene C₆₀
              </text>
            </g>

            {/* Ubin Kartu Tembaga [29] Cu */}
            <g transform="translate(160, 1220)">
              <rect x="0" y="0" width="56" height="56" rx="12" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.75" />
              <text x="7" y="13" fill="currentColor" fontSize="7.5" fontWeight="bold" stroke="none" fontFamily="monospace">29</text>
              <text x="28" y="36" fill="currentColor" fontSize="20" fontWeight="black" textAnchor="middle" stroke="none" fontFamily="monospace">Cu</text>
              <text x="28" y="49" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none" fontFamily="monospace">63.546</text>
            </g>

            {/* Garis Sambungan Vertikal Menuju Awal Siklus Berikutnya */}
            <line x1="100" y1="1290" x2="100" y2="1350" strokeWidth="1.6" strokeDasharray="3 3" stroke="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chem-infinite-right-pattern)" />
      </svg>

      {/* ========================================================================= */}
      {/* 5. PITA KISI POLIHEKSAGONAL DI GARIS TEPI BAWAH (BOTTOM EDGE WATERMARK)   */}
      {/* ========================================================================= */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 opacity-[0.07] pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path
          d="M0,30 L30,10 L60,30 L90,10 L120,30 L150,10 L180,30 L210,10 L240,30 L270,10 L300,30 L330,10 L360,30 L390,10 L420,30 L450,10 L480,30 L510,10 L540,30 L570,10 L600,30 L630,10 L660,30 L690,10 L720,30 L750,10 L780,30 L810,10 L840,30 L870,10 L900,30 L930,10 L960,30 L990,10 L1020,30 L1050,10 L1080,30 L1110,10 L1140,30 L1170,10 L1200,30 L1230,10 L1260,30 L1290,10 L1320,30 L1350,10 L1380,30 L1410,10 L1440,30"
          strokeDasharray="4 4"
        />
        <path
          d="M0,45 L30,25 L60,45 L90,25 L120,45 L150,25 L180,45 L210,25 L240,45 L270,25 L300,45 L330,25 L360,45 L390,25 L420,45 L450,25 L480,45 L510,25 L540,45 L570,25 L600,45 L630,25 L660,45 L690,25 L720,45 L750,25 L780,45 L810,25 L840,45 L870,25 L900,45 L930,25 L960,45 L990,25 L1020,45 L1050,25 L1080,45 L1110,25 L1140,45 L1170,25 L1200,45 L1230,25 L1260,45 L1290,25 L1320,45 L1350,25 L1380,45 L1410,25 L1440,45"
        />
      </svg>
    </div>
  );
};

export default ChemistryWatermarkBackground;
