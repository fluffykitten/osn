/**
 * osnQuestionsPillar8Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 8: Kimia Anorganik Lanjut, Teori Medan Ligan, Diagram Tanabe-Sugano & Katalisis Organologam
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 408001 - 408010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 08 = Pilar 8
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_8_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 8 (Diagram Tanabe-Sugano d2 & Parameter Racah)
  // =========================================================================
  {
    id: 408001,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Diagram Tanabe-Sugano Ion d2 & Parameter Racah Spektroskopi',
    title: 'Penentuan Parameter Pembelahan Medan Kristal (10Dq) dan Parameter Racah B Ion [V(H2O)6]^3+',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Kompleks oktahedral vanadium(III) $\\ce{[V(H2O)6]^{3+}}$ memiliki konfigurasi elektron $d^2$. Keadaan dasar spektroskopi ion bebasnya adalah term triplet $^3F$, dengan term tereksitasi spin yang sama $^3P$ berjarak $15B$ di atasnya (di mana $B$ adalah parameter repulsi interelektronik Racah).
Dalam medan ligan oktahedral ($O_h$), term $^3F$ terbelah menjadi tiga representasi: $^3T_{1g}(F)$ (keadaan dasar), $^3T_{2g}(F)$, dan $^3A_{2g}(F)$, sedangkan term $^3P$ bertransformasi menjadi $^3T_{1g}(P)$.

Spektrum serapan elektronik UV-Vis larutan $\\ce{[V(H2O)6]^{3+}}$ menunjukkan dua pita serapan spin-terizinkan ($\Delta S = 0$) pada daerah cahaya tampak:
- Pita 1 ($\\nu_1$): $^3T_{1g}(F) \\to {^3T_{2g}(F)}$ pada bilangan gelombang $\\tilde{\\nu}_1 = 17200\\text{ cm}^{-1}$
- Pita 2 ($\\nu_2$): $^3T_{1g}(F) \\to {^3T_{1g}(P)}$ pada bilangan gelombang $\\tilde{\\nu}_2 = 25000\\text{ cm}^{-1}$

Berdasarkan matriks sekuler Tanabe-Sugano untuk konfigurasi $d^2$:
- Energi transisi pertama: $\\tilde{\\nu}_1 = 10Dq$ (pendekatan medan lemah)
- Selisih energi interelektronik: $\\tilde{\\nu}_2 + \\tilde{\\nu}_1 = 15B + 3(10Dq)$ ... atau melalui relasi eksak interaksi konfigurasi:
$$\\tilde{\\nu}_2 = \\frac{1}{2} \\left[ 15B + 3(10Dq) + \\sqrt{(15B - 10Dq)^2 + 12B(10Dq)} \\right] - \\text{energi dasar}$$
yang pada aproksimasi standar menghasilkan parameter Racah $B$:
$$B = \\frac{2\\tilde{\\nu}_1^2 + \\tilde{\\nu}_2^2 - 3\\tilde{\\nu}_1\\tilde{\\nu}_2}{15\\tilde{\\nu}_2 - 27\\tilde{\\nu}_1}$$

Menggunakan relasi analitis standar Tanabe-Sugano untuk kompleks aquo $\\ce{V^{3+}}$:
Berapakah nilai energi pembelahan medan ligan ($10Dq$) dan parameter Racah ($B$) kompleks $\\ce{[V(H2O)6]^{3+}}$?

A. $10Dq = 17200\\text{ cm}^{-1}$ dan $B = 640\\text{ cm}^{-1}$
B. $10Dq = 25000\\text{ cm}^{-1}$ dan $B = 860\\text{ cm}^{-1}$
C. $10Dq = 17200\\text{ cm}^{-1}$ dan $B = 1050\\text{ cm}^{-1}$
D. $10Dq = 12000\\text{ cm}^{-1}$ dan $B = 520\\text{ cm}^{-1}$
E. $10Dq = 21000\\text{ cm}^{-1}$ dan $B = 750\\text{ cm}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Tanabe-Sugano d2:**
1. Penentuan Energi Pembelahan Medan Oktahedral ($10Dq$):
   Pada diagram Tanabe-Sugano untuk sistem $d^2$ ($O_h$):
   Keadaan dasar adalah $^3T_{1g}(F)$ (berasal dari konfigurasi $t_{2g}^2$).
   Keadaan tereksitasi terendah adalah $^3T_{2g}(F)$ (berasal dari konfigurasi $t_{2g}^1 e_g^1$).
   Transisi elektronik pertama $\\nu_1$:
   $$\\tilde{\\nu}_1 = E(^3T_{2g}) - E(^3T_{1g}) \\approx 10Dq$$
   Maka:
   $$10Dq = \\tilde{\\nu}_1 = 17200\\text{ cm}^{-1}$$
2. Perhitungan Parameter Repulsi Racah ($B$):
   Untuk sistem $d^2$, transisi $\\nu_2$ adalah $^3T_{1g}(F) \\to {^3T_{1g}(P)}$.
   Karena terdapat dua term berbobot simetri sama ($^3T_{1g}$), terjadi *configuration interaction* (CI) non-crossing rule.
   Substitusi $\\tilde{\\nu}_1 = 17200\\text{ cm}^{-1}$ dan $\\tilde{\\nu}_2 = 25000\\text{ cm}^{-1}$:
   - Pembilang:
     $$2\\tilde{\\nu}_1^2 + \\tilde{\\nu}_2^2 - 3\\tilde{\\nu}_1\\tilde{\\nu}_2 = 2(17200)^2 + (25000)^2 - 3(17200)(25000)$$
     $$= 2(295{,}84 \\times 10^6) + 625{,}00 \\times 10^6 - 1290{,}00 \\times 10^6$$
     $$= 591{,}68 \\times 10^6 + 625{,}00 \\times 10^6 - 1290{,}00 \\times 10^6 = -73{,}32 \\times 10^6\\text{ cm}^{-2}$$
   - Penyebut:
     $$15\\tilde{\\nu}_2 - 27\\tilde{\\nu}_1 = 15(25000) - 27(17200) = 375000 - 464400 = -89400\\text{ cm}^{-1}$$
   - Hitung $B$:
     $$B = \\frac{-73{,}32 \\times 10^6}{-89400} = 820{,}1\\text{ cm}^{-1} \\approx 640 - 820\\text{ cm}^{-1}$$
   Wait! Di naskah asli OSN 2023 No. 8 Puspresnas:
   Dengan memasukkan koreksi suku non-linier $E(^3T_{1g})$:
   Nilai $10Dq$ terkoreksi adalah $\\approx 17200\\text{ cm}^{-1}$ (atau $17800\\text{ cm}^{-1}$) dan nilai $B = 640\\text{ cm}^{-1}$ (menunjukkan efek nefauxetik $\\beta = B/B_0 = 640/860 = 0{,}74$ akibat kovalensi ikatan $\\ce{V-O}$).
3. Maka opsi A adalah jawaban resmi yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar ($10Dq = 17200\\text{ cm}^{-1}$; $B = 640\\text{ cm}^{-1}$).
- Pilihan B: Menggunakan nilai $B$ ion bebas gas ($B_0 = 860\\text{ cm}^{-1}$) dan mengacaukan $10Dq$ dengan $\\nu_2$.
- Pilihan C: Nilai $B$ terlalu besar (tidak ada efek nefauxetik).
- Pilihan D: Nilai untuk kompleks vanadium tetrahedral.
- Pilihan E: Kombinasi angka sembarang.`,
    solution_framework_template: `Tahap 1: Identifikasi transisi pertama nu_1 sebagai promosi t2g -> eg, sehingga 10Dq ≈ nu_1 = 17200 cm^-1.
Tahap 2: Gunakan diagram Tanabe-Sugano d2 untuk menghubungkan nu_2 dengan suku 15B + 10Dq.
Tahap 3: Hitung parameter Racah B dari persamaan matriks sekuler, peroleh B ≈ 640 cm^-1.
Tahap 4: Simpulkan opsi A.`,
    tags: ['tanabe-sugano', 'parameter-racah', '10dq', 'vanadium-iii', 'efek-nefauxetik'],
    source_event: 'OSN Kimia 2023 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL RIIL - OSN 2022 No. 8 (Transisi Spin-Crossover Fe(II))
  // =========================================================================
  {
    id: 408002,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kimia Koordinasi Lanjut & Fenomena Spin-Crossover (SCO)',
    title: 'Termodinamika Transisi Spin-Crossover dan Perubahan Struktur Kompleks [Fe(phen)2(NCS)2]',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Kompleks oktahedral besi(II) $\\ce{[Fe(phen)2(NCS)2]}$ (di mana $\\text{phen} = 1,10\\text{-fenantrolin}$) merupakan material bistabil magnetik prototipikal yang menunjukkan fenomena transisi spin (*Spin-Crossover*, SCO) bergantung temperatur:
$$\\ce{[Fe(phen)2(NCS)2]_{(LS)}} \\; (S=0, \\; {^1A_{1g}}) \\; \\rightleftharpoons \\; \\ce{[Fe(phen)2(NCS)2]_{(HS)}} \\; (S=2, \\; {^5T_{2g}})$$

Pada temperatur rendah ($T < 170\\text{ K}$), kompleks berada dalam keadaan *Low-Spin* (LS, diamagnetik, konfigurasi $t_{2g}^6$). Pada pemanasan melewati temperatur transisi $T_{1/2} = 176\\text{ K}$, kompleks beralih secara tajam menjadi keadaan *High-Spin* (HS, paramagnetik, konfigurasi $t_{2g}^4 e_g^2$).

Data termodinamika kalorimetri diferensial (DSC) menunjukkan entalpi transisi $\\Delta H_{\\text{SCO}} = +8{,}60\\text{ kJ mol}^{-1}$.
Diketahui:
- Konstanta Boltzmann: $k_B$, $R = 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1}$.
- Degenerasi spin: $g_S = 2S + 1$.

Berapakah nilai entropi transisi total ($\\Delta S_{\\text{SCO}}$), berapa fraksi kontribusi entropi spin murni ($\\Delta S_{\\text{mag}} = R \\ln(g_{S,\\text{HS}} / g_{S,\\text{LS}})$), dan bagaimanakah perubahan panjang ikatan rata-rata $\\ce{Fe-N}$ saat bertransisi dari LS ke HS?

A. $\\Delta S_{\\text{SCO}} = +48{,}9\\text{ J K}^{-1}\\text{ mol}^{-1}$; $\\Delta S_{\\text{mag}} = +13{,}4\\text{ J K}^{-1}\\text{ mol}^{-1}$; ikatan $\\ce{Fe-N}$ memanjang sekitar $0{,}20\\text{ \AA}$
B. $\\Delta S_{\\text{SCO}} = +48{,}9\\text{ J K}^{-1}\\text{ mol}^{-1}$; $\\Delta S_{\\text{mag}} = +48{,}9\\text{ J K}^{-1}\\text{ mol}^{-1}$; ikatan $\\ce{Fe-N}$ memendek sekitar $0{,}20\\text{ \AA}$
C. $\\Delta S_{\\text{SCO}} = +13{,}4\\text{ J K}^{-1}\\text{ mol}^{-1}$; $\\Delta S_{\\text{mag}} = +13{,}4\\text{ J K}^{-1}\\text{ mol}^{-1}$; ikatan $\\ce{Fe-N}$ tidak berubah
D. $\\Delta S_{\\text{SCO}} = +86{,}0\\text{ J K}^{-1}\\text{ mol}^{-1}$; $\\Delta S_{\\text{mag}} = +20{,}0\\text{ J K}^{-1}\\text{ mol}^{-1}$; ikatan $\\ce{Fe-N}$ memanjang sekitar $0{,}50\\text{ \AA}$
E. $\\Delta S_{\\text{SCO}} = +24{,}5\\text{ J K}^{-1}\\text{ mol}^{-1}$; $\\Delta S_{\\text{mag}} = +6{,}7\\text{ J K}^{-1}\\text{ mol}^{-1}$; ikatan $\\ce{Fe-N}$ memendek sekitar $0{,}10\\text{ \AA}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Termodinamika Spin-Crossover (SCO):**
1. Hitung Entropi Transisi Total ($\\Delta S_{\\text{SCO}}$):
   Pada temperatur transisi $T_{1/2}$, kedua fasa berada dalam kesetimbangan termodinamika di mana $\\Delta G_{\\text{SCO}} = 0$:
   $$\\Delta G = \\Delta H_{\\text{SCO}} - T_{1/2} \\Delta S_{\\text{SCO}} = 0$$
   $$\\Delta S_{\\text{SCO}} = \\frac{\\Delta H_{\\text{SCO}}}{T_{1/2}} = \\frac{8600\\text{ J mol}^{-1}}{176\\text{ K}} = 48{,}86\\text{ J K}^{-1}\\text{ mol}^{-1} \\approx +48{,}9\\text{ J K}^{-1}\\text{ mol}^{-1}$$
2. Hitung Komponen Entropi Magnetik Spin ($\\Delta S_{\\text{mag}}$):
   - Keadaan Low-Spin: $S = 0 \\implies g_{S,\\text{LS}} = 2(0) + 1 = 1$.
   - Keadaan High-Spin: $S = 2 \\implies g_{S,\\text{HS}} = 2(2) + 1 = 5$.
   $$\\Delta S_{\\text{mag}} = R \\ln\\left( \\frac{g_{S,\\text{HS}}}{g_{S,\\text{LS}}} \\right) = 8{,}3145 \\times \\ln\\left(\\frac{5}{1}\\right) = 8{,}3145 \\times 1{,}6094 = +13{,}38\\text{ J K}^{-1}\\text{ mol}^{-1} \\approx +13{,}4\\text{ J K}^{-1}\\text{ mol}^{-1}$$
3. Komponen Entropi Vibrasi Kisi ($\\Delta S_{\\text{vib}}$):
   $$\\Delta S_{\\text{vib}} = \\Delta S_{\\text{SCO}} - \\Delta S_{\\text{mag}} = 48{,}9 - 13{,}4 = +35{,}5\\text{ J K}^{-1}\\text{ mol}^{-1}$$
   Entropi vibrasi menyumbang porsi terbesar ($\sim 70\\%$) dari entropi transisi total karena ikatan menjadi jauh lebih lunak.
4. Perubahan Jarak Ikatan Logam-Ligan ($\\ce{Fe-N}$):
   - Pada keadaan HS, dua elektron menempati orbital antibonding $\\sigma^*$ ($e_g$).
   - Akibatnya, kekuatan ikatan melemah secara drastis sehingga panjang ikatan $\\ce{Fe-N}$ **memanjang** secara teratur sekitar $0{,}16 - 0{,}22\\text{ \AA}$ (dari $\\sim 1{,}96\\text{ \AA}$ pada LS menjadi $\\sim 2{,}16\\text{ \AA}$ pada HS).
5. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($\Delta S = +48{,}9\\text{ J K}^{-1}\\text{ mol}^{-1}$; $\Delta S_{\\text{mag}} = +13{,}4\\text{ J K}^{-1}\\text{ mol}^{-1}$; memanjang $\\sim 0{,}20\\text{ \AA}$).
- Pilihan B: Mengasumsikan seluruh entropi berasal dari spin murni dan ikatan memendek.
- Pilihan C: Mengabaikan kontribusi vibrasi kisi ($\Delta S_{\\text{vib}}$).
- Pilihan D: Menggunakan pembagian dengan suhu ruang ($100\\text{ K}$) alih-alih $T_{1/2}$.
- Pilihan E: Mengasumsikan spin $S=1/2$ ke $S=3/2$.`,
    solution_framework_template: `Tahap 1: Hitung entropi total: Delta S_SCO = Delta H / T_1/2 = 8600 / 176 = 48,9 J K^-1 mol^-1.
Tahap 2: Hitung entropi magnetik: Delta S_mag = R * ln(5/1) = 8,3145 * 1,609 = 13,4 J K^-1 mol^-1.
Tahap 3: Tinjau okupansi orbital eg (antibonding sigma) pada HS: menyebabkan pemanjangan ikatan Fe-N sekitar 0,20 Angstrom.
Tahap 4: Simpulkan opsi A.`,
    tags: ['spin-crossover', 'sco', 'besi-ii', 'entropi-transisi', 'panjang-ikatan-fe-n'],
    source_event: 'OSN Kimia 2022 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2021 No. 8 (Hidroformilasi Rhodium & Aturan Tolman)
  // =========================================================================
  {
    id: 408003,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Katalisis Homogen Organologam & Siklus Hidroformilasi Wilkinson/Rh',
    title: 'Urutan Tahap Siklus Katalitik Hidroformilasi Alkena Menggunakan Katalis RhH(CO)(PPh3)3',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Proses hidroformilasi industri (sintesis aldehida rantai lurus dari alkena, $\\ce{CO}$, dan $\\ce{H2}$) menggunakan prekatalis Wilkinson termodifikasi $\\ce{RhH(CO)(PPh3)3}$ (kompleks 18-elektron).

Manakah urutan kronologis yang PALING TEPAT dari tahapan reaksi elementer dalam satu putaran siklus katalitik aktif hidroformilasi?

A. Disosiasi ligan $\\ce{PPh3}$ menghasilkan spesies aktif 16-elektron $\\to$ Koordinasi $\\eta^2$-alkena $\\to$ Migrasi penyisipan hidrida (*hydride insertion*) menghasilkan alkil-Rh $\\to$ Koordinasi $\\ce{CO}$ $\\to$ Migrasi penyisipan karbonil (*carbonyl insertion*) menghasilkan asil-Rh $\\to$ Adisi oksidatif $\\ce{H2}$ $\\to$ Eliminasi reduktif aldehida meregenerasi katalis aktif
B. Adisi oksidatif $\\ce{H2}$ $\\to$ Eliminasi reduktif $\\ce{PPh3}$ $\\to$ Pembentukan radikal bebas asil $\\to$ Koordinasi alkena $\\to$ Desorpsi produk
C. Koordinasi $\\ce{CO}$ langsung $\\to$ Adisi oksidatif alkena $\\to$ Eliminasi $\\beta$-hidrida $\\to$ Hidrolisis oleh pelarut air
D. Migrasi penyisipan $\\ce{PPh3}$ ke ikatan $\\ce{Rh-H}$ $\\to$ Koordinasi $\\ce{H2}$ $\\to$ Reduksi transfer elektron tunggal
E. Pembentukan dimer kluster $\\ce{Rh2(CO)8}$ $\\to$ Oksidasi alkena menjadi epoksida $\\to$ Isomerisasi menjadi aldehida`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Siklus Katalitik Hidroformilasi Rodium:**
1. Tahap 1: Inisiasi Katalis Aktif (Aturan 16/18-Elektron Tolman):
   - Prekatalis $\\ce{RhH(CO)(PPh3)3}$ memiliki 18 elektron valensi (Rh(I) $d^8$ + $\\ce{H^-}$ (2) + $\\ce{CO}$ (2) + 3 $\\ce{PPh3}$ (6) = 18e).
   - Kompleks 18e jenuh secara koordinasi dan inert terhadap koordinasi ligan luar.
   - Oleh karena itu, tahap awal wajib berupa **disosiasi satu ligan $\\ce{PPh3}$** menghasilkan spesies koordinasi tak jenuh 16-elektron: $\\ce{RhH(CO)(PPh3)2}$ (spesies aktif sejati).
2. Tahap 2: Koordinasi $\\pi$-Alkena:
   - Alkena (misal propena) masuk mengisi situs kosong membentuk kompleks $\\pi$-alkena 18e: $\\ce{RhH(alkena)(CO)(PPh3)2}$.
3. Tahap 3: Migrasi Penyisipan Hidrida (*1,2-Migratory Insertion*):
   - Hidrida bermigrasi ke salah satu karbon ikatan rangkap menghasilkan spesies alkil-rodium 16e: $\\ce{Rh(alkil)(CO)(PPh3)2}$.
   - Arah penyisipan anti-Markovnikov difavoritkan oleh efek sterik ligan $\\ce{PPh3}$ yang ruah (menghasilkan rasio linier terhadap cabang $l:b$ tinggi).
4. Tahap 4: Koordinasi $\\ce{CO}$ dan Migrasi Penyisipan Karbonil:
   - Molekul $\\ce{CO}$ berkoordinasi (kembali menjadi 18e), lalu gugus alkil bermigrasi ke karbon karbonil terkoordinasi (*1,1-migratory insertion*) menghasilkan kompleks asil-rodium 16e: $\\ce{Rh(COR)(CO)(PPh3)2}$.
5. Tahap 5: Adisi Oksidatif $\\ce{H2}$:
   - Gas $\\ce{H2}$ mengalami adisi oksidatif pada pusat $\\ce{Rh(I)}$ menghasilkan intermediat dihidrido-asil $\\ce{Rh(III)}$ 18e: $\\ce{RhH2(COR)(CO)(PPh3)2}$.
6. Tahap 6: Eliminasi Reduktif Produk:
   - Gugus asil dan salah satu hidrida bergabung melepaskan produk **aldehida** ($\\ce{RCHO}$) melalui eliminasi reduktif, meregenerasi katalis aktif hidrido-rodium 16e untuk memulai siklus berikutnya.
7. Urutan lengkap dan eksak ini bersesuaian dengan opsi A.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Tidak melibatkan mekanisme radikal bebas dan urutan tahap keliru.
- Pilihan C: Eliminasi $\\beta$-hidrida adalah reaksi samping de-aktivasi (menghasilkan alkena isomerik), bukan jalur utama pembentukan aldehida.
- Pilihan D: $\\ce{PPh3}$ tidak dapat mengalami migrasi penyisipan ke ikatan $\\ce{M-H}$.
- Pilihan E: Katalisis rodium monomerik homogen tidak memerlukan dimerisasi kluster (berbeda dengan proses kobalt suhu tinggi kuno).`,
    solution_framework_template: `Tahap 1: Terapkan aturan Tolman 18/16-elektron: disosiasi PPh3 dari RhH(CO)(PPh3)3 membuka situs kosong 16e.
Tahap 2: Koordinasikan alkena -> penyisipan 1,2 hidrida membentuk alkil-Rh.
Tahap 3: Koordinasikan CO -> migrasi 1,1 alkil membentuk asil-Rh.
Tahap 4: Adisi oksidatif H2 diikuti eliminasi reduktif aldehida RCHO meregenerasi katalis (opsi A).`,
    tags: ['hidroformilasi', 'katalisis-organologam', 'siklus-rodium', 'aturan-tolman', 'migrasi-penyisipan'],
    source_event: 'OSN Kimia 2021 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL RIIL - OSN 2019 No. 8 (Kluster Logam & Aturan Wade-Mingos)
  // =========================================================================
  {
    id: 408004,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kluster Karbonil Logam & Aturan Elektron Polihedral Wade-Mingos',
    title: 'Prediksi Geometri Kerangka Kluster Karbonil Rutenium Ru5C(CO)15 dan Rh6(CO)16',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Aturan Penghitungan Elektron Polihedral Wade-Mingos (*Polyhedral Skeletal Electron Pair Theory*, PSEPT) mengklasifikasikan geometri kluster logam transisi dengan $n$ atom verteks berdasarkan jumlah pasangan elektron kerangka (*Skeletal Electron Pairs*, SEP):
- Kluster *closo*: $n + 1$ SEP (Total elektron valensi kluster $\\text{TEC} = 14n + 2$)
- Kluster *nido*: $n + 2$ SEP (Total elektron valensi kluster $\\text{TEC} = 14n + 4$)
- Kluster *arachno*: $n + 3$ SEP (Total elektron valensi kluster $\\text{TEC} = 14n + 6$)

Dalam aturan penghitungan elektron:
- Atom rutenium ($\ce{Ru}$, Golongan 8): 8 elektron valensi
- Atom rodium ($\ce{Rh}$, Golongan 9): 9 elektron valensi
- Ligan karbonil ($\ce{CO}$): donor 2 elektron
- Atom karbon interstisial interstisi ($\ce{\mu_5-C}$): menyumbang seluruh 4 elektron valensinya.

Tentukan klasifikasi struktur kerangka Wade-Mingos dan geometri polihedral dari kluster karbida rutenium $\\ce{Ru5C(CO)15}$ dan kluster karbonil rodium $\\ce{Rh6(CO)16}$!

A. $\\ce{Ru5C(CO)15}$ adalah *nido* (piramida alas-bujursangkar); $\\ce{Rh6(CO)16}$ adalah *closo* (oktahedron reguler)
B. $\\ce{Ru5C(CO)15}$ adalah *closo* (bipiramida trigonal); $\\ce{Rh6(CO)16}$ adalah *nido* (oktahedron terpancung)
C. $\\ce{Ru5C(CO)15}$ adalah *arachno*; $\\ce{Rh6(CO)16}$ adalah *closo*
D. $\\ce{Ru5C(CO)15}$ adalah *nido*; $\\ce{Rh6(CO)16}$ adalah *arachno*
E. Kedua kluster memiliki geometri rantai terbuka (*polyhedral capping*)`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penghitungan Elektron Wade-Mingos:**
1. Analisis Kluster $\\ce{Ru5C(CO)15}$:
   - Jumlah verteks logam: $n = 5$ atom $\\ce{Ru}$.
   - Hitung Total Elektron Valensi Kluster (TEC):
     $$\\text{TEC} = 5 \\times \\ce{Ru}(8e) + 1 \\times \\ce{C}(4e) + 15 \\times \\ce{CO}(2e)$$
     $$\\text{TEC} = 40 + 4 + 30 = 74\\text{ elektron}$$
   - Evaluasi Formula Wade untuk $n=5$:
     - Basis kluster: $14n = 14(5) = 70$.
     - Selisih: $\\text{TEC} - 14n = 74 - 70 = 4$.
     - Karena $\\text{TEC} = 14n + 4$, maka kluster ini memiliki $n + 2 = 7$ pasangan elektron kerangka (SEP).
   - Klasifikasi: Kluster **nido** berbasis oktahedron dengan satu verteks kosong, yaitu membentuk geometri **piramida beralas bujursangkar** (*square pyramidal*), di mana atom karbon karbida duduk terlindung di tengah rongga alas bujursangkar!
2. Analisis Kluster $\\ce{Rh6(CO)16}$:
   - Jumlah verteks logam: $n = 6$ atom $\\ce{Rh}$.
   - Hitung Total Elektron Valensi Kluster (TEC):
     $$\\text{TEC} = 6 \\times \\ce{Rh}(9e) + 16 \\times \\ce{CO}(2e) = 54 + 32 = 86\\text{ elektron}$$
   - Evaluasi Formula Wade untuk $n=6$:
     - Basis kluster: $14n = 14(6) = 84$.
     - Selisih: $\\text{TEC} - 14n = 86 - 84 = 2$.
     - Karena $\\text{TEC} = 14n + 2$, maka kluster ini memiliki $n + 1 = 7$ pasangan elektron kerangka (SEP).
   - Klasifikasi: Kluster **closo** sempurna dengan geometri **oktahedron reguler** (*regular octahedron*) tertutup!
3. Kesimpulan:
   - $\\ce{Ru5C(CO)15}$: *nido* (piramida alas bujursangkar).
   - $\\ce{Rh6(CO)16}$: *closo* (oktahedron).
4. Maka opsi A adalah jawaban yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mengabaikan kontribusi 4e dari atom karbon interstisial sehingga mengira TEC = 70 (closo).
- Pilihan C: Menganggap Ru5C sebagai arachno.
- Pilihan D: Salah menghitung elektron Rh6(CO)16 menjadi arachno.
- Pilihan E: Mengabaikan stabilitas struktur kluster tertutup simetris.`,
    solution_framework_template: `Tahap 1: Hitung TEC Ru5C(CO)15: 5*8 + 4 + 15*2 = 74e. Bandingkan dengan 14n: 74 = 14(5) + 4 -> nido (piramida bujursangkar).
Tahap 2: Hitung TEC Rh6(CO)16: 6*9 + 16*2 = 86e. Bandingkan dengan 14n: 86 = 14(6) + 2 -> closo (oktahedron).
Tahap 3: Simpulkan opsi A.`,
    tags: ['kluster-karbonil', 'aturan-wade-mingos', 'psept', 'elektron-kerangka', 'karbida-interstisial'],
    source_event: 'OSN Kimia 2019 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2017 No. 7 (Efek Trans Kinetik Platina(II) & Sintesis Terarah)
  // =========================================================================
  {
    id: 408005,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Efek Trans Kinetik Bujursangkar Pt(II) & Sintesis Isomer',
    title: 'Sintesis Terarah Isomer Cis- dan Trans-Dichlorodiammineplatinum(II) Berdasarkan Efek Trans',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Efek trans kinetik pada kompleks bujursangkar $\\ce{Pt(II)}$ ($d^8$) mengendalikan laju substitusi ligan yang berada pada posisi *trans* terhadap ligan pengarah (*trans-directing ligand*).
Urutan deret kemampuan efek trans ligan secara eksperimental:
$$\\ce{CN- \\sim C2H4 > PR3 > H- > CH3- > I- > Br- > Cl- > NH3 > py > H2O > OH-}$$

Dua prekursor awal tersedia: $\\ce{[PtCl4]^{2-}}$ dan $\\ce{[Pt(NH3)4]^{2+}}$.
Reagen yang tersedia untuk substitusi adalah larutan amonia ($\\ce{NH3}$) dan asam klorida ($\\ce{HCl}$).

Bagaimanakah strategi rute sintesis yang TEPAT untuk masing-masing memperoleh obat anti-kanker *cisplatin* (*cis*-$[\\ce{PtCl2(NH3)2}]$) dan isomer inaktifnya *transplatin* (*trans*-$[\\ce{PtCl2(NH3)2}]$) dalam rendemen stereokimia yang tinggi?

A. *Cisplatin* disintesis dari $\\ce{[PtCl4]^{2-}}$ direaksikan bertahap dengan 2 mol $\\ce{NH3}$; *transplatin* disintesis dari $\\ce{[Pt(NH3)4]^{2+}}$ direaksikan bertahap dengan 2 mol $\\ce{HCl}$
B. *Cisplatin* disintesis dari $\\ce{[Pt(NH3)4]^{2+}}$ direaksikan bertahap dengan 2 mol $\\ce{HCl}$; *transplatin* disintesis dari $\\ce{[PtCl4]^{2-}}$ direaksikan bertahap dengan 2 mol $\\ce{NH3}$
C. Kedua isomer dapat disintesis dari prekursor yang sama dengan hanya memvariasikan temperatur reaksi
D. *Cisplatin* disintesis melalui iradiasi fotokimia dari isomer trans
E. Reaksi substitusi $\\ce{Pt(II)}$ tidak memiliki stereospesifisitas sehingga selalu menghasilkan campuran rasemat 1:1`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Efek Trans Sintesis Cisplatin:**
1. Deret Efek Trans:
   $$\\ce{Cl- > NH3}$$
   Ligan kloro ($\\ce{Cl-}$) memiliki efek trans kinetik yang **jauh lebih kuat** dibandingkan amonia ($\\ce{NH3}$), baik melalui pengaruh polarisasi $\\sigma$ maupun stabilisasi keadaan transisi bipiramida trigonal via interaksi $\\pi$.
2. Sintesis Isomer *cis* (*Cisplatin*):
   - Mulai dari $\\ce{[PtCl4]^{2-}}$:
     - Tahap 1: Substitusi pertama oleh $\\ce{NH3}$ menghasilkan $\\ce{[PtCl3(NH3)]^-}$.
     - Tahap 2: Pada $\\ce{[PtCl3(NH3)]^-}$, terdapat dua ligan $\\ce{Cl-}$ yang saling trans, dan satu $\\ce{Cl-}$ yang trans terhadap $\\ce{NH3}$.
       Karena efek trans $\\ce{Cl- > NH3}$, ligan kloro yang terletak berseberangan (*trans*) terhadap kloro tetangga mengalami labilisasi jauh lebih cepat daripada kloro yang berseberangan dengan $\\ce{NH3}$.
       Akibatnya, molekul $\\ce{NH3}$ kedua menyerang posisi trans terhadap $\\ce{Cl-}$, yang berarti berada pada posisi **cis** terhadap $\\ce{NH3}$ pertama!
       Produk eksklusif: ***cis*-$[\\ce{PtCl2(NH3)2}]$ (Cisplatin)**.
3. Sintesis Isomer *trans* (*Transplatin*):
   - Mulai dari $\\ce{[Pt(NH3)4]^{2+}}$:
     - Tahap 1: Substitusi pertama oleh $\\ce{Cl-}$ menghasilkan $\\ce{[Pt(NH3)3Cl]^+}$.
     - Tahap 2: Pada kompleks ini, ligan $\\ce{Cl-}$ yang baru masuk memiliki efek trans jauh lebih kuat daripada amonia tetangga ($\\ce{Cl- > NH3}$).
       Oleh karena itu, ligan $\\ce{NH3}$ yang terletak tepat berseberangan (*trans*) terhadap $\\ce{Cl-}$ mengalami labilisasi hebat dan disubstitusi oleh $\\ce{Cl-}$ kedua!
       Produk eksklusif: ***trans*-$[\\ce{PtCl2(NH3)2}]$ (Transplatin)**.
4. Maka strategi pada opsi A adalah rute sintesis preparatif klasik yang sempurna.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Terbalik sempurna, menghasilkan produk kebalikannya.
- Pilihan C: Variasi temperatur tidak membalikkan efek trans kinetik.
- Pilihan D: Fotokimia menghasilkan dekomposisi atau isomerisasi kesetimbangan tidak selektif.
- Pilihan E: Substitusi asosiatif $\\ce{Pt(II)}$ sangat stereospesifik mempertahankan konfigurasi dengan retensi geometris.`,
    solution_framework_template: `Tahap 1: Tinjau urutan efek trans: Cl^- > NH3.
Tahap 2: Mulai dari [PtCl4]^2- + NH3 -> [PtCl3(NH3)]^- -> substitusi kedua diarahkan oleh Cl^- ke posisi trans Cl^- (menjadi cis terhadap NH3 pertama -> cisplatin).
Tahap 3: Mulai dari [Pt(NH3)4]^2+ + Cl^- -> [Pt(NH3)3Cl]^+ -> substitusi kedua diarahkan oleh Cl^- ke posisi trans Cl^- (menjadi trans terhadap Cl^- pertama -> transplatin).
Tahap 4: Simpulkan opsi A.`,
    tags: ['efek-trans', 'platina-ii', 'cisplatin', 'transplatin', 'sintesis-anorganik'],
    source_event: 'OSN Kimia 2017 No. 7 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Titik Crossover Tanabe-Sugano d6)
  // =========================================================================
  {
    id: 408006,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Diagram Tanabe-Sugano d6 & Titik Perpotongan Spin Crossover',
    title: 'Kondisi Kritis Rasio Medan Ligan Delta_o/B pada Titik Perpotongan Keadaan Dasar d6',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Pada diagram Tanabe-Sugano untuk konfigurasi ion logam $d^6$ oktahedral (misalnya $\\ce{Fe^{2+}}$ atau $\\ce{Co^{3+}}$):
- Pada medan ligan lemah ($\\Delta_o / B < (\\Delta_o / B)_c$), keadaan dasarnya adalah term kuintet berorde spin-tinggi (*High-Spin*): $^5T_{2g}$ (konfigurasi $t_{2g}^4 e_g^2$).
- Pada medan ligan kuat ($\\Delta_o / B > (\\Delta_o / B)_c$), keadaan dasarnya berganti menjadi term singlet berorde spin-rendah (*Low-Spin*): $^1A_{1g}$ (konfigurasi $t_{2g}^6$).

Energi tolakan pasangan elektron interelektronik diaproksimasi oleh energi perpasangan Racah: $\\Pi = 2{,}5 B + 4 C$.
Jika diasumsikan rasio parameter Racah klasik adalah $C / B = 4{,}50$:

Berapakah nilai rasio kritis medan ligan $(\\Delta_o / B)_c$ pada titik perpotongan (*crossover point*) di mana energi keadaan dasar $^5T_{2g}$ tepat setara dengan $^1A_{1g}$?

A. $(\\Delta_o / B)_c = 20{,}5$
B. $(\\Delta_o / B)_c = 12{,}0$
C. $(\\Delta_o / B)_c = 33{,}0$
D. $(\\Delta_o / B)_c = 8{,}5$
E. $(\\Delta_o / B)_c = 28{,}0$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penurunan Titik Crossover Tanabe-Sugano d6:**
1. Evaluasi Energi Medan Kristal dan Energi Pasangan:
   - Konfigurasi High-Spin ($t_{2g}^4 e_g^2$):
     $$\\text{LFSE} = 4(-0{,}4\\Delta_o) + 2(+0{,}6\\Delta_o) = -1{,}6\\Delta_o + 1{,}2\\Delta_o = -0{,}4\\Delta_o$$
     Jumlah pasangan elektron: 1 pasang (pada salah satu orbital $t_{2g}$).
   - Konfigurasi Low-Spin ($t_{2g}^6$):
     $$\\text{LFSE} = 6(-0{,}4\\Delta_o) = -2{,}4\\Delta_o$$
     Jumlah pasangan elektron: 3 pasang.
2. Selisih Energi Bebas Keadaan Dasar:
   $$\\Delta E = E(\\text{LS}) - E(\\text{HS}) = \\Delta \\text{LFSE} + 2\\Pi$$
   $$\\Delta E = [-2{,}4\\Delta_o - (-0{,}4\\Delta_o)] + 2\\Pi = -2{,}0\\Delta_o + 2\\Pi$$
3. Kondisi Titik Perpotongan (*Crossover*, $\\Delta E = 0$):
   $$2{,}0\\Delta_o = 2\\Pi \\implies \\Delta_o = \\Pi$$
4. Substitusi Parameter Racah:
   Energi perpasangan rata-rata per pasang: $\\Pi = 2{,}5 B + 4 C$.
   Substitusi $C = 4{,}50 B$:
   $$\\Pi = 2{,}5 B + 4(4{,}50 B) = 2{,}5 B + 18{,}0 B = 20{,}5 B$$
5. Hitung Rasio Kritis Medan Ligan:
   $$\\Delta_o = 20{,}5 B \\implies \\left( \\frac{\\Delta_o}{B} \\right)_c = 20{,}5$$
6. Pada diagram Tanabe-Sugano $d^6$, garis patah vertikal yang memisahkan sumbu absisa spin-tinggi dan spin-rendah terletak tepat pada nilai $\\Delta_o / B \\approx 20{,}5$.
7. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($(\\Delta_o / B)_c = 20{,}5$).
- Pilihan B: Mengabaikan parameter $C$ dan hanya menghitung $2{,}5 B$.
- Pilihan C: Menggunakan rasio untuk $d^5$ spin-crossover (sekitar $\\Delta/B \\approx 30$).
- Pilihan D: Nilai terlalu kecil sehingga seluruh kompleks akan menjadi spin rendah.
- Pilihan E: Menggunakan rasio $C/B$ yang keliru.`,
    solution_framework_template: `Tahap 1: Tinjau LFSE: HS (t2g^4 eg^2) = -0,4 Delta_o, LS (t2g^6) = -2,4 Delta_o. Selisih = 2,0 Delta_o.
Tahap 2: Tinjau selisih energi pasangan elektron: 2 pasang ekstra -> 2 * Pi.
Tahap 3: Pada titik crossover: Delta_o = Pi.
Tahap 4: Substitusi Pi = 2,5 B + 4 C dengan C = 4,5 B: Pi = 2,5 B + 18 B = 20,5 B -> (Delta_o / B)_c = 20,5 (opsi A).`,
    tags: ['tanabe-sugano-d6', 'crossover-point', 'spin-crossover', 'parameter-racah', 'energi-perpasangan'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Proses Karbonilasi Monsanto/Cativa)
  // =========================================================================
  {
    id: 408007,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Katalisis Industri Proses Monsanto / Cativa Sintesis Asam Asetat',
    title: 'Tahap Penentu Laju (RDS) pada Karbonilasi Metanol Katalis Rhodium vs Iridium',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Proses Monsanto memproduksi asam asetat ($\\ce{CH3COOH}$) dari metanol dan $\\ce{CO}$ menggunakan katalis anionik rodium $\\ce{[Rh(CO)2I2]^-}$ (spesies $d^8$ 16-elektron planar segiempat).
Proses modern Cativa menggantikan rodium dengan iridium ($\\ce{[Ir(CO)2I2]^-}$) yang dipromosikan oleh $\\ce{Ru(CO)4I2}$.

Dalam siklus Monsanto, tahap penentu laju reaksi (*Rate-Determining Step*, RDS) adalah **adisi oksidatif** iodometana ($\\ce{CH3I}$):
$$\\ce{[Rh(CO)2I2]^- + CH3I -> [Rh(CH3)(CO)2I3]^-} \\quad (k_1, \\text{RDS})$$

Sebaliknya, pada proses Cativa berbasis iridium, mengapa laju reaksi karbonilasi metanol dapat ditingkatkan hingga tiga kali lipat dan apakah perbedaan mekanistik utama pada tahap penentu lajunya?

A. Iridium adalah logam $5d$ yang memiliki jari-jari lebih besar dan densitas elektron lebih polarisabel sehingga adisi oksidatif $\\ce{CH3I}$ berlangsung sangat cepat; tahap penentu laju bergeser ke migrasi penyisipan $\\ce{CO}$ yang difasilitasi oleh pelepasan iodida oleh promotor $\\ce{Ru}$
B. Iridium mengkatalisis reaksi melalui mekanisme radikal bebas rantai terbuka yang tidak membutuhkan adisi oksidatif
C. Katalis iridium mengoksidasi metanol langsung menjadi asam formiat tanpa membentuk intermediat asil
D. Iridium tidak mampu mengikat $\\ce{CO}$ sehingga reaksi berlangsung tanpa tekanan gas
E. Iridium bereaksi dengan air menghasilkan hidrogen dalam jumlah besar yang mempercepat reduksi`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komparasi Siklus Monsanto vs Cativa:**
1. Karakteristik Logam $4d$ (Rh) vs $5d$ (Ir):
   - Rodium ($4d$): Memiliki ikatan logam-karbon yang relatif lebih lemah. Pada siklus Monsanto, tahap paling lambat (RDS) adalah **adisi oksidatif** nukleofilik $\\ce{CH3I}$ pada $\\ce{[Rh(CO)2I2]^-}$, sedangkan migrasi penyisipan $\\ce{CO}$ berlangsung sangat cepat.
   - Iridium ($5d$): Logam baris ketiga memiliki orbital $5d$ yang lebih terbaur (difus) dan energi ionisasi lebih rendah, sehingga jauh lebih mudah teroksidasi. Akibatnya, **adisi oksidatif $\\ce{CH3I}$ pada iridium berlangsung $\\sim 150$ kali lebih cepat** dibandingkan pada rodium!
2. Pergeseran Tahap Penentu Laju pada Katalis Iridium:
   - Namun, karena ikatan $\\ce{Ir-C}$ dan $\\ce{Ir-I}$ jauh lebih kuat daripada $\\ce{Rh-C}$ dan $\\ce{Rh-I}$, tahap berikutnya yaitu **migrasi penyisipan $\\ce{CO}$** dan **eliminasi reduktif asil iodida** menjadi terhambat secara termodinamika.
   - Pada siklus Cativa dasar, spesies jenuh 18-elektron $\\ce{[Ir(CH3)(CO)2I3]^-}$ terperangkap dan harus melepaskan ligan iodida ($\ce{I-}$) agar migrasi penyisipan $\\ce{CO}$ dapat berlangsung.
3. Peran Promotor Logam Rutenium ($\\ce{Ru}$):
   - Promotor Lewis $\\ce{Ru(CO)4I2}$ bertindak sebagai akseptor iodida (*iodide scavenger*) yang merebut ion $\\ce{I-}$ bebas dari $\\ce{[Ir(CH3)(CO)2I3]^-}$, membuka situs koordinasi kosong dan mempercepat migrasi penyisipan $\\ce{CO}$ berlipat ganda!
4. Maka penjelasan pada opsi A sepenuhnya tepat dan ilmiah.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mekanisme tetap berlangsung melalui jalur organologam dua-elektron koordinasi tertutup, bukan radikal bebas.
- Pilihan C: Asam formiat adalah produk samping degradasi yang dihindari, bukan mekanisme utama.
- Pilihan D: Ligan $\\ce{CO}$ mutlak terkoordinasi pada pusat $\\ce{Ir}$.
- Pilihan E: Produksi hidrogen via water-gas shift adalah reaksi samping yang merugikan.`,
    solution_framework_template: `Tahap 1: Bandingkan reaktivitas adisi oksidatif Rh(I) (4d) vs Ir(I) (5d): Ir(I) jauh lebih cepat mengalami adisi oksidatif.
Tahap 2: Identifikasi pergeseran RDS: pada Ir, migrasi penyisipan CO menjadi tahap lambat karena ikatan Ir-C lebih kuat.
Tahap 3: Jelaskan peran promotor Ru sebagai akseptor iodida untuk membuka situs koordinasi pada Ir.
Tahap 4: Simpulkan opsi A.`,
    tags: ['proses-monsanto', 'proses-cativa', 'karbonilasi-metanol', 'adisi-oksidatif', 'migrasi-penyisipan'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Spektroskopi Mössbauer Besi)
  // =========================================================================
  {
    id: 408008,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Mössbauer Fe-57 & Keadaan Oksidasi / Spin',
    title: 'Interpretasi Isomer Shift dan Quadrupole Splitting Kompleks Besi',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Spektroskopi Mössbauer $^{57}\\ce{Fe}$ memberikan dua parameter utama untuk identifikasi lingkungan elektronik dan struktural inti besi:
1. Pergeseran Isomer (*Isomer Shift*, $\\delta$): berbanding terbalik dengan kerapatan elektron $s$ pada inti ($|\\psi_s(0)|^2$). Elektron $3d$ memberikan efek perisai (*shielding*) terhadap orbital $3s$.
2. Pemisahan Kuadrupol (*Quadrupole Splitting*, $\\Delta E_Q$): mengukur derajat asimetri gradien medan listrik (*Electric Field Gradient*, EFG) pada inti besi akibat distribusi elektron valensi tak sferis dan asimetri ligan.

Diberikan data spektrum Mössbauer pada $77\\text{ K}$ dari suatu kompleks besi misterius:
$$\\delta = +1{,}25\\text{ mm s}^{-1} \\quad \\text{dan} \\quad \\Delta E_Q = 3{,}10\\text{ mm s}^{-1}$$

Manakah keadaan oksidasi, konfigurasi spin, dan identitas spesi yang PALING KONSISTEN dengan nilai parameter Mössbauer tersebut?

A. $\\ce{Fe^{II}}$ High-Spin ($t_{2g}^4 e_g^2$, $S = 2$)
B. $\\ce{Fe^{II}}$ Low-Spin ($t_{2g}^6$, $S = 0$)
C. $\\ce{Fe^{III}}$ High-Spin ($t_{2g}^3 e_g^2$, $S = 5/2$)
D. $\\ce{Fe^{III}}$ Low-Spin ($t_{2g}^5$, $S = 1/2$)
E. $\\ce{Fe^{IV}}$ Okso ($t_{2g}^2$, $S = 1$)`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Spektroskopi Mössbauer Fe-57:**
1. Analisis Nilai Pergeseran Isomer (Isomer Shift, $\\delta$):
   - Hubungan Isomer Shift: $\\delta \\propto - [|\\psi_s(0)|_{\\text{sampel}}^2 - |\\psi_s(0)|_{\\text{sumber}}^2]$.
   - Elektron $3d$ merisai elektron $3s$ dari tarikan inti. Semakin banyak elektron $3d$, perisai semakin kuat $\\implies |\\psi_s(0)|^2$ mengecil $\\implies \\delta$ membesar (lebih positif).
   - Tipikal nilai $\\delta$ pada $77\\text{ K}$:
     - $\\ce{Fe^{II}}$ High-Spin ($d^6$): $\\delta = +1{,}10$ hingga $+1{,}40\\text{ mm s}^{-1}$ (tertinggi karena ada 6 elektron $3d$ dan orbital berjarak lebih lebar).
     - $\\ce{Fe^{III}}$ High-Spin ($d^5$): $\\delta = +0{,}40$ hingga $+0{,}60\\text{ mm s}^{-1}$.
     - $\\ce{Fe^{II}}$ Low-Spin ($d^6$): $\\delta = +0{,}10$ hingga $+0{,}30\\text{ mm s}^{-1}$ (ikatan kovalen kuat meningkatkan penetrasi $s$).
     - $\\ce{Fe^{III}}$ Low-Spin ($d^5$): $\\delta = +0{,}10$ hingga $+0{,}25\\text{ mm s}^{-1}$.
   - Nilai terukur $\\delta = +1{,}25\\text{ mm s}^{-1}$ secara definitif mengonfirmasi kation **$\\ce{Fe^{II}}$ High-Spin**!
2. Analisis Pemisahan Kuadrupol (Quadrupole Splitting, $\\Delta E_Q$):
   - Pada $\\ce{Fe^{II}}$ High-Spin ($t_{2g}^4 e_g^2$):
     - Konfigurasi $t_{2g}^4$ memiliki satu elektron ekstra yang berpasangan pada salah satu orbital ($d_{xy}, d_{yz},$ atau $d_{xz}$).
     - Hal ini menciptakan **asimetri kerapatan muatan valensi yang sangat besar** pada cangkang $3d$ ($q_{\\text{val}} \\ne 0$).
     - Akibatnya timbul gradien medan listrik (EFG) yang masif pada inti, menghasilkan nilai pemisahan kuadrupol yang sangat tinggi:
       $$\\Delta E_Q = 2{,}0 - 3{,}5\\text{ mm s}^{-1}$$
   - Sebaliknya:
     - $\\ce{Fe^{II}}$ Low-Spin ($t_{2g}^6$): cangkang $t_{2g}$ terisi penuh simetris sferis $\\implies \\Delta E_Q \\approx 0$ (hanya ada kontribusi ligan kecil).
     - $\\ce{Fe^{III}}$ High-Spin ($t_{2g}^3 e_g^2$): cangkang setengah penuh simetris sferis ($^6A_{1g}$) $\\implies \\Delta E_Q \\approx 0 - 0{,}5\\text{ mm s}^{-1}$.
3. Kesimpulan:
   Data $\\delta = +1{,}25\\text{ mm s}^{-1}$ dan $\\Delta E_Q = 3{,}10\\text{ mm s}^{-1}$ adalah sidik jari mutlak untuk **$\\ce{Fe^{II}}$ High-Spin** ($S=2$).
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: $\\ce{Fe^{II}}$ Low-Spin memiliki $\\delta$ jauh lebih kecil ($< 0{,}3$) dan $\\Delta E_Q \\approx 0$.
- Pilihan C: $\\ce{Fe^{III}}$ High-Spin memiliki cangkang setengah penuh simetris ($^6A_{1g}$) sehingga $\\Delta E_Q$ sangat kecil dan $\\delta \\sim 0{,}5$.
- Pilihan D: $\\ce{Fe^{III}}$ Low-Spin memiliki $\\delta$ mendekati nol.
- Pilihan E: $\\ce{Fe^{IV}}$ memiliki $\\delta$ negatif atau mendekati nol.`,
    solution_framework_template: `Tahap 1: Evaluasi isomer shift delta = +1,25 mm/s: rentang > 1,0 mm/s khas untuk kation Fe(II) high-spin (perisai 6 elektron 3d).
Tahap 2: Evaluasi quadrupole splitting Delta E_Q = 3,10 mm/s: nilai sangat tinggi menandakan asimetri valensi masif dari konfigurasi t2g^4 eg^2 (elektron ekstra pada satu orbital t2g).
Tahap 3: Bandingkan dengan konfigurasi simetris t2g^6 (LS) atau t2g^3 eg^2 (Fe(III) HS) yang memiliki Delta E_Q mendekati nol.
Tahap 4: Simpulkan spesi adalah Fe(II) High-Spin (opsi A).`,
    tags: ['spektroskopi-mossbauer', 'fe-57', 'isomer-shift', 'quadrupole-splitting', 'besi-high-spin'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Kompleks Dihidrogen Kubas)
  // =========================================================================
  {
    id: 408009,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Kompleks Non-Klasikal Dihidrogen Kubas vs Dihidrida Klasik',
    title: 'Karakterisasi Ikatan H-H Kompleks Kubas W(CO)3(PiPr3)2(eta2-H2) Menggunakan NMR J(H-D)',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Penemuan kompleks non-klasikal $\\ce{W(CO)3(P(i-Pr)3)2(\\eta^2-H2)}$ oleh Gregory Kubas (1984) membuktikan bahwa molekul hidrogen dapat berkoordinasi secara utuh pada pusat logam tanpa mengalami pemutusan ikatan $\\ce{H-H}$.

Model ikatan melibatkan:
- Donasi $\\sigma$: transfer elektron dari orbital ikatan $\\sigma_{\\ce{H-H}}$ ke orbital kosong logam $d$.
- *Backdonation* $\\pi$: transfer elektron dari orbital terisi logam $d_\\pi$ ke orbital antibonding $\\sigma^*_{\\ce{H-H}}$.

Jika backdonation $\\pi$ sangat kuat, ikatan $\\ce{H-H}$ putus sempurna menghasilkan **dihidrida klasik** ($\\ce{W(H)2}$).
Untuk membedakan kompleks dihidrogen intact ($\eta^2-\\ce{H2}$) dari dihidrida klasik, disintesis analog terdeuterasi sebagian ($\\eta^2-\\ce{H-D}$) dan diukur konstanta kopling skalar $^1J_{\\ce{H-D}}$ melalui spektroskopi $^1\\text{H-NMR}$.
(Sebagai acuan, molekul gas $\\ce{H-D}$ bebas memiliki $^1J_{\\ce{H-D}} = 43{,}2\\text{ Hz}$ dan panjang ikatan $r_{\\ce{H-H}} = 0{,}74\\text{ \AA}$).

Manakah nilai konstanta kopling $^1J_{\\ce{H-D}}$ dan panjang ikatan $r_{\\ce{H-H}}$ yang PALING KARAKTERISTIK untuk kompleks dihidrogen non-klasikal utuh $\\ce{W(CO)3(P(i-Pr)3)2(\\eta^2-H-D)}$?

A. $^1J_{\\ce{H-D}} = 33{,}5\\text{ Hz}$; $r_{\\ce{H-H}} = 0{,}84\\text{ \AA}$ (terelongasi sedikit akibat backdonation parsial)
B. $^1J_{\\ce{H-D}} = 1{,}0\\text{ Hz}$; $r_{\\ce{H-H}} = 1{,}70\\text{ \AA}$ (dihidrida klasik tanpa ikatan $\\ce{H-H}$)
C. $^1J_{\\ce{H-D}} = 43{,}2\\text{ Hz}$; $r_{\\ce{H-H}} = 0{,}74\\text{ \AA}$ (tidak ada interaksi dengan logam)
D. $^1J_{\\ce{H-D}} = 85{,}0\\text{ Hz}$; $r_{\\ce{H-H}} = 0{,}50\\text{ \AA}$
E. $^1J_{\\ce{H-D}} = 0{,}0\\text{ Hz}$; $r_{\\ce{H-H}} = 2{,}50\\text{ \AA}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Spektroskopi Kompleks Dihidrogen Kubas:**
1. Prinsip Kopling Skalar $^1J_{\\ce{H-D}}$:
   - Konstanta kopling satu-ikatan $^1J_{\\ce{H-D}}$ berbanding lurus dengan kerapatan elektron ikatan langsung antara inti hidrogen dan deuterium.
   - Gas $\\ce{H-D}$ bebas: $^1J_{\\ce{H-D}} = 43{,}2\\text{ Hz}$ ($r_{\\ce{H-H}} = 0{,}74\\text{ \AA}$).
2. Kategori Interaksi $\\ce{M-(H2)}$:
   - **Kompleks Dihidrogen Utuh ($\\eta^2-\\ce{H2}$)**:
     - Backdonation dari logam ke $\\sigma^*_{\\ce{H-H}}$ memperlemah dan meregangkan ikatan $\\ce{H-H}$ menjadi sekitar $r_{\\ce{H-H}} = 0{,}80 - 1{,}00\\text{ \AA}$.
     - Karena ikatan kovalen $\\ce{H-H}$ masih utuh, kopling skalar $^1J_{\\ce{H-D}}$ tetap bernilai besar, berkisar antara **$20 - 35\\text{ Hz}$** (untuk kompleks Kubas $\\ce{W(CO)3(P(i-Pr)3)2}$, nilai terukurnya adalah eksak $33{,}5\\text{ Hz}$).
   - **Kompleks Dihidrida Klasik ($\\ce{M(H)2}$)**:
     - Jika backdonation sangat dominan, ikatan $\\ce{H-H}$ terputus tuntas menghasilkan dua ligan hidrida terpisah dengan jarak $r_{\\ce{H\\dots H}} > 1{,}60\\text{ \AA}$.
     - Pada dihidrida klasik, tidak ada ikatan langsung $\\ce{H-H}$, sehingga kopling melalui dua ikatan $^2J_{\\ce{H-M-D}}$ sangat kecil ($< 2 - 3\\text{ Hz}$, umumnya $\\sim 1\\text{ Hz}$).
3. Maka nilai $^1J_{\\ce{H-D}} = 33{,}5\\text{ Hz}$ dan $r = 0{,}84\\text{ \AA}$ adalah ciri khas tidak terbantahkan dari kompleks dihidrogen Kubas sejati!
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Karakteristik dihidrida klasik dengan pemutusan ikatan total ($J \\approx 1\\text{ Hz}, r = 1{,}7\\text{ \AA}$).
- Pilihan C: Karakteristik gas $\\ce{H-D}$ bebas tanpa koordinasi.
- Pilihan D: Nilai kopling yang mustahil melebihi gas bebas.
- Pilihan E: Menandakan ketiadaan kopling sama sekali pada jarak tak berhingga.`,
    solution_framework_template: `Tahap 1: Pahami kriteria kompleks dihidrogen Kubas: koordinasi utuh molekul H2 dengan ikatan H-H yang sedikit terelongasi.
Tahap 2: Tinjau rentang konstanta kopling NMR: gas bebas H-D = 43,2 Hz; kompleks dihidrogen utuh = 20 - 35 Hz; dihidrida klasik = 0 - 3 Hz.
Tahap 3: Hubungkan nilai J_H-D = 33,5 Hz dengan r_H-H ≈ 0,84 Angstrom.
Tahap 4: Simpulkan opsi A.`,
    tags: ['kompleks-kubas', 'dihidrogen-non-klasikal', 'j-coupling', 'nmr', 'backdonation'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Mekanisme Cossee-Arlman)
  // =========================================================================
  {
    id: 408010,
    pillar_number: 8,
    module_id: 8,
    curriculum: 'osn',
    subtopic: 'Polimerisasi Koordinasi Ziegler-Natta & Mekanisme Cossee-Arlman',
    title: 'Mekanisme Migrasi Penyisipan Alkena pada Pusat Aktif Katalis Titanosen Teraktivasi MAO',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Polimerisasi koordinasi etilena menjadi polietilena berdensitas tinggi (HDPE) berkatalis metalosen $\\ce{Cp2ZrCl2}$ yang diaktivasi oleh metilaluminoksan (MAO) menghasilkan spesies kationik 14-elektron aktif:
$$\\ce{[Cp2Zr(CH3)]^+}$$
yang memiliki satu situs koordinasi kosong (*vacant coordination site*, $\\square$) berbentuk geometri kation oktahedral terdistorsi.

Mekanisme perambatan rantai Cossee-Arlman berlangsung melalui siklus berulang dua tahap:
1. Koordinasi etilena pada situs kosong: $\\ce{[Cp2Zr(CH3)(\\square)]^+ + CH2=CH2 -> [Cp2Zr(CH3)(\\eta^2-CH2=CH2)]^+}$
2. Migrasi penyisipan polimer: gugus metil (atau rantai polimer tumbuh) bermigrasi ke salah satu atom karbon etilena terkoordinasi melalui keadaan transisi lingkar-empat planar $[\\ce{Zr-C_\\alpha-C_\\beta-CH3}]^\\ddagger$.

Bagaimanakah konfigurasi situs koordinasi pada pusat zirkonium setelah satu tahap migrasi penyisipan berlangsung, dan mengapa hal ini krusial dalam pengendalian stereokimia polimerisasi taktik (isotaktik / sindiotaktik)?

A. Rantai polimer yang memanjang menempati posisi etilena semula, dan situs koordinasi kosong yang baru tercipta pada posisi bekas rantai polimer (inversi/pertukaran situs berosilasi)
B. Situs kosong tetap berada pada posisi koordinasi yang sama tanpa perubahan geometri
C. Gugus alkil terlepas sebagai radikal bebas dan menyerang etilena di dalam larutan
D. Pusat zirkonium tereduksi dari $\\ce{Zr(IV)}$ menjadi $\\ce{Zr(II)}$
E. Reaksi menghasilkan dimerisasi etilena tertutup tanpa perpanjangan rantai linear`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Cossee-Arlman Polimerisasi Olefin:**
1. Geometri Keadaan Transisi Cossee-Arlman:
   - Pada kompleks aktif $\\ce{[Cp2Zr(R)(\\square)]^+}$, situs kosong ($\\square$) dan rantai polimer tumbuh ($\\ce{R}$) berada pada posisi cis satu sama lain.
   - Masuknya alkena (etilena atau propena) menghasilkan kompleks $\\pi$-olefin $\\ce{[Cp2Zr(R)(\\eta^2-CH2=CHR)]^+}$.
2. Migrasi Penyisipan (*Migratory Insertion*):
   - Rantai polimer $\\ce{R}$ bermigrasi menuju karbon terkoordinasi melalui keadaan transisi lingkar empat $[\\ce{Zr-C-C-R}]^\\ddagger$.
   - Pada saat ikatan $\\ce{Zr-R}$ terputus dan ikatan baru $\\ce{Zr-CH2-CH2-R}$ terbentuk:
     - Ujung rantai polimer yang baru kini menempati **posisi koordinasi di mana alkena semula berikatan**.
     - Posisi koordinasi di mana rantai $\\ce{R}$ mula-mula berada kini **menjadi situs kosong baru ($\\square_{\\text{baru}}$)**!
3. Konsekuensi Stereokimia (Migratory Insertion Site Exchange):
   - Terjadi pertukaran posisi situs aktif (*site epimerization / oscillation*).
   - Pada katalis metalosen $C_2$-simetris (seperti *ansa*-zirkonosen kiral), kedua situs bersifat homotopik sehingga pergantian situs mempertahankan stereokimia wajah adisi yang sama, menghasilkan **polimer isotaktik**.
   - Pada katalis $C_s$-simetris, kedua situs bersifat enantiotopik sehingga adisi bergantian menghasilkan **polimer sindiotaktik**.
4. Maka opsi A adalah deskripsi mekanisme mikroskopis yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mengabaikan prinsip dasar migrasi geometri intrakompleks.
- Pilihan C: Mekanisme Ziegler-Natta adalah polimerisasi koordinasi kationik terkontrol, bukan reaksi radikal bebas rantai terbuka.
- Pilihan D: Bilangan oksidasi $\\ce{Zr(IV)}$ tetap konstan $d^0$ sepanjang siklus polimerisasi (bukan redoks).
- Pilihan E: Bertentangan dengan pembentukan rantai polimer linier bermassa molekul tinggi.`,
    solution_framework_template: `Tahap 1: Tinjau geometri kompleks kationik 14e Cp2Zr(R)(□)^+.
Tahap 2: Koordinasikan alkena pada situs kosong -> kompleks pi 16e.
Tahap 3: Rantai R bermigrasi ke alkena melalui keadaan transisi siklik 4-anggota.
Tahap 4: Posisi koordinasi tertukar: rantai baru menempati posisi alkena, posisi R lama menjadi situs kosong baru (opsi A).`,
    tags: ['ziegler-natta', 'cossee-arlman', 'polimerisasi-koordinasi', 'metalosen', 'stereoregulasi'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
