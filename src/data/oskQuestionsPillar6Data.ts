/**
 * oskQuestionsPillar6Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 6: Kinetika Kimia, Orde Reaksi, Mekanisme Reaksi & Persamaan Arrhenius (Pilar 6 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 206001 - 206010
 * - 2 = Jalur Olimpiade OSK
 * - 06 = Pilar 6
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_6_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2021 No. 15 (Hukum Laju Reaksi Gas NO dan H2 dari Laju Awal)
  // =========================================================================
  {
    id: 206001,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Penentuan Hukum Laju, Orde Reaksi & Tetapan Laju k',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Persamaan Laju dan Nilai Tetapan Laju Reaksi Reduksi Nitrogen Monoksida',
    question_text: `Reaksi reduksi gas nitrogen monoksida oleh gas hidrogen berlangsung menurut persamaan:
$$\\ce{2NO(g) + 2H2(g) -> N2(g) + 2H2O(g)}$$

Dari hasil percobaan pada suhu $800^\\circ\\text{C}$, diperoleh data laju reaksi awal ($v_0$) berikut:
| Percobaan | $[\\ce{NO}]_0\\text{ (M)}$ | $[\\ce{H2}]_0\\text{ (M)}$ | Laju Awal, $v_0\\text{ (M/s)}$ |
| :---: | :---: | :---: | :---: |
| 1 | $0{,}010$ | $0{,}010$ | $1{,}2 \\times 10^{-4}$ |
| 2 | $0{,}010$ | $0{,}020$ | $2{,}4 \\times 10^{-4}$ |
| 3 | $0{,}020$ | $0{,}010$ | $4{,}8 \\times 10^{-4}$ |

Persamaan hukum laju reaksi dan nilai tetapan laju reaksi ($k$) berturut-turut adalah ....

A. $v = k [\\ce{NO}]^2 [\\ce{H2}]$ dan $120\\text{ M}^{-2}\\text{s}^{-1}$  
B. $v = k [\\ce{NO}] [\\ce{H2}]^2$ dan $120\\text{ M}^{-2}\\text{s}^{-1}$  
C. $v = k [\\ce{NO}]^2 [\\ce{H2}]$ dan $12\\text{ M}^{-2}\\text{s}^{-1}$  
D. $v = k [\\ce{NO}] [\\ce{H2}]$ dan $1{,}2\\text{ M}^{-1}\\text{s}^{-1}$  
E. $v = k [\\ce{NO}]^2 [\\ce{H2}]^2$ dan $1200\\text{ M}^{-3}\\text{s}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Bentuk Umum Hukum Laju:**
   $$v = k [\\ce{NO}]^x [\\ce{H2}]^y$$

2. **Menentukan Orde terhadap $\\ce{H2}$ ($y$):**
   Bandingkan Percobaan 1 dan 2 ($[\\ce{NO}]$ tetap pada $0{,}010\\text{ M}$):
   $$\\frac{v_2}{v_1} = \\left(\\frac{[\\ce{H2}]_2}{[\\ce{H2}]_1}\\right)^y \\implies \\frac{2{,}4 \\times 10^{-4}}{1{,}2 \\times 10^{-4}} = \\left(\\frac{0{,}020}{0{,}010}\\right)^y$$
   $$2 = 2^y \\implies y = 1$$

3. **Menentukan Orde terhadap $\\ce{NO}$ ($x$):**
   Bandingkan Percobaan 3 dan 1 ($[\\ce{H2}]$ tetap pada $0{,}010\\text{ M}$):
   $$\\frac{v_3}{v_1} = \\left(\\frac{[\\ce{NO}]_3}{[\\ce{NO}]_1}\\right)^x \\implies \\frac{4{,}8 \\times 10^{-4}}{1{,}2 \\times 10^{-4}} = \\left(\\frac{0{,}020}{0{,}010}\\right)^x$$
   $$4 = 2^x \\implies x = 2$$
   Maka persamaan laju: $v = k [\\ce{NO}]^2 [\\ce{H2}]$.

4. **Menghitung Nilai dan Satuan Tetapan Laju ($k$):**
   Gunakan data Percobaan 1:
   $$1{,}2 \\times 10^{-4}\\text{ M/s} = k \\times (0{,}010\\text{ M})^2 \\times (0{,}010\\text{ M})$$
   $$1{,}2 \\times 10^{-4}\\text{ M/s} = k \\times (1{,}0 \\times 10^{-6}\\text{ M}^3)$$
   $$k = \\frac{1{,}2 \\times 10^{-4}}{1{,}0 \\times 10^{-6}} = 120\\text{ M}^{-2}\\text{s}^{-1}$$

**Analisis Distraktor:**
- **A:** Benar. Orde total 3 dengan $k = 120\\text{ M}^{-2}\\text{s}^{-1}$.
- **B:** Terbalik menetapkan orde kuadrat pada $\\ce{H2}$.
- **C:** Kesalahan desimal pada perhitungan nilai $k$ ($12$ alih-alih $120$).
- **D:** Mengabaikan orde kuadrat pada $\\ce{NO}$.
- **E:** Menyamakan orde langsung dengan koefisien reaksi stoikiometri ($2$ dan $2$).`,
    source_event: 'OSK Kimia 2021 No. 15 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 17 (Kinetika Orde Pertama & Waktu Paruh Dekomposisi N2O5)
  // =========================================================================
  {
    id: 206002,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Orde Pertama Terintegrasi & Waktu Paruh',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Sisa Konsentrasi Dinitrogen Pentoksida Melalui Kinetika Orde Satu',
    question_text: `Dekomposisi fasa gas dinitrogen pentoksida mengikuti kinetika reaksi orde pertama:
$$\\ce{2N2O5(g) -> 4NO2(g) + O2(g)}$$

Pada suhu $45^\\circ\\text{C}$, tetapan laju reaksinya adalah $k = 6{,}2 \\times 10^{-4}\\text{ s}^{-1}$. Jika suatu bejana bervolume tetap mula-mula diisi dengan gas \\ce{N2O5} murni pada tekanan $2{,}00\\text{ atm}$, tekanan parsial gas \\ce{N2O5} yang tersisa setelah reaksi berlangsung selama $30{,}0\\text{ menit}$ adalah mendekati .... (Diketahui $\\ln 2 \\approx 0{,}693$)

A. $0{,}66\\text{ atm}$  
B. $0{,}33\\text{ atm}$  
C. $1{,}34\\text{ atm}$  
D. $0{,}17\\text{ atm}$  
E. $0{,}05\\text{ atm}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konversi Waktu Reaksi ke Detik:**
   $$t = 30{,}0\\text{ menit} = 30 \\times 60 = 1800\\text{ s}$$

2. **Persamaan Laju Terintegrasi Orde Pertama:**
   $$\\ln\\left(\\frac{P_t}{P_0}\\right) = -kt$$
   $$\\ln\\left(\\frac{P_t}{2{,}00}\\right) = -(6{,}2 \\times 10^{-4}\\text{ s}^{-1}) \\times (1800\\text{ s}) = -1{,}116$$

3. **Menghitung Nilai $P_t$:**
   $$\\frac{P_t}{2{,}00} = e^{-1{,}116} \\approx 0{,}3276$$
   $$P_t = 2{,}00 \\times 0{,}3276 \\approx 0{,}655\\text{ atm} \\approx 0{,}66\\text{ atm}$$

4. **Verifikasi Melalui Waktu Paruh ($t_{1/2}$):**
   $$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0{,}693}{6{,}2 \\times 10^{-4}} \\approx 1118\\text{ s} \\approx 18{,}6\\text{ menit}$$
   Dalam $30$ menit, reaksi telah berlangsung sekitar $1{,}61$ kali waktu paruh:
   $$P_t = 2{,}00 \\times (0{,}5)^{1{,}61} \\approx 0{,}66\\text{ atm}$$

**Analisis Distraktor:**
- **A (0,66 atm):** Benar.
- **B (0,33 atm):** Mengasumsikan telah melewati 2 kali waktu paruh (40 menit).
- **C (1,34 atm):** Tekanan parsial yang telah bereaksi alih-alih yang tersisa ($2{,}00 - 0{,}66$).
- **D (0,17 atm):** Salah mengalikan faktor orde dua.
- **E (0,05 atm):** Lupa mengonversi menit ke detik ($t = 30$ langsung dikalikan $k$).`,
    source_event: 'OSK Kimia 2022 No. 17 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2023 No. 18 (Kinetika Orde Kedua Terintegrasi Dekomposisi NO2)
  // =========================================================================
  {
    id: 206003,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Orde Kedua Terintegrasi & Grafik Linear 1/[A] vs t',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Waktu Paruh Dekomposisi Nitrogen Dioksida Mengikuti Kinetika Orde Dua',
    question_text: `Dekomposisi termal gas nitrogen dioksida pada suhu $300^\\circ\\text{C}$ berlangsung menurut reaksi:
$$\\ce{2NO2(g) -> 2NO(g) + O2(g)}$$

Kinetika reaksi tersebut mengikuti hukum laju orde kedua: $-\\frac{d[\\ce{NO2}]}{dt} = k [\\ce{NO2}]^2$. Plot grafik $\\frac{1}{[\\ce{NO2}]}$ terhadap waktu menghasilkan garis lurus dengan kemiringan (*slope*) bernilai $+0{,}54\\text{ M}^{-1}\\text{s}^{-1}$.

Jika konsentrasi awal $[\\ce{NO2}]_0 = 0{,}020\\text{ M}$, maka waktu paruh ($t_{1/2}$) reaksi tersebut adalah ....

A. $92{,}6\\text{ s}$  
B. $185\\text{ s}$  
C. $1{,}28\\text{ s}$  
D. $46{,}3\\text{ s}$  
E. $278\\text{ s}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Persamaan Laju Terintegrasi Orde Kedua:**
   $$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$$
   Kemiringan grafik linear $\\frac{1}{[\\ce{NO2}]}$ terhadap $t$ adalah tetapan laju $k$:
   $$k = 0{,}54\\text{ M}^{-1}\\text{s}^{-1}$$

2. **Waktu Paruh Kinetika Orde Kedua:**
   Pada $t = t_{1/2}$, $[A]_{t_{1/2}} = \\frac{[A]_0}{2}$:
   $$\\frac{2}{[A]_0} = \\frac{1}{[A]_0} + k t_{1/2} \\implies t_{1/2} = \\frac{1}{k [A]_0}$$

3. **Substitusi Data:**
   $$t_{1/2} = \\frac{1}{(0{,}54\\text{ M}^{-1}\\text{s}^{-1}) \\times (0{,}020\\text{ M})} = \\frac{1}{0{,}0108} \\approx 92{,}59\\text{ s} \\approx 92{,}6\\text{ s}$$

Karakteristik penting: Berbeda dengan orde pertama di mana $t_{1/2}$ konstan tidak bergantung konsentrasi awal, pada kinetika orde kedua $t_{1/2}$ berbanding terbalik dengan $[A]_0$.

**Analisis Distraktor:**
- **A (92,6 s):** Benar.
- **B (185 s):** Lupa membagi koefisien stoikiometri atau membagi dua.
- **C (1,28 s):** Menggunakan rumus orde pertama $\\ln 2 / k$.
- **D (46,3 s):** Kesalahan memasukkan faktor 2 di pembilang.
- **E (278 s):** Kesalahan aritmatika pembagian.`,
    source_event: 'KSN-K Kimia 2023 No. 18 (Puspresnas/BPTI)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2023)',
    institution: 'Pusat Prestasi Nasional / BPTI Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2020 No. 19 (Mekanisme Reaksi Bertahap & Pendekatan Pra-Kesetimbangan)
  // =========================================================================
  {
    id: 206004,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Mekanisme Reaksi Bertahap & Pendekatan Pra-Kesetimbangan Cepat',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Hukum Laju dari Mekanisme Dua Tahap Pembentukan Nitrosil Bromida',
    question_text: `Reaksi pembentukan gas nitrosil bromida:
$$\\ce{2NO(g) + Br2(g) -> 2NOBr(g)}$$

Diusulkan berlangsung melalui mekanisme dua tahap berikut:
(Tahap 1, cepat setimbang): $\\ce{NO(g) + Br2(g) <=> NOBr2(g)} \\quad (k_1, k_{-1})$  
(Tahap 2, lambat / penentu laju): $\\ce{NOBr2(g) + NO(g) -> 2NOBr(g)} \\quad (k_2)$  

Berdasarkan mekanisme reaksi bertahap tersebut, persamaan hukum laju reaksi yang teramati secara eksperimen adalah ....

A. $v = k [\\ce{NO}]^2 [\\ce{Br2}]$  
B. $v = k [\\ce{NO}] [\\ce{Br2}]$  
C. $v = k [\\ce{NOBr2}] [\\ce{NO}]$  
D. $v = k [\\ce{NO}] [\\ce{Br2}]^2$  
E. $v = k [\\ce{NO}]^2 [\\ce{Br2}]^2$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Laju Reaksi Ditentukan oleh Tahap Lambat (RDS):**
   $$v = k_2 [\\ce{NOBr2}] [\\ce{NO}]$$
   Karena $\\ce{NOBr2}$ merupakan zat antara (intermediat tak stabil), konsentrasinya tidak boleh muncul dalam persamaan laju eksperimen akhir.

2. **Pendekatan Pra-Kesetimbangan Cepat pada Tahap 1:**
   Laju pembentukan $\\ce{NOBr2}$ = Laju penguraiannya kembali:
   $$k_1 [\\ce{NO}] [\\ce{Br2}] = k_{-1} [\\ce{NOBr2}]$$
   $$[\\ce{NOBr2}] = \\frac{k_1}{k_{-1}} [\\ce{NO}] [\\ce{Br2}] = K_1 [\\ce{NO}] [\\ce{Br2}]$$

3. **Substitusi Intermediat ke Persamaan Tahap Lambat:**
   $$v = k_2 \\left(\\frac{k_1}{k_{-1}} [\\ce{NO}] [\\ce{Br2}]\\right) [\\ce{NO}] = \\left(\\frac{k_1 k_2}{k_{-1}}\\right) [\\ce{NO}]^2 [\\ce{Br2}]$$
   Dengan mendefinisikan tetapan laju teramati $k = \\frac{k_1 k_2}{k_{-1}}$:
   $$v = k [\\ce{NO}]^2 [\\ce{Br2}]$$

**Analisis Distraktor:**
- **A:** Benar. Orde total 3 (orde 2 terhadap NO dan orde 1 terhadap Br2).
- **B:** Mengabaikan kontribusi konsentrasi NO dari tahap kesetimbangan pertama.
- **C:** Menyisakan zat antara intermediat $\\ce{NOBr2}$ yang dilarang dalam hukum laju akhir.
- **D:** Terbalik menetapkan pangkat kuadrat pada $\\ce{Br2}$.
- **E:** Mengambil pangkat sesuai koefisien stoikiometri keseluruhan secara naif.`,
    source_event: 'OSK Kimia 2020 No. 19 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2024 No. 16 (Persamaan Arrhenius Dua Suhu & Energi Aktivasi Ea)
  // =========================================================================
  {
    id: 206005,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Persamaan Arrhenius Dua Suhu & Penentuan Energi Aktivasi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Energi Aktivasi Reaksi dari Kenaikan Tetapan Laju Berdasarkan Temperatur',
    question_text: `Tetapan laju suatu reaksi kimia meningkat menjadi 4 kali lipat ketika suhu reaksi dinaikkan dari $300\\text{ K}$ menjadi $320\\text{ K}$.

Jika tetapan gas ideal $R = 8{,}314\\text{ J/(mol K)}$ dan $\\ln 4 \\approx 1{,}386$, maka nilai energi aktivasi ($E_a$) reaksi tersebut adalah mendekati ....

A. $55{,}3\\text{ kJ/mol}$  
B. $27{,}7\\text{ kJ/mol}$  
C. $110{,}6\\text{ kJ/mol}$  
D. $72{,}4\\text{ kJ/mol}$  
E. $41{,}8\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Bentuk Terintegrasi Persamaan Arrhenius:**
   $$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{E_a}{R} \\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$$

2. **Substitusi Data:**
   - $\\frac{k_2}{k_1} = 4 \\implies \\ln 4 = 1{,}386$
   - $T_1 = 300\\text{ K}$, $T_2 = 320\\text{ K}$
   - $\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{320 - 300}{300 \\times 320} = \\frac{20}{96000} = \\frac{1}{4800}\\text{ K}^{-1}$

3. **Menghitung Nilai $E_a$:**
   $$1{,}386 = \\frac{E_a}{8{,}314} \\times \\frac{1}{4800}$$
   $$E_a = 1{,}386 \\times 8{,}314 \\times 4800 = 55311\\text{ J/mol} \\approx 55{,}3\\text{ kJ/mol}$$

**Analisis Distraktor:**
- **A (55,3 kJ/mol):** Benar.
- **B (27,7 kJ/mol):** Lupa bahwa $\\ln 4 = 2 \\ln 2$ (hanya menggunakan $\\ln 2$).
- **C (110,6 kJ/mol):** Mengalikan faktor 2 secara salah.
- **D (72,4 kJ/mol):** Kesalahan pembagian selisih temperatur.
- **E (41,8 kJ/mol):** Mengabaikan tetapan gas $R$.`,
    source_event: 'OSK Kimia 2024 No. 16 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Kinetika Adsorpsi Permukaan & Orde Fraksional/Nol)
  // =========================================================================
  {
    id: 206006,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Katalisis Heterogen & Transisi Orde Reaksi Adsorpsi Permukaan',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perubahan Orde Reaksi Dekomposisi Amonia pada Permukaan Katalis Tungsten',
    question_text: `Dekomposisi gas amonia pada permukaan kawat tungsten panas:
$$\\ce{2NH3(g) ->[W] N2(g) + 3H2(g)}$$

Mengikuti hukum laju adsorpsi Langmuir:
$$v = \\frac{k K [\\ce{NH3}]}{1 + K [\\ce{NH3}]}$$

Pernyataan yang **paling tepat** mengenai perilaku kinetika reaksi tersebut adalah ....

A. Pada tekanan amonia yang sangat tinggi ($K [\\ce{NH3}] \\gg 1$), reaksi menjadi berorde nol terhadap amonia dengan $v = k$  
B. Pada tekanan amonia yang sangat tinggi, laju reaksi berbanding lurus secara kuadratik dengan tekanan amonia  
C. Pada tekanan amonia yang sangat rendah ($K [\\ce{NH3}] \\ll 1$), reaksi menjadi berorde nol  
D. Penambahan luas permukaan katalis tidak mempengaruhi nilai laju maksimum reaksi  
E. Waktu paruh reaksi pada tekanan tinggi tidak bergantung pada konsentrasi awal amonia`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Kondisi Tekanan Tinggi ($K [\\ce{NH3}] \\gg 1$):**
   Penyebut $1 + K [\\ce{NH3}] \\approx K [\\ce{NH3}]$.
   Maka persamaan laju menjadi:
   $$v = \\frac{k K [\\ce{NH3}]}{K [\\ce{NH3}]} = k$$
   Laju reaksi menjadi konstan (berorde nol) karena seluruh situs aktif pada permukaan katalis tungsten telah jenuh (*saturated*) oleh molekul amonia yang teradsorpsi.

2. **Analisis Kondisi Tekanan Rendah ($K [\\ce{NH3}] \\ll 1$):**
   Penyebut $1 + K [\\ce{NH3}] \\approx 1$.
   Maka: $v = k K [\\ce{NH3}]$, reaksi berorde satu terhadap amonia.

3. **Evaluasi Opsi Lain:**
   - **B Salah:** Tekanan tinggi menghasilkan laju jenuh konstan, bukan kuadratik.
   - **C Salah:** Tekanan rendah berorde satu.
   - **D Salah:** Laju maksimum sebanding dengan jumlah situs aktif pada luas permukaan katalis.
   - **E Salah:** Pada kinetika orde nol, $t_{1/2} = \\frac{[A]_0}{2k}$, sangat bergantung pada $[A]_0$.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan fenomena saturasi permukaan katalis padat.
- **B:** Terbalik konsep kejenuhan.
- **C:** Tertukar antara kondisi konsentrasi rendah dan tinggi.
- **D:** Mengabaikan peran luas kontak katalis heterogen.
- **E:** Karakteristik orde satu dikelirukan dengan kinetika orde nol.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Efek Katalis Enzimatik & Percepatan Laju Reaksi)
  // =========================================================================
  {
    id: 206007,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Katalisis Biologis/Homogen & Penurunan Energi Aktivasi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Faktor Percepatan Reaksi Biokimia Akibat Penurunan Energi Aktivasi oleh Enzim',
    question_text: `Suatu reaksi biokimia tanpa katalis memiliki energi aktivasi $E_a = 85{,}0\\text{ kJ/mol}$. Dengan adanya enzim katalase spesifik pada suhu fisiologis $37^\\circ\\text{C}$ ($310\\text{ K}$), jalur reaksi baru terbuka sehingga energi aktivasi turun menjadi $E_{a,cat} = 25{,}0\\text{ kJ/mol}$.

Dengan mengasumsikan faktor frekuensi pra-eksponensial ($A$) tidak berubah dan $R = 8{,}314\\text{ J/(mol K)}$, faktor pelipatan laju reaksi terakselerasi ($v_{cat} / v_{uncat}$) oleh enzim tersebut adalah mendekati .... (Diketahui $e^{23{,}28} \\approx 1{,}3 \\times 10^{10}$)

A. $1{,}3 \\times 10^{10}$ kali  
B. $3{,}4$ kali  
C. $2{,}4 \\times 10^4$ kali  
D. $60$ kali  
E. $4{,}8 \\times 10^7$ kali`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perbandingan Laju Berdasarkan Persamaan Arrhenius:**
   $$v_{uncat} = A e^{-E_a / RT} \\quad \\text{dan} \\quad v_{cat} = A e^{-E_{a,cat} / RT}$$
   $$\\frac{v_{cat}}{v_{uncat}} = \\frac{e^{-E_{a,cat} / RT}}{e^{-E_a / RT}} = e^{\\frac{E_a - E_{a,cat}}{RT}} = e^{\\frac{\\Delta E_a}{RT}}$$

2. **Perhitungan Selisih Energi Aktivasi ($\\Delta E_a$):**
   $$\\Delta E_a = 85{,}0 - 25{,}0 = 60{,}0\\text{ kJ/mol} = 60000\\text{ J/mol}$$

3. **Substitusi ke Eksponen Arrhenius:**
   $$\\frac{\\Delta E_a}{RT} = \\frac{60000\\text{ J/mol}}{8{,}314\\text{ J/(mol K)} \\times 310\\text{ K}} = \\frac{60000}{2577{,}34} \\approx 23{,}28$$
   $$\\frac{v_{cat}}{v_{uncat}} = e^{23{,}28} \\approx 1{,}3 \\times 10^{10}$$

Enzim mempercepat reaksi biologis hingga miliaran kali lipat dengan menurunkan penghalang energi aktivasi transisi.

**Analisis Distraktor:**
- **A (1,3 x 10^10):** Benar.
- **B (3,4):** Rasio linier sederhana dari $85 / 25$, mengabaikan ketergantungan eksponensial.
- **C (2,4 x 10^4):** Kesalahan penggunaan logaritma basis 10 alih-alih eksponensial basis $e$.
- **D (60):** Nilai dari selisih $\\Delta E_a$ dalam kJ.
- **E (4,8 x 10^7):** Kesalahan temperatur menggunakan $0^\\circ\\text{C}$ ($273\\text{ K}$).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Kinetika Orde Semu Pertama Hidrolisis Ester)
  // =========================================================================
  {
    id: 206008,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Orde Semu Pertama (Pseudo-First-Order)',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Tetapan Laju Sejati dari Reaksi Hidrolisis Ester Berorde Semu Satu',
    question_text: `Reaksi hidrolisis etil asetat dalam suasana asam berair:
$$\\ce{CH3COOCH2CH3 + H2O ->[H+] CH3COOH + CH3CH2OH}$$

Mengikuti hukum laju orde kedua sejati: $v = k [\\text{ester}] [\\ce{H2O}]$. Karena air bertindak sebagai pelarut berlebih dengan konsentrasi praktis konstan $[\\ce{H2O}] = 55{,}5\\text{ M}$, reaksi teramati mengikuti kinetika orde semu pertama (*pseudo-first-order*) dengan tetapan laju semu $k' = 2{,}22 \\times 10^{-4}\\text{ s}^{-1}$.

Nilai tetapan laju orde kedua sejati ($k$) untuk reaksi hidrolisis tersebut adalah ....

A. $4{,}0 \\times 10^{-6}\\text{ M}^{-1}\\text{s}^{-1}$  
B. $1{,}23 \\times 10^{-2}\\text{ M}^{-1}\\text{s}^{-1}$  
C. $2{,}22 \\times 10^{-4}\\text{ M}^{-1}\\text{s}^{-1}$  
D. $8{,}0 \\times 10^{-5}\\text{ M}^{-1}\\text{s}^{-1}$  
E. $55{,}5\\text{ M}^{-1}\\text{s}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Hubungan Tetapan Laju Semu ($k'$) dengan Tetapan Sejati ($k$):**
   $$v = k [\\text{ester}] [\\ce{H2O}] = (k [\\ce{H2O}]) [\\text{ester}] = k' [\\text{ester}]$$
   Maka:
   $$k' = k [\\ce{H2O}]$$

2. **Perhitungan Nilai $k$ Sejati:**
   $$k = \\frac{k'}{[\\ce{H2O}]} = \\frac{2{,}22 \\times 10^{-4}\\text{ s}^{-1}}{55{,}5\\text{ M}} = 4{,}0 \\times 10^{-6}\\text{ M}^{-1}\\text{s}^{-1}$$

Pendekatan orde semu pertama ini banyak diterapkan dalam analisis kinetika laboratorium ketika salah satu reaktan dibuat dalam jumlah berlebih ratusan hingga ribuan kali lipat.

**Analisis Distraktor:**
- **A (4,0 x 10^-6):** Benar.
- **B (1,23 x 10^-2):** Mengalikan $k'$ dengan konsentrasi air alih-alih membaginya.
- **C (2,22 x 10^-4):** Menganggap tetapan sejati sama dengan tetapan semu.
- **D (8,0 x 10^-5):** Kesalahan pembagian faktor desimal 2.
- **E (55,5):** Konsentrasi molar pelarut air murni.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Profil Koordinat Reaksi & Hubungan Ea Reaksi Maju/Balik)
  // =========================================================================
  {
    id: 206009,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Diagram Profil Energi, Koordinat Reaksi & Energi Aktivasi Balik',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Energi Aktivasi Reaksi Balik pada Reaksi Eksotermik',
    question_text: `Suatu reaksi elementer fasa gas:
$$\\ce{A(g) + B(g) <=> C(g) + D(g)}$$

Memiliki energi aktivasi untuk reaksi maju $E_{a,maju} = 45\\text{ kJ/mol}$. Perubahan entalpi standar reaksi tersebut adalah $\\Delta H^\\circ = -75\\text{ kJ/mol}$.

Nilai energi aktivasi untuk reaksi balik ($E_{a,balik}$) adalah ....

A. $120\\text{ kJ/mol}$  
B. $30\\text{ kJ/mol}$  
C. $75\\text{ kJ/mol}$  
D. $-30\\text{ kJ/mol}$  
E. $45\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Hubungan Termodinamika dan Kinetika pada Diagram Profil Koordinat Reaksi:**
   $$\\Delta H_{rxn} = E_{a,maju} - E_{a,balik}$$

2. **Substitusi Nilai:**
   $$-75\\text{ kJ/mol} = 45\\text{ kJ/mol} - E_{a,balik}$$
   $$E_{a,balik} = 45 - (-75) = 45 + 75 = 120\\text{ kJ/mol}$$

3. **Analisis Fisik:**
   Karena reaksi bersifat eksotermik (tingkat energi produk lebih rendah $75\\text{ kJ}$ daripada reaktan), molekul produk membutuhkan energi yang jauh lebih besar ($45 + 75 = 120\\text{ kJ}$) untuk mendaki puncak kompleks teraktivasi (keadaan transisi) agar dapat kembali menjadi reaktan.

**Analisis Distraktor:**
- **A (120 kJ/mol):** Benar.
- **B (30 kJ/mol):** Pengurangan langsung $75 - 45$.
- **C (75 kJ/mol):** Mengambil besaran perubahan entalpi reaksi saja.
- **D (-30 kJ/mol):** Energi aktivasi tidak pernah bernilai negatif dalam teori kinetika transisi klasik.
- **E (45 kJ/mol):** Menyamakan energi aktivasi balik dengan reaksi maju.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Katalisis Fotokimia Penipisan Ozon oleh Radikal Klorin)
  // =========================================================================
  {
    id: 206010,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Katalisis Homogen Radikal Bebas & Kinetika Fotokimia Atmosfer',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Peran Katalitik Radikal Klorin dalam Siklus Dekomposisi Ozon Stratosfer',
    question_text: `Penipisan lapisan ozon stratosfer oleh klorofluorokarbon (CFC) dikatalisis oleh radikal klorin (\\ce{Cl^.}) melalui siklus dua tahap:
(1) $\\ce{Cl^.(g) + O3(g) -> ClO^.(g) + O2(g)}$  
(2) $\\ce{ClO^.(g) + O(g) -> Cl^.(g) + O2(g)}$  

Pernyataan yang **paling benar** mengenai peran spesi kimia dan kinetika siklus reaksi tersebut adalah ....

A. Radikal klorin (\\ce{Cl^.}) bertindak sebagai katalis homogen, sedangkan klorin monoksida (\\ce{ClO^.}) adalah zat antara (intermediat)  
B. Radikal klorin (\\ce{Cl^.}) bertindak sebagai intermediat, sedangkan klorin monoksida (\\ce{ClO^.}) adalah katalis  
C. Siklus tersebut mengubah nilai perubahan entalpi standar keseluruhan dekomposisi ozon $\\ce{O3 + O -> 2O2}$  
D. Satu molekul klorin radikal hanya mampu menguraikan satu molekul ozon sebelum menjadi tidak aktif  
E. Klorin radikal memperlambat laju penguraian ozon dengan menaikkan energi aktivasi keseluruhan`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Definisi Katalis vs Zat Antara (Intermediat):**
   - **Katalis:** Muncul sebagai reaktan di tahap awal (tahap 1) dan terbentuk kembali tanpa perubahan neto di tahap akhir (tahap 2). Pada siklus ini, $\\ce{Cl^.}$ adalah **katalis homogen**.
   - **Intermediat (Zat Antara):** Terbentuk di tahap awal (tahap 1) dan dikonsumsi di tahap berikutnya (tahap 2). Pada siklus ini, $\\ce{ClO^.}$ adalah **intermediat**.

2. **Reaksi Keseluruhan (Net Reaction):**
   $$\\ce{O3(g) + O(g) -> 2O2(g)}$$
   Katalis menurunkan energi aktivasi reaksi dari sekitar $17\\text{ kJ/mol}$ menjadi hanya $2\\text{ kJ/mol}$, sehingga satu radikal $\\ce{Cl^.}$ dapat menguraikan hingga $100.000$ molekul ozon sebelum terterminasi.

3. **Evaluasi Opsi Lain:**
   - **B Salah:** Peran katalis dan zat antara terbalik.
   - **C Salah:** Katalis tidak mengubah termodinamika ($\Delta H^\circ$ atau $\Delta G^\circ$).
   - **D Salah:** Siklus bersifat regeneratif (satu atom Cl dapat memecah puluhan ribu ozon).
   - **E Salah:** Katalis mempercepat laju reaksi dengan menurunkan energi aktivasi.

**Analisis Distraktor:**
- **A:** Benar.
- **B:** Terbalik konsep katalis dan zat antara.
- **C:** Miskonsepsi bahwa katalis merubah nilai entalpi reaksi.
- **D:** Mengabaikan sifat regenerasi berulang katalis.
- **E:** Mengacaukan fungsi katalis dengan inhibitor.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
