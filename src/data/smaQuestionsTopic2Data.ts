/**
 * smaQuestionsTopic2Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase E & Fase F & OSN)
 * 
 * BATCH 2: Ikatan Kimia & Geometri Molekul (Pilar 2 / Modul 2)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 103001 - 103025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 103001 - 103025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 103001 - 103025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_2_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 103001 - 103025)
  // =========================================================================
  {
    id: 103001,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Ikatan Ionik & Karakteristik Senyawa Ion',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Karakteristik Pembentukan Ikatan Ionik pada Senyawa Logam dan Nonlogam',
    question_text: `Diberikan dua buah unsur, yaitu $_{12}\\ce{Mg}$ dan $_{9}\\ce{F}$. Jika kedua unsur tersebut bereaksi membentuk senyawa yang stabil, proses transfer elektron valensi, jenis ikatan, dan rumus kimia senyawa yang terbentuk adalah ....

A. Atom $\\ce{Mg}$ menangkap 2 elektron dan atom $\\ce{F}$ melepas 1 elektron, membentuk ikatan ionik dengan rumus $\\ce{Mg2F}$  
B. Atom $\\ce{Mg}$ melepas 2 elektron membentuk kation $\\ce{Mg^2+}$ dan masing-masing dari 2 atom $\\ce{F}$ menangkap 1 elektron membentuk anion $\\ce{F-}$, menghasilkan ikatan ionik dengan rumus $\\ce{MgF2}$  
C. Atom $\\ce{Mg}$ dan atom $\\ce{F}$ saling menyumbangkan 1 elektron untuk dipakai bersama, membentuk ikatan kovalen nonpolar dengan rumus $\\ce{MgF}$  
D. Atom $\\ce{Mg}$ menyumbangkan sepasang elektron bebas untuk digunakan bersama oleh atom $\\ce{F}$, membentuk ikatan kovalen koordinasi dengan rumus $\\ce{MgF2}$  
E. Atom $\\ce{Mg}$ melepas 1 elektron dan atom $\\ce{F}$ menangkap 2 elektron, membentuk ikatan ionik dengan rumus $\\ce{MgF2}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Konfigurasi Elektron Keadaan Dasar:**
   - Unsur Magnesium ($_{12}\\ce{Mg}$): $1s^2\\, 2s^2\\, 2p^6\\, 3s^2$ atau $[\\ce{Ne}]\\, 3s^2$ (golongan IIA / logam alkali tanah, memiliki 2 elektron valensi).
   - Unsur Fluorin ($_{9}\\ce{F}$): $1s^2\\, 2s^2\\, 2p^5$ atau $[\\ce{He}]\\, 2s^2\\, 2p^5$ (golongan VIIA / halogen, memiliki 7 elektron valensi).
2. **Kaidah Kestabilan Oktet:**
   - Untuk mencapai kestabilan konfigurasi oktet gas mulia ($[\\ce{Ne}]$), atom $\\ce{Mg}$ cenderung **melepaskan 2 elektron valensinya**:
     $$\\ce{Mg -> Mg^2+ + 2e^-}$$
   - Masing-masing atom $\\ce{F}$ membutuhkan **1 elektron tambahan** untuk mencapai konfigurasi oktet ($[\\ce{Ne}]$):
     $$\\ce{F + e^- -> F^-}$$
3. **Stoikiometri & Pembentukan Ikatan Ionik:**
   - Karena 1 atom $\\ce{Mg}$ melepaskan 2 elektron, diperlukan 2 atom $\\ce{F}$ untuk menangkap kedua elektron tersebut:
     $$\\ce{Mg^2+ + 2F^- -> MgF2}$$
   - Terjadi gaya tarik-menarik elektrostatik yang sangat kuat (Hukum Coulomb) antara kation $\\ce{Mg^2+}$ dan anion $\\ce{F-}$, membentuk **ikatan ionik** dengan rumus kimia **$\\ce{MgF2}$** (magnesium fluorida).

**Analisis Opsi Lain:**
- **A salah:** Magnesium adalah logam elektropositif yang melepaskan elektron, bukan menangkap elektron.
- **C salah:** Ikatan antara logam dengan energi ionisasi rendah ($\ce{Mg}$) dan non-logam dengan afinitas elektron tinggi ($\ce{F}$) adalah ionik, bukan kovalen.
- **D salah:** Ikatan kovalen koordinasi terjadi antar-senyawa nonlogam/kompleks, bukan garam ionik biner.
- **E salah:** Jumlah elektron valensi magnesium adalah 2, sehingga muatan kationnya adalah $+2$, bukan $+1$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['ikatan-ion', 'transfer-elektron', 'kaidah-oktet', 'senyawa-biner', 'ikatan-kovalen'],
  },
  {
    id: 103002,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Struktur Lewis & Pasangan Elektron Bebas/Terikat',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Jumlah Pasangan Elektron Ikatan (PEI) dan Bebas (PEB) pada Amonia',
    question_text: `Pada molekul amonia ($\\ce{NH3}$), atom pusat nitrogen ($Z = 7$) mengikat tiga atom hidrogen ($Z = 1$). Berdasarkan penggambaran rumus titik elektron (struktur Lewis), jumlah Pasangan Elektron Ikatan (PEI) dan Pasangan Elektron Bebas (PEB) pada atom pusat nitrogen berturut-turut adalah ....

A. 3 PEI dan 0 PEB  
B. 3 PEI dan 1 PEB  
C. 2 PEI dan 2 PEB  
D. 3 PEI dan 2 PEB  
E. 1 PEI dan 3 PEB`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Hitung Elektron Valensi Total:**
   - Atom $\\ce{N}$ ($Z = 7$): konfigurasi $[\\ce{He}]\\, 2s^2\\, 2p^3 \\implies 5$ elektron valensi.
   - 3 atom $\\ce{H}$ ($Z = 1$): masing-masing $1$ elektron valensi $\\implies 3 \\times 1 = 3$ elektron.
   - Total elektron valensi $= 5 + 3 = 8$ elektron (setara dengan 4 pasang elektron).
2. **Penyusunan Struktur Lewis:**
   - Atom $\\ce{N}$ bertindak sebagai atom pusat dan dikelilingi oleh 3 atom $\\ce{H}$.
   - Tiga pasang elektron digunakan untuk membentuk 3 ikatan kovalen tunggal $\\ce{N-H}$. Ini merupakan **3 Pasangan Elektron Ikatan (PEI)**.
   - Sisa elektron $= 8 - (3 \\times 2) = 2$ elektron (1 pasang). Sepasang elektron sisa ini menempati atom pusat $\\ce{N}$ sebagai **1 Pasangan Elektron Bebas (PEB)**.
3. **Kesimpulan:**
   - Jumlah PEI $= 3$, jumlah PEB $= 1$ (tipe VSEPR: $AX_3E_1$, bentuk molekul piramida trigonal).

**Analisis Opsi Lain:**
- **A salah:** 3 PEI dan 0 PEB adalah karakteristik spesi sub-oktet seperti $\\ce{BF3}$.
- **C salah:** 2 PEI dan 2 PEB adalah karakteristik molekul air ($\\ce{H2O}$).
- **D & E salah:** Jumlah total pasangan elektron melanggar kaidah oktet (melebihi atau kurang dari 8 elektron).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['struktur-lewis', 'pasangan-elektron-bebas', 'pasangan-elektron-ikatan', 'amonia', 'vsepr'],
  },
  {
    id: 103003,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Ikatan Kovalen Koordinasi (Ikatan Datif)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Analisis Pembentukan Ikatan Kovalen Koordinasi pada Ion Hidronium (H3O+)',
    question_text: `Ketika asam klorida ($\\ce{HCl}$) dilarutkan ke dalam air, terjadi reaksi pembentukan ion hidronium menurut persamaan:
$$\\ce{H2O(l) + H+(aq) -> H3O+(aq)}$$
Pernyataan yang paling tepat mengenai ikatan kovalen koordinasi (ikatan datif) yang terbentuk pada ion $\\ce{H3O+}$ adalah ....

A. Pasangan elektron ikatan disumbangkan oleh ion $\\ce{H+}$, sedangkan atom oksigen menyediakan orbital kosong  
B. Pasangan elektron ikatan berasal dari sumbangan bersama satu elektron dari atom oksigen dan satu elektron dari ion $\\ce{H+}$  
C. Pasangan elektron ikatan disumbangkan seutuhnya oleh salah satu pasangan elektron bebas (PEB) milik atom oksigen pada $\\ce{H2O}$ kepada orbital $1s$ kosong milik ion $\\ce{H+}$  
D. Terjadi serah terima elektron permanen dari atom oksigen ke ion $\\ce{H+}$ sehingga membentuk ikatan ionik murni  
E. Ikatan kovalen koordinasi terbentuk karena adanya gaya tarik dipol-dipol permanen antara $\\ce{H2O}$ dan $\\ce{H+}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Spesi Pereaksi:**
   - Molekul air ($\\ce{H2O}$): Atom oksigen memiliki konfigurasi oktet dengan 2 pasangan elektron ikatan (ikatan $\\ce{O-H}$) dan **2 pasangan elektron bebas (PEB)**. Molekul $\\ce{H2O}$ bertindak sebagai **Basa Lewis** (donor pasangan elektron).
   - Kation hidrogen ($\\ce{H+}$): Proton terisolasi tanpa elektron sama sekali (orbital $1s$ kosong). Spesi ini bertindak sebagai **Asam Lewis** (akseptor pasangan elektron).
2. **Mekanisme Pembentukan Ikatan Kovalen Koordinasi:**
   - Salah satu PEB dari atom oksigen mendonorkan kedua elektronnya untuk dibagi pakai bersama orbital $1s$ kosong dari ion $\\ce{H+}$.
   - Ikatan kovalen di mana pasangan elektron yang digunakan bersama berasal **hanya dari salah satu atom/spesi** disebut **ikatan kovalen koordinasi** (atau ikatan datif, sering dilambangkan $\\ce{O -> H+}$).
3. **Sifat Ikatan dalam Ion Hidronium:**
   - Setelah terbentuk ion $\\ce{H3O+}$, muatan positif terdelokalisasi ke seluruh ion, dan ketiga ikatan $\\ce{O-H}$ menjadi setara secara eksperimental (panjang ikatan dan energinya identik).

**Analisis Opsi Lain:**
- **A salah:** Ion $\ce{H+}$ tidak memiliki elektron, sehingga mustahil menyumbangkan pasangan elektron.
- **B salah:** Pernyataan tersebut adalah definisi ikatan kovalen biasa (kovalen murni/polar), bukan ikatan koordinasi.
- **D salah:** Bukan transfer elektron membentuk ion terpisah, melainkan pemakaian bersama sepasang elektron.
- **E salah:** Interaksi dipol-dipol adalah gaya antarmolekul sekunder yang lemah, bukan ikatan kimia kovalen intramolekul.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['ikatan-kovalen-koordinasi', 'ikatan-datif', 'asam-basa-lewis', 'ion-hidronium'],
  },
  {
    id: 103004,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Pengecualian Aturan Oktet (Spesi Sub-Oktet)',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Karakteristik Molekul Boron Trifluorida (BF3) sebagai Pengecualian Oktet dan Asam Lewis',
    question_text: `Boron trifluorida ($\\ce{BF3}$) merupakan senyawa anorganik penting dalam industri sintesis organik. Atom pusat boron ($Z = 5$) berikatan dengan tiga atom fluorin ($Z = 9$). Senyawa ini dikenal luas sebagai salah satu contoh klasik penyimpangan kaidah oktet.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Gambarkan sketsa struktur Lewis molekul $\\ce{BF3}$ (tampilkan seluruh PEB pada atom halogen) dan tentukan jumlah elektron valensi total yang mengelilingi atom pusat boron!',
        points: 3,
        rubric: 'Struktur Lewis benar dengan 3 ikatan tunggal B-F dan masing-masing atom F memiliki 3 PEB (2 poin); Menyebutkan atom B hanya memiliki 6 elektron valensi / sub-oktet (1 poin).',
        expected_answer: 'Atom pusat boron dikelilingi oleh 6 elektron valensi (3 pasang ikatan tunggal B-F) sehingga tidak mencapai oktet (spesi sub-oktet).'
      },
      {
        label: 'b',
        question_text: 'Mengapa molekul $\\ce{BF3}$ sangat reaktif bereaksi dengan molekul amonia ($\\ce{NH3}$) menghasilkan senyawa aduk (adduct) $\\ce{F3B-NH3}$? Jelaskan jenis ikatan baru yang terbentuk dan identifikasi peran masing-masing spesi berdasarkan teori asam-basa Gilbert N. Lewis!',
        points: 5,
        rubric: 'Menjelaskan adanya orbital 2p kosong pada atom B (1.5 poin); Mengidentifikasi amonia mendonorkan PEB milik N (1.5 poin); Menyebutkan jenis ikatan kovalen koordinasi / datif (1 poin); Menetapkan BF3 sebagai Asam Lewis dan NH3 sebagai Basa Lewis (1 poin).',
        expected_answer: 'BF3 memiliki orbital 2p kosong sehingga bertindak sebagai Asam Lewis, menerima PEB dari NH3 (Basa Lewis) membentuk ikatan kovalen koordinasi B-N.'
      }
    ],
    expected_final_answer: 'Atom B memiliki 6 elektron (sub-oktet); Bereaksi dengan NH3 membentuk ikatan kovalen koordinasi (BF3 Asam Lewis, NH3 Basa Lewis).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Struktur Lewis & Jumlah Elektron Boron**
   - **Elektron Valensi:** Boron ($_{5}\\ce{B}: [\\ce{He}]\\, 2s^2\\, 2p^1$) memiliki 3 elektron valensi. Tiga atom Fluorin ($_{9}\\ce{F}: [\\ce{He}]\\, 2s^2\\, 2p^5$) masing-masing memiliki 7 elektron valensi.
   - **Total Elektron Valensi:** $3 + (3 \\times 7) = 24$ elektron (12 pasang).
   - **Struktur:** Boron terikat ke 3 atom fluorin melalui ikatan tunggal $\\sigma$. Masing-masing atom fluorin memiliki 3 pasang elektron bebas (oktet lengkap).
   - **Elektron pada Boron:** Boron hanya dikelilingi oleh **6 elektron valensi** (3 pasang ikatan). Keadaan ini disebut **oktet tidak lengkap** (*incomplete octet* atau *sub-oktet* / spesi hipovalen).

2. **Sub-soal (b): Reaktivitas Asam Lewis & Ikatan Kovalen Koordinasi**
   - Karena hanya memiliki 6 elektron valensi, atom boron pada $\\ce{BF3}$ memiliki satu **orbital $2p$ yang kosong** dan berenergi rendah.
   - Molekul amonia ($\\ce{NH3}$) memiliki satu **pasangan elektron bebas (PEB)** pada atom nitrogen.
   - Molekul $\\ce{BF3}$ bertindak sebagai **Asam Lewis** (akseptor pasangan elektron), sedangkan $\\ce{NH3}$ bertindak sebagai **Basa Lewis** (donor pasangan elektron).
   - Nitrogen mendonorkan pasangan elektron bebasnya ke orbital $2p$ kosong milik boron, membentuk **ikatan kovalen koordinasi** (ikatan datif $\\ce{B<-N}$) dalam kompleks aduk $\\ce{F3B-NH3}$. Setelah reaksi ini, atom boron akhirnya mencapai konfigurasi oktet stabil (8 elektron).`,
    solution_framework_template: `1. Analisis Elektron Valensi & Struktur Lewis BF3:
• Konfigurasi elektron boron dan halogen fluorin: ....
• Penggambaran 3 ikatan B-F dan alokasi PEB fluorin: ....
• Penghitungan elektron sekitar atom boron (kesimpulan sub-oktet): ....

2. Analisis Reaksi Pembentukan Senyawa Aduk F3B-NH3:
• Keberadaan orbital kosong pada atom boron: ....
• Peran donor PEB dari atom nitrogen amonia: ....
• Klasifikasi Asam-Basa Lewis (spesi donor & akseptor): ....
• Kesimpulan jenis ikatan yang menghubungkan atom B dan N: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 8,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase F (Kelas 11)',
    tags: ['pengecualian-oktet', 'sub-oktet', 'asam-lewis', 'ikatan-kovalen-koordinasi', 'struktur-lewis'],
  },
  {
    id: 103005,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Geometri Molekul Dasar VSEPR',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Perbandingan Geometri Molekul dan Sudut Ikatan pada Metana (CH4) dan Air (H2O)',
    question_text: `Dua molekul kovalen sederhana, yaitu metana ($\\ce{CH4}$) dan air ($\\ce{H2O}$), sama-sama memiliki 4 domain elektron di sekitar atom pusatnya ($SN = 4$, hibridisasi orbital $sp^3$). Namun, bentuk geometri molekul aktual dan besar sudut ikatan keduanya sangat berbeda.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan tipe formulasi VSEPR ($AX_mE_n$), jumlah Pasangan Elektron Ikatan (PEI), jumlah Pasangan Elektron Bebas (PEB), serta nama bentuk geometri molekul untuk $\\ce{CH4}$ dan $\\ce{H2O}$!',
        points: 4,
        rubric: 'Menentukan CH4 sebagai AX4 / tetrahedral sempurna (2 poin); Menentukan H2O sebagai AX2E2 / bengkok (bent / V-shape) (2 poin).',
        expected_answer: 'CH4 bertipe AX4 (tetrahedral, 4 PEI, 0 PEB); H2O bertipe AX2E2 (bengkok/bent, 2 PEI, 2 PEB).'
      },
      {
        label: 'b',
        question_text: 'Mengapa sudut ikatan $\\ce{H-O-H}$ pada molekul air ($104.5^\\circ$) terdistorsi signifikan menjadi lebih sempit dibandingkan sudut ikatan $\\ce{H-C-H}$ pada metana ($109.5^\\circ$)? Jelaskan secara fisis berdasarkan hierarki kekuatan tolakan domain elektron Teori VSEPR!',
        points: 4,
        rubric: 'Menjelaskan hierarki tolakan PEB-PEB > PEB-PEI > PEI-PEI (2 poin); Menjelaskan awan elektron PEB terikat pada 1 inti sehingga lebih bervolume besar dan menekan pasangan ikatan (2 poin).',
        expected_answer: 'Dua PEB pada H2O memberikan gaya tolak elektrostatik yang jauh lebih kuat (PEB-PEB > PEB-PEI > PEI-PEI) sehingga menekan sudut ikatan H-O-H dari 109.5° menjadi 104.5°.'
      }
    ],
    expected_final_answer: 'CH4: AX4 (Tetrahedral, 109.5°); H2O: AX2E2 (Bengkok/Bent, 104.5° akibat tolakan kuat 2 PEB).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Formulasi VSEPR & Geometri Molekul**
   - **Molekul Metana ($\\ce{CH4}$):**
     - Atom pusat $\\ce{C}$ memiliki 4 elektron valensi, mengikat 4 atom $\\ce{H}$.
     - Jumlah domain ikatan (PEI) $= 4$, Pasangan elektron bebas (PEB) $= 0$.
     - Tipe formulasi: **$AX_4$**.
     - Bentuk molekul aktual: **Tetrahedral** (simetris).
   - **Molekul Air ($\\ce{H2O}$):**
     - Atom pusat $\\ce{O}$ memiliki 6 elektron valensi, mengikat 2 atom $\\ce{H}$ dan menyisakan 4 elektron non-ikatan.
     - Jumlah domain ikatan (PEI) $= 2$, Pasangan elektron bebas (PEB) $= 2$.
     - Tipe formulasi: **$AX_2E_2$**.
     - Bentuk molekul aktual: **Bengkok** (*Bent* / bentuk-V).

2. **Sub-soal (b): Distorsi Sudut Ikatan Berdasarkan Hierarki Tolakan VSEPR**
   - Pasangan elektron ikatan (PEI) berada di bawah pengaruh tarikan **dua inti atom** (inti atom pusat dan inti ligan), sehingga awan elektronnya terkonsentrasi terlokalisasi di antara kedua inti.
   - Sebaliknya, Pasangan Elektron Bebas (PEB) hanya ditarik oleh **satu inti atom pusat**, sehingga awan elektronnya lebih mengembang, memiliki kerapatan spasial lebih besar, dan menyita volume sudut yang lebih luas di sekitar atom pusat.
   - Sesuai kaidah VSEPR, hierarki kekuatan tolakan elektrostatik adalah:
     $$\\text{Tolakan PEB-PEB} > \\text{Tolakan PEB-PEI} > \\text{Tolakan PEI-PEI}$$
   - Pada $\\ce{CH4}$, keempat domain adalah PEI yang saling tolak secara ekuivalen, menghasilkan sudut tetrahedral ideal sebesar **$109.5^\\circ$**.
   - Pada $\\ce{H2O}$, terdapat 2 PEB yang saling tolak dengan sangat kuat, serta mendorong kedua ikatan $\\ce{O-H}$ saling mendekat. Akibatnya, sudut ikatan $\\ce{H-O-H}$ tertekan (terkompresi) turun drastis menjadi **$104.5^\\circ$** (penyusutan sebesar $\\approx 5^\\circ$).`,
    solution_framework_template: `1. Analisis Domain Elektron & Formulasi VSEPR:
• Penentuan PEI dan PEB pada atom pusat karbon (CH4): ....
• Penentuan PEI dan PEB pada atom pusat oksigen (H2O): ....
• Identifikasi bentuk geometri molekul aktual CH4 dan H2O: ....

2. Evaluasi Fisik Tolakan Domain Elektron:
• Perbedaan penyebaran awan elektron PEI (2 inti) vs PEB (1 inti): ....
• Penulisan hierarki kekuatan tolakan VSEPR: ....
• Penjelasan kompresi sudut ikatan H-O-H dari nilai ideal 109.5° menjadi 104.5°: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 8,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase F (Kelas 11)',
    tags: ['vsepr', 'geometri-molekul', 'sudut-ikatan', 'tetrahedral', 'bengkok-bent'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 103001 - 103025)
  // =========================================================================
  {
    id: 103006,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Muatan Formal & Kestabilan Kontributor Resonansi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Kontributor Resonansi Mayor pada Anion Tiosianat (SCN-)',
    question_text: `Anion tiosianat ($\\ce{SCN-}$) memiliki tiga struktur resonansi Lewis kanonikal yang memenuhi kaidah oktet:
- **Struktur I:** $[\\ce{:\\ddot{S}=C=\\ddot{N}:}]^-$
- **Struktur II:** $[\\ce{:\\overset{\\dots}{S}-C#N:}]^-$
- **Struktur III:** $[\\ce{:S#C-\\overset{\\dots}{N}:}]^-$

(Diketahui keelektronegatifan Pauling: $\\chi_N = 3.04$, $\\chi_C = 2.55$, $\\chi_S = 2.58$). Berdasarkan evaluasi muatan formal ($FC$) dan keelektronegatifan unsur, struktur resonansi yang merupakan **kontributor mayor** (paling stabil) dan kontributor paling minor (paling tidak stabil) berturut-turut adalah ....

A. Struktur I adalah kontributor mayor; Struktur III adalah kontributor paling minor  
B. Struktur II adalah kontributor mayor; Struktur I adalah kontributor paling minor  
C. Struktur III adalah kontributor mayor; Struktur II adalah kontributor paling minor  
D. Struktur I adalah kontributor mayor; Struktur II adalah kontributor paling minor  
E. Ketiga struktur memiliki kestabilan identik karena muatan totalnya sama-sama $-1$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Rumus Perhitungan Muatan Formal ($FC$):**
   $$FC = V - (\\text{titik PEB}) - (\\text{garis ikatan})$$
   di mana elektron valensi atom bebas: $V(\\ce{S}) = 6$, $V(\\ce{C}) = 4$, $V(\\ce{N}) = 5$.

2. **Hitung Muatan Formal Masing-Masing Struktur:**
   - **Struktur I:** $[\\ce{:\\ddot{S}=C=\\ddot{N}:}]^-$ (dua ikatan rangkap dua)
     - Atom $\\ce{S}$: $FC = 6 - 4 - 2 = 0$
     - Atom $\\ce{C}$: $FC = 4 - 0 - 4 = 0$
     - Atom $\\ce{N}$: $FC = 5 - 4 - 2 = -1$
     - Distribusi muatan: $[\\ce{S}(0)=\\ce{C}(0)=\\ce{N}(-1)]^-$
   - **Struktur II:** $[\\ce{:\\overset{\\dots}{S}-C#N:}]^-$ (ikatan tunggal $\\ce{S-C}$ dan rangkap tiga $\\ce{C#N}$)
     - Atom $\\ce{S}$: $FC = 6 - 6 - 1 = -1$
     - Atom $\\ce{C}$: $FC = 4 - 0 - 4 = 0$
     - Atom $\\ce{N}$: $FC = 5 - 2 - 3 = 0$
     - Distribusi muatan: $[\\ce{S}(-1)-\\ce{C}(0)#\\ce{N}(0)]^-$
   - **Struktur III:** $[\\ce{:S#C-\\overset{\\dots}{N}:}]^-$ (ikatan rangkap tiga $\\ce{S#C}$ dan tunggal $\\ce{C-N}$)
     - Atom $\\ce{S}$: $FC = 6 - 2 - 3 = +1$
     - Atom $\\ce{C}$: $FC = 4 - 0 - 4 = 0$
     - Atom $\\ce{N}$: $FC = 5 - 6 - 1 = -2$
     - Distribusi muatan: $[\\ce{S}(+1)#\\ce{C}(0)-\\ce{N}(-2)]^-$

3. **Evaluasi Kestabilan Kontributor Resonansi:**
   - **Struktur III adalah yang paling tidak stabil (paling minor):** Memiliki pemisahan muatan besar ($+1$ pada $\\ce{S}$ dan $-2$ pada $\\ce{N}$), melanggar prinsip minimalisasi muatan formal.
   - **Perbandingan Struktur I vs Struktur II:** Keduanya memiliki pemisahan muatan minimal (hanya satu atom bermuatan $-1$, lainnya $0$). Namun, aturan keelektronegatifan Pauling menyatakan bahwa muatan formal negatif **harus berada pada atom yang lebih elektronegatif**. Karena atom Nitrogen ($\\chi = 3.04$) jauh lebih elektronegatif daripada Belerang ($\\chi = 2.58$), penempatan muatan negatif pada atom $\\ce{N}$ (**Struktur I**) jauh lebih disukai daripada pada atom $\\ce{S}$ (**Struktur II**).
   - Jadi, **Struktur I adalah kontributor mayor** dan **Struktur III adalah kontributor paling minor**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['muatan-formal', 'resonansi-struktur', 'tiosianat', 'elektronegativitas', 'kontributor-mayor'],
  },
  {
    id: 103007,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Kepolaran Ikatan & Resultan Vektor Momen Dipol',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Analisis Momen Dipol dan Kepolaran Molekul Berdasarkan Simetri Ruang',
    question_text: `Diberikan empat buah molekul kovalen berikut:
(1) $\\ce{CO2}$  
(2) $\\ce{SO2}$  
(3) $\\ce{BF3}$  
(4) $\\ce{NF3}$  

Pasangan molekul yang keduanya memiliki momen dipol resultan sama dengan nol ($\\vec{\\mu}_{\\text{net}} = 0$, bersifat **nonpolar**) karena simetri spasial molekulnya adalah pasangan nomor ....

A. (1) dan (2)  
B. (1) dan (3)  
C. (2) dan (3)  
D. (2) dan (4)  
E. (3) dan (4)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
Suatu molekul bersifat **nonpolar** jika memiliki momen dipol netto sama dengan nol ($\\vec{\\mu}_{\\text{net}} = \\sum \\vec{\\mu}_i = 0$). Hal ini tercapai jika ikatan-ikatan polar tersusun dalam geometri spasial yang simetris tinggi sehingga vektor-vektor momen dipol saling meniadakan.

1. **Analisis Molekul (1) $\\ce{CO2}$:**
   - Geometri: Linier ($AX_2$, sudut $180^\\circ$).
   - Vektor momen dipol ikatan $\\ce{C=O}$ berarah saling bertolak belakang ($180^\\circ$) dengan besar yang sama.
   - Resultan $\\vec{\\mu}_{\\text{net}} = \\vec{\\mu}_1 + \\vec{\\mu}_2 = 0 \\implies$ **Nonpolar**.
2. **Analisis Molekul (2) $\\ce{SO2}$:**
   - Geometri: Bengkok ($AX_2E_1$, memiliki 1 PEB pada atom $\\ce{S}$, sudut $\\approx 119^\\circ$).
   - Karena bentuknya bengkok, vektor momen dipol ikatan $\\ce{S-O}$ tidak saling meniadakan. Terdapat pula kontribusi momen dipol PEB.
   - Resultan $\\vec{\\mu}_{\\text{net}} \\neq 0$ ($1.63\\text{ D}$) $\\implies$ **Polar**.
3. **Analisis Molekul (3) $\\ce{BF3}$:**
   - Geometri: Trigonal Planar / Segitiga Datar ($AX_3$, sudut $120^\\circ$).
   - Ketiga vektor momen dipol ikatan $\\ce{B-F}$ terletak pada satu bidang datar bersudut $120^\\circ$. Penjumlahan vektor ketiganya menghasilkan nol.
   - Resultan $\\vec{\\mu}_{\\text{net}} = 0 \\implies$ **Nonpolar**.
4. **Analisis Molekul (4) $\\ce{NF3}$:**
   - Geometri: Piramida Trigonal ($AX_3E_1$, memiliki 1 PEB pada atom $\\ce{N}$).
   - Karena bentuknya asimetris (piramidal), resultan vektor ikatan polar $\\ce{N-F}$ dan dipol PEB tidak bernilai nol.
   - Resultan $\\vec{\\mu}_{\\text{net}} \\neq 0$ ($0.24\\text{ D}$) $\\implies$ **Polar**.

**Kesimpulan:**
Molekul yang keduanya bersifat **nonpolar** adalah pasangan nomor **(1) dan (3)**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase F (Kelas 11)',
    tags: ['kepolaran-ikatan', 'momen-dipol', 'simetri-molekul', 'vsepr', 'vektor-dipol'],
  },
  {
    id: 103008,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Hibridisasi Orbital & Ikatan Sigma/Pi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Jumlah Ikatan Sigma, Pi, dan Hibridisasi Atom Karbon pada Akrilonitril',
    question_text: `Monomer polimer sintetis poliakrilonitril (orlon) memiliki rumus struktur senyawa akrilonitril sebagai berikut:
$$\\ce{H2C=CH-C#N}$$
Dari kiri ke kanan, sebutkan atom karbon sebagai C1, C2, dan C3. Jumlah total ikatan kovalen $\\sigma$ (sigma), ikatan kovalen $\\pi$ (pi), serta keadaan hibridisasi orbital dari atom C1, C2, dan C3 berturut-turut adalah ....

A. 6 ikatan $\\sigma$, 3 ikatan $\\pi$, dan hibridisasi $sp^2, sp^2, sp$  
B. 5 ikatan $\\sigma$, 4 ikatan $\\pi$, dan hibridisasi $sp^2, sp^2, sp^3$  
C. 6 ikatan $\\sigma$, 3 ikatan $\\pi$, dan hibridisasi $sp^3, sp^2, sp$  
D. 7 ikatan $\\sigma$, 2 ikatan $\\pi$, dan hibridisasi $sp^2, sp, sp$  
E. 4 ikatan $\\sigma$, 5 ikatan $\\pi$, dan hibridisasi $sp, sp^2, sp^2$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Dasar Ikatan $\\sigma$ dan $\\pi$:**
   - Setiap ikatan tunggal terdiri dari: **1 ikatan $\\sigma$**.
   - Setiap ikatan rangkap dua terdiri dari: **1 ikatan $\\sigma$ dan 1 ikatan $\\pi$**.
   - Setiap ikatan rangkap tiga terdiri dari: **1 ikatan $\\sigma$ dan 2 ikatan $\\pi$**.
2. **Uraian Struktur Akrilonitril:**
   - 2 ikatan tunggal $\\ce{C1-H}$: $2\\sigma$
   - 1 ikatan rangkap dua $\\ce{C1=C2}$: $1\\sigma + 1\\pi$
   - 1 ikatan tunggal $\\ce{C2-H}$: $1\\sigma$
   - 1 ikatan tunggal $\\ce{C2-C3}$: $1\\sigma$
   - 1 ikatan rangkap tiga $\\ce{C3#N}$: $1\\sigma + 2\\pi$
3. **Penjumlahan Total Ikatan:**
   - Total ikatan $\\sigma = 2 + 1 + 1 + 1 + 1 = \\mathbf{6\\text{ ikatan }\\sigma}$.
   - Total ikatan $\\pi = 1 + 2 = \\mathbf{3\\text{ ikatan }\\pi}$.
4. **Analisis Hibridisasi Tiap Atom Karbon:**
   - **Atom C1 ($\\ce{H2C=}$):** Memiliki 3 domain elektron (2 ikatan tunggal ke $\\ce{H}$ + 1 ikatan rangkap ke C2) $\\implies$ Bilangan sterik $SN = 3 \\implies$ **hibridisasi $sp^2$**.
   - **Atom C2 ($\\ce{-CH=}$):** Memiliki 3 domain elektron (1 ke $\\ce{H}$ + 1 rangkap ke C1 + 1 tunggal ke C3) $\\implies$ Bilangan sterik $SN = 3 \\implies$ **hibridisasi $sp^2$**.
   - **Atom C3 ($\\ce{-C#N}$):** Memiliki 2 domain elektron (1 ikatan tunggal ke C2 + 1 ikatan rangkap tiga ke $\\ce{N}$) $\\implies$ Bilangan sterik $SN = 2 \\implies$ **hibridisasi $sp$**.
5. **Kesimpulan:** 6 ikatan $\\sigma$, 3 ikatan $\\pi$, dan hibridisasi berturut-turut $sp^2, sp^2, sp$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase F (Kelas 11)',
    tags: ['hibridisasi-orbital', 'ikatan-sigma-pi', 'akrilonitril', 'domain-elektron'],
  },
  {
    id: 103009,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'VSEPR Domain Sterik 5 & Posisi PEB',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    diagram_url: '/diagrams/vsepr-bents-rule-geometry.svg',
    title: 'Prediksi Geometri Molekul dan Penempatan PEB pada Belerang Tetrafluorida (SF4)',
    question_text: `Molekul belerang tetrafluorida ($\\ce{SF4}$) memiliki atom pusat dengan 4 domain ikatan dan 1 Pasangan Elektron Bebas (PEB), dengan formulasi tipe $AX_4E_1$ ($SN = 5$). Berdasarkan diagram VSEPR terlampir, alasan ilmiah yang paling tepat mengapa PEB menempati posisi **ekuatorial** dan bukan posisi **aksial** adalah ....

A. Pada posisi ekuatorial, PEB hanya mengalami 2 interaksi tolak menolak bersudut $90^\\circ$ dengan ikatan aksial, sedangkan jika menempati posisi aksial akan mengalami 3 interaksi tolak menolak bersudut $90^\\circ$ dengan ikatan ekuatorial  
B. Posisi ekuatorial memiliki karakter orbital-$p$ $100\\%$, sehingga awan elektron PEB lebih stabil dibandingkan di posisi aksial yang memiliki karakter-$s$ tinggi  
C. Menempatkan PEB pada posisi aksial akan membuat molekul berbentuk bujursangkar datar yang memiliki energi kisi kristal terlalu tinggi  
D. Pada posisi ekuatorial, tolakan antar-PEB menjadi minimum karena sudut ikatan ekuatorial adalah $180^\\circ$  
E. Atom belerang tidak memiliki orbital $d$, sehingga tidak mampu menampung elektron bebas pada sumbu aksial`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Bilangan Sterik $SN = 5$ (Hibridisasi $sp^3d$):**
   - Kerangka dasar geometri domain elektron adalah **bipiramida trigonal**, yang memiliki dua lingkungan spasial yang tidak ekuivalen:
     - 2 posisi **Aksial** (membentuk sudut $90^\\circ$ terhadap bidang ekuatorial dan $180^\\circ$ antar-aksial).
     - 3 posisi **Ekuatorial** (membentuk sudut $120^\\circ$ satu sama lain dan $90^\\circ$ terhadap posisi aksial).
2. **Evaluasi Tolakan Sudut Kritis ($90^\\circ$):**
   - Dalam teori VSEPR, tolakan pada sudut $\\geq 120^\\circ$ sangat kecil dan dapat diabaikan. Tolakan yang mendominasi destabilisasi energi molekul adalah **tolakan pada sudut siku-siku ($90^\\circ$)**.
   - **Kasus 1: Jika PEB diletakkan di posisi Aksial:**
     PEB akan berada pada sudut $90^\\circ$ terhadap ketiga ikatan ekuatorial.
     $$\\implies 3 \\text{ interaksi tolak } \\text{PEB-PEI } (90^\\circ)$$
   - **Kasus 2: Jika PEB diletakkan di posisi Ekuatorial:**
     PEB membentuk sudut $120^\\circ$ terhadap 2 ikatan ekuatorial lainnya (energi tolakan rendah) dan hanya membentuk sudut $90^\\circ$ terhadap 2 ikatan aksial (di atas dan di bawah).
     $$\\implies \\text{hanya } 2 \\text{ interaksi tolak } \\text{PEB-PEI } (90^\\circ)$$
3. **Kesimpulan Kestabilan:**
   - Karena $2 < 3$, susunan dengan PEB di posisi ekuatorial memiliki energi tolakan elektrostatik total yang jauh lebih rendah, sehingga menjadi struktur konformasi yang diadopsi di alam. Bentuk molekul aktual yang dihasilkan adalah **Jungkat-Jungkit (*Seesaw*)** dengan sudut ikatan aksial tertekan menjadi $173^\\circ$ ($< 180^\\circ$) dan sudut ekuatorial tertekan menjadi $102^\\circ$ ($< 120^\\circ$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['vsepr', 'aturan-bent', 'sf4-seesaw', 'posisi-ekuatorial-aksial', 'tolakan-peb'],
  },
  {
    id: 103010,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Gaya Antarmolekul & Anomali Titik Didih Hidrogen',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    diagram_url: '/diagrams/hydrogen-bonding-boiling-points.svg',
    title: 'Analisis Anomali Kurva Titik Didih Hidrida Biner Periode 2 Akibat Ikatan Hidrogen',
    question_text: `Berdasarkan grafik kurva titik didih hidrida biner terlampir, titik didih hidrida golongan 14 ($\\ce{CH4 -> SiH4 -> GeH4 -> SnH4}$) meningkat secara teratur seiring bertambahnya massa molar. Sebaliknya, pada golongan 15, 16, dan 17 terjadi lonjakan titik didih yang sangat anomali pada senyawa periode 2 ($\\ce{NH3, H2O, HF}$).

Pernyataan yang paling tepat untuk menjelaskan mengapa titik didih $\\ce{H2O}$ ($+100^\\circ\\text{C}$) jauh lebih tinggi daripada $\\ce{HF}$ ($+20^\\circ\\text{C}$), meskipun ikatan $\\ce{H-F}$ memiliki keelektronegatifan dan momen dipol ikatan individual yang lebih besar daripada ikatan $\\ce{O-H}$ adalah ....

A. Molekul $\\ce{H2O}$ memiliki massa molar yang jauh lebih besar daripada $\\ce{HF}$ sehingga gaya dispersi London $\\ce{H2O}$ mendominasi  
B. Setiap molekul $\\ce{H2O}$ memiliki jumlah atom donor hidrogen (2) dan akseptor PEB (2) yang seimbang sehingga rata-rata mampu membentuk jaringan 3 dimensi hingga 4 ikatan hidrogen per molekul, sedangkan $\\ce{HF}$ hanya mampu membentuk rata-rata 2 ikatan hidrogen per molekul  
C. Atom fluorin pada $\\ce{HF}$ tidak memiliki pasangan elektron bebas sehingga tidak dapat bertindak sebagai akseptor ikatan hidrogen  
D. Ikatan hidrogen pada $\\ce{H2O}$ bersifat kovalen murni, sedangkan pada $\\ce{HF}$ bersifat ionik  
E. Molekul $\\ce{HF}$ mengalami disosiasi sempurna menjadi ion $\\ce{H+}$ dan $\\ce{F-}$ dalam fase gas`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Pembentukan Ikatan Hidrogen Antarmolekul:**
   - Ikatan hidrogen membutuhkan dua komponen: **donor hidrogen** (atom $\\ce{H}$ yang terikat pada atom sangat elektronegatif $\\ce{N, O, F}$) dan **akseptor hidrogen** (pasangan elektron bebas/PEB pada atom $\\ce{N, O, F}$).
2. **Analisis Stoikiometri Ikatan Hidrogen pada $\\ce{HF}$:**
   - Molekul $\\ce{HF}$ memiliki 1 atom $\\ce{H}$ dan 3 PEB pada atom $\\ce{F}$.
   - Meskipun ikatan $\\ce{H-F}$ sangat polar (ikatan hidrogen individual $\\ce{F-H\\cdots F}$ adalah yang paling kuat energinya, $\\approx 29\\text{ kJ/mol}$), molekul $\\ce{HF}$ mengalami **keterbatasan jumlah atom hidrogen** (kekurangan donor).
   - Akibatnya, setiap molekul $\\ce{HF}$ rata-rata hanya dapat membentuk **2 ikatan hidrogen** per molekul, tersusun sebagai rantai zig-zag satu dimensi (1D).
3. **Analisis Stoikiometri Ikatan Hidrogen pada $\\ce{H2O}$:**
   - Molekul $\\ce{H2O}$ memiliki **2 atom $\\ce{H}$** dan **2 PEB** pada atom $\\ce{O}$.
   - Rasio donor dan akseptor bernilai $1:1$ (sempurna).
   - Setiap molekul $\\ce{H2O}$ mampu membentuk rata-rata **4 ikatan hidrogen** per molekul, menghasilkan jaringan kisi kristal tetrahedral 3 dimensi (3D) yang sangat ekstensif dan kokoh.
4. **Kesimpulan Energi Total:**
   - Energi total yang dibutuhkan untuk memutuskan 4 ikatan hidrogen pada $\\ce{H2O}$ ($4 \\times \\approx 21\\text{ kJ/mol} / 2$) jauh lebih besar daripada energi untuk memutuskan 2 ikatan hidrogen pada $\\ce{HF}$ ($2 \\times \\approx 29\\text{ kJ/mol} / 2$). Oleh karena itu, air memiliki titik didih yang jauh lebih tinggi ($+100^\\circ\\text{C}$ vs $+20^\\circ\\text{C}$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['ikatan-hidrogen', 'gaya-antarmolekul', 'titik-didih', 'anomali-air', 'stoikiometri-ikatan'],
  },
  {
    id: 103011,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Muatan Formal & Evaluasi Struktur Resonansi N2O',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Evaluasi Muatan Formal dan Kestabilan Tiga Struktur Resonansi Dinitrogen Monoksida',
    question_text: `Gas dinitrogen monoksida ($\\ce{N2O}$, gas gelak) memiliki susunan kerangka atom linear $\\ce{N-N-O}$ dengan nitrogen sebagai atom pusat. Terdapat tiga struktur resonansi Lewis kanonikal yang memenuhi kaidah oktet:
- Struktur A: $\\ce{N#N-O}$
- Struktur B: $\\ce{N=N=O}$
- Struktur C: $\\ce{N-N#O}$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Gambarkan secara lengkap ketiga struktur resonansi (A, B, dan C) lengkap dengan semua Pasangan Elektron Bebas (PEB) pada setiap atom!',
        points: 3,
        rubric: 'Struktur A: N terminal memiliki 1 PEB, N pusat 0 PEB, O memiliki 3 PEB (1 poin); Struktur B: N terminal 2 PEB, N pusat 0, O memiliki 2 PEB (1 poin); Struktur C: N terminal 3 PEB, N pusat 0, O memiliki 1 PEB (1 poin).',
        expected_answer: 'Struktur A: :N≡N-O::: ; Struktur B: ::N=N=O:: ; Struktur C: :::N-N≡O:'
      },
      {
        label: 'b',
        question_text: 'Hitung muatan formal ($FC$) dari atom nitrogen terminal, nitrogen pusat, dan oksigen untuk masing-masing struktur A, B, dan C!',
        points: 4,
        rubric: 'Struktur A: N_term = -1, N_pusat = +1, O = 0 salah perhitungan; yang benar N_term = 0, N_pusat = +1, O = -1 (1.5 poin); Struktur B: N_term = -1, N_pusat = +1, O = 0 (1.5 poin); Struktur C: N_term = -2, N_pusat = +1, O = +1 (1 poin).',
        expected_answer: 'Struktur A: N_term = 0, N_pusat = +1, O = -1; Struktur B: N_term = -1, N_pusat = +1, O = 0; Struktur C: N_term = -2, N_pusat = +1, O = +1.'
      },
      {
        label: 'c',
        question_text: 'Berdasarkan evaluasi muatan formal dan elektronegativitas (elektronegativitas $\\ce{O} = 3.44 > \\ce{N} = 3.04$), tentukan struktur mana yang merupakan kontributor mayor (paling stabil) dan kontributor paling minor (paling tidak stabil)! Berikan alasan ilmiahnya!',
        points: 3,
        rubric: 'Menetapkan Struktur A sebagai kontributor mayor karena muatan negatif berada pada atom O yang paling elektronegatif (1.5 poin); Menetapkan Struktur C sebagai kontributor paling minor karena pemisahan muatan besar (-2 dan +1) serta muatan positif berada pada atom O elektronegatif (1.5 poin).',
        expected_answer: 'Struktur A adalah kontributor mayor (muatan negatif pada atom O yang paling elektronegatif); Struktur C paling minor (muatan formal -2 pada N dan +1 pada O elektronegatif).'
      }
    ],
    expected_final_answer: 'Struktur A mayor (N=0, N=+1, O=-1); Struktur C paling minor (N=-2, N=+1, O=+1).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Struktur Lewis Lengkap (16 Elektron Valensi Total)**
   - Elektron valensi $= (2 \\times 5) + 6 = 16$ elektron (8 pasang).
   - **Struktur A:** $\\ce{:\\!N#N-O\\!:::}$
     - Atom $\\ce{N}$ terminal: 1 ikatan rangkap tiga ($3$ pasang) dan $1$ PEB ($2$ elektron).
     - Atom $\\ce{N}$ pusat: 4 ikatan (rangkap tiga ke N + tunggal ke O), 0 PEB.
     - Atom $\\ce{O}$: 1 ikatan tunggal ($1$ pasang) dan $3$ PEB ($6$ elektron).
   - **Struktur B:** $\\ce{::\\!N=N=O\\!::}$
     - Atom $\\ce{N}$ terminal: 1 ikatan rangkap dua ($2$ pasang) dan $2$ PEB ($4$ elektron).
     - Atom $\\ce{N}$ pusat: 4 ikatan (dua ikatan rangkap dua), 0 PEB.
     - Atom $\\ce{O}$: 1 ikatan rangkap dua ($2$ pasang) dan $2$ PEB ($4$ elektron).
   - **Struktur C:** $\\ce{:::\\!N-N#O\\!:}$
     - Atom $\\ce{N}$ terminal: 1 ikatan tunggal ($1$ pasang) dan $3$ PEB ($6$ elektron).
     - Atom $\\ce{N}$ pusat: 4 ikatan (tunggal ke N + rangkap tiga ke O), 0 PEB.
     - Atom $\\ce{O}$: 1 ikatan rangkap tiga ($3$ pasang) dan $1$ PEB ($2$ elektron).

2. **Sub-soal (b): Perhitungan Muatan Formal ($FC = V - LP - BP/2$)**
   - **Struktur A:**
     - $FC(\\ce{N}_{\\text{term}}) = 5 - 2 - 3 = 0$
     - $FC(\\ce{N}_{\\text{pusat}}) = 5 - 0 - 4 = +1$
     - $FC(\\ce{O}) = 6 - 6 - 1 = -1$
   - **Struktur B:**
     - $FC(\\ce{N}_{\\text{term}}) = 5 - 4 - 2 = -1$
     - $FC(\\ce{N}_{\\text{pusat}}) = 5 - 0 - 4 = +1$
     - $FC(\\ce{O}) = 6 - 4 - 2 = 0$
   - **Struktur C:**
     - $FC(\\ce{N}_{\\text{term}}) = 5 - 6 - 1 = -2$
     - $FC(\\ce{N}_{\\text{pusat}}) = 5 - 0 - 4 = +1$
     - $FC(\\ce{O}) = 6 - 2 - 3 = +1$

3. **Sub-soal (c): Evaluasi Kestabilan Kontributor Resonansi**
   - **Kontributor Mayor: Struktur A.** Baik struktur A maupun B memiliki pemisahan muatan kecil ($\\pm 1$). Namun pada struktur A, muatan formal negatif ($-1$) ditempatkan pada atom oksigen yang memiliki keelektronegatifan jauh lebih tinggi ($\\chi = 3.44$) dibandingkan nitrogen ($\\chi = 3.04$). Ini sesuai dengan aturan Pauling.
   - **Kontributor Paling Minor: Struktur C.** Struktur ini memiliki pemisahan muatan tinggi ($-2$ pada $\\ce{N}$), dan menempatkan muatan formal positif ($+1$) pada atom oksigen yang sangat elektronegatif. Hal ini sangat tidak disukai secara elektrostatik.`,
    solution_framework_template: `1. Penggambaran Pasangan Elektron Bebas (PEB) Struktur N2O:
• Distribusi 16 elektron valensi pada struktur A, B, dan C: ....

2. Penghitungan Muatan Formal Tiap Atom:
• Formula: FC = V - LP - (BP/2)
• Hasil perhitungan Struktur A (N_term, N_pusat, O): ....
• Hasil perhitungan Struktur B (N_term, N_pusat, O): ....
• Hasil perhitungan Struktur C (N_term, N_pusat, O): ....

3. Analisis Kestabilan Resonansi:
• Perbandingan nilai mutlak muatan formal: ....
• Kesesuaian letak muatan negatif dengan skala keelektronegatifan Pauling: ....
• Kesimpulan kontributor mayor dan minor: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['muatan-formal', 'resonansi-struktur', 'dinitrogen-monoksida', 'kontributor-mayor', 'aturan-oktet'],
  },
  {
    id: 103012,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'VSEPR Lanjutan & Geometri Interhalogen ClF3',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    diagram_url: '/diagrams/vsepr-bents-rule-geometry.svg',
    title: 'Analisis Geometri Domain Sterik 5 dan Sudut Ikatan pada Klorin Trifluorida (ClF3)',
    question_text: `Klorin trifluorida ($\\ce{ClF3}$) merupakan senyawa interhalogen yang sangat reaktif dan bertindak sebagai zat fluorinasi ekstrem. Molekul ini memiliki bilangan sterik $SN = 5$ pada atom pusat klorin.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung jumlah Pasangan Elektron Ikatan (PEI) dan Pasangan Elektron Bebas (PEB) pada atom klorin, tentukan tipe formulasi VSEPR ($AX_mE_n$), serta tentukan nama bentuk geometri molekul aktualnya!',
        points: 3,
        rubric: '3 PEI dan 2 PEB (1 poin); Tipe AX3E2 (1 poin); Nama geometri molekul Bentuk-T (T-shaped) (1 poin).',
        expected_answer: '3 PEI, 2 PEB, tipe formulasi AX3E2, bentuk molekul aktual Bentuk-T (T-shaped).'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan teori tolakan VSEPR dan diagram terlampir, jelaskan mengapa kedua PEB memilih menempati posisi ekuatorial dan bukan posisi aksial!',
        points: 4,
        rubric: 'Menjelaskan jika 2 PEB di ekuatorial, hanya ada 4 tolakan PEB-PEI 90° dan 0 tolakan PEB-PEB 90° (2 poin); Menjelaskan jika di aksial akan ada tolakan PEB-PEI 90° yang lebih banyak atau tolakan PEB-PEB 90° yang sangat destruktif (2 poin).',
        expected_answer: 'Penempatan 2 PEB di posisi ekuatorial meminimalkan tolakan sudut 90° (menghindari tolakan PEB-PEB 90° yang sangat kuat).'
      },
      {
        label: 'c',
        question_text: 'Sudut ikatan ideal antara ligan aksial dan ekuatorial pada kerangka bipiramida trigonal adalah $90^\\circ$. Apakah sudut ikatan $\\ce{F_{aksial}-Cl-F_{ekuatorial}}$ riil pada $\\ce{ClF3}$ tepat $90^\\circ$, lebih besar dari $90^\\circ$, atau lebih kecil dari $90^\\circ$? Berikan penjelasan berdasarkan tolakan PEB!',
        points: 3,
        rubric: 'Menyatakan sudut ikatan riil lebih kecil dari 90° (kira-kira 87.5°) (1.5 poin); Menjelaskan bahwa kedua PEB ekuatorial menolak kedua ikatan Cl-F aksial menjauhi bidang ekuatorial sehingga sudut F-Cl-F melengkung ke dalam (1.5 poin).',
        expected_answer: 'Sudut ikatan riil lebih kecil dari 90° (sekitar 87.5°) karena dorongan tolakan kuat dari kedua PEB ekuatorial menekan ikatan Cl-F aksial.'
      }
    ],
    expected_final_answer: 'AX3E2 (Bentuk-T); 2 PEB di ekuatorial meminimalkan tolakan 90°; Sudut ikatan < 90° (87.5°).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Formulasi VSEPR & Bentuk Molekul**
   - Atom pusat $\\ce{Cl}$ ($Z = 17$): Memiliki 7 elektron valensi.
   - Tiga atom $\\ce{F}$ masing-masing membentuk ikatan kovalen tunggal $\\implies 3$ PEI ($X = 3$).
   - Sisa elektron pada $\\ce{Cl} = 7 - 3 = 4$ elektron $\\implies 2$ PEB ($E = 2$).
   - Bilangan sterik: $SN = 3 + 2 = 5$ (Hibridisasi $sp^3d$).
   - Formulasi VSEPR: **$AX_3E_2$**.
   - Bentuk geometri molekul aktual: **Bentuk-T (*T-shaped*)**.

2. **Sub-soal (b): Rasionalisasi Alokasi 2 PEB pada Posisi Ekuatorial**
   - Tolakan yang paling mendestabilkan energi molekul adalah tolakan pada sudut siku-siku ($90^\\circ$).
   - Hierarki tolakan: $\\text{PEB-PEB} > \\text{PEB-PEI} > \\text{PEI-PEI}$.
   - **Jika kedua PEB diletakkan di Ekuatorial:**
     - Sudut antar-PEB adalah $120^\\circ$ (tolakan PEB-PEB $90^\\circ = 0$).
     - Setiap PEB ekuatorial berjarak $90^\\circ$ terhadap 2 ikatan aksial $\\implies$ Total $4$ tolakan PEB-PEI ($90^\\circ$).
   - **Jika satu PEB di Aksial dan satu di Ekuatorial:**
     - Terdapat 1 tolakan PEB-PEB pada sudut $90^\\circ$, yang secara termodinamika sangat tidak stabil.
   - **Jika kedua PEB di Aksial:**
     - Kedua PEB terpisah $180^\\circ$, tetapi masing-masing PEB berhadapan dengan 3 ikatan ekuatorial pada sudut $90^\\circ$ $\\implies$ Total $6$ tolakan PEB-PEI ($90^\\circ$).
   - Oleh karena itu, susunan dengan **kedua PEB di posisi ekuatorial** memberikan energi tolakan elektrostatik minimum.

3. **Sub-soal (c): Distorsi Sudut Ikatan Riil**
   - Sudut ikatan $\\ce{F_{aksial}-Cl-F_{ekuatorial}}$ riil bernilai **lebih kecil dari $90^\\circ$** (hasil pengukuran kristalografi menunjukkan sudut sebesar **$87.5^\\circ$**).
   - **Penyebab Fisik:** Kedua pasangan elektron bebas di ekuatorial memiliki awan elektron yang sangat besar dan tolak-menolak dengan kuat. Tolakan PEB ini menekan kedua ikatan kovalen $\\ce{Cl-F}$ aksial melengkung menjauh dari bidang ekuatorial (menuju ke arah ikatan $\\ce{Cl-F}$ ekuatorial tunggal). Akibatnya, sudut aksial $\\ce{F_{aks}-Cl-F_{aks}}$ menyusut dari $180^\\circ$ menjadi $175^\\circ$, dan sudut $\\ce{F_{aks}-Cl-F_{ek}}$ menyusut menjadi $87.5^\\circ$.`,
    solution_framework_template: `1. Penentuan Domain Elektron & Tipe VSEPR:
• Elektron valensi klorin dan pembentukan 3 ikatan: ....
• Penghitungan PEB dan tipe AXmEn: ....
• Kesimpulan nama geometri molekul ClF3: ....

2. Komparasi Energi Penempatan PEB (Aksial vs Ekuatorial):
• Analisis jumlah interaksi tolak menolak pada sudut 90°: ....
• Prioritas penghindaran tolakan PEB-PEB pada sudut 90°: ....

3. Analisis Sudut Ikatan Aktual:
• Perbandingan sudut ideal (90°) vs sudut terdistorsi: ....
• Pengaruh dorongan awan elektron PEB terhadap ligan aksial: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['vsepr', 'clf3-t-shape', 'sudut-ikatan-terdistorsi', 'aturan-bent', 'posisi-ekuatorial'],
  },
  {
    id: 103013,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Teori Ikatan Valensi & Persentase Karakter-s',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Korelasi Hibridisasi, Persentase Karakter-s, Panjang Ikatan, dan Keasaman Hidrokarbon',
    question_text: `Tiga molekul hidrokarbon sederhana rantai terbuka memiliki tipe hibridisasi atom karbon yang berbeda:
1. Etana ($\\ce{CH3-CH3}$)
2. Etena ($\\ce{CH2=CH2}$)
3. Etuna ($\\ce{CH#CH}$)`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan tipe hibridisasi orbital atom karbon, persentase karakter orbital-$s$, serta besar sudut ikatan ideal di sekitar atom karbon pada etana, etena, dan etuna!',
        points: 3,
        rubric: 'Etana: sp3, 25% s, 109.5° (1 poin); Etena: sp2, 33.3% s, 120° (1 poin); Etuna: sp, 50% s, 180° (1 poin).',
        expected_answer: 'Etana: sp3 (25% s, 109.5°); Etena: sp2 (33.3% s, 120°); Etuna: sp (50% s, 180°).'
      },
      {
        label: 'b',
        question_text: 'Urutkan ketiga molekul tersebut berdasarkan panjang ikatan karbon-karbon (ikatan antar-atom $\\ce{C}$) dari yang terpanjang ke terpendek! Jelaskan hubungan antara persentase karakter-$s$ dengan panjang ikatan kovalen tersebut!',
        points: 4,
        rubric: 'Urutan: Etana > Etena > Etuna (1.5 poin); Menjelaskan makin tinggi karakter-s, orbital hibrida makin bulat dan mendekat ke inti atom sehingga overlap orbital lebih dekat dan ikatan makin pendek (2.5 poin).',
        expected_answer: 'Panjang ikatan: Etana (tunggal, 154 pm) > Etena (rangkap dua, 134 pm) > Etuna (rangkap tiga, 120 pm). Karakter-s lebih tinggi membuat awan elektron lebih ditarik ke inti sehingga ikatan memendek.'
      },
      {
        label: 'c',
        question_text: 'Proton pada etuna bersifat asam lemah ($pK_a \\approx 25$) sehingga dapat dihilangkan oleh basa kuat seperti $\\ce{NaNH2}$, sedangkan etana praktis tidak bersifat asam ($pK_a \\approx 50$). Rasionalisasikan perbedaan keasaman yang sangat drastis ini berdasarkan persentase karakter-$s$ orbital hibrida karbon!',
        points: 3,
        rubric: 'Menjelaskan basa konjugat etunil (-C≡C:) memiliki PEB pada orbital sp dengan 50% karakter-s (1.5 poin); Elektron pada orbital dengan karakter-s tinggi berada lebih dekat ke muatan inti positif karbon sehingga muatan negatif anion lebih terstabilkan (1.5 poin).',
        expected_answer: 'Anion etunil memiliki PEB pada orbital sp (50% s) yang berada dekat inti karbon, menstabilkan muatan negatif basa konjugatnya sehingga etuna jauh lebih asam daripada etana.'
      }
    ],
    expected_final_answer: 'sp3 (25% s) < sp2 (33.3% s) < sp (50% s); Panjang C-C: Etana > Etena > Etuna; Etuna paling asam karena stabilitas orbital sp menahan muatan negatif.',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Hibridisasi & Karakter Orbital-$s$**
   - **Etana ($\\ce{C2H6}$):** Hibridisasi **$sp^3$**. Terdiri dari 1 bagian $s$ dan 3 bagian $p$ $\\implies \\% s = \\frac{1}{4} \\times 100\\% = \\mathbf{25\\%}$. Sudut ikatan ideal: **$109.5^\\circ$**.
   - **Etena ($\\ce{C2H4}$):** Hibridisasi **$sp^2$**. Terdiri dari 1 bagian $s$ dan 2 bagian $p$ $\\implies \\% s = \\frac{1}{3} \\times 100\\% = \\mathbf{33.3\\%}$. Sudut ikatan ideal: **$120^\\circ$**.
   - **Etuna ($\\ce{C2H2}$):** Hibridisasi **$sp$**. Terdiri dari 1 bagian $s$ dan 1 bagian $p$ $\\implies \\% s = \\frac{1}{2} \\times 100\\% = \\mathbf{50\\%}$. Sudut ikatan ideal: **$180^\\circ$**.

2. **Sub-soal (b): Hubungan Karakter-$s$ dengan Panjang Ikatan**
   - **Urutan Panjang Ikatan:** $\\mathbf{\\ce{C-C} \\text{ (Etana, } 154\\text{ pm}) > \\ce{C=C} \\text{ (Etena, } 134\\text{ pm}) > \\ce{C#C} \\text{ (Etuna, } 120\\text{ pm})}$.
   - **Penjelasan Kuantum:** Orbital $s$ memiliki fungsi gelombang yang berbentuk bola simetris dan terkonsentrasi jauh lebih dekat ke inti atom dibandingkan orbital $p$ yang berbentuk cuping memanjang. Semakin besar persentase karakter-$s$ suatu orbital hibrida ($sp > sp^2 > sp^3$), awan elektron ikatan ditarik semakin kuat dan semakin rapat ke inti atom. Akibatnya, jari-jari kovalen efektif atom karbon mengecil dan panjang ikatan kovalen menjadi semakin pendek dan kuat.

3. **Sub-soal (c): Rasionalisasi Keasaman Relatif ($pK_a$)**
   - Keasaman asam Brønsted ditentukan oleh **kestabilan basa konjugatnya** (anion yang terbentuk setelah melepas proton $\\ce{H+}$).
   - Pelepasan proton dari etuna menghasilkan anion asetilida / etunil: $\\ce{H-C#C:-}$. Pasangan elektron bebas (muatan negatif) pada anion ini menempati **orbital hibrida $sp$** (karakter-$s$ $50\\%$).
   - Karena orbital $sp$ memiliki persentase karakter-$s$ paling tinggi, muatan negatif tersebut berada sangat dekat dengan muatan positif inti atom karbon. Tarikan elektrostatis inti yang efektif ini menstabilkan muatan negatif anion secara luar biasa.
   - Pada etana, anion etil ($\\ce{CH3-CH2:-}$) menempatkan muatan negatif pada orbital $sp^3$ (hanya $25\\%$ karakter-$s$, berkarakter-$p$ tinggi dan jauh dari inti), sehingga anion sangat tidak stabil. Oleh karena itu, etuna ($pK_a \\approx 25$) jutaan kali lebih asam daripada etana ($pK_a \\approx 50$).`,
    solution_framework_template: `1. Klasifikasi Hibridisasi dan Fraksi Orbital-s:
• Penghitungan persentase karakter-s (sp3, sp2, sp): ....
• Sudut ikatan ideal masing-masing hidrokarbon: ....

2. Hubungan Karakter-s terhadap Panjang Ikatan:
• Karakteristik spasial orbital s vs orbital p: ....
• Urutan panjang ikatan C-C (etana, etena, etuna): ....

3. Teori Kestabilan Basa Konjugat & Keasaman:
• Evaluasi orbital penampung PEB pada anion basa konjugat: ....
• Efek tarikan inti atom karbon pada orbital sp terhadap muatan negatif: ....
• Kesimpulan perbandingan nilai pKa: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['hibridisasi-orbital', 'karakter-s', 'panjang-ikatan', 'keasaman-hidrokarbon', 'ikatan-sigma-pi'],
  },
  {
    id: 103014,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Gaya Antarmolekul Intramolekul vs Intermolekul',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Komparatif Ikatan Hidrogen Intramolekul dan Intermolekul pada Isomer Nitrofenol',
    question_text: `Dua senyawa turunan benzena, yaitu *orto*-nitrofenol (*o*-nitrofenol) dan *para*-nitrofenol (*p*-nitrofenol), memiliki rumus molekul identik ($\\ce{C6H5NO3}$), namun memiliki sifat fisik yang sangat kontras:
- *o*-nitrofenol: Titik leleh $45^\\circ\\text{C}$, titik didih $216^\\circ\\text{C}$, mudah menguap (dapat dipisahkan dengan distilasi uap), dan kelarutan dalam air rendah ($0.2\\text{ g}/100\\text{ mL}$).
- *p*-nitrofenol: Titik leleh $114^\\circ\\text{C}$, titik didih $279^\\circ\\text{C}$, tidak volatil pada distilasi uap, dan kelarutan dalam air jauh lebih tinggi ($1.6\\text{ g}/100\\text{ mL}$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan jenis ikatan hidrogen yang terbentuk pada masing-masing isomer (*orto* vs *para*), dengan mempertimbangkan posisi spasial gugus hidroksil ($\\ce{-OH}$) dan gugus nitro ($\\ce{-NO2}$)!',
        points: 3,
        rubric: 'Menjelaskan o-nitrofenol membentuk ikatan hidrogen intramolekul (dalam satu molekul) (1.5 poin); Menjelaskan p-nitrofenol membentuk ikatan hidrogen intermolekul (antar-molekul berbeda) (1.5 poin).',
        expected_answer: 'o-Nitrofenol membentuk ikatan hidrogen intramolekul (posisi berdekatan 1,2); p-nitrofenol membentuk ikatan hidrogen intermolekul (posisi berseberangan 1,4).'
      },
      {
        label: 'b',
        question_text: 'Mengapa keberadaan ikatan hidrogen intramolekul pada *o*-nitrofenol menyebabkan titik didihnya jauh lebih rendah dan sifatnya sangat volatil dibandingkan *p*-nitrofenol?',
        points: 4,
        rubric: 'Menjelaskan ikatan hidrogen intramolekul mengunci donor H dan akseptor O dalam cincin kelat internal (2 poin); Gaya tarik antar-molekul o-nitrofenol hanya gaya Van der Waals lemah, sedangkan p-nitrofenol terikat polimerik oleh ikatan hidrogen intermolekul kuat (2 poin).',
        expected_answer: 'Ikatan hidrogen intramolekul mengurung kutub polar di dalam molekul itu sendiri sehingga interaksi antar-molekulnya lemah (hanya Van der Waals), membuat titik didihnya lebih rendah.'
      },
      {
        label: 'c',
        question_text: 'Rasionalisasikan mengapa *p*-nitrofenol memiliki kelarutan dalam air yang jauh lebih tinggi daripada *o*-nitrofenol!',
        points: 3,
        rubric: 'Menjelaskan pada o-nitrofenol gugus -OH sudah terlibat ikatan internal sehingga sulit berikatan hidrogen dengan air (1.5 poin); Pada p-nitrofenol gugus -OH dan -NO2 bebas berinteraksi membentuk ikatan hidrogen dengan molekul pelarut air (1.5 poin).',
        expected_answer: 'Gugus hidroksil pada p-nitrofenol bebas membentuk ikatan hidrogen dengan molekul air, sedangkan pada o-nitrofenol gugus -OH terkunci oleh ikatan hidrogen internal.'
      }
    ],
    expected_final_answer: 'o-Nitrofenol: Ikatan hidrogen intramolekul (titik didih rendah, volatil); p-Nitrofenol: Ikatan hidrogen intermolekul (titik didih tinggi, larut air).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Identifikasi Posisi Spasial & Jenis Ikatan Hidrogen**
   - Pada ***orto*-nitrofenol (1,2-nitrofenol):** Gugus donor hidrogen ($\\ce{-OH}$) dan gugus akseptor nitro ($\\ce{-NO2}$) terletak bersebelahan pada cincin benzena. Jarak antar-atom yang sangat dekat memungkinkan terbentuknya cincin kelat beranggotakan 6 atom yang stabil melalui **ikatan hidrogen intramolekul** (terjadi di dalam satu molekul yang sama: $\\ce{O-H\\cdots O=N}$).
   - Pada ***para*-nitrofenol (1,4-nitrofenol):** Gugus $\\ce{-OH}$ dan gugus $\\ce{-NO2}$ berada pada posisi yang saling berseberangan ($180^\\circ$). Jarak spasialnya terlalu jauh untuk berinteraksi internal. Akibatnya, molekul ini membentuk **ikatan hidrogen intermolekul** (gaya tarik ikatan hidrogen antar-molekul $\\ce{p-nitrofenol}$ yang bertetangga membentuk rantai asosiasi polimerik).

2. **Sub-soal (b): Rasionalisasi Titik Didih dan Volatilitas**
   - **Titik didih** suatu cairan ditentukan oleh besarnya energi yang diperlukan untuk mengatasi **gaya tarik antarmolekul**.
   - Pada *o*-nitrofenol, karena gugus polar $\\ce{-OH}$ dan $\\ce{-NO2}$ saling "menetralkan" dan terikat secara internal, molekul ini bersikap seperti molekul nonpolar/kuasi-sferis terisolasi. Gaya tarik antar-molekulnya didominasi hanya oleh gaya dispersi London dan dipol lemah. Akibatnya, molekul mudah terlepas ke fase gas (volatil) dan mendidih pada suhu lebih rendah ($216^\\circ\\text{C}$).
   - Pada *p*-nitrofenol, ikatan hidrogen intermolekul mengikat molekul-molekul secara kuat satu sama lain menjadi jaringan asosiasi yang kokoh. Diperlukan energi termal yang jauh lebih tinggi untuk memutuskan ikatan hidrogen antarmolekul tersebut, sehingga titik didihnya melonjak tinggi menjadi $279^\\circ\\text{C}$ dan tidak dapat menguap pada distilasi uap biasa.

3. **Sub-soal (c): Rasionalisasi Kelarutan dalam Pelarut Air**
   - Kelarutan dalam air bergantung pada kemampuan zat terlarut untuk membentuk ikatan hidrogen baru dengan molekul pelarut $\\ce{H2O}$.
   - Pada *o*-nitrofenol, proton hidrogen pada gugus $\\ce{-OH}$ sudah "terkunci" kuat oleh atom oksigen gugus nitro internalnya sendiri, sehingga tidak tersedia secara bebas untuk berikatan hidrogen dengan air (kelarutan rendah).
   - Pada *p*-nitrofenol, gugus $\\ce{-OH}$ dan $\\ce{-NO2}$ terbuka bebas ke lingkungan luar, memungkinkan terbentuknya banyak ikatan hidrogen yang kuat dan stabil dengan molekul air, menghasilkan kelarutan yang jauh lebih besar.`,
    solution_framework_template: `1. Analisis Spasial Isomer Orto vs Para:
• Penggambaran orientasi gugus -OH dan -NO2 pada cincin benzena: ....
• Pembentukan cincin kelat 6-atom (ikatan hidrogen intramolekul) pada isomer orto: ....
• Keterlibatan ikatan hidrogen antar-molekul (intermolekul) pada isomer para: ....

2. Evaluasi Gaya Tarik Antarmolekul Terhadap Titik Didih:
• Pengaruh isolasi muatan kutub polar pada o-nitrofenol: ....
• Asosiasi rantai molekuler pada p-nitrofenol: ....
• Kesimpulan perbedaan titik leleh, titik didih, dan volatilitas distilasi uap: ....

3. Analisis Interaksi Solvasi dengan Pelarut Air:
• Ketersediaan proton -OH bebas untuk solvasi air pada isomer para: ....
• Efek pemblokiran ikatan hidrogen internal pada kelarutan isomer orto: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['ikatan-hidrogen', 'intramolekul-vs-intermolekul', 'nitrofenol', 'titik-didih', 'kelarutan'],
  },
  {
    id: 103015,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Geometri Senyawa Gas Mulia XeF4',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Hibridisasi, Geometri Domain Elektron, dan Momen Dipol Xenon Tetrafluorida',
    question_text: `Unsur gas mulia xenon ($Z = 54$) dapat dipaksa bereaksi dengan gas fluorin ($Z = 9$) pada suhu dan tekanan tinggi menghasilkan senyawa kristal putih xenon tetrafluorida ($\\ce{XeF4}$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Gambarkan struktur Lewis $\\ce{XeF4}$ dan hitung jumlah total elektron valensi yang mengelilingi atom pusat xenon! Apakah senyawa ini mematuhi kaidah oktet?',
        points: 3,
        rubric: 'Struktur Lewis benar dengan 4 ikatan tunggal Xe-F dan 2 PEB pada Xe (1.5 poin); Menghitung 12 elektron valensi pada Xe (oktet diperluas / hipervalen) (1.5 poin).',
        expected_answer: 'Xe dikelilingi oleh 12 elektron valensi (4 ikatan Xe-F dan 2 PEB) sehingga merupakan spesi oktet diperluas (hipervalen).'
      },
      {
        label: 'b',
        question_text: 'Tentukan bilangan sterik ($SN$), hibridisasi orbital valensi atom $\\ce{Xe}$, geometri domain elektron (geometri dasar), serta bentuk molekul aktual dari $\\ce{XeF4}$!',
        points: 4,
        rubric: 'SN = 6, hibridisasi sp3d2 (1.5 poin); Geometri domain elektron oktahedral (1 poin); Bentuk molekul aktual Bujursangkar Datar / Segiempat Datar (Square Planar, AX4E2) (1.5 poin).',
        expected_answer: 'SN = 6, hibridisasi sp3d2, geometri domain elektron oktahedral, bentuk molekul aktual bujursangkar datar (square planar, AX4E2).'
      },
      {
        label: 'c',
        question_text: 'Ikatan kovalen $\\ce{Xe-F}$ sangat polar karena perbedaan elektronegativitas yang besar ($\\Delta \\chi \\approx 1.4$). Apakah molekul $\\ce{XeF4}$ bersifat polar atau nonpolar? Buktikan jawaban Anda dengan analisis penjumlahan vektor momen dipol!',
        points: 3,
        rubric: 'Menyatakan XeF4 bersifat nonpolar (1 poin); Menjelaskan bahwa keempat ikatan Xe-F bujursangkar simetris saling meniadakan secara vektor (180°) dan kedua PEB pada posisi aksial berlawanan juga saling meniadakan sehingga resultan momen dipol = 0 (2 poin).',
        expected_answer: 'Nonpolar (momen dipol netto = 0). Keempat vektor ikatan Xe-F bujursangkar dan kedua PEB aksial saling meniadakan secara simetris.'
      }
    ],
    expected_final_answer: 'XeF4 hipervalen (12 e-); Hibridisasi sp3d2, bentuk Bujursangkar Datar (Square Planar, AX4E2); Bersifat Nonpolar (vektor saling meniadakan).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Struktur Lewis & Pengecualian Oktet**
   - **Elektron Valensi:** Atom Xenon (golongan gas mulia VIIIA) memiliki $8$ elektron valensi. Empat atom Fluorin masing-masing memiliki $7$ elektron valensi.
   - **Total Elektron Valensi:** $8 + (4 \\times 7) = 36$ elektron (18 pasang).
   - **Alokasi Elektron:** 4 pasang digunakan untuk membentuk 4 ikatan tunggal $\\ce{Xe-F}$ ($8$ elektron). Masing-masing atom $\\ce{F}$ dilengkapi dengan 3 PEB ($4 \\times 6 = 24$ elektron). Sisa elektron $= 36 - (8 + 24) = 4$ elektron (2 pasang), ditempatkan pada atom pusat $\\ce{Xe}$ sebagai **2 Pasangan Elektron Bebas (PEB)**.
   - **Jumlah Elektron pada $\\ce{Xe}$:** $(4 \\times 2) + 4 = \\mathbf{12\\text{ elektron valensi}}$.
   - Senyawa ini melanggar kaidah oktet dan tergolong **oktet diperluas (*expanded octet* / hipervalen)**, yang dimungkinkan karena atom Xenon berada pada periode 5 dan memiliki orbital subkulit $d$ kosong yang dapat berpartisipasi dalam ikatan valensi.

2. **Sub-soal (b): Bilangan Sterik, Hibridisasi, & Geometri Molekul**
   - Domain ikatan (PEI) $= 4$, Domain elektron bebas (PEB) $= 2$.
   - Bilangan sterik: $SN = 4 + 2 = \\mathbf{6}$.
   - Tipe formulasi VSEPR: **$AX_4E_2$**.
   - Hibridisasi orbital valensi: **$sp^3d^2$**.
   - Geometri domain elektron (susunan 6 awan elektron): **Oktahedral**.
   - **Penempatan PEB:** Untuk meminimalkan tolakan elektrostatik, kedua PEB menempati posisi yang saling berlawanan arah ($180^\\circ$, posisi *trans* aksial).
   - Bentuk molekul aktual (hanya melihat posisi atom ligan terikat): **Bujursangkar Datar (*Square Planar*)**.

3. **Sub-soal (c): Analisis Kepolaran & Momen Dipol Vektor**
   - Molekul $\\ce{XeF4}$ bersifat **NONPOLAR** (momen dipol resultan $\\vec{\\mu}_{\\text{net}} = 0$).
   - **Pembuktian Vektor:**
     1. Keempat atom fluorin membentuk geometri bujursangkar sempurna pada bidang datar dengan sudut $\\ce{F-Xe-F} = 90^\\circ$ dan $180^\\circ$. Dua pasang vektor ikatan $\\ce{Xe-F}$ yang saling berhadapan ($180^\\circ$) memiliki besar muatan dan panjang yang identik sehingga saling menghilangkan secara sempurna:
        $$\\vec{\\mu}_{\\ce{Xe-F1}} + \\vec{\\mu}_{\\ce{Xe-F3}} = 0 \\quad \\text{dan} \\quad \\vec{\\mu}_{\\ce{Xe-F2}} + \\vec{\\mu}_{\\ce{Xe-F4}} = 0$$
     2. Kedua pasangan elektron bebas (PEB) terletak tepat berseberangan di atas dan di bawah bidang datar ($180^\\circ$), sehingga momen dipol PEB juga saling meniadakan secara vektor.
     3. Akibat simetri sentral titik inversi ($D_{4h}$), total momen dipol molekul adalah nol mutlak.`,
    solution_framework_template: `1. Analisis Struktur Lewis dan Hipervalensi:
• Perhitungan total 36 elektron valensi: ....
• Penggambaran 4 ikatan Xe-F dan 2 PEB pada atom Xe: ....
• Kesimpulan fenomena oktet diperluas (12 elektron): ....

2. Penentuan Parameter VSEPR:
• Penghitungan bilangan sterik SN = 6 dan hibridisasi sp3d2: ....
• Geometri domain elektron (oktahedral): ....
• Penempatan 2 PEB trans aksial dan kesimpulan bentuk Bujursangkar Datar: ....

3. Pembuktian Kepolaran Berdasarkan Vektor Momen Dipol:
• Analisis pembatalan vektor dipol ikatan Xe-F bujursangkar: ....
• Analisis pembatalan vektor momen dipol kedua PEB: ....
• Kesimpulan sifat kepolaran molekul (nonpolar): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['senyawa-gas-mulia', 'xef4-square-planar', 'oktet-diperluas', 'momen-dipol-nol', 'hibridisasi-sp3d2'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 103001 - 103025)
  // =========================================================================
  {
    id: 103016,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Teori Orbital Molekul (MOT) Spesi Oksigen Diatomik',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    diagram_url: '/diagrams/mot-energy-diagram-o2.svg',
    title: 'Penentuan Orde Ikatan, Panjang Ikatan, dan Kemagnetan Deret Spesi Diatomik Oksigen',
    question_text: `Berdasarkan diagram tingkat energi Teori Orbital Molekul (MOT) untuk spesi diatomik oksigen terlampir, perhatikan deret spesi oksigen berikut:
(1) $\\ce{O2^2+}$  
(2) $\\ce{O2+}$  
(3) $\\ce{O2}$  
(4) $\\ce{O2-}$ (anion superoksida)  
(5) $\\ce{O2^2-}$ (anion peroksida)  

Spesi yang memiliki ikatan kimia **paling pendek**, energi disosiasi ikatan paling besar, serta bersifat **diamagnetik** (semua elektron berpasangan) adalah ....

A. $\\ce{O2^2+}$  
B. $\\ce{O2+}$  
C. $\\ce{O2}$  
D. $\\ce{O2-}$  
E. $\\ce{O2^2-}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Urutan Tingkat Energi Orbital Molekul $\\ce{O2}$ (tanpa percampuran $s\\text{-}p$ yang signifikan):**
   $$\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p_z} < (\\pi_{2p_x} = \\pi_{2p_y}) < (\\pi^*_{2p_x} = \\pi^*_{2p_y}) < \\sigma^*_{2p_z}$$

2. **Pengisian Elektron Valensi & Perhitungan Orde Ikatan ($BO = \\frac{N_b - N_a}{2}$):**
   - **(1) Spesi $\\ce{O2^2+}$ (10 elektron valensi):**
     - Konfigurasi: $\\sigma_{2s}^2\\, \\sigma^{*2}_{2s}\\, \\sigma_{2p_z}^2\\, \\pi_{2p_x}^2\\, \\pi_{2p_y}^2$
     - Elektron ikatan ($N_b$) $= 8$ (di $\\sigma_{2s}, \\sigma_{2p_z}, \\pi_{2p}$), Elektron anti-ikatan ($N_a$) $= 2$ (di $\\sigma^*_{2s}$).
     - $BO = \\frac{8 - 2}{2} = \\mathbf{3.0}$ (ikatan rangkap tiga).
     - Sifat Magnetik: **Diamagnetik** (seluruh 10 elektron berpasangan).
   - **(2) Spesi $\\ce{O2+}$ (11 elektron valensi):**
     - Konfigurasi: $[\\text{core}]\\, \\pi^*_{2p_x}^1$
     - $BO = \\frac{8 - 3}{2} = \\mathbf{2.5}$.
     - Sifat Magnetik: **Paramagnetik** (1 elektron tak berpasangan).
   - **(3) Spesi $\\ce{O2}$ (12 elektron valensi):**
     - Konfigurasi: $[\\text{core}]\\, \\pi^*_{2p_x}^1\\, \\pi^*_{2p_y}^1$
     - $BO = \\frac{8 - 4}{2} = \\mathbf{2.0}$.
     - Sifat Magnetik: **Paramagnetik** (2 elektron tak berpasangan sesuai Aturan Hund).
   - **(4) Spesi $\\ce{O2-}$ (13 elektron valensi):**
     - Konfigurasi: $[\\text{core}]\\, \\pi^*_{2p_x}^2\\, \\pi^*_{2p_y}^1$
     - $BO = \\frac{8 - 5}{2} = \\mathbf{1.5}$.
     - Sifat Magnetik: **Paramagnetik** (1 elektron tak berpasangan).
   - **(5) Spesi $\\ce{O2^2-}$ (14 elektron valensi):**
     - Konfigurasi: $[\\text{core}]\\, \\pi^*_{2p_x}^2\\, \\pi^*_{2p_y}^2$
     - $BO = \\frac{8 - 6}{2} = \\mathbf{1.0}$.
     - Sifat Magnetik: **Diamagnetik** (seluruh elektron berpasangan).

3. **Korelasi Orde Ikatan, Panjang Ikatan, & Energi Disosiasi:**
   - Semakin besar nilai Orde Ikatan ($BO$), tarikan antar-inti semakin kuat sehingga **energi disosiasi ikatan semakin besar** dan **panjang ikatan semakin pendek**:
     $$\\text{Orde Ikatan: } \\ce{O2^2+} (3.0) > \\ce{O2+} (2.5) > \\ce{O2} (2.0) > \\ce{O2-} (1.5) > \\ce{O2^2-} (1.0)$$
     $$\\text{Panjang Ikatan: } \\ce{O2^2+} (104\\text{ pm}) < \\ce{O2+} (112\\text{ pm}) < \\ce{O2} (121\\text{ pm}) < \\ce{O2-} (128\\text{ pm}) < \\ce{O2^2-} (149\\text{ pm})$$
   - Di antara spesi yang diamagnetik ($\\ce{O2^2+}$ dan $\\ce{O2^2-}$), spesi $\\mathbf{\\ce{O2^2+}}$ memiliki $BO = 3.0$ (tertinggi), ikatan paling pendek, dan energi ikatan paling besar.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['teori-orbital-molekul-mot', 'orde-ikatan', 'paramagnetik', 'diamagnetik', 'deret-spesi-oksigen'],
  },
  {
    id: 103017,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'MOT Diatomik Heteronuklir & Karakter HOMO-LUMO Karbon Monoksida',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Karakter Orbital HOMO-LUMO Karbon Monoksida dan Asal Sifat Donor Basa Lewis',
    question_text: `Gas karbon monoksida ($\\ce{CO}$) merupakan ligan $\\sigma$-donor dan $\\pi$-akseptor yang sangat kuat dalam kimia koordinasi senyawa kompleks logam transisi (seperti pada senyawa beracun nikel tetrakarbonil, $\\ce{Ni(CO)4}$). Berdasarkan Teori Orbital Molekul (MOT) untuk molekul diatomik heteronuklir, atom yang bertindak sebagai situs pendonor pasangan elektron $\\sigma$ ke orbital kosong logam serta orbital molekul tertinggi yang terisi elektron (HOMO) adalah ....

A. Atom oksigen, melalui orbital ikatan $\\pi_{2p}$ yang memiliki energi terendah  
B. Atom oksigen, karena oksigen memiliki keelektronegatifan lebih tinggi sehingga menarik pasangan elektron lebih rapat  
C. Atom karbon, melalui orbital HOMO $\\sigma_{2s}^*$ (sering disebut $\\sigma_{nb}$ / non-bonding) yang kerapatan awan elektronnya terpolarisasi kuat mengarah ke luar atom karbon  
D. Atom karbon, melalui orbital anti-ikatan $\\pi^*_{2p}$ yang kosong  
E. Kedua atom karbon dan oksigen mendonorkan pasangan elektron secara simetris melalui orbital $\\sigma_{2s}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Diagram MOT Diatomik Heteronuklir $\\ce{CO}$ (10 Elektron Valensi):**
   - Atom Oksigen ($\\chi = 3.44$) jauh lebih elektronegatif daripada atom Karbon ($\\chi = 2.55$), sehingga tingkat energi orbital atomik $\\ce{O}$ ($2s$ dan $2p$) terletak **jauh lebih rendah** daripada orbital atomik $\\ce{C}$.
   - Urutan orbital molekul $\\ce{CO}$:
     $$\\sigma_{2s}^2 \\;(\\text{karakter O dominan}) \\longrightarrow \\sigma_{2s}^{*2} \\;(\\text{karakter C dominan}) \\longrightarrow \\pi_{2p_x}^2 = \\pi_{2p_y}^2 \\longrightarrow \\sigma_{2p_z}^2 \\;(\\text{atau } 3\\sigma^2 \\to 4\\sigma^2 \\to 1\\pi^4 \\to 5\\sigma^2)$$
2. **Karakteristik Orbital HOMO (Highest Occupied Molecular Orbital):**
   - Orbital molekul berenergi tertinggi yang terisi elektron (HOMO) pada $\\ce{CO}$ adalah orbital **$5\\sigma$** (secara formal diturunkan dari kombinasi antibonding $\\sigma_{2s}^*$, namun akibat mixing kuat dengan orbital $2p_z$ karbon, orbital ini berubah sifat menjadi orbital non-ikatan / *weakly bonding*).
   - Karena tingkat energi orbital $5\\sigma$ ini sangat dekat dengan energi orbital $2p_z$ atom karbon, perhitungan fungsi gelombang kuantum menunjukkan bahwa **sekitar $80\\%$ kerapatan awan elektron HOMO terkonsentrasi pada atom karbon**, membentuk cuping besar yang menjulur ke luar menjauhi ikatan $\\ce{C-O}$.
3. **Mekanisme Koordinasi ke Logam (Ikatan Sinergis Dewar-Chatt-Duncanson):**
   - Karena cuping awan elektron HOMO berada di atom karbon dan berenergi paling tinggi (paling mudah didonorkan), atom karbon bertindak sebagai **Basa Lewis $\\sigma$-donor** yang mendonorkan pasangan elektronnya ke orbital $d$ kosong logam transisi:
     $$\\ce{M <- :C#O:}$$
   - (Selanjutnya, orbital $\\pi^*$ kosong milik $\\ce{CO}$ / LUMO bertindak sebagai $\\pi$-akseptor yang menerima *back-bonding* dari elektron $d$ logam). Jadi, donor utama selalu terjadi melalui **atom karbon** melalui orbital HOMO $\\sigma$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['teori-orbital-molekul-mot', 'karbon-monoksida-co', 'homo-lumo', 'ligan-logam-karbonil', 'diatomik-heteronuklir'],
  },
  {
    id: 103018,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Aturan Bent (Bent\'s Rule) & Kerangka Trigonal Bipiramidal',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    diagram_url: '/diagrams/vsepr-bents-rule-geometry.svg',
    title: 'Aplikasi Aturan Bent pada Penentuan Isomer Paling Stabil dan Panjang Ikatan PF3Cl2',
    question_text: `Senyawa fosfor trifluorodiklorida ($\\ce{PF3Cl2}$) memiliki geometri dasar bipiramida trigonal ($sp^3d$). Berdasarkan **Aturan Bent** (*Bent's rule*) dan diagram VSEPR terlampir, struktur isomer yang paling stabil serta perbandingan panjang ikatan $\\ce{P-F}$ aksial terhadap $\\ce{P-F}$ ekuatorial adalah ....

A. Kedua atom klorin menempati posisi aksial; ikatan $\\ce{P-F}$ aksial lebih pendek daripada ikatan $\\ce{P-F}$ ekuatorial  
B. Kedua atom klorin menempati posisi ekuatorial, dua atom fluorin di aksial dan satu atom fluorin di ekuatorial; ikatan $\\ce{P-F}$ aksial lebih panjang daripada ikatan $\\ce{P-F}$ ekuatorial  
C. Kedua atom klorin menempati posisi ekuatorial; ikatan $\\ce{P-F}$ aksial memiliki panjang yang persis sama dengan ikatan $\\ce{P-F}$ ekuatorial  
D. Satu atom klorin di aksial dan satu di ekuatorial; ikatan $\\ce{P-F}$ aksial lebih pendek daripada ikatan $\\ce{P-F}$ ekuatorial  
E. Ketiga atom fluorin menempati posisi ekuatorial untuk memaksimalkan gaya tolak elektrostatik; ikatan $\\ce{P-Cl}$ aksial menjadi sangat pendek`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Kaidah Dasar Aturan Bent (*Bent's Rule*):**
   > *"Karakter orbital-$s$ atom pusat cenderung terkonsentrasi pada orbital hibrida yang mengarah ke substituen yang lebih elektropositif; sebaliknya, karakter orbital-$p$ terkonsentrasi pada orbital hibrida yang mengarah ke substituen yang lebih elektronegatif."*
2. **Karakteristik Orbital Kerangka Trigonal Bipiramidal ($sp^3d$):**
   - Hibridisasi $sp^3d$ tersusun dari dua himpunan orbital hibrida yang berbeda sifat:
     - **3 Posisi Ekuatorial:** Tersusun dari hibridisasi $sp^2$ ($33.3\\%$ karakter-$s$, $66.7\\%$ karakter-$p$).
     - **2 Posisi Aksial:** Tersusun dari hibridisasi $dp$ ($0\\%$ karakter-$s$, $100\\%$ karakter-$p$).
3. **Penentuan Posisi Substituen pada $\\ce{PF3Cl2}$:**
   - Keelektronegatifan: $\\text{Fluorin } (\\chi = 3.98) > \\text{Klorin } (\\chi = 3.16)$.
   - Atom Fluorin adalah substituen yang **paling elektronegatif**, sehingga atom Fluorin akan mencari orbital dengan karakter-$p$ tertinggi (yaitu posisi **aksial** yang memiliki $100\\%$ karakter-$p$).
   - Karena posisi aksial hanya ada 2, maka 2 atom $\\ce{F}$ wajib menempati kedua posisi **aksial**.
   - Sisa substituen (1 atom $\\ce{F}$ dan 2 atom $\\ce{Cl}$) menempati 3 posisi **ekuatorial**.
   - Posisi isomer paling stabil: **2 Cl di ekuatorial, 2 F di aksial, 1 F di ekuatorial** (simetri $C_{2v}$).
4. **Analisis Panjang Ikatan $\\ce{P-F}$ Aksial vs Ekuatorial:**
   - Ikatan $\\ce{P-F}$ ekuatorial menggunakan orbital hibrida $sp^2$ yang mengandung $33.3\\%$ karakter-$s$. Karakter-$s$ menarik awan elektron lebih dekat ke inti fosfor $\\implies$ ikatan lebih kuat dan **lebih pendek** (panjang $\\approx 153\\text{ pm}$).
   - Ikatan $\\ce{P-F}$ aksial menggunakan orbital $dp$ tanpa karakter-$s$ ($100\\%$ karakter-$p$). Akibatnya, tumpang tindih orbital terjadi lebih jauh dari inti $\\implies$ ikatan lebih lemah dan **lebih panjang** (panjang $\\approx 158\\text{ pm}$).
   - Kesimpulan: **Ikatan $\\ce{P-F}$ aksial lebih panjang daripada ikatan $\\ce{P-F}$ ekuatorial**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['aturan-bent', 'bents-rule', 'pf3cl2', 'panjang-ikatan-aksial-ekuatorial', 'hibridisasi-sp3d'],
  },
  {
    id: 103019,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Siklus Born-Haber & Termodinamika Kisi MgCl2',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    diagram_url: '/diagrams/born-haber-cycle-mgcl2.svg',
    title: 'Perhitungan Energi Kisi Kristal Magnesium Klorida Berdasarkan Siklus Born-Haber',
    question_text: `Berdasarkan diagram siklus termodinamika Born-Haber terlampir, diberikan data termokimia standar pembentukan kristal magnesium klorida ($\\ce{MgCl2(s)}$):
- Entalpi sublimasi magnesium, $\\Delta H_{\\text{sub}}(\\ce{Mg}) = +148.0\\text{ kJ/mol}$
- Energi ionisasi pertama magnesium, $IE_1(\\ce{Mg}) = +738.0\\text{ kJ/mol}$
- Energi ionisasi kedua magnesium, $IE_2(\\ce{Mg}) = +1451.0\\text{ kJ/mol}$
- Entalpi disosiasi ikatan klorin, $D(\\ce{Cl-Cl}) = +244.0\\text{ kJ/mol}$
- Afinitas elektron klorin, $EA(\\ce{Cl}) = -349.0\\text{ kJ/mol}$
- Entalpi pembentukan standar kristal, $\\Delta H_f^\\circ(\\ce{MgCl2(s)}) = -641.6\\text{ kJ/mol}$

Nilai energi kisi ($U_{\\text{kisi}}$) kristal $\\ce{MgCl2(s)}$ untuk proses pembentukan kisi dari ion-ion gasnya ($\\ce{Mg^2+(g) + 2Cl-(g) -> MgCl2(s)}$) adalah ....

A. $-2524.6\\text{ kJ/mol}$  
B. $-1826.6\\text{ kJ/mol}$  
C. $-2873.6\\text{ kJ/mol}$  
D. $+2524.6\\text{ kJ/mol}$  
E. $-3222.6\\text{ kJ/mol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Persamaan Reaksi Pembentukan Standar:**
   $$\\ce{Mg(s) + Cl2(g) -> MgCl2(s)} \\quad \\Delta H_f^\\circ = -641.6\\text{ kJ/mol}$$
2. **Tahapan Siklus Termokimia Born-Haber:**
   - Sublimasi magnesium: $\\ce{Mg(s) -> Mg(g)} \\implies \\Delta H_{\\text{sub}} = +148.0\\text{ kJ/mol}$
   - Ionisasi pertama $\\ce{Mg}$: $\\ce{Mg(g) -> Mg+(g) + e^-} \\implies IE_1 = +738.0\\text{ kJ/mol}$
   - Ionisasi kedua $\\ce{Mg}$: $\\ce{Mg+(g) -> Mg^2+(g) + e^-} \\implies IE_2 = +1451.0\\text{ kJ/mol}$
   - Disosiasi 1 mol gas $\\ce{Cl2}$ menjadi 2 mol atom $\\ce{Cl}$: $\\ce{Cl2(g) -> 2Cl(g)} \\implies D = +244.0\\text{ kJ/mol}$
   - Afinitas elektron untuk **2 mol atom klorin**: $2\\ce{Cl(g) + 2e^- -> 2Cl-(g)} \\implies 2 \\times EA = 2 \\times (-349.0) = -698.0\\text{ kJ/mol}$
   - Pembentukan kisi kristal: $\\ce{Mg^2+(g) + 2Cl-(g) -> MgCl2(s)} \\implies U_{\\text{kisi}}$
3. **Penerapan Hukum Kekekalan Energi Hess:**
   $$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + D + 2(EA) + U_{\\text{kisi}}$$
4. **Substitusi Nilai Eksperimen:**
   $$-641.6 = 148.0 + 738.0 + 1451.0 + 244.0 + (-698.0) + U_{\\text{kisi}}$$
   $$-641.6 = (2581.0 - 698.0) + U_{\\text{kisi}}$$
   $$-641.6 = +1883.0 + U_{\\text{kisi}}$$
   $$U_{\\text{kisi}} = -641.6 - 1883.0 = \\mathbf{-2524.6\\text{ kJ/mol}}$$
5. **Kesimpulan:** Energi kisi pembentukan kristal $\\ce{MgCl2}$ bernilai **$-2524.6\\text{ kJ/mol}$** (sangat eksoterm, menandakan struktur kristal ionik yang sangat stabil).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['siklus-born-haber', 'energi-kisi', 'hukum-hess', 'mgcl2', 'termodinamika-ionik'],
  },
  {
    id: 103020,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'VSEPR Geometri Eksotis Sterik SN = 7',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Geometri dan Domain Pasangan Elektron Bebas pada Anion Pentagonal Planar XeF5-',
    question_text: `Anion pentafluoroxenat(IV), $\\ce{[XeF5]^-}$, adalah salah satu spesies langka dalam kimia anorganik dengan bilangan sterik $SN = 7$ yang memiliki bentuk molekul **pentagonal planar** (segi lima datar). Jumlah domain ikatan (PEI), pasangan elektron bebas (PEB), dan orientasi spasial kedua PEB tersebut adalah ....

A. 5 PEI dan 2 PEB; kedua PEB berorientasi pada sumbu aksial *trans* ($180^\\circ$) di atas dan di bawah bidang pentagonal fluorin untuk meminimalkan tolakan elektrostatik  
B. 5 PEI dan 2 PEB; kedua PEB berorientasi pada bidang ekuatorial bersudut $72^\\circ$  
C. 6 PEI dan 1 PEB; PEB menempati puncak piramida pentagonal  
D. 5 PEI dan 1 PEB; molekul mengadopsi simetri piramida bujursangkar terdistorsi  
E. 4 PEI dan 3 PEB; ketiga PEB menempati posisi ekuatorial seperti pada molekul $\\ce{XeF2}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Hitung Elektron Valensi Total Anion $\\ce{[XeF5]^-}$:**
   - Atom $\\ce{Xe}$ ($8$ elektron) + $5$ atom $\\ce{F}$ ($5 \\times 7 = 35$ elektron) + muatan negatif ($-1 \\implies +1$ elektron).
   - Total elektron valensi $= 8 + 35 + 1 = 44$ elektron (22 pasang).
2. **Penyusunan Domain VSEPR pada Atom Pusat $\\ce{Xe}$:**
   - 5 pasang elektron digunakan untuk 5 ikatan tunggal $\\ce{Xe-F} \\implies \\mathbf{5\\text{ PEI}}$ ($X = 5$).
   - Masing-masing atom $\\ce{F}$ memiliki 3 PEB ($5 \\times 3 = 15$ pasang $= 30$ elektron).
   - Sisa elektron pada $\\ce{Xe} = 44 - (10 + 30) = 4$ elektron $\\implies \\mathbf{2\\text{ PEB}}$ ($E = 2$).
   - Bilangan sterik: $SN = 5 + 2 = \\mathbf{7}$ (Hibridisasi $sp^3d^3$).
3. **Analisis Geometri Kerangka Bipiramida Pentagonal ($SN = 7$):**
   - Geometri domain elektron dasar untuk $SN = 7$ adalah **bipiramida pentagonal** (5 posisi ekuatorial bersudut $72^\\circ$ dan 2 posisi aksial bersudut $90^\\circ$ terhadap ekuatorial serta $180^\\circ$ antar-aksial).
4. **Penempatan 2 PEB:**
   - Tolakan antar-PEB adalah tolakan terkuat ($\\text{PEB-PEB}$). Jika kedua PEB diletakkan pada posisi ekuatorial, keduanya akan membentuk sudut sempit $72^\\circ$, menghasilkan tolakan elektrostatik yang sangat mendestabilkan sistem.
   - Dengan menempatkan kedua PEB pada posisi **aksial yang saling berseberangan (*trans*, sudut $180^\\circ$)**, tolakan $\\text{PEB-PEB}$ diminimalkan secara maksimal.
   - Akibatnya, kelima ligan $\\ce{F}$ menempati bidang datar ekuatorial yang simetris sempurna ($D_{5h}$), menghasilkan bentuk molekul aktual **Pentagonal Planar** dengan sudut ikatan $\\ce{F-Xe-F} = 72^\\circ$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['vsepr-eksotis', 'xef5-pentagonal-planar', 'bilangan-sterik-7', 'hibridisasi-sp3d3', 'senyawa-gas-mulia'],
  },
  {
    id: 103021,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Teori Orbital Molekul Komparatif N2 vs NO+',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    diagram_url: '/diagrams/mot-energy-diagram-o2.svg',
    title: 'Analisis Lengkap Konfigurasi MOT, Orde Ikatan, dan Sifat Kemagnetan Spesi Isoelektronik N2 dan NO+',
    question_text: `Dinitrogen ($\\ce{N2}$) dan kation nitrosil ($\\ce{NO+}$) merupakan contoh klasik pasangan spesi diatomik isoelektronik (masing-masing memiliki 10 elektron valensi pada kulit kedua). Keduanya memiliki stabilitas ikatan kimia yang sangat tinggi.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan konfigurasi elektron orbital molekul keadaan dasar untuk $\\ce{N2}$ dan jelaskan fenomena pencampuran s-p (s-p mixing) yang menyebabkan orbital $\\pi_{2p}$ memiliki energi lebih rendah daripada orbital $\\sigma_{2p_z}$!',
        points: 4,
        rubric: 'Menuliskan konfigurasi MO N2 dengan benar: σ2s^2 σ*2s^2 π2px^2 π2py^2 σ2pz^2 (2 poin); Menjelaskan s-p mixing terjadi karena selisih energi orbital 2s dan 2p atom N kecil (< 12 eV), sehingga orbital σ2s dan σ2pz saling tolak, menaikkan energi σ2pz di atas π2p (2 poin).',
        expected_answer: 'Konfigurasi: σ2s^2 σ*2s^2 π2p^4 σ2pz^2. Selisih energi kecil antara 2s dan 2p menyebabkan mixing orbital σ, menaikkan tingkat energi σ2pz ke atas π2p.'
      },
      {
        label: 'b',
        question_text: 'Hitung orde ikatan ($BO$) dan tentukan sifat kemagnetan dari spesi $\\ce{N2}$ dan $\\ce{NO+}$! Bandingkan kekuatan ikatan keduanya dengan spesi netral radikal $\\ce{NO}$ (11 elektron valensi)!',
        points: 4,
        rubric: 'Menghitung BO N2 dan NO+ = (8-2)/2 = 3.0 dan keduanya diamagnetik (2 poin); Menghitung BO NO = (8-3)/2 = 2.5 (1 poin); Menyimpulkan ikatan N2 dan NO+ jauh lebih kuat daripada NO karena NO memiliki 1 elektron anti-ikatan pada π* (1 poin).',
        expected_answer: 'BO N2 dan NO+ = 3.0 (ikatan rangkap tiga, diamagnetik). Ikatan keduanya lebih kuat daripada NO (BO = 2.5) karena pada NO ada 1 elektron anti-ikatan di π*.'
      },
      {
        label: 'c',
        question_text: 'Energi ionisasi pertama ($IE_1$) untuk melepaskan elektron dari molekul $\\ce{N2}$ terukur sebesar $15.6\\text{ eV}$, sedangkan $IE_1$ dari atom nitrogen bebas hanya $14.5\\text{ eV}$. Jelaskan mengapa molekul $\\ce{N2}$ lebih sukar diionisasi daripada atom nitrogen terisolasi berdasarkan diagram tingkat energi MOT!',
        points: 4,
        rubric: 'Menjelaskan elektron terluar atom N berada pada orbital atom 2p (14.5 eV) (1.5 poin); Elektron terluar molekul N2 (HOMO) berada pada orbital molekul ikatan σ2pz yang terstabilkan ke energi lebih rendah dibanding orbital atom asal akibat pembentukan ikatan kovalen kuat (2.5 poin).',
        expected_answer: 'Elektron terluar N2 berada pada orbital ikatan σ2pz yang memiliki tingkat energi lebih rendah (lebih stabil) daripada orbital atom 2p nitrogen bebas, sehingga membutuhkan energi ionisasi lebih besar.'
      }
    ],
    expected_final_answer: 'Konfigurasi MOT N2: σ2s^2 σ*2s^2 π2p^4 σ2pz^2; BO = 3.0 (Diamagnetik); IE1 N2 > N karena HOMO berada pada tingkat energi ikatan yang terstabilkan.',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Konfigurasi MOT $\\ce{N2}$ & Fenomena Pencampuran $s\\text{-}p$ (*s-p Mixing*)**
   - **Konfigurasi Elektron Valensi $\\ce{N2}$ (10 elektron):**
     $$\\sigma_{2s}^2 \\; \\sigma^{*2}_{2s} \\; \\pi_{2p_x}^2 \\; \\pi_{2p_y}^2 \\; \\sigma_{2p_z}^2$$
   - **Penjelasan Fisik *s-p mixing*:**
     - Pada unsur-unsur awal periode 2 ($\\ce{Li}$ hingga $\\ce{N}$), muatan inti efektif belum terlalu besar sehingga perbedaan energi antara orbital atom $2s$ dan $2p$ relatif kecil ($\\Delta E < 12\\text{ eV}$).
     - Hal ini memungkinkan terjadinya interaksi mekanika kuantum (pencampuran fungsi gelombang) antara orbital dengan simetri yang sama, yaitu orbital $\\sigma_{2s}$ dan $\\sigma_{2p_z}$.
     - Akibat interaksi ini, tingkat energi orbital $\\sigma_{2s}$ dan $\\sigma^*_{2s}$ terdorong semakin rendah, sedangkan tingkat energi orbital ikatan $\\sigma_{2p_z}$ terdorong naik ke atas melebihi tingkat energi orbital degenerat $\\pi_{2p_x}$ dan $\\pi_{2p_y}$. Oleh karena itu, urutan pengisian $\\pi_{2p}$ mendahului $\\sigma_{2p_z}$.

2. **Sub-soal (b): Orde Ikatan & Sifat Kemagnetan Komparatif**
   - **Untuk $\\ce{N2}$ dan $\\ce{NO+}$:**
     - Keduanya adalah spesi isoelektronik dengan $N_b = 8$ (di $\\sigma_{2s}, \\pi_{2p_x}, \\pi_{2p_y}, \\sigma_{2p_z}$) dan $N_a = 2$ (di $\\sigma^*_{2s}$).
     - Orde Ikatan:
       $$BO = \\frac{N_b - N_a}{2} = \\frac{8 - 2}{2} = \\mathbf{3.0}$$
     - Sifat Kemagnetan: **Diamagnetik** (seluruh 10 elektron valensi berpasangan sempurna, tidak ada elektron soliter).
   - **Perbandingan dengan Radikal $\\ce{NO}$ (11 elektron valensi):**
     - Pada $\\ce{NO}$, satu elektron tambahan menempati orbital anti-ikatan $\\pi^*_{2p}$:
       $$BO = \\frac{8 - 3}{2} = \\mathbf{2.5}$$
     - Keberadaan elektron pada orbital anti-ikatan ($\pi^*$) melemahkan ikatan dan memperpanjang jarak ikatan. Sehingga ikatan pada $\\ce{N2}$ dan $\\ce{NO+}$ (ikatan rangkap tiga murni) jauh lebih kuat dan lebih stabil daripada $\\ce{NO}$.

3. **Sub-soal (c): Rasionalisasi Energi Ionisasi $IE_1(\\ce{N2}) > IE_1(\\ce{N})$**
   - Energi ionisasi pertama mengukur energi minimum yang diperlukan untuk melepaskan 1 elektron dari orbital molekul tertinggi yang terisi (HOMO).
   - Pada atom nitrogen bebas ($\\ce{N}$), elektron terluar dilepaskan dari orbital atom $2p$ ($1s^2\\, 2s^2\\, 2p^3$), dengan $IE_1 = 14.5\\text{ eV}$.
   - Pada molekul $\\ce{N2}$, elektron terluar dilepaskan dari orbital molekul **$\\sigma_{2p_z}$** (HOMO). Meskipun mengalami kenaikan akibat *s-p mixing*, pembentukan overlap orbital ikatan secara netto tetap menghasilkan stabilisasi termodinamika yang menempatkan energi orbital ikatan $\\sigma_{2p_z}$ di bawah tingkat energi rata-rata orbital atom bebas.
   - Karena elektron pada orbital ikatan molekul terikat oleh tarikan **dua inti atom nitrogen sekaligus**, elektron tersebut berada pada sumur potensial yang lebih dalam sehingga lebih sukar dilepaskan ($IE_1 = 15.6\\text{ eV}$).`,
    solution_framework_template: `1. Penulisan Konfigurasi MOT dan Analisis s-p Mixing:
• Distribusi 10 elektron valensi pada orbital molekul N2: ....
• Rasionalisasi mekanika kuantum interaksi orbital simetri σ2s dan σ2pz: ....
• Penjelasan pembalikan urutan energi orbital π2p dan σ2pz: ....

2. Kalkulasi Orde Ikatan dan Kemagnetan:
• Formula orde ikatan BO = (Nb - Na)/2 untuk N2 dan NO+: ....
• Penentuan status diamagnetik: ....
• Analisis pelemahan ikatan pada radikal NO akibat elektron anti-ikatan di π*: ....

3. Analisis Komparatif Energi Ionisasi Molekuler:
• Identifikasi orbital asal elektron terionisasi (HOMO σ2pz vs AO 2p): ....
• Efek tarikan dua inti atom terhadap stabilitas elektron ikatan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['teori-orbital-molekul-mot', 'sp-mixing', 'n2-dan-no+', 'orde-ikatan', 'energi-ionisasi-molekul'],
  },
  {
    id: 103022,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Aturan Bent & Variasi Sudut Ikatan Deret Halometana',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Rasionalisasi Ilmiah Variasi Sudut Ikatan dan Panjang Ikatan pada Fluorometana Berdasarkan Aturan Bent',
    question_text: `Pengukuran spektroskopi resolusi tinggi terhadap deret senyawa fluorometana menghasilkan data sudut ikatan dan panjang ikatan eksperimental sebagai berikut:
- **Metana ($\\ce{CH4}$):** Sudut $\\ce{H-C-H} = 109.5^\\circ$; Panjang ikatan $\\ce{C-H} = 108.7\\text{ pm}$
- **Fluorometana ($\\ce{CH3F}$):** Sudut $\\ce{H-C-H} = 110.2^\\circ$; Sudut $\\ce{H-C-F} = 108.8^\\circ$; Panjang ikatan $\\ce{C-F} = 138.3\\text{ pm}$; Panjang ikatan $\\ce{C-H} = 108.1\\text{ pm}$
- **Difluorometana ($\\ce{CH2F2}$):** Sudut $\\ce{H-C-H} = 112.5^\\circ$; Sudut $\\ce{F-C-F} = 108.3^\\circ$; Panjang ikatan $\\ce{C-F} = 135.7\\text{ pm}$; Panjang ikatan $\\ce{C-H} = 107.5\\text{ pm}$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan model VSEPR sederhana, atom fluorin yang memiliki ukuran lebih besar daripada hidrogen seharusnya menekan sudut $\\ce{H-C-H}$ menjadi lebih sempit. Namun, data eksperimen menunjukkan bahwa sudut $\\ce{H-C-H}$ justru semakin MELEBAR (dari $109.5^\\circ \\to 110.2^\\circ \\to 112.5^\\circ$). Jelaskan paradoks ini menggunakan Aturan Bent (*Bent\'s rule*)!',
        points: 4,
        rubric: 'Menjelaskan atom F sangat elektronegatif sehingga menarik karakter orbital-p atom C ke ikatan C-F (2 poin); Akibatnya sisa karakter orbital-s atom C terkonsentrasi pada ikatan C-H, meningkatkan karakter-s ikatan C-H dan melebarkan sudut H-C-H mendekati sp2 (120°) (2 poin).',
        expected_answer: 'Atom F elektronegatif menarik karakter-p, sehingga karakter-s terkonsentrasi pada ikatan C-H. Karakter-s yang lebih tinggi membuat sudut H-C-H melebar mendekati 120°.'
      },
      {
        label: 'b',
        question_text: 'Rasionalisasikan mengapa panjang ikatan $\\ce{C-H}$ semakin MEMENDEK seiring bertambahnya jumlah atom fluorin (dari $108.7\\text{ pm}$ pada $\\ce{CH4}$ menjadi $107.5\\text{ pm}$ pada $\\ce{CH2F2}$)!',
        points: 4,
        rubric: 'Menghubungkan peningkatan persentase karakter-s pada orbital hibrida C-H dengan penyusutan ukuran orbital (2 poin); Karakter-s yang lebih tinggi menahan elektron lebih dekat ke inti karbon sehingga ikatan C-H menjadi lebih pendek dan lebih kuat (2 poin).',
        expected_answer: 'Makin banyak atom F, persentase karakter-s pada ikatan C-H makin meningkat (> 25%). Karakter-s yang tinggi membuat orbital hibrida lebih kompak mendekat ke inti C, memperpendek ikatan C-H.'
      },
      {
        label: 'c',
        question_text: 'Perhatikan bahwa panjang ikatan $\\ce{C-F}$ pada $\\ce{CH2F2}$ ($135.7\\text{ pm}$) lebih pendek daripada pada $\\ce{CH3F}$ ($138.3\\text{ pm}$), dan bahkan semakin memendek pada tetrafluorometana ($\\ce{CF4}$, $131.9\\text{ pm}$). Jelaskan penyebab pemendekan progresif ikatan $\\ce{C-F}$ ini!',
        points: 4,
        rubric: 'Menjelaskan efek kenaikan muatan positif parsial pada atom C (C^delta+) akibat penarikan oleh banyak atom F elektronegatif (2 poin); Muatan inti efektif C yang lebih tinggi mengontraksi awan elektron dan memperkuat interaksi elektrostatik C-F sehingga ikatan memendek (2 poin).',
        expected_answer: 'Substitusi oleh banyak atom F menarik kerapatan elektron secara masif sehingga atom karbon mengemban muatan parsial positif yang semakin besar, mengontraksi jari-jari kovalen C dan memperpendek ikatan C-F.'
      }
    ],
    expected_final_answer: 'Sudut H-C-H melebar karena konsentrasi karakter-s ikatan C-H; Ikatan C-H memendek akibat kenaikan karakter-s; Ikatan C-F memendek karena peningkatan muatan positif parsial karbon.',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Resolusi Paradoks Sudut Ikatan Menggunakan Aturan Bent**
   - **Prinsip Aturan Bent:** Karakter orbital-$p$ terpusat pada ikatan dengan substituen yang lebih elektronegatif, sedangkan karakter orbital-$s$ terpusat pada ikatan dengan substituen yang lebih elektropositif.
   - Atom Fluorin ($\\chi = 3.98$) jauh lebih elektronegatif daripada Hidrogen ($\\chi = 2.20$) dan Karbon ($\\chi = 2.55$).
   - Oleh karena itu, atom karbon mengarahkan orbital hibrida dengan **karakter orbital-$p$ yang sangat tinggi** ($> 75\\%$) menuju atom fluorin (ikatan $\\ce{C-F}$).
   - Karena total karakter orbital-$s$ pada atom karbon harus kekal ($100\\%$ dari satu orbital $2s$), pengurangan karakter-$s$ pada ikatan $\\ce{C-F}$ memaksa karakter orbital-$s$ terkonsentrasi melimpah pada orbital hibrida yang mengarah ke atom hidrogen (ikatan $\\ce{C-H}$).
   - Akibatnya, hibridisasi orbital pada ikatan $\\ce{C-H}$ bergeser dari $sp^3$ murni ($25\\%$ $s$, sudut ideal $109.5^\\circ$) menuju ke arah $sp^2$ ($33.3\\%$ $s$, sudut ideal $120^\\circ$). Inilah penyebab sudut $\\ce{H-C-H}$ melebar secara progresif dari $109.5^\\circ \\to 110.2^\\circ \\to 112.5^\\circ$.

2. **Sub-soal (b): Rasionalisasi Pemendekan Ikatan $\\ce{C-H}$**
   - Orbital $s$ memiliki probabilitas densitas elektron yang lebih rapat ke inti atom dibandingkan orbital $p$.
   - Dengan meningkatnya persentase karakter-$s$ pada ikatan $\\ce{C-H}$ (sebagai akibat Aturan Bent pada sub-soal a), tumpang tindih orbital ikatan terjadi pada jarak antar-inti yang lebih dekat.
   - Hal ini dibuktikan secara eksperimen dengan penguatan frekuensi regangan inframerah ($\\nu_{\\ce{C-H}}$) dan penyusutan panjang ikatan dari **$108.7\\text{ pm}$** pada $\\ce{CH4}$ menjadi **$107.5\\text{ pm}$** pada $\\ce{CH2F2}$.

3. **Sub-soal (c): Pemendekan Progresif Ikatan $\\ce{C-F}$ pada Deret Fluorometana**
   - **Faktor 1: Peningkatan Muatan Parsial Positif Karbon (Efek Induktif):** Setiap penambahan atom fluorin yang sangat elektronegatif akan menarik kerapatan awan elektron menjauhi atom karbon. Atom karbon menjadi semakin kekurangan elektron dan mengemban muatan parsial positif yang semakin besar ($\\delta^+(\\ce{C})$). Muatan positif efektif ini mengontraksi awan elektron valensi karbon sehingga jari-jari kovalen karbon menyusut secara dramatis.
   - **Faktor 2: Kontribusi Tarikan Elektrostatik Ionik:** Polarisasi ikatan yang sangat kuat menghasilkan kontribusi elektrostatik Coulombik $\\ce{C^{\\delta+} - F^{\\delta-}}$ yang semakin dominan, menarik kedua atom semakin rapat satu sama lain sehingga panjang ikatan $\\ce{C-F}$ memendek drastis dari $138.3\\text{ pm}$ (pada $\\ce{CH3F}$) menjadi $131.9\\text{ pm}$ (pada $\\ce{CF4}$).`,
    solution_framework_template: `1. Aplikasi Aturan Bent pada Redistribusi Karakter Orbital:
• Analisis elektronegativitas Pauling Fluorin vs Hidrogen: ....
• Konsentrasi karakter-p pada ikatan C-F: ....
• Konsekuensi pelimpahan karakter-s pada ikatan C-H: ....
• Hubungan persentase karakter-s terhadap pelebaran sudut H-C-H menuju 120°: ....

2. Evaluasi Panjang Ikatan C-H:
• Korelasi karakter-s dengan jarak rata-rata elektron ke inti: ....
• Kesimpulan penyusutan panjang ikatan C-H: ....

3. Analisis Efek Induktif & Kontraksi Kovalen Ikatan C-F:
• Peningkatan muatan parsial positif atom karbon (C^delta+): ....
• Pengaruh gaya tarik elektrostatik ionik terhadap pemendekan ikatan C-F: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['aturan-bent', 'bents-rule', 'halometana', 'sudut-ikatan-riil', 'redistribusi-karakter-s'],
  },
  {
    id: 103023,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Termodinamika Kristal Born-Haber & Persamaan Kapustinskii',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    diagram_url: '/diagrams/born-haber-cycle-mgcl2.svg',
    title: 'Rekonstruksi Siklus Born-Haber dan Estimasi Energi Kisi Kalsium Oksida (CaO)',
    question_text: `Kalsium oksida ($\\ce{CaO}$, kapur tohor) mengkristal dengan kisi natrium klorida (tipe garam batu, bilangan koordinasi 6:6) dengan parameter kisi kristal yang sangat kokoh. Diberikan data termodinamika standar berikut:
- Entalpi sublimasi kalsium: $\\Delta H_{\\text{sub}}(\\ce{Ca}) = +178.0\\text{ kJ/mol}$
- Energi ionisasi pertama kalsium: $IE_1(\\ce{Ca}) = +590.0\\text{ kJ/mol}$
- Energi ionisasi kedua kalsium: $IE_2(\\ce{Ca}) = +1145.0\\text{ kJ/mol}$
- Entalpi disosiasi ikatan gas oksigen: $D(\\ce{O=O}) = +498.0\\text{ kJ/mol}$
- Afinitas elektron pertama oksigen: $EA_1(\\ce{O}) = -141.0\\text{ kJ/mol}$
- Afinitas elektron kedua oksigen: $EA_2(\\ce{O}) = +744.0\\text{ kJ/mol}$
- Entalpi pembentukan standar kristal: $\\Delta H_f^\\circ(\\ce{CaO(s)}) = -635.0\\text{ kJ/mol}$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan reaksi termokimia untuk masing-masing tahapan pembentukan ion gas $\\ce{Ca^2+(g)}$ dan $\\ce{O^2-(g)}$ dari unsur-unsurnya dalam wujud standar! Mengapa nilai $EA_2(\\ce{O})$ bernilai positif (endoterm)?',
        points: 4,
        rubric: 'Menuliskan 5 tahapan reaksi ionisasi dan disosiasi dengan benar (2.5 poin); Menjelaskan EA2 positif karena memasukkan elektron ke anion O- yang sudah bermuatan negatif mengalami tolakan elektrostatik kuat (1.5 poin).',
        expected_answer: 'Reaksi sublimasi, IE1, IE2, disosiasi 1/2 O2, EA1, dan EA2. EA2 bernilai endoterm (+744 kJ/mol) karena tolakan elektrostatik antar-elektron pada ion O-.'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan Hukum Hess, hitunglah nilai energi kisi ($U_{\\text{kisi}}$) kristal $\\ce{CaO(s)}$ untuk proses: $\\ce{Ca^2+(g) + O^2-(g) -> CaO(s)}$!',
        points: 4,
        rubric: 'Menuliskan persamaan siklus Hess: Delta Hf = Delta Hsub + IE1 + IE2 + 1/2 D + EA1 + EA2 + U_kisi (1.5 poin); Menghitung entalpi pembentukan ion gas = +2765 kJ/mol (1.5 poin); Menghitung U_kisi = -635 - 2765 = -3400 kJ/mol (1 poin).',
        expected_answer: 'U_kisi(CaO) = -3400.0 kJ/mol (atau -3400 kJ/mol).'
      },
      {
        label: 'c',
        question_text: 'Sebagai perbandingan, energi kisi kristal natrium klorida ($\\ce{NaCl}$) hanya sebesar $-787\\text{ kJ/mol}$. Mengapa energi kisi kristal $\\ce{CaO}$ bernilai hampir 4,3 kali lipat lebih eksoterm daripada $\\ce{NaCl}$, padahal kedua senyawa memiliki geometri kisi kristal yang identik dan jari-jari antar-ion yang mirip? Jelaskan berdasarkan Persamaan Kapustinskii / Hukum Coulomb!',
        points: 4,
        rubric: 'Menuliskan Persamaan Kapustinskii / proporsionalitas Coulomb U proporsional (|z+ * z-|) / (r+ + r-) (2 poin); Menjelaskan pada CaO muatan ion adalah (+2) dan (-2) sehingga hasil kali muatan = 4, sedangkan pada NaCl adalah (+1) dan (-1) dengan hasil kali muatan = 1 (2 poin).',
        expected_answer: 'Energi kisi berbanding lurus dengan hasil kali muatan ion (|z+ * z-|). Pada CaO, |(+2)(-2)| = 4, sedangkan pada NaCl |(+1)(-1)| = 1. Faktor muatan 4x lipat ini mendominasi energi kisi.'
      }
    ],
    expected_final_answer: 'U_kisi(CaO) = -3400.0 kJ/mol; EA2 positif akibat tolakan elektron; Energi kisi CaO ~4x NaCl karena faktor hasil kali muatan kation-anion (|z+ * z-| = 4 vs 1).',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Tahapan Termokimia & Alasan Endotermnya $EA_2$**
   - **Tahapan Pembentukan Kation:**
     1. $\\ce{Ca(s) -> Ca(g)} \\quad \\Delta H_{\\text{sub}} = +178.0\\text{ kJ/mol}$
     2. $\\ce{Ca(g) -> Ca+(g) + e^-} \\quad IE_1 = +590.0\\text{ kJ/mol}$
     3. $\\ce{Ca+(g) -> Ca^2+(g) + e^-} \\quad IE_2 = +1145.0\\text{ kJ/mol}$
   - **Tahapan Pembentukan Anion:**
     4. $\\ce{\\frac{1}{2}O2(g) -> O(g)} \\quad \\frac{1}{2}D = \\frac{1}{2}(+498.0) = +249.0\\text{ kJ/mol}$
     5. $\\ce{O(g) + e^- -> O-(g)} \\quad EA_1 = -141.0\\text{ kJ/mol}$
     6. $\\ce{O-(g) + e^- -> O^2-(g)} \\quad EA_2 = +744.0\\text{ kJ/mol}$
   - **Alasan Ilmiah $EA_2$ Bernilai Positif (Endoterm):**
     Penambahan elektron pertama pada atom oksigen netral berlangsung eksoterm karena tarikan muatan inti oksigen terhadap elektron valensi. Namun, pada penambahan elektron kedua, elektron baru dimasukkan ke dalam anion $\\ce{O-}$ yang **sudah bermuatan negatif**. Gaya tolak-menolak elektrostatik antar-elektron (*electron-electron repulsion*) jauh lebih kuat daripada tarikan inti, sehingga diperlukan input energi kerja luar yang besar ($+744\\text{ kJ/mol}$) untuk memaksa elektron masuk.

2. **Sub-soal (b): Perhitungan Energi Kisi ($U_{\\text{kisi}}$)**
   - **Persamaan Siklus Born-Haber:**
     $$\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + IE_1 + IE_2 + \\frac{1}{2}D + EA_1 + EA_2 + U_{\\text{kisi}}$$
   - **Hitung Total Entalpi Pembentukan Ion Gas Terpisah:**
     $$\\Delta H_{\\text{ion gas}} = 178.0 + 590.0 + 1145.0 + 249.0 + (-141.0) + 744.0 = \\mathbf{+2765.0\\text{ kJ/mol}}$$
   - **Hitung Energi Kisi:**
     $$-635.0 = +2765.0 + U_{\\text{kisi}}$$
     $$U_{\\text{kisi}} = -635.0 - 2765.0 = \\mathbf{-3400.0\\text{ kJ/mol}}$$

3. **Sub-soal (c): Rasionalisasi Perbedaan Energi Kisi $\\ce{CaO}$ vs $\\ce{NaCl}$**
   - Menurut **Persamaan Kapustinskii** dan Hukum Gaya Coulomb:
     $$U_{\\text{kisi}} \\propto \\frac{|z_+ \\cdot z_-|}{r_+ + r_-}$$
   - Jarak antar-inti pada kedua kristal relatif sebanding:
     - $\\ce{NaCl}$: $r(\\ce{Na+}) + r(\\ce{Cl-}) \\approx 102 + 181 = 283\\text{ pm}$
     - $\\ce{CaO}$: $r(\\ce{Ca^2+}) + r(\\ce{O^2-}) \\approx 100 + 140 = 240\\text{ pm}$
   - Namun, perbedaan terbesar terletak pada **muatan ionik ($z$)**:
     - Untuk $\\ce{NaCl}$: $|z_+ \\cdot z_-| = |(+1) \\times (-1)| = \\mathbf{1}$
     - Untuk $\\ce{CaO}$: $|z_+ \\cdot z_-| = |(+2) \\times (-2)| = \\mathbf{4}$
   - Karena energi potensial elektrostatik berbanding lurus dengan hasil kali muatan kation dan anion, medan listrik kisi kristal pada $\\ce{CaO}$ meningkat sebesar **faktor 4 kali lipat**. Bersama dengan sedikit penyusutan jarak antar-inti, hal ini menyebabkan energi kisi $\\ce{CaO}$ melonjak drastis menjadi $-3400\\text{ kJ/mol}$. Energi kisi yang luar biasa besar inilah yang mengkompensasi ketidakstabilan endoterm pembentukan ion $\\ce{O^2-}$.`,
    solution_framework_template: `1. Penulisan Tahapan Siklus Born-Haber CaO:
• Tahap sublimasi dan ionisasi bertingkat kalsium (Ca -> Ca2+): ....
• Tahap disosiasi ikatan oksigen (1/2 D) dan afinitas bertingkat (O -> O2-): ....
• Penjelasan fisika mengapa EA2 bersifat endoterm (tolakan elektrostatik anion O-): ....

2. Kalkulasi Energi Kisi (Hukum Hess):
• Formulasi persamaan siklus tertutup: ....
• Penjumlahan entalpi ion gas: ....
• Hasil akhir perhitungan U_kisi(CaO): ....

3. Analisis Kapustinskii / Hukum Coulomb:
• Proporsionalitas U_kisi terhadap hasil kali muatan (|z+ * z-|) dan jarak antar-inti: ....
• Perbandingan kuantitatif muatan ion NaCl (1 x 1 = 1) vs CaO (2 x 2 = 4): ....
• Kesimpulan mengapa energi kisi CaO bernilai 4x lebih eksoterm: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['siklus-born-haber', 'energi-kisi', 'persamaan-kapustinskii', 'afinitas-elektron-kedua', 'kalsium-oksida'],
  },
  {
    id: 103024,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'VSEPR Geometri Eksotis IF7 & Dinamika Fluksional',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Geometri Bipiramida Pentagonal Iodin Heptafluorida (IF7) dan Karakteristik Ikatan Aksial-Ekuatorial',
    question_text: `Iodin heptafluorida ($\\ce{IF7}$) adalah satu-satunya senyawa interhalogen biner netral yang memiliki 7 atom halogen terikat langsung pada satu atom halogen pusat yang stabil pada suhu ruang.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan bilangan sterik ($SN$), keadaan hibridisasi orbital valensi atom pusat iodin, formulasi VSEPR ($AX_mE_n$), serta nama bentuk geometri molekul dari $\\ce{IF7}$!',
        points: 3,
        rubric: 'SN = 7, hibridisasi sp3d3 (1.5 poin); Formulasi AX7, geometri Bipiramida Pentagonal (Pentagonal Bipyramidal) (1.5 poin).',
        expected_answer: 'SN = 7, hibridisasi sp3d3, formulasi AX7, bentuk geometri Bipiramida Pentagonal (Pentagonal Bipyramidal).'
      },
      {
        label: 'b',
        question_text: 'Sebutkan nilai sudut ikatan ideal antara ligan ekuatorial-ekuatorial ($\\ce{F_{ek}-I-F_{ek}}$), ligan aksial-ekuatorial ($\\ce{F_{aks}-I-F_{ek}}$), serta antara ligan aksial-aksial ($\\ce{F_{aks}-I-F_{aks}}$)!',
        points: 3,
        rubric: 'F_ek-I-F_ek = 72° (1 poin); F_aks-I-F_ek = 90° (1 poin); F_aks-I-F_aks = 180° (1 poin).',
        expected_answer: 'F_ek-I-F_ek = 72°; F_aks-I-F_ek = 90°; F_aks-I-F_aks = 180°.'
      },
      {
        label: 'c',
        question_text: 'Data eksperimen difraksi elektron gas dan kristalografi menunjukkan anomali unik: panjang ikatan $\\ce{I-F}$ ekuatorial terukur sebesar $186\\text{ pm}$, sedangkan panjang ikatan $\\ce{I-F}$ aksial terukur lebih pendek, yaitu $179\\text{ pm}$. Fenomena ini berlawanan dengan kerangka bipiramida trigonal ($sp^3d$, seperti $\\ce{PCl5}$) di mana ikatan aksial selalu lebih panjang dari ekuatorial. Jelaskan secara mekanistik mengapa pada $\\ce{IF7}$ ikatan ekuatorial justru LEBIH PANJANG daripada ikatan aksial!',
        points: 6,
        rubric: 'Menjelaskan crowding sterik parah pada bidang ekuatorial karena 5 ligan fluorin dipaksa berkumpul dengan sudut sangat sempit 72° (3 poin); Tolakan sterik ekuatorial memaksa ikatan I-F ekuatorial memanjang untuk mengurangi tolakan, sedangkan posisi aksial hanya memiliki 5 interaksi 90° tanpa desakan lateral (3 poin).',
        expected_answer: 'Pada bidang ekuatorial, 5 atom fluorin mengalami desakan sterik ekstrem akibat sudut sempit 72°. Tolakan kuat antar-ligan ekuatorial ini memaksa ikatan I-F ekuatorial memanjang (186 pm) untuk meredakan ketegangan sterik, sedangkan ikatan aksial bebas dari desakan lateral (179 pm).'
      }
    ],
    expected_final_answer: 'AX7 (sp3d3, Bipiramida Pentagonal); Sudut: 72°, 90°, 180°; Ikatan ekuatorial lebih panjang (186 pm vs 179 pm) akibat desakan sterik parah 5 ligan pada sudut sempit 72°.',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Parameter VSEPR & Hibridisasi $\\ce{IF7}$**
   - Atom pusat Iodin ($Z = 53$): Memiliki $7$ elektron valensi.
   - Ketujuh elektron valensi digunakan untuk membentuk 7 ikatan tunggal kovalen dengan 7 atom fluorin $\\implies 7$ PEI ($X = 7$).
   - Pasangan elektron bebas pada iodin: $E = 0$.
   - Bilangan sterik: $SN = 7 + 0 = \\mathbf{7}$.
   - Tipe formulasi: **$AX_7$**.
   - Hibridisasi orbital: **$sp^3d^3$** (terdiri dari pencampuran orbital $s$, tiga orbital $p$, dan tiga orbital $d_{xy}, d_{x^2-y^2}, d_{z^2}$).
   - Bentuk geometri molekul: **Bipiramida Pentagonal (*Pentagonal Bipyramidal*)**, dengan simetri titik ruang $D_{5h}$.

2. **Sub-soal (b): Sudut Ikatan Ideal**
   - Sudut antar-ikatan pada bidang cincin datar ekuatorial:
     $$\\angle \\ce{F_{ek}-I-F_{ek}} = \\frac{360^\\circ}{5} = \\mathbf{72^\\circ}$$
   - Sudut antara ikatan aksial tegak lurus dengan bidang cincin ekuatorial:
     $$\\angle \\ce{F_{aks}-I-F_{ek}} = \\mathbf{90^\\circ}$$
   - Sudut collinear antara kedua ligan aksial yang saling berlawanan:
     $$\\angle \\ce{F_{aks}-I-F_{aks}} = \\mathbf{180^\\circ}$$

3. **Sub-soal (c): Rasionalisasi Anomali Panjang Ikatan Aksial vs Ekuatorial**
   - **Perbandingan dengan Kerangka Bipiramida Trigonal ($sp^3d$, misal $\\ce{PCl5}$):**
     Pada $\\ce{PCl5}$, bidang ekuatorial hanya dihuni oleh 3 ligan dengan sudut lapang $120^\\circ$. Tolakan dominan dialami oleh posisi aksial (mengalami 3 tolakan $90^\\circ$), sehingga pada $sp^3d$, ikatan aksial lebih panjang daripada ekuatorial.
   - **Kondisi Khusus pada Bipiramida Pentagonal ($sp^3d^3$, $\\ce{IF7}$):**
     1. **Kepadatan Sterik Ekstrem (*Severe Steric Crowding*):** Memaksa **lima buah atom fluorin** berdesakan pada satu bidang ekuatorial dengan sudut yang sangat sempit ($72^\\circ$) menimbulkan tolakan sterik non-ikatan (*ligand-ligand repulsion*) dan tolakan antar-awan elektron ikatan $\\ce{I-F_{ek}}$ yang luar biasa hebat. Jarak kontak $\\ce{F\\cdots F}$ ekuatorial berada di bawah batas jari-jari Van der Waals normal.
     2. **Relaksasi Panjang Ikatan:** Untuk meredakan tolakan sterik yang mendestabilkan ini, sistem molekul secara spontan **memperpanjang jarak ikatan $\\ce{I-F}$ ekuatorial** menjadi **$186\\text{ pm}$**. Dengan ikatan yang lebih panjang, atom-atom fluorin berada pada keliling lingkaran yang lebih besar sehingga jarak antar-atom fluorin ekuatorial meregang.
     3. **Posisi Aksial Lebih Leluasa:** Kedua ligan aksial terletak di atas dan di bawah sumbu simetri molekul, di mana tidak ada desakan lateral tetangga bersudut $72^\\circ$. Oleh karena itu, ikatan $\\ce{I-F}$ aksial dapat membentuk tumpang tindih orbital yang lebih optimal dan lebih pendek, yaitu **$179\\text{ pm}$** (terbukti $7\\text{ pm}$ lebih pendek daripada ikatan ekuatorial).`,
    solution_framework_template: `1. Karakterisasi Geometri VSEPR IF7:
• Analisis konfigurasi valensi iodin dan 7 domain ikatan kovalen: ....
• Hibridisasi orbital sp3d3 dan bentuk Bipiramida Pentagonal: ....

2. Penentuan Nilai Sudut Ikatan Spasial:
• Sudut bidang ekuatorial pentagonal (360°/5 = 72°): ....
• Sudut aksial terhadap ekuatorial (90°) dan antar-aksial (180°): ....

3. Analisis Mekanistik Anomali Panjang Ikatan:
• Perbandingan desakan sterik kerangka SN=5 (sudut 120°) vs SN=7 (sudut sempit 72°): ....
• Efek crowding ligan fluorin ekuatorial terhadap perpanjangan ikatan (186 pm): ....
• Optimalisasi overlap orbital aksial bebas desakan lateral (179 pm): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['vsepr-eksotis', 'if7-pentagonal-bipyramidal', 'panjang-ikatan-anomali', 'crowding-sterik', 'hibridisasi-sp3d3'],
  },
  {
    id: 103025,
    sma_topic_number: 3,
    sma_topic_id: 103,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 2,
    module_id: 2,
    subtopic: 'Resonansi Delokalisasi & Orde Ikatan Parsial',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kuantitatif Orde Ikatan Parsial, Muatan Parsial Atom, dan Delokalisasi Orbital Pi pada Ion Nitrat dan Karbonat',
    question_text: `Data kristalografi difraksi sinar-X menunjukkan bahwa ketiga ikatan nitrogen-oksigen pada anion nitrat ($\\ce{NO3-}$) memiliki panjang ikatan yang identik, yaitu $124\\text{ pm}$ (terletak di antara panjang ikatan tunggal $\\ce{N-O}$ $140\\text{ pm}$ dan ikatan rangkap dua $\\ce{N=O}$ $120\\text{ pm}$). Pola yang sama juga teramati pada anion karbonat ($\\ce{CO3^2-}$), di mana ketiga ikatan karbon-oksigen memiliki panjang yang sama persis sebesar $128\\text{ pm}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Gambarkan ketiga struktur resonansi kanonikal yang ekuivalen untuk ion nitrat ($\\ce{NO3-}$) dan ion karbonat ($\\ce{CO3^2-}$)! Cantumkan muatan formal pada setiap atom!',
        points: 4,
        rubric: 'Gambaar 3 resonansi NO3- lengkap dengan muatan formal N=+1, 1 atom O=0, 2 atom O=-1 (2 poin); Gambar 3 resonansi CO3^2- lengkap dengan muatan formal C=0, 1 atom O=0, 2 atom O=-1 (2 poin).',
        expected_answer: 'Tiga struktur resonansi ekuivalen digambarkan dengan memutar posisi ikatan rangkap dua pada ketiga atom oksigen secara simetris.'
      },
      {
        label: 'b',
        question_text: 'Hitung secara matematis nilai orde ikatan (Bond Order / $BO$) rata-rata untuk ikatan $\\ce{N-O}$ pada ion $\\ce{NO3-}$ dan ikatan $\\ce{C-O}$ pada ion $\\ce{CO3^2-}$! Jelaskan kesesuaian nilai $BO$ tersebut dengan data panjang ikatan kristalografi!',
        points: 4,
        rubric: 'Menghitung BO(N-O) = 4 pasang ikatan / 3 posisi = 1.33 (1.5 poin); Menghitung BO(C-O) = 4 pasang ikatan / 3 posisi = 1.33 (1.5 poin); Menjelaskan BO = 1.33 berada di antara ikatan tunggal (1.0) dan rangkap (2.0) sehingga panjang ikatan berada di antaranya (1 poin).',
        expected_answer: 'BO(N-O) = 4/3 = 1.33; BO(C-O) = 4/3 = 1.33. Orde ikatan 1.33 menyebabkan panjang ikatan berada di antara ikatan tunggal dan ikatan rangkap dua.'
      },
      {
        label: 'c',
        question_text: 'Hitung muatan parsial netto ($\delta$) yang diemban oleh masing-masing atom oksigen pada ion $\\ce{NO3-}$ dan ion $\\ce{CO3^2-}$ sebagai konsekuensi delokalisasi orbital $\\pi$ terdelokalisasi!',
        points: 4,
        rubric: 'Menghitung muatan parsial O pada NO3- = -2/3 = -0.67 (2 poin); Menghitung muatan parsial O pada CO3^2- = -2/3 = -0.67 (2 poin).',
        expected_answer: 'Muatan parsial tiap atom oksigen pada NO3- adalah -2/3 (-0.67); Muatan parsial tiap atom oksigen pada CO3^2- adalah -2/3 (-0.67).'
      }
    ],
    expected_final_answer: 'BO(N-O) = 1.33, muatan O = -2/3; BO(C-O) = 1.33, muatan O = -2/3; Delokalisasi sistem pi 4-pusat menghasilkan hibrida resonansi simetris datar.',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Struktur Resonansi Kanonikal & Muatan Formal**
   - **Untuk Ion Nitrat ($\\ce{NO3-}$, 24 elektron valensi):**
     - Memiliki 3 struktur resonansi ekuivalen:
       $$\\ce{[O=N(-O^-)2] <-> [^-O-N(=O)(-O^-)] <-> [(^-O)2N=O]}$$
     - Muatan formal pada setiap kontributor:
       - Atom Nitrogen pusat: $FC = 5 - 0 - 4 = \\mathbf{+1}$
       - Satu atom Oksigen dengan ikatan rangkap ($\\ce{=O}$): $FC = 6 - 4 - 2 = \\mathbf{0}$
       - Dua atom Oksigen dengan ikatan tunggal ($\\ce{-O^-}$): masing-masing $FC = 6 - 6 - 1 = \\mathbf{-1}$
       - Muatan total ion: $+1 + 0 + (-1) + (-1) = -1$.
   - **Untuk Ion Karbonat ($\\ce{CO3^2-}$, 24 elektron valensi):**
     - Memiliki 3 struktur resonansi ekuivalen:
       $$\\ce{[O=C(-O^-)2] <-> [^-O-C(=O)(-O^-)] <-> [(^-O)2C=O]}$$
     - Muatan formal pada setiap kontributor:
       - Atom Karbon pusat: $FC = 4 - 0 - 4 = \\mathbf{0}$
       - Satu atom Oksigen dengan ikatan rangkap ($\\ce{=O}$): $FC = 6 - 4 - 2 = \\mathbf{0}$
       - Dua atom Oksigen dengan ikatan tunggal ($\\ce{-O^-}$): masing-masing $FC = 6 - 6 - 1 = \\mathbf{-1}$
       - Muatan total ion: $0 + 0 + (-1) + (-1) = -2$.

2. **Sub-soal (b): Perhitungan Orde Ikatan Parsial ($BO$)**
   - Dalam teori resonansi, orde ikatan rata-rata suatu ikatan kimia pada molekul simetris dihitung melalui pembagian total pasangan elektron ikatan terhadap jumlah posisi ikatan yang ekuivalen:
     $$BO = \\frac{\\text{Jumlah Pasangan Ikatan (garis ikatan) pada Seluruh Resonansi}}{\\text{Jumlah Struktur Resonansi Ekuivalen}}$$
   - **Pada Ion Nitrat ($\\ce{NO3-}$):**
     Terdapat 1 ikatan rangkap dua dan 2 ikatan tunggal $\\implies$ total 4 pasang ikatan terbagi pada 3 ikatan $\\ce{N-O}$:
     $$BO(\\ce{N-O}) = \\frac{4}{3} = \\mathbf{1.33}$$
   - **Pada Ion Karbonat ($\\ce{CO3^2-}$):**
     Terdapat 1 ikatan rangkap dua dan 2 ikatan tunggal $\\implies$ total 4 pasang ikatan terbagi pada 3 ikatan $\\ce{C-O}$:
     $$BO(\\ce{C-O}) = \\frac{4}{3} = \\mathbf{1.33}$$
   - **Korelasi Kristalografi:** Nilai orde ikatan $1.33$ secara sempurna menjelaskan mengapa panjang ikatan $\\ce{N-O}$ ($124\\text{ pm}$) berada tepat di antara ikatan tunggal murni ($140\\text{ pm}$, $BO = 1.0$) dan ikatan rangkap dua murni ($120\\text{ pm}$, $BO = 2.0$). Ketiga ikatan menjadi setara karena molekul riil merupakan satu kesatuan **hibrida resonansi** tunggal dengan orbital $\\pi$ terdelokalisasi di atas dan di bawah bidang trigonal planar.

3. **Sub-soal (c): Muatan Parsial Atom Oksigen ($\delta$)**
   - **Pada Ion Nitrat ($\\ce{NO3-}$):**
     - Atom nitrogen pusat mengemban muatan formal tetap $+1$.
     - Sisa muatan total anion adalah $-1 - (+1) = -2$.
     - Muatan $-2$ ini terbagi rata secara simetris kepada ketiga atom oksigen melalui delokalisasi elektron $\\pi$:
       $$\\delta(\\ce{O}) = \\frac{-2}{3} \\approx \\mathbf{-0.67}$$
   - **Pada Ion Karbonat ($\\ce{CO3^2-}$):**
     - Atom karbon pusat memiliki muatan formal $0$.
     - Muatan total anion adalah $-2$.
     - Muatan $-2$ ini terdistribusi merata kepada ketiga atom oksigen:
       $$\\delta(\\ce{O}) = \\frac{-2}{3} \\approx \\mathbf{-0.67}$$
   - Jadi, masing-masing atom oksigen pada kedua anion tersebut mengemban muatan parsial negatif yang sama persis, yaitu $-\\frac{2}{3}$.`,
    solution_framework_template: `1. Penggambaran Tiga Kontributor Resonansi Kanonikal:
• Struktur Lewis NO3- dengan variasi ikatan rangkap pada O1, O2, O3: ....
• Struktur Lewis CO3(2-) dengan variasi ikatan rangkap pada O1, O2, O3: ....
• Pencantuman muatan formal lengkap tiap atom pada setiap struktur: ....

2. Penghitungan Orde Ikatan Parsial Rata-Rata:
• Formula: BO = (Total ikatan pada seluruh struktur) / (Jumlah struktur)
• Perhitungan BO ikatan N-O (4/3 = 1.33): ....
• Perhitungan BO ikatan C-O (4/3 = 1.33): ....
• Korelasi orde ikatan parsial 1.33 dengan panjang ikatan eksperimen: ....

3. Distribusi Delokalisasi Muatan Parsial Oksigen:
• Analisis pembagian muatan netto anion ke ketiga atom oksigen: ....
• Hasil akhir muatan parsial delta(O) pada NO3- (-2/3) dan CO3(2-) (-2/3): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA / IChO Training',
    tags: ['resonansi-struktur', 'delokalisasi-pi', 'orde-ikatan-parsial', 'muatan-parsial', 'nitrat-dan-karbonat'],
  },
];
