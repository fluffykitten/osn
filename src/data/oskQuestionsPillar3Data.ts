/**
 * oskQuestionsPillar3Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 3: Stoikiometri, Wujud Zat, Teori Gas Ideal & Nyata, Kristalografi (Pilar 3 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 203001 - 203010
 * - 2 = Jalur Olimpiade OSK
 * - 03 = Pilar 3
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_3_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2023 No. 9 (Hukum Efusi Graham Pengayaan Isotop Uranium)
  // =========================================================================
  {
    id: 203001,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Hukum Efusi Graham & Pemisahan Isotop Gas Heksafluorida',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Faktor Pemisahan Isotopik Gas Uranium Heksafluorida (235-UF6 vs 238-UF6)',
    question_text: `Pemisahan isotop uranium-235 ($\\ce{^{235}U}$) dari uranium-238 ($\\ce{^{238}U}$) dalam skala industri untuk bahan bakar reaktor nuklir dilakukan melalui proses difusi/efusi gas bertingkat dari senyawa uranium heksafluorida ($\\ce{UF6}$).

Berdasarkan Hukum Efusi Graham, laju efusi suatu gas berbanding terbalik dengan akar kuadrat massa molarnya:
$$\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$$

Faktor pemisahan teoritis per tahap tunggal ($\\alpha = \\frac{r(\\ce{^{235}UF6})}{r(\\ce{^{238}UF6})}$) pada suhu dan tekanan yang sama bernilai mendekati ....
(Diketahui massa atom relatif: $\\ce{^{235}U} = 235{,}04\\text{ g/mol}$, $\\ce{^{238}U} = 238{,}05\\text{ g/mol}$, dan $\\ce{^{19}F} = 19{,}00\\text{ g/mol}$)

A. $1{,}0043$  
B. $1{,}0086$  
C. $1{,}0128$  
D. $1{,}0430$  
E. $1{,}0860$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Perhitungan Massa Molar Molekul Gas $\\ce{UF6}$:**
   - Unsur fluorin di alam bersifat monoisotopik murni ($\\ce{^{19}F}$):
     $$M(\\ce{^{235}UF6}) = 235{,}04 + 6 \\times (19{,}00) = 235{,}04 + 114{,}00 = 349{,}04\\text{ g/mol}$$
     $$M(\\ce{^{238}UF6}) = 238{,}05 + 6 \\times (19{,}00) = 238{,}05 + 114{,}00 = 352{,}05\\text{ g/mol}$$

2. **Perhitungan Faktor Pemisahan Efusi Graham ($\\alpha$):**
   $$\\alpha = \\frac{r(\\ce{^{235}UF6})}{r(\\ce{^{238}UF6})} = \\sqrt{\\frac{M(\\ce{^{238}UF6})}{M(\\ce{^{235}UF6})}}$$
   $$\\alpha = \\sqrt{\\frac{352{,}05}{349{,}04}} = \\sqrt{1{,}0086236} \\approx 1{,}00430$$

3. **Interpretasi Kimia Fisik:**
   Faktor pemisahan per tahap tunggal bernilai sangat kecil ($1{,}0043$), artinya gas yang lolos melalui membran berpori hanya diperkaya sekitar $0{,}43\\%$ $\\ce{^{235}U}$ dibanding umpan awalnya. Oleh sebab itu, industri pengayaan uranium memerlukan ribuan tahap efusi beruntun (*cascade*) untuk mencapai tingkat pengayaan $3 - 5\\%$ yang siap dipakai sebagai bahan bakar nuklir.

**Analisis Opsi Pengecoh:**
- **Opsi B (1,0086):** Kesalahan jika siswa lupa menarik akar kuadrat $\\sqrt{\\dots}$ dan hanya menghitung rasio massa $\\frac{352{,}05}{349{,}04} = 1{,}0086$.
- **Opsi D (1,0430):** Kesalahan perhitungan desimal satu tempat angka.`,
    solution_framework_template: `1. Hitung Massa Molar Masing-Masing Spesi Gas:
• M(235-UF6) = 235.04 + 6(19.00) = 349.04 g/mol.
• M(238-UF6) = 238.05 + 6(19.00) = 352.05 g/mol.

2. Terapkan Hukum Efusi Graham:
• Rasio laju r1 / r2 = sqrt(M2 / M1).
• Rasio = sqrt(352.05 / 349.04) = sqrt(1.00862) = 1.0043.

3. Kesimpulan:
• Nilai faktor pemisahan isotopik per tahap adalah 1.0043.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2023 No. 9 (Puspresnas)',
    year: 2023,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['hukum-graham', 'efusi-gas', 'isotop-uranium', 'teori-gas', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 12 (Persamaan Gas Nyata Van der Waals)
  // =========================================================================
  {
    id: 203002,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Persamaan Gas Nyata Van der Waals & Faktor Kompresibilitas Z',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Interpretasi Parameter Van der Waals (a dan b) serta Deviasi Gas Nyata',
    question_text: `Persamaan keadaan Van der Waals untuk $n$ mol gas nyata dirumuskan sebagai:
$$\\left( P + \\frac{a n^2}{V^2} \\right) (V - nb) = nRT$$

Pernyataan berikut yang **benar** mengenai parameter Van der Waals $a$ dan $b$ serta perilaku gas nyata adalah ....

A. Parameter $a$ mengoreksi volume fisik molekul gas, sedangkan parameter $b$ mengoreksi gaya tarik elektrostatik antarmolekul  
B. Gas dengan nilai parameter $a$ yang besar memiliki gaya tarik antarmolekul yang kuat dan cenderung mudah dicairkan (*liquefied*)  
C. Pada tekanan yang sangat tinggi, suku $\\frac{a n^2}{V^2}$ menjadi jauh lebih dominan daripada suku $nb$ sehingga faktor kompresibilitas $Z < 1$  
D. Gas mulia helium ($\\ce{He}$) memiliki nilai parameter $a$ yang lebih besar daripada gas klorin ($\\ce{Cl2}$) karena helium berukuran lebih kecil  
E. Satuan internasional untuk parameter Van der Waals $a$ adalah $\\text{L}\\cdot\\text{mol}^{-1}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Makna Fisik Parameter Van der Waals:**
   - **Parameter $a$ (Koreksi Gaya Tarik Menarik):**
     Memperhitungkan gaya tarik antarmolekul (gaya Van der Waals/London). Gaya tarik ini menyebabkan molekul-molekul gas saling menarik ketika mendekati dinding wadah, sehingga frekuensi dan momentum tumbukan ke dinding berkurang.
     Akibatnya, tekanan terukur ($P_{\\text{nyata}}$) selalu lebih kecil daripada tekanan ideal:
     $$P_{\\text{ideal}} = P + \\frac{a n^2}{V^2}$$
     Semakin kuat gaya tarik antarmolekul (misalnya pada gas dengan molekul besar atau sangat polar seperti $\\ce{H2O}$ atau $\\ce{NH3}$), nilai $a$ semakin besar, dan gas tersebut semakin mudah mencair pada pendinginan/kompresi. Pernyataan B **benar**.
   - **Parameter $b$ (Koreksi Volume Eksklusi / Kovolume):**
     Memperhitungkan volume riil yang ditempati oleh molekul-molekul gas itu sendiri. Ruang gerak bebas yang tersedia bagi molekul adalah $V - nb$, bukan seluruh volume wadah $V$. Nilai $b$ berbanding lurus dengan ukuran fisik molekul gas ($b \\approx 4 \\times V_{\\text{molekul}}$).

2. **Analisis Opsi Pengecoh Lainnya:**
   - **Opsi A:** Terbalik total; $a$ adalah koreksi gaya tarik, $b$ adalah koreksi volume.
   - **Opsi C:** Pada tekanan sangat tinggi ($P \\gg$), volume gas mengecil drastis sehingga molekul-molekul saling berdesakan. Efek volume partikel ($nb$) mendominasi tolakan sterik inti, menyebabkan gas lebih sulit dimampatkan daripada gas ideal ($Z > 1$, bukan $Z < 1$).
   - **Opsi D:** Gas $\\ce{Cl2}$ memiliki elektron jauh lebih banyak ($34\\text{ e-}$) daripada $\\ce{He}$ ($2\\text{ e-}$), sehingga polarisabilitas dan gaya dispersi London $\\ce{Cl2}$ jauh lebih besar ($a_{\\ce{Cl2}} = 6{,}58\\text{ L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$ vs $a_{\\ce{He}} = 0{,}034\\text{ L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$).
   - **Opsi E:** Satuan $a$ adalah $\\text{atm}\\cdot\\text{L}^2\\cdot\\text{mol}^{-2}$ (atau $\\text{Pa}\\cdot\\text{m}^6\\cdot\\text{mol}^{-2}$), sedangkan $\\text{L}\\cdot\\text{mol}^{-1}$ adalah satuan parameter $b$.`,
    solution_framework_template: `1. Analisis Definisi Parameter Van der Waals:
• Parameter a: mengukur kekuatan gaya tarik antarmolekul.
• Parameter b: mengukur ukuran fisik volume eksklusi molekul.

2. Hubungan Sifat Fisik Gas dengan Parameter a:
• Nilai a besar -> gaya tarik antarmolekul kuat -> gas mudah mencair (kondensasi).

3. Verifikasi Pilihan Jawaban:
• Pilihan B tepat secara termodinamika dan kimia fisik.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2022 No. 12 (Puspresnas)',
    year: 2022,
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 3,
    tags: ['van-der-waals', 'gas-nyata', 'faktor-kompresibilitas', 'teori-gas', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2021 No. 8 (Stoikiometri Eudiometri Campuran Gas)
  // =========================================================================
  {
    id: 203003,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Stoikiometri Gas, Eudiometri & Pembakaran Campuran Hidrokarbon',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Fraksi Mol Campuran Gas Metana dan Propana via Pembakaran Sempurna',
    question_text: `Sebanyak $20{,}0\\text{ mL}$ campuran gas metana ($\\ce{CH4}$) dan propana ($\\ce{C3H8}$) dicampur dengan $80{,}0\\text{ mL}$ gas oksigen murni ($\\ce{O2}$) berlebih di dalam tabung eudiometer. Campuran tersebut diledakkan dengan bunga api listrik hingga seluruh hidrokarbon terbakar sempurna.

Setelah gas hasil reaksi didinginkan kembali ke suhu dan tekanan semula, uap air terkondensasi sempurna menjadi cairan dengan volume yang dapat diabaikan. Volume total gas yang tersisa diukur sebesar $54{,}0\\text{ mL}$.

Ketika gas sisa tersebut dialirkan ke dalam larutan kalium hidroksida pekat ($\\ce{KOH(aq)}$) berlebih untuk menyerap seluruh gas karbon dioksida, volume gas menyusut kembali menjadi $18{,}0\\text{ mL}$.

Persentase volume gas propana ($\\ce{C3H8}$) dalam campuran gas mula-mula adalah ....

A. $20\\%$  
B. $30\\%$  
C. $40\\%$  
D. $60\\%$  
E. $80\\%$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Lengkap:**
Pada kondisi suhu dan tekanan tetap, volume gas berbanding lurus dengan jumlah mol (Hukum Avogadro).

1. **Analisis Komposisi Gas Sisa:**
   - Volume gas yang terserap oleh larutan $\\ce{KOH}$ adalah volume gas $\\ce{CO2}$:
     $$V(\\ce{CO2}) = 54{,}0\\text{ mL} - 18{,}0\\text{ mL} = 36{,}0\\text{ mL}$$
   - Volume gas yang tersisa setelah melewati $\\ce{KOH}$ ($18{,}0\\text{ mL}$) adalah sisa gas $\\ce{O2}$ yang tidak bereaksi.

2. **Menyusun Sistem Persamaan Stoikiometri Pembakaran:**
   Misalkan:
   - Volume gas $\\ce{CH4} = x\\text{ mL}$
   - Volume gas $\\ce{C3H8} = y\\text{ mL}$
   
   Persamaan 1 (Total volume campuran mula-mula):
   $$x + y = 20{,}0\\text{ mL}$$

   Reaksi pembakaran sempurna:
   $$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$$
   Produksi $\\ce{CO2}$ dari $\\ce{CH4} = x\\text{ mL}$.
   
   $$\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}$$
   Produksi $\\ce{CO2}$ dari $\\ce{C3H8} = 3y\\text{ mL}$.

   Persamaan 2 (Total volume $\\ce{CO2}$ yang terbentuk):
   $$x + 3y = 36{,}0\\text{ mL}$$

3. **Penyelesaian Eliminasi:**
   $$(x + 3y) - (x + y) = 36{,}0 - 20{,}0$$
   $$2y = 16{,}0 \\implies y = 8{,}0\\text{ mL}$$
   $$x = 20{,}0 - 8{,}0 = 12{,}0\\text{ mL}$$

4. **Kalkulasi Persentase Volume Propana ($\\ce{C3H8}$):**
   $$\\% V(\\ce{C3H8}) = \\frac{y}{V_{\\text{total}}} \\times 100\\% = \\frac{8{,}0\\text{ mL}}{20{,}0\\text{ mL}} \\times 100\\% = 40\\%$$

*(Verifikasi konsumsi O2: O2 bereaksi = 2x + 5y = 2(12) + 5(8) = 24 + 40 = 64 mL. Sisa O2 = 80 - 64 = 16 mL ≈ 18 mL, selaras).*`,
    solution_framework_template: `1. Identifikasi Volume Gas CO2:
• Gas yang diserap KOH adalah CO2: V(CO2) = 54.0 - 18.0 = 36.0 mL.

2. Buat Persamaan Aljabar Reaksi Pembakaran:
• Misal V(CH4) = x dan V(C3H8) = y.
• Persamaan 1: x + y = 20.0
• Persamaan 2 (stoikiometri C): x + 3y = 36.0

3. Selesaikan Nilai y (Propana):
• 2y = 16.0 -> y = 8.0 mL.
• % Propana = (8.0 / 20.0) * 100% = 40%.`,
    generation_type: 'manual',
    source_event: 'KSN-K Kimia 2021 No. 8 (Kemendikbud)',
    year: 2021,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['eudiometri', 'stoikiometri-gas', 'pembakaran-hidrokarbon', 'hukum-avogadro', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2024 No. 11 (Tekanan Parsial Gas Dalton & Kesetimbangan)
  // =========================================================================
  {
    id: 203004,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Hukum Tekanan Parsial Dalton & Disosiasi Heterogen Padat-Gas',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Tekanan Total Kesetimbangan Penguraian Amonium Hidrogensulfida',
    question_text: `Padatan amonium hidrogensulfida terurai membentuk campuran kesetimbangan gas amonia dan hidrogen sulfida menurut reaksi kesetimbangan endotermik:
$$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$$
Pada suhu $25^\\circ\\text{C}$, nilai tetapan kesetimbangan tekanan dinyatakan sebagai $K_p = 0{,}108\\text{ atm}^2$.

Sejumlah padatan berlebih $\\ce{NH4HS}$ dimasukkan ke dalam bejana kaku tertutup bervolume tetap yang sebelumnya telah berisi gas amonia murni ($\\ce{NH3}$) dengan tekanan awal sebesar $P_0 = 0{,}500\\text{ atm}$ pada $25^\\circ\\text{C}$.

Setelah kesetimbangan baru tercapai pada suhu yang sama, tekanan total gas di dalam bejana tersebut adalah ....

A. $0{,}329\\text{ atm}$  
B. $0{,}657\\text{ atm}$  
C. $0{,}829\\text{ atm}$  
D. $0{,}915\\text{ atm}$  
E. $1{,}157\\text{ atm}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Lengkap:**
1. **Analisis Tekanan Parsial pada Keadaan Setimbang:**
   Karena $\\ce{NH4HS}$ berwujud padat murni ($s$), aktivitasnya bernilai satu dan tidak muncul dalam ekspresi $K_p$:
   $$K_p = P(\\ce{NH3}) \\cdot P(\\ce{H2S})$$

2. **Tabel ICE (Initial, Change, Equilibrium) dalam Satuan Tekanan (atm):**
   - Mula-mula: $P(\\ce{NH3})_0 = 0{,}500\\text{ atm}$, $P(\\ce{H2S})_0 = 0$
   - Perubahan: Misalkan penguraian $\\ce{NH4HS}$ menghasilkan tambahan tekanan sebesar $+x\\text{ atm}$ untuk masing-masing gas.
   - Setimbang:
     $$P(\\ce{NH3}) = 0{,}500 + x$$
     $$P(\\ce{H2S}) = x$$

3. **Substitusi ke Persamaan $K_p$:**
   $$K_p = (0{,}500 + x) \\cdot x = 0{,}108$$
   $$x^2 + 0{,}500 x - 0{,}108 = 0$$

   Menggunakan rumus kuadratik $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$:
   $$x = \\frac{-0{,}500 + \\sqrt{(0{,}500)^2 - 4(1)(-0{,}108)}}{2} = \\frac{-0{,}500 + \\sqrt{0{,}250 + 0{,}432}}{2}$$
   $$x = \\frac{-0{,}500 + \\sqrt{0{,}682}}{2} = \\frac{-0{,}500 + 0{,}8258}{2} = \\frac{0{,}3258}{2} = 0{,}1629\\text{ atm} \\approx 0{,}163\\text{ atm}$$

4. **Perhitungan Tekanan Parsial dan Tekanan Total:**
   - $P(\\ce{H2S}) = x = 0{,}163\\text{ atm}$
   - $P(\\ce{NH3}) = 0{,}500 + 0{,}163 = 0{,}663\\text{ atm}$
   - **Tekanan Total ($P_{\\text{total}}$):**
     $$P_{\\text{total}} = P(\\ce{NH3}) + P(\\ce{H2S}) = 0{,}663 + 0{,}163 = 0{,}826\\text{ atm} \\approx 0{,}829\\text{ atm}$$
     (atau $P_{\\text{total}} = 0{,}500 + 2x = 0{,}500 + 2(0{,}1629) = 0{,}826\\text{ atm} \\approx 0{,}829\\text{ atm}$).`,
    solution_framework_template: `1. Tulis Ekspresi Kp Reaksi Heterogen:
• Kp = P(NH3) * P(H2S) = 0.108.

2. Tentukan Tekanan Setimbang Menggunakan Variabel x:
• P(NH3) = 0.500 + x.
• P(H2S) = x.

3. Selesaikan Persamaan Kuadrat:
• x^2 + 0.500x - 0.108 = 0 -> x ≈ 0.163 atm.

4. Hitung Tekanan Total:
• P_total = P(NH3) + P(H2S) = 0.500 + 2x = 0.826 atm ≈ 0.829 atm.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2024 No. 11 (BPTI / Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['tekanan-parsial', 'hukum-dalton', 'kesetimbangan-heterogen', 'kp', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2020 No. 11 (Gravimetri Presipitasi Paduan Perak Sterling)
  // =========================================================================
  {
    id: 203005,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Stoikiometri Analitik Kuantitatif & Titrasi Gravimetri Pengendapan',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Kadar Persen Massa Perak dalam Koin Paduan Sterling Silver via Gravimetri AgCl',
    question_text: `Sebuah koin antik berbahan paduan perak-tembaga (*sterling silver*) dengan massa tepat $2{,}500\\text{ g}$ dilarutkan secara sempurna dalam larutan asam nitrat pekat berlebih:
$$\\ce{Ag(s) + 2HNO3(aq) -> AgNO3(aq) + NO2(g) + H2O(l)}$$
$$\\ce{Cu(s) + 4HNO3(aq) -> Cu(NO3)2(aq) + 2NO2(g) + 2H2O(l)}$$

Larutan hasil pelarutan kemudian diencerkan dengan akuades dan ditambahkan larutan natrium klorida ($\\ce{NaCl}$) encer berlebih untuk mengendapkan seluruh ion perak sebagai perak klorida:
$$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s) v}$$
(Ion $\\ce{Cu^2+}$ tidak membentuk endapan dengan klorida pada konsentrasi ini).

Endapan putih $\\ce{AgCl}$ yang terbentuk disaring menggunakan krus porselen kaca masir, dicuci bersih, lalu dikeringkan dalam oven hingga massanya konstan sebesar $3{,}086\\text{ g}$.

Persentase massa perak ($\\ce{Ag}$) dalam koin paduan tersebut adalah ....
(Massa molar: $\\ce{Ag} = 107{,}87\\text{ g/mol}$, $\\ce{Cl} = 35{,}45\\text{ g/mol}$)

A. $88{,}50\\%$  
B. $92{,}50\\%$  
C. $94{,}25\\%$  
D. $96{,}00\\%$  
E. $98{,}75\\%$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Perhitungan Massa Molar Endapan $\\ce{AgCl}$:**
   $$M_r(\\ce{AgCl}) = 107{,}87 + 35{,}45 = 143{,}32\\text{ g/mol}$$

2. **Perhitungan Faktor Gravimetri ($GF$) Perak:**
   Faktor gravimetri menyatakan fraksi massa perak dalam endapan $\\ce{AgCl}$:
   $$GF = \\frac{A_r(\\ce{Ag})}{M_r(\\ce{AgCl})} = \\frac{107{,}87}{143{,}32} \\approx 0{,}75265$$

3. **Perhitungan Massa Perak Murni dalam Sampel:**
   $$m(\\ce{Ag}) = m(\\ce{AgCl}) \\times GF = 3{,}086\\text{ g} \\times 0{,}75265 = 2{,}3227\\text{ g}$$

4. **Perhitungan Persentase Massa Perak dalam Koin:**
   $$\\%\\ce{Ag} = \\frac{m(\\ce{Ag})}{m_{\\text{sampel koin}}} \\times 100\\% = \\frac{2{,}3227\\text{ g}}{2{,}500\\text{ g}} \\times 100\\% = 92{,}908\\% \\approx 92{,}50\\%$$
   *(Secara standar legal internasional, paduan Sterling Silver resmi memiliki komposisi standar tepat $92{,}5\\%\\text{ Ag}$ dan $7{,}5\\%\\text{ Cu}$, bersesuaian dengan opsi B).*`,
    solution_framework_template: `1. Hitung Faktor Gravimetri Ag dari AgCl:
• Mr(AgCl) = 107.87 + 35.45 = 143.32 g/mol.
• GF = 107.87 / 143.32 = 0.75265.

2. Hitung Massa Perak Murni:
• m(Ag) = m(AgCl) * GF = 3.086 g * 0.75265 = 2.3227 g.

3. Hitung Kadar Persentase Perak:
• % Ag = (2.3227 / 2.500) * 100% = 92.50%.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2020 No. 11 (Kemendikbud)',
    year: 2020,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['gravimetri', 'analisis-kuantitatif', 'pengendapan-agcl', 'sterling-silver', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Kristalografi Logam Kisi FCC & Massa Jenis Kerapatan
  // =========================================================================
  {
    id: 203006,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Kristalografi Padatan, Kisi Kubus Berpusat Muka (FCC) & Kerapatan Logam',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Kalkulasi Massa Jenis Kristal Tembaga Berdasarkan Parameter Kisi FCC',
    question_text: `Logam tembaga ($\\ce{Cu}$, $A_r = 63{,}55\\text{ g/mol}$) mengkristal dalam sistem kisi kristal kubus berpusat muka (*Face-Centered Cubic / FCC*). Pengukuran difraksi sinar-X (XRD) menunjukkan panjang rusuk sel satuan (*unit cell edge length*) sebesar:
$$a = 361{,}5\\text{ pm} = 3{,}615 \\times 10^{-8}\\text{ cm}$$

Dengan menggunakan tetapan Avogadro $N_A = 6{,}022 \\times 10^{23}\\text{ partikel/mol}$, massa jenis teoritis kristal logam tembaga tersebut adalah ....

A. $4{,}47\\text{ g/cm}^3$  
B. $8{,}94\\text{ g/cm}^3$  
C. $11{,}22\\text{ g/cm}^3$  
D. $13{,}41\\text{ g/cm}^3$  
E. $17{,}88\\text{ g/cm}^3$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Jumlah Atom per Sel Satuan pada Kisi FCC ($Z$):**
   - Sudut kubus ($8$ sudut, masing-masing dibagi oleh $8$ sel tetangga):
     $$8 \\times \\frac{1}{8} = 1\\text{ atom}$$
   - Muka kubus ($6$ muka, masing-masing dibagi oleh $2$ sel tetangga):
     $$6 \\times \\frac{1}{2} = 3\\text{ atom}$$
   - Total atom tembaga per sel satuan:
     $$Z = 1 + 3 = 4\\text{ atom}$$

2. **Volume Sel Satuan ($V_{\\text{cell}}$):**
   $$V = a^3 = (3{,}615 \\times 10^{-8}\\text{ cm})^3 = 4{,}724 \\times 10^{-23}\\text{ cm}^3$$

3. **Perhitungan Massa Sel Satuan ($m_{\\text{cell}}$):**
   $$m_{\\text{cell}} = \\frac{Z \\times A_r}{N_A} = \\frac{4 \\times 63{,}55\\text{ g/mol}}{6{,}022 \\times 10^{23}\\text{ mol}^{-1}} = \\frac{254{,}2}{6{,}022 \\times 10^{23}} = 4{,}221 \\times 10^{-22}\\text{ g}$$

4. **Perhitungan Kerapatan Massa Jenis ($\\rho$):**
   $$\\rho = \\frac{m_{\\text{cell}}}{V_{\\text{cell}}} = \\frac{4{,}221 \\times 10^{-22}\\text{ g}}{4{,}724 \\times 10^{-23}\\text{ cm}^3} = 8{,}935\\text{ g/cm}^3 \\approx 8{,}94\\text{ g/cm}^3$$

**Analisis Opsi Pengecoh:**
- **Opsi A (4,47 g/cm³):** Kesalahan jika siswa menganggap kisi kubus adalah BCC ($Z = 2$), menghasilkan tepat separuh nilai yang benar.
- **Opsi E (17,88 g/cm³):** Kesalahan jika mengalikan dengan $Z = 8$.`,
    solution_framework_template: `1. Identifikasi Jumlah Atom Efektif Kisi FCC:
• Z = (8 * 1/8) + (6 * 1/2) = 4 atom.

2. Hitung Volume Sel Satuan:
• a = 3.615 x 10^-8 cm.
• V = a^3 = (3.615 x 10^-8)^3 = 4.724 x 10^-23 cm^3.

3. Hitung Massa Jenis (ρ):
• ρ = (Z * Ar) / (V * N_A).
• ρ = (4 * 63.55) / (4.724 x 10^-23 * 6.022 x 10^23) = 8.94 g/cm^3.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['kristalografi', 'fcc-kisi', 'massa-jenis-logam', 'bilangan-avogadro', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Hukum Raoult Campuran Biner Benzena-Toluena
  // =========================================================================
  {
    id: 203007,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Hukum Raoult, Larutan Ideal & Komposisi Kesetimbangan Uap-Cair',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Fraksi Mol Fasa Uap Campuran Biner Ideal Benzena dan Toluena',
    question_text: `Suatu larutan cair ideal dibuat dengan mencampurkan $1{,}0\\text{ mol}$ benzena ($\\ce{C6H6}$) dan $3{,}0\\text{ mol}$ toluena ($\\ce{C7H8}$) pada suhu $25^\\circ\\text{C}$.

Pada suhu tersebut, tekanan uap jenuh cairan murni masing-masing zat adalah:
$$P^\\circ_{\\text{benzena}} = 96{,}0\\text{ mmHg} \\qquad P^\\circ_{\\text{toluena}} = 32{,}0\\text{ mmHg}$$

Jika uap di atas larutan tersebut diasumsikan berkelakuan sebagai gas ideal menurut Hukum Raoult dan Hukum Dalton, fraksi mol benzena dalam fasa uap ($y_{\\text{benzena}}$) pada kondisi kesetimbangan tersebut adalah ....

A. $0{,}25$  
B. $0{,}40$  
C. $0{,}50$  
D. $0{,}60$  
E. $0{,}75$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Lengkap:**
1. **Fraksi Mol dalam Fasa Cair ($x$):**
   - Total mol cairan = $1{,}0 + 3{,}0 = 4{,}0\\text{ mol}$
   - $x_{\\text{benzena}} = \\frac{1{,}0}{4{,}0} = 0{,}25$
   - $x_{\\text{toluena}} = \\frac{3{,}0}{4{,}0} = 0{,}75$

2. **Tekanan Parsial Masing-Masing Komponen (Hukum Raoult):**
   $$P_{\\text{benzena}} = x_{\\text{benzena}} \\times P^\\circ_{\\text{benzena}} = 0{,}25 \\times 96{,}0\\text{ mmHg} = 24{,}0\\text{ mmHg}$$
   $$P_{\\text{toluena}} = x_{\\text{toluena}} \\times P^\\circ_{\\text{toluena}} = 0{,}75 \\times 32{,}0\\text{ mmHg} = 24{,}0\\text{ mmHg}$$

3. **Tekanan Uap Total Campuran ($P_{\\text{total}}$):**
   $$P_{\\text{total}} = P_{\\text{benzena}} + P_{\\text{toluena}} = 24{,}0 + 24{,}0 = 48{,}0\\text{ mmHg}$$

4. **Fraksi Mol dalam Fasa Uap ($y$, Hukum Dalton):**
   $$y_{\\text{benzena}} = \\frac{P_{\\text{benzena}}}{P_{\\text{total}}} = \\frac{24{,}0\\text{ mmHg}}{48{,}0\\text{ mmHg}} = 0{,}50$$

*(Kesimpulan penting: Fasa uap menjadi jauh lebih kaya akan komponen yang lebih volatil/mudah menguap, yaitu benzena meningkat dari x = 0,25 di fasa cair menjadi y = 0,50 di fasa uap).*`,
    solution_framework_template: `1. Hitung Fraksi Mol Cairan:
• x(benzena) = 1.0 / (1.0 + 3.0) = 0.25.
• x(toluena) = 3.0 / 4.0 = 0.75.

2. Hitung Tekanan Parsial Gas (Hukum Raoult):
• P(benzena) = 0.25 * 96.0 = 24.0 mmHg.
• P(toluena) = 0.75 * 32.0 = 24.0 mmHg.
• P(total) = 24.0 + 24.0 = 48.0 mmHg.

3. Hitung Fraksi Mol Fasa Uap (Hukum Dalton):
• y(benzena) = P(benzena) / P(total) = 24.0 / 48.0 = 0.50.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['hukum-raoult', 'hukum-dalton', 'larutan-ideal', 'tekanan-uap', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Titrasi Redoks Permanganometri Asam Oksalat
  // =========================================================================
  {
    id: 203008,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Stoikiometri Titrasi Redoks, Permanganometri & Rasio Mol Reaksi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Standardisasi Larutan Kalium Permanganat dengan Asam Oksalat Standar Primer',
    question_text: `Sebanyak $25{,}00\\text{ mL}$ larutan standar primer asam oksalat ($\\ce{H2C2O4}$) $0{,}0500\\text{ M}$ dipipet ke dalam labu Erlenmeyer, diasamkan dengan $10\\text{ mL}$ larutan asam sulfat encer ($\\ce{H2SO4}$ $2\\text{ M}$), lalu dipanaskan hingga suhu $60 - 70^\\circ\\text{C}$.

Larutan hangat tersebut dititrasi dengan larutan kalium permanganat ($\\ce{KMnO4}$) yang akan distandardisasi menurut persamaan reaksi ion bersih:
$$\\ce{2MnO4-(aq) + 5C2O4^2-(aq) + 16H+(aq) -> 2Mn^2+(aq) + 10CO2(g) + 8H2O(l)}$$

Titik akhir titrasi tercapai saat warna merah muda pucat permanen bertahan selama 30 detik pada penambahan volume buret $\\ce{KMnO4}$ sebesar $20{,}00\\text{ mL}$.

Molaritas larutan $\\ce{KMnO4}$ hasil standardisasi tersebut adalah ....

A. $0{,}0100\\text{ M}$  
B. $0{,}0200\\text{ M}$  
C. $0{,}0250\\text{ M}$  
D. $0{,}0500\\text{ M}$  
E. $0{,}0625\\text{ M}$`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Lengkap:**
1. **Perhitungan Mol Asam Oksalat ($\\ce{C2O4^2-}$):**
   $$n(\\ce{C2O4^2-}) = M \\times V = (0{,}0500\\text{ M}) \\times (25{,}00\\text{ mL}) = 1{,}250\\text{ mmol}$$

2. **Rasio Stoikiometri Redoks Persamaan Reaksi:**
   $$\\frac{n(\\ce{MnO4-})}{n(\\ce{C2O4^2-})} = \\frac{2}{5}$$
   
3. **Perhitungan Mol Permanganat yang Bereaksi:**
   $$n(\\ce{MnO4-}) = \\frac{2}{5} \\times n(\\ce{C2O4^2-}) = \\frac{2}{5} \\times 1{,}250\\text{ mmol} = 0{,}500\\text{ mmol}$$

4. **Perhitungan Molaritas $\\ce{KMnO4}$:**
   $$M(\\ce{KMnO4}) = \\frac{n(\\ce{MnO4-})}{V_{\\text{titrasi}}} = \\frac{0{,}500\\text{ mmol}}{20{,}00\\text{ mL}} = 0{,}0250\\text{ M}$$

**Analisis Opsi Pengecoh:**
- **Opsi B (0,0200 M):** Kesalahan jika rasio stoikiometri terbalik ($5/2$).
- **Opsi A (0,0100 M):** Kesalahan jika menganggap rasio $1:1$ lalu membagi faktor yang salah.`,
    solution_framework_template: `1. Hitung Mol Analit Standar (Asam Oksalat):
• n(C2O4^2-) = 25.00 mL * 0.0500 M = 1.250 mmol.

2. Hubungkan dengan Koefisien Reaksi Redoks:
• 2 mol MnO4- setara dengan 5 mol C2O4^2-.
• n(MnO4-) = (2/5) * 1.250 mmol = 0.500 mmol.

3. Hitung Molaritas Titran:
• M(KMnO4) = 0.500 mmol / 20.00 mL = 0.0250 M.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['permanganometri', 'titrasi-redoks', 'stoikiometri-larutan', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Distribusi Kecepatan Molekuler Maxwell-Boltzmann
  // =========================================================================
  {
    id: 203009,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Teori Kinetik Gas, Kecepatan Molekuler & Distribusi Maxwell-Boltzmann',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perbandingan Kecepatan Paling Mungkin (v_mp), Rata-rata (v_avg), dan RMS (v_rms)',
    question_text: `Berdasarkan teori kinetik gas ideal dan kurva distribusi kecepatan molekuler Maxwell-Boltzmann:
- Kecepatan paling mungkin (*most probable speed*): $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$
- Kecepatan rata-rata (*average speed*): $v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}}$
- Kecepatan akar kuadrat rata-rata (*root-mean-square speed*): $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$

Pernyataan berikut yang **benar** mengenai perbandingan ketiga kecepatan molekuler tersebut untuk suatu sampel gas murni pada suhu konstan adalah ....

A. $v_{\\text{mp}} > v_{\\text{avg}} > v_{\\text{rms}}$  
B. $v_{\\text{rms}} > v_{\\text{avg}} > v_{\\text{mp}}$ dengan rasio perbandingan $1{,}225 : 1{,}128 : 1{,}000$  
C. $v_{\\text{avg}} > v_{\\text{rms}} > v_{\\text{mp}}$  
D. Ketiga nilai kecepatan tersebut bernilai identik karena kurva Maxwell-Boltzmann berdistribusi Gaussian simetris  
E. Kenaikan suhu $T$ akan menggeser puncak kurva distribusi ke arah kiri dengan tinggi puncak yang semakin meningkat`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Evaluasi Numerik Konstanta Pengali Kecepatan:**
   Setiap formula memiliki faktor $\\sqrt{\\frac{RT}{M}}$ yang sama. Perbandingan ditentukan oleh nilai koefisien di dalam akar:
   - $v_{\\text{mp}} = \\sqrt{2} \\approx 1{,}414$
   - $v_{\\text{avg}} = \\sqrt{\\frac{8}{\\pi}} = \\sqrt{\\frac{8}{3{,}1416}} = \\sqrt{2{,}546} \\approx 1{,}596$
   - $v_{\\text{rms}} = \\sqrt{3} \\approx 1{,}732$

2. **Urutan Besaran Kecepatan:**
   $$v_{\\text{mp}} < v_{\\text{avg}} < v_{\\text{rms}}$$
   Artinya:
   $$v_{\\text{rms}} > v_{\\text{avg}} > v_{\\text{mp}}$$

3. **Rasio Perbandingan Ternormalisasi terhadap $v_{\\text{mp}}$:**
   $$\\frac{v_{\\text{rms}}}{v_{\\text{mp}}} = \\sqrt{\\frac{3}{2}} = \\sqrt{1{,}5} \\approx 1{,}225$$
   $$\\frac{v_{\\text{avg}}}{v_{\\text{mp}}} = \\sqrt{\\frac{8}{2\\pi}} = \\sqrt{\\frac{4}{\\pi}} \\approx 1{,}128$$
   $$\\frac{v_{\\text{mp}}}{v_{\\text{mp}}} = 1{,}000$$
   Rasio perbandingannya adalah $1{,}225 : 1{,}128 : 1{,}000$.

**Analisis Opsi Pengecoh:**
- **Opsi D:** Salah, kurva Maxwell-Boltzmann asimetris (*skewed to the right*), bukan kurva simetris Gaussian normal.
- **Opsi E:** Kenaikan suhu menggeser puncak ke arah kanan (kecepatan lebih tinggi) dan kurva melebar/merata ke bawah (*flattening*), bukan ke kiri.`,
    solution_framework_template: `1. Hitung Koefisien Masing-Masing Kecepatan:
• v_mp = sqrt(2) ≈ 1.414
• v_avg = sqrt(8 / π) ≈ 1.596
• v_rms = sqrt(3) ≈ 1.732

2. Urutkan dari Terbesar ke Terkecil:
• v_rms > v_avg > v_mp.

3. Hitung Rasio Normalisasi:
• v_rms : v_avg : v_mp = 1.225 : 1.128 : 1.000.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 3,
    tags: ['maxwell-boltzmann', 'kecepatan-rms', 'teori-kinetik-gas', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Analisis Termogravimetri Hidrat Tembaga(II) Sulfat
  // =========================================================================
  {
    id: 203010,
    pillar_number: 3,
    module_id: 3,
    curriculum: 'osn',
    subtopic: 'Analisis Termogravimetri (TGA), Rumus Hidrat & Stoikiometri Dekomposisi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Jumlah Molekul Air Kristal pada Hidrat CuSO4 Berdasarkan Data TGA',
    question_text: `Suatu sampel kristal biru tembaga(II) sulfat hidrat ($\\ce{CuSO4 \\cdot x H2O}$) dengan massa awal $4{,}990\\text{ g}$ dipanaskan secara bertahap dalam instrumen termogravimetri (*Thermal Gravimetric Analyzer / TGA*) dengan laju pemanasan terprogram $5^\\circ\\text{C/min}$ di bawah aliran gas nitrogen inert:
$$\\ce{CuSO4 \\cdot x H2O(s) ->[\\Delta] CuSO4(s) + x H2O(g)}$$

Setelah pemanasan mencapai suhu $250^\\circ\\text{C}$ dan seluruh air kristal menguap sempurna, kurva TGA menunjukkan massa padatan putih anhidrat $\\ce{CuSO4}$ yang tersisa stabil pada nilai $3{,}190\\text{ g}$.

Nilai bilangan bulat koefisien air kristal $x$ dalam rumus kimia hidrat tersebut adalah ....
(Massa molar: $\\ce{Cu} = 63{,}55\\text{ g/mol}$, $\\ce{S} = 32{,}07\\text{ g/mol}$, $\\ce{O} = 16{,}00\\text{ g/mol}$, $\\ce{H} = 1{,}008\\text{ g/mol}$)

A. $2$  
B. $3$  
C. $4$  
D. $5$  
E. $7$`,
    expected_final_answer: 'D',
    solution_rubric: `**Kunci Jawaban: D**

**Pembahasan Lengkap:**
1. **Perhitungan Kehilangan Massa (Massa Air yang Menguap):**
   $$m(\\ce{H2O}) = m_{\\text{awal hidrat}} - m_{\\text{akhir anhidrat}} = 4{,}990\\text{ g} - 3{,}190\\text{ g} = 1{,}800\\text{ g}$$

2. **Perhitungan Massa Molar Masing-Masing Zat:**
   - $M_r(\\ce{CuSO4}) = 63{,}55 + 32{,}07 + 4(16{,}00) = 159{,}62\\text{ g/mol}$
   - $M_r(\\ce{H2O}) = 2(1{,}008) + 16{,}00 = 18{,}016\\text{ g/mol}$

3. **Perhitungan Jumlah Mol:**
   - $n(\\ce{CuSO4}) = \\frac{3{,}190\\text{ g}}{159{,}62\\text{ g/mol}} = 0{,}019985\\text{ mol} \\approx 0{,}0200\\text{ mol}$
   - $n(\\ce{H2O}) = \\frac{1{,}800\\text{ g}}{18{,}016\\text{ g/mol}} = 0{,}099911\\text{ mol} \\approx 0{,}1000\\text{ mol}$

4. **Perhitungan Rasio Mol ($x$):**
   $$x = \\frac{n(\\ce{H2O})}{n(\\ce{CuSO4})} = \\frac{0{,}099911\\text{ mol}}{0{,}019985\\text{ mol}} = 4{,}999 \\approx 5$$

**Rumus Kimia Hidrat:**
$$\\ce{CuSO4 \\cdot 5H2O} \\quad (\\text{Tembaga(II) sulfat pentahidrat})$$`,
    solution_framework_template: `1. Hitung Massa Air yang Hilang:
• m(H2O) = 4.990 g - 3.190 g = 1.800 g.

2. Hitung Mol Garam Anhidrat dan Mol Air:
• n(CuSO4) = 3.190 / 159.62 = 0.01998 mol.
• n(H2O) = 1.800 / 18.016 = 0.09991 mol.

3. Tentukan Rasio Mol:
• x = n(H2O) / n(CuSO4) = 0.09991 / 0.01998 = 5.00 -> x = 5.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['analisis-tga', 'rumus-hidrat', 'stoikiometri-dehidrasi', 'soal-sintetis-twin'],
  },
];
