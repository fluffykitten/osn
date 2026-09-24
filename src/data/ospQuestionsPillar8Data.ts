/**
 * ospQuestionsPillar8Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 8: Kimia Anorganik Koordinasi Lanjut, Teori Medan Ligan, Organologam & Katalisis
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 308001 - 308010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 08 = Pilar 8
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_8_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 22 (Aturan 18-Elektron & Karbonil Logam Bimetalik)
  // =========================================================================
  {
    id: 308001,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Aturan 18-Elektron & Karbonil Logam Bimetalik',
    title: 'Aturan 18-Elektron pada Kompleks Karbonil Logam Bimetalik Co2(CO)8',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Kompleks oktakarbonildikobalt(0) ($\\ce{Co2(CO)8}$) dalam fasa padat mengadopsi struktur isomer dengan dua ligan karbonil jembatan (bridging $\\mu_2\\ce{-CO}$) dan enam ligan karbonil terminal. Kompleks ini memenuhi kaidah kestabilan 18-elektron untuk setiap atom kobalt.

Konfigurasi elektron valensi kobalt netral adalah $[\ce{Ar}] 3d^7 4s^2$ ($9$ elektron valensi).

Berapakah jumlah ikatan kovalen langsung antara logam-logam ($\ce{Co-Co}$) dalam molekul $\ce{Co2(CO)8}$ tersebut menurut metode penataan elektron netral (metode kovalen)?

A. Tidak ada ikatan $\ce{Co-Co}$ (orde ikatan 0)
B. 1 ikatan tunggal $\ce{Co-Co}$
C. 2 ikatan rangkap $\ce{Co=Co}$
D. 3 ikatan ganda-tiga $\ce{Co#Co}$
E. Ikatan delokalisasi 4-pusat 6-elektron`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Metode Penghitungan Elektron Netral (Metode Kovalen) per atom kobalt:
   - Elektron valensi dari atom pusat kobalt netral $\\ce{Co(0)}$: $9$ elektron.
   - 3 ligan terminal $\\ce{CO}$ per atom Co (masing-masing mendonorkan 2 elektron):
     $$3 \\times 2 = 6\\text{ elektron}$$
   - 2 ligan jembatan $\\mu_2\\ce{-CO}$ (masing-masing ligan $\\mu_2\\ce{-CO}$ mendonorkan total 2 elektron yang dibagi rata ke 2 atom Co, sehingga menyumbang 1 elektron per atom Co):
     $$2 \\times 1 = 2\\text{ elektron}$$
   - Subtotal elektron di sekeliling satu atom Co sebelum ikatan $\\ce{Co-Co}$:
     $$9 + 6 + 2 = 17\\text{ elektron}$$
2. Kebutuhan untuk memenuhi Aturan 18-Elektron:
   $$18 - 17 = 1\\text{ elektron}$$
   Kekurangan 1 elektron ini dipenuhi melalui pembentukan **1 ikatan tunggal langsung logam-logam $\\ce{Co-Co}$** (di mana setiap atom Co menyumbang 1 elektron untuk ikatan bersama).
3. Verifikasi jumlah elektron total molekul ($N$):
   - $2 \\times \\ce{Co} = 2 \\times 9 = 18\\text{ e}^-$
   - $8 \\times \\ce{CO} = 8 \\times 2 = 16\\text{ e}^-$
   - Total elektron valensi $= 34\\text{ e}^-$.
   - Jumlah ikatan logam-logam:
     $$\\text{Jumlah ikatan M-M} = \\frac{(18 \\times n) - N}{2} = \\frac{(18 \\times 2) - 34}{2} = \\frac{36 - 34}{2} = 1$$
   Terdapat tepat **1 ikatan tunggal $\\ce{Co-Co}$**.

**Analisis Distraktor:**
- Pilihan A: Mengabaikan pemenuhan aturan oktet/18-elektron.
- Pilihan B: Benar, tepat 1 ikatan kovalen tunggal $\ce{Co-Co}$.
- Pilihan C: Menganggap ligan jembatan tidak menyumbang elektron.
- Pilihan D: Salah menghitung total elektron valensi.
- Pilihan E: Istilah tidak relevan untuk karbonil bimetalik sederhana.`,
    solution_framework_template: `Tahap 1: Hitung elektron valensi Co netral (9e-).
Tahap 2: Hitung donasi ligan per atom Co: 3 terminal CO (6e-) dan 2 bridge CO (2e-).
Tahap 3: Jumlahkan elektron sebelum ikatan M-M: 9 + 6 + 2 = 17e-.
Tahap 4: Tentukan orde ikatan Co-Co = 18 - 17 = 1 ikatan tunggal.`,
    tags: ['organologam', 'aturan-18-elektron', 'karbonil-logam', 'ikatan-logam-logam', 'osp-2023'],
    source_event: 'OSP Kimia 2023 No. 22 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (CFT Medan Bujur Sangkar D4h)
  // =========================================================================
  {
    id: 308002,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Teori Medan Kristal Simetri Bujur Sangkar (D4h)',
    title: 'Pembelahan Orbital d Teori Medan Kristal Simetri Bujur Sangkar (D4h)',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Pada kompleks geometri bujur sangkar (square planar, simetri $D_{4h}$) seperti $\\ce{[PtCl4]^{2-}}$ dan $\\ce{[Ni(CN)4]^{2-}}$, empat ligan terletak pada sumbu $x$ dan $y$.

Urutan tingkat energi orbital $d$ dari yang terendah ke yang tertinggi pada medan kristal bujur sangkar adalah:

A. $d_{xy}, d_{xz}, d_{yz} < d_{z^2} < d_{x^2-y^2}$
B. $d_{xz} = d_{yz} < d_{z^2} < d_{xy} < d_{x^2-y^2}$
C. $d_{z^2} < d_{xz} = d_{yz} < d_{x^2-y^2} < d_{xy}$
D. $d_{x^2-y^2} < d_{xy} < d_{z^2} < d_{xz} = d_{yz}$
E. $d_{xz} = d_{yz} < d_{xy} < d_{z^2} < d_{x^2-y^2}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjelasan:**
1. Geometri bujur sangkar ($D_{4h}$) dapat dipandang sebagai turunan dari geometri oktahedral ($O_h$) di mana dua ligan trans pada sumbu $z$ ditarik ke jarak tak hingga (distorsi tetragonal batas ekstrim):
   - Karena tidak ada ligan pada sumbu $z$, orbital-orbital yang memiliki komponen $z$ ($d_{z^2}, d_{xz}, d_{yz}$) mengalami penurunan energi tolakan elektrostatik yang sangat drastis.
   - Ligan terletak tepat pada sumbu $x$ dan $y$. Oleh karena itu, orbital $d_{x^2-y^2}$ yang memiliki cuping langsung mengarah ke ligan mengalami tolakan paling maksimum dan memiliki **energi tertinggi**.
   - Orbital $d_{xy}$ memiliki cuping di antara sumbu $x$ dan $y$ (pada bidang yang sama dengan ligan), sehingga energinya berada di bawah $d_{x^2-y^2}$ namun lebih tinggi daripada orbital dengan komponen $z$.
   - Di antara orbital dengan komponen $z$, $d_{z^2}$ masih memiliki 'donut' densitas elektron pada bidang $xy$, sehingga energinya sedikit lebih tinggi dibandingkan pasangan terdegenerasi $d_{xz}$ dan $d_{yz}$ yang memiliki interaksi tolakan paling minimal.
2. Urutan tingkat energi definitif untuk kompleks bujur sangkar standar:
   $$d_{xz} = d_{yz} < d_{z^2} < d_{xy} \\ll d_{x^2-y^2}$$
   Pemisahan energi antara $d_{xy}$ dan $d_{x^2-y^2}$ didefinisikan sebagai $\\Delta_{\\text{sp}}$, yang sangat besar sehingga ion konfigurasi $d^8$ ($\ce{Pt^{2+}, Pd^{2+}, Ni^{2+}}$ dengan ligan kuat) selalu berkonfigurasi spin rendah dan bersifat diamagnetik (8 elektron mengisi orbital $d_{xz}, d_{yz}, d_{z^2}, d_{xy}$, meninggalkan $d_{x^2-y^2}$ kosong).

**Analisis Distraktor:**
- Pilihan A: Mengelompokkan $d_{xy}$ dengan $d_{xz}/d_{yz}$ seperti pada oktahedral ($t_{2g}$).
- Pilihan B: Benar, $d_{xz}=d_{yz} < d_{z^2} < d_{xy} < d_{x^2-y^2}$.
- Pilihan C & D: Urutan terbalik tidak sesuai dengan posisi elektrostatik ligan.
- Pilihan E: Menukar posisi $d_{xy}$ dan $d_{z^2}$ yang kurang tepat untuk ligan klorida / sianida tipikal.`,
    solution_framework_template: `Tahap 1: Pahami penurunan simetri Oh ke D4h dengan menghilangkan ligan pada sumbu z.
Tahap 2: Identifikasi bahwa orbital dx2-y2 mengarah langsung ke 4 ligan di sumbu x, y sehingga berenergi tertinggi.
Tahap 3: Identifikasi orbital dxy terletak di bidang xy sehingga lebih tinggi dari dz2.
Tahap 4: Susun urutan: dxz = dyz < dz2 < dxy < dx2-y2.`,
    tags: ['cft', 'medan-bujur-sangkar', 'd4h', 'pembelahan-orbital-d'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSP 2022 No. 19 (Efek Trans pada Substitusi Bujur Sangkar Pt(II))
  // =========================================================================
  {
    id: 308003,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Efek Trans pada Substitusi Bujur Sangkar Pt(II)',
    title: 'Sintesis Selektif Isomer Cis dan Trans Kompleks Platina(II) Berdasarkan Efek Trans',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi substitusi ligan pada kompleks bujur sangkar platina(II) dikendalikan oleh efek trans kinetik ligan. Urutan kekuatan efek trans beberapa ligan adalah:
$$\\ce{I- > Br- > Cl- > NH3 > H2O}$$

Seorang kimiawan ingin mensintesis isomer *cis*-diaminadikloroplatina(II) (*cis*-platin, $\\ce{[PtCl2(NH3)2]}$). Rute reaksi manakah yang harus dipilih agar diperoleh isomer *cis* dengan selektivitas tinggi?

A. Mereaksikan $\\ce{[Pt(NH3)4]^{2+}}$ dengan 2 ekuivalen $\\ce{Cl-}$
B. Mereaksikan $\\ce{[PtCl4]^{2-}}$ dengan 2 ekuivalen $\\ce{NH3}$
C. Mereaksikan $\\ce{[PtCl4]^{2-}}$ dengan 1 ekuivalen etilendiamin
D. Memanaskan isomer *trans*-platin dalam pelarut etanol mendidih
E. Mereaksikan $\\ce{[Pt(H2O)4]^{2+}}$ dengan campuran equimolar $\\ce{NH3}$ dan $\\ce{Cl-}$ secara simultan`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Mekanisme Reaksi:**
1. Urutan efek trans: $\\ce{Cl- > NH3}$.
   Ligan dengan efek trans lebih kuat akan mempercepat laju substitusi pada posisi *trans* (berseberangan) terhadap dirinya.
2. Analisis Rute A (dari $\\ce{[Pt(NH3)4]^{2+}} + \\ce{Cl-}$):
   - Tahap 1: $\\ce{[Pt(NH3)4]^{2+} + Cl- -> [PtCl(NH3)3]+ + NH3}$.
   - Tahap 2: Kompleks kini memiliki 1 ligan $\\ce{Cl-}$ dan 3 ligan $\\ce{NH3}$.
     Karena efek trans $\\ce{Cl- > NH3}$, ligan $\\ce{NH3}$ yang terletak tepat *trans* terhadap $\\ce{Cl-}$ akan tersubstitusi jauh lebih cepat oleh $\\ce{Cl-}$ kedua.
     Hasil produk rute A: **ISOMER TRANS** ($\\text{trans-}[\\ce{PtCl2(NH3)2}]$).
3. Analisis Rute B (dari $\\ce{[PtCl4]^{2-}} + \\ce{NH3}$):
   - Tahap 1: $\\ce{[PtCl4]^{2-} + NH3 -> [PtCl3(NH3)]- + Cl-}$.
   - Tahap 2: Kompleks perantara memiliki 1 ligan $\\ce{NH3}$ dan 3 ligan $\\ce{Cl-}$.
     Ketiga ligan $\\ce{Cl-}$ memiliki efek trans lebih kuat daripada $\\ce{NH3}$. Dua ligan $\\ce{Cl-}$ saling trans satu sama lain, mengarahkan substitusi ke posisi *trans* terhadap $\\ce{Cl-}$ (yaitu posisi *cis* terhadap $\\ce{NH3}$).
     Substitusi $\\ce{NH3}$ kedua TIDAK terjadi pada posisi trans terhadap $\\ce{NH3}$ pertama (karena efek trans $\\ce{NH3}$ paling lemah).
     Hasil produk rute B: **ISOMER CIS (CIS-PLATIN)** dengan selektivitas sangat tinggi.

**Analisis Distraktor:**
- Pilihan A: Menghasilkan isomer *trans*-platin.
- Pilihan B: Benar, rute klasik sintesis cis-platin.
- Pilihan C: Etilendiamin adalah ligan bidentat yang membentuk cincin kelat kationik $\\ce{[PtCl2(en)]}$.
- Pilihan D: Isomerisasi termal menghasilkan campuran kesetimbangan.
- Pilihan E: Campuran simultan menghasilkan produk campuran acak polidispers.`,
    solution_framework_template: `Tahap 1: Tinjau urutan efek trans: Cl- > NH3.
Tahap 2: Analisis substitusi tahap kedua pada [PtCl3(NH3)]-: ligan Cl- trans terhadap Cl- lebih labil daripada Cl- trans terhadap NH3.
Tahap 3: Simpulkan bahwa NH3 kedua akan masuk pada posisi cis terhadap NH3 pertama.
Tahap 4: Pilih rute B ([PtCl4]^2- + 2 NH3).`,
    tags: ['efek-trans', 'substitusi-bujur-sangkar', 'cis-platin', 'osp-2022'],
    source_event: 'OSP Kimia 2022 No. 19 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Efek Nephelauxetic & Parameter Racah)
  // =========================================================================
  {
    id: 308004,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Efek Nefelauxetik & Reduksi Parameter Racah (B)',
    title: 'Efek Nefelauxetik dan Reduksi Parameter Tolakan Interelektronik Racah (B)',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Efek nefelauxetik (nephelauxetic effect / 'cloud-expanding') mencerminkan peningkatan karakter kovalensi ikatan antara logam transisi dan ligan, yang diukur melalui rasio parameter tolakan antarelektron Racah:
$$\\beta = \\frac{B_{\\text{kompleks}}}{B_{\\text{ion bebas}}}$$
Untuk ion gas bebas $\\ce{Ni^{2+}}$, parameter Racah adalah $B_0 = 1030\\text{ cm}^{-1}$.

Diberikan nilai parameter $B$ untuk serangkaian kompleks nikel(II) oktahedral:
(1) $\\ce{[Ni(H2O)6]^{2+}}$: $B = 940\\text{ cm}^{-1}$
(2) $\\ce{[Ni(NH3)6]^{2+}}$: $B = 890\\text{ cm}^{-1}$
(3) $\\ce{[Ni(en)3]^{2+}}$: $B = 860\\text{ cm}^{-1}$
(4) $\\ce{[Ni(CN)6]^{4-}}$: $B = 650\\text{ cm}^{-1}$

Manakah kesimpulan yang PALING TEPAT mengenai kovalensi ikatan dan delokalisasi awan elektron pada seri kompleks tersebut?

A. Kompleks $\\ce{[Ni(H2O)6]^{2+}}$ memiliki derajat kovalensi ikatan tertinggi karena $\\beta$ mendekati 1
B. Ligan air menyebabkan ekspansi awan elektron orbital $d$ paling besar
C. Kompleks $\\ce{[Ni(CN)6]^{4-}}$ memiliki karakter kovalensi tertinggi karena nilai $\\beta$ paling kecil ($\beta \\approx 0{,}63$)
D. Nilai $B$ menurun karena polarisabilitas ligan semakin menurun dari $\\ce{H2O}$ ke $\\ce{CN-}$
E. Parameter $B$ tidak berhubungan dengan kovalensi melainkan murni efek elektrostatik muatan inti efektif`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Penjelasan:**
1. Definisi Fisika Parameter Racah $B$:
   - Parameter $B$ mengukur besarnya energi tolakan elektrostatik antarelektron dalam orbital $d$.
   - Pada ion bebas dalam fasa gas, orbital $d$ terlokalisasi rapat di sekitar kation logam, menghasilkan tolakan maksimum ($B_0$).
   - Ketika ligan membentuk ikatan kovalen koordinasi dengan logam, terjadi tumpang-tindih (overlap) orbital ligan dan orbital $d$ logam, menyebabkan awan elektron $d$ berekspansi (nephelauxetic = perluasan awan) ke arah ligan.
   - Akibat perluasan ini, densitas elektron rata-rata berkurang, sehingga tolakan antarelektron berkurang ($B_{\\text{kompleks}} < B_0$, sehingga $\\beta < 1$).
2. Hubungan Nilai $\\beta$ dengan Karakter Kovalensi:
   - Semakin kecil nilai $\\beta$, semakin besar reduksi tolakan antarelektron, yang berarti semakin besar derajat kovalensi dan tumpang-tindih orbital logam-ligan.
   - Untuk $\\ce{[Ni(CN)6]^{4-}}$:
     $$\\beta = \\frac{650}{1030} \\approx 0{,}631$$
     Nilai $\\beta$ ini adalah yang paling kecil di antara seri di atas, membuktikan bahwa ikatan $\\ce{Ni-CN}$ memiliki karakter kovalensi paling dominan (akibat kemampuan donasi $\\sigma$ kuat dan back-bonding $\\pi$).
3. Kesimpulan: Pernyataan C benar.

**Analisis Distraktor:**
- Pilihan A & B: Salah, $\\beta$ mendekati 1 menunjukkan sifat ikatan paling ionik dengan overlap kovalen minimal.
- Pilihan C: Benar.
- Pilihan D: Sianida memiliki polarisabilitas dan donor kovalen yang jauh lebih tinggi daripada air.
- Pilihan E: Parameter Racah adalah ukuran langsung interaksi kuantum tolakan elektron yang dipengaruhi kovalensi.`,
    solution_framework_template: `Tahap 1: Definisikan rasio nefelauxetik beta = B_kompleks / B_ion_bebas.
Tahap 2: Pahami bahwa penurunan nilai B menandakan ekspansi awan elektron (delokalisasi kovalen).
Tahap 3: Hitung beta untuk [Ni(CN)6]^4- = 650/1030 = 0.63.
Tahap 4: Simpulkan bahwa nilai beta terendah menunjukkan derajat kovalensi tertinggi.`,
    tags: ['efek-nefelauxetik', 'parameter-racah', 'kovalensi', 'teori-medan-ligan'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2021 No. 21 (Efek Jahn-Teller Tetragonal Kompleks Cu(II))
  // =========================================================================
  {
    id: 308005,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Teorema Jahn-Teller & Distorsi Tetragonal Statis',
    title: 'Distorsi Tetragonal Statis Akibat Teorema Jahn-Teller pada Kompleks [Cu(H2O)6]2+',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Kristalografik sinar-X pada senyawa tembaga(II) sulfat pentahidrat menunjukkan bahwa kation heksaaquatembaga(II) ($\\ce{[Cu(H2O)6]^{2+}}$) tidak memiliki simetri oktahedral sempurna ($O_h$), melainkan mengalami distorsi tetragonal berupa pemanjangan dua ikatan ligan aksial ($\ce{Cu-O_{aksial}} = 2{,}40\\text{ \AA}$) dan pemendekan empat ikatan ligan ekuatorial ($\ce{Cu-O_{ekuatorial}} = 1{,}97\\text{ \AA}$).

Konfigurasi elektron ion $\ce{Cu^{2+}}$ adalah $d^9$.

Orbital manakah yang menyebabkan terjadinya distorsi tetragonal tersebut, dan apakah konfigurasi elektron orbital medan kristal yang terstabilkan ($z$-out)?

A. Pengisian asimetris pada orbital $t_{2g}$ ($t_{2g}^5 e_g^4$)
B. Pengisian asimetris pada orbital $e_g$ ($t_{2g}^6 (d_{z^2})^2 (d_{x^2-y^2})^1$)
C. Pengisian asimetris pada orbital $e_g$ ($t_{2g}^6 (d_{x^2-y^2})^2 (d_{z^2})^1$)
D. Promosi elektron dari orbital $d$ ke orbital $4s$
E. Hibridisasi $sp^3d^2$ yang mengalami pemisahan medan ligan eksternal`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjelasan:**
1. Teorema Jahn-Teller:
   "Setiap molekul non-linier dalam keadaan elektronik dasar yang terdegenerasi secara orbital tidak stabil, dan akan mengalami distorsi geometris untuk menghilangkan degenerasi tersebut serta menurunkan energi total molekul."
2. Konfigurasi Elektron $\\ce{Cu^{2+}}$ ($d^9$) dalam Medan Oktahedral ($O_h$):
   $$t_{2g}^6 e_g^3$$
   - Subkulit $t_{2g}$ terisi penuh (6 elektron), bersifat simetris.
   - Subkulit $e_g$ terisi 3 elektron ($e_g^3$), yang berarti salah satu orbital ($d_{z^2}$ atau $d_{x^2-y^2}$) berpasangan (2 elektron) dan yang lain terisi tunggal (1 elektron).
   - Karena orbital $e_g$ memiliki cuping yang mengarah langsung ke ligan-ligan, degenerasi orbital pada set $e_g$ menghasilkan efek distorsi Jahn-Teller yang **sangat kuat**.
3. Kasus Elongasi Aksial (Distorsi $z$-out):
   - Jika dua ligan pada sumbu $z$ menjauh (elongasi ikatan aksial menjadi $2{,}40\\text{ \AA}$):
     Tolakan terhadap orbital yang mengandung komponen $z$ berkurang drastis, sehingga energi orbital $d_{z^2}$ turun ke tingkat yang lebih rendah.
   - Konfigurasi terstabilkan:
     2 elektron berpasangan mengisi orbital berenergi lebih rendah ($d_{z^2}$), sedangkan 1 elektron tunggal berada pada orbital berenergi tinggi ($d_{x^2-y^2}$):
     $$(d_{z^2})^2 (d_{x^2-y^2})^1$$
   - Pengurangan energi total stabilisasi Jahn-Teller (JT stabilization energy, $E_{\\text{JT}}$) sebesar $\\frac{1}{2} \\delta_1$.
4. Maka jawaban yang benar adalah Pilihan B.

**Analisis Distraktor:**
- Pilihan A: Mengira distorsi berasal dari set $t_{2g}$ (efek $t_{2g}$ sangat lemah dan sulit teramati secara eksperimen).
- Pilihan B: Benar, konfigurasi $t_{2g}^6 (d_{z^2})^2 (d_{x^2-y^2})^1$.
- Pilihan C: Merupakan konfigurasi kompresi aksial ($z$-in) yang sangat jarang terjadi karena secara sterik kurang menguntungkan.
- Pilihan D & E: Teori usang yang tidak menjelaskan distorsi geometris Jahn-Teller.`,
    solution_framework_template: `Tahap 1: Tuliskan konfigurasi ion Cu2+ (d9) dalam oktahedral Oh: t2g^6 eg^3.
Tahap 2: Identifikasi bahwa degenerasi pada orbital eg (yang mengarah langsung ke ligan) menghasilkan efek Jahn-Teller kuat.
Tahap 3: Kaitkan elongasi aksial (z-out) dengan penurunan energi orbital dz2.
Tahap 4: Tentukan konfigurasi elektron stabil: (dz2)^2 (dx2-y2)^1.`,
    tags: ['jahn-teller', 'distorsi-tetragonal', 'tembaga-ii', 'osp-2021'],
    source_event: 'OSP Kimia 2021 No. 21 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Siklus Katalitik Wilkinson)
  // =========================================================================
  {
    id: 308006,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Siklus Katalitik Katalis Wilkinson pada Hidrogenasi Olefin',
    title: 'Tahapan Siklus Katalitik Katalis Wilkinson pada Hidrogenasi Homogen Alkena',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Katalis Wilkinson, $\\ce{RhCl(PPh3)3}$, adalah kompleks rodium(I) 16-elektron dengan geometri bujur sangkar yang sangat aktif untuk hidrogenasi alkena secara homogen.

Setelah disosiasi satu ligan $\\ce{PPh3}$ menghasilkan intermediat aktif 14-elektron $\\ce{RhCl(PPh3)2}$, urutan tahapan elementer yang benar dalam siklus katalitik hidrogenasi etena ($\ce{CH2=CH2}$) menjadi etana ($\ce{CH3-CH3}$) adalah:

A. Adisi oksidatif $\\ce{H2}$ $\\to$ Koordinasi alkena $\\to$ Insersi migrasi hidrida $\\to$ Eliminasi reduktif alkana
B. Koordinasi alkena $\\to$ Eliminasi reduktif $\\to$ Adisi oksidatif $\\ce{H2}$ $\\to$ Transfer proton
C. Insersi migrasi etena $\\to$ Adisi oksidatif $\\ce{H2}$ $\\to$ Eliminasi $\\beta$-hidrida $\\to$ Pelepasan produk
D. Adisi oksidatif $\\ce{H2}$ $\\to$ Eliminasi $\\beta$-hidrida $\\to$ Koordinasi alkena $\\to$ Disosiasi
E. Substitusi nukleofilik $\\to$ Insersi karbonil $\\to$ Reduksi elektrokimia $\\to$ Protonasi`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Siklus Katalitik:**
1. Tahapan Elementer Siklus Katalitik Wilkinson:
   - **Tahap 1 (Adisi Oksidatif $\\ce{H2}$)**:
     Intermediat 14-elektron $\\ce{Rh^I Cl(PPh3)2}$ bereaksi dengan $\\ce{H2}$ menghasilkan kompleks dihidrido rodium(III) 16-elektron oktahedral terdistorsi:
     $$\\ce{Rh^I Cl(PPh3)2 + H2 -> cis-Rh^{III}Cl(H)2(PPh3)2}$$
     (Tingkat oksidasi naik dari $+1$ ke $+3$, jumlah elektron valensi naik dari 14 ke 16).
   - **Tahap 2 (Koordinasi Alkena)**:
     Alkena ($\ce{CH2=CH2}$) berkoordinasi pada posisi kosong membentuk kompleks $\pi$-alkena 18-elektron.
   - **Tahap 3 (Insersi Migrasi Hidrida / Migratory Insertion)**:
     Salah satu ligan hidrida bermigrasi ke salah satu atom karbon alkena, mengubah ligan $\pi$-alkena menjadi ligan $\sigma$-alkil ($\ce{-CH2-CH3}$), menghasilkan kompleks 16-elektron.
   - **Tahap 4 (Eliminasi Reduktif)**:
     Ligan alkil dan sisa hidrida berikatan membentuk alkana ($\ce{CH3-CH3}$), yang lepas dari pusat logam. Pusat logam kembali ke tingkat oksidasi $\\ce{Rh(I)}$ dan menggenerasi ulang katalis aktif:
     $$\\ce{Rh^{III}(H)(CH2CH3)Cl(PPh3)2 -> CH3CH3 + Rh^I Cl(PPh3)2}$$
2. Urutan yang benar dan terverifikasi secara kinetika adalah:
   **Adisi oksidatif $\\ce{H2} \\to$ Koordinasi alkena $\\to$ Insersi migrasi hidrida $\\to$ Eliminasi reduktif alkana** (Pilihan A).

**Analisis Distraktor:**
- Pilihan B, C, D: Membolak-balik urutan kausalitas reaksi organologam; eliminasi reduktif tidak mungkin terjadi sebelum substrat teraktivasi.
- Pilihan E: Mengandung istilah yang tidak relevan dengan hidrogenasi olefin.`,
    solution_framework_template: `Tahap 1: Identifikasi keadaan awal kompleks aktif Rh(I) d8 14-elektron.
Tahap 2: Tentukan aktivasi hidrogen melalui adisi oksidatif menghasilkan Rh(III) dihidrida.
Tahap 3: Masukkan alkena (koordinasi pi) diikuti insersi migrasi menghasilkan gugus etil.
Tahap 4: Akhiri dengan eliminasi reduktif melepaskan etana dan meregenerasi katalis Rh(I).`,
    tags: ['katalis-wilkinson', 'organologam', 'siklus-katalitik', 'adisi-oksidatif', 'eliminasi-reduktif'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSP 2020 No. 23 (Kontraksi Lantanida & Spektra f-f)
  // =========================================================================
  {
    id: 308007,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kontraksi Lantanida & Karakteristik Spektra f-f',
    title: 'Konsekuensi Kontraksi Lantanida dan Karakteristik Spektra Absorpsi Elektronik f-f',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Kontraksi lantanida merupakan fenomena penurunan jari-jari atomik dan ionik secara kontinu dari lantanum ($\ce{_{57}La}$) hingga lutesium ($\ce{_{71}Lu}$).

Pernyataan manakah yang SALAH mengenai konsekuensi kimiawi dari kontraksi lantanida atau sifat spektra unsur-unsur lantanida?

A. Jari-jari ionik zirkonium ($\ce{Zr^{4+}}$, Golongan 4 Periode 5) dan hafnium ($\ce{Hf^{4+}}$, Golongan 4 Periode 6) hampir identik, menyebabkan keduanya sangat sukar dipisahkan di alam
B. Kerapatan densitas logam-logam transisi Periode 6 (seperti Os, Ir, Pt, Au) melonjak hampir dua kali lipat dibanding logam transisi homolognya di Periode 5
C. Pita-pita serapan elektronik pada spektra UV-Vis kation lantanida trivalen ($\ce{Ln^{3+}}$) bersifat sangat tajam menyerupai garis (line-like spectra) karena orbital $4f$ terlindung oleh subkulit $5s$ dan $5p$
D. Transisi elektronik $f-f$ pada ion $\ce{Ln^{3+}}$ memiliki koefisien ekstingsi molar ($\epsilon$) yang sangat besar ($\epsilon > 10^4\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$) karena diizinkan secara simetri oleh aturan seleksi Laporte
E. Sifat kebebasan (kebasaan) hidroksida lantanida menurun secara bertahap dari $\ce{La(OH)3}$ ke $\ce{Lu(OH)3}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Analisis Konsep & Pembahasan:**
1. Analisis Opsi A & B (Kontraksi Lantanida):
   - Pengisian 14 elektron pada subkulit $4f$ yang memiliki efisiensi pemerisaian (shielding) sangat buruk menyebabkan muatan inti efektif ($Z_{\\text{eff}}$) meningkat tajam.
   - Akibatnya, jari-jari kation periode 6 menciut sehingga $\ce{Hf^{4+}}$ ($0{,}71\\text{ \AA}$) hampir sama persis dengan $\ce{Zr^{4+}}$ ($0{,}72\\text{ \AA}$). Keduanya memiliki sifat geokimia kembar (Opsi A benar).
   - Massa atom meningkat dua kali lipat sementara volume molar menyusut, sehingga densitas $\ce{Os}$ ($22{,}6\\text{ g/cm}^3$) melonjak tajam dibanding $\ce{Ru}$ ($12{,}4\\text{ g/cm}^3$) (Opsi B benar).
2. Analisis Opsi C & D (Spektra $f-f$ Lantanida):
   - Orbital $4f$ merupakan orbital dalam yang tertutup oleh elektron pada subkulit $5s^2 5p^6$. Interaksi medan ligan terhadap orbital $4f$ sangat lemah ($\sim 100\\text{ cm}^{-1}$), sehingga vibrasi ligan tidak memperlebar transisi (pita absorpsi sangat tajam seperti garis) (Opsi C benar).
   - Namun, transisi $f \\to f$ melibatkan nilai $\\Delta l = 0$ (antara orbital dengan paritas sama, *gerade* ke *gerade* atau *ungerade* ke *ungerade*). Berdasarkan **Aturan Seleksi Laporte**, transisi $f-f$ adalah **TERLARANG LAPORTE** (Laporte-forbidden)!
   - Karena terlarang Laporte dan medan ligan tidak cukup kuat untuk mencampur orbital berparitas berbeda, intensitas serapannya SANGAT LEMAH dengan koefisien ekstingsi molar $\\epsilon < 1 - 10\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$ (BUKAN $> 10^4$). Maka pernyataan D **SALAH** (dan menjadi jawaban yang dicari).
3. Analisis Opsi E:
   - Jari-jari ionik $\ce{Lu^{3+}} < \\ce{La^{3+}}$, sehingga polarisasi dan sifat kovalensi ikatan $\ce{Lu-OH}$ lebih tinggi, menjadikan $\ce{Lu(OH)3}$ paling sukar larut dan paling kurang basa (Opsi E benar).

**Analisis Distraktor:**
- Pilihan A, B, C, E: Pernyataan faktual yang benar.
- Pilihan D: Pernyataan yang salah karena transisi $f-f$ terlarang Laporte sehingga nilai $\epsilon$ sangat kecil.`,
    solution_framework_template: `Tahap 1: Evaluasi konsekuensi kontraksi lantanida pada jari-jari Zr/Hf dan densitas periode 6.
Tahap 2: Tinjau aturan seleksi Laporte: transisi dengan Delta l = 0 (f -> f) adalah terlarang secara simetri.
Tahap 3: Simpulkan bahwa intensitas serapan f-f sangat lemah (epsilon kecil < 10), bukan sangat besar.
Tahap 4: Identifikasi bahwa pernyataan D adalah yang salah.`,
    tags: ['kontraksi-lantanida', 'spektra-f-f', 'aturan-laporte', 'anorganik-deskriptif', 'osp-2020'],
    source_event: 'OSP Kimia 2020 No. 23 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Aturan Wade-Mingos Kluster Boran)
  // =========================================================================
  {
    id: 308008,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Aturan Wade-Mingos (PSEPT) pada Kluster Boran',
    title: 'Klasifikasi Geometri Kluster Boran Menggunakan Aturan Wade-Mingos (PSEPT)',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Teori Pasangan Elektron Kerangka Polihedral (Polyhedral Skeletal Electron Pair Theory, PSEPT / Aturan Wade-Mingos) mengklasifikasikan struktur geometri kluster hidrida boron ($\ce{B_n H_m}$) berdasarkan jumlah pasangan elektron kerangka (Skeletal Electron Pairs, SEP):
- Kluster *closo* (sangkar tertutup dengan $n$ verteks polihedral): membutuhkan $n + 1$ pasang elektron kerangka.
- Kluster *nido* (sangkar terbuka kehilangan 1 verteks): membutuhkan $n + 2$ pasang elektron kerangka.
- Kluster *arachno* (sangkar jaring laba-laba kehilangan 2 verteks): membutuhkan $n + 3$ pasang elektron kerangka.

Tiap unit $\ce{B-H}$ menyumbang 2 elektron kerangka, tiap atom $\ce{H}$ jembatan ($\mu\ce{-H}$) menyumbang 1 elektron kerangka, dan tiap muatan negatif $(-)$ menyumbang 1 elektron kerangka.

Berdasarkan aturan tersebut, bagaimanakah klasifikasi berturut-turut untuk spesies kluster $\ce{B6H6^{2-}}$, $\ce{B5H9}$, dan $\ce{B4H10}$?

A. *closo*, *nido*, *arachno*
B. *closo*, *arachno*, *nido*
C. *nido*, *closo*, *arachno*
D. *arachno*, *nido*, *closo*
E. *closo*, *closo*, *nido*`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Perhitungan Elektron Kerangka:**
1. Analisis Spesies 1: $\\ce{B6H6^{2-}}$ ($n = 6$ atom B):
   - $6$ unit $\\ce{B-H} = 6 \\times 2 = 12$ elektron kerangka.
   - Muatan $2- = 2$ elektron.
   - Total elektron kerangka $= 12 + 2 = 14$ elektron $= 7$ pasang elektron kerangka (SEP).
   - Karena $\\text{SEP} = 7 = n + 1$, maka $\\ce{B6H6^{2-}}$ tergolong **CLOSO** (geometri oktahedron sempurna).
2. Analisis Spesies 2: $\\ce{B5H9}$ ($n = 5$ atom B):
   - Formula dapat ditulis sebagai $(\\ce{BH})_5 \\ce{H4}$.
   - $5$ unit $\\ce{B-H} = 5 \\times 2 = 10$ elektron.
   - $4$ hidrogen ekstra $= 4 \\times 1 = 4$ elektron.
   - Total elektron kerangka $= 10 + 4 = 14$ elektron $= 7$ pasang elektron kerangka (SEP).
   - Karena $\\text{SEP} = 7 = 5 + 2 = n + 2$, maka $\\ce{B5H9}$ tergolong **NIDO** (geometri piramida alas persegi, turunan oktahedron yang kehilangan 1 puncak).
3. Analisis Spesies 3: $\\ce{B4H10}$ ($n = 4$ atom B):
   - Formula dapat ditulis sebagai $(\\ce{BH})_4 \\ce{H6}$.
   - $4$ unit $\\ce{B-H} = 4 \\times 2 = 8$ elektron.
   - $6$ hidrogen ekstra $= 6 \\times 1 = 6$ elektron.
   - Total elektron kerangka $= 8 + 6 = 14$ elektron $= 7$ pasang elektron kerangka (SEP).
   - Karena $\\text{SEP} = 7 = 4 + 3 = n + 3$, maka $\\ce{B4H10}$ tergolong **ARACHNO** (geometri sangkar jaring terbuka, turunan oktahedron yang kehilangan 2 puncak).
4. Urutan berturut-turut: **closo, nido, arachno** (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B, C, D, E: Kesalahan menghitung jumlah pasangan elektron kerangka atau membalik aturan $n+1, n+2, n+3$.`,
    solution_framework_template: `Tahap 1: Pahami rumus SEP = (Total elektron valensi kerangka) / 2.
Tahap 2: Hitung SEP untuk B6H6^2- (14e- / 2 = 7 = n+1 -> closo).
Tahap 3: Hitung SEP untuk B5H9 (14e- / 2 = 7 = n+2 -> nido).
Tahap 4: Hitung SEP untuk B4H10 (14e- / 2 = 7 = n+3 -> arachno).`,
    tags: ['aturan-wade', 'psept', 'kluster-boran', 'closo-nido-arachno'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSP 2019 No. 20 (Spektra Transfer Muatan LMCT vs MLCT)
  // =========================================================================
  {
    id: 308009,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Pita Transfer Muatan LMCT vs MLCT & Aturan Laporte',
    title: 'Identifikasi Pita Transfer Muatan Ligan-ke-Logam (LMCT) pada Ion Permanganat',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Larutan kalium permanganat ($\ce{KMnO4}$) memiliki warna ungu sangat pekat dengan koefisien serapan molar luar biasa tinggi ($\epsilon \\approx 2500\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$ pada $\\lambda_{\\max} = 525\\text{ nm}$).
Padahal ion mangan pada permanganat ($\ce{MnO4-}$) memiliki tingkat oksidasi $+7$ dengan konfigurasi elektron valensi $d^0$ (tanpa ada elektron $d$).

Penyebab utama timbulnya warna ungu pekat dan intensitas serapan yang sangat tinggi tersebut adalah:

A. Transisi elektronik $d-d$ yang diperkuat oleh distorsi tetrahedral
B. Perpindahan muatan ligan-ke-logam (Ligand-to-Metal Charge Transfer, LMCT) yang diizinkan Laporte
C. Perpindahan muatan logam-ke-ligan (Metal-to-Ligand Charge Transfer, MLCT)
D. Polarisasi ikatan kovalen oleh kation kalium ($\ce{K+}$) dalam kisi air
E. Eksitasi fluoresensi fotokimia dari pasangan elektron bebas atom oksigen ke pita konduksi`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjelasan:**
1. Mengapa bukan transisi $d-d$?:
   Logam $\\ce{Mn(VII)}$ memiliki konfigurasi $[\ce{Ar}] 3d^0$. Karena tidak ada elektron pada orbital $d$, transisi elektronik internal antar orbital $d$ ($d-d$) adalah MUSTAHIL terjadi secara fisik.
2. Mekanisme Transfer Muatan (Charge Transfer):
   - Pada ion $\\ce{MnO4-}$, empat atom ligan oksida ($\ce{O^{2-}}$) memiliki orbital molekul non-ikatan dan ikatan $\pi$ terisi penuh (densitas elektron tinggi).
   - Logam pusat $\\ce{Mn^{7+}}$ memiliki tingkat oksidasi sangat tinggi, ukuran kation kecil, dan orbital kosong $3d$ dengan energi yang relatif rendah.
   - Foton cahaya tampak mengeksitasi elektron dari orbital molekul non-ikatan berkarakter oksigen ($t_1$) ke orbital molekul kosong berkarakter orbital $d$ mangan ($e$ dan $t_2$).
   - Proses ini merupakan **Ligand-to-Metal Charge Transfer (LMCT)**.
3. Intensitas Serapan Sangat Tinggi:
   Karena elektron berpindah dari orbital $p$ (ligan) ke orbital $d$ (logam), terjadi perubahan momentum sudut orbital $\Delta l = \pm 1$. Transisi ini **DIIZINKAN PENUH OLEH ATURAN SELEKSI LAPORTE** (Laporte-allowed), sehingga menghasilkan nilai $\epsilon$ ribuan kali lebih besar dibanding transisi $d-d$ biasa.

**Analisis Distraktor:**
- Pilihan A: Mustahil karena konfigurasi $d^0$ tidak memiliki elektron $d$.
- Pilihan B: Benar, transisi LMCT diizinkan Laporte.
- Pilihan C: MLCT memerlukan logam bervalensi rendah yang kaya elektron $d$ (seperti $\ce{Fe(II)}$ pada ferroin).
- Pilihan D & E: Penjelasan fiktif yang tidak berbasis spektroskopi elektronik anorganik.`,
    solution_framework_template: `Tahap 1: Identifikasi konfigurasi elektron Mn(VII) adalah d0 (tidak ada elektron d).
Tahap 2: Eliminasi pilihan transisi d-d karena tidak ada elektron d.
Tahap 3: Kenali bahwa transfer elektron dari ligan O2- ke logam Mn(VII) adalah LMCT.
Tahap 4: Hubungkan intensitas tinggi dengan aturan seleksi Laporte yang diizinkan (Delta l = +/- 1).`,
    tags: ['lmct', 'transfer-muatan', 'permanganat', 'aturan-laporte', 'osp-2019'],
    source_event: 'OSP Kimia 2019 No. 20 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Efek Makrosiklik Eter Mahkota)
  // =========================================================================
  {
    id: 308010,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Efek Makrosiklik & Selektivitas Rongga Eter Mahkota',
    title: 'Efek Makrosiklik dan Selektivitas Rongga Eter Mahkota 18-Crown-6 terhadap Ion Kalium',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Senyawa eter mahkota 18-crown-6 ($1{,}4{,}7{,}10{,}13{,}16\\text{-heksaoksasiklooktadekana}$) memiliki rongga sentral hidrofilik yang dikelilingi oleh 6 atom oksigen eter, dengan diameter rongga terukur sebesar $2{,}6 - 3{,}2\\text{ \AA}$.
Diberikan diameter ionik beberapa kation logam alkali:
- $\\ce{Li+}$: $1{,}52\\text{ \AA}$
- $\\ce{Na+}$: $2{,}04\\text{ \AA}$
- $\\ce{K+}$: $2{,}76\\text{ \AA}$
- $\\ce{Cs+}$: $3{,}34\\text{ \AA}$

Manakah pernyataan yang PALING TEPAT mengenai termodinamika kompleksasi dan selektivitas kation oleh 18-crown-6?

A. 18-crown-6 mengikat ion $\\ce{Li+}$ paling kuat karena rapat muatan kation $\\ce{Li+}$ paling besar
B. Konstanta pembentukan kompleks ($K_f$) tertinggi terjadi pada kation $\\ce{K+}$ karena kecocokan ukuran kation yang optimal dengan dimensi rongga makrosiklik (size-match principle)
C. Efek makrosiklik menyebabkan kompleks dengan ligan asiklik (seperti pentaetilen glikol) jauh lebih stabil dibanding eter mahkota siklik
D. Entropi pembentukan kompleks ($\Delta S^\circ$) bernilai sangat negatif karena molekul eter mahkota kehilangan fleksibilitas konformasi secara total
E. Kation $\\ce{Cs+}$ membentuk kompleks paling stabil melalui koordinasi tetrahedral di dalam rongga`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjelasan:**
1. Prinsip Kecocokan Ukuran (Size-Match Principle):
   - Senyawa makrosiklik seperti eter mahkota memiliki rongga pre-organisasi yang kaku.
   - Diameter rongga 18-crown-6 adalah $2{,}6 - 3{,}2\\text{ \AA}$.
   - Diameter kation $\\ce{K+}$ adalah $2{,}76\\text{ \AA}$, yang berada tepat di tengah rentang optimal ukuran rongga.
   - Hal ini memungkinkan keenam atom donor oksigen berinteraksi serentak dengan kation $\\ce{K+}$ pada jarak ikatan donor-akseptor yang ideal, memberikan konstanta kestabilan kompleks ($K_f$) yang paling tinggi (selektivitas $\\ce{K+} \\gg \\ce{Na+} > \\ce{Li+}$).
2. Efek Makrosiklik (Macrocyclic Effect):
   - Kompleks dengan ligan makrosiklik memiliki kestabilan termodinamika yang jauh lebih tinggi (hingga faktor $10^4$) dibandingkan ligan asiklik serupa karena ligan makrosiklik sudah 'terorganisir sebelumnya' (preorganized), sehingga penalti entropi konformasi saat pembentukan kompleks jauh lebih kecil.
3. Kesimpulan: Pernyataan B adalah yang paling tepat.

**Analisis Distraktor:**
- Pilihan A: Rapat muatan tinggi $\\ce{Li+}$ tidak dapat mengatasi mismatch ukuran (terlalu kecil sehingga atom oksigen tidak dapat mengoordinasikan secara optimal tanpa distorsi konformasi).
- Pilihan B: Benar.
- Pilihan C: Berlawanan dengan definisi efek makrosiklik.
- Pilihan D: Efek makrosiklik justru mengurangi penalti entropi negatif dibanding ligan fleksibel.
- Pilihan E: Kation $\\ce{Cs+}$ terlalu besar untuk masuk sempurna ke dalam rongga.`,
    solution_framework_template: `Tahap 1: Bandingkan diameter rongga 18-crown-6 (2.6 - 3.2 Å) dengan diameter ion alkali.
Tahap 2: Kenali bahwa ion K+ (2.76 Å) memiliki ukuran yang paling pas (size-match).
Tahap 3: Hubungkan kecocokan ukuran dengan konstanta kestabilan Kf maksimum.
Tahap 4: Simpulkan keunggulan selektivitas K+ pada eter mahkota 18-crown-6.`,
    tags: ['eter-mahkota', '18-crown-6', 'efek-makrosiklik', 'kimia-supramolekuler'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
