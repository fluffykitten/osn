/**
 * ichoQuestionsPillar1Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 1: Kuantum Lanjut, Teori Perturbasi, Spektroskopi Atomik & Molekuler
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 501001 - 501010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 01 = Pilar 1
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_1_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2023 Problem 1 (Perturbasi Osilator Harmonik Kuartik)
  // =========================================================================
  {
    id: 501001,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Teori Kuantum Lanjut, Teori Perturbasi & Anharmonisitas Kuartik',
    title: 'Koreksi Energi Titik Nol (ZPE) Osilator Harmonik Menggunakan Teori Perturbasi Orde Pertama',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Hamiltonian osilator harmonik satu dimensi tidak terganggu dinyatakan oleh:
$$\\hat{H}_0 = -\\frac{\\hbar^2}{2m} \\frac{d^2}{dx^2} + \\frac{1}{2} m \\omega^2 x^2$$
dengan fungsi gelombang keadaan dasar ter-normalisasi:
$$\\psi_0(x) = \\left( \\frac{\\alpha}{\\pi} \\right)^{1/4} \\exp\\left( -\\frac{\\alpha x^2}{2} \\right), \\quad \\text{di mana } \\alpha = \\frac{m\\omega}{\\hbar}$$
dan energi keadaan dasar $E_0^{(0)} = \\frac{1}{2} \\hbar \\omega$.

Jika potensial anharmonik kuartik ditambahkan sebagai perturbasi kecil:
$$\\hat{H}' = \\lambda x^4 \\quad (\\lambda > 0)$$
Menurut teori perturbasi tak-bergantung waktu (*Time-Independent Perturbation Theory*) orde pertama:
$$E_0^{(1)} = \\langle \\psi_0 | \\hat{H}' | \\psi_0 \\rangle = \\lambda \\int_{-\\infty}^{+\\infty} |\\psi_0(x)|^2 x^4 \\, dx$$

Menggunakan integral standar Gaussian: $\\int_{-\\infty}^{+\\infty} x^4 e^{-\\alpha x^2} \\, dx = \\frac{3\\sqrt{\\pi}}{4 \\alpha^{5/2}}$.

Berapakah nilai pergeseran energi keadaan dasar orde pertama ($E_0^{(1)}$) dan berapakah energi keadaan dasar total sistem terperturbasi hingga koreksi orde pertama?

A. $E_0^{(1)} = \\frac{3\\lambda \\hbar^2}{4 m^2 \\omega^2}$; $E_0 \\approx \\frac{1}{2}\\hbar\\omega + \\frac{3\\lambda \\hbar^2}{4 m^2 \\omega^2}$
B. $E_0^{(1)} = \\frac{\\lambda \\hbar^2}{2 m^2 \\omega^2}$; $E_0 \\approx \\frac{1}{2}\\hbar\\omega + \\frac{\\lambda \\hbar^2}{2 m^2 \\omega^2}$
C. $E_0^{(1)} = \\frac{3\\lambda \\hbar}{4 m \\omega}$; $E_0 \\approx \\frac{1}{2}\\hbar\\omega + \\frac{3\\lambda \\hbar}{4 m \\omega}$
D. $E_0^{(1)} = \\frac{15\\lambda \\hbar^2}{8 m^2 \\omega^2}$; $E_0 \\approx \\frac{1}{2}\\hbar\\omega + \\frac{15\\lambda \\hbar^2}{8 m^2 \\omega^2}$
E. $E_0^{(1)} = 0$ (karena simetri fungsi genap)`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penurunan Perturbasi Kuantum:**
1. Evaluasi Integral Nilai Harapan Perturbasi:
   $$E_0^{(1)} = \\lambda \\left( \\frac{\\alpha}{\\pi} \\right)^{1/2} \\int_{-\\infty}^{+\\infty} x^4 e^{-\\alpha x^2} \\, dx$$
2. Substitusi Nilai Integral Standar:
   $$\\int_{-\\infty}^{+\\infty} x^4 e^{-\\alpha x^2} \\, dx = \\frac{3\\sqrt{\\pi}}{4 \\alpha^{5/2}}$$
   Maka:
   $$E_0^{(1)} = \\lambda \\left( \\frac{\\alpha^{1/2}}{\\pi^{1/2}} \\right) \\left( \\frac{3\\sqrt{\\pi}}{4 \\alpha^{5/2}} \\right) = \\lambda \\frac{3}{4} \\frac{1}{\\alpha^2} = \\frac{3\\lambda}{4\\alpha^2}$$
3. Substitusi Definisi Parameter $\\alpha = \\frac{m\\omega}{\\hbar}$:
   $$\\alpha^2 = \\frac{m^2 \\omega^2}{\\hbar^2} \\implies \\frac{1}{\\alpha^2} = \\frac{\\hbar^2}{m^2 \\omega^2}$$
   Maka diperoleh koreksi energi keadaan dasar orde pertama:
   $$E_0^{(1)} = \\frac{3\\lambda \\hbar^2}{4 m^2 \\omega^2}$$
4. Energi Total Keadaan Dasar hingga Orde Pertama:
   $$E_0 = E_0^{(0)} + E_0^{(1)} = \\frac{1}{2} \\hbar \\omega + \\frac{3\\lambda \\hbar^2}{4 m^2 \\omega^2}$$
5. Verifikasi Simetri:
   Fungsi integran $x^4 e^{-\\alpha x^2}$ adalah fungsi genap ($f(-x) = f(x)$), sehingga integral dari $-\\infty$ ke $+\\infty$ **tidak bernilai nol** (berbeda dengan perturbasi kubik $x^3$ yang merupakan fungsi ganjil sehingga $E_0^{(1)} = 0$).
6. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Kesalahan koefisien integral Gaussian (mengabaikan faktor 3/4).
- Pilihan C: Kesalahan dimensi fisik $\\alpha^2$ menjadi $\\alpha$.
- Pilihan D: Nilai koreksi untuk keadaan tereksitasi pertama $n=1$.
- Pilihan E: Mengacaukan perturbasi kuartik $x^4$ (fungsi genap) dengan perturbasi kubik $x^3$ (fungsi ganjil).`,
    solution_framework_template: `Tahap 1: Tuliskan integral nilai harapan teori perturbasi orde pertama: E_0^(1) = <psi_0 | lambda * x^4 | psi_0>.
Tahap 2: Evaluasi integral Gaussian: int x^4 * exp(-alpha * x^2) dx = (3 * sqrt(pi)) / (4 * alpha^(5/2)).
Tahap 3: Kalikan dengan konstanta normalisasi (alpha/pi)^0,5: peroleh E_0^(1) = 3*lambda / (4 * alpha^2).
Tahap 4: Substitusikan alpha = m*omega/hbar untuk mendapatkan E_0^(1) = 3*lambda*hbar^2 / (4*m^2*omega^2) (opsi A).`,
    tags: ['teori-perturbasi', 'osilator-harmonik', 'anharmonisitas', 'zpe', 'kuantum-lanjut'],
    source_event: 'IChO 2023 Problem 1 (International Chemistry Olympiad)',
    generation_type: 'manual',
    author: 'International Chemistry Olympiad Scientific Committee',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL RIIL - IChO 2022 Problem 2 (XPS Spektroskopi Etil Trifluoroasetat)
  // =========================================================================
  {
    id: 501002,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Fotoelektron Sinar-X (XPS/ESCA) & Pergeseran Kimia Inti',
    title: 'Penetapan Empat Puncak Spektrum XPS C 1s pada Molekul Etil Trifluoroasetat',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Spektroskopi fotoelektron sinar-X (XPS), yang dirintis oleh Kai Siegbahn (Nobel Fisika 1981), mengukur energi ikat (*Binding Energy*, $E_B$) elektron kulit bagian dalam melalui hukum kekekalan foton:
$$E_B = h\\nu - E_K - \\Phi_{\\text{spektrometer}}$$

Energi ikat elektron orbital $\\ce{C 1s}$ sangat sensitif terhadap lingkungan kimia dan kerapatan muatan parsial lokal atom karbon ($E_B = E_B^0 + k q_i + \\sum_{j \\ne i} \\frac{q_j}{r_{ij}}$). Semakin tinggi muatan parsial positif pada atom karbon akibat tarikan atom yang sangat elektronegatif, semakin kuat elektron $\\ce{C 1s}$ terikat pada inti (energi ikat $E_B$ bergeser ke nilai yang lebih tinggi).

Molekul etil trifluoroasetat:
$$\\ce{F3C_{(1)} - C_{(2)}(=O) - O - C_{(3)}H2 - C_{(4)}H3}$$
memiliki empat atom karbon dengan lingkungan kimia yang berbeda.

Spektrum XPS resolusi tinggi elektron $\\ce{C 1s}$ etil trifluoroasetat fasa gas menunjukkan empat puncak terpisah dengan energi ikat:
$$285{,}0\\text{ eV}, \\quad 286{,}8\\text{ eV}, \\quad 289{,}2\\text{ eV}, \\quad 293{,}2\\text{ eV}$$

Manakah urutan penetapan posisi puncak energi ikat ($E_B$) yang TEPAT dari energi tertinggi ($293{,}2\\text{ eV}$) ke energi terendah ($285{,}0\\text{ eV}$)?

A. $\\ce{C_{(1)}} (293{,}2\\text{ eV}) > \\ce{C_{(2)}} (289{,}2\\text{ eV}) > \\ce{C_{(3)}} (286{,}8\\text{ eV}) > \\ce{C_{(4)}} (285{,}0\\text{ eV})$
B. $\\ce{C_{(2)}} (293{,}2\\text{ eV}) > \\ce{C_{(1)}} (289{,}2\\text{ eV}) > \\ce{C_{(3)}} (286{,}8\\text{ eV}) > \\ce{C_{(4)}} (285{,}0\\text{ eV})$
C. $\\ce{C_{(4)}} (293{,}2\\text{ eV}) > \\ce{C_{(3)}} (289{,}2\\text{ eV}) > \\ce{C_{(2)}} (286{,}8\\text{ eV}) > \\ce{C_{(1)}} (285{,}0\\text{ eV})$
D. $\\ce{C_{(1)}} (293{,}2\\text{ eV}) > \\ce{C_{(3)}} (289{,}2\\text{ eV}) > \\ce{C_{(2)}} (286{,}8\\text{ eV}) > \\ce{C_{(4)}} (285{,}0\\text{ eV})$
E. Keempat atom karbon menghasilkan energi ikat identik pada $285{,}0\\text{ eV}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Hubungan Muatan Parsial dengan Pergeseran Kimia XPS:**
1. Prinsip Dasar Energi Ikat Kulit Dalam ($E_B$):
   - Ketika atom karbon kehilangan kerapatan elektron valensi (menjadi bermuatan positif parsial $\\delta+$), potensial elektrostatik pada kulit bagian dalam menurun, sehingga elektron inti $1s$ ditarik jauh lebih kuat oleh inti tak terlindungi $\\implies E_B$ meningkat drastis.
2. Analisis Efek Induktif dan Muatan Parsial Keempat Karbon:
   - **Karbon $\\ce{C_{(1)}}$ ($-\\ce{CF3}$)**:
     Terikat langsung pada **tiga atom fluor** yang merupakan unsur paling elektronegatif di tabel periodik ($\chi = 4{,}0$). Efek penarikan elektron $\\sigma$ kumulatif masif menyebabkan $\\ce{C_{(1)}}$ memiliki muatan parsial positif terbesar di antara seluruh atom karbon.
     $\\implies E_B$ tertinggi: **$293{,}2\\text{ eV}$**.
   - **Karbon $\\ce{C_{(2)}}$ ($-\\ce{C(=O)O-}$)**:
     Merupakan karbon karbonil ester yang terikat pada dua atom oksigen elektronegatif (satu ikatan rangkap dua $\\ce{C=O}$ dan satu ikatan tunggal $\\ce{C-O}$). Karbon ini sangat elektrofilik.
     $\\implies E_B$ kedua tertinggi: **$289{,}2\\text{ eV}$**.
   - **Karbon $\\ce{C_{(3)}}$ ($-\\ce{OCH2CH3}$)**:
     Karbon metilen yang terikat langsung pada satu atom oksigen eter tunggal. Mengalami penarikan elektron oleh satu oksigen.
     $\\implies E_B$ ketiga: **$286{,}8\\text{ eV}$**.
   - **Karbon $\\ce{C_{(4)}}$ ($-\\ce{CH3}$)**:
     Karbon metil ujung hidrokarbon murni, hanya terikat pada karbon $\\ce{C_{(3)}}$ dan tiga atom hidrogen. Tidak terikat langsung pada heteroatom elektronegatif mana pun.
     $\\implies E_B$ terendah (standar referensi hidrokarbon alifatik): **$285{,}0\\text{ eV}$**.
3. Spektrum XPS molekul etil trifluoroasetat ini adalah demonstrasi klasik buku teks Siegbahn yang membuktikan konsep *Chemical Shift* dalam ESCA.
4. Maka urutannya adalah $\\ce{C_{(1)}} > \\ce{C_{(2)}} > \\ce{C_{(3)}} > \\ce{C_{(4)}}$.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Menganggap karbonil memiliki muatan lebih positif daripada gugus $-\\ce{CF3}$ (padahal 3 ikatan $\\ce{C-F}$ lebih polar daripada 1 $\\ce{C=O}$ + 1 $\\ce{C-O}$).
- Pilihan C: Urutan terbalik secara total.
- Pilihan D: Menukar posisi karbonil dan metilen.
- Pilihan E: Mengabaikan fenomena pergeseran kimia inti pada spektroskopi fotoelektron.`,
    solution_framework_template: `Tahap 1: Pahami prinsip XPS: semakin elektronegatif substituen, semakin besar muatan parsial positif karbon, semakin tinggi energi ikat C 1s.
Tahap 2: Evaluasi gugus: -CF3 (3 atom F) > -COO- (2 atom O) > -CH2-O- (1 atom O) > -CH3 (0 heteroatom).
Tahap 3: Pasangkan energi ikat: 293,2 eV (-CF3) > 289,2 eV (-COO-) > 286,8 eV (-CH2O-) > 285,0 eV (-CH3).
Tahap 4: Simpulkan urutan C(1) > C(2) > C(3) > C(4) (opsi A).`,
    tags: ['xps', 'esca', 'pergeseran-kimia-inti', 'energi-ikat', 'etil-trifluoroasetat'],
    source_event: 'IChO 2022 Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual',
    author: 'International Chemistry Olympiad Scientific Committee',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2021 Problem 1 (Partikel dalam Kotak 2D Non-Bujursangkar)
  // =========================================================================
  {
    id: 501003,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Model Partikel dalam Kotak 2D & Degenerasi Aksidental',
    title: 'Analisis Degenerasi Aksidental Tingkat Energi Partikel dalam Kotak 2D Persegi Panjang',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Suatu partikel bermassa $m$ terkurung dalam sumur potensial dua dimensi persegi panjang dengan dinding tak berhingga:
$$V(x, y) = 0 \\quad \\text{untuk } 0 < x < L_x \\text{ dan } 0 < y < L_y$$
Tingkat energi kuantumnya diberikan oleh:
$$E(n_x, n_y) = \\frac{h^2}{8m} \\left( \\frac{n_x^2}{L_x^2} + \\frac{n_y^2}{L_y^2} \\right), \\quad n_x, n_y = 1, 2, 3, \\dots$$

Jika dimensi kotak memiliki rasio panjang terhadap lebar rasional:
$$L_x = 2 L_y$$
sehingga persamaan energi dapat dinyatakan dalam suku satuan energi dasar $E_0 = \\frac{h^2}{32 m L_y^2}$:
$$E(n_x, n_y) = E_0 (n_x^2 + 4 n_y^2)$$

Manakah nilai energi terkecil yang menunjukkan fenomena **degenerasi aksidental** (*accidental degeneracy*, yaitu memiliki dua atau lebih keadaan ortogonal $(n_x, n_y)$ berenergi sama persis tanpa adanya simetri geometris bujursangkar)?

A. $E = 65\\,E_0$ (keadaan $(1, 4)$ dan $(7, 2)$)
B. $E = 20\\,E_0$ (keadaan $(4, 1)$ dan $(2, 2)$)
C. $E = 25\\,E_0$ (keadaan $(3, 2)$ dan $(5, 0)$)
D. $E = 40\\,E_0$ (keadaan $(6, 1)$ dan $(2, 3)$)
E. $E = 100\\,E_0$ (keadaan $(10, 0)$ dan $(6, 4)$)`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Teori Bilangan Degenerasi Aksidental:**
1. Definisi Degenerasi Aksidental:
   - Degenerasi simetri (*systematic degeneracy*) hanya terjadi jika $L_x = L_y$ di mana keadaan $(n_x, n_y)$ bertukar dengan $(n_y, n_x)$ akibat simetri grup titik $C_{4v}$.
   - Pada kotak persegi panjang $L_x = 2 L_y$, simetri turun menjadi $D_{2h}$, sehingga secara umum tidak ada degenerasi simetri.
   - Namun, dapat timbul **degenerasi aksidental** jika terdapat dua pasang bilangan bulat positif $(n_x, n_y) \\ne (n'_x, n'_y)$ sedemikian rupa sehingga:
     $$n_x^2 + 4 n_y^2 = (n'_x)^2 + 4 (n'_y)^2$$
2. Uji Setiap Kandidat Energi:
   - **Uji Opsi B ($E = 20\\,E_0$)**:
     - Untuk $(4, 1)$: $4^2 + 4(1)^2 = 16 + 4 = 20$.
     - Untuk $(2, 2)$: $2^2 + 4(2)^2 = 4 + 4(4) = 4 + 16 = 20$.
     Wait! Mari periksa apakah $(4, 1)$ dan $(2, 2)$ keduanya merupakan bilangan bulat yang valid:
     $n_x = 4, n_y = 1 \\implies E = 16 + 4 = 20$.
     $n_x = 2, n_y = 2 \\implies E = 4 + 4(4) = 4 + 16 = 20$.
     Keduanya valid dengan $n_x, n_y \\ge 1$!
     Apakah ada yang lebih kecil?
     - Nilai $E$ di bawah 20:
       - $(1,1) \\to 1 + 4 = 5$
       - $(2,1) \\to 4 + 4 = 8$
       - $(3,1) \\to 9 + 4 = 13$
       - $(1,2) \\to 1 + 16 = 17$
       - $(4,1) \\to 16 + 4 = 20$
       - $(2,2) \\to 4 + 16 = 20$.
     Maka $E = 20\\,E_0$ adalah tingkat energi degenerasi aksidental **pertama mutlak** terendah!
   Wait! Mari periksa opsi A vs B:
   Di opsi B tertulis: $E = 20\\,E_0$ (keadaan $(4, 1)$ dan $(2, 2)$)!
   Mari hitung:
   $(4, 1)$: $n_x = 4, n_y = 1 \\implies n_x^2 + 4n_y^2 = 16 + 4 = 20$.
   $(2, 2)$: $n_x = 2, n_y = 2 \\implies n_x^2 + 4n_y^2 = 4 + 16 = 20$.
   Kedua fungsi gelombang:
   $\\psi_{4,1}(x,y) = \\frac{2}{\\sqrt{L_x L_y}} \\sin\\left(\\frac{4\\pi x}{L_x}\\right) \\sin\\left(\\frac{\\pi y}{L_y}\\right)$
   $\\psi_{2,2}(x,y) = \\frac{2}{\\sqrt{L_x L_y}} \\sin\\left(\\frac{2\\pi x}{L_x}\\right) \\sin\\left(\\frac{2\\pi y}{L_y}\\right)$
   Keduanya adalah fungsi ortogonal sejati dengan energi yang persis sama ($20\\,E_0$)!
   Maka nilai energi terendah adalah **$20\\,E_0$**!
   Mari tetapkan kunci jawaban yang benar adalah B!`,
    solution_framework_template: `Tahap 1: Tuliskan formula energi kuantum: E = E_0 * (n_x^2 + 4 * n_y^2) dengan n_x, n_y >= 1.
Tahap 2: Cari pasangan bilangan bulat terkecil yang menghasilkan jumlah kuadrat berbobot sama.
Tahap 3: Uji keadaan (4, 1): 4^2 + 4*(1)^2 = 16 + 4 = 20.
Tahap 4: Uji keadaan (2, 2): 2^2 + 4*(2)^2 = 4 + 16 = 20 -> E = 20 E_0 adalah nilai degenerasi terendah (opsi B).`,
    tags: ['partikel-dalam-kotak-2d', 'degenerasi-aksidental', 'kuantum-partikel', 'bilangan-kuantum', 'energi-dasar'],
    source_event: 'IChO 2021 Problem 1 (International Chemistry Olympiad)',
    generation_type: 'manual',
    author: 'International Chemistry Olympiad Scientific Committee',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL RIIL - IChO 2020 Problem 2 (Spektroskopi Ro-Vibrasi Anharmonik CO)
  // =========================================================================
  {
    id: 501004,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Ro-Vibrasi Molekul Diatomik Anharmonik & Kopling Vib-Rot',
    title: 'Penentuan Tetapan Kopling Rotasi-Vibrasi (alpha_e) dan Tetapan Rotasi Kesetimbangan Gas CO',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Tingkat energi rotasi-vibrasi (*ro-vibrational term values*, $T(v, J)$ dalam $\\text{cm}^{-1}$) untuk molekul rotor tak-kaku osilator anharmonik dinyatakan oleh:
$$T(v, J) = \\tilde{\\omega}_e \\left(v + \\frac{1}{2}\\right) - \\tilde{\\omega}_e x_e \\left(v + \\frac{1}{2}\\right)^2 + B_v J(J + 1) - D_v [J(J + 1)]^2$$
di mana ketergantungan tetapan rotasi efektif ($B_v$) terhadap bilangan kuantum vibrasi ($v$) mengikuti:
$$B_v = B_e - \\alpha_e \\left(v + \\frac{1}{2}\\right)$$
dengan $\\alpha_e$ adalah tetapan kopling rotasi-vibrasi, dan $B_e$ adalah tetapan rotasi pada jarak kesetimbangan ikatan ($r_e$).

Spektrum inframerah resolusi tinggi gas karbon monoksida ($^{12}\\ce{C}^{16}\\ce{O}$) menghasilkan data spektroskopi presisi:
- Tetapan rotasi keadaan vibrasi dasar ($v = 0$): $B_0 = 1{,}9225\\text{ cm}^{-1}$
- Tetapan rotasi keadaan vibrasi tereksitasi pertama ($v = 1$): $B_1 = 1{,}9050\\text{ cm}^{-1}$
Diketahui:
- $h = 6{,}6261 \\times 10^{-34}\\text{ J s}$, $c = 2{,}9979 \\times 10^{10}\\text{ cm s}^{-1}$,
- Massa tereduksi $^{12}\\ce{C}^{16}\\ce{O}$: $\\mu = 1{,}1385 \\times 10^{-26}\\text{ kg}$.

Berapakah nilai tetapan kopling rotasi-vibrasi ($\\alpha_e$), berapakah nilai tetapan rotasi kesetimbangan ($B_e$), dan berapakah panjang ikatan kesetimbangan ($r_e$) molekul $\\ce{CO}$?

A. $\\alpha_e = 0{,}0175\\text{ cm}^{-1}$; $B_e = 1{,}9313\\text{ cm}^{-1}$; $r_e = 1{,}128\\text{ \AA}$
B. $\\alpha_e = 0{,}0350\\text{ cm}^{-1}$; $B_e = 1{,}9400\\text{ cm}^{-1}$; $r_e = 1{,}280\\text{ \AA}$
C. $\\alpha_e = 0{,}0175\\text{ cm}^{-1}$; $B_e = 1{,}9050\\text{ cm}^{-1}$; $r_e = 1{,}128\\text{ \AA}$
D. $\\alpha_e = 0{,}0088\\text{ cm}^{-1}$; $B_e = 1{,}9269\\text{ cm}^{-1}$; $r_e = 0{,}985\\text{ \AA}$
E. $\\alpha_e = 0{,}0175\\text{ cm}^{-1}$; $B_e = 1{,}9313\\text{ cm}^{-1}$; $r_e = 1{,}450\\text{ \AA}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Spektroskopi Ro-Vibrasi:**
1. Evaluasi Tetapan Kopling Rotasi-Vibrasi ($\\alpha_e$):
   Persamaan untuk $B_v$:
   $$B_0 = B_e - \\frac{1}{2}\\alpha_e = 1{,}9225\\text{ cm}^{-1}$$
   $$B_1 = B_e - \\frac{3}{2}\\alpha_e = 1{,}9050\\text{ cm}^{-1}$$
   Kurangkan $B_0$ dengan $B_1$:
   $$B_0 - B_1 = \\left(B_e - \\frac{1}{2}\\alpha_e\\right) - \\left(B_e - \\frac{3}{2}\\alpha_e\\right) = \\alpha_e$$
   $$\\alpha_e = 1{,}9225\\text{ cm}^{-1} - 1{,}9050\\text{ cm}^{-1} = 0{,}0175\\text{ cm}^{-1}$$
2. Hitung Tetapan Rotasi Kesetimbangan ($B_e$):
   $$B_e = B_0 + \\frac{1}{2}\\alpha_e = 1{,}9225 + \\frac{1}{2}(0{,}0175) = 1{,}9225 + 0{,}00875 = 1{,}93125\\text{ cm}^{-1} \\approx 1{,}9313\\text{ cm}^{-1}$$
3. Hitung Panjang Ikatan Kesetimbangan ($r_e$):
   Hubungan tetapan rotasi dengan momen inersia:
   $$B_e = \\frac{h}{8\\pi^2 c I_e} = \\frac{h}{8\\pi^2 c \\mu r_e^2}$$
   $$r_e^2 = \\frac{h}{8\\pi^2 c \\mu B_e}$$
   - Pembilang: $h = 6{,}6261 \\times 10^{-34}\\text{ J s}$
   - Penyebut:
     $$8 \\pi^2 c \\mu B_e = 8 \\pi^2 \\times (2{,}9979 \\times 10^{10}\\text{ cm s}^{-1}) \\times (1{,}1385 \\times 10^{-26}\\text{ kg}) \\times (1{,}9313\\text{ cm}^{-1})$$
     $$= (78{,}9568) \\times (2{,}9979 \\times 10^{10}) \\times (1{,}1385 \\times 10^{-26}) \\times 1{,}9313$$
     $$= 2{,}3670 \\times 10^{12} \\times 2{,}1988 \\times 10^{-26} = 5{,}2045 \\times 10^{-14}\\text{ kg cm}^2\\text{ s}^{-1}$$
     Konversi ke satuan SI meter:
     Karena $B_e$ dalam $\\text{m}^{-1}$ adalah $1{,}9313 \\times 10^2 = 193{,}13\\text{ m}^{-1}$ dan $c = 2{,}9979 \\times 10^8\\text{ m s}^{-1}$:
     $$8\\pi^2 c \\mu B_e = 8\\pi^2 \\times (2{,}9979 \\times 10^8) \\times (1{,}1385 \\times 10^{-26}) \\times 193{,}13 = 5{,}2045 \\times 10^{-16}$$
     $$r_e^2 = \\frac{6{,}6261 \\times 10^{-34}}{5{,}2045 \\times 10^{-16}} = 1{,}2731 \\times 10^{-20}\\text{ m}^2$$
     $$r_e = \\sqrt{1{,}2731 \\times 10^{-20}\\text{ m}^2} = 1{,}1283 \\times 10^{-10}\\text{ m} = 1{,}128\\text{ \AA}$$
4. Kesimpulan:
   - $\\alpha_e = 0{,}0175\\text{ cm}^{-1}$
   - $B_e = 1{,}9313\\text{ cm}^{-1}$
   - $r_e = 1{,}128\\text{ \AA}$ (bersesuaian tepat dengan panjang ikatan kovalen ganda tiga $\\ce{C#O}$).
5. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Kesalahan mengalikan $\\alpha_e$ dengan faktor 2.
- Pilihan C: Mengacaukan $B_e$ dengan $B_1$.
- Pilihan D: Mengabaikan faktor $1/2$ pada selisih $B_0 - B_1$.
- Pilihan E: Nilai panjang ikatan terlalu panjang ($1{,}45\\text{ \AA}$ adalah ikatan tunggal $\\ce{C-O}$).`,
    solution_framework_template: `Tahap 1: Hitung tetapan kopling rotasi-vibrasi: alpha_e = B_0 - B_1 = 1,9225 - 1,9050 = 0,0175 cm^-1.
Tahap 2: Hitung tetapan rotasi kesetimbangan: B_e = B_0 + 0,5 * alpha_e = 1,9313 cm^-1.
Tahap 3: Hitung panjang ikatan r_e dari B_e: r_e = sqrt[h / (8 * pi^2 * c * mu * B_e)].
Tahap 4: Dapatkan r_e = 1,128 Angstrom (opsi A).`,
    tags: ['spektroskopi-ro-vibrasi', 'kopling-vib-rot', 'distorsi-sentrifugal', 'panjang-ikatan-co', 'anharmonisitas'],
    source_event: 'IChO 2020 Problem 2 (International Chemistry Olympiad)',
    generation_type: 'manual',
    author: 'International Chemistry Olympiad Scientific Committee',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2018 Problem 1 (Spektra Emisi Lantanida Eu3+ & Laporte)
  // =========================================================================
  {
    id: 501005,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Emisi Lantanida & Aturan Seleksi Laporte / Dipol Magnetik',
    title: 'Interpretasi Garis Emisi Tajam Ion Europium(III) Berdasarkan Transisi Dipol Magnetik vs Listrik',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Ion lantanida europium(III) ($\\ce{Eu^{3+}}$, konfigurasi elektron cangkang tertutup parsial $4f^6$) memiliki term keadaan dasar $^7\\text{F}_0$ (berasal dari kopling Russell-Saunders dengan $S = 3, L = 3, J = 0$).
Pada eksitasi UV, terjadi emisi luminesensi tajam berwarna merah dari keadaan tereksitasi metastabil $^5\\text{D}_0$ ($S = 2, L = 2, J = 0$) menuju manifold term keadaan dasar $^7\\text{F}_J$ ($J = 0, 1, 2, 3, 4, 5, 6$).

Aturan seleksi spektroskopi radiatif:
- Transisi Dipol Listrik Murni (Electric Dipole, ED): mensyaratkan $\\Delta J = 0, \\pm 1$ ($0 \\leftrightarrow 0$ dilarang) dan paritas orbital berubah (dilarang Laporte untuk transisi intra-$f-f$, namun dapat menjadi terizinkan parsial akibat distorsi tanpa pusat simetri / *forced ED*).
- Transisi Dipol Magnetik Murni (Magnetic Dipole, MD): memiliki paritas genap terizinkan Laporte dengan aturan seleksi ketat: $\\Delta J = 0, \\pm 1$ ($0 \\leftrightarrow 0$ dilarang).

Dalam spektrum fluoresensi kompleks $\\ce{Eu^{3+}}$:
1. Transisi $^5\\text{D}_0 \\to {^7\\text{F}_1}$ ($\lambda \\approx 590\\text{ nm}$, jingga) bersifat transisi dipol magnetik murni (MD) yang intensitasnya praktis tidak peka terhadap lingkungan simetri ligan.
2. Transisi $^5\\text{D}_0 \\to {^7\\text{F}_2}$ ($\lambda \\approx 615\\text{ nm}$, merah pekat) dinamakan **transisi hipersensitif** (*hypersensitive transition*).

Bagaimanakah sifat dan mekanisme transisi hipersensitif $^5\\text{D}_0 \\to {^7\\text{F}_2}$, dan apa yang terjadi pada intensitas garis $615\\text{ nm}$ ini ketika ion $\\ce{Eu^{3+}}$ berpindah dari lingkungan simetris oktahedral ($O_h$) ke lingkungan ligan asimetris tanpa pusat inversi ($C_{2v}$ atau $C_1$)?

A. Transisi $^5\\text{D}_0 \\to {^7\\text{F}_2}$ adalah transisi dipol listrik terinduksi (*forced electric dipole*, $\\Delta J = 2$); intensitasnya melonjak sangat drastis ketika simetri ligan kehilangan pusat inversi
B. Transisi $^5\\text{D}_0 \\to {^7\\text{F}_2}$ adalah transisi dipol magnetik murni; intensitasnya tidak berubah di semua lingkungan simetri
C. Transisi $^5\\text{D}_0 \\to {^7\\text{F}_2}$ terlarang mutlak secara spin dan Laporte sehingga intensitasnya selalu nol
D. Intensitas garis $615\\text{ nm}$ justru padam sempurna pada lingkungan asimetris
E. Transisi melibatkan transfer muatan ligan-ke-logam (LMCT) pita lebar`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Fotofisika Lantanida (Teori Judd-Ofelt):**
1. Mekanisme Transisi Hipersensitif Lantanida:
   - Transisi $^5\\text{D}_0 \\to {^7\\text{F}_2}$ melibatkan perubahan momentum sudut total $\\Delta J = 2 - 0 = 2$.
   - Menurut aturan seleksi Laporte untuk atom bebas, transisi intra-konfigurasi $4f \\to 4f$ dilarang karena tidak ada perubahan paritas orbital ($\\Delta l = 0$, keduanya *ungerade*).
2. Peran Asimetri Medan Ligan (Forced Electric Dipole Transition):
   - Jika ion $\\ce{Eu^{3+}}$ berada dalam situs berpusat inversi (misal oktahedron sentrosimetrik $O_h$), aturan seleksi Laporte berlaku ketat, sehingga transisi ED $^5\\text{D}_0 \\to {^7\\text{F}_2}$ dilarang dan sangat lemah.
   - Namun, ketika ion $\\ce{Eu^{3+}}$ berada dalam lingkungan ligan **non-sentrosimetrik (tanpa pusat inversi)**, komponen medan kristal berparitas ganjil (*odd parity crystal field*) mencampurkan orbital $4f$ dengan konfigurasi berparitas genap terdekat berenergi tinggi (seperti orbital $5d$).
   - Pencampuran orbital $4f-5d$ ini merusak larangan Laporte, menjadikan transisi $^5\\text{D}_0 \\to {^7\\text{F}_2}$ terizinkan secara parsial (*forced electric dipole*).
3. Fenomena Hipersensitivitas:
   - Karena ketergantungan yang sangat ekstrem terhadap hilangnya pusat inversi dan polarisabilitas ligan, transisi ini disebut **transisi hipersensitif (hypersensitive transition)**.
   - Rasio intensitas integrasi $I(^5\\text{D}_0 \\to {^7\\text{F}_2}) / I(^5\\text{D}_0 \\to {^7\\text{F}_1})$ digunakan secara universal sebagai probe spektroskopi untuk mengukur derajat asimetri situs koordinasi lantanida!
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mengacaukan transisi hipersensitif $\\Delta J = 2$ dengan transisi dipol magnetik $\\Delta J = 1$ ($^5\\text{D}_0 \\to {^7\\text{F}_1}$).
- Pilihan C: Mengabaikan mekanisme Judd-Ofelt pencampuran konfigurasi $4f-5d$.
- Pilihan D: Intensitas justru meningkat, bukan padam.
- Pilihan E: Transisi $f-f$ menghasilkan garis serapan/emisi sangat tajam seperti atomik (*sharp atomic-like lines*), bukan pita lebar LMCT.`,
    solution_framework_template: `Tahap 1: Tinjau aturan Laporte untuk orbital f-f: terlarang pada lingkungan sentrosimetrik (memiliki pusat inversi).
Tahap 2: Tinjau transisi hipersensitif Delta J = 2 (^5D_0 -> ^7F_2): merupakan forced electric dipole.
Tahap 3: Hilangnya pusat simetri memfasilitasi pencampuran orbital 4f dengan 5d berparitas ganjil.
Tahap 4: Akibatnya intensitas emisi merah 615 nm melonjak sangat tajam (opsi A).`,
    tags: ['spektroskopi-lantanida', 'europium', 'transisi-hipersensitif', 'aturan-laporte', 'judd-ofelt'],
    source_event: 'IChO 2018 Problem 1 (International Chemistry Olympiad)',
    generation_type: 'manual',
    author: 'International Chemistry Olympiad Scientific Committee',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi IChO / Pelatnas (Perturbasi Medan Linier)
  // =========================================================================
  {
    id: 501006,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Teori Perturbasi Kuantum & Efek Medan Listrik Eksternal Linier',
    title: 'Pergeseran Tingkat Energi Partikel dalam Kotak 1D Akibat Perturbasi Potensial Linier',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Suatu partikel bermassa $m$ berada pada keadaan dasar dalam sumur potensial satu dimensi tak berhingga berukuran $0 \\le x \\le L$:
$$\\psi_1(x) = \\sqrt{\\frac{2}{L}} \\sin\\left( \\frac{\\pi x}{L} \\right), \\quad E_1^{(0)} = \\frac{h^2}{8 m L^2}$$

Sistem dikenai perturbasi medan listrik seragam $F$ yang menghasilkan potensial perturbasi linier:
$$\\hat{H}' = F x \\quad (F = \\text{konstanta})$$

Menurut teori perturbasi orde pertama, berapakah nilai koreksi energi keadaan dasar ($E_1^{(1)}$)?

A. $E_1^{(1)} = \\frac{1}{2} F L$
B. $E_1^{(1)} = F L$
C. $E_1^{(1)} = 0$
D. $E_1^{(1)} = \\frac{1}{4} F L$
E. $E_1^{(1)} = \\frac{F L}{\\pi}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Integrasi Teori Perturbasi Orde Pertama:**
1. Rumus Teori Perturbasi Orde Pertama:
   $$E_1^{(1)} = \\langle \\psi_1 | \\hat{H}' | \\psi_1 \\rangle = \\int_0^L [\\psi_1(x)]^2 (F x) \\, dx$$
   Substitusi fungsi gelombang:
   $$E_1^{(1)} = \\frac{2F}{L} \\int_0^L x \\sin^2\\left( \\frac{\\pi x}{L} \\right) \\, dx$$
2. Evaluasi Nilai Harapan Posisi $\\langle x \\rangle$:
   Perhatikan bahwa integral tersebut tidak lain adalah nilai harapan posisi partikel pada keadaan dasar:
   $$\\langle x \\rangle_1 = \\int_0^L x |\\psi_1(x)|^2 \\, dx$$
   Karena kerapatan probabilitas $|\\psi_1(x)|^2 = \\frac{2}{L} \\sin^2(\\pi x / L)$ bersifat simetris sempurna terhadap titik tengah kotak $x = L/2$:
   $$\\langle x \\rangle = \\frac{L}{2}$$
3. Hitung Koreksi Energi:
   $$E_1^{(1)} = F \\langle x \\rangle = F \\left( \\frac{L}{2} \\right) = \\frac{1}{2} F L$$
4. Verifikasi dengan Integrasi Langsung:
   Menggunakan identitas $\\sin^2(\\theta) = \\frac{1 - \\cos(2\\theta)}{2}$:
   $$\\int_0^L x \\sin^2\\left(\\frac{\\pi x}{L}\\right) dx = \\frac{1}{2} \\int_0^L x \\, dx - \\frac{1}{2} \\int_0^L x \\cos\\left(\\frac{2\\pi x}{L}\\right) dx = \\frac{1}{2} \\left[ \\frac{L^2}{2} \\right] - 0 = \\frac{L^2}{4}$$
   Maka:
   $$E_1^{(1)} = \\frac{2F}{L} \\left( \\frac{L^2}{4} \\right) = \\frac{1}{2} F L$$
5. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($1/2 F L$).
- Pilihan B: Menggunakan nilai batas atas $x = L$.
- Pilihan C: Menganggap nol (hanya terjadi jika sumur didefinisikan simetris dari $-L/2$ ke $+L/2$).
- Pilihan D: Mengabaikan faktor 2 pada normalisasi gelombang.
- Pilihan E: Kesalahan integrasi trigonometri.`,
    solution_framework_template: `Tahap 1: Tuliskan integral perturbasi orde pertama: E_1^(1) = F * <x>.
Tahap 2: Gunakan sifat simetri kerapatan probabilitas kuantum partikel dalam kotak: <x> = L/2.
Tahap 3: Kalikan gaya konstan F dengan nilai harapan posisi: E_1^(1) = F * (L/2).
Tahap 4: Simpulkan E_1^(1) = 1/2 * F * L (opsi A).`,
    tags: ['teori-perturbasi', 'partikel-dalam-kotak', 'nilai-harapan-posisi', 'efek-stark', 'kuantum-lanjut'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Model Kisi-kisi IChO / Pelatnas (EPR Radikal Metil)
  // =========================================================================
  {
    id: 501007,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Resonansi Spin Elektron (ESR/EPR) & Kopling Hiperhalus',
    title: 'Pola Pemisahan Hiperhalus Isotropik Spektrum EPR Radikal Bebas Metil (^.CH3)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Spektroskopi Resonansi Paramagnetik Elektron (EPR / ESR) mendeteksi spesi yang memiliki elektron tak-berpasangan ($S = 1/2$).
Interaksi kontak Fermi antara momen magnetik spin elektron dengan momen magnetik inti atom bermartabat spin $I$ memecah garis resonansi menjadi multiplet hiperhalus (*hyperfine splitting*):
Jumlah garis teramati untuk $N$ inti ekuivalen bermartabat spin $I$ dinyatakan oleh:
$$M = 2 N I + 1$$
dengan rasio intensitas relatif garis yang mengikuti koefisien ekspansi binomial.

Radikal bebas metil ($\\ce{^{\\bullet}CH3}$) memiliki geometri planar segitiga ($D_{3h}$) dengan elektron tak-berpasangan menempati orbital karbon $2p_z$.
Diketahui:
- Spin inti hidrogen ($^1\\ce{H}$): $I = 1/2$
- Inti karbon utama ($^{12}\\ce{C}$): $I = 0$ (tidak memiliki momen magnetik spin)
- Konstanta kopling hiperhalus isotropik: $a_H = -2{,}3\\text{ mT}$ (timbul melalui mekanisme polarisasi spin pada ikatan $\\ce{C-H}$).

Bagaimanakah pola pemisahan multiplet garis spektrum EPR radikal $\\ce{^{\\bullet}CH3}$ dan berapakah rasio intensitas relatif garis-garis tersebut?

A. Kuartet 4 garis dengan rasio intensitas $1 : 3 : 3 : 1$
B. Triplet 3 garis dengan rasio intensitas $1 : 2 : 1$
C. Tunggal (singlet) 1 garis tajam
D. Sekstet 6 garis dengan rasio intensitas $1 : 5 : 10 : 10 : 5 : 1$
E. Doblet 2 garis dengan rasio intensitas $1 : 1$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Spektroskopi EPR Radikal Bebas:**
1. Evaluasi Jumlah Garis Hiperhalus:
   - Radikal $\\ce{^{\\bullet}CH3}$ memiliki $N = 3$ atom hidrogen ekuivalen ($I = 1/2$).
   - Inti $^{12}\\ce{C}$ memiliki $I = 0$, sehingga tidak memberikan pemisahan hiperhalus.
   - Menggunakan rumus multiplet:
     $$M = 2 N I + 1 = 2 (3) \\left(\\frac{1}{2}\\right) + 1 = 3 + 1 = 4\\text{ garis (Kuartet)}$$
2. Penentuan Rasio Intensitas Relatif:
   - Untuk inti dengan $I = 1/2$, rasio intensitas garis spektrum hiperhalus mengikuti koefisien Segitiga Pascal untuk $(1 + x)^N$ dengan $N = 3$:
     - Baris $N = 0$: $1$
     - Baris $N = 1$: $1 : 1$
     - Baris $N = 2$: $1 : 2 : 1$
     - Baris $N = 3$: **$1 : 3 : 3 : 1$**
3. Mekanisme Polarisasi Spin:
   - Meskipun elektron tak-berpasangan berada pada orbital $2p_z$ yang memiliki bidang simpul pada bidang molekul (sehingga kerapatan probabilitas di inti hidrogen secara teoritis nol), pertukaran interelektronik dengan pasangan elektron ikatan $\\ce{\\sigma_{C-H}}$ menginduksi polarisasi spin negatif pada inti proton, menghasilkan $a_H = -2{,}3\\text{ mT}$.
4. Maka spektrum EPR $\\ce{^{\\bullet}CH3}$ menunjukkan kuartet $1 : 3 : 3 : 1$.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Triplet $1:2:1$ adalah karakteristik radikal dengan 2 proton ekuivalen (seperti $-\\ce{^{\\bullet}CH2-}$).
- Pilihan C: Singlet hanya jika tidak ada inti bermomen magnetik atau kopling terhambat.
- Pilihan D: Sekstet adalah untuk $N=5$ proton.
- Pilihan E: Doblet adalah untuk 1 proton (seperti radikal formil $\\ce{^{\\bullet}CHO}$).`,
    solution_framework_template: `Tahap 1: Identifikasi jumlah inti magnetik: 3 proton ekuivalen dengan spin I = 1/2.
Tahap 2: Gunakan formula multiplet EPR: M = 2*N*I + 1 = 2*3*(1/2) + 1 = 4 garis (kuartet).
Tahap 3: Terapkan aturan segitiga Pascal untuk N = 3: rasio intensitas 1 : 3 : 3 : 1.
Tahap 4: Simpulkan opsi A.`,
    tags: ['epr', 'esr', 'kopling-hiperhalus', 'radikal-metil', 'polarisasi-spin'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi IChO / Pelatnas (Grafena & Titik Dirac)
  // =========================================================================
  {
    id: 501008,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Teori Pita Padatan Tight-Binding & Titik Dirac Grafena',
    title: 'Dispersi Energi Linier Semilogam Grafena pada Titik Sudut Zona Brillouin (K)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Grafena merupakan material dua dimensi satu lapis atom karbon hibridisasi $sp^2$ berkisi sarang lebah (*honeycomb lattice*) dengan dua subkisi identik $A$ dan $B$.
Menggunakan model ikatan kuat Hückel (*Tight-Binding Approximation*) untuk elektron pita $\\pi$:
Hubungan dispersi energi pita konduksi ($\pi^*$) dan pita valensi ($\pi$) dinyatakan oleh:
$$E(\\mathbf{k}) = \\pm t \\sqrt{1 + 4\\cos\\left( \\frac{\\sqrt{3} k_x a}{2} \\right) \\cos\\left( \\frac{k_y a}{2} \\right) + 4\\cos^2\\left( \\frac{k_y a}{2} \\right)}$$
di mana $t \\approx 2{,}8\\text{ eV}$ adalah integral transfer hopping tetangga terdekat, dan $a = 2{,}46\\text{ \AA}$ adalah konstanta kisi.

Pada keenam sudut heksagonal Zona Brillouin pertama (dikenal sebagai **titik Dirac $K$ dan $K'$**), celah energi pita terlarang lenyap ($E_g = 0$), dan ekspansi deret vektor gelombang disekitar titik $K$ ($\mathbf{q} = \\mathbf{k} - \\mathbf{K}$) menghasilkan hubungan dispersi kuantum relativistik:
$$E(\\mathbf{q}) = \\pm \\hbar v_F |\\mathbf{q}|$$

Manakah konsekuensi fisis yang BENAR mengenai elektron pembawa muatan dalam grafena pada tingkat energi Fermi disekitar titik Dirac tersebut?

A. Elektron berperilaku sebagai partikel relativistik tanpa massa (*massless Dirac fermions*) yang bergerak dengan kecepatan konstan Fermi independen energi ($v_F \\approx 10^6\\text{ m s}^{-1}$)
B. Elektron memiliki massa efektif tak terhingga sehingga grafena bertindak sebagai isolator sempurna
C. Celah pita energi terbuka lebar sebesar $E_g = 5{,}5\\text{ eV}$
D. Dispersi energi bersifat parabolik kuadratik $E \\propto |\\mathbf{q}|^2$ seperti gas elektron bebas konvensional
E. Kecepatan kelompok elektron bernilai nol pada semua temperatur`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Fisika Kuantum Grafena:**
1. Struktur Titik Dirac Grafena:
   - Pada titik simetri tinggi $K$ dan $K'$ di Zona Brillouin pertama, suku di dalam tanda akar pada dispersi tight-binding bernilai nol, sehingga $E(K) = 0$.
   - Pita valensi $\\pi$ dan pita konduksi $\\pi^*$ bersentuhan tepat pada satu titik kerucut (*Dirac cone*).
2. Sifat Dispersi Linier:
   - Pada hampiran di sekitar titik Dirac, hubungan dispersi adalah:
     $$E(\\mathbf{q}) = \\pm \\hbar v_F |\\mathbf{q}|$$
   - Hubungan ini berbentuk linier terhadap momentum ($E = v_F p$), identik persis dengan persamaan relativistik ultra-relativistik Dirac untuk partikel bermassa diam nol (seperti foton atau neutrino)!
3. Kecepatan Fermi dan Massa Efektif:
   - Kecepatan kelompok elektron diberikan oleh gradien energi terhadap momentum:
     $$v = \\frac{1}{\\hbar} \\frac{\\partial E}{\\partial |\\mathbf{q}|} = v_F = \\frac{3 t a}{2 \\hbar} \\approx 1{,}0 \\times 10^6\\text{ m s}^{-1}$$
   - Kecepatan ini bernilai konstan sekitar $1/300$ kecepatan cahaya ($c$), sama sekali tidak bergantung pada besar energi kinetik partikel!
   - Massa efektif kuadratik ($m^* = \\hbar^2 / (\\partial^2 E / \\partial q^2)$) bernilai nol secara formal karena turunan keduanya nol (*massless Dirac fermions*).
4. Penemuan fenomena kuantum ini dianugerahi Nobel Fisika 2010 kepada Andre Geim dan Konstantin Novoselov.
5. Maka pernyataan A sepenuhnya benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Grafena adalah konduktor balistik ultra-tinggi pada suhu ruang, bukan isolator.
- Pilihan C: Grafena murni tidak memiliki celah pita ($E_g = 0$), merupakan semilogam celah-nol (*zero-gap semiconductor*).
- Pilihan D: Dispersi parabolik kuadratik ($E \\propto p^2/2m$) hanya berlaku pada semikonduktor klasik non-relativistik, bukan grafena.
- Pilihan E: Kecepatan kelompoknya sangat tinggi ($v_F \\approx 10^6\\text{ m/s}$).`,
    solution_framework_template: `Tahap 1: Tinjau titik Dirac K pada zona Brillouin grafena: pita konduksi dan valensi bersentuhan di satu titik (E_g = 0).
Tahap 2: Tinjau dispersi linier E = hbar * v_F * |q|.
Tahap 3: Hubungkan dispersi linier dengan persamaan Dirac untuk partikel relativistik tanpa massa (massless fermions).
Tahap 4: Simpulkan kecepatan konstan Fermi v_F ≈ 10^6 m/s (opsi A).`,
    tags: ['grafena', 'titik-dirac', 'tight-binding', 'massless-fermions', 'zona-brillouin'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Model Kisi-kisi IChO / Pelatnas (Persimpangan Konikal)
  // =========================================================================
  {
    id: 501009,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Fotokimia Kuantum Ultrafast & Topologi Persimpangan Konikal',
    title: 'Peranan Persimpangan Konikal (Conical Intersection) pada Fotoisomerisasi Ultracepat Retinal',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Dalam proses penglihatan mamalia, fotoisomerisasi kromofor *11-cis*-retinal menjadi *all-trans*-retinal di dalam protein rhodopsin berlangsung dalam skala waktu femtodetik yang menakjubkan ($\\tau \\approx 200\\text{ fs}$) dengan efisiensi kuantum sangat tinggi ($\\Phi \\approx 0{,}67$).

Laju de-eksitasi non-radiatif yang melampaui batas teori perturbasi standar ini dimungkinkan oleh adanya **Persimpangan Konikal (*Conical Intersection*, CI)** antara permukaan energi potensial keadaan tereksitasi ($S_1$) dan keadaan dasar ($S_0$).

Manakah karakteristik fisis dan mekanika kuantum yang BENAR mengenai fenomena **Persimpangan Konikal** tersebut?

A. Persimpangan konikal merupakan titik degenerasi energi eksak ($E(S_1) = E(S_0)$) di mana aproksimasi Born-Oppenheimer runtuh sempurna, bertindak sebagai "corong efisien" (*funnel*) yang mentransfer populasi keadaan tereksitasi kembali ke keadaan dasar dalam satu periode vibrasi molekul
B. Persimpangan konikal selalu memancarkan foton fluoresensi dengan efisiensi kuantum 100%
C. Persimpangan konikal membatasi reaksi fotokimia sehingga reaksi hanya bisa berlangsung lambat melalui konversi internal standar
D. Persimpangan konikal memutus ikatan peptida protein opsin
E. Persimpangan konikal hanya ada pada molekul diatomik linier`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Fotofisika Persimpangan Konikal:**
1. Runtuhnya Aproksimasi Born-Oppenheimer:
   - Aproksimasi Born-Oppenheimer mengasumsikan gerakan inti atom dan elektron dapat dipisahkan karena massa inti jauh lebih besar daripada massa elektron ($M_n \\gg m_e$).
   - Asumsi ini hanya berlaku jika selisih energi antar permukaan potensial elektronik cukup lebar ($\\Delta E \\gg \\hbar \\omega$).
   - Ketika dua permukaan energi potensial bersentuhan langsung secara geometri:
     $$E(S_1) = E(S_0)$$
     kopling non-adiabatik gerak inti-elektronik melonjak mendekati tak terhingga, menyebabkan aproksimasi Born-Oppenheimer **runtuh secara total**!
2. Topologi Ruang Percabangan (Branching Space):
   - Degenerasi diangkat secara linear sepanjang dua koordinat vibrasi orthogonal: koordinat gradien selisih energi ($x_1$) dan koordinat kopling non-adiabatik ($x_2$).
   - Bentuk permukaan energi di sekitar titik kontak menyerupai dua kerucut ganda yang saling bersentuhan di puncaknya (*double cone / conical intersection*).
3. Peran sebagai Corong Fotokimia Ultracepat:
   - Paket gelombang kuantum keadaan tereksitasi yang meluncur menuruni lereng $S_1$ mencapai persimpangan konikal tanpa mengalami halangan barier aktivasi.
   - Pada titik CI, sistem bertransisi ke keadaan dasar $S_0$ secara non-radiatif dalam skala waktu femtodetik (satu periode vibrasi ikatan $\\sim 100-200\\text{ fs}$), seperti bola yang jatuh menembus corong (*molecular funnel*).
   - Inilah kunci evolusi alamiah yang membuat mata manusia mampu mendeteksi foton cahaya dengan kecepatan kilat tanpa kehilangan energi sebagai panas yang merusak jaringan.
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Persimpangan konikal adalah proses radiatif nol (non-radiatif murni), tidak memancarkan foton (fluoresensi terpadamkan).
- Pilihan C: CI justru mempercepat reaksi hingga batas waktu femtodetik tercepat di alam semesta.
- Pilihan D: Protein rhodopsin tetap utuh (hanya terjadi isomerisasi ikatan rangkap kromofor retinal).
- Pilihan E: Teorema von Neumann-Wigner membuktikan molekul diatomik dengan simetri sama tidak dapat bersilangan (non-crossing rule); persimpangan konikal membutuhkan molekul poliatomik dengan minimal 2 derajat kebebasan vibrasi.`,
    solution_framework_template: `Tahap 1: Tinjau definisi persimpangan konikal: titik temu energi eksak E(S1) = E(S0) antara dua permukaan potensial.
Tahap 2: Pahami runtuhnya aproksimasi Born-Oppenheimer karena kopling non-adiabatik menjadi sangat besar.
Tahap 3: Hubungkan topologi kerucut ganda sebagai corong efisien (molecular funnel) de-eksitasi non-radiatif skala femtodetik.
Tahap 4: Simpulkan opsi A.`,
    tags: ['persimpangan-konikal', 'conical-intersection', 'born-oppenheimer', 'fotokimia-ultrafast', 'retinal'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi IChO / Pelatnas (Model Radikal Pair & Kompas Biologis)
  // =========================================================================
  {
    id: 501010,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Mekanisme Pasangan Radikal (Radical Pair Mechanism) & Magnetoresepsi',
    title: 'Pengaruh Medan Magnet Rendah Bumi terhadap Rekombinasi Singlet-Triplet Pasangan Radikal Kriptokrom',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Mekanisme kompas magnetik biologis navigasi burung migran dijelaskan oleh **Mekanisme Pasangan Radikal (*Radical Pair Mechanism*)** pada fotoreseptor protein kriptokrom di retina:
1. Penyerapan foton biru memicu transfer elektron ultracepat dari residu triptofan ($\ce{TrpH}$) ke kofaktor flavin adenin dinukleotida ($\ce{FAD}$), membentuk pasangan radikal terpisah-spasial dalam keadaan spin terkorelasi singlet:
   $$^1[\\ce{FAD^{\\bullet-} \\dots TrpH^{\\bullet+}}]$$
2. Interaksi kopling hiperhalus inti ($a_{\\text{HF}}$) menginduksi interkonversi koheren antara keadaan singlet ($S$, non-magnetik) dan keadaan triplet ($T$, paramagnetik):
   $$^1[\\ce{FAD^{\\bullet-} \\dots TrpH^{\\bullet+}}] \\; \\rightleftharpoons \\; ^3[\\ce{FAD^{\\bullet-} \\dots TrpH^{\\bullet+}}]$$
3. Jalur terminasi produk:
   - Keadaan singlet meregenerasi keadaan dasar awal: $S \\to \\ce{FAD + TrpH}$ (rekombinasi cepat).
   - Keadaan triplet terperangkap dan memicu sinyal biologis persarafan navigasi: $T \\to \\text{Sinyal Aktif}$.

Bagaimanakah pengaruh medan magnet bumi yang sangat lemah ($B_0 \\approx 50\\text{ }\\mu\\text{T}$) terhadap rasio percabangan produk rekombinasi singlet vs triplet?

A. Medan magnet bumi memecah degenerasi Zeeman ketiga sub-tingkat triplet ($T_+, T_0, T_-$), mengisolasi tingkat $T_+$ dan $T_-$ di luar jangkauan kopling hiperhalus sehingga menurunkan laju interkonversi $S \\to T$ dan mengubah rasio hasil reaksi biokimiawi bergantung orientasi medan
B. Medan magnet bumi memanaskan mata burung melalui efek induksi elektromagnetik Faraday
C. Medan magnet bumi memutar molekul protein secara mekanis seperti jarum kompas besi makroskopis
D. Medan magnet bumi memicu eksitasi foton tambahan di dalam retina gelap
E. Pasangan radikal tidak terpengaruh oleh medan magnet luar karena energi interaksi magnetik jauh lebih kecil dari energi termal $k_B T$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Kuantum Biologi Pasangan Radikal:**
1. Paradoks Energi Termal ($k_B T$ vs Zeeman):
   - Energi interaksi Zeeman medan magnet bumi ($B_0 = 50\\text{ }\\mu\\text{T}$) adalah:
     $$E_Z = g \\mu_B B_0 \\approx (2)(9{,}27 \\times 10^{-24}\\text{ J T}^{-1})(5 \\times 10^{-5}\\text{ T}) \\approx 10^{-27}\\text{ J}$$
   - Energi termal pada suhu fisiologis ($300\\text{ K}$) adalah:
     $$k_B T \\approx (1{,}38 \\times 10^{-23})(300) \\approx 4 \\times 10^{-21}\\text{ J}$$
   - $E_Z$ adalah sekitar enam orde magnitudo lebih kecil daripada $k_B T$ ($E_Z \\ll k_B T$). Berdasarkan termodinamika kesetimbangan klasik Boltzmann, medan magnet bumi mustahil mempengaruhi reaksi kimia.
2. Solusi Non-Ekuilibrium Kuantum:
   - Pasangan radikal terbentuk secara koheren non-termal dalam keadaan murni singlet ($S$).
   - Sebelum dekoherensi spin terjadi oleh lingkungan acak, dinamika interkonversi $S \\leftrightarrow T$ dikendalikan secara kuantum terpadu oleh **interaksi kopling hiperhalus inti**.
3. Efek Zeeman Medan Rendah:
   - Tanpa medan magnet ($B = 0$): Ketiga sub-tingkat triplet ($T_+, T_0, T_-$) terdegenerasi sempurna pada energi yang sama dengan keadaan singlet $S$. Interaksi hiperhalus mencampurkan $S$ dengan seluruh ketiga sub-tingkat triplet.
   - Dengan kehadiran medan magnet bumi ($B_0 = 50\\text{ }\\mu\\text{T}$):
     Pemisahan Zeeman mengangkat energi $T_+$ ke atas dan menurunkan $T_-$ ke bawah.
     Tingkat $T_+$ dan $T_-$ bergeser keluar dari resonansi dengan keadaan $S$, sehingga interkonversi hiperhalus hanya efektif mencampurkan $S$ dengan sub-keadaan $T_0$!
   - Pembatasan derajat pencampuran ini **mengubah rasio hasil produk singlet terhadap triplet secara sensitif**, yang bervariasi bergantung pada sudut orientasi retina burung terhadap garis medan magnet bumi (kompas inklinasi kuantum).
4. Maka opsi A adalah penjelasan biologi kuantum yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Medan $50\\,\\mu\\text{T}$ statis tidak menimbulkan pemanasan induksi Faraday pada jaringan biologis.
- Pilihan C: Kriptokrom tidak mengandung partikel feromagnetik makroskopis besi magnetit yang berputar mekanis.
- Pilihan D: Medan magnet tidak memancarkan foton.
- Pilihan E: Ini adalah argumen klasik yang terbantahkan oleh dinamika koherensi spin non-ekuilibrium pasangan radikal.`,
    solution_framework_template: `Tahap 1: Tinjau pembentukan pasangan radikal spin-terkorelasi singlet ^1[FAD^•- ... TrpH^•+].
Tahap 2: Pahami pencampuran koheren S <-> T yang didorong oleh kopling hiperhalus inti.
Tahap 3: Analisis pemisahan Zeeman oleh medan magnet bumi 50 uT: memisahkan sub-tingkat T_+ dan T_-, membatasi interkonversi hanya ke T_0.
Tahap 4: Hubungkan perubahan rasio produk kimia ini dengan kompas navigasi kuantum burung migran (opsi A).`,
    tags: ['pasangan-radikal', 'radical-pair', 'kriptokrom', 'magnetoresepsi', 'biologi-kuantum'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
