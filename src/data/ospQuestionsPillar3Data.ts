/**
 * ospQuestionsPillar3Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 3: Stoikiometri Lanjut, Gas Nyata van der Waals, Kristalografi Kompleks & XRD
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 303001 - 303010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 03 = Pilar 3
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_3_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 8 (Kristalografi Perovskite CaTiO3 & Faktor Toleransi Goldschmidt)
  // =========================================================================
  {
    id: 303001,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristalografi Struktur Perovskite (ABO3) & Faktor Toleransi Goldschmidt',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Bilangan Koordinasi dan Faktor Toleransi Kisi Kristal Perovskite Kalsium Titanat (CaTiO3)',
    question_text: `Kalsium titanat (\\ce{CaTiO3}) merupakan prototipe dari kelas material keramik fungsional berstruktur perovskite (rumus umum $\\ce{ABO3}$). Dalam satu sel satuan kubus ideal:
- Kation $\\ce{Ca^{2+}}$ (kation A) menempati pusat kubus (titik pusat sel satuan).
- Kation $\\ce{Ti^{4+}}$ (kation B) menempati kedelapan sudut kubus.
- Anion oksida $\\ce{O^{2-}}$ menempati pusat dari kedua belas rusuk kubus.

Bilangan koordinasi (BK) kation $\\ce{Ca^{2+}}$ dan $\\ce{Ti^{4+}}$ terhadap anion oksida, serta rumus faktor toleransi Goldschmidt ($t$) untuk kestabilan fasa kubus ideal adalah ....

A. $\\text{BK}(\\ce{Ca^{2+}}) = 12$, $\\text{BK}(\\ce{Ti^{4+}}) = 6$; dengan $t = \\frac{r_{\\ce{Ca}} + r_{\\ce{O}}}{\\sqrt{2}(r_{\\ce{Ti}} + r_{\\ce{O}})}$  
B. $\\text{BK}(\\ce{Ca^{2+}}) = 8$, $\\text{BK}(\\ce{Ti^{4+}}) = 6$; dengan $t = \\frac{r_{\\ce{Ca}} + r_{\\ce{O}}}{r_{\\ce{Ti}} + r_{\\ce{O}}}$  
C. $\\text{BK}(\\ce{Ca^{2+}}) = 6$, $\\text{BK}(\\ce{Ti^{4+}}) = 12$; dengan $t = \\frac{\\sqrt{2}(r_{\\ce{Ca}} + r_{\\ce{O}})}{r_{\\ce{Ti}} + r_{\\ce{O}}}$  
D. $\\text{BK}(\\ce{Ca^{2+}}) = 12$, $\\text{BK}(\\ce{Ti^{4+}}) = 8$; dengan $t = \\frac{r_{\\ce{Ca}} + r_{\\ce{O}}}{\\sqrt{3}(r_{\\ce{Ti}} + r_{\\ce{O}})}$  
E. $\\text{BK}(\\ce{Ca^{2+}}) = 4$, $\\text{BK}(\\ce{Ti^{4+}}) = 4$; dengan $t = \\frac{r_{\\ce{Ti}} + r_{\\ce{O}}}{\\sqrt{2}(r_{\\ce{Ca}} + r_{\\ce{O}})}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Bilangan Koordinasi pada Kisi Perovskite Kubus Ideal:**
   - **Kation $\\ce{Ti^{4+}}$ (posisi B pada sudut kubus):** Setiap sudut dikelilingi oleh 6 anion oksida pada rusuk-rusuk yang bertemu di sudut tersebut, membentuk geometri oktahedral $\\ce{[TiO6]}$, sehingga **$\\text{BK}(\\ce{Ti^{4+}}) = 6$**.
   - **Kation $\\ce{Ca^{2+}}$ (posisi A di pusat kubus):** Dikelilingi secara simetris oleh ke-12 anion oksida yang terletak di pusat ke-12 rusuk kubus, membentuk polihedron ikosahedron terpancung berkordinasi **$\\text{BK}(\\ce{Ca^{2+}}) = 12$**.

2. **Penurunan Faktor Toleransi Goldschmidt ($t$):**
   - Panjang rusuk kubus ($a$) ditentukan oleh kontak $\\ce{Ti-O-Ti}$ di sepanjang rusuk:
     $$a = 2(r_{\\ce{Ti}} + r_{\\ce{O}})$$
   - Panjang diagonal sisi kubus ($d_{face} = a\\sqrt{2}$) ditentukan oleh kontak $\\ce{O-Ca-O}$ di sepanjang diagonal bidang:
     $$d_{face} = 2(r_{\\ce{Ca}} + r_{\\ce{O}})$$
   - Menggabungkan kedua persamaan geometri:
     $$2(r_{\\ce{Ca}} + r_{\\ce{O}}) = a\\sqrt{2} = 2\\sqrt{2}(r_{\\ce{Ti}} + r_{\\ce{O}})$$
   - Rasio geometri ini didefinisikan sebagai **faktor toleransi Goldschmidt ($t$)**:
     $$t = \\frac{r_{\\ce{Ca}} + r_{\\ce{O}}}{\\sqrt{2}(r_{\\ce{Ti}} + r_{\\ce{O}})}$$
   Untuk struktur perovskite kubus ideal tanpa distorsi miring (*tilt*), nilai $t$ mendekati $1{,}00$ (rentang stabilitas perovskite adalah $0{,}8 < t < 1{,}0$).

**Analisis Distraktor:**
- **A:** Benar secara kristalografi perovskite dan geometri Goldschmidt.
- **B:** $\\text{BK}=8$ adalah kubus sederhana Cesium Klorida, bukan kation A perovskite.
- **C:** Bilangan koordinasi kation A dan B tertukar.
- **D:** Menggunakan faktor $\\sqrt{3}$ (diagonal ruang).
- **E:** Bilangan koordinasi 4 adalah tetrahedral seng blende.`,
    source_event: 'OSP Kimia 2023 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2023)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSP 2022 No. 10 (Gas Nyata van der Waals & Parameter Kritis)
  // =========================================================================
  {
    id: 303002,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Persamaan Gas Nyata van der Waals, Titik Kritis & Faktor Kompresibilitas Zc',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Nilai Faktor Kompresibilitas Kritis Teoritis Berdasarkan Persamaan van der Waals',
    question_text: `Persamaan keadaan gas nyata van der Waals untuk 1 mol gas dinyatakan sebagai:
$$\\left( P + \\frac{a}{V_m^2} \\right) (V_m - b) = RT$$

Pada temperatur kritis ($T_c$) dan tekanan kritis ($P_c$), kurva isotermal $P-V_m$ memiliki titik belok (*inflection point*) horizontal di mana turunan pertama dan turunan kedua tekanan terhadap volume molar bernilai tepat nol:
$$\\left(\\frac{\\partial P}{\\partial V_m}\\right)_{T_c} = 0 \\quad \\text{dan} \\quad \\left(\\frac{\\partial^2 P}{\\partial V_m^2}\\right)_{T_c} = 0$$

Berdasarkan kondisi titik belok kritis tersebut, volume molar kritis ($V_c$), temperatur kritis ($T_c$), dan nilai faktor kompresibilitas kritis ($Z_c = \\frac{P_c V_c}{R T_c}$) yang diramalkan secara teoritis oleh model van der Waals berturut-turut adalah ....

A. $V_c = 3b$, $T_c = \\frac{8a}{27Rb}$, dan $Z_c = \\frac{3}{8} = 0{,}375$  
B. $V_c = 2b$, $T_c = \\frac{4a}{9Rb}$, dan $Z_c = \\frac{1}{3} \\approx 0{,}333$  
C. $V_c = 3b$, $T_c = \\frac{a}{27Rb}$, dan $Z_c = 1{,}000$  
D. $V_c = 4b$, $T_c = \\frac{8a}{27Rb}$, dan $Z_c = \\frac{1}{2} = 0{,}500$  
E. $V_c = b$, $T_c = \\frac{27a}{8Rb}$, dan $Z_c = \\frac{8}{3} \\approx 2{,}667$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Ekspansi Tekanan sebagai Fungsi $V_m$:**
   $$P = \\frac{RT}{V_m - b} - \\frac{a}{V_m^2}$$

2. **Kondisi Titik Belok Kritis:**
   - Turunan pertama:
     $$\\left(\\frac{\\partial P}{\\partial V_m}\\right)_T = -\\frac{RT}{(V_m - b)^2} + \\frac{2a}{V_m^3} = 0 \\implies RT_c = \\frac{2a(V_c - b)^2}{V_c^3}$$
   - Turunan kedua:
     $$\\left(\\frac{\\partial^2 P}{\\partial V_m^2}\\right)_T = \\frac{2RT}{(V_m - b)^3} - \\frac{6a}{V_m^4} = 0 \\implies RT_c = \\frac{3a(V_c - b)^3}{V_c^4}$$

3. **Penyelesaian Parameter Kritis:**
   Bagi kedua persamaan:
   $$\\frac{2a(V_c - b)^2}{V_c^3} = \\frac{3a(V_c - b)^3}{V_c^4} \\implies \\frac{2}{1} = \\frac{3(V_c - b)}{V_c}$$
   $$2V_c = 3V_c - 3b \\implies \\mathbf{V_c = 3b}$$

   Substitusi $V_c = 3b$ kembali ke persamaan turunan pertama:
   $$RT_c = \\frac{2a(3b - b)^2}{(3b)^3} = \\frac{2a(4b^2)}{27b^3} = \\frac{8a}{27b} \\implies \\mathbf{T_c = \\frac{8a}{27Rb}}$$

   Substitusi $V_c$ dan $T_c$ ke dalam persamaan tekanan:
   $$P_c = \\frac{R \\left(\\frac{8a}{27Rb}\\right)}{3b - b} - \\frac{a}{(3b)^2} = \\frac{8a/27b}{2b} - \\frac{a}{9b^2} = \\frac{4a}{27b^2} - \\frac{3a}{27b^2} = \\mathbf{\\frac{a}{27b^2}}$$

4. **Faktor Kompresibilitas Kritis Universal ($Z_c$):**
   $$Z_c = \\frac{P_c V_c}{R T_c} = \\frac{\\left(\\frac{a}{27b^2}\\right) (3b)}{R \\left(\\frac{8a}{27Rb}\\right)} = \\frac{\\frac{3a}{27b}}{\\frac{8a}{27b}} = \\mathbf{\\frac{3}{8} = 0{,}375}$$

**Analisis Distraktor:**
- **A:** Benar. $V_c = 3b, T_c = 8a/(27Rb), Z_c = 3/8 = 0{,}375$.
- **B:** Mengasumsikan $V_c = 2b$ dan $Z_c = 1/3$.
- **C:** $Z_c = 1$ adalah karakteristik gas ideal, bukan gas nyata pada titik kritis.
- **D:** Nilai $V_c = 4b$ yang keliru.
- **E:** Terbalik memposisikan suku-suku pada $Z_c$.`,
    source_event: 'OSP Kimia 2022 No. 10 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-P 2021 No. 8 (Kristalografi Kisi HCP vs FCC & Rasio Sumbu c/a)
  // =========================================================================
  {
    id: 303003,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristalografi Kisi Hexagonal Close-Packed (HCP) & Rasio Sumbu Ideal c/a',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Rasio Sumbu Aksial Ideal c/a dan Jumlah Lubang Oktahedral pada Kisi Hexagonal Close-Packed',
    question_text: `Penataan rapat bola-bola identik berjejari $r$ pada kristal logam menghasilkan dua susunan dengan efisiensi pengepakan maksimum yang sama ($74{,}05\\%$):
(1) Susunan kubus berpusat muka (*Face-Centered Cubic / FCC*) dengan pola tumpukan $ABCABC\\dots$
(2) Susunan heksagonal rapat (*Hexagonal Close-Packed / HCP*) dengan pola tumpukan berselang-seling $ABABAB\\dots$

Dalam satu sel satuan prisma heksagonal lengkap dari kisi HCP:
Nilai rasio sumbu vertikal terhadap sumbu alas kisi kristal ideal ($c/a$) dan jumlah total lubang oktahedral yang terdapat di dalam satu sel satuan heksagonal lengkap berturut-turut adalah ....

A. $c/a = \\sqrt{\\frac{8}{3}} \\approx 1{,}633$ dan $6$ lubang oktahedral  
B. $c/a = \\sqrt{2} \\approx 1{,}414$ dan $12$ lubang oktahedral  
C. $c/a = \\sqrt{3} \\approx 1{,}732$ dan $4$ lubang oktahedral  
D. $c/a = \\sqrt{\\frac{8}{3}} \\approx 1{,}633$ dan $12$ lubang oktahedral  
E. $c/a = 1{,}000$ dan $8$ lubang oktahedral`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Penurunan Rasio Sumbu Ideal $c/a$ pada Kisi HCP:**
   - Bola-bola pada lapisan A membentuk segitiga sama sisi pada bidang alas dengan panjang rusuk $a = 2r$.
   - Satu bola pada lapisan B duduk di atas cekungan segitiga yang dibentuk oleh 3 bola lapisan A di bawahnya, membentuk tetrahedron beraturan dengan rusuk $a = 2r$.
   - Tinggi tetrahedron beraturan tersebut ($h$):
     $$h = \\sqrt{a^2 - \\left(\\frac{a}{\\sqrt{3}}\\right)^2} = \\sqrt{a^2 - \\frac{a^2}{3}} = a \\sqrt{\\frac{2}{3}}$$
   - Tinggi satu sel satuan heksagonal penuh ($c$) mencakup jarak antara dua lapisan identik A (yaitu $A \\to B \\to A$, setara dengan 2 kali tinggi tetrahedron $h$):
     $$c = 2h = 2a \\sqrt{\\frac{2}{3}} = a \\sqrt{\\frac{8}{3}}$$
     $$\\frac{c}{a} = \\sqrt{\\frac{8}{3}} = \\sqrt{2{,}667} \\approx 1{,}633$$

2. **Jumlah Atom dan Lubang Oktahedral pada Sel Satuan Heksagonal Lengkap:**
   - Jumlah atom bersih ($Z$) dalam sel satuan heksagonal penuh:
     - 12 sudut: $12 \\times (1/6) = 2$ atom
     - 2 muka alas/atap: $2 \\times (1/2) = 1$ atom
     - 3 atom di dalam lapisan tengah: $3 \\times 1 = 3$ atom
     - Total atom = $2 + 1 + 3 = \\mathbf{6\\text{ atom per sel satuan}}$.
   - Dalam setiap struktur kisi penataan rapat (*close-packed*), perbandingan jumlah lubang oktahedral terhadap jumlah atom selalu tepat $1 : 1$.
   - Maka jumlah **lubang oktahedral per sel satuan heksagonal lengkap adalah 6**. (Dan lubang tetrahedral adalah $2Z = 12$).

**Analisis Distraktor:**
- **A:** Benar. $c/a = \\sqrt{8/3} \\approx 1{,}633$ dan $6$ lubang oktahedral.
- **B:** $\\sqrt{2}$ adalah rasio kubus FCC.
- **C:** Rasio kubus intan.
- **D:** $12$ adalah jumlah lubang tetrahedral, bukan oktahedral.
- **E:** $c/a = 1$ adalah prisma persegi.`,
    source_event: 'KSN-P Kimia 2021 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSP 2024 No. 8 (Persamaan Virial Gas Nyata & Temperatur Boyle)
  // =========================================================================
  {
    id: 303004,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Ekspansi Virial, Koefisien Virial Kedua B(T) & Temperatur Boyle',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Temperatur Boyle Gas Metana Berdasarkan Tetapan van der Waals',
    question_text: `Ekspansi virial menyatakan faktor kompresibilitas gas ($Z$) sebagai deret pangkat terhadap kebalikan volume molar:
$$Z = 1 + \\frac{B(T)}{V_m} + \\frac{C(T)}{V_m^2} + \\dots$$

Dengan melakukan ekspansi deret Taylor pada persamaan gas nyata van der Waals pada rentang kerapatan rendah ($V_m \\gg b$), diperoleh hubungan koefisien virial kedua $B(T)$ sebagai fungsi temperatur:
$$B(T) = b - \\frac{a}{RT}$$

Temperatur Boyle ($T_B$) didefinisikan sebagai temperatur spesifik di mana koefisien virial kedua bernilai tepat nol ($B(T_B) = 0$), sehingga gas nyata mematuhi hukum gas ideal ($Z \\approx 1$) pada rentang tekanan yang relatif luas.

Jika untuk gas metana (\\ce{CH4}) diketahui tetapan van der Waals:
- $a = 2{,}283\\text{ L}^2\\text{ atm mol}^{-2} = 0{,}2313\\text{ J m}^3\\text{ mol}^{-2}$
- $b = 0{,}0428\\text{ L mol}^{-1} = 4{,}28 \\times 10^{-5}\\text{ m}^3\\text{ mol}^{-1}$
- Tetapan gas $R = 8{,}314\\text{ J/(mol K)}$

Nilai temperatur Boyle ($T_B$) dari gas metana adalah mendekati ....

A. $650\\text{ K}$  
B. $191\\text{ K}$  
C. $325\\text{ K}$  
D. $480\\text{ K}$  
E. $850\\text{ K}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Syarat Temperatur Boyle ($T_B$):**
   $$B(T_B) = b - \\frac{a}{R T_B} = 0$$
   $$b = \\frac{a}{R T_B} \\implies T_B = \\frac{a}{R b}$$

2. **Perhitungan Nilai Numerik $T_B$:**
   Menggunakan satuan SI:
   - $a = 0{,}2313\\text{ J m}^3\\text{ mol}^{-2}$
   - $b = 4{,}28 \\times 10^{-5}\\text{ m}^3\\text{ mol}^{-1}$
   - $R = 8{,}314\\text{ J/(mol K)}$

   $$T_B = \\frac{0{,}2313\\text{ J m}^3\\text{ mol}^{-2}}{(8{,}314\\text{ J/(mol K)}) \\times (4{,}28 \\times 10^{-5}\\text{ m}^3\\text{ mol}^{-1})}$$
   $$T_B = \\frac{0{,}2313}{3{,}5584 \\times 10^{-4}} \\approx 650{,}0\\text{ K}$$

3. **Makna Fisik Temperatur Boyle:**
   Pada $T = T_B$ ($650\\text{ K}$ untuk metana), gaya tarik elektrostatik antarmolekul (suku $-a/V_m^2$) dan gaya tolak volume eksklusi ruang partikel (suku $+b$) saling meniadakan secara presisi, sehingga kurva $Z$ terhadap $P$ memiliki kemiringan awal horizontal $(\\partial Z / \\partial P)_{T_B} = 0$.

**Analisis Distraktor:**
- **A (650 K):** Benar.
- **B (191 K):** Temperatur kritis metana ($T_c = 8a/(27Rb) = (8/27) \\times 650 \\approx 191\\text{ K}$).
- **C (325 K):** Setengah dari temperatur Boyle.
- **D (480 K):** Kesalahan konversi satuan liter-atmosfer.
- **E (850 K):** Menggunakan tetapan gas yang salah.`,
    source_event: 'OSP Kimia 2024 No. 8 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2020 No. 9 (Difraksi Sinar-X / XRD Logam Kubus BCC & Bragg)
  // =========================================================================
  {
    id: 303005,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Difraksi Sinar-X (XRD), Hukum Bragg & Jarak Antar-Bidang Miller Kubus',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Panjang Rusuk Sel Satuan Logam Molibdenum dari Data Difraksi XRD',
    question_text: `Kristal logam molibdenum (\\ce{Mo}) memiliki struktur kristal kubus berpusat badan (*Body-Centered Cubic / BCC*). Pola difraksi sinar-X serbuk menggunakan radiasi $\\ce{Cu}\\,K_\\alpha$ dengan panjang gelombang $\\lambda = 0{,}1542\\text{ nm}$ menghasilkan puncak difraksi orde pertama ($n=1$) paling kuat dari bidang kristal $(110)$ pada sudut difraksi $2\\theta = 40{,}50^\\circ$ (sehingga $\\theta = 20{,}25^\\circ$).

Diketahui rumus jarak antar-bidang ($d_{hkl}$) untuk kisi kristal kubus berrusuk $a$:
$$d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$$
dan Hukum Bragg: $n\\lambda = 2d \\sin\\theta$. (Diketahui $\\sin(20{,}25^\\circ) = 0{,}3461$)

Panjang rusuk sel satuan kubus ($a$) dan jari-jari atom ($r$) molibdenum tersebut berturut-turut adalah mendekati ....

A. $a = 0{,}315\\text{ nm}$ dan $r = 0{,}136\\text{ nm}$  
B. $a = 0{,}223\\text{ nm}$ dan $r = 0{,}079\\text{ nm}$  
C. $a = 0{,}315\\text{ nm}$ dan $r = 0{,}111\\text{ nm}$  
D. $a = 0{,}445\\text{ nm}$ dan $r = 0{,}193\\text{ nm}$  
E. $a = 0{,}157\\text{ nm}$ dan $r = 0{,}068\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Menghitung Jarak Antar-Bidang ($d_{110}$) dari Hukum Bragg:**
   $$d_{110} = \\frac{\\lambda}{2 \\sin\\theta} = \\frac{0{,}1542\\text{ nm}}{2 \\times 0{,}3461} = \\frac{0{,}1542}{0{,}6922} \\approx 0{,}2228\\text{ nm}$$

2. **Menghitung Panjang Rusuk Sel Satuan Kubus ($a$):**
   Untuk bidang Miller $(110)$: $h=1, k=1, l=0$:
   $$\\sqrt{h^2 + k^2 + l^2} = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2} \\approx 1{,}4142$$
   $$d_{110} = \\frac{a}{\\sqrt{2}} \\implies a = d_{110} \\times \\sqrt{2}$$
   $$a = 0{,}2228\\text{ nm} \\times 1{,}4142 \\approx 0{,}3151\\text{ nm} \\approx 0{,}315\\text{ nm}$$

3. **Menghitung Jari-Jari Atom Molibdenum pada Kisi BCC:**
   Pada kisi kubus berpusat badan (BCC), kontak atom terjadi di sepanjang diagonal ruang kubus ($d_{ruang} = a\\sqrt{3}$):
   $$4r = a\\sqrt{3} \\implies r = \\frac{a\\sqrt{3}}{4}$$
   $$r = \\frac{0{,}3151\\text{ nm} \\times 1{,}732}{4} = \\frac{0{,}5458}{4} \\approx 0{,}1364\\text{ nm} \\approx 0{,}136\\text{ nm}$$

**Analisis Distraktor:**
- **A:** Benar. $a = 0{,}315\\text{ nm}$ dan $r = 0{,}136\\text{ nm}$.
- **B:** Menganggap $d_{110}$ langsung sebagai panjang rusuk sel satuan ($a = 0{,}223\\text{ nm}$).
- **C:** Menggunakan rumus jari-jari kisi FCC ($r = a\\sqrt{2}/4 = 0{,}111\\text{ nm}$).
- **D:** Mengalikan faktor 2 secara keliru.
- **E:** Kesalahan pembagian sudut $2\theta$ ganda.`,
    source_event: 'OSP Kimia 2020 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Struktur Spinel Normal vs Invers MgAl2O4 vs Fe3O4)
  // =========================================================================
  {
    id: 303006,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristal Oksida Kompleks: Struktur Spinel Normal vs Invers & Energi Preferensi OSSE',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Tipe Struktur Spinel Normal vs Invers Berdasarkan Energi Penstabilan Medan Oktahedral',
    question_text: `Struktur spinel memiliki rumus umum $\\ce{AB2O4}$, di mana ion oksida membentuk susunan penataan rapat kubus (FCC) dengan 8 lubang tetrahedral ($T_d$) dan 4 lubang oktahedral ($O_h$) per satuan rumus.
- **Spinel Normal:** Seluruh kation $A^{2+}$ menempati lubang $T_d$, dan seluruh kation $B^{3+}$ menempati lubang $O_h$.
- **Spinel Invers:** Seluruh kation $A^{2+}$ berpindah menempati lubang $O_h$, sedangkan kation $B^{3+}$ terbagi rata $50\\%$ pada lubang $T_d$ dan $50\\%$ pada lubang $O_h$.

Diberikan dua oksida magnetik:
(1) Magnetit ($\\ce{Fe3O4} = \\ce{Fe^{II}Fe^{III}_2O4}$)  
(2) Seng aluminat ($\\ce{ZnAl2O4}$)  

Berdasarkan nilai energi penstabilan preferensi situs oktahedral (*Octahedral Site Stabilization Energy / OSSE*), tipe struktur dari $\\ce{Fe3O4}$ dan $\\ce{ZnAl2O4}$ berturut-turut adalah ....

A. $\\ce{Fe3O4}$ adalah spinel invers, sedangkan $\\ce{ZnAl2O4}$ adalah spinel normal  
B. $\\ce{Fe3O4}$ adalah spinel normal, sedangkan $\\ce{ZnAl2O4}$ adalah spinel invers  
C. Keduanya merupakan spinel normal  
D. Keduanya merupakan spinel invers  
E. Keduanya mengadopsi kisi perovskite heksagonal`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Konfigurasi Elektron pada $\\ce{Fe3O4}$:**
   - Kation $\\ce{Fe^{3+}}$ ($d^5$, spin tinggi): Memiliki konfigurasi $t_{2g}^3 e_g^2$ (oktahedral) atau $e^2 t_2^3$ (tetrahedral). Nilai CFSE untuk $d^5$ spin tinggi selalu **$0{,}0\\,\\Delta$**, sehingga $\\text{OSSE}(\\ce{Fe^{3+}}) = 0$.
   - Kation $\\ce{Fe^{2+}}$ ($d^6$, spin tinggi):
     - Pada medan oktahedral: $t_{2g}^4 e_g^2 \\implies \\text{CFSE} = 4(-0{,}4) + 2(+0{,}6) = -0{,}4\\,\\Delta_o$.
     - Pada medan tetrahedral: $\\text{CFSE} = -0{,}6\\,\\Delta_t \\approx -0{,}6 (4/9)\\Delta_o \\approx -0{,}27\\,\\Delta_o$.
     - Keuntungan energi di situs oktahedral: $\\text{OSSE} = 0{,}4 - 0{,}27 = +0{,}13\\,\\Delta_o > 0$.
   - Karena $\\ce{Fe^{2+}}$ memiliki preferensi energi yang lebih besar untuk menempati situs oktahedral dibandingkan $\\ce{Fe^{3+}}$ (yang OSSE-nya nol), kation $\\ce{Fe^{2+}}$ mendesak separuh $\\ce{Fe^{3+}}$ keluar ke situs tetrahedral, menghasilkan struktur **spinel invers** $[\\ce{Fe^{3+}}]_{Td} [\\ce{Fe^{2+}Fe^{3+}}]_{Oh} \\ce{O4}$.

2. **Analisis Konfigurasi pada $\\ce{ZnAl2O4}$:**
   - $\\ce{Zn^{2+}}$ memiliki konfigurasi $d^{10}$ penuh ($\\text{CFSE} = 0$).
   - $\\ce{Al^{3+}}$ adalah ion logam utama golongan 13 ($s^0 p^0$, tanpa elektron $d$).
   - Namun, kation trivalen bermuatan tinggi $\\ce{Al^{3+}}$ memiliki kerapatan muatan elektrostatik yang jauh lebih besar daripada kation divalen $\\ce{Zn^{2+}}$. Gaya kisi elektrostatik Madelung sangat menguntungkan ion bermuatan tinggi ($+3$) berada di situs oktahedral yang memiliki bilangan koordinasi lebih besar ($\text{BK}=6$) dengan jarak antar-inti lebih pendek.
   - Akibatnya, seluruh $\\ce{Al^{3+}}$ menempati situs oktahedral dan $\\ce{Zn^{2+}}$ menempati situs tetrahedral, menghasilkan struktur **spinel normal**.

**Analisis Distraktor:**
- **A:** Benar secara termodinamika medan ligan dan elektrostatik.
- **B:** Terbalik secara total.
- **C:** Mengabaikan inversi pada magnetit.
- **D:** Mengabaikan bahwa $\\ce{ZnAl2O4}$ adalah spinel normal sejati.
- **E:** Bukan berstruktur perovskite $\\ce{ABO3}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Cacat Kristal Non-Stoikiometri Wustite Fe_{1-x}O)
  // =========================================================================
  {
    id: 303007,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Cacat Kristal Non-Stoikiometri, Defisiensi Kation & Rasio Fe(II)/Fe(III)',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Fraksi Mol Kation Besi(III) pada Sampel Non-Stoikiometri Wustite Fe0,90O',
    question_text: `Wustite merupakan senyawa besi(II) oksida non-stoikiometri dengan rumus kimia $\\ce{Fe_{0,90}O}$. Ketidakstoikiometrian ini disebabkan oleh adanya kekosongan kation besi pada kisi kristal (defisiensi kation), di mana kenetralan muatan listrik kisi kristal dipertahankan melalui oksidasi sebagian ion $\\ce{Fe^{2+}}$ menjadi $\\ce{Fe^{3+}}$.

Persentase mol kation besi yang berada dalam bentuk $\\ce{Fe^{3+}}$ terhadap total kation besi dalam sampel $\\ce{Fe_{0,90}O}$ tersebut adalah ....

A. $22{,}2\\%$  
B. $10{,}0\\%$  
C. $20{,}0\\%$  
D. $11{,}1\\%$  
E. $77{,}8\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Prinsip Kenetralan Muatan Kristal:**
   Dalam formula $\\ce{Fe_{0,90}O}$, terdapat 1 mol anion $\\ce{O^{2-}}$ yang membawa total muatan negatif:
   $$Q_{negatif} = -2$$
   Total muatan positif dari $0{,}90$ mol kation besi harus tepat menetralkan muatan oksigen:
   $$Q_{positif} = +2$$

2. **Sistem Persamaan Aljabar:**
   Misal fraksi mol $\\ce{Fe^{2+}}$ adalah $x$ dan $\\ce{Fe^{3+}}$ adalah $y$:
   - Jumlah mol total kation:
     $$x + y = 0{,}90$$
   - Total muatan listrik kation:
     $$2x + 3y = 2{,}00$$

3. **Penyelesaian Persamaan:**
   Kalikan persamaan pertama dengan 2:
   $$2x + 2y = 1{,}80$$
   Kurangkan dari persamaan muatan:
   $$(2x + 3y) - (2x + 2y) = 2{,}00 - 1{,}80$$
   $$y = 0{,}20\\text{ mol (jumlah mol } \\ce{Fe^{3+}})$$
   $$x = 0{,}90 - 0{,}20 = 0{,}70\\text{ mol (jumlah mol } \\ce{Fe^{2+}})$$

4. **Persentase Mol $\\ce{Fe^{3+}}$ terhadap Total Besi:**
   $$\\%\\ce{Fe^{3+}} = \\frac{y}{x + y} \\times 100\\% = \\frac{0{,}20}{0{,}90} \\times 100\\% = \\frac{2}{9} \\times 100\\% \\approx 22{,}22\\% \\approx 22{,}2\\%$$

**Analisis Distraktor:**
- **A (22,2%):** Benar. Fraksi mol $\\ce{Fe^{3+}} = 2/9 = 22{,}2\\%$.
- **B (10,0%):** Mengambil nilai selisih stoikiometri $1 - 0{,}90 = 0{,}10$.
- **C (20,0%):** Membagi mol $\\ce{Fe^{3+}}$ ($0{,}20$) dengan 1 mol oksigen alih-alih total kation besi ($0{,}90$).
- **D (11,1%):** Mengabaikan bahwa setiap satu kekosongan $\\ce{Fe^{2+}}$ membutuhkan dua ion $\\ce{Fe^{3+}}$ untuk netralisasi.
- **E (77,8%):** Persentase dari ion $\\ce{Fe^{2+}}$ ($70/90$).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Tekanan Osmotik Membran & Osmometri Polimer)
  // =========================================================================
  {
    id: 303008,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Osmometri Membran Polimer, Persamaan Virial Osmotik & Massa Molar Mn',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Massa Molar Rata-Rata Jumlah Polimer dari Data Plot Tekanan Osmotik',
    question_text: `Pengukuran tekanan osmotik ($\\Pi$) larutan polistirena dalam pelarut toluena pada suhu $27^\\circ\\text{C}$ ($300\\text{ K}$) pada berbagai konsentrasi massa ($c$, dalam $\\text{g/L}$) dianalisis menggunakan persamaan virial osmotik:
$$\\frac{\\Pi}{c} = \\frac{RT}{M_n} + B' c$$
(dengan $M_n$ massa molar rata-rata jumlah polimer, $B'$ koefisien virial kedua, dan $R = 0{,}0821\\text{ L atm/(mol K)}$).

Plot grafik linear $\\frac{\\Pi}{c}$ (dalam $\\text{atm L/g}$) terhadap konsentrasi $c$ (dalam $\\text{g/L}$) menghasilkan garis lurus dengan titik potong sumbu-$y$ (*intercept*) sebesar $4{,}926 \\times 10^{-4}\\text{ atm L/g}$.

Nilai massa molar rata-rata jumlah ($M_n$) dari sampel polistirena tersebut adalah ....

A. $50.000\\text{ g/mol}$  
B. $25.000\\text{ g/mol}$  
C. $100.000\\text{ g/mol}$  
D. $12.500\\text{ g/mol}$  
E. $75.000\\text{ g/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Titik Potong (*Intercept*):**
   Pada saat konsentrasi mendekati nol ($c \\to 0$), efek interaksi antarmolekul polimer (suku virial kedua $B' c$) lenyap, menyisakan suku ideal van 't Hoff:
   $$\\text{Intercept} = \\lim_{c \\to 0} \\frac{\\Pi}{c} = \\frac{RT}{M_n}$$

2. **Perhitungan Massa Molar $M_n$:**
   $$\\frac{RT}{M_n} = 4{,}926 \\times 10^{-4}\\text{ atm L/g}$$
   $$M_n = \\frac{RT}{4{,}926 \\times 10^{-4}\\text{ atm L/g}}$$
   $$RT = (0{,}0821\\text{ L atm/(mol K)}) \\times 300\\text{ K} = 24{,}63\\text{ L atm/mol}$$
   $$M_n = \\frac{24{,}63\\text{ L atm/mol}}{4{,}926 \\times 10^{-4}\\text{ atm L/g}} = 50.000\\text{ g/mol}$$

Metode osmometri membran ini merupakan metode absolut standar IUPAC yang paling presisi untuk mengukur massa molar rata-rata jumlah ($M_n$) makromolekul polimer dan biomolekul protein dalam rentang $10.000 - 1.000.000\\text{ g/mol}$.

**Analisis Distraktor:**
- **A (50.000 g/mol):** Benar.
- **B (25.000 g/mol):** Salah mengalikan faktor 2 pada penyebut.
- **C (100.000 g/mol):** Salah membagi dua nilai intercept.
- **D (12.500 g/mol):** Kesalahan pembagian bertingkat.
- **E (75.000 g/mol):** Salah suhu Kelvin (menggunakan $273\\text{ K}$).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Persamaan Keadaan Tereduksi van der Waals)
  // =========================================================================
  {
    id: 303009,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Hukum Keadaan Bersesuaian (Law of Corresponding States) & Variabel Tereduksi',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Hukum Keadaan Bersesuaian dan Persamaan van der Waals Tereduksi Bebas Tetapan Gas',
    question_text: `Hukum Keadaan Bersesuaian (*Law of Corresponding States*) menyatakan bahwa semua fluida nyata pada nilai tekanan tereduksi ($P_r = P/P_c$), volume tereduksi ($V_r = V_m/V_c$), dan temperatur tereduksi ($T_r = T/T_c$) yang sama akan memiliki faktor kompresibilitas ($Z$) yang sama.

Dengan mensubstitusikan variabel tereduksi tersebut ke dalam persamaan gas van der Waals, persamaan keadaan tereduksi yang diperoleh dan terbebas sepenuhnya dari konstanta individual gas ($a$, $b$, dan $R$) adalah ....

A. $\\left( P_r + \\frac{3}{V_r^2} \\right) (3V_r - 1) = 8T_r$  
B. $\\left( P_r + \\frac{1}{V_r^2} \\right) (V_r - 1) = T_r$  
C. $\\left( P_r + \\frac{27}{V_r^2} \\right) (V_r - 3) = 8T_r$  
D. $\\left( P_r + \\frac{3}{V_r} \\right) (V_r - 1) = 3T_r$  
E. $\\left( P_r + \\frac{8}{V_r^2} \\right) (3V_r - 1) = 27T_r$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Hubungan Parameter Kritis dengan Tetapan van der Waals:**
   $$P_c = \\frac{a}{27b^2}, \\quad V_c = 3b, \\quad T_c = \\frac{8a}{27Rb}$$
   Maka variabel riil dapat dinyatakan dalam variabel tereduksi:
   $$P = P_r P_c = P_r \\left(\\frac{a}{27b^2}\\right)$$
   $$V_m = V_r V_c = V_r (3b)$$
   $$T = T_r T_c = T_r \\left(\\frac{8a}{27Rb}\\right)$$

2. **Substitusi ke Persamaan van der Waals:**
   $$\\left[ P_r \\left(\\frac{a}{27b^2}\\right) + \\frac{a}{(3b V_r)^2} \\right] [3b V_r - b] = R \\left[ T_r \\left(\\frac{8a}{27Rb}\\right) \\right]$$
   Faktorkan $a$ dan $b$ pada setiap suku:
   $$\\frac{a}{27b^2} \\left[ P_r + \\frac{27b^2}{9b^2 V_r^2} \\right] b [3V_r - 1] = \\frac{8a}{27b} T_r$$
   $$\\frac{a}{27b} \\left( P_r + \\frac{3}{V_r^2} \\right) (3V_r - 1) = \\frac{8a}{27b} T_r$$

3. **Membagi Kedua Ruas dengan $\\frac{a}{27b}$:**
   $$\\mathbf{\\left( P_r + \\frac{3}{V_r^2} \\right) (3V_r - 1) = 8T_r}$$

Persamaan universal ini tidak lagi memuat tetapan spesifik zat ($a$ atau $b$) maupun tetapan gas universal $R$, membuktikan Hukum Keadaan Bersesuaian.

**Analisis Distraktor:**
- **A:** Benar secara penurunan termodinamika.
- **B:** Mengabaikan koefisien 3 dan 8 dari parameter kritis.
- **C:** Angka 27 tidak tereduksi.
- **D:** Pangkat kuadrat pada volume molar hilang.
- **E:** Posisi koefisien 8 dan 27 terbalik.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Stoikiometri Superkonduktor YBCO & Iodometri)
  // =========================================================================
  {
    id: 303010,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Stoikiometri Superkonduktor Keramik YBCO & Penentuan Biloks Cu Campuran',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Bilangan Oksidasi Tembaga dan Nilai Non-Stoikiometri Oksigen pada Superkonduktor YBCO',
    question_text: `Superkonduktor suhu tinggi YBCO memiliki rumus kimia $\\ce{YBa2Cu3O_{7-\delta}}$ (dengan $0 \\le \\delta \\le 0{,}5$). Dalam struktur kristal ini:
- Itrium memiliki bilangan oksidasi tetap $+3$ ($\\ce{Y^{3+}}$).
- Barium memiliki bilangan oksidasi tetap $+2$ ($\\ce{Ba^{2+}}$).
- Oksigen memiliki bilangan oksidasi $-2$ ($\\ce{O^{2-}}$).
- Tembaga berada dalam campuran keadaan oksidasi antara $\\ce{Cu^{2+}}$ dan $\\ce{Cu^{3+}}$.

Jika analisis titrasi redoks iodometri membuktikan bahwa bilangan oksidasi rata-rata atom tembaga dalam suatu sampel superkonduktor YBCO adalah $+2{,}33$ (setara dengan rasio molar $\\ce{Cu^{3+}} : \\ce{Cu^{2+}} = 1 : 2$), maka nilai non-stoikiometri oksigen ($\delta$) dalam rumus kimia sampel tersebut adalah ....

A. $\\delta = 0{,}00$ (formula tepat $\\ce{YBa2Cu3O_7}$)  
B. $\\delta = 0{,}25$  
C. $\\delta = 0{,}50$  
D. $\\delta = 0{,}15$  
E. $\\delta = 0{,}33$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Prinsip Kenetralan Muatan Kristal YBCO:**
   Formula: $\\ce{YBa2Cu3O_{7-\\delta}}$
   - Total muatan positif kation:
     $$Q_{pos} = (+3 \\times 1) + (+2 \\times 2) + (\\text{Biloks Cu} \\times 3)$$
     $$Q_{pos} = 3 + 4 + (2{,}333 \\times 3) = 7 + 7{,}00 = +14{,}00$$

2. **Menghitung Nilai $\\delta$ dari Muatan Anion Oksigen:**
   Total muatan negatif anion:
   $$Q_{neg} = -2 \\times (7 - \\delta)$$
   Syarat netralitas muatan:
   $$+14{,}00 - 2(7 - \\delta) = 0$$
   $$14{,}00 = 14 - 2\\delta \\implies 2\\delta = 0 \\implies \\mathbf{\\delta = 0{,}00}$$

3. **Verifikasi:**
   Pada $\delta = 0{,}00$, rumus kimianya adalah $\\ce{YBa2Cu3O7}$.
   - Muatan total: $+3(\\ce{Y}) + 4(\\ce{2Ba}) + 7(\\ce{3Cu}) - 14(\\ce{7O}) = 0$.
   - 3 atom Cu membawa muatan total $+7$, yang berarti tersusun dari $2\\,\\ce{Cu^{2+}}$ ($+4$) dan $1\\,\\ce{Cu^{3+}}$ ($+3$).
   - Bilangan oksidasi rata-rata tembaga = $7/3 \\approx +2{,}33$.
   Kondisi $\delta = 0$ ini merupakan fasa superkonduktor ortorombik optimal dengan temperatur kritis superkonduktivitas tertinggi ($T_c \\approx 93\\text{ K}$).

**Analisis Distraktor:**
- **A (\\delta = 0,00):** Benar.
- **B (\\delta = 0,25):** Biloks rata-rata Cu akan menjadi $+2{,}17$.
- **C (\\delta = 0,50):** Biloks rata-rata Cu menjadi $+2{,}00$ (hanya ada $\\ce{Cu^{2+}}$ murni, fasa tetragonal isolator non-superkonduktor).
- **D (\\delta = 0,15):** Biloks rata-rata Cu sekitar $+2{,}23$.
- **E (\\delta = 0,33):** Salah mengira $\delta$ sama dengan fraksi desimal $0{,}33$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
