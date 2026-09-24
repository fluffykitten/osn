/**
 * oskQuestionsPillar8Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 8: Kimia Anorganik Unsur, Teori Medan Kristal & Senyawa Koordinasi (Pilar 8 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 208001 - 208010
 * - 2 = Jalur Olimpiade OSK
 * - 08 = Pilar 8
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_8_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2021 No. 23 (Teori Medan Kristal Oktahedral & CFSE Kompleks Kobalt)
  // =========================================================================
  {
    id: 208001,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Teori Medan Kristal (CFT), Pembelahan Orbital d & CFSE',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Konfigurasi Elektron Orbital d dan Nilai CFSE Kompleks Heksaaminakobalt(III)',
    question_text: `Ion kobalt(III) membentuk dua jenis ion kompleks oktahedral dengan ligan berbeda:
(1) $\\ce{[Co(NH3)6]^{3+}}$ (diamagnetik)  
(2) $\\ce{[CoF6]^{3-}}$ (paramagnetik dengan 4 elektron tak berpasangan)  

Berdasarkan teori medan kristal (*Crystal Field Theory*), konfigurasi elektron orbital $d$ dan nilai energi penstabilan medan kristal (*CFSE*) untuk ion $\\ce{[Co(NH3)6]^{3+}}$ tanpa memperhitungkan energi perpasangan elektron ($P$) berturut-turut adalah ....

A. $t_{2g}^6 e_g^0$ dan $-2{,}4\\,\\Delta_o$  
B. $t_{2g}^4 e_g^2$ dan $-0{,}4\\,\\Delta_o$  
C. $t_{2g}^6 e_g^0$ dan $-1{,}2\\,\\Delta_o$  
D. $t_{2g}^3 e_g^3$ dan $0{,}0\\,\\Delta_o$  
E. $t_{2g}^5 e_g^1$ dan $-1{,}8\\,\\Delta_o$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konfigurasi Elektron Ion Pusat $\\ce{Co^{3+}}$:**
   Nomor atom $\\ce{Co} = 27$. Konfigurasi atom netral: $[\\ce{Ar}]\\,3d^7\\,4s^2$.
   Ion $\\ce{Co^{3+}}$ kehilangan 2 elektron dari $4s$ dan 1 elektron dari $3d$, menghasilkan konfigurasi ion: $[\\ce{Ar}]\\,3d^6$ ($d^6$).

2. **Pengaruh Kekuatan Medan Ligan $\\ce{NH3}$:**
   $\\ce{NH3}$ merupakan ligan medan kuat (*strong-field ligand*), sehingga $\\Delta_o > P$ (pembelahan medan kristal lebih besar daripada energi perpasangan). Hal ini memaksa seluruh 6 elektron berpasangan di orbital berenergi lebih rendah ($t_{2g}$), membentuk kompleks **spin rendah** (*low-spin*):
   $$\\text{Konfigurasi: } t_{2g}^6 e_g^0$$
   Karena seluruh elektron berpasangan, kompleks bersifat **diamagnetik** (sesuai data soal).

3. **Perhitungan CFSE:**
   Setiap elektron pada orbital $t_{2g}$ menstabilkan sistem sebesar $-0{,}4\\,\\Delta_o$, sedangkan pada orbital $e_g$ mendestabilkan sebesar $+0{,}6\\,\\Delta_o$:
   $$\\text{CFSE} = [6 \\times (-0{,}4\\,\\Delta_o)] + [0 \\times (+0{,}6\\,\\Delta_o)] = -2{,}4\\,\\Delta_o$$

**Analisis Distraktor:**
- **A:** Benar. Konfigurasi $t_{2g}^6 e_g^0$ dengan CFSE $-2{,}4\\,\\Delta_o$.
- **B:** Ini adalah konfigurasi medan lemah (*high-spin*) untuk kompleks $\\ce{[CoF6]^{3-}}$.
- **C:** Kesalahan perhitungan koefisien penstabilan orbital $t_{2g}$.
- **D:** Konfigurasi hipotetis yang melanggar aturan Hund dan medan kristal.
- **E:** Konfigurasi tereksitasi satu elektron.`,
    source_event: 'OSK Kimia 2021 No. 23 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 24 (Momen Magnetik Spin Saja Senyawa Kompleks Nikel)
  // =========================================================================
  {
    id: 208002,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Momen Magnetik Spin-Only & Sifat Magnetik Kompleks d8',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Momen Magnetik Efektif Kompleks Oktahedral Heksaakuanikel(II)',
    question_text: `Suatu garam kompleks nikel(II) heksahidrat dilarutkan dalam air membentuk kation kompleks oktahedral $\\ce{[Ni(H2O)6]^{2+}}$.

Berdasarkan rumus momen magnetik spin saja (*spin-only magnetic moment*):
$$\\mu_{eff} = \\sqrt{n(n+2)}\\text{ BM}$$
(dengan $n$ adalah jumlah elektron tak berpasangan), nilai $\\mu_{eff}$ teoritis untuk ion kompleks tersebut adalah mendekati .... (Diketahui nomor atom $\\ce{Ni} = 28$, $\\sqrt{8} \\approx 2{,}83$)

A. $2{,}83\\text{ BM}$  
B. $0{,}00\\text{ BM}$  
C. $1{,}73\\text{ BM}$  
D. $3{,}87\\text{ BM}$  
E. $4{,}90\\text{ BM}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konfigurasi Elektron Ion $\\ce{Ni^{2+}}$:**
   Nomor atom $\\ce{Ni} = 28$: $[\\ce{Ar}]\\,3d^8\\,4s^2$.
   Ion $\\ce{Ni^{2+}}$ memiliki konfigurasi sistem $d^8$: $[\\ce{Ar}]\\,3d^8$.

2. **Diagram Pembelahan Medan Oktahedral untuk Sistem $d^8$:**
   Dalam medan oktahedral (baik medan kuat maupun medan lemah), sistem $d^8$ selalu memiliki pengisian elektron yang sama:
   - $t_{2g}^6$: 3 orbital masing-masing terisi sepasang elektron (6 elektron berpasangan).
   - $e_g^2$: 2 orbital masing-masing terisi 1 elektron sejajar menurut aturan Hund (2 elektron tak berpasangan).
   Jumlah elektron tak berpasangan: $n = 2$.

3. **Perhitungan Momen Magnetik Spin Saja:**
   $$\\mu_{eff} = \\sqrt{2(2+2)} = \\sqrt{2 \\times 4} = \\sqrt{8}\\text{ BM} \\approx 2{,}83\\text{ BM}$$
   Ion kompleks bersifat paramagnetik.

**Analisis Distraktor:**
- **A (2,83 BM):** Benar.
- **B (0,00 BM):** Diamagnetik, terjadi pada kompleks bujur sangkar (*square planar*) $d^8$ seperti $\\ce{[Ni(CN)4]^{2-}}$.
- **C (1,73 BM):** Momen magnetik untuk 1 elektron tak berpasangan ($\\sqrt{3}$).
- **D (3,87 BM):** Momen magnetik untuk 3 elektron tak berpasangan ($\\sqrt{15}$, sistem $d^7$ spin tinggi).
- **E (4,90 BM):** Momen magnetik untuk 4 elektron tak berpasangan ($\\sqrt{24}$, sistem $d^6$ spin tinggi).`,
    source_event: 'OSK Kimia 2022 No. 24 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2023 No. 25 (Isomeri Koordinasi, Tautan & Geometri fac/mer)
  // =========================================================================
  {
    id: 208003,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Isomeri Senyawa Koordinasi: Linkage, Geometri & Optik',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Isomeri Geometri Fasia/Meridional pada Kompleks Oktahedral [MA3B3]',
    question_text: `Kompleks oktahedral netral triklorotriaminakobalt(III), $\\ce{[Co(NH3)3Cl3]}$, memiliki dua jenis isomer geometri yang dikenal sebagai isomer *facial* (*fac*) dan isomer *meridional* (*mer*).

Pernyataan yang **paling benar** mengenai kedua isomer tersebut adalah ....

A. Isomer *fac* memiliki ketiga ligan amonia yang menempati satu muka segitiga oktahedron, dan keduanya tidak ada yang memiliki isomer optik (keduanya akiral)  
B. Isomer *mer* bersifat kiral sehingga dapat dipisahkan menjadi sepasang enantiomer memutar bidang polarisasi  
C. Isomer *fac* memiliki sudut ikatan $\\ce{Cl-Co-Cl}$ sebesar $180^\\circ$  
D. Isomer *mer* memiliki momen dipol permanen yang jauh lebih besar daripada isomer *fac*  
E. Reaksi hidrolisis salah satu ligan klorida pada isomer *fac* menghasilkan 3 jenis isomer baru`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Definisi Geometri *fac* dan *mer* pada Tipe $\\ce{[MA3B3]}$:**
   - **Isomer *fac* (*facial*):** Tiga ligan identik (misal $3\\,\\ce{NH3}$) menempati tiga sudut pada satu muka segitiga dari oktahedron (sudut ikatan $\\ce{L-M-L} = 90^\\circ$, simetri titik $C_{3v}$).
   - **Isomer *mer* (*meridional*):** Tiga ligan identik menempati bidang equator/meridian yang mengelilingi atom pusat, dengan sepasang ligan saling berseberangan trans $180^\\circ$ (simetri titik $C_{2v}$).

2. **Kiralitas dan Aktivitas Optik:**
   - Isomer *fac* memiliki bidang simetri cermin ($\sigma_v$) $\\implies$ **akiral** (tidak aktif optik).
   - Isomer *mer* memiliki dua bidang simetri cermin tegak lurus $\\implies$ **akiral** (tidak memiliki enantiomer).
   Jadi, kedua isomer sama-sama tidak memiliki isomer optik.

**Analisis Distraktor:**
- **A:** Benar secara tuntas.
- **B:** Salah, isomer *mer* memiliki bidang cermin sehingga bersifat akiral.
- **C:** Pada isomer *fac*, ketiga ikatan ligan klorida saling berdampingan *cis* dengan sudut $90^\\circ$, bukan $180^\\circ$.
- **D:** Isomer *fac* memiliki dipol lebih kuat karena vektor ikatan ligan terpolarisasi searah.
- **E:** Hidrolisis satu ligan menghasilkan kompleks $\\ce{[MA3B2C]}$ yang hanya memiliki 3 isomer total.`,
    source_event: 'KSN-K Kimia 2023 No. 25 (Puspresnas/BPTI)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2023)',
    institution: 'Pusat Prestasi Nasional / BPTI Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2020 No. 25 (Kimia Unsur Golongan 14 & Efek Pasangan Inert)
  // =========================================================================
  {
    id: 208004,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Anorganik Golongan Utama & Efek Pasangan Inert',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Kestabilan Relatif Bilangan Oksidasi +2 dan +4 pada Unsur Golongan 14',
    question_text: `Unsur-unsur golongan 14 (karbon hingga timbal) memiliki konfigurasi elektron terluar $ns^2\\,np^2$. Dari atas ke bawah dalam satu golongan, terjadi tren kestabilan bilangan oksidasi yang unik:
- Karbon, silikon, dan germanium sangat stabil pada bilangan oksidasi $+4$.
- Timah (\\ce{Sn}) dapat membentuk senyawa stabil pada biloks $+2$ dan $+4$.
- Timbal (\\ce{Pb}) jauh lebih stabil pada bilangan oksidasi $+2$, sedangkan senyawa timbal(IV) seperti \\ce{PbO2} merupakan oksidator sangat kuat.

Penyebab utama tingginya kestabilan bilangan oksidasi $+2$ pada timbal adalah ....

A. Efek pasangan inert (*inert pair effect*) akibat kontraksi lantanida dan efek relativistik yang menstabilkan orbital $6s$  
B. Penurunan nilai keelektronegatifan dari karbon ke timbal  
C. Bertambahnya jari-jari kovalen yang menurunkan energi ionisasi pertama  
D. Kemampuan timbal membentuk ikatan kovalen berlipat $\\pi$ dengan oksigen  
E. Tingginya afinitas elektron pada atom timbal dibandingkan silikon`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konsep Efek Pasangan Inert (*Inert Pair Effect*):**
   - Pada unsur berat periode 6 seperti Timbal ($_{82}\\ce{Pb}$: $[\\ce{Xe}]\\,4f^{14}\\,5d^{10}\\,6s^2\\,6p^2$), orbital $4f$ dan $5d$ memiliki kemampuan perisaian (*shielding*) yang sangat buruk terhadap muatan inti.
   - Selain itu, akibat kecepatan elektron mendekati fraksi kecepatan cahaya (efek relativistik), orbital $s$ mengalami kontraksi dan stabilisasi energi yang sangat dalam.
   - Akibatnya, sepasang elektron pada orbital $6s^2$ menjadi sangat sukar dilepaskan atau dilibatkan dalam pembentukan ikatan kovalen ("inert"), sehingga timbal lebih menyukai pelepasan dua elektron $6p$ saja membentuk kation $\\ce{Pb^{2+}}$ yang stabil.

2. **Dampak Oksidatif Senyawa $\\ce{Pb^{IV}}$:**
   Karena tingkat oksidasi $+4$ tidak stabil pada timbal, senyawa seperti $\\ce{PbO2}$ memiliki kecenderungan termodinamika yang sangat kuat untuk tereduksi menjadi $\\ce{Pb^{2+}}$, menjadikannya oksidator kuat.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan efek pasangan inert dan efek relativistik orbital $6s$.
- **B:** Tren keelektronegatifan umum tidak menjelaskan anomali perbedaan stabilitas biloks.
- **C:** Jari-jari kovalen bertambah, tetapi tidak menjelaskan inersia orbital $6s$.
- **D:** Unsur berat periode 6 justru sangat sukar membentuk ikatan $\\pi-p$ bertindih.
- **E:** Afinitas elektron timbal tidak bertanggung jawab atas kestabilan kationik divalen.`,
    source_event: 'OSK Kimia 2020 No. 25 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2024 No. 22 (Distorsi Jahn-Teller Kompleks Cu(II) d9)
  // =========================================================================
  {
    id: 208005,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Teorema Jahn-Teller & Distorsi Tetragonal Kompleks d9',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Distorsi Jahn-Teller pada Kompleks Heksaakuatembaga(II)',
    question_text: `Ion kompleks heksakuatembaga(II), $\\ce{[Cu(H2O)6]^{2+}}$, memiliki struktur oktahedron terdistorsi secara signifikan di mana dua ikatan $\\ce{Cu-O}$ pada sumbu aksial ($z$) terukur lebih panjang ($2{,}38\\text{ \\AA}$) dibandingkan empat ikatan $\\ce{Cu-O}$ pada bidang ekuator ($1{,}97\\text{ \\AA}$).

Berdasarkan teorema Jahn-Teller, distorsi perpanjangan tetragonal (*tetragonal elongation*) ini terjadi karena ....

A. Orbital $e_g$ terisi secara asimetris oleh 3 elektron ($t_{2g}^6\\,d_{xy}^2\\,d_{xz}^2\\,d_{yz}^2\\,d_{z^2}^2\\,d_{x^2-y^2}^1$), sehingga pengisian penuh orbital $d_{z^2}$ memberikan tolakan lebih besar kepada ligan aksial  
B. Orbital $t_{2g}$ mengalami pemisahan degenerate akibat ligan air yang bersifat asam  
C. Ion tembaga(II) memiliki jari-jari kationik yang terlalu besar untuk koordinasi oktahedral sempurna  
D. Terjadi hibridisasi resonansi antara geometri planar dan tetrahedral  
E. Ligan air pada sumbu aksial mengalami pertukaran cepat dengan ion hidronium`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Teorema Jahn-Teller:**
   "Setiap molekul non-linear yang berada dalam keadaan elektronik degenerate (orbitally degenerate) tidak stabil secara geometri dan akan mengalami distorsi untuk menurunkan simetrinya dan menghilangkan ke-degenerate-annya."

2. **Konfigurasi Elektron $\\ce{Cu^{2+}}$ ($d^9$):**
   - Dalam medan oktahedral ideal: $t_{2g}^6\\,e_g^3$.
   - Pasangan orbital $e_g$ terdiri dari orbital $d_{z^2}$ dan $d_{x^2-y^2}$.
   - Terdapat 3 elektron yang harus menempati kedua orbital ini: satu orbital terisi penuh (2 elektron) dan satu orbital terisi tunggal (1 elektron).
   - Pengisian asimetris paling stabil tercapai bila orbital $d_{z^2}$ terisi 2 elektron ($d_{z^2}^2$) dan orbital $d_{x^2-y^2}$ terisi 1 elektron ($d_{x^2-y^2}^1$).
   - Elektron ganda pada $d_{z^2}$ memberikan gaya tolakan elektrostatik yang lebih besar terhadap pasangan elektron bebas ligan air pada sumbu aksial $z$, menyebabkan kedua ligan aksial terdorong menjauh (ikatan memanjang $\\approx 2{,}38\\text{ \\AA}$).

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan secara presisi penyebab mekanika kuantum distorsi Jahn-Teller pada ion $d^9$.
- **B:** Distorsi primer berasal dari orbital $e_g$ yang berhadapan langsung dengan ligan, bukan dari $t_{2g}$.
- **C:** Jari-jari $\\ce{Cu^{2+}}$ ideal untuk bilangan koordinasi 6.
- **D:** Bukan merupakan resonansi hibridisasi antar geometri berbeda.
- **E:** Pertukaran ligan adalah proses dinamis larutan, bukan penyebab distorsi geometri statis kristal.`,
    source_event: 'OSK Kimia 2024 No. 22 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Deret Spektrokimia Ligan & Energi Absorpsi UV-Vis)
  // =========================================================================
  {
    id: 208006,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Deret Spektrokimia Ligan & Panjang Gelombang Absorpsi Komplementer',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Urutan Panjang Gelombang Absorpsi Maksimum Kompleks Kromium(III) Berdasarkan Deret Spektrokimia',
    question_text: `Diberikan tiga senyawa kompleks oktahedral dari kation kromium(III) ($d^3$):
(1) $\\ce{[CrCl6]^{3-}}$  
(2) $\\ce{[Cr(H2O)6]^{3+}}$  
(3) $\\ce{[Cr(CN)6]^{3-}}$  

Berdasarkan deret spektrokimia ligan:
$$\\ce{Cl- < H2O < CN-}$$

Urutan energi pembelahan medan kristal ($\\Delta_o$) dari terkecil ke terbesar dan urutan panjang gelombang sinar tampak yang diabsorpsi maksimum ($\\lambda_{max}$) dari terpanjang ke terpendek berturut-turut adalah ....

A. $\\Delta_o: (1) < (2) < (3)$ dan $\\lambda_{max}: (1) > (2) > (3)$  
B. $\\Delta_o: (3) < (2) < (1)$ dan $\\lambda_{max}: (3) > (2) > (1)$  
C. $\\Delta_o: (1) < (2) < (3)$ dan $\\lambda_{max}: (3) > (2) > (1)$  
D. $\\Delta_o: (2) < (1) < (3)$ dan $\\lambda_{max}: (2) > (1) > (3)$  
E. $\\Delta_o: (1) < (3) < (2)$ dan $\\lambda_{max}: (1) > (3) > (2)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Urutan Energi Pembelahan Medan Oktahedral ($\\Delta_o$):**
   Deret spektrokimia menyusun ligan berdasarkan kemampuan membelah orbital $d$:
   $$\\ce{Cl-} (\\text{donor } \\pi \\text{ lemah}) < \\ce{H2O} (\\text{donor } \\sigma) < \\ce{CN-} (\\text{akseptor } \\pi \\text{ kuat})$$
   Maka nilai $\\Delta_o$: $(1) < (2) < (3)$.

2. **Hubungan $\\Delta_o$ dengan Panjang Gelombang Absorpsi ($\\lambda_{max}$):**
   Promosi elektron dari orbital $t_{2g}$ ke $e_g$ menyerap foton dengan energi:
   $$\\Delta_o = \\frac{hc}{\\lambda_{max}} \\implies \\lambda_{max} = \\frac{hc}{\\Delta_o}$$
   Panjang gelombang berbanding terbalik dengan nilai $\\Delta_o$.
   Karena $\\Delta_o(1) < \\Delta_o(2) < \\Delta_o(3)$, maka $\\lambda_{max}(1) > \\lambda_{max}(2) > \\lambda_{max}(3)$.

**Analisis Distraktor:**
- **A:** Benar. $\\Delta_o$ makin besar menyerap panjang gelombang foton yang makin pendek (energi foton makin tinggi).
- **B:** Terbalik menyusun deret spektrokimia.
- **C:** Menganggap $\\lambda_{max}$ berbanding lurus dengan $\\Delta_o$.
- **D:** Urutan ligan air dan klorida terbalik.
- **E:** Sianida keliru ditempatkan di tengah.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Efek Kelat & Termodinamika Entropi Kompleks)
  // =========================================================================
  {
    id: 208007,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Efek Kelat (Chelate Effect) & Termodinamika Pembentukan Kompleks',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Asal-Usul Termodinamika Tingginya Kestabilan Kompleks Kelat Etilendiamin Dibandingkan Amonia',
    question_text: `Reaksi pembentukan kompleks nikel(II) dengan ligan monodentat amonia (\\ce{NH3}) dan ligan bidentat kelat 1,2-diaminoetana (etilendiamin, \\ce{en}):
(1) $\\ce{[Ni(H2O)6]^{2+} + 6NH3 <=> [Ni(NH3)6]^{2+} + 6H2O} \\quad \\log \\beta_6 = 8{,}6$  
(2) $\\ce{[Ni(H2O)6]^{2+} + 3en <=> [Ni(en)3]^{2+} + 6H2O} \\quad \\log \\beta_3 = 18{,}3$  

Perbedaan tetapan kestabilan pembentukan kompleks yang mencapai hampir $10^{10}$ kali lipat ini (efek kelat) secara termodinamika didorong terutama oleh ....

A. Perubahan entropi reaksi ($\\Delta S^\\circ$) yang jauh lebih positif pada reaksi (2) karena bertambahnya jumlah partikel bebas terlarut di sisi produk  
B. Nilai perubahan entalpi ($\\Delta H^\\circ$) reaksi (2) yang sangat eksotermik akibat ikatan $\\ce{Ni-C}$ kovalen  
C. Ligan etilendiamin mendonorkan 4 pasang elektron bebas per molekul  
D. Penurunan tegangan cincin kelat beranggota 4 atom  
E. Perbedaan jari-jari kation nikel pada kedua kompleks`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Jumlah Partikel Terlarut pada Reaksi:**
   - Reaksi (1): $1\\text{ kation} + 6\\text{ molekul } \\ce{NH3} = 7\\text{ partikel}$ bereaksi membentuk $1\\text{ kompleks} + 6\\text{ molekul } \\ce{H2O} = 7\\text{ partikel}$. Perubahan jumlah molekul bebas $\\Delta n = 7 - 7 = 0$.
   - Reaksi (2): $1\\text{ kation} + 3\\text{ molekul } \\ce{en} = 4\\text{ partikel}$ bereaksi melepaskan $1\\text{ kompleks} + 6\\text{ molekul air bebas} = 7\\text{ partikel}$. Perubahan jumlah partikel bebas bertambah: $\\Delta n = 7 - 4 = +3$.

2. **Dampak Termodinamika Entropi Semesta:**
   Pelepasan 6 molekul air terikat dari sangkar koordinasi oleh hanya 3 molekul etilendiamin menciptakan kenaikan derajat ketidakteraturan translasi yang sangat signifikan:
   $$\\Delta S_{rxn}^\\circ \\gg 0 \\implies -T\\Delta S^\\circ \\ll 0$$
   Hal ini menyebabkan energi bebas Gibbs pembentukan $\\Delta G^\circ = \\Delta H^\circ - T\\Delta S^\circ$ bernilai jauh lebih negatif, sehingga nilai tetapan kesetimbangan $\\beta$ melesat tinggi ($\log \\beta_3 = 18{,}3$).

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan faktor pendorong entropi (*entropically driven process*) efek kelat.
- **B:** Nilai $\\Delta H^\circ$ kedua kompleks hampir setara karena sama-sama membentuk ikatan koordinasi $\\ce{Ni-N}$.
- **C:** Etilendiamin adalah ligan bidentat (mendonorkan 2 pasang elektron), bukan 4.
- **D:** Cincin kelat etilendiamin beranggota 5 atom ($\ce{Ni-N-C-C-N}$), yang merupakan ukuran cincin kelat paling stabil bebas regangan.
- **E:** Jari-jari kation nikel tetap sama.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Struktur Molekul & Polaritas Interhalogen BrF5)
  // =========================================================================
  {
    id: 208008,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Senyawa Interhalogen & Geometri VSEPR',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Geometri Molekul, Polaritas dan Hibridisasi Pusat pada Bromin Pentafluorida (BrF5)',
    question_text: `Bromin pentafluorida (\\ce{BrF5}) merupakan senyawa interhalogen cair yang sangat reaktif dan korosif.

Berdasarkan teori VSEPR dan hibridisasi orbital, bentuk molekul, keberadaan momen dipol, dan hibridisasi atom pusat bromin pada senyawa \\ce{BrF5} adalah ....

A. Piramida alas bujur sangkar (*square pyramidal*), polar, $sp^3d^2$  
B. Bipiramida trigonal (*trigonal bipyramidal*), nonpolar, $sp^3d$  
C. Oktahedral sempurna, nonpolar, $sp^3d^2$  
D. Bujur sangkar datar (*square planar*), nonpolar, $sp^3d^2$  
E. Pentagonal planar, polar, $sp^3d^3$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Elektron Valensi Atom Pusat $\\ce{Br}$:**
   - Elektron valensi $\\ce{Br} = 7$.
   - Mengikat 5 atom $\\ce{F}$ melalui ikatan kovalen tunggal $\\implies 5\\text{ PEI}$.
   - Sisa elektron bebas: $7 - 5 = 2\\text{ elektron} = 1\\text{ PEB}$.
   - Total domain elektron (bilangan sterik) = $5 + 1 = 6$ domain (geometri domain oktahedral, hibridisasi $sp^3d^2$).

2. **Geometri Molekul dan Polaritas:**
   - Dengan 5 PEI dan 1 PEB, bentuk geometri molekul adalah **piramida alas bujur sangkar** (*square pyramidal*).
   - Karena adanya 1 PEB pada salah satu sumbu aksial, resultan momen dipol ikatan $\\ce{Br-F}$ tidak saling meniadakan secara vektor $\\implies$ molekul bersifat **polar** (memiliki momen dipol permanen $\\mu > 0$).

**Analisis Distraktor:**
- **A:** Benar secara lengkap.
- **B:** Domain 5 pada $\\ce{BrF3}$ atau $\\ce{PCl5}$.
- **C:** Bentuk oktahedral hanya jika memiliki 6 PEI tanpa PEB ($\ce{SF6}$).
- **D:** Bentuk bujur sangkar datar dimiliki spesi dengan 4 PEI dan 2 PEB ($\ce{XeF4}$).
- **E:** Hibridisasi $sp^3d^3$ terjadi pada $\\ce{IF7}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Perbandingan Geometri Kompleks d8 Ni vs Pt)
  // =========================================================================
  {
    id: 208009,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Geometri Bujur Sangkar vs Tetrahedral pada Kompleks Logam d8',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perbedaan Geometri dan Sifat Magnetik antara Kompleks [NiCl4]2- dan [PtCl4]2-',
    question_text: `Dua ion kompleks kloro dari logam golongan 10 menunjukkan perilaku struktur dan kemagnetan yang sangat kontras:
(1) $\\ce{[NiCl4]^{2-}}$ bersifat paramagnetik dengan $\\mu_{eff} \\approx 2{,}83\\text{ BM}$  
(2) $\\ce{[PtCl4]^{2-}}$ bersifat diamagnetik ($\\mu_{eff} = 0\\text{ BM}$)  

Berdasarkan teori medan ligan, geometri molekul dan konfigurasi orbital kedua kompleks tersebut adalah ....

A. $\\ce{[NiCl4]^{2-}}$ tetrahedral ($e^4\\,t_2^4$), sedangkan $\\ce{[PtCl4]^{2-}}$ bujur sangkar datar (*square planar*) dengan orbital $d_{x^2-y^2}$ kosong  
B. $\\ce{[NiCl4]^{2-}}$ oktahedral, sedangkan $\\ce{[PtCl4]^{2-}}$ tetrahedral  
C. Keduanya berbentuk tetrahedral dengan perbedaan spin elektron  
D. Keduanya berbentuk bujur sangkar datar dengan ligan kloro medan kuat  
E. $\\ce{[NiCl4]^{2-}}$ bujur sangkar, sedangkan $\\ce{[PtCl4]^{2-}}$ tetrahedral`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis $\\ce{[NiCl4]^{2-}}$ ($3d^8$):**
   - Logam baris pertama $3d$ dengan ligan medan lemah $\\ce{Cl-}$ menghasilkan pembelahan medan kristal tetrahedral yang kecil ($\\Delta_t \\approx \\frac{4}{9}\\Delta_o$).
   - Terbentuk kompleks **tetrahedral**, dengan konfigurasi elektron $e^4\\,t_2^4$ yang memiliki 2 elektron tak berpasangan di orbital $t_2$, sehingga bersifat **paramagnetik** ($\\mu_{eff} = \\sqrt{8} \\approx 2{,}83\\text{ BM}$).

2. **Analisis $\\ce{[PtCl4]^{2-}}$ ($5d^8$):**
   - Logam baris ketiga $5d$ memiliki orbital yang berukuran jauh lebih besar dan menjulur keluar, menghasilkan tumpang-tindih ikatan yang sangat kuat dengan ligan sehingga nilai pembelahan medan kristal meningkat drastis ($\Delta_{5d} \\approx 1{,}5 - 2\\times \\Delta_{3d}$).
   - Kenaikan energi pembelahan yang masif ini memaksa kompleks mengadopsi geometri **bujur sangkar datar (*square planar*)**, di mana orbital $d_{x^2-y^2}$ terlempar ke tingkat energi yang sangat tinggi dan kosong, sementara keempat orbital $d$ lainnya terisi berpasangan penuh. Hal ini menghasilkan sifat **diamagnetik**.

Prinsip penting: Semua kompleks logam transisi $4d^8$ dan $5d^8$ (seperti $\\ce{Pd^{2+}}$ dan $\\ce{Pt^{2+}}$) hampir selalu mengadopsi geometri bujur sangkar datar diamagnetik terlepas dari jenis ligannya!

**Analisis Distraktor:**
- **A:** Benar secara menyeluruh.
- **B:** Bilangan koordinasi adalah 4, bukan 6 (bukan oktahedral).
- **C:** Mengabaikan distorsi energi ke bujur sangkar pada logam berat $5d$.
- **D:** Mengabaikan fakta bahwa ion nikel kloro berbentuk tetrahedral.
- **E:** Terbalik menempatkan geometri kedua kompleks.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Reaksi Analisis Kualitatif Kation Transisi Besi)
  // =========================================================================
  {
    id: 208010,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Reaksi Warna Analisis Kualitatif Kation & Senyawa Koordinasi Fe(III)',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Identifikasi Kation Besi(III) Melalui Pembentukan Kompleks Berwarna Merah Darah',
    question_text: `Dalam uji analisis kualitatif anorganik, penambahan larutan kalium tiosianat (\\ce{KSCN}) ke dalam larutan garam besi(III) menghasilkan warna merah darah pekat yang sangat sensitif. Bila ke dalam larutan merah darah tersebut ditambahkan larutan natrium fluorida (\\ce{NaF}) pekat, warna merah darah tersebut seketika lenyap dan larutan kembali tidak berwarna.

Penjelasan kimia yang **paling tepat** mengenai kedua fenomena tersebut adalah ....

A. Pembentukan kation kompleks mononuklir $\\ce{[Fe(SCN)(H2O)5]^{2+}}$ (merah darah) yang kemudian terurai akibat substitusi ligan oleh fluorida membentuk kompleks fluoro $\\ce{[FeF6]^{3-}}$ yang lebih stabil  
B. Terjadi reduksi ion $\\ce{Fe^{3+}}$ menjadi $\\ce{Fe^{2+}}$ oleh ion fluorida  
C. Terbentuk endapan koloid sulfur kuning yang menutupi warna larutan  
D. Ion tiosianat teroksidasi menjadi gas sianogen oleh natrium fluorida  
E. Garam natrium fluorida mengendapkan seluruh ion besi sebagai $\\ce{Fe(OH)3}$ cokelat`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Reaksi Pembentukan Warna Merah Darah:**
   Ion $\\ce{Fe^{3+}}$ bereaksi dengan ion tiosianat membentuk kation kompleks pentaakuatiosianato-besi(III):
   $$\\ce{[Fe(H2O)6]^{3+} + SCN- <=> [Fe(SCN)(H2O)5]^{2+} + H2O}$$
   Warna merah darah intensif berasal dari pita transfer muatan ligan-ke-logam (*Ligand-to-Metal Charge Transfer / LMCT*) dari ligan $\\ce{SCN-}$ ke orbital $d$ kosong $\\ce{Fe^{3+}}$.

2. **Reaksi dengan Ion Fluorida (\\ce{F-}):**
   Ion fluorida memiliki muatan negatif terkonsentrasi tinggi (basa keras menurut prinsip HSAB) yang sangat menyukai kation asam keras $\\ce{Fe^{3+}}$.
   Fluorida mendesak dan menggantikan ligan tiosianat membentuk kompleks heksafluorofirat(III):
   $$\\ce{[Fe(SCN)(H2O)5]^{2+} + 6F- <=> [FeF6]^{3-} + SCN- + 5H2O}$$
   Karena tetapan kestabilan $\\ce{[FeF6]^{3-}}$ jauh lebih besar ($K_f \\approx 10^{16}$) dan kompleks ini tidak berwarna (karena transisi $d-d$ pada sistem $d^5$ spin tinggi adalah *spin-forbidden* dan pita transfer muatan berada di daerah UV jauh), larutan merah darah langsung memudar menjadi tidak berwarna.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan pembentukan kompleks tiosianat dan penggeserannya oleh ligan fluorida berdasarkan termodinamika kompleks.
- **B:** Ion fluorida adalah basa lemah non-pereduksi, tidak mereduksi $\\ce{Fe^{3+}}$.
- **C:** Tidak terbentuk sulfur bebas.
- **D:** Fluorida tidak mengoksidasi tiosianat.
- **E:** Larutan tidak membentuk endapan besi hidroksida cokelat.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
