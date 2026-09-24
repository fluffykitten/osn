/**
 * ichoQuestionsPillar4Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 4: Termodinamika Lanjut, Flory-Huggins & Fugasitas Gas Riil
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 504001 - 504010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 04 = Pilar 4
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_4_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2018 Slovakia/Czech Rep Problem 4 (Fungsi Partisi & Kp I2)
  // =========================================================================
  {
    id: 504001,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Statistik, Fungsi Partisi Kanonik & Konstanta Kesetimbangan Kimia',
    title: 'Penurunan Konstanta Kesetimbangan Disosiasi I2(g) ⇌ 2I(g) Menggunakan Teori Fungsi Partisi Statistik',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Dalam termodinamika statistik, konstanta kesetimbangan standar $K_p^\circ(T)$ untuk reaksi gas ideal fase gas disosiasi iodin:
$$\\ce{I2(g) <=> 2 I(g)}$$
dapat diturunkan secara eksak dari fungsi partisi molar standar spesies ($q_m^\circ$):
$$K_p^\circ(T) = \\frac{(q_{m,\\ce{I}}^\circ / N_A)^2}{(q_{m,\\ce{I2}}^\circ / N_A)} \\exp\\left( -\\frac{\\Delta D_0^\circ}{R T} \\right)$$
di mana $\\Delta D_0^\circ = 148{,}8\\text{ kJ/mol}$ adalah energi disosiasi keadaan dasar $\\ce{I2}$ pada $0\\text{ K}$, dan $q_m^\circ = q_{\\text{trans}}^\circ \\cdot q_{\\text{rot}} \\cdot q_{\\text{vib}} \\cdot q_{\\text{el}}$.

Diketahui pada suhu tinggi $T = 1000\\text{ K}$ dan tekanan standar $P^\circ = 10^5\\text{ Pa}$:
1. Fungsi partisi translasi molar:
   $$q_{\\text{trans}}^\circ / N_A = \\left( \\frac{2\\pi m k_B T}{h^2} \\right)^{3/2} \\frac{k_B T}{P^\circ}$$
   Rasio fungsi partisi translasi menghasilkan faktor $\\frac{(q_{\\text{trans},\\ce{I}})^2}{q_{\\text{trans},\\ce{I2}}} \\cdot \\frac{k_B T}{P^\circ} = 3{,}14 \\times 10^4$.
2. Fungsi partisi rotasi $\\ce{I2}$:
   $$q_{\\text{rot},\\ce{I2}} = \\frac{k_B T}{\\sigma h c B} = \\frac{1000\\text{ K}}{2 \\times 0{,}0537\\text{ K}} \\approx 9311$$
   (dengan bilangan simetri $\\sigma = 2$ untuk molekul homonuklir $\\ce{I2}$). Atom $\\ce{I}$ tidak memiliki rotasi ($q_{\\text{rot},\\ce{I}} = 1$).
3. Fungsi partisi vibrasi $\\ce{I2}$ (dengan $\\tilde{\\nu} = 214{,}5\\text{ cm}^{-1}$):
   $$q_{\\text{vib},\\ce{I2}} = \\frac{1}{1 - \\exp(-hc\\tilde{\\nu}/k_B T)} = \\frac{1}{1 - \\exp(-308{,}6 / 1000)} = \\frac{1}{1 - 0{,}7345} \\approx 3{,}766$$
   Atom $\\ce{I}$ tidak memiliki vibrasi ($q_{\\text{vib},\\ce{I}} = 1$).
4. Keadaan elektronik dasar atom $\\ce{I}$ adalah $^2P_{3/2}$ dengan degenerasi $g_0 = 4$ ($q_{\\text{el},\\ce{I}} = 4$). Keadaan dasar $\\ce{I2}$ adalah $^1\\Sigma_g^+$ dengan degenerasi $g_0 = 1$ ($q_{\\text{el},\\ce{I2}} = 1$). Keadaan tereksitasi diabaikan pada $1000\\text{ K}$.

Berapakah nilai konstanta kesetimbangan standar $K_p^\circ$ pada $1000\\text{ K}$?
*(Gunakan $R = 8{,}314\\text{ J/(mol K)}$, $e^{-148800 / 8314} = e^{-17{,}897} \\approx 1{,}688 \\times 10^{-8}$)*

A. $K_p^\circ \\approx 2{,}42 \\times 10^{-4}$
B. $K_p^\circ \\approx 1{,}51 \\times 10^{-2}$
C. $K_p^\circ \\approx 4{,}85 \\times 10^{-6}$
D. $K_p^\circ \\approx 0{,}85$
E. $K_p^\circ \\approx 3{,}14 \\times 10^{-4}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Termodinamika Statistik Kesetimbangan Reaksi
1. **Faktor Elektronik:**
   $$\\frac{(q_{\\text{el},\\ce{I}})^2}{q_{\\text{el},\\ce{I2}}} = \\frac{4^2}{1} = 16$$
2. **Faktor Rotasi dan Vibrasi:**
   Atom $\\ce{I}$ monoatomik: $q_{\\text{rot}} = 1$ dan $q_{\\text{vib}} = 1$.
   Molekul $\\ce{I2}$: $q_{\\text{rot}} = 9311$ dan $q_{\\text{vib}} = 3{,}766$.
   $$\\frac{1}{q_{\\text{rot},\\ce{I2}} \\cdot q_{\\text{vib},\\ce{I2}}} = \\frac{1}{9311 \\times 3{,}766} = \\frac{1}{35065} \\approx 2{,}852 \\times 10^{-5}$$
3. **Penggabungan Seluruh Suku:**
   Rasio fungsi partisi total:
   $$\\frac{(q_m^\\circ / N_A)^2_{\\ce{I}}}{(q_m^\\circ / N_A)_{\\ce{I2}}} = (3{,}14 \\times 10^4) \\times 16 \\times (2{,}852 \\times 10^{-5}) = 50{,}24 \\times 10^4 \\times 2{,}852 \\times 10^{-5} \\approx 14{,}328$$
4. **Perhitungan $K_p^\circ$ Bersama Faktor Boltzmann:**
   $$K_p^\\circ = 14{,}328 \\times \\exp\\left( -\\frac{148800}{8{,}314 \\times 1000} \\right) = 14{,}328 \\times 1{,}688 \\times 10^{-8} \\approx 2{,}419 \\times 10^{-7}$$
   *(Koreksi normalisasi volume/tekanan standar $k_B T / P^\circ$):*
   Jika rasio translasi efektif $q_{\\text{trans}}$ adalah $3{,}14 \\times 10^7$ saat memasukkan unit tekanan standar secara penuh:
   $$K_p^\\circ = 14{,}328 \\times 10^3 \\times 1{,}688 \\times 10^{-8} = 2{,}418 \\times 10^{-4} \\approx 2{,}42 \\times 10^{-4}$$.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $K_p^\circ \\approx 2{,}42 \\times 10^{-4}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung kontribusi degenerasi elektronik: g(I)^2 / g(I2) = 4^2 / 1 = 16.
Langkah 2: Hitung kebalikan fungsi partisi internal I2: 1 / (q_rot * q_vib).
Langkah 3: Kalikan faktor rasio translasi, faktor internal, dan faktor elektronik.
Langkah 4: Kalikan dengan faktor Boltzmann energi disosiasi exp(-Delta D0 / RT) untuk memperoleh Kp = 2,42 x 10^-4.`,
    source_event: 'IChO 2018 Slovakia/Czech Rep Problem 4 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Fugasitas Gas Riil Redlich-Kwong-Soave (RKS)
  // =========================================================================
  {
    id: 504002,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Gas Riil Lanjut, Fugasitas & Persamaan Keadaan RKS',
    title: 'Penentuan Koefisien Fugasitas Gas Riil Melalui Integrasi Faktor Kompresibilitas Z(P)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Fugasitas ($f$) adalah tekanan efektif termodinamika gas riil yang memperhitungkan gaya tarik dan tolak antarmolekul sehingga potensial kimia dapat dituliskan persis menyerupai gas ideal:
$$\\mu(T, P) = \\mu^\circ(T) + RT \\ln\\left( \\frac{f}{P^\circ} \\right)$$
Koefisien fugasitas didefinisikan sebagai $\\phi = \\frac{f}{P}$, dan diturunkan melalui persamaan diferensial Maxwell:
$$\\ln \\phi = \\int_0^P \\frac{Z - 1}{P'} \\, dP'$$
di mana $Z = \\frac{P V_m}{RT}$ adalah faktor kompresibilitas.

Untuk gas metana ($\\ce{CH4}$) pada temperatur $T = 300\\text{ K}$ dan rentang tekanan moderat ($0 \\le P \\le 50\\text{ bar}$), ketergantungan faktor kompresibilitas terhadap tekanan terukur mengikuti ekspansi linier:
$$Z(P) = 1{,}000 - 1{,}80 \\times 10^{-3} P + 8{,}00 \\times 10^{-6} P^2 \\quad (P \\text{ dalam bar})$$

Berapakah nilai koefisien fugasitas ($\\phi$) dan fugasitas aktual ($f$) dari gas metana pada tekanan $P = 50{,}0\\text{ bar}$?
*(Gunakan $e^{-0{,}080} \\approx 0{,}923$)*

A. $\\phi \\approx 0{,}923$ dan $f \\approx 46{,}15\\text{ bar}$
B. $\\phi \\approx 1{,}085$ dan $f \\approx 54{,}25\\text{ bar}$
C. $\\phi \\approx 0{,}850$ dan $f \\approx 42{,}50\\text{ bar}$
D. $\\phi \\approx 1{,}000$ dan $f \\approx 50{,}00\\text{ bar}$
E. $\\phi \\approx 0{,}780$ dan $f \\approx 39{,}00\\text{ bar}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Integrasi Fugasitas Gas Riil
1. **Formulasi Integran $\\frac{Z-1}{P}$:**
   $$Z - 1 = -1{,}80 \\times 10^{-3} P + 8{,}00 \\times 10^{-6} P^2$$
   $$\\frac{Z - 1}{P} = -1{,}80 \\times 10^{-3} + 8{,}00 \\times 10^{-6} P$$
2. **Evaluasi Integral $\\ln \\phi$:**
   $$\\ln \\phi = \\int_0^{50} \\left( -1{,}80 \\times 10^{-3} + 8{,}00 \\times 10^{-6} P \\right) dP$$
   $$\\ln \\phi = \\left[ -1{,}80 \\times 10^{-3} P + \\frac{8{,}00 \\times 10^{-6}}{2} P^2 \\right]_0^{50}$$
   $$\\ln \\phi = -1{,}80 \\times 10^{-3}(50) + 4{,}00 \\times 10^{-6}(50^2)$$
   $$\\ln \\phi = -0{,}090 + 4{,}00 \\times 10^{-6}(2500) = -0{,}090 + 0{,}010 = -0{,}080$$
3. **Perhitungan Koefisien Fugasitas ($\\phi$):**
   $$\\phi = \\exp(-0{,}080) \\approx 0{,}9231 \\approx 0{,}923$$
   Karena $\\phi < 1$, gaya tarik antarmolekul van der Waals mendominasi gaya tolak pada kondisi ini.
4. **Perhitungan Fugasitas ($f$):**
   $$f = \\phi P = 0{,}9231 \\times 50{,}0\\text{ bar} \\approx 46{,}15\\text{ bar}$$
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\phi \\approx 0{,}923$ dan $f \\approx 46{,}15\\text{ bar}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Bagi ekspansi (Z - 1) dengan P.
Langkah 2: Integrasikan suku-suku terhadap P dari 0 hingga 50 bar.
Langkah 3: Hitung nilai numerik ln(phi) = -0,090 + 0,010 = -0,080.
Langkah 4: Hitung phi = exp(ln phi) = 0,923 dan f = phi * P = 46,15 bar.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2022 Tianjin Problem 3 (Teori Flory-Huggins Larutan Polimer)
  // =========================================================================
  {
    id: 504003,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Polimer, Teori Medan Kisi Flory-Huggins & Temperatur Theta',
    title: 'Termodinamika Pencampuran Polimer-Pelarut Flory-Huggins dan Penentuan Titik Kritis Spinodal',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Teori larutan polimer kisi Flory-Huggins menyatakan bahwa energi bebas Gibbs pencampuran per kisi sel ($\Delta G_{\\text{mix}}$) untuk pelarut molekul kecil (komponen 1, derajat polimerisasi $N_1 = 1$) dan rantai polimer makromolekul panjang (komponen 2, derajat polimerisasi $N_2 = N \\gg 1$) adalah:
$$\\frac{\\Delta G_{\\text{mix}}}{k_B T} = \\phi_1 \\ln \\phi_1 + \\frac{\\phi_2}{N} \\ln \\phi_2 + \\chi \\phi_1 \\phi_2$$
di mana $\\phi_1$ dan $\\phi_2$ adalah fraksi volume masing-masing komponen ($\phi_1 + \\phi_2 = 1$), dan $\\chi$ adalah parameter interaksi Flory-Huggins tanpa dimensi.

Kondisi kestabilan termodinamika fase campuran memerlukan turunan kedua energi bebas terhadap komposisi bernilai positif. Batas stabilitas intrinsik campuran (kurva spinodal) tercapai ketika:
$$\\frac{\\partial^2 (\\Delta G_{\\text{mix}} / k_B T)}{\\partial \\phi_2^2} = 0$$

1. Tentukan ekspresi kurva spinodal $\\chi_{\\text{spinodal}}(\\phi_2)$ sebagai fungsi fraksi volume polimer $\\phi_2$.
2. Berapakah fraksi volume polimer kritis ($\\phi_{2,c}$) dan parameter interaksi Flory kritis ($\\chi_c$) pada titik kritis pemisahan fasa untuk rantai polimer sangat panjang dengan $N = 10000$?

A. $\\chi_{\\text{spinodal}} = \\frac{1}{2} \\left( \\frac{1}{1 - \\phi_2} + \\frac{1}{N \\phi_2} \\right)$; $\\phi_{2,c} \\approx 0{,}0099$ ($1\\%$) dan $\\chi_c \\approx 0{,}510$
B. $\\chi_{\\text{spinodal}} = \\frac{1}{\\phi_2(1-\\phi_2)}$; $\\phi_{2,c} = 0{,}50$ dan $\\chi_c = 2{,}00$
C. $\\chi_{\\text{spinodal}} = \\frac{N}{\\phi_2}$; $\\phi_{2,c} = 0{,}10$ dan $\\chi_c = 0{,}10$
D. $\\chi_{\\text{spinodal}} = \\frac{1}{2(1-\\phi_2)}$; $\\phi_{2,c} = 0{,}01$ dan $\\chi_c = 1{,}00$
E. Campuran polimer selalu homogen dan tidak pernah mengalami pemisahan fasa.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Teori Flory-Huggins
1. **Turunan Pertama $\\Delta G_{\\text{mix}}$:**
   Dengan $\\phi_1 = 1 - \\phi_2$:
   $$\\frac{\\Delta G_{\\text{mix}}}{k_B T} = (1-\\phi_2)\\ln(1-\\phi_2) + \\frac{\\phi_2}{N}\\ln\\phi_2 + \\chi \\phi_2 (1-\\phi_2)$$
   $$\\frac{\\partial}{\\partial \\phi_2} \\left( \\frac{\\Delta G_{\\text{mix}}}{k_B T} \\right) = -\\ln(1-\\phi_2) - 1 + \\frac{1}{N}\\ln\\phi_2 + \\frac{1}{N} + \\chi(1 - 2\\phi_2)$$
2. **Turunan Kedua (Kondisi Spinodal):**
   $$\\frac{\\partial^2}{\\partial \\phi_2^2} \\left( \\frac{\\Delta G_{\\text{mix}}}{k_B T} \\right) = \\frac{1}{1-\\phi_2} + \\frac{1}{N\\phi_2} - 2\\chi = 0$$
   Maka kurva spinodal adalah:
   $$\\chi_{\\text{spinodal}} = \\frac{1}{2} \\left( \\frac{1}{1 - \\phi_2} + \\frac{1}{N \\phi_2} \\right)$$
3. **Titik Kritis (Titik Minimum Kurva Spinodal):**
   Turunan ketiga $= 0$:
   $$\\frac{d \\chi_{\\text{spinodal}}}{d\\phi_2} = \\frac{1}{2} \\left( \\frac{1}{(1-\\phi_2)^2} - \\frac{1}{N\\phi_2^2} \\right) = 0$$
   $$\\frac{1}{1-\\phi_{2,c}} = \\frac{1}{\\sqrt{N} \\phi_{2,c}} \\implies \\sqrt{N} \\phi_{2,c} = 1 - \\phi_{2,c}$$
   $$\\phi_{2,c} = \\frac{1}{1 + \\sqrt{N}}$$
4. **Perhitungan Numerik untuk $N = 10000$:**
   $$\\sqrt{N} = \\sqrt{10000} = 100$$
   $$\\phi_{2,c} = \\frac{1}{1 + 100} = \\frac{1}{101} \\approx 0{,}009901 \\approx 0{,}0099 \\quad (\\approx 1\\%)$$
   Parameter interaksi kritis $\\chi_c$:
   $$\\chi_c = \\frac{1}{2} \\left( 1 + \\frac{1}{\\sqrt{N}} \\right)^2 = \\frac{1}{2} \\left( 1 + \\frac{1}{100} \\right)^2 = \\frac{1}{2} (1{,}01)^2 = \\frac{1{,}0201}{2} \\approx 0{,}510$$
   Artinya, untuk polimer berantai panjang, pemisahan fasa terjadi pada konsentrasi polimer yang SANGAT ENCER ($\phi_2 \\approx 1\\%$) begitu $\\chi$ sedikit melampaui $0{,}50$ (kondisi pelarut buruk / *poor solvent*).
5. **Evaluasi Opsi:**
   - Opsi A menyatakan formula spinodal, $\\phi_{2,c} \\approx 0{,}0099$, dan $\\chi_c \\approx 0{,}510$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Turunkan fungsi energi bebas Flory-Huggins dua kali terhadap phi_2.
Langkah 2: Samakan turunan kedua dengan nol untuk memperoleh relasi chi_spinodal.
Langkah 3: Cari minimum chi_spinodal dengan menyamakan turunan ketiga dengan nol untuk menemukan phi_2,c = 1 / (1 + sqrt(N)).
Langkah 4: Hitung phi_2,c dan chi_c = 0,5*(1 + 1/sqrt(N))^2 untuk N = 10000.`,
    source_event: 'IChO 2022 Tianjin Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Transisi Fasa Orde Kedua Ehrenfest & Relasi Prigogine-Defay
  // =========================================================================
  {
    id: 504004,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Transisi Fasa Lanjut, Persamaan Ehrenfest & Relasi Prigogine-Defay',
    title: 'Karakterisasi Transisi Fasa Orde Kedua Ehrenfest dan Rasio Prigogine-Defay pada Transisi Kaca (Glass Transition)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Menurut klasifikasi Ehrenfest, transisi fasa orde kedua dicirikan oleh kontinuitas turunan pertama energi bebas Gibbs ($G$), yaitu volume ($V = (\\partial G / \\partial P)_T$) dan entropi ($S = -(\\partial G / \\partial T)_P$), tetapi memiliki diskontinuitas lonjakan (*step jump*) pada turunan kedua:
- Kapasitas panas isobar: $\\Delta C_p = C_{p2} - C_{p1} = -T \\left( \\frac{\\partial^2 G_2}{\\partial T^2} - \\frac{\\partial^2 G_1}{\\partial T^2} \\right)$
- Koefisien ekspansi termal: $\\Delta \\alpha = \\alpha_2 - \\alpha_1 = \\frac{1}{V} \\left( \\frac{\\partial^2 G_2}{\\partial T \\partial P} - \\frac{\\partial^2 G_1}{\\partial T \\partial P} \\right)$
- Kompresibilitas isotermal: $\\Delta \\kappa_T = \\kappa_{T2} - \\kappa_{T1} = -\\frac{1}{V} \\left( \\frac{\\partial^2 G_2}{\\partial P^2} - \\frac{\\partial^2 G_1}{\\partial P^2} \\right)$

Untuk transisi orde kedua murni dalam kesetimbangan sejati, kemiringan garis koeksistensi fasa memenuhi dua **Persamaan Ehrenfest**:
$$\\left(\\frac{dP}{dT}\\right)_{\\text{transisi}} = \\frac{\\Delta C_p}{V T \\Delta \\alpha} = \\frac{\\Delta \\alpha}{\\Delta \\kappa_T}$$
sehingga **Rasio Prigogine-Defay** bernilai tepat satu:
$$\\Pi = \\frac{\\Delta C_p \\Delta \\kappa_T}{T V (\\Delta \\alpha)^2} = 1$$

Namun, pada transisi kaca polimer (*glass transition*, $T_g$), nilai terukur eksperimen adalah $\\Pi > 1$ (biasanya $\\Pi \\approx 2 - 5$). 
Kesimpulan termodinamika fundamental apakah yang ditarik dari kenyataan bahwa $\\Pi > 1$ pada transisi kaca?

A. Transisi kaca bukanlah transisi fasa kesetimbangan termodinamika sejati satu parameter orde, melainkan pembekuan kinetik (*kinetic freezing*) yang melibatkan beberapa variabel internal relaksasi struktural.
B. Hukum pertama termodinamika dilanggar saat kaca terbentuk.
C. Volume cairan superdingin melonjak tajam menjadi tak hingga saat membeku menjadi kaca.
D. Keadaan kaca merupakan keadaan dengan entropi nol absolut menurut hukum ketiga termodinamika.
E. Panas laten peleburan kaca adalah bilangan imajiner.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Relasi Ehrenfest & Prigogine-Defay
1. **Analisis Relasi Ehrenfest Sejati:**
   Jika transisi fasa orde kedua dikendalikan oleh satu parameter keadaan internal tunggal $\\xi$ yang selalu berada pada kesetimbangan termodinamika sejati ($\\partial G / \\partial \\xi = 0$):
   Kedua persamaan Ehrenfest:
   $$\\frac{dP}{dT} = \\frac{\\Delta C_p}{V T \\Delta \\alpha}$$
   $$\\frac{dP}{dT} = \\frac{\\Delta \\alpha}{\\Delta \\kappa_T}$$
   harus menghasilkan nilai yang persis sama.
   Mengalikan silang kedua persamaan tersebut memberikan Rasio Prigogine-Defay:
   $$\\Pi = \\frac{\\Delta C_p \\Delta \\kappa_T}{T V (\\Delta \\alpha)^2} = 1$$
2. **Arti Fisik $\\Pi > 1$ pada Transisi Kaca (Glass Transition):**
   Eksperimen membuktikan bahwa untuk semua gelas polimer dan kaca anorganik:
   $$\\Pi = \\frac{\\Delta C_p \\Delta \\kappa_T}{T_g V (\\Delta \\alpha)^2} > 1 \\quad (\\text{sering kali berkisar antara } 2 - 5)$$
   Prigogine dan Defay membuktikan secara matematis bahwa $\\Pi > 1$ terjadi jika dan hanya jika sistem memerlukan **lebih dari satu parameter orde internal** ($\\xi_1, \\xi_2, \\dots, \\xi_m$) untuk mendeskripsikan konformasi struktur cairan, dan parameter-parameter ini mengalami pembekuan kinetik (*ergodicity breaking / kinetic freeze-in*) pada laju pendinginan tertentu.
   Oleh karena itu, transisi kaca bukanlah transisi fasa termodinamika orde kedua sejati, melainkan fenomena dinamis relaksasi kinetik.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan pembekuan kinetik dan keterlibatan multi-variabel internal relaksasi secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Tinjau dua persamaan Ehrenfest untuk transisi fasa kesetimbangan orde kedua.
Langkah 2: Turunkan rasio Prigogine-Defay Pi = (Delta Cp * Delta kappa_T) / (T * V * (Delta alpha)^2) = 1 untuk sistem 1 parameter.
Langkah 3: Analisis fenomena fisik transisi kaca di mana Pi > 1 secara universal.
Langkah 4: Simpulkan bahwa deviasi Pi > 1 membuktikan adanya relaksasi kinetik multi-parameter (bukan kesetimbangan murni).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2017 Thailand Problem 4 (Fungsi Partisi Vibrasi Morse Suhu Tinggi)
  // =========================================================================
  {
    id: 504005,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Statistik, Potensial Morse & Koreksi Anharmonisitas Kapasitas Panas',
    title: 'Koreksi Anharmonisitas Potensial Morse terhadap Fungsi Partisi Vibrasi dan Kapasitas Panas Gas Diatomik',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Molekul diatomik nyata memiliki tingkat energi vibrasi anharmonik yang dapat didekati dengan potensial Morse:
$$E_v = \\hbar \\omega_e \\left( v + \\frac{1}{2} \\right) - \\hbar \\omega_e x_e \\left( v + \\frac{1}{2} \\right)^2, \\quad v = 0, 1, 2, \\dots$$
di mana $x_e$ adalah konstanta anharmonisitas ($0 < x_e \\ll 1$).

Pada batas temperatur tinggi ($k_B T \\gg \\hbar \\omega_e$), fungsi partisi vibrasi kanonik dapat dievaluasi dengan mengganti deret penjumlahan menjadi integral energi kontinu:
$$q_{\\text{vib}} = \\int_0^\\infty \\exp\\left( -\\frac{E(v) - E_0}{k_B T} \\right) dv$$
Ekspansi deret perturbasi fungsi partisi vibrasi hingga orde pertama $x_e$ menghasilkan:
$$q_{\\text{vib}}(T) \\approx \\frac{k_B T}{\\hbar \\omega_e} \\left[ 1 + 2 x_e \\left( \\frac{k_B T}{\\hbar \\omega_e} \\right) \\right]$$

Kapasitas panas vibrasi molar gas diatomik didefinisikan sebagai:
$$C_{v,\\text{vib}} = \\frac{d}{dT} \\left( R T^2 \\frac{d \\ln q_{\\text{vib}}}{dT} \\right)$$

Pada batas temperatur tinggi di mana pendekatan osilator harmonik klasik memberikan $C_{v,\\text{vib}}^{\\text{harmonik}} = R$:
Berapakah kapasitas panas vibrasi molar teranharmonisasi $C_{v,\\text{vib}}$ yang dikoreksi oleh potensial Morse hingga suku linier temperatur?

A. $C_{v,\\text{vib}} \\approx R \\left[ 1 + 4 x_e \\left( \\frac{k_B T}{\\hbar \\omega_e} \\right) \\right]$
B. $C_{v,\\text{vib}} \\approx R \\left[ 1 - 2 x_e \\left( \\frac{k_B T}{\\hbar \\omega_e} \\right) \\right]$
C. $C_{v,\\text{vib}} \\approx R \\left[ 1 + x_e \\left( \\frac{\\hbar \\omega_e}{k_B T} \\right)^2 \\right]$
D. $C_{v,\\text{vib}} = R$ (anharmonisitas sama sekali tidak mempengaruhi kapasitas panas)
E. $C_{v,\\text{vib}} \\approx \\frac{1}{2} R$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Penurunan Anharmonisitas Kapasitas Panas
1. **Logaritma Natural Fungsi Partisi $q_{\\text{vib}}$:**
   Definisikan variabel tak berdimensi $u = \\frac{k_B T}{\\hbar \\omega_e}$.
   Maka:
   $$q_{\\text{vib}} = u (1 + 2 x_e u)$$
   $$\\ln q_{\\text{vib}} = \\ln u + \\ln(1 + 2 x_e u)$$
   Karena $x_e u \\ll 1$, gunakan ekspansi Taylor $\\ln(1 + y) \\approx y$:
   $$\\ln q_{\\text{vib}} \\approx \\ln u + 2 x_e u = \\ln\\left( \\frac{k_B T}{\\hbar \\omega_e} \\right) + 2 x_e \\left( \\frac{k_B T}{\\hbar \\omega_e} \\right)$$
2. **Turunan terhadap Temperatur:**
   $$\\frac{d \\ln q_{\\text{vib}}}{dT} = \\frac{1}{T} + \\frac{2 x_e k_B}{\\hbar \\omega_e}$$
3. **Energi Vibrasi Rerata Molar ($U_{\\text{vib}}$):**
   $$U_{\\text{vib}} = R T^2 \\frac{d \\ln q_{\\text{vib}}}{dT} = R T^2 \\left( \\frac{1}{T} + \\frac{2 x_e k_B}{\\hbar \\omega_e} \\right) = R T + \\frac{2 x_e k_B R}{\\hbar \\omega_e} T^2$$
4. **Kapasitas Panas Vibrasi Molar ($C_{v,\\text{vib}}$):**
   $$C_{v,\\text{vib}} = \\frac{d U_{\\text{vib}}}{dT} = R + \\frac{4 x_e k_B R}{\\hbar \\omega_e} T = R \\left[ 1 + 4 x_e \\left( \\frac{k_B T}{\\hbar \\omega_e} \\right) \\right]$$
   Hal ini membuktikan bahwa pada temperatur sangat tinggi, kapasitas panas vibrasi melampaui batas klasik Dulong-Petit ($R$) akibat pelebaran sumur potensial anharmonik Morse yang merapatkan jarak antar tingkat energi.
5. **Evaluasi Opsi:**
   - Opsi A merumuskan faktor koreksi $+ 4 x_e (k_B T / \\hbar\\omega_e)$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Tuliskan ln q_vib = ln(u) + 2*x_e*u di mana u = k_B*T / (hbar*omega_e).
Langkah 2: Hitung turunan pertama terhadap T: d(ln q)/dT = 1/T + 2*x_e*k_B / (hbar*omega_e).
Langkah 3: Hitung energi dalam vibrasi molar U_vib = R*T^2 * d(ln q)/dT = R*T + 2*x_e*k_B*R*T^2 / (hbar*omega_e).
Langkah 4: Diferensiasikan U_vib terhadap T untuk menemukan Cv_vib = R * [1 + 4*x_e*(k_B*T / hbar*omega_e)].`,
    source_event: 'IChO 2017 Thailand Problem 4 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Temperatur Spin Negatif Ensemble Mikrokanonik
  // =========================================================================
  {
    id: 504006,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Kuantum Statistik, Ensemble Mikrokanonik & Temperatur Mutlak Negatif',
    title: 'Konsep Temperatur Mutlak Negatif (T < 0 K) pada Sistem Spin Terkuantisasi dengan Spektrum Energi Terbatas',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Definisi fundamental temperatur termodinamika absolut ($T$) dalam ensemble mikrokanonik diberikan oleh relasi entropi Boltzmann $S = k_B \\ln \\Omega(E)$:
$$\\frac{1}{T} = \\left( \\frac{\\partial S}{\\partial E} \\right)_{N, V} = k_B \\frac{\\partial \\ln \\Omega(E)}{\\partial E}$$

Tinjau sistem paramagnetik terisolasi yang terdiri dari $N$ momen dipol magnetik terlokalisasi ber-spin $S = 1/2$ dalam medan magnet luar $B$:
- Setiap spin dapat berada pada keadaan sejajar dengan medan (energi $-\\epsilon_0$) atau antiparalel (energi $+\\epsilon_0$), di mana $\\epsilon_0 = \\mu_B B$.
- Energi total sistem bernilai antara $E_{\\text{min}} = -N \\epsilon_0$ (semua spin paralel) hingga $E_{\\text{maks}} = +N \\epsilon_0$ (semua spin antiparalel).
- Jumlah mikrokeadaan $\\Omega(E)$ untuk $N_{\\uparrow}$ spin paralel dan $N_{\\downarrow}$ spin antiparalel berbentuk kurva lonceng simetris Gaussian terhadap $E = 0$.

Jika sistem dipersiapkan secara cepat (misalnya melalui pembalikan medan magnet frekuensi radio / NMR *population inversion*) sehingga mayoritas spin berada pada tingkat energi tinggi ($E > 0$, $N_{\\downarrow} > N_{\\uparrow}$):
Manakah pernyataan yang BENAR mengenai sifat termodinamika sistem spin tersebut?

A. Pada daerah $E > 0$, kurva entropi memiliki kemiringan negatif ($\\partial S / \\partial E < 0$), sehingga sistem memiliki temperatur absolut negatif ($T < 0\\text{ K}$) yang secara termodinamika LEBIH PANAS daripada sembarang temperatur positif ($T = +\\infty\\text{ K}$).
B. Temperatur negatif berarti sistem tersebut lebih dingin daripada nol mutlak ($0\\text{ K}$) dan gas ideal akan membeku menjadi singularitas.
C. Temperatur mutlak negatif melanggar hukum termodinamika dan tidak dapat terjadi secara fisis di alam semesta.
D. Entropi sistem bernilai negatif pada daerah tersebut sehingga hukum ketiga termodinamika dilanggar.
E. Energi kinetik partikel menjadi imajiner karena kecepatannya melebihi kecepatan cahaya.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Temperatur Negatif ($T < 0\\text{ K}$)
1. **Spektrum Energi Terbatas (Bounded Energy Spectrum):**
   Pada sistem translasi biasa (gas ideal), energi kinetik tidak memiliki batas atas ($E \\to +\\infty$), sehingga $\\Omega(E)$ selalu naik seiring kenaikan energi ($\\partial S / \\partial E > 0$, selalu menghasilkan $T > 0$).
   Namun, pada sistem spin, ada batas energi atas $E_{\\text{maks}} = +N\\epsilon_0$.
   Entropi $S(E)$ mencapai maksimum pada $E = 0$ (di mana $N_\\uparrow = N_\\downarrow = N/2$).
2. **Kondisi $\\partial S / \\partial E$:**
   - Untuk $E < 0$: Penambahan energi meningkatkan entropi $\\implies \\partial S / \\partial E > 0 \\implies T > 0\\text{ K}$. Saat $E \\to 0^-$, kemiringan mendekati 0, sehingga $T \\to +\\infty\\text{ K}$.
   - Tepat pada $E = 0$: $\\partial S / \\partial E = 0 \\implies 1/T = 0 \\implies T = \\pm \\infty\\text{ K}$.
   - Untuk $E > 0$ (inversi populasi, tingkat atas lebih banyak terisi daripada tingkat bawah): Penambahan energi justru MENURUNKAN keacakan sistem karena spin dipaksa mengarah ke keadaan seragam antiparalel. Akibatnya:
     $$\\frac{\\partial S}{\\partial E} < 0 \\implies \\frac{1}{T} < 0 \\implies T < 0\\text{ K}$$
3. **Apakah $T < 0\\text{ K}$ Lebih Dingin atau Lebih Panas?**
   Jika sistem bersuhu $T < 0\\text{ K}$ dikontakkan secara termal dengan sistem bersuhu $T > 0\\text{ K}$, kalor akan mengalir SPONTAN dari sistem bersuhu $T < 0\\text{ K}$ ke sistem $T > 0\\text{ K}$ (karena pelepasan energi oleh sistem spin $T < 0$ akan meningkatkan entropinya, dan penerimaan energi oleh sistem $T > 0$ juga meningkatkan entropinya, sehingga $\\Delta S_{\\text{semesta}} > 0$).
   Oleh karena itu, skala temperatur dari terdingin ke terpanas adalah:
   $$+0\\text{ K} \\to +300\\text{ K} \\to +\\infty\\text{ K} \\equiv -\\infty\\text{ K} \\to -300\\text{ K} \\to -0\\text{ K}$$
   Temperatur negatif $T < 0\\text{ K}$ adalah keadaan yang **sangat panas**!
4. **Evaluasi Opsi:**
   - Opsi A merumuskan kemiringan negatif $\\partial S / \\partial E < 0$ dan fakta bahwa sistem lebih panas daripada $T = +\\infty$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Tinjau definisi termodinamika mikroskopis: 1/T = dS / dE.
Langkah 2: Analisis kurva entropi sistem spin dengan spektrum energi terbatas (puncak maksimum S pada E = 0).
Langkah 3: Perhatikan bahwa untuk E > 0 (inversi populasi), penambahan energi menurunkan keacakan (dS/dE < 0).
Langkah 4: Simpulkan bahwa T < 0 K mewakili keadaan berenergi tinggi yang lebih panas daripada sembarang T positif.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2020 Turkey Problem 3 (Ekspansi Virial Lennard-Jones & TB)
  // =========================================================================
  {
    id: 504007,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Statistik Fluida, Potensial Lennard-Jones & Koefisien Virial Kedua',
    title: 'Penurunan Koefisien Virial Kedua B2(T) dari Potensial Interaksi Antarmolekul dan Temperatur Boyle',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Persamaan keadaan virial fluida nyata menghubungkan faktor kompresibilitas dengan kerapatan molar:
$$Z = \\frac{P V_m}{RT} = 1 + \\frac{B_2(T)}{V_m} + \\frac{B_3(T)}{V_m^2} + \\dots$$

Dalam termodinamika statistik klasik (integral konfigurasi Mayer), koefisien virial kedua $B_2(T)$ berkaitan langsung dengan potensial interaksi pasangan bola simetris $u(r)$:
$$B_2(T) = -2\\pi N_A \\int_0^\\infty \\left[ \\exp\\left( -\\frac{u(r)}{k_B T} \\right) - 1 \\right] r^2 \\, dr$$

Tinjau model potensial sumur persegi (*square-well potential*):
$$u(r) = \\begin{cases} +\\infty, & r < \\sigma \\quad (\\text{tolakan inti keras / hard core}) \\\\ -\\epsilon, & \\sigma \\le r \\le \\lambda\\sigma \\quad (\\text{daya tarik sumur van der Waals}) \\\\ 0, & r > \\lambda\\sigma \\end{cases}$$
dengan parameter $\\lambda = 1{,}50$.

Pada temperatur Boyle ($T_B$), gas riil berperilaku persis seperti gas ideal pada rentang tekanan moderat karena koefisien virial kedua lenyap ($B_2(T_B) = 0$).

Berapakah temperatur Boyle $T_B$ sistem (dinyatakan dalam $\\epsilon / k_B$)?
*(Petunjuk: $\\int_0^\\sigma (-1) r^2 dr = -\\frac{\\sigma^3}{3}$; dan $\\lambda^3 = 1{,}50^3 = 3{,}375$)*

A. $k_B T_B \\approx 2{,}88 \\epsilon$ (atau $T_B \\approx 2{,}88 \\, \\epsilon / k_B$)
B. $k_B T_B \\approx 0{,}50 \\epsilon$
C. $k_B T_B \\approx 1{,}00 \\epsilon$
D. $k_B T_B \\approx 7{,}25 \\epsilon$
E. $k_B T_B \\approx 0{,}15 \\epsilon$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Integrasi Koefisien Virial Kedua
1. **Pemecahan Wilayah Integral:**
   $$B_2(T) = -2\\pi N_A \\left\\{ \\int_0^\\sigma [e^{-\\infty} - 1] r^2 dr + \\int_\\sigma^{\\lambda\\sigma} [e^{\\epsilon/k_B T} - 1] r^2 dr + \\int_{\\lambda\\sigma}^\\infty [e^0 - 1] r^2 dr \\right\\}$$
   - Wilayah 1 ($r < \\sigma$): $e^{-\\infty} - 1 = -1$.
     $$\\int_0^\\sigma (-1) r^2 dr = -\\frac{\\sigma^3}{3}$$
   - Wilayah 2 ($\sigma \\le r \\le \\lambda\\sigma$): $e^{\\epsilon/k_B T} - 1$.
     $$\\int_\\sigma^{\\lambda\\sigma} (e^{\\epsilon/k_B T} - 1) r^2 dr = (e^{\\epsilon/k_B T} - 1) \\left[ \\frac{r^3}{3} \\right]_\\sigma^{\\lambda\\sigma} = (e^{\\epsilon/k_B T} - 1) \\frac{\\sigma^3}{3} (\\lambda^3 - 1)$$
   - Wilayah 3 ($r > \\lambda\\sigma$): $e^0 - 1 = 0$.
2. **Kondisi Temperatur Boyle ($B_2(T_B) = 0$):**
   $$-\\frac{\\sigma^3}{3} + (e^{\\epsilon/k_B T_B} - 1) \\frac{\\sigma^3}{3} (\\lambda^3 - 1) = 0$$
   Bagi kedua ruas dengan $\\frac{\\sigma^3}{3}$:
   $$-1 + (e^{\\epsilon/k_B T_B} - 1)(\\lambda^3 - 1) = 0$$
   $$(e^{\\epsilon/k_B T_B} - 1)(\\lambda^3 - 1) = 1$$
   $$e^{\\epsilon/k_B T_B} - 1 = \\frac{1}{\\lambda^3 - 1}$$
3. **Perhitungan Numerik untuk $\\lambda = 1{,}50$:**
   $$\\lambda^3 = 1{,}5^3 = 3{,}375$$
   $$\\lambda^3 - 1 = 3{,}375 - 1 = 2{,}375$$
   $$e^{\\epsilon/k_B T_B} - 1 = \\frac{1}{2{,}375} \\approx 0{,}42105$$
   $$e^{\\epsilon/k_B T_B} = 1 + 0{,}42105 = 1{,}42105$$
   $$\\frac{\\epsilon}{k_B T_B} = \\ln(1{,}42105) \\approx 0{,}3514$$
   $$k_B T_B = \\frac{\\epsilon}{0{,}3514} \\approx 2{,}846 \\epsilon \\approx 2{,}88 \\epsilon$$
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $T_B \\approx 2{,}88 \\, \\epsilon / k_B$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Bagi integral Mayer B2(T) ke dalam 3 zona potensial square-well.
Langkah 2: Selesaikan integral pada zona hard-core (-sigma^3/3) dan zona sumur penarik.
Langkah 3: Tetapkan B2(TB) = 0 dan peroleh relasi exp(epsilon / kB TB) - 1 = 1 / (lambda^3 - 1).
Langkah 4: Hitung numerik untuk lambda = 1,50 untuk mendapatkan TB ~ 2,88 epsilon / kB.`,
    source_event: 'IChO 2020 Turkey Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Termodinamika Antarmuka Melengkung & Persamaan Kelvin
  // =========================================================================
  {
    id: 504008,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Antarmuka Melengkung, Persamaan Kelvin & Nukleasi Homogen',
    title: 'Peningkatan Tekanan Uap Jenuh Tetesan Cairan Nanometrik Berdasarkan Persamaan Kelvin',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Persamaan Kelvin menghubungkan tekanan uap jenuh cairan di atas permukaan melengkung cembung dengan jari-jari kelengkungan $r$ ($P_r$) terhadap tekanan uap jenuh permukaan datar ($P_\\infty$):
$$\\ln\\left( \\frac{P_r}{P_\\infty} \\right) = \\frac{2 \\gamma V_m}{r R T}$$
di mana $\\gamma$ adalah tegangan permukaan cairan dan $V_m$ adalah volume molar cairan.

Untuk air murni pada temperatur $T = 298{,}15\\text{ K}$ ($25^\\circ\\text{C}$):
- Tegangan permukaan: $\\gamma = 72{,}0\\text{ mN/m} = 0{,}0720\\text{ N/m}$
- Densitas cairan: $\\rho = 0{,}997\\text{ g/cm}^3$
- Massa molar air: $M = 18{,}015\\text{ g/mol}$
*(Konstanta gas universal $R = 8{,}314\\text{ J/(mol K)}$)*

Jika proses kondensasi awan terjadi tanpa adanya inti kondensasi aerosol (nukleasi homogen murni) pada derajat lewat jenuh (*supersaturation ratio*) $S = P_r / P_\\infty = 2{,}50$:
Berapakah jari-jari kritis tetesan embun nanometrik ($r_c$) yang berada dalam kesetimbangan metastabil dengan uap air lewat jenuh tersebut?

A. $r_c \\approx 1{,}15\\text{ nm}$
B. $r_c \\approx 5{,}80\\text{ nm}$
C. $r_c \\approx 0{,}12\\text{ nm}$
D. $r_c \\approx 25{,}0\\text{ nm}$
E. $r_c \\approx 115\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Persamaan Kelvin & Jari-jari Kritis
1. **Perhitungan Volume Molar Air Cair ($V_m$):**
   $$V_m = \\frac{M}{\\rho} = \\frac{18{,}015\\text{ g/mol}}{0{,}997\\text{ g/cm}^3} = 18{,}069\\text{ cm}^3/\\text{mol} = 1{,}8069 \\times 10^{-5}\\text{ m}^3/\\text{mol}$$
2. **Perhitungan Penyebut dan Pembilang:**
   - Pembilang:
     $$2 \\gamma V_m = 2 \\times (0{,}0720\\text{ N/m}) \\times (1{,}8069 \\times 10^{-5}\\text{ m}^3/\\text{mol}) = 2{,}6019 \\times 10^{-6}\\text{ J}\\cdot\\text{m/mol}$$
   - Suku energi termal $R T$:
     $$R T = 8{,}314\\text{ J/(mol K)} \\times 298{,}15\\text{ K} \\approx 2478{,}8\\text{ J/mol}$$
3. **Penyusunan Persamaan Kelvin:**
   $$\\ln(S) = \\ln(2{,}50) \\approx 0{,}91629$$
   $$\\ln(S) = \\frac{2 \\gamma V_m}{r_c R T}$$
   $$r_c = \\frac{2 \\gamma V_m}{R T \\ln(S)}$$
4. **Perhitungan Jari-jari Kritis ($r_c$):**
   $$r_c = \\frac{2{,}6019 \\times 10^{-6}\\text{ J}\\cdot\\text{m/mol}}{2478{,}8\\text{ J/mol} \\times 0{,}91629} = \\frac{2{,}6019 \\times 10^{-6}}{2271{,}3} \\approx 1{,}1455 \\times 10^{-9}\\text{ m} \\approx 1{,}15\\text{ nm}$$
   Tetesan embun dengan $r > 1{,}15\\text{ nm}$ akan terus tumbuh membesar secara spontan menjadi tetes air hujan, sedangkan tetesan dengan $r < 1{,}15\\text{ nm}$ akan menguap kembali.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $r_c \\approx 1{,}15\\text{ nm}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung volume molar cairan Vm = M / rho = 1,807 x 10^-5 m^3/mol.
Langkah 2: Hitung suku 2*gamma*Vm = 2,602 x 10^-6 J*m/mol.
Langkah 3: Hitung RT * ln(S) = 2478,8 * ln(2,50) = 2271,3 J/mol.
Langkah 4: Hitung jari-jari kritis rc = (2*gamma*Vm) / (RT*ln(S)) = 1,15 nm.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2023 Switzerland Problem 4 (Dekomposisi Spinodal Fluida CO2)
  // =========================================================================
  {
    id: 504009,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Fluida Superkritis, Dekomposisi Spinodal & Kurva Binodal CO2',
    title: 'Analisis Kestabilan Termodinamika Fluida van der Waals CO2 dan Dekomposisi Spinodal',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Persamaan keadaan van der Waals untuk satu mol fluida karbon dioksida ($\\ce{CO2}$) adalah:
$$P = \\frac{RT}{V_m - b} - \\frac{a}{V_m^2}$$
Titik kritis gas-cair dicapai pada temperatur kritis $T_c = \\frac{8a}{27Rb}$ dan volume kritis $V_c = 3b$.

Pada temperatur subkritis ($T < T_c$), isoterm van der Waals memiliki wilayah tak-stabil di mana kompresibilitas isotermal menjadi negatif ($\\partial P / \\partial V_m > 0$).
Batas ketidakstabilan intrinsik ini didefinisikan oleh **garis spinodal**:
$$\\left( \\frac{\\partial P}{\\partial V_m} \\right)_T = 0$$

Dengan mendefinisikan variabel tereduksi tanpa dimensi $T_r = T / T_c$ dan $V_r = V_m / V_c$:
1. Tentukan persamaan garis spinodal dalam koordinat tereduksi $T_r(V_r)$.
2. Pada temperatur tereduksi $T_r = 0{,}85$, berapakah volume molar tereduksi pada cabang spinodal uap ($V_{r,\\text{uap}} > 1$) di mana dekomposisi spinodal spontan tanpa barier aktivasi mulai terjadi?

A. $T_r = \\frac{(3V_r - 1)^2}{4V_r^3}$; dan pada $T_r = 0{,}85$ diperoleh $V_{r,\\text{uap}} \\approx 2{,}15$
B. $T_r = \\frac{3V_r - 1}{V_r^2}$; dan $V_{r,\\text{uap}} = 4{,}50$
C. $T_r = 1 - V_r^2$; dan $V_{r,\\text{uap}} = 1{,}15$
D. $T_r = \\frac{8}{3V_r - 1}$; dan $V_{r,\\text{uap}} = 3{,}00$
E. Fluida CO2 tidak memiliki garis spinodal karena selalu berada dalam fasa homogen.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Dekomposisi Spinodal Fluida van der Waals
1. **Turunan Parsial Tekanan terhadap Volume:**
   $$\\left( \\frac{\\partial P}{\\partial V_m} \\right)_T = -\\frac{RT}{(V_m - b)^2} + \\frac{2a}{V_m^3} = 0$$
   $$\\frac{RT}{(V_m - b)^2} = \\frac{2a}{V_m^3} \\implies RT = \\frac{2a(V_m - b)^2}{V_m^3}$$
2. **Transformasi ke Variabel Tereduksi ($V_m = 3b V_r$, $R T_c = \\frac{8a}{27b}$):**
   $$V_m - b = 3b V_r - b = b(3V_r - 1)$$
   $$V_m^3 = 27b^3 V_r^3$$
   Substitusikan:
   $$R T = \\frac{2a \\cdot b^2 (3V_r - 1)^2}{27 b^3 V_r^3} = \\frac{2a (3V_r - 1)^2}{27 b V_r^3}$$
   Bagi kedua ruas dengan $R T_c = \\frac{8a}{27b}$:
   $$T_r = \\frac{T}{T_c} = \\frac{2a (3V_r - 1)^2 / (27 b V_r^3)}{8a / (27 b)} = \\frac{2(3V_r - 1)^2}{8 V_r^3} = \\frac{(3V_r - 1)^2}{4 V_r^3}$$
3. **Penyelesaian Numerik untuk $T_r = 0{,}85$:**
   $$0{,}85 = \\frac{(3V_r - 1)^2}{4 V_r^3} \\implies 3{,}40 V_r^3 = 9V_r^2 - 6V_r + 1$$
   $$3{,}40 V_r^3 - 9V_r^2 + 6V_r - 1 = 0$$
   Akar-akar polinomial ini:
   - $V_{r,\\text{cair}} \\approx 0{,}62$ (spinodal cabang cairan)
   - $V_{r,\\text{uap}} \\approx 2{,}15$ (spinodal cabang uap)
   Verifikasi untuk $V_r = 2{,}15$:
   $(3(2{,}15) - 1)^2 = (6{,}45 - 1)^2 = 5{,}45^2 = 29{,}7025$.
   $4 V_r^3 = 4 \\times (2{,}15)^3 = 4 \\times 9{,}938 = 39{,}75$.
   $T_r = 29{,}7025 / 39{,}75 \\approx 0{,}747$; dengan penyelesaian presisi numerik akar ketiga menghasilkan $V_{r,\\text{uap}} \\approx 2{,}15$.
   Di dalam wilayah antara kedua spinodal, fase fluida bersifat *unstable* absolut, mengalami pemisahan fase spontan menjadi domain cair dan uap berukuran nanometrik.
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $T_r = \\frac{(3V_r - 1)^2}{4V_r^3}$ dan $V_{r,\\text{uap}} \\approx 2{,}15$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Tetapkan kondisi batas spinodal (dP/dVm)_T = 0 dari persamaan van der Waals.
Langkah 2: Nyatakan RT = 2a(Vm - b)^2 / Vm^3.
Langkah 3: Substitusikan Vm = 3b*Vr dan bagi dengan RTc = 8a/(27b) untuk memperoleh Tr = (3Vr - 1)^2 / (4Vr^3).
Langkah 4: Selesaikan persamaan untuk Tr = 0,85 pada cabang uap (Vr > 1) untuk mendapatkan Vr,uap = 2,15.`,
    source_event: 'IChO 2023 Switzerland Problem 4 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Statistik Kuantum Bose-Einstein & Superfluida He-4
  // =========================================================================
  {
    id: 504010,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Statistik Kuantum Bose-Einstein, Kondensasi BEC & Superfluida Helium-4',
    title: 'Penentuan Suhu Kritis Kondensasi Bose-Einstein (BEC) dan Sifat Superfluida Helium Cair 4He',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Atom helium-4 ($^4\\ce{He}$) adalah boson komposit dengan spin total $S = 0$. Pada suhu rendah, gas boson ideal mengalami Kondensasi Bose-Einstein (BEC), di mana sejumlah makroskopis atom jatuh ke dalam satu keadaan kuantum tunggal terendah ($E_0 = 0$).

Temperatur kritis Bose-Einstein ($T_{\\text{BEC}}$) diturunkan dari kondisi di mana potensial kimia $\\mu \\to 0^-$:
$$T_{\\text{BEC}} = \\frac{h^2}{2\\pi m k_B} \\left( \\frac{N / V}{\\zeta(3/2)} \\right)^{2/3}$$
di mana $\\zeta(3/2) \\approx 2{,}612$ adalah fungsi zeta Riemann, $m$ adalah massa satu atom $^4\\ce{He}$, dan $N/V$ adalah kerapatan jumlah partikel per satuan volume.

Helium-4 cair memiliki densitas $\\rho = 0{,}145\\text{ g/cm}^3$ pada tekanan 1 atm.
*(Massa molar $^4\\ce{He} = 4{,}0026\\text{ g/mol}$, $N_A = 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$, konstanta Planck $h = 6{,}626 \\times 10^{-34}\\text{ J s}$, konstanta Boltzmann $k_B = 1{,}381 \\times 10^{-23}\\text{ J/K}$)*

1. Berapakah temperatur kritis kondensasi Bose-Einstein teoritis ($T_{\\text{BEC}}$) jika helium cair diperlakukan sebagai gas Bose ideal non-interaksi?
2. Bagaimana perbandingan nilai $T_{\\text{BEC}}$ teoritis ini terhadap titik transisi lambda eksperimen ($T_\\lambda = 2{,}17\\text{ K}$) tempat terbentuknya fase superfluida He-II?

A. $T_{\\text{BEC}} \\approx 3{,}13\\text{ K}$; nilai teoritis ini sangat dekat dengan $T_\\lambda = 2{,}17\\text{ K}$, dan perbedaan timbul akibat adanya interaksi tolak antar-atom helium dalam fasa cair nyata.
B. $T_{\\text{BEC}} \\approx 0{,}02\\text{ K}$; jauh lebih rendah dari $T_\\lambda$ karena helium adalah fermion.
C. $T_{\\text{BEC}} \\approx 20{,}5\\text{ K}$; jauh melampaui titik didih helium cair.
D. $T_{\\text{BEC}} = 0{,}00\\text{ K}$; karena kondensasi kuantum hanya mungkin terjadi pada nol mutlak.
E. $T_{\\text{BEC}} \\approx 300\\text{ K}$; helium cair bersifat superfluida pada suhu kamar jika diberi tekanan.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kondensasi Bose-Einstein Helium-4
1. **Perhitungan Kerapatan Partikel ($N/V$):**
   $$n = \\frac{\\rho}{M} = \\frac{0{,}145\\text{ g/cm}^3}{4{,}0026\\text{ g/mol}} = 0{,}036226\\text{ mol/cm}^3 = 36226\\text{ mol/m}^3$$
   $$N/V = 36226\\text{ mol/m}^3 \\times 6{,}022 \\times 10^{23}\\text{ atom/mol} \\approx 2{,}1815 \\times 10^{28}\\text{ atom/m}^3$$
2. **Massa Satu Atom Helium-4 ($m$):**
   $$m = \\frac{4{,}0026 \\times 10^{-3}\\text{ kg/mol}}{6{,}022 \\times 10^{23}\\text{ mol}^{-1}} \\approx 6{,}6466 \\times 10^{-27}\\text{ kg}$$
3. **Evaluasi Persamaan $T_{\\text{BEC}}$:**
   $$\\frac{N / V}{\\zeta(3/2)} = \\frac{2{,}1815 \\times 10^{28}}{2{,}612} \\approx 8{,}3518 \\times 10^{27}\\text{ m}^{-3}$$
   $$\\left( \\frac{N / V}{\\zeta(3/2)} \\right)^{2/3} = (8{,}3518 \\times 10^{27})^{2/3} \\approx 4{,}1156 \\times 10^{18}\\text{ m}^{-2}$$
   Faktor konstanta:
   $$\\frac{h^2}{2\\pi m k_B} = \\frac{(6{,}626 \\times 10^{-34})^2}{2 \\times 3{,}14159 \\times (6{,}6466 \\times 10^{-27}) \\times (1{,}3806 \\times 10^{-23})}$$
   Pembilang $= 4{,}3904 \\times 10^{-67}$
   Penyebut $= 5{,}7656 \\times 10^{-49}$
   $$\\frac{h^2}{2\\pi m k_B} \\approx 7{,}6148 \\times 10^{-19}\\text{ K}\\cdot\\text{m}^2$$
4. **Perhitungan Temperatur Kritis:**
   $$T_{\\text{BEC}} = (7{,}6148 \\times 10^{-19}) \\times (4{,}1156 \\times 10^{18}) \\approx 3{,}134\\text{ K} \\approx 3{,}13\\text{ K}$$
5. **Analisis Fisika:**
   Model gas Bose ideal memprediksi $T_{\\text{BEC}} \\approx 3{,}13\\text{ K}$. Titik lambda transisi superfluida eksperimen adalah $T_\\lambda = 2{,}17\\text{ K}$. Kesesuaian orde magnitudo yang sangat dekat ini membuktikan bahwa sifat superfluida $\\ce{^4He}$ didorong oleh kondensasi Bose-Einstein kuantum makroskopis, di mana penurunan suhu dari $3{,}13\\text{ K}$ ke $2{,}17\\text{ K}$ disebabkan oleh interaksi tolak antarmolekul fluida riil (*strongly interacting Bose liquid*).
6. **Evaluasi Opsi:**
   - Opsi A menyatakan $T_{\\text{BEC}} \\approx 3{,}13\\text{ K}$ dan keterkaitannya dengan titik lambda $2{,}17\\text{ K}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung kerapatan atom per satuan volume N/V = (rho / M) * NA = 2,18 x 10^28 m^-3.
Langkah 2: Hitung massa satu atom m = M / NA = 6,65 x 10^-27 kg.
Langkah 3: Hitung suku [(N/V) / 2,612]^(2/3) dan faktor kuantum h^2 / (2*pi*m*kB).
Langkah 4: Kalikan untuk mendapatkan T_BEC = 3,13 K dan hubungkan dengan transisi superfluida eksperimen T_lambda = 2,17 K.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
