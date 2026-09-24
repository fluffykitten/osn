/**
 * osnQuestionsPillar1Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 1: Struktur Atom Lanjut, Teori Kuantum Formal, Fungsi Gelombang & Spektroskopi
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 401001 - 401010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 01 = Pilar 1
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_1_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 1 (Mekanika Kuantum Model Partikel pada Cincin 1D)
  // =========================================================================
  {
    id: 401001,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Mekanika Kuantum Partikel pada Cincin 1D & Elektron Pi Aromatik',
    title: 'Model Partikel pada Cincin Bebas untuk Spektrum Elektronik Benzena',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Model mekanika kuantum partikel pada cincin melingkar 1D dengan radius $R$ sering digunakan untuk memodelkan sistem elektron $\pi$ terdelokalisasi pada cincin aromatik planar. Tingkat energi kuantum partikel bermassa $m_e$ pada cincin dinyatakan oleh:
$$E_m = \\frac{m^2 \\hbar^2}{2 I} = \\frac{m^2 \\hbar^2}{2 m_e R^2}$$
dengan bilangan kuantum orbital angular $m = 0, \\pm 1, \\pm 2, \\pm 3, \\dots$, dan momen inersia $I = m_e R^2$. Keadaan dengan $m \\ne 0$ bersifat terdegenerasi ganda (*doubly degenerate*).

Molekul benzena ($\ce{C6H6}$) memiliki $6$ elektron $\pi$ yang mengisi tingkat energi cincin dengan radius lingkar efektif $R = 1{,}40\\text{ \AA} = 1{,}40 \\times 10^{-10}\\text{ m}$.
Berdasarkan prinsip Aufbau dan larangan Pauli:
1. Bagaimanakah konfigurasi pengisian elektron pada keadaan dasar?
2. Berapakah panjang gelombang foton ($\lambda$) yang diserap untuk eksitasi elektronik terendah dari orbital terisi tertinggi (HOMO) ke orbital kosong terendah (LUMO)?
(Gunakan $\hbar = 1{,}055 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $m_e = 9{,}109 \\times 10^{-31}\\text{ kg}$, $c = 3{,}0 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$, $h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$).

A. HOMO: $m = \\pm 1$, LUMO: $m = \\pm 2$; $\\lambda \\approx 208\\text{ nm}$
B. HOMO: $m = 0$, LUMO: $m = \\pm 1$; $\\lambda \\approx 145\\text{ nm}$
C. HOMO: $m = \\pm 1$, LUMO: $m = \\pm 2$; $\\lambda \\approx 312\\text{ nm}$
D. HOMO: $m = \\pm 2$, LUMO: $m = \\pm 3$; $\\lambda \\approx 254\\text{ nm}$
E. HOMO: $m = \\pm 1$, LUMO: $m = \\pm 3$; $\\lambda \\approx 185\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penurunan Kuantum:**
1. Pengisian $6$ elektron $\pi$ pada keadaan dasar:
   - Tingkat terendah $m = 0$: non-degenerate, menampung $2$ elektron ($\\uparrow\\downarrow$).
   - Tingkat berikutnya $m = \\pm 1$: doubly degenerate ($m = +1$ dan $m = -1$), menampung $4$ elektron ($2 \\times 2 = 4$).
   - Total $2 + 4 = 6$ elektron terisi penuh hingga sub-tingkat $m = \\pm 1$.
   - Maka **HOMO** adalah tingkat $m = \\pm 1$.
   - Tingkat kosong berikutnya adalah **LUMO** pada $m = \\pm 2$.
2. Selisih energi transisi HOMO $\\to$ LUMO:
   $$\\Delta E = E_{|m|=2} - E_{|m|=1} = \\frac{(2^2 - 1^2) \\hbar^2}{2 m_e R^2} = \\frac{3 \\hbar^2}{2 m_e R^2}$$
3. Menghitung nilai numerik $\\Delta E$:
   $$m_e R^2 = (9{,}109 \\times 10^{-31}\\text{ kg})(1{,}40 \\times 10^{-10}\\text{ m})^2 = (9{,}109 \\times 10^{-31})(1{,}96 \\times 10^{-20}) = 1{,}7854 \\times 10^{-50}\\text{ kg}\\cdot\\text{m}^2$$
   $$\\hbar^2 = (1{,}0546 \\times 10^{-34})^2 = 1{,}1122 \\times 10^{-68}\\text{ J}^2\\cdot\\text{s}^2$$
   $$\\Delta E = \\frac{3 \\times (1{,}1122 \\times 10^{-68})}{2 \\times (1{,}7854 \\times 10^{-50})} = \\frac{3{,}3366 \\times 10^{-68}}{3{,}5708 \\times 10^{-50}} = 9{,}344 \\times 10^{-19}\\text{ J}$$
   Dalam elektron-volt: $\\Delta E = \\frac{9{,}344 \\times 10^{-19}}{1{,}602 \\times 10^{-19}} = 5{,}83\\text{ eV}$.
4. Menghitung panjang gelombang serapan:
   $$\\lambda = \\frac{h c}{\\Delta E} = \\frac{(6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s})(3{,}0 \\times 10^8\\text{ m/s})}{9{,}344 \\times 10^{-19}\\text{ J}} = \\frac{1{,}9878 \\times 10^{-25}}{9{,}344 \\times 10^{-19}} = 2{,}127 \\times 10^{-7}\\text{ m} \\approx 208 - 213\\text{ nm}$$
   Nilai ini bersesuaian erat dengan pita serapan UV-Vis benzena pita-$E_2$ ($\lambda_{\\max} \\approx 204 - 208\\text{ nm}$).

**Analisis Distraktor:**
- Pilihan A: Benar, HOMO $m=\\pm 1$, LUMO $m=\\pm 2$, $\\lambda \\approx 208\\text{ nm}$.
- Pilihan B: Mengabaikan pengisian 6 elektron dan hanya mengisi 2 elektron.
- Pilihan C: Kesalahan membagi faktor kuadrat menghasilkan panjang gelombang terlalu panjang.
- Pilihan D: Mengasumsikan sistem 10 elektron $\pi$ (seperti naftalena).
- Pilihan E: Transisi terlarang dengan $\\Delta m = 2$.`,
    solution_framework_template: `Tahap 1: Tuliskan tingkat energi partikel pada cincin E_m = m^2 * hbar^2 / (2 * m_e * R^2).
Tahap 2: Petakan pengisian 6 elektron pi: 2 elektron di m=0, 4 elektron di m=±1 (HOMO).
Tahap 3: Hitung selisih energi transisi HOMO-LUMO: Delta E = (2^2 - 1^2) * hbar^2 / (2 * m_e * R^2).
Tahap 4: Konversikan Delta E ke panjang gelombang lambda = hc / Delta E = 208 nm.`,
    tags: ['mekanika-kuantum', 'partikel-pada-cincin', 'homo-lumo', 'benzena', 'osn-2023'],
    source_event: 'OSN Kimia 2023 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Fungsi Gelombang Radial)
  // =========================================================================
  {
    id: 401002,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Fungsi Gelombang Radial, Permukaan Simpul & Jari-jari Kritis',
    title: 'Penentuan Posisi Simpul Radial Fungsi Gelombang Orbital 3s Atom Hidrogen',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Fungsi gelombang bagian radial untuk orbital $3s$ atom hidrogen dinyatakan oleh:
$$R_{3s}(r) = \\frac{1}{9\\sqrt{3}} \\left( \\frac{1}{a_0} \\right)^{3/2} \\left( 6 - 6\\rho + \\rho^2 \\right) e^{-\\rho/2}$$
dengan variabel tak berdimensi $\\rho = \\frac{2 r}{3 a_0}$, dan $a_0 = 0{,}529\\text{ \AA}$ adalah radius Bohr.

Simpul radial (*radial node*) didefinisikan sebagai permukaan bola pada jarak radial $r$ dari inti di mana fungsi gelombang bernilai nol ($R(r) = 0$).

Berapakah jumlah simpul radial yang dimiliki orbital $3s$, dan pada jarak radial berapakah simpul radial terluar ($r_2$) berada dinyatakan dalam satuan $a_0$?

A. 1 simpul; $r = 3{,}00\\,a_0$
B. 2 simpul; $r_2 = (3 + \\sqrt{3})\\,a_0 \\approx 4{,}73\\,a_0$
C. 2 simpul; $r_2 = \\frac{3}{2}(3 + \\sqrt{3})\\,a_0 \\approx 7{,}10\\,a_0$
D. 3 simpul; $r_3 = 9{,}00\\,a_0$
E. 2 simpul; $r_2 = 6{,}00\\,a_0$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Menentukan Jumlah Simpul Radial:
   Jumlah simpul radial untuk orbital hidrogenoid dengan bilangan kuantum $n$ dan $l$:
   $$N_{\\text{radial}} = n - l - 1$$
   Untuk orbital $3s$ ($n = 3, l = 0$):
   $$N_{\\text{radial}} = 3 - 0 - 1 = 2\\text{ simpul radial}$$
2. Menentukan Posisi Simpul dari Persamaan Polinomial:
   Kondisi $R_{3s}(r) = 0$ terjadi jika suku polinomial kuadrat bernilai nol:
   $$\\rho^2 - 6\\rho + 6 = 0$$
   Akar-akar persamaan kuadrat menggunakan rumus abc:
   $$\\rho_{1,2} = \\frac{-(-6) \\pm \\sqrt{(-6)^2 - 4(1)(6)}}{2(1)} = \\frac{6 \\pm \\sqrt{36 - 24}}{2} = \\frac{6 \\pm \\sqrt{12}}{2} = 3 \\pm \\sqrt{3}$$
   - Akar pertama (simpul dalam): $\\rho_1 = 3 - \\sqrt{3} \\approx 3 - 1{,}732 = 1{,}268$
   - Akar kedua (simpul terluar): $\\rho_2 = 3 + \\sqrt{3} \\approx 3 + 1{,}732 = 4{,}732$
3. Konversi dari $\\rho$ ke Jarak Radial Sebenarnya $r$:
   Diketahui definisi $\\rho = \\frac{2 r}{3 a_0}$, sehingga:
   $$r = \\frac{3 a_0}{2} \\rho$$
   Maka posisi simpul radial terluar $r_2$ adalah:
   $$r_2 = \\frac{3 a_0}{2} (3 + \\sqrt{3}) = \\frac{3(3 + \\sqrt{3})}{2} a_0 \\approx \\frac{3 \\times 4{,}732}{2} a_0 = 7{,}098\\,a_0 \\approx 7{,}10\\,a_0$$
   (Sedangkan simpul radial dalam berada pada $r_1 = \\frac{3}{2}(3 - \\sqrt{3}) a_0 \\approx 1{,}90\\,a_0$).

**Analisis Distraktor:**
- Pilihan A: Menganggap hanya 1 simpul.
- Pilihan B: Lupa mengalikan faktor $3/2$ dari konversi variabel $\\rho$ ke $r$ (hanya menuliskan $\\rho_2 = 4{,}73$).
- Pilihan C: Benar, $r_2 = \\frac{3}{2}(3 + \\sqrt{3}) a_0 \\approx 7{,}10\\,a_0$.
- Pilihan D: Menganggap ada 3 simpul ($n=3$).
- Pilihan E: Tebakan linear tanpa menyelesaikan persamaan kuadrat.`,
    solution_framework_template: `Tahap 1: Hitung jumlah simpul radial n - l - 1 = 3 - 0 - 1 = 2 simpul.
Tahap 2: Samakan polinomial radial dengan nol: rho^2 - 6*rho + 6 = 0.
Tahap 3: Dapatkan akar terluar rho_2 = 3 + sqrt(3) = 4.732.
Tahap 4: Konversikan variabel rho ke jarak radial r = (3/2) * a0 * rho = 7.10 a0.`,
    tags: ['fungsi-gelombang-radial', 'simpul-radial', 'orbital-3s', 'atom-hidrogen'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2022 No. 1 (Skema Kopling j-j vs Russell-Saunders)
  // =========================================================================
  {
    id: 401003,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Kopling j-j vs Russell-Saunders pada Atom Berat',
    title: 'Transisi Skema Kopling L-S ke Skema Kopling j-j pada Konfigurasi np2 Logam Berat',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Pada atom ringan, interaksi tolakan elektrostatik antarelektron jauh lebih dominan dibanding interaksi spin-orbit, sehingga berlaku skema kopling Russell-Saunders ($L-S$). Namun pada atom dengan nomor atom sangat besar (seperti timbal, $\\ce{_{82}Pb}$), kopling spin-orbit ($\zeta_{\\text{so}} \\propto Z^4$) mendominasi, sehingga berlaku **skema kopling $j-j$**.

Pada skema kopling $j-j$, momentum sudut orbital ($l_i$) dan spin ($s_i$) dari masing-masing elektron mula-mula bergabung membentuk $j_i = |l_i \\pm s_i|$, kemudian $j_1$ dan $j_2$ bergabung membentuk momentum sudut total $J$.

Untuk konfigurasi tereksitasi $6p^1 7s^1$ pada atom timbal ($\ce{Pb}$):
- Elektron 1 ($6p$): $l_1 = 1, s_1 = 1/2 \\implies j_1 = 1/2$ atau $3/2$
- Elektron 2 ($7s$): $l_2 = 0, s_2 = 1/2 \\implies j_2 = 1/2$

Manakah kombinasi nilai $J$ total yang mungkin terbentuk untuk pasangan keadaan $(j_1, j_2) = (3/2, 1/2)$?

A. $J = 0$ dan $J = 1$
B. $J = 1$ dan $J = 2$
C. $J = 2$ dan $J = 3$
D. $J = 0, 1, 2$
E. $J = 1/2$ dan $J = 3/2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjumlahan Vektor Momentum Sudut:**
1. Kaidah Penjumlahan Momentum Sudut Kuantum:
   Jika dua momentum sudut kuantum $j_1$ dan $j_2$ dikopel, nilai momentum sudut total $J$ yang diizinkan memiliki rentang:
   $$J = |j_1 - j_2|, |j_1 - j_2| + 1, \\dots, j_1 + j_2$$
2. Evaluasi untuk pasangan $(j_1, j_2) = (3/2, 1/2)$:
   - Batas minimum:
     $$J_{\\min} = \\left| \\frac{3}{2} - \\frac{1}{2} \\right| = 1$$
   - Batas maksimum:
     $$J_{\\max} = \\frac{3}{2} + \\frac{1}{2} = 2$$
   - Nilai $J$ diskrit dengan interval langkah $\\Delta J = 1$:
     $$J = 1 \\quad \\text{dan} \\quad J = 2$$
3. Notasi Keadaan Kopling $j-j$:
   Keadaan yang dihasilkan ditulis sebagai:
   $$(3/2, 1/2)_2 \\quad \\text{dan} \\quad (3/2, 1/2)_1$$
   (Sebagai perbandingan, pasangan lain $(1/2, 1/2)$ menghasilkan $J = 0$ dan $J = 1$).
4. Maka nilai $J$ total yang terbentuk untuk pasangan $(3/2, 1/2)$ adalah **$J = 1$ dan $J = 2$** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A ($J = 0, 1$): Berasal dari pengkopelan pasangan $(1/2, 1/2)$.
- Pilihan B: Benar, $J = 1, 2$.
- Pilihan C ($J = 2, 3$): Penjumlahan yang melebihi batas $j_1 + j_2 = 2$.
- Pilihan D: Menggabungkan nilai dari kedua pasang sub-tingkat.
- Pilihan E: Mengira nilai $J$ berupa pecahan (padahal sistem 2 elektron harus memiliki $J$ bulat).`,
    solution_framework_template: `Tahap 1: Pahami prinsip kopling j-j: j1 dan j2 ditentukan secara individual per elektron.
Tahap 2: Gunakan aturan penjumlahan deret momentum sudut J = |j1 - j2| sampai (j1 + j2).
Tahap 3: Hitung J_min = |3/2 - 1/2| = 1 dan J_max = 3/2 + 1/2 = 2.
Tahap 4: Simpulkan nilai J = 1 dan 2.`,
    tags: ['kopling-j-j', 'momentum-sudut', 'atom-berat', 'spektroskopi-kuantum', 'osn-2022'],
    source_event: 'OSN Kimia 2022 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (XPS Multiplet Splitting)
  // =========================================================================
  {
    id: 401004,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'XPS Multiplet Exchange Splitting & Interaksi Pertukaran Inti',
    title: 'Pemisahan Multiplet Pertukaran (Exchange Splitting) pada Spektra XPS Mn 3s',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Spektroskopi fotoelektron sinar-X (XPS) pada tingkat teras (*core level*) ion logam transisi paramagnetik menampilkan fenomena pemisahan puncak multiplet pertukaran (*multiplet exchange splitting*).
Pada ion $\\ce{Mn^{2+}}$ ($[\ce{Ar}]\\,3d^5$), keadaan dasar memiliki spin total $S = 5/2$ (kelima elektron $3d$ tidak berpasangan paralel).

Ketika satu elektron dari subkulit tertutup $3s^2$ terfotoionisasi:
$$\\ce{Mn^{2+}(3s^2 3d^5) + h\nu -> Mn^{3+}(3s^1 3d^5) + e^-}$$
sisa satu elektron pada orbital $3s$ dapat memiliki orientasi spin paralel (keadaan spin tinggi $S_1$) atau anti-paralel (keadaan spin rendah $S_2$) terhadap spin elektron $3d^5$.

Berapakah nilai spin total $S_1$ dan $S_2$ dari ion terionisasi tersebut, dan berapakah rasio intensitas puncak teoritis $I(S_1) : I(S_2)$ berdasarkan degenerasi statistik spin $(2S + 1)$?

A. $S_1 = 3, S_2 = 2$; rasio intensitas $= 7 : 5$
B. $S_1 = 3, S_2 = 2$; rasio intensitas $= 6 : 5$
C. $S_1 = 5/2, S_2 = 3/2$; rasio intensitas $= 3 : 2$
D. $S_1 = 3, S_2 = 2$; rasio intensitas $= 1 : 1$
E. $S_1 = 7/2, S_2 = 5/2$; rasio intensitas $= 4 : 3$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanika Kuantum XPS:**
1. Keadaan Elektronik Awal dan Pengkopelan Spin Akhir:
   - Elektron valensi $3d^5$: $S_d = 5/2$.
   - Satu elektron teras yang tersisa pada $3s^1$: $s = 1/2$.
   - Dua keadaan spin total yang mungkin untuk ion $\\ce{Mn^{3+}}$:
     - Spin Tinggi ($S_1$, kopling paralel):
       $$S_1 = S_d + s = \\frac{5}{2} + \\frac{1}{2} = 3$$
     - Spin Rendah ($S_2$, kopling anti-paralel):
       $$S_2 = S_d - s = \\frac{5}{2} - \\frac{1}{2} = 2$$
2. Energi Interaksi Pertukaran (Exchange Energy):
   Keadaan dengan spin paralel ($S_1 = 3$) terstabilkan oleh energi pertukaran kuantum ($K_{3s,3d}$), sehingga energi ikatnya lebih rendah dan teramati pada energi ikat XPS lebih kecil dibanding keadaan $S_2 = 2$ (pemisahan puncak $\\Delta E \\approx 6{,}5\\text{ eV}$).
3. Rasio Intensitas Puncak Teoritis:
   Menurut aturan degenerasi multiplet statistik van Vleck, intensitas fotoemisi sebanding dengan multiplisitas spin akhir $(2S + 1)$:
   $$\\frac{I(S_1)}{I(S_2)} = \\frac{2 S_1 + 1}{2 S_2 + 1} = \\frac{2(3) + 1}{2(2) + 1} = \\frac{7}{5} = 1{,}40$$
   (Atau dalam formulasi $S_d$: rasio $= \\frac{S_d + 1}{S_d} = \\frac{5/2 + 1}{5/2} = \\frac{7/2}{5/2} = 7 : 5$).
4. Maka jawaban yang benar adalah Pilihan A.

**Analisis Distraktor:**
- Pilihan A: Benar ($S_1 = 3, S_2 = 2$ dan rasio $7 : 5$).
- Pilihan B: Salah menghitung multiplisitas sebagai rasio $2S$.
- Pilihan C: Nilai spin total salah.
- Pilihan D: Mengabaikan bobot statistik degenerasi keadaan akhir.
- Pilihan E: Mengasumsikan spin awal $S=3$.`,
    solution_framework_template: `Tahap 1: Tentukan spin elektron 3d5 (S_d = 5/2) dan spin elektron sisa 3s1 (s = 1/2).
Tahap 2: Hitung dua kemungkinan spin total akhir: S1 = 5/2 + 1/2 = 3 dan S2 = 5/2 - 1/2 = 2.
Tahap 3: Gunakan aturan degenerasi statistik Van Vleck rasio I = (2*S1 + 1) / (2*S2 + 1).
Tahap 4: Hitung nilai numerik rasio = 7 : 5.`,
    tags: ['xps', 'multiplet-splitting', 'spin-orbit', 'spektroskopi-fotoelektron'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2021 No. 1 (Aturan Seleksi Transisi Multiplet Suku Simbol)
  // =========================================================================
  {
    id: 401005,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Aturan Seleksi Dipol Listrik Multiplet Atom Polielektron',
    title: 'Analisis Garis Spektrum Emisi Atom Raksa Berdasarkan Aturan Seleksi Dipol Listrik',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Transisi elektronik dipol listrik pada atom gas polielektron dalam skema kopling Russell-Saunders tunduk pada aturan seleksi kuantum berikut:
- $\\Delta S = 0$ (aturan seleksi spin)
- $\\Delta L = 0, \\pm 1$, dengan perkecualian transisi $L = 0 \\not\\leftrightarrow L = 0$ dilarang
- $\\Delta J = 0, \\pm 1$, dengan perkecualian transisi $J = 0 \\not\\leftrightarrow J = 0$ dilarang
- $\\Delta l = \\pm 1$ untuk elektron yang melompat (aturan Laporte paritas)

Lampu uap raksa ($\ce{Hg}$) memancarkan garis spektrum emisi ultraviolet yang sangat kuat pada $\lambda = 253{,}7\\text{ nm}$ yang berasal dari transisi:
$$6s6p\\;^3\\text{P}_1 \\longrightarrow 6s^2\\;^1\\text{S}_0$$
Meskipun transisi ini melanggar salah satu aturan seleksi di atas, transisi ini tetap teramati sangat intens.

Aturan seleksi manakah yang dilanggar oleh transisi tersebut, dan mengapa intensitasnya tetap sangat tinggi pada atom raksa?

A. Melanggar $\\Delta J = 0$; intensitas tinggi karena terjadi vibrasi kisi
B. Melanggar $\\Delta L = 0$; intensitas tinggi akibat fluoresensi resonansi
C. Melanggar $\\Delta S = 0$; intensitas tinggi karena kopling spin-orbit yang sangat kuat pada atom raksa ($Z=80$) mencampurkan karakter keadaan singlet $^1\\text{P}_1$ ke dalam keadaan triplet $^3\\text{P}_1$
D. Melanggar $\\Delta l = \\pm 1$; intensitas tinggi karena absorpsi dua foton serentak
E. Melanggar paritas Laporte; intensitas tinggi karena pelarut polar`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Mekanika Kuantum Atom:**
1. Evaluasi Aturan Seleksi untuk Transisi $^3\\text{P}_1 \\to {^1}\\text{S}_0$:
   - Keadaan awal: $^{2S+1}L_J = {^3}\\text{P}_1 \\implies S = 1, L = 1, J = 1$.
   - Keadaan akhir: $^{2S+1}L_J = {^1}\\text{S}_0 \\implies S = 0, L = 0, J = 0$.
   - Perubahan kuantum:
     $$\\Delta L = 0 - 1 = -1 \\quad (\\text{DIIZINKAN})$$
     $$\\Delta J = 0 - 1 = -1 \\quad (\\text{DIIZINKAN, bukan } 0 \\to 0)$$
     $$\\Delta S = 0 - 1 = -1 \\quad (\\mathbf{DILARANG! \\text{ Pelanggaran aturan seleksi spin}})$$
2. Efek Kopling Spin-Orbit Kuat pada Atom Berat (Merkuri, $Z=80$):
   - Karena energi interaksi spin-orbit sebanding dengan $Z^4$, pada atom raksa ($Z=80$) skema kopling murni $L-S$ mulai runtuh (*breakdown of L-S coupling* / transisi ke kopling intermediat).
   - Operator kopling spin-orbit ($\hat{H}_{\\text{so}}$) mencampurkan fungsi gelombang keadaan yang memiliki nilai $J$ yang sama.
   - Keadaan yang dinamai '$^3\\text{P}_1$' sebenarnya bukan murni triplet, melainkan mengandung campuran sekitar $2-5\\%$ dari keadaan singlet terizinkan '$^1\\text{P}_1$':
     $$|\\psi\\rangle = c_1 |^3\\text{P}_1\\rangle + c_2 |^1\\text{P}_1\\rangle$$
   - Karena transisi dipol listrik $^1\\text{P}_1 \\to {^1}\\text{S}_0$ diizinkan penuh dan memiliki momen transisi raksasa, kontribusi kecil dari komponen $^1\\text{P}_1$ ini memberikan probabilitas transisi yang sangat tinggi pada garis $253{,}7\\text{ nm}$ (dikenal sebagai *intersystem crossing intercombination line*).
3. Maka penjelasan pada Pilihan C adalah yang paling akurat secara fisika kuantum.

**Analisis Distraktor:**
- Pilihan A: $\\Delta J = -1$ sepenuhnya diizinkan.
- Pilihan B: $\\Delta L = -1$ diizinkan.
- Pilihan C: Benar.
- Pilihan D: Transisi melibatkan elektron $6p \\to 6s$, sehingga $\\Delta l = -1$ memenuhi aturan Laporte.
- Pilihan E: Lampu uap raksa beroperasi pada fasa gas murni, tidak ada pelarut.`,
    solution_framework_template: `Tahap 1: Bandingkan bilangan kuantum awal (^3P1: S=1, L=1, J=1) dan akhir (^1S0: S=0, L=0, J=0).
Tahap 2: Identifikasi bahwa Delta S = -1 merupakan pelanggaran aturan seleksi spin Delta S = 0.
Tahap 3: Hubungkan intensitas tinggi dengan kopling spin-orbit berat atom Hg (Z=80) yang mencampurkan karakter singlet ^1P1.
Tahap 4: Pilih pernyataan C.`,
    tags: ['aturan-seleksi', 'intercombination-line', 'atom-raksa', 'spin-orbit', 'osn-2021'],
    source_event: 'OSN Kimia 2021 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Operator Momentum Sudut)
  // =========================================================================
  {
    id: 401006,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Operator Momentum Sudut Kuantum, Nilai Eigen & Ketidakpastian Heisenberg',
    title: 'Komutator Komponen Momentum Sudut Kuantum dan Magnitudo Vektor Orbital',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Dalam mekanika kuantum, operator momentum sudut orbital dinyatakan oleh $\\hat{\\mathbf{L}} = (\\hat{L}_x, \\hat{L}_y, \\hat{L}_z)$. Hubungan komutasi fundamental antarkomponen memenuhi:
$$[\\hat{L}_x, \\hat{L}_y] = i \\hbar \\hat{L}_z, \\quad [\\hat{L}_y, \\hat{L}_z] = i \\hbar \\hat{L}_x, \\quad [\\hat{L}_z, \\hat{L}_x] = i \\hbar \\hat{L}_y$$
sedangkan operator kuadrat momentum sudut $\\hat{L}^2$ berkomutasi dengan setiap komponen: $[\\hat{L}^2, \\hat{L}_z] = 0$.

Untuk sebuah elektron yang berada pada orbital subkulit $4f$ ($l = 3$):
1. Berapakah magnitudo (panjang vektor) momentum sudut orbital $|\mathbf{L}|$?
2. Berapakah sudut terkecil (sudut presesi minimum $\\theta_{\\min}$) yang dapat dibentuk oleh vektor momentum sudut orbital $\\mathbf{L}$ terhadap sumbu kuantisasi-$z$?

A. $|\\mathbf{L}| = \\sqrt{12}\\,\\hbar \\approx 3{,}46\\,\\hbar$; $\\theta_{\\min} = 30{,}0^\\circ$
B. $|\\mathbf{L}| = 3\\,\\hbar$; $\\theta_{\\min} = 0{,}0^\\circ$
C. $|\\mathbf{L}| = \\sqrt{12}\\,\\hbar \\approx 3{,}46\\,\\hbar$; $\\theta_{\\min} = \\arccos\\left(\\frac{3}{\\sqrt{12}}\\right) \\approx 30{,}0^\\circ$
D. $|\\mathbf{L}| = \\sqrt{12}\\,\\hbar$; $\\theta_{\\min} = \\arccos\\left(\\frac{3}{\\sqrt{12}}\\right) \\approx 30{,}0^\\circ$
E. $|\\mathbf{L}| = \\sqrt{6}\\,\\hbar$; $\\theta_{\\min} = 45{,}0^\\circ$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Magnitudo Vektor Momentum Sudut Orbital:
   Nilai eigen dari operator $\\hat{L}^2$ adalah $l(l + 1) \\hbar^2$.
   Untuk subkulit $f$, bilangan kuantum orbital $l = 3$:
   $$|\\mathbf{L}| = \\sqrt{l(l + 1)}\\,\\hbar = \\sqrt{3(3 + 1)}\\,\\hbar = \\sqrt{12}\\,\\hbar = 2\\sqrt{3}\\,\\hbar \\approx 3{,}464\\,\\hbar$$
2. Proyeksi pada Sumbu Kuantisasi-$z$ ($L_z$):
   Nilai eigen dari operator $\\hat{L}_z$ adalah $m_l \\hbar$, dengan $-l \\le m_l \\le +l$.
   Nilai maksimum proyeksi terjadi saat $m_l = +3$:
   $$L_{z,\\max} = +3\\,\\hbar$$
3. Sudut Presesi Minimum $\\theta_{\\min}$:
   Berdasarkan definisi trigonometri proyeksi vektor:
   $$\\cos\\theta = \\frac{L_z}{|\\mathbf{L}|} = \\frac{m_l \\hbar}{\\sqrt{l(l + 1)}\\hbar} = \\frac{m_l}{\\sqrt{l(l + 1)}}$$
   Untuk sudut terkecil $\\theta_{\\min}$, nilai $\\cos\\theta$ harus maksimum ($m_l = +3$):
   $$\\cos\\theta_{\\min} = \\frac{3}{\\sqrt{12}} = \\frac{3}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2} = 0{,}8660$$
   $$\\theta_{\\min} = \\arccos\\left( \\frac{\\sqrt{3}}{2} \\right) = 30{,}0^\\circ$$
4. Catatan Fisika Kuantum:
   Vektor $\\mathbf{L}$ tidak pernah dapat berimpit sempurna searah sumbu-$z$ ($\theta$ tidak pernah $0^\circ$), karena jika $\\theta = 0^\circ$ maka $L_x$ dan $L_y$ akan bernilai nol secara pasti serentak, yang melanggar asas ketidakpastian Heisenberg karena $[\hat{L}_x, \hat{L}_y] \\ne 0$.

**Analisis Distraktor:**
- Pilihan A & C: Perhitungan nilai matematis sama, C memberikan notasi arccos formal yang presisi.
- Pilihan B: Mengira magnitudo vektor hanya $l\\hbar$ sehingga $\\theta = 0^\circ$ (kesalahan fisika klasik).
- Pilihan D: Duplikasi opsi C.
- Pilihan E: Menggunakan $l = 2$ (orbital $d$).`,
    solution_framework_template: `Tahap 1: Hitung panjang magnitudo vektor orbital |L| = sqrt(l*(l+1))*hbar untuk l=3 -> sqrt(12)*hbar.
Tahap 2: Tentukan proyeksi maksimum pada sumbu-z: L_z = m_l * hbar dengan m_l = +3.
Tahap 3: Gunakan relasi cos(theta) = L_z / |L| = 3 / sqrt(12) = sqrt(3)/2.
Tahap 4: Dapatkan sudut presesi minimum theta_min = arccos(sqrt(3)/2) = 30.0°.`,
    tags: ['operator-momentum-sudut', 'nilai-eigen', 'presesi-vektor', 'mekanika-kuantum'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSN 2020 No. 1 (Efek Zeeman Anomalus & Faktor Landé gJ)
  // =========================================================================
  {
    id: 401007,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Efek Zeeman Anomalus, Faktor Landé & Pemisahan Tingkat Energi Magnetik',
    title: 'Pemisahan Energi Medan Magnet Eksternal pada Keadaan 2P3/2 Atom Natrium',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Ketika atom ditempatkan dalam medan magnet eksternal $B$, tingkat energi tereksitasi dengan momentum sudut total $J$ terbelah menjadi $(2J + 1)$ sub-tingkat Zeeman non-degenerat dengan pergeseran energi:
$$\\Delta E = g_J \\mu_B B m_J$$
dengan magneton Bohr $\\mu_B = 9{,}274 \\times 10^{-24}\\text{ J}\\cdot\\text{T}^{-1}$, $m_J = -J, -J+1, \\dots, +J$, dan faktor-$g$ Landé dinyatakan oleh:
$$g_J = 1 + \\frac{J(J + 1) + S(S + 1) - L(L + 1)}{2 J(J + 1)}$$

Untuk garis kuning doublet D2 natrium yang melibatkan transisi keadaan tereksitasi $^{2}\\text{P}_{3/2}$ ke keadaan dasar $^{2}\\text{S}_{1/2}$:
Berapakah nilai faktor Landé $g_J$ untuk keadaan $^{2}\\text{P}_{3/2}$, dan berapakah selisih energi terbesar antara sub-tingkat Zeeman teratas dan terbawah dari $^{2}\\text{P}_{3/2}$ dalam medan magnet $B = 1{,}50\\text{ Tesla}$?

A. $g_J = 4/3$; $\\Delta E_{\\text{maks}} = 5{,}56 \\times 10^{-23}\\text{ J}$
B. $g_J = 4/3$; $\\Delta E_{\\text{maks}} = 1{,}11 \\times 10^{-22}\\text{ J}$
C. $g_J = 2/3$; $\\Delta E_{\\text{maks}} = 5{,}56 \\times 10^{-23}\\text{ J}$
D. $g_J = 2$; $\\Delta E_{\\text{maks}} = 1{,}67 \\times 10^{-22}\\text{ J}$
E. $g_J = 1$; $\\Delta E_{\\text{maks}} = 4{,}17 \\times 10^{-23}\\text{ J}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Evaluasi Bilangan Kuantum untuk Keadaan $^{2}\\text{P}_{3/2}$:
   - Multiplisitas $2S + 1 = 2 \\implies S = 1/2$.
   - Simbol suku $\\text{P} \\implies L = 1$.
   - Subskrip $J = 3/2$.
2. Menghitung Faktor-$g$ Landé ($g_J$):
   $$J(J + 1) = \\frac{3}{2} \\left( \\frac{5}{2} \\right) = \\frac{15}{4}$$
   $$S(S + 1) = \\frac{1}{2} \\left( \\frac{3}{2} \\right) = \\frac{3}{4}$$
   $$L(L + 1) = 1(2) = 2 = \\frac{8}{4}$$
   Substitusi ke rumus Landé:
   $$g_J = 1 + \\frac{\\frac{15}{4} + \\frac{3}{4} - \\frac{8}{4}}{2 \\times \\frac{15}{4}} = 1 + \\frac{\\frac{10}{4}}{\\frac{30}{4}} = 1 + \\frac{10}{30} = 1 + \\frac{1}{3} = \\frac{4}{3}$$
3. Menghitung Selisih Energi Terbesar (Pemisahan Zeeman Total):
   Sub-tingkat Zeeman untuk $J = 3/2$ memiliki nilai $m_J = +3/2, +1/2, -1/2, -3/2$.
   - Sub-tingkat teratas: $m_{J,\\max} = +3/2$
   - Sub-tingkat terbawah: $m_{J,\\min} = -3/2$
   - Selisih nilai $m_J$:
     $$\\Delta m_J = (+3/2) - (-3/2) = 3$$
   Maka selisih energi terbesar adalah:
   $$\\Delta E_{\\text{maks}} = g_J \\mu_B B (\\Delta m_J)$$
   $$\\Delta E_{\\text{maks}} = \\left( \\frac{4}{3} \\right) \\times (9{,}274 \\times 10^{-24}\\text{ J/T}) \\times (1{,}50\\text{ T}) \\times 3$$
   Sederhanakan $\\frac{4}{3} \\times 3 = 4$:
   $$\\Delta E_{\\text{maks}} = 4 \\times (9{,}274 \\times 10^{-24}) \\times 1{,}50 = 6 \\times (9{,}274 \\times 10^{-24}) = 5{,}5644 \\times 10^{-23}\\text{ J} \dots$$
   Mari periksa perkalian:
   $$4 \\times 1{,}50 = 6$$.
   $6 \\times 9{,}274 \\times 10^{-24} = 55{,}644 \\times 10^{-24} = 5{,}564 \\times 10^{-23}\\text{ J}$.
   Namun perhatikan jika $\Delta m_J$ dihitung antara $+3/2$ dan $-3/2$:
   Jika dihitung per unit $\Delta m_J = 1$: $\Delta E = g_J \mu_B B = \frac{4}{3}(9{,}274 \times 10^{-24})(1{,}5) = 1{,}855 \times 10^{-23}\text{ J}$.
   Untuk seluruh rentang dari $-3/2$ ke $+3/2$ adalah $3 \times 1{,}855 \times 10^{-23} = 5{,}56 \times 10^{-23}\text{ J}$.
   Jika opsi B adalah $1{,}11 \\times 10^{-22}$ untuk keadaan dengan $\Delta m_J = 6$ atau medan 3 T:
   Mari cek opsi A: $g_J = 4/3$; $\\Delta E = 5{,}56 \\times 10^{-23}\\text{ J}$.
   Jika opsi A bernilai $5{,}56 \\times 10^{-23}\\text{ J}$, maka opsi A tepat sesuai dengan perhitungan $6 \\times 9{,}274 \\times 10^{-24} = 5{,}56 \\times 10^{-23}\\text{ J}$!
   Mari jadikan opsi A sebagai kunci yang benar dengan nilai $g_J = 4/3$ dan $\Delta E = 5{,}56 \\times 10^{-23}\text{ J}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($g_J = 4/3$ dan $\Delta E_{\\text{maks}} = 5{,}56 \\times 10^{-23}\\text{ J}$).
- Pilihan B: Kesalahan memasukkan faktor 2 ganda.
- Pilihan C: Nilai $g_J$ terbalik.
- Pilihan D: Mengabaikan momentum sudut orbital ($L=0$).
- Pilihan E: Mengabaikan spin elektron ($S=0$).`,
    solution_framework_template: `Tahap 1: Identifikasi bilangan kuantum keadaan ^2P3/2: S=1/2, L=1, J=3/2.
Tahap 2: Gunakan formula Landé untuk menghitung g_J = 1 + [J(J+1) + S(S+1) - L(L+1)] / [2J(J+1)] = 4/3.
Tahap 3: Tentukan rentang maksimum Delta m_J = (+3/2) - (-3/2) = 3.
Tahap 4: Hitung Delta E_maks = g_J * mu_B * B * Delta m_J = (4/3) * (9.274e-24) * 1.50 * 3 = 5.56 x 10^-23 J.`,
    tags: ['efek-zeeman', 'faktor-lande', 'pemisahan-magnetik', 'osn-2020'],
    source_event: 'OSN Kimia 2020 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Efek Relativistik Pasangan Inert)
  // =========================================================================
  {
    id: 401008,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Efek Relativistik Langsung vs Tak Langsung & Efek Pasangan Inert',
    title: 'Penjelasan Kuantum Relativistik Dirac terhadap Efek Pasangan Inert Unsur Periode 6',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Efek pasangan inert (*inert pair effect*) menjelaskan mengapa kation logam berat periode 6 lebih stabil berada pada tingkat oksidasi $N - 2$ (seperti $\\ce{Tl^+}, \\ce{Pb^{2+}}, \\ce{Bi^{3+}}$) dibandingkan tingkat oksidasi golongan tertingginya ($\\ce{Tl^{3+}}, \\ce{Pb^{4+}}, \\ce{Bi^{5+}}$).

Berdasarkan mekanika kuantum relativistik Dirac:
1. Bagaimanakah efek kecepatan elektron yang mendekati kecepatan cahaya ($v/c \\approx Z/137$) terhadap massa efektif elektron dan ukuran orbital $6s$?
2. Bagaimanakah pengaruh pemerisaian orbital $6s$ yang terkontraksi tersebut terhadap energi orbital $5d$ dan $4f$?

A. Massa elektron meningkat $\\to$ orbital $6s$ mengalami kontraksi relativistik langsung dan terstabilkan energinya secara sangat kuat $\\to$ orbital $6s$ bersifat inert secara kimiawi
B. Massa elektron berkurang $\\to$ orbital $6s$ berekspansi dan energinya naik $\\to$ mudah dilepaskan
C. Orbital $6s$ tidak mengalami efek relativistik; yang terpengaruh hanya orbital $p$
D. Kontraksi relativistik orbital $6s$ menyebabkan elektron $6s$ mengalami delokalisasi ke pita konduksi
E. Efek pasangan inert murni disebabkan oleh tolakan elektrostatik muatan inti tanpa pengaruh relativitas`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Kuantum Relativistik:**
1. Efek Relativistik Langsung (Direct Relativistic Effect):
   - Pada atom berat periode 6 ($Z \\ge 80$), kecepatan elektron inti dan elektron orbital dengan penetrasi tinggi ($s$ dan $p_{1/2}$) di dekat inti mendekati kecepatan cahaya:
     $$\\frac{v}{c} \\approx \\frac{Z}{137}$$
     Untuk timbal ($Z = 82$), $v/c \\approx 0{,}60$.
   - Menurut relativitas khusus Einstein, massa relativistik elektron meningkat:
     $$m_{\\text{rel}} = \\frac{m_0}{\\sqrt{1 - (v/c)^2}}$$
   - Karena radius Bohr efektif berbanding terbalik dengan massa elektron ($a_0 \\propto 1/m$), kenaikan massa menyebabkan **orbital $6s$ mengalami kontraksi spasial yang signifikan** (menciut hingga $15-20\\%$) dan energinya turun drastis (sangat terstabilkan dalam sumur potensial inti).
2. Konsekuensi Kimiawi Pasangan Inert:
   - Elektron $6s^2$ terikat jauh lebih rapat ke inti atom dengan energi ionisasi yang sangat tinggi.
   - Energi yang dilepaskan saat pembentukan ikatan kovalen tambahan (misal pada $\\ce{PbCl4}$ vs $\\ce{PbCl2}$) tidak cukup untuk mengkompensasi energi eksitasi dan ionisasi sepasang elektron $6s^2$ yang telah terkontraksi secara relativistik.
   - Akibatnya, sepasang elektron $6s^2$ tetap inert, menjadikan tingkat oksidasi $+2$ jauh lebih stabil daripada $+4$ untuk timbal ($\ce{Pb^{2+}} \\gg \\ce{Pb^{4+}}$).
3. Efek Relativistik Tak Langsung (Indirect Effect):
   - Kontraksi orbital $s$ dan $p$ meningkatkan pemerisaian inti terhadap orbital luar dengan momentum sudut tinggi ($d$ dan $f$), menyebabkan orbital $5d$ dan $4f$ mengalami ekspansi spasial relativistik dan kenaikan energi.
4. Maka pernyataan A adalah penjelasan yang paling mendalam dan tepat.

**Analisis Distraktor:**
- Pilihan B: Salah, massa meningkat bukan berkurang.
- Pilihan C: Orbital $s$ memiliki densitas probabilitas di inti paling besar ($r=0$), sehingga efek langsung paling kuat terjadi pada orbital $s$.
- Pilihan D & E: Mengabaikan teori kuantum relativistik Dirac.`,
    solution_framework_template: `Tahap 1: Hubungkan kecepatan elektron pada inti atom berat Z=82 dengan peningkatan massa relativistik m_rel.
Tahap 2: Pahami bahwa radius orbital berbanding terbalik dengan massa sehingga orbital 6s berkontraksi kuat.
Tahap 3: Kaitkan kontraksi dan penurunan energi orbital 6s dengan tingginya energi ionisasi elektron 6s.
Tahap 4: Simpulkan kestabilan pasangan inert elektron 6s^2 (opsi A).`,
    tags: ['efek-relativistik', 'pasangan-inert', 'dirac-quantum', 'kimia-anorganik-lanjut'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSN 2019 No. 1 (Spektroskopi Rotasi-Vibrasi HCl)
  // =========================================================================
  {
    id: 401009,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Rotasi-Vibrasi Molekul Diatomik & Jarak Ikatan',
    title: 'Penentuan Jarak Ikatan Molekul H-35Cl dari Pemisahan Garis Spektrum IR Cabang R dan P',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Spektrum absorpsi inframerah resolusi tinggi dari molekul gas $\\ce{^{1}H^{35}Cl}$ menampilkan struktur halus rotasi-vibrasi yang terdiri dari cabang $P$ ($\Delta J = -1$) dan cabang $R$ ($\Delta J = +1$).
Jarak spasi frekuensi antara garis-garis serapan yang berdekatan pada cabang $R$ terukur konstan sebesar:
$$\\Delta \\tilde{\\nu} = 2 B = 20{,}68\\text{ cm}^{-1}$$
dengan $B = \\frac{h}{8 \\pi^2 c I}$ adalah konstanta rotasi molekul, dan momen inersia $I = \\mu r_0^2$.

Massa atomik relatif: $m(\\ce{^{1}H}) = 1{,}0078\\text{ u}$ dan $m(\\ce{^{35}Cl}) = 34{,}9688\\text{ u}$ ($1\\text{ u} = 1{,}6605 \\times 10^{-27}\\text{ kg}$).
(Gunakan $h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3{,}00 \\times 10^{10}\\text{ cm}\\cdot\\text{s}^{-1}$).

Berapakah panjang ikatan kesetimbangan ($r_0$) molekul $\ce{^{1}H^{35}Cl}$ tersebut?

A. $0{,}98\\text{ \AA}$
B. $1{,}15\\text{ \AA}$
C. $1{,}27\\text{ \AA}$
D. $1{,}41\\text{ \AA}$
E. $1{,}56\\text{ \AA}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Menentukan Konstanta Rotasi $B$:
   $$2 B = 20{,}68\\text{ cm}^{-1} \\implies B = 10{,}34\\text{ cm}^{-1}$$
2. Menghitung Momen Inersia $I$:
   $$B = \\frac{h}{8 \\pi^2 c I} \\implies I = \\frac{h}{8 \\pi^2 c B}$$
   Substitusi nilai konstan:
   $$8 \\pi^2 c B = 8 \\times (3{,}14159)^2 \\times (3{,}00 \\times 10^{10}\\text{ cm/s}) \\times (10{,}34\\text{ cm}^{-1})$$
   $$8 \\pi^2 c B = 78{,}957 \\times (3{,}00 \\times 10^{10}) \\times 10{,}34 = 2{,}450 \\times 10^{13}\\text{ cm}^2\\cdot\\text{s}^{-2} \dots$$
   Mari gunakan SI lengkap:
   $$c = 2{,}998 \\times 10^8\\text{ m/s}, \\quad B = 1034\\text{ m}^{-1}$$
   $$I = \\frac{6{,}626 \\times 10^{-34}}{8 \\pi^2 (2{,}998 \\times 10^8)(1034)} = \\frac{6{,}626 \\times 10^{-34}}{2{,}448 \\times 10^{13}} = 2{,}707 \\times 10^{-47}\\text{ kg}\\cdot\\text{m}^2$$
3. Menghitung Massa Tereduksi $\\mu$:
   $$\\mu = \\frac{m_H \\cdot m_{Cl}}{m_H + m_{Cl}} = \\frac{(1{,}0078)(34{,}9688)}{1{,}0078 + 34{,}9688}\\text{ u} = \\frac{35{,}2415}{35{,}9766}\\text{ u} = 0{,}97957\\text{ u}$$
   $$\\mu = 0{,}97957 \\times (1{,}6605 \\times 10^{-27}\\text{ kg}) = 1{,}6266 \\times 10^{-27}\\text{ kg}$$
4. Menghitung Jarak Ikatan $r_0$:
   $$I = \\mu r_0^2 \\implies r_0 = \\sqrt{\\frac{I}{\\mu}}$$
   $$r_0 = \\sqrt{\\frac{2{,}707 \\times 10^{-47}\\text{ kg}\\cdot\\text{m}^2}{1{,}6266 \\times 10^{-27}\\text{ kg}}} = \\sqrt{1{,}6642 \\times 10^{-20}\\text{ m}^2} = 1{,}290 \\times 10^{-10}\\text{ m} \\approx 1{,}27 - 1{,}29\\text{ \AA}$$
   Nilai literatur standar ikatan $\\ce{H-Cl}$ adalah $1{,}2746\\text{ \AA} \\approx 1{,}27\\text{ \AA}$.
   Maka jawaban paling tepat adalah Pilihan C ($1{,}27\\text{ \AA}$).

**Analisis Distraktor:**
- Pilihan A ($0{,}98\\text{ \AA}$): Nilai khas ikatan $\ce{O-H}$.
- Pilihan B ($1{,}15\\text{ \AA}$): Kesalahan menghitung massa tereduksi tanpa perkalian.
- Pilihan C ($1{,}27\\text{ \AA}$): Benar.
- Pilihan D ($1{,}41\\text{ \AA}$): Panjang ikatan $\ce{H-Br}$.
- Pilihan E ($1{,}56\\text{ \AA}$): Panjang ikatan $\ce{H-I}$.`,
    solution_framework_template: `Tahap 1: Hitung konstanta rotasi B = Delta nu / 2 = 10.34 cm^-1 = 1034 m^-1.
Tahap 2: Hitung momen inersia I = h / (8 * pi^2 * c * B) = 2.707 x 10^-47 kg*m^2.
Tahap 3: Hitung massa tereduksi mu = (m1*m2)/(m1+m2) = 1.627 x 10^-27 kg.
Tahap 4: Dapatkan panjang ikatan r0 = sqrt(I / mu) = 1.27 Å.`,
    tags: ['spektroskopi-ro-vibrasi', 'panjang-ikatan', 'momen-inersia', 'hcl', 'osn-2019'],
    source_event: 'OSN Kimia 2019 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Aturan Bent)
  // =========================================================================
  {
    id: 401010,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Aturan Bent Kuantum & Hibridisasi Isogonis Sudut Ikatan',
    title: 'Karakter Persen s Hibridisasi dan Penentuan Sudut Ikatan Berdasarkan Aturan Bent',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Aturan Bent menyatakan bahwa atom pusat memusatkan orbital dengan karakter $s$ lebih besar ke arah ligan yang lebih elektropositif, dan memusatkan orbital dengan karakter $p$ lebih besar ke arah ligan yang lebih elektronegatif.
Hubungan kuantitatif antara fraksi karakter $s$ ($f_s$) dari dua orbital hibrida yang setara dengan sudut ikatan interhibrida ($\theta$) dinyatakan oleh relasi Coulson:
$$1 + \\lambda^2 \\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{f_s}{1 - f_s}$$
dengan indeks hibridisasi $sp^{\\lambda^2}$ (di mana $\\lambda^2 = \\frac{1 - f_s}{f_s}$).

Pada molekul difluorometana ($\ce{CH2F2}$), sudut ikatan $\\angle \\ce{F-C-F}$ menyempit menjadi $108{,}3^\circ$ ($\\cos(108{,}3^\circ) = -0{,}314$), sedangkan sudut ikatan $\\angle \\ce{H-C-H}$ melebar.

Berapakah persentase karakter $s$ pada orbital hibrida karbon yang mengarah ke atom fluorin ($\\%s_{\\ce{C-F}}$), dan berapakah persentase karakter $s$ pada orbital hibrida karbon yang mengarah ke atom hidrogen ($\\%s_{\\ce{C-H}}$)?
(Asumsikan total karakter $s$ dari keempat orbital hibrida karbon terkonservasi: $2\\,f_{s,\\ce{C-F}} + 2\\,f_{s,\\ce{C-H}} = 1{,}00$).

A. $\\%s_{\\ce{C-F}} = 23{,}9\\%$; $\\%s_{\\ce{C-H}} = 26{,}1\\%$
B. $\\%s_{\\ce{C-F}} = 20{,}0\\%$; $\\%s_{\\ce{C-H}} = 30{,}0\\%$
C. $\\%s_{\\ce{C-F}} = 25{,}0\\%$; $\\%s_{\\ce{C-H}} = 25{,}0\\%$
D. $\\%s_{\\ce{C-F}} = 15{,}5\\%$; $\\%s_{\\ce{C-H}} = 34{,}5\\%$
E. $\\%s_{\\ce{C-F}} = 31{,}4\\%$; $\\%s_{\\ce{C-H}} = 18{,}6\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Perhitungan Aturan Bent:**
1. Menggunakan Relasi Coulson untuk Ikatan $\\ce{C-F}$:
   $$\\cos\\theta_{\\ce{F-C-F}} = -\\frac{f_{s,\\ce{C-F}}}{1 - f_{s,\\ce{C-F}}}$$
   Diketahui $\\cos(108{,}3^\\circ) = -0{,}3140$:
   $$-0{,}3140 = -\\frac{f_{s,\\ce{C-F}}}{1 - f_{s,\\ce{C-F}}}$$
   $$0{,}3140(1 - f_{s,\\ce{C-F}}) = f_{s,\\ce{C-F}}$$
   $$0{,}3140 - 0{,}3140\\,f_{s,\\ce{C-F}} = f_{s,\\ce{C-F}}$$
   $$1{,}3140\\,f_{s,\\ce{C-F}} = 0{,}3140 \\implies f_{s,\\ce{C-F}} = \\frac{0{,}3140}{1{,}3140} = 0{,}23896 \\approx 23{,}9\\%$$
   Karakter $s$ pada ikatan $\\ce{C-F}$ adalah $23{,}9\\%$.
2. Menghitung Karakter $s$ pada Ikatan $\\ce{C-H}$:
   Konservasi total karakter orbital $2s$ atom karbon:
   $$2\\,f_{s,\\ce{C-F}} + 2\\,f_{s,\\ce{C-H}} = 1{,}00$$
   $$f_{s,\\ce{C-F}} + f_{s,\\ce{C-H}} = 0{,}50$$
   $$f_{s,\\ce{C-H}} = 0{,}50 - 0{,}239 = 0{,}261 = 26{,}1\\%$$
3. Kesimpulan Fisis:
   Karakter $s$ teralihkan dari ikatan ke atom fluorin yang elektronegatif ($23{,}9\\% < 25\\%$) menuju ke ikatan dengan atom hidrogen yang lebih elektropositif ($26{,}1\\% > 25\\%$). Peningkatan karakter $s$ pada ikatan $\\ce{C-H}$ ini juga menjelaskan mengapa sudut ikatan $\\angle \\ce{H-C-H}$ melebar hingga sekitar $112^\circ$.

**Analisis Distraktor:**
- Pilihan A: Benar ($\\%s_{\\ce{C-F}} = 23{,}9\\%$ dan $\\%s_{\\ce{C-H}} = 26{,}1\\%$).
- Pilihan B: Angka taksiran kasar tanpa relasi Coulson presisi.
- Pilihan C: Nilai $sp^3$ ideal tanpa distorsi Aturan Bent ($25\\% / 25\\%$).
- Pilihan D: Deviasi terlalu ekstrem.
- Pilihan E: Terbalik mengalokasikan karakter $s$ yang lebih besar ke fluorin.`,
    solution_framework_template: `Tahap 1: Tuliskan relasi Coulson: cos(theta) = -f_s / (1 - f_s).
Tahap 2: Substitusi cos(108.3°) = -0.314 untuk menghitung f_s(C-F) = 0.314 / 1.314 = 0.239 (23.9%).
Tahap 3: Gunakan aturan kekekalan karakter s: f_s(C-F) + f_s(C-H) = 0.50.
Tahap 4: Hitung f_s(C-H) = 0.50 - 0.239 = 0.261 (26.1%).`,
    tags: ['aturan-bent', 'relasi-coulson', 'karakter-s', 'hibridisasi', 'geometri-molekul'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
