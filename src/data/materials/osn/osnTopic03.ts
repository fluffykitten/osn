/**
 * osnTopic03.ts
 * Topik 3: Stoikiometri & Wujud Zat
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_3: MaterialItem = {
  id: 3,
  topic_number: 3,
  title: 'Stoikiometri & Wujud Zat',
  slug: 'stoikiometri-wujud-zat',
  category: 'Stoikiometri Dasar',
  level: 'OSN-P',
  readTimeMinutes: 30,
  summary: 'Konsep mol lanjutan, pereaksi pembatas, persen hasil, persamaan gas ideal, gas nyata Van der Waals, efusi Graham, diagram fasa Clausius-Clapeyron, dan kristalografi sel satuan.',
  allTags: [
      'konsep-mol-massa-molar',
      'pereaksi-pembatas-persen-hasil',
      'stoikiometri-larutan-konsentrasi',
      'gas-ideal-teori-kinetik',
      'gas-nyata-van-der-waals',
      'hukum-efusi-difusi-graham',
      'diagram-fasa-clausius-clapeyron',
      'struktur-kristal-padat-unit-cell',
      'kristalografi-lanjutan-perovskite-xrd',
      'perovskite',
      'faktor-toleransi-goldschmidt',
      'kisi-hcp',
      'cacat-kristal',
      'hukum-bragg-xrd',
      'indeks-miller',
      'schottky-frenkel',
      'soal-campuran-gas',
      'soal-efusi-graham',
      'soal-van-der-waals',
      'soal-kristal-fcc',
      'soal-clausius-clapeyron',
      'stoikiometri',
      'konsep-mol',
      'pereaksi-pembatas',
      'gas-ideal',
      'van-der-waals',
      'spldv',
      'fraksi-mol',
      'pembakaran',
      'massa-molar',
      'tetapan-avogadro',
      'rumus-empiris-molekul',
      'persen-hasil',
      'penyetaraan-reaksi',
      'stoikiometri-larutan',
      'molaritas',
      'molalitas',
      'reaksi-pengendapan',
      'teori-kinetik-gas',
      'tekanan-parsial-dalton',
      'kecepatan-rms',
      'gas-nyata',
      'persamaan-van-der-waals',
      'faktor-kompresibilitas-z',
      'suhu-boyle',
      'hukum-graham',
      'efusi-gas',
      'difusi-gas',
      'maxwell-boltzmann',
      'diagram-fasa',
      'clausius-clapeyron',
      'titik-tripel',
      'entalpi-penguapan',
      'struktur-kristal',
      'sel-satuan-unit-cell',
      'kisi-bravais-fcc-bcc',
      'hukum-bragg',
      'soal-osk',
      'campuran-gas',
      'stoikiometri-pembakaran',
      'efusi-graham',
      'soal-osp',
      'soal-osn',
      'kristal-fcc',
      'densitas-kristal',
      'tekanan-uap-jenuh',
    ],
  prerequisites: [
    {
      tag: 'konsep-mol-massa-molar',
      tags: ["konsep-mol","massa-molar","tetapan-avogadro","rumus-empiris-molekul"],
      title: 'Prasyarat 1: Konsep Mol, Massa Molar, Avogadro, & Rumus Empiris/Molekul',
      summary: 'Fondasi kuantitatif konversi massa, jumlah partikel, persen massa unsur, dan rumus molekul pembakaran.',
      content: `Stoikiometri merupakan cabang kimia kuantitatif yang mempelajari hubungan massa dan jumlah partikel reaktan serta produk dalam reaksi kimia.

### 1. Definisi Mol & Tetapan Avogadro:
Satu mol didefinisikan sebagai jumlah zat yang mengandung partikel elementer (atom, molekul, ion, atau elektron) sebanyak atom yang terdapat dalam persis $12\\text{ gram}$ isotop karbon-12 ($\\ce{^{12}C}$).
Bilangan ini dinamakan **Tetapan Avogadro ($N_A$)**:
$$N_A = 6.02214 \\times 10^{23}\\text{ partikel/mol}$$

Hubungan dasar kuantitas mol ($n$):
$$n = \\frac{m}{M_r} = \\frac{N}{N_A}$$
di mana $m$ adalah massa zat (dalam gram), $M_r$ adalah massa molar (dalam $\\text{g/mol}$), dan $N$ adalah jumlah partikel.

---

### 2. Komposisi Persen Massa & Rumus Empiris vs Rumus Molekul:
1. **Persen Massa Unsur ($w_i$):**
   $$\\% w_i = \\frac{n_i \\cdot A_r(i)}{M_r(\\text{senyawa})} \\times 100\\%$$
2. **Rumus Empiris (RE):** Rumus perbandingan bilangan bulat terkecil antar-atom penyusun suatu senyawa.
3. **Rumus Molekul (RM):** Rumus kimia aktual yang menunjukkan jumlah atom nyata dalam satu molekul senyawa:
   $$\\text{Rumus Molekul} = (\\text{Rumus Empiris})_k \\implies M_r(\\text{RM}) = k \\times M_r(\\text{RE})$$
   di mana $k$ adalah bilangan bulat positif ($k = 1, 2, 3, \\dots$).

---

### 3. Analisis Pembakaran Hidrokarbon & Senyawa Organik ($\\ce{C_x H_y O_z}$):
Pada analisis elemental melalui pembakaran sempurna dengan gas oksigen berlebih:
$$\\ce{C_x H_y O_z} + \\left(x + \\frac{y}{4} - \\frac{z}{2}\\right)\\ce{O2} -> x\\ce{CO2} + \\frac{y}{2}\\ce{H2O}$$
- Seluruh atom karbon terkonversi menjadi gas $\\ce{CO2}$:
  $$m_{\\ce{C}} = m_{\\ce{CO2}} \\times \\frac{12.011}{44.01} \\implies n_{\\ce{C}} = \\frac{m_{\\ce{CO2}}}{44.01}$$
- Seluruh atom hidrogen terkonversi menjadi uap air $\\ce{H2O}$:
  $$m_{\\ce{H}} = m_{\\ce{H2O}} \\times \\frac{2.016}{18.015} \\implies n_{\\ce{H}} = 2 \\times \\frac{m_{\\ce{H2O}}}{18.015}$$
- Massa atom oksigen diperoleh dari selisih massa sampel awal:
  $$m_{\\ce{O}} = m_{\\text{sampel}} - (m_{\\ce{C}} + m_{\\ce{H}})$$
Perbandingan mol $n_{\\ce{C}} : n_{\\ce{H}} : n_{\\ce{O}}$ disederhanakan ke bilangan bulat terkecil untuk mendapatkan rumus empiris.`,
      keyFormulas: [
        { name: 'Rumus Konversi Mol', formula: 'n = \\frac{m}{M_r} = \\frac{N}{N_A}' },
        { name: 'Massa Molar Rumus Molekul', formula: 'M_r(\\text{RM}) = k \\cdot M_r(\\text{RE})' },
      ],
    },
    {
      tag: 'pereaksi-pembatas-persen-hasil',
      tags: ["pereaksi-pembatas","persen-hasil","penyetaraan-reaksi"],
      title: 'Prasyarat 2: Penyetaraan Reaksi, Pereaksi Pembatas, & Persen Hasil Reaksi',
      summary: 'Algoritma penentuan pereaksi pembatas, kuantifikasi reaktan sisa, dan efisiensi konversi hasil teoritis.',
      content: `Reaksi kimia harus memenuhi **Hukum Kekekalan Massa Lavoisier**, yakni jumlah atom setiap unsur di ruas kiri (reaktan) harus persis sama dengan ruas kanan (produk).

### 1. Algoritma Penentuan Pereaksi Pembatas (*Limiting Reactant*):
Dalam praktik laboratorium olimpiade, reaktan-reaktan jarang dicampurkan dalam rasio stoikiometri yang persis setara. Salah satu reaktan akan habis terlebih dahulu dan membatasi jumlah produk maksimum yang dapat terbentuk.

Untuk reaksi umum:
$$a\\ce{A} + b\\ce{B} -> c\\ce{C} + d\\ce{D}$$
Langkah sistematis:
1. Hitung jumlah mol awal masing-masing reaktan: $n_{\\ce{A}}$ dan $n_{\\ce{B}}$.
2. Bagi jumlah mol dengan koefisien reaksi masing-masing:
   $$\\text{Rasio A} = \\frac{n_{\\ce{A}}}{a} \\quad \\text{dan} \\quad \\text{Rasio B} = \\frac{n_{\\ce{B}}}{b}$$
3. **Pereaksi Pembatas:** Reaktan yang memiliki nilai rasio mol/koefisien **paling kecil**.
4. Jumlah mol produk yang terbentuk dan mol reaktan yang bereaksi sepenuhnya dihitung berdasarkan pereaksi pembatas tersebut.
5. **Mol Zat Sisa:**
   $$n_{\\text{sisa}} = n_{\\text{awal}} - n_{\\text{bereaksi}}$$

---

### 2. Konsep Hasil Teoritis, Hasil Aktual, & Persen Hasil:
- **Hasil Teoritis (*Theoretical Yield*):** Kuantitas produk maksimum yang dihitung secara stoikiometri dari pereaksi pembatas, dengan asumsi reaksi berlangsung sempurna ($100\\%$ efisiensi tanpa reaksi samping).
- **Hasil Aktual (*Actual Yield*):** Massa produk murni yang benar-benar diperoleh dari eksperimen nyata setelah proses isolasi dan pemurnian kristal/distilasi.
- **Persen Hasil (*Percent Yield*):**
   $$\\%\\text{ Hasil} = \\frac{\\text{Hasil Aktual (gram)}}{\\text{Hasil Teoritis (gram)}} \\times 100\\%$$

---

### 3. Kemurnian Sampel (*Sample Purity*):
Bila suatu bijih mineral atau reagen teknis tidak murni mengalami reaksi kuantitatif:
$$\\%\\text{ Kemurnian} = \\frac{m_{\\text{zat murni reaktif}}}{m_{\\text{sampel kotor}}} \\times 100\\%$$`,
      keyFormulas: [
        { name: 'Kriteria Pereaksi Pembatas', formula: '\\min\\left(\\frac{n_i}{\\nu_i}\\right)' },
        { name: 'Persen Hasil Reaksi', formula: '\\% \\text{Hasil} = \\frac{\\text{Hasil Aktual}}{\\text{Hasil Teoritis}} \\times 100\\%' },
      ],
    },
    {
      tag: 'stoikiometri-larutan-konsentrasi',
      tags: ["stoikiometri-larutan","molaritas","molalitas","reaksi-pengendapan"],
      title: 'Prasyarat 3: Stoikiometri Larutan, Satuan Konsentrasi, & Reaksi Pengendapan',
      summary: 'Konsep molaritas, molalitas, fraksi mol, pengenceran, dan analisis gravimetri kuantitatif.',
      content: `Sebagian besar reaksi kimia dalam olimpiade sains berlangsung dalam media larutan berair (*aqueous*).

### 1. Empat Satuan Konsentrasi Pokok:
1. **Molaritas ($M$):** Jumlah mol zat terlarut per liter larutan:
   $$M = \\frac{n}{V_{\\text{larutan (L)}}} = \\frac{m}{M_r} \\times \\frac{1000}{V_{\\text{larutan (mL)}}}$$
2. **Molalitas ($m$):** Jumlah mol zat terlarut per kilogram pelarut murni:
   $$m = \\frac{n}{m_{\\text{pelarut (kg)}}}$$
3. **Fraksi Mol ($X_i$):** Perbandingan jumlah mol suatu komponen terhadap jumlah mol total seluruh komponen dalam larutan:
   $$X_A = \\frac{n_A}{n_A + n_B + \\dots} \\implies \\sum X_i = 1$$
4. **Persen Massa (\\% b/b):**
   $$\\% w/w = \\frac{m_{\\text{terlarut}}}{m_{\\text{larutan total}}} \\times 100\\%$$
   *Hubungan Molaritas dengan Persen Massa dan Kerapatan Larutan ($\\rho$ dalam $\\text{g/mL}$):*
   $$M = \\frac{\\% w/w \\times \\rho \\times 10}{M_r}$$

---

### 2. Hukum Pengenceran:
Pada proses penambahan pelarut murni ke dalam larutan pekat, jumlah mol zat terlarut tidak berubah ($n_1 = n_2$):
$$V_1 \\cdot M_1 = V_2 \\cdot M_2$$

---

### 3. Stoikiometri Pengendapan & Gravimetri:
Analisis gravimetri mengukur massa endapan padat sukar larut yang terbentuk melalui reaksi metatesis ionik:
- Contoh: Penentuan kadar sulfat ($\\ce{SO4^2-}$) melalui pengendapan $\\ce{BaSO4(s)}$:
  $$\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)} \\quad (M_r = 233.39\\text{ g/mol})$$
- Penentuan kadar klorida ($\\ce{Cl-}$) melalui pengendapan $\\ce{AgCl(s)}$:
  $$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)} \\quad (M_r = 143.32\\text{ g/mol})$$
Massa analit dihitung menggunakan **Faktor Gravimetri (FG)**:
$$m_{\\text{analit}} = m_{\\text{endapan}} \\times \\text{FG} = m_{\\text{endapan}} \\times \\left(\\frac{a \\cdot A_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}\\right)$$`,
      keyFormulas: [
        { name: 'Molaritas Larutan', formula: 'M = \\frac{n}{V} = \\frac{\\% \\times \\rho \\times 10}{M_r}' },
        { name: 'Hukum Pengenceran', formula: 'V_1 M_1 = V_2 M_2' },
        { name: 'Faktor Gravimetri', formula: '\\text{FG} = \\frac{a \\cdot A_r(\\text{analit})}{b \\cdot M_r(\\text{endapan})}' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'gas-ideal-teori-kinetik',
      tags: ["gas-ideal","teori-kinetik-gas","tekanan-parsial-dalton","kecepatan-rms"],
      title: 'Konsep Inti 1: Hukum Gas Ideal, Tekanan Parsial Dalton, & Teori Kinetik Gas',
      summary: 'Persamaan keadaan gas ideal, densitas gas, fraksi mol campuran gas, dan kecepatan kuantum termal molekul gas.',
      content: `Gas ideal merupakan model termodinamika di mana partikel gas dianggap sebagai partikel titik tanpa volume bermassa yang tidak saling berinteraksi (tidak ada gaya tarik maupun tolak).

### 1. Persamaan Keadaan Gas Ideal:
Gabungan dari Hukum Boyle ($P \\propto \\frac{1}{V}$), Hukum Charles ($V \\propto T$), dan Hukum Avogadro ($V \\propto n$):
$$PV = nRT = \\left(\\frac{m}{M}\\right)RT$$

Nilai tetapan gas universal ($R$):
- $R = 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$
- $R = 8.31446\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 8.31446\\text{ Pa}\\cdot\\text{m}^3/(\\text{mol}\\cdot\\text{K})$
- $R = 62.364\\text{ L}\\cdot\\text{torr}/(\\text{mol}\\cdot\\text{K})$

Kerapatan (densitas) gas ideal ($\\rho$ dalam $\\text{g/L}$):
$$\\rho = \\frac{m}{V} = \\frac{P \\cdot M}{RT} \\implies M = \\frac{\\rho R T}{P}$$

---

### 2. Hukum Tekanan Parsial John Dalton:
Pada campuran gas ideal yang tidak saling bereaksi di dalam wadah bervolume tetap:
$$P_{\\text{tot}} = \\sum_{i=1}^k P_i = P_1 + P_2 + P_3 + \\dots$$
Tekanan parsial komponen ke-$i$ dinyatakan oleh fraksi molnya:
$$P_i = X_i \\cdot P_{\\text{tot}} = \\left(\\frac{n_i}{n_{\\text{tot}}}\\right) P_{\\text{tot}}$$

> **Aplikasi Eksperimental Penampungan Gas di Atas Air:**  
> Ketika gas hasil reaksi ditampung melalui pemindahan air (*water displacement*), gas yang terkumpul jenuh oleh uap air. Tekanan gas kering sesungguhnya adalah:
> $$P_{\\text{gas kering}} = P_{\\text{total (barometer)}} - P_{\\ce{H2O(g)}}^\\ast(T)$$
> di mana $P_{\\ce{H2O(g)}}^\\ast(T)$ adalah tekanan uap jenuh air pada temperatur eksperimen.

---

### 3. Teori Kinetik Gas (KMT) & Spektrum Kecepatan Molekuler:
Teori kinetik gas menghubungkan sifat makroskopis (tekanan dan suhu) dengan dinamika mikroskopis gerak partikel:
$$P = \\frac{1}{3} \\frac{N m_p}{V} \\overline{v^2}$$
Energi kinetik translasi rata-rata per molekul gas hanya bergantung pada temperatur mutlak:
$$\\overline{E}_k = \\frac{1}{2} m_p \\overline{v^2} = \\frac{3}{2} k_B T$$
di mana $k_B = \\frac{R}{N_A} = 1.38065 \\times 10^{-23}\\text{ J/K}$ adalah tetapan Boltzmann.

Tiga Kecepatan Karakteristik Molekul Gas:
1. **Kecepatan Akar Kuadrat Rata-Rata (*Root-Mean-Square Speed*, $v_{\\text{rms}}$):**
   $$v_{\\text{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3RT}{M}}$$
2. **Kecepatan Rata-Rata Aritmatika ($\\overline{v}$):**
   $$\\overline{v} = \\sqrt{\\frac{8RT}{\\pi M}}$$
3. **Kecepatan Paling Mungkin (*Most Probable Speed*, $v_{\\text{mp}}$):**
   $$v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$$
Perbandingan nilai kecepatan: $v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$ dengan rasio $1.000 : 1.128 : 1.225$.`,
      keyFormulas: [
        { name: 'Persamaan Gas Ideal', formula: 'PV = nRT = \\frac{m}{M}RT' },
        { name: 'Massa Molar dari Densitas Gas', formula: 'M = \\frac{\\rho R T}{P}' },
        { name: 'Tekanan Parsial Dalton', formula: 'P_i = X_i \\cdot P_{\\text{tot}}' },
        { name: 'Kecepatan RMS Molekul Gas', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}' },
      ],
    },
    {
      tag: 'gas-nyata-van-der-waals',
      tags: ["gas-nyata","persamaan-van-der-waals","faktor-kompresibilitas-z","suhu-boyle"],
      title: 'Konsep Inti 2: Gas Nyata Van der Waals, Faktor Kompresibilitas, & Temperatur Boyle',
      summary: 'Koreksi matematis gaya tarik coulombik antar-molekul dan volume eksklusi ruang partikel riil.',
      content: `Pada kondisi ekstrem (tekanan sangat tinggi dan temperatur sangat rendah mendekati titik kondensasi), gas riil menyimpang secara signifikan dari hukum gas ideal karena dua alasan mendasar:
1. Molekul gas nyata memiliki volume fisik tertentu (bukan partikel titik nol).
2. Terdapat gaya tarik-menarik elektrostatik antar-molekul (*intermolecular attractions / Van der Waals forces*).

---

### 1. Persamaan Keadaan Johannes Diderik van der Waals (1873):
Untuk $n$ mol gas nyata dalam wadah bervolume $V$:
$$\\left( P + \\frac{a n^2}{V^2} \\right)(V - nb) = nRT \\iff \\left( P + \\frac{a}{V_m^2} \\right)(V_m - b) = RT$$
di mana $V_m = \\frac{V}{n}$ adalah volume molar gas.

**Makna Fisik Parameter Van der Waals:**
- **Parameter $a$ (Koreksi Gaya Tarik Intermolekul):**
  Molekul-molekul gas saling tarik-menarik, sehingga tumbukan molekul pada dinding wadah menjadi lebih lembut dibanding gas ideal. Tekanan terukur ($P$) lebih kecil daripada tekanan ideal. Suku $\\frac{a n^2}{V^2}$ ditambahkan untuk mengoreksi reduksi tekanan ini. Satuan: $\\text{L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$ (atau $\\text{Pa}\\cdot\\text{m}^6\\cdot\\text{mol}^{-2}$).
- **Parameter $b$ (Koreksi Volume Ruang Eksklusi):**
  Molekul menempati ruang nyata sehingga volume bebas yang tersedia untuk pergerakan gas adalah $(V - nb)$, bukan $V$. Volume eksklusi untuk bola keras berjejari $r$ bernilai 4 kali volume fisik aktual partikel:
  $$b = 4 N_A \\left(\\frac{4}{3}\\pi r^3\\right)$$
  Satuan: $\\text{L}\\cdot\\text{mol}^{-1}$ (atau $\\text{m}^3\\cdot\\text{mol}^{-1}$).

---

### 2. Faktor Kompresibilitas ($Z$):
Penyimpangan gas nyata diukur secara kuantitatif melalui faktor kompresibilitas:
$$Z = \\frac{P V_m}{RT} = \\frac{P V}{nRT}$$
- **Untuk Gas Ideal:** $Z = 1$ pada semua temperatur dan tekanan.
- **Pada Tekanan Moderat ($Z < 1$):** Gaya tarik antar-molekul mendominasi ($a$), menarik molekul lebih dekat sehingga volume molar gas nyata lebih kecil dari ideal ($V_m < V_m^{\\text{ideal}}$).
- **Pada Tekanan Sangat Tinggi ($Z > 1$):** Molekul terdorong sangat rapat sehingga gaya tolak volume eksklusi molekul ($b$) mendominasi ($V_m > V_m^{\\text{ideal}}$). Gas menjadi sangat sukar dimampatkan.

---

### 3. Temperatur Boyle ($T_B$):
Temperatur khusus di mana gaya tarik intermolekul dan efek volume eksklusi saling meniadakan secara tepat pada limit tekanan mendekati nol, sehingga gas nyata mematuhi hukum gas ideal sepanjang rentang tekanan yang cukup lebar:
$$\\lim_{P \\to 0} \\left(\\frac{\\partial Z}{\\partial P}\\right)_T = 0 \\implies T_B = \\frac{a}{R \\cdot b}$$`,
      keyFormulas: [
        { name: 'Persamaan Gas Van der Waals', formula: '\\left(P + \\frac{a n^2}{V^2}\\right)(V - nb) = nRT' },
        { name: 'Faktor Kompresibilitas Z', formula: 'Z = \\frac{P V_m}{RT}' },
        { name: 'Temperatur Boyle', formula: 'T_B = \\frac{a}{R \\cdot b}' },
      ],
    },
    {
      tag: 'hukum-efusi-difusi-graham',
      tags: ["hukum-graham","efusi-gas","difusi-gas","maxwell-boltzmann"],
      title: 'Konsep Inti 3: Hukum Difusi & Efusi Graham serta Distribusi Maxwell-Boltzmann',
      summary: 'Rasio kinetik pelolosan molekul gas melalui orifis mikro, pemisahan isotopik, dan kurva probabilitas termal.',
      content: `Pergerakan molekul gas diatur oleh energi kinetik dan massa partikelnya. Dua fenomena kinetik yang sering diuji dalam olimpiade adalah difusi dan efusi.

### 1. Perbedaan Mendasar Difusi vs Efusi:
- **Difusi:** Proses perpindahan spontan molekul gas dari area konsentrasi tinggi ke area konsentrasi rendah melalui percampuran dengan molekul gas lain (terjadi tumbukan antar-partikel yang sangat sering).
- **Efusi:** Proses pelolosan molekul gas individual dari wadah bertekanan ke ruang hampa (*vacuum*) melalui sebuah lubang jarum / celah mikro (*pinhole orifice*) yang diameternya jauh lebih kecil daripada lintasan bebas rata-rata (*mean free path*) molekul gas, sehingga tidak terjadi tumbukan antar-molekul pada lubang tersebut.

---

### 2. Hukum Efusi Thomas Graham (1829):
Laju efusi suatu gas berbanding terbalik dengan akar kuadrat massa molarnya (atau kerapatannya pada suhu dan tekanan yang sama):
$$r \\propto \\frac{1}{\\sqrt{M}} \\propto \\frac{1}{\\sqrt{\\rho}}$$

Untuk perbandingan dua gas (Gas 1 dan Gas 2) pada kondisi $T$ dan $P$ identik:
$$\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{\\rho_2}{\\rho_1}} = \\frac{t_2}{t_1} = \\frac{v_1}{v_2}$$
di mana:
- $r_1, r_2$ = laju efusi (dalam $\\text{mol/s}$ atau $\\text{mL/s}$)
- $t_1, t_2$ = waktu yang dibutuhkan untuk mengevakuasi volume gas yang sama (dalam detik)
- $M_1, M_2$ = massa molar masing-masing gas (dalam $\\text{g/mol}$)

> **Aplikasi Strategis Pemisahan Isotop Nuklir:**  
> Prinsip efusi Graham digunakan pada Proyek Manhattan untuk memisahkan isotop fisil $\\ce{^{235}U}$ dari $\\ce{^{238}U}$ melalui efusi berulang gas uranium heksafluorida ($\\ce{UF6}$):
> $$\\frac{r(\\ce{^{235}UF6})}{r(\\ce{^{238}UF6})} = \\sqrt{\\frac{238 + 6(19)}{235 + 6(19)}} = \\sqrt{\\frac{352}{349}} \\approx 1.0043$$
> Pengayaan sebesar $0.43\\%$ per tahap diulang dalam ribuan kaskade membran berpori untuk menghasilkan bahan bakar reaktor nuklir.

---

### 3. Distribusi Kecepatan Maxwell-Boltzmann:
Fungsi kerapatan probabilitas fraksi molekul yang memiliki kecepatan antara $v$ dan $v + dv$:
$$f(v) = 4\\pi \\left( \\frac{M}{2\\pi RT} \\right)^{3/2} v^2 \\exp\\left( -\\frac{M v^2}{2RT} \\right)$$
Karakteristik kurva:
1. **Pengaruh Temperatur ($T$):** Semakin tinggi suhu gas, kurva melebar dan mendatar ke arah kanan (fraksi molekul berkecepatan tinggi bertambah).
2. **Pengaruh Massa Molar ($M$):** Gas yang lebih ringan (misal $\\ce{He}$ atau $\\ce{H2}$) memiliki kurva yang jauh lebih lebar dan bergeser ke kanan dibanding gas berat (seperti $\\ce{N2}$ atau $\\ce{Ar}$) pada suhu yang sama.`,
      keyFormulas: [
        { name: 'Hukum Efusi Graham', formula: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\frac{t_2}{t_1}' },
        { name: 'Faktor Pengayaan Efusi', formula: '\\alpha = \\sqrt{\\frac{M_{\\text{berat}}}{M_{\\text{ringan}}}}' },
      ],
    },
    {
      tag: 'diagram-fasa-clausius-clapeyron',
      tags: ["diagram-fasa","clausius-clapeyron","titik-tripel","entalpi-penguapan"],
      title: 'Konsep Inti 4: Wujud Zat, Diagram Fasa P-T, & Persamaan Clausius-Clapeyron',
      summary: 'Termodinamika transisi fasa materi, titik tripel, titik kritis, anomali kurva peleburan air, dan entalpi penguapan.',
      content: `Wujud fisik materi (padat, cair, atau gas) ditentukan oleh kompetisi antara energi kinetik termal partikel (yang cenderung mencerai-beraikan molekul) dan gaya tarik intermolekul (yang cenderung merapatkan molekul).

### 1. Diagram Fasa Tekanan-Temperatur ($P-T$):
Diagram fasa memetakan keadaan fasa stabil zat murni pada berbagai kombinasi tekanan ($P$) dan temperatur ($T$):
- **Garis Sublimasi:** Batas kesetimbangan padat $\\rightleftharpoons$ gas.
- **Garis Peleburan (*Melting Line*):** Batas kesetimbangan padat $\\rightleftharpoons$ cair.
- **Garis Penguapan (*Vaporization Line*):** Batas kesetimbangan cair $\\rightleftharpoons$ gas.
- **Titik Tripel ($T_{\\text{tp}}$):** Titik perpotongan unik ketiga garis kesetimbangan di mana ketiga fasa padat, cair, dan gas berada dalam kesetimbangan dinamis simultan ($F = 0$ menurut Aturan Fasa Gibbs $F = C - P + 2$). Untuk air: $T_{\\text{tp}} = 0.01^\\circ\\text{C}$ ($273.16\\text{ K}$) pada $P = 0.00603\\text{ atm}$ ($4.58\\text{ mmHg}$).
- **Titik Kritis ($T_c, P_c$):** Ujung atas kurva kesetimbangan cair-gas. Di atas titik kritis, densitas cairan dan gas menjadi identik sehingga antarmuka fasa lenyap membentuk **Fluida Superkritis**.

---

### 2. Anomali Kemiringan Kurva Peleburan Air vs Zat Normal:
Persamaan Clapeyron untuk kemiringan kurva kesetimbangan:
$$\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{trans}}}{T \\cdot \\Delta V_{\\text{trans}}}$$
- **Pada Kebanyakan Zat Murni (misal $\\ce{CO2}$):** Fasa padat lebih rapat dibanding fasa cair ($\\Delta V_{\\text{fus}} = V_{\\text{cair}} - V_{\\text{padat}} > 0$). Kemiringan kurva peleburan bergradien **positif** (miring ke kanan). Peningkatan tekanan menaikkan titik leleh zat.
- **Pada Air ($\\ce{H2O}$):** Es padat memiliki struktur kisi kristal heksagonal berongga terbuka akibat ikatan hidrogen terarah, sehingga densitas es padat ($0.917\\text{ g/mL}$) lebih kecil daripada air cair ($1.000\\text{ g/mL}$). Akibatnya, $\\Delta V_{\\text{fus}} < 0$, menghasilkan kemiringan kurva peleburan bergradien **negatif** (miring ke kiri)! Peningkatan tekanan menyebabkan es meleleh pada suhu di bawah $0^\\circ\\text{C}$.

---

### 3. Persamaan Rudolf Clausius & Émile Clapeyron:
Untuk transisi kesetimbangan cair-uap atau padat-uap, dengan mengasumsikan uap berperilaku sebagai gas ideal ($V_m(\\text{gas}) \\gg V_m(\\text{cair})$) dan entalpi penguapan $\\Delta H_{\\text{vap}}$ konstan:
$$\\frac{d(\\ln P)}{dT} = \\frac{\\Delta H_{\\text{vap}}}{R T^2}$$

Bentuk integral dua titik yang sangat populer dalam soal olimpiade:
$$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{T_2 - T_1}{T_1 \\cdot T_2}\\right)$$
di mana temperatur wajib dinyatakan dalam skala mutlak Kelvin (K) dan $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.`,
      keyFormulas: [
        { name: 'Kemiringan Clapeyron', formula: '\\frac{dP}{dT} = \\frac{\\Delta H}{T \\Delta V}' },
        { name: 'Persamaan Clausius-Clapeyron Dua Titik', formula: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
      ],
    },
    {
      tag: 'struktur-kristal-padat-unit-cell',
      tags: ["struktur-kristal","sel-satuan-unit-cell","kisi-bravais-fcc-bcc","hukum-bragg"],
      title: 'Konsep Inti 5: Struktur Kristal Zat Padat, Sel Satuan (Unit Cell), & Kisi Bravais',
      summary: 'Geometri kisi kristal logam SC, BCC, FCC, densitas teoritis kristalografi, dan faktor penumpukan atom (APF).',
      content: `Padatan kristalin tersusun dari partikel-partikel (atom, ion, atau molekul) yang berulang secara periodik dalam ruang 3 dimensi membentuk kisi kristal (*crystal lattice*). Unit terkecil yang merepresentasikan simetri keseluruhan kristal dinamakan **Sel Satuan (*Unit Cell*)**.

### 1. Tiga Tipe Sel Satuan Kubus Kristal Logam:

| Karakteristik Kristal | Kubus Sederhana (SC / Primitif) | Kubus Berpusat Badan (BCC) | Kubus Berpusat Muka (FCC / CCP) |
| :--- | :---: | :---: | :---: |
| **Posisi Atom** | 8 di sudut | 8 di sudut + 1 di pusat badan | 8 di sudut + 6 di pusat muka |
| **Jumlah Atom Netto per Sel Satuan ($n$)** | $8 \\times \\frac{1}{8} = \\mathbf{1}$ | $\\left(8 \\times \\frac{1}{8}\\right) + 1 = \\mathbf{2}$ | $\\left(8 \\times \\frac{1}{8}\\right) + \\left(6 \\times \\frac{1}{2}\\right) = \\mathbf{4}$ |
| **Bilangan Koordinasi (CN)** | $6$ | $8$ | $12$ (Penumpukan Terpadat) |
| **Hubungan Rusuk ($a$) dan Jari-Jari ($r$)** | $a = 2r$ | $a\\sqrt{3} = 4r \\implies a = \\frac{4r}{\\sqrt{3}}$ | $a\\sqrt{2} = 4r \\implies a = 2r\\sqrt{2}$ |
| **Faktor Penumpukan Atom (APF)** | $\\frac{\\pi}{6} \\approx \\mathbf{52.4\\%}$ | $\\frac{\\pi\\sqrt{3}}{8} \\approx \\mathbf{68.0\\%}$ | $\\frac{\\pi\\sqrt{2}}{6} \\approx \\mathbf{74.0\\%}$ |
| **Contoh Logam** | Polonium ($\\ce{Po}$) | $\\ce{Fe}(\\alpha), \\ce{Cr}, \\ce{Na}, \\ce{W}$ | $\\ce{Cu}, \\ce{Ag}, \\ce{Au}, \\ce{Al}, \\ce{Ni}$ |

---

### 2. Perhitungan Densitas Teoritis Kristal ($\\rho$):
Kerapatan massa kristal makroskopis identik dengan kerapatan satu sel satuan mikroskopis:
$$\\rho = \\frac{m_{\\text{sel satuan}}}{V_{\\text{sel satuan}}} = \\frac{n \\cdot M}{N_A \\cdot V_{\\text{cell}}} = \\frac{n \\cdot M}{N_A \\cdot a^3}$$
di mana:
- $n$ = jumlah atom netto dalam satu sel satuan ($1$ untuk SC, $2$ untuk BCC, $4$ untuk FCC)
- $M$ = massa molar zat (dalam $\\text{g/mol}$)
- $N_A$ = tetapan Avogadro ($6.022 \\times 10^{23}\\text{ mol}^{-1}$)
- $a$ = panjang rusuk sel satuan kubus (dalam $\\text{cm}$, dengan $1\\text{ pm} = 10^{-10}\\text{ cm}$ atau $1\\text{ \\AA} = 10^{-8}\\text{ cm}$)
- $\\rho$ = densitas kristal (dalam $\\text{g/cm}^3$)

---

### 3. Geometri Kisi Kristal Ionik Penting:
1. **Tipe $\\ce{NaCl}$ (Halit):**
   - Anion $\\ce{Cl-}$ membentuk kisi FCC ($n = 4$).
   - Kation $\\ce{Na+}$ menempati seluruh lubang oktahedral (1 di pusat badan $+ 12$ di rusuk $\\times \\frac{1}{4} = 4$).
   - Rasio stoikiometri $4:4 \\implies$ rumus $\\ce{NaCl}$. Bilangan koordinasi kation dan anion $= 6:6$.
   - Hubungan jarak antar-inti: $a = 2(r_+ + r_-)$.
2. **Tipe $\\ce{CsCl}$:**
   - Anion $\\ce{Cl-}$ berada di 8 sudut kubus primitif ($n=1$), kation $\\ce{Cs+}$ di pusat badan ($n=1$).
   - Bilangan koordinasi $= 8:8$.
   - Hubungan jarak: $a\\sqrt{3} = 2(r_+ + r_-)$.
3. **Tipe Zink Blende ($\\ce{ZnS}$):**
   - Anion $\\ce{S^2-}$ membentuk kisi FCC ($n=4$).
   - Kation $\\ce{Zn^2+}$ menempati separuh ($4$ dari $8$) lubang tetrahedral. Bilangan koordinasi $= 4:4$.`,
      keyFormulas: [
        { name: 'Densitas Sel Satuan Kristal', formula: '\\rho = \\frac{n \\cdot M}{N_A \\cdot a^3}' },
        { name: 'Hubungan Kisi FCC', formula: 'a\\sqrt{2} = 4r \\implies a = 2\\sqrt{2}r' },
        { name: 'Hubungan Kisi BCC', formula: 'a\\sqrt{3} = 4r \\implies a = \\frac{4r}{\\sqrt{3}}' },
        { name: 'Atomic Packing Factor', formula: '\\text{APF} = \\frac{n \\cdot \\frac{4}{3}\\pi r^3}{a^3}' },
      ],
    },
    {
      tag: 'kristalografi-lanjutan-perovskite-xrd',
      tags: [
        'kristalografi-lanjutan-perovskite-xrd',
        'perovskite',
        'faktor-toleransi-goldschmidt',
        'kisi-hcp',
        'cacat-kristal',
        'hukum-bragg-xrd',
        'indeks-miller',
        'schottky-frenkel',
      ],
      title: 'Konsep Inti 6: Kristalografi Lanjutan: Struktur Kisi Perovskite, Faktor Toleransi Goldschmidt, Kisi HCP & Difraksi Sinar-X (XRD)',
      summary:
        'Kajian komprehensif kristalografi material: sel satuan struktur perovskite ABO3, faktor toleransi geometris Goldschmidt (t), geometri susunan heksagonal terjejal (HCP), termodinamika cacat kristal Frenkel dan Schottky, serta prinsip difraksi sinar-X (XRD) Bragg dan aturan seleksi indeks Miller.',
      content: `### 1. Struktur Kristal Kisi Perovskite ($\\ce{ABO3}$):
Perovskite ideal (senyawa prototipikal $\\ce{CaTiO3}$ atau $\\ce{SrTiO3}$) mengkristal dalam sistem kisi kubus:
- **Kation A (Kation bervalensi rendah & berukuran besar, misal $\\ce{Ca^2+}, \\ce{Ba^2+}, \\ce{Pb^2+}$):**
  Menempati posisi sudut kubus ($8 \\times \\frac{1}{8} = 1$) atau pusat kubus, terkoordinasi oleh 12 anion oksigen (Bilangan Koordinasi $\\text{BK} = 12$, membentuk polihedron kuboktahedron).
- **Kation B (Kation logam transisi kecil bervalensi tinggi, misal $\\ce{Ti^4+}, \\ce{Zr^4+}, \\ce{Mn^4+}$):**
  Menempati pusat badan kubus ($1$) atau sudut kubus, terkoordinasi oleh 6 anion oksigen membentuk oktahedron $[\\ce{BO6}]$ (Bilangan Koordinasi $\\text{BK} = 6$).
- **Anion Oksigen ($\\ce{O^2-}$):**
  Menempati seluruh pusat rusuk kubus ($12 \\times \\frac{1}{4} = 3$) atau seluruh pusat muka kubus ($6 \\times \\frac{1}{2} = 3$), menjembatani oktahedron $[\\ce{BO6}]$ dengan sudut ikatan linear $\\angle \\ce{B-O-B} = 180^\\circ$.

---

### 2. Faktor Toleransi Goldschmidt (*Goldschmidt Tolerance Factor*, $t$):
Kestabilan dan distorsi geometri kisi perovskite diatur oleh rasio geometris jari-jari ionik kation dan anion:
$$t = \\frac{r_A + r_O}{\\sqrt{2}(r_B + r_O)}$$
- **$0{,}9 < t \\le 1{,}0$ (Perovskite Kubus Ideal):**
  Jari-jari kation A dan B pas sempurna mengisi rongga kisi. Contoh: $\\ce{SrTiO3}$ ($t \\approx 1{,}00$).
- **$0{,}71 < t < 0{,}90$ (Perovskite Terdistorsi / Ortorombik / Rombotedral):**
  Kation A terlalu kecil untuk rongga 12-koordinasi, menyebabkan oktahedron $[\\ce{BO6}]$ berotasi dan miring (*octahedral tilting*) untuk memperpendek jarak $\\ce{A-O}$. Sudut $\\angle \\ce{B-O-B} < 180^\\circ$. Contoh: $\\ce{CaTiO3}$ ($t \\approx 0{,}97$), $\\ce{GdFeO3}$.
- **$t > 1{,}0$ (Struktur Heksagonal / Fasa Ilmenit):**
  Kation A terlalu besar atau kation B terlalu kecil, mendorong pembentukan oktahedron $[\\ce{BO6}]$ yang berbagi muka (*face-sharing octahedra*). Contoh: $\\ce{BaNiO3}$.
- **$t < 0{,}71$:** Kation A dan B memiliki ukuran serupa, mengadopsi struktur korundum atau ilmenit ($\\ce{FeTiO3}$).

---

### 3. Geometri Kisi Heksagonal Terjejal (*Hexagonal Close-Packed* / HCP):
Kisi HCP dibentuk oleh penataan bola atom rapat dengan urutan lapisan selang-seling **ABABAB...**:
- Setiap atom bersentuhan langsung dengan 6 atom di lapisan yang sama, 3 atom di lapisan atas, dan 3 atom di lapisan bawah (Bilangan Koordinasi $= 12$).
- **Atomic Packing Factor (APF):** $\\text{APF} = \\frac{\\pi}{3\\sqrt{2}} \\approx 0{,}74$ ($74\\%$ volume ruang terisi rapat, identik dengan kisi FCC/CCP).
- **Rasio Sumbu Kisi Ideal ($c/a$):**
  Tinggi sel satuan heksagonal ($c$) dan panjang sisi heksagon ($a$) memiliki relasi matematis ideal:
  $$\\frac{c}{a} = \\sqrt{\\frac{8}{3}} = 2\\sqrt{\\frac{2}{3}} \\approx 1{,}633$$
  Jika rasio eksperimen $c/a < 1{,}633$ (seperti pada $\\ce{Ti}$ dan $\\ce{Mg}$), kisi mengalami kompresi aksial; jika $c/a > 1{,}633$ (seperti pada $\\ce{Zn}$ dan $\\ce{Cd}$), kisi mengalami elongasi aksial.

---

### 4. Termodinamika Cacat Kristal Non-Stoikiometri & Titik:
Kristal riil selalu mengandung cacat kisi termodinamika pada suhu $T > 0\\text{ K}$ karena pembentukan cacat meningkatkan entropi kisi ($\\Delta S > 0$):
1. **Cacat Schottky:**
   Pasangan kekosongan stokiometri (*stoichiometric vacancy pair*) kation dan anion yang hilang bersamaan meninggalkan kisi menuju permukaan. Densitas kristal menurun secara terukur tanpa mengubah bilangan oksidasi rata-rata kation. Lazim terjadi pada kristal ionik dengan rasio ukuran ion seimbang dan bilangan koordinasi tinggi (misal: $\\ce{NaCl}, \\ce{KCl}, \\ce{CsCl}$).
2. **Cacat Frenkel:**
   Perpindahan kation kecil dari posisi kisi normalnya menuju rongga interstisial terdekat, membentuk pasangan lubang kation-kation interstisial (*vacancy-interstitial pair*). Densitas kristal tetap konstan. Lazim terjadi pada kristal dengan perbedaan ukuran kation dan anion sangat mencolok serta sifat polarisabilitas tinggi (misal: $\\ce{AgCl}, \\ce{AgBr}, \\ce{ZnS}$).
3. **Pusat Warna (F-Center / *Farbe-Center*):**
   Kekosongan anion halogen dalam kisi kristal yang memerangkap elektron bebas. Transisi elektronik terperangkap ini menyerap cahaya tampak dan menghasilkan warna karakteristik (contoh: pemanasan uap $\\ce{Na}$ pada kristal bening $\\ce{NaCl}$ menghasilkan warna kuning pekat).

---

### 5. Difraksi Sinar-X (XRD) & Aturan Seleksi Indeks Miller ($hkl$):
Difraksi gelombang elektromagnetik sinar-X pada bidang kristal atomik memenuhi **Hukum Bragg**:
$$n\\lambda = 2d_{hkl} \\sin\\theta$$
di mana jarak tegak lurus antar-bidang kisi paralel $(hkl)$ pada kristal kubus bersisi $a$ adalah:
$$d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$$

**Aturan Seleksi Refleksi XRD Kisi Kubus:**
- **Kubus Primitif (SC):** Semua refleksi $(hkl)$ diizinkan ($h^2+k^2+l^2 = 1, 2, 3, 4, 5, 6, 8, \\dots$).
- **Kubus Berpusat Badan (BCC):** Refleksi hanya muncul jika jumlahan indeks Miller bernilai genap:
  $$h + k + l = 2n \\quad (\\text{contoh: } (110), (200), (211), (220), \\dots)$$
- **Kubus Berpusat Muka (FCC):** Refleksi hanya muncul jika indeks Miller bersifat unmixed (semua ganjil atau semua genap):
  $$h, k, l \\text{ semua ganjil ATAU semua genap} \\quad (\\text{contoh: } (111), (200), (220), (311), (222), \\dots)$$
Rasio kuadrat sinus sudut difraksi $\\sin^2\\theta_1 : \\sin^2\\theta_2 : \\dots$ memungkinkan penentuan jenis kisi kristal dan penentuan konstanta kisi $a$ secara presisi.`,
      keyFormulas: [
        { name: 'Faktor Toleransi Goldschmidt Perovskite', formula: 't = \\frac{r_A + r_O}{\\sqrt{2}(r_B + r_O)}' },
        { name: 'Rasio Sumbu Ideal Kisi HCP', formula: '\\frac{c}{a} = \\sqrt{\\frac{8}{3}} \\approx 1{,}633' },
        { name: 'Hukum Difraksi Bragg XRD', formula: 'n\\lambda = 2d_{hkl}\\sin\\theta' },
        { name: 'Jarak Antar-Bidang Kisi Kubus', formula: 'd_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}' },
      ],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-campuran-gas',
      tags: ["soal-osk","campuran-gas","stoikiometri-pembakaran"],
      title: 'Contoh Soal OSK 1: Analisis Kuantitatif Pembakaran Campuran Metana & Propana via SPLDV Stoikiometri',
      summary: 'Penyusunan sistem persamaan linear dua variabel (SPLDV) untuk memecahkan fraksi mol dan persen volume campuran gas hidrokarbon dari data tekanan bejana dan massa endapan barium karbonat.',
      content: `### Masalah Soal:
Sebuah wadah tertutup bervolume $10.0\text{ L}$ pada temperatur $25.0^\circ\text{C}$ ($298.15\text{ K}$) berisi campuran gas metana ($\ce{CH4}$) dan propana ($\ce{C3H8}$). Tekanan total campuran gas tersebut terukur sebesar $2.45\text{ atm}$.

Campuran gas tersebut kemudian dibakar sempurna dengan gas oksigen ($\ce{O2}$) berlebih sesuai reaksi pembakaran hidrokarbon. Setelah pembakaran selesai dan suhu sistem dikembalikan ke $25.0^\circ\text{C}$, seluruh uap air mengembun sempurna. Seluruh gas karbon dioksida ($\ce{CO2}$) yang dihasilkan dialirkan ke dalam larutan barium hidroksida ($\ce{Ba(OH)2}$) berlebih hingga terbentuk endapan putih barium karbonat ($\ce{BaCO3}$) seberat $394.7\text{ g}$.

*(Diketahui: $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, $A_r\\text{ Ba} = 137.33$, $A_r\\text{ C} = 12.01$, $A_r\\text{ O} = 16.00$, sehingga $M_r(\\ce{BaCO3}) = 197.34\\text{ g/mol}$)*.

**Pertanyaan:**
1. Tuliskan persamaan reaksi setara untuk pembakaran metana, pembakaran propana, dan reaksi pembentukan endapan barium karbonat!
2. Hitung jumlah mol total campuran gas metana dan propana mula-mula dalam bejana dengan menerapkan hukum gas ideal!
3. Hitung jumlah mol gas $\\ce{CO2}$ yang terbentuk berdasarkan massa endapan $\\ce{BaCO3}$!
4. Susunlah sistem persamaan linear dua variabel (SPLDV) neraca mol dan neraca atom karbon, lalu hitung mol masing-masing hidrokarbon serta fraksi mol gas metana ($\\ce{CH4}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menuliskan Persamaan Reaksi Setara dan Rasio Stoikiometri**  
Persamaan reaksi pembakaran sempurna hidrokarbon:
$$\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)}$$
$$\\ce{C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l)}$$

Reaksi pengendapan karbonat oleh barium hidroksida:
$$\\ce{CO2(g) + Ba(OH)2(aq) -> BaCO3(s) + H2O(l)}$$
Dari koefisien reaksi pengendapan, rasio mol $\\ce{CO2}$ terhadap endapan $\\ce{BaCO3}$ adalah $1 : 1$:
$$n_{\\ce{CO2}} = n_{\\ce{BaCO3}}$$

**Langkah 2: Menghitung Mol Campuran Gas Awal Menggunakan Hukum Gas Ideal**  
Gunakan persamaan keadaan gas ideal pada wadah mula-mula sebelum pembakaran:
$$P_{\\text{tot}} V = n_{\\text{tot}} R T$$
$$n_{\\text{tot}} = \\frac{P_{\\text{tot}} V}{R T} = \\frac{2.45\\text{ atm} \\times 10.0\\text{ L}}{0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 298.15\\text{ K}} = \\frac{24.5}{24.466} = 1.0014\\text{ mol} \\approx 1.00\\text{ mol}$$

**Langkah 3: Menghitung Mol Gas $\\ce{CO2}$ dari Analisis Gravimetri Endapan $\\ce{BaCO3}$**  
Kuantitas mol endapan $\\ce{BaCO3}$ yang tertimbang:
$$n_{\\ce{BaCO3}} = \\frac{m_{\\ce{BaCO3}}}{M_r(\\ce{BaCO3})} = \\frac{394.7\\text{ g}}{197.34\\text{ g/mol}} = 2.000\\text{ mol}$$
Karena $n_{\\ce{CO2}} = n_{\\ce{BaCO3}}$, maka jumlah mol total gas $\\ce{CO2}$ yang dihasilkan dari pembakaran campuran adalah:
$$n_{\\ce{CO2}} = 2.00\\text{ mol}$$

**Langkah 4: Penyusunan SPLDV Stoikiometri & Penentuan Fraksi Mol Metana**  
Misalkan:
- $x$ = jumlah mol gas metana ($\\ce{CH4}$) dalam campuran awal.
- $y$ = jumlah mol gas propana ($\\ce{C3H8}$) dalam campuran awal.

1. **Persamaan 1 (Neraca Mol Campuran Gas Awal):**
   $$x + y = n_{\\text{tot}} = 1.00\\text{ mol}$$

2. **Persamaan 2 (Neraca Mol Atom Karbon / $\\ce{CO2}$ Hasil Reaksi):**
   Setiap $1\\text{ mol } \\ce{CH4}$ menghasilkan $1\\text{ mol } \\ce{CO2}$, dan setiap $1\\text{ mol } \\ce{C3H8}$ menghasilkan $3\\text{ mol } \\ce{CO2}$:
   $$1x + 3y = n_{\\ce{CO2}} = 2.00\\text{ mol}$$

Selesaikan sistem persamaan dengan metode eliminasi:
$$\\begin{cases}
x + 3y = 2.00 \\\\
x + y = 1.00
\\end{cases}$$
Kurangkan persamaan pertama dengan persamaan kedua:
$$(x + 3y) - (x + y) = 2.00 - 1.00 \\implies 2y = 1.00 \\implies y = 0.50\\text{ mol } (\\ce{C3H8})$$

Substitusikan nilai $y$ ke Persamaan 1:
$$x = 1.00 - 0.50 = 0.50\\text{ mol } (\\ce{CH4})$$

Hitung fraksi mol gas metana ($X_{\\ce{CH4}}$):
$$X_{\\ce{CH4}} = \\frac{n_{\\ce{CH4}}}{n_{\\text{tot}}} = \\frac{0.50\\text{ mol}}{1.00\\text{ mol}} = 0.50 \\quad (50.0\\%)$$

**Kesimpulan Evaluator Juri:**  
Campuran awal tersusun atas $0.50\\text{ mol } \\ce{CH4}$ dan $0.50\\text{ mol } \\ce{C3H8}$. Fraksi mol gas metana adalah $0.50$ (atau $50.0\\%$ persen volume).`,
      keyFormulas: [
        { name: 'Mol Gas Ideal', formula: 'n_{\\text{tot}} = \\frac{PV}{RT}' },
        { name: 'Neraca Karbon Campuran', formula: 'n_{\\ce{CO2}} = 1\\cdot n_{\\ce{CH4}} + 3\\cdot n_{\\ce{C3H8}}' },
        { name: 'Fraksi Mol', formula: 'X_i = \\frac{n_i}{n_{\\text{tot}}}' },
      ],
    },
    {
      tag: 'soal-efusi-graham',
      tags: ["soal-osk","efusi-graham","hukum-graham"],
      title: 'Contoh Soal OSK 2: Penentuan Massa Molar Hidrokarbon Misterius via Hukum Efusi Graham & Distribusi Kinetik',
      summary: 'Aplikasi hukum efusi Graham untuk menentukan massa molar, rumus molekul alkana, serta kecepatan termal rms molekul gas.',
      content: `### Masalah Soal:
Suatu gas hidrokarbon murni tak dikenal ($X$) bervolume $150.0\\text{ mL}$ membutuhkan waktu $75.6\\text{ detik}$ untuk berefusi sempurna melalui suatu orifis mikro ke dalam ruang hampa. Pada kondisi temperatur dan tekanan yang persis sama, volume yang sama ($150.0\\text{ mL}$) gas oksigen murni ($\\ce{O2}$, $M_r = 32.00\\text{ g/mol}$) memerlukan waktu $56.1\\text{ detik}$ untuk berefusi melalui lubang mikro yang identik tersebut.

Analisis pembakaran terhadap $1.000\\text{ g}$ sampel hidrokarbon $X$ menghasilkan $3.029\\text{ g } \\ce{CO2}$ ($M_r = 44.01\\text{ g/mol}$) dan $1.550\\text{ g } \\ce{H2O}$ ($M_r = 18.02\\text{ g/mol}$).

**Pertanyaan:**
1. Tentukan massa molar ($M_r$) gas hidrokarbon $X$ berdasarkan data efusi Hukum Graham!
2. Tentukan rumus empiris dan rumus molekul dari senyawa hidrokarbon $X$!
3. Hitung kecepatan akar kuadrat rata-rata ($v_{\\text{rms}}$) molekul gas $X$ pada temperatur ruang $27.0^\\circ\\text{C}$ ($300.15\\text{ K}$)! ($R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).
4. Jelaskan secara teoritis mengapa waktu efusi berbanding lurus dengan akar massa molar ($t \\propto \\sqrt{M}$), sedangkan laju efusi berbanding terbalik ($r \\propto 1/\\sqrt{M}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Massa Molar Senyawa $X$ dari Rasio Waktu Efusi Graham**  
Laju efusi ($r$) berbanding terbalik dengan waktu efusi ($t$) untuk volume gas yang sama ($r = \\frac{V}{t}$). Berdasarkan Hukum Efusi Graham:
$$\\frac{r_1}{r_2} = \\frac{V/t_1}{V/t_2} = \\frac{t_2}{t_1} = \\sqrt{\\frac{M_2}{M_1}}$$

Terapkan untuk gas $X$ dan gas $\\ce{O2}$:
$$\\frac{t_X}{t_{\\ce{O2}}} = \\sqrt{\\frac{M_X}{M_{\\ce{O2}}}}$$
$$\\frac{75.6\\text{ s}}{56.1\\text{ s}} = 1.3476 = \\sqrt{\\frac{M_X}{32.00\\text{ g/mol}}}$$

Kuadratkan kedua ruas persamaan:
$$(1.3476)^2 = 1.8160 = \\frac{M_X}{32.00}$$
$$M_X = 1.8160 \\times 32.00\\text{ g/mol} = 58.11\\text{ g/mol} \\approx 58.1\\text{ g/mol}$$

**Langkah 2: Menentukan Rumus Empiris dan Rumus Molekul Senyawa $X$**  
Hitung mol atom $\\ce{C}$ dan atom $\\ce{H}$ dalam $1.000\\text{ g}$ sampel:
- Mol atom $\\ce{C}$:
  $$n_{\\ce{C}} = n_{\\ce{CO2}} = \\frac{3.029\\text{ g}}{44.01\\text{ g/mol}} = 0.06882\\text{ mol}$$
  $$m_{\\ce{C}} = 0.06882\\text{ mol} \\times 12.011\\text{ g/mol} = 0.8266\\text{ g}$$
- Mol atom $\\ce{H}$:
  $$n_{\\ce{H}} = 2 \\times n_{\\ce{H2O}} = 2 \\times \\frac{1.550\\text{ g}}{18.02\\text{ g/mol}} = 0.1720\\text{ mol}$$
  $$m_{\\ce{H}} = 0.1720\\text{ mol} \\times 1.008\\text{ g/mol} = 0.1734\\text{ g}$$

Verifikasi massa sampel hidrokarbon:
$$m_{\\ce{C}} + m_{\\ce{H}} = 0.8266 + 0.1734 = 1.000\\text{ g}$$
(Sampel murni hidrokarbon tanpa oksigen).

Perbandingan mol atom $\\ce{C} : \\ce{H}$:
$$\\frac{n_{\\ce{C}}}{n_{\\ce{H}}} = \\frac{0.06882}{0.1720} = \\frac{1}{2.499} \\approx \\frac{2}{5}$$
Rumus empiris senyawa adalah $(\\ce{C2H5})_k$ dengan massa molar empiris:
$$M_r(\\ce{C2H5}) = 2(12.011) + 5(1.008) = 29.06\\text{ g/mol}$$

Tentukan faktor pengali kelipatan ($k$):
$$k = \\frac{M_r(\\text{senyawa})}{M_r(\\text{RE})} = \\frac{58.11\\text{ g/mol}}{29.06\\text{ g/mol}} = 2.00 \\implies k = 2$$
Maka rumus molekul gas $X$ adalah:
$$(\\ce{C2H5})_2 = \\ce{C4H10} \\quad (\\text{Butana / Isobutana})$$

**Langkah 3: Menghitung Kecepatan RMS ($v_{\\text{rms}}$) pada Suhu $300.15\\text{ K}$**  
Gunakan persamaan Teori Kinetik Gas untuk kecepatan akar kuadrat rata-rata:
$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$
*Catatan Penting Satuan SI:* Massa molar $M$ wajib dinyatakan dalam $\\text{kg/mol}$ agar konsisten dengan satuan tetapan gas $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 8.314\\text{ kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}/(\\text{mol}\\cdot\\text{K})$:
$$M = 58.11\\text{ g/mol} = 0.05811\\text{ kg/mol}$$

$$v_{\\text{rms}} = \\sqrt{\\frac{3 \\times 8.314 \\times 300.15}{0.05811}} = \\sqrt{\\frac{7486.34}{0.05811}} = \\sqrt{128830.5} = 358.9\\text{ m/s}$$

**Langkah 4: Rasionalisasi Fisis Hubungan Laju dan Waktu Efusi**  
Laju efusi didefinisikan sebagai jumlah molekul yang meloloskan diri per satuan waktu ($r = \\frac{dN}{dt}$). Karena partikel dengan massa molar lebih besar bergerak dengan kecepatan rata-rata yang lebih lambat ($v \\propto 1/\\sqrt{M}$), frekuensi tumbukan molekul pada lubang mikro menjadi lebih jarang, sehingga laju efusi lebih kecil ($r \\propto 1/\\sqrt{M}$). Akibatnya, waktu ($t$) yang dibutuhkan untuk mengosongkan sejumlah volume gas yang sama menjadi berbanding terbalik dengan laju efusi ($t = \\frac{V}{r} \\propto \\frac{1}{1/\\sqrt{M}} = \\sqrt{M}$).

**Kesimpulan Evaluator Juri:**  
Gas $X$ memiliki massa molar $58.11\\text{ g/mol}$ dengan rumus empiris $\\ce{C2H5}$ dan rumus molekul butana ($\\ce{C4H10}$). Kecepatan termal $v_{\\text{rms}}$ partikel butana pada $300.15\\text{ K}$ adalah $358.9\\text{ m/s}$.`,
      keyFormulas: [
        { name: 'Hukum Efusi Graham (Waktu)', formula: '\\frac{t_1}{t_2} = \\sqrt{\\frac{M_1}{M_2}}' },
        { name: 'Kecepatan Termal RMS', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}' },
        { name: 'Faktor Kelipatan Rumus Molekul', formula: 'k = \\frac{M_r(\\text{RM})}{M_r(\\text{RE})}' },
      ],
    },
    {
      tag: 'soal-van-der-waals',
      tags: ["soal-osp","gas-nyata","persamaan-van-der-waals"],
      title: 'Contoh Soal OSP 3: Penyimpangan Gas Nyata Karbon Dioksida & Evaluasi Kompresibilitas Van der Waals',
      summary: 'Perbandingan komputasi tekanan gas riil CO2 menggunakan persamaan Van der Waals vs Hukum Gas Ideal pada kondisi kompresi tinggi serta interpretasi faktor kompresibilitas Z.',
      content: `### Masalah Soal:
Sebanyak $10.0\\text{ mol}$ gas karbon dioksida ($\\ce{CO2}$) dimampatkan ke dalam sebuah tabung baja bertekanan bervolume $2.00\\text{ L}$ pada temperatur kerja $47.0^\\circ\\text{C}$ ($320.15\\text{ K}$).

Parameter Van der Waals untuk gas $\\ce{CO2}$:
- $a = 3.592\\text{ L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}$
- $b = 0.0427\\text{ L}\\cdot\\text{mol}^{-1}$
- $R = 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$

**Pertanyaan:**
1. Hitung tekanan gas $\\ce{CO2}$ dalam bejana jika gas tersebut diasumsikan berperilaku ideal ($P_{\\text{ideal}}$)!
2. Hitung tekanan sesungguhnya dari gas $\\ce{CO2}$ dengan menggunakan Persamaan Keadaan Van der Waals ($P_{\\text{vdW}}$)!
3. Tentukan nilai faktor kompresibilitas ($Z$) gas pada kondisi tersebut dan jelaskan gaya intermolekuler apa yang mendominasi penyimpangan gas!
4. Tentukan temperatur Boyle ($T_B$) untuk gas $\\ce{CO2}$ dan jelaskan signifikansi fisiknya!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Tekanan Berdasarkan Model Gas Ideal**  
Dari persamaan keadaan gas ideal:
$$P_{\\text{ideal}} = \\frac{n R T}{V} = \\frac{10.0\\text{ mol} \\times 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 320.15\\text{ K}}{2.00\\text{ L}}$$
$$P_{\\text{ideal}} = \\frac{262.706\\text{ L}\\cdot\\text{atm}}{2.00\\text{ L}} = 131.35\\text{ atm}$$

**Langkah 2: Menghitung Tekanan Nyata Menggunakan Persamaan Van der Waals**  
Bentuk eksplisit tekanan dalam persamaan Van der Waals:
$$P_{\\text{vdW}} = \\frac{n R T}{V - n b} - \\frac{a n^2}{V^2}$$

Hitung masing-masing suku koreksi secara terpisah:
1. **Volume Bebas yang Tersedia ($V - n b$):**
   $$V - n b = 2.00\\text{ L} - (10.0\\text{ mol} \\times 0.0427\\text{ L/mol}) = 2.00 - 0.427 = 1.573\\text{ L}$$
2. **Suku Kinetik Terkoreksi Volume:**
   $$\\frac{n R T}{V - n b} = \\frac{262.706}{1.573\\text{ L}} = 167.01\\text{ atm}$$
3. **Suku Koreksi Kohesi Tarik-Menarik Antar-Molekul ($\\frac{a n^2}{V^2}$):**
   $$\\frac{a n^2}{V^2} = \\frac{3.592 \\times (10.0)^2}{(2.00)^2} = \\frac{3.592 \\times 100}{4.00} = \\frac{359.2}{4.00} = 89.80\\text{ atm}$$

Maka tekanan gas nyata Van der Waals adalah:
$$P_{\\text{vdW}} = 167.01\\text{ atm} - 89.80\\text{ atm} = 77.21\\text{ atm}$$

*Evaluasi Penyimpangan:*  
Tekanan nyata ($77.21\text{ atm}$) ternyata jauh lebih rendah dibandingkan prediksi gas ideal ($131.35\text{ atm}$).
- Deviasi relatif terhadap tekanan nyata: $\frac{131.35 - 77.21}{77.21} \times 100\% = 70.1\%$ (model ideal memperkirakan tekanan $70.1\%$ lebih tinggi dari tekanan nyata).
- Reduksi tekanan dari perkiraan ideal: $\frac{131.35 - 77.21}{131.35} \times 100\% = 41.2\%$ (tekanan aktual tereduksi $41.2\%$ akibat tarikan intermolekul).

**Langkah 3: Menghitung Faktor Kompresibilitas ($Z$) & Dominasi Gaya Antarmolekul**  
Faktor kompresibilitas $Z$ didefinisikan sebagai:
$$Z = \\frac{P_{\\text{vdW}} V}{n R T} = \\frac{77.21\\text{ atm} \\times 2.00\\text{ L}}{10.0\\text{ mol} \\times 0.082057 \\times 320.15\\text{ K}} = \\frac{154.42}{262.706} = 0.588$$

*Interpretasi Fisis Nilai $Z = 0.588 < 1$:*  
- Nilai $Z$ yang jauh lebih kecil dari $1$ mengindikasikan bahwa **gaya tarik-menarik intermolekuler (kohesi $a$) sangat mendominasi** dibandingkan efek volume eksklusi molekul ($b$).
- Molekul-molekul $\\ce{CO2}$ saling menarik saat berdekatan, memperlambat partikel saat mendekati dinding bejana sehingga impuls tumbukan dinding berkurang drastis ($89.80\\text{ atm}$ reduksi tekanan).

**Langkah 4: Menghitung Temperatur Boyle ($T_B$) Gas $\\ce{CO2}$**  
Temperatur Boyle adalah suhu di mana suku tarikan intermolekul dan tolakan volume eksklusi saling mengeliminasi pada kerapatan rendah:
$$T_B = \\frac{a}{R \\cdot b} = \\frac{3.592\\text{ L}^2\\cdot\\text{atm}\\cdot\\text{mol}^{-2}}{0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}) \\times 0.0427\\text{ L}\\cdot\\text{mol}^{-1}}$$
$$T_B = \\frac{3.592}{0.0035038} = 1025.2\\text{ K} \\quad (752.0^\\circ\\text{C})$$

*Signifikansi Fisik:*  
Pada temperatur $1025\\text{ K}$, gas $\\ce{CO2}$ akan berperilaku persis seperti gas ideal ($Z \\approx 1$) pada rentang tekanan rendah hingga moderat karena efek gaya tarik dan volume eksklusi molekul saling meniadakan secara presisi.

**Kesimpulan Evaluator Juri:**  
Pada kondisi kompresi tinggi, gas nyata $\\ce{CO2}$ menghasilkan tekanan aktual $77.21\\text{ atm}$ (jauh lebih rendah dari model ideal $131.35\\text{ atm}$) dengan faktor kompresibilitas $Z = 0.588$, membuktikan dominasi masif gaya tarik dispersi Van der Waals. Temperatur Boyle gas $\\ce{CO2}$ adalah $1025.2\\text{ K}$.`,
      keyFormulas: [
        { name: 'Tekanan Van der Waals', formula: 'P = \\frac{nRT}{V - nb} - \\frac{an^2}{V^2}' },
        { name: 'Faktor Kompresibilitas', formula: 'Z = \\frac{PV}{nRT}' },
        { name: 'Temperatur Boyle', formula: 'T_B = \\frac{a}{Rb}' },
      ],
    },
    {
      tag: 'soal-kristal-fcc',
      tags: ["soal-osn","kristal-fcc","tetapan-avogadro","densitas-kristal"],
      title: 'Contoh Soal OSN 4: Kristalografi Logam Emas (Au) FCC, Pembuktian Densitas, & Nilai Eksperimental Tetapan Avogadro',
      summary: 'Penentuan jari-jari atomik emas, faktor penumpukan atom (APF), pembuktian densitas teoritis kristal, dan penurunan nilai eksperimental tetapan Avogadro dari data difraksi sinar-X (XRD).',
      content: `### Masalah Soal:
Logam emas murni ($\\ce{Au}$, $M = 196.97\\text{ g/mol}$) mengkristal dalam kisi kristal kubus berpusat muka (*Face-Centered Cubic* / FCC). Pengukuran difraksi sinar-X (XRD) pada temperatur ruang menetapkan bahwa panjang rusuk sel satuan kubus emas adalah $a = 407.8\\text{ pm}$ ($4.078 \\times 10^{-8}\\text{ cm}$). Kerapatan makroskopis logam emas terukur sebesar $\\rho = 19.30\\text{ g/cm}^3$.

**Pertanyaan:**
1. Hitung jumlah atom emas netto ($n$) yang termuat di dalam satu sel satuan FCC!
2. Tentukan jari-jari atomik emas ($r$) dalam satuan pikometer (pm)!
3. Buktikan secara matematis bahwa Faktor Penumpukan Atom (*Atomic Packing Factor* / APF) untuk kristal FCC bernilai $\\frac{\\pi\\sqrt{2}}{6} \\approx 74.0\\%$!
4. Berdasarkan data difraksi sinar-X dan kerapatan tersebut, hitung nilai eksperimental Tetapan Avogadro ($N_A$) serta persentase galatnya terhadap tetapan resmi CODATA ($6.02214 \\times 10^{23}\\text{ mol}^{-1}$)!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menentukan Jumlah Atom Netto ($n$) dalam Sel Satuan FCC**  
Pada sel satuan kubus berpusat muka (FCC):
- **8 atom di sudut kubus:** Masing-masing sudut dibagi bersama oleh 8 sel satuan tetangga:
  $$8 \\times \\frac{1}{8} = 1\\text{ atom}$$
- **6 atom di pusat muka kubus:** Masing-masing atom di pusat muka dibagi bersama oleh 2 sel satuan yang berhimpitan:
  $$6 \\times \\frac{1}{2} = 3\\text{ atom}$$
Maka jumlah total atom emas netto dalam satu sel satuan adalah:
$$n = 1 + 3 = 4\\text{ atom/sel}$$

**Langkah 2: Menghitung Jari-Jari Atom Emas ($r$) dari Geometri Diagonal Muka**  
Pada kisi FCC, atom-atom berbentuk bola keras saling bersentuhan rapat di sepanjang diagonal muka kubus:
$$d_{\\text{muka}} = a\\sqrt{2} = 4r$$
Maka hubungan panjang rusuk sel satuan ($a$) dan jari-jari atom ($r$) adalah:
$$r = \\frac{a\\sqrt{2}}{4} = \\frac{a}{2\\sqrt{2}}$$

Substitusikan nilai rusuk $a = 407.8\\text{ pm}$:
$$r = \\frac{407.8\\text{ pm} \\times \\sqrt{2}}{4} = \\frac{407.8 \\times 1.41421}{4} = 144.18\\text{ pm} \\approx 144.2\\text{ pm}$$

**Langkah 3: Pembuktian Analitis Faktor Penumpukan Atom (APF) Kristal FCC**  
Faktor Penumpukan Atom didefinisikan sebagai rasio volume yang diisi oleh atom bola keras terhadap volume total sel satuan:
$$\\text{APF} = \\frac{V_{\\text{atom}}}{V_{\\text{cell}}} = \\frac{n \\times V_{\\text{bola}}}{a^3}$$

Karena terdapat $n = 4$ atom per sel satuan dan masing-masing bervolume $V_{\\text{bola}} = \\frac{4}{3}\\pi r^3$:
$$V_{\\text{atom}} = 4 \\times \\left(\\frac{4}{3}\\pi r^3\\right) = \\frac{16}{3}\\pi r^3$$

Dari hubungan $a = 2\\sqrt{2}r$, volume sel satuan kubus adalah:
$$V_{\\text{cell}} = a^3 = (2\\sqrt{2}r)^3 = 8 \\times 2\\sqrt{2} \\times r^3 = 16\\sqrt{2} r^3$$

Bagi kedua volume tersebut:
$$\\text{APF} = \\frac{\\frac{16}{3}\\pi r^3}{16\\sqrt{2} r^3} = \\frac{\\pi}{3\\sqrt{2}} = \\frac{\\pi\\sqrt{2}}{6}$$
Hitung nilai numeriknya:
$$\\text{APF} = \\frac{3.14159 \\times 1.41421}{6} = \\frac{4.44288}{6} = 0.7405 = \\mathbf{74.05\\%}$$
*(Terbukti secara matematis bahwa susunan FCC merupakan penumpukan terpadat maksimum/close-packed bersama dengan struktur HCP).*

**Langkah 4: Menghitung Nilai Eksperimental Tetapan Avogadro ($N_A$)**  
Hubungan kerapatan kristalografi:
$$\\rho = \\frac{m_{\\text{sel}}}{V_{\\text{cell}}} = \\frac{n \\cdot M}{N_A \\cdot a^3}$$

Hitung volume satu sel satuan dalam satuan $\\text{cm}^3$:
$$a = 407.8\\text{ pm} = 407.8 \\times 10^{-10}\\text{ cm} = 4.078 \\times 10^{-8}\\text{ cm}$$
$$V_{\\text{cell}} = a^3 = (4.078 \\times 10^{-8}\\text{ cm})^3 = 6.7820 \\times 10^{-23}\\text{ cm}^3$$

Susun persamaan untuk mencari $N_A$:
$$N_A = \\frac{n \\cdot M}{\\rho \\cdot V_{\\text{cell}}} = \\frac{4 \\times 196.97\\text{ g/mol}}{19.30\\text{ g/cm}^3 \\times 6.7820 \\times 10^{-23}\\text{ cm}^3}$$
$$N_A = \\frac{787.88}{1.30893 \\times 10^{-21}} = 6.0193 \\times 10^{23}\\text{ mol}^{-1}$$

Hitung persentase galat relatif terhadap standar CODATA ($6.02214 \\times 10^{23}\\text{ mol}^{-1}$):
$$\\%\\text{ Galat} = \\frac{|6.0193 \\times 10^{23} - 6.0221 \\times 10^{23}|}{6.0221 \\times 10^{23}} \\times 100\\% = \\frac{0.0028}{6.0221} \\times 100\\% = 0.046\\% \\approx \\mathbf{0.05\\%}$$

**Kesimpulan Evaluator Juri:**  
Kisi kristal emas FCC memiliki $n = 4$ atom per sel satuan dengan jari-jari atom $r = 144.2\\text{ pm}$ dan efisiensi ruang maksimum $\\text{APF} = 74.05\\%$. Perhitungan XRD dan kerapatan makroskopis menghasilkan nilai eksperimental Tetapan Avogadro $N_A = 6.019 \\times 10^{23}\\text{ mol}^{-1}$ dengan akurasi sangat tinggi (galat hanya $0.05\\%$).`,
      keyFormulas: [
        { name: 'Hubungan Rusuk dan Jari-Jari FCC', formula: 'a\\sqrt{2} = 4r \\iff r = \\frac{a\\sqrt{2}}{4}' },
        { name: 'APF Kristal FCC', formula: '\\text{APF} = \\frac{\\pi\\sqrt{2}}{6} \\approx 74.05\\%' },
        { name: 'Tetapan Avogadro dari XRD', formula: 'N_A = \\frac{n \\cdot M}{\\rho \\cdot a^3}' },
      ],
    },
    {
      tag: 'soal-clausius-clapeyron',
      tags: ["soal-osn","clausius-clapeyron","tekanan-uap-jenuh"],
      title: 'Contoh Soal OSN 5: Termodinamika Penguapan Etanol, Tekanan Uap, & Titik Didih Dataran Tinggi via Clausius-Clapeyron',
      summary: 'Aplikasi persamaan Clausius-Clapeyron dua titik untuk menentukan kalor penguapan molar (ΔHvap) dan meramalkan titik didih cairan di daerah dataran tinggi bertekanan rendah.',
      content: `### Masalah Soal:
Tekanan uap jenuh etanol murni ($\\ce{C2H5OH}$) terukur di laboratorium sebesar $100.0\\text{ mmHg}$ pada temperatur $34.9^\\circ\\text{C}$ ($308.05\\text{ K}$) dan sebesar $400.0\\text{ mmHg}$ pada temperatur $63.5^\\circ\\text{C}$ ($336.65\\text{ K}$).

*(Diketahui: $R = 8.3145\\text{ J}/(\\text{mol}\\cdot\\text{K})$, $1\\text{ atm} = 760.0\\text{ mmHg} = 101325\\text{ Pa}$)*.

**Pertanyaan:**
1. Hitung entalpi penguapan molar standar ($\\Delta H_{\\text{vap}}^\\circ$) etanol dengan mengasumsikan nilainya konstan sepanjang rentang temperatur tersebut!
2. Tentukan titik didih normal etanol pada tekanan atmosfer baku permukaan laut ($P = 1.000\\text{ atm} = 760.0\\text{ mmHg}$)!
3. Di suatu stasiun penelitian pegunungan Andes pada ketinggian $2500\\text{ meter}$, tekanan barometer udara terukur sebesar $0.750\\text{ atm}$ ($570.0\\text{ mmHg}$). Berapakah titik didih etanol di laboratorium pegunungan tersebut?
4. Mengapa makanan yang dimasak dalam air mendidih di wilayah dataran tinggi memerlukan waktu perebusan yang jauh lebih lama dibandingkan di daerah pesisir pantai? Jelaskan mekanisme termodinamika dan kinetika kimianya!

---

### Pembahasan & Langkah Kunci:

**Langkah 1: Menghitung Entalpi Penguapan Molar ($\\Delta H_{\\text{vap}}$) Etanol**  
Gunakan Persamaan Clausius-Clapeyron bentuk integral dua titik:
$$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

Substitusikan data eksperimen:
- $P_1 = 100.0\\text{ mmHg}$, $T_1 = 34.9 + 273.15 = 308.05\\text{ K}$
- $P_2 = 400.0\\text{ mmHg}$, $T_2 = 63.5 + 273.15 = 336.65\\text{ K}$

Hitung rasio tekanan uap:
$$\\ln\\left(\\frac{400.0}{100.0}\\right) = \\ln(4.000) = 1.38629$$

Hitung selisih invers temperatur:
$$\\frac{1}{T_2} - \\frac{1}{T_1} = \\frac{1}{336.65} - \\frac{1}{308.05} = 0.00297044 - 0.00324623 = -2.7579 \\times 10^{-4}\\text{ K}^{-1}$$

Selesaikan untuk mencari $\\Delta H_{\\text{vap}}$:
$$1.38629 = -\\frac{\\Delta H_{\\text{vap}}}{8.3145} \\times (-2.7579 \\times 10^{-4})$$
$$\\Delta H_{\\text{vap}} = \\frac{1.38629 \\times 8.3145}{2.7579 \\times 10^{-4}} = \\frac{11.5263}{2.7579 \\times 10^{-4}} = 41794\\text{ J/mol} = \\mathbf{41.79\\text{ kJ/mol}}$$

**Langkah 2: Menghitung Titik Didih Normal Etanol pada Tekanan $760.0\\text{ mmHg}$**  
Titik didih normal adalah suhu ketika tekanan uap jenuh zat cair tepat mencapai $1\\text{ atm} = 760.0\\text{ mmHg}$ ($P_3 = 760.0\\text{ mmHg}$).
Gunakan titik referensi kedua ($P_2 = 400.0\\text{ mmHg}, T_2 = 336.65\\text{ K}$):
$$\\ln\\left(\\frac{P_3}{P_2}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_b} - \\frac{1}{T_2}\\right)$$
$$\\ln\\left(\\frac{760.0}{400.0}\\right) = \\ln(1.900) = 0.64185$$

$$\\frac{1}{T_b} - \\frac{1}{T_2} = -\\frac{R \\cdot \\ln(P_3/P_2)}{\\Delta H_{\\text{vap}}} = -\\frac{8.3145 \\times 0.64185}{41794} = -1.2770 \\times 10^{-4}\\text{ K}^{-1}$$
$$\\frac{1}{T_b} = \\frac{1}{336.65} - 1.2770 \\times 10^{-4} = 0.00297044 - 0.00012770 = 0.00284274\\text{ K}^{-1}$$

Hitung nilai temperatur mutlak dan Celsius:
$$T_b = \\frac{1}{0.00284274} = 351.77\\text{ K}$$
$$t_b = 351.77 - 273.15 = \\mathbf{78.62^\\circ\\text{C}} \\approx 78.6^\\circ\\text{C}$$
*(Sangat konsisten dengan nilai eksperimen literatur kimia analitik: $78.37^\\circ\\text{C}$)*.

**Langkah 3: Menghitung Titik Didih Etanol di Dataran Tinggi ($P = 570.0\\text{ mmHg}$)**  
Pada dataran tinggi berketinggian $2500\\text{ m}$, tekanan barometer adalah $P_4 = 570.0\\text{ mmHg}$. Gunakan titik didih normal sebagai acuan ($P_3 = 760.0\\text{ mmHg}, T_3 = 351.77\\text{ K}$):
$$\\ln\\left(\\frac{P_4}{P_3}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_{\\text{alt}}} - \\frac{1}{T_b}\\right)$$
$$\\ln\\left(\\frac{570.0}{760.0}\\right) = \\ln(0.750) = -0.28768$$

$$\\frac{1}{T_{\\text{alt}}} - \\frac{1}{T_b} = -\\frac{8.3145 \\times (-0.28768)}{41794} = +5.7230 \\times 10^{-5}\\text{ K}^{-1}$$
$$\\frac{1}{T_{\\text{alt}}} = 0.00284274 + 0.00005723 = 0.00289997\\text{ K}^{-1}$$

Hitung titik didih di dataran tinggi:
$$T_{\\text{alt}} = \\frac{1}{0.00289997} = 344.83\\text{ K}$$
$$t_{\\text{alt}} = 344.83 - 273.15 = \\mathbf{71.68^\\circ\\text{C}} \\approx 71.7^\\circ\\text{C}$$
*Analisis:* Penurunan tekanan sebesar $25\\%$ di dataran tinggi menyebabkan penurunan titik didih etanol sebesar $6.9^\\circ\\text{C}$!

**Langkah 4: Analisis Kinetika Kimia Memasak di Dataran Tinggi**  
1. **Definisi Titik Didih:** Cairan mendidih ketika tekanan uap jenuhnya menyamai tekanan atmosfer eksternal ($P_{\\text{uap}} = P_{\\text{eksternal}}$). Selama mendidih, kalor yang diserap digunakan untuk transisi fasa laten tanpa menaikkan suhu cairan.
2. **Keterkaitan Kinetika Arrhenius:** Suhu air mendidih di dataran tinggi lebih rendah (misal air mendidih hanya pada $\\sim 91.5^\\circ\\text{C}$ di ketinggian $2500\\text{ m}$). Berdasarkan persamaan Arrhenius ($k = A e^{-E_a/RT}$), laju reaksi pematangan makanan (seperti pemutusan ikatan peptida, hidrolisis amilosa, dan denaturasi protein) menurun secara eksponensial dengan turunnya suhu. Akibatnya, waktu memasak yang diperlukan menjadi jauh lebih lama jika tidak menggunakan panci bertekanan (*autoclave/pressure cooker*).

**Kesimpulan Evaluator Juri:**  
Entalpi penguapan molar etanol adalah $41.79\\text{ kJ/mol}$ dengan titik didih normal $78.62^\\circ\\text{C}$. Di dataran tinggi bertekanan $0.750\\text{ atm}$, titik didih etanol terkoreksi turun menjadi $71.68^\\circ\\text{C}$ akibat rendahnya tekanan atmosfer penyeimbang tekanan uap jenuh.`,
      keyFormulas: [
        { name: 'Persamaan Clausius-Clapeyron Dua Titik', formula: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        { name: 'Koreksi Titik Didih', formula: '\\frac{1}{T_2} = \\frac{1}{T_1} - \\frac{R}{\\Delta H_{\\text{vap}}}\\ln\\left(\\frac{P_2}{P_1}\\right)' },
      ],
    },
  ],
};
