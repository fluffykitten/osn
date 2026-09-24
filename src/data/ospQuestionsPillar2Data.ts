/**
 * ospQuestionsPillar2Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 2: Ikatan Kimia Lanjut, Teori Orbital Molekul Poliatomik, Walsh Diagram & Ikatan Khusus
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 302001 - 302010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 02 = Pilar 2
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_2_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 4 (Diagram MO Karbon Dioksida CO2 & Orbital Non-Ikatan)
  // =========================================================================
  {
    id: 302001,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Orbital Molekul (MO) Poliatomik Linear & Karakter Non-Ikatan',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Orbital Molekul HOMO dan Karakter Ikatan pi pada Karbon Dioksida',
    question_text: `Molekul karbon dioksida (\\ce{CO2}) merupakan molekul triatomik linear bervalensi 16 elektron yang memiliki simetri kelompok titik $D_{\\infty h}$.

Berdasarkan teori orbital molekul kualitatif, orbital molekul terisi tertinggi (HOMO) dari molekul \\ce{CO2} adalah sepasang orbital terdegenerasi $1\\pi_g$ yang bersifat ....

A. Non-ikatan (*strictly non-bonding*) yang terlokalisasi sepenuhnya pada orbital $2p$ kedua atom oksigen tanpa keterlibatan orbital atom karbon pusat  
B. Ikatan $\\sigma$ kuat antara orbital $2s$ karbon dan orbital $2p$ oksigen  
C. Anti-ikatan $\\pi^*$ yang melemahkan ikatan rangkap karbon-oksigen  
D. Ikatan $\\pi$ terdelokalisasi di seluruh ketiga atom dengan orde ikatan 2  
E. Non-ikatan yang terlokalisasi murni sebagai pasangan elektron bebas pada atom karbon pusat`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Simetri Orbital Molekul $\\ce{CO2}$:**
   - Atom pusat karbon terletak pada pusat inversi ($i$). Orbital atom karbon: $2s$ ($1\sigma_g^+$), $2p_z$ ($1\sigma_u^+$), dan sepasang $2p_x, 2p_y$ ($1\pi_u$).
   - Dua atom oksigen terminal membentuk kombinasi linear adaptasi simetri (*SALC*):
     - Kombinasi simetris terhadap inversi ($g$): $\pi_g$ ($2p_{x1} - 2p_{x2}$ dan $2p_{y1} - 2p_{y2}$).
     - Kombinasi antisimetris terhadap inversi ($u$): $\pi_u$ ($2p_{x1} + 2p_{x2}$ dan $2p_{y1} + 2p_{y2}$).

2. **Interaksi Orbital dan Terbentuknya HOMO $1\\pi_g$:**
   - Orbital $2p_x, 2p_y$ atom karbon memiliki simetri $\pi_u$, sehingga dapat berinteraksi bertindih dengan SALC $\pi_u$ oksigen membentuk orbital ikatan $1\pi_u$ dan anti-ikatan $2\pi_u^*$.
   - Namun, atom karbon **TIDAK memiliki orbital berkarakter simetri $\pi_g$** pada kulit valensinya!
   - Akibatnya, kombinasi SALC $\pi_g$ dari kedua atom oksigen sama sekali tidak dapat bertindih dengan orbital karbon mana pun, menghasilkan sepasang orbital molekul yang **murni non-ikatan ($1\\pi_g$)**.
   - Sepasang orbital $1\\pi_g$ ini menampung 4 elektron valensi terakhir dan menjadi orbital terisi tertinggi (**HOMO**), terlokalisasi $100\\%$ pada atom-atom oksigen.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan sifat non-ikatan murni HOMO $1\pi_g$ oksigen.
- **B:** HOMO adalah orbital $\pi$, bukan $\sigma$.
- **C:** $1\pi_g$ bersifat non-ikatan, bukan anti-ikatan ($\pi_u^*$).
- **D:** Mengacaukan orbital ikatan terdelokalisasi $1\pi_u$ dengan HOMO $1\pi_g$.
- **E:** Karbon tidak memiliki elektron bebas pada $\\ce{CO2}$.`,
    source_event: 'OSP Kimia 2023 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2023)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSP 2022 No. 5 (Ikatan 3-Pusat 2-Elektron / 3c-2e pada Diboran B2H6)
  // =========================================================================
  {
    id: 302002,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Ikatan 3-Pusat 2-Elektron (3c-2e), Defisiensi Elektron & Struktur Boran',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Karakteristik Ikatan Pisang Tiga Pusat Dua Elektron pada Molekul Diboran',
    question_text: `Diborane (\\ce{B2H6}) merupakan senyawa hidrida boron yang tergolong molekul defisien elektron (*electron-deficient molecule*). Molekul ini memiliki 4 hidrogen terminal ($\\ce{H_t}$) dan 2 hidrogen jembatan ($\\ce{H_b}$).

Pernyataan yang **paling benar** mengenai geometri ikatan dan distribusi elektron pada molekul \\ce{B2H6} adalah ....

A. Ikatan jembatan $\\ce{B-H_b-B}$ merupakan ikatan 3-pusat 2-elektron (3c-2e, ikatan pisang) yang memiliki orde ikatan formal $0{,}5$ per interaksi $\\ce{B-H_b}$, sehingga ikatan jembatan terukur lebih panjang ($133\\text{ pm}$) dibandingkan ikatan terminal $\\ce{B-H_t}$ ($119\\text{ pm}$)  
B. Atom boron mengalami hibridisasi $sp^2$ membentuk struktur planar datar sempurna  
C. Kedua atom boron dihubungkan oleh ikatan kovalen tunggal $\\ce{B-B}$ normal 2-pusat 2-elektron  
D. Keempat atom hidrogen terminal berada pada bidang yang tegak lurus terhadap kedua atom boron  
E. Ikatan jembatan $\\ce{B-H_b-B}$ lebih kuat dan memiliki frekuensi vibrasi inframerah lebih tinggi daripada ikatan $\\ce{B-H_t}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Elektron Valensi Diboran (\\ce{B2H6}):**
   - 2 atom B: $2 \\times 3 = 6$ elektron valensi.
   - 6 atom H: $6 \\times 1 = 6$ elektron valensi.
   - Total elektron valensi = $12$ elektron ($6$ pasang elektron).
   - Untuk menghubungkan 8 atom dengan ikatan kovalen klasik 2-pusat 2-elektron (2c-2e) dibutuhkan minimal 7 ikatan = $14$ elektron. Karena hanya tersedia 12 elektron, molekul ini bersifat **defisien elektron**.

2. **Distribusi Ikatan 2c-2e vs 3c-2e:**
   - 4 ikatan $\\ce{B-H_t}$ terminal menggunakan $4 \\times 2 = 8$ elektron (ikatan kovalen tunggal 2c-2e normal).
   - Tersisa $12 - 8 = 4$ elektron untuk menghubungkan 2 atom B dan 2 atom $\\ce{H_b}$.
   - Terbentuk dua jembatan pisang $\\ce{B-H_b-B}$, masing-masing merupakan **ikatan 3-pusat 2-elektron (3c-2e)**.

3. **Orde dan Panjang Ikatan:**
   - Dalam ikatan 3c-2e, sepasang elektron (2 elektron) terbagi di antara dua ruas ikatan $\\ce{B-H_b}$, sehingga orde ikatan efektifnya adalah $2/4 = 0{,}5$.
   - Akibat orde ikatan yang lebih rendah, ikatan jembatan $\\ce{B-H_b}$ terukur **lebih panjang ($133\\text{ pm}$)** dan lebih lemah dibandingkan ikatan terminal $\\ce{B-H_t}$ ($119\\text{ pm}$, orde ikatan 1).

**Analisis Distraktor:**
- **A:** Benar secara utuh dan ilmiah.
- **B:** Boron terhibridisasi mendekati $sp^3$ tetrahedral terdistorsi, bukan planar $sp^2$.
- **C:** Tidak ada ikatan langsung $\\ce{B-B}$ klasik 2c-2e.
- **D:** Keempat $\\ce{H_t}$ dan kedua atom B berada pada satu bidang datar (bidang molekul utama), sedangkan kedua $\\ce{H_b}$ berada di atas dan di bawah bidang tersebut.
- **E:** Ikatan jembatan lebih lemah sehingga memiliki frekuensi vibrasi lebih rendah.`,
    source_event: 'OSP Kimia 2022 No. 5 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-P 2021 No. 5 (Diagram Walsh Molekul Triatomik AH2)
  // =========================================================================
  {
    id: 302003,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Diagram Walsh & Prediksi Sudut Ikatan Molekul Triatomik AH2',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Prediksi Geometri Molekul Berdasarkan Diagram Walsh Orbital Molekul AH2',
    question_text: `Diagram Walsh menghubungkan perubahan tingkat energi orbital molekul triatomik $\\ce{AH2}$ ketika sudut ikatan $\\ce{H-A-H}$ berubah secara kontinu dari geometri linear ($180^\\circ$, simetri $D_{\\infty h}$) menjadi geometri bengkok ($bent$, simetri $C_{2v}$).

Berdasarkan diagram Walsh orbital molekul:
- Orbital $2\\sigma_g$ (linear) bertransformasi menjadi orbital $2a_1$ (bengkok) yang energinya turun drastis saat sudut ikatan menekuk, karena orbital $2a_1$ memperoleh kontribusi tumpang-tindih ikatan langsung antar-orbital $1s$ hidrogen (karakter $\\ce{H-H}$ bonding) dan hibridisasi $2s-2p_z$.
- Orbital non-ikatan $1\\pi_u$ (linear) terpecah menjadi $1b_1$ (non-ikatan) dan $3a_1$ (yang juga distabilkan oleh penekukan).

Berdasarkan pertimbangan diagram Walsh tersebut, molekul gas berilium hidrida (\\ce{BeH2}) dan molekul air (\\ce{H2O}) berturut-turut mengadopsi geometri ....

A. $\\ce{BeH2}$ linear ($180^\\circ$) dan $\\ce{H2O}$ bengkok ($104{,}5^\\circ$)  
B. $\\ce{BeH2}$ bengkok ($120^\\circ$) dan $\\ce{H2O}$ linear ($180^\\circ$)  
C. Keduanya berbentuk linear ($180^\\circ$)  
D. Keduanya berbentuk bengkok ($bent$)  
E. $\\ce{BeH2}$ berbentuk-T dan $\\ce{H2O}$ berbentuk piramida trigonal`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Elektron Valensi:**
   - $\\ce{BeH2}$: Mengandung $2 + 2(1) = 4$ elektron valensi (2 pasang elektron).
   - $\\ce{H2O}$: Mengandung $6 + 2(1) = 8$ elektron valensi (4 pasang elektron).

2. **Aplikasi Diagram Walsh untuk $\\ce{BeH2}$ (4 Elektron Valensi):**
   - 4 elektron valensi menempati dua orbital terendah: $2\\sigma_g$ dan $1\\sigma_u$.
   - Meskipun orbital $2\\sigma_g$ sedikit distabilkan oleh penekukan ($2a_1$), orbital $1\\sigma_u$ bertransformasi menjadi $1b_2$ yang **mengalami destabilisasi energi yang sangat tajam saat menekuk**.
   - Penurunan kestabilan pada orbital $1b_2$ mendominasi, sehingga untuk sistem 4 elektron valensi, konfigurasi energi terendah dicapai pada sudut ikatan maksimum ($180^\\circ$, **linear**).

3. **Aplikasi Diagram Walsh untuk $\\ce{H2O}$ (8 Elektron Valensi):**
   - Pada molekul dengan 8 elektron valensi, orbital terisi meliputi: $(2a_1)^2 (1b_2)^2 (3a_1)^2 (1b_1)^2$.
   - Pasangan elektron ke-5 dan ke-6 menempati orbital **$3a_1$**.
   - Orbital $3a_1$ mengalami **penurunan energi yang sangat masif saat sudut ikatan menekuk** (dari linear ke bengkok).
   - Penurunan energi orbital $3a_1$ ini jauh melampaui efek destabilisasi $1b_2$, memaksa molekul air mengadopsi struktur **bengkok (*bent*)** dengan sudut ikatan sekitar $104{,}5^\\circ$.

**Analisis Distraktor:**
- **A:** Benar secara kaidah diagram Walsh.
- **B:** Terbalik secara total.
- **C:** Mengabaikan distorsi penekukan kuat akibat pengisian orbital $3a_1$ pada air.
- **D:** Mengabaikan bahwa sistem 4 elektron valensi mempertahankan linearitas.
- **E:** Molekul triatomik $\\ce{AH2}$ tidak mungkin mengadopsi geometri bentuk-T atau piramida.`,
    source_event: 'KSN-P Kimia 2021 No. 5 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSP 2024 No. 4 (Model Ikatan 3c-4e Pimentel-Rundle pada I3- dan XeF2)
  // =========================================================================
  {
    id: 302004,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Model Ikatan 3-Pusat 4-Elektron (3c-4e) Pimentel-Rundle Tanpa Orbital d',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penjelasan Teori Orbital Molekul 3c-4e pada Geometri Linear Ksenon Difluorida (XeF2)',
    question_text: `Model ikatan Lewis klasik menjelaskan struktur linear hipervalen ksenon difluorida (\\ce{XeF2}) melalui hibridisasi $sp^3d$. Namun, perhitungan kimia kuantum modern membuktikan bahwa orbital $d$ berenergi terlalu tinggi untuk berpartisipasi nyata dalam pembentukan ikatan valensi.

Model Pimentel-Rundle menjelaskan ikatan pada \\ce{XeF2} sebagai sistem ikatan 3-pusat 4-elektron (3c-4e) menggunakan orbital kolinear $p$ murni:
- Tiga orbital $p_z$ (satu dari atom pusat $\\ce{Xe}$ dan satu dari masing-masing atom $\\ce{F}$) berinteraksi menghasilkan tiga orbital molekul: ikatan ($\\sigma$), non-ikatan ($\\sigma_n$), dan anti-ikatan ($\\sigma^*$).

Distribusi 4 elektron valensi ikatan pada ketiga orbital molekul tersebut dan muatan bersih pada atom-atomnya adalah ....

A. 2 elektron menempati orbital ikatan $\\sigma$ terdelokalisasi di seluruh 3 atom, 2 elektron menempati orbital non-ikatan $\\sigma_n$ yang terlokalisasi murni pada atom fluorin terminal; menghasilkan muatan parsial positif pada atom $\\ce{Xe}$ dan muatan parsial negatif pada masing-masing atom $\\ce{F}$  
B. Keempat elektron menempati dua orbital ikatan $\\sigma$ menghasilkan orde ikatan 2  
C. 2 elektron menempati orbital ikatan $\\sigma$ dan 2 elektron menempati orbital anti-ikatan $\\sigma^*$ sehingga tidak terbentuk ikatan stabil  
D. Keempat elektron terlokalisasi murni pada atom pusat ksenon sebagai pasangan elektron bebas  
E. Menghasilkan ikatan kovalen nonpolar sempurna tanpa pemisahan muatan`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Interaksi Tiga Orbital $p_z$ pada Model 3c-4e Pimentel-Rundle:**
   $$\\ce{F(1)} \\quad \\ce{Xe} \\quad \\ce{F(2)}$$
   - **Orbital Ikatan ($\\sigma$):** $1\\sigma_u = \\frac{1}{2} p_{z(\\ce{F1})} + \\frac{1}{\\sqrt{2}} p_{z(\\ce{Xe})} - \\frac{1}{2} p_{z(\\ce{F2})}$.
     Memiliki tumpang-tindih konstruktif di sepanjang sumbu ikatan, menampung 2 elektron.
   - **Orbital Non-Ikatan ($\\sigma_n$):** $1\\sigma_g = \\frac{1}{\\sqrt{2}} (p_{z(\\ce{F1})} + p_{z(\\ce{F2})})$.
     Atom pusat $\\ce{Xe}$ memiliki simpul tepat di intinya ($c_{\\ce{Xe}} = 0$). Orbital ini menampung 2 elektron berikutnya dan **terlokalisasi murni pada kedua atom fluorin terminal**.
   - **Orbital Anti-Ikatan ($\\sigma^*$):** Kosong.

2. **Orde Ikatan dan Polarisasi Muatan:**
   - Terdapat 1 pasang elektron ikatan ($\\sigma$) yang dibagi ke dua ruas ikatan $\\ce{Xe-F}$, sehingga orde ikatan formal per ikatan $\\ce{Xe-F}$ adalah **$0{,}5$**.
   - Pasangan elektron non-ikatan ($\sigma_n$) berada murni pada kedua atom fluorin, memberikan muatan parsial negatif sekitar $-\\frac{1}{2}$ pada masing-masing atom $\\ce{F}$.
   - Atom pusat ksenon mendonorkan sebagian rapatan elektron valensinya, sehingga bermuatan parsial positif ($\\delta+ \\approx +1$).
   Model ini menjelaskan kestabilan $\\ce{XeF2}$ dan $\\ce{I3-}$ secara elegan tanpa perlu mempostulatkan hibridisasi orbital $d$ valensi tinggi.

**Analisis Distraktor:**
- **A:** Benar secara tuntas sesuai teori Pimentel-Rundle.
- **B:** Model 3 orbital atom hanya menghasilkan 1 orbital ikatan $\sigma$, bukan 2.
- **C:** Orbital $\sigma^*$ kosong, sehingga sistem stabil terikat.
- **D:** Orbital non-ikatan $\sigma_n$ berada pada ligan terminal F, bukan pada Xe.
- **E:** Ikatan sangat terpolarisasi karena perbedaan elektronegativitas dan lokalisasi $\sigma_n$.`,
    source_event: 'OSP Kimia 2024 No. 4 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2020 No. 6 (Orbital Molekul NO vs Kation Nitrosil NO+)
  // =========================================================================
  {
    id: 302005,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Orbital Molekul Diatomik Heteronuklir NO vs NO+ & Sifat Paramagnetik',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Perubahan Orde Ikatan, Panjang Ikatan dan Kemagnetan pada Ionisasi Nitrogen Monoksida Menjadi Ion Nitrosil',
    question_text: `Gas nitrogen monoksida (\\ce{NO}) merupakan molekul radikal bebas stabil yang memiliki 11 elektron valensi. Pada reaksi oksidasi atau pelepasan satu elektron, terbentuk kation nitrosil (\\ce{NO+}):
$$\\ce{NO -> NO+ + e-}$$

Berdasarkan diagram orbital molekul diatomik heteronuklir, perubahan orde ikatan, sifat kemagnetan, dan panjang ikatan $\\ce{N-O}$ yang terjadi dari molekul netral \\ce{NO} ke kation \\ce{NO+} berturut-turut adalah ....

A. Orde ikatan meningkat dari $2{,}5$ menjadi $3{,}0$; sifat magnetik berubah dari paramagnetik menjadi diamagnetik; panjang ikatan memendek  
B. Orde ikatan menurun dari $3{,}0$ menjadi $2{,}5$; sifat magnetik tetap paramagnetik; panjang ikatan memanjang  
C. Orde ikatan meningkat dari $2{,}0$ menjadi $2{,}5$; sifat magnetik berubah dari diamagnetik menjadi paramagnetik; panjang ikatan memendek  
D. Orde ikatan tetap konstan pada $2{,}5$; sifat magnetik tidak berubah; panjang ikatan tetap sama  
E. Orde ikatan menurun dari $2{,}5$ menjadi $2{,}0$; sifat magnetik berubah dari feromagnetik menjadi paramagnetik; panjang ikatan memanjang`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konfigurasi Orbital Molekul $\\ce{NO}$ (11 Elektron Valensi):**
   $$\\sigma_{2s}^2 \\; \\sigma_{2s}^{*2} \\; \\pi_{2p_x}^2 \\; \\pi_{2p_y}^2 \\; \\sigma_{2p_z}^2 \\; \\pi_{2p_x}^{*1}$$
   - Jumlah elektron ikatan ($N_b$) = $2 + 2 + 2 + 2 = 8$
   - Jumlah elektron anti-ikatan ($N_a$) = $2 + 1 = 3$
   - **Orde Ikatan $\\ce{NO}$:**
     $$\\text{Orde Ikatan} = \\frac{N_b - N_a}{2} = \\frac{8 - 3}{2} = 2{,}5$$
   - Karena memiliki 1 elektron tak berpasangan pada orbital anti-ikatan $\\pi^*_{2p}$, $\\ce{NO}$ bersifat **paramagnetik**. Panjang ikatan terukur: $115\\text{ pm}$.

2. **Ionisasi Menjadi Kation $\\ce{NO+}$ (10 Elektron Valensi):**
   Elektron yang dilepaskan berasal dari orbital molekul berenergi tertinggi (HOMO), yaitu orbital **anti-ikatan $\\pi^*_{2p}$**:
   $$\\text{Konfigurasi } \\ce{NO+}: \\sigma_{2s}^2 \\; \\sigma_{2s}^{*2} \\; \\pi_{2p_x}^2 \\; \\pi_{2p_y}^2 \\; \\sigma_{2p_z}^2$$
   - Jumlah elektron ikatan ($N_b$) = $8$
   - Jumlah elektron anti-ikatan ($N_a$) = $2$
   - **Orde Ikatan $\\ce{NO+}$:**
     $$\\text{Orde Ikatan} = \\frac{8 - 2}{2} = 3{,}0$$
   - Karena seluruh elektron berpasangan, $\\ce{NO+}$ bersifat **diamagnetik** (isoelektronik dengan $\\ce{CO}$ dan $\\ce{N2}$).
   - Karena orde ikatan meningkat (dari $2{,}5 \\to 3{,}0$) akibat hilangnya elektron perusak anti-ikatan, ikatan $\\ce{N-O}$ menjadi jauh lebih kuat dan **memendek** menjadi $106\\text{ pm}$.

**Analisis Distraktor:**
- **A:** Benar secara teori orbital molekul dan spektroskopi.
- **B:** Terbalik, menganggap pelepasan elektron menurunkan orde ikatan.
- **C:** Orde ikatan $\\ce{NO}$ awal adalah $2{,}5$, bukan $2{,}0$.
- **D:** Mengabaikan bahwa elektron terlepas dari orbital anti-ikatan.
- **E:** $\\ce{NO}$ gas bukan material feromagnetik.`,
    source_event: 'OSP Kimia 2020 No. 6 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Aromatisitas Hückel & Polaritas Borazol B3N3H6)
  // =========================================================================
  {
    id: 302006,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Aromatisitas Anorganik, Kaidah Hückel & Reaktivitas Kimia Borazol',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Perbandingan Aromatisitas dan Reaktivitas Kimia antara Borazol dan Benzena',
    question_text: `Borazol (\\ce{B3N3H6}) sering dijuluki sebagai "benzena anorganik" (*inorganic benzene*) karena memiliki struktur cincin heksagonal datar yang isoelektronik dengan benzena (\\ce{C6H6}) dengan 6 elektron $\\pi$.

Namun, perilaku kimia borazol sangat berbeda secara drastis dari benzena:
- Benzena sangat sukar mengalami adisi dan lebih menyukai substitusi elektrofilik aromatik.
- Borazol sangat reaktif dan mudah mengalami adisi dengan hidrogen klorida (\\ce{HCl}) pada suhu kamar tanpa katalis.

Penyebab fundamental perbedaan reaktivitas kimia ini adalah ....

A. Ikatan $\\ce{B-N}$ sangat terpolarisasi akibat perbedaan elektronegativitas yang besar antara nitrogen dan boron, sehingga delokalisasi elektron $\\pi$ tidak sempurna dan muatan parsial terlokalisasi mengundang adisi polar  
B. Borazol tidak memenuhi kaidah aromatisitas Hückel $4n+2$  
C. Cincin borazol tidak berbentuk planar melainkan mengadopsi konformasi perahu  
D. Ikatan $\\ce{B-N}$ dalam borazol murni merupakan ikatan tunggal tanpa adanya sumbangan ikatan $\\pi$  
E. Atom boron memiliki orbital $d$ kosong yang memicu pemutusan cincin`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Struktur Elektronik Borazol vs Benzena:**
   - Kedua molekul planar datar dan memiliki $6$ elektron $\pi$ ($n=1$, memenuhi kaidah Hückel $4n+2$).
   - Pada benzena, seluruh atom adalah karbon dengan nilai elektronegativitas identik ($\chi_{\\ce{C}} = 2{,}55$), menghasilkan delokalisasi elektron $\pi$ yang simetris sempurna dan energi resonansi aromatik yang sangat besar ($\\approx 150\\text{ kJ/mol}$).

2. **Polaritas Ikatan $\\ce{B-N}$:**
   - Nilai elektronegativitas: $\chi_{\\ce{N}} = 3{,}04$ vs $\chi_{\\ce{B}} = 2{,}04$ ($\Delta\chi = 1{,}00$).
   - Pasangan elektron $\pi$ tertarik sangat kuat ke arah atom nitrogen, sehingga rapatan elektron $\pi$ tidak terdelokalisasi merata melainkan terlokalisasi parsial pada atom nitrogen ($\delta-$) dan meninggalkan defisiensi elektron signifikan pada atom boron ($\delta+$).
   - Akibatnya, energi penstabilan aromatik borazol jauh lebih kecil daripada benzena.
   - Sifat polar ikatan $\\ce{B^{\\delta+}-N^{\\delta-}}$ ini menjadikan borazol sangat rentan diserang reagen polar seperti $\\ce{H^{\\delta+}-Cl^{\\delta-}}$, di mana $\\ce{H+}$ menyerang nitrogen dan $\\ce{Cl-}$ menyerang boron melalui reaksi adisi polar seketika.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan pengaruh polaritas ikatan terhadap penurunan karakter aromatik.
- **B:** Borazol memiliki 6 elektron $\pi$, memenuhi kaidah Hückel secara formal.
- **C:** Cincin borazol terbukti eksperimental planar heksagonal ($D_{3h}$).
- **D:** Terdapat tumpang-tindih ikatan $\pi$ koordinasi dari pasangan elektron bebas N ke orbital $2p$ kosong B.
- **E:** Boron adalah unsur periode 2 yang tidak memiliki orbital $d$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Ikatan Halogen / Halogen Bonding Berbasis Sigma-Hole)
  // =========================================================================
  {
    id: 302007,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Interaksi Non-Kovalen Khusus: Ikatan Halogen (Halogen Bonding) & Sigma-Hole',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Konsep Lubang Sigma (Sigma-Hole) pada Ikatan Halogen Supramolekular',
    question_text: `Dalam kimia supramolekular dan desain obat kristal, ikatan halogen (*halogen bonding*, $\\ce{R-X \\cdots B}$) diakui sebagai interaksi non-kovalen terarah yang sangat kuat dan spesifik antara atom halogen elektrofilik ($\\ce{X} = \\ce{I, Br, Cl}$) dengan basa Lewis donor elektron ($\\ce{B}$).

Secara klasik, atom halogen dianggap selalu kaya elektron dan elektronegatif. Kemampuan atom halogen dalam molekul seperti iodopentafluorobenzena ($\\ce{C6F5-I}$) bertindak sebagai akseptor elektron elektrofilik dijelaskan oleh konsep *$\sigma$-hole*, yaitu ....

A. Pembentukan ikatan kovalen tunggal $\\ce{C-I}$ menarik kerapatan elektron dari sumbu luar atom iodin, menyisakan daerah defisit elektron bermuatan parsial positif tepat pada perpanjangan segaris ikatan $\\ce{C-I}$  
B. Eksitasi elektron dari orbital $5s$ ke orbital $5d$ pada atom halogen  
C. Adanya pasangan elektron bebas halogen yang bersifat asam Lewis keras  
D. Penetrasi ligan donor ke dalam inti atom iodin melalui efek terowongan kuantum  
E. Pembelahan medan kristal orbital $p$ oleh pelarut aprotik`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konsep Lubang Sigma (*$\sigma$-Hole*):**
   - Ketika atom halogen berat seperti Iodin membentuk ikatan kovalen $\sigma$ dengan gugus penarik elektron kuat (seperti cincin pentafluorofenil), elektron valensi dari orbital $p_z$ dialokasikan ke dalam ikatan $\ce{C-I}$.
   - Tiga pasangan elektron bebas lainnya menempati cincin ekuatorial di sekeliling "pinggang" atom halogen.
   - Akibatnya, pada ujung kutub terluar atom halogen yang terletak tepat pada perpanjangan garis ikatan $\ce{C-I}$ ($180^\circ$), kerapatan elektron menjadi sangat menipis, menyingkap muatan positif inti atom.
   - Daerah kutub positif terlokalisasi ini disebut **lubang sigma (*$\sigma$-hole*)**.

2. **Karakteristik Ikatan Halogen:**
   - Basa Lewis yang kaya elektron (seperti atom N pada piridina atau ion halida) tertarik secara elektrostatik langsung ke arah lubang $\sigma$ positif tersebut.
   - Karakteristik utama ikatan halogen adalah **sangat terarah (*strictly directional*)**, dengan sudut ikatan $\ce{C-X \cdots B}$ mendekati $180^\circ$.
   - Kekuatan ikatan halogen meningkat seiring bertambahnya polarisabilitas halogen: $\ce{F < Cl < Br < I}$.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan pembentukan *$\sigma$-hole* pada perpanjangan garis ikatan kovalen.
- **B:** Eksitasi ke orbital $d$ bukan mekanisme interaksi keadaan dasar ini.
- **C:** Pasangan elektron bebas halogen bermuatan negatif dan berada di sabuk ekuator, bukan situs asamnya.
- **D:** Tidak melibatkan efek terowongan ke inti atom.
- **E:** Fenomena terjadi bahkan pada fasa gas terisolasi tanpa pelarut.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Pseudorotasi Berry Molekul Fluksional PF5)
  // =========================================================================
  {
    id: 302008,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Molekul Fluksional, Mekanisme Pseudorotasi Berry & Spektroskopi NMR',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Dinamika Molekular Pseudorotasi Berry pada Fosforus Pentafluorida (PF5)',
    question_text: `Molekul fosforus pentafluorida (\\ce{PF5}) memiliki geometri trigonal bipiramidal dengan dua ikatan fluorin aksial ($\\ce{F_{ax}}$) dan tiga ikatan fluorin ekuatorial ($\\ce{F_{eq}}$).

Meskipun kristalografi difraksi sinar-X membuktikan bahwa ikatan $\\ce{P-F_{ax}}$ lebih panjang ($158\\text{ pm}$) daripada ikatan $\\ce{P-F_{eq}}$ ($153\\text{ pm}$), spektrum NMR $^{19}\\ce{F}$ dari senyawa \\ce{PF5} cair pada suhu kamar hanya menampilkan **satu sinyal doublet tunggal** (terkopel dengan spin inti $^{31}\\ce{P}$).

Penjelasan teoritis yang **paling tepat** mengenai fenomena kesetaraan kimia seluruh atom fluorin pada skala waktu NMR tersebut adalah ....

A. Molekul mengalami pertukaran ligan intramolekular yang sangat cepat melalui mekanisme pseudorotasi Berry via keadaan transisi piramida alas bujur sangkar (*square pyramidal*), dengan laju yang jauh lebih cepat daripada skala waktu pengukuran NMR  
B. Seluruh ikatan $\\ce{P-F}$ terdisosiasi reversibel menjadi radikal bebas  
C. Kelima atom fluorin membentuk cincin resonansi ekuivalen  
D. Inti fosforus mengalami relaksasi kuadrupol yang menghapus kopling spin  
E. Panjang ikatan aksial dan ekuatorial sebenarnya identik sempurna dalam fasa cair`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Mekanisme Pseudorotasi Berry (*Berry Pseudorotation*):**
   - Merupakan proses isomerisasi intramolekular pada molekul fluksional (*fluxional molecule*) bertipe trigonal bipiramidal.
   - Dua ligan aksial menekuk mendekat satu sama lain, sementara dua dari tiga ligan ekuatorial membuka melebar.
   - Sistem melewati keadaan transisi (*transition state*) atau zat antara berenergi rendah bergeometri **piramida alas bujur sangkar (*square pyramidal*)** dengan simetri $C_{4v}$.
   - Ketika proses penekukan berlanjut, kedua ligan yang semula aksial kini menempati posisi ekuatorial, dan kedua ligan ekuatorial tadi kini menempati posisi aksial.

2. **Dampaknya pada Spektroskopi NMR $^{19}\\ce{F}$:**
   - Penghalang energi aktivasi pseudorotasi Berry pada $\\ce{PF5}$ sangat rendah (hanya sekitar $15\\text{ kJ/mol}$).
   - Pada suhu kamar, frekuensi pertukaran posisi ligan aksial $\\rightleftharpoons$ ekuatorial berlangsung hingga miliaran kali per detik ($> 10^8\\text{ s}^{-1}$).
   - Karena skala waktu pemisahan kimiawi spektroskopi NMR jauh lebih lambat (orde milidetik, $\\approx 10^{-3} - 10^{-4}\\text{ s}$), instrumen NMR hanya merekam nilai lingkungan kimia rata-rata (*time-averaged environment*).
   - Akibatnya, seluruh 5 atom fluorin teramati ekivalen secara kimia menghasilkan satu sinyal tunggal (yang terpecah menjadi *doublet* akibat kopling dengan inti $^{31}\\ce{P}$, $I = 1/2$).

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan mekanisme Berry pseudorotation dan batas skala waktu NMR.
- **B:** Pertukaran bersifat intramolekular tanpa pemutusan ikatan kovalen heterolitik/homolitik.
- **C:** Molekul bukan cincin resonansi.
- **D:** Inti $^{31}\\ce{P}$ memiliki spin $I = 1/2$, tidak memiliki momen kuadrupol listrik ($I > 1/2$).
- **E:** Pengukuran difraksi membuktikan panjang ikatan intrinsiknya tetap berbeda.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Korelasi Sudut Ikatan Spesi NO2+, NO2, NO2-)
  // =========================================================================
  {
    id: 302009,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Korelasi Struktur, Sudut Ikatan O-N-O & Populasi Elektron Non-Ikatan',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Urutan dan Analisis Sudut Ikatan O-N-O pada Kation Nitronium, Radikal NO2 dan Anion Nitrit',
    question_text: `Diberikan tiga spesi kimia nitrogen oksida yang saling berhubungan:
(1) Kation nitronium (\\ce{[NO2]+})  
(2) Radikal nitrogen dioksida (\\ce{NO2})  
(3) Anion nitrit (\\ce{[NO2]-})  

Urutan besar sudut ikatan $\\ce{O-N-O}$ dari yang **paling besar** ke yang **paling kecil** serta penjelasan teoritisnya adalah ....

A. $\\ce{[NO2]+} (180^\\circ) > \\ce{NO2} (134^\\circ) > \\ce{[NO2]-} (115^\\circ)$; karena kation nitronium tidak memiliki elektron non-ikatan pada atom N, radikal $\\ce{NO2}$ memiliki satu elektron tunggal tak berpasangan, dan anion nitrit memiliki sepasang elektron bebas penuh yang memberikan gaya tolak terbesar  
B. $\\ce{[NO2]-} (180^\\circ) > \\ce{NO2} (134^\\circ) > \\ce{[NO2]+} (115^\\circ)$  
C. $\\ce{[NO2]+} (134^\\circ) > \\ce{NO2} (180^\\circ) > \\ce{[NO2]-} (115^\\circ)$  
D. Ketiga spesi memiliki sudut ikatan yang sama karena memiliki rumus kerangka atomik identik  
E. $\\ce{NO2} (180^\\circ) > \\ce{[NO2]+} (134^\\circ) > \\ce{[NO2]-} (115^\\circ)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Elektron Valensi pada Atom Pusat Nitrogen:**
   - **Kation Nitronium ($\\ce{[NO2]+}$):**
     Elektron valensi N = $5 - 1 = 4$ elektron.
     Membentuk 2 ikatan rangkap dua $\\ce{O=N=O}$ (2 domain ikatan, 0 domain elektron bebas).
     Geometri domain linear ($AX_2$), sudut ikatan $\\ce{O-N-O} = \\mathbf{180^\\circ}$.
   - **Radikal Nitrogen Dioksida ($\\ce{NO2}$):**
     Elektron valensi N = $5$ elektron.
     Membentuk 2 ikatan dengan oksigen dan menyisakan **1 elektron tunggal (*single unpaired electron*)** pada orbital hibrida nitrogen.
     Satu elektron tunggal ini memberikan gaya tolakan elektrostatik sedang terhadap pasangan elektron ikatan, menekuk molekul hingga sudut $\\ce{O-N-O} = \\mathbf{134^\\circ}$.
   - **Anion Nitrit ($\\ce{[NO2]-}$):**
     Elektron valensi N = $5 + 1 = 6$ elektron.
     Membentuk 2 ikatan dan menyisakan **sepasang elektron bebas (PEB penuh, 2 elektron)**.
     Berdasarkan teori VSEPR, gaya tolakan PEB penuh jauh lebih besar daripada tolakan satu elektron tunggal ($\text{PEB-PEI} > \text{Elektron tunggal-PEI}$), menekan sudut ikatan lebih kuat hingga menyempit menjadi $\\mathbf{115^\\circ}$.

2. **Kesimpulan Urutan Sudut Ikatan:**
   $$\\ce{[NO2]+} (180^\\circ) > \\ce{NO2} (134^\\circ) > \\ce{[NO2]-} (115^\\circ)$$

**Analisis Distraktor:**
- **A:** Benar secara teori VSEPR dan spektroskopi struktur.
- **B:** Urutan terbalik secara total.
- **C:** Tertukar antara kation nitronium dan molekul netral.
- **D:** Mengabaikan peran pasangan elektron bebas pada atom pusat.
- **E:** Mengira radikal bebas bersifat linear.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Diagram Walsh & Interkonversi Bentuk Senyawa O3 vs SO2)
  // =========================================================================
  {
    id: 302010,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Struktur Elektronik Ozon (O3) vs Sulfur Dioksida (SO2) & Ikatan pi Terdelokalisasi',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Ikatan pi Terdelokalisasi dan Orde Ikatan pada Molekul Ozon',
    question_text: `Molekul ozon (\\ce{O3}) memiliki struktur bengkok dengan sudut ikatan $116{,}8^\\circ$ dan panjang ikatan $\\ce{O-O}$ yang identik yaitu $127{,}8\\text{ pm}$ (berada di antara panjang ikatan tunggal $\\ce{O-O}$ $148\\text{ pm}$ pada $\\ce{H2O2}$ dan ikatan rangkap $\\ce{O=O}$ $121\\text{ pm}$ pada $\\ce{O2}$).

Berdasarkan teori orbital molekul, sistem elektron $\\pi$ pada molekul ozon terbentuk dari tumpang-tindih tiga orbital $2p_z$ tegak lurus bidang molekul yang menghasilkan sistem ikatan $\\pi$ 3-pusat 4-elektron ($\\pi$-3c-4e).

Pernyataan yang **paling benar** mengenai orbital molekul $\\pi$ pada ozon adalah ....

A. Tiga orbital molekul $\\pi$ terdiri dari orbital ikatan ($1\\pi$), orbital non-ikatan ($2\\pi$), dan orbital anti-ikatan ($3\\pi^*$); di mana 4 elektron $\\pi$ mengisi penuh orbital $1\\pi$ dan $2\\pi$, menghasilkan orde ikatan $\\pi$ total sebesar $0{,}5$ per ikatan $\\ce{O-O}$ (orde ikatan total $1{,}5$)  
B. Keempat elektron $\\pi$ menempati dua orbital ikatan menghasilkan orde ikatan total 2  
C. Ozon bersifat paramagnetik karena memiliki satu elektron tak berpasangan pada orbital anti-ikatan  
D. Panjang kedua ikatan $\\ce{O-O}$ sebenarnya berbeda pada kondisi kesetimbangan statis  
E. Ozon tidak memiliki momen dipol permanen karena tersusun dari atom sejenis`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Sistem Elektronik $\\pi$ pada Ozon (\\ce{O3}):**
   - Tiga atom oksigen masing-masing menyumbangkan satu orbital $2p_z$ tegak lurus bidang molekul.
   - Kombinasi linear 3 orbital $p_z$ menghasilkan 3 orbital molekul $\\pi$:
     1. **Orbital $1\\pi$ (Ikatan):** Tumpang-tindih sefasa penuh (+ + +), berenergi paling rendah, terdelokalisasi di seluruh 3 atom.
     2. **Orbital $2\\pi$ (Non-Ikatan):** Memiliki simpul tepat pada atom oksigen pusat (+ 0 -), terlokalisasi hanya pada dua atom oksigen terminal.
     3. **Orbital $3\\pi^*$ (Anti-Ikatan):** Memiliki dua simpul (+ - +), berenergi paling tinggi dan kosong.

2. **Pengisian Elektron dan Orde Ikatan:**
   - Terdapat 4 elektron $\\pi$ pada ozon (1 elektron dari masing-masing atom O terminal dan 2 elektron dari atom O pusat yang menyumbang pasangan bebas $\pi$).
   - Ke-4 elektron ini mengisi penuh orbital $1\\pi$ (2 elektron) dan orbital $2\\pi$ (2 elektron).
   - Karena orbital $2\\pi$ bersifat non-ikatan, kontribusi ikatan $\\pi$ bersih hanya berasal dari 2 elektron pada $1\\pi$:
     $$\\text{Orde Ikatan } \\pi = \\frac{2 - 0}{2} = 1$$
   - Nilai orde ikatan $\\pi = 1$ ini terbagi rata ke dua ruas ikatan $\\ce{O-O}$, menghasilkan sumbangan orde ikatan $\\pi$ sebesar $0{,}5$ per ruas.
   - Ditambah dengan ikatan $\\sigma$ lokal (orde ikatan 1), maka **orde ikatan total per ikatan $\\ce{O-O}$ adalah $1 + 0{,}5 = 1{,}5$**.
   Hal ini menjelaskan mengapa panjang ikatan $\\ce{O-O}$ ($127{,}8\\text{ pm}$) berada tepat di antara ikatan tunggal ($148\\text{ pm}$) dan ikatan rangkap dua ($121\\text{ pm}$).

3. **Dipol Permanen:**
   Meskipun homonuklir, karena bentuknya bengkok ($bent$) dan atom pusat bermuatan formal positif ($+1$) sedangkan atom terminal bermuatan negatif ($-0{,}5$), ozon memiliki **momen dipol permanen yang nyata ($\mu = 0{,}53\\text{ D}$)**.

**Analisis Distraktor:**
- **A:** Benar secara teori orbital molekul dan spektroskopi.
- **B:** Hanya ada 1 orbital ikatan $\pi$, orbital kedua adalah non-ikatan.
- **C:** Seluruh elektron berpasangan, ozon bersifat diamagnetik.
- **D:** Kedua panjang ikatan terbukti persis sama secara eksperimental resonansi.
- **E:** Ozon memiliki momen dipol permanen ($\mu = 0{,}53\\text{ D}$).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
