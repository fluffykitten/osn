/**
 * smaQuestionsTopic14Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F)
 * 
 * BATCH 14: Reaksi Redoks & Sel Elektrokimia SMA
 * Topik 14 SMA | Modul ID 114 | OSN Pilar 7 (Elektrokimia)
 * 
 * Distribusi:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian Terstruktur)  [ID 114001 - 114025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 114001 - 114025]
 * - 40% Sulit  (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 114001 - 114025]
 * Total: 25 Butir Soal Terstandarisasi (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_14_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 114001 - 114025)
  // =========================================================================
  {
    id: 114001,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Kaidah Baku Bilangan Oksidasi',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Bilangan Oksidasi Mangan dalam Berbagai Senyawa Kimia',
    question_text: `Unsur transisi mangan ($\\ce{Mn}$) dapat membentuk berbagai macam senyawa dengan tingkat oksidasi yang bervariasi. Bilangan oksidasi mangan dalam senyawa $\\ce{KMnO4}$, $\\ce{K2MnO4}$, $\\ce{MnO2}$, dan $\\ce{MnSO4}$ berturut-turut adalah ....

A. $+7, +6, +4, +2$  
B. $+7, +5, +4, +2$  
C. $+6, +7, +2, +4$  
D. $+7, +6, +2, +2$  
E. $+5, +6, +4, +2$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Senyawa $\\ce{KMnO4}$ (Kalium Permanganat):**
   - Biloks $\\ce{K} = +1$ (golongan IA), biloks $\\ce{O} = -2$.
   - Jumlah biloks $= 0$:
     $$(+1) + \\text{Biloks Mn} + 4(-2) = 0 \\implies \\text{Biloks Mn} - 7 = 0 \\implies \\text{Biloks Mn} = +7$$
2. **Senyawa $\\ce{K2MnO4}$ (Kalium Manganat):**
   - Biloks $\\ce{K} = +1$, biloks $\\ce{O} = -2$.
   - Jumlah biloks $= 0$:
     $$2(+1) + \\text{Biloks Mn} + 4(-2) = 0 \\implies \\text{Biloks Mn} - 6 = 0 \\implies \\text{Biloks Mn} = +6$$
3. **Senyawa $\\ce{MnO2}$ (Mangan Dioksida / Pirolusit):**
   - Biloks $\\ce{O} = -2$.
   - Jumlah biloks $= 0$:
     $$\\text{Biloks Mn} + 2(-2) = 0 \\implies \\text{Biloks Mn} = +4$$
4. **Senyawa $\\ce{MnSO4}$ (Mangan(II) Sulfat):**
   - Gugus sulfat bermuatan $-2$ ($\\ce{SO4^2-}$).
   - Jumlah biloks $= 0$:
     $$\\text{Biloks Mn} + (-2) = 0 \\implies \\text{Biloks Mn} = +2$$
5. **Kesimpulan:**
   Urutan bilangan oksidasi mangan berturut-turut adalah $+7, +6, +4, +2$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Ulangan Harian Kimia SMA Fase F',
    tags: ['bilangan-oksidasi', 'mangan', 'aturan-biloks', 'reaksi-redoks'],
  },
  {
    id: 114002,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Konsep Reaksi Autoredoks (Disproporsionasi)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Reaksi Disproporsionasi Klorin dalam Suasana Basa',
    question_text: `Reaksi autoredoks (disproporsionasi) adalah reaksi kimia di mana satu unsur yang sama secara simultan mengalami peristiwa oksidasi sekaligus reduksi. Persamaan reaksi berikut yang tergolong reaksi disproporsionasi adalah ....

A. $\\ce{Zn + 2HCl -> ZnCl2 + H2}$  
B. $\\ce{Cl2 + 2NaOH -> NaCl + NaClO + H2O}$  
C. $\\ce{2H2S + SO2 -> 3S + 2H2O}$  
D. $\\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$  
E. $\\ce{CuSO4 + Zn -> ZnSO4 + Cu}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Reaksi B:**
   $$\\ce{\\overset{0}{Cl2} + 2NaOH -> Na\\overset{-1}{Cl} + Na\\overset{+1}{Cl}O + H2O}$$
   - Pada reaktan $\\ce{Cl2}$, klorin berupa unsur bebas dengan biloks $0$.
   - Pada produk $\\ce{NaCl}$, atom $\\ce{Cl}$ memiliki biloks $-1$ (mengalami penurunan biloks dari $0 \\to -1$, yaitu **reaksi reduksi**).
   - Pada produk $\\ce{NaClO}$, atom $\\ce{Cl}$ memiliki biloks $+1$ (mengalami kenaikan biloks dari $0 \\to +1$, yaitu **reaksi oksidasi**).
   - Karena satu spesi klorin yang sama mengalami oksidasi sekaligus reduksi, maka reaksi B adalah **reaksi disproporsionasi (autoredoks)**.
2. **Evaluasi Opsi Lain:**
   - Opsi A: $\\ce{Zn}$ teroksidasi ($0 \\to +2$), $\\ce{H}$ tereduksi ($+1 \\to 0$) (redoks biasa).
   - Opsi C: Sulfur dari $\\ce{H2S}$ (biloks $-2$) dan dari $\\ce{SO2}$ (biloks $+4$) bereaksi menghasilkan $\\ce{S}$ (biloks $0$) $\\implies$ ini adalah **reaksi konproporsionasi** (kebalikan disproporsionasi).
   - Opsi D: $\\ce{Fe}$ tereduksi ($+3 \\to 0$), $\\ce{C}$ teroksidasi ($+2 \\to +4$) (redoks biasa).
   - Opsi E: $\\ce{Zn}$ teroksidasi ($0 \\to +2$), $\\ce{Cu}$ tereduksi ($+2 \\to 0$) (redoks biasa).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['disproporsionasi', 'autoredoks', 'klorin', 'bilangan-oksidasi'],
  },
  {
    id: 114003,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Arsitektur Sel Volta & Notasi IUPAC',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Interpretasi Notasi Sel Volta Daniell dan Kaidah KRAO',
    question_text: `Suatu sel Volta dirangkai dengan mencelupkan batang seng ke dalam larutan $\\ce{ZnSO4 } 1{,}0\\text{ M}$ dan batang tembaga ke dalam larutan $\\ce{CuSO4 } 1{,}0\\text{ M}$, dengan jembatan garam berisi $\\ce{KNO3}$.

Berdasarkan konvensi IUPAC dan kaidah elektrokimia KRAO, pernyataan yang BENAR mengenai sistem sel ini adalah ....

A. Elektroda seng bertindak sebagai katoda tempat berlangsungnya reaksi reduksi  
B. Notasi sel Volta dituliskan sebagai $\\ce{Cu(s) | Cu^2+(aq) || Zn^2+(aq) | Zn(s)}$  
C. Elektron mengalir melalui kawat penghantar eksternal dari elektroda seng (anoda) menuju elektroda tembaga (katoda)  
D. Di anoda terjadi penangkapan elektron oleh ion $\\ce{Zn^2+}$ menghasilkan endapan logam seng  
E. Jembatan garam berfungsi mengalirkan elektron bebas dari katoda kembali ke anoda`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Kaidah KRAO (Katoda Reduksi, Anoda Oksidasi):**
   - Berdasarkan Deret Volta, seng terletak di sebelah kiri tembaga ($E^\\circ_{\\ce{Zn^2+/Zn}} = -0{,}76\\text{ V} < E^\\circ_{\\ce{Cu^2+/Cu}} = +0{,}34\\text{ V}$).
   - Seng lebih mudah teroksidasi: bertindak sebagai **anoda (kutub negatif $-$)**:
     $$\\ce{Zn(s) -> Zn^2+(aq) + 2e-}$$
   - Tembaga lebih mudah tereduksi: bertindak sebagai **katoda (kutub positif $+$)**:
     $$\\ce{Cu^2+(aq) + 2e- -> Cu(s)}$$
2. **Arah Aliran Elektron:**
   Elektron dilepaskan di anoda ($\\ce{Zn}$) dan ditarik menuju katoda ($\\ce{Cu}$) melalui kawat eksternal. (Pilihan C benar).
3. **Notasi Sel IUPAC Baku:**
   $$\\mathbf{\\text{Anoda} \\mid \\text{Ion Anoda} \\parallel \\text{Ion Katoda} \\mid \\text{Katoda} \\implies \\ce{Zn(s) | Zn^2+(aq) || Cu^2+(aq) | Cu(s)}}$$
4. **Fungsi Jembatan Garam:**
   Menjaga netralitas listrik larutan dengan mengalirkan ion (anion $\\ce{NO3-}$ ke anoda, kation $\\ce{K+}$ ke katoda), bukan mengalirkan elektron bebas.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['sel-volta', 'sel-daniell', 'notasi-iupac', 'krao', 'aliran-elektron'],
  },
  {
    id: 114004,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Penyetaraan Redoks Metode Setengah Reaksi Suasana Asam',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penyetaraan Reaksi Redoks Ion Dikromat dengan Besi(II) dalam Suasana Asam',
    question_text: `Di laboratorium kimia analitik, larutan kalium dikromat ($\\ce{K2Cr2O7}$) digunakan sebagai oksidator standar untuk menentukan kadar ion besi(II) ($\\ce{Fe^2+}$) dalam suasana asam menurut kerangka reaksi redoks:
$$\\ce{Cr2O7^2-(aq) + Fe^2+(aq) + H+(aq) -> Cr^3+(aq) + Fe^3+(aq) + H2O(l)}$$

Selesaikan penyetaraan reaksi redoks tersebut menggunakan metode setengah reaksi (ion-elektron):`,
    expected_final_answer: 'a) Reduksi: Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O; Oksidasi: Fe^2+ -> Fe^3+ + e- (dikalikan 6); b) Persamaan redoks ionik total setara: Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O. Perbandingan koefisien Cr2O7^2- : Fe^2+ : H+ adalah 1 : 6 : 14.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan setengah reaksi reduksi:
     Cr2O7^2- -> 2Cr^3+ (setarakan Cr)
     Cr2O7^2- -> 2Cr^3+ + 7H2O (setarakan O dengan 7 H2O)
     Cr2O7^2- + 14H+ -> 2Cr^3+ + 7H2O (setarakan H dengan 14 H+)
     Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O (setarakan muatan dengan 6e-) (1.5 poin).
  2. Menuliskan setengah reaksi oksidasi:
     Fe^2+ -> Fe^3+ + e- (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Mengalikan reaksi oksidasi dengan faktor 6 agar jumlah elektron setara (6e-) (0.5 poin).
  2. Menjumlahkan kedua setengah reaksi dan mengeliminasi 6e-:
     Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O (1.5 poin).
  3. Memverifikasi kesetaraan atom (2 Cr, 7 O, 6 Fe, 14 H) dan kesetaraan muatan:
     Muatan kiri: (-2) + 6(+2) + 14(+1) = -2 + 12 + 14 = +24.
     Muatan kanan: 2(+3) + 6(+3) + 0 = +6 + 18 = +24 (Setara sempurna) (0.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan setengah reaksi reduksi dan setengah reaksi oksidasi yang telah setara atom dan muatannya!`,
        points: 2.5,
        rubric: 'Menuliskan reduksi: Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O (1.5 poin) dan oksidasi: Fe^2+ -> Fe^3+ + e- (1.0 poin).',
        expected_answer: 'Reduksi: Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O; Oksidasi: Fe^2+ -> Fe^3+ + e-.',
      },
      {
        label: 'b',
        question_text: `Gabungkan kedua setengah reaksi tersebut menjadi persamaan reaksi redoks ionik total yang setara, serta buktikan bahwa reaksi telah setara baik dari segi jumlah atom maupun jumlah muatan listriknya!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi total: Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O (1.5 poin) dan verifikasi muatan +24 di kedua sisi (1.0 poin).',
        expected_answer: 'Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O; muatan total kedua ruas adalah +24.',
      },
    ],
    solution_framework_template: `1. Pemisahan dan Penyetaraan Setengah Reaksi:
• Kerangka reduksi (Cr) dan tahapan penyetaraan (O via H2O, H via H+, muatan via e⁻): ....
• Kerangka oksidasi (Fe) dan penambahan elektron: ....

2. Penggabungan dan Pembuktian Kesetaraan:
• Faktor pengali elektron persekutuan terkecil: ....
• Persamaan reaksi redoks ionik total: ....
• Pembuktian neraca massa atom dan neraca muatan listrik: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['setengah-reaksi', 'suasana-asam', 'dikromat', 'besi', 'penyetaraan-redoks'],
  },
  {
    id: 114005,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Potensial Sel Standar Pasangan Seng-Perak',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Kalkulasi Potensial Sel Standar Pasangan Logam Zn - Ag dan Kriteria Spontanitas',
    question_text: `Diketahui data potensial reduksi standar ($E^\\circ$) untuk dua elektroda logam pada $25^\\circ\\text{C}$ adalah sebagai berikut:
$$\\ce{Zn^2+(aq) + 2e- -> Zn(s)} \\qquad E^\\circ = -0{,}76\\text{ V}$$
$$\\ce{Ag+(aq) + e- -> Ag(s)} \\qquad E^\\circ = +0{,}80\\text{ V}$$

Kedua setengah sel tersebut dihubungkan menjadi suatu sel Volta standar. Selesaikan analisis berikut:`,
    expected_final_answer: 'a) Katoda: Ag, Anoda: Zn, Notasi sel: Zn(s) | Zn^2+(aq) || Ag+(aq) | Ag(s), E°sel = +1,56 V; b) Reaksi Zn + 2Ag+ -> Zn^2+ + 2Ag berlangsung spontan (E°sel > 0). Jembatan garam KNO3 menetralkan larutan: ion NO3- mengalir ke anoda Zn dan ion K+ mengalir ke katoda Ag.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menentukan elektroda: E° Ag+ (+0,80 V) lebih positif daripada E° Zn2+ (-0,76 V), sehingga Ag bertindak sebagai katoda (reduksi) dan Zn sebagai anoda (oksidasi) (0.5 poin).
  2. Menuliskan notasi sel IUPAC: Zn(s) | Zn^2+(aq) || Ag+(aq) | Ag(s) (1.0 poin).
  3. Menghitung potensial sel standar: E°sel = E°katoda - E°anoda = (+0,80 V) - (-0,76 V) = +1,56 V (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menilai spontanitas: karena E°sel = +1,56 V > 0, reaksi redoks keseluruhan: Zn(s) + 2Ag+(aq) -> Zn^2+(aq) + 2Ag(s) berlangsung secara spontan (1.0 poin).
  2. Menjelaskan migrasi ion jembatan garam: di anoda terbentuk kelebihan kation Zn^2+ sehingga ion nitrat (NO3-) dari jembatan garam bermigrasi ke kompartemen anoda; di katoda ion Ag+ berkurang karena mengendap sehingga ion kalium (K+) bermigrasi ke kompartemen katoda untuk menjaga netralitas listrik larutan (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tentukan elektroda yang bertindak sebagai katoda dan anoda, tuliskan diagram notasi sel Volta IUPAC, dan hitunglah besarnya potensial sel standar ($E^\\circ_{\\text{sel}}$)!`,
        points: 2.5,
        rubric: 'Menentukan katoda Ag dan anoda Zn (0.5 poin), notasi sel Zn | Zn^2+ || Ag+ | Ag (1.0 poin), dan menghitung E°sel = +1,56 V (1.0 poin).',
        expected_answer: 'Katoda: Ag, Anoda: Zn; Notasi: Zn(s) | Zn^2+(aq) || Ag+(aq) | Ag(s); E°sel = +1,56 V.',
      },
      {
        label: 'b',
        question_text: `Apakah reaksi redoks $\\ce{Zn(s) + 2Ag+(aq) -> Zn^2+(aq) + 2Ag(s)}$ dapat berlangsung secara spontan? Jelaskan peran dan arah pergerakan ion-ion dari jembatan garam $\\ce{KNO3}$ ke dalam kedua kompartemen setengah sel!`,
        points: 2.5,
        rubric: 'Menyatakan reaksi spontan karena E°sel > 0 (1.0 poin). Menjelaskan migrasi NO3- ke anoda Zn dan K+ ke katoda Ag untuk menjaga netralitas muatan (1.5 poin).',
        expected_answer: 'Reaksi spontan (E°sel = +1,56 V > 0); ion NO3- bergerak ke anoda Zn2+ dan ion K+ bergerak ke katoda Ag+ untuk menjaga netralitas larutan.',
      },
    ],
    solution_framework_template: `1. Analisis Katoda, Anoda, dan Potensial Sel:
• Perbandingan nilai E° reduksi standar: ....
• Identifikasi katoda (E° lebih besar) dan anoda (E° lebih kecil): ....
• Notasi sel Volta IUPAC: ....
• Kalkulasi E°sel = E°katoda - E°anoda: ....

2. Spontanitas dan Migrasi Ion Jembatan Garam:
• Kriteria nilai E°sel terhadap spontanitas reaksi: ....
• Persamaan reaksi sel keseluruhan: ....
• Arah difusi kation (K+) dan anion (NO3-) jembatan garam: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['potensial-sel', 'sel-volta', 'seng-perak', 'spontanitas', 'jembatan-garam'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 114001 - 114025)
  // =========================================================================
  {
    id: 114006,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Deret Kereaktifan Logam Volta',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Prediksi Spontanitas Reaksi Pendesakan Berdasarkan Deret Volta',
    question_text: `Perhatikan posisi relatif beberapa logam dalam Deret Kereaktifan Logam Volta:
$$\\ce{Mg - Al - Zn - Fe - Ni - Sn - Pb - (H) - Cu - Ag - Au}$$

Berdasarkan prinsip desakan logam, reaksi pendesakan berikut yang TIDAK DAPAT berlangsung secara spontan pada kondisi standar adalah ....

A. $\\ce{Mg(s) + ZnSO4(aq) -> MgSO4(aq) + Zn(s)}$  
B. $\\ce{Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s)}$  
C. $\\ce{Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)}$  
D. $\\ce{Cu(s) + 2AgNO3(aq) -> Cu(NO3)2(aq) + 2Ag(s)}$  
E. $\\ce{Ni(s) + AlCl3(aq) -> NiCl2(aq) + Al(s)}$`,
    expected_final_answer: 'E',
    solution_rubric: `**Kunci Jawaban: E**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Desakan Logam Deret Volta:**
   Logam yang terletak **lebih di sebelah kiri** dalam Deret Volta memiliki potensial reduksi yang lebih negatif, bersifat reduktor lebih kuat, dan mampu mendesak (mereduksi) ion-ion logam yang terletak **di sebelah kanannya** dari larutannya.
2. **Evaluasi Setiap Pilihan:**
   - **Opsi A:** $\\ce{Mg}$ berada di sebelah kiri $\\ce{Zn} \\implies$ Spontan.
   - **Opsi B:** $\\ce{Fe}$ berada di sebelah kiri $\\ce{Cu} \\implies$ Spontan.
   - **Opsi C:** $\\ce{Zn}$ berada di sebelah kiri $\\ce{H} \\implies$ $\\ce{Zn}$ dapat mendesak ion $\\ce{H+}$ menghasilkan gas $\\ce{H2}$ (Spontan).
   - **Opsi D:** $\\ce{Cu}$ berada di sebelah kiri $\\ce{Ag} \\implies$ Spontan.
   - **Opsi E:** $\\ce{Ni}$ berada **di sebelah kanan $\\ce{Al}$** dalam Deret Volta ($E^\\circ_{\\ce{Ni^2+/Ni}} = -0{,}25\\text{ V}$, sedangkan $E^\\circ_{\\ce{Al^3+/Al}} = -1{,}66\\text{ V}$). Karena $\\ce{Ni}$ reduktor yang lebih lemah dari $\\ce{Al}$, $\\ce{Ni}$ tidak mampu mendesak kation $\\ce{Al^3+}$. Reaksi ini memiliki $E^\\circ_{\\text{sel}} = -1{,}66 - (-0{,}25) = -1{,}41\\text{ V} < 0$ (Tidak Spontan).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK / UTBK-SNBT Kimia SMA',
    tags: ['deret-volta', 'prinsip-desakan', 'spontanitas-redoks', 'kereaktifan-logam'],
  },
  {
    id: 114007,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Hubungan Termodinamika E°sel dan ΔG°',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Kalkulasi Energi Bebas Gibbs Standar Sel Daniell',
    question_text: `Reaksi redoks total pada sel Daniell standar berlangsung menurut persamaan:
$$\\ce{Zn(s) + Cu^2+(aq, 1.0 M) -> Zn^2+(aq, 1.0 M) + Cu(s)}$$
Diketahui potensial sel standar yang terukur adalah $E^\\circ_{\\text{sel}} = +1{,}10\\text{ Volt}$.
Tetapan Faraday $F = 96.485\\text{ C/mol } e^-$ ($1\\text{ J} = 1\\text{ V}\\cdot\\text{C}$).

Besarnya perubahan energi bebas Gibbs standar ($\\Delta G^\\circ$) untuk reaksi sel Daniell tersebut adalah ....

A. $-212{,}3\\text{ kJ/mol}$  
B. $-106{,}1\\text{ kJ/mol}$  
C. $+106{,}1\\text{ kJ/mol}$  
D. $+212{,}3\\text{ kJ/mol}$  
E. $-424{,}5\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Menentukan Jumlah Mol Elektron yang Ditransfer ($n$):**
   Reaksi anoda: $\\ce{Zn -> Zn^2+ + 2e-}$
   Reaksi katoda: $\\ce{Cu^2+ + 2e- -> Cu}$
   Jumlah elektron yang terlibat adalah $n = 2\\text{ mol } e^-$.
2. **Formulasi Termodinamika Gibbs Elektrokimia:**
   $$\\Delta G^\\circ = -n \\cdot F \\cdot E^\\circ_{\\text{sel}}$$
3. **Substitusi Parameter:**
   $$\\Delta G^\\circ = -(2\\text{ mol } e^-) \\times (96.485\\text{ C/mol } e^-) \\times (+1{,}10\\text{ V})$$
   $$\\Delta G^\\circ = -(2 \\times 96.485 \\times 1{,}10)\\text{ J/mol} = -212.267\\text{ J/mol} \\approx -212{,}3\\text{ kJ/mol}$$
4. **Kesimpulan:**
   Nilai $\\Delta G^\\circ < 0$ menegaskan bahwa reaksi sel berlangsung secara spontan dan melepaskan energi bebas yang dapat dikonversi menjadi kerja listrik.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK / UTBK-SNBT Kimia SMA',
    tags: ['energi-bebas-gibbs', 'sel-daniell', 'termodinamika-elektrokimia', 'tetapan-faraday'],
  },
  {
    id: 114008,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Kaidah Elektrolisis Larutan Berair Elektroda Inert',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Prediksi Produk Reaksi Elektrolisis Larutan Garam Dapur dengan Elektroda Karbon',
    question_text: `Larutan natrium klorida ($\\ce{NaCl}$) dielektrolisis menggunakan elektroda grafit (karbon inert). Pernyataan yang BENAR mengenai spesi yang bereaksi dan produk yang dihasilkan pada masing-masing elektroda adalah ....

A. Di katoda terjadi reduksi ion $\\ce{Na+}$ menghasilkan endapan logam natrium, sedangkan di anoda terjadi oksidasi air menghasilkan gas oksigen  
B. Di katoda terjadi reduksi molekul air menghasilkan gas hidrogen ($\\ce{H2}$) dan ion hidroksida ($\\ce{OH-}$), sedangkan di anoda terjadi oksidasi ion klorida menghasilkan gas klorin ($\\ce{Cl2}$)  
C. Di katoda terjadi reduksi ion $\\ce{H+}$ dari air menghasilkan gas hidrogen, sedangkan di anoda elektroda karbon teroksidasi melarut  
D. Di kedua elektroda hanya molekul air yang mengalami elektrolisis menghasilkan gas $\\ce{H2}$ dan $\\ce{O2}$  
E. Di katoda dihasilkan gas klorin, sedangkan di anoda dihasilkan endapan logam natrium`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Kaidah di Katoda (Reduksi, Kutub Negatif $-$):**
   - Kation dalam larutan adalah $\\ce{Na+}$ (logam alkali golongan IA).
   - Logam alkali memiliki potensial reduksi yang sangat negatif ($E^\\circ_{\\ce{Na+/Na}} = -2{,}71\\text{ V}$), jauh lebih sukar direduksi dibandingkan air ($E^\\circ = -0{,}83\\text{ V}$).
   - Oleh karena itu, pada fasa larutan berair, **molekul air yang tereduksi**:
     $$\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)}$$
   - Produk katoda: **Gas hidrogen ($\\ce{H2}$)** dan larutan di sekitar katoda menjadi **basa ($\\ce{OH-}$)**.
2. **Kaidah di Anoda (Oksidasi, Kutub Positif $+$, Elektroda Grafit Inert):**
   - Anion dalam larutan adalah halida klorida ($\\ce{Cl-}$).
   - Anion halida lebih mudah teroksidasi daripada air:
     $$\\ce{2Cl-(aq) -> Cl2(g) + 2e-}$$
   - Produk anoda: **Gas klorin ($\\ce{Cl2}$)**.
3. **Kesimpulan:**
   Pernyataan B tepat menggambarkan proses klor-alkali industri.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Ulangan Harian Kimia SMA Fase F',
    tags: ['sel-elektrolisis', 'larutan-nacl', 'klor-alkali', 'elektroda-inert'],
  },
  {
    id: 114009,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Kaidah Elektrolisis Lelehan Murni (Sel Downs)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Isolasi Logam Natrium Murni Melalui Elektrolisis Lelehan Sel Downs',
    question_text: `Industri kimia memproduksi logam natrium murni secara komersial melalui proses elektrolisis Sel Downs dengan meleburkan garam batu $\\ce{NaCl}$ murni (tanpa pelarut air) pada suhu tinggi. Alasan ilmiah mengapa logam natrium TIDAK DAPAT diperoleh jika yang dielektrolisis adalah larutan $\\ce{NaCl}$ dalam air adalah ....

A. Logam natrium yang terbentuk di katoda larutan langsung larut kembali membentuk ion kompleks  
B. Potensial reduksi standar molekul air ($E^\\circ = -0{,}83\\text{ V}$) jauh lebih positif daripada potensial reduksi ion $\\ce{Na+}$ ($E^\\circ = -2{,}71\\text{ V}$), sehingga molekul air yang lebih disukai tereduksi di katoda menghasilkan gas $\\ce{H2}$  
C. Ion klorida dalam larutan bertindak sebagai agen pereduksi yang menghambat ion $\\ce{Na+}$ menuju katoda  
D. Hambatan jenis larutan $\\ce{NaCl}$ terlalu tinggi untuk mengalirkan arus listrik pada tegangan tinggi  
E. Air mengoksidasi elektroda katoda sehingga katoda terkorosi sebelum logam natrium sempat mengendap`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Termodinamika Reduksi Katoda:**
   Dalam larutan berair terdapat dua spesi yang bersaing untuk menangkap elektron di katoda:
   - Reduksi kation natrium: $\\ce{Na+ + e- -> Na} \\quad (E^\\circ = -2{,}71\\text{ V})$
   - Reduksi molekul pelarut air: $\\ce{2H2O + 2e- -> H2 + 2OH-} \\quad (E^\\circ = -0{,}83\\text{ V})$
2. **Kriteria Termodinamika:**
   Spesi dengan nilai potensial reduksi yang lebih besar/lebih positif akan tereduksi terlebih dahulu. Karena $-0{,}83\\text{ V} > -2{,}71\\text{ V}$, reduksi air jauh lebih mudah berlangsung secara termodinamika. Akibatnya, pada larutan berair hanya gas $\\ce{H2}$ yang terbentuk, dan logam $\\ce{Na}$ tidak akan pernah terbentuk.
3. **Penyelesaian Industri (Sel Downs):**
   Dengan menggunakan **lelehan (cairan murni tanpa air)**, tidak ada molekul $\\ce{H2O}$ di dalam sistem. Satu-satunya kation yang ada adalah $\\ce{Na+}$, sehingga dipaksa mengalami reduksi:
   $$\\ce{Na+(l) + e- -> Na(l)}$$
   Logam cair $\\ce{Na}$ mengapung ke permukaan dan dapat ditampung secara aman di bawah atmosfer gas inert. (Pilihan B tepat).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Kabupaten / Kota Kimia',
    tags: ['sel-downs', 'lelehan-nacl', 'ekstraksi-natrium', 'elektrolisis-lelehan'],
  },
  {
    id: 114010,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Hukum Faraday I (Elektrodeposisi Logam)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Perhitungan Massa Logam Tembaga Hasil Elektrodeposisi Hukum Faraday I',
    question_text: `Larutan tembaga(II) sulfat ($\\ce{CuSO4}$) dielektrolisis menggunakan arus listrik searah sebesar $5{,}0\\text{ Ampere}$ selama $1930\\text{ detik}$.
Diketahui massa atom relatif tembaga $A_r\\ \\ce{Cu} = 63{,}5\\text{ g/mol}$ dan tetapan Faraday $1\\text{ F} = 96.500\\text{ C/mol } e^-$.

Massa endapan tembaga murni yang melapisi katoda adalah ....

A. $1{,}588\\text{ gram}$  
B. $3{,}175\\text{ gram}$  
C. $6{,}350\\text{ gram}$  
D. $12{,}70\\text{ gram}$  
E. $31{,}75\\text{ gram}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Reaksi di Katoda:**
   $$\\ce{Cu^2+(aq) + 2e- -> Cu(s)}$$
   Jumlah elektron yang ditransfer per atom tembaga adalah $n = 2$.
2. **Menghitung Massa Ekuivalen ($e$):**
   $$e = \\frac{A_r}{n} = \\frac{63{,}5}{2} = 31{,}75\\text{ g/ekiv}$$
3. **Menghitung Jumlah Faraday ($F$):**
   $$F = \\frac{I \\times t}{96.500} = \\frac{5{,}0\\text{ A} \\times 1930\\text{ s}}{96.500\\text{ C}} = \\frac{9650}{96.500} = 0{,}100\\text{ F}$$
4. **Menghitung Massa Endapan Menurut Hukum Faraday I:**
   $$w = e \\times F = 31{,}75\\text{ g/ekiv} \\times 0{,}100\\text{ ekiv} = 3{,}175\\text{ gram}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['hukum-faraday-1', 'elektrodeposisi', 'tembaga', 'stoikiometri-elektron'],
  },
  {
    id: 114011,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Penyetaraan Redoks Suasana Basa Metode PBO',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penyetaraan Reaksi Permanganat dengan Sulfit dalam Suasana Basa',
    question_text: `Reaksi antara ion permanganat ($\\ce{MnO4-}$) dan ion sulfit ($\\ce{SO3^2-}$) dalam suasana basa menghasilkan endapan mangan(IV) oksida ($\\ce{MnO2}$) dan ion sulfat ($\\ce{SO4^2-}$).
Kerangka reaksi redoks belum setara:
$$\\ce{MnO4-(aq) + SO3^2-(aq) -> MnO2(s) + SO4^2-(aq)} \\quad (\\text{suasana basa})$$

Selesaikan penyetaraan reaksi redoks tersebut:`,
    expected_final_answer: 'a) Perubahan biloks: Mn mengalami reduksi (+7 ke +4, turun 3), S mengalami oksidasi (+4 ke +6, naik 2). Pengali silang: Mn dikalikan 2 dan S dikalikan 3, melibatkan 6 mol elektron; b) Persamaan reaksi setara lengkap: 2MnO4^- + 3SO3^2- + H2O -> 2MnO2 + 3SO4^2- + 2OH^-. Muatan di kedua sisi setara (-8).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menentukan bilangan oksidasi atom yang berubah:
     - MnO4^-: Biloks Mn = +7; MnO2: Biloks Mn = +4 (penurunan biloks = 3, reduksi) (0.5 poin).
     - SO3^2-: Biloks S = +4; SO4^2-: Biloks S = +6 (kenaikan biloks = 2, oksidasi) (0.5 poin).
  2. Menyamakan perubahan biloks (KPK 3 dan 2 adalah 6):
     - Koefisien MnO4^- dan MnO2 dikalikan 2 (total elektron diterima = 2 x 3 = 6e-).
     - Koefisien SO3^2- dan SO4^2- dikalikan 3 (total elektron dilepas = 3 x 2 = 6e-) (1.0 poin).
  3. Menyimpulkan transfer elektron melibatkan 6 mol e- (0.5 poin).
- Sub-soal b (2.5 poin):
  1. Menyusun kerangka sementara: 2MnO4^- + 3SO3^2- -> 2MnO2 + 3SO4^2- (0.5 poin).
  2. Menghitung muatan:
     - Ruas kiri: 2(-1) + 3(-2) = -8.
     - Ruas kanan: 2(0) + 3(-2) = -6 (0.5 poin).
  3. Menyetarakan muatan pada suasana basa: tambahkan ion OH- pada ruas yang muatannya lebih positif:
     Tambahkan 2 OH^- di ruas kanan sehingga kedua ruas bermuatan -8 (0.5 poin).
  4. Menyetarakan atom H dan O dengan menambahkan 1 H2O di ruas kiri:
     2MnO4^- + 3SO3^2- + H2O -> 2MnO2 + 3SO4^2- + 2OH^- (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tentukan perubahan bilangan oksidasi untuk atom mangan dan sulfur, tentukan faktor pengali silang yang diperlukan untuk menyamakan perubahan biloks, dan hitung jumlah mol elektron yang ditransfer dalam reaksi!`,
        points: 2.5,
        rubric: 'Menentukan biloks Mn (+7 ke +4) dan S (+4 ke +6) (1.0 poin), faktor pengali 2 untuk Mn dan 3 untuk S (1.0 poin), serta jumlah elektron n = 6 (0.5 poin).',
        expected_answer: 'Mn turun 3 (+7 ke +4), S naik 2 (+4 ke +6); faktor pengali: Mn x 2, S x 3; transfer elektron n = 6 mol e-.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi redoks lengkap yang telah disetarakan dengan menambahkan ion $\\ce{OH-}$ dan molekul $\\ce{H2O}$ secara tepat, serta buktikan kesetaraan muatan listrik pada kedua ruas!`,
        points: 2.5,
        rubric: 'Menuliskan persamaan setara: 2MnO4^- + 3SO3^2- + H2O -> 2MnO2 + 3SO4^2- + 2OH^- (1.5 poin) dan pembuktian muatan total -8 di kedua ruas (1.0 poin).',
        expected_answer: '2MnO4^- + 3SO3^2- + H2O -> 2MnO2 + 3SO4^2- + 2OH^-; muatan total kedua ruas adalah -8.',
      },
    ],
    solution_framework_template: `1. Analisis Perubahan Bilangan Oksidasi (Metode PBO):
• Biloks atom Mn dalam reaktan dan produk: ....
• Biloks atom S dalam reaktan dan produk: ....
• Penyetaraan jumlah elektron serah-terima: ....

2. Penyetaraan Muatan dan Reaksi Lengkap Suasana Basa:
• Perhitungan muatan total ruas kiri dan ruas kanan: ....
• Penambahan ion OH⁻ pada ruas yang kekurangan muatan negatif: ....
• Penambahan molekul H2O untuk neraca atom H dan O: ....
• Persamaan reaksi redoks setara akhir: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['metode-pbo', 'suasana-basa', 'permanganat', 'sulfit', 'penyetaraan-redoks'],
  },
  {
    id: 114012,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Mekanisme Korosi Besi dan Proteksi Katodik Anoda Korban',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Elektrokimia Perkaratan Besi dan Proteksi Katodik Pipa Baja',
    question_text: `Korosi pada struktur baja merupakan proses degradasi elektrokimia spontan yang melibatkan pembentukan sel-sel galvanik mikro di antarmuka logam-lingkungan.
Untuk melindungi jaringan pipa baja bawah tanah dari perkaratan, teknisi menghubungkan pipa tersebut dengan kawat konduktor ke beberapa batang logam magnesium ($\\ce{Mg}$) yang ditanam di dalam tanah.

Diketahui:
$$\\ce{Fe^2+(aq) + 2e- -> Fe(s)} \\qquad E^\\circ = -0{,}44\\text{ V}$$
$$\\ce{Mg^2+(aq) + 2e- -> Mg(s)} \\qquad E^\\circ = -2{,}37\\text{ V}$$
$$\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\qquad E^\\circ = +1{,}23\\text{ V}$$

Selesaikan analisis elektrokimia korosi dan pencegahannya berikut:`,
    expected_final_answer: 'a) Reaksi anoda korosi besi: Fe(s) -> Fe^2+(aq) + 2e- (E° = -0,44 V); Reaksi katoda: O2 + 2H2O + 4e- -> 4OH- (atau O2 + 4H+ + 4e- -> 2H2O); Ion Fe^2+ bereaksi dengan O2 dan air membentuk karat Fe2O3.xH2O; b) E° Mg (-2,37 V) jauh lebih negatif dibanding Fe (-0,44 V). Mg bertindak sebagai anoda korban yang teroksidasi habis melepaskan elektron, memaksa pipa besi bertindak sebagai katoda permanen sehingga besi terlindungi dari perkaratan.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan reaksi di daerah anodik besi: Fe(s) -> Fe^2+(aq) + 2e- (1.0 poin).
  2. Menuliskan reaksi di daerah katodik (reduksi oksigen): O2(g) + 2H2O(l) + 4e- -> 4OH^-(aq) (atau O2 + 4H+ + 4e- -> 2H2O) (1.0 poin).
  3. Menjelaskan pembentukan karat: ion Fe^2+ bertemu OH^- membentuk Fe(OH)2 yang dioksidasi lebih lanjut oleh oksigen terlarut menjadi Fe2O3.xH2O (karat besi kemerahan) (0.5 poin).
- Sub-soal b (2.5 poin):
  1. Membandingkan potensial reduksi: E° Mg (-2,37 V) jauh lebih negatif dibanding E° Fe (-0,44 V), sehingga Mg jauh lebih mudah teroksidasi (reduktor lebih kuat) (1.0 poin).
  2. Menjelaskan mekanisme anoda korban: Mg mengalami oksidasi (Mg -> Mg^2+ + 2e-) dan mengalirkan elektronnya ke pipa besi. Pipa besi menerima elektron sehingga dipaksa bertindak sebagai katoda (reaksi reduksi terjadi pada elektrolit tanah, bukan pada besi), sehingga besi tidak dapat larut menjadi Fe^2+ (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan mekanisme elektrokimia terjadinya korosi pada permukaan besi yang terkena tetesan air dan udara dengan menuliskan persamaan reaksi yang terjadi di daerah anodik dan katodik!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi anoda Fe -> Fe^2+ + 2e- (1.0 poin), reaksi katoda reduksi oksigen (1.0 poin), dan penjelasan pembentukan karat Fe2O3.xH2O (0.5 poin).',
        expected_answer: 'Anoda: Fe -> Fe^2+ + 2e-; Katoda: O2 + 2H2O + 4e- -> 4OH-; ion Fe^2+ dan OH- membentuk karat Fe2O3.xH2O.',
      },
      {
        label: 'b',
        question_text: `Berdasarkan perbandingan nilai potensial reduksi standar ($E^\\circ$), jelaskan prinsip kerja proteksi katodik menggunakan batang magnesium (*sacrificial anode*) dalam melindungi pipa besi bawah tanah!`,
        points: 2.5,
        rubric: 'Menjelaskan E° Mg lebih negatif dari Fe (1.0 poin) dan peran Mg sebagai anoda korban yang memasok elektron sehingga pipa besi menjadi katoda terlindung (1.5 poin).',
        expected_answer: 'Mg memiliki E° (-2,37 V) jauh lebih negatif dari Fe (-0,44 V) sehingga teroksidasi terlebih dahulu sebagai anoda korban, memasok elektron yang melindungi pipa besi sebagai katoda.',
      },
    ],
    solution_framework_template: `1. Reaksi Elektrokimia Korosi Besi:
• Reaksi oksidasi anodik besi: ....
• Reaksi reduksi katodik oksigen terlarut: ....
• Formasi senyawa hidrat besi(III) oksida (karat): ....

2. Termodinamika Proteksi Katodik (Anoda Korban):
• Komparasi nilai potensial reduksi standar E°(Mg²⁺/Mg) vs E°(Fe²⁺/Fe): ....
• Arah aliran elektron proteksi: ....
• Alasan fisis mengapa pipa besi tetap utuh dan tidak teroksidasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK / Asesmen Kimia Terapan SMA',
    tags: ['korosi-besi', 'proteksi-katodik', 'anoda-korban', 'magnesium', 'elektrokimia-lingkungan'],
  },
  {
    id: 114013,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Stoikiometri Volume Gas Elektrolisis Air',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Perhitungan Volume Gas Hidrogen dan Oksigen Hasil Elektrolisis Air pada Kondisi STP',
    question_text: `Elektrolisis air dilakukan terhadap larutan asam sulfat encer ($\\ce{H2SO4 } 0{,}10\\text{ M}$) menggunakan elektroda platina (inert).
Arus listrik searah sebesar $2{,}00\\text{ Ampere}$ dialirkan secara kontinu selama $9650\\text{ detik}$.
Diketahui tetapan Faraday $F = 96.500\\text{ C/mol } e^-$ dan volume molar gas pada kondisi standar ($STP, 0^\\circ\\text{C}, 1\\text{ atm}$) adalah $22{,}4\\text{ L/mol}$.

Selesaikan evaluasi kuantitatif elektrolisis berikut:`,
    expected_final_answer: 'a) Reaksi Katoda: 2H+(aq) + 2e- -> H2(g); Reaksi Anoda: 2H2O(l) -> O2(g) + 4H+(aq) + 4e-; b) Mol elektron = 0,200 mol e-. Volume gas H2 di katoda = 2,24 Liter STP; Volume gas O2 di anoda = 1,12 Liter STP; Volume gas total = 3,36 Liter STP.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan reaksi katoda: ion H+ dari asam lebih mudah tereduksi daripada air:
     2H+(aq) + 2e- -> H2(g) (1.0 poin).
  2. Menuliskan reaksi anoda: anion SO4^2- adalah sisa asam oksi sehingga air yang teroksidasi:
     2H2O(l) -> O2(g) + 4H+(aq) + 4e- (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menghitung jumlah mol elektron (Faraday):
     n_e = (I * t) / 96.500 = (2,00 A * 9650 s) / 96.500 C = 0,200 mol e- (0.5 poin).
  2. Menghitung mol gas H2 di katoda:
     n_H2 = (1/2) * n_e = 0,5 * 0,200 = 0,100 mol H2 (0.5 poin).
     V_H2 = 0,100 mol * 22,4 L/mol = 2,24 Liter (0.5 poin).
  3. Menghitung mol gas O2 di anoda:
     n_O2 = (1/4) * n_e = 0,25 * 0,200 = 0,050 mol O2 (0.5 poin).
     V_O2 = 0,050 mol * 22,4 L/mol = 1,12 Liter (0.5 poin).
     (Volume total gas = 2,24 + 1,12 = 3,36 Liter STP).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi elektrokimia yang berlangsung pada katoda dan anoda selama proses elektrolisis berlangsung!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi katoda: 2H+ + 2e- -> H2 (1.0 poin) dan reaksi anoda: 2H2O -> O2 + 4H+ + 4e- (1.5 poin).',
        expected_answer: 'Katoda: 2H+(aq) + 2e- -> H2(g); Anoda: 2H2O(l) -> O2(g) + 4H+(aq) + 4e-.',
      },
      {
        label: 'b',
        question_text: `Hitunglah jumlah mol elektron yang dialirkan, serta tentukan volume gas hidrogen yang dihasilkan di katoda dan volume gas oksigen yang dihasilkan di anoda pada kondisi standar ($STP$)!`,
        points: 2.5,
        rubric: 'Menghitung mol e- = 0,200 mol (0.5 poin), V_H2 = 2,24 Liter STP (1.0 poin), dan V_O2 = 1,12 Liter STP (1.0 poin).',
        expected_answer: 'Mol elektron = 0,200 mol e-; Volume gas H2 = 2,24 L (STP); Volume gas O2 = 1,12 L (STP).',
      },
    ],
    solution_framework_template: `1. Reaksi Elektroda Sel Elektrolisis Air:
• Reaksi reduksi kation asam di katoda: ....
• Reaksi oksidasi pelarut air di anoda: ....
• Persamaan reaksi elektrolisis keseluruhan: ....

2. Stoikiometri Elektron dan Volume Gas STP:
• Perhitungan muatan listrik (Q = I · t) dan mol elektron (F): ....
• Hubungan stoikiometri mol elektron terhadap gas H2 dan gas O2: ....
• Volume gas masing-masing pada kondisi standar STP: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['elektrolisis-air', 'hukum-faraday', 'volume-gas-stp', 'stoikiometri-gas'],
  },
  {
    id: 114014,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Rangkaian Dua Sel Elektrolisis Seri (Hukum Faraday II)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Komparasi Massa Endapan pada Rangkaian Elektrolisis Seri',
    question_text: `Dua buah sel elektrolisis disusun secara seri dan dialiri arus listrik yang sama dari satu sumber daya DC:
- **Sel I:** Berisi larutan perak nitrat ($\\ce{AgNO3}$) dengan elektroda perak.
- **Sel II:** Berisi larutan tembaga(II) sulfat ($\\ce{CuSO4}$) dengan elektroda tembaga.

Setelah proses elektrolisis berlangsung selama selang waktu tertentu, teramati bahwa pada katoda Sel I terbentuk endapan perak murni sebanyak $2{,}16\\text{ gram}$.
Diketahui massa atom relatif perak $A_r\\ \\ce{Ag} = 108{,}0\\text{ g/mol}$ dan tembaga $A_r\\ \\ce{Cu} = 63{,}5\\text{ g/mol}$.

Selesaikan analisis Hukum Faraday II berikut:`,
    expected_final_answer: 'a) Karena arus dan waktu sama (rangkaian seri), muatan F1 = F2. Maka w1 / e1 = w2 / e2 atau w1 / w2 = e1 / e2, dengan e = Ar / n; b) e_Ag = 108,0 g/ekiv, e_Cu = 31,75 g/ekiv. Massa tembaga yang mengendap w_Cu = 0,635 gram.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menjelaskan prinsip rangkaian seri: kuat arus listrik (I) dan waktu (t) pada kedua sel identik, sehingga muatan listrik yang mengalir sama (Q1 = Q2 atau F1 = F2) (1.0 poin).
  2. Dari Hukum Faraday I: w = e * F => F = w / e.
     Menyamakan nilai F: w1 / e1 = w2 / e2 => w1 / w2 = e1 / e2 (1.0 poin).
  3. Menyatakan bahwa e adalah massa ekuivalen: e = Ar / n (0.5 poin).
- Sub-soal b (2.5 poin):
  1. Reaksi katoda Sel I: Ag+ + e- -> Ag (valensi n1 = 1)
     e1 = 108,0 / 1 = 108,0 g/ekiv (0.5 poin).
  2. Reaksi katoda Sel II: Cu^2+ + 2e- -> Cu (valensi n2 = 2)
     e2 = 63,5 / 2 = 31,75 g/ekiv (0.5 poin).
  3. Menghitung massa tembaga (w2):
     w_Ag / w_Cu = e_Ag / e_Cu
     2,16 / w_Cu = 108,0 / 31,75 (0.5 poin).
     w_Cu = (2,16 * 31,75) / 108,0 = 0,020 * 31,75 = 0,635 gram (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan mengapa muatan listrik pada kedua sel elektrolisis bernilai sama dan turunkan rumusan matematis Hukum Faraday II $\\frac{w_1}{w_2} = \\frac{e_1}{e_2}$!`,
        points: 2.5,
        rubric: 'Menjelaskan arus dan waktu sama pada rangkaian seri (1.0 poin) dan menurunkan persamaan w1 / e1 = w2 / e2 (1.5 poin).',
        expected_answer: 'Rangkaian seri mengalirkan arus yang sama sehingga F1 = F2; karena w = e * F, maka w1/e1 = w2/e2 atau w1/w2 = e1/e2.',
      },
      {
        label: 'b',
        question_text: `Hitunglah massa ekuivalen masing-masing logam dan tentukan massa logam tembaga yang mengendap pada katoda Sel II!`,
        points: 2.5,
        rubric: 'Menghitung e_Ag = 108,0 dan e_Cu = 31,75 (1.0 poin) serta menghitung massa tembaga w_Cu = 0,635 gram (1.5 poin).',
        expected_answer: 'e_Ag = 108,0 g/ekiv, e_Cu = 31,75 g/ekiv; massa tembaga mengendap w_Cu = 0,635 gram.',
      },
    ],
    solution_framework_template: `1. Penurunan Hukum Faraday II pada Rangkaian Seri:
• Konsep muatan listrik pada rangkaian tertutup seri: ....
• Relasi Faraday I ke Faraday II: ....
• Formulasi massa ekuivalen e = Ar / n: ....

2. Kalkulasi Massa Endapan Katoda Sel II:
• Valensi ion Ag⁺ dan Cu²⁺: ....
• Nilai massa ekuivalen e(Ag) dan e(Cu): ....
• Perhitungan massa tembaga: w_Cu = (w_Ag · e_Cu) / e_Ag: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['hukum-faraday-2', 'rangkaian-seri', 'perak-tembaga', 'massa-ekuivalen'],
  },
  {
    id: 114015,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Aplikasi Industri: Pemurnian Tembaga Blister (Electrorefining)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Rekayasa Pemurnian Tembaga Mentah Melalui Proses Electrorefining',
    question_text: `Tembaga hasil proses peleburan bijih kalkopirit dinamakan tembaga *blister* yang masih mengandung sekitar $2\\%$ pengotor logam (seperti $\\ce{Fe, Zn, Ni, Ag, Au}$, dan $\\ce{Pt}$). Untuk memenuhi standar industri kabel listrik, kemurnian tembaga harus ditingkatkan hingga $\\ge 99{,}99\\%$ melalui pemurnian elektrolisis (*electrorefining*).

Selesaikan analisis rekayasa elektrokimia industri berikut:`,
    expected_final_answer: 'a) Anoda: Tembaga blister kasar (kotor), Katoda: Pelat tipis tembaga murni, Elektrolit: Larutan CuSO4 diasamkan H2SO4; b) Reaksi Anoda: Cu(s, kotor) -> Cu^2+(aq) + 2e-; Reaksi Katoda: Cu^2+(aq) + 2e- -> Cu(s, murni 99,99%). Logam pengotor aktif (Zn, Fe, Ni) ikut teroksidasi menjadi ion larut, sedangkan logam mulia (Ag, Au, Pt) tidak teroksidasi dan jatuh mengendap di dasar sel sebagai lumpur anoda (anode slime).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menentukan susunan elektroda:
     - Anoda (kutub positif): Batang tebal tembaga blister kotor yang akan dimurnikan (1.0 poin).
     - Katoda (kutub negatif): Pelat tipis tembaga murni tempat tembaga baru akan diendapkan (1.0 poin).
  2. Menentukan elektrolit: Larutan tembaga(II) sulfat (CuSO4) yang diasamkan dengan asam sulfat (H2SO4) untuk meningkatkan daya hantar listrik (0.5 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan reaksi elektroda:
     - Anoda: Cu(s, kotor) -> Cu^2+(aq) + 2e- (0.5 poin).
     - Katoda: Cu^2+(aq) + 2e- -> Cu(s, murni) (0.5 poin).
  2. Menjelaskan nasib pengotor:
     - Pengotor yang lebih aktif dari Cu (Fe, Zn, Ni) memiliki E° lebih negatif, ikut teroksidasi melarut menjadi kation (Fe^2+, Zn^2+), namun tidak tereduksi di katoda karena potensial katoda diatur hanya untuk mereduksi Cu^2+ (0.5 poin).
     - Pengotor yang lebih mulia dari Cu (Ag, Au, Pt) memiliki E° lebih positif sehingga tidak teroksidasi pada tegangan operasional, lalu rontok dan mengendap di dasar bejana anoda sebagai lumpur anoda (*anode slime*) yang dapat diolah untuk ekstraksi emas dan perak berharga tinggi (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tentukan bahan yang digunakan sebagai elektroda anoda dan katoda serta jenis larutan elektrolit yang digunakan dalam sel pemurnian tembaga industri!`,
        points: 2.5,
        rubric: 'Menentukan anoda: Cu blister kotor (1.0 poin), katoda: Cu murni (1.0 poin), dan elektrolit: larutan CuSO4 + H2SO4 (0.5 poin).',
        expected_answer: 'Anoda: tembaga blister kotor; Katoda: tembaga murni; Elektrolit: larutan CuSO4 yang diasamkan H2SO4.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi yang terjadi pada kedua elektroda, serta jelaskan bagaimana nasib pengotor logam aktif ($\\ce{Zn, Fe}$) dan pengotor logam mulia ($\\ce{Ag, Au}$) yang terkandung di dalam tembaga blister!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi elektroda Cu (1.0 poin), menjelaskan Zn/Fe larut sebagai ion (0.5 poin), dan menjelaskan Ag/Au mengendap sebagai lumpur anoda (1.0 poin).',
        expected_answer: 'Anoda: Cu -> Cu^2+ + 2e-; Katoda: Cu^2+ + 2e- -> Cu; pengotor Zn/Fe larut menjadi ion di larutan, sedangkan Ag/Au tidak teroksidasi dan mengendap sebagai lumpur anoda bernilai ekonomi tinggi.',
      },
    ],
    solution_framework_template: `1. Desain Sel Elektrorefining Tembaga:
• Material elektroda anoda (spesi yang dilarutkan): ....
• Material elektroda katoda (tempat pengendapan tembaga murni): ....
• Komposisi larutan elektrolit pembawa: ....

2. Reaksi Elektroda dan Pemisahan Pengotor:
• Reaksi pelarutan tembaga pada anoda: ....
• Reaksi reduksi selektif tembaga pada katoda: ....
• Perilaku pengotor logam lebih aktif (Fe, Zn, Ni): ....
• Pembentukan lumpur anoda (anode slime) oleh logam mulia (Ag, Au, Pt): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK / Asesmen Kimia Terapan SMA',
    tags: ['pemurnian-tembaga', 'electrorefining', 'tembaga-blister', 'lumpur-anoda'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 114001 - 114025)
  // =========================================================================
  {
    id: 114016,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Persamaan Nernst & Pengaruh pH terhadap Potensial Redoks',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Ketergantungan Potensial Reduksi Kalium Permanganat terhadap Derajat Keasaman pH',
    question_text: `Reaksi setengah sel reduksi ion permanganat dalam suasana asam berlangsung menurut:
$$\\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^2+(aq) + 4H2O(l)} \\qquad E^\\circ = +1{,}51\\text{ V}$$
Bila pada suhu $25^\\circ\\text{C}$ konsentrasi $[\\ce{MnO4-}] = 0{,}10\\text{ M}$ dan $[\\ce{Mn^2+}] = 0{,}010\\text{ M}$, sedangkan keasaman larutan diatur pada $\\text{pH} = 3{,}00$ ($[\\ce{H+}] = 1{,}0 \\times 10^{-3}\\text{ M}$), maka nilai potensial reduksi aktual ($E$) setengah sel tersebut adalah ....
(Gunakan persamaan Nernst: $E = E^\\circ - \\frac{0{,}0592}{n} \\log Q$)

A. $+1{,}51\\text{ V}$  
B. $+1{,}24\\text{ V}$  
C. $+1{,}08\\text{ V}$  
D. $+0{,}95\\text{ V}$  
E. $+0{,}72\\text{ V}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Menentukan Kuosien Reaksi ($Q$):**
   $$Q = \\frac{[\\ce{Mn^2+}]}{[\\ce{MnO4-}] [\\ce{H+}]^8}$$
2. **Substitusi Nilai Konsentrasi:**
   - $[\\ce{Mn^2+}] = 0{,}010 = 10^{-2}\\text{ M}$
   - $[\\ce{MnO4-}] = 0{,}10 = 10^{-1}\\text{ M}$
   - $[\\ce{H+}] = 10^{-\\text{pH}} = 10^{-3}\\text{ M} \\implies [\\ce{H+}]^8 = (10^{-3})^8 = 10^{-24}$
   - Maka:
     $$Q = \\frac{10^{-2}}{10^{-1} \\times 10^{-24}} = \\frac{10^{-2}}{10^{-25}} = 10^{23}$$
3. **Menghitung Nilai $\\log Q$:**
   $$\\log Q = \\log(10^{23}) = 23$$
4. **Substitusi ke Persamaan Nernst ($n = 5$):**
   $$E = E^\\circ - \\frac{0{,}0592}{5} \\log Q$$
   $$E = +1{,}51 - \\frac{0{,}0592}{5} \\times 23 = +1{,}51 - (0{,}01184 \\times 23) = +1{,}51 - 0{,}272 = +1{,}238\\text{ V} \\approx +1{,}24\\text{ V}$$
5. **Kesimpulan:**
   Penurunan konsentrasi ion $\\ce{H+}$ (kenaikan pH dari $0$ ke $3$) menurunkan daya pengoksidasi permanganat dari $+1{,}51\\text{ V}$ menjadi $+1{,}24\\text{ V}$. (Pilihan B benar).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi (OSP) Kimia',
    tags: ['persamaan-nernst', 'pengaruh-ph', 'permanganat', 'potensial-reduksi'],
  },
  {
    id: 114017,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Sel Konsentrasi Perak',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Gaya Gerak Listrik Sel Konsentrasi Perak',
    question_text: `Suatu sel konsentrasi dirangkai dengan mencelupkan dua buah elektroda perak ($\\ce{Ag}$) identik ke dalam dua larutan perak nitrat yang berbeda konsentrasi pada $25^\\circ\\text{C}$:
$$\\ce{Ag(s) | Ag+(aq, 0.0010 M) || Ag+(aq, 0.100 M) | Ag(s)}$$
Diketahui tetapan Nernst $\\frac{2{,}303 R T}{F} = 0{,}0592\\text{ V}$.

Besarnya gaya gerak listrik (potensial sel, $E_{\\text{sel}}$) yang dihasilkan oleh sel konsentrasi tersebut adalah ....

A. $0{,}000\\text{ V}$  
B. $+0{,}059\\text{ V}$  
C. $+0{,}118\\text{ V}$  
D. $+0{,}178\\text{ V}$  
E. $+0{,}237\\text{ V}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Karakteristik Sel Konsentrasi:**
   Karena kedua elektroda dan jenis ion identik, nilai potensial sel standar adalah nol:
   $$E^\\circ_{\\text{sel}} = E^\\circ_{\\ce{Ag+/Ag}} - E^\\circ_{\\ce{Ag+/Ag}} = 0{,}000\\text{ V}$$
2. **Reaksi di Kompartemen Setengah Sel:**
   - Anoda (larutan encer): $\\ce{Ag(s) -> Ag+(aq, encer) + e-}$
   - Katoda (larutan pekat): $\\ce{Ag+(aq, pekat) + e- -> Ag(s)}$
   - Reaksi sel total: $\\ce{Ag+(aq, pekat) -> Ag+(aq, encer)}$ ($n = 1$)
3. **Persamaan Nernst Sel Konsentrasi:**
   $$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0{,}0592}{n} \\log \\left(\\frac{[\\ce{Ag+}]_{\\text{encer}}}{[\\ce{Ag+}]_{\\text{pekat}}}\\right)$$
   $$E_{\\text{sel}} = 0 - \\frac{0{,}0592}{1} \\log \\left(\\frac{0{,}0010}{0{,}100}\\right)$$
4. **Kalkulasi Numerik:**
   $$\\frac{0{,}0010}{0{,}100} = 10^{-2} \\implies \\log(10^{-2}) = -2$$
   $$E_{\\text{sel}} = -0{,}0592 \\times (-2) = +0{,}1184\\text{ V} \\approx +0{,}118\\text{ V}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi (OSP) Kimia',
    tags: ['sel-konsentrasi', 'persamaan-nernst', 'perak', 'ggl-sel'],
  },
  {
    id: 114018,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Penentuan Ksp Melalui Potensial Elektroda Standar',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Korelasi Termodinamika Potensial Elektroda dengan Tetapan Hasil Kali Kelarutan Ksp',
    question_text: `Diketahui potensial reduksi standar untuk elektroda perak/perak klorida dan elektroda perak pada $25^\\circ\\text{C}$ adalah:
(1) $\\ce{AgCl(s) + e- -> Ag(s) + Cl-(aq)} \\qquad E_1^\\circ = +0{,}222\\text{ V}$  
(2) $\\ce{Ag+(aq) + e- -> Ag(s)} \\qquad E_2^\\circ = +0{,}800\\text{ V}$  

Dengan mengombinasikan data termodinamika tersebut menggunakan hubungan $\\log K = \\frac{n E^\\circ}{0{,}0592}$, nilai tetapan hasil kali kelarutan ($K_{sp}$) dari perak klorida ($\\ce{AgCl}$) pada $25^\\circ\\text{C}$ adalah sekitar ....

A. $1{,}8 \\times 10^{-10}$  
B. $1{,}0 \\times 10^{-10}$  
C. $3{,}2 \\times 10^{-14}$  
D. $5{,}6 \\times 10^{-8}$  
E. $2{,}4 \\times 10^{-5}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Menyusun Reaksi Pelarutan Garam $\\ce{AgCl}$:**
   Kesetimbangan kelarutan:
   $$\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\qquad K = K_{sp}$$
2. **Kombinasi Dua Setengah Reaksi Redoks:**
   - Reaksi (1) tetap: $\\ce{AgCl(s) + e- -> Ag(s) + Cl-(aq)} \\quad E_1^\\circ = +0{,}222\\text{ V}$ (Katoda)
   - Reaksi (2) dibalik: $\\ce{Ag(s) -> Ag+(aq) + e-} \\quad E_{\\text{anoda}}^\\circ = +0{,}800\\text{ V}$ (Anoda)
   - Reaksi total: $\\ce{AgCl(s) -> Ag+(aq) + Cl-(aq)}$
3. **Menghitung Potensial Standar Reaksi ($E^\\circ_{\\text{sel}}$):**
   $$E^\\circ_{\\text{sel}} = E_1^\\circ - E_2^\\circ = +0{,}222\\text{ V} - (+0{,}800\\text{ V}) = -0{,}578\\text{ V}$$
4. **Menghubungkan $E^\\circ_{\\text{sel}}$ dengan Tetapan Kesetimbangan ($K_{sp}$):**
   Untuk $n = 1$:
   $$\\log K_{sp} = \\frac{n \\cdot E^\\circ_{\\text{sel}}}{0{,}0592} = \\frac{1 \\times (-0{,}578)}{0{,}0592} = -9{,}7635$$
   $$K_{sp} = 10^{-9{,}7635} = 10^{0{,}2365} \\times 10^{-10} \\approx 1{,}72 \\times 10^{-10} \\approx 1{,}8 \\times 10^{-10}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['termodinamika-elektrokimia', 'ksp-agcl', 'elektroda-perak-klorida', 'tetapan-kesetimbangan'],
  },
  {
    id: 114019,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Diagram Latimer Klorin & Prediksi Disproporsionasi',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Termodinamika Diagram Latimer Klorin dalam Suasana Asam',
    question_text: `Perhatikan penggalan Diagram Latimer untuk spesi klorin dalam suasana asam ($\text{pH} = 0$) berikut:
$$\\ce{ClO3- ->[+1.18\\text{ V}] HClO2 ->[+1.65\\text{ V}] HClO ->[+1.63\\text{ V}] Cl2 ->[+1.36\\text{ V}] Cl-}$$

Berdasarkan kaidah termodinamika Diagram Latimer, pernyataan yang BENAR adalah ....

A. Asam klorit ($\\ce{HClO2}$) stabil secara termodinamika dan tidak dapat mengalami disproporsionasi  
B. Potensial reduksi standar langsung dari $\\ce{ClO3-}$ menjadi $\\ce{HClO}$ (melibatkan 4 elektron) adalah $E^\\circ = +1{,}415\\text{ V}$  
C. Gas klorin ($\\ce{Cl2}$) dalam suasana asam spontan mengalami disproporsionasi menjadi $\\ce{HClO}$ dan $\\ce{Cl-}$  
D. Potensial reduksi langsung $\\ce{ClO3- -> HClO}$ dihitung dengan merata-ratakan langsung potensial kedua langkah ($+1{,}18 + 1{,}65) / 2$  
E. Spesi yang bertindak sebagai agen pengoksidasi terkuat dalam rangkaian tersebut adalah ion klorida ($\\ce{Cl-}$)` ,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Kaidah Perhitungan Potensial Reduksi Spesi Non-Adjacent:**
   Potensial tidak boleh dirata-ratakan langsung, melainkan harus menggunakan perubahan energi bebas Gibbs ($\\Delta G^\\circ = -n F E^\\circ$).
   Untuk konversi $\\ce{ClO3- (+5) -> HClO (+1)}$:
   - Langkah 1: $\\ce{ClO3- (+5) + 2H+ + 2e- -> HClO2 (+3) + H2O} \\quad (n_1 = 2, E_1^\\circ = +1{,}18\\text{ V})$
   - Langkah 2: $\\ce{HClO2 (+3) + 2H+ + 2e- -> HClO (+1) + H2O} \\quad (n_2 = 2, E_2^\\circ = +1{,}65\\text{ V})$
   - Jumlah elektron total: $n_{\\text{tot}} = 2 + 2 = 4\\text{ mol } e^-$
   - Formulasi:
     $$E_{13}^\\circ = \\frac{n_1 E_1^\\circ + n_2 E_2^\\circ}{n_1 + n_2} = \\frac{(2 \\times 1{,}18) + (2 \\times 1{,}65)}{4} = \\frac{2{,}36 + 3{,}30}{4} = \\frac{5{,}66}{4} = +1{,}415\\text{ V}$$
   *(Pilihan B benar)*.
2. **Kaidah Disproporsionasi pada Diagram Latimer:**
   Suatu spesi akan mengalami disproporsionasi spontan jika **potensial di sebelah kanannya lebih besar daripada potensial di sebelah kirinya** ($E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$).
   - Untuk $\\ce{HClO2}$: $E^\\circ_{\\text{kanan}} = +1{,}65\\text{ V} > E^\\circ_{\\text{kiri}} = +1{,}18\\text{ V} \\implies \\ce{HClO2}$ **tidak stabil dan spontan terdisproporsionasi** (Pilihan A salah).
   - Untuk $\\ce{Cl2}$: $E^\\circ_{\\text{kanan}} = +1{,}36\\text{ V} < E^\\circ_{\\text{kiri}} = +1{,}63\\text{ V} \\implies \\ce{Cl2}$ stabil terhadap disproporsionasi dalam suasana asam (Pilihan C salah).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Anorganik',
    tags: ['diagram-latimer', 'klorin', 'disproporsionasi', 'energi-bebas-gibbs'],
  },
  {
    id: 114020,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Kinetika Elektrokimia & Tegangan Lebih (Overpotential)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Peran Tegangan Lebih (Overpotential) pada Selektivitas Reaksi Anoda Sel Klor-Alkali',
    question_text: `Pada elektrolisis larutan garam dapur pekat (*brine*, $\\ce{NaCl}$) menggunakan elektroda karbon atau platina, gas klorin ($\\ce{Cl2}$) yang terbentuk di anoda secara eksklusif, bukan gas oksigen ($\\ce{O2}$).

Secara termodinamika standar:
$$\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\qquad E^\\circ = +1{,}23\\text{ V}$$
$$\\ce{Cl2(g) + 2e- -> 2Cl-(aq)} \\qquad E^\\circ = +1{,}36\\text{ V}$$
Berdasarkan data di atas, oksidasi air seharusnya lebih disukai ($E^\\circ$ lebih rendah). Penjelasan fisis yang tepat mengapa gas $\\ce{Cl2}$ yang justru terbentuk di anoda adalah ....

A. Kelarutan gas klorin dalam air jauh lebih rendah daripada gas oksigen sehingga klorin mendesak oksigen keluar  
B. Ion $\\ce{Cl-}$ berdifusi ribuan kali lebih cepat menuju anoda dibandingkan molekul air  
C. Reaksi oksidasi air menjadi gas oksigen memiliki kinetika reaksi yang sangat lambat dan membutuhkan energi aktivasi elektrokimia yang tinggi (**tegangan lebih / *overpotential* anodik oksigen yang sangat besar** pada elektroda karbon/Pt), sehingga potensial aktual oksidasi air melampaui potensial oksidasi klorida  
D. Gas oksigen yang terbentuk langsung bereaksi dengan elektroda karbon membentuk padatan karbonat  
E. Ion natrium bertindak sebagai katalis homogen spesifik yang hanya mempercepat oksidasi ion klorida`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Tinjauan Termodinamika vs Kinetika Elektrokimia:**
   - Secara termodinamika murni, oksidasi air memerlukan potensial $+1{,}23\\text{ V}$, sedangkan oksidasi klorida memerlukan $+1{,}36\\text{ V}$. Berdasarkan termodinamika saja, air seharusnya teroksidasi lebih dulu.
2. **Konsep Tegangan Lebih (*Overpotential* / $\\eta$):**
   - Reaksi oksidasi air $\\ce{2H2O -> O2 + 4H+ + 4e-}$ adalah proses multi-tahap yang sangat kompleks, melibatkan pemutusan empat ikatan $\\ce{O-H}$, transfer empat elektron, dan pembentukan ikatan kovalen ganda $\\ce{O=O}$.
   - Kinetika reaksi transfer 4 elektron ini sangat lambat dan memiliki energi aktivasi elektrokimia tinggi, menghasilkan **overpotential anodik oksigen ($\ eta_{\\ce{O2}}$)** yang sangat besar (bisa mencapai $+0{,}5\\text{ V}$ hingga $+1{,}0\\text{ V}$ pada elektroda karbon/Pt).
   - Akibatnya, potensial operasional aktual untuk melepaskan $\\ce{O2}$ melonjak menjadi:
     $$E_{\\text{aktual}}(\\ce{O2}) = E^\\circ + \\eta_{\\ce{O2}} = +1{,}23\\text{ V} + 0{,}60\\text{ V} = +1{,}83\\text{ V}$$
   - Sebaliknya, oksidasi klorida $\\ce{2Cl- -> Cl2 + 2e-}$ berlangsung sangat cepat dengan overpotential klorin yang sangat kecil (hampir nol):
     $$E_{\\text{aktual}}(\\ce{Cl2}) \\approx +1{,}36\\text{ V}$$
3. **Kesimpulan:**
   Karena $+1{,}36\\text{ V} < +1{,}83\\text{ V}$, maka secara kinetika ion klorida teroksidasi jauh lebih cepat menjadi gas $\\ce{Cl2}$. (Pilihan C tepat).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['overpotential', 'tegangan-lebih', 'klor-alkali', 'kinetika-elektrokimia'],
  },
  {
    id: 114021,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Titrasi Potensiometri Redoks Besi(II) dengan Serium(IV)',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi Kurva Potensial Titrasi Potensiometri Fe(II) Menggunakan Ce(IV)',
    question_text: `Sebanyak $25{,}0\\text{ mL}$ larutan $\\ce{Fe^2+} 0{,}100\\text{ M}$ dititrasi secara potensiometri dengan larutan pengoksidasi kuat $\\ce{Ce^4+} 0{,}100\\text{ M}$ dalam media asam sulfat $1{,}0\\text{ M}$ pada $25^\\circ\\text{C}$:
$$\\ce{Fe^2+(aq) + Ce^4+(aq) -> Fe^3+(aq) + Ce^3+(aq)}$$

Diketahui potensial reduksi formal dalam media asam tersebut:
$$\\ce{Fe^3+ + e- -> Fe^2+} \\qquad E_1^{\\circ\\prime} = +0{,}680\\text{ V}$$
$$\\ce{Ce^4+ + e- -> Ce^3+} \\qquad E_2^{\\circ\\prime} = +1{,}440\\text{ V}$$
Tetapan Nernst: $\\frac{2{,}303 R T}{F} = 0{,}0592\\text{ V}$.

Selesaikan analisis profil potensial elektroda indikator Pt selama titrasi:`,
    expected_final_answer: 'a) Sebelum TE saat penambahan 12,5 mL Ce^4+ (fraksi titrasi f = 0,50), [Fe^3+] = [Fe^2+] sehingga E = E°\'_Fe = +0,680 V; b) Pada titik ekuivalen teoritis (penambahan 25,0 mL Ce^4+), E_eq = (E1°\' + E2°\') / 2 = (+0,680 + 1,440) / 2 = +1,060 V. Setelah TE saat penambahan 50,0 mL Ce^4+ (f = 2,00), [Ce^4+] = [Ce^3+] sehingga E = E°\'_Ce = +1,440 V.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menghitung mol awal Fe^2+: n_Fe = 25,0 mL * 0,100 M = 2,50 mmol (1.0 poin).
  2. Saat penambahan 12,5 mL Ce^4+ (titik tengah sebelum TE):
     Mol Ce^4+ ditambahkan = 12,5 * 0,100 = 1,25 mmol (1.0 poin).
  3. Reaksi menghasilkan:
     Fe^3+ terbentuk = 1,25 mmol
     Fe^2+ sisa = 2,50 - 1,25 = 1,25 mmol (1.0 poin).
  4. Menerapkan persamaan Nernst setengah sel Fe^3+/Fe^2+:
     E = E1°' - 0,0592 * log([Fe^2+] / [Fe^3+])
     Karena [Fe^2+] = [Fe^3+], maka log(1) = 0
     E = E1°' = +0,680 V (2.0 poin).
- Sub-soal b (5.0 poin):
  1. Pada titik ekuivalen (penambahan 25,0 mL Ce^4+):
     Di titik ekuivalen: [Fe^3+] = [Ce^3+] dan [Fe^2+] = [Ce^4+].
     Penjumlahan kedua persamaan Nernst:
     E = E1°' - 0,0592 * log([Fe^2+] / [Fe^3+])
     E = E2°' - 0,0592 * log([Ce^3+] / [Ce^4+])
     2 E = E1°' + E2°' - 0,0592 * log(([Fe^2+][Ce^3+]) / ([Fe^3+][Ce^4+])) = E1°' + E2°' - 0
     E_eq = (E1°' + E2°') / 2 = (0,680 + 1,440) / 2 = 2,120 / 2 = +1,060 V (3.0 poin).
  2. Setelah titik ekuivalen saat penambahan 50,0 mL Ce^4+ (kelebihan 2x volume TE):
     Mol Ce^4+ total = 50,0 * 0,100 = 5,00 mmol
     Mol Ce^4+ bereaksi = 2,50 mmol => mol Ce^3+ terbentuk = 2,50 mmol
     Mol Ce^4+ sisa berlebih = 5,00 - 2,50 = 2,50 mmol (1.0 poin).
     Karena [Ce^4+] = [Ce^3+], maka:
     E = E2°' - 0,0592 * log([Ce^3+] / [Ce^4+]) = E2°' - 0 = +1,440 V (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah nilai potensial elektroda indikator ($E$) pada titik tengah sebelum titik ekuivalen tercapai, yaitu saat penambahan volume titran $\\ce{Ce^4+}$ tepat $12{,}5\\text{ mL}$!`,
        points: 5.0,
        rubric: 'Menentukan stoikiometri titik tengah ([Fe^3+] = [Fe^2+]) (3.0 poin) dan membuktikan E = E°\'_Fe = +0,680 V via Nernst (2.0 poin).',
        expected_answer: 'E = +0,680 V; pada f = 0,50 konsentrasi [Fe^3+] = [Fe^2+] sehingga log Q = 0.',
      },
      {
        label: 'b',
        question_text: `Turunkan persamaan potensial pada titik ekuivalen teoritis ($E_{\\text{eq}}$) serta hitung nilainya (saat penambahan $25{,}0\\text{ mL } \\ce{Ce^4+}$). Hitung pula potensial elektroda setelah titik ekuivalen saat volume titran mencapai $50{,}0\\text{ mL}$!`,
        points: 5.0,
        rubric: 'Menurunkan E_eq = (E1°\' + E2°\') / 2 dan menghitung E_eq = +1,060 V (3.0 poin). Menghitung E setelah TE saat 50,0 mL = +1,440 V (2.0 poin).',
        expected_answer: 'E_eq = (E1°\' + E2°\') / 2 = +1,060 V; setelah TE pada penambahan 50,0 mL Ce^4+, E = +1,440 V.',
      },
    ],
    solution_framework_template: `1. Potensial Sebelum Titik Ekuivalen (Sistem Fe³⁺/Fe²⁺):
• Neraca mol titrasi redoks pada fraksi f = 0,50: ....
• Rasio konsentrasi [Fe²⁺] / [Fe³⁺]: ....
• Potensial Nernst elektroda indikator Pt: ....

2. Titik Ekuivalen dan Pasca Titik Ekuivalen (Sistem Ce⁴⁺/Ce³⁺):
• Hubungan kesetimbangan konsentrasi pada titik ekuivalen: ....
• Penurunan rumus potensial titik ekuivalen simetris (E_eq): ....
• Kondisi pasca titik ekuivalen pada fraksi f = 2,00: ....
• Potensial Nernst pasangan redoks titran Ce⁴⁺/Ce³⁺: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Analitik & Fisik',
    tags: ['potensiometri', 'titrasi-redoks', 'titik-ekuivalen', 'serium', 'besi'],
  },
  {
    id: 114022,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Penentuan Ksp Perak Bromida Melalui Sel Konsentrasi Nernst',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Tetapan Hasil Kali Kelarutan AgBr Menggunakan Sel Konsentrasi',
    question_text: `Untuk menentukan tetapan hasil kali kelarutan ($K_{sp}$) perak bromida ($\\ce{AgBr}$) yang sangat sukar larut, dirangkai sel konsentrasi perak pada temperatur $25{,}0^\\circ\\text{C}$ ($298{,}15\\text{ K}$):
- **Kompartemen Anoda ($-$) :** Kawat elektroda $\\ce{Ag}$ dicelupkan ke dalam larutan kalium bromida $\\ce{KBr } 0{,}0100\\text{ M}$ yang dijenuhkan dengan endapan padatan $\\ce{AgBr(s)}$.
- **Kompartemen Katoda ($+$) :** Kawat elektroda $\\ce{Ag}$ dicelupkan ke dalam larutan perak nitrat $\\ce{AgNO3 } 0{,}100\\text{ M}$.
Kedua kompartemen dihubungkan dengan jembatan garam kalium nitrat ($\\ce{KNO3}$).

Pengukuran voltmeter berimpedansi tinggi menunjukkan gaya gerak listrik sel sebesar $E_{\\text{sel}} = +0{,}5328\\text{ V}$.
Diketahui tetapan Nernst $\\frac{2{,}303 R T}{F} = 0{,}0592\\text{ V}$.

Selesaikan analisis kelarutan elektrokimia berikut:`,
    expected_final_answer: 'a) Persamaan Nernst: E_sel = -0,0592 log([Ag+]_anoda / [Ag+]_katoda) = 0,0592 log([Ag+]_katoda / [Ag+]_anoda); b) Konsentrasi ion perak bebas di anoda [Ag+]_anoda = 1,00 x 10^-10 M. Tetapan hasil kali kelarutan Ksp AgBr = [Ag+] [Br-] = (1,00 x 10^-10) (0,0100) = 1,00 x 10^-12.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan reaksi elektroda:
     - Anoda: Ag(s) -> Ag+(anoda) + e-
     - Katoda: Ag+(katoda) + e- -> Ag(s) (1.0 poin).
  2. Karena kedua elektroda adalah perak murni, E°sel = 0 (1.0 poin).
  3. Menurunkan persamaan Nernst:
     E_sel = 0 - (0,0592 / 1) * log([Ag+]_anoda / [Ag+]_katoda)
     E_sel = 0,0592 * log([Ag+]_katoda / [Ag+]_anoda) (3.0 poin).
- Sub-soal b (5.0 poin):
  1. Memasukkan data terukur ke persamaan Nernst:
     +0,5328 = 0,0592 * log(0,100 / [Ag+]_anoda) (1.0 poin).
     log(0,100 / [Ag+]_anoda) = 0,5328 / 0,0592 = 9,00 (1.5 poin).
  2. Menghitung konsentrasi [Ag+] di anoda:
     0,100 / [Ag+]_anoda = 10^9
     [Ag+]_anoda = 0,100 / 10^9 = 1,00 x 10^-10 M (1.5 poin).
  3. Menghitung Ksp AgBr:
     Konsentrasi ion bromida [Br-] didominasi oleh garam KBr (0,0100 M) karena kelarutan AgBr sangat kecil.
     Ksp = [Ag+]_anoda * [Br-] = (1,00 x 10^-10 M) * (0,0100 M) = 1,00 x 10^-12 (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan reaksi redoks yang berlangsung pada kedua elektroda dan turunkan persamaan Nernst yang menghubungkan potensial sel ($E_{\\text{sel}}$) dengan konsentrasi ion perak di kedua kompartemen!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi elektroda (1.5 poin), menyatakan E°sel = 0 (1.0 poin), dan menurunkan E_sel = 0,0592 * log([Ag+]_katoda / [Ag+]_anoda) (2.5 poin).',
        expected_answer: 'Reaksi sel: Ag+(katoda) -> Ag+(anoda); Nernst: E_sel = 0,0592 log([Ag+]_katoda / [Ag+]_anoda).',
      },
      {
        label: 'b',
        question_text: `Hitunglah konsentrasi molar ion perak bebas ($[\\ce{Ag+}]$) yang berada dalam kesetimbangan di kompartemen anoda, serta tentukan nilai tetapan hasil kali kelarutan ($K_{sp}$) garam $\\ce{AgBr}$ pada temperatur tersebut!`,
        points: 5.0,
        rubric: 'Menghitung log rasio = 9,0 (1.5 poin), menghitung [Ag+]_anoda = 1,00 x 10^-10 M (2.0 poin), dan menghitung Ksp = 1,00 x 10^-12 (1.5 poin).',
        expected_answer: '[Ag+]_anoda = 1,00 x 10^-10 M; Ksp AgBr = [Ag+][Br-] = 1,00 x 10^-12.',
      },
    ],
    solution_framework_template: `1. Formulasi Sel Konsentrasi Nernst:
• Reaksi setengah sel anoda dan katoda: ....
• Potensial sel standar E°sel: ....
• Penurunan persamaan Nernst terhadap rasio konsentrasi [Ag⁺]: ....

2. Evaluasi Konsentrasi Kation Bebas dan Penentuan Ksp:
• Kalkulasi logaritma rasio konsentrasi dari nilai E_sel terukur: ....
• Konsentrasi kesetimbangan kation Ag⁺ di kompartemen anoda: ....
• Konsentrasi anion Br⁻ dari elektrolit pendukung KBr: ....
• Nilai tetapan hasil kali kelarutan Ksp(AgBr) = [Ag⁺][Br⁻]: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['ksp-agbr', 'sel-konsentrasi', 'persamaan-nernst', 'termodinamika-larutan'],
  },
  {
    id: 114023,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Termodinamika & Kapasitas Spesifik Baterai Litium-Ion',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kajian Elektrokimia dan Kapasitas Spesifik Baterai Sekunder Litium-Ion',
    question_text: `Baterai sekunder litium-ion (Li-ion) menggerakkan revolusi kendaraan listrik dan gawai modern berdasarkan reaksi interkalasi reversibel ion $\\ce{Li+}$.
Arsitektur sel standar tersusun atas:
- **Anoda :** Karbon grafit yang menginterkalasi litium ($\\ce{Li_x C6}$)
- **Katoda :** Litium kobalt oksida berlapis ($\\ce{Li_{1-x} CoO2}$)
- **Elektrolit :** Garam $\\ce{LiPF6}$ terlarut dalam pelarut organik non-air (etilen karbonat).

Selesaikan analisis elektrokimia baterai litium-ion berikut:`,
    expected_final_answer: 'a) Reaksi Pengosongan (Discharge): Anoda LiC6 -> C6 + Li+ + e-; Katoda Li_1-x CoO2 + x Li+ + x e- -> LiCoO2; Reaksi Total LiC6 + CoO2 -> C6 + LiCoO2. Reaksi Pengisian (Charge) adalah kebalikan persisnya; b) Kapasitas spesifik teoritis anoda grafit Q_teoritis = 372 mAh/g. Pada tegangan kerja rata-rata 3,70 V, energi spesifik teoritis anoda adalah 1376 Wh/kg (1,38 kWh/kg).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan reaksi saat pengosongan (discharge / baterai menyuplai daya):
     - Anoda (oksidasi): LiC6 -> C6 + Li+ + e- (1.5 poin).
     - Katoda (reduksi): CoO2 + Li+ + e- -> LiCoO2 (atau Li_{1-x}CoO2 + x Li+ + x e- -> LiCoO2) (1.5 poin).
     - Reaksi sel total pengosongan: LiC6 + CoO2 -> C6 + LiCoO2 (1.0 poin).
  2. Menjelaskan proses pengisian (charge): sumber arus luar membalik aliran elektron sehingga LiCoO2 teroksidasi melepaskan ion Li+, dan ion Li+ bergerak kembali masuk ke kisi grafit C6 untuk membentuk LiC6 (reaksi berkebalikan persis) (1.0 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung kapasitas spesifik teoretis anoda grafit (C6):
     Reaksi interkalasi maksimum: Li+ + e- + 6C -> LiC6
     Massa molar 6 mol atom C: M = 6 x 12,011 g/mol = 72,066 g (1.0 poin).
     Muatan per mol C6: n = 1 mol e- = 96.485 Coulomb (1.0 poin).
  2. Konversi muatan Coulomb ke miliampere-jam (mAh):
     1 A s = 1 C => 1 Ah = 3600 C => 1 mAh = 3,6 C
     Q = 96.485 C / 3,6 C/mAh = 26.801,4 mAh (1.0 poin).
  3. Menghitung kapasitas spesifik Q_spesifik:
     Q_spesifik = 26.801,4 mAh / 72,066 g = 371,9 mAh/g ≈ 372 mAh/g (1.0 poin).
  4. Menghitung energi spesifik teoritis anoda pada tegangan 3,70 V:
     Energi spesifik = Q_spesifik * V = 371,9 mAh/g * 3,70 V = 1376 mWh/g = 1376 Wh/kg ≈ 1,38 kWh/kg (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi setengah sel di anoda dan katoda serta reaksi sel total yang berlangsung saat proses pengosongan baterai (*discharge*), serta jelaskan bagaimana mekanisme reversibilitas reaksi saat proses pengisian ulang (*charge*)!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi anoda LiC6 -> C6 + Li+ + e- (1.5 poin), katoda CoO2 + Li+ + e- -> LiCoO2 (1.5 poin), reaksi total (1.0 poin), dan penjelasan pengisian ulang (1.0 poin).',
        expected_answer: 'Discharge: Anoda LiC6 -> C6 + Li+ + e-; Katoda CoO2 + Li+ + e- -> LiCoO2; Total: LiC6 + CoO2 -> C6 + LiCoO2. Saat charge reaksi berbalik sempurna.',
      },
      {
        label: 'b',
        question_text: `Berdasarkan stoikiometri interkalasi maksimum $\\ce{Li+ + e- + 6C -> LiC6}$ ($A_r\\ \\ce{C} = 12{,}01\\text{ g/mol}$), turunkan dan hitunglah kapasitas muatan spesifik teoretis anoda grafit dalam satuan $\\text{mAh/g}$, serta tentukan energi spesifik teoretisnya pada tegangan operasional rata-rata $3{,}70\\text{ V}$!`,
        points: 5.0,
        rubric: 'Menghitung muatan Faraday per massa 6 C (2.0 poin), konversi ke mAh/g = 372 mAh/g (2.0 poin), dan menghitung energi spesifik = 1376 Wh/kg (1.0 poin).',
        expected_answer: 'Kapasitas spesifik teoritis anoda grafit Q = 372 mAh/g; energi spesifik teoritis = 1376 Wh/kg (1,38 kWh/kg).',
      },
    ],
    solution_framework_template: `1. Mekanisme Reaksi Elektrokimia Baterai Li-Ion:
• Reaksi deinterkalasi anoda saat discharge: ....
• Reaksi interkalasi katoda saat discharge: ....
• Reaksi total sel Li-ion dan transfer ion Li⁺: ....
• Siklus reversibilitas elektrokimia saat pengisian (charging): ....

2. Evaluasi Metrik Penyimpanan Energi Elektrokimia:
• Massa molar unit penyimpan grafit (C6): ....
• Muatan listrik molar elektron (F = 96.485 C/mol): ....
• Konversi muatan ke satuan praktis miliampere-jam (mAh): ....
• Kapasitas muatan gravimetrik spesifik (mAh/g): ....
• Energi spesifik teoritis (Wh/kg = mAh/g · V_kerja): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Terapan & Material Energi',
    tags: ['baterai-litium-ion', 'kapasitas-spesifik', 'interkalasi', 'penyimpanan-energi'],
  },
  {
    id: 114024,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Rekayasa Sel Klor-Alkali Membran Nafion',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Rekayasa Kimia Sel Klor-Alkali Membran Penukar Kation',
    question_text: `Industri klor-alkali modern memproduksi gas klorin ($\\ce{Cl2}$), gas hidrogen ($\\ce{H2}$), dan larutan natrium hidroksida ($\\ce{NaOH}$) murni menggunakan **Sel Elektrolisis Membran**.
Membran penukar kation (seperti polimer fluorokarbon sulfonat *Nafion*) memisahkan kompartemen anoda dan katoda.
- **Kompartemen Anoda :** Dialiri larutan jenuh $\\ce{NaCl}$ pekat (*brine*).
- **Kompartemen Katoda :** Dialiri air murni atau larutan $\\ce{NaOH}$ encer.

Selesaikan analisis teknis dan stoikiometri skala industri berikut:`,
    expected_final_answer: 'a) Anoda (+): 2Cl-(aq) -> Cl2(g) + 2e-; Katoda (-): 2H2O(l) + 2e- -> H2(g) + 2OH-(aq). Membran Nafion hanya meloloskan ion Na+ dari anoda ke katoda, memblokir Cl- dan OH- sehingga mencegah pembentukan hipoklorit (ClO-) dan menghasilkan NaOH dengan kemurnian sangat tinggi; b) Total muatan efektif Q_eff = 8,208 x 10^8 Coulomb (8505,7 Faraday). Massa NaOH murni = 340,2 kg; Volume gas Cl2 pada STP = 95,26 m^3 (95.260 Liter).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan reaksi anoda: 2Cl-(aq) -> Cl2(g) + 2e- (1.0 poin).
  2. Menuliskan reaksi katoda: 2H2O(l) + 2e- -> H2(g) + 2OH-(aq) (1.0 poin).
  3. Menjelaskan fungsi selektif membran Nafion:
     - Gugus sulfonat bermuatan negatif (-SO3^-) pada rantai polimer menarik dan meloloskan kation Na+ menyeberang dari anoda ke katoda (1.0 poin).
     - Tolakan elektrostatik mencegah anion Cl^- menyeberang ke katoda (sehingga NaOH bebas garam klorida) dan mencegah anion OH^- menyeberang ke anoda (sehingga gas Cl2 tidak bereaksi dengan OH^- membentuk ClO^- / ClO3^-) (2.0 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung muatan listrik teoritis:
     Waktu t = 24 jam = 24 x 3600 detik = 86.400 detik.
     Q_teoritis = I * t = 10.000 A * 86.400 s = 8,64 x 10^8 Coulomb (1.0 poin).
  2. Menghitung muatan efektif dengan efisiensi arus 95%:
     Q_efektif = 0,95 * (8,64 x 10^8) = 8,208 x 10^8 C (1.0 poin).
     Mol elektron (Faraday) = 8,208 x 10^8 / 96.500 = 8505,7 mol e- (0.5 poin).
  3. Menghitung massa NaOH yang diproduksi:
     Setiap 1 mol e- menghasilkan 1 mol OH^- (membentuk 1 mol NaOH, Mr = 40,00 g/mol):
     n_NaOH = 8505,7 mol
     Massa NaOH = 8505,7 mol * 40,00 g/mol = 340.228 g ≈ 340,2 kg (1.25 poin).
  4. Menghitung volume gas Cl2 pada STP:
     Setiap 2 mol e- menghasilkan 1 mol Cl2:
     n_Cl2 = 8505,7 / 2 = 4252,85 mol
     Volume Cl2 (STP) = 4252,85 mol * 22,4 L/mol = 95.264 L ≈ 95,26 m^3 (1.25 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan reaksi elektrokimia di anoda dan katoda, serta jelaskan peran spesifik membran penukar kation Nafion dalam mencegah kontaminasi produk dan meningkatkan efisiensi proses industri!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi anoda dan katoda (2.0 poin). Menjelaskan selektivitas kation Na+ dan pencegahan reaksi samping Cl2 + OH- (3.0 poin).',
        expected_answer: 'Anoda: 2Cl- -> Cl2 + 2e-; Katoda: 2H2O + 2e- -> H2 + 2OH-; membran Nafion hanya melewatkan ion Na+, memblokir Cl- dan OH- sehingga mencegah pembentukan hipoklorit dan menghasilkan NaOH murni.',
      },
      {
        label: 'b',
        question_text: `Jika unit elektrolisis beroperasi dengan kuat arus $10.000\\text{ Ampere}$ secara kontinu selama $24\\text{ jam}$ dengan efisiensi arus listrik sebesar $95{,}0\\%$, hitunglah massa $\\ce{NaOH}$ murni yang diproduksi (dalam satuan $\\text{kg}$) dan volume gas $\\ce{Cl2}$ yang dihasilkan pada kondisi standar ($STP$) dalam satuan $\\text{m}^3$!`,
        points: 5.0,
        rubric: 'Menghitung mol e- efektif = 8505,7 mol (2.0 poin), menghitung massa NaOH = 340,2 kg (1.5 poin), dan volume gas Cl2 = 95,26 m^3 (1.5 poin).',
        expected_answer: 'Massa NaOH = 340,2 kg; Volume gas Cl2 pada STP = 95,26 m^3 (95.264 Liter).',
      },
    ],
    solution_framework_template: `1. Prinsip Operasional Sel Elektrolisis Membran:
• Reaksi oksidasi halida di anoda: ....
• Reaksi reduksi molekul air di katoda: ....
• Mekanisme selektivitas ionik membran penukar kation (Nafion): ....
• Pencegahan degradasi produk sekunder (formasi ClO⁻): ....

2. Perhitungan Kuantitatif Kapasitas Produksi Industri:
• Durasi waktu operasional dalam satuan detik: ....
• Muatan listrik total terpakai (Q = I · t · efisiensi): ....
• Jumlah mol elektron e⁻ (Faraday): ....
• Massa NaOH murni terakumulasi (kg): ....
• Volume gas Cl2 dihasilkan pada kondisi standar STP (m³): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Terapan & Teknik Kimia',
    tags: ['sel-membran', 'klor-alkali', 'nafion', 'stoikiometri-industri', 'hukum-faraday'],
  },
  {
    id: 114025,
    sma_topic_number: 14,
    sma_topic_id: 114,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Analisis Diagram Pourbaix (E-pH) Sistem Besi-Air',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Interpretasi Termodinamika Diagram Pourbaix Sistem Besi-Air dan Rekayasa Proteksi Korosi',
    question_text: `Diagram Pourbaix (diagram $E-\\text{pH}$) memetakan daerah kestabilan termodinamika fasa padatan dan ion terlarut suatu logam dalam media air sebagai fungsi dari potensial reduksi ($E$) dan derajat keasaman ($\\text{pH}$).
Pada diagram Pourbaix sistem besi-air ($\\ce{Fe - H2O}$) pada $25^\\circ\\text{C}$:
- **Zona Imunitas (*Immunity*) :** Besi stabil sebagai logam murni $\\ce{Fe(s)}$.
- **Zona Korosi Aktif (*Corrosion*) :** Besi terlarut secara termodinamika sebagai kation $\\ce{Fe^2+(aq)}$ atau $\\ce{Fe^3+(aq)}$.
- **Zona Pasivasi (*Passivation*) :** Terbentuk lapisan tipis pelindung padatan oksida/hidroksida $\\ce{Fe2O3(s)}$ atau $\\ce{Fe(OH)3(s)}$ yang melekat rapat pada permukaan logam.

Selesaikan analisis termodinamika kesetimbangan Pourbaix berikut:`,
    expected_final_answer: 'a) Kesetimbangan Fe^3+ / Fe2O3: 2Fe^3+ + 3H2O <=> Fe2O3 + 6H+. Persamaan batas Nernst tidak bergantung pada potensial E melainkan murni kesetimbangan asam-basa pH: pH = 1,61 (pada [Fe^3+] = 1,0 x 10^-6 M), berupa garis vertikal tegak pada diagram Pourbaix; b) Proteksi katodik menurunkan potensial E di bawah kurva imunitas (E < -0,62 V) sehingga Fe stabil sebagai logam bebas; Proteksi anodik menaikkan potensial E atau menaikkan pH ke zona pasivasi (pH > 9) sehingga terbentuk lapisan oksida Fe2O3 padat yang menghentikan korosi.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan reaksi kesetimbangan hidrolisis pembentukan pasivasi hematit:
     2Fe^3+(aq) + 3H2O(l) <=> Fe2O3(s) + 6H+(aq) (1.5 poin).
  2. Menganalisis perubahan elektron:
     Pada kedua sisi reaksi, besi berada pada tingkat oksidasi +3 (tidak ada transfer elektron, n = 0). Oleh karena itu, kesetimbangan ini tidak dipengaruhi oleh potensial reduksi E, melainkan hanya bergantung pada pH (menghasilkan garis vertikal tegak lurus sumbu pH pada diagram Pourbaix) (1.5 poin).
  3. Menghitung pH batas:
     Tetapan kesetimbangan: K = [H+]^6 / [Fe^3+]^2
     Berdasarkan termodinamika standar, log K = -1,42 => 6 log[H+] - 2 log[Fe^3+] = -1,42
     Untuk konsentrasi standar korosi [Fe^3+] = 1,0 x 10^-6 M (log[Fe^3+] = -6):
     -6 pH - 2(-6) = -1,42 => -6 pH + 12 = -1,42 => 6 pH = 13,42 => pH = 2,24 (atau rentang 1,6 - 2,3 tergantung data delta G°) (2.0 poin).
- Sub-soal b (5.0 poin):
  1. Menjelaskan proteksi katodik berdasarkan diagram Pourbaix:
     Menggeser potensial logam secara artifisial ke bawah menuju **zona imunitas** ($E < E_{\\text{imun}}$) menggunakan arus tanding (*impressed current*) atau anoda korban Mg/Zn. Pada daerah ini, fasa logam Fe(s) secara termodinamika merupakan spesi paling stabil sehingga besi mustahil teroksidasi (2.5 poin).
  2. Menjelaskan proteksi anodik dan modulasi pH:
     - Proteksi anodik: menggeser potensial ke atas secara terkontrol memasuki **zona pasivasi** stabil, memicu pembentukan film tipis nanometer $\\ce{Fe2O3}$ yang rapat dan tidak berpori, memblokir kontak besi dengan air (1.5 poin).
     - Modulasi pH lingkungan (inhibitor basa): menambahkan basa untuk menaikkan $\\text{pH} > 9 - 10$ menggeser kesetimbangan dari zona korosi $\\ce{Fe^2+}$ masuk ke zona pasivasi $\\ce{Fe(OH)2 / Fe2O3}$ (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi kesetimbangan antara ion besi(III) terlarut ($\\ce{Fe^3+}$) dengan oksida padat pasivasi ($\\ce{Fe2O3}$). Jelaskan mengapa garis batas kesetimbangan antara kedua spesi ini berwujud garis vertikal tegak lurus sumbu pH pada Diagram Pourbaix!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi 2Fe^3+ + 3H2O <=> Fe2O3 + 6H+ (2.0 poin). Menjelaskan bahwa reaksi tidak melibatkan transfer elektron (biloks tetap +3) sehingga independen terhadap potensial E dan membentuk garis vertikal pH (3.0 poin).',
        expected_answer: '2Fe^3+ + 3H2O <=> Fe2O3 + 6H+; garis berwujud vertikal karena tidak melibatkan perubahan elektron (keduanya Fe(III)) sehingga kesetimbangan murni fungsi pH bebas dari potensial E.',
      },
      {
        label: 'b',
        question_text: `Berdasarkan pergeseran posisi koordinat pada Diagram Pourbaix, jelaskan perbedaan mendasar prinsip perlindungan logam antara teknik **Proteksi Katodik** (menggeser potensial ke zona imunitas) dan teknik **Proteksi Anodik / Pasivasi Basa** (menggeser potensial ke zona pasivasi)!`,
        points: 5.0,
        rubric: 'Menjelaskan proteksi katodik menurunkan E ke zona imunitas logam Fe bebas (2.5 poin). Menjelaskan proteksi anodik/pasivasi menggeser sistem ke zona pasivasi pembentukan lapisan pelindung Fe2O3 (2.5 poin).',
        expected_answer: 'Proteksi katodik menurunkan potensial E ke daerah imunitas di mana logam Fe stabil secara termodinamika; proteksi anodik menaikkan E atau pH ke zona pasivasi sehingga terbentuk lapisan oksida Fe2O3 rapat yang menghalangi korosi lebih lanjut.',
      },
    ],
    solution_framework_template: `1. Termodinamika Kesetimbangan Fasa Diagram Pourbaix:
• Reaksi kesetimbangan ion Fe³⁺ terlarut vs padatan hematit Fe2O3: ....
• Tinjauan bilangan oksidasi dan transfer elektron (n): ....
• Alasan fisis orientasi vertikal garis kesetimbangan (bebas dari E): ....

2. Rekayasa Elektrokimia Pengendalian Korosi Berbasis E-pH:
• Mekanisme proteksi katodik (pergeseran koordinat ke zona imunitas Fe⁰): ....
• Mekanisme proteksi anodik (pembentukan lapisan pasivasi oksida rapat): ....
• Efek alkalinisasi lingkungan (penambahan inhibitor basa terhadap kestabilan pasivasi): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik & Korosi Material',
    tags: ['diagram-pourbaix', 'potensial-ph', 'pasivasi-besi', 'proteksi-anodik-katodik'],
  },
];
