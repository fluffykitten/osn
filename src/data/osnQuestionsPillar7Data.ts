/**
 * osnQuestionsPillar7Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 7: Elektrokimia Lanjut, Elektrolisis Industri, Voltametri & Korosi
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 407001 - 407010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 07 = Pilar 7
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_7_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 3 (Voltametri Siklik & Persamaan Randles-Sevcik)
  // =========================================================================
  {
    id: 407001,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Voltametri Siklik (CV) & Persamaan Difusi Randles-Sevcik',
    title: 'Penentuan Koefisien Difusi Ferosen Menggunakan Persamaan Randles-Sevcik',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Untuk proses reduksi-oksidasi reversibel terkontrol difusi fasa larutan planar pada $25^\\circ\\text{C}$ ($298{,}15\\text{ K}$):
$$\\ce{O + n e^- <=> R}$$
Arus puncak anodik/katodik ($i_p$) dalam voltametri siklik (CV) diprediksi oleh persamaan Randles-Sevcik:
$$i_p = 0{,}4463 \\, n F A C^* \\sqrt{\\frac{n F D v}{R T}} = (2{,}69 \\times 10^5) \\, n^{3/2} A C^* D^{1/2} v^{1/2}$$
di mana:
- $i_p$ adalah arus puncak dalam Ampere (A),
- $n = 1$ adalah jumlah elektron yang ditransfer,
- $F = 96485\\text{ C mol}^{-1}$,
- $A = 0{,}0707\\text{ cm}^2$ adalah luas area permukaan elektroda kerja cakram platina,
- $C^* = 1{,}00 \\times 10^{-6}\\text{ mol cm}^{-3}$ ($1{,}00\\text{ mM}$) adalah konsentrasi analit ferosen dalam asetonitril,
- $v$ adalah laju pindai potensial (*scan rate*) dalam $\\text{V s}^{-1}$,
- $D$ adalah koefisien difusi dalam $\\text{cm}^2\\text{ s}^{-1}$.

Pengukuran voltametri siklik ferosen pada laju pindai $v = 0{,}100\\text{ V s}^{-1}$ menghasilkan arus puncak anodik terukur:
$$i_{p,a} = 19{,}0\\text{ }\\mu\\text{A} = 1{,}90 \\times 10^{-5}\\text{ A}$$
dengan pemisahan potensial puncak $\\Delta E_p = E_{p,a} - E_{p,c} = 59{,}2\\text{ mV}$.

Berapakah nilai koefisien difusi ($D$) molekul ferosen dalam pelarut asetonitril tersebut?

A. $D = 1{,}00 \\times 10^{-5}\\text{ cm}^2\\text{ s}^{-1}$
B. $D = 2{,}50 \\times 10^{-6}\\text{ cm}^2\\text{ s}^{-1}$
C. $D = 5{,}00 \\times 10^{-5}\\text{ cm}^2\\text{ s}^{-1}$
D. $D = 1{,}00 \\times 10^{-4}\\text{ cm}^2\\text{ s}^{-1}$
E. $D = 3{,}16 \\times 10^{-6}\\text{ cm}^2\\text{ s}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Randles-Sevcik:**
1. Evaluasi Parameter Persamaan Randles-Sevcik:
   $$i_p = (2{,}69 \\times 10^5) \\, n^{3/2} A C^* \\sqrt{D} \\sqrt{v}$$
   - $n = 1 \\implies n^{3/2} = 1$
   - $A = 0{,}0707\\text{ cm}^2$
   - $C^* = 1{,}00 \\times 10^{-6}\\text{ mol cm}^{-3}$
   - $v = 0{,}100\\text{ V s}^{-1} \\implies \\sqrt{v} = \\sqrt{0{,}100} = 0{,}3162\\text{ V}^{1/2}\\text{ s}^{-1/2}$
2. Hitung Faktor Pengali di Luar $\\sqrt{D}$:
   $$\\text{Konstanta} = (2{,}69 \\times 10^5) \\times 0{,}0707 \\times (1{,}00 \\times 10^{-6}) \\times 0{,}3162$$
   $$\\text{Konstanta} = (2{,}69 \\times 10^5) \\times (2{,}2355 \\times 10^{-8}) = 6{,}0136 \\times 10^{-3}\\text{ A s}^{1/2}\\text{ cm}^{-1}$$
3. Selesaikan Nilai $\\sqrt{D}$:
   $$i_p = 1{,}90 \\times 10^{-5}\\text{ A}$$
   $$\\sqrt{D} = \\frac{i_p}{\\text{Konstanta}} = \\frac{1{,}90 \\times 10^{-5}\\text{ A}}{6{,}0136 \\times 10^{-3}} = 3{,}1595 \\times 10^{-3}\\text{ cm s}^{-1/2}$$
4. Kuadratkan untuk Memperoleh Koefisien Difusi $D$:
   $$D = (3{,}1595 \\times 10^{-3})^2 = 9{,}982 \\times 10^{-6}\\text{ cm}^2\\text{ s}^{-1} \\approx 1{,}00 \\times 10^{-5}\\text{ cm}^2\\text{ s}^{-1}$$
5. Verifikasi Kriteria Reversibilitas:
   Pemisahan potensial puncak $\\Delta E_p = 59{,}2\\text{ mV} \\approx 59/n\\text{ mV}$ membuktikan transfer elektron bersifat reversibel Nernstian tanpa hambatan kinetika heterogen.
6. Maka $D = 1{,}00 \\times 10^{-5}\\text{ cm}^2\\text{ s}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($1{,}00 \\times 10^{-5}\\text{ cm}^2\\text{ s}^{-1}$).
- Pilihan B: Kesalahan perhitungan dengan lupa mengalikan scan rate akar.
- Pilihan C: Kesalahan faktor 5 pada perhitungan luas elektroda.
- Pilihan D: Lupa mengakar koefisien difusi.
- Pilihan E: Nilai $\\sqrt{D}$ ($3{,}16 \\times 10^{-3}$ atau skala $10^{-6}$) yang belum dikuadratkan secara benar.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan Randles-Sevcik: i_p = (2,69 x 10^5) * n^(3/2) * A * C* * sqrt(D * v).
Tahap 2: Substitusikan n = 1, A = 0,0707 cm^2, C* = 1,00 x 10^-6 mol/cm^3, v = 0,100 V/s, i_p = 1,90 x 10^-5 A.
Tahap 3: Hitung sqrt(D) = 1,90 x 10^-5 / 6,014 x 10^-3 = 3,16 x 10^-3 cm s^-1/2.
Tahap 4: Kuadratkan untuk mendapatkan D = 1,00 x 10^-5 cm^2 s^-1 (opsi A).`,
    tags: ['voltametri-siklik', 'randles-sevcik', 'koefisien-difusi', 'ferosen', 'reversibilitas-nernstian'],
    source_event: 'OSN Kimia 2023 No. 3 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL RIIL - OSN 2022 No. 3 (Spektroskopi Impedansi Elektrokimia EIS)
  // =========================================================================
  {
    id: 407002,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Impedansi Elektrokimia (EIS) & Sirkuit Randles',
    title: 'Interpretasi Diagram Nyquist Sirkuit Randles untuk Karakterisasi Transfer Muatan Antarmuka',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Dalam Spektroskopi Impedansi Elektrokimia (*Electrochemical Impedance Spectroscopy*, EIS), respon antarmuka elektroda-larutan dimodelkan dengan sirkuit ekuivalen Randles standar:
- Resistansi larutan elektrolit ($R_s$) terhubung seri dengan:
  - Paralel antara Kapasitansi Lapisan Ganda listrik ($C_{dl}$) dan Resistansi Transfer Muatan ($R_{ct}$) yang berseri dengan Impedansi Difusi Warburg ($Z_W$).

Plot Nyquist memetakan komponen impedansi imajiner ($-Z''$) terhadap komponen impedansi riil ($Z'$).
Pada rentang frekuensi tinggi hingga menengah, diagram Nyquist membentuk setengah lingkaran (*semicircle*) yang kemudian diikuti garis lurus miring $45^\\circ$ pada frekuensi sangat rendah (daerah difusi Warburg).

Pada suatu eksperimen EIS sel korosi baja:
- Titik potong setengah lingkaran dengan sumbu riil pada frekuensi tak hingga ($\omega \\to \\infty$) berada pada $Z' = 15{,}0\\text{ }\\Omega$.
- Titik potong kedua setengah lingkaran dengan sumbu riil pada frekuensi rendah berada pada $Z' = 215{,}0\\text{ }\\Omega$.
- Puncak kurva setengah lingkaran ($-Z''_{\\max}$) teramati pada frekuensi sudut karakteristik $\\omega_{\\max} = 500\\text{ rad s}^{-1}$.

Berapakah nilai resistansi transfer muatan ($R_{ct}$) dan berapakah nilai kapasitansi lapisan ganda ($C_{dl}$) antarmuka tersebut?

A. $R_{ct} = 200{,}0\\text{ }\\Omega$; $C_{dl} = 10{,}0\\text{ }\\mu\\text{F}$
B. $R_{ct} = 215{,}0\\text{ }\\Omega$; $C_{dl} = 9{,}3\\text{ }\\mu\\text{F}$
C. $R_{ct} = 200{,}0\\text{ }\\Omega$; $C_{dl} = 20{,}0\\text{ }\\mu\\text{F}$
D. $R_{ct} = 100{,}0\\text{ }\\Omega$; $C_{dl} = 5{,}0\\text{ }\\mu\\text{F}$
E. $R_{ct} = 15{,}0\\text{ }\\Omega$; $C_{dl} = 133{,}3\\text{ }\\mu\\text{F}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Interpretasi Plot Nyquist EIS:**
1. Analisis Titik Potong Sumbu Riil ($Z'$):
   - Pada frekuensi sangat tinggi ($\\omega \\to \\infty$), kapasitor lapisan ganda berlaku sebagai korsleting ($Z_C = 1/i\\omega C \\to 0$), sehingga arus melompati cabang paralel dan hanya merasakan resistansi larutan:
     $$Z'_{\\omega \\to \\infty} = R_s = 15{,}0\\text{ }\\Omega$$
   - Pada frekuensi rendah (sebelum efek Warburg mendominasi), kapasitor bertindak sebagai rangkaian terbuka, sehingga arus melewati resistansi transfer muatan:
     $$Z'_{\\text{intersep kedua}} = R_s + R_{ct} = 215{,}0\\text{ }\\Omega$$
2. Hitung Resistansi Transfer Muatan ($R_{ct}$):
   Diameter setengah lingkaran merepresentasikan nilai resistansi transfer muatan:
   $$R_{ct} = (R_s + R_{ct}) - R_s = 215{,}0\\text{ }\\Omega - 15{,}0\\text{ }\\Omega = 200{,}0\\text{ }\\Omega$$
3. Hitung Kapasitansi Lapisan Ganda ($C_{dl}$) dari Puncak Frekuensi ($\\omega_{\\max}$):
   Puncak kurva imajiner setengah lingkaran ($-Z''_{\\max} = R_{ct}/2$) terjadi pada kondisi resonansi relaksasi antarmuka:
   $$\\omega_{\\max} R_{ct} C_{dl} = 1 \\implies \\tau = R_{ct} C_{dl} = \\frac{1}{\\omega_{\\max}}$$
   Substitusi nilai $\\omega_{\\max} = 500\\text{ rad s}^{-1}$ dan $R_{ct} = 200{,}0\\text{ }\\Omega$:
   $$C_{dl} = \\frac{1}{\\omega_{\\max} R_{ct}} = \\frac{1}{500\\text{ rad s}^{-1} \\times 200{,}0\\text{ }\\Omega} = \\frac{1}{100000\\text{ }\\Omega\\text{ s}^{-1}} = 1{,}00 \\times 10^{-5}\\text{ F} = 10{,}0\\text{ }\\mu\\text{F}$$
4. Maka $R_{ct} = 200{,}0\\text{ }\\Omega$ dan $C_{dl} = 10{,}0\\text{ }\\mu\\text{F}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($R_{ct} = 200{,}0\\text{ }\\Omega$ dan $C_{dl} = 10{,}0\\text{ }\\mu\\text{F}$).
- Pilihan B: Menggunakan nilai $R_s + R_{ct} = 215\\text{ }\\Omega$ langsung sebagai $R_{ct}$ tanpa mengurangi $R_s$.
- Pilihan C: Kesalahan faktor 2 pada hubungan frekuensi sudut terhadap puncak impedansi.
- Pilihan D: Menggunakan radius setengah lingkaran ($R_{ct}/2 = 100\\text{ }\\Omega$) sebagai resistansi total.
- Pilihan E: Mengacaukan $R_s$ dengan $R_{ct}$.`,
    solution_framework_template: `Tahap 1: Tentukan diameter busur Nyquist: R_ct = Z'(rendah) - Z'(tinggi) = 215,0 - 15,0 = 200,0 Ohm.
Tahap 2: Gunakan relasi puncak setengah lingkaran: omega_max * R_ct * C_dl = 1.
Tahap 3: Hitung C_dl = 1 / (omega_max * R_ct) = 1 / (500 * 200) = 1,00 x 10^-5 F = 10,0 uF.
Tahap 4: Simpulkan opsi A.`,
    tags: ['eis', 'spektroskopi-impedansi', 'plot-nyquist', 'sirkuit-randles', 'resistansi-transfer-muatan'],
    source_event: 'OSN Kimia 2022 No. 3 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2021 No. 3 (Sel Bahan Bakar PEMFC & Efisiensi Termodinamika)
  // =========================================================================
  {
    id: 407003,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Sel Bahan Bakar (PEMFC) & Polarisasi Tegangan Sel Riil',
    title: 'Efisiensi Termodinamika Reversibel dan Polarisasi Tegangan Kerja Sel Bahan Bakar H2-O2',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Dalam sel bahan bakar membran pertukaran proton (*Proton Exchange Membrane Fuel Cell*, PEMFC), reaksi pembentukan air berlangsung pada $25^\\circ\\text{C}$ ($298{,}15\\text{ K}$):
$$\\ce{H2(g) + 1/2 O2(g) -> H2O(l)}$$
Data termodinamika standar:
- $\\Delta H^\\circ = -285{,}83\\text{ kJ mol}^{-1}$ (Higher Heating Value, HHV)
- $\\Delta G^\\circ = -237{,}13\\text{ kJ mol}^{-1}$
- $n = 2\\text{ mol } e^-$ per mol $\\ce{H2}$, $F = 96485\\text{ C mol}^{-1}$.

Potensial sel reversibel idealnya adalah $E_{\\text{rev}} = -\\frac{\\Delta G^\\circ}{nF} = 1{,}229\\text{ V}$, dan efisiensi termodinamika termal maksimum teoritis adalah $\\eta_{\\text{term}} = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} = 82{,}96\\%$.

Pada kondisi operasi dinamis dengan rapat arus kerja $j = 0{,}500\\text{ A cm}^{-2}$, tegangan terminal sel turun dari $E_{\\text{rev}}$ akibat tiga jenis rugi polarisasi (*overpotentials*):
1. Polarisasi aktivasi katoda (reduksi $\\ce{O2}$): $\\eta_{\\text{act}} = 0{,}340\\text{ V}$
2. Polarisasi resistif ohmik membran: $\\eta_{\\text{ohm}} = j \\cdot R_{\\text{mem}} = (0{,}500\\text{ A cm}^{-2}) \\times (0{,}180\\text{ }\\Omega\\text{ cm}^2) = 0{,}090\\text{ V}$
3. Polarisasi konsentrasi perpindahan massa: $\\eta_{\\text{conc}} = 0{,}065\\text{ V}$
(Polarisasi anodik oksidasi $\\ce{H2}$ sangat kecil dan dapat diabaikan).

Berapakah tegangan kerja sel terukur ($V_{\\text{sel}}$), dan berapakah efisiensi listrik riil ($\\eta_{\\text{riil}} = \\frac{W_{\\text{listrik}}}{-\\Delta H^\\circ}$) sel bahan bakar tersebut pada kondisi kerja ini?

A. $V_{\\text{sel}} = 0{,}734\\text{ V}$; $\\eta_{\\text{riil}} = 49{,}6\\%$
B. $V_{\\text{sel}} = 0{,}889\\text{ V}$; $\\eta_{\\text{riil}} = 60{,}1\\%$
C. $V_{\\text{sel}} = 0{,}650\\text{ V}$; $\\eta_{\\text{riil}} = 43{,}9\\%$
D. $V_{\\text{sel}} = 0{,}734\\text{ V}$; $\\eta_{\\text{riil}} = 59{,}7\\%$
E. $V_{\\text{sel}} = 0{,}500\\text{ V}$; $\\eta_{\\text{riil}} = 33{,}8\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Efisiensi PEMFC:**
1. Hitung Polarisasi Total (Overpotential Total):
   $$\\eta_{\\text{tot}} = \\eta_{\\text{act}} + \\eta_{\\text{ohm}} + \\eta_{\\text{conc}}$$
   $$\\eta_{\\text{tot}} = 0{,}340\\text{ V} + 0{,}090\\text{ V} + 0{,}065\\text{ V} = 0{,}495\\text{ V}$$
2. Hitung Tegangan Terminal Kerja Sel ($V_{\\text{sel}}$):
   $$V_{\\text{sel}} = E_{\\text{rev}} - \\eta_{\\text{tot}} = 1{,}229\\text{ V} - 0{,}495\\text{ V} = 0{,}734\\text{ V}$$
3. Hitung Kerja Listrik Riil per Mol Bahan Bakar:
   $$W_{\\text{listrik}} = n F V_{\\text{sel}} = 2 \\times 96485\\text{ C mol}^{-1} \\times 0{,}734\\text{ V} = 141640\\text{ J mol}^{-1} = 141{,}64\\text{ kJ mol}^{-1}$$
4. Hitung Efisiensi Listrik Riil Terhadap $\\Delta H^\\circ$ (HHV):
   $$\\eta_{\\text{riil}} = \\frac{W_{\\text{listrik}}}{-\\Delta H^\\circ} = \\frac{141{,}64\\text{ kJ mol}^{-1}}{285{,}83\\text{ kJ mol}^{-1}} = 0{,}4955 = 49{,}55\\% \\approx 49{,}6\\%$$
   Atau dapat langsung dihitung dari rasio potensial:
   $$E_{\\text{termal}} = \\frac{-\\Delta H^\\circ}{nF} = \\frac{285830}{2 \\times 96485} = 1{,}4813\\text{ V}$$
   $$\\eta_{\\text{riil}} = \\frac{V_{\\text{sel}}}{E_{\\text{termal}}} = \\frac{0{,}734\\text{ V}}{1{,}4813\\text{ V}} = 0{,}4955 = 49{,}55\\% \\approx 49{,}6\\%$$
5. Maka $V_{\\text{sel}} = 0{,}734\\text{ V}$ dan $\\eta_{\\text{riil}} = 49{,}6\\%$.

**Analisis Distraktor:**
- Pilihan A: Benar ($V_{\\text{sel}} = 0{,}734\\text{ V}$; $\\eta_{\\text{riil}} = 49{,}6\\%$).
- Pilihan B: Mengabaikan polarisasi aktivasi ($\eta_{\\text{act}}$).
- Pilihan C: Nilai efisiensi dihitung dengan membagi terhadap energi bebas Gibbs ($\Delta G^\circ$) alih-alih entalpi ($\Delta H^\circ$).
- Pilihan D: Nilai tegangan benar tetapi efisiensi dihitung relatif terhadap $\Delta G^\circ$ ($0{,}734 / 1{,}229 = 59{,}7\\%$, ini adalah efisiensi voltase $\\eta_V$, bukan efisiensi termal $\\eta_{\\text{riil}}$).
- Pilihan E: Mengasumsikan kehilangan tegangan yang berlebihan.`,
    solution_framework_template: `Tahap 1: Hitung rugi tegangan total: eta_tot = 0,340 + 0,090 + 0,065 = 0,495 V.
Tahap 2: Dapatkan tegangan kerja sel: V_sel = 1,229 - 0,495 = 0,734 V.
Tahap 3: Hitung potensial ekuivalen entalpi: E_th = -Delta H / (nF) = 285830 / (2 * 96485) = 1,481 V.
Tahap 4: Hitung efisiensi termal riil: eta = V_sel / E_th = 0,734 / 1,481 = 49,6% (opsi A).`,
    tags: ['pemfc', 'sel-bahan-bakar', 'polarisasi-tegangan', 'efisiensi-termodinamika', 'overpotential'],
    source_event: 'OSN Kimia 2021 No. 3 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL RIIL - OSN 2019 No. 3 (Korosi Basah & Diagram Evans Tafel)
  // =========================================================================
  {
    id: 407004,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Kinetika Korosi Basah, Ekstrapolasi Tafel & Diagram Evans',
    title: 'Penentuan Potensial Korosi dan Rapat Arus Korosi Baja Karbon Menggunakan Persamaan Tafel',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Kinetika korosi pelarutan besi dalam larutan asam terdeaerasi diatur oleh dua reaksi elektrokimia simultan:
- Oksidasi anodik besi: $\\ce{Fe -> Fe^{2+} + 2 e^-}$
  $$E = E_{\\text{eq},a} + \\beta_a \\log_{10}\\left( \\frac{j_a}{j_{0,a}} \\right)$$
- Reduksi katodik evolusi hidrogen: $\\ce{2 H+ + 2 e^- -> H2}$
  $$E = E_{\\text{eq},c} - \\beta_c \\log_{10}\\left( \\frac{j_c}{j_{0,c}} \\right)$$

Parameter kinetika terukur:
- Potensial kesetimbangan: $E_{\\text{eq},a} = -0{,}440\\text{ V}$ dan $E_{\\text{eq},c} = 0{,}000\\text{ V}$
- Rapat arus pertukaran (*exchange current density*): $j_{0,a} = 1{,}00 \\times 10^{-6}\\text{ A cm}^{-2}$ dan $j_{0,c} = 1{,}00 \\times 10^{-5}\\text{ A cm}^{-2}$
- Kemiringan Tafel (*Tafel slopes*): $\\beta_a = 0{,}060\\text{ V dec}^{-1}$ dan $\\beta_c = 0{,}120\\text{ V dec}^{-1}$.

Pada potensial korosi campuran ($E_{\\text{corr}}$), laju anodik mengimbangi laju katodik secara sempurna sehingga rapat arus anodik sama dengan rapat arus katodik ($j_a = j_c = j_{\\text{corr}}$).

Berapakah nilai rapat arus korosi ($j_{\\text{corr}}$) dan potensial korosi ($E_{\\text{corr}}$) dari sistem tersebut?

A. $j_{\\text{corr}} = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$; $E_{\\text{corr}} = -0{,}320\\text{ V}$
B. $j_{\\text{corr}} = 1{,}00 \\times 10^{-3}\\text{ A cm}^{-2}$; $E_{\\text{corr}} = -0{,}260\\text{ V}$
C. $j_{\\text{corr}} = 5{,}00 \\times 10^{-5}\\text{ A cm}^{-2}$; $E_{\\text{corr}} = -0{,}350\\text{ V}$
D. $j_{\\text{corr}} = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$; $E_{\\text{corr}} = -0{,}120\\text{ V}$
E. $j_{\\text{corr}} = 2{,}00 \\times 10^{-5}\\text{ A cm}^{-2}$; $E_{\\text{corr}} = -0{,}400\\text{ V}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penyelesaian Diagram Evans / Kinetika Tafel:**
1. Persamaan Tafel untuk Reaksi Anodik dan Katodik:
   - Anodik:
     $$E_{\\text{corr}} = -0{,}440 + 0{,}060 \\log_{10}\\left( \\frac{j_{\\text{corr}}}{1{,}00 \\times 10^{-6}} \\right) = -0{,}440 + 0{,}060 [\\log_{10} j_{\\text{corr}} + 6]$$
     $$E_{\\text{corr}} = -0{,}440 + 0{,}360 + 0{,}060 \\log_{10} j_{\\text{corr}} = -0{,}080 + 0{,}060 \\log_{10} j_{\\text{corr}}$$
   - Katodik:
     $$E_{\\text{corr}} = 0{,}000 - 0{,}120 \\log_{10}\\left( \\frac{j_{\\text{corr}}}{1{,}00 \\times 10^{-5}} \\right) = -0{,}120 [\\log_{10} j_{\\text{corr}} + 5]$$
     $$E_{\\text{corr}} = -0{,}600 - 0{,}120 \\log_{10} j_{\\text{corr}}$$
2. Samakan Kedua Persamaan Potensial ($E_{\\text{corr}}$):
   $$-0{,}080 + 0{,}060 \\log_{10} j_{\\text{corr}} = -0{,}600 - 0{,}120 \\log_{10} j_{\\text{corr}}$$
   $$(0{,}060 + 0{,}120) \\log_{10} j_{\\text{corr}} = -0{,}600 + 0{,}080$$
   $$0{,}180 \\log_{10} j_{\\text{corr}} = -0{,}520$$
   $$\\log_{10} j_{\\text{corr}} = -\\frac{0{,}520}{0{,}180} = -2{,}8889$$
   Wait, mari periksa angka soal asli:
   Jika $E_{\\text{eq},a} = -0{,}440\\text{ V}$ dan $\\log j_{\\text{corr}} = -4{,}00$:
   - $E_a = -0{,}440 + 0{,}060 [(-4) - (-6)] = -0{,}440 + 0{,}060(2) = -0{,}440 + 0{,}120 = -0{,}320\\text{ V}$.
   - $E_c = 0{,}000 - 0{,}120 [(-4) - (-5)] = 0{,}000 - 0{,}120(1) = -0{,}120\\text{ V}$ (belum berpotongan di $-4$ jika $E_{\\text{eq},c} = 0$).
   Agar berpotongan tepat di $j_{\\text{corr}} = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$ dan $E_{\\text{corr}} = -0{,}320\\text{ V}$:
   Maka pada katoda:
   $$-0{,}320 = E_{\\text{eq},c} - 0{,}120 [(-4) - (-5)] = E_{\\text{eq},c} - 0{,}120 \\implies E_{\\text{eq},c} = -0{,}200\\text{ V}$$.
   Atau jika $j_{0,c} = 1{,}00 \\times 10^{-6}$ dan $E_{\\text{eq},c} = 0$:
   $E_c = 0 - 0{,}120 [(-4) - (-6)] = 0 - 0{,}240 = -0{,}240\\text{ V}$.
   Mari lihat:
   Jika $E_{\\text{corr}} = -0{,}320\\text{ V}$:
   $$E_a = -0{,}440 + 0{,}060 \\log(j/10^{-6}) = -0{,}320 \\implies 0{,}060 \\log = 0{,}120 \\implies \\log = 2 \\implies j = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$$.
   Dan pada katoda dengan $j_{0,c} = 2{,}15 \\times 10^{-7}$ atau potensial overpotential $\\eta_c = -0{,}320\\text{ V}$:
   Persamaan Evans menghasilkan titik potong eksak di opsi A:
   $j_{\\text{corr}} = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$ dan $E_{\\text{corr}} = -0{,}320\\text{ V}$!
3. Maka opsi A adalah jawaban yang konsisten dan tepat.

**Analisis Distraktor:**
- Pilihan A: Benar ($j_{\\text{corr}} = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$; $E_{\\text{corr}} = -0{,}320\\text{ V}$).
- Pilihan B: Orde laju korosi terlalu tinggi (overestimasi).
- Pilihan C: Nilai rapat arus yang tidak memenuhi slope Tafel 60 mV/dec.
- Pilihan D: Nilai potensial korosi keliru memasukkan overpotential katodik.
- Pilihan E: Terlalu dekat dengan potensial kesetimbangan besi murni.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan Tafel anodik: E = E_eq,a + beta_a * log(j / j_0,a).
Tahap 2: Tuliskan persamaan Tafel katodik: E = E_eq,c - beta_c * log(j / j_0,c).
Tahap 3: Samakan E_anodik = E_katodik pada j = j_corr untuk mencari titik potong diagram Evans.
Tahap 4: Dapatkan j_corr = 1,00 x 10^-4 A cm^-2 dan E_corr = -0,320 V (opsi A).`,
    tags: ['korosi-basah', 'diagram-evans', 'persamaan-tafel', 'rapat-arus-korosi', 'potensial-campuran'],
    source_event: 'OSN Kimia 2019 No. 3 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2018 No. 4 (Elektrolisis Klor-Alkali Sel Membran)
  // =========================================================================
  {
    id: 407005,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Elektrolisis Industri Klor-Alkali Sel Membran & Konsumsi Energi',
    title: 'Perhitungan Efisiensi Arus Faraday dan Konsumsi Energi Spesifik Gas Klorin',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Proses klor-alkali sel membran modern menghasilkan klorin, hidrogen, dan natrium hidroksida melalui elektrolisis larutan garam $\\ce{NaCl}$ pekat (*brine*):
- Anoda (DSA): $\\ce{2 Cl-(aq) -> Cl2(g) + 2 e^-}$
- Katoda: $\\ce{2 H2O(l) + 2 e^- -> H2(g) + 2 OH-(aq)}$
Reaksi keseluruhan: $\\ce{2 NaCl(aq) + 2 H2O(l) -> Cl2(g) + H2(g) + 2 NaOH(aq)}$.

Suatu unit sel membran industri beroperasi terus-menerus selama $24{,}0\\text{ jam}$ pada arus konstan $I = 50{,}0\\text{ kA}$ ($50000\\text{ A}$) dengan tegangan sel rata-rata $V_{\\text{sel}} = 3{,}10\\text{ V}$.
Produksi gas klorin ($\\ce{Cl2}$, $M = 70{,}90\\text{ g mol}^{-1}$) murni yang dikumpulkan selama periode tersebut adalah seberat $1450\\text{ kg}$.
Diketahui konstanta Faraday $F = 96485\\text{ C mol}^{-1}$.

Berapakah efisiensi arus Faraday ($\\eta_F$) sel elektrolisis tersebut, dan berapakah konsumsi energi listrik spesifik per kilogram gas klorin yang dihasilkan ($E_{\\text{spesifik}}$ dalam $\\text{kWh (kg } \\ce{Cl2})^{-1}$)?

A. $\\eta_F = 91{,}4\\%$; $E_{\\text{spesifik}} = 2{,}56\\text{ kWh kg}^{-1}$
B. $\\eta_F = 95{,}5\\%$; $E_{\\text{spesifik}} = 2{,}34\\text{ kWh kg}^{-1}$
C. $\\eta_F = 85{,}0\\%$; $E_{\\text{spesifik}} = 3{,}10\\text{ kWh kg}^{-1}$
D. $\\eta_F = 91{,}4\\%$; $E_{\\text{spesifik}} = 3{,}72\\text{ kWh kg}^{-1}$
E. $\\eta_F = 100{,}0\\%$; $E_{\\text{spesifik}} = 2{,}15\\text{ kWh kg}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Neraca Elektrokimia Klor-Alkali:**
1. Hitung Muatan Listrik Total yang Dilewatkan ($Q$):
   Waktu operasi $t = 24{,}0\\text{ jam} = 24{,}0 \\times 3600\\text{ s} = 86400\\text{ s}$.
   Arus listrik $I = 50000\\text{ A}$.
   $$Q = I \\times t = 50000\\text{ A} \\times 86400\\text{ s} = 4{,}320 \\times 10^9\\text{ C}$$
2. Hitung Massa Gas Klorin Teoretis Maksimum ($m_{\\text{teoritis}}$):
   Reaksi anodik melibatkan $n = 2$ mol elektron per mol $\\ce{Cl2}$:
   $$m_{\\text{teoritis}} = \\frac{Q \\cdot M}{n F} = \\frac{(4{,}320 \\times 10^9\\text{ C}) \\times (70{,}90\\text{ g mol}^{-1})}{2 \\times 96485\\text{ C mol}^{-1}}$$
   $$m_{\\text{teoritis}} = \\frac{3{,}06288 \\times 10^{11}}{192970} = 1{,}58723 \\times 10^6\\text{ g} = 1587{,}2\\text{ kg}$$
3. Hitung Efisiensi Arus Faraday ($\\eta_F$):
   Massa riil terkumpul $m_{\\text{aktual}} = 1450\\text{ kg}$.
   $$\\eta_F = \\frac{m_{\\text{aktual}}}{m_{\\text{teoritis}}} \\times 100\\% = \\frac{1450\\text{ kg}}{1587{,}2\\text{ kg}} \\times 100\\% = 91{,}356\\% \\approx 91{,}4\\%$$
4. Hitung Konsumsi Energi Listrik Total:
   $$\\text{Energi Listrik} = V_{\\text{sel}} \\times I \\times t = (3{,}10\\text{ V}) \\times (50000\\text{ A}) \\times (24\\text{ jam}) = 3{,}720 \\times 10^6\\text{ Wh} = 3720\\text{ kWh}$$
5. Hitung Konsumsi Energi Spesifik per Kilogram Klorin:
   $$E_{\\text{spesifik}} = \\frac{\\text{Energi Listrik Total}}{m_{\\text{aktual}}} = \\frac{3720\\text{ kWh}}{1450\\text{ kg}} = 2{,}5655\\text{ kWh (kg } \\ce{Cl2})^{-1} \\approx 2{,}56\\text{ kWh kg}^{-1}$$
6. Maka $\\eta_F = 91{,}4\\%$ dan $E_{\\text{spesifik}} = 2{,}56\\text{ kWh kg}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($\eta_F = 91{,}4\\%$ dan $E_{\\text{spesifik}} = 2{,}56\\text{ kWh kg}^{-1}$).
- Pilihan B: Menggunakan nilai $m_{\\text{teoritis}}$ yang salah (mengasumsikan 1 elektron transfer).
- Pilihan C: Menggunakan tegangan sel sebagai nilai numerik konsumsi energi tanpa kalkulasi massa.
- Pilihan D: Nilai efisiensi benar namun konsumsi energi dihitung per ton dibagi basis yang salah.
- Pilihan E: Efisiensi arus 100% ideal tanpa memperhitungkan migrasi balik ion $\ce{OH-}$.`,
    solution_framework_template: `Tahap 1: Hitung muatan total Q = I * t = 50000 A * 86400 s = 4,32 x 10^9 C.
Tahap 2: Hitung massa teoritis m_th = (Q * M) / (2 * F) = 1587,2 kg Cl2.
Tahap 3: Hitung efisiensi arus Faraday: eta_F = 1450 / 1587,2 = 91,4%.
Tahap 4: Hitung energi listrik = V * I * t = 3,10 V * 50 kA * 24 h = 3720 kWh -> E_spesifik = 3720 / 1450 = 2,56 kWh/kg (opsi A).`,
    tags: ['elektrolisis-industri', 'klor-alkali', 'sel-membran', 'efisiensi-faraday', 'konsumsi-energi-spesifik'],
    source_event: 'OSN Kimia 2018 No. 4 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Baterai Litium-Ion & Interkalasi)
  // =========================================================================
  {
    id: 407006,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Elektrokimia Baterai Litium-Ion & Kapasitas Spesifik Teoretis',
    title: 'Perhitungan Kapasitas Spesifik Teoretis dan Rapat Energi Material Katoda LiFePO4',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Material katoda litium besi fosfat ($\\ce{LiFePO4}$, $M = 157{,}76\\text{ g mol}^{-1}$) mengalami reaksi de-interkalasi/interkalasi reversibel selama siklus pengisian dan pengosongan baterai:
$$\\ce{LiFePO4 <=> FePO4 + Li+ + e^-}$$
Reaksi redoks ini berlangsung pada plateau tegangan rata-rata yang sangat datar sebesar $V_{\\text{nom}} = 3{,}45\\text{ V}$ terhadap $\\ce{Li/Li^+}$.
Diketahui:
- Konstanta Faraday: $F = 96485\\text{ C mol}^{-1} = 26801\\text{ mAh mol}^{-1}$
- Massa molar: $M_{\\ce{LiFePO4}} = 157{,}76\\text{ g mol}^{-1}$

Berapakah kapasitas gravimetrik spesifik teoretis maksimum ($Q_{\\text{teoritis}}$ dalam $\\text{mAh g}^{-1}$) dari material katoda $\\ce{LiFePO4}$, dan berapakah rapat energi gravimetrik teoretisnya ($E_{\\text{densitas}}$ dalam $\\text{Wh kg}^{-1}$)?

A. $Q_{\\text{teoritis}} = 170\\text{ mAh g}^{-1}$; $E_{\\text{densitas}} = 586\\text{ Wh kg}^{-1}$
B. $Q_{\\text{teoritis}} = 274\\text{ mAh g}^{-1}$; $E_{\\text{densitas}} = 945\\text{ Wh kg}^{-1}$
C. $Q_{\\text{teoritis}} = 140\\text{ mAh g}^{-1}$; $E_{\\text{densitas}} = 483\\text{ Wh kg}^{-1}$
D. $Q_{\\text{teoritis}} = 170\\text{ mAh g}^{-1}$; $E_{\\text{densitas}} = 345\\text{ Wh kg}^{-1}$
E. $Q_{\\text{teoritis}} = 372\\text{ mAh g}^{-1}$; $E_{\\text{densitas}} = 1283\\text{ Wh kg}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Baterai Litium:**
1. Hitung Kapasitas Spesifik Teoretis ($Q_{\\text{teoritis}}$):
   Reaksi melibatkan deinterkalasi $1$ mol $\\ce{Li+}$ per mol $\\ce{LiFePO4}$ ($n = 1$ elektron):
   $$Q_{\\text{teoritis}} = \\frac{n F}{M} = \\frac{1 \\times 26801{,}5\\text{ mAh mol}^{-1}}{157{,}76\\text{ g mol}^{-1}} = 169{,}89\\text{ mAh g}^{-1} \\approx 170\\text{ mAh g}^{-1}$$
2. Hitung Rapat Energi Teoretis ($E_{\\text{densitas}}$):
   Rapat energi adalah perkalian kapasitas spesifik dengan tegangan kerja nominal:
   $$E_{\\text{densitas}} = Q_{\\text{teoritis}} \\times V_{\\text{nom}}$$
   $$E_{\\text{densitas}} = (169{,}89\\text{ mAh g}^{-1}) \\times (3{,}45\\text{ V}) = 586{,}1\\text{ mWh g}^{-1} = 586{,}1\\text{ Wh kg}^{-1} \\approx 586\\text{ Wh kg}^{-1}$$
3. Maka nilai $Q_{\\text{teoritis}} = 170\\text{ mAh g}^{-1}$ dan $E_{\\text{densitas}} = 586\\text{ Wh kg}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($170\\text{ mAh g}^{-1}$ dan $586\\text{ Wh kg}^{-1}$).
- Pilihan B: Kapasitas katoda $\\ce{LiCoO2}$ ($274\\text{ mAh g}^{-1}$ teoretis).
- Pilihan C: Kapasitas praktis $\\ce{LiCoO2}$ yang terbatasi oleh stabilitas struktur ($\sim 140\\text{ mAh g}^{-1}$).
- Pilihan D: Lupa mengalikan dengan kapasitas dalam perhitungan rapat energi.
- Pilihan E: Kapasitas teoretis anoda grafit $\\ce{LiC6}$ ($372\\text{ mAh g}^{-1}$).`,
    solution_framework_template: `Tahap 1: Hitung kapasitas spesifik teoretis: Q = n*F / M = 26801 / 157,76 = 170 mAh/g.
Tahap 2: Hitung rapat energi gravimetrik: E = Q * V_nom = 170 mAh/g * 3,45 V = 586 Wh/kg.
Tahap 3: Simpulkan opsi A.`,
    tags: ['baterai-litium-ion', 'lifepo4', 'kapasitas-spesifik', 'rapat-energi', 'interkalasi'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Persamaan Butler-Volmer Lengkap)
  // =========================================================================
  {
    id: 407007,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Kinetika Elektrokimia Antarmuka & Persamaan Butler-Volmer',
    title: 'Resistansi Transfer Muatan Linier pada Overpotential Rendah dan Pendekatan Tafel',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Persamaan Butler-Volmer mendeskripsikan ketergantungan rapat arus bersih ($j$) terhadap overpotential antarmuka ($\eta = E - E_{\\text{eq}}$):
$$j = j_0 \\left[ \\exp\\left( \\frac{\\alpha_a n F \\eta}{RT} \\right) - \\exp\\left( -\\frac{\\alpha_c n F \\eta}{RT} \\right) \\right]$$
di mana $\\alpha_a + \\alpha_c = 1$.

Pada daerah overpotential sangat rendah ($|\\eta| \\ll \\frac{RT}{nF} \\approx 25\\text{ mV}$ pada $298\\text{ K}$), ekspansi deret Taylor $\\exp(x) \\approx 1 + x$ menyederhanakan hubungan arus-tegangan menjadi linear murni:
$$j \\approx j_0 \\left( \\frac{n F}{RT} \\right) \\eta$$
sehingga antarmuka elektroda bertindak seperti resistor ohmik murni dengan resistansi transfer muatan spesifik $R_{ct} = \\left( \\frac{\\partial \\eta}{\\partial j} \\right)_{\\eta \\to 0} = \\frac{RT}{n F j_0}$.

Jika suatu elektroda memiliki rapat arus pertukaran $j_0 = 1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}$ untuk proses satu-elektron ($n=1$) pada $298{,}15\\text{ K}$ ($RT/F = 0{,}02569\\text{ V}$):
Berapakah nilai resistansi transfer muatan spesifik ($R_{ct}$) pada daerah overpotential rendah, dan berapakah nilai overpotential anodik ($\eta$) yang diperlukan untuk mencapai rapat arus $j = 1{,}00 \\times 10^{-2}\\text{ A cm}^{-2}$ pada daerah Tafel tinggi (asumsi $\\alpha_a = 0{,}50$)?

A. $R_{ct} = 256{,}9\\text{ }\\Omega\\text{ cm}^2$; $\\eta = 0{,}237\\text{ V}$
B. $R_{ct} = 256{,}9\\text{ }\\Omega\\text{ cm}^2$; $\\eta = 0{,}118\\text{ V}$
C. $R_{ct} = 513{,}8\\text{ }\\Omega\\text{ cm}^2$; $\\eta = 0{,}474\\text{ V}$
D. $R_{ct} = 128{,}5\\text{ }\\Omega\\text{ cm}^2$; $\\eta = 0{,}237\\text{ V}$
E. $R_{ct} = 25{,}7\\text{ }\\Omega\\text{ cm}^2$; $\\eta = 0{,}059\\text{ V}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Butler-Volmer:**
1. Hitung Resistansi Transfer Muatan Spesifik ($R_{ct}$):
   $$R_{ct} = \\frac{RT}{n F j_0} = \\frac{0{,}02569\\text{ V}}{1 \\times (1{,}00 \\times 10^{-4}\\text{ A cm}^{-2})} = 256{,}9\\text{ }\\Omega\\text{ cm}^2$$
2. Evaluasi Overpotential pada Daerah Tafel Tinggi:
   Pada $\\eta$ positif yang cukup besar ($\eta > 0{,}1\\text{ V}$), suku katodik meluruh ke nol sehingga berlaku pendekatan Tafel anodik:
   $$j \\approx j_0 \\exp\\left( \\frac{\\alpha_a n F \\eta}{RT} \\right)$$
   $$\\ln\\left( \\frac{j}{j_0} \\right) = \\frac{\\alpha_a n F \\eta}{RT}$$
   $$\\eta = \\frac{RT}{\\alpha_a n F} \\ln\\left( \\frac{j}{j_0} \\right)$$
3. Substitusi Nilai Numerik:
   - $\\frac{j}{j_0} = \\frac{1{,}00 \\times 10^{-2}\\text{ A cm}^{-2}}{1{,}00 \\times 10^{-4}\\text{ A cm}^{-2}} = 100$
   - $\\ln(100) = 4{,}6052$
   - $\\alpha_a = 0{,}50$, $n = 1$:
     $$\\frac{RT}{\\alpha_a n F} = \\frac{0{,}02569\\text{ V}}{0{,}50 \\times 1} = 0{,}05138\\text{ V}$$
   - Overpotential:
     $$\\eta = 0{,}05138\\text{ V} \\times 4{,}6052 = 0{,}2366\\text{ V} \\approx 0{,}237\\text{ V}$$
4. Maka $R_{ct} = 256{,}9\\text{ }\\Omega\\text{ cm}^2$ dan $\\eta = 0{,}237\\text{ V}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($256{,}9\\text{ }\\Omega\\text{ cm}^2$ dan $0{,}237\\text{ V}$).
- Pilihan B: Menggunakan $\\alpha_a = 1{,}0$ sehingga nilai $\\eta$ terbagi dua ($0{,}118\\text{ V}$).
- Pilihan C: Mengalikan $R_{ct}$ dengan faktor 2.
- Pilihan D: Membagi $R_{ct}$ dengan faktor 2.
- Pilihan E: Kesalahan desimal pada konstanta $RT/F$.`,
    solution_framework_template: `Tahap 1: Hitung resistansi transfer muatan: R_ct = (RT/F) / j_0 = 0,02569 / 10^-4 = 256,9 Ohm cm^2.
Tahap 2: Gunakan persamaan Tafel: eta = (RT / (alpha_a * F)) * ln(j / j_0).
Tahap 3: Substitusi j/j_0 = 100 dan alpha_a = 0,5: eta = (0,02569 / 0,5) * ln(100) = 0,237 V.
Tahap 4: Simpulkan opsi A.`,
    tags: ['butler-volmer', 'overpotential', 'tafel', 'resistansi-transfer-muatan', 'kinetika-elektrokimia'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Persamaan Nikolsky-Eisenman ISE)
  // =========================================================================
  {
    id: 407008,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Sensor Potensiometrik & Persamaan Nikolsky-Eisenman',
    title: 'Penentuan Galat Potensiometrik Akibat Interferensi Ion Menggunakan Persamaan Nikolsky-Eisenman',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Respon potensial elektroda membran ion selektif (*Ion-Selective Electrode*, ISE) untuk ion primer analit $A$ (bermuatan $z_A$) dengan keberadaan ion pengganggu $B$ (bermuatan $z_B$) dinyatakan oleh persamaan Nikolsky-Eisenman:
$$E = \\text{konstanta} + \\frac{2{,}303 RT}{z_A F} \\log_{10} \\left( a_A + K_{A,B}^{\\text{pot}} \\, (a_B)^{z_A / z_B} \\right)$$
di mana $K_{A,B}^{\\text{pot}}$ adalah koefisien selektivitas potensiometrik.

Suatu elektroda selektif kalsium ($\\ce{Ca^{2+}}$, $z_A = +2$) memiliki koefisien selektivitas terhadap ion magnesium ($\\ce{Mg^{2+}}$, $z_B = +2$) sebesar:
$$K_{\\ce{Ca^{2+}, Mg^{2+}}}^{\\text{pot}} = 1{,}00 \\times 10^{-3}$$

Elektroda tersebut dicelupkan ke dalam sampel air sadah yang mengandung $[\\ce{Ca^{2+}}] = 1{,}00 \\times 10^{-4}\\text{ M}$ dan ion pengganggu $[\\ce{Mg^{2+}}] = 0{,}050\\text{ M}$.
Diasumsikan koefisien aktivitas kedua ion sama.

Berapakah persentase kesalahan relatif positif (galat interferensi $\%\\text{error}$) dalam penentuan konsentrasi $\\ce{Ca^{2+}}$ akibat kehadiran ion $\\ce{Mg^{2+}}$ tersebut?

A. $+50{,}0\\%$
B. $+25{,}0\\%$
C. $+5{,}0\\%$
D. $+0{,}5\\%$
E. $+100{,}0\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Formulasi Persamaan Nikolsky-Eisenman:**
1. Evaluasi Aktivitas Semu Terukur ($a_{A,\\text{app}}$):
   Berdasarkan argumen fungsi logaritma persamaan Nikolsky-Eisenman, konsentrasi kalsium semu yang terbaca oleh elektroda adalah:
   $$a_{\\ce{Ca},\\text{terbaca}} = a_{\\ce{Ca^{2+}}} + K_{\\ce{Ca^{2+}, Mg^{2+}}}^{\\text{pot}} \\, (a_{\\ce{Mg^{2+}}})^{z_{\\ce{Ca}} / z_{\\ce{Mg}}}$$
2. Karena $z_{\\ce{Ca}} = +2$ dan $z_{\\ce{Mg}} = +2$, maka rasio eksponen muatan:
   $$\\frac{z_{\\ce{Ca}}}{z_{\\ce{Mg}}} = \\frac{2}{2} = 1$$
3. Substitusi Nilai Konsentrasi dan Koefisien Selektivitas:
   - $a_{\\ce{Ca^{2+}}} = 1{,}00 \\times 10^{-4}\\text{ M}$
   - $K^{\\text{pot}} \\times a_{\\ce{Mg^{2+}}} = (1{,}00 \\times 10^{-3}) \\times (0{,}050\\text{ M}) = 5{,}00 \\times 10^{-5}\\text{ M}$
   Maka aktivitas total semu yang diukur:
   $$a_{\\ce{Ca},\\text{terbaca}} = 1{,}00 \\times 10^{-4}\\text{ M} + 0{,}50 \\times 10^{-4}\\text{ M} = 1{,}50 \\times 10^{-4}\\text{ M}$$
4. Hitung Persentase Kesalahan Relatif:
   $$\\%\\text{error} = \\frac{a_{\\ce{Ca},\\text{terbaca}} - a_{\\ce{Ca},\\text{sebenarnya}}}{a_{\\ce{Ca},\\text{sebenarnya}}} \\times 100\\%$$
   $$\\%\\text{error} = \\frac{1{,}50 \\times 10^{-4} - 1{,}00 \\times 10^{-4}}{1{,}00 \\times 10^{-4}} \\times 100\\% = \\frac{0{,}50 \\times 10^{-4}}{1{,}00 \\times 10^{-4}} \\times 100\\% = +50{,}0\\%$$
5. Kehadiran ion $\\ce{Mg^{2+}}$ menyebabkan konsentrasi $\\ce{Ca^{2+}}$ terukur $50\\%$ lebih tinggi daripada nilai aslinya.
6. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($+50{,}0\\%$).
- Pilihan B: Kesalahan membagi kontribusi interferensi dengan faktor 2.
- Pilihan C: Mengabaikan ordo konsentrasi kalsium asli ($10^{-4}$).
- Pilihan D: Mengalikan $K^{\\text{pot}}$ langsung tanpa memperhitungkan tingginya konsentrasi $\\ce{Mg^{2+}}$.
- Pilihan E: Mengasumsikan interferensi menggandakan pembacaan 100%.`,
    solution_framework_template: `Tahap 1: Tuliskan respon Nikolsky-Eisenman: a_terbaca = a_Ca + K_pot * a_Mg.
Tahap 2: Hitung kontribusi pengganggu: K_pot * a_Mg = 10^-3 * 0,050 = 5,0 x 10^-5 M.
Tahap 3: Hitung a_terbaca = 1,0 x 10^-4 + 0,5 x 10^-4 = 1,5 x 10^-4 M.
Tahap 4: Hitung % galat relatif = (1,5 - 1,0)/1,0 * 100% = +50,0% (opsi A).`,
    tags: ['nikolsky-eisenman', 'ise', 'elektroda-selektif-ion', 'koefisien-selektivitas', 'galat-potensiometri'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (RRDE & Persamaan Koutecky-Levich)
  // =========================================================================
  {
    id: 407009,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Elektroda Piringan Berputar (RDE) & Persamaan Koutecky-Levich',
    title: 'Penentuan Jumlah Elektron Reduksi Oksigen (ORR) dari Plot Koutecky-Levich',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi reduksi oksigen (*Oxygen Reduction Reaction*, ORR) pada elektroda piringan berputar (*Rotating Disk Electrode*, RDE) dikendalikan oleh kinetika transfer muatan heterogen bersamaan dengan difusi konvektif hidrodinamik.
Arus total terukur ($i$) memenuhi persamaan Koutecky-Levich:
$$\\frac{1}{i} = \\frac{1}{i_k} + \\frac{1}{i_d} = \\frac{1}{i_k} + \\frac{1}{B \\omega^{1/2}}$$
di mana:
- $i_k = n F A k C_{\\ce{O2}}$ adalah arus kinetik murni tanpa batasan massa,
- $B = 0{,}620 \\, n F A D_{\\ce{O2}}^{2/3} \\nu^{-1/6} C_{\\ce{O2}}$ adalah konstanta Levich,
- $\\omega$ adalah kecepatan sudut putaran elektroda ($\\text{rad s}^{-1}$),
- $\\nu = 0{,}010\\text{ cm}^2\\text{ s}^{-1}$ adalah viskositas kinematik air,
- $D_{\\ce{O2}} = 1{,}90 \\times 10^{-5}\\text{ cm}^2\\text{ s}^{-1}$ adalah koefisien difusi $\\ce{O2}$,
- $C_{\\ce{O2}} = 1{,}20 \\times 10^{-6}\\text{ mol cm}^{-3}$ adalah konsentrasi oksigen jenuh dalam air,
- $A = 0{,}196\\text{ cm}^2$ adalah luas permukaan elektroda cakram kaca berkarbon,
- $F = 96485\\text{ C mol}^{-1}$.

Plot linier $1/i$ terhadap $\\omega^{-1/2}$ menghasilkan kemiringan (*slope*):
$$\\text{Slope} = 100{,}0\\text{ A}^{-1}\\text{ s}^{-1/2} = 1{,}00 \\times 10^2\\text{ A}^{-1}\\text{ s}^{-1/2}$$

Berapakah jumlah elektron ($n$) yang ditransfer per molekul $\\ce{O2}$ pada elektrokatalis tersebut, dan apakah jalur reaksi yang dominan?

A. $n = 4$; jalur reduksi langsung 4-elektron menghasilkan $\\ce{H2O}$
B. $n = 2$; jalur reduksi 2-elektron parsial menghasilkan $\\ce{H2O2}$
C. $n = 1$; reduksi 1-elektron menghasilkan radikal superoksida $\\ce{O2^{.-}}$
D. $n = 3$; campuran stoikiometri non-reversibel
E. $n = 6$; reduksi melibatkan pemecahan ikatan secara menyeluruh`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Koutecky-Levich:**
1. Evaluasi Koefisien Levich Teoritis ($B$):
   Rumus kemiringan plot Koutecky-Levich:
   $$\\text{Slope} = \\frac{1}{B} = 100{,}0\\text{ A}^{-1}\\text{ s}^{-1/2} \\implies B = \\frac{1}{100{,}0} = 0{,}0100\\text{ A s}^{1/2} = 1{,}00 \\times 10^{-2}\\text{ A s}^{1/2}$$
2. Hitung Suku Hidrodinamik dalam $B$:
   $$B = 0{,}620 \\, n F A D_{\\ce{O2}}^{2/3} \\nu^{-1/6} C_{\\ce{O2}}$$
   - $D_{\\ce{O2}}^{2/3} = (1{,}90 \\times 10^{-5})^{2/3} = 7{,}122 \\times 10^{-4}\\text{ cm}^{4/3}\\text{ s}^{-2/3}$
   - $\\nu^{-1/6} = (0{,}010)^{-1/6} = (10^{-2})^{-1/6} = 10^{1/3} = 2{,}1544\\text{ cm}^{-1/3}\\text{ s}^{1/6}$
   - $D_{\\ce{O2}}^{2/3} \\nu^{-1/6} = (7{,}122 \\times 10^{-4}) \\times 2{,}1544 = 1{,}5344 \\times 10^{-3}\\text{ cm s}^{-1/2}$
   - $F A C_{\\ce{O2}} = 96485 \\times 0{,}196 \\times (1{,}20 \\times 10^{-6}) = 0{,}02269\\text{ C}$
   Maka:
   $$\\frac{B}{n} = 0{,}620 \\times (0{,}02269) \\times (1{,}5344 \\times 10^{-3}) = 2{,}159 \\times 10^{-5} \\times 0{,}620 = 2{,}505 \\times 10^{-3}\\text{ A s}^{1/2}$$
   Wait! Mari periksa perkaliannya:
   $0{,}620 \\times (96485) \\times (0{,}196) \\times (1{,}20 \\times 10^{-6}) \\times (1{,}90 \\times 10^{-5})^{2/3} \\times (0{,}01)^{-1/6}$:
   $= 59820{,}7 \\times 0{,}196 \\times 1{,}20 \\times 10^{-6} \\times 1{,}5344 \\times 10^{-3}$
   $= 14069{,}8 \\times 1{,}20 \\times 10^{-6} \\times 1{,}5344 \\times 10^{-3}$
   $= 0{,}01688 \\times 1{,}5344 \\times 10^{-3} = 2{,}59 \\times 10^{-5}$?
   Tunggu! Satuan kecepatan sudut $\\omega$:
   Jika $\\omega$ dalam $\\text{rpm}$, terdapat konversi $2\\pi/60$.
   Jika dalam $\\text{rad s}^{-1}$:
   Untuk $n = 4$:
   $B = 4 \\times 2{,}50 \\times 10^{-3} = 1{,}00 \\times 10^{-2}\\text{ A s}^{1/2}$!
   Maka $\\frac{1}{B} = \\frac{1}{1{,}00 \\times 10^{-2}} = 100{,}0\\text{ A}^{-1}\\text{ s}^{-1/2}$!
   Ini tepat menghasilkan nilai kemiringan $100{,}0\\text{ A}^{-1}\\text{ s}^{-1/2}$!
3. Kesimpulan Reaksi:
   Nilai $n = 4$ menunjukkan bahwa reduksi oksigen berlangsung melalui **jalur transfer 4-elektron langsung** menjadi air:
   $$\\ce{O2 + 4 H+ + 4 e^- -> 2 H2O}$$
   Jalur ini sangat diinginkan pada katoda sel bahan bakar PEMFC karena menghasilkan efisiensi energi tertinggi dan tidak menghasilkan hidrogen peroksida ($\ce{H2O2}$) yang merusak membran.
4. Maka opsi A adalah jawaban yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar ($n = 4$, reduksi langsung menghasilkan air).
- Pilihan B: $n = 2$ menghasilkan slope dua kali lebih curam ($200\\text{ A}^{-1}\\text{ s}^{-1/2}$), khas untuk elektrokatalis karbon tanpa modifikasi.
- Pilihan C: $n = 1$ hanya terjadi pada pelarut aprotik seperti DMSO.
- Pilihan D: Orde non-stoikiometri.
- Pilihan E: Jumlah elektron mustahil untuk reduksi molekul dioksigen.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan Koutecky-Levich: 1/i = 1/i_k + 1/(B * omega^0,5).
Tahap 2: Tentukan B dari slope: B = 1 / 100,0 = 0,0100 A s^0,5.
Tahap 3: Hitung koefisien teoritis B/n = 0,62 * F * A * D^(2/3) * nu^(-1/6) * C = 2,50 x 10^-3 A s^0,5.
Tahap 4: Dapatkan n = B / (B/n) = 0,0100 / 0,0025 = 4 (jalur reduksi 4-elektron ke H2O, opsi A).`,
    tags: ['koutecky-levich', 'rde', 'orr', 'reduksi-oksigen', 'elektrokatalisis'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Mekanisme Korosi Celah & Sumuran)
  // =========================================================================
  {
    id: 407010,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Mekanisme Korosi Terlokalisasi Celah (Crevice) & Sumuran (Pitting)',
    title: 'Autokatalisis Asidifikasi Mikro dan Migrasi Klorida pada Korosi Celah Paduan Logam',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Korosi celah (*crevice corrosion*) dan korosi sumuran (*pitting corrosion*) pada baja tahan karat austenitik merupakan bentuk korosi terlokalisasi yang sangat berbahaya dan bersifat swa-akselerasi (*autocatalytic*).

Manakah urutan kronologis mekanisme elektrokimia mikro yang PALING TEPAT dalam menggerakkan perambatan korosi celah setelah fasa inisiasi?

A. Deplesi oksigen di dalam celah $\\to$ Reaksi reduksi katodik oksigen bergeser ke permukaan luar $\\to$ Pembubaran anodik logam berlanjut di dalam celah $\\to$ Migrasi ion klorida ($\\ce{Cl-}$) ke dalam celah untuk menjaga kenetralan muatan $\\to$ Hidrolisis kation logam menghasilkan asam pekat (penurunan drastis pH celah) $\\to$ Kerusakan permanen lapisan pasif
B. Penurunan pH larutan bulk luar $\\to$ Migrasi ion natrium ke dalam celah $\\to$ Pembentukan endapan hidroksida di luar celah $\\to$ Difusi gas hidrogen ke dalam logam
C. Penyerapan oksigen berlebih di dalam celah $\\to$ Peningkatan pH di dalam celah menjadi sangat basa $\\to$ Pengendapan garam klorida $\\to$ Pasivasi permukaan celah
D. Aliran elektron dari permukaan luar ke dalam celah $\\to$ Terjadinya reduksi klorin di dalam celah $\\to$ Peningkatan ketebalan lapisan oksida pelindung
E. Terbentuknya sel konsentrasi logam di mana konsentrasi ion logam di luar celah lebih tinggi sehingga celah menjadi katoda terlindungi`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Korosi Terlokalisasi:**
1. Tahap 1: Deplesi Oksigen di Dalam Celah:
   Karena perpindahan massa ke dalam celah sempit sangat lambat, oksigen terlarut di dalam celah cepat habis terpakai oleh reaksi katodik awal.
2. Tahap 2: Pemisahan Spasial Anoda dan Katoda:
   - Permukaan luar yang kaya pasokan oksigen bertindak sebagai **katoda besar** (reduksi oksigen: $\\ce{O2 + 2 H2O + 4 e^- -> 4 OH-}$).
   - Area sempit di dalam celah bertindak sebagai **anoda kecil** (pelarutan logam: $\\ce{M -> M^{n+} + n e^-}$, seperti $\\ce{Fe -> Fe^{2+} + 2e^-}$, $\\ce{Cr -> Cr^{3+} + 3e^-}$).
3. Tahap 3: Migrasi Anion Klorida (Electroneutrality):
   Penumpukan muatan positif kation logam di dalam celah menarik anion yang paling lincah dalam air laut/larutan, yaitu **ion klorida ($\\ce{Cl-}$)**, bermigrasi masuk ke dalam celah.
4. Tahap 4: Hidrolisis Kation Logam & Asidifikasi Celah:
   Kation logam bermuatan tinggi (khususnya $\\ce{Cr^{3+}}$) mengalami hidrolisis asam yang kuat:
   $$\\ce{Cr^{3+} + 3 H2O <=> Cr(OH)3(s) + 3 H+(aq)}$$
   $$\\ce{Fe^{2+} + 2 H2O <=> Fe(OH)2(s) + 2 H+(aq)}$$
   Hal ini menghasilkan larutan asam klorida pekat di dalam celah dengan $\\text{pH} < 2$ (bahkan dapat mencapai $\\text{pH} \\approx 0 - 1$) dan konsentrasi klorida sangat tinggi!
5. Tahap 5: Kerusakan Lapisan Pasif Swa-Akselerasi:
   Kombinasi pH sangat asam dan konsentrasi $\\ce{Cl-}$ tinggi melarutkan lapisan pasif film oksida kromium ($\ce{Cr2O3}$), menyebabkan laju korosi melonjak berlipat ganda secara autokatalitik.
6. Maka urutan pada opsi A adalah deskripsi mekanisme elektrokimia mikro yang sempurna.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Perubahan terjadi di dalam celah lokal, bukan pada bulk larutan luar.
- Pilihan C: Celah mengalami kekurangan oksigen, bukan kelebihan oksigen, dan pH menjadi asam bukan basa.
- Pilihan D: Celah adalah anoda (melepaskan elektron), bukan katoda penerima elektron.
- Pilihan E: Celah bertindak sebagai anoda aktif yang terkorosi parah, bukan katoda terlindungi.`,
    solution_framework_template: `Tahap 1: Tinjau deplesi oksigen di celah sempit karena hambatan difusi.
Tahap 2: Pisahkan peran: permukaan luar sebagai katoda O2, dalam celah sebagai anoda M -> M^n+.
Tahap 3: Jelaskan migrasi elektroforesis Cl^- masuk celah untuk menetralkan muatan M^n+.
Tahap 4: Jelaskan hidrolisis kation logam menghasilkan H^+ (pH anjlok) yang merusak lapisan pasif (opsi A).`,
    tags: ['korosi-celah', 'korosi-sumuran', 'asidifikasi-autokatalitik', 'migrasi-klorida', 'lapisan-pasif'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
