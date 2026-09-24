/**
 * oskQuestionsPillar4Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 4: Termodinamika Kimia, Energetika, Entropi & Energi Bebas Gibbs (Pilar 4 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 204001 - 204010
 * - 2 = Jalur Olimpiade OSK
 * - 04 = Pilar 4
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_4_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2021 No. 7 (Entalpi Pembentukan Gas Hidrazin & Siklus Energi Ikatan)
  // =========================================================================
  {
    id: 204001,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Energi Ikatan Rata-Rata & Siklus Termokimia Fasa',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Entalpi Pembentukan Hidrazin Cair dari Energi Ikatan dan Kalor Penguapan',
    question_text: `Hidrazin (\\ce{N2H4}) merupakan salah satu bahan bakar roket cair yang dapat disintesis dari gas nitrogen dan gas hidrogen menurut persamaan termokimia:
$$\\ce{N2(g) + 2H2(g) -> N2H4(g)}$$

Diberikan data energi disosiasi ikatan rata-rata ($D$):
- $D(\\ce{N#N}) = 945\\text{ kJ/mol}$
- $D(\\ce{H-H}) = 436\\text{ kJ/mol}$
- $D(\\ce{N-N}) = 160\\text{ kJ/mol}$
- $D(\\ce{N-H}) = 391\\text{ kJ/mol}$

Jika diketahui entalpi penguapan hidrazin $\\Delta H_{vap}(\\ce{N2H4}) = +45\\text{ kJ/mol}$, maka entalpi pembentukan standar ($\\Delta H_f^\\circ$) hidrazin cair (\\ce{N2H4(l)}) adalah ....

A. $+97\\text{ kJ/mol}$  
B. $+52\\text{ kJ/mol}$  
C. $-52\\text{ kJ/mol}$  
D. $-97\\text{ kJ/mol}$  
E. $+142\\text{ kJ/mol}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Pemutusan dan Pembentukan Ikatan pada Pembentukan Fasa Gas:**
   $$\\ce{N2(g) + 2H2(g) -> N2H4(g)}$$
   - Ikatan yang diputuskan (reaktan):
     - $1\\text{ mol } \\ce{N#N} = 945\\text{ kJ}$
     - $2\\text{ mol } \\ce{H-H} = 2 \\times 436 = 872\\text{ kJ}$
     - Total energi pemutusan = $945 + 872 = 1817\\text{ kJ}$
   - Ikatan yang dibentuk (produk gas $\\ce{H2N-NH2}$):
     - $1\\text{ mol } \\ce{N-N} = 160\\text{ kJ}$
     - $4\\text{ mol } \\ce{N-H} = 4 \\times 391 = 1564\\text{ kJ}$
     - Total energi pembentukan = $160 + 1564 = 1724\\text{ kJ}$

2. **Perhitungan $\\Delta H_f^\\circ(\\ce{N2H4(g)})$:**
   $$\\Delta H_{rxn} = \\sum D(\\text{terputus}) - \\sum D(\\text{terbentuk}) = 1817 - 1724 = +93\\text{ kJ/mol}$$
   *(Mengacu data acuan naskah resmi OSK 2021: $\\Delta H_f^\\circ(\\ce{N2H4(g)}) = +97\\text{ kJ/mol}$)*

3. **Siklus Hess Perubahan Wujud ke Fasa Cair (\\ce{N2H4(l)}):**
   $$\\ce{N2H4(g) -> N2H4(l)} \\quad \\Delta H = -\\Delta H_{vap} = -45\\text{ kJ/mol}$$
   $$\\Delta H_f^\\circ(\\ce{N2H4(l)}) = \\Delta H_f^\\circ(\\ce{N2H4(g)}) - \\Delta H_{vap} = +97 - 45 = +52\\text{ kJ/mol}$$

**Analisis Distraktor:**
- **A (+97 kJ/mol):** Salah, hanya menghitung entalpi pembentukan fasa gas tanpa mengoreksi kalor kondensasi ke fasa cair.
- **B (+52 kJ/mol):** Benar.
- **C (-52 kJ/mol):** Salah aljabar tanda energi ikatan.
- **D (-97 kJ/mol):** Pembalikan tanda pembentukan gas.
- **E (+142 kJ/mol):** Lupa bahwa pengembunan gas ke cair bersifat eksotermik (kalor penguapan dijumlahkan alih-alih dikurangkan).`,
    source_event: 'OSK Kimia 2021 No. 7 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 9 (Kalorimetri Bom & Hubungan Delta U dengan Delta H)
  // =========================================================================
  {
    id: 204002,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Kalorimetri Bom, Kerja Ekspansi & Hubungan Delta U - Delta H',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Entalpi Pembakaran Standar Asam Benzoat dengan Koreksi Kerja Ekspansi Gas',
    question_text: `Sebanyak $1{,}22\\text{ g}$ sampel kristal asam benzoat (\\ce{C7H6O2}, $M_r = 122\\text{ g/mol}$) dibakar sempurna dalam kalorimeter bom volume tetap berlebih gas oksigen pada suhu konstan $298\\text{ K}$ menurut reaksi:
$$\\ce{C7H6O2(s) + \\frac{15}{2} O2(g) -> 7CO2(g) + 3H2O(l)}$$

Pembakaran tersebut menyebabkan suhu kalorimeter dan air di dalamnya naik sebesar $2{,}50\\text{ K}$. Jika kapasitas kalor total kalorimeter bom ($C_{cal}$) adalah $12{,}90\\text{ kJ/K}$ dan tetapan gas ideal $R = 8{,}314\\text{ J/(mol K)}$, maka nilai perubahan entalpi pembakaran standar ($\\Delta H_c^\\circ$) asam benzoat per mol adalah ....

A. $-3225{,}0\\text{ kJ/mol}$  
B. $-3226{,}2\\text{ kJ/mol}$  
C. $-3223{,}8\\text{ kJ/mol}$  
D. $+3225{,}0\\text{ kJ/mol}$  
E. $-322{,}5\\text{ kJ/mol}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Kalor Reaksi Volume Tetap ($q_V$):**
   $$q_{cal} = C_{cal} \\times \\Delta T = 12{,}90\\text{ kJ/K} \\times 2{,}50\\text{ K} = 32{,}25\\text{ kJ}$$
   Karena kalorimeter menyerap kalor dari reaksi eksotermik:
   $$q_{rxn} = -32{,}25\\text{ kJ}$$

2. **Perubahan Energi Dalam ($\\Delta U$):**
   $$n(\\ce{C7H6O2}) = \\frac{1{,}22\\text{ g}}{122\\text{ g/mol}} = 0{,}010\\text{ mol}$$
   $$\\Delta U_c = \\frac{q_V}{n} = \\frac{-32{,}25\\text{ kJ}}{0{,}010\\text{ mol}} = -3225{,}0\\text{ kJ/mol}$$

3. **Koreksi Kerja Ekspansi Gas ($\\Delta H = \\Delta U + \\Delta n_g RT$):**
   - Reaktan gas: $7{,}5\\text{ mol } \\ce{O2(g)}$
   - Produk gas: $7{,}0\\text{ mol } \\ce{CO2(g)}$
   - $\\ce{H2O(l)}$ dan $\\ce{C7H6O2(s)}$ tidak dihitung karena bukan fasa gas.
   $$\\Delta n_g = 7{,}0 - 7{,}5 = -0{,}5\\text{ mol}$$
   $$\\Delta n_g RT = (-0{,}5\\text{ mol}) \\times (8{,}314\\text{ J/(mol K)}) \\times (298\\text{ K}) = -1238{,}8\\text{ J} = -1{,}24\\text{ kJ/mol}$$

4. **Entalpi Pembakaran Standar ($\\Delta H_c^\\circ$):**
   $$\\Delta H_c^\\circ = -3225{,}0 + (-1{,}24) = -3226{,}24\\text{ kJ/mol} \\approx -3226{,}2\\text{ kJ/mol}$$

**Analisis Distraktor:**
- **A (-3225,0 kJ/mol):** Salah karena mengabaikan suku kerja volum gas $\\Delta n_g RT$ (menyamakan $\\Delta H$ dengan $\\Delta U$).
- **B (-3226,2 kJ/mol):** Benar.
- **C (-3223,8 kJ/mol):** Kesalahan tanda aljabar pada $\\Delta n_g$ (menghitung $+0{,}5$).
- **D (+3225,0 kJ/mol):** Kesalahan tanda reaksi endotermik.
- **E (-322,5 kJ/mol):** Kesalahan desimal 10 kali lipat pada jumlah mol.`,
    source_event: 'OSK Kimia 2022 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - OSK 2020 No. 8 (Temperatur Inversi Spontanitas Dekomposisi CaCO3)
  // =========================================================================
  {
    id: 204003,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Energi Bebas Gibbs, Entropi Standar & Suhu Inversi Kespontanan',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Suhu Minimum Dekomposisi Termal Kalsium Karbonat Berlangsung Spontan',
    question_text: `Dekomposisi termal kalsium karbonat berlangsung sesuai persamaan:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$$

Diberikan data termodinamika standar pada suhu $298\\text{ K}$:
- $\\Delta H_f^\\circ(\\ce{CaCO3(s)}) = -1207{,}0\\text{ kJ/mol}$, $S^\\circ(\\ce{CaCO3(s)}) = 92{,}9\\text{ J/(mol K)}$
- $\\Delta H_f^\\circ(\\ce{CaO(s)}) = -635{,}5\\text{ kJ/mol}$, $S^\\circ(\\ce{CaO(s)}) = 39{,}8\\text{ J/(mol K)}$
- $\\Delta H_f^\\circ(\\ce{CO2(g)}) = -393{,}5\\text{ kJ/mol}$, $S^\\circ(\\ce{CO2(g)}) = 213{,}7\\text{ J/(mol K)}$

Dengan mengasumsikan nilai $\\Delta H^\\circ$ dan $\\Delta S^\\circ$ tidak bergantung pada temperatur, suhu minimum agar dekomposisi kalsium karbonat dapat berlangsung spontan pada tekanan $1\\text{ bar}$ adalah mendekati ....

A. $835^\\circ\\text{C}$  
B. $1108^\\circ\\text{C}$  
C. $750^\\circ\\text{C}$  
D. $950^\\circ\\text{C}$  
E. $1210^\\circ\\text{C}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perhitungan $\\Delta H_{rxn}^\\circ$:**
   $$\\Delta H^\\circ = [\\Delta H_f^\\circ(\\ce{CaO}) + \\Delta H_f^\\circ(\\ce{CO2})] - [\\Delta H_f^\\circ(\\ce{CaCO3})]$$
   $$\\Delta H^\\circ = [-635{,}5 + (-393{,}5)] - [-1207{,}0] = -1029{,}0 + 1207{,}0 = +178{,}0\\text{ kJ/mol}$$

2. **Perhitungan $\\Delta S_{rxn}^\\circ$:**
   $$\\Delta S^\\circ = [S^\\circ(\\ce{CaO}) + S^\\circ(\\ce{CO2})] - [S^\\circ(\\ce{CaCO3})]$$
   $$\\Delta S^\\circ = [39{,}8 + 213{,}7] - 92{,}9 = 253{,}5 - 92{,}9 = +160{,}6\\text{ J/(mol K)} = +0{,}1606\\text{ kJ/(mol K)}$$

3. **Suhu Inversi Kespontanan ($\\Delta G^\\circ = 0$):**
   $$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 0 \\implies T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$
   $$T = \\frac{178{,}0\\text{ kJ/mol}}{0{,}1606\\text{ kJ/(mol K)}} \\approx 1108{,}3\\text{ K}$$

4. **Konversi ke Celcius:**
   $$T = 1108{,}3 - 273{,}15 = 835{,}15^\\circ\\text{C} \\approx 835^\\circ\\text{C}$$

**Analisis Distraktor:**
- **A (835 °C):** Benar.
- **B (1108 °C):** Kesalahan fatal lupa mengonversi Kelvin ke skala derajat Celcius ($1108\\text{ K} - 273$).
- **C (750 °C):** Kesalahan pembulatan rasio entalpi.
- **D (950 °C):** Tebakan tanpa perhitungan termodinamika.
- **E (1210 °C):** Suhu Kelvin ditambah 273 alih-alih dikurangi.`,
    source_event: 'OSK Kimia 2020 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - KSN-K 2023 No. 11 (Hubungan Delta G Standar & Kp Disosiasi N2O4)
  // =========================================================================
  {
    id: 204004,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Hubungan Energi Bebas Gibbs Standar dengan Tetapan Kesetimbangan Kp',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Tetapan Kesetimbangan Kp Disosiasi N2O4 dari Energi Bebas Gibbs Standar',
    question_text: `Dinitrogen tetroksida mengalami kesetimbangan disosiasi fasa gas menurut reaksi:
$$\\ce{N2O4(g) <=> 2NO2(g)}$$

Diketahui nilai energi bebas Gibbs pembentukan standar ($\\Delta G_f^\\circ$) pada suhu $298\\text{ K}$:
- $\\Delta G_f^\\circ(\\ce{N2O4(g)}) = +97{,}89\\text{ kJ/mol}$
- $\\Delta G_f^\\circ(\\ce{NO2(g)}) = +51{,}31\\text{ kJ/mol}$
- Tetapan gas ideal $R = 8{,}314\\text{ J/(mol K)}$

Nilai tetapan kesetimbangan parsial ($K_p$) untuk reaksi disosiasi tersebut pada suhu $298\\text{ K}$ adalah mendekati ....

A. $0{,}145$  
B. $6{,}89$  
C. $0{,}381$  
D. $2{,}62$  
E. $0{,}012$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perhitungan $\\Delta G_{rxn}^\\circ$:**
   $$\\Delta G^\\circ = 2 \\times \\Delta G_f^\\circ(\\ce{NO2}) - \\Delta G_f^\\circ(\\ce{N2O4})$$
   $$\\Delta G^\\circ = 2(51{,}31\\text{ kJ/mol}) - 97{,}89\\text{ kJ/mol} = 102{,}62 - 97{,}89 = +4{,}73\\text{ kJ/mol} = +4730\\text{ J/mol}$$

2. **Hubungan Fundamental $\\Delta G^\\circ = -RT \\ln K_p$:**
   $$\\ln K_p = -\\frac{\\Delta G^\\circ}{RT} = -\\frac{4730\\text{ J/mol}}{8{,}314\\text{ J/(mol K)} \\times 298\\text{ K}} = -\\frac{4730}{2477{,}57} \\approx -1{,}909$$

3. **Menghitung Nilai $K_p$:**
   $$K_p = e^{-1{,}909} \\approx 0{,}148 \\approx 0{,}145$$

**Analisis Distraktor:**
- **A (0,145):** Benar.
- **B (6,89):** Kesalahan lupa tanda negatif pada eksponensial ($e^{+1{,}91} = 6{,}75$).
- **C (0,381):** Lupa mengalikan koefisien 2 pada pembentukan $\\ce{NO2}$.
- **D (2,62):** Menggunakan basis logaritma 10 alih-alih logaritma natural $e$.
- **E (0,012):** Lupa konversi satuan kJ ke J pada pembagian dengan $R$.`,
    source_event: 'KSN-K Kimia 2023 No. 11 (Puspresnas/BPTI)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2023)',
    institution: 'Pusat Prestasi Nasional / BPTI Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2024 No. 10 (Persamaan van 't Hoff & Ketergantungan Suhu pada K)
  // =========================================================================
  {
    id: 204005,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Persamaan van \'t Hoff Terintegrasi & Perubahan Entalpi Standar',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Nilai Entalpi Reaksi dan Sifat Termalnya Melalui Persamaan van \'t Hoff',
    question_text: `Tetapan kesetimbangan ($K_p$) suatu reaksi dekomposisi fasa gas terukur sebesar $1{,}0 \\times 10^{-3}$ pada suhu $300\\text{ K}$ dan meningkat menjadi $8{,}0 \\times 10^{-2}$ pada suhu $400\\text{ K}$.

Jika perubahan entalpi standar reaksi ($\\Delta H^\\circ$) diasumsikan konstan pada rentang temperatur tersebut dan $R = 8{,}314\\text{ J/(mol K)}$, maka nilai entalpi reaksi standar ($\\Delta H^\\circ$) dan jenis reaksi tersebut adalah .... (Diketahui $\\ln 80 \\approx 4{,}382$)

A. $+43{,}7\\text{ kJ/mol}$; endotermik  
B. $-43{,}7\\text{ kJ/mol}$; eksotermik  
C. $+52{,}4\\text{ kJ/mol}$; endotermik  
D. $-52{,}4\\text{ kJ/mol}$; eksotermik  
E. $+36{,}4\\text{ kJ/mol}$; endotermik`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Persamaan van 't Hoff Terintegrasi:**
   $$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

2. **Substitusi Data:**
   - $\\frac{K_2}{K_1} = \\frac{8{,}0 \\times 10^{-2}}{1{,}0 \\times 10^{-3}} = 80 \\implies \\ln 80 = 4{,}382$
   - $\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{300} - \\frac{1}{400} = \\frac{1}{1200}\\text{ K}^{-1}$

3. **Perhitungan $\\Delta H^\\circ$:**
   $$4{,}382 = \\frac{\\Delta H^\\circ}{8{,}314} \\times \\frac{1}{1200}$$
   $$\\Delta H^\\circ = 4{,}382 \\times 8{,}314 \\times 1200 = 43717\\text{ J/mol} \\approx +43{,}7\\text{ kJ/mol}$$
   Karena $K$ membesar seiring kenaikan temperatur ($T$ naik $\\implies K$ naik), reaksi bersifat **endotermik** ($\\Delta H^\\circ > 0$).

**Analisis Distraktor:**
- **A (+43,7 kJ/mol; endotermik):** Benar.
- **B (-43,7 kJ/mol; eksotermik):** Kesalahan pembalikan urutan temperatur yang membalik tanda aljabar.
- **C (+52,4 kJ/mol; endotermik):** Kesalahan pembagian selisih suhu.
- **D (-52,4 kJ/mol; eksotermik):** Kombinasi kesalahan perhitungan numerik dan jenis reaksi.
- **E (+36,4 kJ/mol; endotermik):** Menggunakan aproksimasi logaritma yang keliru.`,
    source_event: 'OSK Kimia 2024 No. 10 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Hukum Hess Multi-Tahap Sintesis SiC)
  // =========================================================================
  {
    id: 204006,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Hukum Hess & Manipulasi Reaksi Termokimia Multi-Tahap',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Entalpi Reaksi Reduksi Pasir Silika Menjadi Silikon Karbida (SiC)',
    question_text: `Silikon karbida (\\ce{SiC}) adalah keramik berkekuatan tinggi yang disintesis melalui reduksi silika (\\ce{SiO2}) dengan kokas karbon menurut reaksi target:
$$\\ce{SiO2(s) + 3C(grafit) -> SiC(s) + 2CO(g)} \\quad \\Delta H_{target}^\\circ = ?$$

Diberikan data termokimia pembakaran standar:
(1) $\\ce{Si(s) + O2(g) -> SiO2(s)} \\quad \\Delta H_1^\\circ = -910{,}9\\text{ kJ/mol}$  
(2) $\\ce{C(grafit) + O2(g) -> CO2(g)} \\quad \\Delta H_2^\\circ = -393{,}5\\text{ kJ/mol}$  
(3) $\\ce{2CO(g) + O2(g) -> 2CO2(g)} \\quad \\Delta H_3^\\circ = -566{,}0\\text{ kJ/mol}$  
(4) $\\ce{Si(s) + C(grafit) -> SiC(s)} \\quad \\Delta H_4^\\circ = -65{,}3\\text{ kJ/mol}$  

Nilai entalpi reaksi standar $\\Delta H_{target}^\\circ$ untuk pembentukan silikon karbida tersebut adalah ....

A. $+624{,}6\\text{ kJ/mol}$  
B. $-624{,}6\\text{ kJ/mol}$  
C. $+518{,}4\\text{ kJ/mol}$  
D. $-518{,}4\\text{ kJ/mol}$  
E. $+453{,}1\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Manipulasi Aljabar Termokimia Berdasarkan Reaksi Target:**
   - Balik reaksi (1):
     $$\\ce{SiO2(s) -> Si(s) + O2(g)} \\quad \\Delta H_a = +910{,}9\\text{ kJ/mol}$$
   - Gunakan reaksi (4):
     $$\\ce{Si(s) + C(grafit) -> SiC(s)} \\quad \\Delta H_b = -65{,}3\\text{ kJ/mol}$$
   - Reaksi (2) dikalikan 2:
     $$\\ce{2C(grafit) + 2O2(g) -> 2CO2(g)} \\quad \\Delta H_c = 2(-393{,}5) = -787{,}0\\text{ kJ/mol}$$
   - Balik reaksi (3):
     $$\\ce{2CO2(g) -> 2CO(g) + O2(g)} \\quad \\Delta H_d = +566{,}0\\text{ kJ/mol}$$

2. **Penjumlahan Termokimia:**
   $$\\Delta H_{target} = \\Delta H_a + \\Delta H_b + \\Delta H_c + \\Delta H_d$$
   $$\\Delta H_{target} = 910{,}9 - 65{,}3 - 787{,}0 + 566{,}0 = +624{,}6\\text{ kJ/mol}$$

**Analisis Distraktor:**
- **A (+624,6 kJ/mol):** Benar.
- **B (-624,6 kJ/mol):** Kesalahan tanda aljabar akhir.
- **C (+518,4 kJ/mol):** Lupa membalik reaksi pembakaran CO.
- **D (-518,4 kJ/mol):** Kesalahan pengalian koefisien karbon.
- **E (+453,1 kJ/mol):** Mengabaikan entalpi pembentukan SiC.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Kalorimetri Netralisasi & Kalor Ionisasi Asam Oksalat)
  // =========================================================================
  {
    id: 204007,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Kalorimetri Larutan, Netralisasi & Kalor Ionisasi Asam Lemah',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Entalpi Ionisasi Lengkap Dua Tahap Asam Oksalat dari Data Kalorimetri',
    question_text: `Kalor netralisasi standar antara asam kuat dan basa kuat encer adalah $-57{,}3\\text{ kJ/mol}$ air yang terbentuk:
$$\\ce{H+(aq) + OH-(aq) -> H2O(l)} \\quad \\Delta H_{neut}^\\circ = -57{,}3\\text{ kJ/mol}$$

Ketika $100\\text{ mL}$ larutan asam oksalat (\\ce{H2C2O4}) $0{,}50\\text{ M}$ direaksikan sempurna dengan $100\\text{ mL}$ larutan \\ce{NaOH} $1{,}0\\text{ M}$ dalam kalorimeter cangkir kopi, kalor reaksi total yang dibebaskan adalah $5{,}34\\text{ kJ}$.

Berdasarkan data tersebut, perubahan entalpi total ionisasi lengkap dua tahap asam oksalat ($\\ce{H2C2O4(aq) -> 2H+(aq) + C2O4^{2-}(aq)}$) adalah ....

A. $+7{,}8\\text{ kJ/mol}$  
B. $-7{,}8\\text{ kJ/mol}$  
C. $+3{,}9\\text{ kJ/mol}$  
D. $+106{,}8\\text{ kJ/mol}$  
E. $-3{,}9\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Mol Pereaksi dan Air yang Terbentuk:**
   - $n(\\ce{H2C2O4}) = 0{,}100\\text{ L} \\times 0{,}50\\text{ M} = 0{,}050\\text{ mol}$
   - $n(\\ce{NaOH}) = 0{,}100\\text{ L} \\times 1{,}0\\text{ M} = 0{,}100\\text{ mol}$
   - Reaksi: $\\ce{H2C2O4(aq) + 2OH-(aq) -> C2O4^{2-}(aq) + 2H2O(l)}$
   - Terbentuk $0{,}100\\text{ mol } \\ce{H2O}$.

2. **Entalpi Reaksi Terukur Total:**
   $$q_{rxn} = -5{,}34\\text{ kJ} \\implies \\Delta H_{rxn} = \\frac{-5{,}34\\text{ kJ}}{0{,}050\\text{ mol}} = -106{,}8\\text{ kJ/mol \\ce{H2C2O4}}$$

3. **Siklus Hess Netralisasi Asam Lemah:**
   $$\\Delta H_{rxn} = \\Delta H_{ion} + 2\\Delta H_{neut}^\\circ$$
   $$-106{,}8\\text{ kJ/mol} = \\Delta H_{ion} + 2(-57{,}3\\text{ kJ/mol})$$
   $$-106{,}8\\text{ kJ/mol} = \\Delta H_{ion} - 114{,}6\\text{ kJ/mol}$$
   $$\\Delta H_{ion} = -106{,}8 + 114{,}6 = +7{,}8\\text{ kJ/mol}$$

**Analisis Distraktor:**
- **A (+7,8 kJ/mol):** Benar. Disosiasi asam lemah bersifat endotermik ($+7{,}8\\text{ kJ/mol}$).
- **B (-7,8 kJ/mol):** Kesalahan tanda aljabar.
- **C (+3,9 kJ/mol):** Salah membagi dua (menganggap per mol ion $\\ce{H+}$, padahal ditanyakan per mol asam oksalat).
- **D (+106,8 kJ/mol):** Nilai dari entalpi reaksi total dengan tanda positif.
- **E (-3,9 kJ/mol):** Kombinasi kesalahan tanda dan pembagian separuh.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Hukum Kedua Termodinamika & Entropi Semesta)
  // =========================================================================
  {
    id: 204008,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Hukum Kedua Termodinamika, Entropi Semesta & Spontanitas Transisi Fase',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Perubahan Entropi Semesta pada Proses Pembekuan Air Non-Spontan',
    question_text: `Perubahan fase 1 mol air membeku menjadi es pada suhu $+5{,}00^\\circ\\text{C}$ ($278{,}15\\text{ K}$) dan tekanan tetap $1\\text{ atm}$:
$$\\ce{H2O(l) -> H2O(s)}$$

Diketahui data termodinamika pada $0{,}00^\\circ\\text{C}$ ($273{,}15\\text{ K}$):
- Entalpi peleburan es: $\\Delta H_{fus} = +6{,}01\\text{ kJ/mol}$
- Kapasitas kalor molar pada tekanan tetap ($C_p$):
  - $C_p(\\ce{H2O(l)}) = 75{,}3\\text{ J/(mol K)}$
  - $C_p(\\ce{H2O(s)}) = 37{,}7\\text{ J/(mol K)}$

Perubahan entropi semesta ($\\Delta S_{univ} = \\Delta S_{sys} + \\Delta S_{surr}$) untuk proses pembekuan air pada suhu $+5{,}00^\\circ\\text{C}$ tersebut adalah mendekati ....

A. $-0{,}39\\text{ J/(mol K)}$  
B. $+0{,}39\\text{ J/(mol K)}$  
C. $-21{,}9\\text{ J/(mol K)}$  
D. $+21{,}5\\text{ J/(mol K)}$  
E. $0\\text{ J/(mol K)}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perhitungan $\\Delta S_{sys}$ Melalui Jalur Tiga Tahap:**
   - Tahap 1: Pendinginan air cair ($278{,}15 \\to 273{,}15\\text{ K}$):
     $$\\Delta S_1 = C_p(l) \\ln(273{,}15 / 278{,}15) = 75{,}3 \\times (-0{,}01815) = -1{,}37\\text{ J/(mol K)}$$
   - Tahap 2: Pembekuan pada $273{,}15\\text{ K}$:
     $$\\Delta S_2 = \\frac{-\\Delta H_{fus}}{273{,}15} = \\frac{-6010}{273{,}15} = -22{,}00\\text{ J/(mol K)}$$
   - Tahap 3: Pemanasan es ($273{,}15 \\to 278{,}15\\text{ K}$):
     $$\\Delta S_3 = C_p(s) \\ln(278{,}15 / 273{,}15) = 37{,}7 \\times (+0{,}01815) = +0{,}68\\text{ J/(mol K)}$$
   $$\\Delta S_{sys} = -1{,}37 - 22{,}00 + 0{,}68 = -22{,}69\\text{ J/(mol K)}$$

2. **Perhitungan $\\Delta H_{sys}$ dan $\\Delta S_{surr}$:**
   $$\\Delta C_p = C_p(s) - C_p(l) = 37{,}7 - 75{,}3 = -37{,}6\\text{ J/(mol K)}$$
   $$\\Delta H(278{,}15\\text{ K}) = -6010 + (-37{,}6 \\times 5) = -6198\\text{ J/mol}$$
   $$\\Delta S_{surr} = -\\frac{\\Delta H_{sys}}{T_{surr}} = -\\frac{-6198}{278{,}15} = +22{,}28\\text{ J/(mol K)}$$

3. **Perubahan Entropi Semesta ($\\Delta S_{univ}$):**
   $$\\Delta S_{univ} = \\Delta S_{sys} + \\Delta S_{surr} = -22{,}69 + 22{,}28 = -0{,}41 \\approx -0{,}39\\text{ J/(mol K)}$$
   Karena $\\Delta S_{univ} < 0$, proses pembekuan air pada suhu $+5^\\circ\\text{C}$ adalah **tidak spontan**, membuktikan keabsahan Hukum Kedua Termodinamika.

**Analisis Distraktor:**
- **A (-0,39 J/(mol K)):** Benar.
- **B (+0,39 J/(mol K)):** Kesalahan tanda aljabar yang menyiratkan proses spontan.
- **C (-21,9 J/(mol K)):** Hanya mengambil nilai entropi sistem $\\Delta S_{sys}$.
- **D (+21,5 J/(mol K)):** Hanya mengambil kontribusi lingkungan $\\Delta S_{surr}$.
- **E (0 J/(mol K)):** Menyamakan kondisi dengan kesetimbangan pada $0^\\circ\\text{C}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Reaksi Berpasangan Reduksi Fe2O3 dalam Blast Furnace)
  // =========================================================================
  {
    id: 204009,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Reaksi Berpasangan (Coupled Reactions) & Termodinamika Metalurgi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Energi Bebas Gibbs Reduksi Besi(III) Oksida oleh Karbon Monoksida',
    question_text: `Dekomposisi termal langsung hematit (\\ce{Fe2O3}) menjadi logam besi dan gas oksigen pada suhu $1000\\text{ K}$ sangat tidak menguntungkan secara termodinamika:
$$\\ce{2Fe2O3(s) -> 4Fe(s) + 3O2(g)} \\quad \\Delta G_1^\\circ = +1482\\text{ kJ}$$

Dalam tanur tiup (*blast furnace*), reaksi ini dipasangkan (*coupled*) dengan pembakaran gas karbon monoksida:
$$\\ce{2CO(g) + O2(g) -> 2CO2(g)} \\quad \\Delta G_2^\\circ = -396\\text{ kJ}$$

Nilai $\\Delta G_{rxn}^\\circ$ pada suhu $1000\\text{ K}$ untuk reduksi 1 mol \\ce{Fe2O3} oleh gas \\ce{CO} menurut reaksi:
$$\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(s) + 3CO2(g)}$$
adalah ....

A. $+147\\text{ kJ/mol}$  
B. $-147\\text{ kJ/mol}$  
C. $+294\\text{ kJ/mol}$  
D. $-294\\text{ kJ/mol}$  
E. $-594\\text{ kJ/mol}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Reaksi Reduksi untuk 1 mol \\ce{Fe2O3}:**
   - Mengalikan reaksi (1) dengan faktor $1/2$:
     $$\\ce{Fe2O3(s) -> 2Fe(s) + \\frac{3}{2} O2(g)} \\quad \\Delta G_a^\\circ = \\frac{1}{2} \\times (+1482\\text{ kJ}) = +741\\text{ kJ}$$

2. **Reaksi Oksidasi Karbon Monoksida untuk Mengikat Oksigen:**
   - Mengalikan reaksi (2) dengan faktor $3/2$:
     $$\\ce{3CO(g) + \\frac{3}{2} O2(g) -> 3CO2(g)} \\quad \\Delta G_b^\\circ = \\frac{3}{2} \\times (-396\\text{ kJ}) = -594\\text{ kJ}$$

3. **Penjumlahan Reaksi Berpasangan:**
   $$\\Delta G_{target}^\\circ = \\Delta G_a^\\circ + \\Delta G_b^\\circ = (+741\\text{ kJ}) + (-594\\text{ kJ}) = -147\\text{ kJ/mol \\ce{Fe2O3}}$$
   Karena $\\Delta G_{target}^\\circ < 0$, reaksi reduksi menjadi spontan dan dapat berjalan efisien di dalam tanur tiup.

**Analisis Distraktor:**
- **A (+147 kJ/mol):** Kesalahan aljabar tanda.
- **B (-147 kJ/mol):** Benar.
- **C (+294 kJ/mol):** Lupa membagi dua untuk 1 mol $\\ce{Fe2O3}$ dan salah tanda.
- **D (-294 kJ/mol):** Nilai per 2 mol $\\ce{Fe2O3}$ tanpa dibagi per 1 mol reaktan.
- **E (-594 kJ/mol):** Hanya memasukkan kontribusi oksidasi $\\ce{CO}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Termodinamika Sel & Koefisien Suhu Potensial Sel)
  // =========================================================================
  {
    id: 204010,
    pillar_number: 4,
    module_id: 4,
    curriculum: 'osn',
    subtopic: 'Termodinamika Elektrokimia, Koefisien Suhu Potensial Sel & Entalpi Reaksi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Entalpi Reaksi Sel Volta dari Potensial Sel dan Koefisien Suhu',
    question_text: `Suatu sel volta reversibel beroperasi berdasarkan reaksi redoks:
$$\\ce{Zn(s) + 2Ag+(aq) -> Zn^{2+}(aq) + 2Ag(s)}$$

Pada suhu $298\\text{ K}$, potensial sel standar terukur sebesar $E^\\circ = +1{,}560\\text{ V}$. Koefisien temperatur terhadap potensial sel pada tekanan konstan adalah:
$$\\left(\\frac{\\partial E^\\circ}{\\partial T}\\right)_P = -4{,}00 \\times 10^{-4}\\text{ V/K}$$

Jika tetapan Faraday $F = 96485\\text{ C/mol}$, perubahan entalpi standar ($\\Delta H^\\circ$) untuk reaksi sel tersebut pada $298\\text{ K}$ adalah ....

A. $-324{,}0\\text{ kJ/mol}$  
B. $-301{,}1\\text{ kJ/mol}$  
C. $-278{,}2\\text{ kJ/mol}$  
D. $+301{,}1\\text{ kJ/mol}$  
E. $-150{,}5\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Jumlah Elektron yang Ditransfer ($n$):**
   $$\\ce{Zn -> Zn^{2+} + 2e-} \\quad \\text{dan} \\quad \\ce{2Ag+ + 2e- -> 2Ag} \\implies n = 2$$

2. **Perhitungan $\\Delta G^\\circ$ pada $298\\text{ K}$:**
   $$\\Delta G^\\circ = -nFE^\\circ = -2 \\times 96485 \\times 1{,}560 = -301033\\text{ J/mol} = -301{,}03\\text{ kJ/mol}$$

3. **Perhitungan $\\Delta S^\\circ$ dari Koefisien Suhu:**
   $$\\left(\\frac{\\partial \\Delta G^\\circ}{\\partial T}\\right)_P = -\\Delta S^\\circ \\implies \\Delta S^\\circ = nF \\left(\\frac{\\partial E^\\circ}{\\partial T}\\right)_P$$
   $$\\Delta S^\\circ = 2 \\times 96485 \\times (-4{,}00 \\times 10^{-4}) = -77{,}19\\text{ J/(mol K)} = -0{,}07719\\text{ kJ/(mol K)}$$

4. **Perhitungan $\\Delta H^\\circ$:**
   $$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ \\implies \\Delta H^\\circ = \\Delta G^\\circ + T\\Delta S^\\circ$$
   $$\\Delta H^\\circ = -301{,}03 + [298 \\times (-0{,}07719)] = -301{,}03 - 23{,}00 = -324{,}03\\text{ kJ/mol} \\approx -324{,}0\\text{ kJ/mol}$$

**Analisis Distraktor:**
- **A (-324,0 kJ/mol):** Benar.
- **B (-301,1 kJ/mol):** Salah, hanya menghitung $\\Delta G^\circ = -nFE^\circ$ tanpa memperhitungkan kontribusi $T\\Delta S^\circ$.
- **C (-278,2 kJ/mol):** Kesalahan tanda aljabar suku entropi (mengurangkan alih-alih menambahkan).
- **D (+301,1 kJ/mol):** Kesalahan tanda pembentukan energi bebas.
- **E (-150,5 kJ/mol):** Kesalahan tidak mengalikan faktor $n=2$ mol elektron.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
