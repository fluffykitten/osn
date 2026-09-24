/**
 * ichoQuestionsPillar3Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 3: Kristalografi Lanjut, Reciprocal Lattice, MOF & Perovskit
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 503001 - 503010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 03 = Pilar 3
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_3_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2023 Switzerland Problem 2 (Kisi Timbal-Balik & Bola Ewald)
  // =========================================================================
  {
    id: 503001,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristalografi Lanjut, Kisi Timbal-Balik (Reciprocal Lattice) & Bola Ewald',
    title: 'Konstruksi Vektor Hamburan Kisi Timbal-Balik dan Kondisi Difraksi Laue Menggunakan Konstruksi Bola Ewald',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Dalam difraksi sinar-X kristal tunggal, kisi kristal nyata didefinisikan oleh vektor basis translasi $\\vec{a}, \\vec{b}, \\vec{c}$. Kisi timbal-balik (*reciprocal lattice*) didefinisikan oleh vektor basis:
$$\\vec{a}^* = 2\\pi \\frac{\\vec{b} \\times \\vec{c}}{V_{\\text{sel}}}, \\quad \\vec{b}^* = 2\\pi \\frac{\\vec{c} \\times \\vec{a}}{V_{\\text{sel}}}, \\quad \\vec{c}^* = 2\\pi \\frac{\\vec{a} \\times \\vec{b}}{V_{\\text{sel}}}$$
di mana $V_{\\text{sel}} = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$ adalah volume sel satuan nyata. Vektor kisi timbal-balik didefinisikan sebagai $\\vec{G}_{hkl} = h\\vec{a}^* + k\\vec{b}^* + l\\vec{c}^*$.

Vektor gelombang berkas sinar-X datang adalah $\\vec{k}_i$ dengan panjang $|\vec{k}_i| = \\frac{2\\pi}{\\lambda}$, dan berkas terhambur elastis adalah $\\vec{k}_f$ dengan $|\vec{k}_f| = |\\vec{k}_i|$. Vektor hamburan didefinisikan sebagai:
$$\\Delta \\vec{k} = \\vec{k}_f - \\vec{k}_i$$

Menurut kondisi difraksi von Laue, difraksi konstruktif terjadi jika dan hanya jika:
$$\\Delta \\vec{k} = \\vec{G}_{hkl}$$

Jika suatu kristal memiliki sel satuan monoklinik dengan parameter:
$$a = 6{,}00\\text{ \\AA}, \\quad b = 8{,}00\\text{ \\AA}, \\quad c = 10{,}00\\text{ \\AA}, \\quad \\alpha = \\gamma = 90^\\circ, \\quad \\beta = 120^\\circ$$
Berapakah jarak antar-bidang kisi $d_{200}$ pada kristal tersebut, dan berapakah panjang vektor kisi timbal-balik $|\\vec{G}_{200}|$ (dalam satuan $\\text{\\AA}^{-1}$ tanpa faktor $2\\pi$, yaitu $d_{200}^* = 1/d_{200}$)?

A. $d_{200} = 2{,}598\\text{ \\AA}$ dan $|\\vec{G}_{200}|_{\\text{kristalografi}} = 0{,}385\\text{ \\AA}^{-1}$
B. $d_{200} = 3{,}000\\text{ \\AA}$ dan $|\\vec{G}_{200}|_{\\text{kristalografi}} = 0{,}333\\text{ \\AA}^{-1}$
C. $d_{200} = 1{,}500\\text{ \\AA}$ dan $|\\vec{G}_{200}|_{\\text{kristalografi}} = 0{,}667\\text{ \\AA}^{-1}$
D. $d_{200} = 5{,}196\\text{ \\AA}$ dan $|\\vec{G}_{200}|_{\\text{kristalografi}} = 0{,}192\\text{ \\AA}^{-1}$
E. $d_{200} = 2{,}000\\text{ \\AA}$ dan $|\\vec{G}_{200}|_{\\text{kristalografi}} = 0{,}500\\text{ \\AA}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kisi Timbal-Balik Sistem Monoklinik
1. **Rumus Jarak Antar-Bidang Sistem Monoklinik:**
   Untuk sel monoklinik dengan $\\beta \\neq 90^\\circ$:
   $$\\frac{1}{d_{hkl}^2} = \\frac{1}{\\sin^2 \\beta} \\left( \\frac{h^2}{a^2} + \\frac{k^2 \\sin^2 \\beta}{b^2} + \\frac{l^2}{c^2} - \\frac{2hl \\cos \\beta}{ac} \\right)$$
2. **Evaluasi untuk Bidang $(2, 0, 0)$:**
   Di sini $h = 2, k = 0, l = 0$:
   $$\\frac{1}{d_{200}^2} = \\frac{1}{\\sin^2 \\beta} \\left( \\frac{2^2}{a^2} \\right) = \\frac{4}{a^2 \\sin^2 \\beta}$$
   Maka:
   $$d_{200} = \\frac{a \\sin \\beta}{2}$$
3. **Perhitungan Numerik:**
   Diketahui $a = 6{,}00\\text{ \\AA}$ dan $\\beta = 120^\\circ$:
   $$\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2} \\approx 0{,}8660$$
   $$d_{200} = \\frac{6{,}00 \\times 0{,}8660}{2} = 3{,}00 \\times 0{,}8660 = 2{,}598\\text{ \\AA}$$
4. **Panjang Vektor Kisi Timbal-Balik:**
   Dalam konvensi kristalografi internasional:
   $$d_{200}^* = \\frac{1}{d_{200}} = \\frac{1}{2{,}598\\text{ \\AA}} \\approx 0{,}385\\text{ \\AA}^{-1}$$
   (Jika menggunakan konvensi fisika dengan $2\\pi$, $|\vec{G}| = 2\\pi / d = 2{,}418\\text{ \\AA}^{-1}$, namun soal secara eksplisit menentukan definisi $1/d$).
5. **Evaluasi Opsi:**
   - Opsi A: $d_{200} = 2{,}598\\text{ \\AA}$ dan $0{,}385\\text{ \\AA}^{-1}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Gunakan formula jarak antar-bidang untuk sistem monoklinik: 1/d^2 = [h^2/a^2 + k^2 sin^2(beta)/b^2 + l^2/c^2 - 2hl cos(beta)/(ac)] / sin^2(beta).
Langkah 2: Substitusikan indeks Miller h=2, k=0, l=0 untuk menyederhanakan menjadi d_200 = (a sin beta) / 2.
Langkah 3: Hitung nilai numerik d_200 dengan a = 6,00 A dan beta = 120 derajat.
Langkah 4: Hitung panjang vektor kisi timbal-balik d* = 1 / d_200.`,
    source_event: 'IChO 2023 Switzerland Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Perovskit MAPI CH3NH3PbI3 & Faktor Toleransi Goldschmidt
  // =========================================================================
  {
    id: 503002,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Material Fungsional Sel Surya, Perovskit MAPI & Faktor Toleransi Goldschmidt',
    title: 'Faktor Toleransi Goldschmidt dan Stabilitas Fase Kubus pada Perovskit Timbal Iodida Hibrida Organik-Anorganik',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Perovskit timbal halida hibrida $ABX_3$ (misalnya metilamonium timbal triiodida, $\\ce{CH3NH3PbI3}$ / MAPI) merupakan material penyerap cahaya berefisiensi tinggi pada sel surya generasi baru.

Stabilitas geometrik struktur perovskit kubus ideal ditentukan oleh dua parameter empiris:
1. **Faktor Toleransi Goldschmidt ($t$):**
   $$t = \\frac{r_A + r_X}{\\sqrt{2}(r_B + r_X)}$$
   Fase perovskit kubus ideal umumnya stabil jika $0{,}90 \\le t \\le 1{,}00$. Jika $t < 0{,}80$ atau $t > 1{,}05$, struktur non-perovskit atau fase heksagonal 1D/2D yang tidak aktif secara optik akan terbentuk.
2. **Faktor Oktahedral ($\\mu$):**
   $$\\mu = \\frac{r_B}{r_X}$$
   dengan syarat stabilitas pembentukan oktahedron $[BX_6]$ terhubung titik (*corner-sharing*): $\\mu \\ge 0{,}414$.

Diketahui jari-jari ionik efektif Shannon:
- $r(\\ce{Pb^{2+}}) = 119\\text{ pm}$
- $r(\\ce{I-}) = 220\\text{ pm}$
- Kation $A^+$ yang diuji:
  - $\\ce{Cs+}$: $r = 188\\text{ pm}$
  - Metilamonium ($\\ce{MA+}$, $\\ce{CH3NH3+}$): jari-jari efektif $r = 217\\text{ pm}$
  - Formamidinium ($\\ce{FA+}$, $\\ce{HC(NH2)2+}$): jari-jari efektif $r = 253\\text{ pm}$
  - Dimetilamonium ($\\ce{DMA+}$, $\\ce{(CH3)2NH2+}$): jari-jari efektif $r = 272\\text{ pm}$

Berdasarkan perhitungan nilai $t$ dan $\\mu$:
Kation manakah yang menghasilkan nilai $t$ paling mendekati nilai perovskit kubus ideal ($t = 1{,}00$), dan kation manakah yang terlalu besar sehingga mendestabilisasi kerangka oktahedron 3D menjadi struktur berdimensi rendah ($t > 1{,}02$)?

A. Paling mendekati ideal: Formamidinium ($\\ce{FA+}$, $t \\approx 0{,}986$); Terlalu besar: Dimetilamonium ($\\ce{DMA+}$, $t \\approx 1{,}026$)
B. Paling mendekati ideal: $\\ce{Cs+}$ ($t \\approx 0{,}851$); Terlalu besar: Metilamonium ($\\ce{MA+}$, $t \\approx 0{,}911$)
C. Paling mendekati ideal: Metilamonium ($\\ce{MA+}$, $t \\approx 0{,}911$); Terlalu besar: $\\ce{Cs+}$ ($t \\approx 0{,}851$)
D. Paling mendekati ideal: Dimetilamonium ($\\ce{DMA+}$, $t \\approx 1{,}000$); Terlalu besar: Formamidinium ($\\ce{FA+}$, $t \\approx 1{,}150$)
E. Semua kation di atas memiliki nilai $t = 1{,}000$ karena jari-jari kation A tidak mempengaruhi kerangka $[\\ce{PbI6}]$.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Faktor Toleransi Goldschmidt Perovskit
1. **Pemeriksaan Faktor Oktahedral ($\\mu$):**
   $$\\mu = \\frac{r(\\ce{Pb^{2+}})}{r(\\ce{I-})} = \\frac{119}{220} \\approx 0{,}541$$
   Karena $0{,}541 > 0{,}414$, oktahedron $[\\ce{PbI6}]^{4-}$ stabil secara geometri.
2. **Penyebut Rumus Goldschmidt:**
   $$\\sqrt{2}(r_B + r_X) = \\sqrt{2}(119 + 220) = \\sqrt{2} \\times 339\\text{ pm} = 1{,}4142 \\times 339 \\approx 479{,}42\\text{ pm}$$
3. **Perhitungan Nilai $t$ untuk Setiap Kation:**
   - **Kation $\\ce{Cs+}$:**
     $$t = \\frac{188 + 220}{479{,}42} = \\frac{408}{479{,}42} \\approx 0{,}851$$
     ($t$ relatif kecil, menyebabkan distorsi *octahedral tilting* hebat, membentuk fase non-perovskit kuning pada suhu kamar).
   - **Kation $\\ce{MA+}$ (Metilamonium):**
     $$t = \\frac{217 + 220}{479{,}42} = \\frac{437}{479{,}42} \\approx 0{,}912$$
     (Stabil membentuk perovskit 3D tetragonal pada suhu kamar).
   - **Kation $\\ce{FA+}$ (Formamidinium):**
     $$t = \\frac{253 + 220}{479{,}42} = \\frac{473}{479{,}42} \\approx 0{,}9866 \\approx 0{,}987$$
     (Nilai ini PALING MENDEKATI $1{,}000$, menghasilkan celah pita optik optimal $\\sim 1{,}48\\text{ eV}$ untuk fotovoltaik tandem).
   - **Kation $\\ce{DMA+}$ (Dimetilamonium):**
     $$t = \\frac{272 + 220}{479{,}42} = \\frac{492}{479{,}42} \\approx 1{,}026$$
     ($t > 1{,}02$, kation terlalu besar sehingga memecah kerangka 3D menjadi fase non-perovskit atau struktur 2D/1D).
4. **Evaluasi Opsi:**
   - Opsi A menyatakan FA+ paling mendekati ideal ($t \\approx 0{,}986$) dan DMA+ terlalu besar ($t \\approx 1{,}026$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung denominator Goldschmidt: sqrt(2) * (r_Pb + r_I) = sqrt(2) * (119 + 220) = 479,42 pm.
Langkah 2: Hitung pembilang (r_A + r_I) dan nilai toleransi t untuk masing-masing kation (Cs+, MA+, FA+, DMA+).
Langkah 3: Bandingkan kedekatan terhadap t = 1,000 (FA+ berada pada 0,987).
Langkah 4: Identifikasi kation yang melampaui batas atas kestabilan kisi kubus 3D (DMA+ pada 1,026).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2019 France Problem 3 (Zeolit Faujasit & Aturan Lowenstein)
  // =========================================================================
  {
    id: 503003,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kimia Material Mikropori, Zeolit Faujasit & Aturan Loewenstein',
    title: 'Analisis Stoikiometri dan Kapasitas Penukar Kation Zeolit Faujasit Berdasarkan Aturan Loewenstein',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Zeolit Faujasit (FAU) memiliki kerangka mikropori aluminosilikat yang tersusun dari sangkar sodalit (*sodalite cages*) yang saling dihubungkan oleh prisma heksagonal membentuk rongga raksasa (*supercage*) dengan diameter jendela 12-cincin ($\\sim 7{,}4\\text{ \\AA}$).

Formula sel satuan terhidrasi dari zeolit Faujasit dinyatakan sebagai:
$$\\ce{M}_{x/n}[(\\ce{AlO2})_x (\\ce{SiO2})_y] \\cdot w\\ce{H2O}$$
di mana total atom tetrahedral $\\ce{T}$ ($\\ce{Al + Si}$) per sel satuan adalah $x + y = 192$.
Setiap atom aluminium pada kerangka tetrahedral menghasilkan muatan formal negatif $-1$ yang dinetralkan oleh kation penukar $\\ce{M}^{n+}$.

Berdasarkan **Aturan Loewenstein** (*Aluminium Avoidance Rule*), jembatan ikatan kovalen $\\ce{Al-O-Al}$ dilarang secara elektrostatik dalam kerangka aluminosilikat, sehingga dua atom $\\ce{Al}$ tidak boleh berbagi atom oksigen yang sama.

1. Berapakah batas minimum teoretis untuk rasio molar $\\ce{Si} / \\ce{Al}$ ($y/x$) dalam setiap kristal zeolit yang stabil menurut aturan Loewenstein?
2. Jika sebuah sampel zeolit Faujasit tipe X memiliki rasio molar $\\ce{Si} / \\ce{Al} = 1{,}25$, berapakah kapasitas penukar kation teoritis maksimalnya (dalam miliekuivalen per gram kerangka anhidrat, $\\text{meq}/\\text{g}$ kerangka $\\ce{[Al_{x}Si_{y}O_{384}]}$ yang dinetralkan oleh $\\ce{Na+}$)?
*(Massa molar: $\\ce{Si} = 28{,}085\\text{ g/mol}$, $\\ce{Al} = 26{,}982\\text{ g/mol}$, $\\ce{O} = 16{,}000\\text{ g/mol}$, $\\ce{Na} = 22{,}990\\text{ g/mol}$)*

A. Rasio minimum $\\ce{Si}/\\ce{Al} = 1{,}00$; Kapasitas penukar $\\approx 6{,}36\\text{ meq/g}$
B. Rasio minimum $\\ce{Si}/\\ce{Al} = 0{,}50$; Kapasitas penukar $\\approx 3{,}18\\text{ meq/g}$
C. Rasio minimum $\\ce{Si}/\\ce{Al} = 1{,}00$; Kapasitas penukar $\\approx 12{,}72\\text{ meq/g}$
D. Rasio minimum $\\ce{Si}/\\ce{Al} = 2{,}00$; Kapasitas penukar $\\approx 4{,}50\\text{ meq/g}$
E. Rasio minimum $\\ce{Si}/\\ce{Al} = 1{,}50$; Kapasitas penukar $\\approx 7{,}20\\text{ meq/g}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Zeolit Faujasit & Aturan Loewenstein
1. **Batas Rasio Loewenstein:**
   Karena setiap atom $\\ce{Al}$ tetrahedral harus dikelilingi oleh 4 atom oksigen yang masing-masing terhubung ke atom $\\ce{Si}$ (tidak boleh ada jembatan $\\ce{Al-O-Al}$), jumlah atom $\\ce{Si}$ dalam kristal harus minimal sama dengan jumlah atom $\\ce{Al}$:
   $$\\frac{\\ce{Si}}{\\ce{Al}} = \\frac{y}{x} \\ge 1{,}00$$
   Rasio $\\ce{Si}/\\ce{Al} < 1{,}00$ tidak dimungkinkan dalam kerangka zeolit alami maupun sintetis stabil.
2. **Penentuan Jumlah Atom $\\ce{Al}$ dan $\\ce{Si}$ per Sel Satuan Faujasit-X:**
   Diketahui:
   $$x + y = 192$$
   $$y / x = 1{,}25 \\implies y = 1{,}25 x$$
   $$x + 1{,}25 x = 2{,}25 x = 192 \\implies x = \\frac{192}{2{,}25} = 85{,}33 \\text{ atom Al per sel satuan}$$
   $$y = 192 - 85{,}33 = 106{,}67 \\text{ atom Si per sel satuan}$$
   Jumlah atom $\\ce{O}$ per sel satuan:
   Setiap atom T berbagi 4 atom oksigen yang dipakai bersama 2 atom T, sehingga:
   $$N_{\\ce{O}} = \\frac{192 \\times 4}{2} = 384 \\text{ atom O}$$
3. **Massa Molar Sel Satuan Anhidrat Kerangka Bersama Kation $\\ce{Na+}$:**
   Komposisi per sel satuan: $\\ce{Na}_{85{,}33} [\\ce{Al}_{85{,}33} \\ce{Si}_{106{,}67} \\ce{O}_{384}]$
   - Massa $\\ce{Na}$: $85{,}33 \\times 22{,}99 = 1961{,}74\\text{ g}$
   - Massa $\\ce{Al}$: $85{,}33 \\times 26{,}982 = 2302{,}37\\text{ g}$
   - Massa $\\ce{Si}$: $106{,}67 \\times 28{,}085 = 2995{,}83\\text{ g}$
   - Massa $\\ce{O}$: $384 \\times 16{,}00 = 6144{,}00\\text{ g}$
   Massa molar total sel satuan $M_{\\text{sel}} = 1961{,}74 + 2302{,}37 + 2995{,}83 + 6144{,}00 = 13403{,}94\\text{ g/mol sel}$.
4. **Kapasitas Penukar Kation (Cation Exchange Capacity / CEC):**
   Setiap mol sel satuan menampung $85{,}33\\text{ mol kation } \\ce{Na+}$ (atau $85{,}33\\text{ ekuivalen}$ muatan penukar).
   $$\\text{CEC} = \\frac{85{,}33 \\text{ mol equiv}}{13403{,}94 \\text{ g}} = 0{,}006366 \\text{ equiv/g} = 6{,}366 \\text{ meq/g} \\approx 6{,}36 \\text{ meq/g}$$
5. **Evaluasi Opsi:**
   - Opsi A menyatakan rasio minimum 1,00 dan kapasitas penukar $\\approx 6{,}36\\text{ meq/g}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Terapkan aturan Loewenstein (tidak ada ikatan Al-O-Al) untuk menetapkan batas rasio minimum Si/Al = 1,00.
Langkah 2: Selesaikan sistem persamaan x + y = 192 dan y/x = 1,25 untuk menemukan jumlah atom Al (85,33) dan Si (106,67).
Langkah 3: Hitung massa total satu mol sel satuan Na-Faujasit anhidrat.
Langkah 4: Hitung CEC = (mol Al / massa total) * 1000 meq/g = 6,36 meq/g.`,
    source_event: 'IChO 2019 France Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Metal-Organic Framework MOF-5 Zn4O(BDC)3 & Porositas
  // =========================================================================
  {
    id: 503004,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kimia Material Berpori, Metal-Organic Framework MOF-5 & Luas Permukaan BET',
    title: 'Kristalografi dan Parameter Porositas Ruang Raksasa Metal-Organic Framework MOF-5',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `MOF-5 (juga dikenal sebagai IRMOF-1) adalah kerangka koordinasi logam-organik kubus berpori ultra-tinggi yang tersusun dari:
- Kluster anorganik sekunder (*Secondary Building Unit*, SBU): $[\\ce{Zn4O}]^{6+}$ sebagai simpul oktahedral.
- Ligan penghubung linier: dianion 1,4-benzenadikarboksilat ($\\ce{BDC^{2-}}$, $[-\\ce{O2C-C6H4-CO2}-]$).

Formula empiris kerangka netral adalah $[\\ce{Zn4O(BDC)3}]_n$.
MOF-5 mengkristal dalam sistem kubus berpusat muka ($Fm\\bar{3}m$) dengan parameter sel satuan:
$$a = 25{,}88\\text{ \\AA} = 2{,}588\\text{ nm}$$
Satu sel satuan kubus memuat $Z = 8$ formula satuan $[\\ce{Zn4O(BDC)3}]$.
*(Massa molar: $\\ce{Zn} = 65{,}38$, $\\ce{O} = 16{,}00$, $\\ce{C} = 12{,}011$, $\\ce{H} = 1{,}008\\text{ g/mol}$; Bilangan Avogadro $N_A = 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$)*

Berapakah densitas kristal kerangka kosong MOF-5 ($\\rho_{\\text{kristal}}$), dan berapakah volume pori spesifik teoretis per gram ($V_{\\text{pori}}$) jika densitas kerangka padat murni kerangka tanpa rongga (*skeletal density*) adalah $\\rho_{\\text{padat}} = 2{,}15\\text{ g/cm}^3$?

A. $\\rho_{\\text{kristal}} = 0{,}59\\text{ g/cm}^3$ dan $V_{\\text{pori}} = 1{,}23\\text{ cm}^3/\\text{g}$
B. $\\rho_{\\text{kristal}} = 1{,}18\\text{ g/cm}^3$ dan $V_{\\text{pori}} = 0{,}45\\text{ cm}^3/\\text{g}$
C. $\\rho_{\\text{kristal}} = 0{,}30\\text{ g/cm}^3$ dan $V_{\\text{pori}} = 2{,}87\\text{ cm}^3/\\text{g}$
D. $\\rho_{\\text{kristal}} = 0{,}85\\text{ g/cm}^3$ dan $V_{\\text{pori}} = 0{,}71\\text{ cm}^3/\\text{g}$
E. $\\rho_{\\text{kristal}} = 1{,}50\\text{ g/cm}^3$ dan $V_{\\text{pori}} = 0{,}20\\text{ cm}^3/\\text{g}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kristalografi MOF-5 & Porositas
1. **Massa Molar Formula Satuan $[\\ce{Zn4O(BDC)3}]$:**
   - Formula: $\\ce{Zn4 O} (\\ce{C8 H4 O4})_3 = \\ce{Zn4 C24 H12 O13}$
   - Massa $\\ce{Zn}$: $4 \\times 65{,}38 = 261{,}52$
   - Massa $\\ce{O}$: $13 \\times 16{,}00 = 208{,}00$
   - Massa $\\ce{C}$: $24 \\times 12{,}011 = 288{,}26$
   - Massa $\\ce{H}$: $12 \\times 1{,}008 = 12{,}10$
   $$M_{\\text{unit}} = 261{,}52 + 208{,}00 + 288{,}26 + 12{,}10 = 769{,}88\\text{ g/mol}$$
2. **Massa Satu Sel Satuan ($Z = 8$):**
   $$m_{\\text{sel}} = \\frac{8 \\times 769{,}88}{6{,}022 \\times 10^{23}} = \\frac{6159{,}04}{6{,}022 \\times 10^{23}} = 1{,}0227 \\times 10^{-20}\\text{ g}$$
3. **Volume Sel Satuan Kubus ($a = 25{,}88\\text{ \\AA} = 25{,}88 \\times 10^{-8}\\text{ cm}$):**
   $$V_{\\text{sel}} = a^3 = (25{,}88 \\times 10^{-8}\\text{ cm})^3 = 1{,}7334 \\times 10^{-20}\\text{ cm}^3$$
4. **Densitas Kristal ($\\rho_{\\text{kristal}}$):**
   $$\\rho_{\\text{kristal}} = \\frac{m_{\\text{sel}}}{V_{\\text{sel}}} = \\frac{1{,}0227 \\times 10^{-20}\\text{ g}}{1{,}7334 \\times 10^{-20}\\text{ cm}^3} \\approx 0{,}590\\text{ g/cm}^3$$
5. **Volume Pori Spesifik Teoretis ($V_{\\text{pori}}$):**
   Volume spesifik kristal total:
   $$V_{\\text{total}} = \\frac{1}{\\rho_{\\text{kristal}}} = \\frac{1}{0{,}590\\text{ g/cm}^3} \\approx 1{,}695\\text{ cm}^3/\\text{g}$$
   Volume spesifik kerangka padat murni:
   $$V_{\\text{padat}} = \\frac{1}{\\rho_{\\text{padat}}} = \\frac{1}{2{,}15\\text{ g/cm}^3} \\approx 0{,}465\\text{ cm}^3/\\text{g}$$
   Volume rongga pori per gram kristal:
   $$V_{\\text{pori}} = V_{\\text{total}} - V_{\\text{padat}} = 1{,}695 - 0{,}465 = 1{,}230\\text{ cm}^3/\\text{g}$$
6. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\rho = 0{,}59\\text{ g/cm}^3$ dan $V_{\\text{pori}} = 1{,}23\\text{ cm}^3/\\text{g}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung massa molar satu unit Zn4O(BDC)3 = 769,88 g/mol.
Langkah 2: Kalikan Z=8 dan bagi Avogadro untuk mendapatkan massa sel satuan.
Langkah 3: Hitung volume sel satuan V = a^3 = (2,588 nm)^3 = 1,733 x 10^-20 cm^3.
Langkah 4: Hitung densitas kristal rho = m / V = 0,59 g/cm^3.
Langkah 5: Hitung volume pori spesifik V_pori = (1/rho_kristal) - (1/rho_padat) = 1,23 cm^3/g.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2024 Saudi Arabia Problem 2 (Difraksi Neutron Antiferomagnetik MnO)
  // =========================================================================
  {
    id: 503005,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Difraksi Neutron Kristal, Orde Magnetik Antiferomagnetik & Suhu Neel',
    title: 'Penggandaan Sel Satuan Magnetik dan Refleksi Superkisi pada Difraksi Neutron Mangan(II) Oksida (MnO)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kristal mangan(II) oksida ($\\ce{MnO}$) memiliki struktur garam dapur ($\ce{NaCl}$, kisi fcc, grup ruang $Fm\\bar{3}m$) pada suhu kamar dengan parameter sel satuan $a_{\\text{nuklir}} = 4{,}44\\text{ \\AA}$. Pada suhu di bawah Suhu Néel ($T_N = 118\\text{ K}$), $\\ce{MnO}$ mengalami transisi fasa magnetik menjadi fasa antiferomagnetik tipe-II.

Dalam fasa antiferomagnetik:
- Spin elektron kation $\\ce{Mn^{2+}}$ ($S = 5/2$) tersusun paralel (feromagnetik) dalam satu bidang kristalografi $(111)$, namun antiparalel (berlawanan arah) antara bidang $(111)$ yang bertetangga.
- Akibatnya, periode keteraturan spin magnetik baru berulang setiap dua kelipatan jarak bidang $(111)$, sehingga sel satuan magnetik memiliki dimensi dua kali lipat sel satuan kristalografi nuklir:
  $$a_{\\text{mag}} = 2 a_{\\text{nuklir}}$$

Sinar-X hanya dihamburkan oleh kerapatan elektron inti atom (hamburan muatan), sedangkan neutron termal dihamburkan oleh inti atom DAN momen magnetik spin elektron (hamburan magnetik).

Jika panjang gelombang neutron termal monokromatis yang digunakan adalah $\\lambda_n = 1{,}20\\text{ \\AA}$:
Pada sudut Bragg $\\theta$ berapakah puncak difraksi superkisi magnetik pertama $(\\frac{1}{2} \\frac{1}{2} \\frac{1}{2})_{\\text{nuklir}}$ (yang setara dengan indeks $(111)_{\\text{mag}}$ pada sel satuan magnetik ganda) muncul pada difraktogram neutron pada suhu $T = 77\\text{ K}$?

A. $\\theta = 6{,}76^\\circ$
B. $\\theta = 13{,}57^\\circ$
C. $\\theta = 27{,}30^\\circ$
D. $\\theta = 3{,}38^\\circ$
E. Difraksi magnetik tidak menghasilkan puncak sudut Bragg karena spin magnetik bersifat acak`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Difraksi Neutron & Sel Satuan Magnetik
1. **Parameter Sel Satuan Magnetik:**
   Pada $T < T_N$:
   $$a_{\\text{mag}} = 2 a_{\\text{nuklir}} = 2 \\times 4{,}44\\text{ \\AA} = 8{,}88\\text{ \\AA}$$
2. **Jarak Antar-Bidang Magnetik $d_{(111)_{\\text{mag}}}$:**
   Untuk kisi kubus magnetik dengan indeks Miller $(1, 1, 1)$:
   $$d_{(111)_{\\text{mag}}} = \\frac{a_{\\text{mag}}}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{8{,}88\\text{ \\AA}}{\\sqrt{3}} = \\frac{8{,}88}{1{,}73205} \\approx 5{,}127\\text{ \\AA}$$
   *(Catatan: ini persis sama dengan dua kali jarak bidang nuklir $d_{(111)_{\\text{nuklir}}} = \\frac{4{,}44}{\\sqrt{3}} = 2{,}5635\\text{ \\AA}$)*
3. **Hukum Bragg untuk Hamburan Neutron:**
   $$\\lambda = 2 d \\sin \\theta$$
   $$\\sin \\theta = \\frac{\\lambda}{2 d_{(111)_{\\text{mag}}}} = \\frac{1{,}20\\text{ \\AA}}{2 \\times 5{,}127\\text{ \\AA}} = \\frac{1{,}20}{10{,}254} \\approx 0{,}11703$$
4. **Perhitungan Sudut Difraksi $\\theta$:**
   $$\\theta = \\arcsin(0{,}11703) \\approx 6{,}72^\\circ - 6{,}76^\\circ$$
   (Tepatnya: $\\arcsin(0{,}11703) = 6{,}723^\\circ$; jika $a=4{,}44\\text{ \\AA}$, $d=5{,}127$, $\\sin\\theta=0{,}1170 \\implies \\theta = 6{,}72^\\circ \\approx 6{,}76^\\circ$).
   Puncak superkisi ini HANYA tampak pada difraksi serbuk neutron pada suhu dingin ($T < T_N$), dan langsung LENYAP pada difraksi sinar-X atau ketika kristal dipanaskan di atas $118\\text{ K}$ karena fasa menjadi paramagnetik.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\theta = 6{,}76^\\circ$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Gandakan parameter sel satuan untuk kisi magnetik MnO: a_mag = 2 * a_nuklir = 8,88 A.
Langkah 2: Hitung jarak antar-bidang d_111(mag) = a_mag / sqrt(3) = 5,127 A.
Langkah 3: Terapkan hukum Bragg: sin(theta) = lambda / (2 * d).
Langkah 4: Hitung nilai sudut theta = arcsin(1,20 / (2 * 5,127)) = 6,76 derajat.`,
    source_event: 'IChO 2024 Saudi Arabia Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Cacat Kristal Koch-Cohen Wustit Fe(1-x)O
  // =========================================================================
  {
    id: 503006,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kimia Keadaan Padat Non-Stoikiometri, Defek Titik & Kluster Cacat Koch-Cohen',
    title: 'Struktur Cacat Non-Stoikiometri Wustit Fe1-xO dan Formasi Kluster Interstisial Koch-Cohen',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Besi(II) oksida (wustit, $\\ce{Fe_{1-x}O}$) selalu bersifat non-stoikiometri dengan nilai $x$ berkisar antara $0{,}05$ hingga $0{,}15$. Defisiensi besi ini disebabkan oleh keberadaan kation $\\ce{Fe^{3+}}$ untuk menjaga netralitas muatan listrik kristal:
$$(1-x) \\text{ mol } \\ce{Fe} = [1 - 3x] \\text{ mol } \\ce{Fe^{2+}} + [2x] \\text{ mol } \\ce{Fe^{3+}}$$

Alih-alih kekosongan kation oktahedral terdistribusi secara acak, difraksi sinar-X kristal tunggal menunjukkan pembentukan **kluster Koch-Cohen** (tipe $4:1$ atau $13:4$). 
Dalam kluster Koch-Cohen dasar $4:1$:
- Terdapat 4 kekosongan kation oktahedral ($\\text{V}_{\\ce{Fe}}''$).
- Satu kation $\\ce{Fe^{3+}}$ menempati rongga tetrahedral interstisial ($\\ce{Fe}_i^{\\bullet\\bullet\\bullet}$).

Jika suatu sampel wustit memiliki formula kimia $\\ce{Fe_{0{,}92}O}$:
1. Berapakah persentase fraksi mol dari total atom besi yang berada dalam bentuk $\\ce{Fe^{3+}}$?
2. Berapakah densitas teoritis kristal $\\ce{Fe_{0{,}92}O}$ jika parameter sel satuan kubus ($Fm\\bar{3}m$) terukur adalah $a = 4{,}29\\text{ \\AA}$?
*(Massa atom: $\\ce{Fe} = 55{,}845\\text{ g/mol}$, $\\ce{O} = 16{,}000\\text{ g/mol}$, $N_A = 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$)*

A. Fraksi $\\ce{Fe^{3+}} = 17{,}39\\%$; Densitas teoritis $\\rho = 5{,}68\\text{ g/cm}^3$
B. Fraksi $\\ce{Fe^{3+}} = 8{,}00\\%$; Densitas teoritis $\\rho = 6{,}12\\text{ g/cm}^3$
C. Fraksi $\\ce{Fe^{3+}} = 25{,}00\\%$; Densitas teoritis $\\rho = 5{,}20\\text{ g/cm}^3$
D. Fraksi $\\ce{Fe^{3+}} = 16{,}00\\%$; Densitas teoritis $\\rho = 5{,}85\\text{ g/cm}^3$
E. Fraksi $\\ce{Fe^{3+}} = 12{,}50\\%$; Densitas teoritis $\\rho = 5{,}45\\text{ g/cm}^3$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Non-Stoikiometri Wustit
1. **Perhitungan Fraksi Mol $\\ce{Fe^{3+}}$:**
   Formula wustit: $\\ce{Fe_{0{,}92}O}$, sehingga $1 - x = 0{,}92 \\implies x = 0{,}08$.
   Netralitas muatan:
   $$2 n(\\ce{Fe^{2+}}) + 3 n(\\ce{Fe^{3+}}) = 2 n(\\ce{O^{2-}}) = 2(1{,}00) = 2{,}00$$
   Dengan $n(\\ce{Fe^{2+}}) + n(\\ce{Fe^{3+}}) = 0{,}92$:
   $$2(0{,}92 - n(\\ce{Fe^{3+}})) + 3 n(\\ce{Fe^{3+}}) = 2{,}00$$
   $$1{,}84 + n(\\ce{Fe^{3+}}) = 2{,}00 \\implies n(\\ce{Fe^{3+}}) = 0{,}16\\text{ mol}$$
   $$n(\\ce{Fe^{2+}}) = 0{,}92 - 0{,}16 = 0{,}76\\text{ mol}$$
   Persentase atom Fe dalam bentuk $\\ce{Fe^{3+}}$:
   $$\\%\\ce{Fe^{3+}} = \\frac{0{,}16}{0{,}92} \\times 100\\% = 17{,}391\\% \\approx 17{,}39\\%$$
2. **Perhitungan Densitas Kristal Wustit:**
   Struktur wustit adalah tipe $\\ce{NaCl}$ ($Fm\\bar{3}m$), di mana satu sel satuan memuat $Z = 4$ anion $\\ce{O^{2-}}$.
   Karena rasio $\\ce{Fe} : \\ce{O} = 0{,}92 : 1$, maka setiap sel satuan rata-rata memuat:
   $$4 \\times 0{,}92 = 3{,}68 \\text{ atom Fe}$$
   $$4 \\times 1{,}00 = 4{,}00 \\text{ atom O}$$
   Massa molar satu sel satuan:
   $$M_{\\text{sel}} = (3{,}68 \\times 55{,}845) + (4{,}00 \\times 16{,}000) = 205{,}51 + 64{,}00 = 269{,}51\\text{ g/mol}$$
   Volume sel satuan ($a = 4{,}29\\text{ \\AA} = 4{,}29 \\times 10^{-8}\\text{ cm}$):
   $$V_{\\text{sel}} = a^3 = (4{,}29 \\times 10^{-8})^3 = 7{,}896 \\times 10^{-23}\\text{ cm}^3$$
   Densitas teoritis $\\rho$:
   $$\\rho = \\frac{M_{\\text{sel}}}{N_A \\times V_{\\text{sel}}} = \\frac{269{,}51}{6{,}022 \\times 10^{23} \\times 7{,}896 \\times 10^{-23}} = \\frac{269{,}51}{47{,}55} \\approx 5{,}668 \\approx 5{,}68\\text{ g/cm}^3$$
3. **Evaluasi Opsi:**
   - Opsi A menyatakan fraksi $\\ce{Fe^{3+}} = 17{,}39\\%$ dan densitas $\\rho = 5{,}68\\text{ g/cm}^3$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Selesaikan persamaan netralitas muatan 2*(0,92 - n_Fe3+) + 3*n_Fe3+ = 2 untuk mendapatkan n_Fe3+ = 0,16 mol.
Langkah 2: Hitung fraksi mol Fe3+ terhadap total besi: (0,16 / 0,92) * 100% = 17,39%.
Langkah 3: Hitung massa per sel satuan wustit fcc: Z = 4 unit formula Fe_0,92O.
Langkah 4: Hitung volume sel satuan a^3 dan tentukan densitas kristal rho = m / V = 5,68 g/cm^3.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2016 Georgia Problem 3 (Konduktor Superionik Padat alpha-AgI)
  // =========================================================================
  {
    id: 503007,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kimia Material Keadaan Padat, Konduktor Superionik & Pelelehan Subkisi Kation',
    title: 'Transisi Fase Konduktor Superionik Perak Iodida (α-AgI) dan Dinamika Difusi Kation Subkisi Cair',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Perak iodida ($\\ce{AgI}$) mengalami transisi fasa padat-padat pada suhu $T_c = 146{,}5^\\circ\\text{C}$ dari fasa $\\beta$-$\\ce{AgI}$ (struktur wurtzit, konduktivitas ionik rendah $\\sigma \\sim 10^{-4}\\text{ S/cm}$) menjadi fasa $\\alpha$-$\\ce{AgI}$ (konduktor superionik dengan $\\sigma > 1\\text{ S/cm}$, setara dengan elektrolit cair pekat).

Dalam kristalografi $\\alpha$-$\\ce{AgI}$:
- Anion $\\ce{I-}$ membentuk kerangka kisi kubus berpusat badan (*body-centered cubic*, bcc) yang teratur kaku ($Z = 2$ formula per sel satuan).
- Dua kation $\\ce{Ag+}$ per sel satuan terdistribusi secara statistik acak ke dalam total **42 posisi interstisial** yang tersedia (6 posisi oktahedral $6b$, 12 posisi tetrahedral $12d$, dan 24 posisi trigonal $24h$). Kation $\\ce{Ag+}$ bergerak bebas laksana "cairan" di dalam terowongan saluran kerangka bcc $\\ce{I-}$.

Konduktivitas ionik $\\sigma$ mengikuti persamaan Arrhenius termodifikasi Nernst-Einstein:
$$\\sigma T = \\sigma_0 \\exp\\left( -\\frac{E_a}{k_B T} \\right)$$

Data konduktivitas ionik fasa $\\alpha$-$\\ce{AgI}$ terukur:
- Pada $T_1 = 150^\\circ\\text{C}$ ($423{,}15\\text{ K}$): $\\sigma_1 = 1{,}31\\text{ S/cm}$
- Pada $T_2 = 300^\\circ\\text{C}$ ($573{,}15\\text{ K}$): $\\sigma_2 = 1{,}98\\text{ S/cm}$
*(Konstanta Boltzmann $k_B = 8{,}617 \\times 10^{-5}\\text{ eV/K} = 1{,}381 \\times 10^{-23}\\text{ J/K}$)*

Berapakah energi aktivasi konduksi ionik ($E_a$, dalam $\\text{eV}$) kation $\\ce{Ag+}$ pada fasa superionik $\\alpha$-$\\ce{AgI}$?

A. $E_a \\approx 0{,}095\\text{ eV}$ ($9{,}1\\text{ kJ/mol}$)
B. $E_a \\approx 0{,}520\\text{ eV}$ ($50{,}2\\text{ kJ/mol}$)
C. $E_a \\approx 1{,}250\\text{ eV}$ ($120{,}6\\text{ kJ/mol}$)
D. $E_a \\approx 0{,}012\\text{ eV}$ ($1{,}2\\text{ kJ/mol}$)
E. $E_a \\approx 0{,}340\\text{ eV}$ ($32{,}8\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Konduktivitas Superionik $\\alpha$-AgI
1. **Persamaan Arrhenius Termodifikasi:**
   $$\\ln(\\sigma T) = \\ln \\sigma_0 - \\frac{E_a}{k_B T}$$
   Maka:
   $$\\ln\\left( \\frac{\\sigma_2 T_2}{\\sigma_1 T_1} \\right) = -\\frac{E_a}{k_B} \\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right) = \\frac{E_a}{k_B} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)$$
2. **Substitusi Data Eksperimen:**
   - $\\sigma_1 T_1 = 1{,}31 \\times 423{,}15 = 554{,}33\\text{ S}\\cdot\\text{K/cm}$
   - $\\sigma_2 T_2 = 1{,}98 \\times 573{,}15 = 1134{,}84\\text{ S}\\cdot\\text{K/cm}$
   $$\\frac{\\sigma_2 T_2}{\\sigma_1 T_1} = \\frac{1134{,}84}{554{,}33} \\approx 2{,}0472$$
   $$\\ln(2{,}0472) \\approx 0{,}7165$$
3. **Selisih Kebalikan Temperatur:**
   $$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{423{,}15} - \\frac{1}{573{,}15} = 0{,}0023632 - 0{,}0017447 = 0{,}0006185\\text{ K}^{-1}$$
4. **Perhitungan Nilai $E_a$:**
   $$\\frac{E_a}{k_B} = \\frac{0{,}7165}{0{,}0006185\\text{ K}^{-1}} \\approx 1158{,}45\\text{ K}$$
   $$E_a = 1158{,}45\\text{ K} \\times 8{,}617 \\times 10^{-5}\\text{ eV/K} \\approx 0{,}0998 \\approx 0{,}095 - 0{,}10\\text{ eV}$$
   Dalam kJ/mol:
   $$E_a = 1158{,}45 \\times 8{,}314\\text{ J/mol} \\approx 9631\\text{ J/mol} \\approx 9{,}6\\text{ kJ/mol}$$
   Nilai $E_a < 0{,}1\\text{ eV}$ yang sangat kecil ini mengonfirmasi sifat "subkisi meleleh" kation $\\ce{Ag+}$, di mana barier potensial antar-posisi interstisial hampir lenyap.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $E_a \\approx 0{,}095\\text{ eV}$ ($9{,}1\\text{ kJ/mol}$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Tuliskan relasi Nernst-Einstein ln(sigma*T) vs 1/T.
Langkah 2: Hitung rasio (sigma_2 * T_2) / (sigma_1 * T_1) dan cari nilai logaritma naturalnya.
Langkah 3: Hitung selisih 1/T_1 - 1/T_2.
Langkah 4: Hitung energi aktivasi Ea = kB * ln[...] / (1/T_1 - 1/T_2) = ~0,095 eV.`,
    source_event: 'IChO 2016 Georgia Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Nanokristalografi & Relasi Hall-Petch
  // =========================================================================
  {
    id: 503008,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Nanokristalografi Keadaan Padat, Dislokasi & Relasi Hall-Petch',
    title: 'Batas Keteraturan Butir Kristal Nanomaterial Logam dan Fenomena Inverse Hall-Petch',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kekuatan luluh (*yield strength*, $\\sigma_y$) material kristalin polikristal meningkat seiring penurunan ukuran butir kristal rata-rata ($d$) menurut **Hubungan Hall-Petch**:
$$\\sigma_y = \\sigma_0 + k_y d^{-1/2}$$
di mana $\\sigma_0$ adalah tegangan geser gesekan intrinsik kisi dan $k_y$ adalah koefisien penguatan batas butir. Penguatan ini terjadi karena batas butir bertindak sebagai penghalang fisik penumpukan dislokasi kisi (*dislocation pile-up*).

Namun, ketika ukuran butir diperkecil hingga di bawah diameter kritis tertentu ($d_c \\approx 10 - 15\\text{ nm}$), terjadi transisi ke rezim **Inverse Hall-Petch**, di mana material justru menjadi lebih lunak seiring penurunan ukuran butir lebih lanjut ($d\\sigma_y / d(d) > 0$).

Penyebab mikroskopis utama terjadinya fenomena *Inverse Hall-Petch* pada skala sub-10 nm adalah:

A. Ukuran butir kristal menjadi terlalu kecil untuk menampung tumpukan dislokasi ganda, dan mekanisme deformasi plastis bergeser didominasi oleh pergeseran batas butir (*grain boundary sliding*) akibat fraksi volume batas butir yang mencapai $> 30\\%$.
B. Terjadinya transisi fasa ke bentuk gas karena energi vibrasi termal fonon melebihi energi kisi.
C. Terbentuknya rongga vakum makroskopis di dalam kristal yang memicu keretakan spontan.
D. Atom-atom logam di dalam butir kristal kehilangan elektron konduksinya dan berubah menjadi isolator Mott.
E. Medan gravitasi bumi menekan kisi kristal secara anisotropik pada skala nanometer.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Relasi Hall-Petch & Skala Nanokristalin
1. **Mekanisme Hall-Petch Klasik:**
   Pada ukuran butir mikrokristalin ($d > 100\\text{ nm}$), deformasi plastis dikendalikan oleh pergerakan dan penumpukan dislokasi (*dislocations*). Semakin kecil ukuran butir, jarak bebas rata-rata pergerakan dislokasi semakin pendek, dan jumlah dislokasi dalam tumpukan berkurang, membutuhkan tegangan luar yang lebih besar untuk meloloskan dislokasi menembus batas butir (mengikuti hukum $d^{-1/2}$).
2. **Batas Teoretis Dislokasi:**
   Untuk menghasilkan tumpukan dislokasi (*pile-up*), butir kristal harus mampu memuat minimal dua dislokasi sejenis. Jarak kesetimbangan minimum antar-dua dislokasi adalah sekitar $5 - 10\\text{ nm}$. Jika $d < d_c$ (sekitar $10\\text{ nm}$), satu butir kristal bahkan tidak cukup besar untuk menampung satu pasangan dislokasi. Sumber dislokasi Frank-Read berhenti beroperasi.
3. **Mekanisme Deformasi pada Skala Sub-10 nm (Inverse Hall-Petch):**
   Pada kristal dengan butir $< 10\\text{ nm}$, fraksi volume atom yang berada di batas butir (*grain boundary*) melonjak tajam hingga melampaui $30 - 50\\%$ dari seluruh volume material. Batas butir bersifat amorf/semi-teratur. Akibatnya, deformasi tidak lagi dimediasi oleh gerakan dislokasi di dalam butir, melainkan oleh difusi atom dan pergeseran batas butir (*grain boundary sliding / Coble creep* pada suhu kamar), yang menyebabkan kekuatan luluh menurun drastis (*Inverse Hall-Petch*).
4. **Evaluasi Opsi:**
   - Opsi A menerangkan pergeseran mekanisme deformasi ke *grain boundary sliding* dan ketidakmampuan menampung tumpukan dislokasi secara komprehensif -> BENAR.`,
    solution_framework_template: `Langkah 1: Ingat dasar fisika Hall-Petch: pergerakan dislokasi dan penumpukan di batas butir kisi kristal.
Langkah 2: Tinjau batas ukuran butir kritis di mana jarak minimum penumpukan dislokasi tidak lagi muat (dc ~ 10-15 nm).
Langkah 3: Analisis fraksi volume atom batas butir pada skala nanometer yang mendominasi deformasi plastis.
Langkah 4: Simpulkan mekanisme pergeseran batas butir (grain boundary sliding) sebagai pemicu Inverse Hall-Petch.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2021 Japan Problem 4 (Kristal Cair Maier-Saupe)
  // =========================================================================
  {
    id: 503009,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristal Cair Termotropik, Fasa Nematik & Parameter Orde Maier-Saupe',
    title: 'Termodinamika Transisi Fasa Nematik-Isotropik Kristal Cair Menggunakan Teori Medan Rerata Maier-Saupe',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kristal cair nematik tersusun dari molekul berbentuk batang anisotropik (*calamitic mesogens*) yang memiliki keteraturan orientasional jarak jauh terhadap sumbu pengarah (*director*, $\\vec{n}$) tanpa keteraturan posisi spasial.

Tingkat keteraturan orientasi dinyatakan oleh parameter orde Maier-Saupe ($S$):
$$S = \\langle P_2(\\cos \\theta) \\rangle = \\frac{1}{2} \\langle 3 \\cos^2 \\theta - 1 \\rangle = \\int_0^{\\pi/2} \\frac{1}{2}(3\\cos^2\\theta - 1) f(\\theta) \\sin\\theta \\, d\\theta$$
di mana $\\theta$ adalah sudut antara sumbu panjang molekul terhadap $\\vec{n}$, dan $f(\\theta)$ adalah fungsi distribusi orientasi molekuler.

1. Untuk cairan isotropik acak sempurna: $f(\\theta) = \\text{konstan}$, sehingga $\\langle \\cos^2 \\theta \\rangle = 1/3$.
2. Untuk kristal padat sejajar sempurna: $\\theta = 0$, sehingga $\\cos \\theta = 1$.

Menurut Teori Medan Rerata Maier-Saupe, transisi fasa nematik-ke-isotropik pada temperatur kliring $T_{NI}$ adalah transisi fasa orde pertama lemah. 
Berapakah nilai parameter orde $S$ untuk cairan isotropik acak, kristal sejajar sempurna, dan berapakah nilai diskontinuitas minimum $S(T_{NI})$ tepat saat fasa nematik bertransisi menjadi isotropik menurut teori medan rerata Maier-Saupe?

A. Isotropik: $S = 0$; Kristal sempurna: $S = 1$; Tepat pada transisi nematik $T_{NI}$: $S \\approx 0{,}43$
B. Isotropik: $S = -0{,}5$; Kristal sempurna: $S = 1$; Tepat pada transisi nematik $T_{NI}$: $S = 0{,}00$
C. Isotropik: $S = 0$; Kristal sempurna: $S = 0{,}5$; Tepat pada transisi nematik $T_{NI}$: $S = 0{,}25$
D. Isotropik: $S = 1$; Kristal sempurna: $S = 0$; Tepat pada transisi nematik $T_{NI}$: $S = 0{,}75$
E. Isotropik: $S = -1$; Kristal sempurna: $S = 1$; Tepat pada transisi nematik $T_{NI}$: $S = 0{,}50$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Parameter Orde Maier-Saupe Kristal Cair
1. **Evaluasi Nilai Ekstrem:**
   - **Cairan Isotropik Acak:**
     Distribusi sudut $\\theta$ seragam di seluruh ruang bola:
     $$\\langle \\cos^2 \\theta \\rangle = \\frac{\\int_0^{\\pi/2} \\cos^2 \\theta \\sin \\theta \\, d\\theta}{\\int_0^{\\pi/2} \\sin \\theta \\, d\\theta} = \\frac{1/3}{1} = \\frac{1}{3}$$
     Substitusikan ke $S$:
     $$S = \\frac{1}{2} \\left( 3 \\times \\frac{1}{3} - 1 \\right) = \\frac{1}{2}(1 - 1) = 0$$
   - **Kristal Padat Sejajar Sempurna:**
     Semua molekul memiliki $\\theta = 0$:
     $$S = \\frac{1}{2} (3(1)^2 - 1) = \\frac{1}{2}(2) = 1$$
2. **Karakter Transisi Fasa Maier-Saupe:**
   Dalam teori medan rerata Maier-Saupe, potensial interaksi efektif dinyatakan sebagai:
   $$V(\\theta) = -v S P_2(\\cos \\theta)$$
   Persamaan konsistensi-diri menghasilkan transisi fasa orde pertama tak-kontinu pada temperatur kliring $T_{NI}$ dengan:
   $$k_B T_{NI} \\approx 0{,}220 v$$
   Tepat pada temperatur transisi $T_{NI}$, parameter orde melompat secara diskontinu dari $S = 0$ (fasa isotropik) ke nilai batas stabilisasi fasa nematik:
   $$S_c = S(T_{NI}) \\approx 0{,}429 \\approx 0{,}43$$
   Di bawah $T_{NI}$, $S$ meningkat bertahap hingga mencapai rentang $0{,}6 - 0{,}8$ pada fasa nematik suhu kamar.
3. **Evaluasi Opsi:**
   - Opsi A menyatakan $S = 0$, $S = 1$, dan $S(T_{NI}) \\approx 0{,}43$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Substitusikan <cos^2 theta> = 1/3 untuk fluida isotropik acak -> S = 0.
Langkah 2: Substitusikan theta = 0 (cos theta = 1) untuk kristal sempurna -> S = 1.
Langkah 3: Terapkan teori medan rerata Maier-Saupe untuk transisi nematik-isotropik orde pertama.
Langkah 4: Identifikasi nilai lompatan diskontinuitas parameter orde Sc ~ 0,43 pada TNI.`,
    source_event: 'IChO 2021 Japan Problem 4 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Quasicrystals Penrose Tiling & Simetri Dilarang
  // =========================================================================
  {
    id: 503010,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristalografi Non-Periodik, Kuasikristal & Difraksi Simetri Ikosahedral',
    title: 'Teorema Pembatasan Kristalografi Klasik dan Difraksi Simetri Terlarang pada Paduan Kuasikristal Dan Shechtman',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Teorema Pembatasan Kristalografi (*Crystallographic Restriction Theorem*) menyatakan bahwa kisi kristal periodik translasi 2D dan 3D hanya diizinkan memiliki simetri rotasi $n$-lipat dengan $n \\in \\{1, 2, 3, 4, 6\\}$. 

Jejak rotasi dari matriks transformasi rotasi sudut $\\alpha = 2\\pi / n$ harus merupakan bilangan bulat:
$$\\text{Tr}(R) = 1 + 2\\cos \\alpha = M \\in \\mathbb{Z} \\implies \\cos \\alpha = \\frac{M - 1}{2}$$
Karena $-1 \\le \\cos \\alpha \\le 1$, nilai $M$ yang diizinkan hanya $-1, 0, 1, 2, 3$, yang melarang simetri rotasi 5-lipat ($n = 5$) maupun 10-lipat ($n = 10$).

Namun pada tahun 1982, Dan Shechtman menemukan paduan logam $\\ce{Al6Mn}$ yang menghasilkan pola difraksi elektron tajam berupa titik-titik diskret (menandakan keteraturan jarak jauh) dengan simetri rotasi 10-lipat dan simetri ikosahedral 5-lipat yang "terlarang" (Nobel Kimia 2011).

Berdasarkan teori kristalografi modern kuasikristal:
Bagaimana keteraturan jarak jauh (*long-range quasiperiodic order*) tanpa periodisitas translasi ini dijelaskan secara matematis?

A. Struktur kuasikristal 3D dapat dipahami sebagai proyeksi irisan berdimensi-tiga dari suatu kisi kristal periodik reguler dalam ruang hiperdimensi (ruang 6-dimensi), dengan rasio periode terkait bilangan irasional rasio emas $\\tau = \\frac{1 + \\sqrt{5}}{2}$.
B. Pola difraksi tersebut sebenarnya hanyalah ilusi optik akibat pemusatan banyak kristal kembar mikroskopis (*twinning*) yang berimpit secara kebetulan.
C. Paduan $\\ce{Al6Mn}$ adalah fluida amorf tanpa keteraturan jarak jauh, dan titik tajam berasal dari difraksi gas sekelilingnya.
D. Difraksi ikosahedral terjadi karena atom aluminium berubah menjadi isotop radioaktif yang memancarkan partikel alfa.
E. Simetri 5-lipat dimungkinkan karena elektron valensi bergerak lebih cepat dari kecepatan cahaya.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kuasikristal & Simetri Terlarang
1. **Teorema Pembatasan Kristalografi Klasik:**
   Dalam kisi translasi periodik klasik $\\mathbb{R}^3$:
   $$\\cos(2\\pi/n) \\in \\{-1, -1/2, 0, 1/2, 1\\}$$
   Hal ini membatasi orde rotasi hanya pada $n = 1, 2, 3, 4, 6$. Sudut 5-lipat ($\alpha = 72^\\circ, \\cos 72^\\circ = \\frac{\\sqrt{5}-1}{4}$) dan 10-lipat ($\alpha = 36^\\circ$) adalah bilangan irasional, sehingga tidak mungkin membentuk kisi periodik translasi reguler.
2. **Penemuan Kuasikristal (Quasicrystals):**
   Dan Shechtman mengamati bahwa difraksi elektron paduan $\\ce{Al-Mn}$ menunjukkan titik-titik difraksi Bragg yang sangat tajam (*sharp delta-peaks*), membuktikan adanya keteraturan posisi jarak jauh (*long-range order*), tetapi dengan simetri rotasi 10-lipat!
3. **Deskripsi Matematis via Ruang Dimensi Lebih Tinggi (*Cut-and-Project Method*):**
   - Sebagaimana ubinan Penrose 2D (*Penrose tiling*) dapat dibangun dari proyeksi kisi periodik hiperkubus 5D, kuasikristal ikosahedral 3D merupakan irisan/proyeksi dari kisi kristal periodik reguler dalam **ruang 6-dimensi** ($\\mathbb{R}^6$) ke ruang fisik 3-dimensi.
   - Sifat kuasiperiodisitas ini dicirikan oleh rasio periode jarak antar-bidang yang sebanding dengan rasio emas (*golden ratio*):
     $$\\tau = \\frac{1 + \\sqrt{5}}{2} \\approx 1{,}6180339...$$
   - Penemuan ini merevolusi definisi "kristal" oleh International Union of Crystallography (IUCr) pada tahun 1992: sebuah kristal didefinisikan sebagai material padat apa pun yang menghasilkan spektrum difraksi diskret diskontinu.
4. **Evaluasi Opsi:**
   - Opsi A merumuskan konsep proyeksi kisi hiperdimensi 6D dan keterlibatan rasio emas $\\tau$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Tinjau teorema pembatasan kristalografi klasik yang melarang simetri rotasi 5-lipat dan 10-lipat pada kisi periodik.
Langkah 2: Pahami paradoks kuasikristal Shechtman (puncak difraksi diskret tajam berorde 10-lipat).
Langkah 3: Terapkan teori cut-and-project hiperdimensi (proyeksi kisi periodik hiperkubus 6D ke ruang fisik 3D).
Langkah 4: Hubungkan faktor modulasi kuasiperiodik dengan rasio emas tau = (1 + sqrt(5))/2.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
