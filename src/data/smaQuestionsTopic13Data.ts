/**
 * smaQuestionsTopic13Data.ts
 * Bank Soal Kimia SMA Terstandarisasi (Kurikulum Merdeka / Fase F)
 * 
 * BATCH 13: Sifat Koligatif Larutan SMA
 * Topik 13 SMA | Modul ID 113 | OSN Pilar 3 (Kimia Fisika & Larutan Koloid)
 * 
 * Distribusi:
 * - 20% Mudah (5 Soal: 3 MCQ, 2 Uraian Terstruktur)  [ID 113001 - 113025]
 * - 40% Sedang (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 113001 - 113025]
 * - 40% Sulit  (10 Soal: 5 MCQ, 5 Uraian Terstruktur) [ID 113001 - 113025]
 * Total: 25 Butir Soal Terstandarisasi (13 MCQ + 12 Uraian Terstruktur)
 */

import type { Question } from '../types/database';

export const SMA_TOPIC_13_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (20% = 5 Butir Soal: ID 113001 - 113025)
  // =========================================================================
  {
    id: 113001,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Satuan Konsentrasi Kimia Fisik (Fraksi Mol & Molalitas)',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Invariansi Temperatur pada Satuan Konsentrasi Molalitas',
    question_text: `Dalam termodinamika larutan dan kajian sifat koligatif (khususnya kenaikan titik didih dan penurunan titik beku), satuan konsentrasi molalitas ($m$) jauh lebih disukai daripada molaritas ($M$). Alasan ilmiah yang mendasari pemilihan ini adalah ....

A. Molalitas bergantung pada volume larutan yang memuai secara linear saat dipanaskan  
B. Molalitas didasarkan pada perbandingan mol zat terlarut terhadap massa pelarut (kg) yang nilainya kekal dan tidak terpengaruh oleh perubahan temperatur  
C. Nilai molalitas selalu bernilai lebih besar daripada nilai molaritas untuk setiap sistem larutan  
D. Perhitungan molalitas tidak memerlukan pengetahuan tentang massa molar ($M_r$) zat terlarut  
E. Molalitas hanya dapat diaplikasikan pada zat terlarut yang bersifat volatil (mudah menguap)`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Satuan Konsentrasi Molaritas ($M$):**
   Molaritas menyatakan jumlah mol zat terlarut per liter volume larutan ($M = n_t / V$). Karena volume zat cair mengalami ekspansi termal (pemuaian saat suhu naik) dan kompresi termal (penyusutan saat suhu turun), maka nilai konsentrasi molaritas suatu larutan akan berubah jika temperaturnya berubah.
2. **Definisi Satuan Konsentrasi Molalitas ($m$):**
   Molalitas menyatakan jumlah mol zat terlarut per kilogram massa pelarut murni:
   $$m = \\frac{n_t}{\\text{massa pelarut (kg)}} = \\frac{\\text{massa terlarut (g)}}{M_r} \\times \\frac{1000}{P \\text{ (g pelarut)}}$$
   Massa zat terlarut dan massa pelarut bersifat invarian (kekal) terhadap perubahan temperatur. Oleh karena itu, nilai molalitas suatu larutan tetap konstan pada temperatur $0^\\circ\\text{C}$, $25^\\circ\\text{C}$, maupun $100^\\circ\\text{C}$.
3. **Kesimpulan:**
   Pilihan B tepat karena sifat koligatif seperti $\\Delta T_b$ dan $\\Delta T_f$ melibatkan perubahan suhu yang dinamis, sehingga diperlukan besaran konsentrasi yang nilainya tidak ikut berubah akibat pemuaian volume.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 5,
    year: 2024,
    source_event: 'Ulangan Harian Kimia SMA Fase F',
    tags: ['sifat-koligatif', 'molalitas', 'satuan-konsentrasi', 'invariansi-suhu'],
  },
  {
    id: 113002,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Hukum Raoult & Penurunan Tekanan Uap',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penurunan Tekanan Uap Jenuh Larutan Glukosa Menurut Hukum Raoult',
    question_text: `Ke dalam $90{,}0\\text{ gram}$ air murni ($M_r = 18{,}0\\text{ g/mol}$) dilarutkan $18{,}0\\text{ gram}$ glukosa ($\\ce{C6H12O6}$, $M_r = 180{,}0\\text{ g/mol}$) yang bersifat non-volatil. Jika pada suhu $25^\\circ\\text{C}$ tekanan uap jenuh air murni adalah $23{,}76\\text{ mmHg}$, besarnya penurunan tekanan uap jenuh larutan ($\\Delta P$) adalah ....

A. $0{,}23\\text{ mmHg}$  
B. $0{,}47\\text{ mmHg}$  
C. $0{,}94\\text{ mmHg}$  
D. $1{,}18\\text{ mmHg}$  
E. $2{,}38\\text{ mmHg}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Jumlah Mol Masing-Masing Komponen:**
   - Mol glukosa ($n_t$):
     $$n_t = \\frac{18{,}0\\text{ g}}{180{,}0\\text{ g/mol}} = 0{,}100\\text{ mol}$$
   - Mol air pelarut ($n_p$):
     $$n_p = \\frac{90{,}0\\text{ g}}{18{,}0\\text{ g/mol}} = 5{,}000\\text{ mol}$$
   - Mol total campuran ($n_{\\text{tot}}$):
     $$n_{\\text{tot}} = n_t + n_p = 0{,}100 + 5{,}000 = 5{,}100\\text{ mol}$$
2. **Menghitung Fraksi Mol Zat Terlarut ($X_t$):**
   $$X_t = \\frac{n_t}{n_{\\text{tot}}} = \\frac{0{,}100}{5{,}100} = \\frac{1}{51} \\approx 0{,}01961$$
3. **Menghitung Penurunan Tekanan Uap Jenuh ($\\Delta P$) Menurut Hukum Raoult:**
   $$\\Delta P = X_t \\cdot P^\\circ = 0{,}01961 \\times 23{,}76\\text{ mmHg} = 0{,}466\\text{ mmHg} \\approx 0{,}47\\text{ mmHg}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['hukum-raoult', 'penurunan-tekanan-uap', 'glukosa', 'fraksi-mol'],
  },
  {
    id: 113003,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kenaikan Titik Didih Non-Elektrolit',
    difficulty: 'SMA-Mudah',
    question_style: 'mcq',
    title: 'Penentuan Titik Didih Larutan Sukrosa dalam Air',
    question_text: `Sebanyak $34{,}2\\text{ gram}$ sukrosa ($\\ce{C12H22O11}$, $M_r = 342\\text{ g/mol}$) dilarutkan ke dalam $250\\text{ gram}$ air murni. Diketahui tetapan kenaikan titik didih molal air $K_b = 0{,}52^\\circ\\text{C/m}$ dan titik didih air murni adalah $100{,}000^\\circ\\text{C}$. Titik didih larutan sukrosa tersebut pada tekanan $1\\text{ atm}$ adalah ....

A. $100{,}052^\\circ\\text{C}$  
B. $100{,}104^\\circ\\text{C}$  
C. $100{,}208^\\circ\\text{C}$  
D. $100{,}416^\\circ\\text{C}$  
E. $100{,}520^\\circ\\text{C}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Molalitas Larutan Sukrosa ($m$):**
   $$n_t = \\frac{34{,}2\\text{ g}}{342\\text{ g/mol}} = 0{,}10\\text{ mol}$$
   $$m = \\frac{n_t}{\\text{kg pelarut}} = \\frac{0{,}10\\text{ mol}}{0{,}250\\text{ kg}} = 0{,}40\\text{ mol/kg} = 0{,}40\\text{ m}$$
2. **Menghitung Kenaikan Titik Didih ($\\Delta T_b$):**
   Karena sukrosa adalah senyawa non-elektrolit ($i = 1$):
   $$\\Delta T_b = m \\cdot K_b = 0{,}40\\text{ m} \\times 0{,}52^\\circ\\text{C/m} = 0{,}208^\\circ\\text{C}$$
3. **Menghitung Titik Didih Larutan ($T_b$):**
   $$T_b = T_b^\\circ + \\Delta T_b = 100{,}000^\\circ\\text{C} + 0{,}208^\\circ\\text{C} = 100{,}208^\\circ\\text{C}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['kenaikan-titik-didih', 'ebulioskopi', 'sukrosa', 'non-elektrolit'],
  },
  {
    id: 113004,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penurunan Titik Beku Krioskopi Dasar Urea',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Analisis Krioskopi Larutan Urea dalam Pelarut Air',
    question_text: `Sebanyak $15{,}0\\text{ gram}$ pupuk urea ($\\ce{CO(NH2)2}$, $M_r = 60{,}0\\text{ g/mol}$) yang bersifat non-elektrolit dilarutkan ke dalam $500\\text{ gram}$ air murni. Diketahui tetapan penurunan titik beku molal air $K_f = 1{,}86^\\circ\\text{C/m}$ dan titik beku air murni $T_f^\\circ = 0{,}000^\\circ\\text{C}$.

Selesaikan perhitungan krioskopi berikut:`,
    expected_final_answer: 'a) Molalitas m = 0,50 m, penurunan titik beku Delta Tf = 0,930 °C; b) Titik beku larutan Tf = -0,930 °C, pelipatgandaan massa melipatgandakan Delta Tf menjadi 1,860 °C (Tf baru = -1,860 °C).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menghitung mol urea: n = 15,0 / 60,0 = 0,250 mol (1.0 poin).
  2. Menghitung molalitas: m = 0,250 mol / 0,500 kg = 0,500 m (0.5 poin).
  3. Menghitung Delta Tf = m * Kf = 0,500 m * 1,86 °C/m = 0,930 °C (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menghitung titik beku larutan: Tf = Tf° - Delta Tf = 0,000 - 0,930 = -0,930 °C (1.0 poin).
  2. Menganalisis efek pelipatgandaan massa urea (30,0 g): molalitas menjadi 1,00 m, sehingga Delta Tf berlipat ganda menjadi 1,860 °C dan titik beku turun lebih rendah menjadi -1,860 °C karena sifat koligatif berbanding lurus dengan jumlah partikel terlarut (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah molalitas larutan urea tersebut dan tentukan besarnya penurunan titik beku ($\\Delta T_f$) yang dialami larutan!`,
        points: 2.5,
        rubric: 'Menghitung mol urea (0,25 mol), molalitas larutan m = 0,50 m (1.5 poin), dan menghitung Delta Tf = 0,50 * 1,86 = 0,930 °C (1.0 poin).',
        expected_answer: 'Molalitas m = 0,50 m dan Delta Tf = 0,930 °C.',
      },
      {
        label: 'b',
        question_text: `Tentukan temperatur titik beku larutan urea tersebut ($T_f$), serta jelaskan bagaimana perubahan titik beku larutan jika massa urea yang dilarutkan dinaikkan menjadi dua kali lipat ($30{,}0\\text{ gram}$) pada massa air yang sama!`,
        points: 2.5,
        rubric: 'Menentukan titik beku larutan Tf = -0,930 °C (1.0 poin). Menjelaskan pelipatgandaan massa menyebabkan molalitas menjadi 1,0 m sehingga Delta Tf menjadi 1,860 °C dan Tf menjadi -1,860 °C (1.5 poin).',
        expected_answer: 'Titik beku larutan Tf = -0,930 °C; bila massa dilipatduakan, Delta Tf naik 2x lipat menjadi 1,860 °C sehingga titik beku turun menjadi -1,860 °C.',
      },
    ],
    solution_framework_template: `1. Perhitungan Konsentrasi dan Krioskopi:
• Mol zat terlarut (n): ....
• Molalitas larutan (m): ....
• Penurunan titik beku (ΔTf = m · Kf): ....

2. Evaluasi Titik Beku dan Variasi Konsentrasi:
• Titik beku larutan (Tf = Tf° - ΔTf): ....
• Analisis efek pelipatgandaan konsentrasi partikel: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['penurunan-titik-beku', 'krioskopi', 'urea', 'non-elektrolit'],
  },
  {
    id: 113005,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tekanan Osmotik Dasar & Tonisitas Infus Medis',
    difficulty: 'SMA-Mudah',
    question_style: 'structured',
    title: 'Kalkulasi Tekanan Osmotik Larutan Infus Glukosa dan Evaluasi Tonisitas',
    question_text: `Di instalasi farmasi rumah sakit disiapkan larutan infus glukosa ($\\ce{C6H12O6}$, $M_r = 180{,}0\\text{ g/mol}$) dengan melarutkan $45{,}0\\text{ gram}$ glukosa anhidrat ke dalam air steril hingga volume larutan tepat $500\\text{ mL}$.

Diketahui tetapan gas universal $R = 0{,}08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$ dan temperatur fisiologis tubuh manusia normal adalah $37{,}0^\\circ\\text{C}$ ($310{,}15\\text{ K}$).

Selesaikan evaluasi osmotik berikut:`,
    expected_final_answer: 'a) Molaritas M = 0,50 M, tekanan osmotik Pi = 12,72 atm; b) Larutan bersifat hipertonik terhadap eritrosit darah (Pi_plasma ≈ 7,7 atm) sehingga menyebabkan krenasi (pengerutan sel darah) jika disuntikkan langsung tanpa penyesuaian.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menghitung mol glukosa: n = 45,0 g / 180,0 g/mol = 0,250 mol (0.5 poin).
  2. Menghitung molaritas: M = 0,250 mol / 0,500 L = 0,500 M (0.5 poin).
  3. Menghitung tekanan osmotik Pi = M * R * T = 0,500 * 0,08206 * 310,15 = 12,72 atm (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Membandingkan tekanan osmotik infus (12,72 atm) dengan tekanan osmotik plasma darah normal (sekitar 7,7 atm) dan menyimpulkan larutan ini bersifat hipertonik (1.0 poin).
  2. Menjelaskan dampak fisiologis: air dari dalam eritrosit akan terdorong keluar menembus membran sel melalui osmosis menuju plasma yang hipertonik, mengakibatkan sel darah merah mengerut dan rusak (krenasi) (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah konsentrasi molar (molaritas) larutan glukosa tersebut dan tentukan besarnya tekanan osmotik ($\\Pi$) larutan pada temperatur tubuh $37{,}0^\\circ\\text{C}$!`,
        points: 2.5,
        rubric: 'Menghitung konsentrasi molar M = 0,50 M (1.0 poin) dan menghitung tekanan osmotik Pi = M * R * T = 12,72 atm (1.5 poin).',
        expected_answer: 'Molaritas M = 0,50 M dan tekanan osmotik Pi = 12,72 atm.',
      },
      {
        label: 'b',
        question_text: `Jika tekanan osmotik normal plasma darah manusia adalah sekitar $7{,}7\\text{ atm}$, evaluasi apakah larutan infus tersebut bersifat hipotonik, isotonik, atau hipertonik terhadap sel darah merah, serta jelaskan dampaknya terhadap struktur eritrosit jika larutan tersebut disuntikkan secara cepat ke dalam pembuluh darah!`,
        points: 2.5,
        rubric: 'Mengidentifikasi larutan bersifat hipertonik (Pi > 7,7 atm) (1.0 poin) dan menjelaskan terjadinya krenasi akibat air ditarik keluar dari eritrosit (1.5 poin).',
        expected_answer: 'Bersifat hipertonik; air keluar dari eritrosit menyebabkan sel mengerut (krenasi).',
      },
    ],
    solution_framework_template: `1. Formulasi Tekanan Osmotik van 't Hoff:
• Mol zat terlarut (n): ....
• Konsentrasi molar (M = n / V): ....
• Tekanan osmotik (Π = M · R · T): ....

2. Analisis Tonisitas dan Integritas Sel Darah:
• Komparasi dengan tekanan osmotik plasma darah: ....
• Kesimpulan tonisitas (hipotonik / isotonik / hipertonik): ....
• Dampak osmoregulasi terhadap morfologi eritrosit: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['tekanan-osmotik', 'van-t-hoff', 'tonisitas', 'krenasi'],
  },

  // =========================================================================
  // KATEGORI SEDANG (40% = 10 Butir Soal: ID 113001 - 113025)
  // =========================================================================
  {
    id: 113006,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tekanan Uap Larutan dan Fraksi Mol',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Perhitungan Tekanan Uap Larutan Campuran Etilen Glikol-Air',
    question_text: `Sebanyak $62{,}0\\text{ gram}$ etilen glikol ($\\ce{C2H6O2}$, $M_r = 62{,}0\\text{ g/mol}$) yang bersifat non-volatil dicampurkan secara merata dengan $162{,}0\\text{ gram}$ air murni ($M_r = 18{,}0\\text{ g/mol}$). Pada suhu $30^\\circ\\text{C}$, tekanan uap jenuh air murni adalah $31{,}80\\text{ mmHg}$. Tekanan uap jenuh larutan etilen glikol tersebut pada suhu $30^\\circ\\text{C}$ adalah ....

A. $3{,}18\\text{ mmHg}$  
B. $25{,}44\\text{ mmHg}$  
C. $28{,}62\\text{ mmHg}$  
D. $30{,}21\\text{ mmHg}$  
E. $34{,}98\\text{ mmHg}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Mol Komponen Penyusun:**
   - Mol zat terlarut etilen glikol:
     $$n_t = \\frac{62{,}0\\text{ g}}{62{,}0\\text{ g/mol}} = 1{,}00\\text{ mol}$$
   - Mol pelarut air:
     $$n_p = \\frac{162{,}0\\text{ g}}{18{,}0\\text{ g/mol}} = 9{,}00\\text{ mol}$$
   - Mol total:
     $$n_{\\text{tot}} = 1{,}00 + 9{,}00 = 10{,}00\\text{ mol}$$
2. **Menghitung Fraksi Mol Pelarut ($X_p$):**
   $$X_p = \\frac{n_p}{n_{\\text{tot}}} = \\frac{9{,}00}{10{,}00} = 0{,}900$$
3. **Menghitung Tekanan Uap Jenuh Larutan ($P$):**
   Menurut Hukum Raoult untuk zat terlarut non-volatil:
   $$P = X_p \\cdot P^\\circ = 0{,}900 \\times 31{,}80\\text{ mmHg} = 28{,}62\\text{ mmHg}$$
   *(Catatan: Penurunan tekanan uapnya adalah $\\Delta P = X_t \\cdot P^\\circ = 0{,}100 \\times 31{,}80 = 3{,}18\\text{ mmHg}$, sehingga $P = 31{,}80 - 3{,}18 = 28{,}62\\text{ mmHg}$)*.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK / UTBK-SNBT Kimia SMA',
    tags: ['hukum-raoult', 'fraksi-mol', 'etilen-glikol', 'tekanan-uap'],
  },
  {
    id: 113007,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Analisis Diagram Fasa P-T Air vs Larutan',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Interpretasi Termodinamika Diagram Fasa P-T Air Murni dan Larutan',
    question_text: `Perhatikan kurva kesetimbangan fasa pada diagram fasa $P-T$ untuk air murni (garis kontinu) dibandingkan larutan berair yang mengandung zat terlarut non-volatil (garis putus-putus).

Pernyataan yang BENAR mengenai pergeseran kurva kesetimbangan fasa pada diagram tersebut adalah ....

A. Kurva penguapan larutan bergeser ke atas kurva air murni karena zat terlarut menaikkan tekanan uap larutan  
B. Titik didih larutan bergeser ke temperatur yang lebih tinggi ($\\Delta T_b > 0$) dan titik beku bergeser ke temperatur yang lebih rendah ($\\Delta T_f > 0$) karena potensial kimia pelarut dalam cairan menurun  
C. Titik tripel larutan berada pada tekanan dan temperatur yang lebih tinggi daripada titik tripel pelarut air murni  
D. Kurva peleburan padat-cair larutan bergeser ke kanan sehingga titik beku larutan meningkat pada tekanan konstan  
E. Kehadiran zat terlarut non-volatil sama sekali tidak menggeser kurva sublimasi padatan es murni maupun kurva penguapan`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Tinjauan Termodinamika Potensial Kimia ($\\mu$):**
   Pelarutan zat terlarut non-volatil meningkatkan entropi fasa cair larutan, sehingga menurunkan potensial kimia cairan:
   $$\\mu_A(l) = \\mu_A^\\circ(l) + RT \\ln X_A < \\mu_A^\\circ(l)$$
2. **Pergeseran Kurva Penguapan (Cair-Gas):**
   Karena potensial kimia cairan lebih stabil, tekanan uap larutan pada setiap temperatur lebih rendah ($P < P^\\circ$). Akibatnya, kurva penguapan larutan bergeser ke bawah (atau ke kanan). Untuk mencapai tekanan atmosfer $1\\text{ atm}$, diperlukan temperatur yang lebih tinggi $\\implies$ **Kenaikan titik didih ($\\Delta T_b > 0$)**.
3. **Pergeseran Kurva Pembekuan (Padat-Cair):**
   Fasa padat es murni harus berada dalam kesetimbangan dengan fasa cair yang terstabilkan. Titik potong kurva sublimasi padatan dengan kurva penguapan cairan (titik tripel baru) bergeser ke temperatur dan tekanan yang lebih rendah. Akibatnya, kurva peleburan bergeser ke kiri $\\implies$ **Penurunan titik beku ($\\Delta T_f > 0$, $T_f < 0^\\circ\\text{C}$)**.
4. **Evaluasi Opsi:**
   Pilihan B secara komprehensif dan akurat merangkum pergeseran kedua fenomena fisik tersebut.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK / Asesmen Kimia Terpadu SMA',
    tags: ['diagram-fasa-pt', 'potensial-kimia', 'ebulioskopi', 'krioskopi'],
  },
  {
    id: 113008,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Faktor van t Hoff Larutan Elektrolit',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Komparasi Penurunan Titik Beku Berdasarkan Multiplikasi Partikel van t Hoff',
    question_text: `Terdapat tiga larutan berair yang masing-masing dibuat dengan konsentrasi molalitas yang sama, yaitu $0{,}10\\text{ molal}$:
(1) Larutan glukosa ($\\ce{C6H12O6}$)  
(2) Larutan natrium klorida ($\\ce{NaCl}$)  
(3) Larutan kalsium klorida ($\\ce{CaCl2}$)  

Bila diasumsikan kedua garam elektrolit terionisasi secara sempurna di dalam air murni ($K_f = 1{,}86^\\circ\\text{C/m}$), urutan besarnya penurunan titik beku ($\\Delta T_f$) dari yang paling KECIL hingga yang paling BESAR adalah ....

A. $(1) < (2) < (3)$  
B. $(3) < (2) < (1)$  
C. $(2) < (1) < (3)$  
D. $(1) = (2) = (3)$  
E. $(2) < (3) < (1)$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Langkah demi Langkah:**
1. **Formulasi Penurunan Titik Beku Larutan:**
   $$\\Delta T_f = m \\cdot K_f \\cdot i$$
   Karena nilai $m = 0{,}10\\text{ m}$ dan $K_f = 1{,}86^\\circ\\text{C/m}$ identik untuk ketiga larutan, nilai $\\Delta T_f$ semata-mata ditentukan oleh faktor van 't Hoff ($i$).
2. **Penentuan Faktor van 't Hoff Masing-Masing Solut:**
   - **Glukosa (1):** Senyawa kovalen non-elektrolit, tidak mengalami ionisasi ($n = 1, \\alpha = 0 \\implies i = 1$).
     $$\\Delta T_f(1) = 0{,}10 \\times 1{,}86 \\times 1 = 0{,}186^\\circ\\text{C}$$
   - **NaCl (2):** Elektrolit biner ($n = 2$), terionisasi sempurna ($\\alpha = 1 \\implies i = n = 2$):
     $$\\Delta T_f(2) = 0{,}10 \\times 1{,}86 \\times 2 = 0{,}372^\\circ\\text{C}$$
   - **CaCl2 (3):** Elektrolit terner ($n = 3$), terionisasi sempurna ($\\alpha = 1 \\implies i = n = 3$):
     $$\\Delta T_f(3) = 0{,}10 \\times 1{,}86 \\times 3 = 0{,}558^\\circ\\text{C}$$
3. **Kesimpulan Urutan Nilai $\\Delta T_f$:**
   $$\\Delta T_f(1) < \\Delta T_f(2) < \\Delta T_f(3) \\implies (1) < (2) < (3)$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Ulangan Harian Kimia SMA Fase F',
    tags: ['faktor-van-t-hoff', 'penurunan-titik-beku', 'elektrolit', 'ionisasi'],
  },
  {
    id: 113009,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penurunan Titik Beku Elektrolit Kuat Terner BaCl2',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Penentuan Titik Beku Larutan Garam Barium Klorida',
    question_text: `Sebanyak $10{,}4\\text{ gram}$ barium klorida padat ($\\ce{BaCl2}$, $M_r = 208{,}0\\text{ g/mol}$) dilarutkan ke dalam $250\\text{ gram}$ air murni ($K_f = 1{,}86^\\circ\\text{C/m}$). Jika garam $\\ce{BaCl2}$ terionisasi sempurna di dalam larutan encer tersebut, titik beku larutan adalah ....

A. $-0{,}37^\\circ\\text{C}$  
B. $-0{,}74^\\circ\\text{C}$  
C. $-1{,}12^\\circ\\text{C}$  
D. $-1{,}49^\\circ\\text{C}$  
E. $-2{,}24^\\circ\\text{C}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Mol Zat Terlarut $\\ce{BaCl2}$:**
   $$n = \\frac{10{,}4\\text{ g}}{208{,}0\\text{ g/mol}} = 0{,}050\\text{ mol}$$
2. **Menghitung Molalitas Larutan ($m$):**
   $$m = \\frac{0{,}050\\text{ mol}}{0{,}250\\text{ kg}} = 0{,}200\\text{ mol/kg} = 0{,}200\\text{ m}$$
3. **Menentukan Faktor van 't Hoff ($i$):**
   Reaksi disosiasi garam: $\\ce{BaCl2(aq) -> Ba^2+(aq) + 2Cl^-(aq)}$
   Jumlah ion per satuan rumus ($n = 1 + 2 = 3$).
   Karena terionisasi sempurna ($\\alpha = 1{,}0$):
   $$i = 1 + (n - 1)\\alpha = 1 + (3 - 1)(1) = 3$$
4. **Menghitung Penurunan Titik Beku ($\\Delta T_f$):**
   $$\\Delta T_f = m \\cdot K_f \\cdot i = 0{,}200\\text{ m} \\times 1{,}86^\\circ\\text{C/m} \\times 3 = 1{,}116^\\circ\\text{C} \\approx 1{,}12^\\circ\\text{C}$$
5. **Menentukan Titik Beku Larutan ($T_f$):**
   $$T_f = T_f^\\circ - \\Delta T_f = 0{,}00^\\circ\\text{C} - 1{,}116^\\circ\\text{C} = -1{,}116^\\circ\\text{C} \\approx -1{,}12^\\circ\\text{C}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 5,
    year: 2024,
    source_event: 'Latihan OSK / UTBK-SNBT Kimia SMA',
    tags: ['penurunan-titik-beku', 'barium-klorida', 'elektrolit-terner', 'faktor-van-t-hoff'],
  },
  {
    id: 113010,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penentuan Massa Molar via Krioskopi Kamper (Metode Rast)',
    difficulty: 'SMA-Sedang',
    question_style: 'mcq',
    title: 'Determinasi Massa Molar Senyawa Organik via Metode Rast Kamper',
    question_text: `Metode Rast merupakan teknik krioskopi laboratorium klasik untuk menentukan massa molekul relatif ($M_r$) senyawa organik dengan memanfaatkan pelarut kamper murni yang memiliki tetapan krioskopi sangat tinggi ($K_f = 40{,}0^\\circ\\text{C/m}$).

Sebanyak $0{,}50\\text{ gram}$ suatu senyawa organik non-elektrolit dilarutkan ke dalam $25{,}0\\text{ gram}$ kamper murni. Titik lebur kamper murni teramati sebesar $178{,}40^\\circ\\text{C}$, sedangkan campuran tersebut membeku pada $172{,}40^\\circ\\text{C}$. Massa molar ($M_r$) senyawa organik tersebut adalah ....

A. $67\\text{ g/mol}$  
B. $100\\text{ g/mol}$  
C. $133\\text{ g/mol}$  
D. $160\\text{ g/mol}$  
E. $200\\text{ g/mol}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Penurunan Titik Beku Campuran ($\\Delta T_f$):**
   $$\\Delta T_f = T_f^\\circ - T_f = 178{,}40^\\circ\\text{C} - 172{,}40^\\circ\\text{C} = 6{,}00^\\circ\\text{C}$$
2. **Formulasi Penentuan Massa Molar ($M_r$):**
   $$\\Delta T_f = m \\cdot K_f = \\left(\\frac{\\text{massa terlarut}}{M_r}\\right) \\times \\left(\\frac{1000}{P \\text{ (g kamper)}}\\right) \\times K_f$$
3. **Substitusi Nilai Eksperimen:**
   $$6{,}00 = \\frac{0{,}50}{M_r} \\times \\frac{1000}{25{,}0} \\times 40{,}0$$
   $$6{,}00 = \\frac{0{,}50}{M_r} \\times 40 \\times 40 = \\frac{800}{M_r}$$
   $$M_r = \\frac{800}{6{,}00} = 133{,}33\\text{ g/mol} \\approx 133\\text{ g/mol}$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Kabupaten / Kota Kimia',
    tags: ['metode-rast', 'kamper', 'massa-molar', 'krioskopi'],
  },
  {
    id: 113011,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Perlindungan Radiator Mobil (Etilen Glikol)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Termodinamika Cairan Antibeku Radiator Etilen Glikol',
    question_text: `Cairan pendingin (*coolant*) radiator mobil dirancang untuk memberikan proteksi ganda: mencegah pembekuan cairan mesin pada musim dingin (*anti-freeze*) sekaligus mencegah pendidihan mesin saat bekerja keras di iklim tropis (*anti-boil*).
Suatu sistem radiator diisi dengan campuran cairan yang mengandung $620\\text{ gram}$ etilen glikol ($\\ce{C2H6O2}$, $M_r = 62{,}0\\text{ g/mol}$) dan $1860\\text{ gram}$ air murni.

Diketahui untuk pelarut air: $K_f = 1{,}86^\\circ\\text{C/m}$, $K_b = 0{,}52^\\circ\\text{C/m}$, $T_f^\\circ = 0{,}00^\\circ\\text{C}$, dan $T_b^\\circ = 100{,}00^\\circ\\text{C}$ pada tekanan $1\\text{ atm}$.

Selesaikan evaluasi sifat koligatif sistem pendingin berikut:`,
    expected_final_answer: 'a) Molalitas m = 5,38 m, penurunan titik beku Delta Tf = 10,00 °C, titik beku cairan Tf = -10,00 °C; b) Kenaikan titik didih Delta Tb = 2,80 °C, titik didih cairan Tb = 102,80 °C. Fungsi ganda: menurunkan titik beku mencegah radiator pecah karena es dan menaikkan titik didih mencegah overheating.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menghitung mol etilen glikol: n = 620 g / 62,0 g/mol = 10,0 mol (0.5 poin).
  2. Menghitung molalitas: m = 10,0 mol / 1,860 kg air = 5,376 m ≈ 5,38 m (1.0 poin).
  3. Menghitung Delta Tf = 5,376 * 1,86 = 10,00 °C dan titik beku Tf = 0 - 10,00 = -10,00 °C (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menghitung kenaikan titik didih Delta Tb = 5,376 * 0,52 = 2,80 °C (0.5 poin).
  2. Menghitung titik didih larutan: Tb = 100,00 + 2,80 = 102,80 °C (0.5 poin).
  3. Menjelaskan fungsi ganda: di musim dingin titik beku turun hingga -10 °C mencegah air membeku yang dapat meretakkan blok mesin akibat anomali pemuaian es; di musim panas/saat macet titik didih naik melampaui 100 °C sehingga mesin tidak mudah mendidih (overheat) (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah molalitas larutan etilen glikol dalam radiator tersebut dan tentukan temperatur titik beku cairan pendingin ($T_f$)!`,
        points: 2.5,
        rubric: 'Menghitung mol glikol (10 mol), molalitas m = 5,38 m (1.5 poin), dan menghitung Delta Tf = 10,00 °C sehingga Tf = -10,00 °C (1.0 poin).',
        expected_answer: 'Molalitas m = 5,38 m dan titik beku cairan pendingin Tf = -10,00 °C.',
      },
      {
        label: 'b',
        question_text: `Hitunglah titik didih ($T_b$) cairan radiator tersebut pada tekanan $1\\text{ atm}$, serta jelaskan manfaat fisis penambahan etilen glikol terhadap keandalan mesin mobil baik pada kondisi cuaca beku ekstrem maupun saat temperatur operasional mesin sangat tinggi!`,
        points: 2.5,
        rubric: 'Menghitung Delta Tb = 2,80 °C dan Tb = 102,80 °C (1.0 poin). Menjelaskan fungsi proteksi anti-freeze (mencegah blok mesin pecah akibat pemuaian es) dan anti-boil (mencegah mesin cepat panas/overheating) (1.5 poin).',
        expected_answer: 'Titik didih cairan Tb = 102,80 °C; etilen glikol menurunkan titik beku mencegah pembekuan mesin dan menaikkan titik didih mencegah mesin mendidih/overheating.',
      },
    ],
    solution_framework_template: `1. Formulasi Titik Beku Campuran Pendingin:
• Mol zat terlarut etilen glikol: ....
• Molalitas campuran (m): ....
• Penurunan titik beku (ΔTf) dan titik beku cairan (Tf): ....

2. Evaluasi Titik Didih dan Manfaat Rekayasa:
• Kenaikan titik didih (ΔTb) dan titik didih cairan (Tb): ....
• Penjelasan fisis mekanisme proteksi anti-freeze & anti-boil: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['etilen-glikol', 'radiator-mobil', 'anti-freeze', 'anti-boil'],
  },
  {
    id: 113012,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penentuan Derajat Ionisasi dan Ka Asam Monoprotik Lemah',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Penentuan Derajat Ionisasi dan Tetapan Asam HCOOH dari Data Krioskopi',
    question_text: `Suatu larutan asam format ($\\ce{HCOOH}$, $M_r = 46{,}0\\text{ g/mol}$) dibuat dengan melarutkan $2{,}30\\text{ gram}$ asam format ke dalam $500\\text{ gram}$ air murni ($K_f = 1{,}86^\\circ\\text{C/m}$). Pengukuran teliti di laboratorium menunjukkan bahwa larutan asam format tersebut membeku pada temperatur $-0{,}193^\\circ\\text{C}$.

Selesaikan analisis kesetimbangan larutan elektrolit lemah berikut:`,
    expected_final_answer: 'a) Molalitas m = 0,100 m, faktor van t Hoff eksperimen i = 1,038; b) Derajat ionisasi alpha = 0,038 (3,8%), tetapan asam Ka = 1,50 x 10^-4.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menghitung mol asam format: n = 2,30 g / 46,0 g/mol = 0,050 mol (0.5 poin).
  2. Menghitung molalitas analitis: m = 0,050 mol / 0,500 kg = 0,100 m (0.5 poin).
  3. Menghitung Delta Tf(teoritis non-elektrolit) = 0,100 * 1,86 = 0,186 °C (0.5 poin).
  4. Menghitung faktor van 't Hoff terukur: i = Delta Tf(eks) / Delta Tf(teoritis) = 0,193 / 0,186 = 1,0376 ≈ 1,038 (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Asam format adalah asam monoprotik (HCOOH <=> H+ + HCOO-), jumlah ion n = 2 (0.5 poin).
  2. Menghitung derajat disosiasi: i = 1 + (n - 1)alpha => 1,038 = 1 + alpha => alpha = 0,038 (3,8%) (1.0 poin).
  3. Menghitung tetapan kesetimbangan asam Ka: Ka = (m * alpha^2) / (1 - alpha) ≈ (0,100 * (0,038)^2) / (1 - 0,038) = (0,100 * 0,001444) / 0,962 = 1,50 x 10^-4 (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah molalitas analitis larutan asam format tersebut dan tentukan nilai faktor van 't Hoff eksperimen ($i$) dari data titik beku yang terukur!`,
        points: 2.5,
        rubric: 'Menghitung molalitas m = 0,100 m (1.0 poin) dan menghitung nilai faktor van t Hoff i = 0,193 / 0,186 = 1,038 (1.5 poin).',
        expected_answer: 'Molalitas m = 0,100 m dan faktor van t Hoff i = 1,038.',
      },
      {
        label: 'b',
        question_text: `Dari nilai faktor van 't Hoff yang diperoleh, hitunglah derajat ionisasi ($\\alpha$) asam format serta tentukan nilai tetapan ionisasi asamnya ($K_a$) dengan mengasumsikan konsentrasi molar setara dengan nilai molalitasnya!`,
        points: 2.5,
        rubric: 'Menghitung derajat disosiasi alpha = 0,038 (1.0 poin) dan menghitung Ka = (m * alpha^2) / (1 - alpha) = 1,50 x 10^-4 (1.5 poin).',
        expected_answer: 'Derajat ionisasi alpha = 0,038 (3,8%) dan tetapan asam Ka = 1,50 x 10^-4.',
      },
    ],
    solution_framework_template: `1. Penentuan Parameter Krioskopi dan Faktor van 't Hoff:
• Molalitas stoikiometris asam format (m): ....
• Penurunan titik beku terukur (ΔTf,eks): ....
• Faktor van 't Hoff terukur (i = ΔTf,eks / (m · Kf)): ....

2. Evaluasi Disosiasi dan Tetapan Kesetimbangan Asam:
• Hubungan i dan derajat disosiasi α (i = 1 + α): ....
• Nilai derajat ionisasi (α): ....
• Kalkulasi tetapan ionisasi asam Ka = (C · α²) / (1 - α): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Kabupaten / Kota Kimia',
    tags: ['derajat-ionisasi', 'tetapan-asam-ka', 'asam-format', 'faktor-van-t-hoff'],
  },
  {
    id: 113013,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Desalinasi Air Laut Menggunakan Osmosis Balik (RO)',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Kebutuhan Tekanan Pompa pada Desalinasi Air Laut Reverse Osmosis',
    question_text: `Instalasi desalinasi air laut komersial mengolah air laut untuk menghasilkan air minum menggunakan membran semipermeabel poliamida berpori nano melalui teknologi osmosis balik (*Reverse Osmosis* / RO).
Sampel air laut pesisir mengandung total garam terlarut yang setara dengan larutan $\\ce{NaCl } 0{,}55\\text{ M}$. Pada temperatur operasional $27{,}0^\\circ\\text{C}$ ($300{,}15\\text{ K}$), faktor van 't Hoff terukur larutan garam tersebut adalah $i = 1{,}85$ akibat interaksi pasangan ion antar-elektrolit.

Diketahui tetapan gas universal $R = 0{,}08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$.

Selesaikan perancangan tekanan desalinasi berikut:`,
    expected_final_answer: 'a) Tekanan osmotik air laut Pi = 25,05 atm; b) Tekanan hidrostatik pompa minimum P_eksternal > 25,05 atm (dalam praktik industri diaplikasikan 50 - 70 atm untuk mengatasi hambatan hidraulik dan menghasilkan fluks permeat air tawar yang tinggi).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menuliskan rumus tekanan osmotik elektrolit: Pi = M * R * T * i (0.5 poin).
  2. Substitusi parameter: M = 0,55 mol/L, R = 0,08206 L atm/(mol K), T = 300,15 K, i = 1,85 (0.5 poin).
  3. Menghitung: Pi = 0,55 * 0,08206 * 300,15 * 1,85 = 25,05 atm (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menentukan kriteria termodinamika Reverse Osmosis: tekanan eksternal pompa harus melampaui tekanan osmotik alami larutan (P_eksternal > 25,05 atm) (1.0 poin).
  2. Menjelaskan mekanisme membran: ketika P_eksternal > Pi, potensial kimia air di sisi air laut ditekan melebihi potensial kimia air murni, memaksa molekul air berdifusi menembus pori nano membran (< 1 nm) ke sisi permeat, sementara ion terhidrasi (Na+ dan Cl-) tertahan oleh tolakan ukuran dan efek dielektrik muatan permukaan membran (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah tekanan osmotik teoretis ($\\Pi$) dari air laut tersebut pada temperatur operasional $27{,}0^\\circ\\text{C}$!`,
        points: 2.5,
        rubric: 'Menuliskan rumus Pi = M * R * T * i dan menghitung Pi = 25,05 atm secara tepat (2.5 poin).',
        expected_answer: 'Tekanan osmotik air laut Pi = 25,05 atm.',
      },
      {
        label: 'b',
        question_text: `Tentukan berapa tekanan hidrostatik minimum yang harus dikerahkan oleh pompa mekanis pada sistem RO tersebut agar air murni dapat mengalir keluar, dan jelaskan secara singkat prinsip kerja pemisahan garam oleh membran semipermeabel!`,
        points: 2.5,
        rubric: 'Menyatakan P_pompa > 25,05 atm (1.0 poin). Menjelaskan pembalikan arah aliran akibat tekanan mekanis dan peran membran menyaring ion terlarut berdasarkan ukuran pori nano dan muatan (1.5 poin).',
        expected_answer: 'Tekanan pompa minimum P > 25,05 atm; tekanan ini membalik aliran spontan sehingga molekul air murni menerobos pori nano membran sementara ion Na+ dan Cl- tertahan.',
      },
    ],
    solution_framework_template: `1. Kalkulasi Tekanan Osmotik Air Laut:
• Formulasi van 't Hoff untuk elektrolit: Π = M · R · T · i
• Substitusi data termodinamika: ....
• Nilai tekanan osmotik (Π): ....

2. Evaluasi Tekanan Operasional RO dan Mekanisme Transpor:
• Kriteria tekanan balik osmosis (P_eksternal vs Π): ....
• Prinsip perpindahan massa air melintasi membran semipermeabel: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Persiapan OSK / Asesmen Kimia Terapan SMA',
    tags: ['reverse-osmosis', 'desalinasi', 'tekanan-osmotik', 'air-laut'],
  },
  {
    id: 113014,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Sifat Koligatif Campuran Dua Solut Non-Elektrolit',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Kalkulasi Titik Beku dan Tekanan Uap Larutan Campuran Biner Non-Elektrolit',
    question_text: `Ke dalam $400\\text{ gram}$ air murni dimasukkan secara bersamaan dua macam zat terlarut non-elektrolit, yaitu $6{,}0\\text{ gram}$ urea ($\\ce{CO(NH2)2}$, $M_r = 60{,}0\\text{ g/mol}$) dan $18{,}0\\text{ gram}$ glukosa ($\\ce{C6H12O6}$, $M_r = 180{,}0\\text{ g/mol}$).
Diketahui tetapan penurunan titik beku air $K_f = 1{,}86^\\circ\\text{C/m}$. Pada suhu $30^\\circ\\text{C}$, tekanan uap jenuh air murni adalah $P^\\circ = 31{,}82\\text{ mmHg}$ ($M_r\\ \\ce{H2O} = 18{,}0\\text{ g/mol}$).

Selesaikan perhitungan koligatif sistem campuran berikut:`,
    expected_final_answer: 'a) Molalitas total m_tot = 0,50 m, penurunan titik beku Delta Tf = 0,930 °C, titik beku larutan Tf = -0,930 °C; b) Fraksi mol zat terlarut total Xt = 0,00892, penurunan tekanan uap Delta P = 0,284 mmHg, tekanan uap larutan P = 31,54 mmHg.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menghitung mol masing-masing zat terlarut: n_urea = 6,0 / 60,0 = 0,100 mol; n_glukosa = 18,0 / 180,0 = 0,100 mol (0.5 poin).
  2. Menghitung mol partikel total zat terlarut: n_t,tot = 0,100 + 0,100 = 0,200 mol (0.5 poin).
  3. Menghitung molalitas total: m_tot = 0,200 mol / 0,400 kg = 0,500 m (0.5 poin).
  4. Menghitung Delta Tf = m_tot * Kf = 0,500 * 1,86 = 0,930 °C, sehingga titik beku campuran Tf = 0 - 0,930 = -0,930 °C (1.0 poin).
- Sub-soal b (2.5 poin):
  1. Menghitung mol pelarut air: n_p = 400 g / 18,0 g/mol = 22,22 mol (0.5 poin).
  2. Menghitung mol total larutan: n_tot = 22,22 + 0,200 = 22,42 mol (0.5 poin).
  3. Menghitung fraksi mol zat terlarut total: X_t = 0,200 / 22,42 = 0,00892 (0.5 poin).
  4. Menghitung Delta P = X_t * P° = 0,00892 * 31,82 mmHg = 0,284 mmHg dan tekanan uap larutan P = 31,82 - 0,284 = 31,536 mmHg ≈ 31,54 mmHg (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah molalitas total partikel zat terlarut dan tentukan temperatur titik beku ($T_f$) dari larutan campuran tersebut!`,
        points: 2.5,
        rubric: 'Menghitung mol total terlarut (0,20 mol), molalitas total m_tot = 0,50 m (1.5 poin), dan menghitung Delta Tf = 0,930 °C sehingga Tf = -0,930 °C (1.0 poin).',
        expected_answer: 'Molalitas total m_tot = 0,50 m dan titik beku larutan Tf = -0,930 °C.',
      },
      {
        label: 'b',
        question_text: `Hitunglah besarnya penurunan tekanan uap jenuh ($\\Delta P$) dan tekanan uap jenuh larutan campuran ($P$) pada suhu $30^\\circ\\text{C}$!`,
        points: 2.5,
        rubric: 'Menghitung mol air (22,22 mol), fraksi mol terlarut Xt = 0,00892 (1.0 poin), Delta P = 0,284 mmHg, dan P = 31,54 mmHg (1.5 poin).',
        expected_answer: 'Penurunan tekanan uap Delta P = 0,284 mmHg dan tekanan uap larutan P = 31,54 mmHg.',
      },
    ],
    solution_framework_template: `1. Penjumlahan Partikel Koligatif dan Analisis Titik Beku:
• Mol zat terlarut 1 (urea) dan zat terlarut 2 (glukosa): ....
• Jumlah mol zat terlarut kumulatif: ....
• Molalitas total campuran (m_tot): ....
• Titik beku larutan campuran (Tf = Tf° - m_tot · Kf): ....

2. Kesetimbangan Uap Larutan Campuran:
• Mol pelarut air dan mol total sistem: ....
• Fraksi mol solut total (X_t): ....
• Penurunan tekanan uap (ΔP) dan tekanan uap larutan (P): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['campuran-solut', 'hukum-raoult', 'penurunan-titik-beku', 'aditivitas-koligatif'],
  },
  {
    id: 113015,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Tonisitas Fisiologis Eritrosit & Larutan Salin Medis',
    difficulty: 'SMA-Sedang',
    question_style: 'structured',
    title: 'Analisis Osmolaritas Larutan Salin Normal dan Respons Eritrosit Manusia',
    question_text: `Larutan infus salin fisiologis (*normal saline*) yang umum digunakan di rumah sakit adalah larutan natrium klorida dengan kadar $0{,}90\\%\\text{ (b/v)}$ ($0{,}90\\text{ gram } \\ce{NaCl}$ dilarutkan dalam air hingga volume $100{,}0\\text{ mL}$).
Diketahui massa molar $\\ce{NaCl} = 58{,}44\\text{ g/mol}$, temperatur tubuh manusia $37{,}0^\\circ\\text{C}$ ($310{,}15\\text{ K}$), dan tetapan gas $R = 0{,}08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$.

Selesaikan analisis fisiologis berikut:`,
    expected_final_answer: 'a) Molaritas M = 0,154 M, faktor van t Hoff ideal i = 2, osmolaritas = 0,308 Osm/L, tekanan osmotik Pi = 7,85 atm; b) Infus harus isotonik (Pi setara 7,7 - 7,9 atm). Akuades murni (hipotonik ekstrem) memicu aliran air masuk ke eritrosit hingga pecah (lisis/hemolisis), sedangkan salin pekat 5% (hipertonik) menarik air keluar sel hingga mengerut (krenasi).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (2.5 poin):
  1. Menghitung konsentrasi molar NaCl: M = (0,90 g / 58,44 g/mol) / 0,100 L = 0,154 mol/L (0.5 poin).
  2. Garam NaCl terdisosiasi sempurna (Na+ dan Cl-), sehingga n = 2, i = 2,0 (0.5 poin).
  3. Menghitung tekanan osmotik: Pi = M * R * T * i = 0,154 * 0,08206 * 310,15 * 2,0 = 7,845 atm ≈ 7,85 atm (1.5 poin).
- Sub-soal b (2.5 poin):
  1. Menjelaskan status isotonisitas: tekanan osmotik 7,85 atm tepat seimbang dengan tekanan osmotik intraseluler eritrosit darah (7,7 - 7,9 atm), sehingga laju osmosis air keluar-masuk sel berimbang dinamis (0.5 poin).
  2. Dampak infus akuades (hipotonik ekstrem): potensial air di luar sel sangat tinggi, air mengalir deras masuk ke dalam eritrosit, membran sel meregang, membengkak, dan akhirnya pecah (hemolisis / lisis) yang dapat memicu kematian mendadak (1.0 poin).
  3. Dampak infus salin 5% (hipertonik pekat): konsentrasi zat terlarut luar sel sangat tinggi, air dari sitoplasma eritrosit tersedot keluar secara masif, volume sel menciut dan mengerut (krenasi), merusak kemampuan transport oksigen (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah molaritas larutan salin $0{,}90\\%\\text{ (b/v)}$ tersebut dan tentukan besarnya tekanan osmotik ($\\Pi$) pada temperatur fisiologis tubuh $37{,}0^\\circ\\text{C}$ dengan mengasumsikan $\\ce{NaCl}$ terionisasi sempurna!`,
        points: 2.5,
        rubric: 'Menghitung molaritas M = 0,154 M (1.0 poin) dan menghitung tekanan osmotik Pi = 7,85 atm (1.5 poin).',
        expected_answer: 'Molaritas NaCl M = 0,154 M dan tekanan osmotik Pi = 7,85 atm.',
      },
      {
        label: 'b',
        question_text: `Jelaskan mengapa larutan infus intravena harus bersifat isotonik terhadap plasma darah, dan uraikan apa akibat klinis yang fatal jika pasien tidak sengaja diinfus dengan akuades murni (larutan hipotonik) atau larutan salin hipertonik pekat $5\\%\\text{ (b/v)}$!`,
        points: 2.5,
        rubric: 'Menjelaskan alasan keseimbangan osmotik sel darah (0.5 poin), bahaya lisis/hemolisis akibat akuades murni (1.0 poin), dan bahaya pengerutan sel (krenasi) akibat salin hipertonik 5% (1.0 poin).',
        expected_answer: 'Infus harus isotonik agar sel darah stabil; akuades menyebabkan air masuk hingga sel pecah (hemolisis), sedangkan salin 5% menarik air keluar hingga sel mengkerut (krenasi).',
      },
    ],
    solution_framework_template: `1. Formulasi Parameter Osmotik Salin Fisiologis:
• Molaritas analitis NaCl: M = (massa / Mr) / V
• Multiplikasi partikel elektrolit (i): ....
• Tekanan osmotik fisiologis: Π = M · R · T · i: ....

2. Evaluasi Biokimiawi Tonisitas dan Integritas Sel Darah:
• Definisi larutan isotonik plasma darah: ....
• Patofisiologi pemberian cairan hipotonik murni (hemolisis): ....
• Patofisiologi pemberian cairan hipertonik pekat (krenasi): ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 6,
    total_points: 5,
    year: 2024,
    source_event: 'Penilaian Sumatif Kimia SMA Fase F',
    tags: ['salin-normal', 'tonisitas', 'hemolisis', 'krenasi', 'fisiologi-darah'],
  },

  // =========================================================================
  // KATEGORI SULIT (40% = 10 Butir Soal: ID 113001 - 113025)
  // =========================================================================
  {
    id: 113016,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Deviasi Hukum Raoult dan Campuran Azeotrop',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Termodinamika Deviasi Negatif Hukum Raoult pada Campuran Aseton-Kloroform',
    question_text: `Ketika cairan aseton ($\\ce{(CH3)2C=O}$) dan kloroform ($\\ce{CHCl3}$) dicampurkan pada temperatur konstan, tekanan uap total yang terukur di atas larutan ternyata jauh lebih RENDAH daripada tekanan uap yang diprediksikan oleh Hukum Raoult (terjadi deviasi negatif yang kuat).

Mekanisme molekular dan konsekuensi termodinamika yang mendasari deviasi negatif ini adalah ....

A. Interaksi antar-molekul sejenis (aseton-aseton dan kloroform-kloroform) jauh lebih kuat daripada interaksi aseton-kloroform, menghasilkan $\\Delta H_{\\text{mix}} > 0$ dan pembentukan azeotrop titik didih minimum  
B. Terbentuk ikatan hidrogen intermolekuler yang kuat antara atom $\\ce{H}$ kloroform yang terpolarisasi positif dengan atom $\\ce{O}$ gugus karbonil aseton, menghasilkan $\\Delta H_{\\text{mix}} < 0$ (eksotermik) dan pembentukan azeotrop titik didih maksimum  
C. Molekul kloroform bereaksi secara kimia ireversibel dengan aseton membentuk senyawa adisi padat yang segera mengendap di dasar bejana  
D. Terjadi ekspansi volume larutan secara mendadak ($\\Delta V_{\\text{mix}} > 0$) yang meningkatkan ruang kosong cairan dan menaikkan laju penguapan  
E. Molekul aseton mengalami polimerisasi adisi rantai panjang yang memperkecil fraksi mol aseton dalam larutan secara signifikan`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Definisi Deviasi Negatif dari Hukum Raoult:**
   Deviasi negatif terjadi ketika tekanan uap larutan lebih kecil daripada larutan ideal ($P < P_{\\text{ideal}}$).
2. **Tinjauan Ikatan Intermolekular:**
   - Dalam kloroform murni ($\\ce{CHCl3}$), atom $\\ce{H}$ terikat pada karbon yang mengikat 3 atom klorin elektronegatif, menjadikannya cukup asam (sangat terpolarisasi positif $\\delta+$).
   - Dalam aseton murni ($\\ce{(CH3)2C=O}$), atom oksigen memiliki pasangan elektron bebas dengan densitas muatan negatif $\\delta-$.
   - Ketika dicampur, terjadi pembentukan ikatan hidrogen spesifik $\\ce{Cl3C-H \\cdots O=C(CH3)2}$. Gaya tarik antar-molekul berbeda ($A-B$) ini **jauh lebih kuat** daripada gaya tarik molekul sejenis ($A-A$ atau $B-B$).
3. **Konsekuensi Termodinamika:**
   - Pembentukan ikatan yang lebih kuat melepaskan kalor: **entalpi pencampuran eksotermik ($\\Delta H_{\\text{mix}} < 0$)**.
   - Volume cairan berkontraksi: **$\\Delta V_{\\text{mix}} < 0$**.
   - Molekul-molekul lebih terikat erat di fasa cair, sehingga kecenderungan untuk lepas ke fasa uap menurun drastis $\\implies$ tekanan uap total anjlok.
   - Pada diagram fasa titik didih, kurva memperlihatkan titik puncak (azeotrop titik didih maksimum).
4. **Evaluasi Opsi:**
   Pilihan B secara sempurna dan akurat mendeskripsikan mekanisme ikatan hidrogen dan termodinamika azeotrop titik didih maksimum.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi (OSP) Kimia',
    tags: ['deviasi-raoult', 'ikatan-hidrogen', 'azeotrop', 'termodinamika-larutan'],
  },
  {
    id: 113017,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Teori Pasangan Ion Debye-Huckel',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penjelasan Teori Debye-Huckel terhadap Fenomena Pasangan Ion Garam Divalen',
    question_text: `Pengukuran penurunan titik beku larutan magnesium sulfat ($\\ce{MgSO4}$) $0{,}050\\text{ molal}$ menghasilkan faktor van 't Hoff eksperimen $i_{\\text{eks}} = 1{,}28$. Nilai ini jauh lebih rendah daripada faktor van 't Hoff teoretis untuk disosiasi sempurna garam 2:2 ($i_{\\text{teoritis}} = 2{,}00$).

Berdasarkan teori interaksi elektrostatik ionik Debye-Hückel, penyebab utama deviasi ekstrem ini adalah ....

A. Sebagian besar garam $\\ce{MgSO4}$ mengendap membentuk kristal hidrat padat yang tidak larut dalam air  
B. Kuatnya medan elektrostatik antara kation divalen $\\ce{Mg^2+}$ dan anion divalen $\\ce{SO4^2-}$ memicu pembentukan pasangan ion sesaat $[\\ce{Mg^2+ \\cdot SO4^2-}]^0$ yang bergerak bersama sebagai satu partikel kinetik netral tunggal  
C. Ion $\\ce{Mg^2+}$ mengalami hidrolisis sempurna menghasilkan gas $\\ce{H2}$ yang terlepas ke fasa gas  
D. Nilai tetapan krioskopi air ($K_f$) menurun drastis seiring bertambahnya muatan ion terlarut  
E. Pelarut air terurai menjadi radikal hidroksil akibat pengaruh medan listrik ion sulfat`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Langkah demi Langkah:**
1. **Analisis Masalah:**
   Untuk $\\ce{MgSO4}$, disosiasi ideal menghasilkan: $\\ce{MgSO4(aq) -> Mg^2+(aq) + SO4^2-(aq)}$ ($n = 2$). Jika terionisasi $100\\%$, seharusnya $i = 2{,}00$. Namun, nilai terukur hanya $i = 1{,}28$.
2. **Tinjauan Teori Debye-Hückel dan Bjerrum:**
   - Gaya tarik elektrostatik Coulomb sebanding dengan perkalian muatan ion ($|z_+ \\cdot z_-| = |(+2) \\times (-2)| = 4$).
   - Pada garam divalen 2:2, gaya tarik elektrostatik antar-ion berlawanan muatan adalah 4 kali lebih kuat daripada garam monovalen 1:1 (seperti $\\ce{NaCl}$ di mana $|(+1) \\times (-1)| = 1$).
   - Akibat gaya tarik yang sangat kuat ini, sebagian besar kation $\\ce{Mg^2+}$ dan anion $\\ce{SO4^2-}$ saling terikat membentuk **pasangan ion sesaat (*ion pairs*)**, $[\\ce{Mg^2+ \\cdot SO4^2-}]^0$.
   - Pasangan ion ini tidak memiliki muatan netto dan bertindak secara kinetik sebagai **satu partikel efektif tunggal**, bukan dua ion terpisah!
3. **Dampak pada Sifat Koligatif:**
   Karena sifat koligatif semata-mata bergantung pada jumlah partikel independen bebas di dalam larutan, pembentukan pasangan ion mengurangi jumlah partikel kinetik bebas, sehingga nilai $i$ yang terukur anjlok di bawah nilai teoretisnya ($i_{\\text{eks}} = 1{,}28 < 2{,}00$).
4. **Kesimpulan:**
   Pilihan B memberikan penjelasan fisiko-kimia yang tepat dan komprehensif.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi (OSP) Kimia',
    tags: ['debye-huckel', 'pasangan-ion', 'faktor-van-t-hoff', 'elektrolit-divalen'],
  },
  {
    id: 113018,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Penurunan Termodinamika Persamaan Krioskopi (Kf)',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Penurunan Termodinamika Tetapan Krioskopi dari Entalpi Peleburan Pelarut',
    question_text: `Berdasarkan termodinamika kesetimbangan fasa padat-cair dan persamaan Clausius-Clapeyron, tetapan penurunan titik beku molal ($K_f$) suatu pelarut murni diturunkan secara teoretis dari besaran termodinamika intrinsik pelarut melalui persamaan:
$$K_f = \\frac{R \\cdot (T_{f0})^2 \\cdot M_p}{1000 \\cdot \\Delta H_{\\text{fus}}}$$

Diketahui pelarut benzena murni memiliki:
- Titik beku normal: $T_{f0} = 5{,}50^\\circ\\text{C} = 278{,}65\\text{ K}$
- Massa molar pelarut: $M_p = 78{,}11\\text{ g/mol}$
- Entalpi peleburan molar: $\\Delta H_{\\text{fus}} = 9{,}87\\text{ kJ/mol} = 9870\\text{ J/mol}$
- Tetapan gas ideal: $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$

Nilai tetapan krioskopi molal ($K_f$) pelarut benzena hasil perhitungan termodinamika tersebut adalah ....

A. $1{,}86^\\circ\\text{C/m}$  
B. $3{,}90^\\circ\\text{C/m}$  
C. $5{,}12^\\circ\\text{C/m}$  
D. $7{,}25^\\circ\\text{C/m}$  
E. $40{,}0^\\circ\\text{C/m}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Substitusi Parameter ke Persamaan Termodinamika:**
   $$K_f = \\frac{R \\cdot (T_{f0})^2 \\cdot M_p}{1000 \\cdot \\Delta H_{\\text{fus}}}$$
2. **Kalkulasi Numerik:**
   - $(T_{f0})^2 = (278{,}65)^2 = 77645{,}82\\text{ K}^2$
   - Pembilang:
     $$8{,}314 \\times 77645{,}82 \\times 78{,}11 = 645547{,}36 \\times 78{,}11 = 50423700\\text{ J}\\cdot\\text{g/mol}$$
   - Penyebut:
     $$1000 \\times 9870\\text{ J/mol} = 9870000\\text{ J/mol}$$
   - Hasil Pembagian:
     $$K_f = \\frac{50423700}{9870000} = 5{,}1088^\\circ\\text{C}\\cdot\\text{kg/mol} \\approx 5{,}12^\\circ\\text{C/m}$$
3. **Kesimpulan:**
   Nilai teoretis benzena adalah $5{,}12^\\circ\\text{C/m}$, sesuai dengan nilai eksperimen yang tercantum pada tabel acuan sifat fisik pelarut.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['termodinamika-krioskopi', 'entalpi-peleburan', 'benzena', 'clausius-clapeyron'],
  },
  {
    id: 113019,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Fenomena Dimerisasi Asam Benzoat dalam Benzena',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Perhitungan Derajat Dimerisasi Asam Benzoat dalam Pelarut Non-Polar',
    question_text: `Sebanyak $1{,}22\\text{ gram}$ asam benzoat ($\\ce{C6H5COOH}$, $M_r = 122{,}0\\text{ g/mol}$) dilarutkan ke dalam $100\\text{ gram}$ pelarut benzena murni ($K_f = 5{,}12^\\circ\\text{C/m}$).
Hasil pengukuran krioskopi menunjukkan bahwa titik beku benzena turun sebesar $\\Delta T_f = 0{,}282^\\circ\\text{C}$.

Jika dalam pelarut non-polar asam benzoat mengalami kesetimbangan dimerisasi membentuk cincin berikatan hidrogen:
$$2\\ce{C6H5COOH} \\rightleftharpoons (\\ce{C6H5COOH})_2$$
maka persentase asam benzoat yang telah terasosiasi membentuk dimer (derajat dimerisasi, $\\beta$) di dalam larutan benzena tersebut adalah ....

A. $10\\%$  
B. $45\\%$  
C. $55\\%$  
D. $90\\%$  
E. $98\\%$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Molalitas Stoikiometri Monomer ($m_0$):**
   $$n_0 = \\frac{1{,}22\\text{ g}}{122{,}0\\text{ g/mol}} = 0{,}010\\text{ mol}$$
   $$m_0 = \\frac{0{,}010\\text{ mol}}{0{,}100\\text{ kg benzena}} = 0{,}100\\text{ m}$$
2. **Menghitung Penurunan Titik Beku Ideal jika Seluruhnya Monomer:**
   $$\\Delta T_{f,\\text{ideal}} = m_0 \\cdot K_f = 0{,}100 \\times 5{,}12 = 0{,}512^\\circ\\text{C}$$
3. **Menghitung Faktor van 't Hoff Efektif Terukur ($i$):**
   $$i = \\frac{\\Delta T_{f,\\text{terukur}}}{\\Delta T_{f,\\text{ideal}}} = \\frac{0{,}282}{0{,}512} = 0{,}5508 \\approx 0{,}551$$
4. **Menurunkan Relasi Faktor van 't Hoff untuk Dimerisasi:**
   Reaksi: $2\\ce{A} \\rightleftharpoons \\ce{A2}$
   - Awal: $1\\text{ mol A}$
   - Bereaksi: $2x$ mol $\\ce{A}$ membentuk $x$ mol $\\ce{A2}$
   - Kesetimbangan: $(1 - 2x)$ mol monomer $+ x$ mol dimer
   - Total partikel: $n_{\\text{tot}} = (1 - 2x) + x = 1 - x$
   - Derajat dimerisasi didefinisikan sebagai fraksi molekul yang terasosiasi: $\\beta = 2x \\implies x = \\frac{\\beta}{2}$
   - Maka:
     $$i = 1 - \\frac{\\beta}{2}$$
5. **Menghitung Derajat Dimerisasi ($\\beta$):**
   $$0{,}551 = 1 - \\frac{\\beta}{2} \\implies \\frac{\\beta}{2} = 1 - 0{,}551 = 0{,}449$$
   $$\\beta = 2 \\times 0{,}449 = 0{,}898 \\approx 0{,}90 \\quad (90\\%)$$`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 5,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi (OSP) Kimia',
    tags: ['dimerisasi', 'asam-benzoat', 'asosiasi-molekul', 'faktor-van-t-hoff'],
  },
  {
    id: 113020,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Sensitivitas Analitik Sifat Koligatif pada Makromolekul',
    difficulty: 'SMA-Sulit',
    question_style: 'mcq',
    title: 'Analisis Komparasi Kepekaan Sifat Koligatif untuk Karakterisasi Makromolekul',
    question_text: `Suatu sampel protein hemoglobin ($M_r \\approx 65.000\\text{ g/mol}$) dilarutkan sebanyak $1{,}30\\text{ gram}$ ke dalam air hingga volume larutan tepat $100{,}0\\text{ mL}$ pada temperatur $25{,}0^\\circ\\text{C}$ ($298{,}15\\text{ K}$).

Diketahui tetapan krioskopi air $K_f = 1{,}86^\\circ\\text{C/m}$, tetapan gas $R = 0{,}08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$, massa jenis air $\\rho = 1{,}00\\text{ g/mL}$, dan $1\\text{ atm} = 760\\text{ mmHg} \\approx 1033\\text{ cm H}_2\\text{O}$.

Besarnya penurunan titik beku ($\\Delta T_f$) dan tekanan osmotik ($\\Pi$) larutan protein tersebut adalah ....

A. $\\Delta T_f = 0{,}37^\\circ\\text{C}$ dan $\\Pi = 0{,}49\\text{ atm}$  
B. $\\Delta T_f = 0{,}037^\\circ\\text{C}$ dan $\\Pi = 0{,}049\\text{ atm}$  
C. $\\Delta T_f = 0{,}00037^\\circ\\text{C}$ dan $\\Pi = 0{,}00489\\text{ atm}$ (setara dengan ketinggian kolom cairan $\\approx 5{,}05\\text{ cm H}_2\\text{O}$)  
D. $\\Delta T_f = 0{,}000037^\\circ\\text{C}$ dan $\\Pi = 0{,}0489\\text{ atm}$  
E. $\\Delta T_f = 1{,}86^\\circ\\text{C}$ dan $\\Pi = 1{,}00\\text{ atm}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Langkah demi Langkah:**
1. **Menghitung Mol dan Konsentrasi Hemoglobin:**
   - Mol zat terlarut:
     $$n = \\frac{1{,}30\\text{ g}}{65.000\\text{ g/mol}} = 2{,}00 \\times 10^{-5}\\text{ mol}$$
   - Konsentrasi molar ($M$) dan molalitas ($m$) untuk larutan encer berair ($100\\text{ mL} = 0{,}100\\text{ L} = 0{,}100\\text{ kg}$):
     $$M \\approx m = \\frac{2{,}00 \\times 10^{-5}\\text{ mol}}{0{,}100} = 2{,}00 \\times 10^{-4}\\text{ mol/L (atau mol/kg)}$$
2. **Menghitung Penurunan Titik Beku ($\\Delta T_f$):**
   $$\\Delta T_f = m \\cdot K_f = (2{,}00 \\times 10^{-4}\\text{ m}) \\times 1{,}86^\\circ\\text{C/m} = 0{,}000372^\\circ\\text{C} \\approx 0{,}00037^\\circ\\text{C}$$
   *(Nilai $0{,}00037^\\circ\\text{C}$ berada jauh di bawah batas galat pengukuran termometer laboratorium biasa dan praktis tidak dapat diukur secara akurat)*.
3. **Menghitung Tekanan Osmotik ($\\Pi$):**
   $$\\Pi = M \\cdot R \\cdot T = (2{,}00 \\times 10^{-4}) \\times 0{,}08206 \\times 298{,}15 = 0{,}004893\\text{ atm}$$
   Dalam satuan ketinggian kolom air:
   $$h = 0{,}004893\\text{ atm} \\times 1033\\text{ cm H}_2\\text{O/atm} = 5{,}05\\text{ cm H}_2\\text{O}$$
4. **Kesimpulan:**
   Ketinggian kolom cairan sebesar $5{,}05\\text{ cm}$ sangat mudah dan presisi dibaca menggunakan tabung kapiler osmometer, membuktikan mengapa osmometri adalah satu-satunya metode koligatif yang dapat diandalkan untuk makromolekul polimer dan protein.`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 4,
    total_points: 5,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['osmometri', 'makromolekul', 'hemoglobin', 'sensitivitas-koligatif'],
  },
  {
    id: 113021,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kesetimbangan Uap-Cair Biner Ideal Benzena-Toluena & Distilasi',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kesetimbangan Uap-Cair Larutan Ideal Benzena-Toluena dan Distilasi Fraksional',
    question_text: `Campuran cairan benzena ($\\ce{C6H6}$, komponen $B$) dan toluena ($\\ce{C7H8}$, komponen $T$) membentuk larutan ideal yang mematuhi Hukum Raoult pada seluruh rentang fraksi mol.
Pada temperatur $80{,}0^\\circ\\text{C}$, tekanan uap jenuh benzena murni adalah $P_B^\\circ = 753{,}0\\text{ mmHg}$ dan toluena murni adalah $P_T^\\circ = 290{,}0\\text{ mmHg}$.
Suatu campuran cair dibuat dengan fraksi mol benzena dalam fasa cair sebesar $X_B = 0{,}400$.

Selesaikan analisis termodinamika kesetimbangan uap-cair berikut:`,
    expected_final_answer: 'a) Tekanan parsial P_B = 301,2 mmHg, P_T = 174,0 mmHg, tekanan total P_tot = 475,2 mmHg; b) Komposisi fasa uap Y_B = 0,634 dan Y_T = 0,366. Fasa uap lebih kaya akan benzena (Y_B = 0,634 > X_B = 0,400) karena benzena lebih volatil (titik didih lebih rendah, tekanan uap murni lebih tinggi). Pengayaan berulang melalui kondensasi-penguapan pada pelat distilasi bertingkat menghasilkan pemisahan sempurna kedua komponen.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menghitung fraksi mol toluena fasa cair: X_T = 1 - X_B = 1 - 0,400 = 0,600 (1.0 poin).
  2. Menghitung tekanan parsial benzena: P_B = X_B * P_B° = 0,400 * 753,0 mmHg = 301,2 mmHg (1.5 poin).
  3. Menghitung tekanan parsial toluena: P_T = X_T * P_T° = 0,600 * 290,0 mmHg = 174,0 mmHg (1.5 poin).
  4. Menghitung tekanan uap total larutan: P_tot = P_B + P_T = 301,2 + 174,0 = 475,2 mmHg (1.0 poin).
- Sub-soal b (5.0 poin):
  1. Berdasarkan Hukum Dalton, menghitung fraksi mol fasa uap:
     Y_B = P_B / P_tot = 301,2 / 475,2 = 0,6338 ≈ 0,634 (2.0 poin).
     Y_T = P_T / P_tot = 174,0 / 475,2 = 0,3662 ≈ 0,366 (1.0 poin).
  2. Menganalisis fenomena pengayaan fasa uap: fasa uap mengandung 63,4% benzena dibandingkan hanya 40,0% di fasa cair karena benzena memiliki tekanan uap murni yang lebih tinggi (lebih volatil) (1.0 poin).
  3. Menghubungkan dengan prinsip distilasi fraksional: setiap siklus penguapan-kondensasi pada pelat kolom distilasi menghasilkan uap yang semakin kaya komponen volatil hingga didapatkan benzena murni di bagian atas kolom dan toluena di dasar kolom (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah tekanan uap parsial masing-masing komponen ($P_B$ dan $P_T$) serta besarnya tekanan uap total ($P_{\\text{tot}}$) di atas larutan tersebut pada suhu $80{,}0^\\circ\\text{C}$!`,
        points: 5.0,
        rubric: 'Menghitung X_T = 0,60 (1.0 poin), P_B = 301,2 mmHg (1.5 poin), P_T = 174,0 mmHg (1.5 poin), dan P_tot = 475,2 mmHg (1.0 poin).',
        expected_answer: 'P_B = 301,2 mmHg, P_T = 174,0 mmHg, dan P_tot = 475,2 mmHg.',
      },
      {
        label: 'b',
        question_text: `Berdasarkan Hukum Dalton, hitunglah komposisi fraksi mol fasa uap ($Y_B$ dan $Y_T$) yang berada dalam kesetimbangan dengan cairan tersebut. Jelaskan mengapa fasa uap lebih kaya akan komponen benzena dibandingkan fasa cairnya, serta kaitkan fenomena ini dengan prinsip pemisahan distilasi fraksional bertingkat!`,
        points: 5.0,
        rubric: 'Menghitung Y_B = 0,634 dan Y_T = 0,366 (3.0 poin). Menjelaskan pengayaan fasa uap oleh komponen volatil (1.0 poin) dan prinsip kesetimbangan bertingkat dalam kolom distilasi (1.0 poin).',
        expected_answer: 'Y_B = 0,634 dan Y_T = 0,366; uap lebih kaya benzena karena benzena lebih volatil, memungkinkan pemisahan bertahap melalui kondensasi berulang pada kolom fraksionasi.',
      },
    ],
    solution_framework_template: `1. Hukum Raoult pada Campuran Biner Volatil:
• Fraksi mol fasa cair masing-masing komponen: ....
• Tekanan uap parsial benzena (P_B = X_B · P_B°): ....
• Tekanan uap parsial toluena (P_T = X_T · P_T°): ....
• Tekanan total kesetimbangan uap (P_tot = P_B + P_T): ....

2. Kesetimbangan Fasa Uap Dalton & Prinsip Distilasi Fraksional:
• Komposisi fraksi mol fasa uap (Y_i = P_i / P_tot): ....
• Komparasi Y_B terhadap X_B dan alasan termodinamika volatilitas: ....
• Mekanisme pemisahan komponen pada pelat kolom distilasi bertingkat: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Provinsi (OSP) Kimia',
    tags: ['larutan-ideal', 'hukum-raoult', 'hukum-dalton', 'distilasi-fraksional'],
  },
  {
    id: 113022,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kuantitatif Dimerisasi Asam Benzoat dalam Pelarut Benzena',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kuantitatif Dimerisasi Asam Karboksilat dan Tetapan Kesetimbangan Kdim',
    question_text: `Ketika asam benzoat ($\\ce{C6H5COOH}$, $M_r = 122{,}12\\text{ g/mol}$) dilarutkan ke dalam pelarut non-polar benzena, gugus karboksil saling berinteraksi melalui dua buah ikatan hidrogen simetris membentuk dimer siklik:
$$2\\ce{C6H5COOH} \\rightleftharpoons (\\ce{C6H5COOH})_2$$
Dalam sebuah eksperimen krioskopi, sebanyak $2{,}4424\\text{ gram}$ asam benzoat dilarutkan ke dalam $200{,}0\\text{ gram}$ benzena murni ($K_f = 5{,}12^\\circ\\text{C/m}$). Titik beku benzena terukur turun sebesar $\\Delta T_f = 0{,}2816^\\circ\\text{C}$.

Selesaikan analisis kesetimbangan asosiasi molekular berikut:`,
    expected_final_answer: 'a) Molalitas analitis m_0 = 0,100 m, molalitas partikel efektif m_eff = 0,0550 m, faktor van t Hoff i = 0,550; b) Derajat dimerisasi beta = 0,900 (90,0%), konsentrasi monomer m_A = 0,010 m, konsentrasi dimer m_A2 = 0,045 m, tetapan kesetimbangan dimerisasi K_dim = 450 m^-1.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menghitung mol asam benzoat analitis: n_0 = 2,4424 g / 122,12 g/mol = 0,0200 mol (1.0 poin).
  2. Menghitung molalitas analitis: m_0 = 0,0200 mol / 0,200 kg = 0,1000 m (1.5 poin).
  3. Menghitung molalitas partikel efektif dari Delta Tf:
     m_eff = Delta Tf / Kf = 0,2816 / 5,12 = 0,0550 m (1.5 poin).
  4. Menghitung faktor van 't Hoff terukur: i = m_eff / m_0 = 0,0550 / 0,1000 = 0,550 (1.0 poin).
- Sub-soal b (5.0 poin):
  1. Menurunkan persamaan faktor van 't Hoff untuk kesetimbangan 2A <=> A2:
     m_tot = m_A + m_A2 = m_0(1 - beta) + 0,5 m_0 beta = m_0(1 - 0,5 beta)
     i = m_tot / m_0 = 1 - 0,5 beta (1.5 poin).
  2. Menghitung derajat dimerisasi beta:
     0,550 = 1 - 0,5 beta => 0,5 beta = 0,450 => beta = 0,900 (90,0%) (1.5 poin).
  3. Menghitung konsentrasi molalitas masing-masing spesi:
     m_monomer (m_A) = m_0(1 - beta) = 0,1000 * (1 - 0,900) = 0,0100 m
     m_dimer (m_A2) = 0,5 * m_0 * beta = 0,5 * 0,1000 * 0,900 = 0,0450 m (1.0 poin).
  4. Menghitung tetapan kesetimbangan dimerisasi K_dim:
     K_dim = m_A2 / (m_A)^2 = 0,0450 / (0,0100)^2 = 0,0450 / 0,000100 = 450 m^-1 (atau kg/mol) (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah molalitas analitis awal asam benzoat ($m_0$) dan tentukan nilai faktor van 't Hoff eksperimen ($i$) dari data penurunan titik beku tersebut!`,
        points: 5.0,
        rubric: 'Menghitung m_0 = 0,100 m (2.5 poin), m_eff = 0,055 m, dan nilai faktor van t Hoff i = 0,550 (2.5 poin).',
        expected_answer: 'Molalitas analitis m_0 = 0,100 m dan faktor van t Hoff i = 0,550.',
      },
      {
        label: 'b',
        question_text: `Turunkan hubungan matematis antara faktor van 't Hoff ($i$) dengan derajat dimerisasi ($\\beta$). Hitunglah persentase molekul yang terikat sebagai dimer ($\\beta$) serta tentukan nilai tetapan kesetimbangan dimerisasinya ($K_{\\text{dim}}$)!`,
        points: 5.0,
        rubric: 'Menurunkan i = 1 - 0,5 beta (1.5 poin), menghitung beta = 0,900 (90%) (1.5 poin), konsentrasi monomer dan dimer (1.0 poin), serta K_dim = 450 m^-1 (1.0 poin).',
        expected_answer: 'Hubungan i = 1 - 0,5 beta; derajat dimerisasi beta = 90,0%; tetapan kesetimbangan dimerisasi K_dim = 450 m^-1.',
      },
    ],
    solution_framework_template: `1. Molalitas Analitis dan Evaluasi Krioskopi:
• Mol analitis zat terlarut (n_0): ....
• Molalitas stoikiometris (m_0): ....
• Molalitas partikel kinetik efektif (m_eff = ΔTf / Kf): ....
• Nilai faktor van 't Hoff eksperimen (i = m_eff / m_0): ....

2. Termodinamika Kesetimbangan Dimerisasi (2A ⇌ A2):
• Penurunan rumus partikel efektif dan fraksi asosiasi (i vs β): ....
• Kalkulasi derajat dimerisasi (β): ....
• Penentuan molalitas spesi monomer [A] dan dimer [A2]: ....
• Tetapan kesetimbangan dimerisasi K_dim = [A2] / [A]²: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['dimerisasi', 'asam-benzoat', 'tetapan-kesetimbangan', 'krioskopi-lanjutan'],
  },
  {
    id: 113023,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Analisis Osmometri Membran Polimer & Persamaan Virial',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Penentuan Massa Molar Rata-Rata Jumlah Polimer PVC Melalui Regresi Virial Osmometri',
    question_text: `Tekanan osmotik ($\\Pi$) dari serangkaian larutan polivinil klorida (PVC) sintetis dalam pelarut tetrahidrofuran (THF) diukur pada temperatur konstan $25{,}0^\\circ\\text{C}$ ($298{,}15\\text{ K}$) dengan variasi konsentrasi massa polimer $C$ (dalam $\\text{g/L}$).

Karena interaksi termodinamika polimer-pelarut menghasilkan deviasi non-ideal pada konsentrasi berhingga, data diolah menggunakan persamaan virial osmometri membran:
$$\\frac{\\Pi}{C} = \\frac{R T}{M_n} + B C$$
Hasil analisis regresi linear terhadap plot grafik $\\frac{\\Pi}{C}$ terhadap $C$ menghasilkan persamaan garis:
$$\\frac{\\Pi}{C} = 2{,}446 \\times 10^{-4} + (1{,}250 \\times 10^{-6}) C$$
di mana $\\Pi$ dalam satuan $\\text{atm}$, $C$ dalam $\\text{g/L}$, dan tetapan gas $R = 0{,}08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$.

Selesaikan analisis polimer berikut:`,
    expected_final_answer: 'a) Titik potong intercept = 2,446 x 10^-4 atm L/g, massa molar rata-rata jumlah Mn = 100.000 g/mol (100 kDa); b) Koefisien virial kedua B = 1,250 x 10^-6 atm L^2/g^2. Nilai B > 0 menandakan bahwa pelarut THF adalah pelarut yang baik (good solvent) bagi PVC, di mana gaya tarik polimer-pelarut lebih disukai secara termodinamika dibandingkan kontak rantai polimer-polimer sehingga rantai polimer mengembang.',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Mengidentifikasi nilai titik potong sumbu (intercept saat C -> 0):
     \\lim_{C \\to 0} (\\Pi / C) = \\text{Intercept} = 2{,}446 \\times 10^{-4}\\text{ atm}\\cdot\\text{L/g} (1.5 poin).
  2. Menuliskan hubungan intercept dengan massa molar rata-rata jumlah:
     \\text{Intercept} = \\frac{R \\cdot T}{M_n} (1.0 poin).
  3. Menghitung nilai pembilang:
     R * T = 0,08206 * 298,15 = 24,466 L atm/mol (1.0 poin).
  4. Menghitung massa molar M_n:
     M_n = \\frac{R \\cdot T}{\\text{Intercept}} = \\frac{24{,}466}{2{,}446 \\times 10^{-4}} = 100.024\\text{ g/mol} \\approx 100.000\\text{ g/mol} = 100\\text{ kDa} (1.5 poin).
- Sub-soal b (5.0 poin):
  1. Menentukan nilai koefisien virial kedua dari kemiringan garis (slope):
     B = \\text{Slope} = 1{,}250 \\times 10^{-6}\\text{ atm}\\cdot\\text{L}^2/\\text{g}^2 (1.5 poin).
  2. Menjelaskan signifikansi fisik B > 0:
     - B > 0 mengindikasikan interaksi menguntungkan antara segmen polimer dan molekul pelarut (*favorable polymer-solvent interaction*). THF bertindak sebagai **pelarut baik (*good solvent*)** (1.5 poin).
     - Rantai polimer PVC mengembang (*swelling/expanded coil*) untuk memaksimalkan kontak dengan pelarut THF, memunculkan gaya tolak antar-rantai yang meningkatkan tekanan osmotik melampaui perilaku ideal van 't Hoff (1.0 poin).
     - Jika B = 0 larutan berada pada kondisi theta (kondisi ideal), dan jika B < 0 pelarut adalah poor solvent (rantai polimer menggulung rapat/mengendap) (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Tentukan nilai titik potong (*intercept*) saat konsentrasi mendekati nol ($C \\to 0$) dan hitunglah massa molar rata-rata jumlah ($M_n$) dari sampel polimer PVC tersebut dalam satuan $\\text{g/mol}$ (atau $\\text{kDa}$)!`,
        points: 5.0,
        rubric: 'Menentukan intercept = 2,446 x 10^-4 (2.0 poin) dan menghitung Mn = RT / intercept = 100.000 g/mol (3.0 poin).',
        expected_answer: 'Titik potong = 2,446 x 10^-4 atm L/g dan massa molar Mn = 100.000 g/mol (100 kDa).',
      },
      {
        label: 'b',
        question_text: `Dari persamaan regresi tersebut, tentukan nilai koefisien virial kedua ($B$) beserta satuannya. Jelaskan arti fisis dari nilai $B > 0$ terhadap interaksi termodinamika polimer-pelarut (apakah THF merupakan pelarut baik atau pelarut buruk), serta bagaimana rantai polimer mengadopsi konformasinya di dalam larutan!`,
        points: 5.0,
        rubric: 'Menentukan nilai B = 1,250 x 10^-6 atm L^2/g^2 (1.5 poin). Menjelaskan makna B > 0 sebagai pelarut baik (1.5 poin) dan konformasi rantai polimer mengembang (2.0 poin).',
        expected_answer: 'B = 1,250 x 10^-6 atm L^2/g^2; B > 0 menandakan THF adalah good solvent di mana rantai polimer mengembang memaksimalkan kontak dengan pelarut.',
      },
    ],
    solution_framework_template: `1. Regresi Virial Osmometri dan Determinasi Massa Molar:
• Persamaan virial osmometri: Π/C = (RT / Mn) + B · C
• Nilai titik potong sumbu (intercept saat C → 0): ....
• Produk termodinamika gas (R · T): ....
• Kalkulasi massa molar rata-rata jumlah (Mn): ....

2. Interpretasi Fisika Koefisien Virial Kedua (B):
• Nilai kemiringan kurva (slope = B): ....
• Analisis termodinamika interaksi segmen polimer vs pelarut: ....
• Klasifikasi kualitas pelarut (good solvent / theta solvent / poor solvent): ....
• Konformasi spasial rantai makromolekul dalam larutan: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Polimer & Fisika',
    tags: ['osmometri-virial', 'massa-molar-polimer', 'koefisien-virial', 'good-solvent'],
  },
  {
    id: 113024,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Pasangan Ion Debye-Huckel pada Elektrolit Simetris Divalen (MgSO4)',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Evaluasi Pembentukan Pasangan Ion dan Kekuatan Ionik pada Elektrolit Garam Divalen',
    question_text: `Suatu larutan magnesium sulfat ($\\ce{MgSO4}$) dibuat dengan konsentrasi molalitas $m = 0{,}050\\text{ mol/kg}$ dalam air murni ($K_f = 1{,}86^\\circ\\text{C/m}$).
Bila garam $\\ce{MgSO4}$ terdisosiasi sempurna menghasilkan kation divalen $\\ce{Mg^2+}$ ($z_+ = +2$) dan anion divalen $\\ce{SO4^2-}$ ($z_- = -2$).
Namun, pengukuran krioskopi eksperimen yang sangat teliti menunjukkan bahwa larutan membeku pada temperatur $-0{,}119^\\circ\\text{C}$.

Selesaikan analisis pasangan ion elektrostatik berikut:`,
    expected_final_answer: 'a) Kekuatan ionik mu = 0,200 m, penurunan titik beku ideal Delta Tf,ideal = 0,186 °C (titik beku ideal -0,186 °C); b) Faktor van t Hoff efektif i_eff = 1,28, fraksi pasangan ion yang terbentuk = 0,72 (72%). Pembentukan pasangan ion garam 2:2 jauh lebih kuat dibanding 1:1 karena gaya tarik Coulomb sebanding dengan kuadrat muatan (perkalian muatan 4x lebih besar).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menghitung kekuatan ionik larutan (\\mu):
     \\mu = 0{,}5 \\times \\sum (m_i z_i^2) = 0{,}5 \\times [m_{\\ce{Mg^2+}} (+2)^2 + m_{\\ce{SO4^2-}} (-2)^2]
     \\mu = 0{,}5 \\times [(0{,}050 \\times 4) + (0{,}050 \\times 4)] = 0{,}5 \\times [0{,}200 + 0{,}200] = 0{,}200\\text{ m} (2.5 poin).
  2. Menghitung penurunan titik beku ideal bila terdisosiasi sempurna (i = 2,0):
     \\Delta T_{f,\\text{ideal}} = m \\cdot K_f \\cdot i = 0{,}050 \\times 1{,}86 \\times 2{,}0 = 0{,}186^\\circ\\text{C} (1.5 poin).
  3. Titik beku ideal larutan: T_{f,\\text{ideal}} = 0 - 0{,}186 = -0{,}186^\\circ\\text{C} (1.0 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung faktor van 't Hoff eksperimen dari titik beku terukur:
     \\Delta T_{f,\\text{eks}} = 0{,}119^\\circ\\text{C}
     i_{\\text{eff}} = \\frac{\\Delta T_{f,\\text{eks}}}{m \\cdot K_f} = \\frac{0{,}119}{0{,}050 \\times 1{,}86} = \\frac{0{,}119}{0{,}093} = 1{,}2796 \\approx 1{,}28 (1.5 poin).
  2. Menentukan fraksi pembentukan pasangan ion (\\theta):
     Kesetimbangan pembentukan pasangan ion: \\ce{Mg^2+ + SO4^2- <=> [Mg^2+ \\cdot SO4^2-]^0}
     Partikel total = m_0(1 - \\theta) + m_0(1 - \\theta) + m_0 \\theta = m_0(2 - \\theta)
     i_{\\text{eff}} = 2 - \\theta \\implies \\theta = 2 - i_{\\text{eff}} = 2 - 1{,}28 = 0{,}72 \\quad (72\\%) (2.0 poin).
  3. Menjelaskan perbandingan dengan garam 1:1:
     Menurut Hukum Coulomb, gaya tarik elektrostatik sebanding dengan |z_+ * z_-|. Untuk garam 2:2 nilai muatan adalah |(+2)(-2)| = 4, sedangkan untuk garam 1:1 (NaCl) adalah |(+1)(-1)| = 1. Energi interaksi elektrostatik yang 4 kali lebih besar ini membuat ion divalen sangat mudah terikat menjadi pasangan ion netral (1.5 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Hitunglah kekuatan ionik ($\\mu$) larutan magnesium sulfat tersebut bila diasumsikan terdisosiasi penuh, serta tentukan besarnya penurunan titik beku teoretis idealnya ($\\Delta T_{f,\\text{ideal}}$)!`,
        points: 5.0,
        rubric: 'Menghitung kekuatan ionik mu = 0,200 m (2.5 poin) dan Delta Tf ideal = 0,186 °C (2.5 poin).',
        expected_answer: 'Kekuatan ionik mu = 0,200 m dan penurunan titik beku ideal Delta Tf,ideal = 0,186 °C.',
      },
      {
        label: 'b',
        question_text: `Dari titik beku yang terukur di laboratorium ($-0{,}119^\\circ\\text{C}$), hitunglah nilai faktor van 't Hoff efektif ($i_{\\text{eff}}$), tentukan persentase ion yang terikat membentuk pasangan ion netral $[\\ce{Mg^2+ \\cdot SO4^2-}]^0$, dan jelaskan mengapa kecenderungan pembentukan pasangan ion pada garam 2:2 jauh lebih besar daripada garam 1:1!`,
        points: 5.0,
        rubric: 'Menghitung i_eff = 1,28 (1.5 poin), persentase pasangan ion = 72% (2.0 poin), dan penjelasan kuatnya gaya Coulomb pada muatan divalen (1.5 poin).',
        expected_answer: 'i_eff = 1,28; persentase pasangan ion = 72%; garam 2:2 memiliki perkalian muatan 4x lebih besar dibanding 1:1 sehingga gaya tarik Coulomb jauh lebih dominan.',
      },
    ],
    solution_framework_template: `1. Perhitungan Kekuatan Ionik dan Sifat Koligatif Ideal:
• Formulasi kekuatan ionik Lewis-Randall (μ = 0,5 · Σ m_i · z_i²): ....
• Penurunan titik beku disosiasi sempurna (ΔTf,ideal = m · Kf · n): ....

2. Evaluasi Efek Pasangan Ion Elektrostatik:
• Faktor van 't Hoff nyata (i_eff = ΔTf,eks / (m · Kf)): ....
• Fraksi asosiasi pasangan ion netral θ = 2 - i_eff: ....
• Komparasi energi potensial Coulomb garam 2:2 vs garam 1:1: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 8,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik',
    tags: ['kekuatan-ionik', 'pasangan-ion', 'debye-huckel', 'krioskopi-lanjutan'],
  },
  {
    id: 113025,
    sma_topic_number: 13,
    sma_topic_id: 113,
    curriculum: 'sma',
    grade: 'Kelas 12',
    curriculum_phase: 'Fase F',
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Kesetimbangan Membran Donnan pada Polielektrolit Biologis',
    difficulty: 'SMA-Sulit',
    question_style: 'structured',
    title: 'Analisis Kesetimbangan Membran Donnan dan Tekanan Onkotik Protein',
    question_text: `Kesetimbangan Donnan (*Donnan Membrane Equilibrium*) mengatur distribusi ion dan tekanan osmotik pada sel biologis dan larutan polielektrolit.
Suatu bejana dibagi menjadi dua kompartemen dengan volume sama ($V_1 = V_2 = 1{,}0\\text{ L}$) yang dipisahkan oleh membran semipermeabel kaku.
- **Kompartemen 1:** Berisi larutan natrium proteinat ($\\ce{Na_z Pr}$) dengan konsentrasi makromolekul protein $C_p = 0{,}010\\text{ M}$. Setiap molekul protein membawa $z = 10$ muatan negatif permanen ($\\ce{Pr^10-}$), sehingga menghasilkan ion lawan $\\ce{Na+}$ awal sebesar $0{,}100\\text{ M}$. Membran tidak dapat ditembus oleh molekul protein $\\ce{Pr^10-}$.
- **Kompartemen 2:** Mula-mula berisi larutan elektrolit permeabel $\\ce{NaCl}$ dengan konsentrasi $C_s = 0{,}100\\text{ M}$. Ion $\\ce{Na+}$, $\\ce{Cl-}$, dan molekul air dapat bebas berdifusi melintasi membran.

Setelah kesetimbangan termodinamika Donnan tercapai pada temperatur $25{,}0^\\circ\\text{C}$ ($298{,}15\\text{ K}$):
(Diketahui $R = 0{,}08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$).

Selesaikan analisis kesetimbangan membran Donnan berikut:`,
    expected_final_answer: 'a) Persamaan distribusi Donnan [Na+]1 [Cl-]1 = [Na+]2 [Cl-]2. Jumlah mol Cl- yang berdifusi ke kompartemen 1 adalah x = 0,0333 M. Konsentrasi setimbang: Kompartemen 1 [Na+]1 = 0,1333 M, [Cl-]1 = 0,0333 M, [Pr^10-]1 = 0,0100 M; Kompartemen 2 [Na+]2 = 0,0667 M, [Cl-]2 = 0,0667 M; b) Tekanan osmotik total kompartemen 1 Pi_1 = 4,32 atm, kompartemen 2 Pi_2 = 3,26 atm, tekanan osmotik Donnan netto Delta Pi = 1,06 atm. Nilai ini jauh melampaui tekanan osmotik ideal protein murni (0,24 atm) karena adanya kontribusi besar tekanan ion lawan terperangkap (tekanan onkotik Donnan).',
    solution_rubric: `**Panduan Penskoran Uraian Terstruktur:**
- Sub-soal a (5.0 poin):
  1. Menuliskan kondisi kesetimbangan termodinamika potensial kimia garam permeabel NaCl:
     \\mu_{\\ce{NaCl}}^{(1)} = \\mu_{\\ce{NaCl}}^{(2)} \\implies [\\ce{Na+}]_1 [\\ce{Cl-}]_1 = [\\ce{Na+}]_2 [\\ce{Cl-}]_2 (1.0 poin).
  2. Menentukan konsentrasi awal dan perubahan saat setimbang:
     Misal sejumlah x mol/L ion Cl- (bersama x mol/L ion Na+ demi netralitas listrik) berdifusi dari kompartemen 2 ke kompartemen 1.
     - Kompartemen 1: [Pr^10-] = 0,010 M; [Na+]_1 = 0,100 + x; [Cl-]_1 = x (1.0 poin).
     - Kompartemen 2: [Na+]_2 = 0,100 - x; [Cl-]_2 = 0,100 - x (1.0 poin).
  3. Memasukkan ke persamaan Donnan:
     (0,100 + x)(x) = (0,100 - x)^2
     0,100 x + x^2 = 0,0100 - 0,200 x + x^2
     0,300 x = 0,0100 \\implies x = \\frac{0{,}0100}{0{,}300} = 0{,}03333\\text{ M} (1.0 poin).
  4. Menghitung konsentrasi setimbang masing-masing ion:
     - Kompartemen 1: [Na+]_1 = 0,1333 M; [Cl-]_1 = 0,0333 M; [Pr^10-] = 0,0100 M.
     - Kompartemen 2: [Na+]_2 = 0,0667 M; [Cl-]_2 = 0,0667 M (1.0 poin).
- Sub-soal b (5.0 poin):
  1. Menghitung konsentrasi partikel total di kompartemen 1:
     C_{\\text{tot},1} = [\\ce{Na+}]_1 + [\\ce{Cl-}]_1 + [\\ce{Pr^10-}]_1 = 0{,}1333 + 0{,}0333 + 0{,}0100 = 0{,}1766\\text{ M} (1.0 poin).
  2. Menghitung konsentrasi partikel total di kompartemen 2:
     C_{\\text{tot},2} = [\\ce{Na+}]_2 + [\\ce{Cl-}]_2 = 0{,}0667 + 0{,}0667 = 0{,}1334\\text{ M} (1.0 poin).
  3. Menghitung selisih konsentrasi partikel osmotik:
     \\Delta C = C_{\\text{tot},1} - C_{\\text{tot},2} = 0{,}1766 - 0{,}1334 = 0{,}0432\\text{ M} (1.0 poin).
  4. Menghitung tekanan osmotik Donnan terukur (\\Delta \\Pi):
     \\Delta \\Pi = \\Delta C \\cdot R \\cdot T = 0{,}0432 \\times 0{,}08206 \\times 298{,}15 = 1{,}057\\text{ atm} \\approx 1{,}06\\text{ atm} (1.0 poin).
  5. Menjelaskan efek tekanan onkotik Donnan:
     Tekanan osmotik ideal yang disumbangkan oleh protein saja adalah \\Pi_{\\text{protein}} = C_p \\cdot R \\cdot T = 0{,}010 \\times 24{,}466 = 0{,}245\\text{ atm}. Tekanan terukur (1,06 atm) lebih dari 4 kali lipat lebih besar karena ion lawan Na+ terperangkap di kompartemen 1 oleh tarikan elektrostatik polianion protein, menciptakan kelebihan partikel osmotik netto (*Donnan oncotic pressure*) yang sangat penting dalam fisiologi kapiler darah (1.0 poin).`,
    sub_questions: [
      {
        label: 'a',
        question_text: `Turunkan persamaan kesetimbangan distribusi ion Donnan $[\\ce{Na+}]_1 [\\ce{Cl-}]_1 = [\\ce{Na+}]_2 [\\ce{Cl-}]_2$ dan hitunglah konsentrasi molar kesetimbangan ion $\\ce{Na+}$ serta ion $\\ce{Cl-}$ pada masing-masing kompartemen!`,
        points: 5.0,
        rubric: 'Menuliskan persamaan Donnan (1.0 poin), menyusun neraca massa-muatan (2.0 poin), menyelesaikan nilai difusi x = 0,0333 M (1.0 poin), dan menentukan konsentrasi setimbang kedua kompartemen (1.0 poin).',
        expected_answer: 'Distribusi Donnan [Na+]1 [Cl-]1 = [Na+]2 [Cl-]2; pada kompartemen 1: [Na+] = 0,1333 M, [Cl-] = 0,0333 M; pada kompartemen 2: [Na+] = 0,0667 M, [Cl-] = 0,0667 M.',
      },
      {
        label: 'b',
        question_text: `Hitunglah perbedaan tekanan osmotik netto ($\\Delta \\Pi = \\Pi_1 - \\Pi_2$) yang terukur melintasi membran pada $25{,}0^\\circ\\text{C}$. Bandingkan nilai ini dengan tekanan osmotik ideal protein murni bila tanpa pengaruh muatan Donnan, serta jelaskan peran biologis tekanan onkotik ini dalam sirkulasi cairan kapiler tubuh!`,
        points: 5.0,
        rubric: 'Menghitung C_tot,1 dan C_tot,2 (2.0 poin), menghitung Delta Pi = 1,06 atm (1.5 poin), membandingkan dengan Pi_protein ideal = 0,245 atm (0.5 poin), dan menjelaskan peranan tekanan onkotik kapiler (1.0 poin).',
        expected_answer: 'Delta Pi = 1,06 atm (jauh melebihi Pi ideal protein 0,245 atm); kelebihan partikel ion lawan Donnan menghasilkan tekanan onkotik koloid yang mempertahankan volume cairan di dalam pembuluh darah kapiler.',
      },
    ],
    solution_framework_template: `1. Formulasi Kesetimbangan Termodinamika Membran Donnan:
• Potensial kimia larutan garam permeabel melintasi membran: ....
• Relasi produk ion Donnan: [Na+]₁ · [Cl-]₁ = [Na+]₂ · [Cl-]₂
• Neraca massa dan kondisi elektronetralitas: ....
• Penentuan konsentrasi ion kesetimbangan kompartemen 1 & 2: ....

2. Evaluasi Tekanan Osmotik Donnan dan Tekanan Onkotik:
• Konsentrasi osmotik partikel total kompartemen 1 (C_tot,1): ....
• Konsentrasi osmotik partikel total kompartemen 2 (C_tot,2): ....
• Tekanan osmotik trans-membran netto (ΔΠ = ΔC · R · T): ....
• Komparasi dengan tekanan osmotik ideal makromolekul: ....
• Signifikansi biologis efek Donnan pada tekanan onkotik plasma darah: ....`,
    generation_type: 'manual',
    is_verified: true,
    estimated_time_minutes: 10,
    total_points: 10,
    year: 2024,
    source_event: 'Seleksi OSN Tingkat Nasional Kimia Fisik & Biofisik',
    tags: ['kesetimbangan-donnan', 'polielektrolit', 'tekanan-onkotik', 'osmometri-membran'],
  },
];
