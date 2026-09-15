// Silabus Lengkap 10 Topik Silabus OSN Kimia (Standar Puspresnas / BPTI & IChO)
import type { ModuleItem, Question } from '../types/database';

export const PILLARS_DATA: ModuleItem[] = [
  {
    id: 1,
    pillar_number: 1,
    category: 'Kimia Teori Dasar',
    title: 'Struktur Atom & Periodisitas Unsur',
    slug: 'struktur-atom-periodisitas',
    description: 'Bilangan kuantum, konfigurasi elektron gas mulia, tren sifat periodik unsur (IE, EA, elektronegativitas), muatan inti efektif Z_eff Slater, dan radioaktivitas.',
    order_index: 1,
    content_markdown: `# Topik 1: Struktur Atom & Periodisitas Unsur
Pelajari mekanika gelombang elektron, aturan Aufbau, Hund, dan larangan Pauli.

## Konsep Kunci:
1. **Bilangan Kuantum:** $n$ (utama), $l$ (azimut/orbital), $m_l$ (magnetik), $m_s$ (spin).
2. **Aturan Slater ($Z_{\\text{eff}}$):** $Z_{\\text{eff}} = Z - S$, menentukan kekuatan tarikan inti terhadap elektron valensi.
3. **Tren Periodisitas:** Jari-jari atom, energi ionisasi bertingkat ($IE_1, IE_2$), afinitas elektron, dan keelektronegatifan Pauling.`,
  },
  {
    id: 2,
    pillar_number: 2,
    category: 'Kimia Fisik & Ikatan',
    title: 'Ikatan Kimia & Geometri Molekul',
    slug: 'ikatan-kimia-geometri-molekul',
    description: 'VSEPR, hibridisasi orbital (sp, sp2, sp3, sp3d, sp3d2), Teori Orbital Molekul (MOT) homonuklir & heteronuklir, energi kisi siklus Born-Haber, dan gaya antarmolekul.',
    order_index: 2,
    content_markdown: `# Topik 2: Ikatan Kimia & Geometri Molekul
Eksplorasi bentuk geometri molekul dan interaksi orbital.

## Konsep Kunci:
1. **VSEPR & Domain Elektron:** Menentukan geometri elektron dan bentuk molekul aktual dengan memperhitungkan tolakan pasangan elektron bebas (PEB).
2. **Teori Orbital Molekul (MOT):** Orde ikatan $= \\frac{1}{2}(N_b - N_a)$, sifat paramagnetik vs diamagnetik spesies diatomik (misal: $\\ce{O2}$, $\\ce{N2}$, $\\ce{NO+}$).
3. **Siklus Born-Haber:** Perhitungan energi kisi kristal ionik dari entalpi pembentukan standar.`,
  },
  {
    id: 3,
    pillar_number: 3,
    category: 'Stoikiometri Dasar',
    title: 'Stoikiometri & Wujud Zat',
    slug: 'stoikiometri-wujud-zat',
    description: 'Konsep mol lanjutan, pereaksi pembatas, persen hasil, hukum gas ideal (PV = nRT), tekanan parsial Dalton, gas nyata Van der Waals, dan diagram fasa P-T.',
    order_index: 3,
    content_markdown: `# Topik 3: Stoikiometri & Wujud Zat
Perhitungan kuantitatif zat kimia dan dinamika fasa.

## Konsep Kunci:
1. **Persamaan Gas Nyata (Van der Waals):** $\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$.
2. **Hukum Difusi-Efusi Graham:** $\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$.
3. **Stoikiometri Larutan & Redoks:** Penentuan kadar zat melalui reaksi pengendapan dan pembakaran.`,
  },
  {
    id: 4,
    pillar_number: 4,
    category: 'Kimia Fisik',
    title: 'Termodinamika Kimia',
    slug: 'termodinamika-kimia',
    description: 'Hukum I Termodinamika (kalor q, kerja w, energi dalam dU), Hukum Hess, Hukum II & III (entropi dS, energi bebas Gibbs dG), dan hubungan termodinamika dG° = -RT ln K.',
    order_index: 4,
    content_markdown: `# Topik 4: Termodinamika Kimia
Kespontanan reaksi kimia dan transformasi energi.

## Konsep Kunci:
1. **Hukum I Termodinamika:** $\\Delta U = q + w$, di mana $w = -P_{\\text{ext}}\\Delta V$.
2. **Energi Bebas Gibbs:** $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$.
3. **Kespontanan & Tetapan Kesetimbangan:** $\\Delta G^\\circ = -RT \\ln K$. Hubungan Van 't Hoff: $\\ln\\frac{K_2}{K_1} = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.`,
  },
  {
    id: 5,
    pillar_number: 5,
    category: 'Kimia Larutan',
    title: 'Kesetimbangan Kimia & Larutan',
    slug: 'kesetimbangan-kimia-larutan',
    description: 'Tetapan Kc dan Kp, asas Le Chatelier, pH asam-basa poliprotik, hidrolisis garam, larutan penyangga, kurva titrasi presisi, hasil kali kelarutan (Ksp), dan ion kompleks (Kf).',
    order_index: 5,
    content_markdown: `# Topik 5: Kesetimbangan Kimia & Larutan
Dinamika reaksi bolak-balik dan kesetimbangan ionik dalam air.

## Konsep Kunci:
1. **Prinsip Le Chatelier:** Respon sistem terhadap gangguan suhu, tekanan, volume, dan konsentrasi.
2. **Asam-Basa Poliprotik:** Perhitungan fraksi spesies $\\alpha$ dan pH larutan amfiprotik seperti $\\ce{HCO3-}$ atau $\\ce{H2PO4-}$.
3. **Pengendapan Selektif & Ksp:** Pengaruh efek ion sejenis dan pembentukan kompleks terhadap kelarutan garam sukar larut.`,
  },
  {
    id: 6,
    pillar_number: 6,
    category: 'Kimia Fisik',
    title: 'Kinetika Kimia',
    slug: 'kinetika-kimia',
    description: 'Hukum laju terintegrasi (orde 0, 1, 2), waktu paruh t1/2, persamaan Arrhenius, teori tumbukan, pendekatan keadaan tunak (steady-state approximation), dan kinetika enzim Michaelis-Menten.',
    order_index: 6,
    content_markdown: `# Topik 6: Kinetika Kimia
Laju perubahan zat dan tahapan mekanisme reaksi elementer.

## Konsep Kunci:
1. **Hukum Laju Terintegrasi:** Orde 1: $\\ln[A]_t = -kt + \\ln[A]_0$; Orde 2: $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$.
2. **Persamaan Arrhenius:** $k = A e^{-E_a/RT} \\implies \\ln k = -\\frac{E_a}{R}\\frac{1}{T} + \\ln A$.
3. **Pendekatan Kondisi Tunak (SSA):** Mengasumsikan laju pembentukan zat antara reaktif sama dengan laju konsumsinya: $\\frac{d[I]}{dt} \\approx 0$.`,
  },
  {
    id: 7,
    pillar_number: 7,
    category: 'Kimia Fisik',
    title: 'Elektrokimia',
    slug: 'elektrokimia',
    description: 'Penyetaraan reaksi redoks ion-elektron, sel volta, potensial reduksi standar E°, persamaan Nernst untuk kondisi non-standar, sel konsentrasi, dan hukum elektrolisis Faraday.',
    order_index: 7,
    content_markdown: `# Topik 7: Elektrokimia
Hubungan antara reaksi redoks spontan dan energi listrik.

## Konsep Kunci:
1. **Hubungan Termodinamika Sel:** $\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}}$.
2. **Persamaan Nernst:** $E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{RT}{nF}\\ln Q = E^\\circ_{\\text{sel}} - \\frac{0.0592}{n}\\log Q$ pada 298.15 K.
3. **Hukum Faraday:** Massa zat yang diendapkan $m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$.`,
  },
  {
    id: 8,
    pillar_number: 8,
    category: 'Kimia Anorganik',
    title: 'Kimia Anorganik & Senyawa Koordinasi',
    slug: 'anorganik-senyawa-koordinasi',
    description: 'Kimia unsur golongan utama, logam transisi 3d, tata nama senyawa koordinasi IUPAC, Teori Medan Kristal (CFT: pemisahan orbital d oktahedral dan tetrahedral), sifat magnetik, dan isomerisme kompleks.',
    order_index: 8,
    content_markdown: `# Topik 8: Kimia Anorganik & Senyawa Koordinasi
Struktur senyawa kompleks logam transisi dan teori ikatan anorganik.

## Konsep Kunci:
1. **Teori Medan Kristal (CFT):** Pembelahan energi orbital d menjadi orbital $t_{2g}$ dan $e_g$ pada kompleks oktahedral dengan parameter pemisahan $\\Delta_o$.
2. **Deret Spektrokimia & Spin:** Ligan medan kuat (misal: $\\ce{CN-}, \\ce{CO}$) menghasilkan spin rendah; ligan medan lemah (misal: $\\ce{I-}, \\ce{Cl-}$) menghasilkan spin tinggi.
3. **Isomerisme Kompleks:** Isomer geometris (cis-trans, fac-mer), isomer optis, isomer keterikatan (linkage), dan isomer koordinasi.`,
  },
  {
    id: 9,
    pillar_number: 9,
    category: 'Kimia Analitik',
    title: 'Kimia Analitik & Dasar Spektroskopi',
    slug: 'analitik-spektroskopi',
    description: 'Titrasi asidi-alkalimetri, titrasi redoks permanganometri dan iodometri, titrasi kompleksometri EDTA, spektrofotometri UV-Vis (Hukum Lambert-Beer), spektroskopi IR, dan 1H-NMR spectrum solving.',
    order_index: 9,
    content_markdown: `# Topik 9: Kimia Analitik & Spektroskopi
Elusidasi struktur senyawa molekuler dan teknik analisis kuantitatif.

## Konsep Kunci:
1. **Hukum Lambert-Beer:** $A = \\varepsilon \\cdot b \\cdot c$, absorbansi proporsional terhadap konsentrasi analit.
2. **Spektroskopi Inframerah (FT-IR):** Identifikasi pita serapan gugus fungsi utama (misal: $\\ce{O-H}$ lebar $3200-3600\\text{ cm}^{-1}$, $\\ce{C=O}$ tajam $1700-1750\\text{ cm}^{-1}$).
3. **Resonansi Magnet Inti ($^1\\text{H-NMR}$):** Pergeseran kimia ($\\delta$, ppm), integrasi jumlah proton, dan pemecahan spin-spin (aturan $n+1$).`,
  },
  {
    id: 10,
    pillar_number: 10,
    category: 'Kimia Organik',
    title: 'Kimia Organik & Biokimia',
    slug: 'kimia-organik-biokimia',
    description: 'Tata nama IUPAC, stereokimia (R/S Cahn-Ingold-Prelog, isomer geometri E/Z, diastereomer), mekanisme reaksi SN1/SN2/E1/E2, adisi elektrofilik alkena/alkuna, reaksi karbonil, asam amino, dan biomolekul.',
    order_index: 10,
    content_markdown: `# Topik 10: Kimia Organik & Biokimia
Mekanisme transformasi gugus fungsi karbon dan kimia senyawa kehidupan.

## Konsep Kunci:
1. **Stereokimia:** Penentuan konfigurasi stereogenik $R$ dan $S$ pada atom karbon asimetris berdasarkan aturan prioritas CIP.
2. **Substitusi & Eliminasi Alkil Halida:** Persaingan $S_N1$ (karbokation, rasemisasi), $S_N2$ (inversi Walden, satu tahap), $E1$, dan $E2$ (aturan Zaitsev).
3. **Reaksi Senyawa Karbonil:** Adisi nukleofilik, kondensasi aldol, pembentukan asetal, esterifikasi Fischer, dan reaksi saponifikasi.`,
  },
];

export const BENCHMARK_QUESTIONS: Question[] = [
  {
    id: 100,
    pillar_number: 1,
    module_id: 1,
    subtopic: 'Muatan Inti Efektif Slater & Orbital',
    difficulty: 'OSN',
    title: 'Penentuan Zeff Slater & Urutan Ionisasi Seng (Zn)',
    question_text: `Atom seng ($\\ce{Zn}$) memiliki nomor atom $Z = 30$. Konfigurasi elektron keadaaan dasar atom netral seng adalah $[\\ce{Ar}] 4s^2 3d^{10}$.

**Pertanyaan:**
1. Tuliskan pengelompokan orbital atom $\\ce{Zn}$ menurut Aturan Slater!
2. Hitung tetapan pemerisaian ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk elektron pada subkulit $4s$!
3. Hitung tetapan pemerisaian ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk elektron pada subkulit $3d$!
4. Berdasarkan perbandingan nilai $Z_{\\text{eff}}$ tersebut, jelaskan mengapa atom $\\ce{Zn}$ membentuk ion $\\ce{Zn^2+}$ dengan melepaskan elektron $4s$ terlebih dahulu daripada elektron $3d$!`,
    expected_final_answer: 'Zeff(4s) = +4.35, Zeff(3d) = +8.85',
    solution_rubric: `1. Kelompok Slater: $(1s)^2(2s,2p)^8(3s,3p)^8(3d)^{10}(4s)^2$.
2. Untuk elektron $4s$:
   - Elektron sama di $4s$: $1 \\times 0.35 = 0.35$
   - Kulit $n-1 = 3$: $(8 + 10) \\times 0.85 = 15.30$
   - Kulit lebih dalam ($n=1,2$): $10 \\times 1.00 = 10.00$
   - Total $S = 0.35 + 15.30 + 10.00 = 25.65$
   - $Z_{\\text{eff}}(4s) = 30 - 25.65 = +4.35$.
3. Untuk elektron $3d$:
   - Elektron sama di $3d$: $9 \\times 0.35 = 3.15$
   - Kelompok di sebelah kiri: $18 \\times 1.00 = 18.00$
   - Total $S = 3.15 + 18.00 = 21.15$
   - $Z_{\\text{eff}}(3d) = 30 - 21.15 = +8.85$.
4. Karena elektron $4s$ mengalami tarikan inti netto yang jauh lebih lemah ($Z_{\\text{eff}} = +4.35$) dibandingkan elektron $3d$ ($Z_{\\text{eff}} = +8.85$), elektron $4s$ lebih mudah dilepaskan membentuk ion $\\ce{Zn^2+}$.`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['aturan-slater', 'zeff-slater', 'bilangan-kuantum', 'simpul-radial-sudut'],
    solution_framework_template: `1. Konfigurasi & Pengelompokan Kelompok Slater:
• Konfigurasi elektron Zn: ....
• Pembagian kelompok Slater (1s)(2s,2p)(3s,3p)(3d)(4s): ....

2. Perhitungan Zeff Elektron 4s:
• Kontribusi elektron sesama kelompok (4s): ....
• Kontribusi elektron kelompok (n-1): ....
• Kontribusi elektron kelompok lebih dalam: ....
• Total tetapan perisai S(4s): ....
• Nilai Zeff(4s) = Z - S: ....

3. Perhitungan Zeff Elektron 3d:
• Kontribusi elektron sesama kelompok (3d): ....
• Kontribusi elektron kelompok di sebelah kiri: ....
• Total tetapan perisai S(3d): ....
• Nilai Zeff(3d) = Z - S: ....

4. Kesimpulan & Penjelasan Ionisasi:
• Perbandingan nilai Zeff(4s) vs Zeff(3d): ....
• Alasan pelepasan elektron 4s mendahului 3d: ....`,
  },
  {
    id: 101,
    pillar_number: 3,
    module_id: 3,
    subtopic: 'Stoikiometri Gas & Tekanan Parsial',
    difficulty: 'OSK',
    title: 'Analisis Campuran Gas Hidrokarbon Metana & Propana',
    question_text: `Sebuah wadah tertutup bervolume $10.0\\text{ L}$ pada suhu $25.0^\\circ\\text{C}$ berisi campuran gas metana ($\\ce{CH4}$) dan propana ($\\ce{C3H8}$). Tekanan total campuran gas tersebut terukur sebesar $2.45\\text{ atm}$.

Campuran gas tersebut kemudian dibakar sempurna dengan oksigen berlebih sesuai persamaan reaksi berikut:
$$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$$
$$\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}$$

Setelah reaksi selesai dan suhu dikembalikan ke $25.0^\\circ\\text{C}$, uap air mengembun sempurna. Gas $\\ce{CO2}$ yang terbentuk dialirkan ke dalam larutan $\\ce{Ba(OH)2}$ berlebih sehingga terbentuk endapan putih barium karbonat ($\\ce{BaCO3}$) seberat $394.7\\text{ g}$.
(Diketahui: tetapan gas $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, massa molar $\\ce{BaCO3} = 197.34\\text{ g/mol}$).

**Pertanyaan:**
1. Hitung jumlah mol total campuran gas dalam wadah sebelum pembakaran!
2. Tentukan fraksi mol gas metana ($\\ce{CH4}$) dalam campuran awal!`,
    expected_final_answer: 'Fraksi mol CH4 = 0.50 (50%)',
    solution_rubric: `1. Menghitung mol total campuran gas dengan persamaan gas ideal:
   $n_{\\text{tot}} = \\frac{PV}{RT} = \\frac{2.45 \\times 10.0}{0.08206 \\times 298.15} = 1.00\\text{ mol}$.
2. Menghitung mol CO2 yang terbentuk dari massa endapan BaCO3:
   $n_{\\ce{CO2}} = n_{\\ce{BaCO3}} = \\frac{394.7\\text{ g}}{197.34\\text{ g/mol}} = 2.00\\text{ mol}$.
3. Misalkan $n_{\\ce{CH4}} = x$ dan $n_{\\ce{C3H8}} = y$:
   - $x + y = 1.00$
   - $x(1) + y(3) = 2.00 \\implies x + 3y = 2.00$
   - Mengeliminasi $x$: $2y = 1.00 \\implies y = 0.50\\text{ mol}$ propana.
   - $x = 0.50\\text{ mol}$ metana.
4. Fraksi mol metana: $X_{\\ce{CH4}} = \\frac{0.50}{1.00} = 0.50$.`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['stoikiometri', 'gas-ideal', 'pembakaran', 'fraksi-mol'],
    solution_framework_template: `1. Diketahui & Tetapan:
• Suhu sistem ($T$): ....
• Volume bejana ($V$): ....
• Tekanan gas total ($P_{\\text{tot}}$): ....
• Tetapan gas ideal ($R$): ....
• Massa molar endapan ($M_r$): ....
• Massa endapan yang terbentuk: ....

2. Persamaan Reaksi Setara:
• Reaksi pembakaran gas hidrokarbon 1: ....
• Reaksi pembakaran gas hidrokarbon 2: ....
• Reaksi pembentukan endapan: ....
• Rasio koefisien stoikiometri reaksi: ....

3. Perhitungan Mol & Analisis Aljabar:
• Rumus mol gas campuran ($n_{\\text{tot}} = \\frac{PV}{RT}$): ....
• Perhitungan mol endapan ($n = \\frac{m}{M_r}$): ....
• Pemodelan variabel ($x = \\text{mol gas 1}, y = \\text{mol gas 2}$): ....
• Persamaan 1 (mol campuran gas awal): ....
• Persamaan 2 (mol endapan $\\ce{CO2}$): ....
• Langkah eliminasi/substitusi nilai $x$ dan $y$:
  ....

4. Jawaban Akhir & Kesimpulan:
• Mol total campuran awal: ....
• Fraksi mol komponen gas yang ditanyakan: ....
• Verifikasi kelogisan nilai fraksi ($0 < X < 1$): ....`,
  },
  {
    id: 102,
    pillar_number: 4,
    module_id: 4,
    subtopic: 'Energi Bebas Gibbs & Kesetimbangan Termodinamika',
    difficulty: 'OSP',
    title: 'Disosiasi Termal Gas Dinitrogen Tetroksida',
    question_text: `Dinitrogen tetroksida mengalami disosiasi menjadi nitrogen dioksida sesuai reaksi kesetimbangan fasa gas:
$$\\ce{N2O4(g) <=> 2NO2(g)}$$

Data termodinamika standar pada suhu $298.15\\text{ K}$ adalah sebagai berikut:
- $\\Delta H_f^\\circ(\\ce{N2O4(g)}) = +9.16\\text{ kJ/mol}$, $S^\\circ(\\ce{N2O4(g)}) = 304.4\\text{ J/(mol}\\cdot\\text{K)}$
- $\\Delta H_f^\\circ(\\ce{NO2(g)}) = +33.18\\text{ kJ/mol}$, $S^\\circ(\\ce{NO2(g)}) = 240.1\\text{ J/(mol}\\cdot\\text{K)}$

(Tetapan gas $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$).

**Pertanyaan:**
1. Hitung nilai $\\Delta H^\\circ_{\\text{rxn}}$ dan $\\Delta S^\\circ_{\\text{rxn}}$ dari reaksi disosiasi tersebut pada $298.15\\text{ K}$!
2. Tentukan nilai $\\Delta G^\\circ_{\\text{rxn}}$ pada $298.15\\text{ K}$!
3. Hitung tetapan kesetimbangan $K_p$ pada $298.15\\text{ K}$!`,
    expected_final_answer: 'Kp = 0.141',
    solution_rubric: `1. $\\Delta H^\\circ_{\\text{rxn}} = 2(33.18) - 9.16 = +57.20\\text{ kJ/mol} = 57200\\text{ J/mol}$.
2. $\\Delta S^\\circ_{\\text{rxn}} = 2(240.1) - 304.4 = +175.8\\text{ J/(mol}\\cdot\\text{K)}$.
3. $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 57200 - (298.15 \\times 175.8) = 57200 - 52414.8 = +4785.2\\text{ J/mol} = +4.79\\text{ kJ/mol}$.
4. $K_p = e^{-\\Delta G^\\circ / RT} = e^{-4785.2 / (8.314 \\times 298.15)} = e^{-1.930} \\approx 0.145$ (toleransi 0.14 - 0.15).`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['termodinamika', 'entalpi', 'entropi', 'energi-gibbs', 'kesetimbangan-kp'],
    solution_framework_template: `1. Data Termodinamika Standar ($298.15\\text{ K}$):
• Entalpi pembentukan reaktan & produk ($\\Delta H_f^\\circ$): ....
• Entropi standar reaktan & produk ($S^\\circ$): ....
• Suhu sistem ($T$): ....
• Tetapan gas ideal ($R$): ....

2. Persamaan Reaksi Kesetimbangan:
• Persamaan reaksi disosiasi: ....
• Koefisien stoikiometri reaktan dan produk: ....

3. Perhitungan $\\Delta H^\\circ$, $\\Delta S^\\circ$, $\\Delta G^\\circ$ dan $K_p$:
• Rumus $\\Delta H^\\circ_{\\text{rxn}} = \\sum \\Delta H_f^\\circ(\\text{produk}) - \\sum \\Delta H_f^\\circ(\\text{reaktan})$: ....
• Rumus $\\Delta S^\\circ_{\\text{rxn}} = \\sum S^\\circ(\\text{produk}) - \\sum S^\\circ(\\text{reaktan})$: ....
• Rumus energi bebas Gibbs $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$: ....
• Hubungan tetapan kesetimbangan $\\Delta G^\\circ = -RT \\ln K_p$: ....
• Perhitungan nilai $K_p = e^{-\\Delta G^\\circ / RT}$: ....

4. Jawaban Akhir & Analisis:
• Nilai $\\Delta H^\\circ_{\\text{rxn}}$: ....
• Nilai $\\Delta S^\\circ_{\\text{rxn}}$: ....
• Nilai $\\Delta G^\\circ_{\\text{rxn}}$: ....
• Nilai $K_p$: ....
• Kesimpulan kespontanan reaksi: ....`,
  },
  {
    id: 103,
    pillar_number: 7,
    module_id: 7,
    subtopic: 'Persamaan Nernst & Sel Konsentrasi',
    difficulty: 'OSN',
    title: 'Penentuan Hasil Kali Kelarutan AgCl via Sel Galvani',
    question_text: `Suatu sel elektrokimia dirancang pada suhu $25.0^\\circ\\text{C}$ sebagai berikut:
$$\\ce{Ag(s) | Ag+(aq, 0.010 M) || Ag+(aq, saturated AgCl) | Ag(s)}$$

Di dalam kompartemen katoda, elektroda perak dicelupkan ke dalam larutan jenuh perak klorida ($\\ce{AgCl}$) yang belum diketahui konsentrasi ion peraknya. Potensial sel terukur adalah $E_{\\text{sel}} = -0.177\\text{ V}$ (atau jika dihubungkan berlawanan, beda potensial bernilai $0.177\\text{ V}$ dengan anoda sebagai larutan jenuh).

Diketahui: $E^\\circ(\\ce{Ag+/Ag}) = +0.799\\text{ V}$, $\\frac{2.303 RT}{F} = 0.0592\\text{ V}$ pada $298.15\\text{ K}$.

**Pertanyaan:**
1. Tuliskan persamaan setengah reaksi oksidasi, reduksi, dan reaksi sel keseluruhan!
2. Gunakan persamaan Nernst untuk menghitung konsentrasi ion $\\ce{Ag+}$ dalam larutan jenuh $\\ce{AgCl}$!
3. Tentukan nilai hasil kali kelarutan ($K_{sp}$) dari $\\ce{AgCl}$ pada suhu tersebut!`,
    expected_final_answer: 'Ksp = 1.0 x 10^-10',
    solution_rubric: `1. Reaksi sel: Anoda (larutan jenuh): $\\ce{Ag(s) -> Ag+(jenuh) + e-}$; Katoda: $\\ce{Ag+(0.010 M) + e- -> Ag(s)}$.
   Reaksi sel bersih: $\\ce{Ag+(0.010 M) -> Ag+(jenuh)}$.
2. $E^\\circ_{\\text{sel}} = 0\\text{ V}$ (sel konsentrasi).
   $E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.0592}{1} \\log \\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{[\\ce{Ag+}]_{\\text{anoda}}}$.
   $0.177 = -0.0592 \\log \\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{0.010}$.
   $\\log \\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{0.010} = -\\frac{0.177}{0.0592} = -2.99 \\approx -3.00$.
   $\\frac{[\\ce{Ag+}]_{\\text{jenuh}}}{0.010} = 10^{-3} \\implies [\\ce{Ag+}]_{\\text{jenuh}} = 1.0 \\times 10^{-5}\\text{ M}$.
3. Karena dalam larutan jenuh murni $\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)}$, maka $[\\ce{Cl-}] = [\\ce{Ag+}] = 1.0 \\times 10^{-5}\\text{ M}$.
   $K_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = (1.0 \\times 10^{-5})^2 = 1.0 \\times 10^{-10}$.`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['elektrokimia', 'nernst', 'sel-konsentrasi', 'ksp', 'redoks'],
    solution_framework_template: `1. Data Potensial Reduksi & Spesies Sel:
• Setengah reaksi katoda: ....
• Setengah reaksi anoda: ....
• Potensial sel terukur ($E_{\\text{sel}}$): ....
• Jumlah elektron yang terlibat ($n$): ....
• Tetapan Nernst ($\\frac{2.303 RT}{F}$): ....

2. Reaksi Sel & Potensial Sel Standar ($E^\\circ_{\\text{sel}}$):
• Persamaan reaksi sel keseluruhan: ....
• Potensial sel standar ($E^\\circ_{\\text{sel}}$): ....

3. Persamaan Nernst & Hasil Kali Kelarutan ($K_{sp}$):
• Bentuk persamaan Nernst: ....
• Substitusi data & perhitungan konsentrasi ion $[\\ce{Ag+}]_{\\text{jenuh}}$: ....
• Ekspresi kesetimbangan kelarutan garam: ....
• Perhitungan nilai $K_{sp}$: ....

4. Jawaban Akhir & Kesimpulan:
• Persamaan reaksi sel: ....
• Konsentrasi ion perak dalam larutan jenuh: ....
• Nilai $K_{sp}$: ....`,
  },
  {
    id: 104,
    pillar_number: 2,
    module_id: 2,
    subtopic: 'VSEPR Lanjutan, Aturan Bent, & MOT',
    difficulty: 'OSP',
    title: 'Prediksi Geometri & Kepolaran via Aturan Bent (Bent\'s Rule)',
    question_text: `Molekul klorin trifluorida ($\\ce{ClF3}$) dan sulfur tetrafluorida ($\\ce{SF4}$) merupakan contoh klasik molekul hipervalen dengan geometri dasar bipiramida trigonal ($AX_5$).

**Pertanyaan:**
1. Tentukan jumlah pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB) pada atom pusat $\\ce{ClF3}$ dan $\\ce{SF4}$!
2. Berdasarkan Aturan Bent (*Bent's Rule*), jelaskan penempatan posisi ligan elektronegatif ($\\ce{F}$) dan pasangan elektron bebas pada posisi ekuatorial vs aksial!
3. Tentukan bentuk molekul aktual serta deviasi sudut ikatan dari sudut ideal ($90^\\circ$ dan $120^\\circ$) akibat tolakan PEB!`,
    expected_final_answer: 'ClF3: Bent-T (sudut < 90°); SF4: Seesaw (sudut < 120° dan < 90°)',
    solution_rubric: `1. $\\ce{ClF3}$: Atom pusat Cl (7 e- valensi) + 3 ikatan Cl-F = 10 e- (5 domain: 3 PEI + 2 PEB, tipe $AX_3E_2$).
   $\\ce{SF4}$: Atom pusat S (6 e- valensi) + 4 ikatan S-F = 10 e- (5 domain: 4 PEI + 1 PEB, tipe $AX_4E$).
2. Aturan Bent: Karakter orbital $s$ terkonsentrasi pada ikatan dengan ligan elektropositif atau PEB. Posisi ekuatorial memiliki karakter $s$ lebih besar ($sp^2$, 33% $s$) dibanding posisi aksial ($pd$, 0% $s$). Karena PEB memerlukan karakter $s$ lebih besar untuk kestabilan, PEB selalu menempati posisi ekuatorial.
3. $\\ce{ClF3}$: 2 PEB di ekuatorial mendesak ikatan Cl-F aksial, menghasilkan bentuk molekul Huruf T Bengkok (*Bent T-shape*) dengan sudut $\\angle\\ce{F-Cl-F} \\approx 87.5^\\circ < 90^\\circ$.
   $\\ce{SF4}$: 1 PEB di ekuatorial mendesak ikatan S-F aksial dan ekuatorial, menghasilkan bentuk Jungkat-Jungkit (*Seesaw*) dengan sudut ekuatorial $\\approx 102^\\circ < 120^\\circ$ dan sudut aksial $\\approx 173^\\circ < 180^\\circ$.`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['vsepr', 'aturan-bent', 'geometri-molekul', 'momen-dipol', 'hibridisasi-orbital'],
    solution_framework_template: `1. Analisis Domain Valensi Atom Pusat:
• Elektron valensi atom pusat: ....
• Jumlah domain ikatan (PEI): ....
• Jumlah domain bebas (PEB): ....
• Tipe molekul VSEPR: ....

2. Aplikasi Aturan Bent:
• Perbandingan karakter orbital s ekuatorial vs aksial: ....
• Alasan peletakan PEB pada posisi ekuatorial: ....

3. Geometri Aktual & Deviasi Sudut:
• Bentuk molekul ClF3: ....
• Bentuk molekul SF4: ....
• Prediksi deviasi sudut ikatan: ....`,
  },
  {
    id: 105,
    pillar_number: 5,
    module_id: 5,
    subtopic: 'Kesetimbangan Asam-Basa & Larutan Penyangga',
    difficulty: 'OSK',
    title: 'Kapasitas Buffer Darah & Kesetimbangan Sistem Bikarbonat',
    question_text: `Sistem penyangga bikarbonat ($\\ce{H2CO3 / HCO3-}$) merupakan penyangga fisiologis utama dalam plasma darah mamalia untuk menjaga pH pada $7.40$. Diketahui nilai $pK_{a1}(\\ce{H2CO3}) = 6.10$ pada suhu fisiologis $37^\\circ\\text{C}$.

**Pertanyaan:**
1. Gunakan persamaan Henderson-Hasselbalch untuk menentukan rasio molar $[\\ce{HCO3-}] / [\\ce{H2CO3}]$ dalam plasma darah normal pada pH $7.40$!
2. Jika konsentrasi $[\\ce{HCO3-}]$ terukur sebesar $24.0\\text{ mmol/L}$, berapakah konsentrasi asam karbonat $[\\ce{H2CO3}]$ terlarut?
3. Jelaskan mengapa sistem penyangga ini sangat efektif dalam tubuh meskipun rasio komponen asam dan basanya sangat jauh dari $1:1$!`,
    expected_final_answer: 'Rasio [HCO3-]/[H2CO3] = 20:1; [H2CO3] = 1.20 mmol/L',
    solution_rubric: `1. Persamaan Henderson-Hasselbalch: $\\text{pH} = pK_a + \\log \\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]}$.
   $7.40 = 6.10 + \\log \\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]} \\implies \\log \\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]} = 1.30$.
   $\\frac{[\\ce{HCO3-}]}{[\\ce{H2CO3}]} = 10^{1.30} \\approx 20.0$ (rasio molar $20:1$).
2. $[\\ce{H2CO3}] = \\frac{[\\ce{HCO3-}]}{20.0} = \\frac{24.0\\text{ mmol/L}}{20.0} = 1.20\\text{ mmol/L}$.
3. Sistem ini merupakan sistem terbuka (*open system*): kelebihan asam dinetralkan oleh cadangan $\\ce{HCO3-}$ yang melimpah (rasio 20:1), menghasilkan $\\ce{H2CO3} \\to \\ce{CO2 + H2O}$, dan gas $\\ce{CO2}$ yang berlebih segera dieliminasi secara kinetik melalui paru-paru lewat respirasi.`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['larutan-penyangga', 'henderson-hasselbalch', 'asam-poliprotik', 'kesetimbangan-dinamis'],
    solution_framework_template: `1. Data & Persamaan Henderson-Hasselbalch:
• Nilai pH darah: ....
• Nilai pKa asam karbonat: ....
• Rumus logaritmik rasio basa/asam: ....

2. Perhitungan Rasio & Konsentrasi:
• Perhitungan log([HCO3-]/[H2CO3]): ....
• Rasio molar [HCO3-]/[H2CO3]: ....
• Konsentrasi terlarut [H2CO3]: ....

3. Analisis Biokimia & Fisiologis:
• Keunggulan sistem terbuka respirasi: ....`,
  },
  {
    id: 106,
    pillar_number: 6,
    module_id: 6,
    subtopic: 'Mekanisme Reaksi & Keadaan Tunak (SSA)',
    difficulty: 'OSN',
    title: 'Kinetika Dekomposisi Ozon via Steady-State Approximation (SSA)',
    question_text: `Dekomposisi termal ozon di fasa gas berlangsung sesuai persamaan reaksi stoikiometri:
$$2\\ce{O3(g) -> 3O2(g)}$$
Mekanisme reaksi elementer yang diajukan adalah:
- Tahap 1: $\\ce{O3(g) <=> O2(g) + O(g)}$ dengan tetapan laju $k_1$ (maju) dan $k_{-1}$ (balik).
- Tahap 2: $\\ce{O3(g) + O(g) -> 2O2(g)}$ dengan tetapan laju $k_2$.

**Pertanyaan:**
1. Identifikasi spesi zat antara (*reactive intermediate*) dalam mekanisme di atas!
2. Gunakan Pendekatan Keadaan Tunak (*Steady-State Approximation* / SSA) untuk menurunkan persamaan konsentrasi intermediet tersebut!
3. Buktikan persamaan hukum laju diferensial $-\\frac{d[\\ce{O3}]}{dt}$ dan tunjukkan orde reaksi terhadap $[\\ce{O2}]$ jika tahap balik jauh lebih cepat daripada tahap 2 ($k_{-1}[\\ce{O2}] \\gg k_2[\\ce{O3}]$)!`,
    expected_final_answer: 'r = 2 k1 k2 [O3]^2 / (k_-1 [O2] + k2 [O3]); Orde terhadap O2 = -1',
    solution_rubric: `1. Zat antara (intermediate) adalah atom oksigen radikal $\\ce{O(g)}$.
2. Laju pembentukan bersih zat antara $\\ce{O}$:
   $\\frac{d[\\ce{O}]}{dt} = k_1[\\ce{O3}] - k_{-1}[\\ce{O2}][\\ce{O}] - k_2[\\ce{O3}][\\ce{O}] = 0$ (kondisi tunak).
   $[\\ce{O}] = \\frac{k_1[\\ce{O3}]}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}$.
3. Laju konsumsi ozon:
   $-\\frac{d[\\ce{O3}]}{dt} = k_1[\\ce{O3}] - k_{-1}[\\ce{O2}][\\ce{O}] + k_2[\\ce{O3}][\\ce{O}]$.
   Dari neraca SSA: $k_1[\\ce{O3}] - k_{-1}[\\ce{O2}][\\ce{O}] = k_2[\\ce{O3}][\\ce{O}]$.
   Maka: $-\\frac{d[\\ce{O3}]}{dt} = 2k_2[\\ce{O3}][\\ce{O}] = \\frac{2k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}] + k_2[\\ce{O3}]}$.
   Jika $k_{-1}[\\ce{O2}] \\gg k_2[\\ce{O3}]$, maka penyebut didominasi oleh $k_{-1}[\\ce{O2}]$:
   $-\\frac{d[\\ce{O3}]}{dt} \\approx \\frac{2k_1 k_2 [\\ce{O3}]^2}{k_{-1}[\\ce{O2}]} = k_{\\text{obs}} [\\ce{O3}]^2 [\\ce{O2}]^{-1}$.
   Orde reaksi terhadap $\\ce{O2}$ adalah $-1$ (gas oksigen bertindak sebagai inhibitor).`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['keadaan-tunak-ssa', 'mekanisme-reaksi', 'hukum-laju', 'persamaan-arrhenius'],
    solution_framework_template: `1. Identifikasi Tahapan Elementer & Intermediet:
• Zat antara (intermediate): ....
• Persamaan laju pembentukan d[O]/dt: ....

2. Formulasi Steady-State Approximation:
• Kondisi d[O]/dt = 0: ....
• Ekspresi aljabar [O]: ....

3. Penurunan Hukum Laju Ozon:
• Persamaan -d[O3]/dt: ....
• Substitusi nilai [O]: ....
• Kasus batas k_-1[O2] >> k_2[O3]: ....
• Penentuan orde reaksi terhadap O2: ....`,
  },
  {
    id: 107,
    pillar_number: 8,
    module_id: 8,
    subtopic: 'Teori Medan Kristal (CFT) & Sifat Magnetik',
    difficulty: 'OSP',
    title: 'Energi Penstabilan Medan Kristal (CFSE) Kompleks Besi Oktahedral',
    question_text: `Dua kompleks oktahedral dari kation besi(II) yaitu $[\\ce{Fe(H2O)6}]^{2+}$ dan $[\\ce{Fe(CN)6}]^{4-}$ memiliki konfigurasi elektron ion pusat $\\ce{Fe^2+}$ yang sama yaitu $3d^6$.

**Pertanyaan:**
1. Gambarkan diagram pemisahan orbital $d$ ($t_{2g}$ dan $e_g$) dalam medan oktahedral untuk kedua ion kompleks tersebut!
2. Tentukan konfigurasi elektron, jumlah elektron tidak berpasangan, dan sifat kemagnetannya (paramagnetik atau diamagnetik)!
3. Hitung Energi Penstabilan Medan Kristal (*Crystal Field Stabilization Energy* / CFSE) untuk kedua ion kompleks dalam satuan $\\Delta_o$ dan energi perpasangan ($P$)!`,
    expected_final_answer: '[Fe(H2O)6]2+: High-spin (4 e- tak berpasangan, CFSE = -0.4 Δo); [Fe(CN)6]4-: Low-spin (0 e- tak berpasangan, CFSE = -2.4 Δo + 2P)',
    solution_rubric: `1. Pada medan oktahedral, orbital $d$ terbelah menjadi $t_{2g}$ (energi $-0.4\\Delta_o$) dan $e_g$ (energi $+0.6\\Delta_o$).
2. - $\\ce{H2O}$ adalah ligan medan lemah ($\\Delta_o < P$): kompleks berspin tinggi (*high-spin*), konfigurasi $t_{2g}^4 e_g^2$. Terdapat $4$ elektron tidak berpasangan, bersifat paramagnetik kuat ($n = 4$).
   - $\\ce{CN-}$ adalah ligan medan kuat ($\\Delta_o > P$): kompleks berspin rendah (*low-spin*), konfigurasi $t_{2g}^6 e_g^0$. Seluruh elektron berpasangan ($n = 0$), bersifat diamagnetik.
3. - $\\text{CFSE}[\\ce{Fe(H2O)6}]^{2+} = 4(-0.4\\Delta_o) + 2(+0.6\\Delta_o) = -1.6\\Delta_o + 1.2\\Delta_o = -0.4\\Delta_o$.
   - $\\text{CFSE}[\\ce{Fe(CN)6}]^{4-} = 6(-0.4\\Delta_o) + 0(+0.6\\Delta_o) + 2P = -2.4\\Delta_o + 2P$ (terdapat 2 pasang elektron tambahan dibanding keadaan ion gas bebas).`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['teori-medan-kristal', 'cft', 'deret-spektrokimia', 'spin-tinggi-rendah', 'cfse-stabilisasi'],
    solution_framework_template: `1. Konfigurasi Elektron Ion Pusat:
• Nomor atom & konfigurasi Fe: ....
• Konfigurasi ion Fe2+ (d6): ....

2. Penentuan Jenis Medan Ligan:
• Posisi H2O dalam deret spektrokimia (high-spin): ....
• Posisi CN- dalam deret spektrokimia (low-spin): ....

3. Pengisian Orbital & Kemagnetan:
• Konfigurasi orbital d [Fe(H2O)6]2+: ....
• Konfigurasi orbital d [Fe(CN)6]4-: ....
• Jumlah elektron tak berpasangan: ....
• Sifat kemagnetan: ....

4. Perhitungan Nilai CFSE:
• Formula CFSE = (-0.4 * n_t2g + 0.6 * n_eg) * Δo: ....
• CFSE [Fe(H2O)6]2+: ....
• CFSE [Fe(CN)6]4-: ....`,
  },
  {
    id: 108,
    pillar_number: 9,
    module_id: 9,
    subtopic: 'Spektrofotometri UV-Vis & Spektroskopi FT-IR',
    difficulty: 'OSK',
    title: 'Penentuan Kadar Analit via Hukum Lambert-Beer & Identifikasi IR',
    question_text: `Suatu larutan analit kalium permanganat ($\\ce{KMnO4}$) diukur absorbansinya pada panjang gelombang serapan maksimum $\\lambda_{\\text{max}} = 525\\text{ nm}$ menggunakan kuvet berpanjang jalur cahaya $b = 1.00\\text{ cm}$.
Larutan standar $\\ce{KMnO4}$ dengan konsentrasi $2.00 \\times 10^{-4}\\text{ M}$ menghasilkan nilai absorbansi $A = 0.468$.

**Pertanyaan:**
1. Hitung nilai koefisien absorptivitas molar ($\\varepsilon$) dari ion permanganat pada $\\lambda = 525\\text{ nm}$ beserta satuannya!
2. Suatu sampel limbah cair industri yang tidak diketahui kadarnya diuji pada instrumen dan kuvet yang sama, menghasilkan nilai absorbansi $A = 0.702$. Tentukan konsentrasi $\\ce{KMnO4}$ dalam sampel tersebut!
3. Pada spektrum inframerah (FT-IR) suatu senyawa organik teramati pita serapan tajam dan sangat kuat pada bilangan gelombang $1735\\text{ cm}^{-1}$ dan serapan $1240\\text{ cm}^{-1}$, tanpa adanya serapan lebar di daerah $3200-3600\\text{ cm}^{-1}$. Tentukan gugus fungsi yang paling konsisten dengan data spektrum tersebut!`,
    expected_final_answer: 'ε = 2340 L/(mol·cm); Konsentrasi sampel = 3.00 x 10^-4 M; Gugus fungsi: Ester (-COO-)',
    solution_rubric: `1. Hukum Lambert-Beer: $A = \\varepsilon \\cdot b \\cdot c$.
   $\\varepsilon = \\frac{A}{b \\cdot c} = \\frac{0.468}{(1.00\\text{ cm}) \\times (2.00 \\times 10^{-4}\\text{ mol/L})} = 2340\\text{ L}/(\\text{mol}\\cdot\\text{cm})$.
2. Konsentrasi sampel limbah:
   $c_{\\text{sampel}} = \\frac{A_{\\text{sampel}}}{\\varepsilon \\cdot b} = \\frac{0.702}{2340 \\times 1.00} = 3.00 \\times 10^{-4}\\text{ M} = 0.300\\text{ mM}$.
3. Pita tajam pada $1735\\text{ cm}^{-1}$ merupakan vibrasi ulur karbonil $\\ce{C=O}$ khas gugus ester (biasanya pada rentang $1735-1750\\text{ cm}^{-1}$), dan serapan kuat pada $1240\\text{ cm}^{-1}$ berasal dari vibrasi ulur $\\ce{C-O}$ ester. Ketiadaan serapan lebar di $3200-3600\\text{ cm}^{-1}$ memastikan tidak adanya gugus hidroksil (asam karboksilat/alkohol). Maka gugus fungsinya adalah Ester.`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['hukum-lambert-beer', 'absorbansi', 'spektroskopi-ir', 'titrasi-redoks'],
    solution_framework_template: `1. Formulasi Hukum Lambert-Beer:
• Rumus A = ε * b * c: ....
• Nilai panjang jalur cahaya b: ....
• Konsentrasi standar c: ....
• Perhitungan absorptivitas molar ε: ....

2. Penentuan Konsentrasi Analit Sampel:
• Nilai absorbansi sampel: ....
• Perhitungan c = A / (ε * b): ....

3. Interpretasi Spektrum FT-IR:
• Pita serapan 1735 cm^-1 (gugus C=O): ....
• Pita serapan 1240 cm^-1 (gugus C-O): ....
• Analisis ketiadaan pita OH: ....
• Kesimpulan identifikasi gugus fungsi: ....`,
  },
  {
    id: 109,
    pillar_number: 10,
    module_id: 10,
    subtopic: 'Stereokimia CIP & Mekanisme Substitusi Inversi Walden',
    difficulty: 'OSN',
    title: 'Stereokimia Inversi Walden Reaksi SN2 pada (2R)-2-Bromobutana',
    question_text: `Senyawa enantiomer murni $(2R)\\text{-2-bromobutana}$ direaksikan dengan nukleofil kuat natrium metoksida ($\\ce{NaOCH3}$) dalam pelarut polar aprotik dimetilformamida (DMF) menghasilkan produk substitusi utama $\\ce{C5H12O}$.

**Pertanyaan:**
1. Berdasarkan sifat substrat sekunder, kekuatan nukleofil, dan pelarut polar aprotik, tentukan apakah reaksi berjalan melalui mekanisme $\\text{S}_\\text{N}1$ atau $\\text{S}_\\text{N}2$!
2. Jelaskan keadaan transisi (*transition state*) yang terlibat dan bagaimana arah serangan nukleofil $\\ce{CH3O-}$ terhadap ikatan $\\ce{C-Br}$!
3. Berdasarkan aturan prioritas Cahn-Ingold-Prelog (CIP), tentukan konfigurasi stereokimia absolut ($R$ atau $S$) dari produk 2-metoksibutana yang dihasilkan, dan sebutkan fenomena stereokimia yang terjadi!`,
    expected_final_answer: 'Mekanisme: SN2; Konfigurasi Produk: (2S)-2-metoksibutana; Fenomena: Inversi Walden 100%',
    solution_rubric: `1. Reaksi didominasi oleh mekanisme $\\text{S}_\\text{N}2$ bimolekular murni karena metoksida ($\\ce{CH3O-}$) adalah nukleofil bermuatan kuat dan basa kuat, serta pelarut polar aprotik (DMF) tidak mensolvasi anion secara berlebih sehingga meningkatkan nukleofilisitas bebas dan menekan ionisasi karbokation $\\text{S}_\\text{N}1$.
2. Nukleofil $\\ce{CH3O-}$ menyerang atom karbon stereogenik dari arah belakang (*backside attack*) tepat $180^\\circ$ berlawanan dengan gugus pergi bromida ($\\ce{Br-}$). Keadaan transisi pentakoordinasi trigonal bipiramidal terbentuk dengan ikatan parsial $\\ce{CH3O...C...Br}$.
3. Serangan dari belakang menyebabkan pembalikan konfigurasi tiga dimensi menyerupai payung yang terbalik ditiup angin (*Inversi Walden*).
   Prioritas CIP pada produk 2-metoksibutana:
   (1) $-\\ce{OCH3} >$ (2) $-\\ce{CH2CH3} >$ (3) $-\\ce{CH3} >$ (4) $-\\ce{H}$.
   Karena posisi gugus pergi $\\ce{-Br}$ (prioritas 1 di reaktan) digantikan di sisi yang berlawanan oleh $\\ce{-OCH3}$ (prioritas 1 di produk) sementara prioritas gugus lainnya tidak berubah, konfigurasi $(2R)$ berbalik secara stereospesifik menghasilkan $(2S)\\text{-2-metoksibutana}$ ($100\\%$ stereoinversion).`,
    generation_type: 'manual',
    is_verified: true,
    tags: ['stereokimia', 'aturan-cip', 'substitusi-nukleofilik', 'inversi-walden', 'sn1-sn2'],
    solution_framework_template: `1. Analisis Faktor Mekanisme Reaksi:
• Pengaruh nukleofil kuat (CH3O-): ....
• Pengaruh pelarut polar aprotik (DMF): ....
• Kesimpulan mekanisme dominan (SN1 vs SN2): ....

2. Geometri Keadaan Transisi & Penyerangan:
• Arah serangan nukleofil terhadap gugus pergi (backside attack): ....
• Struktur keadaan transisi: ....

3. Penentuan Konfigurasi CIP & Stereokimia:
• Urutan prioritas gugus pada karbon kiral produk: ....
• Konfigurasi absolut produk substitusi: ....
• Nama fenomena stereokimia (Inversi Walden): ....`,
  },
];
