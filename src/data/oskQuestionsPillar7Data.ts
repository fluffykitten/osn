/**
 * oskQuestionsPillar7Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 7: Reaksi Redoks Kompleks, Sel Elektrokimia & Persamaan Nernst (Pilar 7 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 207001 - 207010
 * - 2 = Jalur Olimpiade OSK
 * - 07 = Pilar 7
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_7_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2021 No. 19 (Stoikiometri Redoks Permanganometri & Asam Oksalat)
  // =========================================================================
  {
    id: 207001,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Penyetaraan Redoks Kompleks & Titrasi Permanganometri Suasana Asam',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Stoikiometri Reaksi Redoks Kalium Permanganat dengan Asam Oksalat',
    question_text: `Penyetaraan reaksi redoks antara ion permanganat dan asam oksalat dalam larutan asam sulfat encer hangat:
$$a\\,\\ce{MnO4-(aq)} + b\\,\\ce{H2C2O4(aq)} + c\\,\\ce{H+(aq)} -> d\\,\\ce{Mn^{2+}(aq)} + e\\,\\ce{CO2(g)} + f\\,\\ce{H2O(l)}$$

Setelah reaksi disetarakan dengan koefisien bilangan bulat terkecil, nilai rasio koefisien $\\frac{a + b}{e}$ dan volume gas $\\ce{CO2}$ (pada STP) yang dihasilkan dari oksidasi $0{,}050\\text{ mol}$ asam oksalat berturut-turut adalah ....

A. $0{,}70$ dan $2{,}24\\text{ L}$  
B. $0{,}70$ dan $1{,}12\\text{ L}$  
C. $0{,}50$ dan $2{,}24\\text{ L}$  
D. $1{,}40$ dan $4{,}48\\text{ L}$  
E. $0{,}70$ dan $0{,}56\\text{ L}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Penyetaraan Setengah Reaksi:**
   - Reduksi: $\\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}$ $(\\times 2)$
   - Oksidasi: $\\ce{H2C2O4 -> 2CO2 + 2H+ + 2e-}$ $(\\times 5)$
   Penjumlahan kedua setengah reaksi:
   $$2\\,\\ce{MnO4-} + 5\\,\\ce{H2C2O4} + 6\\,\\ce{H+} -> 2\\,\\ce{Mn^{2+}} + 10\\,\\ce{CO2} + 8\\,\\ce{H2O}$$
   Maka didapat: $a = 2, b = 5, c = 6, d = 2, e = 10, f = 8$.

2. **Rasio Koefisien:**
   $$\\frac{a + b}{e} = \\frac{2 + 5}{10} = \\frac{7}{10} = 0{,}70$$

3. **Stoikiometri Gas $\\ce{CO2}$:**
   Mol $\\ce{H2C2O4} = 0{,}050\\text{ mol}$.
   Mol $\\ce{CO2}$ yang terbentuk:
   $$n(\\ce{CO2}) = 0{,}050\\text{ mol} \\times \\frac{10}{5} = 0{,}100\\text{ mol}$$
   Volume pada STP ($0^\\circ\\text{C}, 1\\text{ atm}$):
   $$V(\\ce{CO2}) = 0{,}100\\text{ mol} \\times 22{,}4\\text{ L/mol} = 2{,}24\\text{ L}$$

**Analisis Distraktor:**
- **A:** Benar. Rasio koefisien $0{,}70$ dan volume gas $\\ce{CO2} = 2{,}24\\text{ L}$.
- **B:** Lupa mengalikan faktor stoikiometri 2 atom C per molekul asam oksalat.
- **C:** Salah menjumlahkan koefisien $a+b$ (hanya mengambil $b=5$).
- **D:** Mengalikan volume secara ganda.
- **E:** Kesalahan pembagian faktor mol.`,
    source_event: 'OSK Kimia 2021 No. 19 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 20 (Sel Konsentrasi & Persamaan Nernst)
  // =========================================================================
  {
    id: 207002,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Sel Konsentrasi & Persamaan Nernst pada 298 K',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Potensial Sel Konsentrasi Seng pada Suhu Kamar',
    question_text: `Suatu sel konsentrasi dirangkai menggunakan dua elektroda seng yang dicelupkan ke dalam dua kompartemen larutan seng sulfat:
$$\\ce{Zn(s) | Zn^{2+}(aq, 0{,}0010 M) || Zn^{2+}(aq, 0{,}100 M) | Zn(s)}$$

Pada suhu $298\\text{ K}$, nilai $\\frac{2{,}303 RT}{F} = 0{,}0592\\text{ V}$. Nilai potensial sel ($E_{sel}$) dan arah aliran elektron pada kawat luar adalah ....

A. $+0{,}0592\\text{ V}$; mengalir dari kompartemen encer ke kompartemen pekat  
B. $+0{,}0592\\text{ V}$; mengalir dari kompartemen pekat ke kompartemen encer  
C. $+0{,}1184\\text{ V}$; mengalir dari kompartemen encer ke kompartemen pekat  
D. $0{,}0000\\text{ V}$; tidak terjadi aliran elektron karena elektroda identik  
E. $-0{,}0592\\text{ V}$; reaksi tidak spontan`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Prinsip Sel Konsentrasi:**
   - Karena elektroda kedua sisi identik ($\ce{Zn}$), potensial sel standar bernilai nol: $E_{sel}^\\circ = 0{,}000\\text{ V}$.
   - Reaksi berlangsung spontan ke arah penyamaan konsentrasi:
     - Anoda (kompartemen encer, konsentrasi harus naik): $\\ce{Zn(s) -> Zn^{2+}(encer) + 2e-}$
     - Katoda (kompartemen pekat, konsentrasi harus turun): $\\ce{Zn^{2+}(pekat) + 2e- -> Zn(s)}$
     - Elektron mengalir melalui kawat dari anoda (encer) menuju katoda (pekat).

2. **Perhitungan Menggunakan Persamaan Nernst ($n = 2$):**
   $$E_{sel} = E_{sel}^\\circ - \\frac{0{,}0592}{n} \\log\\left(\\frac{[\\ce{Zn^{2+}}]_{encer}}{[\\ce{Zn^{2+}}]_{pekat}}\\right)$$
   $$E_{sel} = 0 - \\frac{0{,}0592}{2} \\log\\left(\\frac{0{,}0010}{0{,}100}\\right)$$
   $$E_{sel} = -0{,}0296 \\times \\log(10^{-2}) = -0{,}0296 \\times (-2) = +0{,}0592\\text{ V}$$

**Analisis Distraktor:**
- **A:** Benar. $E_{sel} = +0{,}0592\\text{ V}$ dengan arah aliran elektron dari anoda encer ke katoda pekat.
- **B:** Terbalik arah aliran elektron di kawat luar.
- **C:** Lupa membagi dengan jumlah transfer elektron $n = 2$.
- **D:** Anggapan salah bahwa sel konsentrasi tidak menghasilkan voltase.
- **E:** Kesalahan tanda logaritma terbalik.`,
    source_event: 'OSK Kimia 2022 No. 20 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2023 No. 22 (Diagram Latimer & Potensial Reduksi Non-Adjacent)
  // =========================================================================
  {
    id: 207003,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Diagram Latimer, Termodinamika Redoks & Potensial Spesi Non-Adjacent',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Potensial Reduksi Standar E°(ClO3- -> Cl2) dari Diagram Latimer Klorin',
    question_text: `Potongan diagram Latimer klorin dalam suasana asam ($[\\ce{H+}] = 1\\text{ M}$) diberikan sebagai berikut:
$$\\ce{ClO3- ->[+1{,}21\\text{ V}] HClO2 ->[+1{,}64\\text{ V}] HClO ->[+1{,}63\\text{ V}] Cl2}$$

Nilai potensial reduksi standar $E^\\circ$ untuk reduksi langsung ion klorat menjadi gas klorin menurut setengah reaksi:
$$\\ce{2ClO3-(aq) + 12H+(aq) + 10e- -> Cl2(g) + 6H2O(l)}$$
adalah mendekati ....

A. $+1{,}47\\text{ V}$  
B. $+4{,}48\\text{ V}$  
C. $+1{,}49\\text{ V}$  
D. $+1{,}36\\text{ V}$  
E. $+2{,}24\\text{ V}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Jumlah Elektron Tiap Tahap (per atom Cl):**
   - $\\ce{ClO3-} (+5) \\to \\ce{HClO2} (+3)$: $\\Delta n_1 = 2\\text{ e}^-$, $E_1^\\circ = +1{,}21\\text{ V}$
   - $\\ce{HClO2} (+3) \\to \\ce{HClO} (+1)$: $\\Delta n_2 = 2\\text{ e}^-$, $E_2^\\circ = +1{,}64\\text{ V}$
   - $\\ce{HClO} (+1) \\to \\frac{1}{2}\\ce{Cl2} (0)$: $\\Delta n_3 = 1\\text{ e}^-$, $E_3^\\circ = +1{,}63\\text{ V}$
   Total perubahan bilangan oksidasi dari $+5$ ke $0$ per atom $\\ce{Cl}$ adalah $n_{total} = 2 + 2 + 1 = 5\\text{ e}^-$. (Untuk reaksi lengkap pembentukan 1 mol $\\ce{Cl2}$, total $n = 10\\text{ e}^-$).

2. **Perhitungan Menggunakan Sifat Aditif Energi Bebas Gibbs ($\\Delta G^\\circ = -nFE^\\circ$):**
   $$E_{total}^\\circ = \\frac{\\sum n_i E_i^\\circ}{\\sum n_i}$$
   $$E_{total}^\\circ = \\frac{(2 \\times 1{,}21) + (2 \\times 1{,}64) + (1 \\times 1{,}63)}{2 + 2 + 1}$$
   $$E_{total}^\\circ = \\frac{2{,}42 + 3{,}28 + 1{,}63}{5} = \\frac{7{,}33}{5} = +1{,}466\\text{ V} \\approx +1{,}47\\text{ V}$$

Prinsip krusial: Potensial elektroda adalah besaran intensif sehingga tidak boleh dijumlahkan langsung, melainkan harus dibobotkan dengan jumlah elektron transfernya!

**Analisis Distraktor:**
- **A (+1,47 V):** Benar.
- **B (+4,48 V):** Kesalahan fatal menjumlahkan langsung ketiga potensial ($1{,}21 + 1{,}64 + 1{,}63$).
- **C (+1,49 V):** Rata-rata aritmatika sederhana tanpa bobot elektron ($4{,}48 / 3$).
- **D (+1,36 V):** Potensial reduksi standar $\\ce{Cl2 / Cl-}$.
- **E (+2,24 V):** Kesalahan pembagian total elektron.`,
    source_event: 'KSN-K Kimia 2023 No. 22 (Puspresnas/BPTI)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2023)',
    institution: 'Pusat Prestasi Nasional / BPTI Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2020 No. 22 (Hukum Faraday Elektrolisis & Produksi Gas di Anoda)
  // =========================================================================
  {
    id: 207004,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Hukum Elektrolisis Faraday & Stoikiometri Gas Hasil Elektrolisis',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Volume Gas Oksigen yang Terbentuk pada Anoda Selama Elektrolisis Air',
    question_text: `Larutan natrium sulfat (\\ce{Na2SO4}) dielektrolisis menggunakan sepasang elektroda platina dengan kuat arus listrik konstan $9{,}65\\text{ A}$ selama $20{,}0\\text{ menit}$.

Jika tetapan Faraday $F = 96500\\text{ C/mol}$ dan volume molar gas pada kondisi ruang ($25^\\circ\\text{C}, 1\\text{ atm}$) adalah $24{,}0\\text{ L/mol}$, volume gas yang dihasilkan pada anoda adalah ....

A. $0{,}72\\text{ L}$  
B. $1{,}44\\text{ L}$  
C. $2{,}88\\text{ L}$  
D. $0{,}36\\text{ L}$  
E. $0{,}67\\text{ L}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Reaksi di Anoda (Oksidasi Air):**
   Karena ion sulfat ($\\ce{SO4^{2-}}$) tidak dapat dioksidasi lebih lanjut, pelarut air yang teroksidasi:
   $$\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-}$$
   Setiap 1 mol gas $\\ce{O2}$ membutuhkan transfer $4\\text{ mol elektron}$.

2. **Menghitung Muatan Listrik ($Q$) dan Mol Elektron ($n_e$):**
   $$t = 20{,}0\\text{ menit} = 20 \\times 60 = 1200\\text{ s}$$
   $$Q = I \\times t = 9{,}65\\text{ A} \\times 1200\\text{ s} = 11580\\text{ C}$$
   $$n_e = \\frac{Q}{F} = \\frac{11580\\text{ C}}{96500\\text{ C/mol}} = 0{,}120\\text{ mol e}^-$$

3. **Menghitung Mol dan Volume Gas $\\ce{O2}$:**
   $$n(\\ce{O2}) = \\frac{n_e}{4} = \\frac{0{,}120\\text{ mol}}{4} = 0{,}030\\text{ mol}$$
   $$V(\\ce{O2}) = 0{,}030\\text{ mol} \\times 24{,}0\\text{ L/mol} = 0{,}72\\text{ L}$$

**Analisis Distraktor:**
- **A (0,72 L):** Benar. Volume $\\ce{O2}$ pada anoda.
- **B (1,44 L):** Volume gas hidrogen ($\\ce{H2}$) yang terbentuk pada katoda ($n_e / 2$).
- **C (2,88 L):** Volume total kedua gas ($\ce{H2} + \ce{O2}$).
- **D (0,36 L):** Lupa faktor konversi 20 menit ke detik (salah membagi 2).
- **E (0,67 L):** Menggunakan volume molar STP ($22{,}4\\text{ L/mol}$) alih-alih kondisi ruang ($24{,}0\\text{ L/mol}$).`,
    source_event: 'OSK Kimia 2020 No. 22 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2024 No. 19 (Penentuan Ksp Melalui Potensial Sel Elektrokimia)
  // =========================================================================
  {
    id: 207005,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Penentuan Nilai Ksp Garam Sukar Larut Menggunakan Sel Elektrokimia',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Nilai Ksp Perak Klorida dari Potensial Reduksi Standar Dua Setengah Reaksi',
    question_text: `Diberikan data potensial reduksi standar pada $298\\text{ K}$:
(1) $\\ce{Ag+(aq) + e- -> Ag(s)} \\quad E_1^\\circ = +0{,}799\\text{ V}$  
(2) $\\ce{AgCl(s) + e- -> Ag(s) + Cl-(aq)} \\quad E_2^\\circ = +0{,}222\\text{ V}$  

Jika diketahui nilai $\\frac{2{,}303 RT}{F} = 0{,}0592\\text{ V}$, maka nilai tetapan hasil kali kelarutan ($K_{sp}$) perak klorida pada $298\\text{ K}$ adalah mendekati .... (Diketahui $10^{-9{,}75} \\approx 1{,}8 \\times 10^{-10}$)

A. $1{,}8 \\times 10^{-10}$  
B. $5{,}6 \\times 10^{-18}$  
C. $1{,}3 \\times 10^{-5}$  
D. $3{,}2 \\times 10^{-14}$  
E. $8{,}9 \\times 10^{-8}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Merancang Sel Elektrokimia untuk Reaksi Pelarutan $\\ce{AgCl}$:**
   Reaksi pelarutan: $\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\quad K = K_{sp}$
   - Katoda (reduksi): $\\ce{AgCl(s) + e- -> Ag(s) + Cl-(aq)} \\quad E_{kat}^\circ = +0{,}222\\text{ V}$
   - Anoda (oksidasi): $\\ce{Ag(s) -> Ag+(aq) + e-} \\quad E_{an}^\circ = +0{,}799\\text{ V}$
   Reaksi sel keseluruhan:
   $$\\ce{AgCl(s) -> Ag+(aq) + Cl-(aq)}$$

2. **Menghitung Potensial Sel Standar ($E_{sel}^\\circ$):**
   $$E_{sel}^\\circ = E_{kat}^\\circ - E_{an}^\\circ = +0{,}222\\text{ V} - 0{,}799\\text{ V} = -0{,}577\\text{ V}$$

3. **Menghubungkan $E_{sel}^\\circ$ dengan $K_{sp}$ ($n = 1$):**
   $$E_{sel}^\\circ = \\frac{0{,}0592}{n} \\log K_{sp}$$
   $$\\log K_{sp} = \\frac{-0{,}577\\text{ V}}{0{,}0592\\text{ V}} \\approx -9{,}747 \\approx -9{,}75$$
   $$K_{sp} = 10^{-9{,}75} \\approx 1{,}8 \\times 10^{-10}$$

**Analisis Distraktor:**
- **A (1,8 x 10^-10):** Benar.
- **B (5,6 x 10^-18):** Mengalikan faktor 2 pada eksponen $n$.
- **C (1,3 x 10^-5):** Kelarutan molar $s = \\sqrt{K_{sp}}$, bukan $K_{sp}$ itu sendiri.
- **D (3,2 x 10^-14):** Kesalahan tanda aljabar selisih voltase.
- **E (8,9 x 10^-8):** Menggunakan pembagi 0,0296 alih-alih 0,0592.`,
    source_event: 'OSK Kimia 2024 No. 19 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Titrasi Potensiometri Redoks Fe2+ oleh Ce4+)
  // =========================================================================
  {
    id: 207006,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Titrasi Potensiometri Redoks & Potensial Titik Ekivalen',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Potensial Elektroda Indikator pada Titik Ekivalen Titrasi Redoks Fe2+ dengan Ce4+',
    question_text: `Suatu titrasi redoks potensiometri dilakukan dengan menitrasi larutan besi(II) menggunakan larutan serium(IV) dalam media asam sulfat $1\\text{ M}$:
$$\\ce{Fe^{2+}(aq) + Ce^{4+}(aq) -> Fe^{3+}(aq) + Ce^{3+}(aq)}$$

Diberikan potensial reduksi formal pada kondisi asam tersebut:
- $E^\\circ(\\ce{Fe^{3+} / Fe^{2+}}) = +0{,}68\\text{ V}$
- $E^\\circ(\\ce{Ce^{4+} / Ce^{3+}}) = +1{,}44\\text{ V}$

Potensial elektroda indikator platina ($E$) tepat pada titik ekivalen titrasi tersebut adalah ....

A. $+1{,}06\\text{ V}$  
B. $+0{,}76\\text{ V}$  
C. $+0{,}68\\text{ V}$  
D. $+1{,}44\\text{ V}$  
E. $+2{,}12\\text{ V}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Persamaan Nernst Kedua Pasangan Redoks:**
   Pada kesetimbangan di setiap titik titrasi:
   $$E = E_1^\\circ - 0{,}0592 \\log\\left(\\frac{[\\ce{Fe^{2+}}]}{[\\ce{Fe^{3+}}]}\\right)$$
   $$E = E_2^\\circ - 0{,}0592 \\log\\left(\\frac{[\\ce{Ce^{3+}}]}{[\\ce{Ce^{4+}}]}\\right)$$

2. **Kondisi Titik Ekivalen:**
   Stoikiometri reaksi mengharuskan:
   $$[\\ce{Fe^{3+}}] = [\\ce{Ce^{3+}}] \\quad \\text{dan} \\quad [\\ce{Fe^{2+}}] = [\\ce{Ce^{4+}}]$$

3. **Penjumlahan Kedua Persamaan Potensial:**
   $$2E = E_1^\\circ + E_2^\\circ - 0{,}0592 \\log\\left(\\frac{[\\ce{Fe^{2+}}][\\ce{Ce^{3+}}]}{[\\ce{Fe^{3+}}][\\ce{Ce^{4+}}]}\\right)$$
   Karena suku di dalam logaritma bernilai 1 (saling meniadakan):
   $$\\log(1) = 0 \\implies 2E = E_1^\\circ + E_2^\\circ$$
   $$E = \\frac{E_1^\\circ + E_2^\\circ}{2} = \\frac{+0{,}68\\text{ V} + 1{,}44\\text{ V}}{2} = \\frac{2{,}12\\text{ V}}{2} = +1{,}06\\text{ V}$$

**Analisis Distraktor:**
- **A (+1,06 V):** Benar. Rata-rata dari kedua potensial reduksi formal.
- **B (+0,76 V):** Potensial standar pasangan besi dalam suasana air murni.
- **C (+0,68 V):** Potensial pada titik setengah ekivalen ($50\\%$ titrasi).
- **D (+1,44 V):** Potensial saat serium(IV) berlebih $200\\%$.
- **E (+2,12 V):** Jumlah kedua potensial tanpa dibagi 2.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Termodinamika Korosi & Pasangan Anoda Tumbal)
  // =========================================================================
  {
    id: 207007,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Elektrokimia Korosi & Metode Proteksi Katodik Anoda Tumbal',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Termodinamika Efektivitas Logam Pelindung pada Proteksi Katodik Pipa Baja',
    question_text: `Pipa baja bawah tanah (terutama terdiri dari besi, \\ce{Fe}) dapat dilindungi dari perkaratan melalui metode proteksi katodik menggunakan anoda tumbal (*sacrificial anode*).

Diketahui nilai potensial reduksi standar:
- $\\ce{Mg^{2+} + 2e- -> Mg(s)} \\quad E^\\circ = -2{,}37\\text{ V}$
- $\\ce{Zn^{2+} + 2e- -> Zn(s)} \\quad E^\\circ = -0{,}76\\text{ V}$
- $\\ce{Fe^{2+} + 2e- -> Fe(s)} \\quad E^\\circ = -0{,}44\\text{ V}$
- $\\ce{Sn^{2+} + 2e- -> Sn(s)} \\quad E^\\circ = -0{,}14\\text{ V}$
- $\\ce{Cu^{2+} + 2e- -> Cu(s)} \\quad E^\\circ = +0{,}34\\text{ V}$

Logam yang **dapat** bertindak efektif sebagai anoda tumbal untuk melindungi pipa besi, serta konsekuensi jika pipa besi dilapisi oleh tembaga yang kemudian mengalami goresan hingga permukaan besi terbuka adalah ....

A. Magnesium dan seng; besi akan berkarat jauh lebih cepat di sekitar goresan  
B. Timah dan tembaga; besi akan tetap terlindungi secara katodik  
C. Magnesium dan seng; besi akan terlindungi lebih kuat di sekitar goresan  
D. Hanya tembaga; tidak ada pengaruh terhadap laju korosi besi  
E. Hanya seng; tembaga akan mengorbankan dirinya teroksidasi lebih dahulu`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Syarat Anoda Tumbal:**
   Logam pelindung harus memiliki potensial reduksi standar ($E^\\circ$) lebih negatif daripada besi ($E^\\circ < -0{,}44\\text{ V}$) agar lebih mudah teroksidasi secara spontan dibandingkan $\\ce{Fe}$.
   - $\\ce{Mg}$ ($-2{,}37\\text{ V}$) dan $\\ce{Zn}$ ($-0{,}76\\text{ V}$) memenuhi syarat ini.

2. **Efek Kontak Bimetalik dengan Logam Lebih Mulia (Tembaga):**
   - $E^\\circ(\\ce{Cu^{2+}/Cu}) = +0{,}34\\text{ V} > E^\\circ(\\ce{Fe^{2+}/Fe}) = -0{,}44\\text{ V}$.
   - Tembaga bertindak sebagai katoda (situs reduksi oksigen), sementara besi yang terbuka menjadi anoda dengan luas permukaan kecil.
   - Rasio anoda kecil vs katoda luas menyebabkan laju korosi besi terakselerasi sangat cepat (*galvanic corrosion*).

**Analisis Distraktor:**
- **A:** Benar secara menyeluruh.
- **B:** Terbalik, timah dan tembaga tidak bisa menjadi anoda tumbal untuk besi.
- **C:** Salah menganalisis akibat pelapisan tembaga yang tergores.
- **D:** Mengabaikan fenomena korosi galvanik.
- **E:** Tembaga lebih mulia sehingga tidak akan mengorbankan dirinya.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Overpotensial & Reduksi Selektif Kation pada Elektrolisis)
  // =========================================================================
  {
    id: 207008,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Overpotensial Hidrogen & Pengendapan Logam pada Katoda',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Pengaruh Overpotensial Hidrogen terhadap Pengendapan Seng dari Larutan Berair Asam',
    question_text: `Berdasarkan data potensial reduksi standar:
- $\\ce{2H+(aq) + 2e- -> H2(g)} \\quad E^\\circ = 0{,}00\\text{ V}$
- $\\ce{Zn^{2+}(aq) + 2e- -> Zn(s)} \\quad E^\\circ = -0{,}76\\text{ V}$

Secara termodinamika standar, ion $\\ce{H+}$ seharusnya tereduksi lebih dahulu daripada $\\ce{Zn^{2+}}$. Namun, dalam proses elektroplating industri, logam seng dapat diendapkan dari larutan berair $\\ce{ZnSO4}$ dengan efisiensi arus tinggi. Alasan ilmiah utama di balik fenomena ini adalah ....

A. Adanya overpotensial (*overvoltage*) yang sangat besar untuk evolusi gas $\\ce{H2}$ pada permukaan logam seng  
B. Nilai tetapan kelarutan $\\ce{Zn(OH)2}$ yang sangat besar dalam air  
C. Reaksi reduksi seng berlangsung dengan mekanisme empat elektron  
D. Logam seng mengalami pasivasi oleh lapisan oksida tebal seketika  
E. Ion sulfat bertindak sebagai katalis khusus reduksi ion seng`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Peran Overpotensial Kinetika Elektroda:**
   Meskipun reduksi $\\ce{H+}$ secara termodinamika lebih disukai ($E^\\circ = 0{,}00\\text{ V}$ vs $-0{,}76\\text{ V}$), pelepasan gas $\\ce{H2}$ pada elektroda seng memiliki hambatan kinetika aktivasi yang sangat besar yang disebut **overpotensial hidrogen** ($\\eta_{H_2} \\approx 0{,}8 - 1{,}0\\text{ V}$).

2. **Dampaknya pada Potensial Kerja Katoda:**
   Potensial efektif untuk reduksi hidrogen bergeser menjadi:
   $$E_{efektif}(\\ce{H+}) = E_{termo} - \\eta_{H_2} \\approx 0{,}00\\text{ V} - 0{,}90\\text{ V} = -0{,}90\\text{ V}$$
   Karena $-0{,}76\\text{ V} > -0{,}90\\text{ V}$, reduksi ion $\\ce{Zn^{2+}}$ menjadi logam seng lebih disukai secara kinetika dan terendapkan pada katoda.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan faktor overpotensial hidrogen pada permukaan seng.
- **B:** $\\ce{Zn(OH)2}$ sukar larut, bukan sangat larut.
- **C:** Reduksi seng hanya melibatkan 2 elektron, bukan 4 elektron.
- **D:** Pasivasi menghentikan reduksi alih-alih memfasilitasi elektroplating.
- **E:** Sulfat adalah anion penonton (*spectator*) yang inert.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Kapasitas Spesifik Teoritis Katoda Baterai Li-ion)
  // =========================================================================
  {
    id: 207009,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Elektrokimia Baterai Sekunder & Kapasitas Spesifik Teoritis',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Kapasitas Spesifik Teoritis Katoda Lithium Kobalt Oksida (LiCoO2)',
    question_text: `Katoda baterai litium-ion komersial berbasis litium kobalt oksida (\\ce{LiCoO2}, $M_r = 97{,}87\\text{ g/mol}$) bekerja berdasarkan reaksi interkalasi reversibel:
$$\\ce{LiCoO2 <=> Li_{1-x}CoO2 + x Li+ + x e-}$$

Jika diasumsikan ekstraksi ion litium dapat berlangsung sempurna ($x = 1{,}00$) dengan transfer 1 mol elektron per mol \\ce{LiCoO2}, serta $1\\text{ F} = 96485\\text{ C/mol} = 26801\\text{ mAh/mol}$, maka kapasitas muatan spesifik teoritis ($C_{teoritis}$) dari material katoda \\ce{LiCoO2} adalah ....

A. $274\\text{ mAh/g}$  
B. $140\\text{ mAh/g}$  
C. $372\\text{ mAh/g}$  
D. $170\\text{ mAh/g}$  
E. $548\\text{ mAh/g}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Rumus Kapasitas Spesifik Teoritis:**
   $$C_{teoritis} = \\frac{n \\times F}{M_r}$$
   dengan $n = 1$ mol elektron, $F = 26801\\text{ mAh/mol}$, dan $M_r = 97{,}87\\text{ g/mol}$.

2. **Perhitungan:**
   $$C_{teoritis} = \\frac{1 \\times 26801\\text{ mAh/mol}}{97{,}87\\text{ g/mol}} \\approx 273{,}84\\text{ mAh/g} \\approx 274\\text{ mAh/g}$$

*(Catatan praktis: Pada pemakaian baterai komersial nyata, hanya sekitar $x \\approx 0{,}5$ ion $\\ce{Li+}$ yang dapat diekstraksi secara stabil tanpa merusak struktur kisi kristal, menghasilkan kapasitas praktis sekitar $140\\text{ mAh/g}$).*

**Analisis Distraktor:**
- **A (274 mAh/g):** Benar untuk kapasitas teoritis maksimum ($x = 1$).
- **B (140 mAh/g):** Kapasitas praktis pada batas kestabilan struktur kristal ($x = 0{,}5$).
- **C (372 mAh/g):** Kapasitas spesifik teoritis dari material anoda grafit ($\\ce{LiC6}$).
- **D (170 mAh/g):** Kapasitas spesifik material katoda $\\ce{LiFePO4}$.
- **E (548 mAh/g):** Mengalikan dua kapasitas teoritis.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Efisiensi Termodinamika & Tegangan Sel Bahan Bakar H2/O2)
  // =========================================================================
  {
    id: 207010,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Sel Bahan Bakar (Fuel Cell), Efisiensi Termodinamika & Tegangan Reversibel',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Efisiensi Termodinamika Maksimum Sel Bahan Bakar Hidrogen-Oksigen pada Kondisi Standar',
    question_text: `Sel bahan bakar membran penukar proton (PEMFC) mengonversi energi kimia gas hidrogen dan oksigen secara langsung menjadi listrik:
$$\\ce{H2(g) + \\frac{1}{2}O2(g) -> H2O(l)}$$

Data termodinamika standar pada suhu $298\\text{ K}$:
- Perubahan entalpi pembakaran standar: $\\Delta H^\circ = -285{,}8\\text{ kJ/mol}$
- Perubahan energi bebas Gibbs standar: $\\Delta G^\circ = -237{,}2\\text{ kJ/mol}$
- Tetapan Faraday: $F = 96485\\text{ C/mol}$

Efisiensi termodinamika maksimum teoritis ($\\eta_{max} = \\frac{\\Delta G^\circ}{\\Delta H^\circ}$) dan potensial sel reversibel standar ($E^\circ$) sel bahan bakar tersebut berturut-turut adalah ....

A. $83{,}0\\%$ dan $1{,}23\\text{ V}$  
B. $100\\%$ dan $1{,}48\\text{ V}$  
C. $83{,}0\\%$ dan $2{,}46\\text{ V}$  
D. $75{,}5\\%$ dan $1{,}23\\text{ V}$  
E. $91{,}2\\%$ dan $0{,}61\\text{ V}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Menghitung Efisiensi Termodinamika Maksimum:**
   $$\\eta_{max} = \\frac{\\Delta G^\circ}{\\Delta H^\circ} \\times 100\\% = \\frac{-237{,}2\\text{ kJ/mol}}{-285{,}8\\text{ kJ/mol}} \\times 100\\% \\approx 82{,}99\\% \\approx 83{,}0\\%$$

2. **Menghitung Potensial Sel Reversibel Standar ($E^\circ$):**
   Reaksi melibatkan transfer $n = 2$ mol elektron:
   $$\\ce{H2 -> 2H+ + 2e-} \\quad \\text{dan} \\quad \\ce{\\frac{1}{2}O2 + 2H+ + 2e- -> H2O}$$
   $$\\Delta G^\circ = -nFE^\circ \\implies E^\circ = -\\frac{\\Delta G^\circ}{nF}$$
   $$E^\circ = -\\frac{-237200\\text{ J/mol}}{2 \\times 96485\\text{ C/mol}} = \\frac{237200}{192970} \\approx +1{,}229\\text{ V} \\approx 1{,}23\\text{ V}$$

**Analisis Distraktor:**
- **A:** Benar. $\\eta = 83{,}0\\%$ dan $E^\circ = 1{,}23\\text{ V}$.
- **B:** Asumsi keliru bahwa efisiensi dapat mencapai $100\\%$, dan tegangan berbasis entalpi ($E_{th} = 1{,}48\\text{ V}$).
- **C:** Lupa membagi transfer $n = 2$ mol elektron pada perhitungan voltase.
- **D:** Kesalahan aritmatika pembagian entalpi.
- **E:** Membagi dengan $n = 4$ mol elektron.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
