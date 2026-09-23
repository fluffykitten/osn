/**
 * smaQuestionsData.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase E & Fase F)
 * 
 * BATCH 1: Struktur Atom & Sistem Periodik Unsur (Pilar 1)
 * Distribusi:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 201 - 205]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 206 - 215]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 216 - 225]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';
import { SMA_TOPIC_2_QUESTIONS } from './smaQuestionsTopic2Data';
import { SMA_TOPIC_3_QUESTIONS } from './smaQuestionsTopic3Data';
import { SMA_TOPIC_4_QUESTIONS } from './smaQuestionsTopic4Data';

export const SMA_TOPIC_1_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 201 - 205)
  // =========================================================================
  {
    id: 201,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Partikel Dasar Penyusun Atom & Notasi Nuklida',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Jumlah Proton, Elektron, dan Neutron pada Ion Aluminium',
    question_text: `Suatu ion aluminium dilambangkan sebagai $_{13}^{27}\\ce{Al^3+}$. Jumlah proton, elektron, dan neutron yang terdapat di dalam ion tersebut berturut-turut adalah ....

A. 13 proton, 13 elektron, dan 14 neutron  
B. 13 proton, 10 elektron, dan 14 neutron  
C. 13 proton, 16 elektron, dan 14 neutron  
D. 10 proton, 13 elektron, dan 27 neutron  
E. 14 proton, 11 elektron, dan 13 neutron`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Nomor Atom ($Z$):**
   Nilai $Z = 13$, yang menunjukkan jumlah proton dalam inti atom:
   $$\\text{Jumlah proton} = Z = 13$$
2. **Nomor Massa ($A$):**
   Nilai $A = 27$. Jumlah neutron diperoleh dari selisih nomor massa dan nomor atom:
   $$\\text{Jumlah neutron} = A - Z = 27 - 13 = 14$$
3. **Jumlah Elektron pada Ion Bermuatan Positif (+3):**
   Muatan $+3$ menunjukkan bahwa atom netral telah melepaskan 3 elektron valensinya:
   $$\\text{Jumlah elektron} = Z - (\\text{muatan}) = 13 - 3 = 10$$

**Analisis Opsi Lain:**
- **A salah:** Menyatakan atom netral (elektron = 13), bukan ion $\\ce{Al^3+}$.
- **C salah:** Menambahkan 3 elektron seolah-olah anion bermuatan $-3$.
- **D & E salah:** Menukar nomor atom dan massa atau salah mengidentifikasi proton.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['partikel-dasar-atom', 'notasi-nuklida', 'kation-anion', 'struktur-atom'],
  },
  {
    id: 202,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Isotop, Isobar, dan Isoton',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Pasangan Isoton dari Beberapa Nuklida Atom',
    question_text: `Diberikan beberapa spesi nuklida berikut:
(1) $_{6}^{14}\\ce{C}$  
(2) $_{7}^{14}\\ce{N}$  
(3) $_{8}^{16}\\ce{O}$  
(4) $_{7}^{15}\\ce{N}$  

Pasangan nuklida yang merupakan **isoton** adalah pasangan nomor ....

A. (1) dan (2)  
B. (1) dan (3)  
C. (1) dan (4)  
D. (2) dan (3)  
E. (2) dan (4)`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Isoton:**
   Isoton adalah atom-atom dari unsur berbeda yang memiliki **jumlah neutron sama** ($A - Z$ bernilai sama).
2. **Hitung Jumlah Neutron Masing-Masing Nuklida:**
   - Nuklida (1) $_{6}^{14}\\ce{C} \\implies n = 14 - 6 = 8$ neutron
   - Nuklida (2) $_{7}^{14}\\ce{N} \\implies n = 14 - 7 = 7$ neutron
   - Nuklida (3) $_{8}^{16}\\ce{O} \\implies n = 16 - 8 = 8$ neutron
   - Nuklida (4) $_{7}^{15}\\ce{N} \\implies n = 15 - 7 = 8$ neutron
3. **Analisis Pasangan yang Memiliki 8 Neutron:**
   - Nuklida (1) dan (4) sama-sama memiliki 8 neutron $\\implies$ **Isoton**.
   - (Catatan: Pasangan (1) dan (3) atau (3) dan (4) juga ber-isoton, namun di antara pilihan opsi yang tersedia adalah pasangan (1) dan (4)).

**Analisis Opsi Lain:**
- **A salah:** Pasangan (1) dan (2) adalah **isobar** (nomor massa $A = 14$ sama, neutron berbeda).
- **D salah:** Nuklida (2) memiliki 7 neutron, sedangkan nuklida (3) memiliki 8 neutron.
- **E salah:** Nuklida (2) dan (4) adalah **isotop** (nomor atom $Z = 7$ sama, nomor massa berbeda).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['isotop-isobar-isoton', 'notasi-nuklida', 'struktur-atom'],
  },
  {
    id: 203,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Konfigurasi Elektron Model Bohr & Elektron Valensi',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Konfigurasi Kulit Utama dan Penentuan Elektron Valensi Unsur Kalsium',
    question_text: `Atom kalsium memiliki nomor atom $Z = 20$. Konfigurasi elektron atom kalsium berdasarkan tingkat kulit utama menurut model atom Niels Bohr serta jumlah elektron valensinya adalah ....

A. $2, 8, 10$ dengan elektron valensi 10  
B. $2, 8, 8, 2$ dengan elektron valensi 2  
C. $2, 18$ dengan elektron valensi 8  
D. $2, 8, 9, 1$ dengan elektron valensi 1  
E. $2, 8, 6, 4$ dengan elektron valensi 4`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Pengisian Kulit Utama Bohr:**
   Kapasitas maksimum kulit ke-$n$ adalah $2n^2$:
   - Kulit K ($n=1$): maksimum 2 elektron
   - Kulit L ($n=2$): maksimum 8 elektron
   - Kulit M ($n=3$): maksimum 18 elektron (namun kulit terluar/valensi tidak boleh melebihi 8 elektron).
2. **Distribusi 20 Elektron Kalsium ($_{20}\\ce{Ca}$):**
   - Kulit K diisi 2 elektron: tersisa 18 elektron.
   - Kulit L diisi 8 elektron: tersisa 10 elektron.
   - Karena sisa 10 elektron tidak boleh langsung diletakkan di kulit M jika akan menjadi kulit terluar berkapasitas melebihi 8, maka kulit M diisi 8 elektron, dan 2 elektron sisanya menempati kulit N.
   - Konfigurasi: **2, 8, 8, 2**.
3. **Elektron Valensi:**
   Elektron pada kulit terluar (kulit N) berjumlah **2**.

**Analisis Opsi Lain:**
- **A salah:** Konfigurasi $2, 8, 10$ melanggar aturan oktet kulit terluar (elektron valensi maksimum bernilai 8).
- **C, D, E salah:** Tidak sesuai dengan aturan kestabilan pengisian kulit utama.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['model-atom-bohr', 'konfigurasi-elektron', 'elektron-valensi'],
  },
  {
    id: 204,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Partikel Subatomik pada Nuklida Netral dan Anion',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Analisis Komparatif Partikel Subatomik Besi dan Ion Sulfida',
    question_text: `Tentukan komposisi partikel subatomik (jumlah proton, elektron, dan neutron) untuk masing-masing spesi kimia berikut berdasarkan notasi atomnya:

**Data Notasi:**
1. Atom besi netral: $_{26}^{56}\\ce{Fe}$
2. Ion sulfida: $_{16}^{32}\\ce{S^2-}`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah jumlah proton, elektron, dan neutron pada atom netral $_{26}^{56}\\ce{Fe}!',
        points: 2.5,
        rubric: 'Proton = 26 (1 poin), Elektron = 26 (0.5 poin), Neutron = 56 - 26 = 30 (1 poin).',
        expected_answer: 'Proton = 26, Elektron = 26, Neutron = 30'
      },
      {
        label: 'b',
        question_text: 'Hitunglah jumlah proton, elektron, dan neutron pada anion $_{16}^{32}\\ce{S^2-}!',
        points: 2.5,
        rubric: 'Proton = 16 (1 poin), Elektron = 16 + 2 = 18 (1 poin), Neutron = 32 - 16 = 16 (0.5 poin).',
        expected_answer: 'Proton = 16, Elektron = 18, Neutron = 16'
      }
    ],
    expected_final_answer: 'Fe: p=26, e=26, n=30; S^2-: p=16, e=18, n=16',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Untuk atom $_{26}^{56}\\ce{Fe}$:**
   - Nomor atom $Z = 26 \\implies \\text{jumlah proton} = 26$.
   - Karena atom netral, $\\text{jumlah elektron} = \\text{jumlah proton} = 26$.
   - Nomor massa $A = 56 \\implies \\text{jumlah neutron} = A - Z = 56 - 26 = 30$.
   *(Skor: 2.5 Poin)*

2. **Untuk anion $_{16}^{32}\\ce{S^2-}$:**
   - Nomor atom $Z = 16 \\implies \\text{jumlah proton} = 16$.
   - Muatan $-2$ menunjukkan penambahan 2 elektron dari lingkungan:
     $$\\text{jumlah elektron} = Z + 2 = 16 + 2 = 18$$.
   - Nomor massa $A = 32 \\implies \\text{jumlah neutron} = A - Z = 32 - 16 = 16$.
   *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Identifikasi Notasi Atom:
• Nilai Z (nomor atom di kiri bawah): ....
• Nilai A (nomor massa di kiri atas): ....
• Nilai muatan ion (jika ada): ....

2. Perhitungan Partikel Atom Netral:
• Jumlah proton = Z: ....
• Jumlah elektron = proton (kondisi netral): ....
• Jumlah neutron = A - Z: ....

3. Perhitungan Partikel Ion:
• Jumlah proton = Z: ....
• Efek muatan terhadap elektron: ....
• Jumlah neutron = A - Z: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Kelas 10',
    tags: ['partikel-dasar-atom', 'notasi-nuklida', 'kation-anion'],
  },
  {
    id: 205,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Hubungan Konfigurasi Kulit dengan Periode dan Golongan SPU',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Penentuan Letak Golongan dan Periode Unsur Utama dalam SPU',
    question_text: `Tiga unsur representatif memiliki nomor atom masing-masing:
- Unsur $P$ ($Z = 11$)
- Unsur $Q$ ($Z = 17$)
- Unsur $R$ ($Z = 35$)

Berdasarkan konfigurasi elektron kulit utamanya, tentukan letak periode dan golongan ketiga unsur tersebut di dalam Tabel Periodik Unsur!`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan konfigurasi elektron kulit utama untuk unsur P (Z = 11) serta tentukan golongan dan periodenya!',
        points: 2,
        rubric: 'Konfigurasi: 2, 8, 1 (1 poin); Golongan IA dan Periode 3 (1 poin).',
        expected_answer: 'Konfigurasi: 2, 8, 1 -> Golongan IA, Periode 3'
      },
      {
        label: 'b',
        question_text: 'Tuliskan konfigurasi elektron kulit utama untuk unsur Q (Z = 17) serta tentukan golongan dan periodenya!',
        points: 2,
        rubric: 'Konfigurasi: 2, 8, 7 (1 poin); Golongan VIIA dan Periode 3 (1 poin).',
        expected_answer: 'Konfigurasi: 2, 8, 7 -> Golongan VIIA, Periode 3'
      },
      {
        label: 'c',
        question_text: 'Tuliskan konfigurasi elektron kulit utama untuk unsur R (Z = 35) serta tentukan golongan dan periodenya!',
        points: 2,
        rubric: 'Konfigurasi: 2, 8, 18, 7 (1 poin); Golongan VIIA dan Periode 4 (1 poin).',
        expected_answer: 'Konfigurasi: 2, 8, 18, 7 -> Golongan VIIA, Periode 4'
      }
    ],
    expected_final_answer: 'P: Golongan IA, Periode 3; Q: Golongan VIIA, Periode 3; R: Golongan VIIA, Periode 4',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Unsur $P$ ($Z = 11$ - Natrium):**
   - Konfigurasi kulit: $2, 8, 1$.
   - Jumlah kulit terisi $= 3 \\implies$ **Periode 3**.
   - Elektron valensi $= 1 \\implies$ **Golongan IA (Alkali)**.

2. **Unsur $Q$ ($Z = 17$ - Klorin):**
   - Konfigurasi kulit: $2, 8, 7$.
   - Jumlah kulit terisi $= 3 \\implies$ **Periode 3**.
   - Elektron valensi $= 7 \\implies$ **Golongan VIIA (Halogen)**.

3. **Unsur $R$ ($Z = 35$ - Bromin):**
   - Konfigurasi kulit: $2, 8, 18, 7$.
   - Jumlah kulit terisi $= 4 \\implies$ **Periode 4**.
   - Elektron valensi $= 7 \\implies$ **Golongan VIIA (Halogen)**.`,
    solution_framework_template: `1. Konfigurasi Kulit Utama:
• Tuliskan distribusi elektron pada tiap kulit K, L, M, N: ....

2. Penentuan Periode:
• Hitung jumlah lintasan kulit yang terisi elektron: ....
• Nilai periode = jumlah kulit: ....

3. Penentuan Golongan:
• Hitung jumlah elektron pada kulit terluar (elektron valensi): ....
• Nomor golongan utama = elektron valensi (angka Romawi + A): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['sistem-periodik-unsur', 'periode-dan-golongan', 'konfigurasi-elektron'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 206 - 215)
  // =========================================================================
  {
    id: 206,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Konfigurasi Subkulit spdf & Aturan Aufbau/Hund/Pauli',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Konfigurasi Elektron Subkulit Gas Mulia dan Jumlah Elektron Tak Berpasangan',
    question_text: `Atom fosforus memiliki nomor atom $Z = 15$. Penulisan konfigurasi elektron singkat menggunakan lambang gas mulia serta jumlah elektron yang tidak berpasangan pada orbital terluar berturut-turut adalah ....

A. $[\\ce{Ne}]\\, 3s^2\\, 3p^3$ dengan 3 elektron tidak berpasangan  
B. $[\\ce{Ne}]\\, 3s^2\\, 3p^3$ dengan 1 elektron tidak berpasangan  
C. $[\\ce{Ar}]\\, 3s^2\\, 3p^3$ dengan 3 elektron tidak berpasangan  
D. $[\\ce{Ne}]\\, 3s^1\\, 3p^4$ dengan 2 elektron tidak berpasangan  
E. $[\\ce{He}]\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^3$ dengan 0 elektron tidak berpasangan`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Nomor Atom Fosfor ($Z = 15$):**
   Gas mulia sebelum fosforus adalah Neon ($_{10}\\ce{Ne}$).
   Konfigurasi elektron lengkap:
   $$1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^3$$
   Dapat disingkat menjadi:
   $$[\\ce{Ne}]\\, 3s^2\\, 3p^3$$
2. **Diagram Orbital Subkulit $3p^3$ Berdasarkan Aturan Hund:**
   Subkulit $p$ memiliki 3 orbital ($p_x, p_y, p_z$). Menurut **Aturan Hund**, elektron akan mengisi orbital satu per satu secara paralel dengan spin searah sebelum berpasangan:
   - Orbital $3p_x$: $\\uparrow$
   - Orbital $3p_y$: $\\uparrow$
   - Orbital $3p_z$: $\\uparrow$
   Seluruh 3 elektron pada subkulit $3p$ berstatus **tidak berpasangan** (tunggal).

**Analisis Opsi Lain:**
- **B salah:** Jumlah elektron tidak berpasangan adalah 3, bukan 1.
- **C salah:** Gas mulia $[\\ce{Ar}]$ memiliki 18 elektron (melebihi nomor atom fosfor 15).
- **D salah:** Melanggar prinsip Aufbau karena subkulit $3s$ belum penuh tetapi sudah mengisi $3p$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan Penilaian Tengah Semester SMA Fase E',
    tags: ['konfigurasi-elektron', 'aturan-hund', 'prinsip-aufbau', 'diagram-orbital'],
  },
  {
    id: 207,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Empat Bilangan Kuantum Elektron Terakhir',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Set Bilangan Kuantum Elektron Terakhir Atom Klorin',
    question_text: `Atom klorin memiliki nomor atom $Z = 17$. Set empat bilangan kuantum ($n, l, m_l, m_s$) yang diperkenankan untuk elektron terakhir atom klorin pada keadaan dasar adalah ....

A. $n = 3, l = 0, m_l = 0, m_s = +1/2$  
B. $n = 3, l = 1, m_l = 0, m_s = -1/2$  
C. $n = 3, l = 1, m_l = +1, m_s = -1/2$  
D. $n = 3, l = 2, m_l = 0, m_s = +1/2$  
E. $n = 2, l = 1, m_l = -1, m_s = -1/2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B** (atau orientasi orbital $m_l = 0$ dengan spin $-1/2$)

**Pembahasan Langkah demi Langkah:**
1. **Konfigurasi Elektron $_{17}\\ce{Cl}$:**
   $$1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^5$$
   Elektron terakhir berada pada orbital **$3p^5$**.
2. **Identifikasi Bilangan Kuantum:**
   - **Bilangan Kuantum Utama ($n$):** Kulit ke-3 $\\implies n = 3$.
   - **Bilangan Kuantum Azimut ($l$):** Subkulit $p \\implies l = 1$.
   - **Bilangan Kuantum Magnetik ($m_l$) dan Spin ($m_s$):**
     Subkulit $p$ memiliki nilai $m_l = -1, 0, +1$.
     Pengisian 5 elektron sesuai Aturan Hund:
     - Elektron 1: $m_l = -1, m_s = +1/2$
     - Elektron 2: $m_l = 0, m_s = +1/2$
     - Elektron 3: $m_l = +1, m_s = +1/2$
     - Elektron 4: $m_l = -1, m_s = -1/2$
     - **Elektron 5 (terakhir):** $m_l = 0, m_s = -1/2$.
   Jadi, set kuantum elektron terakhir adalah **$n = 3, l = 1, m_l = 0, m_s = -1/2$**.

**Analisis Opsi Lain:**
- **A salah:** $l = 0$ merupakan subkulit $s$.
- **D salah:** $l = 2$ merupakan subkulit $d$.
- **E salah:** Nilai $n = 2$ bukan kulit terluar klorin.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan Ulangan Harian Kimia SMA',
    tags: ['bilangan-kuantum', 'subkulit-spdf', 'struktur-atom'],
  },
  {
    id: 208,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Konfigurasi Elektron Unsur Golongan Transisi (B)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Golongan dan Periode Unsur Logam Transisi Mangan',
    question_text: `Suatu atom unsur $X$ memiliki nomor atom $Z = 25$. Di dalam sistem periodik unsur modern, unsur $X$ tersebut terletak pada ....

A. Golongan VA, Periode 4  
B. Golongan VIIA, Periode 4  
C. Golongan VIIB, Periode 4  
D. Golongan IIB, Periode 4  
E. Golongan VIIIB, Periode 4`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Konfigurasi Elektron $_{25}X$ (Mangan):**
   $$1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^6\\, 4s^2\\, 3d^5$$
   Atau dapat disingkat: $[\\ce{Ar}]\\, 4s^2\\, 3d^5$.
2. **Penentuan Periode:**
   Bilangan kuantum utama terbesar adalah $n = 4$ (pada subkulit $4s$), maka unsur terletak pada **Periode 4**.
3. **Penentuan Golongan:**
   Elektron valensi berakhir pada subkulit $(ns + (n-1)d)$, yang berarti unsur ini tergolong **Golongan B (Logam Transisi)**:
   $$\\text{Jumlah elektron valensi} = 2 (\\text{dari } 4s) + 5 (\\text{dari } 3d) = 7$$
   Oleh karena jumlahnya 7, unsur berada pada **Golongan VIIB**.

**Analisis Opsi Lain:**
- **A & B salah:** Mengelompokkan ke dalam Golongan A (unsur utama). Unsur dengan elektron valensi di subkulit $d$ merupakan golongan transisi (B).
- **D & E salah:** Jumlah elektron valensi $2 + 5 = 7$, bukan 2 (IIB) atau 8 (VIIIB).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['logam-transisi', 'golongan-b', 'periode-dan-golongan', 'konfigurasi-elektron'],
  },
  {
    id: 209,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Keteraturan Tren Jari-Jari Atom dalam Tabel Periodik',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Perbandingan Jari-Jari Atom Berdasarkan Letak dalam Satu Golongan dan Periode',
    question_text: `Diberikan lima unsur dengan nomor atom berturut-turut:
$_{3}\\ce{Li}$, $_{11}\\ce{Na}$, $_{12}\\ce{Mg}$, $_{17}\\ce{Cl}$, dan $_{19}\\ce{K}$.

Unsur yang memiliki nilai **jari-jari atom paling besar** adalah ....

A. $_{3}\\ce{Li}$  
B. $_{11}\\ce{Na}$  
C. $_{12}\\ce{Mg}$  
D. $_{17}\\ce{Cl}$  
E. $_{19}\\ce{K}$`,
    expected_final_answer: 'E',
    solution_rubric: `**Kunci Jawaban: E**

**Pembahasan Langkah demi Langkah:**
1. **Konsep Jari-Jari Atom:**
   - **Dalam Satu Golongan (dari atas ke bawah):** Jumlah kulit elektron bertambah, sehingga jarak antara inti dengan elektron valensi semakin jauh $\\implies$ Jari-jari atom **semakin besar**.
   - **Dalam Satu Periode (dari kiri ke kanan):** Jumlah kulit sama, tetapi muatan inti ($Z$) bertambah sehingga gaya tarik inti terhadap elektron semakin kuat $\\implies$ Jari-jari atom **semakin kecil**.
2. **Analisis Letak Unsur di SPU:**
   - $_{3}\\ce{Li}$: Golongan IA, Periode 2 (2 kulit)
   - $_{11}\\ce{Na}$: Golongan IA, Periode 3 (3 kulit)
   - $_{12}\\ce{Mg}$: Golongan IIA, Periode 3 (3 kulit)
   - $_{17}\\ce{Cl}$: Golongan VIIA, Periode 3 (3 kulit)
   - $_{19}\\ce{K}$: Golongan IA, Periode 4 (4 kulit)
3. **Kesimpulan:**
   $_{19}\\ce{K}$ memiliki jumlah kulit paling banyak (4 kulit) dan berada di Golongan IA (paling kiri di periodenya), sehingga memiliki **jari-jari atom paling besar**.

**Analisis Opsi Lain:**
- **D ($_{17}\\ce{Cl}$):** Memiliki jari-jari terkecil di antara unsur periode 3 karena muatan inti efektifnya besar.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 6,
    year: 2024,
    source_event: 'Persiapan UTBK-SNBT Kimia SMA',
    tags: ['sifat-periodik', 'jari-jari-atom', 'tren-periodik'],
  },
  {
    id: 210,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Tren Energi Ionisasi Pertama Periode 3',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Kecenderungan Nilai Energi Ionisasi Pertama Unsur-Unsur Periode 3',
    question_text: `Pernyataan yang paling tepat mengenai kecenderungan nilai energi ionisasi pertama unsur-unsur dalam Periode 3 dari Natrium ($_{11}\\ce{Na}$) sampai Argon ($_{18}\\ce{Ar}$) adalah ....

A. Meningkat secara konstan tanpa penyimpangan karena nomor massa atom bertambah  
B. Menurun secara teratur karena jumlah kulit elektron bertambah  
C. Cenderung meningkat dari kiri ke kanan dengan anomali penurunan kecil pada magnesium ke aluminium dan fosforus ke belerang  
D. Cenderung menurun dari kiri ke kanan karena elektron valensi semakin menjauhi inti  
E. Selalu bernilai sama karena semua unsur berada pada kulit utama yang sama ($n = 3$)`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Kecenderungan Umum:**
   Dalam satu periode dari kiri ke kanan, muatan inti efektif ($Z_{\\text{eff}}$) meningkat sementara jumlah kulit tetap. Akibatnya, tarikan inti terhadap elektron valensi semakin kuat dan energi ionisasi pertama ($IE_1$) secara umum **meningkat**.
2. **Penyimpangan/Anomali Khas Periode 3:**
   - **Mg ($3s^2$) ke Al ($3s^2 3p^1$):** $IE_1$ Aluminium lebih rendah dari Magnesium karena elektron $3p^1$ memiliki tingkat energi lebih tinggi dan terperisai oleh elektron $3s^2$.
   - **P ($3s^2 3p^3$) ke S ($3s^2 3p^4$):** $IE_1$ Belerang lebih rendah dari Fosforus karena konfigurasi setengah penuh ($3p^3$) pada fosforus sangat stabil, sedangkan pada belerang terdapat sepasang elektron di salah satu orbital $3p$ yang menimbulkan gaya tolak-menolak antar elektron sekamar (*electron-pairing repulsion*).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 6,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['energi-ionisasi', 'sifat-periodik', 'anomali-energi-ionisasi', 'periode-3'],
  },
  {
    id: 211,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Konfigurasi Ion Logam Transisi & Pelepasan Elektron',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Konfigurasi Elektron Ion Besi (Fe2+ dan Fe3+) serta Kestabilan Subkulit d',
    question_text: `Atom besi ($_{26}\\ce{Fe}$) merupakan unsur logam transisi periode 4 yang dapat membentuk kation dengan muatan $+2$ dan $+3$.

Berdasarkan prinsip konfigurasi elektron subkulit:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan konfigurasi elektron lengkap untuk atom netral 26Fe dan tentukan orbital terluarnya!',
        points: 3,
        rubric: 'Konfigurasi 1s2 2s2 2p6 3s2 3p6 4s2 3d6 (2 poin); Kulit terluar adalah 4s (1 poin).',
        expected_answer: '1s2 2s2 2p6 3s2 3p6 4s2 3d6, kulit terluar 4s'
      },
      {
        label: 'b',
        question_text: 'Tuliskan konfigurasi elektron ion Fe2+ dan ion Fe3+!',
        points: 4,
        rubric: 'Fe2+: [Ar] 3d6 (2 poin - elektron 4s dilepas lebih dulu); Fe3+: [Ar] 3d5 (2 poin).',
        expected_answer: 'Fe2+: [Ar] 3d6; Fe3+: [Ar] 3d5'
      },
      {
        label: 'c',
        question_text: 'Jelaskan mengapa ion Fe3+ relatif lebih stabil dibandingkan ion Fe2+ di alam!',
        points: 3,
        rubric: 'Penjelasan kestabilan subkulit 3d5 yang terisi setengah penuh (half-filled) simetris (3 poin).',
        expected_answer: 'Ion Fe3+ memiliki subkulit 3d5 (setengah penuh) yang memiliki simetri bola dan energi pertukaran maksimum sehingga lebih stabil.'
      }
    ],
    expected_final_answer: 'Fe: [Ar] 4s2 3d6; Fe2+: [Ar] 3d6; Fe3+: [Ar] 3d5 (stabil setengah penuh)',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a):**
   - Konfigurasi $_{26}\\ce{Fe}$: $1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^6\\, 4s^2\\, 3d^6$ atau $[\\ce{Ar}]\\, 4s^2\\, 3d^6$.
   - Meskipun $3d$ memiliki energi pengisian lebih tinggi saat pengisian Aufbau, elektron pada kulit utama terluar adalah **$4s$**.
   *(Skor: 3 Poin)*

2. **Sub-soal (b):**
   - Saat ionisasi, elektron pada kulit terluar ($4s$) dilepas terlebih dahulu:
     $$\\ce{Fe^2+} \\implies [\\ce{Ar}]\\, 3d^6$$
   - Pelepasan satu elektron lagi berasal dari subkulit $3d$:
     $$\\ce{Fe^3+} \\implies [\\ce{Ar}]\\, 3d^5$$
   *(Skor: 4 Poin)*

3. **Sub-soal (c):**
   - Subkulit $d$ memiliki 5 orbital. Pada ion $\\ce{Fe^3+}$, kelima orbital $d$ masing-masing terisi tepat 1 elektron ($3d^5$, terisi **setengah penuh**).
   - Konfigurasi setengah penuh memiliki kerapatan muatan berbentuk simetri bola dan energi pertukaran elektron (*exchange energy*) yang maksimum, sehingga ion $\\ce{Fe^3+}$ lebih stabil terhadap oksidasi dibandingkan $\\ce{Fe^2+}$.
   *(Skor: 3 Poin)*`,
    solution_framework_template: `1. Konfigurasi Atom Netral Besi:
• Tuliskan susunan 26 elektron: ....
• Identifikasi elektron kulit terluar (n tertinggi): ....

2. Pembentukan Ion Fe2+ dan Fe3+:
• Elektron yang terlepas pertama kali saat ionisasi (kulit 4s): ....
• Konfigurasi Fe2+: ....
• Konfigurasi Fe3+: ....

3. Analisis Kestabilan Subkulit d:
• Kondisi orbital 3d pada Fe2+ (3d6): ....
• Kondisi orbital 3d pada Fe3+ (3d5 setengah penuh): ....
• Kesimpulan kestabilan simetri dan energi pertukaran: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E',
    tags: ['logam-transisi', 'ion-transisi', 'kestabilan-setengah-penuh', 'konfigurasi-elektron'],
  },
  {
    id: 212,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Penentuan Bilangan Kuantum dan Diagram Orbital',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan 4 Bilangan Kuantum Elektron Valensi Terluar Atom Belerang',
    question_text: `Atom belerang ($_{16}\\ce{S}$) memiliki 16 elektron pada keadaan dasar.

Berdasarkan konfigurasi elektron mekanika gelombang:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Gambarkan diagram orbital untuk elektron-elektron valensi pada kulit ke-3 atom belerang!',
        points: 4,
        rubric: 'Orbital 3s terisi sepasang panah berlawanan (2 poin); orbital 3p memiliki 1 pasang dan 2 panah tunggal (2 poin).',
        expected_answer: '3s: [↑↓]; 3p: [↑↓][↑ ][↑ ]'
      },
      {
        label: 'b',
        question_text: 'Tentukan harga keempat bilangan kuantum (n, l, ml, ms) untuk elektron terakhir yang diisikan ke dalam orbital belerang!',
        points: 4,
        rubric: 'n=3 (1 poin), l=1 (1 poin), ml=-1 (1 poin), ms=-1/2 (1 poin).',
        expected_answer: 'n = 3, l = 1, ml = -1, ms = -1/2'
      }
    ],
    expected_final_answer: 'n = 3, l = 1, ml = -1, ms = -1/2',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a):**
   - Konfigurasi elektron $_{16}\\ce{S}$: $[\\ce{Ne}]\\, 3s^2\\, 3p^4$.
   - Elektron valensi berada pada subkulit $3s$ dan $3p$:
     - Subkulit $3s^2$: 1 orbital terisi penuh berpasangan ($[\\uparrow\\downarrow]$).
     - Subkulit $3p^4$: Sesuai aturan Hund, 3 orbital $p$ pertama diisi 3 elektron ber-spin searah ($[\\uparrow][\\uparrow][\\uparrow]$), dan elektron ke-4 berpasangan pada orbital pertama:
       $$3p_x: [\\uparrow\\downarrow],\\quad 3p_y: [\\uparrow],\\quad 3p_z: [\\uparrow]$$

2. **Sub-soal (b):**
   Elektron ke-16 merupakan elektron ke-4 pada subkulit $3p$:
   - $n = 3$ (kulit ke-3)
   - $l = 1$ (subkulit $p$)
   - $m_l = -1$ (orbital pertama tempat berpasangan)
   - $m_s = -1/2$ (spin mengarah ke bawah karena berpasangan).`,
    solution_framework_template: `1. Konfigurasi Elektron Belerang:
• Tuliskan konfigurasi subkulit 16S: ....

2. Diagram Orbital Kulit Valensi:
• Orbital 3s (kapasitas 2e): ....
• Orbital 3p (distribusi 4e dengan aturan Hund): ....

3. Set Bilangan Kuantum Elektron Terakhir:
• Nilai n: ....
• Nilai l: ....
• Nilai ml: ....
• Nilai ms: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 8,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['bilangan-kuantum', 'diagram-orbital', 'aturan-hund'],
  },
  {
    id: 213,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Tren Sifat Keperiodikan Golongan Halogen',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Hubungan Jari-Jari Atom dan Keelektronegatifan Golongan Halogen',
    question_text: `Unsur-unsur halogen pada Golongan VIIA terdiri atas Fluorin ($_{9}\\ce{F}$), Klorin ($_{17}\\ce{Cl}$), Bromin ($_{35}\\ce{Br}$), dan Iodin ($_{53}\\ce{I}$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Urutkan keempat unsur halogen tersebut berdasarkan kenaikan jari-jari atomnya dan jelaskan alasan ilmiahnya!',
        points: 4,
        rubric: 'Urutan: F < Cl < Br < I (2 poin); Alasan pertambahan kulit elektron dari atas ke bawah (2 poin).',
        expected_answer: 'F < Cl < Br < I karena bertambahnya jumlah kulit utama'
      },
      {
        label: 'b',
        question_text: 'Jelaskan bagaimana pengaruh ukuran jari-jari atom tersebut terhadap nilai keelektronegatifan dan daya pengoksidasi (oksidator) halogen!',
        points: 4,
        rubric: 'Keelektronegatifan berbanding terbalik dengan jari-jari (2 poin); F memiliki daya oksidasi paling kuat karena paling mudah menarik elektron (2 poin).',
        expected_answer: 'Semakin kecil jari-jari, tarikan inti semakin kuat sehingga keelektronegatifan dan daya pengoksidasi semakin besar (F paling kuat).'
      }
    ],
    expected_final_answer: 'Jari-jari: F < Cl < Br < I; Keelektronegatifan & Daya Oksidator: F > Cl > Br > I',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a):**
   - **Urutan kenaikan jari-jari atom:**
     $$\\ce{F} < \\ce{Cl} < \\ce{Br} < \\ce{I}$$
   - **Alasan:** Dari $\\ce{F}$ ke $\\ce{I}$, jumlah kulit utama elektron bertambah ($n = 2$ pada $\\ce{F}$, $n = 3$ pada $\\ce{Cl}$, $n = 4$ pada $\\ce{Br}$, dan $n = 5$ pada $\\ce{I}$), sehingga jarak rata-rata elektron terluar dari inti atom bertambah besar.

2. **Sub-soal (b):**
   - **Keelektronegatifan:** Semakin kecil jari-jari atom (seperti pada atom $\\ce{F}$), semakin dekat jarak elektron ikatan ke inti atom, sehingga gaya tarik inti terhadap elektron pasangan semakin kuat. Nilai keelektronegatifan: $\\ce{F} > \\ce{Cl} > \\ce{Br} > \\ce{I}$.
   - **Daya Pengoksidasi:** Halogen bertindak sebagai oksidator dengan cara menangkap elektron. Karena atom $\\ce{F}$ memiliki jari-jari terkecil dan tarikan inti paling kuat, gas fluorin ($\\ce{F2}$) paling mudah tereduksi menjadi $\\ce{F-}$ sehingga merupakan oksidator terkuat di antara halogen.`,
    solution_framework_template: `1. Analisis Jumlah Kulit Halogen:
• Jumlah kulit F, Cl, Br, I: ....
• Urutan jari-jari atom: ....

2. Hubungan Jari-Jari dengan Tarikan Inti:
• Jarak inti ke elektron valensi: ....
• Kemudahan menarik elektron (keelektronegatifan): ....

3. Analisis Daya Oksidator:
• Definisi daya pengoksidasi halogen: ....
• Hubungan kemampuan reduksi dengan jari-jari atom: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 7,
    total_points: 8,
    year: 2024,
    source_event: 'Persiapan Ujian Sekolah Kimia SMA',
    tags: ['halogen', 'sifat-periodik', 'keelektronegatifan', 'daya-oksidator'],
  },
  {
    id: 214,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Perbandingan Ukuran Jari-Jari Atom Netral terhadap Ionnya',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Perbandingan Ukuran Jari-Jari Kation dan Anion terhadap Atom Netralnya',
    question_text: `Ukuran partikel atom dapat berubah secara signifikan ketika melepaskan atau menangkap elektron membentuk ion.

Jelaskan perbandingan ukuran jari-jari berikut secara teoritis:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Bandingkan jari-jari atom natrium (11Na) dengan jari-jari kation natrium (Na+) dan jelaskan penyebab fisisnya!',
        points: 4,
        rubric: 'Jari-jari Na+ lebih kecil dari Na (2 poin); Penjelasan kehilangan kulit terluar (kulit ke-3 hilang) dan tarikan inti efektif per elektron meningkat (2 poin).',
        expected_answer: 'Jari-jari Na+ lebih kecil dari Na karena kehilangan 1 kulit terluar dan rasio proton terhadap elektron meningkat.'
      },
      {
        label: 'b',
        question_text: 'Bandingkan jari-jari atom klorin (17Cl) dengan jari-jari anion klorida (Cl-) dan jelaskan penyebab fisisnya!',
        points: 4,
        rubric: 'Jari-jari Cl- lebih besar dari Cl (2 poin); Penjelasan pertambahan tolakan antar elektron pada kulit terluar tanpa pertambahan proton inti (2 poin).',
        expected_answer: 'Jari-jari Cl- lebih besar dari Cl karena tolakan antar elektron bertambah sehingga awan elektron mengembang.'
      }
    ],
    expected_final_answer: 'Na+ < Na (kulit berkurang & Z_eff naik); Cl- > Cl (tolakan elektron meningkat)',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Jari-jari $\\ce{Na+}$ vs $\\ce{Na}$**
   - Jari-jari kation $\\ce{Na+}$ **jauh lebih kecil** daripada atom netral $\\ce{Na}$.
   - **Penyebab:**
     1. Konfigurasi $\\ce{Na}$: $2, 8, 1$ (3 kulit). Saat melepaskan 1 elektron membentuk $\\ce{Na^+}$, konfigurasinya menjadi $2, 8$ (kehilangan seluruh kulit ke-3).
     2. Jumlah proton tetap 11, namun kini hanya menarik 10 elektron. Tarikan inti efektif per elektron meningkat drastis, menarik awan elektron mendekat ke inti.

2. **Sub-soal (b): Jari-jari $\\ce{Cl^-}$ vs $\\ce{Cl}$**
   - Jari-jari anion $\\ce{Cl^-}$ **lebih besar** daripada atom netral $\\ce{Cl}$.
   - **Penyebab:**
     1. Konfigurasi $\\ce{Cl}$ ($2, 8, 7$) dan $\\ce{Cl^-}$ ($2, 8, 8$) sama-sama memiliki 3 kulit.
     2. Namun pada $\\ce{Cl^-}$, masuknya 1 elektron tambahan meningkatkan gaya tolak-menolak antar elektron (*electron-electron repulsion*) pada kulit terluar, menyebabkan awan elektron mengembang (*expands*).`,
    solution_framework_template: `1. Analisis Kation (Na vs Na+):
• Konfigurasi Na dan Na+: ....
• Efek pelepasan elektron pada jumlah kulit: ....
• Rasio muatan inti Z terhadap elektron (Z/e): ....

2. Analisis Anion (Cl vs Cl-):
• Konfigurasi Cl dan Cl-: ....
• Jumlah kulit keduanya: ....
• Efek penambahan elektron terhadap tolakan elektrostatik: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 8,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E',
    tags: ['jari-jari-ion', 'kation-anion', 'sifat-periodik', 'gaya-elektrostatik'],
  },
  {
    id: 215,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Rekonstruksi Unsur dari Diagram Orbital Elektron Valensi',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Nomor Atom dan Sifat Kimia Unsur dari Konfigurasi Elektron Terluar',
    question_text: `Suatu unsur hipotesis $M$ memiliki elektron terakhir pada keadaan dasar dengan nilai bilangan kuantum:
$$n = 4,\\quad l = 1,\\quad m_l = 0,\\quad m_s = +1/2$$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan subkulit tempat elektron terakhir tersebut berada beserta jumlah elektron pada subkulit tersebut!',
        points: 3,
        rubric: 'Subkulit 4p (1.5 poin); jumlah elektron = 2 elektron (4p^2) karena ml=0 dan ms=+1/2 (1.5 poin).',
        expected_answer: 'Subkulit 4p dengan 2 elektron (4p^2)'
      },
      {
        label: 'b',
        question_text: 'Tuliskan konfigurasi elektron lengkap unsur M dan tentukan nomor atomnya!',
        points: 3,
        rubric: 'Konfigurasi lengkap hingga 4p2 (2 poin); Nomor atom Z = 32 (1 poin).',
        expected_answer: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2 -> Nomor atom Z = 32'
      },
      {
        label: 'c',
        question_text: 'Tentukan letak periode dan golongan unsur M dalam Sistem Periodik Unsur!',
        points: 3,
        rubric: 'Periode 4 (1.5 poin); Golongan IVA (1.5 poin).',
        expected_answer: 'Periode 4, Golongan IVA (Golongan 14)'
      }
    ],
    expected_final_answer: 'Elektron terakhir 4p^2, Z = 32, Periode 4 Golongan IVA',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a):**
   - $n = 4, l = 1 \\implies$ subkulit **$4p$**.
   - Subkulit $p$ memiliki orbital dengan nilai $m_l = -1, 0, +1$.
   - Elektron dengan spin $+1/2$ mengisi orbital secara berurutan:
     - Elektron ke-1: $m_l = -1, m_s = +1/2$
     - Elektron ke-2: $m_l = 0, m_s = +1/2$
   - Berarti subkulit $4p$ terisi **2 elektron** ($4p^2$).

2. **Sub-soal (b):**
   - Mengikuti aturan pengisian Aufbau hingga $4p^2$:
     $$1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^6\\, 4s^2\\, 3d^{10}\\, 4p^2$$
   - Total elektron $= 2 + 2 + 6 + 2 + 6 + 2 + 10 + 2 = 32$.
   - Nomor atom unsur $M$ adalah **$Z = 32$** (Germanium).

3. **Sub-soal (c):**
   - Kulit terbesar $n = 4 \\implies$ **Periode 4**.
   - Elektron valensi pada kulit ke-4 adalah $4s^2\\, 4p^2 \\implies 2 + 2 = 4$ elektron valensi pada subkulit $s$ dan $p$.
   - Maka unsur $M$ terletak pada **Golongan IVA (atau Golongan 14)**.`,
    solution_framework_template: `1. Penafsiran Bilangan Kuantum:
• Arti n = 4 dan l = 1: ....
• Diagram orbital 4p untuk ml = 0, ms = +1/2: ....
• Jumlah elektron pada subkulit: ....

2. Penulisan Konfigurasi Elektron:
• Urutan pengisian Aufbau: ....
• Penjumlahan total elektron (Z): ....

3. Penentuan Posisi SPU:
• Nomor periode (n terbesar): ....
• Golongan (jumlah elektron kulit valensi): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 9,
    year: 2024,
    source_event: 'Latihan Kimia SMA Fase E (Kelas 10)',
    tags: ['bilangan-kuantum', 'rekonstruksi-unsur', 'periode-dan-golongan'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 216 - 225)
  // =========================================================================
  {
    id: 216,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Anomali Konfigurasi Setengah Penuh dan Penuh (Cr dan Cu)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Anomali Konfigurasi Elektron Kromium dan Tembaga Berdasarkan Kestabilan Subkulit d',
    question_text: `Berdasarkan aturan pengisian Aufbau standar, konfigurasi elektron kromium ($_{24}\\ce{Cr}$) dan tembaga ($_{29}\\ce{Cu}$) diprediksi berakhir pada $4s^2\\, 3d^4$ dan $4s^2\\, 3d^9$. Namun, fakta eksperimen menunjukkan konfigurasi elektron kedua atom tersebut berturut-turut adalah ....

A. $[\\ce{Ar}]\\, 4s^2\\, 3d^4$ dan $[\\ce{Ar}]\\, 4s^2\\, 3d^9$ karena mengikuti asas larangan Pauli  
B. $[\\ce{Ar}]\\, 4s^1\\, 3d^5$ dan $[\\ce{Ar}]\\, 4s^1\\, 3d^{10}$ karena kestabilan orbital terisi setengah penuh dan penuh  
C. $[\\ce{Ar}]\\, 4s^0\\, 3d^6$ dan $[\\ce{Ar}]\\, 4s^0\\, 3d^{11}$ karena subkulit $4s$ tidak stabil  
D. $[\\ce{Ar}]\\, 3d^6$ dan $[\\ce{Ar}]\\, 3d^{11}$ karena terjadi ionisasi spontan  
E. $[\\ce{Ar}]\\, 4s^2\\, 3d^5$ dan $[\\ce{Ar}]\\, 4s^2\\, 3d^{10}$ karena elektron bertambah dari lingkungan`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Penyimpangan Aturan Aufbau:**
   - Pada atom $_{24}\\ce{Cr}$, 1 elektron dari subkulit $4s$ berpindah ke subkulit $3d$ menghasilkan konfigurasi $[\\ce{Ar}]\\, 4s^1\\, 3d^5$.
   - Pada atom $_{29}\\ce{Cu}$, 1 elektron dari subkulit $4s$ berpindah ke subkulit $3d$ menghasilkan konfigurasi $[\\ce{Ar}]\\, 4s^1\\, 3d^{10}$.
2. **Alasan Termodinamika & Mekanika Kuantum:**
   - Subkulit $d$ memiliki kestabilan ekstra yang sangat tinggi saat terisi **tepat setengah penuh ($d^5$)** atau **penuh ($d^{10}$)**.
   - Keadaan setengah penuh dan penuh memiliki simetri bola (*spherical symmetry*) dan energi pertukaran elektron (*exchange energy*) maksimal yang mampu mengkompensasi energi eksitasi elektron dari $4s$ ke $3d$.

**Analisis Opsi Lain:**
- **A salah:** Ini adalah konfigurasi prediksi awal yang tidak stabil.
- **C & D salah:** Subkulit $4s$ tidak kosong total dan jumlah elektron total tetap sama dengan nomor atom.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 7,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['anomali-konfigurasi', 'aturan-aufbau', 'kestabilan-setengah-penuh', 'kromium-tembaga'],
  },
  {
    id: 217,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Perbandingan Ukuran Spesi Isoelektronik',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Urutan Jari-Jari Spesi Isoelektronik 10 Elektron',
    question_text: `Diberikan beberapa spesi ion dan atom netral yang memiliki jumlah elektron sama (isoelektronik dengan gas Neon, 10 elektron):
$_{7}\\ce{N^3-},\\, _{8}\\ce{O^2-},\\, _{9}\\ce{F-},\\, _{11}\\ce{Na+},\\, _{12}\\ce{Mg^2+},\\, _{13}\\ce{Al^3+}$

Urutan yang benar dari **jari-jari spesi terkecil ke jari-jari spesi terbesar** adalah ....

A. $\\ce{Al^3+} < \\ce{Mg^2+} < \\ce{Na+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}$  
B. $\\ce{N^3-} < \\ce{O^2-} < \\ce{F-} < \\ce{Na+} < \\ce{Mg^2+} < \\ce{Al^3+}$  
C. $\\ce{Na+} < \\ce{Mg^2+} < \\ce{Al^3+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}$  
D. $\\ce{F-} < \\ce{O^2-} < \\ce{N^3-} < \\ce{Al^3+} < \\ce{Mg^2+} < \\ce{Na+}$  
E. $\\ce{Al^3+} < \\ce{Na+} < \\ce{Mg^2+} < \\ce{N^3-} < \\ce{O^2-} < \\ce{F-}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Identifikasi Spesi Isoelektronik:**
   Semua spesi memiliki jumlah elektron yang sama, yaitu 10 elektron (konfigurasi: $1s^2\\, 2s^2\\, 2p^6$, 2 kulit).
2. **Peran Muatan Inti (Nomor Atom $Z$):**
   Karena jumlah elektron dan kulitnya sama, faktor penentu ukuran awan elektron adalah **jumlah proton di dalam inti atom ($Z$)**:
   - $\\ce{N^3-} \\implies Z = 7$ proton menarik 10 elektron ($Z/e = 0.70$)
   - $\\ce{O^2-} \\implies Z = 8$ proton menarik 10 elektron ($Z/e = 0.80$)
   - $\\ce{F-} \\implies Z = 9$ proton menarik 10 elektron ($Z/e = 0.90$)
   - $\\ce{Na+} \\implies Z = 11$ proton menarik 10 elektron ($Z/e = 1.10$)
   - $\\ce{Mg^2+} \\implies Z = 12$ proton menarik 10 elektron ($Z/e = 1.20$)
   - $\\ce{Al^3+} \\implies Z = 13$ proton menarik 10 elektron ($Z/e = 1.30$)
3. **Kesimpulan:**
   Semakin besar nomor atom $Z$, muatan inti semakin positif, sehingga gaya tarik inti terhadap 10 elektron semakin kuat dan jari-jari ion semakin menyusut (kecil).
   - Terkecil: $\\ce{Al^3+}$
   - Terbesar: $\\ce{N^3-}$
   Urutan dari terkecil ke terbesar:
   $$\\ce{Al^3+} < \\ce{Mg^2+} < \\ce{Na+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 7,
    year: 2024,
    source_event: 'Persiapan UTBK-SNBT / OSK Kimia SMA',
    tags: ['spesi-isoelektronik', 'jari-jari-ion', 'muatan-inti-efektif', 'sifat-periodik'],
  },
  {
    id: 218,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Analisis Data Energi Ionisasi Bertingkat',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Prediksi Golongan dan Rumus Senyawa Berdasarkan Data Lonjakan Energi Ionisasi',
    question_text: `Data lima energi ionisasi bertingkat pertama (dalam satuan $\\text{kJ/mol}$) untuk suatu unsur representatif $X$ ditunjukkan pada tabel berikut:

| Energi Ionisasi | Nilai (kJ/mol) |
| :--- | :--- |
| $IE_1$ | $578$ |
| $IE_2$ | $1.817$ |
| $IE_3$ | $2.745$ |
| $IE_4$ | $11.577$ |
| $IE_5$ | $14.842$ |

Berdasarkan data tersebut, unsur $X$ terletak pada golongan apa di dalam sistem periodik, dan bagaimana rumus kimia senyawa klorida yang paling stabil terbentuk?

A. Golongan IA, membentuk senyawa $X\\ce{Cl}$  
B. Golongan IIA, membentuk senyawa $X\\ce{Cl2}$  
C. Golongan IIIA, membentuk senyawa $X\\ce{Cl3}$  
D. Golongan IVA, membentuk senyawa $X\\ce{Cl4}$  
E. Golongan VA, membentuk senyawa $X\\ce{Cl5}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Lonjakan Energi Ionisasi:**
   - $IE_1 \\rightarrow IE_2$: Kenaikan normal ($578 \\rightarrow 1.817\\text{ kJ/mol}$, faktor $\\sim 3.1$)
   - $IE_2 \\rightarrow IE_3$: Kenaikan normal ($1.817 \\rightarrow 2.745\\text{ kJ/mol}$, faktor $\\sim 1.5$)
   - **$IE_3 \\rightarrow IE_4$:** Terjadi **lonjakan sangat drastis** ($2.745 \\rightarrow 11.577\\text{ kJ/mol}$, kenaikan lebih dari **4.2 kali lipat**!).
   - $IE_4 \\rightarrow IE_5$: Kenaikan bertahap biasa ($11.577 \\rightarrow 14.842\\text{ kJ/mol}$).
2. **Interpretasi Kulit Elektron:**
   Lonjakan drastis pada $IE_4$ menandakan bahwa 3 elektron pertama berasal dari kulit valensi terluar. Pelepasan elektron ke-4 membutuhkan energi sangat masif karena elektron tersebut diambil dari **kulit bagian dalam yang sudah stabil (oktet gas mulia)**.
3. **Kesimpulan Golongan & Rumus Senyawa:**
   - Jumlah elektron valensi $= 3 \\implies$ Unsur $X$ berada pada **Golongan IIIA (Golongan 13)**.
   - Ion stabil yang dibentuk adalah kation $X^{3+}$.
   - Bereaksi dengan klorin ($\\ce{Cl-}$ membentuk ikatan dengan perbandingan $1 : 3$):
     $$\\ce{X^3+ + 3Cl- -> XCl3}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 7,
    year: 2024,
    source_event: 'Persiapan UTBK-SNBT / OSK Kimia SMA',
    tags: ['energi-ionisasi-bertingkat', 'elektron-valensi', 'rumus-senyawa', 'periode-dan-golongan'],
  },
  {
    id: 219,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Anomali Energi Ionisasi IIA vs IIIA dan VA vs VIA',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penjelasan Anomali Energi Ionisasi Nitrogen Lebih Besar daripada Oksigen',
    question_text: `Dalam satu periode dari kiri ke kanan, energi ionisasi umumnya meningkat seiring bertambahnya muatan inti. Namun, energi ionisasi pertama nitrogen ($_{7}\\ce{N}$, $1402\\text{ kJ/mol}$) tercatat **lebih tinggi** daripada energi ionisasi pertama oksigen ($_{8}\\ce{O}$, $1314\\text{ kJ/mol}$).

Penyebab ilmiah yang paling tepat untuk anomali tersebut adalah ....

A. Jari-jari atom oksigen jauh lebih besar daripada jari-jari atom nitrogen  
B. Nitrogen memiliki konfigurasi subkulit $2p^3$ yang terisi setengah penuh dan stabil, sedangkan oksigen memiliki sepasang elektron pada orbital $2p$ yang saling tolak-menolak  
C. Oksigen memiliki nomor atom lebih besar sehingga gaya tarik intinya lebih lemah daripada nitrogen  
D. Nitrogen merupakan unsur nonlogam sedangkan oksigen merupakan unsur metaloid  
E. Elektron valensi nitrogen berada pada kulit $n = 3$, sedangkan elektron valensi oksigen berada pada kulit $n = 2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Konfigurasi Subkulit Valensi:**
   - Nitrogen ($_{7}\\ce{N}$): $1s^2\\, 2s^2\\, 2p^3$
     Ketiga orbital $2p$ terisi tepat masing-masing 1 elektron: $[\\uparrow][\\uparrow][\\uparrow]$. Ini adalah konfigurasi **setengah penuh (*half-filled*)** yang stabil dan simetris secara energi pertukaran.
   - Oksigen ($_{8}\\ce{O}$): $1s^2\\, 2s^2\\, 2p^4$
     Orbital $2p$ terisi: $[\\uparrow\\downarrow][\\uparrow][\\uparrow]$.
2. **Efek Tolakan Pasangan Elektron (*Spin-Pairing Repulsion*):**
   Pada atom oksigen, terdapat satu orbital $2p$ yang dihuni oleh **sepasang elektron**. Dua elektron bermuatan negatif yang menempati ruang orbital sempit yang sama mengalami gaya tolak-menolak elektrostatik (*pairing repulsion*). Tolakan internal ini menaikkan tingkat energi elektron tersebut, sehingga elektron keempat ini menjadi lebih mudah dilepaskan dibandingkan elektron pada subkulit $2p^3$ milik nitrogen.

**Analisis Opsi Lain:**
- **A salah:** Jari-jari oksigen justru sedikit lebih kecil daripada nitrogen.
- **C salah:** Muatan inti oksigen (+8) lebih kuat daripada nitrogen (+7).
- **D & E salah:** Keduanya adalah nonlogam dan berada di periode yang sama ($n = 2$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 7,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['anomali-energi-ionisasi', 'nitrogen-oksigen', 'aturan-hund', 'tolakan-elektron-sekamar'],
  },
  {
    id: 220,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Sifat Kemagnetan Atom dan Ion Transisi',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Sifat Paramagnetik dan Diamagnetik Ion Logam Transisi Periode 4',
    question_text: `Sifat kemagnetan suatu partikel ditentukan oleh ada atau tidaknya elektron yang tidak berpasangan di dalam orbitalnya. Spesi paramagnetik ditarik oleh medan magnet, sedangkan spesi diamagnetik ditolak lemah oleh medan magnet.

Di antara spesi ion berikut, ion yang bersifat **diamagnetik** adalah ....
(Diketahui nomor atom: $\\ce{Ti} = 22$, $\\ce{Cr} = 24$, $\\ce{Fe} = 26$, $\\ce{Cu} = 29$, $\\ce{Zn} = 30$)

A. $\\ce{Ti^2+}$  
B. $\\ce{Fe^3+}$  
C. $\\ce{Cu^2+}$  
D. $\\ce{Zn^2+}$  
E. $\\ce{Cr^3+}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Syarat Sifat Diamagnetik:**
   Suatu spesi bersifat diamagnetik jika **seluruh elektronnya berpasangan** (tidak memiliki elektron tunggal / tak berpasangan, $n = 0$).
2. **Tinjau Konfigurasi Masing-Masing Ion:**
   - **$\\ce{Ti^2+}$ ($Z = 22$):** Atom netral $[\\ce{Ar}]\\, 4s^2\\, 3d^2 \\implies \\ce{Ti^2+} = [\\ce{Ar}]\\, 3d^2$ (2 elektron tak berpasangan $\\implies$ **Paramagnetik**).
   - **$\\ce{Fe^3+}$ ($Z = 26$):** Atom netral $[\\ce{Ar}]\\, 4s^2\\, 3d^6 \\implies \\ce{Fe^3+} = [\\ce{Ar}]\\, 3d^5$ (5 elektron tak berpasangan $\\implies$ **Paramagnetik kuat**).
   - **$\\ce{Cu^2+}$ ($Z = 29$):** Atom netral $[\\ce{Ar}]\\, 4s^1\\, 3d^{10} \\implies \\ce{Cu^2+} = [\\ce{Ar}]\\, 3d^9$ (1 elektron tak berpasangan $\\implies$ **Paramagnetik**).
   - **$\\ce{Cr^3+}$ ($Z = 24$):** Atom netral $[\\ce{Ar}]\\, 4s^1\\, 3d^5 \\implies \\ce{Cr^3+} = [\\ce{Ar}]\\, 3d^3$ (3 elektron tak berpasangan $\\implies$ **Paramagnetik**).
   - **$\\ce{Zn^2+}$ ($Z = 30$):**
     Atom netral $\\ce{Zn}$: $[\\ce{Ar}]\\, 4s^2\\, 3d^{10}$.
     Saat membentuk ion $\\ce{Zn^2+}$, dua elektron pada subkulit $4s$ dilepaskan:
     $$\\ce{Zn^2+} \\implies [\\ce{Ar}]\\, 3d^{10}$$
     Subkulit $3d$ terisi penuh 10 elektron (kelima orbital terisi pasangan $[\\uparrow\\downarrow]$). Karena tidak memiliki elektron tak berpasangan sama sekali, $\\ce{Zn^2+}$ bersifat **diamagnetik**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 7,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['paramagnetik-diamagnetik', 'ion-transisi', 'diagram-orbital', 'seng'],
  },
  {
    id: 221,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Analisis Komprehensif Data Energi Ionisasi Bertingkat',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Spektrometri Ionisasi Bertingkat Unsur Periode 3 dan Ikatan Senyawanya',
    question_text: `Suatu unsur $M$ yang terletak pada Periode 3 tabel periodik diuji energi ionisasinya secara bertingkat dari $IE_1$ hingga $IE_6$. Data yang diperoleh dicatat pada tabel berikut:

| Tahap Ionisasi | Nilai Energi (kJ/mol) |
| :--- | :--- |
| $IE_1$ | $738$ |
| $IE_2$ | $1.451$ |
| $IE_3$ | $7.733$ |
| $IE_4$ | $10.543$ |
| $IE_5$ | $13.630$ |
| $IE_6$ | $17.995$ |`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan data tabel di atas, tentukan pada transisi ionisasi ke berapa terjadi lonjakan energi paling signifikan dan berikan alasan fisisnya!',
        points: 3,
        rubric: 'Lonjakan pada IE2 ke IE3 (1.5 poin); Alasan pelepasan elektron dari kulit dalam yang stabil setelah 2 elektron valensi habis (1.5 poin).',
        expected_answer: 'Lonjakan pada IE2 ke IE3 karena elektron ke-3 diambil dari kulit bagian dalam yang berkonfigurasi oktet stabil.'
      },
      {
        label: 'b',
        question_text: 'Tentukan jumlah elektron valensi dan nomor golongan unsur M dalam Sistem Periodik Unsur!',
        points: 3,
        rubric: 'Elektron valensi = 2 (1.5 poin); Golongan IIA / Golongan 2 (1.5 poin).',
        expected_answer: 'Elektron valensi = 2, Golongan IIA'
      },
      {
        label: 'c',
        question_text: 'Tuliskan rumus kimia senyawa klorida dan senyawa oksida stabil yang dibentuk oleh unsur M!',
        points: 3,
        rubric: 'Klorida: MCl2 (1.5 poin); Oksida: MO (1.5 poin).',
        expected_answer: 'MCl2 dan MO'
      },
      {
        label: 'd',
        question_text: 'Tentukan identitas unsur M sesungguhnya di Periode 3 dan tuliskan konfigurasi elektron lengkapnya!',
        points: 3,
        rubric: 'Identitas: Magnesium (12Mg) (1.5 poin); Konfigurasi: 1s2 2s2 2p6 3s2 (1.5 poin).',
        expected_answer: 'Unsur M adalah Magnesium (12Mg), konfigurasi 1s2 2s2 2p6 3s2'
      }
    ],
    expected_final_answer: 'Lonjakan IE2->IE3; Golongan IIA; Rumus MCl2 dan MO; Unsur Magnesium (12Mg)',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a):**
   - Kenaikan $IE_1 \\rightarrow IE_2$: $1.451 - 738 = 713\\text{ kJ/mol}$ (kenaikan wajar sekitar 2 kali).
   - Kenaikan $IE_2 \\rightarrow IE_3$: $7.733 - 1.451 = 6.282\\text{ kJ/mol}$ (lonjakan drastis lebih dari **5.3 kali lipat**).
   - **Alasan:** Elektron ke-1 dan ke-2 berada pada kulit valensi terluar ($n = 3$). Ketika 2 elektron tersebut dilepaskan, kulit terluar menjadi kosong dan ion yang terbentuk memiliki konfigurasi oktet gas mulia yang sangat stabil. Pelepasan elektron ke-3 memerlukan energi sangat besar karena harus membongkar kulit bagian dalam ($n = 2$) yang jaraknya jauh lebih dekat ke inti.

2. **Sub-soal (b):**
   - Karena hanya 2 elektron yang mudah dilepaskan sebelum lonjakan, maka **jumlah elektron valensi $= 2$**.
   - Terletak pada **Golongan IIA (Logam Alkali Tanah)** atau Golongan 2.

3. **Sub-soal (c):**
   - Ion stabil unsur $M$ adalah kation divalen: $M^{2+}$.
   - Senyawa klorida dengan ion $\\ce{Cl-}$:
     $$M^{2+} + 2\\ce{Cl-} \\implies \\mathbf{M\\ce{Cl2}}$$
   - Senyawa oksida dengan ion oksida $\\ce{O^2-}$:
     $$M^{2+} + \\ce{O^2-} \\implies \\mathbf{MO}$$

4. **Sub-soal (d):**
   - Unsur Golongan IIA pada Periode 3 adalah **Magnesium ($_{12}\\ce{Mg}$)**.
   - Konfigurasi elektron lengkap:
     $$1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\quad \\text{atau}\\quad [\\ce{Ne}]\\, 3s^2$$`,
    solution_framework_template: `1. Analisis Perubahan Nilai IE Bertingkat:
• Rasio kenaikan IE2/IE1: ....
• Rasio lonjakan IE3/IE2: ....
• Lokasi lonjakan drastis: ....

2. Penentuan Elektron Valensi & Golongan:
• Jumlah elektron sebelum lonjakan: ....
• Golongan unsur: ....

3. Pembentukan Rumus Senyawa:
• Muatan kation stabil M: ....
• Rumus garam klorida: ....
• Rumus oksida biner: ....

4. Identifikasi Unsur:
• Unsur Periode 3 Golongan IIA: ....
• Konfigurasi elektron subkulit: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['energi-ionisasi-bertingkat', 'magnesium', 'elektron-valensi', 'rumus-senyawa'],
  },
  {
    id: 222,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Analisis Teoretis Anomali Energi Ionisasi N dan O',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Pemodelan Mekanika Kuantum terhadap Anomali Energi Ionisasi Nitrogen dan Oksigen',
    question_text: `Data eksperimen menunjukkan:
- Energi ionisasi pertama $_{7}\\ce{N} = 1402\\text{ kJ/mol}$
- Energi ionisasi pertama $_{8}\\ce{O} = 1314\\text{ kJ/mol}$

Meskipun nomor atom oksigen lebih besar dari nitrogen, energi ionisasi pertama oksigen justru lebih rendah.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan konfigurasi elektron subkulit dan gambarkan diagram orbital subkulit 2p untuk atom 7N dan 8O pada keadaan dasar!',
        points: 4,
        rubric: 'Konfigurasi 7N: 1s2 2s2 2p3 dan diagram 3 orbital setengah penuh (2 poin); Konfigurasi 8O: 1s2 2s2 2p4 dan diagram 1 pasang + 2 tunggal (2 poin).',
        expected_answer: 'N: 2p3 [↑][↑][↑]; O: 2p4 [↑↓][↑][↑]'
      },
      {
        label: 'b',
        question_text: 'Jelaskan konsep energi pertukaran (exchange energy) dan simetri bola pada kestabilan konfigurasi elektron nitrogen!',
        points: 3,
        rubric: 'Penjelasan bahwa konfigurasi 2p3 memiliki elektron ber-spin sejajar dengan energi pertukaran maksimum dan simetri bola yang meminimalkan energi potensial (3 poin).',
        expected_answer: 'Konfigurasi 2p3 memiliki spin paralel maksimum dengan energi pertukaran stabil dan simetri bola ruang yang seimbang.'
      },
      {
        label: 'c',
        question_text: 'Jelaskan mengapa keberadaan pasangan elektron sekamar pada orbital 2p oksigen menyebabkan elektron tersebut lebih mudah dilepaskan!',
        points: 3,
        rubric: 'Penjelasan fenomena tolakan elektrostatik antarelektron sekamar (electron-pairing repulsion) yang menaikkan energi potensial orbital sehingga elektron lebih labil/mudah lepas (3 poin).',
        expected_answer: 'Dua elektron dalam satu orbital mengalami tolakan elektrostatik (pairing repulsion) yang menaikkan energi elektron dan mempermudah ionisasi.'
      }
    ],
    expected_final_answer: 'N (2p3) stabil setengah penuh; O (2p4) mengalami tolakan pasangan elektron sekamar',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a):**
   - Nitrogen ($_{7}\\ce{N}$): $1s^2\\, 2s^2\\, 2p^3$
     Orbital $2p$: $[\\uparrow][\\uparrow][\\uparrow]$ (3 orbital terisi masing-masing 1 elektron).
   - Oksigen ($_{8}\\ce{O}$): $1s^2\\, 2s^2\\, 2p^4$
     Orbital $2p$: $[\\uparrow\\downarrow][\\uparrow][\\uparrow]$ (1 orbital berisi 2 elektron berpasangan, 2 orbital berisi elektron tunggal).

2. **Sub-soal (b):**
   - Pada nitrogen, ketiga elektron subkulit $2p$ memiliki spin paralel yang identik. Kondisi ini memungkinkan terjadinya pertukaran posisi kuantum antar elektron yang menghasilkan nilai **energi pertukaran (*exchange energy*)** maksimum.
   - Selain itu, distribusi muatan elektron menyebar secara simetris ke sumbu $x, y, z$ (simetri bola) yang meminimalkan tolakan elektrostatik internal, sehingga atom nitrogen berada pada tingkat energi yang sangat rendah (stabil).

3. **Sub-soal (c):**
   - Pada oksigen, elektron keempat terpaksa menempati salah satu orbital $2p$ yang telah terisi elektron lain ($2p_x$).
   - Dua elektron yang berbagi satu ruang orbital yang sama mengalami gaya tolak-menolak Coulombik (*electron pairing repulsion*).
   - Tolakan antarelektron sekamar ini menaikkan energi orbital tersebut, sehingga energi yang diperlukan untuk mencabut elektron keempat pada oksigen menjadi lebih kecil daripada energi untuk mencabut elektron pada nitrogen.`,
    solution_framework_template: `1. Diagram Orbital Subkulit Valensi:
• Konfigurasi orbital 2p Nitrogen: ....
• Konfigurasi orbital 2p Oksigen: ....

2. Analisis Kestabilan Subkulit Setengah Penuh:
• Karakteristik konfigurasi 2p3: ....
• Peran energi pertukaran (exchange energy): ....

3. Analisis Tolakan Pasangan Elektron (Pairing Energy):
• Interaksi elektron pada orbital 2px oksigen: ....
• Efek tolakan Coulomb terhadap kemudahan ionisasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['anomali-energi-ionisasi', 'nitrogen-oksigen', 'diagram-orbital', 'energi-pertukaran'],
  },
  {
    id: 223,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Analisis Kuantitatif Deret Isoelektronik 10 Elektron',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Muatan Inti Efektif dan Urutan Jari-Jari Spesi Isoelektronik',
    question_text: `Perhatikan deret empat spesi isoelektronik berikut:
$$\\ce{O^2-},\\quad \\ce{F-},\\quad \\ce{Na+},\\quad \\ce{Mg^2+}$$

Semua spesi tersebut memiliki total 10 elektron dengan konfigurasi elektron yang identik ($1s^2\\, 2s^2\\, 2p^6$).`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tuliskan jumlah proton (Z) dan rasio muatan inti terhadap jumlah elektron (Z/e) untuk masing-masing spesi!',
        points: 4,
        rubric: 'O2- (Z=8, Z/e=0.8); F- (Z=9, Z/e=0.9); Na+ (Z=11, Z/e=1.1); Mg2+ (Z=12, Z/e=1.2). Masing-masing 1 poin.',
        expected_answer: 'O2-: Z=8, 0.8; F-: Z=9, 0.9; Na+: Z=11, 1.1; Mg2+: Z=12, 1.2'
      },
      {
        label: 'b',
        question_text: 'Susunlah keempat spesi tersebut berdasarkan penurunan ukuran jari-jarinya (dari yang paling besar ke yang paling kecil)!',
        points: 3,
        rubric: 'Urutan: O2- > F- > Na+ > Mg2+ (3 poin).',
        expected_answer: 'O2- > F- > Na+ > Mg2+'
      },
      {
        label: 'c',
        question_text: 'Jelaskan secara teoritis mengapa ion Mg2+ memiliki jari-jari terkecil meskipun memiliki nomor atom terbesar!',
        points: 3,
        rubric: 'Penjelasan bahwa muatan inti +12 menarik 10 elektron paling kuat sehingga awan elektron ditarik paling rapat ke inti (3 poin).',
        expected_answer: 'Mg2+ memiliki 12 proton yang menarik 10 elektron dengan tarikan elektrostatik terbesar, mengontraksi awan elektron.'
      }
    ],
    expected_final_answer: 'Z/e: O2-(0.8), F-(0.9), Na+(1.1), Mg2+(1.2); Urutan jari-jari: O2- > F- > Na+ > Mg2+',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a):**
   Semua spesi memiliki jumlah elektron $e = 10$.
   - $\\ce{O^2-} \\implies Z = 8$, rasio $Z/e = 8/10 = 0.80$
   - $\\ce{F-} \\implies Z = 9$, rasio $Z/e = 9/10 = 0.90$
   - $\\ce{Na+} \\implies Z = 11$, rasio $Z/e = 11/10 = 1.10$
   - $\\ce{Mg^2+} \\implies Z = 12$, rasio $Z/e = 12/10 = 1.20$

2. **Sub-soal (b):**
   - **Urutan penurunan jari-jari (terbesar ke terkecil):**
     $$\\ce{O^2-} > \\ce{F-} > \\ce{Na+} > \\ce{Mg^2+}$$

3. **Sub-soal (c):**
   - Meskipun semua spesi memiliki jumlah kulit elektron yang sama ($n = 2$), ion $\\ce{Mg^2+}$ memiliki **12 proton** di dalam intinya.
   - Rasio muatan positif inti terhadap elektron adalah yang tertinggi ($1.20$), menghasilkan gaya tarik elektrostatik inti netto (*effective nuclear charge*) yang paling kuat. Akibatnya, seluruh awan elektron terluar tertarik lebih dekat ke inti, menyebabkan ukuran ion $\\ce{Mg^2+}$ paling kecil.`,
    solution_framework_template: `1. Tabulasi Parameter Isoelektronik:
• Jumlah proton (Z) tiap spesi: ....
• Jumlah elektron (e) tiap spesi: ....
• Perhitungan rasio Z/e: ....

2. Penentuan Urutan Ukuran Jari-Jari:
• Hubungan nilai rasio Z/e dengan kontraksi jari-jari: ....
• Urutan dari terbesar ke terkecil: ....

3. Penjelasan Dinamika Gaya Inti:
• Analisis gaya elektrostatik Coulomb inti Mg2+: ....
• Kesimpulan penyusutan jari-jari kation bivalen: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['spesi-isoelektronik', 'jari-jari-ion', 'muatan-inti-efektif', 'sifat-periodik'],
  },
  {
    id: 224,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Interpretasi Sifat Keperiodikan dan Sifat Oksida Unsur',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Identifikasi Sifat Asam-Basa Oksida dan Daya Reduksi Unsur Hipotesis Satu Periode',
    question_text: `Diberikan empat unsur hipotesis $A, B, C,$ dan $D$ yang terletak pada Periode 3 tabel periodik. Karakteristik dari keempat unsur tersebut diuraikan sebagai berikut:
1. Oksida dari unsur $A$ jika dilarutkan ke dalam air menghasilkan larutan yang mengubah lakmus merah menjadi biru.
2. Unsur $B$ dapat bereaksi baik dengan larutan asam kuat maupun basa kuat menghasilkan gas hidrogen (bersifat amfoter).
3. Oksida dari unsur $C$ dalam air menghasilkan asam kuat yang banyak digunakan dalam industri pupuk dan aki.
4. Unsur $D$ memiliki energi ionisasi pertama tertinggi di antara keempat unsur tersebut dan bereaksi hebat dengan logam membentuk garam halida.`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Berdasarkan sifat-sifat tersebut, identifikasi identitas unsur A, B, C, dan D yang sesungguhnya di Periode 3!',
        points: 4,
        rubric: 'A = Natrium/Magnesium (1 poin); B = Aluminium (1 poin); C = Belerang (1 poin); D = Klorin (1 poin).',
        expected_answer: 'A = Na (atau Mg), B = Al, C = S, D = Cl'
      },
      {
        label: 'b',
        question_text: 'Urutkan keempat unsur tersebut dari kiri ke kanan dalam tabel periodik!',
        points: 4,
        rubric: 'Urutan: A -> B -> C -> D (atau Na -> Al -> S -> Cl) (4 poin).',
        expected_answer: 'A - B - C - D (Na - Al - S - Cl)'
      },
      {
        label: 'c',
        question_text: 'Bandingkan daya pereduksi (reduktor) unsur A dan unsur D, serta jelaskan hubungannya dengan kemudahan melepaskan elektron!',
        points: 4,
        rubric: 'Unsur A adalah reduktor jauh lebih kuat daripada D (2 poin); Penjelasan bahwa A mudah melepas elektron (energi ionisasi rendah) sedangkan D cenderung menarik elektron (2 poin).',
        expected_answer: 'A adalah reduktor kuat karena memiliki jari-jari besar dan energi ionisasi rendah sehingga sangat mudah melepaskan elektron.'
      }
    ],
    expected_final_answer: 'A: Na, B: Al, C: S, D: Cl; Urutan SPU: A - B - C - D; Reduktor: A > D',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Identifikasi Unsur Periode 3**
   - **Unsur $A$:** Membentuk oksida basa (mengubah lakmus merah menjadi biru) $\\implies$ Logam alkali/alkali tanah, yaitu **Natrium ($\\ce{Na}$)** atau Magnesium ($\\ce{Mg}$).
   - **Unsur $B$:** Bersifat amfoter (bereaksi dengan asam dan basa) $\\implies$ **Aluminium ($\\ce{Al}$)**.
   - **Unsur $C$:** Membentuk asam kuat (asam sulfat $\\ce{H2SO4}$) $\\implies$ **Belerang ($\\ce{S}$)**.
   - **Unsur $D$:** Memiliki $IE_1$ tertinggi di antara keempatnya dan membentuk garam halida $\\implies$ **Klorin ($\\ce{Cl}$)**.

2. **Sub-soal (b): Urutan Letak di Periode 3**
   Dalam satu periode, sifat logam berangsur-angsur berubah menjadi metaloid lalu nonlogam:
   $$\\mathbf{A\\,(\\text{Logam Basa}) \\longrightarrow B\\,(\\text{Amfoter}) \\longrightarrow C\\,(\\text{Nonlogam Asam}) \\longrightarrow D\\,(\\text{Halogen})}$$
   Urutan nomor atom: $A (Z=11) < B (Z=13) < C (Z=16) < D (Z=17)$.

3. **Sub-soal (c): Daya Pereduksi (Reduktor)**
   - **Daya Reduktor:** Kemampuan suatu zat untuk mereduksi spesi lain dengan cara dirinya sendiri mengalami oksidasi (melepaskan elektron).
   - Unsur $A$ (Natrium) memiliki jari-jari atom paling besar dan energi ionisasi terendah, sehingga **sangat mudah melepaskan elektron** $\\implies$ Merupakan **reduktor kuat**.
   - Sebaliknya, unsur $D$ (Klorin) memiliki keelektronegatifan tinggi dan afinitas elektron besar, sehingga sangat cenderung **menarik elektron** (bersifat oksidator kuat, bukan reduktor).
   - Jadi, daya reduktor: **$A \\gg D$**.`,
    solution_framework_template: `1. Analisis Sifat Oksida Periode 3:
• Identifikasi oksida basa (A): ....
• Identifikasi oksida amfoter (B): ....
• Identifikasi oksida asam kuat (C): ....
• Identifikasi pembentuk garam halida (D): ....

2. Rekonstruksi Urutan Periode 3:
• Urutan dari kiri ke kanan (logam -> amfoter -> nonlogam): ....

3. Analisis Daya Reduktor:
• Definisi daya pereduksi vs energi ionisasi: ....
• Perbandingan daya reduksi A vs D: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['periode-3', 'sifat-oksida', 'amfoter', 'daya-reduktor', 'sifat-periodik'],
  },
  {
    id: 225,
    sma_topic_number: 2,
    sma_topic_id: 102,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Evaluasi Keadaan Dasar, Eksitasi, dan Terlarang',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Keadaan Dasar, Eksitasi, dan Larangan Mekanika Kuantum pada Atom Karbon',
    question_text: `Diberikan empat skema konfigurasi elektron untuk atom karbon ($Z = 6$):
1. $1s^2\\, 2s^2\\, 2p_x^1\\, 2p_y^1$
2. $1s^2\\, 2s^1\\, 2p_x^1\\, 2p_y^1\\, 2p_z^1$
3. $1s^2\\, 2s^2\\, 2p_x^2$
4. $1s^2\\, 2s^3\\, 2p_x^1$`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Tentukan konfigurasi mana yang merupakan keadaan dasar (ground state) dan jelaskan aturan mekanika kuantum yang mendasarinya!',
        points: 4,
        rubric: 'Konfigurasi (1) adalah ground state (2 poin); Penjelasan kepatuhan terhadap prinsip Aufbau dan Aturan Hund (2 poin).',
        expected_answer: 'Konfigurasi (1) adalah keadaan dasar karena memenuhi prinsip Aufbau dan aturan Hund secara sempurna.'
      },
      {
        label: 'b',
        question_text: 'Tentukan konfigurasi mana yang merupakan keadaan tereksitasi (excited state) dan jelaskan proses transisi elektron yang terjadi!',
        points: 4,
        rubric: 'Konfigurasi (2) adalah excited state (2 poin); Penjelasan promosi satu elektron dari orbital 2s ke 2pz akibat penyerapan energi (2 poin).',
        expected_answer: 'Konfigurasi (2) adalah keadaan tereksitasi karena satu elektron 2s menyerap energi dan berpindah ke orbital 2p.'
      },
      {
        label: 'c',
        question_text: 'Tentukan konfigurasi mana yang merupakan keadaan terlarang (forbidden state / tidak mungkin terjadi) dan sebutkan hukum fisika kuantum yang dilanggar!',
        points: 4,
        rubric: 'Konfigurasi (4) adalah terlarang (2 poin); Pelanggaran Prinsip Larangan Pauli karena subkulit 2s terisi 3 elektron (maksimal 2 elektron) (2 poin).',
        expected_answer: 'Konfigurasi (4) adalah keadaan terlarang karena melanggar Asas Larangan Pauli (orbital s maksimal dihuni 2 elektron).'
      }
    ],
    expected_final_answer: '(1) Ground State; (2) Excited State; (4) Terlarang (Melanggar Larangan Pauli)',
    solution_rubric: `**Kunci dan Rubrik Penilaian:**

1. **Sub-soal (a): Keadaan Dasar (*Ground State*)**
   - **Konfigurasi (1):** $1s^2\\, 2s^2\\, 2p_x^1\\, 2p_y^1$.
   - **Alasan:** Elektron menempati orbital dengan tingkat energi terendah sesuai **Prinsip Aufbau** ($1s \\rightarrow 2s \\rightarrow 2p$), dan pada subkulit $2p$, elektron menempati orbital yang berbeda dengan spin paralel sesuai **Aturan Hund**.

2. **Sub-soal (b): Keadaan Tereksitasi (*Excited State*)**
   - **Konfigurasi (2):** $1s^2\\, 2s^1\\, 2p_x^1\\, 2p_y^1\\, 2p_z^1$.
   - **Alasan:** Satu elektron dari orbital $2s$ menyerap foton energi dan dipromosikan ke orbital $2p_z$ yang tingkat energinya lebih tinggi. Total elektron tetap 6 dan tidak melanggar larangan Pauli, konfigurasi ini sering terjadi pada hibridisasi $sp^3$ atom karbon.
   *(Catatan: Konfigurasi 3 juga merupakan keadaan tereksitasi dari segi aturan Hund karena memaksakan 2 elektron berpasangan di 2px sementara 2py masih kosong).*

3. **Sub-soal (c): Keadaan Terlarang (*Forbidden State*)**
   - **Konfigurasi (4):** $1s^2\\, 2s^3\\, 2p_x^1$.
   - **Alasan:** Subkulit $2s$ hanya memiliki 1 orbital dengan kapasitas maksimum **2 elektron** (dengan spin berlawanan, $m_s = +1/2$ dan $-1/2$). Jika orbital $2s$ diisi 3 elektron, pasti terdapat minimal dua elektron yang memiliki keempat bilangan kuantum ($n, l, m_l, m_s$) yang identik. Ini secara mutlak **melanggar Asas Larangan Pauli** (*Pauli Exclusion Principle*), sehingga keadaan ini mustahil ada di alam.`,
    solution_framework_template: `1. Identifikasi Keadaan Dasar (Ground State):
• Pengecekan prinsip Aufbau: ....
• Pengecekan aturan Hund: ....
• Kesimpulan nomor konfigurasi dasar: ....

2. Identifikasi Keadaan Tereksitasi (Excited State):
• Pengecekan promosi elektron antar tingkat energi: ....
• Kestabilan energi konfigurasi (2): ....

3. Analisis Keadaan Terlarang (Forbidden State):
• Pengecekan kapasitas maksimum tiap orbital: ....
• Pelanggaran Asas Larangan Pauli pada konfigurasi (4): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 12,
    year: 2024,
    source_event: 'Persiapan OSK / UTBK-SNBT Kimia SMA',
    tags: ['keadaan-dasar-eksitasi', 'larangan-pauli', 'aturan-hund', 'prinsip-aufbau', 'struktur-atom'],
  },
];

// Gabungkan Batch 1 (Topik 1), Batch 2 (Topik 2), Batch 3 (Topik 3), dan Batch 4 (Topik 4) ke dalam bank soal SMA
export const SMA_CHEMISTRY_QUESTIONS: Question[] = [
  ...SMA_TOPIC_1_QUESTIONS,
  ...SMA_TOPIC_2_QUESTIONS,
  ...SMA_TOPIC_3_QUESTIONS,
  ...SMA_TOPIC_4_QUESTIONS,
];

export { SMA_TOPIC_2_QUESTIONS, SMA_TOPIC_3_QUESTIONS, SMA_TOPIC_4_QUESTIONS };

