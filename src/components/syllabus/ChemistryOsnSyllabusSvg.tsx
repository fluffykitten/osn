import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const ChemistryOsnSyllabusSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { activePalette } = useTheme();
  const { tokens } = activePalette;

  return (
    <div
      style={{
        backgroundColor: tokens.surface,
        borderColor: tokens.border,
      }}
      className={`w-full overflow-x-auto rounded-3xl border shadow-md p-4 sm:p-6 transition-colors duration-200 ${className}`}
    >
      <svg
        viewBox="0 0 1200 970"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[950px] select-none font-sans"
      >
        <defs>
          <linearGradient id="osnCardGradTheme" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor={tokens.surface} />
            <stop offset="1" stopColor={tokens.canvas} />
          </linearGradient>

          <filter id="osnCardShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.05" />
          </filter>
        </defs>

        {/* Outer Surface Background */}
        <rect x="0" y="0" width="1200" height="970" rx="20" fill={tokens.surface} />
        <path d="M 0 115 L 1200 115" stroke={tokens.border} strokeWidth="1.5" />
        <path d="M 0 930 L 1200 930" stroke={tokens.border} strokeWidth="1.5" />

        {/* Header Section */}
        <g transform="translate(40, 24)">
          <rect x="0" y="0" width="340" height="26" rx="13" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <circle cx="14" cy="13" r="4" fill={tokens.primary} />
          <text x="26" y="17" fill={tokens.primary} fontSize="10" fontWeight="700">
            PUSPRESNAS • BPTI • IChO CURRICULUM
          </text>

          <text x="0" y="52" fill={tokens.text} fontSize="23" fontWeight="900" letterSpacing="-0.5">
            Peta Kurikulum Terstruktur 10 Topik Silabus OSN Kimia
          </text>
          <text x="0" y="72" fill={tokens.textMuted} fontSize="12" fontWeight="500">
            Kurikulum olimpiade sains kimia berjenjang: OSK (Kab/Kota) → OSP (Provinsi) → OSN (Nasional) → IChO
          </text>
        </g>

        {/* Level Progression Bar */}
        <g transform="translate(680, 36)">
          <rect x="0" y="0" width="480" height="42" rx="12" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          
          <rect x="6" y="7" width="110" height="28" rx="8" fill={tokens.surface} stroke={tokens.border} strokeWidth="1" />
          <text x="61" y="25" fill={tokens.text} fontSize="11" fontWeight="800" textAnchor="middle">OSK (Kab/Kota)</text>

          <text x="123" y="25" fill={tokens.textMuted} fontSize="12" fontWeight="700">→</text>

          <rect x="135" y="7" width="100" height="28" rx="8" fill={tokens.surface} stroke={tokens.accent} strokeWidth="1" />
          <text x="185" y="25" fill={tokens.primary} fontSize="11" fontWeight="800" textAnchor="middle">OSP (Provinsi)</text>

          <text x="243" y="25" fill={tokens.textMuted} fontSize="12" fontWeight="700">→</text>

          <rect x="255" y="7" width="105" height="28" rx="8" fill={tokens.canvas} stroke={tokens.primary} strokeWidth="1.2" />
          <text x="307" y="25" fill={tokens.primary} fontSize="11" fontWeight="800" textAnchor="middle">OSN (Nasional)</text>

          <text x="367" y="25" fill={tokens.textMuted} fontSize="12" fontWeight="700">→</text>

          <rect x="378" y="7" width="96" height="28" rx="8" fill={tokens.primary} stroke={tokens.primary} strokeWidth="1" />
          <text x="426" y="25" fill={tokens.primaryText} fontSize="11" fontWeight="800" textAnchor="middle">IChO (Global)</text>
        </g>

        {/* 10 Topic Cards Grid (2 Columns x 5 Rows) */}

        {/* ROW 1 */}
        {/* Pillar 01 */}
        <g transform="translate(40, 132)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primary} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">01</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Struktur Atom & Periodisitas</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSK • OSP</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Mekanika Kuantum & Sifat Keperiodikan</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Model Schrödinger, Bilangan Kuantum & Spektrum Atom</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Konfigurasi Aufbau, Aturan Hund, dan Larangan Pauli</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Aturan Slater, Efek Perisai & Jari-Jari Ionik Efektif</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Tren periodik energi ionisasi, afinitas & elektronegativitas</text>
        </g>

        {/* Pillar 02 */}
        <g transform="translate(620, 132)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primary} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">02</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Ikatan Kimia & Geometri Molekul</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSK • OSP</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Struktur Molekul, Hibridisasi & MOT</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Teori VSEPR, Muatan Formal & Resonansi Struktur Lewis</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Hibridisasi sp, sp2, sp3, sp3d, sp3d2 serta momen dipol molekul</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Teori Orbital Molekul (MOT) Periode 2 & Padatan Kristal</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Diagram MOT homonuklir/heteronuklir & kisi kristal FCC/BCC</text>
        </g>

        {/* ROW 2 */}
        {/* Pillar 03 */}
        <g transform="translate(40, 292)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.accent} />
          <text x="33" y="38" fill={tokens.accentText} fontSize="15" fontWeight="900" textAnchor="middle">03</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Termodinamika Kimia</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSP • OSN</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Entalpi, Entropi & Energi Bebas Gibbs</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Hukum I, II, dan III Termodinamika: Usaha (w) & Kalor (q)</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Energi Dalam (ΔU), Kalorimetri Bom & Siklus Born-Haber</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Entropi (ΔS) & Energi Bebas Gibbs (ΔG = ΔH - TΔS)</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Kriteria kespontanan reaksi kimia & hubungan ΔG° = -RT ln Keq</text>
        </g>

        {/* Pillar 04 */}
        <g transform="translate(620, 292)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.accent} />
          <text x="33" y="38" fill={tokens.accentText} fontSize="15" fontWeight="900" textAnchor="middle">04</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Kinetika Kimia Lanjutan</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSP • OSN</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Hukum Laju Terintegrasi & Mekanisme</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Hukum Laju Reaksi Terintegrasi (Orde 0, 1, 2) & Waktu Paruh</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Grafik linearisasi kinetika & persamaan Arrhenius energi aktivasi</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Analisis Mekanisme Reaksi Bertahap & RDS</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Pendekatan Keadaan Tunak (Steady-State Approximation)</text>
        </g>

        {/* ROW 3 */}
        {/* Pillar 05 */}
        <g transform="translate(40, 452)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primary} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">05</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Kesetimbangan Kimia Kompleks</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSK • OSP</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Kesetimbangan Fasa & Termodinamika</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Tetapan Kesetimbangan Kc, Kp, Kx & Kuosien Reaksi (Q)</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Hubungan Kp = Kc(RT)^Δn dan kesetimbangan homogen/heterogen</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Persamaan van 't Hoff & Asas Le Chatelier Kuantitatif</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Pergeseran kesetimbangan akibat suhu, tekanan, volume & gas inert</text>
        </g>

        {/* Pillar 06 */}
        <g transform="translate(620, 452)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primary} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">06</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Asam-Basa & Kesetimbangan Kelarutan</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSK • OSP</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Sistem Poliprotik, Buffer Kompleks & Ksp</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Sistem Asam Poliprotik & Diagram Distribusi Spesies (α)</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Perhitungan pH larutan amfoter, hidrolisis & kapasitas buffer (β)</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Kelarutan, Efek Ion Senama & Pengendapan Fraksional</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Kurva titrasi asam-basa & pembentukan ion kompleks terlarut</text>
        </g>

        {/* ROW 4 */}
        {/* Pillar 07 */}
        <g transform="translate(40, 612)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primaryHover} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">07</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Elektrokimia & Reaksi Redoks</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSP • OSN</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Persamaan Nernst & Diagram Redoks</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Penyetaraan Reaksi Redoks Kompleks dalam Berbagai Suasana</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Persamaan Nernst: E = E° - (RT/nF) ln Q pada sel konsentrasi</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Diagram Latimer, Diagram Frost & Diagram Pourbaix</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Reaksi disproporsionasi, komproporsionasi & sel elektrolisis</text>
        </g>

        {/* Pillar 08 */}
        <g transform="translate(620, 612)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primaryHover} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">08</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Kimia Organik & Stereokimia</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSN • IChO</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Kiralitas, Spasial & Mekanisme Reaksi</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Stereokimia Kiralitas (R/S CIP rules, E/Z, Proyeksi Fischer)</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Konformasi kursi sikloheksana & efek aksial/ekuatorial substituen</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Mekanisme Reaksi Inti: SN1, SN2, E1, E2 & Adisi Elektrofilik</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Senyawa karbonil, reaksi adisi nukleofilik & enolat</text>
        </g>

        {/* ROW 5 */}
        {/* Pillar 09 */}
        <g transform="translate(40, 772)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primary} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">09</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Kimia Anorganik & Koordinasi</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSN • IChO</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Kompleks Logam Transisi & Teori Medan</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Nomenklatur Senyawa Kompleks & Bilangan Koordinasi</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Geometri oktahedral, tetrahedral, bujursangkar & isomerisme optik</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Teori Medan Kristal (CFT), Deret Spektrokimia & Sifat Magnet</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Pemisahan orbital d (Δo, Δt), spin kompleks & efek Jahn-Teller</text>
        </g>

        {/* Pillar 10 */}
        <g transform="translate(620, 772)">
          <rect x="0" y="0" width="540" height="144" rx="16" fill="url(#osnCardGradTheme)" stroke={tokens.border} strokeWidth="1.2" filter="url(#osnCardShadow)" />
          <rect x="16" y="16" width="34" height="34" rx="10" fill={tokens.primary} />
          <text x="33" y="38" fill={tokens.primaryText} fontSize="15" fontWeight="900" textAnchor="middle">10</text>
          
          <text x="58" y="30" fill={tokens.text} fontSize="15" fontWeight="800">Kimia Analitik & Spektroskopi</text>
          <rect x="420" y="18" width="104" height="22" rx="6" fill={tokens.canvas} stroke={tokens.border} strokeWidth="1" />
          <text x="472" y="33" fill={tokens.primary} fontSize="10" fontWeight="700" textAnchor="middle">Level: OSN • IChO</text>
          <text x="58" y="47" fill={tokens.primary} fontSize="11" fontWeight="700">Elusidasi Struktur Molekul Modern</text>

          <text x="20" y="74" fill={tokens.text} fontSize="10.5" fontWeight="600">• Spektrofotometri UV-Vis: Hukum Beer-Lambert (A = εbc)</text>
          <text x="28" y="90" fill={tokens.textMuted} fontSize="10">Spektroskopi Inframerah (FTIR) untuk gugus fungsi organik</text>
          <text x="20" y="112" fill={tokens.text} fontSize="10.5" fontWeight="600">• Resonansi Magnetik Inti (1H-NMR & 13C-NMR)</text>
          <text x="28" y="128" fill={tokens.textMuted} fontSize="10">Pergeseran kimia (chemical shift), integrasi & pola spin (n+1)</text>
        </g>

        {/* Footer */}
        <g transform="translate(40, 944)">
          <text x="0" y="14" fill={tokens.textMuted} fontSize="11" fontWeight="500">
            Pusat Prestasi Nasional (Puspresnas) • Kurikulum Silabus Resmi BPTI & IChO • Platform OSN Kimia Mastery
          </text>
        </g>
      </svg>
    </div>
  );
};
