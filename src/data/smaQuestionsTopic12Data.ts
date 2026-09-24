/**
 * smaQuestionsTopic12Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F)
 * 
 * BATCH 12: Sistem Koloid & Kimia Permukaan SMA
 * Topik 12 SMA | Modul ID 112 | OSN Pilar 3 (Kimia Fisika & Larutan Koloid)
 * 
 * Distribusi:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian Terstruktur)  [ID 112001 - 112025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 112001 - 112025]
 * - 40% Sulit  (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 112001 - 112025]
 * Total: 25 Butir Soal Terstandarisasi (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_12_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 112001 - 112025)
  // =========================================================================
  {
    id: 112001,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Spektrum Sistem Dispersi (Larutan, Koloid, Suspensi)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Karakteristik Fundamental Pembeda Sistem Dispersi Koloid',
    question_text: `Sistem dispersi dikelompokkan menjadi larutan sejati, koloid, dan suspensi berdasarkan ukuran partikel fase terdispersinya. Karakteristik yang merupakan sifat khas sistem koloid adalah ....

A. Ukuran partikel lebih kecil dari $1\\text{ nm}$ dan bersifat homogen sempurna  
B. Partikel berukuran antara $1 - 100\\text{ nm}$, tampak homogen secara makroskopis tetapi heterogen secara mikroskopis  
C. Partikel berukuran lebih besar dari $100\\text{ nm}$ dan cepat mengendap karena gaya gravitasi  
D. Dapat disaring menggunakan kertas saring biasa (kertas Whatman biasa)  
E. Menghasilkan larutan yang selalu jernih dan tidak menghamburkan cahaya sama sekali`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Spektrum Tiga Sistem Dispersi:**
   - **Larutan Sejati:** Ukuran partikel $< 1\\text{ nm}$ (skala atomik/molekular/ionik), homogen satu fasa, stabil permanen, jernih, dan tidak menghamburkan cahaya. (Pilihan A salah)
   - **Sistem Koloid:** Ukuran partikel berada pada zona transisi intermediat $1\\text{ nm} - 100\\text{ nm}$. Secara fisik makroskopis tampak serbasama (homogen), namun di bawah mikroskop ultra tampak heterogen dua fasa (fase terdispersi dan medium pendispersi). Relatif stabil dan tidak dapat disaring dengan kertas saring biasa melainkan membran semipermeabel. (Pilihan B benar)
   - **Suspensi Kasar:** Ukuran partikel $> 100\\text{ nm}$, heterogen nyata, tidak stabil dan cepat mengendap akibat gravitasi, serta dapat disaring dengan kertas saring biasa. (Pilihan C dan D salah)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Ulangan Harian Kimia SMA Fase F',
    tags: ['sistem-koloid', 'sistem-dispersi', 'ukuran-partikel', 'fase-f'],
  },
  {
    id: 112002,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Matriks Klasifikasi 8 Jenis Koloid',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Identifikasi Pasangan Fase Terdispersi dan Medium Pendispersi pada Koloid Sehari-hari',
    question_text: `Pasangan contoh produk/material koloid berikut yang memiliki kombinasi fase terdispersi dan medium pendispersi yang **paling tepat** adalah ....

A. Asap pembakaran: fase terdispersi gas dalam medium pendispersi padat  
B. Batu apung (*pumice*): fase terdispersi gas dalam medium pendispersi padat  
C. Susu cair: fase terdispersi padat dalam medium pendispersi cair  
D. Keju / Mentega: fase terdispersi padat dalam medium pendispersi gas  
E. Kabut (*fog*): fase terdispersi gas dalam medium pendispersi cair`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Setiap Opsi Berdasarkan Matriks 8 Koloid:**
   - **Opsi A (Asap):** Partikel jelaga padat yang melayang di udara (Aerosol Padat: terdispersi **padat** dalam medium **gas**). (Salah)
   - **Opsi B (Batu Apung):** Gelembung gas vulkanik yang terperangkap di dalam silikat batuan padat (Busa Padat: terdispersi **gas** dalam medium **padat**). (Benar)
   - **Opsi C (Susu):** Butiran lemak cair yang teremulsi di dalam air (Emulsi Cair: terdispersi **cair** dalam medium **cair**). (Salah)
   - **Opsi D (Keju/Mentega):** Tetesan air yang terperangkap dalam lemak padat (Emulsi Padat / Gel: terdispersi **cair** dalam medium **padat**). (Salah)
   - **Opsi E (Kabut):** Butiran air cair yang melayang di udara (Aerosol Cair: terdispersi **cair** dalam medium **gas**). (Salah)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Formatif Kimia SMA',
    tags: ['klasifikasi-koloid', 'fase-terdispersi', 'medium-pendispersi', 'busa-padat'],
  },
  {
    id: 112003,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Sifat Optik Koloid: Efek Tyndall',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Hamburan Cahaya Efek Tyndall pada Sistem Koloid',
    question_text: `Ketika seberkas sinar laser merah diarahkan secara tegak lurus ke dalam dua gelas kimia yang masing-masing berisi larutan garam $\\ce{NaCl}$ encer dan santan kelapa encer:
- Jalur berkas sinar tidak terlihat dari samping pada larutan $\\ce{NaCl}$.
- Jalur berkas sinar tampak berpendar terang membentuk lintasan cahaya yang jelas pada santan kelapa.

Perbedaan fenomena optik tersebut terjadi karena ....

A. Molekul santan kelapa menyerap seluruh energi foton cahaya dan memancarkannya kembali sebagai radiasi inframerah  
B. Partikel koloid santan berukuran sebanding dengan panjang gelombang cahaya sehingga mampu menghamburkan berkas sinar ke segala arah  
C. Ion-ion $\\ce{Na+}$ dan $\\ce{Cl-}$ mengalami pemantulan sempurna di dalam air sehingga tidak ada cahaya yang keluar  
D. Larutan garam memiliki viskositas yang lebih tinggi sehingga memblokir laju rambat foton  
E. Santan kelapa bersifat asam sehingga membiaskan cahaya dengan indeks bias tak terhingga`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Prinsip Efek Tyndall:**
   Efek Tyndall adalah peristiwa hamburan cahaya oleh partikel-partikel koloid.
2. **Kaitan Dimensi Partikel dengan Panjang Gelombang:**
   - Pada larutan sejati (seperti $\\ce{NaCl}$), partikel ionik berukuran $< 1\\text{ nm}$, jauh lebih kecil daripada panjang gelombang cahaya tampak ($\\lambda = 400 - 700\\text{ nm}$). Berkas sinar diteruskan lurus tanpa dihamburkan secara signifikan.
   - Pada sistem koloid (seperti santan kelapa), partikel tetesan lemak berukuran antara $1 - 100\\text{ nm}$. Dimensi ini cukup besar untuk menghamburkan foton cahaya ke segala arah (Hukum Hamburan Rayleigh), sehingga jalur berkas sinar tampak jelas terlihat dari samping.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan Ujian Sekolah Kimia SMA',
    tags: ['efek-tyndall', 'hamburan-cahaya', 'sifat-optik-koloid', 'fase-f'],
  },
  {
    id: 112004,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Karakteristik Kinetik Koloid: Gerak Brown',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Mekanisme Tumbukan Kinetik Gerak Brown dan Kestabilan Koloid',
    question_text: `Ketika suspensi sari pati atau sol emas koloid diamati di bawah mikroskop ultra dengan pencahayaan gelap, partikel-partikel koloid terlihat bergerak secara terus-menerus dengan lintasan patah-patah tak beraturan (zig-zag). Fenomena ini dinamakan Gerak Brown (*Brownian Motion*).

Jelaskan fenomena kinetik ini:`,
    expected_final_answer: 'a) Gerak Brown disebabkan oleh tumbukan molekul-molekul medium pendispersi yang tidak seimbang dari berbagai arah terhadap partikel koloid; b) Gerak acak yang kontinu ini menghasilkan energi kinetik termal yang melawan gaya gravitasi sehingga partikel tidak mengendap.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menjelaskan bahwa gerak Brown timbul akibat tumbukan molekul-molekul medium pendispersi (pelarut air) yang bergerak termal secara acak dan menghantam permukaan partikel koloid dengan gaya resultan yang tidak seimbang dari berbagai sisi pada setiap saat.
- Sub-soal b (2.5 poin): Menjelaskan peran gerak Brown dalam menangkal percepatan gravitasi bumi; partikel koloid yang cukup ringan terus-menerus terdorong secara acak sehingga tidak mengalami sedimentasi dan sistem koloid tetap stabil secara kinetik.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan mekanisme mikroskopis yang menyebabkan timbulnya gerak zig-zag tak beraturan (Gerak Brown) pada partikel koloid!`,
        points: 2.5,
        rubric: 'Molekul-molekul medium pendispersi bergerak termal acak dengan kecepatan tinggi (1.0 poin). Karena ukuran partikel koloid cukup kecil, jumlah tumbukan molekul pelarut dari sisi berlawanan tidak seimbang secara statistik pada setiap saat, menghasilkan gaya dorong resultan yang mengubah arah partikel secara patah-patah (1.5 poin).',
        expected_answer: 'Gerak Brown timbul akibat tumbukan kinetik molekul-molekul medium pendispersi yang tidak seimbang terhadap partikel koloid.',
      },
      {
        label: 'b',
        question_text: `Mengapa keberadaan Gerak Brown menjadi faktor yang sangat menentukan dalam menjaga kestabilan sistem koloid dari bahaya pengendapan (*sedimentasi*)?`,
        points: 2.5,
        rubric: 'Partikel koloid memiliki massa sehingga ditarik ke bawah oleh gaya gravitasi bumi (0.5 poin). Gerak Brown memberikan energi kinetik acak ke segala arah yang terus-menerus mengaduk partikel koloid ke atas dan ke samping, melawan tarikan gravitasi sehingga partikel tidak pernah mengendap (2.0 poin).',
        expected_answer: 'Gerak Brown bekerja melawan gaya gravitasi bumi sehingga partikel koloid tetap melayang dan tidak mengendap ke dasar wadah.',
      },
    ],
    solution_framework_template: `1. Mekanisme Mikroskopis Tumbukan Termal:
• Asal-usul gerak molekul medium pelarut: ....
• Fluktuasi ketidakseimbangan momentum tumbukan: ....
• Pembentukan lintasan gerak zig-zag acak: ....

2. Hubungan dengan Kestabilan Koloid terhadap Gravitasi:
• Pengaruh medan gravitasi pada massa partikel: ....
• Efek pengadukan kinetik termal kontinu: ....
• Pencegahan sedimentasi partikel: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Formatif Kimia SMA',
    tags: ['gerak-brown', 'sifat-kinetik', 'kestabilan-koloid', 'tumbukan-molekul'],
  },
  {
    id: 112005,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Klasifikasi Koloid Liofil dan Koloid Liofob',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Perbandingan Karakteristik Koloid Liofil dan Koloid Liofob',
    question_text: `Berdasarkan afinitas interaksi antara partikel fase terdispersi dengan medium pendispersinya (terutama air), sistem sol koloid dibedakan menjadi **koloid liofil (hidrofil)** dan **koloid liofob (hidrofob)**.

Jawablah pertanyaan analisis komparatif berikut:`,
    expected_final_answer: 'a) Koloid liofil memiliki selubung hidrasi tebal dan sangat sukar dikoagulasikan elektrolit, sedangkan liofob tidak memiliki mantel hidrasi dan sangat rentan koagulasi; b) Contoh liofil: gelatin, agar-agar, kanji; contoh liofob: sol belerang, sol emas, sol Fe(OH)3.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menjelaskan bahwa koloid liofil memiliki interaksi tarik-menarik kuat dengan medium sehingga diselubungi mantel pelarut/hidrasi tebal dan sangat tahan terhadap penambahan elektrolit (butuh konsentrasi sangat tinggi / salting out). Sebaliknya, koloid liofob memiliki interaksi lemah, hanya distabilkan oleh muatan elektrostatik tipis sehingga sangat mudah dikoagulasikan oleh sedikit elektrolit.
- Sub-soal b (2.5 poin): Memberikan minimal 2 contoh koloid liofil (gelatin, agar-agar, kanji, protein albumin) dan 2 contoh koloid liofob (sol belerang, sol emas, sol Fe(OH)3, sol As2S3).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan perbedaan mendasar antara koloid liofil dan koloid liofob ditinjau dari selubung molekul pelarut (*hydration shell*) serta kepekaannya terhadap koagulasi oleh penambahan elektrolit!`,
        points: 2.5,
        rubric: 'Koloid liofil: gaya tarik kuat dengan pelarut, membentuk mantel hidrasi tebal yang melindungi partikel, sangat sukar dikoagulasi elektrolit (1.5 poin). Koloid liofob: gaya tarik lemah dengan pelarut, tidak ada mantel pelarut, hanya distabilkan oleh muatan listrik tipis, sangat mudah dikoagulasi oleh sedikit elektrolit (1.0 poin).',
        expected_answer: 'Koloid liofil diselubungi lapisan pelarut tebal dan tahan elektrolit; koloid liofob tidak memiliki mantel pelarut dan sangat mudah menggumpal bila ditambah elektrolit.',
      },
      {
        label: 'b',
        question_text: `Berikan masing-masing dua contoh nyata sistem koloid liofil (hidrofil) dan koloid liofob (hidrofob) yang lazim dijumpai di laboratorium maupun kehidupan sehari-hari!`,
        points: 2.5,
        rubric: 'Dua contoh liofil/hidrofil: gelatin, agar-agar, larutan kanji, atau protein putih telur (1.25 poin). Dua contoh liofob/hidrofob: sol belerang dalam air, sol emas, sol Fe(OH)3, atau sol As2S3 (1.25 poin).',
        expected_answer: 'Koloid liofil: gelatin dan agar-agar. Koloid liofob: sol belerang dan sol Fe(OH)3.',
      },
    ],
    solution_framework_template: `1. Perbandingan Karakteristik Fisiko-Kimia:
• Afinitas interaksi fase terdispersi terhadap pelarut: ....
• Keberadaan mantel solvasi / lapisan hidrasi pelindung: ....
• Tingkat kepekaan terhadap koagulasi elektrolit: ....

2. Contoh Nyata Sistem Koloid:
• Dua contoh sistem koloid liofil: ....
• Dua contoh sistem koloid liofob: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Asesmen Formatif Kimia Fase F',
    tags: ['koloid-liofil', 'koloid-liofob', 'mantel-hidrasi', 'koagulasi-elektrolit'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 112001 - 112025)
  // =========================================================================
  {
    id: 112006,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Aksi Emulgator pada Emulsi Minyak dan Air',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Mekanisme Molekular Aksi Emulgator Menstabilkan Emulsi Mayones',
    question_text: `Saus mayones merupakan sistem koloid emulsi minyak nabati di dalam air (cuka/air lemon). Tanpa penambahan kuning telur, minyak dan air akan segera memisah kembali menjadi dua lapisan terpisah setelah pengocokan dihentikan. Kuning telur mampu menstabilkan mayones karena mengandung lesitin yang bertindak sebagai emulgator.

Mekanisme molekular lesitin dalam menstabilkan emulsi tersebut adalah ....

A. Bereaksi secara kimia mengubah trigliserida minyak menjadi molekul gliserol yang larut air  
B. Menurunkan massa jenis minyak sehingga sama persis dengan massa jenis air  
C. Memiliki struktur amfifilik: ekor non-polar larut dalam tetesan minyak dan kepala polar berikatan dengan air, membungkus tetesan minyak sehingga mencegah koalesensi  
D. Mengikat gas oksigen di dalam air sehingga menghambat oksidasi lemak  
E. Meningkatkan titik didih campuran sehingga tetesan minyak membeku menjadi gel padat`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Hakikat Emulsi Tidak Stabil:**
   Minyak dan air tidak saling melarut (*immiscible*). Ketika dikocok kuat, energi mekanik memecah minyak menjadi tetesan mikro, namun tingginya tegangan antarmuka menyebabkan tetesan-tetesan minyak segera bergabung kembali (*koalesensi*) untuk meminimalkan energi bebas permukaan.
2. **Struktur Amfifilik Emulgator (Lesitin):**
   Lesitin adalah fosfolipid dengan dua bagian berlawanan:
   - **Kepala polar (hidrofilik):** mengandung gugus fosfat dan kolin yang membentuk ikatan hidrogen dan dipol dengan molekul air.
   - **Ekor non-polar (lipofilik/hidrofobik):** dua rantai panjang asam lemak yang larut di dalam tetesan minyak.
3. **Mekanisme Pembungkusan:**
   Molekul lesitin berorientasi pada antarmuka tetesan minyak: ekor non-polar menancap ke dalam tetesan minyak, sedangkan kepala polar mencuat ke luar menghadap air. Selubung polar ini memberikan tolakan sterik dan elektrostatik antar tetesan minyak, mencegah koalesensi sehingga emulsi mayones menjadi stabil homogen. (Pilihan C benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'UTBK-SNBT / Ujian Sekolah Kimia SMA',
    tags: ['emulsi', 'emulgator', 'lesitin', 'struktur-amfifilik'],
  },
  {
    id: 112007,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Adsorpsi Ion dan Muatan Partikel Koloid',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Prediksi Arah Migrasi Elektroforesis Sol Besi(III) Hidroksida',
    question_text: `Sol besi(III) hidroksida, $\\ce{Fe(OH)3}$, dibuat di laboratorium dengan meneteskan larutan $\\ce{FeCl3}$ jenuh ke dalam air mendidih. Partikel koloid yang terbentuk mengadsorpsi ion $\\ce{Fe^3+}$ yang berlebih pada permukaannya.
Jika sol tersebut dimasukkan ke dalam pipa U yang dipasangi sepasang elektroda dan dihubungkan dengan sumber arus listrik searah (DC), maka fenomena yang teramati adalah ....

A. Partikel koloid bermigrasi menuju elektroda positif (anoda) karena bermuatan negatif  
B. Partikel koloid bermigrasi menuju elektroda negatif (katoda) karena bermuatan positif  
C. Partikel koloid mengendap tepat di dasar pipa U tanpa bergerak ke salah satu elektroda  
D. Air medium pendispersi terurai menghasilkan gas hidrogen dan oksigen di kedua elektroda tanpa pergerakan partikel koloid  
E. Partikel koloid kehilangan muatan dan segera larut menjadi larutan sejati satu fasa`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Identifikasi Muatan Sol via Adsorpsi Selektif:**
   Pada pembuatan sol $\\ce{Fe(OH)3}$ melalui hidrolisis:
   $$\\ce{FeCl3(aq) + 3 H2O(l) -> Fe(OH)3(koloid) + 3 HCl(aq)}$$
   Permukaan partikel padatan $\\ce{Fe(OH)3}$ memiliki afinitas spesifik untuk mengadsorpsi kation sejenis yang berlebih di larutan, yaitu kation $\\ce{Fe^3+}$. Akibatnya, partikel koloid $\\ce{Fe(OH)3}$ menjadi **bermuatan listrik positif $(+)$**.
2. **Prinsip Elektroforesis:**
   Elektroforesis adalah pergerakan partikel koloid bermuatan di bawah pengaruh medan listrik eksternal.
   - Partikel bermuatan positif akan ditarik oleh gaya elektrostatik Coulomb menuju elektroda yang bermuatan berlawanan, yaitu kutub negatif (**katoda**). (Pilihan B benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA',
    tags: ['adsorpsi-ion', 'elektroforesis', 'sol-besi-hidroksida', 'muatan-koloid'],
  },
  {
    id: 112008,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Aturan Schulze-Hardy pada Koagulasi Sol Negatif',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Urutan Efektivitas Koagulasi Elektrolit terhadap Sol Arsen(III) Sulfida',
    question_text: `Sol arsen(III) sulfida ($\\ce{As2S3}$) adalah koloid liofob yang partikelnya bermuatan negatif akibat mengadsorpsi anion sulfida ($\\ce{S^2-}$). Tersedia empat larutan elektrolit dengan konsentrasi yang sama ($0{,}010\\text{ M}$):
(1) $\\ce{AlCl3}$
(2) $\\ce{MgSO4}$
(3) $\\ce{NaCl}$
(4) $\\ce{Na3PO4}$

Berdasarkan Aturan Schulze-Hardy, urutan elektrolit dari yang **paling efektif (membutuhkan volume paling sedikit untuk menggumpalkan)** hingga yang **paling tidak efektif** dalam mengkoagulasikan sol $\\ce{As2S3}$ adalah ....

A. $(1) > (2) > (3) > (4)$  
B. $(4) > (2) > (1) > (3)$  
C. $(1) > (2) > (4) > (3)$  
D. $(3) > (2) > (1) > (4)$  
E. $(4) > (3) > (2) > (1)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Aturan Schulze-Hardy:**
   - Ion yang efektif memicu koagulasi adalah ion yang memiliki **muatan berlawanan** dengan partikel koloid.
   - Karena sol $\\ce{As2S3}$ bermuatan **negatif $(-)$**, maka ion yang berperan memicu koagulasi adalah **kation bermuatan positif $(+)$**.
   - Semakin besar valensi (muatan positif) kation, semakin besar daya koagulasinya.
2. **Evaluasi Kation Tiap Elektrolit:**
   - (1) $\\ce{AlCl3}$ menghasilkan kation $\\ce{Al^3+}$ (valensi $z = +3$).
   - (2) $\\ce{MgSO4}$ menghasilkan kation $\\ce{Mg^2+}$ (valensi $z = +2$).
   - (3) $\\ce{NaCl}$ menghasilkan kation $\\ce{Na+}$ (valensi $z = +1$).
   - (4) $\\ce{Na3PO4}$ menghasilkan kation $\\ce{Na+}$ (valensi $z = +1$). Namun garam ini memiliki anion fosfat $\\ce{PO4^3-}$ bermuatan negatif tinggi yang justru dapat menstabilkan muatan negatif sol.
3. **Urutan Daya Koagulasi Kation:**
   $$\\ce{Al^3+} (z=3) \\gg \\ce{Mg^2+} (z=2) \\gg \\ce{Na+} (z=1)$$
   Maka urutan efektivitas koagulasi adalah $(1) > (2) > (3) > (4)$. (Pilihan A benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK Kimia SMA',
    tags: ['aturan-schulze-hardy', 'koagulasi', 'sol-negatif', 'arsen-sulfida'],
  },
  {
    id: 112009,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pembuatan Koloid Cara Kondensasi (Hidrolisis vs Redoks)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Identifikasi Tipe Reaksi Kimia pada Pembuatan Koloid Cara Kondensasi',
    question_text: `Perhatikan dua prosedur pembuatan koloid di laboratorium berikut:
(1) Larutan asam kloroaurat ($\\ce{HAuCl4}$) direaksikan dengan larutan formalin ($\\ce{HCHO}$) encer menghasilkan sol emas berwarna merah delima.
(2) Gas hidrogen sulfida ($\\ce{H2S}$) dialirkan ke dalam larutan asam arsenit ($\\ce{H3AsO3}$) encer menghasilkan sol arsen(III) sulfida berwarna kuning.

Jenis reaksi kimia yang mendasari pembuatan koloid pada prosedur (1) dan (2) berturut-turut adalah ....

A. Reaksi hidrolisis dan reaksi dekomposisi ganda  
B. Reaksi redoks dan reaksi dekomposisi ganda  
C. Reaksi peptisasi dan reaksi hidrolisis  
D. Reaksi dekomposisi ganda dan reaksi redoks  
E. Reaksi penggantian pelarut dan reaksi netralisasi asam-basa`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Prosedur (1):**
   Persamaan reaksi:
   $$\\ce{2 HAuCl4(aq) + 3 HCHO(aq) + 3 H2O(l) -> 2 Au(koloid) + 3 HCOOH(aq) + 8 HCl(aq)}$$
   - Bilangan oksidasi emas turun dari $+3$ (dalam $\\ce{HAuCl4}$) menjadi $0$ (dalam logam $\\ce{Au}$): terjadi **reduksi**.
   - Karbon pada formaldehida dioksidasi menjadi asam format.
   - Prosedur (1) adalah **reaksi redoks**.
2. **Analisis Prosedur (2):**
   Persamaan reaksi:
   $$\\ce{2 H3AsO3(aq) + 3 H2S(g) -> As2S3(koloid) + 6 H2O(l)}$$
   - Terjadi pertukaran pasangan ion (metatesis) tanpa perubahan bilangan oksidasi ion $\\ce{As^3+}$ maupun $\\ce{S^2-}$.
   - Prosedur (2) adalah **reaksi dekomposisi ganda (*double displacement*)**. (Pilihan B benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA',
    tags: ['sintesis-kondensasi', 'sol-emas', 'sol-arsen-sulfida', 'reaksi-redoks'],
  },
  {
    id: 112010,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pembuatan Koloid Cara Dispersi (Peptisasi dan Busur Bredig)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Prinsip Pembentukan Koloid Melalui Metode Peptisasi dan Busur Bredig',
    question_text: `Pembuatan koloid dengan cara dispersi dilakukan dengan memecah partikel-partikel kasar menjadi partikel berukuran koloid. Pernyataan yang **paling tepat** mengenai metode peptisasi dan metode Busur Bredig adalah ....

A. Peptisasi dilakukan dengan mengalirkan arus listrik tegangan tinggi pada dua elektroda logam di dalam air mendidih  
B. Metode Busur Bredig memecah endapan padat menggunakan pengadukan mekanik ultra-cepat tanpa pelarut  
C. Peptisasi adalah proses pemecahan endapan kasar yang baru terbentuk menjadi partikel koloid dengan menambahkan zat pemecah berupa larutan elektrolit sejenis  
D. Metode Busur Bredig hanya dapat digunakan untuk membuat koloid emulsi cair dari minyak nabati  
E. Peptisasi menghasilkan larutan sejati karena endapan larut sempurna secara molekular`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Metode Peptisasi:**
   Peptisasi adalah proses dispersi di mana endapan padatan segar dipecah kembali menjadi partikel koloid terdispersi dengan bantuan zat pemecah (*peptizing agent*) berupa elektrolit. Ion dari elektrolit diadsorpsi pada permukaan partikel endapan, memberikan muatan sejenis yang menyebabkan partikel saling tolak-menolak dan terlepas melayang menjadi koloid. (Pilihan C benar)
2. **Analisis Metode Busur Bredig:**
   Metode Busur Bredig adalah metode kombinasi dispersi dan kondensasi untuk membuat sol logam mulia (emas, perak, platina). Loncatan bunga api listrik tegangan tinggi di antara dua ujung kawat logam dalam air dingin menguapkan atom logam (dispersi termal), uap logam tersebut seketika terkondensasi oleh air dingin membentuk partikel koloid nanometer. (Pilihan A dan B salah)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Ulangan Harian Kimia SMA',
    tags: ['sintesis-dispersi', 'peptisasi', 'busur-bredig', 'sol-logam'],
  },
  {
    id: 112011,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Prinsip Pemurnian Koloid Melalui Dialisis',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Mekanisme Selektivitas Membran Semipermeabel Dialisis dan Aplikasi Hemodialisis',
    question_text: `Sol koloid yang baru disintesis di laboratorium sering kali masih tercemar oleh ion-ion elektrolit sisa reaksi yang berpotensi memicu koagulasi spontan. Untuk memurnikannya, sistem koloid dimasukkan ke dalam kantung membran selofan dan dicelupkan ke dalam bejana berisi air mengalir melalui teknik **dialisis**.

Selesaikan analisis proses pemurnian ini:`,
    expected_final_answer: 'a) Membran semipermeabel meloloskan molekul air dan ion elektrolit kecil (< 1 nm) tetapi menahan partikel koloid (> 1 nm) sehingga pengotor terdifusi keluar; b) Pada hemodialisis, membran dialyzer menyaring urea dan racun metabolit kecil keluar dari darah tanpa membuang sel darah dan protein koloid.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menjelaskan bahwa pori-pori membran semipermeabel berukuran intermediate: cukup besar untuk dilewati ion elektrolit terhidrasi dan molekul air (< 1 nm), namun terlalu sempit untuk dilewati partikel koloid (1 - 100 nm). Dengan air mengalir di luar kantung, ion pengotor berdifusi keluar mengikuti gradien konsentrasi sehingga koloid menjadi murni.
- Sub-soal b (2.5 poin): Menjelaskan analogi dialisis pada mesin hemodialisis (cuci darah): darah pasien dialirkan melewati tabung serat membran semipermeabel; urea, kreatinin, dan kelebihan ion berdifusi ke dalam cairan dialisat, sementara sel darah merah, sel darah putih, dan protein albumin yang berukuran koloid tetap tertahan di dalam pembuluh darah.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan prinsip kerja pemisahan dialisis berdasarkan perbedaan ukuran pori membran semipermeabel terhadap partikel koloid dan ion-ion pengotor elektrolit!`,
        points: 2.5,
        rubric: 'Pori-pori membran semipermeabel berukuran sekitar 1 nm (0.5 poin). Ion elektrolit pengotor dan molekul air berukuran < 1 nm sehingga dapat berdifusi menembus pori membran menuju air mengalir (1.0 poin). Partikel koloid berukuran 1 - 100 nm tertahan di dalam kantung karena ukurannya lebih besar daripada pori membran (1.0 poin).',
        expected_answer: 'Pori membran semipermeabel hanya meloloskan ion elektrolit kecil (< 1 nm) ke air mengalir dan menahan partikel koloid (> 1 nm) di dalam kantung.',
      },
      {
        label: 'b',
        question_text: `Jelaskan bagaimana prinsip dialisis ini diterapkan dalam dunia medis pada proses hemodialisis (cuci darah) bagi penderita gagal ginjal!`,
        points: 2.5,
        rubric: 'Darah adalah sistem koloid kompleks yang mengandung sel darah dan protein albumin (0.5 poin). Pada hemodialisis, darah dialirkan melewati membran dialyzer semipermeabel di mana racun metabolit berukuran molekul kecil seperti urea dan kreatinin berdifusi keluar menuju cairan dialisat (1.0 poin), sedangkan sel-sel darah dan protein esensial tertahan di dalam aliran darah pasien (1.0 poin).',
        expected_answer: 'Membran dialyzer menyaring urea dan limbah racun kecil keluar dari darah penderita gagal ginjal tanpa meloloskan sel darah dan protein darah.',
      },
    ],
    solution_framework_template: `1. Mekanisme Selektivitas Pori Membran Semipermeabel:
• Karakteristik dimensi pori membran dialisis: ....
• Perilaku ion-ion elektrolit pengotor terlarut: ....
• Retensi partikel koloid di dalam kantung: ....

2. Aplikasi Medis Hemodialisis (Cuci Darah):
• Komposisi darah sebagai sistem koloid biologis: ....
• Pembuangan limbah metabolit (urea/kreatinin) ke dialisat: ....
• Perlindungan sel darah dan protein plasma: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Formatif Kimia SMA Fase F',
    tags: ['dialisis', 'pemurnian-koloid', 'membran-semipermeabel', 'hemodialisis'],
  },
  {
    id: 112012,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Evaluasi Daya Koagulasi Berdasarkan Aturan Schulze-Hardy',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Koagulasi Sol Besi(III) Hidroksida oleh Larutan Elektrolit Bervalensi',
    question_text: `Sebanyak $50\\text{ mL}$ sol besi(III) hidroksida ($\\ce{Fe(OH)3}$) bermuatan positif diuji daya koagulasinya menggunakan tiga larutan elektrolit yang konsentrasinya sama ($0{,}050\\text{ M}$):
- Larutan A: Natrium klorida ($\\ce{NaCl}$)
- Larutan B: Natrium sulfat ($\\ce{Na2SO4}$)
- Larutan C: Natrium fosfat ($\\ce{Na3PO4}$)

Analisis proses koagulasi tersebut:`,
    expected_final_answer: 'a) Ion yang berperan adalah anion bermuatan negatif; b) Urutan daya koagulasi: Na3PO4 (PO4^3-) >> Na2SO4 (SO4^2-) >> NaCl (Cl-), sehingga Na3PO4 membutuhkan volume paling sedikit.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menjelaskan bahwa karena sol Fe(OH)3 bermuatan positif (+), maka ion elektrolit yang aktif menetralkan muatan dan memicu koagulasi adalah anion bermuatan negatif (-) yaitu Cl-, SO4^2-, dan PO4^3-.
- Sub-soal b (2.5 poin): Berdasarkan Aturan Schulze-Hardy, daya koagulasi berbanding lurus dengan muatan/valensi ion koagulan: valensi PO4^3- (z = 3) > SO4^2- (z = 2) > Cl- (z = 1). Maka larutan Na3PO4 adalah yang paling efektif dan membutuhkan volume paling sedikit, diikuti Na2SO4, dan paling tidak efektif adalah NaCl.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tentukan jenis ion (kation atau anion) dari elektrolit penambah yang aktif berperan dalam memicu terjadinya koagulasi pada sol $\\ce{Fe(OH)3}$ tersebut, serta jelaskan alasannya!`,
        points: 2.5,
        rubric: 'Ion yang aktif adalah ANION (ion bermuatan negatif) (1.0 poin). Karena partikel sol Fe(OH)3 bermuatan positif, ion lawan yang bermuatan negatif diperlukan untuk menetralkan muatan listrik permukaan koloid sehingga barier tolak-menolak elektrostatik runtuh (1.5 poin).',
        expected_answer: 'Ion yang aktif adalah anion bermuatan negatif, karena sol Fe(OH)3 bermuatan positif sehingga memerlukan ion lawan negatif untuk netralisasi.',
      },
      {
        label: 'b',
        question_text: `Urutkan ketiga larutan elektrolit tersebut (A, B, C) mulai dari yang membutuhkan volume paling sedikit (paling efektif) hingga yang membutuhkan volume paling banyak berdasarkan Aturan Schulze-Hardy!`,
        points: 2.5,
        rubric: 'Identifikasi valensi anion: PO4^3- (z = 3), SO4^2- (z = 2), Cl- (z = 1) (1.0 poin). Aturan Schulze-Hardy menyatakan daya koagulasi meningkat sangat pesat seiring peningkatan valensi muatan ion lawan (1.0 poin). Urutan efektivitas: Larutan C (Na3PO4) > Larutan B (Na2SO4) > Larutan A (NaCl) (0.5 poin).',
        expected_answer: 'Urutan efektivitas: Larutan C (Na3PO4) > Larutan B (Na2SO4) > Larutan A (NaCl). Larutan C membutuhkan volume paling sedikit.',
      },
    ],
    solution_framework_template: `1. Identifikasi Ion Koagulan Aktif:
• Muatan permukaan partikel sol Fe(OH)3: ....
• Muatan ion lawan elektrolit yang diperlukan: ....
• Mekanisme peruntuhan barier potensial elektrostatik: ....

2. Penerapan Aturan Schulze-Hardy:
• Valensi muatan masing-masing anion penambah: ....
• Relasi valensi anion terhadap daya koagulasi: ....
• Urutan efisiensi volume elektrolit yang dibutuhkan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA',
    tags: ['aturan-schulze-hardy', 'sol-positif', 'valensi-anion', 'daya-koagulasi'],
  },
  {
    id: 112013,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Peran Koloid Pelindung dalam Formulasi Industri Makanan dan Farmasi',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Mekanisme Aksi Koloid Pelindung pada Formulasi Es Krim dan Tinta Cetak',
    question_text: `Koloid liofob yang tidak stabil sering kali dilindungi dari bahaya koagulasi dengan menambahkan zat tertentu yang bertindak sebagai **koloid pelindung (*protective colloid*)**. Dua contoh penerapannya adalah:
(1) Penambahan gelatin pada adonan es krim komersial.
(2) Penambahan gom arab (*gum arabic*) atau dekstrin pada tinta cair.

Selesaikan analisis mekanisme koloid pelindung ini:`,
    expected_final_answer: 'a) Koloid liofil teradsorpsi membungkus seluruh permukaan partikel liofob membentuk mantel pelindung terhidrasi yang memberikan tolakan sterik; b) Gelatin mencegah kristal es dan laktosa tumbuh membesar sehingga es krim lembut, gom arab mencegah partikel pigmen tinta menggumpal di ujung pena.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menjelaskan bahwa molekul koloid liofil (pelindung) teradsorpsi pada permukaan partikel koloid liofob membentuk lapisan pelindung (*protective layer*) yang kaya akan molekul pelarut terhidrasi. Lapisan ini menciptakan efek rintangan sterik (*steric hindrance*) dan tolakan hidrasi yang mencegah partikel saling mendekat dan menggumpal.
- Sub-soal b (2.5 poin): Menjelaskan fungsi spesifik pada es krim (gelatin mencegah pembentukan kristal es kasar dan kristal laktosa besar sehingga tekstur es krim tetap lembut) dan pada tinta (gom arab melindungi partikel jelaga/pigmen karbon dari penggumpalan sehingga tinta tidak mengendap dan tidak menyumbat ujung pena).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan secara molekular bagaimana koloid liofil dapat melindungi partikel koloid liofob dari proses koagulasi oleh pengaruh elektrolit!`,
        points: 2.5,
        rubric: 'Koloid liofil memiliki afinitas tinggi terhadap pelarut air (0.5 poin). Molekul koloid liofil teradsorpsi menyelimuti seluruh permukaan partikel koloid liofob (1.0 poin). Lapisan selubung terhidrasi ini membentuk barier fisik (rintangan sterik) yang menolak ion elektrolit dan mencegah partikel liofob saling bertumbukan secara langsung (1.0 poin).',
        expected_answer: 'Koloid liofil teradsorpsi membungkus permukaan partikel liofob membentuk mantel hidrasi pelindung yang mencegah agregasi.',
      },
      {
        label: 'b',
        question_text: `Jelaskan tujuan praktis penambahan gelatin pada pembuatan es krim dan penambahan gom arab pada tinta cair!`,
        points: 2.5,
        rubric: 'Pada es krim: gelatin mencegah penggabungan dan pertumbuhan kristal es serta laktosa menjadi butiran kasar, sehingga tekstur es krim tetap lembut dan stabil saat disimpan (1.25 poin). Pada tinta: gom arab mencegah partikel pigmen padat mengendap di dasar botol atau menyumbat saluran pena cetak (1.25 poin).',
        expected_answer: 'Gelatin menjaga tekstur es krim tetap lembut (mencegah kristal es kasar), gom arab mencegah partikel pigmen tinta mengendap dan menyumbat pena.',
      },
    ],
    solution_framework_template: `1. Mekanisme Perlindungan Permukaan:
• Adsorpsi molekul koloid liofil pada partikel liofob: ....
• Pembentukan mantel hidrasi dan rintangan sterik: ....
• Pencegahan kontak antarpartikel terhadap elektrolit: ....

2. Aplikasi Nyata Industri:
• Peran gelatin dalam tekstur es krim: ....
• Peran gom arab dalam kestabilan tinta cetak: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Formatif Kimia SMA',
    tags: ['koloid-pelindung', 'gelatin', 'es-krim', 'gom-arab'],
  },
  {
    id: 112014,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pembentukan Koagulasi Dua Koloid Berlawanan Muatan',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Mekanisme Koagulasi Mutual pada Pencampuran Dua Sol Berlawanan Muatan',
    question_text: `Di laboratorium kimia disiapkan dua tabung reaksi:
- **Tabung 1:** $10\\text{ mL}$ sol besi(III) hidroksida ($\\ce{Fe(OH)3}$) berwarna cokelat kemerahan (sol bermuatan positif).
- **Tabung 2:** $10\\text{ mL}$ sol arsen(III) sulfida ($\\ce{As2S3}$) berwarna kuning (sol bermuatan negatif).

Ketika isi Tabung 1 dan Tabung 2 dicampurkan dalam satu bejana dengan perbandingan volume yang tepat, terjadi koagulasi cepat dan terbentuk endapan campuran di dasar wadah yang meninggalkan cairan di atasnya dalam keadaan jernih.

Analisis fenomena koagulasi mutual tersebut:`,
    expected_final_answer: 'a) Terjadi koagulasi mutual karena partikel Fe(OH)3 bermuatan positif dan As2S3 bermuatan negatif saling menetralkan muatan listrik permukaan saat bertumbukan; b) Koagulasi sempurna tercapai saat rasio muatan positif tepat seimbang dengan muatan negatif (potensial zeta mendekati 0 mV).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menjelaskan fenomena koagulasi mutual (koagulasi timbal-balik): partikel sol Fe(OH)3 yang bermuatan positif (+) dan partikel sol As2S3 yang bermuatan negatif (-) mengalami tarik-menarik elektrostatik. Saat bertemu, kedua partikel saling menetralkan muatan permukaannya, menghilangkan gaya tolak-menolak elektrostatik, sehingga gaya tarik van der Waals menyebabkan partikel menggumpal menjadi flok besar dan mengendap.
- Sub-soal b (2.5 poin): Menjelaskan bahwa koagulasi paling sempurna terjadi pada rasio stoikiometri muatan di mana jumlah muatan positif dari sol Fe(OH)3 tepat sama dengan jumlah muatan negatif dari sol As2S3 (potensial zeta netto sistem mencapai nol). Jika salah satu sol ditambahkan sangat berlebih, kelebihan sol tersebut akan memberikan muatan baru pada campuran sehingga dapat kembali terpeptisasi/stabil.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan interaksi fisik dan elektrostatik yang menyebabkan terjadinya penggumpalan (*koagulasi mutual*) saat sol $\\ce{Fe(OH)3}$ dicampurkan dengan sol $\\ce{As2S3}$!`,
        points: 2.5,
        rubric: 'Kedua sol membawa muatan listrik yang berlawanan tanda: Fe(OH)3 positif dan As2S3 negatif (1.0 poin). Ketika dicampurkan, terjadi gaya tarik elektrostatik antarpartikel yang berujung pada penetralan muatan permukaan kedua jenis partikel (1.0 poin). Hilangnya muatan listrik melenyapkan barier tolak-menolak sehingga partikel bergabung membentuk flok endapan besar (0.5 poin).',
        expected_answer: 'Partikel Fe(OH)3 bermuatan positif dan As2S3 bermuatan negatif saling menetralkan muatan listriknya saat bercampur, memicu koagulasi mutual.',
      },
      {
        label: 'b',
        question_text: `Mengapa perbandingan volume kedua sol harus seimbang untuk menghasilkan koagulasi yang sempurna, dan apa yang terjadi jika salah satu sol ditambahkan dalam jumlah yang sangat berlebih?`,
        points: 2.5,
        rubric: 'Koagulasi sempurna memerlukan penetralan muatan yang tepat seimbang (potensial zeta sistem = 0 mV) (1.0 poin). Jika salah satu sol ditambahkan sangat berlebih, partikel campuran akan mengadsorpsi kelebihan muatan dari sol yang dominan, sehingga partikel kembali bermuatan sejenis dan sistem kembali stabil (tidak mengendap) (1.5 poin).',
        expected_answer: 'Perbandingan harus seimbang agar muatan tepat netral. Jika salah satu sol berlebih, campuran akan kembali bermuatan sejenis dan tetap stabil sebagai koloid.',
      },
    ],
    solution_framework_template: `1. Mekanisme Interaksi Elektrostatik Antarpartikel:
• Tanda muatan masing-masing partikel sol: ....
• Proses netralisasi muatan permukaan timbal-balik: ....
• Dominansi gaya van der Waals pasca-netralisasi: ....

2. Pengaruh Rasio Pencampuran terhadap Potensial Zeta Netto:
• Kondisi isoelektrik (potensial zeta mendekati nol): ....
• Fenomena muatan balik akibat penambahan sol berlebih: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Praktikum Kimia Koloid SMA',
    tags: ['koagulasi-mutual', 'sol-positif-negatif', 'netralisasi-muatan', 'potensial-zeta'],
  },
  {
    id: 112015,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pengolahan Air Bersih PDAM Menggunakan Tawas',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Prinsip Kimia Koagulasi Air Keruh Menggunakan Koagulan Tawas Aluminium Sulfat',
    question_text: `Perusahaan Daerah Air Minum (PDAM) memanfaatkan senyawa tawas, aluminium sulfat $\\ce{Al2(SO4)3}$, dalam proses penjernihan air baku sungai yang keruh akibat lumpur koloidal tanah liat.

Selesaikan analisis tahapan penjernihan air ini:`,
    expected_final_answer: 'a) Reaksi hidrolisis: Al3+ + 3 H2O <=> Al(OH)3(s) + 3 H+ menghasilkan endapan gelatin putih; b) Ion Al3+ menetralkan muatan negatif partikel lumpur, dan gumpalan gelatin Al(OH)3 menjerat partikel kotoran menjadi flok besar yang cepat mengendap.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin): Menuliskan persamaan reaksi hidrolisis kation aluminium di dalam air: Al^3+(aq) + 3 H2O(l) <=> Al(OH)3(s) + 3 H+(aq) (atau reaksi lengkap molekuler dengan ion bikarbonat alami air: Al^3+ + 3 HCO3- -> Al(OH)3 + 3 CO2) yang menghasilkan endapan gelatinosa Al(OH)3.
- Sub-soal b (2.5 poin): Menjelaskan dua peran sinergis tawas: (1) Kation Al^3+ yang bervalensi tiga menetralkan muatan negatif partikel koloid lumpur tanah liat sesuai Aturan Schulze-Hardy, dan (2) Endapan gelatin Al(OH)3 bertindak sebagai jaring perangkap (*sweep flocculation*) yang menggabungkan partikel-partikel lumpur halus menjadi gumpalan flok makroskopis yang cepat mengendap ke dasar bak sedimentasi.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tuliskan persamaan reaksi kimia hidrolisis kation aluminium ($\\ce{Al^3+}$) di dalam air yang menghasilkan endapan gelatin koloidal!`,
        points: 2.5,
        rubric: 'Reaksi ionik: Al^3+(aq) + 3 H2O(l) <=> Al(OH)3(s) + 3 H+(aq) (2.5 poin).',
        expected_answer: 'Al^3+(aq) + 3 H2O(l) <=> Al(OH)3(s) + 3 H+(aq).',
      },
      {
        label: 'b',
        question_text: `Jelaskan dua peran ganda dari tawas dalam mengendapkan partikel kotoran lumpur yang bermuatan negatif di dalam air baku!`,
        points: 2.5,
        rubric: 'Peran 1: Kation Al^3+ bervalensi tinggi (+3) menetralkan muatan negatif partikel koloid lumpur sesuai Aturan Schulze-Hardy (1.25 poin). Peran 2: Gumpalan gelatin Al(OH)3 yang terbentuk menjerat partikel-partikel kotoran halus menjadi flok besar yang berat sehingga mengendap cepat karena gravitasi (1.25 poin).',
        expected_answer: 'Kation Al^3+ menetralkan muatan negatif lumpur, dan endapan gelatin Al(OH)3 menjerat partikel kotoran menjadi flok besar yang cepat mengendap.',
      },
    ],
    solution_framework_template: `1. Reaksi Kimia Hidrolisis Koagulan Tawas:
• Ionisasi garam aluminium sulfat: ....
• Reaksi hidrolisis pembentukan flok aluminium hidroksida: ....

2. Mekanisme Ganda Koagulasi dan Flokulasi Lumpur:
• Peran muatan kation Al3+ dalam netralisasi elektrostatik: ....
• Aksi penjeratan mekanik oleh endapan gelatin Al(OH)3 (sweep flocculation): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia Lingkungan SMA',
    tags: ['tawas', 'penjernihan-air', 'koagulasi-flokulasi', 'aluminium-hidroksida'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 112001 - 112025)
  // =========================================================================
  {
    id: 112016,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Teori Lapis Ganda Listrik (EDL) dan Potensial Zeta',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Struktur Lapis Ganda Listrik Model Stern-Gouy-Chapman dan Potensial Zeta',
    question_text: `Berdasarkan model modern Stern-Gouy-Chapman mengenai lapis ganda listrik (*Electrical Double Layer* / EDL) pada antarmuka partikel koloid:
Pernyataan berikut yang **paling tepat** mendeskripsikan lapisan Stern, lapisan difus, dan potensial zeta ($\\zeta$) adalah ....

A. Lapisan Stern tersusun atas ion-ion yang bergerak bebas secara acak, sedangkan lapisan difus terikat kaku pada permukaan partikel  
B. Potensial zeta ($\\zeta$) adalah potensial listrik yang diukur tepat pada permukaan padatan murni partikel koloid ($\\psi_0$)  
C. Lapisan Stern adalah lapisan ion lawan yang terikat kuat langsung pada permukaan partikel, sedangkan potensial zeta ($\\zeta$) adalah potensial elektrokinetik pada bidang geser (*slipping plane*) yang menentukan stabilitas koloid  
D. Koloid akan mengalami koagulasi cepat jika nilai absolut potensial zeta $|\\zeta| > 50\\text{ mV}$  
E. Penambahan elektrolit konsentrasi tinggi akan mempertebal lapisan difus sehingga menaikkan nilai potensial zeta`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Model Stern-Gouy-Chapman:**
   - **Lapisan Stern:** Lapisan monomolekular ion-ion lawan (*counter-ions*) yang teradsorpsi kuat secara elektrostatis langsung pada kisi permukaan partikel koloid. Lapisan ini kaku (*rigid*) dan bergerak bersama partikel.
   - **Lapisan Difus (Gouy-Chapman):** Lapisan ion lawan yang tersebar di luar lapisan Stern akibat pengaruh fluktuasi termal pelarut.
2. **Bidang Geser (*Slipping Plane*) dan Potensial Zeta ($\\zeta$):**
   - Saat partikel koloid bergerak di bawah pengaruh medan listrik atau gaya gerak, cairan medium di sekitarnya tergeser pada suatu batas hidrodinamika yang disebut bidang geser (*slipping plane*).
   - Potensial listrik tepat pada bidang geser ini terhadap larutan bebas disebut **Potensial Zeta ($\\zeta$)**.
3. **Kriteria Stabilitas Koloid:**
   - Jika $|\\zeta| > 30\\text{ mV}$, gaya tolak elektrostatik antarpartikel sangat kuat sehingga koloid stabil.
   - Jika $|\\zeta| < 15\\text{ mV}$, tolakan elektrostatik runtuh dan terjadi koagulasi cepat.
   - Penambahan elektrolit menekan ketebalan lapisan difus (*EDL compression*) sehingga **menurunkan** potensial zeta menuju nol, memicu koagulasi. (Pernyataan C benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi Kimia Fisika',
    tags: ['lapis-ganda-listrik', 'lapisan-stern', 'potensial-zeta', 'teori-edl'],
  },
  {
    id: 112017,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Rasio Eksponensial Teori DLVO Schulze-Hardy (CCC proporsional 1/z^6)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Formulasi Teori Kestabilan Koloid DLVO pada Konsentrasi Koagulasi Kritis',
    question_text: `Teori Deryagin-Landau-Verwey-Overbeek (DLVO) menjelaskan kestabilan koloid liofob berdasarkan keseimbangan antara gaya tarik van der Waals ($V_A$) dan gaya tolak elektrostatik lapis ganda listrik ($V_R$).
Pada potensial permukaan yang relatif tinggi, penurunan matematis teori DLVO membuktikan bahwa konsentrasi koagulasi kritis (*Critical Coagulation Concentration* / CCC) berbanding terbalik dengan valensi ion koagulan pangkat enam:
$$\\text{CCC} \\propto \\frac{1}{z^6}$$
Jika konsentrasi kritis ion natrium ($\\ce{Na+}$, $z = 1$) untuk mengendapkan suatu sol negatif adalah $50\\text{ mmol/L}$, maka estimasi konsentrasi kritis ion aluminium ($\\ce{Al^3+}$, $z = 3$) yang dibutuhkan untuk mengendapkan sol yang sama adalah sekitar ....

A. $16{,}7\\text{ mmol/L}$  
B. $5{,}55\\text{ mmol/L}$  
C. $0{,}69\\text{ mmol/L}$  
D. $0{,}069\\text{ mmol/L}$  
E. $0{,}0014\\text{ mmol/L}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Gunakan Relasi Pangkat Enam DLVO:**
   $$\\frac{\\text{CCC}(\\ce{Al^3+})}{\\text{CCC}(\\ce{Na+})} = \\frac{(z_{\\ce{Na+}})^{-6}}{(z_{\\ce{Al^3+}})^{-6}} = \\left( \\frac{z_{\\ce{Na+}}}{z_{\\ce{Al^3+}}} \\right)^6 = \\left( \\frac{1}{3} \\right)^6$$
2. **Kalkulasi Nilai Pangkat Enam:**
   $$3^6 = 729$$
   $$\\frac{\\text{CCC}(\\ce{Al^3+})}{\\text{CCC}(\\ce{Na+})} = \\frac{1}{729}$$
3. **Hitung Nilai Konsentrasi Kritis Ion Aluminium:**
   $$\\text{CCC}(\\ce{Al^3+}) = \\frac{50\\text{ mmol/L}}{729} \\approx 0{,}0686\\text{ mmol/L} \\approx 0{,}069\\text{ mmol/L}$$
4. **Kesimpulan:**
   Konsentrasi ion $\\ce{Al^3+}$ yang dibutuhkan sekitar 729 kali lebih encer ($0{,}069\\text{ mmol/L}$) dibandingkan ion $\\ce{Na+}$ ($50\\text{ mmol/L}$). (Pilihan D benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['teori-dlvo', 'konsentrasi-koagulasi-kritis', 'aturan-schulze-hardy', 'daya-koagulasi'],
  },
  {
    id: 112018,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Konsentrasi Misil Kritis (CMC) dan Termodinamika Miselisasi Surfaktan',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Perubahan Sifat Fisiko-Kimia Larutan Surfaktan pada Ambang Konsentrasi Misil Kritis',
    question_text: `Ketika konsentrasi suatu surfaktan anionik (seperti natrium dodesil sulfat / SDS) di dalam air ditingkatkan secara kontinu melintasi Konsentrasi Misil Kritis (*Critical Micelle Concentration* / CMC):
Perilaku fisiko-kimia larutan berikut yang **paling tepat** terjadi adalah ....

A. Tegangan permukaan larutan terus anjlok tajam secara drastis setelah melewati nilai CMC  
B. Konduktivitas molar larutan mengalami penurunan laju kenaikan (*patah kurva*) karena mobilitas misil bermuatan lebih lambat dan terikat oleh ion lawan (*counter-ion binding*)  
C. Pembentukan misil tidak disukai secara termodinamika karena perubahan entropi hidrofobik bernilai negatif  
D. Tekanan osmosis larutan melonjak puluhan kali lipat di atas CMC karena jumlah partikel terlarut bertambah secara eksponensial  
E. Surfaktan mengendap menjadi kristal padat makroskopis yang memisahkan diri dari air`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Perilaku Fisiko-Kimia di Sekitar Titik CMC:**
   - **Tegangan Permukaan ($\\gamma$):** Turun tajam saat konsentrasi surfaktan di bawah CMC karena molekul surfaktan terkonsentrasi di permukaan air. Namun begitu permukaan jenuh dan mencapai CMC, molekul berlebih membentuk misil di dalam badan cairan (*bulk*), sehingga tegangan permukaan menjadi **konstan/datar**. (Pernyataan A salah)
   - **Konduktivitas Molar:** Mengalami titik belok tajam (*kink*). Di atas CMC, sebagian besar kation lawan ($\\ce{Na+}$) terikat pada permukaan misil (*counter-ion condensation*), dan massa misil yang besar menyebabkan mobilitas ionik per muatan turun, sehingga kurva daya hantar listrik melambat drastis. (Pernyataan B benar)
   - **Termodinamika Miselisasi:** Penggabungan ekor hidrofobik ke dalam inti misil melepaskan molekul air yang sebelumnya terstruktur kaku (*iceberg water*), menghasilkan peningkatan entropi positif yang besar ($\\Delta S_{\\text{hidrofobik}} > 0$). Inilah gaya dorong termodinamika utama miselisasi. (Pernyataan C salah)
   - **Tekanan Osmosis:** Karena 50 - 100 monomer surfaktan bergabung menjadi 1 partikel misil tunggal, jumlah partikel bebas bertambah jauh lebih lambat, sehingga laju kenaikan tekanan osmosis menurun tajam di atas CMC. (Pernyataan D salah)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSN Tingkat Nasional Kimia Fisik',
    tags: ['cmc', 'misil-surfaktan', 'termodinamika-permukaan', 'konduktivitas-molar'],
  },
  {
    id: 112019,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Elektroforesis Gel Protein dan Titik Isoelektrik (pI)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Arah Migrasi Elektroforetik dan Kestabilan Koloid Protein pada Variasi pH',
    question_text: `Suatu protein globuler koloidal murni (seperti hemoglobin atau albumin serum sapi) memiliki titik isoelektrik $\\text{pI} = 4{,}90$.
Pernyataan yang **paling tepat** mengenai perilaku protein tersebut di dalam media penyangga elektroforesis adalah ....

A. Pada $\\text{pH} = 7{,}40$ (pH fisiologis), protein bermuatan positif dan bermigrasi menuju katoda  
B. Pada $\\text{pH} = 4{,}90$, molekul protein memiliki muatan bersih nol, kelarutan koloidalnya mencapai titik minimum, dan tidak bergerak di dalam medan listrik  
C. Pada $\\text{pH} = 3{,}00$, gugus karboksilat terionisasi menjadi $\\ce{-COO-}$ sehingga protein bermuatan negatif  
D. Penambahan asam kuat pada $\\text{pH} = 4{,}90$ akan menyebabkan partikel protein menggumpal permanen  
E. Protein bergerak paling cepat pada medan listrik ketika pH larutan tepat sama dengan nilai $\\text{pI}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Hakikat Titik Isoelektrik ($\\text{pI}$):**
   Titik isoelektrik adalah kondisi pH di mana jumlah muatan positif pada molekul protein (dari gugus amonium $\\ce{-NH3+}$) tepat sama dengan jumlah muatan negatif (dari gugus karboksilat $\\ce{-COO-}$), sehingga **muatan bersih molekul sama dengan nol** (*zwitterion*).
2. **Evaluasi Perilaku pada Variasi pH:**
   - **Pada $\\text{pH} = \\text{pI} = 4{,}90$:** Karena muatan bersih nol, tidak ada gaya tolak elektrostatik antarmolekul protein, gaya tarik hidrofobik dan van der Waals mendominasi sehingga **kelarutan koloid mencapai titik terendah (paling mudah mengendap/berkoagulasi)** dan protein **tidak bermigrasi** di medan listrik. (Pernyataan B benar, E salah)
   - **Pada $\\text{pH} > \\text{pI}$ (misal $\\text{pH} = 7{,}40$):** Lingkungan lebih basa dari $\\text{pI}$, protein melepaskan proton sehingga **bermuatan negatif $(-)$** dan bermigrasi menuju anoda (+). (Pernyataan A salah)
   - **Pada $\\text{pH} < \\text{pI}$ (misal $\\text{pH} = 3{,}00$):** Lingkungan sangat asam, gugus amina terprotonasi menjadi $\\ce{-NH3+}$ sedangkan karboksilat menjadi $\\ce{-COOH}$ netral, sehingga protein **bermuatan positif $(+)$** dan bermigrasi ke katoda (-). (Pernyataan C salah)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Kimia Bidang Biokimia',
    tags: ['titik-isoelektrik', 'elektroforesis-protein', 'muatan-bersih', 'zwitterion'],
  },
  {
    id: 112020,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hamburan Cahaya Rayleigh vs Hamburan Mie pada Nanokoloid',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Warna Merah Delima Sol Emas Nanokoloid dan Resonansi Plasmon Permukaan (SPR)',
    question_text: `Emas masif tampak berwarna kuning berkilau. Namun, bila emas dibuat menjadi partikel sol koloid dengan ukuran nanometer ($10 - 20\\text{ nm}$), larutan koloid tersebut memperlihatkan warna **merah delima jernih**. Jika partikel koloid emas tersebut dibiarkan beragregasi menjadi ukuran yang lebih besar ($> 80\\text{ nm}$), warna larutan berubah menjadi biru-keunguan.

Penyebab ilmiah perubahan warna spektakuler pada skala nanokoloid tersebut adalah ....

A. Oksidasi atom emas oleh air membentuk ion $\\ce{Au^3+}$ yang menyerap cahaya kuning  
B. Fenomena Resonansi Plasmon Permukaan (*Surface Plasmon Resonance* / SPR), di mana osilasi kolektif elektron konduksi pada permukaan nanopartikel beresonansi menyerap kuat cahaya hijau-biru ($\\lambda \\approx 520\\text{ nm}$) dan meneruskan cahaya merah  
C. Pembelahan orbital d pada kompleks emas oleh ligan molekul air  
D. Hamburan Rayleigh murni yang memancarkan seluruh sinar ultraviolet ke arah pengamat  
E. Peluruhan radioaktif isotop emas nanometer yang melepaskan partikel foton merah`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Fisika Kimia Nanopartikel Logam:**
   Pada partikel logam masif makroskopis, elektron konduksi bergerak bebas tanpa batasan spasial (*bulk plasma*), memantulkan hampir seluruh spektrum cahaya tampak sehingga tampak berkilau kuning khas emas.
2. **Resonansi Plasmon Permukaan (SPR):**
   Bila dimensi partikel emas diperkecil hingga seukuran panjang gelombang de Broglie elektron ($10 - 20\\text{ nm}$):
   - Awan elektron konduksi di permukaan nanopartikel mengalami osilasi koheren yang dipicu oleh medan listrik gelombang cahaya datang.
   - Frekuensi osilasi elektron ini **beresonansi sangat kuat dengan cahaya tampak pada daerah hijau ($\\lambda \\approx 520\\text{ nm}$)**.
   - Akibat penyerapan kuat foton hijau-biru tersebut, cahaya yang diteruskan (*transmitted*) dan dihamburkan ke mata pengamat didominasi oleh spektrum komplementernya, yaitu **warna merah delima cemerlang**.
3. **Pengaruh Ukuran Partikel:**
   Ketika partikel membesar atau beragregasi ($> 80\\text{ nm}$), frekuensi resonansi bergeser ke panjang gelombang yang lebih panjang (*red shift* ke inframerah dekat), menyebabkan penyerapan bergeser ke warna merah sehingga larutan tampak biru keunguan. (Pilihan B benar)`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Material',
    tags: ['nanopartikel-emas', 'spr', 'resonansi-plasmon', 'hamburan-cahaya'],
  },
  {
    id: 112021,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kimia Permukaan Nanokoloid: Luas Permukaan Spesifik dan Kapasitas Adsorpsi Monolayer',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Kalkulasi Ledakan Luas Permukaan Spesifik dan Kapasitas Adsorpsi Monolayer Nanokoloid Emas',
    question_text: `Sebuah kubus emas murni ($\\ce{Au}$) bermassa $19{,}3\\text{ gram}$ memiliki massa jenis $\\rho = 19{,}3\\text{ g/cm}^3$. Kubus tersebut mula-mula memiliki panjang rusuk $L_0 = 1{,}0\\text{ cm}$.
Melalui metode Busur Bredig, kubus emas tersebut didispersikan sempurna menjadi partikel-partikel koloid berbentuk kubus nanometer yang seragam dengan panjang rusuk $L = 10{,}0\\text{ nm}$ ($1{,}00 \\times 10^{-8}\\text{ m}$). Diketahui bilangan Avogadro $N_A = 6{,}022 \\times 10^{23}\\text{ partikel/mol}$.

Selesaikan perhitungan kimia permukaan berikut:`,
    expected_final_answer: 'a) Luas permukaan awal A0 = 6.0 x 10^-4 m^2, jumlah partikel koloid N = 1.0 x 10^18 partikel, luas total baru Atotal = 600 m^2 (rasio lonjakan 1.0 x 10^6 kali lipat); b) Kapasitas adsorpsi monolayer protein = 2.40 x 10^19 molekul = 3.99 x 10^-5 mol (39.9 mikromol).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin): Menghitung luas awal A0 = 6 x (0,01 m)^2 = 6,0 x 10^-4 m^2 (1.0 poin). Menghitung volume total V = 19,3 g / 19,3 g/cm^3 = 1,0 cm^3 = 1,0 x 10^-6 m^3 (1.0 poin). Menghitung volume satu partikel v = L^3 = (1,0 x 10^-8 m)^3 = 1,0 x 10^-24 m^3. Jumlah partikel N = V / v = 1,0 x 10^18 partikel (1.5 poin). Menghitung luas total Atotal = N x (6 x L^2) = 1,0 x 10^18 x (6,0 x 10^-16 m^2) = 600 m^2 (1.5 poin).
- Sub-soal b (5.0 poin): Diberikan luas tapak molekul protein sigma = 2,50 x 10^-17 m^2. Menghitung jumlah molekul maksimum pada monolayer: N_molekul = Atotal / sigma = 600 m^2 / (2,50 x 10^-17 m^2) = 2,40 x 10^19 molekul (2.5 poin). Menghitung mol protein: n = N_molekul / N_A = (2,40 x 10^19) / (6,022 x 10^23) = 3,985 x 10^-5 mol ≈ 3,99 x 10^-5 mol (39,9 mikromol) (2.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah luas permukaan mula-mula ($A_0$) kubus emas dalam $\\text{m}^2$, tentukan jumlah total partikel koloid ($N$) yang terbentuk, dan hitung luas permukaan total baru ($A_{\\text{total}}$) setelah menjadi partikel koloid!`,
        points: 5.0,
        rubric: 'A0 = 6 * (1,0 x 10^-2 m)^2 = 6,0 x 10^-4 m^2 (1.0 poin). V_total = 1,0 x 10^-6 m^3; V_partikel = (1,0 x 10^-8 m)^3 = 1,0 x 10^-24 m^3 (1.0 poin). N = 10^-6 / 10^-24 = 1,0 x 10^18 partikel (1.5 poin). A_total = N * 6 * L^2 = 1,0 x 10^18 * 6 * 1,0 x 10^-16 = 600 m^2 (1.5 poin). Lonjakan luas mencapai 1 juta kali lipat.',
        expected_answer: 'A0 = 6,0 x 10^-4 m^2; N = 1,0 x 10^18 partikel; Atotal = 600 m^2.',
      },
      {
        label: 'b',
        question_text: `Jika permukaan koloid emas tersebut mampu mengadsorpsi molekul protein sitokrom c dengan luas tapak per molekul $\\sigma = 2{,}50 \\times 10^{-17}\\text{ m}^2$, hitung jumlah molekul dan jumlah mol maksimum protein yang dapat teradsorpsi pada lapisan tunggal (*monolayer*) koloid emas tersebut!`,
        points: 5.0,
        rubric: 'N_molekul = A_total / sigma = 600 / (2,50 x 10^-17) = 2,40 x 10^19 molekul protein (2.5 poin). Mol protein = N_molekul / N_A = (2,40 x 10^19) / (6,022 x 10^23) = 3,985 x 10^-5 mol = 39,9 mikromol (2.5 poin).',
        expected_answer: 'Jumlah molekul = 2,40 x 10^19 molekul; Jumlah mol = 3,99 x 10^-5 mol (39,9 mikromol).',
      },
    ],
    solution_framework_template: `1. Kalkulasi Dispersi Geometris Skala Nanometer:
• Luas permukaan makroskopis kubus awal A0: ....
• Volume total dan volume satu unit kubus koloid: ....
• Jumlah partikel terdispersi N dan luas permukaan total Atotal: ....

2. Kimia Permukaan Adsorpsi Monolayer:
• Luas tapak molekular adsorbat protein: ....
• Kapasitas serapan jumlah molekul monolayer Langmuir: ....
• Konversi kuantitas zat ke satuan mol: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 9,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi Tim Olimpiade Kimia Indonesia (OSN)',
    tags: ['luas-permukaan-spesifik', 'nanokoloid', 'adsorpsi-monolayer', 'busur-bredig'],
  },
  {
    id: 112022,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pemodelan Kuantitatif Kestabilan Koloid Berbasis Kurva Energi Potensial DLVO',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kurva Energi Interaksi Total DLVO dan Barier Energi Koagulasi Koloid',
    question_text: `Teori DLVO menyatakan bahwa interaksi total antara dua partikel koloid yang saling mendekat ditentukan oleh penjumlahan dua gaya independen:
$$V_T = V_R + V_A$$
dengan $V_R$ adalah energi tolak elektrostatik lapis ganda listrik ($V_R > 0$) dan $V_A$ adalah energi tarik van der Waals ($V_A < 0$).

Selesaikan analisis kurva termodinamika kestabilan koloid berikut:`,
    expected_final_answer: 'a) Barier energi aktivasi Vmax mencegah partikel bertumbukan masuk ke sumur minimum primer, menjaga koloid stabil kinetik; b) Penambahan elektrolit menekan ketebalan lapis ganda listrik sehingga VR turun tajam, melenyapkan barier Vmax dan memicu koagulasi cepat.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin): Menjelaskan bahwa pada jarak pisah sedang, gaya tolak elektrostatik VR meluruh lebih lambat dibandingkan gaya tarik van der Waals VA (VA sebanding 1/H sedangkan VR meluruh eksponensial exp(-kappa H)). Hal ini menghasilkan puncak barier energi potensial maksimum (Vmax). Selama energi kinetik termal partikel (k_B T) jauh lebih kecil daripada Vmax (Vmax > 15 - 20 k_B T), partikel tidak mampu melompat masuk ke sumur minimum primer yang dalam, sehingga koloid tetap stabil secara kinetik.
- Sub-soal b (5.0 poin): Menjelaskan bahwa penambahan elektrolit meningkatkan kekuatan ionik dan memperbesar parameter Debye-Hückel (kappa), yang menyebabkan ketebalan lapis ganda listrik (1/kappa) menyusut drastis. Akibatnya, kurva gaya tolak VR anjlok tajam ke jarak yang sangat pendek. Puncak barier energi Vmax runtuh mendekati nol (atau menjadi negatif), sehingga partikel-partikel koloid dapat saling mendekat tanpa hambatan dan langsung terperangkap di sumur minimum primer, memicu koagulasi cepat (*rapid coagulation*).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan asal-usul terbentuknya barier energi potensial maksimum ($V_{\\max}$) pada kurva interaksi DLVO dan peran krusialnya dalam menjaga kestabilan kinetik sistem koloid!`,
        points: 5.0,
        rubric: 'Gaya tolak lapis ganda VR meluruh eksponensial sedangkan gaya tarik van der Waals VA meluruh sebagai fungsi pangkat jarak (2.0 poin). Penjumlahan kurva menghasilkan puncak barier energi Vmax pada jarak intermediat (1.5 poin). Barier Vmax bertindak sebagai barier aktivasi yang mencegah partikel saling menempel masuk ke sumur primer; jika Vmax > 15-20 k_B T, partikel tolak-menolak dan koloid stabil (1.5 poin).',
        expected_answer: 'Puncak Vmax adalah barier energi aktivasi tolakan elektrostatik yang mencegah partikel koloid saling mendekat dan jatuh ke sumur tarik van der Waals.',
      },
      {
        label: 'b',
        question_text: `Jelaskan secara teoritis mengapa penambahan elektrolit atau peningkatan valensi ion koagulan menyebabkan barier energi ($V_{\\max}$) runtuh dan memicu terjadinya koagulasi cepat!`,
        points: 5.0,
        rubric: 'Peningkatan konsentrasi elektrolit/valensi ion meningkatkan kekuatan ionik larutan (1.5 poin). Parameter skrining Debye kappa meningkat sehingga ketebalan lapis ganda 1/kappa memendek secara drastis (kompresi EDL) (1.5 poin). Gaya tolak VR meredup sangat cepat terhadap jarak pisah, menyebabkan puncak barier Vmax lenyap sehingga gaya tarik van der Waals mendominasi pada seluruh jarak pisah dan memicu koagulasi instan (2.0 poin).',
        expected_answer: 'Elektrolit mengkompresi lapis ganda listrik sehingga gaya tolak VR lenyap, meruntuhkan barier Vmax dan memicu koagulasi cepat oleh gaya van der Waals.',
      },
    ],
    solution_framework_template: `1. Dekomposisi Kurva Energi Interaksi DLVO:
• Karakteristik peluruhan gaya tolak elektrostatik lapis ganda VR: ....
• Karakteristik gaya tarik van der Waals antarpartikel VA: ....
• Pembentukan puncak barier energi Vmax terhadap fluktuasi termal k_B T: ....

2. Efek Kompresi Lapis Ganda oleh Elektrolit:
• Pengaruh kekuatan ionik pada parameter skrining Debye (kappa): ....
• Fenomena penyusutan ketebalan lapis ganda listrik (EDL compression): ....
• Keruntuhan barier Vmax dan transisi menuju koagulasi cepat: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['teori-dlvo', 'barier-energi', 'kestabilan-kinetik', 'kompresi-edl'],
  },
  {
    id: 112023,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penentuan Massa Molar Koloid Polimer Melalui Tekanan Osmosis (Metode Van \'t Hoff Koloidal)',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Massa Molar Rata-rata Polimer Koloidal Menggunakan Osmometri Membran',
    question_text: `Tekanan osmosis ($\\Pi$) merupakan sifat koligatif yang paling sensitif untuk menentukan massa molar makromolekul koloid polimer karena molekul koloid memiliki massa molar raksasa sehingga penurunan titik beku atau kenaikan titik didihnya teramat kecil untuk diukur secara presisi.
Persamaan Van 't Hoff tereduksi untuk larutan koloid nyata dinyatakan dalam bentuk virial:
$$\\frac{\\Pi}{C} = \\frac{R T}{M_n} + B C$$
dengan $C$ adalah konsentrasi massa polimer (dalam $\\text{g/L}$), $\\Pi$ tekanan osmosis (dalam $\\text{atm}$), $R = 0{,}08206\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$, $T$ temperatur absolut, $M_n$ massa molar rata-rata jumlah, dan $B$ koefisien virial kedua.

Pada suhu $27^\\circ\\text{C}$ ($300\\text{ K}$), data osmometri larutan suatu polimer sintetis diukur dan diperoleh persamaan garis regresi linier:
$$\\frac{\\Pi}{C} = 4{,}103 \\times 10^{-4} + 1{,}20 \\times 10^{-5} C \\quad (\\text{satuan } \\Pi/C \\text{ dalam atm}\\cdot\\text{L}/\\text{g})$$

Selesaikan analisis makromolekul ini:`,
    expected_final_answer: 'a) Intersep garis pada C -> 0 adalah RT / Mn = 4.103 x 10^-4 atm*L/g; b) Massa molar rata-rata polimer Mn = 60.000 g/mol (60 kDa).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (4.0 poin): Menjelaskan bahwa intersep garis regresi linier pada saat konsentrasi diekstrapolasi menuju nol (C -> 0) mewakili keadaan larutan ideal tanpa interaksi antar-rantai polimer: limit(Pi / C) = RT / Mn. Nilai intersep = 4,103 x 10^-4 atm*L/g.
- Sub-soal b (6.0 poin): Menghitung massa molar rata-rata jumlah Mn: Mn = RT / (intersep) = (0,08206 L*atm/(mol*K) x 300 K) / (4,103 x 10^-4 atm*L/g) = 24,618 / (4,103 x 10^-4) = 60.000 g/mol (atau 60 kg/mol = 60 kDa). Menjelaskan mengapa metode osmometri menghasilkan nilai rata-rata jumlah Mn.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan makna fisis dari nilai intersep kurva linier $\\frac{\\Pi}{C}$ terhadap $C$ ketika konsentrasi diekstrapolasikan menuju nol ($C \\to 0$), serta sebutkan nilai intersepnya dari persamaan regresi tersebut!`,
        points: 4.0,
        rubric: 'Pada ekstrapolasi C -> 0, efek interaksi intermolekuler antar rantai polimer (koefisien virial B) tereliminasi sehingga larutan berperilaku ideal mematuhi hukum Van t Hoff murni (2.5 poin). Intersep mewakili nilai RT / Mn = 4,103 x 10^-4 atm*L/g (1.5 poin).',
        expected_answer: 'Intersep pada C -> 0 mewakili kondisi larutan ideal RT / Mn = 4,103 x 10^-4 atm*L/g.',
      },
      {
        label: 'b',
        question_text: `Hitunglah nilai massa molar rata-rata jumlah ($M_n$) dari makromolekul polimer koloidal tersebut (dalam satuan $\\text{g/mol}$ atau $\\text{kDa}$)!`,
        points: 6.0,
        rubric: 'RT = 0,08206 * 300 = 24,618 L*atm/mol (2.0 poin). Mn = RT / Intersep = 24,618 / (4,103 x 10^-4) (2.5 poin). Mn = 60.000 g/mol = 60 kDa (1.5 poin).',
        expected_answer: 'Massa molar rata-rata jumlah Mn = 60.000 g/mol (atau 60 kDa).',
      },
    ],
    solution_framework_template: `1. Landasan Termodinamika Virial Osmometri:
• Persamaan Van 't Hoff tereduksi untuk larutan polimer: ....
• Makna fisis ekstrapolasi konsentrasi nol (C -> 0): ....
• Penentuan nilai numerik intersep ideal: ....

2. Kalkulasi Massa Molar Makromolekul Koloid:
• Evaluasi produk gas konstan temperatur (RT): ....
• Pembagian RT dengan intersep kurva: ....
• Nilai massa molar rata-rata polimer (g/mol): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Makromolekul',
    tags: ['osmometri', 'massa-molar-polimer', 'tekanan-osmosis', 'koloid-makromolekul'],
  },
  {
    id: 112024,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Termodinamika Pembentukan Misil Surfaktan dan Perhitungan CMC',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kuantitatif Konsentrasi Misil dan Energi Bebas Miselisasi Natrium Dodesil Sulfat',
    question_text: `Natrium dodesil sulfat ($\\ce{CH3(CH2)11SO4Na}$ / SDS, $M_r = 288{,}4\\text{ g/mol}$) adalah surfaktan anionik standar yang memiliki Konsentrasi Misil Kritis $\\text{CMC} = 8{,}20 \\times 10^{-3}\\text{ M}$ pada suhu $25^\\circ\\text{C}$ ($298\\text{ K}$).
Di atas CMC, kelebihan monomer surfaktan berasosiasi membentuk misil bola nano dengan bilangan agregasi rata-rata $N_{\\text{agg}} = 62$ (setiap satu partikel misil tersusun atas 62 monomer SDS).
Diketahui:
- $R = 8{,}314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
- Fraksi mol surfaktan pada CMC di air murni: $X_{\\text{CMC}} = \\frac{\\text{CMC}}{55{,}5\\text{ M}} = \\frac{8{,}20 \\times 10^{-3}}{55{,}5} = 1{,}477 \\times 10^{-4}$
- Energi bebas Gibbs standar miselisasi per mol monomer dihitung dengan pendekatan model pemisahan fasa: $\\Delta G^\\circ_{\\text{mic}} = R T \\ln X_{\\text{CMC}}$

Selesaikan evaluasi larutan SDS $0{,}0500\\text{ M}$:`,
    expected_final_answer: 'a) Konsentrasi misil = 6.74 x 10^-4 M; b) Delta G_mic = -21.86 kJ/mol (spontan karena entropi hidrofobik positif).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin): Menentukan konsentrasi monomer bebas yang tetap konstan pada nilai CMC = 8,20 x 10^-3 M = 0,0082 M (1.5 poin). Menghitung konsentrasi surfaktan yang berada dalam wujud teragregasi misil: C_miselisasi = C_total - CMC = 0,0500 M - 0,0082 M = 0,0418 M (1.5 poin). Menghitung konsentrasi partikel misil dengan membagi bilangan agregasi N_agg: [Misil] = C_miselisasi / N_agg = 0,0418 M / 62 = 6,742 x 10^-4 M (2.0 poin).
- Sub-soal b (5.0 poin): Menghitung ln(X_CMC): ln(1,477 x 10^-4) = -8,8205 (1.5 poin). Menghitung Delta G_mic = RT ln(X_CMC) = 8,314 J/(mol*K) x 298 K x (-8,8205) = -21.855 J/mol = -21,86 kJ/mol (2.5 poin). Menjelaskan bahwa nilai negatif menunjukkan pembentukan misil berlangsung secara spontan yang didorong oleh efek hidrofobik (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah konsentrasi molar partikel misil ($[\\text{Misil}]$) yang terbentuk di dalam larutan SDS $0{,}0500\\text{ M}$ tersebut pada suhu $25^\\circ\\text{C}$!`,
        points: 5.0,
        rubric: 'Monomer bebas = CMC = 0,0082 M (1.5 poin). Konsentrasi surfaktan dalam misil = 0,0500 - 0,0082 = 0,0418 M (1.5 poin). [Misil] = 0,0418 M / 62 = 6,742 x 10^-4 M (2.0 poin).',
        expected_answer: 'Konsentrasi misil = 6,74 x 10^-4 M.',
      },
      {
        label: 'b',
        question_text: `Hitunglah perubahan energi bebas Gibbs standar pembentukan misil ($\\Delta G^\\circ_{\\text{mic}}$) per mol monomer SDS dalam satuan $\\text{kJ/mol}$, serta jelaskan gaya dorong termodinamika utamanya!`,
        points: 5.0,
        rubric: 'ln(X_CMC) = ln(1,477 x 10^-4) = -8,8205 (1.5 poin). Delta G_mic = 8,314 * 298 * (-8,8205) = -21.855 J/mol = -21,86 kJ/mol (2.5 poin). Tanda negatif menunjukkan proses spontan, didorong oleh pelepasan molekul air terstruktur di sekitar ekor hidrofobik yang menghasilkan peningkatan entropi positif yang besar (efek hidrofobik) (1.0 poin).',
        expected_answer: 'Delta G_mic = -21,86 kJ/mol; proses berlangsung spontan didorong oleh peningkatan entropi efek hidrofobik.',
      },
    ],
    solution_framework_template: `1. Neraca Konsentrasi Monomer Bebas vs Misel:
• Konsentrasi monomer surfaktan bebas (CMC): ....
• Konsentrasi surfaktan teragregasi dalam fasa misil: ....
• Pembagian dengan bilangan agregasi N_agg dan konsentrasi misil: ....

2. Evaluasi Termodinamika Energi Bebas Gibbs:
• Fraksi mol surfaktan pada ambang batas CMC: ....
• Kalkulasi Delta G_mic = RT ln(X_CMC): ....
• Rasionalisasi gaya dorong efek hidrofobik: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik Permukaan',
    tags: ['miselisasi', 'cmc', 'termodinamika-surfaktan', 'energi-bebas-gibbs'],
  },
  {
    id: 112025,
    sma_topic_number: 12,
    sma_topic_id: 112,
    curriculum: 'sma',
    grade: 'Kelas 11',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pemodelan Rekayasa Elektrostatik Alat Pengendap Cottrell Industri',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Prinsip Elektroforesis Industri Alat Pengendap Asap dan Debu Cottrell',
    question_text: `Pabrik peleburan logam dan pembangkit listrik batubara menghasilkan gas buang cerobong yang sarat partikel aerosol padat (debu dan jelaga karbon berbahaya). Untuk mencegah polusi udara, dipasang alat pengendap elektrostatik Cottrell (*Cottrell electrostatic precipitator*).
Di dalam alat Cottrell terpasang kawat logam tipis bertegangan tinggi (katoda, $-50\\text{ kV}$) yang dipasang konsentris di tengah pipa logam silinder pembumian (*grounded anode*, $0\\text{ V}$).

Analisis prinsip rekayasa elektroforesis industri ini:`,
    expected_final_answer: 'a) Efek korona mengionisasi molekul gas menjadi elektron yang menempel pada partikel debu aerosol sehingga bermuatan negatif kuat, lalu partikel ditarik medan listrik ke dinding silinder anoda dan dinetralkan; b) Efisiensi penangkapan Deutsch-Anderson eta = 1 - exp(-w*A / Q), perhitungan efisiensi pembersihan asap mencapai > 99%.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin): Menjelaskan mekanisme fisik dalam alat Cottrell:
  1. Tegangan tinggi negatif (-50 kV) pada kawat tengah memicu lonjakan medan listrik kuat yang mengionisasi udara di sekitarnya membentuk lucutan korona (*corona discharge*).
  2. Elektron dan ion gas negatif yang dihasilkan bertumbukan dengan partikel debu aerosol padat yang melewatinya, sehingga partikel debu teradsorpsi elektron dan menjadi bermuatan negatif kuat.
  3. Di bawah medan listrik radial yang kuat, partikel debu bermuatan negatif ini mengalami elektroforesis menuju dinding pipa silinder yang bertindak sebagai anoda (kutub positif relatif).
  4. Sesampainya di dinding anoda, partikel debu melepaskan muatannya (dinetralkan), kehilangan gaya tolak, menggumpal (koagulasi), dan jatuh ke penampung abu di dasar alat karena gravitasi.
- Sub-soal b (5.0 poin): Berdasarkan persamaan efisiensi Deutsch-Anderson: eta = 1 - exp(-w * A / Q), dengan w adalah kecepatan hanyut partikel (drift velocity), A luas pelat pengumpul, dan Q laju alir volumetrik gas buang cerobong (2.5 poin). Menghitung efisiensi jika w = 0,10 m/s, A = 1000 m^2, dan Q = 20 m^3/s: rasio = (0,10 x 1000) / 20 = 100 / 20 = 5,0. Efisiensi penangkapan: eta = 1 - exp(-5,0) = 1 - 0,0067 = 0,9933 (99,33%) (2.5 poin). Menyimpulkan bahwa lebih dari 99% polutan aerosol padat berhasil disaring dari udara buangan cerobong pabrik.`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Jelaskan secara runtut tahapan fisiko-kimia pembersihan asap pada alat pengendap Cottrell, mulai dari efek lucutan korona kawat tegangan tinggi, penyerapan muatan oleh partikel aerosol, migrasi elektroforesis, hingga koagulasi di dinding pengumpul!`,
        points: 5.0,
        rubric: 'Tahap 1: Tegangan tinggi negatif kawat memicu efek lucutan korona yang mengionisasi molekul udara menghasilkan elektron dan ion gas negatif (1.5 poin). Tahap 2: Elektron menempel pada partikel debu aerosol sehingga debu bermuatan negatif kuat (1.0 poin). Tahap 3: Medan listrik radial mendorong partikel debu negatif bermigrasi elektroforesis menuju dinding silinder pembumian bermuatan positif (1.5 poin). Tahap 4: Di dinding anoda partikel dinetralkan, mengalami koagulasi menjadi gumpalan berat, dan jatuh ke wadah penampung (1.0 poin).',
        expected_answer: 'Lucutan korona menghasilkan ion negatif yang mengadsorpsi pada partikel debu, debu bermigrasi elektroforesis ke dinding anoda positif, dinetralkan, lalu menggumpal dan jatuh.',
      },
      {
        label: 'b',
        question_text: `Diberikan persamaan efisiensi penangkapan partikel Deutsch-Anderson: $\\eta = 1 - e^{-\\frac{w \\cdot A}{Q}}$, dengan $w$ kecepatan hanyut elektroforesis partikel ($0{,}10\\text{ m/s}$), $A$ luas permukaan pelat pengumpul ($1000\\text{ m}^2$), dan $Q$ laju alir volumetrik gas cerobong ($20{,}0\\text{ m}^3\\text{/s}$). Hitung persentase efisiensi penangkapan polutan ($\\eta$) dari cerobong pabrik tersebut ($e^{-5} \\approx 0{,}0067$)!`,
        points: 5.0,
        rubric: 'Eksponen = (w * A) / Q = (0,10 m/s * 1000 m^2) / 20,0 m^3/s = 100 / 20,0 = 5,0 (2.0 poin). eta = 1 - exp(-5,0) = 1 - 0,0067 = 0,9933 (2.0 poin). Persentase efisiensi = 0,9933 * 100% = 99,33% (1.0 poin).',
        expected_answer: 'Efisiensi penangkapan partikel polutan eta = 99,33%.',
      },
    ],
    solution_framework_template: `1. Runtutan Fenomena Elektrokinetik Alat Cottrell:
• Lucutan korona dan ionisasi molekul gas buang: ....
• Akuisisi muatan oleh partikel aerosol padat debu/jelaga: ....
• Gaya gerak medan listrik dan migrasi elektroforesis: ....
• Netralisasi muatan permukaan dan koagulasi gravitasi: ....

2. Evaluasi Kuantitatif Efisiensi Penangkapan Partikel (Deutsch-Anderson):
• Perhitungan eksponen dimensi hidro-elektrokinetik (w*A / Q): ....
• Kalkulasi fraksi penetrasi partikel lolos e^(-x): ....
• Penentuan persentase efisiensi filtrasi cerobong pabrik: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Terapan & Lingkungan',
    tags: ['alat-cottrell', 'elektroforesis-industri', 'deutsch-anderson', 'aerosol-padat'],
  },
];
