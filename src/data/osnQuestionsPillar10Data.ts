/**
 * osnQuestionsPillar10Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 10: Biokimia Lanjut, Termodinamika Makromolekul, Enzim Bioanorganik & Asam Nukleat
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 410001 - 410010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 10 = Pilar 10
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_10_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 10 (Termodinamika Pelipatan Protein & DSC)
  // =========================================================================
  {
    id: 410001,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Termodinamika Denaturasi Protein Dua-Keadaan & Kalorimetri DSC',
    title: 'Analisis Kooperativitas Denaturasi Termal Lisozim Menggunakan Rasio Entalpi van t Hoff terhadap Kalorimetrik',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Denaturasi termal protein globular monomerik lisozim dimodelkan sebagai transisi kooperatif dua-keadaan (*two-state model*):
$$\\text{Nativo } (N) \\rightleftharpoons \\text{Terdenaturasi } (D)$$

Pengukuran menggunakan Kalorimetri Pemindaian Diferensial (*Differential Scanning Calorimetry*, DSC) menghasilkan kurva kapasitas panas ekses ($C_p^{\\text{ex}}$) terhadap temperatur:
- Suhu transisi leleh di mana fraksi terdenaturasi tepat $50\\%$ ($K = [D]/[N] = 1$): $T_m = 65{,}0^\\circ\\text{C} = 338{,}15\\text{ K}$
- Entalpi transisi kalorimetrik total (luas area di bawah puncak DSC): $\\Delta H_{\\text{cal}} = +510\\text{ kJ mol}^{-1}$
- Lebar puncak pada setengah tinggi maksimum (*half-height width*): $\\Delta T_{1/2} = 7{,}20\\text{ K}$.

Entalpi van 't Hoff ($\\Delta H_{\\text{vH}}$) dihitung dari bentuk puncak transisi DSC melalui relasi:
$$\\Delta H_{\\text{vH}} = 4 R T_m^2 \\left( \\frac{C_{p,\\max}^{\\text{ex}}}{\\Delta H_{\\text{cal}}} \\right) \\approx \\frac{4 R T_m^2}{\\Delta T_{1/2}}$$
di mana $R = 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1}$.

Berapakah nilai entalpi van 't Hoff ($\\Delta H_{\\text{vH}}$), berapakah rasio kooperativitas $\\Delta H_{\\text{vH}} / \\Delta H_{\\text{cal}}$, dan apakah arti biologis dari nilai rasio tersebut?

A. $\\Delta H_{\\text{vH}} = 528\\text{ kJ mol}^{-1}$; Rasio $= 1{,}04 \\approx 1{,}0$; transisi pelipatan berlangsung kooperatif sempurna dua-keadaan tanpa akumulasi intermediat stabil
B. $\\Delta H_{\\text{vH}} = 264\\text{ kJ mol}^{-1}$; Rasio $= 0{,}52$; transisi melibatkan oligomer dimer yang berdisosiasi
C. $\\Delta H_{\\text{vH}} = 1056\\text{ kJ mol}^{-1}$; Rasio $= 2{,}07$; pelipatan melibatkan agregasi irreversibel
D. $\\Delta H_{\\text{vH}} = 510\\text{ kJ mol}^{-1}$; Rasio $= 0{,}00$; transisi tidak menyerap kalor
E. $\\Delta H_{\\text{vH}} = 120\\text{ kJ mol}^{-1}$; Rasio $= 0{,}24$; transisi bersifat non-kooperatif acak`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Termodinamika DSC Protein:**
1. Hitung Entalpi van 't Hoff ($\\Delta H_{\\text{vH}}$):
   Formula aproksimasi Privalov untuk transisi tajam dua-keadaan:
   $$\\Delta H_{\\text{vH}} = \\frac{4 R T_m^2}{\\Delta T_{1/2}}$$
   - $T_m = 338{,}15\\text{ K} \\implies T_m^2 = (338{,}15)^2 = 114345\\text{ K}^2$
   - $\\Delta T_{1/2} = 7{,}20\\text{ K}$
   - $R = 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1}$
   $$\\Delta H_{\\text{vH}} = \\frac{4 \\times 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 114345\\text{ K}^2}{7{,}20\\text{ K}} = \\frac{3800615}{7{,}20} = 527863\\text{ J mol}^{-1} \\approx 528\\text{ kJ mol}^{-1}$$
2. Hitung Rasio Entalpi Privalov ($\\Delta H_{\\text{vH}} / \\Delta H_{\\text{cal}}$):
   $$\\frac{\\Delta H_{\\text{vH}}}{\\Delta H_{\\text{cal}}} = \\frac{527{,}9\\text{ kJ mol}^{-1}}{510{,}0\\text{ kJ mol}^{-1}} = 1{,}035 \\approx 1{,}0$$
3. Makna Fisis Rasio Kooperativitas DSC:
   - **Rasio $\\approx 1{,}0$**: Membuktikan secara eksperimental bahwa proses pelipatan/denaturasi protein memenuhi **model dua-keadaan murni (*all-or-none two-state transition*)**. Molekul protein berpindah langsung antara keadaan nativo (N) dan terdenaturasi (D) tanpa ada akumulasi signifikan dari intermediat pelipatan intermediat teramati.
   - Jika rasio $< 1$: Terbentuk intermediat pelipatan stabil (*molten globule*).
   - Jika rasio $> 1$: Terjadi asosiasi/oligomerisasi antar molekul protein.
4. Maka opsi A adalah jawaban yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mengabaikan faktor 2 pada perhitungan pembilang.
- Pilihan C: Mengalikan hasil dengan faktor 2.
- Pilihan D: Menganggap rasio bernilai nol.
- Pilihan E: Menggunakan satuan Kelvin yang salah (menggunakan skala Celsius).`,
    solution_framework_template: `Tahap 1: Konversi temperatur transisi ke Kelvin: Tm = 65,0 + 273,15 = 338,15 K.
Tahap 2: Gunakan formula Privalov DSC: Delta H_vH = 4 * R * Tm^2 / Delta T_1/2.
Tahap 3: Hitung Delta H_vH = 4 * 8,3145 * (338,15)^2 / 7,20 = 528 kJ/mol.
Tahap 4: Dapatkan rasio Delta H_vH / Delta H_cal = 528 / 510 = 1,04 ≈ 1,0 (transisi kooperatif dua-keadaan sejati, opsi A).`,
    tags: ['dsc', 'denaturasi-protein', 'entalpi-van-t-hoff', 'kooperativitas', 'termodinamika-biokimia'],
    source_event: 'OSN Kimia 2023 No. 10 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL RIIL - OSN 2022 No. 10 (Triad Katalitik Serine Protease)
  // =========================================================================
  {
    id: 410002,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Mekanisme Enzimatik Serine Protease & Triad Katalitik',
    title: 'Peran Jaringan Transfer Muatan Triad Katalitik Asp102-His57-Ser195 dan Lubang Oksianion Kimotripsin',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Enzim kimotripsin mengkatalisis hidrolisis ikatan peptida pada sisi $C$-terminal asam amino aromatik melalui triad katalitik terpadu: $\\ce{Asp102-His57-Ser195}$ serta lubang oksianion (*oxyanion hole*) yang dibentuk oleh gugus amida tulang punggung peptida $\\ce{Gly193}$ dan $\\ce{Ser195}$.

Manakah pernyataan mekanistik yang PALING TEPAT mengenai fungsi terkoordinasi residu-residu tersebut selama pembentukan intermediat tetrahedral pertama?

A. Gugus karboksilat $\\ce{Asp102}$ mengikat dan menstabilkan cincin imidazol terprotonasi $\\ce{His57}$ melalui ikatan hidrogen medan-rendah berikatan pendek (LBHB), memungkinkan $\\ce{His57}$ bertindak sebagai katalis basa umum yang merebut proton dari $-\\ce{OH}$ $\\ce{Ser195}$; gugus alkoksida $\\ce{Ser195}$ menyerang karbonil substrat, dan muatan negatif oksigen tetrahedral distabilkan oleh ikatan hidrogen ganda pada lubang oksianion
B. $\\ce{Ser195}$ bertindak sebagai donor proton asam untuk memecah ikatan amida secara langsung tanpa intermediat
C. $\\ce{Asp102}$ menyerang langsung karbonil substrat membentuk ikatan anhidrida campuran
D. Lubang oksianion mengikat gugus kation amonium substrat melalui interaksi elektrostatik tolak-menolak
E. $\\ce{His57}$ bertindak sebagai agen pereduksi yang mentransfer dua elektron ke ikatan peptida`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Serine Protease:**
1. Peran Jaringan Triad Katalitik ($\ce{Asp102-His57-Ser195}$):
   - $\\ce{Asp102}$ bermuatan negatif terbenam dalam kantung hidrofobik terpolarisasi.
   - Gugus karboksilat $\\ce{Asp102}$ membentuk ikatan hidrogen yang sangat kuat (disebut *Low-Barrier Hydrogen Bond*, LBHB) dengan atom hidrogen pada $N^{\\delta1}$ dari $\\ce{His57}$.
   - Hal ini memposisikan cincin imidazol $\\ce{His57}$ secara tepat dan menaikkan $pK_a$ histidine menjadi sekitar $7 - 12$, menjadikannya **katalis basa umum yang sangat kuat**.
2. Serangan Nukleofilik oleh $\\ce{Ser195}$:
   - $\\ce{His57}$ menarik proton dari gugus hidroksil $-\\ce{OH}$ milik $\\ce{Ser195}$ ($N^{\\epsilon2}$ merebut proton).
   - Oksigen $\\ce{Ser195}$ kini bertransformasi menjadi ion alkoksida nukleofilik yang menyerang karbon karbonil ikatan peptida substrat.
3. Lubang Oksianion (*Oxyanion Hole*):
   - Serangan nukleofilik mengubah geometri karbonil dari planar trigonal ($sp^2$) menjadi **intermediat tetrahedral pertama** ($sp^3$) dengan muatan negatif penuh pada atom oksigen.
   - Atom oksigen bermuatan negatif ini menempati kantung khusus (*oxyanion hole*) dan distabilkan secara spesifik oleh **dua ikatan hidrogen** dari gugus amida rantai utama $\\ce{-NH-}$ milik residu $\\ce{Gly193}$ dan $\\ce{Ser195}$.
   - Interaksi ini menurunkan energi aktivasi transisi tetrahedral hingga jutaan kali lipat.
4. Maka opsi A adalah deskripsi mekanistik yang sempurna.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Serin bertindak sebagai nukleofil alkoksida (setelah terdeprotonasi), bukan asam donor proton.
- Pilihan C: Aspartat tidak pernah menyerang substrat secara langsung (berjarak terlindung di dalam enzim).
- Pilihan D: Lubang oksianion mengikat anion oksida tetrahedral bermuatan negatif melalui ikatan hidrogen amida, bukan kation amonium.
- Pilihan E: Kimotripsin adalah hidrolase, bukan enzim redoks (tidak melibatkan transfer elektron).`,
    solution_framework_template: `Tahap 1: Tinjau peran triad: Asp102 membentuk LBHB dengan His57, memfasilitasi His57 bertindak sebagai basa umum.
Tahap 2: His57 merebut proton dari Ser195, menghasilkan ion alkoksida Ser195 yang menyerang karbonil peptida.
Tahap 3: Intermediat tetrahedral bermuatan negatif distabilkan oleh ikatan hidrogen amida tulang punggung Gly193 dan Ser195 pada oxyanion hole.
Tahap 4: Simpulkan opsi A.`,
    tags: ['serine-protease', 'kimotripsin', 'triad-katalitik', 'oxyanion-hole', 'katalisis-enzim'],
    source_event: 'OSN Kimia 2022 No. 10 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2021 No. 10 (Kluster Fe-S & Enzim Nitrogenase FeMoco)
  // =========================================================================
  {
    id: 410003,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Kimia Bioanorganik Kluster Besi-Belerang & Kofaktor Nitrogenase',
    title: 'Struktur dan Bilangan Oksidasi Kluster Kubana [4Fe-4S] dan Pusat Katalitik FeMo-co Nitrogenase',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Kluster besi-belerang ([Fe-S]) merupakan kofaktor esensial dalam rantai transfer elektron biologis dan fiksasi nitrogen.
Kluster kubana $[\\ce{Fe4S4(S_{Cys})4}]^{n-}$ memiliki empat kation besi dan empat ion sulfida anorganik ($\\ce{\\mu_3-S^{2-}}$) yang membentuk geometri kubus terdistorsi, terkoordinasi pada empat ligan tiolat sistein ($\\ce{RS^-}$, di mana setiap $\\ce{RS^-}$ bermuatan $-1$).

1. Dalam protein ferredoksin standar, kluster beralih reversibel antara keadaan tereduksi $[\\ce{Fe4S4}]^+$ ($n = 3$) dan keadaan teroksidasi $[\\ce{Fe4S4}]^{2+}$ ($n = 2$).
2. Pada enzim nitrogenase bakteri *Azotobacter vinelandii*, fiksasi biologis $\\ce{N2}$ menjadi $\\ce{2 NH3}$ berlangsung pada kofaktor katalitik multilogam raksasa **FeMo-cofactor (FeMo-co)** dengan komposisi kimia $\\ce{[MoFe7S9C(homositrat)]}$.

Berapakah distribusi bilangan oksidasi besi ($\ce{Fe^{II}}$ dan $\ce{Fe^{III}}$) pada kluster teroksidasi $[\\ce{Fe4S4(SR)4}]^{2-}$, dan apakah atom interstisial sentral yang terbukti berada di pusat rongga sangkar FeMo-co berdasarkan kristalografi sinar-X resolusi tinggi modern?

A. Keadaan teroksidasi $[\\ce{Fe4S4(SR)4}]^{2-}$ terdiri dari $2 \\ce{Fe^{II}} + 2 \\ce{Fe^{III}}$ (delokalisasi valensi campuran); atom interstisial sentral FeMo-co adalah **karbon ($\ce{\mu_6-C^{4-}}$)**
B. Keadaan teroksidasi terdiri dari $4 \\ce{Fe^{III}}$; atom interstisial sentral adalah oksigen ($\ce{O^{2-}}$)
C. Keadaan teroksidasi terdiri dari $4 \\ce{Fe^{II}}$; atom interstisial sentral adalah nitrogen ($\ce{N^{3-}}$)
D. Keadaan teroksidasi terdiri dari $1 \\ce{Fe^{II}} + 3 \\ce{Fe^{III}}$; atom interstisial sentral adalah hidrida ($\ce{H^-}$)
E. Keadaan teroksidasi terdiri dari $3 \\ce{Fe^{II}} + 1 \\ce{Fe^{III}}$; tidak ada atom di tengah rongga FeMo-co (rongga hampa)`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Bioanorganik Kluster Fe-S & FeMo-co:**
1. Neraca Muatan Kluster Kubana $[\\ce{Fe4S4(SR)4}]^{2-}$:
   - Muatan total kompleks: $-2$.
   - Empat ion sulfida anorganik: $4 \\times \\ce{S^{2-}} = -8$.
   - Empat ligan tiolat sisteinat: $4 \\times \\ce{RS^-} = -4$.
   - Muatan anion total $= -8 + (-4) = -12$.
   - Agar muatan total kompleks bernilai $-2$:
     $$\\sum \\text{muatan 4 atom Fe} = -2 - (-12) = +10$$
   - Kombinasi kation besi:
     - Dua ion $\\ce{Fe^{2+}}$ ($+4$) dan dua ion $\\ce{Fe^{3+}}$ ($+6$): total muatan $= +10$!
     - Spektroskopi Mössbauer menunjukkan bahwa elektron $d$ terdelokalisasi sempurna melalui *spin-dependent delocalization* (mekanisme double-exchange Anderson-Hasegawa), membentuk dua pasang ion berpasangan valensi campuran $\\ce{Fe^{2,5+}-Fe^{2,5+}}$.
2. Atom Interstisial FeMo-co Nitrogenase:
   - Penemuan spektakuler oleh Einsle et al. (Science 2002) dan Lancaster et al. (Science 2011) menggunakan spektroskopi emisi sinar-X resolusi tinggi (XES) membuktikan tanpa keraguan bahwa atom di pusat sangkar $\\ce{Fe6}$ kofaktor nitrogenase adalah **sebuah atom karbon karbida interstisial ($\ce{\mu_6-C^{4-}}$)**!
   - Atom karbida ini berasal dari $S$-adenosilmetionin (SAM) selama biosintesis kofaktor dan berfungsi menstabilkan kerangka kluster selama siklus reduksi transfer multi-elektron $\\ce{N2}$.
3. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($2 \\ce{Fe^{II}} + 2 \\ce{Fe^{III}}$, atom sentral adalah karbon $\\ce{\mu_6-C}$).
- Pilihan B: $4 \\ce{Fe^{III}}$ menghasilkan muatan total kompleks netral $[\\ce{Fe4S4(SR)4}]^0$ (tipe protein HiPIP teroksidasi super).
- Pilihan C: $4 \\ce{Fe^{II}}$ menghasilkan muatan kompleks $-4$ $[\\ce{Fe4S4(SR)4}]^{4-}$ (keadaan super-terreduksi). Hipotesis atom sentral nitrogen telah dibantahkan oleh kristalografi 1,00 Å.
- Pilihan D: $1 \\ce{Fe^{II}} + 3 \\ce{Fe^{III}}$ menghasilkan muatan $-1$ (HiPIP).
- Pilihan E: Kofaktor FeMo-co memiliki kerapatan elektron nyata di pusat rongga yang tidak kosong.`,
    solution_framework_template: `Tahap 1: Hitung total muatan 4 Fe pada [Fe4S4(SR)4]^2-: muatan Fe total = -2 - 4(-2) - 4(-1) = +10.
Tahap 2: Uraikan muatan +10 menjadi bilangan bulat besi: 2 Fe(II) + 2 Fe(III).
Tahap 3: Tinjau penemuan kristalografi struktur FeMo-cofactor: atom pusat yang mengoordinasikan 6 atom Fe adalah atom karbon karbida (mu6-C).
Tahap 4: Simpulkan opsi A.`,
    tags: ['kluster-fe-s', 'nitrogenase', 'femo-co', 'karbida-interstisial', 'bioanorganik'],
    source_event: 'OSN Kimia 2021 No. 10 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL RIIL - OSN 2020 No. 10 (Konformasi Geometri Heliks DNA: A, B, Z)
  // =========================================================================
  {
    id: 410004,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Struktur Tingkat Tinggi Asam Nukleat & Polimorfisme Heliks DNA (A, B, Z)',
    title: 'Perbandingan Konformasi Pucker Gula Ribosa dan Sudut Glikosidik pada A-DNA, B-DNA, dan Z-DNA',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Heliks ganda asam deoksiribonukleat (DNA) dapat mengadopsi tiga bentuk konformasi polimorfik utama bergantung pada kelembaban relatif, kekuatan ionik, dan urutan basa:
1. **B-DNA**: bentuk standar biologis Watson-Crick pada hidrasi tinggi (>92%).
2. **A-DNA**: bentuk terkompaksi pada kelembaban rendah (<75%) atau pada duplex RNA-DNA / dsRNA.
3. **Z-DNA**: heliks kidal (*left-handed*) yang terbentuk pada sekuens bergantian purin-pirimidin (misal $\\text{poly(dG-dC)}$) pada salinitas tinggi.

Manakah pasangan parameter konformasi struktural yang BENAR mengenai **arah pilinan heliks**, **pucker cincin furanosa (*sugar pucker*)**, dan **sudut torsi ikatan glikosidik ($\chi$)** untuk ketiga bentuk DNA tersebut?

A.
- B-DNA: Heliks putar-kanan; deoksiribosa konformasi $C2'\\text{-endo}$; ikatan glikosidik *anti*
- A-DNA: Heliks putar-kanan; deoksiribosa konformasi $C3'\\text{-endo}$; ikatan glikosidik *anti*
- Z-DNA: Heliks putar-kiri; deoksiribosa bergantian $C2'\\text{-endo}$ (pirimidin) dan $C3'\\text{-endo}$ (purin); glikosidik bergantian *anti* (pirimidin) dan *syn* (purin)
B.
- B-DNA: Heliks putar-kiri; deoksiribosa konformasi $C3'\\text{-endo}$; ikatan glikosidik *syn*
- A-DNA: Heliks putar-kanan; deoksiribosa konformasi $C2'\\text{-endo}$; ikatan glikosidik *anti*
- Z-DNA: Heliks putar-kanan; deoksiribosa konformasi planar; glikosidik *anti*
C.
- B-DNA: Heliks putar-kanan; deoksiribosa konformasi $C3'\\text{-endo}$; ikatan glikosidik *syn*
- A-DNA: Heliks putar-kanan; deoksiribosa konformasi $C2'\\text{-endo}$; ikatan glikosidik *anti*
- Z-DNA: Heliks putar-kiri; seluruh nukleotida mengadopsi konformasi $C3'\\text{-endo}$ dan *syn*
D.
- Ketiga bentuk DNA memiliki arah pilinan heliks putar-kanan yang sama dengan konformasi deoksiribosa identik
E.
- A-DNA dan B-DNA keduanya merupakan heliks putar-kiri, sedangkan Z-DNA adalah heliks putar-kanan`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Karakteristik Geometri Polimorfisme DNA:**
1. **B-DNA (Bentuk Fisiologis Standar)**:
   - Arah pilinan heliks: **Putar-kanan (*right-handed*)**.
   - Konformasi pelipatan cincin gula (*sugar pucker*): **$C2'\\text{-endo}$** (atom C2' mencuat pada sisi yang sama dengan basa nitrogen dan gugus C5'). Konformasi ini menghasilkan jarak antarfosfat yang lebih renggang ($\sim 7{,}0\\text{ \AA}$) dan kenaikan aksial $3{,}4\\text{ \AA}$ per pasang basa (10,5 bp per putaran).
   - Sudut torsi ikatan glikosidik ($\\chi$): **Semua basa (purin dan pirimidin) mengadopsi konformasi *anti***.
2. **A-DNA (Bentuk Dehidrasi & Heliks RNA)**:
   - Arah pilinan heliks: **Putar-kanan (*right-handed*)**, lebih gemuk dan berpori tengah lebar.
   - Konformasi pelipatan gula: **$C3'\\text{-endo}$**. (Pada RNA, adanya gugus $2'\\ce{-OH}$ menolak secara sterik konformasi $C2'\\text{-endo}$, memaksa RNA selalu mengadopsi konformasi $C3'\\text{-endo}$ tipe A).
   - Jarak antarfosfat memendek menjadi $\sim 5{,}9\\text{ \AA}$ dengan kenaikan aksial hanya $2{,}3\\text{ \AA}$ per pasang basa (11 bp per putaran).
   - Sudut ikatan glikosidik: **Semua *anti***.
3. **Z-DNA (Bentuk Heliks Zig-zag Salinitas Tinggi)**:
   - Arah pilinan heliks: **Putar-kiri (*left-handed*)**, heliks ramping memanjang menyerupai pola zig-zag pada tulang punggung gula-fosfat.
   - Karakteristik dimer berulang (*dinucleotide repeat*):
     - Residu **dC (pirimidin)**: gula konformasi **$C2'\\text{-endo}$** dan glikosidik **$anti$**.
     - Residu **dG (purin)**: membalik menjadi gula konformasi **$C3'\\text{-endo}$** dan glikosidik **$syn$**!
4. Maka opsi A menyajikan perbandingan komparatif yang lengkap, akurat, dan tepat secara ilmiah.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: B-DNA adalah putar-kanan (bukan putar-kiri) dan gula B-DNA adalah C2'-endo bukan C3'-endo.
- Pilihan C: B-DNA memiliki glikosidik anti bukan syn.
- Pilihan D: Z-DNA adalah putar-kiri (left-handed), bukan putar-kanan.
- Pilihan E: Terbalik secara fatal antara heliks putar-kanan dan putar-kiri.`,
    solution_framework_template: `Tahap 1: Tinjau helisitas: B-DNA dan A-DNA putar-kanan (right-handed); Z-DNA putar-kiri (left-handed).
Tahap 2: Tinjau sugar pucker: B-DNA mengadopsi C2'-endo; A-DNA mengadopsi C3'-endo.
Tahap 3: Tinjau Z-DNA: unit berulang dinukleotida bergantian antara pirimidin (C2'-endo, anti) dan purin (C3'-endo, syn).
Tahap 4: Simpulkan opsi A.`,
    tags: ['struktur-dna', 'b-dna', 'a-dna', 'z-dna', 'sugar-pucker', 'ikatan-glikosidik'],
    source_event: 'OSN Kimia 2020 No. 10 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2017 No. 9 (Gaya Gerak Proton Mitokondria & Sintesis ATP)
  // =========================================================================
  {
    id: 410005,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Fosforilasi Oksidatif & Gaya Gerak Proton (Proton Motive Force)',
    title: 'Termodinamika Sintesis ATP oleh F0F1-ATP Sintase Berdasarkan Gaya Gerak Proton Mitchell',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Berdasarkan Teori Kemi-osmotik Peter Mitchell (Nobel Kimia 1978), gaya gerak proton (*Proton Motive Force*, $\\Delta p$) yang melintasi membran dalam mitokondria dinyatakan oleh:
$$\\Delta p = \\Delta \\Psi - \\frac{2{,}303 RT}{F} \\Delta\\text{pH}$$
di mana:
- $\\Delta \\Psi = \\Psi_{\\text{dalam}} - \\Psi_{\\text{luar}} = -0{,}160\\text{ V}$ (potensial membran matriks relatif terhadap ruang antarmembran),
- $\\Delta\\text{pH} = \\text{pH}_{\\text{matriks}} - \\text{pH}_{\\text{antarmembran}} = +0{,}75$ (matriks lebih basa),
- Pada $37^\\circ\\text{C}$ ($310{,}15\\text{ K}$), $2{,}303 RT / F = 0{,}0615\\text{ V}$ ($61{,}5\\text{ mV}$),
- Konstanta Faraday $F = 96485\\text{ C mol}^{-1} = 96{,}485\\text{ kJ V}^{-1}\\text{ mol}^{-1}$.

Energi bebas perpindahan satu mol proton dari ruang antarmembran ke dalam matriks mitokondria adalah $\\Delta G_{\\ce{H+}} = -F \\Delta p$.
Dalam kondisi seluler hidup, fosforilasi $\\ce{ADP + Pi -> ATP + H2O}$ memerlukan energi bebas fosforilasi sebesar $\\Delta G_p = +50{,}0\\text{ kJ mol}^{-1}$.

Berapakah nilai gaya gerak proton ($\\Delta p$), berapa energi bebas yang dilepaskan per mol proton yang masuk ($-\\Delta G_{\\ce{H+}}$), dan berapakah jumlah proton minimum ($n$) yang harus ditranslokasikan ke dalam matriks untuk menyintesis satu molekul $\\ce{ATP}$?

A. $\\Delta p = -0{,}206\\text{ V}$; $-\\Delta G_{\\ce{H+}} = 19{,}9\\text{ kJ mol}^{-1}$; $n = 3$ proton per ATP
B. $\\Delta p = -0{,}160\\text{ V}$; $-\\Delta G_{\\ce{H+}} = 15{,}4\\text{ kJ mol}^{-1}$; $n = 4$ proton per ATP
C. $\\Delta p = -0{,}114\\text{ V}$; $-\\Delta G_{\\ce{H+}} = 11{,}0\\text{ kJ mol}^{-1}$; $n = 5$ proton per ATP
D. $\\Delta p = -0{,}250\\text{ V}$; $-\\Delta G_{\\ce{H+}} = 24{,}1\\text{ kJ mol}^{-1}$; $n = 2$ proton per ATP
E. $\\Delta p = -0{,}061\\text{ V}$; $-\\Delta G_{\\ce{H+}} = 5{,}9\\text{ kJ mol}^{-1}$; $n = 9$ proton per ATP`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Termodinamika Kemi-osmotik:**
1. Hitung Gaya Gerak Proton (Proton Motive Force, $\\Delta p$):
   $$\\Delta p = \\Delta \\Psi - (0{,}0615\\text{ V}) \\Delta\\text{pH}$$
   Substitusi nilai $\\Delta \\Psi = -0{,}160\\text{ V}$ dan $\\Delta\\text{pH} = +0{,}75$:
   $$\\Delta p = -0{,}160\\text{ V} - (0{,}0615\\text{ V} \\times 0{,}75) = -0{,}160\\text{ V} - 0{,}0461\\text{ V} = -0{,}2061\\text{ V} \\approx -0{,}206\\text{ V}$$
   (Atau dalam konvensi positif dari luar ke dalam: $\\Delta p = +206\\text{ mV}$).
2. Hitung Energi Bebas per Mol Proton ($-\\Delta G_{\\ce{H+}}$):
   Energi yang dilepaskan saat $1$ mol $\\ce{H+}$ mengalir menuruni gradien elektrokimia ke dalam matriks:
   $$-\\Delta G_{\\ce{H+}} = F |\\Delta p| = (96{,}485\\text{ kJ V}^{-1}\\text{ mol}^{-1}) \\times 0{,}2061\\text{ V} = 19{,}886\\text{ kJ mol}^{-1} \\approx 19{,}9\\text{ kJ mol}^{-1}$$
3. Hitung Stoikiometri Proton Minimum ($n$) untuk Sintesis ATP:
   Energi yang dibutuhkan untuk sintesis 1 mol ATP: $\\Delta G_p = +50{,}0\\text{ kJ mol}^{-1}$.
   Syarat termodinamika reversibel:
   $$n \\times (-\\Delta G_{\\ce{H+}}) \\ge \\Delta G_p$$
   $$n \\ge \\frac{\\Delta G_p}{-\\Delta G_{\\ce{H+}}} = \\frac{50{,}0\\text{ kJ mol}^{-1}}{19{,}886\\text{ kJ mol}^{-1}} = 2{,}514$$
   Karena jumlah proton yang ditranslokasikan harus berupa bilangan bulat per tahap subunit mekanosintesis:
   $$n_{\\min} = 3\\text{ proton per molekul ATP}$$
   (Nilai ini bersesuaian tepat dengan struktur kristal cincin c pada rotor $F_0$ mitokondria mamalia yang memiliki 8-10 subunit c untuk menyintesis 3 ATP per putaran $360^\circ$, yaitu $8/3 \\approx 2{,}7 \\implies 3$ proton ditranslokasikan per ATP).
4. Maka opsi A adalah jawaban yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar ($\Delta p = -0{,}206\\text{ V}$; $-\\Delta G_{\\ce{H+}} = 19{,}9\\text{ kJ/mol}$; $n = 3$).
- Pilihan B: Mengabaikan kontribusi gradien pH ($\Delta\\text{pH}$) sehingga hanya memperhitungkan $\Delta\\Psi$.
- Pilihan C: Kesalahan tanda pengurangan pada suku pH.
- Pilihan D: Overestimasi gradien voltase.
- Pilihan E: Mengabaikan potensial membran listrik.`,
    solution_framework_template: `Tahap 1: Hitung gaya gerak proton: Delta p = Delta Psi - 0,0615 * Delta pH = -0,160 - 0,046 = -0,206 V.
Tahap 2: Hitung energi bebas masuknya proton: -Delta G = F * |Delta p| = 96,485 * 0,206 = 19,9 kJ/mol.
Tahap 3: Hitung proton minimum: n >= Delta G_p / (-Delta G) = 50,0 / 19,9 = 2,51 -> n_min = 3 proton per ATP.
Tahap 4: Simpulkan opsi A.`,
    tags: ['fosforilasi-oksidatif', 'proton-motive-force', 'atp-sintase', 'kemi-osmotik', 'mitokondria'],
    source_event: 'OSN Kimia 2017 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Sitokrom P450 & Compound I)
  // =========================================================================
  {
    id: 410006,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Enzim Bioanorganik Sitokrom P450 & Intermediat Oksidatif Compound I',
    title: 'Keadaan Oksidasi dan Karakteristik Elektronik Spesies Reaktif Compound I Sitokrom P450',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Enzim monooksigenase heme sitokrom P450 mengkatalisis aktivasi ikatan $\\ce{C-H}$ hidrokarbon yang sangat lembam dengan memecah satu molekul $\\ce{O2}$:
$$\\ce{R-H + O2 + NADPH + H+ -> R-OH + H2O + NADP+}$$

Pusat aktif enzim memuat cincin protoporfirin IX besi dengan ligan aksial proksimal berupa ion tiolat dari residu sisteinat ($\\ce{Cys-S^-}$).
Setelah pengikatan $\\ce{O2}$ dan reduksi dua-elektron diikuti pelepasan air, terbentuk spesies oksidator elektrofilik berenergi tinggi yang dikenal sebagai **Compound I**.

Manakah formulasi kimiawi, keadaan oksidasi formal pusat besi, dan sifat radikal dari spesies **Compound I** sitokrom P450 tersebut?

A. Spesies ferryl okso berkation radikal porfirin: $[\\ce{Por^{\\bullet+} - Fe^{IV}=O}]$ dengan keadaan oksidasi besi formal $\\ce{Fe(IV)}$ (tingkat ekuivalen oksidasi total $+5$ di atas $\\ce{Fe(III)}$ awal)
B. Spesies besi(II) perokso: $[\\ce{Por - Fe^{II}-O-O^-}]$
C. Spesies besi(III) superokso: $[\\ce{Por - Fe^{III}-O2^{\\bullet-}}]$
D. Spesies besi(VI) diokso bebas porfirin: $[\\ce{Fe^{VI}O2}]^{2+}$
E. Kompleks besi(III) hidroksida diamagnetik: $[\\ce{Por - Fe^{III}-OH}]$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Siklus Katalitik Sitokrom P450:**
1. Pembentukan Spesies Reaktif Kunci (Compound I):
   - Siklus diawali dari $\\ce{Fe(III)}$ keadaan istirahat.
   - Substrat mengikat $\\implies$ reduksi 1 elektron menjadi $\\ce{Fe(II)}$.
   - $\\ce{O2}$ mengikat $\\implies$ terbentuk kompleks $\\ce{Fe(III)-O2^{\\bullet-}}$ (dioxygen adduct).
   - Reduksi elektron kedua $\\implies$ terbentuk peroksi $[\ce{Fe(III)-O-O}]^{2-}$.
   - Protonasi pertama $\\implies$ intermediat hidroperokso $[\ce{Fe(III)-O-OH}]$ (*Compound 0*).
   - Protonasi kedua pada oksigen distal memicu pemutusan ikatan heterolitik $\\ce{O-O}$ melepaskan molekul $\\ce{H2O}$.
2. Struktur Elektronik Compound I:
   - Pelepasan molekul air meninggalkan satu atom oksigen terkoordinasi kuat pada besi.
   - Terjadi penarikan 2 ekuivalen oksidasi:
     - Satu ekuivalen oksidasi diambil dari pusat besi: teroksidasi dari $\\ce{Fe(III)}$ menjadi **besi(IV) ferryl ($\ce{Fe^{IV}=O}$)**.
     - Satu ekuivalen oksidasi kedua diambil dari cincin makrosiklik porfirin, menghasilkan **kation radikal porfirin ($\ce{Por^{\\bullet+}}$)** (atau terdelokalisasi parsial ke ligan tiolat sistein).
   - Formulasi resmi: **$[\\ce{Por^{\\bullet+} - Fe^{IV}=O}]$**.
3. Reaktivitas Abstraksi Hidrogen:
   - Keberadaan ligan donor $\\sigma$ dan $\\pi$ yang kuat yaitu tiolat ($\ce{Cys-S^-}$) "mendorong" kerapatan elektron (*thiolate push*), meningkatkan kebasaan oksigen ferryl sehingga mampu mengabstraksi atom hidrogen dari ikatan kovalen $\\ce{C-H}$ terkuat (BDE hingga $\sim 100\\text{ kcal mol}^{-1}$) melalui mekanisme *oxygen rebound*.
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($[\\ce{Por^{\\bullet+} - Fe^{IV}=O}]$).
- Pilihan B: Perokso adalah intermediat reduksi tahap awal, sebelum pemutusan ikatan $\\ce{O-O}$.
- Pilihan C: Superokso adalah *Compound 0* tereduksi awal.
- Pilihan D: Besi(VI) diokso bebas bukan struktur biologis heme.
- Pilihan E: Kompleks besi(III) hidroksida adalah keadaan akhir setelah transfer oksigen (*Compound II* / produk).`,
    solution_framework_template: `Tahap 1: Tinjau pemutusan ikatan O-O pada Compound 0 dengan pelepasan H2O: menarik 2 ekuivalen elektron oksidasi.
Tahap 2: Satu elektron ditarik dari Fe(III) menjadi Fe(IV)=O (ferryl).
Tahap 3: Satu elektron ditarik dari cincin porfirin membentuk kation radikal Por^•+.
Tahap 4: Dapatkan spesies Compound I: [Por^•+ - Fe(IV)=O] (opsi A).`,
    tags: ['sitokrom-p450', 'compound-i', 'ferryl-okso', 'kation-radikal-porfirin', 'aktivasi-c-h'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Terminasi Rantai ddNTP Sanger)
  // =========================================================================
  {
    id: 410007,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Replikasi DNA & Metode Sekuensing Terminasi Rantai Dideoksi Sanger',
    title: 'Mekanisme Terminasi Sintesis DNA oleh 2,3-Dideoksinukleotida Trifosfat (ddNTP)',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Metode sekuensing DNA enzimatik Sanger (Nobel Kimia 1980) memanfaatkan campuran 2'-deoksinukleotida trifosfat normal (dNTP: dATP, dCTP, dGTP, dTTP) dan sejumlah renik $2',3'$-dideoksinukleotida trifosfat (ddNTP) yang dilabeli pewarna fluoresen.

Reaksi polimerisasi pemanjangan rantai oleh enzim DNA polimerase berlangsung melalui serangan nukleofilik gugus $3'\\ce{-OH}$ primer bebas pada atom fosfor $\\alpha$ dari dNTP masuk, disertai pelepasan pirofosfat ($\\ce{PP_i}$):
$$\\ce{(DNA)_n-3'-OH + dNTP ->[\\text{DNA Pol}] (DNA)_{n+1}-3'-OH + PP_i}$$

Mengapa inkorporasi molekul ddNTP secara ireversibel **menghentikan pemanjangan rantai DNA** (*chain termination*) pada posisi nukleotida tersebut?

A. ddNTP tidak memiliki gugus hidroksil pada atom karbon $3'$ (posisi $3'\\ce{-H}$), sehingga tidak ada nukleofil untuk menyerang dNTP berikutnya membentuk ikatan fosfodiester baru
B. ddNTP bertindak sebagai inhibitor kompetitif ireversibel yang merusak situs aktif enzim DNA polimerase
C. ddNTP memicu pemutusan ikatan glikosidik melepaskan basa nitrogen
D. Cincin ribosa ddNTP terbuka menjadi rantai aldehida linier yang tidak dapat dikenali enzim
E. ddNTP memiliki muatan positif yang menolak ion magnesium pada situs aktif`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Sekuensing Sanger:**
1. Struktur Kimia Normal dNTP vs ddNTP:
   - **dNTP (2'-deoksinukleotida trifosfat)**:
     Atom karbon $2'$ kehilangan gugus $-\\ce{OH}$ (berikatan dengan $-\\ce{H}$), namun **atom karbon $3'$ tetap memiliki gugus hidroksil bebas ($3'\\ce{-OH}$)**.
   - **ddNTP (2',3'-dideoksinukleotida trifosfat)**:
     Molekul analog sintesis ini kehilangan gugus $-\\ce{OH}$ **pada kedua posisi $2'$ DAN $3'$** (memiliki gugus $2'\\ce{-H}$ dan $3'\\ce{-H}$).
2. Mekanisme Pemanjangan Polinukleotida oleh DNA Polimerase:
   - Polimerisasi mutlak memerlukan pasangan elektron bebas dari gugus **$3'\\ce{-OH}$ bebas** pada ujung rantai DNA yang sedang tumbuh untuk melakukan substitusi nukleofilik bimolekuler ($S_N2$) pada atom fosfor $\\alpha$ ($\ce{P_\\alpha}$) dari dNTP yang masuk, membentuk jembatan fosfodiester $3'-5'$ baru.
3. Konsekuensi Inkorporasi ddNTP:
   - Enzim DNA polimerase dapat memasukkan ddNTP karena struktur geometris basa nitrogen dan trifosfatnya identik dengan substrat normal.
   - Namun, setelah ddNTP diinkorporasikan pada ujung rantai, rantai baru kini memiliki ujung **$3'\\ce{-H}$**.
   - Ketiadaan gugus nukleofilik $3'\\ce{-OH}$ membuat pembentukan ikatan fosfodiester berikutnya **mustahil secara kimiawi**. Pemanjangan rantai terhenti permanen pada basa tersebut (*obligate chain terminator*).
4. Maka opsi A adalah penjelasan yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: ddNTP tidak merusak enzim DNA polimerase (enzim tetap aktif dan dapat mempolimerisasi cetakan lain).
- Pilihan C: Ikatan glikosidik tetap utuh.
- Pilihan D: Cincin furanosa tetap tertutup dan stabil.
- Pilihan E: ddNTP memiliki gugus trifosfat polianionik bermuatan negatif yang sama persis dengan dNTP normal.`,
    solution_framework_template: `Tahap 1: Bandingkan struktur dNTP (memiliki 3'-OH) vs ddNTP (memiliki 3'-H, tanpa 3'-OH).
Tahap 2: Tinjau reaksi polimerisasi DNA: serangan nukleofilik 3'-OH pada fosfat-alfa dNTP berikutnya.
Tahap 3: Karena ddNTP tidak memiliki gugus 3'-OH, tidak ada nukleofil untuk melanjutkan pemanjangan rantai.
Tahap 4: Simpulkan rantai DNA terhenti permanen (opsi A).`,
    tags: ['sekuensing-sanger', 'ddntp', 'terminasi-rantai', 'dna-polimerase', 'ikatan-fosfodiester'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Mekanisme Ligasi DNA & Adenilasi)
  // =========================================================================
  {
    id: 410008,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Mekanisme Enzimatik DNA Ligase & Intermediat Adenilat Enzim',
    title: 'Tiga Tahap Kimia Pembentukan Ikatan Fosfodiester oleh DNA Ligase Tergantung ATP',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Enzim DNA ligase (seperti T4 DNA ligase) mengkatalisis penyambungan celah takik (*nick*) pada rantai ganda DNA dengan mengorbankan satu molekul kofaktor energi tinggi $\\ce{ATP}$ (atau $\\ce{NAD+}$ pada bakteri):
$$\\ce{DNA-3'-OH + 5'-P-DNA + ATP -> DNA-3'-O-P(O2^-)-O-5'-DNA + AMP + PP_i}$$

Manakah urutan kronologis tiga tahap reaksi transfer nukleotidil yang BENAR dalam mekanisme kerja enzimatik DNA ligase?

A.
1. Serangan nukleofilik residu $\\varepsilon$-amino lisin enzim pada $\\ce{ATP}$ membentuk intermediat kovalen **enzim-AMP (adenilasi lisin)** dan melepaskan $\\ce{PP_i}$
2. Transfer gugus AMP dari lisin enzim ke gugus $5'\\text{-fosfat}$ pada celah DNA membentuk intermediat **DNA-adenilat ($5'\\text{-AppDNA}$)**
3. Serangan nukleofilik gugus $3'\\ce{-OH}$ DNA pada gugus $5'\\text{-fosfat}$ yang teraktivasi, melepaskan $\\ce{AMP}$ bebas dan menyatukan ikatan fosfodiester
B.
1. Serangan langsung gugus $3'\\ce{-OH}$ DNA pada $\\ce{ATP}$ membentuk ester trifosfat
2. Pelepasan $\\ce{PP_i}$ oleh air
3. Pembentukan ikatan ester baru
C.
1. Fosforilasi residu serin oleh $\\ce{ATP}$
2. Oksidasi deoksiribosa menjadi ribosa
3. Reduksi kembali oleh $\\ce{NADH}$
D.
1. Pemotongan rantai DNA oleh lisin
2. Masuknya nukleotida baru
3. Ligasi termal spontan
E.
1. Adenilasi basa timin DNA
2. Isomerisasi tautomerik
3. Pelepasan pirofosfat`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Tiga Tahap Reaksi DNA Ligase:**
1. Tahap 1: Aktivasi Enzim (Adenilasi Lisin):
   - Residu lisin spesifik pada situs aktif enzim DNA ligase menyerang atom fosfor $\\alpha$ dari $\\ce{ATP}$ (atau $\\ce{NAD+}$).
   - Gugus pirofosfat ($\ce{PP_i}$) terlepas, membentuk ikatan fosforamida kovalen stabil: **[Ligase-Lys-$\\ce{NH-P(O2^-)-O-adenosin}$] (Enzim-AMP)**.
2. Tahap 2: Aktivasi Gugus $5'\\text{-Fosfat}$ Celah DNA (Transfer Adenilat):
   - Gugus $5'\\text{-fosfat}$ yang memiliki muatan negatif menyerang fosfor gugus AMP pada lisin teradenilasi.
   - Gugus lisin terlepas kembali dalam bentuk bebas, dan gugus AMP berpindah membentuk **intermediat DNA-adenilat berenergi tinggi ($5'\\text{-AppDNA}$)** dengan ikatan pirofosfat anhidrida campuran antara $5'\\text{-fosfat}$ dan AMP.
3. Tahap 3: Pembentukan Ikatan Fosfodiester (Pelepasan AMP):
   - Gugus $3'\\ce{-OH}$ bebas pada sisi seberang takik bertindak sebagai nukleofil, menyerang atom fosfor $5'$ dari DNA-adenilat.
   - Gugus $\\ce{AMP}$ bertindak sebagai gugus pergi (*leaving group*) yang sangat baik.
   - Terbentuk ikatan kovalen fosfodiester $3'-5'$ yang utuh dan menyambung celah DNA, meregenerasi enzim DNA ligase untuk siklus berikutnya.
4. Maka opsi A adalah urutan tiga tahap kimiawi yang sepenuhnya benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Mengabaikan intermediat kovalen adenilasi enzim yang mutlak ada.
- Pilihan C: Tidak melibatkan fosforilasi serin dan oksidasi ribosa.
- Pilihan D: Ligase menyambung rantai, bukan memotong seperti restriksi endonuklease.
- Pilihan E: Adenilasi terjadi pada lisin dan fosfat, bukan pada cincin timin.`,
    solution_framework_template: `Tahap 1: Enzim teraktivasi: lisin menyerang ATP membentuk intermediat kovalen Enzim-AMP + PPi.
Tahap 2: Transfer AMP: gugus 5'-P celah DNA menyerang Enzim-AMP membentuk DNA-adenilat (5'-AppDNA).
Tahap 3: Ligasi akhir: nukleofil 3'-OH celah menyerang 5'-P melepaskan AMP bebas dan menutup takik (opsi A).`,
    tags: ['dna-ligase', 'adenilasi-lisin', 'intermediat-amp', 'ikatan-fosfodiester', 't4-ligase'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Interkalasi Molekul Planar pada DNA)
  // =========================================================================
  {
    id: 410009,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Termodinamika & Fisikokimia Interkalasi Molekul Planar pada DNA',
    title: 'Pengaruh Termodinamika dan Viskositas Interkalasi Etidium Bromida pada Heliks Ganda DNA',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Molekul aromatik polisiklik planar seperti zat warna etidium bromida (EB) atau obat anti-kanker doksorubisin berikatan kuat dengan heliks ganda DNA melalui mekanisme **interkalasi**:
Cincin aromatik planar menyisip di antara dua pasang basa Watson-Crick yang bertetangga, distabilkan oleh interaksi penumpukan $\\pi-\\pi$ (*pi-stacking*) hidrofobik dan gaya van der Waals.

Manakah efek fisikokimia dan termodinamika yang BENAR teramati pada larutan DNA akibat pengikatan agen interkalator tersebut?

A. Viskositas larutan DNA meningkat (karena heliks ganda terentang memanjang dan terurai kaku); temperatur leleh termal DNA ($T_m$) meningkat (karena heliks ganda distabilkan terhadap denaturasi); sudut puntir heliks mengalami pembukaan (*unwinding*) lokal
B. Viskositas larutan DNA menurun drastis karena DNA terpotong menjadi fragmen pendek
C. Temperatur leleh termal DNA ($T_m$) menurun drastis karena ikatan hidrogen basa terputus
D. Heliks DNA menyusut memendek menjadi bentuk bola kompak
E. Interkalasi memicu transisi spontan menjadi bentuk Z-DNA kidal pada semua konsentrasi`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Efek Fisikokimia Interkalasi DNA:**
1. Perubahan Struktural dan Panjang Heliks DNA:
   - Ketika molekul aromatik planar pipih menyisip di antara pasangan basa bertetangga:
     - Jarak antar pasangan basa pada situs interkalasi meregang dari $3{,}4\\text{ \AA}$ menjadi $\\approx 6{,}8\\text{ \AA}$ (bertambah tebal setebal cincin aromatik $\\sim 3{,}4\\text{ \AA}$).
     - Untuk mengakomodasi penyisipan ini tanpa memutuskan ikatan kovalen fosfodiester, heliks DNA harus mengalami **pembukaan puntiran (*unwinding*)** sebesar $\\sim 26^\\circ$ per molekul interkalator.
     - Akibatnya, panjang kontur keseluruhan molekul DNA bertambah panjang secara signifikan dan strukturnya menjadi lebih kaku.
2. Pengaruh terhadap Viskositas Larutan:
   - Viskositas intrinsik polimer sebanding dengan volume hidrodinamik dan panjang rantai ($[\\eta] \\propto L^3$).
   - Peregangan dan pemanjangan molekul DNA akibat interkalasi menyebabkan **viskositas larutan meningkat secara nyata**. (Ini adalah uji klasik Lerman untuk membedakan interkalasi dari pengikatan alur luar/groove binding).
3. Pengaruh terhadap Temperatur Denaturasi Termal ($T_m$):
   - Interaksi penumpukan $\\pi-\\pi$ hidrofobik antara cincin aromatik interkalator dan pasangan basa purin/pirimidin memberikan kontribusi entalpi penstabilan yang besar ($\Delta H < 0$).
   - Diperlukan energi termal yang lebih tinggi untuk memisahkan kedua untai DNA. Oleh karena itu, **temperatur leleh ($T_m$) DNA meningkat secara konsisten**!
4. Maka opsi A adalah pernyataan komprehensif yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Interkalasi tidak memotong ikatan kovalen fosfodiester (tidak ada hidrolisis enzimatik), sehingga viskositas naik bukan turun.
- Pilihan C: $T_m$ justru meningkat karena interkalasi memperkuat stabilitas heliks ganda.
- Pilihan D: Molekul DNA memanjang dan merenggang, bukan menyusut memendek.
- Pilihan E: Interkalator menstabilkan bentuk heliks B termodifikasi, bukan memaksa Z-DNA.`,
    solution_framework_template: `Tahap 1: Tinjau mekanisme interkalasi: cincin aromatik planar menyisip di antara pasangan basa bertetangga.
Tahap 2: Evaluasi perubahan dimensi heliks: heliks terentang (panjang kontur bertambah), menyebabkan viskositas meningkat.
Tahap 3: Evaluasi stabilitas termodinamika: interaksi pi-stacking ekstra menstabilkan heliks terhadap denaturasi termal (Tm naik).
Tahap 4: Simpulkan opsi A.`,
    tags: ['interkalasi-dna', 'etidium-bromida', 'viskositas-dna', 'suhu-leleh-tm', 'pi-stacking'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Enzim Seng Karbonat Anhidrase)
  // =========================================================================
  {
    id: 410010,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Kimia Bioanorganik Enzim Seng & Mekanisme Karbonat Anhidrase II',
    title: 'Peranan Kation Seng(II) dalam Menurunkan pKa Molekul Air Terkoordinasi pada Karbonat Anhidrase',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Enzim karbonat anhidrase II manusia (CA II) merupakan salah satu enzim tercepat di alam dengan bilangan pergantian (*turnover number*, $k_{\\text{cat}}$) mencapai $10^6\\text{ s}^{-1}$, mengkatalisis hidrasi karbon dioksida reversibel:
$$\\ce{CO2 + H2O <=> HCO3- + H+}$$

Pusat aktif CA II mengandung satu kation seng bivalen ($\\ce{Zn^{2+}}$) yang dikoordinasikan oleh tiga residu histidin ($\\ce{His94, His96, His119}$) dan satu molekul air ($\\ce{H2O}$) dalam geometri tetrahedral terdistorsi: $[\\ce{Zn(His)3(H2O)}]^{2+}$.

Molekul air bebas dalam larutan memiliki $pK_a = 15{,}7$ ($25^\\circ\\text{C}$):
Bagaimanakah pengaruh koordinasi pada kation asam Lewis $\\ce{Zn^{2+}}$ terhadap nilai $pK_a$ molekul air tersebut, dan bagaimanakah spesies nukleofil aktif terbentuk pada $\\text{pH}$ fisiologis normal ($7{,}4$)?

A. Efek polarisasi elektrostatik kuat dari ion asam Lewis $\\ce{Zn^{2+}}$ menarik kerapatan elektron dari ikatan $\\ce{O-H}$, menurunkan nilai $pK_a$ air terkoordinasi dari $15{,}7$ menjadi sekitar $7{,}0$; pada $\\text{pH} = 7{,}4$, molekul air terdeprotonasi membentuk ion seng-hidroksida $[\\ce{Zn-OH}]^+$ yang bertindak sebagai nukleofil kuat untuk menyerang $\\ce{CO2}$
B. Kation $\\ce{Zn^{2+}}$ menaikkan $pK_a$ air menjadi $20$ sehingga air menjadi inert
C. Kation $\\ce{Zn^{2+}}$ tereduksi menjadi logam $\\ce{Zn^0}$ yang melepaskan gas hidrogen
D. Kation $\\ce{Zn^{2+}}$ memotong ikatan $\\ce{C=O}$ dari $\\ce{CO2}$ secara langsung menghasilkan karbon bebas
E. Residu histidin teroksidasi menjadi radikal bebas yang memicu pembentukan asam bikarbonat`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Bioanorganik Karbonat Anhidrase:**
1. Peran Asam Lewis Seng (Zn2+):
   - Kation $\\ce{Zn^{2+}}$ memiliki konfigurasi $d^{10}$ tertutup yang stabil, radius ionik kecil, dan muatan bivalen terkonsentrasi tinggi.
   - Sifat asam Lewis kuat ini mempolarisasi ikatan $\\ce{O-H}$ dari molekul air terkoordinasi secara masif:
     $$\\ce{[Zn^{II}-OH2]^{2+} <=> [Zn^{II}-OH]^+ + H+}$$
2. Pergeseran Drastis Nilai $pK_a$:
   - Nilai $pK_a$ molekul air bebas dalam larutan adalah $15{,}7$.
   - Ketika terkoordinasi pada pusat $\\ce{[Zn(His)3]}$, nilai $pK_a$ turun drastis lebih dari **delapan unit $pK_a$**, menjadi **$pK_a \\approx 7{,}0$**!
3. Reaktivitas pada pH Fisiologis:
   - Pada $\\text{pH} \\approx 7{,}4$ (cairan fisiologis tubuh), lebih dari $70\\%$ enzim berada dalam bentuk terdeprotonasi: **spesies seng-hidroksida $[\\ce{Zn-OH}]^+$**.
   - Ion seng-hidroksida ini merupakan nukleofil yang sangat reaktif pada pH netral. Ia menyerang atom karbon elektrofilik dari substrat $\\ce{CO2}$ yang terperangkap pada kantung hidrofobik terdekat, membentuk ion bikarbonat ($\\ce{HCO3-}$).
   - Pelepasan ion bikarbonat dan koordinasi molekul air baru yang difasilitasi oleh transfer proton via $\\ce{His64}$ meregenerasi pusat aktif dengan laju difusional ultra-cepat.
4. Maka opsi A adalah penjelasan bioanorganik yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Asam Lewis selalu menurunkan $pK_a$ (meningkatkan keasaman), bukan menaikkannya.
- Pilihan C: Seng bivalen $d^{10}$ bersifat redoks-inert dalam sistem biologis (tidak pernah tereduksi menjadi $\\ce{Zn^0}$).
- Pilihan D: Tidak ada pembentukan karbon unsur bebas.
- Pilihan E: Reaksi tidak melibatkan mekanisme radikal bebas.`,
    solution_framework_template: `Tahap 1: Pahami sifat Zn(II) d10 sebagai asam Lewis kuat non-redoks.
Tahap 2: Jelaskan penurunan pKa air terkoordinasi dari 15,7 anjlok menjadi sekitar 7,0 akibat tarikan elektron Zn-O.
Tahap 3: Pada pH fisiologis 7,4 (pH > pKa), terbentuk spesies seng-hidroksida [Zn-OH]^+ sebagai nukleofil aktif.
Tahap 4: [Zn-OH]^+ menyerang karbonil CO2 menghasilkan bikarbonat HCO3^- (opsi A).`,
    tags: ['karbonat-anhidrase', 'bioanorganik-seng', 'pka-air', 'seng-hidroksida', 'hidrasi-co2'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
