/**
 * osnQuestionsPillar2Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 2: Teori Grup, Simetri Molekuler, Orbital Molekul Lanjut & Teori Hückel
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 402001 - 402010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 02 = Pilar 2
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_2_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 4 (Penentuan Grup Titik Simetri Molekul Kompleks)
  // =========================================================================
  {
    id: 402001,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Grup Kimia, Operasi Simetri & Klasifikasi Grup Titik',
    title: 'Penentuan Grup Titik Simetri Molekul Ferosen Konformasi Silang (Staggered)',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Molekul ferosen, $\\ce{Fe(\eta^5-C5H5)2}$, memiliki struktur sandwich di mana atom besi diapit oleh dua cincin siklopentadienil. Dalam fasa gas pada suhu kamar, molekul ini mengadopsi konformasi silang (*staggered*) dengan energi minimum.

Operasi simetri yang dimiliki molekul ferosen konformasi silang meliputi:
- Sumbu rotasi utama $C_5$ melalui atom besi dan pusat kedua cincin.
- 5 sumbu rotasi $C_2$ tegak lurus terhadap sumbu $C_5$.
- Sumbu rotasi-improper $S_{10}$ koaksial dengan sumbu $C_5$.
- Pusat inversi $i$ tepat pada atom besi.
- 5 bidang cermin dihedral $\sigma_d$ yang membagi dua sudut antarsumbu $C_2$.
- Tidak memiliki bidang cermin horizontal $\sigma_h$.

Grup titik simetri (point group) Schönflies manakah yang tepat untuk molekul ferosen konformasi silang tersebut?

A. $D_{5h}$
B. $D_{5d}$
C. $C_{5v}$
D. $C_{5h}$
E. $S_{10}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Klasifikasi Grup Titik Schönflies:**
1. Langkah Klasifikasi Standar Bagan Alir Grup Titik:
   - Apakah molekul linear? Tidak.
   - Apakah molekul memiliki simetri sangat tinggi ($I_h, O_h, T_d$)? Tidak.
   - Apakah ada sumbu rotasi utama $C_n$? Ya, terdapat sumbu rotasi $C_5$ ($n = 5$).
   - Apakah terdapat $n$ buah sumbu $C_2$ yang tegak lurus sumbu $C_5$?
     Ya, terdapat 5 sumbu $C_2 \perp C_5$. Karena ada $n C_2 \perp C_n$, molekul tergolong keluarga dihedral ($D$).
   - Apakah terdapat bidang cermin horizontal $\sigma_h$ (tegak lurus sumbu utama)?
     Pada konformasi silang (*staggered*), pemantulan terhadap bidang horizontal di antara kedua cincin memproyeksikan verteks cincin atas ke ruang kosong cincin bawah (tidak menghasilkan konformasi identik). Jadi **TIDAK ADA $\sigma_h$**.
   - Apakah terdapat $n$ bidang cermin vertikal/dihedral $\sigma_d$?
     Ya, terdapat $5 \sigma_d$ yang melewati atom besi dan membagi dua sudut antarsumbu $C_2$.
   - Oleh karena itu, grup titiknya adalah **$D_{5d}$**.
2. Perbandingan dengan Konformasi Eklips:
   - Jika kedua cincin bertindihan sempurna (*eclipsed*), molekul memiliki bidang cermin horizontal $\sigma_h$ sehingga grup titiknya adalah **$D_{5h}$**.
   - Pada konformasi silang (*staggered*), ketiadaan $\sigma_h$ dan keberadaan pusat inversi $i$ serta $5\sigma_d$ menetapkan grup titik **$D_{5d}$**.

**Analisis Distraktor:**
- Pilihan A ($D_{5h}$): Untuk konformasi eklips (*eclipsed*).
- Pilihan B ($D_{5d}$): Benar untuk konformasi silang (*staggered*).
- Pilihan C ($C_{5v}$): Jika tidak ada sumbu $C_2$ tegak lurus (misal kation monosiklopentadienil).
- Pilihan D ($C_{5h}$): Tidak memiliki sumbu $C_2$ tegak lurus.
- Pilihan E ($S_{10}$): Hanya grup siklik tanpa sumbu $C_2$.`,
    solution_framework_template: `Tahap 1: Identifikasi sumbu rotasi utama tertinggi: C5.
Tahap 2: Periksa keberadaan sumbu tegak lurus: ada 5 sumbu C2 tegak lurus C5 -> keluarga D5.
Tahap 3: Periksa bidang horizontal sigma_h: tidak ada pada konformasi staggered.
Tahap 4: Identifikasi adanya 5 bidang dihedral sigma_d dan pusat inversi i -> grup titik D5d.`,
    tags: ['teori-grup', 'grup-titik', 'ferosen', 'simetri-molekul', 'osn-2023'],
    source_event: 'OSN Kimia 2023 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Reduksi Representasi)
  // =========================================================================
  {
    id: 402002,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Tabel Karakter Teori Grup & Reduksi Representasi Vibrasi',
    title: 'Pereduksian Representasi Vibrasi Molekul Air (C2v) Menggunakan Rumus Ortogonalitas',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Molekul air ($\ce{H2O}$) memiliki geometri bengkok dengan grup titik simetri $C_{2v}$. Tabel karakter $C_{2v}$ adalah sebagai berikut:

| $C_{2v}$ | $E$ | $C_2$ | $\sigma_v(xz)$ | $\sigma_v'(yz)$ | Fungsi Linear & Rotasi |
| :---: | :---: | :---: | :---: | :---: | :--- |
| $A_1$ | $+1$ | $+1$ | $+1$ | $+1$ | $z, x^2, y^2, z^2$ |
| $A_2$ | $+1$ | $+1$ | $-1$ | $-1$ | $R_z, xy$ |
| $B_1$ | $+1$ | $-1$ | $+1$ | $-1$ | $x, R_y, xz$ |
| $B_2$ | $+1$ | $-1$ | $-1$ | $+1$ | $y, R_x, yz$ |

Representasi tereduksi total derajat kebebasan Cartesian ($\Gamma_{3N}$) dari ketiga atom pada molekul $\ce{H2O}$ menghasilkan karakter:
$$\chi(E) = 9, \quad \chi(C_2) = -1, \quad \chi(\sigma_v(xz)) = 3, \quad \chi(\sigma_v'(yz)) = 1$$
Orde grup $h = 4$.

Setelah mengeliminasi derajat kebebasan translasi ($\Gamma_{\text{trans}} = A_1 + B_1 + B_2$) dan rotasi ($\Gamma_{\text{rot}} = A_2 + B_1 + B_2$), bagaimanakah uraian representasi tak tereduksi untuk modus getaran vibrasi normal ($\Gamma_{\text{vib}}$) molekul $\ce{H2O}$?

A. $\Gamma_{\text{vib}} = 2 A_1 + B_1$
B. $\Gamma_{\text{vib}} = A_1 + A_2 + B_1$
C. $\Gamma_{\text{vib}} = 2 A_1 + B_2$
D. $\Gamma_{\text{vib}} = A_1 + 2 B_2$
E. $\Gamma_{\text{vib}} = 3 A_1$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Teorema Ortogonalitas Besar (GOT):**
1. Rumus Reduksi Frobenius untuk mencari frekuensi kemunculan representasi tak tereduksi $i$ ($a_i$):
   $$a_i = \\frac{1}{h} \\sum_{R} g_R \\chi(R) \\chi_i(R)$$
   dengan $h = 4$, dan untuk grup $C_{2v}$ semua kelas memiliki $g_R = 1$.
2. Menghitung koefisien untuk $\\Gamma_{3N}$:
   - Untuk $A_1$:
     $$a(A_1) = \\frac{1}{4} [ (1)(9)(1) + (1)(-1)(1) + (1)(3)(1) + (1)(1)(1) ] = \\frac{1}{4} [ 9 - 1 + 3 + 1 ] = \\frac{12}{4} = 3$$
   - Untuk $A_2$:
     $$a(A_2) = \\frac{1}{4} [ (1)(9)(1) + (1)(-1)(1) + (1)(3)(-1) + (1)(1)(-1) ] = \\frac{1}{4} [ 9 - 1 - 3 - 1 ] = \\frac{4}{4} = 1$$
   - Untuk $B_1$:
     $$a(B_1) = \\frac{1}{4} [ (1)(9)(1) + (1)(-1)(-1) + (1)(3)(1) + (1)(1)(-1) ] = \\frac{1}{4} [ 9 + 1 + 3 - 1 ] = \\frac{12}{4} = 3$$
   - Untuk $B_2$:
     $$a(B_2) = \\frac{1}{4} [ (1)(9)(1) + (1)(-1)(-1) + (1)(3)(-1) + (1)(1)(1) ] = \\frac{1}{4} [ 9 + 1 - 3 + 1 ] = \\frac{8}{4} = 2$$
   Maka:
   $$\\Gamma_{3N} = 3 A_1 + A_2 + 3 B_1 + 2 B_2$$
3. Menghitung Modus Vibrasi Normal ($\\Gamma_{\\text{vib}} = \\Gamma_{3N} - \\Gamma_{\\text{trans}} - \\Gamma_{\\text{rot}}$):
   $$\\Gamma_{\\text{trans}} = A_1 + B_1 + B_2$$
   $$\\Gamma_{\\text{rot}} = A_2 + B_1 + B_2$$
   $$\\Gamma_{\\text{trans}} + \\Gamma_{\\text{rot}} = A_1 + A_2 + 2 B_1 + 2 B_2$$
   Kurangkan dari $\\Gamma_{3N}$:
   $$\\Gamma_{\\text{vib}} = (3 A_1 + A_2 + 3 B_1 + 2 B_2) - (A_1 + A_2 + 2 B_1 + 2 B_2)$$
   $$\\Gamma_{\\text{vib}} = 2 A_1 + B_1$$
   (Di mana 3 modus vibrasi adalah: regangan simetris $A_1$, tekukan simetris $A_1$, dan regangan asimetris $B_1$).

**Analisis Distraktor:**
- Pilihan A: Benar ($\Gamma_{\text{vib}} = 2 A_1 + B_1$).
- Pilihan B: Menyertakan $A_2$ (yang bukan modus vibrasi aktif IR molekul air).
- Pilihan C: Menukar $B_1$ dengan $B_2$ (bergantung pada orientasi sumbu molekuler standar $xz$ vs $yz$).
- Pilihan D: Jumlah total modus getaran salah.
- Pilihan E: Mengabaikan regangan asimetris.`,
    solution_framework_template: `Tahap 1: Terapkan rumus reduksi Frobenius a_i = (1/h) * sum(chi_total * chi_i) pada Gamma_3N.
Tahap 2: Dapatkan komposisi total Gamma_3N = 3A1 + A2 + 3B1 + 2B2.
Tahap 3: Identifikasi komponen translasi (A1 + B1 + B2) dan rotasi (A2 + B1 + B2).
Tahap 4: Kurangkan untuk mendapatkan Gamma_vib = 2A1 + B1.`,
    tags: ['teori-grup', 'reduksi-representasi', 'tabel-karakter', 'vibrasi-normal', 'c2v'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2022 No. 4 (SALC Orbital Ligan SF6 Simetri Oh)
  // =========================================================================
  {
    id: 402003,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'SALC Ligan, MO Oktahedral Oh & Keterlibatan Orbital d',
    title: 'Kombinasi Linier Teradaptasi Simetri (SALC) dan Diagram MO Oktahedral SF6',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Molekul belerang heksafluorida ($\ce{SF6}$) mengadopsi simetri oktahedral sempurna ($O_h$). Belerang bertindak sebagai atom pusat dengan orbital valensi $3s$ dan $3p$. Enam ligan fluorin menyediakan enam orbital ikatan $\sigma$ yang berorientasi ke arah atom belerang.

Representasi tereduksi untuk enam orbital $\sigma$-ligan fluorin mereduksi menjadi:
$$\Gamma_{\sigma} = A_{1g} + E_g + T_{1u}$$

Sesuai aturan tumpang tindih simetri Teori Orbital Molekul (MO):
1. Orbital atom belerang manakah yang memiliki simetri yang cocok untuk berinteraksi dengan komponen $A_{1g}$ dan $T_{1u}$ dari SALC fluorin?
2. Jika orbital $3d$ belerang tidak diikutsertakan karena celah energi yang terlalu tinggi, apakah peran dari orbital SALC bersimetri $E_g$?

A. $A_{1g}$ cocok dengan $3s$; $T_{1u}$ cocok dengan $3p$; orbital $E_g$ menjadi orbital molekul non-ikatan murni
B. $A_{1g}$ cocok dengan $3p_z$; $T_{1u}$ cocok dengan $3s$; orbital $E_g$ menjadi anti-ikatan kuat
C. $A_{1g}$ cocok dengan $3d_{z^2}$; $T_{1u}$ cocok dengan $3p$; orbital $E_g$ membentuk ikatan $\pi$
D. $A_{1g}$ cocok dengan $3s$; $T_{1u}$ cocok dengan $3d$; orbital $E_g$ terdelokalisasi ke inti
E. Tidak ada orbital belerang yang cocok dengan $A_{1g}$ maupun $T_{1u}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Simetri Orbital Molekul $O_h$:**
1. Penentuan Simetri Orbital Atom Pusat (Belerang) dalam Grup $O_h$:
   - Orbital $3s$: bersifat bola simetris penuh terhadap semua operasi simetri oktahedral $\implies$ bersimetri **$A_{1g}$**.
   - Tiga orbital $3p$ ($p_x, p_y, p_z$): bertransformasi sebagai vektor koordinat Cartesius $(x, y, z)$, yang dalam tabel karakter $O_h$ memiliki representasi triply degenerate **$T_{1u}$**.
   - Lima orbital $3d$: terbelah menjadi set $e_g$ ($d_{z^2}, d_{x^2-y^2}$) dan set $t_{2g}$ ($d_{xy}, d_{xz}, d_{yz}$).
2. Interaksi dengan SALC Ligan Fluorin ($\\Gamma_\\sigma = A_{1g} + E_g + T_{1u}$):
   - SALC $A_{1g}$ berinteraksi dengan orbital $3s$ belerang membentuk sepasang orbital ikatan $a_{1g}(\sigma)$ dan anti-ikatan $a_{1g}^*(\sigma^*)$.
   - Tiga SALC $T_{1u}$ berinteraksi dengan tiga orbital $3p$ belerang membentuk tiga orbital ikatan $t_{1u}(\sigma)$ dan tiga anti-ikatan $t_{1u}^*(\sigma^*)$.
3. Peran SALC $E_g$ tanpa Keterlibatan Orbital $3d$:
   - Perhitungan kimia kuantum ab initio modern membuktikan bahwa orbital $3d$ belerang memiliki energi terlalu tinggi dan terlalu terdifusi untuk berpartisipasi secara signifikan dalam ikatan kovalen.
   - Karena pada kulit valensi atom belerang tidak ada orbital dengan simetri $E_g$ (hanya $s \\to A_{1g}$ dan $p \\to T_{1u}$), maka dua SALC bersimetri $E_g$ dari ligan fluorin **TIDAK MEMILIKI PASANGAN ORBITAL SIMETRI PADA ATOM PUSAT**.
   - Akibatnya, orbital molekul bersimetri $E_g$ tetap berada pada tingkat energinya sebagai **orbital non-ikatan murni (strictly non-bonding)** yang terlokalisasi sepenuhnya pada ligan fluorin.
4. Maka opsi yang tepat adalah Pilihan A.

**Analisis Distraktor:**
- Pilihan B: Membalik simetri orbital $s$ dan $p$.
- Pilihan C: Menganggap $3s$ tidak berperan dan memaksa penggunaan orbital $d$.
- Pilihan D: Salah mencocokkan $T_{1u}$ dengan $3d$ (padahal $3d$ bersimetri $e_g + t_{2g}$).
- Pilihan E: Bertentangan dengan prinsip pembentukan ikatan kovalen dasar.`,
    solution_framework_template: `Tahap 1: Identifikasi simetri orbital atom belerang dalam grup Oh: 3s -> A1g, 3p -> T1u.
Tahap 2: Cocokkan simetri orbital atom pusat dengan SALC ligan: 3s cocok dengan A1g, 3p cocok dengan T1u.
Tahap 3: Analisis ketiadaan pasangan simetri untuk SALC Eg jika orbital 3d diabaikan.
Tahap 4: Simpulkan bahwa SALC Eg menjadi orbital molekul non-ikatan ligan (opsi A).`,
    tags: ['salc', 'teori-mo', 'sf6', 'simetri-oh', 'orbital-non-ikatan', 'osn-2022'],
    source_event: 'OSN Kimia 2022 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Ikatan Quadruple)
  // =========================================================================
  {
    id: 402004,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Ikatan Quadruple Logam-Logam & Konformasi Eklips Kompleks Re2Cl8(2-)',
    title: 'Konfigurasi Elektronik Ikatan Ganda-Empat dan Konformasi Eklips [Re2Cl8]2-',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Ion oktaklorodirenat(III), $\\ce{[Re2Cl8]^{2-}}$, merupakan senyawa pertama yang dibuktikan memiliki ikatan kovalen ganda-empat (*quadruple bond*) langsung antara dua atom logam transisi ($\ce{Re#Re}$).
Kedua unit persegi planar $\\ce{ReCl4}$ tersusun dalam konformasi eklips sempurna (*eclipsed*, simetri $D_{4h}$), bukan konformasi staggered yang secara sterik lebih lega.

Renium memiliki nomor atom $Z = 75$ dengan konfigurasi elektron valensi netral $[\ce{Xe}] 4f^{14} 5d^5 6s^2$.
1. Berapakah jumlah elektron valensi $d$ yang tersedia untuk membentuk ikatan logam-logam pada kation dimer $(\ce{Re_2})^{6+}$?
2. Konfigurasi orbital molekul ikatan logam-logam manakah yang menjelaskan adanya ikatan ganda-empat dan konformasi eklips tersebut?

A. 8 elektron $d$; konfigurasi $(\sigma)^2 (\pi)^4 (\delta)^2$ dengan ikatan $\delta$ terbentuk dari overlap *face-to-face* orbital $d_{xy}-d_{xy}$
B. 10 elektron $d$; konfigurasi $(\sigma)^2 (\pi)^4 (\delta)^2 (\delta^*)^2$
C. 6 elektron $d$; konfigurasi $(\sigma)^2 (\pi)^4$ dengan ikatan ganda-tiga
D. 8 elektron $d$; konfigurasi $(\sigma)^2 (\pi)^2 (\delta)^4$
E. 12 elektron $d$; konfigurasi $(\sigma)^2 (\pi)^4 (\delta)^2 (\pi^*)^4$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Diagram MO Ikatan Logam-Logam:**
1. Penentuan Jumlah Elektron Valensi Logam:
   - Muatan kompleks: $\\ce{[Re2Cl8]^{2-}}$.
   - $8$ ligan klorida: $8 \\times (-1) = -8$.
   - Muatan total dua kation renium: $+6$, sehingga masing-masing atom renium memiliki tingkat oksidasi $+3$: $\\ce{Re^{3+}}$.
   - Elektron valensi $\\ce{Re(0)}$: $7$ elektron ($5d^5 6s^2$).
   - Elektron ion $\\ce{Re^{3+}}$: $7 - 3 = 4$ elektron $d$ ($5d^4$).
   - Untuk dua atom renium: total elektron $d$ yang tersedia untuk ikatan logam-logam adalah:
     $$2 \\times 4 = 8\\text{ elektron } d$$
2. Diagram Orbital Molekul Ikatan $\\ce{Re-Re}$ (Sumbu $z$ sepanjang ikatan $\ce{Re-Re}$):
   - Overlap $\sigma$: $d_{z^2} - d_{z^2} \\implies$ orbital $\\sigma$ dan $\\sigma^*$.
   - Overlap $\pi$ (degenerate ganda): pasangan $d_{xz}-d_{xz}$ dan $d_{yz}-d_{yz} \\implies$ orbital $\\pi$ dan $\\pi^*$.
   - Overlap $\delta$: $d_{xy}-d_{xy}$ (dengan cuping di antara ikatan $\ce{Re-Cl}$) $\implies$ orbital $\\delta$ dan $\\delta^*$.
   - Urutan tingkat energi orbital:
     $$\\sigma < \\pi < \\delta < \\delta^* < \\pi^* < \\sigma^*$$
3. Pengisian 8 Elektron $d$:
   $$(\\sigma)^2 (\\pi)^4 (\\delta)^2$$
   - Orde ikatan kovalen:
     $$\\text{Orde Ikatan} = \\frac{N_b - N_a}{2} = \\frac{8 - 0}{2} = 4 \\quad (\\text{Ikatan Ganda-Empat!})$$
4. Penjelasan Konformasi Eklips:
   - Ikatan $\\delta$ dibentuk oleh tumpang-tindih empat cuping orbital $d_{xy}$ pada atom $\ce{Re}_1$ dengan empat cuping orbital $d_{xy}$ pada atom $\ce{Re}_2$.
   - Tumpang tindih $\delta$ ini **hanya dapat terjadi secara optimal jika kedua unit $\\ce{ReCl4}$ berada dalam konformasi eklips**.
   - Jika molekul berputar sebesar $45^\circ$ menjadi konformasi staggered, tumpang tindih cuping $d_{xy}-d_{xy}$ menjadi persis nol (ikatan $\delta$ putus).
   - Kekuatan ikatan $\delta$ (sekitar $80-100\\text{ kJ/mol}$) jauh lebih besar dibanding gaya tolakan sterik elektrostatik $\ce{Cl\dots Cl}$, sehingga molekul terkunci kaku dalam **konformasi eklips**.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mengisi $\delta^*$ sehingga orde ikatan turun menjadi 3.
- Pilihan C: Mengabaikan 2 elektron d.
- Pilihan D: Orbital $\delta$ adalah orbital non-degenerat tunggal, tidak dapat menampung 4 elektron tanpa orbital $\delta^*$.
- Pilihan E: Salah menghitung jumlah elektron valensi logam.`,
    solution_framework_template: `Tahap 1: Hitung tingkat oksidasi Re pada [Re2Cl8]^2-: 2*Re + 8*(-1) = -2 -> Re(III) d4.
Tahap 2: Hitung total elektron valensi logam d: 2 x 4 = 8 elektron.
Tahap 3: Susun urutan energi MO logam-logam: sigma < pi < delta < delta* < pi* < sigma*.
Tahap 4: Isi 8e- menghasilkan konfigurasi (sigma)^2 (pi)^4 (delta)^2 (orde ikatan 4, eklips akibat ikatan delta).`,
    tags: ['ikatan-quadruple', 're2cl8', 'ikatan-delta', 'konformasi-eklips', 'organologam'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2021 No. 4 (Diagram Walsh AH2 & Sudut Ikatan)
  // =========================================================================
  {
    id: 402005,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Diagram Walsh Molekul Triatomik & Hibridisasi Berbantu Simetri',
    title: 'Analisis Diagram Walsh Molekul Triatomik AH2: Mengapa H2O Bengkok tetapi BeH2 Linier',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Diagram Walsh memetakan perubahan energi orbital molekul saat suatu molekul triatomik $AH_2$ mengalami distorsi geometri dari bentuk linier ($D_{\\infty h}$) menjadi bentuk bengkok (*bent*, $C_{2v}$).

Korelasi orbital saat molekul menekuk ($180^\circ \to 90^\circ$):
- Orbital $2\sigma_g^+$ (linier) berkorelasi menjadi $2a_1$ (bengkok).
- Orbital degenerate $1\pi_u$ (linier) terbelah menjadi $1b_1$ (energi relatif tetap) dan $3a_1$ (mengalami penurunan energi yang sangat curam).
- Orbital $1\sigma_u^+$ (linier) berkorelasi menjadi $1b_2$ (energi sedikit meningkat).

Penurunan energi yang sangat tajam pada orbital $3a_1$ saat molekul menekuk disebabkan oleh:

A. Peningkatan tolakan elektrostatik antarelektron inti
B. Pencampuran berbantu simetri (*symmetry-allowed mixing*) antara orbital $p_z$ atom pusat dengan orbital $2s$ atom pusat dan orbital $s$ hidrogen, yang dilarang pada geometri linier oleh aturan inversi
C. Pemutusan ikatan hidrogen intramolekuler
D. Penurunan tumpang tindih ikatan $\sigma$
E. Terjadinya transisi elektronik tanpa radiasi ke keadaan triplet`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Diagram Walsh:**
1. Keadaan pada Geometri Linier ($D_{\\infty h}$):
   - Pada geometri linier dengan pusat inversi ($i$):
     Orbital $2s$ atom pusat memiliki paritas *gerade* ($g$), membentuk orbital ikatan $2\sigma_g^+$.
     Orbital $2p_z$ atom pusat memiliki paritas *ungerade* ($u$), membentuk komponen orbital non-ikatan $1\pi_u$.
   - Berdasarkan simetri paritas inversi, orbital berkarakter *gerade* dan *ungerade* **DILARANG BERCAMPUR** ($g \\not\\leftrightarrow u$).
2. Distorsi Menjadi Geometri Bengkok ($C_{2v}$):
   - Ketika molekul menekuk, pusat inversi lenyap (simetri turun dari $D_{\\infty h}$ ke $C_{2v}$).
   - Baik orbital $2s$ maupun orbital $2p_z$ dari atom pusat kini **MEMILIKI SIMETRI YANG SAMA, YAITU $A_1$**!
   - Kedua orbital ini kini dapat mengalami **tumpang tindih / pencampuran hibridisasi ($s-p$ mixing)**:
     Orbital $2a_1$ (berkarakter dominan $s$) tertolak ke bawah, dan yang paling krusial: orbital $3a_1$ (yang asalnya adalah orbital non-ikatan murni $p_z$ pada $1\pi_u$) memperoleh porsi karakter ikatan dari orbital $2s$ dan tumpang tindih konstruktif dengan orbital $1s$ hidrogen.
   - Hal ini menyebabkan energi orbital $3a_1$ **TURUN SANGAT CURAM (sangat terstabilkan)** saat molekul menekuk!
3. Konsekuensi Sudut Ikatan:
   - Pada molekul $\ce{BeH2}$ ($4$ elektron valensi): elektron hanya mengisi sampai orbital $2a_1$ dan $1b_2$. Tidak ada elektron di orbital $3a_1$, sehingga BeH2 mempertahankan geometri linier ($180^\circ$).
   - Pada molekul $\ce{H2O}$ ($8$ elektron valensi): orbital $3a_1$ terisi penuh oleh sepasang elektron. Karena energi orbital $3a_1$ jauh lebih rendah pada geometri bengkok, penurunan energi ini mendominasi dan memaksa molekul $\ce{H2O}$ mengadopsi **geometri bengkok ($104{,}5^\circ$)**.

**Analisis Distraktor:**
- Pilihan A: Tolakan elektrostatik justru cenderung menjaga molekul tetap linier.
- Pilihan B: Benar, pencampuran simetri $s-p_z$ pada representasi $A_1$ yang terbebaskan oleh hilangnya pusat inversi.
- Pilihan C, D, E: Istilah fiktif yang tidak menjelaskan penurunan energi orbital $3a_1$.`,
    solution_framework_template: `Tahap 1: Tinjau simetri orbital pada D_inf_h: 2s (gerade) dan 2p_z (ungerade) tidak dapat bercampur.
Tahap 2: Tinjau penurunan simetri ke C2v: kedua orbital bertransformasi di bawah representasi A1.
Tahap 3: Pahami bahwa pencampuran s-p_z menurunkan energi orbital 3a1 secara drastis saat sudut menyempit.
Tahap 4: Hubungkan stabilisasi orbital 3a1 terisi ini dengan geometri bengkok molekul air.`,
    tags: ['diagram-walsh', 'geometri-bengkok', 'h2o-vs-beh2', 'pencampuran-s-p', 'osn-2021'],
    source_event: 'OSN Kimia 2021 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Teori HMO Cincin Frost)
  // =========================================================================
  {
    id: 402006,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Orbital Molekul Hückel (HMO) & Lingkaran Frost-Musulin',
    title: 'Energi Delokalisasi Resonansi Benzena Berdasarkan Teori Orbital Molekul Hückel',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Teori Orbital Molekul Hückel (HMO) untuk sistem planar cincin terkonjugasi siklis $[N]\\text{-anulena}$ menghasilkan tingkat-tingkat energi orbital $\pi$ menurut solusi analitik lingkaran Frost-Musulin:
$$E_k = \alpha + 2 \beta \\cos\\left( \\frac{2 k \\pi}{N} \\right), \\quad k = 0, \\pm 1, \\pm 2, \\dots$$
dengan $\alpha$ adalah integral Coulomb (energi elektron pada orbital $2p$ terisolasi) dan $\beta$ adalah integral resonansi ($\beta < 0$, parameter penstabilan ikatan).

Untuk molekul benzena ($\ce{C6H6}$, $N = 6$):
1. Berapakah energi total keenam elektron $\pi$ dalam keadaan dasar ($E_{\\pi,\\text{benzena}}$)?
2. Berapakah energi delokalisasi resonansi (Resonance Energy, RE) benzena dibandingkan dengan tiga molekul etena terisolasi ($E_{\\pi,\\text{etena}} = 2\alpha + 2\beta$ per etena)?

A. $E_{\\pi} = 6\alpha + 6\beta$; $\\text{RE} = 0$
B. $E_{\\pi} = 6\alpha + 8\beta$; $\\text{RE} = 2\\beta$ (sekitar $-150\\text{ kJ}\\cdot\\text{mol}^{-1}$)
C. $E_{\\pi} = 6\alpha + 4\beta$; $\\text{RE} = -2\\beta$
D. $E_{\\pi} = 6\alpha + 12\beta$; $\\text{RE} = 6\\beta$
E. $E_{\\pi} = 6\alpha + 2\\beta$; $\\text{RE} = \\beta$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan HMO Benzena:**
1. Menghitung Tingkat Energi Orbital $\pi$ Benzena ($N = 6$):
   - $k = 0$:
     $$E_0 = \\alpha + 2\\beta \\cos(0) = \\alpha + 2\\beta \\quad (\\text{orbital ikatan terendah, non-degenerat})$$
   - $k = \\pm 1$:
     $$E_{\\pm 1} = \\alpha + 2\\beta \\cos\\left(\\frac{2\\pi}{6}\\right) = \\alpha + 2\\beta \\cos(60^\\circ) = \\alpha + 2\\beta (0{,}5) = \\alpha + \\beta \\quad (\\text{sepasang orbital ikatan terdegenerasi})$$
   - $k = \\pm 2$:
     $$E_{\\pm 2} = \\alpha + 2\\beta \\cos\\left(\\frac{4\\pi}{6}\\right) = \\alpha + 2\\beta \\cos(120^\\circ) = \\alpha - \\beta \\quad (\\text{orbital anti-ikatan terdegenerasi})$$
   - $k = 3$:
     $$E_3 = \\alpha + 2\\beta \\cos(\\pi) = \\alpha - 2\\beta \\quad (\\text{orbital anti-ikatan tertinggi})$$
2. Pengisian 6 Elektron $\pi$ pada Keadaan Dasar:
   - 2 elektron pada $E_0 = \\alpha + 2\\beta$:
     $$2 \\times (\\alpha + 2\\beta) = 2\\alpha + 4\\beta$$
   - 4 elektron pada $E_{\\pm 1} = \\alpha + \\beta$:
     $$4 \\times (\\alpha + \\beta) = 4\\alpha + 4\\beta$$
   - Total energi elektron $\pi$ benzena:
     $$E_{\\pi,\\text{benzena}} = (2\\alpha + 4\\beta) + (4\\alpha + 4\\beta) = 6\\alpha + 8\\beta$$
3. Menghitung Energi Delokalisasi Resonansi (RE):
   - Sistem rujukan non-terdelokalisasi (3 molekul etilena terisolasi atau struktur hipotetis sikloheksatriena terlokalisasi):
     $$E_{\\text{ref}} = 3 \\times (2\\alpha + 2\\beta) = 6\\alpha + 6\\beta$$
   - Energi delokalisasi:
     $$\\text{RE} = E_{\\pi,\\text{benzena}} - E_{\\text{ref}} = (6\\alpha + 8\\beta) - (6\\alpha + 6\\beta) = 2\\beta$$
   - Karena parameter $\beta$ bernilai negatif (stabilisasi kovalen), energi benzena lebih rendah sebesar $2|\\beta|$ (sekitar $150\\text{ kJ/mol}$), yang membuktikan kestabilan aromatisitas Hückel ($4n+2$).

**Analisis Distraktor:**
- Pilihan A: Menganggap energi delokalisasi nol (menyamakan dengan etena).
- Pilihan B: Benar ($E = 6\alpha + 8\beta$, $\\text{RE} = 2\\beta$).
- Pilihan C: Salah tanda penstabilan.
- Pilihan D: Mengalikan dengan faktor 2 berlebih.
- Pilihan E: Salah mengevaluasi cosinus sudut $60^\circ$.`,
    solution_framework_template: `Tahap 1: Terapkan rumus Frost-Musulin untuk N=6: E_k = alpha + 2*beta*cos(2*k*pi/6).
Tahap 2: Dapatkan tingkat energi orbital terisi: E0 = alpha + 2*beta dan E_±1 = alpha + beta.
Tahap 3: Hitung total energi 6 elektron pi: 2*(alpha + 2*beta) + 4*(alpha + beta) = 6*alpha + 8*beta.
Tahap 4: Kurangkan dengan 3 ikatan etena terlokalisasi (6*alpha + 6*beta) untuk memperoleh RE = 2*beta.`,
    tags: ['teori-huckel', 'hmo', 'lingkaran-frost', 'energi-delokalisasi', 'aromatisitas'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSN 2020 No. 4 (Aturan Pengecualian Timbal-Balik IR & Raman)
  // =========================================================================
  {
    id: 402007,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Aturan Pengecualian Timbal-Balik (Mutual Exclusion Rule) IR & Raman',
    title: 'Penentuan Keberadaan Pusat Inversi pada Isomer N2F2 Berdasarkan Spektra IR dan Raman',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Aturan Pengecualian Timbal-Balik (*Rule of Mutual Exclusion*) menyatakan bahwa untuk molekul yang memiliki pusat simetri inversi ($i$, sentrosimetrik), tidak ada modus vibrasi normal fundamental yang dapat aktif serentak pada spektroskopi Inframerah (IR) dan spektroskopi Raman. Modus yang aktif IR harus *ungerade* ($u$), sedangkan modus yang aktif Raman harus *gerade* ($g$).

Dinitrogen difluorida ($\ce{N2F2}$) memiliki dua isomer planar stabil: *trans*-$\\ce{N2F2}$ (grup titik $C_{2h}$) dan *cis*-$\\ce{N2F2}$ (grup titik $C_{2v}$).

Suatu sampel murni gas isomer $\ce{N2F2}$ dianalisis di laboratorium:
- Spektrum IR menampilkan 3 puncak serapan kuat pada $989\\text{ cm}^{-1}$, $423\\text{ cm}^{-1}$, dan $360\\text{ cm}^{-1}$.
- Spektrum Raman menampilkan 3 pergeseran Raman kuat pada $1529\\text{ cm}^{-1}$, $1010\\text{ cm}^{-1}$, dan $600\\text{ cm}^{-1}$.
- **Tidak ada satu pun frekuensi puncak yang berimpit sama** antara spektrum IR dan spektrum Raman.

Berdasarkan data spektroskopi tersebut, isomer manakah yang dianalisis, dan apakah alasan teoretisnya?

A. Isomer *cis*-$\\ce{N2F2}$; karena tidak memiliki pusat inversi sehingga garis IR dan Raman terpisah
B. Isomer *trans*-$\\ce{N2F2}$; karena memiliki pusat simetri inversi ($i$) sehingga mematuhi aturan pengecualian timbal-balik secara ketat
C. Campuran rasemat kedua isomer dalam kesetimbangan dinamis
D. Isomer *cis*-$\\ce{N2F2}$; karena momen dipol permanennya bernilai nol
E. Molekul telah terdisosiasi sempurna menjadi radikal $\\ce{\cdot NF}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Spektroskopi Molekuler:**
1. Kaidah Aturan Pengecualian Timbal-Balik (Mutual Exclusion Rule):
   - Jika suatu molekul memiliki pusat inversi ($i$):
     - Suatu vibrasi aktif IR jika dan hanya jika terjadi perubahan momen dipol listrik molekul (bertransformasi sebagai koordinat vektor $x, y, z$ yang bersifat *ungerade* / $u$).
     - Suatu vibrasi aktif Raman jika dan hanya jika terjadi perubahan tensor polarisabilitas molekul (bertransformasi sebagai fungsi kuadrat $x^2, xy, \dots$ yang bersifat *gerade* / $g$).
     - Karena suatu representasi tak tereduksi tidak mungkin sekaligus berkarakter *gerade* dan *ungerade*, maka **tidak ada satu pun frekuensi vibrasi yang dapat aktif bersamaan di IR dan Raman**.
2. Analisis Simetri Kedua Isomer:
   - Isomer *trans*-$\\ce{N2F2}$: memiliki sumbu $C_2$, bidang $\sigma_h$, dan **pusat inversi $i$** tepat di tengah ikatan $\ce{N=N}$ (grup titik $C_{2h}$). Isomer ini **sentrosimetrik**.
   - Isomer *cis*-$\\ce{N2F2}$: memiliki grup titik $C_{2v}$ yang **TIDAK MEMILIKI pusat inversi $i$**. Pada molekul non-sentrosimetrik, banyak modus vibrasi yang aktif serentak di IR dan Raman (teramati frekuensi yang sama).
3. Evaluasi Data Eksperimen:
   - Hasil spektroskopi menunjukkan pemisahan total: 3 puncak hanya di IR dan 3 puncak berbeda hanya di Raman (tidak ada frekuensi yang bersekutu).
   - Pengamatan ini adalah bukti tak terbantahkan bahwa molekul memiliki pusat inversi $i$, yaitu **isomer *trans*-$\\ce{N2F2}$**.

**Analisis Distraktor:**
- Pilihan A: Kontradiksi, molekul tanpa inversi akan menunjukkan garis bersekutu (coincident).
- Pilihan B: Benar (*trans*-N2F2 memiliki pusat inversi).
- Pilihan C: Jika campuran, akan teramati lebih dari 6 puncak dan tumpang tindih.
- Pilihan D: Isomer cis memiliki momen dipol permanen (bukan nol).
- Pilihan E: Spektra vibrasi menunjukkan molekul diatomik/poliatomik utuh.`,
    solution_framework_template: `Tahap 1: Pahami Aturan Pengecualian Timbal Balik: ketiadaan puncak coincident membuktikan keberadaan pusat inversi i.
Tahap 2: Bandingkan simetri: trans-N2F2 memiliki pusat inversi (C2h), cis-N2F2 tidak (C2v).
Tahap 3: Hubungkan data eksperimen (tidak ada frekuensi yang sama) dengan sifat sentrosimetrik.
Tahap 4: Simpulkan bahwa sampel adalah murni isomer trans-N2F2 (opsi B).`,
    tags: ['mutual-exclusion-rule', 'spektroskopi-ir-raman', 'pusat-inversi', 'n2f2', 'osn-2020'],
    source_event: 'OSN Kimia 2020 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Interaksi Orbital Sekunder)
  // =========================================================================
  {
    id: 402008,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Interaksi Orbital Sekunder (SOI) & Aturan Selektivitas Endo Alder',
    title: 'Interaksi Orbital Molekul Sekunder (SOI) pada Selektivitas Endo Reaksi Diels-Alder',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi sikloadisi Diels-Alder antara siklopentadiena dan maleat anhidrida berlangsung di bawah kendali kinetik menghasilkan aduk *endo* secara sangat dominan ($> 99\\%$) dibandingkan aduk *exo*, meskipun aduk *endo* memiliki rintangan sterik yang lebih besar pada produk akhir. Fenomena ini dikenal sebagai Aturan Endo Alder (*Alder Endo Rule*).

Penjelasan Teori Orbital Molekul Frontier (FMO) yang paling tepat mengenai penyebab selektivitas keadaan transisi *endo* tersebut adalah:

A. Keadaan transisi *endo* memiliki regangan sudut cincin yang lebih kecil
B. Adanya interaksi tumpang-tindih orbital sekunder yang konstruktif (Secondary Orbital Interaction, SOI) antara orbital $2p$ karbonil dienofil yang tidak berikatan langsung dengan orbital $\pi$ diena pada keadaan transisi
C. Terjadinya transfer satu elektron menghasilkan pasangan ion radikal bebas
D. Gugus karbonil anhidrida mengalami protonasi oleh pelarut sebelum siklisasi
E. Ikatan hidrogen intramolekuler yang menstabilkan konformasi *endo*`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & FMO Interaksi Orbital Sekunder:**
1. Pendekatan Keadaan Transisi *Endo* vs *Exo*:
   - Pada pendekatan **endo**, gugus penarik elektron tak jenuh (gugus karbonil $\\ce{C=O}$ maleat anhidrida) terlipat mengarah ke bagian bawah sistem ikatan $\pi$ diena (di bawah cincin siklopentadiena).
   - Pada pendekatan **exo**, gugus karbonil mengarah ke luar, menjauhi sistem $\pi$ diena.
2. Interaksi Orbital Primer vs Sekunder:
   - **Interaksi Primer**: Tumpang tindih fase yang menguntungkan antara HOMO diena ($C_1$ dan $C_4$) dan LUMO dienofil ($C_1'$ dan $C_2'$) yang membentuk dua ikatan $\sigma$ baru $\ce{C-C}$. Interaksi ini hadir baik pada pendekatan *endo* maupun *exo*.
   - **Interaksi Orbital Sekunder (Secondary Orbital Interaction, SOI)**:
     Pada orientasi *endo*, cuping orbital LUMO pada atom karbon karbonil dienofil ($\ce{C=O}$) berada dalam jarak yang sangat dekat dengan cuping orbital HOMO pada atom karbon $C_2$ dan $C_3$ diena.
     Fasa orbital pada kedua situs sekunder ini **SEFASA (konstruktif)**!
   - Tumpang tindih sekunder ini tidak membentuk ikatan permanen pada produk akhir, namun memberikan **stabilisasi energi elektronik ekstra yang signifikan pada keadaan transisi** ($\Delta G^\ddagger_{\text{endo}} < \Delta G^\ddagger_{\text{exo}}$).
3. Kesimpulan:
   Pernyataan B menjelaskan konsep interaksi orbital sekunder (SOI) secara tepat dan akurat.

**Analisis Distraktor:**
- Pilihan A: Salah, keadaan transisi endo justru memiliki tolakan sterik van der Waals lebih besar.
- Pilihan B: Benar.
- Pilihan C: Sikloadisi Diels-Alder adalah reaksi perisiklik serentak konserted tanpa zat antara ion atau radikal.
- Pilihan D & E: Reaksi dapat berlangsung efisien dalam fasa gas atau pelarut hidrokarbon non-polar murni.`,
    solution_framework_template: `Tahap 1: Bedakan geometri pendekatan endo (gugus penarik elektron di bawah diena) vs exo (mengarah keluar).
Tahap 2: Tinjau interaksi FMO: selain overlap primer pembentuk ikatan, ada overlap sekunder antara C=O dan C2/C3 diena.
Tahap 3: Kenali bahwa keselarasan fasa pada overlap sekunder (SOI) menurunkan energi keadaan transisi endo.
Tahap 4: Pilih pernyataan B.`,
    tags: ['diels-alder', 'aturan-endo-alder', 'interaksi-orbital-sekunder', 'soi', 'fmo'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSN 2019 No. 4 (MO Karbon Monoksida & Koordinasi Karbon)
  // =========================================================================
  {
    id: 402009,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Diagram MO Karbon Monoksida & Sifat Donor Karbonil Logam',
    title: 'Analisis Orbital HOMO Karbon Monoksida: Mengapa Logam Berikatan Melalui Karbon Bukan Oksigen',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Molekul karbon monoksida ($\ce{CO}$) merupakan ligan $\sigma$-donor dan $\pi$-akseptor klasik dalam kimia organologam. Meskipun atom oksigen jauh lebih elektronegatif dibanding atom karbon, dalam hampir semua kompleks karbonil logam transisi netral, ligan $\ce{CO}$ selalu berkoordinasi ke pusat logam melalui atom **karbon** ($\ce{M-C#O}$), bukan melalui atom oksigen.

Berdasarkan diagram orbital molekul (MO) diatomik heteronuklir $\ce{CO}$ terhitung:
Orbital molekul terisi tertinggi (HOMO) dari $\ce{CO}$ adalah orbital $5\sigma$ yang bersifat sedikit anti-ikatan (atau kuasi-nonikatan).

Bagaimanakah distribusi koefisien fungsi gelombang orbital $5\sigma$ pada atom C dan O, dan mengapa hal tersebut mengarahkan koordinasi melalui atom C?

A. Orbital $5\sigma$ memiliki koefisien terbesar dan cuping elektron terluar yang terpusat dominan pada atom karbon, sehingga bertindak sebagai donor pasangan elektron yang jauh lebih efektif
B. Orbital $5\sigma$ terlokalisasi $100\\%$ pada atom oksigen karena elektronegativitasnya yang tinggi
C. Atom karbon memiliki muatan formal negatif $-1$ sehingga menarik kation logam secara elektrostatik murni
D. Orbital $5\sigma$ adalah orbital $\pi$ yang hanya dapat bertumpang tindih dengan logam melalui atom karbon
E. Ikatan melalui oksigen dilarang oleh aturan seleksi Laporte`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Diagram MO Karbon Monoksida:**
1. Diagram Orbital Molekul $\\ce{CO}$ Heteronuklir:
   - Energi orbital atom oksigen ($2s$ dan $2p$) jauh lebih rendah daripada orbital atom karbon karena muatan inti efektif oksigen yang lebih besar.
   - Akibat pencampuran $s-p$ yang kuat pada molekul diatomik periode 2, orbital molekul valensi $\\sigma$ dan $\\pi$ tersusun:
     $$1\sigma^2 2\sigma^2 3\sigma^2 4\sigma^2 1\pi^4 5\sigma^2$$
2. Analisis Orbital HOMO ($5\sigma$):
   - Orbital $5\sigma$ terbentuk dari interaksi antara orbital $2p_z$ karbon dengan orbital $2s/2p_z$ oksigen.
   - Karena orbital $2p$ karbon memiliki energi yang jauh lebih dekat dengan energi orbital molekul $5\sigma$ dibandingkan orbital oksigen, maka **koefisien orbital atom karbon pada HOMO bernilai jauh lebih besar ($c_C \\gg c_O$)**.
   - Secara fisik, hal ini menghasilkan cuping densitas elektron yang menjulur sangat besar ke arah luar dari atom **karbon** (sepasang elektron bebas terarah).
3. Koordinasi dengan Logam Transisi:
   - Tumpang tindih orbital $\sigma$-donor ke orbital kosong $d$ logam transisi berlangsung jauh lebih efektif melalui cuping terarah yang besar pada atom karbon.
   - Selain itu, orbital LUMO $\ce{CO}$ ($2\pi^*$) juga memiliki koefisien terbesar pada atom karbon, memungkinkan ikatan balik $\pi$ (*pi back-bonding*) dari orbital $d$ logam terisi ke orbital $2\pi^*$ karbon berlangsung optimal hanya jika terkoordinasi melalui atom C.
4. Maka alasan pada Pilihan A sepenuhnya benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Bertentangan dengan teori pencampuran MO heteronuklir.
- Pilihan C: Ikatan karbonil logam didominasi oleh interaksi kovalen $\sigma$-donor dan $\pi$-akseptor (model Dewar-Chatt-Duncanson), bukan tarikan elektrostatik titik klasik.
- Pilihan D: $5\sigma$ adalah orbital $\sigma$, bukan $\pi$.
- Pilihan E: Aturan Laporte berlaku untuk spektroskopi elektronik transisi atomik, bukan untuk arah koordinasi ligan.`,
    solution_framework_template: `Tahap 1: Tinjau diagram MO heteronuklir CO: HOMO adalah orbital 5sigma.
Tahap 2: Pahami bahwa kedekatan energi orbital 2p karbon membuat koefisien c_C pada 5sigma jauh lebih besar daripada c_O.
Tahap 3: Hubungkan cuping densitas elektron yang besar di atom C dengan kemampuan donasi pasangan elektron sigma ke logam.
Tahap 4: Simpulkan bahwa koordinasi M-CO terjadi melalui atom karbon (opsi A).`,
    tags: ['orbital-molekul-co', 'homo-5sigma', 'organologam', 'ikatan-m-co', 'osn-2019'],
    source_event: 'OSN Kimia 2019 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Aromatisitas Möbius)
  // =========================================================================
  {
    id: 402010,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Aromatisitas Sistem Möbius vs Hückel & Topologi Orbital Pi',
    title: 'Topologi Pita Möbius pada Cincin Poliena Terpelintir dan Kriteria Kestabilan 4n Elektron',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Konsep aromatisitas Heilbronner-Möbius memprediksi sifat aromatik cincin poliena siklis yang mengalami pelintiran (*twist*) bertahap sebesar $180^\circ$, menghasilkan topologi pita Möbius satu sisi dengan satu pembalikan fasa (inversi tanda orbital $p$).

Kaidah aromatisitas topologis menyatakan:
- Cincin Hückel (topologi silinder biasa, 0 inversi fasa): bersifat **aromatik** jika memiliki **$4n + 2$** elektron $\pi$, dan antiaromatik jika memiliki $4n$ elektron $\pi$.
- Cincin Möbius (topologi terpuntir $180^\circ$, 1 inversi fasa): memiliki diagram energi terbalik!

Berdasarkan kaidah tersebut:
1. Berapakah jumlah elektron $\pi$ yang memberikan kestabilan kulit tertutup (**aromatik**) pada cincin Möbius dalam keadaan dasar?
2. Bagaimanakah sifat elektronik dari kation trans-bisaiklo[5.3.1]undeka-1,3,5,7,9-pentaenil terpelintir yang memiliki $8$ elektron $\pi$ ($4n$ dengan $n=2$)?

A. Möbius aromatik dengan $4n$ elektron $\pi$; kation $8\pi$ tersebut bersifat aromatik stabil
B. Möbius aromatik dengan $4n+2$ elektron $\pi$; kation $8\pi$ tersebut bersifat antiaromatik
C. Möbius aromatik dengan $4n+1$ elektron $\pi$; kation $8\pi$ radikal
D. Cincin Möbius tidak pernah bisa stabil karena regangan puntir yang terlalu tinggi
E. Möbius aromatik dengan $2n$ elektron $\pi$; kation $8\pi$ bersifat non-aromatik`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanika Kuantum Topologi Möbius:**
1. Kaidah Hückel vs Möbius (Heilbronner, 1964):
   - Pada cincin silinder planar biasa (topologi Hückel), kondisi batas periodik $\psi(0) = \psi(2\pi)$ menghasilkan tingkat dasar non-degenerat ($m=0$) dan tingkat-tingkat tereksitasi terdegenerasi ganda ($m = \pm 1, \pm 2$). Oleh karena itu, pengisian kulit tertutup stabil membutuhkan **$4n + 2$ elektron $\pi$**.
   - Pada pita Möbius dengan pelintiran $180^\circ$, kondisi batas bersifat anti-periodik:
     $$\psi(\theta + 2\pi) = -\psi(\theta)$$
     Kondisi batas ini menyebabkan **seluruh tingkat energi orbital $\pi$ terdegenerasi berpasangan dari tingkat paling bawah!**
     (Tingkat energi: $E_k = \alpha + 2\beta' \cos\left[ \frac{(2k+1)\pi}{N} \right]$ dengan $k = 0, 1, 2, \dots$).
   - Karena tingkat terendah sekalipun bersifat terdegenerasi ganda (menampung $2 \times 2 = 4$ elektron), konfigurasi kulit tertutup stabil pada topologi Möbius membutuhkan **$4n$ elektron $\pi$** ($4, 8, 12, 16, \dots$).
2. Analisis Kation $8\pi$ Terpelintir:
   - Kation memiliki 8 elektron $\pi$ ($4n$ dengan $n = 2$).
   - Dalam konformasi Möbius terpelintir, ke-8 elektron $\pi$ tepat mengisi penuh dua pasang orbital terdegenerasi ikatan ($2 \times 4 = 8$), menghasilkan konfigurasi diamagnetik kulit tertutup (*closed-shell*) tanpa elektron tak berpasangan.
   - Oleh karena itu, spesies ini menunjukkan **sifat aromatik Möbius** yang stabil secara termodinamika dan memiliki arus cincin diamagnetik (diatropic ring current) pada spektroskopi NMR.

**Analisis Distraktor:**
- Pilihan A: Benar ($4n$ elektron $\pi$ dan kation $8\pi$ aromatik).
- Pilihan B: Membalik aturan Möbius menjadi aturan Hückel biasa.
- Pilihan C & E: Formula elektron pecahan yang salah.
- Pilihan D: Sintesis hidrokarbon aromatik Möbius telah berhasil dibuktikan secara eksperimental (misalnya oleh Herges et al., Nature 2003).`,
    solution_framework_template: `Tahap 1: Pahami kondisi batas anti-periodik topologi Möbius yang membalik aturan kestabilan orbital.
Tahap 2: Identifikasi bahwa tingkat energi Möbius terdegenerasi berpasangan dari bawah.
Tahap 3: Simpulkan bahwa konfigurasi kulit tertutup aromatik Möbius tercapai pada 4n elektron pi.
Tahap 4: Identifikasi bahwa kation 8 pi (4n, n=2) bersifat aromatik Möbius (opsi A).`,
    tags: ['aromatisitas-mobius', 'kaidah-heilbronner', 'topologi-orbital', '4n-elektron', 'anulena'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
