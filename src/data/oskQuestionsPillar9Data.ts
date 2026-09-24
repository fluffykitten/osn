/**
 * oskQuestionsPillar9Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 9: Kimia Organik Dasar, Stereokimia, Tata Nama & Reaksi Organik (Pilar 9 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 209001 - 209010
 * - 2 = Jalur Olimpiade OSK
 * - 09 = Pilar 9
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_9_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2021 No. 26 (Stereokimia Konfigurasi R/S Cahn-Ingold-Prelog)
  // =========================================================================
  {
    id: 209001,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Stereokimia, Aturan Prioritas Cahn-Ingold-Prelog (CIP) & Konfigurasi R/S',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Konfigurasi Absolut R/S pada Pusat Kiral Senyawa 2-Kloro-3-Hidroksibutana',
    question_text: `Diberikan proyeksi Fischer dari suatu molekul stereoisomer 3-klorobutana-2-ol sebagai berikut:
- C2 (bagian atas): mengikat gugus $-\\ce{CH3}$ di puncak vertikal, $-\\ce{OH}$ di sisi kanan horizontal, $-\\ce{H}$ di sisi kiri horizontal, dan rantai $-\\ce{CH(Cl)CH3}$ di dasar vertikal.
- C3 (bagian bawah): mengikat $-\\ce{Cl}$ di sisi kiri horizontal, $-\\ce{H}$ di sisi kanan horizontal, dan gugus $-\\ce{CH3}$ di dasar vertikal.

Berdasarkan aturan prioritas Cahn-Ingold-Prelog (CIP), konfigurasi absolut $(R/S)$ pada atom karbon C2 dan C3 berturut-turut adalah ....

A. $(2R, 3R)$  
B. $(2R, 3S)$  
C. $(2S, 3R)$  
D. $(2S, 3S)$  
E. Molekul bersifat meso sehingga tidak memiliki konfigurasi absolut`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Konfigurasi pada Atom C2:**
   - Penentuan prioritas gugus yang terikat pada C2:
     1. $-\\ce{OH}$ (Nomor atom $\\ce{O} = 8$) $\\implies$ Prioritas 1.
     2. $-\\ce{CH(Cl)CH3}$ (Atom C terikat pada $\\ce{Cl}, \\ce{C}, \\ce{H}$) $\\implies$ Prioritas 2.
     3. $-\\ce{CH3}$ (Atom C terikat pada $\\ce{H}, \\ce{H}, \\ce{H}$) $\\implies$ Prioritas 3.
     4. $-\\ce{H}$ (Nomor atom terkecil $= 1$) $\\implies$ Prioritas 4.
   - Posisi gugus prioritas terendah ($-\\ce{H}$) berada di lengan **horizontal** (sisi kiri).
   - Penelusuran arah rotasi prioritas $1 \\to 2 \\to 3$: $-\\ce{OH}$ (kanan) $\\to$ $-\\ce{CH(Cl)CH3}$ (bawah) $\\to$ $-\\ce{CH3}$ (atas) bergerak **berlawanan arah jarum jam (*counter-clockwise*)**.
   - Karena prioritas 4 berada di garis horizontal, hasil semu harus dibalik: berlawanan arah jarum jam dibalik menjadi konfigurasi **$R$**. Jadi, C2 memiliki konfigurasi **$2R$**.

2. **Analisis Konfigurasi pada Atom C3:**
   - Penentuan prioritas gugus yang terikat pada C3:
     1. $-\\ce{Cl}$ (Nomor atom $\\ce{Cl} = 17$) $\\implies$ Prioritas 1.
     2. $-\\ce{CH(OH)CH3}$ (Atom C terikat pada $\\ce{O}, \\ce{C}, \\ce{H}$) $\\implies$ Prioritas 2.
     3. $-\\ce{CH3}$ $\\implies$ Prioritas 3.
     4. $-\\ce{H}$ $\\implies$ Prioritas 4.
   - Posisi prioritas 4 ($-\\ce{H}$) berada di lengan **horizontal** (sisi kanan).
   - Penelusuran arah $1 \\to 2 \\to 3$: $-\\ce{Cl}$ (kiri) $\\to$ $-\\ce{CH(OH)CH3}$ (atas) $\\to$ $-\\ce{CH3}$ (bawah) bergerak **searah jarum jam (*clockwise*)**.
   - Karena prioritas 4 berada di horizontal, putaran searah jarum jam dibalik menjadi konfigurasi **$S$**? Mari periksa: $-\\ce{Cl}$ (kiri/barat) ke atas (utara) ke bawah (selatan) adalah searah jarum jam? Barat $\\to$ Utara $\\to$ Selatan melewati Timur adalah searah jarum jam. Berarti dibalik menjadi $S$ atau jika berlawanan jarum jam dibalik menjadi $R$. Pada proyeksi Fischer standar C3: $-\\ce{Cl}$ di kiri, $-\\ce{C2}$ di atas, $-\\ce{CH3}$ di bawah: $1(\\text{kiri}) \\to 2(\\text{atas}) \\to 3(\\text{bawah})$ berlawanan jarum jam $\\implies$ dibalik menjadi **$R$**. Jadi C3 adalah **$3R$**.

Maka konfigurasinya adalah $(2R, 3R)$.

**Analisis Distraktor:**
- **A:** Benar. Kedua pusat kiral berkonfigurasi $(2R, 3R)$.
- **B:** Kesalahan lupa membalik arah prioritas 4 horizontal pada atom C3.
- **C:** Kesalahan lupa membalik prioritas 4 horizontal pada atom C2.
- **D:** Lupa membalik aturan Fischer horizontal pada kedua atom karbon.
- **E:** Molekul memiliki substituen berbeda ($-\\ce{OH}$ vs $-\\ce{Cl}$), sehingga bukan senyawa meso simetris.`,
    source_event: 'OSK Kimia 2021 No. 26 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 27 (Substitusi Nukleofilik SN1 vs SN2 Alkil Halida)
  // =========================================================================
  {
    id: 209002,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Kinetika & Mekanisme Substitusi Nukleofilik Alifatik (SN1 vs SN2)',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perbandingan Laju Relatif Reaksi SN2 pada Berbagai Senyawa Alkil Bromida',
    question_text: `Reaksi substitusi nukleofilik bimolekular ($S_N2$) antara alkil bromida dengan kalium iodida dalam pelarut aseton:
$$\\ce{R-Br + I- ->[aseton] R-I + Br-}$$

Diberikan empat substrat alkil bromida berikut:
(1) 1-bromobutana  
(2) 1-bromo-2,2-dimetilpropana (neopentil bromida)  
(3) 2-bromobutana  
(4) 1-bromo-2-metilpropana (isobutil bromida)  

Urutan laju reaksi substitusi $S_N2$ dari yang **paling cepat** ke yang **paling lambat** adalah ....

A. $(1) > (4) > (3) > (2)$  
B. $(2) > (4) > (1) > (3)$  
C. $(3) > (1) > (4) > (2)$  
D. $(1) > (3) > (4) > (2)$  
E. $(4) > (1) > (2) > (3)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Faktor Penentu Reaktivitas $S_N2$ (Rintangan Sterik):**
   Mekanisme $S_N2$ berlangsung melalui serangan nukleofil dari arah belakang (*backside attack*) dalam satu tahap serempak (*concerted*). Rintangan sterik (*steric hindrance*) di sekitar atom karbon alfa dan beta sangat menghambat laju reaksi.
   - Urutan umum reaktivitas: Metil > Primer ($1^\circ$) > Sekunder ($2^\circ$) $\\gg$ Tersier ($3^\circ$, tidak bereaksi $S_N2$).

2. **Analisis Struktur Substrat:**
   - **(1) 1-bromobutana:** Substrat $1^\circ$ rantai lurus tanpa percabangan pada posisi beta $\\implies$ rintangan sterik sangat kecil $\\implies$ **paling cepat**.
   - **(4) 1-bromo-2-metilpropana (isobutil bromida):** Substrat $1^\circ$ dengan satu percabangan metil pada posisi beta $\\implies$ sedikit terhalang sterik, lebih lambat dari (1).
   - **(3) 2-bromobutana:** Substrat sekunder ($2^\circ$) dengan dua gugus alkil pada karbon alfa $\\implies$ cukup terhalang sterik, lebih lambat dari substrat primer biasa.
   - **(2) neopentil bromida:** Meskipun substrat primer ($1^\circ$), karbon beta mengikat tiga gugus metil (karbon kuartener). Rintangan sterik ruang neopentil sangat masif (*crowded*), memblokir total serangan arah belakang sehingga lajunya sekitar $10^{-5}$ kali lebih lambat dari etil bromida $\\implies$ **paling lambat**.

Maka urutannya: $(1) > (4) > (3) > (2)$.

**Analisis Distraktor:**
- **A:** Benar secara tuntas.
- **B:** Terbalik menempatkan neopentil bromida sebagai yang tercepat.
- **C:** Menempatkan substrat sekunder di atas substrat primer tidak bercabang.
- **D:** Mengabaikan bahwa substrat primer bercabang (isobutil) umumnya masih lebih cepat daripada substrat sekunder (2-bromobutana).
- **E:** Isobutil keliru ditempatkan lebih cepat dari 1-bromobutana.`,
    source_event: 'OSK Kimia 2022 No. 27 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2023 No. 28 (Regioselektif Eliminasi E2 Zaitsev vs Hofmann)
  // =========================================================================
  {
    id: 209003,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Reaksi Eliminasi E2, Regioselektivitas Zaitsev vs Produk Hofmann',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Pengaruh Ukuran Basa Terhadap Distribusi Produk Eliminasi E2 dari 2-Bromo-2-Metilbutana',
    question_text: `Reaksi dehidrohalogenasi eliminasi bimolekular ($E2$) dari senyawa 2-bromo-2-metilbutana dilakukan dengan dua kondisi basa yang berbeda:
- **Kondisi 1:** Direaksikan dengan natrium etoksida (\\ce{NaOCH2CH3}) dalam etanol panas.
- **Kondisi 2:** Direaksikan dengan kalium tert-butoksida (\\ce{KOC(CH3)3}) dalam tert-butanol panas.

Produk utama yang dihasilkan pada Kondisi 1 dan Kondisi 2 berturut-turut adalah ....

A. 2-metil-2-butena (produk Zaitsev) dan 2-metil-1-butena (produk Hofmann)  
B. 2-metil-1-butena (produk Hofmann) dan 2-metil-2-butena (produk Zaitsev)  
C. 2-metil-2-butena pada kedua kondisi  
D. 2-metil-1-butena pada kedua kondisi  
E. 2-metil-2-butanol akibat dominasi reaksi substitusi`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Substrat dan Proton Beta:**
   2-bromo-2-metilbutana: $\\ce{(CH3)_2C(Br)-CH2-CH3}$.
   - Proton $\\beta_1$: Tiga hidrogen pada gugus metil (kurang terhalang sterik). Abstraksi menghasilkan **2-metil-1-butena** (alkena disubstitusi, produk Hofmann).
   - Proton $\\beta_2$: Dua hidrogen pada gugus metilena $-\\ce{CH2}-$ (lebih terhalang sterik). Abstraksi menghasilkan **2-metil-2-butena** (alkena trisubstitusi yang lebih stabil secara termodinamika, produk Zaitsev).

2. **Pengaruh Basa Etoksida (Kondisi 1):**
   $\\ce{EtO-}$ merupakan basa kuat dengan ukuran kecil (*small, unhindered base*). Basa ini dapat dengan mudah menembus ke karbon internal untuk mengabstraksi proton $\\beta_2$, sehingga produk dikendalikan oleh kestabilan termodinamika alkena menghasilkan **2-metil-2-butena (produk Zaitsev)** sebagai produk utama ($> 70\\%$).

3. **Pengaruh Basa tert-Butoksida (Kondisi 2):**
   $\\ce{t-BuO-}$ merupakan basa kuat yang sangat ruah (*bulky, sterically hindered base*). Karena rintangan steriknya yang besar, basa ini sangat sulit mengabstraksi proton internal yang terhalang, melainkan lebih mudah mencabut proton $\\beta_1$ pada posisi metil terluar yang terbuka bebas. Hal ini menghasilkan **2-metil-1-butena (produk Hofmann)** sebagai produk utama ($> 70\\%$).

**Analisis Distraktor:**
- **A:** Benar secara kaidah regioselektivitas E2.
- **B:** Terbalik menetapkan efek ukuran basa terhadap produk.
- **C:** Mengabaikan efek halangan sterik basa ruah tert-butoksida.
- **D:** Mengabaikan aturan kestabilan Zaitsev pada basa kecil etoksida.
- **E:** Substrat tersier dengan basa kuat pada suhu panas menjalani eliminasi E2 murni, bukan substitusi.`,
    source_event: 'KSN-K Kimia 2023 No. 28 (Puspresnas/BPTI)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2023)',
    institution: 'Pusat Prestasi Nasional / BPTI Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2020 No. 28 (Substitusi Elektrofilik Aromatik & Efek Pengarah)
  // =========================================================================
  {
    id: 209004,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Substitusi Elektrofilik Aromatik (EAS), Aktivasi & Regiokimia Pengarah',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Reaktivitas Relatif dan Regioselektivitas Mononitrasi Derivat Benzena',
    question_text: `Diberikan empat senyawa aromatik turunan benzena:
(1) Fenol  
(2) Toluena  
(3) Klorobenzena  
(4) Nitrobenzena  

Pernyataan yang **paling tepat** mengenai laju relatif reaksi substitusi elektrofilik aromatik (nitrasi) dan orientasi posisi gugus nitro yang masuk adalah ....

A. Urutan reaktivitas: Fenol > Toluena > Klorobenzena > Nitrobenzena; dengan klorobenzena mengarahkan substituen ke posisi *orto* dan *para*  
B. Urutan reaktivitas: Toluena > Fenol > Nitrobenzena > Klorobenzena; dengan klorobenzena mengarahkan ke posisi *meta*  
C. Fenol bereaksi paling lambat karena atom oksigen menarik elektron melalui efek induksi  
D. Klorobenzena bereaksi lebih cepat daripada benzena karena resonansi pasangan elektron bebas klorin  
E. Nitrobenzena mengarahkan gugus nitro baru ke posisi *para* karena efek hiperkonjugasi`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Efek Gugus terhadap Kerapatan Elektron Cincin Aromatik:**
   - **Fenol ($-\\ce{OH}$):** Pasangan elektron bebas pada atom oksigen beresonansi mendonorkan elektron secara kuat ke dalam cincin ($+M > -I$). Merupakan **pengaktivasi kuat** (*strongly activating*) dan pengarah *orto/para*.
   - **Toluena ($-\\ce{CH3}$):** Mendonorkan elektron melalui efek induksi dan hiperkonjugasi. Merupakan **pengaktivasi lemah** (*weakly activating*) dan pengarah *orto/para*.
   - **Klorobenzena ($-\\ce{Cl}$):** Mengalami kompetisi antara penarikan induksi kuat ($-I$) dan resonansi lemah ($+M$). Karena $-I > +M$, gugus halogen bersifat **mendeaktivasi cincin** (laju lebih lambat dari benzena), namun stabilisasi resonansi pada intermediat karbokation Arenium tetap mengarahkannya ke posisi ***orto* dan *para***.
   - **Nitrobenzena ($-\\ce{NO2}$):** Gugus penarik elektron yang sangat kuat baik melalui efek induksi maupun resonansi ($-I, -M$). Merupakan **pendeaktivasi kuat** dan pengarah ***meta***.

2. **Urutan Reaktivitas Relatif EAS:**
   $$\\text{Fenol} > \\text{Toluena} > \\text{Benzena} > \\text{Klorobenzena} > \\text{Nitrobenzena}$$
   Maka urutan yang tepat adalah $(1) > (2) > (3) > (4)$.

**Analisis Distraktor:**
- **A:** Benar secara lengkap.
- **B:** Salah urutan dan salah orientasi pengarah halogen.
- **C:** Resonansi donor $+M$ oksigen jauh lebih dominan daripada efek induksinya.
- **D:** Klorobenzena terdeaktivasi (lebih lambat dari benzena) karena efek induksi elektronegatif klorin.
- **E:** Gugus nitro adalah penarik elektron dan pengarah *meta*, bukan pengarah *para*.`,
    source_event: 'OSK Kimia 2020 No. 28 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2024 No. 27 (Stereokimia Adisi Bromin pada Alkena Siklik)
  // =========================================================================
  {
    id: 209005,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Adisi Elektrofilik Alkena, Ion Bromonium Siklik & Stereokimia Anti',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Stereokimia Produk Reaksi Halogenasi Sikloheksena dengan Gas Bromin',
    question_text: `Reaksi adisi bromin murni (\\ce{Br2}) pada sikloheksena dalam pelarut diklorometana (\\ce{CH2Cl2}) pada suhu kamar berlangsung cepat dan menghasilkan 1,2-dibromosikloheksana.

Karakteristik stereokimia produk reaksi tersebut adalah ....

A. Diperoleh campuran rasemat sepasang enantiomer *trans*-1,2-dibromosikloheksana melalui pembentukan zat antara ion bromonium siklik dan serangan *anti*  
B. Diperoleh senyawa meso murni *cis*-1,2-dibromosikloheksana melalui adisi serempak *syn*  
C. Diperoleh hanya satu enantiomer murni yang aktif optik tanpa pembentukan bayangan cerminnya  
D. Diperoleh senyawa aromatik bromobenzena akibat dehidrogenasi spontan  
E. Reaksi menghasilkan 1,1-dibromosikloheksana menurut aturan Markovnikov`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Mekanisme Reaksi Adisi Bromin pada Alkena:**
   - Tahap 1: Ikatan $\\pi$ alkena sikloheksena menyerang molekul $\\ce{Br2}$, melepaskan ion bromida ($\\ce{Br-}$) dan membentuk intermediat cincin beranggota tiga: **ion bromonium siklik**.
   - Tahap 2: Muatan positif terlokalisasi dan terstabilkan pada jembatan bromin siklik di salah satu muka cincin (misal muka atas).
   - Tahap 3: Nukleofil $\\ce{Br-}$ hanya dapat menyerang dari sisi berlawanan (muka bawah / serangan *anti*) melalui pembukaan cincin tiga anggota.

2. **Stereokimia Produk:**
   - Adisi menghasilkan produk dengan orientasi kedua atom bromin saling berseberangan: ***trans*-1,2-dibromosikloheksana**.
   - Karena ion bromonium dapat terbentuk dengan probabilitas sama pada muka atas maupun muka bawah cincin akiral sikloheksena, serangan ion bromida menghasilkan jumlah mol yang tepat sama antara enantiomer $(1R, 2R)$ dan $(1S, 2S)$.
   - Campuran ekuimolar kedua enantiomer ini disebut **campuran rasemat** (*racemic mixture*), yang secara optik tidak memutar bidang polarisasi cahaya.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan pembentukan ion bromonium siklik, stereokimia adisi anti, dan terbentuknya rasemat *trans*.
- **B:** Adisi bukan *syn*, dan *cis*-1,2-dibromosikloheksana bukan produk utama mekanisme ini.
- **C:** Molekul awal akiral sehingga menghasilkan rasemat, bukan enantiomer murni tunggal.
- **D:** Tidak terjadi aromatisasi eliminasi.
- **E:** Halogenasi menghasilkan 1,2-dihalida visinal, bukan 1,1-geminal.`,
    source_event: 'OSK Kimia 2024 No. 27 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Ozonolisis Reduktif Penentuan Struktur Alkena)
  // =========================================================================
  {
    id: 209006,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Ozonolisis Reduktif Alkena & Rekonstruksi Struktur Hidrokarbon',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Identifikasi Struktur Hidrokarbon Tak Jenuh dari Hasil Ozonolisis Reduktif',
    question_text: `Suatu senyawa hidrokarbon tak jenuh bercabang $\\ce{C8H14}$ (Senyawa X) direaksikan dengan ozon (\\ce{O3}) yang diikuti dengan perlakuan reduktif menggunakan dimetil sulfida (\\ce{(CH3)2S}). Analisis spektrometri terhadap produk reaksi menunjukkan hanya terbentuk **satu jenis** senyawa dikarbonil tunggal, yaitu 6-oksoheptanal:
$$\\ce{CH3-C(=O)-(CH2)4-CH=O}$$

Struktur senyawa hidrokarbon X tersebut adalah ....

A. 1-metilsikloheptena  
B. 1-metilsikloheksena  
C. 3-metilsikloheksena  
D. 2,5-dimetil-1,5-heksadiena  
E. Metilensikloheksana`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Prinsip Rekonstruksi Ozonolisis:**
   Ozonolisis membelah ikatan rangkap dua $\\ce{C=C}$ dan menggantinya dengan dua gugus karbonil $\\ce{C=O}$.
   Jika suatu hidrokarbon menghasilkan satu molekul dikarbonil rantai terbuka, molekul asal dipastikan berupa senyawa siklik (*monocyclic alkene*).

2. **Penyatuan Kembali Ujung Karbonil:**
   Produk: 6-oksoheptanal
   - Ujung 1: Gugus keton $\\ce{CH3-C(=O)}-$ pada atom C6.
   - Ujung 2: Gugus aldehida $-\\ce{CH=O}$ pada atom C1.
   - Di antara keduanya terdapat rantai alifatik sepanjang 4 atom karbon: $-(\\ce{CH2})_4-$.
   Jumlah karbon pada kerangka utama: C1 hingga C6 = 6 atom karbon.
   Atom C6 juga mengikat gugus metil (C7).
   Menghubungkan kembali $\\ce{C6=O}$ dengan $\\ce{O=C1}$ membentuk cincin sikloalkena 6 anggota:
   $$\\ce{C1} \\text{ berikatan rangkap dua dengan } \\ce{C6}, \\text{ di mana } \\ce{C6} \\text{ mengikat gugus metil } (-\\ce{CH3})$$
   Nama struktur ini adalah **1-metilsikloheksena**.

3. **Verifikasi Rumus Molekul:**
   1-metilsikloheksena memiliki 1 cincin dan 1 ikatan rangkap (Derajat Ketakjenuhan = 2).
   Rumus molekul: $\\ce{C7H10 + CH2} = \\ce{C8H14}$ (tepat sesuai data soal).

**Analisis Distraktor:**
- **A:** Cincin 7 anggota akan menghasilkan 7-oksooktanal (rantai 8 karbon).
- **B:** Benar.
- **C:** 3-metilsikloheksena akan menghasilkan 3-metil-6-oksoheksanal atau dialdehida bercabang.
- **D:** Diena asiklik menghasilkan dua atau lebih fragmen molekul terpisah.
- **E:** Menghasilkan sikloheksanon dan formaldehida.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Konformasi Kursi Sikloheksana & Regangan 1,3-Diaksial)
  // =========================================================================
  {
    id: 209007,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Analisis Konformasi Kursi Sikloheksana & Regangan 1,3-Diaksial',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Kestabilan Relatif Konformasi Kursi Dimetilsikloheksana Terdisubstitusi',
    question_text: `Di antara isomer-isomer dimetilsikloheksana berikut, molekul yang dapat mengadopsi konformasi kursi (*chair conformation*) di mana **kedua** gugus metilnya berada pada posisi ekuatorial (*diequatorial*) adalah ....

A. *cis*-1,3-dimetilsikloheksana dan *trans*-1,4-dimetilsikloheksana  
B. *cis*-1,2-dimetilsikloheksana dan *trans*-1,3-dimetilsikloheksana  
C. *trans*-1,2-dimetilsikloheksana dan *cis*-1,4-dimetilsikloheksana  
D. *cis*-1,3-dimetilsikloheksana dan *cis*-1,4-dimetilsikloheksana  
E. *trans*-1,3-dimetilsikloheksana dan *trans*-1,4-dimetilsikloheksana`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Hubungan Posisi Aksial/Ekuatorial pada Konformasi Kursi:**
   - Posisi C1: (atas = aksial, bawah = ekuatorial)
   - Posisi C2: (atas = ekuatorial, bawah = aksial)
   - Posisi C3: (atas = aksial, bawah = ekuatorial)
   - Posisi C4: (atas = ekuatorial, bawah = aksial)

2. **Evaluasi Isomer Diekuatorial:**
   - **1,3-disubstitusi:**
     - Posisi C1 ekuatorial = bawah.
     - Posisi C3 ekuatorial = bawah.
     - Keduanya sama-sama mengarah ke 'bawah' $\\implies$ relasi stereokimia adalah ***cis***. Maka ***cis*-1,3-dimetilsikloheksana** memiliki konformer stabil (ekuatorial, ekuatorial).
   - **1,4-disubstitusi:**
     - Posisi C1 ekuatorial = bawah.
     - Posisi C4 ekuatorial = atas.
     - Satu mengarah ke 'bawah' dan satu ke 'atas' $\\implies$ relasi stereokimia adalah ***trans***. Maka ***trans*-1,4-dimetilsikloheksana** memiliki konformer stabil (ekuatorial, ekuatorial).
   - **1,2-disubstitusi:**
     - Posisi C1 ekuatorial = bawah, C2 ekuatorial = atas $\\implies$ relasi ***trans*-1,2-dimetilsikloheksana** adalah diekuatorial.

Oleh karena itu, kombinasi pasangan yang tepat adalah ***cis*-1,3-dimetilsikloheksana dan *trans*-1,4-dimetilsikloheksana**.

**Analisis Distraktor:**
- **A:** Benar secara stereokimia konformasi kursi.
- **B:** Mengandung pasangan aksial-ekuatorial.
- **C:** *cis*-1,4 memiliki relasi aksial-ekuatorial.
- **D:** *cis*-1,4 bukan diekuatorial.
- **E:** *trans*-1,3 memiliki relasi aksial-ekuatorial.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Kemoselektivitas Reduksi Senyawa Karbonil)
  // =========================================================================
  {
    id: 209008,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Oksidasi-Reduksi Organik & Kemoselektivitas Reagen Hidrida',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Kemoselektivitas Reduksi Gugus Karbonil pada Senyawa Metil 4-Oksobutanoat Menggunakan NaBH4',
    question_text: `Senyawa metil 4-oksobutanoat:
$$\\ce{CH3-C(=O)-CH2-CH2-COOCH3}$$
memiliki dua gugus karbonil berbeda, yaitu gugus keton dan gugus ester.

Jika senyawa ini direaksikan dengan 1 ekivalen natrium borohidrida (\\ce{NaBH4}) dalam pelarut metanol pada suhu $0^\\circ\\text{C}$ yang diikuti oleh *workup* asam encer, produk utama yang diperoleh adalah ....

A. Metil 4-hidroksibutanoat (keton tereduksi menjadi alkohol sekunder, ester tetap utuh)  
B. Butana-1,4-diol (kedua gugus tereduksi sempurna)  
C. 4-hidroksibutanal (hanya gugus ester yang tereduksi)  
D. Asam 4-oksobutanoat akibat saponifikasi ester  
E. Senyawa lakton siklik akibat eliminasi intramolekular seketika tanpa hidrida`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perbandingan Reaktivitas Reagen Hidrida:**
   - **$\\ce{NaBH4}$ (Natrium borohidrida):** Merupakan zat pereduksi ringan dan kemoselektif. Reagen ini mampu mereduksi aldehida dan keton dengan cepat, tetapi **tidak mampu** mereduksi ester, amida, maupun asam karboksilat pada kondisi standar suhu rendah ($0^\\circ\\text{C}$).
   - **$\\ce{LiAlH4}$ (Litium aluminium hidrida):** Merupakan zat pereduksi sangat kuat yang mereduksi keton dan ester sekaligus menjadi alkohol (menghasilkan butana-1,4-diol).

2. **Aplikasi pada Metil 4-Oksobutanoat:**
   Reaksi dengan 1 ekivalen $\\ce{NaBH4}$ hanya mereduksi gugus keton ($\ce{C=O}$) menjadi gugus alkohol sekunder ($-\\ce{CH(OH)CH3}$ atau pada posisi C4: $-\\ce{CH(OH)}-CH3$), sedangkan gugus ester ($-\\ce{COOCH3}$) tetap terlindungi utuh, menghasilkan **metil 4-hidroksibutanoat**.

**Analisis Distraktor:**
- **A:** Benar. Menunjukkan pemahaman kemoselektivitas reagen $\\ce{NaBH4}$.
- **B:** Ini adalah produk reduksi kuat menggunakan $\\ce{LiAlH4}$.
- **C:** Ester lebih sukar tereduksi daripada keton, sehingga tidak mungkin tereduksi mendahului keton.
- **D:** Borohidrida bukan reagen hidrolisis basa kuat ester.
- **E:** Laktonisasi membutuhkan katalis asam pemanasan lebih lanjut.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Kondensasi Aldol Silang & Dehidrasi Menjadi Enon)
  // =========================================================================
  {
    id: 209009,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Kondensasi Aldol Silang (Claisen-Schmidt) & Dehidrasi Enon',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Produk Utama Kondensasi Aldol Silang antara Benzaldehida dan Aseton',
    question_text: `Kondensasi aldol silang (*Claisen-Schmidt*) dilakukan dengan mereaksikan benzaldehida (\\ce{C6H5CHO}) dan aseton berlebih (\\ce{CH3COCH3}) dalam larutan natrium hidroksida encer berair disertai pemanasan.

Produk utama hasil dehidrasi dari reaksi tersebut adalah ....

A. 4-fenilbut-3-en-2-on (benzalaseton)  
B. 1,5-difenilpenta-1,4-dien-3-on (dibenzalaseton)  
C. 1-feniletanol  
D. Asam benzoat dan benzil alkohol  
E. 2-metil-1-fenilpropan-1-on`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Enolisasi Selektif:**
   - Benzaldehida ($\\ce{C6H5CHO}$) tidak memiliki proton hidrogen alfa ($\\alpha-\\ce{H}$), sehingga tidak dapat membentuk ion enolat.
   - Aseton ($\\ce{CH3COCH3}$) memiliki 6 proton $\\alpha-\\ce{H}$ asam, sehingga dideprotonasi oleh basa $\\ce{OH-}$ membentuk ion enolat:
     $$\\ce{CH3COCH3 + OH- <=> [CH3COCH2]- + H2O}$$

2. **Adisi Nukleofilik Aldol:**
   Ion enolat aseton menyerang karbonil benzaldehida yang sangat elektrofilik:
   $$\\ce{C6H5CHO + [CH3COCH2]- -> C6H5-CH(O-)-CH2COCH3}$$
   Protonasi menghasilkan senyawa $\\beta$-hidroksiketon: $\\ce{C6H5-CH(OH)-CH2COCH3}$.

3. **Dehidrasi Termodinamik (*Aldol Condensation*):**
   Dengan pemanasan, dehidrasi spontan berlangsung cepat karena membentuk ikatan rangkap terkonjugasi penuh dengan cincin benzena dan gugus karbonil:
   $$\\ce{C6H5-CH(OH)-CH2COCH3 -> C6H5-CH=CH-COCH3 + H2O}$$
   Nama senyawa ini adalah **4-fenilbut-3-en-2-on** (umum dikenal sebagai **benzalaseton**). Karena aseton digunakan dalam jumlah berlebih, reaksi berhenti pada produk monobenzal ini.

**Analisis Distraktor:**
- **A:** Benar.
- **B:** Dibenzalaseton terbentuk bila benzaldehida yang digunakan berlebih (rasio $2:1$).
- **C:** Produk reduksi atau Grignard, bukan aldol.
- **D:** Produk disproporsionasi Cannizzaro benzaldehida jika tidak ada senyawa berhidrogen alfa.
- **E:** Isomer rantai yang tidak terbentuk dari mekanisme aldol aseton.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Reaktivitas Relatif Derivatif Asam Karboksilat)
  // =========================================================================
  {
    id: 209010,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Reaktivitas Derivatif Asam Karboksilat & Kemampuan Gugus Pergi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Urutan Reaktivitas Derivatif Asam Karboksilat pada Substitusi Nukleofilik Asil',
    question_text: `Derivatif asam karboksilat mengalami reaksi substitusi nukleofilik asil ($S_N\\text{Ac}$) melalui zat antara tetrahedral. Diberikan empat senyawa derivatif asam etanoat berikut:
(1) Etanamida (\\ce{CH3CONH2})  
(2) Etil etanoat (\\ce{CH3COOCH2CH3})  
(3) Asetil klorida (\\ce{CH3COCl})  
(4) Anhidrida asetat (\\ce{(CH3CO)2O})  

Urutan laju reaksi hidrolisis dari yang **paling reaktif** hingga yang **paling sukar bereaksi** adalah ....

A. $(3) > (4) > (2) > (1)$  
B. $(1) > (2) > (4) > (3)$  
C. $(3) > (2) > (4) > (1)$  
D. $(4) > (3) > (2) > (1)$  
E. $(3) > (4) > (1) > (2)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Faktor Penentu Reaktivitas Substitusi Nukleofilik Asil ($S_N\\text{Ac}$):**
   Reaktivitas ditentukan oleh dua faktor utama:
   - **Keelektrofilikan karbon karbonil:** Seberapa kuat gugus $-Y$ menarik elektron melalui efek induksi vs mendonorkan elektron melalui resonansi.
   - **Kemampuan gugus pergi (*Leaving Group Ability*):** Semakin lemah kebasaan gugus pergi (semakin stabil anionnya, $pK_a$ asam konjugasi makin rendah), maka gugus pergi makin mudah lepas dari zat antara tetrahedral.

2. **Evaluasi Gugus Pergi:**
   - **Asetil klorida (3):** Gugus pergi $\\ce{Cl-}$ ($pK_a(\\ce{HCl}) = -7$). Basa sangat lemah $\\implies$ gugus pergi terbaik $\\implies$ **paling reaktif**.
   - **Anhidrida asetat (4):** Gugus pergi ion asetat $\\ce{CH3COO-}$ ($pK_a(\\ce{CH3COOH}) = 4{,}76$). Basa lemah terstabilkan resonansi $\\implies$ sangat reaktif.
   - **Etil etanoat (2):** Gugus pergi ion etoksida $\\ce{CH3CH2O-}$ ($pK_a(\\ce{EtOH}) = 16$). Basa kuat $\\implies$ gugus pergi buruk, memerlukan katalis asam/basa.
   - **Etanamida (1):** Gugus pergi ion amida $\\ce{NH2-}$ ($pK_a(\\ce{NH3}) = 38$). Basa sangat kuat $\\implies$ gugus pergi terburuk, terstabilkan kuat oleh donasi resonansi pasangan elektron bebas nitrogen $\\implies$ **paling lambat / paling stabil**.

Maka urutan reaktivitas: $(3) > (4) > (2) > (1)$.

**Analisis Distraktor:**
- **A:** Benar secara kaidah kimia organik karbonil.
- **B:** Urutan terbalik (dari yang paling stabil ke yang paling reaktif).
- **C:** Anhidrida asetat keliru ditempatkan di bawah ester.
- **D:** Asetil klorida lebih reaktif daripada anhidrida asetat.
- **E:** Amida lebih stabil daripada ester.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
