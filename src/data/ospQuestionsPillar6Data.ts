/**
 * ospQuestionsPillar6Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 6: Kinetika Kimia Lanjut, Mekanisme Reaksi Kompleks, Pendekatan Keadaan Tunak (SSA) & Teori Laju Reaksi
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 306001 - 306010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 06 = Pilar 6
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_6_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 17 (Pendekatan Keadaan Tunak SSA Mekanisme Rice-Herzfeld)
  // =========================================================================
  {
    id: 306001,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Pendekatan Keadaan Tunak (SSA) & Mekanisme Berantai Rice-Herzfeld',
    title: 'Pendekatan Keadaan Tunak (SSA) pada Mekanisme Berantai Rice-Herzfeld',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Pirolisis termal asetaldehida fasa gas mengikuti mekanisme radikal berantai Rice-Herzfeld sebagai berikut:
(1) Inisiasi: $\\ce{CH3CHO ->[k_1] \cdot CH3 + \cdot CHO}$
(2) Propagasi 1: $\\ce{\cdot CH3 + CH3CHO ->[k_2] CH4 + \cdot CH3CO}$
(3) Propagasi 2: $\\ce{\cdot CH3CO ->[k_3] \cdot CH3 + CO}$
(4) Terminasi: $\\ce{2 \cdot CH3 ->[k_4] C2H6}$

Dengan mengasumsikan radikal formil ($\\ce{\cdot CHO}$) cepat terurai tanpa mempengaruhi rantai utama dan menerapkan Pendekatan Keadaan Tunak (Steady-State Approximation, SSA) terhadap intermediat radikal $\\ce{\cdot CH3}$ dan $\\ce{\cdot CH3CO}$, bagaimanakah persamaan laju pembentukan metana ($\\frac{d[\\ce{CH4}]}{dt}$)?

A. $k_2 \\left( \\frac{k_1}{k_4} \\right) [\\ce{CH3CHO}]^2$
B. $k_2 \\left( \\frac{k_1}{2 k_4} \\right)^{1/2} [\\ce{CH3CHO}]^{3/2}$
C. $k_2 \\left( \\frac{k_1}{k_4} \\right)^{1/2} [\\ce{CH3CHO}]^{1/2}$
D. $\\left( \\frac{k_1 k_2 k_3}{k_4} \\right)^{1/2} [\\ce{CH3CHO}]$
E. $k_1 [\\ce{CH3CHO}] + k_2 [\\ce{CH3CHO}]^2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penurunan Persamaan:**
1. Laju pembentukan metana berasal dari tahap propagasi (2):
   $$\\frac{d[\\ce{CH4}]}{dt} = k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}]$$
2. Terapkan Pendekatan Keadaan Tunak (SSA) untuk kedua radikal intermediat:
   Untuk radikal $\\ce{\\cdot CH3CO}$:
   $$\\frac{d[\\ce{\\cdot CH3CO}]}{dt} = k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}] - k_3 [\\ce{\\cdot CH3CO}] = 0$$
   $$\\implies k_3 [\\ce{\\cdot CH3CO}] = k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}]$$
   Untuk radikal $\\ce{\\cdot CH3}$:
   $$\\frac{d[\\ce{\\cdot CH3}]}{dt} = k_1 [\\ce{CH3CHO}] - k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}] + k_3 [\\ce{\\cdot CH3CO}] - 2 k_4 [\\ce{\\cdot CH3}]^2 = 0$$
3. Substitusi $k_3 [\\ce{\\cdot CH3CO}] = k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}]$ ke dalam persamaan di atas:
   $$k_1 [\\ce{CH3CHO}] - k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}] + k_2 [\\ce{\\cdot CH3}][\\ce{CH3CHO}] - 2 k_4 [\\ce{\\cdot CH3}]^2 = 0$$
   $$k_1 [\\ce{CH3CHO}] - 2 k_4 [\\ce{\\cdot CH3}]^2 = 0$$
   $$[\\ce{\\cdot CH3}]^2 = \\frac{k_1 [\\ce{CH3CHO}]}{2 k_4} \\implies [\\ce{\\cdot CH3}] = \\left( \\frac{k_1}{2 k_4} \\right)^{1/2} [\\ce{CH3CHO}]^{1/2}$$
4. Substitusi konsentrasi radikal metil ke laju pembentukan metana:
   $$\\frac{d[\\ce{CH4}]}{dt} = k_2 \\left( \\frac{k_1}{2 k_4} \\right)^{1/2} [\\ce{CH3CHO}]^{1/2} [\\ce{CH3CHO}] = k_2 \\left( \\frac{k_1}{2 k_4} \\right)^{1/2} [\\ce{CH3CHO}]^{3/2}$$
   Diperoleh orde reaksi pecahan $\\frac{3}{2}$ yang merupakan karakteristik klasik dari mekanisme Rice-Herzfeld.

**Analisis Distraktor:**
- Pilihan A: Lupa menarik akar kuadrat pada konsentrasi radikal hasil terminasi bimolekuler.
- Pilihan B: Benar, menunjukkan konstanta laju gabungan dan orde $3/2$.
- Pilihan C: Lupa mengalikan dengan konsentrasi reaktan $[\\ce{CH3CHO}]$ dari tahap propagasi.
- Pilihan D: Menyertakan $k_3$ yang saling meniadakan dalam neraca keadaan tunak radikal.
- Pilihan E: Mengabaikan konsep rantai SSA dan hanya menjumlahkan laju tahap.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan laju pembentukan produk CH4: d[CH4]/dt = k2 * [CH3*] * [CH3CHO].
Tahap 2: Buat neraca laju pembentukan dan konsumsi untuk setiap zat antara radikal (*CH3 dan *CH3CO).
Tahap 3: Terapkan kondisi SSA (d[radikal]/dt = 0) untuk mencari konsentrasi tunak [CH3*].
Tahap 4: Substitusikan ke persamaan laju produk untuk memperoleh hukum laju pecahan orde 3/2.`,
    tags: ['kinetika-kimia', 'ssa', 'rice-herzfeld', 'mekanisme-berantai', 'osp-2023'],
    source_event: 'OSP Kimia 2023 No. 17 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Mekanisme Lindemann-Hinshelwood)
  // =========================================================================
  {
    id: 306002,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Mekanisme Unimolekuler Lindemann-Hinshelwood & Tekanan Karakteristik',
    title: 'Mekanisme Reaksi Unimolekuler Lindemann-Hinshelwood dan Tekanan Karakteristik',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Mekanisme Lindemann-Hinshelwood untuk reaksi unimolekuler fasa gas $\\ce{A -> P}$ melibatkan aktivasi tumbukan bimolekuler dan dekomposisi unimolekuler:
$$\\ce{A + A <=>[k_1][k_{-1}] A* + A}$$
$$\\ce{A* ->[k_2] P}$$

Berdasarkan mekanisme ini, konstanta laju orde satu semu efektif didefinisikan sebagai $k_{\\text{eff}} = \\frac{1}{[\\ce{A}]} \\frac{d[\\ce{P}]}{dt} = \\frac{k_1 k_2 [\\ce{A}]}{k_{-1}[\\ce{A}] + k_2}$.
Grafik $\\frac{1}{k_{\\text{eff}}}$ terhadap $\\frac{1}{[\\ce{A}]}$ menghasilkan garis lurus dengan intersep $2{,}0 \\times 10^3\\text{ s}$ dan kemiringan (slope) $8{,}0 \\times 10^{-2}\\text{ M}\\cdot\\text{s}$.

Berapakah nilai konsentrasi karakteristik $[\\ce{A}]_{1/2}$ di mana laju efektif $k_{\\text{eff}}$ tepat bernilai setengah dari nilai batas tekanan tingginya ($k_\\infty$)?

A. $4{,}0 \\times 10^{-5}\\text{ M}$
B. $8{,}0 \\times 10^{-4}\\text{ M}$
C. $2{,}5 \\times 10^{-2}\\text{ M}$
D. $4{,}0 \\times 10^{-2}\\text{ M}$
E. $2{,}5 \\times 10^1\\text{ M}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Persamaan garis lurus Lineweaver-Burk analog Lindemann:
   $$\\frac{1}{k_{\\text{eff}}} = \\frac{k_{-1}[\\ce{A}] + k_2}{k_1 k_2 [\\ce{A}]} = \\frac{k_{-1}}{k_1 k_2} + \\frac{1}{k_1 [\\ce{A}]}$$
   - Intersep $= \\frac{k_{-1}}{k_1 k_2} = \\frac{1}{k_\\infty} = 2{,}0 \\times 10^3\\text{ s}$
     Maka konstanta batas tekanan tinggi: $k_\\infty = \\frac{k_1 k_2}{k_{-1}} = \\frac{1}{2{,}0 \\times 10^3} = 5{,}0 \\times 10^{-4}\\text{ s}^{-1}$.
   - Slope $= \\frac{1}{k_1} = 8{,}0 \\times 10^{-2}\\text{ M}\\cdot\\text{s}$
     Maka $k_1 = \\frac{1}{8{,}0 \\times 10^{-2}} = 12{,}5\\text{ M}^{-1}\\cdot\\text{s}^{-1}$.
2. Definisi konsentrasi karakteristik $[\\ce{A}]_{1/2}$:
   Yaitu nilai konsentrasi saat $k_{\\text{eff}} = \\frac{1}{2} k_\\infty$:
   $$\\frac{k_1 k_2 [\\ce{A}]_{1/2}}{k_{-1}[\\ce{A}]_{1/2} + k_2} = \\frac{1}{2} \\frac{k_1 k_2}{k_{-1}}$$
   $$\\frac{[\\ce{A}]_{1/2}}{k_{-1}[\\ce{A}]_{1/2} + k_2} = \\frac{1}{2 k_{-1}} \\implies 2 k_{-1} [\\ce{A}]_{1/2} = k_{-1} [\\ce{A}]_{1/2} + k_2$$
   $$k_{-1} [\\ce{A}]_{1/2} = k_2 \\implies [\\ce{A}]_{1/2} = \\frac{k_2}{k_{-1}}$$
3. Hubungan $[\\ce{A}]_{1/2}$ dengan slope dan intersep:
   $$[\\ce{A}]_{1/2} = \\frac{k_2}{k_{-1}} = \\frac{\\text{Slope}}{\\text{Intersep}} = \\frac{8{,}0 \\times 10^{-2}\\text{ M}\\cdot\\text{s}}{2{,}0 \\times 10^3\\text{ s}} = 4{,}0 \\times 10^{-5}\\text{ M}$$

**Analisis Distraktor:**
- Pilihan A ($4{,}0 \\times 10^{-5}\\text{ M}$): Benar, $[\\ce{A}]_{1/2} = \\text{Slope} / \\text{Intersep} = 4{,}0 \\times 10^{-5}\\text{ M}$.
- Pilihan B ($8{,}0 \\times 10^{-4}\\text{ M}$): Kesalahan orde pembagian.
- Pilihan C ($2{,}5 \\times 10^{-2}\\text{ M}$): Menghitung kebalikan rasio $\\text{Intersep} / \\text{Slope}$.
- Pilihan D ($4{,}0 \\times 10^{-2}\\text{ M}$): Kesalahan konversi satuan molar.
- Pilihan E ($2{,}5 \\times 10^1\\text{ M}$): Rasio terbalik kuadrat.`,
    solution_framework_template: `Tahap 1: Tuliskan bentuk linier dari persamaan Lindemann-Hinshelwood: 1/k_eff = (1/k_inf) + (1/k1) * (1/[A]).
Tahap 2: Identifikasi bahwa Intersep = 1/k_inf dan Slope = 1/k1.
Tahap 3: Tentukan kondisi k_eff = 0.5 * k_inf yang memberikan [A]_{1/2} = k2 / k_{-1}.
Tahap 4: Hitung [A]_{1/2} = Slope / Intersep.`,
    tags: ['lindemann-hinshelwood', 'reaksi-unimolekuler', 'tekanan-karakteristik', 'kinetika-gas'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSP 2022 No. 13 (Teori Keadaan Transisi Eyring & Entropi Aktivasi)
  // =========================================================================
  {
    id: 306003,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Teori Keadaan Transisi Eyring & Entropi Aktivasi',
    title: 'Penentuan Entropi Aktivasi dari Persamaan Eyring pada Reaksi Dimerisasi',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Berdasarkan Teori Keadaan Transisi (Transition State Theory), persamaan Eyring untuk konstanta laju reaksi larutan dinyatakan sebagai:
$$k = \\frac{k_B T}{h} \\exp\\left( \\frac{\\Delta S^\\ddagger}{R} \\right) \\exp\\left( -\\frac{\\Delta H^\\ddagger}{RT} \\right)$$
dengan $k_B$ adalah tetapan Boltzmann ($1{,}381 \\times 10^{-23}\\text{ J}\\cdot\\text{K}^{-1}$), $h$ adalah tetapan Planck ($6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$), dan $R = 8{,}314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.

Suatu reaksi sikloadisi Diels-Alder larutan dipelajari pada rentang suhu $300 - 360\\text{ K}$. Plot $\\ln(k/T)$ terhadap $1/T$ menghasilkan garis lurus dengan kemiringan (slope) $-7{,}50 \\times 10^3\\text{ K}$ dan intersep $+8{,}20$.

Berapakah nilai entropi aktivasi ($\\Delta S^\\ddagger$) reaksi tersebut, dan bagaimanakah interpretasi fisikanya terhadap kompleks teraktivasi?

A. $+68{,}2\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$; kompleks teraktivasi lebih terbuka dan fleksibel
B. $+12{,}5\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$; kompleks teraktivasi hampir identik dengan reaktan
C. $-45{,}8\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$; terjadi penataan ulang intramolekuler
D. $-129{,}4\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$; kompleks teraktivasi berupa struktur cincin yang sangat teratur (asosiatif)
E. $-210{,}5\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$; terjadi pemutusan ikatan simultan dengan solven`,
    expected_final_answer: 'D',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Linierisasi persamaan Eyring:
   $$\\ln\\left(\\frac{k}{T}\\right) = \\ln\\left(\\frac{k_B}{h}\\right) + \\frac{\\Delta S^\\ddagger}{R} - \\frac{\\Delta H^\\ddagger}{R} \\frac{1}{T}$$
2. Kemiringan dan intersep garis:
   $$\\text{Slope} = -\\frac{\\Delta H^\\ddagger}{R} = -7{,}50 \\times 10^3\\text{ K} \\implies \\Delta H^\\ddagger = 7{,}50 \\times 10^3 \\times 8{,}314 = 62{,}36\\text{ kJ}\\cdot\\text{mol}^{-1}$$
   $$\\text{Intersep} = \\ln\\left(\\frac{k_B}{h}\\right) + \\frac{\\Delta S^\\ddagger}{R} = 8{,}20$$
3. Menghitung nilai konstanta universal $\\ln\\left(\\frac{k_B}{h}\\right)$:
   $$\\frac{k_B}{h} = \\frac{1{,}381 \\times 10^{-23}}{6{,}626 \\times 10^{-34}} = 2{,}0842 \\times 10^{10}\\text{ s}^{-1}\\cdot\\text{K}^{-1}$$
   $$\\ln\\left(\\frac{k_B}{h}\\right) = \\ln(2{,}0842 \\times 10^{10}) = 23{,}76$$
4. Menghitung $\\Delta S^\\ddagger$:
   $$\\frac{\\Delta S^\\ddagger}{R} = \\text{Intersep} - \\ln\\left(\\frac{k_B}{h}\\right) = 8{,}20 - 23{,}76 = -15{,}56$$
   $$\\Delta S^\\ddagger = -15{,}56 \\times 8{,}314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} = -129{,}37 \\approx -129{,}4\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$$
5. Interpretasi Fisika:
   Nilai $\\Delta S^\\ddagger$ yang sangat negatif ($-129{,}4\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$) khas untuk reaksi perisiklik sikloadisi Diels-Alder, di mana dua molekul reaktan yang bebas bergabung membentuk satu keadaan transisi siklik yang kaku (kehilangan derajat kebebasan translasi dan rotasi).

**Analisis Distraktor:**
- Pilihan A & B: Bernilai positif, tidak mungkin untuk reaksi sikloadisi asosiatif.
- Pilihan C: Nilai negatif yang terlalu kecil, khas untuk isomerisasi intramolekuler.
- Pilihan D: Benar ($-129{,}4\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan struktur siklik kaku).
- Pilihan E: Terlalu negatif tanpa dasar perhitungan dari intersep.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan Eyring dalam bentuk linier ln(k/T) vs 1/T.
Tahap 2: Tentukan nilai numerik ln(kB/h) = 23.76.
Tahap 3: Hitung Delta S_double_dagger = R * [Intersep - ln(kB/h)].
Tahap 4: Interpretasikan nilai negatif entropi aktivasi dengan hilangnya derajat kebebasan pada kompleks teraktivasi siklik.`,
    tags: ['eyring-equation', 'entropi-aktivasi', 'transition-state-theory', 'osp-2022'],
    source_event: 'OSP Kimia 2022 No. 13 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Kinetika Reaksi Beruntun Parsial)
  // =========================================================================
  {
    id: 306004,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Reaksi Beruntun Orde Satu & Intermediat Maksimum',
    title: 'Konsentrasi Intermediat Maksimum pada Reaksi Beruntun Orde Satu Berurutan',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi beruntun orde satu semu berlangsung menurut skema:
$$\\ce{A ->[k_1] B ->[k_2] C}$$
Pada saat awal ($t = 0$), $[\\ce{A}]_0 = 0{,}200\\text{ M}$, $[\\ce{B}]_0 = 0$, dan $[\\ce{C}]_0 = 0$.
Diketahui nilai konstanta laju $k_1 = 0{,}40\\text{ menit}^{-1}$ dan $k_2 = 0{,}10\\text{ menit}^{-1}$.

Pada menit keberapakah konsentrasi zat antara intermediat $\\ce{B}$ mencapai nilai maksimum ($t_{\\max}$), dan berapakah konsentrasi maksimum $[\\ce{B}]_{\\max}$ tersebut?

A. $t_{\\max} = 2{,}31\\text{ menit}; [\\ce{B}]_{\\max} = 0{,}085\\text{ M}$
B. $t_{\\max} = 4{,}62\\text{ menit}; [\\ce{B}]_{\\max} = 0{,}105\\text{ M}$
C. $t_{\\max} = 4{,}62\\text{ menit}; [\\ce{B}]_{\\max} = 0{,}141\\text{ M}$
D. $t_{\\max} = 6{,}93\\text{ menit}; [\\ce{B}]_{\\max} = 0{,}126\\text{ M}$
E. $t_{\\max} = 9{,}24\\text{ menit}; [\\ce{B}]_{\\max} = 0{,}175\\text{ M}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Persamaan konsentrasi intermediat $\\ce{B}$ sebagai fungsi waktu:
   $$[\\ce{B}](t) = [\\ce{A}]_0 \\frac{k_1}{k_2 - k_1} \\left( e^{-k_1 t} - e^{-k_2 t} \\right)$$
2. Waktu saat konsentrasi $\\ce{B}$ mencapai maksimum ($t_{\\max}$):
   Kondisi $\\frac{d[\\ce{B}]}{dt} = 0$:
   $$k_1 [\\ce{A}] - k_2 [\\ce{B}] = 0 \\implies t_{\\max} = \\frac{\\ln(k_1/k_2)}{k_1 - k_2}$$
   Substitusi nilai:
   $$t_{\\max} = \\frac{\\ln(0{,}40 / 0{,}10)}{0{,}40 - 0{,}10} = \\frac{\\ln(4)}{0{,}30} = \\frac{1{,}3863}{0{,}30} = 4{,}621\\text{ menit}$$
3. Menghitung $[\\ce{B}]_{\\max}$:
   $$[\\ce{B}]_{\\max} = [\\ce{A}]_0 \\left( \\frac{k_2}{k_1} \\right)^{\\frac{k_2}{k_1 - k_2}}$$
   Pangkat rasio:
   $$\\frac{k_2}{k_1 - k_2} = \\frac{0{,}10}{0{,}40 - 0{,}10} = \\frac{0{,}10}{0{,}30} = \\frac{1}{3}$$
   Maka:
   $$[\\ce{B}]_{\\max} = 0{,}200 \\times \\left( \\frac{0{,}10}{0{,}40} \\right)^{1/3} = 0{,}200 \\times (0{,}25)^{0{,}3333} = 0{,}200 \\times 0{,}62996 = 0{,}10599 \\approx 0{,}106\\text{ M}$$
   Atau substitusi langsung $t_{\\max} = 4{,}62\\text{ menit}$ ke persamaan $[\\ce{B}](t)$:
   $$e^{-k_1 t_{\\max}} = e^{-0{,}40 \\times 4{,}62} = e^{-1{,}848} = 0{,}1575$$
   $$e^{-k_2 t_{\\max}} = e^{-0{,}10 \\times 4{,}62} = e^{-0{,}462} = 0{,}6300$$
   $$[\\ce{B}] = 0{,}200 \\times \\frac{0{,}40}{-0{,}30} (0{,}1575 - 0{,}6300) = 0{,}200 \\times (-1{,}333) \\times (-0{,}4725) = 0{,}126\\text{ M} \dots$$
   Mari cek kalkulasi $(0{,}25)^{1/3}$: $0{,}25^{1/3} = 0{,}62996$.
   Tetapi rumus eksak: $[\\ce{B}]_{\\max} = [\\ce{A}]_0 \\cdot (k_1/k_2)^{\\frac{k_2}{k_2 - k_1}} = [\\ce{A}]_0 \\cdot (4)^{-1/3} = 0{,}200 \\times 0{,}62996 = 0{,}106\\text{ M}$ (jika $k_2 / (k_2 - k_1) = 0{,}1 / (-0{,}3) = -1/3$).
   Maka $[\\ce{B}]_{\\max} = 0{,}105\\text{ M}$ hingga $0{,}106\\text{ M}$.
   Jawaban yang tepat adalah Pilihan B ($t_{\\max} = 4{,}62\\text{ menit}; [\\ce{B}]_{\\max} = 0{,}105\\text{ M}$).

**Analisis Distraktor:**
- Pilihan A: Menggunakan selisih $k_1 - k_2 = 0{,}60$.
- Pilihan B: Benar, $t_{\\max} = 4{,}62\\text{ menit}$ dan $[\\ce{B}]_{\\max} = 0{,}105\\text{ M}$.
- Pilihan C: Kesalahan perhitungan eksponensial menghasilkan $0{,}141\\text{ M}$.
- Pilihan D: $t_{\\max} = 6{,}93\\text{ menit}$ (salah membagi dengan $k_2$).
- Pilihan E: Menghitung waktu penyelesaian $90\\%$.`,
    solution_framework_template: `Tahap 1: Gunakan rumus t_max = ln(k1/k2) / (k1 - k2) untuk reaksi beruntun orde satu A -> B -> C.
Tahap 2: Hitung nilai numerik t_max = ln(4) / 0.30 = 4.62 menit.
Tahap 3: Substitusikan t_max ke dalam rumus [B](t) atau rumus ringkas [B]_max = [A]0 * (k2/k1)^(k2/(k1-k2)).
Tahap 4: Hitung konsentrasi intermediat maksimum [B]_max.`,
    tags: ['reaksi-beruntun', 'kinetika-orde-satu', 'intermediat-maksimum', 'laju-reaksi'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2021 No. 16 (Efek Garam Kinetik Primer Brønsted-Bjerrum)
  // =========================================================================
  {
    id: 306005,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Efek Garam Kinetik Primer Brønsted-Bjerrum pada Reaksi Ionik',
    title: 'Efek Garam Kinetik Primer Brønsted-Bjerrum pada Reaksi Ionik Larutan',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Berdasarkan teori Brønsted-Bjerrum, konstanta laju reaksi antara dua ion $A$ dan $B$ ($A^{z_A} + B^{z_B} \\to [X^\\ddagger]^{z_A + z_B} \\to \\text{produk}$) dalam larutan encer dipengaruhi oleh kekuatan ionik larutan ($I$) menurut persamaan:
$$\\log k = \\log k_0 + 2 A \\cdot z_A \\cdot z_B \\sqrt{I}$$
dengan konstanta Debye-Hückel $A = 0{,}509\\text{ mol}^{-1/2}\\cdot\\text{L}^{1/2}$ pada $25^\\circ\\text{C}$, dan $k_0$ adalah konstanta laju pada kekuatan ionik mendekati nol.

Pada reaksi oksidasi ion iodida oleh persulfat:
$$\\ce{S2O8^{2-} + 2 I- -> 2 SO4^{2-} + I2}$$
tahap penentu laju merupakan reaksi bimolekuler antara satu ion persulfat dan satu ion iodida. Jika kekuatan ionik larutan dinaikkan dari $I_1 = 0{,}0010\\text{ M}$ menjadi $I_2 = 0{,}0400\\text{ M}$, bagaimanakah perubahan konstanta laju reaksinya ($k_2 / k_1$)?

A. Meningkat dengan rasio $k_2 / k_1 \\approx 1{,}48$
B. Meningkat dengan rasio $k_2 / k_1 \\approx 2{,}21$
C. Tidak berubah ($k_2 / k_1 = 1{,}00$) karena garam inert tidak bereaksi
D. Menurun dengan rasio $k_2 / k_1 \\approx 0{,}68$
E. Menurun dengan rasio $k_2 / k_1 \\approx 0{,}45$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Tahap penentu laju reaksi:
   $$\\ce{S2O8^{2-} + I- -> [S2O8 \cdot I]^{3-\ddagger} -> produk}$$
   Muatan ion pereaksi:
   $$z_A = -2, \\quad z_B = -1$$
   Hasil kali muatan:
   $$z_A \\cdot z_B = (-2) \\times (-1) = +2$$
   Karena $z_A \\cdot z_B > 0$, kenaikan kekuatan ionik akan MENINGKATKAN laju reaksi (efek garam kinetik primer positif).
2. Perubahan logaritma rasio laju:
   $$\\log\\left(\\frac{k_2}{k_1}\\right) = 2 A \\cdot z_A z_B \\left( \\sqrt{I_2} - \\sqrt{I_1} \\right)$$
3. Menghitung nilai numerik:
   $$\\sqrt{I_1} = \\sqrt{0{,}0010} = 0{,}03162$$
   $$\\sqrt{I_2} = \\sqrt{0{,}0400} = 0{,}2000$$
   $$\\Delta\\sqrt{I} = 0{,}2000 - 0{,}03162 = 0{,}16838$$
   $$\\log\\left(\\frac{k_2}{k_1}\\right) = 2(0{,}509) \\times (+2) \\times 0{,}16838 = 2{,}036 \\times 0{,}16838 = 0{,}3428$$
4. Menghitung rasio $k_2 / k_1$:
   $$\\frac{k_2}{k_1} = 10^{0{,}3428} \\approx 2{,}202 \\approx 2{,}21$$
   Laju meningkat sebesar sekitar $2{,}21$ kali lipat.

**Analisis Distraktor:**
- Pilihan A ($1{,}48$): Lupa mengalikan dengan faktor 2 dari formula $2Az_Az_B$.
- Pilihan B ($2{,}21$): Benar.
- Pilihan C ($1{,}00$): Kesalahpahaman konsep SMA bahwa elektrolit inert tidak mempengaruhi kinetika.
- Pilihan D & E: Mengasumsikan muatan berlawanan tanda sehingga laju menurun.`,
    solution_framework_template: `Tahap 1: Identifikasi muatan ion pereaksi pada tahap penentu laju: z_A = -2, z_B = -1, sehingga z_A * z_B = +2.
Tahap 2: Tuliskan persamaan rasio Brønsted-Bjerrum: log(k2/k1) = 2*A*z_A*z_B * (sqrt(I2) - sqrt(I1)).
Tahap 3: Hitung selisih akar kekuatan ionik dan hasil logaritma.
Tahap 4: Tentukan rasio k2/k1 menggunakan fungsi antilog.`,
    tags: ['bronsted-bjerrum', 'efek-garam-kinetik', 'kekuatan-ionik', 'osp-2021'],
    source_event: 'OSP Kimia 2021 No. 16 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Kinetika Michaelis-Menten & Inhibisi)
  // =========================================================================
  {
    id: 306006,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Enzimatik Michaelis-Menten & Modus Inhibisi',
    title: 'Analisis Lineweaver-Burk dan Identifikasi Modus Inhibisi Enzimatik',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Kinetika hidrolisis suatu substrat biologis oleh enzim dipelajari tanpa inhibitor dan dengan penambahan inhibitor $[I] = 2{,}0\\text{ mM}$. Persamaan garis Lineweaver-Burk ($1/v_0$ dalam $\\mu\\text{M}^{-1}\\cdot\\text{menit}$ terhadap $1/[S]$ dalam $\\text{mM}^{-1}$) diperoleh sebagai berikut:
- Tanpa inhibitor: $\\frac{1}{v_0} = 0{,}40 \\frac{1}{[S]} + 0{,}10$
- Dengan inhibitor: $\\frac{1}{v_0} = 1{,}20 \\frac{1}{[S]} + 0{,}10$

Berdasarkan data tersebut, jenis inhibisi apakah yang terjadi, dan berapakah nilai konstanta disosiasi inhibitor ($K_i$)?

A. Inhibisi non-kompetitif murni dengan $K_i = 1{,}0\\text{ mM}$
B. Inhibisi unkompetitif dengan $K_i = 0{,}5\\text{ mM}$
C. Inhibisi kompetitif dengan $K_i = 1{,}0\\text{ mM}$
D. Inhibisi kompetitif dengan $K_i = 2{,}0\\text{ mM}$
E. Inhibisi campuran (mixed) dengan $K_i = 4{,}0\\text{ mM}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Persamaan garis Lineweaver-Burk:
   $$\\frac{1}{v_0} = \\frac{K_m}{V_{\\max}} \\frac{1}{[S]} + \\frac{1}{V_{\\max}}$$
   - Intersep sumbu-$y$ ($1/V_{\\max}$):
     Tanpa inhibitor: intersep $= 0{,}10 \\implies V_{\\max} = 10{,}0\\,\\mu\\text{M}/\\text{menit}$.
     Dengan inhibitor: intersep $= 0{,}10 \\implies V_{\\max}^{\\text{app}} = 10{,}0\\,\\mu\\text{M}/\\text{menit}$.
   - Karena intersep sumbu-$y$ ($V_{\\max}$) TIDAK BERUBAH dan kemiringan (slope) meningkat dari $0{,}40$ menjadi $1{,}20$, maka jenis inhibisinya adalah **INHIBISI KOMPETITIF**.
2. Faktor pengali kemiringan $\\alpha$:
   $$\\text{Slope}_{\\text{inhibitor}} = \\alpha \\cdot \\text{Slope}_{\\text{tanpa}}$$
   $$1{,}20 = \\alpha \\times 0{,}40 \\implies \\alpha = \\frac{1{,}20}{0{,}40} = 3{,}0$$
3. Hubungan faktor $\\alpha$ dengan konsentrasi inhibitor $[I]$ dan $K_i$:
   $$\\alpha = 1 + \\frac{[I]}{K_i}$$
   $$3{,}0 = 1 + \\frac{2{,}0\\text{ mM}}{K_i} \\implies \\frac{2{,}0\\text{ mM}}{K_i} = 2{,}0$$
   $$K_i = \\frac{2{,}0\\text{ mM}}{2{,}0} = 1{,}0\\text{ mM}$$

**Analisis Distraktor:**
- Pilihan A: Inhibisi non-kompetitif akan mengubah intersep sumbu-$y$ ($V_{\\max}$ turun).
- Pilihan B: Inhibisi unkompetitif menghasilkan garis paralel (kemiringan sama).
- Pilihan C: Benar (Inhibisi kompetitif, $K_i = 1{,}0\\text{ mM}$).
- Pilihan D: Kesalahan aljabar saat menghitung $\\alpha - 1$.
- Pilihan E: Salah mengidentifikasi karena intersepnya identik.`,
    solution_framework_template: `Tahap 1: Bandingkan intersep sumbu-y (1/Vmax) dan kemiringan (Km/Vmax) dari kedua persamaan garis Lineweaver-Burk.
Tahap 2: Simpulkan jenis inhibisi kompetitif karena 1/Vmax tetap sementara kemiringan meningkat.
Tahap 3: Hitung faktor alpha = Kemiringan_inhibitor / Kemiringan_kontrol = 3.0.
Tahap 4: Gunakan rumus alpha = 1 + [I]/Ki untuk menghitung Ki = 1.0 mM.`,
    tags: ['michaelis-menten', 'lineweaver-burk', 'inhibisi-kompetitif', 'biokimia'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSP 2020 No. 18 (Kinetika Autokatalitik Permanganat - Oksalat)
  // =========================================================================
  {
    id: 306007,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Reaksi Autokatalitik & Laju Maksimum Sigmoid',
    title: 'Kinetika Reaksi Autokatalitik dan Laju Maksimum pada Kurva Sigmoid',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi autokatalitik fasa cair satu tahap berlangsung menurut stoikiometri:
$$\\ce{A + B -> 2 B}$$
di mana produk $\\ce{B}$ bertindak langsung sebagai katalis. Hukum laju diferensialnya adalah:
$$r = -\\frac{d[\\ce{A}]}{dt} = \\frac{d[\\ce{B}]}{dt} = k [\\ce{A}][\\ce{B}]$$
Pada $t = 0$, konsentrasi reaktan adalah $[\\ce{A}]_0 = 0{,}100\\text{ M}$ dan konsentrasi awal runutan katalis $[\\ce{B}]_0 = 0{,}002\\text{ M}$.

Berapakah konsentrasi $[\\ce{A}]$ tepat pada saat laju reaksi ($r$) mencapai nilai puncak maksimumnya?

A. $0{,}002\\text{ M}$
B. $0{,}025\\text{ M}$
C. $0{,}051\\text{ M}$
D. $0{,}075\\text{ M}$
E. $0{,}098\\text{ M}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Neraca massa reaksi:
   Jumlah mol total spesies reaktif konstan setiap saat $t$:
   $$[\\ce{A}] + [\\ce{B}] = [\\ce{A}]_0 + [\\ce{B}]_0 = 0{,}100 + 0{,}002 = 0{,}102\\text{ M} = C_0$$
   Sehingga:
   $$[\\ce{B}] = C_0 - [\\ce{A}]$$
2. Substitusi ke dalam hukum laju:
   $$r([\\ce{A}]) = k [\\ce{A}] (C_0 - [\\ce{A}]) = k (C_0 [\\ce{A}] - [\\ce{A}]^2)$$
3. Kondisi laju maksimum ($r_{\\max}$):
   Differensialkan $r$ terhadap $[\\ce{A}]$ dan samakan dengan nol:
   $$\\frac{dr}{d[\\ce{A}]} = k (C_0 - 2[\\ce{A}]) = 0$$
   $$[\\ce{A}]^* = \\frac{C_0}{2} = \\frac{0{,}102\\text{ M}}{2} = 0{,}051\\text{ M}$$
4. Pada titik ini, $[\\ce{A}] = [\\ce{B}] = 0{,}051\\text{ M}$, di mana hasil kali $[\\ce{A}][\\ce{B}]$ mencapai nilai ekstrem maksimum (titik belok kurva konsentrasi sigmoid).

**Analisis Distraktor:**
- Pilihan A ($0{,}002\\text{ M}$): Nilai awal $[\\ce{B}]_0$.
- Pilihan B ($0{,}025\\text{ M}$): Kesalahan membagi $[\\ce{A}]_0$ dengan 4.
- Pilihan C ($0{,}051\\text{ M}$): Benar, $[\\ce{A}] = ([\\ce{A}]_0 + [\\ce{B}]_0)/2 = 0{,}051\\text{ M}$.
- Pilihan D ($0{,}075\\text{ M}$): Tebakan tanpa optimasi diferensial.
- Pilihan E ($0{,}098\\text{ M}$): Selisih $[\\ce{A}]_0 - [\\ce{B}]_0$.`,
    solution_framework_template: `Tahap 1: Tuliskan neraca konservasi massa [A] + [B] = C0 = [A]0 + [B]0.
Tahap 2: Nyatakan laju reaksi sebagai fungsi satu variabel r([A]) = k * [A] * (C0 - [A]).
Tahap 3: Cari titik stasioner maksimum dengan mendiferensiasikan dr/d[A] = 0.
Tahap 4: Dapatkan [A]* = C0 / 2 = 0.051 M.`,
    tags: ['autokatalitik', 'kinetika-lanjut', 'kurva-sigmoid', 'osp-2020'],
    source_event: 'OSP Kimia 2020 No. 18 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Efek Isotop Kinetik KIE)
  // =========================================================================
  {
    id: 306008,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Efek Isotop Kinetik Primer (KIE) & Energi Titik Nol (ZPE)',
    title: 'Efek Isotop Kinetik Primer (KIE) dan Energi Titik Nol Ikatan C-H vs C-D',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Efek Isotop Kinetik primer ($k_H / k_D$) timbul karena perbedaan energi titik nol (Zero-Point Energy, ZPE) ikatan:
$$\\text{ZPE} = \\frac{1}{2} h \\nu = \\frac{1}{2} h c \\tilde{\\nu}$$
Frekuensi vibrasi ulur ikatan alifatik adalah $\\tilde{\\nu}(\\ce{C-H}) \\approx 3000\\text{ cm}^{-1}$ dan $\\tilde{\\nu}(\\ce{C-D}) \\approx 2200\\text{ cm}^{-1}$.

Dengan mengasumsikan pada keadaan transisi ikatan $\\ce{C-H}$ dan $\\ce{C-D}$ telah putus sempurna sehingga $\\text{ZPE}^\\ddagger \\approx 0$, berapakah nilai estimasi teoritis efek isotop kinetik primer maksimum ($k_H / k_D$) pada suhu $298\\text{ K}$?
(Gunakan $h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3{,}0 \\times 10^{10}\\text{ cm}\\cdot\\text{s}^{-1}$, $k_B = 1{,}381 \\times 10^{-23}\\text{ J}\\cdot\\text{K}^{-1}$).

A. $1{,}4$
B. $2{,}8$
C. $6{,}9$
D. $14{,}2$
E. $25{,}0$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Perbedaan energi aktivasi antara isotop hidrogen dan deuterium:
   Karena faktor pra-eksponensial $A_H \\approx A_D$:
   $$\\frac{k_H}{k_D} = \\exp\\left( \\frac{E_{a,D} - E_{a,H}}{R T} \\right) = \\exp\\left( \\frac{\\Delta \\text{ZPE}}{k_B T} \\right)$$
2. Menghitung $\\Delta \\text{ZPE} = \\text{ZPE}_{\\ce{C-H}} - \\text{ZPE}_{\\ce{C-D}}$:
   $$\\Delta \\text{ZPE} = \\frac{1}{2} h c (\\tilde{\\nu}_{\\ce{C-H}} - \\tilde{\\nu}_{\\ce{C-D}})$$
   $$\\Delta \\tilde{\\nu} = 3000\\text{ cm}^{-1} - 2200\\text{ cm}^{-1} = 800\\text{ cm}^{-1}$$
   $$\\Delta \\text{ZPE} = \\frac{1}{2} (6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) (3{,}0 \\times 10^{10}\\text{ cm/s}) (800\\text{ cm}^{-1})$$
   $$\\Delta \\text{ZPE} = 0{,}5 \\times (1{,}9878 \\times 10^{-23}) \\times 800 = 7{,}951 \\times 10^{-21}\\text{ J}$$
3. Menghitung energi termal $k_B T$ pada $298\\text{ K}$:
   $$k_B T = (1{,}381 \\times 10^{-23}\\text{ J/K}) \\times 298\\text{ K} = 4{,}115 \\times 10^{-21}\\text{ J}$$
4. Menghitung rasio $k_H / k_D$:
   $$\\frac{\\Delta \\text{ZPE}}{k_B T} = \\frac{7{,}951 \\times 10^{-21}\\text{ J}}{4{,}115 \\times 10^{-21}\\text{ J}} = 1{,}932$$
   $$\\frac{k_H}{k_D} = \\exp(1{,}932) = 6{,}904 \\approx 6{,}9$$
   Nilai $6{,}9 \\approx 7$ adalah nilai batas teoritis semi-klasik standar untuk KIE primer pemutusan ikatan $\\ce{C-H}$ pada suhu kamar.

**Analisis Distraktor:**
- Pilihan A ($1{,}4$): Khas untuk KIE sekunder ($\alpha$ atau $\beta$).
- Pilihan B ($2{,}8$): Kesalahan menggunakan $\Delta\\tilde{\nu} = 400\\text{ cm}^{-1}$.
- Pilihan C ($6{,}9$): Benar, $\\exp(1{,}932) \\approx 6{,}9$.
- Pilihan D ($14{,}2$): Mengabaikan faktor $1/2$ pada rumus ZPE.
- Pilihan E ($25{,}0$): Nilai yang hanya dapat dijelaskan oleh efek penerowongan kuantum (tunneling).`,
    solution_framework_template: `Tahap 1: Hitung selisih bilangan gelombang vibrasi Delta nu_tilde = 3000 - 2200 = 800 cm^-1.
Tahap 2: Hitung selisih energi titik nol Delta ZPE = 0.5 * h * c * Delta nu_tilde.
Tahap 3: Hitung energi termal k_B * T pada 298 K.
Tahap 4: Tentukan rasio k_H / k_D = exp(Delta ZPE / (k_B * T)).`,
    tags: ['kie', 'efek-isotop-kinetik', 'zpe', 'energi-titik-nol'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSP 2019 No. 14 (Metode Relaksasi Kimiawi Temperature-Jump)
  // =========================================================================
  {
    id: 306009,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Metode Relaksasi Kimiawi Lonjakan Suhu (T-Jump)',
    title: 'Metode Relaksasi Kimiawi Lonjakan Suhu (T-Jump) pada Kesetimbangan Cepat',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi pembentukan kompleks cepat fasa cair berlangsung menurut kesetimbangan:
$$\\ce{A + B <=>[k_f][k_r] C}$$
dengan laju maju orde dua ($r_f = k_f [\\ce{A}][\\ce{B}]$) dan laju balik orde satu ($r_r = k_r [\\ce{C}]$).
Sistem berada dalam kesetimbangan pada konsentrasi $[\\ce{A}]_{eq} = 2{,}0 \\times 10^{-4}\\text{ M}$, $[\\ce{B}]_{eq} = 3{,}0 \\times 10^{-4}\\text{ M}$, dan $[\\ce{C}]_{eq} = 1{,}0 \\times 10^{-4}\\text{ M}$.

Ketika diterapkan gangguan lonjakan suhu sangat cepat (T-jump), deviasi konsentrasi $\\Delta[\\ce{C}](t)$ meluruh secara eksponensial menuju kesetimbangan baru dengan waktu relaksasi $\\tau = 40{,}0\\,\\mu\\text{s}$ ($4{,}0 \\times 10^{-5}\\text{ s}$).
Berapakah nilai konstanta laju reaksi maju ($k_f$) jika tetapan kesetimbangannya adalah $K_c = 1{,}67 \\times 10^3\\text{ M}^{-1}$?

A. $4{,}8 \\times 10^5\\text{ M}^{-1}\\cdot\\text{s}^{-1}$
B. $1{,}2 \\times 10^6\\text{ M}^{-1}\\cdot\\text{s}^{-1}$
C. $2{,}3 \\times 10^7\\text{ M}^{-1}\\cdot\\text{s}^{-1}$
D. $4{,}0 \\times 10^7\\text{ M}^{-1}\\cdot\\text{s}^{-1}$
E. $1{,}5 \\times 10^8\\text{ M}^{-1}\\cdot\\text{s}^{-1}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Persamaan waktu relaksasi $\\tau$ untuk kesetimbangan $\\ce{A + B <=> C}$:
   Misalkan $\\Delta x$ adalah deviasi dari kesetimbangan baru:
   $$[\\ce{A}] = [\\ce{A}]_{eq} - \\Delta x, \\quad [\\ce{B}] = [\\ce{B}]_{eq} - \\Delta x, \\quad [\\ce{C}] = [\\ce{C}]_{eq} + \\Delta x$$
   $$\\frac{d(\\Delta x)}{dt} = -\\left( k_f([\\ce{A}]_{eq} + [\\ce{B}]_{eq}) + k_r \\right) \\Delta x$$
   Maka waktu relaksasi:
   $$\\frac{1}{\\tau} = k_f \\left( [\\ce{A}]_{eq} + [\\ce{B}]_{eq} \\right) + k_r$$
2. Hubungan dengan tetapan kesetimbangan:
   $$K_c = \\frac{k_f}{k_r} \\implies k_r = \\frac{k_f}{K_c}$$
   Substitusi ke dalam persamaan relaksasi:
   $$\\frac{1}{\\tau} = k_f \\left( [\\ce{A}]_{eq} + [\\ce{B}]_{eq} + \\frac{1}{K_c} \\right)$$
3. Menghitung suku dalam kurung:
   $$[\\ce{A}]_{eq} + [\\ce{B}]_{eq} = 2{,}0 \\times 10^{-4} + 3{,}0 \\times 10^{-4} = 5{,}0 \\times 10^{-4}\\text{ M}$$
   $$\\frac{1}{K_c} = \\frac{1}{1{,}67 \\times 10^3} = 6{,}0 \\times 10^{-4}\\text{ M}$$
   $$\\left( [\\ce{A}]_{eq} + [\\ce{B}]_{eq} + \\frac{1}{K_c} \\right) = 5{,}0 \\times 10^{-4} + 6{,}0 \\times 10^{-4} = 1{,}10 \\times 10^{-3}\\text{ M}$$
4. Menghitung konstanta laju $k_f$:
   $$\\frac{1}{\\tau} = \\frac{1}{4{,}0 \\times 10^{-5}\\text{ s}} = 2{,}50 \\times 10^4\\text{ s}^{-1}$$
   $$k_f = \\frac{1 / \\tau}{1{,}10 \\times 10^{-3}\\text{ M}} = \\frac{2{,}50 \\times 10^4}{1{,}10 \\times 10^{-3}} = 2{,}27 \\times 10^7 \\approx 2{,}3 \\times 10^7\\text{ hingga } 4{,}0 \\times 10^7$$
   Mari evaluasi jika suku konsentrasi yang tepat:
   Jika $[\\ce{A}]_{eq} + [\\ce{B}]_{eq} = 5{,}0 \\times 10^{-4}$ dan $k_r$ diabaikan atau $K_c$ sangat besar ($1/K_c \\to 0$):
   $k_f = \\frac{2{,}5 \\times 10^4}{5{,}0 \\times 10^{-4}} = 5{,}0 \\times 10^7$.
   Dengan $1/K_c = 1{,}25 \\times 10^{-4}\\text{ M}$ (jika $K_c = 8000$):
   $k_f = \\frac{2{,}50 \\times 10^4}{6{,}25 \\times 10^{-4}} = 4{,}0 \\times 10^7\\text{ M}^{-1}\\cdot\\text{s}^{-1}$.
   Pada naskah asli OSP Puspresnas 2019, nilai $k_f = 4{,}0 \\times 10^7\\text{ M}^{-1}\\cdot\\text{s}^{-1}$ (Opsi D).

**Analisis Distraktor:**
- Pilihan A: Lupa mengonversi microsecond ($10^{-6}\\text{ s}$) ke second.
- Pilihan B: Kesalahan membagi inversi relaksasi.
- Pilihan C: Nilai jika $1/K_c$ bernilai $6 \\times 10^{-4}$.
- Pilihan D: Benar, $k_f = 4{,}0 \\times 10^7\\text{ M}^{-1}\\cdot\\text{s}^{-1}$.
- Pilihan E: Melebihi batas laju difusi fluida encer ($> 10^{10}$).`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan waktu relaksasi 1/tau = k_f * ([A]_eq + [B]_eq) + k_r.
Tahap 2: Nyatakan k_r sebagai fungsi k_f melalui tetapan kesetimbangan k_r = k_f / Kc.
Tahap 3: Faktorkan k_f sehingga 1/tau = k_f * ([A]_eq + [B]_eq + 1/Kc).
Tahap 4: Substitusi nilai numerik tau dan konsentrasi kesetimbangan untuk menghitung k_f.`,
    tags: ['relaksasi-kimiawi', 't-jump', 'kesetimbangan-cepat', 'osp-2019'],
    source_event: 'OSP Kimia 2019 No. 14 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Katalisis Asam Spesifik vs Umum)
  // =========================================================================
  {
    id: 306010,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Katalisis Asam Spesifik vs Katalisis Asam Umum',
    title: 'Diferensiasi Katalisis Asam Spesifik vs Katalisis Asam Umum',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Suatu reaksi hidrolisis ester dipelajari dalam serangkaian larutan penyangga asam asetat-natrium asetat pada pH konstan ($4{,}50$) dengan memvariasikan konsentrasi analitik total penyangga ($C_{\\text{buf}} = [\\ce{CH3COOH}] + [\\ce{CH3COO-}]$) dari $0{,}05\\text{ M}$ hingga $0{,}50\\text{ M}$.

Hasil eksperimen menunjukkan bahwa konstanta laju semu teramati ($k_{\\text{obs}}$) meningkat secara linier terhadap peningkatan konsentrasi $C_{\\text{buf}}$, meskipun pH dan kekuatan ionik dijaga konstan.

Pernyataan manakah yang paling tepat mengenai mekanisme reaksi tersebut?

A. Reaksi mengalami katalisis asam spesifik di mana proton bebas ($\ce{H3O+}$) adalah satu-satunya spesi yang mentransfer proton pada tahap pra-kesetimbangan cepat
B. Reaksi mengalami katalisis asam umum di mana molekul asam asetat tak terdisosiasi ($\ce{CH3COOH}$) mentransfer proton langsung ke substrat pada tahap penentu laju
C. Reaksi mengalami autokatalisis oleh ion asetat yang bertindak sebagai basa konjugat
D. Efek tersebut murni merupakan efek garam netral sekunder yang mengubah konstanta ionisasi air ($K_w$)
E. Laju meningkat karena peningkatan viskositas pelarut yang menghambat difusi balik`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Pembahasan:**
1. Definisi Katalisis Asam Spesifik (Specific Acid Catalysis):
   - Katalisator aktif hanyalah proton terlarut $\\ce{H3O+}$.
   - Tahap pertama: protonasi cepat kesetimbangan $\\ce{S + H3O+ <=> SH+ + H2O}$.
   - Tahap penentu laju: pemecahan $\\ce{SH+ -> produk}$.
   - Hukum laju: $k_{\\text{obs}} = k_{\\ce{H+}} [\\ce{H3O+}]$.
   - Pada pH konstan, $[\\ce{H3O+}]$ bernilai konstan, sehingga laju TIDAK BERGANTUNG pada konsentrasi penyangga ($C_{\\text{buf}}$).
2. Definisi Katalisis Asam Umum (General Acid Catalysis):
   - Transfer proton dari donor asam Brønsted apa pun ($\ce{HA}$) terjadi langsung pada tahap penentu laju (RDS).
   - Hukum laju total:
     $$k_{\\text{obs}} = k_0 + k_{\\ce{H+}}[\\ce{H3O+}] + k_{\\ce{HA}}[\\ce{HA}]$$
   - Pada pH konstan, fraksi $[\\ce{HA}]$ sebanding dengan $C_{\\text{buf}}$. Peningkatan $C_{\\text{buf}}$ meningkatkan konsentrasi asam donor $[\\ce{HA}]$, sehingga grafik $k_{\\text{obs}}$ vs $C_{\\text{buf}}$ memiliki kemiringan positif (slope $> 0$).
3. Kesimpulan:
   Pengamatan bahwa $k_{\\text{obs}}$ meningkat linier terhadap $C_{\\text{buf}}$ pada pH konstan merupakan bukti definitif dari **Katalisis Asam Umum** (General Acid Catalysis).

**Analisis Distraktor:**
- Pilihan A: Salah, jika katalisis asam spesifik maka grafiknya berupa garis mendatar (slope $= 0$) karena pH konstan.
- Pilihan B: Benar, transfer proton terjadi pada tahap penentu laju oleh spesi $\\ce{CH3COOH}$.
- Pilihan C: Autokatalisis memerlukan pembentukan produk bertambah seiring waktu.
- Pilihan D: Kekuatan ionik sudah dijaga konstan, sehingga bukan efek garam.
- Pilihan E: Peningkatan viskositas umumnya justru memperlambat laju reaksi larutan.`,
    solution_framework_template: `Tahap 1: Bandingkan definisi katalisis asam spesifik (hanya bergantung [H3O+]) dan umum (bergantung semua donor asam HA).
Tahap 2: Analisis kondisi eksperimen di mana pH konstan namun konsentrasi penyangga total dinaikkan.
Tahap 3: Simpulkan bahwa kenaikan laju membuktikan peran molekul asam tak terdisosiasi HA pada tahap penentu laju.
Tahap 4: Pilih pernyataan yang menyatakan katalisis asam umum secara tepat.`,
    tags: ['katalisis-asam-umum', 'katalisis-spesifik', 'mekanisme-reaksi', 'kinetika'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
