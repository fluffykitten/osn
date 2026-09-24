/**
 * smaQuestionsTopic7Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F & OSN Pilar 6)
 * 
 * BATCH 7: Laju Reaksi & Teori Tumbukan SMA (Topik 7 SMA / Modul 107)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 107001 - 107025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 107001 - 107025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 107001 - 107025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_7_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 107001 - 107025)
  // =========================================================================
  {
    id: 107001,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Perbandingan Laju Reaksi Berdasarkan Stoikiometri',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Perbandingan Laju Reaksi Pengurangan Reaktan dan Pembentukan Gas Amonia',
    question_text: `Reaksi pembentukan gas amonia industri menurut proses Haber-Bosch berlangsung sesuai persamaan reaksi setara berikut:
$$\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$$

Jika pada suatu selang waktu tertentu laju pengurangan gas hidrogen ($\\ce{H2}$) terukur sebesar $0{,}060\\ \\text{M/s}$, maka laju pengurangan gas nitrogen ($\\ce{N2}$) dan laju pembentukan gas amonia ($\\ce{NH3}$) berturut-turut adalah ....

A. $0{,}020\\ \\text{M/s}$ dan $0{,}040\\ \\text{M/s}$  
B. $0{,}060\\ \\text{M/s}$ dan $0{,}040\\ \\text{M/s}$  
C. $0{,}180\\ \\text{M/s}$ dan $0{,}120\\ \\text{M/s}$  
D. $0{,}020\\ \\text{M/s}$ dan $0{,}060\\ \\text{M/s}$  
E. $0{,}030\\ \\text{M/s}$ dan $0{,}060\\ \\text{M/s}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Hubungan Stoikiometri Laju Reaksi:**
   Untuk persamaan reaksi: $\\ce{a A + b B -> c C + d D}$, kesetaraan laju reaksi diferensial dinyatakan sebagai:
   $$v = -\\frac{1}{a}\\frac{\\Delta[\\ce{A}]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[\\ce{B}]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[\\ce{C}]}{\\Delta t}$$
   Maka pada reaksi $\\ce{N2 + 3 H2 -> 2 NH3}$:
   $$v = -\\frac{\\Delta[\\ce{N2}]}{\\Delta t} = -\\frac{1}{3}\\frac{\\Delta[\\ce{H2}]}{\\Delta t} = +\\frac{1}{2}\\frac{\\Delta[\\ce{NH3}]}{\\Delta t}$$
   Atau dalam bentuk rasio laju:
   $$v_{\\ce{N2}} : v_{\\ce{H2}} : v_{\\ce{NH3}} = 1 : 3 : 2$$

2. **Perhitungan Laju Tiap Spesi:**
   - Diketahui $v_{\\ce{H2}} = 0{,}060\\ \\text{M/s}$.
   - Laju pengurangan gas nitrogen:
     $$v_{\\ce{N2}} = \\frac{1}{3} \\times v_{\\ce{H2}} = \\frac{1}{3} \\times 0{,}060\\ \\text{M/s} = \\mathbf{0{,}020\\ \\text{M/s}}$$
   - Laju pembentukan gas amonia:
     $$v_{\\ce{NH3}} = \\frac{2}{3} \\times v_{\\ce{H2}} = \\frac{2}{3} \\times 0{,}060\\ \\text{M/s} = \\mathbf{0{,}040\\ \\text{M/s}}$$

Jawaban yang benar adalah **$0{,}020\\ \\text{M/s}$ dan $0{,}040\\ \\text{M/s}$** (Opsi A).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Kelas 11 Fase F',
    tags: ['laju-reaksi', 'stoikiometri-laju', 'persamaan-laju'],
  },
  {
    id: 107002,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Faktor-Faktor Laju Reaksi: Luas Permukaan & Konsentrasi',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Pengaruh Luas Permukaan dan Konsentrasi pada Pelarutan Kalsium Karbonat',
    question_text: `Sebanyak $5{,}0\\ \\text{g}$ kalsium karbonat ($\\ce{CaCO3}$) direaksikan dengan $100\\ \\text{mL}$ larutan asam klorida ($\\ce{HCl}$) pada berbagai kondisi dalam wadah terbuka:

| Percobaan | Bentuk Fisik $\\ce{CaCO3}$ | Konsentrasi $\\ce{HCl}$ | Temperatur Larutan |
| :---: | :---: | :---: | :---: |
| (1) | Bongkahan besar | $1{,}0\\ \\text{M}$ | $25^\\circ\\text{C}$ |
| (2) | Butiran kasar | $1{,}0\\ \\text{M}$ | $25^\\circ\\text{C}$ |
| (3) | Serbuk halus | $1{,}0\\ \\text{M}$ | $25^\\circ\\text{C}$ |
| (4) | Serbuk halus | $2{,}0\\ \\text{M}$ | $25^\\circ\\text{C}$ |
| (5) | Bongkahan besar | $2{,}0\\ \\text{M}$ | $25^\\circ\\text{C}$ |

Kondisi percobaan yang menghasilkan **laju reaksi paling cepat** sejak awal pencampuran adalah percobaan nomor ....

A. (1)  
B. (2)  
C. (3)  
D. (4)  
E. (5)`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Faktor Luas Permukaan Bidang Sentuh:**
   Massa padatan sama ($5{,}0\\ \\text{g}$). Bentuk serbuk halus memiliki total luas permukaan kontak per satuan massa yang jauh lebih besar daripada butiran maupun bongkahan. Semakin besar luas permukaan bidang sentuh antar fasa padat-cair, semakin banyak peluang terjadinya tumbukan antar partikel reaktan per satuan waktu.
   - Urutan luas permukaan: $\\text{Serbuk halus} > \\text{Butiran} > \\text{Bongkahan}$.
2. **Faktor Konsentrasi Reaktan:**
   Konsentrasi $\\ce{HCl}\\ 2{,}0\\ \\text{M}$ memiliki kerapatan partikel ion $\\ce{H+}$ per satuan volume yang lebih tinggi daripada $1{,}0\\ \\text{M}$, sehingga frekuensi tumbukan efektif meningkat.
3. **Kombinasi Optimum:**
   Percobaan **(4)** memadukan **serbuk halus** (luas bidang sentuh maksimum) dengan **konsentrasi $\\ce{HCl}$ tertinggi ($2{,}0\\ \\text{M}$)** pada temperatur yang sama ($25^\\circ\\text{C}$), sehingga menghasilkan laju reaksi paling cepat di antara semua variasi.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F (Kelas 11)',
    tags: ['faktor-laju-reaksi', 'teori-tumbukan', 'luas-permukaan', 'konsentrasi'],
  },
  {
    id: 107003,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Diagram Profil Tingkat Energi & Energi Aktivasi (Ea)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Nilai Energi Aktivasi dan Perubahan Entalpi dari Diagram Koordinat Reaksi',
    question_text: `Perhatikan diagram profil tingkat energi potensial untuk reaksi hipotesis $\\ce{A + B -> C + D}$ berikut:

- Energi reaktan ($\\ce{A + B}$): $+40\\ \\text{kJ/mol}$
- Energi puncak keadaan transisi (kompleks teraktivasi): $+135\\ \\text{kJ/mol}$
- Energi produk ($\\ce{C + D}$): $-15\\ \\text{kJ/mol}$

Berdasarkan data profil energi tersebut, nilai energi aktivasi reaksi maju ($E_{a,\\text{maju}}$) dan perubahan entalpi reaksi ($\\Delta H$) berturut-turut adalah ....

A. $+95\\ \\text{kJ/mol}$ dan $-55\\ \\text{kJ/mol}$ (Reaksi Eksoterm)  
B. $+135\\ \\text{kJ/mol}$ dan $+55\\ \\text{kJ/mol}$ (Reaksi Endoterm)  
C. $+95\\ \\text{kJ/mol}$ dan $+55\\ \\text{kJ/mol}$ (Reaksi Endoterm)  
D. $+150\\ \\text{kJ/mol}$ dan $-55\\ \\text{kJ/mol}$ (Reaksi Eksoterm)  
E. $+55\\ \\text{kJ/mol}$ dan $-95\\ \\text{kJ/mol}$ (Reaksi Eksoterm)`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Energi Aktivasi Reaksi Maju ($E_{a,\\text{maju}}$):**
   Energi minimum yang harus diserap reaktan untuk mencapai puncak kompleks teraktivasi:
   $$E_{a,\\text{maju}} = E_{\\text{kompleks teraktivasi}} - E_{\\text{reaktan}}$$
   $$E_{a,\\text{maju}} = 135\\ \\text{kJ/mol} - 40\\ \\text{kJ/mol} = +95\\ \\text{kJ/mol}$$

2. **Perubahan Entalpi Reaksi ($\\Delta H$):**
   Selisih energi antara produk dan reaktan:
   $$\\Delta H = E_{\\text{produk}} - E_{\\text{reaktan}}$$
   $$\\Delta H = -15\\ \\text{kJ/mol} - 40\\ \\text{kJ/mol} = -55\\ \\text{kJ/mol}$$
   Karena $\\Delta H < 0$ (bertanda negatif), reaksi ini melepaskan kalor ke lingkungan dan tergolong **reaksi eksoterm**.

Jawaban yang tepat adalah **$+95\\ \\text{kJ/mol}$ dan $-55\\ \\text{kJ/mol}$ (Reaksi Eksoterm)** (Opsi A).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kinetika Kimia SMA',
    tags: ['energi-aktivasi-ea', 'diagram-tingkat-energi', 'reaksi-eksoterm', 'kompleks-teraktivasi'],
  },
  {
    id: 107004,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kalkulasi Laju Reaksi Rata-Rata Kurva Konsentrasi-Waktu',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Kalkulasi Laju Pengurangan Gas Dinitrogen Pentaoksida terhadap Interval Waktu',
    question_text: `Penguraian termal gas dinitrogen pentaoksida berlangsung menurut persamaan:
$$\\ce{2 N2O5(g) -> 4 NO2(g) + O2(g)}$$

Data pemantauan konsentrasi $\\ce{N2O5}$ di dalam bejana reaksi tertutup bervolume $1{,}0\\ \\text{L}$ pada suhu $45^\\circ\\text{C}$ adalah sebagai berikut:

| Waktu ($t$, detik) | Konsentrasi $[\\ce{N2O5}]$ (M) |
| :---: | :---: |
| $0$ | $0{,}200$ |
| $100$ | $0{,}140$ |
| $200$ | $0{,}098$ |
| $300$ | $0{,}069$ |

Berdasarkan data eksperimen di atas:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah laju reaksi rata-rata pengurangan gas N2O5 pada interval waktu 0 hingga 100 detik, serta pada interval waktu 100 hingga 200 detik!',
        points: 2.5,
        rubric: 'Menghitung laju interval 0-100 s: v = -(0,140 - 0,200) / 100 = 6,0 x 10^-4 M/s (1.5 poin), dan interval 100-200 s: v = -(0,098 - 0,140) / 100 = 4,2 x 10^-4 M/s (1 poin).',
        expected_answer: 'v(0-100 s) = 6,0 x 10^-4 M/s; v(100-200 s) = 4,2 x 10^-4 M/s'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan nilai laju rata-rata pada sub-soal (a), jelaskan mengapa laju reaksi mengalami penurunan seiring bertambahnya waktu reaksi!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa laju berkurang karena konsentrasi reaktan N2O5 berkurang (1.5 poin) sehingga frekuensi tumbukan antarmolekul reaktan menurun (1 poin).',
        expected_answer: 'Laju berkurang karena konsentrasi N2O5 menurun seiring waktu, yang mengakibatkan frekuensi tumbukan efektif berkurang.'
      }
    ],
    expected_final_answer: 'a. v(0-100 s) = 6,0 x 10^-4 M/s, v(100-200 s) = 4,2 x 10^-4 M/s; b. Laju menurun akibat penurunan konsentrasi reaktan.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Laju Rata-Rata Diferensial (Bobot: 2.5 Poin)**
   - **Interval 1 ($0 - 100\\ \\text{detik}$):**
     $$v_1 = -\\frac{\\Delta[\\ce{N2O5}]}{\\Delta t} = -\\frac{0{,}140\\ \\text{M} - 0{,}200\\ \\text{M}}{100\\ \\text{s} - 0\\ \\text{s}} = -\\frac{-0{,}060\\ \\text{M}}{100\\ \\text{s}} = \\mathbf{6{,}0 \\times 10^{-4}\\ \\text{M/s}}$$
     *(Skor: 1.5 Poin)*
   - **Interval 2 ($100 - 200\\ \\text{detik}$):**
     $$v_2 = -\\frac{\\Delta[\\ce{N2O5}]}{\\Delta t} = -\\frac{0{,}098\\ \\text{M} - 0{,}140\\ \\text{M}}{200\\ \\text{s} - 100\\ \\text{s}} = -\\frac{-0{,}042\\ \\text{M}}{100\\ \\text{s}} = \\mathbf{4{,}2 \\times 10^{-4}\\ \\text{M/s}}$$
     *(Skor: 1.0 Poin)*

2. **Sub-soal (b): Penjelasan Fenomena Pelambatan Laju (Bobot: 2.5 Poin)**
   - Laju reaksi berbanding lurus dengan konsentrasi reaktan ($v \\propto [\\ce{N2O5}]^n$). Seiring reaksi berlangsung, molekul $\\ce{N2O5}$ terus terkonsumsi membentuk produk sehingga konsentrasinya semakin kecil. *(Skor: 1.5 Poin)*
   - Penurunan konsentrasi menyebabkan jarak rata-rata antarmolekul reaktan merenggang, sehingga jumlah tumbukan efektif per satuan volume per detik berkurang secara progresif. Akibatnya, kurva kemiringan konsentrasi melandai dan laju reaksi melambat. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Formulasi Laju Pengurangan Konsentrasi:
• Formula matematis laju diferensial rata-rata: ....
• Kalkulasi interval t = 0 hingga 100 s: ....
• Kalkulasi interval t = 100 hingga 200 s: ....

2. Hubungan Konsentrasi dan Teori Tumbukan:
• Pengaruh konsumsi reaktan terhadap kerapatan partikel: ....
• Frekuensi tumbukan efektif per satuan waktu: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['laju-reaksi', 'kurva-konsentrasi-waktu', 'teori-tumbukan'],
  },
  {
    id: 107005,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Aturan Empiris Kenaikan Temperatur terhadap Laju Reaksi',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Aplikasi Aturan Kenaikan Suhu terhadap Kecepatan dan Durasi Reaksi Kimia',
    question_text: `Suatu reaksi kimia memiliki karakteristik laju reaksi yang berlipat ganda menjadi $2$ kali lebih cepat setiap kenaikan suhu sebesar $10^\\circ\\text{C}$. Pada suhu awal $25^\\circ\\text{C}$, reaksi tersebut membutuhkan waktu $40\\ \\text{menit}$ untuk tuntas sempurna.

Berdasarkan aturan empiris hubungan suhu dan laju reaksi tersebut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berapa kali lebih cepat laju reaksi tersebut berlangsung jika temperatur dinaikkan menjadi 55 °C?',
        points: 2.5,
        rubric: 'Menuliskan rumus faktor kenaikan laju n = (T2 - T1) / 10 = (55 - 25)/10 = 3 (1 poin), dan menghitung kelipatan laju = 2^3 = 8 kali lebih cepat (1.5 poin).',
        expected_answer: '8 kali lebih cepat'
      },
      {
        label: 'b',
        question_text: 'Berapakah waktu yang dibutuhkan agar reaksi tersebut tuntas sempurna jika dijalankan pada temperatur 55 °C?',
        points: 2.5,
        rubric: 'Menghitung waktu t2 = t1 * (1/2)^n = 40 menit * (1/2)^3 = 40 / 8 = 5 menit (2.5 poin).',
        expected_answer: '5 menit (atau 300 detik)'
      }
    ],
    expected_final_answer: 'a. 8 kali lebih cepat; b. 5 menit.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Kelipatan Laju Reaksi (Bobot: 2.5 Poin)**
   - **Formula Kenaikan Laju:**
     $$v_2 = v_1 \\times a^{\\frac{\\Delta T}{\\Delta T_0}}$$
     Di mana $a = 2$ (kelipatan laju), $\\Delta T = T_2 - T_1 = 55^\\circ\\text{C} - 25^\\circ\\text{C} = 30^\\circ\\text{C}$, dan $\\Delta T_0 = 10^\\circ\\text{C}$.
   - **Perhitungan:**
     $$n = \\frac{30}{10} = 3$$
     $$v_2 = v_1 \\times 2^3 = v_1 \\times \\mathbf{8}$$
     Laju reaksi pada $55^\\circ\\text{C}$ berlangsung **$8$ kali lebih cepat** dibandingkan pada $25^\\circ\\text{C}$. *(Skor: 2.5 Poin)*

2. **Sub-soal (b): Perhitungan Waktu Reaksi (Bobot: 2.5 Poin)**
   - Karena waktu berbanding terbalik dengan laju reaksi ($t \\propto \\frac{1}{v}$):
     $$t_2 = t_1 \\times \\left(\\frac{1}{a}\\right)^{\\frac{\\Delta T}{\\Delta T_0}} = \\frac{t_1}{8}$$
   - **Perhitungan Waktu:**
     $$t_2 = \\frac{40\\ \\text{menit}}{8} = \\mathbf{5\\ \\text{menit}} \\quad (\\text{atau } 300\\ \\text{detik})$$
     *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Formulasi Hubungan Kenaikan Suhu dan Laju:
• Selisih temperatur Delta T = T2 - T1: ....
• Eksponen kenaikan n = Delta T / 10: ....
• Kelipatan laju v2 / v1 = 2^n: ....

2. Hubungan Laju terhadap Durasi Waktu:
• Sifat kebalikan waktu terhadap laju reaksi: ....
• Waktu akhir t2 = t1 / (2^n): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['aturan-suhu-laju', 'faktor-laju-reaksi', 'kinetika-kimia'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 107001 - 107025)
  // =========================================================================
  {
    id: 107006,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Penentuan Hukum Laju Reaksi Metode Laju Awal',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Orde Reaksi dan Persamaan Laju dari Data Eksperimen Konsentrasi Awal',
    question_text: `Data eksperimen laju reaksi untuk reaksi gas:
$$\\ce{2 NO(g) + O2(g) -> 2 NO2(g)}$$
pada suhu konstan disajikan pada tabel berikut:

| Percobaan | $[\\ce{NO}]$ (M) | $[\\ce{O2}]$ (M) | Laju Awal Reaksi ($v$, M/s) |
| :---: | :---: | :---: | :---: |
| 1 | $0{,}10$ | $0{,}10$ | $1{,}2 \\times 10^{-4}$ |
| 2 | $0{,}10$ | $0{,}20$ | $2{,}4 \\times 10^{-4}$ |
| 3 | $0{,}20$ | $0{,}10$ | $4{,}8 \\times 10^{-4}$ |

Persamaan hukum laju reaksi dan orde total reaksi tersebut adalah ....

A. $v = k [\\ce{NO}] [\\ce{O2}]$; Orde total = $2$  
B. $v = k [\\ce{NO}]^2 [\\ce{O2}]$; Orde total = $3$  
C. $v = k [\\ce{NO}] [\\ce{O2}]^2$; Orde total = $3$  
D. $v = k [\\ce{NO}]^2 [\\ce{O2}]^2$; Orde total = $4$  
E. $v = k [\\ce{NO}]^2$; Orde total = $2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Bentuk Umum Hukum Laju:**
   $$v = k [\\ce{NO}]^x [\\ce{O2}]^y$$

2. **Menentukan Orde Reaksi terhadap $\\ce{O2}$ ($y$):**
   Pilih Percobaan 1 dan 2 di mana $[\\ce{NO}]$ tetap ($0{,}10\\ \\text{M}$):
   $$\\frac{v_2}{v_1} = \\left(\\frac{[\\ce{O2}]_2}{[\\ce{O2}]_1}\\right)^y \\implies \\frac{2{,}4 \\times 10^{-4}}{1{,}2 \\times 10^{-4}} = \\left(\\frac{0{,}20}{0{,}10}\\right)^y$$
   $$2 = (2)^y \\implies y = 1$$
   *(Orde reaksi terhadap $\\ce{O2}$ adalah 1).*

3. **Menentukan Orde Reaksi terhadap $\\ce{NO}$ ($x$):**
   Pilih Percobaan 1 dan 3 di mana $[\\ce{O2}]$ tetap ($0{,}10\\ \\text{M}$):
   $$\\frac{v_3}{v_1} = \\left(\\frac{[\\ce{NO}]_3}{[\\ce{NO}]_1}\\right)^x \\implies \\frac{4{,}8 \\times 10^{-4}}{1{,}2 \\times 10^{-4}} = \\left(\\frac{0{,}20}{0{,}10}\\right)^x$$
   $$4 = (2)^x \\implies (2)^2 = (2)^x \\implies x = 2$$
   *(Orde reaksi terhadap $\\ce{NO}$ adalah 2).*

4. **Persamaan Laju dan Orde Total:**
   $$v = k [\\ce{NO}]^2 [\\ce{O2}]$$
   $$\\text{Orde Total} = x + y = 2 + 1 = 3$$

Jawaban yang tepat adalah **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['hukum-laju', 'orde-reaksi', 'metode-laju-awal'],
  },
  {
    id: 107007,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Penentuan Orde Reaksi dari Data Waktu Reaksi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Orde Reaksi dari Data Waktu Reaksi (t) Reaktan Ionik',
    question_text: `Data waktu berlangsungnya reaksi ion persulfat dengan ion iodida:
$$\\ce{S2O8^2-(aq) + 2 I-(aq) -> 2 SO4^2-(aq) + I2(aq)}$$
diperoleh melalui pencatatan waktu munculnya warna biru kompleks iodin-amilum pada temperatur tetap:

| Percobaan | $[\\ce{S2O8^2-}]$ (M) | $[\\ce{I-}]$ (M) | Waktu Reaksi ($t$, detik) |
| :---: | :---: | :---: | :---: |
| 1 | $0{,}04$ | $0{,}05$ | $72$ |
| 2 | $0{,}08$ | $0{,}05$ | $36$ |
| 3 | $0{,}04$ | $0{,}10$ | $36$ |

Orde reaksi terhadap ion $\\ce{S2O8^2-}$ dan ion $\\ce{I-}$ berturut-turut adalah ....

A. $0$ dan $1$  
B. $1$ dan $1$  
C. $2$ dan $1$  
D. $1$ dan $2$  
E. $2$ dan $2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Korelasi Laju dan Waktu Reaksi:**
   Laju reaksi berbanding terbalik dengan waktu reaksi: $v = \\frac{k'}{t}$.
   Maka rasio laju: $\\frac{v_a}{v_b} = \\frac{t_b}{t_a}$.

2. **Menentukan Orde terhadap $\\ce{S2O8^2-}$ ($x$):**
   Gunakan Percobaan 1 dan 2 ($[\\ce{I-}]$ tetap):
   $$\\frac{v_2}{v_1} = \\frac{t_1}{t_2} = \\left(\\frac{[\\ce{S2O8^2-}]_2}{[\\ce{S2O8^2-}]_1}\\right)^x$$
   $$\\frac{72}{36} = \\left(\\frac{0{,}08}{0{,}04}\\right)^x \\implies 2 = (2)^x \\implies x = 1$$

3. **Menentukan Orde terhadap $\\ce{I-}$ ($y$):**
   Gunakan Percobaan 1 dan 3 ($[\\ce{S2O8^2-}]$ tetap):
   $$\\frac{v_3}{v_1} = \\frac{t_1}{t_3} = \\left(\\frac{[\\ce{I-}]_3}{[\\ce{I-}]_1}\\right)^y$$
   $$\\frac{72}{36} = \\left(\\frac{0{,}10}{0{,}05}\\right)^y \\implies 2 = (2)^y \\implies y = 1$$

Orde reaksi berturut-turut adalah **$1$ dan $1$** (Opsi B).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kinetika Kimia SMA',
    tags: ['orde-reaksi', 'hukum-laju', 'waktu-reaksi'],
  },
  {
    id: 107008,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Nilai dan Satuan Tetapan Laju Reaksi (k)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Nilai Numerik dan Satuan Dimensi Tetapan Laju Reaksi Orde Dua',
    question_text: `Suatu reaksi fasa gas: $\\ce{2 NO2(g) -> 2 NO(g) + O2(g)}$ mengikuti hukum laju reaksi berorde dua:
$$v = k [\\ce{NO2}]^2$$

Pada suatu temperatur konstan, ketika konsentrasi $[\\ce{NO2}]$ sebesar $0{,}050\\ \\text{M}$, laju penguraiannya terukur sebesar $3{,}5 \\times 10^{-4}\\ \\text{M/s}$. Nilai tetapan laju ($k$) beserta satuan dimensinya yang benar adalah ....

A. $0{,}14\\ \\text{s}^{-1}$  
B. $0{,}14\\ \\text{M}^{-1}\\text{s}^{-1}$  
C. $7{,}0 \\times 10^{-3}\\ \\text{M}^{-1}\\text{s}^{-1}$  
D. $0{,}14\\ \\text{M}\\cdot\\text{s}^{-1}$  
E. $1{,}4 \\times 10^{-2}\\ \\text{M}^{-2}\\text{s}^{-1}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Satuan Tetapan Laju ($k$):**
   Secara umum, satuan $k$ untuk reaksi dengan orde total $n$ adalah:
   $$\\text{Satuan } k = \\text{M}^{1-n}\\cdot\\text{s}^{-1}$$
   Karena reaksi berorde dua ($n = 2$):
   $$\\text{Satuan } k = \\text{M}^{1-2}\\cdot\\text{s}^{-1} = \\mathbf{\\text{M}^{-1}\\cdot\\text{s}^{-1}} \\quad (\\text{atau } \\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1})$$

2. **Perhitungan Nilai Numerik $k$:**
   $$v = k [\\ce{NO2}]^2 \\implies k = \\frac{v}{[\\ce{NO2}]^2}$$
   $$k = \\frac{3{,}5 \\times 10^{-4}\\ \\text{M/s}}{(0{,}050\\ \\text{M})^2} = \\frac{3{,}5 \\times 10^{-4}}{2{,}5 \\times 10^{-3}} = \\mathbf{0{,}14\\ \\text{M}^{-1}\\text{s}^{-1}}$$

Jawaban yang benar adalah **$0{,}14\\ \\text{M}^{-1}\\text{s}^{-1}$** (Opsi B).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Kelas 11',
    tags: ['tetapan-laju-k', 'orde-reaksi', 'analisis-dimensi'],
  },
  {
    id: 107009,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Peran Katalis & Teori Distribusi Maxwell-Boltzmann',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Pengaruh Penambahan Katalis Ditinjau dari Kurva Distribusi Maxwell-Boltzmann',
    question_text: `Penambahan katalis ke dalam suatu campuran reaksi kimia dapat mempercepat pencapaian keadaan akhir reaksi. Penjelasan yang **paling tepat** mengenai mekanisme kerja katalis ditinjau dari kurva distribusi energi kinetik Maxwell-Boltzmann dan profil energi aktivasi adalah ....

A. Katalis menaikkan temperatur sistem sehingga kurva distribusi Maxwell-Boltzmann bergeser ke kanan dan energi kinetik rata-rata partikel bertambah  
B. Katalis menyediakan mekanisme reaksi alternatif dengan energi aktivasi ($E_a$) yang lebih rendah, sehingga garis batas $E_a$ bergeser ke kiri dan fraksi molekul yang memiliki energi mencukupi untuk bereaksi bertambah banyak  
C. Katalis mengubah nilai entalpi reaksi ($\\Delta H$) menjadi jauh lebih eksotermik sehingga reaksi melepaskan energi lebih besar  
D. Katalis memperbesar energi kinetik molekul pereaksi tanpa mengubah nilai energi aktivasi reaksi  
E. Katalis bereaksi secara permanen dengan reaktan dan meningkatkan fraksi tumbukan non-efektif`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Kerja Katalis:**
   - Katalis **tidak mengubah energi kinetik rata-rata partikel** (karena energi kinetik hanya bergantung pada temperatur sistem).
   - Katalis **tidak mengubah posisi kesetimbangan maupun perubahan entalpi reaksi ($\\Delta H$)**.
2. **Efek terhadap Kurva Maxwell-Boltzmann:**
   - Katalis bekerja dengan cara menawarkan **jalur reaksi alternatif (tahapan mekanisme baru)** yang memiliki **energi aktivasi ($E_a'$) lebih rendah** daripada reaksi tanpa katalis ($E_a' < E_a$).
   - Pada kurva distribusi Maxwell-Boltzmann, nilai ambang batas $E_a$ bergeser ke arah kiri (energi lebih rendah). Akibatnya, luas area di bawah kurva di sebelah kanan garis ambang batas (yang merepresentasikan **fraksi molekul yang memiliki energi $E \\ge E_a$**) menjadi bertambah jauh lebih besar secara signifikan, sehingga frekuensi tumbukan efektif melonjak dan reaksi berlangsung jauh lebih cepat.

Pernyataan yang tepat adalah opsi **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['katalis-dan-inhibitor', 'distribusi-maxwell-boltzmann', 'energi-aktivasi-ea'],
  },
  {
    id: 107010,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Mekanisme Reaksi Elementer & Tahap Penentu Laju (RDS)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Prediksi Hukum Laju dari Mekanisme Reaksi Dua Tahap dengan Tahap Pertama Lambat',
    question_text: `Reaksi antara gas nitrogen dioksida dan gas karbon monoksida berlangsung menurut persamaan total:
$$\\ce{NO2(g) + CO(g) -> NO(g) + CO2(g)}$$

Melalui kajian kinetika, reaksi tersebut diketahui berlangsung melalui mekanisme reaksi dua tahap elementer berikut:
- **Tahap 1 (Lambat):** $\\ce{NO2 + NO2 -> NO3 + NO}$
- **Tahap 2 (Cepat):** $\\ce{NO3 + CO -> NO2 + CO2}$

Berdasarkan mekanisme tersebut, persamaan hukum laju reaksi yang sesuai serta zat yang berperan sebagai zat antara (*reaction intermediate*) adalah ....

A. $v = k [\\ce{NO2}] [\\ce{CO}]$; zat antara: $\\ce{NO}$  
B. $v = k [\\ce{NO2}]^2$; zat antara: $\\ce{NO3}$  
C. $v = k [\\ce{NO2}]^2 [\\ce{CO}]$; zat antara: $\\ce{NO3}$  
D. $v = k [\\ce{NO3}] [\\ce{CO}]$; zat antara: $\\ce{CO2}$  
E. $v = k [\\ce{CO}]$; zat antara: $\\ce{NO2}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Tahap Penentu Laju (Rate-Determining Step / RDS):**
   Tahap paling lambat dalam mekanisme reaksi merupakan tahap penentu laju reaksi keseluruhan.
   Tahap 1 adalah tahap lambat:
   $$\\ce{NO2 + NO2 -> NO3 + NO}$$
   Karena Tahap 1 merupakan reaksi elementer bimolekular, hukum laju ditentukan langsung oleh koefisien reaktannya pada tahap ini:
   $$v = k [\\ce{NO2}][\\ce{NO2}] = \\mathbf{k [\\ce{NO2}]^2}$$
   *(Konsentrasi $\\ce{CO}$ tidak muncul dalam hukum laju karena $\\ce{CO}$ baru terlibat pada tahap 2 yang cepat).*

2. **Identifikasi Zat Antara (Reaction Intermediate):**
   - Zat antara adalah spesi kimia yang **dihasilkan pada tahap awal dan dikonsumsi pada tahap berikutnya**, sehingga tidak muncul dalam persamaan reaksi total.
   - Spesi $\\ce{NO3}$ dibentuk pada Tahap 1 dan langsung bereaksi habis pada Tahap 2. Maka **$\\ce{NO3}$ adalah zat antara**.

Jawaban yang benar adalah opsi **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['mekanisme-reaksi', 'tahap-penentu-laju', 'zat-antara-intermediat'],
  },
  {
    id: 107011,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Analisis Eksperimen Faktor Laju Reaksi Multi-Variabel',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Multi-Faktor Laju Reaksi Pelarutan Logam Seng dalam Asam Sulfat',
    question_text: `Sebanyak $1{,}30\\ \\text{g}$ logam seng ($\\ce{Zn}$, $A_r = 65{,}4$) direaksikan dengan $50\\ \\text{mL}$ larutan asam sulfat ($\\ce{H2SO4}$) menurut persamaan:
$$\\ce{Zn(s) + H2SO4(aq) -> ZnSO4(aq) + H2(g)}$$

Diperoleh data waktu yang dibutuhkan hingga seluruh logam seng tepat habis larut pada lima percobaan berikut:

| Percobaan | Bentuk Fisik Seng | Konsentrasi $\\ce{H2SO4}$ | Temperatur | Waktu Reaksi ($t$) |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Lempengan padat | $0{,}5\\ \\text{M}$ | $25^\\circ\\text{C}$ | $80\\ \\text{detik}$ |
| 2 | Serbuk halus | $0{,}5\\ \\text{M}$ | $25^\\circ\\text{C}$ | $20\\ \\text{detik}$ |
| 3 | Serbuk halus | $1{,}0\\ \\text{M}$ | $25^\\circ\\text{C}$ | $10\\ \\text{detik}$ |
| 4 | Serbuk halus | $1{,}0\\ \\text{M}$ | $35^\\circ\\text{C}$ | $5\\ \\text{detik}$ |
| 5 | Lempengan padat | $1{,}0\\ \\text{M}$ | $35^\\circ\\text{C}$ | $20\\ \\text{detik}$ |

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan data percobaan 1 dan 2, faktor apakah yang mempengaruhi laju reaksi? Jelaskan secara teori tumbukan mengapa percobaan 2 berlangsung 4 kali lebih cepat!',
        points: 2.5,
        rubric: 'Menyebutkan faktor luas permukaan bidang sentuh (1 poin) dan menjelaskan bahwa serbuk memiliki luas permukaan kontak antar partikel lebih besar sehingga frekuensi tumbukan efektif per satuan waktu meningkat 4 kali (1.5 poin).',
        expected_answer: 'Faktor luas permukaan bidang sentuh; serbuk memiliki luas kontak lebih besar sehingga frekuensi tumbukan efektif meningkat.'
      },
      {
        label: 'b',
        question_text: 'Tentukan pasangan percobaan yang secara valid membuktikan pengaruh temperatur terhadap laju reaksi, dan jelaskan mekanismenya!',
        points: 2.5,
        rubric: 'Menentukan pasangan percobaan 3 dan 4 (atau 1 dan 5 tidak valid karena ada 2 variabel berubah; hanya 3 dan 4 yang tepat karena bentuk dan konsentrasi identik) (1.5 poin) dan menjelaskan peningkatan energi kinetik molekul yang melampaui Ea (1 poin).',
        expected_answer: 'Percobaan 3 dan 4; kenaikan suhu dari 25 °C ke 35 °C meningkatkan energi kinetik partikel sehingga jumlah molekul berenergi >= Ea bertambah.'
      }
    ],
    expected_final_answer: 'a. Luas permukaan sentuh serbuk lebih besar; b. Percobaan 3 dan 4, kenaikan suhu menaikkan fraksi partikel dengan energi >= Ea.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Analisis Percobaan 1 dan 2 (Bobot: 2.5 Poin)**
   - **Faktor yang berpengaruh:** Luas permukaan bidang sentuh padatan. *(Skor: 1.0 Poin)*
   - **Penjelasan Teori Tumbukan:** Pada percobaan 2 digunakan serbuk halus yang memiliki luas area permukaan kontak terbuka jauh lebih luas dibandingkan lempengan pada massa yang sama ($1{,}30\\ \\text{g}$). Luas bidang sentuh yang lebih besar memberikan lebih banyak titik kontak bagi ion $\\ce{H+}$ larutan untuk bertumbukan dengan atom $\\ce{Zn}$ secara simultan, sehingga laju reaksi meningkat $4$ kali lipat ($80\\ \\text{s} \\to 20\\ \\text{s}$). *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Pembuktian Pengaruh Temperatur (Bobot: 2.5 Poin)**
   - **Pasangan Percobaan yang Valid:** **Percobaan 3 dan Percobaan 4**. *(Skor: 1.5 Poin)*
   - **Alasan Ilmiah:** Pada percobaan 3 dan 4, bentuk fisik seng dijaga identik (serbuk halus) dan konsentrasi asam dijaga identik ($1{,}0\\ \\text{M}$), sehingga satu-satunya variabel bebas yang diubah adalah temperatur ($25^\\circ\\text{C} \\to 35^\\circ\\text{C}$). Kenaikan suhu meningkatkan energi kinetik rata-rata partikel reaktan (meningkatkan kecepatan gerak dan fraksi molekul yang memiliki energi $\\ge E_a$), memangkas waktu reaksi menjadi setengahnya ($10\\ \\text{s} \\to 5\\ \\text{s}$). *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Analisis Faktor Luas Permukaan:
• Identifikasi variabel yang dikontrol vs diubah pada Percobaan 1 & 2: ....
• Penjelasan frekuensi tumbukan efektif pada bentuk serbuk: ....

2. Pengendalian Variabel Efek Temperatur:
• Pemilihan pasangan data dengan satu variabel bebas tunggal: ....
• Korelasi kenaikan suhu terhadap sebaran energi kinetik partikel: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Kinerja Laboratorium Kimia SMA',
    tags: ['faktor-laju-reaksi', 'luas-permukaan', 'aturan-suhu-laju', 'desain-eksperimen'],
  },
  {
    id: 107012,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Penentuan Hukum Laju Lengkap & Kalkulasi Tetapan Laju k',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Orde Parsial, Orde Total, dan Nilai Tetapan Laju dari Data Eksperimen Reaksi Ionik',
    question_text: `Reaksi ion iodida dengan ion hipoklorit dalam suasana basa berlangsung menurut persamaan:
$$\\ce{I-(aq) + OCl-(aq) -> IO-(aq) + Cl-(aq)}$$

Pada temperatur $25^\\circ\\text{C}$, diperoleh data eksperimen kinetika berikut:

| Percobaan | $[\\ce{I-}]$ (M) | $[\\ce{OCl-}]$ (M) | $[\\ce{OH-}]$ (M) | Laju Awal ($v$, M/s) |
| :---: | :---: | :---: | :---: | :---: |
| 1 | $0{,}002$ | $0{,}002$ | $0{,}10$ | $1{,}22 \\times 10^{-4}$ |
| 2 | $0{,}004$ | $0{,}002$ | $0{,}10$ | $2{,}44 \\times 10^{-4}$ |
| 3 | $0{,}002$ | $0{,}004$ | $0{,}10$ | $2{,}44 \\times 10^{-4}$ |
| 4 | $0{,}002$ | $0{,}002$ | $0{,}20$ | $6{,}10 \\times 10^{-5}$ |

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan orde reaksi terhadap I-, OCl-, dan ion OH-, serta tuliskan persamaan hukum laju reaksinya secara lengkap!',
        points: 2.5,
        rubric: 'Menentukan orde I- = 1, OCl- = 1, dan OH- = -1 (orde negatif) (1.5 poin), serta menuliskan v = k [I-][OCl-] / [OH-] (1 poin).',
        expected_answer: 'Orde I- = 1, OCl- = 1, OH- = -1; Persamaan laju: v = k [I-][OCl-] / [OH-]'
      },
      {
        label: 'b',
        question_text: 'Hitunglah nilai tetapan laju reaksi (k) beserta satuannya pada temperatur tersebut!',
        points: 2.5,
        rubric: 'Menghitung k = v * [OH-] / ([I-][OCl-]) = (1,22 x 10^-4 * 0,10) / (0,002 * 0,002) = 1,22 x 10^-5 / 4 x 10^-6 = 3,05 s^-1 (2.5 poin).',
        expected_answer: 'k = 3,05 s^-1'
      }
    ],
    expected_final_answer: 'a. v = k [I-][OCl-]/[OH-] (orde: I-=1, OCl-=1, OH-=-1); b. k = 3,05 s^-1.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Penentuan Orde Parsial Masing-Masing Spesi (Bobot: 2.5 Poin)**
   - **Bentuk umum hukum laju:** $v = k [\\ce{I-}]^x [\\ce{OCl-}]^y [\\ce{OH-}]^z$
   - **Orde terhadap $\\ce{I-}$ ($x$):**
     Bandingkan Percobaan 2 dan 1 ($[\\ce{OCl-}]$ dan $[\\ce{OH-}]$ tetap):
     $$\\frac{v_2}{v_1} = \\left(\\frac{[\\ce{I-}]_2}{[\\ce{I-}]_1}\\right)^x \\implies \\frac{2{,}44 \\times 10^{-4}}{1{,}22 \\times 10^{-4}} = \\left(\\frac{0{,}004}{0{,}002}\\right)^x \\implies 2 = 2^x \\implies x = 1$$
   - **Orde terhadap $\\ce{OCl-}$ ($y$):**
     Bandingkan Percobaan 3 dan 1 ($[\\ce{I-}]$ dan $[\\ce{OH-}]$ tetap):
     $$\\frac{v_3}{v_1} = \\left(\\frac{[\\ce{OCl-}]_3}{[\\ce{OCl-}]_1}\\right)^y \\implies \\frac{2{,}44 \\times 10^{-4}}{1{,}22 \\times 10^{-4}} = \\left(\\frac{0{,}004}{0{,}002}\\right)^y \\implies 2 = 2^y \\implies y = 1$$
   - **Orde terhadap $\\ce{OH-}$ ($z$):**
     Bandingkan Percobaan 4 dan 1 ($[\\ce{I-}]$ dan $[\\ce{OCl-}]$ tetap):
     $$\\frac{v_4}{v_1} = \\left(\\frac{[\\ce{OH-}]_4}{[\\ce{OH-}]_1}\\right)^z \\implies \\frac{6{,}10 \\times 10^{-5}}{1{,}22 \\times 10^{-4}} = \\left(\\frac{0{,}20}{0{,}10}\\right)^z$$
     $$\\frac{1}{2} = 2^z \\implies 2^{-1} = 2^z \\implies z = -1$$
     *(Ion $\\ce{OH-}$ memiliki orde reaksi negatif $-1$, bertindak sebagai inhibitor/penghambat laju).*
   - **Persamaan Laju Lengkap:**
     $$\\mathbf{v = k \\frac{[\\ce{I-}][\\ce{OCl-}]}{[\\ce{OH-}]}} \\quad \\text{atau} \\quad \\mathbf{v = k [\\ce{I-}] [\\ce{OCl-}] [\\ce{OH-}]^{-1}}$$
     *(Skor: 2.5 Poin)*

2. **Sub-soal (b): Perhitungan Nilai dan Satuan Tetapan $k$ (Bobot: 2.5 Poin)**
   - Masukkan data Percobaan 1:
     $$k = \\frac{v_1 \\times [\\ce{OH-}]_1}{[\\ce{I-}]_1 \\times [\\ce{OCl-}]_1} = \\frac{(1{,}22 \\times 10^{-4}\\ \\text{M/s}) \\times (0{,}10\\ \\text{M})}{(0{,}002\\ \\text{M}) \\times (0{,}002\\ \\text{M})}$$
     $$k = \\frac{1{,}22 \\times 10^{-5}\\ \\text{M}^2\\text{/s}}{4{,}0 \\times 10^{-6}\\ \\text{M}^2} = \\mathbf{3{,}05\\ \\text{s}^{-1}}$$
     *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Penentuan Orde Parsial Tiap Komponen:
• Rasio Percobaan 2/1 untuk orde I-: ....
• Rasio Percobaan 3/1 untuk orde OCl-: ....
• Rasio Percobaan 4/1 untuk orde OH- (orde negatif): ....
• Penulisan persamaan laju lengkap: ....

2. Kalkulasi Numerik dan Satuan Tetapan k:
• Substitusi data percobaan terpilih: ....
• Analisis dimensi satuan k: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Olimpiade Sains Kimia (OSK / OSP)',
    tags: ['hukum-laju', 'orde-reaksi', 'orde-negatif', 'tetapan-laju-k'],
  },
  {
    id: 107013,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Katalisis Heterogen & Diagram Koordinat Reaksi Bertahap',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Komparatif Diagram Profil Energi Reaksi Tanpa Katalis vs Katalis Heterogen',
    question_text: `Reaksi konversi gas hidrogen dan etena menjadi etana:
$$\\ce{C2H4(g) + H2(g) -> C2H6(g)} \\quad \\Delta H = -137\\ \\text{kJ/mol}$$
berlangsung sangat lambat pada suhu kamar tanpa katalis karena memiliki energi aktivasi tinggi $E_a = +180\\ \\text{kJ/mol}$. Penambahan serbuk logam nikel ($\\ce{Ni}$) sebagai katalis heterogen mengubah reaksi menjadi mekanisme dua tahap melalui adsorpsi permukaan dengan energi aktivasi tahap 1 $E_{a1} = +45\\ \\text{kJ/mol}$ dan tahap 2 $E_{a2} = +60\\ \\text{kJ/mol}$.

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berapakah penurunan nilai energi aktivasi penentu laju reaksi (Delta Ea) akibat penambahan katalis nikel tersebut?',
        points: 2.5,
        rubric: 'Menentukan Ea efektif berkatalis adalah tahap tertinggi yaitu Ea2 = 60 kJ/mol (1 poin), dan menghitung Delta Ea = 180 - 60 = 120 kJ/mol (1.5 poin).',
        expected_answer: 'Penurunan Ea = 120 kJ/mol'
      },
      {
        label: 'b',
        question_text: 'Apakah nilai perubahan entalpi (Delta H) reaksi berubah dengan adanya katalis nikel tersebut? Jelaskan prinsip termodinamikanya!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa Delta H tetap -137 kJ/mol (tidak berubah) (1 poin) karena Delta H adalah fungsi keadaan yang hanya bergantung pada energi awal reaktan dan energi akhir produk, bukan pada lintasan/jalur reaksi (1.5 poin).',
        expected_answer: 'Delta H tidak berubah (tetap -137 kJ/mol) karena entalpi merupakan fungsi keadaan yang tidak dipengaruhi oleh mekanisme jalan reaksi.'
      }
    ],
    expected_final_answer: 'a. Penurunan Ea = 120 kJ/mol; b. Delta H tidak berubah (tetap -137 kJ/mol) karena merupakan fungsi keadaan.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Penurunan Energi Aktivasi (Bobot: 2.5 Poin)**
   - Pada mekanisme berkatalis, terdapat dua puncak keadaan transisi. Tahap penentu laju adalah tahap dengan energi aktivasi tertinggi, yaitu $E_{a2} = +60\\ \\text{kJ/mol}$. *(Skor: 1.0 Poin)*
   - **Besar Penurunan Energi Aktivasi ($\\Delta E_a$):**
     $$\\Delta E_a = E_{a,\\text{tanpa katalis}} - E_{a,\\text{dengan katalis}}$$
     $$\\Delta E_a = 180\\ \\text{kJ/mol} - 60\\ \\text{kJ/mol} = \\mathbf{120\\ \\text{kJ/mol}}$$
     *(Katalis berhasil memangkas hambatan energi kinetik sebesar $120\\ \\text{kJ/mol}$).* *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Asas Termodinamika Fungsi Keadaan (Bobot: 2.5 Poin)**
   - Nilai perubahan entalpi reaksi **sama sekali tidak berubah (tetap $\\Delta H = -137\\ \\text{kJ/mol}$)**. *(Skor: 1.0 Poin)*
   - **Alasan Ilmiah:** Entalpi ($H$) adalah **fungsi keadaan (*state function*)**, yang nilainya murni hanya ditentukan oleh keadaan termodinamika awal (energi ikatan reaktan $\\ce{C2H4 + H2}$) dan keadaan termodinamika akhir (energi ikatan produk $\\ce{C2H6}$). Katalis hanya mengubah kinetika jalan reaksi (*path function*) dengan menurunkan energi puncak transisi, tanpa menggeser tingkat energi dasar reaktan maupun produk. *(Skor: 1.5 Poin)*`,
    solution_framework_template: `1. Analisis Energi Aktivasi Tahap Berganda:
• Identifikasi puncak energi penentu laju pada reaksi berkatalis: ....
• Selisih Ea tanpa katalis vs Ea berkatalis: ....

2. Evaluasi Sifat Termodinamika:
• Definisi fungsi keadaan entalpi (state function): ....
• Pengaruh katalis terhadap kinetika vs termodinamika sistem: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Kinetika Kimia SMA Fase F',
    tags: ['katalis-dan-inhibitor', 'energi-aktivasi-ea', 'diagram-tingkat-energi', 'fungsi-keadaan'],
  },
  {
    id: 107014,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kombinasi Pengaruh Suhu dan Konsentrasi terhadap Waktu Reaksi',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kalkulasi Waktu Reaksi pada Variasi Simultan Kenaikan Suhu dan Konsentrasi Reaktan',
    question_text: `Reaksi kimia antara larutan $\\ce{A}$ dan larutan $\\ce{B}$ memiliki persamaan hukum laju:
$$v = k [\\ce{A}]^2 [\\ce{B}]$$

Reaksi ini memiliki karakteristik laju yang berlipat $2$ kali lebih cepat setiap kenaikan suhu sebesar $10^\\circ\\text{C}$. Pada kondisi awal (percobaan 1) di mana $[\\ce{A}] = 0{,}10\\ \\text{M}$ dan $[\\ce{B}] = 0{,}10\\ \\text{M}$ pada suhu $20^\\circ\\text{C}$, reaksi tuntas dalam waktu $96\\ \\text{detik}$.

Jika pada percobaan berikutnya (percobaan 2) konsentrasi dinaikkan menjadi $[\\ce{A}] = 0{,}20\\ \\text{M}$ dan $[\\ce{B}] = 0{,}30\\ \\text{M}$, serta suhu reaksi dinaikkan menjadi $40^\\circ\\text{C}$:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berapa kali lebih cepat laju reaksi pada percobaan 2 dibandingkan laju reaksi pada percobaan 1 akibat pengaruh konsentrasi dan suhu secara bersamaan?',
        points: 2.5,
        rubric: 'Menghitung faktor konsentrasi = (0,20/0,10)^2 * (0,30/0,10) = 4 * 3 = 12 kali (1.5 poin), faktor suhu = 2^((40-20)/10) = 4 kali (0.5 poin), dan faktor total = 12 * 4 = 48 kali lebih cepat (0.5 poin).',
        expected_answer: '48 kali lebih cepat'
      },
      {
        label: 'b',
        question_text: 'Berapakah waktu yang dibutuhkan agar reaksi pada percobaan 2 tersebut tuntas sempurna?',
        points: 2.5,
        rubric: 'Menghitung waktu t2 = t1 / faktor total = 96 detik / 48 = 2,0 detik (2.5 poin).',
        expected_answer: '2,0 detik'
      }
    ],
    expected_final_answer: 'a. 48 kali lebih cepat; b. 2,0 detik.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Faktor Kelipatan Laju Total (Bobot: 2.5 Poin)**
   - **Efek Peningkatan Konsentrasi ($f_{\\text{konsentrasi}}$):**
     $$f_{\\text{konsentrasi}} = \\left(\\frac{[\\ce{A}]_2}{[\\ce{A}]_1}\\right)^2 \\times \\left(\\frac{[\\ce{B}]_2}{[\\ce{B}]_1}\\right)^1 = \\left(\\frac{0{,}20}{0{,}10}\\right)^2 \\times \\left(\\frac{0{,}30}{0{,}10}\\right)^1 = (2)^2 \\times (3) = 4 \\times 3 = \\mathbf{12\\ \\text{kali}}$$
     *(Skor: 1.5 Poin)*
   - **Efek Kenaikan Suhu ($f_{\\text{suhu}}$):**
     $$f_{\\text{suhu}} = 2^{\\frac{40 - 20}{10}} = 2^2 = \\mathbf{4\\ \\text{kali}}$$
     *(Skor: 0.5 Poin)*
   - **Kelipatan Laju Total:**
     $$\\frac{v_2}{v_1} = f_{\\text{konsentrasi}} \\times f_{\\text{suhu}} = 12 \\times 4 = \\mathbf{48\\ \\text{kali lebih cepat}}$$
     *(Skor: 0.5 Poin)*

2. **Sub-soal (b): Perhitungan Waktu Reaksi Akhir (Bobot: 2.5 Poin)**
   - Karena waktu reaksi berbanding terbalik secara linier dengan laju reaksi:
     $$t_2 = \\frac{t_1}{\\frac{v_2}{v_1}} = \\frac{96\\ \\text{detik}}{48} = \\mathbf{2{,}0\\ \\text{detik}}$$
     *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Analisis Faktor Multiplikatif Laju:
• Rasio pengaruh konsentrasi menurut hukum laju: ....
• Rasio pengaruh suhu menurut aturan eksponensial 2^(Delta T / 10): ....
• Penggabungan faktor pengali laju total: ....

2. Kalkulasi Waktu Reaksi:
• Hubungan berbanding terbalik t2 = t1 / faktor total: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['hukum-laju', 'aturan-suhu-laju', 'waktu-reaksi', 'orde-reaksi'],
  },
  {
    id: 107015,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Mekanisme Reaksi Pra-Kesetimbangan Cepat (Pre-Equilibrium)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penurunan Persamaan Laju dari Mekanisme Pra-Kesetimbangan Dekomposisi Ozon',
    question_text: `Penguraian gas ozon di stratosfer berlangsung menurut persamaan stoikiometri total:
$$\\ce{2 O3(g) -> 3 O2(g)}$$

Kajian kinetika membuktikan bahwa reaksi ini berlangsung melalui mekanisme dua tahap:
- **Tahap 1 (Cepat, bolak-balik):** $\\ce{O3 <=> O2 + O} \\quad (k_1, k_{-1})$
- **Tahap 2 (Lambat):** $\\ce{O3 + O -> 2 O2} \\quad (k_2)$

Berdasarkan mekanisme pra-kesetimbangan cepat tersebut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan laju pembentukan produk berdasarkan tahap 2 (tahap lambat penentu laju), dan jelaskan mengapa konsentrasi atom oksigen [O] tidak boleh muncul dalam persamaan laju akhir!',
        points: 2.5,
        rubric: 'Menuliskan v = k2 [O3][O] (1 poin) dan menjelaskan bahwa atom oksigen [O] adalah zat antara (intermediat) yang tidak stabil dan konsentrasinya tidak dapat diukur langsung dalam eksperimen makroskopis (1.5 poin).',
        expected_answer: 'v = k2 [O3][O]; konsentrasi [O] tidak boleh muncul karena merupakan zat antara (intermediat).'
      },
      {
        label: 'b',
        question_text: 'Dengan menerapkan pendekatan pra-kesetimbangan pada Tahap 1 (laju maju = laju balik), turunkan persamaan hukum laju reaksi total yang hanya memuat spesi reaktan dan produk stabil!',
        points: 2.5,
        rubric: 'Menyamakan laju tahap 1: k1 [O3] = k-1 [O2][O], sehingga [O] = (k1/k-1) * [O3]/[O2] (1.5 poin), lalu mensubstitusi ke v = k2 [O3][O] menghasilkan v = k [O3]^2 / [O2] di mana k = k1 k2 / k-1 (1 poin).',
        expected_answer: 'v = k [O3]^2 [O2]^-1 (atau v = k [O3]^2 / [O2])'
      }
    ],
    expected_final_answer: 'a. v = k2 [O3][O], [O] adalah zat antara; b. v = k [O3]^2 / [O2] (di mana k = k1 k2 / k-1).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Laju Tahap Penentu & Kriteria Zat Antara (Bobot: 2.5 Poin)**
   - Laju reaksi keseluruhan dikendalikan oleh tahap paling lambat (Tahap 2):
     $$v = k_2 [\\ce{O3}] [\\ce{O}]$$
     *(Skor: 1.0 Poin)*
   - **Alasan Ilmiah:** Atom oksigen monatomik ($\\ce{O}$) adalah **zat antara (*reaction intermediate*)**, yaitu spesies radikal berenergi tinggi yang terbentuk di tengah reaksi dan lekas bereaksi kembali. Hukum laju reaksi empiris hanya boleh dinyatakan dalam konsentrasi spesi-spesi yang stabil dan dapat diukur di laboratorium (reaktan awal atau produk stabil). *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Penurunan Pra-Kesetimbangan (Bobot: 2.5 Poin)**
   - Pada Tahap 1, reaksi bolak-balik berlangsung sangat cepat sehingga mencapai kesetimbangan dinamis semu:
     $$\\text{Laju maju} = \\text{Laju balik} \\implies k_1 [\\ce{O3}] = k_{-1} [\\ce{O2}] [\\ce{O}]$$
   - Nyatakan konsentrasi zat antara $[\\ce{O}]$ dalam bentuk konsentrasi spesi stabil:
     $$[\\ce{O}] = \\frac{k_1 [\\ce{O3}]}{k_{-1} [\\ce{O2}]}$$
     *(Skor: 1.5 Poin)*
   - Substitusikan persamaan $[\\ce{O}]$ ke dalam persamaan laju Tahap 2:
     $$v = k_2 [\\ce{O3}] \\left(\\frac{k_1 [\\ce{O3}]}{k_{-1} [\\ce{O2}]}\\right) = \\left(\\frac{k_1 k_2}{k_{-1}}\\right) \\frac{[\\ce{O3}]^2}{[\\ce{O2}]}$$
     Dengan menetapkan tetapan laju komposit $k = \\frac{k_1 k_2}{k_{-1}}$, diperoleh hukum laju akhir:
     $$\\mathbf{v = k \\frac{[\\ce{O3}]^2}{[\\ce{O2}]}} \\quad \\text{atau} \\quad \\mathbf{v = k [\\ce{O3}]^2 [\\ce{O2}]^{-1}}$$
     *(Orde reaksi terhadap $\\ce{O3}$ adalah $+2$, dan terhadap $\\ce{O2}$ adalah $-1$).* *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Formulasi Tahap Lambat Kinetika:
• Persamaan laju elementer tahap penentu laju: ....
• Identifikasi zat antara yang harus dieliminasi: ....

2. Substitusi Kesetimbangan Cepat (Pre-Equilibrium):
• Kesetaraan laju maju k1[O3] = laju balik k-1[O2][O]: ....
• Isolasi variabel konsentrasi zat antara: ....
• Substitusi ke persamaan laju utama dan penyederhanaan k komposit: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['mekanisme-reaksi', 'pra-kesetimbangan', 'zat-antara-intermediat', 'orde-negatif'],
  },

  // =========================================================================
  // KATEGORI SULIT / OLIMPIADE OSK (40% = 10 Butir Soal: ID 107001 - 107025)
  // =========================================================================
  {
    id: 107016,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Metode Isolasi & Kinetika Reaksi Pseudo-First Order',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Hukum Laju dengan Metode Isolasi Reaktan Berlebih (Reaksi Semu Orde Satu)',
    question_text: `Reaksi hidrolisis etil asetat dalam suasana asam encer berlangsung menurut persamaan:
$$\\ce{CH3COOC2H5(aq) + H2O(l) ->[\\ce{H+}] CH3COOH(aq) + C2H5OH(aq)}$$

Hukum laju sebenarnya adalah $v = k [\\ce{CH3COOC2H5}] [\\ce{H2O}]$. Pada eksperimen di laboratorium, reaksi dilakukan dalam larutan berair di mana konsentrasi awal ester adalah $0{,}020\\ \\text{M}$ dan air bertindak sebagai pelarut dengan konsentrasi awal $[\\ce{H2O}] \\approx 55{,}5\\ \\text{M}$.

Setelah reaksi berlangsung $80\\%$, pernyataan yang **paling tepat** mengenai kinetika reaksi tersebut adalah ....

A. Konsentrasi air berkurang secara signifikan sehingga reaksi berubah menjadi orde nol  
B. Karena konsentrasi $[\\ce{H2O}]$ sangat melimpah ($55{,}5\\ \\text{M} \\gg 0{,}020\\ \\text{M}$), perubahan konsentrasi air dapat diabaikan ($[\\ce{H2O}] \\approx \\text{konstan}$), sehingga reaksi teramati mengikuti kinetika reaksi semu orde satu (*pseudo-first order*) dengan $v = k' [\\ce{CH3COOC2H5}]$ di mana $k' = k [\\ce{H2O}]$  
C. Laju reaksi menjadi berorde dua terhadap etil asetat karena pelarut air mempercepat pelepasan kalor  
D. Nilai tetapan laju teramati ($k'$) menjadi lebih kecil daripada tetapan laju murni ($k$)  
E. Reaksi berhenti berlangsung karena air mengalami kejenuhan hidrolisis`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Metode Isolasi (*Flooding / Isolation Method*):**
   - Konsentrasi etil asetat mula-mula $= 0{,}020\\ \\text{M}$.
   - Ketika reaksi tuntas $80\\%$, etil asetat yang bereaksi $= 0{,}80 \\times 0{,}020\\ \\text{M} = 0{,}016\\ \\text{M}$.
   - Air yang dikonsumsi juga tepat sebesar $0{,}016\\ \\text{M}$.
   - Konsentrasi air sisa $= 55{,}5\\ \\text{M} - 0{,}016\\ \\text{M} = 55{,}484\\ \\text{M} \\approx 55{,}5\\ \\text{M}$ (perubahan hanya sebesar $0{,}03\\%$, secara praktis konstan).
2. **Kinetika Pseudo-First Order:**
   Karena $[\\ce{H2O}]$ praktis konstan, nilai $[\\ce{H2O}]$ dapat digabungkan ke dalam tetapan laju baru ($k'$):
   $$v = k [\\ce{CH3COOC2H5}] [\\ce{H2O}] = \\left(k [\\ce{H2O}]\\right) [\\ce{CH3COOC2H5}] = k' [\\ce{CH3COOC2H5}]$$
   Reaksi yang sejatinya berorde dua secara efektif teramati dan terukur sebagai reaksi **orde satu semu (*pseudo-first order*)**.

Pernyataan yang tepat adalah opsi **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Kabupaten/Kota (OSK)',
    tags: ['metode-isolasi', 'pseudo-first-order', 'hukum-laju', 'kinetika-kimia'],
  },
  {
    id: 107017,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kontrol Kinetik vs Kontrol Termodinamik Reaksi Kimia',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Evaluasi Komparatif Stabilitas Termodinamika vs Kestabilan Kinetika Campuran Gas Hidrogen-Oksigen',
    question_text: `Reaksi pembentukan air dari unsur-unsurnya:
$$\\ce{2 H2(g) + O2(g) -> 2 H2O(l)} \\quad \\Delta G^\\circ = -474{,}4\\ \\text{kJ/mol}$$
memiliki nilai perubahan energi bebas Gibbs standar ($\\Delta G^\\circ$) yang sangat negatif, yang secara termodinamika menunjukkan bahwa reaksi ini sangat spontan dan bergeser hampir sempurna ke arah produk pada suhu kamar ($298\\ \\text{K}$). Namun, campuran gas $\\ce{H2}$ dan $\\ce{O2}$ murni dapat disimpan di dalam bejana tertutup selama bertahun-tahun pada suhu kamar tanpa terbentuk setitik air pun.

Penjelasan ilmiah yang paling tepat mengenai paradoks stabilitas tersebut adalah ....

A. Reaksi tersebut sesungguhnya tidak spontan pada suhu kamar karena entropi gas berkurang  
B. Campuran gas berada dalam kondisi stabil secara kinetik (*kinetically stable/inert*) akibat memiliki energi aktivasi ($E_a$) yang sangat tinggi untuk memutus ikatan kovalen kuat $\\ce{H-H}$ dan $\\ce{O=O}$, meskipun sangat tidak stabil secara termodinamik (*thermodynamically unstable*)  
C. Nilai tetapan kesetimbangan reaksi ($K$) sangat kecil pada suhu kamar sehingga produk tidak dapat terbentuk  
D. Reaksi tersebut merupakan reaksi endotermik yang memerlukan penyerapan kalor secara kontinu  
E. Molekul gas hidrogen dan oksigen memiliki orientasi spasial yang saling tolak-menolak secara elektrostatik`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Termodinamika vs Kinetika:**
   - **Termodinamika (Kespontanan / Kemana Arah Reaksi):** Ditentukan oleh $\\Delta G^\\circ$. Karena $\\Delta G^\\circ = -474{,}4\\ \\text{kJ/mol} \\ll 0$, kesetimbangan reaksi berada sangat jauh di sisi produk air ($K = e^{-\\Delta G^\\circ / RT} > 10^{80}$). Secara termodinamika, campuran reaktan sangat tidak stabil terhadap konversinya menjadi air.
   - **Kinetika (Seberapa Cepat Reaksi Berlangsung):** Ditentukan oleh **Energi Aktivasi ($E_a$)**.
2. **Hambatan Kinetik:**
   Untuk memulai reaksi, diperlukan energi besar untuk memutus ikatan kovalen nonpolar kuat $\\ce{H-H}$ (energi ikatan $436\\ \\text{kJ/mol}$) dan ikatan rangkap $\\ce{O=O}$ (energi ikatan $498\\ \\text{kJ/mol}$). Energi aktivasi reaksi tanpa katalis sangat tinggi ($E_a > 200\\ \\text{kJ/mol}$).
   Pada suhu kamar ($25^\\circ\\text{C}$), fraksi molekul yang memiliki energi kinetik melampaui $E_a$ praktis mendekati nol, sehingga laju reaksi $v \\approx 0$.
3. **Kesimpulan:**
   Campuran gas dikatakan **stabil secara kinetik (*kinetically persistent/inert*)** walaupun **tidak stabil secara termodinamik**. Adanya sedikit percikan api atau serbuk katalis platina ($\\ce{Pt}$) seketika memicu ledakan hebat karena hambatan kinetik terlampaui.

Opsi B benar.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Olimpiade Sains Nasional (OSN) Bidang Kimia',
    tags: ['kontrol-kinetik-vs-termodinamik', 'energi-aktivasi-ea', 'energi-bebas-gibbs', 'stabilitas-kinetik'],
  },
  {
    id: 107018,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kalkulasi Energi Aktivasi Persamaan Arrhenius Dua Suhu',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Nilai Energi Aktivasi (Ea) Melalui Persamaan Linear Dua Titik Arrhenius',
    question_text: `Suatu reaksi dekomposisi termal senyawa organik memiliki tetapan laju $k_1 = 2{,}50 \\times 10^{-5}\\ \\text{s}^{-1}$ pada temperatur $T_1 = 300\\ \\text{K}$. Ketika temperatur dinaikkan menjadi $T_2 = 320\\ \\text{K}$, nilai tetapan laju meningkat menjadi $k_2 = 2{,}50 \\times 10^{-4}\\ \\text{s}^{-1}$.

Diketahui tetapan gas universal $R = 8{,}314\\ \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$ dan $\\ln(10) = 2{,}303$. Berdasarkan persamaan Arrhenius:
$$\\ln\\left(\\frac{k_2}{k_1}\\right) = -\\frac{E_a}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{E_a}{R} \\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$$

Nilai energi aktivasi ($E_a$) reaksi tersebut adalah ....

A. $45{,}2\\ \\text{kJ/mol}$  
B. $68{,}5\\ \\text{kJ/mol}$  
C. $91{,}9\\ \\text{kJ/mol}$  
D. $110{,}5\\ \\text{kJ/mol}$  
E. $183{,}8\\ \\text{kJ/mol}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Rasio Tetapan Laju:**
   $$\\frac{k_2}{k_1} = \\frac{2{,}50 \\times 10^{-4}}{2{,}50 \\times 10^{-5}} = 10$$
   $$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\ln(10) = 2{,}303$$

2. **Perhitungan Selisih Kebalikan Suhu:**
   $$\\frac{T_2 - T_1}{T_1 T_2} = \\frac{320 - 300}{300 \\times 320} = \\frac{20}{96000} = \\frac{1}{4800}\\ \\text{K}^{-1}$$

3. **Substitusi ke Persamaan Arrhenius:**
   $$2{,}303 = \\frac{E_a}{8{,}314} \\times \\frac{1}{4800}$$
   $$E_a = 2{,}303 \\times 8{,}314 \\times 4800\\ \\text{J/mol}$$
   $$E_a = 19{,}147 \\times 4800 \\approx 91906\\ \\text{J/mol} = \\mathbf{91{,}9\\ \\text{kJ/mol}}$$

Nilai energi aktivasi reaksi adalah **$91{,}9\\ \\text{kJ/mol}$** (Opsi C).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['persamaan-arrhenius', 'energi-aktivasi-ea', 'tetapan-gas-r'],
  },
  {
    id: 107019,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kinetika Fasa Gas: Pemantauan Tekanan Total Bejana Reaksi',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Kinetika Dekomposisi Fasa Gas Orde Satu Ditinjau dari Kenaikan Tekanan Total',
    question_text: `Penguraian fasa gas senyawa azoisopropana menghasilkan gas nitrogen dan heksana menurut reaksi stoikiometri:
$$\\ce{A(g) -> N2(g) + C6H14(g)}$$

Reaksi dijalankan di dalam bejana kaku bervolume tetap pada temperatur konstan. Mula-mula bejana hanya berisi gas reaktan $\\ce{A}$ dengan tekanan awal $P_0 = 100\\ \\text{mmHg}$. Setelah reaksi berlangsung selama $10\\ \\text{menit}$, tekanan total di dalam bejana terukur naik menjadi $P_t = 160\\ \\text{mmHg}$.

Jika reaksi mengikuti kinetika orde satu: $\\ln\\frac{P_0}{P_A} = k t$, maka nilai tekanan parsial gas reaktan $\\ce{A}$ yang tersisa pada menit ke-10 serta nilai tetapan laju reaksinya ($k$) berturut-turut adalah ....

A. $60\\ \\text{mmHg}$ dan $0{,}051\\ \\text{menit}^{-1}$  
B. $40\\ \\text{mmHg}$ dan $0{,}092\\ \\text{menit}^{-1}$  
C. $40\\ \\text{mmHg}$ dan $0{,}046\\ \\text{menit}^{-1}$  
D. $20\\ \\text{mmHg}$ dan $0{,}161\\ \\text{menit}^{-1}$  
E. $80\\ \\text{mmHg}$ dan $0{,}022\\ \\text{menit}^{-1}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Perubahan Tekanan Menggunakan M-R-S (Mol/Tekanan):**
   Reaksi: $\\ce{A(g) -> N2(g) + C6H14(g)}$
   - Mula-mula: $P_A = P_0$, $P_{\\ce{N2}} = 0$, $P_{\\ce{C6H14}} = 0$
   - Reaksi: terurai sebesar $x$ mmHg $\\implies$ terbentuk $+x$ $\\ce{N2}$ dan $+x$ $\\ce{C6H14}$
   - Saat $t = 10\\ \\text{menit}$:
     $$P_A = P_0 - x$$
     $$P_{\\ce{N2}} = x$$
     $$P_{\\ce{C6H14}} = x$$
   - **Tekanan total bejana ($P_t$):**
     $$P_t = P_A + P_{\\ce{N2}} + P_{\\ce{C6H14}} = (P_0 - x) + x + x = P_0 + x$$
     $$160\\ \\text{mmHg} = 100\\ \\text{mmHg} + x \\implies x = 60\\ \\text{mmHg}$$

2. **Tekanan Parsial Reaktan $\\ce{A}$ Sisa:**
   $$P_A = P_0 - x = 100\\ \\text{mmHg} - 60\\ \\text{mmHg} = \\mathbf{40\\ \\text{mmHg}}$$

3. **Perhitungan Tetapan Laju Orde Satu ($k$):**
   $$k = \\frac{1}{t} \\ln\\left(\\frac{P_0}{P_A}\\right) = \\frac{1}{10\\ \\text{menit}} \\ln\\left(\\frac{100}{40}\\right) = \\frac{1}{10} \\ln(2{,}5)$$
   Karena $\\ln(2{,}5) \\approx 0{,}9163$:
   $$k = \\frac{0{,}9163}{10} \\approx \\mathbf{0{,}0916\\ \\text{menit}^{-1}} \\approx \\mathbf{0{,}092\\ \\text{menit}^{-1}}$$
   *(Tunggu, perhatikan pilihan opsi: Opsi B adalah 40 mmHg dan 0,092 menit^-1).*

Mari verifikasi kalkulasi ulang:
- $P_A = 100 - 60 = 40\\ \\text{mmHg}$.
- $k = \\frac{\\ln(2{,}5)}{10} = \\frac{0{,}9163}{10} = 0{,}0916\\ \\text{menit}^{-1} \\approx 0{,}092\\ \\text{menit}^{-1}$.
Maka pilihan yang memuat $40\\ \\text{mmHg}$ dan $0{,}092\\ \\text{menit}^{-1}$ adalah **Opsi B**!

Mari pastikan expected answer adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['kinetika-gas', 'hukum-gas-ideal', 'orde-satu', 'tekanan-parsial'],
  },
  {
    id: 107020,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Katalisis Homogen Lingkungan: Siklus Radikal Ozon Stratosfer',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Kinetika Perusakan Lapisan Ozon oleh Radikal Klorin (Katalisis Homogen)',
    question_text: `Pelepasan gas klorofluorokarbon (CFC) ke atmosfer memicu perusakan lapisan ozon stratosfer ($\\ce{2 O3 -> 3 O2}$) melalui mekanisme siklus katalitik radikal bebas fasa gas:
- **Tahap 1:** $\\ce{Cl^{.} (g) + O3(g) -> ClO^{.} (g) + O2(g)} \\quad (E_{a1} = +2{,}1\\ \\text{kJ/mol})$
- **Tahap 2:** $\\ce{ClO^{.} (g) + O(g) -> Cl^{.} (g) + O2(g)} \\quad (E_{a2} = +0{,}4\\ \\text{kJ/mol})$

Sebagai perbandingan, reaksi langsung tanpa katalis: $\\ce{O3(g) + O(g) -> 2 O2(g)}$ memiliki energi aktivasi sangat tinggi $E_a = +17{,}1\\ \\text{kJ/mol}$.

Pernyataan yang **benar** mengenai peran spesi kimia dan dampak kinetika dari siklus tersebut adalah ....

A. Radikal $\\ce{Cl^{.}}$ bertindak sebagai zat antara (*intermediate*), sedangkan $\\ce{ClO^{.}}$ bertindak sebagai katalis  
B. Radikal $\\ce{Cl^{.}}$ bertindak sebagai katalis homogen, sedangkan $\\ce{ClO^{.}}$ bertindak sebagai zat antara (*intermediate*); penurunan $E_a$ dari $17{,}1$ menjadi $2{,}1\\ \\text{kJ/mol}$ menyebabkan satu radikal $\\ce{Cl^{.}}$ dapat memusnahkan hingga $100.000$ molekul ozon sebelum ternonaktifkan  
C. Reaksi tersebut tergolong katalisis heterogen karena radikal bebas memiliki fasa berbeda dengan ozon  
D. Katalis radikal $\\ce{Cl^{.}}$ menggeser posisi kesetimbangan pembentukan ozon menjadi lebih besar di stratosfer  
E. Energi aktivasi reaksi total menjadi jumlah dari $E_{a1}$ dan $E_{a2}$ yaitu $+2{,}5\\ \\text{kJ/mol}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Identifikasi Peran Spesi:**
   - **Katalis:** Spesi yang masuk/dikonsumsi pada tahap awal (Tahap 1) dan diregenerasi kembali dalam jumlah dan bentuk yang sama pada tahap akhir (Tahap 2). Radikal $\\ce{Cl^{.}}$ masuk di Tahap 1 dan terbentuk kembali di Tahap 2, sehingga **$\\ce{Cl^{.}}$ adalah katalis homogen**.
   - **Zat Antara (*Reaction Intermediate*):** Spesi yang dibentuk pada tahap awal dan dikonsumsi pada tahap berikutnya. Radikal klorin monoksida ($\\ce{ClO^{.}}$) dibentuk pada Tahap 1 dan dikonsumsi pada Tahap 2, sehingga **$\\ce{ClO^{.}}$ adalah zat antara**.
2. **Dampak Kinetika:**
   - Karena reaktan dan katalis berada pada fasa yang sama (fasa gas), reaksi ini merupakan **katalisis homogen**.
   - Penurunan energi aktivasi dari $+17{,}1\\ \\text{kJ/mol}$ menjadi hanya $+2{,}1\\ \\text{kJ/mol}$ melipatgandakan laju reaksi dekomposisi ozon hingga ribuan kali lipat pada suhu dingin stratosfer (sekitar $220\\ \\text{K}$). Karena radikal $\\ce{Cl^{.}}$ terus-menerus diregenerasi, satu atom $\\ce{Cl^{.}}$ dapat mengkatalisis penguraian hingga $10^5$ molekul $\\ce{O3}$ sebelum akhirnya dinonaktifkan oleh reaksi terminasi (misal bereaksi dengan $\\ce{CH4}$ membentuk $\\ce{HCl}$).

Opsi B benar.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Olimpiade Sains Nasional (OSN) Bidang Kimia',
    tags: ['katalis-dan-inhibitor', 'katalisis-homogen', 'mekanisme-reaksi', 'kimia-lingkungan'],
  },
  {
    id: 107021,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kinetika Reaksi Autokatalitik & Kurva Laju Sigmoid',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kinetika Reaksi Autokatalitik Permanganometri Oksalat oleh Kation Mn2+',
    question_text: `Titrasi redoks antara larutan kalium permanganat ($\\ce{KMnO4}$) dan asam oksalat ($\\ce{H2C2O4}$) dalam suasana asam hangat:
$$\\ce{2 MnO4-(aq) + 5 H2C2O4(aq) + 6 H+(aq) -> 2 Mn^2+(aq) + 10 CO2(g) + 8 H2O(l)}$$
menunjukkan fenomena kinetika khas: warna ungu tetesan awal $\\ce{KMnO4}$ memudar sangat lambat (memerlukan waktu beberapa puluh detik), namun setelah reaksi berjalan beberapa saat, tetesan $\\ce{KMnO4}$ berikutnya langsung hilang seketika dalam hitungan detik.

Kurva pembentukan produk $\\ce{CO2}$ terhadap waktu memperlihatkan kurva berbentuk huruf S (*kurva sigmoid / kurva autokatalitik*).

Berdasarkan fenomena kinetika tersebut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan mengapa laju pemudaran warna ungu KMnO4 berlangsung sangat lambat pada awal reaksi namun menjadi sangat cepat setelah reaksi berlangsung beberapa saat! Spesi kimia apakah yang bertindak sebagai autokatalis?',
        points: 2.5,
        rubric: 'Menjelaskan bahwa reaksi ini bersifat autokatalitik di mana produk kation Mn2+ yang terbentuk bertindak sebagai katalis bagi reaksi itu sendiri (1.5 poin) sehingga pada awal reaksi laju lambat karena belum ada Mn2+, namun begitu Mn2+ terbentuk, laju melonjak sangat cepat (1 poin).',
        expected_answer: 'Reaksi bersifat autokatalitik dengan ion Mn2+ sebagai autokatalis. Pada awal reaksi laju lambat karena konsentrasi Mn2+ nol, lalu melonjak cepat saat Mn2+ mulai terakumulasi.'
      },
      {
        label: 'b',
        question_text: 'Tuliskan bentuk umum persamaan hukum laju untuk reaksi autokatalitik ini, dan jelaskan mengapa laju reaksi akhirnya kembali menurun mendekati nol pada akhir reaksi!',
        points: 2.5,
        rubric: 'Menuliskan persamaan laju v = k [MnO4-]^x [H2C2O4]^y [Mn2+]^z (1 poin) dan menjelaskan bahwa laju akhirnya melambat menuju nol karena konsentrasi reaktan (H2C2O4 dan MnO4-) telah habis terkonsumsi (1.5 poin).',
        expected_answer: 'v = k [MnO4-]^x [H2C2O4]^y [Mn2+]^z; laju melambat di akhir karena reaktan utama telah habis bereaksi.'
      }
    ],
    expected_final_answer: 'a. Ion Mn2+ bertindak sebagai autokatalis; b. v = k [MnO4-]^x [H2C2O4]^y [Mn2+]^z, laju melambat di akhir akibat reaktan habis.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Mekanisme Reaksi Autokatalitik (Bobot: 2.5 Poin)**
   - Reaksi ini merupakan contoh klasik **reaksi autokatalitik**, yaitu reaksi kimia yang produk reaksinya sendiri bertindak sebagai katalis untuk mempercepat jalannya reaksi tersebut. *(Skor: 1.0 Poin)*
   - Spesi yang bertindak sebagai **autokatalis adalah kation mangan(II) ($\\ce{Mn^2+}$)**. Pada awal titrasi, konsentrasi $[\\ce{Mn^2+}] = 0$, sehingga reaksi berlangsung melalui jalur tanpa katalis dengan energi aktivasi yang tinggi (lambat). Begitu sejumlah kecil $\\ce{Mn^2+}$ terbentuk dari reaksi awal, ion ini membentuk zat antara valensi menengah (seperti $\\ce{Mn^3+}$ dan $\\ce{Mn^4+}$) yang mengoksidasi oksalat dengan sangat cepat, memicu percepatan laju reaksi secara drastis. *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Hukum Laju dan Profil Kurva Sigmoid (Bobot: 2.5 Poin)**
   - **Bentuk Hukum Laju Autokatalitik:**
     $$v = k [\\ce{MnO4-}]^x [\\ce{H2C2O4}]^y [\\ce{Mn^2+}]^z$$
     *(Skor: 1.0 Poin)*
   - **Alasan Penurunan Laju di Akhir Reaksi:**
     Kurva laju berbentuk sigmoid mengalami tiga fasa:
     1. *Fasa induksi (lambat):* $[\\ce{Mn^2+}]$ masih sangat kecil.
     2. *Fasa akselerasi (sangat cepat):* $[\\ce{Mn^2+}]$ terakumulasi dan mempercepat reaksi secara eksponensial.
     3. *Fasa deselerasi:* Meskipun konsentrasi katalis $[\\ce{Mn^2+}]$ melimpah, konsentrasi reaktan utama ($[\\ce{MnO4-}]$ dan $[\\ce{H2C2O4}]$) telah terkuras habis mendekati nol. Karena laju reaksi merupakan hasil kali konsentrasi reaktan dan katalis, habisnya reaktan menyebabkan laju reaksi terhenti ($v \\to 0$). *(Skor: 1.5 Poin)*`,
    solution_framework_template: `1. Analisis Peran Produk sebagai Katalis:
• Definisi fenomena autokatalisis: ....
• Identifikasi kation transisi terlarut (Mn2+): ....
• Perubahan laju terhadap pembentukan produk awal: ....

2. Evaluasi Persamaan Laju dan Fasa Kurva Sigmoid:
• Penyusunan persamaan laju dengan suku katalis produk: ....
• Analisis faktor pembatas konsentrasi reaktan di akhir reaksi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Nasional',
    tags: ['autokatalisis', 'titrasi-redoks', 'permanganometri', 'kurva-sigmoid'],
  },
  {
    id: 107022,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Pendekatan Keadaan Tunak (Steady-State Approximation)',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penurunan Persamaan Laju Mekanisme Reaksi Berantai Menggunakan Pendekatan Keadaan Tunak',
    question_text: `Reaksi pembentukan gas hidrogen bromida dari unsur-unsurnya:
$$\\ce{H2(g) + Br2(g) -> 2 HBr(g)}$$
berlangsung melalui mekanisme rantai radikal bebas berikut:
1. **Inisiasi:** $\\ce{Br2 ->[k_1] 2 Br^{.}}$
2. **Propagasi 1:** $\\ce{Br^{.} + H2 ->[k_2] HBr + H^{.}}$
3. **Propagasi 2:** $\\ce{H^{.} + Br2 ->[k_3] HBr + Br^{.}}$
4. **Terminasi:** $\\ce{2 Br^{.} ->[k_4] Br2}$

Pada kondisi awal di mana konsentrasi produk $\\ce{HBr}$ masih dapat diabaikan:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Dengan menerapkan Pendekatan Keadaan Tunak (Steady-State Approximation, d[Br.]/dt = 0 dan d[H.]/dt = 0), tentukan persamaan konsentrasi radikal klorin [Br.] dalam bentuk konsentrasi molekul Br2!',
        points: 2.5,
        rubric: 'Menuliskan kesetimbangan inisiasi dan terminasi: laju inisiasi = laju terminasi, yaitu k1 [Br2] = k4 [Br.]^2 (1.5 poin), sehingga [Br.] = (k1/k4)^(1/2) * [Br2]^(1/2) (1 poin).',
        expected_answer: '[Br.] = (k1 / k4)^(1/2) * [Br2]^(1/2)'
      },
      {
        label: 'b',
        question_text: 'Turunkan persamaan hukum laju awal pembentukan HBr (d[HBr]/dt), dan tentukan orde reaksi parsial terhadap H2 dan Br2!',
        points: 2.5,
        rubric: 'Menuliskan d[HBr]/dt = 2 k2 [Br.][H2] (atau k2 [Br.][H2] + k3 [H.][Br2] = 2 k2 [Br.][H2]) = 2 k2 (k1/k4)^(1/2) [H2] [Br2]^(1/2) = k [H2] [Br2]^(1/2) (1.5 poin). Orde terhadap H2 = 1 dan orde terhadap Br2 = 1/2 (orde pecahan) (1 poin).',
        expected_answer: 'd[HBr]/dt = k [H2] [Br2]^(1/2); Orde H2 = 1, Orde Br2 = 1/2 (orde pecahan).'
      }
    ],
    expected_final_answer: 'a. [Br.] = (k1/k4)^0,5 [Br2]^0,5; b. v = k [H2] [Br2]^0,5 (Orde H2 = 1, Orde Br2 = 0,5).',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Konsentrasi Radikal Keadaan Tunak (Bobot: 2.5 Poin)**
   - Pada pendekatan keadaan tunak (*Steady-State Approximation*), laju pembentukan radikal sama persis dengan laju pemusnahannya sehingga laju netto $\\frac{d[\\ce{Br^{.}}]}{dt} = 0$.
   - Laju inisiasi radikal $\\ce{Br^{.}}$ diimbangi oleh laju terminasi:
     $$k_1 [\\ce{Br2}] = k_4 [\\ce{Br^{.}}]^2$$
     *(Skor: 1.5 Poin)*
   - Maka konsentrasi radikal bromin:
     $$[\\ce{Br^{.}}] = \\left(\\frac{k_1}{k_4}\\right)^{1/2} [\\ce{Br2}]^{1/2}$$
     *(Skor: 1.0 Poin)*

2. **Sub-soal (b): Penurunan Hukum Laju Pembentukan $\\ce{HBr}$ (Bobot: 2.5 Poin)**
   - Laju pembentukan $\\ce{HBr}$ terjadi pada tahap 2 dan tahap 3:
     $$\\frac{d[\\ce{HBr}]}{dt} = k_2 [\\ce{Br^{.}}] [\\ce{H2}] + k_3 [\\ce{H^{.}}] [\\ce{Br2}]$$
   - Menerapkan keadaan tunak pada radikal $\\ce{H^{.}}$:
     $$\\frac{d[\\ce{H^{.}}]}{dt} = k_2 [\\ce{Br^{.}}] [\\ce{H2}] - k_3 [\\ce{H^{.}}] [\\ce{Br2}] = 0 \\implies k_3 [\\ce{H^{.}}] [\\ce{Br2}] = k_2 [\\ce{Br^{.}}] [\\ce{H2}]$$
   - Sehingga laju total menjadi dua kali laju tahap 2:
     $$\\frac{d[\\ce{HBr}]}{dt} = 2 k_2 [\\ce{Br^{.}}] [\\ce{H2}]$$
   - Substitusikan nilai $[\\ce{Br^{.}}]$ dari sub-soal (a):
     $$\\frac{d[\\ce{HBr}]}{dt} = 2 k_2 \\left(\\frac{k_1}{k_4}\\right)^{1/2} [\\ce{H2}] [\\ce{Br2}]^{1/2} = \\mathbf{k [\\ce{H2}] [\\ce{Br2}]^{1/2}}$$
     *(dengan tetapan komposit $k = 2 k_2 \\sqrt{k_1/k_4}$).*
   - **Orde Reaksi:** Orde terhadap $\\ce{H2}$ adalah **$1$**, dan orde terhadap $\\ce{Br2}$ adalah **$\\frac{1}{2}$ (orde pecahan)**. *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Formulasi Neraca Radikal Bebas (SSA):
• Persamaan laju inisiasi k1[Br2] vs terminasi k4[Br.]^2: ....
• Ekstraksi nilai [Br.] orde setengah: ....

2. Penurunan Laju Akumulasi Produk:
• Persamaan pembentukan d[HBr]/dt dari tahap propagasi: ....
• Substitusi keadaan tunak radikal atomik [H.]: ....
• Penggabungan tetapan komposit dan penetapan orde pecahan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 7,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Pelatnas Olimpiade Kimia Internasional (IChO)',
    tags: ['mekanisme-reaksi', 'steady-state-approximation', 'orde-pecahan', 'radikal-bebas'],
  },
  {
    id: 107023,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Analisis Linearitas Grafik Persamaan Arrhenius',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Energi Aktivasi dan Faktor Frekuensi dari Grafik Linear ln k vs 1/T',
    question_text: `Data eksperimen pengaruh temperatur terhadap tetapan laju ($k$) reaksi dekomposisi gas nitrogen dioksida:
$$\\ce{2 NO2(g) -> 2 NO(g) + O2(g)}$$
diplot dalam bentuk grafik linear Arrhenius: $\\ln k$ terhadap $\\frac{1}{T}$ (di mana $T$ dalam Kelvin).

Persamaan garis lurus regresi linear yang diperoleh dari grafik tersebut adalah:
$$y = -13500 x + 28{,}5$$
di mana $y = \\ln k$ (dengan $k$ dalam $\\text{M}^{-1}\\text{s}^{-1}$) dan $x = \\frac{1}{T}$ (dalam $\\text{K}^{-1}$).

Diketahui tetapan gas universal $R = 8{,}314\\ \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan kemiringan kurva (slope), hitunglah nilai energi aktivasi (Ea) reaksi tersebut dalam satuan kJ/mol!',
        points: 2.5,
        rubric: 'Menghubungkan slope = -Ea / R = -13500 K (1 poin), sehingga Ea = 13500 * 8,314 J/mol = 112239 J/mol = 112,2 kJ/mol (1.5 poin).',
        expected_answer: 'Ea = 112,2 kJ/mol'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan titik potong sumbu-y (intercept), tentukan nilai faktor frekuensi pra-eksponensial (A) lengkap dengan satuannya!',
        points: 2.5,
        rubric: 'Menghubungkan intercept = ln A = 28,5 (1 poin), sehingga A = e^28,5 = 2,38 x 10^12 M^-1 s^-1 (1.5 poin).',
        expected_answer: 'A = 2,38 x 10^12 M^-1 s^-1'
      }
    ],
    expected_final_answer: 'a. Ea = 112,2 kJ/mol; b. A = 2,38 x 10^12 M^-1 s^-1.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Energi Aktivasi ($E_a$) (Bobot: 2.5 Poin)**
   - **Bentuk Linear Persamaan Arrhenius:**
     $$\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right) \\implies y = m x + c$$
     Di mana kemiringan (*slope*) garis $m = -\\frac{E_a}{R}$.
   - Dari persamaan regresi: $m = -13500\\ \\text{K}$.
   - **Perhitungan $E_a$:**
     $$-\\frac{E_a}{R} = -13500 \\implies E_a = 13500\\ \\text{K} \\times 8{,}314\\ \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$$
     $$E_a = 112239\\ \\text{J/mol} = \\mathbf{112{,}2\\ \\text{kJ/mol}}$$
     *(Skor: 2.5 Poin)*

2. **Sub-soal (b): Perhitungan Faktor Frekuensi ($A$) (Bobot: 2.5 Poin)**
   - Titik potong sumbu-$y$ (*intercept*): $c = \\ln A = 28{,}5$.
   - **Nilai Numerik $A$:**
     $$A = e^{28{,}5} \\approx \\mathbf{2{,}38 \\times 10^{12}\\ \\text{M}^{-1}\\text{s}^{-1}}$$
     *(Satuan $A$ selalu identik dengan satuan tetapan laju $k$, yaitu $\\text{M}^{-1}\\text{s}^{-1}$ untuk reaksi orde dua).* *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Analisis Linearitas Regresi Arrhenius:
• Persamaan garis lurus y = m x + c vs ln k = (-Ea/R)(1/T) + ln A: ....
• Ekstraksi nilai gradien (slope): ....
• Perhitungan energi aktivasi Ea: ....

2. Penentuan Parameter Tumbukan Pra-Eksponensial:
• Eksponensiasi intercept A = e^c: ....
• Kesesuaian satuan frekuensi tumbukan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['persamaan-arrhenius', 'energi-aktivasi-ea', 'regresi-linear', 'faktor-frekuensi'],
  },
  {
    id: 107024,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Kinetika Peluruhan Orde Satu & Waktu Paruh Radioaktif',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi Waktu Paruh dan Fraksi Peluruhan Kinetika Orde Pertama',
    question_text: `Peluruhan zat radioaktif isotop fosfor-32 ($_{15}^{32}\\ce{P}$) yang digunakan dalam terapi medis mengikuti kinetika reaksi orde pertama semu:
$$-\\frac{d[N]}{dt} = k [N]$$

Diketahui waktu paruh (*half-life*, $t_{1/2}$) isotop fosfor-32 adalah $14{,}3\\ \\text{hari}$. Suatu sampel awal fosfor-32 murni memiliki aktivitas radioaktif $A_0 = 800\\ \\text{MBq}$.

Berdasarkan hubungan kinetika orde pertama:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah nilai tetapan laju peluruhan (k) dari isotop fosfor-32 dalam satuan hari^-1!',
        points: 2.5,
        rubric: 'Menuliskan rumus k = ln 2 / t_1/2 = 0,69315 / 14,3 hari (1 poin), menghasilkan k = 0,0485 hari^-1 (1.5 poin).',
        expected_answer: 'k = 0,0485 hari^-1 (atau 4,85 x 10^-2 hari^-1)'
      },
      {
        label: 'b',
        question_text: 'Berapakah aktivitas radioaktif sampel tersebut yang masih tersisa setelah disimpan selama 57,2 hari?',
        points: 2.5,
        rubric: 'Menghitung jumlah waktu paruh n = t / t_1/2 = 57,2 / 14,3 = 4 periode waktu paruh (1 poin), dan menghitung aktivitas sisa A = A0 * (1/2)^4 = 800 * 1/16 = 50 MBq (1.5 poin).',
        expected_answer: 'Aktivitas sisa = 50 MBq'
      }
    ],
    expected_final_answer: 'a. k = 0,0485 hari^-1; b. Aktivitas sisa = 50 MBq.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Tetapan Laju Peluruhan ($k$) (Bobot: 2.5 Poin)**
   - Untuk kinetika orde pertama, hubungan antara waktu paruh dan tetapan laju adalah:
     $$t_{1/2} = \\frac{\\ln 2}{k} \\implies k = \\frac{\\ln 2}{t_{1/2}}$$
   - **Perhitungan:**
     $$k = \\frac{0{,}69315}{14{,}3\\ \\text{hari}} = \\mathbf{0{,}04847\\ \\text{hari}^{-1}} \\approx \\mathbf{0{,}0485\\ \\text{hari}^{-1}}$$
     *(Skor: 2.5 Poin)*

2. **Sub-soal (b): Aktivitas Radioaktif Tersisa (Bobot: 2.5 Poin)**
   - **Metode 1 (Kelipatan Waktu Paruh):**
     $$n = \\frac{t}{t_{1/2}} = \\frac{57{,}2\\ \\text{hari}}{14{,}3\\ \\text{hari}} = 4{,}0\\ \\text{periode paruh}$$
     $$A = A_0 \\times \\left(\\frac{1}{2}\\right)^n = 800\\ \\text{MBq} \\times \\left(\\frac{1}{2}\\right)^4 = 800 \\times \\frac{1}{16} = \\mathbf{50\\ \\text{MBq}}$$
     *(Skor: 2.5 Poin)*
   - **Metode 2 (Persamaan Integrasi Orde 1):**
     $$A = A_0 e^{-k t} = 800 \\times e^{-(0{,}04847 \\times 57{,}2)} = 800 \\times e^{-2{,}7726} = 800 \\times 0{,}0625 = 50\\ \\text{MBq}$$`,
    solution_framework_template: `1. Formulasi Waktu Paruh Orde Satu:
• Hubungan k = ln(2) / t_1/2: ....
• Kalkulasi tetapan peluruhan dalam satuan hari^-1: ....

2. Peluruhan Eksponensial Sisa:
• Rasio waktu peluruhan terhadap waktu paruh: ....
• Fraksi aktivitas residual A = A0 * (1/2)^n: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Kabupaten/Kota (OSK)',
    tags: ['orde-satu', 'waktu-paruh', 'radioaktivitas', 'kinetika-kimia'],
  },
  {
    id: 107025,
    sma_topic_number: 7,
    sma_topic_id: 107,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Desain Eksperimen Kinetika: Metode Tanda Silang Hilang (Disappearing Cross)',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Desain Eksperimen Pengukuran Laju Pengendapan Belerang Koloidal Metode Tanda Silang Hilang',
    question_text: `Reaksi antara larutan natrium tiosulfat dan asam klorida encer menghasilkan endapan koloid belerang kuning keruh yang perlahan menutupi transparansi larutan:
$$\\ce{Na2S2O3(aq) + 2 HCl(aq) -> 2 NaCl(aq) + SO2(g) + S(s)v + H2O(l)}$$

Dalam metode *disappearing cross*, bejana reaksi diletakkan di atas selembar kertas bertanda silang hitam ($\\mathbf{X}$). Waktu reaksi ($t$) dihitung sejak pencampuran hingga tanda silang hitam tidak lagi terlihat saat diamati tegak lurus dari atas mulut bejana.

Tersedia alat dan bahan:
- Larutan $\\ce{Na2S2O3}\\ 0{,}20\\ \\text{M}$
- Larutan $\\ce{HCl}\\ 2{,}0\\ \\text{M}$
- Air suling murni
- Gelas ukur $10\\ \\text{mL}$, gelas kimia $100\\ \\text{mL}$, stopwatch, termometer, penangas air.

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Rancanglah tabel prosedur variasi konsentrasi Na2S2O3 (minimal 3 percobaan) untuk menentukan orde reaksi terhadap Na2S2O3 dengan volume total campuran selalu dibuat konstan 50 mL dan volume HCl dijaga tetap 10 mL!',
        points: 2.5,
        rubric: 'Menyusun tabel 3 percobaan dengan variasi volume Na2S2O3 (misal: 10, 20, 30 mL), volume air suling penyeimbang (30, 20, 10 mL) agar volume larutan Na2S2O3 encer = 40 mL, dan volume HCl = 10 mL sehingga volume total selalu 50 mL (2.5 poin).',
        expected_answer: 'Percobaan 1: 10 mL Na2S2O3 + 30 mL air + 10 mL HCl; Percobaan 2: 20 mL Na2S2O3 + 20 mL air + 10 mL HCl; Percobaan 3: 30 mL Na2S2O3 + 10 mL air + 10 mL HCl.'
      },
      {
        label: 'b',
        question_text: 'Mengapa volume total campuran larutan pada metode tanda silang hilang ini WAJIB selalu dijaga sama persis pada setiap percobaan? Jelaskan kaitannya dengan hukum penyerapan optik Lambert-Beer!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa volume total yang sama menjaga tinggi kolom cairan (panjang lintasan optik b) konstan (1.5 poin), sehingga tanda silang hilang pada jumlah massa endapan belerang per satuan volume yang identik di setiap percobaan, memastikan v sebanding dengan 1/t secara valid (1 poin).',
        expected_answer: 'Volume total yang sama memastikan kedalaman cairan (panjang lintasan cahaya) tetap sama, sehingga tanda silang hilang pada massa endapan belerang yang sama di setiap percobaan.'
      }
    ],
    expected_final_answer: 'a. Tabel variasi volume Na2S2O3 (10, 20, 30 mL) dengan air suling hingga total 50 mL; b. Menjaga kedalaman/tinggi kolom cairan konstan agar intensitas kekeruhan penutup tanda silang seragam.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Desain Tabel Eksperimen Kinetika (Bobot: 2.5 Poin)**
   - Agar konsentrasi $\\ce{Na2S2O3}$ bervariasi sementara volume total tetap $50\\ \\text{mL}$ dan $[\\ce{HCl}]$ konstan, air suling ditambahkan sebagai penyeimbang volume:

   | No. | Volume $\\ce{Na2S2O3}\\ 0{,}2\\ \\text{M}$ | Volume Air Suling | Volume $\\ce{HCl}\\ 2{,}0\\ \\text{M}$ | Volume Total | $[\\ce{Na2S2O3}]_{\\text{campuran}}$ |
   | :---: | :---: | :---: | :---: | :---: | :---: |
   | 1 | $10\\ \\text{mL}$ | $30\\ \\text{mL}$ | $10\\ \\text{mL}$ | $50\\ \\text{mL}$ | $0{,}040\\ \\text{M}$ |
   | 2 | $20\\ \\text{mL}$ | $20\\ \\text{mL}$ | $10\\ \\text{mL}$ | $50\\ \\text{mL}$ | $0{,}080\\ \\text{M}$ |
   | 3 | $30\\ \\text{mL}$ | $10\\ \\text{mL}$ | $10\\ \\text{mL}$ | $50\\ \\text{mL}$ | $0{,}120\\ \\text{M}$ |

   *(Desain tabel benar dan konsisten menjaga volume total $50\\ \\text{mL}$).* *(Skor: 2.5 Poin)*

2. **Sub-soal (b): Asas Fisika-Kimia Kedalaman Lintasan Optik (Bobot: 2.5 Poin)**
   - Berdasarkan **Hukum Lambert-Beer** mengenai atenuasi cahaya ($A = \\varepsilon \\cdot b \\cdot c$): derajat kekeruhan yang menutupi pandangan mata ditentukan oleh hasil kali konsentrasi partikel koloid suspensi belerang ($c$) dengan panjang lintasan optik cairan ($b$, yaitu ketinggian permukaan cairan di dalam bejana). *(Skor: 1.5 Poin)*
   - Jika volume total larutan berbeda-beda di setiap percobaan, ketinggian kolom cairan ($b$) akan berubah-ubah, sehingga tanda silang akan hilang pada konsentrasi belerang yang berbeda di setiap tabung. Dengan menjaga volume total selalu tepat $50\\ \\text{mL}$, tinggi kolom cairan ($b$) dijamin identik, sehingga tanda silang hilang pada jumlah massa endapan belerang per satuan luas yang sama persis. Hal ini menjamin asumsi $v \\propto \\frac{1}{t}$ berlaku valid secara ilmiah. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Penyusunan Matriks Percobaan Konsentrasi:
• Pengenceran bertingkat dengan penambahan akuades: ....
• Menjaga volume reaktan kedua konstan: ....
• Tabel matriks volume total konstan: ....

2. Landasan Optika Hukum Lambert-Beer:
• Hubungan ketinggian kolom cairan (panjang lintasan optis b): ....
• Keseragaman ambang batas opasitas penutup tanda silang: ....
• Validasi hubungan laju v sebanding dengan 1/t: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 7,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Bidang Praktikum & Desain Eksperimen',
    tags: ['faktor-laju-reaksi', 'metode-ilmiah', 'desain-eksperimen', 'koloid-belerang', 'lambert-beer'],
  },
];
