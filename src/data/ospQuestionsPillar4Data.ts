/**
 * ospQuestionsPillar4Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 4: Termodinamika Kimia Lanjut, Persamaan Kirchhoff, Gibbs-Helmholtz & Joule-Thomson
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 304001 - 304010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 04 = Pilar 4
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_4_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 11 (Persamaan Kirchhoff Termodinamika Entalpi Suhu Tinggi)
  // =========================================================================
  {
    id: 304001,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Hukum Kirchhoff Termodinamika & Kapasitas Kalor Bergantung Temperatur',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Perhitungan Entalpi Reaksi Sintesis Amonia pada Suhu 600 K Menggunakan Persamaan Kirchhoff',
    question_text: `Sintesis gas amonia dalam skala industri berlangsung menurut persamaan reaksi:
$$\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$$

Diketahui data termodinamika standar pada suhu $298\\text{ K}$:
- Perubahan entalpi standar reaksi: $\\Delta H^\circ_{298} = -92{,}2\\text{ kJ/mol}$
- Kapasitas kalor molar pada tekanan tetap ($C_p$) diasumsikan konstan pada rentang suhu $298 - 600\\text{ K}$:
  - $C_p(\\ce{N2}) = 29{,}1\\text{ J/(mol K)}$
  - $C_p(\\ce{H2}) = 28{,}8\\text{ J/(mol K)}$
  - $C_p(\\ce{NH3}) = 35{,}1\\text{ J/(mol K)}$

Berdasarkan persamaan hukum Kirchhoff terintegrasi, nilai perubahan entalpi standar reaksi tersebut pada suhu $600\\text{ K}$ ($\\Delta H^\circ_{600}$) adalah mendekati ....

A. $-105{,}8\\text{ kJ/mol}$  
B. $-78{,}6\\text{ kJ/mol}$  
C. $-92{,}2\\text{ kJ/mol}$  
D. $-119{,}4\\text{ kJ/mol}$  
E. $+105{,}8\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Persamaan Hukum Kirchhoff:**
   $$\\Delta H_{T_2}^\circ = \\Delta H_{T_1}^\circ + \\int_{T_1}^{T_2} \\Delta C_p \\, dT$$
   Jika $\\Delta C_p$ diasumsikan konstan terhadap rentang suhu tersebut:
   $$\\Delta H_{T_2}^\circ = \\Delta H_{T_1}^\circ + \\Delta C_p (T_2 - T_1)$$

2. **Menghitung $\\Delta C_p$ Reaksi:**
   $$\\Delta C_p = 2 \\times C_p(\\ce{NH3}) - [C_p(\\ce{N2}) + 3 \\times C_p(\\ce{H2})]$$
   $$\\Delta C_p = 2(35{,}1) - [29{,}1 + 3(28{,}8)]$$
   $$\\Delta C_p = 70{,}2 - [29{,}1 + 86{,}4] = 70{,}2 - 115{,}5 = -45{,}3\\text{ J/(mol K)} = -0{,}0453\\text{ kJ/(mol K)}$$

3. **Perhitungan $\\Delta H^\circ$ pada $600\\text{ K}$:**
   $$\\Delta T = 600 - 298 = 302\\text{ K}$$
   $$\\Delta H_{600}^\circ = -92{,}2\\text{ kJ/mol} + [(-0{,}0453\\text{ kJ/(mol K)}) \\times 302\\text{ K}]$$
   $$\\Delta H_{600}^\circ = -92{,}2\\text{ kJ/mol} + (-13{,}68\\text{ kJ/mol}) = -105{,}88\\text{ kJ/mol} \\approx -105{,}8\\text{ kJ/mol}$$

Reaksi menjadi makin eksotermik pada suhu yang lebih tinggi karena kapasitas kalor total reaktan lebih besar daripada kapasitas kalor produk.

**Analisis Distraktor:**
- **A (-105,8 kJ/mol):** Benar.
- **B (-78,6 kJ/mol):** Kesalahan tanda aljabar pada penambahan $\\Delta C_p \\Delta T$ (dijumlahkan positif alih-alih dikurangkan).
- **C (-92,2 kJ/mol):** Mengabaikan efek temperatur pada entalpi (menganggap $\Delta H$ konstan).
- **D (-119,4 kJ/mol):** Lupa mengalikan koefisien 2 pada produk amonia.
- **E (+105,8 kJ/mol):** Kesalahan tanda endotermik.`,
    source_event: 'OSP Kimia 2023 No. 11 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2023)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSP 2022 No. 12 (Energi Bebas Helmholtz A & Kriteria Kespontanan V,T)
  // =========================================================================
  {
    id: 304002,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Fungsi Energi Bebas Helmholtz (A = U - TS) & Termodinamika Volume Konstan',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Kriteria Kespontanan Termodinamika dan Hubungan Maxwell Fungsi Helmholtz',
    question_text: `Fungsi energi bebas Helmholtz didefinisikan sebagai $A = U - TS$ (atau sering dinotasikan sebagai $F$).

Pernyataan yang **paling tepat** mengenai kriteria kespontanan proses termodinamika dan hubungan diferensial fundamental fungsi Helmholtz untuk sistem tertutup bermassa tetap adalah ....

A. Pada kondisi temperatur dan volume tetap ($T, V$ konstan), proses spontan selalu berlangsung dengan penurunan energi bebas Helmholtz ($(dA)_{T,V} \\le 0$), dan tekanan sistem dapat dinyatakan sebagai $P = -\\left(\\frac{\\partial A}{\\partial V}\\right)_T$  
B. Pada kondisi temperatur dan tekanan tetap ($T, P$ konstan), kespontanan ditentukan oleh $(dA)_{T,P} \\le 0$  
C. Nilai perubahan Helmholtz $\\Delta A$ menyatakan kerja ekspansi volum maksimum yang dapat dilakukan sistem  
D. Entropi sistem dapat diturunkan dari fungsi Helmholtz melalui hubungan $S = +\\left(\\frac{\\partial A}{\\partial T}\\right)_V$  
E. Fungsi Helmholtz selalu bernilai nol pada kondisi kesetimbangan dinamis`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Diferensial Fundamental Fungsi Helmholtz ($A$):**
   $$A = U - TS \\implies dA = dU - T dS - S dT$$
   Dari Hukum Pertama Termodinamika reversibel ($dU = T dS - P dV$):
   $$dA = (T dS - P dV) - T dS - S dT = -S dT - P dV$$

2. **Kriteria Kespontanan:**
   - Pada temperatur tetap ($dT = 0$) dan volume tetap ($dV = 0$):
     $$(dA)_{T,V} \\le 0$$
     Tanda sama dengan ($=0$) berlaku pada kesetimbangan, dan tanda kurang dari ($<0$) menandakan proses spontan (reversibel/irreversibel).
   - Kerja maksimum: Nilai $-\\Delta A$ menyatakan **kerja total maksimum (*maximum total work*)** yang dapat dihasilkan sistem pada suhu konstan.

3. **Hubungan Maxwell Turunan Parsial Tekanan:**
   Dari $dA = -S dT - P dV$:
   $$P = -\\left(\\frac{\\partial A}{\\partial V}\\right)_T \\quad \\text{dan} \\quad S = -\\left(\\frac{\\partial A}{\\partial T}\\right)_V$$

**Analisis Distraktor:**
- **A:** Benar secara matematis dan termodinamika.
- **B:** Pada $T, P$ konstan, kriteria kespontanan ditentukan oleh energi bebas Gibbs $(dG)_{T,P} \\le 0$, bukan Helmholtz.
- **C:** $\\Delta A$ menyatakan kerja total maksimum, bukan hanya kerja ekspansi.
- **D:** Terdapat tanda negatif: $S = -(\\partial A / \\partial T)_V$.
- **E:** Diferensial $dA = 0$, bukan nilai mutlak fungsinya $A = 0$.`,
    source_event: 'OSP Kimia 2022 No. 12 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-P 2021 No. 12 (Persamaan Gibbs-Helmholtz & Variasi K)
  // =========================================================================
  {
    id: 304003,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Persamaan Fundamental Gibbs-Helmholtz & Penurunan Persamaan van \'t Hoff',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penurunan Hubungan Ketergantungan Suhu Tetapan Kesetimbangan dari Persamaan Gibbs-Helmholtz',
    question_text: `Persamaan fundamental Gibbs-Helmholtz menyatakan laju perubahan energi bebas Gibbs terhadap temperatur pada tekanan konstan sebagai:
$$\\left[ \\frac{\\partial (\\Delta G^\\circ / T)}{\\partial T} \\right]_P = -\\frac{\\Delta H^\\circ}{T^2}$$

Dengan mensubstitusikan hubungan kesetimbangan termodinamika $\\Delta G^\\circ = -RT \\ln K$, persamaan diferensial van 't Hoff yang menghubungkan tetapan kesetimbangan ($K$) dengan entalpi reaksi standar ($\\Delta H^\\circ$) adalah ....

A. $\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$  
B. $\\frac{d \\ln K}{dT} = -\\frac{\\Delta H^\\circ}{RT^2}$  
C. $\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT}$  
D. $\\frac{d K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$  
E. $\\frac{d \\ln K}{dT} = \\frac{\\Delta S^\\circ}{R}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Substitusi $\\Delta G^\\circ$ ke dalam Persamaan Gibbs-Helmholtz:**
   $$\\Delta G^\\circ = -RT \\ln K \\implies \\frac{\\Delta G^\\circ}{T} = -R \\ln K$$

2. **Diferensiasi terhadap Temperatur ($T$):**
   $$\\left[ \\frac{\\partial (\\Delta G^\\circ / T)}{\\partial T} \\right]_P = \\frac{d (-R \\ln K)}{dT} = -R \\frac{d \\ln K}{dT}$$

3. **Menyamakan dengan Suku Kanan Persamaan Gibbs-Helmholtz:**
   $$-R \\frac{d \\ln K}{dT} = -\\frac{\\Delta H^\\circ}{T^2}$$
   Bagi kedua ruas dengan $-R$:
   $$\\mathbf{\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}}$$
   Bentuk ekuivalen dalam variabel $1/T$:
   $$\\frac{d \\ln K}{d(1/T)} = -\\frac{\\Delta H^\\circ}{R}$$

Persamaan ini membuktikan bahwa untuk reaksi endotermik ($\\Delta H^\circ > 0$), kemiringan kurva $\ln K$ vs $T$ bernilai positif ($d \\ln K / dT > 0$), yang berarti kenaikan temperatur akan selalu menggeser kesetimbangan ke arah produk.

**Analisis Distraktor:**
- **A:** Benar secara matematis dan termodinamika formal.
- **B:** Kelebihan tanda negatif akibat kesalahan pembagian dengan $-R$.
- **C:** Pangkat kuadrat pada $T^2$ hilang.
- **D:** Mengabaikan turunan logaritma natural ($dK$ alih-alih $d \\ln K$).
- **E:** Mengabaikan entalpi reaksi $\Delta H^\circ$.`,
    source_event: 'KSN-P Kimia 2021 No. 12 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSP 2024 No. 11 (Koefisien Joule-Thomson & Temperatur Inversi)
  // =========================================================================
  {
    id: 304004,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Ekspansi Joule-Thomson Izoentalpi & Temperatur Inversi Gas Nyata',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Temperatur Inversi Joule-Thomson Gas Nyata Berdasarkan Tetapan van der Waals',
    question_text: `Proses ekspansi Joule-Thomson merupakan ekspansi adiabatik gas melalui sumbat berpori atau katup pelambatan pada kondisi entalpi konstan ($dH = 0$). Koefisien Joule-Thomson didefinisikan sebagai:
$$\\mu_{JT} = \\left( \\frac{\\partial T}{\\partial P} \\right)_H = \\frac{1}{C_p} \\left[ T \\left(\\frac{\\partial V}{\\partial T}\\right)_P - V \\right]$$

Untuk gas nyata yang mematuhi persamaan van der Waals pada rentang kerapatan rendah, nilai koefisien Joule-Thomson mendekati:
$$\\mu_{JT} \\approx \\frac{1}{C_p} \\left( \\frac{2a}{RT} - b \\right)$$

Temperatur inversi Joule-Thomson ($T_i$, di mana gas beralih dari efek pemanasan $\\mu_{JT} < 0$ menjadi efek pendinginan $\\mu_{JT} > 0$ saat diekspansikan) dan perilaku gas hidrogen (\\ce{H2}, $T_i \\approx 202\\text{ K}$) pada suhu kamar ($298\\text{ K}$) adalah ....

A. $T_i = \\frac{2a}{Rb}$; gas hidrogen akan mengalami kenaikan suhu (memanas) saat diekspansikan pada suhu kamar  
B. $T_i = \\frac{a}{Rb}$; gas hidrogen akan mendingin saat diekspansikan pada suhu kamar  
C. $T_i = \\frac{8a}{27Rb}$; gas hidrogen tidak mengalami perubahan suhu sama sekali  
D. $T_i = \\frac{2a}{Rb}$; gas hidrogen akan mencair seketika pada ekspansi suhu kamar  
E. $T_i = \\frac{a}{2Rb}$; gas hidrogen selalu mendingin pada semua temperatur`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Syarat Temperatur Inversi Joule-Thomson ($T_i$):**
   Pada temperatur inversi, koefisien Joule-Thomson bernilai nol ($\mu_{JT} = 0$):
   $$\\frac{2a}{RT_i} - b = 0 \\implies b = \\frac{2a}{RT_i} \\implies \\mathbf{T_i = \\frac{2a}{Rb}}$$
   *(Catatan: Temperatur inversi maksimum pada tekanan nol adalah $T_i = 2 T_B = \\frac{2a}{Rb}$).*

2. **Analisis Perilaku Termal Gas Hidrogen (\\ce{H2}):**
   - Temperatur inversi hidrogen adalah $T_i \\approx 202\\text{ K}$ ($-71^\\circ\\text{C}$).
   - Pada suhu kamar ($T = 298\\text{ K} > T_i$), nilai suku $\\frac{2a}{RT} < b$.
   - Akibatnya, $\\mu_{JT} < 0$ (bernilai negatif).
   - Karena ekspansi gas selalu menurunkan tekanan ($dP < 0$):
     $$dT = \\mu_{JT} \\, dP = (\\text{negatif}) \\times (\\text{negatif}) > 0$$
   - Artinya, **suhu gas hidrogen justru akan naik (memanas)** saat mengalami ekspansi Joule-Thomson pada suhu kamar!
   - Untuk mencairkan gas hidrogen dengan siklus Linde, hidrogen harus dipra-dinginkan (*pre-cooled*) terlebih dahulu menggunakan nitrogen cair hingga di bawah $T_i$ ($< 202\\text{ K}$) agar efek pendinginan ($\mu_{JT} > 0$) dapat bekerja.

**Analisis Distraktor:**
- **A:** Benar secara termodinamika dan fenomena teknik kriogenik.
- **B:** Rumus $a/Rb$ adalah temperatur Boyle, dan hidrogen memanas pada suhu kamar, bukan mendingin.
- **C:** $8a/27Rb$ adalah temperatur kritis $T_c$.
- **D:** Hidrogen tidak mencair pada suhu kamar (titik didih hidrogen $20\\text{ K}$).
- **E:** Hidrogen hanya mendingin jika suhunya berada di bawah $202\\text{ K}$.`,
    source_event: 'OSP Kimia 2024 No. 11 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2020 No. 12 (Siklus Carnot & Ketaksamaan Clausius)
  // =========================================================================
  {
    id: 304005,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Siklus Mesin Kalor Carnot, Efisiensi Termal & Ketaksamaan Clausius',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Efisiensi Siklus Carnot dan Ketaksamaan Clausius pada Mesin Termal Irreversibel',
    question_text: `Suatu mesin kalor beroperasi di antara reservoir panas bertemperatur $T_H = 600\\text{ K}$ dan reservoir dingin bertemperatur $T_C = 300\\text{ K}$. Dalam satu siklus tertutup, mesin menyerap kalor $q_H = 1000\\text{ J}$ dari reservoir panas dan melakukan kerja mekanik neto $w = 400\\text{ J}$, membuang sisa kalor $q_C = -600\\text{ J}$ ke reservoir dingin.

Pernyataan yang **paling tepat** mengenai efisiensi termal mesin tersebut dibandingkan dengan batas teoritis siklus Carnot serta validitasnya menurut Hukum Kedua Termodinamika (Ketaksamaan Clausius) adalah ....

A. Efisiensi mesin terukur $\\eta = 40\\%$, yang berada di bawah efisiensi mesin Carnot reversibel $\\eta_{Carnot} = 50\\%$; mesin tersebut bersifat ireversibel dan memenuhi ketaksamaan Clausius ($\\oint \\frac{dq}{T} = -0{,}33\\text{ J/K} < 0$)  
B. Mesin tersebut melanggar Hukum Pertama Termodinamika karena kerja yang dihasilkan tidak sebanding dengan kalor  
C. Efisiensi mesin terukur melebihi batas efisiensi Carnot sehingga merupakan mesin gerak abadi (*perpetual motion machine*)  
D. Mesin tersebut beroperasi secara reversibel sempurna karena $\\oint \\frac{dq}{T} = 0$  
E. Efisiensi mesin Carnot untuk reservoir tersebut adalah $100\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Efisiensi Mesin Nyata (Terukur):**
   $$\\eta = \\frac{w}{q_H} = \\frac{400\\text{ J}}{1000\\text{ J}} = 0{,}40 = \\mathbf{40\\%}$$

2. **Efisiensi Maksimum Mesin Carnot Reversibel:**
   $$\\eta_{Carnot} = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300\\text{ K}}{600\\text{ K}} = 1 - 0{,}50 = 0{,}50 = \\mathbf{50\\%}$$
   Karena $\\eta (40\\%) < \\eta_{Carnot} (50\\%)$, mesin ini masuk akal secara termodinamika sebagai mesin kalor ireversibel nyata.

3. **Uji Integral Siklus Ketaksamaan Clausius:**
   $$\\oint \\frac{dq}{T} = \\frac{q_H}{T_H} + \\frac{q_C}{T_C}$$
   $$\\oint \\frac{dq}{T} = \\frac{+1000\\text{ J}}{600\\text{ K}} + \\frac{-600\\text{ J}}{300\\text{ K}} = +1{,}667\\text{ J/K} - 2{,}000\\text{ J/K} = \\mathbf{-0{,}333\\text{ J/K} < 0}$$
   Karena $\\oint \\frac{dq}{T} < 0$, mesin terbukti mematuhi Hukum Kedua Termodinamika dan beroperasi secara **ireversibel**.

**Analisis Distraktor:**
- **A:** Benar secara utuh dan matematis.
- **B:** Hukum Pertama terpenuhi: $\Delta U = q_H + q_C - w = 1000 - 600 - 400 = 0$.
- **C:** $\eta = 40\\% < 50\\%$, tidak melampaui Carnot.
- **D:** Integral Clausius bernilai $-0{,}33\\text{ J/K} < 0$, bukan nol.
- **E:** Efisiensi Carnot adalah $50\\%$, bukan $100\\%$.`,
    source_event: 'OSP Kimia 2020 No. 12 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Persamaan Gibbs-Duhem & Potensial Kimia Biner)
  // =========================================================================
  {
    id: 304006,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Potensial Kimia, Persamaan Gibbs-Duhem & Termodinamika Campuran Biner',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Aplikasi Persamaan Gibbs-Duhem pada Ketergantungan Potensial Kimia Larutan Biner',
    question_text: `Persamaan fundamental Gibbs-Duhem pada temperatur dan tekanan tetap ($T, P$ konstan) untuk suatu campuran larutan biner dua komponen (zat A dan zat B) dinyatakan sebagai:
$$n_A d\\mu_A + n_B d\\mu_B = 0 \\quad \\text{atau} \\quad x_A d\\mu_A + x_B d\\mu_B = 0$$
(dengan $x_i$ fraksi mol dan $\\mu_i$ potensial kimia komponen $i$).

Konsekuensi langsung yang **paling tepat** dari persamaan Gibbs-Duhem tersebut adalah ....

A. Potensial kimia dari kedua komponen tidak dapat berubah secara independen; jika potensial kimia komponen A meningkat seiring penambahan fraksi molnya ($d\\mu_A > 0$), maka potensial kimia komponen B harus menurun ($d\\mu_B < 0$)  
B. Potensial kimia kedua komponen selalu bernilai sama pada setiap komposisi campuran  
C. Campuran biner selalu membentuk larutan ideal tanpa penyimpangan tekanan uap  
D. Jumlah total energi bebas Gibbs larutan bernilai konstan tidak bergantung komposisi  
E. Fraksi mol kedua komponen selalu berbanding lurus dengan massa molekul relatifnya`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Persamaan Gibbs-Duhem:**
   $$x_A d\\mu_A + x_B d\\mu_B = 0 \\implies d\\mu_B = -\\frac{x_A}{x_B} d\\mu_A$$
   Karena fraksi mol $x_A$ dan $x_B$ selalu positif ($x_A, x_B > 0$):
   - Jika $d\\mu_A > 0$ (potensial kimia komponen A bertambah), maka nilai suku kanan $- (x_A / x_B) d\\mu_A$ pasti **negatif ($d\\mu_B < 0$)**.
   - Hal ini membuktikan bahwa potensial kimia komponen-komponen dalam suatu fase tidak saling independen, melainkan terikat secara termodinamika.

2. **Penerapan pada Hukum Raoult dan Henry:**
   Jika komponen pelarut A mematuhi Hukum Raoult pada rentang fraksi mol tertentu ($x_A \\to 1$), maka penerapan persamaan Gibbs-Duhem secara matematis membuktikan bahwa komponen zat terlarut B wajib mematuhi **Hukum Henry** pada rentang tersebut ($x_B \\to 0$).

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan interkoneksi diferensial potensial kimia.
- **B:** Potensial kimia kedua komponen tidak harus sama pada sembarang komposisi larutan.
- **C:** Persamaan Gibbs-Duhem berlaku untuk semua larutan (baik ideal maupun non-ideal).
- **D:** Energi bebas Gibbs bervariasi terhadap komposisi $G = n_A \mu_A + n_B \mu_B$.
- **E:** Fraksi mol adalah rasio jumlah partikel, bukan massa molar.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Persamaan Clapeyron Anomali Titik Leleh Es)
  // =========================================================================
  {
    id: 304007,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Persamaan Diferensial Clapeyron & Efek Tekanan pada Titik Leleh Es',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penurunan Titik Leleh Es Akibat Peningkatan Tekanan Berdasarkan Persamaan Clapeyron',
    question_text: `Persamaan Clapeyron untuk kesetimbangan transisi fasa padat-cair dinyatakan sebagai:
$$\\frac{dP}{dT} = \\frac{\\Delta H_{fus}}{T \\Delta V_{fus}}$$

Diketahui data termofisika air pada $0^\\circ\\text{C}$ ($273{,}15\\text{ K}$) dan $1\\text{ atm}$:
- Entalpi peleburan es: $\\Delta H_{fus} = +6010\\text{ J/mol}$
- Massa jenis es: $\\rho_{es} = 0{,}917\\text{ g/cm}^3$
- Massa jenis air cair: $\\rho_{air} = 1{,}000\\text{ g/cm}^3$
- Massa molar air: $M_r = 18{,}02\\text{ g/mol}$
- Konversi satuan: $1\\text{ atm} = 101325\\text{ Pa}$

Kemiringan kurva kesetimbangan padat-cair ($dT/dP$) dan perkiraan titik leleh es pada tekanan tinggi $100\\text{ atm}$ adalah mendekati ....

A. $dT/dP = -7{,}4 \\times 10^{-8}\\text{ K/Pa}$; titik leleh es turun menjadi $-0{,}74^\\circ\\text{C}$  
B. $dT/dP = +7{,}4 \\times 10^{-8}\\text{ K/Pa}$; titik leleh es naik menjadi $+0{,}74^\\circ\\text{C}$  
C. $dT/dP = -7{,}4 \\times 10^{-6}\\text{ K/Pa}$; titik leleh es turun menjadi $-7{,}4^\\circ\\text{C}$  
D. $dT/dP = 0$; titik leleh es tidak dipengaruhi oleh tekanan luar  
E. $dT/dP = -1{,}5 \\times 10^{-7}\\text{ K/Pa}$; titik leleh es turun menjadi $-1{,}50^\\circ\\text{C}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perhitungan Volume Molar Es dan Air:**
   $$V_m(es) = \\frac{18{,}02\\text{ g/mol}}{0{,}917\\text{ g/cm}^3} = 19{,}651\\text{ cm}^3\\text{/mol} = 19{,}651 \\times 10^{-6}\\text{ m}^3\\text{/mol}$$
   $$V_m(air) = \\frac{18{,}02\\text{ g/mol}}{1{,}000\\text{ g/cm}^3} = 18{,}020\\text{ cm}^3\\text{/mol} = 18{,}020 \\times 10^{-6}\\text{ m}^3\\text{/mol}$$

2. **Perubahan Volume Molar Peleburan ($\\Delta V_{fus}$):**
   $$\\Delta V_{fus} = V_m(air) - V_m(es) = (18{,}020 - 19{,}651) \\times 10^{-6} = -1{,}631 \\times 10^{-6}\\text{ m}^3\\text{/mol}$$
   Perhatikan bahwa $\\Delta V_{fus} < 0$ (anomali air: es lebih mengembang daripada air cair).

3. **Perhitungan Kemiringan $dT/dP$ dari Persamaan Clapeyron:**
   $$\\frac{dT}{dP} = \\frac{T \\Delta V_{fus}}{\\Delta H_{fus}} = \\frac{273{,}15\\text{ K} \\times (-1{,}631 \\times 10^{-6}\\text{ m}^3\\text{/mol})}{6010\\text{ J/mol}}$$
   $$\\frac{dT}{dP} = \\frac{-4{,}455 \\times 10^{-4}}{6010} \\approx -7{,}41 \\times 10^{-8}\\text{ K/Pa}$$

4. **Perubahan Titik Leleh pada $\\Delta P = 100\\text{ atm} - 1\\text{ atm} \\approx 99\\text{ atm}$:**
   $$\\Delta P = 99 \\times 101325\\text{ Pa} \\approx 1{,}003 \\times 10^7\\text{ Pa}$$
   $$\\Delta T = \\frac{dT}{dP} \\times \\Delta P = (-7{,}41 \\times 10^{-8}\\text{ K/Pa}) \\times (1{,}003 \\times 10^7\\text{ Pa}) \\approx -0{,}743\\text{ K} \\approx -0{,}74^\\circ\\text{C}$$
   Titik leleh es baru: $0 - 0{,}74 = -0{,}74^\\circ\\text{C}$.

**Analisis Distraktor:**
- **A:** Benar. $dT/dP = -7{,}4 \\times 10^{-8}\\text{ K/Pa}$, titik leleh es $-0{,}74^\\circ\\text{C}$.
- **B:** Kesalahan tanda (mengabaikan bahwa es mencair volume menyusut).
- **C:** Kesalahan faktor desimal konversi meter kubik.
- **D:** Mengabaikan efek tekanan fasa kental.
- **E:** Kesalahan pembagian massa jenis.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Entropi Pencampuran Gas Ideal Delta S_mix)
  // =========================================================================
  {
    id: 304008,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Pencampuran Gas Ideal, Entropi Campuran & Eksergi',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Perhitungan Entropi dan Energi Bebas Gibbs Pencampuran Gas Ideal pada Suhu Kamar',
    question_text: `Dua kompartemen terisolasi dihubungkan oleh sebuah katup:
- Kompartemen 1 bervolume $10{,}0\\text{ L}$ berisi $1{,}00\\text{ mol}$ gas helium (\\ce{He}).
- Kompartemen 2 bervolume $30{,}0\\text{ L}$ berisi $3{,}00\\text{ mol}$ gas argon (\\ce{Ar}).
Kedua gas berada pada temperatur yang sama $298\\text{ K}$ dan tekanan yang sama $2{,}45\\text{ atm}$.

Ketika katup dibuka, kedua gas bercampur sempurna secara spontan membentuk campuran ideal pada temperatur dan tekanan tetap. Nilai perubahan entropi pencampuran ($\\Delta S_{mix}$) dan energi bebas Gibbs pencampuran ($\\Delta G_{mix}$) adalah ....
(Gunakan $R = 8{,}314\\text{ J/(mol K)}$; diketahui $\\ln(0{,}25) \\approx -1{,}386$ dan $\\ln(0{,}75) \\approx -0{,}288$)

A. $\\Delta S_{mix} = +18{,}7\\text{ J/K}$ dan $\\Delta G_{mix} = -5{,}57\\text{ kJ}$  
B. $\\Delta S_{mix} = -18{,}7\\text{ J/K}$ dan $\\Delta G_{mix} = +5{,}57\\text{ kJ}$  
C. $\\Delta S_{mix} = +4{,}67\\text{ J/K}$ dan $\\Delta G_{mix} = -1{,}39\\text{ kJ}$  
D. $\\Delta S_{mix} = 0\\text{ J/K}$ dan $\\Delta G_{mix} = 0\\text{ kJ}$  
E. $\\Delta S_{mix} = +24{,}9\\text{ J/K}$ dan $\\Delta G_{mix} = -7{,}42\\text{ kJ}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Fraksi Mol Masing-Masing Komponen:**
   - Total mol: $n_{tot} = 1{,}00 + 3{,}00 = 4{,}00\\text{ mol}$.
   - Fraksi mol helium: $x_{\\ce{He}} = \\frac{1{,}00}{4{,}00} = 0{,}25$.
   - Fraksi mol argon: $x_{\\ce{Ar}} = \\frac{3{,}00}{4{,}00} = 0{,}75$.

2. **Rumus Entropi Pencampuran Gas Ideal:**
   $$\\Delta S_{mix} = -R \\sum n_i \\ln x_i = -n_{tot} R [x_{\\ce{He}} \\ln x_{\\ce{He}} + x_{\\ce{Ar}} \\ln x_{\\ce{Ar}}]$$
   $$\\Delta S_{mix} = - (4{,}00\\text{ mol}) \\times (8{,}314\\text{ J/(mol K)}) \\times [(0{,}25 \\times (-1{,}386)) + (0{,}75 \\times (-0{,}288))]$$
   $$\\Delta S_{mix} = -33{,}256 \\times [-0{,}3465 - 0{,}2160] = -33{,}256 \\times (-0{,}5625) = \\mathbf{+18{,}71\\text{ J/K} \\approx +18{,}7\\text{ J/K}}$$

3. **Energi Bebas Gibbs Pencampuran ($\\Delta G_{mix}$):**
   Karena pencampuran gas ideal bersifat atermal ($\\Delta H_{mix} = 0$):
   $$\\Delta G_{mix} = \\Delta H_{mix} - T \\Delta S_{mix} = 0 - T \\Delta S_{mix}$$
   $$\\Delta G_{mix} = - (298\\text{ K}) \\times (18{,}71\\text{ J/K}) = -5575\\text{ J} = \\mathbf{-5{,}57\\text{ kJ}}$$

Karena $\\Delta S_{mix} > 0$ dan $\\Delta G_{mix} < 0$, proses pencampuran berlangsung spontan murni didorong oleh kenaikan derajat ketidakteraturan posisi (*configurational entropy*).

**Analisis Distraktor:**
- **A:** Benar. $\\Delta S_{mix} = +18{,}7\\text{ J/K}$ dan $\\Delta G_{mix} = -5{,}57\\text{ kJ}$.
- **B:** Kesalahan tanda (pencampuran spontan menghasilkan $\Delta S > 0$ dan $\Delta G < 0$).
- **C:** Hanya menghitung per mol campuran ($18{,}7 / 4$).
- **D:** Paradoks Gibbs jika kedua gas identik; di sini kedua gas berbeda (He vs Ar).
- **E:** Menggunakan rasio molar $1:1$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Diagram Ellingham Lanjut & Reduksi Metalurgi Kroll)
  // =========================================================================
  {
    id: 304009,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Diagram Ellingham Lanjut, Kemiringan Delta G(T) & Proses Metalurgi Kroll',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Perubahan Kemiringan Diagram Ellingham dan Reduksi Titanium Tetraklorida oleh Magnesium',
    question_text: `Diagram Ellingham memplot perubahan energi bebas Gibbs standar pembentukan oksida logam per mol gas oksigen ($\\Delta G^\circ$) sebagai fungsi temperatur ($T$):
$$\\Delta G^\circ = \\Delta H^\circ - T \\Delta S^\circ$$

Pernyataan yang **paling tepat** mengenai interpretasi kemiringan garis pada diagram Ellingham dan dasar termodinamika ekstraksi logam titanium melalui proses Kroll adalah ....

A. Kemiringan garis $\\Delta G^\circ$ terhadap $T$ menyatakan $-\\Delta S^\circ$, yang mengalami patahan ke atas (kemiringan makin positif) saat logam melebur atau mendidih karena hilangnya fase terkondensasi yang menurunkan $\\Delta S^\circ$; dan karbon tidak dapat mereduksi $\\ce{TiO2}$ secara langsung karena pembentukan karbida stabil $\\ce{TiC}$, sehingga digunakan reduksi klorida $\\ce{TiCl4}$ oleh uap magnesium (proses Kroll)  
B. Kemiringan garis menyatakan $-\\Delta H^\circ$, yang selalu bernilai negatif untuk semua pembentukan oksida logam  
C. Reaksi pembentukan $\\ce{CO}$ memiliki kemiringan positif karena menghasilkan fasa gas  
D. Logam dengan garis Ellingham yang terletak lebih tinggi selalu mampu mereduksi oksida logam yang garisnya terletak lebih rendah  
E. Titik didih logam menyebabkan garis diagram berbelok tajam ke arah bawah (kemiringan negatif)`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Kemiringan Garis Diagram Ellingham:**
   $$\\frac{d(\\Delta G^\circ)}{dT} = -\\Delta S^\circ$$
   - Reaksi pembentukan oksida: $\\frac{2x}{y}\\ce{M(s)} + \\ce{O2(g)} \\to \\frac{2}{y}\\ce{M_xO_y(s)}$.
   - 1 mol gas $\\ce{O2}$ dikonsumsi menjadi padatan oksida $\\implies \\Delta S^\circ < 0$.
   - Maka kemiringan garis $-(\\Delta S^\circ) > 0$ (bernilai positif, garis miring ke atas).
   - Ketika logam reaktan melebur (*melting*) atau mendidih (*boiling*), entropi logam reaktan meningkat drastis ($S_{gas} \\gg S_{cair} > S_{padat}$).
   - Konsumsi reaktan berentropi tinggi ini menyebabkan $\\Delta S_{rxn}^\circ$ bernilai jauh lebih negatif lagi, sehingga kemiringan garis $-(\\Delta S^\circ)$ mengalami **patahan ke atas yang semakin tajam (*slope increases*)**.

2. **Termodinamika Proses Kroll untuk Titanium:**
   - Karbon tidak dapat digunakan untuk mereduksi langsung rutil $\\ce{TiO2}$ pada suhu tinggi karena titanium membentuk senyawa karbida yang sangat stabil dan getas (titanium karbida, $\\ce{TiC}$).
   - Oleh karena itu, digunakan **proses Kroll**:
     1. Karboklorinasi: $\\ce{TiO2 + 2C + 2Cl2 -> TiCl4 + 2CO}$
     2. Reduksi dengan magnesium cair/uap dalam atmosfer argon inert:
        $$\\ce{TiCl4(g) + 2Mg(l) -> Ti(s) + 2MgCl2(l)}$$
     Garis energi bebas $\\ce{MgCl2}$ berada jauh di bawah $\\ce{TiCl4}$, membuat reduksi oleh magnesium berlangsung sangat spontan.

**Analisis Distraktor:**
- **A:** Benar secara komprehensif.
- **B:** Kemiringan menyatakan $-\\Delta S^\circ$, bukan $-\\Delta H^\circ$.
- **C:** Pembentukan $\\ce{2C(s) + O2(g) -> 2CO(g)}$ memiliki $\\Delta S^\circ > 0$, sehingga kemiringannya unik bernilai negatif (miring ke bawah).
- **D:** Logam yang berada di garis *lebih bawah* yang dapat mereduksi oksida yang berada di *lebih atas*.
- **E:** Pendidihan membuat kemiringan makin positif ke atas, bukan ke bawah.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Termodinamika Statistik: Persamaan Sackur-Tetrode)
  // =========================================================================
  {
    id: 304010,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Statistik Dasar, Fungsi Partisi & Persamaan Sackur-Tetrode',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Perhitungan Entropi Molar Standar Gas Monoatomik Menggunakan Persamaan Sackur-Tetrode',
    question_text: `Dalam termodinamika statistik, entropi molar standar gas ideal monoatomik (seperti gas mulia) diturunkan secara fundamental dari fungsi partisi translasi melalui persamaan Sackur-Tetrode:
$$S_m^\circ = R \\left[ \\ln\\left( \\frac{V_m^\circ}{N_A \\Lambda^3} \\right) + \\frac{5}{2} \\right]$$
dengan $\\Lambda = \\frac{h}{\\sqrt{2\\pi m k_B T}}$ adalah panjang gelombang termal de Broglie molekul bermassa $m$.

Pernyataan yang **paling tepat** mengenai implikasi fisik dari persamaan Sackur-Tetrode terhadap entropi gas monoatomik adalah ....

A. Entropi molar standar berbanding lurus secara logaritmik dengan massa molekul relatif gas ($S_m^\circ \\propto \\frac{3}{2} R \\ln M_r$), sehingga pada suhu dan tekanan yang sama, gas argon ($M_r = 40$) memiliki entropi molar standar yang lebih besar daripada gas helium ($M_r = 4$)  
B. Gas helium memiliki entropi molar standar yang lebih besar daripada argon karena helium lebih ringan dan bergerak lebih cepat  
C. Entropi gas monoatomik tidak bergantung pada temperatur karena tidak memiliki mode vibrasi  
D. Persamaan Sackur-Tetrode memprediksi nilai entropi bernilai tak terhingga pada suhu nol mutlak ($0\\text{ K}$)  
E. Faktor $5/2$ pada persamaan berasal murni dari kontribusi momentum sudut spin elektron`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Ketergantungan Massa pada Persamaan Sackur-Tetrode:**
   Panjang gelombang termal de Broglie:
   $$\\Lambda = \\frac{h}{(2\\pi m k_B T)^{1/2}} \\implies \\Lambda^3 = \\frac{h^3}{(2\\pi m k_B T)^{3/2}} \\propto m^{-3/2}$$
   Substitusi $\\Lambda^3$ ke dalam logaritma Sackur-Tetrode:
   $$\\ln\\left(\\frac{V_m^\circ}{N_A \\Lambda^3}\\right) = \\ln\\left( \\text{tetapan} \\times m^{3/2} \\times T^{3/2} \\right) = \\frac{3}{2}\\ln m + \\frac{3}{2}\\ln T + \\text{konstanta}$$
   Maka ketergantungan massa molar dinyatakan sebagai:
   $$S_m^\circ \\propto \\frac{3}{2} R \\ln M_r$$

2. **Perbandingan Helium vs Argon:**
   - Karena massa molar argon ($M_r = 39{,}95\\text{ g/mol}$) jauh lebih besar daripada helium ($M_r = 4{,}00\\text{ g/mol}$):
     $$S_m^\circ(\\ce{Ar}) = 154{,}8\\text{ J/(mol K)} > S_m^\circ(\\ce{He}) = 126{,}2\\text{ J/(mol K)}$$
   - Secara fisik, atom yang lebih berat memiliki tingkat-tingkat energi translasi kuantum yang jauh lebih rapat (*denser density of states*), sehingga pada suhu tertentu partikel dapat terdistribusi ke dalam jumlah keadaan mikro (*microstates*) yang jauh lebih melimpah.

3. **Asal-Usul Faktor $5/2$:**
   Faktor $5/2$ berasal dari kombinasi energi internal translasi ($U/RT = 3/2$) dan kerja ekspansi ($PV/RT = 1$): $3/2 + 1 = 5/2$.

**Analisis Distraktor:**
- **A:** Benar secara mekanika statistik kuantum.
- **B:** Massa lebih berat menghasilkan densitas keadaan mikro lebih rapat sehingga entropi lebih besar.
- **C:** Entropi translasi sangat bergantung pada temperatur ($S \\propto \\frac{3}{2}R \\ln T$).
- **D:** Pada $T \\to 0\\text{ K}$, gas mengalami kondensasi Bose-Einstein / degenerasi kuantum Fermi di mana mekanika statistik klasik Sackur-Tetrode tidak lagi berlaku dan $S \\to 0$.
- **E:** Faktor $5/2$ berasal dari $U/RT + PV/RT$, bukan spin elektron.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
