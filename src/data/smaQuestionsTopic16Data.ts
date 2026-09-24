/**
 * smaQuestionsTopic16Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F)
 * 
 * BATCH 16: Kimia Karbon (Turunan Alkana, Benzena) & Makromolekul
 * Topik 16 SMA | Modul ID 116 | OSN Pilar 10 (Kimia Organik & Biokimia)
 * 
 * Distribusi:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian Terstruktur)  [ID 116001 - 116025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 116001 - 116025]
 * - 40% Sulit  (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 116001 - 116025]
 * Total: 25 Butir Soal Terstandarisasi (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_16_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 116001 - 116025)
  // =========================================================================
  {
    id: 116001,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Tata Nama IUPAC Turunan Alkana',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penamaan IUPAC Senyawa Alkohol Bercabang dan Keton',
    question_text: `Diberikan rumus struktur dari dua senyawa turunan alkana berikut:
- Senyawa (1): $\\ce{CH3-CH(CH3)-CH(OH)-CH(CH3)-CH3}$
- Senyawa (2): $\\ce{CH3-CH2-CH(CH2CH3)-CO-CH3}$

Nama IUPAC yang benar dan tepat untuk kedua senyawa tersebut berturut-turut adalah ....

A. 2,4-dimetil-3-pentanol dan 3-etil-2-pentanon  
B. 2,4-dimetil-3-pentanol dan 3-metil-2-heksanon  
C. 1,3-diisopropil alkohol dan 2-etil-4-pentanon  
D. 3-hidroksi-2,4-dimetilpentana dan 3-etil-4-pentanon  
E. 2,4-dimetil-2-pentanol dan 3-etil-2-butanon`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Senyawa (1): $\\ce{CH3-CH(CH3)-CH(OH)-CH(CH3)-CH3}$**
   - Senyawa ini memiliki gugus hidroksil ($-\\ce{OH}$), tergolong deret alkanol.
   - Rantai utama karbon terpanjang yang mengandung gugus $-\\ce{OH}$ terdiri dari 5 atom karbon (pentana).
   - Penomoran rantai utama dimulai dari ujung terdekat dengan gugus $-\\ce{OH}$ (karena simetris, $-\\ce{OH}$ berada di C-3 dari kedua arah):
     $$\\ce{C_1H3 - C_2H(CH3) - C_3H(OH) - C_4H(CH3) - C_5H3}$$
   - Cabang alkil: terdapat dua gugus metil pada C-2 dan C-4 (2,4-dimetil).
   - Nama IUPAC: **2,4-dimetil-3-pentanol**.
2. **Analisis Senyawa (2): $\\ce{CH3-CH2-CH(CH2CH3)-CO-CH3}$**
   - Senyawa ini memiliki gugus karbonil non-terminal ($-\\ce{CO}-$), tergolong deret alkanon (keton).
   - Penomoran dimulai dari ujung terdekat dengan gugus karbonil: C-1 adalah $-\\ce{CH3}$ di sebelah kanan gugus karbonil C-2:
     $$\\ce{C_5H3 - C_4H2 - C_3H(CH2CH3) - C_2(=O) - C_1H3}$$
   - Rantai karbon terpanjang adalah 5 atom karbon (pentanon).
   - Pada C-3 terikat cabang etil ($-\\ce{CH2CH3}$).
   - Nama IUPAC: **3-etil-2-pentanon**.

Dengan demikian, pasangan nama IUPAC yang benar adalah 2,4-dimetil-3-pentanol dan 3-etil-2-pentanon (Opsi A).`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Formatif Kimia SMA Fase F',
    tags: ['tata-nama-iupac', 'alkanol', 'alkanon', 'turunan-alkana', 'rantai-karbon'],
  },
  {
    id: 116002,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Isomer Gugus Fungsi',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Pasangan Isomer Fungsional Turunan Alkana',
    question_text: `Pasangan senyawa karbon berikut yang keduanya merupakan pasangan isomer gugus fungsi adalah ....

A. Etanol ($\\ce{CH3CH2OH}$) dan dimetil eter ($\\ce{CH3OCH3}$); serta propanal ($\\ce{CH3CH2CHO}$) dan propanon ($\\ce{CH3COCH3}$)  
B. 1-propanol dan 2-propanol; serta asam butanoat dan butil asetat  
C. Asam propanoat dan metil etanoat; serta $n$-butana dan 2-metilpropana  
D. Metanol dan metanal; serta etanol dan asam etanoat  
E. Etil metil eter dan dietil eter; serta aseton dan asetaldehid`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Isomer Gugus Fungsi:**
   Dua atau lebih senyawa yang memiliki **rumus molekul umum yang sama** namun memiliki **jenis gugus fungsi yang berbeda**:
   - **Alkohol & Eter** berumus umum $\\ce{C_n H_{2n+2} O}$:
     Etanol ($\\ce{C2H6O}$) dan dimetil eter ($\\ce{C2H6O}$) memiliki rumus molekul identik namun gugus fungsi berbeda ($-\\ce{OH}$ vs $-\\ce{O}-$) $\\implies$ **Isomer Fungsi**.
   - **Aldehid & Keton** berumus umum $\\ce{C_n H_{2n} O}$:
     Propanal ($\\ce{C3H6O}$) dan propanon ($\\ce{C3H6O}$) memiliki rumus molekul identik namun gugus fungsi berbeda ($-\\ce{CHO}$ vs $-\\ce{CO}-$) $\\implies$ **Isomer Fungsi**.
   - **Asam Karboksilat & Ester** berumus umum $\\ce{C_n H_{2n} O2}$.
2. **Evaluasi Opsi Lain:**
   - **B salah:** 1-propanol dan 2-propanol adalah isomer posisi; asam butanoat ($\\ce{C4H8O2}$) dan butil asetat ($\\ce{C6H12O2}$) memiliki jumlah atom C berbeda.
   - **C salah:** $n$-butana dan 2-metilpropana adalah isomer kerangka.
   - **D & E salah:** Senyawa-senyawa tersebut memiliki jumlah atom C berbeda atau rumus molekul tidak sama.

Oleh karena itu, opsi A adalah pilihan yang paling tepat.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Harian Kimia SMA Fase F',
    tags: ['isomer-fungsi', 'alkohol-eter', 'aldehid-keton', 'rumus-homolog', 'turunan-alkana'],
  },
  {
    id: 116003,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Uji Diferensiasi Pereaksi Tollens dan Fehling',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Pembedaan Aldehid dan Keton melalui Uji Reduksi Perak dan Tembaga',
    question_text: `Suatu senyawa organik cair $M$ memiliki rumus molekul $\\ce{C3H6O}$. Ketika diuji di laboratorium kimia:
1. Pereaksi Tollens (larutan perak amoniakal) menghasilkan lapisan cermin perak mengkilap ($\\ce{Ag}$) pada dinding bagian dalam tabung reaksi.
2. Pereaksi Fehling menghasilkan endapan merah bata tembaga(I) oksida ($\\ce{Cu2O}$).

Berdasarkan hasil uji laboratorium tersebut, rumus struktur dan nama IUPAC dari senyawa $M$ adalah ....

A. $\\ce{CH3-CO-CH3}$, propanon  
B. $\\ce{CH3-CH2-CHO}$, propanal  
C. $\\ce{CH3-CH2-CH2-OH}$, 1-propanol  
D. $\\ce{CH3-O-CH2-CH3}$, metoksietana  
E. $\\ce{CH3-CH2-COOH}$, asam propanoat`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Rumus Molekul $\\ce{C3H6O}$:**
   Rumus molekul $\\ce{C3H6O}$ sesuai dengan deret homolog $\\ce{C_n H_{2n} O}$, yang merupakan rumus umum untuk senyawa **aldehid (alkanal)** atau **keton (alkanon)** dengan 3 atom karbon.
2. **Karakteristik Pereaksi Diferensiasi:**
   - **Aldehid (R-CHO):** Memiliki atom hidrogen yang terikat langsung pada karbonil, bersifat sebagai reduktor kuat. Mereduksi pereaksi Tollens menjadi cermin perak ($\\ce{Ag}$) dan mereduksi pereaksi Fehling menjadi endapan merah bata ($\\ce{Cu2O}$).
   - **Keton (R-CO-R\'):** Tidak memiliki atom H pada gugus karbonil, sehingga resisten terhadap oksidasi ringan dan memberikan hasil negatif (larutan tetap jernih pada uji Tollens dan tetap biru pada uji Fehling).
3. **Identifikasi Senyawa $M$:**
   Karena senyawa $M$ positif terhadap kedua pereaksi tersebut, maka senyawa $M$ adalah aldehid dengan 3 atom karbon:
   $$\\mathbf{\\ce{CH3-CH2-CHO} \\implies \\text{propanal}}$$

Dengan demikian, jawaban yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['uji-tollens', 'uji-fehling', 'aldehid-keton', 'cermin-perak', 'propanal'],
  },
  {
    id: 116004,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Oksidasi Bertingkat Alkohol',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Reaksi Oksidasi Bertingkat Alkohol Primer, Sekunder, dan Tersier',
    question_text: `Reaktivitas senyawa alkohol terhadap zat pengoksidasi kuat seperti kalium dikromat dalam suasana asam ($\\ce{K2Cr2O7/H+}$) sangat bergantung pada derajat atom karbon karbinolnya ($1^\\circ, 2^\\circ, 3^\\circ$).

Jawablah pertanyaan berikut terkait profil reaksi oksidasi alkohol:`,
    expected_final_answer: 'a) Etanol (alkohol primer) mula-mula dioksidasi menjadi etanal (aldehid): CH3CH2OH + [O] -> CH3CHO + H2O, kemudian dioksidasi lebih lanjut menjadi asam etanoat (asam asetat): CH3CHO + [O] -> CH3COOH; b) 2-propanol (alkohol sekunder) dioksidasi menjadi propanon (aseton): CH3CH(OH)CH3 + [O] -> CH3COCH3 + H2O. 2-metil-2-propanol (alkohol tersier) tidak dapat dioksidasi karena atom karbon karbinol (C-OH) tidak mengikat atom hidrogen yang dapat dilepaskan tanpa memutus kerangka ikatan C-C.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan reaksi oksidasi tahap 1 etanol menjadi etanal:
     CH3CH2OH + [O] -> CH3CHO + H2O (1.5 poin).
  2. Menuliskan reaksi oksidasi tahap 2 etanal menjadi asam etanoat:
     CH3CHO + [O] -> CH3COOH (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan reaksi oksidasi 2-propanol menjadi propanon:
     CH3CH(OH)CH3 + [O] -> CH3COCH3 + H2O (1.5 poin).
  2. Menjelaskan alasan alkohol tersier resisten terhadap oksidasi karena tidak memiliki atom H pada atom karbon karbinol (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi bertahap oksidasi etanol (alkohol primer) oleh oksidator asam mula-mula menjadi etanal lalu menjadi asam etanoat!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi tahap 1 etanol menjadi etanal (1.5 poin) dan tahap 2 etanal menjadi asam etanoat (1.0 poin).',
        expected_answer: 'CH3CH2OH + [O] -> CH3CHO + H2O; dilanjutkan CH3CHO + [O] -> CH3COOH.',
      },
      {
        label: 'b',
        question_text: `Tuliskan reaksi oksidasi 2-propanol (alkohol sekunder) menghasilkan propanon, serta jelaskan mengapa 2-metil-2-propanol (alkohol tersier) resisten terhadap oksidasi!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi oksidasi 2-propanol -> propanon (1.5 poin) dan menjelaskan ketiadaan atom H pada karbon karbinol alkohol tersier (1.0 poin).',
        expected_answer: 'CH3CH(OH)CH3 + [O] -> CH3COCH3 + H2O. Alkohol tersier tidak bereaksi karena atom C karbinol tidak memiliki atom H.',
      },
    ],
    solution_framework_template: `1. Oksidasi Bertingkat Alkohol Primer:
• Persamaan reaksi oksidasi parsial etanol membentuk aldehid: ....
• Persamaan reaksi oksidasi lanjutan aldehid membentuk asam karboksilat: ....

2. Oksidasi Alkohol Sekunder dan Kestabilan Alkohol Tersier:
• Persamaan reaksi oksidasi 2-propanol membentuk keton: ....
• Alasan mekanistik atomik mengapa alkohol tersier resisten terhadap oksidasi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['oksidasi-alkohol', 'alkohol-primer', 'alkohol-sekunder', 'alkohol-tersier', 'asam-etanoat'],
  },
  {
    id: 116005,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Uji Logam Natrium dan PCl5 untuk Alkohol vs Eter',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Diferensiasi Kimiawi Pasangan Isomer Etanol dan Dimetil Eter',
    question_text: `Etanol ($\\ce{CH3CH2OH}$) dan dimetil eter ($\\ce{CH3OCH3}$) merupakan pasangan isomer fungsi dengan rumus molekul $\\ce{C2H6O}$. Keduanya dapat dibedakan secara tegas di laboratorium menggunakan pereaksi logam natrium dan fosforus pentaklorida ($\\ce{PCl5}$).

Jawablah pertanyaan berikut terkait diferensiasi kimiawi tersebut:`,
    expected_final_answer: 'a) Reaksi etanol dengan logam natrium: 2CH3CH2OH + 2Na -> 2CH3CH2ONa + H2 (gas hidrogen). Reaksi etanol dengan PCl5: CH3CH2OH + PCl5 -> CH3CH2Cl + POCl3 + HCl (uap asam klorida pekat); b) Dimetil eter tidak bereaksi dengan logam natrium dan tidak menghasilkan gas HCl saat direaksikan dengan PCl5 karena atom oksigen pada eter terikat pada dua gugus alkil (ikatan C-O-C) dan tidak memiliki atom hidrogen asam aktif (-OH).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan reaksi etanol dengan logam Na menghasilkan gas H2:
     2CH3CH2OH + 2Na -> 2CH3CH2ONa + H2 (1.5 poin).
  2. Menuliskan reaksi etanol dengan PCl5 menghasilkan gas HCl:
     CH3CH2OH + PCl5 -> CH3CH2Cl + POCl3 + HCl (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan sifat inert eter terhadap logam Na karena ketiadaan atom H aktif pada atom O (1.5 poin).
  2. Menjelaskan reaksi eter dengan PCl5 menghasilkan alkil klorida tanpa melepaskan gas HCl (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi antara etanol dengan logam natrium serta reaksi antara etanol dengan $\\ce{PCl5}$, lengkap dengan gas khas yang dibebaskan!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi Na membebaskan gas H2 (1.5 poin) dan reaksi PCl5 membebaskan gas HCl (1.0 poin).',
        expected_answer: '2CH3CH2OH + 2Na -> 2CH3CH2ONa + H2(g); CH3CH2OH + PCl5 -> CH3CH2Cl + POCl3 + HCl(g).',
      },
      {
        label: 'b',
        question_text: `Jelaskan mengapa dimetil eter ($\ce{CH3OCH3}$) tidak bereaksi dengan logam natrium dan tidak membebaskan gas $\ce{HCl}$ dengan $\ce{PCl5}$ ditinjau dari ikatan atom pada gugus fungsinya!`,
        points: 2.5,
        rubric: 'Menjelaskan ketiadaan atom H asam aktif pada heteroatom O eter (ikatan C-O-C stabil) sehingga tidak bereaksi dengan Na dan tidak melepas HCl (2.5 poin).',
        expected_answer: 'Dimetil eter memiliki ikatan C-O-C tanpa atom H asam aktif pada oksigen, sehingga tidak dapat melepaskan proton H+ untuk membentuk H2 atau HCl.',
      },
    ],
    solution_framework_template: `1. Reaktivitas Alkohol terhadap Na dan PCl5:
• Persamaan reaksi pembentukan natrium etoksida dan gas hidrogen H2: ....
• Persamaan reaksi substitusi gugus hidroksil oleh klorin membebaskan gas HCl: ....

2. Kelembaman Kimiawi Gugus Eter:
• Struktur ikatan C-O-C pada dimetil eter: ....
• Ketiadaan ikatan O-H terpolarisasi (atom H asam): ....
• Kesimpulan hasil pengujian laboratorium pada eter: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Kinerja Praktikum Kimia SMA Fase F',
    tags: ['diferensiasi-alkohol-eter', 'logam-natrium', 'pcl5', 'gas-hidrogen', 'dimetil-eter'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 116001 - 116025)
  // =========================================================================
  {
    id: 116006,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Keisomeran Geometri Cis/Trans',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Analisis Syarat Terjadinya Keisomeran Geometri pada Senyawa Alkena',
    question_text: `Senyawa alkena berikut yang **DAPAT** memiliki pasangan stereoisomer geometri (*cis-trans*) adalah ....

A. 1-butena ($\\ce{CH2=CH-CH2-CH3}$)  
B. 2-metil-2-butena ($\\ce{CH3-C(CH3)=CH-CH3}$)  
C. 2-butena ($\\ce{CH3-CH=CH-CH3}$)  
D. 2-metilpropena ($\\ce{CH2=C(CH3)2}$)  
E. 1,1-dikloroetena ($\\ce{CCl2=CH2}$)`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Syarat Terjadinya Keisomeran Geometri (*Cis-Trans*):**
   - Terdapat keterbatasan rotasi bebas (adanya ikatan rangkap dua $\\ce{C=C}$).
   - **Syarat Mutlak:** Masing-masing atom karbon yang berikatan rangkap dua harus mengikat **dua gugus atom yang berbeda** ($A \\neq B$ pada $\\ce{C=C(A)(B)}$). Jika salah satu atom karbon mengikat dua gugus yang identik, maka senyawa tersebut tidak memiliki isomer geometri.
2. **Evaluasi Senyawa pada Pilihan Jawaban:**
   - **A (1-butena):** Atom C-1 mengikat dua atom hidrogen identik ($\\ce{=CH2}$) $\\implies$ **Tidak ada isomer geometri**.
   - **B (2-metil-2-butena):** Atom C-2 mengikat dua gugus metil identik ($\\ce{-CH3}$) $\\implies$ **Tidak ada isomer geometri**.
   - **C (2-butena):**
     - Atom C-2 mengikat $-\\ce{H}$ dan $-\\ce{CH3}$ ($-\\ce{H} \\neq -\\ce{CH3}$).
     - Atom C-3 mengikat $-\\ce{H}$ dan $-\\ce{CH3}$ ($-\\ce{H} \\neq -\\ce{CH3}$).
     - Karena kedua atom C berikatan rangkap mengikat dua gugus berbeda, maka terbentuk pasangan **cis-2-butena** dan **trans-2-butena** $\\implies$ **Memiliki isomer geometri!**
   - **D (2-metilpropena):** Atom C-1 mengikat dua atom H identik dan C-2 mengikat dua gugus metil identik $\\implies$ Tidak ada.
   - **E (1,1-dikloroetena):** Atom C-1 mengikat dua atom Cl identik $\\implies$ Tidak ada.

Dengan demikian, jawaban yang benar adalah C.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Penilaian Harian Kimia SMA Fase F',
    tags: ['isomer-geometri', 'cis-trans', 'alkena', '2-butena', 'hambatan-rotasi'],
  },
  {
    id: 116007,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Keisomeran Optis Aktif & Karbon Kiral',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Karbon Asimetris Kiral dan Jumlah Isomer Optis van \'t Hoff',
    question_text: `Perhatikan rumus struktur senyawa 2,3-dihidroksibutanal berikut:
$$\\ce{CH3 - CH(OH) - CH(OH) - CHO}$$

Jumlah atom karbon kiral (asimetris) dan jumlah maksimum stereoisomer optis aktif yang dimiliki oleh molekul tersebut menurut aturan van 't Hoff berturut-turut adalah ....

A. 1 atom karbon kiral dan 2 stereoisomer  
B. 2 atom karbon kiral dan 4 stereoisomer  
C. 2 atom karbon kiral dan 3 stereoisomer  
D. 3 atom karbon kiral dan 8 stereoisomer  
E. 4 atom karbon kiral dan 16 stereoisomer`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Atom Karbon Kiral (Asimetris, $C^*$):**
   Atom karbon berhibridisasi $sp^3$ yang mengikat empat atom atau gugus atom yang **seluruhnya berbeda satu sama lain**.
2. **Pemeriksaan Tiap Atom Karbon pada 2,3-Dihidroksibutanal:**
   $$\\ce{C_4H3 - C_3H(OH) - C_2H(OH) - C_1HO}$$
   - **C-1 ($-\\ce{CHO}$):** Hibridisasi $sp^2$ (ikatan rangkap $\\ce{C=O}$), bukan karbon kiral.
   - **C-2:** Mengikat 4 gugus berbeda: (1) $-\\ce{H}$, (2) $-\\ce{OH}$, (3) $-\\ce{CHO}$, dan (4) $-\\ce{CH(OH)CH3}$ $\\implies$ **Karbon Kiral ($C_2^*$)**.
   - **C-3:** Mengikat 4 gugus berbeda: (1) $-\\ce{H}$, (2) $-\\ce{OH}$, (3) $-\\ce{CH3}$, dan (4) $-\\ce{CH(OH)CHO}$ $\\implies$ **Karbon Kiral ($C_3^*$)**.
   - **C-4 ($-\\ce{CH3}$):** Mengikat 3 atom hidrogen identik, bukan karbon kiral.
   - Total atom karbon kiral: **$n = 2$**.
3. **Kalkulasi Jumlah Stereoisomer Optis (Aturan van 't Hoff):**
   Karena kedua ujung rantai karbon berbeda ($-\\ce{CHO}$ pada satu ujung dan $-\\ce{CH3}$ pada ujung lainnya), molekul ini bersifat asimetris murni dan tidak memiliki bidang simetri internal (tidak ada bentuk meso).
   $$N_{\\text{maks}} = 2^n = 2^2 = \\mathbf{4\\text{ stereoisomer optis}}$$
   (Terdiri dari 2 pasang enansiomer: $(2R,3R), (2S,3S), (2R,3S),$ dan $(2S,3R)$).

Dengan demikian, jawaban yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK Kimia SMA Fase F',
    tags: ['karbon-kiral', 'stereoisomer', 'van-t-hoff', 'enansiomer', 'optis-aktif'],
  },
  {
    id: 116008,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Tata Nama dan Karakter Senyawa Turunan Benzena',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Karakteristik Kimia dan Kegunaan Senyawa Turunan Monosubstitusi Benzena',
    question_text: `Pasangan nama senyawa turunan benzena, rumus molekul, dan kegunaan utamanya dalam kehidupan sehari-hari berikut yang BENAR adalah ....

A. Fenol, $\\ce{C6H5OH}$, bersifat basa kuat pembersih kerak lantai  
B. Asam benzoat, $\\ce{C6H5COOH}$, zat pengawet makanan dan minuman kemasan  
C. Anilina, $\\ce{C6H5NH2}$, bahan peledak dinamit TNT  
D. Toluena, $\\ce{C6H5CH3}$, pemanis buatan pengganti gula tebu  
E. Stirena, $\\ce{C6H5CH=CH2}$, antiseptik pembunuh kuman luka luar`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Asam Benzoat ($\\ce{C6H5COOH}$):**
   - Merupakan asam karboksilat aromatik yang banyak digunakan sebagai bahan pengawet makanan dan minuman olahan (biasanya dalam bentuk garam natrium benzoat, $\\ce{C6H5COONa}$) karena efektif menghambat pertumbuhan kapang, khamir, dan bakteri dalam suasana asam. (Pilihan B benar).
2. **Evaluasi Opsi Lain:**
   - **A salah:** Fenol ($\\ce{C6H5OH}$) bersifat **asam lemah** ($pK_a \\approx 10$), bukan basa kuat. Digunakan sebagai desinfektan karbol.
   - **C salah:** Anilina ($\\ce{C6H5NH2}$) adalah bahan baku zat warna diazo dan obat-obatan. Bahan peledak TNT adalah trinitrotoluena yang dibuat dari toluena, bukan anilina.
   - **D salah:** Toluena ($\\ce{C6H5CH3}$) adalah pelarut organik non-polar industri dan prekursor TNT. Pemanis buatan adalah sakarin atau aspartam.
   - **E salah:** Stirena (vinilbenzena, $\\ce{C6H5CH=CH2}$) adalah monomer pembuat plastik polistirena (gabus styrofoam), bukan antiseptik.

Dengan demikian, pilihan yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['turunan-benzena', 'asam-benzoat', 'pengawet-makanan', 'fenol', 'anilina'],
  },
  {
    id: 116009,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Efek Pengarah Substituen Reaksi SEAr',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Pengarah Orto-Para vs Pengarah Meta pada Reaksi Nitrasi Turunan Benzena',
    question_text: `Toluena ($\\ce{C6H5CH3}$) dan nitrobenzena ($\\ce{C6H5NO2}$) masing-masing direaksikan dengan campuran asam nitrat pekat dan asam sulfat pekat pada suhu terkontrol (reaksi mononitrasi). Produk utama yang terbentuk dari masing-masing reaksi tersebut adalah ....

A. Toluena menghasilkan $m$-nitrotoluena; nitrobenzena menghasilkan $o$-dinitrobenzena  
B. Toluena menghasilkan campuran $o$-nitrotoluena dan $p$-nitrotoluena; nitrobenzena menghasilkan $m$-dinitrobenzena  
C. Toluena menghasilkan $p$-nitrotoluena saja; nitrobenzena menghasilkan $p$-dinitrobenzena  
D. Toluena menghasilkan $m$-nitrotoluena; nitrobenzena menghasilkan campuran $o$- dan $p$-dinitrobenzena  
E. Kedua senyawa menghasilkan produk substitusi pada posisi orto dan para`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Efek Pengarah Gugus Metil ($-\\ce{CH3}$) pada Toluena:**
   - Gugus metil merupakan gugus alkil yang mendonorkan kerapatan elektron ke dalam cincin benzena melalui efek induksi ($+I$) dan hiperkonjugasi.
   - Gugus ini bertindak sebagai **pengaktivasi cincin (*activator*)** dan mengarahkan elektrofil baru yang masuk (ion nitronium $\\ce{NO2+}$) secara selektif ke posisi **orto (1,2)** dan **para (1,4)**.
   - Produk mononitrasi toluena: campuran **$o$-nitrotoluena dan $p$-nitrotoluena**.
2. **Efek Pengarah Gugus Nitro ($-\\ce{NO2}$) pada Nitrobenzena:**
   - Gugus nitro memiliki atom nitrogen bermuatan formal positif yang terikat pada atom oksigen elektronegatif.
   - Gugus ini menarik kerapatan elektron secara sangat kuat dari cincin benzena melalui efek induksi ($-I$) dan resonansi ($-R$), mendeaktivasi cincin benzena secara drastis (*strong deactivator*).
   - Penarikan elektron paling hebat terjadi pada posisi orto dan para, sehingga posisi **meta (1,3)** menjadi posisi yang relatif paling kaya elektron untuk diserang elektrofil.
   - Produk mononitrasi nitrobenzena: **$m$-dinitrobenzena**.

Dengan demikian, pernyataan yang benar adalah opsi B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['efek-pengarah', 'orto-para', 'meta-pengarah', 'toluena', 'nitrobenzena'],
  },
  {
    id: 116010,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Polimerisasi Adisi vs Kondensasi',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Klasifikasi Mekanisme Pembentukan Polimer Alami dan Sintetis',
    question_text: `Pasangan nama polimer, jenis monomer penyusun, dan mekanisme pembentukannya berikut yang TEPAT adalah ....

A. Polivinil klorida (PVC), monomer kloroetena, polimerisasi kondensasi  
B. Teflon (PTFE), monomer tetrafluoroetena, polimerisasi adisi  
C. Nilon 6,6, monomer asam tereftalat dan etilen glikol, polimerisasi adisi  
D. Polietilena, monomer etena, polimerisasi kondensasi dengan melepaskan molekul $\\ce{H2O}$  
E. Polietilena tereftalat (PET), monomer stirena, polimerisasi adisi`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Teflon (Politetrafluoroetena / PTFE):**
   - Monomer penyusun: **tetrafluoroetena** ($\\ce{CF2=CF2}$).
   - Memiliki ikatan rangkap dua $\\ce{C=C}$, mengalami pembukaan ikatan rangkap menjadi ikatan tunggal tanpa pelepasan molekul kecil $\\implies$ **Polimerisasi Adisi**. Bersifat anti-lengket dan sangat tahan panas/kimia. (Pilihan B benar).
2. **Evaluasi Opsi Lain:**
   - **A salah:** PVC terbentuk melalui polimerisasi **adisi** dari monomer vinil klorida ($\\ce{CH2=CH-Cl}$).
   - **C salah:** Nilon 6,6 terbentuk melalui polimerisasi **kondensasi** antara asam adipat dengan 1,6-heksanadiamina. (Pasangan asam tereftalat + etilen glikol adalah pembentuk PET / Dacron).
   - **D salah:** Polietilena terbentuk melalui polimerisasi **adisi** tanpa melepaskan molekul air.
   - **E salah:** PET terbentuk melalui polimerisasi **kondensasi**, sedangkan stirena adalah monomer pembentuk polistirena via adisi.

Oleh karena itu, opsi B adalah pilihan yang tepat.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['polimer-sintetis', 'teflon', 'polimerisasi-adisi', 'polimerisasi-kondensasi', 'monomer'],
  },
  {
    id: 116011,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Reaksi Esterifikasi Fischer dan Hidrolisis Ester',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Keseimbangan Esterifikasi Fischer Etil Asetat dan Saponifikasi Basa',
    question_text: `Esterifikasi Fischer merupakan metode klasik sintesis ester beraroma buah di laboratorium, sedangkan hidrolisis ester dapat berlangsung baik dalam suasana asam maupun suasana basa.

Jawablah pertanyaan berikut terkait reaksi esterifikasi dan hidrolisisnya:`,
    expected_final_answer: 'a) Reaksi esterifikasi: CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O (katalis H2SO4 pekat). Dua fungsi H2SO4 pekat: (1) Katalis asam pembawa proton H+ untuk meningkatkan elektrofilisitas karbon karbonil, dan (2) Agen pendehidrasi penarik molekul air H2O sehingga menggeser kesetimbangan ke arah kanan (produk ester); b) Reaksi hidrolisis basa (saponifikasi): CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH. Saponifikasi basa berlangsung ireversibel karena ion asetat CH3COO- yang bermuatan negatif terstabilkan oleh resonansi dan tidak reaktif diserang kembali oleh alkohol etanol.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan persamaan reaksi reversibel esterifikasi Fischer pembentukan etil asetat:
     CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O (1.5 poin).
  2. Menyebutkan dua peranan H2SO4 pekat (katalis asam protonasi karbonil dan agen dehidrasi penarik H2O untuk menggeser kesetimbangan) (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan persamaan reaksi hidrolisis dalam basa (saponifikasi):
     CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH (1.5 poin).
  2. Menjelaskan alasan ireversibilitas saponifikasi basa karena pembentukan ion karboksilat berstabilkan resonansi yang tidak elektrofilik (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi kesetimbangan sintesis etil asetat dari asam asetat dan etanol dengan katalis $\\ce{H2SO4}$ pekat, serta jelaskan dua fungsi penambahan asam sulfat pekat tersebut!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi esterifikasi reversibel (1.5 poin) dan menjelaskan peran H2SO4 pekat sebagai katalis serta zat penarik air pergeser kesetimbangan (1.0 poin).',
        expected_answer: 'CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O. H2SO4 pekat berfungsi sebagai katalis asam dan agen dehidrasi penarik air agar kesetimbangan bergeser ke kanan.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi hidrolisis etil asetat dalam larutan $\\ce{NaOH}$ (saponifikasi), dan jelaskan mengapa reaksi saponifikasi basa berlangsung tuntas searah (ireversibel) sedangkan hidrolisis asam bersifat bolak-balik!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi saponifikasi CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH (1.5 poin) dan menjelaskan stabilitas anion asetat yang tidak reaktif diserang alkohol (1.0 poin).',
        expected_answer: 'CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH. Reaksi ireversibel karena terbentuk ion asetat bermuatan negatif terstabilkan resonansi yang tidak dapat diserang kembali oleh alkohol.',
      },
    ],
    solution_framework_template: `1. Mekanisme dan Kesetimbangan Esterifikasi Fischer:
• Persamaan reaksi kondensasi asam karboksilat dan alkohol: ....
• Peran proton katalitik H2SO4 terhadap gugus karbonil: ....
• Efek higroskopis H2SO4 pekat terhadap Asas Le Chatelier: ....

2. Hidrolisis Asam vs Saponifikasi Basa:
• Persamaan reaksi penyabunan dengan natrium hidroksida NaOH: ....
• Perbedaan termodinamika reversibilitas hidrolisis asam vs basa: ....
• Penjelasan kestabilan resonansi anion karboksilat R-COO⁻: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['esterifikasi-fischer', 'etil-asetat', 'hidrolisis-ester', 'saponifikasi', 'katalis-asam-sulfat'],
  },
  {
    id: 116012,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Substitusi Elektrofilik Aromatik: Halogenasi dan Nitrasi Benzena',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Pembangkitan Elektrofil dan Reaksi Halogenasi serta Nitrasi Benzena',
    question_text: `Cincin aromatik benzena memiliki kestabilan resonansi yang tinggi sehingga cenderung melangsungkan reaksi Substitusi Elektrofilik Aromatik (SEAr) daripada reaksi adisi.

Jawablah pertanyaan berikut terkait tahapan kimia reaksi SEAr pada benzena:`,
    expected_final_answer: 'a) Reaksi klorinasi: C6H6 + Cl2 ->[FeCl3] C6H5Cl + HCl. Pembentukan elektrofil ion kloronium: Cl2 + FeCl3 -> Cl+ + FeCl4- (FeCl3 bertindak sebagai asam Lewis akseptor pasangan elektron yang mempolarisasi ikatan Cl-Cl); b) Reaksi nitrasi: C6H6 + HNO3 pekat ->[H2SO4 pekat, 50-60 °C] C6H5NO2 + H2O. Pembentukan elektrofil ion nitronium: HNO3 + 2H2SO4 <=> NO2+ + H3O+ + 2HSO4- (H2SO4 bertindak sebagai asam Bronsted yang memprotonasi HNO3 sehingga melepaskan air dan membentuk ion nitronium NO2+).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan persamaan reaksi klorinasi benzena:
     C6H6 + Cl2 -> C6H5Cl + HCl (1.5 poin).
  2. Menuliskan reaksi pembentukan elektrofil kloronium Cl+ bersama katalis FeCl3:
     Cl2 + FeCl3 -> Cl+ + FeCl4- (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan persamaan reaksi nitrasi benzena menghasilkan nitrobenzena:
     C6H6 + HNO3 -> C6H5NO2 + H2O (1.5 poin).
  2. Menuliskan persamaan reaksi pembentukan ion nitronium NO2+ dari campuran nitrasi:
     HNO3 + 2H2SO4 -> NO2+ + H3O+ + 2HSO4- (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi klorinasi benzena dengan gas $\\ce{Cl2}$ menggunakan katalis $\\ce{FeCl3}$, dan tuliskan persamaan reaksi pembentukan elektrofil aktif oleh katalis asam Lewis tersebut!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi klorinasi C6H6 + Cl2 -> C6H5Cl + HCl (1.5 poin) dan pembentukan Cl+ + FeCl4- (1.0 poin).',
        expected_answer: 'C6H6 + Cl2 -> C6H5Cl + HCl; pembentukan elektrofil: Cl2 + FeCl3 -> Cl+ + FeCl4-.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi nitrasi benzena menghasilkan nitrobenzena, serta tuliskan persamaan reaksi pembentukan elektrofil ion nitronium ($\ce{NO2+}$) dari campuran asam nitrat dan asam sulfat pekat!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi nitrasi C6H6 + HNO3 -> C6H5NO2 + H2O (1.5 poin) dan pembentukan elektrofil NO2+ (1.0 poin).',
        expected_answer: 'C6H6 + HNO3 -> C6H5NO2 + H2O; pembentukan elektrofil: HNO3 + 2H2SO4 <=> NO2+ + H3O+ + 2HSO4-.',
      },
    ],
    solution_framework_template: `1. Reaksi Klorinasi Benzena dan Peran Asam Lewis:
• Persamaan reaksi substitusi atom hidrogen oleh klorin: ....
• Mekanisme polarisasi ikatan Cl-Cl oleh orbital d kosong besi(III) klorida: ....
• Rumus kimia elektrofil kloronium aktif: ....

2. Reaksi Nitrasi Benzena dan Pembentukan Ion Nitronium:
• Persamaan reaksi pembentukan nitrobenzena: ....
• Peran asam sulfat pekat sebagai donor proton kuat bagi gugus -OH pada asam nitrat: ....
• Pelepasan molekul air dan pembentukan kation nitronium linear NO2+: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['sear', 'klorinasi-benzena', 'nitrasi-benzena', 'ion-nitronium', 'katalis-asam-lewis'],
  },
  {
    id: 116013,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Sintesis Poliamida Nilon 6,6 dan Poliester PET',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Mekanisme Kondensasi Nilon 6,6 dan Perbandingan Termoplastik vs Termoset',
    question_text: `Polimer sintetis memegang peranan krusial dalam industri serat tekstil dan material plastik modern, baik melalui reaksi polimerisasi adisi maupun kondensasi.

Jawablah pertanyaan berikut terkait sintesis dan karakteristik polimer:`,
    expected_final_answer: 'a) Reaksi polimerisasi kondensasi Nilon 6,6: n HOOC-(CH2)4-COOH + n H2N-(CH2)6-NH2 -> [—CO-(CH2)4-CO-NH-(CH2)6-NH—]_n + (2n-1) H2O. Jenis ikatan penghubung: ikatan amida kovalen (-CO-NH-); b) Termoplastik tersusun atas rantai-rantai linier panjang dengan gaya antarmolekul sekunder yang melunak saat dipanaskan sehingga dapat dicetak dan didaur ulang berulang kali (contoh: polietilena, PET). Termoset memiliki ikatan silang kovalen 3 dimensi yang kaku dan permanen; saat dipanaskan termoset tidak melunak melainkan langsung hangus terdekomposisi sehingga tidak dapat didaur ulang (contoh: bakelit).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan persamaan reaksi polimerisasi kondensasi pembentukan Nilon 6,6 dengan produk samping air:
     n HOOC-(CH2)4-COOH + n H2N-(CH2)6-NH2 -> [—CO-(CH2)4-CO-NH-(CH2)6-NH—]_n + (2n-1) H2O (1.5 poin).
  2. Menyebutkan jenis ikatan penghubung: ikatan amida kovalen (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan struktur rantai linier dan sifat dapat didaur ulang pada termoplastik (1.0 poin).
  2. Menjelaskan struktur jaringan ikatan silang 3D dan sifat tidak dapat didaur ulang pada termoset (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi polimerisasi kondensasi antara asam adipat dengan 1,6-heksanadiamina membentuk unit berulang Nilon 6,6 dan sebutkan jenis ikatan yang terbentuk!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi pembentukan Nilon 6,6 beserta pelepasan H2O (1.5 poin) dan menyebutkan ikatan amida kovalen (1.0 poin).',
        expected_answer: 'n HOOC-(CH2)4-COOH + n H2N-(CH2)6-NH2 -> [—CO-(CH2)4-CO-NH-(CH2)6-NH—]_n + (2n-1) H2O; ikatan yang terbentuk adalah ikatan amida.',
      },
      {
        label: 'b',
        question_text: `Jelaskan perbedaan struktur rantai molekul dan perilaku termal antara polimer termoplastik dan polimer termoset saat dipanaskan!`,
        points: 2.5,
        rubric: 'Menjelaskan rantai linier termoplastik melunak dan dapat didaur ulang (1.0 poin) vs jaringan ikatan silang 3D termoset yang rusak/hangus saat dipanaskan (1.5 poin).',
        expected_answer: 'Termoplastik berstruktur rantai linier, melunak jika dipanaskan dan dapat didaur ulang. Termoset memiliki ikatan silang kovalen 3D kaku, tidak melunak melainkan terurai hangus.',
      },
    ],
    solution_framework_template: `1. Reaksi Polimerisasi Kondensasi Nilon 6,6:
• Struktur monomer asam adipat dan 1,6-heksanadiamina: ....
• Persamaan reaksi polimerisasi pembentukan poliamida: ....
• Molekul kecil yang tereliminasi: ....

2. Sifat Termal dan Arsitektur Polimer:
• Karakteristik struktur rantai termoplastik dan gaya antarmolekul: ....
• Karakteristik ikatan silang kovalen 3 dimensi (cross-linked) pada termoset: ....
• Kemampuan daur ulang (recyclability) masing-masing kelompok: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['nilon-6-6', 'polimerisasi-kondensasi', 'ikatan-amida', 'termoplastik', 'termoset'],
  },
  {
    id: 116014,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Biokimia Karbohidrat: Struktur Glikosidik & Gula Pereduksi',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Hubungan Ikatan Glikosidik terhadap Sifat Gula Pereduksi dan Inversi Sukrosa',
    question_text: `Karbohidrat disakarida tersusun atas dua molekul monosakarida yang dihubungkan oleh ikatan glikosidik. Sifat pereduksi disakarida sangat ditentukan oleh posisi keterlibatan karbon anomerik dalam ikatan tersebut.

Jawablah pertanyaan berikut terkait analisis karbohidrat:`,
    expected_final_answer: 'a) Maltosa (glukosa + glukosa, ikatan alfa-1,4) dan laktosa (galaktosa + glukosa, ikatan beta-1,4) memiliki satu atom karbon anomerik bebas (gugus hemiasetal bebas) pada unit glukosa kedua yang dapat membuka menjadi rantai terbuka aldehid bebas, sehingga dapat mereduksi pereaksi Fehling/Benedict (gula pereduksi). Sukrosa (glukosa + fruktosa, ikatan alfa-1,beta-2) mengikat kedua karbon anomeriknya (C-1 glukosa dan C-2 fruktosa) saling mengunci dalam ikatan glikosidik, sehingga tidak memiliki gugus hemiasetal bebas dan bersifat non-pereduksi; b) Reaksi hidrolisis sukrosa: C12H22O11 + H2O -> C6H12O6 (D-glukosa) + C6H12O6 (D-fruktosa). Dinamakan gula inversi karena larutan sukrosa semula memutar bidang cahaya terpolarisasi ke kanan (dekstrorotatori, +66,5°), namun setelah dihidrolisis menghasilkan campuran ekuimolar di mana fruktosa memutar ke kiri sangat kuat (-92,4°) mengalahkan putaran kanan glukosa (+52,7°), sehingga putaran optis netto larutan berbalik memutar ke kiri (levorotatori, -19,8°).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menjelaskan keberadaan karbon anomerik hemiasetal bebas pada maltosa dan laktosa yang menjadikannya gula pereduksi (1.5 poin).
  2. Menjelaskan penguncian kedua karbon anomerik pada ikatan alfa-1,beta-2 sukrosa sehingga bersifat non-pereduksi (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menuliskan persamaan reaksi hidrolisis sukrosa menghasilkan glukosa dan fruktosa (1.0 poin).
  2. Menjelaskan asal istilah gula inversi dari pembalikan sudut putaran optis spesifik dari dekstrorotatori (+) menjadi levorotatori (-) (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan mengapa maltosa dan laktosa bereaksi positif terhadap pereaksi Fehling/Benedict (gula pereduksi), sedangkan sukrosa bereaksi negatif (non-pereduksi)!`,
        points: 2.5,
        rubric: 'Menjelaskan keberadaan karbon anomerik bebas pada maltosa/laktosa (1.5 poin) dan penguncian kedua karbon anomerik pada ikatan glikosidik sukrosa (1.0 poin).',
        expected_answer: 'Maltosa dan laktosa memiliki karbon anomerik hemiasetal bebas yang dapat membuka membentuk gugus aldehid pereduksi, sedangkan pada sukrosa kedua karbon anomerik saling terkunci.',
      },
      {
        label: 'b',
        question_text: `Tuliskan persamaan reaksi hidrolisis sukrosa, serta jelaskan mengapa campuran produk hidrolisis tersebut dinamakan "gula inversi"!`,
        points: 2.5,
        rubric: 'Menuliskan reaksi C12H22O11 + H2O -> C6H12O6 + C6H12O6 (1.0 poin) dan menjelaskan pembalikan arah rotasi optis dari putar kanan ke putar kiri (1.5 poin).',
        expected_answer: 'C12H22O11 + H2O -> glukosa + fruktosa. Disebut gula inversi karena arah putaran optis larutan terbalik dari dekstrorotatori (+) menjadi levorotatori (-).',
      },
    ],
    solution_framework_template: `1. Analisis Karbon Anomerik Disakarida:
• Ikatan glikosidik pada maltosa (α-1,4) dan laktosa (β-1,4): ....
• Pengertian gugus hemiasetal bebas dan pembukaan cincin mutarotasi: ....
• Karakter ikatan α-1,β-2 glikosidik pada sukrosa (gula non-pereduksi): ....

2. Hidrolisis dan Fenomena Inversi Optis:
• Persamaan reaksi hidrolisis sukrosa: ....
• Sudut putaran optis spesifik sukrosa murni (+66,5°): ....
• Perbandingan sudut putar D-glukosa (+52,7°) vs D-fruktosa (-92,4°): ....
• Kesimpulan rotasi optis netto gula inversi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['karbohidrat', 'gula-pereduksi', 'sukrosa', 'gula-inversi', 'ikatan-glikosidik'],
  },
  {
    id: 116015,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Biokimia Protein: Struktur Zwitter-ion & Uji Biuret/Xantoproteat',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Sifat Amfoter Zwitter-ion Asam Amino dan Uji Kualitatif Protein',
    question_text: `Asam amino penyusun protein memiliki gugus karboksilat yang bersifat asam dan gugus amina yang bersifat basa, sehingga dapat membentuk struktur dipolar (zwitter-ion) dan menunjukkan sifat amfoter.

Jawablah pertanyaan berikut terkait asam amino dan uji protein:`,
    expected_final_answer: 'a) Struktur zwitter-ion alanina pada pI: +H3N-CH(CH3)-COO- (muatan netto = 0). Dalam suasana asam kuat (pH < pI): gugus karboksilat menangkap proton H+ membentuk kation bermuatan +1: +H3N-CH(CH3)-COOH. Dalam suasana basa kuat (pH > pI): gugus amonium melepaskan proton H+ membentuk anion bermuatan -1: H2N-CH(CH3)-COO-; b) Uji Biuret: menggunakan larutan CuSO4 encer dalam NaOH basa, menghasilkan warna ungu bila sampel memiliki minimal dua ikatan peptida (-CO-NH-). Uji Xantoproteat: pemanasan dengan asam nitrat pekat HNO3 menghasilkan warna kuning (menjadi jingga dalam basa), mendeteksi adanya inti benzena (cincin aromatik) pada asam amino fenilalanina, tirosina, atau triptofan.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan struktur zwitter-ion alanina +H3N-CH(CH3)-COO- pada titik isolistrik (1.0 poin).
  2. Menuliskan bentuk kation pada pH < pI (+H3N-CH(CH3)-COOH) dan anion pada pH > pI (H2N-CH(CH3)-COO-) (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan uji Biuret menghasilkan warna ungu untuk minimal 2 ikatan peptida (1.0 poin).
  2. Menjelaskan uji Xantoproteat menghasilkan warna kuning/jingga untuk cincin aromatik benzena (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan rumus struktur bentuk zwitter-ion asam amino alanina ($\ce{CH3-CH(NH2)-COOH}$) pada titik isolistrik, serta tuliskan perubahan strukturnya saat larutan berada pada $\\text{pH} < pI$ dan $\\text{pH} > pI$!`,
        points: 2.5,
        rubric: 'Menuliskan bentuk zwitter-ion (1.0 poin), kation +1 pada pH < pI (0.75 poin), dan anion -1 pada pH > pI (0.75 poin).',
        expected_answer: 'Zwitter-ion: +H3N-CH(CH3)-COO-; pH < pI: +H3N-CH(CH3)-COOH (kation +1); pH > pI: H2N-CH(CH3)-COO- (anion -1).',
      },
      {
        label: 'b',
        question_text: `Jelaskan prinsip pengujian dan perubahan warna yang teramati pada Uji Biuret dan Uji Xantoproteat pada protein!`,
        points: 2.5,
        rubric: 'Menjelaskan warna ungu uji Biuret mendeteksi ikatan peptida (1.0 poin) dan warna kuning/jingga uji Xantoproteat mendeteksi cincin aromatik benzena (1.5 poin).',
        expected_answer: 'Uji Biuret menghasilkan warna ungu untuk mendeteksi adanya ikatan peptida (minimal 2 ikatan). Uji Xantoproteat menghasilkan warna kuning/jingga untuk mendeteksi cincin benzena.',
      },
    ],
    solution_framework_template: `1. Keseimbangan Ionik dan Struktur Zwitter-ion:
• Transfer proton intramolekul antara gugus asam dan basa: ....
• Rumus struktur zwitter-ion alanina pada titik isolistrik: ....
• Respon penambahan asam kuat H+ (protonasi karboksilat): ....
• Respon penambahan basa kuat OH- (deprotonasi amonium): ....

2. Prinsip Uji Biokimia Protein:
• Reagen uji Biuret dan koordinasi kompleks tembaga(II) ungu: ....
• Reagen uji Xantoproteat dan nitrasi cincin benzena aromatik: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['protein', 'asam-amino', 'zwitter-ion', 'uji-biuret', 'uji-xantoproteat'],
  },

  // =========================================================================
  // KATEGORI SULIT / OSK-OSP (40% = 10 Butir Soal: ID 116001 - 116025)
  // =========================================================================
  {
    id: 116016,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Mekanisme Lengkap SEAr & Kompleks Arenium Resonansi',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Profil Energi dan Struktur Resonansi Zat Antara Kompleks Sigma (Arenium)',
    question_text: `Pada mekanisme reaksi Substitusi Elektrofilik Aromatik (SEAr) cincin benzena:
$$\\ce{C6H6 + E+ -> [C6H6E]+ (kompleks \\sigma) -> C6H5E + H+}$$

Pernyataan berikut yang PALING TEPAT mengenai kinetika reaksi dan struktur intermediet tersebut adalah ....

A. Pembentukan kompleks $\\sigma$ (ion arenium) merupakan tahap cepat dengan energi aktivasi yang sangat rendah  
B. Kompleks $\\sigma$ mempertahankan sistem aromatisitas penuh karena memiliki 6 elektron $\\pi$ yang terdelokalisasi  
C. Penyerangan elektrofil pada cincin benzena menghasilkan karbokation kompleks $\\sigma$ non-aromatik yang terstabilkan oleh 3 struktur resonansi, dan pembentukannya merupakan tahap penentu laju reaksi (*rate-determining step*)  
D. Pelepasan proton $\\ce{H+}$ dari kompleks $\\sigma$ merupakan tahap paling lambat karena membutuhkan pemutusan ikatan $\\ce{C-H}$  
E. Kestabilan termodinamika benzena berkurang drastis setelah produk akhir terbentuk karena energi resonansinya hilang`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Mekanisme Dua Tahap Reaksi SEAr:**
   - **Tahap 1 (Penyerangan Elektrofil $\\ce{E+}$):**
     Elektrofil $\\ce{E+}$ menyerang awan elektron $\\pi$ cincin benzena. Dua elektron $\\pi$ digunakan untuk membentuk ikatan kovalen $\\ce{C-E}$.
     Akibatnya, atom karbon tersebut berubah hibridisasinya dari $sp^2$ menjadi $sp^3$, dan sistem aromatisitas benzena **sementara waktu terputus**.
     Zat antara yang terbentuk adalah karbokation siklik terkonjugasi parsial (4 elektron $\\pi$ pada 5 atom karbon $sp^2$) yang dinamakan **kompleks $\\sigma$ (*sigma complex*)** atau **ion arenium / intermediet Wheland**.
     Karena merusak kestabilan aromatik ($152\\text{ kJ/mol}$), tahap ini membutuhkan energi aktivasi sangat tinggi dan berlangsung lambat $\\implies$ **Tahap Penentu Laju Reaksi (*Rate-Determining Step* / RDS)**.
   - **Tahap 2 (Pelepasan Proton $\\ce{H+}$):**
     Suatu basa Lewis mengambil proton $\\ce{H+}$ dari atom karbon $sp^3$. Sepasang elektron ikatan $\\ce{C-H}$ kembali ke sistem cincin $\\pi$, meregenerasi sistem aromatisitas penuh 6 elektron $\\pi$ yang sangat stabil. Tahap ini berlangsung sangat cepat dan sangat eksotermik.
2. **Struktur Resonansi Kompleks $\\sigma$:**
   Muatan positif pada ion arenium terdelokalisasi pada posisi orto dan para relatif terhadap karbon $sp^3$ melalui 3 struktur kontributor resonansi. (Pilihan C benar).

Oleh karena itu, opsi C adalah pernyataan yang paling akurat secara teoretis.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['sear', 'kompleks-sigma', 'ion-arenium', 'tahap-penentu-laju', 'resonansi-karbokation'],
  },
  {
    id: 116017,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Konfigurasi Stereokimia Absolut R/S Cahn-Ingold-Prelog',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penentuan Konfigurasi R/S Cahn-Ingold-Prelog pada Asam Laktat',
    question_text: `Molekul asam laktat alami memiliki rumus struktur $\\ce{CH3-CH(OH)-COOH}$. Dalam proyeksi Fischer standar, molekul digambarkan dengan:
- Gugus $-\\ce{COOH}$ di posisi atas
- Gugus $-\\ce{CH3}$ di posisi bawah
- Gugus $-\\ce{OH}$ di posisi kiri
- Gugus $-\\ce{H}$ di posisi kanan

Berdasarkan aturan prioritas Cahn-Ingold-Prelog (CIP), urutan prioritas keempat gugus dan konfigurasi stereokimia absolut ($R$ atau $S$) dari molekul tersebut adalah ....

A. $-\\ce{OH} (1) > -\\ce{COOH} (2) > -\\ce{CH3} (3) > -\\ce{H} (4)$; konfigurasi $(2R)$  
B. $-\\ce{OH} (1) > -\\ce{COOH} (2) > -\\ce{CH3} (3) > -\\ce{H} (4)$; konfigurasi $(2S)$  
C. $-\\ce{COOH} (1) > -\\ce{OH} (2) > -\\ce{CH3} (3) > -\\ce{H} (4)$; konfigurasi $(2S)$  
D. $-\\ce{OH} (1) > -\\ce{CH3} (2) > -\\ce{COOH} (3) > -\\ce{H} (4)$; konfigurasi $(2R)$  
E. $-\\ce{COOH} (1) > -\\ce{CH3} (2) > -\\ce{OH} (3) > -\\ce{H} (4)$; konfigurasi $(2R)$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Penentuan Prioritas Gugus menurut Kaidah CIP:**
   Prioritas ditentukan berdasarkan nomor atom ($Z$) dari atom yang terikat langsung ke atom karbon kiral C-2:
   - Gugus $-\\ce{OH}$: atom terikat adalah Oksigen ($Z = 8$) $\\implies$ **Prioritas 1**.
   - Gugus $-\\ce{COOH}$ dan $-\\ce{CH3}$: keduanya terikat melalui atom Karbon ($Z = 6$). Bandingkan atom berikutnya:
     - Pada $-\\ce{COOH}$, karbon terikat pada $(\\ce{O, O, O})$ secara ekivalen $\\implies$ **Prioritas 2**.
     - Pada $-\\ce{CH3}$, karbon terikat pada $(\\ce{H, H, H})$ $\\implies$ **Prioritas 3**.
   - Gugus $-\\ce{H}$: atom Hidrogen ($Z = 1$) $\\implies$ **Prioritas 4** (terendah).
   $$\\text{Urutan Prioritas: } \\mathbf{-\\ce{OH} (1) > -\\ce{COOH} (2) > -\\ce{CH3} (3) > -\\ce{H} (4)}$$
2. **Penentuan Konfigurasi pada Proyeksi Fischer:**
   - Gugus 1 ($-\\ce{OH}$) berada di kiri (posisi jam 9).
   - Gugus 2 ($-\\ce{COOH}$) berada di atas (posisi jam 12).
   - Gugus 3 ($-\\ce{CH3}$) berada di bawah (posisi jam 6).
   - Arah putaran dari $1 \\to 2 \\to 3$ bergerak **searah jarum jam (*clockwise*)**.
   - **Kaidah Garis Horizontal Fischer:** Karena gugus prioritas terendah 4 ($-\\ce{H}$) terletak pada **garis horizontal** (menghadap ke arah pengamat), arah konfigurasi tampak harus dibalik:
     $$\\text{Putaran searah jarum jam (tampak } R) \\xrightarrow{\\text{dibalik}} \\mathbf{\\text{Konfigurasi Absolut } (2S)}$$

Dengan demikian, molekul ini adalah **asam $(2S)$-laktat** (L-asam laktat). Pilihan yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['stereokimia', 'cahn-ingold-prelog', 'konfigurasi-r-s', 'asam-laktat', 'proyeksi-fischer'],
  },
  {
    id: 116018,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Regioselektivitas Eliminasi E2 Alkil Halida (Aturan Zaitsev)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Regioselektivitas Dehidrohalogenasi 2-Bromobutana menurut Kaidah Zaitsev',
    question_text: `Reaksi dehidrohalogenasi 2-bromobutana ($\\ce{CH3-CH(Br)-CH2-CH3}$) dengan pemanasan bersama basa kuat natrium etoksida ($\\ce{NaOCH2CH3}$) dalam pelarut etanol menghasilkan campuran dua isomer alkena:
$$\\ce{CH3-CH(Br)-CH2-CH3 + NaOCH2CH3 ->[etanol][\\Delta] Alkena Mayor (81\\%) + Alkena Minor (19\\%) + NaBr + CH3CH2OH}$$

Struktur alkena mayor dan penjelasan termodinamikanya menurut Kaidah Zaitsev adalah ....

A. 1-butena, karena atom hidrogen pada karbon C-1 lebih mudah dijangkau oleh ion etoksida yang berukuran kecil  
B. 2-butena (terutama *trans*-2-butena), karena merupakan alkena yang lebih tersubstitusi (dua gugus alkil pada $\\ce{C=C}$) sehingga memiliki kestabilan termodinamika lebih tinggi akibat hiperkonjugasi  
C. Siklobutana, karena pelepasan $\\ce{HBr}$ memicu siklisasi cincin empat anggota  
D. 1-butena, karena ikatan $\\ce{C-H}$ pada gugus metil memiliki energi disosiasi yang lebih rendah daripada gugus metilena  
E. 2-metilpropena, karena terjadi penataan ulang karbokation primer menjadi tersier`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Mekanisme Eliminasi $E2$ pada 2-Bromobutana:**
   Basa kuat etoksida ($\\ce{CH3CH2O-}$) dapat mengambil proton $\\beta-\\ce{H}$ dari dua posisi yang berbeda:
   - **Jalur A (Pengambilan $\\beta-\\ce{H}$ dari C-1):** Menghasilkan **1-butena** ($\\ce{CH2=CH-CH2-CH3}$). Ini adalah alkena monosubstitusi.
   - **Jalur B (Pengambilan $\\beta-\\ce{H}$ dari C-3):** Menghasilkan **2-butena** ($\\ce{CH3-CH=CH-CH3}$). Ini adalah alkena disubstitusi.
2. **Kaidah Zaitsev (Zaitsev\'s Rule):**
   "Pada reaksi eliminasi $\\beta$, alkena yang lebih tersubstitusi (memiliki jumlah gugus alkil terbanyak pada ikatan rangkap dua) merupakan produk yang lebih stabil dan terbentuk sebagai **produk mayor**."
3. **Faktor Kestabilan Termodinamika:**
   - Alkena disubstitusi (2-butena) memiliki energi sistem yang lebih rendah daripada alkena monosubstitusi (1-butena) karena terjadinya interaksi penstabilan **hiperkonjugasi** antara ikatan $\\sigma_{\\ce{C-H}}$ dari gugus alkil dengan orbital $\\pi^*$ dari ikatan rangkap.
   - Di antara isomer 2-butena, ***trans*-2-butena** lebih dominan ($70-80\\%$) daripada *cis*-2-butena karena minimnya tolakan sterik antargugus metil.

Dengan demikian, produk mayor adalah 2-butena (khususnya *trans*-2-butena). Jawaban yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSP Kimia SMA',
    tags: ['reaksi-eliminasi', 'e2', 'aturan-zaitsev', '2-butena', 'hiperkonjugasi'],
  },
  {
    id: 116019,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Strategi Sintesis Turunan Benzena Multistep',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Urutan Reaksi Sintesis Selektif Asam meta-Bromobenzoat dari Benzena',
    question_text: `Suatu industri kimia farmasi merancang rute sintesis senyawa asam $m$-bromobenzoat dari bahan baku benzena murni.

Urutan tahapan reaksi sintesis yang TEPAT dan menghasilkan rendemen produk meta tertinggi adalah ....

A. Alkilasi Friedel-Crafts ($\\ce{CH3Cl/AlCl3}$) $\\to$ Brominasi ($\\ce{Br2/FeBr3}$) $\to$ Oksidasi ($\\ce{KMnO4/H+}$)  
B. Brominasi ($\\ce{Br2/FeBr3}$) $\to$ Alkilasi Friedel-Crafts ($\\ce{CH3Cl/AlCl3}$) $\to$ Oksidasi ($\\ce{KMnO4/H+}$)  
C. Alkilasi Friedel-Crafts ($\\ce{CH3Cl/AlCl3}$) $\to$ Oksidasi ($\\ce{KMnO4/H+}$) $\to$ Brominasi ($\\ce{Br2/FeBr3}$)  
D. Nitrasi ($\\ce{HNO3/H2SO4}$) $\to$ Brominasi ($\\ce{Br2/FeBr3}$) $\to$ Reduksi ($\\ce{Fe/HCl}$)  
E. Brominasi ($\\ce{Br2/FeBr3}$) $\to$ Oksidasi ($\\ce{KMnO4/H+}$) $\to$ Reaksi Grignard`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Retrosintesis Asam $m$-Bromobenzoat:**
   - Target molekul memiliki dua substituen pada cincin benzena dalam posisi relatif **meta (1,3)**: gugus karboksilat ($-\\ce{COOH}$) dan atom bromin ($-\\ce{Br}$).
   - **Karakter Pengarah Substituen:**
     - Gugus karboksilat ($-\\ce{COOH}$): **Pengarah META (deaktivator kuat)**.
     - Gugus metil ($-\\ce{CH3}$): **Pengarah ORTO-PARA (aktivator)**.
     - Atom bromin ($-\\ce{Br}$): **Pengarah ORTO-PARA**.
2. **Evaluasi Urutan Reaksi:**
   - **Jika Rute A dipilih:** Benzena $\\to$ Toluena ($-\\ce{CH3}$) $\\to$ Brominasi. Karena $-\\ce{CH3}$ adalah pengarah orto-para, brominasi akan menghasilkan $o$-bromotoluena dan $p$-bromotoluena (bukan produk meta!). Oksidasi lanjut akan menghasilkan asam $o$- dan $p$-bromobenzoat.
   - **Jika Rute C dipilih:**
     1. **Tahap 1 (Alkilasi Friedel-Crafts):**
        $$\\ce{C6H6 + CH3Cl ->[AlCl3] C6H5CH3 + HCl} \\quad (\\text{Toluena})$$
     2. **Tahap 2 (Oksidasi Rantai Samping):**
        $$\\ce{C6H5CH3 ->[KMnO4/H+][\\Delta] C6H5COOH} \\quad (\\text{Asam Benzoat})$$
        Gugus $-\\ce{COOH}$ yang terbentuk kini bertindak sebagai pengarah meta yang tangguh!
     3. **Tahap 3 (Brominasi Elektrofilik SEAr):**
        $$\\ce{C6H5COOH + Br2 ->[FeBr3] m-Br-C6H4-COOH + HBr} \\quad (\\text{Asam } m\\text{-bromobenzoat})$$
        Elektrofil $\\ce{Br+}$ diarahkan secara selektif ke posisi meta.

Dengan demikian, rute sintesis yang tepat adalah opsi C.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['sintesis-organik', 'retrosintesis', 'efek-pengarah-meta', 'asam-benzoat', 'brominasi'],
  },
  {
    id: 116020,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Mutarotasi dan Anomerisme Glukosa',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Fenomena Mutarotasi dan Kesetimbangan Anomerik D-Glukosa',
    question_text: `Ketika kristal murni $\\alpha$-D-glukopiranosa dilarutkan dalam air, sudut putaran optis spesifik awalnya adalah $[\\alpha]_D = +112{,}2^\\circ$. Seiring berjalannya waktu, nilai putaran optis tersebut perlahan-lahan menurun hingga mencapai nilai konstan $[\\alpha]_D = +52{,}7^\\circ$. Sebaliknya, jika kristal murni $\\beta$-D-glukopiranosa dilarutkan, putaran optis awalnya sebesar $+18{,}7^\\circ$ perlahan-lahan meningkat hingga mencapai nilai konstan yang sama yaitu $+52{,}7^\\circ$.

Fenomena fisika-kimia ini dinamakan **mutarotasi**, yang terjadi karena ....

A. Terjadinya penguraian glukosa menjadi molekul asam piruvat dan etanol  
B. Pembukaan cincin hemiasetal siklik secara spontan melalui bentuk rantai terbuka alifatik intermediet, membentuk kesetimbangan dinamik antara anomer $\\alpha$ ($\sim 36\\%$) dan anomer $\\beta$ ($\sim 64\\%$)  
C. Pembentukan ikatan ester antarmolekul glukosa membentuk rantai polimer selulosa  
D. Inversi stereokimia pada atom karbon kiral C-4 dari D-glukosa menjadi D-galaktosa  
E. Terjadinya oksidasi gugus alkohol primer C-6 menjadi asam glukuronat`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Pengertian Mutarotasi:**
   Mutarotasi adalah perubahan spontan nilai putaran optis spesifik suatu larutan karbohidrat kiral yang baru dilarutkan hingga mencapai nilai kesetimbangan tetap.
2. **Mekanisme Anomerisasi D-Glukosa di Air:**
   - Dalam wujud padat kristal, D-glukosa dapat diisolasi murni sebagai **anomer $\\alpha$** (gugus $-\\ce{OH}$ anomerik C-1 berposisi aksial, $[\\alpha]_D = +112{,}2^\\circ$) atau **anomer $\\beta$** (gugus $-\\ce{OH}$ anomerik berposisi ekuatorial, $[\\alpha]_D = +18{,}7^\\circ$).
   - Di dalam pelarut air, cincin hemiasetal enam anggota (piranosa) dapat membuka secara reversibel melalui reaksi hidrasi/dehidrasi membentuk molekul rantai lurus aldehid asiklik (rantai terbuka bebas) dengan fraksi sangat kecil ($< 0{,}02\\%$) sebagai zat antara.
   - Penutupan cincin kembali dapat terjadi dari sisi atas maupun bawah gugus karbonil planar $sp^2$, menghasilkan kesetimbangan dinamik anomerik:
     $$\\alpha\\text{-D-glukosa } (\\sim 36\\%) \\rightleftharpoons \\text{Rantai Terbuka } (< 0{,}02\\%) \\rightleftharpoons \\beta\\text{-D-glukosa } (\\sim 64\\%)$$
   - Komposisi campuran kesetimbangan ini menghasilkan rotasi optis spesifik terukur rata-rata berbobot:
     $$[\\alpha]_D = (0{,}36 \\times 112{,}2^\\circ) + (0{,}64 \\times 18{,}7^\\circ) = \\mathbf{+52{,}7^\\circ}$$
   - Anomer $\\beta$ lebih melimpah ($64\\%$) karena gugus $-\\ce{OH}$ anomerik berada pada posisi ekuatorial yang bebas dari tolakan sterik 1,3-diaksial.

Dengan demikian, jawaban yang benar adalah B.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['mutarotasi', 'anomer-glukosa', 'hemiasetal', 'rotasi-optis', 'glukopiranosa'],
  },
  {
    id: 116021,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Kalkulasi Angka Penyabunan & Analisis Trigliserida',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Karakterisasi Kuantitatif Angka Penyabunan Lemak dan Titrasi Balik Saponifikasi',
    question_text: `Angka Penyabunan (*Saponification Value*, SV) merupakan parameter mutu esensial dalam karakterisasi kimiawi lipid untuk memperkirakan panjang rata-rata rantai karbon asam lemak penyusunnya.

Jawablah pertanyaan berikut terkait analisis kuantitatif lipid:`,
    expected_final_answer: 'a) Formula: SV = (3 x M_r KOH x 1000) / M_r trigliserida = 168300 / M_r trigliserida. Untuk gliseril tripalmitat (Mr = 807,3 g/mol): SV = 168300 / 807,3 = 208,48 mg KOH/g lemak; b) Titrasi balik: (1) mol KOH awal = 25,00 mL x 0,500 M = 12,50 mmol. mol HCl titrasi balik = 18,20 mL x 0,250 M = 4,55 mmol = sisa KOH. Mol KOH bereaksi = 12,50 - 4,55 = 7,95 mmol; (2) Massa KOH bereaksi = 7,95 mmol x 56,10 mg/mmol = 445,995 mg. SV = 445,995 mg KOH / 2,000 g minyak = 223,0 mg KOH/g minyak; (3) Massa molar rata-rata trigliserida: M_r = 168300 / 223,0 = 754,7 g/mol.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menurunkan relasi matematis SV = (3 x 56100) / Mr_trigliserida (2.5 poin).
  2. Menghitung nilai SV gliseril tripalmitat = 168300 / 807,3 = 208,48 mg KOH/g lemak (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung mmol KOH yang bereaksi (12,50 - 4,55 = 7,95 mmol) (1.5 poin).
  2. Menghitung nilai Angka Penyabunan SV = 223,0 mg KOH/g minyak (1.5 poin).
  3. Menghitung massa molar rata-rata trigliserida Mr = 754,7 g/mol (2.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Turunkan rumus matematis hubungan antara Angka Penyabunan ($\\text{SV}$, dalam $\\text{mg KOH/g lemak}$) dengan Massa Molar Relatif ($M_r$) suatu trigliserida murni, dan hitung nilai $\\text{SV}$ teoretis dari gliseril tripalmitat ($\ce{C51H98O6}$, $M_r = 807{,}3\text{ g/mol}$, $M_r\ \ce{KOH} = 56{,}1\text{ g/mol}$)!`,
        points: 5.0,
        rubric: 'Menurunkan rumus SV = 168300 / Mr (2.5 poin) dan menghitung SV tripalmitat = 208,48 mg KOH/g lemak (2.5 poin).',
        expected_answer: 'SV = (3 x 56100) / Mr. Untuk gliseril tripalmitat: SV = 168300 / 807,3 = 208,48 mg KOH/g lemak.',
      },
      {
        label: 'b',
        question_text: `Sebanyak $2{,}000\\text{ gram}$ sampel minyak nabati direfluks dengan $25{,}00\\text{ mL}$ larutan $\\ce{KOH } 0{,}500\\text{ M}$. Kelebihan $\\ce{KOH}$ dititrasi balik dengan $18{,}20\\text{ mL}$ larutan $\\ce{HCl } 0{,}250\\text{ M}$. Hitung jumlah mmol $\\ce{KOH}$ yang bereaksi, nilai $\\text{SV}$ minyak, dan massa molar rata-rata ($M_r$) trigliserida tersebut!`,
        points: 5.0,
        rubric: 'Menghitung mol KOH bereaksi = 7,95 mmol (1.5 poin); SV = 223,0 mg KOH/g minyak (1.5 poin); dan Mr = 754,7 g/mol (2.0 poin).',
        expected_answer: 'n(KOH bereaksi) = 7,95 mmol; SV = (7,95 x 56,10) / 2,000 = 223,0 mg KOH/g; Mr trigliserida = 168300 / 223,0 = 754,7 g/mol.',
      },
    ],
    solution_framework_template: `1. Penurunan Rumus Angka Penyabunan:
• Stoikiometri saponifikasi triester gliseril: 1 mol trigliserida ~ 3 mol KOH: ....
• Konversi massa KOH ke satuan miligram: ....
• Perhitungan numerik SV gliseril tripalmitat: ....

2. Analisis Titrasi Balik Sampel Minyak:
• Mol KOH awal dan mol HCl penitran balik: ....
• Mol KOH netto yang terkonsumsi menyabunkan sampel: ....
• Kalkulasi Angka Penyabunan eksperimental (SV): ....
• Estimasi massa molar rata-rata (Mr) molekul trigliserida: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['angka-penyabunan', 'trigliserida', 'saponifikasi', 'titrasi-balik', 'massa-molar-lipid'],
  },
  {
    id: 116022,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Penentuan Titik Isolistrik Asam Amino Triprotik',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Disosiasi Asam Amino Triprotik Asam Aspartat dan Lisin serta Kalkulasi pI',
    question_text: `Asam amino dengan rantai samping yang dapat terionisasi memiliki tiga nilai tetapan disosiasi asam ($pK_{a1}, pK_{a2}, pK_{a3}$). Titik isolistrik ($pI$) adalah derajat keasaman di mana molekul berada dalam bentuk zwitter-ion bermuatan listrik netto nol.

Jawablah pertanyaan berikut terkait analisis titik isolistrik asam amino:`,
    expected_final_answer: 'a) Asam aspartat: Spesi terionisasi: +H3N-CH(CH2COOH)-COOH (+1) <=>[pKa1=2,09] +H3N-CH(CH2COOH)-COO- (0) <=>[pKa2=3,86] +H3N-CH(CH2COO-)-COO- (-1) <=>[pKa3=9,82] H2N-CH(CH2COO-)-COO- (-2). Bentuk zwitter-ion netral (muatan 0) berada di antara pKa1 dan pKa2, sehingga pI = (pKa1 + pKa2)/2 = (2,09 + 3,86)/2 = 2,98; b) Lisin: Spesi zwitter-ion netral berada di antara pKa2 (8,95) dan pKa3 (10,53), sehingga pI = (pKa2 + pKa3)/2 = (8,95 + 10,53)/2 = 9,74. Pada pH = 6,00 (kondisi pH < pI), molekul lisin terprotonasi dan membawa muatan listrik netto positif (+1), sehingga pada elektroforesis gel lisin akan bermigrasi menuju elektroda negatif (KATODA).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan tahapan disosiasi 4 spesi asam aspartat (+1 -> 0 -> -1 -> -2) (2.5 poin).
  2. Menentukan zwitter-ion netral dan menghitung pI = (2,09 + 3,86)/2 = 2,98 (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Menentukan zwitter-ion netral lisin dan menghitung pI = (8,95 + 10,53)/2 = 9,74 (2.5 poin).
  2. Menjelaskan muatan netto positif lisin pada pH 6,00 dan arah migrasi menuju katoda (2.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Asam aspartat memiliki $pK_{a1} = 2{,}09$, $pK_{a2} = 3{,}86$ (rantai samping $-\\ce{COOH}$), dan $pK_{a3} = 9{,}82$. Tuliskan keempat spesi ioniknya, tentukan spesi zwitter-ion netral, dan hitung nilai titik isolistrik ($pI$) asam aspartat!`,
        points: 5.0,
        rubric: 'Menuliskan 4 spesi ionik asam aspartat (2.5 poin) dan menghitung pI = (2,09 + 3,86)/2 = 2,98 (2.5 poin).',
        expected_answer: 'Spesi: H3A+ (+1) -> H2A± (0) -> HA- (-1) -> A2- (-2). Zwitter-ion netral adalah H2A±; pI = (2,09 + 3,86)/2 = 2,98.',
      },
      {
        label: 'b',
        question_text: `Lisin memiliki $pK_{a1} = 2{,}18$, $pK_{a2} = 8{,}95$ ($\alpha\text{-NH}_3^+$), dan $pK_{a3} = 10{,}53$ (rantai samping $-\\ce{NH}_3^+$). Tentukan spesi zwitter-ion netral, hitung $pI$ lisin, dan jelaskan arah migrasinya pada elektroforesis gel pada $\\text{pH} = 6{,}00$!`,
        points: 5.0,
        rubric: 'Menghitung pI lisin = (8,95 + 10,53)/2 = 9,74 (2.5 poin) dan menjelaskan muatan positif lisin pada pH 6,00 bermigrasi ke katoda (2.5 poin).',
        expected_answer: 'Zwitter-ion netral diapit pKa2 dan pKa3; pI = (8,95 + 10,53)/2 = 9,74. Pada pH 6,00 (< pI), lisin bermuatan positif dan bermigrasi menuju katoda.',
      },
    ],
    solution_framework_template: `1. Disosiasi Asam Aspartat (Asam Amino Asam):
• Struktur dan muatan formal pada setiap tahap disosiasi: ....
• Identifikasi zwitter-ion bermuatan netto nol: ....
• Perhitungan rata-rata dua pKa yang mengapit spesi netral: ....

2. Disosiasi Lisin (Asam Amino Basa) dan Elektroforesis:
• Penentuan pasangan pKa pengapit spesi netral lisin: ....
• Perhitungan titik isolistrik pI lisin: ....
• Analisis muatan netto lisin pada pH buffer 6,00 dan arah migrasi elektroforesis: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['titik-isolistrik', 'asam-aspartat', 'lisin', 'elektroforesis', 'zwitter-ion'],
  },
  {
    id: 116023,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Elusidasi Struktur Senyawa Organik Tak Dikenal C5H10O',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Elusidasi Spektrokimia Isomer Senyawa Karbon C5H10O',
    question_text: `Dua senyawa organik isomerik $X$ dan $Z$ memiliki rumus molekul yang sama, yaitu $\\ce{C5H10O}$. Analisis uji kimia laboratorium memberikan karakteristik sebagai berikut:
- Senyawa $X$ bereaksi positif dengan pereaksi Tollens menghasilkan cermin perak. Oksidasi senyawa $X$ menghasilkan asam karboksilat kiral $Y$ yang memiliki 1 atom karbon asimetris.
- Senyawa $Z$ tidak bereaksi dengan pereaksi Tollens maupun Fehling, namun bereaksi positif dengan uji iodoform ($\\ce{I2 + NaOH}$) menghasilkan endapan kuning triiodometana ($\\ce{CHI3}$).

Jawablah pertanyaan berikut untuk menentukan struktur senyawa-senyawa tersebut:`,
    expected_final_answer: 'a) Senyawa X adalah 2-metilbutanal (CH3-CH2-CH(CH3)-CHO). Oksidasinya menghasilkan asam karboksilat Y yaitu asam 2-metilbutanoat (CH3-CH2-CH^*(CH3)-COOH) yang memiliki atom C kiral pada C-2; b) Senyawa Z adalah 2-pentanon (CH3-CO-CH2-CH2-CH3) atau 3-metil-2-butanon (CH3-CO-CH(CH3)2). Keduanya merupakan metil keton (memiliki gugus CH3-CO-) sehingga positif terhadap uji iodoform. Reaksi iodoform (misal 2-pentanon): CH3-CO-CH2CH2CH3 + 3I2 + 4NaOH -> CHI3(s) + CH3CH2CH2COONa + 3NaI + 3H2O.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Mengidentifikasi gugus aldehid pada X dari uji Tollens positif (1.5 poin).
  2. Menentukan struktur X sebagai 2-metilbutanal dan Y sebagai asam 2-metilbutanoat dengan karbon kiral C-2 (3.5 poin).
- Sub-soal b (5.0 poin):
  1. Mengidentifikasi gugus metil keton (CH3-CO-) pada Z dari ketidakaktifan Tollens dan uji iodoform positif (2.0 poin).
  2. Menentukan struktur Z sebagai 2-pentanon (atau 3-metil-2-butanon) dan menuliskan persamaan reaksi uji iodoform pembentukan CHI3 (3.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tentukan rumus struktur dan nama IUPAC dari senyawa $X$ dan asam karboksilat $Y$, serta tunjukkan posisi atom karbon kiral pada molekul $Y$!`,
        points: 5.0,
        rubric: 'Menentukan X: 2-metilbutanal (2.5 poin) dan Y: asam 2-metilbutanoat dengan C-2 kiral (2.5 poin).',
        expected_answer: 'Senyawa X adalah 2-metilbutanal: CH3CH2CH(CH3)CHO; Senyawa Y adalah asam 2-metilbutanoat: CH3CH2CH*(CH3)COOH dengan C-2 sebagai atom karbon kiral.',
      },
      {
        label: 'b',
        question_text: `Tentukan rumus struktur dan nama IUPAC senyawa $Z$, serta tuliskan persamaan reaksi uji iodoform pembentukan endapan kuning triiodometana!`,
        points: 5.0,
        rubric: 'Menentukan Z: 2-pentanon (2.0 poin) dan menuliskan reaksi iodoform CH3COCH2CH2CH3 + 3I2 + 4NaOH -> CHI3 + CH3CH2CH2COONa + 3NaI + 3H2O (3.0 poin).',
        expected_answer: 'Senyawa Z adalah 2-pentanon: CH3COCH2CH2CH3. Reaksi: CH3COCH2CH2CH3 + 3I2 + 4NaOH -> CHI3(s) + CH3CH2CH2COONa + 3NaI + 3H2O.',
      },
    ],
    solution_framework_template: `1. Elusidasi Senyawa X dan Y:
• Deduksi gugus fungsi X dari uji Tollens (aldehid): ....
• Penelusuran isomer aldehid pentanal dengan cabang pembawa kiralitas: ....
• Rumus struktur X dan penamaan IUPAC: ....
• Rumus struktur asam karboksilat Y dan identifikasi karbon asimetris C*: ....

2. Elusidasi Senyawa Z dan Uji Iodoform:
• Analisis keton resisten Tollens/Fehling: ....
• Syarat struktur pembawa uji iodoform (gugus metil karbonil CH3-CO-): ....
• Rumus struktur dan nama IUPAC senyawa Z: ....
• Persamaan reaksi pembentukan endapan kuning CHI3: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['elusidasi-struktur', 'uji-iodoform', '2-metilbutanal', '2-pentanon', 'karbon-kiral'],
  },
  {
    id: 116024,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Mekanisme Substitusi Nukleofilik SN1 vs SN2',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Komparatif Mekanisme Reaksi SN1 vs SN2 pada Alkil Halida',
    question_text: `Reaksi substitusi nukleofilik alifatik pada alkil halida ($\\ce{R-X}$) dapat berlangsung melalui mekanisme unimolekuler ($S_N1$) atau bimolekuler ($S_N2$), yang sangat menentukan kinetika dan stereokimia produk.

Jawablah pertanyaan berikut terkait analisis komparatif kedua mekanisme tersebut:`,
    expected_final_answer: 'a) Mekanisme SN1 pada 2-kloro-2-metilpropana: berlangsung dalam dua tahap; tahap pertama lambat membentuk karbokation tersier planar sp2 [(CH3)3C]+, tahap kedua serangan nukleofil dari kedua sisi bidang planar menghasilkan rasemisasi optis. Mekanisme SN2 pada 1-klorobutana: berlangsung serempak satu tahap; nukleofil menyerang dari sisi belakang ikatan C-Cl (backside attack) melalui keadaan transisi pentakoordinasi trigonal bipiramidal, menghasilkan inversi stereokimia (inversi Walden); b) Faktor lingkungan reaksi: (1) Pelarut protik polar (air, etanol) menstabilkan karbokation dan gugus pergi Cl- via ikatan hidrogen sehingga mempercepat laju SN1, sedangkan pelarut aprotik polar (aseton, DMSO) tidak mensolvasi nukleofil kuat sehingga nukleofil sangat reaktif mempercepat laju SN2; (2) Nukleofil kuat berkonsentrasi tinggi (misal OH- pekat) memaksa terjadinya reaksi SN2, sedangkan nukleofil lemah/encer (misal H2O) mendukung jalur SN1.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menjelaskan mekanisme SN1 (dua tahap, karbokation tersier planar, rasemisasi optis) (2.5 poin).
  2. Menjelaskan mekanisme SN2 (satu tahap serempak, backside attack, keadaan transisi pentakoordinasi, inversi Walden) (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Menjelaskan pengaruh pelarut protik polar (mendukung SN1) vs aprotik polar (mendukung SN2) (2.5 poin).
  2. Menjelaskan pengaruh kekuatan dan konsentrasi nukleofil (nukleofil kuat mendukung SN2; nukleofil lemah mendukung SN1) (2.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Bandingkan mekanisme reaksi $S_N1$ pada 2-kloro-2-metilpropana dengan mekanisme $S_N2$ pada 1-klorobutana, ditinjau dari jumlah tahapan reaksi, sifat zat antara/keadaan transisi, dan stereokimia produk!`,
        points: 5.0,
        rubric: 'Menjelaskan SN1 dua tahap via karbokation tersier planar menghasilkan rasemisasi (2.5 poin) dan SN2 satu tahap via serangan belakang menghasilkan inversi Walden (2.5 poin).',
        expected_answer: 'SN1: 2 tahap via zat antara karbokation tersier planar sp2, produk mengalami rasemisasi. SN2: 1 tahap serempak via serangan belakang (backside attack) keadaan transisi pentakoordinasi, produk mengalami inversi Walden.',
      },
      {
        label: 'b',
        question_text: `Jelaskan pengaruh pemilihan jenis pelarut (protik polar vs aprotik polar) serta kekuatan dan konsentrasi nukleofil terhadap laju relatif mekanisme $S_N1$ dibandingkan $S_N2$!`,
        points: 5.0,
        rubric: 'Menjelaskan efek pelarut protik mendukung SN1 dan aprotik mendukung SN2 (2.5 poin) serta nukleofil kuat mendukung SN2 dan lemah mendukung SN1 (2.5 poin).',
        expected_answer: 'Pelarut protik polar menstabilkan karbokation mendukung SN1; pelarut aprotik polar tidak mengurung nukleofil mendukung SN2. Nukleofil kuat berkonsentrasi tinggi memicu SN2; nukleofil lemah memicu SN1.',
      },
    ],
    solution_framework_template: `1. Komparasi Mekanisme dan Stereokimia SN1 vs SN2:
• Analisis rintangan sterik alkil halida tersier vs primer: ....
• Geometri zat antara karbokation planar sp2 (SN1) dan rasemisasi: ....
• Keadaan transisi pentakoordinasi trigonal bipiramidal (SN2) dan inversi Walden: ....

2. Pengaruh Solvasi Pelarut dan Kekuatan Nukleofil:
• Interaksi ikatan hidrogen pelarut protik polar terhadap karbokation dan anion halida: ....
• Solvasi kation selektif pelarut aprotik polar (peningkatan nukleofilisitas): ....
• Peran kekuatan basa Lewis nukleofil dalam hukum laju reaksi: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['sn1-sn2', 'substitusi-nukleofilik', 'inversi-walden', 'karbokation', 'pelarut-aprotik'],
  },
  {
    id: 116025,
    sma_topic_number: 16,
    sma_topic_id: 116,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Sekuensing Oligopeptida & Analisis Uji Biokimia Lanjutan',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Sekuensing Logis Fragmen Peptida dan Prediksi Respons Uji Biokimia',
    question_text: `Suatu heksapeptida linear tersusun atas 6 asam amino yang berbeda: Ala (alanina), Gly (glisina), Phe (fenilalanina), Cys (sisteina), Asp (asam aspartat), dan Val (valina).

Jawablah pertanyaan berikut terkait penentuan urutan primer (sekuens) dan analisis uji biokimiawinya:`,
    expected_final_answer: 'a) Sekuens heksapeptida: Ala-Gly-Phe-Cys-Asp-Val (dari N-terminal ke C-terminal). Logika tumpang-tindih (overlapping): Fragmen tripeptida Ala-Gly-Phe dan Phe-Cys-Asp bertumpang-tindih pada Phe menghasilkan tetrapeptida Ala-Gly-Phe-Cys-Asp. Fragmen Cys-Asp-Val bertumpang-tindih pada Cys-Asp melengkapi rantai menjadi heksapeptida lengkap Ala-Gly-Phe-Cys-Asp-Val; b) Prediksi uji biokimia: (1) Uji Biuret: Positif menghasilkan warna ungu pekat karena heksapeptida memiliki 5 ikatan peptida (syarat minimal 2); (2) Uji Xantoproteat: Positif menghasilkan warna kuning/jingga karena memiliki residu asam amino aromatik fenilalanina (Phe); (3) Uji Timbal(II) Asetat: Positif menghasilkan endapan hitam timbal(II) sulfida PbS karena memiliki residu asam amino pembawa belerang sisteina (Cys).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menyusun logika tumpang-tindih (*overlapping fragments*) dari pecahan dipeptida/tripeptida secara runtut (2.5 poin).
  2. Menentukan urutan sekuens linear yang tepat dari N-terminal ke C-terminal: Ala-Gly-Phe-Cys-Asp-Val (2.5 poin).
- Sub-soal b (5.0 poin):
  1. Memprediksi positif ungu pada Uji Biuret karena terdapat 5 ikatan peptida (1.5 poin).
  2. Memprediksi positif kuning/jingga pada Uji Xantoproteat karena adanya residu Phe (1.5 poin).
  3. Memprediksi positif endapan hitam PbS pada Uji Timbal(II) Asetat karena adanya gugus tiol sisteina Cys (2.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hidrolisis parsial heksapeptida tersebut menghasilkan fragmen-fragmen: Ala-Gly-Phe, Phe-Cys, dan Cys-Asp-Val. Tentukan urutan lengkap asam amino (sekuens) dari heksapeptida tersebut dari ujung N-terminal ke C-terminal beserta logika penyusunannya!`,
        points: 5.0,
        rubric: 'Menjelaskan tumpang-tindih fragmen (2.5 poin) dan menyimpulkan sekuens Ala-Gly-Phe-Cys-Asp-Val (2.5 poin).',
        expected_answer: 'Sekuens: Ala-Gly-Phe-Cys-Asp-Val. Logika: Ala-Gly-Phe bertumpang tindih dengan Phe-Cys dan Cys-Asp-Val menghasilkan rantai linear utuh.',
      },
      {
        label: 'b',
        question_text: `Prediksi dan jelaskan secara kimiawi hasil pengujian heksapeptida tersebut terhadap: (1) Uji Biuret, (2) Uji Xantoproteat, dan (3) Uji Timbal(II) Asetat!`,
        points: 5.0,
        rubric: 'Memprediksi positif Biuret via 5 ikatan peptida (1.5 poin), positif Xantoproteat via cincin Phe (1.5 poin), dan positif Pb-asetat via sulfur Cys (2.0 poin).',
        expected_answer: 'Semua uji positif: Biuret (ungu karena ada 5 ikatan peptida), Xantoproteat (kuning karena ada cincin benzena Phe), dan Timbal(II) asetat (endapan hitam PbS karena ada belerang Cys).',
      },
    ],
    solution_framework_template: `1. Rekonstruksi Sekuens Oligopeptida:
• Identifikasi fragmen N-terminal: ....
• Pemetaan tumpang-tindih residu asam amino pada persambungan fragmen: ....
• Penulisan sekuens konvensional N-terminal -> C-terminal: ....

2. Respons Uji Biokimia Protein:
• Analisis jumlah ikatan peptida dan hasil uji Biuret: ....
• Analisis asam amino aromatik dan hasil uji Xantoproteat: ....
• Analisis asam amino pembawa gugus tiol/belerang dan reaksi pembentukan endapan PbS: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Persiapan OSN Kimia SMA',
    tags: ['sekuensing-peptida', 'uji-biuret', 'uji-xantoproteat', 'timbal-asetat', 'asam-amino-sistein'],
  },
];
