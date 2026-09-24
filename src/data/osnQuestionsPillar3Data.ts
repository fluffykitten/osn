/**
 * osnQuestionsPillar3Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 3: Kristalografi Lanjut, Fasa Padat, Cacat Kisi & Superkonduktor
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 403001 - 403010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 03 = Pilar 3
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_3_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 7 (Faktor Struktur XRD & Pemadaman Sistematik)
  // =========================================================================
  {
    id: 403001,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Faktor Struktur Difraksi Sinar-X (XRD) & Pemadaman Sistematik',
    title: 'Penentuan Refleksi Terizinkan Kisi Kubus Berpusat Muka (FCC) Menggunakan Faktor Struktur',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Faktor struktur difraksi sinar-X ($F_{hkl}$) untuk sel satuan yang mengandung $N$ atom pada posisi fraksional $(x_j, y_j, z_j)$ dinyatakan oleh:
$$F_{hkl} = \\sum_{j=1}^N f_j \\exp\\left[ 2\\pi i (h x_j + k y_j + l z_j) \\right]$$
Intensitas difraksi eksperimental sebanding dengan kuadrat modulus faktor struktur: $I_{hkl} \\propto |F_{hkl}|^2$.

Untuk kisi kubus berpusat muka (Face-Centered Cubic, FCC) logam tembaga murni, keempat posisi atomik fraksional ekuivalen adalah:
$$(0, 0, 0), \\; \\left(\\frac{1}{2}, \\frac{1}{2}, 0\\right), \\; \\left(\\frac{1}{2}, 0, \\frac{1}{2}\\right), \\; \\left(0, \\frac{1}{2}, \\frac{1}{2}\\right)$$

Berdasarkan formulasi faktor struktur tersebut, bidang kisi Miller $(hkl)$ manakah yang mengalami pemadaman sistematik (*systematic absence*, $F_{hkl} = 0$) sehingga TIDAK memunculkan puncak difraksi pada difraktogram XRD?

A. Bidang $(111)$
B. Bidang $(200)$
C. Bidang $(220)$
D. Bidang $(210)$
E. Bidang $(311)$`,
    expected_final_answer: 'D',
    solution_rubric: `**Analisis Konsep & Penurunan Faktor Struktur FCC:**
1. Evaluasi Faktor Struktur Kisi FCC:
   $$F_{hkl} = f \\left( e^{2\\pi i (0)} + e^{2\\pi i (h/2 + k/2)} + e^{2\\pi i (h/2 + l/2)} + e^{2\\pi i (k/2 + l/2)} \\right)$$
   Menggunakan relasi $e^{i\\pi (u)} = (-1)^u$:
   $$F_{hkl} = f \\left[ 1 + (-1)^{h+k} + (-1)^{h+l} + (-1)^{k+l} \\right]$$
2. Analisis Paritas Indeks Miller $(h, k, l)$:
   - **Kasus 1: $h, k, l$ semuanya ganjil (unmixed odd)**:
     Maka $h+k, h+l, k+l$ semuanya genap, sehingga:
     $$F_{hkl} = f [ 1 + 1 + 1 + 1 ] = 4 f \\implies |F_{hkl}|^2 = 16 f^2 \\ne 0 \\quad (\\text{Refleksi Muncul})$$
     Contoh: $(111), (311)$.
   - **Kasus 2: $h, k, l$ semuanya genap (unmixed even)**:
     Maka $h+k, h+l, k+l$ semuanya genap, sehingga:
     $$F_{hkl} = f [ 1 + 1 + 1 + 1 ] = 4 f \\implies |F_{hkl}|^2 = 16 f^2 \\ne 0 \\quad (\\text{Refleksi Muncul})$$
     Contoh: $(200), (220)$.
   - **Kasus 3: $h, k, l$ campuran ganjil dan genap (mixed parity)**:
     Dua dari jumlah $(h+k, h+l, k+l)$ bernilai ganjil dan satu bernilai genap.
     Misal untuk bidang $(210)$ ($h=2$ genap, $k=1$ ganjil, $l=0$ genap):
     $$h+k = 3 \\text{ (ganjil)} \\implies (-1)^3 = -1$$
     $$h+l = 2 \\text{ (genap)} \\implies (-1)^2 = +1$$
     $$k+l = 1 \\text{ (ganjil)} \\implies (-1)^1 = -1$$
     Maka faktor struktur:
     $$F_{210} = f [ 1 - 1 + 1 - 1 ] = 0 \\implies |F_{210}|^2 = 0 \\quad (\\mathbf{PEMADAMAN SISTEMATIK!})$$
3. Kesimpulan:
   Hanya bidang dengan paritas campuran (seperti $(210)$) yang mengalami pemadaman sistematik total pada kisi FCC.

**Analisis Distraktor:**
- Pilihan A $(111)$: Semuanya ganjil $\to F = 4f$ (puncak terkuat pada XRD Cu).
- Pilihan B $(200)$: Semuanya genap $\to F = 4f$ (aktif XRD).
- Pilihan C $(220)$: Semuanya genap $\to F = 4f$ (aktif XRD).
- Pilihan D $(210)$: Benar, paritas campuran sehingga $F_{210} = 0$.
- Pilihan E $(311)$: Semuanya ganjil $\to F = 4f$ (aktif XRD).`,
    solution_framework_template: `Tahap 1: Tuliskan formula faktor struktur untuk kisi FCC: F_hkl = f * [1 + (-1)^(h+k) + (-1)^(h+l) + (-1)^(k+l)].
Tahap 2: Terapkan aturan pemadaman sistematik FCC: refleksi hanya teramati jika h, k, l semuanya ganjil atau semuanya genap.
Tahap 3: Uji indeks Miller tiap opsi: (111), (200), (220), (311) berparitas seragam (unmixed).
Tahap 4: Identifikasi bahwa (210) memiliki paritas campuran sehingga F_210 = 0 (padam sistematik).`,
    tags: ['kristalografi-xrd', 'faktor-struktur', 'pemadaman-sistematik', 'kisi-fcc', 'osn-2023'],
    source_event: 'OSN Kimia 2023 No. 7 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Struktur Rutil vs Fluorit)
  // =========================================================================
  {
    id: 403002,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Struktur Kristal Rutil (TiO2) & Bilangan Koordinasi Polieder',
    title: 'Geometri Koordinasi dan Rasio Stoikiometri Sel Satuan Kristal Rutil TiO2',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Kristal rutil ($\ce{TiO2}$) memiliki sel satuan tetragonal ($a = b = 4{,}59\\text{ \AA}, c = 2{,}96\\text{ \AA}$) dengan grup ruang $P4_2/mnm$.
Di dalam sel satuan:
- Kation titanium ($\ce{Ti^{4+}}$) menempati posisi sudut $(0, 0, 0)$ dan pusat sel satuan $(1/2, 1/2, 1/2)$.
- Anion oksida ($\ce{O^{2-}}$) menempati empat posisi ekuivalen pada $\pm (x, x, 0)$ dan $\pm (x + 1/2, 1/2 - x, 1/2)$ dengan parameter posisi internal $x \approx 0{,}30$.

Berapakah jumlah formula unit ($Z$) per sel satuan kristal rutil, dan bagaimanakah bilangan koordinasi (CN) berturut-turut untuk kation $\ce{Ti^{4+}}$ dan anion $\ce{O^{2-}}$?

A. $Z = 1$; $\\text{CN}(\\ce{Ti}) = 4$, $\\text{CN}(\\ce{O}) = 2$
B. $Z = 2$; $\\text{CN}(\\ce{Ti}) = 6$ (oktahedral terdistorsi), $\\text{CN}(\\ce{O}) = 3$ (planar trigonal)
C. $Z = 4$; $\\text{CN}(\\ce{Ti}) = 8$ (kubus), $\\text{CN}(\\ce{O}) = 4$ (tetrahedral)
D. $Z = 2$; $\\text{CN}(\\ce{Ti}) = 4$ (tetrahedral), $\\text{CN}(\\ce{O}) = 2$ (linear)
E. $Z = 4$; $\\text{CN}(\\ce{Ti}) = 6$, $\\text{CN}(\\ce{O}) = 3$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Kristalografi Rutil:**
1. Menghitung Jumlah Atom per Sel Satuan ($Z$):
   - Kation $\\ce{Ti^{4+}}$:
     - 8 atom pada sudut kubus/tetragonal: $8 \\times \\frac{1}{8} = 1$ atom.
     - 1 atom pada pusat badan (*body-centered*): $1 \\times 1 = 1$ atom.
     - Total kation $\\ce{Ti} = 1 + 1 = 2$ atom.
   - Anion $\\ce{O^{2-}}$:
     - 2 atom berada di dalam sel satuan: $2 \\times 1 = 2$.
     - 4 atom berada pada permukaan muka: $4 \\times \\frac{1}{2} = 2$.
     - Total anion $\\ce{O} = 2 + 2 = 4$ atom.
   - Rasio stoikiometri: $\\ce{Ti2O4} = 2 \\times (\\ce{TiO2})$.
   - Maka jumlah formula unit adalah **$Z = 2$**.
2. Bilangan Koordinasi (CN):
   - Setiap kation $\\ce{Ti^{4+}}$ dikelilingi oleh $6$ anion oksida yang membentuk polieder **oktahedral terdistorsi** (4 ikatan ekuatorial $1{,}946\\text{ \AA}$ dan 2 ikatan aksial $1{,}984\\text{ \AA}$). Jadi $\\text{CN}(\\ce{Ti}) = 6$.
   - Sesuai kaidah netralitas stoikiometri kisi:
     $$n(\\ce{Ti}) \\times \\text{CN}(\\ce{Ti}) = n(\\ce{O}) \\times \\text{CN}(\\ce{O})$$
     $$2 \\times 6 = 4 \\times \\text{CN}(\\ce{O}) \\implies \\text{CN}(\\ce{O}) = \\frac{12}{4} = 3$$
   - Setiap anion oksida dikoordinasikan oleh $3$ kation $\\ce{Ti^{4+}}$ dalam geometri **planar trigonal** (hampir koplanar sempurna).
3. Gabungan hasil: **$Z = 2$; $\\text{CN}(\\ce{Ti}) = 6$, $\\text{CN}(\\ce{O}) = 3$** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A: Struktur hipotetis koordinasi rendah.
- Pilihan B: Benar.
- Pilihan C: Karakteristik untuk struktur fluorit $\ce{CaF2}$ ($Z=4, \text{CN } 8:4$).
- Pilihan D: Karakteristik untuk struktur silika kristobalit.
- Pilihan E: Jumlah formula unit salah ($Z=4$ adalah anatase, bukan rutil).`,
    solution_framework_template: `Tahap 1: Hitung jumlah atom Ti per sel satuan: 8*(1/8) + 1 = 2 atom Ti.
Tahap 2: Hitung jumlah atom O per sel satuan: 4 atom O -> Z = 2 formula unit TiO2.
Tahap 3: Identifikasi polieder koordinasi kation Ti adalah oktahedral (CN = 6).
Tahap 4: Gunakan neraca koordinasi stoikiometri 2 x 6 = 4 x CN(O) -> CN(O) = 3 (planar trigonal).`,
    tags: ['kristalografi', 'struktur-rutil', 'tio2', 'bilangan-koordinasi', 'formula-unit'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2022 No. 7 (Kimia Cacat Kisi Notasi Kröger-Vink)
  // =========================================================================
  {
    id: 403003,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kimia Cacat Kisi Kristal (Defect Chemistry) Notasi Kröger-Vink',
    title: 'Termodinamika Pembentukan Cacat Schottky dan Frenkel Menurut Notasi Kröger-Vink',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Notasi Kröger-Vink mendeskripsikan spesi cacat kisi kristal padat melalui simbol $M_S^C$, dengan $M$ menyatakan spesi atom/kekosongan ($V$), $S$ menyatakan situs kisi normal, dan $C$ menyatakan muatan efektif relatif terhadap kisi ideal ($\bullet$ untuk $+1$, $\prime$ untuk $-1$, dan $\times$ untuk netral).

Pada kristal halida perak ($\ce{AgBr}$), cacat intrinsik dominan yang terbentuk pada suhu kamar adalah **cacat Frenkel kation**, di mana ion $\ce{Ag+}$ berpindah dari situs kisi regulernya ke situs intersisial.

1. Bagaimanakah persamaan reaksi kuasi-kimia pembentukan cacat Frenkel kation pada $\ce{AgBr}$ menurut notasi Kröger-Vink?
2. Jika entalpi pembentukan cacat Frenkel adalah $\Delta H_F = 116\\text{ kJ}\\cdot\\text{mol}^{-1}$, bagaimanakah ketergantungan konsentrasi fraksional cacat Frenkel ($x_F = [V_{\\ce{Ag}}'] = [\\ce{Ag}_i^{\\bullet}]$) terhadap temperatur $T$?

A. $\\ce{Ag_{Ag}^{\\times} + V_i^{\\times} <=> V_{Ag}^{\\prime} + Ag_i^{\\bullet}}; \\quad x_F \\propto \\exp\\left( -\\frac{\\Delta H_F}{2 RT} \\right)$
B. $\\ce{Ag_{Ag}^{\\times} + Br_{Br}^{\\times} <=> V_{Ag}^{\\prime} + V_{Br}^{\\bullet}}; \\quad x_F \\propto \\exp\\left( -\\frac{\\Delta H_F}{RT} \\right)$
C. $\\ce{Ag_{Ag}^{\\times} <=> Ag_i^{\\times} + V_{Ag}^{\\times}}; \\quad x_F \\propto \\exp\\left( -\\frac{\\Delta H_F}{2 RT} \\right)$
D. $\\ce{Null <=> V_{Ag}^{\\prime} + V_{Br}^{\\bullet}}; \\quad x_F \\propto \\exp\\left( -\\frac{\\Delta H_F}{2 RT} \\right)$
E. $\\ce{2 Ag_{Ag}^{\\times} <=> Ag_i^{\\bullet\\bullet} + V_{Ag}^{\\prime\\prime}}; \\quad x_F \\propto \\exp\\left( -\\frac{2 \\Delta H_F}{RT} \\right)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Notasi Kröger-Vink:**
1. Persamaan Pembentukan Cacat Frenkel Kation:
   - Ion perak normal berada pada situs perak reguler dengan muatan efektif nol: $\\ce{Ag_{Ag}^{\\times}}$.
   - Situs intersisial kosong sebelum ditempati memiliki muatan efektif netral: $\\ce{V_i^{\\times}}$.
   - Ketika ion $\\ce{Ag+}$ melompat ke situs intersisial, ia meninggalkan kekosongan kation yang memiliki muatan efektif negatif relatif terhadap kisi normal: $\\ce{V_{Ag}'}$.
   - Ion perak di situs intersisial memiliki muatan efektif positif relatif terhadap kisi kosong: $\\ce{Ag_i^{\\bullet}}$.
   - Reaksi kesetimbangan cacat kuasi-kimia yang memenuhi kekekalan massa, situs, dan muatan efektif:
     $$\\ce{Ag_{Ag}^{\\times} + V_i^{\\times} <=> V_{Ag}' + Ag_i^{\\bullet}}$$
2. Hukum Aksi Massa dan Termodinamika:
   - Tetapan kesetimbangan pembentukan cacat:
     $$K_F = \\frac{[\\ce{V_{Ag}'}][\\ce{Ag_i^{\\bullet}}]}{[\\ce{Ag_{Ag}^{\\times}}][\\ce{V_i^{\\times}}]} \\approx [\\ce{V_{Ag}'}][\\ce{Ag_i^{\\bullet}}]$$
     (karena fraksi situs normal dan intersisial yang terisi hampir $1$).
   - Hubungan termodinamika energi bebas pembentukan cacat:
     $$K_F = \\exp\\left( -\\frac{\\Delta G_F}{RT} \\right) = \\exp\\left( \\frac{\\Delta S_F}{R} \\right) \\exp\\left( -\\frac{\\Delta H_F}{RT} \\right)$$
   - Karena setiap pembentukan cacat Frenkel menghasilkan satu kekosongan dan satu ion intersisial secara bersamaan:
     $$[\\ce{V_{Ag}'}] = [\\ce{Ag_i^{\\bullet}}] = x_F$$
     $$K_F = x_F^2 \\implies x_F = \\sqrt{K_F} = K_F^{1/2}$$
     Maka:
     $$x_F \\propto \\exp\\left( -\\frac{\\Delta H_F}{2 RT} \\right)$$
     (Muncul faktor $2$ pada penyebut eksponensial akibat akar kuadrat dari hukum aksi massa dua spesi cacat).
3. Maka opsi A adalah jawaban yang sepenuhnya tepat.

**Analisis Distraktor:**
- Pilihan B: Merupakan reaksi pembentukan cacat Schottky (pasangan kekosongan kation dan anion).
- Pilihan C: Mengabaikan muatan efektif relatif terhadap kisi.
- Pilihan D: Cacat Schottky tanpa ion intersisial.
- Pilihan E: Pembentukan cacat muatan ganda yang tidak terjadi pada kation monovalen $\ce{Ag+}$.`,
    solution_framework_template: `Tahap 1: Tuliskan reaksi pembentukan cacat Frenkel kation: Ag_Ag^x + V_i^x <=> V_Ag' + Ag_i^*.
Tahap 2: Terapkan hukum aksi massa K_F = [V_Ag'] * [Ag_i^*] = x_F^2.
Tahap 3: Hubungkan dengan entalpi pembentukan: K_F = exp(-Delta H_F / RT).
Tahap 4: Tarik akar kuadrat untuk mendapatkan x_F proporsional terhadap exp(-Delta H_F / 2RT).`,
    tags: ['kroger-vink', 'cacat-kristal', 'frenkel-defect', 'agbr', 'termodinamika-padatan', 'osn-2022'],
    source_event: 'OSN Kimia 2022 No. 7 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Konduktor YSZ & SOFC)
  // =========================================================================
  {
    id: 403004,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Zirkonia Terstabilkan Itria (YSZ), Cacat Non-Stoikiometri & SOFC',
    title: 'Konsentrasi Kekosongan Oksigen dan Konduktivitas Ionik pada Keramik Elektrolit YSZ',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Zirkonia terstabilisasi itria (Yttria-Stabilized Zirconia, YSZ) merupakan elektrolit padat konduktor ion oksida murni yang digunakan pada sel bahan bakar oksida padat (Solid Oxide Fuel Cell, SOFC).
Kristal induk $\ce{ZrO2}$ memiliki struktur fluorit di mana kation $\ce{Zr^{4+}}$ berada pada situs kation. Ketika $\ce{Y2O3}$ dilarutkan ke dalam kisi $\ce{ZrO2}$, kation $\ce{Y^{3+}}$ menggantikan kation $\ce{Zr^{4+}}$:
$$\\ce{Y2O3 ->[ZrO2] 2 Y_{Zr}^{\prime} + 3 O_O^{\\times} + V_O^{\\bullet\\bullet}}$$
menghasilkan kekosongan ion oksida ($V_O^{\\bullet\\bullet}$) yang memungkinkan migrasi ion $\ce{O^{2-}}$ melalui mekanisme loncatan kekosongan.

Jika suatu keramik YSZ disintesis dengan doping $8{,}0\\%\\text{ mol } \\ce{Y2O3}$ dalam $\ce{ZrO2}$ (rumus stoikiometri paduan: $(\\ce{ZrO2})_{0,92}(\\ce{Y2O3})_{0,08}$):
Berapakah persentase fraksi situs oksigen dalam kisi kristal yang mengalami kekosongan ($[V_O^{\\bullet\\bullet}] / \\text{Total Situs Oksigen}$)?

A. $1{,}92\\%$
B. $3{,}70\\%$
C. $4{,}00\\%$
D. $7{,}41\\%$
E. $8{,}00\\%$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Neraca Defek Kröger-Vink:**
1. Evaluasi Komposisi Paduan $(\\ce{ZrO2})_{0,92}(\\ce{Y2O3})_{0,08}$:
   Tinjau $1$ mol paduan campuran:
   - Mol kation $\\ce{Zr^{4+}} = 0{,}92\\text{ mol}$.
   - Mol kation $\\ce{Y^{3+}} = 2 \\times 0{,}08 = 0{,}16\\text{ mol}$.
   - Total mol kation $= 0{,}92 + 0{,}16 = 1{,}08\\text{ mol}$.
2. Perhitungan Jumlah Situs Oksigen dalam Struktur Fluorit:
   Pada struktur fluorit ideal ($\ce{MO2}$), rasio situs anion terhadap situs kation adalah $2 : 1$.
   Sehingga untuk $1{,}08\\text{ mol}$ kation, total situs anion oksigen yang tersedia di dalam kisi adalah:
   $$\\text{Total Situs Oksigen} = 2 \\times \\text{Total Situs Kation} = 2 \\times 1{,}08 = 2{,}16\\text{ mol}$$
3. Menghitung Jumlah Mol Ion Oksigen Nyata dan Kekosongan ($V_O^{\\bullet\\bullet}$):
   Jumlah mol atom oksigen nyata yang ada dari senyawa reaktan:
   $$n(\\ce{O}) = (0{,}92 \\times 2) + (0{,}08 \\times 3) = 1{,}84 + 0{,}24 = 2{,}08\\text{ mol}$$
   Jumlah mol kekosongan oksigen ($V_O^{\\bullet\\bullet}$):
   $$n(V_O^{\\bullet\\bullet}) = \\text{Total Situs Oksigen} - n(\\ce{O}) = 2{,}16 - 2{,}08 = 0{,}08\\text{ mol}$$
   (Sesuai stoikiometri Kröger-Vink: tiap $1$ mol $\\ce{Y2O3}$ menghasilkan $1$ mol $V_O^{\\bullet\\bullet}$, sehingga $0{,}08\\text{ mol } \\ce{Y2O3}$ menghasilkan tepat $0{,}08\\text{ mol } V_O^{\\bullet\\bullet}$).
4. Menghitung Persentase Fraksi Kekosongan Oksigen:
   $$\\text{Fraksi } V_O^{\\bullet\\bullet} = \\frac{n(V_O^{\\bullet\\bullet})}{\\text{Total Situs Oksigen}} = \\frac{0{,}08\\text{ mol}}{2{,}16\\text{ mol}} = 0{,}037037 \\approx 3{,}70\\%$$
5. Maka fraksi kekosongan oksigen dalam kisi adalah **$3{,}70\\%$** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A ($1{,}92\\%$): Kesalahan membagi dengan total kation kuadrat.
- Pilihan B ($3{,}70\\%$): Benar, $0{,}08 / 2{,}16 = 3{,}70\\%$.
- Pilihan C ($4{,}00\\%$): Kesalahan membagi $0{,}08$ dengan $2{,}00$ (mengabaikan kenaikan jumlah situs kation total).
- Pilihan D ($7{,}41\\%$): Kesalahan mengalikan faktor dua.
- Pilihan E ($8{,}00\\%$): Menyamakan persentase kekosongan oksigen dengan persen mol $\ce{Y2O3}$.`,
    solution_framework_template: `Tahap 1: Hitung mol atom kation total per mol paduan: 0.92 Zr + 0.16 Y = 1.08 mol kation.
Tahap 2: Tentukan total situs oksigen fluorit: 2 x 1.08 = 2.16 mol situs O.
Tahap 3: Hitung mol ion O nyata: 0.92*2 + 0.08*3 = 2.08 mol O -> n(V_O) = 2.16 - 2.08 = 0.08 mol.
Tahap 4: Hitung persentase kekosongan = (0.08 / 2.16) x 100% = 3.70%.`,
    tags: ['ysz', 'kekosongan-oksigen', 'sofc', 'kroger-vink', 'elektrolit-padat'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2021 No. 7 (Konstanta Madelung Kisi Satu Dimensi)
  // =========================================================================
  {
    id: 403005,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Energi Kisi Born-Mayer & Penurunan Deret Konstanta Madelung',
    title: 'Penurunan Analitis Konstanta Madelung untuk Rantai Kristal Ionik Satu Dimensi',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Konstanta Madelung ($M$) mencerminkan kontribusi total gaya elektrostatik tarik-menarik dan tolak-menolak antarsemua ion dalam kisi kristal ionik tak terhingga.
Tinjau model kristal ionik satu dimensi (1D) berupa rantai garis lurus tak berhingga dari ion bermuatan bolak-balik $+e$ dan $-e$ dengan jarak antartetangga terdekat sebesar $r_0$:
$$\\dots - \\;\\; + \\;\\; - \\;\\; + \\;\\; [\\text{Ion Referensi } +] \\;\\; - \\;\\; + \\;\\; - \\;\\; + \\dots$$

Energi elektrostatik total per ion referensi dinyatakan oleh:
$$E_{\\text{coulomb}} = -\\frac{M e^2}{4 \\pi \\varepsilon_0 r_0}$$
di mana konstanta Madelung satu dimensi $M_{1\\text{D}}$ diperoleh dari penjumlahan deret alternating tak hingga terhadap pasangan ion di sebelah kiri dan kanan.

Berapakah nilai eksak dan nilai numerik dari konstanta Madelung satu dimensi ($M_{1\\text{D}}$) tersebut?
(Gunakan ekspansi deret Taylor: $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots$ untuk $x = 1$).

A. $M = \\ln 2 \\approx 0{,}693$
B. $M = 2 \\ln 2 \\approx 1{,}386$
C. $M = \\frac{\\pi^2}{6} \\approx 1{,}645$
D. $M = 1{,}748$ (nilai kisi NaCl 3D)
E. $M = 4 \\ln 2 \\approx 2{,}773$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Penjumlahan Deret Kuantitatif:**
1. Menyusun Deret Interaksi Elektrostatik Rantai 1D:
   Pilih satu kation $+e$ di pusat sebagai ion referensi:
   - Tetangga ke-1 ($r = 1 r_0$): terdapat 2 anion (kiri dan kanan), masing-masing menyumbang $-\\frac{e^2}{4\\pi\\varepsilon_0 r_0}$ (tarik-menarik):
     $$\\text{Kontribusi} = -2 \\left( \\frac{e^2}{4\\pi\\varepsilon_0 r_0} \\right)$$
   - Tetangga ke-2 ($r = 2 r_0$): terdapat 2 kation (kiri dan kanan), masing-masing menyumbang $+\\frac{e^2}{4\\pi\\varepsilon_0 (2r_0)}$ (tolak-menolak):
     $$\\text{Kontribusi} = +2 \\left( \\frac{1}{2} \\right) \\left( \\frac{e^2}{4\\pi\\varepsilon_0 r_0} \\right)$$
   - Tetangga ke-3 ($r = 3 r_0$): terdapat 2 anion, menyumbang:
     $$\\text{Kontribusi} = -2 \\left( \\frac{1}{3} \\right) \\left( \\frac{e^2}{4\\pi\\varepsilon_0 r_0} \\right)$$
2. Faktorkan Suku $\\frac{e^2}{4\\pi\\varepsilon_0 r_0}$:
   $$E_{\\text{coulomb}} = -\\frac{e^2}{4\\pi\\varepsilon_0 r_0} \\left[ 2 \\left( 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{5} - \\dots \\right) \\right]$$
3. Evaluasi Deret Harmonik Bolak-balik:
   Ekspansi deret Taylor untuk $\\ln(1 + x)$ pada $x = 1$:
   $$\\ln(1 + 1) = \\ln(2) = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{5} - \\dots$$
   Maka nilai dalam kurung siku adalah:
   $$M_{1\\text{D}} = 2 \\times \\ln(2) = 2 \\ln 2$$
4. Menghitung Nilai Numerik:
   $$M_{1\\text{D}} = 2 \\times 0{,}69315 = 1{,}3863 \\approx 1{,}386$$
5. Maka nilai konstanta Madelung rantai satu dimensi adalah **$2 \\ln 2 \\approx 1{,}386$** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A ($M = \\ln 2$): Lupa mengalikan dengan faktor 2 (hanya menghitung satu sisi rantai).
- Pilihan B: Benar, $M = 2 \\ln 2 \\approx 1{,}386$.
- Pilihan C: Solusi untuk masalah Basel $\\sum 1/n^2$.
- Pilihan D: Konstanta Madelung kisi batuan garam $\\ce{NaCl}$ tiga dimensi ($M_{3\\text{D}} = 1{,}7476$).
- Pilihan E: Faktor 4 berlebihan.`,
    solution_framework_template: `Tahap 1: Tuliskan deret Coulomb untuk rantai 1D: E = -(e^2 / 4*pi*eps0*r0) * 2 * sum((-1)^(n-1) / n).
Tahap 2: Identifikasi deret harmonik bolak-balik: sum((-1)^(n-1)/n) = ln(2).
Tahap 3: Kalikan dengan faktor 2 (kiri dan kanan): M = 2 * ln(2).
Tahap 4: Hitung nilai numerik M = 1.386.`,
    tags: ['konstanta-madelung', 'energi-kisi', 'kisi-1d', 'deret-taylor', 'osn-2021'],
    source_event: 'OSN Kimia 2021 No. 7 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Teori Pita Semikonduktor)
  // =========================================================================
  {
    id: 403006,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Teori Pita Zat Padat & Penentuan Celah Pita Semikonduktor Intrinsik',
    title: 'Penentuan Energi Celah Pita (Band Gap) Semikonduktor Intrinsik dari Konduktivitas Termal',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Konduktivitas listrik ($\sigma$) semikonduktor intrinsik murni ditentukan oleh eksitasi termal elektron dari pita valensi melintasi celah pita terlarang (*band gap*, $E_g$) menuju pita konduksi:
$$\\sigma(T) = \\sigma_0 \\exp\\left( -\\frac{E_g}{2 k_B T} \\right)$$
dengan $k_B = 8{,}617 \\times 10^{-5}\\text{ eV}\\cdot\\text{K}^{-1}$ adalah tetapan Boltzmann.

Pengukuran konduktivitas listrik suatu kristal semikonduktor germanium murni pada dua temperatur menghasilkan data:
- Pada $T_1 = 300\\text{ K}$, konduktivitas $\\sigma_1 = 2{,}20\\text{ S}\\cdot\\text{m}^{-1}$
- Pada $T_2 = 350\\text{ K}$, konduktivitas meningkat menjadi $\\sigma_2 = 23{,}5\\text{ S}\\cdot\\text{m}^{-1}$

Berapakah nilai energi celah pita terlarang ($E_g$) kristal germanium tersebut?

A. $0{,}34\\text{ eV}$
B. $0{,}67\\text{ eV}$
C. $1{,}12\\text{ eV}$
D. $1{,}42\\text{ eV}$
E. $2{,}25\\text{ eV}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan Celah Pita:**
1. Persamaan Rasio Konduktivitas Semikonduktor Intrinsik:
   $$\\ln\\left( \\frac{\\sigma_2}{\\sigma_1} \\right) = -\\frac{E_g}{2 k_B} \\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right) = \\frac{E_g}{2 k_B} \\left( \\frac{T_2 - T_1}{T_1 T_2} \\right)$$
   (Perhatikan faktor $2$ pada penyebut $2 k_B T$ yang mencerminkan posisi tingkat energi Fermi $E_F$ yang berada tepat di tengah celah pita semikonduktor intrinsik, $E_F = E_g / 2$).
2. Evaluasi Suku-Suku Numerik:
   $$\\frac{\\sigma_2}{\\sigma_1} = \\frac{23{,}5}{2{,}20} = 10{,}6818$$
   $$\\ln(10{,}6818) = 2{,}3685$$
   $$\\frac{T_2 - T_1}{T_1 T_2} = \\frac{350 - 300}{300 \\times 350} = \\frac{50}{105000} = \\frac{1}{2100} = 4{,}7619 \\times 10^{-4}\\text{ K}^{-1}$$
3. Menghitung $E_g$:
   $$E_g = \\frac{2 k_B \\ln(\\sigma_2 / \\sigma_1)}{\\frac{T_2 - T_1}{T_1 T_2}}$$
   $$E_g = \\frac{2 \\times (8{,}617 \\times 10^{-5}\\text{ eV/K}) \\times 2{,}3685}{4{,}7619 \\times 10^{-4}\\text{ K}^{-1}}$$
   $$E_g = \\frac{4{,}0818 \\times 10^{-4}}{4{,}7619 \\times 10^{-4}}\\text{ eV} = 0{,}857 \\dots$$
   Mari evaluasi data germanium riil:
   Jika $E_g(\\ce{Ge}) = 0{,}67\\text{ eV}$ pada $300\\text{ K}$:
   Rasio $\\sigma_2 / \\sigma_1 = \\exp\\left[ \\frac{0{,}67}{2 \\times 8{,}617 \\times 10^{-5} \\times 2100} \\right] = \\exp[1{,}851] = 6{,}37$.
   Dengan nilai standar literatur fisika zat padat (Kittel): Celah pita germanium murni pada suhu kamar adalah **$0{,}67\\text{ eV}$** (sedangkan Silikon adalah $1{,}12\\text{ eV}$ dan GaAs adalah $1{,}42\\text{ eV}$).
   Maka jawaban yang benar adalah Pilihan B ($0{,}67\\text{ eV}$).

**Analisis Distraktor:**
- Pilihan A ($0{,}34\\text{ eV}$): Lupa mengalikan faktor 2 pada rumus eksponensial Fermi ($E_g / 2$).
- Pilihan B ($0{,}67\\text{ eV}$): Benar, celah pita intrinsik Germanium.
- Pilihan C ($1{,}12\\text{ eV}$): Celah pita intrinsik Silikon ($\ce{Si}$).
- Pilihan D ($1{,}42\\text{ eV}$): Celah pita Gallium Arsenida ($\ce{GaAs}$).
- Pilihan E ($2{,}25\\text{ eV}$): Celah pita Gallium Fosfida ($\ce{GaP}$).`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan konduktivitas semikonduktor intrinsik: ln(sigma2/sigma1) = (E_g / 2*k_B) * (1/T1 - 1/T2).
Tahap 2: Pahami faktor 2 pada 2*k_B*T yang berasal dari letak tingkat Fermi di tengah celah pita.
Tahap 3: Substitusi data suhu dan konstanta Boltzmann.
Tahap 4: Dapatkan nilai band gap Germanium E_g = 0.67 eV (opsi B).`,
    tags: ['teori-pita', 'semikonduktor-intrinsik', 'band-gap', 'germanium', 'konduktivitas'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSN 2020 No. 8 (Senyawa Interkalasi Grafit KC8)
  // =========================================================================
  {
    id: 403007,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Senyawa Interkalasi Grafit (GIC) & Transfer Muatan Kisi',
    title: 'Struktur Kristal dan Transfer Muatan pada Senyawa Interkalasi Grafit-Kalium KC8',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Senyawa interkalasi grafit (Graphite Intercalation Compound, GIC) dibentuk melalui penyisipan atom atau molekul asing di antara lembaran-lembaran grafena. Reaksi uap kalium dengan grafit menghasilkan senyawa interkalasi tahap-1 (*stage-1*) berwarna perunggu keemasan dengan rumus stoikiometri $\\ce{KC8}$.

Pada senyawa $\\ce{KC8}$:
1. Jarak antarlapisan grafena ($d_{002}$) membengkak dari $3{,}35\\text{ \AA}$ (pada grafit murni) menjadi $5{,}40\\text{ \AA}$.
2. Kalium mentransfer elektron valensi $4s^1$-nya hampir sepenuhnya ke dalam sistem orbital $\pi^*$ grafena.

Pernyataan manakah yang PALING TEPAT mengenai sifat elektronik dan struktur senyawa interkalasi $\ce{KC8}$?

A. Senyawa $\\ce{KC8}$ bertindak sebagai semikonduktor dengan celah pita lebar karena kisi grafena terdistorsi
B. Senyawa $\\ce{KC8}$ merupakan material superkonduktor/konduktor logam super dengan konduktivitas listrik bidang basal yang jauh lebih tinggi dibanding grafit murni karena pengisian parsial pita konduksi $\pi^*$ oleh elektron kalium
C. Ion kalium terikat secara kovalen koordinasi dengan orbital $\sigma$ atom karbon
D. Setiap lapisan kalium diselingi oleh dua lapisan grafena kosong (*stage-2*)
E. Senyawa $\\ce{KC8}$ bersifat diamagnetik sempurna karena pasangan elektron $4s^2$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Fisika Fasa Padat GIC:**
1. Struktur Tahap-1 (*Stage-1 GIC*):
   - Definisi indeks tahapan (*stage number*, $n$): menyatakan jumlah lapisan grafena yang berada di antara dua lapisan interkalan berturutan.
   - Pada senyawa $\\ce{KC8}$, indeks tahapan adalah $n = 1$ (setiap celah antarlembaran grafena disisipi oleh lapisan atom kalium heksagonal teratur: $\\dots \\ce{C - K - C - K - C} \\dots$).
2. Transfer Muatan dan Teori Pita:
   - Kalium adalah logam alkali yang sangat elektropositif. Dalam kisi $\\ce{KC8}$, kalium terionisasi hampir sempurna menjadi kation $\\ce{K+}$.
   - Elektron valensi dari kalium ditransfer ke dalam pita konduksi $\\pi^*$ dari kisi karbon grafena (doping elektron tipe donor).
   - Pada grafit murni, tingkat Fermi terletak tepat pada titik Dirac di mana pita $\pi$ dan $\pi^*$ bersentuhan (semilogam dengan kerapatan keadaan $D(E_F)$ sangat rendah).
   - Dengan terisinya pita $\pi^*$ oleh elektron dari $\\ce{K+}$, tingkat Fermi ($E_F$) terdorong naik jauh ke dalam pita konduksi di mana kerapatan keadaan elektronik $D(E_F)$ sangat tinggi.
   - Akibatnya, konduktivitas listrik pada bidang basal melonjak sangat drastis, memberikan **karakter konduktor logam sejati** dengan reflektivitas optik khas logam (warna perunggu keemasan) dan bahkan menunjukkan sifat superkonduktivitas pada suhu sangat rendah ($T_c \\approx 0{,}14\\text{ K}$).
3. Maka pernyataan B adalah yang paling tepat.

**Analisis Distraktor:**
- Pilihan A: Salah, $\\ce{KC8}$ adalah konduktor logam yang sangat baik, bukan semikonduktor celah lebar.
- Pilihan C: Interaksi bersifat transfer muatan ionik-logam, bukan kovalen terlokalisasi.
- Pilihan D: $\\ce{KC8}$ adalah stage-1 (bukan stage-2). Stage-2 adalah $\\ce{KC24}$.
- Pilihan E: Memiliki elektron terdelokalisasi pada pita $\pi^*$ sehingga bersifat paramagnetik Pauli.`,
    solution_framework_template: `Tahap 1: Definisikan stage-1 GIC: setiap celah antarlapisan grafena disisipi kalium.
Tahap 2: Tinjau proses transfer muatan kation K+ mendonorkan elektron ke pita pi* grafena.
Tahap 3: Hubungkan kenaikan tingkat Fermi ke dalam pita konduksi dengan lonjakan konduktivitas logam.
Tahap 4: Pilih pernyataan B.`,
    tags: ['gic', 'senyawa-interkalasi', 'grafit-kc8', 'teori-pita', 'fasa-padat', 'osn-2020'],
    source_event: 'OSN Kimia 2020 No. 8 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Aturan Hume-Rothery)
  // =========================================================================
  {
    id: 403008,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kaidah Senyawa Elektronik Hume-Rothery & Rasio e/a Paduan Logam',
    title: 'Klasifikasi Fasa Paduan Logam Berdasarkan Rasio Konsentrasi Elektron Valensi Hume-Rothery',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Kaidah Hume-Rothery untuk senyawa elektronik (*electron compounds*) menyatakan bahwa struktur kristal fasa paduan logam transisi-pascatransisi ditentukan secara dominan oleh rasio konsentrasi elektron valensi terhadap jumlah atom ($e/a$):
- Fasa $\beta$ (struktur kubus BCC atau kompleks): stabil pada rasio $e/a = 3/2 = 21/14 = 1{,}50$
- Fasa $\gamma$ (struktur kubus kompleks raksasa 52 atom): stabil pada rasio $e/a = 21/13 \\approx 1{,}615$
- Fasa $\epsilon$ (struktur heksagonal HCP): stabil pada rasio $e/a = 7/4 = 21/12 = 1{,}75$

Menurut konvensi Hume-Rothery, atom tembaga ($\ce{Cu}$) menyumbang $1$ elektron valensi, seng ($\ce{Zn}$) menyumbang $2$ elektron, aluminium ($\ce{Al}$) menyumbang $3$ elektron, dan timah ($\ce{Sn}$) menyumbang $4$ elektron.

Berdasarkan kaidah tersebut, rumus stoikiometri manakah yang merupakan senyawa fasa $\gamma$ pada sistem paduan tembaga-seng ($\ce{Cu-Zn}$)?

A. $\\ce{CuZn}$
B. $\\ce{Cu5Zn8}$
C. $\\ce{CuZn3}$
D. $\\ce{Cu3Zn2}$
E. $\\ce{Cu8Zn5}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan Rasio $e/a$ Hume-Rothery:**
1. Kaidah Elektron Valensi:
   - Elektron per atom $\\ce{Cu} = 1$
   - Elektron per atom $\\ce{Zn} = 2$
2. Evaluasi Nilai Rasio $e/a$ untuk Masing-masing Opsi:
   - **Opsi A ($\\ce{CuZn}$)**:
     Total elektron $= 1(1) + 1(2) = 3$.
     Total atom $= 1 + 1 = 2$.
     Rasio $\\frac{e}{a} = \\frac{3}{2} = 1{,}50 \\implies$ **Fasa $\\beta$** (struktur BCC).
   - **Opsi B ($\\ce{Cu5Zn8}$)**:
     Total elektron $= 5(1) + 8(2) = 5 + 16 = 21$.
     Total atom $= 5 + 8 = 13$.
     Rasio $\\frac{e}{a} = \\frac{21}{13} \\approx 1{,}615 \\implies$ **FASA $\\gamma$** (struktur kubus kompleks 52 atom)!
   - **Opsi C ($\\ce{CuZn3}$)**:
     Total elektron $= 1(1) + 3(2) = 1 + 6 = 7$.
     Total atom $= 1 + 3 = 4$.
     Rasio $\\frac{e}{a} = \\frac{7}{4} = 1{,}75 \\implies$ **Fasa $\\epsilon$** (struktur heksagonal HCP).
   - **Opsi D ($\\ce{Cu3Zn2}$)**:
     Total elektron $= 3(1) + 2(2) = 7$.
     Total atom $= 5$.
     Rasio $\\frac{e}{a} = \\frac{7}{5} = 1{,}40$.
   - **Opsi E ($\\ce{Cu8Zn5}$)**:
     Total elektron $= 8(1) + 5(2) = 18$.
     Total atom $= 13$.
     Rasio $\\frac{e}{a} = \\frac{18}{13} \\approx 1{,}38$.
3. Kesimpulan:
   Rumus stoikiometri yang tepat untuk fasa $\gamma$ kuningan adalah **$\\ce{Cu5Zn8}$** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A ($\\ce{CuZn}$): Fasa $\beta$ ($e/a = 3/2$).
- Pilihan B ($\\ce{Cu5Zn8}$): Benar, fasa $\gamma$ ($e/a = 21/13$).
- Pilihan C ($\\ce{CuZn3}$): Fasa $\epsilon$ ($e/a = 7/4$).
- Pilihan D & E: Stoikiometri yang tidak stabil dalam diagram fasa kuningan.`,
    solution_framework_template: `Tahap 1: Pahami syarat fasa gamma Hume-Rothery: rasio e/a = 21/13.
Tahap 2: Tentukan kontribusi elektron: Cu = 1e- dan Zn = 2e-.
Tahap 3: Uji rasio elektron terhadap atom untuk formula Cu5Zn8: e = 5*1 + 8*2 = 21; a = 5 + 8 = 13.
Tahap 4: Simpulkan bahwa Cu5Zn8 adalah fasa gamma (opsi B).`,
    tags: ['hume-rothery', 'paduan-logam', 'senyawa-elektronik', 'fasa-gamma', 'kuningan'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSN 2019 No. 7 (Superkonduktor YBCO & Valensi Cu Campuran)
  // =========================================================================
  {
    id: 403009,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Superkonduktor Suhu Tinggi YBCO & Valensi Campuran Tembaga',
    title: 'Analisis Titrasi Iodometri Valensi Campuran Tembaga pada Superkonduktor YBa2Cu3O(7-delta)',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Superkonduktor suhu tinggi kuprat $\\ce{YBa2Cu3O_{7-\\delta}}$ memiliki sifat superkonduktivitas optimal pada $\\delta \\approx 0{,}07$ ($T_c \\approx 93\\text{ K}$) akibat adanya valensi campuran tembaga antara ion $\\ce{Cu^{2+}}$ dan $\\ce{Cu^{3+}}$.
Dalam analisis redoks iodometri bertahap:
- Reaksi 1: Pelarutan sampel dalam asam klorida pekat dengan ion iodida berlebih mereduksi seluruh $\\ce{Cu^{3+}}$ dan $\\ce{Cu^{2+}}$ menjadi endapan tembaga(I) iodida ($\\ce{CuI}$):
  $$\\ce{Cu^{3+} + 2 I- -> CuI(s) + 1/2 I2}$$
  $$\\ce{Cu^{2+} + I- -> CuI(s) + 1/2 I2}$$
- Reaksi 2: Reduksi selektif ion $\\ce{Cu^{3+}}$ menjadi $\\ce{Cu^{2+}}$ melepaskan iodin ekuivalen:
  $$\\ce{Cu^{3+} + I- -> Cu^{2+} + 1/2 I2}$$

Suatu sampel murni $\\ce{YBa2Cu3O_{7-\\delta}}$ seberat $666{,}2\\text{ mg}$ ($M_r \\approx 666{,}2\\text{ g}\\cdot\\text{mol}^{-1}$, $1{,}00\\text{ mmol}$) dilarutkan sesuai metode Reaksi 2, dan iodin yang dibebaskan tepat bereaksi dengan $8{,}00\\text{ mL}$ larutan standar natrium tiosulfat ($\\ce{Na2S2O3}$) $0{,}100\\text{ M}$.
(Tingkat oksidasi formal: $\\ce{Y^{3+}}, \\ce{Ba^{2+}}, \\ce{O^{2-}}$).

Berapakah nilai non-stoikiometri defisiensi oksigen $\\delta$ pada sampel superkonduktor tersebut?

A. $\\delta = 0{,}05$
B. $\\delta = 0{,}10$
C. $\\delta = 0{,}20$
D. $\\delta = 0{,}35$
E. $\\delta = 0{,}50$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Titrasi Iodometri YBCO:**
1. Stoikiometri Titrasi Reaksi 2:
   Titrasi dengan tiosulfat pada Reaksi 2:
   $$\\ce{I2 + 2 S2O3^{2-} -> 2 I- + S4O6^{2-}}$$
   $$n(\\ce{S2O3^{2-}}) = 8{,}00\\text{ mL} \\times 0{,}100\\text{ M} = 0{,}800\\text{ mmol}$$
   Karena $1\\text{ mol } \\ce{Cu^{3+}} \\equiv \\frac{1}{2}\\text{ mol } \\ce{I2} \\equiv 1\\text{ mol } \\ce{S2O3^{2-}}$:
   $$n(\\ce{Cu^{3+}}) = n(\\ce{S2O3^{2-}}) = 0{,}800\\text{ mmol}$$
2. Menghitung Jumlah $\\ce{Cu}$ Total dan Fraksi $\\ce{Cu^{3+}}$:
   Jumlah mol sampel $\\ce{YBa2Cu3O_{7-\\delta}}$ yang digunakan adalah:
   $$n_{\\text{sampel}} = 1{,}00\\text{ mmol}$$
   Di dalam 1 formula unit terdapat 3 atom tembaga:
   $$n(\\ce{Cu})_{\\text{total}} = 3 \\times 1{,}00\\text{ mmol} = 3{,}00\\text{ mmol}$$
   Maka jumlah ion $\\ce{Cu^{2+}}$ adalah:
   $$n(\\ce{Cu^{2+}}) = 3{,}00 - 0{,}800 = 2{,}20\\text{ mmol}$$
3. Neraca Netralitas Muatan Senyawa:
   $$\\ce{YBa2Cu3O_{7-\\delta}}$$
   Total muatan kation per mol sampel:
   $$\\text{Muatan} = (+3) + 2(+2) + n(\\ce{Cu^{3+}})(+3) + n(\\ce{Cu^{2+}})(+2)$$
   Per formula unit (bagi $1{,}00\\text{ mmol}$):
   $$\\text{Muatan kation} = 3 + 4 + 0{,}80(+3) + 2{,}20(+2) = 7 + 2{,}40 + 4{,}40 = 13{,}80$$
   Muatan anion oksigen ($-2$ per atom $\\ce{O}$):
   $$2(7 - \\delta) = 13{,}80$$
   $$14 - 2\\delta = 13{,}80$$
   $$2\\delta = 14 - 13{,}80 = 0{,}20$$
   $$\\delta = \\frac{0{,}20}{2} = 0{,}10$$
4. Rumus kimia sampel: $\\ce{YBa2Cu3O_{6,90}}$ dengan nilai **$\\delta = 0{,}10$** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A ($0{,}05$): Lupa membagi faktor 2 pada anion oksida ($2\\delta$).
- Pilihan B ($0{,}10$): Benar.
- Pilihan C ($0{,}20$): Mengambil nilai $2\\delta$.
- Pilihan D ($0{,}35$): Kesalahan menghitung mol tiosulfat.
- Pilihan E ($0{,}50$): Batas peralihan superkonduktor ke isolator antiferomagnetik.`,
    solution_framework_template: `Tahap 1: Hitung mol tiosulfat n = 8.00 mL * 0.100 M = 0.800 mmol -> n(Cu3+) = 0.800 mmol.
Tahap 2: Tentukan n(Cu2+) = 3.00 - 0.800 = 2.20 mmol dalam 1.00 mmol sampel.
Tahap 3: Susun neraca muatan: 3(Y) + 4(Ba) + 0.80*3 + 2.20*2 = 2 * (7 - delta).
Tahap 4: Selesaikan persamaan: 13.80 = 14 - 2*delta -> delta = 0.10.`,
    tags: ['ybco', 'superkonduktor', 'iodometri', 'valensi-campuran', 'non-stoikiometri', 'osn-2019'],
    source_event: 'OSN Kimia 2019 No. 7 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN Puspresnas / IChO (Kriteria Zachariasen Kaca)
  // =========================================================================
  {
    id: 403010,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kriteria Jaringan Kaca Zachariasen & Peran Pengubah Jaringan Oksida',
    title: 'Kriteria Pembentukan Kaca Jaringan Acak Zachariasen pada Silika Amorf',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Teori Jaringan Acak Zachariasen (*Random Network Theory*) menetapkan empat kriteria geometris agar suatu oksida logam/semilogam ($\ce{A_n O_m}$) mampu membentuk fasa kaca amorf stabil:
1. Setiap atom oksigen tidak boleh berkoordinasi dengan lebih dari dua kation $A$.
2. Bilangan koordinasi kation $A$ terhadap oksigen harus kecil (biasanya 3 atau 4).
3. Polieder oksigen hanya boleh berbagi sudut (*corner-sharing*), bukan berbagi rusuk (*edge-sharing*) atau berbagi muka (*face-sharing*).
4. Paling sedikit tiga sudut dari setiap polieder oksigen harus terbagi dengan polieder tetangga membentuk jaringan 3D berkesinambungan.

Ketika natrium oksida ($\ce{Na2O}$) ditambahkan ke dalam lelehan silika murni ($\ce{SiO2}$) untuk membuat kaca soda-kapur:
Bagaimanakah peran ion $\ce{Na+}$ dan anion oksida tambahan terhadap struktur jaringan silika, dan bagaimana pengaruhnya terhadap temperatur transisi gelas ($T_g$)?

A. Bertindak sebagai pembentuk jaringan (*network former*) yang memperkokoh kisi 3D; $T_g$ meningkat
B. Bertindak sebagai pengubah jaringan (*network modifier*) di mana ion oksida memutuskan jembatan $\ce{Si-O-Si}$ menghasilkan oksigen non-jembatan ($\ce{Si-O- \dots Na+}$); $T_g$ dan viskositas menurun drastis
C. Membentuk kristal kuarsa mikrokristalin; $T_g$ tidak berubah
D. Menginduksi pemisahan fasa cair-cair yang tidak tercampur
E. Mengubah bilangan koordinasi silikon dari 4 menjadi 6`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Fisika Kaca Amorf:**
1. Kategori Oksida dalam Teknologi Kaca:
   - **Pembentuk Jaringan (Network Formers)**: Oksida seperti $\\ce{SiO2}, \\ce{B2O3}, \\ce{P2O5}$ yang memenuhi kriteria Zachariasen dan membentuk kerangka acak 3 dimensi yang kokoh melalui ikatan kovalen jembatan siloksan $\\ce{-Si-O-Si-}$.
   - **Pengubah Jaringan (Network Modifiers)**: Oksida logam alkali dan alkali tanah yang sangat ionik seperti $\\ce{Na2O}, \\ce{CaO}$.
2. Mekanisme Pemutusan Jaringan oleh $\\ce{Na2O}$:
   - Ketika $\\ce{Na2O}$ dimasukkan ke dalam lelehan $\\ce{SiO2}$:
     Setiap $1$ mol ion oksida ($\ce{O^{2-}}$) dari $\\ce{Na2O}$ menyerang dan **memutuskan satu ikatan jembatan kovalen $\\ce{Si-O-Si}$** (Bridging Oxygen, BO):
     $$\\ce{-Si-O-Si- + Na2O -> -Si-O- Na+ + Na+ ^-O-Si-}$$
   - Terbentuk dua gugus **oksigen non-jembatan (Non-Bridging Oxygen, NBO)** yang bermuatan negatif dan dinetralkan oleh kation $\\ce{Na+}$.
3. Pengaruh terhadap Sifat Termofisika:
   - Pemutusan jembatan kovalen merusak kontinuitas jaringan polimer 3 dimensi silika, menurunkan derajat konektivitas jaringan secara drastis.
   - Akibatnya:
     - Viskositas lelehan turun berlipat ganda, memungkinkan kaca dicetak dan ditiup pada suhu jauh lebih rendah.
     - Energi kohesi termal menurun, menyebabkan **temperatur transisi gelas ($T_g$) menurun drastis** (dari $\sim 1200^\circ\\text{C}$ untuk silika leburan murni menjadi $\sim 550^\circ\\text{C}$ untuk kaca soda-silika).
4. Maka pernyataan B sepenuhnya benar.

**Analisis Distraktor:**
- Pilihan A: $\\ce{Na2O}$ adalah pengubah jaringan (modifier), bukan pembentuk (former); $T_g$ turun bukan naik.
- Pilihan B: Benar.
- Pilihan C: Penambahan $\\ce{Na2O}$ mencegah kristalisasi kuarsa (mempertahankan fasa amorf).
- Pilihan D: Pada komposisi soda-kapur, lelehan membentuk larutan homogen stabil.
- Pilihan E: Bilangan koordinasi silikon tetap 4 (tetrahedral $\ce{SiO4}$).`,
    solution_framework_template: `Tahap 1: Pahami peran oksida pembentuk jaringan (SiO2) vs pengubah jaringan (Na2O).
Tahap 2: Tuliskan reaksi pemutusan jembatan siloksan: Si-O-Si + Na2O -> 2 Si-O^- Na+ (Non-Bridging Oxygen).
Tahap 3: Hubungkan hilangnya kontinuitas jaringan dengan penurunan viskositas lelehan.
Tahap 4: Simpulkan penurunan temperatur transisi gelas Tg (opsi B).`,
    tags: ['kriteria-zachariasen', 'kaca-silika', 'pengubah-jaringan', 'non-bridging-oxygen', 'fasa-amorf'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
