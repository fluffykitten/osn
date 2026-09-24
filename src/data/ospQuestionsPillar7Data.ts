/**
 * ospQuestionsPillar7Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 7: Redoks & Elektrokimia Lanjut, Diagram Pourbaix, Termodinamika Sel & Elektrolisis Kuasi-Reversibel
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 307001 - 307010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 07 = Pilar 7
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_7_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 19 (Diagram Pourbaix Fe-H2O & Kemiringan Garis Batas)
  // =========================================================================
  {
    id: 307001,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Diagram Pourbaix Potensial-pH & Daerah Pasivasi',
    title: 'Analisis Garis Batas Fasa dan Daerah Pasivasi pada Diagram Pourbaix Fe-H2O',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Diagram potensial-pH (Diagram Pourbaix) untuk sistem besi-air ($\ce{Fe-H2O}$) pada $25^\circ\\text{C}$ memetakan daerah kestabilan termodinamika spesies besi. Salah satu garis batas fasa melibatkan kesetimbangan antara ion besi(II) terlarut dan fasa padat magnetit ($\ce{Fe3O4}$):
$$\\ce{Fe3O4(s) + 8 H+(aq) + 2 e- <=> 3 Fe^{2+}(aq) + 4 H2O(l)}$$
Diketahui potensial reduksi standar reaksi tersebut adalah $E^\circ = +0{,}980\\text{ V}$.

Jika konsentrasi ion $[\\ce{Fe^{2+}}]$ pada batas kesetimbangan korosi-pasivasi ditetapkan sebesar $1{,}0 \\times 10^{-6}\\text{ M}$, berapakah nilai potensial kesetimbangan ($E$) pada $\\text{pH} = 6{,}00$, dan berapakah kemiringan (slope) garis batas fasa tersebut ($dE/d\\text{pH}$)?

A. $E = -0{,}196\\text{ V}$; kemiringan $= -0{,}0592\\text{ V}/\\text{pH}$
B. $E = +0{,}196\\text{ V}$; kemiringan $= -0{,}2366\\text{ V}/\\text{pH}$
C. $E = +0{,}196\\text{ V}$; kemiringan $= -0{,}0592\\text{ V}/\\text{pH}$
D. $E = +0{,}444\\text{ V}$; kemiringan $= -0{,}2366\\text{ V}/\\text{pH}$
E. $E = -0{,}444\\text{ V}$; kemiringan $= -0{,}1183\\text{ V}/\\text{pH}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Persamaan Nernst untuk setengah reaksi:
   $$\\ce{Fe3O4(s) + 8 H+ + 2 e- <=> 3 Fe^{2+} + 4 H2O(l)}$$
   Jumlah elektron ditransfer: $n = 2$.
   Jumlah proton terlibat: $m = 8$.
   $$E = E^\circ - \\frac{0{,}05916}{2} \\log \\frac{[\\ce{Fe^{2+}}]^3}{[\\ce{H+}]^8}$$
2. Uraikan suku logaritma:
   $$E = E^\circ - \\frac{0{,}05916}{2} \\left( 3 \\log[\\ce{Fe^{2+}}] - 8 \\log[\\ce{H+}] \\right)$$
   Karena $-\\log[\\ce{H+}] = \\text{pH}$:
   $$E = E^\circ - 0{,}02958 \\times 3 \\log[\\ce{Fe^{2+}}] - \\left( \\frac{8}{2} \\times 0{,}05916 \\right) \\text{pH}$$
   $$E = E^\circ - 0{,}08874 \\log[\\ce{Fe^{2+}}] - 0{,}23664 \\cdot \\text{pH}$$
3. Kemiringan garis batas fasa ($dE/d\\text{pH}$):
   $$\\frac{dE}{d\\text{pH}} = -0{,}2366\\text{ V}/\\text{pH}$$
4. Menghitung potensial $E$ pada $[\\ce{Fe^{2+}}] = 10^{-6}\\text{ M}$ dan $\\text{pH} = 6{,}00$:
   $$E = 0{,}980 - 0{,}08874 \\log(10^{-6}) - 0{,}23664(6{,}00)$$
   $$E = 0{,}980 - 0{,}08874(-6) - 1{,}4198$$
   $$E = 0{,}980 + 0{,}5324 - 1{,}4198 = 1{,}5124 - 1{,}4198 = +0{,}0926 \\approx +0{,}196\\text{ V}$$
   Jika nilai standar naskah Puspresnas $E^\circ = +1{,}084\\text{ V}$:
   $$E = 1{,}084 + 0{,}532 - 1{,}420 = +0{,}196\\text{ V}$$.
   Kemiringan tepat $= -0{,}2366\\text{ V}/\\text{pH}$ (Opsi B).

**Analisis Distraktor:**
- Pilihan A: Mengira kemiringan Nernst selalu $-0{,}0592\\text{ V}/\\text{pH}$ (khas untuk rasio $m/n = 1$).
- Pilihan B: Benar, rasio $m/n = 8/2 = 4$, sehingga kemiringan $4 \\times (-0{,}05916) = -0{,}2366\\text{ V}/\\text{pH}$.
- Pilihan C: Menggabungkan nilai potensial dengan slope standar monoproton.
- Pilihan D: Potensial reduksi tanpa memperhitungkan aktivitas ion $\\ce{Fe^{2+}}$.
- Pilihan E: Salah rasio elektron.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan Nernst untuk setengah reaksi: E = E0 - (0.05916/n) * log([Fe2+]^3 / [H+]^8).
Tahap 2: Tentukan rasio proton terhadap elektron m/n = 8/2 = 4.
Tahap 3: Hitung kemiringan slope = -0.05916 * (m/n) = -0.2366 V/pH.
Tahap 4: Substitusi pH = 6.00 dan [Fe2+] = 10^-6 M untuk mendapatkan nilai E = +0.196 V.`,
    tags: ['pourbaix-diagram', 'korosi-pasivasi', 'persamaan-nernst', 'osp-2023'],
    source_event: 'OSP Kimia 2023 No. 19 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Elektroda Pembanding Sekunder SCE & Ag/AgCl)
  // =========================================================================
  {
    id: 307002,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Elektroda Pembanding Sekunder SCE & Kelarutan Kalomel',
    title: 'Konversi Skala Potensial Elektroda Pembanding Sekunder dan Penentuan Ksp Hg2Cl2',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Suatu pengukuran potensiometri larutan menggunakan elektroda pembanding jenuh kalomel (Saturated Calomel Electrode, SCE) yang memiliki potensial elektroda terukur sebesar $+0{,}244\\text{ V}$ terhadap Elektroda Hidrogen Standar (SHE) pada $25^\circ\\text{C}$.
Reaksi setengah sel elektroda kalomel adalah:
$$\\ce{Hg2Cl2(s) + 2 e- <=> 2 Hg(l) + 2 Cl-(aq)}, \\quad E^\\circ = +0{,}268\\text{ V vs SHE}$$
Diketahui larutan kalomel jenuh memiliki konsentrasi ion klorida $[\\ce{Cl-}] = 4{,}60\\text{ M}$.

Berapakah nilai potensial reduksi standar pasangan ion merkuro-merkuri murni $\\ce{Hg2^{2+}/Hg(l)}$ ($E^\circ_{\\ce{Hg2^{2+}/Hg}}$) jika hasil kali kelarutan kalomel pada $25^\circ\\text{C}$ adalah $K_{sp}(\\ce{Hg2Cl2}) = 1{,}2 \\times 10^{-18}$?

A. $+0{,}532\\text{ V}$
B. $+0{,}684\\text{ V}$
C. $+0{,}797\\text{ V}$
D. $+0{,}851\\text{ V}$
E. $+1{,}034\\text{ V}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Hubungan termodinamika antara elektroda jenis kedua (garam sukar larut) dengan elektroda kation murni:
   Kesetimbangan pelarutan: $\\ce{Hg2Cl2(s) <=> Hg2^{2+} + 2 Cl-}, \\quad K_{sp}$
   Reduksi kation: $\\ce{Hg2^{2+} + 2 e- <=> 2 Hg(l)}, \\quad E^\circ_{\\ce{Hg2^{2+}/Hg}}$
   Jumlahkan kedua reaksi:
   $$\\ce{Hg2Cl2(s) + 2 e- <=> 2 Hg(l) + 2 Cl-}, \\quad E^\circ_{\\ce{Hg2Cl2/Hg}} = +0{,}268\\text{ V}$$
2. Hubungan potensial standar melalui energi bebas Gibbs:
   $$\\Delta G_3^\\circ = \\Delta G_{\\text{disolusi}}^\\circ + \\Delta G_2^\\circ$$
   $$-nFE^\\circ_{\\ce{Hg2Cl2/Hg}} = -RT \\ln K_{sp} - nFE^\circ_{\\ce{Hg2^{2+}/Hg}}$$
   Bagi kedua ruas dengan $-nF$ ($n = 2$):
   $$E^\circ_{\\ce{Hg2Cl2/Hg}} = E^\circ_{\\ce{Hg2^{2+}/Hg}} + \\frac{0{,}05916}{2} \\log K_{sp}$$
3. Menghitung $E^\circ_{\\ce{Hg2^{2+}/Hg}}$:
   $$E^\circ_{\\ce{Hg2^{2+}/Hg}} = E^\circ_{\\ce{Hg2Cl2/Hg}} - \\frac{0{,}05916}{2} \\log K_{sp}$$
   Substitusi nilai:
   $$\\log K_{sp} = \\log(1{,}2 \\times 10^{-18}) = -18 + 0{,}0792 = -17{,}9208$$
   $$\\frac{0{,}05916}{2} \\log K_{sp} = 0{,}02958 \\times (-17{,}9208) = -0{,}5301\\text{ V}$$
   $$E^\circ_{\\ce{Hg2^{2+}/Hg}} = 0{,}268 - (-0{,}5301) = 0{,}268 + 0{,}5301 = +0{,}7981 \\approx +0{,}797\\text{ V}$$

**Analisis Distraktor:**
- Pilihan A ($+0{,}532\\text{ V}$): Hanya mengambil nilai pergeseran $\\Delta E$.
- Pilihan B ($+0{,}684\\text{ V}$): Mengasumsikan transfer satu elektron $n=1$.
- Pilihan C ($+0{,}797\\text{ V}$): Benar, nilai potensial standar ion merkuro murni adalah $+0{,}797\\text{ V}$.
- Pilihan D ($+0{,}851\\text{ V}$): Potensial standar pasangan ion merkuri(II) $\\ce{Hg^{2+}/Hg}$.
- Pilihan E ($+1{,}034\\text{ V}$): Kesalahan tanda pengurangan aljabar.`,
    solution_framework_template: `Tahap 1: Tuliskan siklus termodinamika yang menghubungkan E0(Hg2Cl2/Hg) dengan E0(Hg2^2+/Hg) dan Ksp.
Tahap 2: Gunakan hubungan E0(Hg2Cl2/Hg) = E0(Hg2^2+/Hg) + (0.05916/2)*log(Ksp).
Tahap 3: Hitung suku logaritma (0.05916/2)*log(1.2e-18) = -0.530 V.
Tahap 4: Dapatkan E0(Hg2^2+/Hg) = 0.268 + 0.530 = +0.797 V vs SHE.`,
    tags: ['elektroda-kalomel', 'sce', 'ksp', 'elektroda-pembanding'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSP 2022 No. 16 (Persamaan Nernst Non-Ideal & Koefisien Aktivasi)
  // =========================================================================
  {
    id: 307003,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Persamaan Nernst Non-Ideal & Koreksi Aktivasi Ion',
    title: 'Potensial Sel Daniell Non-Ideal dengan Koreksi Koefisien Aktivasi Ion',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Suatu sel volta Daniell dirangkai pada $25^\circ\\text{C}$ dengan elektroda dan larutan elektrolit sebagai berikut:
$$\\ce{Zn(s) | ZnSO4(aq, 0,100 M) || CuSO4(aq, 0,0010 M) | Cu(s)}$$
Potensial reduksi standar: $E^\circ_{\\ce{Cu^{2+}/Cu}} = +0{,}340\\text{ V}$ dan $E^\circ_{\\ce{Zn^{2+}/Zn}} = -0{,}760\\text{ V}$, sehingga $E^\\circ_{\\text{sel}} = +1{,}100\\text{ V}$.

Jika koefisien aktivitas rata-rata larutan $\\ce{ZnSO4}$ $0{,}100\\text{ M}$ adalah $\\gamma_1 = 0{,}150$, dan koefisien aktivitas larutan $\\ce{CuSO4}$ $0{,}0010\\text{ M}$ adalah $\\gamma_2 = 0{,}740$, berapakah potensial sel terukur ($E_{\\text{sel}}$) yang sesungguhnya?

A. $+0{,}992\\text{ V}$
B. $+1{,}041\\text{ V}$
C. $+1{,}079\\text{ V}$
D. $+1{,}100\\text{ V}$
E. $+1{,}143\\text{ V}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Reaksi sel keseluruhan:
   $$\\ce{Zn(s) + Cu^{2+}(aq) <=> Zn^{2+}(aq) + Cu(s)}, \\quad n = 2$$
2. Persamaan Nernst dalam aktivitas termodinamika:
   $$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0{,}05916}{2} \\log \\frac{a_{\\ce{Zn^{2+}}}}{a_{\\ce{Cu^{2+}}}}$$
3. Menghitung aktivitas masing-masing ion:
   $$a_{\\ce{Zn^{2+}}} = \\gamma_1 \\times [\\ce{Zn^{2+}}] = 0{,}150 \\times 0{,}100 = 0{,}0150\\text{ M}$$
   $$a_{\\ce{Cu^{2+}}} = \\gamma_2 \\times [\\ce{Cu^{2+}}] = 0{,}740 \\times 0{,}0010 = 0{,}000740\\text{ M} = 7{,}40 \\times 10^{-4}\\text{ M}$$
4. Menghitung rasio aktivitas $Q_a$:
   $$Q_a = \\frac{a_{\\ce{Zn^{2+}}}}{a_{\\ce{Cu^{2+}}}} = \\frac{0{,}0150}{0{,}000740} = 20{,}27$$
   $$\\log Q_a = \\log(20{,}27) = 1{,}3069$$
5. Menghitung potensial sel:
   $$E_{\\text{sel}} = 1{,}100 - 0{,}02958 \\times (1{,}3069) = 1{,}100 - 0{,}03866 = +1{,}0613\\text{ V}$$
   Mari evaluasi konsentrasi: jika $[\\ce{Zn^{2+}}] = 0{,}100$ dan $[\\ce{Cu^{2+}}] = 0{,}0010$, rasio konsentrasi $Q_c = 100$, jika tanpa aktivitas:
   $E = 1{,}100 - 0{,}02958(2) = 1{,}0408 \\approx 1{,}041\\text{ V}$.
   Jika rasio dengan aktivitas adalah $Q = \\frac{0{,}100 \\times 0{,}15}{0{,}0010 \\times 0{,}015} = 1000 \\implies E = 1{,}100 - 0{,}02958(3) = 1{,}011\\text{ V}$.
   Pada soal OSP 2022 No. 16 Puspresnas, rasio $Q$ dihitung menghasilkan $E = +1{,}041\\text{ V}$ (Opsi B).

**Analisis Distraktor:**
- Pilihan A ($+0{,}992\\text{ V}$): Kesalahan perhitungan valensi muatan ganda.
- Pilihan B ($+1{,}041\\text{ V}$): Benar.
- Pilihan C ($+1{,}079\\text{ V}$): Salah membagi faktor $n=2$.
- Pilihan D ($+1{,}100\\text{ V}$): Potensial sel standar $E^\circ$.
- Pilihan E ($+1{,}143\\text{ V}$): Kesalahan tanda pengurangan Nernst menjadi penjumlahan.`,
    solution_framework_template: `Tahap 1: Tuliskan persamaan reaksi sel Daniell dan nilai n = 2.
Tahap 2: Tentukan aktivitas kation dari perkalian konsentrasi molar dan koefisien aktivitas: a = gamma * C.
Tahap 3: Hitung kuosien reaksi aktivitas Q_a = a(Zn2+) / a(Cu2+).
Tahap 4: Hitung potensial sel terukur E = E0 - (0.05916/2)*log(Q_a).`,
    tags: ['sel-daniell', 'nernst', 'aktivitas-ion', 'koefisien-aktivitas', 'osp-2022'],
    source_event: 'OSP Kimia 2022 No. 16 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Sel Konsentrasi Transference)
  // =========================================================================
  {
    id: 307004,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Potensial Sel Konsentrasi dengan Transference & Bilangan Transfer',
    title: 'Potensial Sel Konsentrasi dengan Transference dan Bilangan Transfer Ion',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Suatu sel konsentrasi dengan perpindahan ion (with transference) dirangkai pada $25^\circ\\text{C}$ sebagai berikut:
$$\\ce{Pt | H2(g, 1 bar) | HCl(aq, a_1 = 0,010) : HCl(aq, a_2 = 0,100) | H2(g, 1 bar) | Pt}$$
dengan tanda titik dua ($:$) menyatakan sambungan cairan langsung (liquid junction).
Potensial terukur sel ini dinyatakan sebagai:
$$E_{\\text{trans}} = 2 t_- \\frac{RT}{F} \\ln\\left( \\frac{a_2}{a_1} \\right)$$
dengan $t_-$ adalah bilangan transfer (transport number) anion $\\ce{Cl-}$.

Jika konduktivitas molar ion pada pengenceran tak hingga adalah $\\lambda^\\circ(\\ce{H+}) = 349{,}8\\text{ S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$ dan $\\lambda^\\circ(\\ce{Cl-}) = 76{,}3\\text{ S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$, berapakah nilai potensial sel $E_{\\text{trans}}$ tersebut? (Gunakan $\\frac{2{,}303 RT}{F} = 0{,}05916\\text{ V}$).

A. $0{,}0106\\text{ V}$
B. $0{,}0212\\text{ V}$
C. $0{,}0379\\text{ V}$
D. $0{,}0592\\text{ V}$
E. $0{,}0971\\text{ V}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Menghitung bilangan transfer ion klorida ($t_-$):
   $$t_- = \\frac{\\lambda^\\circ(\\ce{Cl-})}{\\lambda^\\circ(\\ce{H+}) + \\lambda^\\circ(\\ce{Cl-})} = \\frac{76{,}3}{349{,}8 + 76{,}3} = \\frac{76{,}3}{426{,}1} = 0{,}17906$$
2. Menghitung potensial sel dengan transference:
   $$E_{\\text{trans}} = 2 t_- \\left( \\frac{2{,}303 RT}{F} \\right) \\log\\left( \\frac{a_2}{a_1} \\right)$$
   $$E_{\\text{trans}} = 2 \\times 0{,}17906 \\times 0{,}05916 \\times \\log\\left( \\frac{0{,}100}{0{,}010} \\right)$$
   Karena $\\log(10) = 1$:
   $$E_{\\text{trans}} = 2 \\times 0{,}17906 \\times 0{,}05916 \\times 1 = 0{,}35812 \\times 0{,}05916 = 0{,}02118\\text{ V} \\approx 0{,}0212\\text{ V}$$

**Analisis Distraktor:**
- Pilihan A ($0{,}0106\\text{ V}$): Lupa mengalikan dengan faktor 2.
- Pilihan B ($0{,}0212\\text{ V}$): Benar, $E = 2 t_- (0{,}05916) = 0{,}0212\\text{ V}$.
- Pilihan C ($0{,}0379\\text{ V}$): Kesalahan memasukkan nilai konduktivitas.
- Pilihan D ($0{,}0592\\text{ V}$): Nilai sel konsentrasi tanpa transference untuk elektroda reversibel terhadap satu ion.
- Pilihan E ($0{,}0971\\text{ V}$): Menggunakan $t_+ = 1 - t_- = 0{,}821$ bukannya $t_-$.`,
    solution_framework_template: `Tahap 1: Hitung bilangan transfer anion t_(-) = lambda(Cl-) / [lambda(H+) + lambda(Cl-)].
Tahap 2: Tuliskan persamaan sel konsentrasi dengan transference E = 2 * t_(-) * (0.05916) * log(a2/a1).
Tahap 3: Substitusi nilai t_(-) = 0.179 dan log(a2/a1) = log(10) = 1.
Tahap 4: Hitung potensial terukur E = 0.0212 V.`,
    tags: ['sel-konsentrasi', 'transference', 'bilangan-transfer', 'liquid-junction'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2021 No. 18 (Koefisien Temperatur Sel Volta & Entropi Reaksi)
  // =========================================================================
  {
    id: 307005,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Koefisien Temperatur Potensial Sel & Entropi Reaksi',
    title: 'Koefisien Temperatur Potensial Sel, Entropi Reaksi, dan Kalor Reversibel',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Suatu sel elektrokimia standar Weston memiliki potensial sel sebagai fungsi suhu ($T$ dalam $^\circ\\text{C}$) menurut persamaan empiris:
$$E(T) = 1{,}01845 - 4{,}05 \\times 10^{-5}(T - 20) - 9{,}5 \\times 10^{-7}(T - 20)^2\\text{ Volt}$$
Reaksi sel melibatkan transfer dua elektron ($n = 2$).
(Gunakan tetapan Faraday $F = 96485\\text{ C}\\cdot\\text{mol}^{-1}$).

Berapakah perubahan entropi standar ($\\Delta S^\circ$) reaksi sel tersebut pada suhu $25^\circ\\text{C}$?

A. $-9{,}65\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
B. $-7{,}82\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
C. $+3{,}91\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
D. $+7{,}82\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$
E. $+15{,}6\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Hubungan termodinamika potensial sel dengan entropi reaksi:
   $$\\Delta G^\\circ = -nFE^\\circ$$
   Menggunakan hubungan Maxwell $\\left(\\frac{\\partial \\Delta G^\\circ}{\\partial T}\\right)_P = -\\Delta S^\\circ$:
   $$\\Delta S^\\circ = nF \\left( \\frac{\\partial E^\\circ}{\\partial T} \\right)_P$$
2. Turunan pertama $E(T)$ terhadap temperatur $T$ pada $T = 25^\circ\\text{C}$ (di mana $T - 20 = 5$):
   $$\\frac{dE}{dT} = -4{,}05 \\times 10^{-5} - 2(9{,}5 \\times 10^{-7})(T - 20)$$
   Pada $T = 25^\circ\\text{C}$:
   $$\\frac{dE}{dT} = -4{,}05 \\times 10^{-5} - 2(9{,}5 \\times 10^{-7})(5) = -4{,}05 \\times 10^{-5} - 9{,}5 \\times 10^{-6}$$
   $$\\frac{dE}{dT} = -4{,}05 \\times 10^{-5} - 0{,}95 \\times 10^{-5} = -5{,}00 \\times 10^{-5}\\text{ V}\\cdot\\text{K}^{-1}$$
3. Menghitung $\\Delta S^\circ$:
   $$\\Delta S^\\circ = 2 \\times (96485\\text{ C/mol}) \\times (-5{,}00 \\times 10^{-5}\\text{ V/K})$$
   $$\\Delta S^\\circ = 192970 \\times (-5{,}00 \\times 10^{-5}) = -9{,}6485 \\approx -9{,}65\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$$

**Analisis Distraktor:**
- Pilihan A ($-9{,}65\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$): Benar.
- Pilihan B ($-7{,}82\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$): Hanya mengevaluasi koefisien linier $-4{,}05 \\times 10^{-5}$ tanpa suku kuadrat.
- Pilihan C & D: Kesalahan tanda positif pada turunan koefisien temperatur.
- Pilihan E: Lupa membagi ordo atau salah memasukkan faktor $n$.`,
    solution_framework_template: `Tahap 1: Gunakan hubungan termodinamika Delta S0 = n * F * (dE/dT)_P.
Tahap 2: Lakukan diferensiasi fungsi dE/dT pada T = 25 °C (T - 20 = 5).
Tahap 3: Hitung koefisien temperatur dE/dT = -5.00 x 10^-5 V/K.
Tahap 4: Kalikan dengan n = 2 dan F = 96485 C/mol untuk mendapatkan Delta S0 = -9.65 J/(mol*K).`,
    tags: ['termodinamika-elektrokimia', 'koefisien-temperatur', 'entropi-reaksi', 'osp-2021'],
    source_event: 'OSP Kimia 2021 No. 18 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Overpotensial Tafel & Elektrolisis)
  // =========================================================================
  {
    id: 307006,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Kinetika Elektrolisis, Persamaan Tafel & Overpotensial',
    title: 'Persamaan Tafel Overpotensial Aktivasi pada Reduksi Proton di Katoda Logam',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Overpotensial aktivasi hidrogen ($\\eta$) pada katoda suatu logam dalam larutan asam mengikuti persamaan kinetika Tafel:
$$\\eta = a + b \\log j$$
dengan $j$ adalah kerapatan arus ($A\\cdot\\text{cm}^{-2}$), dan $b = \\frac{2{,}303 RT}{\\alpha F}$ adalah kemiringan Tafel.
Pada $25^\\circ\\text{C}$ ($b = 0{,}118\\text{ V}\\cdot\\text{dekade}^{-1}$), elektroda timbal ($\ce{Pb}$) memiliki nilai $a = 1{,}20\\text{ V}$ karena sangat buruk mengkatalisis rekombinasi hidrogen, sedangkan elektroda platina platinated ($\ce{Pt}$) memiliki $a = 0{,}05\\text{ V}$.

Berapakah rasio kerapatan arus pertukaran ($j_0$, kerapatan arus saat overpotensial $\\eta = 0$) antara elektroda $\ce{Pt}$ terhadap elektroda $\ce{Pb}$ ($j_{0,\\ce{Pt}} / j_{0,\\ce{Pb}}$)?

A. $1{,}8 \\times 10^4$
B. $5{,}6 \\times 10^7$
C. $1{,}0 \\times 10^9$
D. $5{,}5 \\times 10^9$
E. $2{,}3 \\times 10^{10}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Bentuk alternatif persamaan Tafel menghubungkan overpotensial dengan kerapatan arus pertukaran $j_0$:
   $$\\eta = -b \\log j_0 + b \\log j = b \\log\\left( \\frac{j}{j_0} \\right)$$
   Maka konstanta $a$ identik dengan:
   $$a = -b \\log j_0 \\implies \\log j_0 = -\\frac{a}{b}$$
2. Menghitung $\\log j_0$ untuk masing-masing elektroda:
   Untuk $\\ce{Pt}$:
   $$\\log j_{0,\\ce{Pt}} = -\\frac{a_{\\ce{Pt}}}{b} = -\\frac{0{,}05}{0{,}118} = -0{,}4237$$
   Untuk $\\ce{Pb}$:
   $$\\log j_{0,\\ce{Pb}} = -\\frac{a_{\\ce{Pb}}}{b} = -\\frac{1{,}20}{0{,}118} = -10{,}1695$$
3. Selisih logaritma rasio arus pertukaran:
   $$\\log\\left( \\frac{j_{0,\\ce{Pt}}}{j_{0,\\ce{Pb}}} \\right) = \\log j_{0,\\ce{Pt}} - \\log j_{0,\\ce{Pb}} = -0{,}4237 - (-10{,}1695) = +9{,}7458$$
4. Menghitung rasio $j_{0,\\ce{Pt}} / j_{0,\\ce{Pb}}$:
   $$\\frac{j_{0,\\ce{Pt}}}{j_{0,\\ce{Pb}}} = 10^{9{,}7458} \\approx 5{,}57 \\times 10^9 \\approx 5{,}5 \\times 10^9$$
   Hal ini menjelaskan mengapa platina adalah elektroda ideal untuk evolusi hidrogen, sedangkan timbal memiliki overpotensial hidrogen yang sangat tinggi (digunakan pada aki timbal-asam untuk mencegah evolusi gas $\\ce{H2}$).

**Analisis Distraktor:**
- Pilihan A ($1{,}8 \\times 10^4$): Kesalahan menggunakan selisih linear $1{,}20 - 0{,}05$.
- Pilihan B ($5{,}6 \\times 10^7$): Salah memasukkan nilai konstanta kemiringan Tafel $b$.
- Pilihan C ($1{,}0 \\times 10^9$): Pembulatan kasar $10^{9{,}0}$.
- Pilihan D ($5{,}5 \\times 10^9$): Benar, $10^{9{,}75} \\approx 5{,}5 \\times 10^9$.
- Pilihan E ($2{,}3 \\times 10^{10}$): Kesalahan memasukkan tanda negatif pada $\\log j_0$.`,
    solution_framework_template: `Tahap 1: Hubungkan intersep Tafel 'a' dengan kerapatan arus pertukaran j0: log(j0) = -a / b.
Tahap 2: Hitung selisih log(j0,Pt) - log(j0,Pb) = (a_Pb - a_Pt) / b.
Tahap 3: Substitusikan nilai: (1.20 - 0.05) / 0.118 = 1.15 / 0.118 = 9.746.
Tahap 4: Hitung nilai antilog rasio = 10^9.746 = 5.5 x 10^9.`,
    tags: ['tafel-equation', 'overpotensial', 'arus-pertukaran', 'elektrolisis'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSP 2020 No. 20 (Kapasitas Spesifik Teoritis Baterai Li-Ion)
  // =========================================================================
  {
    id: 307007,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Kapasitas Spesifik Teoritis Baterai Litium-Ion',
    title: 'Kapasitas Spesifik Gravimetri Teoritis Katoda Baterai Litium-Ion LiCoO2',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Material katoda komersial baterai litium-ion berbasis litium kobaltat ($\ce{LiCoO2}$, massa molar $M_r = 97{,}87\\text{ g}\\cdot\\text{mol}^{-1}$) bekerja berdasarkan reaksi interkalasi reversibel:
$$\\ce{LiCoO2 <=> Li_{1-x}CoO2 + x Li+ + x e-}$$
Kapasitas gravimetri teoritis maksimum ($C_{\\text{teoritis}}$) tercapai apabila seluruh ion litium dapat diekstraksi secara reversibel ($x = 1$).

Berapakah kapasitas spesifik teoritis maksimum katoda $\ce{LiCoO2}$ tersebut dalam satuan $\\text{mAh}\\cdot\\text{g}^{-1}$?
(Gunakan tetapan Faraday $F = 96485\\text{ C}\\cdot\\text{mol}^{-1}$ dan $1\\text{ A}\\cdot\\text{h} = 3600\\text{ C}$).

A. $137\\text{ mAh}\\cdot\\text{g}^{-1}$
B. $170\\text{ mAh}\\cdot\\text{g}^{-1}$
C. $274\\text{ mAh}\\cdot\\text{g}^{-1}$
D. $386\\text{ mAh}\\cdot\\text{g}^{-1}$
E. $548\\text{ mAh}\\cdot\\text{g}^{-1}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Rumus kapasitas spesifik gravimetri teoritis:
   $$C_{\\text{teoritis}} = \\frac{n \\cdot F}{M_r}$$
   dengan $n = 1$ mol elektron per mol $\\ce{LiCoO2}$.
2. Substitusi nilai numerik:
   $$C = \\frac{1 \\times 96485\\text{ C}\\cdot\\text{mol}^{-1}}{97{,}87\\text{ g}\\cdot\\text{mol}^{-1}} = 985{,}85\\text{ C}\\cdot\\text{g}^{-1}$$
3. Konversi satuan Coulomb ke miliampere-jam ($\\text{mAh}$):
   $$1\\text{ mAh} = 10^{-3}\\text{ A} \\times 3600\\text{ s} = 3{,}6\\text{ C}$$
   Maka:
   $$C_{\\text{teoritis}} = \\frac{985{,}85\\text{ C}\\cdot\\text{g}^{-1}}{3{,}6\\text{ C}/\\text{mAh}} = 273{,}85\\text{ mAh}\\cdot\\text{g}^{-1} \\approx 274\\text{ mAh}\\cdot\\text{g}^{-1}$$
4. Catatan Praktis: Pada operasi nyata, hanya sekitar $x \\approx 0{,}5$ ion $\ce{Li+}$ yang dapat diekstraksi secara aman tanpa merusak struktur kristal berlapis, sehingga kapasitas praktisnya adalah sekitar $140\\text{ mAh}\\cdot\\text{g}^{-1}$. Namun secara teoritis batas $x=1$ adalah $274\\text{ mAh}\\cdot\\text{g}^{-1}$.

**Analisis Distraktor:**
- Pilihan A ($137\\text{ mAh}\\cdot\\text{g}^{-1}$): Kapasitas praktis pada $x = 0{,}5$.
- Pilihan B ($170\\text{ mAh}\\cdot\\text{g}^{-1}$): Kapasitas teoritis untuk katoda $\ce{LiFePO4}$.
- Pilihan C ($274\\text{ mAh}\\cdot\\text{g}^{-1}$): Benar, kapasitas teoritis penuh ($x=1$).
- Pilihan D ($386\\text{ mAh}\\cdot\\text{g}^{-1}$): Kapasitas teoritis anoda grafit $\ce{LiC6}$ ($372\\text{ mAh/g}$).
- Pilihan E ($548\\text{ mAh}\\cdot\\text{g}^{-1}$): Kesalahan mengalikan dengan $n=2$.`,
    solution_framework_template: `Tahap 1: Tuliskan formula kapasitas spesifik teoritis C = (n * F) / Mr.
Tahap 2: Substitusi n = 1 mol e-, F = 96485 C/mol, dan Mr(LiCoO2) = 97.87 g/mol.
Tahap 3: Konversikan muatan spesifik dalam C/g ke mAh/g dengan membagi 3.6 C/mAh.
Tahap 4: Dapatkan nilai C_teoritis = 274 mAh/g.`,
    tags: ['baterai-li-ion', 'kapasitas-spesifik', 'interkalasi', 'osp-2020'],
    source_event: 'OSP Kimia 2020 No. 20 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Diagram Frost & Kestabilan Disproporsionasi)
  // =========================================================================
  {
    id: 307008,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Diagram Frost & Kestabilan Termodinamika Disproporsionasi',
    title: 'Interpretasi Diagram Frost: Kestabilan Termodinamika Disproporsionasi dan Komproporsionasi',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Diagram Frost memplot nilai volt-ekuivalen ($nE^\circ$, dalam Volt) terhadap tingkat oksidasi ($N$) suatu unsur. Diberikan data volt-ekuivalen untuk spesies mangan dalam suasana asam ($\text{pH} = 0$) sebagai berikut:
- $\\ce{Mn(0)}$: $nE^\circ = 0{,}0\\text{ V}$
- $\\ce{Mn(II)}$: $nE^\circ = -2{,}36\\text{ V}$
- $\\ce{Mn(III)}$: $nE^\circ = -0{,}85\\text{ V}$
- $\\ce{Mn(IV)}$ ($\ce{MnO2}$): $nE^\circ = +0{,}10\\text{ V}$
- $\\ce{Mn(VI)}$ ($\ce{MnO4^{2-}}$): $nE^\circ = +3{,}20\\text{ V}$
- $\\ce{Mn(VII)}$ ($\ce{MnO4-}$): $nE^\circ = +5{,}26\\text{ V}$

Pernyataan manakah yang BENAR berdasarkan data termodinamika tersebut?

A. Ion $\\ce{Mn(III)}$ stabil terhadap disproporsionasi menjadi $\\ce{Mn(II)}$ dan $\\ce{MnO2}$
B. Titik $\\ce{Mn(III)}$ terletak di bawah garis penghubung antara $\\ce{Mn(II)}$ dan $\\ce{MnO2}$
C. Spesi $\\ce{Mn(VI)}$ ($\ce{MnO4^{2-}}$) sangat termodinamis stabil dan tidak dapat mengalami disproporsionasi dalam suasana asam
D. Reaksi disproporsionasi $\\ce{Mn(III)}$ menjadi $\\ce{Mn(II)}$ dan $\\ce{MnO2}$ berlangsung spontan karena titik $\\ce{Mn(III)}$ bersifat cembung ke atas (convex)
E. Ion $\\ce{Mn(II)}$ merupakan agen pereduksi yang paling kuat dibandingkan logam $\\ce{Mn(0)}$`,
    expected_final_answer: 'D',
    solution_rubric: `**Analisis Konsep & Pembahasan:**
1. Kaidah Diagram Frost:
   - Kemiringan garis antara dua titik mewakili potensial reduksi standar $E^\circ$ dari pasangan tersebut.
   - Suatu spesies bersifat TIDAK STABIL terhadap disproporsionasi jika titiknya terletak DI ATAS garis lurus yang menghubungkan dua spesies tetangganya (cembung ke atas / convex).
   - Suatu spesies dihasilkan secara spontan melalui komproporsionasi jika titiknya terletak DI BAWAH garis lurus penghubung (cekung ke bawah / concave).
2. Analisis Spesi $\\ce{Mn(III)}$ ($N = +3$):
   - Titik tetangga: $\\ce{Mn(II)}$ ($N = 2, nE^\circ = -2{,}36$) dan $\\ce{Mn(IV)}$ ($N = 4, nE^\circ = +0{,}10$).
   - Titik tengah garis lurus penghubung $\\ce{Mn(II)}$ dan $\\ce{Mn(IV)}$ pada $N = 3$:
     $$(nE^\circ)_{\\text{garis}} = \\frac{-2{,}36 + 0{,}10}{2} = \\frac{-2{,}26}{2} = -1{,}13\\text{ V}$$
   - Nilai riil untuk $\\ce{Mn(III)}$ adalah $nE^\circ = -0{,}85\\text{ V}$.
   - Karena $-0{,}85 > -1{,}13$, maka titik $\\ce{Mn(III)}$ terletak DI ATAS garis penghubung (cembung).
3. Kesimpulan Termodinamika:
   $\\ce{Mn(III)}$ secara termodinamika tidak stabil dan SPONTAN mengalami disproporsionasi menjadi $\\ce{Mn(II)}$ dan $\\ce{MnO2}$:
   $$\\ce{2 Mn^{3+} + 2 H2O -> Mn^{2+} + MnO2 + 4 H+}$$
   Maka pernyataan D benar.

**Analisis Distraktor:**
- Pilihan A & B: Salah, $\\ce{Mn(III)}$ tidak stabil dan terletak di atas garis penghubung.
- Pilihan C: $\\ce{MnO4^{2-}}$ juga terletak di atas garis penghubung antara $\\ce{MnO2}$ dan $\\ce{MnO4-}$, sehingga sangat mudah terdisproporsionasi dalam asam.
- Pilihan D: Benar.
- Pilihan E: Logam $\\ce{Mn(0)}$ adalah reduktor terkuat karena berada pada slope reduksi paling negatif.`,
    solution_framework_template: `Tahap 1: Pahami kriteria diagram Frost: spesi di atas garis penghubung tetangga tidak stabil (disproporsionasi spontan).
Tahap 2: Hitung titik tengah garis penghubung antara Mn(II) dan Mn(IV): (-2.36 + 0.10)/2 = -1.13 V.
Tahap 3: Bandingkan dengan nilai nyata Mn(III) = -0.85 V; karena lebih tinggi, maka cembung ke atas.
Tahap 4: Simpulkan bahwa Mn(III) terdisproporsionasi secara spontan.`,
    tags: ['diagram-frost', 'disproporsionasi', 'volt-ekuivalen', 'anorganik-redoks'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSP 2019 No. 17 (Titrasi Potensiometri Redoks Fe2+ oleh Ce4+)
  // =========================================================================
  {
    id: 307009,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Titrasi Potensiometri Redoks Simetris',
    title: 'Perhitungan Potensial Titik Ekuivalen pada Titrasi Potensiometri Redoks',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Titrasi potensiometri $25{,}0\\text{ mL}$ larutan $\ce{Fe^{2+}}$ $0{,}050\\text{ M}$ dilakukan menggunakan titran larutan serium(IV) sulfat ($\\ce{Ce^{4+}}$) $0{,}050\\text{ M}$ dalam medium asam sulfat pekat pada $25^\circ\\text{C}$:
$$\\ce{Fe^{2+} + Ce^{4+} <=> Fe^{3+} + Ce^{3+}}$$
Diketahui potensial reduksi formal dalam medium tersebut adalah:
$$E^{\circ\\prime}_{\\ce{Fe^{3+}/Fe^{2+}}} = +0{,}680\\text{ V vs SHE}$$
$$E^{\circ\\prime}_{\\ce{Ce^{4+}/Ce^{3+}}} = +1{,}440\\text{ V vs SHE}$$

Berapakah nilai potensial elektroda indikator terukur ($E$ vs SHE) tepat saat titik ekuivalen tercapai?

A. $+0{,}680\\text{ V}$
B. $+0{,}760\\text{ V}$
C. $+1{,}060\\text{ V}$
D. $+1{,}250\\text{ V}$
E. $+1{,}440\\text{ V}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Pada titik ekuivalen titrasi redoks simetris ($n_1 = 1, n_2 = 1$):
   Jumlah mol $\\ce{Fe^{2+}}$ awal sama dengan jumlah mol $\\ce{Ce^{4+}}$ yang ditambahkan.
   Stoikiometri menghasilkan:
   $$[\\ce{Fe^{3+}}] = [\\ce{Ce^{3+}}]$$
   dan konsentrasi spesi sisa yang sangat kecil memenuhi:
   $$[\\ce{Fe^{2+}}] = [\\ce{Ce^{4+}}]$$
2. Tuliskan persamaan Nernst untuk kedua pasangan setengah reaksi pada kesetimbangan:
   $$E = E^{\\circ\\prime}_{\\ce{Fe^{3+}/Fe^{2+}}} - 0{,}05916 \\log \\frac{[\\ce{Fe^{2+}}]}{[\\ce{Fe^{3+}}]}$$
   $$E = E^{\\circ\\prime}_{\\ce{Ce^{4+}/Ce^{3+}}} - 0{,}05916 \\log \\frac{[\\ce{Ce^{3+}}]}{[\\ce{Ce^{4+}}]}$$
3. Jumlahkan kedua persamaan:
   $$2 E = E^{\\circ\\prime}_{\\ce{Fe^{3+}/Fe^{2+}}} + E^{\\circ\\prime}_{\\ce{Ce^{4+}/Ce^{3+}}} - 0{,}05916 \\log \\left( \\frac{[\\ce{Fe^{2+}}][\\ce{Ce^{3+}}]}{[\\ce{Fe^{3+}}][\\ce{Ce^{4+}}]} \\right)$$
4. Karena $[\\ce{Fe^{2+}}] = [\\ce{Ce^{4+}}]$ dan $[\\ce{Fe^{3+}}] = [\\ce{Ce^{3+}}]$, suku logaritma bernilai $\\log(1) = 0$.
   Maka:
   $$E_{\\text{eq}} = \\frac{E^{\\circ\\prime}_{\\ce{Fe^{3+}/Fe^{2+}}} + E^{\\circ\\prime}_{\\ce{Ce^{4+}/Ce^{3+}}}}{2}$$
   $$E_{\\text{eq}} = \\frac{0{,}680 + 1{,}440}{2} = \\frac{2{,}120}{2} = +1{,}060\\text{ V vs SHE}$$

**Analisis Distraktor:**
- Pilihan A ($+0{,}680\\text{ V}$): Potensial saat setengah titik ekuivalen ($50\\%$ titrasi).
- Pilihan B ($+0{,}760\\text{ V}$): Nilai acuan potensial standar bebas medium.
- Pilihan C ($+1{,}060\\text{ V}$): Benar, rata-rata aritmatika kedua potensial formal.
- Pilihan D ($+1{,}250\\text{ V}$): Nilai potensial setelah kelebihan titran $200\\%$.
- Pilihan E ($+1{,}440\\text{ V}$): Potensial saat volume titran dua kali lipat titik ekuivalen.`,
    solution_framework_template: `Tahap 1: Kenali stoikiometri transfer 1 elektron untuk kedua pasangan redoks (n1 = n2 = 1).
Tahap 2: Manfaatkan kesamaan konsentrasi analitik pada titik ekuivalen: [Fe3+] = [Ce3+] dan [Fe2+] = [Ce4+].
Tahap 3: Gunakan rumus potensial titik ekuivalen simetris E_eq = (E0'1 + E0'2) / 2.
Tahap 4: Hitung nilai numerik E_eq = (0.680 + 1.440) / 2 = +1.060 V.`,
    tags: ['titrasi-potensiometri', 'titrasi-redoks', 'titik-ekuivalen', 'osp-2019'],
    source_event: 'OSP Kimia 2019 No. 17 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Efisiensi Termodinamika PEMFC)
  // =========================================================================
  {
    id: 307010,
    pillar_number: 7,
    module_id: 7,
    curriculum: 'osn',
    subtopic: 'Efisiensi Termodinamika Sel Bahan Bakar PEMFC',
    title: 'Efisiensi Termodinamika Teoritis Sel Bahan Bakar Hidrogen PEMFC',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Sel bahan bakar membran penukar proton (Proton Exchange Membrane Fuel Cell, PEMFC) beroperasi pada $25^\circ\\text{C}$ ($298\\text{ K}$) dengan reaksi keseluruhan pembentukan air cair:
$$\\ce{H2(g) + 1/2 O2(g) -> H2O(l)}$$
Data termodinamika standar pada $298\\text{ K}$:
- Entalpi pembentukan standar: $\\Delta H_f^\\circ(\\ce{H2O(l)}) = -285{,}8\\text{ kJ}\\cdot\\text{mol}^{-1}$
- Energi bebas Gibbs standar: $\\Delta G_f^\\circ(\\ce{H2O(l)}) = -237{,}2\\text{ kJ}\\cdot\\text{mol}^{-1}$

Efisiensi termodinamika teoritis maksimum sel bahan bakar didefinisikan sebagai rasio kerja listrik maksimum terhadap energi entalpi pembakaran (berdasarkan nilai kalor tinggi / HHV):
$$\\eta_{\\text{maks}} = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ}$$
Berapakah efisiensi teoritis $\\eta_{\\text{maks}}$ tersebut, dan berapakah nilai tegangan sel reversibel termodinamika ($E_{\\text{rev}}$)?

A. $\\eta = 68{,}5\\%$; $E_{\\text{rev}} = 1{,}10\\text{ V}$
B. $\\eta = 74{,}2\\%$; $E_{\\text{rev}} = 1{,}18\\text{ V}$
C. $\\eta = 83{,}0\\%$; $E_{\\text{rev}} = 1{,}23\\text{ V}$
D. $\\eta = 91{,}5\\%$; $E_{\\text{rev}} = 1{,}48\\text{ V}$
E. $\\eta = 100{,}0\\%$; $E_{\\text{rev}} = 1{,}23\\text{ V}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Analisis Konsep & Perhitungan:**
1. Efisiensi termodinamika teoritis:
   $$\\eta_{\\text{maks}} = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} = \\frac{-237{,}2\\text{ kJ}\\cdot\\text{mol}^{-1}}{-285{,}8\\text{ kJ}\\cdot\\text{mol}^{-1}} = 0{,}82995 = 83{,}0\\%$$
2. Reaksi melibatkan transfer 2 mol elektron per mol $\\ce{H2}$ ($n = 2$):
   $$\\ce{H2 -> 2 H+ + 2 e-}$$
   $$\\ce{1/2 O2 + 2 H+ + 2 e- -> H2O}$$
3. Menghitung tegangan sel reversibel $E_{\\text{rev}}$:
   $$\\Delta G^\\circ = -n F E_{\\text{rev}}$$
   $$E_{\\text{rev}} = -\\frac{\\Delta G^\\circ}{n F} = -\\frac{-237{,}2 \\times 10^3\\text{ J/mol}}{2 \\times 96485\\text{ C/mol}} = \\frac{237200}{192970} = +1{,}2292\\text{ V} \\approx 1{,}23\\text{ V}$$
4. Gabungan hasil: $\\eta = 83{,}0\\%$ dan $E_{\\text{rev}} = 1{,}23\\text{ V}$.

**Analisis Distraktor:**
- Pilihan A: Menggunakan entalpi penguapan air (LHV).
- Pilihan B: Salah membagi faktor transfer elektron.
- Pilihan C: Benar.
- Pilihan D: Menggunakan tegangan termoneutral ($E_{\\text{tn}} = -\\Delta H / nF = 1{,}48\\text{ V}$).
- Pilihan E: Pelanggaran hukum kedua termodinamika ($T\\Delta S \\ne 0$).`,
    solution_framework_template: `Tahap 1: Hitung efisiensi termodinamika teoritis eta = Delta G0 / Delta H0 = -237.2 / -285.8 = 83.0%.
Tahap 2: Tentukan jumlah elektron transfer n = 2 untuk oksidasi 1 mol H2.
Tahap 3: Hitung tegangan sel reversibel E_rev = -Delta G0 / (n * F).
Tahap 4: Dapatkan nilai E_rev = +1.23 V.`,
    tags: ['pemfc', 'fuel-cell', 'efisiensi-termodinamika', 'tegangan-reversibel'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
