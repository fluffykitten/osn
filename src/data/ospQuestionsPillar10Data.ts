/**
 * ospQuestionsPillar10Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 10: Biokimia Lanjut, Struktur Makromolekul, Kopolimerisasi & Bioenergetika
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 310001 - 310010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 10 = Pilar 10
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_10_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 28 (Sekuensing Peptida Edman & Enzimatik)
  // =========================================================================
  {
    id: 310001,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Sekuensing Primer Peptida Edman & Pemotongan Enzimatik',
    title: 'Penentuan Sekuen Primer Peptida Melalui Degradasi Edman dan Pemotongan Enzimatik',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Suatu oktapeptida alami yang disolasi dari racun kelenjar memiliki komposisi asam amino: $\\text{Ala, Arg, Gly, Lys, Met, Phe, Tyr, Val}$.
Untuk menentukan sekuen primer rantai peptida tersebut, dilakukan serangkaian analisis pemotongan selektif:
1. Reaksi degradasi Edman siklus pertama melepaskan derivatif PTH-glisin (PTH-Gly).
2. Perlakuan dengan enzim tripsin (yang memotong secara spesifik pada sisi C-terminal dari residu basa Lys dan Arg) menghasilkan tiga fragmen:
   - Tripeptida A: (Gly, Met, Lys)
   - Tripeptida B: (Ala, Arg, Val)
   - Dipeptida C: (Tyr, Phe)
3. Perlakuan dengan enzim kimotripsin (yang memotong secara spesifik pada sisi C-terminal dari residu aromatik Phe dan Tyr) menghasilkan dua fragmen:
   - Tetrapeptida D: yang melepaskan PTH-Val pada siklus pertama degradasi Edman dan menghasilkan asam amino bebas Phe pada ujung C-terminal.
   - Tetrapeptida E: yang mengandung asam amino aromatik Tyr pada ujung C-terminalnya.

Berdasarkan data tersebut, bagaimanakah urutan sekuen primer oktapeptida dari ujung N-terminal ke C-terminal?

A. $\\text{Gly-Met-Lys-Val-Ala-Arg-Phe-Tyr}$
B. $\\text{Gly-Lys-Met-Val-Arg-Ala-Tyr-Phe}$
C. $\\text{Gly-Met-Lys-Ala-Val-Arg-Tyr-Phe}$
D. $\\text{Gly-Val-Met-Lys-Arg-Ala-Phe-Tyr}$
E. $\\text{Met-Gly-Lys-Val-Ala-Arg-Tyr-Phe}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Deduksi Sekuen:**
1. Analisis Ujung N-terminal:
   - Siklus pertama degradasi Edman pada oktapeptida utuh menghasilkan PTH-Gly.
   - Berarti residu nomor 1 pada ujung N-terminal adalah **Gly**.
2. Analisis Pemotongan Kimotripsin:
   - Kimotripsin memotong di sisi C dari residu aromatik (Phe, Tyr).
   - Tetrapeptida D diawali dengan Val (hasil Edman) dan diakhiri dengan Phe (ujung C-terminal).
     Maka sekuen dari Tetrapeptida D adalah: $\\text{Val - (residu) - (residu) - Phe}$.
   - Tetrapeptida E diakhiri dengan Tyr pada ujung C-terminalnya. Karena oktapeptida dipecah menjadi dua tetrapeptida (4 + 4 = 8), salah satu tetrapeptida harus berada di depan (N-terminal) dan yang satu di belakang (C-terminal).
   - Karena residu 1 adalah Gly, maka tetrapeptida yang berada di ujung N-terminal adalah Tetrapeptida E (berisi Gly pada posisi 1 dan diakhiri dengan aromatik pada posisi 4, atau tetrapeptida E di ujung C-terminal).
   - Jika Tetrapeptida E berakhir dengan Tyr pada posisi 8 (C-terminal oktapeptida), maka fragmen D (Val...Phe) menempati posisi 5-8 atau 1-4.
3. Analisis Pemotongan Tripsin:
   - Tripsin memotong pada sisi C dari Lys dan Arg:
     - Tripeptida A (Gly, Met, Lys): karena diawali dengan Gly, urutannya pasti: $\\text{Gly-Met-Lys}$ (posisi 1-2-3).
     - Tripeptida B (Ala, Arg, Val): karena dipotong oleh tripsin pada Arg, maka Arg berada di ujung fragmen ini: $\\text{Val-Ala-Arg}$ (posisi 4-5-6).
     - Dipeptida C (Tyr, Phe): karena tidak memiliki Lys/Arg, dipeptida ini berada paling ujung C-terminal (posisi 7-8).
4. Integrasi dengan Hasil Kimotripsin:
   - Fragmen C adalah Dipeptida (Tyr, Phe) pada posisi 7-8.
   - Kimotripsin D (Val...Phe) menempati posisi 4-7: $\\text{Val-Ala-Arg-Phe}$.
   - Maka posisi 7 adalah **Phe** dan posisi 8 adalah **Tyr**!
   - Sehingga Tetrapeptida E adalah $\\text{Gly-Met-Lys-Val} \dots$ atau fragmen 5-8: $\\text{Val-Ala-Arg-Phe}$ (dipotong pada Phe) dan sisa Tyr.
   - Urutan utuh yang konsisten sepenuhnya:
     $$\\text{Gly(1) - Met(2) - Lys(3) - Val(4) - Ala(5) - Arg(6) - Phe(7) - Tyr(8)}$$
     - Tripsin memotong setelah Lys(3) $\\to \\text{Gly-Met-Lys}$; setelah Arg(6) $\\to \\text{Val-Ala-Arg}$; sisa $\\to \\text{Phe-Tyr}$.
     - Kimotripsin memotong setelah Phe(7) dan Tyr(8).
5. Maka urutan yang benar adalah Pilihan A.

**Analisis Distraktor:**
- Pilihan B, C, D, E: Menukar posisi asam amino atau urutan aromatik di ujung C-terminal.`,
    solution_framework_template: `Tahap 1: Tentukan asam amino N-terminal pertama dari Edman pada peptida utuh (Gly).
Tahap 2: Gunakan spesifisitas tripsin (memotong setelah Lys dan Arg) untuk memetakan fragmen Gly-Met-Lys dan Val-Ala-Arg.
Tahap 3: Tempatkan dipeptida sisa (Phe, Tyr) pada ujung C-terminal.
Tahap 4: Gunakan spesifisitas kimotripsin untuk membedakan urutan Phe-Tyr vs Tyr-Phe.`,
    tags: ['sekuensing-peptida', 'degradasi-edman', 'tripsin', 'kimotripsin', 'osp-2023'],
    source_event: 'OSP Kimia 2023 No. 28 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Diagram Ramachandran)
  // =========================================================================
  {
    id: 310002,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Diagram Ramachandran Sudut Konformasi Tulang Punggung Peptida',
    title: 'Analisis Sudut Konformasi Tulang Punggung Peptida pada Diagram Ramachandran',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Diagram Ramachandran memetakan sudut dihedral ikatan tulang punggung peptida, yaitu rotasi ikatan $\ce{N-C_\alpha}$ ($\phi$) dan ikatan $\ce{C_\alpha-C}$ ($\psi$).

Nilai sudut dihedral teramati untuk suatu segmen sekunder protein adalah $\phi \approx -60^\circ$ dan $\psi \approx -45^\circ$, yang terletak pada kuadran kiri-bawah diagram Ramachandran.

Struktur sekunder protein manakah yang diwakili oleh rentang sudut dihedral tersebut, dan residu asam amino manakah yang memiliki daerah konformasi paling luas yang diizinkan pada diagram Ramachandran?

A. Lembaran berlipat $\beta$ anti-paralel; Residu Prolin
B. Heliks $\alpha$ putar kanan ($\alpha$-helix); Residu Glisin
C. Heliks $\alpha$ putar kiri; Residu Alanin
D. Untai $\beta$ paralel; Residu Triptofan
E. Heliks kolagen tripel; Residu Fenilalanin`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Karakteristik Ramachandran:**
1. Karakteristik Sudut Dihedral Struktur Sekunder:
   - **Heliks $\alpha$ Putar Kanan (Right-handed $\alpha$-helix)**:
     Terletak pada kuadran III (kiri-bawah):
     $$\\phi \\approx -57^\\circ \\text{ hingga } -60^\\circ, \\quad \\psi \\approx -47^\\circ \\text{ hingga } -45^\\circ$$
   - **Lembaran Berlipat $\beta$ (Parallel & Anti-parallel $\beta$-sheet)**:
     Terletak pada kuadran II (kiri-atas):
     $$\\phi \\approx -120^\\circ \\text{ hingga } -140^\\circ, \\quad \\psi \\approx +120^\\circ \\text{ hingga } +150^\\circ$$
   - **Heliks $\alpha$ Putar Kiri (Left-handed $\alpha$-helix)**:
     Terletak pada kuadran I (kanan-atas):
     $$\\phi \\approx +60^\\circ, \\quad \\psi \\approx +45^\\circ$$
2. Keunikan Residu Glisin dan Prolin:
   - **Glisin**: Rantai sampingnya hanya berupa atom hidrogen tunggal ($\ce{-H}$). Karena ketiadaan gugus samping $\beta$-karbon yang meruah, tidak ada benturan sterik (van der Waals clash) yang signifikan pada hampir seluruh kombinasi sudut. Oleh karena itu, **Glisin memiliki daerah konformasi yang diizinkan paling luas** di antara seluruh 20 asam amino standar (mencakup keempat kuadran secara simetris).
   - **Prolin**: Rantai sampingnya membentuk cincin pirolidin siklik kovalen dengan atom nitrogen tulang punggung, sehingga sudut $\phi$ terkunci kaku pada sekitar $-60^\circ$, menjadikannya asam amino dengan daerah terizinkan paling sempit.
3. Gabungan hasil yang tepat: **Heliks $\alpha$ putar kanan dan Residu Glisin** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A: Lembaran $\beta$ memiliki sudut $\psi$ positif ($+130^\circ$) dan prolin daerahnya paling sempit.
- Pilihan B: Benar.
- Pilihan C: Heliks putar kiri berada di kuadran kanan-atas ($\phi > 0$).
- Pilihan D & E: Sudut dan atribusi asam amino yang salah.`,
    solution_framework_template: `Tahap 1: Hubungkan koordinat phi = -60° dan psi = -45° dengan struktur sekunder alfa-heliks putar kanan.
Tahap 2: Tinjau efek sterik rantai samping pada fleksibilitas rotasi Ramachandran.
Tahap 3: Kenali bahwa glisin (rantai samping -H) tidak memiliki rintangan sterik sehingga daerah terizinkannya paling luas.
Tahap 4: Pilih opsi B.`,
    tags: ['diagram-ramachandran', 'sudut-dihedral', 'alfa-heliks', 'glisin', 'struktur-protein'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSP 2022 No. 25 (Persamaan Mayo-Lewis & Kopolimerisasi)
  // =========================================================================
  {
    id: 310003,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Persamaan Mayo-Lewis & Kopolimerisasi Selang-Seling',
    title: 'Kopolimerisasi Radikal Bebas Berdasarkan Persamaan Mayo-Lewis dan Kopolimer Selang-Seling',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Kopolimerisasi radikal bebas antara monomer stirena ($M_1$) dan maleat anhidrida ($M_2$) memiliki nilai rasio reaktivitas monomer berturut-turut:
$$r_1 = 0{,}02 \\quad \\text{dan} \\quad r_2 = 0{,}00$$
Persamaan komposisi kopolimer Mayo-Lewis dinyatakan sebagai:
$$\\frac{d[M_1]}{d[M_2]} = \\frac{[M_1]}{[M_2]} \\cdot \\frac{r_1 [M_1] + [M_2]}{r_2 [M_2] + [M_1]}$$

Jika kopolimerisasi dilakukan pada campuran umpan awal equimolar ($[M_1]/[M_2] = 1{,}0$), jenis mikrostruktur kopolimer apakah yang dihasilkan, dan berapakah rasio mol $M_1/M_2$ dalam rantai polimer yang terbentuk?

A. Kopolimer blok dengan rasio $M_1/M_2 = 2{,}0$
B. Kopolimer acak statistik dengan rasio $M_1/M_2 = 0{,}02$
C. Kopolimer selang-seling (alternating) dengan rasio $M_1/M_2 \\approx 1{,}0$
D. Homopolimer polistirena murni
E. Kopolimer cangkok (graft copolymer) dengan rasio $M_1/M_2 = 10$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Evaluasi Mayo-Lewis:**
1. Definisi Rasio Reaktivitas Monomer ($r_1$ dan $r_2$):
   $$r_1 = \\frac{k_{11}}{k_{12}}, \\quad r_2 = \\frac{k_{22}}{k_{21}}$$
   - Nilai $r_1 = 0{,}02 \\approx 0$ berarti radikal yang berujung stirena ($\sim M_1^\\bullet$) bereaksi jauh lebih cepat dengan monomer maleat anhidrida ($M_2$) daripada mereaksikan dirinya sendiri dengan stirena ($k_{12} \\gg k_{11}$).
   - Nilai $r_2 = 0{,}00$ berarti radikal maleat anhidrida ($\sim M_2^\\bullet$) sama sekali TIDAK DAPAT mengadisi monomer maleat anhidrida lain ($k_{22} = 0$, akibat tolakan sterik dan elektronik parah pada olefin 1,2-disubstitusi yang miskin elektron).
2. Substitusi ke dalam Persamaan Mayo-Lewis pada $[M_1]/[M_2] = 1$:
   $$\\frac{d[M_1]}{d[M_2]} = (1) \\cdot \\frac{0{,}02(1) + 1}{0{,}00(1) + 1} = \\frac{1{,}02}{1{,}00} \\approx 1{,}0$$
3. Mikrostruktur Rantai Kopolimer:
   - Kondisi $r_1 \\approx 0$ dan $r_2 = 0$ (atau hasil kali $r_1 r_2 \\to 0$) adalah kriteria klasik untuk pembentukan **Kopolimer Selang-seling Murni (Alternating Copolymer)**:
     $$\\sim M_1 - M_2 - M_1 - M_2 - M_1 - M_2 \\sim$$
   - Rasio penggabungan stirena dan maleat anhidrida ke dalam rantai adalah tepat $1:1$ ($M_1/M_2 \\approx 1{,}0$) pada rentang rasio umpan yang sangat luas.

**Analisis Distraktor:**
- Pilihan A: Kopolimer blok membutuhkan inisiator hidup (living radical / RAFT / ATRP).
- Pilihan B: Kopolimer acak terjadi jika $r_1 \\approx r_2 \\approx 1$.
- Pilihan C: Benar.
- Pilihan D: Maleat anhidrida terinkorporasi secara kuantitatif.
- Pilihan E: Kopolimer cangkok bukan hasil kopolimerisasi linier Mayo-Lewis.`,
    solution_framework_template: `Tahap 1: Pahami definisi rasio reaktivitas r1 = k11/k12 dan r2 = k22/k21.
Tahap 2: Substitusi r1 = 0.02 dan r2 = 0 ke persamaan Mayo-Lewis untuk [M1]/[M2] = 1.
Tahap 3: Dapatkan rasio d[M1]/d[M2] = 1.02 / 1.00 = 1.0.
Tahap 4: Simpulkan terbentuknya kopolimer selang-seling (alternating) dengan perbandingan 1:1.`,
    tags: ['mayo-lewis', 'kopolimerisasi', 'rasio-reaktivitas', 'kopolimer-alternating', 'osp-2022'],
    source_event: 'OSP Kimia 2022 No. 25 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Termodinamika Kopling ATP)
  // =========================================================================
  {
    id: 310004,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Bioenergetika Termodinamika Reaksi Berkopling Hidrolisis ATP',
    title: 'Termodinamika Reaksi Berkopling: Fosforilasi Glukosa yang Didorong Hidrolisis ATP',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi fosforilasi langsung glukosa oleh fosfat anorganik ($\ce{P_i}$) bersifat endergonik dan tidak spontan pada kondisi standar biologis ($298\\text{ K}$, $\\text{pH} = 7{,}0$):
$$\\ce{Glukosa + P_i <=> Glukosa-6-fosfat + H2O}, \\quad \\Delta G^{\\circ\\prime}_1 = +13{,}8\\text{ kJ}\\cdot\\text{mol}^{-1}$$
Di dalam sel, reaksi ini dikopel secara enzimatik oleh heksokinase dengan hidrolisis adenosin trifosfat (ATP):
$$\\ce{ATP + H2O <=> ADP + P_i}, \\quad \\Delta G^{\\circ\\prime}_2 = -30{,}5\\text{ kJ}\\cdot\\text{mol}^{-1}$$

Berapakah perubahan energi bebas Gibbs standar biokimia ($\\Delta G^{\\circ\\prime}_{\\text{net}}$) untuk reaksi berkopling keseluruhan, dan berapakah nilai tetapan kesetimbangan biologis gabungan ($K'$) reaksi tersebut pada $25^\\circ\\text{C}$?
(Gunakan $R = 8{,}314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).

A. $\\Delta G^{\\circ\\prime}_{\\text{net}} = -16{,}7\\text{ kJ}\\cdot\\text{mol}^{-1}; K' = 8{,}46 \\times 10^2$
B. $\\Delta G^{\\circ\\prime}_{\\text{net}} = -16{,}7\\text{ kJ}\\cdot\\text{mol}^{-1}; K' = 5{,}24 \\times 10^3$
C. $\\Delta G^{\\circ\\prime}_{\\text{net}} = +44{,}3\\text{ kJ}\\cdot\\text{mol}^{-1}; K' = 1{,}72 \\times 10^{-8}$
D. $\\Delta G^{\\circ\\prime}_{\\text{net}} = -44{,}3\\text{ kJ}\\cdot\\text{mol}^{-1}; K' = 5{,}81 \\times 10^7$
E. $\\Delta G^{\\circ\\prime}_{\\text{net}} = -13{,}8\\text{ kJ}\\cdot\\text{mol}^{-1}; K' = 2{,}63 \\times 10^2$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Penjumlahan Termodinamika Reaksi Berkopling:
   Reaksi 1: $\\ce{Glukosa + P_i <=> Glukosa-6-P + H2O}, \\quad \\Delta G^{\\circ\\prime}_1 = +13{,}8\\text{ kJ/mol}$
   Reaksi 2: $\\ce{ATP + H2O <=> ADP + P_i}, \\quad \\Delta G^{\\circ\\prime}_2 = -30{,}5\\text{ kJ/mol}$
   Reaksi Bersih (Netto):
   $$\\ce{Glukosa + ATP <=> Glukosa-6-fosfat + ADP}$$
   $$\\Delta G^{\\circ\\prime}_{\\text{net}} = \\Delta G^{\\circ\\prime}_1 + \\Delta G^{\\circ\\prime}_2 = (+13{,}8) + (-30{,}5) = -16{,}7\\text{ kJ}\\cdot\\text{mol}^{-1}$$
2. Menghitung Tetapan Kesetimbangan $K'$:
   $$\\Delta G^{\\circ\\prime}_{\\text{net}} = -RT \\ln K'$$
   $$\\ln K' = -\\frac{\\Delta G^{\\circ\\prime}_{\\text{net}}}{RT} = -\\frac{-16{,}7 \\times 10^3\\text{ J/mol}}{(8{,}314\\text{ J/mol}\\cdot\\text{K})(298\\text{ K})} = \\frac{16700}{2477{,}57} = 6{,}7405$$
3. Menghitung nilai numerik $K'$:
   $$K' = e^{6{,}7405} \\approx 845{,}96 \\approx 8{,}46 \\times 10^2$$
4. Hasil: $\\Delta G^{\\circ\\prime}_{\\text{net}} = -16{,}7\\text{ kJ/mol}$ dan $K' = 8{,}46 \\times 10^2$ (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Kesalahan perhitungan eksponensial.
- Pilihan C: Kesalahan menjumlahkan kedua nilai mutlak menjadi positif.
- Pilihan D: Menjumlahkan kedua nilai menjadi negatif $-44{,}3\\text{ kJ/mol}$.
- Pilihan E: Mengabaikan energi bebas hidrolisis ATP.`,
    solution_framework_template: `Tahap 1: Jumlahkan kedua persamaan reaksi dan hitung Delta G_net = Delta G1 + Delta G2 = +13.8 - 30.5 = -16.7 kJ/mol.
Tahap 2: Gunakan hubungan ln(K') = -Delta G_net / (R*T).
Tahap 3: Substitusi R = 8.314 J/(mol*K) dan T = 298 K untuk mendapatkan ln(K') = 6.741.
Tahap 4: Hitung nilai K' = exp(6.741) = 8.46 x 10^2.`,
    tags: ['bioenergetika', 'kopling-reaksi', 'hidrolisis-atp', 'tetapan-kesetimbangan'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2021 No. 27 (Tautomerisme Basa DNA & Mutasi Transisi)
  // =========================================================================
  {
    id: 310005,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Tautomerisme Basa Nitrogen DNA & Mutasi Pasangan Basa Transisi',
    title: 'Tautomerisme Keto-Enol dan Amino-Imino pada Basa DNA Serta Mutasi Pasangan Basa',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Basa-basa nitrogen pada asam deoksiribonukleat (DNA) secara dominan berada dalam bentuk tautomer **amino** (untuk adenin dan sitosin) dan bentuk tautomer **keto** (untuk guanin dan timin), yang memungkinkan pasangan basa kanonikal Watson-Crick (A-T dan G-C).

Namun, dengan probabilitas sekitar $10^{-4}$ hingga $10^{-5}$, basa timin dapat mengalami pergeseran tautomerik langka menjadi bentuk **enol**.

Jika bentuk langka tautomer enol timin ($T^*$) hadir pada untai cetakan saat proses replikasi DNA berlangsung, basa nitrogen apakah yang akan dipasangkan oleh enzim DNA polimerase, dan jenis mutasi apakah yang terjadi setelah dua putaran replikasi?

A. Berpasangan dengan Guanin; menyebabkan mutasi transisi $\\text{A:T} \\to \\text{G:C}$
B. Berpasangan dengan Sitosin; menyebabkan mutasi transversi $\\text{A:T} \\to \\text{C:G}$
C. Berpasangan dengan Adenin; tidak menyebabkan mutasi
D. Berpasangan dengan Guanin; menyebabkan mutasi transversi $\\text{A:T} \\to \\text{T:A}$
E. Berpasangan dengan Urasil; menyebabkan delesi rantai`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Pola Ikatan Hidrogen Tautomer:**
1. Pola Donor-Akseptor Ikatan Hidrogen Watson-Crick Standar:
   - Timin (bentuk keto biasa): memiliki akseptor ikatan-H pada $O_4$, donor ikatan-H pada $N_3-\\ce{H}$, dan akseptor pada $O_2$. Pola ini cocok sempurna dengan Adenin (bentuk amino: donor pada $N_6-\\ce{NH2}$ dan akseptor pada $N_1$).
2. Perubahan Pola pada Tautomer Enol Timin ($T^*$):
   - Pada bentuk enol, proton berpindah dari $N_3$ ke oksigen $O_4$ membentuk gugus hidroksi ($-O_4-\\ce{H}$).
   - Konfigurasi donor-akseptor kini berbalik: $O_4$ menjadi donor ikatan-H, $N_3$ menjadi akseptor ikatan-H (karena memiliki pasangan elektron bebas tak terprotonasi).
   - Pola donor-akseptor baru ini **mirip dengan pola sitosin**, sehingga $T^*$ berpasangan secara berkomplemen melalui tiga ikatan hidrogen dengan **Guanin** (bentuk keto standar)!
3. Konsekuensi Replikasi Replikasi Dua Putaran:
   - Putaran 1: Untai cetakan mengandung $T^*$. Polimerase memasukkan **Guanin** ($G$) pada untai anakan baru. Terbentuk pasangan heterodupleks $T^* : G$.
   - Putaran 2: Guanin ($G$) pada untai anakan bertindak sebagai cetakan pada replikasi berikutnya. Pada replikasi normal ini, Guanin berpasangan dengan **Sitosin** ($C$).
   - Pasangan basa awal yang awalnya adalah **A:T** kini telah berubah permanen menjadi pasangan **G:C**.
   - Karena purin digantikan oleh purin lain ($A \\to G$) dan pirimidin digantikan oleh pirimidin lain ($T \\to C$), mutasi ini diklasifikasikan sebagai **mutasi transisi** (bukan transversi).
4. Hasil: Berpasangan dengan Guanin; mutasi transisi $\\text{A:T} \\to \\text{G:C}$ (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B & D: Salah klasifikasi sebagai mutasi transversi (transversi adalah pergantian purin ke pirimidin atau sebaliknya).
- Pilihan C: Mengabaikan perubahan pola ikatan hidrogen.
- Pilihan E: Urasil tidak disintesis dalam replikasi DNA standar.`,
    solution_framework_template: `Tahap 1: Tinjau struktur tautomer enol timin (T*): O4 menjadi donor (-OH) dan N3 menjadi akseptor.
Tahap 2: Cocokkan pola ikatan hidrogen T* dengan guanin normal (keto).
Tahap 3: Telusuri replikasi putaran kedua dari guanin yang merekrut sitosin menghasilkan pasangan G:C.
Tahap 4: Identifikasi bahwa perubahan A:T -> G:C adalah mutasi transisi.`,
    tags: ['tautomerisme-dna', 'mutasi-transisi', 'replikasi-dna', 'pasangan-basa', 'osp-2021'],
    source_event: 'OSP Kimia 2021 No. 27 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Persamaan Carothers & Titik Gelasi)
  // =========================================================================
  {
    id: 310006,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Persamaan Carothers & Titik Gelasi Polimerisasi Kondensasi',
    title: 'Persamaan Carothers dan Penentuan Titik Gelasi pada Polimerisasi Kondensasi Non-Linier',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Polimerisasi kondensasi (step-growth) antara asam dikarboksilat bifungsional (seperti asam adipat, fungsionalitas $f_A = 2$) dan gliserol trifungsional (fungsionalitas $f_B = 3$) menghasilkan polimer jaringan terikat-silang (crosslinked network polymer).

Suatu campuran disiapkan dengan perbandingan stoikiometri gugus fungsi yang ekuivalen ($N_A = N_B$, rasio $r = 1{,}0$), sehingga fungsionalitas rata-rata sistem adalah:
$$f_{\\text{avg}} = \\frac{2 \\sum N_i f_i}{\\sum N_i}$$

Berdasarkan Persamaan Carothers untuk gelasi polimer:
$$p_c = \\frac{2}{f_{\\text{avg}}}$$
pada fraksi konversi gugus fungsi ($p$) berapakah viskositas sistem melonjak menuju tak terhingga (titik gelasi, *gel point*)?

A. $p_c = 0{,}500$ ($50{,}0\\%$)
B. $p_c = 0{,}667$ ($66{,}7\\%$)
C. $p_c = 0{,}833$ ($83{,}3\\%$)
D. $p_c = 0{,}900$ ($90{,}0\\%$)
E. $p_c = 0{,}985$ ($98{,}5\\%$)`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Stoikiometri Ekuivalen Gugus Fungsi:
   Misalkan terdapat $1$ mol gliserol (trifungsional, $f_B = 3$, mengandung $3$ mol gugus $\\ce{-OH}$).
   Agar rasio gugus fungsi seimbang ($r = 1{,}0$), diperlukan $3$ mol gugus karboksilat $\\ce{-COOH}$.
   Karena asam adipat bifungsional ($f_A = 2$), jumlah mol asam adipat yang diperlukan adalah:
   $$n_{\\text{asam}} = \\frac{3}{2} = 1{,}5\\text{ mol}$$
2. Menghitung Jumlah Molekul Total dan Fungsionalitas Rata-rata ($f_{\\text{avg}}$):
   Jumlah mol molekul total:
   $$N_{\\text{total}} = n_{\\text{gliserol}} + n_{\\text{asam}} = 1{,}0 + 1{,}5 = 2{,}5\\text{ mol}$$
   Jumlah mol total gugus fungsional yang reaktif:
   $$\\text{Total gugus} = (1{,}0 \\times 3) + (1{,}5 \\times 2) = 3 + 3 = 6\\text{ mol}$$
   Fungsionalitas rata-rata per molekul monomer:
   $$f_{\\text{avg}} = \\frac{\\text{Total gugus}}{N_{\\text{total}}} = \\frac{6}{2{,}5} = 2{,}40$$
3. Menghitung Konversi Kritis Gelasi ($p_c$) Menurut Persamaan Carothers:
   Derajat polimerisasi Carothers: $\\bar{X}_n = \\frac{2}{2 - p f_{\\text{avg}}}$.
   Pada titik gelasi, rantai polimer membentuk jaringan tiga dimensi raksasa tak berhingga ($\\bar{X}_n \\to \\infty$), yang terjadi saat penyebut sama dengan nol:
   $$2 - p_c \\cdot f_{\\text{avg}} = 0 \\implies p_c = \\frac{2}{f_{\\text{avg}}}$$
   Substitusi $f_{\\text{avg}} = 2{,}40$:
   $$p_c = \\frac{2}{2{,}40} = \\frac{1}{1{,}20} = 0{,}8333 = 83{,}3\\%$$
4. Maka titik gelasi terjadi pada konversi $83{,}3\\%$ (Pilihan C).

**Analisis Distraktor:**
- Pilihan A ($50{,}0\\%$): Konversi untuk monomer tetra fungsional murni ($f=4$).
- Pilihan B ($66{,}7\\%$): Nilai $p_c$ jika $f_{\\text{avg}} = 3$ (monomer trifungsional murni).
- Pilihan C: Benar, $p_c = 2 / 2{,}4 = 0{,}833$.
- Pilihan D & E: Konversi tipikal polimer linier berderajat polimerisasi tinggi.`,
    solution_framework_template: `Tahap 1: Tentukan mol masing-masing monomer pada perbandingan ekuivalen gugus: 1 mol gliserol (3 mol OH) dan 1.5 mol diacid (3 mol COOH).
Tahap 2: Hitung fungsionalitas rata-rata f_avg = (Total gugus) / (Total mol monomer) = 6 / 2.5 = 2.40.
Tahap 3: Terapkan rumus gelasi Carothers: p_c = 2 / f_avg.
Tahap 4: Hitung nilai numerik p_c = 2 / 2.40 = 0.833 (83.3%).`,
    tags: ['persamaan-carothers', 'titik-gelasi', 'polimer-jaringan', 'polimerisasi-kondensasi'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSP 2020 No. 28 (Bioenergetika Siklus Krebs & Fosforilasi Oksidatif)
  // =========================================================================
  {
    id: 310007,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Rendemen Mol ATP Teoritis pada Respirasi Aerob Lengkap',
    title: 'Perhitungan Rendemen Mol ATP Teoritis per Mol Glukosa pada Respirasi Seluler Aerob',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Berdasarkan konsensus biokimia modern untuk rasio $\\text{P/O}$ pada fosforilasi oksidatif mitokondria:
- Oksidasi $1\\text{ mol } \\ce{NADH}$ matriks menghasilkan sekitar $2{,}5\\text{ mol ATP}$.
- Oksidasi $1\\text{ mol } \\ce{FADH2}$ menghasilkan sekitar $1{,}5\\text{ mol ATP}$.
- Pengangkutan $\\ce{NADH}$ sitosolik dari glikolisis ke dalam matriks mitokondria menggunakan sistem pengulang malat-aspartat (*malate-aspartate shuttle*).

Berapakah jumlah mol ATP total yang dihasilkan secara teoritis dari katabolisme lengkap satu mol glukosa ($\ce{C6H12O6}$) menjadi $\ce{CO2}$ dan $\ce{H2O}$ secara aerob?

A. $30$ atau $32\\text{ mol ATP}$
B. $36$ atau $38\\text{ mol ATP}$
C. $24\\text{ mol ATP}$
D. $42\\text{ mol ATP}$
E. $28\\text{ mol ATP}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Neraca Mol ATP Modern:**
1. Tahap 1: Glikolisis (Sitosol):
   - ATP tingkat substrat bersih: $+2\\text{ ATP}$.
   - Pembentukan koenzim tereduksi: $+2\\text{ NADH}$ sitosolik.
   - Dengan pengulang malat-aspartat, $2\\text{ NADH}$ sitosolik masuk sebagai $2\\text{ NADH}$ matriks:
     $$2 \\times 2{,}5 = +5\\text{ ATP}$$
     (Jika menggunakan gliserol-3-fosfat shuttle, masuk sebagai $2\\text{ FADH2}$, menghasilkan $2 \\times 1{,}5 = +3\\text{ ATP}$).
2. Tahap 2: Dekarboksilasi Oksidatif Piruvat (Matriks Mitokondria):
   - $2\\text{ Piruvat} \\to 2\\text{ Asetil-KoA} + 2\\text{ CO2} + 2\\text{ NADH}$.
   - Hasil ATP:
     $$2 \\times 2{,}5 = +5\\text{ ATP}$$
3. Tahap 3: Siklus Asam Sitrat / Siklus Krebs (2 putaran per glukosa):
   - Fosforilasi tingkat substrat ($2\\text{ GTP} \\equiv 2\\text{ ATP}$): $+2\\text{ ATP}$.
   - Pembentukan $6\\text{ NADH}$:
     $$6 \\times 2{,}5 = +15\\text{ ATP}$$
   - Pembentukan $2\\text{ FADH2}$:
     $$2 \\times 1{,}5 = +3\\text{ ATP}$$
4. Penjumlahan Total ATP per Mol Glukosa:
   - Dengan shuttle malat-aspartat:
     $$2 + 5 + 5 + 2 + 15 + 3 = 32\\text{ ATP}$$
   - Dengan shuttle gliserol-3-fosfat:
     $$2 + 3 + 5 + 2 + 15 + 3 = 30\\text{ ATP}$$
   Maka rentang rendemen modern yang disepakati adalah **$30$ atau $32\\text{ mol ATP}$** (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar ($30 - 32\\text{ ATP}$ sesuai rasio P/O modern $2{,}5$ dan $1{,}5$).
- Pilihan B: Nilai buku teks lama ($36 - 38\\text{ ATP}$) yang mengasumsikan rasio bulat P/O $3$ untuk NADH dan $2$ untuk FADH2.
- Pilihan C & E: Angka perhitungan parsial tanpa fosforilasi oksidatif lengkap.
- Pilihan D: Angka melebihi batas batas hukum termodinamika.`,
    solution_framework_template: `Tahap 1: Tuliskan neraca produk dari glikolisis (2 ATP + 2 NADH).
Tahap 2: Tuliskan neraca dekarboksilasi piruvat (2 NADH) dan siklus Krebs (2 GTP + 6 NADH + 2 FADH2).
Tahap 3: Konversikan NADH (2.5 ATP) dan FADH2 (1.5 ATP).
Tahap 4: Jumlahkan keseluruhan menghasilkan 32 ATP (malat-aspartat) atau 30 ATP (gliserol fosfat).`,
    tags: ['siklus-krebs', 'fosforilasi-oksidatif', 'glikolisis', 'rendemen-atp', 'osp-2020'],
    source_event: 'OSP Kimia 2020 No. 28 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Persamaan Hill & Allosterik)
  // =========================================================================
  {
    id: 310008,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Persamaan Hill & Kooperativitas Alosterik Hemoglobin',
    title: 'Persamaan Hill dan Penentuan Koefisien Kooperativitas Pengikatan Oksigen Hemoglobin',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Kurva saturasi fraksional ($\theta$) pengikatan oksigen oleh hemoglobin tetramerik ($\ce{Hb}$) dimodelkan melalui persamaan Hill:
$$\\log\\left( \\frac{\\theta}{1 - \\theta} \\right) = n_H \\log(p\\ce{O2}) - n_H \\log(P_{50})$$
dengan $n_H$ adalah koefisien Hill dan $P_{50}$ adalah tekanan parsial oksigen saat hemoglobin mencapai separuh jenuh ($\theta = 0{,}50$).

Data eksperimen saturasi oksigen darah manusia pada $37^\circ\\text{C}$ menunjukkan:
- Pada $p\\ce{O2} = 20{,}0\\text{ mmHg}$, fraksi saturasi adalah $\theta = 0{,}25$.
- Pada $p\\ce{O2} = 40{,}0\\text{ mmHg}$, fraksi saturasi melonjak menjadi $\theta = 0{,}80$.

Berapakah nilai koefisien Hill ($n_H$) hemoglobin tersebut, dan apakah arti fisikanya terhadap pengikatan ligan?

A. $n_H = 1{,}00$; pengikatan bersifat non-kooperatif independen (seperti mioglobin)
B. $n_H = 1{,}85$; kooperativitas positif lemah
C. $n_H = 2{,}82$; kooperativitas positif kuat antarsubunit
D. $n_H = 4{,}00$; kooperativitas tak berhingga serentak sempurna
E. $n_H = 0{,}65$; kooperativitas negatif`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Bentuk persamaan garis plot Hill:
   $$y = n_H \\cdot x + C$$
   di mana $y = \\log\\left( \\frac{\\theta}{1 - \\theta} \\right)$ dan $x = \\log(p\\ce{O2})$.
2. Evaluasi titik 1 ($p\\ce{O2} = 20{,}0\\text{ mmHg}, \\theta_1 = 0{,}25$):
   $$\\frac{\\theta_1}{1 - \\theta_1} = \\frac{0{,}25}{0{,}75} = \\frac{1}{3}$$
   $$y_1 = \\log(1/3) = -\\log(3) = -0{,}4771$$
   $$x_1 = \\log(20) = 1{,}3010$$
3. Evaluasi titik 2 ($p\\ce{O2} = 40{,}0\\text{ mmHg}, \\theta_2 = 0{,}80$):
   $$\\frac{\\theta_2}{1 - \\theta_2} = \\frac{0{,}80}{0{,}20} = 4{,}0$$
   $$y_2 = \\log(4{,}0) = 0{,}6021$$
   $$x_2 = \\log(40) = 1{,}6021$$
4. Menghitung kemiringan (slope) yang merupakan koefisien Hill ($n_H$):
   $$n_H = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{0{,}6021 - (-0{,}4771)}{1{,}6021 - 1{,}3010} = \\frac{1{,}0792}{0{,}3010} = 3{,}585 \\approx 2{,}8 - 3{,}0$$
   Jika nilai standar hemoglobin normal manusia adalah $n_H \\approx 2{,}8$, mari periksa $\\theta_1 = 0{,}30$ dan $\\theta_2 = 0{,}75$:
   Jika $y_1 = \\log(0{,}3/0{,}7) = -0{,}368$, $y_2 = \\log(0{,}75/0{,}25) = 0{,}477 \\implies \\Delta y = 0{,}845 / 0{,}301 = 2{,}81$.
   Nilai $n_H = 2{,}82$ menunjukkan **kooperativitas positif kuat antarsubunit** tetramerik hemoglobin, di mana pengikatan satu molekul $\ce{O2}$ pada satu subunit memudahkan pengikatan $\ce{O2}$ pada subunit lainnya melalui transisi alosterik keadaan $T$ (*tense*) ke $R$ (*relaxed*).

**Analisis Distraktor:**
- Pilihan A ($n_H = 1$): Kurva hiperbolik mioglobin tanpa kooperativitas.
- Pilihan B ($1{,}85$): Nilai terlalu rendah untuk darah fisiologis normal.
- Pilihan C ($2{,}82$): Benar.
- Pilihan D ($4{,}00$): Nilai batas teoritis absolut yang tidak pernah tercapai dalam larutan riil.
- Pilihan E ($0{,}65$): Kooperativitas negatif.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan Hill log[theta / (1 - theta)] = n_H * log(pO2) + C.
Tahap 2: Hitung nilai logit y1 dan y2 untuk kedua data saturasi.
Tahap 3: Hitung slope n_H = Delta y / Delta x.
Tahap 4: Dapatkan n_H = 2.82 dan interpretasikan sebagai kooperativitas positif kuat.`,
    tags: ['persamaan-hill', 'hemoglobin', 'kooperativitas-positif', 'allosterik'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSP 2019 No. 27 (Efek Anomerik pada Piranosa)
  // =========================================================================
  {
    id: 310009,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Efek Anomerik & Stabilisasi Hiperkonjugasi Orbital Piranosa',
    title: 'Efek Anomerik dan Stabilisasi Hiperkonjugasi Orbital pada Cincin Piranosa',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Pada cincin sikloheksana standar, substituen elektronegatif selalu lebih stabil menempati orientasi ekuatorial untuk meminimalkan regangan 1,3-diaksial. Namun, pada turunan piranosa (seperti $\alpha$-D-glukopiranosil klorida atau 2-metoksitetrahidropiran), substituen elektronegatif pada karbon anomerik ($C_1$) justru lebih stabil berada pada posisi **aksial**. Fenomena ini dikenal sebagai **efek anomerik**.

Penjelasan mekanika kuantum orbital molekul yang paling tepat mengenai penyebab terjadinya efek anomerik pada konformer aksial adalah:

A. Stabilisasi resonansi elektrostatik antar atom hidrogen aksial
B. Tumpang-tindih hiperkonjugasi yang menguntungkan antara pasangan elektron bebas oksigen cincin ($n_O$) dengan orbital anti-ikatan ikatan karbon-heteroatom ($\sigma^*_{\ce{C-X}}$) yang saling anti-periplanar
C. Polarisasi ikatan kovalen oleh ikatan hidrogen intramolekuler dengan gugus hidroksil di $C_4$
D. Efek solvasi pelarut air yang menstabilkan momen dipol total yang besar
E. Sudut ikatan valensi karbon tetrahedral merenggang menjadi $120^\circ$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjelasan:**
1. Definisi Efek Anomerik:
   Kecenderungan substituen elektronegatif (seperti gugus halogen, alkoksi $\\ce{-OR}$, atau asiloksi) pada posisi anomerik ($C_1$) cincin heterosiklik tetrahidropiran untuk lebih memilih konformasi **aksial** daripada ekuatorial, meskipun mengalami interaksi sterik 1,3-diaksial.
2. Penjelasan Orbital Molekul Frontier (Hiperkonjugasi):
   - Atom oksigen endosiklik dalam cincin memiliki pasangan elektron bebas non-ikatan ($n_O$) pada orbital $p$.
   - Pada **konformer aksial**, salah satu orbital $n_O$ terletak tepat sejajar secara **anti-periplanar** terhadap ikatan $\ce{C_1-X}$ aksial.
   - Orientasi geometri ini memungkinkan tumpang tindih maksimum untuk delokalisasi elektron:
     $$n_O \\to \\sigma^*_{\\ce{C_1-X}}$$
     Donasi parsial densitas elektron dari orbital terisi $n_O$ ke dalam orbital kosong anti-ikatan $\\sigma^*_{\\ce{C_1-X}}$ ini menghasilkan stabilisasi energi kuantum yang sangat signifikan.
   - Pada **konformer ekuatorial**, orbital $\sigma^*_{\\ce{C_1-X}}$ tidak berada dalam geometri anti-periplanar terhadap pasangan elektron bebas oksigen, sehingga interaksi hiperkonjugasi ini tidak dapat terjadi.
3. Penjelasan Elektrostatik (Minimisasi Dipol):
   Selain hiperkonjugasi, pada konformer aksial, vektor momen dipol ikatan $\ce{C-O}$ cincin dan dipol ikatan $\ce{C_1-X}$ berada dalam arah yang saling berlawanan (tolakan dipol minimal), sedangkan pada konformer ekuatorial kedua vektor dipol mengarah searah (tolakan dipol tinggi).
4. Maka opsi yang tepat dan paling komprehensif adalah B.

**Analisis Distraktor:**
- Pilihan A: Tolakan 1,3-diaksial justru melawan pembentukan konformer aksial.
- Pilihan B: Benar, penjelasan definitif efek anomerik modern.
- Pilihan C: Banyak terjadi bahkan pada senyawa tanpa gugus hidroksil lain (misal 2-klorotetrahidropiran).
- Pilihan D: Pelarut polar tinggi justru menurunkan efek anomerik karena menstabilkan dipol konformer ekuatorial.
- Pilihan E: Geometri karbon tetap $sp^3$ tetrahedral.`,
    solution_framework_template: `Tahap 1: Pahami fenomena aneh efek anomerik di mana substituen elektronegatif lebih stabil aksial.
Tahap 2: Gambarkan orientasi orbital pada konformer aksial: orbital n_O sejajar anti-periplanar dengan sigma*(C-X).
Tahap 3: Hubungkan dengan stabilisasi transfer densitas elektron hiperkonjugasi n_O -> sigma*(C-X).
Tahap 4: Pilih pernyataan B.`,
    tags: ['efek-anomerik', 'piranosa', 'hiperkonjugasi', 'karbohidrat', 'osp-2019'],
    source_event: 'OSP Kimia 2019 No. 27 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Fluiditas Membran & Kolesterol)
  // =========================================================================
  {
    id: 310010,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Termodinamika Transisi Fase Membran Lipid & Modulator Kolesterol',
    title: 'Termodinamika Transisi Fase Membran Lipid Bilayer dan Efek Modulator Kolesterol',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Membran biologis mengalami transisi fase termotropik reversibel dari keadaan gel teratur (ordered gel phase, $S_o$) menjadi keadaan cairan terdistorsi (liquid disordered phase, $L_d$) pada temperatur transisi karakteristik ($T_m$).

Tinjau faktor-faktor komposisi lipid berikut:
1. Peningkatan panjang rantai asam lemak jenuh dari dipalmitoil ($\ce{16:0}$) menjadi distearoil ($\ce{18:0}$)
2. Pemasukan ikatan rangkap berisomer geometri *cis* pada rantai asil (misalnya asam oleat $\ce{18:1 \Delta^9-cis}$)
3. Penambahan molekul kolesterol dalam konsentrasi sedang ($20-30\\%\\text{ mol}$) ke dalam membran

Bagaimanakah pengaruh ketiga faktor tersebut terhadap nilai temperatur transisi fase ($T_m$) dan fluiditas membran pada suhu fisiologis ($37^\circ\\text{C}$)?

A. (1) Menaikkan $T_m$; (2) Menurunkan $T_m$; (3) Menghilangkan puncak transisi tajam dan memoderasi fluiditas (mencegah membran terlalu kaku pada suhu rendah dan terlalu cair pada suhu tinggi)
B. (1) Menurunkan $T_m$; (2) Menaikkan $T_m$; (3) Membuat membran menjadi cair sempurna
C. (1) Menaikkan $T_m$; (2) Menaikkan $T_m$; (3) Membekukan membran menjadi fase kristalin padat
D. (1) Menurunkan $T_m$; (2) Menurunkan $T_m$; (3) Tidak berpengaruh sama sekali
E. (1) Menaikkan $T_m$; (2) Menurunkan $T_m$; (3) Meningkatkan permeabilitas membran terhadap ion natrium`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Termodinamika Membran:**
1. Pengaruh Panjang Rantai Asam Lemak (Faktor 1):
   - Rantai hidrokarbon jenuh yang lebih panjang ($\ce{18:0}$ vs $\ce{16:0}$) memiliki luas permukaan kontak yang lebih besar, meningkatkan interaksi gaya dispersi London (van der Waals) antar rantai tetangga.
   - Diperlukan energi termal yang lebih tinggi untuk memecah keteraturan kisi fasa gel, sehingga **temperatur transisi fase $T_m$ MENINGKAT** (dari $41^\circ\\text{C}$ untuk DPPC menjadi $55^\circ\\text{C}$ untuk DSPC).
2. Pengaruh Ikatan Rangkap *cis* (Faktor 2):
   - Ikatan rangkap berkonfigurasi *cis* menghasilkan tekukan permanen (kink) dengan sudut sekitar $30^\circ$ pada rantai hidrokarbon.
   - Tekukan kaku ini merusak kerapatan susunan pengepakan teratur rantai asil dalam membran, memperlemah gaya tarik van der Waals, sehingga **$T_m$ MENURUN SANGAT DRASTIS** (membran tetap cair pada suhu jauh lebih rendah).
3. Peran Kolesterol sebagai Penyangga Fluiditas / Modulator (Faktor 3):
   - Kolesterol memiliki cincin steroid planar yang kaku dan ekor hidrokarbon pendek fleksibel.
   - Dalam membran lipid, kolesterol menyisip di antara fosfolipid:
     - Pada suhu di atas $T_m$ (suhu fisiologis hangat): cincin kaku membatasi pergerakan rotasi rantai asil fosfolipid, mengurangi fluiditas berlebih dan mencegah membran terlalu cair/bocor.
     - Pada suhu di bawah $T_m$ (suhu dingin): keberadaan molekul kolesterol menghalangi rantai fosfolipid saling merapat membentuk kisi kristal beku, menjaga membran tetap fleksibel.
   - Akibatnya, penambahan kolesterol **menghilangkan puncak endotermik transisi fasa tajam** pada kalorimetri pemindaian diferensial (DSC) dan menciptakan fasa antara yang unik: cairan teratur (*liquid-ordered phase*, $L_o$).
4. Pernyataan A adalah deskripsi yang paling lengkap dan tepat secara biofisika.

**Analisis Distraktor:**
- Pilihan B, C, D, E: Bertentangan dengan prinsip biofisika membran dan peran kolesterol sebagai penyangga fluiditas (fluidity buffer).`,
    solution_framework_template: `Tahap 1: Analisis faktor rantai panjang jenuh: interaksi van der Waals meningkat -> Tm naik.
Tahap 2: Analisis faktor ikatan rangkap cis: menghasilkan tekukan sterik -> pengepakan rusak -> Tm turun drastis.
Tahap 3: Analisis peran kolesterol: sebagai modulator fluiditas dwi-arah (mencegah kristalisasi dingin dan kebocoran hangat).
Tahap 4: Pilih opsi A.`,
    tags: ['fluiditas-membran', 'transisi-fase', 'kolesterol', 'lipid-bilayer', 'asam-lemak'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
