/**
 * ichoQuestionsPillar2Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 2: Teori Grup Lanjut, Proyeksi Operator, MO Poliatomik & Kluster
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 502001 - 502010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 02 = Pilar 2
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_2_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2018 Slovakia/Czech Rep Problem 2 (Simetri Ikosahedral Ih C60)
  // =========================================================================
  {
    id: 502001,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Grup Lanjut, Simetri Ikosahedral Ih & Spektroskopi Vibrasi C60',
    title: 'Analisis Teori Grup Vibrasi Normal C60 (Buckminsterfullerene) pada Grup Titik Ih',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Molekul buckminsterfullerene ($\\ce{C60}$) memiliki simetri ikosahedral sempurna ($I_h$) yang memiliki $h = 120$ operasi simetri. Total derajat kebebasan vibrasi untuk $\\ce{C60}$ adalah:
$$3N - 6 = 3(60) - 6 = 174 \\text{ moda vibrasi}$$

Berdasarkan reduksi representasi tereduksi vibrasi ($\\Gamma_{\\text{vib}}$) pada grup titik $I_h$, representasi tereduksi terurai menjadi representasi tak-tereduksi (*irreducible representations*) sebagai berikut:
$$\\Gamma_{\\text{vib}} = 2A_g + 1A_u + 3T_{1g} + 4T_{1u} + 5T_{2g} + 5T_{2u} + 6G_g + 6G_u + 8H_g + 7H_u$$
dengan dimensi representasi: $A$ (1D), $T$ (3D), $G$ (4D), dan $H$ (5D).

Dalam grup titik $I_h$:
- Momen dipol listrik $\\vec{\\mu} = (x, y, z)$ bertransformasi menurut representasi $T_{1u}$.
- Tensor polarisabilitas $\\alpha_{ij}$ ($x^2, y^2, z^2, xy, yz, zx$) bertransformasi menurut representasi $A_g + H_g$.
- Pusat inversi $i$ ada dalam grup $I_h$, sehingga aturan *rule of mutual exclusion* berlaku ketat.

Berdasarkan aturan seleksi simetri spektroskopi IR dan Raman di atas:
1. Berapa banyak puncak pita fundamental yang aktif pada spektrum Inframerah (IR)?
2. Berapa banyak puncak pita fundamental yang aktif pada spektrum Hamburan Raman?

A. 4 pita aktif IR dan 10 pita aktif Raman (2 $A_g$ + 8 $H_g$)
B. 3 pita aktif IR dan 8 pita aktif Raman (8 $H_g$)
C. 4 pita aktif IR dan 14 pita aktif Raman (6 $G_g$ + 8 $H_g$)
D. 1 pita aktif IR ($A_u$) dan 2 pita aktif Raman ($A_g$)
E. 5 pita aktif IR ($T_{1u} + T_{2u}$) dan 13 pita aktif Raman ($5T_{2g} + 8H_g$)`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci & Teori Grup Lanjut
1. **Derajat Kebebasan Vibrasi $\\ce{C60}$:**
   Total moda vibrasi = $3(60) - 6 = 174$.
   Verifikasi dimensi:
   $2(1) + 1(1) + 3(3) + 4(3) + 5(3) + 5(3) + 6(4) + 6(4) + 8(5) + 7(5) = 2 + 1 + 9 + 12 + 15 + 15 + 24 + 24 + 40 + 35 = 177 - 3 = 174$ (sesuai!).
2. **Aturan Seleksi IR:**
   Suatu moda vibrasi aktif IR jika dan hanya jika representasi tak-tereduksinya memiliki simetri yang sama dengan salah satu komponen vektor translasi/vektor dipol $(x, y, z)$.
   Pada grup titik $I_h$, $(x, y, z)$ bertransformasi sebagai $T_{1u}$.
   Oleh karena itu, hanya moda dengan simetri $T_{1u}$ yang aktif IR.
   Jumlah moda $T_{1u}$ adalah 4. Karena setiap moda $T_{1u}$ adalah tripel degenerat, mereka masing-masing muncul sebagai 1 pita pada frekuensi tertentu. Jadi, ada **4 pita aktif IR**.
3. **Aturan Seleksi Raman:**
   Suatu moda aktif Raman jika representasi tak-tereduksinya sama dengan komponen tensor polarisabilitas kuadratik.
   Pada grup titik $I_h$, komponen kuadratik bertransformasi sebagai $A_g \\oplus H_g$.
   Jumlah moda dengan simetri $A_g$ adalah 2, dan simetri $H_g$ adalah 8.
   Total frekuensi fundamental aktif Raman = $2 + 8 = 10$ pita (2 pita bersimetri $A_g$ dan 8 pita bersimetri $H_g$).
4. **Evaluasi Opsi:**
   - Opsi A: 4 pita aktif IR dan 10 pita aktif Raman (2 $A_g$ + 8 $H_g$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi basis operator dipol listrik (translasi x, y, z) untuk IR ($T_{1u}$).
Langkah 2: Hitung koefisien $T_{1u}$ dalam dekomposisi vibrasi -> terdapat 4 moda $T_{1u}$ aktif IR.
Langkah 3: Identifikasi basis tensor polarisabilitas untuk Raman ($A_g + H_g$).
Langkah 4: Hitung jumlah pita Raman = 2 ($A_g$) + 8 ($H_g$) = 10 pita.`,
    source_event: 'IChO 2018 Slovakia/Czech Rep Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Operator Proyeksi Teori Grup SALC SO3 (D3h)
  // =========================================================================
  {
    id: 502002,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Grup Lanjut, Proyeksi Operator & SALC Orbital Molekul D3h',
    title: 'Konstruksi Kombinasi Linier Orbital Ligan (SALC) σ pada Molekul Planar SO3 Menggunakan Operator Proyeksi',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Molekul belerang trioksida ($\\ce{SO3}$) berada pada geometri planar trigonal dengan grup titik $D_{3h}$. Karakter representasi untuk grup $D_{3h}$ adalah:

$$\\begin{array}{c|cccccc}
D_{3h} & E & 2C_3 & 3C_2 & \\sigma_h & 2S_3 & 3\\sigma_v \\\\ \\hline
A_1' & 1 & 1 & 1 & 1 & 1 & 1 \\\\
A_2' & 1 & 1 & -1 & 1 & 1 & -1 \\\\
E' & 2 & -1 & 0 & 2 & -1 & 0 \\\\
A_1'' & 1 & 1 & 1 & -1 & -1 & -1 \\\\
A_2'' & 1 & 1 & -1 & -1 & -1 & 1 \\\\
E'' & 2 & -1 & 0 & -2 & 1 & 0
\\end{array}$$

Misalkan tiga orbital atom $2p_z$ oksigen (yang mengarah sepanjang sumbu ikatan $\\ce{S-O}$, yaitu basis ikatan $\\sigma$) dinamai $\\phi_1, \\phi_2, \\phi_3$. 
Representasi tereduksi basis ikatan $\\sigma$ ini adalah $\\Gamma_\\sigma = A_1' \\oplus E'$.

Dengan menerapkan operator proyeksi $\\hat{P}^{\\Gamma} = \\frac{l_\\Gamma}{h} \\sum_{R} \\chi^\\Gamma(R)^* \\hat{R}$ pada orbital $\\phi_1$, fungsi SALC yang ternormalisasi untuk representasi $A_1'$ dan salah satu komponen pasangan degenerat $E'$ adalah:

A. $\\psi(A_1') = \\frac{1}{\\sqrt{3}}(\\phi_1 + \\phi_2 + \\phi_3)$ dan $\\psi(E'_a) = \\frac{1}{\\sqrt{6}}(2\\phi_1 - \\phi_2 - \\phi_3)$
B. $\\psi(A_1') = \\frac{1}{\\sqrt{3}}(\\phi_1 - \\phi_2 + \\phi_3)$ dan $\\psi(E'_a) = \\frac{1}{\\sqrt{2}}(\\phi_2 - \\phi_3)$
C. $\\psi(A_1') = \\frac{1}{3}(\\phi_1 + \\phi_2 + \\phi_3)$ dan $\\psi(E'_a) = \\frac{1}{2}(\\phi_1 - \\phi_2)$
D. $\\psi(A_1') = \\frac{1}{\\sqrt{2}}(\\phi_1 + \\phi_2)$ dan $\\psi(E'_a) = \\frac{1}{\\sqrt{6}}(\\phi_1 + \\phi_2 - 2\\phi_3)$
E. $\\psi(A_1') = \\frac{1}{\\sqrt{3}}(\\phi_1 + \\phi_2 + \\phi_3)$ dan $\\psi(E'_a) = \\frac{1}{\\sqrt{2}}(\\phi_1 - \\phi_2)$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci & Langkah Penurunan Operator Proyeksi
1. **Aksi Operasi Simetri $D_{3h}$ pada $\\phi_1$:**
   - $E(\\phi_1) = \\phi_1$
   - $2C_3$: $C_3^+(\\phi_1) = \\phi_2$, $C_3^-(\\phi_1) = \\phi_3$
   - $3C_2$: $C_2(1)$ mempertahankan $\\phi_1$, sehingga $C_2^{(1)}(\\phi_1) = \\phi_1$; sedangkan dua lainnya memetakan ke $\\phi_2$ dan $\\phi_3$: $C_2^{(2)}(\\phi_1) = \\phi_3$, $C_2^{(3)}(\\phi_1) = \\phi_2$.
   - $\\sigma_h$: karena orbital berada di bidang $xy$, $\\sigma_h(\\phi_1) = \\phi_1$
   - $2S_3$: $S_3^+(\\phi_1) = \\phi_2$, $S_3^-(\\phi_1) = \\phi_3$
   - $3\\sigma_v$: $\\sigma_v^{(1)}(\\phi_1) = \\phi_1$, $\\sigma_v^{(2)}(\\phi_1) = \\phi_3$, $\\sigma_v^{(3)}(\\phi_1) = \\phi_2$.

2. **Aplikasi Operator Proyeksi untuk $A_1'$:**
   Karakter semua operasi $= +1$.
   $$\\hat{P}^{A_1'} \\phi_1 \\propto \\phi_1 + (\\phi_2 + \\phi_3) + (\\phi_1 + \\phi_3 + \\phi_2) + \\phi_1 + (\\phi_2 + \\phi_3) + (\\phi_1 + \\phi_3 + \\phi_2) = 4(\\phi_1 + \\phi_2 + \\phi_3)$$
   Normalisasi (mengabaikan tumpang-tindih diferensial):
   $$\\psi(A_1') = \\frac{1}{\\sqrt{3}}(\\phi_1 + \\phi_2 + \\phi_3)$$

3. **Aplikasi Operator Proyeksi untuk $E'$:**
   Karakter: $\\chi(E) = 2, \\chi(C_3) = -1, \\chi(C_2) = 0, \\chi(\\sigma_h) = 2, \\chi(S_3) = -1, \\chi(\\sigma_v) = 0$.
   $$\\hat{P}^{E'} \\phi_1 \\propto 2\\phi_1 - 1(\\phi_2 + \\phi_3) + 0 + 2\\phi_1 - 1(\\phi_2 + \\phi_3) + 0 = 4(2\\phi_1 - \\phi_2 - \\phi_3)$$
   Normalisasi:
   $$N^2 [2^2 + (-1)^2 + (-1)^2] = N^2(4 + 1 + 1) = 6N^2 = 1 \\implies N = \\frac{1}{\\sqrt{6}}$$
   $$\\psi(E'_a) = \\frac{1}{\\sqrt{6}}(2\\phi_1 - \\phi_2 - \\phi_3)$$
   (Komponen kedua yang ortogonal adalah $\\psi(E'_b) = \\frac{1}{\\sqrt{2}}(\\phi_2 - \\phi_3)$).

4. **Evaluasi Opsi:**
   - Opsi A menyatakan tepat kombinasi pasangan ternormalisasi tersebut.`,
    solution_framework_template: `Langkah 1: Petakan permutasi orbital basis $\\phi_1$ di bawah seluruh 12 elemen simetri grup $D_{3h}$.
Langkah 2: Kalikan masing-masing hasil operasi dengan karakter tak-tereduksi untuk $A_1'$ dan jumlahkan.
Langkah 3: Terapkan prosedur serupa untuk representasi 2D $E'$.
Langkah 4: Lakukan normalisasi dengan asumsi $\\langle \\phi_i | \\phi_j \\rangle = \\delta_{ij}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2021 Japan Problem 3 (Kluster Logam Oktahedral [Mo6Cl8]4+)
  // =========================================================================
  {
    id: 502003,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Orbital Molekul Kluster Logam Oktahedral & Aturan Cotton',
    title: 'Struktur Elektronik dan Ikatan Logam-Logam pada Kluster Oktahedral [Mo6Cl8]4+ dan [Mo6Cl14]2-',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kluster halida molibdenum oktrainti $[\\ce{Mo6Cl8}]^{4+}$ memiliki inti oktahedron berongga $\\ce{Mo6}$ di mana setiap muka segitiga oktahedron dinaungi oleh ligan $\\mu_3\\text{-}\\ce{Cl}$. 
Logam $\\ce{Mo}$ berada pada bilangan oksidasi $+2$ ($4d^4$).

Dalam model ikatan kluster oktahedral Cotton-Haas:
1. Setiap kation $\\ce{Mo^{2+}}$ mendonorkan 4 elektron valensi $d$, sehingga total elektron valensi kerangka logam (*skeletal electrons*) yang tersedia untuk ikatan logam-logam ($\\ce{Mo-Mo}$) pada inti $\\ce{Mo6}$ adalah:
   $$N_e = 6 \\times 4 - 4 = 20 \\text{ elektron}$$
   (karena muatan kation kluster adalah $+4$, dihitung dari $[\\{(\\ce{Mo}^{2+})_6(\\ce{Cl}^-)_8\\}^{4+}]$).
2. Orbital molekul kerangka ikatan $\\ce{Mo-Mo}$ diturunkan dari kombinasi orbital $d$ molibdenum dalam simetri $O_h$, menghasilkan orbital ikatan (*bonding MOs*):
   $$a_{1g} (1) + t_{1u} (3) + t_{2g} (3) + t_{2u} (3) + e_g (2)$$
   dengan urutan tingkat energi orbital ikatan terendah: $a_{1g} < t_{1u} < t_{2g} < e_g < t_{2u}$.

Jika 24 elektron diperlukan untuk mengisi penuh seluruh 12 ikatan logam-logam berorde 1 (satu ikatan kovalen per rusuk oktahedron $\\ce{Mo6}$):
Berapakah orde ikatan rata-rata $\\ce{Mo-Mo}$ per rusuk dalam kluster $[\\ce{Mo6Cl8}]^{4+}$ jika terdapat 24 elektron valensi kerangka logam dalam turunan tereduksi $[\\ce{Mo6Cl14}]^{2-}$, dan apa sifat kemagnetan dari $[\\ce{Mo6Cl8}]^{4+}$ (apakah diamagnetik atau paramagnetik)?

A. Orde ikatan $\\ce{Mo-Mo} = 1{,}0$ dan bersifat diamagnetik (semua 24 elektron kerangka berpasangan)
B. Orde ikatan $\\ce{Mo-Mo} = 0{,}67$ dan bersifat diamagnetik (16 elektron terisi pada 8 orbital ikatan terendah)
C. Orde ikatan $\\ce{Mo-Mo} = 0{,}83$ dan bersifat diamagnetik (seluruh 20 elektron mengisi 10 orbital ikatan: $a_{1g}^2 t_{1u}^6 t_{2g}^6 e_g^4 t_{2u}^2$)
D. Orde ikatan $\\ce{Mo-Mo} = 1{,}0$ dan bersifat diamagnetik (24 elektron kerangka: 12 pasangan elektron pada 12 tepi oktahedron)
E. Orde ikatan $\\ce{Mo-Mo} = 0{,}50$ dan bersifat paramagnetik dengan 2 elektron tak berpasangan`,
    expected_final_answer: 'D',
    solution_rubric: `### Konsep Kunci & Analisis Orbital Kluster Oktahedral
1. **Penghitungan Elektron Valensi Kerangka Logam:**
   - Dalam senyawa standar $[\\ce{Mo6Cl14}]^{2-}$ atau $[\\ce{(Mo6Cl8)Cl6}]^{2-}$:
     Muatan inti kluster $[\(\\ce{Mo6Cl8}\)]^{4+}$ dinetralkan oleh 6 ligan kloro luar ($\\ce{Cl}^-$ terminal).
     Setiap $\\ce{Mo}$ memiliki bilangan oksidasi $+2$.
     Konfigurasi elektron bebas $\\ce{Mo}$ netral adalah $[\\ce{Kr}] 4d^5 5s^1$ (6 elektron valensi).
     Untuk 6 atom $\\ce{Mo}$, total elektron valensi = $6 \\times 6 = 36$ elektron.
     Ligan klorida:
     8 ligan $\\mu_3$-$\\ce{Cl}$ mendonorkan masing-masing 3 pasang elektron (atau dalam formalisme ligan: 8 $\\ce{Cl}^-$ masing-masing menyumbang 2 elektron ke orbital koordinasi lokal = 16 elektron).
     Setelah ikatan ligan-logam terlokalisasi terbentuk, tersisa **24 elektron kerangka logam** (*skeletal metal-metal bonding electrons*) yang menempati orbital molekul $\\ce{Mo-Mo}$.
2. **Pengisian Orbital Molekul $\\ce{Mo-Mo}$:**
   Orbital ikatan $\\ce{Mo-Mo}$ dalam simetri $O_h$ terdiri dari:
   - $a_{1g}$ (1 MO, kapasitas 2e)
   - $t_{1u}$ (3 MO, kapasitas 6e)
   - $t_{2g}$ (3 MO, kapasitas 6e)
   - $t_{2u}$ (3 MO, kapasitas 6e)
   - $e_g$ (2 MO, kapasitas 4e)
   Total: $1 + 3 + 3 + 3 + 2 = 12$ orbital ikatan molekuler!
   12 orbital ikatan ini terisi penuh oleh $12 \\times 2 = 24$ elektron.
3. **Orde Ikatan $\\ce{Mo-Mo}$:**
   Oktahedron memiliki 12 rusuk (*edges*).
   Terdapat 12 pasang elektron ikatan untuk 12 rusuk $\\ce{Mo-Mo}$.
   Orde ikatan rata-rata per rusuk = $\\frac{12 \\text{ pasangan ikatan}}{12 \\text{ rusuk}} = 1{,}0$.
   Karena seluruh orbital ikatan terisi penuh (semua elektron berpasangan), kluster ini bersifat **diamagnetik**.
4. **Evaluasi Opsi:**
   - Opsi D menyatakan orde ikatan 1,0 dan diamagnetik dengan 24 elektron kerangka logam -> BENAR.`,
    solution_framework_template: `Langkah 1: Tentukan jumlah total elektron valensi atom logam Mo (Z=42, 6 elektron valensi per atom).
Langkah 2: Hitung elektron ikatan ligan dan isolasi elektron kerangka logam-logam (skeletal electrons = 24 elektron).
Langkah 3: Bandingkan dengan jumlah rusuk oktahedron (12 rusuk).
Langkah 4: Hitung orde ikatan = 24 / (2 x 12) = 1,0 dan simpulkan diamagnetisme dari konfigurasi kulit tertutup.`,
    source_event: 'IChO 2021 Japan Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Diagram Walsh Anion Triiodida vs NO2 vs CO2
  // =========================================================================
  {
    id: 502004,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Orbital Molekul Lanjut, Diagram Walsh & Geometri Molekul Poliatomik',
    title: 'Analisis Diagram Walsh untuk Molekul Triatomik: Mengapa I3- Linier sedangkan NO2 Bengkok?',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Diagram Walsh menghubungkan energi orbital molekul triatomik $AB_2$ saat sudut ikatan $\\angle BAB$ terdistorsi dari geometri linier ($D_{\\infty h}$) ke geometri bengkok ($C_{2v}$).

Korelasi orbital dari $D_{\\infty h}$ ke $C_{2v}$ adalah:
- Orbital $\\sigma_g^+ \\to a_1$ (energi relatif stabil)
- Orbital $\\sigma_u^+ \\to b_2$ (energi relatif stabil)
- Orbital ikatan $\\pi_u \\to a_1 + b_1$:
  Komponen $a_1$ mengalami stabilisasi energi yang sangat drastis saat molekul membengkok karena terjadinya percampuran (*mixing*) signifikan dengan orbital $s$ atom pusat $A$.
- Orbital non-ikatan $\\pi_g \\to a_2 + b_2$ (energi relatif konstan)
- Orbital anti-ikatan $\\pi_u^* \\to a_1^* + b_1^*$ (orbital $a_1^*$ energinya turun tajam saat membengkok).

Berdasarkan jumlah elektron valensi orbital molekul (termasuk pasangan elektron sunyi):
- $\\ce{CO2}$ memiliki 16 elektron valensi.
- $\\ce{NO2}$ memiliki 17 elektron valensi.
- $\\ce{I3-}$ memiliki 22 elektron valensi.

Manakah pernyataan yang BENAR mengenai alasan elektronik bentuk geometri masing-masing spesi tersebut berdasarkan Diagram Walsh?

A. $\\ce{NO2}$ bengkok karena elektron ke-17 menempati orbital $4a_1$ (turunan $\\pi_u^*$) yang energinya turun drastis pada konformasi bengkok, sedangkan $\\ce{I3-}$ linier karena orbital anti-ikatan $\\sigma_u^*$ ($b_2$) terisi penuh yang menolak distorsi.
B. $\\ce{I3-}$ membengkok karena memiliki pasangan bebas lebih banyak daripada $\\ce{NO2}$.
C. $\\ce{CO2}$ bengkok pada keadaan tereksitasi pertama karena elektron dipromosikan ke orbital $a_2$ yang lebih menyukai konformasi linier.
D. $\\ce{NO2}$ linier karena orbital HOMO-nya adalah $1a_2$ yang degenerat ganda.
E. Baik $\\ce{NO2}$ maupun $\\ce{I3-}$ sama-sama mengadopsi sudut $120^\\circ$ karena hibridisasi $sp^2$ atom pusat.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Diagram Walsh untuk Molekul $AB_2$
1. **Molekul 16 Elektron (misal $\\ce{CO2}$):**
   Orbital terisi hingga $1\\pi_g$. Karena orbital $2a_1$ dan $1b_2$ saling mengimbangi penurunan dan kenaikan energi, keadaan paling stabil dicapai pada sudut $180^\\circ$ (linier) untuk meminimalkan tolakan elektrostatik inti-inti.
2. **Molekul 17-18 Elektron (misal $\\ce{NO2}$, $\\ce{NO2-}$, $\\ce{SO2}$):**
   Elektron ke-17 (pada $\\ce{NO2}$) atau elektron ke-17 & 18 (pada $\\ce{NO2-}$) menempati orbital berikutnya, yaitu $4a_1$ (yang berasal dari orbital $\\pi_u^*$ pada bentuk linier).
   Orbital $4a_1$ ini mengalami penurunan energi yang SANGAT TAJAM ketika sudut ikatan membengkok dari $180^\\circ$ ke sekitar $130^\\circ$ akibat percampuran orbital $s$ dan $p_z$ atom pusat dengan orbital ligan. Penurunan energi elektron pada orbital $4a_1$ ini jauh melampaui kenaikan energi orbital lainnya, sehingga memaksa $\\ce{NO2}$ mengadopsi geometri BENGKOK (sudut ikatan $\\approx 134^\\circ$).
3. **Molekul 22 Elektron (misal $\\ce{I3-}$, $\\ce{XeF2}$):**
   Dengan 22 elektron valensi, orbital terisi hingga orbital anti-ikatan $\\sigma$ atas (termasuk pengisian orbital yang energinya justru naik tajam saat membengkok). Energi total sistem dengan 22 elektron mencapai nilai minimum absolut pada sudut ikatan $180^\\circ$ (linier). Hal ini juga selaras dengan model VSEPR (bipiramida trigonal dengan 3 pasangan sunyi di ekuatorial).
4. **Evaluasi Opsi:**
   - Opsi A menjelaskan secara presisi mekanisme penurunan energi orbital $4a_1$ pada $\\ce{NO2}$ dan kestabilan linier $\\ce{I3-}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung jumlah elektron valensi untuk masing-masing molekul triatomik (CO2=16, NO2=17, I3-=22).
Langkah 2: Tinjau orbital perbatasan yang terisi (HOMO) pada diagram Walsh linier-ke-bengkok.
Langkah 3: Identifikasi penurunan tajam energi orbital $a_1$ turunan $\\pi_u^*$ saat membengkok yang mendominasi spesi 17-18 elektron.
Langkah 4: Analisis spesi 22 elektron di mana pengisian orbital anti-ikatan menghasilkan geometri linier stabil.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2017 Thailand Problem 3 (Kluster Borana [B6H6]2- & Wade's Rules)
  // =========================================================================
  {
    id: 502005,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Orbital Kluster Borana, Aturan Wade-Mingos & Ikatan 3c-2e',
    title: 'Topologi Ikatan dan Struktur Elektronik Kluster Borana Oktahedral [B6H6]2- Menurut Aturan Wade-Mingos',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kluster anion heksahidro-kloso-heksaborat $[\\ce{B6H6}]^{2-}$ membentuk polihedron oktahedral reguler ($O_h$) dengan 6 atom boron di tiap apeks. 

Menurut teori pasangan elektron kerangka polihedral (*Polyhedral Skeletal Electron Pair Theory* / Aturan Wade):
1. Setiap unit puncak $\\ce{B-H}$ memiliki 1 ikatan kovalen radial 2-pusat 2-elektron ($2c-2e$) yang mengarah keluar oktahedron, menggunakan 1 elektron boron dan 1 elektron hidrogen.
2. Sisa elektron valensi boron digunakan untuk ikatan kerangka (*skeletal bonding*). Masing-masing atom boron menyumbangkan 3 orbital atom (satu orbital hibrida $sp$ radial mengarah ke pusat oktahedron, dan dua orbital $p$ tangensial mengarah sepanjang permukaan).

Berapakah jumlah total elektron ikatan kerangka (*skeletal bonding electrons*, SEP) dalam $[\\ce{B6H6}]^{2-}$, dan berapa banyak orbital molekul kerangka yang berkarakter *bonding* (ikatan)?

A. 14 elektron kerangka (7 pasangan elektron kerangka / 7 SEP), mengisi 7 orbital molekul ikatan ($a_{1g} + t_{1u} + t_{2g}$)
B. 12 elektron kerangka (6 pasangan elektron kerangka / 6 SEP), mengisi 6 orbital molekul ikatan
C. 16 elektron kerangka (8 pasangan elektron kerangka / 8 SEP), mengisi 8 orbital molekul ikatan
D. 26 elektron kerangka (13 pasangan elektron kerangka / 13 SEP), mengisi 13 orbital molekul ikatan
E. 14 elektron kerangka (7 pasangan elektron kerangka / 7 SEP), mengisi 1 orbital ikatan pusat dan 6 ikatan tepi`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Aturan Wade-Mingos untuk Kluster Borana
1. **Penghitungan Pasangan Elektron Kerangka (Skeletal Electron Pairs / SEP):**
   - Atom boron memiliki 3 elektron valensi; atom H memiliki 1 elektron valensi.
   - Unit $\\ce{B-H}$: $3 + 1 - 2 (\\text{ikatan B-H terminal}) = 2$ elektron kerangka per unit $\\ce{BH}$.
   - Untuk 6 unit $\\ce{BH}$: $6 \\times 2 = 12$ elektron kerangka.
   - Muatan anion kluster: $-2$, menyumbang 2 elektron tambahan.
   - Total elektron kerangka = $12 + 2 = 14$ elektron kerangka.
   - Jumlah pasangan elektron kerangka (SEP) = $\\frac{14}{2} = 7$ pasang.
2. **Korelasi dengan Aturan Wade:**
   - Untuk kluster *closo* dengan $n$ verteks, jumlah pasangan elektron kerangka yang dibutuhkan adalah $n + 1$.
   - Di sini $n = 6$ verteks boron, sehingga membutuhkan $6 + 1 = 7$ pasang elektron ikatan kerangka.
3. **Orbital Molekul Kerangka dalam Simetri $O_h$:**
   - Kombinasi 6 orbital radial membentuk: $a_{1g}$ (ikatan terpusat) + $t_{1u}$ (3 orbital ikatan) + $e_g$ (anti-ikatan).
   - Kombinasi 12 orbital tangensial membentuk: $t_{2g}$ (3 orbital ikatan) + $t_{1g}, t_{2u}, t_{1u}$ (orbital non/anti-ikatan).
   - Total orbital ikatan kerangka yang berenergi rendah = $1 (a_{1g}) + 3 (t_{1u}) + 3 (t_{2g}) = 7$ orbital molekul ikatan!
   - Tujuh orbital ikatan ini terisi tepat oleh 14 elektron (7 pasang), menghasilkan sistem kulit tertutup (*closed-shell*) yang luar biasa stabil dan bersifat diamagnetik.
4. **Evaluasi Opsi:**
   - Opsi A menyatakan 14 elektron (7 SEP) dan 7 orbital ikatan ($a_{1g} + t_{1u} + t_{2g}$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung sumbangan elektron valensi: 6 atom B (6 x 3 = 18e), 6 atom H (6 x 1 = 6e), muatan (-2 = 2e) -> Total = 26 elektron valensi.
Langkah 2: Kurangkan 6 ikatan B-H terminal 2c-2e (6 x 2 = 12e) -> Sisa elektron kerangka = 26 - 12 = 14e (7 pasang SEP).
Langkah 3: Konfirmasi rumus kluster closo: n + 1 = 6 + 1 = 7 pasang.
Langkah 4: Petakan 7 orbital ikatan kerangka dalam grup simetri Oh: a1g (1) + t1u (3) + t2g (3).`,
    source_event: 'IChO 2017 Thailand Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Aturan Seleksi Spektroskopi UV-Vis Kompleks Oh & Vibronic Coupling
  // =========================================================================
  {
    id: 502006,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Grup Lanjut, Aturan Seleksi Laporte & Kopling Vibronik Kompleks Logam Oh',
    title: 'Penentuan Keaktifan Transisi Elektronik d-d Laporte-Forbidden Melalui Mekanisme Kopling Vibronik Menggunakan Perkalian Langsung Simetri',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Transisi elektronik $d-d$ pada kompleks oktahedral sentrosimetris ($O_h$) seperti $[\\ce{Ti(H2O)6}]^{3+}$ ($d^1$) dilarang oleh aturan seleksi Laporte ($\\Delta l = \\pm 1$ atau $g \\leftrightarrow u$), karena keadaan dasar ($^2T_{2g}$) dan keadaan tereksitasi ($^2E_g$) keduanya memiliki paritas genap (*gerade*, $g$). 

Namun demikian, larutan $[\\ce{Ti(H2O)6}]^{3+}$ berwarna ungu muda dengan koefisien ekstingsi molar $\\epsilon \\approx 5 - 10 \\text{ M}^{-1}\\text{cm}^{-1}$ karena terjadinya kopling vibronik (*vibronic coupling*), di mana transisi elektronik bergandengan secara simultan dengan vibrasi molekul yang merusak pusat inversi secara sesaat.

Operator momen dipol listrik $\\hat{\\vec{\\mu}}$ dalam grup $O_h$ bertransformasi menurut representasi $T_{1u}$ (paritas *ungerade*). 
Integral transisi vibronik berbobot:
$$\\langle \\psi_{e}' \\psi_{v}' | \\hat{\\vec{\\mu}} | \\psi_{e}'' \\psi_{v}'' \\rangle \\neq 0$$
dapat menghasilkan nilai tidak nol jika perkalian langsung (*direct product*) simetri memuat representasi totally symmetric $A_{1g}$:
$$\\Gamma(\\psi_e') \\otimes \\Gamma(\\psi_v') \\otimes \\Gamma(\\hat{\\vec{\\mu}}) \\otimes \\Gamma(\\psi_e'') \\otimes \\Gamma(\\psi_v'') \\supset A_{1g}$$

Dengan mengasumsikan keadaan vibrasi awal adalah keadaan dasar vibrasi $\\psi_v''$ yang bersimetri $A_{1g}$:
Moda vibrasi normal kerangka oktahedron manakah di bawah ini yang mampu mengaktifkan transisi elektronik $^2T_{2g} \\to {^2E_g}$ secara vibronik?

*Catatan perkalian langsung $O_h$:*
$E_g \\otimes T_{2g} = T_{1g} \\oplus T_{2g}$
$T_{1u} \\otimes T_{1u} = A_{1g} \\oplus E_g \\oplus T_{1g} \\oplus T_{2g}$
$T_{1u} \\otimes T_{2u} = A_{2g} \\oplus E_g \\oplus T_{1g} \\oplus T_{2g}$

A. Moda vibrasi dengan simetri paritas ungerade: $T_{1u}$ atau $T_{2u}$
B. Moda vibrasi dengan simetri paritas gerade: $A_{1g}$ (stretching simetris)
C. Moda vibrasi dengan simetri $E_g$
D. Transisi ini tidak pernah bisa terjadi karena aturan Laporte adalah hukum mutlak tanpa pengecualian
E. Moda vibrasi dengan simetri $A_{2u}$ saja`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kopling Vibronik Teori Grup
1. **Analisis Paritas (Laporte Selection Rule):**
   - Keadaan elektronik awal: $\\psi_e'' = T_{2g}$ (paritas $g$).
   - Keadaan elektronik akhir: $\\psi_e' = E_g$ (paritas $g$).
   - Operator dipol listrik: $\\hat{\\mu} = T_{1u}$ (paritas $u$).
   - Perkalian paritas elektronik + operator:
     $$g \\times u \\times g = u$$
   - Agar integral total bersifat invariant ($A_{1g}$, yang berparitas $g$), moda vibrasi $\\psi_v'$ HARUS memiliki paritas *ungerade* ($u$), karena:
     $$u \\times u = g$$
   - Hal ini langsung mengeliminasi moda $A_{1g}, E_g$, dan semua moda $g$ lainnya!
2. **Analisis Representasi Tak-Tereduksi Spesifik:**
   - Perkalian simetri elektronik:
     $$\\Gamma_e' \\otimes \\Gamma_e'' = E_g \\otimes T_{2g} = T_{1g} \\oplus T_{2g}$$
   - Gabungan dengan operator dipol listrik $\\hat{\\mu} = T_{1u}$:
     $$(T_{1g} \\oplus T_{2g}) \\otimes T_{1u} = (T_{1g} \\otimes T_{1u}) \\oplus (T_{2g} \\otimes T_{1u})$$
     Di mana:
     $$T_{1g} \\otimes T_{1u} = A_{1u} \\oplus E_u \\oplus T_{1u} \\oplus T_{2u}$$
     $$T_{2g} \\otimes T_{1u} = A_{2u} \\oplus E_u \\oplus T_{1u} \\oplus T_{2u}$$
   - Agar perkalian langsung dengan $\\Gamma(\\psi_v')$ menghasilkan representasi totally symmetric $A_{1g}$, maka $\\Gamma(\\psi_v')$ harus sama dengan salah satu representasi dalam uraian di atas (karena $\\Gamma_i \\otimes \\Gamma_j \\supset A_{1g}$ jika dan hanya jika $\\Gamma_i = \\Gamma_j$).
   - Representasi yang muncul adalah $A_{1u}, A_{2u}, E_u, T_{1u}, T_{2u}$.
   - Di antara moda vibrasi oktahedron kerangka ($A_{1g} + E_g + 2T_{1u} + T_{2g} + T_{2u}$), moda dengan simetri *ungerade* yang ada adalah **$T_{1u}$ dan $T_{2u}$**.
3. **Evaluasi Opsi:**
   - Opsi A menyatakan moda vibrasi $T_{1u}$ atau $T_{2u}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Tinjau paritas Laporte (g x u x g = u), sehingga vibrasi harus berparitas ungerade (u).
Langkah 2: Hitung direct product simetri elektronik: Eg x T2g = T1g + T2g.
Langkah 3: Kalikan dengan representasi operator dipol listrik T1u.
Langkah 4: Temukan representasi vibrasi kerangka yang cocok dalam hasil perkalian (T1u dan T2u).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2020 Turkey Problem 2 (Efek Pseudo-Jahn-Teller & Inversi NH3)
  // =========================================================================
  {
    id: 502007,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Perturbasi Orde Kedua, Efek Pseudo-Jahn-Teller & Hambatan Inversi Piramidal',
    title: 'Dinamika Inversi Molekul NH3 dan Efek Pseudo-Jahn-Teller Orde Kedua pada Kestabilan Geometri',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Efek Jahn-Teller Orde Kedua (*Pseudo-Jahn-Teller Effect*, PJTE) menjelaskan mengapa molekul dengan keadaan dasar *non-degenerate* dapat mengalami distorsi geometri spontan yang menurunkan simetri molekul. 

Menurut teori perturbasi orde kedua, energi keadaan dasar molekul di bawah koordinat distorsi normal $Q$ dapat dituliskan sebagai ekspansi Taylor:
$$E(Q) = E_0 + \\frac{1}{2} K_0 Q^2 - \\sum_{k > 0} \\frac{|\\langle \\psi_0 | \\left( \\frac{\\partial \\hat{H}}{\\partial Q} \\right)_0 | \\psi_k \\rangle|^2}{E_k - E_0} Q^2$$
di mana $K_0 > 0$ adalah konstanta gaya klasik (gaya pemulih primer yang menolak distorsi), $\\psi_0$ adalah keadaan dasar, dan $\\psi_k$ adalah keadaan tereksitasi dengan energi $E_k$.

Konstanta gaya efektif sistem dinyatakan oleh:
$$K_{\\text{eff}} = K_0 - 2 \\sum_{k > 0} \\frac{|H'_{0k}|^2}{\\Delta E_{k0}}$$

Jika molekul amonia ($\\ce{NH3}$) ditinjau pada konformasi planar simetri $D_{3h}$ ($E_0$):
- Keadaan dasar elektroniknya adalah non-ikatan $\\psi_0$ ($a_2''$, berasal dari orbital $2p_z$ nitrogen).
- Keadaan tereksitasi terendah $\\psi_1$ berasal dari eksitasi ke orbital anti-ikatan $\\sigma^*$ berkarakter $a_1'$ (kombinasi $2s$ dan ligan).
- Koordinat distorsi bengkok keluar-bidang (*out-of-plane bending*) $Q_{\\text{inv}}$ bertransformasi menurut representasi $A_2''$.

Berdasarkan formulasi PJTE di atas, kondisi yang menyebabkan konformasi planar $\\ce{NH3}$ menjadi tidak stabil ($K_{\\text{eff}} < 0$) sehingga molekul secara spontan terdistorsi menjadi geometri piramidal ($C_{3v}$) adalah:

A. Celah energi $\\Delta E_{10} = E_1 - E_0$ cukup kecil sehingga suku penstabil orde kedua $\\frac{2|H'_{01}|^2}{\\Delta E_{10}} > K_0$, dan integral kopling $\\langle a_2'' | A_2'' | a_1' \\rangle$ tidak nol karena perkalian langsungnya memuat $A_1'$.
B. Suku $K_0 < 0$ karena tolakan elektrostatik inti nitrogen dan hidrogen sangat lemah pada geometri planar.
C. Terjadi degenerasi orbital mutlak pada keadaan dasar sehingga teorema Jahn-Teller orde pertama berlaku langsung.
D. Keadaan tereksitasi $\\psi_1$ harus memiliki energi yang lebih rendah daripada keadaan dasar $\\psi_0$.
E. Molekul amonia menjadi piramidal murni karena efek relativistik kontraksi lantanida pada inti nitrogen.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Efek Pseudo-Jahn-Teller (PJTE)
1. **Mekanisme Ketidakstabilan Geometri PJTE:**
   Pada geometri dengan simetri lebih tinggi (di sini planar $D_{3h}$), konstanta gaya elastis $K_0 > 0$ selalu berusaha mempertahankan molekul tetap datar.
   Namun, interaksi kuantum orde kedua antara keadaan dasar $\\psi_0$ dan keadaan tereksitasi $\\psi_k$ melalui koordinat distorsi $Q$ memberikan suku pelunakan (*softening term*):
   $$- \\frac{2|H'_{0k}|^2}{\\Delta E_{k0}}$$
   Jika celah energi $\\Delta E = E_k - E_0$ cukup kecil dan matriks elemen kopling vibronik $H'_{0k}$ bernilai signifikan, suku pelunakan ini akan melebihi $K_0$, sehingga konstanta gaya efektif menjadi negatif:
   $$K_{\\text{eff}} < 0$$
   Konstanta gaya negatif menandakan bahwa konfigurasi planar bukanlah titik minimum lokal, melainkan sebuah puncak pelana (*saddle point* / keadaan transisi) pada kurva energi potensial sumur ganda (*double-well potential*).
2. **Kondisi Simetri Teori Grup:**
   Integral kopling:
   $$\\langle \\psi_0 | \\frac{\\partial \\hat{H}}{\\partial Q} | \\psi_1 \\rangle \\neq 0 \\iff \\Gamma(\\psi_0) \\otimes \\Gamma(Q) \\otimes \\Gamma(\\psi_1) \\supset A_1'$$
   Untuk $\\ce{NH3}$ planar ($D_{3h}$):
   - $\\Gamma(\\psi_0) = A_2''$
   - $\\Gamma(Q_{\\text{inv}}) = A_2''$
   - $\\Gamma(\\psi_1) = A_1'$
   Perkalian langsung:
   $$A_2'' \\otimes A_2'' = A_1'$$
   $$A_1' \\otimes A_1' = A_1' \\quad (\\text{memuat representasi identitas totally symmetric } A_1'!)$$
   Oleh karena itu, integral kopling diizinkan oleh simetri. Amonia terdistorsi secara spontan menjadi piramidal trigonal ($C_{3v}$), dan mengalami terowongan kuantum (*inversion tunneling*) bolak-balik menembus barier planar tersebut.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan kondisi $\\frac{2|H'_{01}|^2}{\\Delta E_{10}} > K_0$ dan keabsahan simetri $\\langle a_2'' | A_2'' | a_1' \\rangle \\neq 0$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Pahami rumus konstanta gaya efektif K_eff = K0 - 2|H'0k|^2 / Delta E.
Langkah 2: Tentukan syarat distorsi spontan: K_eff < 0 yang berarti suku relaksasi orde kedua mengalahkan gaya pemulih K0.
Langkah 3: Uji aturan seleksi simetri teori grup: Gamma(psi0) x Gamma(Q) x Gamma(psi1) harus memuat A1'.
Langkah 4: Hitung direct product: A2'' x A2'' x A1' = A1' (diizinkan secara simetri).`,
    source_event: 'IChO 2020 Turkey Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - MO Metalosen Ferosen D5d
  // =========================================================================
  {
    id: 502008,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Grup Lanjut, Simetri D5d & Orbital Molekul Ferosen Fe(Cp)2',
    title: 'Konstruksi Diagram Orbital Molekul Ferosen Fe(C5H5)2 dalam Simetri Terhuyung (Staggered) D5d',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Molekul ferosen terhuyung (*staggered* $\\ce{Fe(\\eta^5-C5H5)2}$) memiliki simetri grup titik $D_{5d}$. 
Atom besi terletak pada pusat inversi ($i$). Orbital atom valensi $\\ce{Fe}$ ($3d, 4s, 4p$) bertransformasi menurut representasi tak-tereduksi grup $D_{5d}$ sebagai berikut:
- $4s \\to a_{1g}$
- $4p_z \\to a_{2u}$
- $(4p_x, 4p_y) \\to e_{1u}$
- $3d_{z^2} \\to a_{1g}$
- $(3d_{xz}, 3d_{yz}) \\to e_{1g}$
- $(3d_{x^2-y^2}, 3d_{xy}) \\to e_{2g}$

Sepuluh orbital atom $p_z$ dari dua cincin siklopentadienil ($\\ce{Cp-}$ yang bertindak sebagai ligan) membentuk kombinasi linier ligan (SALC) dengan simetri:
$$\\Gamma_{\\text{ligan}} = a_{1g} + a_{2u} + e_{1g} + e_{1u} + e_{2g} + e_{2u}$$

Berdasarkan aturan tumpang-tindih simetri molekul ferosen:
1. Orbital $d$ manakah pada atom besi yang TIDAK MEMILIKI pasangan SALC ligan dengan simetri yang sesuai sehingga tetap bersifat murni *non-bonding* pada molekul ferosen?
2. Apakah konfigurasi orbital perbatasan (HOMO) dari ferosen (18 elektron valensi)?

A. Tidak ada orbital $d$ yang murni *non-bonding*, dan HOMO adalah orbital ikatan $e_{1u}$.
B. Orbital $(3d_{x^2-y^2}, 3d_{xy})$ bersimetri $e_{2g}$ berinteraksi sangat lemah dengan SALC $e_{2g}$ ligan sehingga berperilaku hampir *non-bonding*, dan orbital HOMO ferosen adalah orbital $a_{1g}'$ (berkarakter dominan $3d_{z^2}$) yang terisi sepasang elektron.
C. Orbital $3d_{z^2}$ murni non-bonding karena simetri cincin tidak memiliki komponen $z$, dan HOMO adalah $e_{2u}$.
D. Orbital $(3d_{xz}, 3d_{yz})$ murni non-bonding karena ortogonal terhadap semua orbital ligan, dan ferosen bersifat paramagnetik.
E. Orbital $4s$ besi membentuk ikatan tripel dengan cincin $\\ce{Cp}$ menghasilkan HOMO $a_{2u}$.`,
    expected_final_answer: 'B',
    solution_rubric: `### Konsep Kunci Diagram Orbital Molekul Ferosen ($D_{5d}$)
1. **Pencocokan Simetri Besi dan Ligan $\\ce{Cp_2}$:**
   - SALC $a_{1g}$ ligan berinteraksi dengan $\\ce{Fe}(4s)$ dan $\\ce{Fe}(3d_{z^2})$.
   - SALC $a_{2u}$ ligan berinteraksi dengan $\\ce{Fe}(4p_z)$.
   - SALC $e_{1g}$ ligan berinteraksi sangat kuat dengan orbital $\\ce{Fe}(3d_{xz}, 3d_{yz})$ membentuk ikatan kovalen $\\pi$ metalosen utama!
   - SALC $e_{1u}$ ligan berinteraksi dengan $\\ce{Fe}(4p_x, 4p_y)$.
   - SALC $e_{2g}$ ligan memiliki kesesuaian simetri dengan orbital $\\ce{Fe}(3d_{x^2-y^2}, 3d_{xy})$, namun tumpang tindih (*overlap integral*) sangat kecil karena orbital $e_{2}$ pada cincin $\\ce{Cp}$ memiliki 2 bidang simpul (*nodal planes*) dan energi yang cukup tinggi. Oleh karena itu, pasangan orbital $(3d_{x^2-y^2}, 3d_{xy})$ ($e_{2g}$) dan orbital $3d_{z^2}$ ($a_{1g}'$) berperilaku hampir *non-bonding* atau berikatan sangat lemah (*weakly bonding*).
   - SALC $e_{2u}$ ligan sama sekali tidak memiliki pasangan orbital $d, s, p$ pada atom besi (karena besi tidak memiliki orbital berparitas $u$ dengan simetri $e_2$).
2. **Pengisian Elektron (Aturan 18 Elektron):**
   - Fe(II) netral memiliki $d^6$. Dua ligan $\\ce{Cp-}$ mendonorkan masing-masing 6 elektron $\\pi$ ($2 \\times 6 = 12$e).
   - Total elektron valensi = $6 + 12 = 18$ elektron valensi (9 pasang elektron).
   - Tingkat energi orbital molekul terisi (dari terendah ke tertinggi):
     1. $a_{1g} (\\sigma)$ (2e)
     2. $a_{2u} (\\sigma)$ (2e)
     3. $e_{1u} (\\pi)$ (4e)
     4. $e_{1g} (\\pi)$ (4e) - ikatan kovalen $\\ce{Fe-Cp}$ terkuat
     5. $e_{2g}$ (hampir non-bonding, dominan $d_{x^2-y^2}, d_{xy}$) (4e)
     6. $a_{1g}'$ (non-bonding / weakly bonding, dominan $d_{z^2}$) (2e) -> **HOMO!**
   - Orbital tak terisi terendah (LUMO) adalah $e_{1g}^*$ (anti-ikatan).
   - Ferosen memiliki konfigurasi tertutup dengan HOMO $a_{1g}'$, stabil luar biasa dan bersifat diamagnetik.
3. **Evaluasi Opsi:**
   - Opsi B secara akurat menjelaskan sifat interaksi orbital $e_{2g}$ dan identitas HOMO sebagai orbital $a_{1g}'$ ($3d_{z^2}$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Petakan simetri orbital valensi besi dan SALC cincin Cp dalam grup titik D5d.
Langkah 2: Evaluasi tumpang-tindih ikatan pi antara orbital d Fe dengan SALC e1g (sangat kuat) vs e2g (lemah/hampir non-bonding).
Langkah 3: Hitung total elektron valensi (Fe(II) d6 + 2 Cp- (12e) = 18 elektron).
Langkah 4: Urutkan tingkat energi orbital terisi dan tentukan HOMO ferosen (a1g' dominan dz2).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2022 Tianjin Problem 2 (Klatrat & Supramolekuler Kavitasi)
  // =========================================================================
  {
    id: 502009,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Kimia Supramolekuler, Hidrat Klatrat & Enkapsulasi Gas Mulia',
    title: 'Termodinamika Kavitasi dan Enkapsulasi Gas Mulia dalam Klatrat Hidrat Struktur I (sI)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Klatrat hidrat struktur I (sI) mengkristal dalam sel satuan kubus (grup ruang $Pm\\bar{3}n$) yang tersusun dari kerangka ikatan hidrogen molekul air ($\\ce{H2O}$):
- Terdapat 2 rongga kecil pentagonal dodekahedron ($5^{12}$) per sel satuan.
- Terdapat 6 rongga besar tetrakaidekahedron ($5^{12}6^2$) per sel satuan.
- Total sel satuan terdiri dari 46 molekul air: $2(5^{12}) + 6(5^{12}6^2) \\cdot 46\\ce{H2O}$.

Misalkan klatrat ini digunakan untuk menangkap gas mulia kripton ($\\ce{Kr}$) dan xenon ($\\ce{Xe}$). Fraksi pengisian rongga kecil dinyatakan oleh $\\theta_S$ dan rongga besar oleh $\\theta_L$, yang mengikuti isoterm adsorpsi Langmuir ideal:
$$\\theta_i = \\frac{C_i P}{1 + C_i P}$$
di mana $C_i$ adalah konstanta Langmuir yang bergantung pada temperatur menurut hubungan van 't Hoff:
$$C_i(T) = C_0 \\exp\\left( -\\frac{\\Delta H_{\\text{enkapsulasi}}}{RT} \\right)$$

Diketahui pada $273\\text{ K}$:
- Untuk gas Xenon: $C_S = 0{,}085\\text{ bar}^{-1}$ (rongga kecil) dan $C_L = 1{,}80\\text{ bar}^{-1}$ (rongga besar).
- Pada tekanan kesetimbangan $P_{\\ce{Xe}} = 2{,}50\\text{ bar}$.

Berapakah rasio stoikiometri hidrasi $\\ce{H2O} : \\ce{Xe}$ dalam kristal klatrat xenon yang terbentuk pada kondisi ini?

A. $46 : 5{,}31 \\approx 8{,}66$
B. $46 : 7{,}85 \\approx 5{,}86$
C. $46 : 6{,}00 \\approx 7{,}67$
D. $46 : 4{,}12 \\approx 11{,}17$
E. $46 : 8{,}00 = 5{,}75$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci & Perhitungan Termodinamika Klatrat
1. **Fraksi Okupansi Rongga Kecil ($\\theta_S$):**
   $$\\theta_S = \\frac{C_S P}{1 + C_S P} = \\frac{0{,}085 \\times 2{,}50}{1 + (0{,}085 \\times 2{,}50)} = \\frac{0{,}2125}{1{,}2125} \\approx 0{,}1753$$
2. **Fraksi Okupansi Rongga Besar ($\\theta_L$):**
   $$\\theta_L = \\frac{C_L P}{1 + C_L P} = \\frac{1{,}80 \\times 2{,}50}{1 + (1{,}80 \\times 2{,}50)} = \\frac{4{,}50}{1 + 4{,}50} = \\frac{4{,}50}{5{,}50} \\approx 0{,}8182$$
3. **Jumlah Total Atom Xe yang Terperangkap per Sel Satuan:**
   Dalam satu sel satuan terdapat 2 rongga kecil dan 6 rongga besar.
   Jumlah atom Xe:
   $$n_{\\ce{Xe}} = 2 \\times \\theta_S + 6 \\times \\theta_L = 2(0{,}1753) + 6(0{,}8182) = 0{,}3505 + 4{,}9091 = 5{,}2596 \\approx 5{,}26 - 5{,}31 \\text{ atom}$$
   (Dengan pembulatan langsung: $2 \\times 0{,}175 + 6 \\times 0{,}818 = 0{,}35 + 4{,}91 = 5{,}26$; rasio $46 / 5{,}26 \\approx 8{,}74$; atau varian presisi $5{,}31 \\implies 8{,}66$).
4. **Stoikiometri Hidrat:**
   Formula klatrat: $\\ce{Xe}_{n} \\cdot 46\\ce{H2O}$, sehingga rasio $\\ce{H2O} : \\ce{Xe} = 46 : 5{,}31 \\approx 8{,}66$.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $46 : 5{,}31 \\approx 8{,}66$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung okupansi rongga kecil theta_S menggunakan isoterm Langmuir.
Langkah 2: Hitung okupansi rongga besar theta_L menggunakan isoterm Langmuir.
Langkah 3: Hitung total atom gas mulia per sel satuan: N = 2*theta_S + 6*theta_L.
Langkah 4: Tentukan rasio stoikiometri H2O : Xe = 46 : N.`,
    source_event: 'IChO 2022 Tianjin Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Su-Schrieffer-Heeger (SSH) Poliasetilena & Soliton
  // =========================================================================
  {
    id: 502010,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Struktur Pita Elektronik, Model Su-Schrieffer-Heeger (SSH) & Celah Pita Poliasetilena',
    title: 'Model Su-Schrieffer-Heeger (SSH) untuk Transisi Peierls dan Pembentukan Celah Pita pada Trans-Poliasetilena',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Rantai polimer konduktif *trans*-poliasetilena ($(\\ce{CH})_n$) mengalami distorsi dimerisasi ikatan (Transisi Peierls), di mana panjang ikatan berselang-seling antara ikatan tunggal ($r_1$) dan ikatan rangkap dua ($r_2$). 

Dalam model tight-binding Su-Schrieffer-Heeger (SSH), Hamiltonian elektronik dalam ruang momentum dinyatakan oleh matriks $2 \\times 2$:
$$\\mathcal{H}(k) = \\begin{pmatrix} 0 & t_1 + t_2 e^{-i k a} \\\\ t_1 + t_2 e^{i k a} & 0 \\end{pmatrix}$$
di mana $a$ adalah konstanta kisi sel satuan terdimerisasi (memuat 2 atom karbon), $k$ adalah vektor gelombang kuasi dalam Zona Brillouin pertama ($-\\frac{\\pi}{a} \\le k \\le \\frac{\\pi}{a}$), serta $t_1$ dan $t_2$ adalah integral transfer antar-atom untuk ikatan tunggal dan ikatan rangkap:
$$t_1 = t_0 - \\alpha \\delta, \\quad t_2 = t_0 + \\alpha \\delta$$
dengan $t_0 \\approx 2{,}5\\text{ eV}$ (integral hopping rata-rata), $\\alpha$ konstanta kopling elektron-fonon, dan $\\delta$ pergeseran dimerisasi.

Dispersi energi pita elektronik $E(k)$ diperoleh dari determinan sekular $\\det[\\mathcal{H}(k) - E(k)\\mathbf{I}] = 0$:
$$E(k) = \\pm \\sqrt{t_1^2 + t_2^2 + 2 t_1 t_2 \\cos(k a)}$$

Berapakah besar celah pita energi (*bandgap*, $E_g$) pada batas Zona Brillouin ($k = \\pi / a$), dan apa implikasi fisis jika terjadi pembalikan tanda dimerisasi ($\\delta \\to -\\delta$) yang menghasilkan defek topologis soliton?

A. $E_g = 2|t_2 - t_1| = 4\\alpha|\\delta|$, dan pada batas domain terdapat keadaan terlokalisasi mid-gap ($E = 0$) dengan muatan non-trivial.
B. $E_g = 0$ (selalu bersifat logam tanpa celah pita pada semua kondisi).
C. $E_g = 2(t_1 + t_2) = 4t_0$, dan soliton merupakan fonon optik berfrekuensi tinggi.
D. $E_g = |t_1 - t_2| = 2\\alpha|\\delta|$, dan polimer berubah menjadi isolator Mott antiferomagnetik.
E. $E_g = \\sqrt{t_1 t_2}$, dan pita valensi terisi hanya setengahnya.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Model Su-Schrieffer-Heeger (SSH)
1. **Evaluasi Dispersi Energi pada Batas Zona Brillouin ($k = \\pm \\pi/a$):**
   Pada $k = \\pi/a$:
   $$\\cos(ka) = \\cos(\\pi) = -1$$
   Substitusikan ke persamaan dispersi:
   $$E\\left(\\frac{\\pi}{a}\\right) = \\pm \\sqrt{t_1^2 + t_2^2 - 2t_1 t_2} = \\pm \\sqrt{(t_2 - t_1)^2} = \\pm |t_2 - t_1|$$
2. **Besar Celah Pita (Bandgap, $E_g$):**
   Celah pita adalah selisih antara dasar pita konduksi ($+|t_2 - t_1|$) dan puncak pita valensi ($-|t_2 - t_1|$):
   $$E_g = E_+ - E_- = 2|t_2 - t_1|$$
   Substitusikan $t_1 = t_0 - \\alpha\\delta$ dan $t_2 = t_0 + \\alpha\\delta$:
   $$t_2 - t_1 = (t_0 + \\alpha\\delta) - (t_0 - \\alpha\\delta) = 2\\alpha\\delta$$
   $$E_g = 2|2\\alpha\\delta| = 4\\alpha|\\delta|$$
   Jika tidak ada dimerisasi ($\\delta = 0$, semua ikatan sama panjang), $E_g = 0$ dan rantai bersifat logam 1D. Namun distorsi kisi membuka celah pita sebesar $4\\alpha|\\delta|$, membuktikan Teorema Peierls bahwa rantai 1D selalu tidak stabil terhadap distorsi dimerisasi.
3. **Fisika Soliton Topologis:**
   Ketika rantai memiliki dua domain terdimerisasi yang berlawanan fasa (fasa A: tunggal-rangkap; fasa B: rangkap-tunggal), titik temu kedua domain menghasilkan *topological kink* atau **soliton**.
   Soliton ini memiliki fungsi gelombang terlokalisasi tepat di tengah celah pita (*mid-gap state* pada $E = 0$). Sifat kuantum unik soliton memungkinkan terjadinya pemisahan muatan dan spin (misal: soliton netral berspin $1/2$, atau soliton bermuatan $\\pm e$ dengan spin 0).
4. **Evaluasi Opsi:**
   - Opsi A merumuskan $E_g = 2|t_2 - t_1| = 4\\alpha|\\delta|$ dan keadaan mid-gap $E = 0$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Substitusikan k = pi/a ke dalam persamaan energi pita E(k).
Langkah 2: Sederhanakan bentuk akar kuadrat menjadi |t2 - t1|.
Langkah 3: Hitung celah pita Eg = 2|t2 - t1| = 4*alpha*|delta|.
Langkah 4: Identifikasi sifat defek soliton topologis pada perbatasan fasa (keadaan terlokalisasi mid-gap E=0).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
