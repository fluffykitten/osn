/**
 * smaQuestionsTopic6Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase E & OSN Pilar 1)
 * 
 * BATCH 6: Hakikat Kimia, Metode Ilmiah & Keselamatan Kerja Lab (Topik 1 SMA / Modul 101)
 * Distribusi Standar:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian)  [ID 101001 - 101025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian) [ID 101001 - 101025]
 * - 40% Sulit (10 Soal: 5 MCQ, 5 Uraian)  [ID 101001 - 101025]
 * Total: 25 Butir Soal (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_6_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 101001 - 101025)
  // =========================================================================
  {
    id: 101001,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Klasifikasi Materi: Zat Tunggal vs Campuran',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Klasifikasi Materi Berdasarkan Komposisi Kimia dan Fasa',
    question_text: `Perhatikan beberapa materi yang sering dijumpai dalam kehidupan sehari-hari dan laboratorium berikut:
(1) Gas oksigen murni ($\\ce{O2}$) di dalam tabung medis
(2) Larutan gula pasir murni (sukrosa, $\\ce{C12H22O11}$ dilarutkan dalam air)
(3) Udara bersih bebas debu di atmosfer
(4) Padatan kristal garam dapur murni ($\\ce{NaCl}$)
(5) Air susu sapi murni kemasan

Berdasarkan klasifikasi materi secara kimiawi, kelompok materi yang tergolong ke dalam **zat tunggal (unsur atau senyawa)** adalah ....

A. (1) dan (3)  
B. (1) dan (4)  
C. (2) dan (4)  
D. (3) dan (5)  
E. (2) dan (5)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Zat Tunggal (Pure Substance):**
   Materi yang memiliki komposisi kimia yang tetap dan sifat fisika-kimia yang khas dan seragam di seluruh sampelnya. Terdiri atas:
   - **Unsur:** Tersusun atas satu jenis atom (misal: gas oksigen $\\ce{O2}$).
   - **Senyawa:** Tersusun atas dua jenis unsur atau lebih yang terikat secara kimiawi dengan perbandingan massa tetap (misal: natrium klorida murni $\\ce{NaCl}$).

2. **Analisis Setiap Pilihan Materi:**
   - (1) **Gas oksigen ($\\ce{O2}$):** Zat tunggal (unsur diatomik).
   - (2) **Larutan gula pasir:** Campuran homogen (larutan sukrosa dalam air).
   - (3) **Udara bersih:** Campuran homogen berbagai gas (sekitar $78\\%\\ \\ce{N2}$, $21\\%\\ \\ce{O2}$, $0{,}93\\%\\ \\ce{Ar}$, $0{,}04\\%\\ \\ce{CO2}$).
   - (4) **Garam dapur murni ($\\ce{NaCl}$):** Zat tunggal (senyawa ionik).
   - (5) **Air susu:** Campuran heterogen fasa koloid (emulsi lemak dalam air).

Dengan demikian, materi yang tergolong zat tunggal adalah **(1) dan (4)**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E (Kelas 10)',
    tags: ['hakikat-ilmu-kimia', 'klasifikasi-materi', 'unsur-senyawa-campuran'],
  },
  {
    id: 101002,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Perubahan Fisika vs Perubahan Kimia',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Perubahan Fisika dan Perubahan Kimia dalam Kehidupan',
    question_text: `Perhatikan beberapa peristiwa perubahan materi berikut:
(1) Pelarutan kristal garam dapur ke dalam segelas air putih
(2) Perkaratan paku besi di luar ruangan akibat paparan air dan udara
(3) Pembakaran sumbu lilin parafin yang menghasilkan nyala dan asap
(4) Pengembunan uap air pada dinding luar gelas yang berisi es batu
(5) Fermentasi air nira atau singkong menjadi bioetanol

Kelompok peristiwa yang secara tepat diklasifikasikan sebagai **perubahan kimia** adalah ....

A. (1), (2), dan (4)  
B. (1), (3), dan (5)  
C. (2), (3), dan (5)  
D. (2), (4), dan (5)  
E. (3), (4), dan (5)`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Pembedaan Karakteristik Perubahan:**
   - **Perubahan Fisika:** Perubahan wujud atau bentuk materi yang **tidak menghasilkan zat baru**; komposisi molekuler materi tetap sama dan perubahannya umumnya dapat dibalik secara fisika.
   - **Perubahan Kimia (Reaksi Kimia):** Perubahan yang **menghasilkan zat baru** dengan sifat kimia yang berbeda akibat pemutusan dan pembentukan ikatan kimia; disertai ciri-ciri khas seperti perubahan warna, pelepasan gas, pembentukan endapan, atau perubahan entalpi kalor.

2. **Analisis Setiap Peristiwa:**
   - (1) **Pelarutan garam dapur:** Perubahan fisika (garam dapat diperoleh kembali melalui penguapan air pelarut).
   - (2) **Perkaratan paku besi:** Perubahan kimia (terbentuk senyawa baru karat besi hidrat: $\\ce{4Fe + 3O2 + xH2O -> 2Fe2O3 . xH2O}$).
   - (3) **Pembakaran sumbu lilin:** Perubahan kimia (terjadi reaksi oksidasi hidrokarbon menghasilkan gas $\\ce{CO2}$ dan uap $\\ce{H2O}$).
   - (4) **Pengembunan uap air:** Perubahan fisika (perubahan fasa gas ke cair: $\\ce{H2O(g) -> H2O(l)}$).
   - (5) **Fermentasi singkong:** Perubahan kimia (glukosa diuraikan enzimatis oleh khamir menjadi etanol dan karbon dioksida: $\\ce{C6H12O6 -> 2C2H5OH + 2CO2}$).

Peristiwa yang merupakan perubahan kimia adalah **(2), (3), dan (5)**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Harian Kimia SMA Fase E (Kelas 10)',
    tags: ['perubahan-fisika-kimia', 'reaksi-kimia', 'fermentasi', 'korosi'],
  },
  {
    id: 101003,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Simbol Bahaya Laboratorium (GHS) & K3',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Interpretasi Piktogram Simbol Bahaya GHS pada Wadah Reagen Kimia',
    question_text: `Di laboratorium kimia, seorang siswa menemukan botol reagen pekat yang memuat label piktogram bahaya standar GHS (*Globally Harmonized System*) berupa gambar cairan yang dituangkan dari tabung reaksi menyebabkan permukaan logam berlubang dan merusak jaringan kulit tangan.

Arti dari simbol piktogram tersebut serta contoh bahan kimia yang wajib diberi label piktogram tersebut adalah ....

A. Bahan Pengoksidasi (*Oxidizing*); contoh: kalium klorat ($\\ce{KClO3}$)  
B. Bahan Mudah Terbakar (*Flammable*); contoh: aseton ($\\ce{CH3COCH3}$)  
C. Bahan Korosif (*Corrosive*); contoh: asam klorida pekat ($\\ce{HCl}$)  
D. Bahan Beracun Akut (*Acute Toxicity*); contoh: kalium sianida ($\\ce{KCN}$)  
E. Bahan Mudah Meledak (*Explosive*); contoh: amonium nitrat ($\\ce{NH4NO3}$)`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Identifikasi Piktogram GHS:**
   - Piktogram yang memperlihatkan cairan menetes ke atas pelat logam dan ke atas tangan hingga mengalami korosi/kerusakan adalah piktogram **Bahan Korosif (*Corrosive*)**.
2. **Definisi Bahan Korosif:**
   Zat kimia yang dapat menyebabkan kerusakan parah dan ireversibel pada jaringan hidup (kulit, mata) serta dapat merusak dan melarutkan wadah logam.
3. **Contoh Bahan Korosif:**
   - Asam-asam mineral kuat pekat: asam klorida pekat ($\\ce{HCl}$), asam sulfat pekat ($\\ce{H2SO4}$), asam nitrat pekat ($\\ce{HNO3}$).
   - Basa-basa kuat pekat: natrium hidroksida ($\\ce{NaOH}$), kalium hidroksida ($\\ce{KOH}$).
4. **Analisis Pilihan Lain:**
   - Simbol pengoksidasi: gambar lingkaran dengan nyala api di atasnya.
   - Simbol mudah terbakar: gambar kobaran api (*flame*).
   - Simbol beracun akut: gambar tengkorak dan tulang bersilang.
   - Simbol mudah meledak: gambar bom meledak.

Jawaban yang tepat adalah **C**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian K3 Laboratorium Kimia SMA',
    tags: ['keselamatan-kerja-lab', 'simbol-bahaya-ghs', 'bahan-korosif'],
  },
  {
    id: 101004,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Pengenalan Alat Laboratorium Kimia & Tingkat Presisi',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Pemilihan Alat Gelas Laboratorium Berdasarkan Tingkat Akurasi dan Presisi',
    question_text: `Di laboratorium kimia sekolah tersedia berbagai macam alat gelas berikut:
(1) Gelas kimia (*Beaker glass*) $100\\ \\text{mL}$
(2) Gelas ukur (*Measuring cylinder*) $100\\ \\text{mL}$
(3) Labu ukur volumetrik (*Volumetric flask*) $100{,}0\\ \\text{mL}$
(4) Pipet ukur (*Graduated pipette*) $10\\ \\text{mL}$
(5) Pipet gondok/volume (*Volumetric pipette*) $10{,}0\\ \\text{mL}$

Berdasarkan fungsi dan tingkat ketelitian pengukuran alat gelas tersebut, jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Alat gelas manakah yang paling tepat digunakan untuk membuat 100,0 mL larutan standar NaCl dengan konsentrasi yang sangat presisi? Jelaskan alasan fungsionalnya!',
        points: 2.5,
        rubric: 'Menyebutkan labu ukur volumetrik 100,0 mL (1 poin) dan menjelaskan bahwa labu ukur memiliki satu garis kalibrasi tunggal dengan tingkat toleransi kesalahan paling rendah/presisi tinggi untuk larutan standar (1.5 poin).',
        expected_answer: 'Labu ukur volumetrik 100,0 mL'
      },
      {
        label: 'b',
        question_text: 'Jika seorang siswa diminta mengambil tepat 10,0 mL sampel larutan asam cuka untuk keperluan titrasi analitik, alat manakah yang lebih tepat dipilih antara pipet ukur dan pipet volume? Jelaskan perbedaannya!',
        points: 2.5,
        rubric: 'Menyebutkan pipet gondok/volume 10,0 mL (1 poin) dan menjelaskan bahwa pipet volume dikalibrasi untuk satu volume spesifik dengan diameter leher sempit sehingga meminimalkan galat pembacaan meniskus dibandingkan pipet ukur (1.5 poin).',
        expected_answer: 'Pipet gondok/volume 10,0 mL'
      }
    ],
    expected_final_answer: 'a. Labu ukur volumetrik 100,0 mL; b. Pipet gondok/volume 10,0 mL karena presisi lebih tinggi.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Pembuatan Larutan Standar (Bobot: 2.5 Poin)**
   - **Alat yang tepat:** Labu ukur volumetrik $100{,}0\\ \\text{mL}$. *(Skor: 1.0 Poin)*
   - **Alasan:** Labu ukur dirancang khusus untuk membuat larutan dengan volume tetap dan presisi tinggi (memiliki toleransi galat sangat kecil, misal $\\pm 0{,}08\\ \\text{mL}$ untuk Kelas A) serta dilengkapi tanda batas lingkar tunggal pada lehernya yang sempit. Gelas kimia dan gelas ukur tidak boleh digunakan untuk larutan standar karena memiliki galat volume mencapai $5\\% - 10\\%$. *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Pengambilan Alikuot Sampel Titrasi (Bobot: 2.5 Poin)**
   - **Alat yang tepat:** Pipet gondok / pipet volume $10{,}0\\ \\text{mL}$. *(Skor: 1.0 Poin)*
   - **Alasan:** Pipet volume memiliki tabung gelembung di tengah dan satu garis kalibrasi di leher sempit, memberikan ketelitian transfer cairan analitik tertinggi (toleransi $\\approx \\pm 0{,}02\\ \\text{mL}$). Sebaliknya, pipet ukur memiliki skala bergraduasi di sepanjang pipa dengan diameter lebih lebar yang rentan terhadap galat paralaks pembacaan. *(Skor: 1.5 Poin)*`,
    solution_framework_template: `1. Analisis Kebutuhan Presisi Pembuatan Larutan:
• Alat penakar kasar vs alat penakar volumetrik presisi: ....
• Karakteristik labu ukur: ....

2. Analisis Transfer Alikuot Cairan:
• Perbandingan pipet ukur vs pipet volume: ....
• Alasan keunggulan pipet volume pada titrasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Keterampilan Laboratorium Kimia SMA Kelas 10',
    tags: ['alat-laboratorium-kimia', 'presisi-akurasi', 'labu-ukur', 'pipet-volume'],
  },
  {
    id: 101005,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Prosedur Keselamatan Kerja Lab & Penanganan Bahan Berbahaya',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Standar Operasional Prosedur Pengenceran Asam Sulfat Pekat dan Tanggap Darurat',
    question_text: `Asam sulfat pekat ($\\ce{H2SO4}\\ 98\\%$) merupakan reagen kimia asam kuat yang sangat higroskopis, bersifat oksidator kuat, dan memiliki kalor pelarutan (hidrasi) yang sangat eksotermik ($\\Delta H_{\\text{hidrasi}} \\approx -880\\ \\text{kJ/mol}$).

Berdasarkan prinsip keselamatan kerja di laboratorium kimia, jawablah pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan prosedur yang benar dan aman ketika mengencerkan asam sulfat pekat dengan air! Mengapa menuangkan air secara langsung ke dalam asam sulfat pekat sangat dilarang keras?',
        points: 2.5,
        rubric: 'Menyebutkan aturan menuangkan asam pekat perlahan ke dalam air melalui dinding gelas sambil diaduk (1 poin) dan menjelaskan bahaya percikan mendidih akibat panas pelarutan terlokalisir jika air dituang ke asam (1.5 poin).',
        expected_answer: 'Asam pekat dituangkan perlahan ke dalam air sambil diaduk; dilarang menuang air ke asam karena memicu letupan/percikan asam panas.'
      },
      {
        label: 'b',
        question_text: 'Jika secara tidak sengaja kulit seorang praktikan terkena percikan asam sulfat pekat, sebutkan dua tindakan pertolongan pertama yang harus segera dilakukan!',
        points: 2.5,
        rubric: 'Menyebutkan pembilasan segera dengan air mengalir dalam jumlah banyak selama minimal 15-20 menit (1.5 poin) dan melapor ke guru/pengawas lab serta mencari penanganan medis lanjutan (1 poin).',
        expected_answer: 'Basuh segera dengan air mengalir selama minimal 15 menit dan laporkan ke pengawas lab.'
      }
    ],
    expected_final_answer: 'a. Asam pekat ke air secara perlahan sambil diaduk; b. Bilas dengan air mengalir banyak minimal 15 menit.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Prosedur Pengenceran Asam Sulfat Pekat (Bobot: 2.5 Poin)**
   - **Prosedur Benar:** Tuangkan asam sulfat pekat sedikit demi sedikit ke dalam wadah yang sudah berisi air suling melalui dinding gelas kimia secara perlahan sambil terus diaduk dan wadah direndam penangas air/es jika perlu. *(Kaidah: Asam ke Air, bukan Air ke Asam).* *(Skor: 1.0 Poin)*
   - **Alasan Ilmiah Larangan:** Asam sulfat memiliki massa jenis lebih besar ($1{,}84\\ \\text{g/cm}^3$) daripada air ($1{,}00\\ \\text{g/cm}^3$). Jika air dituangkan ke dalam asam pekat, air akan mengapung di lapisan atas. Reaksi eksotermik hebat seketika melepaskan kalor besar yang langsung mendidihkan air lapisan atas tersebut secara mendadak, menyebabkan uap panas dan percikan asam sulfat korosif menyembur keluar wadah (*splattering*). *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Pertolongan Pertama Percikan Asam pada Kulit (Bobot: 2.5 Poin)**
   - Tindakan 1: Segera bawa korban ke wastafel / *safety shower* dan aliri bagian kulit yang terpapar dengan **air mengalir dalam volume besar selama minimal 15–20 menit** secara terus-menerus untuk melarutkan dan menghanyutkan asam serta meredakan panas hidrasi. *(Skor: 1.5 Poin)*
   - Tindakan 2: Lepaskan pakaian yang terkontaminasi, jangan mengoleskan minyak/salep mentah, segera beri tahu guru pembimbing/laboran, dan rujuk ke fasilitas medis (UKS/Puskesmas). *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Kaidah Baku Pengenceran Asam:
• Arah penambahan (zat A ke dalam zat B): ....
• Fenomena eksotermisitas dan perbedaan massa jenis: ....
• Bahaya percikan lokal (splattering): ....

2. Tindakan Tanggap Darurat K3:
• Protokol pembersihan kontaminan kulit: ....
• Durasi pencucian air mengalir: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian K3 & Tanggap Darurat Kimia SMA',
    tags: ['keselamatan-kerja-lab', 'pengenceran-asam-pekat', 'pertolongan-pertama-lab'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 101001 - 101025)
  // =========================================================================
  {
    id: 101006,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Pengukuran Ilmiah & Kaidah Angka Penting',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penerapan Kaidah Angka Penting pada Operasi Perkalian dan Pengurangan',
    question_text: `Seorang praktikan melakukan penimbangan massa suatu cuplikan padatan senyawa kimia menggunakan neraca analitik digital dan diperoleh massa sebesar $24{,}650\\ \\text{g}$. Padatan tersebut kemudian dilarutkan ke dalam sejumlah air suling yang memiliki massa $120{,}4\\ \\text{g}$.

Setelah diaduk sempurna, sebagian larutan diambil dan diukur kerapatan massanya. Jika volume larutan terambil adalah $15{,}0\\ \\text{mL}$ dan massanya terukur $18{,}45\\ \\text{g}$, maka massa total campuran awal serta nilai massa jenis larutan terambil yang dilaporkan menurut kaidah angka penting berturut-turut adalah ....

A. $145{,}05\\ \\text{g}$ dan $1{,}230\\ \\text{g/mL}$  
B. $145{,}1\\ \\text{g}$ dan $1{,}23\\ \\text{g/mL}$  
C. $145{,}050\\ \\text{g}$ dan $1{,}23\\ \\text{g/mL}$  
D. $145{,}1\\ \\text{g}$ dan $1{,}230\\ \\text{g/mL}$  
E. $145\\ \\text{g}$ dan $1{,}2\\ \\text{g/mL}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Penjumlahan / Pengurangan Angka Penting:**
   Hasil operasi penjumlahan atau pengurangan hanya boleh memiliki angka di belakang koma (angka taksiran desimal) sebanyak **angka desimal yang paling sedikit** dari bilangan-bilangan yang dioperasikan.
   - Massa padatan $= 24{,}650\\ \\text{g}$ (memiliki 3 angka desimal).
   - Massa air $= 120{,}4\\ \\text{g}$ (memiliki 1 angka desimal $\\to$ pembatas ketelitian).
   - Perhitungan matematis:
     $$24{,}650\\ \\text{g} + 120{,}4\\ \\text{g} = 145{,}050\\ \\text{g}$$
   - Dibulatkan menjadi **1 angka desimal**:
     $$\\mathbf{145{,}1\\ \\text{g}}$$

2. **Aturan Perkalian / Pembagian Angka Penting:**
   Hasil operasi perkalian atau pembagian harus memiliki jumlah angka penting sebanyak **jumlah angka penting yang paling sedikit** dari bilangan-bilangan yang dioperasikan.
   - Massa $= 18{,}45\\ \\text{g}$ (memiliki **4 angka penting**).
   - Volume $= 15{,}0\\ \\text{mL}$ (memiliki **3 angka penting** $\\to$ pembatas angka penting).
   - Perhitungan kerapatan massa ($\\rho$):
     $$\\rho = \\frac{m}{V} = \\frac{18{,}45\\ \\text{g}}{15{,}0\\ \\text{mL}} = 1{,}23\\ \\text{g/mL}$$
   - Bilangan $1{,}23$ telah memiliki tepat **3 angka penting**.

Hasil laporan resmi sesuai kaidah angka penting adalah **$145{,}1\\ \\text{g}$ dan $1{,}23\\ \\text{g/mL}$** (Opsi B).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E',
    tags: ['angka-penting-pengukuran', 'akurasi-dan-presisi', 'kerapatan-massa'],
  },
  {
    id: 101007,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Metode Pemisahan Campuran Kimia',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Metode Pemisahan Campuran Berdasarkan Perbedaan Sifat Fisika',
    question_text: `Tabel berikut menyajikan karakteristik campuran dua zat dan perbedaan sifat fisika dominan antar komponen penyusunnya:

| Campuran | Komponen Penyusun | Perbedaan Sifat Fisika Utama |
| :---: | :--- | :--- |
| (I) | Minyak atsiri atsiri kayu putih dan air | Tidak saling bercampur (*immiscible*), beda massa jenis |
| (II) | Larutan etanol ($T_d = 78{,}3^\\circ\\text{C}$) dan air ($T_d = 100^\\circ\\text{C}$) | Perbedaan titik didih cairan yang saling melarut |
| (III) | Campuran serbuk iodin murni dan pasir silika | Satu komponen mudah menyublim saat dipanaskan |
| (IV) | Ekstrak zat pigmen kurkumin pada rimpang kunyit | Perbedaan daya adsorpsi fase diam dan kelarutan fase gerak |

Metode pemisahan campuran yang paling tepat berturut-turut untuk (I), (II), (III), dan (IV) adalah ....

A. Corong pisah, Distilasi bertingkat, Sublimasi, Kromatografi  
B. Filtrasi, Kristalisasi, Distilasi sederhana, Kromatografi  
C. Corong pisah, Sublimasi, Evaporasi, Sentrifugasi  
D. Dekantasi, Ekstraksi cair-cair, Kromatografi, Distilasi bertingkat  
E. Sentrifugasi, Distilasi bertingkat, Sublimasi, Kristalisasi`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Campuran (I) - Minyak dan air:**
   Dua zat cair yang tidak saling melarut (*immiscible*) dan membentuk dua lapisan terpisah berdasarkan perbedaan massa jenis dipisahkan menggunakan **corong pisah (*separatory funnel*)**.
2. **Campuran (II) - Etanol dan air:**
   Dua zat cair yang saling campur (*miscible*) dengan selisih titik didih signifikan dipisahkan melalui proses penguapan dan pengembunan bertingkat, yaitu **distilasi bertingkat (*fractional distillation*)**.
3. **Campuran (III) - Iodin dan pasir:**
   Iodin memiliki sifat mudah menyublim (berubah langsung dari padat menjadi gas ungu) ketika dipanaskan dan mengkristal kembali saat didinginkan pada cawan berpenangas es, sedangkan pasir tidak menyublim. Metodenya adalah **sublimasi**.
4. **Campuran (IV) - Zat pigmen warna kurkumin:**
   Komponen zat warna dipisahkan berdasarkan perbedaan kecepatan perambatan zat terlarut pada fasa diam akibat perbedaan daya afinitas/kelarutan dalam fasa gerak pelarut, yaitu teknik **kromatografi**.

Urutan metode yang tepat adalah **Corong pisah, Distilasi bertingkat, Sublimasi, Kromatografi** (Opsi A).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Ulangan Semester Kimia SMA Kelas 10',
    tags: ['pemisahan-campuran', 'distilasi', 'corong-pisah', 'sublimasi', 'kromatografi'],
  },
  {
    id: 101008,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Desain Eksperimen Metode Ilmiah & Analisis Variabel',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Identifikasi Variabel Bebas, Terikat, dan Kontrol pada Eksperimen Kimia',
    question_text: `Sekelompok peserta didik merancang eksperimen untuk menyelidiki pengaruh konsentrasi larutan asam klorida terhadap waktu pelarutan pita magnesium. Mereka menyediakan 4 buah gelas kimia yang masing-masing diisi $50\\ \\text{mL}$ larutan $\\ce{HCl}$ dengan konsentrasi berturut-turut $0{,}5\\ \\text{M}$; $1{,}0\\ \\text{M}$; $1{,}5\\ \\text{M}$; dan $2{,}0\\ \\text{M}$. Ke dalam setiap bejana dimasukkan pita magnesium murni dengan panjang seragam $3{,}0\\ \\text{cm}$ (massa seragam) pada suhu ruangan yang dijaga konstan $25^\\circ\\text{C}$. Stopwatch digunakan untuk mengukur waktu dari saat pita dimasukkan hingga seluruh pita magnesium habis bereaksi.

Berdasarkan rancangan eksperimen tersebut, pasangan variabel yang tepat adalah ....

A. Variabel bebas: panjang pita magnesium; Variabel terikat: konsentrasi larutan $\\ce{HCl}$  
B. Variabel bebas: konsentrasi larutan $\\ce{HCl}$; Variabel terikat: waktu reaksi pelarutan pita magnesium  
C. Variabel bebas: waktu reaksi; Variabel terikat: suhu larutan  
D. Variabel kontrol: konsentrasi larutan $\\ce{HCl}$; Variabel bebas: volume larutan $\\ce{HCl}$  
E. Variabel bebas: suhu ruangan; Variabel terikat: massa magnesium yang larut`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Variabel dalam Metode Ilmiah:**
   - **Variabel Bebas (Independen):** Faktor atau variabel yang sengaja diubah-ubah nilainya oleh peneliti untuk melihat pengaruhnya terhadap sistem. Pada eksperimen ini adalah **konsentrasi larutan $\\ce{HCl}$** ($0{,}5\\ \\text{M}, 1{,}0\\ \\text{M}, 1{,}5\\ \\text{M}, 2{,}0\\ \\text{M}$).
   - **Variabel Terikat (Dependen):** Respon atau hasil ukur yang diamati dan berubah akibat pengaruh variabel bebas. Pada eksperimen ini adalah **waktu reaksi pelarutan pita magnesium hingga tuntas**.
   - **Variabel Kontrol:** Faktor-faktor lain yang dijaga tetap sama/konstan agar tidak mempengaruhi hasil respon secara bias. Pada eksperimen ini adalah panjang pita magnesium ($3{,}0\\ \\text{cm}$), volume larutan $\\ce{HCl}$ ($50\\ \\text{mL}$), dan temperatur lingkungan ($25^\\circ\\text{C}$).

Dengan demikian, pernyataan yang benar adalah opsi **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase E',
    tags: ['metode-ilmiah', 'desain-eksperimen', 'variabel-bebas-terikat-kontrol'],
  },
  {
    id: 101009,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: '12 Prinsip Kimia Hijau (Green Chemistry)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Analisis Penerapan 12 Prinsip Kimia Hijau dalam Produksi Industri',
    question_text: `Suatu pabrik kimia mengganti proses sintesis asam adipat konvensional (bahan baku nilon) yang sebelumnya mereaksikan benzena turunan minyak bumi dengan asam nitrat pekat serta menghasilkan gas rumah kaca dinitrogen monoksida ($\\ce{N2O}$), menjadi proses baru yang menggunakan substrat glukosa alami dari biomassa tebu dengan bantuan biokatalis enzim mikroba dan air sebagai pelarut utama.

Prinsip Kimia Hijau (*Green Chemistry*) yang **paling relevan** diterapkan secara simultan pada inovasi industri tersebut adalah ....

A. Menggunakan pelarut organik volatil dan meningkatkan suhu reaksi setinggi mungkin  
B. Menggunakan bahan baku terbarukan, menggunakan katalis ramah lingkungan, dan mencegah timbulan limbah berbahaya  
C. Menghindari analisis waktu nyata (*real-time analysis*) dan memperbanyak produk samping  
D. Menggunakan reagen stoikiometri berlebih daripada katalis untuk mempercepat reaksi  
E. Mengutamakan bahan baku berbasis hidrokarbon fosil dan menurunkan efisiensi ekonomi atom`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Inovasi Proses Baru:**
   - Bahan baku diganti dari benzena (turunan minyak bumi tak terbarukan dan karsinogenik) menjadi glukosa biomassa tebu $\\implies$ **Prinsip 7: Penggunaan Bahan Baku Terbarukan (*Use of Renewable Feedstocks*)**.
   - Menggunakan enzim mikroba alih-alih asam anorganik berlebih $\\implies$ **Prinsip 9: Penggunaan Katalis (*Catalysis*)** yang lebih selektif dan efisien dibandingkan reagen stoikiometri.
   - Mengeliminasi pembentukan gas polutan berbahaya $\\ce{N2O}$ dan mengganti pelarut beracun dengan air $\\implies$ **Prinsip 1: Pencegahan Limbah (*Prevention*)** dan **Prinsip 5: Pelarut dan Zat Bantu yang Lebih Aman (*Safer Solvents and Auxiliaries*)**.
2. **Evaluasi Opsi:**
   Opsi B merangkum ketiga prinsip fundamental tersebut secara tepat dan ilmiah.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia Hijau SMA Kelas 10',
    tags: ['kimia-hijau', '12-prinsip-green-chemistry', 'biomassa-terbarukan', 'biokatalisis'],
  },
  {
    id: 101010,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Teknik Pengukuran Meniskus & Galat Paralaks Buret',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Pembacaan Skala Meniskus Cairan pada Buret Asam-Basa',
    question_text: `Pada titrasi asam-basa, seorang siswa membaca skala volume awal pada buret $50\\ \\text{mL}$ yang terisi larutan natrium hidroksida ($\\ce{NaOH}$) encer. Garis meniskus bawah cairan berada tepat di antara garis $14{,}30\\ \\text{mL}$ dan $14{,}40\\ \\text{mL}$, di mana bagian dasar lengkungan meniskus teramati sedikit lebih dekat ke garis $14{,}30\\ \\text{mL}$ (diperkirakan $14{,}32\\ \\text{mL}$). 

Setelah titrasi mencapai titik akhir merah muda pucat, posisi meniskus bawah terbaca pada $38{,}75\\ \\text{mL}$. Jika praktikan membaca skala dengan posisi mata sedikit lebih tinggi dari garis meniskus (terjadi galat paralaks ke arah atas), efek galat terhadap pembacaan skala buret dan volume titran yang sesungguhnya terpakai adalah ....

A. Pembacaan skala meniskus buret menjadi lebih kecil dari seharusnya, dan volume titran terhitung lebih kecil dari kenyataan  
B. Pembacaan skala meniskus buret menjadi lebih besar dari seharusnya, dan volume titran terhitung lebih besar dari kenyataan  
C. Pembacaan skala meniskus buret tidak terpengaruh arah pandang mata karena buret memiliki garis melingkar penuh  
D. Pembacaan skala buret menjadi lebih besar dari seharusnya, dan cairan pembasah kaca selalu dibaca pada meniskus atas  
E. Pembacaan skala meniskus bawah buret menjadi lebih kecil dari seharusnya karena angka nol pada buret terletak di ujung bawah`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Orientasi Skala pada Buret:**
   Buret memiliki angka skala yang **meningkat dari atas ke bawah** (angka $0\\ \\text{mL}$ berada di ujung paling atas, dan angka $50\\ \\text{mL}$ berada di dekat kran bawah).
2. **Kaidah Pembacaan Meniskus:**
   Untuk cairan yang membasahi dinding kaca (air dan larutan berair encer), cairan membentuk **meniskus cekung**, sehingga pembacaan yang benar adalah tepat pada **dasar lengkungan meniskus paling bawah** dengan posisi mata tegak lurus horisontal sejajar permukaan cairan.
3. **Analisis Galat Paralaks:**
   - Jika posisi mata pengamat berada **di atas** garis meniskus dan memandang ke bawah secara miring (*downward angle*), proyeksi garis dasar meniskus pada dinding buret akan tampak jatuh pada angka skala yang terletak lebih ke atas (angka lebih kecil).
   - Akibatnya, angka pembacaan skala menjadi **lebih kecil dari nilai aslinya**.
   - Jika galat ini terjadi saat membaca volume akhir, selisih $\\Delta V = V_{\\text{akhir}} - V_{\\text{awal}}$ akan menghasilkan nilai volume titran terpakai yang lebih kecil dari yang sebenarnya.

Opsi yang tepat adalah **A**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Keterampilan Titrasi Kimia SMA',
    tags: ['pembacaan-meniskus', 'alat-laboratorium-kimia', 'galat-relatif', 'buret'],
  },
  {
    id: 101011,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Kalkulasi Kuantitatif Ekonomi Atom (Atom Economy)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kalkulasi Komparatif Ekonomi Atom Sintesis Kimia Hijau vs Konvensional',
    question_text: `Senyawa klorometana ($\\ce{CH3Cl}$, $M_r = 50{,}49\\ \\text{g/mol}$) merupakan intermediat industri kimia yang dapat disintesis melalui dua rute reaksi alternatif berikut:

**Rute I (Substitusi Klorinasi Metana Konvensional):**
$$\\ce{CH4 + Cl2 -> CH3Cl + HCl}$$
Diketahui: $M_r\\ \\ce{CH4} = 16{,}04$, $M_r\\ \\ce{Cl2} = 70{,}90$, $M_r\\ \\ce{HCl} = 36{,}46\\ \\text{g/mol}$.

**Rute II (Klorinasi Metanol Katalitik Berkelanjutan):**
$$\\ce{CH3OH + HCl -> CH3Cl + H2O}$$
Diketahui: $M_r\\ \\ce{CH3OH} = 32{,}04$, $M_r\\ \\ce{HCl} = 36{,}46$, $M_r\\ \\ce{H2O} = 18{,}02\\ \\text{g/mol}$.

Berdasarkan prinsip Kimia Hijau ke-2 (Ekonomi Atom Maksimum), hitung dan analisis efisiensi kedua proses:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung persentase Ekonomi Atom (% Atom Economy) untuk Rute I dan Rute II dengan produk target klorometana (CH3Cl)!',
        points: 2.5,
        rubric: 'Menuliskan rumus % Atom Economy (0.5 poin), menghitung Rute I = 58,07% (1 poin), dan menghitung Rute II = 73,71% (1 poin).',
        expected_answer: 'Rute I = 58,07%; Rute II = 73,71%'
      },
      {
        label: 'b',
        question_text: 'Jelaskan mengapa Rute II jauh lebih ramah lingkungan dan lebih selaras dengan prinsip Green Chemistry dibandingkan Rute I ditinjau dari ekonomi atom dan sifat produk sampingnya!',
        points: 2.5,
        rubric: 'Menjelaskan nilai ekonomi atom Rute II lebih tinggi (limbah massa atom lebih sedikit) (1.5 poin) dan produk samping Rute II adalah H2O (tidak beracun) sedangkan Rute I menghasilkan gas korosif HCl (1 poin).',
        expected_answer: 'Rute II memiliki ekonomi atom lebih tinggi (73,71% vs 58,07%) dan menghasilkan produk samping air (H2O) yang aman, bukan gas asam korosif HCl.'
      }
    ],
    expected_final_answer: 'a. Rute I = 58,07%, Rute II = 73,71%; b. Rute II menghemat atom lebih banyak dan menghasilkan produk samping air murni yang ramah lingkungan.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan % Ekonomi Atom (Bobot: 2.5 Poin)**
   - **Rumus Baku:**
     $$\\%\\ \\text{Ekonomi Atom} = \\frac{\\text{Massa Molar Produk Target}}{\\sum \\text{Massa Molar Reaktan}} \\times 100\\%$$
   - **Untuk Rute I:**
     $$\\sum M_r(\\text{Reaktan}) = M_r(\\ce{CH4}) + M_r(\\ce{Cl2}) = 16{,}04 + 70{,}90 = 86{,}94\\ \\text{g/mol}$$
     $$\\%\\ \\text{Atom Economy (I)} = \\frac{50{,}49}{86{,}94} \\times 100\\% = \\mathbf{58{,}07\\%}$$
     *(Skor: 1.0 Poin)*
   - **Untuk Rute II:**
     $$\\sum M_r(\\text{Reaktan}) = M_r(\\ce{CH3OH}) + M_r(\\ce{HCl}) = 32{,}04 + 36{,}46 = 68{,}50\\ \\text{g/mol}$$
     $$\\%\\ \\text{Atom Economy (II)} = \\frac{50{,}49}{68{,}50} \\times 100\\% = \\mathbf{73{,}71\\%}$$
     *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Evaluasi Dampak Lingkungan (Bobot: 2.5 Poin)**
   - Rute II memiliki efisiensi pemanfaatan atom reaktan yang jauh lebih tinggi ($73{,}71\\%$ berbanding $58{,}07\\%$), yang berarti proporsi atom yang terbuang menjadi limbah samping berkurang drastis dari $41{,}93\\%$ menjadi hanya $26{,}29\\%$. *(Skor: 1.5 Poin)*
   - Produk samping Rute II adalah air ($\\ce{H2O}$), suatu zat alami yang tidak beracun dan tidak merusak lingkungan, sedangkan produk samping Rute I adalah gas asam klorida ($\\ce{HCl}$) yang sangat korosif, berbahaya bagi pernapasan pekerja, dan memerlukan biaya pengolahan limbah netralisasi tambahan. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Formulasi Rumus Ekonomi Atom:
• Formula matematis % Atom Economy: ....
• Perhitungan massa molar total reaktan Rute I & II: ....
• Kalkulasi persentase hasil: ....

2. Evaluasi Mutu Lingkungan:
• Perbandingan kuantitatif limbah atomik: ....
• Analisis toksisitas produk samping (H2O vs HCl): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia Hijau SMA Kelas 10',
    tags: ['kimia-hijau', 'ekonomi-atom', 'faktor-lingkungan-e-factor'],
  },
  {
    id: 101012,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Desain Eksperimen Metode Ilmiah & Penguraian Katalitik',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Data Eksperimen Penguraian Hidrogen Peroksida dengan Katalis Ion Besi',
    question_text: `Peserta didik melakukan pengujian laboratorium mengenai laju penguraian hidrogen peroksida ($\\ce{2H2O2(aq) -> 2H2O(l) + O2(g)}$). Mereka mereaksikan $20\\ \\text{mL}$ larutan $\\ce{H2O2}\\ 3\\%$ dengan berbagai penambahan zat pada suhu konstan $25^\\circ\\text{C}$ dan mencatat waktu yang dibutuhkan untuk mengumpulkan $10\\ \\text{mL}$ gas oksigen pada labu ukur tertutup:

| No. Percobaan | Perlakuan Campuran Reaksi | Waktu Terkumpul 10 mL Gas O2 |
| :---: | :--- | :---: |
| 1 | $20\\ \\text{mL}\\ \\ce{H2O2}\\ 3\\% + 5\\ \\text{mL}$ air suling | $340\\ \\text{detik}$ |
| 2 | $20\\ \\text{mL}\\ \\ce{H2O2}\\ 3\\% + 5\\ \\text{mL}$ larutan $\\ce{FeCl3}\\ 0{,}1\\ \\text{M}$ | $18\\ \\text{detik}$ |
| 3 | $20\\ \\text{mL}\\ \\ce{H2O2}\\ 3\\% + 5\\ \\text{mL}$ larutan $\\ce{NaCl}\\ 0{,}1\\ \\text{M}$ | $338\\ \\text{detik}$ |

Jawablah pertanyaan analisis metode ilmiah berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Apakah fungsi penambahan larutan NaCl pada percobaan 3? Mengapa percobaan 3 penting disertakan dalam desain metode ilmiah ini?',
        points: 2.5,
        rubric: 'Menjelaskan bahwa percobaan 3 berfungsi sebagai kontrol negatif ion klorida (Cl-) (1.5 poin) untuk membuktikan bahwa percepatan reaksi pada percobaan 2 disebabkan oleh kation Fe3+, bukan anion Cl- (1 poin).',
        expected_answer: 'Sebagai kontrol pembanding untuk membuktikan katalisis dipicu oleh ion Fe3+, bukan oleh ion Cl-.'
      },
      {
        label: 'b',
        question_text: 'Rumuskan kesimpulan ilmiah yang valid dan didukung oleh data eksperimen tersebut mengenai peran larutan FeCl3!',
        points: 2.5,
        rubric: 'Menyimpulkan bahwa ion Fe3+ bertindak sebagai katalis homogen yang secara efektif mempercepat laju reaksi penguraian H2O2 (1.5 poin) dengan mempersingkat waktu reaksi dari 340 s menjadi 18 s (1 poin).',
        expected_answer: 'Ion Fe3+ dalam larutan FeCl3 berfungsi sebagai katalis yang mempercepat penguraian H2O2 secara signifikan.'
      }
    ],
    expected_final_answer: 'a. Kontrol negatif untuk ion Cl-; b. Ion Fe3+ bertindak sebagai katalis yang mempercepat reaksi penguraian hidrogen peroksida.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Peran Eksperimen Kontrol (Bobot: 2.5 Poin)**
   - Garam $\\ce{FeCl3}$ tersusun dari kation $\\ce{Fe^3+}$ dan anion $\\ce{Cl-}$. Tanpa percobaan 3, seseorang bisa berargumen bahwa percepatan reaksi pada percobaan 2 mungkin saja dipicu oleh ion $\\ce{Cl-}$. *(Skor: 1.0 Poin)*
   - Percobaan 3 menggunakan $\\ce{NaCl}$ (yang mengandung ion $\\ce{Cl-}$ dengan konsentrasi sama tetapi kation $\\ce{Na+}$ bukan $\\ce{Fe^3+}$) dan menghasilkan waktu reaksi ($338\\ \\text{s}$) yang hampir identik dengan air suling ($340\\ \\text{s}$). Hal ini berfungsi sebagai **kontrol negatif** yang secara meyakinkan membuktikan bahwa ion $\\ce{Cl-}$ tidak memiliki efek katalitik, sehingga efek percepatan murni berasal dari kation $\\ce{Fe^3+}$. *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Perumusan Kesimpulan Ilmiah (Bobot: 2.5 Poin)**
   - Ion $\\ce{Fe^3+}$ dalam larutan $\\ce{FeCl3}$ berperan sebagai **katalis homogen** yang secara drastis mempercepat laju dekomposisi hidrogen peroksida, ditandai dengan penurunan waktu reaksi dari $340\\ \\text{detik}$ menjadi hanya $18\\ \\text{detik}$ (laju reaksi meningkat hampir $19$ kali lipat) pada kondisi suhu konstan. *(Skor: 2.5 Poin)*`,
    solution_framework_template: `1. Analisis Fungsi Kontrol Eksperimen:
• Komposisi ion pada reagen pembanding (FeCl3 vs NaCl): ....
• Eliminasi variabel perancu (confounding variable): ....

2. Formulasi Kesimpulan Berbasis Bukti:
• Identifikasi peran ion spesifik (Fe3+ vs Cl-): ....
• Pengaruh kuantitatif terhadap waktu pembentukan gas O2: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Kinerja Eksperimen Kimia SMA',
    tags: ['metode-ilmiah', 'kontrol-positif-negatif', 'katalis-homogen', 'hidrogen-peroksida'],
  },
  {
    id: 101013,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Kromatografi Kertas & Perhitungan Retardation Factor (Rf)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Nilai Retardation Factor (Rf) dan Analisis Kepolaran pada Kromatografi Kertas',
    question_text: `Pemisahan zat pewarna makanan sintetis dilakukan menggunakan kromatografi kertas (*paper chromatography*) dengan fasa diam selulosa (bersifat polar) dan fasa gerak pelarut campuran isopropanol-air (bersifat semipolar). 

Garis batas awal penotolan sampel dibuat berjarak $1{,}5\\ \\text{cm}$ dari dasar kertas kromatografi. Setelah eluen merambat naik dan garis depan pelarut (*solvent front*) mencapai jarak $10{,}0\\ \\text{cm}$ dari garis penotolan awal, kromatogram dikeringkan. Teramati dua noda warna terpisah:
- Noda Merah ($A$): merambat sejauh $4{,}2\\ \\text{cm}$ dari garis batas awal.
- Noda Kuning ($B$): merambat sejauh $8{,}5\\ \\text{cm}$ dari garis batas awal.

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah nilai faktor retardasi (Rf) masing-masing untuk noda merah (A) dan noda kuning (B)!',
        points: 2.5,
        rubric: 'Menuliskan rumus Rf = jarak tempuh zat / jarak tempuh pelarut (0.5 poin), menghitung Rf(A) = 4,2/10,0 = 0,42 (1 poin), dan menghitung Rf(B) = 8,5/10,0 = 0,85 (1 poin).',
        expected_answer: 'Rf(A) = 0,42; Rf(B) = 0,85'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan nilai Rf yang diperoleh, zat warna manakah yang memiliki interaksi ikatan lebih kuat dengan fasa diam kertas selulosa? Jelaskan dasar pertimbangan ilmiahnya!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa noda merah (A) berinteraksi lebih kuat dengan fasa diam selulosa (1.5 poin) karena nilai Rf-nya lebih kecil yang menandakan pergerakannya lebih tertahan dibandingkan noda kuning (B) (1 poin).',
        expected_answer: 'Noda merah (A), karena memiliki nilai Rf lebih rendah (0,42) yang menunjukkan adsorpsi/ikatan lebih kuat terhadap fasa diam polar.'
      }
    ],
    expected_final_answer: 'a. Rf(A) = 0,42 dan Rf(B) = 0,85; b. Noda merah (A) karena tertahan lebih kuat pada fasa diam selulosa.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Nilai $R_f$ (Bobot: 2.5 Poin)**
   - **Formula Dasar:**
     $$R_f = \\frac{\\text{Jarak tempuh noda komponen dari garis awal}}{\\text{Jarak tempuh garis depan pelarut (solvent front) dari garis awal}}$$
   - **Noda Merah ($A$):**
     $$R_f(A) = \\frac{4{,}2\\ \\text{cm}}{10{,}0\\ \\text{cm}} = \\mathbf{0{,}42}$$
     *(Skor: 1.0 Poin)*
   - **Noda Kuning ($B$):**
     $$R_f(B) = \\frac{8{,}5\\ \\text{cm}}{10{,}0\\ \\text{cm}} = \\mathbf{0{,}85}$$
     *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Analisis Afinitas Intermolekul (Bobot: 2.5 Poin)**
   - **Noda Merah ($A$)** memiliki interaksi (afinitas adsorpsi atau ikatan hidrogen) yang jauh lebih kuat dengan fasa diam serat selulosa. *(Skor: 1.5 Poin)*
   - **Dasar Pertimbangan:** Zat yang berikatan kuat dengan fasa diam akan lebih banyak menghabiskan waktu dalam keadaan teradsorpsi pada serat kertas sehingga merambat lambat dan menghasilkan nilai $R_f$ yang lebih kecil ($0{,}42$). Sebaliknya, zat dengan nilai $R_f$ tinggi ($0{,}85$) memiliki kelarutan lebih tinggi dalam fasa gerak dan interaksi lebih lemah dengan fasa diam. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Kalkulasi Nilai Rf Kromatografi:
• Definisi dan formula matematis Rf: ....
• Jarak migrasi analit vs jarak pelarut: ....
• Hasil numerik Rf(A) dan Rf(B): ....

2. Interpretasi Afinitas Fasa:
• Hubungan nilai Rf dengan interaksi fasa diam vs fasa gerak: ....
• Korelasi kepolaran zat terhadap matriks selulosa: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Keterampilan Pemisahan Campuran Kimia SMA',
    tags: ['pemisahan-campuran', 'kromatografi', 'faktor-retardasi-rf'],
  },
  {
    id: 101014,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Analisis Safety Data Sheet (SDS) & Mitigasi Bahaya Kimia',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Interpretasi Lembar Data Keselamatan (SDS) Asam Nitrat Pekat dan Protokol APD',
    question_text: `Pada label wadah asam nitrat pekat ($\\ce{HNO3}\\ 65\\%$, $M = 63{,}01\\ \\text{g/mol}$) tercantum informasi Safety Data Sheet (SDS / MSDS) dengan kode pernyataan bahaya (*Hazard Statements*):
- **H272:** Dapat memperhebat api; pengoksidasi (*May intensify fire; oxidizer*).
- **H314:** Menyebabkan luka bakar kulit yang parah dan kerusakan mata (*Causes severe skin burns and eye damage*).
- **H331:** Toksik jika terhirup (*Toxic if inhaled*).

Berdasarkan informasi SDS tersebut, jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Sebutkan 3 jenis Alat Pelindung Diri (APD) wajib yang harus dikenakan oleh seorang laboran ketika memindahkan larutan asam nitrat pekat di laboratorium!',
        points: 2.5,
        rubric: 'Menyebutkan jas laboratorium lengan panjang/apron tahan kimia, sarung tangan nitril/neoprena tahan asam, dan kacamata pengaman/goggles atau pelindung wajah (face shield) (2.5 poin).',
        expected_answer: 'Jas lab tahan kimia, sarung tangan nitril/neoprena tahan asam pekat, dan kacamata pelindung (chemical splash goggles).'
      },
      {
        label: 'b',
        question_text: 'Mengapa pengerjaan pemindahan asam nitrat pekat WAJIB dilakukan di dalam lemari asam (fume hood)? Jelaskan kaitannya dengan kode bahaya H331 dan gas yang dapat terbentuk!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa asam nitrat pekat mudah melepaskan uap asam korosif dan gas nitrogen dioksida (NO2) coklat beracun jika terkena cahaya/panas (1.5 poin) sehingga lemari asam diperlukan untuk menghisap uap beracun keluar dan melindungi saluran pernapasan (1 poin).',
        expected_answer: 'Karena asam nitrat pekat melepaskan uap korosif dan gas beracun NO2 (nitrogen dioksida) yang membahayakan sistem pernapasan jika dihirup.'
      }
    ],
    expected_final_answer: 'a. Jas lab, sarung tangan nitril tebal, dan chemical goggles; b. Lemari asam mencegah inhalasi gas beracun NO2 dan uap korosif HNO3.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Kelengkapan APD Wajib (Bobot: 2.5 Poin)**
   - **Kacamata pengaman percikan kimia (*Chemical splash goggles*)** atau pelindung wajah penuh (*face shield*) untuk melindungi mata dari semburan cairan korosif (sesuai kode H314). *(Skor: 1.0 Poin)*
   - **Sarung tangan tahan bahan kimia tebal** (berbahan nitril tebal, butil, atau neoprena, bukan sarung tangan lateks tipis biasa). *(Skor: 0.8 Poin)*
   - **Jas laboratorium berkancing penuh** / apron vinil tahan asam dan sepatu tertutup anti-selip. *(Skor: 0.7 Poin)*

2. **Sub-soal (b): Urgensi Penggunaan Lemari Asam (Bobot: 2.5 Poin)**
   - Asam nitrat pekat mudah mengalami dekomposisi parsial menghasilkan uap asam dan **gas nitrogen dioksida ($\\ce{NO2}$)** yang berwarna coklat kemerahan dan sangat toksik bagi alveoli paru-paru (sesuai kode H331):
     $$\\ce{4 HNO3(aq) -> 4 NO2(g) + O2(g) + 2 H2O(l)}$$
     *(Skor: 1.5 Poin)*
   - Lemari asam (*fume hood*) dilengkapi sistem ventilasi hisap (*exhaust blower*) berkecepatan tinggi yang secara terus-menerus menarik uap beracun dan mengeluarkannya melalui cerobong filter khusus, sehingga mencegah akumulasi uap beracun di udara ruang laboratorium dan melindungi praktikan dari keracunan inhalasi. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Identifikasi APD Berdasarkan Bahaya GHS:
• Analisis kode H314 (kontak kulit/mata): ....
• Rekomendasi material APD (kacamata splash, sarung tangan nitril): ....

2. Analisis Toksisitas Inhalasi & Ventilasi:
• Reaksi penguraian pelepasan uap gas toksik (NO2): ....
• Prinsip operasional sistem hisap lemari asam: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Standar K3 Laboratorium Kimia SMA',
    tags: ['keselamatan-kerja-lab', 'safety-data-sheet-sds', 'simbol-bahaya-ghs', 'lemari-asam'],
  },
  {
    id: 101015,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Pengukuran Densitas & Analisis Ketidakpastian Pengukuran',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Massa Jenis Logam Tak Beraturan Menggunakan Gelas Ukur dan Neraca',
    question_text: `Untuk mengidentifikasi jenis suatu logam misterius, seorang praktikan mengukur massa sebongkah logam menggunakan neraca ohaus dan membaca nilai massa $m = 67{,}50\\ \\text{g}$. 

Untuk mengetahui volumenya, ia menggunakan metode perpindahan volume zat cair (*water displacement method*). Ke dalam sebuah gelas ukur $100\\ \\text{mL}$ dimasukkan air suling hingga volume awal terukur $V_1 = 30{,}0\\ \\text{mL}$. Setelah bongkahan logam ditenggelamkan sepenuhnya ke dalam air tanpa menimbulkan percikan, permukaan air naik hingga volume akhir terbaca $V_2 = 37{,}5\\ \\text{mL}$.

Diketahui tabel massa jenis acuan beberapa logam murni pada $20^\\circ\\text{C}$:
- Logam Aluminium ($\\ce{Al}$): $\\rho = 2{,}70\\ \\text{g/cm}^3$
- Logam Seng ($\\ce{Zn}$): $\\rho = 7{,}14\\ \\text{g/cm}^3$
- Logam Besi ($\\ce{Fe}$): $\\rho = 7{,}87\\ \\text{g/cm}^3$
- Logam Tembaga ($\\ce{Cu}$): $\\rho = 8{,}96\\ \\text{g/cm}^3$

Jawablah pertanyaan-pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah volume bongkahan logam dan tentukan massa jenis (kerapatan) logam tersebut lengkap dengan aturan angka penting yang benar!',
        points: 2.5,
        rubric: 'Menghitung volume V = V2 - V1 = 7,5 mL (memiliki 2 angka penting / 1 desimal) (1 poin), dan menghitung massa jenis rho = 67,50 / 7,5 = 9,0 g/cm3 (tepat 2 angka penting) (1.5 poin).',
        expected_answer: 'V = 7,5 mL; rho = 9,0 g/cm3 (2 angka penting).'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan nilai massa jenis yang diperoleh, logam murni apakah yang paling mendekati sampel tersebut? Hitung persen galat (error) relatif pengukurannya terhadap nilai acuan literatur!',
        points: 2.5,
        rubric: 'Mengidentifikasi logam tembaga (Cu, 8,96 g/cm3) (1 poin) dan menghitung persen galat = |9,0 - 8,96| / 8,96 * 100% = 0,45% (1.5 poin).',
        expected_answer: 'Logam Tembaga (Cu); Persen galat relatif = 0,45%.'
      }
    ],
    expected_final_answer: 'a. Volume = 7,5 mL, rho = 9,0 g/cm3; b. Logam Tembaga (Cu) dengan persen galat relatif 0,45%.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Volume dan Kerapatan Massa (Bobot: 2.5 Poin)**
   - **Perhitungan Volume Logam:**
     $$V = V_2 - V_1 = 37{,}5\\ \\text{mL} - 30{,}0\\ \\text{mL} = 7{,}5\\ \\text{mL} = 7{,}5\\ \\text{cm}^3$$
     *(Sesuai aturan desimal, memiliki 1 desimal / 2 angka penting).* *(Skor: 1.0 Poin)*
   - **Perhitungan Massa Jenis ($\\rho$):**
     $$\\rho = \\frac{m}{V} = \\frac{67{,}50\\ \\text{g}}{7{,}5\\ \\text{cm}^3} = \\mathbf{9{,}0\\ \\text{g/cm}^3}$$
     *(Sesuai aturan pembagian, dibulatkan mengikuti pembatas 2 angka penting).* *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Identifikasi Logam dan Persen Galat (Bobot: 2.5 Poin)**
   - Nilai $\\rho = 9{,}0\\ \\text{g/cm}^3$ paling dekat dengan massa jenis literatur **Logam Tembaga ($\\ce{Cu}$)** yaitu $8{,}96\\ \\text{g/cm}^3$. *(Skor: 1.0 Poin)*
   - **Perhitungan Persen Galat Relatif:**
     $$\\%\\ \\text{Galat Relatif} = \\frac{|\\text{Nilai Percobaan} - \\text{Nilai Literatur}|}{\\text{Nilai Literatur}} \\times 100\\%$$
     $$\\%\\ \\text{Galat Relatif} = \\frac{|9{,}0 - 8{,}96|}{8{,}96} \\times 100\\% = \\frac{0{,}04}{8{,}96} \\times 100\\% = \\mathbf{0{,}45\\%}$$
     *(Skor: 1.5 Poin)*`,
    solution_framework_template: `1. Kalkulasi Perpindahan Volume:
• Pengurangan volume cairan V2 - V1: ....
• Pembagian massa terhadap volume: ....
• Penerapan jumlah angka penting: ....

2. Analisis Perbandingan Literatur:
• Pencocokan dengan tabel massa jenis logam murni: ....
• Formula dan perhitungan % galat relatif: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Pengukuran Fisika-Kimia SMA Kelas 10',
    tags: ['angka-penting-pengukuran', 'kerapatan-massa', 'galat-relatif', 'pengukuran-presisi'],
  },

  // =========================================================================
  // KATEGORI SULIT / OLIMPIADE OSK (40% = 10 Butir Soal: ID 101001 - 101025)
  // =========================================================================
  {
    id: 101016,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Analisis Statistik Akurasi vs Presisi pada Pengukuran Berulang',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Evaluasi Komparatif Akurasi dan Presisi Hasil Titrasi Empat Analis Laboratorium',
    question_text: `Empat orang siswa analis (A, B, C, dan D) masing-masing melakukan $4$ kali pengulangan titrasi untuk menentukan konsentrasi larutan asam klorida ($\\ce{HCl}$) standar yang nilai konsentrasi sebenarnya (*true value*) telah ditetapkan sebesar $0{,}1000\\ \\text{M}$. Data hasil pengukuran konsentrasi (dalam satuan $\\text{M}$) disajikan pada tabel berikut:

| Analis | Ulangan 1 | Ulangan 2 | Ulangan 3 | Ulangan 4 | Rata-rata ($\\bar{x}$) | Standar Deviasi ($s$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | $0{,}0998$ | $0{,}1002$ | $0{,}0999$ | $0{,}1001$ | $0{,}1000$ | $\\pm 0{,}00018$ |
| **B** | $0{,}1120$ | $0{,}1119$ | $0{,}1122$ | $0{,}1121$ | $0{,}1121$ | $\\pm 0{,}00013$ |
| **C** | $0{,}0950$ | $0{,}1050$ | $0{,}0980$ | $0{,}1020$ | $0{,}1000$ | $\\pm 0{,}00432$ |
| **D** | $0{,}0880$ | $0{,}0920$ | $0{,}0840$ | $0{,}0900$ | $0{,}0885$ | $\\pm 0{,}00342$ |

Pernyataan analisis yang paling tepat mengenai mutu data analitik keempat siswa tersebut adalah ....

A. Analis B memiliki akurasi tinggi dan presisi tinggi  
B. Analis C memiliki akurasi tinggi dan presisi tinggi  
C. Analis A memiliki akurasi tinggi dan presisi tinggi, sedangkan Analis B memiliki presisi tinggi tetapi akurasi rendah  
D. Analis D memiliki akurasi lebih baik daripada Analis B karena standar deviasinya lebih besar  
E. Analis C memiliki presisi lebih tinggi daripada Analis A karena nilai rata-ratanya sama persis dengan nilai sebenarnya`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Ilmiah:**
   - **Akurasi (*Accuracy* / Ketepatan):** Kedekatan nilai rata-rata hasil pengukuran ($\\bar{x}$) terhadap nilai sebenarnya (*true value* $= 0{,}1000\\ \\text{M}$).
   - **Presisi (*Precision* / Ketelitian/Keterulangan):** Kedekatan hasil-hasil pengukuran antar ulangan satu sama lain, yang diukur secara kuantitatif melalui nilai **Standar Deviasi ($s$)** atau rentang sebaran. Semakin kecil nilai standar deviasi, semakin tinggi presisinya.
2. **Evaluasi Setiap Analis:**
   - **Analis A:** Nilai rata-rata $\\bar{x} = 0{,}1000\\ \\text{M}$ (sama persis dengan nilai sebenarnya $\\implies$ **akurasi sangat tinggi**) dan nilai $s = 0{,}00018$ sangat kecil $\\implies$ **presisi sangat tinggi**.
   - **Analis B:** Nilai rata-rata $\\bar{x} = 0{,}1121\\ \\text{M}$ (jauh menyimpang dari $0{,}1000\\ \\text{M} \\implies$ **akurasi rendah**, mengindikasikan adanya galat sistematik), namun nilai $s = 0{,}00013$ paling kecil di antara semuanya $\\implies$ **presisi sangat tinggi**.
   - **Analis C:** Nilai rata-rata $\\bar{x} = 0{,}1000\\ \\text{M}$ (**akurasi tinggi**), tetapi data sangat tersebar ($s = 0{,}00432$ besar) $\\implies$ **presisi rendah**.
   - **Analis D:** Nilai $\\bar{x} = 0{,}0885\\ \\text{M}$ (**akurasi rendah**) dan $s = 0{,}00342$ (**presisi rendah**).

Kesimpulan komparatif yang tepat adalah pernyataan pada opsi **C**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Olimpiade Sains Kimia Tingkat Kabupaten/Kota (OSK)',
    tags: ['akurasi-dan-presisi', 'standar-deviasi', 'galat-relatif', 'analisis-data'],
  },
  {
    id: 101017,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Metrik Kuantitatif Kimia Hijau: Faktor Lingkungan (E-Factor)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Kalkulasi E-Factor dan Evaluasi Keberlanjutan Limbah Sintesis Farmasi',
    question_text: `Dalam industri farmasi hijau (*Green Pharmaceuticals*), metrik Faktor Lingkungan (*Environmental Factor* atau $E\\text{-Factor}$) yang diperkenalkan oleh Roger Sheldon dirumuskan sebagai:
$$E\\text{-Factor} = \\frac{\\text{Massa Total Limbah (kg)}}{\\text{Massa Produk Target yang Dihasilkan (kg)}} = \\frac{\\sum m_{\\text{bahan baku}} - m_{\\text{produk murni}}}{m_{\\text{produk murni}}}$$

Suatu pabrik obat memproduksi $250\\ \\text{kg}$ zat aktif obat parasetamol murni. Untuk memproduksi jumlah tersebut, pabrik menggunakan:
- $200\\ \\text{kg}$ $p$-aminofenol
- $220\\ \\text{kg}$ anhidrida asetat
- $1200\\ \\text{kg}$ air dan pelarut organik (di mana $900\\ \\text{kg}$ pelarut berhasil didaur ulang kembali ke dalam sistem)
- $80\\ \\text{kg}$ katalis dan bahan penolong (tidak dapat didaur ulang)

Nilai $E\\text{-Factor}$ efektif dari proses manufaktur parasetamol tersebut adalah ....

A. $0{,}80$  
B. $1{,}80$  
C. $2{,}20$  
D. $3{,}20$  
E. $5{,}80$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Identifikasi Komponen Masukan Bahan yang Berakhir Menjadi Limbah:**
   Limbah dihitung dari total seluruh massa bahan masukan dikurangi massa produk target murni dan dikurangi massa bahan yang berhasil didaur ulang secara tertutup (*recycled*):
   - Massa $p$-aminofenol $= 200\\ \\text{kg}$
   - Massa anhidrida asetat $= 220\\ \\text{kg}$
   - Massa pelarut yang tidak dapat didaur ulang (terbuang) $= 1200\\ \\text{kg} - 900\\ \\text{kg} = 300\\ \\text{kg}$
   - Massa bahan penolong/katalis $= 80\\ \\text{kg}$
   - Total massa bahan masukan bersih yang dikonsumsi:
     $$m_{\\text{input bersih}} = 200 + 220 + 300 + 80 = 800\\ \\text{kg}$$

2. **Perhitungan Massa Limbah yang Dihasilkan:**
   $$\\text{Massa Limbah} = m_{\\text{input bersih}} - m_{\\text{produk target}}$$
   $$\\text{Massa Limbah} = 800\\ \\text{kg} - 250\\ \\text{kg} = 450\\ \\text{kg}$$

3. **Perhitungan Nilai $E\\text{-Factor}$:**
   $$E\\text{-Factor} = \\frac{\\text{Massa Limbah}}{\\text{Massa Produk Target}} = \\frac{450\\ \\text{kg}}{250\\ \\text{kg}} = \\mathbf{1{,}80}$$

Nilai $E\\text{-Factor}$ proses adalah **$1{,}80$** (artinya dihasilkan $1{,}80\\ \\text{kg}$ limbah untuk setiap $1\\ \\text{kg}$ parasetamol murni). Opsi B benar.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Olimpiade Sains Nasional (OSN) Bidang Kimia',
    tags: ['kimia-hijau', 'faktor-lingkungan-e-factor', 'ekonomi-atom', 'limbah-industri'],
  },
  {
    id: 101018,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Propagasi Galat & Ketidakpastian Pengukuran Analitik',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Propagasi Ketidakpastian Pengukuran Relatif pada Penentuan Konsentrasi Molar',
    question_text: `Konsentrasi molar ($M$) suatu larutan baku primer ditentukan melalui penimbangan padatan asam oksalat dihidrat ($\\ce{H2C2O4 . 2H2O}$) murni menggunakan neraca analitik dan melarutkannya ke dalam labu ukur volumetrik $250{,}0\\ \\text{mL}$ menurut hubungan:
$$M = \\frac{m}{M_r \\times V}$$

Data pembacaan instrumen dan estimasi ketidakpastian mutlaknya adalah:
- Massa padatan ($m$) $= 3{,}1510\\ \\text{g} \\pm 0{,}0002\\ \\text{g}$
- Volume labu ukur ($V$) $= 250{,}00\\ \\text{mL} \\pm 0{,}15\\ \\text{mL}$
- Massa molar ($M_r = 126{,}07\\ \\text{g/mol}$) dianggap eksak tanpa ketidakpastian.

Berdasarkan kaidah perambatan ketidakpastian relatif kuadrat (*root sum of squares*):
$$\\frac{\\Delta M}{M} = \\sqrt{\\left(\\frac{\\Delta m}{m}\\right)^2 + \\left(\\frac{\\Delta V}{V}\\right)^2}$$

Komponen pengukuran yang memberikan kontribusi ketidakpastian relatif paling dominan terhadap konsentrasi akhir serta nilai persentase ketidakpastian totalnya ($\\frac{\\Delta M}{M} \\times 100\\%$) adalah ....

A. Massa padatan; $\\pm 0{,}006\\%$  
B. Volume labu ukur; $\\pm 0{,}060\\%$  
C. Massa padatan; $\\pm 0{,}150\\%$  
D. Volume labu ukur; $\\pm 0{,}600\\%$  
E. Massa padatan dan volume berkontribusi sama besar; $\\pm 0{,}030\\%$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Hitung Ketidakpastian Relatif Massa ($m$):**
   $$\\frac{\\Delta m}{m} = \\frac{0{,}0002\\ \\text{g}}{3{,}1510\\ \\text{g}} \\approx 6{,}35 \\times 10^{-5} = 0{,}00635\\%$$

2. **Hitung Ketidakpastian Relatif Volume ($V$):**
   $$\\frac{\\Delta V}{V} = \\frac{0{,}15\\ \\text{mL}}{250{,}00\\ \\text{mL}} = 6{,}00 \\times 10^{-4} = 0{,}0600\\%$$

3. **Perbandingan Kontribusi Ketidakpastian:**
   - Nilai ketidakpastian relatif volume ($0{,}0600\\%$) hampir $10$ kali lebih besar daripada ketidakpastian relatif massa ($0{,}00635\\%$).
   - Sehingga komponen pengukuran yang memberikan kontribusi ketidakpastian terbesar/dominan adalah **volume labu ukur**.

4. **Propagasi Ketidakpastian Total:**
   $$\\frac{\\Delta M}{M} = \\sqrt{(6{,}35 \\times 10^{-5})^2 + (6{,}00 \\times 10^{-4})^2} \\approx \\sqrt{4{,}03 \\times 10^{-9} + 3{,}60 \\times 10^{-7}} = \\sqrt{3{,}64 \\times 10^{-7}} \\approx 6{,}03 \\times 10^{-4} = \\mathbf{0{,}060\\%}$$

Pernyataan yang tepat adalah opsi **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Provinsi (OSP)',
    tags: ['angka-penting-pengukuran', 'akurasi-dan-presisi', 'propagasi-galat', 'labu-ukur'],
  },
  {
    id: 101019,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Diagram Fasa Termal Distilasi Fraksionasi & Campuran Azeotrop',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Kurva Kesetimbangan Titik Didih Cairan Biner dan Titik Azeotrop',
    question_text: `Campuran biner etanol (titik didih normal $78{,}3^\\circ\\text{C}$) dan air (titik didih normal $100{,}0^\\circ\\text{C}$) dipisahkan menggunakan kolom distilasi fraksionasi bertekanan $1\\ \\text{atm}$. Pada fraksi massa etanol sebesar $95{,}6\\%$, campuran tersebut membentuk titik **azeotrop bertitik didih minimum** pada temperatur $78{,}15^\\circ\\text{C}$.

Pernyataan yang **paling tepat dan ilmiah** mengenai implikasi sifat campuran azeotrop tersebut terhadap batas efisiensi distilasi fraksionasi adalah ....

A. Distilasi fraksionasi biasa dapat menghasilkan etanol absolut $100\\%$ jika kolom fraksionasi diperpanjang tak terhingga  
B. Pada titik azeotrop, komposisi uap yang dihasilkan identik persis dengan komposisi cairan asalnya, sehingga distilasi fraksionasi biasa tidak dapat memurnikan etanol melampaui kadar $95{,}6\\%$  
C. Komponen air akan mendidih terlebih dahulu pada puncak kolom distilasi karena titik didih azeotrop lebih rendah daripada titik didih air murni  
D. Campuran azeotrop dapat langsung dipisahkan dengan kertas saring membran selulosa karena fasa etanol berubah menjadi padat  
E. Penambahan garam dapur ke dalam labu distilasi tidak akan mengubah kesetimbangan azeotrop karena sifat koligatif hanya berlaku untuk senyawa nonpolar`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Campuran Azeotrop:**
   Campuran dari dua zat cair atau lebih yang memiliki komposisi fasa uap yang **sama persis** dengan komposisi fasa cairannya pada temperatur didih tertentu.
2. **Karakteristik Azeotrop Titik Didih Minimum:**
   - Campuran etanol-air $95{,}6\\% - 4{,}4\\%$ mendidih pada $78{,}15^\\circ\\text{C}$, lebih rendah daripada titik didih etanol murni ($78{,}3^\\circ\\text{C}$) maupun air murni ($100^\\circ\\text{C}$).
   - Karena komposisi uapnya sama persis dengan cairan, penguapan dan pengembunan berulang di dalam kolom distilasi fraksionasi biasa **tidak akan mengubah rasio konsentrasi komponen**.
   - Akibatnya, distilasi fraksionasi konvensional mencapai batas maksimum pemurnian pada kadar $95{,}6\\%$ etanol. Untuk menghasilkan etanol murni $100\\%$ (*etanol absolut*), diperlukan metode khusus seperti distilasi azeotropik dengan penambahan benzena/sikloheksana, penggunaan saringan molekuler (*molecular sieves* zeolit), atau pervaporasi membran.

Opsi yang tepat adalah **B**.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Nasional',
    tags: ['pemisahan-campuran', 'distilasi', 'azeotrop', 'kurva-titik-didih'],
  },
  {
    id: 101020,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Metodologi Penelitian Kimia: Validitas Eksperimen & Variabel Perancu',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Variabel Perancu (Confounding Variable) dalam Desain Eksperimen Kimia',
    question_text: `Seorang siswa ingin menguji hipotesis bahwa penambahan vitamin C (asam askorbat) dapat mencegah oksidasi pencokelatan enzimatis pada potongan buah apel yang terpapar udara. Ia merancang eksperimen sebagai berikut:
- **Sampel A:** Potongan apel direndam dalam larutan vitamin C $1\\%$ yang dibuat dengan pelarut air dingin ($10^\\circ\\text{C}$), kemudian diletakkan di piring terbuka pada suhu ruang.
- **Sampel B:** Potongan apel dibiarkan begitu saja di udara terbuka pada suhu ruang tanpa perlakuan apapun.

Setelah 2 jam, Sampel A tetap segar dan berwarna cerah, sedangkan Sampel B berubah menjadi kecokelatan. Siswa tersebut langsung menyimpulkan bahwa vitamin C $100\\%$ efektif mencegah pencokelatan apel.

Kelemahan paling mendasar dari desain eksperimen siswa tersebut ditinjau dari prinsip metode ilmiah adalah ....

A. Tidak mengukur massa apel sebelum dan sesudah eksperimen menggunakan neraca analitik  
B. Adanya variabel perancu (*confounding variables*), yaitu faktor perendaman dalam cairan dan suhu dingin air yang tidak dikontrol dengan menyediakan kontrol berupa potongan apel yang direndam dalam air dingin tanpa vitamin C  
C. Eksperimen seharusnya menggunakan larutan asam sulfat pekat sebagai pengganti vitamin C  
D. Waktu pengamatan 2 jam terlalu lama karena enzim polifenol oksidase bekerja dalam orde milidetik  
E. Siswa seharusnya mengukur pH apel menggunakan elektroda kaca standar sebelum membuat hipotesis`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Variabel Perancu (*Confounding Variable*):**
   - Pada Sampel A, terdapat dua perlakuan sekaligus yang berbeda dari Sampel B:
     1. Adanya senyawa vitamin C (variabel bebas yang ingin diuji).
     2. Adanya efek fisik perendaman dalam air (mencegah kontak langsung permukaan apel dengan oksigen atmosfer).
     3. Efek temperatur dingin air ($10^\\circ\\text{C}$) yang dapat menurunkan laju aktivitas enzim polifenol oksidase.
2. **Ketiadaan Kontrol Eksperimen yang Tepat:**
   - Tanpa sampel kontrol berupa potongan apel yang direndam dalam air dingin murni ($10^\\circ\\text{C}$) tanpa vitamin C, siswa tidak dapat memastikan apakah pencegahan pencokelatan disebabkan oleh aktivitas antioksidan vitamin C atau sekadar efek fisik lapisan air yang menghalangi difusi oksigen dan suhu dingin yang memperlambat reaksi enzimatis.
3. **Koreksi Desain:**
   Desain ilmiah yang valid mewajibkan pengendalian seluruh variabel selain variabel bebas. Opsi B tepat mengidentifikasi kelemahan mendasar tersebut.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi Olimpiade Sains Kimia (OSK / OSP)',
    tags: ['metode-ilmiah', 'desain-eksperimen', 'variabel-bebas-terikat-kontrol', 'kontrol-positif-negatif'],
  },
  {
    id: 101021,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Desain Sintesis Kimia Hijau: Adisi vs Substitusi vs Kondensasi',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Evaluasi Komprehensif Ekonomi Atom Tiga Tipe Reaksi Sintesis Kimia Organik',
    question_text: `Konsep Kimia Hijau menyatakan bahwa reaksi adisi umumnya memiliki nilai ekonomi atom teoretis yang jauh lebih tinggi daripada reaksi substitusi atau eliminasi. Untuk menguji pernyataan ini, perhatikan tiga reaksi sintesis senyawa turunan hidrokarbon berikut:

**Reaksi 1 (Adisi Halogenasi Etena):**
$$\\ce{CH2=CH2 + Br2 -> CH2Br-CH2Br}$$
Diketahui: $M_r\\ \\ce{C2H4} = 28{,}05$, $M_r\\ \\ce{Br2} = 159{,}80$, $M_r\\ \\ce{C2H4Br2} = 187{,}85\\ \\text{g/mol}$.

**Reaksi 2 (Substitusi Brominasi Etana):**
$$\\ce{CH3-CH3 + Br2 -> CH3-CH2Br + HBr}$$
Diketahui: $M_r\\ \\ce{C2H6} = 30{,}07$, $M_r\\ \\ce{Br2} = 159{,}80$, $M_r\\ \\ce{C2H5Br} = 108{,}97$, $M_r\\ \\ce{HBr} = 80{,}91\\ \\text{g/mol}$.

**Reaksi 3 (Kondensasi Esterifikasi Etil Asetat):**
$$\\ce{CH3COOH + C2H5OH -> CH3COOC2H5 + H2O}$$
Diketahui: $M_r\\ \\ce{CH3COOH} = 60{,}05$, $M_r\\ \\ce{C2H5OH} = 46{,}07$, $M_r\\ \\ce{CH3COOC2H5} = 88{,}11$, $M_r\\ \\ce{H2O} = 18{,}02\\ \\text{g/mol}$.

Berdasarkan data massa molar tersebut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung persentase Ekonomi Atom (% Atom Economy) teoritis untuk Reaksi 1, Reaksi 2, dan Reaksi 3 terhadap produk organiknya masing-masing!',
        points: 2.5,
        rubric: 'Menghitung Reaksi 1 = 100,0% (1 poin), Reaksi 2 = 57,39% (0.8 poin), dan Reaksi 3 = 83,03% (0.7 poin).',
        expected_answer: 'Reaksi 1 = 100,0%; Reaksi 2 = 57,39%; Reaksi 3 = 83,03%'
      },
      {
        label: 'b',
        question_text: 'Jelaskan secara teoretis mengapa reaksi adisi selalu memiliki nilai % Atom Economy ideal sebesar 100%, dan berikan rekomendasi modifikasi untuk Reaksi 2 agar limbah bromin dapat diminimalkan!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa reaksi adisi menggabungkan seluruh atom reaktan ke dalam satu produk tunggal tanpa produk samping (1.5 poin) dan menyarankan daur ulang HBr menjadi Br2 kembali melalui oksidasi ramah lingkungan (misal dengan H2O2) (1 poin).',
        expected_answer: 'Reaksi adisi menggabungkan semua atom reaktan menjadi 1 produk tanpa produk samping (% AE = 100%). Limbah HBr pada Reaksi 2 dapat direoksidasi kembali menjadi Br2.'
      }
    ],
    expected_final_answer: 'a. Reaksi 1 = 100,0%, Reaksi 2 = 57,39%, Reaksi 3 = 83,03%; b. Reaksi adisi tidak menghasilkan produk samping limbah; HBr dapat didaur ulang menjadi Br2.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan % Ekonomi Atom (Bobot: 2.5 Poin)**
   - **Reaksi 1 (Adisi):**
     $$\\%\\ \\text{AE}_1 = \\frac{187{,}85}{28{,}05 + 159{,}80} \\times 100\\% = \\frac{187{,}85}{187{,}85} \\times 100\\% = \\mathbf{100{,}0\\%}$$
     *(Skor: 1.0 Poin)*
   - **Reaksi 2 (Substitusi):**
     $$\\%\\ \\text{AE}_2 = \\frac{108{,}97}{30{,}07 + 159{,}80} \\times 100\\% = \\frac{108{,}97}{189{,}87} \\times 100\\% = \\mathbf{57{,}39\\%}$$
     *(Skor: 0.8 Poin)*
   - **Reaksi 3 (Kondensasi):**
     $$\\%\\ \\text{AE}_3 = \\frac{88{,}11}{60{,}05 + 46{,}07} \\times 100\\% = \\frac{88{,}11}{106{,}12} \\times 100\\% = \\mathbf{83{,}03\\%}$$
     *(Skor: 0.7 Poin)*

2. **Sub-soal (b): Analisis Mekanisme Reaksi & Rekayasa Hijau (Bobot: 2.5 Poin)**
   - **Keunggulan Reaksi Adisi:** Pada reaksi adisi, ikatan rangkap dua (ikatan $\\pi$) reaktan terbuka untuk mengikat seluruh atom dari molekul pereaksi kedua. Karena tidak ada pemutusan gugus yang dilepaskan, **seluruh massa atom dari semua reaktan terinkorporasi secara sempurna** ke dalam satu molekul produk target tanpa menghasilkan zat samping limbah apapun (efisiensi atomik intrinsik $100\\%$). *(Skor: 1.5 Poin)*
   - **Rekomendasi Daur Ulang Reaksi 2:** Gas asam bromida ($\\ce{HBr}$) sampingan yang mengandung $50\\%$ atom bromin reaktan awal dapat dialirkan ke dalam unit oksidasi katalitik dengan pereaksi hijau hidrogen peroksida:
     $$\\ce{2HBr + H2O2 -> Br2 + 2H2O}$$
     Dengan meregenerasi $\\ce{Br2}$ untuk digunakan kembali pada siklus reaksi berikutnya, pemborosan atom bromin dapat ditekan mendekati nol. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Formulasi Perhitungan % Atom Economy Tiap Tipe Reaksi:
• Reaksi 1 (Adisi murni): ....
• Reaksi 2 (Substitusi berproduk samping HBr): ....
• Reaksi 3 (Kondensasi berproduk samping H2O): ....

2. Analisis Konseptual Desain Reaksi Hijau:
• Alasan mekanistik efisiensi reaksi adisi: ....
• Strategi penangkapan dan daur ulang atom limbah: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Tingkat Kabupaten/Kota (OSK)',
    tags: ['kimia-hijau', 'ekonomi-atom', 'reaksi-adisi', 'reaksi-substitusi'],
  },
  {
    id: 101022,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Stoikiometri Mitigasi Tumpahan Bahan Berbahaya & Termokimia Netralisasi',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi Stoikiometri Netralisasi Darurat Tumpahan Asam Sulfat Pekat',
    question_text: `Di lantai laboratorium kimia terjadi kecelakaan tumpahan $50{,}0\\ \\text{mL}$ asam sulfat pekat ($\\ce{H2SO4}\\ 98\\%\\ \\text{b/b}$, massa jenis $\\rho = 1{,}84\\ \\text{g/mL}$, $M_r = 98{,}08\\ \\text{g/mol}$). Sesuai prosedur standar operasional tanggap darurat, tumpahan asam pekat tidak boleh disiram air secara langsung, melainkan harus dinetralkan secara perlahan menggunakan serbuk natrium bikarbonat ($\\ce{NaHCO3}$, $M_r = 84{,}01\\ \\text{g/mol}$) kering menurut persamaan reaksi:

$$\\ce{H2SO4(aq) + 2 NaHCO3(s) -> Na2SO4(aq) + 2 CO2(g) + 2 H2O(l)}$$

Berdasarkan data stoikiometri tersebut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitung massa asam sulfat murni (H2SO4) yang terdapat dalam 50,0 mL tumpahan tersebut, serta hitung jumlah mol H2SO4 yang harus dinetralkan!',
        points: 2.5,
        rubric: 'Menghitung massa larutan = 50,0 * 1,84 = 92,0 g (0.5 poin), massa H2SO4 murni = 98% * 92,0 = 90,16 g (1 poin), dan mol H2SO4 = 90,16 / 98,08 = 0,919 mol (1 poin).',
        expected_answer: 'Massa murni = 90,16 g; Mol H2SO4 = 0,919 mol'
      },
      {
        label: 'b',
        question_text: 'Hitung massa minimum serbuk NaHCO3 teoretis yang diperlukan untuk menetralkan seluruh tumpahan asam sulfat tersebut, dan hitung volume gas CO2 yang dilepaskan pada kondisi ruang (RTP, Vm = 24,45 L/mol)!',
        points: 2.5,
        rubric: 'Menghitung mol NaHCO3 = 2 * 0,919 = 1,838 mol (0.5 poin), massa NaHCO3 = 1,838 * 84,01 = 154,4 g (1 poin), dan volume CO2 = 1,838 mol * 24,45 L/mol = 44,9 L (1 poin).',
        expected_answer: 'Massa NaHCO3 = 154,4 g; Volume gas CO2 = 44,9 L'
      }
    ],
    expected_final_answer: 'a. Massa murni H2SO4 = 90,16 g, mol = 0,919 mol; b. Massa NaHCO3 = 154,4 g, Volume gas CO2 = 44,9 L.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Analisis Kuantitas Asam Tumpah (Bobot: 2.5 Poin)**
   - **Massa total cairan tumpahan:**
     $$m_{\\text{larutan}} = V \\times \\rho = 50{,}0\\ \\text{mL} \\times 1{,}84\\ \\text{g/mL} = 92{,}0\\ \\text{g}$$
   - **Massa $\\ce{H2SO4}$ murni ($98\\%$):**
     $$m_{\\ce{H2SO4}} = 0{,}98 \\times 92{,}0\\ \\text{g} = 90{,}16\\ \\text{g}$$
     *(Skor: 1.5 Poin)*
   - **Jumlah mol $\\ce{H2SO4}$:**
     $$n_{\\ce{H2SO4}} = \\frac{90{,}16\\ \\text{g}}{98{,}08\\ \\text{g/mol}} = \\mathbf{0{,}9192\\ \\text{mol}}$$
     *(Skor: 1.0 Poin)*

2. **Sub-soal (b): Reagen Netralisasi dan Pelepasan Gas (Bobot: 2.5 Poin)**
   - **Rasio stoikiometri reaksi:** $1\\ \\text{mol}\\ \\ce{H2SO4} \\sim 2\\ \\text{mol}\\ \\ce{NaHCO3} \\sim 2\\ \\text{mol}\\ \\ce{CO2}$.
   - **Mol $\\ce{NaHCO3}$ yang dibutuhkan:**
     $$n_{\\ce{NaHCO3}} = 2 \\times 0{,}9192\\ \\text{mol} = 1{,}8384\\ \\text{mol}$$
   - **Massa serbuk $\\ce{NaHCO3}$ minimum:**
     $$m_{\\ce{NaHCO3}} = 1{,}8384\\ \\text{mol} \\times 84{,}01\\ \\text{g/mol} = \\mathbf{154{,}4\\ \\text{g}}$$
     *(Skor: 1.5 Poin)*
   - **Volume gas $\\ce{CO2}$ yang dibebaskan (kondisi RTP):**
     $$V_{\\ce{CO2}} = n_{\\ce{CO2}} \\times V_m = 1{,}8384\\ \\text{mol} \\times 24{,}45\\ \\text{L/mol} = \\mathbf{44{,}95\\ \\text{L}}$$
     *(Skor: 1.0 Poin)*
   *(Catatan K3: Pelepasan gas $\\ce{CO2}$ yang masif sebanyak $\\approx 45\\ \\text{L}$ menegaskan pentingnya ventilasi ruang terbuka dan penaburan serbuk secara bertahap untuk mencegah semburan busa effervescent).*`,
    solution_framework_template: `1. Perhitungan Massa dan Mol Tumpahan:
• Hubungan volume, densitas, dan kadar kemurnian % b/b: ....
• Mol asam sulfat yang aktif: ....

2. Stoikiometri Reaksi Netralisasi:
• Perbandingan koefisien reaksi NaHCO3 terhadap H2SO4: ....
• Massa penetral teoritis: ....
• Volume gas CO2 yang dihasilkan pada kondisi RTP: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia / Penilaian K3 Terpadu',
    tags: ['keselamatan-kerja-lab', 'pertolongan-pertama-lab', 'reaksi-netralisasi', 'stoikiometri-reaksi'],
  },
  {
    id: 101023,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Metrologi Kimia: Kalibrasi Gravimetri Alat Ukur Volumetrik',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalibrasi Gravimetri Labu Ukur dan Pipet Volume Berdasarkan Densitas Air',
    question_text: `Untuk memastikan keakuratan labu ukur volumetrik bertanda nominal $100{,}0\\ \\text{mL}$, seorang analis melakukan kalibrasi gravimetri pada temperatur $20{,}0^\\circ\\text{C}$ dan tekanan $1\\ \\text{atm}$. 

Data eksperimen penimbangan neraca analitik:
- Massa labu ukur kosong kering berpenutup: $m_0 = 54{,}3210\\ \\text{g}$
- Massa labu ukur yang diisi air suling murni hingga tepat garis tanda batas: $m_1 = 153{,}9850\\ \\text{g}$
- Pada temperatur $20{,}0^\\circ\\text{C}$, densitas air suling yang terkoreksi gaya apung udara (*buoyancy correction factor*) adalah $\\rho_{\\text{koreksi}} = 0{,}99718\\ \\text{g/mL}$.
- Koefisien muai volumetrik kaca borosilikat adalah $\\gamma = 9{,}9 \\times 10^{-6}\\ ^\\circ\\text{C}^{-1}$.

Jawablah pertanyaan berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah volume aktual air yang ditampung oleh labu ukur tersebut pada temperatur 20,0 °C!',
        points: 2.5,
        rubric: 'Menghitung massa air m = m1 - m0 = 99,6640 g (1 poin), dan menghitung volume V = m / rho = 99,6640 / 0,99718 = 99,946 mL (1.5 poin).',
        expected_answer: 'V_aktual = 99,946 mL'
      },
      {
        label: 'b',
        question_text: 'Berdasarkan standar ISO/ASTM Kelas A, batas toleransi penyimpangan labu ukur 100 mL adalah ± 0,08 mL. Tentukan penyimpangan mutlak (galat mutlak) labu ukur tersebut dan simpulkan apakah labu ukur tersebut memenuhi standar Kelas A!',
        points: 2.5,
        rubric: 'Menghitung galat mutlak = |99,946 - 100,000| = 0,054 mL (1.5 poin) dan menyimpulkan memenuhi standar Kelas A karena 0,054 mL < 0,08 mL (1 poin).',
        expected_answer: 'Penyimpangan mutlak = 0,054 mL; Memenuhi standar Kelas A karena berada di dalam toleransi ± 0,08 mL.'
      }
    ],
    expected_final_answer: 'a. V_aktual = 99,946 mL; b. Galat mutlak = 0,054 mL, memenuhi kriteria labu ukur Kelas A.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Volume Aktual (Bobot: 2.5 Poin)**
   - **Massa bersih air suling ($m_{\\text{air}}$):**
     $$m_{\\text{air}} = m_1 - m_0 = 153{,}9850\\ \\text{g} - 54{,}3210\\ \\text{g} = 99{,}6640\\ \\text{g}$$
     *(Skor: 1.0 Poin)*
   - **Volume aktual labu ukur pada $20{,}0^\\circ\\text{C}$:**
     $$V_{\\text{aktual}} = \\frac{m_{\\text{air}}}{\\rho_{\\text{koreksi}}} = \\frac{99{,}6640\\ \\text{g}}{0{,}99718\\ \\text{g/mL}} = \\mathbf{99{,}9458\\ \\text{mL}} \\approx \\mathbf{99{,}946\\ \\text{mL}}$$
     *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Evaluasi Standar Mutu Toleransi ISO (Bobot: 2.5 Poin)**
   - **Penyimpangan Mutlak (Galat Kalibrasi):**
     $$\\Delta V = |V_{\\text{aktual}} - V_{\\text{nominal}}| = |99{,}946\\ \\text{mL} - 100{,}000\\ \\text{mL}| = \\mathbf{0{,}054\\ \\text{mL}}$$
     *(Skor: 1.5 Poin)*
   - **Kesimpulan Uji Mutu:**
     Batas toleransi kesalahan maksimum yang diizinkan untuk labu ukur $100\\ \\text{mL}$ Kelas A adalah $\\pm 0{,}080\\ \\text{mL}$. Karena nilai penyimpangan terukur ($0{,}054\\ \\text{mL}$) **lebih kecil** daripada batas toleransi ($0{,}054\\ \\text{mL} < 0{,}080\\ \\text{mL}$), maka labu ukur tersebut **LULUS KALIBRASI dan memenuhi standar mutu ISO/ASTM Kelas A** untuk analisis kimia kuantitatif presisi tinggi. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Kalkulasi Gravimetri Penimbangan Cairan:
• Selisih penimbangan wadah isi - wadah kosong: ....
• Pembagian terhadap densitas terkoreksi apung: ....
• Volume terukur pada temperatur kalibrasi: ....

2. Evaluasi Ambang Batas Standar Industri:
• Perhitungan selisih absolut terhadap volume nominal: ....
• Komparasi dengan kriteria toleransi Kelas A (± 0,08 mL): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Seleksi OSN Kimia Tingkat Nasional',
    tags: ['alat-laboratorium-kimia', 'akurasi-dan-presisi', 'labu-ukur', 'kalibrasi-gravimetri'],
  },
  {
    id: 101024,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Pemisahan Campuran Multikomponen & Neraca Massa Pemulihan',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Desain Alur Pemisahan Campuran Tiga Komponen dan Neraca Pemulihan (Recovery Rate)',
    question_text: `Suatu sampel padatan seberat $15{,}00\\ \\text{g}$ diketahui mengandung campuran tiga komponen zat:
1. Kristal Iodin ($\\ce{I2}$): padatan kovalen nonpolar yang menyublim pada pemanasan lembut.
2. Pasir Silika ($\\ce{SiO2}$): padatan jaringan kovalen raksasa yang tidak larut dalam air.
3. Garam Natrium Klorida ($\\ce{NaCl}$): padatan ionik yang sangat mudah larut dalam air ($36\\ \\text{g}/100\\ \\text{g}\\ \\ce{H2O}$).

Seorang siswa merancang alur pemisahan bertahap:
- **Tahap 1:** Sampel dipanaskan di dalam cawan penguap yang ditutup kaca arloji berisi es batu di atasnya hingga seluruh uap ungu hilang. Kristal pada dasar kaca arloji dikumpulkan dan ditimbang massanya $m_{\\ce{I2}} = 2{,}40\\ \\text{g}$.
- **Tahap 2:** Residu padatan yang tersisa dilarutkan dengan $50\\ \\text{mL}$ air suling panas, diaduk sempurna, lalu disaring menggunakan kertas saring kering yang telah ditimbang ($m_{\\text{kertas}} = 1{,}10\\ \\text{g}$).
- **Tahap 3:** Residu pada kertas saring dicuci dengan air suling dingin, dikeringkan dalam oven hingga massa konstan, dan diperoleh massa total kertas + residu $= 9{,}20\\ \\text{g}$.
- **Tahap 4:** Filtrat hasil penyaringan diuapkan airnya hingga kering sempurna, menghasilkan padatan kristal putih dengan massa $m_{\\ce{NaCl}} = 3{,}15\\ \\text{g}$.

Jawablah pertanyaan analisis neraca massa berikut:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Hitunglah persentase massa masing-masing komponen (I2, SiO2, dan NaCl) yang berhasil diperoleh kembali terhadap massa sampel awal!',
        points: 2.5,
        rubric: 'Menghitung massa pasir SiO2 = 9,20 - 1,10 = 8,10 g (0.5 poin), % I2 = 2,40/15,00 * 100% = 16,00% (0.6 poin), % SiO2 = 8,10/15,00 * 100% = 54,00% (0.7 poin), dan % NaCl = 3,15/15,00 * 100% = 21,00% (0.7 poin).',
        expected_answer: '% I2 = 16,00%; % SiO2 = 54,00%; % NaCl = 21,00%'
      },
      {
        label: 'b',
        question_text: 'Hitung persentase total pemulihan (Total Recovery Rate) dari seluruh proses pemisahan tersebut, dan sebutkan dua kemungkinan penyebab hilangnya sebagian massa sampel!',
        points: 2.5,
        rubric: 'Menghitung total massa pulih = 2,40 + 8,10 + 3,15 = 13,65 g, % Recovery = 13,65 / 15,00 * 100% = 91,00% (1.5 poin), dan menyebutkan 2 sumber galat seperti uap iodin lolos ke udara atau garam tertinggal di pori kertas saring (1 poin).',
        expected_answer: 'Total Recovery Rate = 91,00%. Galat massa hilang akibat sublimasi iodin yang tidak terkondensasi sempurna dan percikan kristal saat penguapan filtrat.'
      }
    ],
    expected_final_answer: 'a. % I2 = 16,00%, % SiO2 = 54,00%, % NaCl = 21,00%; b. Total Recovery = 91,00%; galat berasal dari uap iodin lepas dan garam tertinggal di pori saringan.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Perhitungan Persentase Massa Masing-Masing Komponen (Bobot: 2.5 Poin)**
   - **Komponen 1 (Iodin $\\ce{I2}$):**
     $$\\%\\ \\ce{I2} = \\frac{2{,}40\\ \\text{g}}{15{,}00\\ \\text{g}} \\times 100\\% = \\mathbf{16{,}00\\%}$$
     *(Skor: 0.6 Poin)*
   - **Komponen 2 (Pasir Silika $\\ce{SiO2}$):**
     Massa pasir murni $= m_{\\text{kertas+residu}} - m_{\\text{kertas}} = 9{,}20\\ \\text{g} - 1{,}10\\ \\text{g} = 8{,}10\\ \\text{g}$.
     $$\\%\\ \\ce{SiO2} = \\frac{8{,}10\\ \\text{g}}{15{,}00\\ \\text{g}} \\times 100\\% = \\mathbf{54{,}00\\%}$$
     *(Skor: 1.2 Poin)*
   - **Komponen 3 (Garam $\\ce{NaCl}$):**
     $$\\%\\ \\ce{NaCl} = \\frac{3{,}15\\ \\text{g}}{15{,}00\\ \\text{g}} \\times 100\\% = \\mathbf{21{,}00\\%}$$
     *(Skor: 0.7 Poin)*

2. **Sub-soal (b): Persentase Pemulihan & Analisis Galat (Bobot: 2.5 Poin)**
   - **Massa Total yang Berhasil Dipulihkan:**
     $$m_{\\text{total pulih}} = 2{,}40\\ \\text{g} + 8{,}10\\ \\text{g} + 3{,}15\\ \\text{g} = 13{,}65\\ \\text{g}$$
   - **Persentase Pemulihan (*Recovery Rate*):**
     $$\\%\\ \\text{Recovery} = \\frac{13{,}65\\ \\text{g}}{15{,}00\\ \\text{g}} \\times 100\\% = \\mathbf{91{,}00\\%}$$
     *(Massa yang hilang $= 15{,}00 - 13{,}65 = 1{,}35\\ \\text{g}$ atau $9{,}00\\%$).* *(Skor: 1.5 Poin)*
   - **Dua Penyebab Kehilangan Massa:**
     1. Sebagian uap gas iodin keluar ke udara bebas di sekitar celah antara cawan dan kaca arloji tanpa sempat mengkristal pada bagian bawah kaca es.
     2. Sebagian kecil padatan garam $\\ce{NaCl}$ tertahan di dalam pori-pori matriks kertas saring selama tahap pencucian, atau terjadi percikan mikro (*decrepitation/splattering*) padatan garam saat penguapan air di atas nyala bunsen. *(Skor: 1.0 Poin)*`,
    solution_framework_template: `1. Analisis Neraca Massa Fraksi Komponen:
• Identifikasi massa residu silika setelah dikurangi tara kertas: ....
• Kalkulasi persentase massa individual terhadap 15,00 g sampel: ....

2. Evaluasi Persentase Pemulihan dan Analisis Galat:
• Penjumlahan total massa hasil pemisahan: ....
• Rasio terhadap massa mula-mula: ....
• Identifikasi titik-titik kebocoran analit (uap lolos, adsorpsi saringan): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan Olimpiade Sains Kimia (OSK / OSP)',
    tags: ['pemisahan-campuran', 'sublimasi', 'filtrasi', 'kristalisasi', 'neraca-massa'],
  },
  {
    id: 101025,
    sma_topic_number: 1,
    sma_topic_id: 101,
    curriculum: 'sma',
    grade: 'Kelas 10',
    curriculum_phase: 'Fase E',
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Studi Kasus K3: Hierarki Pengendalian Bahaya & Termal Reaksi Runaway',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kegagalan Protokol K3 pada Eksotermik Runaway Sintesis Nitrasi',
    question_text: `Sebuah studi kasus investigasi kecelakaan laboratorium kimia melaporkan peristiwa ledakan bejana kaca pada sintesis nitrasi senyawa aromatik. Mahasiswa praktikan mencampurkan $100\\ \\text{mL}$ asam nitrat pekat dan $150\\ \\text{mL}$ asam sulfat pekat (campuran asam nitrasi) ke dalam labu leher tiga di atas meja laboratorium terbuka tanpa penangas es. 

Karena terburu-buru, praktikan menuangkan senyawa organik substrat cair sekaligus dalam volume besar (bukan tetes demi tetes). Dalam waktu 45 detik, temperatur larutan melonjak tak terkendali dari $25^\\circ\\text{C}$ hingga melampaui $130^\\circ\\text{C}$ (*thermal runaway reaction*), menghasilkan semburan uap gas coklat pekat $\\ce{NO2}$, tekanan internal mendadak yang memecahkan bejana kaca, dan percikan asam panas mengenai lengan praktikan yang hanya mengenakan kaos berlengan pendek.

Berdasarkan prinsip keselamatan kerja laboratorium modern dan **Hierarki Pengendalian Bahaya (*Hierarchy of Hazard Controls*)**:`,
    sub_questions: [
      {
        label: 'a',
        question_text: 'Jelaskan secara termodinamika dan kinetika kimia penyebab terjadinya fenomena thermal runaway pada reaksi tersebut!',
        points: 2.5,
        rubric: 'Menjelaskan bahwa reaksi nitrasi sangat eksotermik (Delta H < 0) melepaskan kalor besar (1 poin), dan peningkatan suhu menaikkan laju reaksi secara eksponensial (Persamaan Arrhenius) sehingga kalor diproduksi jauh lebih cepat daripada laju pembuangannya, memicu reaksi berantai tak terkendali (1.5 poin).',
        expected_answer: 'Reaksi sangat eksotermik; pelepasan panas meningkatkan laju reaksi secara eksponensial sehingga kalor menumpuk lebih cepat daripada pendinginan.'
      },
      {
        label: 'b',
        question_text: 'Rancanglah 3 langkah mitigasi pencegahan kecelakaan tersebut berdasarkan 3 tingkatan Hierarki Pengendalian Bahaya: Pengendalian Teknik (Engineering Control), Pengendalian Administratif (Administrative/SOP), dan Alat Pelindung Diri (APD)!',
        points: 2.5,
        rubric: 'Menyebutkan Engineering: menggunakan penangas es berpengaduk mekanik dan pengerjaan di lemari asam (1 poin); Administrative: SOP penambahan reagen tetes demi tetes via corong tetes dengan pemantauan termometer (0.8 poin); APD: jas lab lengan panjang tahan asam, sarung tangan nitril/butil tebal, dan face shield (0.7 poin).',
        expected_answer: 'Engineering: lemari asam & penangas es; Administrative: SOP penambahan tetes demi tetes bertahap dengan termometer; APD: jas lab lengan panjang & face shield.'
      }
    ],
    expected_final_answer: 'a. Laju pelepasan kalor eksotermik melampaui laju pendinginan memicu lonjakan eksponensial Arrhenius; b. Engineering: lemari asam + penangas es; Administratif: penambahan bertetes; APD: jas lengan panjang + face shield.',
    solution_rubric: `**Kunci dan Rubrik Penilaian Lengkap:**

1. **Sub-soal (a): Analisis Kinetika & Termodinamika Thermal Runaway (Bobot: 2.5 Poin)**
   - Reaksi nitrasi dan pembentukan ion nitronium ($\\ce{NO2+}$) dari campuran asam sulfat-nitrat bersifat **sangat eksotermik** ($\\Delta H < 0$). *(Skor: 1.0 Poin)*
   - Berdasarkan **Persamaan Arrhenius** ($k = A e^{-E_a/RT}$), laju reaksi kimia meningkat secara eksponensial terhadap kenaikan temperatur. Ketika pereaksi ditambahkan sekaligus tanpa pendinginan, kalor reaksi terakumulasi dengan cepat di dalam bejana. Kenaikan suhu lokal ini melipatgandakan laju reaksi, yang pada gilirannya melepaskan kalor yang lebih besar lagi dalam waktu yang semakin singkat (*umpan balik positif / positive feedback loop*). Karena laju pelepasan panas internal jauh melampaui laju pelepasan kalor ke lingkungan, terjadi lonjakan suhu mendadak (*runaway*), mendidihkan pelarut secara eksplosif dan menghasilkan tekanan gas $\\ce{NO2}$ yang memecahkan bejana. *(Skor: 1.5 Poin)*

2. **Sub-soal (b): Rencana Mitigasi Hierarki Pengendalian Bahaya (Bobot: 2.5 Poin)**
   - **Pengendalian Rekayasa Teknis (*Engineering Controls*):**
     1. Pengerjaan wajib dilakukan di dalam **lemari asam (*fume hood*)** tertutup untuk mengisolasi potensi ledakan dan menghisap gas beracun $\\ce{NO2}$.
     2. Bejana reaksi wajib ditempatkan di dalam **penangas es/air dingin bersirkulasi (*ice bath*)** yang dilengkapi sistem pengaduk magnetik konstan (*magnetic stirrer*) untuk menyerap kalor reaksi secara kontinu. *(Skor: 1.0 Poin)*
   - **Pengendalian Administratif & Prosedur (*Administrative Controls*):**
     Penyusunan dan penerapan SOP ketat: reaktan organik wajib ditambahkan **secara perlahan tetes demi tetes menggunakan corong pisah/corong tetes (*dropping funnel*)** sambil terus memantau termometer digital internal agar temperatur campuran reaksi tidak pernah melampaui batas aman ($< 50^\\circ\\text{C}$). *(Skor: 0.8 Poin)*
   - **Alat Pelindung Diri (*Personal Protective Equipment / PPE*):**
     Mewajibkan pemakaian **jas laboratorium berkancing penuh berbahan katun tebal atau apron tahan bahan kimia korosif**, **sarung tangan tebal anti-asam (butil/nitril)**, dan **pelindung wajah penuh (*face shield*)** di samping kacamata pelindung *goggles*. *(Skor: 0.7 Poin)*`,
    solution_framework_template: `1. Mekanisme Ilmiah Thermal Runaway:
• Fenomena eksotermisitas dan pelepasan entalpi pelarutan: ....
• Efek eksponensial Arrhenius terhadap umpan balik kalor: ....
• Tekanan uap mendadak vs ketahanan bejana kaca: ....

2. Formulasi Hierarki Pengendalian K3:
• Rekayasa teknis (lemari asam, pendingin penangas es): ....
• Pengendalian administratif (laju penambahan tetes, monitor suhu): ....
• Proteksi diri terakhir (APD lengkap, pelindung wajah): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia Bidang K3 & Industri',
    tags: ['keselamatan-kerja-lab', 'reaksi-eksotermik', 'lemari-asam', 'hierarki-pengendalian-bahaya'],
  },
];
