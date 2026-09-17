import React from 'react';

export const ChemistrySmaSyllabusSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-x-auto rounded-3xl bg-white border border-slate-200 shadow-lg p-4 sm:p-6 ${className}`}>
      <svg
        viewBox="0 0 1200 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[950px] select-none font-sans"
      >
        <defs>
          <linearGradient id="smaCardGradE" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#f0fdf4" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="smaCardGradF1" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#f0f9ff" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="smaCardGradF2" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#faf5ff" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>

          <filter id="smaCardShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.04" />
          </filter>
        </defs>

        {/* Outer White Background */}
        <rect x="0" y="0" width="1200" height="810" rx="20" fill="#ffffff" />
        <path d="M 0 105 L 1200 105" stroke="#f1f5f9" strokeWidth="1.5" />
        <path d="M 0 755 L 1200 755" stroke="#f1f5f9" strokeWidth="1.5" />

        {/* Header Section */}
        <g transform="translate(40, 24)">
          <rect x="0" y="0" width="340" height="26" rx="13" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <circle cx="14" cy="13" r="4" fill="#10b981" />
          <text x="26" y="17" fill="#047857" fontSize="10" fontWeight="700">
            KURIKULUM MERDEKA • KEMENDIKBUDRISTEK
          </text>

          <text x="0" y="52" fill="#0f172a" fontSize="23" fontWeight="900" letterSpacing="-0.5">
            Peta Silabus Kimia SMA — Fase E (Kelas 10) & Fase F (Kelas 11–12)
          </text>
          <text x="0" y="72" fill="#64748b" fontSize="12" fontWeight="500">
            Fondasi esensial materi kimia sekolah menengah sebelum melangkah ke jenjang Olimpiade Sains Nasional (OSN)
          </text>
        </g>

        {/* COLUMN 1: FASE E (KELAS 10) */}
        <g transform="translate(40, 118)">
          <rect x="0" y="0" width="360" height="625" rx="18" fill="#f8fafc" stroke="#10b981" strokeWidth="1.5" />

          {/* Phase E Header Badge */}
          <rect x="18" y="16" width="135" height="28" rx="8" fill="#059669" />
          <text x="85" y="34" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">
            FASE E (KELAS 10)
          </text>
          <text x="165" y="34" fill="#047857" fontSize="11" fontWeight="700">
            Fondasi & Kimia Hijau
          </text>

          {/* Card 1 */}
          <g transform="translate(18, 56)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradE)" stroke="#86efac" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#059669" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">1</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Metode Ilmiah & Keselamatan Lab</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Simbol bahaya lab & lembar MSDS,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">tahap eksperimen & keselamatan lab</text>
          </g>

          {/* Card 2 */}
          <g transform="translate(18, 148)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradE)" stroke="#86efac" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#059669" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">2</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Kimia Hijau (Green Chemistry)</text>
            <text x="18" y="45" fill="#334155" fontSize="10">12 Prinsip kimia hijau, atom ekonomi,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">pencegahan limbah B3 & reduksi polusi</text>
          </g>

          {/* Card 3 */}
          <g transform="translate(18, 240)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradE)" stroke="#86efac" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#059669" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">3</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Struktur Atom & Tabel Periodik</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Partikel subatomik (p, n, e), notasi,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">konfigurasi elektron & tabel periodik</text>
          </g>

          {/* Card 4 */}
          <g transform="translate(18, 332)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradE)" stroke="#86efac" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#059669" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">4</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Hukum-Hukum Dasar Kimia</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Lavoisier, Proust, Dalton, Gay-Lussac,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">dan Hipotesis Avogadro volume gas</text>
          </g>

          {/* Card 5 */}
          <g transform="translate(18, 424)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradE)" stroke="#86efac" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#059669" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">5</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Tata Nama & Persamaan Reaksi</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Tata nama senyawa biner & poliatom,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">penyetaraan koefisien & wujud zat</text>
          </g>

          {/* Card 6 */}
          <g transform="translate(18, 516)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradE)" stroke="#86efac" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#059669" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">6</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Perhitungan Kimia & Mol Dasar</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Konsep mol, massa molar (Mr) zat,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">volume molar & persentase massa unsur</text>
          </g>
        </g>

        {/* COLUMN 2: FASE F (KELAS 11) */}
        <g transform="translate(420, 118)">
          <rect x="0" y="0" width="360" height="625" rx="18" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />

          {/* Phase F Part 1 Header Badge */}
          <rect x="18" y="16" width="135" height="28" rx="8" fill="#0284c7" />
          <text x="85" y="34" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">
            FASE F (KELAS 11)
          </text>
          <text x="165" y="34" fill="#0369a1" fontSize="11" fontWeight="700">
            Kimia Fisik & Analitik
          </text>

          {/* Card 7 */}
          <g transform="translate(18, 56)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF1)" stroke="#93c5fd" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#0284c7" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">7</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Stoikiometri & Larutan Lanjut</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Molaritas, pengenceran larutan,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">pereaksi pembatas & rendemen hasil</text>
          </g>

          {/* Card 8 */}
          <g transform="translate(18, 148)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF1)" stroke="#93c5fd" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#0284c7" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">8</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Ikatan Kimia & Geometri VSEPR</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Ikatan kovalen, hibridisasi orbital,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">teori VSEPR & gaya antarmolekul</text>
          </g>

          {/* Card 9 */}
          <g transform="translate(18, 240)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF1)" stroke="#93c5fd" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#0284c7" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">9</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Termokimia & Kalorimetri</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Entalpi reaksi (ΔH), Hukum Hess,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">kalorimeter & energi ikatan rata-rata</text>
          </g>

          {/* Card 10 */}
          <g transform="translate(18, 332)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF1)" stroke="#93c5fd" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#0284c7" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">10</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Kinetika Reaksi Kimia</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Hukum laju, orde reaksi (0, 1, 2),</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">teori tumbukan, suhu & peran katalis</text>
          </g>

          {/* Card 11 */}
          <g transform="translate(18, 424)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF1)" stroke="#93c5fd" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#0284c7" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">11</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Kesetimbangan Kimia</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Tetapan kesetimbangan (Kc & Kp),</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">dan asas pergeseran Le Chatelier</text>
          </g>

          {/* Card 12 */}
          <g transform="translate(18, 516)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF1)" stroke="#93c5fd" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#0284c7" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">12</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Asam-Basa, Buffer & Kelarutan</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Teori asam-basa, pH, larutan buffer,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">hidrolisis garam, titrasi & Ksp</text>
          </g>
        </g>

        {/* COLUMN 3: FASE F (KELAS 12) */}
        <g transform="translate(800, 118)">
          <rect x="0" y="0" width="360" height="625" rx="18" fill="#f8fafc" stroke="#7c3aed" strokeWidth="1.5" />

          {/* Phase F Part 2 Header Badge */}
          <rect x="18" y="16" width="135" height="28" rx="8" fill="#7c3aed" />
          <text x="85" y="34" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">
            FASE F (KELAS 12)
          </text>
          <text x="165" y="34" fill="#6d28d9" fontSize="11" fontWeight="700">
            Redoks & Karbon Organik
          </text>

          {/* Card 13 */}
          <g transform="translate(18, 56)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF2)" stroke="#d8b4fe" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#7c3aed" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">13</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Sifat Koligatif Larutan</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Tekanan uap (ΔP), titik beku (ΔTf),</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">titik didih (ΔTb) & faktor van 't Hoff</text>
          </g>

          {/* Card 14 */}
          <g transform="translate(18, 148)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF2)" stroke="#d8b4fe" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#7c3aed" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">14</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Redoks & Elektrokimia</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Penyetaraan redoks, sel Volta & E°,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">hukum Faraday & reaksi elektrolisis</text>
          </g>

          {/* Card 15 */}
          <g transform="translate(18, 240)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF2)" stroke="#d8b4fe" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#7c3aed" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">15</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Gugus Fungsi Senyawa Karbon</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Alkohol, eter, aldehid, keton, asam,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">ester & haloalkana: isomer & reaksi</text>
          </g>

          {/* Card 16 */}
          <g transform="translate(18, 332)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF2)" stroke="#d8b4fe" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#7c3aed" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">16</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Benzena & Senyawa Aromatik</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Struktur cincin aromatik & resonansi,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">substitusi benzena & isomer o-m-p</text>
          </g>

          {/* Card 17 */}
          <g transform="translate(18, 424)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="url(#smaCardGradF2)" stroke="#d8b4fe" strokeWidth="1" filter="url(#smaCardShadow)" />
            <circle cx="20" cy="22" r="10" fill="#7c3aed" />
            <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">17</text>
            <text x="38" y="23" fill="#0f172a" fontSize="12" fontWeight="700">Makromolekul & Biokimia</text>
            <text x="18" y="45" fill="#334155" fontSize="10">Polimer adisi/kondensasi, karbohidrat,</text>
            <text x="18" y="63" fill="#64748b" fontSize="9.5">asam amino, struktur protein & lipid</text>
          </g>

          {/* Card 18: Bridge */}
          <g transform="translate(18, 516)">
            <rect x="0" y="0" width="324" height="82" rx="12" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.2" />
            <text x="18" y="25" fill="#6b21a8" fontSize="11.5" fontWeight="800">🚀 Titik Lompat Menuju Olimpiade</text>
            <text x="18" y="45" fill="#4c1d95" fontSize="10">Penguasaan tuntas materi Fase E & F</text>
            <text x="18" y="63" fill="#7c3aed" fontSize="9.5" fontWeight="700">Prasyarat mutlak 10 Topik Silabus OSN</text>
          </g>
        </g>

        {/* Footer info */}
        <g transform="translate(40, 775)">
          <text x="0" y="16" fill="#94a3b8" fontSize="11" fontWeight="500">
            Diagram Silabus Kimia SMA Resmi Kurikulum Merdeka • Dirancang Khusus untuk OSN Kimia Mastery
          </text>
        </g>
      </svg>
    </div>
  );
};
