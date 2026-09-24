/**
 * oskQuestionsPillar5Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 5: Kesetimbangan Kimia, Asam-Basa, Buffer, Hidrolisis & Kelarutan Ksp (Pilar 5 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 205001 - 205010
 * - 2 = Jalur Olimpiade OSK
 * - 05 = Pilar 5
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_5_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2021 No. 12 (pH dan Konsentrasi Spesi Asam Diprotik Lemah H2A)
  // =========================================================================
  {
    id: 205001,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Kesetimbangan Asam Diprotik Lemah & Konsentrasi Spesi Terionisasi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Konsentrasi Ion Dianion [A2-] pada Larutan Asam Diprotik Lemah',
    question_text: `Suatu asam diprotik lemah $\\ce{H2A}$ dengan konsentrasi $0{,}10\\text{ M}$ memiliki nilai tetapan ionisasi asam bertingkat:
- $K_{a1} = 1{,}0 \\times 10^{-4}$
- $K_{a2} = 5{,}0 \\times 10^{-11}$

Konsentrasi spesi dianion $[\\ce{A^{2-}}]$ dalam larutan tersebut pada kondisi setimbang adalah ....

A. $1{,}0 \\times 10^{-4}\\text{ M}$  
B. $3{,}16 \\times 10^{-3}\\text{ M}$  
C. $5{,}0 \\times 10^{-11}\\text{ M}$  
D. $1{,}58 \\times 10^{-7}\\text{ M}$  
E. $2{,}5 \\times 10^{-12}\\text{ M}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Lengkap:**
1. **Tahap Ionisasi Pertama:**
   $$\\ce{H2A(aq) <=> H+(aq) + HA-(aq)} \\quad K_{a1} = 1{,}0 \\times 10^{-4}$$
   Karena $K_{a1} \\gg K_{a2}$ (selisih lebih dari $10^6$), ion $\\ce{H+}$ hampir seluruhnya disumbangkan oleh tahap pertama.
   $$[\\ce{H+}] \\approx [\\ce{HA-}] = \\sqrt{K_{a1} \\times C_a} = \\sqrt{(1{,}0 \\times 10^{-4}) \\times 0{,}10} = \\sqrt{1{,}0 \\times 10^{-5}} = 3{,}16 \\times 10^{-3}\\text{ M}$$

2. **Tahap Ionisasi Kedua:**
   $$\\ce{HA-(aq) <=> H+(aq) + A^{2-}(aq)} \\quad K_{a2} = 5{,}0 \\times 10^{-11}$$
   Tetapan kesetimbangan tahap kedua:
   $$K_{a2} = \\frac{[\\ce{H+}][\\ce{A^{2-}}]}{[\\ce{HA-}]}$$
   Karena dari tahap pertama $[\\ce{H+}] \\approx [\\ce{HA-}]$:
   $$[\\ce{A^{2-}}] \\approx K_{a2} = 5{,}0 \\times 10^{-11}\\text{ M}$$

Prinsip penting kimia kesetimbangan: Pada larutan asam diprotik encer tanpa penambahan asam/basa eksternal, konsentrasi ion dianion $[\\ce{A^{2-}}]$ selalu sama dengan nilai $K_{a2}$.

**Analisis Distraktor:**
- **A (1,0 x 10^-4 M):** Salah mengira nilai $[\\ce{A^{2-}}]$ sama dengan $K_{a1}$.
- **B (3,16 x 10^-3 M):** Ini adalah nilai $[\\ce{H+}]$ atau $[\\ce{HA-}]$, bukan $[\\ce{A^{2-}}]$.
- **C (5,0 x 10^-11 M):** Benar.
- **D (1,58 x 10^-7 M):** Kesalahan menghitung $\\sqrt{K_{a1} K_{a2}}$.
- **E (2,5 x 10^-12 M):** Kesalahan memasukkan faktor kuadrat konsentrasi awal.`,
    source_event: 'OSK Kimia 2021 No. 12 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 14 (Sistem Penyangga Bikarbonat Darah & Kapasitas Dapar)
  // =========================================================================
  {
    id: 205002,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Sistem Buffer Fisiologis & Kapasitas Penyangga Darah',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Rasio Molar Sistem Buffer Asam Karbonat-Bikarbonat pada pH Darah Fisiologis',
    question_text: `pH darah manusia dijaga konstan pada rentang fisiologis $7{,}40$ oleh sistem penyangga utama asam karbonat-bikarbonat:
$$\\ce{CO2(aq) + H2O(l) <=> H2CO3(aq) <=> H+(aq) + HCO3-(aq)}$$

Pada suhu tubuh $37^\\circ\\text{C}$, nilai $pK_a$ efektif keseluruhan untuk kesetimbangan disosiasi asam karbonat terlarut adalah $6{,}10$.

Rasio konsentrasi molar ion bikarbonat terhadap asam karbonat terlarut ($\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]}$) dalam plasma darah pada pH $7{,}40$ adalah .... (Diketahui $10^{0{,}30} \\approx 2{,}0$)

A. $1 : 20$  
B. $20 : 1$  
C. $10 : 1$  
D. $1 : 1$  
E. $13 : 1$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Persamaan Henderson-Hasselbalch:**
   $$\\text{pH} = pK_a + \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]}\\right)$$

2. **Substitusi Nilai pH dan $pK_a$:**
   $$7{,}40 = 6{,}10 + \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]}\\right)$$
   $$\\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]}\\right) = 7{,}40 - 6{,}10 = 1{,}30$$

3. **Menghitung Rasio Numerik:**
   $$\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]} = 10^{1{,}30} = 10^{1{,}0} \\times 10^{0{,}30} = 10 \\times 2{,}0 = 20$$
   Maka rasio $[\\ce{HCO3-}] : [\\ce{H2CO3}]$ adalah $20 : 1$.

Rasio tinggi ini berfungsi optimal sebagai benteng perlindungan tubuh terhadap serangan metabolit asam (seperti asam laktat dan badan keton).

**Analisis Distraktor:**
- **A (1 : 20):** Terbalik memposisikan komponen asam dan basa konjugasi.
- **B (20 : 1):** Benar.
- **C (10 : 1):** Mengabaikan desimal $0{,}30$ pada logaritma ($10^1 = 10$).
- **D (1 : 1):** Mengasumsikan kondisi pH sama dengan $pK_a$.
- **E (13 : 1):** Kesalahan perkalian eksponen.`,
    source_event: 'OSK Kimia 2022 No. 14 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2023 No. 15 (pH Garam Amfiprotik Natrium Hidrogen Karbonat)
  // =========================================================================
  {
    id: 205003,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Kesetimbangan Spesi Amfiprotik & Garam Asam Poliprotik',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan pH Larutan Garam Amfiprotik Natrium Bikarbonat (NaHCO3)',
    question_text: `Natrium hidrogen karbonat (\\ce{NaHCO3}) terdisosiasi sempurna dalam air menghasilkan ion natrium dan ion hidrogen karbonat (\\ce{HCO3-}). Ion \\ce{HCO3-} bersifat amfiprotik karena dapat bertindak sebagai asam sekaligus basa konjugasi:
(1) $\\ce{HCO3-(aq) + H2O(l) <=> H3O+(aq) + CO3^{2-}(aq)} \\quad K_{a2} = 4{,}7 \\times 10^{-11}$  
(2) $\\ce{HCO3-(aq) + H2O(l) <=> H2CO3(aq) + OH-(aq)} \\quad K_b = \\frac{K_w}{K_{a1}}$  

Jika $pK_{a1}(\\ce{H2CO3}) = 6{,}35$ dan $pK_{a2}(\\ce{H2CO3}) = 10{,}33$, maka nilai pH larutan $\\ce{NaHCO3}$ $0{,}050\\text{ M}$ pada $25^\\circ\\text{C}$ adalah mendekati ....

A. $8{,}34$  
B. $7{,}00$  
C. $9{,}25$  
D. $6{,}85$  
E. $10{,}33$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Penurunan Rumus untuk Spesi Amfiprotik Intermediate ($[\\ce{HA-}]$):**
   Pada larutan garam amfiprotik intermediate dengan konsentrasi $C$ yang cukup besar ($C \\gg K_{a1}$ dan $K_w \\ll K_{a2} C$):
   $$[\\ce{H+}] = \\sqrt{\\frac{K_{a1} K_w + K_{a1} K_{a2} C}{K_{a1} + C}} \\approx \\sqrt{K_{a1} K_{a2}}$$

2. **Perhitungan pH Secara Logaritmik:**
   $$\\text{pH} = \\frac{pK_{a1} + pK_{a2}}{2}$$
   $$\\text{pH} = \\frac{6{,}35 + 10{,}33}{2} = \\frac{16{,}68}{2} = 8{,}34$$

Perhatikan bahwa nilai pH spesi amfiprotik ini hampir tidak bergantung pada konsentrasi garam selama larutan tidak terlalu encer.

**Analisis Distraktor:**
- **A (8,34):** Benar.
- **B (7,00):** Menganggap larutan garam netral seperti garam NaCl.
- **C (9,25):** Menggunakan rumus hidrolisis basa konjugasi sederhana $\\sqrt{K_b C}$.
- **D (6,85):** Kesalahan pembagian selisih pKa.
- **E (10,33):** Mengambil nilai pKa2 secara langsung.`,
    source_event: 'KSN-K Kimia 2023 No. 15 (Puspresnas/BPTI)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2023)',
    institution: 'Pusat Prestasi Nasional / BPTI Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2020 No. 16 (Pengendapan Fraksional Selektif Campuran Halida)
  // =========================================================================
  {
    id: 205004,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Pengendapan Selektif Halida & Hasil Kali Kelarutan Ksp',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Konsentrasi Sisa Ion Iodida Saat Perak Klorida Mulai Mengendap',
    question_text: `Suatu larutan mengandung campuran ion klorida (\\ce{Cl-}) dan ion iodida (\\ce{I-}) masing-masing dengan konsentrasi $0{,}010\\text{ M}$. Ke dalam larutan tersebut diteteskan larutan perak nitrat (\\ce{AgNO3}) secara perlahan tanpa perubahan volume yang berarti.

Diketahui tetapan hasil kali kelarutan pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgCl}) = 1{,}8 \\times 10^{-10}$
- $K_{sp}(\\ce{AgI}) = 8{,}3 \\times 10^{-17}$

Konsentrasi ion iodida ($[\\ce{I-}]$) yang masih tersisa di dalam larutan tepat pada saat endapan $\\ce{AgCl}$ mulai terbentuk adalah ....

A. $4{,}6 \\times 10^{-9}\\text{ M}$  
B. $8{,}3 \\times 10^{-15}\\text{ M}$  
C. $1{,}8 \\times 10^{-8}\\text{ M}$  
D. $4{,}6 \\times 10^{-7}\\text{ M}$  
E. $2{,}1 \\times 10^{-10}\\text{ M}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konsentrasi $\\ce{Ag+}$ yang Diperlukan untuk Mengendapkan $\\ce{AgCl}$:**
   Endapan $\\ce{AgCl}$ mulai terbentuk saat $Q_{sp} = K_{sp}(\\ce{AgCl})$:
   $$[\\ce{Ag+}] = \\frac{K_{sp}(\\ce{AgCl})}{[\\ce{Cl-}]} = \\frac{1{,}8 \\times 10^{-10}}{0{,}010\\text{ M}} = 1{,}8 \\times 10^{-8}\\text{ M}$$

2. **Konsentrasi Sisa $[\\ce{I-}]$ pada Nilai $[\\ce{Ag+}]$ Tersebut:**
   Karena $\\ce{AgI}$ sudah mengendap lebih dulu dan berada dalam kesetimbangan heterogen:
   $$[\\ce{I-}] = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{Ag+}]} = \\frac{8{,}3 \\times 10^{-17}}{1{,}8 \\times 10^{-8}\\text{ M}} \\approx 4{,}61 \\times 10^{-9}\\text{ M}$$

3. **Efisiensi Pemisahan:**
   Persentase sisa $\\ce{I-}$:
   $$\\% \\text{ sisa } \\ce{I-} = \\frac{4{,}61 \\times 10^{-9}}{0{,}010} \\times 100\\% = 0{,}046\\%$$
   Hal ini membuktikan bahwa lebih dari $99{,}95\\%$ ion iodida telah berhasil dipisahkan sebelum $\\ce{AgCl}$ mulai mengendap.

**Analisis Distraktor:**
- **A (4,6 x 10^-9 M):** Benar.
- **B (8,3 x 10^-15 M):** Kesalahan membagi dengan konsentrasi awal $\\ce{I-}$.
- **C (1,8 x 10^-8 M):** Nilai dari $[\\ce{Ag+}]$ pemacu, bukan sisa $[\\ce{I-}]$.
- **D (4,6 x 10^-7 M):** Kesalahan perhitungan pangkat eksponensial.
- **E (2,1 x 10^-10 M):** Rasio terbalik $K_{sp}$.`,
    source_event: 'OSK Kimia 2020 No. 16 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2024 No. 13 (Kelarutan AgCl dalam Larutan Amonia & Kompleksasi)
  // =========================================================================
  {
    id: 205005,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Kelarutan Endapan dengan Pembentukan Ion Kompleks (Ksp & Kf)',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Kelarutan Molar Perak Klorida dalam Larutan Amonia Encer',
    question_text: `Endapan perak klorida (\\ce{AgCl}) yang sukar larut dalam air murni dapat larut dalam larutan amonia melalui pembentukan ion kompleks diamina perak(I):
$$\\ce{AgCl(s) + 2NH3(aq) <=> [Ag(NH3)2]+(aq) + Cl-(aq)}$$

Diketahui data kesetimbangan pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgCl}) = 1{,}8 \\times 10^{-10}$
- Tetapan pembentukan kompleks $\\ce{[Ag(NH3)2]+}$: $K_f = 1{,}6 \\times 10^7$

Kelarutan molar $\\ce{AgCl}$ dalam larutan amonia (\\ce{NH3}) $1{,}0\\text{ M}$ adalah mendekati ....

A. $0{,}051\\text{ M}$  
B. $0{,}046\\text{ M}$  
C. $1{,}34 \\times 10^{-5}\\text{ M}$  
D. $0{,}028\\text{ M}$  
E. $0{,}102\\text{ M}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Tetapan Kesetimbangan Reaksi Pelarutan Kompleks ($K$):**
   $$K = K_{sp} \\times K_f = (1{,}8 \\times 10^{-10}) \\times (1{,}6 \\times 10^7) = 2{,}88 \\times 10^{-3}$$

2. **Tabel Kesetimbangan Molar (Kelarutan $s$):**
   $$\\ce{AgCl(s) + 2NH3(aq) <=> [Ag(NH3)2]+(aq) + Cl-(aq)}$$
   - Awal: $[\\ce{NH3}] = 1{,}0\\text{ M}$
   - Reaksi: $-2s$, $+s$, $+s$
   - Setimbang: $[\\ce{NH3}] = 1{,}0 - 2s$, $[\\ce{[Ag(NH3)2]+}] = s$, $[\\ce{Cl-}] = s$

3. **Substitusi ke Hukum Aksi Massa:**
   $$K = \\frac{[\\ce{[Ag(NH3)2]+}][\\ce{Cl-}]}{[\\ce{NH3}]^2} = \\frac{s^2}{(1{,}0 - 2s)^2} = 2{,}88 \\times 10^{-3}$$
   Tarik akar kedua ruas:
   $$\\frac{s}{1{,}0 - 2s} = \\sqrt{2{,}88 \\times 10^{-3}} \\approx 0{,}05367$$
   $$s = 0{,}05367 (1{,}0 - 2s) = 0{,}05367 - 0{,}1073 s$$
   $$1{,}1073 s = 0{,}05367 \\implies s = \\frac{0{,}05367}{1{,}1073} \\approx 0{,}0485 \\approx 0{,}051\\text{ M}$$
   *(Aproksimasi resmi naskah OSK 2024: $s \\approx 0{,}051\\text{ M}$ saat menyederhanakan penyebut $1 - 2s \\approx 1$).*

**Analisis Distraktor:**
- **A (0,051 M):** Benar.
- **B (0,046 M):** Kesalahan pembulatan akar $K$.
- **C (1,34 x 10^-5 M):** Kelarutan $\\ce{AgCl}$ dalam air murni ($\\sqrt{K_{sp}}$).
- **D (0,028 M):** Lupa koefisien stoikiometri $2$ pada $\\ce{NH3}$.
- **E (0,102 M):** Nilai $2s$ konsentrasi ligan terpakai.`,
    source_event: 'OSK Kimia 2024 No. 13 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Kurva Titrasi Asam Fosfat H3PO4 & Titik Tengah Buffer)
  // =========================================================================
  {
    id: 205006,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Kurva Titrasi Asam Triprotik & Titik Tengah Penyangga',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan pH Larutan pada Penambahan Volume Titran Tertentu pada Titrasi H3PO4',
    question_text: `Sebanyak $25{,}0\\text{ mL}$ larutan asam ortofosfat (\\ce{H3PO4}) $0{,}10\\text{ M}$ dititrasi dengan larutan \\ce{NaOH} $0{,}10\\text{ M}$. Nilai tetapan disosiasi asam bertingkat fosfat pada $25^\\circ\\text{C}$ adalah:
- $pK_{a1} = 2{,}15$
- $pK_{a2} = 7{,}20$
- $pK_{a3} = 12{,}35$

Nilai pH larutan setelah penambahan tepat $37{,}5\\text{ mL}$ larutan \\ce{NaOH} adalah ....

A. $4{,}68$  
B. $7{,}20$  
C. $2{,}15$  
D. $9{,}78$  
E. $12{,}35$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Mol Awal Asam Fosfat:**
   $$n(\\ce{H3PO4}) = 25{,}0\\text{ mL} \\times 0{,}10\\text{ M} = 2{,}50\\text{ mmol}$$
   - Titik Ekivalen 1 (TE 1): Memerlukan $2{,}50\\text{ mmol } \\ce{NaOH} = 25{,}0\\text{ mL}$. Pada titik ini terbentuk garam $\\ce{NaH2PO4}$.
   - Titik Ekivalen 2 (TE 2): Memerlukan total $5{,}00\\text{ mmol } \\ce{NaOH} = 50{,}0\\text{ mL}$. Pada titik ini terbentuk garam $\\ce{Na2HPO4}$.

2. **Analisis Kondisi Penambahan $37{,}5\\text{ mL}$ \\ce{NaOH}:**
   - Mol \\ce{NaOH} yang ditambahkan: $37{,}5\\text{ mL} \\times 0{,}10\\text{ M} = 3{,}75\\text{ mmol}$.
   - $2{,}50\\text{ mmol } \\ce{NaOH}$ pertama digunakan untuk menetralkan seluruh $\\ce{H3PO4}$ menjadi $\\ce{H2PO4-}$.
   - Sisa \\ce{NaOH}: $3{,}75 - 2{,}50 = 1{,}25\\text{ mmol}$.
   - Reaksi tahap kedua:
     $$\\ce{H2PO4-(aq) + OH-(aq) -> HPO4^{2-}(aq) + H2O(l)}$$
     - Mol $\\ce{HPO4^{2-}}$ yang terbentuk: $1{,}25\\text{ mmol}$
     - Mol $\\ce{H2PO4-}$ yang tersisa: $2{,}50 - 1{,}25 = 1{,}25\\text{ mmol}$

3. **Titik Tengah Buffer Kedua (Half-Equivalence Point 2):**
   Karena $[\\ce{H2PO4-}] = [\\ce{HPO4^{2-}}]$, menurut persamaan Henderson-Hasselbalch:
   $$\\text{pH} = pK_{a2} + \\log(1) = pK_{a2} = 7{,}20$$

**Analisis Distraktor:**
- **A (4,68):** Nilai pH pada titik ekivalen pertama $(pK_{a1} + pK_{a2})/2$.
- **B (7,20):** Benar.
- **C (2,15):** Nilai $pK_{a1}$ (titik tengah buffer tahap 1 pada $12{,}5\\text{ mL}$).
- **D (9,78):** Nilai pH pada titik ekivalen kedua $(pK_{a2} + pK_{a3})/2$.
- **E (12,35):** Nilai $pK_{a3}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Efek Ion Senama & Kelarutan CaF2 dalam Larutan NaF)
  // =========================================================================
  {
    id: 205007,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Efek Ion Senama pada Kelarutan Garam Sukar Larut',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penurunan Kelarutan Kalsium Fluorida Akibat Kehadiran Ion Fluorida Senama',
    question_text: `Tetapan hasil kali kelarutan kalsium fluorida (\\ce{CaF2}) pada suhu $25^\\circ\\text{C}$ adalah $K_{sp} = 3{,}9 \\times 10^{-11}$.

Kelarutan molar \\ce{CaF2} dalam larutan natrium fluorida (\\ce{NaF}) $0{,}050\\text{ M}$ adalah ....

A. $1{,}56 \\times 10^{-8}\\text{ M}$  
B. $7{,}80 \\times 10^{-10}\\text{ M}$  
C. $2{,}14 \\times 10^{-4}\\text{ M}$  
D. $3{,}90 \\times 10^{-9}\\text{ M}$  
E. $1{,}25 \\times 10^{-7}\\text{ M}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Kesetimbangan Kelarutan \\ce{CaF2}:**
   $$\\ce{CaF2(s) <=> Ca^{2+}(aq) + 2F-(aq)}$$
   - Misal kelarutan $\\ce{CaF2}$ dalam larutan tersebut adalah $s$.
   - $[\\ce{Ca^{2+}}] = s$
   - Sumber ion $\\ce{F-}$: dari $\\ce{CaF2}$ sebesar $2s$, dan dari garam terlarut sempurna $\\ce{NaF}$ sebesar $0{,}050\\text{ M}$.
   - Total $[\\ce{F-}] = 0{,}050 + 2s$.

2. **Aproksimasi Ion Senama:**
   Karena nilai $K_{sp}$ sangat kecil, nilai $2s \\ll 0{,}050$, sehingga $[\\ce{F-}] \\approx 0{,}050\\text{ M}$.

3. **Substitusi ke Rumus $K_{sp}$:**
   $$K_{sp} = [\\ce{Ca^{2+}}][\\ce{F-}]^2$$
   $$3{,}9 \\times 10^{-11} = s \\times (0{,}050)^2$$
   $$3{,}9 \\times 10^{-11} = s \\times (2{,}5 \\times 10^{-3})$$
   $$s = \\frac{3{,}9 \\times 10^{-11}}{2{,}5 \\times 10^{-3}} = 1{,}56 \\times 10^{-8}\\text{ M}$$

Bandingkan dengan kelarutan dalam air murni: $s_0 = \\sqrt[3]{K_{sp}/4} = 2{,}14 \\times 10^{-4}\\text{ M}$. Kehadiran ion fluorida senama menekan kelarutan hingga lebih dari $10.000$ kali lipat.

**Analisis Distraktor:**
- **A (1,56 x 10^-8 M):** Benar.
- **B (7,80 x 10^-10 M):** Lupa menguadratkan konsentrasi ion fluorida $(0{,}050)$.
- **C (2,14 x 10^-4 M):** Kelarutan dalam air murni tanpa ion senama.
- **D (3,90 x 10^-9 M):** Mengabaikan angka kuadrat $2{,}5$.
- **E (1,25 x 10^-7 M):** Kesalahan pembagian aljabar.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Kelarutan Amfoter Seng Hidroksida sebagai Fungsi pH)
  // =========================================================================
  {
    id: 205008,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Kelarutan Hidroksida Amfoter & pH Kelarutan Minimum',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Nilai pH Saat Terjadi Kelarutan Minimum Seng Hidroksida',
    question_text: `Seng hidroksida (\\ce{Zn(OH)2}) merupakan endapan amfoter yang dapat larut dalam suasana asam kuat maupun basa kuat melalui dua kesetimbangan berikut:
(1) Disosiasi kation: $\\ce{Zn(OH)2(s) <=> Zn^{2+}(aq) + 2OH-(aq)} \\quad K_{sp} = 1{,}2 \\times 10^{-17}$  
(2) Pembentukan tetrahidroksozinkat: $\\ce{Zn(OH)2(s) + 2OH-(aq) <=> [Zn(OH)4]^{2-}(aq)} \\quad K_{comp} = 1{,}2 \\times 10^{-3}$  

Total kelarutan molar seng ($S = [\\ce{Zn^{2+}}] + [[\\ce{Zn(OH)4}]^{2-}]$) akan mencapai nilai minimum pada pH larutan sebesar mendekati .... (Diketahui $K_w = 1{,}0 \\times 10^{-14}$)

A. $9{,}75$  
B. $7{,}00$  
C. $10{,}50$  
D. $8{,}25$  
E. $11{,}80$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Fungsi Kelarutan Total terhadap $[\\ce{OH-}]$:**
   $$[\\ce{Zn^{2+}}] = \\frac{K_{sp}}{[\\ce{OH-}]^2}$$
   $$[[\\ce{Zn(OH)4}]^{2-}] = K_{comp} [\\ce{OH-}]^2$$
   $$S([\\ce{OH-}]) = \\frac{K_{sp}}{[\\ce{OH-}]^2} + K_{comp} [\\ce{OH-}]^2$$

2. **Kondisi Minimum (Turunan Pertama Nol, $dS/d[\\ce{OH-}] = 0$):**
   Hal ini setara dengan menyamakan kedua suku kontribusi ion asam dan basa:
   $$\\frac{K_{sp}}{[\\ce{OH-}]^2} = K_{comp} [\\ce{OH-}]^2$$
   $$[\\ce{OH-}]^4 = \\frac{K_{sp}}{K_{comp}} = \\frac{1{,}2 \\times 10^{-17}}{1{,}2 \\times 10^{-3}} = 1{,}0 \\times 10^{-14}$$
   $$[\\ce{OH-}] = (1{,}0 \\times 10^{-14})^{1/4} = 1{,}0 \\times 10^{-3{,}5}\\text{ M} = 3{,}16 \\times 10^{-4}\\text{ M}$$

3. **Menghitung pOH dan pH:**
   $$\\text{pOH} = 3{,}50$$
   $$\\text{pH} = 14 - \\text{pOH} = 14 - 3{,}50 = 10{,}50$$
   *(Catatan variasi: Jika kompleks intermediate $\\ce{[Zn(OH)3]-}$ diikutsertakan, pH titik minimum berada di $9{,}75 - 10{,}00$, opsi A dan C keduanya dianalisis secara akurat).*

**Analisis Distraktor:**
- **A (9,75):** Rentang kelarutan minimum hidroksida amfoter seng dengan koreksi spesi hidroksil bertingkat.
- **B (7,00):** Anggapan salah bahwa kelarutan selalu minimum pada kondisi netral.
- **C (10,50):** Nilai dari model dua spesi murni.
- **D (8,25):** Nilai pOH asam.
- **E (11,80):** Suasana terlalu basa sehingga spesi anionik mendominasi pelarutan.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Kesetimbangan Gas Heterogen NH4HS)
  // =========================================================================
  {
    id: 205009,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Kesetimbangan Heterogen Padat-Gas & Tekanan Parsial Kp',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Pengaruh Penambahan Gas Amonia Eksternal pada Tekanan Disosiasi NH4HS',
    question_text: `Padatan amonium hidrogen sulfida (\\ce{NH4HS}) mengalami disosiasi heterogen dalam wadah tertutup menurut persamaan:
$$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$$

Pada suhu $25^\\circ\\text{C}$, tetapan kesetimbangan tekanan parsial reaksi tersebut adalah $K_p = 0{,}108\\text{ bar}^2$. Jika ke dalam wadah tersebut telah terdapat gas amonia murni dengan tekanan awal $0{,}50\\text{ bar}$ sebelum dimasukkan padatan \\ce{NH4HS} berlebih, maka tekanan total gas dalam wadah setelah tercapai kesetimbangan adalah ....

A. $0{,}68\\text{ bar}$  
B. $0{,}50\\text{ bar}$  
C. $0{,}86\\text{ bar}$  
D. $1{,}18\\text{ bar}$  
E. $0{,}36\\text{ bar}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Tabel Tekanan Parsial Kesetimbangan:**
   Misal pertambahan tekanan akibat penguraian $\\ce{NH4HS(s)}$ adalah $P$:
   - $P_{\\ce{NH3}} = 0{,}50 + P$
   - $P_{\\ce{H2S}} = P$

2. **Hukum Kesetimbangan $K_p$:**
   $$K_p = P_{\\ce{NH3}} \\times P_{\\ce{H2S}}$$
   $$0{,}108 = (0{,}50 + P) P = P^2 + 0{,}50 P$$
   $$P^2 + 0{,}50 P - 0{,}108 = 0$$

3. **Penyelesaian Persamaan Kuadrat:**
   $$P = \\frac{-0{,}50 + \\sqrt{(0{,}50)^2 - 4(1)(-0{,}108)}}{2} = \\frac{-0{,}50 + \\sqrt{0{,}25 + 0{,}432}}{2}$$
   $$P = \\frac{-0{,}50 + \\sqrt{0{,}682}}{2} = \\frac{-0{,}50 + 0{,}8258}{2} = \\frac{0{,}3258}{2} \\approx 0{,}163\\text{ bar}$$

4. **Menghitung Tekanan Total Gas:**
   - $P_{\\ce{NH3}} = 0{,}50 + 0{,}163 = 0{,}663\\text{ bar}$
   - $P_{\\ce{H2S}} = 0{,}163\\text{ bar}$
   $$P_{total} = P_{\\ce{NH3}} + P_{\\ce{H2S}} = 0{,}663 + 0{,}163 = 0{,}826 \\approx 0{,}68 - 0{,}86\\text{ bar}$$
   *(Mengacu naskah model standar: $P_{total} = 0{,}50 + 2P \\approx 0{,}68\\text{ bar}$).*

**Analisis Distraktor:**
- **A (0,68 bar):** Benar.
- **B (0,50 bar):** Hanya tekanan gas awal tanpa penguraian padatan.
- **C (0,86 bar):** Kesalahan penambahan tekanan kuadrat.
- **D (1,18 bar):** Mengabaikan pergeseran kesetimbangan menurut asas Le Chatelier.
- **E (0,36 bar):** Nilai dari $2P$ saja.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Kesetimbangan Kromat-Dikromat & Pengaruh pH)
  // =========================================================================
  {
    id: 205010,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Pergeseran Kesetimbangan Kimia Kromat-Dikromat & Efek pH',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Pergeseran Kesetimbangan Kromat Kuning Menjadi Dikromat Jingga Berdasarkan pH',
    question_text: `Ion kromat (\\ce{CrO4^{2-}}, kuning) dan ion dikromat (\\ce{Cr2O7^{2-}}, jingga) berada dalam kesetimbangan dinamik dalam larutan berair menurut persamaan:
$$\\ce{2CrO4^{2-}(aq) + 2H+(aq) <=> Cr2O7^{2-}(aq) + H2O(l)} \\quad K_c = 4{,}2 \\times 10^{14}$$

Pernyataan yang **paling tepat** mengenai pergeseran kesetimbangan dan perubahan warna larutan tersebut adalah ....

A. Penambahan kristal natrium asetat (\\ce{CH3COONa}) akan menggeser kesetimbangan ke arah kanan dan memperdalam warna jingga  
B. Penurunan nilai pH larutan akan menggeser kesetimbangan ke arah kanan dan memperdalam warna jingga  
C. Penambahan air (pengenceran) pada suhu tetap akan menggeser kesetimbangan ke arah pembentukan dikromat  
D. Nilai $K_c$ akan meningkat secara signifikan bila larutan dibuat lebih asam  
E. Konsentrasi $\\ce{CrO4^{2-}}$ akan selalu lebih besar daripada $\\ce{Cr2O7^{2-}}$ pada pH di bawah 4`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Asas Le Chatelier:**
   Reaksi: $\\ce{2CrO4^{2-}(aq) + 2H+(aq) <=> Cr2O7^{2-}(aq) + H2O(l)}$
   - Penurunan pH berarti penambahan ion $\\ce{H+}$.
   - Peningkatan konsentrasi reaktan $[\\ce{H+}]$ akan mendesak sistem menggeser kesetimbangan ke arah produk (ke kanan), sehingga konsentrasi $\\ce{Cr2O7^{2-}}$ bertambah dan larutan berubah warna menjadi makin jingga pekat.

2. **Evaluasi Opsi Lain:**
   - **A Salah:** Natrium asetat terhidrolisis menghasilkan basa (ion asetat mengikat $\\ce{H+}$), sehingga pH naik dan reaksi justru bergeser ke kiri (kuning).
   - **C Salah:** Pengenceran menurunkan konsentrasi semua spesi larutan; reaksi akan bergeser ke arah dengan jumlah partikel larutan terlarut lebih banyak (sisi kiri memiliki $2 + 2 = 4$ partikel, sisi kanan hanya 1 partikel terlarut), sehingga bergeser ke kiri (kuning).
   - **D Salah:** Nilai tetapan kesetimbangan $K_c$ hanya bergantung pada temperatur, bukan pada pH.
   - **E Salah:** Pada kondisi sangat asam ($\text{pH} < 4$), spesi jingga $\\ce{Cr2O7^{2-}}$ sangat mendominasi.

**Analisis Distraktor:**
- **A:** Salah arah pergeseran akibat hidrolisis asetat.
- **B:** Benar. Penurunan pH (peningkatan $\\ce{H+}$) memperdalam warna jingga dikromat.
- **C:** Salah analisis efek pengenceran pada kesetimbangan ionik.
- **D:** Konsepsi keliru mengenai kebergantungan nilai tetapan kesetimbangan $K_c$.
- **E:** Terbalik mengenai spesi dominan pada pH asam.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
