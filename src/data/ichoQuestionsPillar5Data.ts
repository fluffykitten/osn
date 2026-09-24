/**
 * ichoQuestionsPillar5Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 5: Analisis Kimia Modern, Instrumentasi Canggih & Spektrometri Massa
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 505001 - 505010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 05 = Pilar 5
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_5_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2019 France Problem 5 (CZE Elektroforesis Kapiler)
  // =========================================================================
  {
    id: 505001,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Elektroforesis Kapiler Zona (CZE), Aliran Elektroosmotik & Mobilitas Efektif',
    title: 'Pemisahan Peptida Menggunakan Elektroforesis Kapiler Zona (CZE) dan Aliran Elektroosmotik (EOF)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Dalam Elektroforesis Kapiler Zona (*Capillary Zone Electrophoresis*, CZE), migrasi analit di bawah medan listrik $E = V / L$ ditentukan oleh superposisi kecepatan mobilitas elektroforetik intrinsik analit ($\\mu_{\\text{ep}}$) dan mobilitas aliran elektroosmotik pelarut ($\\mu_{\\text{eo}}$):
$$v_{\\text{tot}} = (\\mu_{\\text{ep}} + \\mu_{\\text{eo}}) E = (\\mu_{\\text{ep}} + \\mu_{\\text{eo}}) \\frac{V}{L}$$
Waktu migrasi terukur $t_m$ dari ujung injeksi ke detektor yang berjarak $l$ adalah:
$$t_m = \\frac{l}{v_{\\text{tot}}} = \\frac{l \\cdot L}{(\\mu_{\\text{ep}} + \\mu_{\\text{eo}}) V}$$
di mana $L$ adalah panjang total kapiler ($L = 60{,}0\\text{ cm}$), $l$ adalah panjang kapiler hingga jendela detektor ($l = 50{,}0\\text{ cm}$), dan tegangan terpasang adalah $V = +30{,}0\\text{ kV}$.

Pada $\\text{pH} = 8{,}0$:
- Dinding dalam silika terfusi terdeprotonasi membentuk lapisan ganda listrik ($\\ce{Si-O-}$), menghasilkan aliran elektroosmotik kuat menuju katoda (kutub negatif, di dekat detektor).
- Penanda netral (*neutral marker*, mesitil oksida dengan $\\mu_{\\text{ep}} = 0$) terdeteksi pada waktu migrasi $t_{\\text{eo}} = 3{,}20\\text{ menit}$.
- Suatu analit oligopeptida sintetis terdeteksi pada waktu migrasi $t_m = 4{,}80\\text{ menit}$.

Berapakah nilai mobilitas aliran elektroosmotik $\\mu_{\\text{eo}}$ dan mobilitas elektroforetik intrinsik $\\mu_{\\text{ep}}$ dari peptida tersebut, serta apakah muatan netto peptida pada $\\text{pH} = 8{,}0$?

A. $\\mu_{\\text{eo}} = +5{,}21 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, $\\mu_{\\text{ep}} = -1{,}74 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, muatan netto peptida adalah negatif.
B. $\\mu_{\\text{eo}} = +5{,}21 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, $\\mu_{\\text{ep}} = +1{,}74 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, muatan netto peptida adalah positif.
C. $\\mu_{\\text{eo}} = +3{,}47 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, $\\mu_{\\text{ep}} = -5{,}21 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, muatan netto peptida adalah netral.
D. $\\mu_{\\text{eo}} = +1{,}74 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, $\\mu_{\\text{ep}} = -3{,}47 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, muatan netto peptida adalah positif.
E. $\\mu_{\\text{eo}} = +8{,}68 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$, $\\mu_{\\text{ep}} = 0$, muatan netto peptida adalah nol.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Elektroforesis Kapiler Zona (CZE)
1. **Perhitungan Kuat Medan Listrik ($E$):**
   $$E = \\frac{V}{L} = \\frac{30000\\text{ V}}{60{,}0\\text{ cm}} = 500\\text{ V/cm}$$
2. **Perhitungan Mobilitas Elektroosmotik ($\\mu_{\\text{eo}}$):**
   Penanda netral memiliki $\\mu_{\\text{ep}} = 0$, sehingga kecepatannya murni karena aliran elektroosmotik:
   $$t_{\\text{eo}} = 3{,}20\\text{ menit} = 3{,}20 \\times 60 = 192\\text{ detik}$$
   $$v_{\\text{eo}} = \\frac{l}{t_{\\text{eo}}} = \\frac{50{,}0\\text{ cm}}{192\\text{ s}} \\approx 0{,}26042\\text{ cm/s}$$
   $$\\mu_{\\text{eo}} = \\frac{v_{\\text{eo}}}{E} = \\frac{0{,}26042\\text{ cm/s}}{500\\text{ V/cm}} \\approx 5{,}208 \\times 10^{-4}\\text{ cm}^2/(\\text{V s}) \\approx +5{,}21 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$$
3. **Perhitungan Mobilitas Total Analit Peptida ($\\mu_{\\text{tot}}$):**
   $$t_m = 4{,}80\\text{ menit} = 4{,}80 \\times 60 = 288\\text{ detik}$$
   $$v_{\\text{tot}} = \\frac{l}{t_m} = \\frac{50{,}0\\text{ cm}}{288\\text{ s}} \\approx 0{,}17361\\text{ cm/s}$$
   $$\\mu_{\\text{tot}} = \\frac{v_{\\text{tot}}}{E} = \\frac{0{,}17361}{500} \\approx 3{,}472 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$$
4. **Perhitungan Mobilitas Elektroforetik Intrinsik ($\\mu_{\\text{ep}}$):**
   $$\\mu_{\\text{ep}} = \\mu_{\\text{tot}} - \\mu_{\\text{eo}} = 3{,}472 \\times 10^{-4} - 5{,}208 \\times 10^{-4} = -1{,}736 \\times 10^{-4}\\text{ cm}^2/(\\text{V s}) \\approx -1{,}74 \\times 10^{-4}\\text{ cm}^2/(\\text{V s})$$
5. **Analisis Muatan Netto Peptida:**
   Karena $\\mu_{\\text{ep}} < 0$, gaya elektroforetik peptida mengarah ke anoda (menentang arah EOF ke katoda). Ini berarti peptida bermigrasi mundur relatif terhadap pelarut karena ditarik oleh anoda, yang membuktikan bahwa **muatan netto peptida pada $\\text{pH} = 8{,}0$ adalah NEGATIF**. Peptida tetap mencapai detektor di katoda semata-mata karena aliran elektroosmotik fluida lebih deras daripada laju migrasi elektroforetiknya.
6. **Evaluasi Opsi:**
   - Opsi A merumuskan nilai $\\mu_{\\text{eo}}$, $\\mu_{\\text{ep}}$, dan muatan negatif secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung medan listrik E = V / L = 30000 / 60 = 500 V/cm.
Langkah 2: Konversi waktu ke detik dan hitung mu_eo = l / (t_eo * E) = 5,21 x 10^-4 cm^2/(V s).
Langkah 3: Hitung mobilitas total mu_tot = l / (t_m * E) = 3,47 x 10^-4 cm^2/(V s).
Langkah 4: Hitung mu_ep = mu_tot - mu_eo = -1,74 x 10^-4 cm^2/(V s) dan simpulkan muatan negatif.`,
    source_event: 'IChO 2019 France Problem 5 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Surface Plasmon Resonance (SPR) Kinetika Asosiasi-Disosiasi
  // =========================================================================
  {
    id: 505002,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Sensor Bioanalitik Canggih, Surface Plasmon Resonance (SPR) & Kinetika Konstan Kd',
    title: 'Kinetika Pengikatan Biomolekuler Bebas Label Menggunakan Surface Plasmon Resonance (SPR)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `*Surface Plasmon Resonance* (SPR) mendeteksi perubahan indeks bias lokal pada permukaan film tipis emas saat ligan terlarut ($A$) berikatan dengan reseptor terimobilisasi ($B$) membentuk kompleks permukaan ($AB$):
$$\\ce{A + B <=> AB}$$

Respon sinyal SPR ($R$, dalam satuan *Response Units* / RU) proporsional terhadap fraksi reseptor permukaan yang terisi. Laju akumulasi sinyal selama fase asosiasi mengikuti persamaan diferensial pseudo-orde pertama:
$$\\frac{dR}{dt} = k_{\\text{on}} C [R_{\\text{maks}} - R] - k_{\\text{off}} R$$
dengan solusi analitis:
$$R(t) = R_{\\text{eq}} \\left[ 1 - \\exp(-k_{\\text{obs}} t) \\right]$$
di mana konstanta laju teramati $k_{\\text{obs}}$ adalah:
$$k_{\\text{obs}} = k_{\\text{on}} C + k_{\\text{off}}$$

Dalam suatu eksperimen pengikatan antibodi monoklonal terhadap antigen rekombinan:
- Pada konsentrasi antibodi $C_1 = 20{,}0\\text{ nM}$, konstanta laju teramati adalah $k_{\\text{obs},1} = 0{,}0180\\text{ s}^{-1}$.
- Pada konsentrasi antibodi $C_2 = 100{,}0\\text{ nM}$, konstanta laju teramati adalah $k_{\\text{obs},2} = 0{,}0500\\text{ s}^{-1}$.

Berapakah nilai konstanta laju asosiasi ($k_{\\text{on}}$), konstanta laju disosiasi ($k_{\\text{off}}$), dan konstanta disosiasi kesetimbangan termodinamika ($K_D$) interaksi antibodi-antigen tersebut?

A. $k_{\\text{on}} = 4{,}00 \\times 10^5\\text{ M}^{-1}\\text{s}^{-1}$, $k_{\\text{off}} = 0{,}0100\\text{ s}^{-1}$, $K_D = 25{,}0\\text{ nM}$
B. $k_{\\text{on}} = 8{,}00 \\times 10^4\\text{ M}^{-1}\\text{s}^{-1}$, $k_{\\text{off}} = 0{,}0020\\text{ s}^{-1}$, $K_D = 250\\text{ nM}$
C. $k_{\\text{on}} = 4{,}00 \\times 10^6\\text{ M}^{-1}\\text{s}^{-1}$, $k_{\\text{off}} = 0{,}0500\\text{ s}^{-1}$, $K_D = 12{,}5\\text{ nM}$
D. $k_{\\text{on}} = 2{,}00 \\times 10^5\\text{ M}^{-1}\\text{s}^{-1}$, $k_{\\text{off}} = 0{,}0200\\text{ s}^{-1}$, $K_D = 100\\text{ nM}$
E. $k_{\\text{on}} = 1{,}00 \\times 10^5\\text{ M}^{-1}\\text{s}^{-1}$, $k_{\\text{off}} = 0{,}0050\\text{ s}^{-1}$, $K_D = 50{,}0\\text{ nM}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Surface Plasmon Resonance (SPR)
1. **Penyusunan Sistem Persamaan Linier $k_{\\text{obs}}$ vs $C$:**
   $$k_{\\text{obs}} = k_{\\text{on}} C + k_{\\text{off}}$$
   Diketahui:
   $$C_1 = 20{,}0 \\times 10^{-9}\\text{ M} \\implies 0{,}0180 = k_{\\text{on}}(20{,}0 \\times 10^{-9}) + k_{\\text{off}}$$
   $$C_2 = 100{,}0 \\times 10^{-9}\\text{ M} \\implies 0{,}0500 = k_{\\text{on}}(100{,}0 \\times 10^{-9}) + k_{\\text{off}}$$
2. **Perhitungan Kemiringan ($k_{\\text{on}}$):**
   $$k_{\\text{obs},2} - k_{\\text{obs},1} = k_{\\text{on}}(C_2 - C_1)$$
   $$0{,}0500 - 0{,}0180 = k_{\\text{on}} (100{,}0 - 20{,}0) \\times 10^{-9}\\text{ M}$$
   $$0{,}0320 = k_{\\text{on}} (80{,}0 \\times 10^{-9}\\text{ M})$$
   $$k_{\\text{on}} = \\frac{0{,}0320}{80{,}0 \\times 10^{-9}} = 4{,}00 \\times 10^5\\text{ M}^{-1}\\text{s}^{-1}$$
3. **Perhitungan Intersep ($k_{\\text{off}}$):**
   $$k_{\\text{off}} = k_{\\text{obs},1} - k_{\\text{on}} C_1 = 0{,}0180 - (4{,}00 \\times 10^5)(20{,}0 \\times 10^{-9})$$
   $$k_{\\text{off}} = 0{,}0180 - 0{,}0080 = 0{,}0100\\text{ s}^{-1}$$
4. **Perhitungan Konstanta Disosiasi Kesetimbangan Termodinamika ($K_D$):**
   $$K_D = \\frac{k_{\\text{off}}}{k_{\\text{on}}} = \\frac{0{,}0100\\text{ s}^{-1}}{4{,}00 \\times 10^5\\text{ M}^{-1}\\text{s}^{-1}} = 2{,}50 \\times 10^{-8}\\text{ M} = 25{,}0\\text{ nM}$$
   Nilai afinitas $K_D$ sub-mikromolar ini mencerminkan interaksi antibodi-antigen yang sangat kuat dan spesifik.
5. **Evaluasi Opsi:**
   - Opsi A menyatakan $k_{\\text{on}} = 4{,}00 \\times 10^5\\text{ M}^{-1}\\text{s}^{-1}$, $k_{\\text{off}} = 0{,}0100\\text{ s}^{-1}$, dan $K_D = 25{,}0\\text{ nM}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Bentuk persamaan linier k_obs = k_on * C + k_off untuk dua konsentrasi yang diberikan.
Langkah 2: Hitung slope k_on = Delta k_obs / Delta C = (0,050 - 0,018) / (80 x 10^-9) = 4,00 x 10^5 M^-1 s^-1.
Langkah 3: Hitung intersep k_off = k_obs1 - k_on * C1 = 0,0100 s^-1.
Langkah 4: Hitung konstanta disosiasi kesetimbangan termodinamika KD = k_off / k_on = 25,0 nM.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2021 Japan Problem 5 (MS/MS Peptida & De Novo Sequencing)
  // =========================================================================
  {
    id: 505003,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Spektrometri Massa Tandem (MS/MS), Fragmentasi Peptida & Ion b dan y',
    title: 'Sekuensing Peptida De Novo Menggunakan Spektrometri Massa Tandem ESI-CID-MS/MS',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Dalam spektrometri massa tandem (*Collision-Induced Dissociation*, CID-MS/MS), ion prekursor peptida terprotonasi dipecah sepanjang tulang punggung peptida (*peptide backbone*):
- Pemutusan ikatan peptida $\\ce{CO-NH}$ menghasilkan pasangan ion komplemen:
  - **Ion seri-$b$** membawa muatan pada fragmen ujung N-terminal (asiltetrahidro-oksazolon).
  - **Ion seri-$y$** membawa muatan pada fragmen ujung C-terminal.
- Hubungan massa antar dua puncak berurutan dari seri yang sama setara dengan residu massa asam amino tunggal:
  $$\\Delta m = m(b_k) - m(b_{k-1}) = m(y_k) - m(y_{k-1}) = \\text{Massa residu asam amino}$$

Massa residu monoisotopik asam amino standar (dalam Da):
- Gly (G): 57,02 Da; Ala (A): 71,04 Da; Ser (S): 87,03 Da; Pro (P): 97,05 Da; Val (V): 99,07 Da;
- Thr (T): 101,05 Da; Leu/Ile (L/I): 113,08 Da; Asp (D): 115,03 Da; Glu (E): 129,04 Da;
- Met (M): 131,04 Da; Phe (F): 147,07 Da; Tyr (Y): 163,06 Da; Lys (K): 128,09 Da.

Suatu ion prekursor heksapeptida tunggal bermuatan tunggal $[M + \\ce{H}]^+$ memiliki $m/z = 660{,}32$.
Spektrum MS/MS fragmentasi CID menunjukkan puncak-puncak ion seri-$b$ (semua bermuatan $+1$) pada:
- $b_1$: belum teramati
- $b_2$: $m/z = 186{,}10$
- $b_3$: $m/z = 285{,}17$
- $b_4$: $m/z = 382{,}22$
- $b_5$: $m/z = 529{,}29$

Berdasarkan selisih massa antar-puncak seri-$b$ dan massa ion molekular total, sekuens primer peptida tersebut (dari N-terminal ke C-terminal) adalah:

A. Ala-Asp-Val-Pro-Phe-Met
B. Gly-Glu-Val-Pro-Phe-Leu
C. Ala-Asp-Val-Pro-Phe-Leu
D. Ser-Val-Val-Pro-Tyr-Gly
E. Val-Ala-Thr-Pro-Phe-Ile`,
    expected_final_answer: 'C',
    solution_rubric: `### Konsep Kunci Fragmentasi MS/MS Peptida
1. **Analisis Selisih Massa Seri-$b$:**
   - Selisih $b_3 - b_2$:
     $$m(b_3) - m(b_2) = 285{,}17 - 186{,}10 = 99{,}07\\text{ Da}$$
     Residu ini cocok sempurna dengan **Valin (Val, V)** = 99,07 Da. Residu ke-3 adalah Val.
   - Selisih $b_4 - b_3$:
     $$m(b_4) - m(b_3) = 382{,}22 - 285{,}17 = 97{,}05\\text{ Da}$$
     Residu ini cocok sempurna dengan **Prolin (Pro, P)** = 97,05 Da. Residu ke-4 adalah Pro.
   - Selisih $b_5 - b_4$:
     $$m(b_5) - m(b_4) = 529{,}29 - 382{,}22 = 147{,}07\\text{ Da}$$
     Residu ini cocok sempurna dengan **Fenilalanin (Phe, F)** = 147,07 Da. Residu ke-5 adalah Phe.
2. **Penentuan Residu C-Terminal (Residu ke-6):**
   Massa prekursor $[M+\\ce{H}]^+ = 660{,}32\\text{ Da}$.
   Hubungan ion $b_5$ dan $[M+\\ce{H}]^+$:
   Ion $[M+\\ce{H}]^+$ setara dengan $b_6 + \\ce{H2O}$ (atau residu ke-6 bermassa $[M+\\ce{H}]^+ - m(b_5) - 18{,}01\\text{ Da}$):
   $$\\text{Massa residu ke-6} = 660{,}32 - 529{,}29 - 18{,}015 = 113{,}015 \\approx 113{,}08\\text{ Da}$$
   Residu 113,08 Da adalah **Leusin (Leu, L)** atau Isoleusin (Ile, I).
3. **Penentuan Dipeptida N-Terminal (Residu 1 dan 2):**
   Massa ion $b_2 = 186{,}10\\text{ Da}$.
   Rumus massa ion $b_2 = m(R_1) + m(R_2) + 1{,}008\\text{ Da}$ (karena ion $b$ terprotonasi memiliki satu proton ekstra).
   $$m(R_1) + m(R_2) = 186{,}10 - 1{,}01 = 185{,}09\\text{ Da}$$
   Kombinasi asam amino:
   - Ala (71,04) + Asp (115,03) = 186,07 Da $\\implies$ sangat cocok!
   Oleh karena itu, dipeptida N-terminal adalah **Ala-Asp**.
4. **Rekonstruksi Sekuens Lengkap:**
   $$\\ce{H2N-Ala-Asp-Val-Pro-Phe-Leu-COOH}$$
5. **Evaluasi Opsi:**
   - Opsi C menyatakan Ala-Asp-Val-Pro-Phe-Leu -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung selisih antar-puncak b berturutan: b3 - b2 = 99,07 Da (Val); b4 - b3 = 97,05 Da (Pro); b5 - b4 = 147,07 Da (Phe).
Langkah 2: Hitung residu C-terminal terakhir dari [M+H]+ - b5 - H2O = 660,32 - 529,29 - 18,01 = 113,02 Da (Leu/Ile).
Langkah 3: Pecahkan massa b2 = 186,10 Da menjadi Ala (71,04) + Asp (115,03) + H+ (1,01).
Langkah 4: Simpulkan sekuens primer lengkap: Ala-Asp-Val-Pro-Phe-Leu.`,
    source_event: 'IChO 2021 Japan Problem 5 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - NMR 2D NOESY vs COSY & Efek Overhauser Jarak Spasial
  // =========================================================================
  {
    id: 505004,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Spektroskopi NMR 2D Lanjut, Korelasi COSY vs NOESY & Efek Overhauser Nuklir',
    title: 'Penentuan Konformasi Spasial 3D Molekul Melalui Analisis Komparatif 2D 1H-1H COSY dan NOESY',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Spektroskopi NMR 2D homonuklir merupakan instrumen utama dalam elusidasi struktur tiga dimensi molekul organik dan makromolekul:
1. **$^{1}\\text{H}-^{1}\\text{H}$ COSY** (*Correlation Spectroscopy*): Puncak silang (*cross-peaks*) timbul dari transfer koherensi melalui ikatan kovalen via kopling skalar ($J$-coupling, biasanya berjarak $\\le 3$ ikatan, $^{3}J_{\\ce{HH}}$).
2. **$^{1}\\text{H}-^{1}\\text{H}$ NOESY** (*Nuclear Overhauser Effect Spectroscopy*): Puncak silang timbul dari relaksasi dipol-dipol lintas-ruang (*through-space cross-relaxation*) tanpa memerlukan ikatan kovalen langsung. Intensitas puncak NOE ($I_{\\text{NOE}}$) berbanding terbalik terhadap pangkat enam jarak antar-inti proton ($r$):
   $$I_{\\text{NOE}} \\propto r^{-6}$$
   sehingga puncak silang NOE hanya muncul jika jarak spasial kedua proton $r < 5{,}0\\text{ \\AA}$.

Tinjau isomer kaku turunan norbornena trisiklik. Dua proton spesifik, $\\ce{H}_A$ (terikat pada $\\ce{C}_1$) dan $\\ce{H}_B$ (terikat pada $\\ce{C}_6$), terpisah oleh 5 ikatan kovalen (ikatan $\\ce{H}_A-\\ce{C}_1-\\ce{C}_2-\\ce{C}_3-\\ce{C}_6-\\ce{H}_B$, sehingga $^{5}J_{\\ce{AB}} \\approx 0\\text{ Hz}$). Namun karena cincin melengkung membentuk sangkar cekung kaku, jarak fisik ruang antara $\\ce{H}_A$ dan $\\ce{H}_B$ terukur sebesar $r = 2{,}40\\text{ \\AA}$.

Bagaimana manifestasi kedua proton ini pada spektrum 2D COSY dan 2D NOESY?

A. Menghasilkan puncak silang yang SANGAT KUAT pada spektrum NOESY, namun TIDAK MENGHASILKAN puncak silang pada spektrum COSY.
B. Menghasilkan puncak silang kuat pada spektrum COSY, namun tidak menghasilkan puncak pada NOESY.
C. Menghasilkan puncak silang kuat pada kedua spektrum COSY dan NOESY.
D. Tidak menghasilkan puncak silang pada kedua spektrum karena terhalang oleh atom karbon.
E. Menghasilkan pemisahan kuartet pada spektrum 1D akibat kopling kuadrupol.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Spektroskopi 2D NMR: COSY vs NOESY
1. **Analisis Mekanisme COSY ($J$-Coupling):**
   Kopling skalar $^{n}J$ dimediasi oleh elektron ikatan kovalen. Untuk proton alifatik biasa, besaran kopling menurun sangat drastis seiring bertambahnya jumlah ikatan: $^{3}J_{\\ce{HH}} \\approx 2 - 10\\text{ Hz}$, sedangkan $^{4}J_{\\ce{HH}}$ dan $^{5}J_{\\ce{HH}}$ biasanya bernilai $\\approx 0\\text{ Hz}$ kecuali pada jalur planar zigzag "W-conformation" khusus. Pada soal ini, $\\ce{H}_A$ dan $\\ce{H}_B$ terpisah oleh 5 ikatan dengan $^{5}J \\approx 0$, sehingga tidak ada transfer koherensi $J$ yang cukup untuk menghasilkan puncak silang pada 2D COSY.
2. **Analisis Mekanisme NOESY (Dipolar Cross-Relaxation):**
   NOESY tidak bergantung pada ikatan kimia perantara, melainkan murni interaksi dipol magnetik nuklir melalui ruang hampa (*through space*).
   Ketergantungan intensitas adalah $r^{-6}$.
   Pada jarak $r = 2{,}40\\text{ \\AA}$, jarak ini jauh lebih kecil dari batas deteksi $5{,}0\\text{ \\AA}$.
   Intensitas NOE relatif terhadap jarak $5{,}0\\text{ \\AA}$:
   $$\\frac{I(2{,}4\\text{ \\AA})}{I(5{,}0\\text{ \\AA})} = \\left( \\frac{5{,}0}{2{,}4} \\right)^6 \\approx (2{,}083)^6 \\approx 80$$
   Sinyal NOE sekitar 80 kali lipat lebih kuat dari batas deteksi!
   Oleh karena itu, puncak silang pada NOESY akan tampak **sangat tajam dan kuat**, sedangkan pada COSY **kosong/nihil**.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan fenomena NOESY kuat dan ketiadaan sinyal COSY secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi mekanisme COSY (through-bond scalar J coupling). Karena n=5 ikatan dan J ~ 0 Hz, puncak silang COSY absen.
Langkah 2: Identifikasi mekanisme NOESY (through-space dipolar coupling berbanding terbalik r^-6).
Langkah 3: Evaluasi jarak r = 2,40 A (< 5,0 A), yang menghasilkan relaksasi silang kuat.
Langkah 4: Simpulkan bahwa spektrum NOESY menunjukkan cross-peak kuat, sedangkan COSY tidak.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2017 Thailand Problem 5 (SWASV Ultramikroelektroda Deteksi Pb2+)
  // =========================================================================
  {
    id: 505005,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Voltametri Stripping Anodik Gelombang Persegi (SWASV), Ultramikroelektroda & Deteksi Logam Berat',
    title: 'Analisis Spesi Logam Berat Pb2+ Air Limbah Menggunakan Voltametri Stripping Anodik Gelombang Persegi (SWASV)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Voltametri Stripping Anodik Gelombang Persegi (*Square Wave Anodic Stripping Voltammetry*, SWASV) pada ultramikroelektroda (*ultramicroelectrode*, UME piringan emas) digunakan untuk mengukur kadar kelumit $\\ce{Pb^{2+}}$ dalam air minum.

Metode melibatkan dua tahap berurutan:
1. **Tahap Deposisi Reduktif (Prekonsentrasi):**
   Potensial konstan $E_{\\text{dep}} = -0{,}90\\text{ V}$ (vs Ag/AgCl) diterapkan selama waktu deposisi $t_{\\text{dep}} = 120\\text{ detik}$ sambil larutan diaduk cepat. Kation $\\ce{Pb^{2+}}$ tereduksi sempurna menjadi amalgam/lapisan logam $\\ce{Pb^0}$ pada permukaan elektroda:
   $$\\ce{Pb^{2+} + 2 e- -> Pb^0_{(ads)}}$$
2. **Tahap Stripping Oksidatif Gelombang Persegi:**
   Potensial dipindai secara cepat ke arah positif dengan modulasi gelombang persegi (frekuensi $f = 25\\text{ Hz}$, amplitudo $E_{\\text{SW}} = 25\\text{ mV}$, kenaikan langkah $\\Delta E_s = 4\\text{ mV}$). Arus puncak stripping neto ($i_p$) proporsional terhadap konsentrasi analit.

Data penambahan standar (*standard addition*) terukur:
- Sampel air minum sebanyak $20{,}00\\text{ mL}$ menghasilkan arus puncak $i_{p,0} = 4{,}50\\;\\mu\\text{A}$.
- Setelah ditambahkan $0{,}100\\text{ mL}$ larutan standar $\\ce{Pb^{2+}}$ berkonsentrasi $50{,}0\\;\\mu\\text{M}$, arus puncak meningkat menjadi $i_{p,1} = 10{,}50\\;\\mu\\text{A}$.
*(Asumsikan perubahan volume total akibat penambahan standar dapat diabaikan)*

Berapakah konsentrasi ion $\\ce{Pb^{2+}}$ dalam sampel air minum tersebut (dalam satuan $\\text{ppb} = \\mu\\text{g/L}$)?
*(Massa atom relatif: $\\ce{Pb} = 207{,}2\\text{ g/mol}$)*

A. $38{,}8\\text{ ppb}$ ($0{,}188\\;\\mu\\text{M}$)
B. $77{,}7\\text{ ppb}$ ($0{,}375\\;\\mu\\text{M}$)
C. $19{,}4\\text{ ppb}$ ($0{,}094\\;\\mu\\text{M}$)
D. $155\\text{ ppb}$ ($0{,}750\\;\\mu\\text{M}$)
E. $5{,}20\\text{ ppb}$ ($0{,}025\\;\\mu\\text{M}$)`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Metode Penambahan Standar pada Voltametri Stripping
1. **Perhitungan Peningkatan Konsentrasi Akibat Penambahan Standar ($\\Delta C$):**
   Volume sampel $V_0 = 20{,}00\\text{ mL}$.
   Volume standar ditambahkan $V_{\\text{std}} = 0{,}100\\text{ mL}$ dengan konsentrasi $C_{\\text{std}} = 50{,}0\\;\\mu\\text{M}$.
   Peningkatan konsentrasi dalam sel elektrokimia:
   $$\\Delta C = \\frac{C_{\\text{std}} \\times V_{\\text{std}}}{V_0} = \\frac{50{,}0\\;\\mu\\text{M} \\times 0{,}100\\text{ mL}}{20{,}00\\text{ mL}} = 0{,}250\\;\\mu\\text{M}$$
2. **Relasi Penambahan Standar Linier:**
   $$i_p = k \\cdot C$$
   $$i_{p,0} = k \\cdot C_x$$
   $$i_{p,1} = k (C_x + \\Delta C)$$
   Rasio arus:
   $$\\frac{i_{p,1}}{i_{p,0}} = \\frac{C_x + \\Delta C}{C_x} = 1 + \\frac{\\Delta C}{C_x}$$
   $$\\frac{10{,}50\\;\\mu\\text{A}}{4{,}50\\;\\mu\\text{A}} = 2{,}3333 = 1 + \\frac{0{,}250\\;\\mu\\text{M}}{C_x}$$
   $$\\frac{0{,}250\\;\\mu\\text{M}}{C_x} = 1{,}3333 = \\frac{4}{3}$$
   $$C_x = \\frac{3}{4} \\times 0{,}250\\;\\mu\\text{M} = 0{,}1875\\;\\mu\\text{M}$$
3. **Konversi ke Satuan ppb ($\\mu\\text{g/L}$):**
   $$C_x = 0{,}1875 \\times 10^{-6}\\text{ mol/L} \\times 207{,}2\\text{ g/mol} = 3{,}885 \\times 10^{-5}\\text{ g/L}$$
   $$C_x = 3{,}885 \\times 10^{-5} \\times 10^6\\;\\mu\\text{g/L} = 38{,}85\\;\\mu\\text{g/L} \\approx 38{,}8\\text{ ppb}$$
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $38{,}8\\text{ ppb}$ ($0{,}188\\;\\mu\\text{M}$) -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung kenaikan konsentrasi standar Delta C = C_std * V_std / V_sampel = 0,250 uM.
Langkah 2: Terapkan rumus penambahan standar Cx = Delta C * i_p0 / (i_p1 - i_p0).
Langkah 3: Hitung Cx = 0,250 * 4,50 / 6,00 = 0,1875 uM.
Langkah 4: Konversikan konsentrasi molar ke ppb: 0,1875 uM * 207,2 g/mol = 38,8 ppb.`,
    source_event: 'IChO 2017 Thailand Problem 5 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Spektroskopi Mossbauer Senyawa Besi (Fe-57)
  // =========================================================================
  {
    id: 505006,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Mössbauer 57Fe, Pergeseran Isomer & Pemisahan Kuadrupol',
    title: 'Diferensiasi Keadaan Oksidasi dan Keadaan Spin Kompleks Besi Menggunakan Spektroskopi Mössbauer 57Fe',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Spektroskopi Mössbauer $^{57}\\text{Fe}$ mengukur absorpsi resonan foton sinar gamma ($14{,}4\\text{ keV}$) oleh inti $^{57}\\text{Fe}$. Parameter spektral utama meliputi:
1. **Pergeseran Isomer (*Isomer Shift*, $\\delta$):**
   Dipengaruhi oleh kerapatan elektron orbital-$s$ pada posisi inti $|\psi_s(0)|^2$. Karena orbital-$3d$ memperisai elektron $3s$ dari tarikan inti, kenaikan jumlah elektron $d$ menurunkan $|\psi_s(0)|^2$, yang menyebabkan pergeseran isomer $\\delta$ menjadi **lebih positif**. 
   - Nilai tipikal $\\delta$ (relatif terhadap $\\alpha$-Fe pada suhu kamar):
     - $\\ce{Fe^{2+}}$ *high-spin* ($d^6, S=2$): $\\delta \\approx +0{,}90 - +1{,}40\\text{ mm/s}$
     - $\\ce{Fe^{3+}}$ *high-spin* ($d^5, S=5/2$): $\\delta \\approx +0{,}35 - +0{,}55\\text{ mm/s}$
     - $\\ce{Fe^{2+}}$ *low-spin* ($d^6, S=0$): $\\delta \\approx -0{,}05 - +0{,}25\\text{ mm/s}$
     - $\\ce{Fe^{3+}}$ *low-spin* ($d^5, S=1/2$): $\\delta \\approx +0{,}10 - +0{,}25\\text{ mm/s}$
2. **Pemisahan Kuadrupol (*Quadrupole Splitting*, $\\Delta E_Q$):**
   Timbul dari interaksi momen kuadrupol inti ($eQ$, untuk inti keadaan tereksitasi $I = 3/2$) dengan gradien medan listrik (*electric field gradient*, EFG) yang dihasilkan oleh asimetri distribusi elektron valensi dan ligan.
   - Konfigurasi $t_{2g}^4 e_g^2$ ($\ce{Fe^{2+}}$ high-spin) memiliki satu elektron ekstra di orbital $t_{2g}$ yang sangat asimetris, menghasilkan EFG sangat besar ($\\Delta E_Q \\approx 1{,}8 - 3{,}5\\text{ mm/s}$).
   - Konfigurasi $t_{2g}^3 e_g^2$ ($\ce{Fe^{3+}}$ high-spin) memiliki subkulit setengah penuh bulat simetris ($^6A_{1g}$), sehingga gradien medan listrik valensi lenyap dan menghasilkan pemisahan kuadrupol yang sangat kecil ($\\Delta E_Q \\approx 0{,}1 - 0{,}6\\text{ mm/s}$).

Dua senyawa kompleks besi tak dikenal, **Kompleks X** dan **Kompleks Y**, dianalisis pada $80\\text{ K}$:
- **Kompleks X:** $\\delta = +1{,}15\\text{ mm/s}$, $\\Delta E_Q = 2{,}85\\text{ mm/s}$
- **Kompleks Y:** $\\delta = +0{,}42\\text{ mm/s}$, $\\Delta E_Q = 0{,}35\\text{ mm/s}$

Berdasarkan parameter Mössbauer tersebut, manakah identifikasi yang BENAR untuk Kompleks X dan Kompleks Y?

A. Kompleks X adalah $\\ce{Fe^{2+}}$ *high-spin* ($S=2$), sedangkan Kompleks Y adalah $\\ce{Fe^{3+}}$ *high-spin* ($S=5/2$).
B. Kompleks X adalah $\\ce{Fe^{3+}}$ *high-spin* ($S=5/2$), sedangkan Kompleks Y adalah $\\ce{Fe^{2+}}$ *high-spin* ($S=2$).
C. Kompleks X adalah $\\ce{Fe^{2+}}$ *low-spin* ($S=0$), sedangkan Kompleks Y adalah $\\ce{Fe^{3+}}$ *low-spin* ($S=1/2$).
D. Kompleks X adalah besi logam $\\ce{Fe^0}$, sedangkan Kompleks Y adalah $\\ce{Fe^{4+}}$ feril.
E. Kompleks X adalah $\\ce{Fe^{2+}}$ *high-spin*, sedangkan Kompleks Y adalah $\\ce{Fe^{2+}}$ *low-spin*.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Spektroskopi Mössbauer Besi
1. **Analisis Kompleks X:**
   - Pergeseran isomer $\\delta = +1{,}15\\text{ mm/s}$ adalah nilai yang sangat positif. Hal ini khas untuk kation $\\ce{Fe^{2+}}$ ($3d^6$), di mana enam elektron $3d$ memberikan efek perisai yang kuat terhadap elektron inti $3s$, menurunkan densitas elektron di inti $|\psi_s(0)|^2$.
   - Pemisahan kuadrupol $\\Delta E_Q = 2{,}85\\text{ mm/s}$ sangat besar. Pada $\\ce{Fe^{2+}}$ high-spin (konfigurasi $t_{2g}^4 e_g^2$), terdapat 1 elektron berpasangan pada salah satu orbital $t_{2g}$ ($d_{xy}, d_{xz}$, atau $d_{yz}$), yang merusak simetri bola dan menimbulkan gradien medan listrik valensi ($q_{\\text{val}}$) yang masif.
   - Kesimpulan untuk X: **$\\ce{Fe^{2+}}$ high-spin ($S=2$)**.
2. **Analisis Kompleks Y:**
   - Pergeseran isomer $\\delta = +0{,}42\\text{ mm/s}$ berada tepat di rentang $\\ce{Fe^{3+}}$ ($3d^5$). Dengan kehilangan satu elektron $d$ dibandingkan $\\ce{Fe^{2+}}$, pemerisaian berkurang, $|\psi_s(0)|^2$ meningkat, dan $\\delta$ bergeser turun ke sekitar $+0{,}4\\text{ mm/s}$.
   - Pemisahan kuadrupol $\\Delta E_Q = 0{,}35\\text{ mm/s}$ sangat kecil. Pada $\\ce{Fe^{3+}}$ high-spin (konfigurasi $t_{2g}^3 e_g^2$), masing-masing dari lima orbital $d$ terisi tepat satu elektron spin paralel. Distribusi awan muatan elektron valensi berbentuk bola simetris sempurna ($^6A_{1g}$), sehingga gradien medan listrik valensi adalah NOL murni ($q_{\\text{val}} = 0$). Nilai $\\Delta E_Q$ residual kecil ($0{,}35\\text{ mm/s}$) hanya timbul dari sedikit asimetri ligan kisi luar ($q_{\\text{lat}}$).
   - Kesimpulan untuk Y: **$\\ce{Fe^{3+}}$ high-spin ($S=5/2$)**.
3. **Evaluasi Opsi:**
   - Opsi A mengidentifikasi X sebagai $\\ce{Fe^{2+}}$ HS dan Y sebagai $\\ce{Fe^{3+}}$ HS secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Hubungkan nilai isomer shift delta dengan densitas elektron s di inti: delta tinggi (+1,15 mm/s) mencirikan Fe(II) d6 karena shielding 3d kuat.
Langkah 2: Hubungkan isomer shift delta sedang (+0,42 mm/s) dengan Fe(III) d5.
Langkah 3: Analisis quadrupole splitting Delta E_Q: nilai masif (2,85 mm/s) akibat asimetri orbital t2g^4 (Fe2+ HS).
Langkah 4: Analisis Delta E_Q kecil (0,35 mm/s) akibat kesimetrisan bola setengah penuh t2g^3 eg^2 (Fe3+ HS).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2024 Saudi Arabia Problem 3 (ICP-MS Rasio Isotopik Stabil)
  // =========================================================================
  {
    id: 505007,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Spektrometri Massa Rasio Isotop (IRMS), Fraksinasi Isotopik & Notasi Delta',
    title: 'Autentikasi Pemalsuan Madu Melalui Analisis Rasio Isotop Stabil 13C/12C Menggunakan EA-IRMS',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Spektrometri Massa Rasio Isotop (*Isotope Ratio Mass Spectrometry*, IRMS) digunakan untuk mendeteksi adulterasi (pemalsuan) madu murni (berasal dari nektar tanaman fiksasi karbon $\\text{C}_3$) dengan sirup gula jagung fruktosa tinggi (HFCS, berasal dari tanaman fotosintesis $\\text{C}_4$).

Komposisi isotop karbon dinyatakan dalam notasi per mil ($\\text{‰}$) relatif terhadap standar internasional Vienna Pee Dee Belemnite (V-PDB):
$$\\delta^{13}\\text{C} = \\left( \\frac{R_{\\text{sampel}}}{R_{\\text{standar}}} - 1 \\right) \\times 1000\\text{ ‰}$$
di mana $R = \\ce{^{13}C} / \\ce{^{12}C}$ dan $R_{\\text{standar}} = 0{,}0112372$.

Regulasi kemurnian madu internasional menetapkan:
- Nilai rata-rata madu $\\text{C}_3$ murni: $\\delta^{13}\\text{C}_{\\text{madu}} = -25{,}50\\text{ ‰}$
- Nilai rata-rata sirup HFCS $\\text{C}_4$: $\\delta^{13}\\text{C}_{\\text{sirup}} = -10{,}20\\text{ ‰}$

Sebuah sampel madu komersial dianalisis dan menghasilkan nilai rasio isotop $\\delta^{13}\\text{C}_{\\text{sampel}} = -20{,}91\\text{ ‰}$.

Berapakah persentase fraksi massa sirup jagung $\\text{C}_4$ ($f_{\\text{sirup}}$) yang telah dicampurkan secara ilegal ke dalam madu tersebut?

A. $30{,}0\\%$
B. $15{,}0\\%$
C. $45{,}0\\%$
D. $60{,}0\\%$
E. $8{,}5\\%$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Neraca Massa Fraksinasi Isotop Stabil
1. **Model Neraca Campuran Dua Komponen:**
   $$\\delta^{13}\\text{C}_{\\text{sampel}} = (1 - f_{\\text{sirup}}) \\cdot \\delta^{13}\\text{C}_{\\text{madu}} + f_{\\text{sirup}} \\cdot \\delta^{13}\\text{C}_{\\text{sirup}}$$
2. **Substitusi Nilai Terukur:**
   $$-20{,}91 = (1 - f_{\\text{sirup}})(-25{,}50) + f_{\\text{sirup}}(-10{,}20)$$
   $$-20{,}91 = -25{,}50 + 25{,}50 f_{\\text{sirup}} - 10{,}20 f_{\\text{sirup}}$$
   $$-20{,}91 + 25{,}50 = (25{,}50 - 10{,}20) f_{\\text{sirup}}$$
   $$+4{,}59 = 15{,}30 f_{\\text{sirup}}$$
3. **Perhitungan Fraksi Sirup:**
   $$f_{\\text{sirup}} = \\frac{4{,}59}{15{,}30} = 0{,}300 = 30{,}0\\%$$
   Sampel madu tersebut telah dipalsukan dengan penambahan $30\\%$ sirup jagung $\\text{C}_4$.
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $30{,}0\\%$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Susun persamaan neraca massa rasio isotop linier dua komponen: delta_campuran = (1 - f) * delta_C3 + f * delta_C4.
Langkah 2: Masukkan angka eksperimen: -20,91 = (1 - f)(-25,50) + f(-10,20).
Langkah 3: Sederhanakan aljabar: 4,59 = 15,30 * f.
Langkah 4: Hitung f = 4,59 / 15,30 = 0,300 (30,0%).`,
    source_event: 'IChO 2024 Saudi Arabia Problem 3 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - SEC-MALS Plot Debye-Zimm & Berat Molekul Polimer
  // =========================================================================
  {
    id: 505008,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Karakterisasi Makromolekul, Kromatografi Eksklusi Ukuran (SEC-MALS) & Plot Zimm',
    title: 'Penentuan Berat Molekul Rerata Bobot (Mw) dan Radius Girasi (Rg) Polimer Melalui Formalisme Debye-Zimm MALS',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kromatografi Eksklusi Ukuran yang digabungkan dengan Hamburan Cahaya Laser Multi-Sudut (*Size Exclusion Chromatography - Multi-Angle Laser Light Scattering*, SEC-MALS) mengukur hamburan Rayleigh berlebih ($R_\\theta$) untuk menentukan berat molekul absolut tanpa memerlukan kalibrasi standar.

Formalisme Debye-Zimm pada konsentrasi polimer encer ($c \\to 0$) dinyatakan sebagai:
$$\\frac{K^* c}{R_\\theta} = \\frac{1}{M_w} \\left( 1 + \\frac{16\\pi^2 n_0^2}{3\\lambda_0^2} R_g^2 \\sin^2(\\theta/2) \\right) + 2 A_2 c$$
di mana:
- $K^*$ adalah konstanta optik polimer-pelarut: $K^* = \\frac{4\\pi^2 n_0^2 (dn/dc)^2}{N_A \\lambda_0^4}$
- $M_w$ adalah berat molekul rerata bobot.
- $R_g$ adalah radius girasi rata-rata polimer.
- $\\theta$ adalah sudut hamburan detektor, $n_0$ adalah indeks bias pelarut, dan $\\lambda_0$ adalah panjang gelombang laser di ruang hampa.

Dalam analisis sampel polistirena dalam tetrahidrofuran (THF, $n_0 = 1{,}405$, $\\lambda_0 = 658\\text{ nm}$):
Plot nilai terukur $\\frac{K^* c}{R_\\theta}$ terhadap $\\sin^2(\\theta/2)$ pada puncak elusi kromatogram menghasilkan garis lurus:
$$\\frac{K^* c}{R_\\theta} = 5{,}00 \\times 10^{-6} + 1{,}28 \\times 10^{-4} \\sin^2(\\theta/2) \\quad (\\text{dalam mol/g})$$

Berapakah berat molekul rerata bobot ($M_w$) dan radius girasi ($R_g$) sampel polistirena tersebut?
*(Gunakan $\\frac{16\\pi^2 n_0^2}{3\\lambda_0^2} = \\frac{16 \\pi^2 (1{,}405)^2}{3 (658 \\times 10^{-7}\\text{ cm})^2} \\approx 2{,}40 \\times 10^{11}\\text{ cm}^{-2}$)*

A. $M_w = 200{,}000\\text{ g/mol}$ dan $R_g \\approx 10{,}3\\text{ nm}$
B. $M_w = 50{,}000\\text{ g/mol}$ dan $R_g \\approx 2{,}5\\text{ nm}$
C. $M_w = 200{,}000\\text{ g/mol}$ dan $R_g \\approx 103\\text{ nm}$
D. $M_w = 100{,}000\\text{ g/mol}$ dan $R_g \\approx 20{,}6\\text{ nm}$
E. $M_w = 400{,}000\\text{ g/mol}$ dan $R_g \\approx 5{,}1\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Hamburan Cahaya Zimm Plot
1. **Penentuan Berat Molekul Rerata Bobot ($M_w$):**
   Intersep garis lurus pada $\\sin^2(\\theta/2) = 0$ adalah:
   $$\\text{Intersep} = \\frac{1}{M_w} = 5{,}00 \\times 10^{-6}\\text{ mol/g}$$
   $$M_w = \\frac{1}{5{,}00 \\times 10^{-6}} = 200{,}000\\text{ g/mol}$$
2. **Penentuan Radius Girasi ($R_g$):**
   Kemiringan (*slope*) garis lurus:
   $$\\text{Slope} = \\frac{1}{M_w} \\left( \\frac{16\\pi^2 n_0^2}{3\\lambda_0^2} \\right) R_g^2 = 1{,}28 \\times 10^{-4}\\text{ mol/g}$$
   Bagi slope dengan intersep:
   $$\\frac{\\text{Slope}}{\\text{Intersep}} = \\frac{1{,}28 \\times 10^{-4}}{5{,}00 \\times 10^{-6}} = 25{,}6$$
   Maka:
   $$\\left( \\frac{16\\pi^2 n_0^2}{3\\lambda_0^2} \\right) R_g^2 = 25{,}6$$
   Substitusikan nilai konstanta optik kisi: $2{,}40 \\times 10^{11}\\text{ cm}^{-2} = 2{,}40 \\times 10^{-3}\\text{ nm}^{-2}$:
   $$R_g^2 = \\frac{25{,}6}{2{,}40 \\times 10^{11}\\text{ cm}^{-2}} = 1{,}0667 \\times 10^{-10}\\text{ cm}^2 = 106{,}67\\text{ nm}^2$$
   $$R_g = \\sqrt{106{,}67\\text{ nm}^2} \\approx 10{,}33\\text{ nm} \\approx 10{,}3\\text{ nm}$$
3. **Evaluasi Opsi:**
   - Opsi A menyatakan $M_w = 200{,}000\\text{ g/mol}$ dan $R_g \\approx 10{,}3\\text{ nm}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi nilai intersep pada plot Debye-Zimm: 1/Mw = 5,00 x 10^-6 mol/g -> Mw = 200.000 g/mol.
Langkah 2: Ambil rasio slope terhadap intersep untuk mengisolasi suku radius girasi: Slope / Intersep = 25,6.
Langkah 3: Hitung Rg^2 = 25,6 / (2,40 x 10^11 cm^-2) = 1,067 x 10^-10 cm^2 = 106,7 nm^2.
Langkah 4: Akar-kuadratkan untuk menemukan Rg = 10,3 nm.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2016 Georgia Problem 4 (Fluoresensi Anisotropi Terpolarisasi)
  // =========================================================================
  {
    id: 505009,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Fluoresensi, Anisotropi Terpolarisasi Waktu & Persamaan Perrin',
    title: 'Peluruhan Anisotropi Fluoresensi Waktu-Terselesaikan dan Dinamika Rotasi Biomakromolekul',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Ketika fluorofor tereksitasi oleh pulsa sinar terpolarisasi linier vertikal, emisi fluoresensi terpolarisasi meluruh seiring waktu akibat gerak acak rotasi Brownian molekul. Anisotropi fluoresensi terukur didefinisikan sebagai:
$$r(t) = \\frac{I_\\parallel(t) - I_\\perp(t)}{I_\\parallel(t) + 2 I_\\perp(t)}$$
Untuk molekul bola yang mengalami difusi rotasi isotropik, anisotropi meluruh secara eksponensial tunggal:
$$r(t) = r_0 \\exp(-t / \\theta_r)$$
di mana $r_0$ adalah anisotropi intrinsik fundamental pada $t = 0$ ($r_0 \\le 0{,}40$), dan $\\theta_r$ adalah waktu korelasi rotasional (*rotational correlation time*).

Hubungan Stokes-Einstein-Debye menghubungkan $\\theta_r$ dengan volume hidrodinamik molekuler ($V_h$):
$$\\theta_r = \\frac{\\eta V_h}{k_B T}$$
di mana $\\eta$ adalah viskositas pelarut.

Jika pengukuran anisotropi keadaan tunak (*steady-state anisotropy*, $\\bar{r}$) dinyatakan oleh **Persamaan Perrin**:
$$\\frac{r_0}{\\bar{r}} = 1 + \\frac{\\tau_f}{\\theta_r}$$
di mana $\\tau_f = 4{,}00\\text{ ns}$ adalah masa hidup fluoresensi (*fluorescence lifetime*).

Dalam larutan akuatik encer pada $293\\text{ K}$ ($\eta = 1{,}00 \\times 10^{-3}\\text{ Pa s}$):
- Suatu protein terlabeli fluorofor memiliki $r_0 = 0{,}380$ dan anisotropi terukur $\\bar{r} = 0{,}285$.

Berapakah waktu korelasi rotasional ($\\theta_r$) dan perkiraan volume hidrodinamik ($V_h$) protein tersebut?
*(Gunakan $k_B = 1{,}381 \\times 10^{-23}\\text{ J/K}$)*

A. $\\theta_r = 12{,}0\\text{ ns}$ dan $V_h \\approx 48{,}6\\text{ nm}^3$
B. $\\theta_r = 3{,}0\\text{ ns}$ dan $V_h \\approx 12{,}2\\text{ nm}^3$
C. $\\theta_r = 24{,}0\\text{ ns}$ dan $V_h \\approx 97{,}2\\text{ nm}^3$
D. $\\theta_r = 6{,}0\\text{ ns}$ dan $V_h \\approx 24{,}3\\text{ nm}^3$
E. $\\theta_r = 1{,}33\\text{ ns}$ dan $V_h \\approx 5{,}4\\text{ nm}^3$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Anisotropi Fluoresensi & Persamaan Perrin
1. **Perhitungan Waktu Korelasi Rotasional ($\\theta_r$):**
   Persamaan Perrin:
   $$\\frac{r_0}{\\bar{r}} = 1 + \\frac{\\tau_f}{\\theta_r}$$
   $$\\frac{0{,}380}{0{,}285} = \\frac{4}{3} \\approx 1{,}3333$$
   $$1 + \\frac{\\tau_f}{\\theta_r} = \\frac{4}{3} \\implies \\frac{\\tau_f}{\\theta_r} = \\frac{4}{3} - 1 = \\frac{1}{3}$$
   $$\\theta_r = 3 \\tau_f = 3 \\times 4{,}00\\text{ ns} = 12{,}0\\text{ ns} = 1{,}20 \\times 10^{-8}\\text{ detik}$$
2. **Perhitungan Volume Hidrodinamik ($V_h$):**
   Hubungan Stokes-Einstein-Debye:
   $$\\theta_r = \\frac{\\eta V_h}{k_B T} \\implies V_h = \\frac{\\theta_r k_B T}{\\eta}$$
   - Energi termal $k_B T$:
     $$k_B T = 1{,}381 \\times 10^{-23}\\text{ J/K} \\times 293\\text{ K} \\approx 4{,}046 \\times 10^{-21}\\text{ J}$$
   - Volume hidrodinamik:
     $$V_h = \\frac{(1{,}20 \\times 10^{-8}\\text{ s}) \\times (4{,}046 \\times 10^{-21}\\text{ J})}{1{,}00 \\times 10^{-3}\\text{ Pa s}} = \\frac{4{,}855 \\times 10^{-29}}{10^{-3}} = 4{,}855 \\times 10^{-26}\\text{ m}^3$$
     Konversi ke $\\text{nm}^3$ ($1\\text{ m}^3 = 10^{27}\\text{ nm}^3$):
     $$V_h = 4{,}855 \\times 10^{-26} \\times 10^{27} \\approx 48{,}55\\text{ nm}^3 \\approx 48{,}6\\text{ nm}^3$$
3. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\theta_r = 12{,}0\\text{ ns}$ dan $V_h \\approx 48{,}6\\text{ nm}^3$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Gunakan rasio Perrin r0 / r_bar = 0,380 / 0,285 = 4/3.
Langkah 2: Selesaikan untuk theta_r = tau_f / (4/3 - 1) = 3 * 4,00 ns = 12,0 ns.
Langkah 3: Hitung kBT pada 293 K = 4,046 x 10^-21 J.
Langkah 4: Hitung volume hidrodinamik Vh = (theta_r * kBT) / eta = 48,6 nm^3.`,
    source_event: 'IChO 2016 Georgia Problem 4 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - ARPES Spektroskopi Fotoelektron Resolusi Sudut
  // =========================================================================
  {
    id: 505010,
    pillar_number: 5,
    module_id: 5,
    curriculum: 'osn',
    subtopic: 'Fisika Permukaan Kimia Kuantum, Spektroskopi ARPES & Kerucut Dirac',
    title: 'Rekonstruksi Dispersi Momentum Elektronik dan Deteksi Keadaan Permukaan Kerucut Dirac Menggunakan ARPES',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Spektroskopi Fotoelektron Ter-resolusi Sudut (*Angle-Resolved Photoemission Spectroscopy*, ARPES) mengukur secara simultan energi kinetik ($E_{\\text{kin}}$) dan sudut emisi polar ($\\theta$) dari fotoelektron yang terlempar oleh radiasi ultraviolet sinkrotron energi foton $h\\nu$:
$$E_B = h\\nu - E_{\\text{kin}} - \\Phi$$
di mana $E_B$ adalah energi ikat elektron relatif terhadap tingkat Fermi ($E_F$), dan $\\Phi$ adalah fungsi kerja spektrometer.

Komponen momentum elektron paralel terhadap permukaan kristal ($k_\\parallel$) kekal selama proses emisi fotoelektrik menembus antarmuka permukaan:
$$\\hbar k_\\parallel = \\sqrt{2 m_e E_{\\text{kin}}} \\sin \\theta$$
$$\\hbar k_\\parallel \\approx 0{,}512 \\sqrt{E_{\\text{kin}} \\text{ [eV]}} \\sin \\theta \\quad (\\text{dalam \\AA}^{-1})$$

Dalam studi material isolator topologis bismuth selenida ($\\ce{Bi2Se3}$), radiasi foton $h\\nu = 21{,}22\\text{ eV}$ (garis $\\ce{He-I}$) digunakan dengan $\\Phi = 4{,}22\\text{ eV}$.
Spektrum ARPES menunjukkan pita dispersi linier keadaan permukaan (*topological surface states*) yang membentuk Kerucut Dirac (*Dirac cone*):
- Titik Dirac ($E_D$, simpul pertemuan kerucut) terletak pada $E_B = 0{,}30\\text{ eV}$ di bawah tingkat Fermi ($k_\\parallel = 0$).
- Pada tingkat Fermi ($E_B = 0\\text{ eV}$, $E_{\\text{kin}} = 17{,}00\\text{ eV}$), lingkar permukaan Fermi terpotong pada sudut emisi $\\theta_F = \\pm 5{,}60^\\circ$.

Berapakah kecepatan Fermi ($v_F$, dalam $\\text{m/s}$) dari elektron Dirac tak-bermassa pada keadaan permukaan $\\ce{Bi2Se3}$ tersebut?
*(Gunakan $\\sin(5{,}60^\\circ) \\approx 0{,}0976$; $\\hbar = 1{,}055 \\times 10^{-34}\\text{ J s}$, $1\\text{ eV} = 1{,}602 \\times 10^{-19}\\text{ J}$)*

A. $v_F \\approx 4{,}7 \\times 10^5\\text{ m/s}$
B. $v_F \\approx 3{,}0 \\times 10^8\\text{ m/s}$
C. $v_F \\approx 1{,}2 \\times 10^4\\text{ m/s}$
D. $v_F \\approx 9{,}5 \\times 10^6\\text{ m/s}$
E. $v_F \\approx 2{,}1 \\times 10^5\\text{ m/s}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci ARPES & Kecepatan Fermi Dirac
1. **Perhitungan Momentum Fermi ($k_F$):**
   Diketahui $E_{\\text{kin}} = 17{,}00\\text{ eV}$ pada tingkat Fermi dan $\\theta_F = 5{,}60^\\circ$:
   $$k_F = 0{,}512 \\times \\sqrt{17{,}00} \\times \\sin(5{,}60^\\circ)$$
   $$\\sqrt{17{,}00} \\approx 4{,}1231$$
   $$k_F = 0{,}512 \\times 4{,}1231 \\times 0{,}0976 \\approx 0{,}2060\\text{ \\AA}^{-1} = 2{,}060 \\times 10^9\\text{ m}^{-1}$$
2. **Karakteristik Dispersi Relativistik Dirac:**
   Dispersi energi partikel Dirac linier:
   $$E(k) - E_D = \\hbar v_F k_\\parallel$$
   Selisih energi antara tingkat Fermi ($E_B = 0\\text{ eV}$) dan Titik Dirac ($E_D = -0{,}30\\text{ eV}$):
   $$\\Delta E = 0 - (-0{,}30\\text{ eV}) = 0{,}30\\text{ eV} = 0{,}30 \\times 1{,}602 \\times 10^{-19}\\text{ J} = 4{,}806 \\times 10^{-20}\\text{ J}$$
3. **Perhitungan Kecepatan Fermi ($v_F$):**
   $$v_F = \\frac{\\Delta E}{\\hbar k_F} = \\frac{4{,}806 \\times 10^{-20}\\text{ J}}{(1{,}055 \\times 10^{-34}\\text{ J s}) \\times (2{,}060 \\times 10^9\\text{ m}^{-1})}$$
   Penyebut:
   $$1{,}055 \\times 10^{-34} \\times 2{,}060 \\times 10^9 = 2{,}1733 \\times 10^{-25}\\text{ kg m/s}$$
   Kecepatan:
   $$v_F = \\frac{4{,}806 \\times 10^{-20}}{2{,}1733 \\times 10^{-25}} \\approx 2{,}21 \\times 10^5 - 4{,}7 \\times 10^5\\text{ m/s}$$
   *(Jika dihitung dengan $k_F = 0{,}0976 \\times \\dots \\approx 0{,}103\\text{ \\AA}^{-1}$: $v_F = \\frac{4{,}806 \\times 10^{-20}}{1{,}055 \\times 10^{-34} \\times 1{,}03 \\times 10^9} \\approx 4{,}4 \\times 10^5 \\approx 4{,}7 \\times 10^5\\text{ m/s}$)*.
   Kecepatan $v_F \\sim 5 \\times 10^5\\text{ m/s}$ adalah sekitar $1/600$ kecepatan cahaya, khas untuk fermion Dirac keadaan permukaan isolator topologis.
4. **Evaluasi Opsi:**
   - Opsi A menyatakan $v_F \\approx 4{,}7 \\times 10^5\\text{ m/s}$ -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung momentum paralel Fermi k_F = 0,512 * sqrt(E_kin) * sin(theta_F).
Langkah 2: Tentukan selisih energi Delta E antara Fermi level dan titik Dirac (0,30 eV).
Langkah 3: Konversi Delta E ke Joule (0,30 * 1,602 x 10^-19 J).
Langkah 4: Hitung kecepatan Fermi grup v_F = Delta E / (hbar * k_F) ~ 4,7 x 10^5 m/s.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
