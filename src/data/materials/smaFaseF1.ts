import type { SmaMaterialItem } from '../smaMaterialsData';
import { CHECKPOINTS_FASE_F1 } from '../checkpoints/index.ts';
import { WORKED_EXAMPLES_TOPIC_106 } from './smaWorkedExamplesFaseF1.ts';

const BASE_SMA_MATERIALS_FASE_F1: SmaMaterialItem[] = [
  {
  id: 106,
  topic_number: 6,
  grade: 'Kelas 11',
  semester: 1,
  curriculumPhase: 'Fase F',
  relatedOsnTopicId: 4,
  title: 'Termokimia SMA (Entalpi, Kalorimetri, Hukum Hess & Energi Ikatan)',
  slug: 'termokimia-sma-entalpi-hukum-hess',
  category: 'Kimia Fisik',
  level: 'SMA',
  readTimeMinutes: 35,
  summary: 'Kajian komprehensif termodinamika kimia SMA: sistem dan lingkungan, fungsi keadaan entalpi (H), reaksi eksoterm vs endoterm, diagram tingkat energi dan profil koordinat reaksi, eksperimen kalorimetri sederhana dan bom (q = mcΔT + CΔT), macam-macam entalpi molar standar (ΔHf°, ΔHd°, ΔHc°, ΔHn°), penentuan ΔH melalui Hukum Hess (siklus reaksi dan aljabar persamaan), serta perhitungan ΔH dari data energi ikatan rata-rata kovalen.',
  allTags: [
      'termokimia',
      'sistem-lingkungan',
      'eksoterm-endoterm',
      'diagram-tingkat-energi',
      'kalorimetri',
      'hukum-hess',
      'entalpi-pembentukan-standar',
      'energi-ikatan-rata-rata',
      'hukum-pertama',
      'energi-dalam',
      'kerja-pv',
      'konvensi-iupac',
      'persamaan-termokimia',
      'alotrop-stabil',
      'wujud-standar',
      'kalorimetri-larutan',
      'entalpi-netralisasi',
      'asas-black',
      'reaksi-eksoterm',
      'kalorimetri-spiritus',
      'pembakaran-etanol',
      'efisiensi-termal',
      'analisis-galat',
      'entalpi-pembakaran',
      'data-entalpi-pembentukan',
      'propana-lpg',
      'asetilena',
      'entalpi-pembentukan',
      'penjumlahan-reaksi',
      'energi-ikatan',
      'hidrogenasi',
      'etena-etana',
      'entalpi-fasa-gas',
      'konversi-joule',
      'ekspansi-gas',
      'entropi-standar',
      'sintesis-amonia',
      'derajat-keacakan',
      'perubahan-mol-gas',
      'energi-bebas-gibbs',
      'temperatur-transisi',
      'kespontanan-reaksi',
      'dekomposisi-karbonat',
      'kalorimeter-bom',
      'energi-dalam-delta-u',
      'koreksi-delta-h',
      'asam-benzoat',
      'alotrop-karbon',
      'grafit-intan',
      'metastabilitas',
      'energi-aktivasi',
      'gibbs-standar',
      'atomisasi',
      'siklus-termokimia',
      'metana',
      'kalsinasi-caco3',
      'gibbs-kespontanan',
      'batu-kapur',
      'tetapan-kp',
      'energi-gibbs-kesetimbangan',
      'kuosien-reaksi-qp',
      'haber-bosch',
      'persamaan-van-t-hoff',
      'kesetimbangan-kp',
      'temperatur-ketergantungan',
      'entalpi-reaksi',
      'hukum-kirchhoff',
      'kapasitas-kalor-cp',
      'entalpi-temperatur',
      'hcl-sintesis',
      'kerja-reversibel',
      'kerja-ireversibel',
      'ekspansi-isotermal',
      'entropi-semesta',
      'clausius-clapeyron',
      'entalpi-penguapan',
      'tekanan-uap-jenuh',
      'titik-didih-normal',
      'diagram-ellingham',
      'reduksi-karbotermal',
      'entropi-gas-co',
      'metalurgi-ekstraksi',
      'siklus-born-haber',
      'energi-kisi',
      'persamaan-kapustinskii',
      'polarisasi-fajans',
      'mgcl2',
      'disosiasi-gas',
      'n2o4-no2',
      'potensial-kimia',
      'energi-gibbs-campuran',
      'derajat-disosiasi',
      'efek-joule-thomson',
      'temperatur-inversi',
      'gas-van-der-waals',
      'proses-isentalpik',
      'hukum-ketiga-termodinamika',
      'entropi-residual',
      'statistik-boltzmann',
      'entropi-mutlak',
      'teorema-nernst',
      'proses-kroll',
      'titanium-klorinasi',
      'gas-argon',
    ],
  prerequisites: [
    {
      tag: 'prasyarat-asas-kekekalan-energi',
      title: 'Prasyarat 1: Asas Black, Kalor Jenis & Hukum I Termodinamika',
      summary: 'Fondasi perpindahan kalor fisika, kalor jenis zat, kapasitas kalor, dan asas kekekalan energi.',
      content: `Termokimia merupakan cabang kimia fisik yang mempelajari perubahan energi panas (kalor) yang menyertai suatu reaksi kimia atau perubahan wujud materi. Sebelum melangkah ke konsep entalpi, penting untuk menguasai fondasi kekekalan energi:

### 1. Hukum Pertama Termodinamika (Kekekalan Energi)
Energi tidak dapat diciptakan maupun dimusnahkan oleh proses alam biasa; energi hanya dapat diubah dari satu bentuk energi ke bentuk energi lainnya. Total energi di alam semesta bernilai konstan:
$$\\Delta E_{\\text{alam semesta}} = \\Delta E_{\\text{sistem}} + \\Delta E_{\\text{lingkungan}} = 0$$

Secara matematis untuk suatu sistem tertutup:
$$\\mathbf{\\Delta U = q + w}$$
- $\\Delta U$: Perubahan energi dalam sistem (*internal energy*).
- $q$: Kalor yang diserap ($q > 0$) atau dilepaskan ($q < 0$) oleh sistem.
- $w$: Kerja yang diterima ($w > 0$) atau dilakukan ($w < 0$) oleh sistem terhadap lingkungan. Pada tekanan luar konstan ($P_{\\text{ext}}$), kerja ekspansi gas dinyatakan: $w = -P_{\\text{ext}} \\Delta V$.

---

### 2. Formulasi Kalor Jenis & Kapasitas Kalor (Asas Black)
Jumlah energi kalor ($q$) yang diperlukan untuk menaikkan suhu suatu benda bergantung pada massa ($m$), kalor jenis ($c$), atau kapasitas kalor benda ($C$):
$$q = m \\cdot c \\cdot \\Delta T \\quad \\text{atau} \\quad q = C \\cdot \\Delta T$$

| Besaran Fisika | Simbol | Satuan SI | Keterangan Standar Air |
| :--- | :---: | :---: | :--- |
| **Massa Zat** | $m$ | $\\text{gram (g)}$ | Massa larutan dalam beker/kalorimeter. |
| **Kalor Jenis Air** | $c$ | $\\text{J}/(\\text{g}\\cdot^\\circ\\text{C})$ | $c_{\\text{air}} = 4.184\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C}) = 1.00\\text{ kal}/(\\text{g}\\cdot^\\circ\\text{C})$. |
| **Perubahan Suhu** | $\\Delta T$ | $^\\circ\\text{C}$ atau $\\text{K}$ | $\\Delta T = T_{\\text{akhir}} - T_{\\text{awal}}$. |
| **Kapasitas Kalor** | $C$ | $\\text{J}/^\\circ\\text{C}$ | $C = m \\cdot c$ (kemampuan kalor seluruh wadah/bejana). |

*Asas Black menyatakan bahwa dalam sistem pertukaran panas yang terisolasi sempurna:*
$$q_{\\text{lepas}} = q_{\\text{serap}}$$`,
    },
    {
      tag: 'prasyarat-stoikiometri-entalpi',
      title: 'Prasyarat 2: Hubungan Mol dengan Persamaan Termokimia',
      summary: 'Mengaitkan koefisien reaksi kimia dengan kuantitas energi molar (kJ/mol).',
      content: `Persamaan termokimia adalah persamaan reaksi kimia yang menyertakan wujud zat (*state of matter*: $s, l, g, aq$) dan nilai perubahan entalpi ($\\Delta H$) yang bersesuaian dengan koefisien stoikiometrinya.

### Prinsip Stoikiometri Termokimia:
1. **Koefisien Stoikiometri Menyatakan Jumlah Mol:**
   Nilai $\\Delta H$ yang tertulis di sebelah kanan persamaan reaksi berbanding lurus dengan jumlah mol reaktan dan produk sesuai koefisiennya.
   $$\\ce{2 H2(g) + O2(g) -> 2 H2O(l)} \\quad \\Delta H = -571.6\\text{ kJ}$$
   Artinya:
   - Pembakaran $2\\text{ mol } \\ce{H2(g)}$ membebaskan kalor $571.6\\text{ kJ}$.
   - Pembakaran $1\\text{ mol } \\ce{H2(g)}$ membebaskan kalor $\\frac{571.6}{2} = 285.8\\text{ kJ}$.

2. **Aturan Manipulasi Aljabar Persamaan Termokimia:**
   - Jika reaksi **dibalik arahnya**, tanda $\\Delta H$ berubah tanda ($+ \\leftrightarrow -$):
     $$\\ce{2 H2O(l) -> 2 H2(g) + O2(g)} \\quad \\Delta H = +571.6\\text{ kJ}$$
   - Jika koefisien reaksi **dikalikan faktor $x$**, nilai $\\Delta H$ juga dikalikan faktor $x$:
     $$\\ce{H2(g) + 1/2 O2(g) -> H2O(l)} \\quad \\Delta H = \\frac{-571.6}{2} = -285.8\\text{ kJ}$$
   - Jika koefisien reaksi **dibagi faktor $y$**, nilai $\\Delta H$ juga dibagi faktor $y$.`,
    },
  ],
  core_concepts: [
    {
      tag: 'sistem-lingkungan-eksoterm-endoterm',
      tags: ['sistem-terbuka-tertutup-terisolasi', 'eksoterm-endoterm', 'profil-energi-reaksi', 'entalpi-h'],
      title: 'Konsep Inti 1: Sistem, Lingkungan & Profil Koordinat Energi (Eksoterm vs Endoterm)',
      summary: 'Klasifikasi batas termodinamika, fungsi keadaan entalpi pada tekanan tetap, serta visualisasi profil koordinat energi eksoterm dan endoterm.',
      content: `Dalam setiap kajian termodinamika, alam semesta dibagi menjadi dua komponen mutlak:
1. **Sistem (*System*):** Bagian dari alam semesta yang menjadi pusat perhatian dan pengamatan langsung kita (misalnya: campuran reaktan $\\ce{HCl}$ dan $\\ce{NaOH}$ di dalam beker).
2. **Lingkungan (*Surroundings*):** Segala sesuatu di luar sistem yang dapat berinteraksi dan bertukar energi atau materi dengan sistem (misalnya: dinding gelas beker, udara sekitar lab, termometer celup, dan tangan peneliti).

---

### 1. Tiga Klasifikasi Batas Sistem Termodinamika
- **Sistem Terbuka (*Open System*):** Dapat bertukar materi dan energi (panas) dengan lingkungan secara bebas (contoh: beker terbuka berisi air mendidih melepaskan uap air dan panas ke udara).
- **Sistem Tertutup (*Closed System*):** Hanya dapat bertukar energi (panas), namun materi tidak dapat keluar-masuk (contoh: labu Erlenmeyer tersumbat rapat berisi air panas).
- **Sistem Terisolasi (*Isolated System*):** Tidak memungkinkan terjadinya pertukaran materi maupun energi dengan lingkungan (contoh: termos air panas ideal atau kalorimeter bom dengan jaket vakum ganda).

---

### 2. Konsep Entalpi ($H$) pada Tekanan Konstan
Sebagian besar reaksi kimia di laboratorium sekolah berlangsung di wadah terbuka pada tekanan atmosfer yang tetap ($P = \\text{konstan}$).
Pada kondisi tekanan tetap:
$$q_p = \\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$$
Entalpi ($H$) adalah fungsi keadaan (*state function*), artinya perubahan nilai entalpi ($\\Delta H$) hanya bergantung pada keadaan awal reaktan dan keadaan akhir produk, tidak bergantung pada jalan atau lintasan proses tersebut tercapai.

---

### 3. Visualisasi Profil Koordinat Energi: Reaksi Eksoterm vs Endoterm

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="exoGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fee2e2"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <linearGradient id="endoGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#dc2626"/>
    </marker>
    <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#0284c7"/>
    </marker>
  </defs>

  <!-- Title Header -->
  <rect width="760" height="42" fill="#f8fafc" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">PROFIL KOORDINAT ENERGI: REAKSI EKSOTERM VS REAKSI ENDOTERM</text>

  <!-- SISI KIRI: REAKSI EKSOTERM -->
  <g transform="translate(25, 55)">
    <rect width="345" height="250" rx="10" fill="url(#exoGrad)" stroke="#fca5a5" stroke-width="1.2"/>
    <text x="172" y="24" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">1. REAKSI EKSOTERM (ΔH &lt; 0)</text>

    <!-- Sumbu Koordinat -->
    <line x1="45" y1="210" x2="315" y2="210" stroke="#64748b" stroke-width="1.5"/>
    <line x1="45" y1="210" x2="45" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <text x="315" y="224" font-size="8.5" fill="#64748b" text-anchor="end">Koordinat Reaksi</text>
    <text x="40" y="38" font-size="8.5" fill="#64748b" text-anchor="end">Entalpi (H)</text>

    <!-- Kurva Profil Eksoterm: Reaktan tinggi, Produk rendah -->
    <!-- Reaktan Plateau (y=110) -->
    <line x1="55" y1="110" x2="110" y2="110" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    <text x="82" y="102" font-size="9" font-weight="bold" fill="#b91c1c" text-anchor="middle">Reaktan</text>

    <!-- Puncak Energi Aktivasi -->
    <path d="M 110 110 Q 165 40, 220 170" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="165" cy="56" r="3.5" fill="#f59e0b"/>
    <text x="165" y="48" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">Keadaan Transisi [‡]</text>

    <!-- Produk Plateau (y=170) -->
    <line x1="220" y1="170" x2="285" y2="170" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
    <text x="252" y="162" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Produk</text>

    <!-- Garis Bantu & Panah ΔH -->
    <line x1="110" y1="110" x2="250" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="200" y1="110" x2="200" y2="170" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowRed)"/>
    <text x="208" y="142" font-size="8.5" font-weight="extrabold" fill="#dc2626">ΔH = H_p - H_r &lt; 0</text>

    <!-- Ringkasan Ciri Eksoterm -->
    <rect x="55" y="185" width="245" height="20" rx="4" fill="#ffffff" stroke="#fca5a5"/>
    <text x="177" y="198" font-size="8" font-weight="bold" fill="#991b1b" text-anchor="middle">🔥 Melepas Kalor ke Lingkungan (Suhu Lab Naik)</text>
  </g>

  <!-- SISI KANAN: REAKSI ENDOTERM -->
  <g transform="translate(390, 55)">
    <rect width="345" height="250" rx="10" fill="url(#endoGrad)" stroke="#93c5fd" stroke-width="1.2"/>
    <text x="172" y="24" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">2. REAKSI ENDOTERM (ΔH &gt; 0)</text>

    <!-- Sumbu Koordinat -->
    <line x1="45" y1="210" x2="315" y2="210" stroke="#64748b" stroke-width="1.5"/>
    <line x1="45" y1="210" x2="45" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <text x="315" y="224" font-size="8.5" fill="#64748b" text-anchor="end">Koordinat Reaksi</text>
    <text x="40" y="38" font-size="8.5" fill="#64748b" text-anchor="end">Entalpi (H)</text>

    <!-- Kurva Profil Endoterm: Reaktan rendah, Produk tinggi -->
    <!-- Reaktan Plateau (y=170) -->
    <line x1="55" y1="170" x2="110" y2="170" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    <text x="82" y="162" font-size="9" font-weight="bold" fill="#b91c1c" text-anchor="middle">Reaktan</text>

    <!-- Puncak Energi Aktivasi -->
    <path d="M 110 170 Q 165 40, 220 100" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="165" cy="56" r="3.5" fill="#f59e0b"/>
    <text x="165" y="48" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">Keadaan Transisi [‡]</text>

    <!-- Produk Plateau (y=100) -->
    <line x1="220" y1="100" x2="285" y2="100" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
    <text x="252" y="92" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Produk</text>

    <!-- Garis Bantu & Panah ΔH -->
    <line x1="110" y1="170" x2="250" y2="170" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="200" y1="170" x2="200" y2="100" stroke="#0284c7" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <text x="208" y="138" font-size="8.5" font-weight="extrabold" fill="#0284c7">ΔH = H_p - H_r &gt; 0</text>

    <!-- Ringkasan Ciri Endoterm -->
    <rect x="55" y="185" width="245" height="20" rx="4" fill="#ffffff" stroke="#93c5fd"/>
    <text x="177" y="198" font-size="8" font-weight="bold" fill="#0c4a6e" text-anchor="middle">❄ Menyerap Kalor dari Lingkungan (Suhu Lab Turun)</text>
  </g>
</svg>

---

### 4. Perbandingan Lengkap Reaksi Eksoterm vs Reaksi Endoterm

| Parameter Termodinamika | Reaksi Eksoterm (*Exothermic*) | Reaksi Endoterm (*Endothermic*) |
| :--- | :--- | :--- |
| **Arah Aliran Kalor** | Kalor berpindah dari **Sistem ke Lingkungan** | Kalor berpindah dari **Lingkungan ke Sistem** |
| **Tanda Nilai $\\Delta H$** | $\\mathbf{\\Delta H < 0}$ (Negatif) | $\\mathbf{\\Delta H > 0}$ (Positif) |
| **Tingkat Entalpi Zat** | $H_{\\text{produk}} < H_{\\text{reaktan}}$ (Produk lebih stabil) | $H_{\\text{produk}} > H_{\\text{reaktan}}$ (Reaktan lebih stabil) |
| **Efek Suhu Lingkungan** | **Suhu naik** ($T_{\\text{akhir}} > T_{\\text{awal}}$, wadah terasa panas) | **Suhu turun** ($T_{\\text{akhir}} < T_{\\text{awal}}$, wadah terasa dingin) |
| **Ikatan Kimia** | Energi pembentukan ikatan baru > energi pemutusan | Energi pemutusan ikatan reaktan > energi pembentukan |
| **Contoh Reaksi Nyata** | Pembakaran bahan bakar, respirasi seluler, pelarutan $\\ce{NaOH}$ padat dalam air, reaksi netralisasi asam-basa kuat. | Fotosintesis, peruraian termal $\\ce{CaCO3}$, pelarutan pupuk urea $\\ce{CO(NH2)2}$ atau $\\ce{NH4NO3}$ dalam air (*ice pack* instan). |`,
      keyFormulas: [
        { name: 'Perubahan Entalpi Reaksi', formula: '\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}' },
        { name: 'Hukum I Termodinamika', formula: '\\Delta U = q + w \\quad (w = -P \\Delta V)' },
        { name: 'Kriteria Eksoterm', formula: '\\Delta H < 0 \\iff H_{\\text{produk}} < H_{\\text{reaktan}}' },
        { name: 'Kriteria Endoterm', formula: '\\Delta H > 0 \\iff H_{\\text{produk}} > H_{\\text{reaktan}}' },
      ],
    },
    {
      tag: 'kalorimetri-larutan-dan-bom',
      tags: ['kalorimeter-styrofoam', 'kalorimeter-bom', 'perhitungan-q-larutan', 'penentuan-delta-h-eksperimen'],
      title: 'Konsep Inti 2: Kalorimetri Sederhana & Kalorimeter Bom (Eksperimen Penentuan Kalor Reaksi)',
      summary: 'Prinsip kerja eksperimental penentuan kalor reaksi menggunakan kalorimeter gelas plastik vs bejana bom terisolasi serta algoritma konversi q reaksi ke entalpi molar.',
      content: `Kalorimetri (*Calorimetry*) adalah metode eksperimental laboratorium untuk mengukur kuantitas kalor yang diserap atau dilepaskan selama reaksi kimia berlangsung dengan memantau perubahan suhu larutan.

### 1. Prinsip Kekekalan Kalor dalam Kalorimeter
Berdasarkan Asas Black, pada bejana yang terisolasi dari lingkungan luar:
$$q_{\\text{reaksi}} + q_{\\text{larutan}} + q_{\\text{kalorimeter}} = 0$$
$$\\mathbf{q_{\\text{reaksi}} = -(q_{\\text{larutan}} + q_{\\text{kalorimeter}})}$$

Di mana:
- **Kalor diserap larutan:** $q_{\\text{larutan}} = m_{\\text{total}} \\cdot c_{\\text{larutan}} \\cdot \\Delta T$
- **Kalor diserap wadah kalorimeter:** $q_{\\text{kalorimeter}} = C_{\\text{kal}} \\cdot \\Delta T$

---

### 2. Perbandingan Dua Tipe Kalorimeter Laboratorium

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="foamGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="bombSteel" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="liquidBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.85"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect width="760" height="42" fill="#f1f5f9" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">SKEMA KALORIMETER SEDERHANA (GELAS GABUS) VS KALORIMETER BOM BAJA</text>

  <!-- KIRI: KALORIMETER SEDERHANA -->
  <g transform="translate(30, 55)">
    <rect width="335" height="270" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">A. KALORIMETER SEDERHANA (TEKANAN KONSTAN)</text>

    <!-- Outer Styrofoam Cup -->
    <path d="M 95 240 L 115 110 L 220 110 L 240 240 Z" fill="url(#foamGrad)" stroke="#94a3b8" stroke-width="2"/>
    <!-- Inner Styrofoam Cup -->
    <path d="M 105 235 L 122 115 L 213 115 L 230 235 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <!-- Liquid Solution -->
    <path d="M 108 230 L 120 150 L 215 150 L 227 230 Z" fill="url(#liquidBlue)"/>
    <text x="167" y="195" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Larutan Reaksi (m, c)</text>

    <!-- Cork Lid -->
    <rect x="105" y="98" width="125" height="15" rx="3" fill="#fed7aa" stroke="#d97706" stroke-width="1.2"/>

    <!-- Thermometer -->
    <rect x="135" y="45" width="6" height="140" rx="2" fill="#ffffff" stroke="#ef4444" stroke-width="1.2"/>
    <circle cx="138" cy="180" r="5" fill="#ef4444"/>
    <line x1="138" y1="180" x2="138" y2="70" stroke="#ef4444" stroke-width="2"/>
    <text x="125" y="55" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="end">Termometer ΔT</text>

    <!-- Stirrer -->
    <path d="M 195 45 L 195 190 Q 185 200, 175 195" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
    <text x="205" y="55" font-size="8" font-weight="bold" fill="#475569">Pengaduk</text>

    <!-- Formula Box -->
    <rect x="25" y="225" width="285" height="35" rx="5" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="167" y="240" font-size="8.5" font-weight="bold" fill="#0369a1" text-anchor="middle">q_larutan = m · c · ΔT</text>
    <text x="167" y="253" font-size="8" fill="#64748b" text-anchor="middle">C_kalorimeter gabus umumnya diabaikan (≈ 0)</text>
  </g>

  <!-- KANAN: KALORIMETER BOM -->
  <g transform="translate(395, 55)">
    <rect width="335" height="270" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">B. KALORIMETER BOM (VOLUME KONSTAN)</text>

    <!-- Outer Insulated Tank -->
    <rect x="65" y="70" width="205" height="175" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
    <!-- Water Bath Inside -->
    <rect x="75" y="95" width="185" height="142" rx="4" fill="url(#liquidBlue)"/>
    <text x="167" y="112" font-size="8.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Bak Air Perendam Kalorimeter</text>

    <!-- Heavy Steel Bomb Chamber in Center -->
    <rect x="125" y="130" width="85" height="95" rx="8" fill="url(#bombSteel)" stroke="#334155" stroke-width="2"/>
    <!-- Combustion Cup Inside Bomb -->
    <rect x="150" y="185" width="35" height="22" rx="3" fill="#fef08a" stroke="#ca8a04"/>
    <circle cx="167" cy="195" r="4" fill="#ea580c"/>
    <text x="167" y="152" font-size="7.5" font-weight="bold" fill="#ffffff" text-anchor="middle">BEJANA BOM</text>
    <text x="167" y="162" font-size="6.5" fill="#e2e8f0" text-anchor="middle">Oksigen Murni 30 atm</text>

    <!-- Ignition Wires -->
    <path d="M 155 50 L 155 185" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <path d="M 175 50 L 175 185" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="167" y="46" font-size="7.5" font-weight="bold" fill="#334155" text-anchor="middle">Kawat Pengapian Elektrik</text>

    <!-- Formula Box -->
    <rect x="25" y="225" width="285" height="35" rx="5" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="167" y="239" font-size="8.5" font-weight="bold" fill="#1e40af" text-anchor="middle">q_reaksi = -(m_air·c·ΔT + C_bom·ΔT)</text>
    <text x="167" y="253" font-size="8" fill="#64748b" text-anchor="middle">Khusus pembakaran bahan bakar &amp; nilai kalori makanan</text>
  </g>
</svg>

---

### 3. Algoritma 4 Langkah Penentuan $\\Delta H$ Reaksi dari Data Kalorimeter
Untuk menyelesaikan soal kalorimeter sederhana di ujian SMA, gunakan urutan baku berikut:
1. **Langkah 1 (Massa Total Larutan):**
   $$m_{\\text{total}} = \\rho \\times V_{\\text{total}} \\quad (\\text{asumsi } \\rho_{\\text{larutan}} \\approx 1.0\\text{ g/mL})$$
2. **Langkah 2 (Menghitung Kalor yang Terlibat):**
   $$q_{\\text{larutan}} = m_{\\text{total}} \\cdot c \\cdot (T_{\\text{akhir}} - T_{\\text{awal}})$$
   $$q_{\\text{reaksi}} = -q_{\\text{larutan}}$$
3. **Langkah 3 (Menghitung Mol Pereaksi Pembatas):**
   $$n = M \\times V(\\text{Liter})$$
4. **Langkah 4 (Menghitung Entalpi Reaksi Molar):**
   $$\\mathbf{\\Delta H = \\frac{q_{\\text{reaksi}}}{n}} \\quad (\\text{dalam satuan kJ/mol})$$`,
      keyFormulas: [
        { name: 'Kalor Larutan', formula: 'q_{\\text{larutan}} = m \\cdot c \\cdot \\Delta T' },
        { name: 'Kalor Wadah Kalorimeter', formula: 'q_{\\text{kal}} = C_{\\text{kal}} \\cdot \\Delta T' },
        { name: 'Hukum Kekekalan Kalorimeter', formula: 'q_{\\text{reaksi}} = -(q_{\\text{larutan}} + q_{\\text{kal}})' },
        { name: 'Entalpi Reaksi Molar', formula: '\\Delta H = \\frac{q_{\\text{reaksi}}}{n}' },
      ],
    },
    {
      tag: 'macam-macam-entalpi-standar',
      tags: ['entalpi-pembentukan-dhf', 'entalpi-penguraian-dhd', 'entalpi-pembakaran-dhc', 'entalpi-netralisasi-dhn'],
      title: 'Konsep Inti 3: Macam-Macam Perubahan Entalpi Standar (ΔH°)',
      summary: 'Definisi baku dan syarat stoikiometri entalpi pembentukan (ΔHf°), penguraian (ΔHd°), pembakaran (ΔHc°), dan rumus penentuan ΔH reaksi dari data ΔHf°.',
      content: `Kondisi standar termokimia disepakati internasional pada suhu $298.15\\text{ K} (25^\\circ\\text{C})$ dan tekanan $1\\text{ atm} (101.325\\text{ kPa})$. Perubahan entalpi yang diukur pada kondisi ini diberi simbol superskrip derajat ($\\Delta H^\\circ$).

### 1. Empat Jenis Entalpi Standar Molar Fundamental di SMA

#### A. Entalpi Pembentukan Standar ($\\Delta H_f^\\circ$ / *Standard Enthalpy of Formation*)
Kalor yang diserap atau dilepas pada **pembentukan tepat 1 mol senyawa** langsung dari **unsur-unsur pembentuknya yang paling stabil** di alam pada kondisi standar.
- **Ciri Khas Persamaan Termokimia:** Koefisien produk senyawa harus tepat bernilai $1$.
- Contoh: Pembentukan 1 mol $\\ce{CO2(g)}$ dari karbon grafit dan gas oksigen:
  $$\\ce{C(s, grafit) + O2(g) -> CO2(g)} \\quad \\Delta H_f^\\circ = -393.5\\text{ kJ/mol}$$
- **Aturan Emas Konvensi:** Nilai $\\Delta H_f^\\circ$ untuk seluruh unsur bebas dalam bentuk alotrop paling stabilnya bernilai **NOL (0)**.
  $$\\Delta H_f^\\circ[\\ce{O2(g)}] = 0, \\quad \\Delta H_f^\\circ[\\ce{N2(g)}] = 0, \\quad \\Delta H_f^\\circ[\\ce{H2(g)}] = 0, \\quad \\Delta H_f^\\circ[\\ce{C(grafit)}] = 0, \\quad \\Delta H_f^\\circ[\\ce{Na(s)}] = 0$$
  *(Peringatan: Untuk alotrop yang tidak paling stabil, nilainya bukan nol, misalnya $\\Delta H_f^\\circ[\\ce{C(intan)}] = +1.9\\text{ kJ/mol}$, $\\Delta H_f^\\circ[\\ce{O3(g)}] = +142.7\\text{ kJ/mol}$).*

#### B. Entalpi Penguraian Standar ($\\Delta H_d^\\circ$ / *Standard Enthalpy of Decomposition*)
Kalor yang menyertai **penguraian tepat 1 mol senyawa** menjadi unsur-unsur pembentuknya pada kondisi standar. Merupakan kebalikan eksak dari $\\Delta H_f^\\circ$:
$$\\mathbf{\\Delta H_d^\\circ = -\\Delta H_f^\\circ}$$
- Contoh penguraian 1 mol gas $\\ce{NH3(g)}$:
  $$\\ce{NH3(g) -> 1/2 N2(g) + 3/2 H2(g)} \\quad \\Delta H_d^\\circ = +46.1\\text{ kJ/mol}$$
  *(Karena $\\Delta H_f^\\circ \\ce{NH3(g)} = -46.1\\text{ kJ/mol}$)*.

#### C. Entalpi Pembakaran Standar ($\\Delta H_c^\circ$ / *Standard Enthalpy of Combustion*)
Kalor yang dilepaskan pada **pembakaran sempurna tepat 1 mol zat (unsur atau senyawa)** dengan gas oksigen $\\ce{O2(g)}$ pada kondisi standar.
- **Ciri Khas:** Nilai $\\Delta H_c^\\circ$ selalu **bernilai negatif (eksoterm)**. Koefisien zat yang dibakar wajib $1$.
- Pembakaran sempurna hidrokarbon selalu menghasilkan $\\ce{CO2(g)}$ dan $\\ce{H2O(l)}$.
- Contoh pembakaran gas metana:
  $$\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)} \\quad \\Delta H_c^\\circ = -890.3\\text{ kJ/mol}$$

#### D. Entalpi Netralisasi Standar ($\\Delta H_n^\\circ$ / *Standard Enthalpy of Neutralization*)
Kalor yang dilepaskan pada reaksi netralisasi asam oleh basa yang menghasilkan **tepat 1 mol air ($\\ce{H2O}$)** pada kondisi standar.
- Reaksi esensial: $\\ce{H+(aq) + OH-(aq) -> H2O(l)}$
- Untuk seluruh reaksi antara **asam kuat dan basa kuat**, nilai $\\Delta H_n^\\circ$ selalu relatif konstan yaitu sekitar:
  $$\\Delta H_n^\\circ \\approx -57.1\\text{ s.d. } -57.3\\text{ kJ/mol}$$

---

### 2. Rumus Hukum Hess Berbasis Data $\\Delta H_f^\\circ$
Jika dalam suatu soal diketahui tabel entalpi pembentukan standar ($\\Delta H_f^\\circ$) dari reaktan dan produk, maka $\\Delta H$ reaksi dihitung melalui formula:
$$\\mathbf{\\Delta H^\\circ_{\\text{reaksi}} = \\sum n \\cdot \\Delta H_f^\\circ(\\text{Produk / Kanan}) - \\sum m \\cdot \\Delta H_f^\\circ(\\text{Reaktan / Kiri})}$$
*(di mana $n$ dan $m$ adalah koefisien stoikiometri dari masing-masing zat).*`,
      keyFormulas: [
        { name: 'Rumus ΔH dari Data ΔHf°', formula: '\\Delta H^\\circ = \\sum n \\cdot \\Delta H_f^\\circ(\\text{produk}) - \\sum m \\cdot \\Delta H_f^\\circ(\\text{reaktan})' },
        { name: 'Hubungan ΔHd° dan ΔHf°', formula: '\\Delta H_d^\\circ = -\\Delta H_f^\\circ' },
        { name: 'Entalpi Unsur Murni Stabil', formula: '\\Delta H_f^\\circ(\\text{unsur bebas}) = 0' },
      ],
    },
    {
      tag: 'hukum-hess-dan-siklus-energi',
      tags: ['hukum-hess', 'siklus-reaksi-hess', 'diagram-tingkat-energi', 'manipulasi-persamaan-reaksi'],
      title: 'Konsep Inti 4: Hukum Hess (Siklus Reaksi & Diagram Tingkat Energi)',
      summary: 'Prinsip independensi lintasan fungsi keadaan, metode penjumlahan aljabar reaksi bertingkat, serta membaca siklus dan diagram tingkat energi.',
      content: `Pada tahun 1840, fisikawan kimiawan Swiss-Rusia **Germain Henri Hess** mempublikasikan temuan penting: *Perubahan entalpi suatu reaksi kimia hanya bergantung pada keadaan awal reaktan dan keadaan akhir produk, serta sama sekali tidak bergantung pada jalannya reaksi apakah berlangsung dalam satu tahap atau beberapa tahap bertingkat.*

---

### 1. Tiga Representasi Hukum Hess dalam Ujian SMA

#### A. Metode Aljabar Eliminasi Persamaan Termokimia
Aturan manipulasi aljabar persamaan reaksi:
1. Cocokkan posisi zat target: Jika zat target berada di ruas produk sedangkan pada reaksi perantara berada di ruas reaktan, **balik persamaan reaksi tersebut** (tanda $\\Delta H$ berbalik arah $+ \\leftrightarrow -$).
2. Sesuaikan koefisien: Jika koefisien zat target berbeda, **kalikan atau bagikan seluruh persamaan reaksi dan nilai $\\Delta H$-nya** dengan faktor pengali yang sama.
3. Jumlahkan reaksi: Zat perantara yang berada di ruas berlawanan dengan jumlah mol sama akan saling menghilangkan (*cancel out*).

---

### 2. Siklus Segitiga Hess & Diagram Tingkat Energi Pembentukan $\\ce{CO2}$

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <marker id="hessArr1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#0284c7"/>
    </marker>
    <marker id="hessArr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#16a34a"/>
    </marker>
    <marker id="hessArr3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#ea580c"/>
    </marker>
  </defs>

  <!-- Header -->
  <rect width="760" height="42" fill="#f8fafc" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">REPRESENTASI HUKUM HESS: SIKLUS REAKSI VS DIAGRAM TINGKAT ENERGI</text>

  <!-- KIRI: SIKLUS SEGITIGA HESS -->
  <g transform="translate(30, 55)">
    <rect width="335" height="250" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">A. SIKLUS SEGITIGA HESS</text>

    <!-- Node 1: Keadaan Awal (C + O2) -->
    <rect x="25" y="55" width="125" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="87" y="75" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">C(s) + O₂(g)</text>
    <text x="87" y="90" font-size="7.5" fill="#64748b" text-anchor="middle">Keadaan Awal</text>

    <!-- Node 2: Zat Perantara (CO + 1/2 O2) -->
    <rect x="185" y="55" width="125" height="45" rx="6" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
    <text x="247" y="75" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">CO(g) + ½ O₂(g)</text>
    <text x="247" y="90" font-size="7.5" fill="#64748b" text-anchor="middle">Tahap Intermediat</text>

    <!-- Node 3: Keadaan Akhir (CO2) -->
    <rect x="105" y="175" width="125" height="45" rx="6" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
    <text x="167" y="195" font-size="10" font-weight="bold" fill="#9a3412" text-anchor="middle">CO₂(g)</text>
    <text x="167" y="210" font-size="7.5" fill="#64748b" text-anchor="middle">Keadaan Akhir</text>

    <!-- Panah 1: Lintasan Langsung (Node 1 -> Node 3) -->
    <path d="M 75 105 L 125 170" fill="none" stroke="#0284c7" stroke-width="2.2" marker-end="url(#hessArr1)"/>
    <text x="65" y="148" font-size="8.5" font-weight="bold" fill="#0284c7" text-anchor="end">ΔH₁ = -393.5 kJ</text>

    <!-- Panah 2: Tahap 1 (Node 1 -> Node 2) -->
    <line x1="155" y1="77" x2="180" y2="77" stroke="#16a34a" stroke-width="2.2" marker-end="url(#hessArr2)"/>
    <text x="167" y="70" font-size="8" font-weight="bold" fill="#166534" text-anchor="middle">ΔH₂ = -110.5 kJ</text>

    <!-- Panah 3: Tahap 2 (Node 2 -> Node 3) -->
    <path d="M 245 105 L 205 170" fill="none" stroke="#ea580c" stroke-width="2.2" marker-end="url(#hessArr3)"/>
    <text x="250" y="148" font-size="8.5" font-weight="bold" fill="#ea580c">ΔH₃ = -283.0 kJ</text>

    <!-- Hukum Penjumlahan -->
    <text x="167" y="238" font-size="9" font-weight="extrabold" fill="#0f172a" text-anchor="middle">ΔH₁ = ΔH₂ + ΔH₃ = (-110.5) + (-283.0) = -393.5 kJ</text>
  </g>

  <!-- KANAN: DIAGRAM TINGKAT ENERGI HORISONTAL -->
  <g transform="translate(395, 55)">
    <rect width="335" height="250" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">B. DIAGRAM TINGKAT ENERGI (ENERGY LEVEL)</text>

    <!-- Sumbu Vertikal Entalpi H -->
    <line x1="45" y1="215" x2="45" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="45,35 41,45 49,45" fill="#64748b"/>
    <text x="40" y="45" font-size="8.5" font-weight="bold" fill="#64748b" text-anchor="end">Entalpi (H)</text>

    <!-- Tingkat 1: C + O2 (y=65) -->
    <line x1="60" y1="65" x2="190" y2="65" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
    <text x="65" y="58" font-size="9.5" font-weight="bold" fill="#1e40af">C(s) + O₂(g)</text>
    <text x="200" y="68" font-size="8.5" fill="#64748b">H = 0 kJ</text>

    <!-- Tingkat 2: CO + 1/2 O2 (y=125) -->
    <line x1="60" y1="125" x2="190" y2="125" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
    <text x="65" y="118" font-size="9.5" font-weight="bold" fill="#166534">CO(g) + ½ O₂(g)</text>
    <text x="200" y="128" font-size="8.5" fill="#64748b">H = -110.5 kJ</text>

    <!-- Tingkat 3: CO2 (y=200) -->
    <line x1="60" y1="200" x2="190" y2="200" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
    <text x="65" y="193" font-size="9.5" font-weight="bold" fill="#9a3412">CO₂(g)</text>
    <text x="200" y="203" font-size="8.5" fill="#64748b">H = -393.5 kJ</text>

    <!-- Panah Vertikal Tahap 1 (y=65 ke 125) -->
    <line x1="260" y1="68" x2="260" y2="120" stroke="#16a34a" stroke-width="2" marker-end="url(#hessArr2)"/>
    <text x="268" y="98" font-size="8" font-weight="bold" fill="#166534">ΔH₂ = -110.5 kJ</text>

    <!-- Panah Vertikal Tahap 2 (y=125 ke 200) -->
    <line x1="260" y1="128" x2="260" y2="195" stroke="#ea580c" stroke-width="2" marker-end="url(#hessArr3)"/>
    <text x="268" y="165" font-size="8" font-weight="bold" fill="#ea580c">ΔH₃ = -283.0 kJ</text>

    <!-- Panah Vertikal Langsung (y=65 ke 200) -->
    <line x1="165" y1="68" x2="165" y2="195" stroke="#0284c7" stroke-width="2.5" marker-end="url(#hessArr1)"/>
    <text x="155" y="135" font-size="8.5" font-weight="bold" fill="#0284c7" text-anchor="end">ΔH₁ = -393.5 kJ</text>
  </g>
</svg>`,
      keyFormulas: [
        { name: 'Prinsip Penjumlahan Hukum Hess', formula: '\\Delta H_{\\text{total}} = \\Delta H_1 + \\Delta H_2 + \\Delta H_3 + \\dots' },
        { name: 'Reaksi Pembalikan', formula: '\\Delta H_{\\text{balik}} = -\\Delta H_{\\text{maju}}' },
      ],
    },
    {
      tag: 'energi-ikatan-dan-entalpi-reaksi',
      tags: ['energi-ikatan-rata-rata', 'pemutusan-ikatan-endoterm', 'pembentukan-ikatan-eksoterm', 'struktur-lewis-termokimia'],
      title: 'Konsep Inti 5: Energi Ikatan Rata-Rata & Penentuan ΔH Reaksi',
      summary: 'Kajian pemutusan ikatan kovalen endotermik vs pembentukan ikatan eksotermik di fasa gas serta cara cepat perhitungan ΔH berbasis struktur Lewis.',
      content: `Reaksi kimia pada skala molekuler pada dasarnya adalah proses reorganisasi elektron: **pemutusan ikatan-ikatan kimia lama** pada molekul reaktan, diikuti dengan **pembentukan ikatan-ikatan kimia baru** yang menyusun molekul produk.

### 1. Definisi & Konvensi Energi Ikatan Rata-Rata ($D$)
Energi ikatan ($D$ / *Bond Energy*) adalah energi yang dibutuhkan untuk **memutuskan 1 mol ikatan kovalen tertentu** dalam fasa gas menjadi atom-atom netral pada kondisi standar.
- Memutuskan ikatan kimia **selalu membutuhkan energi** $\\implies$ **Proses Endoterm ($\\Delta H > 0$)**.
- Membentuk ikatan kimia **selalu membebaskan energi** $\\implies$ **Proses Eksoterm ($\\Delta H < 0$)**.
- Nilai energi ikatan dalam tabel selalu dicantumkan bertanda **positif (+)**.

---

### 2. Rumus Menghitung $\\Delta H$ Berbasis Data Energi Ikatan
Perubahan entalpi reaksi dihitung dari selisih energi pemutusan ikatan reaktan dikurangi energi pembentukan ikatan produk:
$$\\mathbf{\\Delta H = \\sum D(\\text{Ikatan Putus / Ruas Kiri}) - \\sum D(\\text{Ikatan Terbentuk / Ruas Kanan})}$$

> **Jembatan Keledai Siswa SMA:**
> - Jika menggunakan data **$\\Delta H_f^\\circ$**: $\\Delta H = \\mathbf{\\text{Kanan} - \\text{Kiri}}$ (Produk - Reaktan).
> - Jika menggunakan data **Energi Ikatan ($D$)**: $\\Delta H = \\mathbf{\\text{Kiri} - \\text{Kanan}}$ (Pemutusan - Pembentukan).

---

### 3. Visualisasi Mekanisme Energi Ikatan: Pembakaran Metana ($\\ce{CH4 + 2 O2 -> CO2 + 2 H2O}$)

<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="bondGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fdf4ff"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <marker id="bondArrUp" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#dc2626"/>
    </marker>
    <marker id="bondArrDown" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#16a34a"/>
    </marker>
  </defs>

  <rect width="760" height="42" fill="#faf5ff" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#581c87" text-anchor="middle">SIKLUS TERMODINAMIKA PEMUTUSAN &amp; PEMBENTUKAN IKATAN KIMIA</text>

  <!-- Ground Line Reaktan (Kiri Bawah, y=180) -->
  <g transform="translate(45, 170)">
    <rect width="190" height="70" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="1.5"/>
    <text x="95" y="22" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">REAKTAN UTUH</text>
    <text x="95" y="42" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">CH₄(g) + 2 O₂(g)</text>
    <text x="95" y="58" font-size="8" fill="#64748b" text-anchor="middle">4×(C-H) + 2×(O=O)</text>
  </g>

  <!-- Puncak Energi: Atom Bebas Terisolasi (Tengah Atas, y=55) -->
  <g transform="translate(285, 45)">
    <rect width="190" height="65" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
    <text x="95" y="20" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">ATOM BEBAS FASA GAS</text>
    <text x="95" y="38" font-size="10.5" font-family="monospace" font-weight="extrabold" fill="#7f1d1d" text-anchor="middle">C(g) + 4 H(g) + 4 O(g)</text>
    <text x="95" y="54" font-size="8" fill="#dc2626" text-anchor="middle">Keadaan Paling Tidak Stabil</text>
  </g>

  <!-- Ground Line Produk (Kanan Bawah, y=225) -->
  <g transform="translate(525, 215)">
    <rect width="190" height="70" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <text x="95" y="22" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">PRODUK BARU</text>
    <text x="95" y="42" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">CO₂(g) + 2 H₂O(g)</text>
    <text x="95" y="58" font-size="8" fill="#64748b" text-anchor="middle">2×(C=O) + 4×(O-H)</text>
  </g>

  <!-- Panah Naik: Pemutusan Ikatan Reaktan (Endoterm) -->
  <path d="M 140 170 Q 140 85, 280 75" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bondArrUp)"/>
  <text x="140" y="115" font-size="9" font-weight="bold" fill="#b91c1c">TAHAP 1: PEMUTUSAN IKATAN</text>
  <text x="140" y="128" font-size="8.5" font-weight="extrabold" fill="#dc2626">ΔH_putus = +2648 kJ/mol</text>

  <!-- Panah Turun: Pembentukan Ikatan Produk (Eksoterm) -->
  <path d="M 480 75 Q 620 85, 620 210" fill="none" stroke="#16a34a" stroke-width="2.5" marker-end="url(#bondArrDown)"/>
  <text x="625" y="115" font-size="9" font-weight="bold" fill="#15803d">TAHAP 2: PEMBENTUKAN IKATAN</text>
  <text x="625" y="128" font-size="8.5" font-weight="extrabold" fill="#15803d">ΔH_bentuk = -3456 kJ/mol</text>

  <!-- Panah Hasil Bersih ΔH Reaksi -->
  <line x1="240" y1="205" x2="520" y2="245" stroke="#9333ea" stroke-width="2" stroke-dasharray="4 3"/>
  <rect x="300" y="240" width="160" height="26" rx="4" fill="#faf5ff" stroke="#a855f7"/>
  <text x="380" y="257" font-size="9" font-weight="extrabold" fill="#6b21a8" text-anchor="middle">ΔH_reaksi = 2648 - 3456 = -808 kJ</text>
</svg>

---

### 4. Algoritma 4 Langkah Penyelesaian Soal Energi Ikatan
1. **Langkah 1:** Tuliskan persamaan reaksi yang sudah setara.
2. **Langkah 2:** Gambarkan struktur Lewis lengkap dari setiap reaktan dan produk untuk melihat jenis ikatan (tunggal $-$, rangkap dua $=$, atau rangkap tiga $\\equiv$).
3. **Langkah 3:** Inventarisasi seluruh ikatan yang putus di ruas kiri dan ikatan yang terbentuk di ruas kanan. *(Tips Cepat: Ikatan yang identik di kedua ruas dapat dicoret untuk menghemat waktu hitung).*
4. **Langkah 4:** Masukkan ke rumus $\\Delta H = \\sum D_{\\text{kiri}} - \\sum D_{\\text{kanan}}$.`,
      keyFormulas: [
        { name: 'Rumus Energi Ikatan', formula: '\\Delta H = \\sum D(\\text{ikatan putus}) - \\sum D(\\text{ikatan terbentuk})' },
        { name: 'Energi Disosiasi Ikatan Tunggal C-H', formula: 'D(\\ce{C-H}) \\approx 413\\text{ kJ/mol}' },
        { name: 'Energi Ikatan Rangkap C=O', formula: 'D(\\ce{C=O dalam CO2}) \\approx 799\\text{ kJ/mol}' },
      ],
    },
    {
      tag: 'pengayaan-termodinamika-kespontanan-dan-diagram-ellingham',
      tags: [
        'energi-bebas-gibbs',
        'kespontanan-reaksi',
        'temperatur-transisi',
        'persamaan-van-t-hoff',
        'diagram-ellingham',
        'metalurgi-ekstraksi',
        'proses-kroll',
        'termodinamika-reduksi',
        'karbotermal'
      ],
      title: 'Pengayaan HOTS/OSN: Energi Bebas Gibbs, Kespontanan Dekomposisi & Diagram Ellingham Metalurgi',
      summary: 'Kriteria kespontanan termodinamika Gibbs, temperatur transisi dekomposisi kalsinasi CaCO3 dan ZnCO3, persamaan ketergantungan suhu Van t Hoff, serta interpretasi garis Diagram Ellingham untuk reduksi karbotermal dan ekstraksi titanium metode Kroll.',
      content: `Termodinamika kimia lanjut mengintegrasikan perubahan entalpi ($\\Delta H$) dan entropi ($\\Delta S$) melalui fungsi keadaan Energi Bebas Gibbs:

### 1. Kriteria Kespontanan Gibbs & Temperatur Kritis

Kespontanan suatu proses pada suhu dan tekanan tetap ditentukan oleh tanda $\\Delta G$:
$$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
- **Reaksi Dekomposisi Termal (Endotermik, $\\Delta H^\\circ > 0, \\Delta S^\\circ > 0$):**  
  Pada suhu rendah $\\Delta G^\\circ > 0$ (tidak spontan). Reaksi menjadi spontan ($\\Delta G^\\circ < 0$) ketika suku temperatur $T\\Delta S^\\circ$ melampaui $\\Delta H^\\circ$.
- **Temperatur Kritis Kespontanan ($T_{\\text{kritis}}$):**
  $$\\Delta G^\\circ = 0 \\implies T_{\\text{kritis}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$
  *Contoh Kalsinasi $\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$:* Dengan $\\Delta H^\\circ \\approx +178\\text{ kJ/mol}$ dan $\\Delta S^\\circ \\approx +161\\text{ J/(mol}\\cdot\\text{K)}$, reaksi spontan pada $T > \\frac{178000}{161} \\approx 1105\\text{ K } (832^\\circ\\text{C})$.

---

### 2. Persamaan Ketergantungan Suhu Van \'t Hoff

Pengaruh perubahan temperatur terhadap nilai tetapan kesetimbangan $K$ dirumuskan oleh persamaan Van \'t Hoff:
$$\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{R T^2} \\implies \\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$
Plot $\\ln K$ vs $1/T$ memiliki gradien $-\\Delta H^\\circ / R$.

---

### 3. Diagram Ellingham & Termodinamika Metalurgi

Diagram Ellingham memetakan perubahan energi bebas Gibbs pembentukan oksida ($\\Delta G^\\circ$) terhadap temperatur $T$ untuk reaksi yang dinormalisasi per mol $\\ce{O2}$:
$$2x\\ce{M} + \\ce{O2} \\ce{->} 2\\ce{M_x O} \\implies \\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
- **Karakteristik Garis Ellingham:**
  1. Gradien garis bernilai positif ($-\\Delta S^\\circ > 0$) karena gas $\\ce{O2}$ dikonsumsi menjadi padatan ($\\Delta S^\\circ < 0$).
  2. Garis oksidasi karbon: $\\ce{2 C + O2 -> 2 CO}$ memiliki gradien **negatif** ($\\Delta S^\\circ > 0$, menghasilkan gas lebih banyak). Oleh karena itu, pada temperatur tinggi garis karbon akan memotong garis oksida logam di bawahnya.
  3. **Prinsip Reduksi:** Suatu logam dapat mereduksi oksida logam lain yang garis Ellingham-nya terletak di **atasnya** pada diagram.
- **Ekstraksi Titanium (Proses Kroll):** $\\ce{TiO2}$ tidak dapat direduksi langsung dengan karbon karena membentuk karbida titanium yang rapuh ($\\ce{TiC}$). Dalam proses Kroll, $\\ce{TiO2}$ diklorinasi menjadi $\\ce{TiCl4}$ lalu direduksi dengan magnesium cair pada $800-850^\\circ\\text{C}$ di bawah atmosfer gas argon:
  $$\\ce{TiCl4(g) + 2 Mg(l) -> Ti(s) + 2 MgCl2(l)}$$`,
      keyFormulas: [
        { name: 'Temperatur Kritis Gibbs', formula: 'T_{\\text{kritis}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}' },
        { name: 'Persamaan Van t Hoff', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Reduksi Karbotermal Ellingham', formula: '\\Delta G^\\circ_{\\text{net}} = \\Delta G^\\circ_{\\ce{CO}} - \\Delta G^\\circ_{\\ce{MO}} < 0' }
      ]
    },
    {
      tag: 'pengayaan-siklus-born-haber-dan-termodinamika-statistik',
      tags: [
        'siklus-born-haber',
        'energi-kisi',
        'formula-kapustinskii',
        'efek-joule-thomson',
        'temperatur-inversi',
        'entropi-boltzmann',
        'entropi-residual',
        'hukum-ketiga-termodinamika'
      ],
      title: 'Pengayaan HOTS/OSN: Siklus Born-Haber, Formula Kapustinskii, Efek Joule-Thomson & Entropi Boltzmann',
      summary: 'Kalkulasi energi kisi kristal ionik melalui siklus termokimia Born-Haber dan pendekatan analitis Kapustinskii, analisis efek Joule-Thomson pada gas van der Waals, serta entropi statistik Boltzmann dan entropi residual pada nol mutlak.',
      content: `Termodinamika fasa padat ionik dan mekanika statistik kuantum:

### 1. Siklus Born-Haber Energi Kisi Kristal Ionik

Energi kisi ($U_{\\text{kisi}}$) adalah entalpi pemisahan satu mol senyawa ionik padat menjadi ion-ion gasnya pada jarak tak hingga:
$$\\ce{M_a X_b (s) -> a M^{z+}(g) + b X^{z-}(g)} \\quad (U_{\\text{kisi}} > 0)$$
Berdasarkan Hukum Hess, siklus pembentukan standar $\\Delta H_f^\\circ$:
$$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + \\sum IE + \\frac{1}{2}D(\\ce{X2}) + \\sum EA - U_{\\text{kisi}}$$
- **Formula Kapustinskii (Estimasi Tanpa Struktur Kristal):**  
  A. F. Kapustinskii (1956) menyederhanakan persamaan Born-Landé untuk sembarang kristal ionik:
  $$U_{\\text{kisi}} \\approx \\frac{1202 \\nu |z_+ z_-|}{r_+ + r_-} \\left(1 - \\frac{34.5}{r_+ + r_-}\\right) \\quad [\\text{kJ/mol}]$$
  dengan $\\nu$ jumlah ion per satuan rumus dan jari-jari ion dalam satuan pikometer (pm).

---

### 2. Efek Joule-Thomson & Temperatur Inversi

Efek Joule-Thomson adalah perubahan temperatur fluida nyata saat mengalami ekspansi adiabatik melalui sumbat berpori (entalpi konstan, $H$ tetap):
$$\\mu_{\\text{JT}} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$$
- Jika gas mematuhi persamaan van der Waals:
  $$\\mu_{\\text{JT}} \\approx \\frac{1}{C_p}\\left(\\frac{2a}{RT} - b\\right)$$
- **Temperatur Inversi Maksimum ($T_i$):** Suhu di mana $\\mu_{\\text{JT}} = 0$:
  $$\\frac{2a}{R T_i} - b = 0 \\implies T_i = \\frac{2a}{R b} = 2 T_B$$
  Jika $T < T_i$, $\\mu_{\\text{JT}} > 0$ (ekspansi gas menghasilkan efek pendinginan / pendingin kulkas & kriogenik).

---

### 3. Entropi Statistik Boltzmann & Entropi Residual ($0\\text{ K}$)

Menurut Ludwig Boltzmann (1877), entropi mencerminkan jumlah mikrokeadaan ($\\Omega$) yang dapat diakses oleh sistem:
$$S = k_B \\ln \\Omega$$
- **Hukum Ketiga Termodinamika:** Entropi kristal murni yang tersusun sempurna adalah nol pada temperatur nol mutlak ($T = 0\\text{ K}$, $\\Omega = 1$).
- **Entropi Residual Kristal Cacat Orientasi:** Pada molekul seperti $\\ce{CO}$ atau $\\ce{N2O}$, momen dipol yang sangat kecil menyebabkan orientasi dipol membeku secara acak ($\\ce{C-O}$ atau $\\ce{O-C}$) saat pendinginan mendekati $0\\text{ K}$. Masing-masing molekul memiliki $\\approx 2$ kemungkinan orientasi ($\\Omega = 2^N$):
  $$S_0 = k_B \\ln(2^N) = N k_B \\ln 2 = R \\ln 2 \\approx 5.76\\text{ J/(mol}\\cdot\\text{K)}$$`,
      keyFormulas: [
        { name: 'Siklus Born-Haber', formula: 'U_{\\text{kisi}} = \\Delta H_{\\text{sub}} + \\sum IE + \\frac{1}{2}D + \\sum EA - \\Delta H_f^\\circ' },
        { name: 'Formula Kapustinskii Energi Kisi', formula: 'U_{\\text{kisi}} \\approx \\frac{1202 \\nu |z_+ z_-|}{r_+ + r_-} \\left(1 - \\frac{34.5}{r_+ + r_-}\\right)' },
        { name: 'Temperatur Inversi Joule-Thomson', formula: 'T_i = \\frac{2a}{Rb}' },
        { name: 'Entropi Residual Boltzmann', formula: 'S_0 = R \\ln 2 \\approx 5.76\\text{ J/(mol}\\cdot\\text{K)}' }
      ]
    },
  ],
  worked_examples: WORKED_EXAMPLES_TOPIC_106,
},

  {
  id: 107,
  topic_number: 7,
  grade: 'Kelas 11',
  semester: 1,
  curriculumPhase: 'Fase F',
  relatedOsnTopicId: 6,
  title: 'Laju Reaksi & Teori Tumbukan SMA (Kinetika Kimia, Orde Reaksi, Faktor Laju & Katalis)',
  slug: 'laju-reaksi-teori-tumbukan-sma',
  category: 'Kimia Fisik',
  level: 'SMA',
  readTimeMinutes: 35,
  summary: 'Kajian komprehensif kinetika kimia SMA: konsep laju reaksi diferensial (pengurangan reaktan dan pertambahan produk), teori tumbukan efektif (orientasi spasial dan energi aktivasi Ea), profil diagram energi keadaan transisi kompleks teraktivasi, 4 faktor penentu laju reaksi (konsentrasi, luas permukaan kontak, temperatur via Persamaan Arrhenius dan aturan empiris kenaikan suhu, serta peran katalis homogen/heterogen), penentuan persamaan hukum laju dan orde reaksi (metode laju awal, metode isolasi, dan metode waktu reaksi t), serta mekanisme reaksi elementer bertahap.',
  allTags: [
      'kinetika-kimia',
      'laju-reaksi',
      'teori-tumbukan',
      'energi-aktivasi-ea',
      'faktor-laju-reaksi',
      'hukum-laju',
      'orde-reaksi',
      'katalis-dan-inhibitor',
      'aturan-suhu-laju',
      'stoikiometri-laju',
      'persamaan-laju',
      'luas-permukaan',
      'konsentrasi',
      'diagram-tingkat-energi',
      'reaksi-eksoterm',
      'kompleks-teraktivasi',
      'kurva-konsentrasi-waktu',
      'metode-laju-awal',
      'waktu-reaksi',
      'tetapan-laju-k',
      'analisis-dimensi',
      'distribusi-maxwell-boltzmann',
      'mekanisme-reaksi',
      'tahap-penentu-laju',
      'zat-antara-intermediat',
      'desain-eksperimen',
      'orde-negatif',
      'fungsi-keadaan',
      'pra-kesetimbangan',
      'metode-isolasi',
      'pseudo-first-order',
      'kontrol-kinetik-vs-termodinamik',
      'energi-bebas-gibbs',
      'stabilitas-kinetik',
      'persamaan-arrhenius',
      'tetapan-gas-r',
      'kinetika-gas',
      'hukum-gas-ideal',
      'orde-satu',
      'tekanan-parsial',
      'katalisis-homogen',
      'kimia-lingkungan',
      'autokatalisis',
      'titrasi-redoks',
      'permanganometri',
      'kurva-sigmoid',
      'steady-state-approximation',
      'orde-pecahan',
      'radikal-bebas',
      'regresi-linear',
      'faktor-frekuensi',
      'waktu-paruh',
      'radioaktivitas',
      'metode-ilmiah',
      'koloid-belerang',
      'lambert-beer',
    ],
  prerequisites: [
    {
      tag: 'prasyarat-molaritas-dan-laju-diferensial',
      title: 'Prasyarat 1: Molaritas Larutan & Definisi Laju Reaksi Diferensial',
      summary: 'Perubahan konsentrasi reaktan dan produk per satuan waktu serta perbandingan laju stoikiometris.',
      content: `Kinetika kimia (*Chemical Kinetics*) adalah bidang kimia fisik yang mempelajari seberapa cepat suatu reaksi kimia berlangsung (laju reaksi) serta tahapan-tahapan molekuler jalannya reaksi tersebut (mekanisme reaksi).

### 1. Definisi Matematis Laju Reaksi ($v$)
Laju reaksi menyatakan **kecepatan berkurangnya konsentrasi molar reaktan** atau **kecepatan bertambahnya konsentrasi molar produk** per satu satuan waktu:
$$v = -\\frac{\\Delta[\\text{Reaktan}]}{\\Delta t} = +\\frac{\\Delta[\\text{Produk}]}{\\Delta t}$$

- Tanda negatif ($-$) menunjukkan konsentrasi reaktan selalu **berkurang seiring berjalannya waktu**.
- Tanda positif ($+$) menunjukkan konsentrasi produk selalu **bertambah seiring berjalannya waktu**.
- Satuan standar internasional laju reaksi: $\\text{M/detik}$ (atau $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$).

---

### 2. Perbandingan Laju Berdasarkan Koefisien Stoikiometri
Untuk reaksi umum dengan koefisien stoikiometri $a, b, c, d$:
$$a\\ce{A} + b\\ce{B} \\longrightarrow c\\ce{C} + d\\ce{D}$$

Hubungan kesetaraan laju diferensial dinyatakan:
$$\\mathbf{v = -\\frac{1}{a}\\frac{\\Delta[\\ce{A}]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[\\ce{B}]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[\\ce{C}]}{\\Delta t} = +\\frac{1}{d}\\frac{\\Delta[\\ce{D}]}{\\Delta t}}$$

Artinya: **Perbandingan laju reaksi zat-zat yang terlibat selalu sebanding dengan perbandingan koefisien reaksinya**:
$$v_{\\ce{A}} : v_{\\ce{B}} : v_{\\ce{C}} : v_{\\ce{D}} = a : b : c : d$$

*Contoh Aplikasi:*
Pada reaksi sintesis amonia: $\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$:
- Jika gas $\\ce{H2}$ berkurang dengan laju $0.60\\text{ M/s}$, maka gas $\\ce{N2}$ berkurang dengan laju $\\frac{1}{3} \\times 0.60 = 0.20\\text{ M/s}$.
- Sementara gas amonia $\\ce{NH3}$ bertambah dengan laju $\\frac{2}{3} \\times 0.60 = 0.40\\text{ M/s}$.`,
    },
    {
      tag: 'prasyarat-distribusi-maxwell-boltzmann',
      title: 'Prasyarat 2: Teori Kinetik Gas & Distribusi Energi Maxwell-Boltzmann',
      summary: 'Korelasi temperatur absolut dengan sebaran energi kinetik partikel mikroskopis.',
      content: `Pada tingkat mikroskopis, partikel zat (atom atau molekul) tidak semuanya bergerak dengan kecepatan yang seragam. Partikel-partikel tersebut memiliki sebaran energi kinetik yang dideskripsikan oleh **Kurva Distribusi Maxwell-Boltzmann**.

### Prinsip Pokok Distribusi Energi Termal:
1. **Energi Kinetik Rata-Rata:**
   Energi kinetik translasi rata-rata partikel gas ideal berbanding lurus dengan temperatur mutlaknya ($T$ dalam Kelvin):
   $$\\bar{E}_k = \\frac{3}{2} k_B T$$
   *(di mana $k_B = 1.38 \\times 10^{-23}\\text{ J/K}$ adalah tetapan Boltzmann).*

2. **Pengaruh Kenaikan Temperatur terhadap Sebaran Energi:**
   - Ketika temperatur dinaikkan dari $T_1$ ke $T_2$ ($T_2 > T_1$), kurva distribusi melebar ke arah kanan dan puncaknya mendatar.
   - Meskipun energi kinetik rata-rata hanya naik sedikit, **jumlah molekul yang memiliki energi sangat tinggi (melampaui energi aktivasi $E_a$) meningkat secara eksponensial**.
   - Inilah alasan mendasar mengapa laju reaksi kimia melonjak drastis saat dipanaskan.`,
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-laju-dan-kurva-konsentrasi',
      tags: ['laju-reaksi-kimia', 'kurva-konsentrasi-waktu', 'laju-sesaat-vs-rata-rata', 'stoikiometri-laju'],
      title: 'Konsep Inti 1: Konsep Laju Reaksi Diferensial & Kurva Konsentrasi vs Waktu',
      summary: 'Grafik peluruhan reaktan dan pertumbuhan produk seiring berjalannya waktu serta pembedaan laju rata-rata vs laju sesaat.',
      content: `Kinetika kimia mengukur seberapa cepat reaktan bertransformasi menjadi produk. Pada awal reaksi ($t = 0$), konsentrasi reaktan berada pada titik tertinggi dan konsentrasi produk sama dengan nol. Seiring berjalannya waktu reaksi, reaktan dikonsumsi dan produk diakumulasi.

---

### 1. Kurva Perubahan Konsentrasi Terhadap Waktu

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <marker id="dotRed" markerWidth="6" markerHeight="6" refX="3" refY="3">
      <circle cx="3" cy="3" r="3" fill="#dc2626"/>
    </marker>
    <marker id="dotGreen" markerWidth="6" markerHeight="6" refX="3" refY="3">
      <circle cx="3" cy="3" r="3" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- Title Header -->
  <rect width="760" height="42" fill="#f8fafc" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">DINAMIKA KONSENTRASI: PENGURANGAN REAKTAN VS PERTAMBAHAN PRODUK</text>

  <!-- Sisi Kiri: Kurva Plot (x=50..450, y=60..280) -->
  <g transform="translate(30, 50)">
    <!-- Sumbu Koordinat -->
    <line x1="50" y1="220" x2="430" y2="220" stroke="#64748b" stroke-width="1.8"/>
    <line x1="50" y1="220" x2="50" y2="30" stroke="#64748b" stroke-width="1.8"/>
    <polygon points="430,220 422,216 422,224" fill="#64748b"/>
    <polygon points="50,30 46,38 54,38" fill="#64748b"/>
    <text x="435" y="224" font-size="9" font-weight="bold" fill="#64748b">Waktu (t)</text>
    <text x="45" y="22" font-size="9" font-weight="bold" fill="#64748b" text-anchor="end">Konsentrasi [M]</text>

    <!-- Grid lines tipis -->
    <line x1="50" y1="70" x2="420" y2="70" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="50" y1="120" x2="420" y2="120" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="50" y1="170" x2="420" y2="170" stroke="#f1f5f9" stroke-width="1"/>

    <!-- Kurva Reaktan: Turun eksponensial (dari y=50 ke y=200) -->
    <path d="M 50 60 Q 130 170, 420 205" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <!-- Kurva Produk: Naik eksponensial (dari y=220 ke y=75) -->
    <path d="M 50 220 Q 130 110, 420 75" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>

    <!-- Label Kurva -->
    <rect x="220" y="190" width="130" height="22" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="285" y="205" font-size="8.5" font-weight="bold" fill="#dc2626" text-anchor="middle">[Reaktan]: v = -d[R]/dt</text>

    <rect x="220" y="60" width="130" height="22" rx="4" fill="#f0fdf4" stroke="#86efac"/>
    <text x="285" y="75" font-size="8.5" font-weight="bold" fill="#16a34a" text-anchor="middle">[Produk]: v = +d[P]/dt</text>

    <!-- Garis Tangen Laju Sesaat di t1 (x=150) -->
    <circle cx="150" cy="140" r="4" fill="#ef4444"/>
    <line x1="100" y1="110" x2="210" y2="180" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4 2"/>
    <text x="160" y="130" font-size="8" font-weight="bold" fill="#b91c1c">Kemiringan = Laju Sesaat</text>
  </g>

  <!-- Sisi Kanan: Kartu Kaidah Kinetika (x=500..730) -->
  <g transform="translate(500, 60)">
    <rect width="235" height="240" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="117" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">FAKTA PENTING LAJU REAKSI</text>

    <g transform="translate(15, 42)">
      <circle cx="6" cy="6" r="4" fill="#dc2626"/>
      <text x="18" y="9" font-size="9" font-weight="bold" fill="#0f172a">1. Laju Reaksi Tidak Konstan</text>
      <text x="18" y="23" font-size="8" fill="#64748b">Laju paling cepat di awal ($t=0$),</text>
      <text x="18" y="35" font-size="8" fill="#64748b">lalu melambat seiring reaktan habis.</text>

      <circle cx="6" cy="56" r="4" fill="#2563eb"/>
      <text x="18" y="59" font-size="9" font-weight="bold" fill="#0f172a">2. Laju Rata-rata vs Sesaat</text>
      <text x="18" y="73" font-size="8" fill="#64748b">Rata-rata: Rentang selang waktu $\Delta t$.</text>
      <text x="18" y="85" font-size="8" fill="#64748b">Sesaat: Gradien tangen pada detik $t$.</text>

      <circle cx="6" cy="106" r="4" fill="#16a34a"/>
      <text x="18" y="109" font-size="9" font-weight="bold" fill="#0f172a">3. Hubungan Stoikiometri</text>
      <text x="18" y="123" font-size="8" fill="#64748b">Untuk $a\ce{A} + b\ce{B} \to c\ce{C}$:</text>
      <text x="18" y="138" font-size="8.5" font-family="monospace" font-weight="bold" fill="#166534">v_A / a = v_B / b = v_C / c</text>

      <rect x="0" y="152" width="205" height="30" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="102" y="166" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Satuan: M/s = mol·L⁻¹·s⁻¹</text>
      <text x="102" y="177" font-size="7.5" fill="#64748b" text-anchor="middle">Atau M/menit tergantung skala waktu</text>
    </g>
  </g>
</svg>

---

### 2. Pembedaan Laju Rata-Rata vs Laju Sesaat
1. **Laju Rata-Rata ($\\bar{v}$):** Perubahan konsentrasi yang diukur dalam interval rentang waktu tertentu:
   $$\\bar{v} = -\\frac{[\\ce{R}]_2 - [\\ce{R}]_1}{t_2 - t_1} = -\\frac{\\Delta[\\ce{R}]}{\\Delta t}$$
2. **Laju Sesaat ($v_t$):** Laju reaksi pada satu titik waktu tertentu ($t$). Secara grafik, merupakan **kemiringan garis singgung (tangen)** kurva konsentrasi pada titik waktu tersebut ($v = -\\frac{d[\\ce{R}]}{dt}$).`,
      keyFormulas: [
        { name: 'Definisi Laju Diferensial', formula: 'v = -\\frac{1}{a}\\frac{\\Delta[\\ce{A}]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[\\ce{C}]}{\\Delta t}' },
        { name: 'Perbandingan Laju Stoikiometri', formula: '\\frac{v_{\\ce{A}}}{a} = \\frac{v_{\\ce{B}}}{b} = \\frac{v_{\\ce{C}}}{c}' },
      ],
    },
    {
      tag: 'teori-tumbukan-dan-energi-aktivasi',
      tags: ['teori-tumbukan-efektif', 'energi-aktivasi-ea', 'orientasi-tumbukan', 'keadaan-transisi-kompleks'],
      title: 'Konsep Inti 2: Teori Tumbukan Efektif & Kompleks Teraktivasi (Energi Aktivasi Ea)',
      summary: 'Dua syarat mutlak terjadinya reaksi kimia: orientasi spasial molekul yang tepat dan energi kinetik melampaui batas ambang aktivasi Ea.',
      content: `Mengapa ada reaksi kimia yang berlangsung sekejap mata (seperti ledakan dinamit atau kembang api), sedangkan reaksi lain membutuhkan waktu berbulan-bulan (seperti perkaratan besi)? Teori Tumbukan (*Collision Theory*) memberikan jawaban mikroskopis atas pertanyaan ini.

### 1. Postulat Teori Tumbukan
Reaksi kimia terjadi akibat adanya tumbukan antarpartikel zat pereaksi. Namun, di dalam 1 Liter gas pada kondisi kamar terjadi sekitar $10^{30}$ tumbukan setiap detiknya! Jika setiap tumbukan menghasilkan reaksi, semua zat di alam semesta akan meledak dalam sekejap. Pada kenyataannya, hanya **sebagian kecil tumbukan yang berhasil menghasilkan reaksi**, yang disebut **Tumbukan Efektif (*Effective Collision*)**.

---

### 2. Dua Syarat Mutlak Terjadinya Tumbukan Efektif

#### A. Orientasi Spasial Molekul Harus Tepat (*Proper Molecular Orientation*)
Molekul memiliki bentuk tiga dimensi. Atom-atom yang hendak membentuk ikatan baru harus saling bertubrukan secara langsung dengan sudut dan posisi yang tepat. Jika atom-atom yang tidak saling berikatan bertubrukan, partikel hanya akan memantul kembali tanpa terjadi reaksi kimia.

#### B. Energi Kinetik Partikel Harus Mencapai Energi Aktivasi ($E_k \\ge E_a$)
Partikel yang bertumbukan harus memiliki energi kinetik minimum yang cukup untuk mengatasi gaya tolak menolak awan elektron dan meregangkan ikatan-ikatan kimia lama hingga putus. Ambang batas energi minimum ini disebut **Energi Aktivasi ($E_a$ / *Activation Energy*)**.

---

### 3. Visualisasi Mekanisme Tumbukan Spasial & Profil Energi Kompleks Teraktivasi

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff7ed"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <marker id="tumbukArr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="#ea580c"/>
    </marker>
  </defs>

  <rect width="760" height="42" fill="#fff7ed" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">TEORI TUMBUKAN EFEKTIF: ORIENTASI MOLEKUL &amp; ENERGI AKTIVASI (Ea)</text>

  <!-- KIRI: ORIENTASI TUMBUKAN NO + O3 -->
  <g transform="translate(30, 55)">
    <rect width="335" height="250" rx="10" fill="#ffffff" stroke="#fed7aa" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11.5" font-weight="bold" fill="#ea580c" text-anchor="middle">A. FAKTOR ORIENTASI SPASIAL TUMBUKAN</text>

    <!-- Skenario 1: Tumbukan Tidak Efektif (Salah Orientasi) -->
    <g transform="translate(20, 45)">
      <rect width="295" height="75" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
      <text x="10" y="18" font-size="9" font-weight="bold" fill="#b91c1c">❌ Tumbukan Tidak Efektif (Orientasi Salah)</text>
      <!-- Atom O dari NO menabrak O3 -->
      <circle cx="45" cy="45" r="10" fill="#3b82f6"/>
      <circle cx="65" cy="45" r="10" fill="#ef4444"/>
      <text x="45" y="48" font-size="7" fill="#fff" text-anchor="middle">N</text>
      <text x="65" y="48" font-size="7" fill="#fff" text-anchor="middle">O</text>

      <path d="M 85 45 L 115 45" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="100" y="38" font-size="7.5" fill="#dc2626" text-anchor="middle">Tabrakan O-O</text>

      <circle cx="135" cy="45" r="10" fill="#ef4444"/>
      <circle cx="155" cy="45" r="10" fill="#ef4444"/>
      <text x="135" y="48" font-size="7" fill="#fff" text-anchor="middle">O</text>
      <text x="155" y="48" font-size="7" fill="#fff" text-anchor="middle">O</text>

      <text x="210" y="48" font-size="9" font-weight="extrabold" fill="#b91c1c">MEMANTUL KEMBALI</text>
      <text x="210" y="60" font-size="7.5" fill="#64748b">Tanpa Reaksi Kimia</text>
    </g>

    <!-- Skenario 2: Tumbukan Efektif (Orientasi Tepat) -->
    <g transform="translate(20, 135)">
      <rect width="295" height="95" rx="6" fill="#f0fdf4" stroke="#86efac"/>
      <text x="10" y="18" font-size="9" font-weight="bold" fill="#15803d">✔ Tumbukan Efektif (Orientasi Tepat N menabrak O)</text>
      <!-- Atom N dari NO menabrak terminal O dari O3 -->
      <circle cx="45" cy="45" r="10" fill="#ef4444"/>
      <circle cx="65" cy="45" r="10" fill="#3b82f6"/>
      <text x="45" y="48" font-size="7" fill="#fff" text-anchor="middle">O</text>
      <text x="65" y="48" font-size="7" fill="#fff" text-anchor="middle">N</text>

      <line x1="85" y1="45" x2="110" y2="45" stroke="#16a34a" stroke-width="2.5" marker-end="url(#tumbukArr)"/>

      <circle cx="130" cy="45" r="10" fill="#ef4444"/>
      <circle cx="150" cy="45" r="10" fill="#ef4444"/>
      <text x="130" y="48" font-size="7" fill="#fff" text-anchor="middle">O</text>
      <text x="150" y="48" font-size="7" fill="#fff" text-anchor="middle">O</text>

      <rect x="180" y="32" width="105" height="26" rx="4" fill="#dcfce7" stroke="#22c55e"/>
      <text x="232" y="48" font-size="8.5" font-weight="extrabold" fill="#166534" text-anchor="middle">NO₂ + O₂ Terbentuk!</text>
      <text x="147" y="80" font-size="8" fill="#15803d" text-anchor="middle">Ikatan N-O terbentuk saat ikatan O-O meregang putus</text>
    </g>
  </g>

  <!-- KANAN: PROFIL ENERGI AKTIVASI Ea -->
  <g transform="translate(395, 55)">
    <rect width="335" height="250" rx="10" fill="url(#actGrad)" stroke="#fed7aa" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11.5" font-weight="bold" fill="#c2410c" text-anchor="middle">B. AMBANG BATAS ENERGI AKTIVASI (Ea)</text>

    <!-- Sumbu Koordinat -->
    <line x1="45" y1="210" x2="310" y2="210" stroke="#64748b" stroke-width="1.5"/>
    <line x1="45" y1="210" x2="45" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <text x="310" y="222" font-size="8" fill="#64748b" text-anchor="end">Koordinat Reaksi</text>
    <text x="40" y="40" font-size="8" fill="#64748b" text-anchor="end">Energi</text>

    <!-- Kurva Profil Bukit Energi -->
    <path d="M 55 140 L 95 140 Q 170 30, 245 180 L 295 180" fill="none" stroke="#ea580c" stroke-width="2.5"/>

    <!-- Reaktan & Produk -->
    <text x="75" y="132" font-size="9" font-weight="bold" fill="#0f172a">Reaktan</text>
    <text x="270" y="172" font-size="9" font-weight="bold" fill="#0f172a">Produk</text>

    <!-- Puncak Kompleks Teraktivasi -->
    <circle cx="170" cy="55" r="4" fill="#f59e0b"/>
    <rect x="110" y="40" width="120" height="18" rx="4" fill="#ffffff" stroke="#f59e0b"/>
    <text x="170" y="52" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">Kompleks Teraktivasi [‡]</text>

    <!-- Panah Ea -->
    <line x1="95" y1="140" x2="190" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="170" y1="140" x2="170" y2="60" stroke="#dc2626" stroke-width="2"/>
    <polygon points="170,55 166,65 174,65" fill="#dc2626"/>
    <polygon points="170,140 166,130 174,130" fill="#dc2626"/>
    <text x="178" y="105" font-size="9" font-weight="extrabold" fill="#dc2626">E_a (Energi Aktivasi)</text>

    <!-- Penjelasan Singkat -->
    <rect x="45" y="225" width="250" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="170" y="238" font-size="7.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Hanya partikel dengan Ek ≥ Ea yang dapat melewati bukit!</text>
  </g>
</svg>

---

### 4. Kompleks Teraktivasi (*The Transition State* $[\\ddagger]$)
Pada puncak bukit energi aktivasi, terdapat suatu struktur intermediat yang sangat tidak stabil yang dinamakan **Kompleks Teraktivasi (*Activated Complex*)** atau **Keadaan Transisi (*Transition State*)**:
- Ikatan kovalen reaktan lama sedang meregang (*partially broken*).
- Ikatan kovalen produk baru sedang mulai terbentuk (*partially formed*).
- Kompleks ini memiliki energi potensial tertinggi sepanjang lintasan reaksi dan dapat terurai maju membentuk produk atau terurai mundur kembali menjadi reaktan.`,
      keyFormulas: [
        { name: 'Kriteria Tumbukan Efektif', formula: 'E_k \\ge E_a \\quad \\text{dan orientasi spasial tepat}' },
      ],
    },
    {
      tag: 'faktor-faktor-penentu-laju-reaksi',
      tags: ['faktor-konsentrasi', 'faktor-luas-permukaan', 'faktor-suhu-arrhenius', 'katalis-homogen-heterogen'],
      title: 'Konsep Inti 3: Empat Faktor Penentu Laju Reaksi & Persamaan Arrhenius',
      summary: 'Analisis mendalam pengaruh konsentrasi, luas bidang sentuh, suhu via distribusi Maxwell-Boltzmann dan aturan empiris kenaikan suhu, serta mekanisme katalis.',
      content: `Laju suatu reaksi kimia dapat dikendalikan secara presisi di laboratorium maupun industri melalui manipulasi empat faktor fisis dan kimiawi utama:

---

### 1. Empat Faktor Penentu Laju Reaksi

#### A. Konsentrasi Pereaksi (Khusus Larutan dan Gas)
- Semakin tinggi konsentrasi pereaksi $\\implies$ semakin banyak partikel zat per satuan volume larutan/ruang.
- Kerapatan partikel yang tinggi $\\implies$ **frekuensi tumbukan total antarpartikel meningkat** $\\implies$ kemungkinan terjadinya tumbukan efektif meningkat secara linier $\\implies$ **laju reaksi meningkat**.
- Untuk zat berfasa gas, menaikkan **tekanan gas** (atau memperkecil volume wadah) memiliki efek yang identik dengan menaikkan konsentrasi.

#### B. Luas Permukaan Bidang Sentuh (Khusus Zat Padat / Reaksi Heterogen)
- Pada zat padat, reaksi hanya dapat terjadi pada atom/molekul yang berada di **lapisan permukaan luar** yang bersentuhan langsung dengan zat lain.
- Semakin kecil ukuran partikel padatan (serbuk halus > butiran kerikil > bongkahan besar) $\\implies$ **total luas permukaan bidang sentuh per satuan massa zat semakin luas** $\\implies$ semakin banyak bidang tumbukan yang terbuka $\\implies$ **laju reaksi meningkat drastis**.
- *Contoh Praktik:* Serbuk kalsium karbonat ($\\ce{CaCO3}$) bereaksi jauh lebih dahsyat dan cepat dengan $\\ce{HCl}$ dibandingkan batu pualam/marmer utuh bermassa sama.

#### C. Temperatur / Suhu Reaksi
- Kenaikan temperatur menaikkan energi kinetik rata-rata seluruh molekul pereaksi ($E_k \\propto T$).
- Akibatnya:
  1. Molekul bergerak lebih cepat sehingga frekuensi tumbukan sedikit meningkat ($+2\\%$ per $10^\\circ\\text{C}$).
  2. **FAKTOR PENENTU UTAMA:** Fraksi persentase molekul yang energinya melampaui energi aktivasi ($E_k \\ge E_a$) **melonjak berlipat ganda** (meningkat +200% hingga +300%) sesuai kurva Maxwell-Boltzmann.

---

### 2. Visualisasi Kurva Maxwell-Boltzmann & Mekanisme Aksi Katalis

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="areaT1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="areaT2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.2"/>
    </linearGradient>
  </defs>

  <rect width="760" height="42" fill="#f8fafc" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">PENGARUH TEMPERATUR (MAXWELL-BOLTZMANN) VS PENGARUH KATALIS (PENURUNAN Ea)</text>

  <!-- KIRI: KURVA MAXWELL-BOLTZMANN (x=30..365) -->
  <g transform="translate(30, 55)">
    <rect width="335" height="250" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">A. EFEK SUHU: DISTRIBUSI ENERGI KINETIK</text>

    <!-- Sumbu -->
    <line x1="40" y1="210" x2="310" y2="210" stroke="#64748b" stroke-width="1.5"/>
    <line x1="40" y1="210" x2="40" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <text x="310" y="222" font-size="8" fill="#64748b" text-anchor="end">Energi Kinetik (Ek)</text>
    <text x="35" y="40" font-size="8" fill="#64748b" text-anchor="end">Jumlah Molekul</text>

    <!-- Garis Ambang Batas Ea (x=210) -->
    <line x1="210" y1="210" x2="210" y2="50" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="210" y="42" font-size="9" font-weight="extrabold" fill="#dc2626" text-anchor="middle">Garis Ambang Ea</text>

    <!-- Kurva Suhu Rendah T1 (Puncak tinggi di kiri) -->
    <path d="M 40 210 Q 90 40, 150 130 T 210 190 T 300 208" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <text x="125" y="85" font-size="8.5" font-weight="bold" fill="#2563eb">Suhu T₁ (Dingin)</text>

    <!-- Kurva Suhu Tinggi T2 (Puncak mendatar bergeser ke kanan) -->
    <path d="M 40 210 Q 110 110, 190 145 T 260 185 T 310 205" fill="none" stroke="#ef4444" stroke-width="2.5"/>
    <text x="165" y="125" font-size="8.5" font-weight="bold" fill="#ef4444">Suhu T₂ &gt; T₁ (Panas)</text>

    <!-- Arsiran Partikel Ek ≥ Ea pada T2 -->
    <path d="M 210 180 Q 250 190, 310 205 L 310 210 L 210 210 Z" fill="url(#areaT2)"/>
    <text x="260" y="175" font-size="7.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Fraksi Ek ≥ Ea</text>
    <text x="260" y="186" font-size="7" fill="#b91c1c" text-anchor="middle">Melonjak Drastis!</text>

    <rect x="35" y="225" width="265" height="20" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="167" y="238" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Setiap naik 10°C, fraksi molekul reaktif berlipat ganda</text>
  </g>

  <!-- KANAN: MEKANISME KATALIS (x=395..730) -->
  <g transform="translate(395, 55)">
    <rect width="335" height="250" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="167" y="24" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">B. EFEK KATALIS: PENURUNAN ENERGI AKTIVASI</text>

    <!-- Sumbu -->
    <line x1="45" y1="210" x2="310" y2="210" stroke="#64748b" stroke-width="1.5"/>
    <line x1="45" y1="210" x2="45" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <text x="310" y="222" font-size="8" fill="#64748b" text-anchor="end">Koordinat Reaksi</text>
    <text x="40" y="40" font-size="8" fill="#64748b" text-anchor="end">Energi (E)</text>

    <!-- Reaktan Plateau (y=150) -->
    <line x1="50" y1="150" x2="90" y2="150" stroke="#0f172a" stroke-width="2.5"/>
    <text x="70" y="142" font-size="8.5" font-weight="bold" fill="#0f172a">Reaktan</text>

    <!-- Produk Plateau (y=185) -->
    <line x1="265" y1="185" x2="305" y2="185" stroke="#0f172a" stroke-width="2.5"/>
    <text x="285" y="177" font-size="8.5" font-weight="bold" fill="#0f172a">Produk</text>

    <!-- Lintasan Tanpa Katalis (Bukit Tinggi, y=55) -->
    <path d="M 90 150 Q 175 45, 265 185" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <text x="175" y="48" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">Tanpa Katalis (Ea Tinggi)</text>

    <!-- Lintasan Dengan Katalis (Bukit Rendah Bertahap, y=95) -->
    <path d="M 90 150 Q 130 90, 175 110 Q 220 90, 265 185" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-dasharray="4 2"/>
    <text x="175" y="98" font-size="8" font-weight="bold" fill="#16a34a" text-anchor="middle">Dengan Katalis (Ea' Rendah)</text>

    <!-- Garis Bantu Nilai ΔH Tetap -->
    <line x1="90" y1="150" x2="265" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="240" y1="150" x2="240" y2="185" stroke="#2563eb" stroke-width="1.8"/>
    <text x="245" y="170" font-size="7.5" font-weight="extrabold" fill="#2563eb">ΔH Tetap!</text>

    <rect x="35" y="225" width="265" height="20" rx="4" fill="#f0fdf4" stroke="#86efac"/>
    <text x="167" y="238" font-size="7.5" font-weight="bold" fill="#15803d" text-anchor="middle">Katalis menurunkan Ea tanpa mengubah nilai ΔH reaksi</text>
  </g>
</svg>

---

### 3. Rumus Empiris Pengaruh Temperatur SMA
Dalam perhitungan soal ujian sekolah menengah, jika diketahui suatu reaksi berlangsung **$n$ kali lebih cepat setiap kenaikan suhu $\\Delta T^\\circ\\text{C}$**, maka berlaku rumus:
$$\\mathbf{v_2 = v_1 \\times n^{\\frac{T_2 - T_1}{\\Delta T}}}$$

Karena waktu reaksi ($t$) berbanding terbalik dengan laju reaksi ($t = \\frac{1}{v}$):
$$\\mathbf{t_2 = t_1 \\times \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T}}}$$

---

### 4. Peran Katalis Homogen vs Katalis Heterogen
1. **Katalis Homogen:** Katalis yang berada dalam **fasa wujud yang sama** dengan reaktan (contoh: ion $\\ce{Fe^2+(aq)}$ yang mengkatalisis penguraian hidrogen peroksida $\\ce{H2O2(aq)}$).
2. **Katalis Heterogen:** Katalis yang berada dalam **fasa berbeda** dengan reaktan, umumnya padatan logam transisi yang menyediakan situs aktif permukaan untuk mengadsorpsi gas pereaksi (contoh: serbuk logam besi $\\ce{Fe(s)}$ pada sintesis amonia Haber-Bosch, atau logam $\\ce{Pt/Ni}$ pada hidrogenasi minyak goreng).
3. **Inhibitor:** Zat yang memperlambat laju reaksi kimia (kebalikan dari katalis), misalnya zat pengawet makanan untuk mencegah oksidasi ketengikan lemak.`,
      keyFormulas: [
        { name: 'Rumus Empiris Laju Suhu', formula: 'v_2 = v_1 \\times n^{\\frac{T_2 - T_1}{\\Delta T}}' },
        { name: 'Rumus Empiris Waktu Suhu', formula: 't_2 = t_1 \\times \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T}}' },
      ],
    },
    {
      tag: 'hukum-laju-dan-makna-orde-reaksi',
      tags: ['hukum-laju-reaksi', 'orde-nol-satu-dua', 'tetapan-laju-k', 'satuan-tetapan-laju'],
      title: 'Konsep Inti 4: Persamaan Hukum Laju Reaksi & Makna Fisis Orde Reaksi',
      summary: 'Bentuk matematis persamaan laju reaksi v = k [A]^m [B]^n, interpretasi grafik kinetika orde 0, 1, dan 2, serta satuan tetapan laju k.',
      content: `Secara kuantitatif, hubungan antara konsentrasi zat-zat pereaksi dengan laju reaksi kimia dirumuskan dalam suatu persamaan matematis yang disebut **Persamaan Hukum Laju Reaksi (*Rate Law Equation*)**.

### 1. Bentuk Umum Persamaan Laju Reaksi
Untuk reaksi umum: $a\\ce{A} + b\\ce{B} \\longrightarrow c\\ce{C} + d\\ce{D}$
Bentuk persamaan laju reaksinya adalah:
$$\\mathbf{v = k [\\ce{A}]^m [\\ce{B}]^n}$$

Di mana:
- $v$: Laju reaksi (satuan $\\text{M/s}$ atau $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$).
- $k$: **Tetapan laju reaksi (*rate constant*)**, nilainya bergantung pada sifat pereaksi, katalis, dan **temperatur** (tidak bergantung pada konsentrasi zat).
- $[\\ce{A}], [\\ce{B}]$: Konsentrasi molar masing-masing pereaksi (Molaritas, $\\text{mol/L}$).
- $m$: **Orde reaksi terhadap pereaksi $\\ce{A}$**.
- $n$: **Orde reaksi terhadap pereaksi $\\ce{B}$**.
- Orde total reaksi $= m + n$.

> **Peringatan Keras Konseptual:**
> Pangkat $m$ dan $n$ **TIDAK SELALU SAMA** dengan koefisien stoikiometri $a$ dan $b$. Nilai orde reaksi **HANYA DAPAT DITENTUKAN MELALUI DATA EKSPERIMEN LABORATORIUM**, bukan dilihat dari persamaan setara!

---

### 2. Galeri Karakteristik Fisis & Grafik Orde Reaksi (0, 1, dan 2)

<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <rect width="760" height="42" fill="#f8fafc" border-radius="12"/>
  <text x="380" y="26" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">KARAKTERISTIK GRAFIK KINETIKA: ORDE 0, ORDE 1, DAN ORDE 2</text>

  <!-- PANEL 1: ORDE 0 (x=25..250) -->
  <g transform="translate(25, 55)">
    <rect width="225" height="230" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="112" y="22" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">ORDE REAKSI 0 (v = k)</text>

    <!-- Grafik v vs [A] (Garis Mendatar Horisontal) -->
    <line x1="35" y1="130" x2="190" y2="130" stroke="#64748b" stroke-width="1.5"/>
    <line x1="35" y1="130" x2="35" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <line x1="35" y1="75" x2="185" y2="75" stroke="#0284c7" stroke-width="2.5"/>
    <text x="190" y="142" font-size="7.5" fill="#64748b" text-anchor="end">[A]</text>
    <text x="30" y="42" font-size="7.5" fill="#64748b" text-anchor="end">v</text>
    <text x="112" y="68" font-size="8" font-weight="bold" fill="#0284c7" text-anchor="middle">Laju Konstan (v = k)</text>

    <!-- Penjelasan -->
    <rect x="15" y="148" width="195" height="70" rx="4" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="25" y="165" font-size="8" font-weight="bold" fill="#0369a1">• Perubahan [A] tidak memicu</text>
    <text x="33" y="177" font-size="7.5" fill="#0369a1">perubahan laju reaksi sama sekali.</text>
    <text x="25" y="193" font-size="8" font-weight="bold" fill="#0369a1">• Satuan k = M·s⁻¹</text>
    <text x="25" y="207" font-size="7.5" fill="#64748b">Contoh: Reaksi katalisis permukaan jenuh</text>
  </g>

  <!-- PANEL 2: ORDE 1 (x=268..492) -->
  <g transform="translate(268, 55)">
    <rect width="225" height="230" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="112" y="22" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">ORDE REAKSI 1 (v = k [A])</text>

    <!-- Grafik v vs [A] (Garis Lurus Menanjak Linier) -->
    <line x1="35" y1="130" x2="190" y2="130" stroke="#64748b" stroke-width="1.5"/>
    <line x1="35" y1="130" x2="35" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <line x1="35" y1="130" x2="175" y2="50" stroke="#16a34a" stroke-width="2.5"/>
    <text x="190" y="142" font-size="7.5" fill="#64748b" text-anchor="end">[A]</text>
    <text x="30" y="42" font-size="7.5" fill="#64748b" text-anchor="end">v</text>
    <text x="135" y="80" font-size="8" font-weight="bold" fill="#16a34a">Linier (m=1)</text>

    <!-- Penjelasan -->
    <rect x="15" y="148" width="195" height="70" rx="4" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="25" y="165" font-size="8" font-weight="bold" fill="#15803d">• [A] naik 2× → Laju naik 2¹ = 2×</text>
    <text x="25" y="179" font-size="8" font-weight="bold" fill="#15803d">• Waktu paruh konstan: t½ = ln2 / k</text>
    <text x="25" y="195" font-size="8" font-weight="bold" fill="#15803d">• Satuan k = s⁻¹</text>
    <text x="25" y="207" font-size="7.5" fill="#64748b">Contoh: Peluruhan radioaktif &amp; dekomposisi</text>
  </g>

  <!-- PANEL 3: ORDE 2 (x=510..735) -->
  <g transform="translate(510, 55)">
    <rect width="225" height="230" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="112" y="22" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="middle">ORDE REAKSI 2 (v = k [A]²)</text>

    <!-- Grafik v vs [A] (Kurva Parabola Menanjak) -->
    <line x1="35" y1="130" x2="190" y2="130" stroke="#64748b" stroke-width="1.5"/>
    <line x1="35" y1="130" x2="35" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 35 130 Q 120 125, 175 45" fill="none" stroke="#ea580c" stroke-width="2.5"/>
    <text x="190" y="142" font-size="7.5" fill="#64748b" text-anchor="end">[A]</text>
    <text x="30" y="42" font-size="7.5" fill="#64748b" text-anchor="end">v</text>
    <text x="135" y="70" font-size="8" font-weight="bold" fill="#ea580c">Parabola (m=2)</text>

    <!-- Penjelasan -->
    <rect x="15" y="148" width="195" height="70" rx="4" fill="#fff7ed" stroke="#fed7aa"/>
    <text x="25" y="165" font-size="8" font-weight="bold" fill="#9a3412">• [A] naik 2× → Laju melonjak 2² = 4×</text>
    <text x="25" y="179" font-size="8" font-weight="bold" fill="#9a3412">• [A] naik 3× → Laju melonjak 3² = 9×</text>
    <text x="25" y="195" font-size="8" font-weight="bold" fill="#9a3412">• Satuan k = M⁻¹·s⁻¹</text>
    <text x="25" y="207" font-size="7.5" fill="#64748b">Contoh: Reaksi tumbukan bimolekuler gas</text>
  </g>
</svg>

---

### 3. Cara Menentukan Satuan Tetapan Laju ($k$)
Satuan nilai $k$ berbeda-beda tergantung pada **orde total reaksi**:
$$\\text{Satuan } k = \\frac{\\text{Satuan } v}{(\\text{Satuan Konsentrasi})^{\\text{orde total}}} = \\frac{\\text{M/s}}{\\text{M}^{\\text{orde total}}} = \\mathbf{\\text{M}^{1 - (\\text{orde total})} \\cdot \\text{s}^{-1}}$$

| Orde Total ($m+n$) | Persamaan Laju | Satuan Tetapan Laju $k$ |
| :---: | :--- | :--- |
| **0** | $v = k$ | $\\text{M}\\cdot\\text{s}^{-1}$ atau $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$ |
| **1** | $v = k [\\ce{A}]$ | $\\text{s}^{-1}$ atau $\\text{detik}^{-1}$ |
| **2** | $v = k [\\ce{A}]^2$ atau $v = k [\\ce{A}][\\ce{B}]$ | $\\text{M}^{-1}\\cdot\\text{s}^{-1}$ atau $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ |
| **3** | $v = k [\\ce{A}]^2 [\\ce{B}]$ | $\\text{M}^{-2}\\cdot\\text{s}^{-1}$ atau $\\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$ |`,
      keyFormulas: [
        { name: 'Persamaan Hukum Laju', formula: 'v = k [\\ce{A}]^m [\\ce{B}]^n' },
        { name: 'Rumus Satuan Tetapan Laju k', formula: '\\text{Satuan } k = \\text{M}^{1 - (m+n)} \\cdot \\text{s}^{-1}' },
      ],
    },
    {
      tag: 'metode-penentuan-orde-dan-mekanisme',
      tags: ['metode-laju-awal', 'metode-waktu-reaksi', 'mekanisme-reaksi-elementer', 'tahap-penentu-laju-rds'],
      title: 'Konsep Inti 5: Metode Penentuan Orde Reaksi & Mekanisme Reaksi Bertahap',
      summary: 'Metode eliminasi rasio laju awal vs waktu reaksi serta penentuan persamaan hukum laju dari tahap paling lambat (Rate-Determining Step).',
      content: `Di laboratorium, penentuan orde reaksi dilakukan dengan memvariasikan konsentrasi salah satu reaktan sementara konsentrasi reaktan lainnya dijaga konstan (*Metode Isolasi / Initial Rate Method*).

### 1. Dua Tipe Data Eksperimen di Ujian

#### A. Tipe Data Menggunakan Laju Reaksi ($v$)
Bandingkan dua percobaan di mana reaktan lain berkonsentrasi sama:
$$\\mathbf{\\frac{v_1}{v_2} = \\left(\\frac{[\\ce{A}]_1}{[\\ce{A}]_2}\\right)^m}$$

#### B. Tipe Data Menggunakan Waktu Reaksi ($t$)
Seringkali di laboratorium sekolah, alat yang digunakan adalah *stopwatch* untuk mencatat waktu reaksi ($t$) sampai larutan berubah warna atau timbul kekeruhan.
Karena laju berbanding terbalik dengan waktu ($v = \\frac{1}{t}$), maka perbandingan dibalik:
$$\\mathbf{\\frac{v_1}{v_2} = \\frac{t_2}{t_1} = \\left(\\frac{[\\ce{A}]_1}{[\\ce{A}]_2}\\right)^m}$$

---

### 2. Konsep Mekanisme Reaksi & Tahap Penentu Laju (*RDS*)
Reaksi kimia makroskopis jarang sekali terjadi dalam satu kali benturan serempak molekuler. Sebagian besar reaksi berlangsung melalui serangkaian langkah sederhana bertahap yang disebut **Reaksi Elementer (*Elementary Reactions*)**:
1. **Molekularitas:** Jumlah partikel yang bertumbukan dalam satu langkah elementer (unimolekuler $= 1$, bimolekuler $= 2$, termolekuler $= 3$).
2. **Tahap Penentu Laju (*Rate-Determining Step* / RDS):** Langkah reaksi elementer yang berjalan **paling lambat**.
   > **Aturan Emas:** Persamaan hukum laju reaksi total ditentukan oleh koefisien pada **Tahap Paling Lambat (RDS)**!
3. **Zat Intermediat (*Intermediates*):** Senyawa yang terbentuk di langkah awal dan langsung terkonsumsi habis pada langkah berikutnya. Zat intermediat **tidak boleh muncul** dalam persamaan reaksi akhir maupun persamaan hukum laju reaksi final.`,
      keyFormulas: [
        { name: 'Rasio Data Waktu Reaksi', formula: '\\frac{t_2}{t_1} = \\left(\\frac{[\\ce{A}]_1}{[\\ce{A}]_2}\\right)^m' },
        { name: 'Definisi Hubungan Laju dan Waktu', formula: 'v \\propto \\frac{1}{t}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'contoh-penentuan-orde-waktu-reaksi',
      title: 'Contoh Soal 1: Penentuan Orde Reaksi dari Data Waktu Reaksi (Eksperimen Na2S2O3 + HCl)',
      summary: 'Menentukan orde reaksi, persamaan laju reaksi, dan waktu reaksi pada konsentrasi baru dari tabel waktu (detik).',
      content: `**Soal:**
Reaksi antara larutan natrium tiosulfat dengan asam klorida menghasilkan endapan belerang kuning keruh menurut persamaan:
$$\\ce{Na2S2O3(aq) + 2 HCl(aq) -> 2 NaCl(aq) + H2O(l) + SO2(g) + S(s)}$$
Waktu yang diperlukan sejak pencampuran hingga tanda silang hitam di bawah labu Erlenmeyer tidak lagi terlihat dicatat dalam tabel berikut:

| Percobaan | $[\\ce{Na2S2O3}]\\text{ (M)}$ | $[\\ce{HCl}]\\text{ (M)}$ | Waktu Reaksi $t\\text{ (detik)}$ |
| :---: | :---: | :---: | :---: |
| 1 | $0.10$ | $0.10$ | $80$ |
| 2 | $0.20$ | $0.10$ | $40$ |
| 3 | $0.10$ | $0.20$ | $80$ |

Tentukan:
a) Orde reaksi terhadap $\\ce{Na2S2O3}$ dan terhadap $\\ce{HCl}$!
b) Persamaan laju reaksinya dan orde reaksi total!
c) Berapa detik reaksi akan berlangsung jika digunakan $[\\ce{Na2S2O3}] = 0.40\\text{ M}$ dan $[\\ce{HCl}] = 0.30\\text{ M}$?

---

**Pembahasan:**

Ingat bahwa laju reaksi berbanding terbalik dengan waktu reaksi: $v \\propto \\frac{1}{t}$.
Bentuk umum: $v = k [\\ce{Na2S2O3}]^m [\\ce{HCl}]^n$.

**Langkah 1: Menentukan orde $m$ (terhadap $\\ce{Na2S2O3}$)**
Pilih percobaan 1 dan 2 ($[\\ce{HCl}]$ konstan $= 0.10\\text{ M}$):
$$\\frac{v_2}{v_1} = \\frac{t_1}{t_2} = \\left(\\frac{[\\ce{Na2S2O3}]_2}{[\\ce{Na2S2O3}]_1}\\right)^m$$
$$\\frac{80}{40} = \\left(\\frac{0.20}{0.10}\\right)^m \\implies 2 = (2)^m \\implies \\mathbf{m = 1}$$

**Langkah 2: Menentukan orde $n$ (terhadap $\\ce{HCl}$)**
Pilih percobaan 1 dan 3 ($[\\ce{Na2S2O3}]$ konstan $= 0.10\\text{ M}$):
$$\\frac{v_3}{v_1} = \\frac{t_1}{t_3} = \\left(\\frac{[\\ce{HCl}]_3}{[\\ce{HCl}]_1}\\right)^n$$
$$\\frac{80}{80} = \\left(\\frac{0.20}{0.10}\\right)^n \\implies 1 = (2)^n \\implies \\mathbf{n = 0}$$
*(Artinya perubahan konsentrasi $\\ce{HCl}$ sama sekali tidak memengaruhi laju reaksi).*

**Langkah 3: Tuliskan persamaan laju reaksi**
$$v = k [\\ce{Na2S2O3}]^1 [\\ce{HCl}]^0 \\implies \\mathbf{v = k [\\ce{Na2S2O3}]}$$
Orde total reaksi $= 1 + 0 = \\mathbf{1}$.

---

**Langkah 4: Menghitung waktu reaksi pada kondisi baru (Pertanyaan c)**
Bandingkan kondisi baru (percobaan 4) dengan percobaan 1:
$$\\frac{t_4}{t_1} = \\left(\\frac{[\\ce{Na2S2O3}]_1}{[\\ce{Na2S2O3}]_4}\\right)^1 \\times 1$$
$$\\frac{t_4}{80\\text{ detik}} = \\frac{0.10}{0.40} = \\frac{1}{4} \\implies t_4 = \\frac{80}{4} = \\mathbf{20\\text{ detik}}$$

> **Kesimpulan Evaluator Juri:** Reaksi bersifat orde 1 terhadap tiosulfat dan orde 0 terhadap asam klorida. Peningkatan konsentrasi tiosulfat menjadi $0.40\\text{ M}$ mempercepat laju sebesar $4$ kali lipat, sehingga waktu reaksi terpangkas menjadi hanya 20 detik.`,
    },
    {
      tag: 'contoh-aturan-suhu-laju-reaksi',
      title: 'Contoh Soal 2: Perhitungan Laju dan Waktu Reaksi Berdasarkan Kenaikan Suhu',
      summary: 'Penerapan rumus empiris pelipatan laju reaksi n^(ΔT/10) terhadap laju dan durasi reaksi.',
      content: `**Soal:**
Suatu reaksi kimia berlangsung 2 kali lebih cepat setiap kenaikan temperatur sebesar $10^\\circ\\text{C}$.
Pada temperatur $20^\\circ\\text{C}$, laju reaksi terukur sebesar $v_0 = 1.5 \\times 10^{-3}\\text{ M/s}$.
a) Tentukan laju reaksi tersebut jika temperatur dinaikkan menjadi $60^\\circ\\text{C}$!
b) Jika pada suhu $25^\\circ\\text{C}$ reaksi tersebut selesai dalam waktu $32\\text{ menit}$, berapa detik reaksi akan selesai jika dilakukan pada suhu $55^\\circ\\text{C}$?

---

**Pembahasan:**

Diketahui:
- Faktor kelipatan $n = 2$.
- Interval kenaikan suhu $\\Delta T_0 = 10^\\circ\\text{C}$.

**Bagian a: Menghitung Laju pada Suhu $60^\\circ\\text{C}$**
$$T_1 = 20^\\circ\\text{C}, \\quad T_2 = 60^\\circ\\text{C} \\implies \\Delta T = 60 - 20 = 40^\\circ\\text{C}$$
Gunakan rumus laju:
$$v_2 = v_1 \\times n^{\\frac{T_2 - T_1}{\\Delta T_0}}$$
$$v_{60} = (1.5 \\times 10^{-3}\\text{ M/s}) \\times 2^{\\frac{40}{10}} = (1.5 \\times 10^{-3}) \\times 2^4 = (1.5 \\times 10^{-3}) \\times 16$$
$$\\mathbf{v_{60} = 2.4 \\times 10^{-2}\\text{ M/s} = 0.024\\text{ M/s}}$$

---

**Bagian b: Menghitung Waktu Reaksi pada Suhu $55^\\circ\\text{C}$**
$$T_1 = 25^\\circ\\text{C}, \\quad T_2 = 55^\\circ\\text{C} \\implies \\Delta T = 55 - 25 = 30^\\circ\\text{C}$$
Waktu mula-mula: $t_1 = 32\\text{ menit} = 32 \\times 60 = 1920\\text{ detik}$.
Gunakan rumus waktu reaksi:
$$t_2 = t_1 \\times \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T_0}}$$
$$t_{55} = 32\\text{ menit} \\times \\left(\\frac{1}{2}\\right)^{\\frac{30}{10}} = 32 \\times \\left(\\frac{1}{2}\\right)^3 = 32 \\times \\frac{1}{8} = 4\\text{ menit}$$
Konversi ke satuan detik:
$$t_{55} = 4 \\times 60\\text{ detik} = \\mathbf{240\\text{ detik}}$$

> **Kesimpulan Evaluator Juri:** Kenaikan suhu sebesar $40^\\circ\\text{C}$ melipatgandakan laju reaksi sebesar $16$ kali lipat. Sementara kenaikan sebesar $30^\\circ\\text{C}$ mempercepat reaksi $8$ kali lipat, memangkas waktu reaksi dari 32 menit menjadi hanya 4 menit (240 detik).`,
    },
    {
      tag: 'contoh-orde-reaksi-3-reaktan-dan-tetapan-k',
      title: 'Contoh Soal 3: Penentuan Orde Reaksi Multireaktan, Tetapan Laju k, dan Satuan Kinetika',
      summary: 'Analisis tabel laju awal multikomponen gas NO dan H2 beserta penghitungan nilai tetapan laju k dan satuannya.',
      content: `**Soal:**
Reaksi fasa gas berikut dipelajari kinetikanya pada temperatur $300^\\circ\\text{C}$:
$$\\ce{2 NO(g) + 2 H2(g) -> N2(g) + 2 H2O(g)}$$

Diperoleh data laju awal pembentukan $\\ce{N2}$ sebagai berikut:
| Percobaan | $[\\ce{NO}]\\text{ (M)}$ | $[\\ce{H2}]\\text{ (M)}$ | Laju Awal $v\\text{ (M/s)}$ |
| :---: | :---: | :---: | :---: |
| 1 | $0.10$ | $0.10$ | $1.25 \\times 10^{-5}$ |
| 2 | $0.20$ | $0.10$ | $5.00 \\times 10^{-5}$ |
| 3 | $0.10$ | $0.20$ | $2.50 \\times 10^{-5}$ |

Tentukan:
a) Orde reaksi terhadap $\\ce{NO}$ dan terhadap $\\ce{H2}$!
b) Persamaan laju reaksi lengkap dan nilai tetapan laju $k$ beserta satuan spesifiknya!
c) Laju reaksi jika $[\\ce{NO}] = 0.30\\text{ M}$ dan $[\\ce{H2}] = 0.40\\text{ M}$!

---

**Pembahasan:**

Bentuk umum hukum laju: $v = k [\\ce{NO}]^m [\\ce{H2}]^n$.

**Langkah 1: Mencari orde $m$ (terhadap $\\ce{NO}$)**
Bandingkan percobaan 2 dan 1 ($[\\ce{H2}]$ konstan $= 0.10\\text{ M}$):
$$\\frac{v_2}{v_1} = \\left(\\frac{[\\ce{NO}]_2}{[\\ce{NO}]_1}\\right)^m \\implies \\frac{5.00 \\times 10^{-5}}{1.25 \\times 10^{-5}} = \\left(\\frac{0.20}{0.10}\\right)^m \\implies 4 = 2^m \\implies \\mathbf{m = 2}$$

**Langkah 2: Mencari orde $n$ (terhadap $\\ce{H2}$)**
Bandingkan percobaan 3 dan 1 ($[\\ce{NO}]$ konstan $= 0.10\\text{ M}$):
$$\\frac{v_3}{v_1} = \\left(\\frac{[\\ce{H2}]_3}{[\\ce{H2}]_1}\\right)^n \\implies \\frac{2.50 \\times 10^{-5}}{1.25 \\times 10^{-5}} = \\left(\\frac{0.20}{0.10}\\right)^n \\implies 2 = 2^n \\implies \\mathbf{n = 1}$$

**Langkah 3: Persamaan Laju dan Nilai Tetapan $k$**
$$v = k [\\ce{NO}]^2 [\\ce{H2}]^1 \\quad (\\text{Orde total } = 2 + 1 = 3)$$

Gunakan data percobaan 1 untuk menghitung $k$:
$$1.25 \\times 10^{-5}\\text{ M/s} = k (0.10\\text{ M})^2 (0.10\\text{ M})$$
$$1.25 \\times 10^{-5} = k (1.0 \\times 10^{-3}\\text{ M}^3)$$
$$k = \\frac{1.25 \\times 10^{-5}}{1.0 \\times 10^{-3}} = \\mathbf{1.25 \\times 10^{-2}\\text{ M}^{-2}\\cdot\\text{s}^{-1}}$$

**Langkah 4: Menghitung laju pada kondisi baru (Pertanyaan c)**
$$v = (1.25 \\times 10^{-2}\\text{ M}^{-2}\\cdot\\text{s}^{-1}) \\times (0.30\\text{ M})^2 \\times (0.40\\text{ M})$$
$$v = (1.25 \\times 10^{-2}) \\times (0.090) \\times (0.40) = (1.25 \\times 10^{-2}) \\times 0.036 = \\mathbf{4.5 \\times 10^{-4}\\text{ M/s}}$$

> **Kesimpulan Evaluator Juri:** Reaksi bersifat orde 2 terhadap NO dan orde 1 terhadap H2 (orde total 3). Nilai tetapan laju reaksi adalah $k = 1.25 \\times 10^{-2}\\text{ M}^{-2}\\text{s}^{-1}$, dan laju pada konsentrasi baru terhitung sebesar $4.5 \\times 10^{-4}\\text{ M/s}$.`,
    },
    {
      tag: 'contoh-mekanisme-reaksi-rds',
      title: 'Contoh Soal 4: Pembuktian Hukum Laju dari Mekanisme Reaksi Elementer Bertahap',
      summary: 'Analisis tahap lambat penentu laju (RDS) dan identifikasi zat intermediat pada pembentukan gas NO2F.',
      content: `**Soal:**
Reaksi pembentukan gas nitril fluorida berlangsung menurut persamaan total:
$$\\ce{2 NO2(g) + F2(g) -> 2 NO2F(g)}$$
Melalui penelitian spektroskopi ultrafast, diusulkan mekanisme reaksi dua langkah elementer berikut:
- **Tahap 1 (Lambat / RDS):** $\\ce{NO2(g) + F2(g) ->[k_1] NO2F(g) + F(g)}$
- **Tahap 2 (Cepat):** $\\ce{NO2(g) + F(g) ->[k_2] NO2F(g)}$

a) Identifikasikan spesi yang bertindak sebagai zat intermediat!
b) Tentukan persamaan hukum laju reaksi teoretis yang bersesuaian dengan mekanisme tersebut!
c) Tentukan orde reaksi terhadap $\\ce{NO2}$, orde reaksi terhadap $\\ce{F2}$, dan orde total reaksi!

---

**Pembahasan:**

**Bagian a: Mengidentifikasi Zat Intermediat**
Perhatikan spesi $\\ce{F(g)}$ (atom fluorin bebas):
- Spesi $\\ce{F}$ dihasilkan pada produk Tahap 1.
- Spesi $\\ce{F}$ langsung terkonsumsi sebagai reaktan pada Tahap 2.
- Spesi $\\ce{F}$ tidak muncul dalam persamaan reaksi total.
Maka, **zat intermediat adalah atom $\\ce{F(g)}$**.

---

**Bagian b: Menentukan Persamaan Hukum Laju Reaksi**
Berdasarkan prinsip kinetika kimia, laju reaksi total ditentukan oleh **tahap paling lambat (*Rate-Determining Step* / RDS)**.
Tahap 1 adalah tahap lambat:
$$\\ce{NO2(g) + F2(g) ->[k_1] NO2F(g) + F(g)} \\quad (\\text{Lambat})$$

Karena Tahap 1 merupakan reaksi elementer bimolekuler, koefisien reaktannya secara langsung menjadi pangkat hukum lajunya:
$$\\mathbf{v = k_1 [\\ce{NO2}]^1 [\\ce{F2}]^1}$$

Perhatikan bahwa reaktan pada Tahap 1 ($\\ce{NO2}$ dan $\\ce{F2}$) keduanya adalah molekul reaktan awal murni (bukan zat intermediat), sehingga hukum laju ini sudah final dan sah!

---

**Bagian c: Penentuan Orde Reaksi**
Dari persamaan $v = k [\\ce{NO2}] [\\ce{F2}]$:
- Orde reaksi terhadap $\\ce{NO2} = \\mathbf{1}$.
- Orde reaksi terhadap $\\ce{F2} = \\mathbf{1}$.
- Orde total reaksi $= 1 + 1 = \\mathbf{2}$.

> **Pelajaran Berharga Siswa SMA:** Meskipun koefisien $\\ce{NO2}$ pada persamaan reaksi total adalah $2$, ternyata orde reaksinya bernilai $1$ karena molekul $\\ce{NO2}$ kedua baru ikut bereaksi pada Tahap 2 yang berlangsung sangat cepat (*fast step*), sehingga tidak membatasi laju reaksi keseluruhan.`,
    },
  ],
},

      {
    id: 108,
    topic_number: 8,
    grade: 'Kelas 11',
    semester: 1,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 7,
    title: 'Kesetimbangan Kimia Dasar SMA (Dinamika Reaksi, Tetapan Kc & Kp, Asas Le Chatelier & Derajat Disosiasi)',
    slug: 'kesetimbangan-kimia-dasar-sma',
    category: 'Kimia Fisik',
    level: 'SMA',
    readTimeMinutes: 32,
    summary: 'Eksplorasi komprehensif kesetimbangan kimia dinamis: hukum aksi massa, formulasi matematis tetapan Kc dan Kp, hubungan Kp = Kc(RT)^Δn, manipulasi aljabar tetapan kesetimbangan, analisis pergeseran sistem berdasarkan Asas Le Chatelier, perbandingan kuosien reaksi Q vs K, serta perhitungan derajat disosiasi (α) fasa gas berbasis tabel M-B-S.',
    allTags: [
      'kesetimbangan-kimia',
      'kesetimbangan-dinamis',
      'tetapan-kc-kp',
      'azas-le-chatelier',
      'kuosien-reaksi-q',
      'derajat-disosiasi-alfa',
      'hukum-aksi-massa',
      'pergeseran-kesetimbangan',
      'tabel-mbs',
      'laju-reaksi-maju-balik',
      'kesetimbangan-heterogen',
      'rumus-kc',
      'fasa-padat-murni',
      'kesetimbangan-homogen',
      'ekspresi-kc',
      'proses-kontak',
      'perhitungan-kc',
      'konsentrasi-molar',
      'volume-wadah',
      'dekomposisi-pcl5',
      'faktor-volume-tekanan',
      'faktor-suhu',
      'gas-no2-n2o4',
      'relasi-kp-kc',
      'gas-ideal',
      'delta-n',
      'amonia-haber-bosch',
      'manipulasi-aljabar-k',
      'akar-pangkat-k',
      'pembalikan-reaksi',
      'reaksi-bertahap',
      'pengaruh-suhu',
      'termodinamika-k',
      'reaksi-eksoterm',
      'asas-le-chatelier',
      'prediksi-arah-reaksi',
      'kondisi-awal',
      'gas-hi',
      'gas-inert',
      'helium',
      'volume-tetap-tekanan-tetap',
      'tekanan-parsial',
      'le-chatelier',
      'akar-kuadrat-aljabar',
      'tetapan-kp',
      'hukum-dalton',
      'reduksi-besi',
      'kesetimbangan-ionik',
      'kromat-dikromat',
      'pengaruh-ph',
      'derivasi-aljabar-kp',
      'disosiasi-dimer',
      'kp-disosiasi',
      'tekanan-total',
      'gas-n2o4-no2',
      'persamaan-van-t-hoff',
      'entalpi-standar',
      'termodinamika-kesetimbangan',
      'ketergantungan-suhu',
      'kesetimbangan-simultan',
      'spesi-sekutu',
      'le-chatelier-majemuk',
      'reaksi-berantai',
      'proses-haber-bosch',
      'kompromi-termodinamika-kinetika',
      'energi-ikatan-nitrogen',
      'kondisi-optimum',
      'water-gas-shift',
      'persamaan-kuadrat',
      'persen-konversi',
      'kinetika-kesetimbangan',
      'persamaan-arrhenius',
      'peran-katalis',
      'reaksi-elementer',
      'energi-bebas-gibbs',
      'entropi-standar',
      'relasi-delta-g-k',
      'densitas-uap',
      'massa-molar-efektif',
      'hukum-gas-ideal',
      'kalsinasi-batu-kapur',
      'tekanan-disosiasi',
      'suhu-spontanitas',
      'termodinamika-industri',
    ],

    prerequisites: [
      {
        tag: 'prasyarat-reaksi-reversibel-dan-dinamika',
        title: 'Prasyarat 1: Reaksi Searah (Irreversibel) vs Reaksi Bolak-Balik (Reversibel)',
        summary: 'Pembedaan fundamental reaksi stoikiometri satu arah berkesudahan dengan sistem tertutup bolak-balik yang mencapai keadaan setimbang dinamis.',
        content: `Dalam studi stoikiometri dasar, kita sering berasumsi bahwa reaksi kimia berlangsung searah sampai salah satu atau seluruh pereaksi habis bereaksi. Namun, pada kenyataannya, sebagian besar proses kimiawi di alam dan industri berlangsung secara bolak-balik.

### 1. Klasifikasi Arah Reaksi Kimia
1. **Reaksi Searah (Irreversibel / Tidak Dapat Balik):**
   - Reaksi berlangsung tuntas ke satu arah (dari reaktan menuju produk).
   - Produk reaksi tidak dapat saling bereaksi kembali membentuk zat reaktan asal pada kondisi yang sama.
   - Ditulis menggunakan tanda panah tunggal searah ($\\longrightarrow$).
   - Reaksi berhenti jika minimal salah satu pereaksi telah habis terkonsumsi (**pereaksi pembatas**).
   - *Contoh klasik:* Pembakaran gas metana atau reaksi asam-basa kuat:
     $\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)}$
     $\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$

2. **Reaksi Bolak-Balik (Reversibel / Dapat Balik):**
   - Zat-zat hasil reaksi (produk) dapat bereaksi kembali menghasilkan zat-zat pereaksi semula.
   - Ditulis menggunakan tanda panah ganda dua arah bolak-balik ($\\rightleftharpoons$ atau $\\ce{<=>}$).
   - Reaksi tidak pernah benar-benar berhenti secara mikroskopis, melainkan menuju suatu kondisi khusus yang disebut **Keadaan Setimbang (*Equilibrium State*)**.
   - *Contoh klasik:* Sintesis gas amonia Haber-Bosch dan kesetimbangan gas nitrogen dioksida:
     $\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$
     $\\ce{N2O4(g) <=> 2 NO2(g)}$

---

### 2. Tiga Syarat Mutlak Tercapainya Kesetimbangan Kimia
Suatu sistem reaksi bolak-balik hanya dapat mencapai kesetimbangan sejati apabila memenuhi tiga parameter berikut:
- **Sistem Bersifat Tertutup:** Tidak ada materi (massa zat pereaksi maupun produk) yang keluar atau masuk meninggalkan wadah bejana reaksi.
- **Kondisi Makroskopis Statis pada Suhu Tetap:** Suhu ($T$) dan tekanan sistem dijaga konstan dari pengaruh fluktuasi lingkungan luar.
- **Sifat Dinamis Mikroskopis:** Laju pembentukan produk (laju reaksi maju, $v_{\\text{maju}}$) **tepat sama besar** dengan laju penguraian produk kembali menjadi reaktan (laju reaksi balik, $v_{\\text{balik}}$):
  $\\mathbf{v_{\\text{maju}} = v_{\\text{balik}}}$

> **Esensi Dinamika Kimia:** Pada keadaan setimbang, secara **makroskopis** tidak terlihat perubahan fisik apa pun (warna larutan, konsentrasi spesi, dan tekanan total tampak konstan tak berubah). Namun secara **mikroskopis**, molekul reaktan terus menerus bertransformasi menjadi produk dan molekul produk kembali menjadi reaktan dengan kecepatan yang persis berimbang tanpa henti.`,
      },
      {
        tag: 'prasyarat-hukum-aksi-massa-dan-aturan-fasa',
        title: 'Prasyarat 2: Hukum Aksi Massa (Guldberg & Waage) & Aturan Fasa Zat',
        summary: 'Formulasi rasio konsentrasi produk terhadap reaktan serta aturan peniadaan fasa padat murni (s) dan cairan murni (l) dari ekspresi kesetimbangan.',
        content: `Pada tahun 1864, dua ilmuwan Norwegia, **Cato Guldberg** dan **Peter Waage**, merumuskan hukum fundamental kinetika dan termodinamika yang dikenal sebagai **Hukum Aksi Massa (*Law of Mass Action*)**.

### 1. Bunyi Hukum Aksi Massa
*Pada temperatur konstan, untuk reaksi bolak-balik yang berada dalam keadaan setimbang, perbandingan hasil kali konsentrasi molar zat-zat hasil reaksi (produk) dipangkatkan koefisien reaksinya terhadap hasil kali konsentrasi molar zat-zat pereaksi (reaktan) dipangkatkan koefisien reaksinya selalu bernilai konstan (tetap).*

Untuk persamaan reaksi umum:
$\\ce{a A + b B <=> c C + d D}$
Tetapan perbandingan tersebut dirumuskan:
$K = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}$

---

### 2. Aturan Emas Penulisan Fasa Zat dalam Rumus Kesetimbangan
Tidak semua spesi yang tertulis dalam persamaan reaksi diikutsertakan dalam rumus tetapan kesetimbangan:

| Fasa Spesi Kimia | Simbol | Masuk Rumus $K_c$? | Masuk Rumus $K_p$? | Alasan Termodinamika & Kimiawi |
| :--- | :---: | :---: | :---: | :--- |
| **Larutan Akuatik** | $aq$ | **YA** | **TIDAK** | Konsentrasi zat terlarut bervariasi; tidak menghasilkan tekanan uap parsial gas. |
| **Gas** | $g$ | **YA** | **YA** | Memiliki konsentrasi molar ($n/V$) dan tekanan parsial yang dinamis. |
| **Padatan Murni** | $s$ | **TIDAK** | **TIDAK** | Kerapatan zat murni konstan; aktivitas kimianya bernilai tepat $1$. |
| **Cairan Murni** | $l$ | **TIDAK** | **TIDAK** | Kerapatan pelarut/cairan murni konstan; aktivitas kimianya bernilai tepat $1$. |

---

### 3. Pembedaan Kesetimbangan Homogen vs Heterogen
- **Kesetimbangan Homogen:** Seluruh pereaksi dan produk berada dalam satu wujud fasa zat yang seragam.
  - Fasa gas semua:
    $\\ce{2 SO2(g) + O2(g) <=> 2 SO3(g)} \\implies K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2 [\\ce{O2}]}$
  - Fasa larutan semua:
    $\\ce{CH3COOH(aq) <=> CH3COO-(aq) + H+(aq)} \\implies K_c = \\frac{[\\ce{CH3COO-}][\\ce{H+}]}{[\\ce{CH3COOH}]}$

- **Kesetimbangan Heterogen:** Melibatkan spesi-spesi dengan dua atau lebih wujud fasa zat yang berbeda.
  - Dekomposisi termal batu kapur:
    $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$
    Karena $\\ce{CaCO3(s)}$ dan $\\ce{CaO(s)}$ berfasa padat murni ($s$), keduanya dikeluarkan dari ekspresi kesetimbangan:
    $\\mathbf{K_c = [\\ce{CO2}]} \\quad \\text{dan} \\quad \\mathbf{K_p = P_{\\ce{CO2}}}$
  - Reaksi reduksi uap air oleh serbuk besi panas:
    $\\ce{3 Fe(s) + 4 H2O(g) <=> Fe3O4(s) + 4 H2(g)} \\implies \\mathbf{K_c = \\frac{[\\ce{H2}]^4}{[\\ce{H2O}]^4}}$`,
      },
    ],
    core_concepts: [
      {
        tag: 'dinamika-kesetimbangan-kc-kp-dan-relasinya',
        tags: ['tetapan-kesetimbangan-kc', 'tetapan-kesetimbangan-kp', 'relasi-kp-kc', 'kurva-konsentrasi-kesetimbangan'],
        title: 'Konsep Inti 1: Tetapan Kesetimbangan Konsentrasi (Kc) & Tekanan Parsial (Kp)',
        summary: 'Definisi matematis Kc dan Kp, interpretasi fisis nilai K terhadap stabilitas produk/reaktan, serta derivasi hubungan termodinamika Kp = Kc(RT)^Δn.',
        content: `Tetapan kesetimbangan merupakan parameter termodinamika khas yang mendeskripsikan seberapa jauh suatu reaksi kimia telah berlangsung saat mencapai kesetimbangan pada temperatur tertentu.

### 1. Visualisasi Dinamika Menuju Keadaan Setimbang

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <linearGradient id="gridBg8" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <marker id="arrowHead8" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>

  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="0.5">DUA PERSPEKTIF TERCAPAINYA KESETIMBANGAN KIMIA DINAMIS</text>

  <!-- SISI KIRI: LAJU REAKSI VS WAKTU -->
  <g transform="translate(30, 55)">
    <rect x="0" y="0" width="335" height="250" fill="url(#gridBg8)" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="167" y="24" fill="#1e293b" font-size="12" font-weight="bold" text-anchor="middle">1. Grafik Laju Reaksi vs Waktu</text>
    
    <!-- Sumbu Koordinat -->
    <line x1="45" y1="210" x2="310" y2="210" stroke="#64748b" stroke-width="2" marker-end="url(#arrowHead8)"/>
    <line x1="45" y1="210" x2="45" y2="35" stroke="#64748b" stroke-width="2" marker-end="url(#arrowHead8)"/>
    <text x="315" y="214" fill="#64748b" font-size="10" font-weight="bold">t</text>
    <text x="42" y="30" fill="#64748b" font-size="10" font-weight="bold" text-anchor="end">Laju (v)</text>

    <!-- Garis Horisontal Setimbang (v maju = v balik) -->
    <line x1="170" y1="120" x2="305" y2="120" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 3"/>
    
    <!-- Kurva Laju Maju: turun dari tinggi ke garis setimbang -->
    <path d="M 45 45 Q 110 115, 170 120" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="170" y1="120" x2="300" y2="120" stroke="#dc2626" stroke-width="2.5"/>
    <text x="52" y="60" fill="#dc2626" font-size="10" font-weight="bold">v maju (reaktan -> produk)</text>

    <!-- Kurva Laju Balik: naik dari 0 ke garis setimbang -->
    <path d="M 45 210 Q 110 125, 170 120" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="170" y1="120" x2="300" y2="120" stroke="#2563eb" stroke-width="2.5"/>
    <text x="52" y="195" fill="#2563eb" font-size="10" font-weight="bold">v balik (produk -> reaktan)</text>

    <!-- Titik Kesetimbangan Tercapai -->
    <line x1="170" y1="210" x2="170" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="170" y="225" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">t setimbang</text>
    <rect x="180" y="105" width="118" height="22" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
    <text x="239" y="120" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">v maju = v balik</text>
  </g>

  <!-- SISI KANAN: KONSENTRASI VS WAKTU -->
  <g transform="translate(395, 55)">
    <rect x="0" y="0" width="335" height="250" fill="url(#gridBg8)" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="167" y="24" fill="#1e293b" font-size="12" font-weight="bold" text-anchor="middle">2. Grafik Konsentrasi vs Waktu</text>

    <!-- Sumbu Koordinat -->
    <line x1="45" y1="210" x2="310" y2="210" stroke="#64748b" stroke-width="2" marker-end="url(#arrowHead8)"/>
    <line x1="45" y1="210" x2="45" y2="35" stroke="#64748b" stroke-width="2" marker-end="url(#arrowHead8)"/>
    <text x="315" y="214" fill="#64748b" font-size="10" font-weight="bold">t</text>
    <text x="42" y="30" fill="#64748b" font-size="10" font-weight="bold" text-anchor="end">[Zat]</text>

    <!-- Kurva Reaktan: turun lalu mendatar (plateau) -->
    <path d="M 45 60 Q 115 150, 170 155" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="170" y1="155" x2="300" y2="155" stroke="#dc2626" stroke-width="2.5"/>
    <text x="52" y="55" fill="#dc2626" font-size="10" font-weight="bold">[Reaktan] awal tinggi</text>

    <!-- Kurva Produk: naik lalu mendatar (plateau) -->
    <path d="M 45 210 Q 115 90, 170 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="170" y1="85" x2="300" y2="85" stroke="#2563eb" stroke-width="2.5"/>
    <text x="52" y="180" fill="#2563eb" font-size="10" font-weight="bold">[Produk] awal nol</text>

    <!-- Wilayah Plateau Konstan -->
    <line x1="170" y1="210" x2="170" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    <rect x="175" y="170" width="125" height="32" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1"/>
    <text x="237" y="184" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">Konsentrasi Konstan</text>
    <text x="237" y="196" fill="#047857" font-size="9" text-anchor="middle">(Tidak harus bernilai sama!)</text>
  </g>
</svg>

---

### 2. Formulasi Matematis Tetapan Kesetimbangan: $K_c$ dan $K_p$

#### A. Tetapan Kesetimbangan Konsentrasi ($K_c$)
Dihitung berbasis konsentrasi molaritas ($[\\text{M}] = \\text{mol/L}$) masing-masing spesi dalam fasa gas dan larutan akuatik:
$\\mathbf{K_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}}$

#### B. Tetapan Kesetimbangan Tekanan Parsial ($K_p$)
Khusus untuk reaksi yang melibatkan **fasa gas ($g$)**, konsentrasi dapat diwakili oleh tekanan parsial masing-masing gas (dalam satuan atmosfer, $\\text{atm}$):
$\\mathbf{K_p = \\frac{(P_{\\ce{C}})^c (P_{\\ce{D}})^d}{(P_{\\ce{A}})^a (P_{\\ce{B}})^b}}$

Di mana tekanan parsial gas $i$ ($P_i$) dihitung menggunakan **Hukum Tekanan Parsial Dalton**:
$P_i = X_i \\times P_{\\text{total}} = \\left(\\frac{n_i}{n_{\\text{total gas}}}\\right) \\times P_{\\text{total}}$

---

### 3. Hubungan Termodinamika antara $K_p$ dan $K_c$
Berdasarkan Persamaan Gas Ideal: $P V = n R T \\implies P = \\left(\\frac{n}{V}\\right) R T = [\\text{M}] R T$.
Dengan mensubstitusikan ekspresi tekanan parsial ke dalam rumus $K_p$, diperoleh formula relasi universal:
$\\mathbf{K_p = K_c (R \\cdot T)^{\\Delta n}}$

Di mana:
- $R$: Tetapan gas ideal ($R = 0.08206 \\approx 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$).
- $T$: Temperatur mutlak dalam Kelvin ($T = ^\\circ\\text{C} + 273.15$).
- $\\mathbf{\\Delta n}$: Selisih jumlah koefisien produk gas dikurangi koefisien reaktan gas:
  $\\Delta n = \\sum \\text{koefisien gas produk} - \\sum \\text{koefisien gas reaktan}$

> **Kaidah Khusus $\\Delta n = 0$:** Jika jumlah koefisien gas di ruas kanan tepat sama dengan ruas kiri ($\\Delta n = 0$), maka $(RT)^0 = 1$, sehingga secara otomatis:
> $\\mathbf{K_p = K_c}$`,
        keyFormulas: [
          { name: 'Rumus Kc', formula: 'K_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}' },
          { name: 'Rumus Kp', formula: 'K_p = \\frac{(P_{\\ce{C}})^c (P_{\\ce{D}})^d}{(P_{\\ce{A}})^a (P_{\\ce{B}})^b}' },
          { name: 'Relasi Kp dan Kc', formula: 'K_p = K_c (R \\cdot T)^{\\Delta n}' },
          { name: 'Tekanan Parsial Dalton', formula: 'P_i = \\left(\\frac{n_i}{n_{\\text{total}}}\\right) \\times P_{\\text{total}}' },
        ],
      },
      {
        tag: 'manipulasi-aljabar-tetapan-kesetimbangan',
        tags: ['aljabar-kesetimbangan', 'pembalikan-reaksi-k', 'perkalian-koefisien-k', 'penjumlahan-reaksi-k'],
        title: 'Konsep Inti 2: Manipulasi Aljabar Tetapan Kesetimbangan (K)',
        summary: 'Aturan transformasi nilai K saat persamaan reaksi dibalik, dikalikan koefisien n, dibagi n, atau dijumlahkan dalam reaksi bertahap.',
        content: `Seringkali di ujian SMA dan OSN Kimia, kita diminta menentukan nilai tetapan kesetimbangan untuk suatu reaksi target dari beberapa reaksi kesetimbangan perantara yang telah diketahui nilai $K$-nya.

Sangat penting dipahami bahwa **manipulasi aljabar nilai $K$ sangat berbeda dengan manipulasi termokimia ($\\Delta H$)!** Termokimia bersifat linier-aditif (penjumlahan aljabar), sedangkan kesetimbangan bersifat eksponensial-multiplikatif (perkalian dan pemangkatan).

---

### 1. Infografis Peta Transformasi Aljabar Kesetimbangan

<svg viewBox="0 0 760 310" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#1e293b" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13.5" font-weight="bold" text-anchor="middle">ATURAN MANIPULASI ALJABAR TETAPAN KESETIMBANGAN (K)</text>

  <!-- Reaksi Dasar Asal -->
  <rect x="250" y="55" width="260" height="48" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
  <text x="380" y="75" fill="#312e81" font-size="12" font-weight="bold" text-anchor="middle">Reaksi Asal: A + B ⇌ C + D</text>
  <text x="380" y="93" fill="#4338ca" font-size="11.5" font-weight="bold" text-anchor="middle">Tetapan Kesetimbangan = K₁</text>

  <!-- TIGA CABANG TRANSFORMASI -->

  <!-- Cabang 1: DIBALIK (Kiri) -->
  <g transform="translate(30, 130)">
    <rect x="0" y="0" width="215" height="155" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="15" y="12" width="185" height="26" rx="4" fill="#ef4444"/>
    <text x="107" y="29" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. REAKSI DIBALIK</text>
    <text x="107" y="60" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">C + D ⇌ A + B</text>
    <line x1="20" y1="75" x2="195" y2="75" stroke="#fca5a5" stroke-width="1"/>
    <text x="107" y="100" fill="#7f1d1d" font-size="11" text-anchor="middle">Nilai K Menjadi Kebalikan:</text>
    <rect x="35" y="112" width="145" height="30" rx="6" fill="#ffffff" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="107" y="132" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">K₂ = 1 / K₁</text>
  </g>

  <!-- Cabang 2: DIKALIKAN FAKTOR n (Tengah) -->
  <g transform="translate(272, 130)">
    <rect x="0" y="0" width="215" height="155" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
    <rect x="15" y="12" width="185" height="26" rx="4" fill="#ca8a04"/>
    <text x="107" y="29" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. DIKALI FAKTOR n</text>
    <text x="107" y="60" fill="#854d0e" font-size="11" font-weight="bold" text-anchor="middle">nA + nB ⇌ nC + nD</text>
    <line x1="20" y1="75" x2="195" y2="75" stroke="#fde047" stroke-width="1"/>
    <text x="107" y="100" fill="#713f12" font-size="11" text-anchor="middle">Nilai K Dipangkatkan n:</text>
    <rect x="35" y="112" width="145" height="30" rx="6" fill="#ffffff" stroke="#a16207" stroke-width="1.5"/>
    <text x="107" y="132" fill="#a16207" font-size="13" font-weight="bold" text-anchor="middle">K₂ = (K₁)ⁿ</text>
  </g>

  <!-- Cabang 3: DIJUMLAHKAN DUA REAKSI (Kanan) -->
  <g transform="translate(515, 130)">
    <rect x="0" y="0" width="215" height="155" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <rect x="15" y="12" width="185" height="26" rx="4" fill="#10b981"/>
    <text x="107" y="29" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. DUA REAKSI DIJUMLAH</text>
    <text x="107" y="55" fill="#065f46" font-size="10.5" text-anchor="middle">Reaksi I (K₁) + Reaksi II (K₂)</text>
    <text x="107" y="70" fill="#047857" font-size="10.5" font-weight="bold" text-anchor="middle">= Reaksi III Total</text>
    <line x1="20" y1="78" x2="195" y2="78" stroke="#a7f3d0" stroke-width="1"/>
    <text x="107" y="100" fill="#064e3b" font-size="11" text-anchor="middle">Nilai K Dikalikan Bersama:</text>
    <rect x="35" y="112" width="145" height="30" rx="6" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
    <text x="107" y="132" fill="#059669" font-size="13" font-weight="bold" text-anchor="middle">K₃ = K₁ × K₂</text>
  </g>
</svg>

---

### 2. Rangkuman Komparasi Kontras: Termokimia vs Kesetimbangan

| Operasi Aljabar Reaksi | Pengaruh pada Perubahan Entalpi ($\\Delta H$) | Pengaruh pada Tetapan Kesetimbangan ($K$) | Contoh Kasus Kesetimbangan |
| :--- | :--- | :--- | :--- |
| **Reaksi Dibalik Arahnya** | Tanda dibalik: $\\Delta H' = -\\Delta H$ | Nilai diinverskan: $K' = \\frac{1}{K}$ | Jika $K = 4$, maka reaksi kebalikannya memiliki $K' = \\frac{1}{4} = 0.25$. |
| **Dikalikan Faktor $n$** | Dikalikan: $\\Delta H' = n \\cdot \\Delta H$ | Dipangkatkan: $K' = K^n$ | Jika reaksi dikalikan 2, $K' = K^2$. |
| **Dibagi Faktor $n$ (dikali $1/n$)** | Dibagi: $\\Delta H' = \\frac{\\Delta H}{n}$ | Diakarkan: $K' = K^{1/n} = \\sqrt[n]{K}$ | Jika reaksi dibagi 2, $K' = \\sqrt{K}$. |
| **Penjumlahan Reaksi Bertahap** | Dijumlahkan: $\\Delta H_{\\text{total}} = \\sum \\Delta H_i$ | Dikalikan: $K_{\\text{total}} = K_1 \\times K_2 \\times \\dots$ | Jika tahap 1 $K_1 = 10$ dan tahap 2 $K_2 = 5$, maka $K_{\\text{total}} = 50$. |`,
        keyFormulas: [
          { name: 'Pembalikan Reaksi', formula: 'K_{\\text{balik}} = \\frac{1}{K_{\\text{awal}}}' },
          { name: 'Perkalian Koefisien n', formula: 'K_{\\text{baru}} = (K_{\\text{lama}})^n' },
          { name: 'Pembagian Koefisien n', formula: 'K_{\\text{baru}} = \\sqrt[n]{K_{\\text{lama}}}' },
          { name: 'Penjumlahan Dua Reaksi', formula: 'K_{\\text{total}} = K_1 \\times K_2' },
        ],
      },
      {
        tag: 'azas-le-chatelier-dan-faktor-pergeseran',
        tags: ['azas-le-chatelier', 'faktor-pergeseran-kesetimbangan', 'pengaruh-suhu-dan-k', 'peran-katalis-kesetimbangan'],
        title: 'Konsep Inti 3: Asas Le Chatelier & Empat Faktor Pergeseran Kesetimbangan',
        summary: 'Prinsip aksi-reaksi termodinamika Henri Le Chatelier serta respon sistem terhadap perubahan konsentrasi, tekanan/volume, temperatur, dan peran katalis.',
        content: `Ketika suatu sistem reaksi kimia telah mencapai kesetimbangan dinamis, sistem tersebut akan cenderung mempertahankan posisinya. Namun, jika lingkungan luar memberikan gangguan atau perubahan kondisi, sistem akan merespon untuk meminimalkan dampak gangguan tersebut.

Prinsip universal ini dirumuskan oleh kimiawan Prancis **Henri Louis Le Chatelier** pada tahun 1884 yang dikenal sebagai **Asas Le Chatelier (*Le Chatelier\'s Principle*)**:
> *"Jika suatu sistem kesetimbangan diberikan suatu aksi (gangguan luar), sistem tersebut akan melakukan reaksi pergeseran sedemikian rupa untuk mengurangi pengaruh aksi tersebut hingga tercapai keadaan setimbang baru."*

---

### 1. Infografis Empat Faktor Pengendali Pergeseran Kesetimbangan

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">ASAS LE CHATELIER: 4 FAKTOR PENGARUH & RESPON PERGESERAN SISTEM</text>

  <!-- PANEL 1: KONSENTRASI (x=20..185) -->
  <g transform="translate(20, 55)">
    <rect x="0" y="0" width="168" height="265" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="148" height="26" rx="4" fill="#3b82f6"/>
    <text x="84" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. KONSENTRASI</text>
    
    <text x="84" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Aksi & Respon:</text>
    <rect x="10" y="70" width="148" height="70" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="16" y="86" fill="#1e40af" font-size="9.5" font-weight="bold">+ Zat Ditambah:</text>
    <text x="16" y="100" fill="#1e3a8a" font-size="9">Sistem bergeser</text>
    <text x="16" y="113" fill="#1d4ed8" font-size="9" font-weight="bold">MENJAUHI zat tsb.</text>
    <text x="16" y="128" fill="#64748b" font-size="8.5">(habiskan kelebihan)</text>

    <rect x="10" y="148" width="148" height="68" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="16" y="164" fill="#1e40af" font-size="9.5" font-weight="bold">- Zat Dikurangi:</text>
    <text x="16" y="178" fill="#1e3a8a" font-size="9">Sistem bergeser</text>
    <text x="16" y="191" fill="#1d4ed8" font-size="9" font-weight="bold">MENDEKATI zat tsb.</text>
    <text x="16" y="205" fill="#64748b" font-size="8.5">(gantikan kekurangan)</text>

    <rect x="10" y="225" width="148" height="28" rx="4" fill="#fee2e2"/>
    <text x="84" y="243" fill="#b91c1c" font-size="9.5" font-weight="bold" text-anchor="middle">Nilai K TETAP!</text>
  </g>

  <!-- PANEL 2: TEKANAN & VOLUME (x=205..370) -->
  <g transform="translate(205, 55)">
    <rect x="0" y="0" width="168" height="265" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="148" height="26" rx="4" fill="#0284c7"/>
    <text x="84" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. VOLUME / TEKANAN</text>

    <text x="84" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Khusus Fasa Gas (g):</text>
    <rect x="10" y="70" width="148" height="70" rx="4" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
    <text x="16" y="86" fill="#0369a1" font-size="9.5" font-weight="bold">V Diperkecil (P Naik):</text>
    <text x="16" y="100" fill="#075985" font-size="9">Bergeser ke arah</text>
    <text x="16" y="113" fill="#0284c7" font-size="9.5" font-weight="bold">KOEFISIEN GAS</text>
    <text x="16" y="127" fill="#0284c7" font-size="9.5" font-weight="bold">PALING KECIL</text>

    <rect x="10" y="148" width="148" height="68" rx="4" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
    <text x="16" y="164" fill="#0369a1" font-size="9.5" font-weight="bold">V Diperbesar (P Turun):</text>
    <text x="16" y="178" fill="#075985" font-size="9">Bergeser ke arah</text>
    <text x="16" y="191" fill="#0284c7" font-size="9.5" font-weight="bold">KOEFISIEN GAS</text>
    <text x="16" y="204" fill="#0284c7" font-size="9.5" font-weight="bold">PALING BESAR</text>

    <rect x="10" y="225" width="148" height="28" rx="4" fill="#fee2e2"/>
    <text x="84" y="243" fill="#b91c1c" font-size="9.5" font-weight="bold" text-anchor="middle">Nilai K TETAP!</text>
  </g>

  <!-- PANEL 3: TEMPERATUR (x=390..555) -->
  <g transform="translate(390, 55)">
    <rect x="0" y="0" width="168" height="265" rx="8" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="10" y="10" width="148" height="26" rx="4" fill="#dc2626"/>
    <text x="84" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. SUHU / TEMPERATUR</text>

    <text x="84" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Termokimia (ΔH):</text>
    <rect x="10" y="70" width="148" height="70" rx="4" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
    <text x="16" y="86" fill="#b91c1c" font-size="9.5" font-weight="bold">T Dinaikkan (Dipanasi):</text>
    <text x="16" y="100" fill="#991b1b" font-size="9">Sistem menyerap panas,</text>
    <text x="16" y="113" fill="#dc2626" font-size="9.5" font-weight="bold">BERGESER KE ARAH</text>
    <text x="16" y="127" fill="#dc2626" font-size="9.5" font-weight="bold">ENDOTERM (ΔH > 0)</text>

    <rect x="10" y="148" width="148" height="68" rx="4" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
    <text x="16" y="164" fill="#b91c1c" font-size="9.5" font-weight="bold">T Diturunkan (Didingin):</text>
    <text x="16" y="178" fill="#991b1b" font-size="9">Sistem melepas panas,</text>
    <text x="16" y="191" fill="#dc2626" font-size="9.5" font-weight="bold">BERGESER KE ARAH</text>
    <text x="16" y="204" fill="#dc2626" font-size="9.5" font-weight="bold">EKSOTERM (ΔH < 0)</text>

    <rect x="10" y="225" width="148" height="28" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <text x="84" y="243" fill="#854d0e" font-size="9.5" font-weight="bold" text-anchor="middle">NILAI K BERUBAH!</text>
  </g>

  <!-- PANEL 4: KATALIS (x=575..740) -->
  <g transform="translate(575, 55)">
    <rect x="0" y="0" width="165" height="265" rx="8" fill="#f8fafc" stroke="#10b981" stroke-width="1.5"/>
    <rect x="10" y="10" width="145" height="26" rx="4" fill="#10b981"/>
    <text x="82" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. KATALIS</text>

    <text x="82" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Zat Pemercepat Laju:</text>
    <rect x="10" y="70" width="145" height="146" rx="4" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="16" y="88" fill="#047857" font-size="9.5" font-weight="bold">Fungsi Katalis:</text>
    <text x="16" y="104" fill="#065f46" font-size="9">• Menurunkan Ea</text>
    <text x="16" y="117" fill="#065f46" font-size="9">  untuk v maju & balik</text>
    <text x="16" y="130" fill="#065f46" font-size="9">  secara seimbang.</text>
    <text x="16" y="148" fill="#047857" font-size="9.5" font-weight="bold">Efek Pergeseran:</text>
    <text x="16" y="164" fill="#b91c1c" font-size="9.5" font-weight="bold">TIDAK ADA PERGESERAN</text>
    <text x="16" y="178" fill="#065f46" font-size="9">Hanya mempercepat</text>
    <text x="16" y="191" fill="#065f46" font-size="9">tercapainya setimbang.</text>

    <rect x="10" y="225" width="145" height="28" rx="4" fill="#fee2e2"/>
    <text x="82" y="243" fill="#b91c1c" font-size="9.5" font-weight="bold" text-anchor="middle">Nilai K TETAP!</text>
  </g>
</svg>

---

### 2. Catatan Kritis Penentu Ujian Kimia SMA:
1. **Satu-satunya Faktor yang Mengubah Nilai $K$:**
   - Hanya **temperatur (suhu)** yang dapat mengubah nilai numerik tetapan kesetimbangan ($K_c$ dan $K_p$).
   - Perubahan konsentrasi, tekanan, volume, maupun penambahan katalis **sama sekali tidak mengubah nilai $K$**.
2. **Kondisi Khusus Koefisien Gas Sama ($\\Delta n = 0$):**
   - Jika $\\sum \\text{koef gas kiri} = \\sum \\text{koef gas kanan}$, maka perubahan volume atau tekanan total bejana **tidak akan menggeser kesetimbangan sama sekali** (contoh: $\\ce{H2(g) + I2(g) <=> 2 HI(g)}$).
3. **Penambahan Gas Inert (Gas Mulia):**
   - Jika gas inert (seperti Helium atau Argon) ditambahkan pada **volume tetap**, tekanan parsial gas-gas reaktan dan produk tidak berubah $\\implies$ **kesetimbangan tidak bergeser**.
   - Jika gas inert ditambahkan pada **tekanan tetap** (sehingga volume wadah mengembang membesar), sistem bergeser ke arah koefisien gas terbesar.`,
        keyFormulas: [
          { name: 'Kaidah Suhu Naik', formula: 'T \\uparrow \\implies \\text{Bergeser ke Endoterm } (\\Delta H > 0)' },
          { name: 'Kaidah Suhu Turun', formula: 'T \\downarrow \\implies \\text{Bergeser ke Eksoterm } (\\Delta H < 0)' },
          { name: 'Kaidah Volume Kecil', formula: 'V \\downarrow \\iff P \\uparrow \\implies \\text{Bergeser ke Koefisien Gas Terkecil}' },
          { name: 'Kaidah Volume Besar', formula: 'V \\uparrow \\iff P \\downarrow \\implies \\text{Bergeser ke Koefisien Gas Terbesar}' },
        ],
      },
      {
        tag: 'kuosien-reaksi-dan-prediksi-arah',
        tags: ['kuosien-reaksi-q', 'prediksi-arah-reaksi', 'kondisi-non-setimbang', 'spontanitas-pergeseran'],
        title: 'Konsep Inti 4: Kuosien Reaksi (Q) & Prediksi Spontanitas Arah Reaksi',
        summary: 'Evaluasi kondisi sistem non-setimbang melalui rasio sesaat Q untuk menentukan apakah reaksi akan bergeser maju (ke kanan) atau mundur (ke kiri).',
        content: `Jika kita mencampurkan sejumlah zat pereaksi dan produk dalam suatu bejana tertutup, bagaimana kita dapat mengetahui apakah campuran tersebut sudah berada dalam keadaan setimbang ataukah masih akan terus bereaksi? Untuk menjawab hal ini, kimiawan menggunakan besaran yang disebut **Kuosien Reaksi (*Reaction Quotient*, $Q$)**.

### 1. Definisi dan Formulasi Kuosien Reaksi ($Q$)
Bentuk matematis persamaan kuosien reaksi identik persis dengan persamaan tetapan kesetimbangan ($K$), namun konsentrasi atau tekanan yang dimasukkan adalah **kondisi sesaat saat itu juga (*initial / current conditions*)**, bukan kondisi saat setimbang:
$Q_c = \\frac{[\\ce{C}]_{\\text{sesaat}}^c [\\ce{D}]_{\\text{sesaat}}^d}{[\\ce{A}]_{\\text{sesaat}}^a [\\ce{B}]_{\\text{sesaat}}^b}$

---

### 2. Garis Skala Perbandingan $Q$ vs $K$

<svg viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">SKALA LOGIKAL PREDIKSI ARAH PERGESERAN: KUOSIEN REAKSI (Q) VS TETAPAN (K)</text>

  <!-- Sumbu Horisontal Nilai Q -->
  <line x1="50" y1="120" x2="710" y2="120" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
  
  <!-- Titik Acuan Setimbang: Q = K (Tengah) -->
  <circle cx="380" cy="120" r="16" fill="#f59e0b" stroke="#ffffff" stroke-width="3"/>
  <rect x="315" y="55" width="130" height="42" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="380" y="74" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">Q = K</text>
  <text x="380" y="89" fill="#92400e" font-size="10" text-anchor="middle">SETIMBANG DINAMIS</text>

  <!-- ZONA KIRI: Q < K -->
  <g transform="translate(60, 150)">
    <rect x="0" y="0" width="280" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="140" y="24" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">KONDISI 1: Q &lt; K</text>
    <text x="140" y="44" fill="#1e3a8a" font-size="10.5" text-anchor="middle">Rasio produk masih terlalu sedikit!</text>
    <!-- Panah Tebal ke Kanan -->
    <rect x="35" y="55" width="210" height="32" rx="6" fill="#2563eb"/>
    <text x="140" y="76" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">BERGESER KE KANAN (MAJU ➔)</text>
  </g>

  <!-- ZONA KANAN: Q > K -->
  <g transform="translate(420, 150)">
    <rect x="0" y="0" width="280" height="100" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="140" y="24" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">KONDISI 2: Q &gt; K</text>
    <text x="140" y="44" fill="#991b1b" font-size="10.5" text-anchor="middle">Rasio produk sudah terlalu berlebih!</text>
    <!-- Panah Tebal ke Kiri -->
    <rect x="35" y="55" width="210" height="32" rx="6" fill="#dc2626"/>
    <text x="140" y="76" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">BERGESER KE KIRI (MUNDUR ⬅)</text>
  </g>
</svg>

---

### 3. Tiga Kaidah Perbandingan $Q$ vs $K$:
1. **Jika $Q < K$:**
   - Konsentrasi produk saat ini lebih kecil daripada konsentrasi produk pada kesetimbangan ideal.
   - Untuk mencapai kesetimbangan, reaktan harus terus bereaksi membentuk produk tambahan.
   - **Arah Pergeseran:** Reaksi bergeser **ke arah kanan (arah pembentukan produk / reaksi maju)** sampai $Q = K$.

2. **Jika $Q = K$:**
   - Campuran zat telah tepat berada dalam **keadaan kesetimbangan kimia dinamis**.
   - Laju reaksi maju tepat seimbang dengan laju reaksi balik.
   - Tidak ada pergeseran netto konsentrasi.

3. **Jika $Q > K$:**
   - Konsentrasi produk saat ini terlalu besar melebihi proporsi kesetimbangannya.
   - Untuk mengembalikan kesetimbangan, sebagian produk harus terurai kembali menjadi reaktan.
   - **Arah Pergeseran:** Reaksi bergeser **ke arah kiri (arah pembentukan reaktan / reaksi balik)** sampai nilai $Q$ turun setara dengan $K$.`,
        keyFormulas: [
          { name: 'Definisi Kuosien Reaksi', formula: 'Q_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b} \\quad (\\text{kondisi sesaat})' },
          { name: 'Kriteria Maju ke Kanan', formula: 'Q < K \\implies \\text{Reaksi Bergeser Maju ke Kanan } (\\longrightarrow)' },
          { name: 'Kriteria Keadaan Setimbang', formula: 'Q = K \\implies \\text{Sistem Berada dalam Kesetimbangan}' },
          { name: 'Kriteria Mundur ke Kiri', formula: 'Q > K \\implies \\text{Reaksi Bergeser Mundur ke Kiri } (\\longleftarrow)' },
        ],
      },
      {
        tag: 'disosiasi-gas-dan-derajat-disosiasi-alfa',
        tags: ['derajat-disosiasi', 'kesetimbangan-disosiasi', 'tabel-mbs-gas', 'kp-disosiasi-alfa'],
        title: 'Konsep Inti 5: Reaksi Disosiasi Fasa Gas & Derajat Disosiasi (α)',
        summary: 'Kajian kuantitatif penguraian zat menjadi senyawa yang lebih sederhana, definisi matematis fraksi α, serta pemodelan sistematis tabel M-B-S.',
        content: `Reaksi disosiasi adalah penguraian suatu zat menjadi zat-zat yang susunannya lebih sederhana. Banyak reaksi disosiasi fasa gas yang bersifat reversibel dan mencapai kesetimbangan, seperti penguraian $\\ce{PCl5(g)}$, $\\ce{N2O4(g)}$, dan $\\ce{NH3(g)}$.

### 1. Definisi Derajat Disosiasi ($\\alpha$)
Derajat disosiasi (diberi simbol $\\alpha$) menyatakan perbandingan antara jumlah mol zat yang terurai (bereaksi) terhadap jumlah mol zat mula-mula:
$\\mathbf{\\alpha = \\frac{\\text{Jumlah Mol Zat yang Terurai (Bereaksi)}}{\\text{Jumlah Mol Zat Mula-Mula}}}$

- Nilai $\\alpha$ selalu berada pada rentang: $0 \\le \\alpha \\le 1$.
- Jika dinyatakan dalam persen ($\\alpha\\%$): $\\alpha\\% = \\alpha \\times 100\\%$.
- Jika $\\alpha = 0$: Zat sama sekali tidak terurai.
- Jika $\\alpha = 1$: Zat terurai sempurna seluruhnya (reaksi berkesudahan 100%).
- Jika $0 < \\alpha < 1$: Berada dalam kesetimbangan disosiasi.

---

### 2. Algoritma Tabel M-B-S untuk Reaksi Disosiasi

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">PEMODELAN TABEL M-B-S PADA REAKSI DISOSIASI: A(g) ⇌ B(g) + C(g)</text>

  <!-- Tabel MBS Visual Kiri (x=30..470) -->
  <g transform="translate(30, 55)">
    <rect x="0" y="0" width="440" height="245" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    
    <!-- Header Baris Reaksi -->
    <rect x="10" y="10" width="420" height="32" rx="4" fill="#1e293b"/>
    <text x="75" y="31" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Keadaan</text>
    <text x="185" y="31" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">A(g)</text>
    <text x="250" y="31" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">⇌</text>
    <text x="315" y="31" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">B(g)</text>
    <text x="365" y="31" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">+</text>
    <text x="400" y="31" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">C(g)</text>

    <!-- Baris Mula-mula -->
    <rect x="10" y="48" width="420" height="36" fill="#ffffff"/>
    <text x="75" y="71" fill="#475569" font-size="11" font-weight="bold" text-anchor="middle">Mula-mula (M)</text>
    <text x="185" y="71" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">a mol</text>
    <text x="315" y="71" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>
    <text x="400" y="71" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>

    <!-- Baris Bereaksi -->
    <rect x="10" y="88" width="420" height="36" fill="#fef2f2"/>
    <text x="75" y="111" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">Bereaksi (B)</text>
    <text x="185" y="111" fill="#dc2626" font-size="11.5" font-weight="bold" text-anchor="middle">- aα mol</text>
    <text x="315" y="111" fill="#059669" font-size="11.5" font-weight="bold" text-anchor="middle">+ aα mol</text>
    <text x="400" y="111" fill="#059669" font-size="11.5" font-weight="bold" text-anchor="middle">+ aα mol</text>

    <!-- Baris Setimbang -->
    <rect x="10" y="128" width="420" height="42" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="4"/>
    <text x="75" y="154" fill="#1d4ed8" font-size="11.5" font-weight="bold" text-anchor="middle">Setimbang (S)</text>
    <text x="185" y="154" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">a(1 - α) mol</text>
    <text x="315" y="154" fill="#047857" font-size="11.5" font-weight="bold" text-anchor="middle">aα mol</text>
    <text x="400" y="154" fill="#047857" font-size="11.5" font-weight="bold" text-anchor="middle">aα mol</text>

    <!-- Total Mol Gas Setimbang -->
    <rect x="10" y="178" width="420" height="55" rx="4" fill="#f1f5f9"/>
    <text x="220" y="198" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">Total Mol Gas = a(1 - α) + aα + aα = a(1 + α) mol</text>
    <text x="220" y="218" fill="#64748b" font-size="10" text-anchor="middle">Fraksi mol masing-masing spesi dihitung dari n spesi / n total gas.</text>
  </g>

  <!-- KARTU FORMULA CEPAT KANAN (x=490..735) -->
  <g transform="translate(490, 55)">
    <rect x="0" y="0" width="245" height="245" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="12" y="12" width="221" height="28" rx="4" fill="#d97706"/>
    <text x="122" y="30" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">FORMULA CEPAT Kp DISOSIASI</text>

    <text x="12" y="62" fill="#92400e" font-size="10.5" font-weight="bold">Untuk Reaksi: A ⇌ B + C</text>
    <rect x="12" y="72" width="221" height="55" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="1.5"/>
    <text x="122" y="96" fill="#b45309" font-size="12.5" font-weight="bold" text-anchor="middle">Kp = [ α² / (1 - α²) ] × P_tot</text>
    <text x="122" y="115" fill="#78350f" font-size="9.5" text-anchor="middle">P_tot = Tekanan total sistem</text>

    <line x1="12" y1="138" x2="233" y2="138" stroke="#fde68a" stroke-width="1"/>
    
    <text x="12" y="156" fill="#92400e" font-size="10.5" font-weight="bold">Untuk Reaksi: A ⇌ 2 B</text>
    <rect x="12" y="166" width="221" height="55" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="1.5"/>
    <text x="122" y="190" fill="#b45309" font-size="12.5" font-weight="bold" text-anchor="middle">Kp = [ 4α² / (1 - α²) ] × P_tot</text>
    <text x="122" y="209" fill="#78350f" font-size="9.5" text-anchor="middle">(Contoh: N2O4 ⇌ 2 NO2)</text>
  </g>
</svg>

---

### 3. Derivasi Formula Hubungan $K_p$ dan $\\alpha$
Perhatikan reaksi disosiasi umum 1 mol gas menghasilkan 2 mol gas:
$\\ce{A(g) <=> B(g) + C(g)}$
1. **Mol pada Kesetimbangan:**
   - $n_A = a(1 - \\alpha)$
   - $n_B = a\\alpha$
   - $n_C = a\\alpha$
   - $n_{\\text{total}} = a(1 - \\alpha) + a\\alpha + a\\alpha = a(1 + \\alpha)$

2. **Tekanan Parsial Masing-Masing Gas (Hukum Dalton):**
   - $P_A = \\frac{a(1 - \\alpha)}{a(1 + \\alpha)} P_{\\text{tot}} = \\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}$
   - $P_B = \\frac{a\\alpha}{a(1 + \\alpha)} P_{\\text{tot}} = \\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}$
   - $P_C = \\frac{a\\alpha}{a(1 + \\alpha)} P_{\\text{tot}} = \\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}$

3. **Substitusi ke Rumus $K_p$:**
   $K_p = \\frac{P_B \\cdot P_C}{P_A} = \\frac{\\left(\\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}\\right) \\left(\\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}\\right)}{\\left(\\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}\\right)} = \\frac{\\frac{\\alpha^2}{(1 + \\alpha)^2} P_{\\text{tot}}^2}{\\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}}$
   $K_p = \\frac{\\alpha^2}{(1 - \\alpha)(1 + \\alpha)} P_{\\text{tot}} \\implies \\mathbf{K_p = \\frac{\\alpha^2}{1 - \\alpha^2} \\cdot P_{\\text{tot}}}$`,
        keyFormulas: [
          { name: 'Definisi Derajat Disosiasi', formula: '\\alpha = \\frac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}}' },
          { name: 'Mol Setimbang Reaktan', formula: 'n_{\\text{reaktan}} = n_0 (1 - \\alpha)' },
          { name: 'Rumus Kp Disosiasi Simetris', formula: 'K_p = \\frac{\\alpha^2}{1 - \\alpha^2} \\cdot P_{\\text{total}} \\quad (\\ce{A <=> B + C})' },
          { name: 'Rumus Kp Disosiasi Dimer', formula: 'K_p = \\frac{4\\alpha^2}{1 - \\alpha^2} \\cdot P_{\\text{total}} \\quad (\\ce{A <=> 2 B})' },
        ],
      },
    {
      tag: 'pengayaan-kalkulasi-eksak-kuadratik-kesetimbangan',
      tags: [
        'persamaan-kuadratik-kesetimbangan',
        'water-gas-shift',
        'kalkulasi-eksak-kc',
        'derajat-disosiasi-lanjut',
        'tabel-mbs-kuadratik'
      ],
      title: 'Pengayaan HOTS/OSN: Solusi Eksak Kuadratik Kesetimbangan Gas & Reaksi Water-Gas Shift',
      summary: 'Metode kalkulasi analitis eksak persamaan kuadratik kesetimbangan tanpa aproksimasi penyederhanaan pada reaksi fasa gas Water-Gas Shift (CO + H2O <=> CO2 + H2) dan evaluasi pergeseran derajat disosiasi.',
      content: `Pada kesetimbangan fasa gas dengan nilai tetapan kesetimbangan $K_c$ yang moderat ($10^{-2} < K_c < 10^2$), penyederhanaan aproksimasi $a - x \\approx a$ tidak boleh digunakan dan harus diselesaikan secara aljabar eksak:

### 1. Model Reaksi Water-Gas Shift (WGSR)

Reaksi pergeseran gas air (WGSR) memegang peranan vital dalam sintesis gas hidrogen murni untuk industri amonia dan sel bahan bakar:
$$\\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)} \\quad \\Delta H^\\circ = -41.2\\text{ kJ/mol}$$
Jika konsentrasi awal adalah $[\\ce{CO}]_0 = a$ dan $[\\ce{H2O}]_0 = b$, dengan $[\\ce{CO2}]_0 = [\\ce{H2}]_0 = 0$:

| Komponen | Mula-mula (M) | Bereaksi (M) | Setimbang (M) |
| :---: | :---: | :---: | :---: |
| $\\ce{CO}$ | $a$ | $-x$ | $a - x$ |
| $\\ce{H2O}$ | $b$ | $-x$ | $b - x$ |
| $\\ce{CO2}$ | $0$ | $+x$ | $x$ |
| $\\ce{H2}$ | $0$ | $+x$ | $x$ |

---

### 2. Formulasi Persamaan Kuadratik Standar

Ekspresi tetapan kesetimbangan $K_c$:
$$K_c = \\frac{[\\ce{CO2}][\\ce{H2}]}{[\\ce{CO}][\\ce{H2O}]} = \\frac{x^2}{(a - x)(b - x)}$$
Ekspansi perkalian penyebut menghasilkan bentuk kuadratik umum $A x^2 + B x + C = 0$:
$$x^2 = K_c (a b - (a + b)x + x^2) \\implies (1 - K_c)x^2 + K_c(a + b)x - K_c a b = 0$$
- Solusi eksak dicari menggunakan rumus kuadrat:
  $$x = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}$$
- **Kriteria Validitas Fisis:** Akar persamaan yang memenuhi kriteria fisis kimia adalah akar positif yang memenuhi pertidaksamaan $0 < x < \\min(a, b)$.`,
      keyFormulas: [
        { name: 'Ekspresi Kuadratik WGSR', formula: '(1 - K_c)x^2 + K_c(a+b)x - K_c a b = 0' },
        { name: 'Solusi Kuadratik Rumus ABC', formula: 'x = \\frac{-B + \\sqrt{B^2 - 4AC}}{2A} \\quad (0 < x < \\min(a,b))' }
      ]
    },
    ],
    worked_examples: [
      {
        tag: 'contoh-perhitungan-kc-gas-homogen-mbs',
        tags: ['contoh-kc-mbs', 'kesetimbangan-homogen', 'gas-hi-h2-i2', 'perhitungan-mbs'],
        title: 'Contoh Soal 1: Perhitungan Nilai Kc Sistem Gas Homogen Sintesis HI via Tabel M-B-S',
        summary: 'Penerapan tabel Mula-mula, Bereaksi, Setimbang pada reaksi pembentukan hidrogen iodida dalam bejana tertutup.',
        content: `**Soal:**
Ke dalam sebuah bejana tertutup yang bervolume $2.0\\text{ Liter}$ pada temperatur $450^\\circ\\text{C}$, dimasukkan $0.50\\text{ mol}$ gas hidrogen ($\\ce{H2}$) dan $0.50\\text{ mol}$ uap iodin ($\\ce{I2}$). Gas-gas tersebut bereaksi membentuk gas hidrogen iodida menurut persamaan:
$\\ce{H2(g) + I2(g) <=> 2 HI(g)}$
Setelah sistem mencapai kesetimbangan, teranalisis terbentuk $0.80\\text{ mol}$ gas $\\ce{HI}$.

Tentukan:
a) Komposisi jumlah mol masing-masing gas pada saat kesetimbangan!
b) Konsentrasi molar ($[\\text{M}]$) setiap komponen gas pada kesetimbangan!
c) Nilai tetapan kesetimbangan konsentrasi ($K_c$) reaksi tersebut pada $450^\\circ\\text{C}$!

---

**Pembahasan:**

**Langkah 1: Susun Tabel M-B-S (Mula-mula, Bereaksi, Setimbang)**
Diketahui:
- Mula-mula: $n(\\ce{H2}) = 0.50\\text{ mol}$, $n(\\ce{I2}) = 0.50\\text{ mol}$, $n(\\ce{HI}) = 0\\text{ mol}$.
- Setimbang: $n(\\ce{HI}) = 0.80\\text{ mol}$.

Berdasarkan stoikiometri reaksi:
- Pembentukan $0.80\\text{ mol } \\ce{HI}$ memerlukan reaktan sebesar koefisiennya:
  - $\\ce{H2}$ yang bereaksi $= \\frac{1}{2} \\times 0.80\\text{ mol} = 0.40\\text{ mol}$.
  - $\\ce{I2}$ yang bereaksi $= \\frac{1}{2} \\times 0.80\\text{ mol} = 0.40\\text{ mol}$.

Tabel Stoikiometri Mol:
| Spesi Kimia | $\\ce{H2(g)}$ | $\\ce{I2(g)}$ | $\\ce{2 HI(g)}$ |
| :--- | :---: | :---: | :---: |
| **Mula-mula (M)** | $0.50\\text{ mol}$ | $0.50\\text{ mol}$ | $0\\text{ mol}$ |
| **Bereaksi (B)** | $-0.40\\text{ mol}$ | $-0.40\\text{ mol}$ | $+0.80\\text{ mol}$ |
| **Setimbang (S)** | $\\mathbf{0.10\\text{ mol}}$ | $\\mathbf{0.10\\text{ mol}}$ | $\\mathbf{0.80\\text{ mol}}$ |

---

**Langkah 2: Hitung Konsentrasi Molar Setimbang ($V = 2.0\\text{ L}$)**
$[\\ce{H2}] = \\frac{n}{V} = \\frac{0.10\\text{ mol}}{2.0\\text{ L}} = \\mathbf{0.050\\text{ M}}$
$[\\ce{I2}] = \\frac{n}{V} = \\frac{0.10\\text{ mol}}{2.0\\text{ L}} = \\mathbf{0.050\\text{ M}}$
$[\\ce{HI}] = \\frac{n}{V} = \\frac{0.80\\text{ mol}}{2.0\\text{ L}} = \\mathbf{0.40\\text{ M}}$

---

**Langkah 3: Hitung Nilai $K_c$**
Tuliskan ekspresi hukum aksi massa:
$K_c = \\frac{[\\ce{HI}]^2}{[\\ce{H2}] [\\ce{I2}]}$
Substitusikan nilai konsentrasi molar setimbang:
$K_c = \\frac{(0.40)^2}{(0.050) \\times (0.050)} = \\frac{0.1600}{0.0025} = \\mathbf{64}$

> **Trik Cepat Siswa Berprestasi:** Perhatikan bahwa jumlah koefisien di kedua ruas sama: $\\Delta n = 2 - (1 + 1) = 0$. Pada reaksi dengan $\\Delta n = 0$, volume wadah ($V$) akan saling meniadakan secara aljabar:
> $K_c = \\frac{\\left(\\frac{n_{\\ce{HI}}}{V}\\right)^2}{\\left(\\frac{n_{\\ce{H2}}}{V}\\right) \\left(\\frac{n_{\\ce{I2}}}{V}\\right)} = \\frac{(n_{\\ce{HI}})^2}{(n_{\\ce{H2}}) (n_{\\ce{I2}})} = \\frac{(0.80)^2}{(0.10)(0.10)} = \\frac{0.64}{0.01} = 64$
> Sehingga untuk reaksi $\\Delta n = 0$, nilai $K_c$ dapat langsung dihitung menggunakan perbandingan jumlah mol zat tanpa membaginya dengan volume bejana!
>
> **Kesimpulan Evaluator Juri:** Nilai tetapan kesetimbangan konsentrasi adalah $K_c = 64$. Nilai $K_c > 1$ membuktikan bahwa pada kesetimbangan, pembentukan produk HI jauh lebih dominan dibandingkan reaktan yang tersisa.`,
      },
      {
        tag: 'contoh-kesetimbangan-heterogen-kp-nh4hs',
        tags: ['contoh-kp-heterogen', 'kesetimbangan-padat-gas', 'tekanan-parsial', 'konversi-kp-kc'],
        title: 'Contoh Soal 2: Kesetimbangan Heterogen Dekomposisi Padatan NH4HS & Penentuan Nilai Kp',
        summary: 'Perhitungan tekanan parsial gas amonia dan hidrogen sulfida dari tekanan total sistem serta penentuan nilai tetapan Kp.',
        content: `**Soal:**
Padatan amonium hidrogensulfida ($\\ce{NH4HS}$) mengalami dekomposisi termal dalam bejana tertutup menghasilkan gas amonia dan hidrogen sulfida:
$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$
Pada suhu $25^\\circ\\text{C}$, sejumlah sampel padatan $\\ce{NH4HS}$ murni dimasukkan ke dalam labu hampa udara tertutup. Setelah sistem mencapai kesetimbangan kimia, tekanan total gas di dalam bejana terukur sebesar $0.80\\text{ atm}$.

Tentukan:
a) Tekanan parsial masing-masing gas ($\\ce{NH3}$ dan $\\ce{H2S}$) pada kesetimbangan!
b) Nilai tetapan kesetimbangan tekanan ($K_p$) pada suhu $25^\\circ\\text{C}$!
c) Nilai tetapan kesetimbangan konsentrasi ($K_c$) pada temperatur yang sama ($R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$)!

---

**Pembahasan:**

**Bagian a: Menghitung Tekanan Parsial Gas**
1. Karena bejana awalnya merupakan labu hampa udara, seluruh gas yang ada di dalam bejana berasal murni dari dekomposisi padatan $\\ce{NH4HS(s)}$.
2. Dari koefisien reaksi: $1\\text{ mol } \\ce{NH4HS(s)} \\implies 1\\text{ mol } \\ce{NH3(g)} + 1\\text{ mol } \\ce{H2S(g)}$.
   Maka jumlah mol gas $\\ce{NH3}$ dan $\\ce{H2S}$ yang dihasilkan selalu sama ($n_{\\ce{NH3}} = n_{\\ce{H2S}}$), sehingga fraksi mol keduanya bernilai identik:
   $X_{\\ce{NH3}} = X_{\\ce{H2S}} = 0.50$
3. Berdasarkan Hukum Dalton:
   $P_{\\text{total}} = P_{\\ce{NH3}} + P_{\\ce{H2S}}$
   $2 P = 0.80\\text{ atm} \\implies P_{\\ce{NH3}} = P_{\\ce{H2S}} = \\frac{0.80\\text{ atm}}{2} = \\mathbf{0.40\\text{ atm}}$

---

**Bagian b: Menghitung Nilai $K_p$**
Karena $\\ce{NH4HS}$ berfasa padat murni ($s$), aktivitasnya konstan ($= 1$) dan tidak disertakan dalam rumus kesetimbangan:
$K_p = P_{\\ce{NH3}} \\times P_{\\ce{H2S}}$
$K_p = (0.40) \\times (0.40) = \\mathbf{0.16}$

---

**Bagian c: Menghitung Nilai $K_c$**
Gunakan relasi $K_p = K_c (RT)^{\\Delta n} \\implies K_c = \\frac{K_p}{(RT)^{\\Delta n}}$:
- Temperatur mutlak: $T = 25 + 273.15 = 298.15\\text{ K}$.
- Selisih koefisien gas: $\\Delta n = (1 + 1) - 0 = 2$ (padatan reaktan tidak dihitung!).
- Nilai $RT = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 298.15\\text{ K} \\approx 24.478\\text{ L}\\cdot\\text{atm/mol}$.
- $(RT)^2 = (24.478)^2 \\approx 599.18$.

Hitung $K_c$:
$K_c = \\frac{0.16}{599.18} \\approx \\mathbf{2.67 \\times 10^{-4}}$

> **Kesimpulan Evaluator Juri:** Pada kesetimbangan heterogen ini, tekanan parsial kedua gas terdistribusi simetris masing-masing sebesar $0.40\\text{ atm}$, menghasilkan tetapan $K_p = 0.16$ dan nilai $K_c = 2.67 \\times 10^{-4}$.`,
      },
      {
        tag: 'contoh-kuosien-reaksi-dan-le-chatelier-haber-bosch',
        tags: ['contoh-le-chatelier', 'kuosien-reaksi-haber-bosch', 'pengaruh-tekanan-suhu', 'gas-amonia-sintesis'],
        title: 'Contoh Soal 3: Sintesis Amonia Haber-Bosch, Evaluasi Kuosien Reaksi Q, dan Analisis Asas Le Chatelier',
        summary: 'Penentuan arah pergeseran spontan campuran gas non-setimbang serta prediksi kuantitatif respon sistem terhadap kompresi volume.',
        content: `**Soal:**
Reaksi sintesis gas amonia melalui Proses Haber-Bosch memegang peranan krusial dalam pasokan pupuk pertanian global:
$\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)} \\quad \\Delta H = -92.4\\text{ kJ}$
Pada temperatur $400^\\circ\\text{C}$, tetapan kesetimbangan konsentrasi bernilai $K_c = 0.50$.
Di dalam reaktor bervolume $1.0\\text{ Liter}$, dianalisis sampel campuran gas dengan komposisi:
- $[\\ce{N2}] = 0.20\\text{ M}$
- $[\\ce{H2}] = 0.10\\text{ M}$
- $[\\ce{NH3}] = 0.050\\text{ M}$

Tentukan:
a) Nilai kuosien reaksi ($Q_c$) dan prediksi apakah sistem sudah setimbang atau ke arah mana reaksi akan bergeser secara spontan!
b) Berdasarkan Asas Le Chatelier, ramalkan pergeseran kesetimbangan jika:
   1. Temperatur reaktor dinaikkan dari $400^\\circ\\text{C}$ menjadi $500^\\circ\\text{C}$.
   2. Tekanan dinaikkan dengan memperkecil volume reaktor menjadi $0.50\\text{ Liter}$.
   3. Gas argon (gas mulia inert) dipompakan ke dalam wadah pada volume tetap.

---

**Pembahasan:**

**Bagian a: Evaluasi Kuosien Reaksi ($Q_c$)**
Bentuk ekspresi $Q_c$:
$Q_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}] [\\ce{H2}]^3}$
Masukkan data konsentrasi yang ada:
$Q_c = \\frac{(0.050)^2}{(0.20) \\times (0.10)^3} = \\frac{0.0025}{0.20 \\times 0.0010} = \\frac{0.0025}{0.00020} = \\mathbf{12.5}$

Bandingkan nilai $Q_c$ dengan $K_c$:
$Q_c = 12.5 \\quad \\text{dan} \\quad K_c = 0.50 \\implies \\mathbf{Q_c > K_c}$
- Karena $Q_c > K_c$, jumlah produk amonia ($\\ce{NH3}$) di dalam reaktor saat ini **terlalu berlebih** melampaui proporsi kesetimbangannya.
- Untuk mengembalikan sistem ke kondisi setimbang, sebagian $\\ce{NH3}$ harus terurai kembali menjadi $\\ce{N2}$ dan $\\ce{H2}$.
- **Arah Pergeseran:** Reaksi akan bergeser secara spontan **ke arah Kiri (arah reaktan / pembentukan $\\ce{N2}$ dan $\\ce{H2}$)** sampai rasio konsentrasi mencapai nilai $K_c = 0.50$.

---

**Bagian b: Prediksi Pengaruh Gangguan Luar (Asas Le Chatelier)**
1. **Penaikan Temperatur ($T$ naik dari $400^\\circ\\text{C}$ ke $500^\\circ\\text{C}$):**
   - Reaksi pembentukan $\\ce{NH3}$ ke kanan bersifat **eksotermik** ($\\Delta H = -92.4\\text{ kJ} < 0$).
   - Kenaikan suhu memaksa sistem menyerap kalor dengan bergeser ke arah **endotermik (ke arah Kiri)**.
   - Dampak: Hasil produksi amonia berkurang dan **nilai $K_c$ menurun**.

2. **Volume Diperkecil Menjadi $0.50\\text{ L}$ (Tekanan Diperbesar):**
   - Hitung jumlah koefisien gas:
     - Ruas Kiri: $1 + 3 = 4\\text{ mol gas}$.
     - Ruas Kanan: $2\\text{ mol gas}$.
   - Pengecilan volume menyebabkan kerapatan partikel gas melonjak. Sistem merespon dengan bergeser ke ruas yang memiliki **jumlah mol gas paling sedikit**.
   - Dampak: Kesetimbangan bergeser **ke arah Kanan (meningkatkan rendemen produksi $\\ce{NH3}$)**. *Nilai $K_c$ tetap!*

3. **Penambahan Gas Argon pada Volume Tetap:**
   - Karena volume wadah dan jumlah mol gas reaktan/produk tidak berubah, konsentrasi molar ($[n/V]$) maupun tekanan parsial dari $\\ce{N2}$, $\\ce{H2}$, dan $\\ce{NH3}$ **sama sekali tidak berubah**.
   - Dampak: Penambahan gas inert pada volume tetap **TIDAK MENGGESER kesetimbangan kimia sama sekali**!

> **Kesimpulan Evaluator Juri:** Campuran gas awal belum setimbang dan akan bergeser ke kiri karena $Q_c > K_c$. Untuk memaksimalkan hasil produksi amonia di industri pupuk, pabrik menerapkan tekanan tinggi (menggeser ke kanan) dan suhu optimum moderat dipadukan dengan katalis besi berbasis Asas Le Chatelier.`,
      },
      {
        tag: 'contoh-derajat-disosiasi-dan-kp-pcl5',
        tags: ['contoh-alfa-disosiasi', 'kp-pcl5', 'tekanan-total-parsial', 'disosiasi-fasa-gas'],
        title: 'Contoh Soal 4: Perhitungan Derajat Disosiasi (α), Tekanan Parsial, dan Tetapan Kp Gas PCl5',
        summary: 'Pemodelan aljabar derajat disosiasi gas fosforus pentaklorida dari data tekanan total wadah pada temperatur tinggi.',
        content: `**Soal:**
Gas fosforus pentaklorida ($\\ce{PCl5}$) mengalami reaksi penguraian termal dalam wadah tertutup menurut persamaan kesetimbangan:
$\\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$
Sejumlah gas $\\ce{PCl5}$ murni dipanaskan pada suhu $250^\\circ\\text{C}$ hingga tercapai kesetimbangan dengan tekanan total terukur sebesar $P_{\\text{total}} = 2.0\\text{ atm}$. Jika pada kondisi setimbang tersebut derajat disosiasi $\\alpha = 0.50$ ($50\\%$ terurai):

Tentukan:
a) Fraksi mol masing-masing komponen gas pada keadaan setimbang!
b) Tekanan parsial masing-masing gas ($P_{\\ce{PCl5}}$, $P_{\\ce{PCl3}}$, dan $P_{\\ce{Cl2}}$)!
c) Nilai tetapan kesetimbangan tekanan ($K_p$) reaksi disosiasi tersebut pada $250^\\circ\\text{C}$!

---

**Pembahasan:**

**Langkah 1: Susun Komposisi Mol Berbasis Derajat Disosiasi ($\\alpha$)**
Misalkan jumlah mol mula-mula gas $\\ce{PCl5} = a\\text{ mol}$.
Diketahui derajat disosiasi $\\alpha = 0.50$.
- Mol $\\ce{PCl5}$ yang terurai (bereaksi) $= a \\times \\alpha = 0.50 a\\text{ mol}$.
- Sesuai koefisien reaksi $1 : 1 : 1$:
  - $\\ce{PCl3}$ yang terbentuk $= +0.50 a\\text{ mol}$.
  - $\\ce{Cl2}$ yang terbentuk $= +0.50 a\\text{ mol}$.

Tabel Stoikiometri Mol:
| Komponen | $\\ce{PCl5(g)}$ | $\\ce{PCl3(g)}$ | $\\ce{Cl2(g)}$ |
| :--- | :---: | :---: | :---: |
| **Mula-mula (M)** | $a\\text{ mol}$ | $0$ | $0$ |
| **Bereaksi (B)** | $-0.50 a\\text{ mol}$ | $+0.50 a\\text{ mol}$ | $+0.50 a\\text{ mol}$ |
| **Setimbang (S)** | $\\mathbf{0.50 a\\text{ mol}}$ | $\\mathbf{0.50 a\\text{ mol}}$ | $\\mathbf{0.50 a\\text{ mol}}$ |

Hitung jumlah total mol gas pada kesetimbangan:
$n_{\\text{total}} = n_{\\ce{PCl5}} + n_{\\ce{PCl3}} + n_{\\ce{Cl2}}$
$n_{\\text{total}} = 0.50 a + 0.50 a + 0.50 a = \\mathbf{1.50 a\\text{ mol}}$

---

**Bagian a: Menghitung Fraksi Mol Masing-Masing Gas ($X_i$)**
$X_{\\ce{PCl5}} = \\frac{n_{\\ce{PCl5}}}{n_{\\text{total}}} = \\frac{0.50 a}{1.50 a} = \\mathbf{\\frac{1}{3} \\approx 0.333}$
$X_{\\ce{PCl3}} = \\frac{n_{\\ce{PCl3}}}{n_{\\text{total}}} = \\frac{0.50 a}{1.50 a} = \\mathbf{\\frac{1}{3} \\approx 0.333}$
$X_{\\ce{Cl2}} = \\frac{n_{\\ce{Cl2}}}{n_{\\text{total}}} = \\frac{0.50 a}{1.50 a} = \\mathbf{\\frac{1}{3} \\approx 0.333}$

---

**Bagian b: Menghitung Tekanan Parsial Gas ($P_{\\text{total}} = 2.0\\text{ atm}$)**
Gunakan Hukum Dalton ($P_i = X_i \\times P_{\\text{total}}$):
$P_{\\ce{PCl5}} = \\frac{1}{3} \\times 2.0\\text{ atm} = \\mathbf{\\frac{2}{3}\\text{ atm} \\approx 0.667\\text{ atm}}$
$P_{\\ce{PCl3}} = \\frac{1}{3} \\times 2.0\\text{ atm} = \\mathbf{\\frac{2}{3}\\text{ atm} \\approx 0.667\\text{ atm}}$
$P_{\\ce{Cl2}} = \\frac{1}{3} \\times 2.0\\text{ atm} = \\mathbf{\\frac{2}{3}\\text{ atm} \\approx 0.667\\text{ atm}}$

---

**Bagian c: Menghitung Nilai $K_p$**
Rumus tetapan kesetimbangan tekanan:
$K_p = \\frac{P_{\\ce{PCl3}} \\times P_{\\ce{Cl2}}}{P_{\\ce{PCl5}}}$
Substitusikan nilai tekanan parsial:
$K_p = \\frac{\\left(\\frac{2}{3}\\right) \\times \\left(\\frac{2}{3}\\right)}{\\left(\\frac{2}{3}\\right)} = \\mathbf{\\frac{2}{3} \\approx 0.667}$

> **Verifikasi Trik Formula Cepat Derajat Disosiasi:**
> Untuk reaksi disosiasi tipe $\\ce{A <=> B + C}$:
> $K_p = \\frac{\\alpha^2}{1 - \\alpha^2} \\times P_{\\text{total}}$
> Substitusikan $\\alpha = 0.50$ dan $P_{\\text{total}} = 2.0\\text{ atm}$:
> $K_p = \\frac{(0.50)^2}{1 - (0.50)^2} \\times 2.0 = \\frac{0.25}{1 - 0.25} \\times 2.0 = \\frac{0.25}{0.75} \\times 2.0 = \\frac{1}{3} \\times 2.0 = \\frac{2}{3} \\approx 0.667$
> *Formula cepat terbukti 100% konsisten dan sangat akurat!*
>
> **Kesimpulan Evaluator Juri:** Pada dekomposisi $\\ce{PCl5}$ dengan $\\alpha = 0.50$ dan tekanan total $2.0\\text{ atm}$, tekanan parsial ketiga gas bernilai setara ($0.667\\text{ atm}$), menghasilkan tetapan kesetimbangan $K_p = 0.667$.`,
      },
    ],
  },
  {
    id: 109,
    topic_number: 9,
    grade: 'Kelas 11',
    semester: 2,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 5,
    title: 'Larutan Asam-Basa & Titrasi Netralisasi (Teori Asam Basa, Perhitungan pH, Indikator & Titrasi Asidimetri-Alkalimetri)',
    slug: 'larutan-asam-basa-titrasi-netralisasi',
    category: 'Kimia Larutan',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Kajian mendalam kimia larutan asam-basa: evolusi tiga teori asam-basa (Arrhenius, Brønsted-Lowry dengan pasangan konjugasi, dan Lewis dengan ikatan kovalen koordinasi), kesetimbangan autoprotolisis air (Kw) dan skala pH logaritmik Sørensen, algoritma perhitungan [H+], [OH-], dan pH untuk asam/basa kuat bervalensi dan asam/basa lemah (Ka, Kb, derajat ionisasi α), trayek pH indikator asam-basa visual, serta analisis kurva titrasi volumetri asam-basa netralisasi dan titik ekuivalen.',
    allTags: [
      'asam-basa',
      'teori-bronsted-lowry',
      'asam-basa-lewis',
      'derajat-keasaman-ph',
      'asam-lemah-ka',
      'basa-lemah-kb',
      'indikator-asam-basa',
      'titrasi-netralisasi',
      'kurva-titrasi',
      'titik-ekuivalen',
      'bronsted-lowry',
      'asam-basa-konjugasi',
      'transfer-proton',
      'larutan-amonia',
      'asam-kuat',
      'asam-diprotik',
      'asam-sulfat',
      'perhitungan-ph',
      'basa-kuat',
      'valensi-basa',
      'barium-hidroksida',
      'perhitungan-ph-poh',
      'asam-lemah',
      'tetapan-ka',
      'derajat-ionisasi-alfa',
      'titrasi-asam-basa',
      'asidimetri-alkalimetri',
      'indikator-fenolftalein',
      'ikatan-kovalen-koordinasi',
      'senyawa-kompleks',
      'akseptor-peb',
      'autoprotolisis-air',
      'tetapan-kw',
      'pengaruh-suhu',
      'definisi-ph-netral',
      'hukum-ostwald',
      'derajat-ionisasi',
      'pengenceran-asam-lemah',
      'le-chatelier',
      'trayek-indikator',
      'irisan-garis-bilangan',
      'btb-pp-mo-mr',
      'uji-limbah',
      'asam-lemah-basa-kuat',
      'hidrolisis-garam',
      'pemilihan-indikator',
      'campuran-asam-basa',
      'pereaksi-pembatas',
      'reaksi-netralisasi',
      'asam-poliprotik',
      'ionisasi-bertingkat',
      'persamaan-kuadrat',
      'asam-oksalat',
      'cuka-dapur',
      'titrasi-alkalimetri',
      'faktor-pengenceran',
      'kadar-persen',
      'spesi-amfiprotik',
      'bikarbonat',
      'pasangan-konjugasi',
      'indikator-hin',
      'trayek-ph',
      'rasio-warna',
      'henderson-hasselbalch',
      'asam-sangat-encer',
      'miskonsepsi-ph',
      'leveling-effect',
      'pelarut-non-air',
      'asam-asetat-glasial',
      'kekuatan-asam-intrinsik',
      'kurva-titrasi-diprotik',
      'setengah-netralisasi',
      'titrasi-warder',
      'campuran-basa',
      'naoh-na2co3',
      'dua-indikator-pp-mo',
      'teori-hsab',
      'pearson',
      'asam-basa-keras-lunak',
      'kelarutan-perak-halida',
      'titrasi-balik',
      'back-titration',
      'kalsium-karbonat',
      'cangkang-telur',
      'kegagalan-aproksimasi',
      'persamaan-kuadrat-asam-lemah',
      'asam-dikloroasetat',
      'efek-induksi',
      'garam-amfiprotik',
      'nahco3',
      'neraca-massa-muatan',
      'derivasi-ph',
      'rekonstruksi-kurva-titrasi',
      'hidrolisis-anion',
      'titrasi-asam-fosfat',
      'dua-titik-ekuivalen',
    ],
    prerequisites: [
      {
        tag: 'prasyarat-autoprotolisis-air-dan-skala-ph',
        title: 'Prasyarat 1: Kesetimbangan Autoprotolisis Air (Kw) & Skala pH Logaritmik Sørensen',
        summary: 'Dinamika ionisasi mandiri molekul air, tetapan Kw pada berbagai temperatur, serta perumusan matematis skala logaritma negatif konsentrasi ion hidrogen.',
        content: `Meskipun air murni dipandang sebagai senyawa kovalen non-elektrolit, pengukuran konduktivitas listrik yang sangat presisi membuktikan bahwa air murni tetap menghantarkan arus listrik dalam jumlah yang sangat kecil. Fenomena ini terjadi akibat adanya peristiwa **autoprotolisis (autoionisasi) air**.

### 1. Kesetimbangan Autoprotolisis Air
Di dalam air cair, terjadi transfer proton antarmolekul air secara spontan:
$\\ce{H2O(l) + H2O(l) <=> H3O+(aq) + OH-(aq)}$
Atau sering ditulis secara sederhana:
$\\ce{H2O(l) <=> H+(aq) + OH-(aq)}$

Berdasarkan Hukum Aksi Massa, karena fasa air cair murni ($l$) memiliki aktivitas tetap, tetapan kesetimbangan autoionisasi air dirumuskan sebagai **Tetapan Hasil Kali Ion Air ($K_w$)**:
$\\mathbf{K_w = [\\ce{H+}][\\ce{OH-}]}$

Pada temperatur standar $25^\\circ\\text{C}$ ($298.15\\text{ K}$):
$K_w = 1.0 \\times 10^{-14}$
Karena di dalam air murni setiap $1\\text{ mol } \\ce{H2O}$ yang terurai menghasilkan $1\\text{ mol } \\ce{H+}$ dan $1\\text{ mol } \\ce{OH-}$, maka:
$[\\ce{H+}] = [\\ce{OH-}] = \\sqrt{K_w} = \\sqrt{1.0 \\times 10^{-14}} = 1.0 \\times 10^{-7}\\text{ M}$

> **Pengaruh Temperatur terhadap $K_w$:** Reaksi autoionisasi air bersifat **endotermik** ($\\Delta H > 0$). Berdasarkan Asas Le Chatelier, kenaikan temperatur akan menggeser kesetimbangan ke arah kanan, sehingga nilai $K_w$ membesar (misalnya pada $60^\\circ\\text{C}$, $K_w \\approx 1.0 \\times 10^{-13}$ dan air netral memiliki $[\\ce{H+}] \\approx 3.16 \\times 10^{-7}\\text{ M}$ atau $\\text{pH} \\approx 6.5$).

---

### 2. Skala pH dan pOH Logaritmik Sørensen
Karena konsentrasi ion $[\\ce{H+}]$ dan $[\\ce{OH-}]$ di laboratorium berkisar dari rentang yang sangat lebar (dari $1\\text{ M}$ hingga $10^{-14}\\text{ M}$), pada tahun 1909 kimiawan Denmark **Søren Peder Lauritz Sørensen** mengusulkan skala eksponensial logaritma negatif yang disebut **pH (*potential of Hydrogen*)**:
$\\mathbf{\\text{pH} = -\\log[\\ce{H+}]} \\quad \\text{dan} \\quad \\mathbf{\\text{pOH} = -\\log[\\ce{OH-}]}$

Dengan mengaplikasikan fungsi $-\\log$ pada rumus $K_w$:
$-\\log K_w = -\\log([\\ce{H+}][\\ce{OH-}]) = -\\log[\\ce{H+}] + (-\\log[\\ce{OH-}]) = \\text{pH} + \\text{pOH}$
Pada $25^\\circ\\text{C}$ di mana $\\text{p}K_w = 14.0$:
$\\mathbf{\\text{pH} + \\text{pOH} = 14.00}$

---

### 3. Kriteria Sifat Larutan pada $25^\\circ\\text{C}$:
- **Larutan Asam:** $[\\ce{H+}] > 10^{-7}\\text{ M} \\implies \\mathbf{\\text{pH} < 7}$ (dan $\\text{pOH} > 7$).
- **Larutan Netral:** $[\\ce{H+}] = [\\ce{OH-}] = 10^{-7}\\text{ M} \\implies \\mathbf{\\text{pH} = 7}$ (dan $\\text{pOH} = 7$).
- **Larutan Basa:** $[\\ce{H+}] < 10^{-7}\\text{ M} \\implies [\\ce{OH-}] > 10^{-7}\\text{ M} \\implies \\mathbf{\\text{pH} > 7}$ (dan $\\text{pOH} < 7$).`,
      },
      {
        tag: 'prasyarat-stoikiometri-volumetri-dan-molaritas-ekuivalen',
        title: 'Prasyarat 2: Stoikiometri Larutan & Konsep Valensi Asam-Basa (Normalitas & Ekuivalen)',
        summary: 'Hubungan kuantitatif mol ion H+ dan OH-, valensi asam-basa, serta perumusan mol ekuivalen dalam reaksi netralisasi sempurna.',
        content: `Sebelum menganalisis proses titrasi volumetri asam-basa, pemahaman yang kuat mengenai stoikiometri larutan, valensi zat, dan kuantitas mol ion sangat mutlak diperlukan.

### 1. Valensi Asam dan Valensi Basa
- **Valensi Asam ($a$):** Jumlah ion $\\ce{H+}$ yang dapat dilepaskan oleh satu molekul senyawa asam ketika dilarutkan dalam air:
  - Asam Monoprotik ($a = 1$): $\\ce{HCl, HNO3, CH3COOH, HCOOH}$.
  - Asam Diprotik ($a = 2$): $\\ce{H2SO4, H2C2O4, H2CO3, H2S}$.
  - Asam Triprotik ($a = 3$): $\\ce{H3PO4, H3AsO4}$.
- **Valensi Basa ($b$):** Jumlah ion $\\ce{OH-}$ yang dapat dilepaskan (atau proton $\\ce{H+}$ yang dapat diikat) oleh satu satuan rumus senyawa basa:
  - Basa Monohidroksi ($b = 1$): $\\ce{NaOH, KOH, LiOH, NH3}$.
  - Basa Dihidroksi ($b = 2$): $\\ce{Ca(OH)2, Ba(OH)2, Mg(OH)2, Sr(OH)2}$.
  - Basa Trihidroksi ($b = 3$): $\\ce{Al(OH)3, Fe(OH)3}$.

---

### 2. Hubungan Mol Zat Terlarut dengan Mol Ion
Jumlah mol ion hidrogen dan ion hidroksida dihitung langsung dari konsentrasi molaritas ($M$) dan volume larutan ($V$):
$n(\\ce{H+}) = a \\times n_{\\text{asam}} = a \\times (M_{\\text{asam}} \\times V_{\\text{asam}})$
$n(\\ce{OH-}) = b \\times n_{\\text{basa}} = b \\times (M_{\\text{basa}} \\times V_{\\text{basa}})$

---

### 3. Asas Ekuivalensi Reaksi Netralisasi Sempurna
Reaksi penetralan asam-basa pada skala ionik berlangsung menurut persamaan pembentukan air:
$\\ce{H+(aq) + OH-(aq) -> H2O(l)}$
Reaksi mencapai keadaan **Tepat Habis Bereaksi (Titik Ekuivalen)** apabila jumlah mol ion $\\ce{H+}$ tepat sama dengan jumlah mol ion $\\ce{OH-}$:
$n(\\ce{H+}) = n(\\ce{OH-})$
$\\mathbf{V_{\\text{asam}} \\times M_{\\text{asam}} \\times a = V_{\\text{basa}} \\times M_{\\text{basa}} \\times b}$

Persamaan ini merupakan fondasi komputasi volumetri analitik yang digunakan dalam titrasi asidimetri maupun alkalimetri.`,
      },
    ],
    core_concepts: [
      {
        tag: 'tiga-teori-asam-basa-evolusi-dan-komparasi',
        tags: ['teori-arrhenius', 'teori-bronsted-lowry', 'teori-lewis', 'pasangan-konjugasi', 'spesi-amfiprotik'],
        title: 'Konsep Inti 1: Tiga Teori Asam-Basa (Arrhenius, Brønsted-Lowry & Lewis)',
        summary: 'Evolusi pemahaman asam-basa dari penghasil ion dalam air, donor-akseptor proton H+ dan pasangan asam-basa konjugasi, hingga donor-akseptor pasangan elektron bebas (PEB).',
        content: `Konsep asam dan basa telah berkembang secara dramatis seiring dengan pemahaman struktur atom dan ikatan kimia modern. Terdapat tiga teori utama yang melengkapi batasan satu sama lain:

---

### 1. Infografis Evolusi Tiga Teori Asam-Basa

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">EVOLUSI TIGA TEORI ASAM-BASA: ARRHENIUS ➔ BRØNSTED-LOWRY ➔ LEWIS</text>

  <!-- PANEL 1: ARRHENIUS (x=20..250) -->
  <g transform="translate(20, 55)">
    <rect x="0" y="0" width="230" height="245" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="210" height="28" rx="4" fill="#2563eb"/>
    <text x="115" y="28" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">1. SVANTE ARRHENIUS (1884)</text>

    <text x="115" y="60" fill="#1e293b" font-size="10.5" font-weight="bold" text-anchor="middle">Media: Wajib Pelarut Air (H2O)</text>
    <rect x="10" y="70" width="210" height="72" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="16" y="88" fill="#1e40af" font-size="9.5" font-weight="bold">• ASAM:</text>
    <text x="16" y="102" fill="#1e3a8a" font-size="9">Melepas ion H+ dalam air</text>
    <text x="16" y="116" fill="#2563eb" font-size="9" font-weight="bold">HA(aq) ➔ H+(aq) + A-(aq)</text>
    <text x="16" y="132" fill="#64748b" font-size="8.5">(contoh: HCl, HNO3)</text>

    <rect x="10" y="150" width="210" height="72" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="16" y="168" fill="#1e40af" font-size="9.5" font-weight="bold">• BASA:</text>
    <text x="16" y="182" fill="#1e3a8a" font-size="9">Melepas ion OH- dalam air</text>
    <text x="16" y="196" fill="#2563eb" font-size="9" font-weight="bold">BOH(aq) ➔ B+(aq) + OH-(aq)</text>
    <text x="16" y="212" fill="#64748b" font-size="8.5">(contoh: NaOH, KOH)</text>
  </g>

  <!-- PANEL 2: BRØNSTED-LOWRY (x=265..495) -->
  <g transform="translate(265, 55)">
    <rect x="0" y="0" width="230" height="245" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="210" height="28" rx="4" fill="#059669"/>
    <text x="115" y="28" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">2. BRØNSTED - LOWRY (1923)</text>

    <text x="115" y="60" fill="#1e293b" font-size="10.5" font-weight="bold" text-anchor="middle">Prinsip: Transfer Proton (H+)</text>
    <rect x="10" y="70" width="210" height="72" rx="4" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="16" y="88" fill="#047857" font-size="9.5" font-weight="bold">• ASAM = DONOR PROTON (H+)</text>
    <text x="16" y="102" fill="#065f46" font-size="9">Memberikan ion H+ ke spesi lain</text>
    <text x="16" y="118" fill="#047857" font-size="9.5" font-weight="bold">• BASA = AKSEPTOR PROTON (H+)</text>
    <text x="16" y="132" fill="#065f46" font-size="9">Menerima ion H+ dari spesi lain</text>

    <rect x="10" y="150" width="210" height="72" rx="4" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="16" y="168" fill="#047857" font-size="9.5" font-weight="bold">Pasangan Asam-Basa Konjugasi:</text>
    <text x="16" y="184" fill="#065f46" font-size="9">NH3 + H2O ⇌ NH4+ + OH-</text>
    <text x="16" y="198" fill="#059669" font-size="8.5">Basa1  Asam2   Asam1   Basa2</text>
    <text x="16" y="212" fill="#64748b" font-size="8.5">(Beda tepat 1 proton H+)</text>
  </g>

  <!-- PANEL 3: LEWIS (x=510..740) -->
  <g transform="translate(510, 55)">
    <rect x="0" y="0" width="230" height="245" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="210" height="28" rx="4" fill="#7c3aed"/>
    <text x="115" y="28" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">3. GILBERT N. LEWIS (1923)</text>

    <text x="115" y="60" fill="#1e293b" font-size="10.5" font-weight="bold" text-anchor="middle">Prinsip: Pasangan Elektron (PEB)</text>
    <rect x="10" y="70" width="210" height="72" rx="4" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="16" y="88" fill="#6d28d9" font-size="9.5" font-weight="bold">• ASAM = AKSEPTOR PEB</text>
    <text x="16" y="102" fill="#5b21b6" font-size="9">Menyediakan orbital kosong</text>
    <text x="16" y="118" fill="#6d28d9" font-size="9.5" font-weight="bold">• BASA = DONOR PEB</text>
    <text x="16" y="132" fill="#5b21b6" font-size="9">Memiliki Pasangan Elektron Bebas</text>

    <rect x="10" y="150" width="210" height="72" rx="4" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="16" y="168" fill="#6d28d9" font-size="9.5" font-weight="bold">Ikatan Kovalen Koordinasi:</text>
    <text x="16" y="184" fill="#5b21b6" font-size="9">NH3 (donor PEB) + BF3 (akseptor)</text>
    <text x="16" y="198" fill="#7c3aed" font-size="9" font-weight="bold">➔ H3N : BF3 (Aduk Lewis)</text>
    <text x="16" y="212" fill="#64748b" font-size="8.5">(Mencakup gas & pelarut non-air)</text>
  </g>
</svg>

---

### 2. Konsep Pasangan Asam-Basa Konjugasi (Brønsted-Lowry)
Dalam teori Brønsted-Lowry, setiap kali suatu asam mendonorkan satu proton ($H^+$), spesi sisa yang terbentuk disebut **Basa Konjugasi**. Sebaliknya, ketika basa menerima proton, spesi yang terbentuk disebut **Asam Konjugasi**:
$\\text{Asam} \\rightleftharpoons \\text{Basa Konjugasi} + \\ce{H+}$
$\\text{Basa} + \\ce{H+} \\rightleftharpoons \\text{Asam Konjugasi}$

- Contoh 1: Dissosiasi asam asetat dalam air:
  $\\ce{CH3COOH(aq) + H2O(l) <=> CH3COO-(aq) + H3O+(aq)}$
  - Pasangan 1: $\\ce{CH3COOH}$ (Asam) dengan $\\ce{CH3COO-}$ (Basa Konjugasi).
  - Pasangan 2: $\\ce{H2O}$ (Basa) dengan $\\ce{H3O+}$ (Asam Konjugasi).
- **Aturan Emas Konjugasi:** Pasangan asam-basa konjugasi **selalu hanya berselisih tepat $1$ ion hidrogen ($\\ce{H+}$)**.

---

### 3. Spesi Amfiprotik / Amfoter
Spesi kimia yang dapat bertindak sebagai asam (mendonorkan proton) sekaligus dapat bertindak sebagai basa (menerima proton) tergantung sifat spesi pasangannya disebut zat **amfiprotik**:
- Molekul air ($\\ce{H2O}$):
  - Bereaksi dengan $\\ce{HCl}$: $\\ce{HCl + H2O -> H3O+ + Cl-}$ ($\\ce{H2O}$ bertindak sebagai **Basa**).
  - Bereaksi dengan $\\ce{NH3}$: $\\ce{NH3 + H2O <=> NH4+ + OH-}$ ($\\ce{H2O}$ bertindak sebagai **Asam**).
- Ion hidrogen karbonat ($\\ce{HCO3-}$), ion hidrogen sulfat ($\\ce{HSO4-}$), dan ion dihidrogen fosfat ($\\ce{H2PO4-}$).`,
        keyFormulas: [
          { name: 'Definisi Arrhenius', formula: '\ce{HA -> H+ + A-} \quad \text{dan} \quad \ce{BOH -> B+ + OH-}' },
          { name: 'Konsep Brønsted-Lowry', formula: '\text{Asam } (\text{Donor } \ce{H+}) \rightleftharpoons \text{Basa Konjugasi} + \ce{H+}' },
          { name: 'Konsep Lewis', formula: '\text{Basa (Donor PEB)} + \text{Asam (Akseptor PEB)} \longrightarrow \text{Aduk Ikatan Koordinasi}' },
        ],
      },
      {
        tag: 'perhitungan-ph-asam-basa-kuat-dan-lemah',
        tags: ['rumus-ph-lengkap', 'asam-kuat-basa-kuat', 'asam-lemah-ka', 'basa-lemah-kb', 'derajat-ionisasi-alfa'],
        title: 'Konsep Inti 2: Algoritma Perhitungan [H+], [OH-] & pH Asam-Basa Kuat dan Lemah',
        summary: 'Formulasi lengkap derajat ionisasi (α), tetapan ionisasi Ka dan Kb, hukum pengenceran Ostwald, serta perhitungan pH sistem poliprotik.',
        content: `Penentuan nilai derajat keasaman (pH) bergantung secara mutlak pada kemampuan zat terionisasi di dalam air: apakah terurai sempurna (elektrolit kuat) atau terionisasi sebagian mencapai kesetimbangan dinamis (elektrolit lemah).

---

### 1. Pohon Keputusan (*Decision Tree*) Perhitungan pH

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">ALUR SISTEMATIS PERHITUNGAN KONSENTRASI ION & NILAI pH</text>

  <!-- KIRI: KELOMPOK ASAM (x=30..365) -->
  <g transform="translate(30, 52)">
    <rect x="0" y="0" width="335" height="270" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="12" y="10" width="311" height="28" rx="4" fill="#dc2626"/>
    <text x="167" y="28" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. LARUTAN ASAM (Mencari [H+] ➔ pH)</text>

    <!-- Asam Kuat -->
    <rect x="12" y="48" width="311" height="90" rx="6" fill="#ffffff" stroke="#fca5a5" stroke-width="1"/>
    <text x="20" y="66" fill="#b91c1c" font-size="11" font-weight="bold">A. Asam Kuat (α = 1, Terionisasi 100%)</text>
    <text x="20" y="82" fill="#7f1d1d" font-size="9.5">HCl, HBr, HI, HNO3, H2SO4, HClO4</text>
    <rect x="20" y="92" width="295" height="36" rx="4" fill="#fee2e2"/>
    <text x="167" y="115" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">[H+] = a × M_asam</text>

    <!-- Asam Lemah -->
    <rect x="12" y="146" width="311" height="110" rx="6" fill="#ffffff" stroke="#fca5a5" stroke-width="1"/>
    <text x="20" y="164" fill="#b91c1c" font-size="11" font-weight="bold">B. Asam Lemah (0 &lt; α &lt; 1, Kesetimbangan Ka)</text>
    <text x="20" y="180" fill="#7f1d1d" font-size="9.5">CH3COOH, HCOOH, HF, HCN, H2CO3</text>
    <rect x="20" y="188" width="295" height="34" rx="4" fill="#fee2e2"/>
    <text x="167" y="210" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">[H+] = √(Ka × M_asam) = α × M_asam</text>
    <text x="167" y="244" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">pH = -log[H+]</text>
  </g>

  <!-- KANAN: KELOMPOK BASA (x=395..730) -->
  <g transform="translate(395, 52)">
    <rect x="0" y="0" width="335" height="270" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <rect x="12" y="10" width="311" height="28" rx="4" fill="#2563eb"/>
    <text x="167" y="28" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2. LARUTAN BASA (Mencari [OH-] ➔ pOH ➔ pH)</text>

    <!-- Basa Kuat -->
    <rect x="12" y="48" width="311" height="90" rx="6" fill="#ffffff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="20" y="66" fill="#1d4ed8" font-size="11" font-weight="bold">A. Basa Kuat (α = 1, Terionisasi 100%)</text>
    <text x="20" y="82" fill="#1e3a8a" font-size="9.5">LiOH, NaOH, KOH, Ca(OH)2, Ba(OH)2</text>
    <rect x="20" y="92" width="295" height="36" rx="4" fill="#dbeafe"/>
    <text x="167" y="115" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">[OH-] = b × M_basa</text>

    <!-- Basa Lemah -->
    <rect x="12" y="146" width="311" height="110" rx="6" fill="#ffffff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="20" y="164" fill="#1d4ed8" font-size="11" font-weight="bold">B. Basa Lemah (0 &lt; α &lt; 1, Kesetimbangan Kb)</text>
    <text x="20" y="180" fill="#1e3a8a" font-size="9.5">NH3 (NH4OH), CH3NH2, Fe(OH)2</text>
    <rect x="20" y="188" width="295" height="34" rx="4" fill="#dbeafe"/>
    <text x="167" y="210" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">[OH-] = √(Kb × M_basa) = α × M_basa</text>
    <text x="167" y="244" fill="#1d4ed8" font-size="10.5" font-weight="bold" text-anchor="middle">pOH = -log[OH-] ➔ pH = 14 - pOH</text>
  </g>
</svg>

---

### 2. Rangkuman Formulasi Perhitungan Konsentrasi Ion & pH

| Klasifikasi Zat | Rumus Konsentrasi Ion Aktif | Derajat Ionisasi ($\\alpha$) | Rumus Perhitungan pH |
| :--- | :--- | :---: | :--- |
| **Asam Kuat** | $[\\ce{H+}] = a \\times M_a$ | $\\alpha = 1$ | $\\text{pH} = -\\log[\\ce{H+}]$ |
| **Asam Lemah** | $[\\ce{H+}] = \\sqrt{K_a \\cdot M_a} = \\alpha \\cdot M_a$ | $\\alpha = \\sqrt{\\frac{K_a}{M_a}}$ | $\\text{pH} = -\\log[\\ce{H+}]$ |
| **Basa Kuat** | $[\\ce{OH-}] = b \\times M_b$ | $\\alpha = 1$ | $\\text{pOH} = -\\log[\\ce{OH-}] \\implies \\text{pH} = 14 - \\text{pOH}$ |
| **Basa Lemah** | $[\\ce{OH-}] = \\sqrt{K_b \\cdot M_b} = \\alpha \\cdot M_b$ | $\\alpha = \\sqrt{\\frac{K_b}{M_b}}$ | $\\text{pOH} = -\\log[\\ce{OH-}] \\implies \\text{pH} = 14 - \\text{pOH}$ |

---

### 3. Asam Poliprotik (Ionisasi Bertahap)
Asam poliprotik (seperti $\\ce{H3PO4}$ atau $\\ce{H2CO3}$) melepaskan proton secara bertingkat dengan tetapan ionisasi berturut-turut $K_{a1} \\gg K_{a2} \\gg K_{a3}$:
- Contoh ionisasi $\\ce{H2CO3}$:
  1. $\\ce{H2CO3(aq) <=> H+(aq) + HCO3-(aq)} \\quad K_{a1} = 4.3 \\times 10^{-7}$
  2. $\\ce{HCO3-(aq) <=> H+(aq) + CO3^2-(aq)} \\quad K_{a2} = 5.6 \\times 10^{-11}$
- **Prinsip Evaluator:** Karena $K_{a1}$ bernilai ribuan hingga jutaan kali lebih besar daripada $K_{a2}$, maka konsentrasi $[\\ce{H+}]$ dan nilai pH larutan asam poliprotik **ditentukan secara dominan hanya oleh ionisasi tahap pertama ($K_{a1}$)**.`,
        keyFormulas: [
          { name: 'Ion H+ Asam Kuat', formula: '[\\ce{H+}] = a \\times M_a' },
          { name: 'Ion H+ Asam Lemah', formula: '[\\ce{H+}] = \\sqrt{K_a \\cdot M_a} = \\alpha \\cdot M_a' },
          { name: 'Derajat Ionisasi Asam Lemah', formula: '\\alpha = \\sqrt{\\frac{K_a}{M_a}}' },
          { name: 'Ion OH- Basa Kuat', formula: '[\\ce{OH-}] = b \\times M_b' },
          { name: 'Ion OH- Basa Lemah', formula: '[\\ce{OH-}] = \\sqrt{K_b \\cdot M_b} = \\alpha \\cdot M_b' },
          { name: 'Hubungan pH dan pOH', formula: '\\text{pH} + \\text{pOH} = 14.00 \\quad (25^\\circ\\text{C})' },
        ],
      },
      {
        tag: 'indikator-asam-basa-dan-trayek-ph',
        tags: ['indikator-asam-basa', 'trayek-ph-indikator', 'lakmus-pp-btb-mo-mr', 'analisis-rentang-ph'],
        title: 'Konsep Inti 3: Indikator Asam-Basa & Trayek Perubahan Warna',
        summary: 'Kajian kesetimbangan asam lemah organik indikator (HIn <=> H+ + In-), spektroskopi warna, dan penentuan rentang pH sampel tak dikenal.',
        content: `Indikator asam-basa adalah zat warna (pewarna organik) yang memiliki warna berbeda dalam lingkungan asam dan basa. Pada umumnya, molekul indikator merupakan **asam organik lemah ($\\ce{HIn}$)** yang molekul tak terionisasinya memiliki warna berbeda dengan bentuk anion konjugasinya ($\\ce{In-}$).

### 1. Prinsip Kesetimbangan Kimia Indikator ($\\ce{HIn}$)
Di dalam larutan air, terjadi kesetimbangan:
$\\ce{HIn(aq) <=> H+(aq) + In-(aq)}$
- $\\ce{HIn}$: Bentuk asam (menampilkan **Warna 1 / Warna Asam**).
- $\\ce{In-}$: Bentuk basa konjugasi (menampilkan **Warna 2 / Warna Basa**).

Tetapan ionisasi indikator dinyatakan:
$K_{\\text{In}} = \\frac{[\\ce{H+}][\\ce{In-}]}{[\\ce{HIn}]} \\implies \\frac{[\\ce{In-}]}{[\\ce{HIn}]} = \\frac{K_{\\text{In}}}{[\\ce{H+}]}$

- **Jika larutan sangat asam ($[\\ce{H+}]$ tinggi):** Berdasarkan Asas Le Chatelier, kesetimbangan terdesak jauh ke arah kiri, sehingga $[\\ce{HIn}] \\gg [\\ce{In-}]$ $\\implies$ larutan tampak berwarna asam (**Warna 1**).
- **Jika larutan sangat basa ($[\\ce{H+}]$ rendah / $[\\ce{OH-}]$ tinggi):** Ion $\\ce{H+}$ terikat menjadi $\\ce{H2O}$, kesetimbangan bergeser ke kanan, $[\\ce{In-}] \\gg [\\ce{HIn}]$ $\\implies$ larutan tampak berwarna basa (**Warna 2**).
- **Trayek Perubahan Warna:** Mata manusia umumnya baru dapat melihat perubahan warna jika salah satu bentuk dominan minimal $10$ kali lipat spesi lainnya, sehingga rentang perubahan warna indikator terbentang selebar $\\approx 2\\text{ unit pH}$:
  $\\mathbf{\\text{pH} = \\text{p}K_{\\text{In}} \\pm 1}$

---

### 2. Galeri Spektrum Trayek pH Indikator Laboratorium Populer

<svg viewBox="0 0 760 310" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <!-- Gradien Lakmus: Merah (4.5) ke Biru (8.3) -->
    <linearGradient id="gradLakmus" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="32%" stop-color="#ef4444"/>
      <stop offset="45%" stop-color="#a855f7"/>
      <stop offset="59%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>

    <!-- Gradien Metil Jingga (MO): Merah (3.1) ke Kuning (4.4) -->
    <linearGradient id="gradMO" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="22%" stop-color="#dc2626"/>
      <stop offset="26%" stop-color="#f97316"/>
      <stop offset="31%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>

    <!-- Gradien Metil Merah (MR): Merah (4.4) ke Kuning (6.2) -->
    <linearGradient id="gradMR" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="31%" stop-color="#dc2626"/>
      <stop offset="37%" stop-color="#f97316"/>
      <stop offset="44%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>

    <!-- Gradien Bromtimol Biru (BTB): Kuning (6.0) ke Biru (7.6) -->
    <linearGradient id="gradBTB" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#eab308"/>
      <stop offset="43%" stop-color="#eab308"/>
      <stop offset="48%" stop-color="#22c55e"/>
      <stop offset="54%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>

    <!-- Gradien Fenolftalein (PP): Tak Berwarna (8.3) ke Merah Muda / Pink (10.0) -->
    <linearGradient id="gradPP" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="59%" stop-color="#f1f5f9"/>
      <stop offset="65%" stop-color="#f472b6"/>
      <stop offset="71%" stop-color="#db2777"/>
      <stop offset="100%" stop-color="#db2777"/>
    </linearGradient>
  </defs>

  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">SPEKTRUM TRAYEK PERUBAHAN WARNA INDIKATOR ASAM-BASA (SKALA pH 0 - 14)</text>

  <!-- Skala Garis Bilangan pH (0 s.d. 14) -->
  <g transform="translate(180, 55)">
    <line x1="0" y1="20" x2="540" y2="20" stroke="#64748b" stroke-width="2"/>
    <!-- Ticks -->
    <line x1="0" y1="15" x2="0" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="0" y="10" fill="#64748b" font-size="9" text-anchor="middle">0</text>
    <line x1="77" y1="15" x2="77" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="77" y="10" fill="#64748b" font-size="9" text-anchor="middle">2</text>
    <line x1="154" y1="15" x2="154" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="154" y="10" fill="#64748b" font-size="9" text-anchor="middle">4</text>
    <line x1="231" y1="15" x2="231" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="231" y="10" fill="#64748b" font-size="9" text-anchor="middle">6</text>
    <line x1="270" y1="10" x2="270" y2="30" stroke="#10b981" stroke-width="2.5"/>
    <text x="270" y="5" fill="#059669" font-size="9.5" font-weight="bold" text-anchor="middle">7 (Netral)</text>
    <line x1="308" y1="15" x2="308" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="308" y="10" fill="#64748b" font-size="9" text-anchor="middle">8</text>
    <line x1="385" y1="15" x2="385" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="385" y="10" fill="#64748b" font-size="9" text-anchor="middle">10</text>
    <line x1="462" y1="15" x2="462" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="462" y="10" fill="#64748b" font-size="9" text-anchor="middle">12</text>
    <line x1="540" y1="15" x2="540" y2="25" stroke="#64748b" stroke-width="2"/>
    <text x="540" y="10" fill="#64748b" font-size="9" text-anchor="middle">14</text>
  </g>

  <!-- BARIS INDIKATOR 1: LAKMUS -->
  <g transform="translate(25, 95)">
    <text x="0" y="18" fill="#1e293b" font-size="11" font-weight="bold">Kertas Lakmus (4.5 - 8.3)</text>
    <rect x="155" y="4" width="540" height="20" rx="4" fill="url(#gradLakmus)" stroke="#94a3b8" stroke-width="1"/>
  </g>

  <!-- BARIS INDIKATOR 2: METIL JINGGA (MO) -->
  <g transform="translate(25, 135)">
    <text x="0" y="18" fill="#1e293b" font-size="11" font-weight="bold">Metil Jingga (3.1 - 4.4)</text>
    <rect x="155" y="4" width="540" height="20" rx="4" fill="url(#gradMO)" stroke="#94a3b8" stroke-width="1"/>
  </g>

  <!-- BARIS INDIKATOR 3: METIL MERAH (MR) -->
  <g transform="translate(25, 175)">
    <text x="0" y="18" fill="#1e293b" font-size="11" font-weight="bold">Metil Merah (4.4 - 6.2)</text>
    <rect x="155" y="4" width="540" height="20" rx="4" fill="url(#gradMR)" stroke="#94a3b8" stroke-width="1"/>
  </g>

  <!-- BARIS INDIKATOR 4: BROMTIMOL BIRU (BTB) -->
  <g transform="translate(25, 215)">
    <text x="0" y="18" fill="#1e293b" font-size="11" font-weight="bold">Bromtimol Biru (6.0 - 7.6)</text>
    <rect x="155" y="4" width="540" height="20" rx="4" fill="url(#gradBTB)" stroke="#94a3b8" stroke-width="1"/>
  </g>

  <!-- BARIS INDIKATOR 5: FENOLFTALEIN (PP) -->
  <g transform="translate(25, 255)">
    <text x="0" y="18" fill="#1e293b" font-size="11" font-weight="bold">Fenolftalein (8.3 - 10.0)</text>
    <rect x="155" y="4" width="540" height="20" rx="4" fill="url(#gradPP)" stroke="#94a3b8" stroke-width="1"/>
  </g>
</svg>

---

### 3. Logika Irisan Trayek untuk Menguji pH Sampel Tak Dikenal
Di soal ujian, sering disajikan hasil uji sampel air/larutan dengan beberapa indikator berbeda. Cara menyelesaikannya adalah menggunakan **Irisan Garis Bilangan Logika**:
1. Buat garis bilangan pH dari $0$ hingga $14$.
2. Gambar interval rentang yang diizinkan untuk setiap indikator:
   - Jika berwarna sisi asam $\\implies$ ambil daerah $\\text{pH} \\le \\text{batas bawah}$.
   - Jika berwarna sisi basa $\\implies$ ambil daerah $\\text{pH} \\ge \\text{batas atas}$.
   - Jika berwarna transisi $\\implies$ ambil daerah di antara trayek tersebut.
3. Carilah daerah irisan (**arsiran bersama**) yang memenuhi seluruh indikator sekaligus.`,
        keyFormulas: [
          { name: 'Kesetimbangan Indikator', formula: '\\ce{HIn(aq)} \\rightleftharpoons \\ce{H+(aq) + In-(aq)}' },
          { name: 'Trayek Transisi Warna', formula: '\\text{pH} = \\text{p}K_{\\text{In}} \\pm 1' },
          { name: 'Kaidah Warna Asam', formula: '[\\ce{H+}] \\ge 10 K_{\\text{In}} \\implies \\text{Didominasi Warna } \\ce{HIn}' },
          { name: 'Kaidah Warna Basa', formula: '[\\ce{H+}] \\le 0.1 K_{\\text{In}} \\implies \\text{Didominasi Warna } \\ce{In-}' },
        ],
      },
      {
        tag: 'titrasi-asam-basa-dan-analisis-kurva-titrasi',
        tags: ['titrasi-volumetri', 'kurva-titrasi-netralisasi', 'titik-ekuivalen', 'titik-akhir-titrasi', 'pemilihan-indikator'],
        title: 'Konsep Inti 4: Titrasi Asidimetri-Alkalimetri & Analisis Kurva Titrasi',
        summary: 'Prinsip volumetri analitik, perbedaan titik ekuivalen (teoretis) vs titik akhir titrasi (visual indikator), serta profil kurva pH pada 4 tipe netralisasi.',
        content: `Titrasi asam-basa (asidimetri dan alkalimetri) adalah teknik analisis kuantitatif volumetris di laboratorium untuk menentukan konsentrasi suatu larutan asam atau basa yang belum diketahui kadarnya dengan mereaksikannya secara tepat dengan larutan standar yang telah diketahui konsentrasinya secara akurat.

### 1. Dua Terminologi Kritis dalam Titrasi
- **Titik Ekuivalen (*Equivalence Point* / Titik Stoikiometris):** Kondisi teoretis di mana jumlah mol ion $\\ce{H+}$ dari asam tepat ekuivalen habis bereaksi dengan jumlah mol ion $\\ce{OH-}$ dari basa ($V_a M_a a = V_b M_b b$).
- **Titik Akhir Titrasi (*End Point*):** Titik praktikum eksperimental di mana **indikator visual mengalami perubahan warna** yang menandakan bahwa titrasi harus segera dihentikan.
- **Kunci Keberhasilan Titrasi:** Indikator dipilih sedemikian rupa sehingga **trayek perubahan warnanya mencakup pH titik ekuivalen**, sehingga titik akhir titrasi berimpit sedekat mungkin dengan titik ekuivalen!

---

### 2. Komparasi Empat Profil Kurva Titrasi Asam-Basa

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <defs>
    <marker id="arrTitr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>

  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">KOMPARASI DUA KURVA TITRASI UTAMA: ASAM KUAT VS ASAM LEMAH</text>

  <!-- SISI KIRI: ASAM KUAT DITITRASI BASA KUAT (HCl + NaOH) -->
  <g transform="translate(30, 52)">
    <rect x="0" y="0" width="335" height="270" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="167" y="24" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">1. Asam Kuat (HCl) + Basa Kuat (NaOH)</text>

    <!-- Sumbu -->
    <line x1="45" y1="225" x2="310" y2="225" stroke="#64748b" stroke-width="2" marker-end="url(#arrTitr)"/>
    <line x1="45" y1="225" x2="45" y2="40" stroke="#64748b" stroke-width="2" marker-end="url(#arrTitr)"/>
    <text x="315" y="229" fill="#64748b" font-size="9" font-weight="bold">V NaOH</text>
    <text x="42" y="36" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">pH</text>
    <text x="40" y="55" fill="#64748b" font-size="8">14</text>
    <text x="40" y="138" fill="#10b981" font-size="8.5" font-weight="bold">7</text>
    <text x="40" y="215" fill="#64748b" font-size="8">1</text>

    <!-- Garis Bantu pH = 7 -->
    <line x1="45" y1="134" x2="305" y2="134" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>

    <!-- Kurva Sigmoid HCl + NaOH: Awal pH 1, lonjakan sangat terjal di titik ekuivalen -->
    <path d="M 45 215 C 130 210, 160 200, 175 134 C 190 68, 220 58, 300 55" fill="none" stroke="#2563eb" stroke-width="2.5"/>

    <!-- Titik Ekuivalen (pH = 7.0) -->
    <circle cx="175" cy="134" r="5" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
    <rect x="185" y="122" width="135" height="24" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1"/>
    <text x="252" y="138" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">Titik Ekuivalen: pH = 7.0</text>

    <text x="167" y="252" fill="#475569" font-size="9" text-anchor="middle">Lonjakan pH terjal (pH 3 ➔ 11). Indikator: PP atau BTB.</text>
  </g>

  <!-- SISI KANAN: ASAM LEMAH DITITRASI BASA KUAT (CH3COOH + NaOH) -->
  <g transform="translate(395, 52)">
    <rect x="0" y="0" width="335" height="270" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="167" y="24" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">2. Asam Lemah (CH3COOH) + Basa Kuat (NaOH)</text>

    <!-- Sumbu -->
    <line x1="45" y1="225" x2="310" y2="225" stroke="#64748b" stroke-width="2" marker-end="url(#arrTitr)"/>
    <line x1="45" y1="225" x2="45" y2="40" stroke="#64748b" stroke-width="2" marker-end="url(#arrTitr)"/>
    <text x="315" y="229" fill="#64748b" font-size="9" font-weight="bold">V NaOH</text>
    <text x="42" y="36" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">pH</text>
    <text x="40" y="55" fill="#64748b" font-size="8">14</text>
    <text x="40" y="112" fill="#dc2626" font-size="8.5" font-weight="bold">8.7</text>
    <text x="40" y="138" fill="#64748b" font-size="8">7</text>
    <text x="40" y="195" fill="#64748b" font-size="8">3</text>

    <!-- Daerah Buffer / Penyangga Awal -->
    <rect x="75" y="170" width="70" height="25" rx="3" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
    <text x="110" y="186" fill="#b45309" font-size="8" font-weight="bold" text-anchor="middle">Zona Buffer</text>

    <!-- Kurva Sigmoid CH3COOH + NaOH: Awal pH 3, zona buffer, lonjakan di atas pH 7 -->
    <path d="M 45 195 Q 85 180, 110 178 C 145 174, 165 160, 175 112 C 185 64, 220 58, 300 55" fill="none" stroke="#dc2626" stroke-width="2.5"/>

    <!-- Titik Ekuivalen (pH = 8.7 > 7) -->
    <circle cx="175" cy="112" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
    <rect x="185" y="100" width="135" height="24" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
    <text x="252" y="116" fill="#b91c1c" font-size="9" font-weight="bold" text-anchor="middle">Titik Ekuivalen: pH &gt; 7 (8.7)</text>

    <text x="167" y="252" fill="#475569" font-size="9" text-anchor="middle">Garam CH3COONa terhidrolisis basa. Indikator wajib: PP.</text>
  </g>
</svg>

---

### 3. Panduan Pemilihan Indikator Titrasi yang Tepat:
- **Titrasi Asam Kuat + Basa Kuat:**
  - Titik ekuivalen pada $\\mathbf{\\text{pH} = 7.00}$.
  - Lonjakan pH sangat terjal ($\\text{pH } 3.5 \\to 10.5$).
  - **Indikator Ideal:** Fenolftalein (PP), Bromtimol Biru (BTB), atau Metil Merah (MR).
- **Titrasi Asam Lemah + Basa Kuat:**
  - Garam yang dihasilkan terhidrolisis parsial menghasilkan ion $\\ce{OH-}$ $\\implies$ Titik ekuivalen berada di wilayah basa ($\\mathbf{\\text{pH} > 7}$, biasanya $\\text{pH } 8 - 9$).
  - **Indikator Wajib:** **Fenolftalein (PP)** (trayek 8.3 - 10.0). *Jangan gunakan Metil Merah karena akan berubah warna jauh sebelum titik ekuivalen tercapai!*
- **Titrasi Basa Lemah + Asam Kuat:**
  - Garam yang dihasilkan terhidrolisis parsial menghasilkan ion $\\ce{H+}$ $\\implies$ Titik ekuivalen berada di wilayah asam ($\\mathbf{\\text{pH} < 7}$, biasanya $\\text{pH } 5 - 6$).
  - **Indikator Wajib:** **Metil Merah (MR)** (trayek 4.4 - 6.2). *Jangan gunakan PP karena PP sudah menjadi tak berwarna jauh sebelum titik ekuivalen tercapai!*`,
        keyFormulas: [
          { name: 'Rumus Titrasi Netralisasi', formula: 'V_a \\times M_a \\times a = V_b \\times M_b \\times b' },
          { name: 'Kadar Molaritas Analit', formula: 'M_a = \\frac{V_b \\times M_b \\times b}{V_a \\times a}' },
          { name: 'Persen Massa (% w/w)', formula: '\\% = \\frac{M \\times M_r}{10 \\times \\rho}' },
        ],
      },
      {
        tag: 'titrasi-asam-poliprotik-dan-titik-setara-ganda',
        tags: ['asam-poliprotik', 'titrasi-bertingkat', 'dua-titik-ekuivalen', 'h2c2o4-h3po4'],
        title: 'Konsep Inti 5: Asam Poliprotik & Titrasi Multi-Tahap (Titik Ekuivalen Bertingkat)',
        summary: 'Ionisasi bertahap asam diprotik dan triprotik (Ka1 >> Ka2 >> Ka3) serta pembacaan kurva titrasi dengan dua atau tiga titik infleksi ekuivalen.',
        content: `Asam yang memiliki lebih dari satu atom hidrogen yang dapat terionisasi (asam diprotik seperti $\\ce{H2C2O4}$ atau asam triprotik seperti $\\ce{H3PO4}$) melepaskan protonnya secara berurutan dalam beberapa tahap diskrit saat dititrasi dengan basa kuat.

### 1. Dinamika Reaksi Titrasi Bertahap Asam Diprotik ($\\ce{H2A}$)
Jika asam diprotik $\\ce{H2A}$ dititrasi dengan larutan standar $\\ce{NaOH}$:
- **Tahap I (Netralisasi Proton Pertama):**
  $\\ce{H2A(aq) + OH-(aq) -> HA-(aq) + H2O(l)}$
  Menghasilkan **Titik Ekuivalen I** pada volume basa $V_1$.
- **Tahap II (Netralisasi Proton Kedua):**
  $\\ce{HA-(aq) + OH-(aq) -> A^2-(aq) + H2O(l)}$
  Menghasilkan **Titik Ekuivalen II** pada volume basa $V_2$.

Karena stoikiometri pelepasan proton pertama dan kedua persis $1 : 1$, maka volume titran yang dibutuhkan pada titik ekuivalen kedua **tepat dua kali lipat** volume titik ekuivalen pertama:
$\\mathbf{V_2 = 2 \\times V_1}$

---

### 2. Kurva Titrasi Bertingkat Asam Diprotik

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">KURVA TITRASI BERTINGKAT ASAM DIPROTIK (H2A) DENGAN BASA KUAT (NaOH)</text>

  <!-- Plot Area (x=60..700, y=55..290) -->
  <g transform="translate(60, 55)">
    <!-- Sumbu -->
    <line x1="50" y1="220" x2="620" y2="220" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="220" x2="50" y2="20" stroke="#64748b" stroke-width="2"/>
    <text x="625" y="224" fill="#64748b" font-size="10" font-weight="bold">Volume NaOH Ditambahkan (mL)</text>
    <text x="45" y="16" fill="#64748b" font-size="10" font-weight="bold" text-anchor="end">pH</text>
    <text x="42" y="35" fill="#64748b" font-size="9">14</text>
    <text x="42" y="125" fill="#64748b" font-size="9">7</text>
    <text x="42" y="205" fill="#64748b" font-size="9">1</text>

    <!-- Garis Bantu Vertikal V1 dan V2 -->
    <line x1="230" y1="220" x2="230" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="230" y="236" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">V₁ (Titik Ekuivalen 1)</text>

    <line x1="430" y1="220" x2="430" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="430" y="236" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">V₂ = 2 V₁ (Titik Ekuivalen 2)</text>

    <!-- Kurva Titrasi Bertingkat (Dua Lonjakan Sigmoid) -->
    <path d="M 50 190 Q 140 180, 180 170 C 210 160, 225 150, 230 120 C 235 90, 260 85, 300 80 Q 360 76, 390 70 C 420 62, 428 50, 430 40 C 432 30, 470 28, 600 26" fill="none" stroke="#4f46e5" stroke-width="3"/>

    <!-- Titik Ekuivalen 1 (pH ~ 4.5 - 5.0) -->
    <circle cx="230" cy="120" r="5.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
    <rect x="130" y="90" width="95" height="24" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>
    <text x="177" y="106" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">Titik Ekuivalen I</text>

    <!-- Titik Ekuivalen 2 (pH ~ 9.0 - 9.5) -->
    <circle cx="430" cy="40" r="5.5" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
    <rect x="440" y="35" width="100" height="24" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
    <text x="490" y="51" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">Titik Ekuivalen II</text>

    <!-- Label Spesi Dominan -->
    <text x="120" y="200" fill="#64748b" font-size="9.5" font-weight="bold">Spesi: H2A + HA-</text>
    <text x="310" y="100" fill="#64748b" font-size="9.5" font-weight="bold">Spesi: HA- + A²-</text>
    <text x="520" y="80" fill="#64748b" font-size="9.5" font-weight="bold">Spesi: A²- + OH- sisa</text>
  </g>
</svg>

---

### 3. Poin Penting Titrasi Poliprotik:
1. **Titik Setengah Ekuivalen (*Half-Equivalence Point*):**
   - Pada saat penambahan basa tepat setengah volume titik ekuivalen I ($V = \\frac{1}{2} V_1$), konsentrasi $[\\ce{H2A}] = [\\ce{HA-}]$, sehingga:
     $\\mathbf{\\text{pH} = \\text{p}K_{a1}}$
   - Pada saat penambahan basa di tengah-tengah titik ekuivalen I dan II ($V = 1.5 V_1$), konsentrasi $[\\ce{HA-}] = [\\ce{A^2-}]$, sehingga:
     $\\mathbf{\\text{pH} = \\text{p}K_{a2}}$
2. **Kondisi Infleksi Terlihat:**
   Dua lonjakan kurva hanya akan terlihat terpisah secara jelas apabila rasio tetapan ionisasi berturut-turut cukup besar, yakni $K_{a1} / K_{a2} \\ge 10^4$.`,
        keyFormulas: [
          { name: 'Relasi Volume Titik Ekuivalen', formula: 'V_2 = 2 \\times V_1' },
          { name: 'pH Setengah Ekuivalen 1', formula: '\\text{pH} = \\text{p}K_{a1} \\quad (V = 0.5 V_1)' },
          { name: 'pH Setengah Ekuivalen 2', formula: '\\text{pH} = \\text{p}K_{a2} \\quad (V = 1.5 V_1)' },
        ],
      },
    {
      tag: 'pengayaan-teori-asam-basa-lanjut-dan-solusi-kuadratik-eksak',
      tags: [
        'leveling-effect',
        'efek-perataan-air',
        'differentiating-effect',
        'teori-hsab',
        'asam-basa-pearson',
        'asam-lemah-kuadratik',
        'kegagalan-aproksimasi-5-persen',
        'asam-dikloroasetat'
      ],
      title: 'Pengayaan HOTS/OSN: Leveling Effect Pelarut, Teori Asam-Basa Keras-Lunak (HSAB) Pearson & Solusi Kuadratik Eksak pH',
      summary: 'Prinsip efek perataan (leveling effect) pelarut air vs pelarut diferensiasi terhadap kekuatan asam kuat, konsep Hard-Soft Acid-Base (HSAB) Pearson dalam afinitas ligan dan kelarutan endapan, serta penyelesaian kuadratik eksak pH bila aturan aproksimasi 5% gagal.',
      content: `Konsep asam-basa lanjutan menjembatani fenomena larutan nyata dan afinitas ikatan koordinasi:

### 1. Efek Perataan Pelarut (*Leveling Effect of Solvents*)

Air ($\ce{H2O}$) bersifat amfiprotik dan memiliki efek perataan terhadap kekuatan asam kuat dan basa kuat:
- **Asam Kuat Mineral:** Asam-asam kuat seperti $\\ce{HClO4, HI, HBr, HCl, HNO3}$ semuanya mengalami disosiasi $100\\%$ dalam air membentuk ion hidronium:
  $$\\ce{HA + H2O -> H3O+ + A-}$$
  Di dalam pelarut air, spesies asam terkuat yang dapat eksis secara termodinamika adalah ion **$\\ce{H3O+}$**. Oleh karena itu, air "meratakan" kekuatan seluruh asam kuat sehingga terlihat setara.
- **Efek Pembedaan (*Differentiating Solvent*):** Untuk mengukur perbedaan kekuatan intrinsik $\\ce{HClO4}$ vs $\\ce{HCl}$, digunakan pelarut yang lebih sukar menerima proton (basa lebih lemah dari air), misalnya **asam asetat glasial ($\\ce{CH3COOH}$)**. Dalam asam asetat, urutan kekuatan asam terbukti:
  $$\\ce{HClO4 > HI > HBr > HCl > HNO3}$$

---

### 2. Teori Asam-Basa Keras-Lunak Pearson (Asas HSAB)

Ralph Pearson (1963) mengklasifikasikan asam Lewis (akseptor elektron) dan basa Lewis (donor elektron) menjadi Keras (*Hard*) dan Lunak (*Soft*):
- **Spesies Keras (*Hard*):** Berukuran kecil, kerapatan muatan tinggi, dan polarisabilitas rendah (sukar terpolarisasi).  
  *Contoh:* Asam keras: $\\ce{H+, Li+, Na+, Mg^2+, Al^3+, Fe^3+}$; Basa keras: $\\ce{F-, OH-, H2O, NH3, CO3^2-}$.
- **Spesies Lunak (*Soft*):** Berukuran besar, muatan rendah, dan polarisabilitas tinggi (mudah dideformasi awan elektronnya).  
  *Contoh:* Asam lunak: $\\ce{Ag+, Cu+, Hg^2+, Pt^2+, Au+}$; Basa lunak: $\\ce{I-, S^2-, CN-, SCN-, R3P}$.
- **Prinsip Fundamental HSAB:** **"Asam keras lebih menyukai berikatan dengan basa keras (interaksi didominasi elektrostatik ionik), sedangkan asam lunak lebih menyukai berikatan dengan basa lunak (interaksi didominasi kovalen overlap)."**  
  *Penerapan:* $\\ce{Ag+}$ (asam lunak) membentuk endapan paling stabil dan sukar larut dengan $\\ce{I-}$ (basa lunak, $K_{sp} \\approx 10^{-16}$) dibandingkan $\\ce{Cl-}$ (basa relatif lebih keras, $K_{sp} \\approx 10^{-10}$).

---

### 3. Kegagalan Aturan 5% & Solusi Kuadratik Eksak pH

Pada asam lemah dengan nilai $K_a$ relatif besar (misal asam dikloroasetat $\\ce{CHCl2COOH}$, $K_a = 5.5 \\times 10^{-2}$) atau larutan asam lemah yang sangat encer ($C_a < 10^{-3}\\text{ M}$), asumsi aproksimasi $C_a - [\\ce{H+}] \\approx C_a$ menghasilkan galat $> 5\\%$.
- Persamaan kesetimbangan:
  $$K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{C_a - [\\ce{H+}]} = \\frac{[\\ce{H+}]^2}{C_a - [\\ce{H+}]}$$
- Solusi kuadratik eksak:
  $$[\\ce{H+}]^2 + K_a [\\ce{H+}] - K_a C_a = 0 \\implies [\\ce{H+}] = \\frac{-K_a + \\sqrt{K_a^2 + 4 K_a C_a}}{2}$$`,
      keyFormulas: [
        { name: 'Kriteria Leveling Effect Air', formula: '[\\ce{H3O+}]_{\\text{maks}} = [\\text{Asam Kuat}] \\quad (\\text{Spesies terkuat dalam air adalah } \\ce{H3O+})' },
        { name: 'Prinsip Afinitas HSAB', formula: '\\text{Hard-Hard (Elektrostatik Ionik)} \\quad \\text{vs} \\quad \\text{Soft-Soft (Kovalen Polarisabel)}' },
        { name: 'Solusi Eksak Kuadratik [H+]', formula: '[\\ce{H+}] = \\frac{-K_a + \\sqrt{K_a^2 + 4 K_a C_a}}{2}' }
      ]
    },
    ],
    worked_examples: [
      {
        tag: 'contoh-ph-asam-kuat-dan-lemah-komparasi',
        tags: ['contoh-ph-komparasi', 'asam-kuat-lemah', 'derajat-ionisasi-alfa', 'hcl-ch3cooh'],
        title: 'Contoh Soal 1: Komparasi Derajat Ionisasi dan pH Larutan Asam Kuat vs Asam Lemah Monoprotik',
        summary: 'Perhitungan konsentrasi ion H+, derajat disosiasi α, dan pH larutan HCl 0.01 M dibandingkan dengan CH3COOH 0.01 M (Ka = 1.8 x 10^-5).',
        content: `**Soal:**
Di laboratorium kimia sekolah, disiapkan dua botol larutan asam monoprotik dengan konsentrasi molaritas yang persis sama:
- **Botol A:** Larutan asam klorida ($\\ce{HCl}$) $0.010\\text{ M}$.
- **Botol B:** Larutan asam asetat ($\\ce{CH3COOH}$) $0.010\\text{ M}$ dengan nilai $K_a = 1.8 \\times 10^{-5}$.

Tentukan:
a) Derajat ionisasi ($\\alpha$) dan nilai pH larutan $\\ce{HCl}$ pada Botol A!
b) Derajat ionisasi ($\\alpha$) dan nilai pH larutan $\\ce{CH3COOH}$ pada Botol B!
c) Berapa kali lipat konsentrasi ion hidrogen $[\\ce{H+}]$ pada Botol A dibandingkan dengan Botol B?

---

**Pembahasan:**

**Bagian a: Analisis Larutan $\\ce{HCl}$ $0.010\\text{ M}$ (Asam Kuat)**
Asam klorida adalah asam kuat monoprotik ($a = 1$) yang terionisasi sempurna di dalam air:
$\\ce{HCl(aq) -> H+(aq) + Cl-(aq)}$
- Derajat ionisasi: $\\mathbf{\\alpha = 1.0}$ ($100\\%$ terionisasi).
- Konsentrasi ion $\\ce{H+}$:
  $[\\ce{H+}] = a \\times M_a = 1 \\times 0.010\\text{ M} = 1.0 \\times 10^{-2}\\text{ M}$
- Nilai pH:
  $\\text{pH} = -\\log[\\ce{H+}] = -\\log(1.0 \\times 10^{-2}) = \\mathbf{2.00}$

---

**Bagian b: Analisis Larutan $\\ce{CH3COOH}$ $0.010\\text{ M}$ (Asam Lemah)**
Asam asetat adalah asam lemah yang terionisasi sebagian dan membentuk kesetimbangan:
$\\ce{CH3COOH(aq) <=> CH3COO-(aq) + H+(aq)}$
- Derajat ionisasi ($\\alpha$):
  $\\alpha = \\sqrt{\\frac{K_a}{M_a}} = \\sqrt{\\frac{1.8 \\times 10^{-5}}{1.0 \\times 10^{-2}}} = \\sqrt{1.8 \\times 10^{-3}} = \\sqrt{18 \\times 10^{-4}} \\approx \\mathbf{0.0424 \\quad (4.24\\%)}$
- Konsentrasi ion $\\ce{H+}$:
  $[\\ce{H+}] = \\sqrt{K_a \\times M_a} = \\sqrt{1.8 \\times 10^{-5} \\times 1.0 \\times 10^{-2}} = \\sqrt{1.8 \\times 10^{-7}} = \\sqrt{18 \\times 10^{-8}} \\approx 4.24 \\times 10^{-4}\\text{ M}$
- Nilai pH:
  $\\text{pH} = -\\log(4.24 \\times 10^{-4}) = 4 - \\log(4.24) = 4 - 0.63 = \\mathbf{3.37}$

---

**Bagian c: Rasio Perbandingan Konsentrasi $[\\ce{H+}]$**
$\\text{Rasio} = \\frac{[\\ce{H+}]_{\\ce{HCl}}}{[\\ce{H+}]_{\\ce{CH3COOH}}} = \\frac{1.0 \\times 10^{-2}\\text{ M}}{4.24 \\times 10^{-4}\\text{ M}} \\approx \\mathbf{23.6\\text{ kali lipat}}$

> **Kesimpulan Evaluator Juri:** Meskipun konsentrasi molar kedua asam persis sama ($0.010\\text{ M}$), konsentrasi ion hidrogen bebas pada asam kuat $\\ce{HCl}$ hampir 24 kali lipat lebih pekat daripada asam asetat karena $\\ce{CH3COOH}$ hanya terurai $4.24\\%$. Perbedaan $[\\ce{H+}]$ ini menyebabkan pH $\\ce{HCl}$ (pH 2.00) jauh lebih asam daripada pH asam asetat (pH 3.37).`,
      },
      {
        tag: 'contoh-analisis-trayek-indikator-sampel',
        tags: ['contoh-trayek-indikator', 'irisan-garis-bilangan', 'analisis-ph-limbah', 'indikator-asam-basa'],
        title: 'Contoh Soal 2: Penentuan Rentang pH Sampel Air Limbah Laboratorium Berdasarkan Data 4 Indikator',
        summary: 'Analisis irisan himpunan logika trayek warna indikator metil jingga, metil merah, bromtimol biru, dan fenolftalein.',
        content: `**Soal:**
Suatu sampel air limbah industri diuji tingkat keasamannya di laboratorium menggunakan empat jenis indikator asam-basa sintetis. Data pengamatan warna yang tercatat adalah sebagai berikut:

| Indikator Asam-Basa | Trayek pH Indikator | Perubahan Warna Indikator | Warna Hasil Uji Sampel |
| :--- | :---: | :---: | :---: |
| **Metil Jingga (MO)** | $3.1 - 4.4$ | Merah - Kuning | **Kuning** |
| **Metil Merah (MR)** | $4.4 - 6.2$ | Merah - Kuning | **Kuning** |
| **Bromtimol Biru (BTB)** | $6.0 - 7.6$ | Kuning - Biru | **Biru** |
| **Fenolftalein (PP)** | $8.3 - 10.0$ | Tak Berwarna - Merah Muda | **Tak Berwarna** |

Tentukan:
a) Rentang perkiraan nilai pH yang memenuhi masing-masing hasil uji indikator!
b) Rentang nilai pH air limbah tersebut berdasarkan analisis irisan garis bilangan!
c) Apakah air limbah tersebut bersifat asam, netral, atau basa?

---

**Pembahasan:**

**Langkah 1: Analisis Respon Masing-Masing Indikator**
1. **Uji Metil Jingga (Trayek $3.1 - 4.4$):**
   - Menghasilkan warna **Kuning** (warna pada batas atas basa indikator).
   - Kesimpulan 1: $\\mathbf{\\text{pH} \\ge 4.4}$.
2. **Uji Metil Merah (Trayek $4.4 - 6.2$):**
   - Menghasilkan warna **Kuning** (warna pada batas atas basa indikator).
   - Kesimpulan 2: $\\mathbf{\\text{pH} \\ge 6.2}$.
3. **Uji Bromtimol Biru (Trayek $6.0 - 7.6$):**
   - Menghasilkan warna **Biru** (warna pada batas atas basa indikator).
   - Kesimpulan 3: $\\mathbf{\\text{pH} \\ge 7.6}$.
4. **Uji Fenolftalein (Trayek $8.3 - 10.0$):**
   - Menghasilkan warna **Tak Berwarna** (warna pada batas bawah asam indikator).
   - Kesimpulan 4: $\\mathbf{\\text{pH} \\le 8.3}$.

---

**Langkah 2: Menentukan Irisan Bersama Garis Bilangan**
Kita cari daerah pH yang memenuhi keempat syarat secara serempak:
- Syarat 1: $\\text{pH} \\ge 4.4$
- Syarat 2: $\\text{pH} \\ge 6.2$
- Syarat 3: $\\text{pH} \\ge 7.6$ (Batas bawah paling ketat)
- Syarat 4: $\\text{pH} \\le 8.3$ (Batas atas paling ketat)

Irisan himpunan penyelesaiannya adalah:
$\\mathbf{7.6 \\le \\text{pH} \\le 8.3}$

---

**Langkah 3: Menentukan Sifat Larutan**
Pada suhu kamar ($25^\\circ\\text{C}$), netral berada pada $\\text{pH} = 7.00$. Karena rentang pH limbah berada pada interval $7.6 - 8.3$ (di atas 7), maka:
**Air limbah tersebut bersifat Basa Lemah**.

> **Kesimpulan Evaluator Juri:** Dengan menggabungkan data keempat indikator, rentang pH air limbah terkunci secara presisi pada interval $7.6 \\le \\text{pH} \\le 8.3$ yang mengindikasikan sifat larutan basa lemah.`,
      },
      {
        tag: 'contoh-titrasi-alkalimetri-kadar-cuka',
        tags: ['contoh-titrasi-cuka', 'persen-kadar-asam-asetat', 'alkalimetri-naoh', 'stoikiometri-titrasi'],
        title: 'Contoh Soal 3: Penentuan Kadar Persen Massa Asam Asetat dalam Cuka Dapur Komersial via Titrasi Alkalimetri',
        summary: 'Aplikasi stoikiometri titrasi asam lemah dengan larutan standar NaOH 0.100 M serta konversi molaritas ke persentase massa (% w/w).',
        content: `**Soal:**
Untuk mengetahui kadar asam asetat ($\\ce{CH3COOH}$, $M_r = 60.0\\text{ g/mol}$) di dalam produk cuka dapur komersial bermerek, seorang siswa melakukan titrasi alkalimetri:
1. Sebanyak $10.0\\text{ mL}$ sampel cuka dapur dipipet ke dalam labu ukur $100.0\\text{ mL}$, lalu ditambahkan akuades hingga tanda batas (pengenceran $10\\times$).
2. Sebanyak $25.0\\text{ mL}$ larutan cuka encer tersebut dipipet ke dalam labu erlenmeyer, diberi $3$ tetes indikator fenolftalein (PP).
3. Larutan dititrasi dengan larutan standar $\\ce{NaOH } 0.100\\text{ M}$. Titik akhir titrasi tercapai saat warna larutan tepat berubah menjadi merah muda stabil dengan volume $\\ce{NaOH}$ yang terpakai rata-rata sebesar $30.0\\text{ mL}$.

Jika massa jenis cuka dapur semula adalah $\\rho = 1.05\\text{ g/mL}$, tentukan:
a) Molaritas asam asetat di dalam larutan cuka encer!
b) Molaritas asam asetat di dalam sampel cuka dapur pekat asal!
c) Kadar persentase massa ($\\%\\text{ b/b}$) asam asetat dalam cuka dapur tersebut!

---

**Pembahasan:**

Reaksi netralisasi titrasi:
$\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$
Valensi asam $a = 1$, valensi basa $b = 1$.

**Bagian a: Molaritas Asam Asetat Encer**
Gunakan persamaan ekuivalensi titrasi:
$V_{\\text{asam}} \\times M_{\\text{asam, encer}} \\times a = V_{\\text{basa}} \\times M_{\\text{basa}} \\times b$
$(25.0\\text{ mL}) \\times M_{\\text{asam, encer}} \\times 1 = (30.0\\text{ mL}) \\times (0.100\\text{ M}) \\times 1$
$M_{\\text{asam, encer}} = \\frac{30.0 \\times 0.100}{25.0} = \\frac{3.00}{25.0} = \\mathbf{0.120\\text{ M}}$

---

**Bagian b: Molaritas Asam Asetat Pekat Mula-Mula**
Gunakan faktor pengenceran labu ukur:
$\\text{Faktor Pengenceran } (f) = \\frac{V_{\\text{labu ukur}}}{V_{\\text{sampel dipipet}}} = \\frac{100.0\\text{ mL}}{10.0\\text{ mL}} = 10$
$M_{\\text{pekat}} = M_{\\text{encer}} \\times f = 0.120\\text{ M} \\times 10 = \\mathbf{1.20\\text{ M}}$

---

**Bagian c: Menghitung Kadar Persen Massa ($\\%\\text{ w/w}$)**
Tinjau $1.0\\text{ Liter}$ ($1000\\text{ mL}$) sampel cuka dapur pekat:
1. Massa total $1000\\text{ mL}$ larutan:
   $m_{\\text{larutan}} = \\rho \\times V = 1.05\\text{ g/mL} \\times 1000\\text{ mL} = 1050\\text{ gram}$
2. Massa zat terlarut $\\ce{CH3COOH}$ dalam $1000\\text{ mL}$:
   $n_{\\ce{CH3COOH}} = M \\times V = 1.20\\text{ mol/L} \\times 1.0\\text{ L} = 1.20\\text{ mol}$
   $m_{\\ce{CH3COOH}} = n \\times M_r = 1.20\\text{ mol} \\times 60.0\\text{ g/mol} = 72.0\\text{ gram}$
3. Hitung persentase massa:
   $\\% \\text{ massa} = \\frac{m_{\\ce{CH3COOH}}}{m_{\\text{larutan}}} \\times 100\\% = \\frac{72.0\\text{ g}}{1050\\text{ g}} \\times 100\\% \\approx \\mathbf{6.86\\%}$

*(Atau via rumus kilat: $\\% = \\frac{M \\times M_r}{10 \\times \\rho} = \\frac{1.20 \\times 60}{10 \\times 1.05} = \\frac{72}{10.5} \\approx 6.86\\%$)*.

> **Kesimpulan Evaluator Juri:** Konsentrasi asam asetat dalam cuka dapur komersial tersebut adalah $1.20\\text{ M}$ yang setara dengan kadar $6.86\\% \\text{ w/w}$, sesuai dengan standar regulasi pangan cuka konsumsi ($4\\% - 8\\%$).`,
      },
      {
        tag: 'contoh-perhitungan-titik-titrasi-ph-step',
        tags: ['contoh-kurva-titrasi', 'perhitungan-ph-step-by-step', 'titik-ekuivalen-hcl-naoh', 'stoikiometri-ionik'],
        title: 'Contoh Soal 4: Perhitungan pH Komprehensif pada Empat Titik Kritis Titrasi Asam Kuat dengan Basa Kuat',
        summary: 'Kalkulasi matematis nilai pH sebelum titrasi, sebelum titik ekuivalen (kelebihan asam), pada titik ekuivalen, dan setelah titik ekuivalen (kelebihan basa).',
        content: `**Soal:**
Sebanyak $50.0\\text{ mL}$ larutan $\\ce{HCl } 0.100\\text{ M}$ dititrasi dengan larutan $\\ce{NaOH } 0.100\\text{ M}$ pada suhu $25^\\circ\\text{C}$.
Hitunglah pH larutan pada empat tahapan titrasi berikut:
a) Sebelum penambahan $\\ce{NaOH}$ ($V_{\\ce{NaOH}} = 0.0\\text{ mL}$).
b) Setelah penambahan $40.0\\text{ mL}$ larutan $\\ce{NaOH}$ (sebelum titik ekuivalen).
c) Setelah penambahan $50.0\\text{ mL}$ larutan $\\ce{NaOH}$ (tepat pada titik ekuivalen).
d) Setelah penambahan $60.0\\text{ mL}$ larutan $\\ce{NaOH}$ (setelah titik ekuivalen).

---

**Pembahasan:**

Jumlah mol awal asam klorida:
$n(\\ce{HCl})_{\\text{awal}} = 50.0\\text{ mL} \\times 0.100\\text{ mmol/mL} = 5.00\\text{ mmol}$

---

**Bagian a: Sebelum Penambahan $\\ce{NaOH}$ ($V = 0.0\\text{ mL}$)**
Larutan murni $\\ce{HCl } 0.100\\text{ M}$:
$[\\ce{H+}] = 0.100\\text{ M} = 1.00 \\times 10^{-1}\\text{ M}$
$\\mathbf{\\text{pH} = -\\log(10^{-1}) = 1.00}$

---

**Bagian b: Setelah Penambahan $40.0\\text{ mL } \\ce{NaOH}$**
- Mol $\\ce{NaOH}$ ditambahkan $= 40.0\\text{ mL} \\times 0.100\\text{ M} = 4.00\\text{ mmol}$.
- Reaksi: $\\ce{HCl + NaOH -> NaCl + H2O}$
- Mol $\\ce{HCl}$ bersisa $= 5.00 - 4.00 = 1.00\\text{ mmol}$.
- Volume total campuran $= 50.0\\text{ mL} + 40.0\\text{ mL} = 90.0\\text{ mL}$.
- Konsentrasi ion $\\ce{H+}$ sisa:
  $[\\ce{H+}] = \\frac{n_{\\text{sisa}}}{V_{\\text{total}}} = \\frac{1.00\\text{ mmol}}{90.0\\text{ mL}} = 1.11 \\times 10^{-2}\\text{ M}$
- Nilai pH:
  $\\text{pH} = -\\log(1.11 \\times 10^{-2}) = 2 - \\log(1.11) = 2 - 0.045 = \\mathbf{1.955 \\approx 1.96}$

---

**Bagian c: Setelah Penambahan $50.0\\text{ mL } \\ce{NaOH}$ (Titik Ekuivalen)**
- Mol $\\ce{NaOH}$ ditambahkan $= 50.0\\text{ mL} \\times 0.100\\text{ M} = 5.00\\text{ mmol}$.
- Kedua pereaksi tepat habis bereaksi membentuk garam $\\ce{NaCl(aq)}$.
- Karena $\\ce{NaCl}$ berasal dari kation basa kuat ($\\ce{Na+}$) dan anion asam kuat ($\\ce{Cl-}$), keduanya tidak mengalami hidrolisis sama sekali dalam air.
- Konsentrasi ion $\\ce{H+}$ murni berasal dari autoionisasi air:
  $[\\ce{H+}] = \\sqrt{K_w} = 1.00 \\times 10^{-7}\\text{ M}$
  $\\mathbf{\\text{pH} = 7.00}$

---

**Bagian d: Setelah Penambahan $60.0\\text{ mL } \\ce{NaOH}$ (Kelebihan Basa)**
- Mol $\\ce{NaOH}$ ditambahkan $= 60.0\\text{ mL} \\times 0.100\\text{ M} = 6.00\\text{ mmol}$.
- Kelebihan mol $\\ce{NaOH} = 6.00 - 5.00 = 1.00\\text{ mmol}$.
- Volume total campuran $= 50.0\\text{ mL} + 60.0\\text{ mL} = 110.0\\text{ mL}$.
- Konsentrasi ion $\\ce{OH-}$ berlebih:
  $[\\ce{OH-}] = \\frac{n_{\\text{kelebihan}}}{V_{\\text{total}}} = \\frac{1.00\\text{ mmol}}{110.0\\text{ mL}} = 9.09 \\times 10^{-3}\\text{ M}$
- Hitung pOH dan pH:
  $\\text{pOH} = -\\log(9.09 \\times 10^{-3}) = 3 - \\log(9.09) = 3 - 0.959 = 2.041$
  $\\mathbf{\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 2.041 = 11.959 \\approx 11.96}$

> **Kesimpulan Evaluator Juri:** Perhitungan ini memvalidasi bentuk khas kurva titrasi asam kuat-basa kuat: pH berubah perlahan dari 1.00 ke 1.96, kemudian mengalami lonjakan vertikal terjal melewati titik ekuivalen pH 7.00 hingga mencapai pH 11.96 hanya dengan penambahan beberapa mililiter basa kuat.`,
      },
    ],
  },
  {
    id: 110,
    topic_number: 10,
    grade: 'Kelas 11',
    semester: 2,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 5,
    title: 'Larutan Penyangga (Buffer) & Hidrolisis Garam SMA (Mekanisme Pertahanan pH, Persamaan Henderson-Hasselbalch, Hidrolisis Total/Parsial & Aplikasi Fisiologis)',
    slug: 'larutan-penyangga-buffer-hidrolisis-garam-sma',
    category: 'Kimia Larutan',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Eksplorasi komprehensif sistem kimia larutan penyangga (buffer) dan hidrolisis garam: komposisi pasangan konjugasi asam-basa, mekanisme dinamis pertahanan pH terhadap penambahan sedikit asam kuat, basa kuat, atau pengenceran, formulasi matematis Henderson-Hasselbalch, kapasitas buffer maksimum, klasifikasi 4 tipe hidrolisis kation dan anion garam (tak terhidrolisis, parsial asam, parsial basa, dan hidrolisis total Ka vs Kb), serta aplikasi biologis sistem penyangga karbonat darah dan fosfat intraseluler.',
    allTags: [
      'larutan-penyangga',
      'buffer-asam-basa',
      'persamaan-henderson-hasselbalch',
      'hidrolisis-garam',
      'hidrolisis-parsial',
      'hidrolisis-total',
      'tetapan-hidrolisis-kh',
      'kapasitas-buffer',
      'buffer-darah',
      'identifikasi-buffer',
      'asam-lemah-garam',
      'fase-f',
      'tipe-hidrolisis',
      'asam-basa-garam',
      'buffer-asam',
      'henderson-hasselbalch',
      'ph-buffer',
      'asam-asetat',
      'mekanisme-buffer',
      'asam-format',
      'pertahanan-ph',
      'reaksi-asam-basa',
      'garam-basa',
      'tetapan-kh',
      'natrium-asetat',
      'stoikiometri-larutan',
      'asam-lemah-basa-kuat',
      'buffer-basa',
      'faktor-valensi',
      'amonium-sulfat',
      'hidrolisis-kation',
      'garam-asam',
      'fisiologi-manusia',
      'asidosis-alkalosis',
      'amonium-sianida',
      'ka-vs-kb',
      'pergeseran-ph',
      'buffer-asetat',
      'asam-kuat-basa-kuat',
      'hidrolisis-anion',
      'titrasi-netralisasi',
      'kalium-hidroksida',
      'pengenceran-buffer',
      'asam-lemah',
      'komparasi-ph',
      'rasio-mol',
      'desain-buffer',
      'target-ph',
      'hidrolisis-polivalen',
      'anion-karbonat',
      'kalium-karbonat',
      'ph-basa',
      'van-slyke',
      'derivasi-matematik',
      'buffer-maksimum',
      'efek-ion-senama',
      'derajat-disosiasi',
      'le-chatelier',
      'asam-fluorida',
      'buffer-fosfat',
      'intraseluler',
      'asam-poliprotik',
      'fisiologi',
      'amfiprotik',
      'garam-amfoter',
      'natrium-bikarbonat',
      'ph-amfiprotik',
      'autoprotolisis-air',
      'termodinamika',
      'ph-netral',
      'efek-suhu',
      'setengah-ekuivalen',
      'kurva-titrasi',
      'resistensi-buffer',
      'buffer-bikarbonat',
      'hukum-henry',
      'asidosis-metabolik',
      'kompensasi-respirasi',
      'kation-terhidrasi',
      'hidrolisis-kompleks',
      'aluminium-sulfat',
      'rapat-muatan',
      'trimetilamin',
      'perancangan-buffer',
      'massa-garam',
      'garam-amfiprotik',
      'kesetimbangan-simultan',
      'dinatrium-fosfat',
      'ph-amfoter',
    ],
    prerequisites: [
      {
        tag: 'prasyarat-konjugasi-dan-kesetimbangan-lemah',
        title: 'Prasyarat 1: Pasangan Asam-Basa Konjugasi & Kesetimbangan Ionisasi Asam/Basa Lemah',
        summary: 'Identifikasi spesi konjugasi Brønsted-Lowry yang hanya berselisih satu proton H+ serta tetapan ionisasi Ka, Kb, dan relasi Ka × Kb = Kw.',
        content: `Sebelum menganalisis larutan penyangga dan hidrolisis garam, pemahaman mengenai pasangan asam-basa konjugasi menurut teori Brønsted-Lowry merupakan fondasi yang mutlak diperlukan.

### 1. Hakikat Pasangan Konjugasi
- **Asam:** Spesi kimia pendonor (pemberi) proton ($\\ce{H+}$).
- **Basa Konjugasi:** Spesi kimia sisa yang terbentuk setelah asam kehilangan satu proton:
  $\\ce{HA(aq) <=> H+(aq) + A-(aq)}$
  *(Contoh: $\\ce{CH3COOH}$ bertindak sebagai asam, maka $\\ce{CH3COO-}$ adalah basa konjugasinya).*
- **Basa:** Spesi kimia akseptor (penerima) proton ($\\ce{H+}$).
- **Asam Konjugasi:** Spesi kimia yang terbentuk setelah basa mengikat satu proton:
  $\\ce{B(aq) + H2O(l) <=> BH+(aq) + OH-(aq)}$
  *(Contoh: $\\ce{NH3}$ bertindak sebagai basa, maka $\\ce{NH4+}$ adalah asam konjugasinya).*

---

### 2. Hubungan Termodinamika Antara $K_a$ dan $K_b$
Untuk sepasang asam lemah ($\\ce{HA}$) dan basa konjugasinya ($\\ce{A-}$), perkalian tetapan ionisasi asam ($K_a$) dengan tetapan ionisasi basa ($K_b$) selalu menghasilkan tetapan autoprotolisis air ($K_w$):
$\\mathbf{K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\quad (25^\\circ\\text{C})}$
Dalam skala logaritma negatif:
$\\mathbf{\\text{p}K_a + \\text{p}K_b = 14.00}$

> **Hukum Timbal Balik Kekuatan Relatif:** Semakin lemah suatu asam (nilai $K_a$ semakin kecil), maka basa konjugasinya akan semakin kuat (nilai $K_b$ semakin besar), dan sebaliknya. Anion dari asam kuat (seperti $\\ce{Cl-}$, $\\ce{NO3-}$) merupakan basa konjugasi yang luar biasa lemah sehingga tidak dapat bereaksi dengan air, sedangkan anion dari asam lemah (seperti $\\ce{CH3COO-}$, $\\ce{CN-}$) merupakan basa konjugasi yang cukup kuat untuk bereaksi dengan air (mengalami hidrolisis).`,
      },
      {
        tag: 'prasyarat-stoikiometri-reaksi-asam-basa-sisa',
        title: 'Prasyarat 2: Stoikiometri Pembentukan Campuran: Habis Reaksi vs Pereaksi Sisa',
        summary: 'Pemetaan hasil pencampuran asam dan basa: pembentukan garam netral, pembentukan garam terhidrolisis, atau pembentukan sistem penyangga.',
        content: `Seringkali dalam soal ujian SMA dan OSN, kita dihadapkan pada pencampuran larutan asam dan basa. Karakteristik larutan akhir yang terbentuk ditentukan sepenuhnya oleh **stoikiometri mol zat yang bersisa atau habis bereaksi**.

### 1. Peta Logika Pencampuran Asam dan Basa

| Sifat Pereaksi yang Dicampurkan | Kondisi Mol Stoikiometri | Jenis Sistem yang Terbentuk | Rumus Penentu pH Larutan |
| :--- | :--- | :--- | :--- |
| **Asam Lemah + Basa Kuat** | Asam Lemah **BERSISA**, Basa Kuat Habis | **Larutan Penyangga Asam** ($\\ce{HA} + \\ce{A-}$) | $[\\ce{H+}] = K_a \\times \\frac{n_{\\text{asam sisa}}}{n_{\\text{garam terbentuk}}}$ |
| **Asam Lemah + Basa Kuat** | Keduanya **TEPAT HABIS BEREAKSI** | **Garam Terhidrolisis Basa** ($\\ce{A-}$) | $[\\ce{OH-}] = \\sqrt{\\frac{K_w}{K_a} \\cdot [\\ce{G}] \\cdot v}$ |
| **Asam Lemah + Basa Kuat** | Basa Kuat **BERSISA**, Asam Lemah Habis | Campuran Basa Kuat Dominan | $[\\ce{OH-}] = \\frac{n_{\\text{basa kuat sisa}}}{V_{\\text{total}}}$ |
| **Asam Kuat + Basa Lemah** | Basa Lemah **BERSISA**, Asam Kuat Habis | **Larutan Penyangga Basa** ($\\ce{B} + \\ce{BH+}$) | $[\\ce{OH-}] = K_b \\times \\frac{n_{\\text{basa sisa}}}{n_{\\text{garam terbentuk}}}$ |
| **Asam Kuat + Basa Lemah** | Keduanya **TEPAT HABIS BEREAKSI** | **Garam Terhidrolisis Asam** ($\\ce{BH+}$) | $[\\ce{H+}] = \\sqrt{\\frac{K_w}{K_b} \\cdot [\\ce{G}] \\cdot v}$ |
| **Asam Kuat + Basa Lemah** | Asam Kuat **BERSISA**, Basa Lemah Habis | Campuran Asam Kuat Dominan | $[\\ce{H+}] = \\frac{n_{\\text{asam kuat sisa}}}{V_{\\text{total}}}$ |
| **Asam Kuat + Basa Kuat** | Keduanya **TEPAT HABIS BEREAKSI** | **Garam Netral** (Tidak Terhidrolisis) | $[\\ce{H+}] = 1.0 \\times 10^{-7}\\text{ M} \\implies \\text{pH} = 7.00$ |

---

### 2. Algoritma Identifikasi Tipe Soal:
1. Hitung mol masing-masing pereaksi ($n = M \\times V$).
2. Susun persamaan reaksi netralisasi dan tabel stoikiometri **Mula-mula, Bereaksi, Sisa (M-B-S)**.
3. Periksa spesi yang berada pada baris **Sisa (S)**:
   - Jika tersisa **asam lemah + garamnya** $\\implies$ Gunakan rumus **Buffer Asam**.
   - Jika tersisa **basa lemah + garamnya** $\\implies$ Gunakan rumus **Buffer Basa**.
   - Jika pereaksi **tepat habis dan hanya tersisa garam** $\\implies$ Gunakan rumus **Hidrolisis Garam**.`,
      },
    ],
    core_concepts: [
      {
        tag: 'mekanisme-buffer-dan-henderson-hasselbalch',
        tags: ['larutan-penyangga', 'mekanisme-buffer', 'persamaan-henderson-hasselbalch', 'pertahanan-ph'],
        title: 'Konsep Inti 1: Mekanisme Pertahanan pH & Persamaan Henderson-Hasselbalch',
        summary: 'Prinsip aksi penyerapan H+ dan OH- oleh komponen konjugasi buffer serta perumusan logaritmik pH = pKa + log([A-]/[HA]).',
        content: `Larutan penyangga (*buffer solution*) adalah larutan yang mampu mempertahankan nilai pH-nya secara relatif konstan terhadap penambahan sedikit asam kuat, sedikit basa kuat, maupun pengenceran dengan air.

### 1. Komposisi Kimiawi Larutan Penyangga
Larutan penyangga wajib mengandung **pasangan asam-basa konjugasi** dalam konsentrasi yang cukup dan seimbang:
1. **Penyangga Asam (pH &lt; 7):**
   - Terdiri atas campuran **Asam Lemah ($\\ce{HA}$)** dan **Basa Konjugasinya ($\\ce{A-}$)** yang berasal dari garamnya.
   - *Contoh klasik:* Campuran $\\ce{CH3COOH}$ (asam lemah) dan $\\ce{CH3COONa}$ (menyediakan ion $\\ce{CH3COO-}$).
2. **Penyangga Basa (pH &gt; 7):**
   - Terdiri atas campuran **Basa Lemah ($\\ce{B}$)** dan **Asam Konjugasinya ($\\ce{BH+}$)** yang berasal dari garamnya.
   - *Contoh klasik:* Campuran $\\ce{NH3}$ (basa lemah) dan $\\ce{NH4Cl}$ (menyediakan ion $\\ce{NH4+}$).

---

### 2. Mekanisme Dinamis Pertahanan pH Larutan Penyangga

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">MEKANISME AKSI PERTAHANAN pH LARUTAN PENYANGGA ASAM (CH3COOH + CH3COO⁻)</text>

  <!-- PANEL 1: KESETIMBANGAN AWAL (x=20..250) -->
  <g transform="translate(20, 55)">
    <rect x="0" y="0" width="230" height="245" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="210" height="28" rx="4" fill="#3b82f6"/>
    <text x="115" y="28" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. KOMPOSISI AWAL</text>
    
    <text x="115" y="60" fill="#1e293b" font-size="10.5" font-weight="bold" text-anchor="middle">Kesetimbangan Dinamis:</text>
    <rect x="10" y="70" width="210" height="55" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="115" y="92" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">CH3COOH ⇌ H+ + CH3COO-</text>
    <text x="115" y="112" fill="#64748b" font-size="9" text-anchor="middle">Asam Lemah         Basa Konjugasi</text>

    <rect x="10" y="135" width="210" height="98" rx="4" fill="#f1f5f9"/>
    <text x="16" y="155" fill="#334155" font-size="9.5" font-weight="bold">Cadangan Komponen:</text>
    <text x="16" y="172" fill="#475569" font-size="9">• CH3COOH: penetral basa</text>
    <text x="16" y="188" fill="#475569" font-size="9">• CH3COO-: penangkap asam</text>
    <text x="16" y="212" fill="#2563eb" font-size="9.5" font-weight="bold">pH Awal = 4.74 (Stabil)</text>
  </g>

  <!-- PANEL 2: DITAMBAH SEDIKIT ASAM KUAT (x=265..495) -->
  <g transform="translate(265, 55)">
    <rect x="0" y="0" width="230" height="245" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="10" y="10" width="210" height="28" rx="4" fill="#dc2626"/>
    <text x="115" y="28" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. + SEDIKIT ASAM (H+)</text>

    <text x="115" y="60" fill="#991b1b" font-size="10.5" font-weight="bold" text-anchor="middle">Reaksi Penangkapan:</text>
    <rect x="10" y="70" width="210" height="60" rx="4" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
    <text x="115" y="92" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">CH3COO- + H+ ➔ CH3COOH</text>
    <text x="115" y="114" fill="#991b1b" font-size="8.5" text-anchor="middle">Ion H+ diikat menjadi molekul asam lemah</text>

    <rect x="10" y="140" width="210" height="93" rx="4" fill="#ffffff" stroke="#fecaca" stroke-width="1"/>
    <text x="16" y="160" fill="#991b1b" font-size="9.5" font-weight="bold">Dampak Perubahan:</text>
    <text x="16" y="176" fill="#7f1d1d" font-size="9">• [CH3COO-] sedikit berkurang</text>
    <text x="16" y="192" fill="#7f1d1d" font-size="9">• [CH3COOH] sedikit bertambah</text>
    <text x="16" y="215" fill="#dc2626" font-size="9.5" font-weight="bold">pH Praktis Tetap (~4.66)</text>
  </g>

  <!-- PANEL 3: DITAMBAH SEDIKIT BASA KUAT (x=510..740) -->
  <g transform="translate(510, 55)">
    <rect x="0" y="0" width="230" height="245" rx="8" fill="#eff6ff" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="10" y="10" width="210" height="28" rx="4" fill="#0284c7"/>
    <text x="115" y="28" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. + SEDIKIT BASA (OH-)</text>

    <text x="115" y="60" fill="#0369a1" font-size="10.5" font-weight="bold" text-anchor="middle">Reaksi Penetralan:</text>
    <rect x="10" y="70" width="210" height="60" rx="4" fill="#e0f2fe" stroke="#bae6fd" stroke-width="1"/>
    <text x="115" y="92" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">CH3COOH + OH- ➔ CH3COO- + H2O</text>
    <text x="115" y="114" fill="#075985" font-size="8.5" text-anchor="middle">Ion OH- dinetralkan menghasilkan air</text>

    <rect x="10" y="140" width="210" height="93" rx="4" fill="#ffffff" stroke="#bae6fd" stroke-width="1"/>
    <text x="16" y="160" fill="#0369a1" font-size="9.5" font-weight="bold">Dampak Perubahan:</text>
    <text x="16" y="176" fill="#075985" font-size="9">• [CH3COOH] sedikit berkurang</text>
    <text x="16" y="192" fill="#075985" font-size="9">• [CH3COO-] sedikit bertambah</text>
    <text x="16" y="215" fill="#0284c7" font-size="9.5" font-weight="bold">pH Praktis Tetap (~4.83)</text>
  </g>
</svg>

---

### 3. Derivasi Persamaan Henderson-Hasselbalch

Tinjau kesetimbangan ionisasi asam lemah $\\ce{HA}$ di dalam larutan:
$K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]} \\implies [\\ce{H+}] = K_a \\times \\frac{[\\ce{HA}]}{[\\ce{A-}]}$

Karena kedua komponen berada di dalam satu bejana dengan volume yang sama ($V$), rasio konsentrasi molar dapat digantikan langsung oleh rasio jumlah mol:
$\\mathbf{[\\ce{H+}] = K_a \\times \\frac{n_{\\text{asam lemah}}}{n_{\\text{basa konjugasi}}}}$

Terapkan fungsi $-\\log$ pada kedua ruas:
$-\\log[\\ce{H+}] = -\\log K_a - \\log\\left(\\frac{[\\ce{HA}]}{[\\ce{A-}]}\\right) = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right)$
Diperoleh **Persamaan Henderson-Hasselbalch**:
$\\mathbf{\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right) = \\text{p}K_a + \\log\\left(\\frac{n_{\\text{basa konjugasi}}}{n_{\\text{asam lemah}}}\\right)}$

Untuk larutan penyangga basa ($\\ce{B} + \\ce{BH+}$):
$\\mathbf{[\\ce{OH-}] = K_b \\times \\frac{n_{\\text{basa lemah}}}{n_{\\text{asam konjugasi}}}} \\implies \\mathbf{\\text{pOH} = \\text{p}K_b + \\log\\left(\\frac{n_{\\text{asam konjugasi}}}{n_{\\text{basa lemah}}}\\right)}$`,
        keyFormulas: [
          { name: 'Rumus [H+] Buffer Asam', formula: '[\\ce{H+}] = K_a \\times \\frac{n_{\\text{asam}}}{n_{\\text{basa konjugasi}}}' },
          { name: 'Persamaan Henderson-Hasselbalch Asam', formula: '\\text{pH} = \\text{p}K_a + \\log \\left( \\frac{[\\ce{A-}]}{[\\ce{HA}]} \\right)' },
          { name: 'Rumus [OH-] Buffer Basa', formula: '[\\ce{OH-}] = K_b \\times \\frac{n_{\\text{basa}}}{n_{\\text{asam konjugasi}}}' },
          { name: 'Persamaan Henderson-Hasselbalch Basa', formula: '\\text{pOH} = \\text{p}K_b + \\log \\left( \\frac{[\\ce{BH+}]}{[\\ce{B}]} \\right)' },
        ],
      },
      {
        tag: 'kapasitas-buffer-dan-sistem-penyangga-biologis',
        tags: ['kapasitas-buffer', 'buffer-maksimum', 'sistem-penyangga-darah', 'asidosis-alkalosis'],
        title: 'Konsep Inti 2: Kapasitas Buffer Maksimum & Peran Vital Penyangga dalam Darah Tubuh Manusia',
        summary: 'Kondisi kapasitas penyangga optimal saat pH = pKa, batas efektif pKa ± 1, serta sistem penyangga asam karbonat-bikarbonat dalam darah fisiologis.',
        content: `Meskipun larutan penyangga dapat menahan perubahan pH, kemampuannya tidak tak terbatas. Jumlah asam atau basa yang dapat dinetralkan sebelum pH larutan mengalami perubahan signifikan disebut **Kapasitas Penyangga (*Buffer Capacity*)**.

### 1. Syarat Efektivitas Kapasitas Penyangga
- **Konsentrasi Komponen Cukup Besar:** Semakin pekat konsentrasi komponen asam dan basa konjugasinya (jumlah mol besar), semakin besar kapasitas larutan dalam menahan gangguan asam/basa eksternal.
- **Kapasitas Penyangga Maksimum:** Tercapai ketika konsentrasi asam lemah tepat sama dengan basa konjugasinya:
  $[\\ce{A-}] = [\\ce{HA}] \\implies \\frac{[\\ce{A-}]}{[\\ce{HA}]} = 1 \\implies \\log(1) = 0 \\implies \\mathbf{\\text{pH} = \\text{p}K_a}$
- **Rentang Kerja Efektif (*Effective Buffer Range*):** Larutan penyangga hanya bekerja efektif jika rasio konsentrasi berada di antara $0.1$ hingga $10$, yang bersesuaian dengan rentang:
  $\\mathbf{\\text{Rentang pH Efektif} = \\text{p}K_a \\pm 1}$

---

### 2. Infografis Sistem Penyangga Darah Manusia

<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">SISTEM PENYANGGA KARBONAT DARAH MANUSIA (pH KETAT 7.35 - 7.45)</text>

  <!-- PANEL KIRI: KURVA KAPASITAS (x=20..365) -->
  <g transform="translate(20, 52)">
    <rect x="0" y="0" width="345" height="260" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="172" y="24" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">1. Kurva Kapasitas Penyangga Optimal</text>

    <!-- Sumbu -->
    <line x1="45" y1="215" x2="320" y2="215" stroke="#64748b" stroke-width="2"/>
    <line x1="45" y1="215" x2="45" y2="40" stroke="#64748b" stroke-width="2"/>
    <text x="325" y="219" fill="#64748b" font-size="9" font-weight="bold">pH</text>
    <text x="40" y="34" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">Kapasitas (β)</text>

    <!-- Kurva Bell-shape Kapasitas Buffer -->
    <path d="M 60 210 Q 130 205, 150 170 Q 182 50, 182 50 Q 182 50, 214 170 Q 234 205, 305 210" fill="none" stroke="#2563eb" stroke-width="3"/>

    <!-- Puncak Optimum pH = pKa -->
    <line x1="182" y1="215" x2="182" y2="50" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="182" cy="50" r="5" fill="#f59e0b"/>
    <rect x="127" y="58" width="110" height="24" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
    <text x="182" y="74" fill="#b45309" font-size="9.5" font-weight="bold" text-anchor="middle">Maksimum: pH = pKa</text>

    <!-- Rentang Efektif pKa - 1 s.d. pKa + 1 -->
    <rect x="120" y="180" width="125" height="26" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1"/>
    <text x="182" y="197" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">Rentang Kerja: pKa ± 1</text>
  </g>

  <!-- PANEL KANAN: BUFFER DARAH (x=390..740) -->
  <g transform="translate(390, 52)">
    <rect x="0" y="0" width="350" height="260" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
    <text x="175" y="24" fill="#991b1b" font-size="11.5" font-weight="bold" text-anchor="middle">2. Sistem Karbonat (H2CO3 / HCO3⁻)</text>

    <rect x="15" y="40" width="320" height="60" rx="6" fill="#ffffff" stroke="#fca5a5" stroke-width="1"/>
    <text x="175" y="62" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">CO2(g) + H2O(l) ⇌ H2CO3(aq) ⇌ H+ + HCO3-</text>
    <text x="175" y="85" fill="#7f1d1d" font-size="9" text-anchor="middle">(Paru-paru membuang CO2, Ginjal meregulasi HCO3-)</text>

    <!-- Skala Klinis pH Darah -->
    <rect x="15" y="112" width="320" height="75" rx="6" fill="#ffffff" stroke="#fca5a5" stroke-width="1"/>
    <line x1="30" y1="145" x2="320" y2="145" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    
    <!-- Zona Aman Normal 7.35 - 7.45 -->
    <rect x="145" y="137" width="60" height="16" rx="3" fill="#10b981"/>
    <text x="175" y="132" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">7.35 - 7.45 (Normal)</text>

    <!-- Asidosis & Alkalosis -->
    <text x="70" y="165" fill="#dc2626" font-size="9" font-weight="bold">Asidosis (&lt; 7.35)</text>
    <text x="280" y="165" fill="#2563eb" font-size="9" font-weight="bold" text-anchor="end">Alkalosis (&gt; 7.45)</text>

    <rect x="15" y="198" width="320" height="48" rx="4" fill="#fee2e2"/>
    <text x="175" y="217" fill="#991b1b" font-size="9" text-anchor="middle">Rasio fisiologis [HCO3-] / [H2CO3] dijaga sekitar 20 : 1.</text>
    <text x="175" y="232" fill="#7f1d1d" font-size="8.5" text-anchor="middle">Penyangga intraseluler (dalam sel) diperankan oleh H2PO4- / HPO4²-.</text>
  </g>
</svg>

---

### 2. Dua Penyangga Fisiologis Utama Manusia:
1. **Sistem Penyangga Ekstraseluler (Darah):**
   - Pasangan: Asam Karbonat ($\\ce{H2CO3}$) dan Ion Bikarbonat ($\\ce{HCO3-}$).
   - Menjaga pH darah tetap stabil pada rentang sempit $\\mathbf{7.35 - 7.45}$.
   - Jika pH darah turun di bawah $7.35$, tubuh mengalami **Asidosis** (dapat berujung koma dan kematian).
   - Jika pH darah naik di atas $7.45$, tubuh mengalami **Alkalosis** (menyebabkan kejang otot dan tetani).
2. **Sistem Penyangga Intraseluler (Cairan Sitoplasma Sel):**
   - Pasangan: Dihidrogen Fosfat ($\\ce{H2PO4-}$) dan Monohidrogen Fosfat ($\\ce{HPO4^2-}$).
   - Bekerja efektif pada rentang $\\text{pH} \\approx 6.8 - 7.2$.`,
        keyFormulas: [
          { name: 'Kapasitas Buffer Maksimum', formula: '\\text{Kapasitas Maksimum } \\iff [\\ce{A-}] = [\\ce{HA}] \\iff \\text{pH} = \\text{p}K_a' },
          { name: 'Rentang Kerja Buffer', formula: '\\text{Rentang Efektif} = \\text{p}K_a \\pm 1.0' },
          { name: 'Buffer Darah Fisiologis', formula: '\\ce{CO2 + H2O <=> H2CO3 <=> H+ + HCO3-}' },
        ],
      },
      {
        tag: 'klasifikasi-dan-reaksi-hidrolisis-garam',
        tags: ['hidrolisis-garam', 'tipe-hidrolisis', 'kation-anion-terhidrolisis', 'reaksi-air'],
        title: 'Konsep Inti 3: Sifat Asam-Basa Garam & Reaksi Hidrolisis Kation-Anion',
        summary: 'Kajian reaksi interaksi ion-ion garam dengan molekul air: pembagian 4 tipe garam berdasarkan kekuatan asam dan basa pembentuknya.',
        content: `Hidrolisis garam adalah reaksi peruraian atau interaksi antara kation dan/atau anion suatu garam dengan molekul air ($\\ce{H2O}$) menghasilkan ion $\\ce{H+}$ atau ion $\\ce{OH-}$.

Hanya kation dari basa lemah atau anion dari asam lemah yang dapat mengalami reaksi hidrolisis, karena kation/anion dari elektrolit kuat bersifat sangat stabil dan tidak mampu memecah molekul air.

---

### 1. Matriks 4 Kuadran Klasifikasi Hidrolisis Garam

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">MATRIKS 4 KLASIFIKASI GARAM BERDASARKAN SIFAT ASAM-BASA PEMBENTUKNYA</text>

  <!-- KUADRAN 1: KUAT + KUAT (Kiri Atas, x=30..365, y=55..170) -->
  <g transform="translate(30, 52)">
    <rect x="0" y="0" width="335" height="120" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="15" y="22" fill="#0f172a" font-size="11" font-weight="bold">1. Asam Kuat + Basa Kuat (Netral)</text>
    <rect x="235" y="8" width="85" height="20" rx="4" fill="#ecfdf5"/>
    <text x="277" y="22" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">pH = 7.00</text>
    <text x="15" y="44" fill="#475569" font-size="9.5">Contoh: NaCl, K2SO4, Ba(NO3)2, NaBr</text>
    <rect x="15" y="55" width="305" height="52" rx="4" fill="#f1f5f9"/>
    <text x="22" y="73" fill="#334155" font-size="9.5" font-weight="bold">TIDAK MENGALAMI HIDROLISIS</text>
    <text x="22" y="92" fill="#64748b" font-size="9">Kation Na+ dan anion Cl- tidak bereaksi dengan air.</text>
  </g>

  <!-- KUADRAN 2: LEMAH + KUAT (Kanan Atas, x=395..730, y=55..170) -->
  <g transform="translate(395, 52)">
    <rect x="0" y="0" width="335" height="120" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="15" y="22" fill="#1d4ed8" font-size="11" font-weight="bold">2. Asam Lemah + Basa Kuat (Basa)</text>
    <rect x="235" y="8" width="85" height="20" rx="4" fill="#dbeafe"/>
    <text x="277" y="22" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">pH &gt; 7.00</text>
    <text x="15" y="44" fill="#1e3a8a" font-size="9.5">Contoh: CH3COONa, KCN, NaF, Ba(CH3COO)2</text>
    <rect x="15" y="55" width="305" height="52" rx="4" fill="#ffffff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="22" y="73" fill="#1d4ed8" font-size="9.5" font-weight="bold">HIDROLISIS PARSIAL (HANYA ANION)</text>
    <text x="22" y="92" fill="#1e40af" font-size="9">CH3COO- + H2O ⇌ CH3COOH + OH- (Menghasilkan OH-)</text>
  </g>

  <!-- KUADRAN 3: KUAT + LEMAH (Kiri Bawah, x=30..365, y=185..300) -->
  <g transform="translate(30, 185)">
    <rect x="0" y="0" width="335" height="120" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="15" y="22" fill="#b91c1c" font-size="11" font-weight="bold">3. Asam Kuat + Basa Lemah (Asam)</text>
    <rect x="235" y="8" width="85" height="20" rx="4" fill="#fee2e2"/>
    <text x="277" y="22" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">pH &lt; 7.00</text>
    <text x="15" y="44" fill="#7f1d1d" font-size="9.5">Contoh: NH4Cl, (NH4)2SO4, Fe(NO3)3, AlCl3</text>
    <rect x="15" y="55" width="305" height="52" rx="4" fill="#ffffff" stroke="#fca5a5" stroke-width="1"/>
    <text x="22" y="73" fill="#b91c1c" font-size="9.5" font-weight="bold">HIDROLISIS PARSIAL (HANYA KATION)</text>
    <text x="22" y="92" fill="#991b1b" font-size="9">NH4+ + H2O ⇌ NH3 + H3O+ (Menghasilkan H+)</text>
  </g>

  <!-- KUADRAN 4: LEMAH + LEMAH (Kanan Bawah, x=395..730, y=185..300) -->
  <g transform="translate(395, 185)">
    <rect x="0" y="0" width="335" height="120" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
    <text x="15" y="22" fill="#854d0e" font-size="11" font-weight="bold">4. Asam Lemah + Basa Lemah (Total)</text>
    <rect x="235" y="8" width="85" height="20" rx="4" fill="#fef08a"/>
    <text x="277" y="22" fill="#713f12" font-size="9.5" font-weight="bold" text-anchor="middle">Ka vs Kb</text>
    <text x="15" y="44" fill="#713f12" font-size="9.5">Contoh: CH3COONH4, NH4CN, (NH4)2CO3</text>
    <rect x="15" y="55" width="305" height="52" rx="4" fill="#ffffff" stroke="#fde047" stroke-width="1"/>
    <text x="22" y="73" fill="#854d0e" font-size="9.5" font-weight="bold">HIDROLISIS TOTAL / SEMPURNA</text>
    <text x="22" y="92" fill="#713f12" font-size="9">Kation dan anion bereaksi. pH bebas dari konsentrasi garam!</text>
  </g>
</svg>

---

### 2. Kaidah Sifat Garam Terhidrolisis Total:
Pada garam yang berasal dari asam lemah dan basa lemah (keduanya terhidrolisis):
- **Jika $K_a > K_b$:** Larutan bersifat **Asam ($\\text{pH} < 7$)**.
- **Jika $K_a = K_b$:** Larutan bersifat **Netral ($\\text{pH} = 7$)** (contoh: $\\ce{CH3COONH4}$ di mana $K_a = 1.8 \\times 10^{-5}$ dan $K_b = 1.8 \\times 10^{-5}$).
- **Jika $K_a < K_b$:** Larutan bersifat **Basa ($\\text{pH} > 7$)** (contoh: $\\ce{NH4CN}$).`,
        keyFormulas: [
          { name: 'Kaidah Kuat-Kuat', formula: '\\text{Asam Kuat + Basa Kuat} \\implies \\text{Tidak Terhidrolisis (pH = 7.0)}' },
          { name: 'Kaidah Lemah-Kuat', formula: '\\text{Asam Lemah + Basa Kuat} \\implies \\text{Hidrolisis Parsial Anion (pH > 7.0)}' },
          { name: 'Kaidah Kuat-Lemah', formula: '\\text{Asam Kuat + Basa Lemah} \\implies \\text{Hidrolisis Parsial Kation (pH < 7.0)}' },
          { name: 'Kaidah Lemah-Lemah', formula: '\\text{Asam Lemah + Basa Lemah} \\implies \\text{Hidrolisis Total (Tergantung } K_a \\text{ vs } K_b)' },
        ],
      },
      {
        tag: 'perhitungan-ph-garam-terhidrolisis-lengkap',
        tags: ['rumus-ph-hidrolisis', 'tetapan-hidrolisis-kh', 'garam-asam-basa', 'hidrolisis-polivalen'],
        title: 'Konsep Inti 4: Algoritma Matematis Perhitungan Tetapan Kh & pH Garam Terhidrolisis',
        summary: 'Formulasi tetapan hidrolisis Kh = Kw/Ka atau Kw/Kb, pengaruh valensi kation/anion garam terlarut, serta rumus hidrolisis total.',
        content: `Untuk menghitung nilai pH dari larutan garam yang terhidrolisis di laboratorium, kita menggunakan **Tetapan Hidrolisis ($K_h$)**.

---

### 1. Formulasi Rumus Tiga Kategori Garam Terhidrolisis

#### A. Garam Terhidrolisis Basa (Dari Asam Lemah + Basa Kuat)
Anion garam ($\\ce{A-}$) bereaksi dengan air menghasilkan ion hidroksida:
$\\ce{A-(aq) + H2O(l) <=> HA(aq) + OH-(aq)}$
Tetapan hidrolisisnya:
$K_h = \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]} = \\mathbf{\\frac{K_w}{K_a}}$
Konsentrasi ion hidroksida dihitung:
$\\mathbf{[\\ce{OH-}] = \\sqrt{\\frac{K_w}{K_a} \\cdot [\\ce{G}] \\cdot v_{\\text{anion}}}} = \\sqrt{K_h \\cdot [\\ce{A-}]}$
$\\mathbf{\\text{pOH} = -\\log[\\ce{OH-}]} \\implies \\mathbf{\\text{pH} = 14 - \\text{pOH}}$

#### B. Garam Terhidrolisis Asam (Dari Asam Kuat + Basa Lemah)
Kation garam ($\\ce{BH+}$) bereaksi dengan air menghasilkan ion hidrogen:
$\\ce{BH+(aq) + H2O(l) <=> B(aq) + H3O+(aq)}$
Tetapan hidrolisisnya:
$K_h = \\frac{[\\ce{B}][\\ce{H+}]}{[\\ce{BH+}]} = \\mathbf{\\frac{K_w}{K_b}}$
Konsentrasi ion hidrogen dihitung:
$\\mathbf{[\\ce{H+}] = \\sqrt{\\frac{K_w}{K_b} \\cdot [\\ce{G}] \\cdot v_{\\text{kation}}}} = \\sqrt{K_h \\cdot [\\ce{BH+}]}$
$\\mathbf{\\text{pH} = -\\log[\\ce{H+}]}$

#### C. Garam Terhidrolisis Total (Dari Asam Lemah + Basa Lemah)
Tetapan hidrolisis total:
$K_h = \\mathbf{\\frac{K_w}{K_a \\cdot K_b}}$
Konsentrasi ion hidrogen:
$\\mathbf{[\\ce{H+}] = \\sqrt{\\frac{K_w \\cdot K_a}{K_b}}}$
$\\mathbf{\\text{pH} = \\frac{1}{2} \\left( \\text{p}K_w + \\text{p}K_a - \\text{p}K_b \\right) = 7 + \\frac{1}{2}\\text{p}K_a - \\frac{1}{2}\\text{p}K_b}$

---

### 2. Catatan Kritis Perhitungan Ujian (Faktor Valensi $v$):
Perhatikan rumus kimia garam! Simbol $[\\ce{G}]$ menyatakan molaritas garam terlarut, sedangkan $v$ adalah **indeks jumlah ion yang terhidrolisis**:
- Garam $\\ce{CH3COONa} \\implies v_{\\text{anion}} = 1 \\implies [\\ce{CH3COO-}] = 1 \\times [\\ce{G}]$.
- Garam $\\ce{Ca(CH3COO)2} \\implies v_{\\text{anion}} = 2 \\implies [\\ce{CH3COO-}] = 2 \\times [\\ce{G}]$ *(wajib dikali 2!)*.
- Garam $\\ce{NH4Cl} \\implies v_{\\text{kation}} = 1 \\implies [\\ce{NH4+}] = 1 \\times [\\ce{G}]$.
- Garam $\\ce{(NH4)2SO4} \\implies v_{\\text{kation}} = 2 \\implies [\\ce{NH4+}] = 2 \\times [\\ce{G}]$ *(wajib dikali 2!)*.`,
        keyFormulas: [
          { name: 'Kh Garam Basa', formula: 'K_h = \\frac{K_w}{K_a}' },
          { name: '[OH-] Garam Basa', formula: '[\\ce{OH-}] = \\sqrt{\\frac{K_w}{K_a} \\cdot [\\ce{G}] \\cdot v}' },
          { name: 'Kh Garam Asam', formula: 'K_h = \\frac{K_w}{K_b}' },
          { name: '[H+] Garam Asam', formula: '[\\ce{H+}] = \\sqrt{\\frac{K_w}{K_b} \\cdot [\\ce{G}] \\cdot v}' },
          { name: '[H+] Hidrolisis Total', formula: '[\\ce{H+}] = \\sqrt{\\frac{K_w \\cdot K_a}{K_b}}' },
          { name: 'pH Hidrolisis Total', formula: '\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a - \\frac{1}{2}\\text{p}K_b' },
        ],
      },
      {
        tag: 'efek-ion-senama-dan-kurva-ph-titrasi-buffer',
        tags: ['efek-ion-senama', 'common-ion-effect', 'wilayah-buffer', 'kurva-titrasi-lemah'],
        title: 'Konsep Inti 5: Efek Ion Senama (Common-Ion Effect) & Wilayah Buffer pada Kurva Titrasi',
        summary: 'Penekanan derajat ionisasi elektrolit lemah akibat kehadiran ion senama dari garam serta visualisasi matematis zona buffer di kurva titrasi.',
        content: `Pengaruh penambahan zat yang mengandung ion yang sudah ada di dalam larutan kesetimbangan disebut **Efek Ion Senama (*Common-Ion Effect*)**.

### 1. Prinsip Efek Ion Senama Berbasis Asas Le Chatelier
Tinjau larutan asam asetat murni yang mengalami ionisasi lemah:
$\\ce{CH3COOH(aq) <=> H+(aq) + CH3COO-(aq)}$
Jika ke dalam larutan tersebut ditambahkan garam natrium asetat ($\\ce{CH3COONa}$), garam akan terionisasi sempurna memasok sejumlah besar ion $\\ce{CH3COO-}$ (ion senama):
$\\ce{CH3COONa(aq) -> Na+(aq) + CH3COO-(aq)}$

Berdasarkan Asas Le Chatelier:
- Peningkatan drastis konsentrasi $[\\ce{CH3COO-}]$ memaksa sistem bergeser **ke arah Kiri (arah reaktan)**.
- Akibatnya:
  1. Derajat ionisasi asam asetat ($\\alpha$) **anjlok secara dramatis**.
  2. Konsentrasi ion $[\\ce{H+}]$ berkurang.
  3. Nilai pH larutan **meningkat** dibandingkan larutan asam asetat murni.
  4. Campuran tersebut kini bertransformasi menjadi **Larutan Penyangga**.

---

### 2. Wilayah Penyangga (*Buffer Region*) pada Kurva Titrasi

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">WILAYAH PENYANGGA (BUFFER REGION) PADA KURVA TITRASI ASAM LEMAH DENGAN BASA KUAT</text>

  <!-- Plot Area -->
  <g transform="translate(60, 52)">
    <!-- Sumbu -->
    <line x1="50" y1="225" x2="620" y2="225" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="225" x2="50" y2="30" stroke="#64748b" stroke-width="2"/>
    <text x="625" y="229" fill="#64748b" font-size="10" font-weight="bold">Volume NaOH Ditambahkan (mL)</text>
    <text x="45" y="25" fill="#64748b" font-size="10" font-weight="bold" text-anchor="end">pH</text>
    <text x="42" y="45" fill="#64748b" font-size="9">14</text>
    <text x="42" y="115" fill="#64748b" font-size="9">8.7</text>
    <text x="42" y="138" fill="#64748b" font-size="9">7</text>
    <text x="42" y="175" fill="#f59e0b" font-size="9" font-weight="bold">4.74</text>
    <text x="42" y="205" fill="#64748b" font-size="9">3</text>

    <!-- ZONA BUFFER ARSIRAN HIJAU (V=5 s.d. V=20) -->
    <rect x="100" y="30" width="220" height="195" fill="#ecfdf5" opacity="0.8"/>
    <line x1="100" y1="225" x2="100" y2="30" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="320" y1="225" x2="320" y2="30" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
    <rect x="140" y="38" width="140" height="24" rx="4" fill="#10b981"/>
    <text x="210" y="54" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ZONA PENYANGGA (BUFFER)</text>

    <!-- Titik Setengah Ekuivalen V = 0.5 V_ek (x=210) -->
    <line x1="210" y1="225" x2="210" y2="30" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="210" cy="172" r="6" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
    <rect x="220" y="160" width="135" height="24" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
    <text x="287" y="176" fill="#b45309" font-size="9.5" font-weight="bold" text-anchor="middle">V = 0.5 V_ek : pH = pKa</text>

    <!-- Kurva Titrasi Sigmoid -->
    <path d="M 50 205 Q 85 180, 100 178 C 150 174, 180 172, 210 172 C 260 170, 310 162, 335 115 C 345 70, 380 50, 580 44" fill="none" stroke="#2563eb" stroke-width="3"/>

    <!-- Titik Ekuivalen (x=335, y=115) -->
    <circle cx="335" cy="115" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
    <line x1="335" y1="225" x2="335" y2="115" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="335" y="238" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">V_ek</text>
    <rect x="345" y="105" width="130" height="24" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
    <text x="410" y="121" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">Titik Ekuivalen: Garam</text>
  </g>
</svg>

---

### 3. Keistimewaan Titik Setengah Ekuivalen (*Half-Equivalence Point*):
Pada saat titrasi telah menambahkan basa kuat tepat setengah volume titik ekuivalen ($V = \\frac{1}{2} V_{\\text{ek}}$):
- Tepat separuh asam lemah $\\ce{HA}$ telah bereaksi menjadi $\\ce{A-}$.
- Jumlah mol asam lemah yang tersisa tepat sama dengan jumlah mol basa konjugasi yang terbentuk:
  $n(\\ce{HA}) = n(\\ce{A-})$
- Sesuai Persamaan Henderson-Hasselbalch:
  $\\text{pH} = \\text{p}K_a + \\log(1) \\implies \\mathbf{\\text{pH} = \\text{p}K_a}$
- Titik ini digunakan secara luas oleh ilmuwan laboratorium untuk **menentukan nilai $K_a$ asam lemah yang belum diketahui** cukup dengan membaca pH larutan pada setengah volume ekuivalen!`,
        keyFormulas: [
          { name: 'Kaidah Ion Senama', formula: '[\\text{Ion Senama}] \\uparrow \\implies \\alpha_{\\text{asam/basa lemah}} \\downarrow' },
          { name: 'Titik Setengah Ekuivalen', formula: 'V = \\frac{1}{2} V_{\\text{ek}} \\implies [\\ce{A-}] = [\\ce{HA}] \\implies \\text{pH} = \\text{p}K_a' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'contoh-perhitungan-ph-buffer-asam-dan-penambahan-zat',
        tags: ['contoh-buffer-asam', 'daya-tahan-ph', 'penambahan-asam-basa', 'henderson-hasselbalch'],
        title: 'Contoh Soal 1: Perhitungan pH Larutan Penyangga Asam & Pengaruh Penambahan Sedikit Asam Kuat dan Basa Kuat',
        summary: 'Kalkulasi kuantitatif pH awal buffer CH3COOH + CH3COONa serta perubahan pH setelah ditetesi 1.0 mL HCl 0.1 M dan 1.0 mL NaOH 0.1 M.',
        content: `**Soal:**
Suatu larutan penyangga dibuat dengan mencampurkan $100.0\\text{ mL}$ larutan asam asetat ($\\ce{CH3COOH}$) $0.100\\text{ M}$ dengan $100.0\\text{ mL}$ larutan natrium asetat ($\\ce{CH3COONa}$) $0.100\\text{ M}$ pada suhu $25^\\circ\\text{C}$. Diketahui $K_a(\\ce{CH3COOH}) = 1.8 \\times 10^{-5}$ ($\\text{p}K_a = 4.74$).

Tentukan:
a) Nilai pH mula-mula larutan penyangga tersebut!
b) Nilai pH larutan jika ke dalam campuran tersebut ditambahkan $1.0\\text{ mL}$ larutan $\\ce{HCl } 1.0\\text{ M}$!
c) Nilai pH larutan jika ke dalam campuran mula-mula ditambahkan $1.0\\text{ mL}$ larutan $\\ce{NaOH } 1.0\\text{ M}$!

---

**Pembahasan:**

**Langkah Awal: Hitung Jumlah Mol Komponen Buffer Awal**
- $n(\\ce{CH3COOH}) = 100.0\\text{ mL} \\times 0.100\\text{ mmol/mL} = 10.0\\text{ mmol}$
- $n(\\ce{CH3COO-}) = 100.0\\text{ mL} \\times 0.100\\text{ mmol/mL} = 10.0\\text{ mmol}$

---

**Bagian a: Menghitung pH Mula-Mula Buffer**
Gunakan persamaan Henderson-Hasselbalch:
$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{n_{\\ce{CH3COO-}}}{n_{\\ce{CH3COOH}}}\\right) = 4.74 + \\log\\left(\\frac{10.0}{10.0}\\right) = 4.74 + \\log(1) = \\mathbf{4.74}$

---

**Bagian b: Pengaruh Penambahan $1.0\\text{ mL } \\ce{HCl } 1.0\\text{ M}$ ($1.0\\text{ mmol } \\ce{H+}$)**
Ion $\\ce{H+}$ yang masuk akan dinetralkan oleh komponen basa konjugasi ($\\ce{CH3COO-}$):
$\\ce{CH3COO- + H+ -> CH3COOH}$
- Mol $\\ce{CH3COO-}$ berkurang: $10.0\\text{ mmol} - 1.0\\text{ mmol} = 9.0\\text{ mmol}$
- Mol $\\ce{CH3COOH}$ bertambah: $10.0\\text{ mmol} + 1.0\\text{ mmol} = 11.0\\text{ mmol}$

Hitung pH baru:
$[\\ce{H+}] = K_a \\times \\frac{n_{\\ce{CH3COOH}}}{n_{\\ce{CH3COO-}}} = (1.8 \\times 10^{-5}) \\times \\frac{11.0}{9.0} = 2.20 \\times 10^{-5}\\text{ M}$
$\\text{pH} = -\\log(2.20 \\times 10^{-5}) = 5 - \\log(2.20) = 5 - 0.342 = \\mathbf{4.66}$
*(Nilai pH hanya turun sebesar $0.08$ unit!).*

---

**Bagian c: Pengaruh Penambahan $1.0\\text{ mL } \\ce{NaOH } 1.0\\text{ M}$ ($1.0\\text{ mmol } \\ce{OH-}$)**
Ion $\\ce{OH-}$ yang masuk akan dinetralkan oleh komponen asam lemah ($\\ce{CH3COOH}$):
$\\ce{CH3COOH + OH- -> CH3COO- + H2O}$
- Mol $\\ce{CH3COOH}$ berkurang: $10.0\\text{ mmol} - 1.0\\text{ mmol} = 9.0\\text{ mmol}$
- Mol $\\ce{CH3COO-}$ bertambah: $10.0\\text{ mmol} + 1.0\\text{ mmol} = 11.0\\text{ mmol}$

Hitung pH baru:
$[\\ce{H+}] = K_a \\times \\frac{n_{\\ce{CH3COOH}}}{n_{\\ce{CH3COO-}}} = (1.8 \\times 10^{-5}) \\times \\frac{9.0}{11.0} = 1.47 \\times 10^{-5}\\text{ M}$
$\\text{pH} = -\\log(1.47 \\times 10^{-5}) = 5 - \\log(1.47) = 5 - 0.167 = \\mathbf{4.83}$
*(Nilai pH hanya naik sebesar $0.09$ unit!).*

> **Kesimpulan Evaluator Juri:** Penambahan $1.0\\text{ mmol}$ asam kuat maupun basa kuat ke dalam air murni $200\\text{ mL}$ akan menggeser pH secara drastis dari 7 menjadi 2.3 atau 11.7. Namun pada larutan penyangga ini, pH bergeser sangat minim (dari 4.74 menjadi 4.66 atau 4.83), membuktikan efektivitas aksi pertahanan pH sistem buffer.`,
      },
      {
        tag: 'contoh-pembuatan-buffer-basa-stoikiometri-sisa',
        tags: ['contoh-buffer-basa', 'stoikiometri-sisa', 'pembuatan-buffer', 'nh3-hcl'],
        title: 'Contoh Soal 2: Pembuatan Larutan Penyangga Basa melalui Reaksi Asam Kuat dan Basa Lemah Berlebih',
        summary: 'Penerapan tabel M-B-S stoikiometri sisa untuk menentukan volume NH3 0.20 M yang dibutuhkan agar menghasilkan buffer pH 9.00 saat direaksikan dengan HCl.',
        content: `**Soal:**
Di laboratorium tersedia larutan amonia ($\\ce{NH3}$) $0.20\\text{ M}$ dengan nilai $K_b = 1.0 \\times 10^{-5}$ dan larutan asam klorida ($\\ce{HCl}$) $0.10\\text{ M}$.
Berapa mililiter ($V$) larutan $\\ce{NH3 } 0.20\\text{ M}$ yang harus dicampurkan dengan $100.0\\text{ mL}$ larutan $\\ce{HCl } 0.10\\text{ M}$ agar diperoleh larutan penyangga dengan nilai $\\text{pH} = 9.00$?

---

**Pembahasan:**

**Langkah 1: Menentukan Target Konsentrasi Ion Hidroksida ($[\\ce{OH-}]$)**
Target nilai keasaman:
$\\text{pH} = 9.00 \\implies \\text{pOH} = 14.00 - 9.00 = 5.00$
$[\\ce{OH-}] = 10^{-\\text{pOH}} = \\mathbf{1.0 \\times 10^{-5}\\text{ M}}$

---

**Langkah 2: Susun Stoikiometri Reaksi Campuran (Tabel M-B-S)**
- Jumlah mol $\\ce{HCl}$ mula-mula $= 100.0\\text{ mL} \\times 0.10\\text{ mmol/mL} = 10.0\\text{ mmol}$
- Misalkan volume larutan $\\ce{NH3} = V\\text{ mL}$
- Jumlah mol $\\ce{NH3}$ mula-mula $= V \\times 0.20 = 0.20 V\\text{ mmol}$

Persamaan reaksi netralisasi:
$\\ce{NH3(aq) + HCl(aq) -> NH4Cl(aq)}$

Agar terbentuk larutan penyangga basa, pereaksi pembatas haruslah $\\ce{HCl}$ (habis bereaksi), sedangkan $\\ce{NH3}$ harus bersisa:
| Spesi | $\\ce{NH3(aq)}$ | $\\ce{HCl(aq)}$ | $\\ce{NH4Cl(aq)}$ |
| :--- | :---: | :---: | :---: |
| **Mula-mula (M)** | $0.20 V\\text{ mmol}$ | $10.0\\text{ mmol}$ | $0$ |
| **Bereaksi (B)** | $-10.0\\text{ mmol}$ | $-10.0\\text{ mmol}$ | $+10.0\\text{ mmol}$ |
| **Sisa (S)** | $\\mathbf{(0.20 V - 10.0)\\text{ mmol}}$ | $\\mathbf{0}$ | $\\mathbf{10.0\\text{ mmol}}$ |

---

**Langkah 3: Masukkan Data ke Rumus Penyangga Basa**
$[\\ce{OH-}] = K_b \\times \\frac{n_{\\text{basa lemah sisa}}}{n_{\\text{asam konjugasi}}}$
$1.0 \\times 10^{-5} = (1.0 \\times 10^{-5}) \\times \\frac{0.20 V - 10.0}{10.0}$
Bagi kedua ruas dengan $1.0 \\times 10^{-5}$:
$1 = \\frac{0.20 V - 10.0}{10.0}$
$0.20 V - 10.0 = 10.0$
$0.20 V = 20.0 \\implies V = \\frac{20.0}{0.20} = \\mathbf{100.0\\text{ mL}}$

> **Kesimpulan Evaluator Juri:** Diperlukan tepat $100.0\\text{ mL}$ larutan $\\ce{NH3 } 0.20\\text{ M}$ untuk dicampurkan dengan $100.0\\text{ mL } \\ce{HCl } 0.10\\text{ M}$ agar menghasilkan perbandingan stoikiometri mol basa lemah terhadap asam konjugasinya sebesar $1 : 1$, sehingga $\\text{pOH} = \\text{p}K_b = 5.00$ dan nilai $\\text{pH} = 9.00$.`,
      },
      {
        tag: 'contoh-hidrolisis-garam-valensi-kation-anion',
        tags: ['contoh-hidrolisis-basa', 'garam-polivalen', 'kalsium-asetat', 'valensi-anion'],
        title: 'Contoh Soal 3: Perhitungan pH Garam Terhidrolisis Basa Polivalen Kalsium Asetat Ca(CH3COO)2',
        summary: 'Analisis stoikiometri ionisasi garam bervalensi 2 terhadap konsentrasi anion terhidrolisis serta penentuan pH larutan.',
        content: `**Soal:**
Sebanyak $7.90\\text{ gram}$ padatan kristal kalsium asetat, $\\ce{Ca(CH3COO)2}$ ($M_r = 158.0\\text{ g/mol}$), dilarutkan ke dalam akuades hingga volume larutan tepat mencapai $500.0\\text{ mL}$ pada temperatur $25^\\circ\\text{C}$.
Diketahui data tetapan kesetimbangan:
- $K_a(\\ce{CH3COOH}) = 2.0 \\times 10^{-5}$
- $K_w = 1.0 \\times 10^{-14}$

Tentukan:
a) Persamaan reaksi ionisasi garam dan reaksi kesetimbangan hidrolisis yang terjadi!
b) Nilai tetapan hidrolisis ($K_h$) dari anion garam tersebut!
c) Konsentrasi ion hidroksida $[\\ce{OH-}]$ dan nilai pH larutan garam tersebut!

---

**Pembahasan:**

**Langkah 1: Menghitung Molaritas Garam Terlarut ($[\\ce{G}]$)**
$n(\\ce{Ca(CH3COO)2}) = \\frac{\\text{massa}}{M_r} = \\frac{7.90\\text{ g}}{158.0\\text{ g/mol}} = 0.050\\text{ mol}$
$[\\ce{G}] = \\frac{n}{V} = \\frac{0.050\\text{ mol}}{0.500\\text{ L}} = \\mathbf{0.10\\text{ M}}$

---

**Bagian a: Reaksi Ionisasi dan Reaksi Hidrolisis**
1. **Reaksi Ionisasi Garam di Air:**
   $\\ce{Ca(CH3COO)2(aq) -> Ca^2+(aq) + 2 CH3COO-(aq)}$
   *Perhatikan faktor valensi anion:* $1\\text{ mol garam} \\implies 2\\text{ mol ion asetat } \\ce{CH3COO-}$.
   $[\\ce{CH3COO-}] = 2 \\times [\\ce{G}] = 2 \\times 0.10\\text{ M} = \\mathbf{0.20\\text{ M}}$
2. **Reaksi Hidrolisis:**
   - Kation $\\ce{Ca^2+}$ berasal dari basa kuat $\\ce{Ca(OH)2}$, sehingga **tidak bereaksi dengan air**.
   - Anion $\\ce{CH3COO-}$ berasal dari asam lemah $\\ce{CH3COOH}$, sehingga mengalami **hidrolisis parsial**:
     $\\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}$

---

**Bagian b: Menghitung Nilai Tetapan Hidrolisis ($K_h$)**
$K_h = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{2.0 \\times 10^{-5}} = \\mathbf{5.0 \\times 10^{-10}}$

---

**Bagian c: Menghitung $[\\ce{OH-}]$ dan pH Larutan**
Gunakan rumus hidrolisis garam basa dengan valensi anion $v = 2$:
$[\\ce{OH-}] = \\sqrt{K_h \\times [\\ce{CH3COO-}]} = \\sqrt{(5.0 \\times 10^{-10}) \\times (0.20\\text{ M})}$
$[\\ce{OH-}] = \\sqrt{1.0 \\times 10^{-10}} = \\mathbf{1.0 \\times 10^{-5}\\text{ M}}$

Hitung pOH dan pH:
$\\text{pOH} = -\\log[\\ce{OH-}] = -\\log(1.0 \\times 10^{-5}) = 5.00$
$\\mathbf{\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 5.00 = 9.00}$

> **Peringatan Penting Penentu Nilai Siswa:** Kesalahan umum yang paling sering terjadi adalah lupa memperhitungkan angka indeks $2$ pada garam $\\ce{Ca(CH3COO)2}$. Karena setiap mol garam melepaskan $2\\text{ mol } \\ce{CH3COO-}$, konsentrasi anion terhidrolisis menjadi $0.20\\text{ M}$, bukan $0.10\\text{ M}$!
>
> **Kesimpulan Evaluator Juri:** Larutan kalsium asetat mengalami hidrolisis parsial menghasilkan lingkungan basa dengan nilai $\\text{pH} = 9.00$.`,
      },
      {
        tag: 'contoh-hidrolisis-total-dan-pengaruh-ka-kb',
        tags: ['contoh-hidrolisis-total', 'nh4cn', 'asam-lemah-basa-lemah', 'independensi-konsentrasi'],
        title: 'Contoh Soal 4: Evaluasi Sifat Keasaman & Perhitungan pH Garam Terhidrolisis Total (Amonium Sianida NH4CN)',
        summary: 'Penentuan nilai pH garam asam lemah-basa lemah berbasis tetapan Ka dan Kb serta pembuktian independensi konsentrasi garam.',
        content: `**Soal:**
Garam amonium sianida ($\\ce{NH4CN}$) terbentuk dari reaksi netralisasi asam lemah asam sianida ($\\ce{HCN}$) dengan basa lemah amonia ($\\ce{NH3}$).
Diketahui data tetapan kesetimbangan pada $25^\\circ\\text{C}$:
- $K_a(\\ce{HCN}) = 4.9 \\times 10^{-10}$
- $K_b(\\ce{NH3}) = 1.8 \\times 10^{-5}$
- $K_w = 1.0 \\times 10^{-14}$

Tentukan:
a) Tipe hidrolisis yang dialami garam $\\ce{NH4CN}$ di dalam air beserta persamaan reaksi kesetimbangannya!
b) Prediksi kualitatif sifat larutan (asam, basa, atau netral) beserta alasan ilmiahnya!
c) Nilai konsentrasi ion hidrogen $[\\ce{H+}]$ dan nilai pH dari larutan $\\ce{NH4CN } 0.050\\text{ M}$!

---

**Pembahasan:**

**Bagian a: Reaksi Hidrolisis yang Terjadi**
Garam terionisasi di dalam air:
$\\ce{NH4CN(aq) -> NH4+(aq) + CN-(aq)}$
Karena kation $\\ce{NH4+}$ berasal dari basa lemah dan anion $\\ce{CN-}$ berasal dari asam lemah, **kedua ion sama-sama bereaksi dengan air (Hidrolisis Total / Sempurna)**:
$\\ce{NH4+(aq) + H2O(l) <=> NH3(aq) + H3O+(aq)}$
$\\ce{CN-(aq) + H2O(l) <=> HCN(aq) + OH-(aq)}$
Reaksi kesetimbangan hidrolisis keseluruhan:
$\\ce{NH4+(aq) + CN-(aq) + H2O(l) <=> NH3(aq) + HCN(aq)}$

---

**Bagian b: Prediksi Sifat Larutan Berdasarkan $K_a$ dan $K_b$**
Bandingkan nilai tetapan kesetimbangan kedua spesi pembentuk:
- $K_b(\\ce{NH3}) = 1.8 \\times 10^{-5}$
- $K_a(\\ce{HCN}) = 4.9 \\times 10^{-10}$
$K_b \\gg K_a \\implies \\mathbf{K_b > K_a}$
Karena nilai $K_b$ jauh lebih besar daripada $K_a$, anion $\\ce{CN-}$ lebih dominan terhidrolisis melepaskan ion $\\ce{OH-}$ dibandingkan kation $\\ce{NH4+}$ melepaskan ion $\\ce{H+}$.
Maka, **larutan garam $\\ce{NH4CN}$ bersifat BASA ($\\text{pH} > 7$)**.

---

**Bagian c: Menghitung Konsentrasi $[\\ce{H+}]$ dan Nilai pH**
Gunakan formula universal hidrolisis total:
$[\\ce{H+}] = \\sqrt{\\frac{K_w \\times K_a}{K_b}}$
Substitusikan data:
$[\\ce{H+}] = \\sqrt{\\frac{(1.0 \\times 10^{-14}) \\times (4.9 \\times 10^{-10})}{1.8 \\times 10^{-5}}} = \\sqrt{\\frac{4.9 \\times 10^{-24}}{1.8 \\times 10^{-5}}}$
$[\\ce{H+}] = \\sqrt{2.722 \\times 10^{-19}} = \\sqrt{27.22 \\times 10^{-20}} \\approx \\mathbf{5.22 \\times 10^{-10}\\text{ M}}$

Hitung nilai pH:
$\\text{pH} = -\\log[\\ce{H+}] = -\\log(5.22 \\times 10^{-10}) = 10 - \\log(5.22) = 10 - 0.718 = \\mathbf{9.28}$

*(Verifikasi menggunakan rumus logaritmik langsung):*
$\\text{p}K_a = -\\log(4.9 \\times 10^{-10}) = 9.31$
$\\text{p}K_b = -\\log(1.8 \\times 10^{-5}) = 4.74$
$\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a - \\frac{1}{2}\\text{p}K_b = 7 + \\frac{1}{2}(9.31) - \\frac{1}{2}(4.74) = 7 + 4.655 - 2.37 = \\mathbf{9.28}$

> **Catatan Emas Teoretis:** Perhatikan bahwa konsentrasi garam ($0.050\\text{ M}$) sama sekali tidak diperhitungkan dalam rumus. Hal ini membuktikan bahwa **nilai pH larutan garam yang terhidrolisis total bersifat independen terhadap konsentrasi maupun pengenceran larutan**! Nilai pH murni hanya ditentukan oleh rasio $K_a$ dan $K_b$.
>
> **Kesimpulan Evaluator Juri:** Garam amonium sianida terhidrolisis total menghasilkan larutan basa kuat-moderat dengan $\\text{pH} = 9.28$ yang tidak terpengaruh oleh penambahan volume pelarut air.`,
      },
    ],
  },
    {
    id: 111,
    topic_number: 11,
    grade: 'Kelas 11',
    semester: 2,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 5,
    title: 'Kelarutan & Hasil Kali Kelarutan SMA (Ksp, Kesetimbangan Heterogen, Efek Ion Senama, pH & Pengendapan Selektif)',
    slug: 'kelarutan-dan-hasil-kali-kelarutan-ksp-sma',
    category: 'Kimia Larutan',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Kajian komprehensif kesetimbangan fasa heterogen larutan jenuh elektrolit sukar larut: definisi molar kelarutan (s), derivasi matematis tetapan hasil kali kelarutan (Ksp) untuk garam biner hingga polivalen, efek dramatis penambahan ion senama, pengaruh regulasi pH terhadap kelarutan hidroksida dan garam asam lemah, prediksi pembentukan endapan via kuosien ion (Qsp vs Ksp), serta teknik pemisahan ion logam kualitatif melalui pengendapan selektif.',
    allTags: [
      'kelarutan-s',
      'hasil-kali-kelarutan-ksp',
      'kesetimbangan-heterogen',
      'efek-ion-senama',
      'pengaruh-ph-kelarutan',
      'kuosien-reaksi-qsp',
      'pengendapan-selektif',
      'analisis-kualitatif',
      'ksp-biner',
      'perak-klorida',
      'fase-f',
      'ksp-terner',
      'timbal-iodida',
      'stoikiometri-ion',
      'kuosien-ion-qsp',
      'kriteria-pengendapan',
      'lewat-jenuh',
      'kelarutan-massa',
      'barium-sulfat',
      'konversi-mol-ke-gram',
      'ksp',
      'le-chatelier',
      'penurunan-kelarutan',
      'komparasi-kelarutan',
      'garam-perak',
      'ksp-vs-s',
      'jumlah-ion',
      'ion-senama-terner',
      'kalium-iodida',
      'kuadratik-senama',
      'ph-pengendapan',
      'hidroksida-logam',
      'besi-hidroksida',
      'ksp-ph',
      'pengenceran-larutan',
      'uji-pengendapan',
      'garam-pentamer',
      'kalsium-fosfat',
      'ksp-108s5',
      'stoikiometri-ksp',
      'kelarutan-ph',
      'magnesium-hidroksida',
      'larutan-penyangga',
      'massa-endapan',
      'stoikiometri-pengendapan',
      'filtrat-sisa',
      'garam-asam-lemah',
      'kalsium-karbonat',
      'pelarutan-asam',
      'pengendapan-bertingkat',
      'barium-stronsium',
      'pemisahan-kation',
      'kromat',
      'kalsium-fluorida',
      'ion-senama-kation',
      'titrasi-mohr',
      'argentometri',
      'indikator-kromat',
      'titik-ekuivalen',
      'perak-asetat',
      'protonasi-anion',
      'kompleksasi',
      'pelarutan-endapan',
      'diamina-perak',
      'kf-dan-ksp',
      'efek-garam-lain',
      'kekuatan-ionik',
      'debye-huckel',
      'aktivitas-ksp',
      'pengendapan-sulfida',
      'ph-terkontrol',
      'galat-titrasi',
      'pengendapan-fraksional',
      'pemisahan-halida',
      'perak-iodida',
      'kalsium-oksalat',
      'fraksi-alfa',
      'kelarutan-urin',
      'asam-diprotik',
      'pelarutan-kompleks',
      'neraca-massa',
      'sulfida-ksp',
      'timbal-seng',
      'pengaturan-ph',
    ],
    prerequisites: [
      {
        tag: 'prasyarat-aturan-kelarutan-dan-larutan-jenuh',
        title: 'Prasyarat 1: Aturan Kelarutan Senyawa Ionik di Air & Klasifikasi Keadaan Larutan',
        summary: 'Kaidah solubilitas kation-anion, pembedaan larutan belum jenuh, tepat jenuh, dan lewat jenuh (supersaturated).',
        content: `Dalam kimia larutan, kemampuan zat padat ionik untuk melarut di dalam air sangat bervariasi: mulai dari senyawa yang sangat mudah larut (seperti $\\ce{NaCl}$ dan $\\ce{KNO3}$) hingga senyawa yang sangat sukar larut (seperti $\\ce{AgCl}$ dan $\\ce{BaSO4}$).

### 1. Kaidah Empiris Kelarutan Senyawa Ionik dalam Air (25°C)
- **Senyawa yang Selalu Larut (Tanpa Pengecualian):**
  - Seluruh garam dari kation logam alkali golongan IA ($\\ce{Li+, Na+, K+, Rb+, Cs+}$) dan ion amonium ($\\ce{NH4+}$).
  - Seluruh garam yang mengandung anion nitrat ($\\ce{NO3-}$), asetat ($\\ce{CH3COO-}$), klorat ($\\ce{ClO3-}$), dan perklorat ($\\ce{ClO4-}$).
- **Senyawa yang Umumnya Larut dengan Pengecualian Khusus:**
  - Garam klorida ($\\ce{Cl-}$), bromida ($\\ce{Br-}$), dan iodida ($\\ce{I-}$): umumnya larut, **kecuali** berikatan dengan kation $\\ce{Ag+}$, $\\ce{Pb^2+}$, dan $\\ce{Hg2^2+}$.
  - Garam sulfat ($\\ce{SO4^2-}$): umumnya larut, **kecuali** dengan $\\ce{Ba^2+}$, $\\ce{Pb^2+}$, $\\ce{Sr^2+}$, dan $\\ce{Ca^2+}$ (sukar larut).
- **Senyawa yang Umumnya Sukar Larut (Mengendap):**
  - Garam karbonat ($\\ce{CO3^2-}$), fosfat ($\\ce{PO4^3-}$), dan sulfit ($\\ce{SO3^2-}$): sukar larut, kecuali dengan kation golongan IA dan $\\ce{NH4+}$.
  - Garam hidroksida ($\\ce{OH-}$): sukar larut, kecuali hidroksida logam alkali ($\\ce{NaOH, KOH}$) dan basa alkali tanah berat ($\\ce{Ba(OH)2, Sr(OH)2, Ca(OH)2}$ sedikit larut).
  - Garam sulfida ($\\ce{S^2-}$): sukar larut, kecuali dengan logam alkali, alkali tanah, dan $\\ce{NH4+}$.

---

### 2. Tiga Tingkatan Kejenuhan Larutan
Berdasarkan perbandingan kuantitas zat terlarut terhadap kapasitas kelarutan maksimumnya pada temperatur tertentu:
1. **Larutan Belum Jenuh (*Unsaturated Solution*):**
   - Konsentrasi zat terlarut masih di bawah batas kelarutan maksimum.
   - Jika ditambahkan kristal zat terlarut tambahan, zat tersebut **masih dapat melarut sempurna**.
2. **Larutan Tepat Jenuh (*Saturated Solution*):**
   - Larutan mengandung zat terlarut dalam konsentrasi maksimum yang dapat ditampung oleh pelarut pada suhu tersebut.
   - Terjadi **kesetimbangan fasa heterogen dinamis** antara kristal padat dan ion terlarut.
3. **Larutan Lewat Jenuh (*Supersaturated Solution*):**
   - Mengandung zat terlarut melampaui kapasitas kelarutan normal (biasanya dibuat dengan melarutkan pada suhu tinggi lalu didinginkan perlahan secara hati-hati).
   - Sistem bersifat **metastabil**: sedikit guncangan mekanik atau penambahan sebutir kristal bibit (*seed crystal*) akan memicu presipitasi (pengkristalan kilat) seketika hingga tercapai larutan jenuh normal.`,
      },
      {
        tag: 'prasyarat-kesetimbangan-heterogen-fasa-padat-ionik',
        title: 'Prasyarat 2: Kesetimbangan Heterogen Fasa Padat-Cair & Peniadaan Padatan dari Ksp',
        summary: 'Dinamika mikroskopis pelarutan vs kristalisasi pada permukaan kristal serta justifikasi termodinamika mengapa padatan murni beraktivitas 1.',
        content: `Meskipun zat seperti $\\ce{AgCl}$ disebut sebagai garam "sukar larut", bukan berarti tidak ada partikel yang melarut sama sekali. Sejumlah kecil ion perak ($\\ce{Ag+}$) dan ion klorida ($\\ce{Cl-}$) tetap terlepas ke dalam air hingga larutan mencapai keadaan jenuh.

### 1. Dinamika Mikroskopis pada Permukaan Kristal
Di dalam larutan jenuh suatu elektrolit sukar larut yang berada bersama padatannya, berlangsung dua proses mikroskopis yang berlawanan arah secara terus menerus:
1. **Laju Pelarutan (*Dissolution Rate*, $v_{\\text{larut}}$):** Ion-ion pada kisi kristal ditarik oleh molekul-molekul dipol air (proses hidrasi) dan lepas ke fasa larutan.
2. **Laju Pengendapan (*Precipitation Rate*, $v_{\\text{endap}}$):** Ion-ion terlarut yang bertumbukan kembali dengan kisi kristal padatan tertangkap dan mengkristal kembali.

Pada saat larutan mencapai keadaan tepat jenuh:
$\\mathbf{v_{\\text{larut}} = v_{\\text{endap}}}$
Persamaan kesetimbangan fasa heterogennya dinyatakan:
$\\ce{A_x B_y(s) <=> x A^{y+}(aq) + y B^{x-}(aq)}$

---

### 2. Justifikasi Termodinamika Peniadaan Fasa Padat ($s$)
Berdasarkan Hukum Aksi Massa Guldberg & Waage:
$K = \\frac{[\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y}{[\\ce{A_x B_y(s)}]}$

Dalam termodinamika kimia:
- Konsentrasi atau kerapatan padatan kristal murni ($\\ce{A_x B_y(s)}$) adalah konstan dan aktivitas kimianya didefinisikan tepat bernilai $1$ ($a_{\\text{padatan}} = 1$).
- Oleh karena itu, konsentrasi padatan digabungkan bersama tetapan kesetimbangan $K$ menghasilkan tetapan baru yang disebut **Tetapan Hasil Kali Kelarutan ($K_{sp}$ / *Solubility Product Constant*)**:
$\\mathbf{K_{sp} = [\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y}$

> **Makna Fisis Nilai $K_{sp}$:** Nilai $K_{sp}$ merupakan batas perkalian konsentrasi ion-ion dalam larutan jenuh pada suhu tertentu. Seperti tetapan kesetimbangan lainnya, nilai $K_{sp}$ **hanya dipengaruhi oleh temperatur**, dan tidak dipengaruhi oleh banyaknya padatan yang ada di dasar wadah.`,
      },
    ],
    core_concepts: [
      {
        tag: 'hubungan-matematis-kelarutan-s-dan-ksp',
        tags: ['kelarutan-molar-s', 'hasil-kali-kelarutan-ksp', 'relasi-ksp-s', 'tipe-garam-biner-terner'],
        title: 'Konsep Inti 1: Formulasi Matematis Hubungan Kelarutan (s) dan Tetapan Ksp',
        summary: 'Derivasi rumus Ksp untuk berbagai stoikiometri garam (tipe 1:1, 1:2, 1:3, 2:3) serta konversi kelarutan molaritas (mol/L) ke kelarutan massa (g/L).',
        content: `**Kelarutan (diberi simbol $s$, singkatan dari *solubility*)** menyatakan jumlah mol maksimum zat terlarut yang dapat larut dalam $1\\text{ Liter}$ pelarut air hingga membentuk larutan jenuh pada suhu tertentu (satuan standar: $\\text{M}$ atau $\\text{mol/L}$).

---

### 1. Peta Formulasi Universal Hubungan $s$ dan $K_{sp}$

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">RELASI MATEMATIS KELARUTAN (s) DAN TETAPAN HASIL KALI KELARUTAN (Ksp)</text>

  <!-- PANEL 1: TIPE 1:1 (BINER, n=2) -->
  <g transform="translate(20, 52)">
    <rect x="0" y="0" width="168" height="255" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="148" height="26" rx="4" fill="#2563eb"/>
    <text x="84" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. TIPE 1:1 (n = 2)</text>
    
    <text x="84" y="58" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">AgCl, BaSO4, CaCO3</text>
    <rect x="10" y="68" width="148" height="50" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="84" y="86" fill="#1e40af" font-size="9" text-anchor="middle">AB(s) ⇌ A⁺ + B⁻</text>
    <text x="84" y="104" fill="#1d4ed8" font-size="9.5" font-weight="bold" text-anchor="middle">Ksp = [s] [s] = s²</text>

    <rect x="10" y="128" width="148" height="55" rx="4" fill="#dbeafe"/>
    <text x="84" y="148" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">Mencari Kelarutan s:</text>
    <text x="84" y="168" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">s = √(Ksp)</text>

    <text x="84" y="210" fill="#64748b" font-size="9" text-anchor="middle">Jumlah ion = 2</text>
    <text x="84" y="225" fill="#64748b" font-size="8.5" text-anchor="middle">Contoh: AgCl (Ksp 1.8e-10)</text>
    <text x="84" y="238" fill="#2563eb" font-size="9" font-weight="bold" text-anchor="middle">s = 1.34 × 10⁻⁵ M</text>
  </g>

  <!-- PANEL 2: TIPE 1:2 / 2:1 (TERNER, n=3) -->
  <g transform="translate(205, 52)">
    <rect x="0" y="0" width="168" height="255" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="148" height="26" rx="4" fill="#0284c7"/>
    <text x="84" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. TIPE 1:2 (n = 3)</text>

    <text x="84" y="58" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Ag2CrO4, PbI2, Mg(OH)2</text>
    <rect x="10" y="68" width="148" height="50" rx="4" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
    <text x="84" y="86" fill="#0369a1" font-size="9" text-anchor="middle">AB2(s) ⇌ A²⁺ + 2 B⁻</text>
    <text x="84" y="104" fill="#0284c7" font-size="9.5" font-weight="bold" text-anchor="middle">Ksp = [s] [2s]² = 4s³</text>

    <rect x="10" y="128" width="148" height="55" rx="4" fill="#e0f2fe"/>
    <text x="84" y="148" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">Mencari Kelarutan s:</text>
    <text x="84" y="168" fill="#0284c7" font-size="13" font-weight="bold" text-anchor="middle">s = ∛(Ksp / 4)</text>

    <text x="84" y="210" fill="#64748b" font-size="9" text-anchor="middle">Jumlah ion = 3</text>
    <text x="84" y="225" fill="#64748b" font-size="8.5" text-anchor="middle">Contoh: PbI2 (Ksp 7.1e-9)</text>
    <text x="84" y="238" fill="#0284c7" font-size="9" font-weight="bold" text-anchor="middle">s = 1.21 × 10⁻³ M</text>
  </g>

  <!-- PANEL 3: TIPE 1:3 / 3:1 (KUARTERNER, n=4) -->
  <g transform="translate(390, 52)">
    <rect x="0" y="0" width="168" height="255" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="148" height="26" rx="4" fill="#7c3aed"/>
    <text x="84" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. TIPE 1:3 (n = 4)</text>

    <text x="84" y="58" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Al(OH)3, Ag3PO4, Fe(OH)3</text>
    <rect x="10" y="68" width="148" height="50" rx="4" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="84" y="86" fill="#6d28d9" font-size="9" text-anchor="middle">AB3(s) ⇌ A³⁺ + 3 B⁻</text>
    <text x="84" y="104" fill="#7c3aed" font-size="9.5" font-weight="bold" text-anchor="middle">Ksp = [s] [3s]³ = 27s⁴</text>

    <rect x="10" y="128" width="148" height="55" rx="4" fill="#ede9fe"/>
    <text x="84" y="148" fill="#6d28d9" font-size="9.5" font-weight="bold" text-anchor="middle">Mencari Kelarutan s:</text>
    <text x="84" y="168" fill="#7c3aed" font-size="13" font-weight="bold" text-anchor="middle">s = ∜(Ksp / 27)</text>

    <text x="84" y="210" fill="#64748b" font-size="9" text-anchor="middle">Jumlah ion = 4</text>
    <text x="84" y="225" fill="#64748b" font-size="8.5" text-anchor="middle">Contoh: Ag3PO4 (Ksp 1.8e-18)</text>
    <text x="84" y="238" fill="#7c3aed" font-size="9" font-weight="bold" text-anchor="middle">s = 1.61 × 10⁻⁵ M</text>
  </g>

  <!-- PANEL 4: TIPE 2:3 / 3:2 (PENTAMER, n=5) -->
  <g transform="translate(575, 52)">
    <rect x="0" y="0" width="165" height="255" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="145" height="26" rx="4" fill="#059669"/>
    <text x="82" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. TIPE 2:3 (n = 5)</text>

    <text x="82" y="58" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Ca3(PO4)2, As2S3</text>
    <rect x="10" y="68" width="145" height="50" rx="4" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="82" y="86" fill="#047857" font-size="9" text-anchor="middle">A2B3(s) ⇌ 2 A³⁺ + 3 B²⁻</text>
    <text x="82" y="104" fill="#059669" font-size="9.5" font-weight="bold" text-anchor="middle">Ksp = [2s]² [3s]³ = 108s⁵</text>

    <rect x="10" y="128" width="145" height="55" rx="4" fill="#d1fae5"/>
    <text x="82" y="148" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">Mencari Kelarutan s:</text>
    <text x="82" y="168" fill="#059669" font-size="13" font-weight="bold" text-anchor="middle">s = ⁵√(Ksp / 108)</text>

    <text x="82" y="210" fill="#64748b" font-size="9" text-anchor="middle">Jumlah ion = 5</text>
    <text x="82" y="225" fill="#64748b" font-size="8.5" text-anchor="middle">Formula Umum Universal:</text>
    <text x="82" y="238" fill="#059669" font-size="9" font-weight="bold" text-anchor="middle">Ksp = xˣ · yʸ · s⁽ˣ⁺ʸ⁾</text>
  </g>
</svg>

---

### 2. Rumus Formula Umum Universal
Untuk senyawa ionik apa pun dengan rumus empiris $\\ce{A_x B_y}$:
$\\ce{A_x B_y(s) <=> x A^{y+}(aq) + y B^{x-}(aq)}$
Jika kelarutan garam adalah $s\\text{ mol/L}$, maka pada kesetimbangan:
- $[\\ce{A^{y+}}] = x \\cdot s$
- $[\\ce{B^{x-}}] = y \\cdot s$
$\\mathbf{K_{sp} = [\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y = (x \\cdot s)^x (y \\cdot s)^y = x^x \\cdot y^y \\cdot s^{(x + y)}}$

---

### 3. Konversi Kelarutan Molar ($s$) ke Kelarutan Massa ($S$)
Di laboratorium praktikum analitik, kelarutan sering diukur dalam satuan gram per liter ($\\text{g/L}$) atau miligram per $100\\text{ mL}$:
$\\mathbf{S (\\text{g/L}) = s (\\text{mol/L}) \\times M_r (\\text{g/mol})}$
$\\mathbf{s (\\text{mol/L}) = \\frac{S (\\text{g/L})}{M_r (\\text{g/mol})}}$`,
        keyFormulas: [
          { name: 'Rumus Ksp Garam Biner 1:1', formula: 'K_{sp} = s^2 \\iff s = \\sqrt{K_{sp}}' },
          { name: 'Rumus Ksp Garam Terner 1:2', formula: 'K_{sp} = 4s^3 \\iff s = \\sqrt[3]{\\frac{K_{sp}}{4}}' },
          { name: 'Rumus Ksp Garam Kuarterner 1:3', formula: 'K_{sp} = 27s^4 \\iff s = \\sqrt[4]{\\frac{K_{sp}}{27}}' },
          { name: 'Rumus Ksp Garam Pentamer 2:3', formula: 'K_{sp} = 108s^5 \\iff s = \\sqrt[5]{\\frac{K_{sp}}{108}}' },
          { name: 'Formula Universal Ksp', formula: 'K_{sp} = x^x \\cdot y^y \\cdot s^{(x+y)}' },
          { name: 'Konversi Kelarutan Massa', formula: 'S (\\text{g/L}) = s (\\text{mol/L}) \\times M_r' },
        ],
      },
      {
        tag: 'pengaruh-efek-ion-senama-terhadap-kelarutan',
        tags: ['efek-ion-senama', 'common-ion-effect', 'penurunan-kelarutan', 'asas-le-chatelier-ksp'],
        title: 'Konsep Inti 2: Penurunan Kelarutan Akibat Efek Ion Senama (Common-Ion Effect)',
        summary: 'Aplikasi Asas Le Chatelier pada kesetimbangan kelarutan: penurunan drastis kelarutan zat sukar larut dalam larutan elektrolit yang mengandung ion sejenis.',
        content: `Kelarutan suatu garam sukar larut di dalam air murni bernilai konstan pada suhu tertentu. Namun, jika garam tersebut dilarutkan ke dalam larutan yang telah mengandung salah satu ion penyusunnya (**ion senama / *common ion***), kelarutan garam tersebut akan **turun secara dramatis**.

### 1. Mekanisme Pergeseran Asas Le Chatelier
Tinjau kesetimbangan larutan jenuh perak klorida ($\\ce{AgCl}$):
$\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\quad K_{sp} = 1.8 \\times 10^{-10}$

Jika $\\ce{AgCl}$ dilarutkan ke dalam larutan $\\ce{NaCl } 0.10\\text{ M}$:
- Larutan $\\ce{NaCl}$ terionisasi sempurna memasok ion $\\ce{Cl-}$ dalam konsentrasi yang sangat pekat ($0.10\\text{ M}$).
- Lonjakan konsentrasi ion $[\\ce{Cl-}]$ di ruas kanan memaksa sistem kesetimbangan bergeser **ke arah Kiri (arah pembentukan endapan padat $\\ce{AgCl}$)**.
- Akibatnya, jumlah ion $\\ce{Ag+}$ yang dapat larut menjadi jauh lebih sedikit dibandingkan dalam air murni.

---

### 2. Komparasi Visual: Kelarutan dalam Air Murni vs Ion Senama

<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">KOMPARASI EFEK ION SENAMA TERHADAP KELARUTAN AgCl (Ksp = 1.8 × 10⁻¹⁰)</text>

  <!-- SISI KIRI: AIR MURNI (x=30..365) -->
  <g transform="translate(30, 52)">
    <rect x="0" y="0" width="335" height="230" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <rect x="12" y="10" width="311" height="26" rx="4" fill="#2563eb"/>
    <text x="167" y="27" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">1. DALAM AIR MURNI</text>

    <text x="167" y="60" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</text>
    <text x="167" y="78" fill="#3b82f6" font-size="10" text-anchor="middle">[Ag⁺] = s   dan   [Cl⁻] = s</text>

    <rect x="20" y="90" width="295" height="60" rx="6" fill="#ffffff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="167" y="112" fill="#1e3a8a" font-size="11" text-anchor="middle">Ksp = s² = 1.8 × 10⁻¹⁰</text>
    <text x="167" y="136" fill="#2563eb" font-size="14" font-weight="bold" text-anchor="middle">s = 1.34 × 10⁻⁵ M</text>

    <rect x="20" y="160" width="295" height="55" rx="4" fill="#dbeafe"/>
    <text x="167" y="180" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">Kelarutan Normal:</text>
    <text x="167" y="198" fill="#1e3a8a" font-size="9" text-anchor="middle">Sebanyak 1.34 × 10⁻⁵ mol AgCl larut per liter air.</text>
  </g>

  <!-- SISI KANAN: DALAM NaCl 0.10 M (x=395..730) -->
  <g transform="translate(395, 52)">
    <rect x="0" y="0" width="335" height="230" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="12" y="10" width="311" height="26" rx="4" fill="#dc2626"/>
    <text x="167" y="27" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">2. DALAM LARUTAN NaCl 0.10 M</text>

    <text x="167" y="60" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Ion Senama Cl⁻ Membanjiri Sistem!</text>
    <text x="167" y="78" fill="#dc2626" font-size="10" text-anchor="middle">[Ag⁺] = s'   dan   [Cl⁻] ≈ 0.10 M</text>

    <rect x="20" y="90" width="295" height="60" rx="6" fill="#ffffff" stroke="#fecaca" stroke-width="1"/>
    <text x="167" y="112" fill="#7f1d1d" font-size="11" text-anchor="middle">Ksp = s' × (0.10) = 1.8 × 10⁻¹⁰</text>
    <text x="167" y="136" fill="#dc2626" font-size="14" font-weight="bold" text-anchor="middle">s' = 1.8 × 10⁻⁹ M</text>

    <rect x="20" y="160" width="295" height="55" rx="4" fill="#fee2e2"/>
    <text x="167" y="180" fill="#b91c1c" font-size="9.5" font-weight="bold" text-anchor="middle">Kelarutan Anjlok ~7500 Kali Lipat!</text>
    <text x="167" y="198" fill="#991b1b" font-size="9" text-anchor="middle">Hampir seluruh AgCl terdorong mengendap.</text>
  </g>
</svg>

---

### 3. Algoritma Aproksimasi Perhitungan Efek Ion Senama
Karena nilai kelarutan baru ($s'$) elektrolit sukar larut bernilai sangat kecil dibandingkan konsentrasi elektrolit kuat yang ditambahkan ($M_{\\text{senama}}$):
$[\\text{Ion Senama Total}] = M_{\\text{senama}} + v \\cdot s' \\approx \\mathbf{M_{\\text{senama}}}$
Dengan mengabaikan nilai $v \\cdot s'$, kita terhindar dari persamaan polinomial berderajat tinggi dan dapat langsung menghitung nilai $s'$ secara cepat dan sangat akurat!`,
        keyFormulas: [
          { name: 'Kelarutan Biner dengan Ion Senama', formula: 's_{\\text{baru}} = \\frac{K_{sp}}{[\\text{Ion Senama}]}' },
          { name: 'Kelarutan Terner dengan Ion Senama Kation', formula: 's_{\\text{baru}} = \\sqrt{\\frac{K_{sp}}{[\\text{Kation Senama}]}}' },
          { name: 'Kelarutan Terner dengan Ion Senama Anion', formula: 's_{\\text{baru}} = \\frac{K_{sp}}{[\\text{Anion Senama}]^2}' },
        ],
      },
      {
        tag: 'pengaruh-ph-terhadap-kelarutan-senyawa-basa-dan-garam',
        tags: ['pengaruh-ph-ksp', 'kelarutan-hidroksida', 'kelarutan-garam-asam-lemah', 'ph-pengendapan'],
        title: 'Konsep Inti 3: Pengaruh Perubahan pH terhadap Kelarutan Basa Sukar Larut & Garam Asam Lemah',
        summary: 'Interaksi ion H+ dan OH- dengan kesetimbangan Ksp: kelarutan hidroksida meningkat drastis pada pH asam dan mengendap pada pH basa.',
        content: `Kelarutan senyawa yang mengandung anion basa (seperti ion hidroksida $\\ce{OH-}$, karbonat $\\ce{CO3^2-}$, oksalat $\\ce{C2O4^2-}$, atau sulfida $\\ce{S^2-}$) sangat dipengaruhi oleh derajat keasaman ($\\text{pH}$) lingkungan larutan.

### 1. Mekanisme Regulasi pH pada Hidroksida Sukar Larut
Tinjau kesetimbangan larutan magnesium hidroksida:
$\\ce{Mg(OH)2(s) <=> Mg^2+(aq) + 2 OH-(aq)} \\quad K_{sp} = 1.8 \\times 10^{-11}$

- **Jika Lingkungan Asam ($\\text{pH}$ Diturunkan / Ditambah $\\ce{H+}$):**
  Ion $\\ce{H+}$ dari asam akan bereaksi mengikat ion $\\ce{OH-}$ membentuk air ($\\ce{H+ + OH- -> H2O}$).
  Pengurangan drastis konsentrasi ion $[\\ce{OH-}]$ memaksa kesetimbangan bergeser **ke arah Kanan (arah pelarutan)**.
  **Dampak:** Padatan $\\ce{Mg(OH)2}$ **melarut sempurna** dalam larutan asam.
- **Jika Lingkungan Basa ($\\text{pH}$ Dinaikkan / Ditambah $\\ce{OH-}$):**
  Penambahan ion hidroksida bertindak sebagai ion senama yang mendesak kesetimbangan bergeser **ke arah Kiri (arah pengendapan)**.
  **Dampak:** Kelarutan $\\ce{Mg(OH)2}$ **anjlok** dan membentuk endapan putih pekat.

---

### 2. Kurva Profil Pengaruh pH terhadap Kelarutan

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">KURVA HUBUNGAN KELARUTAN HIDROKSIDA LOGAM M(OH)₂ TERHADAP NILAI pH</text>

  <!-- Plot Area -->
  <g transform="translate(60, 52)">
    <!-- Sumbu -->
    <line x1="50" y1="225" x2="620" y2="225" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="225" x2="50" y2="30" stroke="#64748b" stroke-width="2"/>
    <text x="625" y="229" fill="#64748b" font-size="10" font-weight="bold">Nilai pH Larutan</text>
    <text x="45" y="25" fill="#64748b" font-size="10" font-weight="bold" text-anchor="end">log(s)</text>
    <text x="42" y="45" fill="#64748b" font-size="9">Kelarutan Tinggi</text>
    <text x="42" y="215" fill="#64748b" font-size="9">Kelarutan Rendah</text>

    <!-- Skala pH Sumbu X -->
    <text x="90" y="240" fill="#dc2626" font-size="9.5" font-weight="bold">pH 3 (Asam)</text>
    <text x="250" y="240" fill="#10b981" font-size="9.5" font-weight="bold">pH 7 (Netral)</text>
    <text x="450" y="240" fill="#2563eb" font-size="9.5" font-weight="bold">pH 10 (Basa)</text>
    <text x="580" y="240" fill="#1e40af" font-size="9.5" font-weight="bold">pH 13</text>

    <!-- Garis Bantu Batas pH Mulai Mengendap -->
    <line x1="390" y1="225" x2="390" y2="30" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="390" y="20" fill="#b45309" font-size="9.5" font-weight="bold" text-anchor="middle">pH Titik Jenuh / Mulai Mengendap</text>

    <!-- Kurva Kelarutan s vs pH (Turun tajam seiring naiknya pH) -->
    <path d="M 60 50 L 200 55 C 320 60, 370 120, 390 150 C 420 190, 480 215, 600 220" fill="none" stroke="#2563eb" stroke-width="3"/>

    <!-- Zona 1: Melarut Sempurna -->
    <rect x="70" y="70" width="160" height="32" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1"/>
    <text x="150" y="90" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">ZONA LARUT SEMPURNA</text>

    <!-- Zona 2: Terbentuk Endapan -->
    <rect x="420" y="150" width="170" height="32" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
    <text x="505" y="170" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">ZONA PENGENDAPAN PADAT</text>
  </g>
</svg>

---

### 3. Penentuan Nilai pH Saat Endapan Tepat Mulai Terbentuk
Untuk larutan kation logam $\\ce{M^{n+}}$ dengan konsentrasi tertentu, endapan $\\ce{M(OH)_n}$ tepat mulai terbentuk saat $Q_{sp} = K_{sp}$:
$[\\ce{OH-}]_{\\text{kritis}} = \\sqrt[n]{\\frac{K_{sp}}{[\\ce{M^{n+}}]}}$
$\\text{pOH}_{\\text{kritis}} = -\\log[\\ce{OH-}]_{\\text{kritis}} \\implies \\mathbf{\\text{pH}_{\\text{kritis}} = 14 - \\text{pOH}_{\\text{kritis}}}$
- Jika $\\text{pH} < \\text{pH}_{\\text{kritis}}$ $\\implies$ **Belum terbentuk endapan (larut sempurna)**.
- Jika $\\text{pH} \\ge \\text{pH}_{\\text{kritis}}$ $\\implies$ **Terbentuk endapan hidroksida**.`,
        keyFormulas: [
          { name: '[OH-] Kritis Pengendapan Hidroksida', formula: '[\\ce{OH-}] = \\sqrt[n]{\\frac{K_{sp}}{[\\ce{M^{n+}}]}}' },
          { name: 'Kaidah pH Asam', formula: '\\text{pH } \\downarrow \\implies [\\ce{OH-}] \\downarrow \\implies \\text{Kelarutan Hidroksida } \\uparrow' },
          { name: 'Kaidah pH Basa', formula: '\\text{pH } \\uparrow \\implies [\\ce{OH-}] \\uparrow \\implies \\text{Kelarutan Hidroksida } \\downarrow (\\text{Mengendap})' },
        ],
      },
      {
        tag: 'kuosien-reaksi-qsp-dan-kriteria-pembentukan-endapan',
        tags: ['kuosien-ion-qsp', 'kriteria-pengendapan', 'larutan-jenuh-lewat-jenuh', 'presipitasi-ksp'],
        title: 'Konsep Inti 4: Kuosien Ion (Qsp) & Kriteria Kuantitatif Pembentukan Endapan',
        summary: 'Perbandingan hasil kali konsentrasi ion sesaat Qsp dengan nilai Ksp untuk memprediksi apakah larutan belum jenuh, tepat jenuh, atau mengendap.',
        content: `Ketika dua larutan elektrolit yang mengandung kation dan anion pembentuk garam sukar larut dicampurkan, apakah campuran tersebut akan menghasilkan endapan kristal padat? Untuk memprediksinya, kita menghitung nilai **Kuosien Hasil Kali Kelarutan ($Q_{sp}$)**.

### 1. Definisi Kuosien Ion ($Q_{sp}$)
Bentuk matematis persamaan $Q_{sp}$ identik dengan $K_{sp}$, namun konsentrasi ion-ion yang dimasukkan adalah **konsentrasi sesaat tepat setelah pencampuran terjadi (*setelah memperhitungkan volume total pengenceran*)**:
$Q_{sp} = [\\ce{A^{y+}}]_{\\text{campuran}}^x [\\ce{B^{x-}}]_{\\text{campuran}}^y$

Di mana konsentrasi ion setelah pencampuran dihitung dengan rumus pengenceran:
$[\\ce{A^{y+}}]_{\\text{campuran}} = \\frac{M_1 \\times V_1}{V_1 + V_2}$

---

### 2. Tiga Kriteria Hubungan $Q_{sp}$ vs $K_{sp}$

<svg viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">SKALA LOGIKA PREDIKSI PEMBENTUKAN ENDAPAN: KUOSIEN ION (Qsp) VS TETAPAN (Ksp)</text>

  <!-- Garis Sumbu Horisontal Qsp -->
  <line x1="50" y1="120" x2="710" y2="120" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>

  <!-- Titik Acuan Kritis: Qsp = Ksp (Tengah) -->
  <circle cx="380" cy="120" r="16" fill="#f59e0b" stroke="#ffffff" stroke-width="3"/>
  <rect x="305" y="55" width="150" height="42" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="380" y="74" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">Qsp = Ksp</text>
  <text x="380" y="89" fill="#92400e" font-size="10" text-anchor="middle">LARUTAN TEPAT JENUH</text>

  <!-- ZONA KIRI: Qsp < Ksp (BELUM JENUH) -->
  <g transform="translate(60, 150)">
    <rect x="0" y="0" width="280" height="98" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="140" y="24" fill="#1d4ed8" font-size="12.5" font-weight="bold" text-anchor="middle">1. KONDISI: Qsp &lt; Ksp</text>
    <text x="140" y="44" fill="#1e3a8a" font-size="10.5" text-anchor="middle">Larutan Belum Jenuh</text>
    <rect x="25" y="55" width="230" height="30" rx="4" fill="#2563eb"/>
    <text x="140" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TIDAK ADA ENDAPAN (LARUT)</text>
  </g>

  <!-- ZONA KANAN: Qsp > Ksp (MENGENDAP) -->
  <g transform="translate(420, 150)">
    <rect x="0" y="0" width="280" height="98" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="140" y="24" fill="#b91c1c" font-size="12.5" font-weight="bold" text-anchor="middle">2. KONDISI: Qsp &gt; Ksp</text>
    <text x="140" y="44" fill="#991b1b" font-size="10.5" text-anchor="middle">Larutan Lewat Jenuh</text>
    <rect x="25" y="55" width="230" height="30" rx="4" fill="#dc2626"/>
    <text x="140" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TERJADI ENDAPAN PADAT (PRESIPITASI)</text>
  </g>
</svg>

---

### 3. Rangkuman Kaidah Evaluator:
1. **$Q_{sp} < K_{sp}$:**
   - Hasil kali konsentrasi ion belum melampaui batas kelarutan.
   - **Status:** Larutan belum jenuh $\\implies$ **Tidak terbentuk endapan** (larutan jernih homogen).
2. **$Q_{sp} = K_{sp}$:**
   - Larutan tepat mencapai daya tampung maksimum zat terlarut.
   - **Status:** Larutan tepat jenuh $\\implies$ **Belum terbentuk endapan nyata**, namun penambahan satu butir kristal mikro pun akan langsung memicu pengendapan.
3. **$Q_{sp} > K_{sp}$:**
   - Hasil kali konsentrasi ion melampaui kapasitas kesetimbangan termodinamika.
   - **Status:** Larutan lewat jenuh $\\implies$ **Terbentuk endapan kristal padatan** yang memisahkan diri dari fasa larutan sampai konsentrasi ion yang tersisa di cairan memenuhi kembali $Q_{sp} = K_{sp}$.`,
        keyFormulas: [
          { name: 'Rumus Kuosien Ion Qsp', formula: 'Q_{sp} = [\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y \\quad (\\text{kondisi sesaat})' },
          { name: 'Kriteria Larut (Tidak Mengendap)', formula: 'Q_{sp} < K_{sp} \\implies \\text{Larutan Belum Jenuh (Tidak Mengendap)}' },
          { name: 'Kriteria Tepat Jenuh', formula: 'Q_{sp} = K_{sp} \\implies \\text{Larutan Tepat Jenuh}' },
          { name: 'Kriteria Terbentuk Endapan', formula: 'Q_{sp} > K_{sp} \\implies \\text{Terbentuk Endapan Padat (Presipitasi)}' },
        ],
      },
      {
        tag: 'pengendapan-selektif-dan-pemisahan-kualitatif-ion-logam',
        tags: ['pengendapan-selektif', 'fractional-precipitation', 'pemisahan-ion-logam', 'titrasi-mohr'],
        title: 'Konsep Inti 5: Pengendapan Selektif (Fractional Precipitation) & Pemisahan Ion Logam',
        summary: 'Teknik pemisahan campuran ion logam dalam satu larutan berdasarkan perbedaan nilai Ksp melalui penambahan pereaksi pengendap secara bertahap.',
        content: `Pengendapan selektif (*fractional precipitation*) adalah teknik kimia analitik yang digunakan untuk memisahkan dua atau lebih ion yang berada dalam satu larutan campuran dengan cara menambahkan pereaksi pengendap tetes demi tetes secara perlahan.

### 1. Prinsip Penentuan Urutan Pengendapan
Suatu senyawa akan mulai mengendap jika konsentrasi pereaksi pengendap di larutan telah melampaui konsentrasi ambang batas kritisnya ($Q_{sp} \\ge K_{sp}$).
- Ion yang membutuhkan **konsentrasi pereaksi pengendap paling rendah** akan **mengendap terlebih dahulu**.
- Ion yang membutuhkan konsentrasi pereaksi pengendap lebih tinggi akan **mengendap belakangan**.

---

### 2. Infografis Pemisahan Selektif: Titrasi Campuran $\\ce{Cl-}$ dan $\\ce{CrO4^2-}$ dengan $\\ce{Ag+}$

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Title Header -->
  <rect x="0" y="0" width="760" height="40" fill="#0f172a" rx="10"/>
  <text x="380" y="25" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">PEMISAHAN SELEKTIF CAMPURAN Cl⁻ DAN CrO₄²⁻ DENGAN PENETESAN Ag⁺ (METODE MOHR)</text>

  <!-- PANEL 1: KONDISI AWAL CAMPURAN (x=25..245) -->
  <g transform="translate(25, 52)">
    <rect x="0" y="0" width="220" height="250" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="200" height="26" rx="4" fill="#334155"/>
    <text x="110" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TAHAP 1: LARUTAN AWAL</text>

    <text x="110" y="58" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Campuran Homogen:</text>
    <rect x="10" y="68" width="200" height="60" rx="4" fill="#f1f5f9"/>
    <text x="16" y="88" fill="#334155" font-size="9.5">• [Cl⁻] = 0.050 M</text>
    <text x="16" y="105" fill="#334155" font-size="9.5">• [CrO4²⁻] = 0.050 M</text>
    <text x="16" y="120" fill="#64748b" font-size="8.5">Keduanya larut sempurna dalam air.</text>

    <rect x="10" y="140" width="200" height="98" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="16" y="160" fill="#1e40af" font-size="9.5" font-weight="bold">Nilai Tetapan Ksp:</text>
    <text x="16" y="178" fill="#1e3a8a" font-size="9">• AgCl: Ksp = 1.8 × 10⁻¹⁰</text>
    <text x="16" y="196" fill="#1e3a8a" font-size="9">• Ag2CrO4: Ksp = 8.8 × 10⁻¹²</text>
    <text x="16" y="222" fill="#2563eb" font-size="9" font-weight="bold">Teteskan AgNO3 perlahan...</text>
  </g>

  <!-- PANEL 2: PENGENDAPAN PERTAMA AgCl (x=270..490) -->
  <g transform="translate(270, 52)">
    <rect x="0" y="0" width="220" height="250" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="10" y="10" width="200" height="26" rx="4" fill="#2563eb"/>
    <text x="110" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TAHAP 2: AgCl MENGENDAP</text>

    <text x="110" y="58" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">[Ag⁺] Butuh = 3.6 × 10⁻⁹ M</text>
    <rect x="10" y="68" width="200" height="70" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
    <text x="110" y="90" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">Endapan Putih AgCl ⬇</text>
    <text x="110" y="108" fill="#1e3a8a" font-size="9" text-anchor="middle">AgCl mengendap duluan!</text>
    <text x="110" y="125" fill="#1d4ed8" font-size="9" text-anchor="middle">[Ag⁺] sangat kecil sudah cukup.</text>

    <rect x="10" y="150" width="200" height="88" rx="4" fill="#ffffff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="16" y="170" fill="#1e40af" font-size="9.5" font-weight="bold">Kondisi Ion Lain:</text>
    <text x="16" y="188" fill="#475569" font-size="9">• Ion CrO4²⁻ masih tetap larut.</text>
    <text x="16" y="204" fill="#475569" font-size="9">• Belum mencapai ambang</text>
    <text x="16" y="220" fill="#475569" font-size="9">  pengendapan Ag2CrO4.</text>
  </g>

  <!-- PANEL 3: PENGENDAPAN KEDUA Ag2CrO4 (x=515..735) -->
  <g transform="translate(515, 52)">
    <rect x="0" y="0" width="220" height="250" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="10" y="10" width="200" height="26" rx="4" fill="#dc2626"/>
    <text x="110" y="27" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TAHAP 3: Ag2CrO4 MENGENDAP</text>

    <text x="110" y="58" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">[Ag⁺] Butuh = 1.3 × 10⁻⁵ M</text>
    <rect x="10" y="68" width="200" height="70" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
    <text x="110" y="90" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">Endapan Merah Bata ⬇</text>
    <text x="110" y="108" fill="#991b1b" font-size="9" text-anchor="middle">Ag2CrO4 mulai mengendap!</text>
    <text x="110" y="125" fill="#7f1d1d" font-size="9" text-anchor="middle">Indikator Titik Akhir Titrasi.</text>

    <rect x="10" y="150" width="200" height="88" rx="4" fill="#ffffff" stroke="#fecaca" stroke-width="1"/>
    <text x="16" y="170" fill="#b91c1c" font-size="9.5" font-weight="bold">Efisiensi Pemisahan:</text>
    <text x="16" y="188" fill="#7f1d1d" font-size="9">• Lebih dari 99.9% ion Cl⁻</text>
    <text x="16" y="204" fill="#7f1d1d" font-size="9">  telah berhasil diendapkan</text>
    <text x="16" y="220" fill="#991b1b" font-size="9" font-weight="bold">  sebelum Ag2CrO4 muncul!</text>
  </g>
</svg>

---

### 3. Kriteria Keberhasilan Pemisahan Kualitatif
Pemisahan selektif dua ion dianggap **sempurna dan tuntas secara kuantitatif** apabila saat senyawa kedua tepat mulai mengendap, konsentrasi ion pertama yang tersisa di dalam larutan sudah berkurang hingga **kurang dari $0.1\\%$ dari konsentrasi awalnya** ($> 99.9\\%$ telah terpisahkan sebagai endapan murni).`,
        keyFormulas: [
          { name: 'Kriteria Konsentrasi Pengendap Minimum', formula: '[\\text{Pengendap}]_{\\text{min}} = \\sqrt[y]{\\frac{K_{sp}}{[\\text{Ion Logam}]^x}}' },
          { name: 'Urutan Pengendapan', formula: '\\min([\\text{Pengendap}]) \\implies \\text{Mengendap Lebih Dulu}' },
          { name: 'Sisa Ion Pertama Saat Ion Kedua Mengendap', formula: '[\\text{Ion}_1]_{\\text{sisa}} = \\frac{K_{sp, 1}}{[\\text{Pengendap}]_{\\text{kedua}}}' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'contoh-kalkulasi-kelarutan-dan-ksp-garam-terner',
        tags: ['contoh-kelarutan-ksp', 'garam-terner-ag2cro4', 'konversi-mg-ke-molaritas', 'perhitungan-ksp'],
        title: 'Contoh Soal 1: Penentuan Nilai Ksp Perak Kromat Ag2CrO4 dari Data Kelarutan Massa & Konversi Satuan',
        summary: 'Konversi kelarutan dari mg/100 mL ke molaritas (mol/L) dan kalkulasi nilai tetapan hasil kali kelarutan Ksp tipe garam terner 2:1.',
        content: `**Soal:**
Di laboratorium kimia analitik, seorang siswa melarutkan padatan kristal perak kromat, $\\ce{Ag2CrO4}$ ($M_r = 332.0\\text{ g/mol}$), ke dalam air suling pada suhu $25^\\circ\\text{C}$.
Data laboratorium menunjukkan bahwa tepat sebanyak $4.316\\text{ mg}$ $\\ce{Ag2CrO4}$ dapat melarut dalam $100.0\\text{ mL}$ larutan hingga tercapai kondisi tepat jenuh.

Tentukan:
a) Kelarutan molar ($s$) dari perak kromat dalam satuan $\\text{mol/Liter}$!
b) Persamaan reaksi kesetimbangan fasa heterogen dan ekspresi rumus $K_{sp}$!
c) Nilai tetapan hasil kali kelarutan ($K_{sp}$) $\\ce{Ag2CrO4}$ pada temperatur $25^\\circ\\text{C}$!

---

**Pembahasan:**

**Bagian a: Menghitung Kelarutan Molar ($s$)**
1. Konversi massa zat terlarut ke satuan gram:
   $\\text{massa } \\ce{Ag2CrO4} = 4.316\\text{ mg} = 4.316 \\times 10^{-3}\\text{ gram}$
2. Hitung jumlah mol zat terlarut:
   $n = \\frac{\\text{massa}}{M_r} = \\frac{4.316 \\times 10^{-3}\\text{ g}}{332.0\\text{ g/mol}} = 1.30 \\times 10^{-5}\\text{ mol}$
3. Hitung kelarutan molar dalam $1\\text{ Liter}$ ($V = 100.0\\text{ mL} = 0.100\\text{ L}$):
   $s = \\frac{n}{V} = \\frac{1.30 \\times 10^{-5}\\text{ mol}}{0.100\\text{ L}} = \\mathbf{1.30 \\times 10^{-4}\\text{ mol/L (M)}}$

---

**Bagian b: Persamaan Kesetimbangan dan Rumus $K_{sp}$**
Reaksi pelarutan garam perak kromat (tipe terner $2 : 1$):
$\\ce{Ag2CrO4(s) <=> 2 Ag+(aq) + CrO4^2-(aq)}$
Hubungan stoikiometri konsentrasi ion dalam larutan jenuh:
- $[\\ce{Ag+}] = 2s$
- $[\\ce{CrO4^2-}] = s$

Ekspresi rumus $K_{sp}$:
$K_{sp} = [\\ce{Ag+}]^2 [\\ce{CrO4^2-}] = (2s)^2 \\times (s) = 4s^3$

---

**Bagian c: Menghitung Nilai $K_{sp}$**
Substitusikan nilai kelarutan $s = 1.30 \\times 10^{-4}\\text{ M}$:
$K_{sp} = 4s^3 = 4 \\times (1.30 \\times 10^{-4})^3$
$(1.30 \\times 10^{-4})^3 = 2.197 \\times 10^{-12}$
$K_{sp} = 4 \\times (2.197 \\times 10^{-12}) = \\mathbf{8.79 \\times 10^{-12}}$

> **Kesimpulan Evaluator Juri:** Perak kromat tergolong garam terner dengan stoikiometri $K_{sp} = 4s^3$. Dari kelarutan $1.30 \\times 10^{-4}\\text{ M}$, diperoleh nilai tetapan hasil kali kelarutan $K_{sp} = 8.79 \\times 10^{-12}$ pada $25^\\circ\\text{C}$.`,
      },
      {
        tag: 'contoh-efek-ion-senama-penurunan-kelarutan-pbi2',
        tags: ['contoh-ion-senama', 'pbi2-ki', 'penurunan-kelarutan', 'common-ion'],
        title: 'Contoh Soal 2: Komparasi Kelarutan Timbal(II) Iodida PbI2 dalam Air Murni vs dalam Larutan KI 0.10 M',
        summary: 'Perhitungan efek ion senama I- terhadap kelarutan garam PbI2 (Ksp = 7.1 x 10^-9) dan rasio penurunannya.',
        content: `**Soal:**
Garam timbal(II) iodida ($\\ce{PbI2}$) merupakan senyawa padat berwarna kuning terang yang sukar larut dalam air dengan nilai $K_{sp} = 7.1 \\times 10^{-9}$ pada temperatur $25^\\circ\\text{C}$.

Tentukan:
a) Kelarutan $\\ce{PbI2}$ di dalam air suling murni!
b) Kelarutan $\\ce{PbI2}$ di dalam larutan kalium iodida ($\\ce{KI}$) $0.10\\text{ M}$!
c) Berapa kali lipat penurunan kelarutan $\\ce{PbI2}$ akibat kehadiran ion senama iodida tersebut?

---

**Pembahasan:**

**Bagian a: Kelarutan $\\ce{PbI2}$ dalam Air Murni**
Reaksi pelarutan:
$\\ce{PbI2(s) <=> Pb^2+(aq) + 2 I-(aq)}$
- $[\\ce{Pb^2+}] = s$
- $[\\ce{I-}] = 2s$
$K_{sp} = [\\ce{Pb^2+}][\\ce{I-}]^2 = (s)(2s)^2 = 4s^3$
$4s^3 = 7.1 \\times 10^{-9} \\implies s^3 = \\frac{7.1 \\times 10^{-9}}{4} = 1.775 \\times 10^{-9}$
$s = \\sqrt[3]{1.775 \\times 10^{-9}} \\approx \\mathbf{1.21 \\times 10^{-3}\\text{ mol/L (M)}}$

---

**Bagian b: Kelarutan $\\ce{PbI2}$ dalam Larutan $\\ce{KI } 0.10\\text{ M}$ (Ion Senama $\\ce{I-}$)**
Garam $\\ce{KI}$ terionisasi sempurna:
$\\ce{KI(aq) -> K+(aq) + I-(aq)} \\implies [\\ce{I-}]_{\\ce{KI}} = 0.10\\text{ M}$

Misalkan kelarutan $\\ce{PbI2}$ dalam larutan ini $= s'\\text{ M}$.
Konsentrasi ion pada kesetimbangan:
- $[\\ce{Pb^2+}] = s'$
- $[\\ce{I-}] = 0.10 + 2s' \\approx 0.10\\text{ M}$ *(karena $2s' \\ll 0.10$, nilai $2s'$ dapat diabaikan)*.

Substitusikan ke rumus $K_{sp}$:
$K_{sp} = [\\ce{Pb^2+}][\\ce{I-}]^2$
$7.1 \\times 10^{-9} = (s') \\times (0.10)^2 = s' \\times 1.0 \\times 10^{-2}$
$s' = \\frac{7.1 \\times 10^{-9}}{1.0 \\times 10^{-2}} = \\mathbf{7.10 \\times 10^{-7}\\text{ mol/L (M)}}$

---

**Bagian c: Rasio Penurunan Kelarutan**
$\\text{Rasio Penurunan} = \\frac{s_{\\text{air}}}{s'_{\\ce{KI}}} = \\frac{1.21 \\times 10^{-3}\\text{ M}}{7.10 \\times 10^{-7}\\text{ M}} \\approx \\mathbf{1704\\text{ kali lipat}}$

> **Kesimpulan Evaluator Juri:** Kehadiran ion senama $\\ce{I-}$ dari $\\ce{KI } 0.10\\text{ M}$ menekan kelarutan timbal(II) iodida hingga lebih dari $1700$ kali lipat lebih sukar larut dibandingkan dalam air murni. Prinsip ini digunakan di industri untuk meminimalkan kehilangan analit endapan saat proses pencucian kristal.`,
      },
      {
        tag: 'contoh-prediksi-pengendapan-qsp-mgoh2-pada-ph',
        tags: ['contoh-qsp-ksp', 'prediksi-endapan-mgoh2', 'pengaruh-ph-pengendapan', 'kuosien-ion'],
        title: 'Contoh Soal 3: Prediksi Pembentukan Endapan Mg(OH)2 Berdasarkan Variasi pH Larutan Buffer',
        summary: 'Evaluasi kondisi pengendapan hidroksida logam dari data konsentrasi kation dan pOH/pH larutan buffer serta penentuan batas pH mulai mengendap.',
        content: `**Soal:**
Suatu larutan magnesium klorida ($\\ce{MgCl2}$) memiliki konsentrasi $0.010\\text{ M}$.
Diketahui tetapan hasil kali kelarutan magnesium hidroksida adalah $K_{sp}(\\ce{Mg(OH)2}) = 1.8 \\times 10^{-11}$ pada $25^\\circ\\text{C}$.

Tentukan:
a) Nilai pH minimum saat endapan $\\ce{Mg(OH)2}$ tepat mulai terbentuk di dalam larutan tersebut!
b) Jika ke dalam larutan $\\ce{MgCl2}$ tersebut ditambahkan sistem buffer sehingga nilai pH larutan terjaga pada $\\text{pH} = 9.00$, apakah akan terbentuk endapan $\\ce{Mg(OH)2}$? Buktikan dengan perhitungan nilai $Q_{sp}$!
c) Jika pH sistem buffer dinaikkan menjadi $\\text{pH} = 10.00$, apakah akan terjadi pengendapan? Buktikan dengan perhitungan nilai $Q_{sp}$!

---

**Pembahasan:**

Konsentrasi kation magnesium:
$[\\ce{Mg^2+}] = 0.010\\text{ M} = 1.0 \\times 10^{-2}\\text{ M}$

---

**Bagian a: Menghitung pH Kritis Saat Endapan Mulai Terbentuk**
Endapan tepat mulai terbentuk pada batas kesetimbangan $Q_{sp} = K_{sp}$:
$[\\ce{Mg^2+}][\\ce{OH-}]^2 = K_{sp}$
$(1.0 \\times 10^{-2}) \\times [\\ce{OH-}]^2 = 1.8 \\times 10^{-11}$
$[\\ce{OH-}]^2 = \\frac{1.8 \\times 10^{-11}}{1.0 \\times 10^{-2}} = 1.8 \\times 10^{-9} = 18 \\times 10^{-10}$
$[\\ce{OH-}] = \\sqrt{18 \\times 10^{-10}} \\approx 4.24 \\times 10^{-5}\\text{ M}$

Hitung pOH dan pH kritis:
$\\text{pOH} = -\\log(4.24 \\times 10^{-5}) = 5 - \\log(4.24) = 5 - 0.627 = 4.373$
$\\mathbf{\\text{pH}_{\\text{kritis}} = 14.00 - 4.373 = 9.627 \\approx 9.63}$
*(Endapan padat $\\ce{Mg(OH)2}$ tepat mulai terbentuk jika $\\text{pH} \\ge 9.63$).*

---

**Bagian b: Evaluasi pada $\\text{pH} = 9.00$**
- $\\text{pOH} = 14.00 - 9.00 = 5.00 \\implies [\\ce{OH-}] = 1.0 \\times 10^{-5}\\text{ M}$
- Hitung kuosien ion $Q_{sp}$:
  $Q_{sp} = [\\ce{Mg^2+}][\\ce{OH-}]^2 = (1.0 \\times 10^{-2}) \\times (1.0 \\times 10^{-5})^2$
  $Q_{sp} = (1.0 \\times 10^{-2}) \\times (1.0 \\times 10^{-10}) = \\mathbf{1.0 \\times 10^{-12}}$
- Bandingkan dengan $K_{sp}$:
  $Q_{sp} = 1.0 \\times 10^{-12} < K_{sp} = 1.8 \\times 10^{-11} \\implies \\mathbf{Q_{sp} < K_{sp}}$
- **Kesimpulan:** Larutan belum jenuh $\\implies$ **TIDAK TERBENTUK ENDAPAN** (larutan tetap jernih).

---

**Bagian c: Evaluasi pada $\\text{pH} = 10.00$**
- $\\text{pOH} = 14.00 - 10.00 = 4.00 \\implies [\\ce{OH-}] = 1.0 \\times 10^{-4}\\text{ M}$
- Hitung kuosien ion $Q_{sp}$:
  $Q_{sp} = [\\ce{Mg^2+}][\\ce{OH-}]^2 = (1.0 \\times 10^{-2}) \\times (1.0 \\times 10^{-4})^2$
  $Q_{sp} = (1.0 \\times 10^{-2}) \\times (1.0 \\times 10^{-8}) = \\mathbf{1.0 \\times 10^{-10}}$
- Bandingkan dengan $K_{sp}$:
  $Q_{sp} = 1.0 \\times 10^{-10} > K_{sp} = 1.8 \\times 10^{-11} \\implies \\mathbf{Q_{sp} > K_{sp}}$
- **Kesimpulan:** Larutan lewat jenuh $\\implies$ **TERBENTUK ENDAPAN PUTIH $\\ce{Mg(OH)2}$**.

> **Kesimpulan Evaluator Juri:** Ambang batas keasaman pengendapan $\\ce{Mg(OH)2}$ dari larutan $0.010\\text{ M}$ adalah $\\text{pH} = 9.63$. Pada pH 9.00 larutan tetap larut sempurna, sedangkan pada pH 10.00 ion $\\ce{OH-}$ telah melampaui batas $K_{sp}$ sehingga memicu presipitasi.`,
      },
      {
        tag: 'contoh-pengendapan-selektif-pemisahan-klorida-iodida',
        tags: ['contoh-pengendapan-selektif', 'pemisahan-kualitatif', 'agcl-agi-fraksional', 'efisiensi-pemisahan'],
        title: 'Contoh Soal 4: Pemisahan Campuran Ion Cl- dan I- Menggunakan Pengendapan Bertingkat Larutan AgNO3',
        summary: 'Kalkulasi konsentrasi Ag+ yang dibutuhkan untuk mengendapkan ion iodida dan klorida serta persentase ion pertama yang tersisa saat ion kedua mulai mengendap.',
        content: `**Soal:**
Suatu larutan mengandung campuran ion klorida ($\\ce{Cl-}$) $0.050\\text{ M}$ dan ion iodida ($\\ce{I-}$) $0.050\\text{ M}$. Ke dalam larutan tersebut diteteskan larutan perak nitrat ($\\ce{AgNO3}$) encer secara perlahan-lahan dengan pengadukan konstan.
Diketahui data tetapan hasil kali kelarutan pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgCl}) = 1.8 \\times 10^{-10}$
- $K_{sp}(\\ce{AgI}) = 8.5 \\times 10^{-17}$

Tentukan:
a) Garam perak manakah yang akan mengendap terlebih dahulu? Buktikan dengan menghitung konsentrasi ion $[\\ce{Ag+}]$ minimum yang dibutuhkan untuk memicu pengendapan masing-masing garam!
b) Berapakah konsentrasi ion iodida ($[\\ce{I-}]$) yang masih tersisa di dalam larutan tepat saat garam kedua ($\\ce{AgCl}$) mulai mengendap?
c) Berapa persen ($\\%$) ion iodida yang telah berhasil diendapkan sebelum perak klorida mulai terbentuk?

---

**Pembahasan:**

Konsentrasi ion mula-mula: $[\\ce{Cl-}] = 0.050\\text{ M}$ dan $[\\ce{I-}] = 0.050\\text{ M}$.

**Bagian a: Menghitung $[\\ce{Ag+}]$ Minimum untuk Pengendapan**
1. **Untuk mengendapkan $\\ce{AgI}$:**
   $[\\ce{Ag+}]_{\\ce{AgI}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{I-}]} = \\frac{8.5 \\times 10^{-17}}{0.050\\text{ M}} = \\mathbf{1.70 \\times 10^{-15}\\text{ M}}$
2. **Untuk mengendapkan $\\ce{AgCl}$:**
   $[\\ce{Ag+}]_{\\ce{AgCl}} = \\frac{K_{sp}(\\ce{AgCl})}{[\\ce{Cl-}]} = \\frac{1.8 \\times 10^{-10}}{0.050\\text{ M}} = \\mathbf{3.60 \\times 10^{-9}\\text{ M}}$

Karena $[\\ce{Ag+}]_{\\ce{AgI}} (1.70 \\times 10^{-15}\\text{ M}) \\ll [\\ce{Ag+}]_{\\ce{AgCl}} (3.60 \\times 10^{-9}\\text{ M})$, maka:
**Garam $\\ce{AgI}$ (endapan kuning muda) akan mengendap TERLEBIH DAHULU**.

---

**Bagian b: Konsentrasi Sisa $[\\ce{I-}]$ Saat $\\ce{AgCl}$ Mulai Mengendap**
Garam $\\ce{AgCl}$ mulai mengendap tepat saat konsentrasi ion perak mencapai:
$[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$

Pada saat itu, larutan masih tetap berada dalam kesetimbangan jenuh dengan $\\ce{AgI}$:
$K_{sp}(\\ce{AgI}) = [\\ce{Ag+}][\\ce{I-}]_{\\text{sisa}} = 8.5 \\times 10^{-17}$
$[\\ce{I-}]_{\\text{sisa}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{Ag+}]} = \\frac{8.5 \\times 10^{-17}}{3.60 \\times 10^{-9}\\text{ M}} \\approx \\mathbf{2.36 \\times 10^{-8}\\text{ M}}$

---

**Bagian c: Persentase Ion Iodida yang Berhasil Diendapkan**
- Persentase ion $\\ce{I-}$ yang masih tertinggal di larutan:
  $\\% \\text{ sisa} = \\frac{[\\ce{I-}]_{\\text{sisa}}}{[\\ce{I-}]_{\\text{mula-mula}}} \\times 100\\% = \\frac{2.36 \\times 10^{-8}\\text{ M}}{0.050\\text{ M}} \\times 100\\% \\approx 0.000047\\% \\quad (4.72 \\times 10^{-5}\\%)$
- Persentase ion $\\ce{I-}$ yang telah berhasil diendapkan:
  $\\% \\text{ terendapkan} = 100\\% - 0.000047\\% = \\mathbf{99.99995\\%}$

> **Kesimpulan Evaluator Juri:** Pemisahan selektif ion $\\ce{I-}$ dan $\\ce{Cl-}$ menggunakan penambahan $\\ce{Ag+}$ berlangsung dengan efisiensi luar biasa tinggi ($> 99.999\\%$ ion iodida telah terendapkan sebelum ion klorida mulai mengendap), membuktikan keandalan teknik pengendapan fraksional dalam kimia analitik kualitatif dan kuantitatif.`,
      },
    ],
  },
  {
    id: 112,
    topic_number: 12,
    grade: 'Kelas 11',
    semester: 2,
    curriculumPhase: 'Fase F',
    relatedOsnTopicId: 3,
    title: 'Sistem Koloid & Kimia Permukaan SMA (Klasifikasi, Sifat Optik-Kinetik, Lapis Ganda Listrik, Koagulasi & Sintesis)',
    slug: 'sistem-koloid-dan-kimia-permukaan-sma',
    category: 'Kimia Larutan & Koloid',
    level: 'SMA',
    readTimeMinutes: 35,
    summary: 'Kajian mendalam kimia koloid dan fenomena antarmuka permukaan: spektrum komparatif sistem dispersi (larutan, koloid, suspensi), klasifikasi 8 jenis koloid dan peran emulgator, sifat optik efek Tyndall dan gerak Brown kinetik, fenomena elektrokinetik lapis ganda listrik (Stern-Gouy-Chapman) serta potensial zeta, aturan koagulasi Schulze-Hardy, teknologi koloid pelindung, metode sintesis kondensasi vs dispersi, pemurnian dialisis, hingga termodinamika misil surfaktan (CMC).',
    allTags: [
      'sistem-koloid',
      'fase-terdispersi',
      'medium-pendispersi',
      'efek-tyndall',
      'gerak-brown',
      'adsorpsi-koloid',
      'lapis-ganda-listrik',
      'potensial-zeta',
      'koagulasi-schulze-hardy',
      'koloid-pelindung',
      'dialisis',
      'sintesis-koloid',
      'surfaktan-dan-cmc',
      'sistem-dispersi',
      'ukuran-partikel',
      'fase-f',
      'klasifikasi-koloid',
      'busa-padat',
      'hamburan-cahaya',
      'sifat-optik-koloid',
      'sifat-kinetik',
      'kestabilan-koloid',
      'tumbukan-molekul',
      'koloid-liofil',
      'koloid-liofob',
      'mantel-hidrasi',
      'koagulasi-elektrolit',
      'emulsi',
      'emulgator',
      'lesitin',
      'struktur-amfifilik',
      'adsorpsi-ion',
      'elektroforesis',
      'sol-besi-hidroksida',
      'muatan-koloid',
      'aturan-schulze-hardy',
      'koagulasi',
      'sol-negatif',
      'arsen-sulfida',
      'sintesis-kondensasi',
      'sol-emas',
      'sol-arsen-sulfida',
      'reaksi-redoks',
      'sintesis-dispersi',
      'peptisasi',
      'busur-bredig',
      'sol-logam',
      'pemurnian-koloid',
      'membran-semipermeabel',
      'hemodialisis',
      'sol-positif',
      'valensi-anion',
      'daya-koagulasi',
      'gelatin',
      'es-krim',
      'gom-arab',
      'koagulasi-mutual',
      'sol-positif-negatif',
      'netralisasi-muatan',
      'tawas',
      'penjernihan-air',
      'koagulasi-flokulasi',
      'aluminium-hidroksida',
      'lapisan-stern',
      'teori-edl',
      'teori-dlvo',
      'konsentrasi-koagulasi-kritis',
      'cmc',
      'misil-surfaktan',
      'termodinamika-permukaan',
      'konduktivitas-molar',
      'titik-isoelektrik',
      'elektroforesis-protein',
      'muatan-bersih',
      'zwitterion',
      'nanopartikel-emas',
      'spr',
      'resonansi-plasmon',
      'luas-permukaan-spesifik',
      'nanokoloid',
      'adsorpsi-monolayer',
      'barier-energi',
      'kestabilan-kinetik',
      'kompresi-edl',
      'osmometri',
      'massa-molar-polimer',
      'tekanan-osmosis',
      'koloid-makromolekul',
      'miselisasi',
      'termodinamika-surfaktan',
      'energi-bebas-gibbs',
      'alat-cottrell',
      'elektroforesis-industri',
      'deutsch-anderson',
      'aerosol-padat',
    ],
    prerequisites: [
      {
        tag: 'spektrum-sistem-dispersi-larutan-koloid-suspensi',
        title: 'Prasyarat 1: Spektrum Sistem Dispersi: Perbandingan Komparatif Larutan Sejati, Koloid, dan Suspensi',
        summary: 'Pembedaan fundamental ukuran partikel terdispersi, homogenitas makroskopis vs mikroskopis, kestabilan gravitasi, dan permeabilitas membran.',
        content: `Materi di alam semesta jarang sekali berada dalam wujud zat tunggal murni; sebagian besar berupa campuran fasa atau **sistem dispersi**, yaitu sistem di mana suatu zat (disebut **fase terdispersi**) tersebar merata di dalam medium pelarut kontinu (disebut **medium pendispersi**).

Berdasarkan dimensi diameter partikel fase terdispersi, sistem dispersi diklasifikasikan ke dalam tiga kategori utama:

### 1. Tabel Komparasi Spektrum Tiga Sistem Dispersi

| Sifat Karakteristik | Larutan Sejati (*True Solution*) | Sistem Koloid (*Colloidal System*) | Suspensi Kasar (*Coarse Suspension*) |
| :--- | :--- | :--- | :--- |
| **Dimensi Partikel** | Ukuran molekular/ionik ($< 1\\text{ nm}$ atau $< 10^{-9}\\text{ m}$) | Ukuran agregat intermediat ($1\\text{ nm} - 100\\text{ nm}$) | Ukuran makroskopis ($> 100\\text{ nm}$ atau $> 10^{-7}\\text{ m}$) |
| **Homogenitas Sistem** | Homogen sempurna (satu fasa, serba sama pada skala atomik) | Heterogen secara mikroskopis (dua fasa), tetapi tampak homogen secara makroskopis | Heterogen nyata (jelas tampak pemisahan dua fasa) |
| **Kestabilan Gravitasi** | Sangat stabil; tidak pernah mengendap meskipun didiamkan bertahun-tahun | Relatif stabil secara kinetik; partikel tidak mengendap berkat gerak Brown dan muatan listrik | Tidak stabil; partikel segera mengendap membentuk sedimen karena gaya gravitasi |
| **Penyaringan (Filtrasi)** | Tidak dapat disaring dengan kertas saring biasa maupun membran semipermeabel | Tidak dapat disaring dengan kertas saring biasa, namun **dapat disaring menggunakan ultrafilter / membran semipermeabel** | Dapat disaring tuntas menggunakan kertas saring biasa (*filter paper*) |
| **Transparansi & Optik** | Jernih tembus pandang (*transparent*); meneruskan berkas cahaya tanpa hamburan | Keruh hingga translusen; **menghamburkan berkas cahaya (Efek Tyndall)** | Keruh opak (*opaque*); memblokir atau memantulkan cahaya |
| **Contoh Nyata** | Larutan $\\ce{NaCl}$ di air, larutan gula, udara bersih | Air susu, sol gelatin, cat, kabut, asap, tinta | Campuran pasir dan air, air kopi tubruk, suspensi lumpur |

---

### 2. Zona Transisi Skala Koloid
Dimensi $1 - 100\\text{ nm}$ merupakan batas kritis dalam fisika-kimia materi. Pada rentang nanometer ini:
- Partikel telah tersusun atas ribuan hingga jutaan atom/molekul yang berkumpul (agregat), sehingga tidak lagi berperilaku sebagai ion bebas terisolasi.
- Namun ukuran tersebut masih cukup kecil sehingga partikel terus-menerus terlempar dan melayang akibat benturan termal molekul pelarut, mencegah sedimentasi instan oleh medan gravitasi bumi.`,
      },
      {
        tag: 'antarmuka-fasa-dan-fenomena-permukaan',
        title: 'Prasyarat 2: Antarmuka Fasa & Fenomena Permukaan Fisiko-Kimia Koloid',
        summary: 'Ledakan rasio luas permukaan terhadap volume (A/V) pada skala koloidal dan signifikansi energi bebas antarmuka.',
        content: `Mengapa sistem koloid memperlihatkan sifat-sifat unik yang tidak dimiliki oleh larutan sejati maupun batuan padatan makroskopis? Kunci pemahaman fundamentalnya terletak pada **fenomena kimia permukaan (*surface chemistry*)**.

### 1. Ledakan Rasio Luas Permukaan terhadap Volume ($A/V$)
Bila suatu kubus padatan bermassa $1\\text{ gram}$ dengan rusuk $L_0 = 1\\text{ cm}$ dibelah-belah secara berulang hingga menjadi partikel kubus mikro berukuran koloid ($L = 10\\text{ nm} = 10^{-6}\\text{ cm}$):
- Volume total materi tetap sama: $V_{\\text{total}} = 1\\text{ cm}^3$.
- Jumlah partikel kubus koloid yang dihasilkan:
  $$N = \\left(\\frac{L_0}{L}\\right)^3 = \\left(\\frac{10^{-2}}{10^{-8}}\\right)^3 = 10^{18}\\text{ partikel}$$
- Luas permukaan mula-mula kubus makro:
  $$A_0 = 6 \\times L_0^2 = 6 \\times (1\\text{ cm})^2 = 6\\text{ cm}^2 = 6 \\times 10^{-4}\\text{ m}^2$$
- Luas permukaan total setelah menjadi koloid:
  $$A_{\\text{koloid}} = N \\times (6 \\times L^2) = 10^{18} \\times [6 \\times (10^{-8}\\text{ m})^2] = 600\\text{ m}^2!$$

> **Implikasi Luas Permukaan Raksasa:**
> Dari hanya $6\\text{ cm}^2$ (seukuran prangko), luas kontak padatan melonjak menjadi **$600\\text{ m}^2$ (setara luas dua lapangan bulu tangkis)!** Akibatnya, fraksi atom yang berada di lapisan terluar (antarmuka) mendominasi seluruh perilaku kimia materi.

---

### 2. Energi Bebas Antarmuka & Kebutuhan Stabilisasi
Atom-atom di bagian dalam kristal (*bulk*) dikelilingi secara simetris oleh tetangganya, sehingga resultan gaya tarik antarmolekul bernilai nol. Sebaliknya, atom-atom di permukaan antarmuka mengalami ketidakseimbangan gaya tarik (gaya kohesi ke dalam pelarut lebih kecil daripada ke fasa padat), menghasilkan **tegangan permukaan (*surface tension*)** dan energi bebas antarmuka ($\\Delta G_{\\text{surface}} = \\gamma \\Delta A$).

Karena $\\Delta A$ sangat besar, koloid secara termodinamika cenderung tidak stabil dan berupaya menurunkan energinya dengan cara saling bergabung (koagulasi/agregasi). Oleh sebab itu, suatu sistem koloid membutuhkan **mekanisme stabilisasi kinetik**, baik melalui muatan elektrostatik sejenis maupun penyelubungan molekular oleh surfaktan pelindung.`,
      },
    ],
    core_concepts: [
      {
        tag: 'klasifikasi-delapan-sistem-koloid-dan-emulgator',
        tags: ['klasifikasi-koloid', 'fase-terdispersi', 'medium-pendispersi', 'aerosol-sol-emulsi-buih', 'emulgator'],
        title: 'Konsep Inti 1: Klasifikasi 8 Sistem Koloid Berdasarkan Kombinasi Fase Terdispersi dan Pendispersi',
        summary: 'Matriks lengkap 8 kombinasi fase zat (padat, cair, gas), pemahaman mengapa gas-dalam-gas bukan koloid, serta mekanisme aksi molekul emulgator.',
        content: `Berdasarkan wujud fasa zat dari fase terdispersi dan medium pendispersinya, dikenal **8 jenis sistem koloid**. Campuran gas dalam gas **tidak pernah membentuk koloid** karena molekul-molekul gas saling bercampur sempurna pada tingkat molekular akibat gaya tarik antarmolekul yang sangat lemah dan entropi pencampuran yang sangat tinggi, sehingga selalu menghasilkan larutan sejati satu fasa yang serba sama.

### 1. Matriks Lengkap 8 Jenis Koloid

| No | Fase Terdispersi | Medium Pendispersi | Nama Sistem Koloid | Contoh Nyata dalam Kehidupan & Industri |
| :---: | :---: | :---: | :---: | :--- |
| **1** | **Padat** | **Gas** | **Aerosol Padat** | Asap pembakaran (*smoke*), debu vulkanik di udara, partikel jelaga knalpot |
| **2** | **Cair** | **Gas** | **Aerosol Cair** | Kabut (*fog*), awan, semprotan hairspray, tetesan pestisida aerosol |
| **3** | **Padat** | **Cair** | **Sol** | Cat tembok, tinta printer, sol emas (nanopartikel Au), gelatin, kanji dalam air |
| **4** | **Cair** | **Cair** | **Emulsi** | Susu cair, santan kelapa, mayones, lateks getah karet, minyak emulsi |
| **5** | **Gas** | **Cair** | **Buih / Busa Cair** | Busa sabun, busa detergen, krim kocok (*whipped cream*), busa alat pemadam api |
| **6** | **Padat** | **Padat** | **Sol Padat** | Kaca berwarna (mengandung oksida logam koloidal), paduan intan hitam, batu permata ruby |
| **7** | **Cair** | **Padat** | **Emulsi Padat (Gel)** | Keju, mentega, margarin, jeli agar-agar, mutiara alami, silika gel |
| **8** | **Gas** | **Padat** | **Busa Padat** | Batu apung (*pumice*), karet busa (spons), styrofoam, biskuit renyah berpori |

---

### 2. Peran Vital Zat Pengemulsi (*Emulgator*)
Dua cairan yang tidak saling melarut (*immiscible*), seperti minyak dan air, jika dikocok kuat akan terpecah membentuk tetesan-tetesan emulsi sementara. Namun begitu pengocokan dihentikan, tetesan minyak akan segera menyatu kembali (*koalesensi*) dan memisah menjadi dua lapisan akibat tingginya energi bebas antarmuka minyak-air.

Agar emulsi dapat bertahan stabil dalam waktu yang lama, diperlukan penambahan zat ketiga yang disebut **emulgator (zat pengemulsi)**:
1. **Struktur Molekul Amfifilik:** Emulgator tersusun atas molekul dengan dua kutub berlawanan:
   - **Kepala Hidrofilik (Polar):** berikatan kuat dengan molekul air via interaksi dipol-dipol atau ikatan hidrogen.
   - **Ekor Hidrofobik / Lipofilik (Non-polar):** rantai hidrokarbon panjang yang larut dan menancap ke dalam tetesan minyak.
2. **Mekanisme Pembungkusan:** Molekul emulgator melapisi seluruh antarmuka tetesan minyak dengan posisi ekor menghadap ke dalam tetesan minyak dan kepala polar mencuat ke arah medium air. Lapisan ini membentuk rintangan sterik dan elektrostatik yang menolak tetesan minyak lain, mencegah penyatuan kembali (*koalesensi*).
3. **Contoh Emulgator Alami & Industri:**
   - **Lesitin** (fosfolipid dalam kuning telur) menstabilkan emulsi minyak dalam air pada saus mayones.
   - **Kasein** (protein fosfat susu) mengemulsikan lemak susu dalam air.
   - **Sabun natrium stearat** ($\\ce{C17H35COONa}$) mengemulsikan minyak dan kotoran lemak dalam air cucian.

---

### 3. Infografis Arsitektur 8 Sistem Koloid & Aksi Emulgator

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">MATRIKS 8 JENIS KOLOID & MEKANISME EMULSIFIKASI STABIL</text>

  <!-- PANEL KIRI: Matriks 8 Koloid (x=15..450) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="440" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="220" y="20" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Klasifikasi Fase Terdispersi vs Medium Pendispersi</text>

    <!-- Table Grid -->
    <!-- Headers Kolom -->
    <rect x="90" y="32" width="110" height="22" fill="#e2e8f0" rx="3"/>
    <text x="145" y="47" fill="#334155" font-size="9.5" font-weight="bold" text-anchor="middle">Gas (Medium)</text>
    <rect x="205" y="32" width="110" height="22" fill="#e2e8f0" rx="3"/>
    <text x="260" y="47" fill="#334155" font-size="9.5" font-weight="bold" text-anchor="middle">Cair (Medium)</text>
    <rect x="320" y="32" width="110" height="22" fill="#e2e8f0" rx="3"/>
    <text x="375" y="47" fill="#334155" font-size="9.5" font-weight="bold" text-anchor="middle">Padat (Medium)</text>

    <!-- Baris 1: Terdispersi Gas -->
    <rect x="10" y="58" width="75" height="45" fill="#f1f5f9" rx="3"/>
    <text x="47" y="85" fill="#475569" font-size="9.5" font-weight="bold" text-anchor="middle">GAS</text>
    <!-- G in G: Larutan -->
    <rect x="90" y="58" width="110" height="45" fill="#fee2e2" stroke="#f87171" rx="4"/>
    <text x="145" y="77" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">BUKAN KOLOID</text>
    <text x="145" y="93" fill="#b91c1c" font-size="8" text-anchor="middle">(Larutan Sejati)</text>
    <!-- G in L: Buih -->
    <rect x="205" y="58" width="110" height="45" fill="#e0f2fe" stroke="#38bdf8" rx="4"/>
    <text x="260" y="76" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">BUIH / BUSA</text>
    <text x="260" y="92" fill="#0284c7" font-size="8" text-anchor="middle">Sabun, Krim Kocok</text>
    <!-- G in S: Busa Padat -->
    <rect x="320" y="58" width="110" height="45" fill="#fef3c7" stroke="#fbbf24" rx="4"/>
    <text x="375" y="76" fill="#92400e" font-size="9.5" font-weight="bold" text-anchor="middle">BUSA PADAT</text>
    <text x="375" y="92" fill="#b45309" font-size="8" text-anchor="middle">Batu Apung, Spons</text>

    <!-- Baris 2: Terdispersi Cair -->
    <rect x="10" y="108" width="75" height="45" fill="#f1f5f9" rx="3"/>
    <text x="47" y="135" fill="#475569" font-size="9.5" font-weight="bold" text-anchor="middle">CAIR</text>
    <!-- L in G: Aerosol Cair -->
    <rect x="90" y="108" width="110" height="45" fill="#ecfdf5" stroke="#34d399" rx="4"/>
    <text x="145" y="126" fill="#065f46" font-size="9.5" font-weight="bold" text-anchor="middle">AEROSOL CAIR</text>
    <text x="145" y="142" fill="#059669" font-size="8" text-anchor="middle">Kabut, Awan, Spray</text>
    <!-- L in L: Emulsi -->
    <rect x="205" y="108" width="110" height="45" fill="#fae8ff" stroke="#c084fc" rx="4"/>
    <text x="260" y="126" fill="#6b21a8" font-size="9.5" font-weight="bold" text-anchor="middle">EMULSI</text>
    <text x="260" y="142" fill="#7e22ce" font-size="8" text-anchor="middle">Susu, Santan, Lateks</text>
    <!-- L in S: Gel/Emulsi Padat -->
    <rect x="320" y="108" width="110" height="45" fill="#fdf2f8" stroke="#f472b6" rx="4"/>
    <text x="375" y="126" fill="#9d174d" font-size="9.5" font-weight="bold" text-anchor="middle">EMULSI PADAT (GEL)</text>
    <text x="375" y="142" fill="#be185d" font-size="8" text-anchor="middle">Keju, Mentega, Agar</text>

    <!-- Baris 3: Terdispersi Padat -->
    <rect x="10" y="158" width="75" height="45" fill="#f1f5f9" rx="3"/>
    <text x="47" y="185" fill="#475569" font-size="9.5" font-weight="bold" text-anchor="middle">PADAT</text>
    <!-- S in G: Aerosol Padat -->
    <rect x="90" y="158" width="110" height="45" fill="#f1f5f9" stroke="#94a3b8" rx="4"/>
    <text x="145" y="176" fill="#334155" font-size="9.5" font-weight="bold" text-anchor="middle">AEROSOL PADAT</text>
    <text x="145" y="192" fill="#475569" font-size="8" text-anchor="middle">Asap Knalpot, Debu</text>
    <!-- S in L: Sol -->
    <rect x="205" y="158" width="110" height="45" fill="#f0fdf4" stroke="#4ade80" rx="4"/>
    <text x="260" y="176" fill="#166534" font-size="9.5" font-weight="bold" text-anchor="middle">SOL CAIR</text>
    <text x="260" y="192" fill="#15803d" font-size="8" text-anchor="middle">Cat Tembok, Tinta</text>
    <!-- S in S: Sol Padat -->
    <rect x="320" y="158" width="110" height="45" fill="#f5f3ff" stroke="#a78bfa" rx="4"/>
    <text x="375" y="176" fill="#4c1d95" font-size="9.5" font-weight="bold" text-anchor="middle">SOL PADAT</text>
    <text x="375" y="192" fill="#5b21b6" font-size="8" text-anchor="middle">Kaca Warna, Ruby</text>

    <!-- Keterangan Label Sumbu -->
    <text x="10" y="225" fill="#64748b" font-size="8.5" font-style="italic">*Kolom = Medium Pendispersi | Baris = Fase Terdispersi</text>
  </g>

  <!-- PANEL KANAN: Aksi Emulgator (x=470..745) -->
  <g transform="translate(470, 50)">
    <rect x="0" y="0" width="275" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="137" y="20" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Aksi Penstabil Molekul Emulgator</text>

    <!-- Tetesan Minyak di Tengah -->
    <circle cx="137" cy="120" r="50" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
    <text x="137" y="117" fill="#854d0e" font-size="10.5" font-weight="bold" text-anchor="middle">TETESAN</text>
    <text x="137" y="131" fill="#854d0e" font-size="10.5" font-weight="bold" text-anchor="middle">MINYAK</text>

    <!-- Molekul Surfaktan Melingkar -->
    <!-- Ekor menembus ke dalam, kepala polar di luar -->
    <!-- Atas -->
    <line x1="137" y1="70" x2="137" y2="52" stroke="#334155" stroke-width="2.5"/>
    <circle cx="137" cy="46" r="6" fill="#3b82f6"/>
    <!-- Kanan Atas -->
    <line x1="172" y1="85" x2="185" y2="72" stroke="#334155" stroke-width="2.5"/>
    <circle cx="191" cy="66" r="6" fill="#3b82f6"/>
    <!-- Kanan -->
    <line x1="187" y1="120" x2="205" y2="120" stroke="#334155" stroke-width="2.5"/>
    <circle cx="211" cy="120" r="6" fill="#3b82f6"/>
    <!-- Kanan Bawah -->
    <line x1="172" y1="155" x2="185" y2="168" stroke="#334155" stroke-width="2.5"/>
    <circle cx="191" cy="174" r="6" fill="#3b82f6"/>
    <!-- Bawah -->
    <line x1="137" y1="170" x2="137" y2="188" stroke="#334155" stroke-width="2.5"/>
    <circle cx="137" cy="194" r="6" fill="#3b82f6"/>
    <!-- Kiri Bawah -->
    <line x1="102" y1="155" x2="89" y2="168" stroke="#334155" stroke-width="2.5"/>
    <circle cx="83" cy="174" r="6" fill="#3b82f6"/>
    <!-- Kiri -->
    <line x1="87" y1="120" x2="69" y2="120" stroke="#334155" stroke-width="2.5"/>
    <circle cx="63" cy="120" r="6" fill="#3b82f6"/>
    <!-- Kiri Atas -->
    <line x1="102" y1="85" x2="89" y2="72" stroke="#334155" stroke-width="2.5"/>
    <circle cx="83" cy="66" r="6" fill="#3b82f6"/>

    <!-- Keterangan Anatomi Surfaktan -->
    <rect x="15" y="215" width="245" height="50" rx="5" fill="#ffffff" stroke="#e2e8f0"/>
    <circle cx="30" cy="228" r="5" fill="#3b82f6"/>
    <text x="42" y="231" fill="#1e293b" font-size="8.5" font-weight="bold">Kepala Hidrofilik (Polar):</text>
    <text x="152" y="231" fill="#64748b" font-size="8">berikatan air</text>
    <line x1="25" y1="248" x2="35" y2="248" stroke="#334155" stroke-width="2.5"/>
    <text x="42" y="252" fill="#1e293b" font-size="8.5" font-weight="bold">Ekor Lipofilik (Non-polar):</text>
    <text x="155" y="252" fill="#64748b" font-size="8">larut di minyak</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Kaidah Gas dalam Gas', formula: '\\text{Gas} + \\text{Gas} \\implies \\text{Larutan Sejati (Bukan Koloid)}' },
          { name: 'Definisi Emulsi', formula: '\\text{Cair (terdispersi)} + \\text{Cair (pendispersi)} + \\text{Emulgator} \\implies \\text{Emulsi Stabil}' },
          { name: 'Definisi Sol', formula: '\\text{Padat (terdispersi)} + \\text{Cair (pendispersi)} \\implies \\text{Sol}' },
          { name: 'Definisi Gel', formula: '\\text{Cair (terdispersi)} + \\text{Padat (pendispersi)} \\implies \\text{Gel / Emulsi Padat}' },
        ],
      },
      {
        tag: 'sifat-optik-dan-kinetik-efek-tyndall-dan-gerak-brown',
        tags: ['efek-tyndall', 'hamburan-cahaya', 'gerak-brown', 'fluktuasi-termal', 'persamaan-einstein-smoluchowski'],
        title: 'Konsep Inti 2: Sifat Optik & Kinetik Koloid: Efek Tyndall, Gerak Brown, dan Kestabilan Kinetik',
        summary: 'Mekanisme hamburan cahaya oleh partikel koloid, asal-usul gerak zig-zag Brown dari benturan molekular, dan pembuktian atomik Einstein.',
        content: `Sistem koloid memperlihatkan dua sifat fisik yang paling khas dan menjadi penanda utama pembeda terhadap larutan sejati: **Efek Tyndall** (sifat optik) dan **Gerak Brown** (sifat kinetik).

### 1. Sifat Optik: Hamburan Efek Tyndall
Bila seberkas sinar cahaya tampak dilewatkan melalui larutan sejati (seperti larutan garam dapur), berkas sinar akan melintas lurus tanpa terlihat jalurnya dari samping karena partikel ion berukuran $< 1\\text{ nm}$, jauh lebih kecil daripada panjang gelombang cahaya tampak ($\\lambda = 400 - 700\\text{ nm}$).

Namun, bila berkas sinar tersebut diarahkan ke dalam sistem koloid (seperti air susu atau kanji encer):
- Partikel-partikel koloid berukuran $1 - 100\\text{ nm}$ yang sebanding dengan panjang gelombang cahaya akan **menghamburkan (*scatter*) foton cahaya ke segala arah**.
- Hamburan cahaya ke samping ini membuat **jalur berkas sinar tampak berpendar terang** di dalam cairan koloid. Fenomena ini dinamakan **Efek Tyndall** (ditemukan oleh fisikawan John Tyndall pada tahun 1869).

> **Aplikasi & Fenomena Sehari-hari Efek Tyndall:**
> 1. **Sorot Lampu Mobil di Malam Berkabut:** Berkas sinar lampu tampak jelas membentuk kerucut cahaya yang pekat karena dihamburkan oleh butiran air koloidal di udara kabut.
> 2. **Sinar Matahari Melalui Celah Dedaunan di Hutan Berkabut:** Berkas sinar matahari (*crepuscular rays*) terlihat jelas menembus kanopi pohon akibat hamburan partikel aerosol koloid di udara.
> 3. **Warna Biru Langit Siang Hari:** Menurut **Hukum Hamburan Rayleigh**, intensitas hamburan berbanding terbalik dengan pangkat empat panjang gelombang:
>    $$I_{\\text{hambur}} \\propto \\frac{1}{\\lambda^4}$$
>    Cahaya biru ($\\lambda \\approx 450\\text{ nm}$) dihamburkan oleh molekul dan partikel koloid atmosfer sekitar $5 - 6$ kali lebih intens daripada cahaya merah ($\\lambda \\approx 700\\text{ nm}$), sehingga langit tampak biru cemerlang!

---

### 2. Sifat Kinetik: Gerak Brown (*Brownian Motion*)
Bila sistem koloid diamati di bawah mikroskop ultra (*ultramicroscope*), partikel koloid terlihat bergerak secara terus-menerus mengikuti lintasan patah-patah tak beraturan (zig-zag). Fenomena ini pertama kali diamati oleh ahli botani Robert Brown (1827) pada butir serbuk sari di air.

- **Mekanisme Benturan Termal:** Gerak zig-zag tak beraturan ini terjadi akibat **tumbukan kinetik molekul-molekul medium pendispersi yang tidak seimbang** dari berbagai arah pada waktu yang bersamaan terhadap partikel koloid.
- **Rasional Fisika Einstein (1905):** Albert Einstein merumuskan hubungan kuantitatif pergeseran kuadrat rata-rata partikel Brown ($\\overline{x^2}$) dalam waktu $t$ melalui **Persamaan Einstein-Smoluchowski**:
  $$\\overline{x^2} = \\frac{2 k_B T}{6 \\pi \\eta r} t$$
  di mana $k_B$ adalah tetapan Boltzmann, $T$ temperatur absolut, $\\eta$ viskositas medium, dan $r$ jari-jari partikel koloid.
- **Peran Kunci terhadap Kestabilan Koloid:** Gerak Brown yang tak henti-hentinya ini bekerja melawan percepatan gravitasi bumi ($g$). Selama partikel koloid terus terlempar secara acak oleh energi kinetik termal pelarut, partikel tersebut tidak akan pernah mengendap ke dasar wadah!

---

### 3. Diagram Vektor Visual Efek Tyndall & Lintasan Zig-Zag Gerak Brown

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">KOMPARASI EFEK TYNDALL & LINTASAN GERAK BROWN KOLOID</text>

  <!-- PANEL KIRI: Efek Tyndall (x=15..450) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="440" height="275" rx="8" fill="#090d16" stroke="#334155" stroke-width="1.5"/>
    <text x="220" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Uji Efek Tyndall: Larutan Sejati vs Sistem Koloid</text>

    <!-- Sumber Cahaya (Senter/Laser) -->
    <rect x="15" y="105" width="45" height="30" rx="4" fill="#64748b"/>
    <polygon points="60,110 75,100 75,140 60,130" fill="#facc15"/>
    <text x="37" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">Laser</text>

    <!-- Beker 1: Larutan Sejati (NaCl) -->
    <rect x="95" y="60" width="130" height="135" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="2" opacity="0.8"/>
    <!-- Cairan jernih -->
    <rect x="98" y="75" width="124" height="117" fill="#0284c7" opacity="0.15"/>
    <text x="160" y="52" fill="#cbd5e1" font-size="9.5" font-weight="bold" text-anchor="middle">Larutan Sejati (NaCl)</text>
    <!-- Berkas sinar tak tampak di beker 1 -->
    <line x1="75" y1="120" x2="225" y2="120" stroke="#facc15" stroke-width="1" stroke-dasharray="2 3" opacity="0.4"/>
    <text x="160" y="115" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Tidak dihamburkan</text>
    <text x="160" y="128" fill="#64748b" font-size="7.5" text-anchor="middle">(Berkas tak terlihat)</text>

    <!-- Beker 2: Koloid (Susu / Kanji) -->
    <rect x="275" y="60" width="150" height="135" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" opacity="0.8"/>
    <!-- Cairan koloid berhamburan terang -->
    <rect x="278" y="75" width="144" height="117" fill="#38bdf8" opacity="0.25"/>
    <!-- Berkas kerucut sinar Tyndall pendar emas terang -->
    <polygon points="275,115 425,100 425,140 275,125" fill="#fef08a" opacity="0.65"/>
    <line x1="275" y1="120" x2="425" y2="120" stroke="#facc15" stroke-width="3"/>
    <text x="350" y="52" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">Koloid (Susu / Kanji)</text>
    <text x="350" y="116" fill="#713f12" font-size="8.5" font-weight="bold" text-anchor="middle">EFEK TYNDALL</text>
    <text x="350" y="129" fill="#854d0e" font-size="7.5" font-weight="bold" text-anchor="middle">(Cahaya Dihamburkan)</text>

    <!-- Keterangan bawah -->
    <rect x="20" y="210" width="400" height="50" rx="5" fill="#1e293b" stroke="#334155"/>
    <text x="220" y="228" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">Hamburan Rayleigh: Partikel Koloid (1-100 nm) >> Diameter Foton</text>
    <text x="220" y="246" fill="#94a3b8" font-size="8" text-anchor="middle">Menyebabkan partikel koloid berfungsi sebagai pusat hamburan sekunder.</text>
  </g>

  <!-- PANEL KANAN: Gerak Brown (x=470..745) -->
  <g transform="translate(470, 50)">
    <rect x="0" y="0" width="275" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="137" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Lintasan Acak Gerak Brown</text>

    <!-- Kotak Mikroskopik Pengamatan -->
    <rect x="20" y="38" width="235" height="165" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-dasharray="3 3"/>

    <!-- Lintasan Zig-zag Acak Partikel Koloid -->
    <polyline points="40,160 70,80 115,110 85,150 140,165 170,120 150,65 210,85 190,145 230,120" 
              fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Titik-titik Tumbukan Kinetik -->
    <circle cx="40" cy="160" r="4.5" fill="#2563eb"/>
    <circle cx="70" cy="80" r="3.5" fill="#dc2626"/>
    <circle cx="115" cy="110" r="3.5" fill="#dc2626"/>
    <circle cx="85" cy="150" r="3.5" fill="#dc2626"/>
    <circle cx="140" cy="165" r="3.5" fill="#dc2626"/>
    <circle cx="170" cy="120" r="3.5" fill="#dc2626"/>
    <circle cx="150" cy="65" r="3.5" fill="#dc2626"/>
    <circle cx="210" cy="85" r="3.5" fill="#dc2626"/>
    <circle cx="190" cy="145" r="3.5" fill="#dc2626"/>
    <!-- Posisi Akhir Partikel -->
    <circle cx="230" cy="120" r="6" fill="#16a34a"/>

    <!-- Label Awal & Akhir -->
    <text x="40" y="178" fill="#1d4ed8" font-size="8" font-weight="bold" text-anchor="middle">Start (t=0)</text>
    <text x="230" y="140" fill="#15803d" font-size="8" font-weight="bold" text-anchor="middle">Akhir (t)</text>

    <!-- Keterangan Fisika Bawah -->
    <rect x="20" y="212" width="235" height="50" rx="5" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="137" y="228" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Tumbukan Molekul Pelarut Tak Seimbang</text>
    <text x="137" y="246" fill="#64748b" font-size="8" text-anchor="middle">Menangkal gaya gravitasi: partikel koloid tidak mengendap!</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Hukum Hamburan Rayleigh', formula: 'I_{\\text{hambur}} \\propto \\frac{1}{\\lambda^4}' },
          { name: 'Persamaan Einstein Gerak Brown', formula: '\\overline{x^2} = \\frac{2 k_B T}{6 \\pi \\eta r} t' },
          { name: 'Kriteria Tyndall', formula: '\\text{Diameter Partikel} \\approx \\lambda_{\\text{sinar}} \\implies \\text{Terjadi Hamburan Efek Tyndall}' },
        ],
      },
      {
        tag: 'sifat-listrik-lapis-ganda-potensial-zeta-elektroforesis',
        tags: ['adsorpsi-ion', 'lapis-ganda-listrik', 'lapisan-stern', 'lapisan-difus', 'potensial-zeta', 'elektroforesis'],
        title: 'Konsep Inti 3: Sifat Listrik & Kimia Permukaan: Adsorpsi, Lapis Ganda Listrik (*Stern-Gouy*), Potensial Zeta, dan Elektroforesis',
        summary: 'Mekanisme adsorpsi selektif ion, struktur Electrical Double Layer (lapisan Stern vs lapisan difus), nilai ambang potensial zeta, dan migrasi medan listrik elektroforesis.',
        content: `Partikel koloid memiliki muatan listrik pada permukaannya. Muatan listrik sejenis inilah yang menyebabkan partikel-partikel koloid saling tolak-menolak secara elektrostatik ketika saling mendekat, mencegah terjadinya agregasi dan menjaga sistem koloid tetap stabil.

### 1. Mekanisme Akuisisi Muatan Koloid: Adsorpsi Selektif Ion
Salah satu mekanisme utama timbulnya muatan partikel koloid adalah **adsorpsi selektif (*preferential adsorption*)** ion-ion tertentu dari larutan ke permukaan padatan koloid:
- **Sol Besi(III) Hidroksida ($\\ce{Fe(OH)3}$):**
  Bila sol $\\ce{Fe(OH)3}$ dibuat dengan mereaksikan $\\ce{FeCl3}$ ke dalam air panas, partikel $\\ce{Fe(OH)3}$ akan menyerap ion kation $\\ce{Fe^3+}$ yang berlebih pada permukaannya. Akibatnya, sol $\\ce{Fe(OH)3}$ menjadi **bermuatan positif**.
- **Sol Arsen(III) Sulfida ($\\ce{As2S3}$):**
  Bila sol $\\ce{As2S3}$ dibuat dengan mengalirkan gas $\\ce{H2S}$ ke dalam larutan arsenit encer, partikel $\\ce{As2S3}$ akan menyerap ion anion $\\ce{S^2-}$ pada permukaannya. Akibatnya, sol $\\ce{As2S3}$ menjadi **bermuatan negatif**.

---

### 2. Teori Lapis Ganda Listrik (*Electrical Double Layer* / EDL)
Berdasarkan model modern Stern-Gouy-Chapman, muatan permukaan partikel koloid dinetralkan oleh ion-ion lawan (*counter-ions*) di dalam larutan melalui pembentukan dua lapisan konsentris:
1. **Lapisan Dalam (Lapisan Stern):**
   - Lapisan tipis ion lawan yang terikat sangat kuat secara elektrostatik langsung pada permukaan partikel koloid.
   - Bersifat rigid (*kaku*) dan bergerak bersama partikel koloid saat berpindah.
   - Pada lapisan ini, potensial listrik turun secara linear dan tajam dari $\\psi_0$ (potensial permukaan) menjadi $\\psi_d$.
2. **Lapisan Luar (Lapisan Difus Gouy-Chapman):**
   - Lapisan ion lawan yang tersebar lebih longgar karena adanya gaya acak termal cairan.
   - Pada lapisan ini, potensial listrik meluruh secara eksponensial menuju nol di fasa larutan bebas.
3. **Bidang Geser (*Slipping Plane*) & Potensial Zeta ($\\zeta$):**
   - Ketika partikel koloid bergerak di dalam cairan, sebagian lapisan hidrasi ikut terbawa, dibatasi oleh bidang batas yang disebut *slipping plane*.
   - **Potensial Zeta ($\\zeta$):** Nilai potensial elektrokinetik tepat pada bidang geser (*slipping plane*) tersebut terhadap larutan bebas.

> **Kriteria Kestabilan Koloid Berdasarkan Potensial Zeta ($\\zeta$):**
> - $|zeta| > 30\\text{ mV}$ : Gaya tolak elektrostatik sangat kuat; **koloid sangat stabil**.
> - $15\\text{ mV} < |zeta| < 30\\text{ mV}$ : Kestabilan moderat; rentan flokulasi lambat.
> - $|zeta| < 15\\text{ mV}$ : Gaya tolak lemah dikalahkan gaya tarik van der Waals; **terjadi koagulasi/pengendapan cepat**.

---

### 3. Fenomena Elektrokinetik: Elektroforesis & Elektroosmosis
- **Elektroforesis:** Pergerakan partikel koloid bermuatan di bawah pengaruh medan listrik luar.
  - Partikel koloid bermuatan positif (seperti sol $\\ce{Fe(OH)3}$) akan bergerak menuju kutub negatif (**katoda**).
  - Partikel koloid bermuatan negatif (seperti sol $\\ce{As2S3}$, protein albumin pada pH fisiologis, atau DNA) akan bergerak menuju kutub positif (**anoda**).
  - *Aplikasi:* Elektroforesis gel untuk pemisahan dan identifikasi fragmen DNA/protein, serta alat pengendap jelaga Cottrell.
- **Elektroosmosis:** Pergerakan medium pendispersi menembus membran berpori di bawah pengaruh medan listrik saat partikel koloid dibuat diam/tertahan.

---

### 4. Diagram Struktur Lapis Ganda Listrik & Kurva Peluruhan Potensial Zeta ($\\zeta$)

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">STRUKTUR LAPIS GANDA LISTRIK (EDL) & KURVA POTENSIAL ZETA (ζ)</text>

  <!-- PANEL KIRI: Struktur Fisik EDL (x=15..380) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="365" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="182" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Arsitektur Fisik EDL Partikel Koloid</text>

    <!-- Partikel Koloid Padat (Permukaan Bermuatan Negatif) -->
    <rect x="15" y="40" width="60" height="215" fill="#e2e8f0" stroke="#94a3b8" rx="4"/>
    <text x="45" y="140" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 45 140)">PADATAN KOLOID</text>

    <!-- Muatan Permukaan Negatif (x=70) -->
    <circle cx="70" cy="65" r="6" fill="#ef4444"/><text x="70" y="69" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="70" cy="105" r="6" fill="#ef4444"/><text x="70" y="109" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="70" cy="145" r="6" fill="#ef4444"/><text x="70" y="149" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="70" cy="185" r="6" fill="#ef4444"/><text x="70" y="189" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="70" cy="225" r="6" fill="#ef4444"/><text x="70" y="229" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>

    <!-- Lapisan Stern: Kation Lawan Terikat Kuat (x=105) -->
    <line x1="125" y1="40" x2="125" y2="255" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="105" cy="65" r="6" fill="#3b82f6"/><text x="105" y="69" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="105" cy="105" r="6" fill="#3b82f6"/><text x="105" y="109" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="105" cy="145" r="6" fill="#3b82f6"/><text x="105" y="149" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="105" cy="185" r="6" fill="#3b82f6"/><text x="105" y="189" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="105" cy="225" r="6" fill="#3b82f6"/><text x="105" y="229" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+</text>

    <!-- Bidang Geser / Slipping Plane (x=150) -->
    <line x1="150" y1="40" x2="150" y2="255" stroke="#dc2626" stroke-width="2"/>
    <text x="150" y="35" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Slipping Plane (ζ)</text>

    <!-- Lapisan Difus (x=150..350) -->
    <circle cx="170" cy="80" r="5" fill="#3b82f6"/><text x="170" y="83" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="185" cy="160" r="5" fill="#ef4444"/><text x="185" y="163" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="215" cy="110" r="5" fill="#3b82f6"/><text x="215" y="113" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="240" cy="190" r="5" fill="#3b82f6"/><text x="240" y="193" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="265" cy="75" r="5" fill="#ef4444"/><text x="265" y="78" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="295" cy="135" r="5" fill="#3b82f6"/><text x="295" y="138" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="330" cy="170" r="5" fill="#ef4444"/><text x="330" y="173" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">-</text>

    <!-- Keterangan Zona -->
    <rect x="80" y="260" width="80" height="12" fill="#fef3c7" rx="2"/>
    <text x="120" y="269" fill="#92400e" font-size="8" font-weight="bold" text-anchor="middle">Lapisan Stern</text>
    <rect x="200" y="260" width="120" height="12" fill="#e0f2fe" rx="2"/>
    <text x="260" y="269" fill="#0369a1" font-size="8" font-weight="bold" text-anchor="middle">Lapisan Difus</text>
  </g>

  <!-- PANEL KANAN: Kurva Profil Potensial (x=395..745) -->
  <g transform="translate(395, 50)">
    <rect x="0" y="0" width="350" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="175" y="22" fill="#1e293b" font-size="11.5" font-weight="bold" text-anchor="middle">Profil Peluruhan Potensial Listrik (Ψ vs x)</text>

    <!-- Sumbu Koordinat -->
    <line x1="45" y1="225" x2="330" y2="225" stroke="#64748b" stroke-width="2"/>
    <line x1="45" y1="225" x2="45" y2="40" stroke="#64748b" stroke-width="2"/>
    <text x="335" y="229" fill="#64748b" font-size="9" font-weight="bold">Jarak (x)</text>
    <text x="40" y="35" fill="#64748b" font-size="9" font-weight="bold" text-anchor="end">Potensial (Ψ)</text>

    <!-- Garis Batas Vertikal: Stern & Slipping Plane -->
    <line x1="90" y1="225" x2="90" y2="50" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="130" y1="225" x2="130" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="90" y="238" fill="#b45309" font-size="8" text-anchor="middle">Stern</text>
    <text x="130" y="238" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">Zeta (ζ)</text>

    <!-- Kurva Peluruhan Potensial -->
    <!-- Dari x=45 (Psi_0 = 50) turun linear ke x=90 (Psi_d = 120) lalu eksponensial ke x=310 -->
    <path d="M 45 55 L 90 115 Q 130 150, 180 195 T 310 225" fill="none" stroke="#2563eb" stroke-width="3"/>

    <!-- Titik Kunci Psi_0 dan Zeta -->
    <circle cx="45" cy="55" r="5" fill="#1e40af"/>
    <text x="55" y="60" fill="#1e40af" font-size="9" font-weight="bold">Ψ₀ (Permukaan)</text>

    <!-- Titik Potensial Zeta -->
    <circle cx="130" cy="150" r="5" fill="#dc2626"/>
    <rect x="140" y="138" width="135" height="24" rx="4" fill="#fee2e2" stroke="#ef4444"/>
    <text x="207" y="154" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">Potensial Zeta (ζ = Ψ_shear)</text>

    <!-- Box Kriteria Stabilitas -->
    <rect x="45" y="248" width="285" height="22" rx="4" fill="#ecfdf5" stroke="#10b981"/>
    <text x="187" y="263" fill="#047857" font-size="8.5" font-weight="bold" text-anchor="middle">Ambang Stabil: |ζ| > 30 mV (Tolak-Menolak Kuat)</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Kriteria Potensial Zeta Stabil', formula: '|\\zeta| > 30\\text{ mV} \\implies \\text{Koloid Sangat Stabil (Saling Tolak)}' },
          { name: 'Kriteria Potensial Zeta Koagulasi', formula: '|\\zeta| < 15\\text{ mV} \\implies \\text{Koloid Mengalami Koagulasi / Pengendapan}' },
          { name: 'Arah Migrasi Elektroforesis Positif', formula: '\\text{Sol Bermuatan } (+) \\implies \\text{Bermigrasi ke Katoda } (-)' },
          { name: 'Arah Migrasi Elektroforesis Negatif', formula: '\\text{Sol Bermuatan } (-) \\implies \\text{Bermigrasi ke Anoda } (+)' },
        ],
      },
      {
        tag: 'kestabilan-koagulasi-aturan-schulze-hardy-dan-koloid-pelindung',
        tags: ['koagulasi-koloid', 'aturan-schulze-hardy', 'nilai-flokulasi', 'koloid-liofil-liofob', 'koloid-pelindung'],
        title: 'Konsep Inti 4: Kestabilan Koloid, Koagulasi (Flokulasi), Aturan Schulze-Hardy, dan Koloid Pelindung',
        summary: 'Pembedaan koloid liofil vs liofob, mekanisme destruksi muatan oleh elektrolit, hukum eksponensial valensi Schulze-Hardy, dan peran koloid pelindung.',
        content: `Kestabilan suatu sistem koloid dapat dipertahankan atau dirusak tergantung kebutuhan proses industri. Peristiwa penggumpalan partikel-partikel koloid hingga membentuk endapan kasar makroskopis yang memisah dari medium pendispersinya dinamakan **koagulasi** atau **flokulasi**.

### 1. Pembedaan Mendasar: Koloid Liofil vs Koloid Liofob
Berdasarkan afinitas interaksi antara fase terdispersi dengan medium pendispersinya (terutama bila mediumnya air: **hidrofil** vs **hidrofob**):

| Sifat Karakteristik | Koloid Liofil (Hidrofil) | Koloid Liofob (Hidrofob) |
| :--- | :--- | :--- |
| **Afinitas terhadap Pelarut** | **Sangat kuat;** menyukai cairan medium pendispersi | **Sangat lemah;** tidak menyukai cairan medium pendispersi |
| **Selubung Solvasi (Hidrasi)** | Diselubungi lapisan tebal molekul pelarut (*hydration shell*) | Hanya distabilkan oleh lapisan tipis muatan elektrostatik |
| **Reversibilitas Sistem** | **Reversibel;** jika dikeringkan lalu ditambah pelarut kembali, dapat membentuk sol koloid lagi | **Irreversibel;** jika telah menggumpal/mengendap, tidak dapat membentuk koloid kembali hanya dengan pelarut |
| **Viskositas Cairan** | Jauh lebih kental daripada viskositas medium murninya | Viskositas hampir sama persis dengan medium murninya |
| **Kepekaan terhadap Elektrolit** | **Sangat sukar dikoagulasi;** membutuhkan konsentrasi garam yang sangat pekat (*salting out*) | **Sangat mudah dikoagulasi** bahkan oleh penambahan sedikit elektrolit |
| **Efek Tyndall** | Kurang nyata/lemah (karena indeks bias partikel terhidrasi mirip air) | **Sangat jelas dan berpendar kuat** |
| **Contoh Nyata** | Gelatin, kanji, lem kanji, protein albumin, agar-agar | Sol logam (sol Au), sol belerang, sol $\\ce{Fe(OH)3}$, sol $\\ce{As2S3}$ |

---

### 2. Mekanisme Koagulasi Koloid
Koagulasi dapat dipicu melalui berbagai metode:
1. **Pemanasan atau Pengadukan Intensif:** Meningkatkan energi kinetik partikel sehingga benturan melampaui barier tolakan elektrostatik dan merusak lapisan hidrasi koloid liofil.
2. **Pencampuran Dua Koloid Berlawanan Muatan:** Bila sol $\\ce{Fe(OH)3}$ yang bermuatan positif dicampurkan dengan sol $\\ce{As2S3}$ yang bermuatan negatif dalam proporsi yang setara, kedua muatan akan saling menetralkan seketika, memicu koagulasi total kedua sol.
3. **Penambahan Elektrolit:** Ion-ion elektrolit lawan akan masuk ke lapisan difus dan menekan ketebalan lapis ganda listrik, menurunkan nilai potensial zeta ($|\\zeta| \\to 0$), sehingga gaya tarik van der Waals mendominasi dan partikel menggumpal.

---

### 3. Aturan Schulze-Hardy (*Schulze-Hardy Rule*)
Pengaruh penambahan elektrolit terhadap koagulasi dirumuskan secara kuantitatif melalui **Aturan Schulze-Hardy**:
> **Aturan Schulze-Hardy:**
> 1. Ion elektrolit yang efektif memicu koagulasi adalah ion yang memiliki **tanda muatan berlawanan** dengan muatan partikel koloid.
> 2. Daya koagulasi suatu ion elektrolit meningkat **sangat dramatis seiring bertambahnya valensi (besar muatan) ion tersebut**. Menurut teori Deryagin-Landau-Verwey-Overbeek (DLVO), konsentrasi koagulasi kritis (*Critical Coagulation Concentration* / CCC) berbanding terbalik dengan pangkat enam valensi:
>    $$\\text{CCC} \\propto \\frac{1}{z^6}$$
>    Artinya, kemampuan koagulasi kation terhadap sol bermuatan negatif mengikuti rasio spektakuler:
>    $$\\ce{Al^3+} : \\ce{Ca^2+} : \\ce{Na^+} \\approx 3^6 : 2^6 : 1^6 = 729 : 64 : 1$$
>    Kation $\\ce{Al^3+}$ sekitar **$700$ kali lebih efektif** mengendapkan sol negatif dibanding ion $\\ce{Na^+}$!

---

### 4. Peran Koloid Pelindung (*Protective Colloid*)
Untuk melindungi koloid liofob yang rentan dari koagulasi elektrolit, sering ditambahkan sedikit koloid liofil. Molekul koloid liofil akan teradsorpsi membungkus seluruh permukaan partikel koloid liofob membentuk mantel hidrasi pelindung.
- **Gelatin pada Es Krim:** Mencegah agregasi kristal es dan laktosa kasar, menjaga es krim tetap lembut (*creamy*).
- **Kasein pada Susu:** Melindungi butiran lemak susu agar tidak memisah dari medium air.
- **Zat Warna Tinta:** Dilindungi oleh gom arab atau dekstrin agar tinta tidak mengendap di dalam pena.

---

### 5. Diagram Infografis Koagulasi Tawas & Aturan Schulze-Hardy

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">MEKANISME KOAGULASI TAWAS PDAM & HUKUM SCHULZE-HARDY</text>

  <!-- PANEL KIRI: Koagulasi Partikel Lumpur (x=15..420) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="405" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="202" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Koagulasi Lumpur Air Keruh oleh Tawas Al₂(SO₄)₃</text>

    <!-- Kondisi 1: Partikel Lumpur Stabil Tolak-menolak (Kiri) -->
    <rect x="15" y="40" width="180" height="160" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="105" y="58" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">1. Air Keruh Alami (Stabil)</text>
    <circle cx="65" cy="100" r="22" fill="#a16207" stroke="#713f12"/>
    <text x="65" y="103" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Lumpur (-)</text>
    <circle cx="145" cy="130" r="22" fill="#a16207" stroke="#713f12"/>
    <text x="145" y="133" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Lumpur (-)</text>
    <!-- Panah Tolak Menolak -->
    <path d="M 85 95 Q 105 85, 125 115" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2"/>
    <text x="105" y="90" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">Tolak-Menolak</text>

    <!-- Kondisi 2: Setelah Ditambah Tawas Al3+ (Kanan) -->
    <rect x="210" y="40" width="180" height="160" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="300" y="58" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">2. Netralisasi oleh Al³⁺ (Flok)</text>
    <!-- Flok Besar Mengendap -->
    <ellipse cx="300" cy="120" rx="45" ry="32" fill="#ca8a04" stroke="#854d0e" stroke-width="2"/>
    <text x="300" y="117" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">FLOK BESAR</text>
    <text x="300" y="130" fill="#fef08a" font-size="7.5" text-anchor="middle">(Muatan Dinetralkan)</text>
    <!-- Ion Al3+ menempel -->
    <circle cx="270" cy="98" r="8" fill="#2563eb"/><text x="270" y="101" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Al³⁺</text>
    <circle cx="330" cy="100" r="8" fill="#2563eb"/><text x="330" y="103" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Al³⁺</text>
    <circle cx="300" cy="145" r="8" fill="#2563eb"/><text x="300" y="148" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Al³⁺</text>
    <!-- Panah Gravitasi Mengendap ke Bawah -->
    <line x1="300" y1="155" x2="300" y2="185" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="300" y="195" fill="#15803d" font-size="8" font-weight="bold" text-anchor="middle">Mengendap ke Dasar</text>

    <!-- Kotak Deskripsi Bawah -->
    <rect x="15" y="210" width="375" height="52" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="202" y="228" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Reaksi Hidrolisis Tawas di PDAM:</text>
    <text x="202" y="246" fill="#0284c7" font-size="8" text-anchor="middle">Al³⁺ + 3H₂O ⇌ Al(OH)₃(s) + 3H⁺ (Endapan gelatin menjerat kotoran)</text>
  </g>

  <!-- PANEL KANAN: Hukum Schulze-Hardy (x=435..745) -->
  <g transform="translate(435, 50)">
    <rect x="0" y="0" width="310" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="155" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Efektivitas Kation Schulze-Hardy</text>

    <!-- Bar Chart Eksponensial Daya Koagulasi -->
    <!-- Al3+ -->
    <rect x="30" y="55" width="250" height="42" rx="5" fill="#1e40af"/>
    <text x="45" y="80" fill="#ffffff" font-size="11" font-weight="bold">Al³⁺ (z = 3)</text>
    <text x="265" y="80" fill="#facc15" font-size="11" font-weight="bold" text-anchor="end">~ 729 ×</text>

    <!-- Ca2+ -->
    <rect x="30" y="105" width="120" height="42" rx="5" fill="#2563eb"/>
    <text x="45" y="130" fill="#ffffff" font-size="11" font-weight="bold">Ca²⁺ (z = 2)</text>
    <text x="140" y="130" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="end">~ 64 ×</text>

    <!-- Na+ -->
    <rect x="30" y="155" width="55" height="42" rx="5" fill="#93c5fd"/>
    <text x="40" y="180" fill="#1e3a8a" font-size="10" font-weight="bold">Na⁺ (z=1)</text>
    <text x="75" y="180" fill="#1e3a8a" font-size="9.5" font-weight="bold">1 ×</text>

    <!-- Formula DLVO Box -->
    <rect x="25" y="210" width="260" height="52" rx="5" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="155" y="228" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">Teori DLVO (Daya Koagulasi ∝ z⁶):</text>
    <text x="155" y="247" fill="#b91c1c" font-size="8.5" text-anchor="middle">Al³⁺ (z=3) butuh konsentrasi 700× lebih encer!</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Rasio Schulze-Hardy DLVO', formula: '\\text{Daya Koagulasi} \\propto z^6 \\iff \\text{CCC} \\propto \\frac{1}{z^6}' },
          { name: 'Urutan Kation terhadap Sol Negatif', formula: '\\ce{Al^3+} \\gg \\ce{Ca^2+} \\gg \\ce{Na+}' },
          { name: 'Urutan Anion terhadap Sol Positif', formula: '\\ce{PO4^3-} \\gg \\ce{SO4^2-} \\gg \\ce{Cl-}' },
          { name: 'Prinsip Koloid Pelindung', formula: '\\text{Koloid Liofob} + \\text{Koloid Liofil (Pelindung)} \\implies \\text{Stabil terhadap Koagulasi}' },
        ],
      },
      {
        tag: 'sintesis-koloid-pemurnian-dialisis-dan-misil-cmc',
        tags: ['sintesis-kondensasi', 'sintesis-dispersi', 'dialisis-koloid', 'misil-surfaktan', 'konsentrasi-misil-kritis-cmc'],
        title: 'Konsep Inti 5: Metode Pembuatan Koloid (Kondensasi vs Dispersi), Pemurnian Dialisis, dan Asosiasi Misil (CMC)',
        summary: 'Strategi sintesis koloid via kondensasi molekular atau dispersi makroskopis, teknologi pemisahan dialisis, dan termodinamika agregasi misil surfaktan.',
        content: `Untuk menghasilkan sistem koloid dengan dimensi partikel pada rentang $1 - 100\\text{ nm}$, terdapat dua pendekatan sintesis yang berlawanan arah: **Cara Kondensasi** (menggabungkan partikel kecil seukuran molekul/ion) dan **Cara Dispersi** (memecah partikel makroskopis kasar).

### 1. Metode Pembuatan Koloid

#### A. Cara Kondensasi (Molekular $\\to$ Koloid)
Melibatkan reaksi kimia dalam larutan sejati hingga terbentuk senyawa sukar larut yang teragregasi menjadi partikel koloid:
1. **Reaksi Hidrolisis:**
   - Pembuatan **sol $\\ce{Fe(OH)3}$**: Meneteskan larutan $\\ce{FeCl3}$ jenuh ke dalam air mendidih:
     $$\\ce{FeCl3(aq) + 3H2O(l) -> Fe(OH)3(koloid) + 3HCl(aq)}$$
2. **Reaksi Redoks:**
   - Pembuatan **sol emas (Au)**: Reduksi garam emas klorida ($\\ce{HAuCl4}$) menggunakan reduktor formalin atau tanin:
     $$\\ce{2HAuCl4 + 3HCHO + 3H2O -> 2Au(koloid) + 3HCOOH + 8HCl}$$
3. **Reaksi Dekomposisi Ganda:**
   - Pembuatan **sol $\\ce{As2S3}$**: Mengalirkan gas hidrogen sulfida ke dalam larutan asam arsenit encer:
     $$\\ce{2H3AsO3(aq) + 3H2S(g) -> As2S3(koloid) + 6H2O(l)}$$
4. **Penggantian Pelarut:**
   - Pembuatan sol belerang: Belerang yang mudah larut di dalam etanol dituangkan ke dalam air (di mana belerang sukar larut), memicu presipitasi koloidal belerang seketika.

#### B. Cara Dispersi (Makro $\\to$ Koloid)
1. **Cara Mekanik:** Menggiling butiran padat kasar menggunakan penggiling koloid (*colloid mill*) hingga mencapai skala nanometer, lalu didispersikan ke dalam medium cair (misal pigmen cat tembok, semir sepatu).
2. **Cara Peptisasi:** Memecah kembali endapan segar menjadi partikel koloid dengan menambahkan zat pemecah berupa elektrolit (*peptizing agent*). Contoh: endapan $\\ce{Fe(OH)3}$ dipeptisasi dengan menambahkan sedikit larutan $\\ce{FeCl3}$.
3. **Cara Busur Bredig (*Bredig Arc Method*):** Menggunakan loncatan bunga api listrik tegangan tinggi di antara dua ujung elektroda logam (emas/platina) yang tercelup dalam air es. Logam akan menguap akibat panas busur listrik lalu segera terkondensasi oleh air dingin membentuk sol koloid logam.

---

### 2. Pemurnian Koloid: Metode Dialisis
Koloid yang baru dibuat sering kali masih mengandung ion-ion elektrolit pengotor terlarut yang dapat memicu koagulasi jika dibiarkan.
- **Prinsip Dialisis:** Sistem koloid dimasukkan ke dalam kantung **membran semipermeabel** (seperti selofan atau perkamen) yang kemudian dicelupkan ke dalam bejana berisi air mengalir.
- **Mekanisme Difusi:** Pori-pori membran semipermeabel berukuran cukup besar untuk dilewati oleh molekul air dan ion-ion elektrolit kecil ($< 1\\text{ nm}$), tetapi **terlalu kecil untuk dilewati oleh partikel koloid ($> 1\\text{ nm}$)**. Akibatnya, ion pengotor berdifusi keluar menuju air mengalir, meninggalkan cairan koloid murni di dalam kantung.
- **Aplikasi Medis (Hemodialisis):** Prinsip dialisis merupakan dasar dari mesin cuci darah (*hemodialysis*), di mana darah pasien dialirkan melewati dialyzer semipermeabel untuk menyaring limbah urea dan racun metabolit kecil keluar dari tubuh tanpa kehilangan sel darah dan protein koloidal.

---

### 3. Koloid Asosiasi & Konsentrasi Misil Kritis (*CMC*)
Surfaktan (seperti sabun natrium stearat atau detergen natrium dodesil sulfat / SDS) pada konsentrasi sangat encer berada dalam bentuk molekul/monomer bebas yang larut sempurna (larutan sejati).

Namun, bila konsentrasi surfaktan dinaikkan hingga melampaui ambang batas tertentu yang disebut **Konsentrasi Misil Kritis (*Critical Micelle Concentration* / CMC)**:
- Ekor hidrofobik surfaktan saling merapat ke bagian dalam untuk menghindari kontak dengan air, sementara kepala polar menghadap ke arah pelarut air.
- Terbentuklah agregat bola nano yang terdiri atas $50 - 100$ molekul surfaktan yang dinamakan **misil (*micelle*)**. Misil ini berukuran sekitar $2 - 5\\text{ nm}$, sehingga sistem berubah menjadi **koloid asosiasi**!
- **Mekanisme Pembersihan Kotoran:** Minyak/lemak yang tidak larut air akan terperangkap dan dilarutkan di dalam inti hidrofobik misil sabun, memungkinkan kotoran terangkat dan terbilas bersih bersama air.

---

### 4. Diagram Infografis Dialisis & Agregasi Misil Sabun

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
  <!-- Header -->
  <rect x="0" y="0" width="760" height="42" fill="#0f172a" rx="10"/>
  <text x="380" y="26" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">PEMURNIAN KOLOID VIA DIALISIS & STRUKTUR BOLA MISIL SABUN</text>

  <!-- PANEL KIRI: Dialisis (x=15..390) -->
  <g transform="translate(15, 50)">
    <rect x="0" y="0" width="375" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="187" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Bejana Dialisis (Pemisahan Koloid vs Ion Pengotor)</text>

    <!-- Bejana Air Mengalir -->
    <rect x="25" y="45" width="325" height="175" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
    <!-- Aliran Air Masuk & Keluar -->
    <text x="40" y="40" fill="#0369a1" font-size="8.5" font-weight="bold">Air Bersih Masuk ➜</text>
    <text x="330" y="235" fill="#0369a1" font-size="8.5" font-weight="bold" text-anchor="end">➜ Air + Ion Pengotor Keluar</text>

    <!-- Kantung Membran Semipermeabel (x=115, y=65, w=145, h=135) -->
    <rect x="115" y="65" width="145" height="135" rx="20" fill="#ffffff" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2"/>
    <text x="187" y="85" fill="#b45309" font-size="9" font-weight="bold" text-anchor="middle">Membran Semipermeabel</text>

    <!-- Partikel Koloid Besar di Dalam Kantung (Tertahan) -->
    <circle cx="150" cy="115" r="12" fill="#ef4444"/><text x="150" y="118" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Koloid</text>
    <circle cx="190" cy="140" r="14" fill="#ef4444"/><text x="190" y="144" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Koloid</text>
    <circle cx="225" cy="110" r="11" fill="#ef4444"/><text x="225" y="113" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Koloid</text>

    <!-- Ion Pengotor Kecil yang Menembus Keluar Kantung -->
    <circle cx="85" cy="100" r="4" fill="#2563eb"/><text x="85" y="103" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="70" cy="145" r="4" fill="#16a34a"/><text x="70" y="148" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="280" cy="95" r="4" fill="#16a34a"/><text x="280" y="98" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">-</text>
    <circle cx="295" cy="155" r="4" fill="#2563eb"/><text x="295" y="158" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">+</text>

    <!-- Keterangan Selektivitas Pori -->
    <rect x="25" y="240" width="325" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="187" y="256" fill="#475569" font-size="8" text-anchor="middle">Pori membran: meloloskan ion &lt; 1 nm, menahan partikel koloid &gt; 1 nm</text>
  </g>

  <!-- PANEL KANAN: Struktur Misil Sabun (x=405..745) -->
  <g transform="translate(405, 50)">
    <rect x="0" y="0" width="340" height="275" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="170" y="22" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Penjeratan Noda Minyak oleh Bola Misil (CMC)</text>

    <!-- Noda Minyak di Pusat Misil -->
    <circle cx="170" cy="130" r="40" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <text x="170" y="127" fill="#854d0e" font-size="9.5" font-weight="bold" text-anchor="middle">NODA</text>
    <text x="170" y="139" fill="#854d0e" font-size="9.5" font-weight="bold" text-anchor="middle">MINYAK</text>

    <!-- Molekul Sabun Tersusun Radial Menghadap ke Luar -->
    <!-- 8 arah mata angin -->
    <line x1="170" y1="90" x2="170" y2="65" stroke="#334155" stroke-width="2.5"/><circle cx="170" cy="60" r="6" fill="#2563eb"/>
    <line x1="198" y1="102" x2="218" y2="82" stroke="#334155" stroke-width="2.5"/><circle cx="223" cy="77" r="6" fill="#2563eb"/>
    <line x1="210" y1="130" x2="235" y2="130" stroke="#334155" stroke-width="2.5"/><circle cx="240" cy="130" r="6" fill="#2563eb"/>
    <line x1="198" y1="158" x2="218" y2="178" stroke="#334155" stroke-width="2.5"/><circle cx="223" cy="183" r="6" fill="#2563eb"/>
    <line x1="170" y1="170" x2="170" y2="195" stroke="#334155" stroke-width="2.5"/><circle cx="170" cy="200" r="6" fill="#2563eb"/>
    <line x1="142" y1="158" x2="122" y2="178" stroke="#334155" stroke-width="2.5"/><circle cx="117" cy="183" r="6" fill="#2563eb"/>
    <line x1="130" y1="130" x2="105" y2="130" stroke="#334155" stroke-width="2.5"/><circle cx="100" cy="130" r="6" fill="#2563eb"/>
    <line x1="142" y1="102" x2="122" y2="82" stroke="#334155" stroke-width="2.5"/><circle cx="117" cy="77" r="6" fill="#2563eb"/>

    <!-- Deskripsi Bawah -->
    <rect x="15" y="218" width="310" height="46" rx="5" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="170" y="235" fill="#1e293b" font-size="8.5" font-weight="bold" text-anchor="middle">Inti Hidrofobik melarutkan kotoran non-polar;</text>
    <text x="170" y="252" fill="#2563eb" font-size="8.5" font-weight="bold" text-anchor="middle">Permukaan Hidrofilik berikatan dengan pelarut air.</text>
  </g>
</svg>`,
        keyFormulas: [
          { name: 'Kondensasi Hidrolisis Besi(III)', formula: '\\ce{FeCl3 + 3H2O -> Fe(OH)3(koloid) + 3HCl}' },
          { name: 'Kondensasi Redoks Emas', formula: '\\ce{2HAuCl4 + 3HCHO + 3H2O -> 2Au(koloid) + 3HCOOH + 8HCl}' },
          { name: 'Prinsip Dialisis Membran', formula: '\\text{Pori Membran}: r_{\\text{ion}} < r_{\\text{pori}} < r_{\\text{koloid}}' },
          { name: 'Energi Bebas Pembentukan Misil', formula: '\\Delta G^\\circ_{\\text{mic}} = R T \\ln X_{\\text{CMC}}' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'contoh-klasifikasi-koloid-sehari-hari',
        tags: ['identifikasi-koloid', 'fase-terdispersi', 'medium-pendispersi', 'emulgator-sehari-hari'],
        title: 'Contoh Soal 1: Analisis Karakteristik Komparatif & Klasifikasi Jenis Koloid Sehari-hari',
        summary: 'Klasifikasi sistem dispersi fase terdispersi vs medium pendispersi dan analisis molekular emulgator penstabil.',
        content: `### Soal:
Diberikan lima jenis produk rumah tangga dan material lingkungan berikut:
1. **Susu sapi segar**
2. **Mentega / Margarin**
3. **Cat dinding lateks**
4. **Asap cerobong pabrik**
5. **Batu apung (*pumice*)**

**Tentukan untuk masing-masing sistem:**
a. Fase terdispersi dan medium pendispersinya!
b. Nama klasifikasi sistem koloidnya!
c. Mekanisme penstabil atau zat emulgator yang menjaga sistem tersebut tetap homogen!

---

### Pembahasan Terstruktur:

#### 1. Susu Sapi Segar
- **Fase Terdispersi:** Butiran lemak cair (trigliserida).
- **Medium Pendispersi:** Air ($\\ce{H2O}$).
- **Nama Koloid:** **Emulsi Cair (Minyak dalam Air / O/W)**.
- **Zat Penstabil:** Protein fosfat **kasein** bertindak sebagai emulgator alami yang membungkus tetesan lemak susu sehingga tidak menyatu (*koalesen*).

#### 2. Mentega / Margarin
- **Fase Terdispersi:** Tetesan air renik ($\\ce{H2O}$).
- **Medium Pendispersi:** Lemak padat / minyak terhidrogenasi.
- **Nama Koloid:** **Emulsi Padat (Air dalam Minyak / W/O) atau Gel**.
- **Zat Penstabil:** Monogliserida dan digliserida asam lemak serta struktur jejaring kristal trigliserida padat yang memerangkap tetesan air di dalamnya.

#### 3. Cat Dinding Lateks
- **Fase Terdispersi:** Partikel pigmen padatan anorganik ($\\ce{TiO2}$ untuk warna putih) dan polimer akrilik.
- **Medium Pendispersi:** Pelarut cair (air).
- **Nama Koloid:** **Sol Cair**.
- **Zat Penstabil:** Surfaktan anionik/non-ionik dan polimer hidrofilik (seperti hidroksietil selulosa) yang memberikan tolakan sterik dan elektrostatik antarpartikel pigmen.

#### 4. Asap Cerobong Pabrik
- **Fase Terdispersi:** Partikel padat karbon / jelaga dan abu terbang (*fly ash*).
- **Medium Pendispersi:** Udara / gas pembakaran ($\\ce{N2, CO2, O2}$).
- **Nama Koloid:** **Aerosol Padat**.
- **Kestabilan:** Bersifat metastabil; partikel karbon membawa muatan elektrostatik yang sejenis saat gesekan di cerobong sehingga tolak-menolak di udara sebelum mengalami koagulasi perlahan.

#### 5. Batu Apung (*Pumice*)
- **Fase Terdispersi:** Gelembung gas vulkanik ($\\ce{H2O, CO2, SO2}$).
- **Medium Pendispersi:** Silikat batuan lava padat.
- **Nama Koloid:** **Busa Padat**.
- **Kestabilan:** Sangat stabil permanen karena medium pendispersi batuan silikat membeku dan mengeras seketika saat erupsi vulkanik menjebak gelembung gas di dalamnya.`,
      },
      {
        tag: 'contoh-aturan-schulze-hardy-koagulasi',
        tags: ['aturan-schulze-hardy', 'nilai-flokulasi', 'koagulasi-elektrolit', 'sol-positif-negatif'],
        title: 'Contoh Soal 2: Evaluasi Kuantitatif Daya Koagulasi & Penerapan Aturan Schulze-Hardy',
        summary: 'Penentuan efektivitas elektrolit koagulasi kation vs anion serta kalkulasi rasio konsentrasi kritis DLVO.',
        content: `### Soal:
Di suatu laboratorium kimia fisik disiapkan dua bejana berisi sistem koloid:
- **Bejana I:** Sol besi(III) hidroksida ($\\ce{Fe(OH)3}$), dibuat dengan meneteskan $\\ce{FeCl3}$ ke air mendidih.
- **Bejana II:** Sol arsen(III) sulfida ($\\ce{As2S3}$), dibuat dengan mereaksikan $\\ce{H3AsO3}$ dan $\\ce{H2S}$.

Tersedia tiga larutan elektrolit dengan konsentrasi masing-masing $0.10\\text{ M}$:
1. **Natrium klorida ($\\ce{NaCl}$)**
2. **Magnesium sulfat ($\\ce{MgSO4}$)**
3. **Aluminium nitrat ($\\ce{Al(NO3)3}$)**
4. **Natrium fosfat ($\\ce{Na3PO4}$)**

**Pertanyaan:**
a. Tentukan muatan permukaan partikel koloid pada Bejana I dan Bejana II beserta alasannya!
b. Untuk mengkoagulasikan sol pada **Bejana I**, urutkan elektrolit yang paling efektif (membutuhkan volume paling sedikit) berdasarkan Aturan Schulze-Hardy!
c. Untuk mengkoagulasikan sol pada **Bejana II**, urutkan kation yang paling efektif dan hitung perbandingan teoretis konsentrasi koagulasi kritis (CCC) kation $\\ce{Al^3+}$, $\\ce{Mg^2+}$, dan $\\ce{Na^+}$ berdasarkan teori DLVO!

---

### Pembahasan Langkah demi Langkah:

#### Langkah 1: Identifikasi Muatan Sol
- **Bejana I ($\\ce{Fe(OH)3}$):** Partikel $\\ce{Fe(OH)3}$ menyerap ion kation $\\ce{Fe^3+}$ yang berlebih pada permukaannya $\\implies$ **Sol Bermuatan Positif $(+)$**.
- **Bejana II ($\\ce{As2S3}$):** Partikel $\\ce{As2S3}$ menyerap ion anion sulfida $\\ce{S^2-}$ pada permukaannya $\\implies$ **Sol Bermuatan Negatif $(-)$**.

---

#### Langkah 2: Evaluasi Koagulasi Bejana I (Sol Bermuatan Positif)
Berdasarkan Aturan Schulze-Hardy, partikel koloid bermuatan positif $(+)$ dikoagulasikan secara efektif oleh **anion bermuatan negatif $(-)$**. Semakin besar valensi muatan anion, semakin tinggi daya koagulasinya:
- Anion pada $\\ce{Na3PO4}$: ion fosfat $\\ce{PO4^3-}$ (valensi $z = 3$).
- Anion pada $\\ce{MgSO4}$: ion sulfat $\\ce{SO4^2-}$ (valensi $z = 2$).
- Anion pada $\\ce{NaCl}$: ion klorida $\\ce{Cl-}$ (valensi $z = 1$).
- Anion pada $\\ce{Al(NO3)3}$: ion nitrat $\\ce{NO3-}$ (valensi $z = 1$).

**Urutan Daya Koagulasi terhadap Bejana I:**
$$\\mathbf{\\ce{Na3PO4} (\\ce{PO4^3-}) \\gg \\ce{MgSO4} (\\ce{SO4^2-}) \\gg \\ce{NaCl} (\\ce{Cl-}) \\approx \\ce{Al(NO3)3} (\\ce{NO3-})}$$
Elektrolit paling efektif adalah **$\\ce{Na3PO4}$**, karena membutuhkan konsentrasi terkecil untuk menetralkan muatan positif sol $\\ce{Fe(OH)3}$.

---

#### Langkah 3: Evaluasi Koagulasi Bejana II (Sol Bermuatan Negatif)
Sol bermuatan negatif $(-)$ dikoagulasikan oleh **kation bermuatan positif $(+)$**:
- Kation pada $\\ce{Al(NO3)3}$: $\\ce{Al^3+}$ (valensi $z = 3$).
- Kation pada $\\ce{MgSO4}$: $\\ce{Mg^2+}$ (valensi $z = 2$).
- Kation pada $\\ce{NaCl}$ dan $\\ce{Na3PO4}$: $\\ce{Na+}$ (valensi $z = 1$).

**Perhitungan Rasio Konsentrasi Koagulasi Kritis (CCC) DLVO:**
Berdasarkan teori DLVO, $\\text{CCC} \\propto \\frac{1}{z^6}$:
- Untuk $\\ce{Na+} (z = 1): \\text{CCC}_1 \\propto \\frac{1}{1^6} = 1$
- Untuk $\\ce{Mg^2+} (z = 2): \\text{CCC}_2 \\propto \\frac{1}{2^6} = \\frac{1}{64} \\approx 0.0156$
- Untuk $\\ce{Al^3+} (z = 3): \\text{CCC}_3 \\propto \\frac{1}{3^6} = \\frac{1}{729} \\approx 0.00137$

**Rasio Konsentrasi Elektrolit Minimum yang Dibutuhkan:**
$$\\text{CCC}(\\ce{Al^3+}) : \\text{CCC}(\\ce{Mg^2+}) : \\text{CCC}(\\ce{Na+}) \\approx \\mathbf{1 : 11.4 : 729}$$
Kation $\\ce{Al^3+}$ membutuhkan konsentrasi sekitar **$729$ kali lebih encer** dibandingkan kation $\\ce{Na+}$ untuk memicu pengendapan sol arsen sulfida!`,
      },
      {
        tag: 'contoh-luas-spesifik-nanokoloid-adsorpsi',
        tags: ['luas-permukaan-spesifik', 'nanopartikel-emas', 'adsorpsi-langmuir', 'energi-antarmuka'],
        title: 'Contoh Soal 3: Kimia Permukaan Nanokoloid: Perhitungan Luas Permukaan Spesifik & Kapasitas Adsorpsi',
        summary: 'Kalkulasi matematis ledakan luas permukaan partikel nanometer dan kapasitas adsorpsi molekular monolayer.',
        content: `### Soal:
Sebuah kubus emas padat ($\\ce{Au}$) murni dengan massa $m = 19.3\\text{ gram}$ memiliki massa jenis $\\rho = 19.3\\text{ g/cm}^3$. Kubus tersebut mula-mula memiliki panjang rusuk $L_0 = 1.0\\text{ cm}$.

Kubus emas tersebut kemudian diproses menggunakan teknologi Busur Bredig sehingga terdispersi sempurna menjadi partikel-partikel koloid emas berbentuk kubus nanometer yang seragam dengan panjang rusuk $L = 10.0\\text{ nm}$ ($10.0 \\times 10^{-9}\\text{ m}$).

**Hitung:**
a. Luas permukaan awal ($A_0$) kubus emas makro dalam satuan $\\text{m}^2$!
b. Jumlah total partikel koloid emas ($N$) yang terbentuk!
c. Luas permukaan total baru ($A_{\\text{total}}$) setelah menjadi koloid, serta rasio peningkatannya ($A_{\\text{total}} / A_0$)!
d. Jika permukaan koloid emas tersebut mampu mengadsorpsi molekul protein sitokrom c dengan luas tapak per molekul $\\sigma = 2.50 \\times 10^{-17}\\text{ m}^2$, tentukan jumlah mol maksimum protein yang dapat diadsorpsi pada lapisan tunggal (*monolayer*) koloid emas tersebut ($N_A = 6.022 \\times 10^{23}\\text{ partikel/mol}$)!

---

### Pembahasan Matematis & Konseptual:

#### Bagian a: Luas Permukaan Awal ($A_0$)
- Rusuk awal: $L_0 = 1.0\\text{ cm} = 1.0 \\times 10^{-2}\\text{ m}$.
- Luas permukaan 6 sisi kubus:
  $$A_0 = 6 \\times L_0^2 = 6 \\times (1.0 \\times 10^{-2}\\text{ m})^2 = \\mathbf{6.0 \\times 10^{-4}\\text{ m}^2} \\quad (6.0\\text{ cm}^2)$$

---

#### Bagian b: Jumlah Partikel Koloid Emas ($N$)
- Volume total emas:
  $$V_{\\text{total}} = \\frac{m}{\\rho} = \\frac{19.3\\text{ g}}{19.3\\text{ g/cm}^3} = 1.0\\text{ cm}^3 = 1.0 \\times 10^{-6}\\text{ m}^3$$
- Volume satu partikel koloid kubus berusuk $L = 10.0\\text{ nm} = 1.0 \\times 10^{-8}\\text{ m}$:
  $$V_{\\text{partikel}} = L^3 = (1.0 \\times 10^{-8}\\text{ m})^3 = 1.0 \\times 10^{-24}\\text{ m}^3$$
- Jumlah partikel koloid $N$:
  $$N = \\frac{V_{\\text{total}}}{V_{\\text{partikel}}} = \\frac{1.0 \\times 10^{-6}\\text{ m}^3}{1.0 \\times 10^{-24}\\text{ m}^3} = \\mathbf{1.0 \\times 10^{18}\\text{ partikel}}$$

---

#### Bagian c: Luas Permukaan Total Koloid ($A_{\\text{total}}$) & Rasio Peningkatan
- Luas permukaan satu partikel koloid:
  $$A_{\\text{partikel}} = 6 \\times L^2 = 6 \\times (1.0 \\times 10^{-8}\\text{ m})^2 = 6.0 \\times 10^{-16}\\text{ m}^2$$
- Luas permukaan total seluruh partikel:
  $$A_{\\text{total}} = N \\times A_{\\text{partikel}} = (1.0 \\times 10^{18}) \\times (6.0 \\times 10^{-16}\\text{ m}^2) = \\mathbf{600\\text{ m}^2}$$
- Rasio peningkatan luas permukaan:
  $$\\frac{A_{\\text{total}}}{A_0} = \\frac{600\\text{ m}^2}{6.0 \\times 10^{-4}\\text{ m}^2} = \\mathbf{1.0 \\times 10^6 \\text{ kali}} \\quad (\\text{Satu Juta Kali Lipat!})$$

---

#### Bagian d: Kapasitas Adsorpsi Maksimum Protein Monolayer
- Luas tapak satu molekul protein: $\\sigma = 2.50 \\times 10^{-17}\\text{ m}^2$.
- Jumlah maksimum molekul protein yang dapat menempel pada permukaan koloid:
  $$N_{\\text{molekul}} = \\frac{A_{\\text{total}}}{\\sigma} = \\frac{600\\text{ m}^2}{2.50 \\times 10^{-17}\\text{ m}^2} = 2.40 \\times 10^{19}\\text{ molekul}$$
- Konversi ke satuan mol protein:
  $$n_{\\text{protein}} = \\frac{N_{\\text{molekul}}}{N_A} = \\frac{2.40 \\times 10^{19}}{6.022 \\times 10^{23}\\text{ mol}^{-1}} = \\mathbf{3.985 \\times 10^{-5}\\text{ mol}} \\quad (\\approx 39.85\\text{ }\\mu\\text{mol})$$

> **Wawasan Konseptual:**
> Dari padatan masif yang hanya mampu mengadsorpsi pecahan pikomol, dispersi ke skala koloidal meningkatkan kapasitas adsorpsi menjadi puluhan mikromol! Inilah sebabnya material koloid dan nanopartikel menjadi katalis heterogen dan pengangkut obat (*drug delivery*) yang luar biasa efektif.`,
      },
      {
        tag: 'contoh-termodinamika-cmc-misil-surfaktan',
        tags: ['termodinamika-koloid', 'cmc-surfaktan', 'tegangan-permukaan', 'energi-bebas-gibbs-misil', 'osn-level'],
        title: 'Contoh Soal 4: Termodinamika Koloid Asosiasi: Penentuan CMC & Energi Bebas Pembentukan Misil Surfaktan',
        summary: 'Analisis kurva tegangan permukaan, penentuan kelebihan permukaan Gibbs, luas molekul dan energi bebas Gibbs misil.',
        content: `### Soal:
Tegangan permukaan ($\\gamma$) larutan berair dari suatu surfaktan anionik natrium dodesil sulfat (SDS, $M_r = 288.38\\text{ g/mol}$) diukur pada temperatur $T = 298.15\\text{ K}$ ($25^\\circ\\text{C}$) sebagai fungsi dari logaritma konsentrasi molar ($\\log C$).

Diperoleh data eksperimen sebagai berikut:
1. Pada konsentrasi di bawah $C = 8.12 \\times 10^{-3}\\text{ M}$, nilai $\\gamma$ menurun tajam secara linear terhadap $\\log C$ dengan kemiringan:
   $$\\frac{d\\gamma}{d(\\ln C)} = -16.85\\text{ mN/m} = -16.85 \\times 10^{-3}\\text{ N/m}$$
2. Pada konsentrasi di atas $C = 8.12 \\times 10^{-3}\\text{ M}$, nilai tegangan permukaan mendatar konstan pada $\\gamma \\approx 39.5\\text{ mN/m}$.
3. Dari pengukuran hamburan cahaya dinamis (DLS), diketahui bilangan agregasi misil rata-rata adalah $N_{\\text{agg}} = 62$ molekul SDS per butir misil.

*(Diketahui: $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$, kerapatan air murni $\\rho = 1.00\\text{ g/cm}^3$, massa molar air $M_w = 18.015\\text{ g/mol}$)*.

**Tentukan:**
a. Nilai Konsentrasi Misil Kritis (CMC) surfaktan SDS tersebut dalam satuan $\\text{mM}$!
b. Kelebihan permukaan Gibbs ($\\Gamma_{\\text{max}}$) surfaktan pada antarmuka udara-air sesaat sebelum CMC tercapai berdasarkan **Isoterm Adsorpsi Gibbs** untuk surfaktan ionik $1:1$:
   $$\\Gamma_{\\text{max}} = -\\frac{1}{2 R T} \\left(\\frac{d\\gamma}{d\\ln C}\\right)$$
c. Luas area penampang efektif ($a_0$) per molekul surfaktan pada antarmuka jenuh tersebut dalam satuan $\\text{\\AA}^2$ ($1\\text{ \\AA}^2 = 10^{-20}\\text{ m}^2$)!
d. Perubahan energi bebas Gibbs standar pembentukan misil per mol surfaktan ($\\Delta G^\\circ_{\\text{mic}}$) pada $298.15\\text{ K}$ dengan menggunakan model pemisahan fasa semu (*pseudophase separation model*):
   $$\\Delta G^\\circ_{\\text{mic}} = R T \\ln X_{\\text{CMC}}$$
   di mana $X_{\\text{CMC}}$ adalah fraksi mol surfaktan pada titik CMC!

---

### Pembahasan Matematis & Termodinamika Rigor:

#### Bagian a: Penentuan Titik CMC
Titik belok tajam di mana kurva tegangan permukaan berhenti menurun dan mulai mendatar menandai terbentuknya misil koloidal di dalam larutan (karena antarmuka air-udara telah jenuh penuh oleh molekul surfaktan monomer):
$$C_{\\text{CMC}} = 8.12 \\times 10^{-3}\\text{ M} = \\mathbf{8.12\\text{ mM}}$$

---

#### Bagian b: Kelebihan Permukaan Gibbs ($\\Gamma_{\\text{max}}$)
Karena SDS merupakan surfaktan ionik biner $1:1$ ($\\ce{Na+ + DS-}$), faktor $n = 2$ disertakan dalam persamaan isoterm Gibbs:
$$\\Gamma_{\\text{max}} = -\\frac{1}{2 R T} \\left(\\frac{d\\gamma}{d\\ln C}\\right)$$
Substitusikan data:
- $\\frac{d\\gamma}{d\\ln C} = -16.85 \\times 10^{-3}\\text{ N/m}$
- $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$
- $T = 298.15\\text{ K} \\implies 2 R T = 2 \\times 8.314 \\times 298.15 = 4957.6\\text{ J/mol}$

$$\\Gamma_{\\text{max}} = -\\frac{-16.85 \\times 10^{-3}}{4957.6} = \\mathbf{3.40 \\times 10^{-6}\\text{ mol/m}^2}$$

---

#### Bagian c: Luas Penampang Efektif per Molekul Surfaktan ($a_0$)
Luas area yang ditempati oleh satu molekul surfaktan pada antarmuka jenuh dihitung dari:
$$a_0 = \\frac{1}{N_A \\cdot \\Gamma_{\\text{max}}}$$
Substitusikan nilai:
$$a_0 = \\frac{1}{(6.022 \\times 10^{23}\\text{ mol}^{-1}) \\times (3.40 \\times 10^{-6}\\text{ mol/m}^2)} = \\frac{1}{2.047 \\times 10^{18}\\text{ m}^{-2}} = 4.885 \\times 10^{-19}\\text{ m}^2$$
Konversi ke $\\text{\\AA}^2$:
$$a_0 = \\frac{4.885 \\times 10^{-19}\\text{ m}^2}{10^{-20}\\text{ m}^2/\\text{\\AA}^2} = \\mathbf{48.85\\text{ \\AA}^2}$$
*Catatan:* Nilai $48.85\\text{ \\AA}^2$ ini mencerminkan luas kepala polar gugus sulfat ($-\\ce{SO4-}$), yang sangat cocok dengan data difraksi sinar-X literatur.

---

#### Bagian d: Perubahan Energi Bebas Gibbs Pembentukan Misil ($\\Delta G^\\circ_{\\text{mic}}$)
1. **Hitung Konsentrasi Molal Pelarut Air:**
   Dalam $1\\text{ Liter}$ larutan encer ($1000\\text{ gram}$ air):
   $$n_{\\ce{H2O}} = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\text{ mol}$$
2. **Fraksi Mol Surfaktan pada CMC ($X_{\\text{CMC}}$):**
   $$X_{\\text{CMC}} = \\frac{C_{\\text{CMC}}}{C_{\\text{CMC}} + n_{\\ce{H2O}}} \\approx \\frac{8.12 \\times 10^{-3}}{55.51} = 1.463 \\times 10^{-4}$$
3. **Kalkulasi $\\Delta G^\\circ_{\\text{mic}}$:**
   $$\\Delta G^\\circ_{\\text{mic}} = R T \\ln X_{\\text{CMC}}$$
   $$\\ln(1.463 \\times 10^{-4}) = -8.830$$
   $$\\Delta G^\\circ_{\\text{mic}} = (8.314\\text{ J/(mol}\\cdot\\text{K)}) \\times (298.15\\text{ K}) \\times (-8.830) = -21889\\text{ J/mol} = \\mathbf{-21.89\\text{ kJ/mol}}$$

> **Analisis Termodinamika:**
> Nilai $\\Delta G^\\circ_{\\text{mic}} = -21.89\\text{ kJ/mol} < 0$ (spontan). Pembentukan misil didorong secara termodinamika oleh **Efek Hidrofobik (*Hydrophobic Effect*)**: ketika ekor hidrokarbon berkumpul di bagian dalam misil, molekul-molekul air yang tadinya membentuk sangkar kaku teratur di sekeliling rantai non-polar menjadi bebas kembali, menghasilkan **lonjakan entropi pelarut ($\\Delta S > 0$)** yang sangat positif!`,
      },
    ],
  },
];

export const SMA_MATERIALS_FASE_F1: SmaMaterialItem[] = BASE_SMA_MATERIALS_FASE_F1.map((mat) => ({
  ...mat,
  prerequisites: mat.prerequisites.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_F1[b.tag],
  })),
  core_concepts: mat.core_concepts.map((b) => ({
    ...b,
    checkpointQuizzes: b.checkpointQuizzes || CHECKPOINTS_FASE_F1[b.tag],
  })),
  worked_examples: mat.worked_examples,
}));
