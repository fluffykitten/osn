/**
 * smaQuestionsTopic15Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F)
 * 
 * BATCH 15: Kimia Unsur Golongan Utama & Transisi Periode 4
 * Topik 15 SMA | Modul ID 115 | OSN Pilar 8 (Kimia Anorganik Deskriptif & Kimia Unsur)
 * 
 * Distribusi:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian Terstruktur)  [ID 115001 - 115025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 115001 - 115025]
 * - 40% Sulit  (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 115001 - 115025]
 * Total: 25 Butir Soal Terstandarisasi (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_15_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 115001 - 115025)
  // =========================================================================
  {
    id: 115001,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Spektroskopi Uji Nyala Logam Alkali & Alkali Tanah',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Kation Logam melalui Warna Nyala Api Spektroskopi Emisi',
    question_text: `Seorang siswa melakukan uji nyala api bunsen terhadap beberapa sampel garam klorida yang berbeda ($P, Q, R, S, T$). Hasil pengamatan warna nyala api yang teramati adalah:
- Sampel $P$: Kuning emas terang ($\sim 589\\text{ nm}$)
- Sampel $Q$: Ungu muda (*lilac*) yang tampak jelas melalui kaca kobalt biru
- Sampel $R$: Merah bata / jingga
- Sampel $S$: Hijau apel segar
- Sampel $T$: Merah tua / karmin cemerlang

Berdasarkan data emisi spektral deeksitasi elektron tersebut, kation logam yang terkandung di dalam sampel $P$, $Q$, dan $S$ berturut-turut adalah ....

A. $\\ce{Na+}, \\ce{K+}, \\ce{Ba^2+}$  
B. $\\ce{Li+}, \\ce{Na+}, \\ce{Ca^2+}$  
C. $\\ce{K+}, \\ce{Na+}, \\ce{Ba^2+}$  
D. $\\ce{Na+}, \\ce{Ca^2+}, \\ce{Sr^2+}$  
E. $\\ce{Li+}, \\ce{K+}, \\ce{Cu^2+}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Uji Nyala (Spektroskopi Emisi Kuantum):**
   Energi panas api bunsen mengeksitasi elektron valensi kation logam ke orbital berenergi lebih tinggi. Ketika elektron kembali turun (*deeksitasi*) ke tingkat energi dasar, foton cahaya tampak dipancarkan dengan panjang gelombang spesifik:
   $$\\Delta E = h\\nu = \\frac{hc}{\\lambda}$$
2. **Karakteristik Warna Nyala Kation Logam:**
   - **Natrium ($\\ce{Na+}$):** Kuning emas terang ($589{,}0\\text{ nm}$ dan $589{,}6\\text{ nm}$ - garis kembar doublet D) $\\implies$ Sampel $P$.
   - **Kalium ($\\ce{K+}$):** Ungu muda / *lilac* ($\sim 766\\text{ nm}$), sering diamati menggunakan kaca kobalt biru untuk menyerap emisi pengotor natrium $\\implies$ Sampel $Q$.
   - **Barium ($\\ce{Ba^2+}$):** Hijau apel segar ($\sim 524\\text{ nm}$) $\\implies$ Sampel $S$.
   - **Kalsium ($\\ce{Ca^2+}$):** Merah bata / jingga ($\sim 622\\text{ nm}$) $\\implies$ Sampel $R$.
   - **Litium ($\\ce{Li+}$):** Merah tua / karmin ($\sim 671\\text{ nm}$) $\\implies$ Sampel $T$.

Dengan demikian, kation dalam sampel $P$, $Q$, dan $S$ berturut-turut adalah $\\ce{Na+}, \\ce{K+}, \\ce{Ba^2+}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Formatif Kimia SMA Fase F',
    tags: ['uji-nyala', 'spektroskopi-emisi', 'logam-alkali', 'alkali-tanah', 'warna-nyala'],
  },
  {
    id: 115002,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Anomali Konfigurasi Elektron Orbital d',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Konfigurasi Elektron Keadaan Dasar Stabil Kromium dan Tembaga',
    question_text: `Berdasarkan Prinsip Aufbau baku, pengisian elektron diharapkan mengisi subkulit $4s$ hingga penuh ($4s^2$) sebelum mengisi subkulit $3d$. Namun, atom kromium ($_{24}\\ce{Cr}$) dan atom tembaga ($_{29}\\ce{Cu}$) menunjukkan anomali konfigurasi elektron pada keadaan dasarnya (*ground state*).

Konfigurasi elektron keadaan dasar yang benar untuk $_{24}\\ce{Cr}$ dan $_{29}\\ce{Cu}$ serta alasan fisikanya adalah ....

A. $\\ce{Cr}: [\\ce{Ar}] 4s^2 3d^4$ dan $\\ce{Cu}: [\\ce{Ar}] 4s^2 3d^9$, karena orbital $4s$ memiliki tingkat energi yang lebih rendah daripada $3d$  
B. $\\ce{Cr}: [\\ce{Ar}] 4s^1 3d^5$ dan $\\ce{Cu}: [\\ce{Ar}] 4s^1 3d^{10}$, karena orbital $3d$ yang terisi setengah penuh atau penuh memiliki kestabilan ekstra akibat simetri bola dan energi pertukaran maksimum  
C. $\\ce{Cr}: [\\ce{Ar}] 3d^6$ dan $\\ce{Cu}: [\\ce{Ar}] 3d^{11}$, karena elektron dari orbital $4s$ tereksitasi seluruhnya ke orbital $3d$  
D. $\\ce{Cr}: [\\ce{Ar}] 4s^0 3d^6$ dan $\\ce{Cu}: [\\ce{Ar}] 4s^0 3d^{11}$, untuk meminimalkan tolakan pasangan elektron pada orbital $4s$  
E. $\\ce{Cr}: [\\ce{Ar}] 4s^1 3d^5$ dan $\\ce{Cu}: [\\ce{Ar}] 4s^2 3d^9$, karena hanya orbital setengah penuh yang memberikan kestabilan tambahan`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Kestabilan Subkulit Setengah Penuh ($d^5$) dan Penuh ($d^{10}$):**
   - Pada unsur transisi periode 4, selisih energi antara orbital $4s$ dan $3d$ sangatlah kecil.
   - Konfigurasi elektron subkulit yang terisi setengah penuh ($d^5$) atau terisi penuh ($d^{10}$) memiliki simetri distribusi kerapatan elektron berbentuk bola sempurna (*spherical symmetry*).
   - Selain itu, elektron-elektron dengan spin sejajar pada orbital terdegenerasi menghasilkan jumlah pasangan energi pertukaran (*exchange energy*) maksimum, yang menurunkan energi sistem secara keseluruhan.
2. **Kromium ($Z = 24$):**
   - Prediksi Aufbau: $[\\ce{Ar}] 4s^2 3d^4$ (kurang stabil).
   - Konfigurasi riil keadaan dasar: **$[\\ce{Ar}] 4s^1 3d^5$** (subkulit $3d$ stabil setengah penuh).
3. **Tembaga ($Z = 29$):**
   - Prediksi Aufbau: $[\\ce{Ar}] 4s^2 3d^9$ (kurang stabil).
   - Konfigurasi riil keadaan dasar: **$[\\ce{Ar}] 4s^1 3d^{10}$** (subkulit $3d$ stabil penuh).

Oleh karena itu, opsi B adalah pernyataan yang paling tepat.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Fase F',
    tags: ['konfigurasi-elektron', 'orbital-d', 'aturan-setengah-penuh', 'kromium', 'tembaga'],
  },
  {
    id: 115003,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Tren Kelarutan Senyawa Logam Alkali Tanah',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Analisis Tren Kelarutan Garam Sulfat dan Hidroksida Golongan IIA',
    question_text: `Diberikan data tren kelarutan senyawa logam alkali tanah (Golongan IIA: $\\ce{Mg, Ca, Sr, Ba}$) dalam air pada suhu $25^\\circ\\text{C}$:
1. Kelarutan senyawa hidroksida $\\ce{M(OH)2}$ semakin meningkat dari $\\ce{Mg(OH)2}$ ke $\\ce{Ba(OH)2}$.
2. Kelarutan senyawa sulfat $\\ce{MSO4}$ semakin menurun drastis dari $\\ce{MgSO4}$ ke $\\ce{BaSO4}$.

Pernyataan berikut yang TEPAT mengenai aplikasi praktis dan interpretasi tren tersebut adalah ....

A. $\\ce{Ba(OH)2}$ merupakan suspensi sukar larut yang aman diminum sebagai antasida obat maag  
B. $\\ce{MgSO4}$ sangat sukar larut dalam air sehingga mengendap sebagai gips pembalut tulang patah  
C. $\\ce{BaSO4}$ sangat sukar larut dalam air ($K_{sp} \\approx 1{,}1 \\times 10^{-10}$) sehingga digunakan sebagai bubur kontras radiologi sinar-X usus karena tidak melepaskan ion $\\ce{Ba^2+}$ beracun ke dalam tubuh  
D. $\\ce{Ca(OH)2}$ lebih mudah larut daripada $\\ce{Ba(OH)2}$ karena jari-jari kation $\\ce{Ca^2+}$ lebih kecil  
E. Penambahan larutan natrium sulfat ke dalam larutan magnesium sulfat encer akan langsung menghasilkan endapan putih pekat`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Tren Kelarutan Golongan IIA:**
   - **Hidroksida ($\\ce{M(OH)2}$):** Semakin ke bawah (jari-jari kation membesar), energi kisi berkurang jauh lebih cepat daripada energi hidrasi, sehingga kelarutan **MENINGKAT**:
     $$\\ce{Mg(OH)2 < Ca(OH)2 < Sr(OH)2 < Ba(OH)2}$$
     $\\ce{Mg(OH)2}$ sukar larut (suspensi obat maag / *milk of magnesia*), sedangkan $\\ce{Ba(OH)2}$ larut sangat baik dan merupakan basa kuat.
   - **Sulfat ($\\ce{MSO4}$):** Karena ion sulfat $\\ce{SO4^2-}$ berukuran besar, energi hidrasi kation menurun lebih dominan daripada energi kisi, sehingga kelarutan **MENURUN DRASTIS**:
     $$\\ce{MgSO4 > CaSO4 > SrSO4 > BaSO4}$$
     $\\ce{MgSO4}$ (garam Inggris) sangat mudah larut, sedangkan $\\ce{BaSO4}$ sangat sukar larut (mengendap putih pekat).
2. **Aplikasi Medis $\\ce{BaSO4}$:**
   - Logam barium dalam bentuk ion bebas $\\ce{Ba^2+}$ sangat beracun bagi sistem saraf dan jantung.
   - Namun, karena $\\ce{BaSO4}$ memiliki nilai $K_{sp}$ yang luar biasa kecil ($1{,}1 \\times 10^{-10}$), konsentrasi ion $\\ce{Ba^2+}$ yang terlepas dalam lambung sangat tidak signifikan dan aman diminum sebagai agen kontras sinar-X (*barium meal*) untuk mencitrakan saluran cerna (barium menahan radiasi sinar-X). (Pilihan C benar).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['kelarutan-alkali-tanah', 'tren-ksp', 'barium-sulfat', 'kontras-radiologi', 'hidroksida-iia'],
  },
  {
    id: 115004,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Reaktivitas Logam Alkali dengan Air & Sifat Kebasaan',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Karakteristik Reaksi Eksotermik Logam Natrium dengan Air',
    question_text: `Sepotong kecil logam natrium dimasukkan ke dalam gelas kimia berisi air murni yang telah ditetesi indikator fenolftalein (PP). Seketika logam natrium bergerak lincah di permukaan air, meleleh membentuk bulatan keperakan, mengeluarkan letupan gas, dan larutan di sekitarnya berubah warna menjadi merah muda keunguan.

Jawablah pertanyaan berikut terkait fenomena tersebut:`,
    expected_final_answer: 'a) Reaksi: 2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g). Larutan berubah merah muda karena terbentuk ion hidroksida OH- (basa kuat NaOH) yang mengubah trayek fenolftalein (pH > 8,3); b) Logam alkali disimpan dalam minyak tanah/parafin murni untuk mencegah kontak langsung dengan oksigen dan uap air di udara. Kereaktifan meningkat dari Li ke Cs karena jari-jari atom membesar, energi ionisasi berkurang, sehingga elektron valensi 1s/2s semakin mudah dilepaskan.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan persamaan reaksi setara lengkap dengan wujud zat:
     2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g) (1.5 poin).
  2. Menjelaskan alasan perubahan warna indikator PP menjadi merah muda akibat pembentukan larutan basa kuat natrium hidroksida yang melepaskan ion OH- (pH > 8.3) (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan fungsi penyimpanan logam alkali dalam minyak tanah/parafin murni untuk mengisolasi logam dari paparan uap air dan oksigen atmosfer yang dapat memicu kebakaran spontan (1.0 poin).
  2. Menjelaskan peningkatan kereaktifan dari Li ke Cs berdasarkan tren kenaikan jari-jari atom, efek perisaian elektron dalam, penurunan energi ionisasi pertama, dan kemudahan pelepasan elektron valensi terluar (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi kimia yang setara antara logam natrium dengan air lengkap dengan wujud zatnya, serta jelaskan mengapa larutan berubah warna menjadi merah muda!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi 2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g) (1.5 poin) dan menjelaskan pembentukan basa kuat NaOH (OH-) yang memicu warna merah muda indikator PP (1.0 poin).',
        expected_answer: '2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g); warna merah muda timbul karena pembentukan basa NaOH yang meningkatkan pH larutan.',
      },
      {
        label: 'b',
        question_text: `Jelaskan mengapa logam alkali harus disimpan terendam di dalam minyak tanah (*kerosene*), dan mengapa kereaktifan logam alkali terhadap air semakin dahsyat dari litium ke sesium!`,
        points: 2.5,
        rubric: 'Menjelaskan fungsi minyak tanah sebagai pelindung dari uap air/oksigen (1.0 poin) dan menghubungkan kenaikan reaktivitas dengan pembesaran jari-jari atom serta penurunan energi ionisasi (1.5 poin).',
        expected_answer: 'Disimpan dalam minyak tanah agar tidak bereaksi spontan dengan udara lembap; reaktivitas naik dari Li ke Cs karena jari-jari atom membesar dan energi ionisasi menurun drastis.',
      },
    ],
    solution_framework_template: `1. Persamaan Reaksi dan Perubahan Warna Indikator:
• Persamaan reaksi setara redoks natrium dengan air: ....
• Identifikasi gas yang dihasilkan: ....
• Alasan perubahan warna indikator fenolftalein (spesi basa pembawa pH): ....

2. Penyimpanan dan Tren Kereaktifan Golongan IA:
• Alasan fisik penyimpanan dalam medium hidrokarbon inert (minyak tanah): ....
• Pengaruh pertambahan kulit elektron terhadap jari-jari atom dan tarikan inti: ....
• Korelasi energi ionisasi pertama terhadap kemudahan oksidasi dari Li ke Cs: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Kinerja Praktikum Kimia SMA Fase F',
    tags: ['logam-alkali', 'reaksi-air', 'natrium-hidroksida', 'energi-ionisasi', 'fenolftalein'],
  },
  {
    id: 115005,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Sifat Amfoter Aluminium Hidroksida',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Perilaku Amfoter Endapan Al(OH)3 dalam Larutan Asam dan Basa Kuat',
    question_text: `Aluminium hidroksida ($\\ce{Al(OH)3}$) merupakan endapan gelatin putih yang memperlihatkan fenomena amfoterisme, yaitu kemampuan bertindak sebagai basa dalam medium asam dan bertindak sebagai asam dalam medium basa kuat.

Jawablah pertanyaan berikut terkait perilaku amfoter $\\ce{Al(OH)3}$ tersebut:`,
    expected_final_answer: 'a) Reaksi dalam asam: Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l) (atau Al(OH)3 + 3HCl -> AlCl3 + 3H2O). Spesi yang terbentuk adalah kation heksaaquaaluminium [Al(H2O)6]^3+ atau Al^3+ terhidrasi; b) Reaksi dalam basa: Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq) (atau Al(OH)3 + NaOH -> Na[Al(OH)4] / NaAlO2 + 2H2O). Nama ion kompleks: tetrahidroksoaluminat(III) atau ion aluminat.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan persamaan reaksi ionik bersih pelarutan Al(OH)3 dalam larutan asam kuat:
     Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l) (1.5 poin).
  2. Menyebutkan kation aluminium terhidrasi (Al^3+ atau [Al(H2O)6]^3+) yang larut jernih (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan persamaan reaksi ionik bersih pelarutan Al(OH)3 dalam larutan basa kuat berlebih:
     Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq) (1.5 poin).
  2. Menyebutkan nama ion kompleks yang terbentuk: ion tetrahidroksoaluminat(III) atau ion aluminat (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi ionik bersih saat endapan $\\ce{Al(OH)3}$ dilarutkan ke dalam larutan asam klorida ($\ce{HCl}$), serta sebutkan spesi ion aluminium yang terbentuk!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l) (1.5 poin) dan menyebutkan ion Al^3+ terhidrasi (1.0 poin).',
        expected_answer: 'Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l); spesi yang terbentuk adalah kation Al^3+ terhidrasi.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi ionik bersih saat endapan $\\ce{Al(OH)3}$ dilarutkan ke dalam larutan natrium hidroksida ($\ce{NaOH}$) berlebih hingga endapan larut kembali jernih, serta beri nama ion kompleks yang terbentuk!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq) (1.5 poin) dan menyebutkan nama ion tetrahidroksoaluminat(III) (1.0 poin).',
        expected_answer: 'Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq); ion kompleks yang terbentuk adalah tetrahidroksoaluminat(III).',
      },
    ],
    solution_framework_template: `1. Reaksi Pelarutan dalam Suasana Asam:
• Persamaan reaksi ionik bersih Al(OH)3 dengan ion hidronium H+: ....
• Peran Al(OH)3 sebagai akseptor proton / basa: ....
• Identifikasi kation produk larut: ....

2. Reaksi Pelarutan dalam Suasana Basa Kuat:
• Persamaan reaksi ionik pembentukan kompleks dengan ion hidroksida OH-: ....
• Peran Al(OH)3 sebagai asam Lewis: ....
• Tata nama IUPAC ion kompleks hasil reaksi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['amfoterisme', 'aluminium-hidroksida', 'kompleks-tetrahidroksoaluminat', 'periode-3', 'asam-basa-lewis'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 115001 - 115025)
  // =========================================================================
  {
    id: 115006,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Daya Pengoksidasi Halogen & Reaksi Pendesakan Halida',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Peramalan Kelangsungan Spontan Reaksi Pendesakan Antar-Halogen',
    question_text: `Diketahui data potensial reduksi standar deret halogen pada suhu $25^\\circ\\text{C}$:
$$\\ce{F2(g) + 2e- -> 2F-(aq)} \\quad E^\\circ = +2{,}87\\text{ V}$$
$$\\ce{Cl2(g) + 2e- -> 2Cl-(aq)} \\quad E^\\circ = +1{,}36\\text{ V}$$
$$\\ce{Br2(l) + 2e- -> 2Br-(aq)} \\quad E^\\circ = +1{,}07\\text{ V}$$
$$\\ce{I2(s) + 2e- -> 2I-(aq)} \\quad E^\\circ = +0{,}54\\text{ V}$$

Berdasarkan kaidah reaksi pendesakan halogen dan data termodinamika tersebut, campuran reaksi berikut yang **TIDAK DAPAT** berlangsung secara spontan adalah ....

A. Gas klorin dialirkan ke dalam larutan natrium bromida: $\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}$  
B. Cairan bromin diteteskan ke dalam larutan kalium iodida: $\\ce{Br2(l) + 2KI(aq) -> 2KBr(aq) + I2(s)}$  
C. Gas fluorin dialirkan ke dalam larutan natrium klorida: $\\ce{F2(g) + 2NaCl(aq) -> 2NaF(aq) + Cl2(g)}$  
D. Kristal iodin dimasukkan ke dalam larutan natrium bromida: $\\ce{I2(s) + 2NaBr(aq) -> 2NaI(aq) + Br2(l)}$  
E. Gas klorin dialirkan ke dalam larutan kalium iodida: $\\ce{Cl2(g) + 2KI(aq) -> 2KCl(aq) + I2(s)}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Kaidah Reaksi Pendesakan Halogen:**
   - Halogen yang memiliki potensial reduksi lebih positif (posisi lebih atas pada golongan VIIA) memiliki daya oksidasi yang lebih kuat.
   - Halogen yang lebih kuat mampu mendesak (mengoksidasi) ion halida yang berada di bawahnya:
     $$\\text{Daya Oksidator: } \\ce{F2 (+2{,}87 V) > Cl2 (+1{,}36 V) > Br2 (+1{,}07 V) > I2 (+0{,}54 V)}$$
2. **Uji Spontanitas Tiap Opsi:**
   - **Opsi A:** $\\ce{Cl2}$ mendesak $\\ce{Br-}$ $\\implies E^\\circ_{\\text{sel}} = +1{,}36 - (+1{,}07) = +0{,}29\\text{ V} > 0$ (**Spontan**).
   - **Opsi B:** $\\ce{Br2}$ mendesak $\\ce{I-}$ $\\implies E^\\circ_{\\text{sel}} = +1{,}07 - (+0{,}54) = +0{,}53\\text{ V} > 0$ (**Spontan**).
   - **Opsi C:** $\\ce{F2}$ mendesak $\\ce{Cl-}$ $\\implies E^\\circ_{\\text{sel}} = +2{,}87 - (+1{,}36) = +1{,}51\\text{ V} > 0$ (**Spontan**).
   - **Opsi D:** $\\ce{I2}$ mencoba mendesak $\\ce{Br-}$ $\\implies E^\\circ_{\\text{sel}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}} = +0{,}54 - (+1{,}07) = -0{,}53\\text{ V} < 0$. Nilai $E^\\circ_{\\text{sel}} < 0$ menunjukkan reaksi **TIDAK SPONTAN** (tidak dapat bereaksi).
   - **Opsi E:** $\\ce{Cl2}$ mendesak $\\ce{I-}$ $\\implies E^\\circ_{\\text{sel}} = +1{,}36 - (+0{,}54) = +0{,}82\\text{ V} > 0$ (**Spontan**).

Dengan demikian, reaksi yang tidak dapat berlangsung adalah opsi D.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['pendesakan-halogen', 'potensial-reduksi', 'daya-oksidator', 'spontanitas-redoks', 'golongan-viia'],
  },
  {
    id: 115007,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Geometri Molekul Senyawa Xenon',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Tipe VSEPR dan Bentuk Geometri Xenon Difluorida dan Tetrafluorida',
    question_text: `Meskipun gas mulia memiliki kestabilan konfigurasi oktet yang tinggi, atom xenon ($_{54}\\ce{Xe}$) dapat bereaksi dengan gas fluorin membentuk beberapa senyawa fluorida stabil seperti $\\ce{XeF2}$ dan $\\ce{XeF4}$.

Berdasarkan teori VSEPR (*Valence Shell Electron Pair Repulsion*), tipe molekul dan bentuk geometri dari molekul $\\ce{XeF2}$ dan $\\ce{XeF4}$ berturut-turut adalah ....

A. $\\text{AX}_2\\text{E}_2$ (Bentuk V / Bengkok) dan $\\text{AX}_4\\text{E}$ (Jungkat-jungkit / Seesaw)  
B. $\\text{AX}_2\\text{E}_3$ (Linear) dan $\\text{AX}_4\\text{E}_2$ (Bujur Sangkar / Square Planar)  
C. $\\text{AX}_2$ (Linear) dan $\\text{AX}_4$ (Tetrahedral)  
D. $\\text{AX}_2\\text{E}_3$ (Trigonal Bipiramidal) dan $\\text{AX}_4\\text{E}_2$ (Oktahedral)  
E. $\\text{AX}_2\\text{E}$ (Bengkok) dan $\\text{AX}_4\\text{E}_2$ (Piramida Segiempat)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Elektron Valensi Xenon:**
   Atom $\\ce{Xe}$ merupakan gas mulia (golongan VIIIA) dengan $8$ elektron valensi ($5s^2 5p^6$).
2. **Analisis Molekul $\\ce{XeF2}$:**
   - Pasangan Elektron Ikatan (PEI / $X$): $2$ atom $\\ce{F}$ terikat secara ikatan kovalen tunggal.
   - Sisa elektron bebas pada atom pusat $\\ce{Xe}$: $8 - 2(1) = 6$ elektron $= 3$ pasang (PEB / $E = 3$).
   - **Tipe VSEPR: $\\text{AX}_2\\text{E}_3$** (Bilangan sterik $= 5$).
   - Geometri domain elektron adalah trigonal bipiramidal. Agar tolakan antarpasangan elektron bebas minimal, ketiga PEB menempati posisi bidang ekuatorial (sudut $120^\\circ$), sehingga kedua atom $\\ce{F}$ berada di posisi aksial membentuk garis lurus:
     $$\\text{Bentuk Geometri Molekul } \\ce{XeF2} \\implies \\mathbf{\\text{Linear (sudut ikatan } 180^\\circ)}$$
3. **Analisis Molekul $\\ce{XeF4}$:**
   - Pasangan Elektron Ikatan (PEI / $X$): $4$ atom $\\ce{F}$ terikat.
   - Sisa elektron bebas pada atom pusat $\\ce{Xe}$: $8 - 4(1) = 4$ elektron $= 2$ pasang (PEB / $E = 2$).
   - **Tipe VSEPR: $\\text{AX}_4\\text{E}_2$** (Bilangan sterik $= 6$).
   - Geometri domain elektron adalah oktahedral. Kedua PEB menempati posisi aksial yang saling berlawanan ($180^\\circ$) untuk meminimalkan tolakan, sementara keempat atom $\\ce{F}$ berada pada satu bidang datar:
     $$\\text{Bentuk Geometri Molekul } \\ce{XeF4} \\implies \\mathbf{\\text{Bujur Sangkar (Square Planar)}}$$

Dengan demikian, jawaban yang benar adalah tipe $\\text{AX}_2\\text{E}_3$ (Linear) dan $\\text{AX}_4\\text{E}_2$ (Bujur Sangkar / Square Planar).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Soal Olimpiade Kimia SMA Fase F',
    tags: ['senyawa-xenon', 'gas-mulia', 'teori-vsepr', 'geometri-molekul', 'square-planar'],
  },
  {
    id: 115008,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Titik Leleh & Struktur Unsur Periode 3',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Analisis Anomali Titik Leleh Silikon dan Non-Logam Molekular Periode 3',
    question_text: `Diberikan data titik leleh lima unsur Periode Ketiga secara acak:
$1410^\\circ\\text{C}, 119^\\circ\\text{C}, 44^\\circ\\text{C}, -101^\\circ\\text{C},$ dan $-189^\\circ\\text{C}$.

Urutan unsur Periode Ketiga yang tepat sesuai dengan penurunan nilai titik leleh tersebut adalah ....

A. $\\ce{Si > S8 > P4 > Cl2 > Ar}$  
B. $\\ce{S8 > Si > P4 > Cl2 > Ar}$  
C. $\\ce{Al > Si > S8 > P4 > Cl2}$  
D. $\\ce{Si > P4 > S8 > Cl2 > Ar}$  
E. $\\ce{Cl2 > P4 > S8 > Si > Ar}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Struktur Ikatan Unsur Periode Ketiga:**
   - **Silikon ($\\ce{Si}$):** Memiliki struktur **kovalen jejaring raksasa (*giant covalent network*)** mirip intan di mana setiap atom silikon terikat tetrahedral ke 4 atom $\\ce{Si}$ lain melalui ikatan kovalen yang sangat kuat. Membutuhkan energi termal luar biasa besar untuk memutuskannya $\\implies$ Titik leleh tertinggi: **$1410^\\circ\\text{C}$**.
2. **Kelompok Non-Logam Molekular Sederhana ($\\ce{S8, P4, Cl2, Ar}$):**
   - Senyawa ini hanya terikat oleh gaya antarmolekul yang relatif lemah, yaitu **gaya dispersi London**.
   - Kekuatan gaya dispersi London berbanding lurus dengan massa molar ($M_r$) dan ukuran awan elektron:
     - **Belerang ($\\ce{S8}$):** Molekul cincin oktaatomik berukuran paling besar ($M_r = 8 \\times 32 = 256$) $\\implies$ Gaya London terkuat $\\implies$ Titik leleh **$119^\\circ\\text{C}$**.
     - **Fosforus putih ($\\ce{P4}$):** Molekul tetrahedral tetraatomik ($M_r = 4 \\times 31 = 124$) $\\implies$ Titik leleh **$44^\\circ\\text{C}$**.
     - **Klorin ($\\ce{Cl2}$):** Molekul diatomik gas ($M_r = 2 \\times 35{,}5 = 71$) $\\implies$ Titik leleh **$-101^\\circ\\text{C}$**.
     - **Argon ($\\ce{Ar}$):** Gas monoatomik bebas ($M_r = 40$) $\\implies$ Titik leleh terendah: **$-189^\\circ\\text{C}$**.
3. **Kesimpulan Urutan Penurunan Titik Leleh:**
   $$\\mathbf{\\ce{Si} (1410^\\circ\\text{C}) > \\ce{S8} (119^\\circ\\text{C}) > \\ce{P4} (44^\\circ\\text{C}) > \\ce{Cl2} (-101^\\circ\\text{C}) > \\ce{Ar} (-189^\\circ\\text{C})}$$

Oleh karena itu, opsi A adalah urutan yang paling tepat.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Penilaian Harian Kimia SMA Fase F',
    tags: ['titik-leleh', 'unsur-periode-3', 'kovalen-raksasa-silikon', 'gaya-london', 'struktur-molekul'],
  },
  {
    id: 115009,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Variasi Bilangan Oksidasi Logam Transisi Periode 4',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Pola Bilangan Oksidasi Maksimum Logam Transisi Blok 3d',
    question_text: `Pada deret unsur transisi periode 4 dari skandium ($_{21}\\ce{Sc}$) hingga seng ($_{30}\\ce{Zn}$), bilangan oksidasi tertinggi (maksimum) yang dapat dicapai unsur meningkat secara teratur dari $\\ce{Sc}$ hingga $\\ce{Mn}$, kemudian menurun kembali setelah $\\ce{Mn}$.

Pasangan unsur transisi berikut yang keduanya memiliki tingkat oksidasi maksimum sebesar $+5$ dan $+7$ berturut-turut adalah ....

A. Titanium ($\\ce{Ti}$) dan Kromium ($\\ce{Cr}$)  
B. Vanadium ($\\ce{V}$) dan Mangan ($\\ce{Mn}$)  
C. Kromium ($\\ce{Cr}$) dan Besi ($\\ce{Fe}$)  
D. Skandium ($\\ce{Sc}$) dan Mangan ($\\ce{Mn}$)  
E. Vanadium ($\\ce{V}$) dan Kobalt ($\\ce{Co}$)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Kaidah Bilangan Oksidasi Maksimum Logam Transisi 3d:**
   Pada bagian awal deret transisi, seluruh elektron valensi pada subkulit $4s$ dan orbital $3d$ yang belum berpasangan dapat dilepaskan atau dilibatkan dalam pembentukan ikatan kovalen.
   $$\\text{Biloks Maksimum} = \\text{Jumlah elektron } (4s + 3d)$$
2. **Pengecekan Konfigurasi Elektron Unsur:**
   - **Skandium ($_{21}\\ce{Sc}$):** $[\\ce{Ar}] 4s^2 3d^1 \\implies \\text{Maksimum } +3$.
   - **Titanium ($_{22}\\ce{Ti}$):** $[\\ce{Ar}] 4s^2 3d^2 \\implies \\text{Maksimum } +4$ (contoh $\\ce{TiO2}$).
   - **Vanadium ($_{23}\\ce{V}$):** $[\\ce{Ar}] 4s^2 3d^3 \\implies \\text{Maksimum } \\mathbf{+5}$ (contoh $\\ce{V2O5}, \\ce{VO2+}$).
   - **Kromium ($_{24}\\ce{Cr}$):** $[\\ce{Ar}] 4s^1 3d^5 \\implies \\text{Maksimum } +6$ (contoh $\\ce{K2Cr2O7}, \\ce{CrO3}$).
   - **Mangan ($_{25}\\ce{Mn}$):** $[\\ce{Ar}] 4s^2 3d^5 \\implies \\text{Maksimum } \\mathbf{+7}$ (contoh $\\ce{KMnO4}, \\ce{Mn2O7}$).
   - Setelah Mangan, elektron $3d$ mulai berpasangan dan muatan inti efektif meningkat pesat, sehingga biloks maksimum menurun ($\\ce{Fe}$ umumnya $+3$, $\\ce{Co}$ $+3$, $\\ce{Ni}$ $+2$, $\\ce{Cu}$ $+2$, $\\ce{Zn}$ $+2$).
3. **Kesimpulan:**
   Unsur dengan tingkat oksidasi maksimum $+5$ adalah **Vanadium** dan $+7$ adalah **Mangan**.

Oleh karena itu, pasangan yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['logam-transisi', 'bilangan-oksidasi', 'vanadium', 'mangan', 'elektron-valensi-3d'],
  },
  {
    id: 115010,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Momen Magnetik Spin Murni Unsur Transisi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Kalkulasi Momen Magnetik Spin Murni Ion Besi(II) dan Besi(III)',
    question_text: `Momen magnetik spin murni (*spin-only magnetic moment*, $\\mu_s$) suatu ion logam transisi dirumuskan sebagai:
$$\\mu_s = \\sqrt{n(n + 2)} \\quad \\text{BM (Bohr Magneton)}$$
di mana $n$ adalah jumlah elektron yang tidak berpasangan dalam orbital $d$.

Diketahui nomor atom besi adalah $Z = 26$. Nilai momen magnetik spin murni untuk ion $\\ce{Fe^3+}$ dan $\ce{Fe^2+}$ dalam keadaan ion gas bebas berturut-turut mendekati ....

A. $5{,}92\\text{ BM}$ dan $4{,}90\\text{ BM}$  
B. $4{,}90\\text{ BM}$ dan $5{,}92\\text{ BM}$  
C. $3{,}87\\text{ BM}$ dan $2{,}83\\text{ BM}$  
D. $5{,}92\\text{ BM}$ dan $0\\text{ BM}$  
E. $1{,}73\\text{ BM}$ dan $3{,}87\\text{ BM}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Konfigurasi Elektron Atom Besi Netral ($Z = 26$):**
   $$\\ce{Fe}: [\\ce{Ar}] 4s^2 3d^6$$
2. **Ion $\\ce{Fe^3+}$ (Pelepasan 3 Elektron: 2 dari $4s$ dan 1 dari $3d$):**
   - Konfigurasi: $[\\ce{Ar}] 3d^5$.
   - Berdasarkan Kaidah Hund, kelima orbital $d$ terisi oleh masing-masing satu elektron dengan spin paralel:
     $$\\uparrow \\quad \\uparrow \\quad \\uparrow \\quad \\uparrow \\quad \\uparrow \\implies n = 5 \\text{ elektron tak berpasangan}$$
   - Momen magnetik spin murni:
     $$\\mu_s(\\ce{Fe^3+}) = \\sqrt{5(5 + 2)} = \\sqrt{35} \\approx 5{,}92\\text{ BM}$$
3. **Ion $\\ce{Fe^2+}$ (Pelepasan 2 Elektron dari $4s$):**
   - Konfigurasi: $[\\ce{Ar}] 3d^6$.
   - Pengisian orbital $d$: satu orbital terisi sepasang elektron dan empat orbital terisi satu elektron:
     $$\\uparrow\\downarrow \\quad \\uparrow \\quad \\uparrow \\quad \\uparrow \\quad \\uparrow \\implies n = 4 \\text{ elektron tak berpasangan}$$
   - Momen magnetik spin murni:
     $$\\mu_s(\\ce{Fe^2+}) = \\sqrt{4(4 + 2)} = \\sqrt{24} \\approx 4{,}90\\text{ BM}$$

Dengan demikian, nilai momen magnetik spin murni ion $\\ce{Fe^3+}$ dan $\\ce{Fe^2+}$ berturut-turut adalah $5{,}92\\text{ BM}$ dan $4{,}90\\text{ BM}$.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK / UTBK-SNBT Kimia SMA',
    tags: ['momen-magnetik', 'bohr-magneton', 'paramagnetik', 'elektron-tak-berpasangan', 'ion-besi'],
  },
  {
    id: 115011,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Rekayasa Tanur Tiup Besi',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Termodinamika Reduksi Bijih Hematit dan Pembentukan Terak pada Tanur Tiup',
    question_text: `Dalam industri metalurgi ekstraksi, besi kasar (*pig iron*) diproduksi secara kontinu di dalam reaktor tanur tiup (*blast furnace*) dengan bahan baku utama bijih besi hematit ($\\ce{Fe2O3}$), kokas ($\\ce{C}$), dan batu kapur ($\\ce{CaCO3}$).

Jawablah pertanyaan berikut terkait proses kimia dalam tanur tiup tersebut:`,
    expected_final_answer: 'a) Reaksi pembentukan gas CO: C(s) + O2(g) -> CO2(g) dilanjutkan CO2(g) + C(s) -> 2CO(g). Reaksi reduksi total hematit: Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g); b) Batu kapur CaCO3 terurai menjadi CaO dan CO2; CaO mengikat pengotor asam pasir silika SiO2 membentuk terak cair kalsium silikat: CaO(s) + SiO2(s) -> CaSiO3(l). Dua fungsi terak cair: (1) Mengapung di atas cairan besi karena densitas lebih kecil sehingga mencegah reoksidasi besi cair oleh udara panas, dan (2) Mengisolasi serta memudahkan pembuangan pengotor silika dari dasar tanur.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan reaksi pembentukan gas pereduksi CO dari pembakaran kokas:
     C + O2 -> CO2 dan CO2 + C -> 2CO (1.0 poin).
  2. Menuliskan persamaan reaksi reduksi total bijih hematit oleh CO:
     Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g) (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan penguraian termal CaCO3 menjadi CaO dan reaksi pengikatan SiO2 membentuk terak cair CaSiO3:
     CaO + SiO2 -> CaSiO3 (1.5 poin).
  2. Menyebutkan dua fungsi vital terak cair (mencegah reoksidasi besi cair oleh hembusan udara panas dan memudahkan pemisahan pengotor lelehan) (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi pembentukan gas pereduksi utama $\\ce{CO}$ dari kokas serta persamaan reaksi reduksi total bijih hematit oleh $\\ce{CO}$ menghasilkan cairan besi!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi pembentukan CO (1.0 poin) dan reaksi reduksi total Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g) (1.5 poin).',
        expected_answer: 'C + O2 -> CO2; CO2 + C -> 2CO; Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g).',
      },
      {
        label: 'b',
        question_text: `Jelaskan fungsi penambahan batu kapur ($\ce{CaCO3}$) dalam mengikat pengotor silika ($\ce{SiO2}$) menjadi terak cair (*slag*) $\ce{CaSiO3}$, serta sebutkan dua fungsi terak cair tersebut di bagian dasar tanur!`,
        points: 2.5,
        rubric: 'Menjelaskan pengikatan silika CaO + SiO2 -> CaSiO3 (1.5 poin) dan dua peran terak (mencegah reoksidasi besi dan mengisolasi pengotor) (1.0 poin).',
        expected_answer: 'CaCO3 terurai menjadi CaO yang bereaksi dengan SiO2 membentuk terak CaSiO3. Terak mengapung melindungi besi cair dari oksidasi ulang dan memudahkan pengeluaran pengotor.',
      },
    ],
    solution_framework_template: `1. Reaksi Gas Pereduksi dan Reduksi Hematit:
• Pembentukan karbon dioksida dan reduksi karbon monoksida (Reaksi Boudouard): ....
• Persamaan reaksi reduksi bertingkat akhir bijih hematit Fe2O3 oleh gas CO: ....

2. Kimia Pembentukan dan Peran Terak (Slag):
• Reaksi dekomposisi termal kalsium karbonat CaCO3: ....
• Reaksi asam-basa anorganik CaO (basa) + SiO2 (asam) -> CaSiO3: ....
• Dua peranan fisis terak cair di dasar perapian tanur tiup: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['tanur-tiup', 'metalurgi-besi', 'hematit', 'terak-kalsium-silikat', 'karbon-monoksida'],
  },
  {
    id: 115012,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Proses Hall-Héroult Ekstraksi Aluminium',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Prinsip Elektrolisis Alumina dalam Pelarut Kriolit Cair pada Proses Hall-Héroult',
    question_text: `Aluminium merupakan salah satu logam struktural terpenting di dunia. Isolasi logam aluminium dari bijih alumina murni ($\\ce{Al2O3}$) dilakukan melalui proses elektrolisis Hall-Héroult.

Jawablah pertanyaan berikut terkait rekayasa proses Hall-Héroult:`,
    expected_final_answer: 'a) Alumina murni tidak dapat dielektrolisis langsung karena memiliki titik leleh yang teramat tinggi (> 2050 °C) dan konduktivitas lelehan murninya buruk sehingga membutuhkan energi raksasa. Dua peran vital kriolit (Na3AlF6) cair: menurunkan titik leleh campuran secara dramatis menjadi ~950 °C dan meningkatkan daya hantar listrik lelehan; b) Katoda: Al^3+ + 3e- -> Al(l); Anoda: 2O^2- -> O2(g) + 4e-. Batang anoda karbon mengalami keausan berkala karena gas O2 yang terbentuk pada suhu tinggi (~950 °C) langsung bereaksi membakar elektroda karbon membentuk gas CO2: C(s) + O2(g) -> CO2(g).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menjelaskan kendala fisik titik leleh alumina murni yang sangat tinggi (> 2050 °C) sehingga tidak ekonomis (1.0 poin).
  2. Menyebutkan dua peran utama kriolit cair Na3AlF6 (menurunkan titik leleh operasional menjadi ~950 °C dan meningkatkan konduktivitas listrik) (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan reaksi katoda Al^3+ + 3e- -> Al(l) dan anoda 2O^2- -> O2 + 4e- (1.5 poin).
  2. Menjelaskan reaksi pembakaran anoda karbon oleh oksigen panas membentuk gas CO2: C + O2 -> CO2 sehingga anoda habis terkikis (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan mengapa alumina murni ($\ce{Al2O3}$) tidak dapat dielektrolisis secara langsung, dan sebutkan dua peranan esensial penambahan kriolit ($\ce{Na3AlF6}$) cair ke dalam sel!`,
        points: 2.5,
        rubric: 'Menjelaskan titik leleh Al2O3 sangat tinggi > 2050 °C (1.0 poin) dan peran kriolit menurunkan titik leleh ke ~950 °C serta menambah konduktivitas (1.5 poin).',
        expected_answer: 'Al2O3 murni memiliki titik leleh > 2050 °C; penambahan kriolit cair menurunkan titik leleh menjadi ~950 °C dan meningkatkan daya hantar listrik.',
      },
      {
        label: 'b',
        question_text: `Tuliskan reaksi reduksi di katoda dan oksidasi di anoda karbon, serta jelaskan mengapa anoda karbon sel Hall-Héroult terus-menerus menipis dan harus diganti secara berkala!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi katoda dan anoda (1.5 poin) serta reaksi pembakaran anoda C + O2 -> CO2 pada suhu tinggi (1.0 poin).',
        expected_answer: 'Katoda: Al^3+ + 3e- -> Al(l); Anoda: 2O^2- -> O2(g) + 4e-. Anoda karbon terkikis habis karena bereaksi dengan gas O2 panas membentuk gas CO2.',
      },
    ],
    solution_framework_template: `1. Kendala Termal Alumina dan Peran Kriolit:
• Nilai titik leleh alumina Al2O3 murni: ....
• Fungsi kriolit Na3AlF6 terhadap suhu operasional sel elektrolisis: ....
• Pengaruh penambahan kriolit terhadap mobilitas ion dan efisiensi arus listrik: ....

2. Reaksi Elektroda dan Degradasi Anoda Karbon:
• Persamaan setengah reaksi reduksi ion aluminium di katoda: ....
• Persamaan setengah reaksi oksidasi ion oksida di anoda: ....
• Reaksi sekunder oksidasi batang karbon oleh oksigen pada suhu 950°C: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['proses-hall-heroult', 'metalurgi-aluminium', 'kriolit', 'elektrolisis-lelehan', 'anoda-karbon'],
  },
  {
    id: 115013,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Sintesis Asam Sulfat Proses Kontak',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kinetika, Termodinamika, dan Rekayasa Absorpsi Asam Sulfat Proses Kontak',
    question_text: `Asam sulfat ($\\ce{H2SO4}$) diproduksi dalam skala industri raksasa melalui proses Kontak. Tahap penentu dalam proses ini adalah reaksi kesetimbangan eksotermik oksidasi sulfur dioksida:
$$\\ce{2SO2(g) + O2(g) <=> 2SO3(g)} \\quad \\Delta H = -198\\text{ kJ}$$

Jawablah pertanyaan berikut terkait rekayasa proses Kontak:`,
    expected_final_answer: 'a) Reaksi bersifat eksotermik (Delta H < 0) sehingga menurut Le Chatelier hasil SO3 optimum pada suhu rendah, namun laju reaksi menjadi sangat lambat. Maka dipilih suhu kompromi 450 °C dengan katalis V2O5 untuk mempercepat tercapainya kesetimbangan. Tekanan 1-2 atm sudah cukup karena konversi SO3 telah mencapai >98% pada tekanan mendekati atmosfer sehingga tidak memerlukan reaktor bertekanan tinggi yang mahal; b) Gas SO3 tidak langsung dilarutkan dalam air murni karena reaksi pelarutan sangat eksotermik dan menghasilkan kabut asap asam sulfat (aerosol) yang sukar mengembun dan merusak peralatan. SO3 diserap oleh H2SO4 pekat 98% membentuk cairan oleum: SO3 + H2SO4 -> H2S2O7, kemudian oleum diencerkan dengan air secara terkendali: H2S2O7 + H2O -> 2H2SO4.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menjelaskan rasionalisasi suhu operasi 450 °C sebagai suhu kompromi antara termodinamika eksotermik (Le Chatelier) dan kinetika laju reaksi menggunakan katalis V2O5 (1.5 poin).
  2. Menjelaskan alasan tekanan moderat 1-2 atm sudah mencukupi untuk konversi tinggi tanpa biaya kompresi mahal (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan bahaya reaksi langsung SO3 dengan air yang membentuk kabut aerosol asam korosif yang sulit terkondensasi (1.0 poin).
  2. Menuliskan reaksi absorpsi SO3 dalam H2SO4 pekat membentuk oleum H2S2O7 dan hidrolisis oleum menjadi H2SO4 murni (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Berdasarkan asas Le Chatelier dan kinetika kimia, jelaskan pemilihan kondisi suhu operasi $450^\\circ\\text{C}$, tekanan $1-2\\text{ atm}$, dan katalis $\\ce{V2O5}$ yang digunakan pada reaktor kontak!`,
        points: 2.5,
        rubric: 'Menjelaskan suhu 450 °C sebagai suhu kompromi termodinamika-kinetika dengan katalis V2O5 (1.5 poin) dan efisiensi tekanan 1-2 atm (1.0 poin).',
        expected_answer: 'Suhu 450 °C adalah kompromi antara hasil kesetimbangan eksotermik dan laju reaksi dengan katalis V2O5; tekanan 1-2 atm dipilih karena konversi sudah sangat tinggi (>98%).',
      },
      {
        label: 'b',
        question_text: `Jelaskan mengapa gas $\\ce{SO3}$ tidak langsung dilarutkan ke dalam air murni, dan tuliskan tahapan penyerapan $\\ce{SO3}$ menggunakan $\\ce{H2SO4}$ pekat membentuk oleum ($\ce{H2S2O7}$) hingga diencerkan menjadi asam sulfat!`,
        points: 2.5,
        rubric: 'Menjelaskan timbulnya kabut asam aerosol jika ditambah air langsung (1.0 poin) serta menuliskan pembentukan oleum SO3 + H2SO4 -> H2S2O7 dan pengenceran H2S2O7 + H2O -> 2H2SO4 (1.5 poin).',
        expected_answer: 'Pelarutan langsung dalam air menimbulkan kabut asam berbahaya. SO3 diserap H2SO4 pekat menjadi oleum (SO3 + H2SO4 -> H2S2O7) lalu diencerkan dengan air (H2S2O7 + H2O -> 2H2SO4).',
      },
    ],
    solution_framework_template: `1. Kondisi Optimum Kinetika dan Termodinamika:
• Analisis eksotermik reaksi dan pergeseran kesetimbangan (Asas Le Chatelier): ....
• Peran katalis vanadium(V) oksida V2O5 terhadap energi aktivasi: ....
• Alasan pemilihan tekanan operasi dekat atmosferik (1-2 atm): ....

2. Rekayasa Penyerapan Gas SO3 dan Pembentukan Oleum:
• Dampak reaksi langsung SO3(g) + H2O(l) (pembentukan kabut aerosol): ....
• Persamaan reaksi pembentukan asam pirosulfat / oleum H2S2O7: ....
• Persamaan reaksi hidrolisis oleum menjadi asam sulfat H2SO4 murni: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['proses-kontak', 'asam-sulfat', 'oleum', 'katalis-v2o5', 'kesetimbangan-eksotermik'],
  },
  {
    id: 115014,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Tren Kekuatan Asam Halida & Asam Oksi Halogen',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Faktor Termodinamika Kekuatan Asam Halida dan Asam Oksi Klorin',
    question_text: `Karakter keasaman senyawa-senyawa halogen memperlihatkan tren yang sangat menarik antara asam halida biner ($\\ce{HX}$) dan asam oksi klorin ($\\ce{HClO_n}$).

Jawablah pertanyaan berikut terkait analisis kekuatan asam tersebut:`,
    expected_final_answer: 'a) Urutan kekuatan asam halida biner: HF << HCl < HBr < HI. Faktor penentunya adalah kekuatan ikatan H-X (energi disosiasi ikatan). Dari HF ke HI, jari-jari anion halida membesar drastis sehingga panjang ikatan bertambah dan energi ikatan H-X melemah pesat (H-F = 565 kJ/mol; H-I = 295 kJ/mol), mempermudah pelepasan proton H+ di dalam air. Selain itu, HF memiliki ikatan hidrogen antarmolekul yang kuat; b) Urutan kekuatan asam oksi klorin: HClO < HClO2 < HClO3 < HClO4. Faktor penentunya adalah bilangan oksidasi atom klorin (+1 -> +3 -> +5 -> +7) dan jumlah atom oksigen terminal penarik elektron. Semakin banyak atom O elektronegatif yang terikat pada atom Cl, kerapatan elektron ditarik menjauhi ikatan O-H, membuat ikatan O-H semakin terpolarisasi dan lemah, serta menstabilkan muatan negatif anion konjugatnya via resonansi delokalisasi muatan.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan urutan kekuatan asam biner HF << HCl < HBr < HI (1.0 poin).
  2. Menjelaskan faktor penurunan energi disosiasi ikatan H-X seiring membesarnya jari-jari halogen yang mempermudah ionisasi H+ (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan urutan kekuatan asam oksi HClO < HClO2 < HClO3 < HClO4 (1.0 poin).
  2. Menjelaskan efek induksi tarikan elektron oleh pertambahan atom oksigen elektronegatif (kenaikan biloks Cl) yang memperlemah ikatan O-H dan menstabilkan anion via delokalisasi muatan (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan urutan kekuatan asam halida biner $\\ce{HF \\ll HCl < HBr < HI}$ ditinjau dari pengaruh jari-jari ion halida dan energi disosiasi ikatan $\\ce{H-X}$!`,
        points: 2.5,
        rubric: 'Menyebutkan urutan HF << HCl < HBr < HI (1.0 poin) dan menghubungkannya dengan pelemahan energi ikatan H-X akibat pertambahan jari-jari halogen (1.5 poin).',
        expected_answer: 'Urutan: HF << HCl < HBr < HI. Semakin ke bawah jari-jari halogen membesar, ikatan H-X melemah drastis, sehingga proton H+ semakin mudah terdisosiasi.',
      },
      {
        label: 'b',
        question_text: `Jelaskan urutan kekuatan asam oksi klorin $\\ce{HClO < HClO2 < HClO3 < HClO4}$ berdasarkan bilangan oksidasi atom pusat klorin dan kerapatan muatan ikatan $\\ce{O-H}$!`,
        points: 2.5,
        rubric: 'Menyebutkan urutan HClO < HClO2 < HClO3 < HClO4 (1.0 poin) dan menjelaskan penarikan kerapatan elektron oleh atom O elektronegatif yang memperlemah ikatan O-H (1.5 poin).',
        expected_answer: 'Urutan: HClO < HClO2 < HClO3 < HClO4. Bertambahnya atom O elektronegatif meningkatkan biloks Cl (+1 ke +7), menarik elektron dari ikatan O-H sehingga pelepasan H+ semakin mudah.',
      },
    ],
    solution_framework_template: `1. Termodinamika Disosiasi Asam Halida Biner:
• Tren jari-jari ion halida dari fluorida hingga iodida: ....
• Korelasi panjang ikatan terhadap energi disosiasi ikatan H-X: ....
• Alasan HF bertindak sebagai asam lemah di dalam air: ....

2. Efek Induksi dan Resonansi Asam Oksi Halogen:
• Perhitungan bilangan oksidasi atom klorin pada deret HClO hingga HClO4: ....
• Efek elektronegativitas atom oksigen terminal terhadap polarisasi ikatan O-H: ....
• Stabilisasi anion konjugat terdeprotonasi melalui delokalisasi muatan resonansi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK Kimia SMA Fase F',
    tags: ['kekuatan-asam', 'asam-halida', 'asam-oksi-klorin', 'energi-ikatan', 'efek-induksi'],
  },
  {
    id: 115015,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Pemisahan & Pemurnian Bijih Bauksit (Proses Bayer)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kimia Pemisahan Amfoter Alumina dari Pengotor Besi(III) Oksida pada Proses Bayer',
    question_text: `Bijih bauksit mentah mengandung alumina ($\\ce{Al2O3}$) yang bercampur dengan pengotor utama besi(III) oksida ($\\ce{Fe2O3}$) dan silika ($\\ce{SiO2}$). Dalam industri aluminium, Proses Bayer memanfaatkan sifat amfoter aluminium untuk memurnikan alumina sebelum masuk ke sel Hall-Héroult.

Jawablah pertanyaan berikut terkait tahapan kimia Proses Bayer:`,
    expected_final_answer: 'a) Reaksi pencernaan: Al2O3(s) + 2NaOH(aq) + 3H2O(l) -> 2Na[Al(OH)4](aq) (atau Al2O3 + 2OH- + 3H2O -> 2[Al(OH)4]-). Fe2O3 tidak larut karena merupakan oksida basa murni yang tidak bereaksi dengan basa kuat NaOH, sehingga tetap berwujud padatan dan dapat disaring sebagai ampas lumpur merah (red mud); b) Filtrat Na[Al(OH)4] didinginkan dan dipresipitasi dengan penambahan bibit kristal Al(OH)3 atau pengaliran gas CO2 membentuk endapan murni: [Al(OH)4]-(aq) -> Al(OH)3(s) + OH-(aq). Endapan disaring dan dikalsinasi dalam tanur putar pada suhu ~1100 °C: 2Al(OH)3(s) -> Al2O3(s) + 3H2O(g).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan persamaan reaksi pelarutan amfoter Al2O3 dalam larutan NaOH pekat panas membentuk kompleks tetrahidroksoaluminat:
     Al2O3 + 2NaOH + 3H2O -> 2Na[Al(OH)4] (1.5 poin).
  2. Menjelaskan alasan Fe2O3 tidak larut karena bersifat oksida basa murni sehingga terpisah sebagai lumpur merah (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan pengendapan kembali Al(OH)3 murni melalui pembenihan kristal atau pengasaman CO2 (1.0 poin).
  2. Menuliskan reaksi kalsinasi termal Al(OH)3 pada suhu tinggi membentuk kristal alumina murni Al2O3:
     2Al(OH)3 -> Al2O3 + 3H2O (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi saat bauksit direaksikan dengan larutan $\\ce{NaOH}$ pekat panas, dan jelaskan mengapa $\\ce{Fe2O3}$ tidak larut sehingga dapat disaring sebagai lumpur merah (*red mud*)!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi Al2O3 + 2NaOH + 3H2O -> 2Na[Al(OH)4] (1.5 poin) dan menjelaskan sifat basa murni Fe2O3 yang tidak larut dalam basa (1.0 poin).',
        expected_answer: 'Al2O3(s) + 2NaOH(aq) + 3H2O(l) -> 2Na[Al(OH)4](aq); Fe2O3 adalah oksida basa sehingga tidak larut dalam larutan basa NaOH dan disaring sebagai lumpur merah.',
      },
      {
        label: 'b',
        question_text: `Jelaskan tahapan pengendapan kembali aluminium hidroksida dari filtrat aluminat, serta tuliskan reaksi kalsinasi termal untuk menghasilkan serbuk alumina murni!`,
        points: 2.5,
        rubric: 'Menjelaskan presipitasi Al(OH)3 via pendinginan/penambahan bibit (1.0 poin) dan menuliskan reaksi kalsinasi 2Al(OH)3 -> Al2O3 + 3H2O (1.5 poin).',
        expected_answer: 'Filtrat didinginkan dan ditambah bibit Al(OH)3 untuk mengendapkan kembali Al(OH)3 murni. Endapan kemudian dikalsinasi pada suhu tinggi: 2Al(OH)3 -> Al2O3 + 3H2O.',
      },
    ],
    solution_framework_template: `1. Tahap Pencernaan (Digestion) dan Pemisahan Residu:
• Persamaan reaksi pembentukan natrium tetrahidroksoaluminat terlarut: ....
• Sifat asam-basa Fe2O3 vs Al2O3: ....
• Identifikasi komposisi limbah lumpur merah (red mud): ....

2. Tahap Presipitasi dan Kalsinasi (Calcination):
• Mekanisme pemisahan Al(OH)3 melalui penurunan pH atau kristalisasi bibit: ....
• Persamaan reaksi dekomposisi termal kalsinasi pada suhu 1100°C: ....
• Wujud dan kemurnian produk alumina Al2O3 siap elektrolisis: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['proses-bayer', 'pemurnian-bauksit', 'amfoterisme-aluminium', 'lumpur-merah', 'kalsinasi'],
  },

  // =========================================================================
  // KATEGORI SULIT / OSK-OSP (40% = 10 Butir Soal: ID 115001 - 115025)
  // =========================================================================
  {
    id: 115016,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Teori Medan Kristal & Asal Warna Ion Kompleks',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Pembelahan Orbital d Teori Medan Kristal dan Eksitasi Transisi d-d',
    question_text: `Berdasarkan Teori Medan Kristal (*Crystal Field Theory* / CFT), keberadaan ligan air ($\\ce{H2O}$) pada kompleks oktahedral $[\\ce{M(H2O)6}]^{n+}$ memecah kelima orbital $d$ menjadi kelompok orbital $t_{2g}$ (berenergi lebih rendah) dan $e_g$ (berenergi lebih tinggi) dengan selisih energi $\\Delta_o$.

Pernyataan berikut yang BENAR mengenai asal mula warna larutan ion transisi periode 4 adalah ....

A. Larutan $\\ce{ZnSO4}$ berwarna putih keruh karena ion $\\ce{Zn^2+}$ mengalami transisi elektron $d-d$ pada daerah spektrum inframerah  
B. Larutan $\\ce{Sc(NO3)3}$ tidak berwarna jernih karena subkulit $3d$ pada ion $\\ce{Sc^3+}$ berkonfigurasi $3d^0$, sehingga tidak ada elektron yang dapat dieksitasi dari orbital $t_{2g}$ ke $e_g$  
C. Warna ungu larutan $[\\ce{Ti(H2O)6}]^{3+}$ dihasilkan dari pemancaran foton secara spontan oleh elektron pada orbital $4s$  
D. Larutan $[\\ce{Cu(H2O)6}]^{2+}$ berwarna biru cerah karena elektron menyerap foton warna biru dan memantulkan foton warna merah-jingga  
E. Semua ion logam transisi periode 4 pasti menghasilkan larutan berwarna karena memiliki elektron pada kulit terluar $N$ ($n=4$)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Mekanisme Warna Transisi $d-d$ (Teori CFT):**
   - Dalam medan ligan oktahedral, celah pemisahan energi orbital $d$ ($\\Delta_o$) setara dengan energi foton pada daerah sinar tampak ($\\lambda = 400 - 700\\text{ nm}$).
   - Elektron pada kelompok orbital $t_{2g}$ menyerap panjang gelombang tertentu untuk tereksitasi ke orbital $e_g$. Cahaya komplementer yang tidak diserap akan diteruskan ke mata pengamat sebagai warna larutan.
2. **Syarat Terjadinya Transisi $d-d$:**
   Subkulit $3d$ harus **terisi sebagian**, yaitu memiliki konfigurasi antara **$3d^1$ sampai $3d^9$**!
3. **Analisis Tiap Opsi:**
   - **Opsi B Benar:** Skandium ($Z = 21$) memiliki konfigurasi $[\\ce{Ar}] 4s^2 3d^1$. Ion $\\ce{Sc^3+}$ melepaskan 3 elektron sehingga berkonfigurasi $[\\ce{Ar}] 3d^0$. Karena orbital $3d$ kosong melompong, tidak ada elektron yang dapat mengalami transisi $d-d \\implies$ **Larutan $\\ce{Sc^3+}$ tidak berwarna (jernih)**.
   - **Opsi A Salah:** Seng ($Z = 30$) berkonfigurasi $[\\ce{Ar}] 4s^2 3d^{10}$. Ion $\\ce{Zn^2+}$ memiliki subkulit $3d^{10}$ yang penuh sesak sehingga tidak ada orbital kosong tujuan eksitasi $\\implies$ larutan $\\ce{Zn^2+}$ tidak berwarna, bukan putih keruh.
   - **Opsi C Salah:** Warna ungu ion $[\\ce{Ti(H2O)6}]^{3+}$ ($3d^1$) berasal dari penyerapan cahaya hijau-kuning oleh elektron $d$ yang berpindah dari $t_{2g}$ ke $e_g$, bukan emisi orbital $4s$.
   - **Opsi D Salah:** Kompleks tembaga menyerap foton berenergi merah-jingga dan meneruskan foton komplementernya (biru).
   - **Opsi E Salah:** Tidak semua ion transisi berwarna (contoh $\\ce{Sc^3+}$ dan $\\ce{Zn^2+}$ tidak berwarna).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK / KSN Kimia SMA',
    tags: ['teori-medan-kristal', 'cft', 'transisi-d-d', 'warna-ion-transisi', 'orbital-oktahedral'],
  },
  {
    id: 115017,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Deret Spektrokimia Ligan & Medan Kuat vs Medan Lemah',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Konfigurasi Spin Tinggi vs Spin Rendah Kompleks Oktahedral d6 Kobalt(III)',
    question_text: `Deret spektrokimia menyusun ligan berdasarkan kemampuannya membelah orbital $d$ (menghasilkan nilai $\\Delta_o$):
$$\\ce{I- < Br- < Cl- < F- < OH- < H2O < NH3 < en < NO2- < CN- < CO}$$

Ion kompleks oktahedral $[\\ce{CoF6}]^{3-}$ dan $[\\ce{Co(NH3)6}]^{3+}$ sama-sama memiliki ion pusat $\\ce{Co^3+}$ ($d^6$). Sifat kemagnetan dan konfigurasi elektron orbital $d$ kedua kompleks tersebut adalah ....

A. $[\\ce{CoF6}]^{3-}$ bersifat diamagnetik ($t_{2g}^6 e_g^0$) sedangkan $[\\ce{Co(NH3)6}]^{3+}$ bersifat paramagnetik ($t_{2g}^4 e_g^2$)  
B. $[\\ce{CoF6}]^{3-}$ bersifat paramagnetik spin tinggi ($t_{2g}^4 e_g^2$, $n=4$) sedangkan $[\\ce{Co(NH3)6}]^{3+}$ bersifat diamagnetik spin rendah ($t_{2g}^6 e_g^0$, $n=0$)  
C. Kedua kompleks bersifat paramagnetik kuat dengan masing-masing memiliki 4 elektron tidak berpasangan  
D. Kedua kompleks bersifat diamagnetik karena jumlah total elektron $d$ adalah genap ($d^6$)  
E. $[\\ce{CoF6}]^{3-}$ memiliki nilai $\\Delta_o$ yang lebih besar daripada energi perpasangan elektron ($P$)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Konfigurasi Elektron Ion $\\ce{Co^3+}$:**
   Nomor atom $\\ce{Co}$ adalah $27$ ($[\\ce{Ar}] 4s^2 3d^7$). Ion $\\ce{Co^3+}$ berkonfigurasi $[\\ce{Ar}] 3d^6$.
2. **Analisis Kompleks $[\\ce{CoF6}]^{3-}$:**
   - Ligan fluorida ($\\ce{F-}$): Terletak di ujung kiri deret spektrokimia $\\implies$ **Ligan Medan Lemah (*Weak Field*)**.
   - Celah energi lebih kecil daripada energi perpasangan elektron: $\\mathbf{\\Delta_o < P}$.
   - Elektron lebih memilih mengisi orbital $e_g$ terlebih dahulu sebelum berpasangan di orbital $t_{2g}$ $\\implies$ **Kompleks Spin Tinggi (*High Spin*)**.
   - Konfigurasi elektron: $\\mathbf{t_{2g}^4 e_g^2}$.
   - Jumlah elektron tak berpasangan: $n = 4 \\implies$ **Bersifat Paramagnetik** (ditarik medan magnet).
3. **Analisis Kompleks $[\\ce{Co(NH3)6}]^{3+}$:**
   - Ligan amonia ($\\ce{NH3}$): Terletak di sebelah kanan deret spektrokimia $\\implies$ **Ligan Medan Kuat (*Strong Field*)**.
   - Celah energi lebih besar daripada energi perpasangan elektron: $\\mathbf{\\Delta_o > P}$.
   - Seluruh elektron dipaksa berpasangan di orbital $t_{2g}$ sebelum mengisi orbital $e_g$ $\\implies$ **Kompleks Spin Rendah (*Low Spin*)**.
   - Konfigurasi elektron: $\\mathbf{t_{2g}^6 e_g^0}$.
   - Jumlah elektron tak berpasangan: $n = 0 \\implies$ **Bersifat Diamagnetik** (ditolak lemah oleh medan magnet).

Dengan demikian, pernyataan yang benar adalah opsi B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSP Kimia SMA',
    tags: ['deret-spektrokimia', 'spin-tinggi-spin-rendah', 'kompleks-kobalt', 'cft', 'sifat-magnetik'],
  },
  {
    id: 115018,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Distorsi Oktahedral Efek Jahn-Teller',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penyebab Distorsi Tetragonal Kompleks Tembaga(II) menurut Teorema Jahn-Teller',
    question_text: `Kristal tembaga(II) sulfat pentahidrat memiliki ion kompleks $[\\ce{Cu(H2O)6}]^{2+}$. Hasil difraksi sinar-X kristalografi menunjukkan bahwa keenam ikatan $\\ce{Cu-O}$ tidak memiliki panjang yang identik: terdapat empat ikatan ekuatorial pendek ($1{,}97\\text{ \\AA}$) dan dua ikatan aksial yang memanjang secara signifikan ($2{,}30\\text{ \\AA}$).

Fenomena pemanjangan ikatan aksial (*tetragonal distortion*) ini disebabkan oleh ....

A. Keberadaan ikatan hidrogen antarmolekul air pada bidang kristal  
B. Efek Jahn-Teller akibat pengisian orbital $e_g$ yang tidak simetris pada konfigurasi $d^9$ ($t_{2g}^6 e_g^3$), di mana satu elektron menempati orbital $d_{x^2-y^2}$ dan dua elektron menempati orbital $d_{z^2}$  
C. Ketidakmampuan ion tembaga(II) membentuk bilangan koordinasi enam secara stabil  
D. Penolakan elektrostatik dari ion sulfat terhadap ligan air di posisi aksial  
E. Hibridisasi orbital $sp^3d^2$ yang memiliki cacat geometri bola`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Teorema Jahn-Teller:**
   "Setiap molekul atau ion kompleks non-linear yang memiliki keadaan dasar elektronik terdegenerasi secara orbital (*orbitally degenerate*) bersifat tidak stabil secara termodinamika dan akan mengalami distorsi geometris untuk menurunkan simetri molekul serta menurunkan energi total sistem."
2. **Analisis Konfigurasi Elektron Ion $\\ce{Cu^2+}$:**
   - Tembaga ($Z = 29$) memiliki konfigurasi $[\\ce{Ar}] 4s^1 3d^{10}$.
   - Ion $\\ce{Cu^2+}$ berkonfigurasi $[\\ce{Ar}] 3d^9$.
   - Dalam medan oktahedral simetris: orbital $t_{2g}$ terisi penuh ($t_{2g}^6$), sedangkan orbital $e_g$ terisi tiga elektron ($e_g^3$).
3. **Asimetri Orbital $e_g$ ($d_{z^2}$ vs $d_{x^2-y^2}$):**
   - Keberadaan $3$ elektron pada $2$ orbital $e_g$ menghasilkan degenerasi orbital: salah satu orbital terisi berpasangan ($2e^-$) dan yang lain terisi tunggal ($1e^-$).
   - Pada distorsi yang paling umum (pemanjangan aksial / *z-out*): orbital $d_{z^2}$ terisi $2$ elektron dan orbital $d_{x^2-y^2}$ terisi $1$ elektron.
   - Karena kerapatan elektron di sepanjang sumbu $z$ lebih padat ($2e^-$), ligan air aksial mengalami tolakan elektrostatik yang jauh lebih kuat daripada ligan pada bidang $xy$.
   - Akibatnya, kedua ikatan $\\ce{Cu-O}$ pada sumbu aksial memanjang ($2{,}30\\text{ \\AA}$) sementara empat ikatan ekuatorial memendek ($1{,}97\\text{ \\AA}$).

Oleh karena itu, opsi B adalah penjelasan yang tepat secara mekanika kuantum dan anorganik.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['efek-jahn-teller', 'distorsi-tetragonal', 'tembaga-ii', 'degenerasi-orbital', 'kristalografi'],
  },
  {
    id: 115019,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Termodinamika Reduksi Logam & Diagram Ellingham',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Garis Termodinamika Diagram Ellingham untuk Reduksi Termal Oksida Logam',
    question_text: `Diagram Ellingham memplot perubahan energi bebas Gibbs standar pembentukan oksida ($\\Delta G^\\circ$) terhadap suhu mutlak ($T$).

Pernyataan berikut yang PALING TEPAT mengenai interpretasi Diagram Ellingham untuk proses pirometalurgi adalah ....

A. Suatu logam dapat mereduksi oksida logam lain jika garis $\\Delta G^\\circ$ oksida logam pereduksi berada di sebelah atas garis oksida logam yang direduksi  
B. Garis reaksi pembentukan karbon monoksida ($\\ce{2C(s) + O2(g) -> 2CO(g)}$) memiliki kemiringan negatif ($\\Delta S^\\circ > 0$), sehingga karbon menjadi reduktor yang semakin kuat pada suhu tinggi dan mampu mereduksi hampir semua oksida logam di atas suhu perpotongan garis  
C. Dekomposisi termal oksida logam menjadi logam bebas dan gas oksigen selalu berlangsung spontan pada suhu rendah di mana $\\Delta G^\\circ < 0$  
D. Garis pembentukan $\\ce{CO2}$ ($\\ce{C(s) + O2(g) -> CO2(g)}$) memiliki kemiringan sangat positif karena terjadi penurunan jumlah mol gas  
E. Logam dengan garis $\\Delta G^\\circ$ paling atas pada diagram merupakan logam yang paling sukar direduksi dari oksidanya`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Termodinamika Diagram Ellingham:**
   Hubungan energi bebas Gibbs:
   $$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$$
   Kemiringan (*slope*) garis pada plot $\\Delta G^\\circ$ vs $T$ ditentukan oleh nilai $(-\\Delta S^\\circ)$.
2. **Keunikan Reaksi Karbon Menghasilkan $\\ce{CO}$:**
   $$\\ce{2C(s) + O2(g) -> 2CO(g)}$$
   - Dari $1\\text{ mol}$ gas $\\ce{O2}$ dihasilkan $2\\text{ mol}$ gas $\\ce{CO}$.
   - Terjadi peningkatan entropi sistem secara signifikan: $\\Delta S^\\circ > 0$.
   - Karena $\\Delta S^\\circ > 0$, maka kemiringan $(-\\Delta S^\\circ)$ bernilai **negatif** (garis miring menurun ke kanan bawah).
   - Seiring bertambahnya suhu $T$, nilai $\\Delta G^\\circ$ pembentukan $\\ce{CO}$ menjadi semakin sangat negatif!
   - Akibatnya, pada suhu yang cukup tinggi, garis $\\ce{C -> CO}$ akan memotong ke bawah garis-garis oksida logam lainnya, memungkinkan karbon bertindak sebagai pereduksi universal yang spontan secara termodinamika. (Pilihan B benar).
3. **Analisis Opsi Lain:**
   - **A salah:** Logam pereduksi harus berada di sebelah **bawah** garis oksida yang direduksi agar $\\Delta G^\\circ_{\\text{reaksi}} < 0$.
   - **C salah:** Dekomposisi spontan terjadi jika $\\Delta G^\\circ > 0$ untuk pembentukan (yaitu garis berada di atas sumbu $\\Delta G^\circ = 0$).
   - **D salah:** Pembentukan $\\ce{CO2}$ memiliki $\\Delta n_{\\text{gas}} = 0$, sehingga $\\Delta S^\\circ \\approx 0$ dan garisnya hampir mendatar horizontal.
   - **E salah:** Logam di garis paling atas memiliki ikatan oksida paling lemah sehingga justru paling mudah direduksi (misal $\\ce{Ag2O, HgO}$).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['diagram-ellingham', 'pirometalurgi', 'termodinamika-oksida', 'energi-bebas-gibbs', 'reduktor-karbon'],
  },
  {
    id: 115020,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Kestabilan Termal Garam Karbonat Golongan IIA',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Rasionalisasi Polarisasi Kation Fajans terhadap Suhu Dekomposisi Karbonat IIA',
    question_text: `Garam karbonat logam alkali tanah mengalami dekomposisi termal menjadi oksida logam dan gas karbon dioksida:
$$\\ce{MCO3(s) -> MO(s) + CO2(g)}$$

Data suhu dekomposisi teramati:
$$\\ce{MgCO3} (350^\\circ\\text{C}) < \\ce{CaCO3} (840^\\circ\\text{C}) < \\ce{SrCO3} (1100^\\circ\\text{C}) < \\ce{BaCO3} (1360^\\circ\\text{C})$$

Penjelasan ilmiah yang paling tepat berdasarkan kaidah polarisasi Fajans adalah ....

A. Jari-jari kation $\\ce{Ba^2+}$ paling kecil sehingga energi kisi $\\ce{BaCO3}$ paling rendah  
B. Kation $\\ce{Mg^2+}$ memiliki kerapatan muatan ($\\frac{q}{r}$) tertinggi, sehingga sangat kuat mempolarisasi awan elektron ion karbonat ($\\ce{CO3^2-}$), melemahkan ikatan $\\ce{C-O}$, dan memudahkan pelepasan gas $\\ce{CO2}$ pada suhu yang jauh lebih rendah  
C. Ikatan dalam $\\ce{BaCO3}$ lebih bersifat kovalen daripada $\\ce{MgCO3}$, sehingga diperlukan suhu yang lebih tinggi untuk memutusnya  
D. Kation $\\ce{Ba^2+}$ memiliki energi ionisasi yang paling tinggi di antara kation golongan IIA  
E. Kelarutan $\\ce{BaCO3}$ di air paling besar, sehingga kestabilan termalnya di udara paling tinggi`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Polarisasi Fajans:**
   - Kemampuan suatu kation mempolarisasi (mendistorsi awan elektron) anion di dekatnya berbanding lurus dengan kerapatan muatannya:
     $$\\text{Daya Polarisasi} \\propto \\frac{\\text{Muatan Kation } (q)}{\\text{Jari-jari Kation } (r)}$$
2. **Perbandingan Kation Golongan IIA:**
   - Semua kation memiliki muatan $+2$ ($\\ce{Mg^2+, Ca^2+, Sr^2+, Ba^2+}$).
   - Jari-jari kation bertambah dari atas ke bawah:
     $$r(\\ce{Mg^2+}) = 72\\text{ pm} < r(\\ce{Ca^2+}) = 100\\text{ pm} < r(\\ce{Sr^2+}) = 118\\text{ pm} < r(\\ce{Ba^2+}) = 135\\text{ pm}$$
   - Akibatnya, kation $\\ce{Mg^2+}$ memiliki kerapatan muatan tertinggi dan medan elektrostatik paling pekat.
3. **Mekanisme Dekomposisi Karbonat:**
   - Kation $\\ce{Mg^2+}$ menarik kuat awan elektron atom oksigen pada anion karbonat $\\ce{CO3^2-}$.
   - Tarikan elektrostatik yang intensif ini menyebabkan distorsi kuat pada anion dan melemahkan ikatan kovalen $\\ce{C-O}$ di dalam gugus karbonat.
   - Akibatnya, ikatan $\\ce{C-O}$ putus dan melepaskan molekul $\\ce{CO2}$ yang stabil pada suhu relatif rendah ($350^\\circ\\text{C}$).
   - Sebaliknya, kation $\\ce{Ba^2+}$ berukuran besar dengan kerapatan muatan rendah hampir tidak mempolarisasi ion karbonat, sehingga kisi kristal $\\ce{BaCO3}$ sangat stabil dan baru terurai pada suhu sangat tinggi ($1360^\\circ\\text{C}$).

Dengan demikian, penjelasan yang tepat adalah opsi B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSP / OSN Kimia SMA',
    tags: ['kestabilan-termal', 'karbonat-alkali-tanah', 'aturan-fajans', 'polarisasi-kation', 'energi-kisi'],
  },
  {
    id: 115021,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Sintesis, Hidrolisis, & Struktur Senyawa Fluorida Gas Mulia',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Sintesis Terkendali, Hidrolisis Eksplosif, dan Stereokimia Fluorida Xenon',
    question_text: `Senyawa gas mulia xenon fluorida ($\\ce{XeF2, XeF4, XeF6}$) disintesis melalui reaksi langsung gas xenon dengan gas fluorin di dalam bejana nikel tertutup pada variasi suhu dan rasio mol.

Jawablah pertanyaan bertingkat berikut terkait sintesis, hidrolisis, dan stereokimia senyawa xenon:`,
    expected_final_answer: 'a) Sintesis: Xe + F2 -> XeF2 (rasio mol Xe berlebih 2:1 atau 1:1, ~400 °C); Xe + 2F2 -> XeF4 (rasio mol 1:5, ~400 °C, 6 atm); Xe + 3F2 -> XeF6 (rasio mol F2 berlebih 1:20, ~300 °C, 50-60 atm). Hidrolisis sempurna XeF6: XeF6(s) + 3H2O(l) -> XeO3(s) + 6HF(aq); b) XeF6 memiliki 8 elektron valensi Xe + 6 elektron F = 14 elektron valensi (6 PEI dan 1 PEB). Bilangan sterik = 7 (tipe AX6E). Geometri molekul: oktahedral terdistorsi (distorted octahedral). Senyawa fluorida xenon merupakan oksidator dahsyat karena ikatan Xe-F relatif lemah dan kecenderungan termodinamika luar biasa kuat dari Xe untuk kembali ke keadaan monoatomik gas mulia bebas yang stabil secara konfigurasi oktet penuh.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan reaksi sintesis XeF2, XeF4, dan XeF6 lengkap dengan kondisi rasio stoikiometri reaktan (3.0 poin: 1.0 poin tiap reaksi).
  2. Menuliskan reaksi hidrolisis sempurna XeF6 menghasilkan padatan kristal putih eksplosif XeO3:
     XeF6 + 3H2O -> XeO3 + 6HF (2.0 poin).
- Sub-soal b (5.0 poin):
  1. Menentukan bilangan sterik (7), PEI (6), PEB (1), dan tipe AX6E dengan geometri oktahedral terdistorsi (3.0 poin).
  2. Menjelaskan faktor termodinamika daya oksidator kuat fluorida xenon (pelepasan energi kisi gas mulia bebas dan tingginya elektronegativitas fluorin) (2.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi sintesis pembuatan $\\ce{XeF2}$, $\\ce{XeF4}$, dan $\\ce{XeF6}$ dari gas $\\ce{Xe}$ dan $\\ce{F2}$ beserta rasio mol reaktan yang digunakan, serta tuliskan reaksi hidrolisis sempurna $\\ce{XeF6}$ menghasilkan padatan kristal eksplosif $\\ce{XeO3}$!`,
        points: 5.0,
        rubric: 'Menuliskan 3 reaksi pembentukan xenon fluorida dengan rasio mol yang benar (3.0 poin) dan reaksi hidrolisis XeF6 + 3H2O -> XeO3 + 6HF (2.0 poin).',
        expected_answer: 'Xe + F2 -> XeF2 (rasio 2:1); Xe + 2F2 -> XeF4 (rasio 1:5); Xe + 3F2 -> XeF6 (rasio 1:20). Hidrolisis: XeF6 + 3H2O -> XeO3 + 6HF.',
      },
      {
        label: 'b',
        question_text: `Tentukan bilangan sterik, jumlah PEI, jumlah PEB, dan geometri molekul dari $\\ce{XeF6}$ menurut teori VSEPR, serta jelaskan mengapa senyawa fluorida xenon merupakan zat pengoksidasi dan zat fluorinasi yang sangat reaktif!`,
        points: 5.0,
        rubric: 'Menentukan bilangan sterik 7, 6 PEI, 1 PEB, geometri oktahedral terdistorsi (3.0 poin) dan menjelaskan daya oksidasi kuat akibat stabilitas gas Xe bebas (2.0 poin).',
        expected_answer: 'Bilangan sterik 7 (6 PEI, 1 PEB, tipe AX6E), bentuk molekul oktahedral terdistorsi. Oksidator kuat karena kecenderungan termodinamika kuat Xe tereduksi kembali menjadi gas mulia bebas.',
      },
    ],
    solution_framework_template: `1. Reaksi Sintesis dan Hidrolisis Fluorida Xenon:
• Persamaan reaksi sintesis XeF2 (rasio Xe berlebih): ....
• Persamaan reaksi sintesis XeF4 (rasio F2 menengah): ....
• Persamaan reaksi sintesis XeF6 (rasio F2 ekses tinggi dan tekanan tinggi): ....
• Persamaan reaksi hidrolisis tuntas XeF6 menghasilkan senyawa oksida eksplosif XeO3: ....

2. Stereokimia VSEPR dan Termodinamika Redoks XeF6:
• Perhitungan pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB) pada Xe: ....
• Bilangan sterik dan deskripsi geometri oktahedral terdistorsi: ....
• Analisis termodinamika kecenderungan pelepasan F2 dan pembentukan gas Xe bebas: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['senyawa-xenon', 'gas-mulia', 'oktahedral-terdistorsi', 'hidrolisis-xeo3', 'daya-oksidator'],
  },
  {
    id: 115022,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Analisis Spektroskopi Medan Kristal & Momen Magnetik Kompleks Besi',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi CFSE dan Prediksi Magnetik Kompleks Oktahedral d6 Besi(II)',
    question_text: `Dua kompleks oktahedral besi(II) ($Z_{\\ce{Fe}} = 26$), yaitu ion heksaaquabesi(II) $[\\ce{Fe(H2O)6}]^{2+}$ dan ion heksasianoferat(II) $[\\ce{Fe(CN)6}]^{4-}$, memperlihatkan sifat elektronik dan magnetik yang sangat bertolak belakang akibat perbedaan kekuatan medan ligan.

Jawablah pertanyaan berikut terkait analisis Teori Medan Kristal (CFT) kedua kompleks:`,
    expected_final_answer: 'a) Konfigurasi elektron dan CFSE: (1) [Fe(H2O)6]^2+ (ligan medan lemah H2O, Delta_o < P, spin tinggi): konfigurasi t2g^4 eg^2, CFSE = [4(-0,4) + 2(+0,6)] Delta_o = -0,4 Delta_o; (2) [Fe(CN)6]^4- (ligan medan kuat CN-, Delta_o > P, spin rendah): konfigurasi t2g^6 eg^0, CFSE = [6(-0,4) + 0] Delta_o + 2P = -2,4 Delta_o + 2P; b) Momen magnetik spin murni: (1) [Fe(H2O)6]^2+ memiliki n = 4 elektron tak berpasangan, mu_s = sqrt(4(6)) = sqrt(24) approx 4,90 BM (paramagnetik); (2) [Fe(CN)6]^4- memiliki n = 0 elektron tak berpasangan, mu_s = 0 BM (diamagnetik). Pengukuran kerentanan magnetik (magnetic susceptibility via Neraca Gouy) mengonfirmasi bahwa kompleks sianida ditolak medan magnet (spin rendah) sedangkan kompleks aqua ditarik kuat oleh medan magnet (spin tinggi).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menentukan konfigurasi elektron t2g^4 eg^2 dan menghitung CFSE = -0,4 Delta_o untuk [Fe(H2O)6]^2+ (2.5 poin).
  2. Menentukan konfigurasi elektron t2g^6 eg^0 dan menghitung CFSE = -2,4 Delta_o + 2P untuk [Fe(CN)6]^4- (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung mu_s = sqrt(24) approx 4,90 BM untuk [Fe(H2O)6]^2+ dan mu_s = 0 BM untuk [Fe(CN)6]^4- (3.0 poin).
  2. Menjelaskan penerapan magnetometri (neraca Gouy/SQUID) dalam mengukur kerentanan magnetik untuk memvalidasi pembelahan medan kristal (2.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Gambarkan susunan pengisian elektron pada orbital $t_{2g}$ dan $e_g$ serta hitung nilai *Crystal Field Stabilization Energy* (CFSE) dalam satuan $\\Delta_o$ dan energi perpasangan $P$ untuk kompleks $[\\ce{Fe(H2O)6}]^{2+}$ dan $[\\ce{Fe(CN)6}]^{4-}$!`,
        points: 5.0,
        rubric: 'Menentukan konfigurasi t2g^4 eg^2 dan CFSE = -0,4 Delta_o (2.5 poin); konfigurasi t2g^6 eg^0 dan CFSE = -2,4 Delta_o + 2P (2.5 poin).',
        expected_answer: '[Fe(H2O)6]^2+: t2g^4 eg^2, CFSE = -0,4 Delta_o; [Fe(CN)6]^4-: t2g^6 eg^0, CFSE = -2,4 Delta_o + 2P.',
      },
      {
        label: 'b',
        question_text: `Hitung nilai momen magnetik spin murni ($\\mu_s$) dalam satuan Bohr Magneton (BM) untuk kedua kompleks tersebut, serta jelaskan bagaimana hasil pengukuran magnetometri dapat membuktikan kekuatan medan ligan!`,
        points: 5.0,
        rubric: 'Menghitung mu_s = 4,90 BM untuk kompleks aqua dan 0 BM untuk kompleks sianida (3.0 poin); menjelaskan validasi kekuatan medan via penentuan paramagnetik vs diamagnetik (2.0 poin).',
        expected_answer: '[Fe(H2O)6]^2+: mu_s = sqrt(24) approx 4,90 BM (paramagnetik); [Fe(CN)6]^4-: mu_s = 0 BM (diamagnetik). Pengukuran magnetometri menunjukkan kompleks sianida tidak memiliki spin tak berpasangan.',
      },
    ],
    solution_framework_template: `1. Konfigurasi Elektron Oktahedral d6 dan Perhitungan CFSE:
• Konfigurasi dasar Fe2+ (d6) dan diagram tingkat energi t2g (-0,4 Delta_o) vs eg (+0,6 Delta_o): ....
• Kompleks [Fe(H2O)6]2+ (medan lemah): pengisian elektron dan rumus CFSE: ....
• Kompleks [Fe(CN)6]4- (medan kuat): pengisian elektron dan koreksi energi perpasangan (pairing energy P): ....

2. Perhitungan Momen Magnetik Spin dan Pengukuran Eksperimental:
• Penentuan jumlah elektron tak berpasangan (n) pada masing-masing kompleks: ....
• Perhitungan mu_s = sqrt[n(n+2)] BM: ....
• Prinsip pengukuran kerentanan magnetik (Neraca Gouy) dalam membedakan spin tinggi vs rendah: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['cfse', 'teori-medan-kristal', 'momen-magnetik', 'kompleks-besi', 'spin-tinggi-rendah'],
  },
  {
    id: 115023,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Ekstraksi Logam Titran Tinggi: Metalurgi Titanium Proses Kroll',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kimia Ekstraksi Pirometalurgi Titanium Menggunakan Proses Kroll',
    question_text: `Titanium merupakan logam transisi berkekuatan mekanik sangat tinggi, bermassa jenis rendah, dan tahan korosi ekstrem. Ekstraksi titanium dari bijih rutil ($\\ce{TiO2}$) tidak dapat dilakukan menggunakan reduksi karbon langsung karena akan membentuk titanium karbida ($\\ce{TiC}$) yang rapuh. Sebagai gantinya, digunakan **Proses Kroll**.

Jawablah pertanyaan berikut terkait tahapan kimia Proses Kroll:`,
    expected_final_answer: 'a) Reaksi klorinasi karbotermal: TiO2(s) + 2C(s) + 2Cl2(g) -> TiCl4(l) + 2CO(g) (pada suhu ~900 °C). Pemisahan TiCl4 dari FeCl3: TiCl4 berupa cairan kovalen dengan titik didih rendah (136 °C), sedangkan FeCl3 memiliki titik sublimasi/didih jauh lebih tinggi (315 °C), sehingga pemurnian dilakukan dengan distilasi fraksionasi bertingkat; b) Reaksi reduksi Proses Kroll: TiCl4(g) + 2Mg(l) -> Ti(s) + 2MgCl2(l) (pada suhu ~850-900 °C dalam reaktor baja). Gas udara (O2 dan N2) harus disingkirkan dan diganti gas argon inert karena pada suhu tinggi titanium sangat reaktif bereaksi dengan O2 dan N2 membentuk oksida dan nitrida interstitial (TiO2, TiN) yang membuat logam titanium menjadi sangat getas/rapuh (*embrittlement*).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan persamaan reaksi klorinasi karbotermal:
     TiO2 + 2C + 2Cl2 -> TiCl4 + 2CO (3.0 poin).
  2. Menjelaskan pemisahan cairan TiCl4 (titik didih 136 °C) dari FeCl3 pengotor melalui distilasi fraksionasi (2.0 poin).
- Sub-soal b (5.0 poin):
  1. Menuliskan reaksi reduksi Kroll menggunakan lelehan magnesium:
     TiCl4 + 2Mg -> Ti + 2MgCl2 (2.5 poin).
  2. Menjelaskan alasan penggunaan atmosfer gas argon murni untuk mencegah penggetasan (*embrittlement*) oleh oksigen dan nitrogen udara (2.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi klorinasi karbotermal bijih rutil ($\ce{TiO2}$) dengan kokas dan gas $\ce{Cl2}$ membentuk cairan $\ce{TiCl4}$, serta jelaskan bagaimana $\ce{TiCl4}$ dipisahkan dari pengotor klorida besi ($\ce{FeCl3}$) melalui perbedaan titik didih distilasi fraksionasi!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi klorinasi TiO2 + 2C + 2Cl2 -> TiCl4 + 2CO (3.0 poin) dan menjelaskan distilasi fraksionasi berdasarkan titik didih TiCl4 (136 °C) vs FeCl3 (2.0 poin).',
        expected_answer: 'TiO2 + 2C + 2Cl2 -> TiCl4 + 2CO. TiCl4 memiliki titik didih 136 °C sehingga mudah dimurnikan dari FeCl3 (titik didih 315 °C) via distilasi fraksionasi.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi reduksi $\ce{TiCl4}$ oleh lelehan logam magnesium (Proses Kroll) menghasilkan spons titanium, serta jelaskan alasan mutlak mengapa reaktor harus dialiri atmosfer gas argon inert dan bebas dari gas oksigen maupun nitrogen!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi TiCl4 + 2Mg -> Ti + 2MgCl2 (2.5 poin) dan menjelaskan pencegahan pembentukan TiO2/TiN yang menyebabkan getas (embrittlement) (2.5 poin).',
        expected_answer: 'TiCl4 + 2Mg -> Ti + 2MgCl2. Atmosfer argon inert mutlak diperlukan karena titanium panas bereaksi hebat dengan O2 dan N2 membentuk senyawa interstisial rapuh (getas).',
      },
    ],
    solution_framework_template: `1. Klorinasi Karbotermal dan Distilasi Fraksionasi:
• Persamaan reaksi konversi TiO2 menjadi cairan titanium tetraklorida TiCl4: ....
• Perbandingan titik didih kovalen TiCl4 (136°C) vs klorida pengotor besi: ....
• Prinsip pemurnian cairan fraksionasi: ....

2. Reduksi Kroll dan Proteksi Atmosfer Inert:
• Persamaan reaksi reduksi TiCl4 oleh logam cair magnesium Mg pada 850°C: ....
• Pemisahan produk samping MgCl2 lelehan dari spons titanium: ....
• Reaktivitas titanium suhu tinggi terhadap N2 dan O2 (mekanisme penggetasan kisi): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['proses-kroll', 'metalurgi-titanium', 'distilasi-ticl4', 'reduksi-magnesium', 'gas-argon'],
  },
  {
    id: 115024,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Dilema Amfoterisme & Kerapatan Muatan Kation (Aturan Fajans)',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Rasio Polarisasi Kation Fajans dan Hubungan Diagonal Berilium-Aluminium',
    question_text: `Sifat ikatan dan karakter asam-basa hidroksida unsur golongan utama sangat ditentukan oleh kerapatan muatan kation (daya polarisasi $\\frac{q}{r}$).

Diberikan data jari-jari ion kation:
- $\\ce{Na+} = 102\\text{ pm}$
- $\\ce{Mg^2+} = 72\\text{ pm}$
- $\\ce{Al^3+} = 53{,}5\\text{ pm}$
- $\\ce{Si^4+} = 40\\text{ pm}$
- $\\ce{Be^2+} = 31\\text{ pm}$

Jawablah pertanyaan berikut terkait analisis polarisasi dan hubungan diagonal:`,
    expected_final_answer: 'a) Rasio kerapatan muatan (q/r): Na+ = 1/102 = 0,0098; Mg2+ = 2/72 = 0,0278; Al3+ = 3/53,5 = 0,0561; Si4+ = 4/40 = 0,1000. Peningkatan pesat rasio q/r menyebabkan kation semakin kuat menarik awan elektron ion oksida O^2-, sehingga derajat kovalensi ikatan meningkat tajam dari ionik murni (Na2O, MgO) menjadi kovalen berjejaring raksasa (SiO2). Pada Al2O3, derajat kovalensi berada pada ambang batas seimbang sehingga menunjukkan sifat amfoter; b) Rasio q/r Be2+ = 2/31 = 0,0645 sangat dekat dengan Al3+ (0,0561), menjelaskan fenomena "hubungan diagonal". Tiga kesamaan sifat kimia Be dan Al: (1) Keduanya membentuk hidroksida amfoter (Be(OH)2 dan Al(OH)3) yang larut dalam asam maupun basa kuat membentuk ion [Be(OH)4]^2- dan [Al(OH)4]^-; (2) Klorida anhidratnya (BeCl2 dan AlCl3) bersifat kovalen, mudah menyublim, dan membentuk struktur dimer berikatan jembatan klor (BeCl2 rantai polimer/dimer dan Al2Cl6); (3) Logam keduanya terpassivasi oleh lapisan oksida tipis kedap asam nitrat pekat dingin.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menghitung rasio q/r untuk Na+ (0.0098), Mg2+ (0.0278), Al3+ (0.0561), dan Si4+ (0.1000) (2.5 poin).
  2. Menjelaskan korelasi kenaikan rasio q/r terhadap polarisasi anion oksida, peningkatan karakter kovalen, dan kemunculan sifat amfoter pada Al (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung rasio q/r Be2+ (0.0645) dan menghubungkannya dengan konsep hubungan diagonal periodik dengan Al3+ (2.0 poin).
  2. Menjelaskan tiga kesamaan sifat kimia konkret antara Be dan Al (amfoterisme hidroksida, kovalensi klorida dimer, dan pasivasi oksida) (3.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitung rasio muatan terhadap jari-jari kation ($\frac{q}{r}$) untuk ion $\\ce{Na+}, \\ce{Mg^2+}, \\ce{Al^3+},$ dan $\\ce{Si^4+}$, serta jelaskan bagaimana peningkatan rasio ini mengubah sifat ikatan oksida dari ionik murni menjadi kovalen berjejaring!`,
        points: 5.0,
        rubric: 'Menghitung nilai q/r keempat kation dengan tepat (2.5 poin) dan menjelaskan transisi ikatan ionik ke kovalen berjejaring via polarisasi Fajans (2.5 poin).',
        expected_answer: 'Rasio q/r: Na+ = 0,0098; Mg2+ = 0,0278; Al3+ = 0,0561; Si4+ = 0,1000. Peningkatan kerapatan muatan memperkuat tarikan awan elektron anion, mengubah ikatan dari ionik (Na2O) menjadi kovalen berjejaring (SiO2).',
      },
      {
        label: 'b',
        question_text: `Kation $\\ce{Be^2+}$ memiliki jari-jari ion $31\\text{ pm}$ dengan rasio $\\frac{q}{r} \\approx 0{,}0645$, yang sangat mendekati rasio ion $\\ce{Al^3+}$. Berdasarkan konsep "hubungan diagonal", jelaskan tiga kesamaan sifat kimia antara senyawa berilium dan aluminium!`,
        points: 5.0,
        rubric: 'Menghubungkan rasio q/r Be2+ dengan Al3+ (2.0 poin) dan menyebutkan 3 kesamaan sifat: hidroksida amfoter, klorida kovalen dimerik, dan pasivasi oksida (3.0 poin).',
        expected_answer: 'Kesamaan q/r memicu hubungan diagonal. 3 sifat sama: (1) Hidroksida bersifat amfoter; (2) Klorida anhidrat bersifat kovalen dan membentuk dimer (Al2Cl6); (3) Membentuk lapisan oksida pasif tahan asam nitrat.',
      },
    ],
    solution_framework_template: `1. Kalkulasi Rasio Kerapatan Muatan Kation Periode 3:
• Nilai q/r Na+, Mg2+, Al3+, dan Si4+: ....
• Pengaruh kenaikan q/r terhadap daya polarisasi kation (Aturan Fajans): ....
• Transisi karakter ikatan ionik -> amfoter -> kovalen jejaring intan: ....

2. Hubungan Diagonal Berilium dan Aluminium:
• Perbandingan rasio polarisasi Be2+ vs Al3+: ....
• Kesamaan perilaku amfoter Be(OH)2 dan Al(OH)3 dalam alkali: ....
• Kesamaan sifat kovalen klorida (pembentukan dimer klor): ....
• Fenomena pasivasi permukaan logam terhadap oksidator kuat: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['aturan-fajans', 'hubungan-diagonal', 'kerapatan-muatan', 'berilium-aluminium', 'amfoterisme'],
  },
  {
    id: 115025,
    sma_topic_number: 15,
    sma_topic_id: 115,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Mekanisme Autoredoks Halogen & Stoikiometri Pemutih Hipoklorit',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Termodinamika Disproporsionasi Klorin dan Analisis Iodometri Kadar Pemutih',
    question_text: `Gas klorin ($\\ce{Cl2}$) mengalami reaksi disproporsionasi (autoredoks) di dalam larutan basa kuat dengan produk yang sangat bergantung pada suhu reaksi. Produk ion hipoklorit ($\\ce{ClO-}$) dimanfaatkan secara komersial sebagai bahan aktif pemutih dan disinfektan pakaian.

Jawablah pertanyaan berikut terkait disproporsionasi klorin dan analisis kuantitatifnya:`,
    expected_final_answer: 'a) Reaksi disproporsionasi: (1) Suhu dingin (~15 °C): Cl2(g) + 2NaOH(aq) -> NaCl(aq) + NaOCl(aq) + H2O(l) (Biloks Cl: 0 -> -1 dan +1); (2) Suhu panas (> 70 °C): 3Cl2(g) + 6NaOH(aq) -> 5NaCl(aq) + NaClO3(aq) + 3H2O(l) (Biloks Cl: 0 -> -1 dan +5); b) Analisis kuantitatif iodometri: (1) mol S2O3^2- = 0,100 M x 0,04000 L = 0,00400 mol. Berdasarkan stoikiometri: mol I2 = 0,5 x mol S2O3^2- = 0,00200 mol. Dari reaksi pertama: mol ClO- = mol I2 = 0,00200 mol NaOCl; (2) Massa NaOCl = 0,00200 mol x 74,5 g/mol = 0,149 gram. Persen massa NaOCl = (0,149 g / 5,00 g) x 100% = 2,98% (w/w).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan reaksi disproporsionasi dalam larutan basa dingin menghasilkan NaOCl dan NaCl beserta perubahan biloks Cl (0 -> -1, +1) (2.5 poin).
  2. Menuliskan reaksi disproporsionasi dalam larutan basa panas menghasilkan NaClO3 dan NaCl beserta perubahan biloks Cl (0 -> -1, +5) (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung mol S2O3^2- (0.00400 mol), mol I2 (0.00200 mol), dan mol NaOCl (0.00200 mol) (2.5 poin).
  2. Menghitung massa NaOCl (0.149 g) dan kadar persen massa (% w/w) = 2.98% (2.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi disproporsionasi gas klorin ($\ce{Cl2}$) dalam larutan $\ce{NaOH}$ dingin ($15^\circ\text{C}$) dan dalam larutan $\ce{NaOH}$ panas ($> 70^\circ\text{C}$), lengkap dengan perubahan bilangan oksidasi atom klorin pada masing-masing reaksi!`,
        points: 5.0,
        rubric: 'Menuliskan reaksi dingin Cl2 + 2OH- -> Cl- + ClO- + H2O biloks 0 -> -1, +1 (2.5 poin); reaksi panas 3Cl2 + 6OH- -> 5Cl- + ClO3- + 3H2O biloks 0 -> -1, +5 (2.5 poin).',
        expected_answer: 'Dingin: Cl2 + 2NaOH -> NaCl + NaOCl + H2O (biloks Cl: 0 menjadi -1 dan +1); Panas: 3Cl2 + 6NaOH -> 5NaCl + NaClO3 + 3H2O (biloks Cl: 0 menjadi -1 dan +5).',
      },
      {
        label: 'b',
        question_text: `Sebanyak $5{,}00\\text{ gram}$ sampel pemutih dianalisis secara iodometri. Jika iodin yang dibebaskan tepat bereaksi dengan $40{,}00\\text{ mL}$ larutan $\\ce{Na2S2O3 } 0{,}100\\text{ M}$, hitung jumlah mol $\\ce{NaOCl}$ dalam sampel dan tentukan persen massa ($\\%\\text{ w/w}$) $\\ce{NaOCl}$ tersebut ($M_r\\ \\ce{NaOCl} = 74{,}5\\text{ g/mol}$)!`,
        points: 5.0,
        rubric: 'Menghitung mol NaOCl = 0,00200 mol (2.5 poin) dan persen massa = 2,98% (2.5 poin).',
        expected_answer: 'mol NaOCl = 0,00200 mol; massa NaOCl = 0,149 g; persen massa = (0,149 / 5,00) x 100% = 2,98%.',
      },
    ],
    solution_framework_template: `1. Reaksi Autoredoks Suhu Rendah vs Suhu Tinggi:
• Persamaan reaksi disproporsionasi klorin suasana basa dingin (15°C): ....
• Perubahan biloks atom klorin (reduksi dan oksidasi): ....
• Persamaan reaksi disproporsionasi klorin suasana basa panas (>70°C): ....
• Penjelasan kestabilan ion klorat ClO3- pada temperatur tinggi: ....

2. Kalkulasi Titrasi Redoks Iodometri Kadar NaOCl:
• Perhitungan mol natrium tiosulfat: n(S2O3^2-) = M x V: ....
• Relasi stoikiometri reaksi titrasi I2 + 2S2O3^2- -> 2I- + S4O6^2-: ....
• Relasi stoikiometri reaksi pembebasan iodin ClO- + 2I- + 2H+ -> Cl- + I2 + H2O: ....
• Perhitungan massa analit m(NaOCl) = n x Mr: ....
• Perhitungan persen massa: % (w/w) = [m(NaOCl) / m(sampel)] x 100%: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['disproporsionasi', 'klorin', 'titrasi-iodometri', 'kadar-pemutih', 'hipoklorit-klorat'],
  },
];
