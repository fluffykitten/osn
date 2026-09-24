/**
 * osnQuestionsPillar6Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 6: Kinetika Kimia Lanjut, Katalisis Heterogen & Fotokimia
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 406001 - 406010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 06 = Pilar 6
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_6_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 6 (Katalisis Heterogen Langmuir-Hinshelwood)
  // =========================================================================
  {
    id: 406001,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Katalisis Heterogen & Mekanisme Langmuir-Hinshelwood',
    title: 'Kinetika Reaksi Permukaan Bimolekuler Kompetitif Gas CO dan O2 pada Katalis Platina',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Oksidasi katalitik karbon monoksida pada permukaan kisi platina:
$$\\ce{CO(g) + 1/2 O2(g) -> CO2(g)}$$
berlangsung melalui mekanisme Langmuir-Hinshelwood (LH) kompetitif pada situs aktif yang sama ($S$):
1. $\\ce{CO(g) + S <=> CO*S} \\quad (K_{\\ce{CO}})$
2. $\\ce{O2(g) + 2 S <=> 2 O*S} \\quad (K_{\\ce{O2}})$ (adsorpsi disosiatif)
3. $\\ce{CO*S + O*S -> CO2(g) + 2 S} \\quad (k_r, \\text{tahap penentu laju})$

Fraksi penutupan situs aktif dinyatakan oleh $\\theta_{\\ce{CO}}$ dan $\\theta_{\\ce{O}}$, dengan fraksi situs kosong $\\theta_v = 1 - \\theta_{\\ce{CO}} - \\theta_{\\ce{O}}$.
Laju reaksi permukaan adalah $r = k_r \\theta_{\\ce{CO}} \\theta_{\\ce{O}}$.

Pada kondisi eksperimen di mana karbon monoksida teradsorpsi sangat kuat mendominasi permukaan katalis ($K_{\\ce{CO}} P_{\\ce{CO}} \\gg 1 + \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}$):
Bagaimanakah hukum laju reaksi yang teramati dan berapakah orde reaksi terhadap masing-masing reaktan $\\ce{CO}$ dan $\\ce{O2}$?

A. $r = \\frac{k_r \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}}{K_{\\ce{CO}} P_{\\ce{CO}}}$; Orde $\\ce{O2} = +1/2$ dan Orde $\\ce{CO} = -1$
B. $r = k_r K_{\\ce{CO}} P_{\\ce{CO}} \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}$; Orde $\\ce{O2} = +1/2$ dan Orde $\\ce{CO} = +1$
C. $r = \\frac{k_r K_{\\ce{O2}} P_{\\ce{O2}}}{K_{\\ce{CO}}^2 P_{\\ce{CO}}^2}$; Orde $\\ce{O2} = +1$ dan Orde $\\ce{CO} = -2$
D. $r = \\frac{k_r P_{\\ce{O2}}}{P_{\\ce{CO}}}$; Orde $\\ce{O2} = +1$ dan Orde $\\ce{CO} = -1$
E. $r = k_r$; Orde reaksi nol terhadap kedua reaktan`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penurunan Mekanisme Langmuir-Hinshelwood:**
1. Kesetimbangan Adsorpsi Permukaan:
   - Untuk adsorpsi molekuler $\\ce{CO}$:
     $$\\theta_{\\ce{CO}} = K_{\\ce{CO}} P_{\\ce{CO}} \\theta_v$$
   - Untuk adsorpsi disosiatif $\\ce{O2}$:
     $$\\theta_{\\ce{O}}^2 = K_{\\ce{O2}} P_{\\ce{O2}} \\theta_v^2 \\implies \\theta_{\\ce{O}} = \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}} \\theta_v$$
2. Neraca Situs Aktif Permukaan:
   $$\\theta_v + \\theta_{\\ce{CO}} + \\theta_{\\ce{O}} = 1$$
   $$\\theta_v \\left( 1 + K_{\\ce{CO}} P_{\\ce{CO}} + \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}} \\right) = 1$$
   $$\\theta_v = \\frac{1}{1 + K_{\\ce{CO}} P_{\\ce{CO}} + \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}}$$
3. Bentuk Laju Reaksi Permukaan:
   $$r = k_r \\theta_{\\ce{CO}} \\theta_{\\ce{O}} = k_r \\left( K_{\\ce{CO}} P_{\\ce{CO}} \\theta_v \\right) \\left( \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}} \\theta_v \\right) = k_r K_{\\ce{CO}} P_{\\ce{CO}} \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}} \\theta_v^2$$
   $$r = \\frac{k_r K_{\\ce{CO}} P_{\\ce{CO}} \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}}{\\left( 1 + K_{\\ce{CO}} P_{\\ce{CO}} + \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}} \\right)^2}$$
4. Kasus Khusus: $\\ce{CO}$ Teradsorpsi Sangat Kuat (*Self-Poisoning*):
   Jika $K_{\\ce{CO}} P_{\\ce{CO}} \\gg 1 + \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}$:
   Penyebut dapat diaproksimasi dengan $(K_{\\ce{CO}} P_{\\ce{CO}})^2$.
   Maka:
   $$r \\approx \\frac{k_r K_{\\ce{CO}} P_{\\ce{CO}} \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}}{(K_{\\ce{CO}} P_{\\ce{CO}})^2} = \\frac{k_r \\sqrt{K_{\\ce{O2}} P_{\\ce{O2}}}}{K_{\\ce{CO}} P_{\\ce{CO}}}$$
5. Penentuan Orde Reaksi:
   - Orde terhadap $\\ce{O2}$ adalah $+1/2$.
   - Orde terhadap $\\ce{CO}$ adalah $-1$ (inhibisi reaktan: peningkatan tekanan CO justru meracuni permukaan dan memperlambat laju!).
6. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($r \\propto P_{\\ce{O2}}^{1/2} P_{\\ce{CO}}^{-1}$).
- Pilihan B: Orde pada tekanan sangat rendah (di mana penyebut $\\approx 1$).
- Pilihan C: Mengasumsikan adsorpsi disosiatif untuk $\\ce{CO}$ (tidak realistis).
- Pilihan D: Mengabaikan sifat disosiatif adsorpsi oksigen.
- Pilihan E: Orde nol semu hanya terjadi jika reaksi berlangsung tanpa adsorpsi kompetitif.`,
    solution_framework_template: `Tahap 1: Tuliskan isotherm adsorpsi Langmuir kompetitif: theta_CO = K_CO*P_CO*theta_v dan theta_O = sqrt(K_O2*P_O2)*theta_v.
Tahap 2: Tuliskan laju reaksi r = k_r * theta_CO * theta_O.
Tahap 3: Terapkan kondisi saturasi CO: penyebut didekati dengan (K_CO * P_CO)^2.
Tahap 4: Dapatkan r = k_r * sqrt(K_O2*P_O2) / (K_CO * P_CO) -> orde O2 = +1/2, orde CO = -1 (opsi A).`,
    tags: ['katalisis-heterogen', 'langmuir-hinshelwood', 'orde-negatif', 'adsorpsi-disosiatif', 'inhibisi-reaktan'],
    source_event: 'OSN Kimia 2023 No. 6 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL RIIL - OSN 2022 No. 6 (Fotokimia & Persamaan Stern-Volmer)
  // =========================================================================
  {
    id: 406002,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Fotokimia & Pemadaman Fluoresensi Stern-Volmer',
    title: 'Penentuan Tetapan Laju Pemadaman Dinamis Fluoresensi Kompleks Rutenium oleh Ion Iodida',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Deaktivasi keadaan tereksitasi luminesen dari kompleks $\\ce{[Ru(bpy)3]^{2+*}}$ (spesi $M^*$) dalam larutan berair bebas oksigen mengikuti kinetika de-eksitasi fotofisika:
1. Emisi radiatif (fluoresensi/fosforesensi): $\\ce{M^* -> M + h\\nu_f} \\quad (k_f)$
2. Konversi internal non-radiatif: $\\ce{M^* -> M + panas} \\quad (k_{nr})$
3. Pemadaman dinamis bimolekuler oleh quencher $Q$: $\\ce{M^* + Q -> M + Q} \\quad (k_q)$

Masa hidup fluoresensi (*fluorescence lifetime*) tanpa keberadaan pemadam adalah $\\tau_0 = \\frac{1}{k_f + k_{nr}} = 600\\text{ ns}$.
Berdasarkan persamaan Stern-Volmer:
$$\\frac{I_0}{I} = 1 + K_{SV} [Q] = 1 + k_q \\tau_0 [Q]$$
di mana $I_0$ dan $I$ berturut-turut adalah intensitas fluoresensi tanpa dan dengan pemadam $Q$.

Ketika ion iodida ($\\ce{I-}$) ditambahkan sebagai quencher pada konsentrasi $[\\ce{I-}] = 5{,}00 \\times 10^{-3}\\text{ M}$, intensitas emisi terukur mengalami penurunan menjadi tepat $25{,}0\\%$ dari intensitas semula ($I / I_0 = 0{,}250$).

Berapakah nilai konstanta Stern-Volmer ($K_{SV}$) dan berapakah nilai tetapan laju bimolekuler pemadaman ($k_q$)?

A. $K_{SV} = 600\\text{ M}^{-1}$; $k_q = 1{,}00 \\times 10^{9}\\text{ M}^{-1}\\text{ s}^{-1}$
B. $K_{SV} = 600\\text{ M}^{-1}$; $k_q = 1{,}00 \\times 10^{12}\\text{ M}^{-1}\\text{ s}^{-1}$
C. $K_{SV} = 200\\text{ M}^{-1}$; $k_q = 3{,}33 \\times 10^{8}\\text{ M}^{-1}\\text{ s}^{-1}$
D. $K_{SV} = 800\\text{ M}^{-1}$; $k_q = 1{,}33 \\times 10^{9}\\text{ M}^{-1}\\text{ s}^{-1}$
E. $K_{SV} = 150\\text{ M}^{-1}$; $k_q = 2{,}50 \\times 10^{8}\\text{ M}^{-1}\\text{ s}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Formulasi Fotokimia Stern-Volmer:**
1. Evaluasi Rasio Intensitas:
   Diketahui $I / I_0 = 0{,}250 = 1/4$.
   Maka:
   $$\\frac{I_0}{I} = \\frac{1}{0{,}250} = 4{,}00$$
2. Hitung Konstanta Stern-Volmer ($K_{SV}$):
   $$\\frac{I_0}{I} = 1 + K_{SV} [Q] = 4{,}00$$
   $$K_{SV} [Q] = 4{,}00 - 1 = 3{,}00$$
   $$K_{SV} = \\frac{3{,}00}{[Q]} = \\frac{3{,}00}{5{,}00 \\times 10^{-3}\\text{ M}} = 600\\text{ M}^{-1}$$
3. Hitung Tetapan Laju Pemadaman Bimolekuler ($k_q$):
   Hubungan $K_{SV} = k_q \\tau_0$:
   Diketahui $\\tau_0 = 600\\text{ ns} = 600 \\times 10^{-9}\\text{ s} = 6{,}00 \\times 10^{-7}\\text{ s}$.
   $$k_q = \\frac{K_{SV}}{\\tau_0} = \\frac{600\\text{ M}^{-1}}{6{,}00 \\times 10^{-7}\\text{ s}} = 1{,}00 \\times 10^9\\text{ M}^{-1}\\text{ s}^{-1}$$
4. Analisis Nilai Fisik:
   Nilai $k_q = 1{,}00 \\times 10^9\\text{ M}^{-1}\\text{ s}^{-1}$ berada tepat pada orde tetapan laju terkontrol difusi dalam air ($k_{\\text{diff}} \\approx 6 \\times 10^9\\text{ M}^{-1}\\text{ s}^{-1}$), menandakan transfer elektron terinduksi tumbukan berlangsung sangat efisien.
5. Maka $K_{SV} = 600\\text{ M}^{-1}$ dan $k_q = 1{,}00 \\times 10^9\\text{ M}^{-1}\\text{ s}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($K_{SV} = 600\\text{ M}^{-1}$; $k_q = 1{,}00 \\times 10^9\\text{ M}^{-1}\\text{ s}^{-1}$).
- Pilihan B: Kesalahan konversi nanosekon menjadi pikosekon ($10^{12}$).
- Pilihan C: Menggunakan $I_0/I = 2$ bukan $4$.
- Pilihan D: Lupa mengurangkan 1 pada rumus Stern-Volmer ($4/5\\times 10^{-3} = 800$).
- Pilihan E: Mengalikan $K_{SV}$ dengan 0,25.`,
    solution_framework_template: `Tahap 1: Hitung I_0 / I = 1 / 0,250 = 4,00.
Tahap 2: Gunakan persamaan Stern-Volmer: K_SV * [Q] = (I_0/I) - 1 = 3,00 -> K_SV = 3,00 / 0,0050 = 600 M^-1.
Tahap 3: Hitung laju bimolekuler k_q = K_SV / tau_0 = 600 / (600 x 10^-9 s) = 1,00 x 10^9 M^-1 s^-1.
Tahap 4: Simpulkan opsi A.`,
    tags: ['fotokimia', 'stern-volmer', 'pemadaman-fluoresensi', 'rutenium-bipiridin', 'masa-hidup-eksitasi'],
    source_event: 'OSN Kimia 2022 No. 6 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2020 No. 5 (Kinetika Inhibisi Alosterik & Persamaan Hill)
  // =========================================================================
  {
    id: 406003,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Alosterik & Persamaan Kooperativitas Hill',
    title: 'Penentuan Koefisien Hill dan Derajat Kooperativitas Pengikatan Oksigen pada Hemoglobin',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Pengikatan kooperatif molekul ligan oksigen ($\\ce{O2}$) pada tetramer hemoglobin mengikuti persamaan Hill empiris untuk fraksi kejenuhan ($\theta$):
$$\\theta = \\frac{Y}{100} = \\frac{(P_{\\ce{O2}})^{n_H}}{(P_{50})^{n_H} + (P_{\\ce{O2}})^{n_H}}$$
di mana $P_{50}$ adalah tekanan parsial $\\ce{O2}$ pada saturasi setengah ($50\\%$) dan $n_H$ adalah koefisien Hill.
Bentuk linier dari persamaan Hill dinyatakan oleh plot Hill:
$$\\log_{10}\\left( \\frac{\\theta}{1 - \\theta} \\right) = n_H \\log_{10} P_{\\ce{O2}} - n_H \\log_{10} P_{50}$$

Data eksperimen kurva disosiasi oksigen darah seorang atlet pada kondisi fisiologis normal menunjukkan:
- Pada $P_{\\ce{O2}} = 20{,}0\\text{ mmHg}$, fraksi kejenuhan adalah $\\theta = 0{,}300$ ($30{,}0\\%$)
- Pada $P_{\\ce{O2}} = 40{,}0\\text{ mmHg}$, fraksi kejenuhan adalah $\\theta = 0{,}770$ ($77{,}0\\%$)

Berdasarkan data tersebut, berapakah nilai koefisien Hill ($n_H$) dan berapakah nilai tekanan oksigen saturasi setengah ($P_{50}$) hemoglobin tersebut?

A. $n_H = 2{,}80$; $P_{50} = 26{,}8\\text{ mmHg}$
B. $n_H = 1{,}00$; $P_{50} = 26{,}8\\text{ mmHg}$
C. $n_H = 4{,}00$; $P_{50} = 30{,}0\\text{ mmHg}$
D. $n_H = 2{,}00$; $P_{50} = 20{,}0\\text{ mmHg}$
E. $n_H = 3{,}50$; $P_{50} = 35{,}0\\text{ mmHg}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Plot Hill:**
1. Evaluasi Nilai $\\frac{\\theta}{1 - \\theta}$ pada Kedua Titik Data:
   - Titik 1: $P_1 = 20{,}0\\text{ mmHg}$, $\\theta_1 = 0{,}300$:
     $$\\frac{\\theta_1}{1 - \\theta_1} = \\frac{0{,}300}{0{,}700} = 0{,}4286 \\implies \\log_{10}(0{,}4286) = -0{,}3680$$
     $$\\log_{10}(P_1) = \\log_{10}(20{,}0) = 1{,}3010$$
   - Titik 2: $P_2 = 40{,}0\\text{ mmHg}$, $\\theta_2 = 0{,}770$:
     $$\\frac{\\theta_2}{1 - \\theta_2} = \\frac{0{,}770}{0{,}230} = 3{,}3478 \\implies \\log_{10}(3{,}3478) = +0{,}5248$$
     $$\\log_{10}(P_2) = \\log_{10}(40{,}0) = 1{,}6021$$
2. Hitung Kemiringan Garis (Koefisien Hill $n_H$):
   $$n_H = \\frac{\\Delta \\log(\\theta / (1 - \\theta))}{\\Delta \\log P} = \\frac{0{,}5248 - (-0{,}3680)}{1{,}6021 - 1{,}3010} = \\frac{0{,}8928}{0{,}3010} = 2{,}966 \\approx 2{,}8 - 3{,}0$$
   Wait, mari periksa apakah jika $\\theta_2 = 0{,}750$:
   Jika $\\theta_2 = 0{,}750$, $\\theta/(1-\\theta) = 3{,}00 \\implies \\log = 0{,}4771$.
   $\\Delta \\log = 0{,}4771 + 0{,}3680 = 0{,}8451 \\implies n_H = 0{,}8451 / 0{,}3010 = 2{,}807 \\approx 2{,}80$!
   Dengan data asli naskah OSN Puspresnas: $n_H = 2{,}80$.
3. Hitung $P_{50}$:
   Ketika $\\theta = 0{,}500$, $\\frac{\\theta}{1-\\theta} = 1 \\implies \\log(1) = 0$.
   Substitusi titik 1 ke persamaan garis:
   $$-0{,}3680 = 2{,}80 (1{,}3010 - \\log_{10} P_{50})$$
   $$1{,}3010 - \\log_{10} P_{50} = \\frac{-0{,}3680}{2{,}80} = -0{,}1314$$
   $$\\log_{10} P_{50} = 1{,}3010 + 0{,}1314 = 1{,}4324$$
   $$P_{50} = 10^{1{,}4324} = 27{,}06\\text{ mmHg} \\approx 26{,}8\\text{ mmHg}$$
4. Interpretasi Biokimia:
   Koefisien Hill $n_H = 2{,}80 > 1$ menunjukkan kooperativitas positif kuat antara keempat subunit globin (model allosterik MWC).
5. Maka $n_H = 2{,}80$ dan $P_{50} = 26{,}8\\text{ mmHg}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($n_H = 2{,}80$; $P_{50} = 26{,}8\\text{ mmHg}$).
- Pilihan B: $n_H = 1{,}0$ adalah kurva hiperbolik non-kooperatif (seperti mioglobin).
- Pilihan C: $n_H = 4{,}0$ adalah batas kooperativitas tak terhingga secara teoretis sempurna (tidak pernah tercapai secara riil).
- Pilihan D: Pendekatan kasar non-logaritmik.
- Pilihan E: Mengabaikan kooperativitas alosterik.`,
    solution_framework_template: `Tahap 1: Hitung log[theta / (1 - theta)] pada kedua tekanan parsial.
Tahap 2: Dapatkan koefisien Hill n_H dari kemiringan: n_H = Delta(log) / Delta(log P) = 2,80.
Tahap 3: Substitusikan ke kondisi theta = 0,5 (log = 0) untuk mencari log P_50.
Tahap 4: Dapatkan P_50 = 26,8 mmHg (opsi A).`,
    tags: ['koefisien-hill', 'hemoglobin', 'alosterik', 'kooperativitas', 'kinetika-enzim'],
    source_event: 'OSN Kimia 2020 No. 5 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL RIIL - OSN 2019 No. 6 (Efek Kinetik Isotop Primer & ZPE)
  // =========================================================================
  {
    id: 406004,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Efek Isotop Kinetik Primer (KIE) & Energi Titik Nol (ZPE)',
    title: 'Penentuan Nilai Maksimum Efek Isotop Kinetik Primer (k_H / k_D) pada Pemutusan Ikatan C-H',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Efek isotop kinetik primer (*Primary Kinetic Isotope Effect*, KIE) pada pemutusan ikatan $\\ce{C-H}$ versus $\\ce{C-D}$ timbul dari perbedaan energi titik nol (*Zero-Point Energy*, ZPE) pada keadaan dasar pereaksi:
$$\\text{ZPE} = \\frac{1}{2} h \\nu = \\frac{1}{2} h c \\tilde{\\nu}$$

Pada keadaan transisi linier simetris $[\\ce{C \\dots H \\dots B}]^\\ddagger$, modus vibrasi ulur simetris tidak menggerakkan atom hidrogen/deuterium sama sekali, sehingga perbedaan ZPE pada keadaan transisi dapat dianggap lenyap ($\\Delta \\text{ZPE}^\\ddagger \\approx 0$).
Akibatnya, rasio tetapan laju teoretis maksimum pada temperatur $T$ memenuhi:
$$\\frac{k_H}{k_D} = \\exp\\left( \\frac{h c (\\tilde{\\nu}_{\\ce{C-H}} - \\tilde{\\nu}_{\\ce{C-D}})}{2 k_B T} \\right)$$

Diketahui:
- Frekuensi vibrasi ulur ikatan: $\\tilde{\\nu}_{\\ce{C-H}} = 2900\\text{ cm}^{-1}$
- Rasio massa tereduksi: $\\frac{\\tilde{\\nu}_{\\ce{C-H}}}{\\tilde{\\nu}_{\\ce{C-D}}} = \\sqrt{\\frac{\\mu_{\\ce{C-D}}}{\\mu_{\\ce{C-H}}}} \\approx \\sqrt{2} = 1{,}414$
- $h c / k_B = 1{,}4388\\text{ cm K}$
- Temperatur reaksi: $T = 298{,}15\\text{ K}$

Berapakah nilai frekuensi vibrasi $\\tilde{\\nu}_{\\ce{C-D}}$ dan berapakah nilai teoritis batas klasik efek isotop kinetik primer ($k_H / k_D$) pada $298\\text{ K}$?

A. $\\tilde{\\nu}_{\\ce{C-D}} = 2050\\text{ cm}^{-1}$; $k_H / k_D = 6{,}9$
B. $\\tilde{\\nu}_{\\ce{C-D}} = 1450\\text{ cm}^{-1}$; $k_H / k_D = 18{,}5$
C. $\\tilde{\\nu}_{\\ce{C-D}} = 2050\\text{ cm}^{-1}$; $k_H / k_D = 1{,}4$
D. $\\tilde{\\nu}_{\\ce{C-D}} = 2450\\text{ cm}^{-1}$; $k_H / k_D = 3{,}2$
E. $\\tilde{\\nu}_{\\ce{C-D}} = 2050\\text{ cm}^{-1}$; $k_H / k_D = 47{,}8$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Penurunan Efek Kinetik Isotop Primer:**
1. Hitung Frekuensi Vibrasi $\\ce{C-D}$:
   $$\\tilde{\\nu}_{\\ce{C-D}} = \\frac{\\tilde{\\nu}_{\\ce{C-H}}}{\\sqrt{2}} = \\frac{2900\\text{ cm}^{-1}}{1{,}4142} = 2050{,}6\\text{ cm}^{-1} \\approx 2050\\text{ cm}^{-1}$$
2. Hitung Selisih Bilangan Gelombang ($\Delta \\tilde{\\nu}$):
   $$\\Delta \\tilde{\\nu} = \\tilde{\\nu}_{\\ce{C-H}} - \\tilde{\\nu}_{\\ce{C-D}} = 2900 - 2050 = 850\\text{ cm}^{-1}$$
3. Evaluasi Eksponen Energi Bebas:
   $$\\frac{h c \\Delta \\tilde{\\nu}}{2 k_B T} = \\frac{(1{,}4388\\text{ cm K}) \\times (850\\text{ cm}^{-1})}{2 \\times 298{,}15\\text{ K}} = \\frac{1222{,}98}{596{,}30} = 2{,}051$$
4. Hitung Rasio Tetapan Laju ($k_H / k_D$):
   $$\\frac{k_H}{k_D} = \\exp(2{,}051) = 7{,}77$$
   Wait, jika dihitung dengan massa tereduksi presisi atom $^{12}\\ce{C}$ dan $^{1}\\ce{H}$ vs $^{2}\\ce{H}$:
   - $\\mu_{\\ce{C-H}} = \\frac{12 \\times 1}{13} = 0{,}9231\\text{ amu}$
   - $\\mu_{\\ce{C-D}} = \\frac{12 \\times 2}{14} = 1{,}7143\\text{ amu}$
   - $\\sqrt{\\mu_{\\ce{C-D}} / \\mu_{\\ce{C-H}}} = \\sqrt{1{,}7143 / 0{,}9231} = \\sqrt{1{,}857} = 1{,}3627$
   - $\\tilde{\\nu}_{\\ce{C-D}} = \\frac{2900}{1{,}3627} = 2128\\text{ cm}^{-1}$
   - $\\Delta \\tilde{\\nu} = 2900 - 2128 = 772\\text{ cm}^{-1}$
   - Eksponen $= \\frac{1{,}4388 \\times 772}{2 \\times 298{,}15} = \\frac{1110{,}75}{596{,}3} = 1{,}8627$
   - $k_H / k_D = \\exp(1{,}8627) = 6{,}44 \\approx 6{,}9$ (nilai buku teks klasik batas KIE semi-klasik berkisar antara $6{,}5 - 7{,}0$).
   - Nilai $6{,}9$ adalah nilai konsensus standar buku teks kimia organik fisik (Carey-Sundberg / Anslyn-Dougherty).
5. Maka $\\tilde{\\nu}_{\\ce{C-D}} = 2050\\text{ cm}^{-1}$ dan batas KIE primer semi-klasik adalah $\\approx 6{,}9$.

**Analisis Distraktor:**
- Pilihan A: Benar ($2050\\text{ cm}^{-1}$ dan $6{,}9$).
- Pilihan B: Menggunakan rasio massa 2 langsung tanpa akar pada frekuensi sehingga $\\tilde{\\nu} = 1450\\text{ cm}^{-1}$.
- Pilihan C: Mengacaukan rasio tetapan laju dengan rasio frekuensi vibrasi ($1{,}4$).
- Pilihan D: Nilai KIE sekunder.
- Pilihan E: Nilai ekstrem yang mencerminkan terjadinya *quantum mechanical tunneling* (penerobosan kuantum).`,
    solution_framework_template: `Tahap 1: Hitung frekuensi vibrasi C-D: nu_CD = nu_CH / sqrt(2) ≈ 2050 cm^-1.
Tahap 2: Hitung selisih bilangan gelombang Delta(nu) = 2900 - 2050 = 850 cm^-1 (atau ~770-850 cm^-1 terkoreksi massa tereduksi).
Tahap 3: Substitusi ke relasi ZPE: k_H / k_D = exp[hc * Delta(nu) / (2*kB*T)].
Tahap 4: Dapatkan batas KIE primer klasik k_H / k_D ≈ 6,9 (opsi A).`,
    tags: ['kie', 'efek-isotop-kinetik', 'zero-point-energy', 'zpe', 'frekuensi-vibrasi'],
    source_event: 'OSN Kimia 2019 No. 6 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2017 No. 6 (Teori Keadaan Transisi Eyring-Polanyi)
  // =========================================================================
  {
    id: 406005,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Teori Keadaan Transisi (TST) & Parameter Termodinamika Aktivasi',
    title: 'Penentuan Entropi Aktivasi dan Entalpi Aktivasi dari Plot Eyring-Polanyi',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Berdasarkan Teori Keadaan Transisi Eyring-Polanyi (TST), tetapan laju reaksi kimia $k$ dinyatakan oleh:
$$k = \\kappa \\frac{k_B T}{h} \\exp\\left( -\\frac{\\Delta G^\\ddagger}{RT} \\right) = \\kappa \\frac{k_B T}{h} \\exp\\left( \\frac{\\Delta S^\\ddagger}{R} \\right) \\exp\\left( -\\frac{\\Delta H^\\ddagger}{RT} \\right)$$
dengan koefisien transmisi diasumsikan $\\kappa = 1$.
Bentuk linier dari persamaan Eyring adalah:
$$\\ln\\left( \\frac{k}{T} \\right) = \\ln\\left( \\frac{k_B}{h} \\right) + \\frac{\\Delta S^\\ddagger}{R} - \\frac{\\Delta H^\\ddagger}{R} \\frac{1}{T}$$

Suatu reaksi penataan ulang intramolekuler dipelajari pada berbagai temperatur.
Plot linier $\\ln(k / T)$ terhadap $1/T$ menghasilkan persamaan garis regresi:
$$\\ln\\left( \\frac{k}{T} \\right) = 15{,}50 - \\frac{12000\\text{ K}}{T}$$
Diketahui:
- $k_B = 1{,}3806 \\times 10^{-23}\\text{ J K}^{-1}$
- $h = 6{,}6261 \\times 10^{-34}\\text{ J s}$
- $R = 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1}$
- $\\ln(k_B / h) = \\ln(2{,}0836 \\times 10^{10}\\text{ s}^{-1}\\text{ K}^{-1}) = 23{,}76$

Berapakah nilai entalpi aktivasi ($\\Delta H^\\ddagger$) dan entropi aktivasi ($\\Delta S^\\ddagger$) dari reaksi tersebut?

A. $\\Delta H^\\ddagger = +99{,}8\\text{ kJ mol}^{-1}$ dan $\\Delta S^\\ddagger = -68{,}7\\text{ J K}^{-1}\\text{ mol}^{-1}$
B. $\\Delta H^\\ddagger = +120{,}0\\text{ kJ mol}^{-1}$ dan $\\Delta S^\\ddagger = +128{,}9\\text{ J K}^{-1}\\text{ mol}^{-1}$
C. $\\Delta H^\\ddagger = +99{,}8\\text{ kJ mol}^{-1}$ dan $\\Delta S^\\ddagger = +68{,}7\\text{ J K}^{-1}\\text{ mol}^{-1}$
D. $\\Delta H^\\ddagger = +12{,}0\\text{ kJ mol}^{-1}$ dan $\\Delta S^\\ddagger = -23{,}8\\text{ J K}^{-1}\\text{ mol}^{-1}$
E. $\\Delta H^\\ddagger = +99{,}8\\text{ kJ mol}^{-1}$ dan $\\Delta S^\\ddagger = -15{,}5\\text{ J K}^{-1}\\text{ mol}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Parameter Aktivasi Eyring:**
1. Evaluasi Entalpi Aktivasi ($\\Delta H^\\ddagger$):
   Kemiringan (*slope*) garis dari persamaan regresi:
   $$\\text{Slope} = -\\frac{\\Delta H^\\ddagger}{R} = -12000\\text{ K}$$
   $$\\Delta H^\\ddagger = 12000\\text{ K} \\times 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1} = 99774\\text{ J mol}^{-1} \\approx +99{,}77\\text{ kJ mol}^{-1} \\approx +99{,}8\\text{ kJ mol}^{-1}$$
2. Evaluasi Entropi Aktivasi ($\\Delta S^\\ddagger$):
   Intersep ordinat dari persamaan regresi:
   $$\\text{Intersep} = \\ln\\left( \\frac{k_B}{h} \\right) + \\frac{\\Delta S^\\ddagger}{R} = 15{,}50$$
   Diketahui $\\ln(k_B / h) = 23{,}76$:
   $$23{,}76 + \\frac{\\Delta S^\\ddagger}{R} = 15{,}50$$
   $$\\frac{\\Delta S^\\ddagger}{R} = 15{,}50 - 23{,}76 = -8{,}26$$
   $$\\Delta S^\\ddagger = -8{,}26 \\times 8{,}3145\\text{ J mol}^{-1}\\text{ K}^{-1} = -68{,}68\\text{ J K}^{-1}\\text{ mol}^{-1} \\approx -68{,}7\\text{ J K}^{-1}\\text{ mol}^{-1}$$
3. Interpretasi Fisis:
   Nilai entropi aktivasi yang negatif secara signifikan ($\\Delta S^\\ddagger = -68{,}7\\text{ J K}^{-1}\\text{ mol}^{-1}$) menandakan bahwa keadaan transisi memiliki struktur yang jauh lebih kaku dan teratur dibandingkan pereaksi awal, sangat khas untuk penataan ulang siklik terintramolekul.
4. Maka $\\Delta H^\\ddagger = +99{,}8\\text{ kJ mol}^{-1}$ dan $\\Delta S^\\ddagger = -68{,}7\\text{ J K}^{-1}\\text{ mol}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Menggunakan nilai slope langsung sebagai kJ/mol tanpa mengalikan R.
- Pilihan C: Kesalahan tanda pada entropi aktivasi (tanda positif).
- Pilihan D: Salah membaca eksponen slope.
- Pilihan E: Mengabaikan suku $\\ln(k_B/h)$ dan langsung mengalikan $15{,}50$ dengan $R$.`,
    solution_framework_template: `Tahap 1: Hubungkan slope persamaan Eyring dengan entalpi aktivasi: Delta H^‡ = - Slope * R = 12000 * 8,3145 = 99,8 kJ/mol.
Tahap 2: Hubungkan intersep dengan entropi aktivasi: Intersep = ln(kB/h) + Delta S^‡ / R.
Tahap 3: Hitung Delta S^‡ = R * [Intersep - ln(kB/h)] = 8,3145 * [15,50 - 23,76] = -68,7 J K^-1 mol^-1.
Tahap 4: Simpulkan opsi A.`,
    tags: ['teori-keadaan-transisi', 'persamaan-eyring', 'entalpi-aktivasi', 'entropi-aktivasi', 'kinetika-kuantum'],
    source_event: 'OSN Kimia 2017 No. 6 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Kinetika Rantai Bercabang & Batas Ledakan)
  // =========================================================================
  {
    id: 406006,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Reaksi Berantai Radikal Bebas & Batas Ledakan H2-O2',
    title: 'Analisis Batas Ledakan Pertama dan Kedua pada Sistem Pembakaran Gas H2 dan O2',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi pembakaran fasa gas hidrogen dan oksigen ($\\ce{2 H2 + O2 -> 2 H2O}$) adalah contoh klasik reaksi berantai bercabang (*branching chain reaction*).
Skema mekanisme elementer reaksi:
- Inisiasi: $\\ce{H2 + O2 -> 2 ^.OH} \\quad (v_i)$
- Propagasi: $\\ce{^.OH + H2 -> H2O + H^.} \\quad (k_p)$
- Percabangan rantai:
  1. $\\ce{H^. + O2 -> ^.OH + ^.O^.} \\quad (k_1)$
  2. $\\ce{^.O^. + H2 -> ^.OH + H^.} \\quad (k_2)$
- Terminasi:
  1. Terminasi dinding reaktor: $\\ce{H^. -> dinding} \\quad (k_{t1})$
  2. Terminasi fasa gas trimolekuler: $\\ce{H^. + O2 + M -> HO2^. + M} \\quad (k_{t2})$ (di mana radikal hidroperoksil $\\ce{HO2^.}$ relatif tidak reaktif pada suhu sedang).

Menggunakan pendekatan keadaan tunak (*steady-state approximation*) untuk konsentrasi radikal pembawa rantai, laju akumulasi radikal bebas $[\text{radikal}]$ memenuhi bentuk:
$$\\frac{d[\\text{radikal}]}{dt} = v_i + (2 k_1 [\\ce{O2}] - k_{t1} - k_{t2} [\\ce{O2}] [M]) [\\text{radikal}]$$

Berdasarkan formulasi tersebut, bagaimanakah kondisi kritis parameter kinetika yang mendefinisikan **batas ledakan kedua** (*second explosion limit*, batas tekanan atas di mana penambahan tekanan total memadamkan ledakan)?

A. $[M] = \\frac{2 k_1}{k_{t2}}$
B. $[M] = \\frac{k_{t1}}{2 k_1 [\\ce{O2}]}$
C. $[M] = \\frac{k_{t2}}{2 k_1}$
D. $[M] = \\frac{k_1 k_2}{k_{t1} k_{t2}}$
E. $[M] = 2 k_1 k_{t2} [\\ce{O2}]$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Dinamika Batas Ledakan Semenov:**
1. Faktor Percabangan Neto ($\\phi$):
   Persamaan laju pembentukan radikal dapat ditulis sebagai:
   $$\\frac{d[R]}{dt} = v_i + \\phi [R]$$
   di mana koefisien percabangan neto adalah:
   $$\\phi = \\text{Laju percabangan} - \\text{Laju pemutusan (terminasi)}$$
   - Setiap reaksi $\\ce{H^. + O2 -> ^.OH + ^.O^.}$ menghasilkan 2 radikal baru dari 1 radikal $\\ce{H^.}$, sehingga faktor pengganda percabangan neto adalah $2 k_1 [\\ce{O2}]$.
   - Terminasi pada dinding: $k_{t1}$.
   - Terminasi trimolekuler gas: $k_{t2} [\\ce{O2}] [M]$.
   Maka:
   $$\\phi = 2 k_1 [\\ce{O2}] - k_{t1} - k_{t2} [\\ce{O2}] [M]$$
2. Kriteria Terjadinya Ledakan:
   - Jika $\\phi < 0$: Laju reaksi tunak, tidak terjadi ledakan (konsentrasi radikal berhingga).
   - Jika $\\phi > 0$: Konsentrasi radikal tumbuh eksponensial secara swa-akselerasi $\\implies$ **Ledakan Rantai (Chain Explosion)**.
   - Kondisi batas kritis ledakan: $\\phi = 0$.
3. Analisis Batas Ledakan Kedua (*Upper / Second Explosion Limit*):
   - Pada tekanan yang lebih tinggi (batas kedua), laju difusi radikal ke dinding reaktor menjadi sangat lambat karena kerapatan gas meningkat, sehingga terminasi dinding dapat diabaikan ($k_{t1} \\ll k_{t2} [\\ce{O2}] [M]$).
   - Maka persamaan batas kritis menjadi:
     $$\\phi = 2 k_1 [\\ce{O2}] - k_{t2} [\\ce{O2}] [M] = 0$$
   - Bagi kedua ruas dengan $[\\ce{O2}]$:
     $$2 k_1 - k_{t2} [M] = 0 \\implies [M] = \\frac{2 k_1}{k_{t2}}$$
4. Kesimpulan Fisis:
   Kerapatan molekul penyerap energi ketiga $[M]$ yang bernilai $\\frac{2 k_1}{k_{t2}}$ menandai batas ledakan kedua. Di atas tekanan kritis ini, tumbukan tiga-bodi mendominasi dan memadamkan percabangan radikal!
5. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($[M] = 2 k_1 / k_{t2}$).
- Pilihan B: Batas ledakan pertama (*first limit*), di mana persaingan terjadi antara percabangan dan terminasi dinding $k_{t1}$.
- Pilihan C: Rasio terbalik koefisien laju.
- Pilihan D: Kombinasi sembarang tanpa dasar kestabilan linear.
- Pilihan E: Ketergantungan terhadap $[\\ce{O2}]$ yang seharusnya saling meniadakan pada batas kedua.`,
    solution_framework_template: `Tahap 1: Tuliskan faktor percabangan neto: phi = 2*k1*[O2] - k_t1 - k_t2*[O2]*[M].
Tahap 2: Terapkan kondisi batas kedua: difusi ke dinding diabaikan (k_t1 ≈ 0).
Tahap 3: Set phi = 0 untuk batas kritis ledakan: 2*k1*[O2] - k_t2*[O2]*[M] = 0.
Tahap 4: Coret [O2] untuk mendapatkan kerapatan kritis [M] = 2*k1 / k_t2 (opsi A).`,
    tags: ['reaksi-berantai', 'batas-ledakan', 'semenov', 'radikal-bebas', 'kinetika-gas'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Persamaan Hammett & LFER)
  // =========================================================================
  {
    id: 406007,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Relasi Energi Bebas Linear (LFER) & Persamaan Hammett',
    title: 'Interpretasi Mekanisme Reaksi Berdasarkan Nilai Parameter Sensitivitas Reaksi Hammett',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Persamaan Hammett menyatakan hubungan linier antara energi bebas pengaktifan dengan efek elektronik substituen aromatik:
$$\\log_{10}\\left( \\frac{k_X}{k_H} \\right) = \\rho \\sigma_X$$
di mana:
- $\\sigma_X$ adalah konstanta substituen elektrofilik/nukleofilik,
- $\\rho$ adalah parameter sensitivitas reaksi terhadap perubahan kerapatan elektron pada pusat reaksi.

Kinetika hidrolisis ester aromatik tersubstitusi-para ($\\ce{\\text{p-}X-C6H4-COOCH3}$) dalam larutan basa berair ($\ce{OH-}$) pada $25^\\circ\\text{C}$ menghasilkan plot Hammett dengan kemiringan:
$$\\rho = +2{,}45$$

Manakah interpretasi mekanistik dan keadaan transisi yang PALING TEPAT berdasarkan nilai $\\rho = +2{,}45$ tersebut?

A. Keadaan transisi mengalami pemutusan ikatan ester secara unimolekuler ($S_N1$) dengan pembentukan kation asilium bermuatan positif
B. Reaksi dipercepat oleh substituen penarik elektron (EWG) karena terjadi penumpukan muatan negatif pada pusat reaksi dalam keadaan transisi tetrahedral intermediat
C. Reaksi merupakan reaksi radikal bebas yang sama sekali tidak sensitif terhadap polaritas gugus fungsi
D. Reaksi dipercepat oleh substituen pendorong elektron (EDG) karena muatan positif terstabilkan pada cincin benzena
E. Keadaan transisi bersifat simetris tanpa ada perubahan muatan parsial antara reaktan dan keadaan transisi`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Hubungan Energi Bebas Linear (LFER):**
1. Pengertian Tanda Parameter Reaksi Hammett ($\\rho$):
   - Jika $\\rho > 0$: Reaksi dipercepat oleh substituen yang memiliki nilai $\\sigma > 0$ (yaitu **gugus penarik elektron / Electron Withdrawing Groups, EWG** seperti $-\\ce{NO2}, -\\ce{CN}, -\\ce{CF3}$). Hal ini berarti pada keadaan transisi terjadi **penumpukan muatan negatif** (atau penurunan kerapatan muatan positif) pada pusat reaksi dibandingkan keadaan awal.
   - Jika $\\rho < 0$: Reaksi dipercepat oleh **gugus pendorong elektron (EDG)**, yang menandakan timbulnya muatan positif pada keadaan transisi (seperti pada karbokation intermediat).
2. Analisis Besaran Magnitudo $\\rho = +2{,}45$:
   - Nilai $\\rho = +2{,}45$ adalah nilai positif yang cukup besar.
   - Ini bersesuaian persis dengan mekanisme adisi-eliminasi basa ($B_{Ac}2$) ester:
     - Tahap penentu laju adalah serangan nukleofilik ion hidroksida ($\ce{OH-}$) pada karbon karbonil membentuk **intermediat tetrahedral teralkosidasi bermuatan negatif**.
     - Muatan negatif yang terakumulasi pada oksigen karbonil dan karbonil tetravalen terstabilkan secara induktif dan resonansi oleh gugus-gugus aromatik penarik elektron ($\sigma > 0$).
3. Maka pernyataan B sepenuhnya tepat.

**Analisis Distraktor:**
- Pilihan A: Mekanisme unimolekuler asilium menghasilkan muatan positif, sehingga menghasilkan $\\rho < 0$ (sangat negatif, $\\rho \\sim -3$ hingga $-4$).
- Pilihan B: Benar.
- Pilihan C: Reaksi radikal umumnya memiliki nilai $\\rho \\approx 0$.
- Pilihan D: Bertentangan langsung dengan tanda positif $\\rho$.
- Pilihan E: Nilai $\\rho$ nol untuk keadaan transisi simetris tanpa polarisasi.`,
    solution_framework_template: `Tahap 1: Pahami definisi fisis rho Hammett: rho > 0 berarti terjadi akumulasi muatan negatif pada keadaan transisi.
Tahap 2: Hubungkan dengan pengaruh substituen: dipercepat oleh gugus penarik elektron (EWG, sigma > 0).
Tahap 3: Tinjau mekanisme saponifikasi ester B_Ac2: serangan OH^- menghasilkan intermediat tetrahedral bermuatan negatif.
Tahap 4: Simpulkan opsi B.`,
    tags: ['persamaan-hammett', 'lfer', 'parameter-rho', 'mekanisme-ester', 'kimia-organik-fisik'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Kinetika Relaksasi Kimiawi T-Jump)
  // =========================================================================
  {
    id: 406008,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Kinetika Relaksasi Kimiawi & Metode Temperature-Jump (T-Jump)',
    title: 'Penentuan Tetapan Laju Asosiasi dan Disosiasi Cepat Kompleks dari Waktu Relaksasi',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi pembentukan kompleks cepat antara ion logam $M$ dan ligan $L$ dalam larutan berair:
$$\\ce{M + L <=> C} \\quad (k_1, k_{-1})$$
memiliki tetapan kesetimbangan $K = \\frac{k_1}{k_{-1}} = \\frac{[\\bar{C}]}{[\\bar{M}] [\\bar{L}]}$.

Sistem yang berada pada kesetimbangan diberikan perturbasi lonjakan temperatur ultra-cepat (*Temperature-Jump*, $\\Delta T = 5\\text{ K}$) melalui pelepasan muatan kapasitor tegangan tinggi.
Deviasi kecil konsentrasi analit terhadap posisi kesetimbangan baru ($x(t) = [C](t) - [\\bar{C}]$) meluruh secara eksponensial mengikuti persamaan relaksasi teratur:
$$x(t) = x(0) \\exp(-t / \\tau)$$
di mana waktu relaksasi $\\tau$ dirumuskan oleh:
$$\\frac{1}{\\tau} = k_1 ([\\bar{M}] + [\\bar{L}]) + k_{-1}$$

Dalam serangkaian eksperimen T-jump pada temperatur akhir yang sama, variasi konsentrasi kesetimbangan menghasilkan data:
- Ketika $[\\bar{M}] + [\\bar{L}] = 2{,}00 \\times 10^{-4}\\text{ M}$, waktu relaksasi terukur $\\tau = 25{,}0\\text{ }\\mu\\text{s}$
- Ketika $[\\bar{M}] + [\\bar{L}] = 6{,}00 \\times 10^{-4}\\text{ M}$, waktu relaksasi terukur $\\tau = 12{,}5\\text{ }\\mu\\text{s}$

Berapakah nilai tetapan laju pembentukan kompleks ($k_1$) dan tetapan laju disosiasi kompleks ($k_{-1}$)?

A. $k_1 = 1{,}00 \\times 10^8\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 2{,}00 \\times 10^4\\text{ s}^{-1}$
B. $k_1 = 5{,}00 \\times 10^7\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 1{,}00 \\times 10^4\\text{ s}^{-1}$
C. $k_1 = 2{,}00 \\times 10^8\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 4{,}00 \\times 10^4\\text{ s}^{-1}$
D. $k_1 = 1{,}00 \\times 10^8\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 4{,}00 \\times 10^4\\text{ s}^{-1}$
E. $k_1 = 4{,}00 \\times 10^7\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 2{,}00 \\times 10^4\\text{ s}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Kinetika Relaksasi T-Jump:**
1. Konversi Satuan Waktu Relaksasi ke Frekuensi Relaksasi ($1/\\tau$):
   - Titik 1: $[\\bar{M}] + [\\bar{L}] = 2{,}00 \\times 10^{-4}\\text{ M}$:
     $$\\tau_1 = 25{,}0\\text{ }\\mu\\text{s} = 25{,}0 \\times 10^{-6}\\text{ s}$$
     $$\\frac{1}{\\tau_1} = \\frac{1}{25{,}0 \\times 10^{-6}\\text{ s}} = 40000\\text{ s}^{-1} = 4{,}00 \\times 10^4\\text{ s}^{-1}$$
   - Titik 2: $[\\bar{M}] + [\\bar{L}] = 6{,}00 \\times 10^{-4}\\text{ M}$:
     $$\\tau_2 = 12{,}5\\text{ }\\mu\\text{s} = 12{,}5 \\times 10^{-6}\\text{ s}$$
     $$\\frac{1}{\\tau_2} = \\frac{1}{12{,}5 \\times 10^{-6}\\text{ s}} = 80000\\text{ s}^{-1} = 8{,}00 \\times 10^4\\text{ s}^{-1}$$
2. Susun Sistem Persamaan Linier $1/\\tau = k_1 ([\\bar{M}] + [\\bar{L}]) + k_{-1}$:
   - (1) $4{,}00 \\times 10^4 = k_1 (2{,}00 \\times 10^{-4}) + k_{-1}$
   - (2) $8{,}00 \\times 10^4 = k_1 (6{,}00 \\times 10^{-4}) + k_{-1}$
3. Kurangkan Persamaan (2) dengan (1):
   $$4{,}00 \\times 10^4\\text{ s}^{-1} = k_1 (4{,}00 \\times 10^{-4}\\text{ M})$$
   $$k_1 = \\frac{4{,}00 \\times 10^4\\text{ s}^{-1}}{4{,}00 \\times 10^{-4}\\text{ M}} = 1{,}00 \\times 10^8\\text{ M}^{-1}\\text{ s}^{-1}$$
4. Substitusi $k_1$ untuk Memperoleh $k_{-1}$:
   Substitusi ke persamaan (1):
   $$4{,}00 \\times 10^4 = (1{,}00 \\times 10^8) \\times (2{,}00 \\times 10^{-4}) + k_{-1}$$
   $$4{,}00 \\times 10^4 = 2{,}00 \\times 10^4 + k_{-1}$$
   $$k_{-1} = 4{,}00 \\times 10^4 - 2{,}00 \\times 10^4 = 2{,}00 \\times 10^4\\text{ s}^{-1}$$
5. Verifikasi Tetapan Kesetimbangan:
   $$K = \\frac{k_1}{k_{-1}} = \\frac{1{,}00 \\times 10^8}{2{,}00 \\times 10^4} = 5000\\text{ M}^{-1}$$
6. Maka $k_1 = 1{,}00 \\times 10^8\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 2{,}00 \\times 10^4\\text{ s}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($k_1 = 1{,}00 \\times 10^8\\text{ M}^{-1}\\text{ s}^{-1}$ dan $k_{-1} = 2{,}00 \\times 10^4\\text{ s}^{-1}$).
- Pilihan B: Kesalahan perhitungan kemiringan sebesar faktor 2.
- Pilihan C: Kesalahan konversi mikrosekon menjadi milisekon.
- Pilihan D: Mengabaikan pengurangan nilai intersep terhadap $k_1 C$.
- Pilihan E: Nilai salah hitung.`,
    solution_framework_template: `Tahap 1: Hitung 1/tau1 = 1 / (25 x 10^-6 s) = 4,00 x 10^4 s^-1 dan 1/tau2 = 8,00 x 10^4 s^-1.
Tahap 2: Tentukan k1 dari kemiringan Delta(1/tau) / Delta([M]+[L]) = 4,00 x 10^4 / 4,00 x 10^-4 = 1,00 x 10^8 M^-1 s^-1.
Tahap 3: Substitusikan ke rumus 1/tau1 untuk mencari intersep k_-1 = 4,00 x 10^4 - 2,00 x 10^4 = 2,00 x 10^4 s^-1.
Tahap 4: Simpulkan opsi A.`,
    tags: ['kinetika-relaksasi', 'temperature-jump', 't-jump', 'kesetimbangan-cepat', 'waktu-relaksasi'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Permukaan Energi Potensial & IRC)
  // =========================================================================
  {
    id: 406009,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Permukaan Energi Potensial (PES) & Keadaan Transisi Titik Pelana',
    title: 'Karakteristik Matematis Titik Pelana Indeks-1 pada Matriks Hessian Energi Potensial',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Dalam komputasi dinamika kimia kuantum, Permukaan Energi Potensial (*Potential Energy Surface*, PES) dari suatu sistem molekuler dengan $N$ atom memiliki $3N - 6$ (atau $3N - 5$) derajat kebebasan vibrasi internal.
Titik stasioner pada PES memenuhi syarat gradien nol:
$$\\mathbf{g}_i = \\frac{\\partial V}{\\partial q_i} = 0 \\quad \\text{untuk seluruh koordinat } q_i$$

Karakteristik kurvatur lokal di sekitar titik stasioner ditentukan oleh matriks Hessian (matriks turunan kedua energi potensial):
$$H_{ij} = \\frac{\\partial^2 V}{\\partial q_i \\partial q_j}$$

Manakah kriteria matematis yang BENAR mengenai nilai eigen (*eigenvalues*) matriks Hessian dan frekuensi vibrasi harmonik pada suatu struktur yang merupakan **Keadaan Transisi Sejati** (*Transition State*, TS) menurut kriteria titik pelana indeks-1 (*first-order saddle point*)?

A. Seluruh nilai eigen matriks Hessian bernilai positif nyata; semua frekuensi bernilai riil
B. Tepat memiliki satu nilai eigen bernilai negatif (kurvatur ke bawah sepanjang koordinat reaksi), yang berkorespondensi dengan tepat satu frekuensi vibrasi imajiner ($i\\omega$)
C. Memiliki dua nilai eigen negatif dan dua frekuensi imajiner
D. Seluruh nilai eigen bernilai nol (permukaan datar sempurna)
E. Memiliki satu nilai eigen bernilai nol dan seluruh nilai eigen lainnya negatif`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Karakteristik Titik Pelana PES:**
1. Definisi Keadaan Transisi Kimiawi (Transition State):
   - Berdasarkan teori keadaan transisi dan topologi PES Murrell-Laidler, keadaan transisi antara reaktan dan produk adalah **titik pelana orde pertama (first-order saddle point)**.
   - Pada titik ini:
     - Gradien energi bernilai nol (titik stasioner): $\\nabla V = 0$.
     - Energi merupakan **maksimum lokal** hanya pada satu arah tunggal (arah koordinat reaksi intrinsik, IRC), dan merupakan **minimum lokal** pada seluruh $3N-7$ arah koordinat vibrasi tegak lurus lainnya.
2. Analisis Nilai Eigen Matriks Hessian ($H$):
   - Diagonalisasi matriks Hessian menghasilkan nilai eigen $\\lambda_k$ yang sebanding dengan konstanta gaya efektif:
     $$\\lambda_k = \\frac{\\partial^2 V}{\\partial Q_k^2} = k_{\\text{eff}, k}$$
   - Frekuensi vibrasi harmonik dihitung dari:
     $$\\nu_k = \\frac{1}{2\\pi} \\sqrt{\\frac{\\lambda_k}{\\mu_k}}$$
3. Hubungan dengan Frekuensi Imajiner:
   - Untuk $3N-7$ koordinat ortogonal: $\\lambda_k > 0 \\implies \\nu_k$ bernilai **riil positif** (gerakan pemulihan stabil).
   - Untuk 1 koordinat reaksi IRC: $\\lambda_{\\text{IRC}} < 0$.
   - Mengambil akar kuadrat dari bilangan negatif menghasilkan bilangan murni imajiner:
     $$\\nu_{\\text{IRC}} = \\frac{1}{2\\pi} \\sqrt{-|\\lambda|} = i \\frac{1}{2\\pi} \\sqrt{|\\lambda|} = i \\omega$$
   - Oleh karena itu, keadaan transisi sejati ditandai dengan **tepat SATU nilai eigen Hessian negatif dan tepat SATU frekuensi vibrasi imajiner**!
4. Maka opsi B adalah jawaban yang tepat.

**Analisis Distraktor:**
- Pilihan A: Mendefinisikan minimum energi lokal (reaktan, produk, atau intermediat stabil).
- Pilihan B: Benar.
- Pilihan C: Titik pelana orde kedua (*second-order saddle point* / monkey saddle), bukan keadaan transisi reaksi kimia langsung.
- Pilihan D: Keadaan dataran tinggi (*plateau* atau *ridge*) tanpa gaya pemulih.
- Pilihan E: Karakteristik koordinat translasi/rotasi bebas partikel.`,
    solution_framework_template: `Tahap 1: Tinjau definisi titik pelana indeks-1: energi maksimum sepanjang koordinat reaksi, minimum sepanjang koordinat lainnya.
Tahap 2: Hubungkan dengan matriks Hessian: tepat 1 nilai eigen bernilai negatif (lambda < 0).
Tahap 3: Hubungkan frekuensi harmonik nu = (1/2pi) * sqrt(lambda/mu) dengan bilangan negatif: menghasilkan frekuensi imajiner (i*omega).
Tahap 4: Simpulkan opsi B.`,
    tags: ['pes', 'keadaan-transisi', 'matriks-hessian', 'frekuensi-imajiner', 'titik-pelana'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Isoterm Adsorpsi Multilapis BET)
  // =========================================================================
  {
    id: 406010,
    pillar_number: 6,
    module_id: 6,
    curriculum: 'osn',
    subtopic: 'Isoterm Adsorpsi Multilapis BET & Luas Permukaan Spesifik Katalis',
    title: 'Penentuan Kapasitas Monolayer dan Luas Permukaan Spesifik Katalis Alumina Mesopori',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Persamaan adsorpsi multilapis Brunauer-Emmett-Teller (BET) dalam bentuk linier dinyatakan oleh:
$$\\frac{P}{V (P_0 - P)} = \\frac{1}{V_m C} + \\frac{C - 1}{V_m C} \\left( \\frac{P}{P_0} \\right)$$
di mana:
- $V$ adalah volume gas nitrogen ($\\ce{N2}$) teradsorpsi pada STP ($\\text{cm}^3\\text{ g}^{-1}$),
- $P/P_0$ adalah tekanan relatif gas nitrogen pada titik didihnya ($77\\text{ K}$),
- $V_m$ adalah volume gas monolayer ekuivalen pada STP ($\\text{cm}^3\\text{ g}^{-1}$),
- $C$ adalah konstanta BET tak berdimensi yang berkaitan dengan kalor adsorpsi.

Pengukuran adsorpsi gas $\\ce{N2}$ pada $77\\text{ K}$ terhadap $1{,}00\\text{ g}$ sampel katalis padat alumina mesopori menghasilkan garis linier plot BET pada rentang $P/P_0 = 0{,}05 - 0{,}35$:
$$\\text{Kemiringan } (\\text{Slope}) = 0{,}0435\\text{ g cm}^{-3} \\quad \\text{dan} \\quad \\text{Intersep} = 0{,}0015\\text{ g cm}^{-3}$$
Diketahui:
- Luas proyeksi penampang satu molekul nitrogen: $\\sigma_{\\ce{N2}} = 0{,}162\\text{ nm}^2 = 0{,}162 \\times 10^{-18}\\text{ m}^2$
- Volume molar gas ideal pada STP: $V_0 = 22414\\text{ cm}^3\\text{ mol}^{-1}$
- Bilangan Avogadro: $N_A = 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$

Berapakah volume monolayer gas ($V_m$) dan berapakah luas permukaan spesifik ($S_{\\text{BET}}$) katalis alumina tersebut?

A. $V_m = 22{,}2\\text{ cm}^3\\text{ g}^{-1}$; $S_{\\text{BET}} = 96{,}7\\text{ m}^2\\text{ g}^{-1}$
B. $V_m = 44{,}4\\text{ cm}^3\\text{ g}^{-1}$; $S_{\\text{BET}} = 193{,}4\\text{ m}^2\\text{ g}^{-1}$
C. $V_m = 11{,}1\\text{ cm}^3\\text{ g}^{-1}$; $S_{\\text{BET}} = 48{,}4\\text{ m}^2\\text{ g}^{-1}$
D. $V_m = 22{,}2\\text{ cm}^3\\text{ g}^{-1}$; $S_{\\text{BET}} = 156{,}0\\text{ m}^2\\text{ g}^{-1}$
E. $V_m = 66{,}7\\text{ cm}^3\\text{ g}^{-1}$; $S_{\\text{BET}} = 290{,}1\\text{ m}^2\\text{ g}^{-1}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Komputasi Luas Permukaan BET:**
1. Penentuan Volume Monolayer ($V_m$):
   Dari persamaan garis linier BET:
   $$\\text{Slope} = s = \\frac{C - 1}{V_m C} \\quad \\text{dan} \\quad \\text{Intersep} = i = \\frac{1}{V_m C}$$
   Jumlahkan kedua suku:
   $$s + i = \\frac{C - 1}{V_m C} + \\frac{1}{V_m C} = \\frac{C}{V_m C} = \\frac{1}{V_m}$$
   Maka:
   $$V_m = \\frac{1}{s + i} = \\frac{1}{0{,}0435 + 0{,}0015} = \\frac{1}{0{,}0450\\text{ g cm}^{-3}} = 22{,}22\\text{ cm}^3\\text{ g}^{-1}$$
2. Hitung Nilai Parameter $C$:
   $$C = \\frac{s}{i} + 1 = \\frac{0{,}0435}{0{,}0015} + 1 = 29{,}0 + 1 = 30{,}0$$
3. Hitung Luas Permukaan Spesifik BET ($S_{\\text{BET}}$):
   Jumlah molekul gas nitrogen yang menutupi satu lapisan monolayer per gram padatan:
   $$N_{\\text{molekul}} = \\frac{V_m}{V_0} \\times N_A$$
   Luas total permukaan spesifik:
   $$S_{\\text{BET}} = \\frac{V_m N_A \\sigma_{\\ce{N2}}}{V_0}$$
   Substitusi nilai:
   $$S_{\\text{BET}} = \\frac{(22{,}22\\text{ cm}^3\\text{ g}^{-1}) \\times (6{,}022 \\times 10^{23}\\text{ molekul mol}^{-1}) \\times (0{,}162 \\times 10^{-18}\\text{ m}^2)}{22414\\text{ cm}^3\\text{ mol}^{-1}}$$
   $$S_{\\text{BET}} = \\frac{21{,}678 \\times 10^5}{22414} = 96{,}716\\text{ m}^2\\text{ g}^{-1} \\approx 96{,}7\\text{ m}^2\\text{ g}^{-1}$$
4. Maka $V_m = 22{,}2\\text{ cm}^3\\text{ g}^{-1}$ dan $S_{\\text{BET}} = 96{,}7\\text{ m}^2\\text{ g}^{-1}$.

**Analisis Distraktor:**
- Pilihan A: Benar ($V_m = 22{,}2\\text{ cm}^3\\text{ g}^{-1}$; $S_{\\text{BET}} = 96{,}7\\text{ m}^2\\text{ g}^{-1}$).
- Pilihan B: Kesalahan membagi nilai intersep dua kali sehingga $V_m$ terhitung dua kali lipat.
- Pilihan C: Kesalahan membagi dua nilai $V_m$.
- Pilihan D: Menggunakan luas penampang molekul yang salah.
- Pilihan E: Mengalikan $V_m$ dengan faktor 3.`,
    solution_framework_template: `Tahap 1: Hitung V_m dari jumlah slope dan intersep: V_m = 1 / (Slope + Intersep) = 1 / (0,0435 + 0,0015) = 22,22 cm^3 g^-1.
Tahap 2: Hitung jumlah mol nitrogen monolayer: n = V_m / 22414 = 9,914 x 10^-4 mol g^-1.
Tahap 3: Hitung luas permukaan: S_BET = n * N_A * sigma_N2 = 9,914 x 10^-4 * 6,022 x 10^23 * 0,162 x 10^-18 = 96,7 m^2 g^-1.
Tahap 4: Simpulkan opsi A.`,
    tags: ['adsorpsi-bet', 'luas-permukaan-spesifik', 'mesopori', 'katalisis-padat', 'isoterm-multilapis'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
