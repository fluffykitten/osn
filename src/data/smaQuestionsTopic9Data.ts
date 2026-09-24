/**
 * smaQuestionsTopic9Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F & OSN Pilar 5)
 * 
 * BATCH 9: Larutan Asam-Basa & Titrasi Netralisasi SMA (Topik 9 SMA / Modul 109)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 109001 - 109025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 109001 - 109025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 109001 - 109025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_9_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 109001 - 109025)
  // =========================================================================
  {
    id: 109001,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Teori Asam-Basa Brønsted-Lowry & Pasangan Konjugasi',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Pasangan Asam-Basa Konjugasi pada Larutan Amonia',
    question_text: `Gas amonia dilarutkan ke dalam air menghasilkan larutan basa menurut persamaan reaksi kesetimbangan:
$$\\ce{NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq)}$$

Berdasarkan teori asam-basa Brønsted-Lowry, pernyataan yang **paling tepat** mengenai spesi-spesi dalam reaksi tersebut adalah ....

A. $\\ce{H2O}$ bertindak sebagai basa karena mendonorkan proton $\\ce{H+}$ kepada $\\ce{NH3}$  
B. $\\ce{NH4+}$ bertindak sebagai asam konjugasi dari basa $\\ce{NH3}$  
C. $\\ce{OH-}$ adalah asam konjugasi dari $\\ce{H2O}$  
D. $\\ce{NH3}$ bertindak sebagai asam karena menerima proton $\\ce{H+}$ dari air  
E. Reaksi tersebut membuktikan bahwa air bersifat asam kuat`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Asam-Basa Brønsted-Lowry:**
   - **Asam:** Spesi yang mendonorkan proton (ion $\\ce{H+}$).
   - **Basa:** Spesi yang menerima proton (akseptor ion $\\ce{H+}$).
2. **Analisis Transfer Proton pada Reaksi:**
   $$\\ce{NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq)}$$
   - $\\ce{NH3}$ menerima $1$ proton $\\ce{H+}$ menjadi $\\ce{NH4+} \\implies \\ce{NH3}$ adalah **Basa**.
   - Spesi $\\ce{NH4+}$ yang terbentuk setelah basa menerima proton adalah **Asam Konjugasi**. Pasangan konjugasi pertama: $(\\ce{NH3} / \\ce{NH4+})$.
   - $\\ce{H2O}$ melepaskan $1$ proton $\\ce{H+}$ menjadi $\\ce{OH-} \\implies \\ce{H2O}$ adalah **Asam**.
   - Spesi $\\ce{OH-}$ yang tersisa setelah asam mendonorkan proton adalah **Basa Konjugasi**. Pasangan konjugasi kedua: $(\\ce{H2O} / \\ce{OH-})$.
3. **Kesimpulan Opsi:**
   Opsi B benar karena $\\ce{NH4+}$ adalah asam konjugasi dari $\\ce{NH3}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Kelas 11 Fase F',
    tags: ['bronsted-lowry', 'asam-basa-konjugasi', 'transfer-proton', 'larutan-amonia'],
  },
  {
    id: 109002,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Perhitungan pH Asam Kuat Bervalensi Dua',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Nilai pH Larutan Asam Sulfat Encer',
    question_text: `Sebanyak $0{,}0050\\ \\text{mol}$ asam sulfat ($\\ce{H2SO4}$) dilarutkan ke dalam air suling hingga volume larutan tepat mencapai $1{,}0\\ \\text{Liter}$ pada suhu $25^\\circ\\text{C}$.

Jika asam sulfat terionisasi sempurna menjadi ion-ionnya ($\\ce{H2SO4(aq) -> 2 H+(aq) + SO4^2-(aq)}$), maka nilai derajat keasaman (pH) larutan tersebut adalah ....

A. $2{,}0$  
B. $2{,}3$  
C. $3{,}0$  
D. $1{,}7$  
E. $12{,}0$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Molaritas Asam Sulfat ($M_a$):**
   $$M_a = \\frac{n}{V} = \\frac{0{,}0050\\ \\text{mol}}{1{,}0\\ \\text{L}} = 5{,}0 \\times 10^{-3}\\ \\text{M}$$
2. **Menghitung Konsentrasi Ion Hidrogen ($[\\ce{H+}]$):**
   Asam sulfat merupakan asam kuat bervalensi dua ($a = 2$):
   $$[\\ce{H+}] = a \\times M_a = 2 \\times (5{,}0 \\times 10^{-3}\\ \\text{M}) = 1{,}0 \\times 10^{-2}\\ \\text{M}$$
3. **Menghitung Nilai pH:**
   $$\\text{pH} = -\\log[\\ce{H+}] = -\\log(1{,}0 \\times 10^{-2}) = \\mathbf{2{,}0}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['asam-kuat', 'asam-diprotik', 'asam-sulfat', 'perhitungan-ph'],
  },
  {
    id: 109003,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Perhitungan pOH dan pH Basa Kuat Bervalensi Dua',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Nilai pH Larutan Barium Hidroksida Ba(OH)2',
    question_text: `Suatu larutan basa kuat barium hidroksida ($\\ce{Ba(OH)2}$) memiliki konsentrasi $0{,}025\\ \\text{M}$.

Pada temperatur $25^\\circ\\text{C}$ (di mana tetapan air $K_w = 1{,}0 \\times 10^{-14}$), nilai pH dari larutan barium hidroksida tersebut adalah ....

A. $1{,}30$  
B. $2{,}00 - \\log 5$  
C. $12{,}00$  
D. $12{,}00 + \\log 5$  
E. $12{,}70 + \\log 2$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Konsentrasi Ion Hidroksida ($[\\ce{OH-}]$):**
   Barium hidroksida adalah basa kuat bervalensi dua ($b = 2$):
   $$\\ce{Ba(OH)2(aq) -> Ba^2+(aq) + 2 OH-(aq)}$$
   $$[\\ce{OH-}] = b \\times M_b = 2 \\times 0{,}025\\ \\text{M} = 0{,}050\\ \\text{M} = 5{,}0 \\times 10^{-2}\\ \\text{M}$$
2. **Menghitung Nilai pOH:**
   $$\\text{pOH} = -\\log[\\ce{OH-}] = -\\log(5{,}0 \\times 10^{-2}) = 2 - \\log 5$$
3. **Menghitung Nilai pH:**
   $$\\text{pH} = 14 - \\text{pOH} = 14 - (2 - \\log 5) = \\mathbf{12 + \\log 5} \\quad (\\text{atau } \\approx 12{,}70)$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Kelas 11 Fase F',
    tags: ['basa-kuat', 'valensi-basa', 'barium-hidroksida', 'perhitungan-ph-poh'],
  },
  {
    id: 109004,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Perhitungan pH & Derajat Ionisasi Asam Lemah Monoprotik',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penentuan Konsentrasi Ion H+, Derajat Ionisasi, dan pH Asam Asetat',
    question_text: `Suatu sampel larutan asam cuka (asam asetat, $\\ce{CH3COOH}$) dibuat dengan konsentrasi $0{,}10\\ \\text{M}$. Diketahui tetapan ionisasi asam asetat pada suhu kamar adalah $K_a = 1{,}8 \\times 10^{-5}$ (diketahui $\\sqrt{1{,}8} \\approx 1{,}34$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah konsentrasi ion hidrogen ([H+]) dalam larutan tersebut dan tentukan nilai derajat keasaman (pH) larutan!',
        points: 2.5,
        rubric: 'Menghitung [H+] = sqrt(Ka * Ca) = sqrt(1,8 x 10^-5 * 0,10) = sqrt(1,8 x 10^-6) = 1,34 x 10^-3 M (1.5 poin). Menghitung pH = -log(1,34 x 10^-3) = 3 - log 1,34 ≈ 2,87 (1 poin).',
        expected_answer: '[H+] = 1,34 x 10^-3 M; pH = 3 - log 1,34 ≈ 2,87'
      },
      {
        label: 'b',
        question_text: 'Tentukan derajat ionisasi (alfa) dari asam asetat dalam larutan tersebut serta hitung persentase molekul yang terionisasi!',
        points: 2.5,
        rubric: 'Menghitung derajat ionisasi alfa = [H+] / Ca = (1,34 x 10^-3) / 0,10 = 0,0134 (atau alfa = sqrt(Ka / Ca) = sqrt(1,8 x 10^-4) = 0,0134) (1.5 poin). Menghitung persen ionisasi = 0,0134 * 100% = 1,34% (1 poin).',
        expected_answer: 'alfa = 0,0134; persentase ionisasi = 1,34%'
      }
    ],
    expected_final_answer: 'a. [H+] = 1,34 x 10^-3 M, pH ≈ 2,87; b. alfa = 0,0134 (1,34%).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Konsentrasi $[\ce{H+}]$ dan Nilai pH (Bobot: 2.5 Poin)**
   - Asam asetat terionisasi sebagian: $\\ce{CH3COOH(aq) <=> CH3COO-(aq) + H+(aq)}$.
   - Karena $K_a \\ll 1$, berlaku rumus aproksimasi asam lemah:
     $$[\\ce{H+}] = \\sqrt{K_a \\times C_a} = \\sqrt{(1{,}8 \\times 10^{-5}) \\times 0{,}10} = \\sqrt{1{,}8 \\times 10^{-6}} = \\mathbf{1{,}34 \\times 10^{-3}\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
   - Nilai pH larutan:
     $$\\text{pH} = -\\log[\\ce{H+}] = -\\log(1{,}34 \\times 10^{-3}) = 3 - \\log 1{,}34 = \\mathbf{2{,}87} \\quad (1{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Derajat Ionisasi ($\\alpha$) (Bobot: 2.5 Poin)**
   - Derajat ionisasi dihitung dari:
     $$\\alpha = \\frac{[\\ce{H+}]}{C_a} = \\frac{1{,}34 \\times 10^{-3}\\ \\text{M}}{0{,}10\\ \\text{M}} = \\mathbf{0{,}0134} \\quad (1{,}5\\ \\text{poin})$$
     *(Atau: $\\alpha = \\sqrt{\\frac{K_a}{C_a}} = \\sqrt{\\frac{1{,}8 \\times 10^{-5}}{0{,}10}} = \\sqrt{1{,}8 \\times 10^{-4}} = 0{,}0134$)*
   - Persentase molekul terionisasi:
     $$\\%\\alpha = 0{,}0134 \\times 100\\% = \\mathbf{1{,}34\\%} \\quad (1{,}0\\ \\text{poin})$$`,
    solution_framework_template: `1. Formulasi Asam Lemah:
• Rumus kesetimbangan ionisasi Ka: ....
• Perhitungan [H+] = sqrt(Ka * Ca): ....
• Penentuan nilai pH: ....

2. Evaluasi Derajat Ionisasi Alfa:
• Rasio ion H+ terhadap konsentrasi analit awal: ....
• Nilai numerik desimal alfa: ....
• Konversi ke bentuk persentase ionisasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['asam-lemah', 'tetapan-ka', 'derajat-ionisasi-alfa', 'perhitungan-ph'],
  },
  {
    id: 109005,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Titrasi Netralisasi Asidimetri Langsung HCl - NaOH',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penentuan Konsentrasi Larutan Asam Klorida via Titrasi Alkalimetri',
    question_text: `Sebanyak $25{,}0\\ \\text{mL}$ larutan asam klorida ($\\ce{HCl}$) yang belum diketahui konsentrasinya dimasukkan ke dalam labu Erlenmeyer, lalu ditetesi $3$ tetes indikator fenolftalein (PP). Larutan tersebut kemudian dititrasi dengan larutan standar natrium hidroksida ($\\ce{NaOH}$) berkonsentrasi $0{,}100\\ \\text{M}$ menggunakan buret. Titik akhir titrasi tercapai tepat ketika buret mengeluarkan $20{,}0\\ \\text{mL}$ larutan $\\ce{NaOH}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan reaksi netralisasi setara yang terjadi dan jelaskan fenomena perubahan warna indikator pada titik akhir titrasi!',
        points: 2.5,
        rubric: 'Menuliskan reaksi netralisasi setara: HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) (1 poin). Menjelaskan perubahan warna dari tidak berwarna (colorless) menjadi merah muda pucat (faint pink) yang bertahan minimal 30 detik (1.5 poin).',
        expected_answer: 'HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l); warna berubah dari tidak berwarna menjadi merah muda pucat yang bertahan.'
      },
      {
        label: 'b',
        question_text: 'Hitunglah konsentrasi molaritas ([M]) larutan asam klorida (HCl) tersebut berdasarkan data volumetri titrasi!',
        points: 2.5,
        rubric: 'Menuliskan rumus ekivalensi: Va * Ma * a = Vb * Mb * b (1 poin). Mensubstitusi data: 25,0 mL * Ma * 1 = 20,0 mL * 0,100 M * 1, sehingga Ma = (20,0 * 0,100) / 25,0 = 2,00 / 25,0 = 0,0800 M (1.5 poin).',
        expected_answer: 'Ma = 0,0800 M'
      }
    ],
    expected_final_answer: 'a. HCl + NaOH -> NaCl + H2O, tidak berwarna -> merah muda pucat; b. [HCl] = 0,0800 M.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Persamaan Reaksi dan Titik Akhir (Bobot: 2.5 Poin)**
   - Reaksi penetralan asam kuat dan basa kuat:
     $$\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)} \\quad (1{,}0\\ \\text{poin})$$
   - Pada suasana asam di Erlenmeyer, indikator PP **tidak berwarna (*colorless*)**.
   - Ketika seluruh ion $\\ce{H+}$ tepat ternetralisasi dan terdapat kelebihan satu tetes kecil basa $\\ce{OH-}$, pH larutan melampaui $8{,}3$ sehingga larutan berubah warna menjadi **merah muda pucat (*faint pink*)** yang stabil dan tidak hilang saat digoyang. *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Perhitungan Molaritas $\ce{HCl}$ (Bobot: 2.5 Poin)**
   - Pada titik ekuivalen volumetri:
     $$n(\\ce{H+}) = n(\\ce{OH-})$$
     $$V_{\\text{asam}} \\times M_{\\text{asam}} \\times a = V_{\\text{basa}} \\times M_{\\text{basa}} \\times b \\quad (1{,}0\\ \\text{poin})$$
   - Diketahui: $V_a = 25{,}0\\ \\text{mL}$, $a = 1$; $V_b = 20{,}0\\ \\text{mL}$, $M_b = 0{,}100\\ \\text{M}$, $b = 1$:
     $$25{,}0\\ \\text{mL} \\times M_{\\ce{HCl}} \\times 1 = 20{,}0\\ \\text{mL} \\times 0{,}100\\ \\text{M} \\times 1$$
     $$M_{\\ce{HCl}} = \\frac{2{,}00\\ \\text{mmol}}{25{,}0\\ \\text{mL}} = \\mathbf{0{,}0800\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$`,
    solution_framework_template: `1. Reaksi Kimia dan Indikator Visual:
• Persamaan reaksi netralisasi molekular: ....
• Trayek fenolftalein dan transisi warna titik akhir: ....

2. Komputasi Stoikiometri Volumetri:
• Rumus ekuivalensi Va * Ma * a = Vb * Mb * b: ....
• Substitusi volume dan molaritas titran: ....
• Nilai konsentrasi analit asam klorida: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Praktikum & Penilaian Harian Kimia SMA Fase F',
    tags: ['titrasi-asam-basa', 'asidimetri-alkalimetri', 'titik-ekuivalen', 'indikator-fenolftalein'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 109001 - 109025)
  // =========================================================================
  {
    id: 109006,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Teori Asam-Basa Lewis & Pembentukan Ikatan Kovalen Koordinasi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Peran Donor-Akseptor Pasangan Elektron Bebas pada Reaksi Pembentukan Senyawa Kompleks',
    question_text: `Perhatikan dua reaksi kimia berikut:
1. $\\ce{BF3 + NH3 -> F3B:NH3}$
2. $\\ce{Cu^2+ + 4 NH3 -> [Cu(NH3)4]^2+}$

Berdasarkan teori asam-basa Gilbert N. Lewis, pernyataan yang **paling tepat** mengenai peran spesi dalam kedua reaksi tersebut adalah ....

A. $\\ce{NH3}$ bertindak sebagai asam Lewis karena menerima pasangan elektron bebas  
B. $\\ce{BF3}$ bertindak sebagai basa Lewis karena memiliki orbital kosong pada atom boron  
C. $\\ce{BF3}$ dan ion $\\ce{Cu^2+}$ bertindak sebagai asam Lewis karena keduanya bertindak sebagai akseptor pasangan elektron bebas (PEB)  
D. Reaksi 2 bukan reaksi asam-basa karena tidak melibatkan perpindahan ion hidrogen ($\\ce{H+}$)  
E. Ikatan yang terbentuk antara $\\ce{Cu^2+}$ dan $\\ce{NH3}$ adalah ikatan ionik murni`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Teori Asam-Basa Lewis:**
   - **Asam Lewis:** Spesi kimia (atom, ion, atau molekul) yang dapat **menerima pasangan elektron bebas (akseptor PEB)** karena memiliki orbital valensi yang kosong atau belum terisi penuh (*electron-deficient*).
   - **Basa Lewis:** Spesi kimia yang dapat **mendonorkan pasangan elektron bebas (donor PEB)** untuk membentuk ikatan kovalen koordinasi (datif).
2. **Analisis Reaksi 1 ($\\ce{BF3 + NH3 -> F3B:NH3}$):**
   - Atom $\\ce{B}$ pada $\\ce{BF3}$ hanya dikelilingi $6$ elektron valensi (belum oktet, memiliki orbital $2p$ kosong) $\\implies$ bertindak sebagai **Asam Lewis**.
   - Atom $\\ce{N}$ pada $\\ce{NH3}$ memiliki sepasang elektron bebas (PEB) $\\implies$ bertindak sebagai **Basa Lewis**.
3. **Analisis Reaksi 2 ($\\ce{Cu^2+ + 4 NH3 -> [Cu(NH3)4]^2+}$):**
   - Kation logam transisi $\\ce{Cu^2+}$ memiliki orbital $3d, 4s, 4p$ kosong yang siap menerima PEB dari ligan $\\implies$ bertindak sebagai **Asam Lewis**.
   - Molekul $\\ce{NH3}$ bertindak sebagai ligan donor PEB $\\implies$ bertindak sebagai **Basa Lewis**.
4. **Kesimpulan:**
   Pernyataan C benar: $\\ce{BF3}$ dan $\\ce{Cu^2+}$ bertindak sebagai asam Lewis.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Penilaian Akhir Semester (PAS) Kimia SMA',
    tags: ['asam-basa-lewis', 'ikatan-kovalen-koordinasi', 'senyawa-kompleks', 'akseptor-peb'],
  },
  {
    id: 109007,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Pengaruh Temperatur terhadap Autoprotolisis Air & pH Netral',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Evaluasi pH dan Sifat Netralitas Air Murni pada Temperatur 60 °C',
    question_text: `Reaksi autoprotolisis air murni: $\\ce{H2O(l) <=> H+(aq) + OH-(aq)}$ berlangsung secara endotermik ($\\Delta H > 0$). Pada temperatur $60^\\circ\\text{C}$, nilai tetapan hasil kali ion air meningkat menjadi $K_w = 1{,}0 \\times 10^{-13}$.

Pernyataan yang **paling tepat** mengenai kondisi air murni pada temperatur $60^\\circ\\text{C}$ tersebut adalah ....

A. Air murni berubah menjadi larutan asam karena nilai $\\text{pH} = 6{,}5$ ($< 7{,}0$)  
B. Air murni berubah menjadi larutan basa karena ion $\\ce{OH-}$ lebih mudah terbentuk pada suhu tinggi  
C. Air murni tetap bersifat netral karena konsentrasi $[\\ce{H+}] = [\\ce{OH-}] = \\sqrt{10^{-13}} \\approx 3{,}16 \\times 10^{-7}\\ \\text{M}$, dengan nilai pH netral sama dengan $6{,}5$  
D. Nilai $\\text{pH} + \\text{pOH}$ pada suhu $60^\\circ\\text{C}$ tetap sama dengan $14{,}0$  
E. Air murni tidak dapat menghantarkan arus listrik sama sekali karena $K_w$ mengecil`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Hakiki Larutan Netral:**
   Larutan dikatakan **netral** jika dan hanya jika konsentrasi ion hidrogen sama persis dengan konsentrasi ion hidroksida:
   $$[\\ce{H+}] = [\\ce{OH-}]$$
   Definisi netral BUKAN selalu $\\text{pH} = 7$. Nilai $\\text{pH} = 7$ hanya berlaku khusus pada suhu $25^\\circ\\text{C}$ di mana $K_w = 10^{-14}$.
2. **Kalkulasi pada Suhu $60^\\circ\\text{C}$ ($K_w = 1{,}0 \\times 10^{-13}$):**
   $$K_w = [\\ce{H+}][\\ce{OH-}] = [\\ce{H+}]^2 = 1{,}0 \\times 10^{-13}$$
   $$[\\ce{H+}] = [\\ce{OH-}] = \\sqrt{1{,}0 \\times 10^{-13}} \\approx 3{,}16 \\times 10^{-7}\\ \\text{M}$$
   $$\\text{pH} = -\\log(3{,}16 \\times 10^{-7}) = 7 - \\log 3{,}16 = 7 - 0{,}5 = \\mathbf{6{,}5}$$
   $$\\text{p}K_w = \\text{pH} + \\text{pOH} = 6{,}5 + 6{,}5 = \\mathbf{13{,}0}$$
3. **Kesimpulan:**
   Meskipun nilai pH-nya $6{,}5$, air murni pada $60^\\circ\\text{C}$ **tetap bersifat NETRAL** karena $[\\ce{H+}] = [\\ce{OH-}]$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA Bidang Kimia Larutan',
    tags: ['autoprotolisis-air', 'tetapan-kw', 'pengaruh-suhu', 'definisi-ph-netral'],
  },
  {
    id: 109008,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Hukum Pengenceran Ostwald untuk Asam Lemah',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Pengaruh Pengenceran Larutan terhadap Derajat Ionisasi Asam Asetat',
    question_text: `Suatu larutan asam lemah monoprotik (misalnya $\\ce{HA}$) memiliki konsentrasi mula-mula $C_1$ dan derajat ionisasi $\\alpha_1$. Ke dalam larutan tersebut kemudian ditambahkan air suling sehingga volumenya membesar menjadi $100$ kali lipat dari volume awal ($V_2 = 100 V_1$).

Berdasarkan Hukum Pengenceran Ostwald ($\\alpha = \\sqrt{K_a / C}$), nilai derajat ionisasi larutan setelah pengenceran ($\\alpha_2$) adalah ....

A. Berkurang menjadi $\\frac{1}{100} \\alpha_1$  
B. Berkurang menjadi $\\frac{1}{10} \\alpha_1$  
C. Tetap sama besar ($\\alpha_2 = \\alpha_1$) karena tetapan $K_a$ konstan  
D. Meningkat menjadi $100\\ \\alpha_1$  
E. Meningkat menjadi $10\\ \\alpha_1$`,
    expected_final_answer: 'E',
    solution_rubric: `**Kunci Jawaban: E**

**Pembahasan Langkah demi Langkah:**
1. **Hukum Pengenceran Ostwald:**
   Untuk asam lemah dengan derajat ionisasi kecil ($\\alpha \\ll 1$), hubungan antara derajat ionisasi dan konsentrasi dirumuskan:
   $$\\alpha = \\sqrt{\\frac{K_a}{C}}$$
2. **Analisis Pengenceran 100 Kali:**
   Jika volume larutan dijadikan $100$ kali semula ($V_2 = 100 V_1$), maka konsentrasi molaritasnya menyusut menjadi seperseratusnya:
   $$C_2 = \\frac{C_1}{100}$$
3. **Menghitung Nilai $\\alpha_2$:**
   $$\\alpha_2 = \\sqrt{\\frac{K_a}{C_2}} = \\sqrt{\\frac{K_a}{\\frac{C_1}{100}}} = \\sqrt{100 \\times \\frac{K_a}{C_1}} = \\sqrt{100} \\times \\sqrt{\\frac{K_a}{C_1}} = 10 \\times \\alpha_1$$
4. **Makna Fisik-Kimia:**
   Pengenceran larutan elektrolit lemah menyebabkan molekul air semakin banyak mengelilingi ion-ion yang terbentuk, sehingga kesetimbangan ionisasi $\\ce{HA <=> H+ + A-}$ bergeser ke arah kanan (derajat ionisasi meningkat $10$ kali lipat).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['hukum-ostwald', 'derajat-ionisasi', 'pengenceran-asam-lemah', 'le-chatelier'],
  },
  {
    id: 109009,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Analisis Irisan Trayek Indikator Asam-Basa Visual',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Estimasi Nilai pH Sampel Air Limbah Menggunakan Beberapa Indikator Asam-Basa',
    question_text: `Suatu sampel air limbah pabrik diuji nilai derajat keasamannya (pH) menggunakan empat indikator asam-basa visual di laboratorium:

| Indikator | Trayek pH | Perubahan Warna | Warna Sampel Limbah |
| :--- | :---: | :---: | :---: |
| **Metil Jingga (MO)** | $3{,}1 - 4{,}4$ | Merah - Kuning | Kuning |
| **Metil Merah (MR)** | $4{,}4 - 6{,}2$ | Merah - Kuning | Kuning |
| **Bromtimol Biru (BTB)** | $6{,}0 - 7{,}6$ | Kuning - Biru | Biru |
| **Fenolftalein (PP)** | $8{,}3 - 10{,}0$ | Tidak Berwarna - Merah | Tidak Berwarna |

Berdasarkan data uji tersebut, perkiraan nilai pH sampel air limbah yang diuji adalah ....

A. $4{,}4 \\le \\text{pH} \\le 6{,}0$  
B. $7{,}6 \\le \\text{pH} \\le 8{,}3$  
C. $6{,}2 \\le \\text{pH} \\le 7{,}6$  
D. $\\text{pH} \\le 7{,}6$  
E. $\\text{pH} \\ge 10{,}0$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Tiap Indikator:**
   - **Metil Jingga (MO):** Warna kuning $\\implies \\text{pH} \\ge 4{,}4$.
   - **Metil Merah (MR):** Warna kuning $\\implies \\text{pH} \\ge 6{,}2$.
   - **Bromtimol Biru (BTB):** Warna biru $\\implies \\text{pH} \\ge 7{,}6$.
   - **Fenolftalein (PP):** Tidak berwarna $\\implies \\text{pH} \\le 8{,}3$.
2. **Irisan Garis Bilangan (Arsiran Bersama):**
   - Batas bawah: Dari indikator BTB diperoleh batas bawah $\\text{pH} \\ge 7{,}6$.
   - Batas atas: Dari indikator PP diperoleh batas atas $\\text{pH} \\le 8{,}3$.
   - Irisan seluruh indikator secara serempak:
     $$\\mathbf{7{,}6 \\le \\text{pH} \\le 8{,}3}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['trayek-indikator', 'irisan-garis-bilangan', 'btb-pp-mo-mr', 'uji-limbah'],
  },
  {
    id: 109010,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Analisis Kurva Titrasi Asam Lemah - Basa Kuat & Pemilihan Indikator',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Rasionalisasi pH Titik Ekuivalen dan Pemilihan Indikator Titrasi Asam Asetat',
    question_text: `Pada titrasi $25{,}0\\ \\text{mL}$ larutan asam asetat ($\\ce{CH3COOH}$) $0{,}10\\ \\text{M}$ dengan larutan standar natrium hidroksida ($\\ce{NaOH}$) $0{,}10\\ \\text{M}$, kurva titrasi menunjukkan lonjakan pH yang khas pada titik ekuivalen.

Pernyataan yang **paling tepat** mengenai profil kurva titrasi tersebut adalah ....

A. Titik ekuivalen berada pada $\\text{pH} = 7{,}0$ karena garam $\\ce{NaCl}$ yang terbentuk bersifat netral  
B. Indikator metil jingga (trayek pH $3{,}1 - 4{,}4$) sangat ideal digunakan karena berubah warna sebelum titik ekuivalen  
C. Titik ekuivalen berada pada $\\text{pH} < 7{,}0$ akibat hidrolisis parsial kation natrium  
D. Titik ekuivalen berada pada daerah basa ($\\text{pH} \\approx 8{,}7$) karena terbentuk garam $\\ce{CH3COONa}$ yang anionnya terhidrolisis menghasilkan ion $\\ce{OH-}$, sehingga indikator fenolftalein (trayek pH $8{,}3 - 10{,}0$) paling tepat digunakan  
E. Pada titik setengah netralisasi ($V_{\\ce{NaOH}} = 12{,}5\\ \\text{mL}$), larutan memiliki sifat asam kuat sempurna`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Kondisi Titik Ekuivalen Titrasi Asam Lemah vs Basa Kuat:**
   - Pada titik ekuivalen, seluruh $\\ce{CH3COOH}$ tepat bereaksi habis dengan $\\ce{NaOH}$ membentuk garam natrium asetat ($\\ce{CH3COONa}$):
     $$\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$$
   - Kation $\\ce{Na+}$ berasal dari basa kuat sehingga tidak terhidrolisis.
   - Anion asetat ($\\ce{CH3COO-}$) berasal dari asam lemah sehingga mengalami **hidrolisis parsial**:
     $$\\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}$$
   - Pelepasan ion $\\ce{OH-}$ menyebabkan larutan pada titik ekuivalen bersifat **basa ($\\text{pH} \\approx 8{,}7$)**.
2. **Pemilihan Indikator yang Tepat:**
   Indikator yang ideal harus memiliki rentang trayek perubahan warna yang mencakup pH titik ekuivalen.
   - Fenolftalein (trayek $8{,}3 - 10{,}0$) tepat melingkupi $\\text{pH} = 8{,}7$, sehingga perubahan warna terjadi berimpit dengan titik ekuivalen.
   - Metil jingga (trayek $3{,}1 - 4{,}4$) akan berubah warna prematur jauh sebelum titik ekuivalen tercapai.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['kurva-titrasi', 'asam-lemah-basa-kuat', 'hidrolisis-garam', 'pemilihan-indikator'],
  },
  {
    id: 109011,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Perhitungan pH Campuran Asam Kuat & Basa Kuat Berlebih',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kalkulasi Stoikiometri Netralisasi dan Nilai pH Campuran HCl - NaOH',
    question_text: `Sebanyak $100{,}0\\ \\text{mL}$ larutan asam klorida ($\\ce{HCl}$) $0{,}100\\ \\text{M}$ dicampurkan dengan $100{,}0\\ \\text{mL}$ larutan natrium hidroksida ($\\ce{NaOH}$) $0{,}060\\ \\text{M}$ dalam sebuah bejana terisolasi pada temperatur $25^\\circ\\text{C}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah jumlah milimol (mmol) ion H+ mula-mula, ion OH- mula-mula, serta tentukan milimol ion H+ yang tersisa setelah reaksi netralisasi selesai!',
        points: 2.5,
        rubric: 'Menghitung mmol H+ awal = 100,0 mL * 0,100 M = 10,0 mmol (1 poin). Menghitung mmol OH- awal = 100,0 mL * 0,060 M = 6,0 mmol (0.5 poin). Menghitung sisa mmol H+ = 10,0 - 6,0 = 4,0 mmol (1 poin).',
        expected_answer: 'H+ awal = 10,0 mmol; OH- awal = 6,0 mmol; sisa H+ = 4,0 mmol'
      },
      {
        label: 'b',
        question_text: 'Hitunglah konsentrasi molaritas ion H+ dalam larutan campuran tersebut dan tentukan nilai pH akhir larutan (diketahui log 2 ≈ 0,30)!',
        points: 2.5,
        rubric: 'Menghitung volume total = 100 + 100 = 200 mL, lalu konsentrasi [H+] = 4,0 mmol / 200 mL = 0,020 M = 2,0 x 10^-2 M (1.5 poin). Menghitung pH = -log(2,0 x 10^-2) = 2 - log 2 = 2 - 0,30 = 1,70 (1 poin).',
        expected_answer: '[H+] = 0,020 M (atau 2,0 x 10^-2 M); pH = 1,70'
      }
    ],
    expected_final_answer: 'a. H+ awal = 10,0 mmol, OH- awal = 6,0 mmol, sisa H+ = 4,0 mmol; b. [H+] = 0,020 M, pH = 1,70.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Stoikiometri Netralisasi Mol (Bobot: 2.5 Poin)**
   - Jumlah mol awal reaktan:
     $$n(\\ce{H+}) = 100{,}0\\ \\text{mL} \\times 0{,}100\\ \\text{M} = \\mathbf{10{,}0\\ \\text{mmol}} \\quad (1{,}0\\ \\text{poin})$$
     $$n(\\ce{OH-}) = 100{,}0\\ \\text{mL} \\times 0{,}060\\ \\text{M} = \\mathbf{6{,}0\\ \\text{mmol}} \\quad (0{,}5\\ \\text{poin})$$
   - Reaksi penetralan ionik: $\\ce{H+(aq) + OH-(aq) -> H2O(l)}$.
   - Ion $\\ce{OH-}$ bertindak sebagai pereaksi pembatas (habis bereaksi):
     $$n(\\ce{H+})_{\\text{sisa}} = 10{,}0\\ \\text{mmol} - 6{,}0\\ \\text{mmol} = \\mathbf{4{,}0\\ \\text{mmol}} \\quad (1{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Konsentrasi Akhir dan Nilai pH (Bobot: 2.5 Poin)**
   - Volume total campuran:
     $$V_{\\text{total}} = 100{,}0\\ \\text{mL} + 100{,}0\\ \\text{mL} = 200{,}0\\ \\text{mL}$$
   - Konsentrasi ion hidrogen:
     $$[\\ce{H+}]_{\\text{akhir}} = \\frac{n(\\ce{H+})_{\\text{sisa}}}{V_{\\text{total}}} = \\frac{4{,}0\\ \\text{mmol}}{200{,}0\\ \\text{mL}} = \\mathbf{0{,}020\\ \\text{M} = 2{,}0 \\times 10^{-2}\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
   - Nilai pH larutan:
     $$\\text{pH} = -\\log[\\ce{H+}] = -\\log(2{,}0 \\times 10^{-2}) = 2 - \\log 2 = 2 - 0{,}30 = \\mathbf{1{,}70} \\quad (1{,}0\\ \\text{poin})$$`,
    solution_framework_template: `1. Neraca Mol Netralisasi:
• Milimol H+ dari asam kuat: ....
• Milimol OH- dari basa kuat: ....
• Pereaksi pembatas dan milimol sisa reaktan berlebih: ....

2. Evaluasi Molaritas Campuran dan pH:
• Volume total larutan campuran: ....
• Konsentrasi molar ion sisa [H+]: ....
• Kalkulasi nilai logaritmik pH: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['campuran-asam-basa', 'pereaksi-pembatas', 'reaksi-netralisasi', 'perhitungan-ph'],
  },
  {
    id: 109012,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Kesetimbangan Asam Diprotik Bertingkat Asam Oksalat',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Ionisasi Bertahap dan Konsentrasi Spesi pada Larutan Asam Oksalat',
    question_text: `Asam oksalat ($\\ce{H2C2O4}$) merupakan asam diprotik yang mengalami ionisasi bertahap di dalam air dengan tetapan ionisasi pada $25^\\circ\\text{C}$:
1. $\\ce{H2C2O4(aq) <=> H+(aq) + HC2O4-(aq)} \\quad K_{a1} = 5{,}6 \\times 10^{-2}$
2. $\\ce{HC2O4-(aq) <=> H+(aq) + C2O4^2-(aq)} \\quad K_{a2} = 5{,}4 \\times 10^{-5}$

Suatu larutan asam oksalat disiapkan dengan konsentrasi analit $0{,}100\\ \\text{M}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan kuadrat kesetimbangan untuk ionisasi tahap pertama dan hitunglah konsentrasi ion hidrogen ([H+]) yang dihasilkan dari tahap tersebut!',
        points: 2.5,
        rubric: 'Menuliskan Ka1 = x^2 / (0,100 - x) = 0,056 => x^2 + 0,056 x - 0,0056 = 0 (1 poin). Menggunakan rumus kuadratik: x = (-0,056 + sqrt(0,056^2 - 4(1)(-0,0056))) / 2 = (-0,056 + sqrt(0,003136 + 0,0224)) / 2 = (-0,056 + sqrt(0,025536)) / 2 = (-0,056 + 0,1598) / 2 = 0,0519 M ≈ 0,052 M (1.5 poin).',
        expected_answer: 'Persamaan: x^2 + 0,056 x - 0,0056 = 0; [H+] ≈ 0,052 M'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan kesetimbangan tahap kedua, buktikan mengapa konsentrasi ion oksalat ([C2O4^2-]) dalam larutan tersebut bernilai mendekati nilai Ka2!',
        points: 2.5,
        rubric: 'Menuliskan ekspresi Ka2 = ([H+][C2O4^2-]) / [HC2O4-] (1 poin). Menjelaskan bahwa karena Ka2 << Ka1, ionisasi tahap kedua sangat kecil sehingga [H+] ≈ [HC2O4-] ≈ 0,052 M. Dengan mencoret [H+] dan [HC2O4-], diperoleh [C2O4^2-] ≈ Ka2 = 5,4 x 10^-5 M (1.5 poin).',
        expected_answer: 'Karena Ka2 << Ka1, [H+] ≈ [HC2O4-], sehingga [C2O4^2-] ≈ Ka2 = 5,4 x 10^-5 M.'
      }
    ],
    expected_final_answer: 'a. [H+] ≈ 0,052 M; b. [C2O4^2-] ≈ Ka2 = 5,4 x 10^-5 M.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Ionisasi Tahap Pertama & Persamaan Kuadrat (Bobot: 2.5 Poin)**
   - Karena nilai $K_{a1} = 5{,}6 \\times 10^{-2}$ cukup besar ($> 10^{-3}$), aproksimasi $0{,}100 - x \\approx 0{,}100$ tidak berlaku valid dan wajib menggunakan rumus kuadrat:
     $$K_{a1} = \\frac{[\\ce{H+}][\\ce{HC2O4-}]}{[\\ce{H2C2O4}]} = \\frac{x^2}{0{,}100 - x} = 0{,}056$$
     $$x^2 + 0{,}056x - 0{,}0056 = 0 \\quad (1{,}0\\ \\text{poin})$$
   - Menggunakan rumus abc kuadratik:
     $$x = \\frac{-0{,}056 + \\sqrt{(0{,}056)^2 - 4(1)(-0{,}0056)}}{2} = \\frac{-0{,}056 + \\sqrt{0{,}003136 + 0{,}0224}}{2}$$
     $$x = \\frac{-0{,}056 + \\sqrt{0{,}025536}}{2} = \\frac{-0{,}056 + 0{,}1598}{2} = \\mathbf{0{,}0519\\ \\text{M} \\approx 0{,}052\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
   - Maka konsentrasi $[\\ce{H+}] \\approx [\\ce{HC2O4-}] \\approx 0{,}052\\ \\text{M}$.

2. **Sub-soal (b): Konsentrasi Anion Divalen Oksalat (Bobot: 2.5 Poin)**
   - Kesetimbangan tahap kedua:
     $$K_{a2} = \\frac{[\\ce{H+}][\\ce{C2O4^2-}]}{[\\ce{HC2O4-}]} = 5{,}4 \\times 10^{-5} \\quad (1{,}0\\ \\text{poin})$$
   - Karena $K_{a2}$ bernilai $1000$ kali lebih kecil dari $K_{a1}$, pelepasan ion $\\ce{H+}$ dari tahap kedua praktis dapat diabaikan terhadap $[\\ce{H+}]$ dari tahap pertama.
   - Akibatnya, konsentrasi $[\\ce{H+}]$ dan $[\\ce{HC2O4-}]$ pada tahap kedua keduanya praktis bernilai sama besar ($[\\ce{H+}] \\approx [\\ce{HC2O4-}] \\approx 0{,}052\\ \\text{M}$).
   - Substitusi ke rumus $K_{a2}$:
     $$[\\ce{C2O4^2-}] = K_{a2} \\times \\frac{[\\ce{HC2O4-}]}{[\\ce{H+}]} \\approx K_{a2} \\times (1) = \\mathbf{5{,}4 \\times 10^{-5}\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$`,
    solution_framework_template: `1. Analisis Ionisasi Primer:
• Nilai tetapan Ka1 dan pertimbangan aproksimasi kuadrat: ....
• Penyusunan persamaan kuadrat x^2 + Ka1 x - Ka1 C = 0: ....
• Nilai konsentrasi [H+] tahap pertama: ....

2. Analisis Ionisasi Sekunder:
• Formulasi ekspresi tetapan Ka2: ....
• Asumsi rasio konsentrasi [H+] / [HC2O4-] mendekati 1: ....
• Pembuktian bahwa [C2O4^2-] setara dengan Ka2: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Seleksi OSN Kimia Tingkat Kota/Kabupaten (OSK)',
    tags: ['asam-poliprotik', 'ionisasi-bertingkat', 'persamaan-kuadrat', 'asam-oksalat'],
  },
  {
    id: 109013,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Penentuan Kadar Asam Asetat Cuka Komersial via Titrasi',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Volumetri Kadar Asam Asetat dalam Cuka Dapur Komersial',
    question_text: `Untuk menentukan kadar asam asetat ($\\ce{CH3COOH}$, $M_r = 60{,}05\\ \\text{g/mol}$) dalam cuka dapur komersial, seorang siswa mengambil $10{,}0\\ \\text{mL}$ sampel cuka lalu mengencerkannya dengan air suling di dalam labu ukur hingga volume tepat $100{,}0\\ \\text{mL}$.

Sebanyak $20{,}0\\ \\text{mL}$ dari larutan cuka yang telah diencerkan tersebut diambil dan dititrasi dengan larutan standar $\\ce{NaOH}$ $0{,}100\\ \\text{M}$ menggunakan indikator fenolftalein. Volume $\\ce{NaOH}$ yang terpakai hingga mencapai titik akhir titrasi tercatat sebesar $30{,}0\\ \\text{mL}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah konsentrasi molaritas ([M]) asam asetat dalam larutan hasil pengenceran serta konsentrasi molaritas asam asetat dalam sampel cuka dapur asli!',
        points: 2.5,
        rubric: 'Menghitung M_encer = (30,0 mL * 0,100 M) / 20,0 mL = 0,150 M (1.5 poin). Menghitung M_asli dengan faktor pengenceran (100/10 = 10 kali): M_asli = 0,150 M * 10 = 1,50 M (1 poin).',
        expected_answer: 'M_encer = 0,150 M; M_asli = 1,50 M'
      },
      {
        label: 'b',
        question_text: 'Tentukan kadar persentase massa per volume (% b/v) asam asetat dalam cuka dapur asli tersebut!',
        points: 2.5,
        rubric: 'Menghitung massa per liter = 1,50 mol/L * 60,05 g/mol = 90,08 g/L (1.5 poin). Menghitung kadar % (b/v) = (90,08 g / 1000 mL) * 100% = 9,01% (b/v) (1 poin).',
        expected_answer: '% (b/v) = 9,01% (atau 9,0%)'
      }
    ],
    expected_final_answer: 'a. M_encer = 0,150 M, M_asli = 1,50 M; b. % (b/v) = 9,01%.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Molaritas Larutan Encer dan Sampel Asli (Bobot: 2.5 Poin)**
   - Reaksi penetralan asam cuka:
     $$\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$$
   - Pada titik ekuivalen:
     $$V_{\\text{asam}} \\times M_{\\text{encer}} = V_{\\text{basa}} \\times M_{\\text{basa}}$$
     $$20{,}0\\ \\text{mL} \\times M_{\\text{encer}} = 30{,}0\\ \\text{mL} \\times 0{,}100\\ \\text{M}$$
     $$M_{\\text{encer}} = \\frac{3{,}00\\ \\text{mmol}}{20{,}0\\ \\text{mL}} = \\mathbf{0{,}150\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
   - Menggunakan faktor pengenceran:
     $$\\text{Faktor Pengenceran} = \\frac{V_{\\text{akhir}}}{V_{\\text{awal}}} = \\frac{100{,}0\\ \\text{mL}}{10{,}0\\ \\text{mL}} = 10$$
     $$M_{\\text{asli}} = 10 \\times M_{\\text{encer}} = 10 \\times 0{,}150\\ \\text{M} = \\mathbf{1{,}50\\ \\text{M}} \\quad (1{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Kadar Persentase $(\% b/v)$ (Bobot: 2.5 Poin)**
   - Dalam $1{,}0\\ \\text{Liter}$ ($1000\\ \\text{mL}$) cuka dapur asli terdapat $1{,}50\\ \\text{mol } \\ce{CH3COOH}$:
     $$\\text{Massa } \\ce{CH3COOH} = 1{,}50\\ \\text{mol} \\times 60{,}05\\ \\text{g/mol} = 90{,}08\\ \\text{g} \\quad (1{,}5\\ \\text{poin})$$
   - Kadar persentase massa per volume $(\\% b/v)$:
     $$\\%(b/v) = \\frac{\\text{Massa zat terlarut (g)}}{\\text{Volume larutan (mL)}} \\times 100\\% = \\frac{90{,}08\\ \\text{g}}{1000\\ \\text{mL}} \\times 100\\% = \\mathbf{9{,}01\\%} \\quad (1{,}0\\ \\text{poin})$$`,
    solution_framework_template: `1. Perhitungan Konsentrasi Volumetrik:
• Molaritas analit dalam larutan titrasi: ....
• Faktor pengenceran labu ukur: ....
• Molaritas cuka murni awal: ....

2. Konversi Konsentrasi ke Persen Massa/Volume:
• Hubungan molaritas terhadap massa analit per liter: ....
• Bobot molekul Mr asam asetat: ....
• Kalkulasi kadar % (b/v): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Praktikum Kimia SMA & Ujian Sekolah',
    tags: ['cuka-dapur', 'titrasi-alkalimetri', 'faktor-pengenceran', 'kadar-persen'],
  },
  {
    id: 109014,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Karakter Amfiprotik Spesi Kimia Ion Hidrogen Karbonat',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Pembuktian Sifat Amfiprotik Ion Hidrogen Karbonat HCO3- dalam Air',
    question_text: `Ion hidrogen karbonat (bikarbonat, $\\ce{HCO3-}$) merupakan spesi kimia penting yang berfungsi sebagai penyangga fisiologis utama di dalam plasma darah manusia. Spesi ini tergolong sebagai zat amfiprotik (amfoter).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan reaksi transfer proton yang menunjukkan peran HCO3- sebagai ASAM Brønsted-Lowry ketika direaksikan dengan air, dan sebutkan nama basa konjugasi yang terbentuk!',
        points: 2.5,
        rubric: 'Menuliskan reaksi donor proton: HCO3-(aq) + H2O(l) <=> CO3^2-(aq) + H3O+(aq) (1.5 poin). Menyebutkan basa konjugasi yang terbentuk adalah ion karbonat (CO3^2-) (1 poin).',
        expected_answer: 'HCO3-(aq) + H2O(l) <=> CO3^2-(aq) + H3O+(aq); basa konjugasi: ion karbonat (CO3^2-)'
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan reaksi transfer proton yang menunjukkan peran HCO3- sebagai BASA Brønsted-Lowry ketika direaksikan dengan air, dan sebutkan nama asam konjugasi yang terbentuk!',
        points: 2.5,
        rubric: 'Menuliskan reaksi akseptor proton: HCO3-(aq) + H2O(l) <=> H2CO3(aq) + OH-(aq) (1.5 poin). Menyebutkan asam konjugasi yang terbentuk adalah asam karbonat (H2CO3) (1 poin).',
        expected_answer: 'HCO3-(aq) + H2O(l) <=> H2CO3(aq) + OH-(aq); asam konjugasi: asam karbonat (H2CO3)'
      }
    ],
    expected_final_answer: 'a. HCO3- + H2O <=> CO3^2- + H3O+ (basa konjugasi: CO3^2-); b. HCO3- + H2O <=> H2CO3 + OH- (asam konjugasi: H2CO3).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Peran sebagai Asam Brønsted-Lowry (Bobot: 2.5 Poin)**
   - Sebagai asam, ion $\\ce{HCO3-}$ **mendonorkan satu proton ($\\ce{H+}$)** kepada molekul pelarut $\\ce{H2O}$:
     $$\\ce{HCO3-(aq) + H2O(l) <=> CO3^2-(aq) + H3O+(aq)} \\quad (1{,}5\\ \\text{poin})$$
   - Spesi yang tersisa setelah proton dilepaskan adalah **ion karbonat ($\\ce{CO3^2-}$)** yang bertindak sebagai **basa konjugasi**. *(Skor: 1.0 Poin)*

2. **Sub-soal (b): Peran sebagai Basa Brønsted-Lowry (Bobot: 2.5 Poin)**
   - Sebagai basa, ion $\\ce{HCO3-}$ **menerima satu proton ($\\ce{H+}$)** dari molekul pelarut $\\ce{H2O}$:
     $$\\ce{HCO3-(aq) + H2O(l) <=> H2CO3(aq) + OH-(aq)} \\quad (1{,}5\\ \\text{poin})$$
   - Spesi yang terbentuk setelah mengikat proton adalah **asam karbonat ($\\ce{H2CO3}$)** yang bertindak sebagai **asam konjugasi**. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Reaksi Donor Proton (Sifat Asam):
• Persamaan ionik reaksi dengan pelarut air: ....
• Identifikasi spesi penerima proton: ....
• Basa konjugasi hasil deprotonasi: ....

2. Reaksi Akseptor Proton (Sifat Basa):
• Persamaan ionik reaksi pengikatan proton: ....
• Identifikasi spesi pelepas proton: ....
• Asam konjugasi hasil protonasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['spesi-amfiprotik', 'bikarbonat', 'bronsted-lowry', 'pasangan-konjugasi'],
  },
  {
    id: 109015,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Kesetimbangan Indikator Asam-Basa & Trayek Transisi Warna',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kajian Termodinamika Kesetimbangan Kimia Indikator Asam Lemah HIn',
    question_text: `Suatu indikator asam-basa visual merupakan asam organik lemah sintetis yang dilambangkan sebagai $\\ce{HIn}$. Di dalam air, indikator ini mengalami kesetimbangan ionisasi:
$$\\ce{HIn(aq) (merah) <=> H+(aq) + In-(aq) (kuning)}$$
dengan nilai tetapan ionisasi indikator $K_{\\text{In}} = 1{,}0 \\times 10^{-5}$ (sehingga $\\text{p}K_{\\text{In}} = 5{,}0$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah perbandingan rasio konsentrasi [In-] / [HIn] pada saat larutan berada pada pH = 4,0, pH = 5,0, dan pH = 6,0!',
        points: 2.5,
        rubric: 'Menuliskan rasio [In-] / [HIn] = K_In / [H+] (0.5 poin). Pada pH 4 ([H+] = 10^-4 M): rasio = 10^-5 / 10^-4 = 0,10 (0.5 poin). Pada pH 5 ([H+] = 10^-5 M): rasio = 10^-5 / 10^-5 = 1,0 (0.75 poin). Pada pH 6 ([H+] = 10^-6 M): rasio = 10^-5 / 10^-6 = 10,0 (0.75 poin).',
        expected_answer: 'pH 4: rasio = 0,10; pH 5: rasio = 1,0; pH 6: rasio = 10,0'
      },
      {
        label: 'b',
        question_text: 'Jika mata manusia baru dapat melihat warna merah murni apabila [HIn] >= 10 [In-] dan melihat warna kuning murni apabila [In-] >= 10 [HIn], jelaskan mengapa rentang trayek perubahan warna indikator tersebut membentang selebar 2 unit pH!',
        points: 2.5,
        rubric: 'Menjelaskan batas warna merah: [In-]/[HIn] <= 1/10 => pH <= pK_In - 1 = 4,0 (1 poin). Batas warna kuning: [In-]/[HIn] >= 10 => pH >= pK_In + 1 = 6,0 (1 poin). Rentang transisi warna terjadi pada interval pH = pK_In ± 1, yaitu 4,0 - 6,0 (lebar tepat 2 unit pH) (0.5 poin).',
        expected_answer: 'Warna merah dominan saat pH <= 4,0; warna kuning saat pH >= 6,0; daerah transisi warna membentang pada pH = pK_In ± 1 (selebar 2 unit pH).'
      }
    ],
    expected_final_answer: 'a. Rasio pada pH 4 = 0,10; pH 5 = 1,0; pH 6 = 10,0; b. Trayek transisi pH = pK_In ± 1 (rentang 4,0 - 6,0, selebar 2 unit pH).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Rasio Bentuk Indikator (Bobot: 2.5 Poin)**
   - Tetapan ionisasi indikator:
     $$K_{\\text{In}} = \\frac{[\\ce{H+}][\\ce{In-}]}{[\\ce{HIn}]} \\implies \\frac{[\\ce{In-}]}{[\\ce{HIn}]} = \\frac{K_{\\text{In}}}{[\\ce{H+}]}$$
   - Pada $\\text{pH} = 4{,}0 \\implies [\\ce{H+}] = 1{,}0 \\times 10^{-4}\\ \\text{M}$:
     $$\\frac{[\\ce{In-}]}{[\\ce{HIn}]} = \\frac{1{,}0 \\times 10^{-5}}{1{,}0 \\times 10^{-4}} = \\mathbf{0{,}10} \\quad (\\text{didominasi warna merah } \\ce{HIn}) \\quad (0{,}5\\ \\text{poin})$$
   - Pada $\\text{pH} = 5{,}0 \\implies [\\ce{H+}] = 1{,}0 \\times 10^{-5}\\ \\text{M}$:
     $$\\frac{[\\ce{In-}]}{[\\ce{HIn}]} = \\frac{1{,}0 \\times 10^{-5}}{1{,}0 \\times 10^{-5}} = \\mathbf{1{,}0} \\quad (\\text{warna jingga campuran seimbang}) \\quad (0{,}75\\ \\text{poin})$$
   - Pada $\\text{pH} = 6{,}0 \\implies [\\ce{H+}] = 1{,}0 \\times 10^{-6}\\ \\text{M}$:
     $$\\frac{[\\ce{In-}]}{[\\ce{HIn}]} = \\frac{1{,}0 \\times 10^{-5}}{1{,}0 \\times 10^{-6}} = \\mathbf{10{,}0} \\quad (\\text{didominasi warna kuning } \\ce{In-}) \\quad (0{,}75\\ \\text{poin})$$

2. **Sub-soal (b): Asas Trayek Transisi 2 Unit pH (Bobot: 2.5 Poin)**
   - Berdasarkan persamaan Henderson-Hasselbalch untuk indikator:
     $$\\text{pH} = \\text{p}K_{\\text{In}} + \\log\\left(\\frac{[\\ce{In-}]}{[\\ce{HIn}]}\\right)$$
   - **Batas Warna Asam (Merah):** Mata manusia melihat warna merah jika $[\\ce{HIn}] \\ge 10 [\\ce{In-}]$ $\\implies \\frac{[\\ce{In-}]}{[\\ce{HIn}]} \\le \\frac{1}{10}$:
     $$\\text{pH} \\le \\text{p}K_{\\text{In}} + \\log(0{,}1) = \\text{p}K_{\\text{In}} - 1 = 5{,}0 - 1 = \\mathbf{4{,}0} \\quad (1{,}0\\ \\text{poin})$$
   - **Batas Warna Basa (Kuning):** Mata manusia melihat warna kuning jika $[\\ce{In-}] \\ge 10 [\\ce{HIn}]$ $\\implies \\frac{[\\ce{In-}]}{[\\ce{HIn}]} \\ge 10$:
     $$\\text{pH} \\ge \\text{p}K_{\\text{In}} + \\log(10) = \\text{p}K_{\\text{In}} + 1 = 5{,}0 + 1 = \\mathbf{6{,}0} \\quad (1{,}0\\ \\text{poin})$$
   - Oleh karena itu, rentang perubahan warna visual indikator selalu terbentang selebar **$2$ unit pH**, yaitu pada interval $\\mathbf{\\text{pH} = \\text{p}K_{\\text{In}} \\pm 1}$ ($4{,}0$ hingga $6{,}0$). *(Skor: 0.5 Poin)*`,
    solution_framework_template: `1. Evaluasi Rasio Ion Indikator:
• Formulasi ekspresi tetapan K_In: ....
• Substitusi konsentrasi [H+] pada pH 4, 5, dan 6: ....
• Nilai numerik perbandingan konsentrasi: ....

2. Teori Ambang Batas Penglihatan Mata & Trayek pH:
• Persamaan Henderson-Hasselbalch indikator: ....
• Syarat dominansi bentuk asam [HIn] >= 10 [In-]: ....
• Syarat dominansi bentuk basa [In-] >= 10 [HIn]: ....
• Rentang trayek transisi pH = pK_In ± 1: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Bidang Kesetimbangan Larutan',
    tags: ['indikator-hin', 'trayek-ph', 'rasio-warna', 'henderson-hasselbalch'],
  },

  // =========================================================================
  // KATEGORI SULIT / OLIMPIADE OSK (40% = 10 Butir Soal: ID 109001 - 109025)
  // =========================================================================
  {
    id: 109016,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Perhitungan Eksak pH Asam Kuat Sangat Encer (Efek Autoprotolisis Air)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Nilai pH Larutan Asam Klorida 1,0 x 10^-8 M pada Suhu 25 °C',
    question_text: `Suatu larutan asam klorida ($\\ce{HCl}$) sangat encer disiapkan dengan konsentrasi $1{,}0 \\times 10^{-8}\\ \\text{M}$ pada suhu $25^\\circ\\text{C}$ ($K_w = 1{,}0 \\times 10^{-14}$).

Nilai pH yang **paling tepat** untuk larutan asam klorida tersebut adalah ....

A. $8{,}00$ karena $\\text{pH} = -\\log(1{,}0 \\times 10^{-8})$  
B. $6{,}98$ karena adanya kontribusi ion $\\ce{H+}$ dari autoionisasi molekul air  
C. $7{,}00$ tepat karena larutan sudah menjadi netral sempurna  
D. $7{,}02$ karena penambahan sedikit asam menurunkan keasaman air  
E. $1{,}00$ karena asam klorida adalah asam kuat bervalensi satu`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Miskonsepsi Klasik Larutan Asam Sangat Encer:**
   Jika langsung menggunakan $\\text{pH} = -\\log(1{,}0 \\times 10^{-8}) = 8{,}00$, kesimpulan ini keliru secara logika termodinamika karena larutan asam tidak mungkin memiliki $\\text{pH} > 7$ (bersifat basa) hanya karena diencerkan!
2. **Neraca Muatan & Kontribusi Air:**
   Pada konsentrasi analit asam yang sangat kecil ($< 10^{-6}\\ \\text{M}$), ion $\\ce{H+}$ hasil **autoprotolisis air** ($\\approx 10^{-7}\\ \\text{M}$) tidak boleh diabaikan.
   - Sumber ion hidrogen total:
     $$[\\ce{H+}]_{\\text{total}} = [\\ce{H+}]_{\\ce{HCl}} + [\\ce{H+}]_{\\ce{H2O}} = 1{,}0 \\times 10^{-8} + x$$
   - Sumber ion hidroksida hanya berasal dari air: $[\\ce{OH-}] = x$.
3. **Persamaan Kesetimbangan Air ($K_w$):**
   $$K_w = [\\ce{H+}]_{\\text{total}} \\times [\\ce{OH-}] = (1{,}0 \\times 10^{-8} + x)(x) = 1{,}0 \\times 10^{-14}$$
   $$x^2 + 1{,}0 \\times 10^{-8}x - 1{,}0 \\times 10^{-14} = 0$$
   Dengan rumus kuadrat:
   $$x = \\frac{-10^{-8} + \\sqrt{(10^{-8})^2 - 4(1)(-10^{-14})}}{2} = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2{,}0025 \\times 10^{-7}}{2}$$
   $$x = \\frac{1{,}9025 \\times 10^{-7}}{2} = 0{,}951 \\times 10^{-7}\\ \\text{M}$$
4. **Konsentrasi $[\ce{H+}]$ Total dan Nilai pH:**
   $$[\\ce{H+}]_{\\text{total}} = 1{,}0 \\times 10^{-8} + 0{,}951 \\times 10^{-7} = 1{,}051 \\times 10^{-7}\\ \\text{M}$$
   $$\\text{pH} = -\\log(1{,}051 \\times 10^{-7}) = 7 - \\log(1{,}051) \\approx \\mathbf{6{,}98}$$
   Nilai $\\text{pH} = 6{,}98$ sedikit di bawah $7{,}00$, konsisten dengan sifat larutan yang sangat sedikit asam.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Seleksi OSN Kimia Tingkat Kota/Kabupaten (OSK)',
    tags: ['asam-sangat-encer', 'autoprotolisis-air', 'persamaan-kuadrat', 'miskonsepsi-ph'],
  },
  {
    id: 109017,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Leveling Effect of Water vs Differentiating Effect',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Efek Perataan Pelarut Air terhadap Kekuatan Asam Kuat Mineral',
    question_text: `Di dalam pelarut air, larutan asam perklorat ($\\ce{HClO4}$), asam klorida ($\\ce{HCl}$), dan asam nitrat ($\\ce{HNO3}$) pada konsentrasi yang sama menunjukkan kekuatan asam yang praktis identik (tidak dapat dibedakan). Namun, ketika ketiga asam tersebut dilarutkan ke dalam pelarut asam asetat glasial murni ($\\ce{CH3COOH}$), kekuatan asamnya terbedakan secara nyata dengan urutan:
$$\\ce{HClO4} > \\ce{HCl} > \\ce{HNO3}$$

Penjelasan ilmiah yang **paling tepat** mengenai fenomena kimia tersebut adalah ....

A. Molekul asam perklorat bereaksi dengan air membentuk ikatan hidrogen intramolekul yang memperlemah disosiasinya  
B. Asam asetat glasial merupakan pelarut basa yang jauh lebih kuat daripada air sehingga mengionkan seluruh asam mineral  
C. Air bertindak sebagai basa yang cukup kuat sehingga mendeprotonasi seluruh asam mineral secara sempurna ($100\\%$) membentuk ion hidronium ($\\ce{H3O+}$), sehingga asam terkuat yang dapat eksis di dalam air diratakan (*leveled*) menjadi $\\ce{H3O+}$; sedangkan asam asetat adalah basa yang lebih lemah sehingga asam-asam tersebut terionisasi sebagian (*differentiating effect*)  
D. Asam nitrat terurai menjadi gas $\\ce{NO2}$ saat dilarutkan dalam asam asetat glasial  
E. Derajat ionisasi asam perklorat di dalam air lebih kecil daripada di dalam asam asetat`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Konsep Efek Perataan Pelarut (*Leveling Effect*):**
   Kekuatan asam dari suatu zat terlarut dibatasi oleh kebasaan molekul pelarutnya.
   - Di dalam pelarut air ($\\ce{H2O}$), air bertindak sebagai akseptor proton yang cukup kuat. Asam-asam kuat mineral seperti $\\ce{HClO4, HCl, HNO3, HBr}$ semuanya mentransfer protonnya $100\\%$ ke molekul air menghasilkan ion hidronium:
     $$\\ce{HA + H2O -> H3O+ + A-}$$
   - Akibatnya, asam terkuat yang benar-benar ada di dalam air adalah **ion hidronium ($\\ce{H3O+}$)**. Semua asam yang lebih kuat dari $\\ce{H3O+}$ "diratakan" kekuatannya menjadi setara dengan $\\ce{H3O+}$.
2. **Konsep Efek Pembeda (*Differentiating Solvent*):**
   - Asam asetat glasial murni ($\\ce{CH3COOH}$) adalah pelarut yang jauh lebih asam dan memiliki kebasaan yang sangat lemah dibandingkan air.
   - Asam asetat sukar menerima proton, sehingga asam-asam mineral tidak terionisasi sempurna $100\\%$, melainkan mengalami kesetimbangan ionisasi parsial:
     $$\\ce{HA + CH3COOH <=> CH3COOH2+ + A-}$$
   - Karena terionisasi sebagian, kekuatan intrinsik masing-masing asam dapat terukur dan terbedakan secara akurat: $\\ce{HClO4} > \\ce{HCl} > \\ce{HNO3}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['leveling-effect', 'pelarut-non-air', 'asam-asetat-glasial', 'kekuatan-asam-intrinsik'],
  },
  {
    id: 109018,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Analisis Kurva Titrasi Asam Lemah Diprotik H2A dengan Basa Kuat',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Interpretasi Nilai pH pada Titik Kritis Kurva Titrasi Asam Lemah Diprotik',
    question_text: `Suatu asam lemah diprotik $\\ce{H2A}$ dititrasi dengan larutan standar natrium hidroksida ($\\ce{NaOH}$). Asam tersebut memiliki tetapan ionisasi bertingkat dengan $\\text{p}K_{a1} = 4{,}00$ dan $\\text{p}K_{a2} = 8{,}00$. Volume $\\ce{NaOH}$ yang dibutuhkan untuk mencapai titik ekuivalen pertama adalah $V_1 = 20{,}0\\ \\text{mL}$, dan titik ekuivalen kedua tercapai pada $V_2 = 40{,}0\\ \\text{mL}$.

Nilai pH larutan pada penambahan volume $\\ce{NaOH} = 10{,}0\\ \\text{mL}$ (titik setengah netralisasi pertama) dan pada $\\ce{NaOH} = 20{,}0\\ \\text{mL}$ (titik ekuivalen pertama) berturut-turut adalah mendekati ....

A. $4{,}00$ dan $6{,}00$  
B. $4{,}00$ dan $8{,}00$  
C. $2{,}00$ dan $4{,}00$  
D. $6{,}00$ dan $8{,}00$  
E. $4{,}00$ dan $7{,}00$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Kondisi Titik Setengah Netralisasi Pertama ($V = 10{,}0\\ \\text{mL} = 0{,}5 V_1$):**
   - Pada titik ini, separuh dari molekul $\\ce{H2A}$ telah diubah menjadi anion $\\ce{HA-}$:
     $$[\\ce{H2A}] = [\\ce{HA-}]$$
   - Berdasarkan persamaan Henderson-Hasselbalch untuk tahap pertama:
     $$\\text{pH} = \\text{p}K_{a1} + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) = \\text{p}K_{a1} + \\log(1) = \\text{p}K_{a1} = \\mathbf{4{,}00}$$
2. **Kondisi Titik Ekuivalen Pertama ($V = 20{,}0\\ \\text{mL} = V_1$):**
   - Pada titik ini, seluruh $\\ce{H2A}$ telah terkonversi sempurna menjadi garam amfiprotik $\\ce{NaHA}$ (spesi dominan di larutan adalah ion amfiprotik $\\ce{HA-}$).
   - Nilai konsentrasi ion hidrogen untuk spesi amfiprotik diturunkan dari:
     $$[\\ce{H+}] \\approx \\sqrt{K_{a1} \\cdot K_{a2}}$$
     $$\\text{pH} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{4{,}00 + 8{,}00}{2} = \\frac{12{,}00}{2} = \\mathbf{6{,}00}$$
3. **Kesimpulan:**
   Nilai pH berturut-turut adalah **$4{,}00$ dan $6{,}00$** (Opsi A).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['kurva-titrasi-diprotik', 'spesi-amfiprotik', 'setengah-netralisasi', 'henderson-hasselbalch'],
  },
  {
    id: 109019,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Titrasi Campuran Basa Campuran NaOH - Na2CO3 (Metode Warder)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Volumetri Dua Indikator pada Titrasi Campuran NaOH dan Na2CO3',
    question_text: `Suatu sampel larutan basa sebanyak $25{,}0\\ \\text{mL}$ yang mengandung campuran natrium hidroksida ($\\ce{NaOH}$) dan natrium karbonat ($\\ce{Na2CO3}$) dititrasi dengan larutan standar $\\ce{HCl } 0{,}100\\ \\text{M}$ menggunakan metode titrasi dua indikator (Metode Warder):
- **Tahap 1:** Ditambahkan indikator fenolftalein (PP). Warna merah muda tepat hilang setelah penambahan $30{,}0\\ \\text{mL } \\ce{HCl}$ ($V_1$).
- **Tahap 2:** Ke dalam larutan yang sama kemudian ditambahkan indikator metil jingga (MO). Larutan dititrasi lebih lanjut hingga warna berubah dari kuning menjadi jingga-kemerahan, yang membutuhkan tambahan volume $\\ce{HCl}$ sebesar $10{,}0\\ \\text{mL}$ ($V_2$).

Jumlah milimol $\\ce{NaOH}$ dan $\\ce{Na2CO3}$ di dalam sampel larutan awal tersebut berturut-turut adalah ....

A. $1{,}00\\ \\text{mmol } \\ce{NaOH}$ dan $2{,}00\\ \\text{mmol } \\ce{Na2CO3}$  
B. $3{,}00\\ \\text{mmol } \\ce{NaOH}$ dan $1{,}00\\ \\text{mmol } \\ce{Na2CO3}$  
C. $2{,}00\\ \\text{mmol } \\ce{NaOH}$ dan $2{,}00\\ \\text{mmol } \\ce{Na2CO3}$  
D. $2{,}00\\ \\text{mmol } \\ce{NaOH}$ dan $1{,}00\\ \\text{mmol } \\ce{Na2CO3}$  
E. $4{,}00\\ \\text{mmol } \\ce{NaOH}$ dan $1{,}00\\ \\text{mmol } \\ce{Na2CO3}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Reaksi pada Titik Akhir Pertama (Indikator Fenolftalein, PP, $\text{pH} \approx 8{,}3$):**
   - Pada titik ini, $\\ce{NaOH}$ telah ternetralisasi sempurna menjadi $\\ce{NaCl}$:
     $$\\ce{NaOH + HCl -> NaCl + H2O}$$
   - Ion karbonat $\\ce{CO3^2-}$ baru terprotonasi tahap pertama menjadi ion bikarbonat $\\ce{HCO3-}$:
     $$\\ce{Na2CO3 + HCl -> NaHCO3 + NaCl}$$
   - Volume $V_1 = 30{,}0\\ \\text{mL}$ digunakan untuk menetralkan seluruh $\\ce{NaOH}$ ditambah setengah dari kapasitas netralisasi $\\ce{Na2CO3}$:
     $$n_{\\ce{HCl,1}} = V_1 \\times M_{\\ce{HCl}} = 30{,}0 \\times 0{,}100 = 3{,}00\\ \\text{mmol} = n_{\\ce{NaOH}} + n_{\\ce{Na2CO3}}$$
2. **Reaksi pada Titik Akhir Kedua (Indikator Metil Jingga, MO, $\text{pH} \approx 3{,}8$):**
   - Tambahan volume $\\ce{HCl}$ ($V_2 = 10{,}0\\ \\text{mL}$) hanya digunakan untuk menetralkan $\\ce{NaHCO3}$ yang terbentuk pada tahap 1:
     $$\\ce{NaHCO3 + HCl -> NaCl + H2O + CO2}$$
   - Maka mol $\\ce{Na2CO3}$ setara langsung dengan mol asam pada tahap kedua:
     $$n_{\\ce{Na2CO3}} = V_2 \\times M_{\\ce{HCl}} = 10{,}0\\ \\text{mL} \\times 0{,}100\\ \\text{M} = \\mathbf{1{,}00\\ \\text{mmol}}$$
3. **Menghitung Mol $\\ce{NaOH}$:**
   $$n_{\\ce{NaOH}} = n_{\\ce{HCl,1}} - n_{\\ce{Na2CO3}} = 3{,}00\\ \\text{mmol} - 1{,}00\\ \\text{mmol} = \\mathbf{2{,}00\\ \\text{mmol}}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['titrasi-warder', 'campuran-basa', 'naoh-na2co3', 'dua-indikator-pp-mo'],
  },
  {
    id: 109020,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Teori Asam-Basa Keras-Lunak Pearson (HSAB)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penerapan Asas HSAB Pearson pada Stabilitas Kompleks dan Kelarutan Garam Perak',
    question_text: `Berdasarkan teori Asam-Basa Keras dan Lunak (*Hard and Soft Acids and Bases*, HSAB) yang dirumuskan oleh Ralph Pearson:
- **Asam/Basa Keras (*Hard*):** Berukuran kecil, bermuatan tinggi, dan memiliki polarisabilitas rendah (sukar terpolarisasi).
- **Asam/Basa Lunak (*Soft*):** Berukuran besar, bermuatan rendah, dan memiliki polarisabilitas tinggi (mudah terpolarisasi).

Diketahui kation perak(I) ($\\ce{Ag+}$) diklasifikasikan sebagai asam lunak (*soft acid*), sedangkan ion halida memiliki tren kelembutan: $\\ce{I-} > \\ce{Br-} > \\ce{Cl-} > \\ce{F-}$, di mana $\\ce{F-}$ adalah basa keras (*hard base*) dan $\\ce{I-}$ adalah basa lunak (*soft base*).

Pernyataan yang **paling tepat** mengenai afinitas kimia dan stabilitas senyawa halida perak berdasarkan asas HSAB adalah ....

A. Kompleks $\\ce{[AgF2]-}$ memiliki tetapan pembentukan jauh lebih besar daripada $\\ce{[AgI2]-}$ karena interaksi ionik elektrostatik $\\ce{Ag+ - F-}$ sangat kuat  
B. Sesuai kaidah Pearson, interaksi lunak-lunak (*soft-soft*) antara kation $\\ce{Ag+}$ dan anion $\\ce{I-}$ membentuk ikatan kovalen yang sangat stabil, sehingga $\\ce{AgI}$ memiliki tetapan hasil kali kelarutan ($K_{sp}$) terkecil ($10^{-16}$) dibandingkan $\\ce{AgF}$ yang larut baik dalam air  
C. Ion fluorida dapat mengendapkan perak dari larutan kompleks $\\ce{[Ag(CN)2]-}$  
D. Asas HSAB memprediksi bahwa asam keras lebih menyukai berikatan secara spontan dengan basa lunak  
E. Polarisabilitas ion $\\ce{F-}$ yang sangat besar menyebabkan gaya dispersi London antara $\\ce{Ag+}$ dan $\\ce{F-}$ menjadi dominan`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Utama Asas HSAB Pearson:**
   *"Asam keras lebih menyukai berikatan dengan basa keras (hard-hard), dan asam lunak lebih menyukai berikatan dengan basa lunak (soft-soft)."*
   - Interaksi *Hard-Hard* didominasi oleh gaya elektrostatik / ionik kuat.
   - Interaksi *Soft-Soft* didominasi oleh tumpang tindih orbital / kovalensi yang kuat karena kedua spesi memiliki awan elektron yang mudah dipolarisasi.
2. **Penerapan pada Garam Perak Halida ($\\ce{AgX}$):**
   - Kation $\\ce{Ag+}$ adalah **asam lunak (*soft acid*)**.
   - Ion iodida $\\ce{I-}$ memiliki jari-jari ionik sangat besar dan rapat muatan rendah $\\implies$ **basa lunak (*soft base*)**.
   - Pasangan $\\ce{Ag+}$ dan $\\ce{I-}$ memenuhi kriteria kesesuaian *Soft-Soft*, membentuk ikatan berkarakter kovalen sangat dominan yang amat stabil dan sukar diputus oleh molekul air polar.
   - Akibatnya, $\\ce{AgI}$ memiliki kelarutan yang luar biasa kecil ($K_{sp} \\approx 8{,}5 \\times 10^{-17}$), sedangkan $\\ce{AgF}$ (interaksi lunak-keras) berkarakter ionik dan sangat mudah larut di dalam air.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['teori-hsab', 'pearson', 'asam-basa-keras-lunak', 'kelarutan-perak-halida'],
  },
  {
    id: 109021,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Titrasi Balik (Back Titration) Kadar CaCO3 dalam Cangkang Telur',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Kadar Kalsium Karbonat dalam Sampel Cangkang Telur via Titrasi Balik',
    question_text: `Untuk menganalisis kadar kalsium karbonat ($\\ce{CaCO3}$, $M_r = 100{,}09\\ \\text{g/mol}$) di dalam cangkang telur unggas, seorang peneliti menimbang $1{,}200\\ \\text{g}$ serbuk cangkang telur kering dan melarutkannya ke dalam $50{,}00\\ \\text{mL}$ larutan $\\ce{HCl } 0{,}500\\ \\text{M}$ berlebih hingga seluruh padatan larut sempurna dan gas $\\ce{CO2}$ berhenti terbentuk.

Campuran larutan tersebut kemudian dipanaskan perlahan untuk mengusir seluruh sisa gas $\\ce{CO2}$ terlarut, didinginkan, lalu dititrasi kembali sisa asamnya (*back titration*) dengan larutan standar $\\ce{NaOH } 0{,}200\\ \\text{M}$. Titik akhir titrasi tercapai tepat ketika buret mengeluarkan $35{,}00\\ \\text{mL}$ larutan $\\ce{NaOH}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah jumlah milimol (mmol) HCl mula-mula yang ditambahkan, jumlah milimol HCl sisa yang dinetralkan oleh NaOH, serta milimol HCl yang tepat bereaksi mengikis CaCO3!',
        points: 5,
        rubric: 'Menghitung mmol HCl awal = 50,00 mL * 0,500 M = 25,00 mmol (1.5 poin). Menghitung mmol HCl sisa = mmol NaOH = 35,00 mL * 0,200 M = 7,00 mmol (1.5 poin). Menghitung mmol HCl yang bereaksi = 25,00 - 7,00 = 18,00 mmol (2 poin).',
        expected_answer: 'HCl awal = 25,00 mmol; HCl sisa = 7,00 mmol; HCl bereaksi = 18,00 mmol'
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan reaksi setara antara CaCO3 dan HCl, lalu hitung massa CaCO3 dalam sampel dan tentukan persentase kemurnian (% b/b) kalsium karbonat dalam cangkang telur tersebut!',
        points: 5,
        rubric: 'Menuliskan reaksi: CaCO3(s) + 2 HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g) (1.5 poin). Menghitung mmol CaCO3 = 18,00 mmol / 2 = 9,00 mmol (1.5 poin). Menghitung massa CaCO3 = 9,00 x 10^-3 mol * 100,09 g/mol = 0,9008 g (1 poin). Menghitung % kemurnian = (0,9008 g / 1,200 g) * 100% = 75,07% ≈ 75,1% (1 poin).',
        expected_answer: 'Massa CaCO3 = 0,901 g; Kadar % (b/b) = 75,1%'
      }
    ],
    expected_final_answer: 'a. HCl awal = 25,00 mmol, HCl sisa = 7,00 mmol, HCl bereaksi = 18,00 mmol; b. Massa CaCO3 = 0,901 g, Kadar = 75,1%.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Mol Titrasi Balik (Bobot: 5 Poin)**
   - Jumlah mol $\\ce{HCl}$ awal yang dimasukkan:
     $$n(\\ce{HCl})_{\\text{awal}} = 50{,}00\\ \\text{mL} \\times 0{,}500\\ \\text{M} = \\mathbf{25{,}00\\ \\text{mmol}} \\quad (1{,}5\\ \\text{poin})$$
   - Jumlah mol $\\ce{HCl}$ sisa yang dinetralkan oleh $\\ce{NaOH}$:
     $$n(\\ce{HCl})_{\\text{sisa}} = n(\\ce{NaOH}) = 35{,}00\\ \\text{mL} \\times 0{,}200\\ \\text{M} = \\mathbf{7{,}00\\ \\text{mmol}} \\quad (1{,}5\\ \\text{poin})$$
   - Jumlah mol $\\ce{HCl}$ yang bereaksi melarutkan $\\ce{CaCO3}$:
     $$n(\\ce{HCl})_{\\text{bereaksi}} = n(\\ce{HCl})_{\\text{awal}} - n(\\ce{HCl})_{\\text{sisa}} = 25{,}00\\ \\text{mmol} - 7{,}00\\ \\text{mmol} = \\mathbf{18{,}00\\ \\text{mmol}} \\quad (2{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Reaksi, Massa, dan Persen Kemurnian $\ce{CaCO3}$ (Bobot: 5 Poin)**
   - Persamaan reaksi pelarutan kalsium karbonat oleh asam kuat:
     $$\\ce{CaCO3(s) + 2 HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)} \\quad (1{,}5\\ \\text{poin})$$
   - Berdasarkan koefisien reaksi $1 : 2$:
     $$n(\\ce{CaCO3}) = \\frac{1}{2} \\times n(\\ce{HCl})_{\\text{bereaksi}} = \\frac{1}{2} \\times 18{,}00\\ \\text{mmol} = \\mathbf{9{,}00\\ \\text{mmol} = 9{,}00 \\times 10^{-3}\\ \\text{mol}} \\quad (1{,}5\\ \\text{poin})$$
   - Massa murni kalsium karbonat dalam sampel:
     $$\\text{Massa } \\ce{CaCO3} = 9{,}00 \\times 10^{-3}\\ \\text{mol} \\times 100{,}09\\ \\text{g/mol} = \\mathbf{0{,}9008\\ \\text{g}} \\quad (1{,}0\\ \\text{poin})$$
   - Persentase kemurnian cangkang telur:
     $$\\%\\text{Kemurnian} = \\frac{\\text{Massa } \\ce{CaCO3}}{\\text{Massa sampel}} \\times 100\\% = \\frac{0{,}9008\\ \\text{g}}{1{,}200\\ \\text{g}} \\times 100\\% = \\mathbf{75{,}07\\% \\approx 75{,}1\\%} \\quad (1{,}0\\ \\text{poin})$$`,
    solution_framework_template: `1. Analisis Stoikiometri Titrasi Balik:
• Milimol asam analit awal berlebih: ....
• Milimol titran basa penitrasi sisa asam: ....
• Milimol asam yang terpakai oleh analit padatan: ....

2. Evaluasi Kadar Analit Sampel:
• Persamaan reaksi stoikiometri pelarutan karbonat: ....
• Konversi mol HCl ke mol CaCO3 (faktor 1/2): ....
• Perhitungan massa murni zat analit: ....
• Persentase kadar kemurnian (% b/b): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['titrasi-balik', 'back-titration', 'kalsium-karbonat', 'cangkang-telur'],
  },
  {
    id: 109022,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Kegagalan Aproksimasi 5% & Penyelesaian Eksak Kuadratik Asam Lemah',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Perhitungan Eksak Nilai pH Asam Dikloroasetat CHCl2COOH via Persamaan Kuadrat',
    question_text: `Asam dikloroasetat ($\\ce{CHCl2COOH}$) memiliki tetapan ionisasi asam yang relatif besar dibandingkan asam karboksilat pada umumnya, yaitu $K_a = 5{,}00 \\times 10^{-2}$ pada $25^\\circ\\text{C}$ akibat efek penarikan elektron induktif kuat oleh dua atom klorin. Suatu larutan asam dikloroasetat dibuat dengan konsentrasi analit $C_a = 0{,}0100\\ \\text{M}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Buktikan bahwa rumus aproksimasi standar [H+] = sqrt(Ka * Ca) menghasilkan nilai yang tidak masuk akal secara fisik (gagal total), dan turunkan persamaan kuadratik eksak yang harus digunakan!',
        points: 5,
        rubric: 'Menghitung aproksimasi: [H+] = sqrt(0,0500 * 0,0100) = sqrt(0,000500) = 0,0224 M (1.5 poin). Menjelaskan bahwa nilai [H+] = 0,0224 M > Ca (0,0100 M), yang berarti derajat ionisasi alfa = 224% (tidak masuk akal karena alfa <= 100%) (1.5 poin). Menurunkan persamaan kesetimbangan Ka = x^2 / (Ca - x) menghasilkan persamaan kuadrat: x^2 + Ka x - Ka Ca = 0 => x^2 + 0,0500 x - 0,000500 = 0 (2 poin).',
        expected_answer: 'Aproksimasi menghasilkan [H+] = 0,0224 M > Ca (alfa = 224%, mustahil); Persamaan kuadrat: x^2 + 0,0500 x - 0,000500 = 0'
      },
      {
        label: 'b',
        question_text: 'Selesaikan persamaan kuadratik tersebut untuk menentukan nilai konsentrasi ion hidrogen eksak ([H+]), derajat ionisasi riil (alfa), serta nilai pH larutan!',
        points: 5,
        rubric: 'Menggunakan rumus kuadratik: x = (-0,0500 + sqrt(0,0500^2 - 4(1)(-0,000500))) / 2 = (-0,0500 + sqrt(0,002500 + 0,002000)) / 2 = (-0,0500 + sqrt(0,004500)) / 2 = (-0,0500 + 0,06708) / 2 = 0,00854 M (2.5 poin). Menghitung derajat ionisasi alfa = 0,00854 / 0,0100 = 0,854 (85,4%) (1.5 poin). Menghitung pH = -log(0,00854) = 2,07 (1 poin).',
        expected_answer: '[H+] = 0,00854 M; alfa = 0,854 (85,4%); pH = 2,07'
      }
    ],
    expected_final_answer: 'a. Aproksimasi menghasilkan [H+] > Ca (gagal); x^2 + 0,0500 x - 0,000500 = 0; b. [H+] = 0,00854 M, alfa = 0,854 (85,4%), pH = 2,07.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Bukti Kegagalan Aproksimasi & Persamaan Kuadrat (Bobot: 5 Poin)**
   - Jika diterapkan rumus aproksimasi cepat $[\\ce{H+}] = \\sqrt{K_a \\cdot C_a}$:
     $$[\\ce{H+}]_{\\text{aproks}} = \\sqrt{5{,}00 \\times 10^{-2} \\times 0{,}0100} = \\sqrt{5{,}00 \\times 10^{-4}} = \\mathbf{0{,}0224\\ \\text{M}} \\quad (1{,}5\\ \\text{poin})$$
   - Nilai $[\\ce{H+}]_{\\text{aproks}} = 0{,}0224\\ \\text{M}$ jauh lebih besar daripada konsentrasi total asam yang dimasukkan ($C_a = 0{,}0100\\ \\text{M}$).
   - Hal ini menghasilkan derajat ionisasi:
     $$\\alpha = \\frac{0{,}0224}{0{,}0100} = 2{,}24 = \\mathbf{224\\%} \\quad (\\text{mustahil secara termodinamika}) \\quad (1{,}5\\ \\text{poin})$$
   - Karena $K_a$ bernilai besar dan konsentrasi encer, penguraian asam tidak dapat diabaikan ($C_a - x \\neq C_a$):
     $$K_a = \\frac{x^2}{C_a - x} \\implies x^2 + K_a x - K_a C_a = 0$$
     $$x^2 + 0{,}0500x - (0{,}0500)(0{,}0100) = 0 \\implies \\mathbf{x^2 + 0{,}0500x - 0{,}000500 = 0} \\quad (2{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Penyelesaian Eksak dan Nilai pH (Bobot: 5 Poin)**
   - Selesaikan persamaan kuadrat menggunakan rumus abc:
     $$x = \\frac{-0{,}0500 + \\sqrt{(0{,}0500)^2 - 4(1)(-0{,}000500)}}{2}$$
     $$x = \\frac{-0{,}0500 + \\sqrt{0{,}002500 + 0{,}002000}}{2} = \\frac{-0{,}0500 + \\sqrt{0{,}004500}}{2}$$
     $$x = \\frac{-0{,}0500 + 0{,}06708}{2} = \\frac{0{,}01708}{2} = \\mathbf{0{,}00854\\ \\text{M}} \\quad (2{,}5\\ \\text{poin})$$
   - Konsentrasi ion hidrogen eksak: $[\\ce{H+}] = \\mathbf{8{,}54 \\times 10^{-3}\\ \\text{M}}$.
   - Derajat ionisasi riil:
     $$\\alpha = \\frac{[\\ce{H+}]}{C_a} = \\frac{0{,}00854\\ \\text{M}}{0{,}0100\\ \\text{M}} = \\mathbf{0{,}854} \\quad (\\text{atau } \\mathbf{85{,}4\\%}) \\quad (1{,}5\\ \\text{poin})$$
   - Derajat keasaman (pH):
     $$\\text{pH} = -\\log(8{,}54 \\times 10^{-3}) = 3 - \\log 8{,}54 = 3 - 0{,}931 = \\mathbf{2{,}07} \\quad (1{,}0\\ \\text{poin})$$`,
    solution_framework_template: `1. Uji Validitas Kaidah Aproksimasi 5%:
• Perhitungan rumus akar sqrt(Ka * Ca): ....
• Pembuktian ionisasi melebihi batas fisik konsentrasi: ....
• Penurunan persamaan kuadrat aljabar eksak: ....

2. Penyelesaian Matematis Rumus Kuadratik:
• Aplikasi rumus diskriminan D = b^2 - 4ac: ....
• Solusi akar positif x = [H+]: ....
• Derajat ionisasi riil alfa: ....
• Nilai pH eksak larutan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['kegagalan-aproksimasi', 'persamaan-kuadrat-asam-lemah', 'asam-dikloroasetat', 'efek-induksi'],
  },
  {
    id: 109023,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Penurunan Rumus pH Garam Amfiprotik NaHCO3',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Derivasi Termodinamika pH Larutan Natrium Hidrogen Karbonat',
    question_text: `Garam natrium hidrogen karbonat ($\\ce{NaHCO3}$) larut sempurna di dalam air melepaskan kation $\\ce{Na+}$ dan anion amfiprotik $\\ce{HCO3-}$. Diketahui asam karbonat ($\\ce{H2CO3}$) memiliki tetapan ionisasi pada $25^\\circ\\text{C}$ berturut-turut:
- $\\text{p}K_{a1} = 6{,}37 \\implies K_{a1} = 4{,}27 \\times 10^{-7}$
- $\\text{p}K_{a2} = 10{,}33 \\implies K_{a2} = 4{,}68 \\times 10^{-11}$
Suatu larutan disiapkan dengan melarutkan garam $\\ce{NaHCO3}$ pada konsentrasi analit $C = 0{,}100\\ \\text{M}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan neraca massa (mass balance) dan neraca muatan (charge balance), buktikan bahwa konsentrasi ion hidrogen dalam larutan garam amfiprotik dapat dirumuskan secara aproksimasi sebagai [H+] = sqrt(Ka1 * Ka2)!',
        points: 5,
        rubric: 'Menuliskan neraca muatan: [Na+] + [H+] = [HCO3-] + 2[CO3^2-] + [OH-] dan neraca massa: [Na+] = C = [H2CO3] + [HCO3-] + [CO3^2-] (2 poin). Menggabungkan kedua neraca: [H2CO3] + [H+] = [CO3^2-] + [OH-] (1 poin). Mensubstitusi kesetimbangan Ka1, Ka2, dan Kw: [H+][HCO3-]/Ka1 + [H+] = Ka2[HCO3-]/[H+] + Kw/[H+], sehingga [H+]^2 ([HCO3-] + Ka1)/Ka1 = Ka2[HCO3-] + Kw. Karena C >> Ka1 dan Ka2*C >> Kw, persamaan tereduksi menjadi [H+]^2 ≈ Ka1 * Ka2 => [H+] = sqrt(Ka1 * Ka2) (2 poin).',
        expected_answer: 'Terbukti melalui neraca massa dan neraca muatan: [H+] = sqrt(Ka1 * Ka2)'
      },
      {
        label: 'b',
        question_text: 'Hitunglah nilai pH larutan NaHCO3 tersebut pada 25 °C dan jelaskan mengapa nilai pH tersebut praktis tidak bergantung pada konsentrasi garam!',
        points: 5,
        rubric: 'Menghitung pH = (pKa1 + pKa2) / 2 = (6,37 + 10,33) / 2 = 16,70 / 2 = 8,35 (2.5 poin). Menjelaskan bahwa konsentrasi analit C saling meniadakan dalam persamaan aproksimasi karena ion HCO3- bertindak seimbang sebagai asam dan basa (auto-protolisis amfiprotik), sehingga pH larutan ditentukan murni oleh rerata kedua pKa asam induknya (2.5 poin).',
        expected_answer: 'pH = 8,35; pH tidak bergantung pada C karena konsentrasi analit saling meniadakan dalam penurunan matematis kesetimbangan amfiprotik.'
      }
    ],
    expected_final_answer: 'a. Terbukti [H+] = sqrt(Ka1 * Ka2); b. pH = 8,35, independen terhadap konsentrasi karena autoionisasi amfiprotik simetris.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Derivasi Neraca Massa & Muatan (Bobot: 5 Poin)**
   - **Neraca Muatan (*Charge Balance*):**
     $$[\\ce{Na+}] + [\\ce{H+}] = [\\ce{HCO3-}] + 2[\\ce{CO3^2-}] + [\\ce{OH-}] \\quad (1{,}0\\ \\text{poin})$$
   - **Neraca Massa (*Mass Balance*):**
     $$[\\ce{Na+}] = C = [\\ce{H2CO3}] + [\\ce{HCO3-}] + [\\ce{CO3^2-}] \\quad (1{,}0\\ \\text{poin})$$
   - Substitusi $[\\ce{Na+}]$ ke persamaan neraca muatan:
     $$[\\ce{H2CO3}] + [\\ce{HCO3-}] + [\\ce{CO3^2-}] + [\\ce{H+}] = [\\ce{HCO3-}] + 2[\\ce{CO3^2-}] + [\\ce{OH-}]$$
     $$[\\ce{H2CO3}] + [\\ce{H+}] = [\\ce{CO3^2-}] + [\\ce{OH-}] \\quad (1{,}0\\ \\text{poin})$$
   - Nyatakan seluruh suku dalam $[\\ce{H+}]$ dan $[\\ce{HCO3-}]$:
     $$\\frac{[\\ce{H+}][\\ce{HCO3-}]}{K_{a1}} + [\\ce{H+}] = \\frac{K_{a2}[\\ce{HCO3-}]}{[\\ce{H+}]} + \\frac{K_w}{[\\ce{H+}]}$$
     $$[\\ce{H+}]^2 \\left(1 + \\frac{[\\ce{HCO3-}]}{K_{a1}}\\right) = K_{a2}[\\ce{HCO3-}] + K_w$$
     $$[\\ce{H+}] = \\sqrt{\\frac{K_{a1} K_{a2}[\\ce{HCO3-}] + K_{a1} K_w}{K_{a1} + [\\ce{HCO3-}]}}$$
   - Karena $[\\ce{HCO3-}] \\approx C = 0{,}100\\ \\text{M} \\gg K_{a1} (4{,}27 \\times 10^{-7})$ dan $K_{a2} C \\gg K_w$:
     $$[\\ce{H+}] \\approx \\sqrt{\\frac{K_{a1} K_{a2} C}{C}} = \\mathbf{\\sqrt{K_{a1} K_{a2}}} \\quad (\\text{terbukti valid}) \\quad (2{,}0\\ \\text{poin})$$

2. **Sub-soal (b): Perhitungan pH dan Rasionalisasi Fisis (Bobot: 5 Poin)**
   - Dengan mengambil fungsi $-\\log$:
     $$\\text{pH} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{6{,}37 + 10{,}33}{2} = \\frac{16{,}70}{2} = \\mathbf{8{,}35} \\quad (2{,}5\\ \\text{poin})$$
   - **Rasionalisasi Fisis:**
     Nilai pH tidak bergantung pada konsentrasi garam $\\ce{NaHCO3}$ karena ion $\\ce{HCO3-}$ memiliki kemampuan ganda yang seimbang: ia bertindak sebagai donor proton sekaligus akseptor proton dalam larutan yang sama. Efek pengenceran menurunkan konsentrasi spesi asam dan basa secara seimbang proporsional, sehingga rasio aktivitas ion hidrogen terkunci tepat pada nilai rata-rata geometrik kedua tetapan ionisasi $(\\text{p}K_{a1} + \\text{p}K_{a2})/2$. *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Penurunan Persamaan Kesetimbangan Amfiprotik:
• Persamaan neraca massa spesi karbonat: ....
• Persamaan neraca muatan elektroneutralitas: ....
• Kombinasi kedua neraca dan eliminasi kation spektator: ....
• Penyederhanaan asumsi konsentrasi C >> Ka1: ....

2. Evaluasi Nilai pH dan Kemandirian Konsentrasi:
• Rumus semi-jumlah pH = (pKa1 + pKa2) / 2: ....
• Kalkulasi nilai pH larutan NaHCO3: ....
• Alasan termodinamika independensi konsentrasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP) & Pelatnas',
    tags: ['garam-amfiprotik', 'nahco3', 'neraca-massa-muatan', 'derivasi-ph'],
  },
  {
    id: 109024,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Rekonstruksi Kuantitatif Kurva Titrasi Volumetris CH3COOH - NaOH',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Rekonstruksi Kurva Titrasi Asam Asetat dengan NaOH pada Titik-Titik Kritis',
    question_text: `Sebanyak $25{,}00\\ \\text{mL}$ larutan asam asetat ($\\ce{CH3COOH}$) berkonsentrasi $0{,}100\\ \\text{M}$ ($K_a = 1{,}80 \\times 10^{-5}$) dititrasi menggunakan larutan standar natrium hidroksida ($\\ce{NaOH}$) $0{,}100\\ \\text{M}$ pada suhu $25^\\circ\\text{C}$ ($K_w = 1{,}00 \\times 10^{-14}$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah nilai pH larutan pada saat volume NaOH yang ditambahkan adalah 0,00 mL (titik awal) dan pada saat penambahan 12,50 mL NaOH (titik setengah netralisasi)! Tunjukkan bahwa pada titik kedua berlaku pH = pKa!',
        points: 5,
        rubric: 'Pada 0 mL: [H+] = sqrt(Ka * Ca) = sqrt(1,80 x 10^-5 * 0,100) = 1,34 x 10^-3 M => pH = 2,87 (2 poin). Pada 12,50 mL (separuh ekuivalen): mol CH3COOH awal = 2,50 mmol; mol NaOH = 12,50 * 0,100 = 1,25 mmol. Sisa CH3COOH = 1,25 mmol dan terbentuk CH3COO- = 1,25 mmol. Karena [CH3COOH] = [CH3COO-], maka pH = pKa + log(1) = pKa = -log(1,80 x 10^-5) = 4,74 terbukti (3 poin).',
        expected_answer: 'pH awal (0 mL) = 2,87; pH setengah netralisasi (12,50 mL) = pKa = 4,74'
      },
      {
        label: 'b',
        question_text: 'Hitunglah nilai pH larutan pada titik ekuivalen volumetri (penambahan tepat 25,00 mL NaOH), serta tentukan indikator yang paling ideal digunakan antara metil merah (trayek pH 4,4 - 6,2) dan fenolftalein (trayek pH 8,3 - 10,0)!',
        points: 5,
        rubric: 'Pada titik ekuivalen (25,00 mL): volume total = 50,00 mL. Mol CH3COONa = 2,50 mmol. Molaritas garam Cg = 2,50 mmol / 50,00 mL = 0,0500 M (1.5 poin). Hidrolisis anion: [OH-] = sqrt((Kw / Ka) * Cg) = sqrt((10^-14 / 1,80 x 10^-5) * 0,0500) = sqrt(2,778 x 10^-11) = 5,27 x 10^-6 M (1.5 poin). pOH = 5,28 => pH = 14 - 5,28 = 8,72 (1 poin). Indikator paling ideal adalah fenolftalein karena trayeknya (8,3 - 10,0) mencakup pH titik ekuivalen 8,72, sedangkan metil merah akan berubah warna prematur (1 poin).',
        expected_answer: 'pH titik ekuivalen = 8,72; Indikator paling ideal: fenolftalein'
      }
    ],
    expected_final_answer: 'a. pH (0 mL) = 2,87; pH (12,50 mL) = 4,74 (berlaku pH = pKa); b. pH ekuivalen = 8,72, indikator ideal: fenolftalein.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): pH Titik Awal dan Titik Setengah Netralisasi (Bobot: 5 Poin)**
   - **Pada Penambahan $\\ce{NaOH} = 0{,}00\\ \\text{mL}$ (Larutan Asam Lemah Murni):**
     $$[\\ce{H+}] = \\sqrt{K_a \\times C_a} = \\sqrt{(1{,}80 \\times 10^{-5}) \\times 0{,}100} = \\sqrt{1{,}80 \\times 10^{-6}} = 1{,}342 \\times 10^{-3}\\ \\text{M}$$
     $$\\text{pH} = -\\log(1{,}342 \\times 10^{-3}) = 3 - \\log 1{,}342 = \\mathbf{2{,}87} \\quad (2{,}0\\ \\text{poin})$$
   - **Pada Penambahan $\\ce{NaOH} = 12{,}50\\ \\text{mL}$ (Titik Setengah Netralisasi / *Buffer*):**
     $$n(\\ce{CH3COOH})_{\\text{awal}} = 25{,}00\\ \\text{mL} \\times 0{,}100\\ \\text{M} = 2{,}50\\ \\text{mmol}$$
     $$n(\\ce{NaOH})_{\\text{masuk}} = 12{,}50\\ \\text{mL} \\times 0{,}100\\ \\text{M} = 1{,}25\\ \\text{mmol}$$
     - Sisa asam lemah: $n(\\ce{CH3COOH}) = 2{,}50 - 1{,}25 = 1{,}25\\ \\text{mmol}$.
     - Basa konjugasi terbentuk: $n(\\ce{CH3COO-}) = 1{,}25\\ \\text{mmol}$.
     - Karena $[\\ce{CH3COOH}] = [\\ce{CH3COO-}]$, menurut persamaan Henderson-Hasselbalch:
       $$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{CH3COO-}]}{[\\ce{CH3COOH}]}\\right) = \\text{p}K_a + \\log(1) = \\mathbf{\\text{p}K_a} \\quad (1{,}5\\ \\text{poin})$$
       $$\\text{pH} = -\\log(1{,}80 \\times 10^{-5}) = 5 - \\log 1{,}80 = 5 - 0{,}255 = \\mathbf{4{,}74} \\quad (1{,}5\\ \\text{poin})$$

2. **Sub-soal (b): pH Titik Ekuivalen dan Pemilihan Indikator (Bobot: 5 Poin)**
   - Pada penambahan $25{,}00\\ \\text{mL } \\ce{NaOH}$, seluruh asam tepat habis bereaksi membentuk natrium asetat ($2{,}50\\ \\text{mmol}$).
   - Volume total larutan:
     $$V_{\\text{total}} = 25{,}00\\ \\text{mL} + 25{,}00\\ \\text{mL} = 50{,}00\\ \\text{mL}$$
   - Konsentrasi garam natrium asetat:
     $$C_{\\text{garam}} = \\frac{2{,}50\\ \\text{mmol}}{50{,}00\\ \\text{mL}} = 0{,}0500\\ \\text{M} \\quad (1{,}5\\ \\text{poin})$$
   - Mengalami hidrolisis anion penghasil ion hidroksida:
     $$[\\ce{OH-}] = \\sqrt{\\frac{K_w}{K_a} \\times C_{\\text{garam}}} = \\sqrt{\\frac{1{,}00 \\times 10^{-14}}{1{,}80 \\times 10^{-5}} \\times 0{,}0500} = \\sqrt{2{,}778 \\times 10^{-11}} = 5{,}27 \\times 10^{-6}\\ \\text{M} \\quad (1{,}5\\ \\text{poin})$$
     $$\\text{pOH} = -\\log(5{,}27 \\times 10^{-6}) = 6 - \\log 5{,}27 = 5{,}28$$
     $$\\text{pH} = 14{,}00 - 5{,}28 = \\mathbf{8{,}72} \\quad (1{,}0\\ \\text{poin})$$
   - **Pemilihan Indikator:**
     Indikator yang ideal adalah **fenolftalein (PP)** karena rentang trayek perubahannya ($8{,}3 - 10{,}0$) mencakup $\\text{pH} = 8{,}72$. Metil merah (trayek $4{,}4 - 6{,}2$) sama sekali tidak dapat digunakan karena akan berubah warna jauh sebelum titik ekuivalen tercapai. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Titik Awal dan Daerah Penyangga Maksimum:
• Perhitungan pH larutan asam asetat murni: ....
• Stoikiometri titik setengah ekuivalen: ....
• Pembuktian kondisi pH = pKa: ....

2. Titik Ekuivalen Hidrolisis Garam dan Indikator:
• Volume total dan molaritas garam natrium asetat: ....
• Rumus hidrolisis anion garam [OH-] = sqrt((Kw/Ka)*Cg): ....
• Perhitungan pOH dan pH ekuivalen: ....
• Analisis kecocokan trayek fenolftalein vs metil merah: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['rekonstruksi-kurva-titrasi', 'setengah-netralisasi', 'hidrolisis-anion', 'pemilihan-indikator'],
  },
  {
    id: 109025,
    sma_topic_number: 9,
    sma_topic_id: 109,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Titrasi Asam Poliprotik H3PO4 dengan Basa Kuat NaOH',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Volumetri Titrasi Dua Tahap Asam Fosfat dengan NaOH',
    question_text: `Asam fosfat ($\\ce{H3PO4}$) merupakan asam triprotik penting dengan nilai tetapan ionisasi pada $25^\\circ\\text{C}$:
- $\\text{p}K_{a1} = 2{,}15 \\implies K_{a1} = 7{,}1 \\times 10^{-3}$
- $\\text{p}K_{a2} = 7{,}20 \\implies K_{a2} = 6{,}3 \\times 10^{-8}$
- $\\text{p}K_{a3} = 12{,}38 \\implies K_{a3} = 4{,}2 \\times 10^{-13}$

Ketika larutan asam fosfat dititrasi dengan larutan standar natrium hidroksida ($\\ce{NaOH}$) di dalam media air, pada kurva titrasi hanya terlihat dua lonjakan pH yang tajam (dua titik ekuivalen yang teramati).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan alasan ilmiah mengapa proton ketiga dari ion monohidrogen fosfat (HPO4^2-) tidak dapat dititrasi secara volumetrik dengan larutan standar NaOH di dalam media pelarut air!',
        points: 5,
        rubric: 'Menjelaskan nilai pKa3 = 12,38 sangat tinggi (Ka3 = 4,2 x 10^-13 sangat kecil), hampir mendekati Kw air (10^-14) (2.5 poin). Pada rentang pH tersebut, ion HPO4^2- bertindak sebagai asam yang terlalu lemah sehingga reaksi dengan OH- tidak tuntas dan kurva pH tidak membentuk lonjakan tajam, tersamarkan oleh disosiasi basa dari kelebihan titran NaOH dan autoionisasi air (2.5 poin).',
        expected_answer: 'pKa3 = 12,38 teramat tinggi (asam terlalu lemah); tidak menghasilkan lonjakan pH tajam di media air karena tersamarkan oleh ion OH- bebas.'
      },
      {
        label: 'b',
        question_text: 'Hitunglah nilai pH teoritis pada titik ekuivalen pertama (pembentukan NaH2PO4) dan titik ekuivalen kedua (pembentukan Na2HPO4), serta rekomendasikan indikator visual yang tepat untuk masing-masing titik ekuivalen tersebut!',
        points: 5,
        rubric: 'Menghitung pH titik ekuivalen 1: spesi amfiprotik H2PO4- => pH1 = (pKa1 + pKa2) / 2 = (2,15 + 7,20) / 2 = 9,35 / 2 = 4,68 (1.5 poin). Rekomendasi indikator 1: Metil Jingga / Metil Merah / Bromkresol Hijau (1 poin). Menghitung pH titik ekuivalen 2: spesi amfiprotik HPO4^2- => pH2 = (pKa2 + pKa3) / 2 = (7,20 + 12,38) / 2 = 19,58 / 2 = 9,79 (1.5 poin). Rekomendasi indikator 2: Fenolftalein (PP) / Timolftalein (1 poin).',
        expected_answer: 'Titik ekuivalen 1: pH = 4,68 (indikator: Metil Jingga / Bromkresol Hijau); Titik ekuivalen 2: pH = 9,79 (indikator: Fenolftalein / Timolftalein)'
      }
    ],
    expected_final_answer: 'a. pKa3 = 12,38 terlalu lemah untuk membentuk lonjakan pH di air; b. pH1 = 4,68 (Metil Jingga/MR), pH2 = 9,79 (Fenolftalein).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Kegagalan Titrasi Proton Ketiga di Air (Bobot: 5 Poin)**
   - Nilai tetapan ionisasi ketiga $\\ce{H3PO4}$ adalah $\\text{p}K_{a3} = 12{,}38$ ($K_{a3} = 4{,}2 \\times 10^{-13}$).
   - Nilai $K_{a3}$ ini teramat kecil dan hampir mendekati tetapan autoionisasi air ($K_w = 10^{-14}$), yang berarti ion $\\ce{HPO4^2-}$ merupakan asam yang luar biasa lemah. *(Skor: 2.5 Poin)*
   - Di dalam pelarut air, penambahan titran $\\ce{NaOH}$ pada $\\text{pH} > 12$ tidak mampu menghasilkan perubahan konsentrasi ion hidrogen secara drastis (tidak ada lonjakan kurva pH vertikal). Reaksi penetralan tersamarkan oleh keberadaan ion $\\ce{OH-}$ bebas dari titran dan hidrolisis ion fosfat $\\ce{PO4^3- + H2O <=> HPO4^2- + OH-}$. Akibatnya, titik ekuivalen ketiga tidak dapat dideteksi secara volumetris di dalam media air. *(Skor: 2.5 Poin)*

2. **Sub-soal (b): Perhitungan pH dan Rekomendasi Indikator (Bobot: 5 Poin)**
   - **Titik Ekuivalen Pertama (Pembentukan Spesi Amfiprotik $\\ce{H2PO4-}$):**
     $$\\ce{H3PO4 + NaOH -> NaH2PO4 + H2O}$$
     $$\\text{pH}_1 = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{2{,}15 + 7{,}20}{2} = \\frac{9{,}35}{2} = \\mathbf{4{,}68} \\quad (1{,}5\\ \\text{poin})$$
     - **Rekomendasi Indikator:** **Metil Jingga (MO)** (trayek $3{,}1 - 4{,}4$) atau **Bromkresol Hijau** (trayek $3{,}8 - 5{,}4$) atau **Metil Merah** (trayek $4{,}4 - 6{,}2$). *(Skor: 1.0 Poin)*
   - **Titik Ekuivalen Kedua (Pembentukan Spesi Amfiprotik $\\ce{HPO4^2-}$):**
     $$\\ce{NaH2PO4 + NaOH -> Na2HPO4 + H2O}$$
     $$\\text{pH}_2 = \\frac{\\text{p}K_{a2} + \\text{p}K_{a3}}{2} = \\frac{7{,}20 + 12{,}38}{2} = \\frac{19{,}58}{2} = \\mathbf{9{,}79} \\quad (1{,}5\\ \\text{poin})$$
     - **Rekomendasi Indikator:** **Fenolftalein (PP)** (trayek $8{,}3 - 10{,}0$) atau **Timolftalein** (trayek $9{,}3 - 10{,}5$). *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Analisis Keterbatasan Volumetri di Media Air:
• Nilai pKa3 asam fosfat dan perbandingannya terhadap Kw: ....
• Kelemahan protonasi ketiga dan kompetisi hidrolisis: ....
• Alasan ketiadaan lonjakan kurva pH ketiga: ....

2. Evaluasi Titik Ekuivalen 1 dan 2:
• Sifat amfiprotik H2PO4- dan formula pH1 = (pKa1 + pKa2) / 2: ....
• Pemilihan indikator titik ekuivalen 1: ....
• Sifat amfiprotik HPO4^2- dan formula pH2 = (pKa2 + pKa3) / 2: ....
• Pemilihan indikator titik ekuivalen 2: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP) & Pelatnas',
    tags: ['asam-poliprotik', 'titrasi-asam-fosfat', 'dua-titik-ekuivalen', 'spesi-amfiprotik'],
  },
];
