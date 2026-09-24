/**
 * smaQuestionsTopic8Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F & OSN Pilar 4)
 * 
 * BATCH 8: Kesetimbangan Kimia Dasar SMA (Topik 8 SMA / Modul 108)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 108001 - 108025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 108001 - 108025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 108001 - 108025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_8_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 108001 - 108025)
  // =========================================================================
  {
    id: 108001,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Hakikat Kesetimbangan Dinamis & Ciri-Ciri Keadaan Setimbang',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Karakteristik Fundamental Keadaan Kesetimbangan Kimia Dinamis',
    question_text: `Reaksi sintesis gas amonia dalam bejana tertutup pada temperatur konstan berlangsung menurut persamaan reaksi bolak-balik berikut:
$$\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$$

Pernyataan yang **paling tepat** mengenai kondisi sistem ketika telah mencapai keadaan kesetimbangan dinamis adalah ....

A. Laju pembentukan gas amonia tepat sama besar dengan laju penguraian gas amonia kembali menjadi reaktannya  
B. Reaksi telah berhenti berlangsung sempurna secara mikroskopis karena reaktan $\\ce{N2}$ dan $\\ce{H2}$ telah habis  
C. Konsentrasi gas $\\ce{NH3}$ yang terbentuk harus tepat sama besar dengan konsentrasi reaktan $\\ce{N2}$ yang tersisa  
D. Jumlah mol total produk tepat sama dengan jumlah mol total reaktan di dalam wadah  
E. Massa jenis campuran gas di dalam bejana terus-menerus bertambah seiring berjalannya waktu`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Hakikat Kesetimbangan Dinamis:**
   Kesetimbangan kimia bersifat **dinamis**, artinya secara mikroskopis reaksi tidak pernah berhenti ($v_{\\text{maju}} > 0$ dan $v_{\\text{balik}} > 0$).
2. **Syarat Kesetimbangan:**
   Keadaan setimbang tercapai ketika laju reaksi maju (pembentukan produk) **tepat sama besar** dengan laju reaksi balik (penguraian produk):
   $$v_{\\text{maju}} = v_{\\text{balik}}$$
   Hal ini menyebabkan konsentrasi makroskopis setiap komponen (reaktan maupun produk) menjadi konstan dan tidak berubah terhadap waktu.

**Analisis Opsi Lain:**
- **B salah:** Reaksi tidak berhenti secara mikroskopis; molekul terus bertransformasi bolak-balik dengan laju yang seimbang.
- **C salah:** Konsentrasi tidak harus sama besar ($[\\ce{NH3}] \\neq [\\ce{N2}]$), yang terpenting adalah konsentrasinya **konstan (tetap)**.
- **D salah:** Jumlah mol produk dan reaktan ditentukan oleh stoikiometri dan tetapan kesetimbangan, tidak harus sama.
- **E salah:** Pada sistem tertutup, massa dan volume wadah konstan, sehingga massa jenis gas konstan.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Kelas 11 Fase F',
    tags: ['kesetimbangan-kimia', 'kesetimbangan-dinamis', 'laju-reaksi-maju-balik'],
  },
  {
    id: 108002,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Aturan Fasa Zat pada Rumus Tetapan Kesetimbangan Kc',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penulisan Rumus Tetapan Kesetimbangan Konsentrasi pada Sistem Heterogen',
    question_text: `Pemanasan batu kapur (kalsium karbonat) dalam wadah tertutup mengalami dekomposisi termal heterogen menurut persamaan reaksi:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$$

Rumus tetapan kesetimbangan konsentrasi ($K_c$) yang benar untuk reaksi tersebut adalah ....

A. $K_c = \\frac{[\\ce{CaO}][\\ce{CO2}]}{[\\ce{CaCO3}]}$  
B. $K_c = \\frac{[\\ce{CaCO3}]}{[\\ce{CaO}][\\ce{CO2}]}$  
C. $K_c = [\\ce{CO2}]$  
D. $K_c = \\frac{[\\ce{CO2}]}{[\\ce{CaCO3}]}$  
E. $K_c = [\\ce{CaO}][\\ce{CO2}]$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Fasa Zat dalam Hukum Aksi Massa:**
   Dalam ekspresi tetapan kesetimbangan ($K_c$), spesi yang berwujud **padatan murni (*solid*, $s$)** dan **cairan murni (*liquid*, $l$)** tidak diikutsertakan. Hal ini karena konsentrasi molar zat murni berbanding lurus dengan kerapatan jenisnya yang bernilai konstan sepanjang reaksi, sehingga aktivitas kimianya dianggap sama dengan $1$ ($a = 1$).
2. **Hanya Spesi Gas ($g$) dan Larutan ($aq$) yang Diperhitungkan:**
   Pada reaksi $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$:
   - $\\ce{CaCO3(s)}$ bertanda padatan murni $\\implies$ diabaikan ($= 1$).
   - $\\ce{CaO(s)}$ bertanda padatan murni $\\implies$ diabaikan ($= 1$).
   - $\\ce{CO2(g)}$ berfasa gas $\\implies$ dimasukkan ke rumus.
3. **Formulasi Akhir:**
   $$K_c = [\\ce{CO2}]$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['kesetimbangan-heterogen', 'rumus-kc', 'fasa-padat-murni', 'hukum-aksi-massa'],
  },
  {
    id: 108003,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Formulasi Tetapan Kesetimbangan Homogen Gas SO2-SO3',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penulisan Ekspresi Tetapan Kesetimbangan Kc Reaksi Oksidasi Gas SO2',
    question_text: `Pada proses pembuatan asam sulfat menurut metode kontak, salah satu tahap reaksi kesetimbangan gas homogen yang krusial adalah oksidasi belerang dioksida:
$$\\ce{2 SO2(g) + O2(g) <=> 2 SO3(g)}$$

Ekspresi tetapan kesetimbangan konsentrasi ($K_c$) yang tepat untuk sistem kesetimbangan tersebut adalah ....

A. $K_c = \\frac{[\\ce{SO2}]^2 [\\ce{O2}]}{[\\ce{SO3}]^2}$  
B. $K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2 [\\ce{O2}]}$  
C. $K_c = \\frac{[\\ce{SO3}]}{[\\ce{SO2}] [\\ce{O2}]}$  
D. $K_c = \\frac{2[\\ce{SO3}]}{2[\\ce{SO2}] [\\ce{O2}]}$  
E. $K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}] [\\ce{O2}]^2}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Hukum Aksi Massa Guldberg & Waage:**
   Nilai $K_c$ dirumuskan sebagai rasio hasil kali konsentrasi molar produk dipangkatkan koefisien reaksinya terhadap hasil kali konsentrasi molar reaktan dipangkatkan koefisien reaksinya.
2. **Penerapan pada Reaksi $\\ce{2 SO2(g) + O2(g) <=> 2 SO3(g)}$:**
   - Produk: $\\ce{SO3}$ dengan koefisien $2 \\implies [\\ce{SO3}]^2$
   - Reaktan: $\\ce{SO2}$ dengan koefisien $2 \\implies [\\ce{SO2}]^2$; $\\ce{O2}$ dengan koefisien $1 \\implies [\\ce{O2}]^1$
3. **Persamaan $K_c$:**
   $$K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2 [\\ce{O2}]}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Kelas 11 Fase F',
    tags: ['kesetimbangan-homogen', 'hukum-aksi-massa', 'ekspresi-kc', 'proses-kontak'],
  },
  {
    id: 108004,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Perhitungan Numerik Kc dari Mol Setimbang dan Volume Bejana',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penentuan Nilai Kc Reaksi Dekomposisi Gas Fosfor Pentaklorida',
    question_text: `Ke dalam sebuah bejana tertutup bervolume $2{,}0\\ \\text{Liter}$ pada suhu $250^\\circ\\text{C}$ dimasukkan gas fosfor pentaklorida ($\\ce{PCl5}$) hingga terjadi reaksi penguraian reversibel:
$$\\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$$

Setelah reaksi mencapai keadaan kesetimbangan dinamis, di dalam wadah teranalisis terdapat:
- $0{,}40\\ \\text{mol}$ gas $\\ce{PCl5}$
- $0{,}20\\ \\text{mol}$ gas $\\ce{PCl3}$
- $0{,}20\\ \\text{mol}$ gas $\\ce{Cl2}$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah konsentrasi molaritas ([M]) masing-masing gas pada kondisi kesetimbangan tersebut!',
        points: 2.5,
        rubric: 'Menghitung molaritas dengan membagi mol terhadap volume wadah 2,0 L: [PCl5] = 0,40/2,0 = 0,20 M (1 poin), [PCl3] = 0,20/2,0 = 0,10 M (0.75 poin), dan [Cl2] = 0,20/2,0 = 0,10 M (0.75 poin).',
        expected_answer: '[PCl5] = 0,20 M; [PCl3] = 0,10 M; [Cl2] = 0,10 M'
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan tetapan kesetimbangan konsentrasi (Kc) dan hitung nilai numeriknya pada suhu 250 °C!',
        points: 2.5,
        rubric: 'Menuliskan rumus Kc = ([PCl3][Cl2]) / [PCl5] (1 poin) dan mensubstitusi konsentrasi: Kc = (0,10 * 0,10) / 0,20 = 0,050 (1.5 poin).',
        expected_answer: 'Kc = ([PCl3][Cl2]) / [PCl5] = 0,050 (atau 5,0 x 10^-2)'
      }
    ],
    expected_final_answer: 'a. [PCl5] = 0,20 M, [PCl3] = 0,10 M, [Cl2] = 0,10 M; b. Kc = 0,050.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Konsentrasi Molar Setimbang (Bobot: 2.5 Poin)**
   - Konsentrasi diperoleh dengan membagi jumlah mol terhadap volume wadah ($V = 2{,}0\\ \\text{L}$):
     $$[\\ce{PCl5}] = \\frac{0{,}40\\ \\text{mol}}{2{,}0\\ \\text{L}} = \\mathbf{0{,}20\\ \\text{M}} \\quad (1{,}0\\ \\text{poin})$$
     $$[\\ce{PCl3}] = \\frac{0{,}20\\ \\text{mol}}{2{,}0\\ \\text{L}} = \\mathbf{0{,}10\\ \\text{M}} \\quad (0{,}75\\ \\text{poin})$$
     $$[\\ce{Cl2}] = \\frac{0{,}20\\ \\text{mol}}{2{,}0\\ \\text{L}} = \\mathbf{0{,}10\\ \\text{M}} \\quad (0{,}75\\ \\text{poin})$$

2. **Sub-soal (b): Formulasi dan Nilai $K_c$ (Bobot: 2.5 Poin)**
   - Rumus tetapan kesetimbangan konsentrasi:
     $$K_c = \\frac{[\\ce{PCl3}][\\ce{Cl2}]}{[\\ce{PCl5}]} \\quad (1{,}0\\ \\text{poin})$$
   - Substitusi nilai konsentrasi molar setimbang:
     $$K_c = \\frac{0{,}10 \\times 0{,}10}{0{,}20} = \\frac{0{,}010}{0{,}20} = \\mathbf{0{,}050} \\quad (\\text{atau } 5{,}0 \\times 10^{-2}) \\quad (1{,}5\\ \\text{poin})$$`,
    solution_framework_template: `1. Konversi Mol ke Konsentrasi Molar:
• Rumus molaritas [M] = n / V: ....
• Konsentrasi molar [PCl5]: ....
• Konsentrasi molar [PCl3]: ....
• Konsentrasi molar [Cl2]: ....

2. Evaluasi Tetapan Kesetimbangan Kc:
• Rumus ekspresi aksi massa Kc: ....
• Substitusi nilai numerik konsentrasi: ....
• Hasil akhir nilai Kc: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['perhitungan-kc', 'konsentrasi-molar', 'volume-wadah', 'dekomposisi-pcl5'],
  },
  {
    id: 108005,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Asas Le Chatelier: Pengaruh Perubahan Volume, Tekanan, dan Suhu',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Analisis Pergeseran Kesetimbangan Gas Nitrogen Dioksida Berdasarkan Asas Le Chatelier',
    question_text: `Gas nitrogen dioksida ($\\ce{NO2}$, berwarna cokelat kemerahan) berada dalam kesetimbangan dengan gas dinitrogen tetroksida ($\\ce{N2O4}$, tidak berwarna) di dalam tabung suntik tertutup menurut reaksi eksoterm berikut:
$$\\ce{2 NO2(g) <=> N2O4(g)} \\quad \\Delta H = -57{,}2\\ \\text{kJ}$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan ke arah mana kesetimbangan bergeser dan bagaimana perubahan intensitas warna gas jika volume tabung suntik diperkecil (tekanan sistem diperbesar)!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa pengecilan volume (tekanan membesar) menggeser kesetimbangan ke arah koefisien gas terkecil / ke kanan (1.5 poin), sehingga gas N2O4 bertambah dan warna cokelat memudar menjadi lebih pucat (1 poin).',
        expected_answer: 'Kesetimbangan bergeser ke kanan (ke arah N2O4 / koefisien lebih kecil); warna cokelat memudar / menjadi lebih pucat.'
      },
      {
        label: 'b',
        question_text: 'Jelaskan ke arah mana kesetimbangan bergeser jika tabung suntik tersebut dimasukkan ke dalam wadah berisi air es (suhu sistem diturunkan)!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa penurunan suhu menggeser kesetimbangan ke arah reaksi eksoterm (pelepasan kalor / Delta H < 0) (1.5 poin), yaitu bergeser ke kanan membentuk N2O4 lebih banyak (1 poin).',
        expected_answer: 'Kesetimbangan bergeser ke kanan (ke arah reaksi eksoterm).'
      }
    ],
    expected_final_answer: 'a. Bergeser ke kanan (warna cokelat memudar); b. Bergeser ke kanan (arah eksoterm).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Pengaruh Perubahan Volume dan Tekanan (Bobot: 2.5 Poin)**
   - Berdasarkan Asas Le Chatelier, jika volume wadah diperkecil (tekanan total dinaikkan), sistem akan bergeser ke arah yang menghasilkan jumlah molekul gas (koefisien gas) lebih sedikit untuk mengurangi tekanan:
     - Ruas kiri: koefisien gas $= 2$ ($\\ce{2 NO2}$)
     - Ruas kanan: koefisien gas $= 1$ ($\\ce{1 N2O4}$)
   - Maka kesetimbangan **bergeser ke arah kanan** (arah pembentukan $\\ce{N2O4}$). *(Skor: 1.5 Poin)*
   - Karena $\\ce{N2O4}$ tidak berwarna sedangkan $\\ce{NO2}$ berwarna cokelat, konsentrasi $\\ce{NO2}$ berkurang sehingga **warna cokelat gas memudar (menjadi lebih pucat)**. *(Skor: 1.0 Poin)*

2. **Sub-soal (b): Pengaruh Penurunan Suhu (Bobot: 2.5 Poin)**
   - Reaksi pembentukan $\\ce{N2O4}$ bersifat eksotermik ($\\Delta H = -57{,}2\\ \\text{kJ} < 0$).
   - Jika temperatur diturunkan (didinginkan dengan air es), sistem akan bereaksi untuk memproduksi kalor tambahan dengan **bergeser ke arah reaksi eksoterm**, yaitu **ke arah kanan**. *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Analisis Faktor Tekanan & Volume:
• Perbandingan koefisien gas reaktan vs produk: ....
• Arah pergeseran saat volume diperkecil (P diperbesar): ....
• Pengaruh pergeseran terhadap intensitas warna visual: ....

2. Analisis Faktor Temperatur (Termokimia):
• Tanda nilai entalpi reaksi (eksoterm vs endoterm): ....
• Kaidah Le Chatelier untuk pendinginan sistem (T turun): ....
• Arah pergeseran kesetimbangan akhir: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['azas-le-chatelier', 'pergeseran-kesetimbangan', 'faktor-volume-tekanan', 'faktor-suhu', 'gas-no2-n2o4'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 108001 - 108025)
  // =========================================================================
  {
    id: 108006,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Hubungan Termodinamika Tetapan Kp dan Kc',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Nilai Kp dari Kc pada Reaksi Sintesis Gas Amonia',
    question_text: `Pada suhu mutlak $500\\ \\text{K}$, reaksi kesetimbangan fasa gas:
$$\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$$
memiliki nilai tetapan kesetimbangan konsentrasi $K_c = 0{,}060$.

Jika tetapan gas ideal bernilai $R = 0{,}082\\ \\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, maka nilai tetapan kesetimbangan tekanan parsial ($K_p$) reaksi tersebut pada suhu $500\\ \\text{K}$ adalah mendekati ....

A. $1{,}01 \\times 10^2$  
B. $2{,}46$  
C. $1{,}46 \\times 10^{-3}$  
D. $3{,}57 \\times 10^{-5}$  
E. $8{,}72 \\times 10^{-7}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Hubungan Fundamental $K_p$ dan $K_c$:**
   Berdasarkan persamaan gas ideal, hubungan kedua tetapan dinyatakan sebagai:
   $$K_p = K_c (R \\cdot T)^{\\Delta n}$$
2. **Menentukan Selisih Koefisien Gas ($\\Delta n$):**
   $$\\Delta n = \\sum \\text{koefisien gas produk} - \\sum \\text{koefisien gas reaktan}$$
   $$\\Delta n = 2 - (1 + 3) = 2 - 4 = -2$$
3. **Kalkulasi Nilai $(R \\cdot T)$:**
   $$R \\cdot T = 0{,}082\\ \\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 500\\ \\text{K} = 41{,}0\\ \\text{L}\\cdot\\text{atm}/\\text{mol}$$
4. **Menghitung $K_p$:**
   $$K_p = 0{,}060 \\times (41{,}0)^{-2} = \\frac{0{,}060}{(41{,}0)^2} = \\frac{0{,}060}{1681} \\approx \\mathbf{3{,}57 \\times 10^{-5}}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Penilaian Akhir Semester (PAS) Kimia SMA',
    tags: ['relasi-kp-kc', 'gas-ideal', 'delta-n', 'amonia-haber-bosch'],
  },
  {
    id: 108007,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Manipulasi Aljabar Tetapan Kesetimbangan Kimia',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Nilai Tetapan Kesetimbangan Reaksi Baru dari Dua Reaksi Perantara',
    question_text: `Diketahui dua reaksi kesetimbangan pada suhu $25^\\circ\\text{C}$ berikut:
1. $\\ce{N2(g) + O2(g) <=> 2 NO(g)} \\quad K_1 = 4{,}0 \\times 10^{-4}$
2. $\\ce{2 NO2(g) <=> 2 NO(g) + O2(g)} \\quad K_2 = 1{,}0 \\times 10^{-2}$

Nilai tetapan kesetimbangan ($K_3$) untuk reaksi pembentukan nitrogen dioksida:
$$\\ce{1/2 N2(g) + 1/2 O2(g) + 1/2 O2(g) ->} \\text{ (atau } \\ce{1/2 N2(g) + O2(g) <=> NO2(g)}\\text{)}$$
adalah ....

A. $0{,}20$  
B. $5{,}0$  
C. $25$  
D. $4{,}0 \\times 10^{-6}$  
E. $2{,}5 \\times 10^2$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Reaksi Target:**
   Reaksi target yang dicari:
   $$\\ce{1/2 N2(g) + O2(g) <=> NO2(g)} \\quad (K_3)$$
2. **Kombinasi Reaksi Perantara:**
   - Ambil Reaksi (1) dikalikan faktor $\\frac{1}{2}$:
     $$\\ce{1/2 N2(g) + 1/2 O2(g) <=> NO(g)} \\quad K_1' = (K_1)^{1/2} = \\sqrt{4{,}0 \\times 10^{-4}} = 2{,}0 \\times 10^{-2}$$
   - Ambil Reaksi (2) dibalik arahnya dan dikalikan faktor $\\frac{1}{2}$:
     $$\\ce{NO(g) + 1/2 O2(g) <=> NO2(g)} \\quad K_2' = \\left(\\frac{1}{K_2}\\right)^{1/2} = \\frac{1}{\\sqrt{1{,}0 \\times 10^{-2}}} = \\frac{1}{0{,}10} = 10$$
3. **Penjumlahan Kedua Reaksi:**
   $$\\begin{aligned}
   \\ce{1/2 N2(g) + 1/2 O2(g)} &\\ce{<=> NO(g)} & K_1' &= 2{,}0 \\times 10^{-2} \\\\
   \\ce{NO(g) + 1/2 O2(g)} &\\ce{<=> NO2(g)} & K_2' &= 10 \\\\
   \\hline
   \\ce{1/2 N2(g) + O2(g)} &\\ce{<=> NO2(g)} & K_3 &= K_1' \\times K_2'
   \\end{aligned}$$
4. **Kalkulasi Nilai $K_3$:**
   $$K_3 = (2{,}0 \\times 10^{-2}) \\times 10 = \\mathbf{0{,}20}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['manipulasi-aljabar-k', 'akar-pangkat-k', 'pembalikan-reaksi', 'reaksi-bertahap'],
  },
  {
    id: 108008,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Ketergantungan Nilai K terhadap Temperatur & Aspek Termokimia',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Evaluasi Hubungan Nilai Tetapan Kesetimbangan terhadap Perubahan Suhu',
    question_text: `Data eksperimen untuk reaksi sintesis gas metanol dalam reaktor tertutup:
$$\\ce{CO(g) + 2 H2(g) <=> CH3OH(g)}$$
menunjukkan nilai tetapan kesetimbangan tekanan parsial ($K_p$) pada dua temperatur berlainan:
- Pada suhu $T = 300\\ \\text{K}$, $K_p = 1{,}2 \\times 10^4$
- Pada suhu $T = 500\\ \\text{K}$, $K_p = 2{,}5 \\times 10^{-3}$

Berdasarkan data tersebut, kesimpulan yang **paling tepat** mengenai reaksi sintesis metanol adalah ....

A. Reaksi berlangsung secara endotermik karena nilai $K_p$ mengecil seiring naiknya suhu  
B. Peningkatan temperatur menyebabkan reaksi bergeser ke arah kanan menghasilkan metanol lebih banyak  
C. Reaksi berlangsung secara eksotermik ($\\Delta H < 0$), dan pemanasan reaktor menyebabkan kesetimbangan bergeser ke kiri  
D. Penambahan katalisator pada suhu $500\\ \\text{K}$ akan menaikkan nilai $K_p$ mendekati $10^4$  
E. Nilai $K_c$ pada $500\\ \\text{K}$ bernilai lebih besar daripada nilai $K_c$ pada $300\\ \\text{K}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Tren Nilai $K_p$ vs Temperatur:**
   Ketika temperatur dinaikkan dari $300\\ \\text{K}$ ke $500\\ \\text{K}$, nilai tetapan kesetimbangan turun drastis dari $1{,}2 \\times 10^4$ menjadi $2{,}5 \\times 10^{-3}$ (nilai $K$ mengecil).
2. **Kaidah Asas Le Chatelier & van 't Hoff:**
   - Kenaikan suhu ($T \\uparrow$) selalu menggeser sistem ke arah reaksi endoterm.
   - Karena pada pemanasan nilai $K$ mengecil ($[\\text{produk}] \\downarrow$ dan $[\\text{reaktan}] \\uparrow$), berarti sistem bergeser **ke arah kiri**.
   - Bergeser ke kiri pada kenaikan suhu membuktikan bahwa arah kiri adalah endotermik, sehingga **reaksi maju (arah kanan) bersifat eksotermik ($\\Delta H < 0$)**.
3. **Analisis Opsi Lain:**
   - **A salah:** Penurunan $K$ saat suhu naik adalah ciri reaksi eksoterm, bukan endoterm.
   - **B salah:** Kenaikan suhu menggeser reaksi ke kiri (metanol berkurang).
   - **D salah:** Katalis tidak pernah mengubah nilai tetapan kesetimbangan $K$.
   - **E salah:** $K_c$ juga sebanding dengan $K_p$ dan mengecil pada suhu yang lebih tinggi.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan UTBK-SNBT / Ujian Sekolah Kimia SMA',
    tags: ['pengaruh-suhu', 'termodinamika-k', 'reaksi-eksoterm', 'asas-le-chatelier'],
  },
  {
    id: 108009,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Kuosien Reaksi (Qc) & Prediksi Arah Pergeseran Spontan',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Prediksi Arah Spontanitas Sistem Non-Setimbang via Kuosien Reaksi',
    question_text: `Reaksi pembentukan gas hidrogen iodida pada temperatur $425^\\circ\\text{C}$ memiliki tetapan kesetimbangan $K_c = 54{,}0$:
$$\\ce{H2(g) + I2(g) <=> 2 HI(g)}$$

Ke dalam sebuah labu tertutup bervolume $1{,}0\\ \\text{Liter}$ dimasukkan campuran gas awal yang terdiri atas $0{,}10\\ \\text{mol } \\ce{H2}$, $0{,}20\\ \\text{mol } \\ce{I2}$, dan $0{,}80\\ \\text{mol } \\ce{HI}$.

Pernyataan yang **paling tepat** mengenai kondisi campuran gas tersebut sesaat setelah dimasukkan adalah ....

A. Sistem telah berada dalam keadaan setimbang dinamis karena semua reaktan dan produk telah ada  
B. Nilai kuosien reaksi $Q_c = 32{,}0$; karena $Q_c < K_c$, reaksi akan bergeser secara spontan ke arah kanan (pembentukan produk $\\ce{HI}$)  
C. Nilai kuosien reaksi $Q_c = 32{,}0$; karena $Q_c < K_c$, reaksi akan bergeser ke arah kiri (pembentukan reaktan)  
D. Nilai kuosien reaksi $Q_c = 64{,}0$; karena $Q_c > K_c$, reaksi akan bergeser ke arah kanan  
E. Nilai kuosien reaksi $Q_c = 4{,}0$; karena $Q_c < K_c$, reaksi berhenti dan tidak mengalami pergeseran`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Konsentrasi Awal ($V = 1{,}0\\ \\text{L}$):**
   - $[\\ce{H2}] = 0{,}10\\ \\text{M}$
   - $[\\ce{I2}] = 0{,}20\\ \\text{M}$
   - $[\\ce{HI}] = 0{,}80\\ \\text{M}$
2. **Formulasi dan Kalkulasi Kuosien Reaksi ($Q_c$):**
   $$Q_c = \\frac{[\\ce{HI}]^2}{[\\ce{H2}][\\ce{I2}]} = \\frac{(0{,}80)^2}{(0{,}10)(0{,}20)} = \\frac{0{,}64}{0{,}020} = \\mathbf{32{,}0}$$
3. **Membandingkan Nilai $Q_c$ terhadap $K_c$ ($K_c = 54{,}0$):**
   - Diperoleh $Q_c (32{,}0) < K_c (54{,}0)$.
   - Karena $Q_c < K_c$, rasio produk terhadap reaktan saat ini masih lebih kecil dibandingkan komposisi kesetimbangan ideal.
   - Agar nilai $Q_c$ naik mencapai $K_c$, sejumlah reaktan harus bereaksi membentuk produk tambahan. Maka sistem **bergeser ke kanan (reaksi maju)**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['kuosien-reaksi-q', 'prediksi-arah-reaksi', 'kondisi-awal', 'gas-hi'],
  },
  {
    id: 108010,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Pengaruh Penambahan Gas Inert terhadap Kesetimbangan Fasa Gas',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Analisis Penambahan Gas Mulia pada Volume Tetap vs Tekanan Tetap',
    question_text: `Suatu reaksi kesetimbangan fasa gas berlangsung dalam sebuah wadah silinder bertutup:
$$\\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$$

Ke dalam wadah tersebut kemudian ditambahkan gas mulia helium ($\\ce{He}$), suatu gas inert yang sama sekali tidak bereaksi dengan komponen mana pun.

Pernyataan yang **paling tepat** mengenai respon sistem kesetimbangan tersebut adalah ....

A. Penambahan gas helium pada volume wadah tetap akan menggeser kesetimbangan ke arah kanan karena tekanan total sistem meningkat  
B. Penambahan gas helium pada volume wadah tetap akan menggeser kesetimbangan ke arah kiri untuk mengurangi tekanan total  
C. Penambahan gas helium pada tekanan sistem tetap (wadah berpiston bebas) tidak menyebabkan pergeseran kesetimbangan sama sekali  
D. Penambahan gas helium pada volume wadah tetap mengubah nilai tetapan kesetimbangan $K_p$  
E. Penambahan gas helium pada volume wadah tetap tidak menggeser kesetimbangan sama sekali, sedangkan penambahan pada tekanan tetap (wadah memuai) menggeser kesetimbangan ke arah kanan`,
    expected_final_answer: 'E',
    solution_rubric: `**Kunci Jawaban: E**

**Pembahasan Langkah demi Langkah:**
1. **Kasus 1: Penambahan Gas Inert pada Volume Tetap ($V = \\text{konstan}$):**
   - Penambahan gas $\\ce{He}$ menaikkan tekanan total sistem ($P_{\\text{tot}}$).
   - Namun, konsentrasi molar ($n_i/V$) dan tekanan parsial ($P_i = \\frac{n_i R T}{V}$) dari masing-masing gas reaktan dan produk ($\\ce{PCl5}$, $\\ce{PCl3}$, $\\ce{Cl2}$) **tidak berubah sama sekali**.
   - Akibatnya, nilai kuosien reaksi $Q$ tetap sama dengan $K$, sehingga **kesetimbangan TIDAK BERGESER**.
2. **Kasus 2: Penambahan Gas Inert pada Tekanan Tetap ($P = \\text{konstan}$, silinder berpiston lentur):**
   - Agar tekanan total konstan saat gas $\\ce{He}$ masuk, volume silinder harus **mengembang membesar ($V \\uparrow$)**.
   - Kenaikan volume menyebabkan penurunan konsentrasi/tekanan parsial seluruh gas reaktan dan produk.
   - Sesuai Asas Le Chatelier, ekspansi volume menggeser kesetimbangan ke arah **jumlah koefisien gas terbesar**.
   - Koefisien kiri $= 1$, koefisien kanan $= 1 + 1 = 2$. Maka kesetimbangan **bergeser ke kanan**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA Bidang Kesetimbangan',
    tags: ['gas-inert', 'helium', 'volume-tetap-tekanan-tetap', 'tekanan-parsial', 'le-chatelier'],
  },
  {
    id: 108011,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Perhitungan Tabel M-B-S Gas Homogen Pembentukan HI',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penerapan Tabel M-B-S pada Kesetimbangan Sintesis Hidrogen Iodida',
    question_text: `Sebanyak $1{,}00\\ \\text{mol}$ gas hidrogen ($\\ce{H2}$) dan $1{,}00\\ \\text{mol}$ uap iodin ($\\ce{I2}$) direaksikan di dalam bejana kaku tertutup bervolume $2{,}0\\ \\text{Liter}$ pada suhu $448^\\circ\\text{C}$ hingga mencapai kesetimbangan menurut reaksi:
$$\\ce{H2(g) + I2(g) <=> 2 HI(g)} \\quad K_c = 50{,}0$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan aljabar kesetimbangan dalam variabel x (di mana x adalah mol H2 yang bereaksi) dan tentukan nilai mol masing-masing gas pada keadaan setimbang!',
        points: 2.5,
        rubric: 'Menyusun tabel MBS: n(H2) = 1 - x, n(I2) = 1 - x, n(HI) = 2x (1 poin). Persamaan Kc = (2x/(2))^2 / (((1-x)/2)^2) = (2x/(1-x))^2 = 50,0, akar kuadrat: 2x / (1-x) = 7,071, menghasilkan x = 0,780 mol (1 poin). Mol setimbang: n(H2) = n(I2) = 0,22 mol, n(HI) = 1,56 mol (0.5 poin).',
        expected_answer: 'x = 0,780 mol; n(H2) = 0,22 mol, n(I2) = 0,22 mol, n(HI) = 1,56 mol'
      },
      {
        label: 'b',
        question_text: 'Hitunglah konsentrasi molaritas ([M]) masing-masing gas pada kesetimbangan dan buktikan bahwa substitusi konsentrasi tersebut menghasilkan nilai Kc mendekati 50,0!',
        points: 2.5,
        rubric: 'Menghitung konsentrasi: [H2] = [I2] = 0,22 / 2,0 = 0,11 M, [HI] = 1,56 / 2,0 = 0,78 M (1.5 poin). Membuktikan Kc = (0,78)^2 / (0,11 * 0,11) = 0,6084 / 0,0121 = 50,28 ≈ 50,0 (1 poin).',
        expected_answer: '[H2] = 0,11 M; [I2] = 0,11 M; [HI] = 0,78 M; Kc = (0,78)^2 / (0,11)^2 ≈ 50,3'
      }
    ],
    expected_final_answer: 'a. n(H2) = n(I2) = 0,22 mol, n(HI) = 1,56 mol; b. [H2] = [I2] = 0,11 M, [HI] = 0,78 M, Kc terbukti = 50,3.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Pemodelan Aljabar Tabel M-B-S (Bobot: 2.5 Poin)**
   - Misalkan mol $\\ce{H2}$ yang bereaksi adalah $x$:

   | Kondisi | $\\ce{H2(g)}$ | $\\ce{I2(g)}$ | $\\ce{2 HI(g)}$ |
   | :--- | :---: | :---: | :---: |
   | **Mula-mula (mol)** | $1{,}00$ | $1{,}00$ | $0$ |
   | **Bereaksi (mol)** | $-x$ | $-x$ | $+2x$ |
   | **Setimbang (mol)** | $1{,}00 - x$ | $1{,}00 - x$ | $2x$ |

   - Karena $\\Delta n = 2 - (1+1) = 0$, volume $V = 2{,}0\\ \\text{L}$ saling meniadakan dalam ekspresi $K_c$:
     $$K_c = \\frac{[\\ce{HI}]^2}{[\\ce{H2}][\\ce{I2}]} = \\frac{\\left(\\frac{2x}{V}\\right)^2}{\\left(\\frac{1-x}{V}\\right)\\left(\\frac{1-x}{V}\\right)} = \\frac{4x^2}{(1-x)^2} = 50{,}0$$
   - Mengambil akar kuadrat kedua ruas:
     $$\\frac{2x}{1-x} = \\sqrt{50{,}0} \\approx 7{,}071$$
     $$2x = 7{,}071(1 - x) = 7{,}071 - 7{,}071x \\implies 9{,}071x = 7{,}071 \\implies \\mathbf{x = 0{,}780\\ \\text{mol}}$$
   - Mol pada kesetimbangan:
     - $n(\\ce{H2}) = 1{,}00 - 0{,}780 = \\mathbf{0{,}22\\ \\text{mol}}$
     - $n(\\ce{I2}) = 1{,}00 - 0{,}780 = \\mathbf{0{,}22\\ \\text{mol}}$
     - $n(\\ce{HI}) = 2(0{,}780) = \\mathbf{1{,}56\\ \\text{mol}}$

2. **Sub-soal (b): Konsentrasi Molar dan Pembuktian Nilai $K_c$ (Bobot: 2.5 Poin)**
   - Konsentrasi molar:
     $$[\\ce{H2}] = \\frac{0{,}22\\ \\text{mol}}{2{,}0\\ \\text{L}} = \\mathbf{0{,}11\\ \\text{M}}$$
     $$[\\ce{I2}] = \\frac{0{,}22\\ \\text{mol}}{2{,}0\\ \\text{L}} = \\mathbf{0{,}11\\ \\text{M}}$$
     $$[\\ce{HI}] = \\frac{1{,}56\\ \\text{mol}}{2{,}0\\ \\text{L}} = \\mathbf{0{,}78\\ \\text{M}}$$
   - Verifikasi substitusi nilai ke $K_c$:
     $$K_c = \\frac{(0{,}78)^2}{(0{,}11)(0{,}11)} = \\frac{0{,}6084}{0{,}0121} = \\mathbf{50{,}28 \\approx 50{,}0} \\quad (\\text{terbukti valid})$$`,
    solution_framework_template: `1. Penyusunan Tabel M-B-S dan Penentuan Nilai x:
• Tabel stoikiometri mol M-B-S: ....
• Formulasi ekspresi Kc dalam variabel x: ....
• Operasi penyederhanaan akar kuadrat: ....
• Nilai x mol bereaksi: ....
• Komposisi mol setimbang: ....

2. Evaluasi Molaritas dan Validasi Kc:
• Molaritas [H2], [I2], dan [HI]: ....
• Pembuktian balik nilai tetapan Kc: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['tabel-mbs', 'kesetimbangan-homogen', 'perhitungan-kc', 'akar-kuadrat-aljabar'],
  },
  {
    id: 108012,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Penentuan Kp pada Kesetimbangan Heterogen Dekomposisi NH4HS',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kalkulasi Tetapan Kp dari Tekanan Total Dekomposisi Padatan Amonium Hidrosulfida',
    question_text: `Padatan amonium hidrosulfida ($\\ce{NH4HS}$) dimasukkan ke dalam bejana hampa udara pada temperatur $25^\\circ\\text{C}$ dan terurai membentuk gas amonia dan gas hidrogen sulfida:
$$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$$

Setelah sistem mencapai kesetimbangan heterogen, manometer mencatat tekanan total gas di dalam bejana sebesar $P_{\\text{total}} = 0{,}66\\ \\text{atm}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan stoikiometri reaksi penguraian tersebut, tentukan tekanan parsial gas NH3 (P_NH3) dan tekanan parsial gas H2S (P_H2S) pada saat kesetimbangan!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa perbandingan mol gas NH3 : H2S = 1 : 1, sehingga fraksi mol X = 0,5 (1 poin), dan tekanan parsial P_NH3 = P_H2S = 0,5 * 0,66 atm = 0,33 atm (1.5 poin).',
        expected_answer: 'P_NH3 = 0,33 atm; P_H2S = 0,33 atm'
      },
      {
        label: 'b',
        question_text: 'Tuliskan rumus tetapan kesetimbangan tekanan parsial (Kp) untuk reaksi tersebut dan hitung nilai numeriknya pada suhu 25 °C!',
        points: 2.5,
        rubric: 'Menuliskan ekspresi Kp = (P_NH3) * (P_H2S) tanpa menyertakan padatan NH4HS (1 poin), dan menghitung Kp = 0,33 * 0,33 = 0,1089 ≈ 0,11 atm^2 (1.5 poin).',
        expected_answer: 'Kp = (P_NH3)(P_H2S) = 0,11 (atau 0,109 atm^2)'
      }
    ],
    expected_final_answer: 'a. P_NH3 = 0,33 atm, P_H2S = 0,33 atm; b. Kp = 0,11.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Tekanan Parsial Gas Produk (Bobot: 2.5 Poin)**
   - Karena bejana mula-mula hampa udara dan padatan $\\ce{NH4HS}$ terurai dengan koefisien $1 : 1$:
     $$n_{\\ce{NH3}} = n_{\\ce{H2S}}$$
   - Berdasarkan Hukum Dalton:
     $$P_{\\ce{NH3}} = P_{\\ce{H2S}} = \\frac{1}{2} P_{\\text{total}} = \\frac{0{,}66\\ \\text{atm}}{2} = \\mathbf{0{,}33\\ \\text{atm}} \\quad (2{,}5\\ \\text{poin})$$

2. **Sub-soal (b): Formulasi dan Nilai $K_p$ (Bobot: 2.5 Poin)**
   - Karena $\\ce{NH4HS}$ berfasa padat ($s$), aktivitasnya bernilai 1 dan dikeluarkan dari ekspresi:
     $$K_p = P_{\\ce{NH3}} \\times P_{\\ce{H2S}} \\quad (1{,}0\\ \\text{poin})$$
   - Substitusi tekanan parsial:
     $$K_p = 0{,}33 \\times 0{,}33 = \\mathbf{0{,}1089 \\approx 0{,}11} \\quad (1{,}5\\ \\text{poin})$$`,
    solution_framework_template: `1. Analisis Tekanan Parsial Stoikiometrik:
• Rasio mol produk fasa gas: ....
• Pembagian tekanan total P_tot menurut Hukum Dalton: ....
• Nilai tekanan parsial P_NH3 dan P_H2S: ....

2. Formulasi dan Perhitungan Kp:
• Aturan eliminasi zat padat murni dari rumus Kp: ....
• Perkalian tekanan parsial: ....
• Nilai tetapan Kp akhir: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['kesetimbangan-heterogen', 'tekanan-parsial', 'tetapan-kp', 'hukum-dalton'],
  },
  {
    id: 108013,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Kombinasi Dua Reaksi Bertahap & Penjumlahan Tetapan Kesetimbangan',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kalkulasi Tetapan Kesetimbangan Total Reaksi Reduksi Besi Bertahap',
    question_text: `Reduksi bijih besi dalam tanur tiup berlangsung melalui reaksi kesetimbangan bertingkat dengan gas karbon monoksida ($\\ce{CO}$) pada suhu $1000^\\circ\\text{C}$:
1. $\\ce{3 Fe2O3(s) + CO(g) <=> 2 Fe3O4(s) + CO2(g)} \\quad K_1 = 30{,}0$
2. $\\ce{Fe3O4(s) + CO(g) <=> 3 FeO(s) + CO2(g)} \\quad K_2 = 2{,}00$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan persamaan reaksi total dan rumuskan hubungan tetapan kesetimbangan K3 untuk reaksi reduksi hematit menjadi wustit: Fe2O3(s) + 1/3 CO(g) <=> 2/3 Fe3O4(s) + 1/3 CO2(g)!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa reaksi tersebut adalah 1/3 kali reaksi (1) (1 poin), sehingga K3 = (K1)^(1/3) = (30,0)^(1/3) ≈ 3,11 (1.5 poin).',
        expected_answer: 'K3 = (K1)^(1/3) = (30,0)^(1/3) ≈ 3,11'
      },
      {
        label: 'b',
        question_text: 'Tentukan nilai tetapan kesetimbangan (K_total) untuk reaksi keseluruhan: Fe2O3(s) + CO(g) <=> 2 FeO(s) + CO2(g) yang diperoleh dari kombinasi reaksi (1) dan reaksi (2)!',
        points: 2.5,
        rubric: 'Menyetarakan reaksi: 1/3 Reaksi (1) + 2/3 Reaksi (2) menghasilkan reaksi target (1 poin). K_total = (K1)^(1/3) * (K2)^(2/3) = 3,107 * (2,00)^(2/3) = 3,107 * 1,587 = 4,93 (1.5 poin).',
        expected_answer: 'K_total = (K1)^(1/3) * (K2)^(2/3) ≈ 4,93'
      }
    ],
    expected_final_answer: 'a. K3 = 3,11; b. K_total = 4,93.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Manipulasi Pangkat Sepertiga (Bobot: 2.5 Poin)**
   - Reaksi yang diminta:
     $$\\ce{Fe2O3(s) + 1/3 CO(g) <=> 2/3 Fe3O4(s) + 1/3 CO2(g)}$$
   - Persamaan ini merupakan Reaksi (1) dikalikan dengan faktor $\\frac{1}{3}$.
   - Berdasarkan aturan manipulasi aljabar kesetimbangan:
     $$K_3 = (K_1)^{1/3} = \\sqrt[3]{30{,}0} \\approx \\mathbf{3{,}11} \\quad (2{,}5\\ \\text{poin})$$

2. **Sub-soal (b): Kombinasi Reaksi Keseluruhan (Bobot: 2.5 Poin)**
   - Target reaksi: $\\ce{Fe2O3(s) + CO(g) <=> 2 FeO(s) + CO2(g)}$.
   - Dapat disusun dari:
     - $\\frac{1}{3} \\times$ Reaksi (1): $\\ce{Fe2O3 + 1/3 CO <=> 2/3 Fe3O4 + 1/3 CO2} \\quad (K_a = K_1^{1/3})$
     - $\\frac{2}{3} \\times$ Reaksi (2): $\\ce{2/3 Fe3O4 + 2/3 CO <=> 2 FeO + 2/3 CO2} \\quad (K_b = K_2^{2/3})$
   - Penjumlahan kedua reaksi:
     $$\\ce{Fe2O3(s) + CO(g) <=> 2 FeO(s) + CO2(g)}$$
   - Nilai tetapan kesetimbangan total:
     $$K_{\\text{total}} = K_a \\times K_b = (K_1)^{1/3} \\times (K_2)^{2/3} = 3{,}107 \\times (2{,}00)^{2/3} = 3{,}107 \\times 1{,}587 = \\mathbf{4{,}93} \\quad (2{,}5\\ \\text{poin})$$`,
    solution_framework_template: `1. Analisis Faktor Pengali Reaksi:
• Koefisien fraksi reaksi asal vs target: ....
• Aturan pemangkatan nilai tetapan K: ....
• Kalkulasi akar pangkat tiga: ....

2. Penjumlahan Aljabar Reaksi Reduksi Total:
• Eliminasi spesi intermediat padatan Fe3O4: ....
• Perkalian tetapan kesetimbangan K_total = K_a * K_b: ....
• Hasil akhir nilai K_total: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Bidang Kesetimbangan Heterogen',
    tags: ['reaksi-bertahap', 'manipulasi-aljabar-k', 'kesetimbangan-heterogen', 'reduksi-besi'],
  },
  {
    id: 108014,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Pergeseran Kesetimbangan Ionik Kromat-Dikromat oleh Perubahan pH',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Pengaruh Penambahan Ion Asam dan Basa pada Kesetimbangan Kromat-Dikromat',
    question_text: `Dalam larutan berair, ion kromat ($\\ce{CrO4^2-}$, berwarna kuning cerah) dan ion dikromat ($\\ce{Cr2O7^2-}$, berwarna jingga pekat) berada dalam kesetimbangan dinamis yang peka terhadap derajat keasaman (pH):
$$\\ce{2 CrO4^2-(aq) + 2 H+(aq) <=> Cr2O7^2-(aq) + H2O(l)}$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan perubahan warna larutan dan arah pergeseran kesetimbangan jika ke dalam larutan kalium kromat (K2CrO4) ditambahkan beberapa tetes larutan asam klorida (HCl 1 M)!',
        points: 2.5,
        rubric: 'Menjelaskan penambahan HCl meningkatkan konsentrasi ion H+ (1 poin), sehingga sistem bergeser ke kanan membentuk ion Cr2O7^2- lebih banyak, mengubah warna larutan dari kuning menjadi jingga (1.5 poin).',
        expected_answer: 'Kesetimbangan bergeser ke kanan (ke arah produk); warna larutan berubah dari kuning menjadi jingga.'
      },
      {
        label: 'b',
        question_text: 'Jelaskan apa yang terjadi jika larutan yang telah berwarna jingga tersebut selanjutnya ditetesi larutan natrium hidroksida (NaOH 1 M)! Tuliskan pula reaksi ionik penjelasnya!',
        points: 2.5,
        rubric: 'Menjelaskan ion OH- bereaksi menetralkan ion H+ membentuk H2O (H+ + OH- -> H2O), menurunkan [H+] (1 poin). Untuk menggantikan H+, sistem bergeser ke kiri membentuk ion CrO4^2- kembali, sehingga warna larutan kembali menjadi kuning (1.5 poin).',
        expected_answer: 'Ion OH- menetralkan H+ (H+ + OH- -> H2O); kesetimbangan bergeser ke kiri, warna kembali menjadi kuning.'
      }
    ],
    expected_final_answer: 'a. Bergeser ke kanan (kuning -> jingga); b. Ion OH- menetralkan H+, bergeser ke kiri (jingga -> kuning).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Efek Penambahan Asam ($\ce{H+}$) (Bobot: 2.5 Poin)**
   - Penambahan $\\ce{HCl}$ memasok ion $\\ce{H+}$ ke dalam larutan ($[\\ce{H+}] \\uparrow$).
   - Sesuai Asas Le Chatelier, sistem merespon dengan mengkonsumsi kelebihan ion $\\ce{H+}$, yaitu dengan **bergeser ke arah kanan**. *(Skor: 1.0 Poin)*
   - Akibat pergeseran ke kanan, konsentrasi ion dikromat ($\\ce{Cr2O7^2-}$) meningkat pesat, sehingga **warna larutan berubah dari kuning menjadi jingga pekat**. *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Efek Penambahan Basa ($\ce{OH-}$) (Bobot: 2.5 Poin)**
   - Penambahan $\\ce{NaOH}$ memasok ion $\\ce{OH-}$ yang akan bereaksi dengan ion $\\ce{H+}$ dalam reaksi netralisasi:
     $$\\ce{H+(aq) + OH-(aq) -> H2O(l)}$$
   - Hal ini menyebabkan konsentrasi ion $\\ce{H+}$ dalam sistem menurun drastis ($[\\ce{H+}] \\downarrow$). *(Skor: 1.0 Poin)*
   - Untuk memproduksi kembali ion $\\ce{H+}$ yang hilang, kesetimbangan **bergeser ke arah kiri**. Ion dikromat terurai kembali menjadi ion kromat, sehingga **warna larutan berubah kembali dari jingga menjadi kuning**. *(Skor: 1.5 Poin)*`,
    solution_framework_template: `1. Analisis Gangguan Asam:
• Aksi penambahan ion H+: ....
• Arah pergeseran Asas Le Chatelier: ....
• Perubahan warna kromat (kuning) -> dikromat (jingga): ....

2. Analisis Gangguan Basa:
• Reaksi netralisasi H+ + OH- -> H2O: ....
• Dampak pengurangan konsentrasi reaktan [H+]: ....
• Arah pergeseran balik ke kiri dan perubahan warna kembali ke kuning: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Praktikum & Penilaian Harian Kimia SMA Fase F',
    tags: ['kesetimbangan-ionik', 'kromat-dikromat', 'pengaruh-ph', 'le-chatelier'],
  },
  {
    id: 108015,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Formulasi & Perhitungan Kuantitatif Derajat Disosiasi (alfa)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Derajat Disosiasi dan Nilai Kc pada Penguraian Gas Fosfor Pentaklorida',
    question_text: `Sebanyak $2{,}0\\ \\text{mol}$ gas $\\ce{PCl5}$ dimasukkan ke dalam bejana tertutup bervolume $5{,}0\\ \\text{Liter}$ dan dipanaskan pada suhu $T$ sehingga mengalami reaksi disosiasi:
$$\\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$$

Pada keadaan kesetimbangan, teranalisis terdapat $0{,}50\\ \\text{mol}$ gas klorin ($\\ce{Cl2}$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah nilai derajat disosiasi (alfa) serta persentase disosiasi (% alfa) dari gas PCl5 pada kondisi tersebut!',
        points: 2.5,
        rubric: 'Menentukan mol PCl5 yang terurai = 0,50 mol (karena koefisien 1:1) (1 poin). Menghitung derajat disosiasi alfa = mol terurai / mol mula-mula = 0,50 / 2,0 = 0,25 atau 25% (1.5 poin).',
        expected_answer: 'alfa = 0,25 (atau 25%)'
      },
      {
        label: 'b',
        question_text: 'Hitunglah konsentrasi molaritas seluruh gas saat setimbang dan tentukan nilai tetapan kesetimbangan konsentrasi (Kc) pada suhu T tersebut!',
        points: 2.5,
        rubric: 'Menghitung mol setimbang: PCl5 = 2,0 - 0,5 = 1,5 mol; PCl3 = Cl2 = 0,50 mol (0.5 poin). Menghitung molaritas (V=5,0 L): [PCl5] = 1,5/5 = 0,30 M; [PCl3] = [Cl2] = 0,5/5 = 0,10 M (1 poin). Menghitung Kc = (0,10 * 0,10) / 0,30 = 0,010 / 0,30 = 0,0333 ≈ 3,33 x 10^-2 (1 poin).',
        expected_answer: '[PCl5] = 0,30 M; [PCl3] = [Cl2] = 0,10 M; Kc = 0,0333 (atau 3,33 x 10^-2)'
      }
    ],
    expected_final_answer: 'a. alfa = 0,25 (25%); b. [PCl5] = 0,30 M, [PCl3] = [Cl2] = 0,10 M, Kc = 0,0333.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Derajat Disosiasi (Bobot: 2.5 Poin)**
   - Berdasarkan koefisien reaksi $1 : 1 : 1$, pembentukan $0{,}50\\ \\text{mol } \\ce{Cl2}$ berasal dari penguraian $0{,}50\\ \\text{mol } \\ce{PCl5}$.
   - Rumus derajat disosiasi ($\\alpha$):
     $$\\alpha = \\frac{\\text{Mol zat yang terurai}}{\\text{Mol zat mula-mula}} = \\frac{0{,}50\\ \\text{mol}}{2{,}0\\ \\text{mol}} = \\mathbf{0{,}25} \\quad (1{,}5\\ \\text{poin})$$
   - Persentase disosiasi:
     $$\\%\\alpha = 0{,}25 \\times 100\\% = \\mathbf{25\\%} \\quad (1{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Molaritas Setimbang dan Nilai $K_c$ (Bobot: 2.5 Poin)**
   - Jumlah mol saat setimbang:
     - $n_{\\ce{PCl5}} = 2{,}0 - 0{,}50 = 1{,}50\\ \\text{mol}$
     - $n_{\\ce{PCl3}} = 0{,}50\\ \\text{mol}$
     - $n_{\\ce{Cl2}} = 0{,}50\\ \\text{mol}$
   - Molaritas dalam wadah $5{,}0\\ \\text{L}$:
     $$[\\ce{PCl5}] = \\frac{1{,}50\\ \\text{mol}}{5{,}0\\ \\text{L}} = \\mathbf{0{,}30\\ \\text{M}}$$
     $$[\\ce{PCl3}] = \\frac{0{,}50\\ \\text{mol}}{5{,}0\\ \\text{L}} = \\mathbf{0{,}10\\ \\text{M}}$$
     $$[\\ce{Cl2}] = \\frac{0{,}50\\ \\text{mol}}{5{,}0\\ \\text{L}} = \\mathbf{0{,}10\\ \\text{M}}$$
   - Nilai tetapan $K_c$:
     $$K_c = \\frac{[\\ce{PCl3}][\\ce{Cl2}]}{[\\ce{PCl5}]} = \\frac{0{,}10 \\times 0{,}10}{0{,}30} = \\frac{0{,}010}{0{,}30} = \\mathbf{0{,}0333} \\quad (\\text{atau } 3{,}33 \\times 10^{-2})$$`,
    solution_framework_template: `1. Definisi dan Kalkulasi Alfa:
• Rasio mol terurai terhadap mol mula-mula: ....
• Nilai fraksi derajat disosiasi alfa: ....
• Konversi ke bentuk persentase: ....

2. Evaluasi Stoikiometri Setimbang dan Kc:
• Mol sisa reaktan dan mol produk: ....
• Konsentrasi molar (dibagi volume 5 L): ....
• Substitusi ke dalam ekspresi Kc: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['derajat-disosiasi-alfa', 'dekomposisi-pcl5', 'tabel-mbs', 'perhitungan-kc'],
  },

  // =========================================================================
  // KATEGORI SULIT / OLIMPIADE OSK (40% = 10 Butir Soal: ID 108001 - 108025)
  // =========================================================================
  {
    id: 108016,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Derivasi Kp sebagai Fungsi Derajat Disosiasi dan Tekanan Total',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penurunan Rumus Aljabar Kp untuk Reaksi Disosiasi Simetris A(g) <=> B(g) + C(g)',
    question_text: `Suatu gas murni $\\ce{A}$ sebanyak $a$ mol dimasukkan ke dalam wadah tertutup dan mengalami disosiasi termal membentuk dua gas baru menurut persamaan:
$$\\ce{A(g) <=> B(g) + C(g)}$$

Jika pada saat kesetimbangan tercapai derajat disosiasi gas $\\ce{A}$ adalah $\\alpha$ dan tekanan total gas dalam wadah terukur sebesar $P_{\\text{tot}}$, maka ekspresi tetapan kesetimbangan tekanan parsial ($K_p$) yang dinyatakan dalam $\\alpha$ dan $P_{\\text{tot}}$ adalah ....

A. $K_p = \\frac{\\alpha^2}{1 - \\alpha} P_{\\text{tot}}$  
B. $K_p = \\frac{\\alpha^2}{(1 + \\alpha)^2} P_{\\text{tot}}$  
C. $K_p = \\frac{\\alpha^2}{1 - \\alpha^2} P_{\\text{tot}}$  
D. $K_p = \\frac{4\\alpha^2}{1 - \\alpha^2} P_{\\text{tot}}$  
E. $K_p = \\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Penyusunan Mol pada Kesetimbangan:**
   - Mol $\\ce{A}$ terurai $= a\\alpha$
   - $n_{\\ce{A}} = a(1 - \\alpha)$
   - $n_{\\ce{B}} = a\\alpha$
   - $n_{\\ce{C}} = a\\alpha$
   - Total mol gas setimbang:
     $$n_{\\text{total}} = a(1 - \\alpha) + a\\alpha + a\\alpha = a(1 + \\alpha)$$

2. **Tekanan Parsial Masing-Masing Gas (Hukum Dalton):**
   $$P_{\\ce{A}} = \\left(\\frac{n_{\\ce{A}}}{n_{\\text{total}}}\\right) P_{\\text{tot}} = \\frac{a(1 - \\alpha)}{a(1 + \\alpha)} P_{\\text{tot}} = \\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}$$
   $$P_{\\ce{B}} = \\left(\\frac{n_{\\ce{B}}}{n_{\\text{total}}}\\right) P_{\\text{tot}} = \\frac{a\\alpha}{a(1 + \\alpha)} P_{\\text{tot}} = \\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}$$
   $$P_{\\ce{C}} = \\left(\\frac{n_{\\ce{C}}}{n_{\\text{total}}}\\right) P_{\\text{tot}} = \\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}$$

3. **Substitusi ke dalam Rumus $K_p$:**
   $$K_p = \\frac{P_{\\ce{B}} \\cdot P_{\\ce{C}}}{P_{\\ce{A}}} = \\frac{\\left(\\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}\\right) \\left(\\frac{\\alpha}{1 + \\alpha} P_{\\text{tot}}\\right)}{\\left(\\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}\\right)}$$
   $$K_p = \\frac{\\frac{\\alpha^2}{(1 + \\alpha)^2} P_{\\text{tot}}^2}{\\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}} = \\frac{\\alpha^2}{(1 - \\alpha)(1 + \\alpha)} P_{\\text{tot}} = \\mathbf{\\frac{\\alpha^2}{1 - \\alpha^2} P_{\\text{tot}}}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Seleksi OSN Kimia Tingkat Kota/Kabupaten (OSK)',
    tags: ['derivasi-aljabar-kp', 'derajat-disosiasi-alfa', 'tekanan-parsial', 'hukum-dalton'],
  },
  {
    id: 108017,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Disosiasi Dimer N2O4(g) <=> 2 NO2(g) & Nilai Numerik Kp',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Nilai Kp pada Disosiasi Dimer Gas Dinitrogen Tetroksida',
    question_text: `Gas dinitrogen tetroksida murni mengalami disosiasi membentuk gas nitrogen dioksida menurut reaksi:
$$\\ce{N2O4(g) <=> 2 NO2(g)}$$

Pada temperatur $25^\\circ\\text{C}$ dan tekanan total sistem sebesar $1{,}00\\ \\text{atm}$, derajat disosiasi gas $\\ce{N2O4}$ terukur sebesar $\\alpha = 0{,}200$ ($20{,}0\\%$)'.

Nilai tetapan kesetimbangan tekanan parsial ($K_p$) reaksi disosiasi tersebut pada $25^\\circ\\text{C}$ adalah mendekati ....

A. $0{,}042\\ \\text{atm}$  
B. $0{,}167\\ \\text{atm}$  
C. $0{,}250\\ \\text{atm}$  
D. $0{,}333\\ \\text{atm}$  
E. $0{,}833\\ \\text{atm}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Penurunan Formula $K_p$ Disosiasi Dimer $\\ce{A <=> 2 B}$:**
   - Mula-mula: $n_0$ mol $\\ce{N2O4}$.
   - Setimbang: $n(\\ce{N2O4}) = n_0(1 - \\alpha)$, $n(\\ce{NO2}) = 2n_0\\alpha$.
   - Total mol gas: $n_{\\text{tot}} = n_0(1 - \\alpha) + 2n_0\\alpha = n_0(1 + \\alpha)$.
   - Tekanan parsial:
     $$P_{\\ce{N2O4}} = \\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}, \\quad P_{\\ce{NO2}} = \\frac{2\\alpha}{1 + \\alpha} P_{\\text{tot}}$$
   - Ekspresi $K_p$:
     $$K_p = \\frac{(P_{\\ce{NO2}})^2}{P_{\\ce{N2O4}}} = \\frac{\\frac{4\\alpha^2}{(1 + \\alpha)^2} P_{\\text{tot}}^2}{\\frac{1 - \\alpha}{1 + \\alpha} P_{\\text{tot}}} = \\frac{4\\alpha^2}{1 - \\alpha^2} P_{\\text{tot}}$$
2. **Substitusi Nilai Numerik ($\\alpha = 0{,}200$, $P_{\\text{tot}} = 1{,}00\\ \\text{atm}$):**
   $$K_p = \\frac{4(0{,}200)^2}{1 - (0{,}200)^2} \\times 1{,}00 = \\frac{4 \\times 0{,}0400}{1 - 0{,}0400} \\times 1{,}00 = \\frac{0{,}1600}{0{,}9600} = \\frac{1}{6} \\approx \\mathbf{0{,}167\\ \\text{atm}}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Kabupaten/Kota',
    tags: ['disosiasi-dimer', 'kp-disosiasi', 'tekanan-total', 'gas-n2o4-no2'],
  },
  {
    id: 108018,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Persamaan van \'t Hoff & Penentuan Entalpi Reaksi Standar',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Kalkulasi Entalpi Reaksi Standar Menggunakan Persamaan van \'t Hoff Dua Suhu',
    question_text: `Nilai tetapan kesetimbangan suatu reaksi kimia reversibel terukur pada dua temperatur mutlak yang berbeda:
- Pada suhu $T_1 = 300\\ \\text{K}$, nilai $K_1 = 1{,}00 \\times 10^{-2}$
- Pada suhu $T_2 = 400\\ \\text{K}$, nilai $K_2 = 1{,}00 \\times 10^{-1}$

Jika diasumsikan perubahan entalpi standar reaksi ($\\Delta H^\\circ$) tidak bergantung pada suhu pada rentang tersebut, dan diketahui tetapan gas $R = 8{,}314\\ \\text{J}/(\\text{mol}\\cdot\\text{K})$ serta $\\ln(10) \\approx 2{,}303$, maka nilai perubahan entalpi standar reaksi ($\\Delta H^\\circ$) adalah mendekati ....

A. $-23{,}0\\ \\text{kJ/mol}$  
B. $+11{,}5\\ \\text{kJ/mol}$  
C. $-46{,}0\\ \\text{kJ/mol}$  
D. $+23{,}0\\ \\text{kJ/mol}$  
E. $+57{,}5\\ \\text{kJ/mol}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Persamaan van 't Hoff Bentuk Integral:**
   $$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$
2. **Kalkulasi Rasio $\\ln(K_2/K_1)$:**
   $$\\frac{K_2}{K_1} = \\frac{1{,}00 \\times 10^{-1}}{1{,}00 \\times 10^{-2}} = 10$$
   $$\\ln(10) \\approx 2{,}303$$
3. **Kalkulasi Selisih Suhu Terbalik:**
   $$\\frac{T_2 - T_1}{T_1 \\cdot T_2} = \\frac{400 - 300}{300 \\times 400} = \\frac{100}{120000} = \\frac{1}{1200}\\ \\text{K}^{-1}$$
4. **Menghitung $\\Delta H^\\circ$:**
   $$2{,}303 = \\frac{\\Delta H^\\circ}{8{,}314} \\times \\frac{1}{1200}$$
   $$\\Delta H^\\circ = 2{,}303 \\times 8{,}314 \\times 1200 = 19{,}147 \\times 1200 \\approx 22976\\ \\text{J/mol} \\approx \\mathbf{+23{,}0\\ \\text{kJ/mol}}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['persamaan-van-t-hoff', 'entalpi-standar', 'termodinamika-kesetimbangan', 'ketergantungan-suhu'],
  },
  {
    id: 108019,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Kesetimbangan Simultan Dua Reaksi Beriringan dengan Spesi Sekutu',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Kesetimbangan Simultan Fasa Gas dengan Reaktan Sekutu',
    question_text: `Dalam sebuah bejana kaku tertutup pada suhu tetap, berlangsung dua reaksi kesetimbangan fasa gas secara bersamaan (simultan):
1. $\\ce{A(g) <=> B(g) + C(g)} \\quad (K_{p1})$
2. $\\ce{B(g) + D(g) <=> E(g)} \\quad (K_{p2})$

Jika ke dalam bejana tersebut diinjeksikan sejumlah gas $\\ce{D(g)}$ tambahan pada suhu dan volume yang dijaga konstan, maka respon pergeseran sistem terhadap konsentrasi gas $\\ce{A}$ dan gas $\\ce{C}$ adalah ....

A. Konsentrasi gas $\\ce{A}$ berkurang dan konsentrasi gas $\\ce{C}$ bertambah  
B. Konsentrasi gas $\\ce{A}$ bertambah dan konsentrasi gas $\\ce{C}$ berkurang  
C. Konsentrasi gas $\\ce{A}$ dan gas $\\ce{C}$ kedua-duanya bertambah  
D. Konsentrasi gas $\\ce{A}$ dan gas $\\ce{C}$ kedua-duanya berkurang  
E. Konsentrasi gas $\\ce{A}$ dan gas $\\ce{C}$ sama sekali tidak berubah karena gas $\\ce{D}$ tidak terlibat dalam reaksi (1)`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Efek Penambahan Gas $\\ce{D}$ pada Reaksi (2):**
   - Penambahan gas $\\ce{D}$ ($[\\ce{D}] \\uparrow$) menyebabkan Reaksi (2) merespon sesuai Asas Le Chatelier dengan **bergeser ke arah kanan** (pembentukan $\\ce{E}$).
   - Pergeseran ke kanan pada Reaksi (2) mengkonsumsi gas $\\ce{B}$, sehingga konsentrasi gas $\\ce{B}$ di dalam wadah menurun ($[\\ce{B}] \\downarrow$).
2. **Keterkaitan dengan Reaksi (1) melalui Spesi Sekutu $\\ce{B}$:**
   - Gas $\\ce{B}$ bertindak sebagai produk pada Reaksi (1).
   - Penurunan konsentrasi $\\ce{B}$ ($[\\ce{B}] \\downarrow$) mengganggu Reaksi (1). Untuk mengembalikan nilai rasio produk terhadap reaktan agar sesuai dengan $K_{p1}$, Reaksi (1) akan **bergeser ke arah kanan** (menghasilkan lebih banyak $\\ce{B}$).
3. **Dampak pada Spesi $\\ce{A}$ dan $\\ce{C}$:**
   - Karena Reaksi (1) bergeser ke kanan:
     - Gas $\\ce{A}$ terurai lebih banyak $\\implies [\\ce{A}]$ **berkurang**.
     - Gas $\\ce{C}$ diproduksi lebih banyak $\\implies [\\ce{C}]$ **bertambah**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['kesetimbangan-simultan', 'spesi-sekutu', 'le-chatelier-majemuk', 'reaksi-berantai'],
  },
  {
    id: 108020,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Optimasi Termodinamika vs Kinetika Proses Haber-Bosch Industri',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Rasionalisasi Teknis Pemilihan Kondisi Optimum pada Sintesis Industri Amonia',
    question_text: `Reaksi sintesis amonia skala industri (proses Haber-Bosch) berlangsung menurut persamaan:
$$\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)} \\quad \\Delta H^\\circ = -92{,}4\\ \\text{kJ/mol}$$

Di pabrik kimia, proses ini tidak dijalankan pada suhu kamar dingin melainkan pada suhu kompromi sekitar $400-450^\\circ\\text{C}$, tekanan tinggi $150-250\\ \\text{atm}$, dengan katalis serbuk besi ($\\ce{Fe}$) berpromotor $\\ce{K2O}$ dan $\\ce{Al2O3}$.

Alasan ilmiah yang **paling tepat** mengapa dipilih temperatur tinggi ($400-450^\\circ\\text{C}$) meskipun secara termodinamika reaksi ini bersifat eksotermik adalah ....

A. Pada suhu rendah amonia yang terbentuk akan terurai kembali menjadi gas nitrogen dan hidrogen  
B. Suhu tinggi memperbesar nilai tetapan kesetimbangan $K_p$ sehingga persentase rendemen amonia saat setimbang meningkat  
C. Suhu tinggi diperlukan untuk mencegah keracunan racun katalis oleh uap air dan gas oksigen  
D. Suhu tinggi menurunkan tekanan total sistem sehingga volume reaktor industri dapat dibuat lebih kecil  
E. Ikatan rangkap tiga $\\ce{N#N}$ memiliki energi ikatan sangat kuat ($945\\ \\text{kJ/mol}$); pada suhu rendah laju reaksi teramat lambat sehingga suhu $400-450^\\circ\\text{C}$ merupakan kompromi kinetika agar kesetimbangan lekas tercapai`,
    expected_final_answer: 'E',
    solution_rubric: `**Kunci Jawaban: E**

**Pembahasan Langkah demi Langkah:**
1. **Dilema Termodinamika vs Kinetika:**
   - **Tinjauan Termodinamika:** Karena reaksi bersifat eksotermik ($\\Delta H < 0$), rendemen produk $\\ce{NH3}$ pada kesetimbangan akan maksimal jika reaksi dijalankan pada suhu serendah mungkin.
   - **Tinjauan Kinetika:** Molekul $\\ce{N2}$ memiliki ikatan kovalen rangkap tiga ($\\ce{N#N}$) dengan energi disosiasi yang sangat besar ($945\\ \\text{kJ/mol}$), sehingga energi aktivasinya ($E_a$) amat tinggi. Pada suhu rendah, laju reaksi praktis mendekati nol (reaksi berlangsung luar biasa lambat dan memerlukan waktu berhari-hari untuk mencapai setimbang).
2. **Kondisi Kompromi Industri:**
   Suhu $400-450^\\circ\\text{C}$ bersama katalis besi digunakan sebagai **suhu kompromi (*optimum compromise temperature*)** untuk memastikan laju reaksi cukup cepat secara komersial (tinjauan kinetika) walaupun mengorbankan sebagian rendemen teoretis kesetimbangan (tinjauan termodinamika). Penurunan rendemen akibat suhu tinggi kemudian diimbangi dengan menerapkan tekanan sangat tinggi ($150-250\\ \\text{atm}$) yang menggeser kesetimbangan ke arah koefisien gas terkecil ($\ce{NH3}$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Bidang Kimia Fisik Industri',
    tags: ['proses-haber-bosch', 'kompromi-termodinamika-kinetika', 'energi-ikatan-nitrogen', 'kondisi-optimum'],
  },
  {
    id: 108021,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Penyelesaian Persamaan Kuadratik Kesetimbangan Water-Gas Shift',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi Konsentrasi Kesetimbangan via Persamaan Kuadratik Reaksi Water-Gas Shift',
    question_text: `Reaksi konversi gas air (*water-gas shift reaction*) penting dalam produksi gas hidrogen industri:
$$\\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)} \\quad K_c = 9{,}00 \\quad (\\text{pada } T = 700\\ \\text{K})$$

Ke dalam sebuah reaktor bervolume tetap $1{,}00\\ \\text{Liter}$ dimasukkan $0{,}500\\ \\text{mol}$ gas $\\ce{CO}$ dan $0{,}500\\ \\text{mol}$ uap air $\\ce{H2O}$. Reaktor kemudian dipanaskan hingga suhu $700\\ \\text{K}$ dan dibiarkan mencapai kesetimbangan.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan aljabar kesetimbangan dalam variabel x (di mana x adalah mol CO yang bereaksi per liter) dan selesaikan nilai x secara eksak!',
        points: 5,
        rubric: 'Menyusun tabel MBS: [CO] = 0,500 - x, [H2O] = 0,500 - x, [CO2] = x, [H2] = x (2 poin). Menuliskan Kc = x^2 / (0,500 - x)^2 = 9,00 (1.5 poin). Menarik akar kuadrat kedua ruas: x / (0,500 - x) = 3,00, menghasilkan x = 1,500 - 3,00x => 4,00x = 1,500 => x = 0,375 M (1.5 poin).',
        expected_answer: 'Persamaan: x^2 / (0,500 - x)^2 = 9,00; x = 0,375 M'
      },
      {
        label: 'b',
        question_text: 'Tentukan konsentrasi molar masing-masing spesi ([CO], [H2O], [CO2], [H2]) pada keadaan kesetimbangan serta hitung persentase konversi (% konversi) dari gas CO!',
        points: 5,
        rubric: 'Menghitung konsentrasi setimbang: [CO] = [H2O] = 0,500 - 0,375 = 0,125 M (1.5 poin); [CO2] = [H2] = 0,375 M (1.5 poin). Menghitung % konversi CO = (0,375 / 0,500) * 100% = 75,0% (2 poin).',
        expected_answer: '[CO] = 0,125 M; [H2O] = 0,125 M; [CO2] = 0,375 M; [H2] = 0,375 M; % konversi CO = 75,0%'
      }
    ],
    expected_final_answer: 'a. x = 0,375 M; b. [CO] = [H2O] = 0,125 M, [CO2] = [H2] = 0,375 M, % konversi CO = 75,0%.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Formulasi Aljabar dan Solusi Nilai $x$ (Bobot: 5 Poin)**
   - Karena volume $V = 1{,}00\\ \\text{L}$, maka jumlah mol setara dengan nilai molaritas ($[\\text{M}]$).
   - Susun tabel konsentrasi M-B-S:
     - Mula-mula: $[\\ce{CO}]_0 = 0{,}500\\ \\text{M}$, $[\\ce{H2O}]_0 = 0{,}500\\ \\text{M}$, $[\\ce{CO2}]_0 = 0$, $[\\ce{H2}]_0 = 0$.
     - Bereaksi: $-x$, $-x$, $+x$, $+x$.
     - Setimbang: $[\\ce{CO}] = 0{,}500 - x$, $[\\ce{H2O}] = 0{,}500 - x$, $[\\ce{CO2}] = x$, $[\\ce{H2}] = x$. *(Skor: 2.0 Poin)*
   - Substitusi ke rumus $K_c$:
     $$K_c = \\frac{[\\ce{CO2}][\\ce{H2}]}{[\\ce{CO}][\\ce{H2O}]} = \\frac{x^2}{(0{,}500 - x)^2} = 9{,}00 \\quad (1{,}5\\ \\text{poin})$$
   - Karena kedua ruas merupakan bentuk kuadrat sempurna, lakukan penarikan akar kuadrat:
     $$\\frac{x}{0{,}500 - x} = \\sqrt{9{,}00} = 3{,}00$$
     $$x = 3{,}00(0{,}500 - x) = 1{,}500 - 3{,}00x$$
     $$4{,}00x = 1{,}500 \\implies \\mathbf{x = 0{,}375\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$

2. **Sub-soal (b): Konsentrasi Setimbang dan Persen Konversi (Bobot: 5 Poin)**
   - Konsentrasi molar masing-masing spesi:
     $$[\\ce{CO}] = 0{,}500 - 0{,}375 = \\mathbf{0{,}125\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
     $$[\\ce{H2O}] = 0{,}500 - 0{,}375 = \\mathbf{0{,}125\\ \\text{M}}$$
     $$[\\ce{CO2}] = x = \\mathbf{0{,}375\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
     $$[\\ce{H2}] = x = \\mathbf{0{,}375\\ \\text{M}}$$
   - Persentase konversi gas $\\ce{CO}$:
     $$\\%\\text{Konversi} = \\frac{[\\ce{CO}]_{\\text{bereaksi}}}{[\\ce{CO}]_{\\text{awal}}} \\times 100\\% = \\frac{0{,}375\\ \\text{M}}{0{,}500\\ \\text{M}} \\times 100\\% = \\mathbf{75{,}0\\%} \\quad (2{,}0\\ \\text{poin})$$`,
    solution_framework_template: `1. Pemodelan Stoikiometri Tabel M-B-S:
• Komposisi awal reaktan dan produk: ....
• Variabel x mol per liter yang bereaksi: ....
• Bentuk kuadrat ekspresi Kc: ....
• Penyelesaian aljabar akar kuadrat: ....

2. Evaluasi Komposisi Setimbang dan Efisiensi Konversi:
• Konsentrasi sisa reaktan [CO] dan [H2O]: ....
• Konsentrasi pembentukan produk [CO2] dan [H2]: ....
• Kalkulasi persen konversi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Kabupaten/Kota',
    tags: ['water-gas-shift', 'persamaan-kuadrat', 'persen-konversi', 'perhitungan-kc'],
  },
  {
    id: 108022,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Kaitan Teoretis Kinetika dan Termodinamika Kesetimbangan',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Pembuktian Hubungan Kc = k_maju / k_balik dan Analisis Pengaruh Katalis',
    question_text: `Tinjau suatu reaksi elementer reversibel fasa gas satu tahap:
$$\\ce{A(g) + B(g) <=>[k_1][k_{-1}] C(g) + D(g)}$$
di mana $k_1$ adalah tetapan laju reaksi maju dan $k_{-1}$ adalah tetapan laju reaksi balik. Reaksi berlangsung endotermik dengan energi aktivasi maju $E_{a,1}$ dan energi aktivasi balik $E_{a,-1}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan kriteria keadaan kesetimbangan dinamis v_maju = v_balik, buktikan secara matematis bahwa tetapan kesetimbangan Kc sama dengan perbandingan tetapan laju k1 / k-1!',
        points: 5,
        rubric: 'Menuliskan hukum laju reaksi elementer: v_maju = k1 [A][B] dan v_balik = k-1 [C][D] (2 poin). Menyamakan pada kesetimbangan: k1 [A][B] = k-1 [C][D] (1.5 poin). Menyusun ulang rasio: [C][D] / ([A][B]) = k1 / k-1, sehingga Kc = k1 / k-1 terbukti (1.5 poin).',
        expected_answer: 'v_maju = k1 [A][B] = v_balik = k-1 [C][D] => Kc = [C][D]/([A][B]) = k1/k-1'
      },
      {
        label: 'b',
        question_text: 'Dengan menggunakan persamaan Arrhenius k = A exp(-Ea / RT), jelaskan mengapa penambahan katalisator mempercepat tercapainya kesetimbangan tanpa mengubah nilai numerik tetapan kesetimbangan Kc!',
        points: 5,
        rubric: 'Menjelaskan katalis menurunkan energi aktivasi maju dan balik sebesar nilai yang sama (Delta Ea) melalui rute reaksi baru (2 poin). Menurut Arrhenius, k1 dan k-1 meningkat dengan faktor kelipatan eksponensial yang persis sama, yaitu exp(Delta Ea / RT) (1.5 poin). Karena kedua tetapan laju meningkat dengan pengali yang sama, rasio k1/k-1 = Kc tidak berubah sama sekali (1.5 poin).',
        expected_answer: 'Katalis menurunkan Ea maju dan balik sebesar Delta Ea yang sama, sehingga k1 dan k-1 meningkat dengan faktor kelipatan yang identik; rasio k1/k-1 = Kc tetap konstan.'
      }
    ],
    expected_final_answer: 'a. Terbukti Kc = k1 / k-1; b. Katalis menurunkan Ea maju & balik dengan nilai Delta Ea identik, faktor kelipatan k1 & k-1 sama sehingga Kc konstan.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Pembuktian Hubungan $K_c = k_1 / k_{-1}$ (Bobot: 5 Poin)**
   - Karena merupakan reaksi elementer satu tahap, hukum laju reaksi ditentukan langsung oleh koefisien molekularitasnya:
     $$\\text{Laju reaksi maju: } v_{\\text{maju}} = k_1 [\\ce{A}][\\ce{B}] \\quad (1{,}0\\ \\text{poin})$$
     $$\\text{Laju reaksi balik: } v_{\\text{balik}} = k_{-1} [\\ce{C}][\\ce{D}] \\quad (1{,}0\\ \\text{poin})$$
   - Pada keadaan kesetimbangan dinamis, laju maju sama dengan laju balik:
     $$v_{\\text{maju}} = v_{\\text{balik}} \\implies k_1 [\\ce{A}][\\ce{B}] = k_{-1} [\\ce{C}][\\ce{D}] \\quad (1{,}5\\ \\text{poin})$$
   - Dengan menyusun ulang suku-suku konsentrasi dan tetapan laju:
     $$\\frac{[\\ce{C}][\\ce{D}]}{[\\ce{A}][\\ce{B}]} = \\frac{k_1}{k_{-1}}$$
   - Ruas kiri merupakan definisi dari tetapan kesetimbangan konsentrasi ($K_c$), sehingga terbukti:
     $$\\mathbf{K_c = \\frac{k_1}{k_{-1}}} \\quad (1{,}5\\ \\text{poin})$$

2. **Sub-soal (b): Asas Arrhenius Penambahan Katalis (Bobot: 5 Poin)**
   - Berdasarkan persamaan Arrhenius: $k = A \\cdot e^{-\\frac{E_a}{RT}}$.
   - Katalisator bekerja dengan menyediakan mekanisme jalur reaksi alternatif yang memiliki energi aktivasi lebih rendah. *(Skor: 1.0 Poin)*
   - Kompleks teraktivasi yang baru menurunkan energi aktivasi reaksi maju ($E_{a,1}$) dan energi aktivasi reaksi balik ($E_{a,-1}$) dengan **penurunan energi yang persis sama besar ($\\Delta E_a$)**:
     $$E_{a,1}' = E_{a,1} - \\Delta E_a \\quad \\text{dan} \\quad E_{a,-1}' = E_{a,-1} - \\Delta E_a \\quad (1{,}0\\ \\text{poin})$$
   - Akibatnya, tetapan laju reaksi maju dan balik meningkat dengan faktor pengali yang persis identik:
     $$k_1' = k_1 \\cdot e^{+\\frac{\\Delta E_a}{RT}} \\quad \\text{dan} \\quad k_{-1}' = k_{-1} \\cdot e^{+\\frac{\\Delta E_a}{RT}} \\quad (1{,}5\\ \\text{poin})$$
   - Saat dibagi untuk mencari nilai tetapan kesetimbangan baru ($K_c'$):
     $$K_c' = \\frac{k_1'}{k_{-1}'} = \\frac{k_1 \\cdot e^{+\\frac{\\Delta E_a}{RT}}}{k_{-1} \\cdot e^{+\\frac{\\Delta E_a}{RT}}} = \\frac{k_1}{k_{-1}} = \\mathbf{K_c} \\quad (1{,}5\\ \\text{poin})$$
   - **Kesimpulan:** Katalis mempercepat tercapainya kesetimbangan (karena laju maju dan balik meningkat), tetapi nilai $K_c$ terbukti **tidak mengalami perubahan sama sekali**.`,
    solution_framework_template: `1. Penurunan Persamaan Kesetimbangan Mikroskopis:
• Persamaan laju diferensial elementer maju dan balik: ....
• Syarat kesetimbangan dinamis v_maju = v_balik: ....
• Penataan rasio konsentrasi dan rasio tetapan k: ....

2. Analisis Termodinamika & Arrhenius Efek Katalis:
• Formulasi persamaan Arrhenius: ....
• Penurunan energi aktivasi simetris (Delta Ea): ....
• Pembuktian rasio k1/k-1 tetap konstan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['kinetika-kesetimbangan', 'persamaan-arrhenius', 'peran-katalis', 'reaksi-elementer'],
  },
  {
    id: 108023,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Hubungan Termodinamika Energi Bebas Gibbs Delta G° dan Nilai K',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Perhitungan Energi Bebas Gibbs dan Entropi Standar dari Tetapan Kesetimbangan',
    question_text: `Reaksi dimerisasi gas nitrogen dioksida berlangsung menurut persamaan termokimia:
$$\\ce{2 NO2(g) <=> N2O4(g)} \\quad \\Delta H^\\circ = -57{,}20\\ \\text{kJ/mol}$$

Pada temperatur standar $T = 298\\ \\text{K}$, nilai tetapan kesetimbangan tekanan parsial terukur sebesar $K_p = 6{,}67$.
Diketahui tetapan gas universal $R = 8{,}314\\ \\text{J}/(\\text{mol}\\cdot\\text{K})$ dan $\\ln(6{,}67) \\approx 1{,}898$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah nilai perubahan energi bebas Gibbs standar (Delta G°) untuk reaksi dimerisasi tersebut pada 298 K dalam satuan kJ/mol!',
        points: 5,
        rubric: 'Menuliskan rumus termodinamika Delta G° = -RT ln(Kp) (2 poin). Mensubstitusi nilai: Delta G° = -(8,314 J/(mol K)) * (298 K) * (1,898) = -4699 J/mol = -4,70 kJ/mol (3 poin).',
        expected_answer: 'Delta G° = -4,70 kJ/mol'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan relasi fundamental Delta G° = Delta H° - T Delta S°, hitunglah nilai perubahan entropi standar reaksi (Delta S°) dalam J/(mol·K) dan jelaskan alasan fisis mengapa nilai Delta S° bernilai negatif!',
        points: 5,
        rubric: 'Menyusun ulang rumus: Delta S° = (Delta H° - Delta G°) / T (1.5 poin). Mensubstitusi nilai: Delta S° = (-57200 - (-4700)) / 298 = -52500 / 298 = -176,2 J/(mol K) (2 poin). Menjelaskan bahwa reaksi menggabungkan 2 molekul gas NO2 menjadi 1 molekul gas N2O4, sehingga derajat ketidakteraturan (entropi) sistem berkurang (1.5 poin).',
        expected_answer: 'Delta S° = -176,2 J/(mol·K); bernilai negatif karena penggabungan 2 mol gas menjadi 1 mol gas menurunkan derajat ketidakteraturan.'
      }
    ],
    expected_final_answer: 'a. Delta G° = -4,70 kJ/mol; b. Delta S° = -176,2 J/(mol·K), bernilai negatif karena penurunan jumlah mol gas (ketidakteraturan berkurang).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Perubahan Energi Bebas Gibbs Standar (Bobot: 5 Poin)**
   - Hubungan termodinamika universal antara $\\Delta G^\\circ$ dan tetapan kesetimbangan $K_p$:
     $$\\Delta G^\\circ = -R \\cdot T \\cdot \\ln(K_p) \\quad (2{,}0\\ \\text{poin})$$
   - Substitusi data numerik:
     $$\\Delta G^\\circ = -(8{,}314\\ \\text{J}/(\\text{mol}\\cdot\\text{K})) \\times (298\\ \\text{K}) \\times (1{,}898)$$
     $$\\Delta G^\\circ = -2477{,}57 \\times 1{,}898 = -4702\\ \\text{J/mol} = \\mathbf{-4{,}70\\ \\text{kJ/mol}} \\quad (3{,}0\\ \\text{poin})$$
   - Nilai $\\Delta G^\\circ < 0$ menunjukkan pembentukan $\\ce{N2O4}$ berlangsung spontan pada kondisi standar $298\\ \\text{K}$.

2. **Sub-soal (b): Perhitungan dan Interpretasi Fisis Entropi Standar (Bobot: 5 Poin)**
   - Dari persamaan Gibbs-Helmholtz:
     $$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ \\implies T\\Delta S^\\circ = \\Delta H^\\circ - \\Delta G^\\circ \\implies \\Delta S^\\circ = \\frac{\\Delta H^\\circ - \\Delta G^\\circ}{T} \\quad (1{,}5\\ \\text{poin})$$
   - Konversi $\\Delta H^\\circ = -57{,}20\\ \\text{kJ/mol} = -57200\\ \\text{J/mol}$:
     $$\\Delta S^\\circ = \\frac{-57200 - (-4702)}{298} = \\frac{-52498\\ \\text{J/mol}}{298\\ \\text{K}} = \\mathbf{-176{,}2\\ \\text{J}/(\\text{mol}\\cdot\\text{K})} \\quad (2{,}0\\ \\text{poin})$$
   - **Rasionalisasi Fisis:**
     Nilai $\\Delta S^\\circ$ bertanda negatif karena pada reaksi dimerisasi ini, dua molekul gas terpisah berderajat kebebasan translasi tinggi bergabung membentuk satu molekul gas $\\ce{N2O4}$ yang lebih terstruktur. Pengurangan jumlah partikel gas ($\\Delta n_g = 1 - 2 = -1$) menyebabkan penurunan derajat ketidakteraturan (*microstates*) sistem secara signifikan. *(Skor: 1.5 Poin)*`,
    solution_framework_template: `1. Formulasi Energi Bebas Gibbs:
• Rumus termodinamika Delta G° = -RT ln K: ....
• Substitusi tetapan gas R, suhu T, dan ln K: ....
• Nilai numerik Delta G° dalam kJ/mol: ....

2. Evaluasi Entropi Standar Reaksi:
• Persamaan Gibbs-Helmholtz: ....
• Perhitungan selisih (Delta H° - Delta G°) / T: ....
• Nilai kuantitatif Delta S°: ....
• Interpretasi fisis penurunan jumlah mol gas: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['energi-bebas-gibbs', 'entropi-standar', 'relasi-delta-g-k', 'termodinamika-kesetimbangan'],
  },
  {
    id: 108024,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Penentuan Derajat Disosiasi dari Densitas Uap & Massa Molar Efektif',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Derajat Disosiasi N2O4 dari Pengukuran Massa Jenis Uap Campuran Gas',
    question_text: `Gas dinitrogen tetroksida murni ($\\ce{N2O4}$, massa molar teoritis $M_r = 92{,}0\\ \\text{g/mol}$) mengalami disosiasi parsial di dalam bejana tertutup pada suhu $45^\\circ\\text{C}$ ($318\\ \\text{K}$) dan tekanan atmosfer $P = 1{,}00\\ \\text{atm}$:
$$\\ce{N2O4(g) <=> 2 NO2(g)}$$

Pengukuran massa jenis uap campuran gas setimbang tersebut pada kondisi di atas menghasilkan nilai densitas $\\rho = 2{,}65\\ \\text{g/L}$. Tetapan gas ideal $R = 0{,}0821\\ \\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah massa molar efektif rata-rata (M_r,efektif) dari campuran gas kesetimbangan tersebut menggunakan persamaan gas ideal rho = (P * M_r) / (R * T)!',
        points: 5,
        rubric: 'Menuliskan rumus M_r,efektif = (rho * R * T) / P (2 poin). Mensubstitusi data: M_r,efektif = (2,65 * 0,0821 * 318) / 1,00 = 69,18 g/mol (3 poin).',
        expected_answer: 'M_r,efektif = 69,2 g/mol'
      },
      {
        label: 'b',
        question_text: 'Turunkan hubungan M_r,efektif = M_r,teoritis / (1 + alfa) dan tentukan nilai derajat disosiasi (alfa) serta persentase gas N2O4 yang terurai pada suhu 45 °C tersebut!',
        points: 5,
        rubric: 'Menurunkan hubungan: massa total konstan m = n0 * M_r,teoritis, sedangkan n_total = n0(1 + alfa), sehingga M_r,efektif = m / n_total = M_r,teoritis / (1 + alfa) (2.5 poin). Menghitung 1 + alfa = 92,0 / 69,18 = 1,330, sehingga alfa = 0,330 atau 33,0% (2.5 poin).',
        expected_answer: 'alfa = 0,330 (atau 33,0%)'
      }
    ],
    expected_final_answer: 'a. M_r,efektif = 69,2 g/mol; b. alfa = 0,330 (33,0%).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Massa Molar Efektif Rata-Rata (Bobot: 5 Poin)**
   - Berdasarkan persamaan keadaan gas ideal:
     $$P \\cdot V = n \\cdot R \\cdot T = \\frac{m}{M_r} R \\cdot T \\implies \\rho = \\frac{m}{V} = \\frac{P \\cdot M_r}{R \\cdot T} \\quad (2{,}0\\ \\text{poin})$$
   - Dengan menyusun ulang untuk mencari massa molar rata-rata campuran ($M_{r,\\text{efektif}}$):
     $$M_{r,\\text{efektif}} = \\frac{\\rho \\cdot R \\cdot T}{P} \\quad (1{,}0\\ \\text{poin})$$
   - Substitusi nilai numerik:
     $$M_{r,\\text{efektif}} = \\frac{2{,}65\\ \\text{g/L} \\times 0{,}0821\\ \\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 318\\ \\text{K}}{1{,}00\\ \\text{atm}}$$
     $$M_{r,\\text{efektif}} = \\mathbf{69{,}18\\ \\text{g/mol} \\approx 69{,}2\\ \\text{g/mol}} \\quad (2{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Penurunan Rumus & Perhitungan Derajat Disosiasi (Bobot: 5 Poin)**
   - Misalkan jumlah mol awal $\\ce{N2O4}$ murni adalah $n_0$.
   - Massa total gas tidak berubah (Hukum Kekekalan Massa):
     $$m = n_0 \\times M_{r,\\ce{N2O4}} = 92{,}0 n_0$$
   - Pada saat setimbang, jumlah mol total gas menjadi:
     $$n_{\\text{total}} = n_0(1 - \\alpha) + 2n_0\\alpha = n_0(1 + \\alpha)$$
   - Maka massa molar rata-rata campuran gas adalah:
     $$M_{r,\\text{efektif}} = \\frac{m}{n_{\\text{total}}} = \\frac{n_0 \\times M_{r,\\ce{N2O4}}}{n_0(1 + \\alpha)} = \\frac{M_{r,\\ce{N2O4}}}{1 + \\alpha} \\quad (2{,}5\\ \\text{poin})$$
   - Menghitung nilai $\\alpha$:
     $$1 + \\alpha = \\frac{M_{r,\\ce{N2O4}}}{M_{r,\\text{efektif}}} = \\frac{92{,}0}{69{,}18} = 1{,}3299 \\approx 1{,}330$$
     $$\\alpha = 1{,}330 - 1 = \\mathbf{0{,}330} \\quad (\\text{atau } \\mathbf{33{,}0\\%}) \\quad (2{,}5\\ \\text{poin})$$`,
    solution_framework_template: `1. Densitas Gas Ideal dan Bobot Molekul Rata-Rata:
• Formulasi rho = (P * Mr) / (RT): ....
• Substitusi variabel eksperimen: ....
• Nilai numerik M_r,efektif: ....

2. Derivasi Kekekalan Massa dan Disosiasi:
• Hubungan mol total n_tot = n0(1 + alfa): ....
• Pembuktian M_r,efektif = M_r,teoritis / (1 + alfa): ....
• Perhitungan derajat disosiasi alfa dan persentase: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP) & Pelatnas',
    tags: ['densitas-uap', 'massa-molar-efektif', 'derajat-disosiasi-alfa', 'hukum-gas-ideal'],
  },
  {
    id: 108025,
    sma_topic_number: 8,
    sma_topic_id: 108,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Kajian Termodinamika Kalsinasi Batu Kapur CaCO3 pada Industri Semen',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi Tekanan Disosiasi CO2 dan Temperatur Kalsinasi Spontan Kalsit',
    question_text: `Kalsinasi batu kapur (kalsium karbonat, $\\ce{CaCO3}$) untuk menghasilkan kapur tohor ($\\ce{CaO}$) dalam industri semen berlangsung menurut kesetimbangan heterogen:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$$

Data termodinamika standar pada suhu $298\\ \\text{K}$ adalah:
- $\\Delta H^\\circ = +178{,}3\\ \\text{kJ/mol}$
- $\\Delta S^\\circ = +160{,}5\\ \\text{J}/(\\text{mol}\\cdot\\text{K})$
- Tetapan gas ideal $R = 8{,}314\\ \\text{J}/(\\text{mol}\\cdot\\text{K})$

Asumsikan nilai perubahan entalpi standar ($\\Delta H^\\circ$) dan entropi standar ($\\Delta S^\\circ$) konstan terhadap temperatur.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Turunkan persamaan hubungan tekanan parsial gas CO2 (P_CO2 dalam satuan atm) sebagai fungsi temperatur T menggunakan relasi termodinamika Delta G° = Delta H° - T Delta S° = -RT ln(Kp), di mana Kp = P_CO2!',
        points: 5,
        rubric: 'Menyamakan -RT ln(Kp) = Delta H° - T Delta S° (1.5 poin). Membagi dengan -RT: ln(Kp) = -Delta H° / (RT) + Delta S° / R (1.5 poin). Menghubungkan Kp = P_CO2 sehingga diperoleh ln(P_CO2) = -(178300 / (8,314 T)) + (160,5 / 8,314) = -21446 / T + 19,30 (2 poin).',
        expected_answer: 'ln(P_CO2) = -21446 / T + 19,30 (atau P_CO2 = exp(-Delta H°/RT + Delta S°/R))'
      },
      {
        label: 'b',
        question_text: 'Tentukan temperatur minimum (dalam satuan Kelvin dan derajat Celsius) yang harus dicapai dalam tungku pembakaran agar dekomposisi batu kapur berlangsung spontan di udara terbuka (yaitu ketika tekanan disosiasi P_CO2 mencapai minimal 1,00 atm)!',
        points: 5,
        rubric: 'Menetapkan syarat dekomposisi spontan di udara terbuka: P_CO2 >= 1,00 atm, sehingga ln(P_CO2) = ln(1) = 0 atau Delta G° <= 0 (2 poin). Menyelesaikan T_min = Delta H° / Delta S° = 178300 J/mol / 160,5 J/(mol K) (1.5 poin). Menghitung T_min = 1110,9 K ≈ 1111 K, atau dalam Celsius: 1110,9 - 273,15 = 837,75 °C ≈ 838 °C (1.5 poin).',
        expected_answer: 'T_min = 1111 K (atau 838 °C)'
      }
    ],
    expected_final_answer: 'a. ln(P_CO2) = -21446 / T + 19,30; b. T_min = 1111 K (838 °C).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Penurunan Persamaan Tekanan Disosiasi (Bobot: 5 Poin)**
   - Pada kesetimbangan heterogen $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$, karena $\\ce{CaCO3}$ dan $\\ce{CaO}$ adalah padatan murni, tetapan kesetimbangan tekanan parsial adalah:
     $$K_p = P_{\\ce{CO2}} \\quad (1{,}0\\ \\text{poin})$$
   - Berdasarkan termodinamika kimia:
     $$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -R \\cdot T \\cdot \\ln(K_p) \\quad (1{,}5\\ \\text{poin})$$
   - Dengan membagi kedua ruas dengan $-R \\cdot T$:
     $$\\ln(K_p) = \\ln(P_{\\ce{CO2}}) = -\\frac{\\Delta H^\\circ}{R \\cdot T} + \\frac{\\Delta S^\\circ}{R} \\quad (1{,}0\\ \\text{poin})$$
   - Substitusi nilai numerik $\\Delta H^\\circ = 178300\\ \\text{J/mol}$, $\\Delta S^\\circ = 160{,}5\\ \\text{J}/(\\text{mol}\\cdot\\text{K})$, dan $R = 8{,}314\\ \\text{J}/(\\text{mol}\\cdot\\text{K})$:
     $$\\ln(P_{\\ce{CO2}}) = -\\frac{178300}{8{,}314 \\cdot T} + \\frac{160{,}5}{8{,}314}$$
     $$\\mathbf{\\ln(P_{\\ce{CO2}}) = -\\frac{21446}{T} + 19{,}30} \\quad (1{,}5\\ \\text{poin})$$

2. **Sub-soal (b): Temperatur Dekomposisi Spontan Kalsit (Bobot: 5 Poin)**
   - Di udara terbuka bertekanan atmosfer normal ($1{,}00\\ \\text{atm}$), batu kapur akan terdekomposisi secara spontan dan kontinu apabila tekanan uap disosiasi $\\ce{CO2}$ yang dihasilkan mampu melawan tekanan lingkungan, yaitu ketika:
     $$P_{\\ce{CO2}} \\ge 1{,}00\\ \\text{atm} \\iff \\ln(P_{\\ce{CO2}}) \\ge \\ln(1) = 0 \\iff \\Delta G^\\circ \\le 0 \\quad (2{,}0\\ \\text{poin})$$
   - Pada kondisi ambang batas setimbang ($\Delta G^\circ = 0$):
     $$\\Delta H^\\circ - T_{\\text{min}} \\Delta S^\\circ = 0 \\implies T_{\\text{min}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} \\quad (1{,}5\\ \\text{poin})$$
   - Perhitungan temperatur minimum:
     $$T_{\\text{min}} = \\frac{178300\\ \\text{J/mol}}{160{,}5\\ \\text{J}/(\\text{mol}\\cdot\\text{K})} = \\mathbf{1110{,}9\\ \\text{K} \\approx 1111\\ \\text{K}} \\quad (1{,}0\\ \\text{poin})$$
   - Konversi ke derajat Celsius:
     $$T_{\\text{min}} = 1110{,}9 - 273{,}15 = \\mathbf{837{,}75^\\circ\\text{C} \\approx 838^\\circ\\text{C}} \\quad (0{,}5\\ \\text{poin})$$
   - **Makna Industri:** Di pabrik semen, tungku putar (*rotary kiln*) dipanaskan di atas $900^\\circ\\text{C}$ (biasanya $900-1000^\circ\\text{C}$) untuk memastikan seluruh batu kapur terurai sempurna menjadi kapur tohor dengan laju yang sangat cepat.`,
    solution_framework_template: `1. Penurunan Fungsi Tekanan Disosiasi Gas:
• Rumus Kp kesetimbangan heterogen kalsinasi: ....
• Relasi Gibbs-Helmholtz Delta G° = -RT ln Kp: ....
• Bentuk persamaan ln(P_CO2) = -A/T + B: ....

2. Temperatur Transisi Spontanitas Termodinamika:
• Syarat pembakaran spontan pada tekanan 1 atm: ....
• Formulasi T_min = Delta H° / Delta S°: ....
• Nilai numerik dalam Kelvin dan Celsius: ....
• Relevansi operasional suhu rotary kiln pabrik semen: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP) & Pelatnas',
    tags: ['kalsinasi-batu-kapur', 'tekanan-disosiasi', 'kesetimbangan-heterogen', 'suhu-spontanitas', 'termodinamika-industri'],
  },
];
