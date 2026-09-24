/**
 * ichoQuestionsPillar8Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 8: Kimia Anorganik Lanjut, Magnetokimia HDVV, SMM & Ikatan Logam Multipel
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 508001 - 508010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 08 = Pilar 8
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_8_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2018 Slovakia/Czech Rep Problem 3 (Bleaney-Bowers Dimer Cu)
  // =========================================================================
  {
    id: 508001,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Magnetokimia Lanjut, Hamiltonian HDVV & Persamaan Bleaney-Bowers',
    title: 'Kopling Pertukaran Antiferomagnetik pada Tembaga(II) Asetat Dimer Berdasarkan Persamaan Bleaney-Bowers',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Senyawa tembaga(II) asetat hidrat $[\\ce{Cu2(OAc)4(H2O)2}]$ memiliki struktur lentera kayuh (*paddle-wheel*) yang memuat dua kation $\\ce{Cu^{2+}}$ ($3d^9$, masing-masing ber-spin lokal $S_1 = 1/2$ dan $S_2 = 1/2$).

Interaksi pertukaran magnetik antar-dua pusat spin dimodelkan oleh Hamiltonian Heisenberg-Dirac-van Vleck (HDVV):
$$\\hat{\\mathcal{H}} = -2 J \\hat{\\mathbf{S}}_1 \\cdot \\hat{\\mathbf{S}}_2$$
Interaksi ini memecah keadaan kuantum menjadi:
- Keadaan singlet diamagnetik ($S = 0$, energi $E_S = +\\frac{3}{2}J$)
- Keadaan triplet paramagnetik ($S = 1$, energi $E_T = -\\frac{1}{2}J$)
dengan selisih energi pemisahan singlet-triplet: $\\Delta E_{S-T} = E_T - E_S = -2J$.

Menurut **Persamaan Bleaney-Bowers**, suseptibilitas magnetik molar terukur ($\\chi_m$) sebagai fungsi temperatur $T$ dinyatakan sebagai:
$$\\chi_m(T) = \\frac{N_A g^2 \\mu_B^2}{k_B T} \\frac{1}{3 + \\exp(-2J / k_B T)} + N_\\alpha$$
di mana $N_\\alpha$ adalah paramagnetisme independen temperatur (TIP, dapat diabaikan).

Grafik $\\chi_m$ terhadap $T$ menunjukkan kurva lonceng dengan puncak maksimum karakteristik pada $T_{\\text{maks}} = 260\\text{ K}$ sebelum meluruh menuju nol saat mendekati $0\\text{ K}$ (menandakan keadaan dasar singlet non-magnetik $S=0$).

1. Berapakah hubungan matematis antara konstanta kopling pertukaran magnetik ($-2J$) dengan $T_{\\text{maks}}$?
2. Berapakah nilai konstanta kopling pertukaran magnetik $-2J$ (dinyatakan dalam $\\text{cm}^{-1}$) pada dimer tembaga(II) asetat tersebut?
*(Gunakan $k_B = 0{,}695\\text{ cm}^{-1}/\\text{K}$, dan kondisi puncak diperoleh dari $\\frac{d\\chi_m}{dT} = 0 \\implies -2J / k_B T_{\\text{maks}} \\approx 1{,}60$)*

A. $-2J / k_B T_{\\text{maks}} \\approx 1{,}60$; dan $-2J \\approx 289\\text{ cm}^{-1}$ ($J < 0$, antiferomagnetik)
B. $-2J / k_B T_{\\text{maks}} = 1{,}00$; dan $-2J = 180\\text{ cm}^{-1}$ ($J > 0$, feromagnetik)
C. $-2J / k_B T_{\\text{maks}} = 3{,}00$; dan $-2J = 542\\text{ cm}^{-1}$
D. $-2J / k_B T_{\\text{maks}} = 0{,}50$; dan $-2J = 90\\text{ cm}^{-1}$
E. Tembaga(II) asetat bersifat diamagnetik sempurna pada seluruh rentang suhu tanpa kopling.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Persamaan Bleaney-Bowers
1. **Penurunan Kondisi Titik Maksimum Suseptibilitas Magnetik:**
   Diferensiasikan $\\chi_m(T) \\propto \\frac{1}{T [3 + \\exp(-2J / k_B T)]}$ terhadap $T$ dan samakan dengan nol:
   Definisikan variabel $x = -2J / k_B T$.
   $$\\frac{d}{dT} \\left( \\frac{1}{T [3 + e^x]} \\right) = 0 \\implies 3 + e^x - T \\cdot \\frac{d e^x}{dT} = 0$$
   Karena $\\frac{dx}{dT} = -\\frac{x}{T}$:
   $$3 + e^x - T \\left( -\\frac{x}{T} e^x \\right) = 3 + e^x + x e^x = 0 \\implies e^x (x - 1) = 3$$
   Penyelesaian numerik:
   - Untuk $x = 1{,}60$:
     $$e^{1{,}60} (1{,}60 - 1) = 4{,}953 \\times 0{,}60 \\approx 2{,}972 \\approx 3{,}0$$
   Jadi kondisi puncak suseptibilitas magnetik tercapai pada:
   $$x_{\\text{maks}} = \\frac{-2J}{k_B T_{\\text{maks}}} \\approx 1{,}60$$
2. **Perhitungan Nilai $-2J$:**
   Diketahui $T_{\\text{maks}} = 260\\text{ K}$ dan $k_B = 0{,}695\\text{ cm}^{-1}/\\text{K}$:
   $$-2J = 1{,}60 \\times k_B T_{\\text{maks}} = 1{,}60 \\times (0{,}695\\text{ cm}^{-1}/\\text{K}) \\times 260\\text{ K}$$
   $$-2J = 1{,}60 \\times 180{,}7\\text{ cm}^{-1} \\approx 289{,}1\\text{ cm}^{-1} \\approx 289\\text{ cm}^{-1}$$
   (Nilai $J = -145\\text{ cm}^{-1} < 0$ mengonfirmasi interaksi kopling antiferomagnetik kuat antara dua orbital $d_{x^2-y^2}$ melalui empat jembatan karboksilat superexchange $\\ce{Cu-O-C-O-Cu}$).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan relasi rasio 1,60 dan nilai $-2J \\approx 289\\text{ cm}^{-1}$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Diferensiasikan fungsi Bleaney-Bowers untuk mencari titik stasioner d(chi)/dT = 0.
Langkah 2: Selesaikan persamaan transendental e^x * (x - 1) = 3 untuk memperoleh x = -2J / (kB * Tmaks) = 1,60.
Langkah 3: Masukkan nilai Tmaks = 260 K dan konversi Boltzmann kB = 0,695 cm^-1/K.
Langkah 4: Hitung celah energi singlet-triplet -2J = 1,60 * 0,695 * 260 = 289 cm^-1.`,
    source_event: 'IChO 2018 Slovakia/Czech Rep Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Single-Molecule Magnets (SMM) Kluster Mn12 & Anisotropi
  // =========================================================================
  {
    id: 508002,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Magnet Molekuler Tunggal (SMM), Pemisahan Nol-Medan (ZFS) & Terowongan Kuantum Magnetisasi',
    title: 'Anisotropi Magnetik Aksial dan Barier Pembalikan Spin pada Magnet Molekul Tunggal [Mn12O12(OAc)16(H2O)4]',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kluster mangan $[\\ce{Mn12O12(O2CMe)16(H2O)4}]$ (dikenal sebagai $\\ce{Mn12}$-asetat) adalah prototipe Magnet Molekul Tunggal (*Single-Molecule Magnet*, SMM) pertama yang menunjukkan histeresis magnetik pada tingkat molekul individual.

Inti kluster terdiri dari:
- 4 kation $\\ce{Mn^{IV}}$ ($d^3, S = 3/2$) di bagian dalam membentuk kubus pusat.
- 8 kation $\\ce{Mn^{III}}$ ($d^4, S = 2$) di cincin luar mengelilingi kubus pusat.
Akibat kopling pertukaran antiferomagnetik kuat antara kation $\\ce{Mn^{IV}}$ dan $\\ce{Mn^{III}}$, spin total keadaan dasar kluster adalah:
$$S = 8(2) - 4(3/2) = 16 - 6 = 10$$

Hamiltonian pemisahan medan nol (*Zero-Field Splitting*, ZFS) uniseksial dinyatakan sebagai:
$$\\hat{\\mathcal{H}} = D \\hat{S}_z^2 + E(\\hat{S}_x^2 - \\hat{S}_y^2)$$
di mana untuk simetri tetragonal ($S_4$), $E = 0$ dan $D = -0{,}46\\text{ cm}^{-1}$ ($D < 0$ menunjukkan anisotropi magnetik sumbu mudah / *easy-axis anisotropy*).

Tingkat energi magnetik terkuantisasi menurut bilangan kuantum proyeksi spin $M_S \\in \\{-10, -9, \\dots, +9, +10\\}$:
$$E(M_S) = D M_S^2$$

Barier energi aktivasi teoretis klasik ($U_{\\text{eff}}$) yang harus dilompati oleh spin molekul untuk membalik orientasi magnetisasinya dari $M_S = -10$ ke $M_S = +10$ adalah:

A. $U_{\\text{eff}} = |D| S^2 = 0{,}46\\text{ cm}^{-1} \\times 10^2 = 46{,}0\\text{ cm}^{-1}$ ($66{,}2\\text{ K}$)
B. $U_{\\text{eff}} = |D| S = 0{,}46 \\times 10 = 4{,}60\\text{ cm}^{-1}$ ($6{,}6\\text{ K}$)
C. $U_{\\text{eff}} = 2 |D| S^2 = 92{,}0\\text{ cm}^{-1}$ ($132{,}4\\text{ K}$)
D. $U_{\\text{eff}} = |D| (S + 1/2)^2 = 50{,}7\\text{ cm}^{-1}$
E. Tidak ada barier pembalikan spin karena spin molekul berotasi bebas tanpa hambatan.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Single-Molecule Magnet (SMM) Mn12
1. **Analisis Tingkat Energi Pemisahan Medan Nol:**
   Hamiltonian ZFS:
   $$E(M_S) = D M_S^2$$
   Karena $D = -0{,}46\\text{ cm}^{-1} < 0$:
   - Keadaan dasar terdegenerasi ganda adalah $M_S = \\pm 10$:
     $$E(\\pm 10) = D (\\pm 10)^2 = 100 D = -46{,}0\\text{ cm}^{-1}$$
   - Keadaan tertinggi pada puncak barier terjadi pada $M_S = 0$:
     $$E(0) = D (0)^2 = 0\\text{ cm}^{-1}$$
2. **Perhitungan Barier Aktivasi Relaksasi Termal ($U_{\\text{eff}}$):**
   Selisih energi antara puncak barier ($M_S = 0$) dan dasar sumur potensial ($M_S = \\pm S$):
   $$U = E(0) - E(\\pm S) = 0 - D S^2 = |D| S^2$$
   Substitusikan $|D| = 0{,}46\\text{ cm}^{-1}$ dan $S = 10$:
   $$U = 0{,}46\\text{ cm}^{-1} \\times 10^2 = 46{,}0\\text{ cm}^{-1}$$
   Konversi ke satuan Kelvin ($k_B = 0{,}695\\text{ cm}^{-1}/\\text{K}$):
   $$T_B = \\frac{46{,}0\\text{ cm}^{-1}}{0{,}695\\text{ cm}^{-1}/\\text{K}} \\approx 66{,}2\\text{ K}$$
   Barier energi sebesar $66\\text{ K}$ ini mengunci orientasi spin molekuler pada suhu helium cair ($T < 3\\text{ K}$), menghasilkan histeresis magnetik dengan waktu relaksasi spin berbulan-bulan (*blocking temperature*).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan $U = |D| S^2 = 46{,}0\\text{ cm}^{-1}$ ($66{,}2\\text{ K}$) secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi keadaan dasar MS = +/- S dari tanda anisotropi aksial D < 0.
Langkah 2: Tentukan keadaan puncak barier pada MS = 0.
Langkah 3: Hitung tinggi barier pembalikan spin U = |D| * S^2.
Langkah 4: Masukkan nilai |D| = 0,46 cm^-1 dan S = 10 untuk memperoleh U = 46,0 cm^-1 (66,2 K).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2021 Japan Problem 8 (Ikatan Logam Kuintupel Cr-Cr)
  // =========================================================================
  {
    id: 508003,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Ikatan Multipel Logam-Logam, Ikatan Kuintupel & Orbital δ',
    title: 'Struktur Elektronik dan Analisis Komponen Ikatan Kuintupel Kromium-Kromium [Ar\'CrCrAr\']',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Pada tahun 2005, Philip Power dan rekan-rekannya berhasil mensintesis senyawa kompleks bimetalik pertama yang memiliki **ikatan kuintupel** (orde ikatan formal 5) antara dua atom kromium(I):
$$\\ce{Ar'-Cr#Cr-Ar'}$$
di mana $\\ce{Ar'}$ adalah ligan terfenil sterik masif $2,6\\text{-}(\\ce{2,4,6-iPr3C6H2})_2\\ce{C6H3}$. 

Kompleks ini memiliki inti $\\ce{C-Cr-Cr-C}$ yang terdistorsi membentuk geometri *trans-bent* (sudut $\\angle \\ce{C-Cr-Cr} \\approx 102{,}8^\\circ$) dengan panjang ikatan $\\ce{Cr-Cr}$ terukur sangat pendek: $d_{\\ce{Cr-Cr}} = 1{,}835\\text{ \\AA}$ (jauh lebih pendek daripada ikatan logam pada kristal kromium murni $2{,}50\\text{ \\AA}$).

Atom kromium(I) memiliki konfigurasi elektron valensi $[\\ce{Ar}] 3d^5$.
Satu elektron digunakan untuk membentuk ikatan kovalen $\\sigma$ dengan ligan $\\ce{Ar'}$, menyisakan empat elektron $d$ tak-berpasangan pada masing-masing atom $\\ce{Cr}$.

Berdasarkan teori orbital molekul interaksi orbital $d-d$ sepanjang sumbu ikatan $z$:
Komponen ikatan simetri apa sajakah yang menyusun ikatan kuintupel $\\ce{Cr-Cr}$, dan mengapa kompleks mengadopsi geometri *trans-bent* alih-alih linier ($180^\\circ$)?

A. Ikatan tersusun dari $1\\sigma + 2\\pi + 2\\delta$; dan geometri mengadopsi *trans-bent* akibat hibridisasi orbital $\\ce{Cr}(4s) - \\ce{Cr}(3d_{z^2})$ yang menstabilkan orbital ikatan $\\sigma$ serta memperkecil tolakan sterik ligan.
B. Ikatan tersusun dari $5\\sigma$; dan geometri linier dipaksa oleh tolakan elektrostatik.
C. Ikatan tersusun dari $2\\sigma + 3\\pi$; dan geometri *trans-bent* disebabkan oleh pengotor oksigen.
D. Ikatan tersusun dari $1\\sigma + 4\\delta$; dan kromium berada pada bilangan oksidasi $+5$.
E. Orde ikatan sebenarnya adalah 1 karena orbital $\\delta$ selalu bersifat anti-ikatan.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Ikatan Kuintupel Kromium
1. **Analisis Komposisi Lima Ikatan Logam-Logam:**
   Dua atom $\\ce{Cr(I)}$ masing-masing menyumbangkan 5 elektron valensi ke kerangka bimetalik (satu elektron formal berikatan $\\sigma$ dengan atom C ligan, dan 4 elektron murni $d$, total 5 pasang elektron ikatan $\\ce{Cr-Cr}$):
   - Tumpang tindih orbital $3d_{z^2} - 3d_{z^2}$ membentuk **1 ikatan $\\sigma$** ($a_g$).
   - Tumpang tindih sepasang orbital $(3d_{xz}, 3d_{yz})$ dengan simetri berputar $C_2$ membentuk **2 ikatan $\\pi$** (degenerat ganda).
   - Tumpang tindih sepasang orbital $(3d_{xy}, 3d_{x^2-y^2})$ muka-ke-muka (*face-to-face*) membentuk **2 ikatan $\\delta$** (dua bidang simpul sejajar sumbu ikatan).
   Total: **$1\\sigma + 2\\pi + 2\\delta = 5$ ikatan kovalen (ikatan kuintupel)**.
2. **Alasan Geometri Trans-Bent:**
   Jika kompleks berbentuk linier ($180^\\circ$), orbital $\\ce{Cr}(4s)$ murni akan membentuk ikatan $\\sigma$ dengan ligan $\\ce{C}$, sedangkan orbital $\\ce{Cr}(3d_{z^2})$ murni membentuk ikatan $\\sigma$ $\\ce{Cr-Cr}$.
   Namun, dengan membengkokkan sudut ikatan $\\angle \\ce{C-Cr-Cr}$ menjadi $\\sim 102{,}8^\\circ$ (*trans-bent*), simetri turun dari $D_{\\infty h}$ ke $C_{2h}$.
   Penurunan simetri ini mengizinkan terjadinya **pencampuran mekanika kuantum (*sd-mixing*)** antara orbital $\\ce{Cr}(4s)$ dan $\\ce{Cr}(3d_{z^2})$ yang bersimetri sama ($a_g$). Percampuran ini menurunkan energi orbital ikatan $\\sigma$ secara masif (*second-order Jahn-Teller stabilization*), sekaligus mengarahkan ligan bulky menjauh satu sama lain untuk meminimalkan tolakan sterik.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan konfigurasi $1\\sigma + 2\\pi + 2\\delta$ dan stabilisasi pencampuran $s-d$ trans-bent secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi 5 pasang elektron yang menempati MO bonding d-d: 1 ikatan sigma (dz2), 2 ikatan pi (dxz, dyz), dan 2 ikatan delta (dxy, dx2-y2).
Langkah 2: Hitung total orde ikatan formal = 5 (ikatan kuintupel).
Langkah 3: Terapkan teori grup untuk penurunan simetri ke C2h yang mengizinkan percampuran orbital 4s dan 3dz2.
Langkah 4: Simpulkan bahwa stabilisasi sd-mixing dan minimisasi sterik mendorong geometri trans-bent.`,
    source_event: 'IChO 2021 Japan Problem 8 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Diagram Tanabe-Sugano Kompleks d3 Cr(III)
  // =========================================================================
  {
    id: 508004,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Diagram Tanabe-Sugano, Transisi Spin-Forbidden & Spektroskopi Fosforesensi d3',
    title: 'Analisis Diagram Tanabe-Sugano Kompleks d3 Oktahedral: Asal-Usul Emisi Garis Fosforesensi Merah Ruby',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Diagram Tanabe-Sugano untuk konfigurasi elektronik $d^3$ dalam medan ligan oktahedral ($O_h$) memetakan energi keadaan tereksitasi ($E/B$) sebagai fungsi kekuatan medan ligan ($\\Delta_o / B$).

Keadaan dasar elektronik untuk ion $d^3$ (misalnya $\\ce{Cr^{3+}}$ pada batu mulia ruby $\\ce{Al2O3:Cr^{3+}}$) selalu merupakan kuartet spin tinggi $^4A_{2g}$ ($t_{2g}^3$, spin $S = 3/2$):
1. Transisi elektronik *spin-allowed* ($\\Delta S = 0$):
   - $^4A_{2g} \\to {^4T_{2g}}$ (kemiringan garis Tanabe-Sugano $\\text{slope} = +1{,}0$)
   - $^4A_{2g} \\to {^4T_{1g}(F)}$ (kemiringan garis Tanabe-Sugano $\\text{slope} > 0$)
   Transisi ini menghasilkan pita serapan absorpsi lebar pada spektrum UV-Vis karena geometri keadaan tereksitasi mengalami distorsi elastis Franck-Condon.
2. Transisi elektronik *spin-forbidden* ($\\Delta S = -1$):
   - $^4A_{2g} \\to {^2E_g}$ dan $^4A_{2g} \\to {^2T_{1g}}$
   Kedua keadaan tereksitasi duplet ini memiliki konfigurasi orbital yang identik dengan keadaan dasar, yaitu $t_{2g}^3$ (hanya terjadi pembalikan spin satu elektron di dalam subkulit $t_{2g}$ tanpa promosi ke orbital $e_g^*$).

Akibat dari konfigurasi orbital yang identik tersebut:
Garis energi keadaan duplet $^2E_g$ pada diagram Tanabe-Sugano berbentuk **garis horizontal datar sempurna** (kemiringan $\\text{slope} = 0$).

Apakah konsekuensi spektroskopis terpenting dari kemiringan garis $^2E_g$ yang bernilai nol tersebut terhadap spektrum emisi ruby laser ($\lambda = 694{,}3\\text{ nm}$)?

A. Energi emisi fosforesensi $^2E_g \\to {^4A_{2g}}$ hampir sepenuhnya independen terhadap kekuatan medan kristal pelarut/kisi inang dan tidak mengalami perluasan fonon, sehingga menghasilkan emisi garis yang luar biasa tajam (*extremely sharp emission line*).
B. Transisi ini tidak pernah dapat memancarkan cahaya karena intensitasnya mutlak nol.
C. Panjang gelombang emisi bergeser secara acak dari sinar gamma hingga gelombang mikro.
D. Keadaan $^2E_g$ memiliki waktu paruh peluruhan nol femtodetik.
E. Kristal ruby berubah warna menjadi hitam pekat saat disinari laser.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Diagram Tanabe-Sugano Konfigurasi $d^3$
1. **Analisis Konfigurasi Orbital:**
   - Keadaan dasar: $^4A_{2g} \\implies (t_{2g})^3$, $S = 3/2$.
   - Keadaan tereksitasi duplet: $^2E_g \\implies (t_{2g})^3$, $S = 1/2$.
   Karena kedua keadaan memiliki jumlah elektron yang sama persis pada orbital $t_{2g}$ (tidak ada elektron pada orbital anti-ikatan $e_g^*$), energi penstabilan medan ligan (LFSE) keduanya adalah identik:
   $$\\text{LFSE}({^4A_{2g}}) = 3 \\times (-0{,}4 \\Delta_o) = -1{,}2 \\Delta_o$$
   $$\\text{LFSE}({^2E_g}) = 3 \\times (-0{,}4 \\Delta_o) = -1{,}2 \\Delta_o$$
   Selisih energi antara kedua keadaan:
   $$\\Delta E = E({^2E_g}) - E({^4A_{2g}}) = \\text{Murni tolakan interelektronik Racah } (9B + 3C)$$
   Nilai ini sama sekali **tidak bergantung pada $\\Delta_o$** (kemiringan $dE/d\\Delta_o = 0$).
2. **Implikasi Asas Franck-Condon & Lebar Pita:**
   - Panjang ikatan kesetimbangan $\\ce{Cr-O}$ pada keadaan $^2E_g$ persis sama dengan panjang ikatan pada keadaan dasar $^4A_{2g}$ ($r_e' = r_e''$).
   - Tidak ada gaya pemulih vibrasi yang tereksitasi saat transisi berlangsung.
   - Faktor Franck-Condon terpusat hampir $100\\%$ pada transisi $0-0$ (*zero-phonon line*).
   - Akibatnya, emisi fosforesensi $^2E_g \\to {^4A_{2g}}$ muncul sebagai garis emisi monokromatik yang **luar biasa tajam** pada $\\lambda = 694{,}3\\text{ nm}$, yang mendasari penemuan laser operasional pertama di dunia oleh Theodore Maiman pada tahun 1960 (Ruby Laser).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan ketidaktergantungan terhadap medan kristal dan ketajaman emisi garis secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi konfigurasi orbital keadaan dasar ^4A2g (t2g^3) dan tereksitasi ^2Eg (t2g^3).
Langkah 2: Pahami bahwa kedua keadaan memiliki LFSE yang identik (-1,2 Delta_o), sehingga kemiringan pada diagram Tanabe-Sugano adalah nol.
Langkah 3: Terapkan prinsip Franck-Condon: karena jarak kesetimbangan Cr-L tidak berubah, kopling fonon minimal.
Langkah 4: Simpulkan bahwa emisi fosforesensi ruby laser memancar sebagai garis tunggal tajam (sharp zero-phonon line).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2019 France Problem 8 (Senyawa Gas Mulia Xenon & Ikatan 3c-4e)
  // =========================================================================
  {
    id: 508005,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Gas Mulia, Ikatan 3-Pusat 4-Elektron (3c-4e) & Oksifluorida Xenon',
    title: 'Model Ikatan Tiga-Pusat Empat-Elektron (3c-4e) Pimentel-Rundle pada Geometri Anion Pentagonal Planar [XeF5]-',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Anion pentafluoroxenat(IV) $[\\ce{XeF5}]^-$ adalah salah satu contoh spesi molekuler langka yang memiliki geometri pentagonal planar sempurna ($D_{5h}$):
- Atom $\\ce{Xe}$ dikelilingi oleh 5 ligan fluorin pada bidang ekuatorial dan 2 pasangan elektron bebas aksial (satu di atas dan satu di bawah bidang, membentuk bipiramida pentagonal semu $AX_5E_2$).

Menurut model ikatan molekuler Pimentel-Rundle, ikatan hipervalen pada senyawa fluorida gas mulia tidak memerlukan partisipasi orbital-$d$ berenergi tinggi yang tidak realistis, melainkan dideskripsikan melalui sistem ikatan terdelokalisasi **tiga-pusat empat-elektron ($3c-4e$)**:
- Interaksi linier $\\ce{F-Xe-F}$ menggunakan 1 orbital $5p$ xenon dan 2 orbital $2p$ fluorin menghasilkan:
  1. Satu orbital ikatan (*bonding MO*, terisi 2e)
  2. Satu orbital non-ikatan (*non-bonding MO*, terisi 2e, terlokalisasi di ligan $\\ce{F}$)
  3. Satu orbital anti-ikatan (*antibonding MO*, kosong)
  sehingga orde ikatan formal per ikatan $\\ce{Xe-F}$ adalah $1/2$.

Jika dalam anion planar $[\\ce{XeF5}]^-$, delokalisasi ikatan $\\sigma$ ekuatorial dibangun dari orbital atom valensi $\\ce{Xe}(5s, 5p_x, 5p_y)$ dengan kombinasi linier orbital $\\sigma$ dari lima atom fluorin:
1. Berapa banyak pasangan elektron valensi total yang mengelilingi atom pusat $\\ce{Xe}$ dalam $[\\ce{XeF5}]^-$?
2. Berapakah orde ikatan formal rata-rata untuk masing-masing ikatan $\\ce{Xe-F}$ pada anion $[\\ce{XeF5}]^-$?

A. Total 7 pasangan elektron valensi (5 ikatan + 2 pasangan bebas aksial); orde ikatan formal rata-rata $= 3/5 = 0{,}60$
B. Total 5 pasangan elektron valensi; orde ikatan formal rata-rata $= 1{,}00$
C. Total 6 pasangan elektron valensi; orde ikatan formal rata-rata $= 0{,}50$
D. Total 8 pasangan elektron valensi; orde ikatan formal rata-rata $= 0{,}40$
E. Total 7 pasangan elektron valensi; orde ikatan formal rata-rata $= 1{,}00$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Geometri & Ikatan $[\\ce{XeF5}]^-$
1. **Penghitungan Elektron Valensi Pusat Xenon:**
   - Valensi bebas $\\ce{Xe}$: 8 elektron.
   - Lima ligan $\\ce{F}$ kovalen menyumbangkan 5 elektron.
   - Muatan negatif $-1$: 1 elektron tambahan.
   - Total elektron valensi di sekitar $\\ce{Xe}$:
     $$N_e = 8 + 5 + 1 = 14 \\text{ elektron} = 7 \\text{ pasang elektron}$$
   - Menurut VSEPR: 5 domain ikatan + 2 domain non-ikatan aksial ($AX_5E_2$), menghasilkan geometri **pentagonal planar** ($D_{5h}$) dengan pasangan elektron sunyi menempati kedua kutub aksial.
2. **Analisis Orbital Molekul Ikatan Ekuatorial:**
   Atom xenon hanya memiliki 3 orbital valensi pada bidang ekuatorial ($5s, 5p_x, 5p_y$).
   Ketiga orbital ini dapat bertransformasi menurut representasi $A_1'$ ($5s$) dan $E_1'$ ($5p_x, 5p_y$).
   Lima ligan fluorin membentuk SALC ekuatorial:
   $$\\Gamma_\\sigma = A_1' + E_1' + E_2'$$
   - Orbital atom $\\ce{Xe}$ berinteraksi dengan SALC $A_1'$ dan $E_1'$ membentuk **3 orbital molekul ikatan** (1 $a_1'$ dan 2 $e_1'$).
   - SALC $E_2'$ tidak memiliki padanan simetri pada orbital valensi $s, p$ xenon, sehingga menjadi 2 orbital molekul *non-bonding* murni ligan.
   Ketiga orbital molekul ikatan ($a_1' + e_1'$) menampung $3 \\times 2 = 6$ elektron ikatan (3 pasangan ikatan kovalen terdelokalisasi) yang dibagi rata ke seluruh **5 ikatan $\\ce{Xe-F}$**.
   Orde ikatan formal rata-rata per ikatan $\\ce{Xe-F}$:
   $$\\text{Orde ikatan} = \\frac{3 \\text{ pasangan ikatan}}{5 \\text{ ikatan}} = 0{,}60$$
3. **Evaluasi Opsi:**
   - Opsi A menyatakan 7 pasangan elektron valensi dan orde ikatan $0{,}60$ ($3/5$) secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung pasangan elektron valensi: 8 (Xe) + 5 (F) + 1 (muatan) = 14 elektron = 7 pasang (AX5E2).
Langkah 2: Petakan simetri orbital valensi s dan p Xe pada bidang (A1' + E1').
Langkah 3: Tentukan jumlah orbital molekul bonding yang terbentuk = 1 + 2 = 3 orbital ikatan terisi (3 pasangan ikatan).
Langkah 4: Hitung orde ikatan rata-rata per ikatan Xe-F = 3 / 5 = 0,60.`,
    source_event: 'IChO 2019 France Problem 8 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Aktinida vs Lantanida & Kovalensi Kation Aktinil
  // =========================================================================
  {
    id: 508006,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Koordinasi Aktinida, Efek Relativistik & Ikatan Kovalen Kation Uranil',
    title: 'Peran Efek Relativistik dan Kovalensi Orbital 5f/6d pada Kestabilan Luar Biasa Kation Uranil [UO2]2+',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kation uranil $[\\ce{O=U=O}]^{2+}$ memiliki geometri linier kaku ($D_{\\infty h}$) dengan jarak ikatan $\\ce{U=O}$ yang sangat pendek ($d \\approx 1{,}78\\text{ \\AA}$) dan kestabilan kimia yang luar biasa tinggi terhadap substitusi ligan aksial, kontras dengan kation lantanida yang didominasi oleh interaksi elektrostatik non-kovalen.

Secara mekanika kuantum relativistik (persamaan Dirac):
1. Efek massa relativistik langsung mengontraksi dan menstabilkan orbital inti berkecepatan tinggi ($s$ dan $p_{1/2}$).
2. Penambahan perisai muatan inti ini menyebabkan **ekspansi relativistik tak langsung** pada orbital $5f$ dan $6d$, sehingga kedua orbital ini meluas ke luar bola koordinasi dan memiliki tumpang tindih spasial yang signifikan dengan orbital $2p$ oksigen.

Dalam diagram orbital molekul kation uranil linier $[\\ce{UO2}]^{2+}$:
- Berapakah orde ikatan formal total untuk masing-masing ikatan $\\ce{U-O}$?
- Orbital molekul ikatan kovalen $\\sigma_u$ dan $\\pi_u$ utama terbentuk dari tumpang tindih orbital atom uranium manakah dengan ligan oksigen?

A. Masing-masing ikatan $\\ce{U=O}$ memiliki orde ikatan formal 3 (ikatan tripel $\\ce{U#O}$, total orde ikatan sistem $= 6$); di mana orbital ikatan $\\sigma_u$ dibentuk oleh $\\ce{U}(5f_z^3)$ dan orbital $\\pi_u$ dibentuk oleh $\\ce{U}(5f_{xz^2}, 5f_{yz^2})$.
B. Masing-masing ikatan memiliki orde ikatan 1; orbital ikatan murni dibentuk oleh orbital $\\ce{U}(7s)$.
C. Masing-masing ikatan memiliki orde ikatan 2; orbital ikatan murni dibentuk oleh orbital $\\ce{U}(6d)$.
D. Ikatan uranil murni bersifat ionik tanpa adanya tumpang tindih orbital molekul kovalen.
E. Masing-masing ikatan memiliki orde ikatan 4; melibatkan promosi elektron ke kulit $n=8$.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Ikatan Kovalen Kation Uranil $[\\ce{UO2}]^{2+}$
1. **Analisis Konfigurasi Valensi dan Orde Ikatan:**
   Atom uranium netral memiliki konfigurasi $[\\ce{Rn}] 5f^3 6d^1 7s^2$ (6 elektron valensi).
   Dalam kation uranil $[\\ce{UO2}]^{2+}$, formal bilangan oksidasi uranium adalah $+6$ ($5f^0$, kulit tertutup).
   Dua ligan oksigen formalnya adalah dioksida $\\ce{O^{2-}}$, masing-masing menyumbang orbital $2s$ dan $2p$ penuh.
   Terdapat total **12 elektron valensi ikatan** yang mengisi enam orbital molekul ikatan:
   - $1 \\sigma_g^+$ (tumpang tindih $\\ce{O}(2p_z) + \\ce{U}(6d_{z^2})$)
   - $1 \\sigma_u^+$ (tumpang tindih $\\ce{O}(2p_z) + \\ce{U}(5f_{z^3})$)
   - $1 \\pi_g$ degenerat ganda (tumpang tindih $\\ce{O}(2p_x, 2p_y) + \\ce{U}(6d_{xz}, 6d_{yz})$)
   - $1 \\pi_u$ degenerat ganda (tumpang tindih $\\ce{O}(2p_x, 2p_y) + \\ce{U}(5f_{xz^2}, 5f_{yz^2})$)
   Total ada 6 orbital molekul ikatan terisi penuh oleh 12 elektron!
   Orde ikatan total $= 6$.
   Karena terdapat dua ikatan $\\ce{U-O}$, maka masing-masing ikatan $\\ce{U-O}$ memiliki **orde ikatan formal 3 (ikatan tripel $\\ce{U#O}$)**.
2. **Keterlibatan Unik Orbital $5f$ (Paritas Ungerade):**
   Pada atom lantanida, orbital $4f$ terkubur jauh di dalam inti (*core-like*) dan tidak berpartisipasi dalam ikatan kovalen.
   Namun pada aktinida, ekspansi relativistik mengangkat orbital $5f$ sehingga orbital $5f_{z^3}$ (simetri $\\sigma_u$) dan $5f_{xz^2}, 5f_{yz^2}$ (simetri $\\pi_u$) bertumpang tindih kuat dengan kombinasi *ungerade* orbital oksigen, memberikan kontribusi kovalensi yang sangat dominan.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan orde ikatan tripel 3 dan keterlibatan orbital $5f_z^3$ serta $5f_{xz^2}, 5f_{yz^2}$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung elektron valensi ikatan kation uranil: 6 elektron U + 2*4 elektron O - 2 elektron muatan = 12 elektron.
Langkah 2: Petakan 6 orbital molekul bonding yang terbentuk: 1 sigma_g (6d) + 1 sigma_u (5f) + 2 pi_g (6d) + 2 pi_u (5f).
Langkah 3: Hitung orde ikatan per ikatan U-O = 6 pasang / 2 ikatan = 3 (ikatan tripel).
Langkah 4: Jelaskan keterlibatan orbital 5f ungerade akibat ekspansi relativistik tak langsung.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2023 Switzerland Problem 8 (Aktivasi Ikatan C-H Iridium)
  // =========================================================================
  {
    id: 508007,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Organologam Lanjut, Aktivasi Ikatan C-H & Intermediat Agostik',
    title: 'Siklus Katalitik Aktivasi Ikatan C-H Alkana Menggunakan Kompleks Pincer Iridium Brookhart',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kompleks pincer iridium Brookhart, $[(\\text{PCP})\\ce{Ir(H)2}]$ di mana $\\text{PCP} = \\kappa^3\\text{-}\\ce{C6H3-2,6-(CH2PtBu2)2}$, mengkatalisis fungsionalisasi dan dehidrogenasi alkana inert menjadi alkena pada kondisi homogen bebas akseptor.

Siklus katalitik melibatkan pembentukan spesi aktif 14-elektron terkoordinasi-tiga $[(\\text{PCP})\\ce{Ir^I}]$ melalui eliminasi reduktif molekul $\\ce{H2}$:
1. Tahap pertama aktivasi alkana (misalnya metana atau siklooktana) adalah koordinasi non-kovalen ikatan $\\ce{C-H}$ ke atom pusat logam membentuk **kompleks-$\sigma$ agostik** $[(\\text{PCP})\\ce{Ir^I(\\eta^2-H-R)}]$.
2. Kompleks-$\sigma$ ini kemudian bertransisi melalui adisi oksidatif pemutusan ikatan $\\ce{C-H}$ menghasilkan kompleks hidrido-alkil iridium(III) oktahedral terkoordinasi-lima $[(\\text{PCP})\\ce{Ir^{III}(H)(R)}]$.

Dalam spektroskopi IR dan NMR:
Bagaimana bukti karakteristik pembentukan ikatan agostik $\\ce{Ir \\dots H-C}$ pada kompleks-$\sigma$ intermediat dibandingkan dengan alkana bebas?

A. Bilangan gelombang vibrasi ulur $\\nu_{\\ce{C-H}}$ turun drastis (redshift) sebesar $400 - 800\\text{ cm}^{-1}$ ke daerah $2200 - 2600\\text{ cm}^{-1}$, dan konstanta kopling NMR $^{1}J_{\\ce{CH}}$ menurun drastis dari $\\sim 125\\text{ Hz}$ menjadi $\\sim 60 - 90\\text{ Hz}$.
B. Bilangan gelombang vibrasi ulur $\\nu_{\\ce{C-H}}$ meningkat menjadi $> 3500\\text{ cm}^{-1}$ karena ikatan menguat.
C. Konstanta kopling $^{1}J_{\\ce{CH}}$ melonjak menjadi $> 250\\text{ Hz}$ akibat hibridisasi $sp$.
D. Sinyal resonansi proton bergeser ke medan sangat rendah (downfield) pada $\\delta > 20\\text{ ppm}$.
E. Ikatan C-H terputus seketika tanpa dapat dideteksi oleh spektrometer.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Ikatan Agostik $\\sigma$-Kompleks
1. **Sifat Ikatan Agostik:**
   Interaksi agostik merupakan ikatan 3-pusat 2-elektron ($3c-2e$) yang melibatkan:
   - Donasi pasangan elektron dari ikatan $\\sigma_{\\ce{C-H}}$ alkana ke orbital-$d$ kosong logam iridium: $\\sigma_{\\ce{C-H}} \\to \\ce{Ir}(d_\\sigma)$.
   - Donasi balik (*back-bonding*) dari orbital-$d$ terisi logam ke orbital anti-ikatan alkana: $\\ce{Ir}(d_\\pi) \\to \\sigma^*_{\\ce{C-H}}$.
2. **Konsekuensi Spektroskopi Pelemahan Ikatan:**
   Akibat populasi parsial elektron pada orbital anti-ikatan $\\sigma^*_{\\ce{C-H}}$ dan pengurangan kerapatan elektron ikatan $\\sigma_{\\ce{C-H}}$:
   - Orde ikatan $\\ce{C-H}$ berkurang (panjang ikatan meregang dari $1{,}09\\text{ \\AA}$ ke $1{,}15 - 1{,}20\\text{ \\AA}$).
   - **Spektroskopi IR:** Konstanta gaya pegas ikatan turun drastis, sehingga frekuensi vibrasi ulur mengalami *redshift* signifikan dari rentang normal alkana ($2850 - 3000\\text{ cm}^{-1}$) menuju rentang agostik ($2200 - 2600\\text{ cm}^{-1}$).
   - **Spektroskopi $^{1}\\text{H}$ NMR:** Kerapatan s-elektron kontak Fermi antara inti $^{13}\\text{C}$ dan $^{1}\\text{H}$ tereduksi, sehingga konstanta kopling skalar satu ikatan $^{1}J_{\\ce{CH}}$ merosot drastis dari nilai khas $sp^3$ ($\sim 125\\text{ Hz}$) menjadi $\\sim 60 - 90\\text{ Hz}$.
   - Pergeseran kimia proton agostik bergerak ke medan sangat tinggi (*upfield / shielded*) di daerah $\\delta = -5 \\text{ hingga } -15\\text{ ppm}$ akibat arus cincin perisai orbital $d$ logam.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan penurunan $\\nu_{\\ce{C-H}}$ ke $2200-2600\\text{ cm}^{-1}$ dan penurunan $^{1}J_{\\ce{CH}}$ ke $60-90\\text{ Hz}$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Pahami ikatan 3c-2e agostik (donasi sigma_CH -> Ir dan back-donation Ir -> sigma*_CH).
Langkah 2: Analisis pelemahan ikatan C-H yang dihasilkan.
Langkah 3: Tinjau respons spektroskopi IR: pergeseran merah masif frekuensi vibrasi ulur C-H.
Langkah 4: Tinjau respons spektroskopi NMR: penurunan tajam kopling skalar 1J_CH akibat penurunan orde ikatan.`,
    source_event: 'IChO 2023 Switzerland Problem 8 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Polioxometalat (POM) Keggin & Transfer Muatan Robin-Day
  // =========================================================================
  {
    id: 508008,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Kluster Polioxometalat (POM), Struktur Keggin & Senyawa Valensi Campuran Robin-Day',
    title: 'Struktur Elektronik Polioxometalat Tipe Keggin [PW12O40]3- dan Sifat Valensi Campuran Robin-Day Kelas II Heteropoliblues',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Anion fosfotungstat tipe Keggin $[\\alpha\\text{-}\\ce{PW12O40}]^{3-}$ mengadopsi simetri tetrahedral ($T_d$) yang tersusun dari heteroatom pusat $\\ce{PO4}$ yang dikelilingi oleh 4 triad oktahedral trimetalat terhubung rusuk $[\\ce{W3O13}]$. Seluruh 12 atom wolfram berada pada bilangan oksidasi $+6$ ($5d^0$, diamagnetik, tidak berwarna).

Reduksi elektrokimia reversibel satu-elektron menghasilkan spesi valensi campuran tereduksi yang berwarna biru tua intens (*heteropoly blue*):
$$[\\alpha\\text{-}\\ce{PW12O40}]^{3-} + \\ce{e-} \\to [\\alpha\\text{-}\\ce{PW12O40}]^{4-}$$
Spesi anion tereduksi ini memuat satu atom $\\ce{W^V}$ ($5d^1$) dan sebelas atom $\\ce{W^{VI}}$ ($5d^0$).

Menurut klasifikasi Robin-Day untuk senyawa valensi campuran (*Mixed-Valence Compounds*):
- Spektrum serapan optik $[\\alpha\\text{-}\\ce{PW12O40}]^{4-}$ menunjukkan pita serapan lebar kuat di daerah inframerah dekat (*Near-IR*, $\\lambda_{\\text{maks}} \\approx 1200\\text{ nm}$, $\\epsilon \\approx 2000\\text{ M}^{-1}\\text{cm}^{-1}$) yang diatribusikan sebagai pita transfer muatan intervalensi (*Intervalence Charge-Transfer*, IVCT):
  $$\\ce{W_{(A)}^V + W_{(B)}^{VI} ->[h\\nu_{\\text{IVCT}}] W_{(A)}^{VI} + W_{(B)}^V}$$
- Spektrum EPR pada suhu helium cair ($4\\text{ K}$) menunjukkan sinyal elektron terlokalisasi pada satu pusat wolfram, sedangkan pada suhu kamar ($298\\text{ K}$) sinyal terdistribusi rata ke seluruh 12 atom wolfram akibat loncatan termal cepat (*hopping*).

Berdasarkan data spektroskopi dan dinamika elektronik tersebut, kelas berapakah senyawa *heteropoly blue* $[\\alpha\\text{-}\\ce{PW12O40}]^{4-}$ dalam klasifikasi Robin-Day?

A. Robin-Day Kelas II (kopling elektronik moderat dengan transfer muatan teraktivasi termal dan pita IVCT jelas).
B. Robin-Day Kelas I (tidak ada kopling elektronik, elektron terkunci permanen).
C. Robin-Day Kelas III (delokalisasi elektron sempurna tanpa barier aktivasi pada semua suhu).
D. Senyawa ini tidak termasuk senyawa valensi campuran karena semua atom W terisolasi.
E. Senyawa ini bersifat superkonduktor suhu kamar.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Klasifikasi Senyawa Valensi Campuran Robin-Day
1. **Definisi Tiga Kelas Robin-Day:**
   - **Kelas I (Zero Coupling, $\alpha^2 \approx 0$):** Interaksi antar-pusat redoks sangat lemah atau nihil (terpisah sangat jauh). Sifat masing-masing ion murni terisolasi. Tidak ada pita IVCT.
   - **Kelas II (Moderate Coupling, $0 < \alpha^2 < 0{,}5$):** Terdapat interaksi elektronik menengah. Keadaan dasar terlokalisasi pada sumur potensial ganda asimetris dengan barier energi aktivasi termal kecil ($E_{\\text{th}} = E_{\\text{op}}/4 = h\\nu_{\\text{IVCT}}/4$). Pada suhu rendah elektron terlokalisasi, namun pada suhu tinggi mengalami *hopping* cepat. Menunjukkan pita absorpsi IVCT khas di daerah Vis/NIR.
   - **Kelas III (Strong Coupling, $\alpha^2 \approx 0{,}5$):** Interaksi elektronik sangat kuat sehingga barier potensial runtuh menjadi sumur tunggal simetris di tengah. Elektron terdelokalisasi sempurna secara kuantum pada seluruh rentang temperatur (misal kation Creutz-Taube).
2. **Analisis Heteropoly Blue $[\\alpha\\text{-}\\ce{PW12O40}]^{4-}$:**
   - Adanya pita serapan IVCT tajam pada $1200\\text{ nm}$ ($h\\nu_{\\text{IVCT}} \\approx 1{,}03\\text{ eV}$).
   - Sifat transisi dinamis: pada $4\\text{ K}$ elektron terlokalisasi pada satu kation wolfram tunggal (terlihat pada EPR), namun pada $298\\text{ K}$ elektron melompat secara termal (*thermally activated hopping*) melintasi jembatan $\\ce{W-O-W}$ di antara 12 atom wolfram dengan frekuensi $> 10^8\\text{ s}^{-1}$.
   - Karakteristik ini adalah definisi prototipikal dari **Robin-Day Kelas II**.
3. **Evaluasi Opsi:**
   - Opsi A menugaskan sebagai Robin-Day Kelas II dengan penjelasan kopling moderat dan IVCT secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Ingat kriteria diagnostik klasifikasi Robin-Day (Kelas I: no coupling; Kelas II: localized ground state dengan pita IVCT dan hopping termal; Kelas III: delocalized murni).
Langkah 2: Evaluasi data spektroskopi POM: keberadaan pita IVCT pada 1200 nm.
Langkah 3: Evaluasi data EPR suhu: terlokalisasi pada 4 K dan melompat rata pada suhu kamar.
Langkah 4: Simpulkan klasifikasi sebagai Robin-Day Kelas II.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2020 Turkey Problem 7 (Karbena Fischer vs Schrock)
  // =========================================================================
  {
    id: 508009,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Logam Transisi Organometalik, Karbena Fischer vs Karbena Schrock',
    title: 'Diferensiasi Struktur Elektronik dan Reaktivitas Karbena Logam Transisi: Tipe Fischer vs Tipe Schrock',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kompleks alkilidena/karbena logam transisi diklasifikasikan ke dalam dua kategori utama:
1. **Karbena Fischer:** Biasanya terbentuk pada logam transisi deret tengah-akhir dalam tingkat oksidasi rendah (misal $\\ce{Cr^0, Mo^0, W^0}$), dengan ligan akseptor-$\\pi$ kuat (seperti $\\ce{CO}$) dan memiliki substituen pendonor-$\\pi$ heteroatom (seperti $-\\ce{OMe}, -\\ce{NR2}$) terikat langsung pada karbon karbena.
2. **Karbena Schrock:** Biasanya terbentuk pada logam transisi awal dalam tingkat oksidasi tinggi (misal $\\ce{Ti^{IV}, Ta^V, W^{VI}}$), dengan ligan non-akseptor-$\\pi$ (seperti $\\ce{Cp}$, alkil) dan tidak memiliki heteroatom pada karbon karbena.

Bagaimana perbandingan sifat elektronik formal fragmen karbena dan polaritas reaktivitas kimia atom karbon karbena ($\\ce{M=C_{\\text{karbena}}}$) antara kedua tipe tersebut?

A. Karbena Fischer: fragmen karbena berada pada keadaan singlet (donor 2e netral), karbon karbena bersifat **elektrofilik**; Karbena Schrock: fragmen karbena berada pada keadaan triplet (dianion formal $\\ce{R2C^{2-}}$), karbon karbena bersifat **nukleofilik**.
B. Karbena Fischer bersifat nukleofilik, sedangkan Karbena Schrock bersifat elektrofilik.
C. Kedua karbena sama-sama berada pada keadaan triplet dan tidak reaktif.
D. Karbena Fischer selalu membentuk ikatan tunggal, sedangkan Schrock membentuk ikatan aromatik.
E. Karbena Schrock hanya stabil dalam bentuk larutan asam pekat.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Karbena Fischer vs Schrock
1. **Analisis Karbena Fischer:**
   - Keadaan elektronik ligan: **Singlet** (sepasang elektron sunyi pada orbital $sp^2$, orbital $p_z$ kosong).
   - Logam berada pada biloks rendah ($d^6$, kaya elektron).
   - Karbon karbena bertindak sebagai pendonor $\\sigma$ ke logam, dan orbital $p_z$ kosongnya menerima donasi balik $\\pi$ dari logam dan donor-$\\pi$ dari heteroatom ($-\\ce{OMe}$).
   - Karena heteroatom elektronegatif menarik kerapatan elektron, muatan parsial pada karbon karbena adalah positif ($\\delta^+$).
   - Reaktivitas: Karbon karbena Fischer bersifat **ELEKTROFILIK** (sangat reaktif diserang oleh nukleofil seperti amina atau alkillitium).
2. **Analisis Karbena Schrock:**
   - Keadaan elektronik ligan: **Triplet** (dua elektron tak-berpasangan pada dua orbital berbeda).
   - Logam berada pada biloks tinggi ($d^0 - d^2$, miskin elektron, elektropositif tinggi).
   - Kedua elektron membentuk dua ikatan kovalen sejati (satu $\\sigma$ dan satu $\\pi$) dengan logam.
   - Karena keelektronegatifan karbon ($2{,}55$) jauh melampaui logam transisi awal seperti $\\ce{Ti}$ ($1{,}54$) atau $\\ce{Ta}$ ($1{,}50$), kerapatan elektron terpolarisasi kuat ke arah atom karbon ($\\ce{M^{\\delta+} = C^{\\delta-}}$).
   - Reaktivitas: Karbon karbena Schrock bersifat **NUKLEOFILIK** (bereaksi mirip reagen Wittig, menyerang gugus karbonil elektrofilik membentuk alkena / Reaksi Tebbe).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan keadaan singlet/triplet dan elektrofilik/nukleofilik secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi keadaan spin ligan karbena: Fischer = singlet, Schrock = triplet.
Langkah 2: Tinjau bilangan oksidasi logam dan polarisasi ikatan M=C.
Langkah 3: Analisis karakter reaktivitas atom karbon: Fischer elektrofilik (diserang nukleofil), Schrock nukleofilik (menyerang elektrofil).
Langkah 4: Pilih opsi A sebagai pernyataan yang tepat.`,
    source_event: 'IChO 2020 Turkey Problem 7 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Kluster Fe-S Ferredoksin & Double Exchange Anderson
  // =========================================================================
  {
    id: 508010,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Bioanorganik, Kluster Besi-Belerang [2Fe-2S] & Mekanisme Double Exchange Anderson',
    title: 'Magnetokimia dan Delokalisasi Elektron Kuantum pada Kluster Besi-Belerang Valensi Campuran [2Fe-2S]+',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kluster besi-belerang $[2\\ce{Fe}-2\\ce{S}]$ pada protein ferredoksin berfungsi sebagai mediator transfer elektron satu-elektron biologis yang esensial:
$$[2\\ce{Fe}-2\\ce{S}]^{2+} (\\text{teroksidasi: } 2 \\ce{Fe^{III}}) + \\ce{e-} \\rightleftharpoons [2\\ce{Fe}-2\\ce{S}]^+ (\\text{tereduksi: } \\ce{Fe^{III}} + \\ce{Fe^{II}})$$

Dalam bentuk tereduksi $[2\\ce{Fe}-2\\ce{S}]^+$:
- Kation $\\ce{Fe_{(A)}^{III}}$ ($d^5$, $S_A = 5/2$) dan $\\ce{Fe_{(B)}^{II}}$ ($d^6$, $S_B = 2$) berkoordinasi tetrahedral dengan ligan sulfida jembatan $\\mu_2\\text{-}\\ce{S}^{2-}$ dan sisteina.
- Dua fenomena kuantum bersaing menentukan struktur elektronik keadaan dasar:
  1. **Kopling Antiferomagnetik Heisenberg ($J$):** Cenderung memasangkan spin secara antiparalel untuk meminimalkan spin total.
  2. **Interaksi Pertukaran Ganda Anderson-Hasegawa (*Double Exchange*, $B$):** Elektron ekstra melompat bebas bolak-balik antara kedua atom besi via delokalisasi resonansi dengan energi transfer $B$. Menurut aturan Hund, lompatan elektron hanya diizinkan tanpa pembalikan spin jika spin kedua inti paralel (feromagnetik).

Hamiltonian efektif sistem valensi campuran dinyatakan sebagai:
$$E(S, \\pm) = -J S(S + 1) \\pm B \\left( \\frac{S + 1/2}{S_{\\text{maks}} + 1/2} \\right)$$
di mana spin total sistem dapat bernilai $S = |S_A - S_B|, \\dots, S_A + S_B = 1/2, 3/2, 5/2, 7/2, 9/2$.

Jika dalam ferredoksin alami kopling antiferomagnetik Heisenberg mendominasi secara mutlak di atas energi delokalisasi ($|J| \\gg B$, dengan $J < 0$):
Berapakah spin total keadaan dasar ($S$) dari kluster tereduksi $[2\\ce{Fe}-2\\ce{S}]^+$, dan apa karakteristik sinyal spektroskopi EPR-nya?

A. Keadaan dasar memiliki spin total $S = 1/2$ (akibat pasangan antiparalel sempurna $|5/2 - 2| = 1/2$), menghasilkan sinyal EPR rhombik khas dengan nilai $g_{\\text{rata-rata}} \\approx 1{,}96 < 2{,}0023$.
B. Keadaan dasar memiliki spin total $S = 9/2$ (akibat pasangan feromagnetik $5/2 + 2 = 9/2$).
C. Keadaan dasar memiliki spin total $S = 0$ dan bersifat diamagnetik sempurna tanpa sinyal EPR.
D. Keadaan dasar memiliki spin total $S = 5/2$ karena elektron kedua besi tidak berinteraksi.
E. Kluster terurai menjadi gas hidrogen sulfida seketika setelah reduksi.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Kluster Bioanorganik $[2\\ce{Fe}-2\\ce{S}]^+$
1. **Penentuan Spin Total Keadaan Dasar ($S$):**
   - Atom $\\ce{Fe^{III}}$ high-spin memiliki spin lokal $S_A = 5/2$.
   - Atom $\\ce{Fe^{II}}$ high-spin memiliki spin lokal $S_B = 2$.
   Kopling antiferomagnetik Heisenberg ($J < 0$, di mana energi $-J S(S+1)$ paling rendah untuk $S$ terkecil):
   Nilai spin total yang mungkin terbentuk dari penjumlahan momentum sudut:
   $$S \\in \\{|5/2 - 2|, \\dots, 5/2 + 2\\} = \\{1/2, 3/2, 5/2, 7/2, 9/2\\}$$
   Karena kopling antiferomagnetik superexchange melalui dua jembatan $\\mu_2$-sulfida sangat kuat ($|J| \\approx 100 - 200\\text{ cm}^{-1} \\gg B$):
   Keadaan dengan energi terendah mutlak adalah nilai spin total minimum:
   $$S = 5/2 - 2 = 1/2$$
2. **Karakteristik Spektroskopi EPR Ferredoksin:**
   Karena memiliki spin efektif $S = 1/2$, kluster tereduksi adalah spesi aktif EPR (*Kramers doublet*).
   Karena terjadi pencampuran spin-orbit antara keadaan $d^5$ dan $d^6$, nilai faktor $g$ efektif diturunkan dari rumus kopling spin:
   $$g = \\frac{7}{3} g(\\ce{Fe^{III}}) - \\frac{4}{3} g(\\ce{Fe^{II}})$$
   Dengan $g(\\ce{Fe^{III}}) \\approx 2{,}00$ dan $g(\\ce{Fe^{II}}) \\approx 2{,}05 - 2{,}15$:
   $$g_{\\text{rata-rata}} \\approx \\frac{7}{3}(2{,}00) - \\frac{4}{3}(2{,}10) = 4{,}67 - 2{,}80 = 1{,}87 - 1{,}96$$
   Nilai $g_{\\text{rata-rata}} < 2{,}00$ yang bergeser ke bawah (biasanya $g_x = 1{,}89, g_y = 1{,}95, g_z = 2{,}05$) adalah **tanda tangan diagnostik universal (*fingerprint*)** untuk kluster $[2\\ce{Fe}-2\\ce{S}]^+$ tereduksi dalam semua sistem biokimia.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan spin $S = 1/2$ dan sinyal EPR dengan $g < 2{,}0023$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Tentukan nilai spin ion Fe(III) HS (S=5/2) dan Fe(II) HS (S=2).
Langkah 2: Terapkan aturan kopling antiferomagnetik Heisenberg dominan: S_total = |S_A - S_B| = 5/2 - 2 = 1/2.
Langkah 3: Hitung g-factor efektif ferredoksin dari teori kopling spin g_avg ~ 1,96 (< 2,00).
Langkah 4: Simpulkan bahwa keadaan dasar S = 1/2 aktif EPR dengan fingerprint g < 2.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
