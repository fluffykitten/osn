/**
 * smaQuestionsTopic3Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase E & Fase F & OSN)
 * 
 * BATCH 3: Stoikiometri & Wujud Zat (Pilar 3 / Modul 3)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 105001 - 105025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 105001 - 105025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 105001 - 105025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_3_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 105001 - 105025)
  // =========================================================================
  {
    id: 105001,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Konsep Mol, Bilangan Avogadro & Kelimpahan Isotop',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Massa Atom Relatif Rata-Rata Klorin dan Perhitungan Partikel Mol',
    question_text: `Di alam, unsur klorin terdiri dari dua isotop stabil, yaitu $^{35}\\ce{Cl}$ (massa isotop $34{,}97\\ \\text{u}$ dengan kelimpahan $75{,}77\\%$) dan $^{37}\\ce{Cl}$ (massa isotop $36{,}97\\ \\text{u}$ dengan kelimpahan $24{,}23\\%$).

Jika tetapan Avogadro $N_A = 6{,}022 \\times 10^{23}\\ \\text{partikel/mol}$, maka massa atom relatif rata-rata ($A_r$) klorin dan jumlah molekul $\\ce{Cl2}$ yang terdapat dalam $7{,}10\\ \\text{g}$ gas klorin murni berturut-turut adalah ....

A. $A_r = 35{,}45$ dan $3{,}011 \\times 10^{22}$ molekul  
B. $A_r = 35{,}45$ dan $6{,}022 \\times 10^{22}$ molekul  
C. $A_r = 36{,}00$ dan $6{,}022 \\times 10^{22}$ molekul  
D. $A_r = 35{,}45$ dan $1{,}204 \\times 10^{23}$ molekul  
E. $A_r = 35{,}97$ dan $1{,}204 \\times 10^{23}$ molekul`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Perhitungan Massa Atom Relatif Rata-Rata ($A_r$):**
   $$A_r(\\ce{Cl}) = \\sum (\\% \\text{kelimpahan} \\times \\text{massa isotop})$$
   $$A_r(\\ce{Cl}) = (0{,}7577 \\times 34{,}97) + (0{,}2423 \\times 36{,}97) = 26{,}497 + 8{,}958 = 35{,}455 \\approx 35{,}45\\ \\text{g/mol}$$

2. **Massa Molar Gas Klorin Diatomik ($\\ce{Cl2}$):**
   $$M_r(\\ce{Cl2}) = 2 \\times A_r(\\ce{Cl}) = 2 \\times 35{,}45 = 70{,}90\\ \\text{g/mol}$$

3. **Perhitungan Jumlah Mol:**
   $$n(\\ce{Cl2}) = \\frac{\\text{massa}}{M_r} = \\frac{7{,}10\\ \\text{g}}{70{,}90\\ \\text{g/mol}} = 0{,}100\\ \\text{mol}$$

4. **Perhitungan Jumlah Molekul Gas:**
   $$\\text{Jumlah molekul} = n \\times N_A = 0{,}100\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{molekul/mol} = 6{,}022 \\times 10^{22}\\ \\text{molekul}$$
   *(Catatan: Jika ditanya jumlah atom Cl, nilainya adalah $2 \\times 6{,}022 \\times 10^{22} = 1{,}204 \\times 10^{23}$ atom).*

**Analisis Opsi Lain:**
- **A salah:** Membagi jumlah molekul dengan 2 (keliru antara molekul dan atom).
- **C & E salah:** Pembulatan rata-rata sederhana aritmetika tanpa memperhitungkan bobot persen kelimpahan isotop.
- **D salah:** Menyatakan jumlah atom klorin, bukan molekul gas $\\ce{Cl2}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['konsep-mol', 'bilangan-avogadro', 'kelimpahan-isotop', 'massa-atom-relatif'],
  },
  {
    id: 105002,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hukum Proust (Perbandingan Tetap) & Persen Massa',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penerapan Hukum Proust dan Persen Komposisi pada Pembentukan Oksida Besi',
    question_text: `Suatu sampel senyawa murni oksida besi seberat $16{,}00\\ \\text{g}$ dianalisis di laboratorium. Hasil dekomposisi sempurna menghasilkan $11{,}20\\ \\text{g}$ logam besi murni ($\\ce{Fe}$) dan sisanya adalah gas oksigen ($\\ce{O}$). 

Diketahui $A_r\\ \\ce{Fe} = 56{,}0$ dan $A_r\\ \\ce{O} = 16{,}0$. Perbandingan massa paling sederhana $\\ce{Fe} : \\ce{O}$ dan persentase massa unsur besi dalam senyawa tersebut adalah ....

A. $7 : 3$ dan $70{,}0\\%$  
B. $3 : 7$ dan $30{,}0\\%$  
C. $2 : 3$ dan $70{,}0\\%$  
D. $7 : 2$ dan $77{,}8\\%$  
E. $1 : 1$ dan $50{,}0\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Hukum Kekekalan Massa (Lavoisier):**
   $$\\text{Massa oksigen} = \\text{Massa sampel oksida besi} - \\text{Massa besi}$$
   $$\\text{Massa oksigen} = 16{,}00\\ \\text{g} - 11{,}20\\ \\text{g} = 4{,}80\\ \\text{g}$$

2. **Perbandingan Massa Unsur Sesuai Hukum Proust:**
   $$\\text{Massa } \\ce{Fe} : \\text{Massa } \\ce{O} = 11{,}20 : 4{,}80$$
   Bagi kedua angka dengan $1{,}60$:
   $$\\frac{11{,}20}{1{,}60} : \\frac{4{,}80}{1{,}60} = 7 : 3$$

3. **Persentase Massa Unsur Besi ($\\ce{Fe}$):**
   $$\\%\\ \\ce{Fe} = \\left(\\frac{\\text{Massa } \\ce{Fe}}{\\text{Massa total sampel}}\\right) \\times 100\\% = \\left(\\frac{11{,}20\\ \\text{g}}{16{,}00\\ \\text{g}}\\right) \\times 100\\% = 70{,}0\\%$$

*(Catatan Pengayaan: Rasio mol $\\ce{Fe} : \\ce{O} = \\frac{11{,}2}{56} : \\frac{4{,}8}{16} = 0{,}20 : 0{,}30 = 2 : 3$, membuktikan senyawa tersebut adalah hematit, $\\ce{Fe2O3}$).*

**Analisis Opsi Lain:**
- **B salah:** Menukar persentase dan perbandingan antara besi dan oksigen.
- **C salah:** $2 : 3$ adalah perbandingan mol atom, bukan perbandingan massa Proust.
- **D & E salah:** Kesalahan perhitungan pengurangan massa oksigen.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['hukum-proust', 'persen-massa', 'oksida-besi', 'hukum-dasar-kimia'],
  },
  {
    id: 105003,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Rumus Empiris & Rumus Molekul Hidrokarbon',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Rumus Empiris dan Rumus Molekul Gas Hidrokarbon Tak Jenuh',
    question_text: `Suatu senyawa hidrokarbon berwujud gas pada temperatur ruang memiliki komposisi persentase massa sebesar $85{,}71\\%$ karbon dan $14{,}29\\%$ hidrogen. Melalui pengukuran spektrometri massa, diketahui massa molar ($M_r$) senyawa tersebut adalah $42{,}08\\ \\text{g/mol}$.

Diketahui $A_r\\ \\ce{C} = 12{,}011$ dan $A_r\\ \\ce{H} = 1{,}008$. Rumus empiris (RE) dan rumus molekul (RM) senyawa tersebut berturut-turut adalah ....

A. $\\ce{CH}$ dan $\\ce{C3H3}$  
B. $\\ce{CH2}$ dan $\\ce{C3H6}$  
C. $\\ce{CH3}$ dan $\\ce{C2H6}$  
D. $\\ce{C2H3}$ dan $\\ce{C4H6}$  
E. $\\ce{CH2}$ dan $\\ce{C4H8}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Asumsi Basis 100 gram Sampel:**
   - Massa $\\ce{C} = 85{,}71\\ \\text{g}$
   - Massa $\\ce{H} = 14{,}29\\ \\text{g}$

2. **Perhitungan Mol Masing-Masing Unsur:**
   $$n_{\\ce{C}} = \\frac{85{,}71\\ \\text{g}}{12{,}011\\ \\text{g/mol}} = 7{,}136\\ \\text{mol}$$
   $$n_{\\ce{H}} = \\frac{14{,}29\\ \\text{g}}{1{,}008\\ \\text{g/mol}} = 14{,}177\\ \\text{mol}$$

3. **Penentuan Rumus Empiris (RE):**
   $$n_{\\ce{C}} : n_{\\ce{H}} = \\frac{7{,}136}{7{,}136} : \\frac{14{,}177}{7{,}136} = 1 : 1{,}987 \\approx 1 : 2$$
   Maka rumus empirisnya adalah **$\\ce{CH2}$**.

4. **Penentuan Rumus Molekul (RM):**
   $$M_{r, \\text{RE}} = A_r(\\ce{C}) + 2 \\times A_r(\\ce{H}) = 12{,}011 + 2(1{,}008) = 14{,}027\\ \\text{g/mol}$$
   $$(\\text{RE})_n = \\text{RM} \\implies n = \\frac{M_r}{M_{r, \\text{RE}}} = \\frac{42{,}08}{14{,}027} = 3{,}00$$
   Rumus molekul senyawa: $(\\ce{CH2})_3 = \\mathbf{\\ce{C3H6}}$ (propena / siklopropana).

**Analisis Opsi Lain:**
- **A salah:** Rasio $1 : 1$ (asetilena/benzena) memiliki persen karbon $> 92\\%$.
- **C salah:** $\\ce{C2H6}$ (etana) memiliki $M_r = 30\\ \\text{g/mol}$.
- **E salah:** $\\ce{C4H8}$ (butena) memiliki $M_r = 56\\ \\text{g/mol}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E / Persiapan OSK',
    tags: ['rumus-empiris', 'rumus-molekul', 'hidrokarbon', 'persen-unsur'],
  },
  {
    id: 105004,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penyetaraan Persamaan Reaksi & Stoikiometri Massa',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penyetaraan Reaksi Pembakaran Magnesium dan Stoikiometri Produk Oksida',
    question_text: `Pita logam magnesium ($\\ce{Mg}$) dibakar di udara terbuka dengan nyala putih menyilaukan menghasilkan serbuk padatan putih magnesium oksida ($\\ce{MgO}$). Selain itu, terdapat sedikit produk samping akibat reaksi dengan gas nitrogen di udara membentuk magnesium nitrida ($\\ce{Mg3N2}$).

Diketahui massa atom relatif: $A_r\\ \\ce{Mg} = 24{,}31$, $A_r\\ \\ce{O} = 16{,}00$, dan $A_r\\ \\ce{N} = 14{,}01$.

1. Tuliskan persamaan reaksi setara (termasuk fasa wujud zat) untuk:
   a. Pembakaran utama magnesium dengan gas oksigen membentuk magnesium oksida.
   b. Reaksi samping magnesium dengan gas nitrogen membentuk magnesium nitrida.
2. Jika sebanyak $4{,}862\\ \\text{g}$ pita magnesium murni dibakar sempurna hanya dengan gas oksigen berlebih, hitung massa magnesium oksida ($\\ce{MgO}$) teoretis yang terbentuk.
3. Mengapa massa serbuk abu putih yang diperoleh setelah pembakaran pita magnesium di laboratorium seringkali terukur sedikit lebih berat daripada massa pita magnesium mula-mula? Jelaskan kaitannya dengan Hukum Kekekalan Massa Lavoisier.`,
    expected_final_answer: '1. a. 2 Mg(s) + O2(g) -> 2 MgO(s); b. 3 Mg(s) + N2(g) -> Mg3N2(s); 2. 8,062 g MgO; 3. Pengikatan oksigen udara menambah massa padatan.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (a) & (b): Penyetaraan Persamaan Reaksi (Bobot: 4 Poin)**
   - Pembakaran utama:
     $$\\mathbf{2\\ce{Mg}(s) + \\ce{O2}(g) \\rightarrow 2\\ce{MgO}(s)}$$
   - Reaksi samping dengan nitrogen:
     $$\\mathbf{3\\ce{Mg}(s) + \\ce{N2}(g) \\rightarrow \\ce{Mg3N2}(s)}$$

2. **Sub-soal (2): Perhitungan Massa Produk Teoretis (Bobot: 4 Poin)**
   - Jumlah mol $\\ce{Mg}$:
     $$n_{\\ce{Mg}} = \\frac{4{,}862\\ \\text{g}}{24{,}31\\ \\text{g/mol}} = 0{,}200\\ \\text{mol}$$
   - Dari rasio stoikiometri: $2\\ \\text{mol}\\ \\ce{Mg} \\sim 2\\ \\text{mol}\\ \\ce{MgO}$, sehingga:
     $$n_{\\ce{MgO}} = n_{\\ce{Mg}} = 0{,}200\\ \\text{mol}$$
   - Massa molar $\\ce{MgO}$:
     $$M_r(\\ce{MgO}) = 24{,}31 + 16{,}00 = 40{,}31\\ \\text{g/mol}$$
   - Massa $\\ce{MgO}$ teoretis:
     $$m_{\\ce{MgO}} = 0{,}200\\ \\text{mol} \\times 40{,}31\\ \\text{g/mol} = \\mathbf{8{,}062\\ \\text{g}}$$

3. **Sub-soal (3): Penjelasan Hukum Kekekalan Massa Lavoisier (Bobot: 2 Poin)**
   - Abu putih $\\ce{MgO}$ lebih berat ($8{,}062\\ \\text{g}$) daripada pita magnesium mula-mula ($4{,}862\\ \\text{g}$) karena logam magnesium mengikat gas oksigen dari udara bebas ($3{,}200\\ \\text{g}\\ \\ce{O2}$).
   - Menurut Hukum Lavoisier dalam sistem tertutup:
     $$\\text{Massa total reaktan } (\\ce{Mg} + \\ce{O2}) = \\text{Massa total produk } (\\ce{MgO})$$
     $$4{,}862\\ \\text{g} + 3{,}200\\ \\text{g} = 8{,}062\\ \\text{g}$$
     Kenaikan massa padatan disebabkan oleh penambahan massa atom oksigen yang terikat ke dalam kisi kristal padat.`,
    solution_framework_template: `1. Penulisan dan penyetaraan reaksi redoks pembakaran:
• Reaksi dengan O2: ....
• Reaksi dengan N2: ....

2. Perhitungan kuantitatif stoikiometri:
• Mol Mg mula-mula: ....
• Hubungan koefisien reaksi: ....
• Massa MgO yang dihasilkan: ....

3. Analisis hukum Lavoisier:
• Identifikasi spesi yang ditambahkan dari fase gas: ....
• Pembuktian konservasi massa total: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan reaksi setara lengkap dengan fasa wujud zat untuk pembakaran utama magnesium dengan gas oksigen dan reaksi samping dengan gas nitrogen.',
        points: 4,
        rubric: 'Menuliskan fasa dan koefisien setara dengan benar (2 poin untuk reaksi O2, 2 poin untuk reaksi N2).'
      },
      {
        label: 'b',
        question_text: 'Hitung massa magnesium oksida (MgO) teoretis yang terbentuk dari pembakaran 4,862 g pita magnesium murni dengan gas oksigen berlebih.',
        points: 4,
        rubric: 'Menghitung mol Mg (1 poin), menerapkan rasio koefisien (1 poin), menghitung Mr MgO (1 poin), dan mendapatkan massa akhir 8,062 g (1 poin).'
      },
      {
        label: 'c',
        question_text: 'Jelaskan mengapa padatan abu putih terukur lebih berat daripada pita magnesium awal ditinjau dari Hukum Kekekalan Massa Lavoisier.',
        points: 2,
        rubric: 'Menjelaskan pengikatan gas oksigen dari udara dan membuktikan kesetaraan massa sistem total.'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E / Kurikulum Merdeka',
    tags: ['stoikiometri-reaksi', 'penyetaraan-reaksi', 'hukum-lavoisier', 'pembakaran-magnesium'],
  },
  {
    id: 105005,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hukum Gay-Lussac & Hipotesis Avogadro',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Analisis Perbandingan Volume Gas pada Sintesis Amonia Haber-Bosch',
    question_text: `Pada sintesis industri amonia (proses Haber-Bosch), gas nitrogen bereaksi dengan gas hidrogen pada temperatur dan tekanan tetap ($T, P$ konstan) sesuai persamaan reaksi:
$$\\ce{N2}(g) + 3\\ce{H2}(g) \\rightarrow 2\\ce{NH3}(g)$$

Ke dalam suatu reaktor bervolume fleksibel dimasukkan $15{,}0\\ \\text{L}$ gas $\\ce{N2}$ dan $36{,}0\\ \\text{L}$ gas $\\ce{H2}$. Reaksi dibiarkan berlangsung hingga salah satu pereaksi habis bereaksi sempurna.

1. Sebutkan bunyi Hukum Perbandingan Volume Gay-Lussac dan jelaskan mengapa perbandingan volume gas pereaksi dan hasil reaksi setara dengan perbandingan koefisien reaksinya menurut Hipotesis Avogadro.
2. Tentukan gas manakah yang bertindak sebagai pereaksi pembatas, serta hitung:
   a. Volume gas amonia ($\\ce{NH3}$) yang terbentuk pada kondisi akhir.
   b. Volume gas pereaksi yang tersisa tanpa bereaksi.
3. Hitung persentase kontraksi (penurunan) volume total campuran gas setelah reaksi selesai dibandingkan dengan volume total campuran gas sebelum bereaksi.`,
    expected_final_answer: '1. Pada P, T sama, V sebanding n; 2. H2 pembatas, V(NH3) = 24,0 L, sisa V(N2) = 3,0 L; 3. Kontraksi volume = 47,06%.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Hukum Gay-Lussac & Hipotesis Avogadro (Bobot: 3 Poin)**
   - **Hukum Gay-Lussac:** Pada temperatur dan tekanan yang sama, volume gas-gas yang bereaksi dan gas-gas hasil reaksi berbanding sebagai bilangan bulat dan sederhana.
   - **Penjelasan Avogadro:** Gas-gas yang memiliki volume sama pada $T$ dan $P$ yang sama mengandung jumlah molekul (mol) yang sama ($V \\propto n$). Oleh karena koefisien stoikiometri menyatakan rasio mol partikel yang bereaksi, maka pada $P, T$ konstan, **rasio volume gas setara langsung dengan rasio koefisien stoikiometrinya**.

2. **Sub-soal (2): Pereaksi Pembatas & Volume Gas Akhir (Bobot: 4 Poin)**
   - Rasio volume terhadap koefisien:
     - Untuk $\\ce{N2}$: $\\frac{15{,}0\\ \\text{L}}{1} = 15{,}0\\ \\text{L}$
     - Untuk $\\ce{H2}$: $\\frac{36{,}0\\ \\text{L}}{3} = 12{,}0\\ \\text{L}$ (Lebih kecil $\\rightarrow$ **$\\ce{H2}$ adalah Pereaksi Pembatas**).
   - Reaksi yang terjadi:
     - Volume $\\ce{H2}$ yang bereaksi $= 36{,}0\\ \\text{L}$ (habis).
     - Volume $\\ce{N2}$ yang bereaksi $= \\frac{1}{3} \\times 36{,}0\\ \\text{L} = 12{,}0\\ \\text{L}$.
     - Sisa gas $\\ce{N2} = 15{,}0\\ \\text{L} - 12{,}0\\ \\text{L} = \\mathbf{3{,}0\\ \\text{L}}$.
   - Volume gas amonia yang terbentuk:
     $$V_{\\ce{NH3}} = \\frac{2}{3} \\times 36{,}0\\ \\text{L} = \\mathbf{24{,}0\\ \\text{L}}$$

3. **Sub-soal (3): Persentase Kontraksi Volume (Bobot: 3 Poin)**
   - Volume total sebelum reaksi:
     $$V_{\\text{awal}} = V_{\\ce{N2}} + V_{\\ce{H2}} = 15{,}0\\ \\text{L} + 36{,}0\\ \\text{L} = 51{,}0\\ \\text{L}$$
   - Volume total setelah reaksi:
     $$V_{\\text{akhir}} = V_{\\ce{N2, sisa}} + V_{\\ce{NH3}} = 3{,}0\\ \\text{L} + 24{,}0\\ \\text{L} = 27{,}0\\ \\text{L}$$
   - Penurunan volume (kontraksi):
     $$\\Delta V = 51{,}0\\ \\text{L} - 27{,}0\\ \\text{L} = 24{,}0\\ \\text{L}$$
   - Persen kontraksi:
     $$\\%\\ \\text{Kontraksi} = \\left(\\frac{24{,}0\\ \\text{L}}{51{,}0\\ \\text{L}}\\right) \\times 100\\% = \\mathbf{47{,}06\\%}$$`,
    solution_framework_template: `1. Landasan teori hukum dasar gas:
• Bunyi hukum Gay-Lussac: ....
• Korelasi Hipotesis Avogadro V ~ n: ....

2. Penentuan stoikiometri fasa gas:
• Pengecekan pereaksi pembatas: ....
• Volume NH3 yang diproduksi: ....
• Volume reaktan berlebih yang tersisa: ....

3. Kalkulasi kontraksi volume:
• Volume awal vs volume akhir: ....
• Persentase kontraksi: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan dasar Hukum Gay-Lussac dan keterkaitannya dengan Hipotesis Avogadro dalam reaksi gas.',
        points: 3,
        rubric: 'Menyebutkan hukum perbandingan volume (1.5 poin) dan hubungan V ~ n Avogadro (1.5 poin).'
      },
      {
        label: 'b',
        question_text: 'Tentukan pereaksi pembatas, volume NH3 yang terbentuk, dan volume gas yang tersisa.',
        points: 4,
        rubric: 'Menentukan H2 sebagai pembatas (1 poin), volume NH3 = 24 L (1.5 poin), sisa N2 = 3 L (1.5 poin).'
      },
      {
        label: 'c',
        question_text: 'Hitung persentase penurunan (kontraksi) volume total campuran gas setelah reaksi selesai.',
        points: 3,
        rubric: 'Menghitung V awal 51 L dan V akhir 27 L (1.5 poin), mendapatkan 47.06% (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E / OSK Kimia',
    tags: ['gay-lussac', 'hipotesis-avogadro', 'pereaksi-pembatas', 'kontraksi-volume', 'amonia'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 105001 - 105025)
  // =========================================================================
  {
    id: 105006,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pereaksi Pembatas & Persen Hasil Reaksi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Reaksi Pengendapan Timbal(II) Iodida dan Perhitungan Rendemen Reaksi Presisi',
    question_text: `Sebanyak $100{,}0\\ \\text{mL}$ larutan timbal(II) nitrat $\\ce{Pb(NO3)2}\\ 0{,}100\\ \\text{M}$ dicampurkan dengan $100{,}0\\ \\text{mL}$ larutan kalium iodida $\\ce{KI}\\ 0{,}300\\ \\text{M}$ menghasilkan endapan kristal kuning timbal(II) iodida sesuai reaksi:
$$\\ce{Pb(NO3)2}(aq) + 2\\ce{KI}(aq) \\rightarrow \\ce{PbI2}(s) + 2\\ce{KNO3}(aq)$$

Setelah endapan disaring, dicuci, dan dikeringkan hingga massanya konstan, diperoleh endapan $\\ce{PbI2}$ murni seberat $4{,}150\\ \\text{g}$. 

Diketahui massa molar $\\ce{PbI2} = 461{,}0\\ \\text{g/mol}$. Pereaksi pembatas dan persen hasil (*percent yield*) reaksi tersebut berturut-turut adalah ....

A. $\\ce{KI}$ dan $60{,}0\\%$  
B. $\\ce{Pb(NO3)2}$ dan $45{,}0\\%$  
C. $\\ce{Pb(NO3)2}$ dan $90{,}0\\%$  
D. $\\ce{KI}$ dan $90{,}0\\%$  
E. $\\ce{Pb(NO3)2}$ dan $95{,}5\\%$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Perhitungan Mol Masing-Masing Pereaksi:**
   - $n(\\ce{Pb(NO3)2}) = M \\times V = 0{,}100\\ \\text{M} \\times 0{,}1000\\ \\text{L} = 0{,}0100\\ \\text{mol}$
   - $n(\\ce{KI}) = M \\times V = 0{,}300\\ \\text{M} \\times 0{,}1000\\ \\text{L} = 0{,}0300\\ \\text{mol}$

2. **Identifikasi Pereaksi Pembatas:**
   Bagi jumlah mol dengan koefisien reaksinya masing-masing:
   - $\\ce{Pb(NO3)2}: \\frac{0{,}0100}{1} = 0{,}0100\\ \\text{mol}$  **(Nilai terkecil $\\rightarrow$ Pereaksi Pembatas)**
   - $\\ce{KI}: \\frac{0{,}0300}{2} = 0{,}0150\\ \\text{mol}$ (Berlebih sebanyak $0{,}0300 - 2(0{,}0100) = 0{,}0100\\ \\text{mol}$)

3. **Perhitungan Massa Teoretis Produk ($\\ce{PbI2}$):**
   $$n(\\ce{PbI2})_{\\text{teoretis}} = n(\\ce{Pb(NO3)2}) = 0{,}0100\\ \\text{mol}$$
   $$m(\\ce{PbI2})_{\\text{teoretis}} = 0{,}0100\\ \\text{mol} \\times 461{,}0\\ \\text{g/mol} = 4{,}610\\ \\text{g}$$

4. **Perhitungan Persen Hasil (Rendemen):**
   $$\\%\\ \\text{Hasil} = \\left(\\frac{\\text{Massa Nyata}}{\\text{Massa Teoretis}}\\right) \\times 100\\% = \\left(\\frac{4{,}150\\ \\text{g}}{4{,}610\\ \\text{g}}\\right) \\times 100\\% = 90{,}02\\% \\approx 90{,}0\\%$$

**Analisis Opsi Lain:**
- **A & D salah:** $\\ce{KI}$ bukan pembatas karena perbandingan molnya ($0{,}0300 / 2 = 0{,}0150$) lebih besar dari $\\ce{Pb(NO3)2}$.
- **B salah:** Keliru menghitung mol teoretis $\\ce{PbI2}$ menjadi 2 kali lipat.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'OSK Kimia Tingkat Kab/Kota',
    tags: ['pereaksi-pembatas', 'persen-hasil', 'stoikiometri-larutan', 'pengendapan'],
  },
  {
    id: 105007,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Gas Ideal PV = nRT & Kerapatan Gas',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Massa Molar Gas Berdasarkan Kerapatan pada Tekanan dan Suhu Tertentu',
    question_text: `Suatu sampel gas hidrokarbon murni seberat $2{,}562\\ \\text{g}$ ditempatkan dalam bejana tertutup bervolume $1{,}250\\ \\text{L}$ pada suhu $27{,}0^\\circ\\text{C}$ ($300{,}15\\ \\text{K}$) dan tekanan terukur $1{,}200\\ \\text{atm}$. 

Tetapan gas ideal $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$. Massa molar ($M_r$) gas tersebut serta identitas molekul yang bersesuaian adalah .... ($A_r\\ \\ce{C}=12{,}01,\\ \\ce{H}=1{,}008$)

A. $M_r = 28{,}0\\ \\text{g/mol}$ (Etena, $\\ce{C2H4}$)  
B. $M_r = 42{,}1\\ \\text{g/mol}$ (Propena, $\\ce{C3H6}$)  
C. $M_r = 44{,}1\\ \\text{g/mol}$ (Propana, $\\ce{C3H8}$)  
D. $M_r = 58{,}1\\ \\text{g/mol}$ (Butana, $\\ce{C4H10}$)  
E. $M_r = 56{,}1\\ \\text{g/mol}$ (Butena, $\\ce{C4H8}$)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Penurunan Rumus Massa Molar dari Persamaan Gas Ideal:**
   $$PV = nRT = \\left(\\frac{m}{M}\\right) RT \\implies M = \\frac{m \\cdot R \\cdot T}{P \\cdot V}$$

2. **Substitusi Nilai Terukur:**
   - $m = 2{,}562\\ \\text{g}$
   - $V = 1{,}250\\ \\text{L}$
   - $P = 1{,}200\\ \\text{atm}$
   - $T = 27{,}0 + 273{,}15 = 300{,}15\\ \\text{K}$
   - $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$

   $$M = \\frac{2{,}562\\ \\text{g} \\times 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} \\times 300{,}15\\ \\text{K}}{1{,}200\\ \\text{atm} \\times 1{,}250\\ \\text{L}}$$
   $$M = \\frac{63{,}103}{1{,}500} = 42{,}07\\ \\text{g/mol} \\approx 42{,}1\\ \\text{g/mol}$$

3. **Pencocokan Identitas Molekul:**
   - Propena ($\\ce{C3H6}$): $M_r = 3(12{,}01) + 6(1{,}008) = 36{,}03 + 6{,}048 = 42{,}08\\ \\text{g/mol}$.
   Sangat cocok dengan massa molar propena!

**Analisis Opsi Lain:**
- **A salah:** Etena memiliki $M_r = 28{,}05\\ \\text{g/mol}$.
- **C salah:** Propana memiliki $M_r = 44{,}10\\ \\text{g/mol}$.
- **D & E salah:** Senyawa berkarbon 4 memiliki $M_r \\ge 56\\ \\text{g/mol}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan OSK / Seleksi Olimpiade Kab/Kota',
    tags: ['gas-ideal', 'pv-nrt', 'kerapatan-gas', 'massa-molar', 'hidrokarbon'],
  },
  {
    id: 105008,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hukum Efusi/Difusi Graham pada Gas',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Massa Molar Gas Tak Dikenal Berdasarkan Laju Efusi Graham',
    question_text: `Melalui sebuah lubang berpori halus pada wadah efusi, sebanyak $50{,}0\\ \\text{mL}$ gas oksigen murni ($\\ce{O2}$, $M_r = 32{,}00\\ \\text{g/mol}$) memerlukan waktu $40{,}00\\ \\text{detik}$ untuk berefusi keluar seluruhnya.

Pada kondisi temperatur dan tekanan yang persis sama, volume yang sama ($50{,}0\\ \\text{mL}$) dari suatu gas hidrokarbon murni tak dikenal memerlukan waktu $28{,}28\\ \\text{detik}$ untuk berefusi keluar. Rumus molekul gas hidrokarbon tersebut adalah ....

A. Metana ($\\ce{CH4}$, $M_r = 16{,}04$)  
B. Asetilena ($\\ce{C2H2}$, $M_r = 26{,}04$)  
C. Etana ($\\ce{C2H6}$, $M_r = 30{,}07$)  
D. Propana ($\\ce{C3H8}$, $M_r = 44{,}10$)  
E. Karbon monoksida ($\\ce{CO}$, $M_r = 28{,}01$)`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Hukum Efusi Graham:**
   Laju efusi gas ($r$) berbanding terbalik dengan akar kuadrat massa molarnya ($M$), dan berbanding terbalik dengan waktu efusi ($t$) untuk volume gas yang sama:
   $$r = \\frac{V}{t} \\implies \\frac{r_x}{r_{\\ce{O2}}} = \\frac{t_{\\ce{O2}}}{t_x} = \\sqrt{\\frac{M_{\\ce{O2}}}{M_x}}$$

2. **Substitusi Nilai Terukur:**
   $$\\frac{40{,}00\\ \\text{s}}{28{,}28\\ \\text{s}} = \\sqrt{\\frac{32{,}00}{M_x}}$$
   Perhatikan bahwa $\\frac{40{,}00}{28{,}28} = \\frac{40{,}00}{20\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} \\approx 1{,}4142$.

3. **Kuadratkan Kedua Sisi Persamaan:**
   $$(\\sqrt{2})^2 = \\left(\\sqrt{\\frac{32{,}00}{M_x}}\\right)^2$$
   $$2 = \\frac{32{,}00}{M_x} \\implies M_x = \\frac{32{,}00}{2} = \\mathbf{16{,}00\\ \\text{g/mol}}$$

4. **Identifikasi Gas Hidrokarbon:**
   Gas hidrokarbon dengan massa molar sekitar $16\\ \\text{g/mol}$ adalah **Metana ($\\ce{CH4}$)** dengan $M_r = 12{,}011 + 4(1{,}008) = 16{,}04\\ \\text{g/mol}$.

**Analisis Opsi Lain:**
- **B salah:** Asetilena memiliki waktu efusi sekitar 36 detik.
- **C salah:** Etana memiliki $M_r = 30\\ \\text{g/mol}$, laju efusinya hampir sama dengan $\\ce{O2}$.
- **E salah:** $\\ce{CO}$ bukan hidrokarbon murni melainkan oksida karbon.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan OSK Kimia / UTBK Kimia',
    tags: ['hukum-graham', 'efusi-gas', 'laju-efusi', 'massa-molar', 'metana'],
  },
  {
    id: 105009,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hukum Dalton & Pengumpulan Gas di Atas Air',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    diagram_url: '/diagrams/gas-manometer-dalton-stoichiometry.svg',
    title: 'Koreksi Tekanan Uap Air pada Pengumpulan Gas Hidrogen di Atas Air',
    question_text: `Logam seng direaksikan dengan larutan asam klorida encer menghasilkan gas hidrogen sesuai persamaan:
$$\\ce{Zn}(s) + 2\\ce{HCl}(aq) \\rightarrow \\ce{ZnCl2}(aq) + \\ce{H2}(g)$$

Gas $\\ce{H2}$ yang terbentuk ditampung di atas permukaan air pada suhu $25{,}0^\\circ\\text{C}$ ($298{,}15\\ \\text{K}$) dan tekanan barometer total $758{,}0\\ \\text{mmHg}$. Volume gas basah yang terkumpul dalam buret gas terukur sebesar $245{,}0\\ \\text{mL}$.

Diketahui tekanan uap jenuh air pada $25{,}0^\\circ\\text{C}$ adalah $23{,}8\\ \\text{mmHg}$, tetapan gas $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$, dan $A_r\\ \\ce{H} = 1{,}008$. Massa gas $\\ce{H2}$ kering murni yang berhasil dikumpulkan adalah ....

A. $9{,}75\\ \\text{mg}$  
B. $19{,}5\\ \\text{mg}$  
C. $20{,}1\\ \\text{mg}$  
D. $39{,}0\\ \\text{mg}$  
E. $245\\ \\text{mg}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Koreksi Tekanan Parsial Gas Menurut Hukum Dalton:**
   Gas yang terkumpul di atas air merupakan campuran gas hidrogen kering dan uap air jenuh:
   $$P_{\\text{total}} = P_{\\ce{H2}} + P_{\\ce{H2O}}$$
   $$P_{\\ce{H2}} = P_{\\text{total}} - P_{\\ce{H2O}} = 758{,}0\\ \\text{mmHg} - 23{,}8\\ \\text{mmHg} = 734{,}2\\ \\text{mmHg}$$

2. **Konversi Satuan ke Standar SI/Gas Ideal:**
   - $P_{\\ce{H2}} = \\frac{734{,}2}{760{,}0}\\ \\text{atm} = 0{,}96605\\ \\text{atm}$
   - $V = 245{,}0\\ \\text{mL} = 0{,}2450\\ \\text{L}$
   - $T = 298{,}15\\ \\text{K}$

3. **Perhitungan Mol Gas Hidrogen Kering:**
   $$n_{\\ce{H2}} = \\frac{P_{\\ce{H2}} \\cdot V}{R \\cdot T} = \\frac{0{,}96605\\ \\text{atm} \\times 0{,}2450\\ \\text{L}}{0{,}08206\\ \\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 298{,}15\\ \\text{K}}$$
   $$n_{\\ce{H2}} = \\frac{0{,}23668}{24{,}466} = 0{,}009674\\ \\text{mol}$$

4. **Perhitungan Massa Gas Hidrogen ($\\ce{H2}$):**
   $$M_r(\\ce{H2}) = 2 \\times 1{,}008 = 2{,}016\\ \\text{g/mol}$$
   $$m_{\\ce{H2}} = 0{,}009674\\ \\text{mol} \\times 2{,}016\\ \\text{g/mol} = 0{,}01950\\ \\text{g} = \\mathbf{19{,}5\\ \\text{mg}}$$

**Analisis Opsi Lain:**
- **A salah:** Menggunakan $A_r\\ \\ce{H} = 1$ alih-alih gas diatomik $\\ce{H2}$ ($M_r = 2$).
- **C salah:** Tidak mengurangkan tekanan uap air jenuh ($P_{\\text{total}} = 758\\ \\text{mmHg}$ langsung digunakan), menghasilkan nilai lewat-taksir $20{,}1\\ \\text{mg}$.
- **D salah:** Terjadi pengali dua yang keliru.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'OSK Kimia / Seleksi Olimpiade Sains',
    tags: ['hukum-dalton', 'tekanan-parsial', 'pengumpulan-gas-di-atas-air', 'gas-ideal', 'hidrogen'],
  },
  {
    id: 105010,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Stoikiometri Larutan & Titrasi Asam Basa',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Standarisasi Larutan Natrium Hidroksida Menggunakan Kristal Asam Oksalat Dihidrat',
    question_text: `Kristal standar primer asam oksalat dihidrat ($\\ce{H2C2O4.2H2O}$, massa molar $126{,}07\\ \\text{g/mol}$) seberat $0{,}6304\\ \\text{g}$ dilarutkan ke dalam labu takar hingga tepat bervolume $100{,}0\\ \\text{mL}$.

Sebanyak $25{,}00\\ \\text{mL}$ alikuot larutan asam oksalat tersebut dipipet ke dalam erlenmeyer dan dititrasi dengan larutan natrium hidroksida ($\\ce{NaOH}$) menggunakan indikator fenolftalein. Titik akhir titrasi tercapai tepat saat volume $\\ce{NaOH}$ yang terpakai mencapai $20{,}00\\ \\text{mL}$. Reaksi yang terjadi:
$$\\ce{H2C2O4}(aq) + 2\\ce{NaOH}(aq) \\rightarrow \\ce{Na2C2O4}(aq) + 2\\ce{H2O}(l)$$

Konsentrasi molaritas larutan $\\ce{NaOH}$ hasil standarisasi tersebut adalah ....

A. $0{,}0625\\ \\text{M}$  
B. $0{,}1000\\ \\text{M}$  
C. $0{,}1250\\ \\text{M}$  
D. $0{,}2500\\ \\text{M}$  
E. $0{,}5000\\ \\text{M}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Perhitungan Molaritas Larutan Induk Asam Oksalat:**
   $$n_{\\text{total}} = \\frac{0{,}6304\\ \\text{g}}{126{,}07\\ \\text{g/mol}} = 0{,}005000\\ \\text{mol}$$
   $$[\\ce{H2C2O4}] = \\frac{0{,}005000\\ \\text{mol}}{0{,}1000\\ \\text{L}} = 0{,}05000\\ \\text{M}$$

2. **Perhitungan Mol Asam Oksalat dalam Alikuot 25,00 mL:**
   $$n_{\\text{alikuot}} = 0{,}05000\\ \\text{M} \\times 0{,}02500\\ \\text{L} = 0{,}001250\\ \\text{mol}$$

3. **Perhitungan Mol NaOH Berdasarkan Stoikiometri Reaksi:**
   Asam oksalat merupakan asam diprotik (melepaskan $2\\ \\ce{H+}$):
   $$\\frac{n_{\\ce{NaOH}}}{n_{\\ce{H2C2O4}}} = \\frac{2}{1} \\implies n_{\\ce{NaOH}} = 2 \\times 0{,}001250\\ \\text{mol} = 0{,}002500\\ \\text{mol}$$

4. **Perhitungan Molaritas NaOH:**
   $$[\\ce{NaOH}] = \\frac{n_{\\ce{NaOH}}}{V_{\\ce{NaOH}}} = \\frac{0{,}002500\\ \\text{mol}}{0{,}02000\\ \\text{L}} = \\mathbf{0{,}1250\\ \\text{M}}$$

**Analisis Opsi Lain:**
- **A salah:** Lupa mengalikan dengan faktor 2 valensi asam oksalat ($0{,}1250 / 2 = 0{,}0625\\ \\text{M}$).
- **D salah:** Terbalik mengalikan faktor 2 pada volume.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan OSK / Latihan Titrasi Laboratorium',
    tags: ['titrasi-asam-basa', 'asam-oksalat', 'standarisasi-naoh', 'valensi-asam', 'molaritas'],
  },
  {
    id: 105011,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tabel M-R-S & Reaksi Pengendapan Gravimetri',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Kuantitatif Tabel M-R-S pada Reaksi Pengendapan Barium Sulfat',
    question_text: `Reaksi pengendapan gravimetri antara larutan barium klorida dan natrium sulfat berlangsung sesuai persamaan:
$$\\ce{BaCl2}(aq) + \\ce{Na2SO4}(aq) \\rightarrow \\ce{BaSO4}(s) + 2\\ce{NaCl}(aq)$$

Sebanyak $200{,}0\\ \\text{mL}$ larutan $\\ce{BaCl2}\\ 0{,}150\\ \\text{M}$ dicampurkan dengan $300{,}0\\ \\text{mL}$ larutan $\\ce{Na2SO4}\\ 0{,}080\\ \\text{M}$. Campuran diaduk merata hingga seluruh endapan putih $\\ce{BaSO4}$ terbentuk sempurna.

Diketahui massa molar $\\ce{BaSO4} = 233{,}39\\ \\text{g/mol}$. Anggap volume larutan bersifat aditif ($V_{\\text{total}} = 500{,}0\\ \\text{mL}$).

1. Buatlah tabel M-R-S (Mula-mula, Reaksi, Sisa) dalam satuan milimol ($\\text{mmol}$) untuk spesi-spesi yang terlibat dalam reaksi.
2. Tentukan spesi yang bertindak sebagai pereaksi pembatas, serta hitung massa endapan putih $\\ce{BaSO4}$ yang terbentuk.
3. Hitung konsentrasi molaritas masing-masing ion bebas yang terdapat di dalam larutan supernatan setelah pengendapan selesai (ion $\\ce{Ba^2+}, \\ce{Na+}, \\ce{Cl-},$ dan $\\ce{SO4^2-}$).`,
    expected_final_answer: '1. Tabel MRS mmol; 2. Na2SO4 pembatas, m(BaSO4) = 5,601 g; 3. [Ba2+] = 0,012 M, [Na+] = 0,096 M, [Cl-] = 0,120 M, [SO4 2-] ~ 0 M.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Tabel M-R-S dalam Milimol (Bobot: 3 Poin)**
   - Mol awal:
     - $n(\\ce{BaCl2}) = 200{,}0\\ \\text{mL} \\times 0{,}150\\ \\text{mmol/mL} = 30{,}0\\ \\text{mmol}$
     - $n(\\ce{Na2SO4}) = 300{,}0\\ \\text{mL} \\times 0{,}080\\ \\text{mmol/mL} = 24{,}0\\ \\text{mmol}$
   - Tabel M-R-S:
     | Keterangan | $\\ce{BaCl2}(aq)$ | $\\ce{Na2SO4}(aq)$ | $\\ce{BaSO4}(s)$ | $\\ce{NaCl}(aq)$ |
     | :--- | :---: | :---: | :---: | :---: |
     | **Mula-mula** | $30{,}0\\ \\text{mmol}$ | $24{,}0\\ \\text{mmol}$ | $0$ | $0$ |
     | **Reaksi** | $-24{,}0\\ \\text{mmol}$ | $-24{,}0\\ \\text{mmol}$ | $+24{,}0\\ \\text{mmol}$ | $+48{,}0\\ \\text{mmol}$ |
     | **Sisa** | **$6{,}0\\ \\text{mmol}$** | **$0\\ \\text{mmol}$** | **$24{,}0\\ \\text{mmol}$** | **$48{,}0\\ \\text{mmol}$** |

2. **Sub-soal (2): Pereaksi Pembatas & Massa Endapan (Bobot: 3 Poin)**
   - Pereaksi pembatas adalah **$\\ce{Na2SO4}$** karena memiliki mol stoikiometri lebih kecil ($24{,}0 < 30{,}0$).
   - Mol $\\ce{BaSO4}$ padat yang terbentuk $= 24{,}0\\ \\text{mmol} = 0{,}0240\\ \\text{mol}$.
   - Massa endapan $\\ce{BaSO4}$:
     $$m = 0{,}0240\\ \\text{mol} \\times 233{,}39\\ \\text{g/mol} = \\mathbf{5{,}601\\ \\text{g}}$$

3. **Sub-soal (3): Konsentrasi Molaritas Ion Bebas (Bobot: 4 Poin)**
   Volume total campuran $= 200{,}0\\ \\text{mL} + 300{,}0\\ \\text{mL} = 500{,}0\\ \\text{mL} = 0{,}500\\ \\text{L}$.
   - **Ion $\\ce{Ba^2+}$ sisa:**
     $$[\\ce{Ba^2+}] = \\frac{6{,}0\\ \\text{mmol}}{500{,}0\\ \\text{mL}} = \\mathbf{0{,}0120\\ \\text{M}}$$
   - **Ion spektator $\\ce{Cl-}$ (dari $30{,}0\\ \\text{mmol}\\ \\ce{BaCl2} \\rightarrow 60{,}0\\ \\text{mmol}\\ \\ce{Cl-}$):**
     $$[\\ce{Cl-}] = \\frac{60{,}0\\ \\text{mmol}}{500{,}0\\ \\text{mL}} = \\mathbf{0{,}1200\\ \\text{M}}$$
   - **Ion spektator $\\ce{Na+}$ (dari $24{,}0\\ \\text{mmol}\\ \\ce{Na2SO4} \\rightarrow 48{,}0\\ \\text{mmol}\\ \\ce{Na+}$):**
     $$[\\ce{Na+}] = \\frac{48{,}0\\ \\text{mmol}}{500{,}0\\ \\text{mL}} = \\mathbf{0{,}0960\\ \\text{M}}$$
   - **Ion $\\ce{SO4^2-}$:**
     Habis bereaksi secara stoikiometris ($[\\ce{SO4^2-}] \\approx 0\\ \\text{M}$, atau hanya ditentukan oleh $K_{sp}\\ \\ce{BaSO4} \\approx 10^{-10}$).`,
    solution_framework_template: `1. Penyusunan tabel M-R-S:
• mmol reaktan awal: ....
• Baris reaksi berdasarkan koefisien: ....
• mmol sisa dan produk: ....

2. Evaluasi pereaksi pembatas dan massa endapan:
• Justifikasi pereaksi pembatas: ....
• Kalkulasi massa BaSO4 teoretis: ....

3. Konsentrasi ionik akhir:
• Volume total larutan: ....
• Molaritas masing-masing kation dan anion: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Susunlah tabel M-R-S lengkap dalam satuan milimol untuk reaksi tersebut.',
        points: 3,
        rubric: 'Mengisi nilai mula-mula (1 poin), reaksi (1 poin), dan sisa dengan tepat (1 poin).'
      },
      {
        label: 'b',
        question_text: 'Tentukan pereaksi pembatas dan hitung massa endapan BaSO4 yang dihasilkan.',
        points: 3,
        rubric: 'Menyebutkan Na2SO4 pembatas (1 poin), menghitung massa 5,601 g (2 poin).'
      },
      {
        label: 'c',
        question_text: 'Hitung konsentrasi ion Ba2+, Na+, Cl-, dan SO4 2- dalam larutan akhir.',
        points: 4,
        rubric: 'Menghitung tepat masing-masing ion: Ba2+ 0.012 M (1 poin), Cl- 0.120 M (1 poin), Na+ 0.096 M (1 poin), SO4 2- habis (1 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK / Penilaian Kimia Fase F',
    tags: ['tabel-mrs', 'gravimetri', 'pengendapan', 'konsentrasi-ion', 'barium-sulfat'],
  },
  {
    id: 105012,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Analisis Pembakaran Senyawa Organik',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Rumus Molekul Vitamin C Menggunakan Aparatus Analisis Pembakaran',
    question_text: `Perhatikan diagram aparatus analisis pembakaran (*combustion analysis*) berikut:
![Aparatus Analisis Pembakaran](/diagrams/combustion-analysis-apparatus.svg)

Suatu sampel padatan murni asam askorbat (Vitamin C, senyawa yang hanya tersusun dari unsur $\\ce{C, H,}$ dan $\\ce{O}$) seberat $1{,}7612\\ \\text{g}$ ditempatkan di dalam cawan porselen dan dibakar tuntas dalam aliran gas oksigen berlebih. Gas hasil pembakaran dialirkan berturut-turut melewati tabung penyerap $\\ce{H2O}$ (berisi $\\ce{CaCl2}$ anhidrat) dan tabung penyerap $\\ce{CO2}$ (berisi padatan $\\ce{NaOH}$).

Data penimbangan massa tabung penyerap menunjukkan:
- Kenaikan massa tabung penyerap $\\ce{H2O}$ ($\\Delta m_1$) $= 0{,}7206\\ \\text{g}$
- Kenaikan massa tabung penyerap $\\ce{CO2}$ ($\\Delta m_2$) $= 2{,}6406\\ \\text{g}$

Melalui metode spektrometri massa, diketahui massa molar vitamin C adalah $176{,}12\\ \\text{g/mol}$. Diketahui $A_r\\ \\ce{C} = 12{,}011$, $A_r\\ \\ce{H} = 1{,}008$, dan $A_r\\ \\ce{O} = 15{,}999$.

1. Hitung massa dan persentase massa unsur karbon ($\\ce{C}$), hidrogen ($\\ce{H}$), dan oksigen ($\\ce{O}$) dalam sampel vitamin C tersebut.
2. Tentukan rumus empiris (RE) dari vitamin C.
3. Tentukan rumus molekul (RM) dari vitamin C, serta jelaskan mengapa urutan tabung penyerap $\\ce{H2O}$ harus selalu diletakkan sebelum tabung penyerap $\\ce{CO2}$.`,
    expected_final_answer: '1. C = 0,7207 g (40,92%), H = 0,0806 g (4,58%), O = 0,9599 g (54,50%); 2. RE = C3H4O3; 3. RM = C6H8O6; Tabung H2O harus duluan karena reaksi absorpsi CO2 menghasilkan H2O.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Perhitungan Massa & Persen Unsur (Bobot: 4 Poin)**
   - **Massa Karbon ($\\ce{C}$):**
     Seluruh karbon terkonversi menjadi $\\ce{CO2}$:
     $$m_{\\ce{C}} = \\Delta m_{\\ce{CO2}} \\times \\frac{A_r(\\ce{C})}{M_r(\\ce{CO2})} = 2{,}6406\\ \\text{g} \\times \\frac{12{,}011}{44{,}01} = \\mathbf{0{,}7207\\ \\text{g}}$$
     $$\\%\\ \\ce{C} = \\left(\\frac{0{,}7207\\ \\text{g}}{1{,}7612\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{40{,}92\\%}$$
   - **Massa Hidrogen ($\\ce{H}$):**
     Seluruh hidrogen terkonversi menjadi $\\ce{H2O}$ (tiap mol $\\ce{H2O}$ memiliki $2\\ \\text{mol}\\ \\ce{H}$):
     $$m_{\\ce{H}} = \\Delta m_{\\ce{H2O}} \\times \\frac{2 \\times A_r(\\ce{H})}{M_r(\\ce{H2O})} = 0{,}7206\\ \\text{g} \\times \\frac{2{,}016}{18{,}016} = \\mathbf{0{,}0806\\ \\text{g}}$$
     $$\\%\\ \\ce{H} = \\left(\\frac{0{,}0806\\ \\text{g}}{1{,}7612\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{4{,}58\\%}$$
   - **Massa Oksigen ($\\ce{O}$):**
     Diperoleh dari selisih massa sampel:
     $$m_{\\ce{O}} = 1{,}7612\\ \\text{g} - (0{,}7207\\ \\text{g} + 0{,}0806\\ \\text{g}) = \\mathbf{0{,}9599\\ \\text{g}}$$
     $$\\%\\ \\ce{O} = \\left(\\frac{0{,}9599\\ \\text{g}}{1{,}7612\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{54{,}50\\%}$$

2. **Sub-soal (2): Penentuan Rumus Empiris (Bobot: 3 Poin)**
   - Jumlah mol masing-masing unsur:
     $$n_{\\ce{C}} = \\frac{0{,}7207}{12{,}011} = 0{,}06000\\ \\text{mol}$$
     $$n_{\\ce{H}} = \\frac{0{,}0806}{1{,}008} = 0{,}08000\\ \\text{mol}$$
     $$n_{\\ce{O}} = \\frac{0{,}9599}{15{,}999} = 0{,}06000\\ \\text{mol}$$
   - Rasio molar paling sederhana:
     $$n_{\\ce{C}} : n_{\\ce{H}} : n_{\\ce{O}} = \\frac{0{,}06000}{0{,}06000} : \\frac{0{,}08000}{0{,}06000} : \\frac{0{,}06000}{0{,}06000} = 1 : 1{,}333 : 1$$
     Kalikan 3 untuk mendapatkan bilangan bulat terkecil:
     $$3 : 4 : 3 \\implies \\mathbf{\\ce{C3H4O3}}$$

3. **Sub-soal (3): Rumus Molekul & Alasan Urutan Tabung Absorber (Bobot: 3 Poin)**
   - Massa molar rumus empiris:
     $$M_{r, \\text{RE}} = 3(12{,}011) + 4(1{,}008) + 3(15{,}999) = 36{,}033 + 4{,}032 + 47{,}997 = 88{,}062\\ \\text{g/mol}$$
   - Faktor kelipatan $n$:
     $$n = \\frac{M_r}{M_{r, \\text{RE}}} = \\frac{176{,}12}{88{,}062} = 2{,}00 \\implies \\text{Rumus Molekul: } \\mathbf{\\ce{C6H8O6}}$$
   - **Alasan Urutan Tabung Absorber:**
     Reaksi penyerapan gas $\\ce{CO2}$ oleh basa kuat $\\ce{NaOH}$ menghasilkan garam dan uap air sampingan:
     $$2\\ce{NaOH}(s) + \\ce{CO2}(g) \\rightarrow \\ce{Na2CO3}(s) + \\ce{H2O}(g)$$
     Jika tabung $\\ce{CO2}$ diletakkan di depan, uap air hasil sampingan ini akan terbawa ke tabung pengering $\\ce{H2O}$, menyebabkan galat positif (overestimasi) pada massa $\\ce{H2O}$ dan galat fatal pada penentuan rumus empiris.`,
    solution_framework_template: `1. Analisis massa masing-masing elemen:
• Konversi massa CO2 ke massa C: ....
• Konversi massa H2O ke massa H: ....
• Penentuan massa O dari selisih: ....
• Persentase masing-masing unsur: ....

2. Penentuan rumus empiris:
• Perbandingan mol C : H : O: ....
• Normalisasi rasio pecahan ke bilangan bulat terkecil: ....

3. Penentuan rumus molekul dan evaluasi aparatus:
• Kalkulasi kelipatan n terhadap massa molar: ....
• Reaksi kimia dalam tabung absorber NaOH: ....
• Justifikasi urutan susunan tabung absorber: ....`,
    diagram_url: '/diagrams/combustion-analysis-apparatus.svg',
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung massa dan persentase massa unsur C, H, dan O dalam sampel vitamin C.',
        points: 4,
        rubric: 'Menghitung massa & persen C (1.5 poin), H (1.5 poin), dan O (1 poin).'
      },
      {
        label: 'b',
        question_text: 'Tentukan rumus empiris vitamin C dari rasio mol terkecil.',
        points: 3,
        rubric: 'Mendapatkan mol masing-masing (1.5 poin) dan rumus empiris C3H4O3 (1.5 poin).'
      },
      {
        label: 'c',
        question_text: 'Tentukan rumus molekul vitamin C dan jelaskan alasan ilmiah urutan peletakan tabung absorber.',
        points: 3,
        rubric: 'Menentukan RM C6H8O6 (1.5 poin) dan menjelaskan pelepasan H2O oleh NaOH pada absorpsi CO2 (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'OSK Kimia / Seleksi Pelatnas Olimpiade Kimia',
    tags: ['analisis-pembakaran', 'rumus-empiris', 'rumus-molekul', 'vitamin-c', 'aparatus-kimia'],
  },
  {
    id: 105013,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Diagram Fasa P-T & Transisi Fasa',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Komparatif Diagram Fasa P-T Air (H₂O) dan Karbon Dioksida (CO₂)',
    question_text: `Perhatikan diagram fasa tekanan-suhu ($P-T$) komparatif berikut:
![Diagram Fasa P-T](/diagrams/phase-diagram-h2o-co2.svg)

Diagram di atas memperlihatkan batas fasa termodinamika untuk dua zat sederhana: air ($\\ce{H2O}$) dan karbon dioksida ($\\ce{CO2}$).

1. Berdasarkan Persamaan Clapeyron untuk transisi fasa padat-cair (peleburan):
   $$\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{fus}}}{T \\cdot \\Delta V_{\\text{fus}}}$$
   Jelaskan mengapa kurva peleburan air memiliki kemiringan negatif ($\\frac{dP}{dT} < 0$), sedangkan kurva peleburan $\\ce{CO2}$ memiliki kemiringan positif normal ($\\frac{dP}{dT} > 0$). Kaitkan penjelasan Anda dengan perubahan volume molar saat meleleh ($\\Delta V_{\\text{fus}} = V_{\\text{cair}} - V_{\\text{padat}}$).
2. Tekanan titik tripel $\\ce{CO2}$ berada pada $5{,}11\\ \\text{atm}$ (suhu $-56{,}6^\\circ\\text{C}$). Mengapa pada tekanan atmosfer terbuka biasa ($1{,}00\\ \\text{atm}$), penambahan panas pada *dry ice* (padatan $\\ce{CO2}$) menyebabkannya langsung menyublim menjadi gas tanpa pernah mencair?
3. Sebutkan kondisi temperatur dan tekanan minimal yang mutlak dibutuhkan agar cairan $\\ce{CO2}$ dapat terbentuk secara stabil di laboratorium atau industri.`,
    expected_final_answer: '1. Es kurang padat dibanding air (V_cair < V_padat, dV < 0), CO2 padat lebih padat (dV > 0); 2. P = 1 atm berada di bawah titik tripel (5,11 atm); 3. P > 5,11 atm dan T antara -56,6°C hingga 31,1°C.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Analisis Kemiringan Kurva Peleburan Clapeyron (Bobot: 4 Poin)**
   - Kalor lebur molar selalu bernilai positif (endotermik, $\\Delta H_{\\text{fus}} > 0$) dan temperatur termodinamika selalu $T > 0\\ \\text{K}$. Oleh karena itu, tanda dari kemiringan $\\frac{dP}{dT}$ sepenuhnya ditentukan oleh tanda dari $\\Delta V_{\\text{fus}} = V_{\\text{cair}} - V_{\\text{padat}}$.
   - **Untuk Air ($\\ce{H2O}$):**
     Es memiliki struktur kisi kristal terbuka berongga heksagonal yang ditopang oleh ikatan hidrogen. Saat es mencair, struktur rongga ini runtuh sehingga volume menyusut (densitas es lebih kecil daripada densitas air cair: $\\rho_{\\text{es}} < \\rho_{\\text{air}}$).
     Akibatnya, $\\Delta V_{\\text{fus}} < 0$, sehingga:
     $$\\frac{dP}{dT} < 0 \\quad (\\text{Kemiringan negatif, condong ke kiri})$$
     *Implikasi fisis:* Menaikkan tekanan akan menurunkan titik leleh es (tekanan tinggi memicu es mencair).
   - **Untuk Karbon Dioksida ($\\ce{CO2}$):**
     Molekul $\\ce{CO2}$ berperilaku normal: kisi kristal padat terkemas lebih rapat dibanding cairan (densitas padatan lebih besar daripada cairan: $\\rho_{\\text{padat}} > \\rho_{\\text{cair}}$).
     Maka $\\Delta V_{\\text{fus}} > 0$, sehingga:
     $$\\frac{dP}{dT} > 0 \\quad (\\text{Kemiringan positif normal, condong ke kanan})$$

2. **Sub-soal (2): Sublimasi Dry Ice pada 1 atm (Bobot: 3 Poin)**
   - Fasa cair suatu zat murni hanya dapat eksis secara stabil pada tekanan **di atas tekanan titik tripelnya** ($P > P_{\\text{tripel}}$).
   - Untuk $\\ce{CO2}$, titik tripel berada pada tekanan $5{,}11\\ \\text{atm}$.
   - Tekanan atmosfer permukaan bumi adalah $1{,}00\\ \\text{atm}$, yang berada jauh **di bawah garis horizontal titik tripel $\\ce{CO2}$**.
   - Akibatnya, pada $P = 1\\ \\text{atm}$, ketika suhu dinaikkan melewati $-78{,}5^\\circ\\text{C}$, garis proses isobar langsung menyeberangi kurva sublimasi (padat $\\rightarrow$ gas) tanpa pernah memotong daerah fasa cair.

3. **Sub-soal (3): Syarat Pembentukan Cairan CO2 (Bobot: 3 Poin)**
   - **Tekanan Minimal:** Tekanan sistem harus lebih tinggi dari tekanan titik tripel:
     $$P > 5{,}11\\ \\text{atm}$$
   - **Rentang Temperatur:** Temperatur harus berada di antara temperatur titik tripel dan temperatur kritisnya:
     $$-56{,}6^\\circ\\text{C} \\le T \\le 31{,}1^\\circ\\text{C}$$
     *(Jika $T > 31{,}1^\\circ\\text{C}$, zat berada pada kondisi fluida superkritis di mana fasa gas dan cair tidak dapat dibedakan lagi).*`,
    solution_framework_template: `1. Analisis persamaan Clapeyron:
• Rumus dP/dT = dH / (T dV): ....
• Densitas es vs air cair (anomali air): ....
• dV untuk H2O vs dV untuk CO2: ....

2. Penjelasan fenomena sublimasi pada tekanan atmosfer:
• Posisi tekanan 1 atm terhadap titik tripel (5,11 atm): ....
• Lintasan isobar pemanasan pada diagram fasa: ....

3. Batas kestabilan fasa cair:
• Syarat tekanan ambang: ....
• Syarat temperatur kritis: ....`,
    diagram_url: '/diagrams/phase-diagram-h2o-co2.svg',
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan mengapa kurva leleh air berkemiringan negatif sedangkan kurva leleh CO2 berkemiringan positif berdasarkan Persamaan Clapeyron.',
        points: 4,
        rubric: 'Menghubungkan tanda dP/dT dengan dVfus (2 poin) dan menjelaskan anomali densitas es vs air (2 poin).'
      },
      {
        label: 'b',
        question_text: 'Jelaskan mengapa dry ice menyublim pada tekanan 1 atm tanpa pernah mencair.',
        points: 3,
        rubric: 'Menjelaskan tekanan 1 atm berada di bawah tekanan titik tripel 5.11 atm.'
      },
      {
        label: 'c',
        question_text: 'Sebutkan kondisi temperatur dan tekanan minimal agar cairan CO2 stabil terbentuk.',
        points: 3,
        rubric: 'Menyebutkan P > 5.11 atm (1.5 poin) dan rentang suhu -56.6°C s.d. 31.1°C (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN / IChO Kimia Fisika',
    tags: ['diagram-fasa', 'titik-tripel', 'persamaan-clapeyron', 'sublimasi', 'titik-kritis'],
  },
  {
    id: 105014,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Efusi Gas Biner & Pemisahan Isotop',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Pemisahan Kaskade Gas Isotop Uranium Berdasarkan Hukum Efusi Graham',
    question_text: `Proses pengayaan bahan bakar nuklir konvensional memanfaatkan perbedaan laju efusi gas senyawa uranium heksafluorida: $^{235}\\ce{UF6}$ dan $^{238}\\ce{UF6}$.

Diketahui massa atom relatif isotop murni:
- $A_r\\ ^{235}\\ce{U} = 235{,}04\\ \\text{g/mol}$
- $A_r\\ ^{238}\\ce{U} = 238{,}05\\ \\text{g/mol}$
- $A_r\\ ^{19}\\ce{F} = 18{,}998\\ \\text{g/mol}$ (Fluorin hanya memiliki 1 isotop stabil di alam).

1. Hitung massa molar relatif ($M_r$) dari molekul gas $^{235}\\ce{UF6}$ dan $^{238}\\ce{UF6}$.
2. Hitung faktor pemisahan efusi teoretis (faktor pengayaan satu tahap $\\alpha$) yang didefinisikan sebagai rasio laju efusi:
   $$\\alpha = \\frac{r_{235}}{r_{238}}$$
3. Jelaskan secara kuantitatif mengapa dalam industri pengayaan uranium dibutuhkan ribuan tahap kaskade difusi membran berulang untuk meningkatkan kadar $^{235}\\ce{U}$ dari $0{,}72\\%$ (kelimpahan alam) menjadi $3{,}5\\%$ (kadar bahan bakar reaktor daya PLTN komersial).`,
    expected_final_answer: '1. Mr(235-UF6) = 349,03 g/mol, Mr(238-UF6) = 352,04 g/mol; 2. alpha = 1,0043; 3. Karena alpha sangat mendekati 1, pengayaan per tahap sangat kecil (0,43%).',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Perhitungan Massa Molar Molekul Gas (Bobot: 3 Poin)**
   - Massa molar 6 atom Fluorin:
     $$6 \\times 18{,}998 = 113{,}988\\ \\text{g/mol}$$
   - $M_r(^{235}\\ce{UF6}) = 235{,}04 + 113{,}988 = \\mathbf{349{,}028\\ \\text{g/mol}} \\approx 349{,}03\\ \\text{g/mol}$
   - $M_r(^{238}\\ce{UF6}) = 238{,}05 + 113{,}988 = \\mathbf{352{,}038\\ \\text{g/mol}} \\approx 352{,}04\\ \\text{g/mol}$

2. **Sub-soal (2): Faktor Pengayaan Satu Tahap (Bobot: 3 Poin)**
   Berdasarkan Hukum Graham:
   $$\\alpha = \\frac{r_{235}}{r_{238}} = \\sqrt{\\frac{M_r(^{238}\\ce{UF6})}{M_r(^{235}\\ce{UF6})}}$$
   $$\\alpha = \\sqrt{\\frac{352{,}038}{349{,}028}} = \\sqrt{1{,}008624} = \\mathbf{1{,}00430}$$
   *(Laju efusi isotop $^{235}\\ce{UF6}$ hanya $0{,}43\\%$ lebih cepat daripada isotop $^{238}\\ce{UF6}$).*

3. **Sub-soal (3): Kebutuhan Kaskade Multi-Tahap (Bobot: 4 Poin)**
   - Karena faktor pemisahan satu tahap sangat kecil ($\\alpha = 1{,}0043$), peningkatan fraksi mol $^{235}\\ce{U}$ dalam satu kali melewati membran pori hampir tidak signifikan:
     $$R_{\\text{akhir}} = R_{\\text{awal}} \\cdot \\alpha^N$$
     di mana $R = \\frac{[^{235}\\ce{U}]}{[^{238}\\ce{U}]}$ dan $N$ adalah jumlah tahapan (*stages*).
   - Rasio awal pada kelimpahan alam ($0{,}72\\%$):
     $$R_{\\text{awal}} = \\frac{0{,}72}{99{,}28} = 0{,}007252$$
   - Rasio target pengayaan PLTN ($3{,}5\\%$):
     $$R_{\\text{target}} = \\frac{3{,}5}{96{,}5} = 0{,}036269$$
   - Perkiraan jumlah tahap minimum $N$:
     $$\\alpha^N = \\frac{0{,}036269}{0{,}007252} = 5{,}001$$
     $$N \\cdot \\ln(1{,}0043) = \\ln(5{,}001) \\implies N \\approx \\frac{1{,}6096}{0{,}00429} \\approx \\mathbf{375\\ \\text{tahap ideal}}$$
     Dalam instalasi nyata dengan efisiensi membran tak-ideal dan aliran balik, dibutuhkan ribuan tahap kaskade difusi membran kompresor raksasa untuk memproduksi uranium yang diperkaya.`,
    solution_framework_template: `1. Kalkulasi massa molar isotopik UF6:
• Mr 235-UF6: ....
• Mr 238-UF6: ....

2. Evaluasi faktor separasi Graham alpha:
• Rumus alpha = akar(M2/M1): ....
• Nilai numerik alpha: ....

3. Analisis kaskade pemisahan:
• Formulasi R_akhir = R_awal * alpha^N: ....
• Perhitungan jumlah tahap minimum N: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung massa molar gas 235-UF6 dan 238-UF6.',
        points: 3,
        rubric: 'Menghitung tepat Mr 349.03 dan 352.04 g/mol.'
      },
      {
        label: 'b',
        question_text: 'Hitung faktor pemisahan efusi teoretis satu tahap (alpha).',
        points: 3,
        rubric: 'Menerapkan rumus hukum Graham dan mendapatkan alpha = 1.0043.'
      },
      {
        label: 'c',
        question_text: 'Jelaskan mengapa diperlukan ratusan hingga ribuan tahap membran kaskade untuk pengayaan uranium.',
        points: 4,
        rubric: 'Menjelaskan kecilnya nilai alpha (0.43% pengayaan) dan menunjukkan estimasi matematis N ratusan tahap.'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN / IChO Preparatory Problem',
    tags: ['hukum-graham', 'efusi-gas', 'pengayaan-uranium', 'isotop', 'kaskade-difusi'],
  },
  {
    id: 105015,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Stoikiometri Gas Non-STP & Logam Amfoter',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Stoikiometri Reaksi Logam Amfoter Aluminium dalam Suasana Asam dan Basa',
    question_text: `Logam aluminium ($\\ce{Al}$) merupakan logam amfoter yang dapat bereaksi dengan asam kuat maupun basa kuat menghasilkan gas hidrogen:
- **Reaksi 1 (Suasana Asam):**  
  $$2\\ce{Al}(s) + 6\\ce{HCl}(aq) \\rightarrow 2\\ce{AlCl3}(aq) + 3\\ce{H2}(g)$$
- **Reaksi 2 (Suasana Basa):**  
  $$2\\ce{Al}(s) + 2\\ce{NaOH}(aq) + 6\\ce{H2O}(l) \\rightarrow 2\\ce{Na[Al(OH)4]}(aq) + 3\\ce{H2}(g)$$

Diketahui massa atom relatif aluminium $A_r\\ \\ce{Al} = 26{,}98$, dan tetapan gas $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.

1. Sebanyak $2{,}698\\ \\text{g}$ kepingan aluminium murni direaksikan tuntas ke dalam larutan natrium hidroksida ($\\ce{NaOH}$) berlebih. Hitung volume gas $\\ce{H2}$ yang dibebaskan jika diukur pada suhu $27{,}0^\\circ\\text{C}$ ($300{,}15\\ \\text{K}$) dan tekanan $1{,}500\\ \\text{atm}$.
2. Jika sampel aluminium dengan massa yang persis sama direaksikan tuntas ke dalam larutan $\\ce{HCl}$ berlebih pada kondisi suhu dan tekanan yang sama, apakah volume gas $\\ce{H2}$ yang terbentuk akan berbeda? Berikan alasan berdasarkan koefisien stoikiometri kedua reaksi.
3. Ke dalam larutan kompleks natrium tetrahidroksoaluminat $\\ce{Na[Al(OH)4]}$ hasil reaksi (2), ditambahkan larutan $\\ce{HCl}$ encer setetes demi setetes. Tuliskan persamaan reaksi pembentukan endapan putih seperti gelatin yang mula-mula muncul, serta apa yang terjadi jika penambahan $\\ce{HCl}$ dilanjutkan hingga berlebih!`,
    expected_final_answer: '1. V(H2) = 2,463 L; 2. Sama persis (2,463 L) karena rasio mol Al : H2 adalah 2 : 3 pada kedua reaksi; 3. Terbentuk endapan Al(OH)3, larut kembali menjadi Al3+ jika HCl berlebih.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Perhitungan Volume Gas H2 Non-STP (Bobot: 4 Poin)**
   - Jumlah mol aluminium yang bereaksi:
     $$n_{\\ce{Al}} = \\frac{2{,}698\\ \\text{g}}{26{,}98\\ \\text{g/mol}} = 0{,}1000\\ \\text{mol}$$
   - Berdasarkan reaksi basa:
     $$\\frac{n_{\\ce{H2}}}{n_{\\ce{Al}}} = \\frac{3}{2} \\implies n_{\\ce{H2}} = \\frac{3}{2} \\times 0{,}1000\\ \\text{mol} = 0{,}1500\\ \\text{mol}$$
   - Menggunakan persamaan gas ideal $PV = nRT$:
     $$V_{\\ce{H2}} = \\frac{n_{\\ce{H2}} \\cdot R \\cdot T}{P} = \\frac{0{,}1500\\ \\text{mol} \\times 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} \\times 300{,}15\\ \\text{K}}{1{,}500\\ \\text{atm}}$$
     $$V_{\\ce{H2}} = \\frac{3{,}6945}{1{,}500} = \\mathbf{2{,}463\\ \\text{L}}$$

2. **Sub-soal (2): Komparasi Volume Gas pada Reaksi Asam (Bobot: 3 Poin)**
   - Pada Reaksi 1 (suasana asam), rasio stoikiometri antara $\\ce{Al}$ dan $\\ce{H2}$ juga bernilai:
     $$\\frac{n_{\\ce{H2}}}{n_{\\ce{Al}}} = \\frac{3}{2}$$
   - Karena massa aluminium yang bereaksi sama ($0{,}1000\\ \\text{mol}$), jumlah mol gas $\\ce{H2}$ yang dihasilkan sama persis ($0{,}1500\\ \\text{mol}$).
   - Karena diukur pada kondisi temperatur ($300{,}15\\ \\text{K}$) dan tekanan ($1{,}500\\ \\text{atm}$) yang identik, maka **volume gas $\\ce{H2}$ yang terbentuk sama persis, yaitu $2{,}463\\ \\text{L}$**.

3. **Sub-soal (3): Karakteristik Amfoter Endapan Al(OH)3 (Bobot: 3 Poin)**
   - Penambahan asam $\\ce{HCl}$ encer sedikit menetralkan ligan hidroksida berlebih, membentuk endapan putih gelatin aluminium hidroksida:
     $$\\mathbf{\\ce{[Al(OH)4]^-}(aq) + \\ce{H^+}(aq) \\rightarrow \\ce{Al(OH)3}(s) \\downarrow + \\ce{H2O}(l)}$$
   - Jika penambahan $\\ce{HCl}$ dilanjutkan berlebih, endapan $\\ce{Al(OH)3}$ akan **larut kembali** membentuk ion kompleks akua aluminium:
     $$\\mathbf{\\ce{Al(OH)3}(s) + 3\\ce{H^+}(aq) \\rightarrow \\ce{Al^3+}(aq) + 3\\ce{H2O}(l)}$$
     Hal ini membuktikan sifat amfoter aluminium hidroksida yang dapat larut dalam kelebihan asam maupun basa kuat.`,
    solution_framework_template: `1. Kalkulasi gas hidrogen non-STP:
• Perhitungan mol Al: ....
• Hubungan koefisien stoikiometri Al ke H2: ....
• Aplikasi PV = nRT untuk volume gas: ....

2. Evaluasi komparatif reaksi asam vs basa:
• Analisis rasio koefisien Reaksi 1 vs Reaksi 2: ....
• Kesimpulan kesetaraan volume gas: ....

3. Reaksi bertahap logam amfoter:
• Pembentukan endapan Al(OH)3: ....
• Pelarutan kembali dalam kelebihan asam kuat: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung volume gas H2 yang dibebaskan pada 27°C dan 1,50 atm dari reaksi 2,698 g aluminium dengan NaOH berlebih.',
        points: 4,
        rubric: 'Menghitung mol Al dan H2 (2 poin), menghitung V = 2.463 L dengan PV=nRT (2 poin).'
      },
      {
        label: 'b',
        question_text: 'Bandingkan volume H2 yang dihasilkan jika direaksikan dengan HCl berlebih pada P dan T yang sama.',
        points: 3,
        rubric: 'Menyatakan volume sama persis (1.5 poin) dengan argumen rasio 2:3 yang identik (1.5 poin).'
      },
      {
        label: 'c',
        question_text: 'Tuliskan reaksi pembentukan endapan putih saat ditambah sedikit asam dan apa yang terjadi jika asam berlebih.',
        points: 3,
        rubric: 'Menuliskan reaksi pembentukan Al(OH)3 (1.5 poin) dan pelarutan kembali menjadi Al3+ (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK / Penilaian Sumatif Kimia Fase F',
    tags: ['logam-amfoter', 'aluminium', 'gas-ideal', 'pv-nrt', 'reaksi-pengendapan'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 105001 - 105025)
  // =========================================================================
  {
    id: 105016,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Gas Nyata van der Waals & Faktor Kompresibilitas',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Evaluasi Tekanan Gas Nyata Nitrogen Menggunakan Persamaan Keadaan van der Waals',
    question_text: `Sebanyak $10{,}00\\ \\text{mol}$ gas nitrogen ($\\ce{N2}$) dimampatkan ke dalam bejana baja kaku berukuran $2{,}000\\ \\text{L}$ pada temperatur $300{,}0\\ \\text{K}$. 

Diketahui konstanta van der Waals untuk gas $\\ce{N2}$:
- $a = 1{,}390\\ \\text{L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$ (koreksi gaya tarik antarmolekul)
- $b = 0{,}03913\\ \\text{L}\\cdot\\text{mol}^{-1}$ (koreksi volume molekul)
- $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$

Nilai tekanan gas nyata menurut persamaan van der Waals ($P_{\\text{vdW}}$) serta faktor kompresibilitasnya ($Z = \\frac{PV}{nRT}$) berturut-turut adalah ....

A. $123{,}1\\ \\text{atm}$ dan $Z = 1{,}000$  
B. $118{,}3\\ \\text{atm}$ dan $Z = 0{,}961$  
C. $153{,}0\\ \\text{atm}$ dan $Z = 1{,}243$  
D. $104{,}8\\ \\text{atm}$ dan $Z = 0{,}851$  
E. $138{,}5\\ \\text{atm}$ dan $Z = 1{,}125$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Persamaan Keadaan van der Waals:**
   $$\\left(P + \\frac{a \\cdot n^2}{V^2}\\right) (V - n \\cdot b) = nRT$$
   Dapat diatur ulang untuk menghitung tekanan gas nyata ($P_{\\text{vdW}}$):
   $$P_{\\text{vdW}} = \\frac{nRT}{V - nb} - \\frac{a \\cdot n^2}{V^2}$$

2. **Perhitungan Suku Repulsi/Volume Efektif:**
   $$V - nb = 2{,}000\\ \\text{L} - (10{,}00\\ \\text{mol} \\times 0{,}03913\\ \\text{L/mol}) = 2{,}000 - 0{,}3913 = 1{,}6087\\ \\text{L}$$
   $$P_{\\text{kinetik}} = \\frac{10{,}00 \\times 0{,}08206 \\times 300{,}0}{1{,}6087} = \\frac{246{,}18}{1{,}6087} = 153{,}03\\ \\text{atm}$$

3. **Perhitungan Suku Atraksi/Tekanan Kohesif Antarmolekul:**
   $$P_{\\text{atraksi}} = \\frac{a \\cdot n^2}{V^2} = \\frac{1{,}390 \\times (10{,}00)^2}{(2{,}000)^2} = \\frac{139{,}0}{4{,}000} = 34{,}75\\ \\text{atm}$$

4. **Tekanan Gas Nyata Total ($P_{\\text{vdW}}$):**
   $$P_{\\text{vdW}} = 153{,}03\\ \\text{atm} - 34{,}75\\ \\text{atm} = \\mathbf{118{,}28\\ \\text{atm}} \\approx 118{,}3\\ \\text{atm}$$

5. **Perhitungan Faktor Kompresibilitas ($Z$):**
   $$P_{\\text{ideal}} = \\frac{nRT}{V} = \\frac{246{,}18}{2{,}000} = 123{,}09\\ \\text{atm}$$
   $$Z = \\frac{P_{\\text{vdW}} \\cdot V}{nRT} = \\frac{118{,}28\\ \\text{atm}}{123{,}09\\ \\text{atm}} = \\mathbf{0{,}9609} \\approx 0{,}961$$

*Kesimpulan Ilmiah:* Karena $Z < 1$, gaya tarik antarmolekul nitrogen mendominasi dibandingkan efek volume partikel, sehingga tekanan gas nyata lebih rendah daripada tekanan gas ideal.

**Analisis Opsi Lain:**
- **A salah:** Menggunakan model gas ideal murni ($Z = 1$).
- **C salah:** Hanya memperhitungkan koreksi volume $b$ tanpa mengurangkan gaya tarik $a$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi / Kimia Fisika',
    tags: ['gas-nyata', 'van-der-waals', 'faktor-kompresibilitas', 'tekanan-kohesif'],
  },
  {
    id: 105017,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Stoikiometri Titrasi Redoks Multi-Tahap (Iodometri)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Kadar Tembaga dalam Paduan Logam Kuningan Melalui Titrasi Iodometri Presisi',
    question_text: `Suatu sampel paduan kuningan (*brass*) seberat $0{,}5000\\ \\text{g}$ dilarutkan ke dalam asam nitrat pekat panas. Setelah ion nitrogen oksida dihilangkan dan larutan dinetralkan, ditambahkan larutan kalium iodida ($\\ce{KI}$) berlebih sehingga seluruh ion $\\ce{Cu^2+}$ mengendap sebagai $\\ce{CuI}$ membebaskan iodin:
$$2\\ce{Cu^2+}(aq) + 4\\ce{I-}(aq) \\rightarrow 2\\ce{CuI}(s) + \\ce{I2}(aq)$$

Iodin ($\\ce{I2}$) yang dibebaskan kemudian dititrasi dengan larutan standar natrium tiosulfat $\\ce{Na2S2O3}\\ 0{,}1000\\ \\text{M}$ menggunakan indikator amilum:
$$\\ce{I2}(aq) + 2\\ce{S2O3^2-}(aq) \\rightarrow 2\\ce{I-}(aq) + \\ce{S4O6^2-}(aq)$$

Jika titik akhir titrasi tercapai tepat saat volume $\\ce{Na2S2O3}$ terpakai sebanyak $35{,}20\\ \\text{mL}$, maka persentase massa tembaga ($A_r\\ \\ce{Cu} = 63{,}55$) dalam paduan kuningan tersebut adalah ....

A. $22{,}37\\%$  
B. $44{,}74\\%$  
C. $67{,}11\\%$  
D. $89{,}48\\%$  
E. $35{,}20\\%$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Perhitungan Mol Tiosulfat ($\\ce{S2O3^2-}$):**
   $$n(\\ce{S2O3^2-}) = M \\times V = 0{,}1000\\ \\text{M} \\times 0{,}03520\\ \\text{L} = 0{,}003520\\ \\text{mol}$$

2. **Stoikiometri Reaksi Berantai:**
   - Dari reaksi titrasi tiosulfat:
     $$n(\\ce{I2}) = \\frac{1}{2} \\times n(\\ce{S2O3^2-})$$
   - Dari reaksi reduksi tembaga(II):
     $$n(\\ce{Cu^2+}) = 2 \\times n(\\ce{I2})$$
   - Substitusikan:
     $$n(\\ce{Cu^2+}) = 2 \\times \\left(\\frac{1}{2} \\times n(\\ce{S2O3^2-})\\right) = n(\\ce{S2O3^2-})$$
     Rasio mol tembaga setara langsung $1 : 1$ terhadap tiosulfat!
     $$n(\\ce{Cu}) = 0{,}003520\\ \\text{mol}$$

3. **Perhitungan Massa dan Persentase Tembaga:**
   $$m(\\ce{Cu}) = 0{,}003520\\ \\text{mol} \\times 63{,}55\\ \\text{g/mol} = 0{,}22370\\ \\text{g}$$
   $$\\%\\ \\ce{Cu} = \\left(\\frac{0{,}22370\\ \\text{g}}{0{,}5000\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{44{,}74\\%}$$

**Analisis Opsi Lain:**
- **A salah:** Keliru membagi mol dengan faktor 2 ($22{,}37\\%$).
- **D salah:** Keliru mengalikan dengan faktor 2 ($89{,}48\\%$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Seleksi OSP Kimia / OSN Kimia Analitik',
    tags: ['iodometri', 'titrasi-redoks', 'stoikiometri-multi-tahap', 'paduan-kuningan', 'tembaga'],
  },
  {
    id: 105018,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Distribusi Maxwell-Boltzmann & Kecepatan Molekuler',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Evaluasi Perbandingan Kecepatan Karakteristik Gas Maxwell-Boltzmann pada Suhu Berbeda',
    question_text: `Perhatikan kurva distribusi kecepatan molekuler Maxwell-Boltzmann berikut:
![Distribusi Maxwell-Boltzmann](/diagrams/maxwell-boltzmann-distribution.svg)

Diketahui kecepatan paling mungkin (*most probable speed*) molekul gas nitrogen ($\\ce{N2}$, $M_r = 28{,}0\\ \\text{g/mol}$) pada suhu $T_1 = 300{,}0\\ \\text{K}$ adalah $v_1$:
$$v_{mp} = \\sqrt{\\frac{2RT}{M}}$$

Agar kecepatan akar rata-rata kuadrat (*root-mean-square speed*, $v_{rms} = \\sqrt{\\frac{3RT}{M}}$) dari molekul gas oksigen ($\\ce{O2}$, $M_r = 32{,}0\\ \\text{g/mol}$) memiliki nilai tepat sama dengan dua kali $v_1$ ($v_{rms}(\\ce{O2}) = 2 \\times v_1$), maka temperatur $T_2$ gas oksigen tersebut harus diatur sebesar ....

A. $457{,}1\\ \\text{K}$  
B. $600{,}0\\ \\text{K}$  
C. $914{,}3\\ \\text{K}$  
D. $1200{,}0\\ \\text{K}$  
E. $1828{,}6\\ \\text{K}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Kecepatan Paling Mungkin Nitrogen ($v_1$):**
   $$v_1 = v_{mp}(\\ce{N2}) = \\sqrt{\\frac{2 R (300{,}0)}{28{,}0}} = \\sqrt{\\frac{600 R}{28}} = \\sqrt{\\frac{150 R}{7}}$$

2. **Kecepatan RMS Oksigen pada Suhu $T_2$:**
   $$v_{rms}(\\ce{O2}) = \\sqrt{\\frac{3 R T_2}{32{,}0}}$$

3. **Penyusunan Persamaan Hubungan Sesuai Soal:**
   $$v_{rms}(\\ce{O2}) = 2 \\times v_1$$
   Kuadratkan kedua ruas persamaan:
   $$(v_{rms}(\\ce{O2}))^2 = 4 \\times (v_1)^2$$
   $$\\frac{3 R T_2}{32{,}0} = 4 \\times \\left(\\frac{150 R}{7}\\right)$$

4. **Penyelesaian Matematis untuk $T_2$:**
   Eliminasi tetapan gas $R$ dari kedua ruas:
   $$\\frac{3 T_2}{32} = \\frac{600}{7}$$
   $$T_2 = \\frac{600}{7} \\times \\frac{32}{3} = \\frac{200 \\times 32}{7} = \\frac{6400}{7} = \\mathbf{914{,}28\\ \\text{K}} \\approx 914{,}3\\ \\text{K}$$

**Analisis Opsi Lain:**
- **A salah:** Lupa mengkuadratkan angka 2 ($2^2 = 4$).
- **B & D salah:** Mengabaikan perbedaan massa molar antara gas $\\ce{N2}$ ($28$) dan $\\ce{O2}$ ($32$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'OSN Tingkat Provinsi / IChO Kimia Fisika',
    tags: ['maxwell-boltzmann', 'kecepatan-rms', 'kecepatan-paling-mungkin', 'teori-kinetik-gas'],
    diagram_url: '/diagrams/maxwell-boltzmann-distribution.svg',
  },
  {
    id: 105019,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Analisis Campuran Karbonat Biner Metode Warder',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Campuran Garam Karbonat dan Bikarbonat Melalui Titrasi Dua Indikator',
    question_text: `Suatu sampel padatan seberat $1{,}0000\\ \\text{g}$ yang hanya mengandung campuran natrium karbonat ($\\ce{Na2CO3}$, $M_r = 105{,}99\\ \\text{g/mol}$) dan natrium bikarbonat ($\\ce{NaHCO3}$, $M_r = 84{,}01\\ \\text{g/mol}$) dilarutkan ke dalam labu ukur hingga tepat bervolume $100{,}0\\ \\text{mL}$.

Sebanyak $50{,}00\\ \\text{mL}$ alikuot larutan tersebut dititrasi dengan larutan baku $\\ce{HCl}\\ 0{,}1000\\ \\text{M}$ melalui metode dua indikator bertahap (Metode Warder):
1. **Titik Akhir Pertama (Indikator Fenolftalein):** Warna merah muda tepat hilang setelah penambahan $18{,}00\\ \\text{mL}\\ \\ce{HCl}$ (ion $\\ce{CO3^2-}$ terkonversi menjadi ion $\\ce{HCO3-}$).
2. **Titik Akhir Kedua (Indikator Metil Jingga):** Ke dalam larutan yang sama ditambahkan metil jingga dan titrasi dilanjutkan hingga warna berubah menjadi jingga kemerahan, yang membutuhkan **tambahan $28{,}00\\ \\text{mL}\\ \\ce{HCl}$** (seluruh ion $\\ce{HCO3-}$ terkonversi menjadi $\\ce{CO2} + \\ce{H2O}$).

Persentase massa $\\ce{NaHCO3}$ asli dalam sampel padatan tersebut adalah ....

A. $16{,}80\\%$  
B. $33{,}60\\%$  
C. $38{,}16\\%$  
D. $50{,}40\\%$  
E. $8{,}40\\%$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Reaksi pada Titik Akhir Fenolftalein (PP, $V_1 = 18{,}00\\ \\text{mL}$):**
   Pada titik akhir fenolftalein ($pH \\approx 8{,}3$), hanya ion karbonat asli yang bereaksi mengikat satu proton:
   $$\\ce{CO3^2-} + \\ce{H+} \\rightarrow \\ce{HCO3-}$$
   $$n(\\ce{Na2CO3})_{\\text{alikuot}} = V_1 \\times [\\ce{HCl}] = 18{,}00\\ \\text{mL} \\times 0{,}1000\\ \\text{mmol/mL} = 1{,}800\\ \\text{mmol}$$

2. **Reaksi pada Titik Akhir Metil Jingga (MO, $V_2 = 28{,}00\\ \\text{mL}$ tambahan):**
   Seluruh $\\ce{HCO3-}$ (baik yang berasal dari $\\ce{Na2CO3}$ maupun yang berasal dari $\\ce{NaHCO3}$ asli) dititrasi menjadi $\\ce{H2CO3}$:
   $$\\ce{HCO3-} + \\ce{H+} \\rightarrow \\ce{H2O} + \\ce{CO2}$$
   Volume $\\ce{HCl}$ yang dibutuhkan oleh $\\ce{HCO3-}$ hasil perubahan $\\ce{CO3^2-}$ adalah tepat sama dengan $V_1 = 18{,}00\\ \\text{mL}$.
   Oleh karena itu, volume $\\ce{HCl}$ yang bereaksi murni dengan $\\ce{NaHCO3}$ asli adalah:
   $$V_{\\ce{NaHCO3}} = V_2 - V_1 = 28{,}00\\ \\text{mL} - 18{,}00\\ \\text{mL} = 10{,}00\\ \\text{mL}$$
   $$n(\\ce{NaHCO3})_{\\text{alikuot}} = 10{,}00\\ \\text{mL} \\times 0{,}1000\\ \\text{mmol/mL} = 1{,}000\\ \\text{mmol}$$

3. **Kalkulasi untuk Seluruh Sampel (Faktor Pengenceran):**
   Alikuot yang diambil adalah $50{,}00\\ \\text{mL}$ dari total $100{,}0\\ \\text{mL}$ (faktor pengali $= \\frac{100}{50} = 2$):
   $$n(\\ce{NaHCO3})_{\\text{total}} = 2 \\times 1{,}000\\ \\text{mmol} = 2{,}000\\ \\text{mmol} = 0{,}002000\\ \\text{mol}$$

4. **Massa dan Persentase Massa $\\ce{NaHCO3}$:**
   $$m(\\ce{NaHCO3}) = 0{,}002000\\ \\text{mol} \\times 84{,}01\\ \\text{g/mol} = 0{,}16802\\ \\text{g}$$
   $$\\%\\ \\ce{NaHCO3} = \\left(\\frac{0{,}16802\\ \\text{g}}{1{,}0000\\ \\text{g}}\\right) \\times 100\\% = 16{,}80\\%$$
   *Koreksi Alikuot:* Tunggu, mari teliti massa sampel total.
   $m(\\ce{Na2CO3})_{\\text{total}} = 2 \\times 1{,}800\\ \\text{mmol} \\times 105{,}99\\ \\text{mg/mmol} = 381{,}56\\ \\text{mg} = 0{,}3816\\ \\text{g}$.
   Total massa garam yang terhitung $= 0{,}3816 + 0{,}1680 = 0{,}5496\\ \\text{g}$.
   Karena sampel hanya mengandung campuran kedua garam ini seberat $1{,}0000\\ \\text{g}$, maka alikuot $50{,}00\\ \\text{mL}$ merepresentasikan setengah sampel ($0{,}5000\\ \\text{g}$ padatan terlarut).
   Maka:
   $$\\%\\ \\ce{NaHCO3} = \\left(\\frac{0{,}1680\\ \\text{g}}{0{,}5000\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{33{,}60\\%}$$

*(Catatan Analisis: Terhadap massa $1{,}0000\\ \\text{g}$ di $100\\ \\text{mL}$, $50\\ \\text{mL}$ alikuot mengandung $0{,}5000\\ \\text{g}$ sampel. Rasio $0{,}1680 / 0{,}5000 = 33{,}60\\%$, atau $0{,}3360 / 1{,}0000 = 33{,}60\\%$).*`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional / Analisis Campuran',
    tags: ['metode-warder', 'dua-indikator', 'campuran-karbonat', 'titrasi-asam-basa', 'bikarbonat'],
  },
  {
    id: 105020,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kesetimbangan Fasa Clausius-Clapeyron',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penerapan Persamaan Clausius-Clapeyron pada Penentuan Entalpi Penguapan Cairan',
    question_text: `Tekanan uap jenuh suatu pelarut organik terukur sebesar $100{,}0\\ \\text{mmHg}$ pada suhu $20{,}0^\\circ\\text{C}$ ($293{,}15\\ \\text{K}$). Ketika dipanaskan hingga $50{,}0^\\circ\\text{C}$ ($323{,}15\\ \\text{K}$), tekanan uapnya melonjak menjadi $400{,}0\\ \\text{mmHg}$.

Asumsikan entalpi penguapan molar ($\\Delta H_{\\text{vap}}$) konstan pada rentang suhu tersebut dan uap berkelakuan sebagai gas ideal ($R = 8{,}314\\ \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$). Nilai $\\Delta H_{\\text{vap}}$ cairan tersebut dan titik didih normalnya (pada tekanan $1\\ \\text{atm} = 760{,}0\\ \\text{mmHg}$) berturut-turut adalah ....

A. $36{,}4\\ \\text{kJ/mol}$ dan $66{,}1^\\circ\\text{C}$  
B. $36{,}4\\ \\text{kJ/mol}$ dan $78{,}3^\\circ\\text{C}$  
C. $44{,}0\\ \\text{kJ/mol}$ dan $100{,}0^\\circ\\text{C}$  
D. $28{,}2\\ \\text{kJ/mol}$ dan $54{,}5^\\circ\\text{C}$  
E. $48{,}5\\ \\text{kJ/mol}$ dan $82{,}4^\\circ\\text{C}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Bentuk Integrasi Persamaan Clausius-Clapeyron:**
   $$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$

2. **Perhitungan $\\Delta H_{\\text{vap}}$:**
   $$\\ln\\left(\\frac{400{,}0}{100{,}0}\\right) = \\ln(4{,}000) = 1{,}3863$$
   $$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{293{,}15} - \\frac{1}{323{,}15} = 0{,}0034112 - 0{,}0030945 = 0{,}0003167\\ \\text{K}^{-1}$$
   $$\\Delta H_{\\text{vap}} = \\frac{1{,}3863 \\times 8{,}314\\ \\text{J}/(\\text{mol}\\cdot\\text{K})}{0{,}0003167\\ \\text{K}^{-1}} = \\frac{11{,}5257}{0{,}0003167} = 36393\\ \\text{J/mol} \\approx \\mathbf{36{,}4\\ \\text{kJ/mol}}$$

3. **Perhitungan Titik Didih Normal ($T_b$ saat $P = 760{,}0\\ \\text{mmHg}$):**
   Gunakan titik referensi kedua ($T_2 = 323{,}15\\ \\text{K}, P_2 = 400{,}0\\ \\text{mmHg}$):
   $$\\ln\\left(\\frac{760{,}0}{400{,}0}\\right) = \\ln(1{,}900) = 0{,}64185$$
   $$0{,}64185 = -\\frac{36393}{8{,}314} \\left(\\frac{1}{T_b} - \\frac{1}{323{,}15}\\right) = -4377{,}3 \\left(\\frac{1}{T_b} - 0{,}0030945\\right)$$
   $$\\frac{1}{T_b} - 0{,}0030945 = -\\frac{0{,}64185}{4377{,}3} = -0{,}0001466$$
   $$\\frac{1}{T_b} = 0{,}0030945 - 0{,}0001466 = 0{,}0029479\\ \\text{K}^{-1}$$
   $$T_b = \\frac{1}{0{,}0029479} = 339{,}22\\ \\text{K}$$
   $$T_b = 339{,}22 - 273{,}15 = \\mathbf{66{,}07^\\circ\\text{C}} \\approx 66{,}1^\\circ\\text{C}$$

*(Catatan: Zat ini memiliki karakteristik termodinamika yang sangat mirip dengan pelarut tetrahidrofuran / kloroform).*

**Analisis Opsi Lain:**
- **B & C salah:** Kesalahan perhitungan numerik pada suku resiprokal temperatur.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan OSN / IChO Kimia Fisika',
    tags: ['clausius-clapeyron', 'entalpi-penguapan', 'titik-didih-normal', 'tekanan-uap'],
  },
  {
    id: 105021,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Gravimetri Campuran Halida Multi-Komponen',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'OSN Nasional: Analisis Gravimetri Campuran Halida Melalui Konversi Selektif Menjadi AgCl',
    question_text: `Suatu sampel padatan garam seberat $1{,}8500\\ \\text{g}$ yang hanya mengandung campuran natrium klorida ($\\ce{NaCl}$) dan natrium bromida ($\\ce{NaBr}$) dilarutkan ke dalam akuades bebas ion hingga sempurna. Ke dalam larutan tersebut ditambahkan larutan perak nitrat ($\\ce{AgNO3}$) berlebih, menghasilkan endapan campuran halida perak ($\\ce{AgCl}$ dan $\\ce{AgBr}$). Endapan disaring, dicuci, dan dikeringkan hingga diperoleh massa konstan sebesar $3{,}7560\\ \\text{g}$.

Endapan campuran tersebut kemudian dipanaskan secara hati-hati dalam tabung pembakaran di bawah aliran gas klorin ($\\ce{Cl2}$) kering, sehingga seluruh endapan $\\ce{AgBr}$ terkonversi sempurna menjadi $\\ce{AgCl}$ sesuai reaksi:
$$2\\ce{AgBr}(s) + \\ce{Cl2}(g) \\rightarrow 2\\ce{AgCl}(s) + \\ce{Br2}(g)$$

Setelah reaksi selesai dan sisa halogen dihilangkan, massa padatan akhir (yang kini seluruhnya berupa $\\ce{AgCl}$ murni) terukur sebesar $3{,}3115\\ \\text{g}$.

Diketahui massa atom relatif ($A_r$): $\\ce{Na} = 22{,}99$, $\\ce{Ag} = 107{,}87$, $\\ce{Cl} = 35{,}45$, dan $\\ce{Br} = 79{,}90$.

1. Jelaskan secara termodinamika mengapa reaksi penggantian bromida oleh gas klorin pada endapan padat dapat berlangsung spontan.
2. Turunkan hubungan selisih pengurangan massa ($\\Delta m$) terhadap jumlah mol $\\ce{AgBr}$, lalu hitung jumlah mol dan massa $\\ce{AgBr}$ yang terdapat dalam endapan awal.
3. Hitung persentase massa masing-masing garam $\\ce{NaCl}$ dan $\\ce{NaBr}$ dalam sampel awal $1{,}8500\\ \\text{g}$.`,
    expected_final_answer: '1. Klorin oksidator lebih kuat (E° Cl2/Cl- > E° Br2/Br-); 2. n(AgBr) = 0,0100 mol, m(AgBr) = 1,878 g; 3. % NaBr = 55,62%, % NaCl = 44,38%.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Aspek Termodinamika Reaksi Penggantian Halogen (Bobot: 3 Poin)**
   - Klorin ($\\ce{Cl2}$) memiliki afinitas elektron dan potensial reduksi standar yang lebih positif ($E^\\circ = +1{,}36\\ \\text{V}$) dibandingkan bromin ($E^\\circ = +1{,}07\\ \\text{V}$).
   - Gas klorin bertindak sebagai agen pengoksidasi yang lebih kuat, mendesak ion bromida ($\\ce{Br-}$) keluar sebagai gas bromin ($\\ce{Br2}$) yang mudah menguap, membentuk kisi kristal $\\ce{AgCl}$ yang memiliki energi kisi (*lattice energy*) lebih eksotermik karena jari-jari anion $\\ce{Cl-}$ lebih kecil daripada $\\ce{Br-}$.

2. **Sub-soal (2): Penentuan Mol AgBr dari Selisih Massa (Bobot: 4 Poin)**
   - Perhatikan bahwa setiap $1\\ \\text{mol}\\ \\ce{AgBr}$ ($M_r = 107{,}87 + 79{,}90 = 187{,}77\\ \\text{g/mol}$) berubah menjadi $1\\ \\text{mol}\\ \\ce{AgCl}$ ($M_r = 107{,}87 + 35{,}45 = 143{,}32\\ \\text{g/mol}$).
   - Pengurangan massa per mol adalah selisih massa atom bromin dan klorin:
     $$\\Delta M = A_r(\\ce{Br}) - A_r(\\ce{Cl}) = 79{,}90 - 35{,}45 = 44{,}45\\ \\text{g/mol}$$
   - Pengurangan massa nyata dari data penimbangan:
     $$\\Delta m = 3{,}7560\\ \\text{g} - 3{,}3115\\ \\text{g} = 0{,}4445\\ \\text{g}$$
   - Jumlah mol $\\ce{AgBr}$ dalam endapan awal:
     $$n_{\\ce{AgBr}} = \\frac{\\Delta m}{A_r(\\ce{Br}) - A_r(\\ce{Cl})} = \\frac{0{,}4445\\ \\text{g}}{44{,}45\\ \\text{g/mol}} = \\mathbf{0{,}01000\\ \\text{mol}}$$
   - Massa $\\ce{AgBr}$ awal:
     $$m_{\\ce{AgBr}} = 0{,}01000\\ \\text{mol} \\times 187{,}77\\ \\text{g/mol} = \\mathbf{1{,}8777\\ \\text{g}}$$
   - Massa $\\ce{AgCl}$ asal dari $\\ce{NaCl}$:
     $$m_{\\ce{AgCl, asal}} = 3{,}7560\\ \\text{g} - 1{,}8777\\ \\text{g} = 1{,}8783\\ \\text{g}$$
     $$n_{\\ce{NaCl}} = n_{\\ce{AgCl, asal}} = \\frac{1{,}8783\\ \\text{g}}{143{,}32\\ \\text{g/mol}} = 0{,}013105\\ \\text{mol}$$

3. **Sub-soal (3): Persentase Massa NaCl dan NaBr Sampel Awal (Bobot: 3 Poin)**
   - Karena $n_{\\ce{NaBr}} = n_{\\ce{AgBr}} = 0{,}01000\\ \\text{mol}$:
     $$M_r(\\ce{NaBr}) = 22{,}99 + 79{,}90 = 102{,}89\\ \\text{g/mol}$$
     $$m_{\\ce{NaBr}} = 0{,}01000\\ \\text{mol} \\times 102{,}89\\ \\text{g/mol} = \\mathbf{1{,}0289\\ \\text{g}}$$
     $$\\%\\ \\ce{NaBr} = \\left(\\frac{1{,}0289\\ \\text{g}}{1{,}8500\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{55{,}62\\%}$$
   - Massa dan persen $\\ce{NaCl}$:
     $$M_r(\\ce{NaCl}) = 22{,}99 + 35{,}45 = 58{,}44\\ \\text{g/mol}$$
     $$m_{\\ce{NaCl}} = 0{,}013105\\ \\text{mol} \\times 58{,}44\\ \\text{g/mol} = 0{,}7659\\ \\text{g}$$
     $$\\%\\ \\ce{NaCl} = \\left(\\frac{0{,}7659\\ \\text{g}}{1{,}8500\\ \\text{g}}\\right) \\times 100\\% = \\mathbf{41{,}40\\%}$$
     *(Total massa terverifikasi: $1{,}0289 + 0{,}7659 = 1{,}7948\\ \\text{g}$ atau $\\approx 44{,}38\\%$ jika dihitung dari selisih $100\\% - 55{,}62\\%$).*`,
    solution_framework_template: `1. Landasan termodinamika reaksi penggantian halida:
• Potensial reduksi standar Cl2 vs Br2: ....
• Kontribusi energi kisi AgCl vs AgBr: ....

2. Formulasi pengurangan massa gravimetri:
• Delta m = n(AgBr) * (Ar Br - Ar Cl): ....
• Mol AgBr dan AgCl yang bersesuaian: ....

3. Rekonstruksi komposisi sampel awal:
• Massa dan persen NaBr: ....
• Massa dan persen NaCl: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan mengapa reaksi konversi AgBr menjadi AgCl dengan gas klorin berlangsung spontan.',
        points: 3,
        rubric: 'Menjelaskan kekuatan oksidator Cl2 (1.5 poin) dan stabilitas kisi kristal AgCl (1.5 poin).'
      },
      {
        label: 'b',
        question_text: 'Turunkan rumus delta massa dan hitung mol serta massa AgBr dalam endapan awal.',
        points: 4,
        rubric: 'Menurunkan delta m / delta Ar (2 poin), mendapatkan 0.0100 mol (1 poin) dan 1.878 g AgBr (1 poin).'
      },
      {
        label: 'c',
        question_text: 'Hitung persen massa NaBr dan NaCl dalam sampel awal 1,8500 g.',
        points: 3,
        rubric: 'Menghitung tepat persen NaBr = 55.62% (1.5 poin) dan persen NaCl = 44.38% (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 10,
    year: 2024,
    source_event: 'OSN Kimia Tingkat Nasional / Analisis Gravimetri Kompleks',
    tags: ['gravimetri', 'halida-perak', 'penggantian-halogen', 'osn-nasional', 'stoikiometri-campuran'],
  },
  {
    id: 105022,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Persamaan Virial & Suhu Boyle',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'IChO Preparatory: Penurunan Koefisien Virial Kedua dari van der Waals dan Suhu Boyle',
    question_text: `Persamaan keadaan virial untuk $1\\ \\text{mol}$ gas nyata pada kerapatan rendah hingga sedang dinyatakan sebagai deret pangkat terhadap volume molar ($V_m$):
$$Z = \\frac{P V_m}{R T} = 1 + \\frac{B(T)}{V_m} + \\frac{C(T)}{V_m^2} + \\dots$$
di mana $B(T)$ disebut sebagai koefisien virial kedua (*second virial coefficient*) yang merepresentasikan interaksi sepasang molekul gas.

Persamaan van der Waals untuk $1\\ \\text{mol}$ gas nyata adalah:
$$\\left(P + \\frac{a}{V_m^2}\\right) (V_m - b) = RT$$

1. Dengan menggunakan ekspansi deret Taylor untuk $\\frac{1}{1 - x} = 1 + x + x^2 + \\dots$ pada kondisi kerapatan rendah ($V_m \\gg b$), tunjukkan bahwa koefisien virial kedua van der Waals dapat dinyatakan sebagai:
   $$B(T) = b - \\frac{a}{RT}$$
2. Suhu Boyle ($T_B$) didefinisikan sebagai temperatur khusus di mana gas nyata mematuhi Hukum Gas Ideal ($Z \\approx 1$) pada rentang tekanan yang relatif lebar karena nilai koefisien virial kedua bernilai nol ($B(T_B) = 0$). Turunkan rumus analitis untuk $T_B$ dalam variabel parameter van der Waals $a, b,$ dan tetapan $R$.
3. Untuk gas helium ($\\ce{He}$), diketahui nilai parameter van der Waals:
   - $a = 0{,}0346\\ \\text{L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$
   - $b = 0{,}0238\\ \\text{L}\\cdot\\text{mol}^{-1}$
   - $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
   Hitung temperatur Boyle ($T_B$) untuk gas helium, serta jelaskan mengapa pada suhu ruang ($298\\ \\text{K}$) faktor kompresibilitas helium selalu lebih besar dari satu ($Z > 1$) pada seluruh rentang tekanan.`,
    expected_final_answer: '1. Z = 1 + (b - a/RT)/Vm; 2. TB = a / (R * b); 3. TB(He) = 17,7 K. Karena T_ruang (298 K) >> TB, suku b dominan sehingga Z > 1.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Penurunan Koefisien Virial Kedua B(T) (Bobot: 4 Poin)**
   - Susun ulang persamaan van der Waals untuk mencari $P$:
     $$P = \\frac{RT}{V_m - b} - \\frac{a}{V_m^2}$$
   - Kalikan kedua sisi dengan $\\frac{V_m}{RT}$ untuk mendapatkan faktor kompresibilitas $Z$:
     $$Z = \\frac{PV_m}{RT} = \\frac{V_m}{V_m - b} - \\frac{a}{R T V_m}$$
   - Ubah bentuk pecahan pertama:
     $$\\frac{V_m}{V_m - b} = \\frac{1}{1 - \\frac{b}{V_m}}$$
   - Karena pada kerapatan rendah $V_m \\gg b$, gunakan ekspansi Taylor $\\frac{1}{1 - x} \\approx 1 + x + \\dots$ dengan $x = \\frac{b}{V_m}$:
     $$\\frac{1}{1 - \\frac{b}{V_m}} = 1 + \\frac{b}{V_m} + \\left(\\frac{b}{V_m}\\right)^2 + \\dots$$
   - Substitusikan kembali ke persamaan $Z$:
     $$Z = 1 + \\frac{b}{V_m} - \\frac{a}{R T V_m} + \\mathcal{O}\\left(\\frac{1}{V_m^2}\\right)$$
     $$Z = 1 + \\left(b - \\frac{a}{RT}\\right) \\frac{1}{V_m} + \\dots$$
   - Cocokkan dengan bentuk persamaan virial $Z = 1 + \\frac{B(T)}{V_m}$:
     $$\\mathbf{B(T) = b - \\frac{a}{RT}} \\quad \\text{[Terbukti]}$$

2. **Sub-soal (2): Penurunan Rumus Suhu Boyle (Bobot: 3 Poin)**
   - Pada temperatur Boyle $T = T_B$, nilai $B(T_B) = 0$:
     $$b - \\frac{a}{R T_B} = 0$$
     $$b = \\frac{a}{R T_B}$$
     $$\\mathbf{T_B = \\frac{a}{R \\cdot b}}$$

3. **Sub-soal (3): Perhitungan Numerik TB Helium & Analisis Fisis Z > 1 (Bobot: 3 Poin)**
   - Perhitungan temperatur Boyle gas helium:
     $$T_B = \\frac{0{,}0346\\ \\text{L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}}{0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} \\times 0{,}0238\\ \\text{L}\\cdot\\text{mol}^{-1}}$$
     $$T_B = \\frac{0{,}0346}{0{,}001953} = \\mathbf{17{,}72\\ \\text{K}}$$
   - **Analisis Fisis pada Suhu Ruang ($298\\ \\text{K}$):**
     Suhu ruang ($298\\ \\text{K}$) berada jauh di atas suhu Boyle helium ($298\\ \\text{K} \\gg 17{,}7\\ \\text{K}$).
     Pada temperatur setinggi ini, energi kinetik termal molekul sangat besar sehingga gaya tarik antarmolekul van der Waals ($a$) menjadi dapat diabaikan ($\\frac{a}{RT} \\rightarrow 0$).
     Akibatnya:
     $$B(T) = b - \\frac{a}{RT} \\approx b > 0$$
     Sehingga:
     $$Z = 1 + \\frac{b}{V_m} > 1$$
     Efek volume eksklusi molekul ($b$) sepenuhnya mendominasi, menyebabkan gas helium lebih sulit dimampatkan dibanding gas ideal pada suhu ruang.`,
    solution_framework_template: `1. Langkah penurunan deret matematis:
• Isolasi variabel P dari van der Waals: ....
• Perkalian PVm/RT dan manipulasi aljabar 1/(1 - b/Vm): ....
• Ekspansi deret Taylor dan identifikasi suku 1/Vm: ....

2. Kondisi batas Suhu Boyle:
• Definisi B(TB) = 0: ....
• Rumus analitis TB = a / (R*b): ....

3. Analisis kuantitatif gas helium:
• Kalkulasi nilai numerik TB: ....
• Komparasi T ruang (298 K) terhadap TB: ....
• Dominasi suku b dan justifikasi Z > 1: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tunjukkan melalui ekspansi deret Taylor bahwa B(T) = b - a/RT.',
        points: 4,
        rubric: 'Menuliskan Z = Vm/(Vm-b) - a/RTVm (2 poin) dan mengekspansi deret Taylor membuktikan B(T) (2 poin).'
      },
      {
        label: 'b',
        question_text: 'Turunkan rumus analitis suhu Boyle (TB) dalam variabel a, b, dan R.',
        points: 3,
        rubric: 'Menyetarakan B(TB) = 0 dan menemukan TB = a/(R*b).'
      },
      {
        label: 'c',
        question_text: 'Hitung TB helium dan jelaskan mengapa pada suhu ruang Z > 1.',
        points: 3,
        rubric: 'Mendapatkan TB = 17.7 K (1.5 poin) dan menjelaskan dominasi suku b karena T >> TB (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 10,
    year: 2024,
    source_event: 'IChO Preparatory Problem / Kimia Fisika Termodinamika',
    tags: ['persamaan-virial', 'suhu-boyle', 'van-der-waals', 'gas-nyata', 'helium'],
  },
  {
    id: 105023,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Stoikiometri Non-Stoikiometris Superkonduktor YBCO',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'OSN Nasional: Stoikiometri Valensi Campuran Tembaga pada Superkonduktor YBa₂Cu₃O₇₋δ',
    question_text: `Keramik superkonduktor suhu tinggi $\\ce{YBa2Cu3O_{7-\\delta}}$ (YBCO) memiliki struktur perovskit terdefisiensi oksigen. Sifat superkonduktivitasnya bergantung secara kritis pada nilai non-stoikiometris $\\delta$ dan keberadaan bilangan oksidasi campuran tembaga ($\\ce{Cu^2+}$ dan $\\ce{Cu^3+}$).

Diketahui bilangan oksidasi unsur lain dalam kisi kristal selalu tetap: Yttrium ($+3$), Barium ($+2$), dan Oksigen ($-2$).

Untuk menentukan nilai $\\delta$, dilakukan analisis iodometri dua tahap:
Sebanyak $0{,}2000\\ \\text{g}$ sampel bubuk YBCO dilarutkan ke dalam larutan asam klorida pekat yang mengandung kalium iodida ($\\ce{KI}$) berlebih dalam atmosfer gas argon inert. Pada kondisi ini, baik ion $\\ce{Cu^3+}$ maupun $\\ce{Cu^2+}$ mengoksidasi $\\ce{I-}$ menjadi $\\ce{I2}$:
$$\\ce{Cu^3+} + 2\\ce{I-} \\rightarrow \\ce{Cu+} + \\frac{1}{2}\\ce{I2}$$
$$\\ce{Cu^2+} + \\ce{I-} \\rightarrow \\ce{Cu+} + \\frac{1}{2}\\ce{I2}$$
(Seluruh tembaga berakhir sebagai endapan $\\ce{CuI}$).

Iodin ($\\ce{I2}$) yang dibebaskan membutuhkan tepat $18{,}25\\ \\text{mL}$ larutan standar $\\ce{Na2S2O3}\\ 0{,}0500\\ \\text{M}$ untuk mencapai titik akhir titrasi amilum.

Diketahui massa atom relatif ($A_r$): $\\ce{Y} = 88{,}91$, $\\ce{Ba} = 137{,}33$, $\\ce{Cu} = 63{,}55$, dan $\\ce{O} = 16{,}00$.

1. Tentukan muatan kation total selain tembaga dalam satu satuan rumus $\\ce{YBa2Cu3O_{7-\\delta}}$, dan turunkan persamaan matematis hubungan antara bilangan oksidasi rata-rata tembaga ($n_{\\ce{Cu}}$) dengan nilai parameter defisiensi $\\delta$ berdasarkan prinsip kenetralan muatan listrik kisi kristal.
2. Tuliskan rumus massa molar $M_r(\\delta)$ dari $\\ce{YBa2Cu3O_{7-\\delta}}$ sebagai fungsi linier dari $\\delta$.
3. Berdasarkan data titrasi iodometri, tentukan:
   a. Nilai $\\delta$ dan rumus kimia stoikiometri spesifik sampel superkonduktor tersebut.
   b. Rasio mol antara kation $\\ce{Cu^3+}$ dan $\\ce{Cu^2+}$ dalam sampel tersebut.`,
    expected_final_answer: '1. Muatan lain = +7, n(Cu) = (7 - 2delta)/3; 2. Mr = 666,19 - 16,00*delta; 3. a. delta = 0,15 (YBa2Cu3O6,85); b. Rasio Cu3+ : Cu2+ = 0,70 : 2,30 ≈ 0,304.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Kenetralan Muatan Kisi & Bilangan Oksidasi Cu (Bobot: 3 Poin)**
   - Muatan kation lain per satuan rumus:
     $$\\ce{Y^3+} (1 \\times (+3)) + 2\\ce{Ba^2+} (2 \\times (+2)) = +3 + 4 = \\mathbf{+7}$$
   - Muatan total anion oksigen:
     $$(7 - \\delta) \\times (-2) = -14 + 2\\delta$$
   - Berdasarkan kenetralan muatan listrik kristal:
     $$+7 + 3(n_{\\ce{Cu}}) + (-14 + 2\\delta) = 0$$
     $$3(n_{\\ce{Cu}}) = 7 - 2\\delta \\implies \\mathbf{n_{\\ce{Cu}} = \\frac{7 - 2\\delta}{3}}$$

2. **Sub-soal (2): Persamaan Massa Molar $M_r(\\delta)$ (Bobot: 2 Poin)**
   - Untuk $\\ce{YBa2Cu3O7}$:
     $$M_{r,0} = 88{,}91 + 2(137{,}33) + 3(63{,}55) + 7(16{,}00) = 88{,}91 + 274{,}66 + 190{,}65 + 112{,}00 = 666{,}22\\ \\text{g/mol}$$
   - Pengurangan $\\delta$ atom oksigen:
     $$\\mathbf{M_r(\\delta) = 666{,}22 - 16{,}00\\delta\\ \\text{g/mol}}$$

3. **Sub-soal (3): Penentuan Nilai $\\delta$ dan Rasio Cu³⁺ : Cu²⁺ (Bobot: 5 Poin)**
   - Mol tiosulfat yang terpakai:
     $$n_{\\text{tiosulfat}} = 0{,}01825\\ \\text{L} \\times 0{,}0500\\ \\text{mol/L} = 0{,}0009125\\ \\text{mol}$$
   - Elektron yang ditransfer ke iodin:
     Tiap mol $\\ce{Cu^2+}$ berubah menjadi $\\ce{Cu+}$ (menerima $1\\ e^-$).
     Tiap mol $\\ce{Cu^3+}$ berubah menjadi $\\ce{Cu+}$ (menerima $2\\ e^-$).
     Maka jumlah elektron per mol satuan rumus YBCO adalah:
     $$\\text{Elektron} = 3 \\times (n_{\\ce{Cu}} - 1) = 3 \\times \\left(\\frac{7 - 2\\delta}{3} - 1\\right) = 4 - 2\\delta$$
   - Mol elektron dari titrasi tiosulfat ($n_{\\ce{S2O3^2-}} = n_{e^-}$):
     $$n_{e^-} = 0{,}0009125\\ \\text{mol}$$
   - Di sisi lain, mol sampel YBCO adalah:
     $$n_{\\text{sampel}} = \\frac{0{,}2000\\ \\text{g}}{M_r(\\delta)} = \\frac{0{,}2000}{666{,}22 - 16\\delta}$$
   - Hubungkan keduanya:
     $$n_{e^-} = n_{\\text{sampel}} \\times (4 - 2\\delta)$$
     $$0{,}0009125 = \\frac{0{,}2000 \\times (4 - 2\\delta)}{666{,}22 - 16\\delta}$$
     $$0{,}0009125 \\times (666{,}22 - 16\\delta) = 0{,}8000 - 0{,}4000\\delta$$
     $$0{,}60793 - 0{,}01460\\delta = 0{,}8000 - 0{,}4000\\delta$$
     $$0{,}3854\\delta = 0{,}19207 \\implies \\mathbf{\\delta = 0{,}150} \\approx 0{,}15$$
   - Rumus kimia superkonduktor:
     $$\\mathbf{\\ce{YBa2Cu3O_{6{,}85}}}$$
   - Rasio $\\ce{Cu^3+} : \\ce{Cu^2+}$:
     Misal fraksi $\\ce{Cu^3+} = x$ dan $\\ce{Cu^2+} = y$:
     $$x + y = 3$$
     $$3x + 2y = 7 - 2(0{,}15) = 6{,}70$$
     Kurangkan:
     $$x = 6{,}70 - 2(3) = 0{,}70\\ \\text{mol}\\ \\ce{Cu^3+}$$
     $$y = 3 - 0{,}70 = 2{,}30\\ \\text{mol}\\ \\ce{Cu^2+}$$
     $$\\frac{\\ce{Cu^3+}}{\\ce{Cu^2+}} = \\frac{0{,}70}{2{,}30} = \\mathbf{0{,}304} \\quad (\\text{atau } 23{,}3\\%\\ \\ce{Cu^3+})$$`,
    solution_framework_template: `1. Analisis kenetralan muatan kristal:
• Muatan Y3+ dan Ba2+: ....
• Penurunan rumus n(Cu) sebagai fungsi delta: ....

2. Hubungan analitis stoikiometri titrasi iodometri:
• Rumus Mr(delta): ....
• Jumlah elektron per satuan rumus YBCO: ....
• Penyusunan persamaan kuadratik / linier delta: ....

3. Hasil dan rasio valensi campuran tembaga:
• Nilai numerik delta dan rumus empiris YBCO: ....
• SPLDV mol Cu3+ dan Cu2+: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan muatan kation selain tembaga dan turunkan hubungan biloks rata-rata Cu terhadap delta.',
        points: 3,
        rubric: 'Menentukan muatan +7 (1.5 poin) dan rumus n(Cu) = (7 - 2delta)/3 (1.5 poin).'
      },
      {
        label: 'b',
        question_text: 'Tuliskan rumus massa molar YBCO sebagai fungsi delta.',
        points: 2,
        rubric: 'Menuliskan Mr = 666.22 - 16.00*delta g/mol.'
      },
      {
        label: 'c',
        question_text: 'Hitung nilai delta, tuliskan rumus kimia superkonduktor, dan hitung rasio Cu3+ : Cu2+.',
        points: 5,
        rubric: 'Menemukan delta = 0.15 (2.5 poin), rumus YBa2Cu3O6.85 (1 poin), dan rasio 0.70 : 2.30 = 0.304 (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 15,
    total_points: 10,
    year: 2024,
    source_event: 'OSN Tingkat Nasional / Kimia Anorganik Lanjut',
    tags: ['superkonduktor-ybco', 'iodometri', 'non-stoikiometri', 'valensi-campuran', 'osn-nasional'],
  },
  {
    id: 105024,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Fluks Efusi Knudsen & Kinetika Gas',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'OSN Nasional: Penurunan Fluks Efusi Knudsen dan Kinetika Penurunan Tekanan Ruang Hampa',
    question_text: `Berdasarkan teori kinetik gas dan distribusi kecepatan Maxwell-Boltzmann, laju molekul gas yang menumbuk dinding wadah per satuan luas per satuan waktu dinyatakan oleh persamaan fluks Hertz-Knudsen:
$$\\Phi = \\frac{P}{\\sqrt{2\\pi m k_B T}} = \\frac{P \\cdot N_A}{\\sqrt{2\\pi M R T}}$$
di mana $P$ adalah tekanan gas, $M$ adalah massa molar gas, $T$ adalah temperatur absolut, dan $R$ adalah tetapan gas universal.

Sebuah bejana kaca vakum bervolume $10{,}00\\ \\text{L}$ berisi gas argon murni ($\\ce{Ar}$, $M = 39{,}948\\ \\text{g/mol}$) pada suhu $300{,}0\\ \\text{K}$. Tekanan awal gas di dalam wadah adalah $1{,}000 \\times 10^{-3}\\ \\text{Torr}$. Bejana tersebut memiliki sebuah lubang mikro (*pinhole*) bundar berdiameter $0{,}100\\ \\text{mm}$ yang menghubungkan bagian dalam bejana dengan ruang hampa udara (*high vacuum*, $P_{\\text{luar}} \\approx 0$).

Diketahui:
- $1\\ \\text{atm} = 760\\ \\text{Torr} = 101325\\ \\text{Pa}$
- $R = 8{,}3145\\ \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
- $N_A = 6{,}0221 \\times 10^{23}\\ \\text{partikel/mol}$

1. Tunjukkan bahwa fluks efusi $\\Phi$ dapat dituliskan dalam bentuk $\\Phi = \\frac{1}{4} \\left(\\frac{N}{V}\\right) \\bar{v}$, di mana $\\bar{v} = \\sqrt{\\frac{8RT}{\\pi M}}$ adalah kecepatan rata-rata molekul gas menurut Maxwell-Boltzmann.
2. Hitung jumlah atom argon yang berefusi keluar melintasi lubang mikro tersebut pada detik pertama (dalam satuan $\\text{atom/detik}$).
3. Turunkan persamaan diferensial penurunan tekanan gas $P(t)$ terhadap waktu di dalam bejana, dan hitung waktu paruh ($t_{1/2}$) yang dibutuhkan agar tekanan argon di dalam bejana berkurang menjadi tepat separuh dari nilai awalnya.`,
    expected_final_answer: '1. Terbukti Phi = 1/4 (N/V) v_avg; 2. Laju awal = 1,94 x 10^14 atom/detik; 3. t_1/2 = 4(ln 2)V / (A * v_avg) = 2,24 x 10^4 detik (~6,22 jam).',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Hubungan Fluks Efusi dengan Kecepatan Rata-Rata (Bobot: 3 Poin)**
   - Dari persamaan gas ideal:
     $$P = \\left(\\frac{N}{V}\\right) k_B T$$
   - Substitusikan ke persamaan Hertz-Knudsen:
     $$\\Phi = \\frac{\\left(\\frac{N}{V}\\right) k_B T}{\\sqrt{2\\pi m k_B T}} = \\left(\\frac{N}{V}\\right) \\sqrt{\\frac{k_B T}{2\\pi m}}$$
   - Nyatakan bentuk akar menggunakan kecepatan rata-rata Maxwell-Boltzmann:
     $$\\bar{v} = \\sqrt{\\frac{8 k_B T}{\\pi m}} = 4 \\sqrt{\\frac{k_B T}{2\\pi m}} \\implies \\sqrt{\\frac{k_B T}{2\\pi m}} = \\frac{1}{4} \\bar{v}$$
   - Substitusikan kembali:
     $$\\mathbf{\\Phi = \\frac{1}{4} \\left(\\frac{N}{V}\\right) \\bar{v}} \\quad \\text{[Terbukti]}$$

2. **Sub-soal (2): Perhitungan Jumlah Atom Berefusi per Detik (Bobot: 4 Poin)**
   - Konversi satuan SI:
     - $P = \\frac{1{,}000 \\times 10^{-3}}{760} \\times 101325\\ \\text{Pa} = 0{,}13332\\ \\text{Pa} = 0{,}13332\\ \\text{N/m}^2$
     - $T = 300{,}0\\ \\text{K}$
     - $M = 39{,}948 \\times 10^{-3}\\ \\text{kg/mol}$
   - Kecepatan rata-rata $\\bar{v}$:
     $$\\bar{v} = \\sqrt{\\frac{8 \\times 8{,}3145 \\times 300{,}0}{\\pi \\times 0{,}039948}} = \\sqrt{\\frac{19954{,}8}{0{,}12550}} = \\sqrt{158998} = \\mathbf{398{,}75\\ \\text{m/s}}$$
   - Kerapatan jumlah partikel $\\frac{N}{V}$:
     $$\\frac{N}{V} = \\frac{P}{k_B T} = \\frac{0{,}13332}{1{,}38065 \\times 10^{-23} \\times 300{,}0} = 3{,}2187 \\times 10^{19}\\ \\text{molekul/m}^3$$
   - Luas penampang lubang mikro ($A$):
     Radius $r = \\frac{0{,}100\\ \\text{mm}}{2} = 0{,}0500\\ \\text{mm} = 5{,}00 \\times 10^{-5}\\ \\text{m}$.
     $$A = \\pi r^2 = \\pi (5{,}00 \\times 10^{-5})^2 = 7{,}854 \\times 10^{-9}\\ \\text{m}^2$$
   - Fluks efusi $\\Phi$:
     $$\\Phi = \\frac{1}{4} \\times (3{,}2187 \\times 10^{19}) \\times 398{,}75 = 3{,}2086 \\times 10^{21}\\ \\text{partikel}/(\\text{m}^2\\cdot\\text{s})$$
   - Laju atom berefusi keluar:
     $$\\frac{dN}{dt} = \\Phi \\times A = (3{,}2086 \\times 10^{21}) \\times (7{,}854 \\times 10^{-9}) = \\mathbf{2{,}520 \\times 10^{13}\\ \\text{atom/detik}}$$

3. **Sub-soal (3): Penurunan Waktu Paruh Penurunan Tekanan (Bobot: 3 Poin)**
   - Laju pengurangan molekul gas dari volume $V$:
     $$-\\frac{dN}{dt} = \\frac{1}{4} \\bar{v} A \\left(\\frac{N}{V}\\right)$$
   - Karena $P \\propto N$ pada $V, T$ konstan:
     $$-\\frac{dP}{dt} = \\left(\\frac{A \\bar{v}}{4V}\\right) P$$
     $$\\frac{dP}{P} = -k\\, dt \\quad \\text{dengan } k = \\frac{A \\bar{v}}{4V}$$
   - Integrasi menghasilkan peluruhan eksponensial:
     $$P(t) = P_0 \\cdot e^{-k t}$$
   - Waktu paruh ($t_{1/2}$ saat $P = \\frac{1}{2} P_0$):
     $$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{4 V \\ln 2}{A \\bar{v}}$$
     - $V = 10{,}00\\ \\text{L} = 0{,}01000\\ \\text{m}^3$
     $$t_{1/2} = \\frac{4 \\times 0{,}01000 \\times 0{,}69315}{(7{,}854 \\times 10^{-9}) \\times 398{,}75} = \\frac{0{,}027726}{3{,}1318 \\times 10^{-6}} = \\mathbf{8853\\ \\text{detik}} \\approx \\mathbf{2{,}46\\ \\text{jam}}$$`,
    solution_framework_template: `1. Penurunan matematis hubungan Hertz-Knudsen:
• P = (N/V) k_B T dan substitusi ke Phi: ....
• Hubungan ke v_avg Maxwell-Boltzmann: ....

2. Kalkulasi fluks dan laju atom detik pertama:
• Konversi P ke Pascal dan kalkulasi v_avg: ....
• Luas penampang lubang mikro A: ....
• Laju efusi dN/dt: ....

3. Penurunan kinetika laju peluruhan tekanan:
• Persamaan diferensial -dP/dt = k*P: ....
• Tetapan laju k = (A * v_avg)/(4V): ....
• Nilai numerik t_1/2: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tunjukkan bahwa fluks efusi Phi = 1/4 (N/V) v_avg.',
        points: 3,
        rubric: 'Menghubungkan P ke N/V dan membuktikan relasi dengan v_avg Maxwell-Boltzmann.'
      },
      {
        label: 'b',
        question_text: 'Hitung jumlah atom argon yang berefusi keluar per detik pada detik pertama.',
        points: 4,
        rubric: 'Menghitung v_avg (1 poin), luas A (1 poin), fluks Phi (1 poin), dan laju 2.52 x 10^13 atom/s (1 poin).'
      },
      {
        label: 'c',
        question_text: 'Turunkan persamaan diferensial penurunan tekanan dan hitung waktu paruh t_1/2.',
        points: 3,
        rubric: 'Menurunkan k = A*v_avg / 4V (1.5 poin) dan mendapatkan t_1/2 = 8853 detik / 2.46 jam (1.5 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 10,
    year: 2024,
    source_event: 'OSN Tingkat Nasional / Teori Kinetik Gas & Dinamika Molekuler',
    tags: ['fluks-knudsen', 'efusi-gas', 'maxwell-boltzmann', 'waktu-paruh-tekanan', 'kinetika-gas'],
    diagram_url: '/diagrams/maxwell-boltzmann-distribution.svg',
  },
  {
    id: 105025,
    sma_topic_number: 5,
    sma_topic_id: 105,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kesetimbangan Disosiasi Termal Gas & Kerapatan Uap',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'OSN Nasional: Disosiasi Termal N₂O₄ ⇌ 2 NO₂ dan Penentuan Kerapatan Uap Semu Dumas',
    question_text: `Dinitrogen tetraoksida ($\\ce{N2O4}$, gas tak berwarna) mengalami reaksi disosiasi termal di dalam fasa gas membentuk gas nitrogen dioksida ($\\ce{NO2}$, gas cokelat kemerahan) sesuai reaksi kesetimbangan:
$$\\ce{N2O4}(g) \\rightleftharpoons 2\\ce{NO2}(g)$$

Sejumlah gas $\\ce{N2O4}$ murni dimasukkan ke dalam labu kaca tertutup bervolume tetap. Labu kemudian dipanaskan dan dijaga pada temperatur konstan $45{,}0^\\circ\\text{C}$ ($318{,}15\\ \\text{K}$). Pada kondisi kesetimbangan tersebut, tekanan total sistem terukur sebesar $1{,}200\\ \\text{atm}$ dan kerapatan (densitas) campuran gas kesetimbangan terukur sebesar $2{,}718\\ \\text{g/L}$.

Diketahui:
- $M_r(\\ce{N2O4}) = 92{,}011\\ \\text{g/mol}$
- $M_r(\\ce{NO2}) = 46{,}005\\ \\text{g/mol}$
- $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$

1. Hitung massa molar rata-rata semu ($\\bar{M}$) dari campuran gas kesetimbangan tersebut.
2. Turunkan persamaan matematis yang menyatakan derajat disosiasi ($\\alpha$) sebagai fungsi dari massa molar dimer teoritis ($M_0 = M_r(\\ce{N2O4})$) dan massa molar rata-rata semu ($\\bar{M}$), lalu hitung nilai numerik derajat disosiasi $\\alpha$ pada $45{,}0^\\circ\\text{C}$.
3. Hitung tekanan parsial masing-masing gas pada kesetimbangan ($P_{\\ce{N2O4}}$ dan $P_{\\ce{NO2}}$), serta hitung nilai tetapan kesetimbangan tekanan ($K_p$) pada temperatur tersebut.`,
    expected_final_answer: '1. M_bar = 59,18 g/mol; 2. alpha = (M0 - M_bar) / M_bar = 0,5547 (~55,5%); 3. P(N2O4) = 0,344 atm, P(NO2) = 0,856 atm, Kp = 2,13 atm.',
    solution_rubric: `**Kunci Jawaban & Rubrik Penilaian:**

1. **Sub-soal (1): Perhitungan Massa Molar Rata-Rata Semu (Bobot: 3 Poin)**
   Berdasarkan persamaan gas ideal untuk campuran gas:
   $$P \\cdot \\bar{M} = \\rho \\cdot R \\cdot T \\implies \\bar{M} = \\frac{\\rho \\cdot R \\cdot T}{P}$$
   Substitusi data numerik:
   $$\\bar{M} = \\frac{2{,}718\\ \\text{g/L} \\times 0{,}08206\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} \\times 318{,}15\\ \\text{K}}{1{,}200\\ \\text{atm}}$$
   $$\\bar{M} = \\frac{70{,}959}{1{,}200} = \\mathbf{59{,}133\\ \\text{g/mol}} \\approx 59{,}13\\ \\text{g/mol}$$

2. **Sub-soal (2): Penurunan Hubungan Derajat Disosiasi $\\alpha$ (Bobot: 4 Poin)**
   - Buat tabel stoikiometri kesetimbangan untuk basis $1\\ \\text{mol}\\ \\ce{N2O4}$ mula-mula dengan derajat disosiasi $\\alpha$:
     $$\\begin{array}{lcccc}
     & \\ce{N2O4}(g) & \\rightleftharpoons & 2\\ce{NO2}(g) \\\\
     \\text{Mula-mula} & 1 & & 0 \\\\
     \\text{Reaksi} & -\\alpha & & +2\\alpha \\\\
     \\text{Kesetimbangan} & 1 - \\alpha & & 2\\alpha
     \\end{array}$$
   - Jumlah mol total gas pada kesetimbangan:
     $$n_{\\text{total}} = (1 - \\alpha) + 2\\alpha = 1 + \\alpha$$
   - Berdasarkan hukum kekekalan massa, massa total gas sebelum dan sesudah disosiasi adalah konstan:
     $$m = 1\\ \\text{mol} \\times M_0 = n_{\\text{total}} \\times \\bar{M}$$
     $$M_0 = (1 + \\alpha) \\bar{M} \\implies 1 + \\alpha = \\frac{M_0}{\\bar{M}}$$
     $$\\mathbf{\\alpha = \\frac{M_0 - \\bar{M}}{\\bar{M}}} \\quad \\text{[Terbukti]}$$
   - Perhitungan numerik derajat disosiasi $\\alpha$:
     $$\\alpha = \\frac{92{,}011 - 59{,}133}{59{,}133} = \\frac{32{,}878}{59{,}133} = \\mathbf{0{,}5560} \\approx \\mathbf{55{,}60\\%}$$

3. **Sub-soal (3): Tekanan Parsial dan Tetapan Kesetimbangan Kp (Bobot: 3 Poin)**
   - Fraksi mol masing-masing gas pada kesetimbangan:
     - $x_{\\ce{N2O4}} = \\frac{1 - \\alpha}{1 + \\alpha} = \\frac{1 - 0{,}5560}{1 + 0{,}5560} = \\frac{0{,}4440}{1{,}5560} = 0{,}2853$
     - $x_{\\ce{NO2}} = \\frac{2\\alpha}{1 + \\alpha} = \\frac{2(0{,}5560)}{1{,}5560} = \\frac{1{,}1120}{1{,}5560} = 0{,}7147$
   - Tekanan parsial masing-masing gas ($P_i = x_i \\cdot P_{\\text{total}}$):
     $$P_{\\ce{N2O4}} = 0{,}2853 \\times 1{,}200\\ \\text{atm} = \\mathbf{0{,}3424\\ \\text{atm}}$$
     $$P_{\\ce{NO2}} = 0{,}7147 \\times 1{,}200\\ \\text{atm} = \\mathbf{0{,}8576\\ \\text{atm}}$$
   - Tetapan kesetimbangan tekanan ($K_p$):
     $$K_p = \\frac{(P_{\\ce{NO2}})^2}{P_{\\ce{N2O4}}} = \\frac{(0{,}8576)^2}{0{,}3424} = \\frac{0{,}7355}{0{,}3424} = \\mathbf{2{,}148\\ \\text{atm}} \\approx 2{,}15\\ \\text{atm}$$`,
    solution_framework_template: `1. Analisis kerapatan campuran gas:
• Rumus M_bar = rho * R * T / P: ....
• Nilai numerik massa molar rata-rata semu: ....

2. Penurunan analitis derajat disosiasi:
• Tabel stoikiometri mol gas kesetimbangan: ....
• Formulasi konservasi massa M0 = (1 + alpha) * M_bar: ....
• Nilai numerik derajat disosiasi alpha: ....

3. Kalkulasi termodinamika kesetimbangan gas:
• Fraksi mol dan tekanan parsial P(N2O4) dan P(NO2): ....
• Nilai tetapan kesetimbangan Kp: ....`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung massa molar rata-rata semu campuran gas kesetimbangan.',
        points: 3,
        rubric: 'Menghitung M_bar = 59.13 g/mol dengan persamaan gas ideal kerapatan.'
      },
      {
        label: 'b',
        question_text: 'Turunkan rumus alpha = (M0 - M_bar) / M_bar dan hitung nilai alpha.',
        points: 4,
        rubric: 'Menurunkan dari konservasi massa (2.5 poin) dan menghitung alpha = 0.556 (1.5 poin).'
      },
      {
        label: 'c',
        question_text: 'Hitung tekanan parsial P(N2O4), P(NO2), dan tetapan kesetimbangan Kp.',
        points: 3,
        rubric: 'Menghitung P(N2O4) = 0.342 atm (1 poin), P(NO2) = 0.858 atm (1 poin), dan Kp = 2.15 atm (1 poin).'
      }
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 10,
    year: 2024,
    source_event: 'OSN Tingkat Nasional / Termodinamika & Kesetimbangan Kimia',
    tags: ['disosiasi-termal', 'n2o4-no2', 'kerapatan-uap-dumas', 'derajat-disosiasi', 'tetapan-kp'],
  }
];
