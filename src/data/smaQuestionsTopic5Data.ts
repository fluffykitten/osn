/**
 * smaQuestionsTopic5Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase E & OSN Pilar 3)
 * 
 * BATCH 5: Tata Nama Senyawa & Persamaan Reaksi Kimia (Topik 4 SMA / Modul 104)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 104001 - 104025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 104001 - 104025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 104001 - 104025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_5_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 104001 - 104025)
  // =========================================================================
  {
    id: 104001,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tata Nama Senyawa Biner Ionik (Golongan Utama & Sistem Stok)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penamaan Senyawa Biner Ionik Menurut Kaidah IUPAC',
    question_text: `Perhatikan tabel rumus kimia dan nama senyawa berikut:

| No. | Rumus Kimia | Nama Senyawa yang Diajukan |
| :---: | :---: | :--- |
| (1) | $\\ce{Al2O3}$ | Dialuminium trioksida |
| (2) | $\\ce{MgCl2}$ | Magnesium klorida |
| (3) | $\\ce{Fe2O3}$ | Besi(II) oksida |
| (4) | $\\ce{Cu2O}$ | Tembaga(I) oksida |
| (5) | $\\ce{Na2S}$ | Dinatrium monosulfida |

Berdasarkan aturan tata nama senyawa anorganik biner ionik menurut IUPAC, pasangan rumus kimia dan nama senyawa yang **benar** adalah ....

A. (1) dan (3)  
B. (2) dan (4)  
C. (2) dan (5)  
D. (3) dan (4)  
E. (1) dan (5)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Tata Nama Senyawa Biner Ionik (Logam + Nonlogam):**
   - **Logam Golongan Utama (valensi tunggal, misal Golongan IA, IIA, $\\ce{Al^3+}$):**  
     Nama senyawa langsung: **[Nama Logam] + [Nama Nonlogam diakhiri -ida]**. Tidak menggunakan awalan Yunani (*mono, di, tri*).
     - $\\ce{Al2O3}$: Kation $\\ce{Al^3+}$ dan anion $\\ce{O^2-}$. Karena $\\ce{Al}$ bervalensi tunggal (+3), namanya adalah **Aluminium oksida** (BUKAN dialuminium trioksida). Maka nomor (1) salah.
     - $\\ce{MgCl2}$: Kation $\\ce{Mg^2+}$ dan anion $\\ce{Cl-}$. Namanya adalah **Magnesium klorida** (BUKAN magnesium diklorida). Maka nomor (2) **BENAR**.
     - $\\ce{Na2S}$: Kation $\\ce{Na+}$ dan anion $\\ce{S^2-}$. Namanya adalah **Natrium sulfida** (BUKAN dinatrium monosulfida). Maka nomor (5) salah.
   - **Logam Transisi (valensi jamak, memiliki beberapa biloks):**  
     Wajib mencantumkan bilangan oksidasi kation logam dalam **angka Romawi** di dalam kurung (**Sistem Stok IUPAC**).
     - $\\ce{Fe2O3}$: Muatan total netral $= 0$.  
       $2(\\text{Biloks Fe}) + 3(-2) = 0 \\implies 2(\\text{Biloks Fe}) = +6 \\implies \\text{Biloks Fe} = +3$.  
       Nama yang benar adalah **Besi(III) oksida** (pada tabel tertulis Besi(II) oksida). Maka nomor (3) salah.
     - $\\ce{Cu2O}$: Muatan total netral $= 0$.  
       $2(\\text{Biloks Cu}) + 1(-2) = 0 \\implies 2(\\text{Biloks Cu}) = +2 \\implies \\text{Biloks Cu} = +1$.  
       Nama yang benar adalah **Tembaga(I) oksida**. Maka nomor (4) **BENAR**.

Dengan demikian, pasangan yang tepat adalah **(2) dan (4)**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['tata-nama-senyawa', 'senyawa-biner-ionik', 'sistem-stok', 'aturan-iupac'],
  },
  {
    id: 104002,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tata Nama Senyawa Biner Kovalen (Awalan Angka Yunani)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penerapan Awalan Yunani dan Elisi Vokal pada Senyawa Kovalen Biner',
    question_text: `Suatu senyawa oksida nitrogen tersusun dari 2 atom nitrogen dan 5 atom oksigen pada setiap molekulnya (rumus molekul $\\ce{N2O5}$), sedangkan senyawa lain tersusun dari 1 atom karbon dan 1 atom oksigen (rumus molekul $\\ce{CO}$).

Nama IUPAC baku yang tepat untuk kedua senyawa kovalen biner tersebut berturut-turut adalah ....

A. Nitrogen pentoksida dan Monokarbon monoksida  
B. Dinitrogen pentaoksida dan Karbon monooksida  
C. Dinitrogen pentoksida dan Karbon monoksida  
D. Dinitrogen oksida dan Karbon oksida  
E. Dinitrogen tetroksida dan Karbon dioksida`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Tata Nama Senyawa Biner Kovalen (Nonlogam + Nonlogam):**
   - Menggunakan awalan angka Yunani:  
     $1 = \\text{mono-}, 2 = \\text{di-}, 3 = \\text{tri-}, 4 = \\text{tetra-}, 5 = \\text{penta-}, 6 = \\text{heksa-}$, dst.
   - **Kaidah 1 (Pengabaian Mono- di Unsur Pertama):**  
     Awalan *mono-* **tidak pernah ditulis** untuk unsur pertama jika jumlah atomnya hanya satu.  
     Contoh: $\\ce{CO}$ dinamai **Karbon monoksida**, bukan *monokarbon monoksida*.
   - **Kaidah 2 (Elisi Vokal):**  
     Jika awalan yang berakhiran huruf vokal (*-a* atau *-o*) bertemu dengan kata *oksida* yang diawali huruf *o-*, maka huruf vokal terakhir dari awalan tersebut dihilangkan (dielisi) demi keselarasan pelafalan:
     - *Penta-* + *oksida* $\\to$ **Pentoksida** (bukan *pentaoksida*).
     - *Mono-* + *oksida* $\\to$ **Monoksida** (bukan *monooksida*).
     - *Tetra-* + *oksida* $\\to$ **Tetroksida**.
2. **Analisis Senyawa:**
   - $\\ce{N2O5}$: Ada 2 atom $\\ce{N}$ (*di-*) dan 5 atom $\\ce{O}$ (*penta-* $\\to$ *pentoksida*).  
     Nama baku: **Dinitrogen pentoksida**.
   - $\\ce{CO}$: Ada 1 atom $\\ce{C}$ (tanpa awalan *mono-*) dan 1 atom $\\ce{O}$ (*mono-* $\\to$ *monoksida*).  
     Nama baku: **Karbon monoksida**.

Jadi, nama kedua senyawa tersebut berturut-turut adalah **Dinitrogen pentoksida dan Karbon monoksida**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia Fase E',
    tags: ['senyawa-biner-kovalen', 'awalan-yunani-iupac', 'elisi-vokal', 'oksida-nitrogen'],
  },
  {
    id: 104003,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Anatomi Persamaan Reaksi Kimia & Fase Zat',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Interpretasi Notasi dan Simbolik Persamaan Reaksi Kimia',
    question_text: `Perhatikan persamaan reaksi kimia berikut yang telah setara:

$$\\ce{2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)}$$

Berdasarkan konvensi notasi persamaan reaksi kimia standar, pernyataan berikut yang **paling tepat** adalah ....

A. Angka $6$ pada $\\ce{6HCl}$ adalah angka indeks yang menunjukkan bahwa $1$ molekul tersusun atas $6$ atom klorin  
B. Simbol $(aq)$ pada $\\ce{AlCl3}$ menunjukkan bahwa zat tersebut berwujud cairan murni bebas pelarut  
C. Reaksi tersebut melibatkan $2$ satuan rumus $\\ce{Al}$ padat yang bereaksi dengan $6$ satuan $\\ce{HCl}$ dalam bentuk larutan air  
D. Angka $2$ pada $\\ce{H2(g)}$ adalah koefisien reaksi yang boleh diubah sesuka hati untuk menyetarakan reaksi  
E. Simbol $(s)$ pada $\\ce{Al}$ menyatakan bahwa aluminium berada dalam wujud larutan jenuh (*solution*)`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Komponen Notasi Persamaan Reaksi:**
   - **Koefisien Stoikiometri:** Angka di depan rumus kimia (misal $2$ pada $\\ce{2Al}$, $6$ pada $\\ce{6HCl}$, $2$ pada $\\ce{2AlCl3}$, dan $3$ pada $\\ce{3H2}$). Menunjukkan perbandingan mol atau jumlah partikel reaktan dan produk. Angka ini boleh diubah saat menyetarakan reaksi.
   - **Angka Indeks (Subskrip):** Angka kecil di sebelah kanan bawah lambang atom (misal $3$ pada $\\ce{AlCl3}$ dan $2$ pada $\\ce{H2}$). Menunjukkan jumlah atom unsur dalam satu unit molekul/satuan rumus. **Dilarang diubah** karena mengubah indeks berarti mengubah identitas zat.
   - **Simbol Fase (Wujud Zat):**
     - $(s) = \\text{solid}$ (padat).
     - $(l) = \\text{liquid}$ (cairan murni, misal $\\ce{H2O(l)}$).
     - $(g) = \\text{gas}$ (gas/uap).
     - $(aq) = \\text{aqueous}$ (larutan terlarut dalam air).
2. **Evaluasi Setiap Pilihan Jawaban:**
   - **A salah:** Angka $6$ adalah koefisien stoikiometri, bukan angka indeks.
   - **B salah:** Simbol $(aq)$ menyatakan larutan terlarut dalam air (*aqueous*), sedangkan cairan murni disimbolkan $(l)$.
   - **C BENAR:** Sesuai dengan interpretasi partikulat dan fase zat, $2$ atom/partikel $\\ce{Al}$ padat bereaksi dengan $6$ partikel $\\ce{HCl}$ dalam larutan air.
   - **D salah:** Angka $2$ pada $\\ce{H2}$ adalah angka indeks (bukan koefisien) dan tidak boleh diubah-ubah.
   - **E salah:** Simbol $(s)$ menyatakan fase padatan (*solid*), bukan *solution*.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Dasar Notasi Kimia Fase E',
    tags: ['persamaan-reaksi-kimia', 'fase-fase-zat', 'koefisien-reaksi', 'subskrip-indeks'],
  },
  {
    id: 104004,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penulisan Rumus Kimia Poliatomik & Kristal Hidrat',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Konstruksi Rumus Senyawa dari Kation-Anion Poliatomik dan Senyawa Berair Kristal',
    question_text: `Penulisan rumus kimia senyawa ionik didasarkan pada prinsip kenetralan muatan listrik, di mana jumlah muatan positif dari kation harus tepat meniadakan jumlah muatan negatif dari anion ($\\sum q = 0$).

Tuliskan rumus kimia yang benar untuk masing-masing senyawa anorganik berikut:
1. Kalsium fosfat
2. Besi(III) sulfat
3. Tembaga(II) sulfat pentahidrat
4. Amonium karbonat`,
    expected_final_answer: '1. Ca3(PO4)2; 2. Fe2(SO4)3; 3. CuSO4·5H2O; 4. (NH4)2CO3',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

1. **Kalsium fosfat:**
   - Kation: Kalsium adalah logam Golongan IIA $\\implies \\ce{Ca^2+}$ (muatan $+2$).
   - Anion: Fosfat adalah anion poliatomik $\\implies \\ce{PO4^3-}$ (muatan $-3$).
   - Aturan silang muatan (*criss-cross rule*):  
     $3 \\times (+2) + 2 \\times (-3) = +6 - 6 = 0$.  
     Rumus kimia: **$\\ce{Ca3(PO4)2}$**.

2. **Besi(III) sulfat:**
   - Kation: Besi(III) memiliki biloks $+3 \\implies \\ce{Fe^3+}$.
   - Anion: Sulfat $\\implies \\ce{SO4^2-}$ (muatan $-2$).
   - Menyamakan muatan: Butuh $2$ kation $\\ce{Fe^3+}$ dan $3$ anion $\\ce{SO4^2-}$.  
     Rumus kimia: **$\\ce{Fe2(SO4)3}$**.

3. **Tembaga(II) sulfat pentahidrat:**
   - Kation: Tembaga(II) $\\implies \\ce{Cu^2+}$.
   - Anion: Sulfat $\\implies \\ce{SO4^2-}$.  
     Garam anhidrat: $\\ce{CuSO4}$.
   - Molekul air kristal: Pentahidrat $\\implies 5$ molekul $\\ce{H2O}$.  
     Rumus kimia lengkap: **$\\ce{CuSO4 . 5H2O}$**.

4. **Amonium karbonat:**
   - Kation: Amonium adalah kation poliatomik $\\implies \\ce{NH4+}$ (muatan $+1$).
   - Anion: Karbonat $\\implies \\ce{CO3^2-}$ (muatan $-2$).
   - Menyamakan muatan: Diperlukan $2$ ion amonium untuk menetralkan $1$ ion karbonat.  
     Rumus kimia: **$\\ce{(NH4)2CO3}$**.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan rumus kimia untuk kalsium fosfat dan sertakan analisis muatan kation-anionnya.',
        points: 2.5,
        rubric: 'Menyebutkan ion Ca2+ dan PO43- dengan benar serta menuliskan rumus Ca3(PO4)2 bernilai 2.5 poin.',
      },
      {
        label: 'b',
        question_text: 'Tentukan rumus kimia untuk besi(III) sulfat dari ion-ion penyusunnya.',
        points: 2.5,
        rubric: 'Menyebutkan ion Fe3+ dan SO42- serta menuliskan rumus Fe2(SO4)3 bernilai 2.5 poin.',
      },
      {
        label: 'c',
        question_text: 'Tuliskan rumus kimia senyawa hidrat tembaga(II) sulfat pentahidrat.',
        points: 2.5,
        rubric: 'Menuliskan rumus CuSO4·5H2O secara tepat bernilai 2.5 poin.',
      },
      {
        label: 'd',
        question_text: 'Tentukan rumus kimia amonium karbonat dengan memperhatikan tanda kurung pada kation poliatomik.',
        points: 2.5,
        rubric: 'Menuliskan rumus (NH4)2CO3 dengan kurung yang benar bernilai 2.5 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Ujian Tengah Semester Kimia Fase E',
    tags: ['ion-poliatomik', 'oksianion-asam-basa', 'senyawa-hidrat-kristal', 'tata-nama-senyawa'],
  },
  {
    id: 104005,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penyetaraan Reaksi Kimia Metode Inspeksi Langsung (KAHO)',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penyetaraan Reaksi Pembakaran dan Pelarutan Menggunakan Kaidah KAHO',
    question_text: `Setarakan persamaan reaksi kimia berikut menggunakan metode inspeksi langsung dengan menerapkan urutan prioritas KAHO (Kation/Logam $\\to$ Anion/Nonlogam $\\to$ Hidrogen $\\to$ Oksigen):

1. Reaksi pembakaran gas propana:  
   $$\\ce{... C3H8(g) + ... O2(g) -> ... CO2(g) + ... H2O(g)}$$

2. Reaksi pelarutan padatan aluminium hidroksida dalam larutan asam klorida:  
   $$\\ce{... Al(OH)3(s) + ... HCl(aq) -> ... AlCl3(aq) + ... H2O(l)}$$`,
    expected_final_answer: '1. C3H8 + 5O2 -> 3CO2 + 4H2O; 2. Al(OH)3 + 3HCl -> AlCl3 + 3H2O',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban:**

1. **Penyetaraan Reaksi Pembakaran Propana ($\\ce{C3H8}$):**
   - Langkah 1 (Nonlogam C): Di kiri ada $3$ atom $\\ce{C}$, beri koefisien $3$ pada $\\ce{CO2}$.  
     $$\\ce{C3H8 + O2 -> 3CO2 + H2O}$$
   - Langkah 2 (Hidrogen H): Di kiri ada $8$ atom $\\ce{H}$, beri koefisien $4$ pada $\\ce{H2O}$ ($4 \\times 2 = 8$).  
     $$\\ce{C3H8 + O2 -> 3CO2 + 4H2O}$$
   - Langkah 3 (Oksigen O): Hitung total atom $\\ce{O}$ di ruas kanan:  
     Di ruas kanan $= (3 \\times 2) + (4 \\times 1) = 6 + 4 = 10$ atom $\\ce{O}$.  
     Di ruas kiri, tiap molekul $\\ce{O2}$ memiliki $2$ atom $\\ce{O}$, sehingga koefisien $\\ce{O2} = \\frac{10}{2} = 5$.
   - **Persamaan Setara:**  
     $$\\mathbf{\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g)}}$$

2. **Penyetaraan Reaksi $\\ce{Al(OH)3 + HCl}$:**
   - Langkah 1 (Kation/Logam Al): Di kiri ada $1$ atom $\\ce{Al}$, di kanan ada $1$ atom $\\ce{Al}$ (sudah setara).
   - Langkah 2 (Anion Cl): Di kanan ada $3$ atom $\\ce{Cl}$ pada $\\ce{AlCl3}$, beri koefisien $3$ pada $\\ce{HCl}$.  
     $$\\ce{Al(OH)3 + 3HCl -> AlCl3 + H2O}$$
   - Langkah 3 (Hidrogen H): Di kiri terdapat $3$ atom $\\ce{H}$ (dari $\\ce{Al(OH)3}$) $+ 3$ atom $\\ce{H}$ (dari $\\ce{3HCl}$) $= 6$ atom $\\ce{H}$.  
     Beri koefisien $3$ pada $\\ce{H2O}$ ($3 \\times 2 = 6$).
   - Langkah 4 (Oksigen O): Di kiri ada $3$ atom $\\ce{O}$, di kanan ada $3$ atom $\\ce{O}$ pada $\\ce{3H2O}$ (otomatis setara!).
   - **Persamaan Setara:**  
     $$\\mathbf{\\ce{Al(OH)3(s) + 3HCl(aq) -> AlCl3(aq) + 3H2O(l)}}$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan tahapan penyetaraan atom C, H, dan O serta persamaan reaksi setara untuk pembakaran propana.',
        points: 5,
        rubric: 'Menjelaskan tahapan penyetaraan atom C, H, O dan memberikan persamaan reaksi C3H8 + 5O2 -> 3CO2 + 4H2O secara benar bernilai 5 poin.',
      },
      {
        label: 'b',
        question_text: 'Tuliskan tahapan penyetaraan kation Al, anion Cl, serta H dan O untuk reaksi Al(OH)3 dengan HCl.',
        points: 5,
        rubric: 'Menjelaskan tahapan penyetaraan Al, Cl, H, O dan persamaan setara Al(OH)3 + 3HCl -> AlCl3 + 3H2O secara benar bernilai 5 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Penilaian Keterampilan Stoikiometri Fase E',
    tags: ['penyetaraan-reaksi-inspeksi', 'kaidah-kaho', 'pembakaran-propana', 'persamaan-reaksi-kimia'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 104001 - 104025)
  // =========================================================================
  {
    id: 104006,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tata Nama Oksianion Halogen & Bilangan Oksidasi Bertingkat',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Korelasi Bilangan Oksidasi Klorin dengan Deret Oksianion Hipo-...-it hingga Per-...-at',
    question_text: `Klorin dapat membentuk empat macam anion oksi dengan rumus ion $\\ce{ClO-}$, $\\ce{ClO2-}$, $\\ce{ClO3-}$, dan $\\ce{ClO4-}$. Jika anion-anion tersebut berikatan dengan kation kalium ($\\ce{K+}$), dihasilkan empat garam kalium.

Pasangan yang menunjukkan **nama senyawa garam** beserta **bilangan oksidasi klorin** di dalamnya yang benar adalah ....

A. $\\ce{KClO}$ : Kalium klorit, dengan biloks $\\ce{Cl} = +1$  
B. $\\ce{KClO2}$ : Kalium hipoklorit, dengan biloks $\\ce{Cl} = +3$  
C. $\\ce{KClO3}$ : Kalium klorat, dengan biloks $\\ce{Cl} = +5$  
D. $\\ce{KClO4}$ : Kalium perklorat, dengan biloks $\\ce{Cl} = +6$  
E. $\\ce{KClO3}$ : Kalium perklorat, dengan biloks $\\ce{Cl} = +5$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Penamaan Deret Oksianion Halogen:**
   - Deret oksianion disusun berdasarkan kenaikan jumlah atom $\\ce{O}$ dan kenaikan bilangan oksidasi atom halogen:
     1. $\\ce{ClO-}$ : **Hipoklorit**  
        Perhitungan biloks: $\\text{Biloks Cl} + (-2) = -1 \\implies \\text{Biloks Cl} = +1$.  
        Garam $\\ce{KClO}$ bernama **Kalium hipoklorit**.
     2. $\\ce{ClO2-}$ : **Klorit**  
        Perhitungan biloks: $\\text{Biloks Cl} + 2(-2) = -1 \\implies \\text{Biloks Cl} = +3$.  
        Garam $\\ce{KClO2}$ bernama **Kalium klorit**.
     3. $\\ce{ClO3-}$ : **Klorat**  
        Perhitungan biloks: $\\text{Biloks Cl} + 3(-2) = -1 \\implies \\text{Biloks Cl} = +5$.  
        Garam $\\ce{KClO3}$ bernama **Kalium klorat**.
     4. $\\ce{ClO4-}$ : **Perklorat**  
        Perhitungan biloks: $\\text{Biloks Cl} + 4(-2) = -1 \\implies \\text{Biloks Cl} = +7$.  
        Garam $\\ce{KClO4}$ bernama **Kalium perklorat**.

2. **Evaluasi Pilihan:**
   - Opsi A salah: $\\ce{KClO}$ adalah kalium hipoklorit (bukan klorit).
   - Opsi B salah: $\\ce{KClO2}$ adalah kalium klorit (bukan hipoklorit).
   - Opsi C **BENAR**: $\\ce{KClO3}$ adalah kalium klorat dengan biloks $\\ce{Cl} = +5$.
   - Opsi D salah: Biloks klorin pada perklorat adalah $+7$ (bukan $+6$).
   - Opsi E salah: $\\ce{KClO3}$ adalah klorat (bukan perklorat).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Bersama Kimia SMA Fase E',
    tags: ['oksianion-asam-basa', 'bilangan-oksidasi-romawi', 'tata-nama-senyawa', 'deret-klorat'],
  },
  {
    id: 104007,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penyetaraan Pembakaran Hidrokarbon Sempurna & Bilangan Bulat Terkecil',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Koefisien Reaksi Pembakaran Sempurna Gas Butana',
    question_text: `Bahan bakar elpiji sebagian besar mengandung gas butana ($\\ce{C4H10}$). Pembakaran sempurna gas butana oleh gas oksigen di udara menghasilkan gas karbon dioksida dan uap air menurut persamaan reaksi belum setara:

$$\\ce{a C4H10(g) + b O2(g) -> c CO2(g) + d H2O(g)}$$

Jika persamaan reaksi tersebut disetarakan dengan koefisien bilangan bulat positif paling sederhana, maka nilai koefisien $a, b, c,$ dan $d$ berturut-turut adalah ....

A. $1, 13, 4, 5$  
B. $2, 13, 8, 10$  
C. $2, 15, 8, 10$  
D. $1, \\frac{13}{2}, 4, 5$  
E. $2, 26, 8, 10$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Langkah Awal (Basis $a = 1$):**
   - Tetapkan koefisien $\\ce{C4H10} = 1$:
     $$\\ce{1 C4H10 + b O2 -> c CO2 + d H2O}$$
2. **Neraca Atom C:**
   - Ruas kiri: $1 \\times 4 = 4$ atom $\\ce{C}$.
   - Ruas kanan: $c \\times 1 = 4 \\implies c = 4$.
3. **Neraca Atom H:**
   - Ruas kiri: $1 \\times 10 = 10$ atom $\\ce{H}$.
   - Ruas kanan: $d \\times 2 = 10 \\implies d = 5$.
4. **Neraca Atom O:**
   - Ruas kanan memiliki total atom $\\ce{O}$:
     $$(4 \\times 2) + (5 \\times 1) = 8 + 5 = 13\\text{ atom O}$$
   - Ruas kiri: $b \\times 2 = 13 \\implies b = \\frac{13}{2}$.
   - Persamaan sementara:
     $$\\ce{1 C4H10 + \\frac{13}{2} O2 -> 4 CO2 + 5 H2O}$$
5. **Konversi ke Bilangan Bulat Positif Terkecil:**
   - Kalikan seluruh koefisien dengan $2$ agar tidak ada pecahan:
     $$a = 1 \\times 2 = 2$$
     $$b = \\frac{13}{2} \\times 2 = 13$$
     $$c = 4 \\times 2 = 8$$
     $$d = 5 \\times 2 = 10$$
   - Persamaan reaksi setara bulat:
     $$\\mathbf{\\ce{2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(g)}}$$

Jadi, nilai berturut-turut adalah **$2, 13, 8, 10$**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Ulangan Harian Kimia Fase E',
    tags: ['penyetaraan-reaksi-inspeksi', 'pembakaran-butana', 'koefisien-reaksi'],
  },
  {
    id: 104008,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tata Nama Asam Oksi & Basa Hidroksida Logam Transisi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Identifikasi Pasangan Rumus dan Nama Senyawa Asam-Basa Anorganik',
    question_text: `Diberikan lima rumus kimia senyawa berikut:
1. $\\ce{H2SO3}$
2. $\\ce{HNO2}$
3. $\\ce{Fe(OH)2}$
4. $\\ce{H3PO4}$
5. $\\ce{Cu(OH)2}$

Nama senyawa yang benar untuk kelima senyawa tersebut secara berturut-turut adalah ....

A. Asam sulfat, asam nitrat, besi(II) hidroksida, asam fosfit, tembaga(I) hidroksida  
B. Asam sulfit, asam nitrit, besi(II) hidroksida, asam fosfat, tembaga(II) hidroksida  
C. Asam sulfit, asam nitrat, besi(III) hidroksida, asam fosfat, tembaga(II) hidroksida  
D. Asam sulfida, asam nitrit, besi(II) hidroksida, asam fosfit, tembaga(I) hidroksida  
E. Asam sulfat, asam nitrit, fero hidroksida, asam hipofosfit, tembaga(II) hidroksida`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Nama Asam Oksi:**
   - $\\ce{H2SO3}$: Anion adalah $\\ce{SO3^2-}$ (sulfit), sehingga namanya adalah **Asam sulfit** (sedangkan $\\ce{H2SO4}$ adalah asam sulfat).
   - $\\ce{HNO2}$: Anion adalah $\\ce{NO2-}$ (nitrit), sehingga namanya adalah **Asam nitrit** (sedangkan $\\ce{HNO3}$ adalah asam nitrat).
   - $\\ce{H3PO4}$: Anion adalah $\\ce{PO4^3-}$ (fosfat), sehingga namanya adalah **Asam fosfat**.
2. **Analisis Nama Basa Logam Transisi:**
   - $\\ce{Fe(OH)2}$: Kation adalah $\\ce{Fe^2+}$ (biloks $+2$), anion $\\ce{OH-}$. Nama IUPAC Sistem Stok adalah **Besi(II) hidroksida**.
   - $\\ce{Cu(OH)2}$: Kation adalah $\\ce{Cu^2+}$ (biloks $+2$), anion $\\ce{OH-}$. Nama IUPAC Sistem Stok adalah **Tembaga(II) hidroksida**.

Maka urutan nama yang benar adalah: **Asam sulfit, asam nitrit, besi(II) hidroksida, asam fosfat, tembaga(II) hidroksida**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Penilaian Akhir Semester Kimia',
    tags: ['oksianion-asam-basa', 'tata-nama-senyawa', 'asam-oksi', 'basa-hidroksida'],
  },
  {
    id: 104009,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Reaksi Pengendapan & Identifikasi Ion Penonton (Spectator Ions)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Spesi Ion Penonton pada Reaksi Pembentukan Endapan Barium Sulfat',
    question_text: `Ketika larutan barium klorida ($\\ce{BaCl2}$) dicampurkan dengan larutan natrium sulfat ($\\ce{Na2SO4}$), seketika terbentuk endapan putih barium sulfat ($\\ce{BaSO4}$) di dalam larutan natrium klorida menurut persamaan molekuler:

$$\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s)\downarrow + 2NaCl(aq)}$$

Spesi kimia yang bertindak sebagai **ion penonton (*spectator ions*)** dan persamaan ionik bersih (*net ionic equation*) dari reaksi tersebut adalah ....

A. Ion penonton: $\\ce{Ba^2+}$ dan $\\ce{SO4^2-}$; Persamaan ionik bersih: $\\ce{Na+(aq) + Cl-(aq) -> NaCl(aq)}$  
B. Ion penonton: $\\ce{Na+}$ dan $\\ce{Cl-}$; Persamaan ionik bersih: $\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow}$  
C. Ion penonton: $\\ce{Ba^2+}$ dan $\\ce{Na+}$; Persamaan ionik bersih: $\\ce{BaCl2(aq) + SO4^2-(aq) -> BaSO4(s) + 2Cl-(aq)}$  
D. Ion penonton: $\\ce{Cl-}$ dan $\\ce{SO4^2-}$; Persamaan ionik bersih: $\\ce{Ba^2+(aq) + 2Na+(aq) -> BaNa2(aq)}$  
E. Reaksi ini tidak memiliki ion penonton karena seluruh reaktan habis bereaksi membentuk produk`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Persamaan Molekuler:**
   $$\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s)\downarrow + 2NaCl(aq)}$$
2. **Persamaan Ionik Lengkap (*Complete Ionic Equation*):**
   Uraikan semua senyawa elektrolit kuat berfase terlarut $(aq)$ menjadi ion-ionnya:
   $$\\ce{Ba^2+(aq) + 2Cl-(aq) + 2Na+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow + 2Na+(aq) + 2Cl-(aq)}$$
   *(Catatan: $\\ce{BaSO4}$ berwujud padat $(s)$, sehingga TIDAK diuraikan menjadi ion).*
3. **Identifikasi Ion Penonton (*Spectator Ions*):**
   Ion penonton adalah ion yang muncul dalam wujud dan jumlah yang identik di kedua ruas persamaan tanpa mengalami perubahan kimiawi.
   - Ion $\\ce{2Na+(aq)}$ ada di kiri dan di kanan.
   - Ion $\\ce{2Cl-(aq)}$ ada di kiri dan di kanan.  
   Maka ion penonton adalah **$\\ce{Na+}$ dan $\\ce{Cl-}$**.
4. **Persamaan Ionik Bersih (*Net Ionic Equation*):**
   Setelah ion penonton dicoret (dieliminasi):
   $$\\mathbf{\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow}}$$

Dengan demikian, pilihan yang tepat adalah **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Modul Pengayaan Kimia Fase E',
    tags: ['persamaan-ionik-bersih', 'ion-penonton-spectator-ions', 'reaksi-pengendapan'],
  },
  {
    id: 104010,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tata Nama Hidrokarbon Alkana Bercabang Sederhana',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Nama IUPAC Senyawa Alkana Bercabang Berdasarkan Struktur Rantai',
    question_text: `Perhatikan rumus struktur senyawa hidrokarbon alkana berikut:

$$\\ce{CH3 - CH(CH3) - CH2 - CH(C2H5) - CH3}$$

Berdasarkan aturan IUPAC untuk penamaan senyawa alkana bercabang, nama senyawa yang benar adalah ....

A. 2-metil-4-etilpentana  
B. 4-etil-2-metilpentana  
C. 2,4-dimetilheksana  
D. 3,5-dimetilheksana  
E. 3-metil-5-etilpentana`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Ekspansi Rumus Struktur:**
   Gugus etil ($-\\ce{C2H5}$) di atom karbon nomor $4$ (jika dihitung dari kiri) dapat diuraikan menjadi $-\\ce{CH2 - CH3}$:
   $$\\ce{CH3 - CH(CH3) - CH2 - CH(CH2 - CH3) - CH3}$$
2. **Menentukan Rantai Karbon Terpanjang (Rantai Induk):**
   - Jika rantai horizontal lurus: terdapat $5$ atom karbon (pentana).
   - Namun, jika belok ke arah gugus etil ($-\\ce{CH2 - CH3}$):  
     Panjang rantai utama menjadi **$6$ atom karbon** (heksana)!
     $$\\ce{C_1H3 - C_2H(CH3) - C_3H2 - C_4H(CH3) - C_5H2 - C_6H3}$$
3. **Penomoran Rantai Utama:**
   - Dari kiri ke kanan: cabang metil berada pada nomor atom C-2 dan C-4. (Set nomor: $2, 4$).
   - Dari kanan ke kiri: cabang metil berada pada nomor atom C-3 dan C-5. (Set nomor: $3, 5$).
   - Sesuai aturan nomor terkecil (*lowest locant rule*), dipilih penomoran **dari kiri**.
4. **Pemberian Nama Lengkap:**
   - Cabang: dua buah gugus metil pada C-2 dan C-4 $\\implies$ **2,4-dimetil**.
   - Rantai induk: 6 atom karbon $\\implies$ **heksana**.
   - Nama lengkap IUPAC: **2,4-dimetilheksana**.

*Kesalahan umum siswa adalah memilih rantai lurus 5 karbon sehingga keliru menamai 2-metil-4-etilpentana.*`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Hidrokarbon SMA Fase E',
    tags: ['tata-nama-hidrokarbon', 'alkana-alkena-alkuna', 'aturan-iupac', 'rantai-utama'],
  },
  {
    id: 104011,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Analisis Bilangan Oksidasi Logam & Tata Nama Sistem Stok IUPAC',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Bilangan Oksidasi Logam Transisi dan Formulasi Nama IUPAC Sistem Stok',
    question_text: `Unsur logam transisi dan pasca-transisi mampu membentuk berbagai senyawa dengan bilangan oksidasi yang bervariasi. Berdasarkan Sistem Stok IUPAC, harga bilangan oksidasi kation logam dinyatakan dengan angka Romawi di dalam tanda kurung.

Diberikan empat senyawa anorganik berikut:
1. $\\ce{SnO2}$
2. $\\ce{Cu2S}$
3. $\\ce{Fe2(SO4)3}$
4. $\\ce{KMnO4}$

Untuk masing-masing senyawa di atas:
a. Hitung bilangan oksidasi atom logam transisi/pusatnya.
b. Tuliskan nama resmi senyawa tersebut menurut tata nama IUPAC Sistem Stok.`,
    expected_final_answer: '1. Sn=+4, Timah(IV) oksida; 2. Cu=+1, Tembaga(I) sulfida; 3. Fe=+3, Besi(III) sulfat; 4. Mn=+7, Kalium permanganat',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

1. **Senyawa $\\ce{SnO2}$:**
   - Oksigen memiliki biloks $-2$.  
     $\\text{Biloks Sn} + 2(-2) = 0 \\implies \\text{Biloks Sn} = +4$.
   - Nama IUPAC: **Timah(IV) oksida** *(nama trivial: stani oksida)*.

2. **Senyawa $\\ce{Cu2S}$:**
   - Belerang (sulfida) bermuatan $-2$ (biloks $-2$).  
     $2(\\text{Biloks Cu}) + (-2) = 0 \\implies 2(\\text{Biloks Cu}) = +2 \\implies \\text{Biloks Cu} = +1$.
   - Nama IUPAC: **Tembaga(I) sulfida** *(nama trivial: kupro sulfida)*.

3. **Senyawa $\\ce{Fe2(SO4)3}$:**
   - Ion sulfat adalah $\\ce{SO4^2-}$ dengan muatan total $-2$.  
     $2(\\text{Biloks Fe}) + 3(-2) = 0 \\implies 2(\\text{Biloks Fe}) = +6 \\implies \\text{Biloks Fe} = +3$.
   - Nama IUPAC: **Besi(III) sulfat** *(nama trivial: feri sulfat)*.

4. **Senyawa $\\ce{KMnO4}$:**
   - Kalium adalah logam alkali Golongan IA (biloks $+1$), oksigen $-2$.  
     $(+1) + \\text{Biloks Mn} + 4(-2) = 0 \\implies \\text{Biloks Mn} - 7 = 0 \\implies \\text{Biloks Mn} = +7$.
   - Anion $\\ce{MnO4-}$ dengan $\\text{Mn(VII)}$ dinamai permanganat.  
   - Nama IUPAC: **Kalium permanganat** *(atau Kalium manganat(VII))*.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung biloks Sn pada SnO2 dan tuliskan nama IUPAC-nya.',
        points: 2.5,
        rubric: 'Perhitungan biloks Sn = +4 dan nama Timah(IV) oksida bernilai 2.5 poin.',
      },
      {
        label: 'b',
        question_text: 'Hitung biloks Cu pada Cu2S dan tuliskan nama IUPAC-nya.',
        points: 2.5,
        rubric: 'Perhitungan biloks Cu = +1 dan nama Tembaga(I) sulfida bernilai 2.5 poin.',
      },
      {
        label: 'c',
        question_text: 'Hitung biloks Fe pada Fe2(SO4)3 dan tuliskan nama IUPAC-nya.',
        points: 2.5,
        rubric: 'Perhitungan biloks Fe = +3 dan nama Besi(III) sulfat bernilai 2.5 poin.',
      },
      {
        label: 'd',
        question_text: 'Hitung biloks Mn pada KMnO4 dan tuliskan nama IUPAC-nya.',
        points: 2.5,
        rubric: 'Perhitungan biloks Mn = +7 dan nama Kalium permanganat bernilai 2.5 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E',
    tags: ['bilangan-oksidasi-romawi', 'sistem-stok', 'tata-nama-senyawa', 'logam-transisi'],
  },
  {
    id: 104012,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penyetaraan Reaksi Metode Aljabar Matematis (SPL Homogen)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penyetaraan Reaksi Oksidasi Tembaga oleh Asam Nitrat Pekat Menggunakan Metode Aljabar',
    question_text: `Reaksi antara logam tembaga dengan larutan asam nitrat pekat menghasilkan larutan tembaga(II) nitrat, gas nitrogen dioksida yang berwarna cokelat kemerahan, dan air. Persamaan reaksi belum setara dituliskan sebagai berikut:

$$\\ce{a Cu(s) + b HNO3(aq) -> c Cu(NO3)2(aq) + d NO2(g) + e H2O(l)}$$

Selesaikan penyetaraan reaksi tersebut dengan menerapkan metode aljabar matematis:
a. Tuliskan persamaan neraca atom untuk masing-masing unsur ($\\ce{Cu, H, N, O}$).
b. Dengan menetapkan nilai basis $a = 1$, selesaikan sistem persamaan linier tersebut untuk menentukan nilai $b, c, d,$ dan $e$.
c. Tuliskan persamaan reaksi kimia setara lengkap dengan koefisien bilangan bulat terkecil.`,
    expected_final_answer: 'Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O (koefisien: 1, 4, 1, 2, 2)',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

1. **Penyusunan Neraca Kesetaraan Atom:**
   - Atom $\\ce{Cu}$: $a = c$
   - Atom $\\ce{H}$: $b = 2e$
   - Atom $\\ce{N}$: $b = 2c + d$
   - Atom $\\ce{O}$: $3b = 6c + 2d + e$

2. **Penyelesaian Sistem Persamaan Linier:**
   - Tetapkan basis awal: **$a = 1$**.
   - Dari neraca $\\ce{Cu}$: **$c = a = 1$**.
   - Substitusi $b = 2e$ ke dalam neraca $\\ce{N}$:
     $$2e = 2(1) + d \\implies d = 2e - 2$$
   - Substitusi $b = 2e$, $c = 1$, dan $d = 2e - 2$ ke dalam neraca $\\ce{O}$:
     $$3(2e) = 6(1) + 2(2e - 2) + e$$
     $$6e = 6 + 4e - 4 + e$$
     $$6e = 5e + 2 \\implies e = 2$$
   - Hitung nilai variabel lainnya:
     $$b = 2e = 2(2) = 4$$
     $$d = 2e - 2 = 2(2) - 2 = 2$$
     $$c = 1$$
     $$a = 1$$

3. **Verifikasi Koefisien:**
   Semua koefisien telah berupa bilangan bulat positif terkecil:
   $$a = 1, \\quad b = 4, \\quad c = 1, \\quad d = 2, \\quad e = 2$$

4. **Persamaan Reaksi Kimia Setara:**
   $$\\mathbf{\\ce{Cu(s) + 4HNO3(aq) -> Cu(NO3)2(aq) + 2NO2(g) + 2H2O(l)}}$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan 4 persamaan neraca kesetaraan massa atom untuk unsur Cu, H, N, dan O.',
        points: 3,
        rubric: 'Menuliskan keempat persamaan neraca atom secara tepat bernilai 3 poin.',
      },
      {
        label: 'b',
        question_text: 'Tunjukkan langkah substitusi dan eliminasi matematis untuk menemukan nilai variabel b, c, d, dan e jika a = 1.',
        points: 4,
        rubric: 'Menunjukkan langkah aljabar yang runtut hingga diperoleh a=1, b=4, c=1, d=2, e=2 bernilai 4 poin.',
      },
      {
        label: 'c',
        question_text: 'Tuliskan persamaan reaksi setara akhir dengan wujud zat lengkap.',
        points: 3,
        rubric: 'Menuliskan persamaan akhir Cu(s) + 4HNO3(aq) -> Cu(NO3)2(aq) + 2NO2(g) + 2H2O(l) bernilai 3 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Latihan Penyetaraan Aljabar Kimia SMA',
    tags: ['penyetaraan-reaksi-aljabar', 'sistem-persamaan-linier', 'reaksi-redoks-asam-nitrat'],
  },
  {
    id: 104013,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Formulasi Persamaan Ionik Lengkap dan Ionik Bersih',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Transformasi Persamaan Reaksi Molekuler ke Persamaan Ionik Bersih pada Pembentukan Endapan Timbal(II) Iodida',
    question_text: `Pencampuran larutan timbal(II) nitrat, $\\ce{Pb(NO3)2(aq)}$, dengan larutan kalium iodida, $\\ce{KI(aq)}$, menghasilkan endapan kuning cerah timbal(II) iodida, $\\ce{PbI2(s)}$, dan larutan kalium nitrat, $\\ce{KNO3(aq)}$.

Berdasarkan fenomena reaksi pengendapan tersebut:
a. Tuliskan persamaan reaksi molekuler yang telah setara lengkap dengan simbol fase wujud zatnya.
b. Uraikan persamaan molekuler tersebut menjadi **persamaan reaksi ionik lengkap (*complete ionic equation*)**.
c. Sebutkan ion-ion yang bertindak sebagai **ion penonton (*spectator ions*)**.
d. Tuliskan **persamaan reaksi ionik bersih (*net ionic equation*)** yang menggambarkan perubahan kimia esensial.`,
    expected_final_answer: 'Pb2+(aq) + 2I-(aq) -> PbI2(s)',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Persamaan Molekuler Setara:**
   $$\\mathbf{\\ce{Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s)\downarrow + 2KNO3(aq)}}$$

b. **Persamaan Ionik Lengkap (*Complete Ionic Equation*):**
   Senyawa elektrolit kuat larut ($\\ce{Pb(NO3)2}$, $\\ce{KI}$, dan $\\ce{KNO3}$) terdisosiasi sempurna menjadi ion-ionnya dalam air, sedangkan endapan padatan $\\ce{PbI2(s)}$ tetap ditulis sebagai kesatuan senyawa:
   $$\\mathbf{\\ce{Pb^2+(aq) + 2NO3-(aq) + 2K+(aq) + 2I-(aq) -> PbI2(s)\downarrow + 2K+(aq) + 2NO3-(aq)}}$$

c. **Identifikasi Ion Penonton (*Spectator Ions*):**
   Ion penonton adalah ion yang tidak mengalami perubahan fase maupun ikatan dan muncul di kedua sisi tanda panah:
   - Ion kalium: **$\\ce{K+(aq)}$**
   - Ion nitrat: **$\\ce{NO3-(aq)}$**

d. **Persamaan Ionik Bersih (*Net Ionic Equation*):**
   Mengeliminasi ion $\\ce{2K+(aq)}$ dan $\\ce{2NO3-(aq)}$ dari kedua ruas:
   $$\\mathbf{\\ce{Pb^2+(aq) + 2I-(aq) -> PbI2(s)\downarrow}}$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan reaksi molekuler setara dengan fase wujud zat.',
        points: 2.5,
        rubric: 'Menuliskan Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq) dengan benar bernilai 2.5 poin.',
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan reaksi ionik lengkap dengan menguraikan elektrolit kuat terlarut.',
        points: 2.5,
        rubric: 'Menguraikan kation dan anion terlarut secara tepat bernilai 2.5 poin.',
      },
      {
        label: 'c',
        question_text: 'Sebutkan kedua ion penonton (spectator ions) yang terlibat.',
        points: 2.5,
        rubric: 'Menyebutkan K+ dan NO3- bernilai 2.5 poin.',
      },
      {
        label: 'd',
        question_text: 'Tuliskan persamaan ionik bersih yang menunjukkan pembentukan endapan PbI2.',
        points: 2.5,
        rubric: 'Menuliskan Pb2+(aq) + 2I-(aq) -> PbI2(s) bernilai 2.5 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Penilaian Keterampilan Kimia Analitik SMA',
    tags: ['persamaan-ionik-bersih', 'reaksi-pengendapan', 'ion-penonton-spectator-ions', 'timbal-iodida'],
  },
  {
    id: 104014,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hukum Kekekalan Massa Lavoisier dalam Sistem Tertutup vs Terbuka',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Verifikasi Eksperimental Hukum Kekekalan Massa pada Reaksi Karbonat dengan Asam',
    question_text: `Di laboratorium sekolah, sekelompok siswa mereaksikan $10{,}0\\ \\text{g}$ kalsium karbonat padat ($\\ce{CaCO3}$) dengan $50{,}0\\ \\text{g}$ larutan asam klorida ($\\ce{HCl}$) berlebih di dalam dua kondisi bejana yang berbeda:

- **Eksperimen 1:** Dilakukan di dalam Erlenmeyer terbuka di atas timbangan digital.
- **Eksperimen 2:** Dilakukan di dalam bejana tertutup rapat yang terpasang sensor tekanan.

Reaksi kimia yang berlangsung adalah:
$$\\ce{CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)}$$

Pertanyaan:
a. Berapakah massa total awal reaktan sebelum reaksi pada kedua eksperimen?
b. Pada Eksperimen 1, timbangan digital setelah reaksi selesai menunjukkan massa sebesar $55{,}6\\ \\text{g}$. Mengapa massa akhir tampak berkurang dari massa awal? Apakah fenomena ini melanggar Hukum Kekekalan Massa Lavoisier? Jelaskan.
c. Berapakah massa gas karbon dioksida ($\\ce{CO2}$) yang terlepas ke atmosfer pada Eksperimen 1?
d. Berapakah massa total zat di dalam wadah pada Eksperimen 2 setelah reaksi selesai?`,
    expected_final_answer: 'a. 60.0 g; b. Gas CO2 keluar, tidak melanggar; c. 4.4 g CO2; d. Tetap 60.0 g',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Massa Total Awal Reaktan:**
   $$m_{\\text{awal}} = m(\\ce{CaCO3}) + m(\\text{larutan HCl}) = 10{,}0\\ \\text{g} + 50{,}0\\ \\text{g} = \\mathbf{60{,}0\\ \\text{g}}$$

b. **Analisis Eksperimen 1 (Wadah Terbuka):**
   - Massa akhir tercatat $55{,}6\\ \\text{g}$, berkurang sebesar $60{,}0 - 55{,}6 = 4{,}4\\ \\text{g}$.
   - **Penyebab:** Reaksi menghasilkan salah satu produk berupa fasa gas, yaitu gas karbon dioksida ($\\ce{CO2(g)}$). Karena wadah terbuka, gas $\\ce{CO2}$ tersebut terbang keluar meninggalkan bejana ke atmosfer bebas sehingga massanya tidak lagi terukur oleh timbangan.
   - **Kesesuaian dengan Hukum Lavoisier:** Fenomena ini **TIDAK melanggar Hukum Kekekalan Massa**. Hukum Lavoisier mensyaratkan pengukuran pada **sistem tertutup**. Jika massa gas $\\ce{CO2}$ yang keluar ($4{,}4\\ \\text{g}$) dijumlahkan kembali dengan massa sisa di wadah ($55{,}6\\ \\text{g}$), total massa tetap tepat $60{,}0\\ \\text{g}$.

c. **Massa Gas $\\ce{CO2}$ yang Terlepas:**
   $$m(\\ce{CO2}) = m_{\\text{awal}} - m_{\\text{terbaca}} = 60{,}0\\ \\text{g} - 55{,}6\\ \\text{g} = \\mathbf{4{,}4\\ \\text{g}}$$

d. **Massa Total pada Eksperimen 2 (Wadah Tertutup):**
   Karena bejana tertutup rapat, tidak ada materi (baik padat, cair, maupun gas) yang dapat keluar dari sistem. Sesuai Hukum Kekekalan Massa Lavoisier, massa total zat setelah reaksi adalah **tetap $60{,}0\\ \\text{g}$**.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung massa total campuran reaktan sebelum reaksi berlangsung.',
        points: 2,
        rubric: 'Menghitung massa awal 10.0 + 50.0 = 60.0 g bernilai 2 poin.',
      },
      {
        label: 'b',
        question_text: 'Jelaskan mengapa massa pada wadah terbuka berkurang dan kaitkan dengan keabsahan Hukum Lavoisier.',
        points: 3,
        rubric: 'Menjelaskan pelepasan gas CO2 dan penegasan bahwa Hukum Lavoisier tetap berlaku bernilai 3 poin.',
      },
      {
        label: 'c',
        question_text: 'Hitung massa gas CO2 yang terbebas ke udara.',
        points: 2,
        rubric: 'Menghitung massa gas CO2 = 4.4 g bernilai 2 poin.',
      },
      {
        label: 'd',
        question_text: 'Tentukan massa akhir pada wadah tertutup rapat beserta alasannya.',
        points: 3,
        rubric: 'Menyatakan massa tetap 60.0 g karena sistem tertutup bernilai 3 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Praktikum Kimia SMA Fase E',
    tags: ['hukum-kekekalan-massa-lavoisier', 'persamaan-reaksi-kimia', 'sistem-tertutup', 'karbonat-asam'],
  },
  {
    id: 104015,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penentuan Rumus Kristal Hidrat dan Tata Nama Senyawa Berair Kristal',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Gravimetri Dekomposisi Termal Kristal Barium Klorida Berair Kristal',
    question_text: `Kristal barium klorida berair kristal memiliki rumus umum $\\ce{BaCl2 . x H2O}$. Sebanyak $4{,}88\\ \\text{g}$ sampel kristal tersebut dipanaskan di dalam cawan porselen sampai seluruh air kristalnya menguap sempurna menurut persamaan reaksi:

$$\\ce{BaCl2 . x H2O(s) ->[\\Delta] BaCl2(s) + x H2O(g)}$$

Setelah dingin, massa residu anhidrat $\\ce{BaCl2}$ yang tersisa ditimbang dan diperoleh massa sebesar $4{,}16\\ \\text{g}$.
(Diketahui massa molar: $\\text{Ar Ba} = 137$, $\\text{Cl} = 35{,}5$, $\\text{H} = 1$, $\\text{O} = 16$).

Pertanyaan:
a. Berapakah massa air kristal ($\\ce{H2O}$) yang menguap dari kristal hidrat tersebut?
b. Hitung jumlah mol $\\ce{BaCl2}$ anhidrat dan jumlah mol $\\ce{H2O}$ yang menguap.
c. Tentukan nilai koefisien $x$ pada rumus kristal hidrat tersebut.
d. Tuliskan rumus kimia lengkap serta nama senyawa hidrat tersebut menurut kaidah IUPAC.`,
    expected_final_answer: 'x = 2, BaCl2·2H2O, Barium klorida dihidrat',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Massa Air Kristal yang Menguap:**
   Berdasarkan Hukum Kekekalan Massa:
   $$m(\\ce{H2O}) = m(\\text{kristal hidrat}) - m(\\ce{BaCl2}\\text{ anhidrat})$$
   $$m(\\ce{H2O}) = 4{,}88\\ \\text{g} - 4{,}16\\ \\text{g} = \\mathbf{0{,}72\\ \\text{g}}$$

b. **Perhitungan Mol Zat:**
   - Massa molar (Mr) $\\ce{BaCl2} = 137 + 2(35{,}5) = 137 + 71 = 208\\ \\text{g/mol}$.  
     $$n(\\ce{BaCl2}) = \\frac{4{,}16\\ \\text{g}}{208\\ \\text{g/mol}} = \\mathbf{0{,}02\\ \\text{mol}}$$
   - Massa molar (Mr) $\\ce{H2O} = 2(1) + 16 = 18\\ \\text{g/mol}$.  
     $$n(\\ce{H2O}) = \\frac{0{,}72\\ \\text{g}}{18\\ \\text{g/mol}} = \\mathbf{0{,}04\\ \\text{mol}}$$

c. **Penentuan Nilai $x$:**
   Perbandingan mol $\\ce{BaCl2} : \\ce{H2O} = 1 : x$:
   $$x = \\frac{n(\\ce{H2O})}{n(\\ce{BaCl2})} = \\frac{0{,}04\\ \\text{mol}}{0{,}02\\ \\text{mol}} = \\mathbf{2}$$

d. **Rumus Kimia & Tata Nama IUPAC:**
   - Rumus kimia lengkap: **$\\ce{BaCl2 . 2H2O}$**.
   - Nama IUPAC: Nama garam anhidrat + awalan Yunani + *hidrat* $\\implies$ **Barium klorida dihidrat**.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung massa air kristal yang teruapkan selama pemanasan.',
        points: 2,
        rubric: 'Menghitung massa H2O = 0.72 g bernilai 2 poin.',
      },
      {
        label: 'b',
        question_text: 'Hitung jumlah mol BaCl2 anhidrat dan mol air yang menguap.',
        points: 3,
        rubric: 'Menghitung mol BaCl2 = 0.02 mol dan mol H2O = 0.04 mol bernilai 3 poin.',
      },
      {
        label: 'c',
        question_text: 'Tentukan perbandingan mol dan nilai x bilangan bulat.',
        points: 2.5,
        rubric: 'Menentukan rasio mol 1 : 2 sehingga x = 2 bernilai 2.5 poin.',
      },
      {
        label: 'd',
        question_text: 'Tuliskan rumus senyawa lengkap dan nama IUPAC-nya.',
        points: 2.5,
        rubric: 'Menuliskan BaCl2·2H2O dan nama Barium klorida dihidrat bernilai 2.5 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Soal Pengayaan Stoikiometri Hidrat SMA',
    tags: ['senyawa-hidrat-kristal', 'tata-nama-senyawa', 'stoikiometri-hidrat', 'hukum-lavoisier'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 104001 - 104025)
  // =========================================================================
  {
    id: 104016,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penyetaraan Reaksi Redoks Disproporsionasi Metode Aljabar Kompleks',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penyetaraan Reaksi Autoredoks Gas Klorin dalam Larutan Basa Panas',
    question_text: `Gas klorin ($\\ce{Cl2}$) jika dialirkan ke dalam larutan natrium hidroksida panas mengalami reaksi disproporsionasi (autoredoks), di mana sebagian atom klorin tereduksi menjadi ion klorida ($\\ce{Cl-}$) dan sebagian lainnya teroksidasi menjadi ion klorat ($\\ce{ClO3-}$).

Persamaan reaksi ionik belum setara adalah:
$$\\ce{a Cl2(g) + b OH-(aq) -> c Cl-(aq) + d ClO3-(aq) + e H2O(l)}$$

Setelah disetarakan dengan koefisien bilangan bulat terkecil yang memenuhi neraca massa maupun neraca muatan listrik, perbandingan koefisien $a : b : c : d : e$ yang benar adalah ....

A. $1 : 2 : 1 : 1 : 1$  
B. $3 : 6 : 5 : 1 : 3$  
C. $2 : 4 : 3 : 1 : 2$  
D. $3 : 6 : 1 : 5 : 3$  
E. $5 : 10 : 3 : 2 : 5$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Neraca Atom dan Muatan Listrik:**
   - Neraca atom $\\ce{Cl}$: $2a = c + d$
   - Neraca atom $\\ce{H}$: $b = 2e$
   - Neraca atom $\\ce{O}$: $b = 3d + e$
   - **Neraca Muatan Listrik:** Ruas kiri harus sama dengan ruas kanan:  
     $-b = -c - d \\implies b = c + d$
2. **Penyelesaian Sistem Persamaan Linier:**
   - Dari neraca $\\ce{Cl}$ dan neraca muatan:  
     $2a = c + d = b \\implies b = 2a$.
   - Dari neraca $\\ce{H}$: $b = 2e \\implies 2a = 2e \\implies e = a$.
   - Substitusi $b = 2a$ dan $e = a$ ke dalam neraca $\\ce{O}$:  
     $$2a = 3d + a \\implies 3d = a \\implies d = \\frac{a}{3}$$
   - Substitusi $d = \\frac{a}{3}$ ke dalam neraca $\\ce{Cl}$ ($c + d = 2a$):  
     $$c + \\frac{a}{3} = 2a \\implies c = 2a - \\frac{a}{3} = \\frac{5a}{3}$$
3. **Mencari Koefisien Bulat Terkecil:**
   - Agar semua koefisien berupa bilangan bulat, tetapkan nilai **$a = 3$**:
     - $a = 3$
     - $b = 2(3) = 6$
     - $c = \\frac{5(3)}{3} = 5$
     - $d = \\frac{3}{3} = 1$
     - $e = a = 3$
4. **Verifikasi:**
   - Ruas Kiri: $3\\ce{Cl2}$ ($6$ atom $\\ce{Cl}$), $6\\ce{OH-}$ ($6$ atom $\\ce{O}$, $6$ atom $\\ce{H}$, muatan $-6$).
   - Ruas Kanan: $5\\ce{Cl-}$ ($5$ atom $\\ce{Cl}$), $1\\ce{ClO3-}$ ($1$ atom $\\ce{Cl}$, $3$ atom $\\ce{O}$), $3\\ce{H2O}$ ($6$ atom $\\ce{H}$, $3$ atom $\\ce{O}$).  
     Total atom kanan: $6\\ce{Cl}, 6\\ce{O}, 6\\ce{H}$.  
     Total muatan kanan: $5(-1) + 1(-1) = -6$. (Setara sempurna!).
   - Persamaan setara:  
     $$\\mathbf{\\ce{3Cl2(g) + 6OH-(aq) -> 5Cl-(aq) + ClO3-(aq) + 3H2O(l)}}$$

Maka perbandingan koefisien $a : b : c : d : e$ adalah **$3 : 6 : 5 : 1 : 3$**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA / UTBK-SNBT',
    tags: ['penyetaraan-reaksi-aljabar', 'autoredoks-disproporsionasi', 'reaksi-redoks', 'neraca-muatan'],
  },
  {
    id: 104017,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Reaksi Netralisasi Presipitasi Simultan (Reaksi Tanpa Ion Penonton)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Identifikasi Persamaan Ionik Bersih pada Reaksi Pembentukan Dua Produk Sukar Larut / Tak Terdisosiasi',
    question_text: `Sebanyak $50\\ \\text{mL}$ larutan barium hidroksida, $\\ce{Ba(OH)2(aq)}$, direaksikan dengan $50\\ \\text{mL}$ larutan asam sulfat, $\\ce{H2SO4(aq)}$, dengan konsentrasi yang ekuivalen. Reaksi ini menghasilkan endapan putih barium sulfat dan molekul air.

Berdasarkan analisis kelarutan dan disosiasi elektrolit dalam larutan air, persamaan reaksi ionik bersih (*net ionic equation*) yang tepat untuk reaksi tersebut adalah ....

A. $\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)}$  
B. $\\ce{H+(aq) + OH-(aq) -> H2O(l)}$  
C. $\\ce{Ba^2+(aq) + 2OH-(aq) + 2H+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow + 2H2O(l)}$  
D. $\\ce{Ba(OH)2(aq) + H2SO4(aq) -> BaSO4(s) + 2H2O(l)}$  
E. Reaksi ini tidak memiliki persamaan ionik bersih karena semua pereaksi terdisosiasi`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Persamaan Molekuler:**
   $$\\ce{Ba(OH)2(aq) + H2SO4(aq) -> BaSO4(s)\downarrow + 2H2O(l)}$$
2. **Karakteristik Produk:**
   - $\\ce{BaSO4}$ adalah garam sulfat yang **sangat sukar larut** dalam air (mengendap sebagai padatan $(s)$).
   - $\\ce{H2O}$ adalah senyawa kovalen berwujud cairan murni $(l)$ yang merupakan elektrolit sangat lemah (tidak terdisosiasi signifikan).
3. **Persamaan Ionik Lengkap:**
   Reaktan terurai menjadi ion:
   $$\\ce{Ba^2+(aq) + 2OH-(aq) + 2H+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow + 2H2O(l)}$$
4. **Pengecekan Ion Penonton (*Spectator Ions*):**
   - Perhatikan bahwa di ruas kanan TIDAK ADA ion terlarut sama sekali!
   - Seluruh ion kation $\\ce{Ba^2+}$ dan $\\ce{H+}$ serta anion $\\ce{OH-}$ dan $\\ce{SO4^2-}$ bergabung secara kimiawi membentuk endapan $\\ce{BaSO4(s)}$ dan molekul $\\ce{H2O(l)}$.
   - Karena **tidak ada satupun ion penonton**, maka **persamaan ionik lengkap identik dengan persamaan ionik bersihnya**!
   $$\\mathbf{\\ce{Ba^2+(aq) + 2OH-(aq) + 2H+(aq) + SO4^2-(aq) -> BaSO4(s)\downarrow + 2H2O(l)}}$$

Oleh karena itu, opsi C adalah jawaban yang tepat. (Pilihan A dan B hanya menggambarkan separuh dari perubahan kimia nyata).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Soal Olimpiade Kimia Tingkat Kabupaten (OSK)',
    tags: ['persamaan-ionik-bersih', 'reaksi-pengendapan', 'netralisasi', 'tanpa-ion-penonton'],
  },
  {
    id: 104018,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tata Nama Garam Asam, Garam Rangkap & Senyawa Kompleks Sederhana',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penamaan Sistematis IUPAC Garam Asam dan Garam Rangkap Tawas',
    question_text: `Senyawa garam asam banyak dimanfaatkan dalam kehidupan sehari-hari, seperti pengembang kue soda kue dengan rumus $\\ce{NaHCO3}$ dan pupuk superfosfat yang mengandung ion $\\ce{H2PO4-}$. Selain itu, tawas yang digunakan untuk menjernihkan air merupakan garam rangkap sulfat dengan rumus $\\ce{KAl(SO4)2 . 12H2O}$.

Nama IUPAC sistematis yang tepat untuk $\\ce{NaHCO3}$, $\\ce{Ca(H2PO4)2}$, dan $\\ce{KAl(SO4)2 . 12H2O}$ berturut-turut adalah ....

A. Natrium karbonat, kalsium fosfat, dan kalium aluminium disulfat dekahidrat  
B. Natrium hidrogen karbonat, kalsium dihidrogen fosfat, dan kalium aluminium sulfat dodekahidrat  
C. Natrium bikarbonat, kalsium bifosfat, dan kalium aluminium sulfat heksahidrat  
D. Natrium hidrokarbonat, kalsium fosfat, dan tawas kalium  
E. Natrium oksikarbonat, kalsium fosfat asam, dan kalium aluminium tetrahidrat`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Penamaan Garam Asam (Mengandung Atom H yang Dapat Dilepaskan):**
   - Jika anion asam masih mengikat satu atom $\\ce{H}$, ditambahkan kata **hidrogen** di depan nama anion:
     - $\\ce{HCO3-}$ : Hidrogen karbonat (nama trivial: bikarbonat).  
       $\\ce{NaHCO3}$ dinamai **Natrium hidrogen karbonat**.
   - Jika anion asam masih mengikat dua atom $\\ce{H}$, ditambahkan awalan **dihidrogen**:
     - $\\ce{H2PO4-}$ : Dihidrogen fosfat.  
       $\\ce{Ca(H2PO4)2}$ tersusun atas kation $\\ce{Ca^2+}$ dan dua anion $\\ce{H2PO4-}$, sehingga dinamai **Kalsium dihidrogen fosfat**.
2. **Aturan Penamaan Garam Rangkap Berhidrat:**
   - $\\ce{KAl(SO4)2 . 12H2O}$: Garam rangkap tersusun dari kation kalium ($\\ce{K+}$), aluminium ($\\ce{Al^3+}$), dan dua anion sulfat ($\\ce{SO4^2-}$).
   - Penamaan kation ditulis berurutan: **Kalium aluminium sulfat**.
   - Senyawa berair kristal 12 molekul $\\ce{H2O}$ diberi awalan Yunani $12 = \\text{dodeka-}$ $\\implies$ **dodekahidrat**.
   - Nama lengkap sistematis IUPAC: **Kalium aluminium sulfat dodekahidrat**.

Jadi, jawaban yang tepat adalah opsi **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Bank Soal Kimia SMA Fase E / UTBK',
    tags: ['garam-asam', 'garam-rangkap', 'senyawa-hidrat-kristal', 'tata-nama-senyawa'],
  },
  {
    id: 104019,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Reaksi Pembentukan Gas dari Logam & Asam serta Analisis Rasio Koefisien Gas',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Perbandingan Volume Gas Hidrogen yang Dihasilkan pada Reaksi Logam Logam dengan Asam',
    question_text: `Dua buah tabung reaksi masing-masing berisi larutan asam klorida encer ($\\ce{HCl}$) berlebih.
- Ke dalam tabung A dimasukkan $1\\ \\text{mol}$ logam magnesium murni ($\\ce{Mg}$).
- Ke dalam tabung B dimasukkan $1\\ \\text{mol}$ logam aluminium murni ($\\ce{Al}$).

Kedua reaksi pembentukan gas hidrogen berlangsung sempurna menurut persamaan reaksi yang telah disetarakan:
- Tabung A: $\\ce{Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)}$
- Tabung B: $\\ce{2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)}$

Berdasarkan hukum Gay-Lussac dan Avogadro pada kondisi temperatur dan tekanan yang sama ($T, P$ konstan), perbandingan volume gas hidrogen ($V_{\\ce{H2}}$) yang dihasilkan di Tabung A terhadap Tabung B adalah ....

A. $1 : 1$  
B. $2 : 3$  
C. $3 : 2$  
D. $1 : 3$  
E. $2 : 1$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Reaksi Tabung A (Logam Mg):**
   $$\\ce{1 Mg(s) + 2HCl(aq) -> 1 MgCl2(aq) + 1 H2(g)}$$
   - Rasio koefisien $\\ce{Mg} : \\ce{H2} = 1 : 1$.
   - Jika digunakan $1\\ \\text{mol Mg}$, maka gas $\\ce{H2}$ yang terbentuk:
     $$n(\\ce{H2})_{\\text{tabung A}} = 1\\ \\text{mol}$$
2. **Analisis Reaksi Tabung B (Logam Al):**
   $$\\ce{2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)}$$
   - Rasio koefisien $\\ce{Al} : \\ce{H2} = 2 : 3$.
   - Jika digunakan $1\\ \\text{mol Al}$, maka gas $\\ce{H2}$ yang terbentuk:
     $$n(\\ce{H2})_{\\text{tabung B}} = 1\\ \\text{mol Al} \\times \\frac{3\\ \\text{mol H2}}{2\\ \\text{mol Al}} = 1{,}5\\ \\text{mol} = \\frac{3}{2}\\ \\text{mol}$$
3. **Perbandingan Volume Gas pada T, P yang Sama:**
   Berdasarkan Hipotesis Avogadro, perbandingan volume gas sama dengan perbandingan jumlah mol partikel gasnya:
   $$\\frac{V_{\\ce{H2}}(\\text{Tabung A})}{V_{\\ce{H2}}(\\text{Tabung B})} = \\frac{n_{\\ce{H2}}(\\text{Tabung A})}{n_{\\ce{H2}}(\\text{Tabung B})} = \\frac{1\\ \\text{mol}}{1{,}5\\ \\text{mol}} = \\frac{2}{3}$$
   Rasio perbandingannya adalah **$2 : 3$**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Simulasi UTBK-SNBT / OSK Kimia',
    tags: ['persamaan-reaksi-kimia', 'avogadro-gay-lussac', 'gas-hidrogen', 'stoikiometri-dasar'],
  },
  {
    id: 104020,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Reaksi Kimia Bertahap Industri & Formulasi Persamaan Reaksi Total',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Persamaan Reaksi Bersih pada Rangkaian Proses Kontak Pembuatan Asam Sulfat',
    question_text: `Dalam industri kimia, asam sulfat pekat ($\\ce{H2SO4}$) diproduksi secara massal melalui **Proses Kontak** yang melibatkan rangkaian empat tahapan reaksi berikut:

1. Pembakaran belerang:  
   $$\\ce{S(s) + O2(g) -> SO2(g)}$$
2. Oksidasi belerang dioksida dengan katalis $\\ce{V2O5}$:  
   $$\\ce{2SO2(g) + O2(g) -> 2SO3(g)}$$
3. Pelarutan gas belerang trioksida dalam asam sulfat pekat membentuk asam pirosulfat (oleum):  
   $$\\ce{SO3(g) + H2SO4(l) -> H2S2O7(l)}$$
4. Hidrolisis oleum dengan air menghasilkan asam sulfat murni:  
   $$\\ce{H2S2O7(l) + H2O(l) -> 2H2SO4(l)}$$

Jika keempat tahapan reaksi tersebut dijumlahkan menjadi **satu persamaan reaksi kimia total (*overall reaction*)** untuk pembentukan $2\\ \\text{mol}$ asam sulfat langsung dari unsur belerang, gas oksigen, dan air, maka koefisien stoikiometri gas $\\ce{O2}$ pada reaksi bersih tersebut adalah ....

A. $1$  
B. $2$  
C. $3$  
D. $4$  
E. $5$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Zat Perantara (*Intermediates*):**
   Zat antara yang terbentuk pada satu tahap dan habis dikonsumsi pada tahap berikutnya adalah $\\ce{SO2}$, $\\ce{SO3}$, $\\ce{H2S2O7}$, dan $\\ce{H2SO4}$ pelarut.
2. **Menyetarakan Rangkaian Reaksi untuk Menghasilkan 2 mol $\\ce{H2SO4}$:**
   - Dari Tahap 4: Dihasilkan $2\\ce{H2SO4}$ dengan mengonsumsi $1\\ce{H2S2O7}$ dan $1\\ce{H2O}$.
   - Dari Tahap 3: Untuk menghasilkan $1\\ce{H2S2O7}$, dikonsumsi $1\\ce{SO3}$ dan $1\\ce{H2SO4}$.
   - Namun dari Tahap 2: Dihasilkan $2\\ce{SO3}$ dari $2\\ce{SO2} + 1\\ce{O2}$.  
     Agar seluruh zat perantara saling meniadakan saat dijumlahkan, kita buat basis produksi **$2\\ \\text{mol } \\ce{H2SO4}$ bersih**:
     - Kalikan Tahap 1 dengan $2$:
       $$\\ce{2S(s) + 2O2(g) -> 2SO2(g)}$$
     - Tahap 2 tetap (menghasilkan $2\\ce{SO3}$):
       $$\\ce{2SO2(g) + O2(g) -> 2SO3(g)}$$
     - Kalikan Tahap 3 dengan $2$:
       $$\\ce{2SO3(g) + 2H2SO4(l) -> 2H2S2O7(l)}$$
     - Kalikan Tahap 4 dengan $2$:
       $$\\ce{2H2S2O7(l) + 2H2O(l) -> 4H2SO4(l)}$$
3. **Menjumlahkan Seluruh Persamaan:**
   - Sisi Kiri:
     $$\\ce{2S} + 2\\ce{O2} + \\ce{2SO2} + \\ce{O2} + \\ce{2SO3} + \\ce{2H2SO4} + \\ce{2H2S2O7} + 2\\ce{H2O}$$
   - Sisi Kanan:
     $$\\ce{2SO2} + 2\\ce{SO3} + \\ce{2H2S2O7} + 4\\ce{H2SO4}$$
   - Eliminasi zat yang sama di kedua ruas:
     - $\\ce{2SO2}$ saling meniadakan.
     - $\\ce{2SO3}$ saling meniadakan.
     - $\\ce{2H2S2O7}$ saling meniadakan.
     - $\\ce{2H2SO4}$ di kiri dikurangkan dari $4\\ce{H2SO4}$ di kanan, tersisa $2\\ce{H2SO4}$ di kanan.
     - Total gas oksigen di ruas kiri: $2\\ce{O2} + 1\\ce{O2} = \\mathbf{3\\ce{O2}}$.
4. **Persamaan Reaksi Bersih (*Overall Net Equation*):**
   $$\\mathbf{\\ce{2S(s) + 3O2(g) + 2H2O(l) -> 2H2SO4(l)}}$$
   Koefisien stoikiometri untuk $\\ce{O2}$ adalah **$3$**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Soal Pengayaan Proses Industri Kimia Fase E',
    tags: ['proses-kontak', 'reaksi-bertahap', 'persamaan-reaksi-kimia', 'asam-sulfat'],
  },
  {
    id: 104021,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penyetaraan Sistem Reaksi Bertingkat Metalurgi & Aljabar Multivariabel',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penyetaraan Reaksi Reduksi Bijih Besi Bertingkat dalam Tanur Tiup (Blast Furnace)',
    question_text: `Pengolahan bijih besi hematit ($\\ce{Fe2O3}$) dalam tanur tiup (*blast furnace*) berlangsung melalui tiga tahapan reduksi bertingkat oleh gas pereduksi karbon monoksida ($\\ce{CO}$) pada variasi suhu dari atas ke bawah tanur:

- **Zona Suhu Rendah ($500^\\circ\\text{C}$):**  
  $$\\ce{a Fe2O3(s) + b CO(g) -> c Fe3O4(s) + d CO2(g)}$$
- **Zona Suhu Sedang ($850^\\circ\\text{C}$):**  
  $$\\ce{e Fe3O4(s) + f CO(g) -> g FeO(s) + h CO2(g)}$$
- **Zona Suhu Tinggi ($1000^\\circ\\text{C}$):**  
  $$\\ce{i FeO(s) + j CO(g) -> k Fe(l) + m CO2(g)}$$

Tugas Anda:
a. Setarakan masing-masing dari ketiga persamaan reaksi kimia di atas dengan koefisien bilangan bulat terkecil.
b. Kalikan masing-masing reaksi dengan faktor pengali yang sesuai, lalu jumlahkan ketiga reaksi tersebut menjadi satu **persamaan reaksi reduksi total** hematit ($\\ce{Fe2O3}$) menjadi lelehan besi murni ($\\ce{Fe}$) oleh gas $\\ce{CO}$.
c. Berdasarkan persamaan reaksi total yang diperoleh, berapa mol gas $\\ce{CO}$ yang dibutuhkan untuk mereduksi sempurna $100\\ \\text{mol}$ $\\ce{Fe2O3}$?`,
    expected_final_answer: 'a. 3Fe2O3+CO->2Fe3O4+CO2, Fe3O4+CO->3FeO+CO2, FeO+CO->Fe+CO2; b. Fe2O3+3CO->2Fe+3CO2; c. 300 mol CO',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Penyetaraan Masing-Masing Reaksi:**
   1. **Tahap 1:**
      $$\\mathbf{\\ce{3Fe2O3(s) + CO(g) -> 2Fe3O4(s) + CO2(g)}}$$
      *(Verifikasi: Ruas kiri ada $6\\ce{Fe}$, $3(3)+1 = 10\\ce{O}$, $1\\ce{C}$. Ruas kanan ada $2(3)=6\\ce{Fe}$, $2(4)+2 = 10\\ce{O}$, $1\\ce{C}$)*.
   2. **Tahap 2:**
      $$\\mathbf{\\ce{Fe3O4(s) + CO(g) -> 3FeO(s) + CO2(g)}}$$
      *(Verifikasi: Ruas kiri ada $3\\ce{Fe}$, $4+1 = 5\\ce{O}$, $1\\ce{C}$. Ruas kanan ada $3\\ce{Fe}$, $3+2 = 5\\ce{O}$, $1\\ce{C}$)*.
   3. **Tahap 3:**
      $$\\mathbf{\\ce{FeO(s) + CO(g) -> Fe(l) + CO2(g)}}$$
      *(Sudah setara secara alami: $1\\ce{Fe}, 2\\ce{O}, 1\\ce{C}$)*.

b. **Penggabungan Menjadi Reaksi Total:**
   - Tahap 1 menghasilkan $2\\ce{Fe3O4}$. Agar $\\ce{Fe3O4}$ habis tereliminasi, kalikan Tahap 2 dengan **$2$**:
     $$2\\ce{Fe3O4} + 2\\ce{CO} \\rightarrow 6\\ce{FeO} + 2\\ce{CO2}$$
   - Tahap 2 menghasilkan $6\\ce{FeO}$. Agar $\\ce{FeO}$ habis tereliminasi, kalikan Tahap 3 dengan **$6$**:
     $$6\\ce{FeO} + 6\\ce{CO} \\rightarrow 6\\ce{Fe} + 6\\ce{CO2}$$
   - Sekarang jumlahkan ketiganya:
     $$\\begin{aligned}
     \\ce{3Fe2O3 + CO} &\\rightarrow \\ce{2Fe3O4 + CO2} \\\\
     \\ce{2Fe3O4 + 2CO} &\\rightarrow \\ce{6FeO + 2CO2} \\\\
     \\ce{6FeO + 6CO} &\\rightarrow \\ce{6Fe + 6CO2} \\\\
     \\hline
     \\ce{3Fe2O3 + 9CO} &\\rightarrow \\ce{6Fe + 9CO2}
     \\end{aligned}$$
   - Bagi seluruh koefisien dengan faktor $3$ untuk memperoleh koefisien paling sederhana:
     $$\\mathbf{\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}}$$

c. **Perhitungan Mol Kuantitatif:**
   - Dari persamaan total: perbandingan mol $\\ce{Fe2O3} : \\ce{CO} = 1 : 3$.
   - Untuk $100\\ \\text{mol } \\ce{Fe2O3}$:
     $$n(\\ce{CO}) = 100\\ \\text{mol} \\times \\frac{3}{1} = \\mathbf{300\\ \\text{mol } \\ce{CO}}$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan ketiga persamaan reaksi reduksi bertahap yang telah setara.',
        points: 4,
        rubric: 'Menyetarakan ketiga reaksi kimia secara tepat bernilai 4 poin.',
      },
      {
        label: 'b',
        question_text: 'Tunjukkan langkah eliminasi zat antara hingga diperoleh persamaan reduksi total paling sederhana.',
        points: 4,
        rubric: 'Menunjukkan langkah eliminasi Fe3O4 dan FeO serta persamaan total Fe2O3 + 3CO -> 2Fe + 3CO2 bernilai 4 poin.',
      },
      {
        label: 'c',
        question_text: 'Hitung mol CO yang dibutuhkan untuk mereduksi 100 mol hematit.',
        points: 4,
        rubric: 'Menghitung 300 mol CO bernilai 4 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 12,
    year: 2024,
    source_event: 'Ujian Tingkat Pengayaan Kimia OSN / UTBK',
    tags: ['reaksi-bertahap', 'metalurgi-besi', 'penyetaraan-reaksi-aljabar', 'persamaan-reaksi-kimia'],
  },
  {
    id: 104022,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Persamaan Ionik Bersih Asam Lemah vs Asam Kuat dengan Basa Kuat',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Distingsi Penulisan Persamaan Ionik Bersih antara Elektrolit Kuat dan Elektrolit Lemah',
    question_text: `Salah satu kaidah fundamental dalam menuliskan persamaan ionik lengkap dan ionik bersih adalah:
*"Hanya senyawa elektrolit kuat terlarut yang diuraikan menjadi ion-ion bebasnya, sedangkan elektrolit lemah (seperti asam lemah dan basa lemah) tetap dituliskan dalam bentuk molekuler utuhnya."*

Bandingkan dua reaksi netralisasi asam-basa berikut:
- **Sistem 1:** Larutan asam klorida ($\\ce{HCl(aq)}$, asam kuat) direaksikan dengan larutan natrium hidroksida ($\\ce{NaOH(aq)}$, basa kuat).
- **Sistem 2:** Larutan asam asetat ($\\ce{CH3COOH(aq)}$, asam lemah) direaksikan dengan larutan natrium hidroksida ($\\ce{NaOH(aq)}$, basa kuat).

Pertanyaan:
a. Tuliskan persamaan molekuler setara untuk Sistem 1 dan Sistem 2.
b. Tuliskan persamaan ionik lengkap (*complete ionic equation*) untuk Sistem 1 dan Sistem 2.
c. Tuliskan persamaan ionik bersih (*net ionic equation*) untuk Sistem 1 dan Sistem 2.
d. Mengapa persamaan ionik bersih pada Sistem 2 berbeda dengan Sistem 1? Jelaskan secara konseptual.`,
    expected_final_answer: 'Sistem 1: H+ + OH- -> H2O; Sistem 2: CH3COOH + OH- -> CH3COO- + H2O',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Persamaan Molekuler Setara:**
   - Sistem 1: $\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$
   - Sistem 2: $\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$

b. **Persamaan Ionik Lengkap:**
   - **Sistem 1:** Karena $\\ce{HCl}$, $\\ce{NaOH}$, dan $\\ce{NaCl}$ adalah elektrolit kuat, ketiganya terionisasi sempurna:
     $$\\mathbf{\\ce{H+(aq) + Cl-(aq) + Na+(aq) + OH-(aq) -> Na+(aq) + Cl-(aq) + H2O(l)}}$$
   - **Sistem 2:** $\\ce{CH3COOH}$ adalah asam lemah dengan derajat ionisasi sangat kecil ($\\alpha \\ll 1$), sehingga **TIDAK BOLEH diuraikan** menjadi ion dan wajib ditulis sebagai molekul utuh $\\ce{CH3COOH(aq)}$:
     $$\\mathbf{\\ce{CH3COOH(aq) + Na+(aq) + OH-(aq) -> CH3COO-(aq) + Na+(aq) + H2O(l)}}$$

c. **Persamaan Ionik Bersih:**
   - **Sistem 1:** Ion penonton adalah $\\ce{Na+(aq)}$ dan $\\ce{Cl-(aq)}$. Setelah dicoret:
     $$\\mathbf{\\ce{H+(aq) + OH-(aq) -> H2O(l)}}$$
   - **Sistem 2:** Satu-satunya ion penonton adalah $\\ce{Na+(aq)}$. Ion $\\ce{OH-}$ bereaksi langsung dengan molekul $\\ce{CH3COOH}$ menghasilkan ion asetat dan air:
     $$\\mathbf{\\ce{CH3COOH(aq) + OH-(aq) -> CH3COO-(aq) + H2O(l)}}$$

d. **Penjelasan Konseptual:**
   Pada Sistem 1, seluruh asam telah terdisosiasi sebelum reaksi menjadi ion hidrogen bebas $\\ce{H+}$, sehingga reaksi netralisasi hanya melibatkan penggabungan ion $\\ce{H+}$ dan $\\ce{OH-}$.  
   Sedangkan pada Sistem 2, sebagian besar molekul asam asetat berada dalam wujud molekul utuh. Ion hidroksida ($\\ce{OH-}$) yang kuat harus menarik proton langsung dari molekul $\\ce{CH3COOH}$ tak terdisosiasi, sehingga molekul $\\ce{CH3COOH}$ dan ion konjugat $\\ce{CH3COO-}$ harus tampak eksplisit dalam persamaan ionik bersihnya.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan reaksi molekuler untuk Sistem 1 dan Sistem 2.',
        points: 2.5,
        rubric: 'Menuliskan kedua persamaan molekuler secara benar bernilai 2.5 poin.',
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan ionik lengkap untuk kedua sistem dengan memperhatikan derajat disosiasi zat.',
        points: 3.5,
        rubric: 'Menguraikan elektrolit kuat pada Sistem 1 dan mempertahankan molekul CH3COOH pada Sistem 2 bernilai 3.5 poin.',
      },
      {
        label: 'c',
        question_text: 'Tuliskan persamaan ionik bersih untuk kedua sistem setelah mengeliminasi ion penonton.',
        points: 3,
        rubric: 'Menuliskan persamaan ionik bersih Sistem 1 dan Sistem 2 secara tepat bernilai 3 poin.',
      },
      {
        label: 'd',
        question_text: 'Jelaskan alasan teoretis mengapa CH3COOH tidak diuraikan menjadi ion bebas.',
        points: 3,
        rubric: 'Menjelaskan konsep elektrolit lemah dan derajat ionisasi asam asetat bernilai 3 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Teori Dasar',
    tags: ['persamaan-ionik-bersih', 'elektrolit-lemah', 'asam-asetat', 'ion-penonton-spectator-ions'],
  },
  {
    id: 104023,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Analisis Kuantitatif Reaksi Gas Gay-Lussac & Penentuan Rumus Molekul Oksida Nitrogen',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Rumus Kimia Gas Oksida Nitrogen dari Data Perbandingan Volume Gas Gay-Lussac',
    question_text: `Berdasarkan Hukum Perbandingan Volume Joseph Louis Gay-Lussac (1808):
*"Pada temperatur dan tekanan yang sama, volume gas-gas yang bereaksi dan volume gas-gas hasil reaksi berbanding sebagai bilangan bulat dan sederhana (sesuai perbandingan koefisien reaksinya)."*

Dalam suatu eksperimen eudiometer pada kondisi suhu dan tekanan tetap, sebanyak $20\\ \\text{mL}$ gas nitrogen ($\\ce{N2}$) tepat bereaksi sempurna dengan $50\\ \\text{mL}$ gas oksigen ($\\ce{O2}$) menghasilkan $20\\ \\text{mL}$ suatu gas oksida nitrogen baru berwujud gas ($\\ce{N_x O_y}$).

Pertanyaan:
a. Tuliskan perbandingan volume gas $\\ce{N2} : \\ce{O2} : \\ce{N_x O_y}$ dalam bentuk bilangan bulat paling sederhana.
b. Hubungkan perbandingan volume tersebut dengan koefisien reaksi untuk menyusun persamaan reaksi kimia umum.
c. Terapkan neraca kesetaraan atom nitrogen dan oksigen untuk menghitung nilai indeks subskrip $x$ dan $y$.
d. Tuliskan rumus molekul senyawa gas oksida nitrogen tersebut beserta nama resminya menurut IUPAC.`,
    expected_final_answer: 'x = 2, y = 5; N2O5 (Dinitrogen pentoksida)',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Perbandingan Volume Gas:**
   $$V(\\ce{N2}) : V(\\ce{O2}) : V(\\ce{N_x O_y}) = 20\\ \\text{mL} : 50\\ \\text{mL} : 20\\ \\text{mL}$$
   Bagi seluruh angka dengan FPB yaitu $10$:
   $$\\mathbf{V(\\ce{N2}) : V(\\ce{O2}) : V(\\ce{N_x O_y}) = 2 : 5 : 2}$$

b. **Penyusunan Persamaan Reaksi Berdasarkan Koefisien:**
   Menurut Hukum Gay-Lussac, rasio volume sama dengan rasio koefisien stoikiometri:
   $$\\mathbf{\\ce{2 N2(g) + 5 O2(g) -> 2 N_x O_y(g)}}$$

c. **Perhitungan Nilai Subskrip $x$ dan $y$:**
   Sesuai Hukum Kekekalan Massa Lavoisier (jumlah atom ruas kiri = ruas kanan):
   - **Neraca Atom Nitrogen (N):**  
     Ruas kiri $= 2 \\times 2 = 4$ atom $\\ce{N}$.  
     Ruas kanan $= 2 \\times x$ atom $\\ce{N}$.  
     $$2x = 4 \\implies \\mathbf{x = 2}$$
   - **Neraca Atom Oksigen (O):**  
     Ruas kiri $= 5 \\times 2 = 10$ atom $\\ce{O}$.  
     Ruas kanan $= 2 \\times y$ atom $\\ce{O}$.  
     $$2y = 10 \\implies \\mathbf{y = 5}$$

d. **Rumus Kimia & Nama IUPAC:**
   - Rumus molekul senyawa: **$\\ce{N2O5}$**.
   - Nama resmi IUPAC: Menggunakan awalan angka Yunani dengan elisi vokal $\\implies$ **Dinitrogen pentoksida**.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan perbandingan volume gas dalam bilangan bulat terkecil.',
        points: 2.5,
        rubric: 'Menentukan rasio 2 : 5 : 2 bernilai 2.5 poin.',
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan reaksi dengan koefisien stoikiometri sesuai rasio volume.',
        points: 2.5,
        rubric: 'Menuliskan 2N2 + 5O2 -> 2NxOy bernilai 2.5 poin.',
      },
      {
        label: 'c',
        question_text: 'Hitung nilai indeks x dan y berdasarkan neraca massa atom.',
        points: 3.5,
        rubric: 'Perhitungan x = 2 dan y = 5 bernilai 3.5 poin.',
      },
      {
        label: 'd',
        question_text: 'Tuliskan rumus molekul akhir dan nama IUPAC senyawa tersebut.',
        points: 3.5,
        rubric: 'Menuliskan N2O5 dan nama Dinitrogen pentoksida bernilai 3.5 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 12,
    year: 2024,
    source_event: 'Latihan Hukum Dasar Kimia & Persamaan Reaksi SMA',
    tags: ['hukum-gay-lussac', 'oksida-nitrogen', 'rumus-molekul', 'tata-nama-biner-kovalen'],
  },
  {
    id: 104024,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Bilangan Oksidasi, Struktur Stok & Tata Nama Senyawa Oksianion Belerang dan Fosforus',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Komparatif Deret Oksianion Belerang dan Fosforus serta Garam Terkait',
    question_text: `Belerang dan fosforus merupakan unsur nonlogam periode ketiga yang dapat membentuk poliatomik oksianion dengan beragam tingkat bilangan oksidasi. Perhatikan daftar ion dan senyawa berikut:

1. Ion tiosulfat: $\\ce{S2O3^2-}$
2. Garam natrium pirofosfat: $\\ce{Na4P2O7}$
3. Asam hipofosfit: $\\ce{H3PO2}$
4. Ion peroksidisulfat (persulfat): $\\ce{S2O8^2-}$

Pertanyaan:
a. Hitung bilangan oksidasi rata-rata atom belerang ($\\ce{S}$) pada ion tiosulfat ($\\ce{S2O3^2-}$).
b. Hitung bilangan oksidasi atom fosforus ($\\ce{P}$) pada garam natrium pirofosfat ($\\ce{Na4P2O7}$) dan tuliskan nama senyawa tersebut secara sistematis.
c. Pada asam hipofosfit ($\\ce{H3PO2}$), tentukan bilangan oksidasi atom $\\ce{P}$ dan jelaskan mengapa asam ini merupakan asam monoprotik (hanya melepaskan $1$ proton $\\ce{H+}$).
d. Pada ion peroksidisulfat ($\\ce{S2O8^2-}$), terdapat jembatan ikatan peroksida ($-\\ce{O - O}-$) di mana dua atom oksigen memiliki biloks $-1$. Berapakah bilangan oksidasi atom belerang di dalamnya?`,
    expected_final_answer: 'a. S=+2; b. P=+5, Natrium difosfat/pirofosfat; c. P=+1, hanya 1 H terikat O; d. S=+6',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Bilangan Oksidasi Belerang pada Ion Tiosulfat ($\\ce{S2O3^2-}$):**
   - Muatan total ion $= -2$.
   - Oksigen memiliki biloks $-2$.
   - $2(\\text{Biloks S}) + 3(-2) = -2$
   - $2(\\text{Biloks S}) - 6 = -2 \\implies 2(\\text{Biloks S}) = +4 \\implies \\mathbf{\\text{Biloks S} = +2}$.
   *(Secara struktural, satu atom S pusat memiliki biloks $+5$ dan satu atom S terminal memiliki biloks $-1$, rata-ratanya $+2$)*.

b. **Bilangan Oksidasi Fosforus pada $\\ce{Na4P2O7}$:**
   - Kation $\\ce{Na+}$ memiliki biloks $+1$, oksigen $-2$.
   - $4(+1) + 2(\\text{Biloks P}) + 7(-2) = 0$
   - $+4 + 2(\\text{Biloks P}) - 14 = 0$
   - $2(\\text{Biloks P}) = +10 \\implies \\mathbf{\\text{Biloks P} = +5}$.
   - Nama sistematis IUPAC: **Natrium difosfat** *(atau Natrium pirofosfat)*.

c. **Asam Hipofosfit ($\\ce{H3PO2}$):**
   - Hidrogen memiliki biloks $+1$, oksigen $-2$.  
     $3(+1) + \\text{Biloks P} + 2(-2) = 0 \\implies 3 + \\text{Biloks P} - 4 = 0 \\implies \\mathbf{\\text{Biloks P} = +1}$.
   - **Karakter Monoprotik:** Dari struktur Lewis asam hipofosfit, atom fosforus pusat mengikat satu gugus hidroksil ($-\\ce{OH}$), dua atom hidrogen yang berikatan kovalen langsung ke atom $\\ce{P}$ (ikatan $\\ce{P - H}$), dan satu atom oksigen ikatan rangkap ($\\ce{P = O}$).  
     Hanya atom $\\ce{H}$ yang berikatan dengan atom oksigen sangat elektronegatif ($-\\ce{O - H}$) yang dapat terdisosiasi sebagai ion $\\ce{H+}$, sedangkan dua atom $\\ce{H}$ pada ikatan $\\ce{P - H}$ tidak bersifat asam. Oleh karena itu, asam ini adalah **asam monoprotik**.

d. **Ion Peroksidisulfat ($\\ce{S2O8^2-}$):**
   - Dari $8$ atom oksigen, terdapat $2$ atom oksigen peroksida dengan biloks $-1$, dan $6$ atom oksigen biasa dengan biloks $-2$.
   - $2(\\text{Biloks S}) + 2(-1) + 6(-2) = -2$
   - $2(\\text{Biloks S}) - 2 - 12 = -2$
   - $2(\\text{Biloks S}) - 14 = -2 \\implies 2(\\text{Biloks S}) = +12 \\implies \\mathbf{\\text{Biloks S} = +6}$.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung biloks rata-rata atom S pada ion tiosulfat S2O3(2-).',
        points: 2.5,
        rubric: 'Perhitungan biloks S = +2 secara tepat bernilai 2.5 poin.',
      },
      {
        label: 'b',
        question_text: 'Hitung biloks P pada Na4P2O7 dan sebutkan nama sistematis IUPAC-nya.',
        points: 3,
        rubric: 'Menghitung biloks P = +5 dan nama Natrium difosfat / pirofosfat bernilai 3 poin.',
      },
      {
        label: 'c',
        question_text: 'Hitung biloks P pada H3PO2 dan jelaskan alasan struktural mengapa bersifat monoprotik.',
        points: 3.5,
        rubric: 'Menghitung biloks P = +1 dan menjelaskan ikatan P-H vs P-OH bernilai 3.5 poin.',
      },
      {
        label: 'd',
        question_text: 'Hitung biloks atom S pada ion peroksidisulfat S2O8(2-) dengan memperhitungkan oksigen peroksida.',
        points: 3,
        rubric: 'Menghitung biloks S = +6 dengan benar bernilai 3 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['bilangan-oksidasi-romawi', 'oksianion', 'struktur-lewis', 'peroksidisulfat'],
  },
  {
    id: 104025,
    sma_topic_number: 4,
    sma_topic_id: 104,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Reaksi Pelarutan Endapan Melalui Pembentukan Senyawa Kompleks Koordinasi',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Investigasi Reaksi Dua Tahap: Pengendapan Perak Klorida dan Pelarutan Kembali oleh Larutan Amonia',
    question_text: `Reaksi kimia anorganik sering kali melibatkan pembentukan endapan yang kemudian dapat dilarutkan kembali dengan penambahan ligan pengompleks berlebih. Suatu eksperimen analisis kualitatif kation perak melibatkan dua tahapan reaksi:

- **Tahap 1:** Larutan perak nitrat, $\\ce{AgNO3(aq)}$, dicampurkan dengan larutan natrium klorida, $\\ce{NaCl(aq)}$, menghasilkan endapan putih dadih perak klorida, $\\ce{AgCl(s)}$.
- **Tahap 2:** Endapan putih $\\ce{AgCl(s)}$ tersebut kemudian ditambahkan larutan amonia pekat berlebih, $\\ce{NH3(aq)}$, hingga seluruh endapan larut kembali membentuk larutan jernih ion kompleks diamina perak(I) klorida.

Pertanyaan:
a. Tuliskan persamaan reaksi molekuler dan persamaan reaksi ionik bersih (*net ionic equation*) untuk **Tahap 1**.
b. Tuliskan persamaan reaksi kimia untuk **Tahap 2** di mana endapan padatan $\\ce{AgCl(s)}$ bereaksi dengan larutan $\\ce{NH3(aq)}$ membentuk ion kompleks $\\ce{[Ag(NH3)2]+(aq)}$ dan ion $\\ce{Cl-(aq)}$.
c. Tuliskan nama IUPAC resmi untuk kation kompleks $\\ce{[Ag(NH3)2]+}$.
d. Tuliskan **persamaan reaksi gabungan total** jika larutan $\\ce{AgNO3(aq)}$ langsung direaksikan dengan larutan $\\ce{NH3(aq)}$ berlebih di hadapan ion $\\ce{Cl-(aq)}$ tanpa terjadinya pembentukan endapan permanen.`,
    expected_final_answer: 'Tahap 1: Ag+ + Cl- -> AgCl(s); Tahap 2: AgCl(s) + 2NH3(aq) -> [Ag(NH3)2]+(aq) + Cl-(aq); Kompleks: Diamina perak(I)',
    solution_rubric: `**Pembahasan Lengkap & Kunci Jawaban Uraian:**

a. **Tahap 1 (Reaksi Pembentukan Endapan):**
   - Persamaan Molekuler:  
     $$\\mathbf{\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s)\downarrow + NaNO3(aq)}}$$
   - Persamaan Ionik Bersih:  
     Ion $\\ce{Na+(aq)}$ dan $\\ce{NO3-(aq)}$ bertindak sebagai ion penonton.  
     $$\\mathbf{\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)\downarrow}}$$

b. **Tahap 2 (Pelarutan Endapan dengan Pembentukan Kompleks):**
   Endapan padat $\\ce{AgCl(s)}$ bereaksi dengan dua molekul ligan netral amonia ($\\ce{NH3}$) membentuk kation kompleks larut:
   $$\\mathbf{\\ce{AgCl(s) + 2NH3(aq) -> [Ag(NH3)2]+(aq) + Cl-(aq)}}$$

c. **Tata Nama IUPAC Kation Kompleks $\\ce{[Ag(NH3)2]+}$:**
   - Aturan penamaan kompleks kation:
     1. Sebutkan jumlah dan nama ligan: $2 = \\text{di-}$, ligan $\\ce{NH3} = \\text{amina}$ $\\implies$ **diamina**.
     2. Sebutkan nama logam kation: **perak**.
     3. Cantumkan bilangan oksidasi logam dalam angka Romawi:  
        $\\text{Biloks Ag} + 2(0) = +1 \\implies \\text{Biloks Ag} = +1$.
     4. Nama resmi IUPAC: **Ion diamina perak(I)** *(atau diaminaargentum(I))*.

d. **Persamaan Reaksi Gabungan Total:**
   Jumlahkan persamaan Tahap 1 dan Tahap 2:
   $$\\begin{aligned}
   \\ce{Ag+(aq) + Cl-(aq)} &\\rightarrow \\ce{AgCl(s)} \\\\
   \\ce{AgCl(s) + 2NH3(aq)} &\\rightarrow \\ce{[Ag(NH3)2]+(aq) + Cl-(aq)} \\\\
   \\hline
   \\mathbf{\\ce{Ag+(aq) + 2NH3(aq)}} &\\mathbf{\\rightarrow \\ce{[Ag(NH3)2]+(aq)}}
   \\end{aligned}$$
   *(Ion $\\ce{Cl-(aq)}$ yang memicu endapan sementara kembali terbebas sehingga bertindak serupa katalis fasa, menghasilkan reaksi pembentukan kompleks murni)*.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan persamaan molekuler dan persamaan ionik bersih untuk reaksi pengendapan Tahap 1.',
        points: 3,
        rubric: 'Menuliskan persamaan molekuler dan Ag+ + Cl- -> AgCl(s) bernilai 3 poin.',
      },
      {
        label: 'b',
        question_text: 'Tuliskan persamaan reaksi pelarutan endapan AgCl oleh larutan amonia berlebih.',
        points: 3,
        rubric: 'Menuliskan AgCl(s) + 2NH3(aq) -> [Ag(NH3)2]+(aq) + Cl-(aq) bernilai 3 poin.',
      },
      {
        label: 'c',
        question_text: 'Tuliskan nama IUPAC resmi untuk kation kompleks [Ag(NH3)2]+.',
        points: 3,
        rubric: 'Menuliskan nama Ion diamina perak(I) bernilai 3 poin.',
      },
      {
        label: 'd',
        question_text: 'Tuliskan persamaan reaksi pembentukan kompleks total.',
        points: 3,
        rubric: 'Menuliskan Ag+(aq) + 2NH3(aq) -> [Ag(NH3)2]+(aq) bernilai 3 poin.',
      },
    ],
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 12,
    total_points: 12,
    year: 2024,
    source_event: 'Praktikum Kimia Analitik Kualitatif SMA / OSN',
    tags: ['reaksi-pengendapan', 'senyawa-kompleks', 'persamaan-ionik-bersih', 'perak-klorida'],
  },
];
