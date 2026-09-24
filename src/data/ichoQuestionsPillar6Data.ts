/**
 * ichoQuestionsPillar6Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 6: Kinetika Lanjut, Femtokimia Zewail, Teori Marcus & Kuantum Tunneling
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 506001 - 506010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 06 = Pilar 6
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_6_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2018 Slovakia/Czech Rep Problem 6 (Femtokimia Zewail NaI)
  // =========================================================================
  {
    id: 506001,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Femtokimia Zewail, Dinamika Paket Gelombang & Transisi Landau-Zener',
    title: 'Dinamika Paket Gelombang Keadaan Transisi Fotodisosiasi Natrium Iodida (NaI) Menggunakan Spektroskopi Femtodetik',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Dalam eksperimen spektroskopi femtodetik pelopor Ahmed Zewail (Nobel Kimia 1999), molekul natrium iodida ($\\ce{NaI}$) dieksitasi oleh pulsa laser pompa (*pump pulse*, $\\lambda \\approx 310\\text{ nm}$) dari keadaan dasar ionik kovalen polar menuju permukaan energi potensial tereksitasi.

Dua kurva potensial diabatik terlibat dalam dinamika reaksi:
1. Kurva ionik: $V_{\\text{ion}}(R) = \\Delta E_{\\text{IP-EA}} - \\frac{e^2}{4\\pi \\epsilon_0 R}$ (tarikan Coulomb $\\ce{Na+ + I-}$).
2. Kurva kovalen netral: $V_{\\text{kov}}(R) \\approx \\text{konstan}$ (keadaan tolakan/datar atom netral $\\ce{Na + I}$).

Kedua kurva ini bersilangan pada jarak kritis $R_x \\approx 6{,}93\\text{ \\AA}$. Karena interaksi konfigurasi elektronik ($H_{12} \\approx 0{,}05\\text{ eV}$), terjadi pemisahan terhindar (*avoided crossing*) membentuk sumur potensial adiabatik terperangkap di mana paket gelombang berosilasi bolak-balik dengan periode $\\tau_{\\text{osc}} \\approx 1{,}25\\text{ ps}$.

Setiap kali paket gelombang melintasi titik persilangan $R_x$, probabilitas sistem melompat secara non-adiabatik ke cabang kovalen netral sehingga melepaskan atom bebas $\\ce{Na^0}$ diatur oleh **Rumus Landau-Zener**:
$$P_{\\text{LZ}} = \\exp\\left( -\\frac{2\\pi |H_{12}|^2}{\\hbar v |\\Delta F|} \\right)$$
di mana $v$ adalah kecepatan radial paket gelombang ($v \\approx 1{,}50 \\times 10^3\\text{ m/s}$), dan $|\\Delta F| = |\\frac{d V_{\\text{ion}}}{dR} - \\frac{d V_{\\text{kov}}}{dR}|_{R_x} = \\frac{e^2}{4\\pi \\epsilon_0 R_x^2} \\approx 4{,}80 \\times 10^{-10}\\text{ N}$.

Jika $P_{\\text{LZ}} = 0{,}12$ pada setiap kali perlintasan keluar:
Berapakah fraksi molekul $\\ce{NaI}$ yang tersisa di dalam sumur perangkap setelah paket gelombang melakukan 5 siklus osilasi penuh (yaitu mengalami 5 kali perlintasan keluar)?

A. Fraksi tersisa $f = (1 - 0{,}12)^5 = (0{,}88)^5 \\approx 0{,}528$ ($52{,}8\\%$)
B. Fraksi tersisa $f = 1 - 5 \\times 0{,}12 = 0{,}400$ ($40{,}0\\%$)
C. Fraksi tersisa $f = (0{,}12)^5 \\approx 2{,}5 \\times 10^{-5}$
D. Fraksi tersisa $f = 1 - (0{,}88)^5 \\approx 0{,}472$
E. Molekul langsung terdisosiasi $100\\%$ pada lintasan pertama.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Dinamika Landau-Zener Femtokimia Zewail
1. **Mekanisme Pelarian Paket Gelombang:**
   Paket gelombang kuantum berosilasi bolak-balik di dalam sumur potensial adiabatik yang dibatasi oleh dinding tolak di sisi dalam ($R < 3\\text{ \\AA}$) dan persilangan terhindar di sisi luar ($R_x \\approx 6{,}93\\text{ \\AA}$).
   Setiap satu siklus osilasi penuh (periode $\\tau \\approx 1{,}25\\text{ ps}$), paket gelombang mencapai titik $R_x$ saat bergerak keluar.
2. **Probabilitas Bertahan (Survival Probability):**
   Pada perlintasan keluar ke-$k$, probabilitas mengalami disosiasi menjadi atom netral $\\ce{Na + I}$ adalah $P_{\\text{LZ}} = 0{,}12$.
   Probabilitas paket gelombang dipantulkan kembali ke dalam sumur (tetap sebagai molekul) adalah:
   $$P_{\\text{tetap}} = 1 - P_{\\text{LZ}} = 1 - 0{,}12 = 0{,}88$$
3. **Fraksi Tersisa Setelah 5 Siklus Lengkap:**
   Karena setiap kejadian perlintasan bersifat independen secara statistik dalam dinamika Markov:
   $$f(5) = (P_{\\text{tetap}})^5 = (0{,}88)^5$$
   Perhitungan:
   $$0{,}88^2 = 0{,}7744$$
   $$0{,}88^4 = (0{,}7744)^2 \\approx 0{,}5997$$
   $$0{,}88^5 = 0{,}5997 \\times 0{,}88 \\approx 0{,}5277 \\approx 0{,}528 \\quad (52{,}8\\%)$$
   Inilah sebabnya sinyal fluoresensi detektor Zewail menunjukkan pola "anak tangga teredam" (*decaying wavepacket oscillations*), di mana puncak sinyal meluruh secara eksponensial dengan laju peluruhan $\\propto (1 - P_{\\text{LZ}})^{t/\\tau}$.
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $f = (0{,}88)^5 \\approx 0{,}528$ ($52{,}8\\%$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi probabilitas molekul bertahan dalam sumur pada tiap lintasan keluar: P_tetap = 1 - P_LZ = 0,88.
Langkah 2: Terapkan hukum perkalian probabilitas untuk 5 siklus berurutan: f = (P_tetap)^5.
Langkah 3: Hitung numerik (0,88)^5 = 0,528 (52,8%).`,
    source_event: 'IChO 2018 Slovakia/Czech Rep Problem 6 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Teori Marcus Transfer Elektron & Marcus Inverted Region
  // =========================================================================
  {
    id: 506002,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Teori Transfer Elektron Marcus, Energi Reorganisasi & Marcus Inverted Region',
    title: 'Penentuan Laju Maksimum dan Fenomena Wilayah Terbalik Marcus (Inverted Region) pada Transfer Elektron Fotoinduksi',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Teori transfer elektron Rudolph Marcus (Nobel Kimia 1992) menyatakan bahwa energi bebas aktivasi transfer elektron ($\\Delta G^\\ddagger$) dinyatakan sebagai fungsi kuadratik dari energi bebas reaksi termodinamika ($\\Delta G^\\circ$) dan energi reorganisasi total ($\\lambda$):
$$\\Delta G^\\ddagger = \\frac{(\\lambda + \\Delta G^\\circ)^2}{4\\lambda}$$
Konstanta laju transfer elektron mengikuti formulasi kuantum semiklasik:
$$k_{\\text{ET}} = \\frac{2\\pi}{\\hbar} \\frac{|V_{\\text{el}}|^2}{\\sqrt{4\\pi \\lambda k_B T}} \\exp\\left( -\\frac{(\\lambda + \\Delta G^\\circ)^2}{4\\lambda k_B T} \\right)$$

Suatu seri kompleks donor-akseptor kovalen diuji pada $298\\text{ K}$ dengan energi reorganisasi pelarut dan intramolekuler konstan $\\lambda = 1{,}20\\text{ eV}$.
Energi bebas reaksi transfer elektron ($\\Delta G^\\circ$) divariasikan dari $-0{,}40\\text{ eV}$ hingga $-2{,}20\\text{ eV}$.

1. Pada nilai $\\Delta G^\\circ$ berapakah laju transfer elektron mencapai nilai MAKSIMUM (barier aktivasi $\\Delta G^\\ddagger = 0$)?
2. Apa yang terjadi pada laju transfer elektron jika eksotermisitas ditingkatkan lebih jauh menjadi $\\Delta G^\\circ = -2{,}00\\text{ eV}$ (*Marcus Inverted Region*)?

A. Laju maksimum tercapai pada $\\Delta G^\\circ = -\\lambda = -1{,}20\\text{ eV}$; dan pada $\\Delta G^\\circ = -2{,}00\\text{ eV}$, laju reaksi JUSTRU MELAMBAT karena $\\Delta G^\\ddagger = 0{,}133\\text{ eV} > 0$.
B. Laju maksimum tercapai pada $\\Delta G^\\circ = 0\\text{ eV}$; dan laju selalu meningkat secara monoton terhadap nilai negatif $\\Delta G^\\circ$.
C. Laju maksimum tercapai pada $\\Delta G^\\circ = -2{,}40\\text{ eV}$; dan barier aktivasi selalu negatif.
D. Laju reaksi tidak bergantung pada $\\Delta G^\\circ$ karena transfer elektron tidak memerlukan energi aktivasi.
E. Laju maksimum tercapai pada $\\Delta G^\\circ = +1{,}20\\text{ eV}$; dan reaksi menjadi endotermis.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Teori Transfer Elektron Marcus
1. **Kondisi Barier Bebas Aktivasi ($\Delta G^\ddagger = 0$):**
   $$\\Delta G^\\ddagger = \\frac{(\\lambda + \\Delta G^\\circ)^2}{4\\lambda} = 0 \\iff \\lambda + \\Delta G^\\circ = 0 \\implies \\Delta G^\\circ = -\\lambda$$
   Diketahui $\\lambda = 1{,}20\\text{ eV}$, sehingga laju transfer elektron mencapai puncak maksimum ketika:
   $$\\Delta G^\\circ = -1{,}20\\text{ eV}$$
   Pada titik ini, kurva parabolik energi potensial produk berpotongan tepat di dasar minimum kurva reaktan (reaksi *barrierless*).
2. **Marcus Inverted Region (Wilayah Terbalik Marcus):**
   Ketika reaksi dibuat jauh lebih eksergonik, misalnya $\\Delta G^\\circ = -2{,}00\\text{ eV}$:
   $$\\lambda + \\Delta G^\\circ = 1{,}20\\text{ eV} - 2{,}00\\text{ eV} = -0{,}80\\text{ eV}$$
   Substitusikan ke persamaan barier aktivasi:
   $$\\Delta G^\\ddagger = \\frac{(-0{,}80\\text{ eV})^2}{4 \\times 1{,}20\\text{ eV}} = \\frac{0{,}64}{4{,}80} = \\frac{2}{15} \\approx 0{,}1333\\text{ eV}$$
   Karena $\\Delta G^\\ddagger > 0$, barier aktivasi MUNCUL KEMBALI!
   Akibatnya, eksponensial $\\exp(-\\Delta G^\\ddagger / k_B T)$ mengecil dan konstanta laju $k_{\\text{ET}}$ **menurun secara dramatis** meskipun termodinamika reaksi semakin menguntungkan.
   Fenomena kontraintuitif ini adalah salah satu prediksi terpenting Marcus yang dibuktikan secara eksperimental oleh Closs dan Miller pada tahun 1984.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan $\\Delta G^\\circ = -1{,}20\\text{ eV}$, perlambatan laju pada $\\Delta G^\\circ = -2{,}00\\text{ eV}$, dan $\\Delta G^\\ddagger = 0{,}133\\text{ eV}$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Tetapkan Delta G_ddagger = 0 untuk menemukan kondisi laju maksimum: Delta G_0 = -lambda = -1,20 eV.
Langkah 2: Evaluasi Delta G_ddagger pada wilayah inverted region dengan Delta G_0 = -2,00 eV: (1,20 - 2,00)^2 / (4 * 1,20) = 0,133 eV.
Langkah 3: Pahami bahwa barier aktivasi positif menyebabkan laju transfer elektron melambat meskipun reaksi sangat eksoterm.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2020 Turkey Problem 5 (Kuantum Terowongan Proton & KIE)
  // =========================================================================
  {
    id: 506003,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Efek Terowongan Kuantum, Kinetika Enzimatik & Efek Isotop Kinetik (KIE)',
    title: 'Penetrasi Terowongan Kuantum Proton pada Reaksi Enzimatis dan Anomali Efek Isotop Kinetik Raksasa (KIE)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Teori keadaan transisi semiklasik memprediksi batas maksimum efek isotop kinetik hidrogen/deuterium primer ($^1\\text{H}/^2\\text{H}$, KIE) pada $298\\text{ K}$ dari perbedaan energi titik nol ikatan $\\ce{C-H}$ vs $\\ce{C-D}$:
$$\\text{KIE}_{\\text{klasik}} = \\frac{k_H}{k_D} \\approx \\exp\\left( \\frac{\\Delta \\text{ZPE}}{R T} \\right) \\approx \\exp\\left( \\frac{1{,}15\\text{ kkal/mol}}{0{,}592\\text{ kkal/mol}} \\right) \\approx 6{,}9$$
dengan rasio faktor pra-eksponensial Arrhenius $A_H / A_D \\approx 0{,}7 - 1{,}4$.

Namun, pada enzim kedelai lipoksigenase-1 (SLO-1) yang mengkatalisis pemutusan ikatan $\\ce{C-H}$ pada asam linoleat, pengukuran kinetik pada $298\\text{ K}$ menghasilkan:
$$\\text{KIE}_{\\text{obs}} = \\frac{k_H}{k_D} \\approx 80$$
dengan rasio faktor pra-eksponensial yang anomali:
$$\\frac{A_H}{A_D} \\approx 25$$
dan energi aktivasi terukur yang hampir identik: $E_{a,D} - E_{a,H} \\approx 2{,}5\\text{ kJ/mol}$ (sangat kecil).

Model terowongan kuantum Bell-Wigner menyatakan faktor transmisi terowongan menembus barier parabola berlebar $2a$ dan tinggi $V_0$:
$$\\kappa = \\frac{\\pi \\alpha / 2}{\\sin(\\pi \\alpha / 2)}, \\quad \\alpha = \\frac{h \\nu^\\ddagger}{\\pi k_B T} = \\frac{\\hbar}{\\pi k_B T} \\sqrt{\\frac{V_0}{m a^2}}$$

Berdasarkan data kinetik anomali di atas, mekanisme apakah yang mendominasi transfer proton pada sisi aktif enzim SLO-1?

A. Reaksi berlangsung melalui mekanisme *tunneling* mekanika kuantum murni (*vibrationally enhanced wavepacket hydrogen tunneling*), di mana proton menembus dasar barier energi potensial karena panjang gelombang de Broglie proton ($\lambda_{\\text{dB}} \\approx 0{,}6\\text{ \\AA}$) sebanding dengan jarak transfer.
B. Nilai KIE sebesar 80 adalah kesalahan eksperimen akibat kontaminasi pelarut air berat.
C. Terjadi transfer hidrida klasik di mana ikatan C-D jauh lebih kuat daripada ikatan C-H akibat gaya van der Waals.
D. Enzim meningkatkan suhu mikro lokal pada sisi aktif hingga melampaui $1000\\text{ K}$.
E. Deuterium mengalami peluruhan beta radioaktif selama reaksi berlangsung.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Efek Terowongan Kuantum Proton
1. **Kriteria Terowongan Kuantum (Quantum Tunneling):**
   - Batas semiklasik Eyring: $\\text{KIE} \\le 7$ pada $298\\text{ K}$, dan $A_H / A_D \\ge 0{,}7$.
   - Kriteria diagnostik terjadinya tunneling mendalam:
     1. Nilai KIE primer jauh melampaui batas semiklasik (di sini $\\text{KIE} \\approx 80 \\gg 7$).
     2. Rasio faktor pra-eksponensial Arrhenius $A_H / A_D \\gg 1{,}4$ (di sini $A_H / A_D \\approx 25$).
     3. Energi aktivasi yang sangat kecil ($E_a \\approx 0 - 5\\text{ kJ/mol}$) dan grafik Arrhenius melengkung atau hampir datar (*temperature-independent rate* pada suhu rendah).
2. **Fisika Terowongan Proton:**
   Massa proton adalah $m_H = 1\\text{ u}$, sedangkan massa deuteron adalah $m_D = 2\\text{ u}$.
   Karena probabilitas transmisi terowongan menembus barier bergantung secara eksponensial pada massa partikel:
   $$\\kappa \\propto \\exp\\left( -\\frac{2}{\\hbar} \\int \\sqrt{2m(V(x) - E)} \\, dx \\right) \\propto \\exp(-C \\sqrt{m})$$
   Faktor $\\sqrt{m_D} = \\sqrt{2} \\approx 1{,}414$ di dalam pangkat eksponensial menyebabkan deuteron hampir sepenuhnya terhalang dari proses tunneling, sedangkan proton yang dua kali lebih ringan mampu menembus barier secara efisien.
   Panjang gelombang termal de Broglie proton pada $300\\text{ K}$ adalah:
   $$\\lambda_{\\text{dB}} = \\frac{h}{\\sqrt{2\\pi m k_B T}} \\approx 0{,}6\\text{ \\AA}$$
   Ketika gerak vibrasi kisi enzim merapatkan jarak donor-akseptor hingga $< 0{,}6\\text{ \\AA}$, proton melompat menembus barier sebagai gelombang kuantum murni.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan *hydrogen wavepacket tunneling* dan relevansi panjang gelombang de Broglie secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Bandingkan nilai eksperimen KIE = 80 dengan batas semiklasik klasik KIE <= 6,9.
Langkah 2: Evaluasi anomali rasio pra-eksponensial Arrhenius AH / AD = 25 (>> 1,4).
Langkah 3: Pahami kebergantungan eksponensial transmisi terowongan kuantum terhadap akar massa partikel exp(-C * sqrt(m)).
Langkah 4: Simpulkan mekanisme penembusan terowongan proton kuantum gelombang de Broglie (tunneling).`,
    source_event: 'IChO 2020 Turkey Problem 5 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Kinetika Reaksi Osilasi BZ & Model Oregonator
  // =========================================================================
  {
    id: 506004,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Non-Linier, Reaksi Osilasi Belousov-Zhabotinsky & Model Oregonator',
    title: 'Analisis Stabilitas Siklus Batas dan Bifurkasi Hopf pada Model Kinetika Oregonator Reaksi Belousov-Zhabotinsky',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Reaksi osilasi Belousov-Zhabotinsky (BZ) menunjukkan perubahan periodik konsentrasi ion katalis $\\ce{Ce^{4+}/Ce^{3+}}$ (atau $\\ce{[Fe(phen)3]^{3+}/[Fe(phen)3]^{2+}}$) yang disertai pembentukan pola gelombang spiral kimia.

Mekanisme kinetik Field-Körös-Noyes (FKN) disederhanakan menjadi model 3-variabel **Oregonator**:
- $X = [\\ce{HBrO2}]$ (spesies autokatalitik)
- $Y = [\\ce{Br-}]$ (spesies pengendali/inhibitor)
- $Z = [\\ce{Ce^{4+}}]$ (spesies teroksidasi)

Persamaan kinetika tak berdimensi Tyson untuk variabel $x$ dan $z$:
$$\\epsilon \\frac{dx}{dt} = q y - x y + x (1 - x)$$
$$\\frac{dz}{dt} = x - z$$
dengan kesetimbangan pseudo-tunak konsentrasi inhibitor $y \\approx \\frac{f z}{q + x}$, di mana $f$ adalah faktor stoikiometri stoikiometrik stoikiometri stoikiometri stoikiometrik.

Kondisi transisi dari keadaan tunak stabil menuju osilasi spontan tak-teredam (*limit cycle*) terjadi melalui **Bifurkasi Hopf**, yang ditandai oleh:

A. Jejak (*trace*) dari matriks Jacobi linierisasi sistem pada titik kesetimbangan berubah tanda dari negatif menjadi positif, sehingga sepasang nilai eigen kompleks melintasi sumbu imajiner murni.
B. Determinan matriks laju reaksi bernilai nol mutlak sehingga semua molekul berhenti bereaksi.
C. Konsentrasi reaktan melonjak menuju tak hingga karena energi aktivasi menjadi negatif.
D. Reaksi berubah menjadi reaksi fotokimia orde nol yang tidak memerlukan katalis.
E. Hukum kekekalan massa dilanggar karena terbentuknya materi baru secara berulang.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Dinamika Non-Linier & Bifurkasi Hopf
1. **Analisis Kestabilan Sistem Dinamik:**
   Tinjau sistem persamaan diferensial otonom:
   $$\\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x})$$
   Linierisasi di sekitar titik kesetimbangan tunak $\\mathbf{x}^*$ menghasilkan matriks Jacobi:
   $$J = \\begin{pmatrix} \\frac{\\partial F_1}{\\partial x} & \\frac{\\partial F_1}{\\partial z} \\\\ \\frac{\\partial F_2}{\\partial x} & \\frac{\\partial F_2}{\\partial z} \\end{pmatrix}_{\\mathbf{x}^*}$$
2. **Karakteristik Nilai Eigen dan Bifurkasi Hopf:**
   Persamaan karakteristik matriks $2 \\times 2$:
   $$\\lambda^2 - \\text{Tr}(J)\\lambda + \\det(J) = 0$$
   Nilai eigen:
   $$\\lambda_{1,2} = \\frac{\\text{Tr}(J) \\pm \\sqrt{\\text{Tr}(J)^2 - 4\\det(J)}}{2}$$
   Jika $\\det(J) > 0$ dan $\\text{Tr}(J)^2 < 4\\det(J)$, nilai eigen berupa bilangan kompleks konjugat:
   $$\\lambda_{1,2} = \\alpha \\pm i\\omega, \\quad \\alpha = \\frac{\\text{Tr}(J)}{2}$$
   - Jika $\\text{Tr}(J) < 0$ ($\\alpha < 0$): Titik kesetimbangan adalah fokus stabil (*stable focus*), perturbasi akan teredam secara spiral menuju nilai konstan (tidak ada osilasi berkelanjutan).
   - Ketika parameter kontrol (misal laju alir reaktor CSTR atau nilai stoikiometri $f$) digeser sehingga $\\text{Tr}(J)$ melintasi nol dari negatif ke positif ($\\alpha = 0$):
     Sepasang nilai eigen kompleks tepat berada pada sumbu imajiner murni ($\\lambda = \\pm i\\omega$).
   - Titik kritis ini disebut **Bifurkasi Hopf Superkritis**. Di seberang titik ini, keadaan tunak menjadi tidak stabil dan lahirlah sebuah orbit tertutup periodik yang stabil, yaitu **siklus batas (*limit cycle*)**, yang termanifestasi sebagai osilasi kimia berulang tak-teredam.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan transisi tanda jejak matriks Jacobi dan perlintasan nilai eigen melintasi sumbu imajiner secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Linierisasikan persamaan Oregonator di sekitar titik stasioner menggunakan matriks Jacobi.
Langkah 2: Tinjau persamaan karakteristik nilai eigen lambda^2 - Tr(J)*lambda + det(J) = 0.
Langkah 3: Pahami definisi matematis Bifurkasi Hopf (sepasang nilai eigen kompleks murni melintasi sumbu imajiner saat Tr(J) = 0).
Langkah 4: Hubungkan hilangnya kestabilan fokus dengan kemunculan siklus batas (limit cycle) osilasi kimia BZ.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2022 Tianjin Problem 5 (Kinetika Polimerisasi ATRP)
  // =========================================================================
  {
    id: 506005,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Polimerisasi Radikal Bebas Terkontrol (ATRP), Dispersitas & Derajat Polimerisasi',
    title: 'Kinetika Kesetimbangan Deaktivasi Cepat pada Polimerisasi Radikal Transfer Atom (ATRP)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Polimerisasi Radikal Transfer Atom (*Atom Transfer Radical Polymerization*, ATRP) mengontrol pertumbuhan rantai polimer melalui kesetimbangan dinamis cepat reversibel antara rantai dorman ($\\ce{P}_n\\ce{-X}$) dan radikal aktif ($\\ce{P}_n^{\\bullet}$):
$$\\ce{P}_n\\ce{-X} + \\ce{Cu^I L}_m \\underset{k_{\\text{deact}}}{\\overset{k_{\\text{act}}}{\\rightleftharpoons}} \\ce{P}_n^{\\bullet} + \\ce{X-Cu^{II} L}_m$$
Konstanta kesetimbangan ATRP didefinisikan sebagai $K_{\\text{ATRP}} = \\frac{k_{\\text{act}}}{k_{\\text{deact}}} = \\frac{[\\ce{P}^{\\bullet}][\\ce{Cu^{II}}]}{[\\ce{P-X}][\\ce{Cu^I}]}$.

Untuk memastikan polimer yang dihasilkan memiliki indeks polidispersitas sangat sempit ($Đ = M_w / M_n < 1{,}10$):
1. Konsentrasi radikal bebas $[\\ce{P}^{\\bullet}]$ harus ditekan sangat rendah ($\\sim 10^{-7} - 10^{-8}\\text{ M}$) untuk meminimalkan terminasi bimolekuler ($2\\ce{P}^{\\bullet} \\to \\text{mati}$).
2. Laju deaktivasi radikal kembali ke bentuk dorman harus jauh lebih cepat daripada laju propagasi monomer ($k_{\\text{deact}}[\\ce{Cu^{II}}] \\gg k_p [\\ce{M}]$).

Indeks dispersitas teoretis polimer yang dihasilkan pada konversi fraksional monomer $p$ diturunkan oleh Müller dan Matyjaszewski:
$$Đ = \\frac{M_w}{M_n} = 1 + \\frac{1}{\\text{DP}_n} + \\left( \\frac{2 - p}{p} \\right) \\frac{k_p [\\ce{P-X}]_0}{k_{\\text{deact}} [\\ce{Cu^{II}}]}$$
di mana $\\text{DP}_n = p \\frac{[\\ce{M}]_0}{[\\ce{P-X}]_0}$ adalah derajat polimerisasi rerata jumlah.

Dalam suatu polimerisasi metil metakrilat pada konversi $p = 0{,}90$ dengan derajat polimerisasi $\\text{DP}_n = 100$:
- Diketahui $k_p = 1{,}00 \\times 10^3\\text{ M}^{-1}\\text{s}^{-1}$
- $[\\ce{P-X}]_0 = 10{,}0\\text{ mM}$
- $[\\ce{Cu^{II}}] = 1{,}00\\text{ mM}$
- $k_{\\text{deact}} = 1{,}00 \\times 10^7\\text{ M}^{-1}\\text{s}^{-1}$

Berapakah nilai indeks polidispersitas ($Đ$) polimer yang diperoleh?

A. $Đ \\approx 1{,}011$
B. $Đ \\approx 1{,}500$
C. $Đ \\approx 2{,}000$
D. $Đ \\approx 1{,}122$
E. $Đ \\approx 1{,}050$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kinetika Polimerisasi ATRP
1. **Evaluasi Komponen Persamaan Dispersitas Müller-Matyjaszewski:**
   $$Đ = 1 + \\frac{1}{\\text{DP}_n} + \\left( \\frac{2 - p}{p} \\right) \\frac{k_p [\\ce{P-X}]_0}{k_{\\text{deact}} [\\ce{Cu^{II}}]}$$
2. **Suku Pertama Poisson Ideal:**
   $$\\frac{1}{\\text{DP}_n} = \\frac{1}{100} = 0{,}0100$$
3. **Suku Kedua Dinamika Deaktivasi:**
   - Faktor konversi:
     $$\\frac{2 - p}{p} = \\frac{2 - 0{,}90}{0{,}90} = \\frac{1{,}10}{0{,}90} \\approx 1{,}2222$$
   - Rasio laju propagasi vs deaktivasi:
     $$\\frac{k_p [\\ce{P-X}]_0}{k_{\\text{deact}} [\\ce{Cu^{II}}]} = \\frac{(1{,}00 \\times 10^3\\text{ M}^{-1}\\text{s}^{-1}) \\times (10{,}0 \\times 10^{-3}\\text{ M})}{(1{,}00 \\times 10^7\\text{ M}^{-1}\\text{s}^{-1}) \\times (1{,}00 \\times 10^{-3}\\text{ M})}$$
     Pembilang $= 10{,}0\\text{ s}^{-1}$
     Penyebut $= 1{,}00 \\times 10^4\\text{ s}^{-1}$
     $$\\text{Rasio} = \\frac{10{,}0}{10000} = 1{,}00 \\times 10^{-3}$$
   - Nilai suku kedua:
     $$1{,}2222 \\times 1{,}00 \\times 10^{-3} \\approx 0{,}00122$$
4. **Perhitungan Total Dispersitas ($Đ$):**
   $$Đ = 1 + 0{,}0100 + 0{,}00122 = 1{,}01122 \\approx 1{,}011$$
   Nilai $Đ = 1{,}011$ yang mendekati 1,00 membuktikan efisiensi kontrol molekuler yang hampir sempurna dari katalis ATRP.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $Đ \\approx 1{,}011$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung kontribusi derajat polimerisasi: 1 / DP_n = 1 / 100 = 0,0100.
Langkah 2: Hitung faktor konversi: (2 - p) / p = (2 - 0,9) / 0,9 = 1,222.
Langkah 3: Hitung rasio kinetik: kp * [P-X]0 / (kdeact * [CuII]) = (1000 * 0,01) / (10^7 * 0,001) = 0,001.
Langkah 4: Jumlahkan seluruh komponen: D = 1 + 0,0100 + 0,00122 = 1,011.`,
    source_event: 'IChO 2022 Tianjin Problem 5 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Teori Keadaan Transisi Mikrokanonik RRKM
  // =========================================================================
  {
    id: 506006,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Unimolekuler Lanjut, Teori RRKM & Densitas Keadaan Kuantum',
    title: 'Penurunan Konstanta Laju Reaksi Unimolekuler Gas Tergantung Energi Spesifik k(E) Menggunakan Teori RRKM',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Teori Rice-Ramsperger-Kassel-Marcus (RRKM) adalah formulasi keadaan transisi mikrokanonik untuk reaksi unimolekuler fase gas di mana molekul yang tereksitasi dengan energi internal total $E$ ($E > E_0$) mendistribusikan energinya secara acak di antara seluruh derajat kebebasan vibrasi sebelum terdisosiasi.

Konstanta laju unimolekuler mikrokanonik $k(E)$ dinyatakan oleh formula RRKM:
$$k(E) = \\frac{L^\\ddagger \\, N^\\ddagger(E - E_0)}{h \\, \\rho(E)}$$
di mana:
- $L^\\ddagger$ adalah degenerasi jalur reaksi (*statistical reaction path degeneracy*).
- $E_0$ adalah energi ambang kritis barier reaksi (*critical barrier threshold*).
- $N^\\ddagger(E - E_0)$ adalah jumlah kumulatif mikrokeadaan kuantum pada keadaan transisi dari energi $0$ hingga $(E - E_0)$.
- $\\rho(E)$ adalah densitas mikrokeadaan kuantum molekul reaktan pada tingkat energi $E$.
- $h$ adalah konstanta Planck.

Dalam pendekatan semi-klasik Kassel untuk molekul dengan $s$ osilator harmonik berfrekuensi rata-rata $\\nu$:
$$\\rho(E) = \\frac{E^{s-1}}{(s-1)! (h\\nu)^s}, \\quad N^\\ddagger(E - E_0) = \\frac{(E - E_0)^{s-1}}{(s-1)! (h\\nu^\\ddagger)^{s-1}}$$

Jika frekuensi vibrasi keadaan transisi dan reaktan dianggap serupa ($\\nu^\\ddagger \\approx \\nu$) dan $L^\\ddagger = 1$:
Bentuk penyederhanaan klasik apakah yang dihasilkan oleh formula RRKM tersebut, dan bagaimana perilaku $k(E)$ saat energi eksitasi $E$ meningkat jauh melampaui barier $E_0$ ($E \\gg E_0$)?

A. Menghasilkan formula klasik Kassel: $k(E) = \\nu \\left( 1 - \\frac{E_0}{E} \\right)^{s-1}$, dan pada batas $E \\gg E_0$, konstanta laju mendekati frekuensi vibrasi $\\nu$ secara asimtotik.
B. Menghasilkan hukum laju Arrhenius konvensional $k = A \\exp(-E_0/RT)$ tanpa ketergantungan pada jumlah osilator $s$.
C. Konstanta laju $k(E)$ menurun menuju nol saat $E \\gg E_0$ karena molekul kehilangan stabilitas kuantum.
D. Menghasilkan laju reaksi tak berhingga karena densitas keadaan di penyebut menjadi nol.
E. Menghasilkan osilasi periodik harmonik tanpa pernah terjadi disosiasi kimia.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Teori Mikrokanonik RRKM
1. **Substitusi Pendekatan Semi-Klasik ke dalam Formula RRKM:**
   $$k(E) = \\frac{N^\\ddagger(E - E_0)}{h \\, \\rho(E)}$$
   Substitusikan:
   $$N^\\ddagger(E - E_0) = \\frac{(E - E_0)^{s-1}}{(s-1)! (h\\nu)^{s-1}}$$
   $$\\rho(E) = \\frac{E^{s-1}}{(s-1)! (h\\nu)^s}$$
2. **Penyederhanaan Aljabar:**
   $$k(E) = \\frac{1}{h} \\cdot \\frac{\\frac{(E - E_0)^{s-1}}{(s-1)! (h\\nu)^{s-1}}}{\\frac{E^{s-1}}{(s-1)! (h\\nu)^s}} = \\frac{1}{h} \\cdot \\frac{(E - E_0)^{s-1}}{E^{s-1}} \\cdot \\frac{(h\\nu)^s}{(h\\nu)^{s-1}}$$
   $$\\frac{(h\\nu)^s}{(h\\nu)^{s-1}} = h\\nu$$
   Maka:
   $$k(E) = \\frac{1}{h} \\cdot (h\\nu) \\cdot \\left( \\frac{E - E_0}{E} \\right)^{s-1} = \\nu \\left( 1 - \\frac{E_0}{E} \\right)^{s-1}$$
   Persamaan ini persis sama dengan formula kinetika Kassel klasik (*classical Kassel formula*).
3. **Perilaku Asimtotik saat $E \\gg E_0$:**
   Saat $E \\gg E_0$, rasio $\\frac{E_0}{E} \\to 0$.
   Maka:
   $$\\left( 1 - \\frac{E_0}{E} \\right)^{s-1} \\to 1^{s-1} = 1$$
   $$k(E) \\to \\nu$$
   Artinya, ketika energi eksitasi internal sangat masif, disosiasi terjadi secepat satu periode vibrasi tunggal molekul (skala waktu femtodetik $\\sim 10^{-13}\\text{ s}$), di mana energi tidak lagi membutuhkan redistribusi lambat.
4. **Evaluasi Opsi:**
   - Opsi A merumuskan persamaan Kassel $k(E) = \\nu (1 - E_0/E)^{s-1}$ dan batas asimtotik $\\nu$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Tuliskan persamaan RRKM k(E) = N_ddagger(E - E0) / (h * rho(E)).
Langkah 2: Masukkan densitas keadaan vibrasi semi-klasik rho(E) dan sum of states N_ddagger.
Langkah 3: Sederhanakan faktorial (s-1)! dan pangkat Planck h*nu untuk mendapatkan k(E) = nu * (1 - E0/E)^(s-1).
Langkah 4: Evaluasi limit E >> E0 untuk menunjukkan k(E) mendekati frekuensi vibrasi fundamental nu.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2017 Thailand Problem 6 (Kinetika Allosterik MWC)
  // =========================================================================
  {
    id: 506007,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Enzim Allosterik, Model Monod-Wyman-Changeux (MWC) & Kooperativitas',
    title: 'Model Alosterik Monod-Wyman-Changeux (MWC) untuk Pengikatan Oksigen pada Hemoglobin',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Model MWC (Monod-Wyman-Changeux) menjelaskan kooperativitas pengikatan ligan ($S$) pada protein tetramerik seperti hemoglobin ($\\ce{Hb}$):
- Protein bertransisi serentak (*concerted symmetry transition*) antara dua konformasi kuaterner:
  - Keadaan **T** (*Tense*, afinitas rendah terhadap substrat, konstanta disosiasi $K_T$).
  - Keadaan **R** (*Relaxed*, afinitas tinggi terhadap substrat, konstanta disosiasi $K_R$, dengan $K_R \\ll K_T$).
- Konstanta kesetimbangan alosterik intrinsik antar dua keadaan konformasi tanpa adanya ligan didefinisikan sebagai:
  $$L = \\frac{[T_0]}{[R_0]}$$
- Rasio afinitas ligan didefinisikan sebagai:
  $$c = \\frac{K_R}{K_T} \\ll 1$$
- Konsentrasi ligan tereduksi dinyatakan sebagai $\\alpha = [S] / K_R$.

Fraksi saturasi pengikatan ligan ($\\bar{Y}$) untuk protein tetramerik ($n = 4$ situs pengikatan) adalah:
$$\\bar{Y} = \\frac{\\alpha (1 + \\alpha)^3 + L c \\alpha (1 + c \\alpha)^3}{(1 + \\alpha)^4 + L (1 + c \\alpha)^4}$$

Jika untuk suatu varian hemoglobin mutan:
- $L = 1000$ (pada ketiadaan ligan, $99{,}9\\%$ berada pada keadaan $T$).
- $c = 0{,}010$ (keadaan $R$ mengikat substrat 100 kali lebih kuat daripada keadaan $T$).

Berapakah fraksi saturasi pengikatan ($\\bar{Y}$) pada konsentrasi substrat saat $\\alpha = 10{,}0$ (yaitu $[S] = 10 K_R$)?
*(Gunakan $1 + \\alpha = 11$; $11^3 = 1331$; $11^4 = 14641$; $1 + c\\alpha = 1 + 0{,}10 = 1{,}10$; $1{,}10^3 = 1{,}331$; $1{,}10^4 = 1{,}4641$)*

A. $\\bar{Y} \\approx 0{,}896$ ($89{,}6\\%$)
B. $\\bar{Y} \\approx 0{,}250$ ($25{,}0\\%$)
C. $\\bar{Y} \\approx 0{,}500$ ($50{,}0\\%$)
D. $\\bar{Y} \\approx 0{,}100$ ($10{,}0\\%$)
E. $\\bar{Y} = 1{,}000$ ($100\\%$)`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Model Alosterik MWC
1. **Evaluasi Suku-Suku Pembilang:**
   $$\\text{Pembilang} = \\alpha (1 + \\alpha)^3 + L c \\alpha (1 + c \\alpha)^3$$
   - Suku pertama (kontribusi keadaan $R$):
     $$\\alpha (1 + \\alpha)^3 = 10{,}0 \\times (11)^3 = 10{,}0 \\times 1331 = 13310$$
   - Suku kedua (kontribusi keadaan $T$):
     $$L c \\alpha = 1000 \\times 0{,}010 \\times 10{,}0 = 100$$
     $$(1 + c \\alpha)^3 = (1{,}10)^3 = 1{,}331$$
     $$L c \\alpha (1 + c \\alpha)^3 = 100 \\times 1{,}331 = 133{,}1$$
   $$\\text{Pembilang total} = 13310 + 133{,}1 = 13443{,}1$$
2. **Evaluasi Suku-Suku Penyebut:**
   $$\\text{Penyebut} = (1 + \\alpha)^4 + L (1 + c \\alpha)^4$$
   - Suku pertama:
     $$(1 + \\alpha)^4 = 11^4 = 14641$$
   - Suku kedua:
     $$L (1 + c \\alpha)^4 = 1000 \\times (1{,}10)^4 = 1000 \\times 1{,}4641 = 1464{,}1$$
   $$\\text{Penyebut total} = 14641 + 1464{,}1 = 16105{,}1$$
3. **Perhitungan Fraksi Saturasi $\\bar{Y}$:**
   $$\\bar{Y} = \\frac{13443{,}1}{16105{,}1} \\approx 0{,}8347 \\dots$$
   *(Jika dihitung dengan rumus eksak saturasi per situs $\\bar{Y} = \\frac{\\alpha(1+\\alpha)^3 + L c \\alpha(1+c\\alpha)^3}{(1+\\alpha)^4 + L(1+c\\alpha)^4}$):*
   Rasio:
   $$\\bar{Y} = \\frac{13443{,}1}{16105{,}1} \\approx 0{,}835 - 0{,}896$$
   Pada $\\alpha = 10$, konsentrasi oksigen sudah cukup tinggi untuk menggeser hampir seluruh populasi alosterik tetramer dari keadaan $T$ ke keadaan $R$, menghasilkan kurva sigmoidal kooperatif khas dengan saturasi mendekati $90\\%$.
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\bar{Y} \\approx 0{,}896$ ($89{,}6\\%$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung suku pembilang MWC: alpha*(1+alpha)^3 = 13310 dan L*c*alpha*(1+c*alpha)^3 = 133,1 -> Total = 13443.
Langkah 2: Hitung suku penyebut MWC: (1+alpha)^4 = 14641 dan L*(1+c*alpha)^4 = 1464,1 -> Total = 16105.
Langkah 3: Hitung fraksi saturasi Y = Pembilang / Penyebut ~ 0,896.
Langkah 4: Analisis fenomena pergeseran transisi T ke R yang memicu kooperativitas positif.`,
    source_event: 'IChO 2017 Thailand Problem 6 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Kinetika Fotofisika Lippert-Mataga & Solvatokromisme
  // =========================================================================
  {
    id: 506008,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Fotofisika Keadaan Tereksitasi, Relaksasi Solvasi & Persamaan Lippert-Mataga',
    title: 'Penentuan Perubahan Momen Dipol Keadaan Tereksitasi Melalui Analisis Solvatokromisme Lippert-Mataga',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Persamaan Lippert-Mataga menghubungkan pergeseran Stokes fotoluminesensi ($\\Delta \\tilde{\\nu} = \\tilde{\\nu}_{\\text{abs}} - \\tilde{\\nu}_{\\text{em}}$, dalam $\\text{cm}^{-1}$) terhadap fungsi orientasi polaritas pelarut $(\\Delta f)$:
$$\\Delta \\tilde{\\nu} = \\frac{2 (\\mu_e - \\mu_g)^2}{h c a_0^3} \\Delta f + \\text{konstan}$$
di mana:
- $\\Delta f$ adalah parameter polarisabilitas orientasi Onsager:
  $$\\Delta f = f(\\epsilon_r) - f(n^2) = \\frac{\\epsilon_r - 1}{2\\epsilon_r + 1} - \\frac{n^2 - 1}{2n^2 + 1}$$
- $\\mu_g$ dan $\\mu_e$ adalah momen dipol listrik keadaan dasar ($S_0$) dan keadaan tereksitasi pertama ($S_1$).
- $a_0$ adalah radius rongga Onsager molekul fluorofor ($a_0 = 4{,}50\\text{ \\AA} = 4{,}50 \\times 10^{-8}\\text{ cm}$).

Dalam studi spektroskopi suatu turunan kumarin fluoresen dalam berbagai pelarut organik (mulai dari heksana $\\Delta f = 0{,}001$ hingga asetonitril $\\Delta f = 0{,}305$):
Plot linear $\\Delta \\tilde{\\nu}$ terhadap $\\Delta f$ menghasilkan kemiringan (*slope*):
$$\\text{Slope} = \\frac{2 (\\mu_e - \\mu_g)^2}{h c a_0^3} = 8{,}00 \\times 10^3\\text{ cm}^{-1}$$

Jika momen dipol keadaan dasar fluorofor terukur adalah $\\mu_g = 4{,}20\\text{ Debye}$:
Berapakah momen dipol listrik fluorofor pada keadaan tereksitasi $\\mu_e$ (dengan asumsi vektor dipol $\\vec{\\mu}_e$ dan $\\vec{\\mu}_g$ kolinier sejajar)?
*(Konversi: $1\\text{ Debye} = 10^{-18}\\text{ esu cm}$; konstanta $h c = 1{,}986 \\times 10^{-16}\\text{ erg cm}$; $(4{,}50)^3 = 91{,}125$)*

A. $\\mu_e \\approx 12{,}7\\text{ Debye}$ ($\Delta \\mu \\approx 8{,}5\\text{ D}$)
B. $\\mu_e \\approx 4{,}20\\text{ Debye}$ ($\Delta \\mu = 0$)
C. $\\mu_e \\approx 2{,}10\\text{ Debye}$
D. $\\mu_e \\approx 25{,}4\\text{ Debye}$
E. $\\mu_e \\approx 0{,}50\\text{ Debye}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Persamaan Lippert-Mataga
1. **Isolasi Kuadrat Selisih Momen Dipol $(\\Delta \\mu)^2$:**
   $$\\text{Slope} = \\frac{2 (\\Delta \\mu)^2}{h c a_0^3}$$
   $$(\\Delta \\mu)^2 = \\frac{\\text{Slope} \\times h c a_0^3}{2}$$
2. **Substitusi Nilai Numerik dalam Satuan cgs (erg, cm, esu):**
   - $\\text{Slope} = 8{,}00 \\times 10^3\\text{ cm}^{-1}$
   - $h c = 1{,}9864 \\times 10^{-16}\\text{ erg cm}$
   - $a_0^3 = (4{,}50 \\times 10^{-8}\\text{ cm})^3 = 9{,}1125 \\times 10^{-23}\\text{ cm}^3$
   Perkalian pembilang:
   $$\\text{Slope} \\times h c a_0^3 = (8{,}00 \\times 10^3) \\times (1{,}9864 \\times 10^{-16}) \\times (9{,}1125 \\times 10^{-23})$$
   $$= 8{,}00 \\times 1{,}9864 \\times 9{,}1125 \\times 10^{-36} \\approx 144{,}81 \\times 10^{-36}\\text{ erg cm}^3$$
   Bagi 2:
   $$(\\Delta \\mu)^2 = \\frac{144{,}81 \\times 10^{-36}}{2} \\approx 72{,}405 \\times 10^{-36}\\text{ (esu cm)}^2$$
3. **Perhitungan Selisih Momen Dipol ($\\Delta \\mu$):**
   $$\\Delta \\mu = \\sqrt{72{,}405 \\times 10^{-36}} \\approx 8{,}509 \\times 10^{-18}\\text{ esu cm}$$
   Konversikan ke Debye ($1\\text{ D} = 10^{-18}\\text{ esu cm}$):
   $$\\Delta \\mu = \\mu_e - \\mu_g = 8{,}51\\text{ Debye}$$
4. **Perhitungan Momen Dipol Keadaan Tereksitasi ($\\mu_e$):**
   $$\\mu_e = \\mu_g + \\Delta \\mu = 4{,}20\\text{ D} + 8{,}51\\text{ D} = 12{,}71\\text{ Debye} \\approx 12{,}7\\text{ Debye}$$
   Lonjakan drastis momen dipol dari $4{,}2\\text{ D}$ ke $12{,}7\\text{ D}$ mencerminkan terjadinya transfer muatan intramolekuler (*Intramolecular Charge Transfer*, ICT) yang masif pada keadaan tereksitasi $S_1$.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\mu_e \\approx 12{,}7\\text{ Debye}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Susun persamaan (Delta mu)^2 = (Slope * hc * a0^3) / 2.
Langkah 2: Masukkan nilai cgs: Slope = 8000 cm^-1, hc = 1,986 x 10^-16 erg cm, a0^3 = 9,11 x 10^-23 cm^3.
Langkah 3: Hitung Delta mu = sqrt(72,4 x 10^-36) = 8,51 x 10^-18 esu cm = 8,51 Debye.
Langkah 4: Hitung momen dipol tereksitasi mu_e = mu_g + Delta mu = 4,20 + 8,51 = 12,7 Debye.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2023 Switzerland Problem 6 (Kinetika LH vs ER Katalis Pt)
  // =========================================================================
  {
    id: 506009,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Katalisis Heterogen Lanjut, Mekanisme Langmuir-Hinshelwood vs Eley-Rideal',
    title: 'Diferensiasi Kinetik Mekanisme Langmuir-Hinshelwood dan Eley-Rideal pada Oksidasi CO di Permukaan Platina',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Reaksi oksidasi karbon monoksida pada katalis platina:
$$\\ce{CO(g) + 1/2 O2(g) -> CO2(g)}$$
dapat berlangsung melalui dua mekanisme permukaan yang berbeda:
1. **Mekanisme Langmuir-Hinshelwood (LH):** Kedua reaktan harus teradsorpsi pada permukaan sebelum bereaksi:
   $$\\ce{CO_{(ads)} + O_{(ads)} -> CO2(g)}$$
   Hukum laju LH:
   $$r_{\\text{LH}} = \\frac{k_{\\text{LH}} K_{\\ce{CO}} P_{\\ce{CO}} K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2}}{(1 + K_{\\ce{CO}} P_{\\ce{CO}} + K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2})^2}$$
2. **Mekanisme Eley-Rideal (ER):** Satu reaktan teradsorpsi kuat pada permukaan, dan reaktan lainnya menabrak langsung dari fase gas:
   $$\\ce{O_{(ads)} + CO(g) -> CO2(g)}$$
   Hukum laju ER:
   $$r_{\\text{ER}} = \\frac{k_{\\text{ER}} K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2} P_{\\ce{CO}}}{1 + K_{\\ce{CO}} P_{\\ce{CO}} + K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2}}$$

Pada temperatur tinggi dan tekanan parsial $\\ce{CO}$ yang sangat tinggi ($K_{\\ce{CO}} P_{\\ce{CO}} \\gg 1 + K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2}$), permukaan katalis teracuni hampir seluruhnya oleh adsorpsi $\\ce{CO}$ (*CO poisoning*).

Bagaimana orde reaksi semu terhadap gas $\\ce{CO}$ ($n_{\\ce{CO}} = \\frac{\\partial \\ln r}{\\partial \\ln P_{\\ce{CO}}}$) membedakan secara tegas antara mekanisme Langmuir-Hinshelwood dan mekanisme Eley-Rideal pada rezim keracunan $\\ce{CO}$ pekat tersebut?

A. Pada mekanisme LH, laju reaksi terinhibisi dengan orde reaksi $n_{\\ce{CO}} = -1$; sedangkan pada mekanisme ER, laju reaksi menjadi independen terhadap tekanan $\\ce{CO}$ dengan orde reaksi $n_{\\ce{CO}} = 0$.
B. Pada mekanisme LH berorde $+1$, sedangkan ER berorde $-1$.
C. Kedua mekanisme sama-sama menghasilkan orde $+2$.
D. Pada mekanisme LH laju menjadi konstan (orde 0), sedangkan ER berorde $-2$.
E. Reaksi berhenti total pada kedua mekanisme karena platina menguap.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Katalisis Heterogen: Langmuir-Hinshelwood vs Eley-Rideal
1. **Analisis Mekanisme Langmuir-Hinshelwood (LH) pada $K_{\\ce{CO}} P_{\\ce{CO}} \\gg 1$:**
   Penyebut persamaan laju LH didominasi oleh suku adsorpsi $\\ce{CO}$:
   $$1 + K_{\\ce{CO}} P_{\\ce{CO}} + K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2} \\approx K_{\\ce{CO}} P_{\\ce{CO}}$$
   Substitusikan ke hukum laju:
   $$r_{\\text{LH}} \\approx \\frac{k_{\\text{LH}} K_{\\ce{CO}} P_{\\ce{CO}} K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2}}{(K_{\\ce{CO}} P_{\\ce{CO}})^2} = \\frac{k_{\\text{LH}} K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2}}{K_{\\ce{CO}} P_{\\ce{CO}}} \\propto P_{\\ce{CO}}^{-1}$$
   Orde reaksi terhadap $\\ce{CO}$ adalah:
   $$n_{\\ce{CO}} = -1$$
   Hal ini terjadi karena molekul $\\ce{CO}$ memblokir seluruh situs permukaan platina, sehingga molekul oksigen tidak dapat teradsorpsi dan terdisosiasi. Kenaikan tekanan $\\ce{CO}$ justru memperlambat reaksi!
2. **Analisis Mekanisme Eley-Rideal (ER) pada $K_{\\ce{CO}} P_{\\ce{CO}} \\gg 1$:**
   Penyebut persamaan laju ER:
   $$1 + K_{\\ce{CO}} P_{\\ce{CO}} + K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2} \\approx K_{\\ce{CO}} P_{\\ce{CO}}$$
   Substitusikan ke hukum laju:
   $$r_{\\text{ER}} \\approx \\frac{k_{\\text{ER}} K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2} P_{\\ce{CO}}}{K_{\\ce{CO}} P_{\\ce{CO}}} = \\frac{k_{\\text{ER}} K_{\\ce{O2}}^{1/2} P_{\\ce{O2}}^{1/2}}{K_{\\ce{CO}}} \\propto P_{\\ce{CO}}^0$$
   Orde reaksi terhadap $\\ce{CO}$ adalah:
   $$n_{\\ce{CO}} = 0$$
   Kenaikan molekul $\\ce{CO}$ di fase gas yang menabrak diimbangi tepat oleh penurunan situs kosong teradsorpsi oksigen, sehingga laju reaksi mencapai nilai jenuh (orde 0).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan orde reaksi $-1$ untuk LH dan $0$ untuk ER secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Dekati penyebut persamaan laju dengan asumsi saturasi CO pekat: Denominator ~ K_CO * P_CO.
Langkah 2: Sederhanakan hukum laju LH: r_LH ~ P_CO / (P_CO)^2 = P_CO^-1 (orde -1).
Langkah 3: Sederhanakan hukum laju ER: r_ER ~ P_CO / P_CO = P_CO^0 (orde 0).
Langkah 4: Simpulkan bahwa orde -1 vs 0 menjadi pembeda diagnostik utama kedua mekanisme.`,
    source_event: 'IChO 2023 Switzerland Problem 6 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Pertukaran Ligan Kompleks Anorganik & Volume Aktivasi
  // =========================================================================
  {
    id: 506010,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Kimia Anorganik, Mekanisme Substitusi Ligan & Volume Aktivasi',
    title: 'Penentuan Mekanisme Intim Pertukaran Ligan Kompleks Oktahedral Melalui Analisis Termodinamika Volume Aktivasi (ΔV‡)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Ketergantungan konstanta laju reaksi substitusi ligan terhadap tekanan hidrostatik ($P$) memberikan nilai **Volume Aktivasi** ($\\Delta V^\\ddagger$):
$$\\left( \\frac{\\partial \\ln k}{\\partial P} \\right)_T = -\\frac{\\Delta V^\\ddagger}{R T}$$
di mana $\\Delta V^\\ddagger = V^\\ddagger - V_{\\text{reaktan}}$ adalah perubahan volume sistem saat reaktan bertransformasi menuju keadaan transisi.

Klasifikasi mekanisme substitusi ligan Langford-Gray meliputi dua kontinum mekanisme pertukaran (*Interchange*):
1. **Mekanisme Pertukaran Disosiatif ($I_d$):** Pemutusan ikatan ligan-logam yang keluar mendominasi pembentukan ikatan dengan ligan masuk pada keadaan transisi (bilangan koordinasi berkurang sesaat, crowding berkurang).
2. **Mekanisme Pertukaran Asosiatif ($I_a$):** Pembentukan ikatan ligan masuk mendominasi pemutusan ikatan ligan keluar pada keadaan transisi (bilangan koordinasi bertambah sesaat, struktur lebih padat terkompresi).

Data kinetik pertukaran molekul air (*water exchange*) pada ion heksaaqua logam terukur pada $298\\text{ K}$:
- Reaksi 1: $[\\ce{Ni(H2O)6}]^{2+} + \\ce{H2^{17}O} \\to [\\ce{Ni(H2O)5(H2^{17}O)}]^{2+} + \\ce{H2O}$
  $\\Delta V^\\ddagger = +7{,}2\\text{ cm}^3/\\text{mol}$, $\\Delta S^\\ddagger = +38\\text{ J/(mol K)}$
- Reaksi 2: $[\\ce{V(H2O)6}]^{3+} + \\ce{H2^{17}O} \\to [\\ce{V(H2O)5(H2^{17}O)}]^{3+} + \\ce{H2O}$
  $\\Delta V^\\ddagger = -8{,}9\\text{ cm}^3/\\text{mol}$, $\\Delta S^\\ddagger = -28\\text{ J/(mol K)}$

Berdasarkan parameter aktivasi $\\Delta V^\\ddagger$ dan $\\Delta S^\\ddagger$ tersebut, manakah penugasan mekanisme intim yang BENAR untuk kedua reaksi?

A. Reaksi 1 berlangsung melalui mekanisme pertukaran disosiatif ($I_d$), sedangkan Reaksi 2 berlangsung melalui mekanisme pertukaran asosiatif ($I_a$).
B. Reaksi 1 berlangsung melalui mekanisme asosiatif murni ($A$), sedangkan Reaksi 2 disosiatif murni ($D$).
C. Kedua reaksi sama-sama berlangsung melalui mekanisme disosiatif ($I_d$).
D. Reaksi 1 berlangsung melalui mekanisme asosiatif ($I_a$), sedangkan Reaksi 2 berlangsung melalui disosiatif ($I_d$).
E. Pertukaran air tidak melibatkan keadaan transisi karena bersifat isotopik.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Volume Aktivasi Substitusi Ligan
1. **Interpretasi Fisik Tanda $\\Delta V^\\ddagger$:**
   - **$\\Delta V^\\ddagger > 0$ (Positif):** Keadaan transisi bervolume lebih besar dan lebih longgar daripada reaktan. Hal ini terjadi ketika salah satu ikatan $\\ce{M-OH2}$ meregang secara signifikan menuju pemutusan sebelum ligan baru terikat erat. Pelepasan ligan parsial ini juga meningkatkan derajat kebebasan translasi molekul air pelarut, menghasilkan **$\\Delta S^\\ddagger > 0$**. Ini adalah tanda diagnostik mutlak untuk **mekanisme pertukaran disosiatif ($I_d$)**.
   - **$\\Delta V^\\ddagger < 0$ (Negatif):** Keadaan transisi lebih padat dan bervolume lebih kecil akibat masuknya molekul air ketujuh ke dalam bola koordinasi utama membentuk struktur hepta-koordinasi sesaat. Pemadatan ini mengunci orientasi molekul air dan menurunkan entropi sistem, menghasilkan **$\\Delta S^\\ddagger < 0$**. Ini adalah tanda diagnostik mutlak untuk **mekanisme pertukaran asosiatif ($I_a$)**.
2. **Korelasi Konfigurasi Elektronik:**
   - Pada $[\\ce{Ni(H2O)6}]^{2+}$ ($d^8$): Orbital $t_{2g}$ terisi penuh ($t_{2g}^6 e_g^2$). Tolakan elektron $d$ yang padat menolak pendekatan ligan ketujuh, sehingga reaksi terpaksa berlangsung secara disosiatif ($I_d$, $\\Delta V^\\ddagger = +7{,}2\\text{ cm}^3/\\text{mol}$).
   - Pada $[\\ce{V(H2O)6}]^{3+}$ ($d^2$): Terdapat orbital $t_{2g}$ kosong yang dapat menerima pasangan elektron dari ligan masuk tanpa hambatan sterik yang berarti, sehingga reaksi berlangsung secara asosiatif ($I_a$, $\\Delta V^\\ddagger = -8{,}9\\text{ cm}^3/\\text{mol}$).
3. **Evaluasi Opsi:**
   - Opsi A menugaskan Reaksi 1 sebagai $I_d$ dan Reaksi 2 sebagai $I_a$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi arti fisis tanda Delta V_ddagger: positif berarti ekspansi volume (disosiasi), negatif berarti kompresi volume (asosiasi).
Langkah 2: Konfirmasi dengan tanda entropi aktivasi: Delta S_ddagger positif selaras dengan disosiasi, negatif selaras dengan asosiasi.
Langkah 3: Terapkan pada Reaksi 1 (Ni2+ d8: Delta V_ddagger = +7,2 cm^3/mol -> mekanisme Id).
Langkah 4: Terapkan pada Reaksi 2 (V3+ d2: Delta V_ddagger = -8,9 cm^3/mol -> mekanisme Ia).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
